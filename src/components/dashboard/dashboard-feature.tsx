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
    "3ye3mibGkpsHyZzgugfN4B6epjhLvmjANrz2TQ9HaHwttV7NQx2MvwFwoPcYRtqraAisvgAJfd4FwTPxESdPj4tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePYZTCTaJzKPNBYscxDCCDjQMkYXtMBy9kMAYeFqA8s8pqkeKLUxgCJqwTXu6aTnKPnTTQU4fsF1unTMiPPjMVc",
  "key1": "3AoKHqvZjUwQRNwLehPpaH9DjTQaAqbD3TFu83U9B7WeH9kSCZshji3mKHyvtBtHXFGWHyHhtjtj3RJQ924p8BBT",
  "key2": "53c6Fr9Dn2R1AQNYtYUhBYDkSdRARyzScfWo4w5FpRKQ6ZbAHgFARWtTWa5QQWjPaACShgCUWbHH9MZRjwtHLNnF",
  "key3": "41Fy4S4zjX41PtHWHHBmwz8MHjA3dBwDNRL1F8EVvHY9cRSP8zC73f1fRpDxSn7NRdayotfqVXvKUCj6dJGTkdxa",
  "key4": "57i1Z9MxqaHCJzMKqgCFu7UoCGcZrkvimu5PdALiqYtsxUcQVJJ2NTny7ymM4Eik9MqpDHrk8wrzU6btw8yauU9U",
  "key5": "3Xv7ZQiZ3t8N55qqcoAXFnRvBeow8Gktb31YVWoGmeXmJwW5uJGtevR1CKjqwm6kNgWDw6bnLgMXNtXBHdUe4Mvx",
  "key6": "2JQL5cYxXkYuBevtX4yDJjEe4RxeAnoLvbkpcvtKAbxvd9hY5HQ35U6xqcR8TXQfbZwwKozFo6LfL5ajpk22TzEe",
  "key7": "5LVfrkWHKnTermfBQB6QcrnoDWND4sR1cKj12TzEFojkkKcDP2cu4ZiTsk55KXcArnWjXjbRWTppMom5PEY8rtUf",
  "key8": "ebfvE8USxaga5KXvW888tirgDo7eV3SUu33B9tYHLppsTg9JuNUD8WgLKh5f2pbfid1Xr6NNeXKnR9ovNMcHmkb",
  "key9": "3pqV7XHy9fxRFzamhtF5JKD43Kd1K2RViUQtxAgBHJJHyS9Akn8wWW3QBbUsMe8KQwrXuD6EfASdLRXg1VVk47k3",
  "key10": "5FhC3JJdsrZq7HvcpJsmmDnWAc9fJqCTyMAgHUqUeFq8oQTXKMQApkS5Ni2kUJLF18uCF5jQCWdFiT9FBz7BJGUh",
  "key11": "1FHkNSqzmGBY8pdgdqLWiFE2m6ojM75pK6iWkc42kCe2szyq85VjuYj4GX2MTkewyw7YuV4Ng2P6usNYsrknrW3",
  "key12": "3HpBnQ6VGUPoUoG26ZWNAT8PeEZoeNFXKEUjy6m488gzeCWmatq5o71FjQGv9usKZAhn8xmsRfibu8SYAPzahoGS",
  "key13": "2spd8dF6VDpEpvojTXGh3osT5UxS5wHxK6ESid6PutNx2CDDS9i1SkhNPGgsBxycgkCruLhhSmrem8ucE9VafyV",
  "key14": "4DeVrPy4gHnCNnsjFnyTSBL3tY227PsiQn3qg9hjjAgZKYjp8D13Qoy9h979Jmgo5g5TCm6ry8mkpuQ9dTe4vk5R",
  "key15": "4qUwRp4MBhbRv6CBsz28d1B7CkdbJqqWcDjKN5uGSYE2XqRxt39bJJHwgojEcTo4EACVpH1SSbNbuxvFvJdFKVbX",
  "key16": "63Kmh19boc3ddMWehTktZuLviRs36xuR722dTLBtmicjxWDjhF7JSgeBSu7xJCKnJFciM542JrEBPAozSZrX4QDx",
  "key17": "JavSZ1pihayYPwVRNh7JFMb1ujxE7k2WkB8iuLZnr1GNsNgS2rczFVsFx4j2whimEwDQPJ3q4NJ5MgEAsyx1i3f",
  "key18": "3WzUJ3m4b3rity5qoWyBUnDjo4p7jDGhCyLP6yGXe45Dmp1RoFpJikjnpvwZAaddznSXs3LztgJ21smMhp6MqjNj",
  "key19": "3NmWcD1Pz39RHQDwWpvfzgKiZ1zdzUDQiU5jS2xuLWgSouJ5A52u77r3uUjLN2D4n2ADSQeffxt43xg5FCvk4Yxt",
  "key20": "3TWgTVGFLJX19dmJuHZBwe9oxF57g9NfYJ6rxHJCTL1VA133pgRiQgu5irdx59NM45f5dkmtbhXpFBLUWmtDDsdM",
  "key21": "3zaPD7kpz2Do14HErbV3RznX3y9YmSsW3c7KLDDyFkaLrdTwpSfwCL7aB5vfM8mw5uQTVsDnY77rfQhrVfkMqgTq",
  "key22": "4jXBuEkaJY9a5U5mtqfpS65P1d15huCW8MZZbvrUT5hCCeXQv2LFkRffdzyitPytHgFMzbf2VfhnwTpW6Lvv8uWK",
  "key23": "GYSFzqSgFjDUX52NxRmShry1iEBUeUxfZC7QPhSgnEkASPMarxzYuFvKaNHU1Lkwe8hVRCTeo8Hzg5eFhKHxy7N",
  "key24": "2hvmJ3mGB35G5TNR8NhUt7dMw6uBg5hp3JNu9Y1PK5m7SfB7ywhtdYuRmAf3t1QgsRX5AgRtsDkrYh68NZsBfADz",
  "key25": "4L9MGp4Bcwz6LEguNjwPBXzhQHNUteRqnb8t38TxVQKgH35FLL9UyNCGUXKS81wvzhhaHxGB47XQBXBh2HdTdhCd",
  "key26": "5PTKXScvkBBsC1xiFuunpNXb9N2qm9sW196HDfUN6NPmPWDxmqVsz5g4m1A8zmoJEvXc6zGbqQ2mLBA7nCjMrS4P"
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
