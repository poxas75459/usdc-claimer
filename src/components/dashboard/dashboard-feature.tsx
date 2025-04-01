/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "27nDarRypGkJAuxShvXJup74Aw1fPC3bS4wijDycEwcmtgy1wrxsyLF9GV8JykFSV6JGfozii9vUcJg7SMmApJox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpVkY44Xk9sHaN5hPmsSiAveThJMXpoxLDfXFJS7Ab4PCpRftGkvsMoyjsjmoA4tX3RaBpGGCSQLD8zUPtsWXYi",
  "key1": "4sac4yUEDGNdWo8TvsFU7AZM8vzMrSmWn3AAbmC5CM4bTpDnQ2oFzat1iEetcdbgeFpqVx9MNYmQvcLZKcrWcxaZ",
  "key2": "CsRnPVsSfkdNzqgJvwFNb6bHfNUj873cj69EEEj1m3KFRHUcQt6o26ZQg5XonohvoabjC3SwLuzkiMosQZ97njn",
  "key3": "eiUFpNACto8gqW6mrxxCLZvMWXrL7iBCFmm99uwk1rqH7uMrMNtJMtazkshHVcEa9rKHW5dS5ywnGh7h6WtAY1d",
  "key4": "2CYeLSmKHSWK2RUicrvF42Ue85BP7fULFaK1qbT89D8Vu5Vw4iTbZ4oPmhsjsh8L8jjsckqe4i8Z95cZG3JoChgd",
  "key5": "3cHfY7UvBubfpGk4M5qwCxtU3ZziuP98usdCqGijEenskbqWrhe4gjcJyLJbSR1Jj6EdfwjPANeoee41hLzCAixm",
  "key6": "456FK8zBurqMm775PGLb1coDvFzobADrRfEDDk2PCgn4w8wyEKw6K8CWJfjtxLdEcKRpyPmTvzGtsaFKoBzjQoCu",
  "key7": "3y2xH2tYqpuVX4NMHii3ZQnWTiQs3DjeY89FZcm9U2V9FTu9ciGDc5b7wdRazTW86JKrBJifeXxrCzfXCUPqpSUp",
  "key8": "44rLQrSDyfeRxUBQ8v23CAgPgbGwM4XSrqNDbHkMd45XSicBsGUPhoNNTJcLYU1iRqkw1xgyW6H6AU9tWuTJims7",
  "key9": "Pc22caGtWz2mvmZ67BdwoWurWDqbFaPfMiaM6KWBrfecFdrwgbWz1FCbtzDM6TyS1apqR4Ehvd5bAfvCUDKSQhH",
  "key10": "R3npesZqVLHUsdSaSZLGtigbdCTAZCEJK81zvL9nYvs1K9PRsuW18a7eJC7qKzGLefZtkMk5cHXWj5Yiwreoc1o",
  "key11": "4hYPRcbhcMcBMUUWqm7pZ2Nw6ijegiyVbvmFC6d9gtVwuybPNyKYAU9saJAcKBJxoRhQVc5ERqCSfkWuBehytuh9",
  "key12": "513EjLF38KnShzrLNA19EUMoA4mHS3PZ7tafQjNrx3X7g1K7q2ckbNaZWxDZzDymHrCyvfYeUDqBgJQitrUkjnGW",
  "key13": "3hirGGf29gnD9wmcyGHXfJBPQXiE5wyyz95GnWXap7WfcXgWcp8XyGKgXj4S8yiFVkWM2q9R8ekiH9Fh4a1LdA4F",
  "key14": "4XKbcBjTNgByE6KrQwDg9TrJQNqVbsYN7BHHnNuR8ZmuDXj3y4uH5t5ZTcaNjF1VThdb8fspjz8X61EE1RMyHX4x",
  "key15": "WTSKrJHufLTrJE6FrVxeimfyWwLZcoZSvhgNeK5TY9r7vNKYySCz1PoTLzst3AvjhAyStRgxiezeB7RB9vkwhe1",
  "key16": "27aavDq5xxESmCxC6eU87Jmck8VqMzdd3PcoEXJ2cYPzX2yJ4eAFTaQ2RzzxMPnakyQ2K8js9LfYG3uRhe8k3fBb",
  "key17": "5soenvZb13jCy3iRce4tXBDKibVauPYcxMj1hJterPQ29mD9EEbewUBPRVFkZ6tWM3CR3ZDtcyYVT8VgQgpvZSMC",
  "key18": "5FqcPUFDxhS5EU3VyuwUvdNA4NZW4EAuMtqf133NQHXr1pBvbQLykYXHg5gKrYuRmBJxiPamw5HZAZXFtaceb8Xu",
  "key19": "51LRkhit9TPnNefaSVhshtVGopMvFTx7wC19WaYHPhV83CTyN1E5oFAVLjSZSAxFHfTqbFSeMkpVXYXeQpANUdB2",
  "key20": "2uGnG54s2e2c3x8vre8b5ebSDcdJsuN7oFUcnmQxf5EipEXSucUsPonwUnQ4r5udbLjRBchM2Q5xseCfq3GeL9Xe",
  "key21": "5Y2NS9GkA8XUyHDfGAcUDkHFk8bVkK24XDgEKgPWgcRfKQPPasg24x2HaEt9ucx7GvRCybaVk6EvE1xktYYrPTU4",
  "key22": "5qrUmcrxtt1EQm9A32YiDvnGG5KDJMjGTNum72rghAXAYZEfKC2qNEveECbFVtrxVdLVdh3AayvX4ufEiGZ2fwAT",
  "key23": "47YSgNb3UwP3KLYjgepEYVCPrdcxsgog8E6hrNV2y2EHsPr7o6Ck4qA8uneU2fvnUZUhcA9oMiiFvwRaB5zYHMcG",
  "key24": "4i2P4tu3cTnLLQNxJ5ULEucFFkJJyjHes3Si27oT57NfmZTaLe4R2d7uzTbJpxWZdFvCUhqYRTETjasVrQkqaGyy",
  "key25": "u7yLE33bZ3io9Ap9LrNJ5nryqF7U6WdbdZf2C15QmStLQsUmYUa2gvuWJJs7nqEhS19YQMG1vHrpt3at95AAe6s",
  "key26": "2ND33pd8KVQZMDVmxcGJL58qpeN6o1A7pwQF23u3uB7NRXtrtfkLS2xLHDMj2LKsDDVQuv4ooSweHD6JCcCzdT9T",
  "key27": "64mMjQNV8HPZwFkGBKcBMpwhgKwc8iGStbB8Vo6PexzZuQW12H3zxKZXK3zMwh1t35CQP9mUzwys89Ehf4Zg8WQg",
  "key28": "91DXDvEy8uyqAJE1n2JpfFFkvDtejE1CbHGqpRrrvzwk4QfrF7wjbmwSCS2w2fRDdaV8eJWD92cmV4hNGETGjVC",
  "key29": "AHMqzk2aQcinZ7kB9TBvve5PXss3PfCT7PrSyYAiP71B8BeBudHnDhvoD5bbgSd3WRcZ4R85oxncTBqPBFzaHqw",
  "key30": "3P7UJ3PceBmGkCh43GBHbH6pK5cq32GPuJAAfRJqgERvoAM5tnKtuteL7UR4g7uXPo63xVqzVULfcNXFJxWzx7Lv",
  "key31": "SopYYajQP597rBu2prKxpVnovXybFws8NyR8EuJvGwqrcduU8FHj1HoY5yADWtQtfMhwsxzY1nv3yrZYioZ9xkC",
  "key32": "3xTwbEL3E2t5SEadVee7oTpVb3qgXZGTwZaj7mA53o9ce8wn33v17d3QAKeuhutVnddj7xcL9q52eD4wvkKF6cWD",
  "key33": "3yeLBwfCcPAoZeJCT47B5eM66UaW8BGr7AoFzqKbe6Sxmmw2TKEf1LLRKB48ngd2TJ3tynV3xBPSqgqqNHfQa1B",
  "key34": "5XYJnoYwLV2RnmX8r4J82yKLkRqPzhwVt7uNduTBJjZajPg9GSagZHtFjQSiKQFz59oYtsCATcpzHyZkcVmFJ7mZ",
  "key35": "GPBtm1iukoCSVSHxkvBpZBwLo98cjew7BfegC2jw233ubW8iGHGYwfJsZMvpCnZ9weL4CBtXTHJ8L6Hrg3wt3U5",
  "key36": "XmvtrujuVrJ6RHumbrP515ceY58BNScbmcGBEnBopcitF1SdyQNgtgMqb3i6RmV9JgEsFA8JF6PWatSZFF7bxs1",
  "key37": "5yv4fwEqUj6CtpQoVwU5DQqVDYGgFZEfk3sE9hkkJDfa69RnUxcJmHBam5kr8zWezVvm9XyZRqvMtPti3Lkbpab8",
  "key38": "fTkFUpDu2zyazyzd5wrPsXMwsbV6gjgtr2dudAyS4UWsp47ELToSyocL4YBu2cG7zmC3AwJ5yLGdpRY6rowmcNL",
  "key39": "61yD9HLuRFTvYea2aboXYy3tzLAPtHdKzfw4btVeUo7R1eESc7pKtH5w3eRZeQXoBu9snjVMiZuH2rixkA9pndLK",
  "key40": "2beBwRzrfKPATSApJ4V8jbtJ7erhExD32TE69nXMRNaQqUrTR4zJz32dEfyWp8mrMP9zwXSRFCpv5s1aqEo5oCca",
  "key41": "WuxnUSmAFkjzw7YqiUGQLY59QrT23qu9eWgkWcJE1Wfqr6nQQwbTfBgRZbj3UGvaeVSkEZoH1JVpG25StHoJCB5",
  "key42": "2pmvQGyetSk7yTZ5VjH5TG1ppF82YAZkZer3cGrE6zRZpy4FUGwS5W6JY1pWWAVtVdTqCqJ4QZ6YQG6XyyCVotLa"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
