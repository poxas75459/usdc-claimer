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
    "275K3dtWJho9mgpTxj6pwmD1gAAK7gSYqV8jTu72qbuJ2NQGMN2mcnnvRGUmkx9P1HsPtFuWB5tcx5AQa2k2RZ3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46C7srzyYSVbbhLzk7PjMU7x55mA6mZxs2wL8SDoUDf1syGUXP14RQko7rfVUckyFLZPKPGKSjo6JpmBN2eNue7C",
  "key1": "98ykypxyRa3ahR3e5Gx9WMtKpcjdkidufufBsY9JcMoYodQz7xrsrWxWvXgT6dZwJqUF3eKahteEp2uqkA2qUD9",
  "key2": "5oEtyUzceQnTUW9ym9EjS2ZHbKMXNgU6JZvwXFoQGcVp4YG9HohTBYH94wgbn28eMSghGbLRJcNsxZbnuPzceMu7",
  "key3": "5d6Z6GD3zy9v6m5z8Gf3v4iXZF1ivHXHDxCbAAVzgvyJeetTMB3jMgitt7JW7dd1FTGjjbyyv2NYHr4Nc9JNZLYh",
  "key4": "3Je2tieN4fhvvPxUPyNnK1L4DgSSu4jXaoYEiEoTbAzXMmY5DeLuAYE3WFiWdVe98YrXyHXwd8FmGBq3vQetfJgW",
  "key5": "41mBMmp9b6rxdkSW8jaURyEYnzwbNkdxoVNtQwF3b42PYDSCpbnEFhD6bspwpDjhtSTcKcW3HFDbqguZFwWBzJpM",
  "key6": "3DAXFuD5w9129tMz315dBGhvxLFrvtP9DUWkj28ohYggNiTwXDDG2kMciTeVnkuqpWSXRWaeKpnLmeemLvU76Fsm",
  "key7": "AcN12pFZi2fzBYbzhYTffjVzj1htFrZCopA6xSBUJpVRZSLggJhj4ADAk4ZgqPHgzYf9gT1SbZ8WbLRqAJEkZg1",
  "key8": "4ewBHE3JVWdwmNcwpW5mHjx8P8rVrZwdi44Z9DJxGPjB3S9Rp5tBE55Q7PhNFLDqNKHrpPMGH2pCKd2K9cqdLmEQ",
  "key9": "38dzr5vCLsh9mThuD4p9zaysLHmFXLveDbwVZbojCDM6qKZFEM4hwbp4eWMdmCeQcjgrP2PuXLvQ91AVry2cGahX",
  "key10": "2sTgUdYXBhHTLG8S2vxxbNbLKpqcbCLhHuENjifnykVfYvzbT3Qd5WXDyzvWP8zXrd8HVXb3mvakqqKYPNmKj9J6",
  "key11": "yZYVFdJC3aXk4dafHDJnGUj2JCvqn5QSunbcUakChQmjCMaAhyxJRRqjgM3AH6gfdevpMskzxfETaauKwiX8qR1",
  "key12": "mhYKgWbLkjzwgL8z3FK8ZbCRaPKnjgaZQ9WgmnVVHsQmSenLEJPszjfTmdkrtjkxM5e4WEeVEpza8ksBjNhx9TB",
  "key13": "2VWDNbLuJf5CLepxF1PVyJKtxa5C7zD2oV75fsKkHRxHQdW5bcy2TEokhXrRtZ4NhFyZWafKRpqTMAVJyzC85oTP",
  "key14": "3fo8GT5MDyFimtvfh9zwu6tqP5WLzhV13v5o4BK4HHZ3tPtuUqVujRi1vyZ3EwG1ycLNmTLWBqUU3CujA4QWxADX",
  "key15": "2gcsajvto5v11PAZNM4p6r4jGf1poesNeF36Tv6p95Z6e5uaKu1pj6aTrRw6w2u7C1vAVuXEGqAQnHo6zzsogs8R",
  "key16": "2ehaGt9c8jFdHmkDciQ8XucWmsHhQVDXhYPXDVTXvrCYkctoHkHPZtyx9BTMamyUmopSEC4oC1J5QEiebWHi2Dk9",
  "key17": "2bHb3JCHinL3CXJb1Rr8QNbtKm385n58VG6LtULXUXC7QmN6wcy3seY3V8W7xsEw4taYKq6d7r5Xoyg3Bbv1S4x3",
  "key18": "3RX7RE9FjRBxKuQv5jBhXrH9Wir5DRCrrHEKgNe39hgSJnFo8S786y4JHNSV2WiW4GC1oU5Jz3U4jdT5iNj3CCvf",
  "key19": "39sMB357PVCa4aPpafGQGvWa6xx8ucjtiRscZzcLgw9qc3ygEPtKU6Eq8phYvAWLtqiyKMYeyngRLCpz5Kgc9pa5",
  "key20": "2tQ7vomanHZKKiSEDkZ4rSaDWbKwCFLfdcHxRMYFXZgEkS1e442D8v1B53Kvy8tpvnSqWL1XBXYwVUw1j8PmqunR",
  "key21": "2NkbyGMYga34cuLvJY2PTsxy1KUamqqY8GXXepiBv11inopeY8FmBC2W8AcNLfoqTJsKZYi3FRMttmrGmLcKBP4o",
  "key22": "Y5VPEStB7NirsTMhLKrjawzvxrCfJMDz6tERbwxWz5y7ztwSBQiEMtfZNjDFFUmAKtCQ1YzrgbnZXo5DDum2Lev",
  "key23": "3PwTDuCbuxfpoXpysWSLEy8pEaM2uqvsWcgweQ9ZUDeWQ7PuBdVj8zq87WPMaR6hQ8GNts6paT3GSfdu95ABoVdx",
  "key24": "5hHPEuhMkjUgqDGQwmRbao57mfArggDUaomfMt6232vqPLwbe17ZBSkvgefLW62fPovTTX6TAidgqdgJUXQzh8kU",
  "key25": "4s6cQB8pCshNrKeBoZSS3wFmhNDD8v3AcEXXNjoSAqiicRviKBbTn4LSXMp2CtvtpR3tGtNmjcq9H8uKyAsB7h2H"
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
