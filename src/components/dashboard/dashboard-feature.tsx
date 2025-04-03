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
    "4ciLMSNJ89pKHVFmszmWGhzDQBrf4XV9GCVFgXUQXcvL2Qnr7TV841KsTR3dX18vD4TzWB6KPxtvBjc5cm28kN8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDsn8mRMvZpQrT9iM7iC7sa23TdseZ4UZvNieVaAPAZc4DPuNksYGPfin7xte65ouDvgXkitJz15Ag6WcaFHRGo",
  "key1": "wHLtgJ1WCLa3RhBsJTLsNwAxg4TL5KLWJH2gBAXDSUxmnp7x5kRybLL43WDkMz72qXFcTcGFLY1mu5uZcBrNCaX",
  "key2": "666sF9bBsXu75FSPqhb2oeU6VWXGQEw3DhE4bQTAb3xiA4c6gqKEcUeSCRP2zcoT866axYiW7fhAz4sGrkSH2mMz",
  "key3": "5KTFPCM21gHBKLYaS5aFnxJ4ddBfYQh9cDzq2m6cUf463TB2j2hvgu95Gadt1mXCiqUXLDwffbSzBq1QucsXTqsP",
  "key4": "4XQpakY6nzBTyTrETTPQTbXAVjfuJmp2XtnS9kV4us3xyK8BNvSZCZTHCdV5dLLza9pRTzsB8A7yRpVhLvXbMNsY",
  "key5": "5q1UM726PwmbnpeNhdei6XHSkYgMHLHqwaiFPi8ZYh6T8GKsAwQUbR51rA379Q62vUVLjthqSfzkttNahGP6ALCZ",
  "key6": "5nVpg6tCgrQrVt2fJzGHucLjGxNJW5693RMj2J3ywCAcziJFVb9ZutnxCi17SmAkUaLYw4ma511uWpnGBVFjiybA",
  "key7": "3Vj9vifXXysAsWLiTGc2DXHFqZz6v8o9zcSjQbxPdeuyPUorwWyXSiJxF4hCtKe9fQe4TEiroBBLzJwh6hRdmH5V",
  "key8": "5giKvH3sPv8ZHyKnrg3aCNykCiXwZBWQqvzJADPwefmoF7sRz4qKq1gziojpApuJQqn3F46qWqDJo8yqh2Z7bNim",
  "key9": "36JS7FU9NSGw6D8V4h7QjCgMygPh3UwXzyG2M3qaALcPJUxMLjpwE1cvvkp5ijCLXajYDp5y6TBBGYc2nQTfQApf",
  "key10": "2dKqUS8vhPZTRcjhJUjNAvaTwN7cT6qLFpQqZUxurqmqjtbPa6QhWntVcxFLuzo9aHaygUoZAcJGU8FVodX6ucFw",
  "key11": "3NaMhFdoGxr2hhe2i6qJcBcjoMtftJG1W4aacWqPFKEj82YUsfkW1UEcMFQiscgoJMd27bSrd5M1X3t7pvHuE3d7",
  "key12": "4hKTk3GPWrSsTy44Ye3vhy7E243AX4qmjdyfLKu8qi333s47gXyuxYzJYqAABNt87HS6dJsR3UnW2aCX2Aa2a79y",
  "key13": "z7cJrBK1YPLVHY2SvPNw3VUyebcKxd1jRfoTQBmtMbHoJXnpipMTiPR7sW1zdM47TFhbLX5eX75y5ma8bWoSHEn",
  "key14": "23eXbcjjwhzXHnaZcehpNnGfJMN2M3CqkC74HaFu1R1yauDFv5UMPoG4it7z1SfEcSTRD1xnJw1trXtDGjfByUup",
  "key15": "3bNnV21X5WoCq36fq2kUpswhZiAhsBebCgxzXtoF7trQHxkTu5NZDvLXBv5C59GNBZjxpcBTK1CJcAQbbx9Z3ZYj",
  "key16": "46zhAQtbTqS1nzSrQSbXrNfzLEQaca5zxVXVnRyKXZC7RJdH29N5VLnkKmVJ5ge3xyMQqSfX7aC5LaDin5gXoSv",
  "key17": "2MiZGYNS2hsQCgRxbSaKKaEbmRdrLrbvWfShz6v2FqHkfjt3R15EfnQ7t6UmyJwv5QReLFZcZRdfR4KcKLtWPPQp",
  "key18": "2oHuaDnDieuDU8BBVFNnJ32u2DT6rW9V6Li4CNVPJUmTnSZQRz4UczmqBMq7zV2L644JxGKCiH2dpjcPGDH9PhHQ",
  "key19": "22LXQBjjSt27PSGSAfK31k4DurdvJLAyEG9qFypJPBf4jPdusBnvcCTyeKuXtX5hfgdpmFLx7F9QenDvXc8PFrxT",
  "key20": "2KR2ETuDjjUjUcNt9nrCEDJ6YPuPH4M4mrNVg9YTAFjrJDW3deg58k2R33cWANotyhLRG5Y5B8BpPYwjNND2vvf5",
  "key21": "247hRMNQavbQs1BLmMLXyFEfB22DzvL7wDGcAXMQDwbjF3EqwoJMFoGiptx34Wcvsp48DQ2w92JP8zkYiKF1wS7Z",
  "key22": "67JdvKjwmp8oZZvHG1H888qd2CaDGo4hmiL8vmpKFF6qfZzn9aCd4n8SA98CEUmCAnZhZd5oQcharHWPnZVuobWM",
  "key23": "rqmfQNMa3oF1tvZRqpaBSyHrhrDe5i5fk8ks37xSezBgNn1ba74oiK4jPownkPGTexiar7ZLADoWH1vcGmJSx1U",
  "key24": "49LhQNUSbxk3fVBkoWq1LX3FLurXJcja8RpCqpaa6dM9BEiXxfesWkdkeGZHGgQgvMUgGBCx3AQk66Soz3fjHzTv",
  "key25": "67VjHLHpNrQouXvfNjtqhQ8EMc3UH55gAtYEkK2uQ6iAmW3zfipAcDZhcVFFa5XswR75xCWeNXMfvVK8y28Mqrox",
  "key26": "5Fr8PSayUHLg7oTpUUqVscJDko4372U4ZquXqtY4kf41om9t2ee9N23oUTeEmzX7wKxszSZYLfHMqQ1vg1Q5NVvr",
  "key27": "3XsCuLjBvx2sczJLsthYZpDTTRuLrEvWdoStzDWmQiNMM33QUnAsGH6VwUCLJgJx3XrtR8ZuvbkQAFaT4qra9bFx",
  "key28": "35GLsNeWLWuoppBpPvSE3mZS2fXEU2qGz5yD2JaDJ9q9JeX6PhRMQoxS9EQcy5cK1hyUZaTjjUx6xfPQ8vqByVva",
  "key29": "4PuMbA2ETrJL4GvcvXtwg2ntURH83RzcSEyoGxvbY44Fhx7Zhxz5nA4XPFxJ566C1FQneRvGaTBUBv6mV6eW1LhB",
  "key30": "4kcx2zvpJ7eneMPedPCgtww5UiEyPzD3cfMrueNXSRQrJgLGSW2uoSA6B3GQQ56y13VNPDmhDxbzHLvE9qU18sgh",
  "key31": "2jJUyivRhGQE7yAJT8NkDJtwTJemhLvdm7QX9PTSKWzpfeqkhkm7ffGhfkfLmbP2hgTCyih49fzbEPW6tEruXqi5",
  "key32": "3eDLaCAJ5jNBDBapZr8CGUYN2mCYP3QrNFgyYu1gt7Wi4GcuoSHVD93CHDF6YTikYsawFh58fo2kv39yhYosK1wT",
  "key33": "3BpcKjZ3SUuehBM9G4UsbwpJBNa9pSwnzKtScqgGwjCESkMj2PwCF6sXSoTPRee5rC73Uy9cV2dZwk8xraLXXJxx",
  "key34": "5j3gJurQvuonMkExw5metvYZMeH49J9wUN8US668HkSGBpbo9xiViBG4Cyry9TGc2h7G3g4bGAjGYVGp1cYDBmnv",
  "key35": "4hrv8ZtAR1RVHBGqarh1UNRBjEW5ZTDP27QQKnwVB2Y4fmr3zhN9eCwMxJb3HMZav1STqNcEK7CjkPks6YhW8YSy",
  "key36": "2yDdDWWeQKkNLS75UqiEr4xLcfnH7cgcimZgLb6gGxuCNp49C2LA9rcazpcJ6tSc32NJQc3AZnGZuhkw6n4JvAHJ",
  "key37": "5SemF4ezsfDm58xXPZDwnGrj3cVhKu46ny8ppmKwysGtbxuoBrn8FMYS3sZWGH7J9PD3iti3oCuBPsto8F4nccBW",
  "key38": "iKpkcVYUTXuANrRDJFy7F6MNTrVvk2eod4YxTApqDi2Xgp35DGqFpxqAePnuXTFam9gX6W7f4t1r2YExXtDVkcK",
  "key39": "4FM2kTBPqYE4xA8p5HJimbfMhw7eTmQr72wGeDmsgCTT1f7evN5QKaauLPXTuqdQLwh4yi9zB4oyERH6FWNoHAQJ",
  "key40": "1wbVMH3jE2Uf5af1nzYmN7R3JCrrHL5qgHHHLuBTr8Wy28YY5SE2DrkPrhDc9ggRQMokQHJvp6f7rnqo38LDTFb"
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
