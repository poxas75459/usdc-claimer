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
    "CrozbiqheFdY8pa2drb1gdZWVdg3YLaYyCP83y9xNw3vvcaFk7JybBJn1ihjfA9j7qp5jkikRcWJfyHWM2LFtmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNHC8k9WzxQm9UYZg8L1N5P9iHm9ijQRLYyVT1JmTPJHnDcS8LDBHwreSDe8cCp29y1rA7Bv8x6NFdrk1y8NBx4",
  "key1": "AemJFnEKAU3uqmxCkpb9viFyjYedgx32U6qKCDrCQbLoFpS7vZDA8qVRg7Cqbyb3SkwFmXo4y8qXPkDBVSaoZtN",
  "key2": "y7QyzbW96MVwfCbSJVtnvW76JZbWzpyBt4jVPLVpcVAMtoBxkob13CecZh1GcWdRqPVZj9JzfUmYeZcPKn69bPN",
  "key3": "4hB1a12ST81MH9mYWT9wqmZdLuLUWENaiY6qMhMsotC5pwQrRnnJ8JJmUxrG7JP1839BPLpiqJaj9mao6ZZXqN5P",
  "key4": "LfQrdX9ivGDeo5tn7DTducXjGZiuGdu2xY4gUVrDwos3YumhLHS1BnnnA4kq59TzXxQNvZcAnCQ6LyHvHLyDWWg",
  "key5": "2q1a4c6YQmAWAx1xgehyyiJYiNuKJYopRz2B696LCMugdfwvR61FYgp7qPqZ2Y7tQoAzA3CxAvSSSLhxi83i6eMP",
  "key6": "5nf1WXcDdG92tvCkJ8rn7g3yi6toRU4nFB9aUhMgtejNRqAqvug5XTCGLWMpkgQ9wZbfyuF9gZegrgKaaQCuJHUq",
  "key7": "nG1R46t8Gp1NwEdHsLNAw92kdr1QD4gyEzADLKS7wWAQXqywgXXLtp5y7YsMowg4RK1iBTA6TyACRLdfmdVGtNT",
  "key8": "4bgr5ZyUf3LkZ3YGwJxF3gGqgj85797mNdKeEnr4EUaNFBCLrErTnhhaQwGQxDKGnR8BuUiG2YqedH3L5r9NakYF",
  "key9": "2sRb7qmb3pPzvwNVdWc7D625fnm1DHqBuQ6CX9QWr6rTh8wTYDmLx2UE7PEMf4vgjJGg9TKe9a7edtZsxY6q9G2m",
  "key10": "3Pz2V4au5z7ewGwJHHJydpJtKaotXqYs6B3ZESabua2ctCtdhDR3WZz49xKZzuYpZ3K8TL95reWjQtH5x6sozVWr",
  "key11": "5cYdVpm43Aus3JB2VS48MscsSELe1oZ1VdesmZTtsMKY6vQvbUYS4aFz9M7HUdarKszBpjSb5NYg27jjdjk9Fqo9",
  "key12": "4GMez4tj13ZCnwe26NAgHsuQBn9VmVRNBQUDvaRyLEckspYQLpm8QjiBburQkz1V3rfFB5g5rHE1hha8JCsuL9PX",
  "key13": "32x8mCMqpCxNEEVzzTP69ojM7mmwJfvFct7UjkcLb9i5qaGp5GbbXmmotZmeVugNXabqB529aSEbqFBZmhKXvbnw",
  "key14": "4PvtCJDNVUkPRFajkGpHtz1pp5P5ppV6acDpjRCUHAQSvHg5wCKUWY6bHrjZmieH91G679n4hXyAk7V1d5hjSk9A",
  "key15": "2CMrW9uw2cHdUVEjN7jY9hqgJmeZSUG1RXTif3GyD1TxnRgW4EVTQM8ajVCDUyEMwSDy2Zwa5RM2WkbUtP4dqtkJ",
  "key16": "2xh5biSfe5sDj6DNeiyjxZiLpd7PcyLXyfCK6S6RvN6ebqjHigbZ9NVQZqqVGVn1sRTE5BkxyU6p7LVnZ7gv9tmj",
  "key17": "2rc16E7ZCjMTjSAGw3MjDyd2874UngDEx4z4upU8V2C8fWFpS7xc8PWUUdGGGvPEEgoW2etCJNvHw5z2UVLpzfnz",
  "key18": "5if1rFSLECemUke38Yo7QrgX63MPre1poMV8q2LJgSNxxfi4zj9RSLbB6zCJodZ1Um9W5xcCnCjHkUULvojF1V9v",
  "key19": "2UaCzr3CJTozfRxVCtuU9mtjviqwoEPYNjBJgFTY31LAEUEjFT73f5tigvfEisGSFJuGXEy2eLaHMrHJzBwzkNB9",
  "key20": "3Y3z8MPjvrRiNPiGhEYeyai22cBR4jCn9LGifua7c1yYwiTAJZLkRTtvr5X2wBd8KPSDjpyxxf7Lcy1frdjNUiS8",
  "key21": "URi3ATPcMccWcyBbSiH1CMTwTU1CUovPbCCEv4Dbu932nVNWNNd49vHVHejBEUZHq3DSy8775FBZamV8y7VYVr1",
  "key22": "3RKvLgpRdhMoYS67uMwZ6pUSyKhNrGRXedTvPSd6DSSx4iSPXSaGNXwjFW9gkWaL8ajuhYZKki6L3yAcAswg2hr6",
  "key23": "5HkV6dVMpm3jutwxwrxuPaoqsEqzaCFp3ff6VweVmdz4qztf3oBKbN3iCLfC9B1AfsTNtnMiJSPnvaVgLSADSWyk",
  "key24": "uqhVrpSgE5mS7zQNUU8L3ccCWf2xQUTikkKXvsRkswTjJHnkXzzdYbvWYnVKgsNPkdMta5rrryu22Yab7gbg1By"
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
