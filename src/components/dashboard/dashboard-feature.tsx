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
    "3LseiWf54zEM439HgomBXWGjRPTAkoH7918Hb2t1YWvsXqkvxuYZdfA1vPpy7r2oREzV1gcLTGL85hg888nTTtAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HCgBhhijvhngocPS6esJwBpcNQm8o4JNkNaPAkBrCkNWT7QepvcKALUzpQMAynoiJjVai6TeS4f7trfwLtpKvNP",
  "key1": "4JTsLqRsd7BXiRqP1myNkvRRLhj4edHkJj1EnsQfwi9GrQerKBUhaCmiGKQ1gm2vH7mSqATePtP5hzEvHKECdvPX",
  "key2": "2kwBz568s29c7WF2ZSMW2yH6tPaorckwDYhT5sqmTfHfFmCk1FeDND56c69ecyvSkBDvX9n3Ax7iXb4CfFFD5t7P",
  "key3": "3v9fgY42mDogg32n8Ptxrrk1bdeBRdJE4epBu4SSXTxciZd8pzrHLN9AqpemjR19A7GhPXJheHa7VXGYRmtBBp1V",
  "key4": "32G6dNh1AJRYBqF5seGjXUFzQNPuzGwxdGBEbqpBqNSgY2gy3RGgZ3gFxP2X6zzdiuTw2T88YJG2nkTrz8QxtSLV",
  "key5": "tJZs2n2q1MncJWhL5eDFju4tidYr54iTu9UYUSEQNJDizsTDqZsx2eem6ZspDhBD8jrpNMnMK93HUNaDusijnUJ",
  "key6": "2x9uFJAKtdrxL71gdw46SKwpTnCZsZSZHoNFU4BJjFVANr9nY2rZh1Dp6Sd7NEdqLUT7gCgZzoXpERkwPcBpNLkz",
  "key7": "5pu1Dk15H9yDJZTBDEDB2sSkaprF32ZkaG5qSoBXkZGGM7iBMuEgGSXdZEwVJZXrVAbFSpQnSiCzAZHLCYYsJf9C",
  "key8": "4p8nc5B4MjMFFYc2ffuXVrtc7CVUv2KJLnectFpZP9gP7W8HZTK4sn6iYE8gSX6ipsMC9wdAQm7hzWkhLTC3bgLK",
  "key9": "VXfY4o9ifmbPtycHKoGtJaRDmFLwkTuChKz9PekLpmx5TQf8KAF7PqTHVxKm8CjyqQg4wX2SiQkGRpuyqz9SV4G",
  "key10": "RhTBqB6tnJiw5o86B7utvpDo3968pbNuC6gDhHGYjkqrfzB2sGFSsC6Lf2a4NZfar3arwMgGuxAn8R9n8YEjEHu",
  "key11": "44iwqu9SkCVhuqagNxEVxLg1QtyaMXrx9APcp2WAQxyKqkvMUQPVvyVLZo9wekrb6foNRUpsjGT4Wcct48MYCXGW",
  "key12": "2R9eWVmV19914mt9B1jDqx44xJoM5VTbHnkZTExr998b2HHXv9zFpGBsNspgfnYf2sDNftpZHwxxZmzYDLMgQrUu",
  "key13": "CYC3oE3Xqwpho78fVpSupG7bu5cu76Nv18a5XLjqTucQ54gzsC2E2q28UkfmGay5okatc8mr8Q2GDHMJ4KgvbZH",
  "key14": "2Dx8Su4KU8BtkWKwNhXKnKs65f2oiJmMRxAmJQh7tKTQ2xh31rzx6pQ9EkFPb9iFJiScXTpWPiyXZwpE7fDJTC5g",
  "key15": "xmYcxRcKNJLd8SRLoxpPrhoUTyZe5Ytna2stLuhR3EQHru5YEPVrJtE4QWMudz195SujSigqSoThsZFjTuakKa3",
  "key16": "61zSBoAEiiMJDjeHGzy11g94AoPSsuGXEfxCABd4vus79NPXYgQSkiytLTKUsdceZq8nxBUBdPcih9hjAgVezxRD",
  "key17": "5Lxf1tsSuM7DKgPmo3ueafiR515SXUzcNwAxnUnUe661GGRLQ9JLH2RQfTbHuDmnHZHCi2CwPULkvpjSAytLPJ5Z",
  "key18": "5kRTQKSxP9Zpt4xDL1q7BFaiGruWbezUy561FLuxjJKU3vRnsMUL6rYsPFNMXrVsW6iZr3corbLGmn2QfcMsrJPc",
  "key19": "E1LvzLP8N4Sor4iESduGTJobSbJj8qgQArmMeeKN7z3Rn5MSKjuCfiii89fzhrxXWsf44x7NFr4sBAb7FUGEMFa",
  "key20": "3AqvUjFnjvK2XFobUZb762WLNy1TqkXTMdo3VtvvfwTnpBarga5gPtSQDwBiWLiAPnxFTGVaR2DPFKJUaoHxxEXZ",
  "key21": "59ixPpaPtaEkyTuydkJaSTgeNQibrNzAJsPF4Q9iRixgkgGyNm6HDUn1phHRinFNjf3saymY3uPtkDRVp7BHqp4X",
  "key22": "2USo6gkHc9yjohBUPqEYr7hJGwF7M6HipSdx66KmGXG4ahhLpwtS41vNNd2xcSdpnTi9mZX3o1jHqC97ACMRGe54",
  "key23": "468kiR7CsZcC5EbnrakurV8Zwo9y4VrxZEae4xaeW8pKJc8ctGYXhEiXLtrayokuGJABH3MUwqbm2EuDDmtYEd61",
  "key24": "48oC46dAn6SN1q8TZn6fUWnWius4Ke4ZUpNddkLWLgnHYTpMiSsFfXvmFiPhPYCFQicX1quypeJL5zAuaBEVEfRV",
  "key25": "3vtVuZYHRPcsTmj3UUy4Macpu8ms2EDTnq96StwaxEYMbc1ejGsodENBAqnxqpw88DUDBA66FK369bGKF2wJarJ4",
  "key26": "vcyweii8Y2D4Rd1DfqDaiiatsjHKUKmuGG1zodqBn9U76KLoERrdZQ2DdJf83datesFxzmoqwR3TpZgsET8u7pf",
  "key27": "5CRd91eHdkeFYHwiyc5EZDrnfVJcoH5RA8TQhLXDiJMujNsdBWP89LbEV5i2GryY9yGvunN2Po87o2ZgVPCCb9xa",
  "key28": "SbfQLeq8pcVEW6Ez7dgkn7aPvH3WU9nCSkEJm5ZZUF19MwHwAPYbWGUxH8UvXQuf58Abesvc86e9BUgDqALSXA5",
  "key29": "3EnNaQZuNnfDpGrradigNvwKsSjZyRAmzCN3831o9e87v88MRMeEpEbxmYNLfoJLpYCb2Wi9X3XQEHtXcY8JGXic",
  "key30": "67b1g1jFjBbJrCk58YqraGrQvJh6wayXnBPYaGC9SBijNrFqQwXudRFoCbYDVYcSozuwzD1HNfC51Lm4iksdqax5",
  "key31": "47N2wdZqzwpezA3AqU96yHwfb1tWipAYJAG2qYmxnaHipCffv2ug3U3NJB4jbqxBB2hhZu1ccqeZwCGVJmFbzUCC",
  "key32": "474hE2UMbRqCggEy2QfPW2y92hJ2q551Uq2zLbePmzDERKuduZoHu1c53vMUL7HhT8uKKqeoc559qUJYcy9wCgJC",
  "key33": "ZF4sdBE6EtvnCcvQbvr1hGkXXzVi2GoNNTHJRBWXU5VLR19HkRusPPjYHsoCG7PHZw6X6186YhJSfTo9XBBtNiy",
  "key34": "2A1rHsHjeehY3wD6E8MksdVhev8at9xucdD7PEP3YPqWuGriS53Ezrwr3Hi8kCXnewMyhovDdNxwrnnPt2NnH4wZ"
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
