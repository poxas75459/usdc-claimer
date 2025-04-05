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
    "2o1XKSN29EbZPWi5DGxTQCtRXqFhn53e7deYLwmH9rkxBXFbpZsMYmXPqzBu9T17enMh1acpb3UumUoz2XAmNkYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNP4KkXkoyyoyMgv4gxCqvWFXR65f2na54GHWwoPFJUH7ZBK5HNjhgng9pBg45bCUi89haPc5nuFVwMCg3G5tpF",
  "key1": "24FJwiyEMpyemTjmWCDm4Y2LEzs3R2Rz8V6tpb6F7EHhjQv75GcWkY1r7pWuzjpFC3T1mzTEQR39M9sQwegqry8G",
  "key2": "3mKgFSoehWjW9oFRPExmi7Z2Mg9jMogdkE4fm6x6LLjbSwD44WJawLZmMxMQ1Kh2vjNuweJveizjQM4eMKGh2xq2",
  "key3": "4tHwFZZYRwNZjqWnmpRHBMNF9JFv1aRq1DNGiBCd7mbexYf7Fy3yPPFmXSrF2YjdJkgugjDtiN33hgGR3fk1F9ty",
  "key4": "4PRyGDaHz2rpZt5y41Jysaz2GgEqGL14Rg8Z67miPJxBPDKjvWEfpq9TyquqyQA69t3DbnB1J1gGqUJ7oaNhzuGp",
  "key5": "32zsbDk2jyFejrFT1FLcGzE5tmFpsXrqTaS6RWMzg7uHrWmmD5MqvyuLwRkdkq3FaKHm6tSdkveQkycYjc9VQHVH",
  "key6": "4W6xf5qgbEtMJQppa6mDFyDLNhyhbZ7NDE7AhPRD2EkZYqjcAs8BmsHk3kiASkYFSDbhTweqkB6xKjwzR4vvPL2q",
  "key7": "4jCznN2GfyTq5VoZiKC8SALndK6y6trg3CJ3HrkbmBiQD1XxrNwH83fJH64koJmUGRALCS8y6Pz1wwVfQ9HycgGE",
  "key8": "2RCgxUr73tge7NmsR73hsWSK1DMYh9zDFvRy8kvMbdFQFaBDFwH6P5TDVi9QsVRV7aBZrCEjorE9H89zBhxiJRKk",
  "key9": "2Z4HaBjthutqTViZUdL5cKXbPSc4g9GCiyJ7kVx24sh9HQQfGrPAs6HvdgzPAA872SGeghYqsM3nA1tzPyuJ7WEa",
  "key10": "4eQtC8H8gfDkqqbJNxw9kiNw6443LkZQyCwuiAUceYzyDd8Afy9uEj3MFauVFDaE8jZYfSFuwvFAtAVbtauHUuSi",
  "key11": "vWxtLbTJoyzamnuwSct4vqVLq3UFaKs4uiqZujpocJLLxUd7V1vJ9sWCAA3NpttR9QmHYvZo2j1v4uujMRTtdMG",
  "key12": "2723TQ5K5PnpLchpPJYuLRtNXcnVzh5WRDK3AuGSnaygJMfezah2PcePMvjvKmpkWEVHAXymeZ5girgHqoqe3kfD",
  "key13": "ERQ1za6gVFQ9WQHQJGXbMoYRp1AT6Cn8YKka6eBZQ8Fhp5g9pcM7YKaGaHbykRFsLzSTiG5rYeDVHkqVSVJ8Svj",
  "key14": "3fU8Z53hgqH9ugDxL5FccxHCRsayJvF7bNeM8RbwAsd1NvDhMazFmqEzKyDzT3vg6FzVSHrXdzJcC4CMYvktPj6L",
  "key15": "BCMGJmhWmtcEcnHTG3VEVAoD81pX9mnjJHqfiyeWExXxS9RDKyVpvcW7vxFZXn6HoLxYsRmKCLjuJ4XtzMe94hZ",
  "key16": "4zwxSxLzQCS7ULPxV2W6kdcjXqexbJekVusrDgih5ZGw3B7WKWN23zLxDKyhUwjoJ63Twa8f4ViR8awu94cVRW1i",
  "key17": "3SpCiS8aCiufcbCScqFYpSqCyb58GNx6NZitVVrofZDAW5fPhhVbznSRamyRpxRWePYhU767jwpqQAQ2oQimmypu",
  "key18": "R9wD5q2NGmfXSFvNDXNgz5LA5zkN8JW7gLGwQy3JWMdccni3PKfzYQi1XzF3hcruA3fSwtGkmtiUdkxrKYVQUrT",
  "key19": "MbPp7uXWXJfd2jVjHEsho7GAHGmvz715Q51EAVW3G1baA8FMyc3CLaMHNeVRZA1ofPFmLWwNNLM8ryCCbu73eqz",
  "key20": "5Cw6Yg58g8Rq3q76TpyNWJD7GTTowaP3UUJbVFVf5r9sL6wF9hpGoMftNkFtp5zX82rLvYgHnutHqsxy3A2w9RQB",
  "key21": "5zjyaKiHre8JPd6RiFyUJXWpXtg2zoSVXR2bternFk6XfR3vFjQAKBwQfnqE7TUSxVcQ3dupwiACxLxTZvgw17qb",
  "key22": "5wVhy67cShrPGYc2JneV2Qhz2XMZbZQpGSrg7FShhYuW7AevGjdXT73j8HBF65twbvrYHu6coSqh3YKCN9XaM9V2",
  "key23": "4zmRAWxcQnS7zMRuw3Q4Kmfcf1wkHhw9KFCrm4Lf9VP3zNkm2yiV1hBAnYoSDiUFGsKbK1NfheuBtKsDB7ZDQeNW",
  "key24": "FstN4BcTP9njBpgYzgaxFUkMH7Xe5hKxncNHuS31RmgntkFuMFD14Az4r49dtSeZ2v8jZ99G5N9aSZbmhWDGakP",
  "key25": "4JXu2cpBoqtmNPhaiUpKkb7SUfW69B6h7txpphc4QmDkpXxoZK4f7wKJwJ9BZryU15znZuziWp1NNMj5o6psUjpJ",
  "key26": "2Ha7W2Y4zpQHZiZUBgRbby1PCMuwvmfbxQGmr4z5JebGYfAwdRcFFnpXqED42wDNxmgtQ3cgWuepn4gA8fuWNESt",
  "key27": "5dDNTG54xUDPWb4iGDHGERs75MtZcSg38f6tZ71UZzjbeuGPz8QVm1vQhutK1FKLXCKZ4c16fVmXB8siEcSbkq5C",
  "key28": "XpYahtbdQUNka5eVgMGtDZi1on3VbJRNvhrQKSYQxdBmwXtmqW1WKYfgTHPny2YAwmEMvJC6paiXi5yE8oTgx8y",
  "key29": "62dMHkSETg5KSA3RQxX7cT457fyj1qAHJhUh75VEhFvvvYZqpJPEhGxcewaJkX4v2ixJYVohQV5quRzDvseCWGB2"
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
