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
    "3jqcdQ9Q1qjXMP6AaYKPrmhhSsjVvZnGQ159TgY7UewHiYg52FRo3qWYmvi7z5BgwMq9fvZbS9MXXRNnxcRtqJrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZTqpWEvD3xMP1Ut8QzovXojsYdr5QWyn2YoT7HqqmZjAFUVep7NXQVmccW7uXybPXh4Ysa9EsdfCGBmMtnVvzJ",
  "key1": "Aac54UZ68cj7zVhbtfeaRj1JxdqRWmXF6HPyNP4T1PRnCimFwiUkyCCgKWJrEsaBpP2myQGrSPbHwxcnaCwDTnf",
  "key2": "4oeFF148P4eH9KrTK3ryjnPJK3k1oLDuTzcvFE9hzQwDpRwhnfcFAqJrC7TghzncsxsM7R6o84HbvyNFWVpq8HCm",
  "key3": "zMdKWiks7Yyu6NvE8CBT2P5cjuFr91THK6hkA4hmr9E1ESRSBE8Q4vttnDwXngnM5X9giiXMritpPCGDKraZW9Q",
  "key4": "cY6uWHoNVzi3ppGf7WeuBo3kvZW8GzpLEuETeQFsWq42aV3oVifdsudPEsJuF3jRS5CTLdc3XVCigFeWhM1oYNQ",
  "key5": "3Jj1AyTbAHNJurraxfJ3VTADqo4GLacbPSyXsapEg5dueBrRpaHEjMtCvwZdDJLbdhqUzgdWzG5Cbsssackwf1jS",
  "key6": "43H8ksmSfGXxspaDKrt57DEL1VEFMHUY1TJ8T7zvcNXJ4BETCLeEdpXd15scYaL828BRvHbXzEWhgBys36NgPPHE",
  "key7": "51tkKHkBDbLkmZswDXyWxHCWdVC17dEzrNek49C9PYvU5NocW5sXwhM3e2TYU3ZzeBQUFhnKA4PUE1M5HsNBxvtJ",
  "key8": "67LNbkiWnxmBanWppHYvTNhrWb41WHT5wh4zsoTB3b3xKy278N5rYvqUJVH9vJ6e9SqaizBBcWXqDmrXgTdYQL9q",
  "key9": "5bxTLf3pCHHfR2rYFxrR4MK85tcHpf6HZwjtsbrQWYKwXRb77vUzR47DzBFUGhSAffmivTzy5HP1KmN2idXhcnUJ",
  "key10": "4nojXLHB5eFJ4KzuaKwokvABaFmP1B7G4LczkDs542dpDs6gK4RZSReLwSy5pHeZ1tZqfvGdDUF1x2s69Q35ZXax",
  "key11": "5EyEv2Yv581x1P1ihz47WyUHo5wCYtctnj2wDKzTZVJT3gmgbQiUBvS4bFg4YNnZiwmUW7HTFGQW6c6xVFuNGKdm",
  "key12": "yQqurAXYneqgLWip7QiqsZY1T2D9AQQp8K6Kn2EnHarYFLRNTq2sz1twvFrdSduysH7JzChFDLpcetyjiAbSk5D",
  "key13": "5F4ey2DJ53SzaYtw5PPM4xiuQ7tBeAt1T6q958ybmo6GmibwVm3myTwDsdCoXsqskTRz3eEJDZ4xyzb8sybMvXM9",
  "key14": "CmWawTf2Feagd5QDcu1YK9t4hKLbJES5Xvy5VZmW1EMFqymWab2MfZtrqbh8qvu7qDpErCNXC63cLgAHd3Wj5Bc",
  "key15": "V3vsN9CzN5QnKi4b6c1h1Rj7n7JkozrssXSwdT8ZZ4UGhMJ9kqX98PEbbfcH1E5shXRU91q3eViwkk7F1PcSe9N",
  "key16": "5S4tViuxdmBtc1kAaB1tQfCWexGyHkAKPUh4gXh1UX1jXBbqZgWHSG23kvh231WAJx2ezpAksDbHv1niYvWFFm6w",
  "key17": "2CKrWfaDswcaRxZAhooVvDDVhzbcx6RNNyvW6oybxSkXY394oYXfUx38q3yVaTmZhpEQZar6oWGqYXyq254Lpof2",
  "key18": "3v3dmgZgKzwtj5umpWMtsfdRBLcEzubmjdVFpVSZRLGBNYahyJF45zLJXAXVe2gYiyZZ8hUCdkJNbDk55APd5aBE",
  "key19": "nMrhZ4zjGNQcnjqk9GD5HWxSSFZAW9dfEZ5LuoZVaWeoSoHbE5B5ddf3yCfNZpWYEpPDFGrDhvxzf6WN6smaFDX",
  "key20": "5yAv4nzRXdXNTBAJ6LgthoLVL9nYW9wEfBrnXbMGa3CaX47jwiJ4HEtBXyf3nYYeZPpZaQFdvdhrLYmtSgvNgw2K",
  "key21": "5yKMBwzb7T3fAbxwCr2Dw2bEcRmf4JQH8aUM4E9yAjpLHZHUpQ8UBmEJN5276dgn41Q9DLvxunawtvNVUZpNo82j",
  "key22": "5hp5UTa4N6v6NQRrUukR72mwS8K1fKfNwgS7M1um72oZNZXPnb1BxJ8PTKv4Vy3axyy2iLj4ySPXgBy5tEJgzkvM",
  "key23": "2Z8SWFhkMNmBhRmC8HDbfQUEHCpy1esPwMnzMc2TRFMtqDCYTSqfmgzi3az8tKvZU6tzzFSdF9r5UDDEF7LYpnR5",
  "key24": "HGWUZDbEYokCy1ErUamSQpKKxW3gSoM14zULx83pbT1PGinJQCqYnubemVAjAMfnGNLWYQkDmxEh9XWX8iC1kxw",
  "key25": "5JCjminWDJMMwXK7aaFwFGUNYgdwdttyuGMUCcpg66EEVHJFV7o9MVWjx76MPukMmEkvFPxAkxFUx6SgekWUKm58",
  "key26": "5JAUL8LLhRyttGM6FB5E1JsA1r9h6ricvs6nZauihdTSs9cXSuPSprUnJoovK1qmyYxHFRk3KScXLuu5JagNvNBp",
  "key27": "4M88cyZ9Q2Acnw2VXJa2hkD1o49KYQwpXyFxK8n9BziWgYpyKRkn2s9CjHKrtqpWi1QgxMGKAwvVKHGdAgYAnfSm",
  "key28": "5432eWAFWy3vYTFRcH3JtF5vdkMKQzAUNf9SfCdKz5TeiWua34SRQN6zZnHcjYSQgX3bQ5rQHQnX85UAR6m6Vbwo",
  "key29": "2hnJGhKuRTQtrrG97CNqS6dz3Cwknf1Ts2JZzXFTefwKszQL7fqgaMcebTXH129vtwaxqBSQSCTw4sLc2WTzJaUN",
  "key30": "vKjD4jnmdQCB6YZpovXHrDeEsiU88Kq4bncgNSp9K3bFCJQD4xxMdouXwv7GPb8qyxj4ST8A2xLBhYSeeybxHti",
  "key31": "3TtuGTK8p9RkCvoFmDTVxaVjZGum5Pss6EHRzw8MEvgvTz33v38X5peqTPHxbkpS7hZGDv3zqceSdcZt592PcFJj",
  "key32": "4ipwBCK4v5L8YSPAX5QQ3ayEA6WcuKh8v6HBoF5x8TuqCNGSb7MQJxmfMJm9PQWbTpxpsffc7tvTRiPpynX1RhFz",
  "key33": "2ZeSWjp1G4rFyeEwcfYmLH4KFDdvaQqeYTzVDqT3fsPYpqy8MmrAWeh5SFyvQEep2mowFb9fdWXGqNP55kKqk7wg",
  "key34": "5z4tCzihk6vwxcsg8XRvdp1NaD7MgeuS4fpqinsB3p3hPCDFZiLYu9aRRi6CQSweWhYjdJdxSQ5yS3m67JiBvbAk",
  "key35": "B3HbakyH5nzPiW7ookeTcYZw7KMH7u6zWsoRFLazi8oYWfEikJ7Wdw5Mx8CZSXafLx9QLFiNkKhpV1o5grWyJwE",
  "key36": "5x4YUhRezsgJE2Te1d4inmHUw1cDkZEki2Wqh88hqnLKGMM52kJRMMCgVTvmthiybBkuNor9Fz8TUeaJX1CvsGqC",
  "key37": "465HCVwkBffgxwMGVQnNiQb8RyUyaXXZxy5XSxunwv4Jao9qaCeNJF2ZkQj3F7qsTcPVTnzFU9eEQ4w4Lzga5YnJ",
  "key38": "3GUQCxHrPhnKvUqYZXguPhNMy9nufDNVgPywBaPbALPK1TJTwXz5jFP8Kk3UnFL1NPs2hRwZ6nhDNV51qxN2B8Vr",
  "key39": "4Zr2cZAojXgjhv9PiBwXydLvQPgg2w3jnSRRDHnFPTTDKqNFi4PxkqpHoMFf1qoncMMRfhx5J1WkPBK8kpWUsqKw",
  "key40": "384ZRcvpv4tNc52v3braAdtmJq9vVqupUQTKg4m3d5APbPAgkGjpHX6S7LaKuU25z2a4kZVHdNfooeWFXQENaJKi",
  "key41": "5KMeRAxXRj6ASaEzsQSKxy2B4iWHHt1Rig6L76R48DxNG8U3MwRqH5KRvcke6iNM3J3xVG4fssFuoz1xkpGqqrHf"
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
