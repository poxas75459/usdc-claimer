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
    "3VtWWCpYhN2AWCkLTJm4SD7HMdQBq8oUeRdYD6NxFv3PR4HBdCcJmKz5JfVwkeaVzMG2yQJEgNhCRE1bTu1HS8LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaE6YFvzTuq9VWuXU6bpJedtcbjikZ3WeT9hpPTXpGz8BiiCgDnkKmH16wrusbn6cvtaQZKc1afrD2EWA7dz8Gu",
  "key1": "4MtazJsyKx5i5EKwmJLMtZrvdTDafUVF7SLzN9juvNpFnCod2TcUBNz1VVmeV3AEPq9BC1WkYMNK7SpRhpUWPBYU",
  "key2": "2QGJvxDhkP5Fr7sh8VFrjqUD56s8eeFvyzgFAU9jnZQWRPpNeU5ziHQ8UdmgMXLae1tD4LPgxP9Ykt4aA5rT2vu5",
  "key3": "Bzv9NwdHgD3wXwmxiMK6kLTkeYjRQdeBv3SvyPtLfnqC8c4D8kRBsGffxNFvHnuJTpsYgY4E3CgUJTbkPzmd7cs",
  "key4": "4kFUcF1Xx6nE3iFQv9jnNu5UY2nuhDFQH8ipFU7Q98jP3nJRHVY3QAaRDrHLyiZoLTA72usVGnzjnLCVBiv3bL4i",
  "key5": "5oTeQnnRv7ifK2ocbqsH7LHXXPzq9muUU8u1E5kodEkhA5ZRhrza7auW2oGbRyJAraWFvMbkmhnibwbv83nzoaci",
  "key6": "2t4iBfT2yR3ZR5fZJDGDjPruKLBCMUA7qdrj26HtyC29YyG1quGWWWZF9USdM8k2yEQxqQLHmjQjXgNfKRV7YdWK",
  "key7": "2ZofFBSAXeFW9KggiYqULYX5mfdHU2nz9mTpw3rD6C6KVgAPF8BBeL5He2y4vsuyXbLq6yCPqTdvgn4X67Wf8ZXD",
  "key8": "522pz2CjniKZRZ9D3p4KtgqQXRJiHQaVgmmhKQvEAc41Y5XKvqXcEv7wjxEwxz657Ahq8HddLc3WQGB8p6nC8Szb",
  "key9": "4uYka1wEk9Q2kf1RZwm2kuKUUi3Z2cUaNhYFfuMi4xjy5PUNFnLS5UrRFDSC9LowqfrHQhmSCHwZt3L7ccUnmaLy",
  "key10": "4dhibQMweMAfqraKbEyPkbKRhtzqj98Jh1nanjfwTTm3NKnHJ6ZvCmLCTSCn5JJmNK4Q4Swm5oEgtfNXnxMwxid6",
  "key11": "3f1dGxemZUCoGpaqMhG4JFL4Y9W1Xsc5xHYizBdAq7Co9uh75ejZK4Xx1LP4KM46uVCEeb5wZm74cspk8VPKrZyu",
  "key12": "5bQ53kKwxV9UkCwPhK7gfeLJDonbzWzwhNtLCTEsBJj2x8xhyoUCsZcTMxbUcc6mhj4APJxHq9TuMtzV7rLFweQ6",
  "key13": "3ET8KjeNLgzxp7vbzjbgRLoC88yvjPyu3YPNMvXJPFhJv91B8Dy6MRi5JkMvhL3yhKppFSTAUakF6nnzzvE56Cot",
  "key14": "4Uh1D1beMX7vfCjHV3PFMfPZQ3fGAJ36JWrpjeRVQJT8a5ZPYJdJg4ftVWRD2G6Wr9Rz7GC5ktQQZz6zeKyKZXjV",
  "key15": "Kwh7oLW1mfboMgGV9qxWU1VoJq7huaHGjJxGvVRsApLWSePfiWjXL1G2iiBcAQLeCbPftc5UDPmcJ26i6CbzeRF",
  "key16": "28tT3KzBiYwfL4FVp4yK4spmoHQkj4znimFxXsm19zbTSN8TLJGyXnnAcYgvHZxo9AaRhDcV2t51YNWZvrrhum7U",
  "key17": "3pWHcZXsP4Q4i71NejkswQcDHXT6NVny4Ljwun8dFhv6u4KkZNpEBXYyHJxfCJip3TADVG4MNXfYPYXtJFBDz8Gx",
  "key18": "SnFTekqys3Ln29pUxoYLLVffGu1cKK6cq3YMsDTXGisS3E2ALnF83sMtS1qMwdNEjmxH8WyYYrGgqCG43xSEkQQ",
  "key19": "xz2Hb1qLJosWaAegSZNX9AmVfLmvSxP52npGPj2FEN1V6KanshvYzFggrHiYd2GvUHqzXYiyyeheSrxhBgZTG3k",
  "key20": "4mX6e25MRu96GgYd2Q11meXTpTxKGVU2vKFXhqmianuZUB35JUoNYvZKdHezg3JZnJFT49PVn5xu2EkKhyuhQyS",
  "key21": "3UBSgVUcj2aQh5UUYxuyVQprdkYzA9x56HMW1rgysj7CrfNPXnfgPSUBGma86a4FS16QwR232k6D7yyJfWvGNWWA",
  "key22": "25rSJvEY9hsS5yYAS4ubMK5ovDEW6GiktZPbnhYgdmZaJ7cX592q37ogKsXS3Lc8zfiLd4eBUTXq1PbsXpujaUSt",
  "key23": "3Ta6VjLxvYXDGkuanwQmon9sDWtbSGakHhEvFKEXy8g6uhKTo8sXzfPk4iZLdWxJxmk3nP9jmxbRJXc2weBsugiD",
  "key24": "E1X2Wtkj7DgCWYRK4XqakuyXq3N4goNnnpwCFyk9WeqjUS9eStNmem8gvecvcJPq4wfVk7AHdAQxj6QH2iRUfs9",
  "key25": "fbD483vjdvYiTuWaXC7M4pW9aSm1DgcD7fUrfe8y9Wkjweb8ux79udGVofwivZr3z6NuwT9Cvti63XbhuwHQpCT",
  "key26": "4ECgiKxgzWPvbjF8cksvGmTL8ZaiWCvYn5CzRFEaXwsa1BqF7Da2G3GVsNGgBwzJ3y1gC2Tqo5JCxyiX8G64X6EK",
  "key27": "3aKaUsg97jPXkMPzq7vQ3Ga3mSmcN7UmkbRAeB1xUc285sLSU3YQeDfNoomKQAAgMvTFK4X71Hffm7NfkFM9xq4h",
  "key28": "4znksangxCEsy9jyHXH2XCGMsZdXUuqLbs1263t61CPnLduougEEG9877axyxGRyb95BwoVXhEjmWY6ZADwWb3kx"
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
