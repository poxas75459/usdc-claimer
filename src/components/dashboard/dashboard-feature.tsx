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
    "37fD8a4hoXQndKJ57QUJMsCQVpPfCfqc8zKYrm1cpsxvLZvCRDAyBPxYcvmYUPNyAcjCuqcGCWt7LLu4UkfBSCsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VzMXqJAow6LRr3rEKuf3jfk2NJZ4iydwNJwRpr33z7YufQzQH8hVqQw5hvJfeznv3L6hXnnHRzzg1KYx2i5ogx6",
  "key1": "2prAdGbtgMe2JwfnHpxHDVsoPovvbe1PviYWhjEm1wi9pLzp1g6vEoCmA1UQy5BZUWcmtWnEmc8pyTC2rqyKvep6",
  "key2": "2k1detKhbnFGLggek9E8xVqotFF2p2qVxTF5H7RUgVZ1bqJf4SWWymFg9ufJ3s3RYNmVZ7DJs7qq8ycsKRUWzmdD",
  "key3": "3yQgiu1cQvUxnwaEByrQ1BPL1VH5USx5mRhgngCiinA2H66Y4DTiup2iaksg34UtqEVCNvoAffD9nbnf9rwdiYE5",
  "key4": "5mfcgm7DYnKDG4T9JvUTm4RufTBpESNVvNjPXLtNMs3UttA8Yan6y8H11V5pgsQD3WG9Phn6uMixwj15d9wJjYg",
  "key5": "B4w2PGVGPPhyRHqucvGvm2R55UyPjg3ZWBkmarCJxNHDEFx372GPyRHRtPc35pNKmECi5CffDZYbkArdbet4mvm",
  "key6": "3PLo7ExBWkaK5nxrLHg1ZVky3hbgfjGSrgoHNRED6fST4PD7bzuE1HxqRfN1ibBbn8cEgQMizjt7a1xQCStkPBrC",
  "key7": "2hyVKVr7k7qfJNHLCHV3EcnRtC3x4rxjQVo1mJsYKsRJQtXwDQkyoCeueuLM8DawmcU7miWNsF3gYVyhCzHPBpoz",
  "key8": "3yv2GGscfKs4DSQQnZYoohYTaB2ZjZgA8bUbkdxWx4FPHXdS2E9VWPPemHdeEeyjjruQJU8vYmt1BMjVkWdzJMBg",
  "key9": "oshBmWh1aDAzAsDjNfg8SBXom4jkRKar1eB7R7gc8VmHx5pTMwazmjszLMJj7xTFVqrYGndo8rZHdKG9LvXtcSF",
  "key10": "44cYS8DprYR5z8V2Um6HVkw3z2aAdGgkwTaoqFdJAJadJ3wSLzNpKgxC8jUqMWrtQMAgAZNA8fM6XpFr9qSah6kF",
  "key11": "3ZJ5jdNhcyXwLMAQdv6NsBkZxE277yCYAC8rvgjTnVH6XrRTCesAWwoioHe7RSiuKxQV9iYKT7UrpLceaksRhXEM",
  "key12": "4TXeQLfdgKAUy6LJSWWvh3Py2y6vXt7p5q6TnYTJVfUz72KhUAEQYNbBY1qxKL2hpQ7q3zqFHkwF9G92ZP2J4frf",
  "key13": "2pFuLMbAGMkohpU9e28knjmeNa4wmu7hexyn1MQhG8C7cVSsGYW7W3VTUNiFfp4AETVAZrG2oytxj4MFyC4ZL3jH",
  "key14": "3m7XN9rC2mfuCgFtC2WCcZXkiEmAK8FX4CkNSkk8rYQyVSbibUMcxbnWTVnsbe8hDLMuZ7LvSbu48mAyrofgpbfB",
  "key15": "5nrLDpBXsNT49xqfvrEV7PqasTRP46qvUS2ABCTUbZRPoqaG6C9HFDy299Ph3ECE5KDwYvYq5FgWbQJAVcNnbg1g",
  "key16": "2J5m5PuAjip2D58XmZrSegbtSiZioYg6SYV7LGGnSYCuwSowfi8na9NmTPeVe35YboqtaREwwidcBR3dNoDoHWBx",
  "key17": "4PbJ7CAAz9HNA6gWPPuwyPEXB3ByGXj8sPtHQ4BuKPEVchzwhajvEJfs4EefisXgVuoHPYGRNGZCk4tQWTpqtmPH",
  "key18": "DtJhSoTHi1K1cXART3okaUeDfTcQcvrq6XrG3a7TVLYwqgnDhFeEFxH6HdBue6JMJd54nxj9gHKewfS4ZWmcjXu",
  "key19": "4bBNEkVYkGUjsVWQh9vmmQ9BpNZYeX65uwCfk8fVLTbF3PeyGDmVbWPgvtwBRcohs2rsYHMDAyPeptJMc9sRStVv",
  "key20": "2ExjbxeCHsVoMX4zGbeD4bmryfABHXVQXtWuTYCvxtcaF3BC9pAYK2qqcrPy7Cpw354WdL6KLeQCYyaheCMAyQyT",
  "key21": "6PLn2fsqsfh4vbWzdktCF9WZYxdhPfMJnXUGRhmAaSFLdx1CHk62VvLPi65VxtiMhqMuPneXohgPc5y7CkZ8jGq",
  "key22": "c7sRokGXPCNjwZogASZ6htpwPSdwFKGRjkgZuTTMXjXocbwSFyJqrU842rPYDhcS9pfbH3STUGbH9nhyiFrnV7W",
  "key23": "3aZStpUCgyJzvBJFq9j119tpp4gPZ3nQUVoaskHQfZ3umZAced43dDiTG4z4ayEjsJKAn4zMdW4kTFVjbBQv51u5",
  "key24": "A1BRkzWKovLo1CK7oTvTQbqekCsUwafSwR4S3gpKYKa7oCBNpt9Pg3YDXc6qwQbcGJGWy7X7xLhN7r6XSgpRUDH",
  "key25": "4x4dWrAHcAwrTRBS1z3oPbe5jUoUghscTy4npx8wbmSsbwXjwhtBY1EXXg5HK46JqxdiLszjBycVdsXHSR2MD99y",
  "key26": "JRKFKe4Q2JCg5cAceWd8hxSZwTeMihRrRDvUtcotSLodDSWbTxYb9WAKBi4mxv28aE1ZRm6N95ofKAaSj8muhSd",
  "key27": "d6PdQByMo9PCX3kcvxRX1SnfcMWWUSoKMafekLjsAY6g9nnm4wrj5g6isUEViiS98sFGDRxgdLDhgXSszyAnZea",
  "key28": "25416Q4MpvvUiBRAPh4T99xLWc3fhkjTCRFbcTHfYyaFvgfXSykN5gtvRDHBJ3aUThPKXd4DVeTHReoeTrNmpX3n",
  "key29": "GYDTQSS1rhJ2KcAMRDm6LAuSYgX35YsbX72oMbjTJE6ipGoFGCnffJKMRqsSdpHCFss86PYRiGhPXU1XSjsJVDo",
  "key30": "2dFDC9Ki9JqPM6mb7dYsTeLHRb8tCgpHKgVkqj5FuE6qTGNh7Rb1sAkk6ikXcPBBopraYve4J4oHMN6LEnQxvwx7",
  "key31": "YtbkQuB5QtAJzhp243GGr4eUjDQorX2dkRnHQFCbbhRz6sAMMJUxNMTJJW9qzDAqLA7MBuvA8Kb92NV6ZYk9D4Z",
  "key32": "3vuhVLPJ7Z4J1mXejhgmo8xdqUPKZDHe6kbFTH4Q5FgcjUdicaSmJitEibaDETBoXWbastWCgiwAoUEPZGUZhzd7",
  "key33": "4YjzqPtq73CUUooj4DugjJzTZrNxkFfSNbdRoYQPw4eVhfmak4JQKibw11s9fSFurbWE4hmQNPSZkDamTLj1aD3T",
  "key34": "3i2joBnhHeVquQCeZPVLJjBZhCajit1wHNkvNWy6Az1hetoYKTP44xPhk31gUMESc6KZ8CHooQx9uwNpm6Jnj8XE",
  "key35": "4f15mYx9ATrDHGHNjZx3aXX6m9tvrHCUPzN1KpMsRkknrf1QWhG8KGqa9awq4e6koDEybpnxS6V4Lsvztt8HRjpH",
  "key36": "4ZbCrm9U5jyEfZHVdYSh2kEh1mSv1tApHJ6kjNG45cXKWXjsSLh7SfGz2KasPZWVAaZPAAWzFaGsGBBzg6NS1MPH",
  "key37": "4eHyhy3wjWiMqQK8zkLNcuG6SZxs1bi4rs6zzKxb3jhbNFiNbrN7YWE4KpowmwHcF9H9S9Jr93BBX9H7zU9eYYfU",
  "key38": "ohnRswheytGctwtYGWYwGj3grPnJRP9zVq7MKmZZ4eCWoDZNrXqnxosRMTdvnp5E5CSwWeCaCmpuYKEZCGHG8Co",
  "key39": "44kzFSYAPmaCAC4wxyPuSYDXpw5CVR3VJ9g3e6TJMPQevL9Mr8UCAGKHF3DDzzfzMu7uP8he7457QMGwdtdC1g78",
  "key40": "2VtsbkyrwqMgfi1x3EF3ZBS6yQWRVG1gC6NqHuDj2fudjX7QTf9wtEGyexFe9uwkt1zBQVSSNHP2RGyzZrLTHAFi",
  "key41": "4h88hhWxJFDcMpvg222YbFJtZ8narSF96YYBkRwWNDSdwYw3xMotoZShoh4oXdFmrEaw3RPZCNYaK7YTfgHsaXsk"
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
