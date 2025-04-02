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
    "fNkk5s1z5CZJR9GES82z4vdaUhpzBuHpsNa3VQFtzsnChHkoNv6ac9EnjrcMVPjswJDVVv9mDVwEwSnHhZwmHMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scve9aav47vd2GKm3sKznojWFwkXG1ctePenVLgrTYd5abjWCrhjatSaCDw7YVNrPP1aFP84xVyMvzRsoNVZJQs",
  "key1": "25d1BPMHxV3LwQKDbjGT3Xf6d4wbdMGEBaktZQL5bPGvyRbMkY4NatNu7HkkYHjpvwdyr4zwLzWw7D1UQfD4sdxt",
  "key2": "3LY2UjPfcfkt4Yhcd31YVXN8XayfTzzmBXB385h9iGtyDgcJFuVcz2nZs5AJSvc35UaPiGWjndhGYAooRtMKhN6z",
  "key3": "52uTa4PUkKR7SoJP2Ecc1jQkCEPYSrDy33eos3HAWDq8yoMd1nDqPc6DUYiNs7vfB8LVwKX5Vd5A11S5qFxeu6YQ",
  "key4": "nms6rSADkWLXatUtvyT5gihKWLRMqamRyK7HyZiNt1wrE8HDG9rKnSMQ3uTMABBtYAAXjtivF9w6anhT9J6Ezme",
  "key5": "43nyMLX5Q4tRYbgV1PiPm9uCBo5Ahj1nFcGELLNkNYray6FUFsbw7b6TNggeJoXRFu72xbgbAF6TM3ibREzmu9Bk",
  "key6": "2pqwj8XkQNDsP1rCm9XiEx3VuUujXbKLaVfYxTBFTQukZJ6Lqw8GeWdNVr2nTaLZFFei9TWxgnpeGYD5vneheuQi",
  "key7": "3Ua7FjXF4A15i9gLmxUCAtVALDRXHWR23UtRgjYd1SMhKAN8hrJ6CU3mQzTQF9GtcYsKF6nJX5W89ZbzubCF9iup",
  "key8": "2p9ASk2bZeSo1ELUrmiiZHZayS54xEjC26V53oiMHaxo4BwkAChcnRLQBTTwnJRxfH5rEkK5J5Tn8b83wWKkxbDc",
  "key9": "2BycXmPa8NMBMdx5YMraSHA7hHgvJTeUsVJJdN3XWEs48Jn2NZFZKoNWBaWAQMaRzoZLebJviFNaj2S7wfHmwEeG",
  "key10": "3w85nfJvGmgtyReSnSsXNmExJDUYCRmBfwXAKWnB5suW7eQqCCVEcXeiAwXZBPJkoLS1kN1ELFoNmHNtWHs2T6Wq",
  "key11": "5wys6grG5McaRAG3JXT5R3sgEPVMZ1w4KvmepgUGtqdBQZcXiHUEiiX6cRiVDsMfvCZ2jCgLR5bHL7uS8n5XMmxx",
  "key12": "5n1jwLTPqJUx3VVmhYAAYDVuhSEntjA3oBRYzQGm381yg9QDaSQF1d3bJjQ6wJoZRbZ2ZEgQe9SJpBJGLEepHmdo",
  "key13": "5RrsS2xW8sPQu4yjHTftBMcVFXhsXfr6BXGXAmnMZ8woytv4ZmL6Fqp5LQS34JeenKD6sTfzG2QfYGJ5nYnYPkvj",
  "key14": "5xnGuXsc3dM5zauKbwZJATcJ9MTYbNe74CrPFXTm6SrGdrUafFCCa3SYEjgsjnQEGfrRCB6cQadsk7ZwWqozcbBz",
  "key15": "47b2gUpDqBzTc5Qdnes9tSJ3j65pAMC16vMdsxdKDxumXTruhsKFb5tnC2n9xFdY5uHc5fTeShouvsPegX5FFica",
  "key16": "3SuGNDP2PYDRwE6TWugNjmt29jjLZjqpuz6D4rtz1SzvuuQ4e5799HPD7xjTgm2vrF7n1pCre9dMsNraRLXsbMYg",
  "key17": "3JLHMJ4KEe1SJsVFK62ov8eevGQa5HiuT6rgGFYz8vyxYy4NbsuRpNAx2zWUf7FiuM4wFfDjm9T1dTMb7UboJnB1",
  "key18": "3DVLW8zQScKxMcwywVC6WkwBCnZd58gpsZmfDf4gV1zKkG7EVs7EE5dgwHzyi2TJUGAtXXRTFWioJt6ZsRALetbm",
  "key19": "2GJfweLLUDiFpeDjbuyJYtDqx5EsZqhJGdsWBayFsYgQUaD7uVUGq92PLtDUNpst7y87RuUTY8ZwLT45oYq4rb1C",
  "key20": "4LDERSZgf6Ms9EgJxVu9S4pQveJdN347LW8PzwYzaY7o3Xoor2NxfH97kUGfG6AC4M3j7FKQ27TqBmyNvY9CYYFb",
  "key21": "5kpVFi5BM18PmZJG3eUxDgwCyZPkUr4q2ajt43BNCxz1UGcmUE24Jqh1eeifgtsJv9CTdPNdCKGor7bgCMtsDGXF",
  "key22": "qEA2j9s4d6P3WfduumfbzUE8QC6pnRuT9Khu7AzFgWakFmWZXBU58p9qbwosFrxjGsnWyorSVpmeUx3HLvREYWw",
  "key23": "4q4GM1kp7DFoknYnrt26j2WLueEcUYDJsdG5czzF9HLgFWhZtMMvApK1TH4CK2D54dnuGuQifMqeCE47SwSGBtQR",
  "key24": "2JSuEvKr234PvM9UFxDMJUVYWLkgzY8AYSmBvNHLZMs7VjBqse48AfJLbd8z7hU3C37Le37FKhmfuhyvE2j5AtMG"
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
