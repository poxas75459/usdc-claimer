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
    "2Q9kqdzDmdXr72saqVt2brFg9Xi7tczpaYYGwPoCnWCyN3negqn7fMq3UWSxfy9DP5Cdq783ca5iHXJ7YaUvP999"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPCetQeuYx2FH7durdxfYGjji55D9HYdNHWsjvWTS94kXyja3zKmmz5juXiGoeJAUJh4GvQUoukqXeceAenR7jp",
  "key1": "3mqpQayKFNKxapxuhjmZtxoGoSgdRm4Yy1UZSZ3GnsbknxiJs4XByy8iGifH4RRmarmM8kDZABDVc8C4tX8CLt3H",
  "key2": "3izTbtP9nd4yNhkV7NvNRvFRMB867FrXTiwPE8aYNPnVtYjPb3upxfK9yZuNBAZDB3cDjX252xBiz8nn9r8FjnAU",
  "key3": "2tndVB5HiGHA3UzsVxzV6oxFwmmiNJBkFxqFrtCRCfhjgeaZ6zvv2p8YuTzypVBeT4TtekNrEJgsHHRTeBoZF6cy",
  "key4": "3KowXGaU4eL6rYQnpHT1Z6KtQPostC4DD8KZcXmUcEG8F1uYB9AAnGj7dq5W95tDzEBxLUPbAm1nuYG1zZEh4jD4",
  "key5": "24aZZkRwdceUjQjjy7JjrJiz6DsoYc9SRssgXwjEuY1oypHiHAVJXaJqwvJCPLkodCwvRezySgKi9vNZZjdbi1wp",
  "key6": "2AyzWMi7YpfwZKpkTvCt4Yy7KPJ2NLDnSubDEEEuQhRuTa7irCMdnxH3rD5YGNRWNpxvoagwidmeaxeRfproKLR2",
  "key7": "41d9m2Gp42xW6AQPrdGyC7bCCv6pi3Zm3caKf7bxjUtQnEekDBfeLdqx3v2kXBBzdRLdx8qbXD6STKYZbjF4KwHz",
  "key8": "29A59Mvp9vrfksKnBsbU7kzwVPocDihWcEbowQFid13aHaLpHihriLHuqYUXEqbH1BpphfnJmxSLU8HcJkWFFS2m",
  "key9": "9vVyqPjP24FS95VfqxQ61qVybtGSwRwx3nM4N1PidrkMFrVWQwENE3mrchECw9iFJfyGXFatmGquVPb8FC7C3rH",
  "key10": "37p9hdJroqnH4RjTama12oth23w64fHCW44wdeAoof8YLNnUXjTVTGD29GRRPUGcwDgfBxPNnMEyLsbsoCn8WHT1",
  "key11": "5iXafTEBFkqtQfoAyXiTMiaUrHW9TfVprPMhnjSBAHqrD2jmqW6Q2btFhpXyS8ecz61jSkg8aYcqFQYoD5LM58Cv",
  "key12": "2umk9himDMdEyHCbtyVt4DxDypmueSPqvxKmhG63khe9jG6YVrJeq6rx1TnFhPb1LLwCTpDeCoh3NWxwYKLQ4rwd",
  "key13": "42iYmvphKfq4PQ9mkLWu9p4XByHxk5d7tVYUqrF3aVKkkdGiXtQfmRfbFJrobb1LXwBQZLf96eQbdDtCWvUnRFrm",
  "key14": "2C7mvsqKz4mchNAgAV7RTXWJRxtB5LSPJxMZbbJUcDYv4QcWbAxeXYWAQTwi9zsBhimo9QbnkrX8eKzcD25gv1pi",
  "key15": "48Bz35zB4hVJPja2rXtViGWrKPAeQU3P3cQgh5tCdRrAWytdsVmLwwGLJQRCBepEFfyBB7ByVkKKj4BNJPBmUv2g",
  "key16": "26d5s1iQB3UZjgcjShecB4F5mZFzRtSEbtiywnLhZbqcR8ZMkAnRErdjatfhf9uXV7jAAFkRCFm7116hRPoDdg2V",
  "key17": "43Py8r8R3ujtrrquHoS1Eu7Gp8AKPaKVmNFiKgntUrZZ8ftJH48U42WabZZHKc6wq4sLrbcYZETZRQgesFU9tGjn",
  "key18": "3CoMouJd1Hms8bjcpWZvD21JgdvKRUB7Zeu4BQhh4hPEfxmDbS2CWbSv61Y1RsB7X17A5zBCU1kP3g2F6kS48Rqe",
  "key19": "3cEZjuCqpt7Y5dFbidn9oTUWnHQxPK2LzPrRYUmETwRaEQd3roDPtXASGtMHzd9Lov1rvfCpFz2aC5VBFexvN7Fj",
  "key20": "45fDn8nvBagSsTXcSRBsRcrJaCSNy8z51QMWxsqRU5BdPBhxbhst28goL6uSpL8ZbQpsv3xQ6itRweC1mYFL5hkm",
  "key21": "2UwsXuHWJx7BoV5M5VQWV64NBzwapoK2ESSiFH8hmYQ7en3B4aUamb8pZp2chHH95yY6ssSje41vpnKXcxkSEjB9",
  "key22": "2K8B4e8odogzojfJ9iXYEcnz1F1JNzkgzhoqk7L2d3TUG1kEkDD8RyCuaRAfGbbz7n48Z74T2xPPjdAJwDKpojTS",
  "key23": "2MtjsB4vaJSjczQ23yZ3HtVgRa9eFLERqFxKUbL8kQP4Hr9GsZiYh1j1vr3My7FtirA29f7i58AbKkFrFUqbxYjs",
  "key24": "3rS3jrUfrXLrPfdcrER5HNx7Kd6nrisewN9MAdYVkNDVPQihMgaAhzGxyQDneH1D6VakA54V8M4crmHTs96qeiFn",
  "key25": "2RKJoiaFbMY9K9ntMBofAsFByNVYzhAuVYS1gwfVcbnr95hJ9Twb78y2kQpGeKLZQxq4eXFk7novuNuQYAh93rdn",
  "key26": "3HyYXQhDsv9xwEWBweT6VTzbnBM7KZY1wZgp67G276EkkCXL3HaXSVuW2ZtAwKMYwTUef2Q5aVoBezFfq5zr9k6C",
  "key27": "gyeN2kPY9YXEkQh3cKtUKCaWXDR8STVDeHqeoRBsyoj93q3WdWYpzJF8VvLBe5PdpHqSgy4WkFFDKZa2mQobaak",
  "key28": "2PuJhYv8S2h7q3tCvBY2cV1FgNMnvwqTz9nUHtdDiWEPXw5vEZ9pPGgnhdrnigyokP2KF5iSjgbqUqRoCwDXQfQM",
  "key29": "2hfSEUAh9qYqndqxokxCwago4RH1qDs6DBEzrFqkEV73y6MczN1Wz6uFce9s2FSz4rZfHVPisV45ZgcY6wvRgBKw",
  "key30": "3PFDtqH5aKUWnZsdNh9Sc9vU8k6bg6wFAUcSyPcgcBpGZVpfT9KQcTaHAMNamveQQHhxmqLD5zCALgEiMHKHppvG",
  "key31": "3rVjd56yJrHMhfRaZYhaAbfw4kXYWBLWSdFmi4hZteToHWsJcFbBCfaMqKjmGNqxty7WgfNo7YTBpDTKueh4pXZb",
  "key32": "2pC6C1btRkm9SKv2VB7cggNHYmSJiVC6CfTZiVfKZqetfJYet6wkX2RXbJw7tgwD2XPaRmgP1N41jcPA7uNVrpXQ",
  "key33": "3RUfEh4z3aLBGoXYC3RMN1e3SdzFR9jsbM27bG6pK1BBwvuF6G11ZuvUojKTATiV4Y4od5oza9uteVxVQZEU7G6u",
  "key34": "42v8SXGwY71u6FFRuV8ScCyjmKAtGzwkkACLSW42GqSHbx4KHesfLYNs9GYHJUTMZquofHCxcHubCmTvAMsLgqbh",
  "key35": "gpckmngzv9XyRk5TNQ8ZbWxFZmCoRgEFTgqQaRcBHeGTyfEuLkaBuYcQ7syXnRh8x382n2dvd6XkAghU8zZZdPU",
  "key36": "nDN8DWx96KD6zF4E4dazXfBCW47pgp9ygBbsPrYbqRsULiK3r7SSpXY7xnXXUtoikgGUaU7bmCz2jpSMhZSnVbd",
  "key37": "3CzigypHLnyj1TwdodZmHnnMDPQrdPTyZ1KeK8Rg5AffP3azrf3ZyfX3pBVeUtmKywHYyy5msBM42p1UZnNbjaH6",
  "key38": "apgA5uQb2UPkBAbjXvFX9rHgmF3YhvHbzU3A8r9tZ2TnoYd6ZGKMTUqnVVZXwMwBahP5HyDSxo6uHLfizhwksT8",
  "key39": "3QMYmvXbzgnH765ahsd7gCjtL2H1QoLfBsRYtQ8c3o1Ut8mQpBjCjnQZzjSWZs192jBtfm9WmH2nYJ7Fv3x7RLrG",
  "key40": "4RYsgPSToqD9HFrJJffXTiVLChB2nfBVuduneK6QfxJthVVQTKquD6Ucq7q9cdADM2GYGmT28ojR88o7ATSDD7L2",
  "key41": "5aQgiupXMxsvfubkdcNrqY28fie8nCJMbTgL7dEppVtdArT53QWK3Pdq4uPZ148U2FDZaMEm2X9CNoXeouPhGKrH",
  "key42": "47thGfGLFTdd1XP9xTDjk8Y4FXLrR5JJ9EdTLbGCZtmgdphSX3gfGoGMkb8BxxoaQ5wQKPcSHdTUomK9dhu7pAtX",
  "key43": "1tWUzKyLj3HBCuqVxDG59b8rMGf4qEWw7vNhxSMpAEQp12NKz6BEjBPvSHmTcPkbBSL1RBbVP7VVPggBa2vYF5L",
  "key44": "4A8y3caLeDHF1xCwbx7fsxCwCkwHdj8DZEK3RyeVLoyhpUzcviZpUtXzdDy7UDc9ewpt2GxFYZpCRJSYmdnb2sZJ",
  "key45": "3tU4zaGvvdqibGze2rtQiusN5xSxFv5UAQxiNfsBZK9EGGCTPH9ePbWbf7mWCQA1nQXUAsccsFcVnVERDZRc5Cy",
  "key46": "JYTpP3ZFDsuyUK5KHivWHcG7QhiKUtzEEsLNfTWqcFUxCF4EU1AQE4wTss2gzVVmbmbzSyTbjLBLGT7YmFSQmCK"
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
