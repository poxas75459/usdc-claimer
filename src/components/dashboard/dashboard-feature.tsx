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
    "5ouHHK38YBRKTwVfbmqWoVRQjaYmNM3xZwqAZxFizWrEwwtC8gUnMuduyJ4zMqrQfHyVWofNcYetAJw5uzdv54oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3By4pWMEMUP8CWqST4uEa7FbTDG3JRvTn4KBhYqcdgYQqgC6Rpd3dCNUNeUqjLa5yz1zJ74j3X6MtMHLRsBfw95M",
  "key1": "3aAS7eStFsVbvrSvvLKdg86vp9La1CVaAGMmj9fzoWnLFmWTF1wPstu5jCFKinB2Vj5bwCEJK8PrWyJSyUdDidJm",
  "key2": "3ZXTsGBrEwrgZFZ5CUfrQJmfgwbGwZ7rvhdfuUBZGqkVEwRu5BmRTW4y3d6fGDVBWe8bXUyQoJ7sQ9BytkVmV7iA",
  "key3": "5zcC5rZw3TJgv8VjwCxen9DJvECzVY3m8133ZJkHyPhVdxGgsWtYhwwQj9QYUCNA2DSbHHQtwKNHTwpSYXaoR2aW",
  "key4": "2BawAqmdZzhN6Ga7G95tmWT2vbcvSA7Kwh7VC54gm1pMDhXXp4bGvu76CF6RsgxEtvjRWguRUdJvuoCZzjPHXyAx",
  "key5": "525RRVvsMvhah41FZ25Q7Gy4r8wqgkpRphp42u9GmfgYFGVsXHAQnfSoBNP92kSbJnsQPfsGLZXSu65MBGThAEMw",
  "key6": "4SLRYBZbL8TPPZsszw5gB2YDR8EpVbvKjxts82Pc2tJmqK38EZ6K9rmShxuPmYqpEXbgrXbMw65Z8y8wGQoD6bWU",
  "key7": "3r9C1iT2jJgCWMS2xXjakBnr8oT7kR4LRwGeF9BBrkEtCqbKoK88PeiD2Bj1MueFUWCRC5HUUqU5LZF3HDZ9dPQu",
  "key8": "4anrbkJaDwpuPGUoQExhWY4GsonxRs9nArSAtmrJwcnTECbEBKFj3QPP2LJdyr5ASR19347CJoMShHHbzw9yRiyt",
  "key9": "4yvgd4BjhjMZPi79JhYJST5UMscLssDb4GutVfJSujSySNbtmZtSs4yN6w59zWEQHaeiyFjWdAQeB6yHzKAJFKNS",
  "key10": "U4HbwQ8cfqTNTSSwsQkeufUaGYqXRFtC7JL3Lpt7GEo3SEMtNdRQ3zn1MXTuW7YbeH6xrXJCy1qcqf7StouTCn9",
  "key11": "3Qf5RbrJJHZfyYLQqubQoC9kXwvK4noHT2idowastissHe7LV6eBa2SghQixxLWZ7bgPXBEjzgWgWJj69wWEKyxJ",
  "key12": "2BgGQXAXB6mJvWo7jMxavJZBueqCmDeAr7Ve9SgcALoR4RsyLfeiCQpKs2kj2keCsiMriLWYWvMpFsepLUWesv7P",
  "key13": "3mDfuqDzwLjvrDK7noPDUpEESMkrRjJ1qh3x1wXyii42RoETkTRHZTNURsXUiBzQk2XXfFUMDXC5FX91PsVBGcdg",
  "key14": "yU8Bpkx1gLxbhBpXHT21YxJbfWV7fZHNdQMatSpUggBxPagnYAmcprTs1o3PNNNMNUqsFzg41V2tFjrmsZiuxpF",
  "key15": "2cdTzhjySJUPnqzzJ2389knmPKfniw8NeaLg8a34uhaqTCw12xBKi2RMCr1ES9MXLZWfr8uXnsucEYVYuEcjWejh",
  "key16": "NaLweZRDSLVTUo5roAA3qx3z2YFAGLm5V7jSuVMuPySfBDvwZgNZBPQtdg54rw6gNn6gJDB1ZBfTgEN3rMMpsXQ",
  "key17": "2KogzHDrCwaNj6AAxDye8JX585JUNSjyYDwQCTm5AhvnxrDik43gvdLvQbVKh5irKVFTi4zdZt5bibjbB3xsfiSc",
  "key18": "GGCfQNNmrGw24KVAJpshDmJ8FJ7ocq1fU32CM5KvBT8yfHjSTuMwJVoBriQapstaSWykEHLcYmzTCVzv6Tf9rMb",
  "key19": "5q75mrfyhsWCR6RR1yihDGyL21rJ9JTfDcdsxnovFxtbkhVWJKFj2FdeqFQUVREobboztPYVhSMAUYtT9TE3mWWg",
  "key20": "45rSruTSCRuAxrT2PuCFpNjtwtTEh7W5tpv3Y3Kh4YSi1cWhKNLePzswpyZWoLG6JeDmWYHv18jZWDYB4vJ8cs92",
  "key21": "5MM3UZux9Egq5oXX1PT7rQoE6bXbffU8gMbLfKeeDXGN6ciYu5Seaq1TKm6SAvhnqzfTS4zhTQT2kCwmBBxxYTjT",
  "key22": "2pePAsXtDGuUwq1xdHRdwVEULe7ZaY1TNVEcJEFT5X7L3DdHN8oApCgNw2ZWbHs63XNArQ78oJ5juSxxjuBjK6pj",
  "key23": "25SreqVipicJ7X3rMNB6NgiG5PDCT89j39dXHhBcsdxVuyqNvYf6Uan189jrFhZfKxViNs68uMoirnKBDoLqTwsh",
  "key24": "TnrDjKsNeX7kRbBCSUPz8Hr1xtyZ1j9orFjv2r222PhufCiksf6YGnzLJJHXaNaXAtCtujFHoMogBzrhixEsJGV",
  "key25": "aiUqMqk5tdWXmeWsdzPDP1JD8pt8akzxQjYbdjMV7oYq9fhVSb91qriHtKcrm4GQDputbun5mNtC3cZLkvT4hsW",
  "key26": "5F8DJJUQ1YHddkVLHRkNT3UHAdVmQHju3xqKF3mtuBvyRjiM6ZzBHt7ucvZDdStaPJbtCse56iJh3z9ymZbQp9Tn",
  "key27": "HGk2EqYb4ZbYfKxAqYWNPaQcchE8Y5HDv4D7xbsmCYeXnfVGczmmrkZ2WB2e1J2xJrcxxnRoBSxwjBQfnoUoaeB",
  "key28": "3aowPf92vk37AnVb14epjCYXuCjwBkL2zdwjJMc8NjLjZgf6xaosJneswse1S4vXsMCC6mgrEuTfqy7cDjYxtJA",
  "key29": "5b6CBtVgRJ3bea9Bwx1jp943UkbD6FttVQKJCBrPChNbLqxUrG9ZqZDy8pDmRcRppR9wcee8Cy294Yq32u8e2LRq",
  "key30": "5iw1YmCq2RRRf7q67ffe6vw2uFYJTVdAoTWHbCqvxVsC8re852BePvsd4qAwQwEScG54ym4Cyamv4RFyY8nPPdnW",
  "key31": "PZMTSwNNquqzZpsfYjEbRj6jqcBWrDVYQ6RBsAm1deSDA48Q1MbT7dvxCG93e2R3qvrWbPi21KpB6WwzM5ToATY",
  "key32": "2c3kZVaxz1CXNebLVcTi8LWfaANRmYxWM5Gmv5CA4Qhkcy8aLHKUxG5xAtNjm9kCESsBQFayeWmEzcWii9u8XYA3",
  "key33": "5TFucWRDqVwmNiVv61Q9sd8TjDj4b6dFNDAUwi7LfkSLDEShwHbr4c9YtwouQTe3q8YqYcGzwpVHGuofT3hLnizW",
  "key34": "oXr9wv4Y9ufmgDyKtAA6tVsQjTA9x3gimAa6xZ6V7m5wi3Vsr9Y4rEwS1Rpw4rDXiNJ3nkrGRdBA4yDvbS6fePB",
  "key35": "vHmcNozwo6MkevjfuWDZQruQ3L6htJsDgftzXWBvwvC8PSkK8ZiCUgtZChuQZf1oTiKwsLJeBwr6QGkn62eMuam",
  "key36": "XzhXQgvz7TAKHiBfxyHqTbR9JMRi9w1WEwa6Rs6NYeSYf1WRr6JCLXcBUgb2GRLVohir4XXwkUZu2kJG8Bv8axy",
  "key37": "5D8nffdaetC1Nhe4W5Xr15uPAZ5hSL4b5juYkC6vCt9raTbKftY7tv4xXrHnr5yMGeYqtSf4kRZxEbtmrjQ3uZXo"
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
