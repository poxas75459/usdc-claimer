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
    "3jEJvuB76cJwuKoWYxd5iv8zN8n2KNGScRyxejUHet754h3bsvsi3zJTBiYSGSYh5LwXAWnoySUUEyDKuecd59qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzCiTnNV4p8hfzBrbB6t46ZUdZ4HfhcWKr4CPUEcwA6czY3hNzXG6iibMib1cTTDJ2oWRESFo4uUpuncVd5bk32",
  "key1": "538vkxQUek835aemZSptZ6of61vdFmg8p4B3qNosiYYr65nA6f9N8hhRuEvhfVJe5KsEotMT1YWtKM97kjL5FCsy",
  "key2": "7HxsLoRhEstY8kZSaYwryXoyRDgWzmMxgwPPW5UdF1rNkFj6EeACbn5e6Gs9oBMcVDWZA8HUeiwnMNf6HxtdCNU",
  "key3": "ETC9MyKB6sXbEgs4EVVKfmAJ2Qxg3UdEujKV5RTQskkUCWWPYUC81yufq7E6PHocTgXpuD1EWyks5dxML6JdS1r",
  "key4": "mdPJqjXnBMJwZD6TSyRyzyBFgFEVYELeu59rA56bmSqUwSCj2qe7fD9UAmaLziLCF37LqJ8zQEPwYr4T3DQ1B8W",
  "key5": "kBQPg1rnktPvCRsiZCAQcoYUz8cxN4Rg8H2GeoLECc4gojGgZjdQUey9GfzmNPauKanGhAZyWT4aQRkPrnerkVD",
  "key6": "5Sh8vanyMog1bjX798svgecJb3hXJbpXj5qJTJ5BgLCQTcGQU1sddT1D3ReomgW8WKYrPuPhtWfJnWjJTXFXWGJY",
  "key7": "4EExAyZoFhbmjYPSWH5nZUtS3XbmMAzMJQFARyREMwFQnq2vVA4F8BqfuTkMdpUFvqtWyoY6eKxoGFbL6RNasqjH",
  "key8": "gtSHMVdUcf3oUNaEgHJx28bunZv7LrrXfkcuupbmU2D84FybbbkzyczMP1bFV3o4Qne7XEqjn3g5a1LnsrFGAm5",
  "key9": "51s7WUrDwuoozEz5dUnsikbwqyZiC55JTcN1stgtYaSDqQfvWWxjW6uxtQj2SyULauVK43VccNKqSU7soBzgQexy",
  "key10": "2PdWHwin7isTegWuxejtHRsjppMxDbHyrBseE32P8Rmo1gs6VHb7Rpm2innoTYNncNHiVnoM5RdFt9S4qVmL1hdD",
  "key11": "24wkeomJoxjamXwf8dvaerbBgnSVGhuHNmJztK3AJcSfSWh7233EC31fyAeRRv4w4gtpYQGc87bRyr4vKpnDsVCf",
  "key12": "5DbE5Qs81GZEVQbAQcaBJb9mR9n5dJHMnUuxW3qeX6Y2NCYdQnrBxDS6U62aE6RXdcQCXxJffD7eaLy9TWmAfTqF",
  "key13": "2c8a9dsynsNCLn4VsGGpU8WB65mw1A5xUFLfkX75ZCsehSstTD92cNXH5BuYJ7SFjJQdC1ZSFVZ8uZnQFuVQ9Nar",
  "key14": "2m7dE6g9ejS8oKPwWDjDEGrWDyWjJzBSjZeTDPVvoK9Z5UNco1pMdA2Hhy7GpBahgNPt2sRtCafzVBjYDisqSHss",
  "key15": "n1o8pnnkoLgZ1HRzKFfpT7i86NEQ8KzJvsRZB9ZtxtEwHnMMq6y3SB6UtwNRM4kDXAWULWxQyMRbD1295baSXAD",
  "key16": "52F1GUdrTwwkTv4VsLJVN9stYSV9hbqGkzi668cKrQQhSBDDLwr1c1m5MHzcgmLQrKZNVwusJNpWTXViym6HJUXE",
  "key17": "4Qt1c7BddHwArjSDZ39Ggdy9tPYcnCw7M8NrhPWHAYjS6HQZLFKFRPQ3FFBQWkLiTXreneCYQGFu43HJkHLUHtad",
  "key18": "4YBg6KiZyAb24BavrKDaALp9Qi4kiQA26QbmqQaSZe7u3Uw8JZzi1vst154ctGN99TrcxjtEdYniBvHyE4BtqqXk",
  "key19": "4FVvASj3ojCx4qQsmHRMpBctptP4eRjyGXkMtXa4UASZC8xFPUev6KCt2aZKLgP9UXB1bQsNZXaxk1QnphU2Ltj",
  "key20": "5X336AGpEXKmg1N7aQVE8WvYbGcn3qFuU5g5X2S96tJXXmMBvZbNcmvuPwYhVritixSM5VuSEmtj8XmDkhdrNLFh",
  "key21": "uR3jrDQtBRqMpYn6BB1KjP4DVhvLaadSZU9JsYogPYJ6cCsB5qYvUfrzwuvqCAFhLTtjbHAGXAtKeocSvbpTS5r",
  "key22": "48qS7ZGLaXtZdRgpfkjogoMvnQbk4iQeXdVo1ukJSymYHuVp74Rb4Efqor28ZjFj8pYbDnAVx52YKi9xrstZ9PhL",
  "key23": "4GBeXZMpCLFGSfse9NHhYW3kCiDiHCysFQorx56x8PAxKAw4j7CbT9enAFhq88ThWFGkPA6EJ9qYzrSoJu22wKAt",
  "key24": "5Y97qghUViJdYwnuWGDFxothLK1HALBPccXtosA253mdbkjMPKTVL7VjEzt2cfpwdW7vo3AVvjjESS4jSNEjJAQD",
  "key25": "2FgBYDJdYcHZU91qTLkP9u8RYFSgzkMESwmmJFu5ic49nwbyKPEYMej5bwWsAZCgcq2ro1a8A1VT5WQuc3CSgLgj",
  "key26": "48P997b6WuSdguFKDG3uVsGFJcxFQg3zszLTjsYLNtnMq2F5vU9eueJB6vwMM4P5ZNidbh9SrAx8sD6Dc9EaYsBn",
  "key27": "59nPkyaLTwW25AQX4pKqJdv6CSTk5GGfrKuc98PG8zES3BXCsbPk8JRXmho1hJMyPdDh27UwuRni5ALm8kJDvx4o",
  "key28": "2pGEN5WfkYB1hzmfPU8EySAD2YdWgRWz3QAyFLBU7tFtniuGiJEQCpprToihVxyrEoT4kLaLFhtRBEPxNaxnVAVd",
  "key29": "3xpzEd3bceBepqjBnzgGcKZpSjQHsN79phu2B6jLZM2JMG5JLTdMPXWine997BoMhaHr2gtn75g1xzxrVVaxSq7a",
  "key30": "41UHYC4bd2wYnVSUSkaRg1kFwDyP7FS94qyVTnXxTnEEnHDxjA5iCa3mNfNEhBs6a1JXmqDbFzNwm2q1LKWVdcXx",
  "key31": "3UTtjVYDjDKU9zUrZokTX5cBw8JsKuoUVb3qFrMWMCBeJDU4Fkvwa4TL4oWrWJ7SjZJaFBumcPhUzskQcgfZWdS4",
  "key32": "65CbvsbHCqnBw1Znr5oqkNSwN7i1KqXmVC7fHQjnP7LUStZYyZt6ZE3hqVjo3PysZfJfeSkufSZg4hv9YFbBqkpZ",
  "key33": "GHX8MgyERT63rfgHsVDSGJjMjJ3VAsuj4pN7ifLieoLhywS1CJZurAohaN2EqNs8RXZGRA3uBwwREUubyedDaMm",
  "key34": "3zzD4DhRacwkm6HizB2LcNnSLVtobeEN11W1khkSdPJ2butymH3DrwkRdkD99HMHt7gQDihoU4owBxHkNKMzGgdr",
  "key35": "5cNYMo3akdrmc8WL9igqtksCvfj3yUzLjzd5hFhHKe4R21iDBaQHnenPtktFTRXvMXyDXdUQmo5qjrAGBv8b5PPL",
  "key36": "ZR35wdA5icwqqCwRwjdW2EX62569Ac2RPWxLQaQEZN2P4qMXjJe3qaWnGUN1pTAR5jkvB4sYUH8fa1W3Uj9jDQZ",
  "key37": "3yvJRxu79qZoubCqUHrUvv1rzioP6AqeKoXoMnKB5zKJXy7EsyLoDMDFtz7qg5mDodQMpCJ8aKWPJKdMSmhZCnsf",
  "key38": "4t6BgdwqZrSBYjpAXNMyXKykbGKufFdZpamJHbtjSSxfBHvi2gMK6Vmg2yCf18STyf9HFbHi3QLLHLMW4u5Lz7Af",
  "key39": "4tbWqtkEEnQWXQ6VuXehHzQ3s3TyTw5donEP8VDPQo87MkzH7zhyQ2RPFmrweSSaTAMJkHV6rw12uLLpuG3SYYQV"
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
