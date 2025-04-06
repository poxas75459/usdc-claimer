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
    "QRsUybo5TqS5P2Lqg8QqWQ9VRw9AVjxt3pE8vvsy4Nd8AGFzsSiyCnSpLtjwhPHNHjhDNdJa6gDZ9iuzVG926vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7SBtGHssXptcoRKiJzcHxogwmHRCujL99AV4eYYRPcwv538to29Q2CC5bFQbErBFnvKre87id5dkP8L39Yortb",
  "key1": "4v6qF1UdhkpmHAW8UacPu7ka5UPWfq57YyRm1EFCjcBt1LgYETak8wKb1FRsHVX4RZTpdigxS63vcUgoXQpubjyi",
  "key2": "24rS5ZbYQxoowsviTEXEgpTu6zZ2mNksGsW2ciS8oig1mo3wxy1y2KHTsKgZHSfrbv2BMMrRA1RNEmBakV6iJnjP",
  "key3": "48VyKgY6e7xXH3EzqZMw2bg2SNjSTM1PQY9juT7dH5taruwXa92LdaSAzm3NprpECipR7WNeQ8HeoMowasnTzbNd",
  "key4": "3dywo32kvXTiznvHEBK4Uo5BJBmG3fQ9uvVVuXV3p9aUpEGMTSPWZ1GiFQkYKScGuHGXzUKtBnUTLM8MxspY7c2P",
  "key5": "Qi5Ro7zeUxAVLtWUSR2pb7MoyjZob6kip9qkZUc5P2ojK53wo6QMMFoU61JsNoSaBwUX3A7rPtiUyjFud4FZXM1",
  "key6": "2e8sjQqezxEGmRxeib5SWdmn3E2EQatRDK9HihSPQCaEbvV44x64PbNCR5Sf5gaZWUQr8Fir5YPzMQYnFUJB3He3",
  "key7": "3uY6bMbHjjMb1QchhErSGfQXd5iiuZpV2BdKdzL3HaLZBcLyGxTSkkSSp4wL9PU7XugnX4gcUi97gNcTzjL8bvgf",
  "key8": "4rMxESZuCMz8gcJ83Xnej2EoQDZHL3VtFW2ZnSbEtGksgpvXrVntHDNw7FteEA5XGY1tA5ZTZnNuVqXBopKeTFdS",
  "key9": "4hZmasprq6ChrR3dhJsNLFY1iX4drKBpe5BEgU4H5st6gcUBa5vBUEqJLKg1R2ovrYdHB1aPQbVgsAdfT7eDEqRh",
  "key10": "61P3MexhE9jirMvPrS2p6dazDx757QFc9QJbRy3hyqiYR8sdvhJKGdcquHpYVGvv9z5Kpkyn2EC3T8vKRzdGLbnM",
  "key11": "2nqS3eFqsJzVGFekPsgFfcc3KM5dQkSyKBEBdS5s6pwVpG75n6yi7w2L22HEXYZywGnCngxqW5bP3g2BUKuG5CAi",
  "key12": "ArZLjZroysJhndqwr1Q24zixM4yfiGeZCZADoJBGUdynkMCecRtkEHQueWyGpFpGt6UC82YWpiop8c9dJ1f6DXS",
  "key13": "UyFcsC799CvKDJ6JCmmEy861iPM5VaE572ifyzSJ1xAKjsfe5sX1JkSnC7w7eJpC4TByesE9bbyHTUG9yB1MjzT",
  "key14": "A6RkKYBoGq4h7USvFcdB4Y4YrSt7GaAJzYEMahazRQaWzmCLohABXK54pPXNmM9Yz3hv8YrHZNHLGC4JBNxZp5T",
  "key15": "JhRhvj1KF7AjqoTFb2PCXcpBYPc9tjAMQLV4WzCAS6ehXTMZGpN71wJZxmfUS9LG93aZXvKt7Vci48k2D1TEqP7",
  "key16": "5CYtKqjCtPTRcSV9jUbmZ9uyi5apem5J8FawUEMLsiutQ3MJsDrxV7EQCEMC5su1kbZwVi87gB8gqPUPQz4tMY6P",
  "key17": "3o1Mr2SuuwSMuXNPoAB5guG5sXQtNfMjSnno6NVfATw9yyNpQrsSd2xhQ3XoGqJzjCwtZYrFWP6pCiPwWVLQLbGJ",
  "key18": "fqAcQeUWWnPFkLDW733pKRZpuxssHkiiC2RpELHyqUPk3nGWJ5GeSELuiHGs5DytzbkPNt14VGLnU1xnB5xJRwr",
  "key19": "52Ejj7v3vvabmbws28PUQyGXmzjpd8VWd6WqeMRVNa7ouwMnimwUPEo4DGAarArm9aXYAEsEGKMhmp2ZFf81viKK",
  "key20": "3TdcVfND85t8YLkiu8sRY4f4Rkm3t5UrAQ8PnMbDtYjgmKn1UDsnJgTAnrwTigFDLP9DgNPt4fnXJhx4okxFH5WN",
  "key21": "4gU1osWth2dGV1vzf7a3UpWDkQ2CnrF97XqJ2jfcAGpjvnjQBkVdBJDZRg7TEK1sJUX2ALpVzvNunkooWDmUabbo",
  "key22": "4aF7br9zBaPSD1Tmg3feFVQVJbKxhGXxx4ghD8E3UqfKbYnQB1k3gSohuC31TSvbToJQAYFm2i1Z7z3jSBXSPXXS",
  "key23": "4EwH2xz2FUtX3zbLkWS2NsC1yWQzQ4fGEbLWcZi8BtLTxJFzHZzCh7Fb4wcF5AqxSAm2ydurNQp4bCHfbkHUaL7X",
  "key24": "2WLZgPHdeLmi5zscMtW2Vuwc4SXwK7y1Zpa1Ft4DPT9zJbMHVp2f3imNXknLhxNCxvkZ9z2efNRu9Ur3NWdFDehc",
  "key25": "28tLb67cJY55eQfnvbZe5PkVy2HsVipE1tfGBnAAkztnkrueLtxkp7GrupfGvwNE1VLHPyArG9i7A8QszKvFsrax",
  "key26": "2VwgYiWL47RvRpWy3WgHRjANUcWzrJoRKBojF22AAMQRSukyJ7dHFD6cvT6434AUGCJ5Gb5b4q7Dz3w7qzx9WQW8",
  "key27": "3D1mK21rc2pUQbcpYYzdfRVnzKTraS636PUWQZZqte7RRZysrAFxNNeZCxUizwXdVzUCemA2rSUCbrD9KwgDJqZ",
  "key28": "5tKM2a8jzQUPhb1zT3gRLExQtNRFkcmKF7VTW3jApSewXbqMoMKfE9SShLmivxrV62P9aieZSBhiuyW5BXKSke6z",
  "key29": "2VV1uS5nuv9xSbpYzCY4tvun3oLo4kWAmS5wqntPu7AGBvPRY34oiKMeGcKbDL6CcBVtfdggQguxEZsotWC17FEb",
  "key30": "ZjBW4cFYjtGNR5ymYx6Tskf6eVizxGANzuNoZQvswmtyHU6v9JF2Ksrzc7pbb8Jy94XujcNqcQYpbnJWu3rPtFP",
  "key31": "56AJJy4NGxvLcbc7XJX8wLYsaVmTju3kAtYvVzEbYuobJCn8itkCaceRfvh1pwTRzAT3Lo7kpzB1PXde6uGJgtxf",
  "key32": "4uJsZ6XffrbGDAyGWx7NqVD1UL1Kfj2eoQgBDhsfhFij4mwyR3Jq2do6V29p5wqGRoBdiJGBvTH5iAfFfurFBT1W",
  "key33": "2wfpS3NarzkCMjv7D5syizvkf4DUz7YmD4x8rtGD1ghcc3FzdHTwAuvwvVSqhqTdcim6L9assHMXa4DoUSPu79vq"
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
