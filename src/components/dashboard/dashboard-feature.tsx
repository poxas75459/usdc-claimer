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
    "kvLHzRsdst7etzJy1szFehrNkXWTty9LxpoZS35U2yQGon2GJJWnG1daZ3pKk4WXbADYcVPxt8NSXFzuvXGhjoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7y9z5HK7uL3r7uPgExbv1rWaLaY7WhHxHK7nsdYKH6eHsA41KNwFYVshfWKrd2g4vEb4REtsBKiRGhVxkhxwko",
  "key1": "2qJLA3D6JVHzuaGUV4nzrJDt6dY2U4SLDEbEjvnxSpoJPEVn7WJ17DQgnjFbc8sD2EP93C9ScTB6FC8gaks6CVcb",
  "key2": "21DjAVXZ1gkywYFWiKr7UQcFoUZ2UHiLajaCCLQ8PJnATphVbEZh8QZU7Ms3vJ8feJMJzXwQzqRSxg4NfkAQxmaD",
  "key3": "eoGvt4e9YFSJUfFjq3jyPvcaX9mrVCqJbkDwVQu8dwS3U8hRHEkkmSPwr66qYAvfmhij3unnPY6mUKz4bJGsZNZ",
  "key4": "a1GMHtiuGwkxWujKPhTyukt5eobW712hHT3ZjxRKWWjGFjBnBARJwJx7ynhtq2E1KzErvCSFkTSVkVRnywWhtM5",
  "key5": "3d9zqj7urx1JQF5xrEDc3ouHZdMuQuKsuuVULSLkwFEo3ViMbrNf9r4b6Nwm9z8GnwRBqaFuStuU8NGJRozbsFWX",
  "key6": "66zP7C9BDsyvJ7QGXnVWNdxoW5T7WBaYrDeT36JLfVHc5WyfS34QNx1YMzhduXtL8FsqeKqjw7LsqZFShV8pNogM",
  "key7": "4Afz8WAjevTA1aihZEhQcvAA8iMpPewkpoJo8hjgJkPgg9Fqey8WDyKBMMDKSKGFrQh4nm2BC3GMF55C8fguL5o2",
  "key8": "4mryuYx6oU7DTBXSJRLcdCULhABc8M99aLaTmeubXB5xU5Wc1m7gXUm2E4XJRALpGpaBvG3M4CUBeHS8A7dCxVZG",
  "key9": "3Hv3DboBGgnANaeiHnnoaET8NNXfQcT4iJW3vBTNHb9pKZRdZa7uFtmBVAzUKqapbDVpU76JjLTxYKCHFznbyzJh",
  "key10": "5inQFXdQTHZq9MBso2jnzoP7Qqnw1HARNKfq8ttY8mqKDAQtPPchrFMCq37uxq1ZJxLYxNq9LjPnHC4kg1W7UhBh",
  "key11": "uXhVx6zAcrPVGZmrpj4FUbyjveSK5afMoWEA9Y34cbzQ1CUN1PdGDeKr93eE6TPn1Mraj7mPEd2Zjns4cmNB98T",
  "key12": "2AJAwqwjSYckAsifYdoWNTQAu5ybrMRSFFQf46eZTHZGGy3qiVVDLeFPB5NbK9EoZ67nxFrVhUnMWZXoLiE358H8",
  "key13": "4SAVJCiTHnEkPD5xdB1kjRi4rNyRuEe5Vy9x97NCQo7KdeegK52sKdHCVfoPZuRdhGZYvCzxzzRahjzMvfLWK4kd",
  "key14": "aXZqcoFWB8YQoFiSpNLoGAEpZubuz4WovGpUf9LdRMxqYeoXBkRhL18dK8zQ3mC9XLjQgfrfEDfAEcf3WcERD8h",
  "key15": "4WzGLTHNesYu9N27JAX6xY4VbUn5bKsVfZJWvbMgtkLUJdrhnBu19wRgZY2sHMuLGA2YWdprkBSJrYRdpMpWwV6U",
  "key16": "4tnnV66o8xgwte7TfyncpqecjmUSu2J6r3p6n69BUpLaDEWTavjQ2HfLMu4J2cmYZMD6WF94MA22r6Cu8icoz6VR",
  "key17": "d9gX5mS5ZopeMdFnFn6cWiiR35mJm5wnesWVmMSYtzUKvdN8EmzWNDGfRmL6WEqb91JvMwq4MXPg6drfKjU7zDe",
  "key18": "4GcBRg5o2DQjeyoT823Swe3UXAxBWyq47uFmCYGtgYfwaghyMquB4JmEFAt6MztKJowNWqS6JD6wbTEoAqUu8B7z",
  "key19": "he1vqpYkPB4HSvyLUc7oCFRs6omi3wnwWgDFs7LD2TzuYuM5hScSHT5p1Mn263yC7yu3rM3zHEQHigFYmz753ZL",
  "key20": "4LRJdyQZbPxjEy3tdFSg2eCBMZsjxntCiijP6sGEs35oMZJXzRdGAfT2WjA4xjEUyAmYgffNYAeAhxZg48RB6iaf",
  "key21": "4Xuwi82DPccEGB8xk6Xc24qvVmSdF2tsKgDbqdZxEsb46UApSDAKX4fHWfTrfaZXVYQbQtrrQp99og6esZPfumzV",
  "key22": "4BQG8d5ks24eHn5hb79DMkPDT4RCChHVcvjqLeS7mxwePvupWYBf5ZWNwiNXnWcUkgBEUPmbuTLQzjk6eHVraJjr",
  "key23": "3xJ5akwYauPS76voHhpWJS72abr5skZrWDpo9KZ3gaouRW79pzAe4gAj9wsXJtfJTvDuJ1AHJ5qnAvrKiNijbpc6",
  "key24": "zj8r2uPHRbBo1K7cwKQsgFAnwsC6rFxBhCqBY9Qy61EESVSMoo3uGw1bMsSFTHCi8qxjjtodhskCp5B7sJLZTdb"
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
