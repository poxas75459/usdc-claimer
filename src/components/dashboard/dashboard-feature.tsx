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
    "j8tD6TugRErw7qzjNKPpZeLaLHwv7UK1QBw8MKm8GD6Uj2recjSGVDpn8rMsxsrhKVtBexy8Hj8QaF3JkLQL68y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BevT4BzEkSKXHUqdavsYbBVYKAB5U5B8AVgPa75h8PFNmSNBLstYHgzgM3kqafvNTXLTZPxodSYsB3QErY3PBKx",
  "key1": "3AZWzD1JAnkmUa8yzPz8HdQmiaWoNCse7yUzx5xdoLboQ8MbETZpHVjLVSK6idQHkf5mekCbFm9JfcNa4W4ND84V",
  "key2": "5zZvxQPSfyp7hoizHKXwskzZfr3TNhT5Ag2KCaNHE8wQ4EU7aPtVqtQ1LPCxkz1mxoocbAMeFacnKoBki74skd8",
  "key3": "EUNdPzeLZxbSEEG5mH8Mngp8EUTCHxDSzpJxroM8Goy8MJCwubpdZuW6W5pFagkc1Fzp5RTqu3CrZzL2wmswYyg",
  "key4": "4kPFk4DfC99693Nwj1sX3e1pehcYAKfCDvSy32gFMYrWFpkcWbrT7SgbmMGJasqVwy65e37pC1g4UY6kxKjsPAQw",
  "key5": "4ypYBELVRfwRWdxtYfpMzKPrgednj85ojpjbt8ZmNxwqtLSg33Z5ut4s6p2UJhXUXLQ4Pwfs9NMs8tQ95dN34SbT",
  "key6": "4XbDMgHZSpS42dSmqhNBkPzCspGW47AkuispT3N7XcPybG9eKhNu9DKBb2vMT8FvDaQQqysJa3DRp3gXAAQ6UkHU",
  "key7": "5BQX1HHGn9X1WVk2aAVTtwHYMcfQzoFQ6dnh62vqEm9teZATNgaGact3svRbfu7ZSU8GHqrjXmS2FVhS2r4jwmyV",
  "key8": "4oDLmtUQMTM89Qx9C8pxWXSsWWgTgcok9HSe9gLYsbcpH8axvqrAGFPXnuxyBJMjwBDXVU1SMVK4A1HzXqZqF3Gx",
  "key9": "2jk6EgMoaHTTANgHEfZse6hZS3eqiRQs5rG4MS5aunrBuHLskN5BsUaHgcNMoMmEry1Agi1pJdTdZyJNxJoWTnNS",
  "key10": "2hhmMTtXuNLCSYgXvTUGHKmQmRtFaEEdSnZpswdwSnBQmV3ojtxzgei8xTPRmQJtFNNCnVyh7RXhJ4qri3xdQtQL",
  "key11": "KdaJF5K8FKBRPonDYZGDWjyLJ44CJxVDkNqM5vQrZGDTVhVocbWqU6DFpXJhn8TavdbvNujpiDoQFfAZp7buL3P",
  "key12": "4RxNtk7RST1yEFGuyqATXNdK4RjDgZwhaCMBzW1fRPJgFyV4QGRQHnEikuLrEyiDjhDDq3bCuk2ME1nJgAfJJTEy",
  "key13": "8XzsD6ZHWTJmaWpGEXYvktb4Ra3yadkGrLtjndn5jfaXNha6cDiW4m5yvfAGUo78qRLmRnVF9RdCvF2DrsiPkoi",
  "key14": "5ftBF4coZwTfoU4jVvPHjNkTkGTzHeUyaNqYNnmzM9ry5K6wbo1xZRQSwik2nmYNhp2Epw1ZAiZEFicrnK7kjzBj",
  "key15": "2E9na1NVnQw6VCuYYAXQMFuMWBZ6tEcpAKELRYgJrC6ZMj6HktshpF7pP6MX12Dmu1rZzoPZCSqyq8w74aDd8mDt",
  "key16": "5tDzFsUbxMVy7T3bH1W9vJu1touBemKM95UqzWSne8gBwBHaZXMfmLfb3sBAhTQnsShUBWu35yp2jjd4KdhetDcs",
  "key17": "kAyrvNz6LwM6QGHyFgLBTGT8KXsq5SacfBMTq7r3e5BGm37pnzAyGtmCsbdLUpUKMuxYVF7KrgMXuoaUw4ud6De",
  "key18": "3uJp5WNJ6jmSe6aJhD365VcE11rMuscooB7BWAzpz2rodu7WxZ4swRkx881Dosng2twUnyfYYa2RnhbpKsb8TM4",
  "key19": "4wLzErK2WgR6kdx6JcwDJAhJuRNgWz6gLH2kwZ5sLxK8oiqMbJG8usk8jrnEvgT1b7vxxtA9mqo7xD6XSBh7dGY9",
  "key20": "4b1VGk2EtELevLVqDQZdz2uATs7XhDqUE5zPzaRPACUX8HdyLniZYWLogoEWviS5iNFLdVWj4nnSVqFTNHmkjGGj",
  "key21": "btXxcgtFeSdcbZQaNxnSJ34xnwBZtcggn9K9YHTxgP1UqqmCixw7QacnJaL1LLG7VogQ5Gy899hMDoyUCzotr7L",
  "key22": "2WEJPXJ6cuahDiq9ejviBiDHkEoBF91eMQWLUdn6DLJFhuasskFmML7nq9TD1WGdF8q2uoT7QLSKr7Ect1iQJ7cv",
  "key23": "45gPtpRj1EkueSzVhB6cwQs6sVBEEYPHXm1D7oGpUvRFzapdPqcJ9hSsnUsV8YT2NRjS2L8fUNWfETPLvYWkkKMU",
  "key24": "4wwTRH3c4jhaqXupiVM5mjxmVBmY581DwdHGgsDqm2rscEvRh3ZMHbXVyr9m2W16HvFSzc73AH8SXjsN7kKa9qv6",
  "key25": "27i3j5GUpiQvsAZNH6Yg3BWsk6C7satSRjRsz115bTWZmm3XyqXAvPhi9323mr4xWu99d1srjSxZMU1nZJASGkun",
  "key26": "2CKEa48kPMVRbUPDSJmugnmPyszbBfNwYLbbw7FMCL9Aij9w6uieJ7fsjYYYwfcrwa5Pw8EGkqctPwNEjey1usfw",
  "key27": "5WDvR7LXCBvFEz2noG8tcTkfWZzj8aUoeL1AyjaGYbWDhcKcvGX198FU45so2cNXMBKhwSKxes4qnvvsc2qZhjJX",
  "key28": "4zkwLxw3ydeFJGqEvzreSZ8J4UutGFxGjrFDoZ3n4mPYBC56D67nzcxLys295SawFe3bePxPDpnjXbVujhjS6Emj",
  "key29": "5q3dLipUL9fnoMLb4gJ6sFbGtLtCeMXkPWjWZC6U1KxaGkRXF2ovpqF1DjNfTqEvnHCAB2UFKpRverUXbEB6YvxK",
  "key30": "54HCtW82NFxjYPN9mpmKiqRoefWP3EQJvsh549UHhLMeuga8sFqHJmLvmyXnG8bdG3dDp3RoZxvJ7tEsDQDLiQ87",
  "key31": "2fVMJPgh1U1ZWTX62VLym236PZ5obiW8ZHp3b6jP1Jqksn5pGyYbKWjfNwagC79gUWuGm1FrD2r1494rh2Q6Pmff",
  "key32": "3EUVboVG1KAUZ7sEviim84FqZD73ZsGQoHaEQpPsGzbVBU4T1HFMMzwR5otsAwyESPbZhXsBTgqscDYKvBmoFvcu",
  "key33": "LfaZfiVHygZmcdKYTtdZNLvDFdQ2QoQiSXhj8qxfvqNZFsvkiByCQhvhU5GZg57h3sE3aHrQ2juK1KnwDToriG9",
  "key34": "2mpqywedSh2pGPa76NCsAjfLv5K26TqqniSBkmbDWCkNCiFdqJbNgfpF5Zi7nnAtwVyqRypy3gjytU49WEZC1KS8",
  "key35": "5d7gvJapjDzNzMKec7AKJrY2yKsK8AQCbLpYzYA4GaCNHyu1qEPrn7Q7F8ongPLNfP2pwiwFatgcCEk6LgB4FxYU",
  "key36": "38pc1WzdDCCMvhW61MCGZS8teet1h5nh1e4EtzDHtVWYeM5mBYd75DJfw9PVwp3G8J9UAHuLALcT5TvjFfC9GL8S",
  "key37": "63z1KjzdBmbVPo72D1MAPohouxjMXd229g3rHws7jSpFgmJQeKgYz76dnQMLEn9yiVvEUNsQxGvgXu5XSAJ6oWEj",
  "key38": "5qv44NmHk13Jex3nDF9K97zBx7BtXVc2GgBuvZCbknaFU54cksWFgCE993uZdiL3akU66aPD9vBfT8UCwFsXz3gZ",
  "key39": "5GFwvRMDpsBJmCPWHh8dW2XJe3TdnFYY2p6jFnDH334BBYf4gcQwDZKPHWh4RTWDakYXgc8VL93JGwRfqDGCNdHj",
  "key40": "43TU8NKvg9ZySje2uoy4XuQZdgxXwXWg4o7ec1rZTgMQRGXDKsnAuyMPnbntn7BSsb6xv6iq9sss6GxaB9DaBsvt",
  "key41": "4dVkrVaqPPnfzT8Fsscog66hpn4Yz722bcbPgkDvJuugAEktETrsCFPgeF53RKpg7wXNqF8TDhnxknHQXprk2x7",
  "key42": "H7ss5Yug2RrKyza1JULAtwR5dWR6sbEVFkUw59QvWncosymnf2PeHCjbv3XDYh1HHxU2YzemZcATYfsxXSWucbF",
  "key43": "2cDMajfwdiNAxA7UXXkLuphsZmvjabPix9PgcLEWqJyig9Zi7iXpAsRm2FY4rniY1aZVxrZH4mpS3o7yS1iVfMAe"
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
