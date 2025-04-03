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
    "5UnRa9T8CDxhB9ssk9aQcHRy8ERB7k4t5iguKjHLtrh2ZR5vWQp7bKTsg7pzhQvr6j6QVXJRNQ559LRaWx1587zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "453s63nJpU8vLujmgFJZn7H9wHYcmXTW52ZyNvk8xrBkTumHvgqPPoiarXEE6X6gMvmFKv3nGoTCzYb6AcHVWCeW",
  "key1": "VyRtHpMTUoqvHoeCR1NLMLimcx6vKGpkX1UFYCcBC2n1JDHc5zj9PEAti6za9rYAKaD8crAGV9G1pUWWttMADgj",
  "key2": "5ouRP9F9UZDsiMZcFskPMr6iugiVw3a49itpXzesYCGABzGVCpdhr5pBtYaxjb7W4GAdDSkE4387tiwn5Ytr3hjZ",
  "key3": "KmxqstvXCsP5y999kaUbhJoMG1RWgReKpw6Fr439Dimjcdd9QnqpmN29ESNr8p3ph5Qecv7AYfMFhXkWg6g9uCw",
  "key4": "5XQHoZWtXJCLWqp5sUtASTfhfe2K3kF8TBM5dR1PvrYrGb482rUoJurK7krFTf1THEtZ5kzE7gLJuRUSHq12HSkU",
  "key5": "2VWzaMw5comzKXF2i96GPt8SJ8RKi3f49JLyjKNw5mtrdLKLzb1dDk8vJTP2U2R3mLfzjqxTMuugG6P9RLWhM1Qr",
  "key6": "TC7Sc3an9KkcNw5drLoq181tnEsSt9f9xeU3kFH87AujNriYyERMPmsCYb7SSreLAHzCk5rr4kGKLyZMxQGhq4M",
  "key7": "T94ymELeB3moFuGzmUzG3BqEyWoDpjXKba2g9ku6DqVLn1DwhcX4MNXZrHPwi4V92DufEDxUNJGXUKptWmtp9KB",
  "key8": "22ApCPut7auN8y2Br5xyh3SZEH7mQ16GwdDdxjw2PVpnBRNz85QUTvyqKhcLts6B9vT2rGkPhAnrCxaXR1JHhGav",
  "key9": "5iDWCj3cjvcy2TNgxtpEUMaYjFPo2eXLsLY4xzFn8ubxC7XjZf3mV1hooyjMaPuXenBMjComEV1F6k7f5TWWzjhM",
  "key10": "uH9aT9NkvBrXVJXYovWUK7QXsAMisJoN2QUdHghmCLEaaeL8L8QKGvomxvL4cnEpAMEiSsawjML6YaEgrm3Uu6f",
  "key11": "26GWnr4KACnvVh83Yn6BfTPyJR3AM8VexJjcUujJKikzacqX4WknLpUg8D7TSM7rtrTuDmjCVuwaMYvyZThNxi9F",
  "key12": "2B6k1Pgs6dK45hMaPkzyK1ATuWjMUdaAirxCsjBCnjjgmP9NrbGvPys7r32KoN2rVeo4bZpXvwAZhQWQa2nRENn7",
  "key13": "3x9BQgDCjmnA6WRRgJPZs1WstQNuf4muqYNE7D3t9RkFkTZ2G1RUAzVzLE6Zi6XkyPNkxC96EhdCgN2k5WJTVZeR",
  "key14": "3d3KQdRxyMXafCkVP5dJBjfJ5W7FuPFULEsF2bWZ9H32QoxZyTcEZBg41NNnKVt2nybgxsWArZGKzgaGXYMGuq2n",
  "key15": "4RfK2eFFCC6JGPZf7pQuUpjJvGMiBWWnch8YQTy7wL6qC8qqk4cz7kCh6VaRyrbtLSaJpg1w8JnEGrYmvFdTb8hU",
  "key16": "syyRDj5GbAwqdG3asdKoFoBaU6CaQD1QUbSy2TodEBrwnDiiV8LH67qaLnoNibpar49wVXu3o4vDWfZSvBQLpkN",
  "key17": "VHnAVWA3SFp4Xp3y6WxYfNjUSn992eFg7ovpRsnDpHqxUmQUgoUXKZW39gu3VhMvReEMabAqrtxjWtsog6Yioqs",
  "key18": "4MHkHQ4yi3hhZL5dasdhtvWaHf7C1uhWyDePiK3dCMAZyw3GZUF2bDJFn3hgvwTPuYTt6jf5iYQwwTNdEo954iRE",
  "key19": "2ZBzrYZhhFGkvMUmCQsZcFJtzm6XKyNpXBj7vXRFVaVVf8KsPNosoLDAQwu2b1fDSAN7kU6kHzkCB5UiPCX5hcnw",
  "key20": "SSvhcrF9SJ6RLpVAeqEuazSXqGZa2qeA5rAwSUNgGRmM3prP2mMyS8TqeUJtomreSU17an5oAoeU4G19qvu8Tpq",
  "key21": "2P7xPMcyRHWoAddGSFBQHczZEkP3BUdzLLXLfL1UUXawHUCnfM36N9CY3qEnUP4ttfGvpAQ1KvUeheVdzmtbhcxS",
  "key22": "5CSE5rEQrM5UbGgNfFYcDwE4D5rTdXdRssWGKyuYdmNkwz3XCE69VywtQnoLB5bsJYygwpW2qKjQg3mBtqTXXyJo",
  "key23": "m3ubwKktLhYxugdd4giATGfeYscLVVc4UzSrtk9DoUZ2cAsXWHM1JyrqwUsW4AarURmY7TTAu1s1AAGu1J6Jnv5",
  "key24": "64Tnp3dH6T711d5UfdPt9UcgVbY1BCXakg1z8ynSw7yxFCh8eJ8W8nRthzjaLXWK5ifMWtKaNgCeLba3SYL3AieX",
  "key25": "498HM22TiysKuhpKzmFMMN56pBUyQi1TG4YLZMDcgBHPC6zYnpgsHF7PufE47Ut3TDjqkrkCeXDPZMbmwDqQmCTM",
  "key26": "7BV29DZcJvgMPwZMKd6bK3VvqdvpjyqUAfVBWaZZ2X8qBCYWk18GYCNoAtbYPdgrpbF6NmJwxdRm6FVJRPTojbc",
  "key27": "3n7x4aaQFqfFFt4bbSWJwB7W7XnfX9x4xBcxeEsg2wnq9ezgjxETTdNqcHUGpFah5hbXu1nLMNPh3LcPYHvNL1SQ",
  "key28": "5WeZh9q22xUgYsFYVKZKoTjrFHRDxjpPMbynxKj2wkDxuntanUtLc4A2Jz626i8bLWp89YDFSuggFgCCrMsP1U75",
  "key29": "4YYqJjoJnnQDYnQorXobULJm4cvVVzRCgY3NSxGJ96xmFa2LVqAFkPoodZ53Gu5oBeypreZQu5Jw9dA3TWUJTU3p",
  "key30": "43P7mQXNJ54rBVQYZypnSo8astMQzUNd76uwtK1oH79fftvH6t84SwyC8D3dsZGyjWx6bkMHVSxn6BRLTyTPwNE7",
  "key31": "4QWtqMaALfP4i4kM4L1J3X1ZiHPMhKNpUKtHxSRqNxKA93MZ2bZgHjqDvuRD6uViE4E49uF3GJQqdjPH1vAWpA79",
  "key32": "5rRFHHJdYJsCb7TUGxhoQtTafRgTJnVGqxFpcXv17Xkt4RCvRtqppTYEcHyqgkabBGxcKM6e3eSRYP4ynxLGFGje",
  "key33": "5braSpVMh4SDh9MdzQqnZzJhPMWf2aVDUAma2kpUMZfkyPGpNXdc9GP4yM9TUkzUm1jM1CrotEwV5h8swKn9Fqxu",
  "key34": "3CpP5nguxKYb194dasE31PkzqoBVv6TSdoAryN3uY6sMePFfPAhMsYnpc7EknwqVJcbAHrfhQZ8SDA8JrzNULzDJ",
  "key35": "2pSsWmbWdt1kAZieN1eAgzxmjLxxXrQCJe7Tos8DZ4V2FN1Bed64TEPnnf3j3DHfsAo5afd6CCKCBgQuXmbrFXbM",
  "key36": "3yyTMyjS3RE6vekaMoukAcudZV9XuDCgitRroK3kYerSyUnTk74ajPD1NWMXPxQbCvkU8W3oHMvgca1t2DRsJPnJ",
  "key37": "3YWj1rVMdRdhWrHkRPXz8HVcsZb7HVNMSMVHdCfruaPyAzGbTCvpqEf4SZ84j1su9BzRmoBMMGNxNei43Z26faPC",
  "key38": "3F39frAJMQPdwWVgdf2BGoV7j2PP9BtUEzhUTgysrq5XPpgy6j59bU3wQAehop8tVRvNJGeTo4JHGUJRXjJASfGk",
  "key39": "6C1jrsPKcCeFREKSmrVRxHPbDxVpgnN2efhndXVNS1gCWT1M4K3BU9bvtha5PdaKE7eoUYiommy3hzEc9mL8Sgh",
  "key40": "2nB187tcaYZunTXH4wBx4hB7MadEh8TX5SujXWe2rS85Ltgziuqca37TrBa8XZNoH9aawbsvMka8w2hg6FruVcAb",
  "key41": "MFjxTsH5tpX7kXkvct8tvsu6XoGMUudR28TcM6Y3spoAyBDiwyqM4UkEcEDaJaz3Aq6d4ywx4tjFMq1d1y8S6he"
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
