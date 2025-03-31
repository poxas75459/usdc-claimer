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
    "22Y5TPBGU5RKEpPgPDepLgetg8hZF7NWwFzPF1kY12AvGyf6DmVXrho71NE3arfF9bK5caVXrMjjnbdQ8EESyk6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVuMQ7vmgvSaraYjMgQjSVXjEZXnAAqSBEpcn4hd7aYEo6UhxqVNPpZHxaPRRaAZK2o43uQzh6P5XEYsfEUKtzZ",
  "key1": "uRZqiskUBxHceq7pJqHvHWQM91hQEp7XCRgbzKXXuzmA3fyryv7Vfsvqe3tMkYjw2SWxwe4dNjSwQHKNgUEn9op",
  "key2": "4EBXyHum2pwit7UuzsFcSWJMqL8ueci3SMEGCGoPD7sKM485RbKzQ9U9kUK4fHpf4eyJLmLvfQ6Ryuqn1GXe2CgY",
  "key3": "5xCCuFu58ZBzQ8tEiSHsDZ7Sc1zBsfZDeRwgyGHnGGM9BnSiRt33DNk66tsz1dP9WAsJ89GB4mTEgx55jnUncEm1",
  "key4": "93GjzNY87itkaGgM3Y4UgGAeBtbXhiL5rUrRc1fZFuoxoBLHiz7578XdrnJFjk5EfdajRYcZNL4NVqg89ZNBiNS",
  "key5": "X8orCHFmdrsJ1GbT1iMjNJQEcS71oqxjYmcFeohXJtLygyRcER1nzmHPiqT94vnDC9PybWLy8YzMpEiKifGNSNQ",
  "key6": "4aW2bwhZBDUFvTHambv1k4bAuNGJdu21CFNMYJXY4x1kgWNzzuUggfUpntjA7s29t5DN7PBu7NEB7Hbz4VqngrEb",
  "key7": "5zApXTkjmiELb1HaNizoFHGfXph62J3BVe3Cn1ZASnao2Ut3C54W7kJv5wPyvAWE9n6TNaEqnY3NTRzcPartGpw8",
  "key8": "5V7VKZePVFM4nqpQs9qRqJGkgiRVCMXyfY6YuUFuCtUpWRMrtqgwvD4SBufGrGhNYt6hCDy4bKvBrBpmcePLRMsN",
  "key9": "2GzmSN23wuVNGUJqDMpxzoyChbrUeXw7A4A9yukcrAKaanjJ2CR6Ss98y9FrmvTbXco7u5VRHNvxiJxfo4KqkRdR",
  "key10": "KnbT21xabRp5eVCF2UQiuJ2BFdkvm1f2ci4uAqNmc2iCktuLEDxAMHRguZyPgbaF7N23mJvz9A3vBoKPurJ1L2t",
  "key11": "2BLAtvkp5TjTmsht8QR8He2kDTMMa6YtAokAW5DU2A1SKoQ18UaXpQ2XnQTGQD1HyxBKAcvXff37mgKP6YxCkgVR",
  "key12": "EtZvuMGirgE1SjR4y2YSJ1zuDxfi7sZawZqLtwgFLGM7s8KYCgQT6KLum2DiqH8jEQtnemxQhKf9PHNWPgvkoym",
  "key13": "5ZdsVDmMUjBRiSB4gqxNNj5M5if2VJ18svUHvvwWruMumt85otLWA2hRkVj3zG1wbEX29tiAPg7UmeiZsV3eTiWZ",
  "key14": "27Koz24W28PFjMaqiSwvFFgcgdo7Mx8oVuBpEF1GFfCJYo78KHPCjFrUWJgxYmCEDZcaQt1J2fRDLrpNsRKQFL3f",
  "key15": "2fE8jZqBBLHHbU1eXuJXpeczppfvPJWjJEo7Hh4V3LyjD6Z3vJRTz7DoQjwP9we9wiHpBGAjBA6T3zyF7MB4DmiA",
  "key16": "4R4vsLHLpfiArbexVjQxGJ5SURWpd7UJ7eSDNBQ1VUA5iJMtTW4F3U25cs8xKRcSnsFwGbAtHhkRdn8sqov6zM7Z",
  "key17": "2XRzLpp6BHpWT9N3iYb63upFmUcKqRwTeh1sYbRbbh4dHNUmvQKACqK6VZhKHyJSYxJaCBZTmB7LNC7SqoZ93gDR",
  "key18": "vjaMb71qwtp41uiNbB65p9498DLwi5uYXb7VrV3jaBBTVBiFsiTQXw92KYfBRVK11bnFfGyBBzq6QeeaQQU6dEk",
  "key19": "2kECmeVPgkrpfqxTaf6UNEeqJES9VLbEkZgTVpNFkQtPat69tKAYXFuhL9JpL8nEu7xdEfX71mPMsjVUggYNVrVj",
  "key20": "3cERAzMQjQtPr3auMaKgM4Vts3WQWsfL15Z3L4S41QbTh3zDVdBg4NgLxhMU2c4SkjDPVRJRLqrRcS88iz688rJ3",
  "key21": "2fpLvrW9vWBf7sxDhBp9Xr7QFeQUEWMqGqXxsgkYgKJXqYGvHdjKJKXgfq8tttpyyt3B8oNkUzdRXHxsJV9HK1KS",
  "key22": "64RFj3epmjbhAgh7wH5HBuMFhY2K29BeWCmT186HgBoE34JgAvCRFAEv4iD29YMawnoa1oFNVtccgmqveDUpdvmk",
  "key23": "3tfcrM7giFSv5ZV82yqnGTXZfddEHWjhP6mSAm7i2YtcWGyc8o4z9E4K3Vj15u1DkPFSzWAu14WXej217usggytG",
  "key24": "35NuwKwEuABNSFnph4qhFJr5g9f2GG8AWR183ueJi2ur7a63RfXrx4KJL3YHrtkp2YzH3EaP7KadwJkf8kWkR98J",
  "key25": "5yAFTZirHUs9vL78Yiuo21LtJxzBbtdnXMJzx22bRf8nCTBwHYTqEuhbPUbAyzUjZPNkq8RPRgj1Vrj1Wp8KYGNZ"
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
