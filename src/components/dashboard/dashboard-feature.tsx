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
    "2rqtbB59Ri1Hs9RTUfySq9rHaAmUz9JXdcqRRL5pFULScMTufW2ANmKA3XGcsYAJVPJuZtZpidXnHj9tsJZCLuxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5QMGQDpwhgTjTKpYR3CZUiU5cpu9KqSxxFhQWqK3UWSQT3ttn2C9xQXvUJoKK6rCRHSaGyhPtzwVbyGm34G3kn",
  "key1": "3Kq3wcHzTeLjCcPEnahFQfYJVZbNPLMWutZKCgd8qBrCbTGVC2W8wWGAwQH1UaWzZd6ULUL6fGCadUeAJQmPYz4Y",
  "key2": "3mqruhjiX7Rfjtyei8L442HEXnsJ53hqPBBYM4R2vJ9ZNVZoSaPxpU1DzciEptdoUMABj5sG37uEsKYSycjFQwd1",
  "key3": "2PTZ2WhLwBghMsWCfDMn4rAr8GGJcN8NMDF7w8tAHDeLJcE92q7Xbyv7cKKQ566KG4GwPfD15v8dB7ELPTA8azb8",
  "key4": "4QC2qz4oQEwTByLhwfTVdruJvkTNrRUzGa3UJvgyW8qnbvrhJGHRXK62M8oZ5BDKBvyLh9jnhmggbqGG7ge3s6Ci",
  "key5": "4rvmMpLZfdsAo3BiZVoDwQkyka7KCSzSpLj4BkgafJEQdaCixm9cqEHVREEjhrYRpSkbHNLitc3EQvWRG3b4PNhk",
  "key6": "KWTGi2kGERxiat5HRo58N7mRMy22mHBcU5NUFJD29XMC6pqMr6ygbA3MmGUKAcj46tRY5ReHEee4yQkE1hiQXCa",
  "key7": "YgjNmZiVRujiWBXiA5uq2NPKL76Cc2LNoUjKFBTJnLNv7kQtB9eRZePgLwNBiD2FwBmFnXdWqt2MwVXKgNcUYTj",
  "key8": "2MQPHxCGqKehhrQyYtXmoUsGNV8zjAHCmcapMdVehX69dTuyKepksv5zcin8qVmFgby9WmSpH3t4M4GvA3HuxUGh",
  "key9": "eAEWBjEJkHwPRRhFLhUSeX9U3LYVHncGAaVCuvUXfZjpcdnfnTRGRtVgVMQXxdQ1KnoWaHFpRRXLshidZGpUqB3",
  "key10": "4V9UxNsb1vF2UAcAReMPNyWbStRdHL5dNrGZA5CZsUExatDEukk8BnuDmBFU8QTkRDpPxWBrmZkV3SmgMYGgWLNs",
  "key11": "1dU9T1kVGDvSSvzagCa6vdyr1vDs4oxd8vEKjdhxEUXK1szMsdD6AQR1ed1s7r3m11hUxc2omTKfUBuuU5oQmx5",
  "key12": "31uKsA6HJFht5jXSbbQF7NEBMwJMD7KWAxnVdFKYqv9WZYB9PKrj7KKCmSqkrUfNbJZnHmKtRESo23FKB2Rui3hn",
  "key13": "4yZb4qR1oAjmAze3pEybeUbNxx1CK9fHo7qfQXzRx8xnYgjTM1QCQwPXeYTkisgKEkgbW7ymLBAVH3ok2WdHNmrE",
  "key14": "4pi3fGfg63wDwvqk1QBJKr2UPvtSUXmCMuJWuZfEvcnHdLvVG4bgvn1xmEhcdKFSdUMw4LF2sv8g3MxpE6NCVKDd",
  "key15": "5RTSkJAHBLb3Paq22PAKWvdkBxLTSN6Ffpyjyv8RXtRexW6Y4mwDhBwvCVM7da4GYBLX4YxXDBgHWBfgoBD6orvC",
  "key16": "2p9E6bBzGUMVhjTPtmHJjR7sYFFsoU4Xs557JP5Q4p5GZVoJmvZkgmxGQck1NnaTGc4M6jEDqKuKYTzdBt9An6YG",
  "key17": "5LgzKFfF8Jk7Ayn3UGd9ssRBHJQZkd4qonJLhqxD5AExGqKobZbECwEsosuW4NEjFQVconLbHDT9BFvTBLV3VU9n",
  "key18": "3JiQ4zfW3X77xdGGy6qeZPTG8oTDoCCQQdVQ9ofhktrK1yZiJSuyGprFJToF6ywpmvk4Rtfd42CmVMaJ86Kuiu9J",
  "key19": "5fqadta3svypccg2vD2AGHaEMV3wP9BpbDW19WwGqsic6yUpasJ9z2oeumdsQcKShXNQLLAXg3dqbxT6w9u7uDKH",
  "key20": "t2aCkjkSRZN7sJwEzACZG2asA9piZU9VG7L8tAtwLPoHYfmM46Nwj157erpUEQpu6j7ryXQRh6k3SEUF94DJHPp",
  "key21": "rgAMU5Hm2rrXWdwNs9kB6bJadPjD3tJDddmWDwALgAsFGLLZumKpoEihHKhrPZhWHtaoHrivSh3Z6LSWwtnFsSG",
  "key22": "3a9K32P3Mh4irLLPxrYUZ8LTZmTw9iamYJGkVb9eXXqeyXhzm7DdyGCuGkThbdduunQ4ooeCpxt7NTb9RDuLm1Ej",
  "key23": "3RJBYhsRYWPLbPeWM73jApLmAe2HW3zjYksrKcmgcowY7AjFDbxE6oJpHaJ41WGwNdTYPV5sa8iyrzmtUTzYNzTs",
  "key24": "5J7ioi6gPMKCmiHi6SNxoTwPS3F58BherAc2fVrT8HEKeqzpE11Pw9Hh5ZqeLJ7ymJ7dSYWxqUfRtAtjrDz9cZhG",
  "key25": "2JfJRGbBrPkMcrqV7uDH9uyRUo94VtwJxmNpKLXQkZQdxKyzr9jdcyT8wCmxz47XbhPkogTVPT3Gwo79vzViFKTv",
  "key26": "38zDDbw8xVr6PjsgQQUVsZJXzFajP9kxDWBB4ctJrzeQiHz41opqtNNNi9TKXN69kUaDEcS3gfvwABb66Pt7bAfk",
  "key27": "2gyTJcGdZuyGJRL5pZcEsknfx7Y8VSiwzaQ8YYaT7fbtNUUAFQHuQB73kT9QiKyrgQwHSDnmQE5gYKn3TkCrZTQm",
  "key28": "1PA6ty19V3oC5L65A5q43HfA2Sja6JYeSX7hDkD8iLcHg6aTWV38D13knCvcczzenPwMyQrtUKavUJy12xnrw7m",
  "key29": "3EMRYbznxjgD1ZZaiW3Y3Dq1MmjmnzEbWzobWRbX7NQjWPhNRoBpbDrhsQb5CA2joqjpKAhnXDsXaJz4VCYyFqdq",
  "key30": "31oY8XQtFH5nmmhfJ1nNVZMAVWqiy1f8jURGkpt19EbTVpUhraurFj4cdCB3Wadzd3hoKQWWq8Jh1kDrpzGe9P3F",
  "key31": "5q3Q5rceGmrF5ZoWFW9i2i3GxbQCvGV2wDJ2RLCJFFUFdCz1xgHDKmmp2QK5iKosVNZmpiGXtBayfSAFM5VYAveG",
  "key32": "4vusXyhUumiRiQ6hz5kQj3kKNA53STcMqnDmMoRSiEpjCo88b3EaTeEigv2TJaDYTGv3ubu2u3s92R7gPjevGnhG",
  "key33": "3gYUD1zfvNoLjJpR3zPxF6AuqcvnRu6AbxHEqNeHVFj8fLzw9aXY3YUA5FDpUxPXgCBZ3hbTTAxX6kCAgVzKn4hG",
  "key34": "pY49gLnAV5YzGSsKJs2Bk7bJ4zVXuK8MCJNR7j5YbpQANPBP3xXUcCMFPjpze5d5fomUr9MrRvbGRnMsqMGSutB",
  "key35": "2uZ45g9LcYYgntWdExRbN8nXmXZEF6h9c1wozyVgvKUpmxpNhGLwpAGZb8j5eugw22hxwEaH1a3bAk341M3xZTb7",
  "key36": "3ReJkzXqrwf38fHqX5hStyHCTRiKdGF7vhXuF4S4kRwDNqbAXpphiZ1NjpkESjpnvcRfhKLuC28iDb3j3MmqN9px",
  "key37": "3EZC2wauxdPm59oLuWzVwjt3jdYNHDnY3cuYSkQpjvq17iML4KK22DH3ZN5qreR6SwG75p5gp5iimJfmNDACguFP"
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
