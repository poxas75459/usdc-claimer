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
    "j6TTVm7WBpRwcASMJX4G4v6VEmWbq4ce5p2xhzTcPErEvREPYhoEyBP53HZHskRMRsyCrUJjQnkiecbhwWkqxJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TVbtedNuohSeoFR2PRkz68Pia1F2scaWBJdeSMiMPp1Gxqfe2SWz7F6CYyAzdA7YSNAEujDrSvG4XkLMMusSoN",
  "key1": "2DRc1NYmzQ85bqbwiQvrbpGw1YLrLRevLJzcFYwJ5nGpbSWUNiHZ39Y6nM1tgGC7ZxyLH9z4Hoff1NsRJnUNehRY",
  "key2": "48rKwsD8txefXsiyJdGm2QRLeCtm2nBkWptECwkatPLMzh96NXxTaQMEayHTS5Wa3wG7tQxkVmeE24D4EmrCMQvm",
  "key3": "66QEmQdawKyaZK6m7jbNRPMEfFZtUGwGL167RGb2D2UpL25ChL5LLQjSAGmTEPArXJdEJNDRMQGVgoBV5GSr8hx9",
  "key4": "5E36WMLDZCqCKLd9ePmFThMbaK4x48QCjLQ5qRNygPfipGscxD4HkuHQF75zbLAKDJTdd7dtHLMiMPq7uCPHBzbX",
  "key5": "siwteLNs9mXzrT2dPV8WKh74NY2VgjAyECQYV6jBxHBKhqsdJGCqxTPTgrDgci4hEwe8gbRs8JYbc8XyUMJiw2v",
  "key6": "yTbBauvnKwHTAWEaJFnCVyPy8WyGzfHSdHDhtuw4AjqTvTrtGkzr6Dr5u4YkCPU8u3TWct7UyBVj8Vq7HA4Xhqh",
  "key7": "4Mgtyr4Zf8PF8465Cd1etGgLmrv5yBm5k3VWiR9wVtxqPzHjBmvBPHrgucaSb8dK1kjgMLJK44EPWg8mRYuiobi6",
  "key8": "3ZznZBV5LTj6GLySnCF3v1yaQQnqdLxhqcqcufUkKVgfCXTcwvp7WqCpgGHSKaeUkK3LY1XorhBeHDkujWmQFTQ2",
  "key9": "4GRp3mfJefadvL5XhAK6ZVXWHEzLFVuJYKH8TSam9T7cSujGwPNY8ZPbbR9VJhBy6syLiDXkzchGPGQoatGD1CqV",
  "key10": "2LvpCZFDKCGUjs9TtE7jNJroXQFFjVqHDuJTk4opRhiD6HaaDceZLdPg3WGMphLM9NU3ws4jq1cnnZKMq3kW2j5n",
  "key11": "5EwpEvKjKFvDvKgtxirxdvCmUvwdtAbTuB73XrjAUfDZAJ8zHvHgpdUJ54AJqg7pU4QoMAftxbUfwXhxYZ6TEnqy",
  "key12": "t7tawK93aoZS5epFUd8nF4QLFitXLPTq5gUgvvqNjYZUsD5uFBV4LLVmmtHGGf3QAtDpJY2L81RJuKA2e5qZ1UN",
  "key13": "5R28ripuu6q8C4MZx6eFaqmNGaA9rYKG9kwDshuj4JMDPvk38Cr1Fuy82pJ4koVyW3KPDwthFPyWASPXyKynomwg",
  "key14": "JEEAtF7cs9rC3D6G8aMB1eEiapHRSrYxtmx3NRAHnYAxvUjRGCCeusB4rrKYxFSyWemCMGXKctjZYydB4GH7DF9",
  "key15": "TrdTvsG2w2AQKRzW1dAcLXJZ6CHKB1Sqe6EZSfKdZ6LCMiUkwvuhkVnthW2gDW2dwSSmXsbvKVESjd5Xq231SSE",
  "key16": "3WXtTbnYVqshDgmW9Kw3Gv856e7wNpz6JVTN6ZihHBJQxByLstWQ3yJfrB5swQWoEFFWg4WKRARyLsnLXzm6dMFJ",
  "key17": "UQB8ByVDyNYJBACdNxVDrzqWwrFBGjDufBFVa8vRcLAQdSXNTEqAWc7DhehJCU2fDNZMJZmzvTVHmvJ71G7vjHP",
  "key18": "5NThjUcDo6GkTweJTGSCKudp9h9Mgj2C79owazfXNE1iMWDVDmf8gxqvBYZobwzE5vc69aDxScCctGYqXHsPHE3r",
  "key19": "26fgEtZfzzAjLgPTg1AixpDVoec8eeJYUB39Q8f9rEnRFBqg9znUZFouU5HNJt1nZrj5NgYtreF3Qf6DxH5mRJ2e",
  "key20": "53BBVGhz6U3sjWaAc3hiDMwvtz6rbVgqXVWxhvyT15PKnDEkn85kUvRhvMhJ2iMaBkZjDkYGuewyxUWGDQNY1pws",
  "key21": "2u3eAzXYYYBkCD2DyvcfA68C88QBxPExLX8jMvjd7ysYTG69WRvcBEg5uGkKmzqyWbFRezNsQLwusAUwdrZNZQZV",
  "key22": "3qRYoSrEtVuGRodAyq5HBpdGNySBCWLUaSPvZcJL6faG2bCqCSBMc9Uyu6c8tDq5rEbmShYpLSfknuae1BiELtp6",
  "key23": "5BqnwhNHQ3dYb3AFDWLCNQPuMnFTbUz3erzb3Lh5VfFoQ5Z8A852xXXJ51uEkriqesRCyH48rewMwhHHKenuovR4",
  "key24": "4pqY7t43EvHP8q2HuhnudjZSybLRfAUfemd4Z5Dgi25oo2hwQfT4sSvLAFi9fqCAWKq3GCwDjVFHMUk7eQGMALZP"
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
