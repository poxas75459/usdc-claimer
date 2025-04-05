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
    "4nbDkDwZrh98w9nLJmoRSaCaV1oDkDwTgvPcf3W1QrnREbGQZCpP8wLjiF2192ruZfiGroPWk99PQTZ3WvUvqBrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMZunry3wARZaeTuDkj5WghybTjyQpTo7BLrYAxFnXt5QceEYSYWtsuYAZ5xfsFi3J4vu4icbJneyinwC5FiT4E",
  "key1": "T7wCTQcbHz2poemppf3mgJoqx8Wo8deMpEePkfztWEGoYLVPzQy8U4ZWUJNpJwJCS9V2vGbvT7CT41YfMe6SToN",
  "key2": "2BTaRTsGE5RPkxLQK42cJZfZnKPPqpBLAKKPfPY1H5sUgxuAd4avjTAR78RJWXNSgCWf8QNjxg2pqDtAwJ81uYMV",
  "key3": "5KTRLtsqmyhWS39FkRx43LEcq23Bu96YCYK7vCdLw5D3AXYJ92a73qXCNMwdVVjmmScijUoLvvZ9jCBDousWmpm8",
  "key4": "2KQGkUpQt8p5MQY6TpmKpmPPSwvTKmv9KmPgRxbJJsXELjrwm5NhYxave8fBe5F2rXEyedWxPZApnLpfTagTsmz3",
  "key5": "3QfVdyWgeTkEg9JviBfgDyh7uNrmrN4mcMq5ovFkjRr5xPEdDPTABJA6EwyNLAHW2Dn5XJwu7eRUHnDMwzFSB56",
  "key6": "UJESvrjkRaQWJPqS4NEQgfmQjWvAnyWL6voh6PALbWLo6X7QwjQDuQdEziSJ3wBttmL3jhafqGDnLV4Bwhk7ies",
  "key7": "3EfhpKGZpo6f9UcmKNor2o7TXgYFQvNJAJgCeYqaw2YE2AG7b64PqgxbvT1UvuWDsmPXiSsCQSj2TF1rp3igsfLf",
  "key8": "4txa2hmbzFuxBhSKVRVUs2DCN6dgeAUMoaHB1UQNVxTXPMWY8fhsr1ggCxZYY3MvjqwsQ5WbMFWk2zp4Vmr23bCP",
  "key9": "23MArADkrMWPVgYRUi2uGHVEz8pXNUrhHFE4qiTmyURzZS9CqbGjavr88peJYwfSTjMTrvtCei7tAkePck7ykyMh",
  "key10": "3ae83tprnSKtHBu7rsWXygV4siVf6XnhcCXeZatSziameHW1gLbXCWqwc1LQRnqjANYxUFMMgqqdtSgc3HPjepkK",
  "key11": "5uDhAVm6MFAypGZMDWqRJgar2yB8r7TB6D5PjudV9P6Lb2NafA92XfapWA31yrDaxFkttXQ6c35VT8Y8v4NtoY38",
  "key12": "64gKzup9VW43N8ecY7fCKwSzmXE4GpNL4t8dYMAWr61WuarU9on9j14uTGQkfriZHrdmiybLMqtB7LCPBcc53qmA",
  "key13": "2VP3TJ2wcfdqq58KumPTPvE6ZHYgkM1ZZGsTXBSDEDqLzXynMEQG1vxJWF3iaHjWwM6D8FhfMZe3bgERpscenfHH",
  "key14": "5rWH7Cw6FiPBUm6sXYmzqWakGGvWwiMJ7UaL9jKy4AtoPHjWAEccAdfThdZKfQvhJdqQFLac3oMzEzFkpgS3rntV",
  "key15": "5EBTjzVqXkAJbtogDEjoBt93JRvpL4joEmHx52aD3KBYrZoxaE4AhJinx9es5cKQ2JcPhti88YgDtxGoc8Maq4Ti",
  "key16": "3Jq5oSbLxZo62ESJLN4sfJZQ8tg88PsuS1HwCpEpMMeQRVfn5qkWGd2LjFE5sqLBjsJoxBd6j6DyogqnjS2oMdPR",
  "key17": "5FpZ4VuB3e6JnomuSVHxM1Miw22T2Cb9hbj7Coya3BxgZ7BY7sWxeMx3xFAzW2vyexWKUWXCjmCh8tRvYQFgGn3n",
  "key18": "5QLpZA2ivJc9DfFdt847mBhb7zSFbd8ELPQMaoYJUBfBj8LjR1FxDAQRpkFFi3xEmD4ZYrqghUddnN8dxsCwmcvF",
  "key19": "1Sv44Qovmgrg4b2PBKSiTjmHtvvFU9AsWrQdAu5FZCh9itoxe5aV6efQ1t7pLeH7pFVM8iNKSqvxqJeDNNcHnfT",
  "key20": "47ZFvrZVbjLw1c8uXi5KTNdp8forFCSSaqxDUruezMhjCd7ztiqVe6U1uxGzeQEJCW1yaGdbWd99vZksHoPYBVXi",
  "key21": "2Wpzr9z5uHcq6uEbEzDtfEzXYS9vgA51B2MQfgJ67tY7t85QTjvTyoL5cqoNarN3i2RiK1eUTBfNGLPDJBuy99rx",
  "key22": "59dFqc3jsqgtyFe4JAZ3PykCyPh5s5GbRA5YC14qXrbmrUe42eqdTLTiEXYVRuw5qqgbk9YwLWoKwjip49cgJEUm",
  "key23": "5XipE5XehXTDTuMWUV5GmNGNMCRXWSKnQH9f5E9Q9EJhvjSzRxrvTcDhZd3soQpkDKDXJNk7Er2vPW1REVVMEibR",
  "key24": "TFJ4w6JY3k2fwAptwkKD9KqKTWiDhtBhtBybBXtTsd8DsK1ACiUrjVyYKDidVg5Srtd9EUy1T7oiraqCVSs1rDZ",
  "key25": "27EmD95M94UY3tpGRt5sd166ifeq2ieJuUbfbWKwgAVrKE8mDtEqhdYyssnArjLVjSRmq5eS69Ak4GYmexgJ6Jg9",
  "key26": "2Q1ynSYGsoi8cHpxQC3G73PiaBHN1dmp7tv7Qj8tTT9Z3Kdyr7BdAkmKT7EZfyqeTVGAxvrARjAwFMsp2KZnyLPt",
  "key27": "4NtHqLu6p5aj1Mnpgy4KpZhuUG7tppY2yAXucZnXDKx3XQnyMu695S23Bykhf8MbDcMp6oQQsTpGdf2NamwB9Uhq",
  "key28": "5FQDsMLF6dTaZfxnDhgWWy398JFi6ssEoNsfbLsYtQXShk4CoGLCaG1TDchn3V1zEh5zU9sTnxAZdRUQ7gG8y2xP"
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
