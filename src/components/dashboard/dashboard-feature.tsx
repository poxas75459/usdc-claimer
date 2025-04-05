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
    "5fZnPWgTo4gXQ2sLV4vCNWbpRcJpejzg318WL7N3E7wrtHc9WnEWjCt6HW55wiE4MpJBhh1JbjhzREwJUUXbpjTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rYrJLz18pN2ynqmgSeUMqivqTViMbHMjTwFJqAvvvSmWoWLhnkdjEAS36NszcY6F9kbUwsbgmQTJRBJCv1MYQL8",
  "key1": "4dFUXaP39UT2wbwhgWPQVLeoRvC8Kwu1dWkm2WjyzF2D2sq1r1k7ZEsErZuQSHR8cyBFvFUqDKhmZfDYBFNjwfYG",
  "key2": "3XpBoNKE4nPiYofXRvHVo8XK7tcmVYe8PSvHYSqufZGDkkxypz7e6Gf1M3RsgfWXBCQKPAQmKgNY53N9APgDYH4y",
  "key3": "2vLR7z4xHh8FfWdRzfiPosMJFxjGaPaQXKFBSWUx1MMPXxXQstv3iJjSGEJfMJD1nCAUeTAw7eKPuwdWJmqCgsvL",
  "key4": "5e7vsYNcnMJXjjnj95EpqzM4Vz66EqK1bdQqVADhB3ivCxtJaF4fU8h1raKeGFFeQ5M7ZgDzmCtJ5GoKLzkGcn6n",
  "key5": "54CjQTWgp2e6nKe9LM4CoF218GcUxkSbuwauAUnEGwFCtVMkvfvtfS76gN2CszkHJCizFdu5YNQYzVnGrNys78bZ",
  "key6": "3CdmXHdteAjnAtWr3BTm98HpzvGxoXE38adDpTsszFc3Lhe6dRayaDXwT9CPS76LdE61nMs1VJxJvn4PZU7m5ygQ",
  "key7": "g6Akzb1GWwajT4yZcRReH8r3mh5KRUDZMyqTF4P5oo5LrsF1S7RcgpHUKkQWfEr4ihD2x73UzU4veKK4K1ZGky6",
  "key8": "DiDBNfdxW2KmcpQXPKAkXQP1PrsxNSoYgADACoZtoLnAm8Ft4oUvRx93BLB4G7bsgyKiGsWgXb3dyNL2MBq3hvf",
  "key9": "3k1Hf3yh1sYWEcbdQYK3QzRxgUHyxJS6tErNyjXzL7XXAXcLWqcWVdEC8KbC4stUFkMtjdDznL78LjSv7LQkJj9u",
  "key10": "5rcU6up2fV6FebK8jccFq12k9dnqeuSa5gXEDYs4U42TMmB3yTuhSqgbWB52SJiiMn3rtNXcP1c9Hp9XzUmXctRk",
  "key11": "5x4SZNPVs6Y78GbStQTQTimAivjKZdXkwzRZUpYSXmD6hdrhG6o8qDD2FasyPgh877K8ycRtg3fueACrJQ5dFm6C",
  "key12": "DVnc3C6Zu7XkoNEe8QxxXpmkxR4LGdBHJhsT5PYysJ7Rrbry1imi4sZFfNbgFE8fdR8QYueZGxasY3bskVAcw8v",
  "key13": "4hPDonmpKkxsLKdb9YAoJYiFEewrKY84puYRUjCFq4zQX23tH5mgw55TqRnmuJ8p8wqR1PSVH9tva2jKmtzSmPoi",
  "key14": "LorwnLmGG25ji8423QERS1XaYnoxQp2Y2m3cdfSerMHrHqYGGZTtjWXhzdqijDfnQtM9E9866mJx7vSinFXDZTA",
  "key15": "42oPrVZjPLjJeTQpmm6ddbWGoPUsw5AYPaPgcS6mS6CxmSPf1GqK1EjkRMxmpsMuPNmw11MbuzbMoNJziknUmkk4",
  "key16": "29raAbhRG2pW7jmBgWk2bbqemy88CBbpRtnuFyHaj5R6v5HSbVhi4WmR5DbJZezEt9KGG9jWvYPPXHaWp1Y8mZB3",
  "key17": "3NoHFcsDg6nQi26Nr1DfPuXbL3VQw4kVK6JyrskmUUK5u8q4387kDSmLAZCF9PFq5NFskoqiA3ysqgeatb8Epno7",
  "key18": "5QQ4674RMXRwUJMo5NQcf3BrsNwrgwXK9VDbhLs4JwiDbxjdn9GXuULCJbpDqbwTBFQwSGWaLzXRQP9tGyc7jhYH",
  "key19": "36ojUTwyNMrNs9Q9mdqDJ96K784MKU24FQYfLyJdicNeSiyXRkAh9xGposmQ4ZB3xivxz66pZauwUSuypaV3xPMz",
  "key20": "3NBzJr9EsuvxpWGFoeroJPaBzsZKDBgKvhZxDUjamURgX47wSfVTwxyDyUjxSyF22dWzSCL4PsYCtTGHsTCyC6Ry",
  "key21": "5X5kBktamrq1M4u3FqSTyexb8AajkG96JoxDp6VJwYbCQNNnGwWeyQmHfqeCuCLDhbBSqCRKzQz47aYVmiiQMrdA",
  "key22": "2Mb1H56reN9bCHyPrTh42TjLgj69Q4hhJTSrVQPkb5suZttiakTYFHhCk8yDmSYDyuj4iY5UZL5nkK8LaoVq1Xoz",
  "key23": "2uCjVDsJ2J8sU4Xbcf78qt1VnyF2XW3TET9C7afAkkAoyQb4vBYghsw7AzGtfp3kQEDjtdo19VzGmKceSWN761pk",
  "key24": "3PNmv9onBmsFSjfHadWkzvszJpfPCqn7cMpm98HxvL74j6mMYpNoBoretK3ruf6H7KMTVNSFcAp3oZAMf9JqEnEt",
  "key25": "NCYfsr6WuVQgj7sqVD4Lh7KJ7619VpP13J4kz2uwy8BbzhpUaUYWr1ZT1bxsJmJxHbDxF1qss5GumkvojMTYYQH",
  "key26": "A6DPNH1YNJCEq7fnxqFnDPbNxqVTMofFgedwr8CYnyrqSTiEsmYNTut1QdZNxSwKWskJguEse2oLYmpLJnnsm4P",
  "key27": "dS1THJv4tsZYzoqcavT4aoVCgYjzneEMaMXiX3UGUUvHKWPaKhPa3qpMtyrmRK4VfUEFBgoqAoCuVnK6wDUBbzB"
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
