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
    "y2RGFPirngS28awqYc7UAyn6xdYpnXoP9dx38EmFVMzP7ncieKPs2UCYhGwdDMoJ1cgc6WCUcte6FkLEo6Em1Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bvnq3CJoxBm4GRKU4FbJJH32dE9ft7cFiMt4amnFcHXtrxacrT67kUzS7FAnsFsbefiWrGcSDzxxheoTYEZda1f",
  "key1": "5RfAEmn8C6pszannV6aJ4TyTx2RDTLa5iQvSFC4ramVLRMCbWae66Fbs9n6FNs372j12Md6w8JTs7R6oHumAoere",
  "key2": "4y3pSoMb3ywohBzuXRRPog2J2zHeweue1dErmWf2sxLMbTLhcrqJXW7BVLcs31zHWjDXNVgZM4Ji6PCuN9sKbHJn",
  "key3": "4yNfp9vht7ZU6Ex35F5nn1pUTc7oq57icnJtSzcWVDKM7NdGPRWTUHRzvRiZqbexxim648obPQL4phuhw7oAncDn",
  "key4": "5Gm9gHyTaYFsdXrybqVsfoXRdm1ajEGUPEbirYvzDnKcgUbu2ackEEHNUaMYarDHEbZbomc5KrvzMdgR6aGx54Sf",
  "key5": "b1H4vzJ8E91zz4qcVhf2LCNHYTf9AtjPxS9KcFD2S85a6UNGCvbmH51cbsAnYoC2ej6dKuwSbfkj1MZTkx3uyeF",
  "key6": "3xCjx5mNG3op1kj8yEsZ147YZQUby7P4cLNAYgYMNvYegCmb36M3HD1zDyLGmJkbK3RvCmZce5kfyN7BtbeTcHn1",
  "key7": "2qsx4FVGeZjZryeJAKaADdzB9Fdu5tkp7zJJkTM7ai525AmSLjpJSJBVqJXArL7vSexBimyitmfGk9DvPtpUYyYA",
  "key8": "2jAKCW4nYGckrDX1ZkRdQpSUXqqBveCaCJqvWpDjhxaz9K8DN3mZckx8Md4RQkFbEC2Yva4Ekbj24EKPyguJXsHd",
  "key9": "3GwN2CYuP9R8jnyQqSVLADYpqWRXeWBQv78inDB71ERLFde7XXhM98iiygMzeDD57oSNyhurxQkZQuh613uGjfvC",
  "key10": "3HoPjg21omUgMjaW8qnhjZ1DFsrxu1Y1J8YezWvK1umPLCrNdjCxWCgnBXcQnep2Gb2QYtGrBkihAG2f7X24f4ui",
  "key11": "3GCwQVYw96brebHQPSsfwErTzdrRkSHxs152B2QQuT7TLTZQYWpHinYH5xYE8FDBmLr7XnEkumsjSbGDCV3q98Do",
  "key12": "5D4dFqJW8z38fEvY4hfjfwV1F1XL4JqWmMnNm4im4MrpXjbxsqXTHyYwaaicSuDPgcDLRUSXDq23UazhH1nWLbiR",
  "key13": "bH33H1LQDQHTU2BG7J1aXwEevPQYUNpezUwHg6AtPrCnRurVRwKGWpjhCZ9TJ9faxT3uQcWkf3bNNtoFJNMiPDr",
  "key14": "3DLhbHqJJrodVzoPVFAkGRGb5rUF5CDLMbrPk2tXrrNVShFQ7TTRYr6r9XhA79rYurDe36MbQY12eXD8r83hWPzt",
  "key15": "43nKjaduW4mVvhKxXuX87X2k6xXUbD8VExzTn9BbTG5iC6UqUUQdiGYeT6ZZ2ohN5d1gmGym1obBQ5ugCSWax2DA",
  "key16": "4NW3spmRocGPNhRZQ1mYkmQqUkYg5Vdsa5kbwmvQwSoTgM67UUrnvUUpRgoqULCkwH56wnLQXtn7hKcNyR4GFLNX",
  "key17": "64yW7FPXWsJVCwtqmxyfV1fmkjXmJz8sk8cfDUoPAKWZqRKtLVvsSYFjosNimeSbALku6KJqooUFDpdXYj7vgbtr",
  "key18": "54fUWxwkgnPffyRcnu977VpCMu1m6AVDdop9E8kdpboxTNbSjig8zNq6HLv417gMV4GG2mypNtsJzc6CGwYfVmfG",
  "key19": "2p9BHeyoUPEseoGpKApCedwUJzi14u9BXyKWNDiQUpaTZYGQpcf9PQnKdn2qvyFo6uJR2J1E7drh7vabc19mjaXL",
  "key20": "46G3TN2rNbqrz1wEb5GKPhJkjWdwVf4HEfo7PbtgZi1Mjziu7b2gMMrbcFYr8kWkKfCdvvbAnbQaFvqSzWvDiQG3",
  "key21": "fPTZRDML8NjumDW99LizcQHDReBo5G8zEL2WuspMMYLiYeYpwTCT7CcY48Y6ZJswCmQH2qoMp1H4ieKVxMyXEt4",
  "key22": "2pMGiDy7L9pnRTTQAgc4JdrAPpVtkxMHvCCme12pUHHV8bPeP9UckeVAHgvmex9mpFaetWS9RY1DRBqBD6sUQ99t",
  "key23": "65uvPWpCJ35EQwzpJ9wkZ4jm67L6K7kBZZzCxf4kxSQ8cPiprtSU9Ythjk1Gsg3DbvsHn3pyD7E9z1Mjn6QUnMgR",
  "key24": "6ZBN1xhTiwyE4Lu5iEnRrZT6djkKDvTyaGacCV1LxH1VR1ghFPiSsKB84Uai39cJSGxrhwpFj2CVaUfKKH2vFny",
  "key25": "3AMHP8G5vDiz4zLRoUDtqNFecpAKH6FU6a6VMf6uzntGA1ufXXm3MuL1YFroGv4xzcQuvBjWKo6Pur3zeJoibHYN",
  "key26": "5VD5B8gDABN59a99PdSBWZgj4JKZzc8VHp8LaDD8DJksNiTnp3SwCDaeEbw1MboMuUbm6qq52Ti39iTzrd6D8ao9",
  "key27": "23r3gfK4wwxtXtBttbzvqjGSCdPhuMYr1FfN6a5NDM5J8iBawQS6inGz7yZ9ZEb7sjKQFCDokGhmmWKzYZyRJjk9",
  "key28": "WjevoiM2ch5CKpz6V5JkczY1oQW3EmE5GAYokWyKFyyy86jAhFMacJGfEkw6Dnufp1Z1ckpmFQKtxNVa517eD2v",
  "key29": "45gBLCvpeJdFCjT1NSh7Qzko9Njasta7T3dURPDsysJTtsuNS7wbFGojY5jck7nCReezDk4PAfHSqJAgU6anPXqL",
  "key30": "3uo3LgGcoSrR6w33eHmLrJoeM6ECrcJHp5T2oukeYNpBQ4nwuCn178SbTo6wZjQBnJs1umtJf2Rhw92jXffJyDGD",
  "key31": "4xsoMM5FQpMrnD5dqB5WiRp3gdPXGCaxBCBz3MV8QECQprHUyQZuyfaUF1hKpyhVaG2Rdxy5zh86vWWgv7zdf5r1",
  "key32": "5xhqGkzKGQfRhp9ArcNPTrRkc36ZpzpLFna4wZKgBjTA433TnSdcFuSmMkv453KvMWDhC2QdrYG4kQhxDNXTD8u",
  "key33": "MTWZEFsXf6j6E8SxykUiUcPsGVVxx6ekkcyTss45nDqmJZ8uyne9HqKTswVSWKmWUDAASJ3ZJPusyzd4G3KWPrR",
  "key34": "5G4zTRe9ENn6bZq7uBiBwHGeaHpyMYU6ne8N2hRYBc1VCx5bPw7rymoQ8UcmEZuU6hq672GQEik49X4J24WYaP7",
  "key35": "3WoYQnvBSncDJaagjTovB9PwKJDz2bA68Ui85BR4Q14AiQDo2X9mV4acQopGNPmzXoewNULNfDAKEabWhhKnGV8T",
  "key36": "A37wsS5Rx1Bg8nrpXctSNXtzWQtP8SVEjQeJg4Mq8vi8hjM98nxCvKqsoM2PqBoP5wim3cq2qprxZZGrTTpqMXg",
  "key37": "4L7GSkudjnQP64PeQYWRbPyYV6uLSXbvXKV6J62qcbDjNpS9JfBxjN787U3ZH9odeCquDowDePEvtiEizheLev2D",
  "key38": "2CWidadrJp3nC5WZjMgZzymXu8sVZABvs9refMtKwdkbxkPnyCyQPH1RkPB5Ek2ZwwGNkavEtUdvsyHUPZJ7v2Y3",
  "key39": "32TiSFb3zt9fq9SivJbBDC4TxDfcwgjaWq3sUHNt9nksyuyVFSH9uihzSRinV2HWrj9RngWUetjmKK87AjuQcxY",
  "key40": "4gLJGoWo25oMVAk8An1iH4ZWU9NaQA2BH1reM7nMq1cQ9fEypf2TquHgoYdGHUqGfT4PVVeZmqpQvEq6pfzDf5bp",
  "key41": "tGtCsfyPrVUe5986aEUGkrf4kwDBAMHyF4QNwTR5sXonU61KAkFmjQHdsBnKAMjgx5gquNaSGSVgVzZSrVS4xQV",
  "key42": "21LeXfsFdnN8ku7KcvpjAZuawsksx5deVs8JkLvpSwpTYFoftdnNZdrTgc34uoRrmHwWPvmJSgbCigXj55uBoQLm",
  "key43": "tcaEzog9Q1xux7eLVzoWYp6UrCdzoivcy7UZBnrp8YD8V9vRXXdiuvuPS8LeQmPrBUgQ4KEWF5z6odr7a1a5FXr",
  "key44": "5QfJjaYKNGzaaYYWB2jsbnEEMrBKdBidaxaYhUvFmT83jcUYz7MttRjNBHQMK4ZyFt3NYtMRotdxo73fpKaX8och",
  "key45": "5mnpYBK5abqxmky9zmT7QV8ndxm4NWXrmqyYVK4e5goGZ6q2WR55t6X3DDL7a2rRSdqkJbXzT4WoXRSjYvUZEZYy",
  "key46": "2EodNStkCryR7wStxVEojttFRaqrrwZXxeU911qnRifuyEbgjkczDaDeTdNxXBUk2JtZZEGry1qYmsh36k7J6eT9",
  "key47": "5p12g3JrP8JVYP94P5mgZFHXQz7gTnd9kwa5HVrcuYZ7ku8QvKQkVroEr4RcgBCLkmn9k5JVrBzqjA8i9bkc5mZE",
  "key48": "poCDdGB4Jm1TDtC34jb15rTxknGanbYzaAngQKFZti28qaxCHCujMty5zZJVVN8oWD6yCoCHxfSRi3B3CZsJeAs"
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
