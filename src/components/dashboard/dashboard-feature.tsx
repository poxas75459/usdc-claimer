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
    "3uonXr7ZKA6hdnqghhdvNLYW7212NzUNJPPKfAmfpm6TDf32bkfF9YgtMJocfzwTuLBwk1ujoxEfEgRf91adxwi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zqcsNj7eKafqxy2Thg78GQFL5gzvYzstd8hRiupDxa5z4A8xHBqbcCFLaUfPqZLdXR8W4HMS9wVKZ1Ykx9tqyQ",
  "key1": "3JkxXU8k8diBkw3MWJKiEi7F1eHpHp433gpdT2xsTXSiFNfe3EhQb64bgBA8YjY1mvdRhUq6zBHPDkS4jq6eQZTZ",
  "key2": "4SX6ekUKD2FEpaNzotDLMQiW9Z8g35hXuvB8avpbcDZSunBkXAVMuqVXuvtSrJRJCaVW8QDyPuoZPY6mkZcWaWnJ",
  "key3": "4i3PmDhMp6cgLQVRTkSmv2Ag2JUkUvUo5V7n6g7H7Do1JavHRjygdA9T2BtLNQATxcvRBmQepDZ6kHsAZM4PZVez",
  "key4": "U21cfRFJvsrsu3svDXz2qSEn5zGnpBqpZ7LBoueU7Yi8vg3gv2UKLydpoP81o4SJ1SP75arMQsmHtKwEcvMYALQ",
  "key5": "3cwWA16uAEifaUyjxdapPUo3EZcB7CpEcet9SgApCDxqKdWhd9N1P9aSx1T9YpF9o3miomJ8q5jk87vjrsyoT294",
  "key6": "4xQ265SKBVnY4rPfDYQAxySWMV24D5zck52QpE8tCHH3c31cYLtZ1KkAbt6wQneZxscLBQEqBGUaYB7WUGbHhuf",
  "key7": "2UBPZpAcn7JDGXBGTC3qm85ZALT4Jd6c7DctNuGUkXpkmVuvp5iponZJfMEWyLGdAWGpyBhKZpWiKakG3RSxLpgp",
  "key8": "3uypfUj8e7BvByrNZBYLqFENJwXLt8tzdG2ut8zxEED2Y1QY8XcUBGeKuhZrRSgMtDXLkzjwwVcns9fkKnFDdDyo",
  "key9": "2DKtUFYo6qpRE52K9SX1bQnce8TbJdrNQoh4AnJk8R5C56NgLJLgxYgyHUiS5jxycY7rbGPegizaGecPJciEBfxv",
  "key10": "1nXBrv4w92i5MDaEmB8gdKx9wjYAZZXxXXUP1Q838gSpRZuKqUQP2ecEDuPdL4BGLrNfAcBK1VJmiBSCENHf299",
  "key11": "3mjxTmDmCUmNNDzGHHk6KuXaXLtSgWyiPo4QnmPPiMYcuGGYAg1buvgoAWWeS8kEvdyFbmPwbL4nocSNhE5WN45M",
  "key12": "67o5GkSnvCw2hiDq5gkCWnBpZdUUuHFASCcT9heN8BFr3xgpLE4d223iwv86SJ84tvjfVzDBjpSujqh2odRQATzo",
  "key13": "3ap9c1nthiP2CpMvHKAz1KJrWmaQ3orHiJWy8xQLUgMhkXab8JAvjyaYxqMfVNyYp3jienw7mimweMw4Zj3n11uE",
  "key14": "NAxoBvp1i1MqSpi9qQxn9haJuQSnqTkTGBL1NZLW2f5xwt7YZmx7jvnL5vBVfMKmp9PwkF57NpLrHjDkqcjpNSf",
  "key15": "5XeoTpQ4EGYvEvG2SRc95gC6yqBJBXoYAqdgRdoxEkd9MLB2qvgfXT4qzK9z6DfeisLZ9jJsik1Vo5BTGKr9qqUU",
  "key16": "48c3gTWTZpnKn9FnJueCmzm25eLdFG5MVRniq8ADy834GqqhgoE8RoGn4AMYRAWyvrQwGJ66Hgu3niLTpstWy6Zs",
  "key17": "yPQDXqBnM8yZRZZKE1se9QMbarYQhb355kubJVEVo1uowfeHzLrcH1GcXCtqsV2UKfYMYehPdURxMVZk6dRt28a",
  "key18": "4iEm99xwTZ3eveUza8fjkAsb5ax3dzZBQv6jgL556cy2jaNvyXy6KAqtisSvaDLtZ7jig7XPAuiz16g3KVYLc1GC",
  "key19": "5xNVVbYoxV5hJesxtAcyz24ArH9om2BwBB18LAmow8RSGztSmvM6mttwm8rauw6mGTAm22Ejz9g7Nks9AZgL3gLt",
  "key20": "VFaVCbkhEsMuPWv8bbmBJ8ibA1PrUswBhAJHLZc5pPcTo6KCwvoGypUkUt1k7RJDCFyDYzCAnKK6ZgWmRSJYtKy",
  "key21": "4WAnkE4Hz9rFur2WvcLhRNdToPJDUWZsu3iB2F2YdGKKGR35y6p15dFwZSmfoc5xRq3mEmWsCnKhMYgDkWJC3Kfk",
  "key22": "5aBtresYRf38XQiFJ3f8szVqjF3Urj5SvoTUhLMtxraZW5STZkMSTm4yEpnxUzRfD3Pu4V8NatSjoC35Bx3A1okm",
  "key23": "3jVYzgUU36g3jJD9Xqez51jmfCgk6GavvSwEntCX6ceAN9kkejJJLbpumQhJrN8rMCKdwe5Xg7MevVi3Zuup4uSx",
  "key24": "5CfNZXHzLrG8aYm1s7q6igqBPp5xjP9PdinwduhwimxoLkFixVaosxfynFXFh8TtxKScCJUeDRjfWy6gecGcESAh",
  "key25": "3Bk6V1xYmdu7WrKELkwQRt4x9bicCcYrMGsXCgyHzFckMQ3Vae81nBwAsDy2p4rYRr9LDUDa6FyDvonnnM9Qfbzh"
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
