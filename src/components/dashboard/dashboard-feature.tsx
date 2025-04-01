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
    "2Hn7BNMAZQD85zVx6i2HoueshZxeMihePM7CkwDxQNpqtTk7fzNHJXQpdJJ6Gfj7KBCqC8atang2Qurqf1jB5bVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UttZD5byCHUVq1db3dXxkF4AaTUAE6Wfg9TAonXm39zbnR1Dm8kEqFQqV5VJ1cVRcmZcfJTFHrNgoKZWUJk4GQt",
  "key1": "5bYGrxVPtqDrNdfvxuU84ciDFTdWpQVKUJE9yRzTjRDyremE84LPynkSC3DsFEWzbk26F2B73v54jPEaLUXUkx1t",
  "key2": "37LUtQSzjfyY6zZ3fXmwg43wiv2cjtDBz9tKRsY17G5qSQbPaHV5tN6Q816kyEV72PcoBLEd939TAkX4rrdDNQTC",
  "key3": "4mC2oPa4j7xgLjFR4e643BhwfNWz75ci2h4HSwswSAyGg9CLWSBqhEUCaKBaMaRYP1pWnwNXCRRTUMFbBH2cF2Ry",
  "key4": "4fpk6D8cSzWsiTDSNp4g6xr8jGmLjtwusj8jub8sZBfSiZa5Y9rpRUvddG3VvmBxRFJZimty1ARQzWEDHXUfvnw4",
  "key5": "4bsVNWJo4nBBnQgmbWeCnDY6KR8XodFyV3LBgXTnxELFPKqiBPp4NzmP48RhJmutkC5RHRLeDhmByL49kYfvVZjE",
  "key6": "4imFpXFNx966GGY5Pg8P82uLLmAxW8UBTrKtw19zijQizEdGLtMLEz62iq9WsKX5a56acg9qo8UoqFoBAAv1dH3P",
  "key7": "2UhieroZn19mHUTFgp8AZ3oDq4hc4yq8AZnnGBbKq8NeVkfhGpwqn2PXZvgFUPXcv38JRAHU1DsAJeaAurnV1kad",
  "key8": "3M6YeNaqyom3oow9XhewS4titiqWHQrmLUvp4qWboHKbB2GxyRrhNXo4Ddy827F2tKqSjgGqu9nguK9WApa56Qo8",
  "key9": "5bNvj9ZfE96f4XDT4V9opPDTmynBSotLwjKkDoLoVoKPZRzScHhzaJGBhiThtLAQxb13r7Nj2jW7hB82oyyWLtJx",
  "key10": "C4ycQxUdnA3UtRKoueNv8g2ZML98nSvFaypVEYoLRWWe8uCsvPDQgZvVHMdzUpVbiQ6x8zVAFc3BkzkZHrL6oYD",
  "key11": "E43cPX737LTSxCjkoQJosVHhUV8xuqm4cZAtroXDAkRNNuLtKbsLExJSrbvZn4chG2E8SXeoxB79bTww1n1aa5Z",
  "key12": "5xg6Z2CbJy3fMqkNZwnVnwSzWtkFDs9pnyp4A6tZc2Xiq2nVuxEULrCEssx9y1y6kBD9c5ksct3D2EpqXDo7ZXSq",
  "key13": "5A12yMrLkukvTt6bgrky4gwtTgvMafNnPyZs3Pk6W5XWViRfdpzLRHq31YZPbtu76TtVEP8r3nkocvn3YfVaUJFj",
  "key14": "5y2H9hPrzKdBRwGEJ5b5Vx4oda1upP8oUaegQvbE8zULxHCt2RqoEnvBcRRLy5j3MieQi6aZRE8KGuAd4tMDsgfD",
  "key15": "NY67RzHEZfkBGQgPUEBH6NZoWMXSzSpEXEVhcBAJ2QAssAUsU42zf6f2FfQWQcxdQ6b4jx8fXW4ZzQ9vfWDniu7",
  "key16": "4Cm9NBVLq7z3Y1kPufdk3t8h9p7Y1KdeBojUZoEnfuB5iRSYMbzz8ZRKHBYJV9rGNNxWq24zf8RAjQhMnJJf3kCZ",
  "key17": "4z8YY4bH533Gkwsuo52pDyrJsg8ThNa6fmzR9f9NrUC9ijrbAy1ZgwEBo96Tb7YqoWgsdfGPPFDU3DX2A6B41hqM",
  "key18": "38dN5VBK9dRCZLrsxWgvt2StMQcc6RnP2uRMMr6DsxqperXb8b8YdUmEVYhQSGMg4CdTUwgdeb1x92X5hqPH91aB",
  "key19": "2C7GievPjW7fECNVL7df8d86Y6qL4jjJuwbehBvTgLav6csXnY9B8bXfbCCKfuPoBVrMB36qSUYjQZKh7FtTgsya",
  "key20": "YLArS7F6EYtKZzN7bNcrVfJWACRegSVVtwWiB8zEGxPuKnHsisNsyutA6QnHKN76SwzSQ5T6XqF54icCdTnibxU",
  "key21": "EJxqtXt4kc3DLhiWcb5yLSgPHdx3iqq5kL4ysy9acGRpDr36rTCmNsG7EPypaJfPVMS4sRtEaSzyUN7RVxcPGew",
  "key22": "8C5MRnDd1B1X58sWhXhodx6mdY8mb3frhrEoRprRdwvePEkYdUevnaHfxugMJk794QaXDga7GTg6Vdb8XiHoZc8",
  "key23": "4y4Bs1UqYcLDqaNncox8bME9TyLKTpXAsjjNey6CRF2YURNEyFoap19jrqBPot8ZyfnXLrzfHmtrMQjznc5qU1jr",
  "key24": "2jxrJsmGzCoPYhJVDGzJ9VPrwJCUD7FBFHvK3oMaif5929bBHM6Pg7xxofQF3ykmuo3BAGYnFaCzGWJaC7vrvFGQ",
  "key25": "3So1QFrVCUpq279g97DHz1vSH2Jxhuk5tJc7ACBdHijXZRaF6hk82i8j7zpWm2EMDxtZJQ9Zjtr3mhQs1DFmy3io",
  "key26": "G7RAxokvfgTfzTdv8phoFv7BUquc6NYEZ4GcuW1oaZRq2qELua4PgiDYFeoJH4DER9e5i4NVcGrQbPieqM6ePws",
  "key27": "3gbNeneAZtxzDhhQiekfTdrqsEGrBDE4ume5hWMYeBhbdGZ7y4wKHxo6ArBa84TGGTPPV9ojZzVnoR69sMN4wAAs",
  "key28": "443ZK2MeJwWBCA7JR2ARbDHqzg4TrMeD3V6sFozKw538Aj1WEbmAFoHgUH2z1z4HvcVPC1wr8HNmfo6UbJnarkjy",
  "key29": "3mPoUAxzseBrgHmN3Tro84eoevmJoSUp1nvFJ1nS4u7dS1r2taAkWi49e2gMLWCQMhmJc3x7ptxKgErrvGkyCTQh",
  "key30": "41pKEd11odNuf95uP8v9dgSWDEsTSxn437mzfy5GSTqgmk6fniW6bBViCtqT4ZR4PG7sdSyKB9YJ2A4QZgcRxcZC",
  "key31": "5P8hWH3MemCoZvDoxtn8xU48ffcCSFDiBXkn2Gc4XqEumNhL3ViEcutqx6jLFoZitEWekXQMoMtnFBYQHrPZgMRE",
  "key32": "Y1vFTV3i6YRWnhy8nLX17PDBeshSZgexSQmQvHPgVBggP4qCdtVeeQCK1v9XshwfpnDCte9hbXKvr2MFVxg3bai",
  "key33": "41sMzc5RgKc6kHGQDMhKcjruriwy6hNRTKoJCxJLL8Go8Y6u4ekaHB7b4X1GdyrWC28PCUVQy6B7FSwPi7jrwKAH",
  "key34": "56H9r3C39q4Mve56hnzmnBPYCngxYUN5d7M9UQd86phxQ42tN37Gmnq3spLWhq2uvZnu5ewEF7bDPdxrUuo5uq1b",
  "key35": "2ofVw9x37zZHwiYpPeeLG9PgDnkgd1HFPB9JkaUNafGs9nbdhbfUsEw43FZWmXip5XinRRJzbL5YP91FGAeaZhE1",
  "key36": "3X3zKm2dM6mGuinmvFdYyoVAcKYeg8Y1KxthiTG1oKjPYVypZqNbgyWWzmCHJ4b5x61Uhk9y9XbhB1RChudgXbTd",
  "key37": "658GZgUWbEXKXZmvRh4rNhMHTefXVcBcaHiy9DgNbyJRt3wHmpASPM2oUNCzvqnp69CZKeKiBuR2JSPNHiFsQWjQ",
  "key38": "3cMUGwW4jtjoowx3feAJUvBwaoApQgWXengmQfQwjsvevG3p5dQTeVZzNLH2kxaVnaVZiNuaLbTLpzN8Has3Yrpm",
  "key39": "382KUUvXQNBGNYAWrw4nxnRsktDzm4xxzQbb6rJkG6eh7M3ErHM6booVSfQafkxCedgYYy2dhPpcSPYZ9RXG8WGM",
  "key40": "hBpUU2Xm5fMjcNxFjN1eiks3rUAiYzbeeMVM7X7wpqzV9XZdD6e6P6L7sxmTFmyzFJQ2inRsaiHpGYzD347PgFU",
  "key41": "3G3Vmc4RXCXTDCY5mQFtT3hBtZg9ip95kL4VFwa1gDMiRDb14eEnsMGpsNQmLThp5a5Yqydae6w5VefvuoBUCUwz",
  "key42": "2r7AwvMGA89xmLZR3e6WQ4MYFoj6f48DpKszhEr99EC3BZYvv7rajsaYhgU8DYGSyr52t2nvZSkufvjwmEopESEX",
  "key43": "b1EeJqUtX7RyAHHVUZ8T7bRBGN5ZCoB2RaDqup3bTEojEcaKVHyeUTDLhhznSfv2pD9228iGSjzMKfJond2nyPH"
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
