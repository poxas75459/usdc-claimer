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
    "5RoKEQk3nprwv6m8LrRQxCB6m9QuMP2iyogh2twXj2Wd3yqRrr5kq12xLUR2XSex2mvmyBStzjQaQmfhnFMyJXLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDce3kVZN2TZVQAq7Py1pv9oCCGdhjBsdEUGyznj1wJHWWmTgAxrSq5iUrcV6n3hm9ajnT1yaYhv6grETPm5HM",
  "key1": "23jFdPsjDezXjEGNRAmTRQrruvDawxLrqt2wNP2uLWo45LrF1etRkV1mHbkELh65VeUS1bTLTXG2xwnZejRWrTf9",
  "key2": "3rwUjStGtn14HnH8ig521CxBCPH7RR1ryTCErCy5vnmMkKVouwFAJRnsnnqMuBnkzTurLStjiREbB5kmPPMsH2kM",
  "key3": "4MzVN1phrnYz2ZFHzeJ4sQdCoAt7eZZbFt3HpXuAhuSKmrnfMfmQWwfjqxT2EdFHoQPMmMe3g7FQLzvGKPWjukfo",
  "key4": "3V2MEgm83etKFE5XzVnYMNTdr7K9q8iw1ENaPRYzC72o43jzdQps7sbt8uyHaDLVS1W6SfDGab35PZ5bVX3r8CCn",
  "key5": "3KfStmR8iLNr5GZxG36w8XfXJ2eerB51uUVk9evRZePgdCpy3zJbknH2aS3Qf4mLQKF6imee564WhiTrUgwRQJaj",
  "key6": "2YkDh6MnPGzsdykfjsXR5YNEgi5Fz1eKhK7jPKcqzGgTQVmNp5F59DkVVZDApHJiyxbLVh5YKYcDYFSXcLNbysRR",
  "key7": "3v7pHu3A9YmLE1ZcyzkQycEhypZ3MLahdAubCpZREHZzybC6nRpQyD36tYFBD6jL6439RV38qyymWJUnK7BV93qf",
  "key8": "3NVqZKAK3YAfE46DBpvTJvBVAg2YUoiqYEiYkaFdCccqdi1RwamzAARiwocP5Gdzw2ovyWp78MMVRAbauVQ52WDG",
  "key9": "fntkYh1fdWqEAYeBxfpeEwbhedWwRVvXk9EbcdhjVjZVwr5DiETJkH83PMVSnmzopQqBPjE7bmqEZ1kwvZUNEZg",
  "key10": "5BpMHgMikYfYyYz4zHyf793MQ9x57Rd2SnFM2KPL5didRdksX1CGSx85mQThMuNgGDw39jL1EidQv5sm56jrBUSY",
  "key11": "3WagTm7iM4Eq6mLyK1fej6Ynue4sQEdAsV8cMv8qjz6Mh3MEfdKoxsNLrMMxS4ZuP4kbhB5v36XVdBn3M8yYnhod",
  "key12": "3gUocEdr39A4Lxafrx2STRtwMsMWSSBcbjPYwiVE9XjdfQTaZk1fsVdDbTj3hXLouUbCopdiYLkYebKUH9piefdK",
  "key13": "3BFUQvjcNfh6j1rxkJ5ba1xZd5NDZh3sKWda63rWru62BRyVibbnyM9QCtgMw8c7X7QKtYJae3tUZ3U9jSxv1Q9i",
  "key14": "2k6eLGbTsMF2hv41u9jz5tSkVSMQPiKLZAwjK41xT4ydJAU3NRKLB4cNxYdj8DjEqTMnwMUHTcrQ5XcvBxHRm6Fk",
  "key15": "3gAZ3NE9Rw1ZqB9XKHSbxPcj441uUPH889wo8pAfTo9jhRXLmfNKvwHJhp9wHwSWkpuMeeDfy18MdVWgkKAzWbF9",
  "key16": "49rbfrvgTRB5ME22Nc889r6fH8G2B5ZSVGpfmfJE8VEyJJ5CQhJouvtQzfFyXpZVLXux5Pc8Eim8AMmcseRxseKU",
  "key17": "2ghivt4Bx9sRWLJ4RZYAMGdhYfrGBLSXix59cwVkKx8JJDqMyi2QWdCM447knGVcDgr5TvVQx6MLrX75fWcQUL2b",
  "key18": "4PWu91fRqT4zD9VT7dPWRQ9gxwc8fPCKxBqNrFH3XPPKYgs4P3sFPXFPz3r8FMsq54YHo4ykhDfv3bn33s1aJKGX",
  "key19": "2tLHLVtxZPPxWbVW6p4d3XQ3q1Kdvnx6SVXSeHTazi3G6VL2JvNEbYUSckVNnG9MJaBtZFTHjzEE7XvDzy3dQYbZ",
  "key20": "zZQfMoZJNJ7v7wEUqgXW9MUYD8nuymrpuV3NdiSrqQVXdGQSE2vt7scv4aiiQbvtwnEqsr6qdjPEyaez91L5iMb",
  "key21": "3uTEu7EvWd8stGkyFih8yfrHXfBD9HrAH95PSqjHuaHFLSh9RKNcDDnM64fih1zUgsv9wUXf2tz4czHmCX5mTvnc",
  "key22": "47YjjXrodL9bViUHX3zEa1Nx6ytjFvHbrcU4K4cX5iR7ESBFBZDFfVV7rsUifdCspZVfnNNGCzkED1S7fa1nzUKM",
  "key23": "5CbpqR5rnDruzucaQKy6cV5RKqXBAn8cBktYnR6jGCQSHFSs3LmYePQizwmXbgaNLtCsiAZZRvGUiuxoafXyBc8Q",
  "key24": "CxyLUQmmVKErBKjxU7DRVKzL5BiKCc2xKFHkKW96nLPKC9jCxWvoxD1j7sUkoUxBfVGQKokziA7aA1tcX3HvWV3",
  "key25": "5FckurTTLri4CupJX2cv9Jsz1f519neqUeBUZbUAaJKoecDLDsTzWdG4e3oEV172oiczF3sMSHzE1cacz4chyRAH"
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
