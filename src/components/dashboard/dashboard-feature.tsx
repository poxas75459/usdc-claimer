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
    "5wQUyVYV8ap8pgDGS55UHiLJh5x4tjVxHH6sHfNULcwpou1ES9CyVhQSV9abfe18fqDZmYKm5oenR2BPfe7EDZGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V63iKodgcchoKXENoDAAabm4muihrFrkmDcENNbEEVSRGiNo9Cufi3Xgv5akb26VAJUGVvP4ryqEyfii5LnD2TG",
  "key1": "3RhvsCAjP5wZ31MTa2Vb1xZgpWaDUbLXTV836EnxHPbQFt3N8SLTcFnEGEuGuMrWfidhxCHgMDsEik8HpC8SZ1Vg",
  "key2": "3LuYhR45cS8REwJjQu2WQHMBBx7pC9rpZybRKx9mK3rvzbYm2h8uSEoC3dXidtDLdebBJWH1rz8ZhKswB4bsYFGH",
  "key3": "5feTVNajRyzoZ11S6grNbpAhNZxeNjy8xLoHj5BA2cRV7rnTk1xWnCGPwoRbUMsTVCdat15uqt5Wvkrkps9oqzHh",
  "key4": "YpmUASJbhRKa5rrPoYwEPpJpeWWJVNP9dKgJQt1RnqvmCgSBWgNCz45MA1DthMyZ4uC6XJHWBs4RZ1w5UXrbPMK",
  "key5": "2Q6mUeNvBaxj6WMLn8roRaFNvoSCzVcgtmgMdukLJceLeWG9RJwWSZuUAjFS1WTmEPFYwS36rbh7drxdXw7Th2gq",
  "key6": "zVhiCJ9eAjbhHBxVa83vgWBgExpMp8fM169uL24M9d5ToXWFdWc6sVfWyygY585HKQsxBbDsw7D35ecs4aS6dNT",
  "key7": "36X11YiRie36kqy24B7HJFu33udnGBuAGKkBvPN1Z3FZwHAjtMDAszihVVRAvWStBJpdz671dKBZprqUs2zKeUen",
  "key8": "2Yd6ML8nG4sYS5ijsXAUDaCmt1mdtrJKTW6eX7UJHxJyqsMnyRpZz3hazSNoyKf6vvDaEY2ZBAaXcfzDpErpcsgu",
  "key9": "4iDEEnHuyiUEXLVgbXeUJfFU9XFVM7WYrYeEdBo6NWcdKLiXzsbUNJiu8ErY7vMq5DG7kofuQbNjE612bt6XWPeD",
  "key10": "4ZcFaRmD9r1Z9vgnMFMYibt866n9JVGTCc7JuawcBkToYnCxHHVuaC4HoDG5FxEsvKP5LDQtbDahMnQVZyw9SSBc",
  "key11": "2NNBQWVgtdPLixNLujt9wNnu36mGaShESvCxMgoyoMuv7p95vYGx7tKwi9zhbKoBKu92DmWhXQgux2s64aKjhZVn",
  "key12": "n6TiLjmo1pgD7qRLYkDZi2ccWLWCv1NsF5ZWBVhbjhwz2PuEv2dBfdx2FXmBevYGE7TMrvbxnqP3ZEMprrnwmFq",
  "key13": "2nN9LcV65JXEAH12aepuMew36qnb3cmwoFzC9cQUqy83VLevNPZ6UVjudZ4RHLhtDhJY8H4YBpKC9JZH5rrCvvDH",
  "key14": "61WneqD9pHqpCoB2TxZoU1DgoRj1uNfsq5DE2uinxXrbLXxnSdt7Z5yw8wuSG1bAbsAJ5j8Zj7fT8xyJuP5Bog7W",
  "key15": "36RVV5o5dnndhArQprZXzXPu3Xe1dG8SB8YYLKyY9T7t61imgFJJvGv6ZXJq36bCqDEt4QkYLVEGkpBvU5PHxsR2",
  "key16": "5t5482nZx26sgmMJCAM9KNr1wciurMerUYfsoMaBC8Fq2c3kahdqJ48r3X5F93pEkDyz5eyRsxETxpKMRV3gqewq",
  "key17": "mjoK1q3L2GULpooeQMdFDh1whCKY2roUMgRciMhnEDxJzJ5UREDWKZWKyh34y4Y586zd8hSmM34pJRFfHvn9H6j",
  "key18": "3WUSWXeDnDGnsSadzuMmoMseEYNHFdhDazg7NrffUnBpizCjVJAdeN19xG4rahsUAeVhPFNu9orenT2z592UD6xD",
  "key19": "2Ry6k6y2n9HUcNzGT7FNGAz72CTaJ7qD35XAKCUm2r7WFBqw8uBTLNKUikTFwEhXx5t7qWmVARS8wNUjNUHLXGQ3",
  "key20": "4qms2FxZ9BV2ThHdCK3cM98wzHvvJfHj112bQ3pouakRpXXLSLE2FyURNubjYmsu7jhVDoxMQyBpki5szGaf6yvi",
  "key21": "kHs6oqyCQx5kGphRP4BTuuiMEwkWsFGxRN9jE765gk1iGUwYC2UH4mmf6bqmGZ2fFtibNQad4iB79sscESjwL8J",
  "key22": "5oqMBFMv9JvDtueYcwv1k7B3TPGKTWjiH3YiyB1FTkvzfka6Bm3mKedkKiPvr9eKe4TDmez2jyvhEXqgzudohtc2",
  "key23": "5nPyB6LKpm8yzDdDErMheeBm7sGF14kbDmzUc3CXqQwqzyHgXRhtxYaoVut5iKSqu1AJekcKcGDXB7R8h6cQ8L3E",
  "key24": "3qsx8Hh5kmf7JcHHNqyxk7Ybe8StnJGnE52hUzpx49mK8tbDKoSVrsMTzXLRdvqVaYF9gLZvcS6SppLWtgcy6cZo",
  "key25": "5VJMtgZFFAnBgKi81VzKLBu1Y9qSAG9TdWqMgGdUdC5QQyaYsMHeCyQWvxWdaPBmLyELPuUCEFT8rHY42B9Ec5Ki"
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
