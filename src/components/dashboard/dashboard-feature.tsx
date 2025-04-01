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
    "5NWRSEmxAXv3AQE1S8bpK1w9nGCL6MmwMg78M3KU4GTfBVXe6msecLsaqpiBnX2Vjci7MyEv2sXUHcVacTnNJkoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACM4VysF3YFwThPjMbV39iij5yGopYqSJgLcGcChKZ94TqPpZNtmPGBmM3F4TWwwhZKHSheMencwNxDuULBXcFj",
  "key1": "3bjCGoiPYqD1kBe9jf6FL2g9KJd3pAk8Y4VRKZHBVrKQwmEtM4Qv2oaCvD2A6VHr2jw2x7cDnfWsKUthEz94jUWv",
  "key2": "2KhhtqzR74EeNwDBRRwNaYSA53W4hNR289SS4ah7Riz7iHFmtfvVPSiCgV9wGAzudGBw5Gk4b3S8pM8cQx6jXEPs",
  "key3": "4XxQ8bbRNMZAn2jconWzHGr2aQt8RLFfXvs1bdKPsMLCSC24y71bMeJ7VPGFJqJ2yHiYbEDzNbcevxcz1hj3SKy2",
  "key4": "4DUmFcjarwwXSbtsLsZiCer14PYLHwVGUzKeumHCn8SC6iVe3zdVfWpJbN63bsXizfebyF5CZMtQkghUxZbEw7U3",
  "key5": "2CuPhsDYBCk9WfAnyTixTAtZReaDocG2VgWUH7exUorUbuHHdXNewUv2hq6aZAS1NbBdYZKMGTT5bYCKvGexdi16",
  "key6": "2S4AvAuBDzrv718SVfDryqT7an6ZrxCPyi4SdatJpF6zkQWuUNNiFYGt4osXVHBmATZCbFHofdEcWXRBESA5YKbC",
  "key7": "5A7nVAKv45wdXUW1c1M3e5ppWH7jewqerrUDiwK34WWybZ79Ko4CrUTN3bJrKtXQK5jENyxyHhxijTRGKjtcS7oi",
  "key8": "5q6SoZr8dz5DinMPNeMyPgdXqyeEqUJrGdsJCbHHgBPKjbuvGJ7J2ZwWbo6vUSXqNFfHBCdgfcmRuWWc1ftZ45N5",
  "key9": "5enU12Wj4RUEHbrDjDBnDfpJRaHFheJX1kSeP5LqvoLSdeEd9ZaRbqDFKbSAQ4QeGrAEaiimPdQSoEVu5dTM7YZv",
  "key10": "5rsbyDkec5Au6YD1EciBuQsUwvSmuw53dzpyMo5S7R1VU6TvzAmC6riCS1z5sNQpNoHiywuY6gaQFbe84ZiUjiir",
  "key11": "5kRgcSRgPZaSUMuXZrRig1PLrMfXumk3ssx3UfzSsa4LQcDWtxaBLQaUu1rwiWwpze8LAC19k4N5HSwtFBcuhpBF",
  "key12": "5tuJSdAFUwM53HvJ5tgM4FD22vzcLWQkdVfHsKe2Nzbg8KHceJHUhbzcVDF9B2B3TMyaNhBbJQJQbD2puQf4FWQd",
  "key13": "4BKe35PpZbUkGvt2fNQoyW57Mza8QVL4Qp7Q6UyT3ihZG5gQP6b5T1Hoid6GzZDWyaHCKLxuTQTTr1p5DFTomq21",
  "key14": "2c5wH63TkVY2LSjBddGPqxXk5kuj6rzUXKXAGQGURqbg3xYHpkorUNbLqEErHraHbAAfvMwyRdP6m4YN1KzmjTzP",
  "key15": "5LzWs7TmL9qpBn5Sw3ExVjRwVkNsJFnKefX9B1d3zijnNtLbnZAM2ayYGeBJCHZnjt2MNtqosrvEFDmNqvmeUvxf",
  "key16": "TMMawXVyriV5KohpAZDSfbY3Tqcna7uKMKatZzqu6GdR6VxygzBTuPL6TRQcWS6rmzcmhku6hbLSWB6hvE1MSTk",
  "key17": "4emSqHjahcpHCGNw6sC2AYsfqJoY9UFkjEAvirLWzR55FxGEDziG3fed1jceSkwPkWrGnXHyhGNdBqph9VgoWino",
  "key18": "5VtazxSTr1UwSS1VBQd8iyGcfq9i5zmwsmSk5KctV8KW7kSHC2G1NXr5ckW94TmK8veGnJqcmjqAgEX83v4pXXCK",
  "key19": "5QUJyVmFJxeQcUnxB3m3ncSz6zKhBPaskjm54Y71GhV6k1qTh8sNUGfUhEDkAr7zoDf2uLccHvsfvbKe4eQXYfDZ",
  "key20": "4GVPn4493euPFKLqg6L6nviCHr4qMb8TgYPbofqEaxWJMbJTLhAeEG84FZpm1QUAhViey1vEdFsSGEvzK6BA5oXn",
  "key21": "4vXQomZYBMhUNoCZecoHf8ciQixkDatKmPYWjYYxvhEWhDrCVkM7RftHnsjyZUgnTpxAHHVsLTBndAKUWoeC3DYK",
  "key22": "4BSSauWmQNg4QMYqocpn9jYor9ZkVpqp4zzR5s2BpSY3sapAVahJe9qsMcqmJjzPpCGEbirPok5L1wGmaNzTKuwk",
  "key23": "uQzU5TWaX6sstK9hyuum6vrzFBexHiHYjRicbJPyo6sBFpG6x7wakL2AP9qc3hdCNkzQvdbBMYC4KwVJvELqsdi",
  "key24": "UL7eivGFwZuKxEyKsdU3EMyydr9cubPZdhzvZZfpW3dtwjXW3gZUc7phfqhwUp5fsQcRZb8JJ7CgCZG29Ltep47",
  "key25": "5pb293ZRSrzcTR1JfM7dYLb8HXcW9D5eRiguwFyu5ouAsLxcw6xmmr8zQM6Hw7reHKJcXZo467LoCUVCmqgoi1c9",
  "key26": "5D14WFf8m8YW4GNBRaPwP3HTLHRqTi8oMGQQ8FWkkPpJ96DEAzd4CirBin7pxCcRb8Now2BXGNWcMpRYZ61qfTvD",
  "key27": "4pXFeEPyqtjSHAuM48cLMKpiG2dJmwZuaG2Lg7cQadmWeSJRL6NZbRbZ2U4jab1iEnYviBReJ1ftVxWHWMM76Kse",
  "key28": "3BT6SViybthwhRTg9TCVQFuDoqmM8LA8tRejAyUHQNCGcoEu7jpsJy6eAEGNAwK8dutK7Yo3R4HHCfXJAdvEfQBF",
  "key29": "5eoMwxp7tcSF3MJ5wNRwzwaNx7aXC2UpUmPmZz4sndg2pdTyABHR7jVsEuoGL8y1weh27MvN3TyVomm65ZftMyjs",
  "key30": "3QNeK3QP1YWeTbo7nYWVGhbevRuMoXiWkMn8WSbUqkaGDjMweAbYtCvCh6vf1FqicZxieSBdy91Y972GfFMEbEZG",
  "key31": "5HqWfKFC8PycFZ7venmUnuM5BgF7FbHViWqtEhs8kexzfGUxqj2aSmjnGpfitQP3mwBjzxy8boNoJN1xvoLeN24z",
  "key32": "36wcoj8xB4SjdTucxmVjqy7ziogjX3ed4hXfbCaXYdGh4n6fiUTLbrD1w3nPapxHVe9T6PEV5fwkN8VrCnk4BLoH",
  "key33": "3AmD7a9sCAVnjyDmHZTVL5qXnyfj4hgpWfLMECmHo3PFS3RZ7YwaQjQh1AoodrYLrM6EjqKbpDocSguKfYtmgKVZ",
  "key34": "K1iRQEk1ajn7h1ajcaUwd7H3DiEGYLNzoDHz2dMAWRCAuJjWqRs7o6qCN85X2hHfMdDeW32xcy3VWFygJFs3VrG",
  "key35": "5SBTCqJxU13i2y4hLo4cdKkUAK2k6swXTj3QNKde4jbC5Nd3WLJSjmiH1zYtu84REtpVRQYS6sYD7rtUdM7k89Gp",
  "key36": "mPbVpNsvQQpREbgoyHkU5pFoV37ZFXVKGe4ujwojnihgXZM7utqdD5XQpoA6cBtxaF3DLcjKTnb3BQr9uBbc6PT",
  "key37": "4HViFQ4ZMaaKGRJScz2V7wCJ2HpFpuGJ4sXD8vAxzWaaCyqfbsFdQYZfPcLZbuc7TMUQPdg8twNNd8DZNBUGRpHd",
  "key38": "3u9eoZHJKxMWUb8RP4PL6baPcXBBtsLpBhsevKRKEJsf8qf92WedXVpYLJAa3R4DdM59ANTCtkGytSNc4Z7nejos",
  "key39": "4ALcuXJe3558izw4VKHRAjc47xPf8mnKtLq5kpfBQTcuHPdf63vzT6Xcgaq78ZTiwVEMBj45cJ4pESRJr1BtfGnT",
  "key40": "2tfCYcp1NoLUnKwoZdarpqfSaCDNVnZVSGCFLkbVGXk3HxJMqjExS4NaQU1azwyvyeNDGTryPnXkBqcgE9CGhGAj",
  "key41": "3E8WNUensfQsWPy2NHShUxvRu3GobcpjSmRcf1FNGJ6HT3smjJudcR3vJ7Sx63A2tdGRLKYxvPqX9qwBxMeDHyyB"
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
