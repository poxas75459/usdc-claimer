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
    "GLXtKxTbFattHwu3uTdjhLedBEjYj6JQLJ5Dgd4ATQ9rGF81Xj1GozDmYhRwJEJf4vqEhJNrDnq3ScckAx3yeqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H61dMkqWSqhXm7wdwejVPNWbnwrpqpCkVaomgD6SZxnUiCEtRtKVQ9PZsQZCj5B5vsjh1zzGFDvnBxdGzAgyRvn",
  "key1": "3GoUtqj3939UQzWLnFsJbR7wtL8xCU7WNYCytjtku3JrPiUsWtW3U1DmPpVX8z8dhL7AdjPUumwMNYbJXNiqvMjg",
  "key2": "4hzCHEF4hQttihsjXv44BQNeMdETnP3oMerPsrS1nCuGb3692QNvdmALDETCYsdomT2CcbhW9QJxqh8obuA1rv4V",
  "key3": "2CHdkVphS6EfvrymcQX9dAybZCe7CfSZh1kksvGGK75JZ2wcD728CkRM3rzEoVSCC6zvZs16gLfsnUydTFnETnAj",
  "key4": "2b6toT114LWqoSGQMayuUcQsBxsS5AX2Mja58iv7THm3suA5pwKMdPBQEAJGYJ4BnUKEW9D6ykS7fEoz72P8kSzb",
  "key5": "5385QK1fRGh5TXVLyzhMb1kwxYxg2RAXiyS3rP8XLCM5szCzFhbfZ89Ljq6p1ukx9DforP34n2XxBEXF6RZVGRTk",
  "key6": "4YZMZMqvN3tG3pyrEXHiXB9f2PKbLCSCUmXcLHAMjL4LwLv3DUN53GNG8oF3uHTE8V7n5teBqBy4zncqNzfdLzM3",
  "key7": "4M5ZtP9BxXrTRWx9DRwmjRPyghTatoLE9Fzi9yK9dhhBW5DRRHSxr8aTkXD4ss9sKEaTiP8np6ZjPgq1QDtuxoye",
  "key8": "WAQ1yeX4h5hUgcpb2iUK89cp5nMx933vedNc9h7D4DoFBrSG1w2zzu1yzz1T4332N1VjCgBvfWfSjVdnSnC3PZH",
  "key9": "5uFVvsEXz96AEXq8bQ6WRQ6bHMqT3Xn95QZkRcLTZbyNZYD5LDDYbukiszZWtDDtePQwRL2F32skKxHJNPE29mQi",
  "key10": "5t4XEgBgtFEqXJ8T4Y17vTyXu5gWS9TzBLqDs9EJ3qRUbY9rKpJGUkPFPtWnFNUUzechzLx5wSHuGhgXdeasgPqJ",
  "key11": "2UeE1nCVP2LGpJ8A4fmbCb6nQs3HY57ZzKKtHeeWrtXaUCtxrVoFKQnvhwi78LZjYp4ivtKpnrA5Jf1VSgKQYZhY",
  "key12": "5v9u5YwTs6wP7UoGbeV4M4GVa5jJQiWBFFa6MNKW7Mb251cqaS6dS8g8sCVUuYcue8KJxpbV9Tc7qxPnWhHmkGyP",
  "key13": "3inNFqeZd2CwTFtyJgEBayKg1YnMjYjKjTKV5VLgNbYSnPkbFMDGWpggx9ZqVJpyVhUHnt5FxUiWhHksrjpmnp3W",
  "key14": "3LsxSLKFA89VS96Wf8TnVG4EfgAuE7u46yvJTj64dFUFiFpNgSqfSSbF4SwpsBgsgoCAhiveqpp2irLGTipZEaG2",
  "key15": "4FpKhtRs2jDW5ULTpuWExgnS5y3iHMtfdKVXGqvfrESE1fQnwEcth8KZiDGvyDcX4Za5jfE5oj4334DJwqw5VJXC",
  "key16": "r53STnMxgxRBfSv9KPHsmT7Ds1tcZajf4jroVKzBp6cgEF5aRLFAn13ucGiXep4PzjkNNGH5owrvb3yrLTEpg3D",
  "key17": "2J6SoXLPXzVFpsV1zcQ7hjdTCqzLQhsGs3ad3Adn21mmUvH2t3czsSrnT6QNxgD8dMUT4Q8De1FevsJsrVtN5wsu",
  "key18": "58bSwuJPTuQZ7u6mvfRYJD1Ds8KGWAANv48pJoXPwHCQo4qaeNNGL1Jy99kS7ruKgFtek6LLSU6MVsgrBw8LMGTh",
  "key19": "587uh6TtaLobrRuGdjYzGFMgiyuCmCwDYbtzGiTLPxiqo3pc8ENjCqLJTntFCa2WBR2bRRN5T1tVbrYNDQgtocAS",
  "key20": "4eS43dMtFsjjFWexBBGGFoD87aWk2SALkWpgmrJ5ZEWt6jon3GHyYjctzeSNEowiimUWKcRHh9eMTsC1wX634i8A",
  "key21": "7suviCnwiXc4nZqh16A7gUk7nUCXrgxrRuXCrSGKCjUj7My97qt6wdvuCWxb5bGLnKzNVxJXiGh87e9AVUK4uZt",
  "key22": "oQ1QK4m1VxgJu9SdHnGqzcZQcC5ZZUeuGmSYZXh5qvN1EsbZKrhzpkTGGWeYDYgPD5Nm79y9cmgpVuKy4DhKxUE",
  "key23": "2Y3U1T3hWKRBYF5bZmrwcuTxtMshYTFy45vL8DwWdkhH5z2AfzCwcUMTLrQYAoJfL2vcJkELzEo54HxEHeyd8ize",
  "key24": "2Nb81SvDDCMKfMiwqMZviLa3MkR3J2f4Gr127R5hv18GB2KbnaZnPWADVBhJHfKNXskyf4akxtzKYtDL4g7CkUGV",
  "key25": "4SbQX8yGLuqQ5sLLTgB32pv93UyHrcvMQkY3D3AZQvkmKfiUpEoMuvVreift5N7UTLk6HFgZJb1J65PAWweUWc19",
  "key26": "3oRfazFnDSGZcVbwqEzdeAreWpADUGaCjxUEGQ8C1tmhmuVeA3eka16AMVbp3eAhzb17N1akbv88BdRAmpGVVcQk",
  "key27": "5raxX8FenzrF7p6sDYMNHqK87WcdcdmqEYwBRaQskC8Q3y36hzxjyYRPksmfUG3yfZCLRpoifs93d3y6AaSBJ5T8",
  "key28": "239gE1QFppNXceKSK73k1rPJT3bxKoGaB8XjCYiSjNY8qt9WkMSukas73wU74Ti6yRDjwndA758QcHkwkhZRxmD5",
  "key29": "5TesJ7GhcaTACc4kWZho5geadhYJZ4BGfGzACCe4dbxxqWFGQofa9WKNN9u4XYVKNkdwjFXweKnpL6c5sBRiSMNR",
  "key30": "2qTNYvrsucYVy7VdLC6BaZLNZEMGKg3UJwcAWJqaM5WShmG4rMXFPRUtfTMygVz6dnQQyP62eStUZaAfCvUePFC2",
  "key31": "dgoDnu8aS1u8bp9BtZow3PrDKRKPDBhCytpoefcBzZPmHcZtboj6cmHnLrvYvK1x9i1TayJa8RcQ7E9EMLHn3yV",
  "key32": "4AHV9ycZYYx6MnwFvVjnfeWA4cGVKC7rkpKkxe5fHdLTkywms4fifdpHUWwrs9gt8bGZ3bqY9ubG58FqWTWB7s81",
  "key33": "5Aj9VvVKSXsU4utkxSrWoEnKZ5jQG6WLwbicaL2diAW4k1uZWpgHfVrryMgtUgRW69SjnLvdvVRPt6QopMkrYa8y",
  "key34": "5WM6tFwGYskrRPyW7s5upwHA4qi7zX3D4xxYcxHCtCbSw7NoVhrhKwVD4HpAMGystrSqGR4iFVD5iDgjtQGLxXby",
  "key35": "3zdWv1DdLCXtSzTs6rpuFS6Z1dPPQ9PzGK6VCnC5kDSnQaSXJPDnSMbY6kxD9DXvHL9YWJWY95fbPQ3KkpxFKVyo",
  "key36": "3QA5fvmUZYNdkoxTtFPJ9N6XZ3Yoe5H1pB51vLoaESWxEyGoYXBx2pES4T3vf5nckH3k29d2wjVuxpzEKbLrZZ2E",
  "key37": "4kHfkjb6yAyJovAzj44MpnD3fFWva5V3pSb4cp1HNaEJm1jwkM4UARtQyBSHmMqwHZScdUW3gzTT89qnyYig6wxZ",
  "key38": "2q9N8h2jApRh395s6L5s5XUQ2vG4Gwe7EA79XBePRVGe89ExqMc3fYH7SXrSXyZB9MexVvtCmR3L3swQ9RMmcMPC",
  "key39": "417CqPA1W1PTU81ngi3qgYVYye2Gon9tARQoRyBfJrqp3FDwyi8YkfF98d6eDAG3ddjLETdZYRWY6SSbMbrVTnqF",
  "key40": "3n9ozScp5CprU7TfBbk3hNS9bB5RMmJsJYFV5aV2MZxf1T2gmeiZWzyQr3k76R3ZgBrih8tVQdSHznaEcigC88Q3",
  "key41": "5zEHKykWosdNsrFyo81czZ4q1gBg3FTSxricHT8KqyU6HryUD1bVHVDWsrYnRL6QNiRFYenN1FKoertM9FADZsym",
  "key42": "4ZdzcubFMgaczuULEHrTZf5kPRTn1EAnHP9q89YwtDcT7himzAAWYtqh5aoFQbw4eKZC5p3wDYx66CEHSxo2fj5y",
  "key43": "26pzmmEe61ADgoigQ3DaPGzzaynZ5EujB9nn82mjdp93DWDT8KwLXCcNR1MzpDSThtizowvHsS7gxQdy5bjADmKg"
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
