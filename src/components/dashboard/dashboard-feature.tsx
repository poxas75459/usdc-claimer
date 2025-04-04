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
    "2fNAQW9ewk3RCVkFo4vYx7jEtLMkxBEPysGunDWHSXGSsMDymVJSMzR7NaZ9tJPi821dpC8w1w9GuQXRpFJhpkUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZ8JCbpYD9ekZoJekce3ZrcX8T7Y3EDS3ta8CSCjAayN8GDfDVFhKrhKwvQo5EWgTrW4FNE3dkLBwCBLxpmkGDT",
  "key1": "bAuqT3czLfqpqCHP4x4ZkQWVYmH7McXQcyxsgVmrs2YwGHy9wACQLFoHpfhxi1jFXFBTtht9pfn7voru7iM1hxa",
  "key2": "4Edb7JRV2hgWaxKLTvkoVBxSCYhUzDfHYNSbsyQuhn7TA3w9w1DbhjWjtXPQMCo27j3LYzSXdwB4pUxnPyPVwLZ9",
  "key3": "5G5eytMy1w3iaPaW1R6ua61EczmxtvsynVgN22FCYULpNmrZNEUgEs7pJo9YztiEtpyr8N4Zc3xDqhXPzfQaoHXH",
  "key4": "4aiUoC6ySmfz9NBEsHA6UaqTJoNf9abDt47EaBuqKmAcMq6RUAewWMgJ4Z1mvMM43Ngqsb66q9NBSz7Sa8gxBGLQ",
  "key5": "5Rr2a4dXzV7hHUQJk8jH5D7M6YQMeSq2sraFT58n8rLyKsAq5UAsLzAMQuD47XZ6Hkh8UPJx3WX1pNbnRUHv4uSs",
  "key6": "2vQnvzueMfkiBMTawodKnYVoaBugoYADKekjyu7iQyE3mfTLgsBJauzmr8WsUcycDPgjsPJJTZNYvGFt5mWV1sFk",
  "key7": "hhUV1jKSaVg75UZvP6XheHwVXVU53rgj3Lps88hGedzbFejZB2y7FqqqXqT9cXP7MRwu9Bhh99Zwc3BgBF3jmHu",
  "key8": "2JrdCQ2yuL3vtrWT5peM3j3QssDJWAWzHYGK1hvsXzaqJXiioXTtrmC2S7oH8cZKoXYWHp5F64c9UhkoYHWX2TkA",
  "key9": "5omN1cZmp6tUSxKUNgmBqVJtK8aa15GNQoexDDJnkbZZtNw3KgiQCYxbf3kNCVcS38CxPzRec6yr6x5TddrzZkD1",
  "key10": "2h3VzCypBDqAg7Gcx2MuA2BCgANw9mKNF4gZiDMA5UouRDiSGqgL8VSGtBH1CokFYXVphWtjjWCic5MzmXtocZaq",
  "key11": "V57zceVn1nq5JAswUbFyHvG5QBxHDYmkjPt31dqGBkw6vtruLKBe586H4pUzMFUSeNQtFfUbXW1HoGJjz7KjU4x",
  "key12": "4PQXZspio2dWqVvFJbEottpBGFYuvAtqp7hCBzXHTKPbSadx5tur8EuU4wAnFov2W1J7scPqbAma5uiZ4NMj38wV",
  "key13": "GkqNooVL84x7e1azxXXVRe7Zg1HKQWFH8jjLeZe2LQWCfhR9i6NNySWKPgYRRAw4sRdg87ghq2C9ki4kFwdqBuP",
  "key14": "3sB8XueFxBkNMnq3oBWWgvc8PAbcrzMinUygkdpWb4HNz4nKEbVu1PxUq7yDTJLNfcwQUfTeeZd5Ubu9FJzni9To",
  "key15": "1zixrqrFFoKieQSDGoC2e1E5fPkHqYaC12DZaHCn7XHa1qNhFPriS7y74A7zMzQzgJKfcmTFVkbPrJjoNTMfVcV",
  "key16": "5wVCB4efNG9GgxfX7cFStwccwTnouXChA8wrqz7KVQ519fQ823JFjjENRqRJrxehQUfShMfUUuChopsJQoPYBTxT",
  "key17": "4Hc6LSkz1a2sXwZBXdYhbFNezVeQPjthEG3RmSsCq8aPGGvcNVr6yZUE5QxXWaZJFiUJHEebaXbCcDLs2ZEaaR7D",
  "key18": "4xikydgaiVPh6k6L6nGurqyJAyScqjvtYEwfNZN73XnFxKASueqdmRnC1ZAhs32TkEE35eeWMxisGV9z3PcgQhxo",
  "key19": "sHDQA6ctLB74kr19QvprG9DYhDHcdpx7Bakvkn1RS7cW9HMa65WNP5NQQ31Fx3fi41H5MrQnUn3MEfKw1BqWSdj",
  "key20": "3iLYJ7dpwSsKdvtzrjzxsU5BWh7HAxYwK6k8Vmnc3ZbfAfw8CMxcME8WmEBbScG9keV4pdJFQfbJCtrHJs3vT4rJ",
  "key21": "26P5CJTWhntk7fyn9kMRTXfEFDVhWCJxpLAQtFwfA4JoPbkeyAdWuJ6oabC2qzxN4HBTWk8s9ft4SCcnnF7sCYkR",
  "key22": "3BhPeJ3DYFkVt9smGMMm63RvGghisVa27ixZyweKFe4RNye2ExpagYosE994BVaNb9ncXrnUopUftKG2N7xZBSDs",
  "key23": "5k5NgfeV9HTHYsfYddywPZyQB2tQVCDEd7dm4bgdLJyuugQyGyyhUD6UnBXqb9setdgXNHScgiV5z3djQxMLy5yd",
  "key24": "4xsVGKDcXqjkphf5mmyviEYiVMAmtZCWEHDyCNHF7Yd1RuLZrByiNVHypkK3VPjxVbxjRo1mJqRK91M1ucTBf2of"
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
