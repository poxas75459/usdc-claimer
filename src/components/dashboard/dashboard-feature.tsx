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
    "3nx87h35VGfSeyMzEt3ovZDkym5hsgikCyc5DZvVeEwbKp5cP2tVXQ6bXGciNXq8vBzm8XFri3ykRLDSrsLdSHyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cc3mpdxpLcRHQY3wUWU7HAZkvXBMJcDLcz1naLyffH2Bs4ixK3EMdN7noAANU8EU4uo5XHQWuAq33S7LZWAR1s",
  "key1": "67fP3dXHQ5D14Tyt7Bh6g4JnoyXdQ118wLG6A93DBs7YEUPAuZ1Tfn4HnSVp8Lgo24Xq6EgRaxTJTfE7ivzUEXS2",
  "key2": "1wF7vtsmmoeSmER9gXaVdsesMFuA92E7mnjFW4NbbMB9REeC9DmHbCM1iEkWudySQzBP6LBES29Cj5Sh3ouWA2o",
  "key3": "3Z7nJ1ESHF7NWCgnw4K4gVhNLwYWLsiv6PoQiEe5vdn2sjTpFvQMFrfHaBxYW8sfZqUwUUr6ezDTbvQxP3eLF3vX",
  "key4": "QuXjWMnELB4jLYdx9ztvLqLAANMUouwVzAi47mv1RQSvrGEY2dv6SBdFHUC4iF5jPoLqoVPh4Dbt1ZMtVyJi5Kc",
  "key5": "4wUyW16S3UCZShanzsZHG8V2VRsu7wKPoAxhjz6pmAP3q99E9FpX2kcnVfwZhBKLdG7K6Fj2xNTEWRuzqPYGV8Vx",
  "key6": "BB5UF9rAmRCSXso6sZMBtbE5HXMBc2fdssy3v7w13gDsaQQRFiuXh37PCKJPHpDgmA81FWSPUZMB3XGevhBP4uG",
  "key7": "2avDtDSMkQLR8mFtPX4F3TaDLgTRnzgSqG6wz5i4NeasKyZSTgJsFCnKwAnsPDSU61yTAktu5vpYYM4yu2jyspYs",
  "key8": "2FiDXNfUv6R2Leja11A6bSQN9yqKr8zWn5k4eVSaVM3sZ8WHFfREzzSicbYjhRTCkRCMrQH8GYMB9HkgUrz3KMDV",
  "key9": "2nH7mkjxw1Y73H3FpGBFz49i24ce8gx2Xxy1YMQ54H75C2GELvRggxBxfrfWhYveGF8U6UdAiU9dkPuoeSnSF4yK",
  "key10": "5uHHr8vhNEdirej5CC3BnGtnz9GxYbyaJhKTzUfasDzpMUfVLpaw9zKz9Jsi16zqr9XERdiSVC6UeNCa3hokvo75",
  "key11": "23rvbNGYyhRABczSqgqdwitLYFtJNzVsR8gCDtt2Xyma1SJdA9HYUYKFT7dQvJcYASFNTY72FnsH2iBvWaKtkLPD",
  "key12": "5TZA2UNarEacb3xSzYWhM91MkLFXK47tDKikv1AZSVuE5gC8dcStkGtA1riks3gW484Qnpv9as6zCeSWCKsoACB8",
  "key13": "3L1FJrVGgmqeS19qRvvD4kciTCAaqvcC7xF5mzuTFABo8CnWjWPDscqvSdQ7yDAisEirhC9D9h2BVaV2kGD6HaFx",
  "key14": "4hDL93tvjBQCxWTaCNvbf3tkBRxWUWDQh7r613uYvd4j1LvmMx8FXKwps8Nh72xfUoSzzHSmUYfRhMatUo5LHtqE",
  "key15": "m7DnfWbZDJzDjnabjxJyzzC8BirbQEnEz3i74fUX8g2xW6PwABgnmRWoNAL9MEY9NxuiH39towBRzujnkeoPmUe",
  "key16": "2ufipWbWb2xxK7LZFjDVGVQH9kLyxoj1XwvJfmrneRZGABZpY8JxiToZywpSHBb26hD1sZCdaksEgvKhyEtJ2Bmq",
  "key17": "5Q2Dc949ZWZvNJ2WfTTXqj7HajKEMLAaLsizJMgHviNa8ob6P23PcTFJd1LTE6w885r6t89iQveYVe2hhzUsk9PN",
  "key18": "2YEMphDFL2W1WHXYdpH8TULiHDXajU3EaNKJ7Awc329xESQYjutamQo1weMLki686DreCshQHN1MGBGtJ3igysnY",
  "key19": "4bHDw3wKYR2iWGDJ9vgkC2N6oTTm8VwZZqyERtPBtaZRJ1tQAL8yTYwayukFEk1vB5E28QMkLupS2g9yt7PAaWUy",
  "key20": "2ABMg3mWGxjhkjayHFLtoHVaWAhZ5tRRkk1dKn4j2aydUSCttTffvkgwStAi6AX31nQLPFVyFQeVTUV3YnqpbRwC",
  "key21": "q8vKwuRdddvqU7pZz4QpWn6xHh2QSoMVA8BmGe6ysGQYUqR9HWZzL4xt8Fv9kxwc1oB7Liv9NN2coXCS39z89PP",
  "key22": "279ut5ZtNrJ5MrsYZ2Ln8oY1wRLEHtu17M6vcziuw9CVxETQkk69swaoYVUiWCe9AGASwTBauvvMYJBQD5zmfQWY",
  "key23": "2xfMtHDC2VcoXMVS6KJiSgH8vxLRvFj3mZLThe2baHhNUJxvNMs84ov3mCAAK74YuKejeqp6TLYsUR2bJ2ezvwpc",
  "key24": "38iv4Ku42UBFHZRuhg5wVRWFp3WzJKgqLoBcLYR9xcqdhyCy35NLEYE9cuGjgqR6hA1jahKRrfJMLKkX7TCuwEjT",
  "key25": "368tqhRScpwWPCSzUXfhZy5d6vjZrgBj5QnXWkCfQgNAf6Ekrh6GejjtmksAwTfHxgn7YT1uU1Ekq5Y16ZYhbbF8",
  "key26": "2sPYisCpBm51ahmVhAvTrWdbvmsc3v3w8J3uxTnUGc9NSqmsyKrKJmDGpzkLvaPe9L1DXqWwFuERA7oooXcX8v14"
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
