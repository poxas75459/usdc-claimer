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
    "2brStmst1zhn73GGycYTwgKKzBwiYKCHhdg7aRiZ3VZPGCAyDs3bbsCwUPFufhsTpGrQHUYxgvrVpdvYJcP17aU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adfpsUyLfkinpHYvXtYA7Wbuz37Dm67riE24xGCc5iCFw9QwNWpKjjpiDeHrDX7VPDciiS3xLZvcQwyPic41QBw",
  "key1": "4Wm3nwMXoyEw1tfpw8RyVKZqBT2F8APfzxuG1MG5uuMTo2TobpX9wiad1qrr7iHRKp3HqFb95Y2q9cGdkk3WKZn4",
  "key2": "2H5R47F8A9RAM1RRKrMGFXF4dfS2mRfExLG78B4RZzdD1ufFhT4VpvthFKxpa28HUpyT1iRMYTUDvh2eGG8maySB",
  "key3": "7fSnvrMoDFCEnDzc2BFgWeKxJHg6WmNGzLAcdzc3b5UHL5ayTgQfSYSaX1Z4iFb1oXf5owyV77cAXBVo5uR4rDS",
  "key4": "4pB2ndzd4PdG9eqawW6GrXbFLP9NDy9GKF3eKbz4XVHqRDTRFWA5AJm9VMxaEetqL7q63NaZowbU5ypzTE3XxUqW",
  "key5": "22dXcfgKHURKzmEdc7WTK1iW3xBd3Fox62Yr5oQifHcygXjEAhkcMCUW5uSsozKztSsPNFQDeQfg8u9XJFo6AhjS",
  "key6": "33ZTYqmYotmvXa2YhSyeESZ5xqz6aJPTtUdBNynXBy7bPRQVEdhHTBdou3sNrB9bCooBM4MuVMeKFzyWjjJ9ehqv",
  "key7": "5x2wZXkaXxDuwTSJuoX4agoD8yhc7ebDTDnUjJtwcMDMDxC1jnBMtqiLTqrUCtPFUFJ6EG2ZZWsrNf1o76AUeGWb",
  "key8": "2kzQvRezB7SupnXUts76Mu1PzRTZ8YwnbwJXaR6bKfC2o1fBxLHiVcvLB5bPhmCpvT1pbRDfEGzDK2h1UZ4Mx9Jn",
  "key9": "3LL2HrGyXwKx1QjmZD89LnaC9nX6wJqjccoMJ2qQ2KLdgpyhiJ46kyz1h8MfkBDUUnwS6FWbpx9pXTG2Zum59mvd",
  "key10": "2gXsrXGGhV5nAQka39VandZs4z23NtETyNpgEqmCPnqGektcWhuqkMuP168HBEfXxvZvjusJ3DSGvGMcc8v7tLeh",
  "key11": "2n5gPRvQEmmANoTiBbfeqmYNzbSjW5mNnZihEpuTnyKD6EbdXJCy2MZgJNvs1SvBYnu5pHaF1cdy2MQWcee8F7w",
  "key12": "6472EMMnrR6SLukke7uUpg9rEsHtStPFKyhxHmxeEZfZQjMo5nUkWGxLcEPr9SxA5RS7GjPS1xgQ85wzmEFCdHGV",
  "key13": "UmZL2JPsq5iKatmJJPLL7nYevSLLJW7K8ute5k25fK4aPZXzbwThQcmfCfdbDWKq5HaPYnWkaucJLEH4Nso66iT",
  "key14": "4dPfsLuSd79UhFibTwMuKCqR9sriJcfgoToHu4Phd7F7vWSPx2HNpYxhNGj32kzVLeJ3EA2d1CSpPCPFBX2voUfU",
  "key15": "5sgFB9BQxbkcfJujVenxix9Ure99rP7no24gmrGp3pdDJXmt5h1k9BggVcg8fpFyyjsEUn4dtm1U4M64CpxYN6VP",
  "key16": "2evPRH1xbuahNP57UbjM28kv14Qzwi3Gm3h6w3y9oMQtoDMexq5UAcbi7h9ERGG9FqrzzJ2RFVLEgUqKgC9DmfUU",
  "key17": "qjcNWeSBdbr67z2ynzg2nGZSahRQfmwkptR8jeahWqHETiisq6aGZZ6CjRycvPtbmqHCw1xiSDnmiFR3t7UuHbA",
  "key18": "2pCCfYZq6asLEpjvwhfRKAnJhGhh6KTKideApUeeXjfPDVihaXcT3mUmeNtJd8hZ58JHCRaJzySWVBsH3QBf1mkR",
  "key19": "56RNXRCPEgNcf3P2MMbBKhKB71FJZrTj4H15DURe9rh2ST3D71SvmyDrirMgkd32qapN71Z9yeMfUHxzYKeBLT8j",
  "key20": "5Lb9R97ii4cFRv8r9SWN8RGjcQZGJ9tSkmMsypCN99djsXoAGMJ9boJx12F1FbAB2d2G2HvQ7KiQ1ZTLsibXtYGo",
  "key21": "3TYRr2zw9M54uu4aHpyDqMU5o71SspHd1ZR6nVEEGt34kHrN3h3S93bJCwM9uYE7J3xygTYYE81jbgnjqhwgUJou",
  "key22": "4ei82ddurPrG2ApVRmQNXrYMUXgVvN7AUK6Z5u2DjydDz5c5c8rBbotLEcDS9wC52CmUt1CT2EPPtBqXvPQAQ2s8",
  "key23": "5mM1DF2VMWJzEJXxBwcikz4QitUVb4fDeX74KGMJwhm6RJ1VMw5yFx7TVnhHJJv4QSPmBHyhDrmMu23HSXEuASZQ",
  "key24": "2SUT72WivMVyzN8rPMJF2po9Th5vnf24Sqqu4Mm8xEJKFHCjLrnzUwHNFjFWWHj7ufhRWzF1iJ4r9ZpAjGhTYRto",
  "key25": "4L3gqNhPfPrah2pG8RWy5D3KNbUBPJqptoBCLFTDG1tWMs5pmVLhcS7xjDxWSwnCe6fEDsCmR5VtdioaoEqFqUqr",
  "key26": "2PCA1MU71aCWSF7JkWURtXSyXgiAjMVrTZEcnkqWtcPb3pPmcn73i2Cs8gEjsBYhizVqaFxi5ZwsKRQ5XXVmuHs2"
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
