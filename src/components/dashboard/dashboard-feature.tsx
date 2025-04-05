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
    "3ZsCyXwVDPtKwpzBKugLrvjCFPRBACdHswQaJntWMkkMWNDzBrtbHpetr67tD6kKU115nd4RzeKzt8nEqtLL16xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLJn1wuW9P1vqLB5rY8CmKeC4moxrWygFR1QuK1wpxCRw3wEHxv3rPRvLRms6DMHANTGu4ai86FvRwQQ19UvEHf",
  "key1": "Jswb6QE6Kt9v8mku8UfRxoKpshrRvq2QVJtcKz5ZFkg78ds6bauBzNYoTTDTYmSFykZbnJYpJ4NmXgqnj6Bf1YU",
  "key2": "4Rg7J4aetwtAZrLVuGMTAWHJcXD7KJ1422Zz1BAxCunv6DjfYHQBTV8gHz4vTSJmcq6F3batnbDXmghcX5ttVYMF",
  "key3": "3HrofbSTmNgk3WVBfVyVrC5qne1qkau7GWZ1d3kVVi2zZypsTzgA3MPS3SpqACpM1z7k3MkXJ4XU5ABcA5VCEKmx",
  "key4": "57rtyYzn75bddhM3upvuVpXMErZekVumgzP6XDQthbaWSzmTHuT7DT6seUYPfMortE1h6wUPnRUHuAxqAmtRGCdT",
  "key5": "38BBvDzX9uFvgf8CsafH599WQMXNahX6PZpH2FPLHVJyxJ9ty4yk2jVMu2CUbYhYdAruX4RMPHYN3ArFvAMu38NS",
  "key6": "3wYqMSxzxpU6YKxdXMbBsYUXcTwBoaZy7B3V2Qxy8UeVYpAAtQi3J2ETvywVaWv9J5YLiwAFRR6KjtZeUJDrXijH",
  "key7": "5MA726r5Lg8EKtQsj8sAZg5xzbB1ZeKCME6vjkAWDAaSqqD45GKrEeeD2MkQ6J7RmbM4xEohzKEmEuwaQdsyafxX",
  "key8": "Qz525sUtffxxdxNdUGxBpPCUkRV2BnBV6vss8Ttcvp289qLiuXGgvbbL2fcpw8yDSL4UwmDihQhmVtSpuUWCQpk",
  "key9": "61qNsCpd5gaUki3VVRNGYjW9rj4Q367DDwEq6HdbaP3yVhoykWq1z1oRHR9yWVNbhSUqufCPx3ytHrRbUHZVdwjk",
  "key10": "3d2PYjPDRwE5VhumpRRCCGZgsRaGv4Lk4qzHyn8ki64Z34WwMQiSLcVdCZDL3cyE8SCwicvrk8pETmbN9TXNSM7F",
  "key11": "2k7MAg8FVBchyFWvbRGPQEQZuZqa6NN1imTfoy8gUZrmez4veHjy9jkjDiKbhk1mBwCUMba9EVW44mZybm4sf8N4",
  "key12": "3GvHzRuYB22ioMoTFwWRdKG61euFrU72cR4ejajwENtGaD3DCJdEsPuQ1NMeXxhPQujbzt842xW3no1h5at6ZvJ8",
  "key13": "5ERdb87uvs66MRHK6ecJzh1oimF5eTTTVt2EZz7pbKY6eQTWvoQqovErxqc4egtKRrkLRnFmRZTL11QJGFwRiycK",
  "key14": "3P1mNP2xWGY3aSZqtvJv9jPLxrcYEKSVQ7eYqwPpsDG7jiLc5CwvAxaJgrTPCuuEUhcu5GNuXXfw1jFwuCipvomW",
  "key15": "3atVneD5caiUUSFT7KE8nDG9NqfBcQoPuuCeUsLFzbE6jM3epQGgpokc5KeBFSByFgogpCEnamAvTnGgZrrDAGm",
  "key16": "53nrezzH1jUqbSwUGZ44JWWH9LT2TtuYP5xiykYPF612HMgrXvbATdbNq4oP8dRfdGgZc8YWyLXDrirHBSqtYYQz",
  "key17": "5Torjp6i4HQ1biB4iTnRPTQEzYGRcVjKLtNJ1n8VgaY36vFWibK4VS8imZnzuYh61w1aLwB5V9MhFprXgiv3QsT",
  "key18": "38uAf28y7MLQTew4xkTmLVs5JQaWkgxTncHz6rzHAVAibiMYi6qgKq5K5Yhdt351e955g4N4Z1oi3xjQev4y5rx8",
  "key19": "2myddVGFAdLLJ1ii6KZ2ztS7695G6CTNcMaB3KGoobgYvArQGwvBY2AcQ2amQR96TEyCM2TRHVxDxnouce9qPYE5",
  "key20": "3GnqFTZ84sbiwJveZzvQYv5VBhjCKxCQuqTu9meAoKqFktkxLt6EgXVmcQZR6J6DdXSWmuje1PBb2HYrEjh1oeSM",
  "key21": "2ot8pFz67JU7VL2AWQfsU54FNt6hTUyQLncq4MPXwxtr2ciqjibHTvb5cJUtrMwsQhUXqa3mK1SrY36xamv4PWeG",
  "key22": "4x7Em8vCwNGARQyaJkQs1ovth4cEhcy5YWUrCcH1bb8KCFec2TnwJnTYepk6eXGuJsqgw3Mir9zDmmuRidK5S5Co",
  "key23": "5EGt279W6QeADeW7RdqGQWUxHBCTGRer3m1u7cKohzgFAWwiAcbmowrqSAmdecT26HTE7SGRBP67zJdUVoBNCF72",
  "key24": "2P1aawC8j7owju7H8cJC32HcEfsRLGBLEN7vH4BayWUSUMEv3KyG5vRHdU9iLH2YXSbqm5XyYCbenKn3pbf9E9tX",
  "key25": "5Vkm9Szkjgudi6RoFHnCXbSbnvMb6rRDtdX49PvwVxm1BvgHyjQ5mRsMkagphk73JenhibTszWJ2HCsxJxHdPssn",
  "key26": "5LGL9iByt9eierG2j7RG7L1esQeGxowtkQy2cYorTjAyPLELZLJCW6EQhG11Jt7ofFNXCQ89jJ6g6B28P3jfgtue",
  "key27": "2vNMHzBaa1PPoV6ggWC71McAggTHZ3zUgbGLRsVYN2neMQK29Bwv7y8qikrVggn6coq78zMaTBn3z4rq4S9yswHV",
  "key28": "YJ1M9peffvEw9ffj8U16wbYceDuxvM2vvfmmFziho3fqLB94pH5JSsTMuFqVAv4jRKkhcSoRmkquwTNB6HeSVpM",
  "key29": "2spYjWJLB4gpzfn3oGz94M415vhSF8S5hLQ3dcu3jMzCSGmx9higiZAviBs6apuTRinfPKQuEKTLhWxqSU65yvzG",
  "key30": "5Fq8SqM27HHgzPoEHxZuiGZSgrgEpLQD4LtnzuUHNbH6Eydo968L6bDh8BZuKgdA7DKdoUfTJZfvb2SMV7YiK9Vo",
  "key31": "5wv8q4FXBL89uEoVLq47nF4qTUig6Fjdq6xWQ76sj9XJppfJmYahYSpF6cTuUK9YyhNzJhuu19qxhJ7ULHUCsMCT",
  "key32": "5RPBzZgK8NLR1A8uhSLCBeYkZtx7btnGn413HXBeaB7ReMy5w4JQrtKc3suRvMQPfmCLsEqJjBc3oYA3wdCv5fvV",
  "key33": "33BbhQb4mygymLuZjTgfxCegXHjGTtYa7VuAZHq7BYqGdzuUh5HoZ7YdrcWDVq9KPbg8QGaokfGcTP4wkkoBoL4h",
  "key34": "5DpUC2MavRHjAMQLuqh4ihexvFLjWaq8GL4tKpMSSHNPazFmm5pfnGe6yMH86bMeaKjiW2tVRTecK2HBEYrYxkha",
  "key35": "3oHMkJkjGvuN2tX3T83dRLSfvg5dHC4TdpR5fHMbH8kLBbH8LU8CUZxHVs2LE6xHJ15NpX2RC3fqzrw1WkUc3Lv6",
  "key36": "Nidqc4w6SWHxAvxQLKocStyzLsLrTh4B63RSHbJi9XZKQQbnVFLDq5cWjATPuWeg9MopssJWRozjmmEF1h1Qgiu",
  "key37": "5tFuqGcpYSCQozEcaNXfcooGQyK3rZrGvxmyGb13VrZYfCajkPdveg3Jw47cxP4PXY5e1veK1T8CJP6cTq7UKkEV",
  "key38": "2mt26MZyqfjGBnVrgeAexZppEVQpT7AbZpzHDvAJnmP5gnKRszxscepyCgUFqsLd4JHkB8eNMnqWYFViDwuXBzc3",
  "key39": "zcdENW9skmehcSLzokXVrAHovsix4XKu5gDWE4zbLx3vtWpPFTas4KthdeW7Rv9TFbom96LX2xgxvQrRjBxERHS",
  "key40": "4zoVXRGQs5myCALD4J5WAthxFs8BbsactURsByCetSv7t5LgQNAcJWBTvxtcPT5bqQCVFjmvFA3iLitV6TCP5z6m",
  "key41": "RgPRqFMaMdDeVqKDH418YXYftwTnwU24cdunPCEmm6ZKbM7c7qGgciRfbwrQJkjyGrXBSwFEFEhha6Yuf7qq1AY",
  "key42": "3EimarGB9iKUTZthYY3q9Fbk5b27uYsh3xwMtABp8pj2GgFMBxMFh6dVUbCXEECgRdTS3A8mSZn8VAwCGC726ArS"
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
