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
    "5sipuv9hLhbvhZpRCbEYGyzQzHcnwv6ghF6A2QJFp7JX95HjqYuPPznVqHrU6vtPkJym3eMpNtJEGVcorgStXTQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1PNXzoisPgpQFTqPGZLgMqWvkFzxu9wkpuezQDLch3Zyw5f7qGuWin6QwtnLjA5Ht3YDC9d19PKRAYQpTGP3u4",
  "key1": "4UEKPDH9DNPBLgNhoNm45n4JRTgVsp4Em3FveCBYzKSHmnQa7A1U3XQ9TYiE7PFWGDJFZgLY7grEuD1KfTkZ8iJ4",
  "key2": "sPwKnxcRP5QixtkimpR6kBZQigyaKCymRiGPYHuYxrTbRHwTCp3cF6CkRAryTAGwwd74BCedt3XxC1fKCqk88BL",
  "key3": "4TET2aVMpMRGas8FiGp1pYeNiBWfLMf43L42Ps7RSQfqVwoKnhGWQdhdkdF4cH7UpeEVHnNdJW4dtuaCpV8nXcJQ",
  "key4": "3Qd4gJoHni3B78PnQ5hrXM6tYcXstzBaeeAyMmMi7jGitt9dBXMGkMU5YM6TybU6QCCDgirk2PRzm32W6m7oZf3t",
  "key5": "3796L65RXYJaEvyiKCmQYgLYLj7rAKbN3euVE6wU19sy2FepUJqc3ed92iSDtRVmqaPaFfXJQUskp7SjUzPo7Sex",
  "key6": "4c5srZi7ffxKkMCc9e98edy5MG5Q8gc8LTSfDWhSz4k8CUWeWoLCxT1Az3tiaxnbzkBpkKLVqrkexmhzipJSMkQc",
  "key7": "5oDSTwGF2g8LX3Z6pv8xjFGufbqxf5bQM7BGChrjb5n9isRtXAvJmCxD7ZcACgfiBXqjaUqS8qKNgT6YynSt51A2",
  "key8": "k6c7KwTx3iK4uqBLantT2dzVYYi1G1aECaVziNeEiz3z6PqBQXmsnLDWRNrPnVeaoUj1kSYMPYwoukkT4VJp6B7",
  "key9": "4RdU2v1XpURwwb7ydNUUNSoXtiiFWiUNQQfYvNht9EhSBzx8J9EbRheifyAEkg1FB84Bt9c5NmzmJQZLVZqssD1M",
  "key10": "iJ5kPiJajKgkWCvLxuuhuQi95FffXPHe4Ja8PRUqc2bNwpswLwCjJBAN8tYSPJwYE5d9xvEFFkB4tWLRBE53r4p",
  "key11": "46Gc2p8EYZqqytYiUh7rq3WPcWDqCFnYummCkEpz5MbAw5Er6aFPd9SvAmfm2giE7o8LPRyfvrXwCntT6wzCCdaC",
  "key12": "62WXZ1wUjG4W8qjjCNx8m49dgYG19WFCBxxZxa1ketaUaSNJTuPP6eHBrM8mv1d7Ea2BGaUwary6kqh6A7iHDMqT",
  "key13": "4CW7LQc7jpXSuRrCRm7948if6BhVaEaREvQUqW7yNnN5QJp4tYLfcumZty77Jze5mcFQks22egWGWAWUKAPQty7L",
  "key14": "3hiF1Qf9s9MLWUgbmcrAq1qLytWFiURGhk5hqbScA2H6ZvS7Zc2GUec1wUq2WDueEYDcoVyVW8K229vaTdymJrv2",
  "key15": "rkX48qycCnRwhgg4PLfQc3dPLNGWbe2q1cXHiZc86rZiihGxXG9pu5poUc93Yq6J7fmfbKZvzrpVs3v9qgQWgkb",
  "key16": "5z5n9torfUAt1xkCiAxHWqQTG2vSafsc8EeFzuhuqjMHrkZB6j7hbQHURJk7vF8q5UnuoqyRTvVCgvzFvjF6uEUc",
  "key17": "4S2KF1ipdg1ARqzyvzetcMuoyDjQEpBVEZ6zewNjRX1fA4UUa2N3xkNDq2QZvRo4zSPd9W7AbqSQt582pV47eQ3F",
  "key18": "PcyonnQEcBqx4qhJifqKvJZJ5hYfjxZg5hWRrzMQqJvGQu5Rm5EkyVucYKJv1zdi3UKmLFvWoevQgFzWFPESeo6",
  "key19": "5YKvPLRhzy92CX4yDJsXDFd5QS43gEB9aayVYV3Vv3H6GacRF8ycHJCDVHqZefBPHZfWV6VFyhaFLZhNzVq4qK3R",
  "key20": "5fgynLkGPp6kaqyb3m7XVmX8JbKSvpDHyeb4CukkVcyAsSU6UrYywGZ6EfEFPFTPmxX7i6s5TwpSAGCEtKfhLPJX",
  "key21": "4vWkgDG5ezZppifG1zJHDMbkTTToo8UjqRr8xdrpeWDzSJMS9WXdmmzziFS1WQFKfaU8XFvoFRx9icJUE7tmyNv5",
  "key22": "2qnVwmTo15cmiFFdkrRTo8FxRn9VaKL7K49mS2tVwTdXx6ViMAF3EXJMJyrmzw6fdkeTMJn4kLF1i6KWD8UZidhf",
  "key23": "4CPAftN3JAZU6SLwBvQHkYYa4GWJ3Mmg5YxSAuJqKMnXwZTjSHA4ohWMAhLh8p9kd37KVehfBNgQY7XBHsFGQu8Y",
  "key24": "5H1XtwesttSPRU2WwFgBKs9AhUmbGEBkF5uPDps9eC2Lokxf9o1whtkpuEfKnGPqR1ruPeK42bwkMSpRhtfTBbun",
  "key25": "2kZD599Qux4jSteqntWA8NdcWVNfZW739K7XRodkQrMDjqnnZEhDFgAGHVDkv9tfCQZEkVgUcmMF8SmqpeaCCg7v",
  "key26": "5f67kWWhUjCz2FNRz2FFA1oMiHbBSdZRrsdcEZzQLy95hgHeXnL7sCWdXs8idThKg2kp6699FWfjM2PBv7SruqbV",
  "key27": "3izBfWzupKwo3fktFvJg2fPjD2CuidCWz9a4XF2kbFNM8tk9nTd2XFegtiiNC7VNxdTmrJG5vugg1YYHhNNSDfot",
  "key28": "2XV8JoNgpygyd2czwtFfUyinVVFVgpXEVSWC7Ew1HhLWVYVBxSMcEaxG3cnRwXh9xoTZzjrGs3oXn36ugJwr2772",
  "key29": "2XaxowhKKyuU5wdCdaYh1B5pFPvHNbazA2wfuaz2gDAeZYNiuuGURq4nto2fev2n6NmxfXNtKQofgJJvB8vMi1Y9",
  "key30": "gCJZYTV7XpHzjLzZ8VuBRsdYGUFLri2qZhVDVACYUWsfsCFKJAw8y5xiiFG7zojGNhLP2bjmXRgm5oij6qfTiix",
  "key31": "2nvxis9iLP9cG555cwHDacuPC7GNMmeasjKq2iGTuBZYNCcSRAMYEB8SPM5NzZhpZyKdzmBrtJP92b1nREdq9vUF",
  "key32": "4C6JQBpuHxEDiiQGQypuptcENh6ZsCZfwEYm8FRF45aCWR2XaajhfvGYUcxYuWZuVKPW6XHY9Y9m6KCcV43m32Li",
  "key33": "5gJ2aHfK2N2o8zA1voj1NCpsy8g5ZsPPfKu393ZGyL6atfhaaMWmNfAv4jf5nhesJ6aNQh6pe9Acnpd6sDXqqSfA",
  "key34": "4nt1bURsPayiWY7VR3Vf1gwhavMvhG2HAcTysx64Gt2pG43NQ7b1xXcTFoeauq6WycnjYzunqT4pRTQgsgJHPHXw",
  "key35": "xuH2QmgR3H7vadw5C28XcdgiqwTApoLvqUeM54jd9r8F9sJ9mBRgxRUBFfKwH8ME2QNYgwZ9mU6qppCfbo1TfGn",
  "key36": "5w5ZRVvrYfPk2J8mbY4iaNSRf1thVv11BMJs7hXqMc4cFoBFe7XWhTupgZZqVfuYkBSeKWobCfibvXe4YEkTGePC",
  "key37": "4rGWQHbfr9iaaQAdeTMGzdBZpt2iBYNQmiZWHog82DNfhXErNS5ibAVREeXvaLDyxhq8RJ5GqMGFh2s5AtWFxJnG",
  "key38": "xKYJtRsvwynd6SRiVQHHpdUwBTX9wD4R3AmzXdin6q75C5mc27YZhZdE86svtrmyDQ4WFNe57hYGLFkGuDinYPm",
  "key39": "49DwUwHbw4nwc3r1jEndGG3ZPtWBPdkpzxwMccNTJoAZ6aX46aFxa5VPDggSpzVmAThyYxcdJdp33YErQbfsXVzY",
  "key40": "4awFKJPbw5Hc8qVeU9N838e4ns6Ev9nV3315RBcjrmk5qKqQgLNSRHbSh41h6mpfJFyCRXY1ZncKtX1dNvPy2WEV",
  "key41": "wP7oWLM5mih9SZJaxd7fuj6V32msdYgaZonDFSueFFT65xWgNa8pXtm1hsng7YXgsn6PLUJDfqq4aU55tUn9APR",
  "key42": "66hp4ZNTiJJotVPG8xAMeY73coPS35D12DN3W8qqw4LpNJ8JS9AjKddreWK9PHjgcWKjCdTFGJBMZaAQnPTTUdVq",
  "key43": "4jN2pKjCdZt4sqpRUmumE8GQzdfGF6PvMvm5DGtnoQ1F6pPco2Aj7EuzpbzsA1FPZcsbX46k2Q5uxW71gXHxQAch",
  "key44": "V4dsYYhzZ8UhzQvgAZ2rBt89vM8tZN933ZY1eLdYNVrfWAARS4HpdN2iR34MDV8K3ey2CJy4Gp3zYV6AMjcxPNK",
  "key45": "451xDge4vBS8io1xQ8RCwV3qppXGnQ3BHWfVGERCwKo55pLw4Wh7Lxxk44qMWuJ3pSrovTET7R2Kv9FTXhgEheem",
  "key46": "5piuxzsm4fW5aEKVqok7a1UQzmeh1j9nPbBSwyg2iZdpgbpdPasJvesXNSsZExXckr5iSDo3h6sH2Uc3UQVkAT6t",
  "key47": "2rzWcD1r7cZCjiN7jr4LMUCZNk7yU7iDCuCexa7WaCpbRgt3eH5ZMEnneXQhtfc5rjA6P9WPYK3Qw1f9AnZCWPdm",
  "key48": "52Zz3h7W7sii3Y9af1LxhUd6oCMVjqwUUS2ohVUnPDjNEnoQPHipuGLodHxt6ZFuLhn6ejZ4nWTYWW53FqGSNjiE"
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
