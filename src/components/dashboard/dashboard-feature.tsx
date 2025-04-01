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
    "2uegjZnWjLUEoHD4jJBh9UP6P4VKNNVzfDoxquXQctsTQ3XuwKARe7jCShf4m3HJkWg9dbWJXhh4uaEmG9VxBBEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NoJc4ehQa8gKvCNBwSt957bJuPDX6SNYWj1VrzmjgUf2Pv3Y1PwLQYtUbVQZ1uQNB48zi7rPdMVQChD3DucYSh",
  "key1": "3NTqtXqvSnTbtNHzPRp2bAmeVsFr4zcnRoC9oV1rfJJpiQ1wfXxYjJUf3dBjb1jAVrg2vmaQSShErzTb5S1ufed6",
  "key2": "pHHamv28sGSXMLT6GGi4DEBrj4oNYrbztwL9hVymgbtfi2vJ9oUUfAg2brRYXSBivkuRtJUz5BLkYQfiUdzTafQ",
  "key3": "5mL6sZkpsAy5AEymP9uYJBoYcd5PbmPjMxQp6gwn1GURx9irGt43PXr6m154BPpvr2wUVqYy96pxd9PDSoFUrxeu",
  "key4": "4pEcxXC7yoyvAx1jL1sPXBBeZFQDhwMjmjqozeTNLa92s5onHbBv5uQ3gUALbtKWbq92DcLyKe8SNtAjhVVVjFov",
  "key5": "D2BPBYpJXzg62R59fSXKJc9Gqw4rP7YgpyEYk6SF7QqTCDRYuGzFMk8VpHjya1QZnmHdpha9ULj9B9duvtkAbn5",
  "key6": "1ao6hkZFYv7ANpsAbc7oPekVm8akUrKxrGUtbjJ8yY9sq3xAhM4qJvppNKsojvUYT1XASVMBvcNovDNHmezbWK3",
  "key7": "3GPjy9FAGHZbhnqLfeBsetCqcReMdCjYXtxrQLkJSFKFemrg3T1rLF62W3Rmi7NhyuLKJMNDrH8ZaA9nWFE8o9VF",
  "key8": "5bpowLxrhcyJ9Qby8ugFAbUzWZpMS8M8ZY1Jqd3CvLXd2QvyFFMt9aVUhLeS7NUoSEeJdYfM5n1tsQKm6yWug8T",
  "key9": "5ygNNYF5hmhp8ei9ddXWwwYwP3o5U5e334qEW2CziCyaKBGJpHi5AXQrqbH9J7bggtrkGaocwoGHLM5c3E7z4x2A",
  "key10": "37CbghC65mkbWoCTpBW3nK1xHgbfiFCmATBiVnpYbCoXSn1Zui3AhYB72MnA1D2hYo8mvSg8tiYhxYTS8A3KvVTZ",
  "key11": "FnPNQRUJT71qAULV3YWx4CoJwazJDHpfVVErEFmWUu8ytuCphTjb7fXfrVWDzwZc3PZ14PH4kQqy9E8kw2HUYQU",
  "key12": "5yKGMwEafzQS4Uf72NPGHe6rSsP6aV8oq6GnFQrXGY31DetxDvMhkCJPhUy4hD2iNv1qdTD5x4EgQdWDxayQWKkB",
  "key13": "3DafdvgStwhNuj55RALB3EJdAs7AmpTqEiS1teKGDifXvkhx8Pa4E3px2iZ3VGFgfum3F8QTuZhUkJZpzryCt3Ym",
  "key14": "WxeFp1i2EoLDszwQ9hVRVStBzUzRpCN8Fsezu9Uz4YaC7BmTdsb7HWT4jXA6RMpZHSzbMV87tnYK9m6bHkKqT8d",
  "key15": "48se8gfGi8o3gvZS54m2zfEc2a7e85rRkPr7CZycMSfLSRHsso3w5f2xDaF6JLi8yztd2iDnmd7e3cX36TkTBTc8",
  "key16": "5RDd9uDskC5TKTRgLYptYK5br36Th9mW7hq1hzzbcWjoLCxZNTMmzEfcN76e57HSDqxeC6cRZQKvNYR6wvvTfhFc",
  "key17": "3usvSKLm9Xxc5UquKBP4ZULUqYdGv94veTafD13MDzzPjQmZxM4aBzLkzbPc465XaZp8bnKJx2TjAgdzAt1ARmuE",
  "key18": "2N14F3RuZxZdWVwdBCVjMUyNyu1CisiBwAZLGE3hrsi45vckPpWEURobBtKmMqEcDeZ8sCTq6eWtiK1ziWqpoFqP",
  "key19": "2byuWC8kshzbvaruwfhs8E8tFvAj4suJbEKG3XhNJxGccR7VZ89P4hC1Gu78Bo36sJtAoV3zDPTCFexUjExGgYfB",
  "key20": "4GEVCXkKrN8HKn9sNJyyyEkPXTZCpiZr6AdfjJSSo2MtNQ9o6WUWkwj76L4LQWHXc3VPPJkTpRh6gteGANEinLsd",
  "key21": "P1rvJDWMn5EiFxuFAeYnaUqHQzfbp3GLri7qZjqBTufwjbfSzPiGRTCK1P7Kmci6tTJL4LqPv6yCThUEAFD1vi5",
  "key22": "4gFG5Fqzf72QURA35xh2zcG7MKa5u3j6veJxqykrs5TtihiFTQco6jq5oYcukBM7t6z79ntCQSdjNybmQ97zBJjA",
  "key23": "565nWmHtPCAmhzLcWgEDw9cVMocCoSDKfMCNZ32hx98yFEGCapQEUCQsAhbPpkjH4XTehqxYhnegmVeK8NCiA1gy",
  "key24": "2qb4MRfFGdujA3fdz9yEwhwNSep83iJ6kmSQZUjjEBB59kksZoZXz1SKjpSoeUb8aNPiq6VYHoTvA3M68cykcdEv",
  "key25": "2t8diTkiLwR5yoVnYRNxxkV2AeaAwTRzKDkvMczTo3r8TbQip1NDoW56v7McEAmKsNZyEkmRNxvFLUpsiJj6pRwN",
  "key26": "DtLMCrMeB86KLSdMGdfxuoP8kiLAPNpKnXkLVsNTXBZjoFvBrqxQBSbiBoqixJknz4KLpRmemBNFMAJ63yYhcx5",
  "key27": "2R4su9ohqYEwvaFjFnLuF1M1YmSKcLaMuHC4rkQ5mDN6uQvuPdCgJVFCkJNjDzUbkD1wuoLo416PnsyKUT4UUSuh",
  "key28": "zo7D6e1tfw1UtH2zhaiRdE7Zg8Kfm4TpXGhhJWCvWJ5HQL8THcqNhRPPrG4yZYM1hfsSJPvZcjHv4C7QWQSd2wM",
  "key29": "2TX5HyWPbGKa66R8UgbYbk88EFvsshiCU5JVDcevgmiaShtZx1P3NVjM947EVSKxrUiqpQx6dGfUn8uycLctRuR",
  "key30": "43G298N4t4U5FdxaQWQosbHPjQSvQNKX76KxAcYf7CqBYU7XSfbUoDfVUe4WfNJJw85ojSYvxggwnCQet4Lo7YpH"
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
