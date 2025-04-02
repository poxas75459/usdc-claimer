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
    "5iorqo5UfDA1sVaSRYDGFxZhw6zV1ofkUQLjZ8HkoAht4cTiECWU9YKypwByxE54FQPSukJVJ5HX3cK6fGXS7PpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLZNUKvkN62UB7i14GdsdnkzvtcdvR7LrkAizj9z3ss5CgmkGrvnvRetEv6X8brHp1AvtoGwjpqRDRD4f1ydiX3",
  "key1": "5ofQ7HKJFX2Jq48UEyNrUzAHFDFVU9SgY6YRkxH5qCg2ZVjARpcrLXF3XbU9riv8xkSe7AVQLex32wySMqxLjcb2",
  "key2": "4TsBoaB8vFdKXFsnV36L1pdwtLW5GHWugrRgNnb5m8f1tybVazVRxAutsgHjZw8xGmhbUTD9nKNNanKzfDV4tCJf",
  "key3": "MmJ4ZrUxvrF2VuMxc2Lfi6wBXhFNKnmL2L8Qnt8HxHcpJgsZ8N4bh2hXrykb7kYmbpiTDvxGnwk1BubhCkQkPi6",
  "key4": "3Rzrius8iqrsPBrQPmidfpAP3Ypdrz1hMAfyQXRPRMpvsHx9LqfAsxgy3BVCbCq5PXytLK6JkeGfyRS2FqTrQC8J",
  "key5": "4YEvGD1DBcrWU9G72tcBrLgqi4PuMrhpKsZr8mvcAYRqq4aChFfqAqEKuTiNrRGzZTCD6kYe9e61G1B8WCp4xeWs",
  "key6": "2zbkvPXLH18FnjhGar1wy8Uvt3BCkcbc1Vn9ehJVFigV57VkcNEWuUwoWdy6XG3F3rHLdJfG7Pmqu9eVBq4CkH1n",
  "key7": "3DiV4FzjKC3P5KAsuwH2EopXJhMFMUhxLBwywWCLjEC56aHEqQ8jD4NTSVEYEnjenBMuD3q6vTFG97qA7HojdQc9",
  "key8": "43Cf76hNWCsx1U1d8dDQ6mrXQhbK2Bv64xEkLewT3ZnzakYJdSjVpktRHwTWTwsys3VV2KpmgatsmNJDpE3uP8oP",
  "key9": "2KedSjmgKU8rZh41KsxDm2HqdSzVUL1ZbggiHc721oFK2RyJSJpdvhxGTSYuMVJCNvRAoPCy6XiGNDDiD24WGDMQ",
  "key10": "41MUbdqPHpJcmCUbraSNgHqYAobGvHMVoPxFydB58QEqPA7UQT367C6NFR8JJfFJhCiSxBL3XdcHY4FXuAjwbJ6o",
  "key11": "287ftxBrQQN8T755pajfw3cs5F35CocNQF6b7mxdEPN4h1pTrDWw9TGEpMrqemWZ21o5ezj2hQnzeDFiebkznKmL",
  "key12": "4kcYa9x9okyCAkM6KEdoz88uWeHozvpJdqjaaBUe65FHXj4h8gpRQXjzbSGNaJsj9YfHCbwExBVd64YJGzh6Pz4y",
  "key13": "3fqTGX4Tv9iatanAXqyHMR5rN67xYHXSF97oBipdN3pcipGdn5Wc4fQnxyb4W5WwwLqRFisCTPcX5DQ4TQ1pzFRi",
  "key14": "3ApbBTQp7fHCFafDkNaZhzfpnHCnB3CyEs5pJSouNp6cnLQczebQBMafW36tDhWw5waetYDuLttsi7v4jCR9yyWM",
  "key15": "5gfDC5qHQv7syq6yqegPcB52ddxr2AjHBdNRDewppyJER2NuCceZfmRqZQHZuVeyx7QMkXbd3GK64eW88ceLFNPZ",
  "key16": "5b2Xu9cnvcnvAP8fCUUybFMC3cT4bumJJhrt49FmazVajSVQnRhJHc6iBZe6CMMyhtTXth9s7ZUE71Uqo1NghLMv",
  "key17": "53StveqNej6DPeLsEY6NH8jXy9V99L2UtBjJKf5jBvywMxjouQmG94seWM1YsLyc5Vz11NVs6KPEFkxFFHanpzzW",
  "key18": "3SM1js3DqQxkG2n6umo3f5KDPP8qFUX3UzfEwAFtPYeuX8GsggURMy19c8rSk1xSavMb7c7sj5RKLMEVqhGVbzyx",
  "key19": "tywqwA8VoF3fUvFNChRurdy69HVcssg4M1Udzam6z8SP2VBmagNrc8hkFsEP9xzxsiPgUsHVHjtLJnLhiDHmPK3",
  "key20": "4T8ZLwetuoHqLVehW4UpWGuStF2qirmhsdo2h66iVPiwfx41W9zXfLcYywfiDzK2vp9PEP6TD1c1K18CrNZYQkcN",
  "key21": "5egWaPNEjs3Pw7mf3USgXnsrnsggTUonMisgMsLL5aqbHm3abwUHYfKYCrYNz8f1EN46pjoKnqAifpYKRwLnAz2m",
  "key22": "2qc1h8oUxmU97ATSUKqATmUEw8ARg49Fr6zYGpgXaMSNcWP1SR7YXK4osH5pzjjZ2XNYXpTZ3YSfBsqpwXMRowvh",
  "key23": "4ZK2RzfQSF1RfcX8UhHiBSPnDNtSn2VfgJWCLzW9sMoKmjmR9JjabzBSfbiTTjZ5xArKWmiufDcRY869QJVMGobH",
  "key24": "L2VC5KezbhKb9nw4KSDptW9zjYXucBpegzwnBPFpmyhqMueMFgMxg13628FrVGQJ39Atiws5hfHa5VLjktjUfsW",
  "key25": "56t6ZjseKt9yihmQKXN9oCPZNbX2PK1KDzK8Y6nytsHDBPzaPMit63rv3qDShQeqsctDXs8vZNtcwxX16MmwwGny",
  "key26": "3bTENfVc7sJjk89jQ9tg2VSepLydsLnLGEap8fCiMb7XwcMsQcK5ZjKWux54PNayeXcC4Mep4sh1aCmXHSAgsxTw",
  "key27": "4bfoGn9LizyA7y2cmXqtKLAgaQAiPtvjNcLVQFyLt8hgHjUwtkxMK6EX85NJGW1Lsf4ss5xR1GTbNMKyfSvUj3Q9",
  "key28": "4PKfcMx3a4bP8o8MXHmmMezigPmww4YLTPN45tzTKHS3x1Utvh72uh3dgWVEedw9gL3EqABr5GMzPYYTt3wsJfXa",
  "key29": "2U2fTyxvtJHefMUavWV7XJenYqwJNpMouXeakrZxoDkqKz5hN4zek4nvta1UCZQX6A3XMFcS8gctBVga2W6U4Byp",
  "key30": "4h6nxGeSbyLdUzBp9G53aiGPPF6NaqCj4HsqNLH4XhWBQjVsT2zXDNDUM2JzhuRnw5D4dFjL8atcBVhvJazM3K3L",
  "key31": "63UH352TtNidjLQhtjg8dMBootqua2qxrSybiw4kYCwJ8jPsRfGNPTQBHFJ4zYeUoNTbu9aNDg6L7GjNBJdUgsaz",
  "key32": "5RYSyjQ6rGxKrzCkRaz8sAkPEm6xwp76e2CCHKkuw3wRHKQ4N1yaToLkyPfFhUzuxEeFFLCbPUCnWqdvnVyoxnQa",
  "key33": "4JyZ96ToJea6UuhQcWCz8SCy1bZaMsX2BQYzpewBo3sqFm7rLSG9GThxF9Y7svBamzcmNtJbMRr3QGkSshdJC48Y",
  "key34": "125rhJrF6k8qm3qnpzkBsCYsCz5tKmHgriTGmTFFoMdbqpZwpZmkmtUPvUyVkYS3qL7pT7ACK5gFe7T5jNe8PFYN",
  "key35": "2XgdBUb2aj4SS65DtnyHaJUNJ8CYhup1R9D96Rbjkc2fnMQgF9L7e8Das1Npxwe22WtbP5ioB4PSpU16Kb7QHN5F",
  "key36": "5aNGTTKKsi9XJwNYtAnsJQ72QYVz8zVKRLEfwjVS7znomioJDwbvUsNRMLQbSMWaMyLQMCxzqEKqGKbNnRkUfrVf",
  "key37": "5RjtkUi3GQGgQEk8kE4ekPvn4jmSxjtLBzghKLvBVHkab25iX74mPXxGgiTxYW56vNkorJD8758EooVLX7yDQCSx",
  "key38": "4cDtj7eaENC1UZ6XRs6S3TmUQcxon8u9WogEqEjtW47bMKxNskjy7tXtQYwmUkYZFHj6M7C6cB2bquaASkXGXgcJ",
  "key39": "2zkFhiTS1afAnrW5TcgkbZDGMyceeViXfMdGCXwYBLGCgaydmLAYpR4YdN9gQ7CQEjpdoHAYRfnj6BDmNepNPJaF",
  "key40": "2F3yRJcpHLSmoE1YXP8fujWjhzoZRVJZEeLAJxMWekxsEge4nfc8UPtqsnLkzTdz9Dk8i6boGctMyKtXUScXcqAa",
  "key41": "XtKC2J1tDLWgmcpSvdHgHC57zaheufJSzXotj8v89dpRMvVxHf5jLCyRBowczRP2sMfGLpSiJoubrW7ZoovwDWb"
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
