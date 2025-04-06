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
    "3hZdF6ruHX2K2qizWxCCm63TH18yB6crDDFSFWmKDDxh5w16W73MudiZH1gPcNCDcEhbzn6HtrnycXAWWQQhF8tX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKWpbRrs4d1r7FK32ZpCNSm2g1Tao2VTRUVFq7hbhJGDRwzSEbbBky6jdygUz67nEPB4ay85t5j1Mh44ZCsKafk",
  "key1": "3aE7Yzd3Ew7ETRxN4RAzghuKMyd5wMLaDQPGc4Vmcp5LHVuc55WXHQFRtcpcMnwrGvh1V4cPwprsxc26i5cNHeHP",
  "key2": "4ir4v94zUaGP82ad7oj7cLPvwrnTa93DCHB7ikdGw9NLgWFbpc5cCVQR3oPbkoNXT5a9Yfqs772UG6wbcWfyPd3P",
  "key3": "2QrMHbWj7zHkufUxErZ4dJ2BEA4oH8hPE2r3MQkKeKHADcMiC3pw4Rn1hmXygB9kJz3RxHwdPciMkte3kq6HJT1D",
  "key4": "Lt8iqoCZZuyAnTUYp7Tv6aTyNz6TqW5TumkaG8feHUZ6KxgvF8rzyGdhvTPm2PMHumN971LRke5UXka6zayerxz",
  "key5": "vjQ4HsjJB7Kej3TzKXCk52XXsGrtNyXNX6kQPWmcXiwH3FeerdyKL9JVjQn44cc3Kt1uhfGJtFwvx1hGcvqUPgr",
  "key6": "21fDwhy5uefFUp1tor5Niq7PLNsDqHbNjJ5dEKbnnuLvxpRNKADx6gJ46RUoZPRvP2U3Ae1Tha8BLqXyqfbZacqP",
  "key7": "66RepnfEyDz4CXfCiiA3Dgt4isjorG1CRzqoaBo7FESirNJ54fbQGihQLmUA9CX5Dzfuy8QXFkUn6YTNbrvqXAgX",
  "key8": "3Q6qxNeixey9EbpqnZivHMpM2MD2xAeSTs43AWXmYc3QsDRhjM5f6uo3UjJjsLZqGAWFNPNwGgW99X56MiNTCe49",
  "key9": "U4z3aw8VTEs7mLfHNAA6JEvnfT3nPXhPX4K1ZwDXX9F3YTmk4NmRBfw4tsjvgDSv1txLw6DiTSks7Z3MQaw43pK",
  "key10": "5DVAfGMN3AJa4Nc9twVKTdsqm7vyrUnGDDpDxQPCDSW9ygvhSkSmWEA9LTvf9CEeBRgaCn24WUNoam7qqvXYMDS1",
  "key11": "tX4HX3Koh67uyqgD4GNer6HnDaqfqvPm6vvk7AB29wqrQM629qEAEeS2sVQhLYhQ3W2knBpSMqxEsqyyxL1aipp",
  "key12": "3ubkgn8cCyE8hxzSnbh9juf7QmBZtypV61Sy7c1wDCLKAp63jXkd1W3fwMALTKsSct6gdRkSoBRHwk5BSSwaV1Gd",
  "key13": "3kv9GDgYkRcct3JBw3Wb4cWYpZYdgXan2arVFGRWvmcFK5BeBzXTPVYrXY3ce5xzVZcFwXUJZcXDKU2fYN51eH9E",
  "key14": "2SaL3zRWmU9Ni3Ma9wTjzH767E8wZDsm7JKruHQySAFennyBDbU7PGHPa3ycPx96gW95qMvSk4QUNgjNnbq9mq9j",
  "key15": "5BcngAj9LRm5yg8H3a8KZiMHBkcNCdzyERkq7RYzL5LAZeJHbKrZNtpbmrVjzomVZrZQ8RDe7mchhujwuAZEjPWn",
  "key16": "4cmwXFetnBePUeLjWpLiXAVFqprATGMCF4HCBRaWoHDXEzCByZLRbSYJnHjHFmsy6mcVnEjTiva8TvcEiG8kTit2",
  "key17": "4nbbMyqFEJA9TJ7GkycGZ8vSyZ71fF6x8NA5FUPheq8CSoHjG3ipLtbaFsnAWztvBgfviAF2eW6oaFA28gKNg46Q",
  "key18": "48yXU5YCMwfhVSaTWvxMn9YgMxHT1E2oqj94rKw8QF4ewisRfKpxZ47wJ4a78JPRkZEamdUjQfRZkUBFFugBXmYY",
  "key19": "57Uy1gYZ92AqjyujYCAY4nTiFuAkHcH125BRZFvwa2ZXmG1et7LMF9qNmoDfDPx74X9wrUKBod2ne6w3azX6uHCx",
  "key20": "54QtL8VwyEHbHWEhQcV7HZRC9L6BxemkkajR8BVxzxsShkkBxxQVp5MmJfHcDzVENs9Ud2fjUXbTiTX3Vmh2W5Ez",
  "key21": "1wYHSGnHvNdVRGi1nbv3mABLGZdis5DJEE1iCJSAUhLmecRMiKD5LbgCVhxvt7LwcnbS3wofwdL5qwJbE9q6VRz",
  "key22": "4gTbzkgSq7WW9BD9zEA3WndKz1fjiKF4PtAdH8LZoj9tY2fbQQ8596QWnjccBUdq1y6S6iA9ApMk17orG8XypJbD",
  "key23": "5xSMsxwZ9ZHWAVgQspxyaiPDTxYTv86upBA3RE5szoTs2j4N2bNJKXpjwxXQr77Yxp7JeFRPiF2C5RPxR8CCVDG2",
  "key24": "2PZCphR3Y2T9E8hFTCUvXw33WcCpZcsP8VbvU7rnEcRJGDQyC2sexvvasjrtSNaPakm6WgtB5soXnfSuPVMybigH",
  "key25": "9bygTHkW1UG9e82KUfbAQ7px9Jqu3TQpoaoPBBA7JopZUidrPiCi1A846AAVTFXw8iHg2seWDaHx4Kr3gAb5gFy",
  "key26": "59VhhisoEiHjNaoN21CSWk331DQLzfDkkovA8Bhj6KeQWBssg7VsqTKQkir1V7Qhyr4Kr2L1eosSNNuDajtDsvVW",
  "key27": "61iCWqHNqg1nSxG1Kd2WGohtMJgmF5wp4fWjCK3oKSjwgMWdxy2TFm7MuGgpEqgvtci4q8EMU6LaLwGEwZjyiXAH",
  "key28": "VHcNk9h7z3v8dZuxJL18fpxD4hnSZYaPqrSP8F6RumD1JRm9rRfhSWgBr2X1GiziVN53eADjARVLemBzVJTwspR",
  "key29": "5ar5JBvzcRUMom19P7xUNwsCFQF4TpgAHFZ4KVrmTxHs5X5M88dHsDAeLgfeo2QXpEuS1Q1khZfSBu5fC9s6GJVW"
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
