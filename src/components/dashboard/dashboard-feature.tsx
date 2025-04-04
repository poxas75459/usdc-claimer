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
    "5yTKsv8Q7XBQpkWZswpWXA4mub8UqNSfKQok6At5ei4GeKznbNxLmnABLpUr1nXjqUxEbH6sgzPdrJVvhD3hgJRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yevDmYmsx3h1PnWyLDmhxCQXNJSfth5rpYaQEt3PsTJZ2i8AHQQSohHUgVeBrT7ajcVLdhNYdw1bhKk9kcemzcj",
  "key1": "4P6Hzv4syZS79B5v1TcrCqCwQSBaYSGjHtQZUf7LQvw3wi1YQ6SRAmRhq2Ajm5JnRD8gBtW8kdcAUEU1nhYpQhfo",
  "key2": "5UCZ5YYxAJHKt2xnpetbFeMVfsqEDK53yzWRj56qbJxL2rHSA8Nni8S1NZxGi9Nw7N7LMhudeKNp8EoJUtFtyhzK",
  "key3": "5FwWwFX7wKsWnDv97RvyJnGpjA8ebvB8AiRQ1hrfySMW3f4GXpSZq5n4MNUQMznSVXrATcnmrsWoCru8oKSsxwfM",
  "key4": "2sHLopRgKsWuycD5rk14taPdhgVZwbCwD26yUsQfZFjKv6GSruMSdZrGQgiidQzF8oC3jhn4qjtvavtm4vbzpri2",
  "key5": "4LRGpbKdhRgDP9qSSWeU4HM9nRwyTMd9c1ztH8VE8snbxd8gMe4rKLanpuiPmb3iUTEGM7Ph9DMx3BtzpfQmWyPh",
  "key6": "gWqx3QKC1qEXmtJafvapiysRbpNTyNYYG6joshUAvZqGjpYojjBDXf1MbdKog7ToW9YfGHNVzma4muE5tE1vrLR",
  "key7": "XoEhsWf9iUt1fSXZj3mNmHm8ZCRynnGf1LpYEkFjyMdYuLkVzmCuZxDXsW6LxKbsPadRCV2s4dXro4g3fFEtUbd",
  "key8": "AYXtvY3LQKKp3ZgtSaPvQD7Ku84U6R3omRcQRezko49UGAWTkdGsWDtgGTjhcpBTTVB2fJyDUf28B82au88zjNx",
  "key9": "57XSdFVu5or8XoKDd4A5LXxCmBKqtwiNAc2Mab4N9gEEnvjEcK6TiqHvETxQAVH8JokKo88ezX7Zfo3SFfv4KTie",
  "key10": "4wv7EoapXxMKjqw8kKPzKHbUfVAUVntkoEYVPUCJxfyTcrp6JmJLWavvD1TDcafy6FgSpTUwzazyuo9phvVtyd8d",
  "key11": "2Engu2EBwa6jaBkXNZrCfd3AEU1qZC6JhbsExQMj32hyjHNXrrSRSArNNHrGiPbabRMYDKKg3NqPxWUukGppBGrY",
  "key12": "3MfULTvjJ2kFWFkT3K4rmp5Py8yaEyMYBzbQ4k1jB4r6MEMPUyRYzkT3bv3DHr54o7P9krUXKFT5CM1WXzvibfnb",
  "key13": "2r6gDRscjgRJLQb2866LjGzRThpXCxcb2h8CHochB5EhQ6hJXLNKSTGFCdwBmGt2SbYu1SJjEHJTV64ejmeZtBKw",
  "key14": "2ZtheQtQyzg8xcqzuJyUZZsEDyyjiR4TbkQi636pZc7u4aH5H42CMwusiqup53p1CbVeWo5gv2KsY1ifKa9bE4TK",
  "key15": "2SZpaA76WLEr3n2gyDZTAH3CJAqNd3DFg6K4uLoXmCcjdzGondF9hkYKct6rmXZWm6sb1LUovi8DGEbGb13jy9Zg",
  "key16": "QtreFJ8AiCkKH9r6GrzcoRrSpaA8aX7TLLmxaX1ZhU32VxeM5U1asz1qhybGYHNYdJa6Q9acCGWdWSAyyiQNLDs",
  "key17": "3QUrphng1zKMfasktQuBeJ9oYNZdDHLYKz8KWzkddcYLUQRRKDgufbDHG4T7ohrn4werodLwqFnJtGWvuU43XDVp",
  "key18": "49BngKn6jx6q9L8XEXXpL3QfGV98oWzgYemNFvyEv7F2XBGw5NeArn5Zc26x6jGx5GdsFpnCCaydd5up51w8D3YQ",
  "key19": "3nqVT8zwfEv4HCxvkwvjVEhFDmqkU8BQ9TNx7UawpmuVhJm5LKa79Rd8TVxmdwZq6HQZ8hMSFA382shF347X8dAE",
  "key20": "2gPstiggUKQNPbnvbGc2CUAK1mV4NWSAdhcjc5oCnPArRsdh4SDFKWJ68kmQWVCJVyjh4ug1dKXotepi5jLr8svK",
  "key21": "3MKRjdPtANKbxko9fDanBUCuFeSkN4xP1VFfPsiHUbZdFanruVgczm8UZUjYtwJgkDqgpuzntV3PjMhcGReYqpJE",
  "key22": "3Q3Lj2ZeTp9ftji6PqXoRQpuRssK6Sq52UGc88bGmMXQGAmRvSpkWzxh7jy9unV8CiXqEbNzZLT9ugoEK3Ur6nxw",
  "key23": "Hv6kZtEoxpBUagHaPbdhbw6KUpF2nnDGHSQP4RTBRBPgrcaWHRjp9Fj9e3NoeG4HMzKcPe3f4h2egSD2ZptB7BE",
  "key24": "4agHYhzZJfP3AdFtxZ5yamYnUS5U3BKj2uwpm6qPbAiZu8yCpadHHBQ3KsrUxNtxdN4AGHxtxx3pDdEj5dzFHaFB",
  "key25": "2ouYkmWDdL7sMLKFLxX3JpKxD8BmiRHh7DcmrMhekLKznoaxfAqsu6DsXk71enq2zJGmdmejB5mt9QUTNTA7csXD",
  "key26": "GgrgRoQTc7xjD5caFvDSFEBX1KY99NmGhprCZXPAJTS4s5h4k9wpzNmPimUX3zEFWcgPyFfYR1E1ioJ4qhDVo3W",
  "key27": "3GgW63YN7eBBTVsRDaUPUAx2DPCWrC9MxA368GxVDdv9uy7nwX7BRsFfCEE4g6VNyPwZUm81WnKLz4Xyv297nzxF",
  "key28": "5H5iLBaBtMa1pj9TVCRfeUaYLtdCUnV7HnKLroF64J7FUxGNYQcmRuf3LHecSfg1MRJqjD7jfCnGYQLfVMN4oMrv",
  "key29": "ZQRYm6ru8uaAQQ3uVyQ4dTg4Y77fajbTebJSXrMsv2VBxUudr7Hxd2NFpKp8NWHth8J9EpJbtU1T2xdg2iS4Cpu",
  "key30": "63Q3cjGKqXH27LNYzM7heJDFJCMrFUGBj3V5tdnMosT3B1L5C7jCb81D47JyDHwurs7DQ4dFqvBoiN5VpPUDdRf7",
  "key31": "2jFC2zUyWhxifsDngNaJsw2KpKUuYUbUFUuQptrzy4YZ6CSxe8EYXCPTgynUedQfSTfuU4BrWWJh5Sup2p8Efcxo",
  "key32": "3RZquBZmt4EuDc7RETaLnQb477e9MRYFsidkpKgNCyHd9MEV13k6aUizSixD7pzZH9gk1urfjSqbUTWzCUeE6jx5",
  "key33": "5S6GTMcedoENjrJwgsJz2hncUqGkouEg7S6RmFzyytnZeWzrQokJwEhHTpcPVG7xcycwCSTBiW1mhZmiMe9CZRJH",
  "key34": "1EsVsDxKyhRWbwXBXWLAhEC1tAqXvDmysALbq6V4zCgSrqhEQcsSQz4JegqtFK9WeDLmZiDjjr4K7mfPaewkkDN",
  "key35": "5JEpDn3WAkBwZ1YgUaT6KBPfapUgeP1jbuhF3jc4tAQL78V9NdmiG8jMCebnJ74BhKHvtyD2GstYehUoZZ8di3cU",
  "key36": "3UwQ337JjvpFDSf2UubP4783CawD7scYzSEPamBAEfhCnYajUPf2Ri19oWxu8Eyuzh3cY23tRKk1c1i6jtwaU8DW",
  "key37": "57ZyjbRTw2wbyJvEMzuc9jM9DRmmCjZp5nXagTEbdH7UYzK4EV1msJBYvjS1APqv3vDCi4pKwHfTozWGhmiQzWTf",
  "key38": "5pvdnAngMbVWuMZAGnPxb3iKzD1NR8P9dgNnHVyib7HibjndSJo6tgEqkERraqxXGLKAz6DQ9gPGfTvf439KeQ1P",
  "key39": "3eM4pnSkgedg49s1RaJ3QsoZ2RmqNkzzxwcjMmUZ6iTDSnbPxCo7UnqkwCNt6KKwkYwCFnY79NtvsAVBGaU9LZtL",
  "key40": "2vkLwxMKHLZkGNbrDbAtfJz4V6Hju5NoipJ5U4ySjyZcZFAo8fzL3VRm6CvukF7rtQdL3uc15ofkWzLtHtAL5NTC",
  "key41": "2My2EqPNiPTJa5YfXKncf59Sc1xbxsNo9wTx8DRYa8EvTxbydspeqPP2qL7HUoP2ZJMskdULMwN8945YeLi3WrZH",
  "key42": "VFuUdC5r8QaPrisTmFRmiB5K8FiQ53b8Z5sMMMq2YaeYNJrNE5wNnfGuAhj5YxfL8gTt4GVzinUcttEMVqanL9u",
  "key43": "35k15VrxW8P7sPvy7iUXG5phcTBK1vyyqtTBP6n2HMPn5JCvdZPJTLAqXH2MBKvBcHKNABkorkCRab9PN55yRj6u",
  "key44": "3y7AC2m5nnLDizf86gu7HAHY7uE69CfM6SRo7GBBTJpycJ2UC3Pa89Vv7eBmVLQfqQNy57jVtTFg64smihMK8fLT",
  "key45": "2s1BgRH7y5m3Muru3CyJCvWdfLgHjsHNGfroGGiiyApUuQrpainxBb8ktrA71AXU5dJAijLnKvjjKyGqiqX6fi3j",
  "key46": "jWgKzdAy75oeXwQvmJ5rVK6tVYDY6VefsF2quasmmcsk7W67EnSRVF9dvHNphc5JpxMNie5ecXqTFdmnnt152Ko"
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
