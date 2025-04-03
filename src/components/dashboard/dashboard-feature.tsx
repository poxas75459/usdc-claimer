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
    "5nsLUfTcQkcACPE1wBgv7wraZ1DtNd8r5Ud5cPZv41ZoF84TsNABAAGSsmhhenj6yCUHc87Mni2SzNaf7pNEtSzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WiE2h8RSAGXLNUq3UbCXZRBQP1qfyw81xJoesXcoY8eWVyQYNWu7STp7qr11CGFcgsvwjh9oe1DXuJC3PhHvik",
  "key1": "4JsXSwscifVmJDwvhk2vEpvTpd5hVqAoLLKbnuXW3wwcPErf551gYk9VrsEKLDhgxxBfSD1gTGSHKKXTfKZN37EF",
  "key2": "4uW6yTdgZYQiDd4SfLsFyrt8h7cMEv5EWBxGKcTco3KfvgTgt6rabs4M6fZuiPUDitRezryGgAWUi1fia1tQqvWS",
  "key3": "4wvZEG3HUvoMMQYQdTQAYAiPoMLHQrj7pSQUQ2NJbnY8Ha4ieXov3P8ACwRcZefFVxc1JiCB7z4D6bxGgZ8z5uP6",
  "key4": "5vns22zsrcrcfRiVRLscS5kDEyfan4kAYLU5NgwyJaHWFVdPGkrW8fkedCVu3dskbPgRypPkVw6r5HMhZ7dcNP4r",
  "key5": "5ahoXnnHoBpAFWNNnfG7wztxj5mpFURxnKjqgwR1Jdaz2KJdcMyrjBjpxsDBoptfoGpyMXa2ZxC8ZQDma2JhYFq",
  "key6": "2o42r1GB562ZVfijq9G6XenWSxxjZRbFMD5aMyKNJn2tRBV6nNNEtAn9mGRMngsd2tF9mPeZpFEHTabDjwwaQE95",
  "key7": "5CicUcMuM35Xmcafvy6m4EpYtGkreyRFGVkzwwnHK4bWD2QgxcTCaciHcs2rV177iao1jdiSKnyzzpbpt3j5xYd3",
  "key8": "38B9rTr8E3PQF8SMM5FYkTFgonS8MMfuz72KZfiUNBZT6H2zwtuJipwPP3r6ox6hQPxoD9AHfYvNvsja2tsCVTtB",
  "key9": "DBMuBjr3ZesFEPMoPtVrg5o3NXFy4v76zd9Q85JJRZZRZJLoB3g7Y8tHaJZD3YSzD8uuxifia2HKNgLa561q96V",
  "key10": "5fvGN4GVBAF7suXSQdvgQerLAdooXZ6bfjXmfncAPKKJsg6QpDCdkoNCmmucMmykZ6fW83yqg8RHY2gduV1AnhNh",
  "key11": "RK9ZDRuyTuxWsDs5JM2cNJi5NWo1twFWGk6NESoqUUVGNNXHJ5m8Wxyy3HS1UgnoCzZsTjrwu8z9B2F6EDwdjBH",
  "key12": "CDH5cbDhUYFPKgFY6b5g6gyfcFT4gG99u6VhiDtzBFZVAXZJsPbf6f3LL8gGCpWDcfYGmsjN69x3LgmUhEjgABF",
  "key13": "DwExPLTRNH9KQuVpxoHkRhMr9vUEmr3tpMHDUXVCU2Vxi6yjxuJbVHh2onPyMCBmYNGSZdXpgQtbqVQHi8XkmfJ",
  "key14": "2eXXoGjVNN3D9KsL5PtKZnP1kmG1HkobgRLcYQk1uv63zBqmGGeXhYj9Edd1eRH3H8vmeZgDED37wkg1J2nAyufe",
  "key15": "3QFZW1XQ6BZ3Cv2q4sfyr2N8WAwNHmcfK8uFeAy6sVACMy56h9oRK4P8mp2soTZjkeEd9caLzRTGSmVowTmqU1xv",
  "key16": "2bdG7iVJg3XQTcfemHXNgkNxQuuqNEJP7tc5SjXuiEEwJcpDAgxF8dUe35c3tkijs86cxqdBCrowR2Z1ZDmmEmNS",
  "key17": "zL6WcNDWeZ1HQnSd3dAjagPQgoCxr3MCxPPBddt9Vvq59kGeGEw1ZwoJLdmg2mF47RnZ6ibZoAY5oa1LUbdZH3F",
  "key18": "3WLrGWEDLrLm2LAnJkui2EqMsEqUC84h2MmiEEfjqmRorLvzmXk63AWGqBuPEoX8DTDVJEAxj81W5iof7abVUsvK",
  "key19": "4Yi3KNAhY47FJsE7Ca65dN8kefHXkMEYeCg9MkE5o7wKXwsUL8yYi9QxjqZFkBtrRiUJQdPLPEGACbT5Egz8Jirv",
  "key20": "3WPt4hpKzm9i3ZyrxtuUor1WmWSX5dZfERWtkSaQX54QJAz7jAVRd8dnM4ySEAQjeEVAeBi5bscnrvfUuJ3BZz6M",
  "key21": "2jQT8yMyWMQCCK1WNpQV4MXc2SK1haXKJ4dVQJmcmeAviBm4CyuC4ZWnwFWRmTWdecvfCCxKuH2RB7y3KGWKsoWb",
  "key22": "3BqJoQs549jwpPVU9ai1qFtFnZkzN8zNtTUoGSypgj1DKQDnh5wmmr3Dc5ouypK5VTsoZx28bDbPgAXjgb8kM827",
  "key23": "QGPbduu1pimQFNoTNz6khdjVNuLwAwiHdbbUiGy7124MNZXuWD4L2JK8Uh8S4mkemqymxe526U3WKQctyog9TuY",
  "key24": "2ESFKYtULCzyAGjMwgAzYA4R6DzYZ1ck6fBSm58vw1MTq6W45xB2RYr9VC2cMz8ecABQHx749SoroQGM1GEUPP4g",
  "key25": "5WpkXHHMbbCBkb58MWQYUCDufpwpCmSYquU6yHvueNDkcaXVxiJEKtBif3Gx71LVqb3mii6YcAybgmLfEDWM2H2T",
  "key26": "TUD2RbJu5j3rZK3QXxSm2aG43eizezRaFV3RwRg1sQmXHtb23PXBEs6JsyZW16sHyEskhYJDmbaoBkDmLgHRuDU",
  "key27": "5MScgTfhzQqghaKYwi2qhxCvs58gajrGtPSXmqXphfHwEyhmKVYCU87BidHLhuDDJqRHxWZGeVHedhoQFKzrXX5r",
  "key28": "4pV3Co3Dr9bkDFqJmAqK4MVJJmz6YijZfHVCkjZyYU8yf83eVaZyuJbU2QDYXvYtzB6YQ49RLGmnYr1q5JndPiQN",
  "key29": "zywFwNNVEo5TZXT5jPPDAgfgyfvM8pXywfgQ4VpTkiMmTNf3q4wszyvTGpnSFnt77k9pb3XwQxKpg1NPvxTxFJi",
  "key30": "5zX5kRPsiiheU17rzysAsJmrzdqKCCJRBbzetS6vyB6R6yakksCy9bartK28Akdxeq5qDauUGricydwUaXX5f1Zf",
  "key31": "5JpWQQZ7j8pX1eh4q5ZBq9ZLdmeZY7EQAuz4ygWcp17VjcMMTqqe7FXG1qLEKptQy9668nJKXh1xg9U2TsMGv1L7",
  "key32": "2tMzh2xfDGbK4xmE9fogHK9L7VmcDyWz3vH2HaxcLfruxG4SifCyMpgRfPh8WCXvacU2qKC2CWYCE8caNrbNXQbj",
  "key33": "xdgstksDkYvVvDmDqMyDTobj6JUvVpbpBto2R9iTBtzFmcKz8vvJiPfT9YV9RvSXAZW8QvYvBhHnTCxXGNiYcKL",
  "key34": "37yK52FzucmaGG6xQtCuh1dRJLaqCj2x8QfaSjjpoEoSmxyw9SEYSDPyjT7EexwrP8CvVHWsqESom1mCf6cZzHdm",
  "key35": "5yESvTadvegFQ6gYfUXogzLSh84Yca1LVFuZnWNrG3zpghofUGY3nxLrTTVUavoAwimE7AknDUjoHrUtU6RA4k8X",
  "key36": "sVxJXnMY1jCnwY8uuYRd7UmsCLNvvnuau3DeXqK1UWCpDJjzScn3uAKNtwDYY6FDcqXgeuqgmTvKUQ59PKrzGNQ",
  "key37": "55XTJ2ta7KVMNxpxdLgFPuWiyL892EKnVBLUPUKi4pQwFU6KSjjGbHeehWuZiQSt4n2gchSy9bVpDvxaU2AB5eA6",
  "key38": "3vrsvio7y3dxSD9mGaifb1YasN8o4mcfoSetKTax6xM9KKW4uhuFfzaEtzyTf6HYHLoJRbi2XsqBP158ZAfAgk4",
  "key39": "4NsDZrvr9SVvCWjvt7kNpmX12t4i4WmH9P7mqw9yHD4rVQQtbeckVt51xaVjWhG2VncgaX47vAjEMnXC6eY4Afev",
  "key40": "CtcxUy37Gegwopans5ufNqctCPm666SsUU1x64sSinfbcetaukBPqqfP56HLLSkPPUPXFw1vYXoSsyhz9y2fnRX",
  "key41": "U3KAwDGtTVhrKYPK7TacbKZCwJPLvQ4nrDZP86MBtJiejEzNb7qEPR2dtX5HPZErqQzfRUvQnwvrU5m3mcSh1hr",
  "key42": "bmFu4Ss7kKDYNoiyU6rWTQYNqrbWJAnZLs3ihFWuAb4ubcJzm5u5gzzdYZzkD5DQWE4kEKdV4B3bHgYcdZiES3A",
  "key43": "3JYqFzC8SkZwFMSxpunzhEQGv2qkucm5BXmX3dB59fcGKfQ97fpUppHYTtJPmWwpUzvhaa8xcuf9hNqiEjN3LLie",
  "key44": "52RJpvc544Vby46dekcTwUDrnioc3TbJeEc8FTGnK8zhAiQaCtRBjGfES4bDKsQ2bLHwfsJcRQA4KmqzwSvWBtDh",
  "key45": "5LBd4ruy2FAEq23nhvvVSVxZgenoC5QXAXRYCAEzCHTpqTcYfLP6oSHi6VJRG6W8QGz58w3CbskbDX9QYNJtheBZ"
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
