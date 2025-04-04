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
    "5uJQyk4WgVjnNj8qcAikBQ2fj7bUBn8qLzcxEAqWaCMut5tMz2qVk5WSoTE4WsG3QukXt38UcxohjcwBaU7CqUUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1yNJChh2UuZWEwKUVfD7PV8LP6A8sTNdMDhXoYxHifmetJbTEJS6YwNWXq1P5gUTeHLPjtuySm84ZaKessp4n8",
  "key1": "5R8nzePGuhQY362Wy47fphVs7DsYwcMvf87QAA7C1F2V67cePsM9i1NBWFg23N5X5cMkdzuWoLYyeCRPAvfWDxa2",
  "key2": "4sUqtDYmvsDzHh7sgSqt42fPSV988mh2o7D3oy7w3DLvAuk749WSheb8FGV1vWKZNMCL719GEVoxyKGaZueJLMjW",
  "key3": "2a5izkwvFPAFeRsXsrJujfU16tAkyeAQomaUsrRJxXTuhZSnuZ33skwRHy3i6JFskXVbvkCfQLsbPhz8h9zSarzE",
  "key4": "5LLqqMkJacu6BVZTUiK3YrsQXXczFSfAKydzkqACJBfdSuaiDUhNFnV3rSyGJjvLzBV2VaMaLqDKTt4Bb4zSfar6",
  "key5": "2G51a1vbrVTjHQB7TE4oZP9mf2q5HdwcHFTy2yxAYRW6M3LaWxvYsxiWeg51hiDuNwepyWFbkohtRxjne7HtrNMM",
  "key6": "3SY2yymqZMvn41mueM7WVbQGBUd6fpVtUHipgF2Jvxi6ubYvgyzmcMtKAFvAQC8dvX4WgMmWHmYAZRv9L2hJBhG6",
  "key7": "x1ht3PXoasKZQ8qA55iLb4F2VsoQTbTVuVHs54XUk1TbNMKQtKNdrwKiYXe2UvoHRJ8B6HHK9VgdMnDGzgZy8vS",
  "key8": "41MpREMgfQ95LYenWVpKNevfcF9zHSQAPCqqrs5LT2KFEAD7ft4aSovZTV8TSWCFUr2yN1McgQdMAZvgYfZkJdHK",
  "key9": "2veZgev54wvESnF7WuRgm6dsxRhRL7USjNepsPcoNaACwdMBQM6oEwdnHh9hiDciQddKmeSoBdM4vFWcwBMzqrwv",
  "key10": "52Jc7nhjbHmHRZnt6S7ZYWcqyBxkWuTqC5X3rTrCie8ranxJT7nvPFCLdQonG6YETa5w9AqCPWvwfngngGQ6m2Yg",
  "key11": "nFXBmNhyHg1yUDf36xsTu44im2bbaSzu9DkL8JYHpntDpAhXyhaG78n65cNEMRUyTXTUNuqvL7qdA7apnviGzdd",
  "key12": "2Fdar7fc7STr254SRP742WGjBdMyVJtnb7xprcEt3DLZVjXiH5ZBBy5M21SmEPSivRHieGHi6dyQyS3fpwar2tDo",
  "key13": "5htybKpHpnwnjSRnKrPfjWyqoqbQ1c2KFNCu99Ni3smZKV68pMLRBciUdwBtFNf52vaftBTFDe5WSdAVi7hGH9Qw",
  "key14": "5dazDATkyNBKbubKJzgy6KdYQE8Xaw37fCDPtEmkbwcfEL5oEkpNeUBiXASYcAmeZD7QMQfDcMkoKGQJQyZn8KdL",
  "key15": "2UaEAjuJvhGPuc11yweLNaTXNTXaRqPFPRHYXZFJsWvmy4sJSLv3Ji7BUxGae7D6L2EfP18mFMGk9FGPv8VMRfWU",
  "key16": "3nTjcHMtdeVAmkBBBzt1eKccox5rQfQFMfqi72hfDbdMkxbL2rJMek974n3tuGfK8ACoMvS66ph5cBihjFhY139x",
  "key17": "4yecS4ZYQukRw8RiUsYCEh2bhxow3uvoL2MdbE5ScS9MdNQVRc6xrr2tRfi2K7ELWKtiTa9FsVZubRUdZDoS7G9Y",
  "key18": "Z9p6KJGr2AEc6DVeQAnoZDhdEbj5AseTWsDQurT1iFucHdRaEUJFVqrgJmyGtNa2KoDHbqnnADYhheys6vCDWjt",
  "key19": "59GpwFG3qLpcj32xJmyx2ED8efxSTi1AZPsTvTNeiJAKj6JyeFTijr4cxQzqnHfvFySyjZLUyWNsn7cMktpiBjKu",
  "key20": "5kkdX4sa7to1cEtxzPwRmAyW5qt2pc32q6Ho3uW2M2pBBgR6CCjQFu6Hr7mdXQQBUuEdcnmXTKCXiAgKmkgPkMq",
  "key21": "YdLmj66juUaszL9gTpZBmaghxjKrYBJh5rNbyv6kc5oLcraww3Xg429FbqRkgxANsjyDR61NAKkwK2garFnx4be",
  "key22": "4Mv7gUiKXhrzGefZnkBYYDKvVPDhi1dKojdG3jnnYtsmtkj7N7Gaq2cSmzL5nV5c3XUoufix15GP7UKXBDF37ksn",
  "key23": "545u5Kq54oxj3p1aWkNZBX3infzxznHxaP3gzFhwxvtdyR9g8n2iua5DqyFpyJ3FT4UzRvSvQp2peWCCfQ6nZJi6",
  "key24": "3ppVotyBFgBKDPBvojeGvDt1xWfLX3HMXtt445CcQ4vL9MJVnPMgdBqZBBqudxk1RaXzBzsqJ4JLJ3wuUifojrku",
  "key25": "2dNFaGyJsvVKNg4zhTvt4jwEsXySX2BRwg5hC5DAfab9cR6ooLab3kevGFttbC3wVXZXUDtmmcFeeeW9tHk1K8vB",
  "key26": "m2pCtyKWGeZiQkH5RKf2PTVvSBpH46k9GeGY5nqoeUr896dAtT6fVd5Qyofx6Gmau6s6P3pgbZfbAvUFk99rrNh"
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
