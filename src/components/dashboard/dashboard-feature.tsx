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
    "wFNiKx3PjHX8VqU2LbEDJgctrnsYb2ahMBodsXf5g5hGf1r45YrewWd7vLSrjsfLtxe1wLpiwPKYzDbdj5DYfBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtmAHzHsuA2vpW3ryARsPuEfrYdhuh5aXRKZdx7WF9zvGjaGRoD7vP1LxMJNBG5X7swLNZNXDpRoL2bcmNtZDVW",
  "key1": "24Qn6E289wEx6WCrA2U8jgBr7VpFSNrSpT1oyBUGcpdjjHHmzJjgmf6ppA44MrBb8qZEySrT574XYQLDJSxKD1EC",
  "key2": "QnwvRa31GoNs8Zo7uDrjPeBcAuTW1ZZmyrktNGxgym6jR6MVgftX4iQw4MJkAHQg4pPeLMahQFWCWvAGtaXy1G2",
  "key3": "3xH2ycEUXMAz9u6Zk34RJWaipTnA9iw5PdvEV3WZLCRRygn7bnnC5U1twriEep31AyWwgyDeJomm7T8HMStpqjkN",
  "key4": "3rLNSWQm7M2nBSRuMiBYAWoAsbU8yN32PnteJcFjQFkxUx52G5cndr7nyyLoXWTxkqAVAJ1uK8w4ovnGH8CQHHBz",
  "key5": "3CqdGTM1Sa18NrB7Zb1jeioZLg69ujeLFFbpSoBJKKtcH3TG5ViZ9a1wmKMfcPWnHUaEBqMy8B5e5FqhYRKKDu3k",
  "key6": "3YAeKXMTQDjxxYU7yTDArZS8urbfZafxwc3xUaaHkHUmjFBAoTEyQABtFQJS29FsQriXKcxv8cGB9eUDuQV5vSok",
  "key7": "uASvKVjEsi1ZjJPrtf8s3PK3NMQ35t9BopZegqiHmYizz3YkjdHKdu66H6fDSbpiKXp4qAXUsKfUPa8i7p61jT6",
  "key8": "4ajSqSCwTDqNLcAZxeYsJCVLHxabswit5rpFHZcVHnuCGHXU2LLLCKeRgxynKS3CKUaWqXywghqnsKEydnYTxKqG",
  "key9": "2xvVb3MAQUuuv2VzAJzNDxmhx3FV1aRmeQdTQinhiyzM9AXPBTUQfG64mSR8YbkgusYtiKz53DLHNvLKMkeWkLTu",
  "key10": "56cw7Y4S2egkW4mBvpSuXgcWFDyfLcfvYSSWqfPixBXq8VaxGbakKttzfoHvMiv8kg2jL9U3NztZU6pNhEeuX5Nd",
  "key11": "53kdxYL1p1F2VRoacHmBCJ6aBmbHUE9eey6tRzJNwF4FcrFB1zZeNdunKC1sA79kaQJ9aVGCwRxdvgQbmS9JTSt4",
  "key12": "rSoxeAafaGDdaXZkSwakanweTxHePetkBDiCpqjfNSWfPF5YYAu8D9BBYfUeeJGchHKGm6p647C8YnwrBpAtzPJ",
  "key13": "2gnWsu1FbcG2S5V7bsQERsoCHxn62ou3LiEBr3VXDKezNHnZ38ZLQPsKTekLy9hfKEwcSi5LLCtNG8esM9E41Bjk",
  "key14": "3t9w5L4J6e4XYcyiZ3Lmywm1iXkk9zS5rM9Kf6d7SxgSGuYjve8RUxi96KhKwZAnnuSQpUkhDLMpUdA38YocDoLV",
  "key15": "3r99KYS6F1VGPi7HM5M1N1FraZTaFQGAW4YooQnUMXgdBjN1fHp6eeyFiY1E3LQdbvmqGivNdGkwW4mRMoFgXcjG",
  "key16": "2mZTF1fFNbwwReRjEAFDWWMx6rpFrLNMgY66JdCCi8Ck9CRZ6npbSUHumqz2iQbLciC7fnsMrJJWk64LHyZEAXpF",
  "key17": "2aMFay193HmM8dXRF3sjzQRUdQbik6E9G6K53twxPU8NSJDM2Nbtx6GhyH8zDxnNzJCd8N8u7K5T7rYZFBNU6LB3",
  "key18": "3sSBQBQVc6Gkt3PMQcA4UJqYQkYRHCQT1b2m2cCakVBDQTbmCfzYx8rMA3gXJmcn29zSpNuFQP7crV7JcVQhboz5",
  "key19": "CMqQS8CgfdxPBZePY4JGnEmW6p63rKVSRJe9JFAdBKxeM7PxDJm8wQKx8gZNHymnxEcgmvjGRDx24yRuMJvkofP",
  "key20": "itHhocUYpB9QYEzQAZB3Cx25hHaf2msiLp9EfhaJpJDife5oCuN3CMbRw6kU4Rqo1iEu5J9SQ3joBT5tuoyJ2hf",
  "key21": "5Rn9VizZAVnShFFL2oN1uUTfZ5ZYuWdPtXhaMc5hmpN7U6nqZTg1iVnKLqcLDxKoJzBVNjdVru9RreTVZ3Fva4T3",
  "key22": "2dCohELg2iYje8ijgEZPSzV6R3sRMBi1A8zTdadpd7f1hYpiEV4zZxpAL5Z8My6ZoDn6M96B8VAgsQVYUdKKZ3L4",
  "key23": "2mHE2Bks7RocytfvnyNcNWPsP5jxFQL67Qn41mCMuiqXKtQ2ifgLV47WpRhz891SDh6wYKyBmv42z48nestXgt4J",
  "key24": "2wHC7413udWRwBzS2yr2gMVfrcys9DtS8PWUpDiTQiMxC8aVwfD4XvhGRNW6WCYubEHSUgPSBbuWHgSXZrNu8E6b",
  "key25": "88Ma5HRqEhLnkWjhQNHSWeKh1xaN7FwD8NGyzw5NRqWqR2hh7Ht5cYebXrUmepzULJCZwXvueTBawUHZiPwog2h",
  "key26": "4kxFWX64DQsrNVoTyptXTiuDWyY297nSWbuAeBE21aAWnrcKNYaEKPWU1Zam5HRAqyS42zySrtEVxfmFDD632GTw",
  "key27": "i7LkvAD7ZRZ4fAr2EkLYfoc3TR1hvHwsrJYLhjcJZuy2uc16n4qNfLgzAFerUtTfmmTd7RtEK4WK1D57ErhMLsq",
  "key28": "31FmVq4da1nNTTRV3YCBmQA1TPaey7xMZWHoCdEPayrLY79tsVNxURGVA3zkL6cn5kM15AKDXF1pLkmTNBMGj2bZ",
  "key29": "5qpzdh6vzB18sdSpqWZWqVhWqqfAGHw4N34tGgJqtQh6oZWowhFq4hnTyYsiouqcF2DHZX1E5wQzR6qvg66qnKnc",
  "key30": "3TdPkzzWyTgEQN5778Z1gRe8pFHvn9wdSn16gqyuJVAvccm7T9DT8kJLonWTtZnXZfAJsNdWfJpugwAYxycnQfAX",
  "key31": "4hrD3zjmj3jPH5LoHCS6fZ51huM6vCJ1ADjTSvdKD7fTZot6DZiakGG16TkjicYFHj85zitpc4smMxc6NEtavzvN",
  "key32": "27Xonw3uhbFyNEad3s8E9CZK7g5pvhtVS8oqNZ6d17sTT4ATJuoe3uk3pnQFKHQKfAM36AjzdaT7UUrsbJzVSi1o",
  "key33": "67AYuKXjTjUmbTWPy429STragrSEhtmV4a4i6fjzQdQ1BZLFzfyWJ6HyKrDYFEjstN7emThf5LqTmWgiqAr3ZAHn",
  "key34": "4ixXofKHPuGs5AC7HpGSHVqHmQ7B5wzhdAcXoDyy3z42KPVwEHFrLku3k7wi1JaC4Y5ktGPsbo5rHN3j12g4Biox",
  "key35": "SMLH2CCy9ygnVdptfSK8gLPe6X6yAKkbsX5kfS2XaAVfQ9EFBE5tg1NDLUC4Qq7SKXMYvxzX3W6YxwCiyYp9TC9",
  "key36": "3zR5aepQe3zo1sG9LLRNQ4cUvGsCPUL5LjAaus29MqMauyYZzR7WjWo71rJucJFQYX9rZbLo4EnCc6ExPaQpwKNs",
  "key37": "21TmP49vpz4DYjERMZ6Yz8HXCxjkJ1oaDnf2FeYZVqqC3TyZELkPtBtHmmBmV2MszjL1aAVGRtFPQg5635xQAsxU",
  "key38": "57RER5T2FXxXTsnzoBisyLLnd86JKtTr7pjDJjkmtoGxWLn3b2Zudd4jKkXkuPxPW5xCu62sf7tUQe5AJiMTzgXZ",
  "key39": "5X41XaY3eoGxJaSpPzEWpP4m5pcAeRCo1rppeYiVMVeeqzDFUfWqV1NSiuvQ8dxVpKbF83rzk2A3ma544Kynzb2N",
  "key40": "3zEqYaWa1CwkhC5sMMPGAoir56Z1VtcivmGTx1SkaoaaSa86U8ve2SiS2XUFBfpMG1JPs5T6Tu6gRyWdvLooyv7W",
  "key41": "65oiEzP3VcxdtanvrXYQ1adWBkt8oGLx8w8M6MWj45kG18RLCRYsVmaRVeuFsHub24mb5wm9yNZAQtBzrmCcHN3Y",
  "key42": "57PuSnmVV74JzemUSqt29tQcN2rHZUJQgm6UoeYn1v6RwLDF1E94WMrd3zXzNJiFjk1jebHCon2JPMrinjkvGyDp",
  "key43": "4kDrzirtEDUyb2JRHPqWVX88TedFcexM9sVMkJ15aiVT5FdLJCxHpUQy6xyfhXZtYqQ5MnqbsoWu57CGwJAYfha8",
  "key44": "k41WJfTYjKPynsYxdXb7rDJNW1VJpXo4ofmW6Nmqh1jmHX1DfNDs2BYYWuefufE1SaTaFA3gTkm66Ezt6pETr69",
  "key45": "65UhdfUMiJc9kAXJZ3QDv53PkpFqPg22Zh5PhVRUSBUnNyk6MgjRQsWrjAJ8u5dcmvgSyhuF4CSgcumimF6qfCgU",
  "key46": "541uBNPAV4zP2AzfhgJV9dAo41xyzrUGYnpLJwLV4fnW74CxxxxUcoNXH5Li6w6GuSqGyU3tJgCwW9xV7XmC7TQV",
  "key47": "5gmz1nnF47SXyc3Ys9haHPgMDS37SaLGzYLLUcPRFdye3QnHC7RG9ENiU2MJGkpe12mV7AfBtEyJz847ZRpBvZnx",
  "key48": "2YF2VKJVTXUE2owym7L7RbhbgcgZ6ykN6tofEaeYxAcvaGUX4bgtBHCouA3vjgsW27YjNMsqoxXczcQbnTFVEVLJ",
  "key49": "2v3pMLC1m3EwMJZhQueQPuGeTqXbRM4ybX25KAyp42YjpFNXN3WPhYyWhSiSKk9xpUb9G9Fd1BqgztMzhNKqApN8"
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
