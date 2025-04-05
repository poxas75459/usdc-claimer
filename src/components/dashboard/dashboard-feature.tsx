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
    "Zyk3vtn3CjKrGhsNDBnMJCAdn9jBDTb91dRgcWEkAk2hRZgjmSvtZQ23xFHSMcVFX1t2hK3Mj2NwN5dnme54APf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFs5efWsA1AVgbEQ69MQMaTzMdyAyS4CdngjbWRNNS9tYaeTNfJNFSEjuqNTHYG6RBK7yr63Nu4p3qhHrU3pnx5",
  "key1": "3bqVt8EbWg9uvy5DixZ9zYH7LLeoWdgJ3bxcgHfmNKNxFuMicA1m1jfaVK3MAXhN4Y8qeqYP2nYGUxHRL6WTnzUc",
  "key2": "5VLcvSmdPaeZaDFHWW5ZJDh788iWfeovSYfz3XPJrqH3SjrtrqFJKWhqWTgWqFxMeETLDNUfkN4CLCCuVKC4jCFw",
  "key3": "virjKUAxo3nGsDZeMbCwHjcNR6qVDodnJn5hHTSjYB2qF9fXd2bjVEYGfzc86jmbEEKjQpzQNiJdo3DZFaK8rFk",
  "key4": "3bXWCLWHL2JMZWEsL3osR93hHVxvXQupgALNRHQB49NWT9GdsjkQiUMk4mVzWrPMqudsgTWY838A2Ubg6rFV4bvL",
  "key5": "5G4G4kgQeWgXJNfG9gVoWTSJMHCLUP8D2bGnm7H5FyZgxHGfNMJaZrF6VxwunSLz7mNvAS6NKDg2pQxzjZkD8zCA",
  "key6": "1srGAYYmeJQAJbvr2SvNVYbhmtjS7cdsAvQCemrnQ2QpxZPP2653THg8XokSwdgdKN7SqpfPfNdNY4KAdahfno4",
  "key7": "51RJG141Cd4yriRk9HWQ6FhMnGxMHPvrSxBUkYihwKobHKQkMKnxqDYfdb74gAssVLJCTby7aovUhtpSdmcaZcpL",
  "key8": "42Bx8YoLo1areqC7x9TTnxnPuTgKPdruDLrNzRyijNUUmS6WhFEjYSog4kmApC5HunDYiwoE4w6dGWUZ75nLi1K3",
  "key9": "4eU7qfZaxogKtmdvq6LqdgpFsrv6F7pPbm64Vg39Bjh5WrAg5cAQRVqvhpZsjSN5AkxKpsaHnL7a4UrX125JNSAG",
  "key10": "jPscpp6jST8u1RT1C9bfCQbTQVe33V3rBTgYWhk2xPFZz9htSRQTEzrHN9tWKCGpyHWb7PJhUuEHpjZiznkpGMP",
  "key11": "3y69vdDW9WPRtToHs1RvixRS2PeTnseX86Jk8Jx1j9ZEXxZ8RHCspq8gnJW8ex6mTRr7PEHfgMRYDTeVqEZu8BuN",
  "key12": "3yctq1WMfy5fNoS2bLT4Gz8KuTBZSaWsNgYEbWmvwjrmJrfja9LUwYmq7sRTDmQxS7EPGH1wL4y4grKFjGWsfUMR",
  "key13": "2eW45scNdBkptH2bMSQfo7YymcUjY6kRmRzZ4h4LDpWHaVTafhxJE2guynhoGVvP4VcFB8vMn2HqKrfD4FhVA8TC",
  "key14": "4mKuFpg7R6mvbU5SRVghUPMKd7VxTJgSHW8Jj6JVmY6KwftZ9mcudWwqREF7HST6vwbK5oBYAYUaqqwVZmDX9eML",
  "key15": "3opTEMtsBYoBFpn273sJnoPGyE492qhG212TZATEZMnAT5HnVR73riWmFQS5DV26HAaewfjm15bHjKLzskCBnFnS",
  "key16": "3zEu3Tb23ecee4vDiCrNywuYUwAjNG2WnnMtpY4GFFKAqk2dt6A8kWftbE9XGpngcW7orTbFGXeWAFYAfveVvzM9",
  "key17": "4C5thX2xWm84qKWQQsJ1a5Dpoci8e8PkXZdNq4r8RAMdo6GEyBcZ69tmnP7C7GHbXc7CsmCyZ7Wq9vziawe699qz",
  "key18": "3Fvz515iNGBkeZJFCgQpkapDpoWNBVWpg9dwWnyjKwPZusmy3RA6pU4GAdVJUFH3H8aUKf8PkCAwoZ1oyJDxGEMW",
  "key19": "2FE8zAP9A1g7fTju4Xrcmd3UmPXX5867gfcxnvwM3ZCTUcKTnyLPH4jbezgvDd9RkofWiYGyeEcVSHFwFNVS2ctF",
  "key20": "aXJEJGGcvgumvESNfLnqJyrCgz5WApUuWAbXMj1S6EJFNbU7yyurTZHrbk9jk8Sx26Pxac7XJp4BQPYw2maV4qZ",
  "key21": "4L3JZmo4h8TJX6oVL5XyqvRH1FdNA6TXZYybdRCsBMukcYjSyvMJZyEeXobfuaDGRja9WKP2Kg7toBwi6dEZSWub",
  "key22": "5Nbppy22HvnGhGVkTmG8zPcYxx1Fs1F7QCjZxHEqLwu34ccayZrKGo3fyeYmyb1RQiTJpKYApEqk73zvpg9UtKiE",
  "key23": "31KuMUwnBVbt2c6u978i2c95YTtoXtPaQ4dNxtimdLdYuPW7cwwmMBbPMfvcTmZ9g7w1XBfUUmaqaSbdwnpRfC73",
  "key24": "5peT4DAJ7pwNK9ommEiY2gfX3RAHxb3asnMn4iMvU6v6sPUp5yn5eHiuB9z2PLSasX5UakqFCWtpi9oMoKBJwtjY",
  "key25": "2MVGvf64HUErGA1BrtiFMUkoWv4yVJdhTvJZPSBdByyeyRDUVADqjgarhuqyWAgZuqni2YDN3wEyv2oAXbcW9dgR",
  "key26": "4oRg3Uq9EnpVMUZyni5MEtMvgTFYZfnxu8zKvLxWvxQ9tFXTgT4rRtiVMCDcEgg6C3Vg4FseWGsiYSfUV27xfYzh",
  "key27": "3RqnBrdFWvfqvS52tmVzVD1G8gNu7LorxMKhrv4UyssefCchWVvr6KxTE3BUxa54ksVUCNixGxLTAWscu4WM4HGR",
  "key28": "o7utNwFCN8A1K6tggvSdjsRzUaWzb5epem8HQQAozJs5gnQmRTL8rhXSDpjDxhBSGwedhYd25fRS7fgGsKHSCnz",
  "key29": "22f5D2PiKGwRYq19NKPY6BXgw79HXh4vdZCy717cwMEkqshaJAqoLXeqeL3zHsf8xMMewPuGoeswfP12Y5nLCNSw",
  "key30": "4yc6PoQKV2G5m7phK3ByT79HY6dRYHHR4tbJo4S5BPK9mCTkETsz7D2oZCGGob1gH1cfdbR64KrCoBEixkzuDKQ1",
  "key31": "2StPY1X9iQTsNm8vLp3YPMwtZVHRqRHuf3zW9X5v5urowbbQnnp7Dwy5npk2cD9FhoL9QS2vEkDZ4AsgTDnV1AYb",
  "key32": "3vbqsEWv5j3ew8bmWkgDaNmiiME1z7zBW7yEhi363N358c5PTUNZ3A5F831GbwHtx5Mbr7y8GqP18TGMZTEZd2Qk",
  "key33": "5WsPDKKNk4EPHVJedpmQH2Do8jSL6PkKdGhE5jVXq3jU33fojnbRBcwkeoxyiQKYPft3NTwuenqgoew6XPVkCogE",
  "key34": "3tGjCrNXHYXwEeunwUJrNsaWkJQ1DgqAXXHxyv98i9cjWoMuzGLT3kzR6mBkEXNtr5MDo9iah8Myyz2wrtNMyvFF",
  "key35": "4cfz49bokwbrVPyrnGyWa4SmQH2BuLmhf9iDuyKZudpU7hQLTp9WsgXebagvEhzjnCTcF8N5KRa8nVUiwfCzAaRv",
  "key36": "4vskNsFMnwerKCMsYqBSNuGgHJe6NSEcro5nLM8KSppne6TaCevbaSiLzxBw7c8M2rrh29ZdNBFqfNLyZqomKfYE",
  "key37": "26uqXYhEordPLsf3WvS3dfzNhRyKg7Ap8YMWfpp2ktnjp9EAYXVTGEyZyohX2sdXHvsfSsPvQVWZXbhuN81sZiEE",
  "key38": "4W4ut1nUubtFqSeGEmZMyG6ZfsVYmS1zt5XE3hSEQKQMW9DdmCm6BeWkoynyXaiGm6LahXh9UHvsFB5VtvxkNLdf",
  "key39": "5YaGkdwfP4bM9VQBihPQWX664zoU1a4rvZLmjDVHSoGwMEpP2LoQjH1v2p5Gt4EniNUPupYc8XZRuj6A4ex8stz5",
  "key40": "241FWjb5rLgR5tk8TGS5jCfwZNrQC4jPWSnyn8AyKycwSWzHtqJZnKB97uLvytsHYN9hVvKkdqRu3zdNHG5VheCq",
  "key41": "3YmW9T3Vffsx8qkVjUrqHYx5NdhwUmjH6a5XytyCgtqRxV9iVsqbbLeM8tZew68teBJqwts6v3BsEs7yyL8thjrc",
  "key42": "2Wzfgh96csE5AEgF8FTnbjuscYsWh2gFDBUvBWvJoJB1vUFpXLYg3XKTxz9wKnqcda6dHvUJEmsDE7zoXHytDEYV"
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
