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
    "4dMGR8Aev7e8GAiiYAkoS5WUjXYaWvRVDXRtCdtE886nYay9t7cpRKJVYCfD9UYFwh3he5ywGmdURM6EbCCFDiCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaUdvWvGtFK7DKktzfahFQ8DHdP7HcNwGhtZYb432K2pkBUR2r9RyNrMATBqbNvSt8b8TS5Xqm6jrZZDXXzjLZc",
  "key1": "26brTSk4iGaM7uszJnAU68D2PX4gcVfa5zMeoNdJBWMj1GNt5sjRp6REFW3FDiwKG9HW2LJQfT5FUxWxKYyXM5F2",
  "key2": "3MMeMZUsddbAabh4vuS29Ln6Ryj75uUxiPqJczt5qU8zve1Xeb8q1me5yUyAXG2XX8PwmHhX9LTHsp8tSRXJfua2",
  "key3": "5R4C9MGd2vDzQzpVLJPrbznbDiKfQu1ajjWLw6fgWQtpQGB3wCet1379Dr4DDrcdTmc5grFtnA6qEpFNXpVqMESz",
  "key4": "312s4Ywt7nYJNuPdmkZSeCnyZZgQqMo1iDvEQsjHS8z68jjdgoDW8vfu93J7eR9Yn65vKTC9aEk4jCHjBFcRirZu",
  "key5": "3wXAf2Hfn1JDi4ex8iNE1ToEpBX7Bn3Ju3jBjZ49GTng8khkBg5hrZ6BzddrmvUgeNB6pfvz6oGQKUWJ8iVyf8VY",
  "key6": "4bfFcNFb2ap4KLSP5nEqdVguSAkvXqyqafAziMfsSyyAY1PxZsAbeEu5nbGxSFLBZMphFQzFSmFkmCoczNpQxKcU",
  "key7": "afy4WENgkGcYpxJmgPL2cFmZcFFrfXiR93NY1HW7KYfL6Tifiqm1DeFmk3socrK6GAyQ2esqvrtLXxsEGh81uqp",
  "key8": "JYQvJTyD4JoXtj69CcFH8u4aFFPSNoREQRX5esej3vMe2GRNE3qopuCMCdiKkqDeybEaVXMmhAiwW9KYanyHs2x",
  "key9": "4DGdU3o9UJygeZrr4ttbRCgAo5cqghTuGoqsuNGNaEokC6RjBvzxC8jSqZTaXNRgtKRcTUQuq1ZbuF18QPw9DAfK",
  "key10": "29vWoGyJ3mPHb7eE1ZCd6g9JBmk1vccf41orkQB7m59fWZTnNDhfUwABUrsdcPk4aaAH55878dCyUg3eM3Sn3PAH",
  "key11": "35zGy7h1v4saWGjFgJnbkfDsARDQ6W7BvTosV4YHC2pzUCgYW2xzg8bZ8pKRMjqQW7yk9LkyyeeHPpVXAikr6dTP",
  "key12": "kj1hzF31x6bXoKVq65JMhQrnUTtu6knS6pLsmVygjp1MWRnKnkkB5XipPm5dqCZY8sgHJEQkUzDRLnjcWTYdBYy",
  "key13": "FYDAaMXkL1eGWhcrESmaWh8tAUduBkSLoWVWMHAbQe1ZLkKNPpFjcXyFUJcdidgCJjAZqKisjwhDgm4rUv9aywN",
  "key14": "2BNHv2NMAz3SAnuXymGvCnDwTzRQRFn3mEKcZ5aHrWGiSwfiXKPL7rduQb5Mmjnx8mQbpDt1egaGzaz9pWsmzsWS",
  "key15": "2YU8ejGQ5wWvrULRFwFTu1ZNWFYPvpbSYqMYGGU9QeqRRqf7Xuu5EXZjvqqSGn97DyRfFyhTFqbv2VhMc9xXjT9t",
  "key16": "4iXmShf3qG4Urs67H92TB1BMnbBRZRFn2ynBF19DMiMCWeMtTUnDsB1CrVSoZcmpyGQeSC4tjAe3oNtqMn8qysF",
  "key17": "4GjL9Kg9kaZkPVFwdnb66hMp2cgo2eGrtoJajoacvLTN8jcDL9xWQJEjhxkw5FHYiALwcoKxgKWbN18jRLFRSVSP",
  "key18": "53sXz8CdtKvuudoTja5HcizH54AhC7c6tttmKuXWSyvCKMuYFiudAdU7U4gCnKjjrfnqqQ9w6dd9Gu2887qVfLzE",
  "key19": "4aLZzEx7pttfbtDXb8tdoNGUzNE78nCbiMwxc2dZnz1roejwaNFv2RnUjZbhcdfQBranuXHQpJLEExUkasKXYzQx",
  "key20": "2waRgnNTfBStJwAeCFhhXBQ2RL8Dd5MXqJYz9yqqGMNUCvsDWoNUysf3Ppjx1Zgqbszx7Zz1p6vDtciMWznte4my",
  "key21": "2utoUkSz7PGTyWHheH1ivXoMDMTcTynWSzfNRmneyF7n99MhKPVNspK57REWydUV5neGw81tcjcAtxPsoSsCvwWx",
  "key22": "5Hfj4hhmTc9MDkDV9dGfFp5y8dy5dmvr82hxzGEUf6AisnwoVexeRWfoZATytLmMUuDJyRKuGvrxb5YaPDD2Aebg",
  "key23": "xShVz5w7Xm7rEQmFWEJ9Bi74LKJW2Gv69JJcvK5m7S2Q3kaDVakZgrL6kzEWX8TwMDZSNePipg9G8mCQSA9mE6U",
  "key24": "3VnYVJsCMhLrigwUAguuSgsc2XusnBXfMddjDUotRe9uhMBkLFCZmoPv5cPKMfySLEdPeiA3sdtgmZUzRATtxFNk",
  "key25": "5YoAGhMD6xVkne9ohUQt4xxXb9cqtmUrg4PBLppjsk9B2AuLHmWQBPq9UnGo3HjfpjxkARHjpRsWWZENKFEUqBGw",
  "key26": "2oJrmyKx7Sio1sLjSpshnab8JVoWxqg1jjdK1wSuugVEGq5LwGgjmUB1yruKP1ZJ6LFVg98riiHpLzQ5FRuvwZkg",
  "key27": "NGDNacN8HK37VKTX3WkXHCTebsy5ugA6usPFg2MHGgdo3ncU35wYUAGW1gBHrGzFiBVWeYzRtcxTJYiCE5CQmyV",
  "key28": "4LBGt78Cdtp7bRtFuH41ayEq9EsT7nxrUmFNn5YQwBth18mWw5up5vSmWH3qTsykPdMrhbSG2Exmc45zxTtLyPuh",
  "key29": "4RDRVME5uxL1HnoHQZMoM389EXH2MM8SYfqCW153SCTPwws1H83VMoaa5XDqPNzZm7b9DmshhL82fscQJtqVy2ZT",
  "key30": "FBuSzyho3HVpxGRJT7bp1JQguddcCFvv8bXzJJuiNdwpVGnSGtdVgD6QdqKtn8jJpLBhBWVRkxKMok5haF9AMs5",
  "key31": "4c7kM3o9WRAo8ZNxBBHkVR8hB7bzbEqWGetNMYcAb46ToHDQ1aRE9JZaqbajUwsv8xqY3te1srDdbZWo1ZtPWHYj",
  "key32": "2NTXDwwmQyFANjZ3CcSok56uSDDStuqRSNerpehM2Twx6wSQyvkngBeyVScazcyx5zNdLGCzD8Dt4w2pstxRd4bM",
  "key33": "43QLXRz5WS8wEAte8GYhjxWtyeZCQFLsvrhE4iQNhQf2tvEWzFRSaNtUNkHNuMQgr1FeWpUQyoDamsADszYQWKkQ",
  "key34": "2M69jYXuMtDFjckumTuQYfT4j1VH2kZqAW5F1BvNdjqrfxK2XUvgpaH8YXDBZ8hRUFarKpTrT8RrYQnBYK6tmsu6",
  "key35": "54257eqGNjZWtxdYyaU7Ptyra3hChYLZGEky8WVqMwevoqTzWLCTJVQ8mNSrcadPAA4WoQT8QojveeWComUUhM5P"
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
