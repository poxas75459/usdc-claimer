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
    "4KeRA7USj31PpTd2Rtw2hDMMG2dRDNJW8T8ccDmeRkJXLsDQ5WdPwH4VR9ut8yMXRwJxRgpEHyfbhbw7Rfsboqsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38aaQPXq2g1pZhAXuACSyrCV13bBn3JHErCaGBcTJcRMHysHs61sH3K3mJ3YyRnrWk5sBAexvdfvsk1NcNyNtA3V",
  "key1": "5Tq6Dj9jsD3bx27fTuAFUmk2W6XGmdgXA3ND3CBTPBurz8dzU3mCYdWZ8dDp71jCyhbdD5CWt7DhjWxrNL1L3zrn",
  "key2": "44ji3rzcGPEcmmtwwh7fty91pY4u5FHtHK2Bn4yytPaHK7PiU71rUCdrdD3BNXkRrMuPrD51F9KzRSgiWn55tjJe",
  "key3": "4QRpFFDGJ7QvGJw2ZJS1zHBD5yBM54658AfF6CkHndbiqnV4Bp2BQcenDaEJWszVGP7hNkjvZSF2761YPEYPmgGg",
  "key4": "eX6njHGZCudtKGv9cUwzZHJ2LS2eu8MFUK9cTWi3UyWLSJiTyANReYBwZL8YvsC6QMPRmf657yXes9N9Z1tN8AT",
  "key5": "4eP9b725gkbA2DrENyh3tMr6oCuWHmxYCrxEG9J1dco1nNJoc7SmPSeZtq6X54waHDnca1yT3D4EmC2Hpqht7hS4",
  "key6": "Sb5EBbd37B8htSssnKNJaJh8Xoo7R1PfnEzhd2hbZZQCNaAmtzaWqp2eMz5UvJawrS9CNqwkMRF6nKhkwsyqnTu",
  "key7": "4XsJXpVMyMixrTtqyeo88E5s25R94yyNKYi4JhGKX2sHzxc3RJu3fsHux88zLyBfoETPqvihLskus2WTed4d8c6g",
  "key8": "42cjUmVFpaTfidAMTp5mDKpVpDNQK7rcUjCAb5STFCfT5HnyTYs5opaFVzmuvvKoFH1om2spaHxASVDxx6ixCB68",
  "key9": "5RaNSup4PCAPFKjCtYgSi41nt54JUzUPfJGdnTTrgcwtoE2JvuxSqnUMXHeabvLvST6s9NYfRsPo66SxwUAEssDe",
  "key10": "63GHvjm49mepkqTd6KRxuDhYbskMZwF8cJEhEVBNA2MqAoizRP86W9dtHfnvwN38CjrxXc2wegNgtErqixVsiaAS",
  "key11": "5eBYjrrpSpLhqsJuzkHR8ihtzUQBNSfvJtZQe9DLYtJkm4otRf5MEkvNExPaKMC6G8gwxATb4ocUNCiJKttnn8dn",
  "key12": "4Lr8EiE9KwstE9rzvwaTussz59qQ5KooUWFo6SmNupGmU8S5NKD6EYDpPD4UKYCtKTWJZQas4ZcwjEEzbFirfSdS",
  "key13": "4Ncm35MFPag4d2TmeyMuexhwhNcBCbTz73Bnxwo3mtTbDp6sxx1fZDswVPw3RWo8TsNEpqLggL4c95dQwz4yPRkR",
  "key14": "5h79VYefSWj1oxMZ855uy8jvNNs34aB4tHG4TSHDyn9QRDeCQwRQDs9Z5ZjwJPgdjyaKoKJzADhNCWYxGvj6RKdn",
  "key15": "3cWrfxQAG9KKPHuBwZ9JdVGFbqEfnyQspnFEm5FDrhBFJtW87qoXPws58z9pLd1Nqdu33yVfieSqKvYULoBtK4bb",
  "key16": "54ucR5jhnoDeYEPhkbjWzdSs5acc73dCX6qLpCo47pkEGMhmfpG8k6j2KzDdZv8uqi4tMmL4Pmx2zs9TFedosVpK",
  "key17": "3LZYbuhsUVpvEDYaaqahfPridqES9BxVC75Xta6eVGt7GsxAHmHdtn8Lyq7uUmfHS5QfCiNUA8fynYobMuQGdzQs",
  "key18": "2tMzB4MiERRK6R8zZLHPjQu8NKZT2b3vGk9stqUEsKEb6pCKZ1nUSg45rK8CpEx2rHB9yisxkvT3eX11wuryVWfu",
  "key19": "4UoEVigLpmtq4PRJAW6Sy5G4t9RM57h78kfhg9QXbZFS5cAzGRN6M9m4BKe3eHAVNGMXzV6nfynrqNHbnbT8XrjM",
  "key20": "AypFAENJcoX3vLD9Mv37f2SjLk8A813Ncx4sNutqkTztTnwuefXx1AFpyYRh8WkcoQMnHKnRT8Zuiff7srEKy1b",
  "key21": "5YyP8c5BuqaSYXQ7zVKUUiGiF4Gk5tR6yPtvvWWwdJrRKTMtMKYTiYGuZeny2JZ5ED1Q83C8dnyfPH18JcX9wZCQ",
  "key22": "67NdPrck9fyCPibkAZAH6WH9yQUzVwe5ub5kStCLVoQUFfyPURMVK2v9HLFtd4kgHNchTmkb19hzfxKWuQPEtatr",
  "key23": "4aUvNUFsTEKVAk6UPpyhMjXVRED6CzPq9zXsjqBjXUav4TKVaojqZjqkQDhk1ZqL29KcaRuEmCJiQYSt6CCpyXw6",
  "key24": "zYm55iNEVTFeDVwVAkYaTfw32sHsw5G4AF9xYgwUWpePaLEqkBrtgqvpgNmHhLb7auhamKvU48mCxuUnSd9Ri6T",
  "key25": "3YUM8wiudnChPaBRpHcbuQE7NHHS1brjSqCYEqY4nr26DBeGPvTBg9v4qEVFXDw8C5DQxn3zz6PLs3x1cWYz5aEW",
  "key26": "yXC5wCMLs1mz1HdYeMFQLtNXA6fYKm3M6ur73GTTgocsF8f7wMxBHtigPQiGSHtSRwKS3MmVEGCYgBgmanSoTrn",
  "key27": "3RHjhP2osDLKJbvdNPSQgc2f4ugr8Fo4Jd9WuYZEnDxAD7nCgcij72KtNiAHMgJNY6bdEcbQfSYjHohA8dGhFWza",
  "key28": "2svNeDoLVhqdMBVoXEB8N9s7VZPeDEq2MjvzuAjUeVpmwtXfjxNAL2xcZgLjuXwrfSWXZ1xBrrHpvTPEyyiQrNJb",
  "key29": "XKFwzf3tLBscrh1QV1V6Jchh3gqtHR4r4KdPWoC862inVb4w2SmfB8KjgYEApUA8jd3apX2cbDciXMcfygkvLmY",
  "key30": "5YUtyatsobJConEYS1niWhaCLFn5puh3u7xp21vLrcvmMPnz6Fame2MTnFFgpHEdeN7YSYjYy4Sp6bcwE1UUQVdm",
  "key31": "2yPaPgqHyMu5r2Wgns2pcAvkoeCsuS1uE8bETjKvo2H1WvGuSNvz979fh4deq8PJ46VsPuJjS7ysEDHWYSQmiCY5",
  "key32": "5b3MFF9phZvJDfU5pYycTwLG7o9iLzff6GVmk6boH16kxpfLK7B7p2r3LX3yJX2waLShqQeY6n2jgaH2ovWNPiAi",
  "key33": "5PyqPt7jBs5ADR1Z5iDxKJQ5usG8j43UwZQsven2ef1HgD1ZFqZM7UUnLr6uUHmv7UaPCbDZ8LfYfJCiBmBVheTp",
  "key34": "3Jn35GFQot4WfPbyHcbAdz6zHZtiQwzzraBjP4UK3PTaZdo3LC13KYSEW1vVvkxdHfEBKA7Szxg7viWAA4LYSy3P",
  "key35": "3MASt88iu6f6w62XGMTvmTgosfV3B6zpeHvsBfZtboQB5aJDFfXWZg6hGGgnbE8t794CEr4qFxN2zWjG7AXRGMbb",
  "key36": "V7nXBoUptKk254Tf4s1tzUYsSDvosxPzPBoiSbD6oN6hnGYhqEh8aeeMLV7qa6zaP9Lv1VzqbcQJEkaEwvnUcPw",
  "key37": "4ZtFw7tCTdo4cZq6FKqniqx6PftVzQTkQbxkc9ccZ6eviMaRPS43XkJYKXLjAaUBLxo8yRNfMYTPYjCQwNMsvN2h",
  "key38": "3Di9DBogNfCgMbGHAZbDsDZqGY3DhbTWfgc2m4QawxwPvMhSiiAQJuf6f6MayDJW6r3hEoq4fcYdbnjbNGQ7FbfU",
  "key39": "4Ngsh8MvGCUEF19mAikHBoNL7wQvvDbZHL5kjoAhYByX9U9ywKjY6vAMojfX2tseTmdnpLBpAX9xnhLrMvpcnUSr"
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
