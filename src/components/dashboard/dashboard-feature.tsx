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
    "27FN954vLSCg5EKtabioWSewgiuGSno9BjE9WMhPn7yuPx8PzSwXfb2YBXDM7vFPbr3oCsHHxjcZ6x392SeB6uCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J31VuriRW2zZCViMX6BZsZ1Z2bBicsQxf75HbrTFM4tEuDA19jcve5KQDRdw5vceMQHJ8paKcsdA6Bqwnj7AqoW",
  "key1": "5apAyW55FktKGzX2DaU7Z93N8r25PtfhKBq33uMLqdyKEHfgzC4jSGnonWpCGvGm8kWC54xqcmWqGvoCthA4sPrk",
  "key2": "2hUSiB8E9QNxmNPQ8FJQuj9586jZFo7VoRkz9hEF6wqHokzEEdxbLRP94steZxnbD1BRzEv3Q1E8XeDixsdBewbw",
  "key3": "i4jdr937skjvGGegHxj3pVS4egn5h6iXJt9YpifkfvLVCjPEKmJHnENjRs6kUMHRzhBk2o62wJdPHnpAYhHd9Pm",
  "key4": "NQ8C5wmN96Q4WwKmLuqf6wWn2V51jbEXQ4fagMt5Lyu6oGxLDbbWoys2TSQHi4Jb8PEhgXtSVY7uAWiDr6xcTQG",
  "key5": "DCTxNMS3D1gBcx5n935Bp5tedZfzhLDvT96xMG6f21Qh5UgAzKVetnQ7cv27otHtzFuXRg758BzEZyTvVyMNZha",
  "key6": "4NEjM1UTNkJMk9ahMQLHQRfwQmhP5FnKTuEuFsc2rSzrTY6P4XCE1QZ7EUVpWiWHVgLHKnDujCkqCbmWBzzCBVjZ",
  "key7": "4Y8FYf9FgPjpkGAdVaCcwv56ge1HpuHPTa8VkbigVYdxuZJ8spmg7oagkVegFRram22opHsowsRPT9tPfCek3wzF",
  "key8": "EB8FUzM9V1Sr6sqtrFMHFg9TEFPvVqgu9xn819egm2pjPacN8z6b5a3DYpVXKVLX5a5SwFHmTbgf5omeoyppcJC",
  "key9": "2Ji865iNEK5dA7JUPsvgdXP5rbsV5FRpA63nK3QdexsRRzWeecMUhTpAUd3gPePHZyaNfhvQNv8TXjai287dJBg1",
  "key10": "2SyF42p8gm3kjH7MUUNUadW4iRYgJzPTDz2YM4JWZWrpUzQ1NSU6Lwrcsud5tQrciadHDXg4dFeMgX1LTvvJNvxc",
  "key11": "8VwPSHY51VhYYTMfsab8GEgVTyQzQqe1ibLJpqPQYNki11aX4FoE6GbgvFfnst44DTJtSghCSimmAPjQegqBT78",
  "key12": "2mcnBswxQGj6qu8QegAQAXe8ciWyEhuzvYcKETCiZdzhc276nicpPRZvgVUqNdVGyrdBsKE8aq8kUeR7T9gbe1nt",
  "key13": "5bbHrgdTfZAFAtD5vGWWjkg1cuezJ3PDcVHKWrrbqGTvGkeAAUXd4aztgsuXm7PwiBhEfojmYqw6fwaqVDyPMiRw",
  "key14": "V8gGsWZqKHG7FS22QJR5HXcbHcRdrtXy52FE1hMhukUvd61mkdwRG332bNf3piLY4QunopRRZGLaS9ESsWBMKsA",
  "key15": "4437MQR1uuZ31oT5BmnAXDtm6agtztCyxGFozyZCNptn2xLFrXuz5LdS49TnDUfc3r6QVtdhFkhNUrR2EHqhL3cu",
  "key16": "2MxzQgzRUX3cGizB6nxeoru4F9XxNXZGNWD5k2t6dwyF4YmbCVH8UssceHCKBuEqvipW4s8WmSN9pq7NmTFJDbiq",
  "key17": "5vtDdBTWTy2G2hvFc7HDYgRhTMJJ7BkwUb4vERfURo8mNAHphBJ6WSCwgu25RWGAXBkCsotHiZzK9tyzcqncTboR",
  "key18": "2Q9bYdB2JdTAY3jhKGo3rsEcYCKwLmVPjAZxK1i5QphHZC4kPmxLAa7hcWnpiFUX5zP9J1A3NbCA9gHEdiGC7zk9",
  "key19": "61AUPLXMZ2w3iJhG6Ee52k8aTaFYYNvRV8yFFJA6aubKPQd3GXrk9KZyeti6sEshKRnhJq3kmQzzHLovNcBpWb2k",
  "key20": "2e8R2qj8qpT7y2EUGc7aqh8hXh9GiopoLfA9ThTm9DTWimuYwugHMNLwUm9mMUXe69nBGbwd7xh1k9oQpPa1xADK",
  "key21": "2aMJniHbjXrA4cR6MekbxtWJC24sQHZp45ghvpQMkL2ZKBfP15v7wET4Ts8MBxmKG6TKAYaBr9DUUDBE9RRfPbXQ",
  "key22": "22X5FMvAsRKb6VUbEE3JqPPyrEJQSmBWsz4Si7s2Z3X8J2AtmshxXo6bRZauW9GBo9RQXowb9ZcRzEyYGV5LRTQw",
  "key23": "2kdVGQDVAZNxXEy4FcrcDYQ8MwoWWFUKGCDhARf1Ny9ZWjqgT8ow3TeVucX9VMoXYJC2XqnmHG4wc5Wr1rzvk2x1",
  "key24": "2Viozr1mJjMP3fiSKNpFhk9T1dbb3vkHK1sAqdpazzYWr6Dbj1STmahEE1Kd6b946YfpAgfTRtu2iGwzv672zWy",
  "key25": "2gRamwj3oUpbPmnCndhUYff29S8BEHvrXDcFcWRjdSM1JKVCUjnrCKg99xzyaegPQunijjKb12eL1DFNfkcwchXE",
  "key26": "JbDt8purue8MBzFJNZhHYzKfBApWwsA7zLWsbxotiZPnf7JpLvae4RRwNozNfU6qkVKFYJ5YhqQRtkux9bnVzHE",
  "key27": "2XCxD6zYPyMyF3PHgrpUCfnDhGrov7SLjdCznsBM6BwWCQzo2s27erde3zdUQRNpxvFy4G9ee5ipsfCGdppWziXB",
  "key28": "YxP5QKi1EXbEAwVZ58PoXPtaqJwJEWo9qa4ZRCv9Xb6kNnS8mcg4FebNbv2j5BUwtFmGqj5K9zMgkgHbiBGydC1",
  "key29": "4FUNRGF2zmcMV43fUfm1uckp3R3xrnqy6ct4tStaC2K9MsY3afQyK8DdzhhTcg3CKf4xmPg2u6z5gXBEQwoAJgZ2",
  "key30": "46CAneAGwFfZ4ofcFbeBvvevfXNYWNezR5LYPKsbYZWoS9Psk75NrUZdjTgSRUNhUnZTbZMYw2c245ttmZWqhVAW",
  "key31": "L5jAcXMkNwZrEAfKDL7EfPZ5rkrAbgNEPXMWvuETjpZH1KoXzqLndKf1ueJgHUncpk1AV6vi3WAMACWCV6nmfoM"
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
