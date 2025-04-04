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
    "FHW7HicvKM4sBHGGYVtZJqu9T5LT9y9Cc8RCPWVizBtXwx9hdQ3q98CyGtqy85TKW64Zvi4jfgaetHBeM9um8Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkFBXXwJQdTz9Ua5xhNBGGz717uKXq7sNVqhdEXUqonyB2bpFBSHohQVGJ1RaPkb63ZE37dryGjkXsGpsLNg8uu",
  "key1": "ge87CuWR2EgX9YDzPmscaRPaiKE9gNpVHpFsPRJRqWfdi4Uph4yPmY5fx8nLyjqf9ZAi8nTMZRh4eEAd5wv4gdU",
  "key2": "4sVGL6xepuq8nAhcC56R9h99Uu8Cq1PRZzCh5cbJvVgxKKDGMPtZhAcwf99NopuB7GwUpUGgbcM4ER2hxj5z7rpU",
  "key3": "tMhhranD8CUzhwtCf7qKXYBNaFh15F59ribyfGWQ43NA7ftEX6dowCzitWEHx7jJH64M7cF4PkWuChkc1NxGJqr",
  "key4": "66vzDg2zMGQVZdXhbRHbTmwaB9tW6voaa7tiafY668bqQsjvMuTCWJiW8vBLV4EuzxB7Kg625gp29yrZjtBMEuYD",
  "key5": "4rhsFhTyPiwr6DNTcvA6MbzL3WzsdRhXvFothcFiJMqFj3bhjSquWZhT7tTZWuFz4FiRZKRcq2MaoAF4TG8ScdJR",
  "key6": "3a3NEfrGt62nBANb86ZuHJdiMWMwzFZjKj3h1CRx9TFivA7jak9SJmCAoyGanxxmzbxTtdmh4PD2pjYtNj6iP1EV",
  "key7": "5386H9M7YQ7ugGdqMp9uJ5LuAMrWHkbobwQr5r7tVpr6WWPwHQGKPYDBfc9f4rv5hex19vgHKbz4GAZsbPi5D88Q",
  "key8": "5W2pTK8XhC4sFawBigDMsZDfDhffiJVhBAVct1kt3SJvFyZMCTp7JenrrZjCNqDQ1odSQMNJLmvL7Khs56Hyc1Ag",
  "key9": "6moSukQvM8ykqSCpGD4yGJFV3g87RN7PyEgBcakjRj7ZzAziP5fiiaeTn1WgcftBTG75pqJXWJXcsZJHfczMDGa",
  "key10": "54jKCZMYEisUUcQbvmmvXTqirkpxXa9u3ZK9XDXVNaS4a86YxVBrk5JCy6FZypd85sV46CBFigHKiypZFBeZdG8d",
  "key11": "5G9iBcSZbvMNJL5cex9p3CfgwfxiBV52c3AH9uMgRt8yPDNQwiMPJ46SdR3A4yanUzjW4jLDhbvxt8W7GdzRq1R9",
  "key12": "3Gkw1xdCMrKMwcPoBUSwK5MTy9TXzB5xu6GtwieqeEnuBxb7SCYi5wbGgEmR2KaC1iZV5H7VjSvLynQrtAVeXTf6",
  "key13": "2wdEjsFunLxC3DDpnPTs6iUansczHy11WLg8mkcTeMuaSt8JUSQnxZCfjxGqa81WsBv2vveVzGnMjcnYCKVxYR7s",
  "key14": "5zrFXnDAU2LwN5iC6LDdm3nS1tHYUf2tF6jVVn6vPLiSuBJ51hbUUUPPkp4Wucm7zAfqQRdZaALqaybM9fuEiUa6",
  "key15": "gds6Wv6VBFCNgfAXAJHazvQDnWTuNtutPUB7ceuCknwLDJwLierqsEKMKSGmjBd2btAoomuKT33R1UuqQT1Tm2F",
  "key16": "5fKUf3moi81Yn1T8BaCwqFSNftGWPD6fCvTdm8KHiDnZyFsEA3eKCsWucXz7BZ5uEPwzzaqgux4fWyEF7CZesunn",
  "key17": "3J4xdAgW4ixNdHbVm4WVSZbkKKyzcrf5Zg2VDJC7KJtFowhqYPANARdTGBBXysVnGL2qYx2JhoDWXGiG62rWzws6",
  "key18": "u5FohequCHTa2DyEGWB5T8Xeqn3dDLgUm1b7Ubo41PdQfZfR6Mrq9uxAuBYUWkDBtJkaz1HyLPWDrrhBeZ3t8Jq",
  "key19": "8mhubmyNZYbH9tDRicBuWQqPmPScJ9zAaKhvwyBNu3AqumAnktCYBGTWfpWhxov8xctWk2uESEC58Ec4qWARLDo",
  "key20": "4skwVSTnT1aLh3Q2Pjd3UFLeWh6vCBi1Psc2qR7PfGmgHun51ko1uz11FHUqUphwA2QUnB8VVSR1B6dW1QTxhgmR",
  "key21": "BXZ6YAbZwn5mT5H9LcsajVEf5mmByM3DRHgDHZFVsyvvuvzLUrob27LaLdPDRRRstsuy9P4GqNp8rFjbyQHpuEc",
  "key22": "3Wfqcz3wV6WThYF3fR6k3BCJVdx7vnrWUofSb61CU2gp3sLka9Pb2zi3rm8nBTKuJiCHi2nExbKBVvFMNg46AQFg",
  "key23": "RETWsx6FFVjSkf4B3ZNHx2mo1zetPUeoREDMruNVWFs5HFURHJM6ft2PhgXteRk7Pzp8dcsEqCLsZcLcgnNuFbM",
  "key24": "3EAWSuLcPGx5gBdiuL8X15ep4phbkAU271vQzQj78XfD79e7xMUwo3poTmn8UD2X3FXU1z68nPK1A1bGx5DUnVF4",
  "key25": "4coN6yuKgyrcHMRv4Nb9sLxmC7wovZH9dED7N5XeW4erzF2nMnav1jHme98Fz2q44Jr85cEpr6S56WC7EZZiFiJB",
  "key26": "555VNsAodt4Ymm2kvHz9zRcBkqwZvWvLh3cGUZszneg2phoQG87tyPvXPuxvTzSZArU5yNge8DxkqSjXSeEw8Yhy",
  "key27": "3ZyWVUuYSo6cMUHHEUYjLEuKjxDPK6wq1E2EFzzLa2KTCChhHaCv6eGWH9PNW54TSJ7wTHDJaTEDv8JTuPsEwDcn",
  "key28": "5krB2MdUEWEr9H7nBUMiFU5xSGZ4y4npRCRWpYMCf8ACqGcxzEEcBdiKXE7wV6qnt5AE63p9ggVDJXg8ufdNuDrv",
  "key29": "4VkreGvy6wqtfoSM1kjaQcre7WmCMtSK7b83ihFKCYECx7FnqvuQFKAYPHhNCCDQioXEujGX3TX6qXTXWd8qxyWm",
  "key30": "34BpA2eWtj6yjYpcJ98pYrzRUbk8VrEA8DxX4vmc9MPKXSGWEgMNucs8ZRm3WM1DfSZS1CttSJKKHSSW75VHxNwk",
  "key31": "3QKGBu2Ef61cSv5zMV53SGi7PdY1hrjZR36odafETR6nwprP6W8kehTCmUqXHSHPFr1Ydwi4EjNrAK66GqJ3sYMV",
  "key32": "3cAQxdUv4WRKybKfyDP9BXUKSaBxc73NXtrHuc9nKt8Bk958pHjpHmxQw6qSd1fScAkAQRTsuwdtaDTzneBDUPAh",
  "key33": "Wg14o8BDH94A3urNVRDioU9AnnaZnn2uM57U9TJYFK7d8JJxj2FGatwATbnZT5JzBzFQU1XFJxqWn2FDeJiVXcF",
  "key34": "3u8buAUN2R7FRMryAcXTTSWPy1W7QRUfUye7He1oz626Rerx2nvaUtgAdLDf3DZyUnTQPgDiunctcSEKbihSKyYC",
  "key35": "3ginx5mSmWQQFGe7bVDGxeULdVmH42ttpSTm836BPAqy2jkUiXMrKHR9kjaCkaBmFfykYttruLmEhUtxNmcB34X5",
  "key36": "KvrCZzg4Gdy6EziKMKGyH4bNHK39c7ff76h6x34w2y3E2PrCWNCrAvhE9ZmBTsnnVJvCi8suvcr5AgEJ5cq36pE",
  "key37": "7YnCBAN5wnGA6edj9tCERAaXBt9hUZmtdvbaLPAhW9KQ1keV5ZpAjEK29jQJ2tRMEU7Q3d9QuLH9UsfHKckeWpA",
  "key38": "5razN9pPNEXLxNx7bJRHgZRvVTV6z5DFpg593skCjsmQkPHVrdZJZp6eyPV4wNNeNWyXQLdyqnFsaS6rmoA9zmJw",
  "key39": "EvvnMG1TjF1Qetr1ehY3CwCfWNPGffdYeB5pbkucGNLmtC7grPzJA4zmLD3LPrbwhjrzdLgLsJdnJ5E9p9edNaX",
  "key40": "xrLzdg6563VpXqkWLSNneuCCeHFXDd3Y55nFVpAJS7kLHqqpCjYn1cYxAKYVDf22fY9FrJyDVsXc212iR8S9mKR",
  "key41": "4CbYMPDARtQc1yC7fsGV56WfFPJjYHEtLQWWXXNK4HSEYDFxzDeZrodj76EihU37R5Fgdb7yM5SexofYtFDr9Q2Y",
  "key42": "48kALJyCNx4LhjFoGQnqgdy4eLnHMns1bREzTRZacNa5hT21PLjqCRxQWJ86MrWx2WPimCwYj3AAhDTvNA31mYra"
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
