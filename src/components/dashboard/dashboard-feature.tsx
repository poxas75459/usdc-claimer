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
    "YL8vV46sU8oHcDfiJNZcVpX9KzzeyNT7xvf8vLTdTQejEqigeEen6MaNjaVVLLdHLsBDTsaakBZfUa5Jjt2QzpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2RftZT9FwmATkuKtxFCz5uZATSkRDSN5V3VTJtXTcAzui6gC79W8wNWmmDA5dw7p4Le7hxLUp1QfMzzZuAsX2Y",
  "key1": "4fipRVrm8Hj3J9TrjXiuobp5ZUmpg2uaD3Y2b77zz71dABw1h2N3QdbKDzfmhuabsdMmoLnDJGa9LEdgWsRKuwtH",
  "key2": "kPmvY4Hen3Eza5hzAdFDsj4Z26uM2p1bqiq8ri7X75zhq9qyfUhFTW1ADGe8qbrH6WA3ihtagVr7Lc1bT1MjzZe",
  "key3": "2cY7Wy44mChGVPuT4juMNEC2ChJRrW3MJdouafLdgxLHkCUhsQCxMrVWCtAwry5bBm4DX1QonHyXJmpexfRaa7Zf",
  "key4": "caB8X8mfMhTQ74S7P6gWMe56VxYE3WbCCpRvx7zQZ6C2XLYZFZahSB5qEmkx9C4E92Zt2K32QbPimMHr9nN5a8m",
  "key5": "3NP1Vn6BJequPuTzrZy2KgdhUF1mdYnjsrrCHqkeKrEwh4FdAexbMxVXY8EXwzMMKiprVJDUoyBxG42ruzMNLt4T",
  "key6": "3PMQf62SR5Fi1sxnk2WBWG1WMZExvKmsSKipCtXajNAgiZitwxTgKWTFaGobt4ZYNuxqXVgQhSjoDXW9P5K2LqqJ",
  "key7": "4mKkoDLK8faZukomaWB51RhSBMZ4gfefnXBASEXokKSzRPuUkjkwZEVvqoVbfvtX2m4VZGgF6yTEUDtigEYVNTgE",
  "key8": "2YaWCP4SfD9aV1M3qqV6pijx8JZuSZfpptG7EFqYzhYEhsmoaJuLEZuozM9dDVHqV6oKBntcwcvRFjfXU3KUxHTJ",
  "key9": "mPksa8uTxWziVcN1RQ6V1QXCPo1kcU7HVHzMh1eCB4ZsC2KNV6iwKgdxbasuxvEtgWzDQkVrM8z3CD5Db5HeLiV",
  "key10": "48s7L58ikUmGJPALFnTQ9DPz99gDc8y5JtBfHj8KHvsC1sAym4JJReup4PfVdkrEVxp2YpLfaWbVoeczPSbk94HP",
  "key11": "3nEz3imP4uwjfJADn22YDSNh4fiUBpYCRMXjZMmk5CBfqbWPDRC9oD7Djs5GJD7caBMmBfdvyrGDy7k5741ygo7p",
  "key12": "5vMAgaxYscUVXFRNjKpPiMUh9BE7ybkvgKVdSRD4iGHeLyyiM6TqTrd1cJWPmrNa2ZgmWDfKdLbantB1nuMrUirj",
  "key13": "5fWv8KFrfnbvZAjfzVyvebaEeEDdVfN8KQ2KMbm24fSyMiojMrRTy4zx3LeTS8GH1hMsnZZvS52aHjAC1Prp2zpo",
  "key14": "4a34skCCwzQn8P6VEkP8x2P1ZrMe8yDQpTXRcQagn2g7yGWJ8sq4dk36XjGNDhLnQxWx2d77ViVCJHVNv1811V7o",
  "key15": "45rPDLawUjW6JNC2kvRqUqvJnwpUfjpTVc8vZ8JTkPSCQjqaPSVTsoYmW194xi7VA3JVRpXrQRRazqwHrz1GXjML",
  "key16": "2CcZq7MocpikaND4zmKSvS6Z5XR7hRNnES7iqtAxXK3vDC1ckCD9A1TL6YuFdR2wTKLVeZU1QZLJttma469Rrtfd",
  "key17": "5MwVv6YyrfaW8DkXDdYq7EBvcTp8vWHZr1BUJkT6XxKyxVR85X1VNzSNcWztDHAUApsdzxt7JyDsfutx5MJW5f2Q",
  "key18": "63XrQpP5BPHn1UR92LwaD299jQwfmcVWASwNvNEnr23sr1xMYC4fHHRm5paZva18K8Xp7xWs2DqdoyrZiUE1QXPB",
  "key19": "3qwipFwyoK4QehDJe641tnUbBqhS7bcVPG1tF5h2xY1NcAi5T2GXjUtEGkd1MMSCPe9rpo8icYUYGs9HnnU7MrHY",
  "key20": "4x1QjhvinWhF55yQhxSBtAg46EpowDgrCM8CJEP3vfR4LMo3JVVjK7z1Wj9ZB432vRTWS3t2yQuLLMmoMX91HK31",
  "key21": "4SZEop21CyWbULtxgvkHsFuxYQKDAm1HNnYtYJQq2fLt2ff18PKbdTEs87bitAVhATd32xpUX7SnACujDv5uLjmy",
  "key22": "hxu9NoVHQercKB1VdWohWf2qdLs4NUK9Ug8CPJgNPHZfDnbWJR6tx2Py9Km29jeoP7FjrgEmK5wn62VeSuRCZCX",
  "key23": "3GgNd6s5LX3YN7Z73UWaD5QcSTb5H9DCdSd3tPGwD8S1BcAxM5nKVWxH6DWeR2FYtfGJm1yrMNutUqgRfHbTdgmG",
  "key24": "5UX9oxeL4ZsP2UGJiX1GaU5Sc419XmwNPmn5MJYMJQXrk8tNaSJiLACBZLHo71CD7TvG8ED5KTm1F7EhXra4R993",
  "key25": "pQcymSNsf9FYhyGVCGXj2zx9ziUCELPmvbnn7qVg5cLSmGrrtbw9mmNxRMBXZq8ctSdzgtKnRdjFBTGKGGL8YxB"
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
