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
    "2qvqkRmBs4wPXbxnp15HxboYGe7PvU4TrBHNWPkBU77yoypTEM4HddsxCJ4Z8Z9wsitsyxJJtfHwBfY6P25Deohx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AdvsS1J9ViCBwEagX6xHm8AjP1b5oox4aWGvZcBNo1dYgTF4vaQnyRjjiT2APZPCBoQjBzNDSTCCkp8vqEt1ff",
  "key1": "aP6vQAE8Kffz6yKkxEzvhJtnjVuxSLzv9peyzLrDTT9mqW2h9UbXhuTXqrzX7GEK3zWkLCrJsNPXGY9Lbsh7v3B",
  "key2": "5ojX9NKMHuLyiDzow6wJxAK8RFeTDMkxe3yTs2UNnLeeLMcUshcPSD7eXmJyrMajFMHpXs92VavD2d3cM6hKTh8H",
  "key3": "5JU7sPp8DPMMrm1cQ72ca5c24StHQib7wH9LqGkpymr4YQWFRrGMf8cAzC7xjH9UVsuY25UiJtb7ZEsbJvuwf3uE",
  "key4": "5ScAmat8Kfms2J3oerMc6FeamGy3RQSPBeCqUEtDbP3NRc9TBzZnpCrNxB4cARTs3xPwABsYBXWqWQxwtv3F4zhQ",
  "key5": "4bWQXHcGnbtWW9LjEWQxkKHJTKDmhfviRoBjj7zgWqy3VphHdrTnuyoyrVBJ8oFVxSZyPNSZfYsUtzA3agmErgkR",
  "key6": "od3EznADtTJUWDDGL3LAknTzzrjViNQfsBsXLzsuSjt1YwoYHeKe4DpXNG6L38zqgMjNLNZ1dYcCuGFGCTdZs66",
  "key7": "3793EooECS23HuBzJhAgfeDP4aCmW6jyG5ZkmYwg7sGuZhCHTfyTdYberP5CPcNAATpyMXf3RY92VKA77Z1ksjAC",
  "key8": "3rA5i45ocSR9igSAJouyATyQJzYswUGnBAWFKmDN7cLWKtdqUznyKVcr6FCQTBrY6gAw4EYSVjjgzjLhSSMeizHF",
  "key9": "3QuaD4xYNNSwSyJcJYcXdoprh25j3bG5yvQhuHMvW4XiFV6vxXAqcwpiWwtbRmG7cHFbFaZhGhth6ZpCwU3p3oiY",
  "key10": "4FWB3UCZYqFhAQkHfFBq1YcUEUGAiJjhgNdt9wn8YDg1vTW7ejzv3H2Z8orrxaGAdKWgwT4otk3WoLtCfTSaR8LG",
  "key11": "3aMx4WwKfWWT9jdsQb6HBZGmzgVQFLmCqKAFKK1VdA9HrHkXjKZsofxrCoa1tJa5rmKMN3wJZa2iQuKAx7BFVWTD",
  "key12": "2NdCgRastXxDaKMoy7W4n8tUHmm6jiNMDkf2hTbq9m4ENcitJZ1gi4Yei3hu89kKqDG82mpN8fdc34hNGEH7AbFU",
  "key13": "5nJ9CvMnJkRyGP1Kds2JACi5o4a9hHAwS3sf4uVRmK4Sy4NhHnhcD5U2X5PCRmpJx9Zc7NNWtqk6Cyp83xoboZ1D",
  "key14": "5vQaYDdcwBLUApNg4WC81frU72jB8TaVxwCNyBHvqpm28iHcKmCvUXKQgQWYDhRQgJ7VPpJJTH9unhm7Pv839dLo",
  "key15": "aMCMro7sbdRMfa184ruEmoqrd3SABVXo1VMUVzDdA7NrQYAfE6hBYpWWuT9aTt3m8yveU4p7dzXMFHDinK4uWaX",
  "key16": "5vppizWXYDZQyoA1dEmZ88AnTwwi1okGrBJuDsMXya1yij4PXepQWinxUwRqZAAMuiHWQ84V5LWanVRwYgvjSvmP",
  "key17": "45FJAxAcqABy9fooJEujZmNKzMRFQXXGDYJQAWMxAkKCx3UkNzgdbssHHvhXpBqekzzc5SYCtrzf8TKfm7WNjCwf",
  "key18": "BY73RDoCe94ZtYwk59tJxaYyvLUUdZ1jMFAj3wtcz6rwiXpvoHhPdPrYcHaZ2Ava6FWu27Dc1Q9wj5e8La44uki",
  "key19": "3GK4d4FFWRMZtqizXyh97pMg7UgQhSm5fGZ2CnUeNBDCMM2RapsqhmdkPKJ7WJjoKEG3bw9nHrdLuXcJCwViPL5y",
  "key20": "3pzgeK1gaAS3NmYWhjdVTSf5nwCicTxPp71W1NrRHaeEXhHu7TyrFEgWTZ57JFZ3NCbqHZgodB3vkKPqetjtXsK7",
  "key21": "aRfJaH1hXLvu67m9iXF4Cx5vzuLpQ9waxkLquRCmMzPuvnbvV3dv1rVSKHqDTJrXMdcFqbJbkptkbYjj916qH1j",
  "key22": "QdfjEFm6ei9FDx6RVVMSVwmmUfbMtaPxrYBrCirWiMdsLFmxLZcomHRCX6AqbtQYbUjuep9XwzKYQaNC9vs1tgB",
  "key23": "3r1WSMAKVFd1XChCj5Dqs4SfFqmzYefGYApNBVcrd8t1VGDeBpFr3GuNC7QUrzTuM2bWuwzqYgETXYSbv5B1qFpA",
  "key24": "thHpfhx2qfHmHheaYMqQeaWqP7CD4sy2nmXkAHVfZNhsNA1Z43QLeWhV7jswjRN9QtBfQGeDm2Ybw7WnvNB2cUi",
  "key25": "2WpaQh2fkVbEwQcmYcDcgZM2YZT5TcHoutdwthGxmNFZhs4MgCN2vrF2SJ5nqXtF3616YNsBtQfCoY9YcHxdAsNy",
  "key26": "4PvkfLirwthi61pYSoXbwFHMcDsppiTsmjZQR6Rk2MzDGstanazVF6ar5Qomp8FsxT4FsLamaBK4vsVxsoxHe6AU",
  "key27": "53qcJb7Cm6uJxxoot1rJVYrJVjY5zDmEvmn6UXcEqSYmy3EQRFFhrFMyARdDSwT8KTavQPcisQv3FmFq56S9mVAQ",
  "key28": "52DGeUQyhHhMWPPqd266ARDgCw1R5CSmCkyWBFvctTe7yjwu9FwnfFsRpKdWdjpZUxipUK62g2AnYtU1D4SHS3dW",
  "key29": "21JXScegTg5sCPQh1F6gtMMjBybQYgzzBhnP6hLZ3WXa7uCVbZUqBKDnREvcPUEVofvaMLiby22MxquheY1rkMqE",
  "key30": "4zNKewnZ8YqQPCxmWHqjfo939yGENGSgzcQWoRzdkFC3sESQXHtZBoWanhtxASM9fSVtxhPtaNexqBG1UpM7Z2Tf",
  "key31": "W62LuVc6o2DNaw2RzcNadseBCGVMptQb5AtZrfNQGKnegyKTLX5w6YGJ4UCgS8x31vrGxequKsNM8WpdmuCVHiS",
  "key32": "62ygGYH6jtsx4y9iVrpaDbrFFAYiiGAw9FsycChugUF9LLk8NMxRweF3xUHxGvMjyUSi5rCwLAhTEwJ9mMaGFUbE",
  "key33": "7UvY3eLaJT452Mqob2hnSkE2VcfMPE3UCEHxZNVjRVtUVuKJtqLAHcM51SJH26e35dBNLs2TMQKhTt9fQCB8dsH",
  "key34": "39CETEiiNkQ8eTqiJ1AFyAFatioRBKgCQbuRwUahNRnzmT9H2wqWNWdxsEhNib4Uvup4k2Tm2fpz2SpGZ9NHjB29",
  "key35": "4daphtNr866tN9S6Ny7Tthj51tdvHJGpH3iM4Zn3dQTssjCzyoFisVP78CAPG3FM4ncdTxaPnZEM45vkx9KZASaG",
  "key36": "ykGBQVLRqyQYFFRx8mABqxT9qVcLYi255fmrcL5pk2Vghsokwm2mb6rGGQRkKvQ3r579yYacMMs9aeJvBDaXHLX",
  "key37": "3TWbd3NpFQDEuDfAZZa3W6bCERpWWW74iz5UyHeavGUmzEv91VAnmJFBz5Y4U9kqGKtjibntJEj4racfj9hSNhu9",
  "key38": "5zppwg6uCNwYqsJyaBMRMEbvz4Gsi7hrHhexFh88MoLGt6DVRZWuynvm56X2qckCgxzidtCXNhjM2nGMMzxJrqUa",
  "key39": "5eBfzgtNAu7AYvJ2D5xK6Urfd3bj6LzAndJe54AupMJuViBHi4gZdKtbpfbPdzihc61NaJUarf2UEJedWaBmgxvQ",
  "key40": "4FK3GAciSddAd2ScFtnYt75gcJoks3aMoeKg12KJ6ZoWEyDGzEZ35CZZQmQUHCpTUEkGf77FRnLFEqvDyQjGdfWQ",
  "key41": "2HgrEm7XgBsPZEei6kAofApE41Hph3HiVMLxM8gVbBddZYfUhuVma8nMWrYGFhC1wxuUuEWrh1ysNDs5RKFN8qZ8",
  "key42": "3qQAa9ZqX2mjj2fezD51NJ2ctPaKUMKq44To9uCrA4hVHbEm7PnnLnnzeVNcn6Zy5d6zrnNMkXgo3M71xtty92Yt",
  "key43": "wjNBzCYARu7mJBdQbqCzuhkzjpBkY4RNwwrrywR35bwUCPo3ZyJrC5WNXSCGjH838aKTjYPkt51s2Qv4QEiVVpR",
  "key44": "3AGiyimqH65bTzHATBD3d1gLxPre2VZqMAeAVKxkTyLJq31BkaekBWFrsHNv6Fdgo4kGjvCY3FTnnEMsUJChQwGa",
  "key45": "2j1hdzhNZzkbWgfWkvJFV1vjryRCt2WFHXV41WbRYYpT9ymvCYMHxqAjyfbnyEHo1jWAPawqG42rQswDAVzJN7LH"
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
