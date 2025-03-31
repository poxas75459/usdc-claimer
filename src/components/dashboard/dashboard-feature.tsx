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
    "2xP69mNpLemFsdqR1YiQFtqcPwuZrt3JG9wdCgvk7cARxHNoDPMFxaMcQ7FXsuXDG74gZ6AkUT2h3TeCoSeFPLKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JjrRjZmxZXYRUEZHY9Kbqa6tsjP9XAQvsiz6d3BwoLhGAKJh4tgPZu7KGzRS5fxqNJbjC7eDJPANWnfmVPCCsk",
  "key1": "4e2x23TNkMeeEVrM5sJUijhDs9J4PV3CteytWBbvwfCiM86KAATtDkWvRTvEtwYWPhyYr3DRWwLheT5n92JqSs5d",
  "key2": "g9PnwdoKMKYAW51F1YucguMtnULrnbmaXSnWdPAiLmSgodzwjjNK9KSMxdGbmyYCsew8zA5ZCg3TC46dGFsB4ke",
  "key3": "4hewNVMbir7BbqeiEL7BZ8zpLQGBXrKvYtcXVFwfrvxUGzaKT8hZG25jzRGDdgufDdGEsdZtZV5zcetoEuQsABnT",
  "key4": "4GKY3NZc6RrzRYFUWrV35Dftd73V3AVdavoQQ8M4EqRkjy8hu7zyU6yAUxnraLNCiuNKcfz73MpmeRswESDWQ8YR",
  "key5": "4oPvskVzXHxdVRJEvtBznGymei1WtuTXsZRCbhe5V6whifogVwVupEhpK4f65EtfKcS9gKwR3bt9ndFuPjdeSagh",
  "key6": "2MYUU1BQkvXb7dWCnL6GswYSi7xhnnvBjmsGYzuHS7Z4aS9bRgZnpXNmjoUGfm6Xnue7uCDQkZdA3FRLsP1me8kf",
  "key7": "5HdYJCYbNw2dcmk9tRGqe6uzDNBEvXcWecdRK9wFf3X98haQhYbdksBERYP4MXTsu8YMDtgJyzAAUSejnzRN6Yu9",
  "key8": "21ATXFN1xV6MHXFuzHL5zsTaNnU6nDaWT9iBfFKSkkYWp26Cdvqyna4U8JR3zP8HHMtSnLEweeC4wmuWVBvM6vRW",
  "key9": "3Rdocg2pxnnZnhASLFG1c6Ha79USGh6WquVfYqfE5dFf4EKJt33afbpViYYwGudHrkMii4YZziT6jyjQtHjYJtY4",
  "key10": "3g653RMsyDpxvErcywBvkuDH4EULJfRCsaBnmCTELpCrwfL8gcxp6Xz6ch3WVSgVdowb1GTWX7MgnUnCvdU1ReKn",
  "key11": "W1sWHWvnmUPevYdnbTza6RHKQQPjRwxeq8aN9sx4EgkNxWUSUYh8QHS4kxbTCGX3yjjuYNoT4rqTLWHn4236fuL",
  "key12": "2RigjJCJ9YYaK7ri3NGuzUTLxkmu2x1koVUgdNW7xYWkwwUtxpXRnu4cJGyjkwcVzUGkSXD8uL3nYrkoZi6nNHM3",
  "key13": "2vDZDUAfgvxp2CrB4AxyGfCDg9FNLh9gDYSMWfUH4cH3GRFU1ehbfnCGyMJyR7hVmN3Dkb69RoaV5mrfAtoiVHch",
  "key14": "3hSQowwugBUSfmfSSVqmiCWN4ZiikwJDCdb9nS3crxzd8QRtqLPtQ8E1MP2Vheq9W7wwJ83hHfCeVzjYbMwj9mU4",
  "key15": "n8YYimXZ66ogcgGjEbFB8B6fZhhGJbwG2zNpkYNKVu39GC66fWdYTEghfRFxk8sStcn5pcKNQgsa5ApD5PbXAn2",
  "key16": "2hWwfKKpcB6tJtr2x9DQPR2HjQfXKkkBo9UMtkvXb1yiqnWDjzErkuakfH47mntM31KBh1ivsfTbpx1wks8mF3Rt",
  "key17": "4c3mi3T4TgR7xfVFudBhaZLAaU6PQxMAF221PJVUBCGMvyJZ29Fk8AQVX4UDWLdA6s988DksNpbFVumciUv2sMN",
  "key18": "5tue2AetsLQ2gQxpQNnc6K4mnMki8oKjqnzyfZUHt2TXxhqx1ouKNQpM59TciGZipQLZfUsufYfFqQRpwbQ39xZF",
  "key19": "66cfktEE4usSSTHPKuVUq65zQFhMN6xvtJgdsEPdxfVxsv9iHiuntLRg8AAGkTTab7koGwL7Nk44vLRUs9Lgorck",
  "key20": "4s14zF4tDmhSv35v8nL5d5xCKPTUxu88HNZPcrprKGDDVz12wWjLrYDXJs14BrAVkqvnwwtLCkWUBFyV9W3N2auE",
  "key21": "3zKEtZMD2b2QQbUiZzHVe1mBpLnEyJ1u19ER3vTNTQi2j9PMFsT49pF1bHzN4BkbookxhmJVvRP2ZPSWZxxjCREG",
  "key22": "4Y1JNbSk4RV6cwcnaF8fCPtHrDXRCSUAECEcfHjF5FZac4JE2GuTZX46r9dHhCrjRMnjhz6BgLfELvSERDuokWRF",
  "key23": "4UHjY77dg7ByS1aCk5TQzJpUBQoKamj7SrTiEfHzrcxaMjCLSRmAqaDwECHhocDVVWL4Xf4nmpF9pmBD2NoMr2s6",
  "key24": "UvJLSupG75x8fnbEDk9KbodckALChCBxTkc5ifoQZbztoGhxTLMrYSBiueFtmuw5UfUyh9zH2vNyaQi9t47nj6U",
  "key25": "2FiHtha57FBJpHTjSr2AGTuHYK5LqW7qCEBXvzWPWv7FWk5TD9VADfo2F1RTP6sWYcCh2xza54m1GVzZhu2k7Jbo"
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
