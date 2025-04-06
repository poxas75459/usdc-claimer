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
    "4QS1JH5AfWEYL1uWesTo1F6jTHWAmbvYjoK4goV7EBmSTPbsHAwYSGbbr61GdmkXLKNt2TJF34TgW3knd5eCMTWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVbMbL2QLejDiBA9qkZSZ9MGR2nYhSNTw41SNiy9uChm8XQS3EwWmkjMWYSyA3aRvz731a7fgy5SLHBy1w5DzLC",
  "key1": "3dULMcaUArmdn6Fv4TEXNjqGYKnNWgU28HsWv74SyHzJxiUET8zfW5e1CwbD14ugqThBqHL7Ru7YWZiKa8cYCfJY",
  "key2": "5nN25bqN7nEUkRVM83tFnqoWHVk6K4dd8GHnxzbG2LeYWWnNX4has29Txz8fpNihrKfTt3wRrpiMB76YPt2B4BRz",
  "key3": "2dsfzospVWcgatXsZiBMEJiFEC88sScmo8hmoP69fWR4JSd4Dn3WEpZ1APm4W9kZtaQXuXrzuVUSZGeyRKp2iKgE",
  "key4": "2nsw8wm8uH2jFGvemNX3Lrj2wnXTyjLsigE77STk2uKuAycWcBVTaHnxdisxLVXvpJW7gGosd1FNFxWpwTcXrPHd",
  "key5": "23poGKAaQfEdZiXquactmXhTyNj2azFXaf5sbPgHuomk2JkJ6BPeoRMSqCAQfHWLMZjYQqFLLbieTyEKyzrsMGpT",
  "key6": "3Fa61P1z7ie2xrBoZtRzafrCsmEMwzvHbba9nKjx7gbfH18sXhpFkfz9fo8tG3xVGxrSxCRf8FmGc1wAUBKLY8yN",
  "key7": "3Hy4HpVgRFghgWRuLML16MYG4GRS8sZKykUfpRiQA84Vu8vGAXpj5V7AxSCERLpi9y9TwdNZKZwy8WZ55eUowc9c",
  "key8": "zp3w1GhYTqNdEskPpToYaq14drJ1aSWpwQYAyh6Kg7xJLFc5PxFREuHejugBpBpBresfLPT3GLeAG4B8avPPX2s",
  "key9": "5eirt5p2qH4hXt86QZFQsLBpG2qzAWUxxcTwvyemxKBAB6w5ukDHwaMqYFYcYjk9CaqVzstgC72mNZXityhkhWkU",
  "key10": "3C3xiX9t8Hnqk5kHFPbDGRL3DHTCQGgDbNir1NNuA9RUHiiq7W4bGm7x1iMihLjfj4gGDpiKbHmQTbmBnVQEZiNH",
  "key11": "2tvRMi9kZK5wwBz1yihhQvw1UnEoXMHJ8xSxKwE55TvoCnfG9dQoSqaM9JU1s7QQoyNuEgXV5PvFgw2VuPcAgx9f",
  "key12": "2LmaGDxJo4BBXjXxdh3uAgT7iLsMCg5cJUeU5hwfsYgCEukPrXMULUrjdwHtHQMeea6gwKdprGkPTfB7K7TVJugE",
  "key13": "5nNfSrqEQB8FR4Gr76oeeT4o6JEdUBtZ8xDGk9kN1Ki4uqiQwb4ZrNBbSJN725UVHx8oBKUTM3TB4dkFYF3YFuoB",
  "key14": "5UuYHEo9F2M5465FmvkVFYhKVb9wYpvMzPBUUdHw6HtcujccbLwFwGBMN3xyFjJ5sEv7caNwHCjxT9EWXpXpttg9",
  "key15": "3jw1opCEMv3cFPWVP5PoXervasrUhn6HMKysjv4zs5SGHE75EKNR62G1Fmp4KQ1PSPdoVXWQNsi648WQ7jY2JK5d",
  "key16": "JhkyAnjDQfjGPm9VzRsdH32186NWncyNBkDTQJFuzRmoqH8fpesahsa3QjsJGPNCh34uu2ky59AGeTs8jytBKqJ",
  "key17": "3qaJHswLVPHTn32rR9davGAV7Dz6ZkCRsgzPYnBnL8pJFbE3kWH1q7o3r1pnCLT7823AmZubn8WoQeQUpkLrx8K4",
  "key18": "41TQUPF4pUy2tpoxWYkuyhrpBR6gKDG9kYdeTjHktEYMGH5jcjkKWtAvfAyrVaWSzKp3cRdp4GA1e9z7abVYtQ7s",
  "key19": "657AZii2zLx8C8XYmbnwJrWaYMBUZ7ykoSsiLXBR3DZMWZA7TPxFsJEYuXfiRveh1nsa7WY18DLg9nYLo22jwsnq",
  "key20": "KhFFjifYx4gzAS2vL4ZYM6k6EUR7wZ5s1uaWpCaH3nAsML4r23bRMppvY22LUB4LEsnmQuukUTvmvtwXHmPuJto",
  "key21": "5qYjPrRmjcgXEBVjrszMNn61NyoEm2b3UsrWWpjPSNtUcjyfpXHG13th1uFyPp2sqbNpd91gxjA23kXtfTm4MfW",
  "key22": "c67ifAYfGGNtSiy75tK68PAxiFX2Gi8MWUL9XP1FXtnT61V6YrnRerVRaqJoisBK33VJpAV6afeW7JB7je5chmw",
  "key23": "4Gf7r7ZpoCfihPvfLM6cS5bdixYUWo2Pnfg3XPQ7Y5p7fSzS3S9A5no4wqLEZtDsNUY8rSPZeDvCiVFfo8DEfX3U",
  "key24": "7FuYWuJZMcqvypbnqP32KeA8fA5BkyGZe2J1NAER9jPTTwYkTeWdcY3MweehygvTc5G8FkcWFMEEopiNfBjXDJ6",
  "key25": "4cwHZhH1D6QEy2yb5QdKBCbPPH8XUUhze6PVaVNbKKMsVs1zXytxYfvsPghzdGYgWmKsv6xK22ZzL58iRieJNzYC",
  "key26": "bd3qHmNc7BL13oXGk5WFXoDGw2yo47f1c3VfyzVAFNr83CvfVddbdALjDx8rEdU8EBUf5Ta4XYDqyXeaEx9JiZk",
  "key27": "5GsY1M25xKtEznHj1gdv8EbY9Ef21QE6SCB6PrmyWgnNF4jM9dGcbSg2YiNDtxVKDjKiVGf9z8om2hfHoZvQgwZh",
  "key28": "2Nze5cEEVjFfuCQYdFc5VfZrL6fNDknRUNJxFgBt9b8nYKaiwYhaK2QW7yN49VEUFoQSQfW5gLcYBUuwNLzU9SJw",
  "key29": "3f1kYQv97b25cofqwmDtRET5rjWEk1qQzkfafh2rdJ3doNr2CkWJZ3gda9XDyQsRMd21avKVNmoAGMJJFie8v5Lu",
  "key30": "2MZXc4mD47ZiPYirmqbXpUZf2w2QEAcYYPF59i27HbrNa253TNvofbezZffjiHHxQsvVMQTjzafYdLtFdwGJ3Af4",
  "key31": "65Jeu5BeWCUm1Eh3YzDTDWmgsP5LqhJgKrTuLTvvQdtW7iFcCuQff63HiVTyC7qd4DqaEMiFoLZE8tdjoMZezy9H",
  "key32": "2TETB8RZKNsV7Qm1xSPJHLg7GptfToh7xSCNAKjcSgX57UNWQZm53qqjj8ktremo88L8ADU9tY4AgafUyvVUMmwE",
  "key33": "3VpDVUb5yjkcXzih37ibtJcVTJWKv2CysCb5A3K2Myi3gTujMVweNAxTgp2qWYkYcPPCeoUsapJmRV8LpY2Q5ULF",
  "key34": "2HQdAuCEtyKtAzgCSUSomtWsoHyGRimi9YybwVGDjiVYaye3qacHf7hgCXcwiDLq9igFYtxVP9nwHEBe7gcL7QT6",
  "key35": "4kejdqJ6RDCea2ihF7uaS8UU5caxR7H5bPtTA1SF1rz8pM4SYdF8AEW7bcfXm4RKusTwHyHwe8fwVmoCavfZpwS6",
  "key36": "L5kPvmGXakA7t6bsCwVL58VG21tbytLm7Gxo1EMYQkb58TMXmSjWTWS8VpU81gg4Q6wD4UtiT5BTz58ktx4caWe",
  "key37": "66rjDc5zsJDwfAUoQt1vxhbtsbrgB52MpvqyCAhjcnZeukTofJyPckkcSkcYkNw4eRicuoNYTz7ry7RACmheSYFa",
  "key38": "4tCzRYDrHcdvbsdwY6m6jzTqfrzdireN7VG2ZNjwAuhCLGAt2TTEezy21uPQNcTMkKc2vB2DHz61oNLSdqnoZnWk",
  "key39": "4KyZsLURJDjkHqZXSb2RYuvKiyaTZ5wmHEnoCzk9EE3VcnKKrpTivt6ByfvSH4rHyQSyZe4rpARoe9BLGYBCHxPV",
  "key40": "aUe4hEyDq7Warq9kPujDhHcLWszx6RR1x6KHXfDE1mmfTLGYcKvDF3vML7pQWrJ967PwdbMGKaAT9Y79mvnMrVp",
  "key41": "4oQbvVCveFWttnEmBBGhLKSQEmTSvFn5k4y5ntuxCykCvV96nVLs5U888iBt8VDcoY3YD1Zy8KpUTcx7KgPz1n6K",
  "key42": "2y5nP16J28sTdEZmrAjJa26ppHETqRkMimqY7aSE4DroqTEmW3c2ShqNDgrsfaevdnKPfiukWF59TvvggvYBndQ",
  "key43": "2JmHkVJWKAMCxWRAamo18nLUXZajBPKavePsxfsutL9H3L8skatf4akd8MAAnGpgy3wkFepKSTfD4U8AmGPB43aE",
  "key44": "5PirsTp31CW7vPLFnP3L48Qkd1T55cV48PVqQAUfb6YZrkCAJcMPMNBKJ5h7zncQEPBX8GffQjwGnnQ2zuUUrRtc",
  "key45": "5tXbXGixkNMS3qGnWSp68eptMptdYJ2eWgAHT6yMRnViLowqz93WAjbwnSpu1C5y9z51xRg4JCuM241z5a8g8iMk"
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
