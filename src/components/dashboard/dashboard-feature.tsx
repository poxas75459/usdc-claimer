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
    "5TTrzB76yfxTczZSCC9jaLE7eyy4nCMuuxSw7sRzZppsaWp8uxUgEsZdi1Fr83Pjhn1BVuagv69fF3snPz4AkeAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LTpv8Aqx67f68TsC58295Zc3Y4ewqgAmN2mpadhXuqsKLQRt1fUBJkMX9FSao9yRvpGi6McXnaMqpcyAQMqswT4",
  "key1": "2K8U8p2dUETmwbKcboud8DyZPU8PAk74Wj3tBJb282VZjVyoqF6ux9Xz2Bo1tY8r932Q6efa6yu9dvYPYkzZavHu",
  "key2": "kXCw7F85Q8T2wjo1Zicqo3N4rfgZ82juuLn3SZrN5kZxFzfFKbTX1347VjbemHzoYsPEespVgMZ6WjjNwrFYwh3",
  "key3": "49mLFecNPmW4Gfyfs4p3fVJaNQknhrKL44iL5y8XmgtEp6pZ18RX1X99eKjhWizH7bC1Ho2RQdfBMigRj2fweTSU",
  "key4": "4LbK83yVXRMUA42iSzTxgRun5WjNfPhTFSBeFNxq85VdmH8z78gK9SeVXTPYxvEAuLzVXJz3F3AM8zFzawXATueQ",
  "key5": "4iGzYKjP1t1HEG77pWLivSSsGw7Xny3WUCRaRHYeGLbmKDQDUcruQNFLqyU65Gj9Zfx1HbwjDpdF82BhiUszkcTu",
  "key6": "47qSh9BMMR3u94R6xq6ZR9DT2HTZWJ1htKnyyqUuu6qNidBqzNHSUo3dJiwwajwkYm7EA4hL9XcrVaa9aLyxoRqF",
  "key7": "4sPhPbNLhtxyx38i6RxaAM6i9HRfKp74cmGNfnhUej2Hi5WP3t1Bj8dpn2MYNhZ131a9oQDLkJiFnmWkSyKEK2eG",
  "key8": "4o9qc5fFvEDzLGFe8A4LcPnsXGQZo7TxrgoifbhjgXfWmxCaPT4Dt5Y2MyzxpY6EcJrteamHYHTFx3vKSuE15G5F",
  "key9": "hifozd8rbebds3WNVGZNwtwduXB96SnZMJrB4vp7jrWLq5Y8nLo74nHrNxVA8DLDxHNGFuyDavsAdbj8Uhwc6z6",
  "key10": "jQGhaa4cvqj81Kkj2evtLFTnMHwgJTnmgK7k7L4HYjFDqz3fk3mBWiDYM2JMAUGYjjb7PYB6qDHMLUxg1DpWCFS",
  "key11": "5RNbenC28Z7L4avn4i14uuuMLfMPQGE8ZRYnUUinDS5jdsDW8PpAPneathTEBDMcwQmzXtkTgAxCYKaX6e93VMer",
  "key12": "4tLqm9kH2AyVE4eSawfSz6cW9nVqmN8fYcxYEDBaNzR9eDUm9KWfN4XkHnH7BbKgSVNJmL9YmBkFn6prx8zCYTdy",
  "key13": "4e3s28dyMfnaYPdU8JFNxDAk7uoz9fzaKrkgJva1NuDf7XhcwyzXQSb4KKAvSVQiY8WYb3gH3WyvATxAtVboPJb9",
  "key14": "2MkJJByoC4FWg25DuT4YfN9dYsQqqbmrxXyMpoU6FMTkxMBHnZCg7h5WAV9kjbuhW545waQZ3VkqkpjtWr5E7kmN",
  "key15": "5wm8RcDawMshqmWT5Py1g7d5SRhQrbmtDJtLMdBfmk5XzJpuewWCdtkNa934foxqakcSakTg6xT4dt5iNKn5gZpr",
  "key16": "2Efc33Tv7GYgrsCA297yJL1rs28cFdgu1wAC37jjni1ZVP7z2dvw6PyUWztGKLyqRaKi8zm4ZN1b7NZr58g3Fws1",
  "key17": "5xFoWyENehbVpm1Y2CR5ipnvCa4KCkXyJnV5atLnZiZ7JVQPN9BPXawYsyorW6xmk3WWzxsdbgJW3XHeY6szyPPk",
  "key18": "2sPuZzbx5mFxuuZtivpFJocM41mZZbH2shXBSjAGSgsKhuet5QsFZCeRtSNrRhe4gKBcjwvXPXQQzu49zYCjWpzU",
  "key19": "EaTic9yCKJTYR2WyPz8PjrChcMPWWVZTeTr9n6DpwDd2uuonqQMhYDwcqob9ponvNeJJEFbEkNzaAYor7LYnbeS",
  "key20": "25iHZP1s9ZqiVsowc734biAKjUP7dKpp6uuHrh2m2MHzpW377oC4VbYgT8AoB2yxLkKVeifEVghR961VTpAgHE8k",
  "key21": "4wsNCgXfLMUhtnJ6xcgWtaeCFWk33Wat3ZeuemaFkq5vGUSyfWUTMHq3NmjUA8apfZB8qUFfWYRM1uhAcZcZeNEY",
  "key22": "5kaD66UFmXekJK4V4LnA3BQnd2SmNirQNkk7ymSEVptHJv9c2wWJUb4pTzhh1Exe22SJ9tVKK26zWe9pTrVCioKZ",
  "key23": "4s1qEPgBB5RXqTRmqUW7KuxJuZakPoACYgKZVM2rmUz8EQvRihEMGShubEXKhxs13J1ZETSREkswzu97zqmR3pNp",
  "key24": "5SRZ8tLBJLaf4MojFMCMmH6Npgur4ri8rPQocQSv9FWHA6oep6SeTtYHgYwFdkGYvkuicxTVYFti9jFamH154U41",
  "key25": "2UoEwEB8RwXh4VugvojyEP4aCNbUC6drN3qiZtW3PwsksUBCqNoQEi3BGyBDLg7QSmd1EiyxBiyWiKHqGPkbVLyu",
  "key26": "wjUpMao4TFqQpkcrmEsdoNvnKQ6v1fGdDF593HkKTxYiDNU51z8vdwyYXnerho6SbfzQ131rz5AzXS91qwt8vtb",
  "key27": "61FHZAUUh1cBziNgpyKEb4kCSxH1JyhsTE8WdQKe3whYaDoWLwCPK3jLfwDm7tqFuZtSbwtFXg82gEiis1Me6x8u",
  "key28": "3sAgnQ1tKtigKYxaYRNCiqS5omVxoABSVqNuuGExE3XgyFXM2uT1CkDBuuuiEJpYiJ99qT8EzYXPc3gQtPHYQ4Ps",
  "key29": "M8WgchgogsFxWn2R157JHD7N8zSWEZjsYxLTSpJak4vPiXg6Nz8BUifUj432fo92Hnk4pVbwjwwb1qCEbhrHgW4",
  "key30": "5eoeVN7wNnQJo6hHkQXVmbL8nieC6ynF6vxDMqwQ8sAfqvggT6ErYpDGyYLFyJG3qpjTeuySD1iNHn1Krvb2TmCA",
  "key31": "3EmRSuBZhXuzejf4Ak7BjoxcZKrCmkgLBuV7aCHMy5Fiuh2UuUvE9x18dibtRSN8Xp9FGxFE4BSqb8emkRhZhpjf"
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
