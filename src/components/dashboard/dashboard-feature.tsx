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
    "5bC5dwudoo76Z9BtSr9Po8mjBtnUSmX46VA4LzcGYF49pgejxXEPB8nspfNppKXhkSeMq23GfDN4X1zavbrScQBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pd28hX411NAAG4F7pSwhVRB7YtkznCvFgqj7zpTASWEDZ1vqEtSr4Gt6w9khb5DT2pwGhFYiTwNV3smiBEw171w",
  "key1": "2ruAvAjgq5fWuGDmyT9dxysh61KsZ86EJ1pMvW7rx9Z78UMoxA9oG7LHELN7GhjLkipzyjXgnXuDAwWmD9GSgeT7",
  "key2": "63hs4jXro2UhsFUQvH5Hb1TTTzQ8AK6Wynvkj7ux7GkaLF1tr3LduCHoyNQAxGh5KKvHnU8EZFFweWyKXj69e1CG",
  "key3": "ahTyYZP8ce6snjfLdSNVP9T4JncCu5nAx8griLsyZZ5o8Gw8XTfK2JpFmaLS5iLnW1NwMNMX9ffu9nXAgCBWJgz",
  "key4": "3PeSjdQE9Xd5PGpSEUov8srPbeYdxLjAaQCHMvEU5RbU9j6QHnuoPnXjQHD13tvNEbjcQCk5i4RZ2yuEPws3nwan",
  "key5": "33B5B3YEtoxV5s8A7M5XfQSnpypLpaUegBAqkPnr1XQWvy54d7gpBX73Av1HXxQPCeMCd1Gh2zbZCKuY7sEbajnn",
  "key6": "62gHm46AptMnrZ6jJi61Bn5cxFx4nuhzS7cF3oqfNNcaV9KNFxAbPE3i3f7i6Tr8E37BLtitcGFaMcF9Xvv8feeK",
  "key7": "3ZsM2arVktTUuSHFdfzHatA3cy8v4VCQxTeD8ksoj1EgLFQBAxSo5sT6ua2mhMX3jRVdcXRm6adLVk8Wy1sqqUTV",
  "key8": "Juz36hJR3hE6mpUA63AfnbkS7DARVqAkG2BTq5GXfwWhzNMZXa4VZCb9BMmrMP93HGhCpczpu68Lm9hnhfzvpi9",
  "key9": "4gzSfra14NwFbnJxDJfQAwpHBymmaEASYBCZVuCrMUTXmgT1TcRHzNDazrgr21yKV52uvtmm87Ty9VAAz4y4AdvU",
  "key10": "4kmxUZAoqyA8KKnLxTcyAkX99G2CjAZkvMkMcY9pFeXoasZhidftCRvSEN6aan194HnJQjJkAZaz7yqKJNhhtvEP",
  "key11": "4a6jgoJX4nUTX9jGyvJZ9euEsxqze4LmEUqoSo1eVGmMjAtN3C8oA4gG9BiugRsucgZG2eSjpFt1NZNCmutw1igt",
  "key12": "KZWeXkMfx2GWS1C9B3hc32pNVeGmdnLmBvX7kvPDwYnuDXMYRyEX35Ah2NVTqwBdjGkXVNv2iP3GuJB8RodnNrz",
  "key13": "5vspXeEyAsXPT96BgvacLbzgcvRwGeREmZfHiV55PWSpuTKJ5vahmt9yQsrhMNPw9v4xP5zH4G4Q7areJFVwRAay",
  "key14": "2FwJ89wzjHuWFzBPXe8KDfKsrvEcrfoi44C8RYBKD1bFxmT7FzVe7djXe7hRpQqZgCnoHurBcurqX3b1TMrNKNKs",
  "key15": "2u36wT1DhGyTuS1UXT2ULTyWVneKgwQtsjipup9eBBBtRuwfiiVDxZcRUqUcCETTeU6XgKPNqwjDru5jfqXQm49Z",
  "key16": "3undBtoLHwhpKnSV8cZp9cuU38ZEfkvfY2BtsxE1Mcqg8Dk8Z1Jk3LFTDK4pBGW8SXbS1PAWGysUWogVk2KK5LRG",
  "key17": "2CwDmVWwA4LoEn4egZuYSBT13tsTypgDfcui5h1CAEaXxRgwPksKAbXQPUKRVxhyXSvJyuYMttU3ApwGGpyAHoE1",
  "key18": "5R1XnJCBDbr1rE9qHppBf6yGTcPbHuFFY5PKkVzEjqf6zfWkZsPnwkZSP4j99pxoQ8pzZYLphKjrADAVTrsTv2eV",
  "key19": "4Ewg1b7UcKrTvSXLzNMLVXqUFHHrz4v9MBRpzPtXDAP315bMiuuKZH4PTMWcVUAnjwFp2YmmX3ENAbQwyedAfmW2",
  "key20": "33vBVK7eTLzd7NP8Sb97gSiDixVs1qQ3BroQVi69gJ7Ni9vQLmxdJrQXVsEG2w7AdjrvP6XVhQMMbW3LVcjn1jfs",
  "key21": "4Uxqwb7UnSjZJqQyax6iBnstAKMNDWMa6f63cb5pg2XabbSWLUXW5uQhojpDMt84gLwKWXvNFDx7uVHp7pvuT2iT",
  "key22": "heAMHnYnSkFsiw5KRxSg3FYGq8CmfXgL1maW5sPsStGsA87c7hAiQQRzSTVnF3Hhs3inS7XiwQhQ9sSbrD2Nv62",
  "key23": "b92vtHT9fZQF6dfuPwV28qxsaYZmzsuXWTUqYaxkMRbukAgXHLNVfTyF9gmB3mYxdaqpJNNVPe6bLERG62Z2CJr",
  "key24": "5GFY41x5efPwvBg7dyZLxo5nd3NMeCkTzKHXYUjM9mX3g2absbU58NrWv5MuyeXuA9caiXRXpp4mQUFXH9Khvm2A",
  "key25": "59TRmpcbTSk4KLXQPriJUkSFLbsXKRup5rMyrpfNXJjQRj72cq3E68LVkmJ692RWyjr5E7fAhZBeaiYFErCfiLbN",
  "key26": "2jhi7NCo7T6DYsPxGgk8zf5ZFJKXW272dnqvWAW9iK9EonXPtEYtbmFYkcV2N9PV7iH31rNdHQkeZWdFrUQ7MPS",
  "key27": "T8bQ7QvzeETzRqPUvv19WMgE3boggnAa9VCxky6tBa8rqzfiJQ1fe7FJdajNcU5d4o38Kua1ZHxHR7B3E8Cj4L1",
  "key28": "127gEcrBSVoSnocaYEEJQEmBNrpF4GdLFhcreGEyNFVLZzSdaT6L3Y6GCmBRiXKrXCcxUsP9ox3MjyMFRTwSq4h1",
  "key29": "32ZhTBs3W5R6hf3Z97fgkTZs7Qp9DPRrWvQgqiA48W14im1mBMa1NrzrR9vBH1o94Cf5Xfdu4MBAFCvTGLScgFua",
  "key30": "5uXx1KVhtkFfv3GWUHZE3uzzV4JJL4zDjsHwNkXMuWyUinR3r419yQAhyZgtTto7AMLNPYwgnLiDytR5BXvy7uVR",
  "key31": "4pHuyyu1QKn1ymvcsMABqxWsS7VTBTZvS1xWqdqKeAe1GYxExqtgbgadAYr2koA3hxc2baqDsc7yqBBWR9GNeDBm"
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
