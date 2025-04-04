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
    "5Xdvkm9WNPAqjcMdhXvd2NxLbmqE7xRGCMmsfJkGyXCymJW3Sk46395Xtjs1HBRvZ8wnGW1GxchzuMyNKhBfPwts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yu5PNir9ZWL3hR9zAcsvn2EZXte8JphVnTbne31FkxnPWr1zRj5oM8nLWjd3atGD4vqjYUguLWge5X7rdV3aNJQ",
  "key1": "8n8QdJu7AUKsrNukRCj9BxhTzv2hZCKmxXF33rLx1jNoobt8T7Jrxpfb6nKMsUL5DEhc2BGPPrb31o5EwgtrK1y",
  "key2": "4neJJAxjfB4fTJiA8bPVsibU8oQrQzhK1abhqZg7HE1JWTbXUfPVAS7FMi1YRVn87vv9TAjBaR47KSWJwyLcGW1j",
  "key3": "2YkXG9e27KWk4CWDaAZEHyASPctoaaK8ebERHADcZBQuo4EXMbCs7UpnGJSnjgKGbLxS41fUVVmixL3JjnnnWVCM",
  "key4": "2mGrCMUhTVJwHBa1kXa7eD3U5vVfPZqpQiW6t3MHrPX1v28NSL812LsSGa2yGnouNw3RrrtXeWNcsS36DwPLfdCM",
  "key5": "2pHuQepH9GLirVb9JXQmM8aNBq67L4GvvuzTwCxYkT8yJRz7E1NN7uEf529brtXtMkTAr6qjckfxevm5bXqgYYYz",
  "key6": "3smkemFb9HhFKAF54VJ2U53BhKnEpzSjSKLGH7qKoVowKPx1z15CfMHvLaesSBbCSNBZCczcywf3SsM2k5pwGSAq",
  "key7": "5XKUgPoLACB7G7t8wHsCK19kPHjEc4mSTcBMvpeWDBUmenKVvTCiF1bAJE3RDoMXxyfY9buN2jSUg857deCqEZA5",
  "key8": "5qdgrcoqzjkRwdxVShJaMNQbMBN6FXKZZwhxz1XNcKxJfqESuCdXofsatJF6BijZFEfwqn7pLecYuFjEgQfC3m1U",
  "key9": "65xzQEBPco9HUmcVHqwRNpEehmrA1zHL8fNzrzkKGUGUiW8sThW4pefKoAc3JJA8uJGCBWM3TwrenuEdHabusTJX",
  "key10": "5iemkWitc7AWZQwC59LT1bRSZ36mTB1vcDdnnztpeHrFVFWEbpiburTsPYkHTZwL4GzxoV3Wfu7jgdXVQuDV42RW",
  "key11": "3799VyhVK3gL7y2QcdgHSKxcCuwS8qEFZP4ep4n2Z4JpttZHHD7WKLACD39yKNcnsmyuW18dKJmMkdkp37MSLW8d",
  "key12": "63JZhLAviT13Whh68uVzgH9X81hosxREW8TLjimowr3enQZk7kAibXK2HWpvNHtWxo9tnZmu8QnpEBVtS8ej3WbY",
  "key13": "4PAPJDTX4N8weBF5efguT99Z9zrY8vhFtqy1JNpHLj2t1QRZcwAifdLiCLtcPhMFW4dj9YbF3xBuT4SLccr94tqc",
  "key14": "5RuQEog7Hh2WPjHftDLeaKN7jcYwH9FF9TdmcRUu1PrNid5HEkxVFAnFV9xxBtWCpHGxeCzKe5K2t9hT3WSBkuwz",
  "key15": "5y8FiwDCvonZaT7xzKUzEUyfgi2JXExZ2KPh6dHT9YrrH9nfq4mjQMVmNSfFZUsYVaVWTdPNKRuZyn8BPnmqsLen",
  "key16": "3cF3BSAREBsuWFLZfeAMB5A4Y7XVsBhEru75SAURqcq9B5Jmy2PXhPHboSCUk6ESdgqgNwNHQddMwWni9UiZrnUD",
  "key17": "4bvkLCFn9pNRL7ygnQRSYhNuWu98TsD52uLY85YtV11mPQ5eih3dDpqcBwhVEwTAZ7pEh494Ja2GJDEaCC4poUXW",
  "key18": "3FzLm7bvBDnjk2YDFh693htF81LiWiDXXTykxkXZuKT9jdhnYcUEoovCzHa7GButsEsUNA94dgArHnmxL3hW7WeZ",
  "key19": "5LhvsyzRkH1VKzcw72qRCKn3ekYdCqVsanoCUs1kXn8bgFMgAKvZ1XKVZ7vPNmnFqbZr7LM1H6Q9y6WJq3NLksML",
  "key20": "63dRmYSZziQTPan3JX272eVYubPViZFA3Hvt4mY4amD5fwsNMWFfxMAy7zFuBnCh8Ynv5maY78wGgj4KT2x2EERd",
  "key21": "5AKErafm4i76BNC7ngNk7BJsNT6gisfUXFD8gzU4WdMtsMMDEDwcNoGpunCAdeyN7P2P6o7KNdqX6p7wthgVFGnQ",
  "key22": "5ybtaaGSVnargQ2YmanWaonPMQVL9CPvrwxjPeRWwrRk1hF6VWPuL3vNHyji4txYkLehFitGnMeJWADduiLp3Ug8",
  "key23": "44DFLPsKWm5E4uXGiqoJvXRWx5RjtrUDF1nigJwj67eK8ypTiQphTR2aF5HPfgnuzdTgo43mtzx4FwdLmbwd9yGA",
  "key24": "4mpmZwYJqKvWYKyP8sCVNnj3iUf9qa4Nt8vuX47Z55eFULH6YpfUdk5GfmCvQZvZwjHsRuM5QBP293Y8Z3znq36t",
  "key25": "4JnbXAUi2H9i9uZ9dEQSz4tg4ABL1pPW1pqiNV74oqFkJJqXFtyzmQKESDahvP17nxKwPoyv6SxV7jTG3auRpBio"
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
