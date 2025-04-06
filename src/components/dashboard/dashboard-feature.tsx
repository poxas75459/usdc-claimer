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
    "2q66eH83PWhs64WNwxoPmP1u6ti3hJR8eSEDfRdxu3zpT5pfRXWbRkvAhjPVTxXx4b4wFN87QhemW2Jz7MzS4wnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5job8uzfeZ9vmjuTJGtHbNsHvzNU27xtQVnC7kd2FvL1z6jZzLP7XgJGxiM661y9EwFNhrRkfDagS4KxvqUH8VaP",
  "key1": "4gJsNMBdsP2ueXk7s6iSWfnxhdgAWK7MoUF7PSBuGiHHpWRkymktMK2qEQPz7aAFj86225yGhhbJxyyXKuWZAkBv",
  "key2": "3o6sMoqyGQVNQrV7qNJPqpzc5ut5xk7HuUGS2EmJESifwbiegMvWpEPvY98XY1ojXiifbFtmNeSNaKcgwfZitdZH",
  "key3": "4oVp28H1Nk8XgeNnKGzUFGxnxZAZaB4cM2Hxt87bna2YLi84vjk9sE3tLFkFGqtE2XCbPVwg74oMqrSgTpgoLz9E",
  "key4": "4EiZMtfD5xZzTuN8dzHHP9MYhCWhHqwX8Ny2Jx3V11mMg3P3Ltd6znNxrhwK1Yo4VZBcWRwFRyiyR5KKiajR3oP2",
  "key5": "ym6UXJ3fwfnXNfGbYdrmWVGy8vtHSmepzeAiLSvB422yqTWqe3hthmFEWAfHWqDdR1zHqg8PuuF7LrHfY9y88BD",
  "key6": "3MhHcfTu5d1nYBaE28gQgEvQJvnmGsdaKPM6yCypsaT2mNoNq2smCLxKZ8jugz5Hnwp7hjwkmR1fUUtWgsWNR2Wg",
  "key7": "2kohE3pw4T5YEgSYNVNZa6kWCDHLVoR4r51r1EeBZThuEtRDYVuqYxFPS3hGAXGsBCdrd2bPBsPjsCmJwVbZk2bs",
  "key8": "3c4W1oddoodt9mmCDS8wPjvoC7h5of4vr2ip5NMu5Sf5zHN23DZj9k6HidTMs1msv2fmVwcbQ2p9LgAcvvcqaDkY",
  "key9": "4KzBZkiikuLvaCjEt3gSaiFX6FdMNe2FZH1789hs7vevNQhscUBKYUFtRtQfLfE5e9ZD5sKb7JqH3YTRniEhHNPi",
  "key10": "5uRzrncubKhGNZ5bnBG5bJpvzx2AWLk3f5NJg2HUo4sZEBs2HpnoYXZzuzVS1YvJpHPAiX6bUef7FUYFKorQJQhS",
  "key11": "agVcNowzvSpcUVgV6wFzXKp8YN3yWjqA9NZjrmUPSuzfWqYN1HZp9P8fS5a2zGJgPukXNTkXi9H2E75Lh8J2gQy",
  "key12": "LFG3WV4h821EBtpUdySFrijqbuMb6iq7ReL8cq2cv7e2QWCRgbnin3mTjubyoG479gLFK1Gv8dRLrHSqevNNzqX",
  "key13": "SBj8WNhqPq3ARrp5JGQ56GHtH6wKX29QA5V4kauff3WV3g3GzVCCNPNjx3qD2Eem5SLXbj4nZWjNt4HppY5vTqf",
  "key14": "2M5R1KErqDtVTgnwcF1rVcp5hr5ar2HhZKgtnBuiutxMK2zg72M8RQcG28aoWEqZZNbyBV1Jhyz5mCrAt3bZHfG",
  "key15": "5nfAqiQUosJcGoVA7vV79Zw6rqVdjg7pMdtrVRXaB85QbVkQJygJwSwrg11YUTynP4ZMdogeLTNAyjVNnJUs7Qcb",
  "key16": "66mxnADkUHR9wMVwU1DrQsDnaKKQKNUDH7YXSzNijJzRhbMFdSbH9F81ZBQG9ZLZbc2ggv8jEqH1Cr6xx66L4Qbf",
  "key17": "HFMpcSixjoQh4Hbh7ZrJqKcteNMnzzDWMrvcMWTafrefw1Ye8MKg2KjpAayTHdUHaNU1kdn9EYE2V9ZAePRweap",
  "key18": "5iv9YFTAmoppNpbS7mWgoCmCSBfU45jrzkUQKwLuYexXqYhsCvspWGDpXbc24uGEYiAQdHXCCs99NxSvkd4BVHTw",
  "key19": "44JozLk1vovRfAGuBQJ7R8rFc2pcbSB1rRxUZzh3yG4HSnUFYzgzLozrYNZxKZpkyrGKjc6aMVAwEHEDEbAih921",
  "key20": "29QMbQwPLu79u1xa1uN1KJX3fxQhNG1qwqeFusUUDxk5P9K94TJdyF8ujNsruUiyTGT8xJck8nBvGHGRvmydZ7ii",
  "key21": "5ZV8QD9Lp9XyJUGz3HMjqG4AmYN4mtbebpLX5qY7W2BfTkMwBwMoxZEsG7BGB7Hu9JBGCqfyGHy2fsuBTkowEvgd",
  "key22": "RTnTBPnWJBgnshMHsoS9mUaYXtkQ6GdcBBfHsGxXFBWYTCMqmobK7WB2egxKUGqEcfxaQkVCirv8BYW18YRXTiB",
  "key23": "98tJ2e2iKDzSFCpQqzcxyLQgJffe3eiXzH5ZfUMHzGnyVeaH5b8eS5gSiRJamA5sgjMFBGhmhVCybinQmEMAmtz",
  "key24": "544gUefqLgxGuHSZGYPuWpoBFMaXwdaHmwzLVViyLnoMHNkN5Xc1sGsmnnnMbLtV3EKFwBSrHm1wiDetcSZt2hSN",
  "key25": "2ARWWXys2kRK9t3JyXKuDj35LbgeoShUMWbvTTjdfdpqcP7iaV1id93PwsM7ADk9ZDEePQJAGbdvPqNrKx3Eiivi",
  "key26": "55q3voUKqmLtXtGnKdPCqq3PtVnifsvbqoudUnio9PtS7gKzoK1nUBVwFM5vpGpPMq9BoYKfYQyaM4CsLWR1GMkJ",
  "key27": "9tGftNvVBcuECj9tWUQav3jmsowYi6H5C4HUujVyaJPKggF7JxzixCy7jVZ5DqJXmQmmcn8yn2n7Cr5hjdr5LHd",
  "key28": "64PdhvFTKbTWYCPoTZ81DjM5EaEgpY78TPxYRvbfzmqDESyQBQhmfi9ZuLX41dZfnYS3dx7w1VGjUgRHULAXSsVR",
  "key29": "3Ek9z93LsnwkBDWLVffNrpUKkUZShEYzL8KfawPiaqbm5QiyHcMmLc8gA3iWZFTK5y3gVBWDefKGBptJ1VAe5D5N",
  "key30": "67dEjGGdY7CeRMD75fhr9dGwHuicMn8TpK1pG76QyV1spM3AdWFbBbbeoc4h7GpvqzKe7LadvTDXtiwRBKxfk29B",
  "key31": "2We3AZUqDGjUfz8ixQWukd6LnygS4asocXRftSAv7xqrMpGew3pZXZPqo6W6qQQDs9q5KpHLRkHQ6rop5SHv8VGF",
  "key32": "3u8F7c3Wv2TqnqaK4m7bdU8voBQhFSk7sj9Fbzqzt1JbDh1GSWWfnrtw6bm7W74fUapAC1R8JtjjQu4F6hmzKCEW",
  "key33": "2Pam7bKCKYQ17KrWfuMaVLr7h6nDXKDq1aGQ8co4vq6drHrRAgYYXrfV185dDPB4fmESkUcuuPPQF4bZJfAQ4wT3",
  "key34": "23MB3SuBgKbqKTZvyiu8A6g3AprnxHVGeFAS2TpGc524YDQudptS5MNWWf9LNepjkknsSreGTY5jyVPo9bWADVbB",
  "key35": "3K9eVvHoeUDGTWyiMJkKH8mRu5X4vCyYu5M8VTFU2QUEwzunsbWLMqiLnM5R1bDHXYiwcqu5izR5JfuND2hBp8ga",
  "key36": "4fQXSnp5kqkhvbCgKeNbNvMvvhJXDk8ukHcrET7aghzEdDrNAiGrprEnA6DtDTC3PJGJBAUiB6PPaetYVxmL4KV2",
  "key37": "hdce9oTfzCt7MwA1oeg2FtDqKC8zh9vVKkkjipLQLAqpDWzhPmz9ecxJjeo6Q7S618nYHsZBeozFzRtq45f3Ex2",
  "key38": "tHVHsRTFnfZc2JVnbAzqERLkWarFMtmDAYJbW2LFnthY73PyemyECPwMPNzEjCWEWjMeNSNdDTWLxrK8Fciauyx",
  "key39": "3T2vdyiqoNuxg7wyKuDoioraebYAfXk43rJVKc2L4cDepqzMCEASKh6UNLWpVvEE5LLhrWLF3j2qwCF7m5vDWpzr",
  "key40": "5cNAgsE4gN3uJaZaACLqTtrENtYPTFyx5bbTBNaqTBgFZ84ATDbL8p1Kt2UfVGxasFbsUqjHsuSteV8GZjCqGwbr",
  "key41": "3D1syTWG7tB4u6gwoAtZaxzaMz3W4EPCFDjN7Vi8B1pA8VnVTqi7wFdxY48CQid5BdLc1ZLkhACrMt2YTYvK7DcV",
  "key42": "3os5qfm67qXkfCHxqNrU1sDcsCDNF1w2kdCCVp57zTbG6YzCcJkWc5BzVg6cLnRubSkvGGM9KrFtGijAA94iLRAY",
  "key43": "4dwrnyWLzAtLXMqGCfgnhYDiCMURC8B4m6ks3qwKxdpgYYoABU9mK4uxRwcKMn4xA2gQ7fZMYQvCbq4LF2RXBzuH",
  "key44": "4Lomr7ycBAn4tEUtEivAu2E2ae9iF5MxaogzMqQ9kFmPHFKBcTsWx1F1KsuYtLQqFNVijzXZuVXM2tDYrmWxFcfF",
  "key45": "5j4jHttZctnhxTKpnsk3Pz36jdZvAAcrQ5txBEdEUi52rjWYffACxV47eCc2pEeFKx5qEZ14fjbXDXNuJ5NDY2PK"
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
