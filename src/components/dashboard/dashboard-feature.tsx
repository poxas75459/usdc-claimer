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
    "5SJnaYra44yzDF9wEiUfLVk2a5eintk46RAwAJnR4Q2wVyWT2Za9QjUgHBvvmWhZNSWHaX3TKdNYqU2LV734Zevq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2tPDxqcUJAUVEn8YAK5FfWn54NPEnEMtMuZL3p6Ws3g1SKu5rtXBYTwNTkPAoo8qNo6NoXSAAntXaw6idrVcd4",
  "key1": "4chF4QRho29y5yGWjvUkNcoCpcVB17KA1XUa3NXL6ep7XtmASUKeaQWy8PrBHyB7Dy7hM37gDcfgnNbWHjmYGToA",
  "key2": "4f64r5YV3HpjeL4eMYi4nYBPRUDuCYmpKWkTArv6Xi99mSF3GonGV275Abo3rwqN3x6MCVbjvh5MvJibim3peDuv",
  "key3": "3FNpWCXD6zRocyscTBZ6Kv1B6iz3b4rhvaKXJ1QXVkzyoBNw37WnSKUXTzqHDqn2BXsnV89HfG5ZQp2sggsYVnz4",
  "key4": "2oC1hQS3VbqvaFM7CVy48AJUoFHDZPdGAACR8Y6fNVcYy3phGmuUxSdEMM3bVjz52GZ4zCkPtUsa2Nfc7zU819Ag",
  "key5": "5Nn1RojAHb5o8tkwSkJeEXrvNckC8femLmZcVZ1GjyU4qUQrvieCheEqwTBbkAqR6Z2kS8ot9CthBSCSpLPmtvnH",
  "key6": "2awPK2MaiU4QXbFkyBzcdGjGw863GypcbReyTxD9r9nJ8VhcinZTuQAQWKSq76u5nftPQ8VsAQG4dYyVMJ8t5A1d",
  "key7": "2dzu4xXE9zn5yWmsSbDjrbMsbTg8f22XFUz5hf1yMqtrs6RrGmJZybYe3EV2g2BCaQFFbdZF1kDwWc5guHq3DiQS",
  "key8": "4Cd71gNi3oSHJrTegE5GDyh9nxvEKMatUP4RQKWkp9mQ6PFwZiteGiaeFeoKCKF3Xp7TywnC6cYb2rkMJB7Fk368",
  "key9": "yYGtzFDqhBqfUZbnJRPyAu8qWG1mgi6vMLihhywyhWdoGtZ3XDhFddvxLr8Rn36KYkz7VTBc5MZBYUrQkaFtJgq",
  "key10": "dGL1Wspo95z1H37ypERWhhGw18ynetCEdrGjFgsehebhaNCeDo1NXWWtCUCouTiQVAd9J7vyxXifpFUDjra3Ddo",
  "key11": "3YJ8tY4UAKgu7CzfvJ2VFrZRecGrJo4eSkY6fHDELJDixina6Qh96tQtZ4PDCnPLFemxChK4FWAMk8q311uf4hj2",
  "key12": "5VLfeFYGkmA4aGvGMNsHCAJ3H99jpKW4VB7gb85pxB1K3zdQf9KME5vXzNV1CgcbGgScKxVgMs5WHtD3swAqgd8",
  "key13": "53NxDgDbwhSp7Hb6zXB7Kh7SBrJDetP9X3UUK2PYjnya9yRYUSSYeNdjSBKe4P9J79CQ6XjwrkGBYNJy14vUr3gg",
  "key14": "4mTvgeJrEWPQHARfjzDb39kjy9bytMG72pKw5FaALtCyxSL18ksjxn22kJrJWMh8JPg5U5K4vpnkDENEeFj2i5dC",
  "key15": "5NaV8vXB7o1XcqKt9h2VQGbAR5oQEgkmz8MPJDBMxzuUAiFEMNWKyVjbanNVxWfFpwWRweiNPG9AxCpeofH2fpcW",
  "key16": "2j6CaLH67AwMYJ2LNTnP2uAWw87iecE33eyFeebmcsjEfuEAryH6E4Q2gs37YevWqijU4GUHpi2goj6cRtAza9sK",
  "key17": "YvPmifKPiX46tu9tG2gMyQBiBsFGCa4HEzADCWtNV6FxfuB6z9aCrtFbrKwXmjiRNQinceTh8uvdLBp5fWJzeLm",
  "key18": "56SkjxECPAtJCtQRmD51SLHihFToNjWSiu5uvThoEJWeXAS3zYpzuZe5SE5vt186vpBKurLRhFRPSreVgxxAyomG",
  "key19": "2kGE3EZyX7hR1XRUCUz9cHp4k4PRCCUtWvyMexvX6fr4yKzCohXrrx35JyXF1z6iLZkeFveJNTa2c4mJncUx3Zd7",
  "key20": "64UmgdVSB7GWtwvS6nx7rwYojAcYFZ9WzWKdHAee79RmHjp28aFvEQ2gYUBu5mMfn29fGN2v3qH7mjP6rqbw4kbJ",
  "key21": "PWy4aArHK4RdA9otD5SpZyBC5cgk9BnKFroRh6kMBCVwb3FfQUhVr75mADxwvfmPp3VoWgj4jBb8rtxBcUq69bH",
  "key22": "5P97CcF6veRBPm1SKmZKNNMSBBYrmQh4rhiU4LPbkTMXjvybtWQLjuD6ZnTcjrXa5AhuKkCt4Y17Qh9oYM14jzR8",
  "key23": "4P9dCzYfMYcWgNcgaDsGhmBLULDL6rjtgM15nUU1EaVVYt3WWKvEw5rKvHPPgFB77VwkMcrdzEokSrQuUbNFX34Y",
  "key24": "L8XzSg8XseJVZ64NARs8Kuqng9cz75T7WHgRmnF4bFNQGJDGP9hGWumcaWNYscZ74edvDQpAMCS4wje1TUWzWhS"
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
