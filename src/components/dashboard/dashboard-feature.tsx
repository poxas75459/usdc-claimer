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
    "2cVasDcZABMSrXyhHcABvX8gY5U3TB2HYSbUQegoH9tvkmnzwkEtsSQVqhmnMLHgG6ggvKfjoEiapVUZQoTeyW3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rM4KciCwf12wnVsGNXqJB21f82S5AQ9UHeWGpm5MVN4qR39L7RvP6vrikaJhNqjYYza32JAFJyXmsnxnwkFKrNP",
  "key1": "3BcfHyNbxrSjFoYttt1zaFdxmANx8yYj8rNkU62kHTe8YiwNt4Ho5rXtu4n9bC8Q72uuzphMXmSn3SBFjxZDo13x",
  "key2": "UTvh2EgnsJMuzFaDrsY7CkKAKKGSn82zsG4LKKzPGMx754ZSXCVJvqcAeKyui2LVDvkRRMWSicWi593USeUrRfZ",
  "key3": "3QvLQwzoh7T7KBcXqasvBVbCgeWpUMHsXzhwdjh9Zgk6X2dYDfhB77pic7F5UwMdMf6DTfbW3QPYByCtng8DwK2n",
  "key4": "482gEeMqZGp8qiCeirnLT1ygWPQndmFJqnYBLyrhd4HSh8oxzeCFehqWcxiUUQaWnNgL4wYn945NVujhLhmkWMTR",
  "key5": "3PtTKBBLY4koxcxf2vHipPR6SQhFR1c1zGjfB2UXwCGCMDP7UU7jvBUiw5829em2AudshoU6VSngsXjx5pLEf3zH",
  "key6": "2g7MDeK4bNg8fe1WgNEvaHC4gbptrQX6399xXKHk2djdWap7EraUKa6PTR4Vqp6igKpSvbxGQN3D48hi4GRSWHqR",
  "key7": "5PL3tGkL1Tuto4UhLtYyjcfBfwfBGhdjnKWXAtmoupFsZU9VZbPhFpQF9u6VpDZnv96cWzwsGDPr17G783EweF3w",
  "key8": "5MQRzCbjEj3tmmd5GUmKxf8f5QkrrA9Z7kP4yAG1e6PJUvsZAZvvHaAsyKvJxCNfDmoecF2uChvMvHzgy6zLpyLf",
  "key9": "67GvwgbiWATxuY5n8CkGPobwr5Lukyykv6niTFynKB95zrwiYWMrYWRDkC4AMkFhsSjypW7mrWjaaCo3dTWC48PF",
  "key10": "4RwJBsWXgTuYZUDZBh4rMqgm1QyQiWd1vkDe1pUK2PUgxicoibFtp6ffSWDMc1ZS6K3XKH29uUgoD9Y9Kdioxpud",
  "key11": "nYRWuuHmGF84xh8s9BhJUcmyAAaokvoppCVUK9H7tY4Eymsi58QeA2f4efddxjJgoKvmocrVM4KmFShsYLdjFa2",
  "key12": "2LCgkJRaLYHYHp24CQQ3pGreT8XeYnRQp42k9Zx3nSzXUjrdJyARdH8rkkdHzUurXt9a6V9ASdeGHut9g8bcxk47",
  "key13": "2UXiWS53qGyCTsaf8ZryVvYvzxTtNtFp8dZSJUXaCBwsX9eJHqaYZEmRH5oA12eE9if1Ee13a2afw2r4XwNx5M4v",
  "key14": "3w2wYe2v1rA6wkre1czGEwk7ReoR5qYhcqF1Mz94GsyzyN6F28srw62eugxEDjAarAzBS9c5JJxohNwAxYSWTfea",
  "key15": "54iSjzUSBuVawky4xgtV6HHDN2nQ6bfoxxjSrbh63diExFd5B8gFnP6on38T5SS4yES2XPXYLXf7wxcHzoZ5zLow",
  "key16": "cW3Pmbvo3iY5KzRogukR72LfqcxLyvvHJRgs4gFAFVZjkmL1ZobitcCe9NAVUFpX8o7Pa2CxeQjE7kaejvUG6dL",
  "key17": "5YsXs1sUeuPoGH56EHVkSvKAzAKHESBg6gZD7CcRYJHp2gkodq1eDp2of37Y9imwiqR941a1iKzhycAZVi78ZmGX",
  "key18": "38UPQGNYUtEtJV6sZLHdG2j4eaUteYaKQg1mfcXby7xVgUc5xkpAVrAMdQtTBVwB34ea8n51EKUeT5HdNnjjhUnX",
  "key19": "5adS4CfQX9Ut6SHKgBSKBJw7ccdY8PNVV73LartpGmHGmFQ1o8LXRpYPE4HL9mjZXURTEJ8S3UGQThQsVBku4BYs",
  "key20": "3DxN6TZ3ApLatdMa8PhTyzXZ4U5ebGc4RYWm7kmWxTpZMN9yJh7TZGeiWoRViRqy81a9FLkjBrgybgtYbYPiqVXN",
  "key21": "33qoMStJ4Ad1Q5ppGJLxA5ZvS6nKYAkT2KSqCzuNgBionCKuLAPGsGrZGxqAfsW88TgjPjCkay7Lma11GzRNjG7r",
  "key22": "2QfCY4cn7u4HtzMsL75GTdqSwza1Gxy4jJkwqbM1REZ4A9PR1TyRcK6L9zYxdmZm6oh7uBMvcDgLRoMLgKf2Ju5d",
  "key23": "teZ7wXpTrAWZbiKV6peQD9zZ1uczJGmuPH3hp6G6yQNgE4cFGLpxVPUG9pmKghsK5S3zP71jkitwSnoxhZZcUQN",
  "key24": "u8EkmRtkDSh2DifzzVjbDTigCMU4Trv68pBcVbNKKG9veHm4P5NzwMGym9YPmKLtqM4scQyx8FW25hfAtfASgGQ",
  "key25": "24CjZgH4fdjgGp2qd8PXNU19KnsiG6FuSF8H5reEo3JrQj1yDrJkdBaM8qTPffPWvJpunngcqfXoau5bTjf4rE5p",
  "key26": "61Y5QVih8H1kzcaCVELqTTJSaG3tCfBfxTtdxfoSMoHVbYydKUCaJDwMVTCRrwdd35HXTWr3bkCAi9zmaKUSHW44",
  "key27": "QnsjJ7Y2ANn5txdqzvC5WyHodKvFuCLJkbdHC9WMburbiC9JK1sCkbBk2VJnnJfLQhHSY26RD3LPfTxT7rFgA5o",
  "key28": "2MXJk47KXQQjRJDujupNurZxJ8xZcUu1KQoxsd3vuiBhVG2HSam9KrNr8YHD5EBUG2Simo7TeS213HjRfJQSworU",
  "key29": "fgg3ciWAWLDa5e3yHmMVNieAcUw5R2SPXWSgpHZShNECyGKHG3hWYtrzpkgNDQzcNAvutTxw8XFPXhCVkNtrH8S",
  "key30": "4fcquPb1esd8XMeuD1NLCL4cSWDrFk2eYvA9SHXagVfpLBBf4HnKBjc3aS3jiDg9GCudVCB3KLmsxFdNzNjciu53",
  "key31": "28U4gnTmAsyhy2Bm4TBdxz9u6rta3bra118RaZRZZUfDQWzmzkiT9XTMWitx5NmkmKgGpfwpBci1EPBSfQ4hA6iJ",
  "key32": "2WHe7P4oD2r4b9fQZr85P8p9vGSY46FSt2GiYN4K3gyJVBbUaxrSPC2zommYEct4pj59BaZMdzmSBmFGRuXAUXQt",
  "key33": "5G8CjnYcxqZhCammbaizNxRw1pPfqcbEfmThpVovqmayQavpKtdmM8yjQSD9kFmt67De67ow47VwHBzdBpAm15SC",
  "key34": "2KLRYQyie3x38EFNXVTqLzznMxAiUBtbhkBKUgxi4DBiA5k8bSRGAJJvTUeiYxMHDs6dewEieWYfhEp2R2a5AxQG",
  "key35": "4i4L1RLMcwoxiRqFYjYaeTy5J5ScPeyoCoxScTzJvyNaBqnNhNhZ9xsi6nNWtug2WXSQ676NjTuyiigoQeEAiApj",
  "key36": "RNtToVKgXz1mkYt4frs4Sd9FewkBhbzKzajNky6Ux1HDGeo3taquob7UP8pmoz3ysjv4U6E9L14h9UcHRhFpTGG",
  "key37": "2bdnKRgQEZxWVTSPgod53iLkgwxPsxuPjajSTmVxoGhDrNqP8BzMd2G64x1224nAFZwe5Fq7EcQCfiDKiSJmN7nN",
  "key38": "36oV75v23DCuEsP3AVQiya9DHx9Y8w12Z3nSsHQnUY7pgMQxsUjeVWSR4HADxndFnQcjfrCv3T3CyRsatUqZJU8u",
  "key39": "494XnoJsSLunH34fUgdz91QiEHwnT2XGjQ9Lezbi96KA4dR4bbayVsBGfXau7fhbChv7LDSpKwh7YKrUYUTibznY",
  "key40": "5kDwW6RosFoKcL69qYrcovpBG4RSuUwehkeS2nFNkPLTsLRVYQYg26B8V5qs44SYbF6ZNZqYu3ZA7KsKDTxpsBm",
  "key41": "3bLdYYHk9UUcR6y7SuL3Ep3pRQMBeNeJ1C1ctD3LEDqpBZfCseGAjq8uWhJiHc7VznSRtezd9zWgoZU3fzMWTU9y",
  "key42": "2cEXGYPZMJDnRpRAJBSyHmBg737ui7YX1MbFJzohem6SWPt8EDgbFAjLjXbfFBkd7SwgviSsTGXQEcCcS4nNuotY",
  "key43": "3R573zaSQz9hq6jS1MEyFa66wi3KNQFNxeL3eKVgjX2kcBpBojbACTe9GXctuW1oHzMb2CJ8PuLMepVGcYS6LRZW",
  "key44": "4A1SvyoeJyVYHUNHviQdJrUhcQWu1GHBaT3pqR8vfWNfTT1dmqkzx2hwtDxqUJSdiL71x3GL3FjQ8fAcNYUvWQLW",
  "key45": "5zJvvTa8nbTbEUb9dbhqatRhPnFV1v8MxTkNfjzCLNfH6TsCcQRarPf4eU6yuiMGU2HD8s3YaU6B3KgyvXmC53mm",
  "key46": "5Fr1vqgqEQmY6gYhneQgiBH9E2B1Wy1n3Bz83ee7c2vVv8wNQ4JMcrmHUX1gvEfy75Pk7SQgUYCbFRU65Zf8BrG9",
  "key47": "3s7PKjA84R3D6MufKwfwJtTWyZ7MqXduYhJn3tC9KHxxpnRNvVue5GzHcT7H9B4Fvk76MY44uQgPFQUaojQELEiD"
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
