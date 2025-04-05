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
    "1QK9cGjedpwgHvzYMXxGVBobjoF1y4FxvYQykGdCEAfFBbsFHtCx7wiT6XLb3PAqCUBKWS1FGVSR1a1yBbMwe2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MS5Xv1vLgT7wbc4RE5Th8DkPnMnQnkq6hit35bfAZSLUCyUBoHRk1uzLJo5H7BTeHdgeYHZ8FLyA4gq43CBMZse",
  "key1": "SZEbauu6k5cNK6qEht59sS3jsekPdLWB8tdDEaS9bMroeTu4PLPkdbpSsgrm3Vi7MMkck9euDxi3gYxnup2FdGK",
  "key2": "3FbPFbf8NC844XRK9DgGRiBKXT9g7uvJmVYWk8qGZonUzmKmf79T4Jzv8R6YaCTZLcgVukpEEiZRfAdkUZkistJq",
  "key3": "2Qqq1ZtiegZ1s6ptjYwsTERtgjp32FGkxxiot1YMQo4HRXmkyksidLCDTX8dEcbPCbdDDVAg3zis25hNy98xBZEk",
  "key4": "61pA29iybGRaWqNuDfgx4f1p3PRbUYtPeGrjdHQEXUgXfTUHqF6iv2bjRRb9yo4vSELCSmcHV88bUsbmsBVyU4rM",
  "key5": "TMYw2VxfzQJcXNmNef7UiqcSUVPcJ8j2obxSVUoYbtSCpxdDSkXM7vpzmUfpTQx3U89J86kEAc7zFuDLRxRdSBK",
  "key6": "2gtiyEFJbZsac2CsquS6oBLNHPgiGUT9m9MEv8zHuowr2sFHH1LrkthFm3XzYFm6zMzvkYafJGiqa3DbKpUYTsU6",
  "key7": "2NKmYG4XyviP8fBqLsJ7QCKzkHZ7gFM7hQy1WTaxybJiqnqPHfQ691483uPVe4YSpdyS9um1kSMjNbFWXfC6V7d9",
  "key8": "3toz7tskv5hZhTs7M2UwiRhCA8GqResz29Vmgn76sKMrqBkTaYyKN4joADDqCBLmDgvEfg7FPgYtUcUvVAYazWra",
  "key9": "37sUJ49Ec3sert9x9TDFVUHRAicKvrfe5QtyEtTcntxLt2shtqFmGucDZNNc1RXzQAG99mE3U4eX9qPj6nyG8cTg",
  "key10": "5mXHNeTiqs2sGzQx3zDqsLicphXTenTzocm5zmssNtFVpcSWtn7gYqQjCodVkopu59a78ruUi7DDMEkzXLoEoif5",
  "key11": "DVxe42vBHeo4hNzmNuT7yjT5SjCZ67Qz9o8pQqrEpSJ1hiWfKLkxDva16jd4W5yKMqqgWSShnSQ76zbGCBfbhBB",
  "key12": "3oY4hx7UE6FuCnzcSucfAmrRgLgEgiNuCGUkG5KDAP27aNePwLncnRNG7oQtmZAFPiKeUM3azR5PVyF36SyQq9BU",
  "key13": "3ufNhptJfVmFHq94Uuxe9rtueq2eZRcyY77VzLdP7VAuuXfAw49rbCYQkx8yr2fdw8gVwKRrkF95otKHGzUccZRX",
  "key14": "5znpuAzaWFKfUDkoS6Nj7fQw2Wcudc1EbvsN37GQvd3La8cx4yJwRErHGWHkADYmyfPCTdqGA1eFkihMguQ6foTY",
  "key15": "5fkpaTdxd8oatLTjSBeiY9s54Ya2Wdccu8pnLJ4PhocVwWV5CEMVB5mYpmZ9rM2rsztTpddJ94RXBkBMc1dyoKar",
  "key16": "4V3xXZMUro6NJakam9uwxbeQXnQab19bAUkgkjatkpnkdrmvtEMfYvqUfVah6qe2cx86S5JA9qDaSPsh399V23Wb",
  "key17": "zNf7E19eXdyR2LckevvMgVcwDUrkcKAQg7HvTBpZ42p342EQfJADqB5YbQxUvqbi2kqJaA6Eck3R8XwM6CteTAh",
  "key18": "3J1LhuNsbtDbEPp7MBGd51voDtSS33Yu8Yb8gXeVLnLSapFLDGoxWMpCfDNgxMW9xdXf21cNh9mHqjd3XKK5Ubyq",
  "key19": "T1H9d9ifuSntwAwuhp6fGNFJ8E9cdKtVScFFo5YZxhk4M85rngsVkBMz9vpx6PE3acN86KJYCe2YYkg79WcgRAN",
  "key20": "2SHPYjGKFYmToKEieoAD6D37GM8w6oqx992UqtBnT7T1xs3ubQ9Q9MwWTPra7wcAvb6f8jWbtCr6cJfBwjJohUND",
  "key21": "5pyr15h8htc2kNEwyVWUru5g6SS7EhRmovFX698eDCXDhBPtA3UtU9ra7K3UjBjjiUBPJBRnuiGoLqnSAHeiCzAW",
  "key22": "3AaccxG1MyaCXiqk9zhqo79RG5XBW1hJAgQtqX2yDqnTAYnBHFQMAKpAQEZtzsi1ywGh3awPGfQpfSmRUumZTXqp",
  "key23": "GjmvsxP6FoBww4nWbCpH1U51sQcXWrjj89BFyia97uLmNf8HYhA5rkKK4K7g8WBfoVurswvR26type4KvXrAY6Q",
  "key24": "hmP6sDmP5SHf7tkKMXwLM9yHvyqmDbc8DorPXrsStPWYnAkXtS317m3V6SxTUSeCHj2T38EZUv7JxXNk3zmPASN",
  "key25": "3EtjgkxCTviMEULY2CceS79tRynQugeeGejXatBUBqStmq3qL3JrnV1AwWw9YCHGJNuAccCCE4Evm6R615X6MEue",
  "key26": "5bt6xAYND1P8grD5WCjikqTUGuRqGxK1e3o75gHFH2Av4BGQHAYnfdU1bqwh4YBowEVasdLg5khWL9FgDDe9CBxZ",
  "key27": "76edEfBMbpK4YREex3Bd1rs7PsVf8nZG9oiy6NuATnKGsfrwcWxHmYZZShTdwFe7iJx52EWxy2nvknqRKKk4ccG",
  "key28": "4aKoGzENNMoTfX7uTAnzi4DvMhws31kShhBBJJXiaVgj3DANLgKfj4fWaKuo6rSDFaJvdbP5rsmT1BXgTQyQ9Aiy"
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
