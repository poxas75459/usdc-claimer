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
    "5x8EiXiXdbawjkxFonkhZiN2tNTShA7GX2yukGZopMv515GD38pa3mtKNRK244PL6i13Qm3hacjBVt3cUXvL3uq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9YPxEarabXwuFHtCsEw6ywB9pFVuhi3PHNm1HrSvLfpSspNe2VJvw5QkzmKZb7KP2dz2EJjzYJUpHDuoX4hpmD",
  "key1": "3T6dDrnrzjDttw4j2rMXLjkigBHSHRqceqGFQrZuRnoPyGVvbn8qWCSeSSr1f994k6wEhn19UTziZjHK3Zny5Svj",
  "key2": "4xCQBELU75SCQiLHYt81zYkomk1FtuiSnp3XkVAWkHbaFe2on7pLpT2rdf64ezGPDLfLn3snj3ohayznFixqPzf7",
  "key3": "4GJUSZRL1cvpkvDeqhJxau79DqGmDorzz3p7W1ai3StgwEXVcE9i3DB9xiqS94CTVArP1z7vteC58m6Xz5ad2hsA",
  "key4": "e7boH13QPbvBYRZ6ozCFYp5YYtDKhqWXHFZzusBHrawKijJMioV9ubeegTZsoyQDi1L931HzA3fgNZm9wt3ZPQu",
  "key5": "3BapUaK5dqoqRsg6SJBE34ec7wV5rVdsHoYBoC4hVzbk4kkqrJ3HPhDphUu9ikGyXzq7LcYZjmLU7T231Zi5g96i",
  "key6": "33JK7vd4bntnVNCaxbGk6oRD2fA64T2iBiGPg5xMqQ5FjvTive2PaBk4X4xufBbj89rgLHTTtBaamy71wtuG76Qf",
  "key7": "3Rh46A9niMb1UqJx8cpBRujkgHvH7Q46ReMLh4A4AdPwvhoLPWJet4az7RXKczq4nZJYhDpggMWxfYdYHGAdyU4k",
  "key8": "4WfgQhF8cFAz1W8Tvs5mS2y8GVL3kQJikX5noeWhX5X2gMFSTeBriZd9BngNAyxAXxrAzRpzYXRQpAsDBeyY6C8v",
  "key9": "3jsrbhkBJ95xiYXnn9s133CsDybRP4run4bXUAkMAjTwwFERfxZYjDR9bBXhfPgRnwwjk1TSsY6CL6hWJuh14mQQ",
  "key10": "4AmUkqVwtnksXQDJpy7u5dHZHGoq6dLifhh3JEp1W9dT88pARuYtNeA9Gg6WEFKg46H8f1irqRbzeD75Zubrvccu",
  "key11": "4Nw3qX8YbTwQeabwVBQw4KndHaRDUsZD6t3pYevipUyjrxzKgNv5xsgr6pHNvTDwLyD8C75yoYRJ5zFCqPMCohKJ",
  "key12": "57L9dTf85yo5wpSYoGTPexWrjP6hzASc852CAhet8jT7PJoeRte4RYFY3w7A3qN7oSYdHpekrdZc8y71vAZy8RcJ",
  "key13": "17ojqC7cmds8vsj5Hn62yWpsLiLyTRgF29kHaTSYEQXrnB2VXWdN8qthuwGFYo2NxEH56Ee1DJAk2fW9nrJzn5X",
  "key14": "3qTvzSe3kenvMuWSXpWrSmBUW5sH1v3JQHFt6b6oQTpmsFVQS7rrMPGtW17gNHu6uRWzUwxnU8hMyqkn4qNHoa5T",
  "key15": "iMUpDFsNsfjqjvjbQc3W88bBN7Yuk3ygW6QbFKzyGci7ewyMuprAmPrQD5Lbqkk936tuucbqHLnVKYMKSKKCxA9",
  "key16": "3Pwi536DkmRJxq9MUz1nbrqhJZw8Y6y6Wgh8oFJCZFb5c5EketP1zkmNCqqdCEG2FFwKczLxwvskPFnYdofiFSCE",
  "key17": "5xLqZV4NaLdNkenvEZ5r66VzGn5huL6fFgfdYULwYEUmGj397qRQW5FXdRgHsPNiqk22z1U8A2mDRTscc71xt8bv",
  "key18": "T11ujRdp1yVcURUFEKHkuyFU1pfi6BPKr3npJwxaTopJp2GCJq8FkXi6NbSJ3vzS8CWoEu4ChQov6TwyAD47edi",
  "key19": "QgiHUUdyDuSZPMA1FQVz7U3BBVxWeCTBN9WcsgLCBQMSiZg7Qpa2yYLVuxpBPXkL7ZsH5acipa9RnW9W1vgq367",
  "key20": "3znTXt687PzMAHCPF25LbTG3GD9kpeBfbpbRUY8NV4wHskhBHJ7vfoTNv5RfaSx2c1jVviERCrc5sVWrG1S9ZUDJ",
  "key21": "5d9Kj7p5f9KxVCyXaNoS1NY8rLZ1AqYPqfNaDDWmjsRng3HG38Z13rh7RD6V3aRSP2WJyjWEqAJu6ksaR562Ezsw",
  "key22": "weHmjfWpEMwVRyaHMEcdjEz9MfUQzdxGn7dpoNUkBDe4W94HxkQ6om7M38VJjqoAx5QUBMkxXnHnsoNAVEPbBnU",
  "key23": "R8S2EynFHKoHsN1qcq3UGicmZ811ptDVd3in6LmuER59hgkYuBWYwjiKaab3USURrA8VGMiAx78Y4FRx8bwiCki",
  "key24": "2SxU4pdgdKo7LjJjmFrQiycDn1yu4W4hnRV2rpFAmkGQCn8ZrFsbEWxT8H5Fx1sj9ojcsz3aBBMbco3WEMrqjetD",
  "key25": "2KPAN91axjWjt9S8bXjfLEbJgbDcjAzh4qaY54EuDYJgKoGbkHFy4Q2WDxryeE7GC7NbURqNwCTTqWogPeSiL6Ms",
  "key26": "5r6AJ7phQwN4FQ6m4CvGSyCudMAAKiCG2PqBugdk2EpuChsDUZHCQuC1k6JqpEyq2QRNu1S815gfqEzwKDZumDAW",
  "key27": "wWMqwYb3EfPCYroQACoRCZkgg3E8igj62ZES9gofqbU58cVtNe3j1fw822VYCZhDMPNLrUmTX8nnqbHfyFKx8cr",
  "key28": "4RX5M3piLkBhngAykDV9vrvsC6uoosoH4JLAq4vxjstJdET5rsZS4ienso7fTw7Lss6Tg4WHEiLeWiTKxEZj8s6J",
  "key29": "5jwMcyEVCfhMgpf88r2qfHqu4ckUmx6DDDXD191HPaX68vzSiYLK6zKwRkMR7Q3jw2CM4N46rHeMjBsgZurL1oyb",
  "key30": "221JimA7iEQPqACxBXCZZRmrYX4196tcrWaotagQ5dAwzm88N2UATdopT2GYYxxrGHXrHEckv7ZJJZVh1DbCAyP1",
  "key31": "5BSpuC4YMpgW1E1TPzXrL4qfxvZCYHVJgj27X48HL6PhzFiicTR8qxnSZXEsQBrJc4d1Q2PYokmibV9Nh651Y3dF",
  "key32": "4Nb8iPhsPT6CdfLHMb5XN753yD1ww3xczE4sWc4S7bfdc4K5uFgceFyf63BnsZd3uCGS5ocPQDFiCFBPabCi1rtU",
  "key33": "rW3NA7tN7nmHBqpuZFpKEGDd5ByKSyjUuKjbdW1VRPGAByKAA9cVJXUMJXzUZXyfaCCXGVgw8nQxHcVeYCZQ18j",
  "key34": "378CJjoVyn8iW7rakv8oZRPin9SjcTx7YF8BpJ68V8z9MCpJL2WAEeY2GDot6nEPyum4m7jQ6CqvNkuSTazdLqkJ",
  "key35": "4smwVUfGmZ9ZTz8vvV76VJy9HfdnuJJ33TKowKUaqKYLvcVdesGjRgtAEVfjU4uhdXLzm6DisSG93tXi4pJFc8is",
  "key36": "3BxFDn5qBGbZk8XqfodtBVqVWT1tHPyBCdrcAqLJKvtGFXUaxLyg3iWqj2HCYaHGmhRwEbtEznvzYRNTSi8EWe3i",
  "key37": "yUEo25MWesRPCvBPoXZyC5XMfraeopniNkab3BLSD1bY53BbyNM2FcfRudFv1tpNvxfb7WQMQfRfQXer2WX5jcR",
  "key38": "4dfsd2NQtBGUZRp2UtUbAqEF3FwYH8vEhkkJQjsJvgjkeFP7sjnGVwZqpD8Us5Fd8mkQJbYnM36aX8bW742YJyhK"
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
