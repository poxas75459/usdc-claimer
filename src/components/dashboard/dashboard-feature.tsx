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
    "3tMnpmaULfHpZRhkzZzcNDe4Ws1cB8wc25Vo89kr5sNuQLP7TZVjFVahUthyc5HFXTjbWj5Suk5M7AzVdvcrEHga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CdFJaddP9hPNttkdK5Bqv9ipukUGSQgDyF5qiDFd765BV694cH3WBsdthfPWKkHw4KQtBLu8wNnz8sjQoXHCVW",
  "key1": "3Kszk1xuc58yHmxoVtyZAtUc1KyxaiQrAgsj1hUtWNXGZxXCH95hkHGuJTBdZcGEGv4Wv24tpvNEzyocA8iqpdFg",
  "key2": "498EpaYzioxynF77ryt5MoN3DiRWJWuDPALScqW1mzimwgUbC2S1zyEFCTGhxiPjmJj34dU4W9i9ds9ofLme17UH",
  "key3": "2SAmA9camCKECD4zxYqas7paY7hqdw4d7HH8e2w6oAgRyZTSCPFWPgGNeUjnCLt1PNZwE7ib335FkbYkEhFGpUXj",
  "key4": "5b75ooGbJVCW23FfRCwgvh4HteZRxrjhHX7AXrSRM9trPHHUpEkxac6y64GC5AQJRW94uzzW5PuqP65RaSV2AGh8",
  "key5": "5tMQWHD4NHCnYvBmCjceMu4iCzWrLiPECd47GU562pajr5vANbJM2noL7jhKUNsuNjg2SCw6E1JqsCqgoUpYQKnN",
  "key6": "3VTx9PQYr4bPdg8t233YVRDnfQZ1Cc2gz7ivVaVRFae4C2ycuUxoAuA95KoGc9hudVQ4Rsqi759zbsWGaff3fQpK",
  "key7": "3ZwbbMmQMcP8WmKxmFhCw29GvuCx4DcEr6zTbtXDapNqafREcVuZTFK4wo2LiQPxpG7oyXhSt1tjowubd9wA4boi",
  "key8": "26MZKRpEC5jBpfnA6N4dy8vM1LRx7JXJhBGJHp5XCj7Kb6EdN6Q6VqkCbjvhtuFEAEtfgW3D6Gw8ugCEh9Pgaj99",
  "key9": "3XtgFZRzZEcGHkZv7HTb6BVzPJmnKLSdcbPWBG7o5g7UeFTnDP85q1ZfceGEHJsnMFs7P6ehGwVvQxQ2xyvpkKg7",
  "key10": "4Q5UYCUEhYPveqRFwrcJ4NrtWmCLsdHQhpQJ8XfetoCDCPNuSTHRWtXWS3BcxmF3CXjdN8xXjAMsRHXz9oRU7yQX",
  "key11": "3sxiTVfHJpCd7A7piEJe8WKaMQSdmLHPiV2CGzw44MDmsE2JmxJttacdBKuHxxPD4yyvRzZsbyyAXCk3DiBhWqU",
  "key12": "3Mvu2WzAhAagwQEaWzEyhEWLiGu6PYWn2xbZNxhTXutgsLFy3n8zvckJRZNdxmwkpSWJxfkCXz2LRCcASKhCgUNB",
  "key13": "4ZoAQ2mvQhNEeSGwoJz9tJ1DxL5u4EEBvbfScCPSNiDvfke4TFqQ95VxC4VhaGwpk2ZZibiyJpT1BzwFRQotukQT",
  "key14": "4Xq9rdNcrWwqVVmRuuWStXr3rWS8YbCpJfQAGpTEZdnE2RMcJ78qRdDwrGdWH9NAioHAm23XqvjWNCEERjrTmocY",
  "key15": "2GLFjdRw6ZqpPvb1SgnCq7FhH9MyKb6sem1dTnwxXSmZHezxGinfHvbcYLriEN1FERxioho9JwCkLWgA88MekjPk",
  "key16": "2tyd8zQVaHc63dw64P2Phc2DQSPrc1e6nBzBbnKuoGQfx5EcPCN3rosZzBCif7d9LyPiQxDyd6TJGNKQ9Xu19ahk",
  "key17": "LP6QLFXJe6aRG1NKT9jdu5pM7dUaQ84iyRHrjRU2zvghS9jHgXexdjZwn9ZHAmqooB74Pe2mo1Z3gpDAe8KPSYh",
  "key18": "4TTBvGDSb9mHUo242HaPiReFGFaLRFrBjse2kPSCzHGtpm184L3e182ReqC7vv3XiaY9GJS12NzCchZYFE4zxuPt",
  "key19": "2KhgXPi9VqLanPtTPM3YjGSwyxmsXnDcmw2vUnGApgmvVuVXEf61GPHwtWkd7PB3Ngg46wN9uPRFEMDL4hXpS3q",
  "key20": "3KQ75TDvyXXMxDd7TVF2QccYttZQNvZEAH1mHAgw9afzyRUEy7x2q5hndajqE2wox2sDptEaSYdDp8u5SZfYXDNx",
  "key21": "ZJdCoNWLDiUa3fza88K6bcAX98XvFMGWePvkJd19pzLLguE156T5UCrHzrK4nmM6GkURroUXbNYFobh3LDTbTPa",
  "key22": "52iGroY5tkxi8mj1jXBobPn6gXCVGs9Fvr6Qa4wVYoh8JhtrRDo3aRDsKgzbemMc9DGptaoD93gm5Kg5q59DjVuK",
  "key23": "3h9a5BqvWXVQwUaiXYaCfS2BLm8m3k2yD2wZJhJsqwghcZ2FNwpwrPEV6pBMwtgfQyt6kVEDEcNx8KRn5hk3fuBk",
  "key24": "5xnHZxWwAgGEzbQg7pQrh7nLk7nD3RRj2B69eVQYNR9Bk9tbNXCNewNbHTZUW2xja776A4bj4Q3qbdGTP27CSFcR"
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
