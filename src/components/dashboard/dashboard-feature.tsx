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
    "4MvLvtasJKJQeo1twaat81LDV6NrxWK4apSx7zX4kSvd9Kb1KXoknL56kFSbksCPPkoxsyMjL45Upb4TES2KGqCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anKXVhmVtKthjjoWWxYWtvizK43ZWUiqvAtb6FFg8jTUWuPKciR3QA4nEaD9eS3xDVLgyWw8p4NQtdhYZQVQPWr",
  "key1": "5fmR8DP5VWdHCdLgEYRurQWkyN2raDTAH9yxWrzokc8AxBQ6LjDqfjs5eWRvnLSN7CFgqk44sxDhHQSKCojp1CwD",
  "key2": "M38ryxhXRzJJ6jiVnMDctpAmVzUoj5BhZ41PZ2tjMAqEy3wYH6HYAdMc2x1woFpaMzxMtN42aRfLUx9Kxr68QjL",
  "key3": "5JG9yffdUDDuQWGmGkny8HAGDGfpQxWxmr59GyuvUd6BkcxCxK7M9SnRAbZNJrW3nX3DZ1oRFbmiCEKKZqnNL9fu",
  "key4": "3Lg6VKmRTdiuVeore8PRV1xJTsrG76vxyFuUH8yEQv1eiVB1oEEkYZe9wpnPbVXiCthxMTk3PavQmhSUMpswfEH6",
  "key5": "5yDy5FD8Vn2A7eB1XMiAdkjmmshuo2a8ztpiRumUZ72SEgBnFKWoS64jzyYGLLKdMuQKYvXNWePyGagspb3RQXch",
  "key6": "3AgmH7P4x1B4TEgVgzdzxAXfELPeyg22ABEVSMmzEfYLPtzokg96eYxJsZ8CgoLLJtsP78PmMgHgv9E7LpX4r5WG",
  "key7": "2VUxKB52Lc2zZJyhxeQSkXfHHGrSsT7VSBeTJ1PDRmK1rWSpNKxZGJrijAy6a9HhAxEZpDwi9TpC3ionr88pfErU",
  "key8": "5CbmPLcPvCaXNFLNvYT1XwrhD8DgLR84SSFoAP4NSPtNRRfRgijBF7et1XjmefhPBvF8UpMaTP1v6XKDpZKhDfoa",
  "key9": "5uE5DYBP5JodfgZDKWiRwFfr7vxG7JMEVeYzQJaF15VieBCrDDdjUasnvqiaqcKgPRUCMdvWWmxXXqzypKXHgP41",
  "key10": "SojiNuGFU11UaK7WVgK4pLZsgUKFzZDtwH2QaNkxm1uzferFj12rPdpPbX29FakJ7Gf8DYoHZehJiTGXtub6G56",
  "key11": "521hbcE6Row11sPLVunyesjnXaLrNRqh2fuAmfZbje1Fd6QrY9jvpRtC6rj83bP4yMbyhCSWpSbQDjzsVnBBK8mC",
  "key12": "4Sn2LnqZ4FZtQ7n5HB4cgYzGDjZwNENBNpmzEUk9oxLWw3KNKafgjK17LmboPGuUEeMrtJsCj2LS9daQts3mUocj",
  "key13": "2sDmet8PxyNY9PzduvU6stiYYhoC8wV5Z7Ee4fgwanfrNzn8uhgr4gQa1RPp84NPxQhkkhewseCVBajTwLautBBF",
  "key14": "2BThHUj6CmCAvNLRMn9F9scG6zGK4ohrgAJQXJzPvZz4cAf92w63iCR88Fhj8oEPw5keeHJtTevnpZMYw8QJ6X16",
  "key15": "3hxYCFqwUso5pXywysTwGeaALTZdGes5hxyA5XG2QVhgD6xw5yroWmhjuWzuhcsCpAATAdY7vp2uTrAJ1sDaWRuT",
  "key16": "Fo3MWm9yJ1owqKGHtyLfbQCkZuA3HYK6AvymbaHWx1wCuL4n55Bgr6yCRT9avz7fmWrbzxy3VtyYnAw2mY1heSm",
  "key17": "3QkrXXzaXNMNaCNKCfSSeNUdG9pB1aRedWH1eGxYH3oMJsqWeQf6F8LWgFrXEVjzjq7XBvAcRJS5nCeSrUP88Tqg",
  "key18": "5zCHv1oS4Z98P2d34nWQeG3bncdBVUSXGqSUwtQiSimPTyLUvyAbrVGuY4nD1TEGMiC4NFLVzgSY8bQZwEbirV9w",
  "key19": "5ovtuTNeE5Xv6rJydmMA4hwSSC3gRoutv2oVv7vAJSqyw9idMmJJhEDRCVU8wjaQR3mKixqmEmDHUtky7cqaKn4S",
  "key20": "4AyUkNytK3J5mLgTwaNwgxs1cUX6TW77zcRHh1xHAFa7nRwAChxQWURZ6SGkfUzi2oHFCGJFRDSat3teXFiWipZK",
  "key21": "RSCV6KCqEja4SYGsw5dhX3Gwy8p5RML5h27jL5EPZQHU3uki9BRJb8jPFCsdbm4R2MLNCJfVkRGb9C84SxCZ2Si",
  "key22": "66D5FyJZySMptQY4jip38b5X7q7zqaBrVRUxm8ByvCL1NqjDw8XhQy1dyiTWhDePsQmZs8bkTwvd18CiLCGksQa",
  "key23": "4WQ5Zm2mvujKMPAnLjFK8JsV1kjHwqMW5z2enFxK7jDed7m6dmCkDd4CCi6qs4swiLyjaTYE5ZhBFF2RFj1Ge4DQ",
  "key24": "4Tg6fbu3Y5QD4cGbccteuqyvmJ69k2WhaFhg2KajvqfHon8Nq827cMxLd7bqFyjxrneEW8niD54H2Uv1oKj1PWte",
  "key25": "3xmfVodM8tSkN55Zs5HvNYrAgieMRvBd8dWepjex3u9z142h568tDtJ95Txf6e7f5Xp4yG9DhEn2YzSVoSTN4tsA",
  "key26": "bchtYgmhBLe29pf2mg9fyH9D3PYA2jgvMMNSUVox4xbCZPSsvQGXL5ATvtQKHqi86U9cYTRyV94M7ipNtotJeKJ"
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
