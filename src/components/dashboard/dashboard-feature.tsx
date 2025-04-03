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
    "3TJZCKTKuenPemZYhno8WjD7vBjL1SpGgQ5KsfgK4nQ8VzZRdryzCRrrCHRMoLC6isDqcnnze2ssbuBUxn8EzvtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDHiKxaT8i6grJfXTfi7qERa3Ee9qQdydkfyhVf8gBY8rs79RudHBt87C3Ycf9F6uLA379YLjMp4uc5nnztoRpG",
  "key1": "4gKJsbXr7XbpfoAjsgG9xkHR1naZ2cZdWUFak26hn7T6TDLt7obFV8jCyn5ixZcuaCf5MyzDrzVT73qmALakShD2",
  "key2": "3Mmt2RjjGhyzSxD15tN7hDenztRZHr2sKjaK1kc2CUrfyuoCgAMky4P7xF72kemFHRAKQHNTQL1sBabn5eHW1RPD",
  "key3": "3UfdokYebzqXBVSKh2NKkUDm9UcDUNNR4tTJqKzeigbkGxRbRoCrt7c32LuHHpsDivvXK8VdCPTneVzczvKcq6q6",
  "key4": "2R4JE3XrkyexnoFe7XsaTT43iTSrvNG4WrBrucMtbzheUnaqE1oP7ArrgDaAENWfmYx4YAfxkYCg2Wdeoq7Y2h6W",
  "key5": "3F9bruR73zSy2VvdjFsYd5gEH613UcftMvnrzPSoXrRdHmYcCoxu7GAxzJMyzJaFiAxQqieXrASx5RLAz7XzXjkZ",
  "key6": "51TnZxoXUotp4KPMY61B1XY2KCVvaqdD8txjnU7XauJhreE2XLtkdUHe3WBVt3Fvo8fwCtfn9fufFJ4svJMHWbgY",
  "key7": "3ST1aw55eoQCnmGaADiL9nCQBFDGbnB55PGNP7faDqCGK1huq7BEucFdVg5SfMmBp9oLxPdbvfdsQ4wLmRAUxRTW",
  "key8": "4PfSFYJjUXmzJUJG1yRC1wgkGEoV7JwSL6dHF3kLU64dK4rBm6GvS4mdSianbmoTLLkKmbFkM2nsCUo9b5ySy9b3",
  "key9": "K5faLiMFXP9nCk9mEg4Mc3YzzPNYkNS7pMEMtfrbavooLkSLprkB4BmbcSFnVPvBuFkDJcANpcYYVc9FA4wZG4Y",
  "key10": "Mf7v1NYfpYHyFgtWeiJJ5gFPY8n9saP7N7RZToqdiTKkz8x26AxdQCBRukcAQPASM7oQeiGrjFsBKHNg2EwworU",
  "key11": "5USdqm65qVgtta5VJ4QtxhQhDu8B1kYcfLSP84vQqPvrEFVrfknvYyRxUqNAVY4NHvT7Tunb2XRxhB6nvuiqNBor",
  "key12": "3FMHtHEYhuoUjFAEjVXDyYWn1YeZGUTMbvsBYdnQdvC67dG1E4f3qSw9SGRqZaCUMWmnuPBzviZzTK7WKEtRGyu4",
  "key13": "2PUuAceHQwFrcdcWfgeiiGTC23gSz54CHbXY6LHQhVRrJMuZo2JZF93A5qy7CGmFhSaGFJaPLvczAqFRtYgEhsDp",
  "key14": "5GRjeF4Py3XYRgVhYyTjWNpzMvrz3f5Urt7ACm7ZgmEYKG3JenHDXyV6iCubCShhL8jSNLve15bCd2W7cYGGZPf4",
  "key15": "3z4GwGR3tKBfbiwb1YFZQL9rcV2n963nFHdbDAC84jUzLYmg91u4ji1vLmgAH7sFh9FfrX4fugcPbzh3JDTLo23s",
  "key16": "euUtF64LU8nfeQ4vyvFcqnpPQobdhcMEsXPmrCVuK5o3gkTpyZY31TU6Yu3qTus3KiKKQQQ51M1jzzD9rLmMQmt",
  "key17": "ZY2asKia2bd8SCiwir2etQSQbEXDiWArN5maa3jG7fiU5uJLvDzAMqA1s2LwqzHKac36hKd4goAk5BFft2UaQmW",
  "key18": "i3PZx9pGi1fh5YMUFmXmhsdHryWvSvFVhTS59Rwzszp8cAtbMTXn99oqECXzVvVkRbyiaManx2YBFFGYTbaBNPm",
  "key19": "5wBRg2SpDx8k9Zhbr2LjshwE56o5e2gGDGdkDsk5eD1Cr7yHXaWiCbQJfqRK6N4WZxjJTrepomZyebvzppdxRKrU",
  "key20": "3a5xfvq1mwYDE6pN38BFbfaNDDVJQVKYHtD1KVksmchXdZTXaeK4GmnUqsU5UKmGxu7Hz461Wt2yjUKcW2jjFt3d",
  "key21": "2G841o6LL2kNCZLoTHzq5Jp8KuXvwCFGvMEo2vWkRBLe1SuCgsZYQEX5ZJvHGXAUGgaBJVG8fDQqPqfrkGxyYtov",
  "key22": "5R3LXz78ppFv5RCTX2Seb6yGTc5qbcg8K3CYpCEHjkvijigkm5ABMcHreEZVQygMzzmvpLGJTPk6gDEHhHCSAPWE",
  "key23": "2d1Lha7pG1WKFX8B1AM5NWZJTfZXao1PnhBr3asHHvt832DbeSyNP6ny5eGtgF5y56SGcUTUx4SnVmMXU9duFU63",
  "key24": "4rAVcL1qHHatk2ahe7SStfYa3kKp5ZD7y5HUx9YzGfsxWNwbh85PaTPVRqV12ChyGrfDhzcddgbjZdCBrky4YcJz",
  "key25": "k1RjaAJbeGvyvFHHyfKsLgQp4jGJravC47Z1aJo8f4biS1XDUmMgLNCVWUGsVYTd3ynMbXTagEGVBB6MQHECsn4",
  "key26": "hSyQ1vWc1JBjGUuMaSawZJ553BgS8DSfHEc1dMV7BvhFm3kbkGSohDwo6TzBc5LVzhCT73gKBNuNm69jDx3Ln3j",
  "key27": "2Qgi9zUXucD75J6jgmHJmQKQSv86YBmXMeeC54G4d5QUoXt4z5QbspfcpJD6t9JmMtsHibF4iBvXuaBj9bZwZbJK",
  "key28": "41otq2Dn5pf7fksHQDZaHfPEireXdC7g8xs6EwQHnZt8yDAmYMod7WmY8K8sohiNBj5pzE5DN3eSp5qKQgSvD2yk"
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
