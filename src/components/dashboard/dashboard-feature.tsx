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
    "2HxfTTBu5vJNqMnXNjfVg2jt9gisGmZthDy5Z6k4oEp3CVqU4c1mEB5BW4CvgeEUYtYK4wGaaHPN44JHEB49Nege"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJH2BdSwb4qwHiXKY7oWSaFyXcxCrRBeBBctUVmFZYcEtAfegtcL5qg1G76p1QgAkF67DskLFz4659qFQTx6kfy",
  "key1": "63cAC6XsuPxQsRf8TQJtDzgpmdmM5XuastCRiiAdGfdk5CyVhtaxSHKUTfiL3pzkoEsevhrWqtcw9YPpPsVPrUa7",
  "key2": "34wve4PD1iqFN2ALBtALeGAXizdsFAvdeVqFqofSQHjnhhjEgUxthixefCPhr9baoBUp1ip3Vo5NzzamH6MS4q5R",
  "key3": "4tPCBUs5KuvCjxsQ5W1sYUaJP1Yw6cJFsoADkMvPPmp2rBaxNUgBsCoQU7fiLbSJjcdX96bHTMT9R4251zVuSveZ",
  "key4": "5civFQfNdX3xvBgssGmSD3hyxtwACMiLfrZEqE7JZQ4PhdQYf6YnB3abmbvqDK239sWA7u5W1yjaor4Jeq76YNmR",
  "key5": "35KjHv3GDH6vcmC1MhUDub7g97hDcHz1TsMpCexnT2fsAenn3e6XboxKP69i9EhtZ4U9kKZm2miEjL2V8Jmr4PfQ",
  "key6": "5AbKVPe2bkobw2MvCHDuh6KcF9zzHEj83HqHwXyRMrcNHZPQjunM4cC93Z1r8J95zWT2o9SLNTLpfRdV5qMou8Tj",
  "key7": "5W7ZCRPuE3Zop3awxfQbbj164EYQsL34WCGMYkCkLZGkPMA7iDBKJmUyFQJhdYPCiCg94ijKDFyZ1sh7MswRo976",
  "key8": "5563boNZYTEmvwAkZd4R8q6x3feToumezcK73x3ZK7q1otqR7rW6gQDf15PiWoAFPukMBSmZT2vS4nHc88RmMjN4",
  "key9": "2MKtX3ERSQU1tomTgkdiAx6TQ5qohPrcWPSJcfM5rc3CRtD6XUbAzKdie3tWMt9X4piGCNqPXcfXbfhdNLrbE2TU",
  "key10": "2dxQP9tfYJL7Foo7NZPzS38swqTXtxikpEcZ9FSs7U8cPHabpeouP61DhqmTjqWAyniweymp2iJzRVWLZMHyrBYE",
  "key11": "AirWnaYgu7dn1eMaSAAYZjmwnKY4hnKW27MBzq1NdoywdpKKqSore6VwuAdwY4UU81Vf8i7azUx9EVnWsLJAHsK",
  "key12": "3qvSbR7dWDhieEsXLEzn3VQXC1vwxXLdmtxBzNae1CvzQQaUCc85RBWtVTndCoBhC23j67A7urnoLAxtVZhVazeJ",
  "key13": "5Ddr7SSGJJhVrajZBiuLsWggHTVKb296EiqpqdvYfPBxaRuVJBXbXyYFdaMNiwqoKcfLgqpJot699Y7XdPyiBBf6",
  "key14": "2VYYb6RiA3ajmgo6aSo5QEYBFKJnL6ieiamSDk6UMTkVcQt73LsMyKMGb76hFGZR2uWeEn2WZRKebSefdF1kPFdX",
  "key15": "rHg7SPV4cVnYm68keepRBq3jDY6QJCTcBBHQzZpBAQd6LDYUipuDjB44LFA3fqpMBpTHD7AsAzsU69kxkad5QK5",
  "key16": "3qj3MRqBTTAT6fkVywVpPr7wdEFabYMipUVrPHkGuAVU2XKLb7Vn4cLPSP6Fw1DzxepCSHfSe1WVba2LoGy112Vz",
  "key17": "4YJSJydy3PsqkARgp2XccKfbi38tkMWEoDTDd6PhB2ewQqAz4uT6pqoT9kTs3uGnPGajFtUfkJC9eYk9q5jwMj9v",
  "key18": "34xBdAavSNF1e33X1muHtgJCGnrEoWuJebHkk6ZHkCeVBg9XzSjC7Ea5o58QsUhft7HqMDKDuTQkPnxSe9TCKkNR",
  "key19": "3kBvNQLk5sUv8SoiqRaSxC8KHjP9eodcd9aAmVFgS4oYDrBiYSJRNjCnptXeoPGbcbAQGE56e5dkbRPwkHkVNDPK",
  "key20": "5YSACTAXRVPnenGcmxwPsBzikkNESnbVPVn8SmXKk94W3GrtnuE4w7hr5eYvHfKRAQsCMEWCE44ZPatdew4AEwM1",
  "key21": "2RkCCApJgcyoSmUbLr9ndRhx15oN2EAiMuzK8NP9JAKC4tncrqbMbvkPuVE9jFviMXuwus2ErvEyXZfCqmeC125v",
  "key22": "CxfRAHGpPqpyxJD8KnJRtnNmCWmHsybTVJhMxTx1F6QdmWnGrkPubq23LCb9W1CBJSoQP9nkNzwCSU6q3hRxMEa",
  "key23": "nTdK2aqbKbbx4hArcbV2wyVMEuT9uY5dwtpxfCPVJVv873ye9LpUJxNS7XdG2P26HasdJbjNHNMeHfsCfACG4hZ",
  "key24": "Focv7oo3zqjeBkDHazJRLiDvF8zNpe8V4ACNXvqFe5XNrzWWhvWjhGHUH2ydKZzAN6r8zMunCEGsAajHpft7Rjq",
  "key25": "2RtQgUmjaDALp83GJPGLtCuV2hZhrCrUYm1eFz5t6976Te99AXXU191knfiPAGJaKMyDJ1bQQ5FqK7pSTR2C4ctC",
  "key26": "4QJJxYCGSf1BCyp5bCVJxTwwU6PuKytrb8xZPKqZP6Stjqmhq6cbCyybwsMwE5Jdb5yuR7iE2HFSEj7b1fpqDamJ",
  "key27": "2sesTSqhQxMyzCigDokmTjJyjH9WT3cbPXrBeVShfgXN7ZveduKioYPdJAcawZpLP4vNFBmAHt7j7x3rqa6uuc5e",
  "key28": "2J9imJJGzH3Q2F2jrGiKD76wM5aWK9o4kyryqRncGyZoxtVCp6m6McPoSiN6wvNDGJrXm5JLkuvCq4E1s1Gz1Gvq",
  "key29": "N79rUNB4i5PN36yvAQhctW99aGfnugM33zLEbqDja12FeYLD6ktV2DZjmC2yXya1zszatXKyTt7fiwPFKsbWK1F",
  "key30": "65nd7RjRCrFUQa11F5dMZYeYVHyY9QMq3RdRxFNEjagFdW3urchUVVUz8JcZuiHJKZPyNshUK2cKKGQm6cegoBb",
  "key31": "2bdbf3pjgjDtaRbofat8m6fQYtpQ7kaAvX4kU4D9Lvhyzw6RZMk6CfdVFMseC2VeqX8khr5zxpCB3fRuggFCZvu2",
  "key32": "THfpKEgDo7K6u5rzgMxFPG1tyBGWD291othGvzKfV1YB1tBFo5xUak71DMVaHHh14dKqZWthALwNT39yjhfocNt",
  "key33": "5BhrhhL5Ug9suM45FEfYMLGrG3WHYBPYhRQ95dtQKhSmpLuJP8nrEdzSCFdErioV4N5kFYStoy6ffQDSHQXDPS7c",
  "key34": "5s3iWy5djMC2PUUy62VKgXCXfWvXRhSNkcobRCCckEvHGJa3sSJkydHUHi1zQSi3MimiCthGjQuvgNcKRXK4eADX",
  "key35": "3HKUNwyXiBjbV7ZnAZgXUqRBiKvzPLNUXe71xe5ZX8gChyJpo5EbQ3MDgDzkWvnxLs1KcaCZHRw2vhtYjPpuU7Kt",
  "key36": "2QxZFEQ7zsc6CSnQvakyoQCaiB5mcY5rNrMsgRTczpkjZ9Ccu8YKwHSBrrZCgrpZgRYXv1SkFAE2DDC2Ae5NBa5c",
  "key37": "sDKpZDR5kYTywXcgQbE7csZtLSoW296qKoHvsdrp7KMNYSMUmwffrgkKmiZzrnKaPhF3Ah8j8Ep1TxCkzZktL7f",
  "key38": "53vXmUtuMDJL6nnaa4JQ8ZZU1f7GG4TFdPwF3pgMLvo9aycKAfaY891U5wArVGqcD9FUqFN1uHEnMZxRDZfejMjh",
  "key39": "Fa8MyvZEsgzdVrbRDf239gvKczUMUMpZEKt9YBsBByoHd52gm3eTU4hdKEZR7uWLdbUe54QQdhrZtSJiJkheCig",
  "key40": "5JALnKhvot7M6gr3Q4AMeymXQ9Sa7TrQZ1GqqzUTGa675YaSizZ2h9VNnvqTJjsiRrLXwFgTKM92arHmsuCXYRg2",
  "key41": "U2Vdof4obavYAjcqKJZ3LbeMjkDcuFSZq84AWT9YzqhcGFwdf1tTNXHHZA2AEveoDdceqT37R7KEb9T4mGWmbXF",
  "key42": "4onVqG6AV4Qf4nfxKLq5PX7rgq9Tz7YdcQQr1xRk2zjF32a9UYMXGWKKhxvjyJUhYBgfXN9Lb3NZGwXdWmshszVX"
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
