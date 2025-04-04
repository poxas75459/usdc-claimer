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
    "bAWZ3fhK4JCyqy5bTa1XDPg1Gygh3sGKuBRd4TQasUkRvWqtSWwziX4k1GwJiosZmd1zLurgveMRPEh54YgtKpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47krc4giG9uvjKwRZYw69LpH5Gme977Lin1FnNaeH4vJG5mUnNnraiSjHnK6WDufu1n75y9NNynoiNbSDLu3m9Gg",
  "key1": "2tpji8iWd3Z1YZY4x9YEaPw88fnnYE4BTK2P7vwv59D7sKK9b5z2sJ9LCc5G65PHNwM5MVWZU1pvkYcVtsaHaMyv",
  "key2": "2WYyDtXeEmj2Jsa2ktYfRKnLvU1mkCz7uD89eBgd3pp3eFZWsjoRLScXwLuKFUq5KPdCVzGbZb7C9gxvSyXTriET",
  "key3": "2uVqVPPhoeVFZoSRj5Mx8hkL93y9W2icrAfyKJ1PCedcLhu6Lv7QqjnJdMG6kSLGNy1atnMdVdsX1iMfQca1WDWr",
  "key4": "mUoZDds4ECqmZWFmRUjBAnCfKs4g3e6SibLudY6Dz3WZoFVJSyiqEN2apaGhvmTFXqRiQ2pKcPppaitLJTDD6zb",
  "key5": "5CCvWKNzS9JTK3VXn6UKk5KcZ6CMABE9mzGCW4MFqZfvdjRTFBdrDxWsoopYS6kLrnegL5SYriUC1RkZqmvAVDvj",
  "key6": "4QLEdasHuCN3TMVbNKDd3ikEiRgHmdV7FWCRxYMjAWc28KW4m6KPyvPE1rT3kprPzEXkRhYvXMbV5eeqFcQExkf1",
  "key7": "2GKsbtkUUZJgte7ALxpjXZjP4VBgmNocaUzXZFxeSpjRiNKuNQMnKR98tVMpmLRm5aoxmGwYDnLoVZWW6vvQzZVX",
  "key8": "3wmpxLSXuC5kuCDSSdGLqF96rNu3XbKDoqDHicoDnGpoWg4GZ5H3Mja3eWpqg6TzLS7PUueVRwbK4R2U2CzRjDh4",
  "key9": "5Xst4Trt6MntMM4ArpaZKL2hRuFkQ4Xu8zEwvHp6mmjJCYUihuvaTdMcHiywANFsjzKCmDCQ9LLXaCNbMfP7ZJdZ",
  "key10": "4snauCJ6KSjPe9cSHYvWWBALgjkF3TzerNxn1gdJb1iX2ddTJH5WnbdEiUmgasMY5KfwJChkBizTF24p75YjbxoS",
  "key11": "38h5drXvhz91NToRSy9aYf2ANr3de4vTJiGFYRWua6qUQyYUnLSPJLK4woKozH8QyR3cvEZ9XtC2nDA4bwRVFnfB",
  "key12": "5rPXKWFvDEpeM5ysLKbucAE8dw7rQj3XJ3Yk7y8V5Hv41aznUWvcPWzraJqBGX2WFRYixTSwwh5Em7s4cTyDy3R3",
  "key13": "FQRYR6Yqu3Y9J4NdXR6gbVMDTcUpULbB8wP7QiWMXTrxFS6rhS2WLx5ivjEu95hNTHca4EWv74ZysLmHjHpqw4b",
  "key14": "2uuF8NopwX5dy2Nzy68ojSxM1BLiMtU8zLnpSchkURtkimJ2cbFKiHsBV1QGR5nQCAyiFt1RvuErqdcyqvYicchA",
  "key15": "2PXHEtGrHnAzw3WL1ZPm755Hn3arQNgz4CsXB5mCE4q8GT3mcGVfL1v8FPo9eue9dPHfxxFiyGw2XmE2MpMuKoK1",
  "key16": "DzozmeAgN3eQv5ub8tx4ZgWdJ6BTtLveQ6m4XtVF55arN8yPRT4G7HQ7TuP523wVc1TmKRHn63aQWt3VGm4Cm82",
  "key17": "2L9Ndcmdcp9aCPATiWzs2UMBLDFuNkuktMNar8fXCUkxpqQxK2SN2NU4KWVwiRPsMCfZT5gAYhagY5mn5wSu3pxY",
  "key18": "2vmWHyKZ4daDMgcnHsqcpng5VSNdu5qqtENDRsnDZhHRDJNQKs2iVjWZniHiYMmwX2PTXf9cBTdHs5zdgsgrFHda",
  "key19": "5YwDdSfdA62WRptvHvjRaZJUBmR1Qbe4k3fxsm2AezQkBFKN18GAzfsgPzGCzdMTtfdirWCuWg97tedGZFAUk3c7",
  "key20": "26VtUxA6yoJyC7RRkB8imnYmi5oog8ye5PopAmUNnHmyfTzJN1GVNi5kENzqquy7C3tWW6RAEzpAcUX8boSfZhYZ",
  "key21": "QpNWNKWpG5MLwACrBviY6HUh6uBLUPuMmXv5iVgBMRn3bV71Ry16PePGY3CcMqc9z1nvb6tZRqZNiFw59Hfps1c",
  "key22": "5SFqb3ARMUwyoUE9Frn5if8CfE9LLnq4MAgpZFoaVYypa3GtmwrDyJ9ytt2jLXDid8xnCZBoRG7h2fD46dNp3VeP",
  "key23": "5iC8abX3hEQTpexHHMUDe4Wz1qcngykJNk4S9qbvKynHs9TBwmWKYjnCu8LCA9R2CSBhHssmzXsnzsijAffDTPKv",
  "key24": "4HfiF2Vp4sANRgJDnLq6UZZ4oVLtA6WujJaYr4fSFNc4UmtRUxKT3CgBju5aY7izozj2oTkipdYzu7EiYCR1EXRF",
  "key25": "4xLuWcCoiTmacUz3FNfotwkHivNSUuTbsTp8gQo3fbjPdyAY3LpCMhuCgFqRWCzJXRm9GwKnPuj8dPYjuKbmCDjf",
  "key26": "xFnemu2akZmBAwBTu5j2jP9RGdtzFPv7sHJHdomuZKT2rnsMeFpJohb1HvSKDNsKXrPs551dmJVBYwxPJ7kL7Ys",
  "key27": "5S5SGgqbr7h6mH7uoqnV6WCUgPEL7JdNsuxSqBir59w6tdaADLkuRfZxRySBdCkfcMY9weAF3kbYGrjcCvevxQQd",
  "key28": "665wjzmMkCTShb2TXcpkXrU64ULPryipSRGocuKf4oJgUsMNAezCESWdFPnaKeBBD1Gb3DbeD3StYkzKUWoagAr7",
  "key29": "5fQ41nY8HXpuwUJYRM4xUB1zxnHXhH6vnn5KzU9XmN9JCyKBAiVcSE6uRdiFNJHCJTirUamnZhCBiggHWbjUnZEf",
  "key30": "QfnSeS7BSvu6C6ekGB4eBtRygEDqFNBDvbuoNTsn2aX1df5xAQfYN1cmXegvfW8kPxuAWjdjT8XRWf9SufkEdb2",
  "key31": "TfXGEu4KiGWaxSBANo4sUB5wmuG87Y456VVzv4TUNXW3Zqeo7PTjKP9j6h7grbxjcB58fHjv44e2c5JrP7h6ZgG",
  "key32": "42q5PxsAxK56F325ncRFd7dRUeCQ7vceybQk4JRELVwbw8aKzThiKtdKaSywxyeW9C5CR4bXmebUZrAhTSc4e4RA",
  "key33": "3Kg8XZLQNLACTBTCagEThJzdd14CoQADjkpAAszonqtgeEKUReVJp6CDqD6EJy6BfARwsxCegcLHxWpumhkVSatj"
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
