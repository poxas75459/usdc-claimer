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
    "5ZU25zSrDQogstujtNntajE9yWSsAaCDz1JhrPe5Y1h7Hw7TJA3t9yh3UgsLSNhAcX9GKdNYdPD3Tbx4dEbKC8Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgL13yk2wUhb8wK7H8LRHRxogP44ECSudieKjj2BnfnGGcW8ZyLUPNdVdShX9mGw5AmKc8hGJsDv8hNgyks1a5c",
  "key1": "43TEsGN8z8T9q863E8F88FRPdd6KEhpe8m2GZ6Dqc1kx6iedWXMqZ7Ty3ySskBdyR5dUVCZstgC66wwiV8Bi25Q7",
  "key2": "7f1ks6uG7FZdfwvAmQTcN2UdLCcvRZ6jCCjrcnfNxYgakVwdQj7TSPq5A1gxWSZM1pdeyU7hRbvZmY8KkkXnP4v",
  "key3": "46QcwPtzpDTHmzGK8kLWQk9kzAC4nB9ZB5jAPWtvcY7dH29aFj7G9nZjBJbeqVNm1xogJ8itmYjTQdbMMmC7R6Qt",
  "key4": "39UJnV63Nvz4AmaTKBJKLB36k88M81du8ask2sJwSBEKpazxeTghHME3nAHd2TGRAsqbLNd7baTMSdXwkQhJiFa9",
  "key5": "2QT1dLT2FUqb27XvPqTPSawBqRHqYKkAS7fXCpvAkLCQexwZLFaxQ6GyPHcmC9uwinyYcjzKnRDuLQ9tDCqTD95S",
  "key6": "4XdxWfNecNPUb7W8HPJpEZGn6qMuorCv5Rp9DWJoWc5X88PGy5AjsAgGwanxW2pXqrwwjT8x7XN2qyvhMFJNtS22",
  "key7": "2J3qFTZFqrpbzXuDUTMgmx6HvjUwuYebuYkPQvC96aebqtUCGXJ75y7Xjw2Ee1U7qmU7n87TyGosWknEoa2BUYBc",
  "key8": "2oDr1XYyMFdC2TdtcQ6gpThpauNp8iDoDLpuuBBC4GEWJpL1mecFWyFRFn7SZc5rcWGiAmFBPC7VKQKFCFSWkELZ",
  "key9": "4MJouCmNvsvDhpWXfXAPq5ggnmcJgU3nEzbB4XG4yPnvhUCmyFDQUfEdX7UjXKzveWoequFgUXfmddTNd5ihDT6J",
  "key10": "3f2rqn8U4BeL8i9qbX7rZzY28hV4TRaFckb94Yn7yvv6eYju6ZuxbW8sdQCvGX6N5HVxCjrHoC24AuSfG5vWSkgN",
  "key11": "58j3J7tpQU8ezFsr75aHCdz1SgzQ6ro42pV4guCVQNH8DgGYvv7cHWuCfsHpStMpW28h1MBky8HozzeCLv5mpJTs",
  "key12": "HRsKhVSuViVhHDjGr2BpxaCQf6pXpZX5b97Ruo3Hm14qD8Xjzoy9nKVwi6hdAWYPL3kGBXBvLGXCmrwK6DJwAsZ",
  "key13": "48uEHDhGfgnXTFGRXir9XGeAey1wC4UPAUXLY2dqb8ow9gRcssRrHjwhpjcGes17me3di9K2KyPheCcbFTbj25oX",
  "key14": "4rknjUgDXWejjfjAWLdqqrhjRaY6HQXxnbK7zraA2UcbAu65Fih8njANg7SbxbHFsfnBx7mp6xeiA9D4oEV6vyn8",
  "key15": "5U983hxyWqPE6QQ8ypKbpbgyne4s2g4wv9tXcWFSTYMz1JH4yG1ay7yN6WziANQYgfjvLB55vegeuQc3d8HfuwaQ",
  "key16": "52baZCocbeuABAVBngpSsXE1ikLpATELfxuQ7KNprGoEiNUXeZBSt42eAXGXiZ5rThMvDc7p2kgn1hqVpVedyTYZ",
  "key17": "zi7MwQNAqZgtraEJT5ZCZF2XQZ6zkGJDfVVHL1Qa9Lq6stMF3NjM68CS7YcYCrRjPMN8h8deEXYpwDDekPkot8A",
  "key18": "3nik3QUNbc8FEP4QWRNTC8keo98PSiQiCB2WTZb5ntHwrARHvxhXU967WrthTbRvX4G2DmkfAp4LNRDCEdX9dFb9",
  "key19": "54G9MHDku7k7MowSxohGL4n3cx1mKVLgfpqsMbwVgs55ABbJe3rL8sDLURCjeJixQkzxMDfRpy67Vng1S58oTmDo",
  "key20": "62yx3ruCk9JTG9etv4dhwYZEHUXPEdZHkQnwrA7qvfJfmQs4savBenvWnHWMqUMgHYfULAoJHzGDsUaruh5zf7D3",
  "key21": "57FuW5Yc8hvTprAm83imAfjNoAb43SndrWvEFDhuPcAY8aAAXUWBiRqJMXw8q5vGhgzDCwog5jcS8BL3KnXcvqbN",
  "key22": "3JFLT5DfJCFhpurtaLuiqUpoV8ge14vCc96WVARaxLzTDXHwi1NeTJKYdAx8ZNTqegoL3XQdkEnA6W4yHiJ1F1cT",
  "key23": "3KVBLGeP73w2LVdP7YUr2RWVBWLmB8FnFrn6LyBok2n9NANMTouDhhSaPpkf8YrJXcUxn4UdGrg6DfVYno8jtEQx",
  "key24": "59ZV6FJXkzc17zAyy2SoqzAfrXpVdQ5YMCfQj5F6v1HgRzFTzZg6AmFRC7AqQipWwcyBE9TMoyyf5AG7AT64SqiX",
  "key25": "4juo5x9mxGveCci2xfoqDu6gCZiBN8EVP5Y33Gm88QRBwgnf7xxkVyVPQKeCMDH6CLq83PWg1p4QwE41D8drnmDU",
  "key26": "3dQqsVN2M1D8cFy3X7wAZZ4VhycCnUmm7dgFomYGGm7xWGLha7bdWfxfivT3FhV2V5smSqwSdfdsuwUSzDLEAsan",
  "key27": "2C4p2nzBPEwKmKy1UhBxhFLKUEQZ1AGc2qywCpWEU3GmU9ERULJjHgjaTVtLmhY5dN1QeQiEar45bUm8WJgDbh9c",
  "key28": "4PVn4BzuWs83CG9jDVyiJJmydmmAs5a16bGHwX89LknnQxaxJVRdScvX9owPvC6g8abakZnUK3BAp1JuZdyFDDYt",
  "key29": "zsoAfFYrMSaonzH6BsWvA55th9sQ8hnWboAFcE9SuHb7pnvzyQMCeGqWptXubmuA33fc2Un1No5z9GGBViQ1NJd",
  "key30": "CrS1a21uDv3aX4PH985QCWDV9tZYVd8YtqNAzUA2G9ywSXQbqGRrQufsQdwUefD9Sma3N3y4C5CRykUrG6Mw4pn",
  "key31": "2buR4MmDddm4ewwgqbao4t9JNw6sq6tCXMd3uvJ41Cymv7PYzj3VKQVrVQdb2KvdLs52gYoeuzYzwLXZoS4G1GiD",
  "key32": "5rcWA6n8ik9cPH3V7Xsi91DrnqEcDpt4nZVgJwQ5EKFQisGnm4JB779VZsxszfD7gu5pc3bp3WDzL2S4CMFpHoTu",
  "key33": "adYnDdghkSthPoc31v1Y9GwU1kF2QaKHLBqejVjFbXS31mXrbnU7yBQC55VW97tHZEAi7HY28QauijLWSKqc1DH",
  "key34": "4kpV8Ji2TzkXQy2AFzJKmMR4op18yiAsCnSDaH8Enihc4V6AhC4qocohxcqFdBe4e25TS8C2BdebPMnhSAKuGscT",
  "key35": "45vCJBnLGXhB44GUBEnYm3z8aQRbMN1BMQtuZjJ2RkU5yrAqbNSZNy7gtswVPifkqZQM4txcHuxdKhL1usa3HMdn",
  "key36": "8ZErXGkmTpNtcLSdhUuNSAAzaMxaaxPTMTLT17PLUW6hTEcbaQZbtK7XLmpzRMuUXDimY6JWHuimwUBETW2G67i",
  "key37": "2B5DUSZdfzidDo6U6VPfCQ4GFW94nPDXsyEBXNM9v9g6vavnoBX7BKRj8SnVL7u8h1duVVYGghWB6s8QdKkWtfTJ",
  "key38": "5zFuhxHnVaV21tUR576s3Re3K1oxzkJ1shBjY7Sz9DBPGjtYjYSaXy5Bg3a3vxir4e4K7kPqoN6GNQpLNTvUxBTx"
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
