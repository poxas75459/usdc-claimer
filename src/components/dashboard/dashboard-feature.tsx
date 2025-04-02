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
    "2btXL5FD14tbyTCsUgyQmNeBJSun4DRKzg2Jf8pAqSq9KHvAkxXwphwWCxxAwDjepR28pWtDqoqzCYtgZCmnUvv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q9DDq9AjPfceWZpz4Zfjuk7g4whRoYHtLUhT5DMC3dpbdCLuDNjkWsU92qJKeoucBWCeoWbEExTbkMJGkq6ksoY",
  "key1": "2gd2AuoPyxTtxMmYuF4xLcbm4Y3Ce27whCGPEJJybqjepXX8Dx4rtv6E6ydBbh7Q9KzPzSvYko7mezYUpMA5ZnbM",
  "key2": "64fHFbGpTzCacAzj3oDTDDiUFzUi8dD3wVDFf5VeevhJcej62hM659MT4WceRTkwVa3enbBwRC6hWMeQrvaF6Rug",
  "key3": "49iZgsVMvo28P8fcxbvyHkwczvK9gUvy5sLoNDcFpJtbLDWLtjMZN7sAWCR8x6WTXcoEbXyQupWYroFL32pSnyeo",
  "key4": "2VwQtNzLQSxqE4SwQ43BY8x5ACWqXKobGJwhmYTe5YFDLowzh3KCHPJyBeWp31PFEQjDrVxWUaY8QjhQnK96YLN9",
  "key5": "VfKY9sN7RVssGvdY2wqwTqjNvfirq88MknXcdaGdbz146EPrGK8aJEmPPz2XqycW83ijh6MtacVJQiYXZVUcfq2",
  "key6": "4czctr76aiuykGSAs9bkCTJMZeLqobFfn56U9id7VH4PSSm84oNFYQLvQ6q6Gmm4q9Fp9ppPbgUVxMTJz63kE5He",
  "key7": "3QrTdKEoCvDL1qJcWfEpDo8Q5HZzsEMtEdczgn5FgK1P14D68ov14pCMrmQx4RDRMuDxfrsJkFfu1bjzhK1yfDct",
  "key8": "WnNk8ZhYZfXJXkTsWXeaxWS34DnNfjrFeCtrwG5mgeXi6HwtiRDQy2NfNWe1P8cwJbn88CPBs6zPFZPYdWHygnq",
  "key9": "4S5ndzkPJz6RMWtvyKMdeURJeCM3E8b1NkrB5mqJUoFfvP2mmh1ZAArydnpQDpcx6WiUGmpaQ4efS5hPRi6JbEMZ",
  "key10": "5y2QoUdV7qbZvVGMW5uF5DxLVGDmivhGwwB5DSLx7MyvGPfjz6TxAmvzppx8DR3DXuFtHxm6B4LyHuQERmyFQjpe",
  "key11": "4cwamA4TaSbunSuKYM9WeQ9daLtksikvGKQboskVAZ5eEtcDhhvf5PAGVqAqzrNu74X7KXkVzushBbaECVqg7MU1",
  "key12": "q4LeNyo4AgobxDYCoV3oPGkSQtKYEwnCKWG5WhqX9wNaPkX4wYgz9J9P5fvQQVjfrW8j3Kg5pwPQiGP4GjDGVxf",
  "key13": "syfSPQQzzdLzjThihJX5c4m8vuGT4MrZYspM9rxTeukuzv3EcS6Rgd5FEpPw9Gw2gRnoStR6vLJYAYXaJBepXkq",
  "key14": "2hTZio5fsMaNRvjg718AdacGzYUzmH92qnCM5LziWKqyFa9i2cVLatEMSWjLrVGHm5vBkws3DYiXKs73mhmYMCrn",
  "key15": "2fzAC5vAREb5KiFkgLfuNADmGh4Vj4Auy6KGGdRiwpbobG2VvBcUhYF8Ut6mCtMAmTT9qgphBdwXvEc3wEaBYym6",
  "key16": "5NpFqisJNiwaqsuCLtNFLjkKReJ9KDVUgarhDNSpsgHWx1efL1SBYQLdtnHfmfb4eMVAfWP6RtQyYit9BRX9eUNP",
  "key17": "2RnoUjbvkzZuVsebwzEAY7TiWo5sRiizf4yFmtPixudGETkKZew3Y3cP6YKtLVHA3DnPx45VGHa9b6hxekSni6yq",
  "key18": "1wA84yX39dmFYUCedPeUACJYksUE5vPCgHRxwEdL4jpjdnoGyNQG1KgdpFHMr2RSh8etUY73tQdRcog4EfRGhns",
  "key19": "4jRSFP8MmMyKPGdmU9Pr5WQK6WcLqxf882kYijt6PnNfisRGcMmE2bLk1naakvTiLv4U9dBXbrpadYEAUxB6r67F",
  "key20": "9f3S1f4KwPn2qNrLrWeuZT66pbLWetesPQRMwQdYbnDFMk3nrAXWHiRY5KCDQF5hkaArs8q1HV3CcuwEWyWVddL",
  "key21": "PRarjXEyFRsraXmM7fQEhC1UpBwd6creTWivtYcAfcjThg9S2ZgQavr41tpWrhMiieEDKxSfQQnajkj3ruSker6",
  "key22": "5xT2NS3M7kTZq7966yjRoJY5d7bhxoFvUmqZ5c6zgzMDkqpi2oTc8ejwqsdC4RtCdaxLmYDupMCCSgAnR8zkmKtH",
  "key23": "tgXHPSXZLdBTCmZ4XiUNd8DiFWhTLdvG2ABnaGNA7jAPQCotDmEuDkAfTZSxdb4yZqsGmPvuYKEhKjfPaTgFgRe",
  "key24": "4fwg8KkCT44SPpD3TJQTHSEi2UKZ7aPyerK7VN46bAXBeNrCZYvav1a6ZyAESHdJjVDApAokAKas8X7MFvG4MoPB",
  "key25": "24cv1Nc13spCYWqoQDAUdztMJqVST65uRztfnk1hHvq4N2wyt3ymMQtpCxcnbV2PX7vpWuyeL3TU5wAXMYeN47nP",
  "key26": "5qXyhmcXYwthAzauSyPXFC4osHUPJfwEFsJzhos38QGMaprAC6d2WsW4tHE5dT3m9Er24noEwgo8p2msMKERM63e",
  "key27": "5g4YYpgzP4Z9MQWjvpGaUVU9en7KzGe4FgZrpMnuKBB8HBV2tdYGw7wsXbLEa8nR5EaBb3GHSfnLivg5kLxaAiA1",
  "key28": "2mhh38eg9gxqs2YkVSzFDiui9iFv3eF8XUhPfqLHL3B8BLc6s4kCbjyQkhbsg6B2ESpqFWCTQVKVfNi3szwPrnaW",
  "key29": "3pgFbyJTjn7capMFQDcP2Ujt9uCZBUERWher3S5AYBdpnDdL76PNC6kQqe4wSgK5MexN8HEvfAWoKraM6mEdJ5Bo"
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
