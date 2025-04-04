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
    "65jhJGsCFyiEYGBrTDRufkDnPSWceHLqQbh3R37KoZCeAhUDYbZboyqrxeUy72AikppztMUX2wnnnoMJtUiHFmT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQU3rGpHP92Rxru2VEbi5xQBo3bdamKxEttZrxbUnTJTJF84N54Tu368AApmCmh5cJv9wLTVee73fyP8KUW526i",
  "key1": "3J4wCFnL1ao4GAmo2QwYKNY55jdhLsX9duVKdXiJc5AnwdfJTexjVVTxKyaodLJ9s7CPqhofjuhEFvN3pd3L1uii",
  "key2": "5xfDz65DN9G77DtfJLwBGHBUt8sJEy7emJgecbus6rAHqEsWdHZnEBjEeQMcTQg9C8SGJwtNEzCzJvAwnQQxPfH5",
  "key3": "328FPPMhYzX9NS4yHf6BVR6CRStgWSJzbHjfXiQ1GVELxZfzDN65ifLLELpcRaw2jBRunV8FQAaCmg2gjUJdDquG",
  "key4": "25nVxQRb3Tm1ZzN7LesbtLwF2FrpM6Btv296nBJ7VMQTvqZPppejopFXw18yYnjEFm9vQGLAzLJBsegDvzDhhqyD",
  "key5": "3gZBkFvNS7qZd7t3wPVX3cGs4RcyD8grVbUFqDocijWcxcE9QSqAtHjHZ6jER49232EcdRxAK29ijyiSbDzAwaH5",
  "key6": "2mtrm98KxbaStuFxStQyjc3MiDQ9Rz1yuEViK5m1iZ44BXJMFqsqwRtz2KcEQb2BV8U86WPae3X6F28nyZ1UiKih",
  "key7": "477f1G7wWUJQxoppmmK3o5q2sQAU1YM84rfR8tBahVSdtUf6gB72gz2Ae5EpCzcKgApuYMCzoGR8nWjr6McmvBBz",
  "key8": "2PaPamTPVLVPm7KvKPQbmjXu7J4AsAJrNrkpVHPD43fdseWFnrmyWpBWkhNZWNZAS2qafztBeYz87XQAVhSkaQas",
  "key9": "3VUSf61tnjFEG5ZaEdNka77Mw5PcPvAytUzdu3TH1teVQwAApTp565TWJp2VdujFZgA8P73TiRYp9bFgLqQb1MXe",
  "key10": "4thyevGZffCM11eGQAxvKQgeanmAkvaP2CQRp8j8xnnUvwqZ8JVRGDh7GzqFhnWC2K9TN9nJgiuBRRwdcPLH3qUB",
  "key11": "59xRncoHyHk94ibBjaaB3V2dppDmd6Dye1wW8A2L9ZNBWfnrrGo26qp1mqYU4LramrYwuLhdVtWNeucX7cw6FupW",
  "key12": "4robSDFH3EiU3YhmL8hBUyPdU9mqWi8GVKP4XFFs4qqVBsSdWQjj7Dzt3rKFqk85Y1j8w2K9jBXhue31nUFgabx8",
  "key13": "TD9F5qkatU4vaXs5GByDuACk3KiRLXyyrXadtJ7ZnUwQJXZ5d2WWcHHLpMoU14kUnva3bRDc8nmWwfmcS659AxZ",
  "key14": "4gWsyoMWiePt35sKnptSiK19pTjXHShKPETiqbxTmDnDBiaTa4XKiKuP4E4BeSyomXHp18E3roSCB6pW9z25euUF",
  "key15": "33KZnbQ5djzy36yK6PM74XcAKkLV26L9PJuDiYfG8RDoKtetHfc6iK5xmkvjxcWzJgPrBnXT7CG9GS4oBFFsM2ZM",
  "key16": "3WqEVD4YBcCNMaFbfSQ4UUQSPeNLwaCpfZRvrzEkegfPHFhYT1KEYq6YBmztRsiTyS1xaRsuv1BWK2awoTfz3UfE",
  "key17": "3hR1VCvY7mw1TM57qt1Qo42Dcyuq5Hv6MnLQfnDtLdixrzeBUxLA1TtLeCrmaZASMRNcb5ZSuGUUED9P697bh8EY",
  "key18": "6PBgsKVezBibhLG68phEKQk8t19xPEJ2x2u3Z7SetwL7AQJ4TKczEzvGEpEVwnc8RRRzEGudyt7pnXhHAaeqztD",
  "key19": "4B8oezF4av72ZgCAofMXMHSq4c35MqBLQKbTUi7g4GaPzg5zKVx1QthJeEZnVR1dQtTxD2gCyS4rq1uh4sHR5vN8",
  "key20": "4f6yRG5bSGF5YmEsrV1oMpTKqyuK96WZjHcytXHUo1biHmCuCVHJXSyma33FeYh9eKqCZmV1fSQGuFKaYyqRG8aY",
  "key21": "628CAFejbHfuLGPnLYQNNkxrrVtVEFrey4VLs78c1fDvdNVMuUjEQRBy26cRTWQo9hCT4TL6BaWbGrApfDNuW5Ty",
  "key22": "3FSnQsW9cStw3tSuShFzyynY9w49PF3KAkoHfi4phtB83k6ekJL5XQSZmQqjbhMKZcFKvrB245unVqRn2mtW3W4w",
  "key23": "TpKXwsRRcoLatkA3VRJRvz2ArNC2AAfabGG2WVbXk6EkeGZ7XZV5wYQQ6G2DCZ7orGbEp88E7qrVPz5xEySrFHs",
  "key24": "3FCRADe5ec5EmWA4crBLFpfXbGPP94j7ndYsJ4EZ5rAPsCzPP64s21FDDhabD3VcddmHYuasYgq8eqm4a8BPjYhQ",
  "key25": "GktWwgn3opRbRAMGTysQQU5fUjMS14F5BJ8GWNou7QadEYJKqBT2cn6FKKhPHXEdruL8aXAGz1zPkfaEd2yQRpm",
  "key26": "4ouWREVznvtfA1ZfrMK7TZh8fy9ERHcJAUVhtcQiCjR32i2LNprbJCuRh4pCPSgN57nHQYhb3JfqZU7tecL7iuk8",
  "key27": "pVidDr6Msbzx84vnbQMKGkqC3WC4ehbjcBUXUYtaAxeZwH7eGyos4MsM371CPkgcJdd61rJryWJdyNQ1okvbwFk",
  "key28": "41aqZEtKYVCwX2voX8bNZu3tVcDTZ6E71RGN64XhJxMW6LaD3D4xCBCTocV6V14yRnM5T1FcGHBR4GQcXXhmysWJ"
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
