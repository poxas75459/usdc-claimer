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
    "4nmwPa2GvQzUHXktfupvjkagbv8gVJ2qjEyk7ersdqzq3pLeBXL1HhAumuX3vdFQmy22uMAEWAKC4T2PqZMtLVH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opZWZjyFPbwP9jkZbeKF99vCmbXQMbo46ffqotTBNEdCtDgXtgoEszx7GHuWTskXLK9fFTHEqEj3Jvtvea7TDzY",
  "key1": "5zBYUBtzc2qbQdWG1H5AtQ4VgBRfco3RwWK5HukC1Q4Y3eV9vzXsA3yVN5qDRQD8usxpTFReBhnheMfvboVQmZh3",
  "key2": "4ybFyRbULW3czS3RgqvPWJN91AstzXC5f2sDuGeJJzHWNgu5pgtYHqNKyCW4aeatCVEgmC3nR6S59CyLzffbyi1q",
  "key3": "3EJNbmnXuhoRPwUtQc7mhWPJ3h4LjqbV9L2k8e3kpsFj64T5hZRPawqeqDqQZog61aSkpeaLd1DJKuPYecwfgV4r",
  "key4": "4gSbVanJskDHH1GBJw6sSedzC3nzue1K64GXQ8apygDWE3gtnBsGvdWGGBSTHLz9bgLqVdovF9m4pwXrgMdJoMaH",
  "key5": "35WDa3HrRrhQ3t3PMhRgEnW1WEn8kEYB6qLMk7VnJcRwRSP6CUHPgEpBhgrHparDqPL8o1nKFhM25J881i4pMK4p",
  "key6": "28s4y24YferHACwk5PJRLZfydih3kNq8icekyiTnbneXQvGXtMZFoVSZ5PTtebQKJ1oekewH38UdN1rXDHG7zv56",
  "key7": "5FLSWsFHn329qUJNDP8aEZWXbKm3QetmH9EAZizpdfrrjLMzeVtPGhiE4bT1S6YxjHGX8r4Tiofz5QUnqSu7Y7Vh",
  "key8": "41Ne5LokZwSnuNpeioFP3kco9VrYXS7us4zkQmaAZ9Pcv9URDaKfG8S2o2nCi4QRtM46tVoHwEcSNVskkitJhELw",
  "key9": "2UyVvfoxCQBP9nrgxM8skvw7A2BdoSfZwkSLdZ4ByDBdzQJL3fodKWPUppNyAQajNd1FS7FNya6woBPDTDk2xLEW",
  "key10": "4R9vyXwN4W1V546ciK21R62X84nRekGmx9HZYDt2EPyzTUZZ5i747Mbmjq5vJAS3eonD5Jd2NsdZsP34WYXzmaZd",
  "key11": "4gdzJaarAJUV2hoR1VRziiVLtwmaNzX1H8u6CPA44iZPuCj3eShBgPHmbSb9jDTbogRdWggWriRbBAqQvWhEv68e",
  "key12": "rybbgNKHNG32pparCeP3b2ptPwzTdhyJyYQZd4VdWv3QkxdHqK25BEFoqFj5TTQ3EuJydbnnpgcC1LCr4mLdCFq",
  "key13": "2dHpaRKacErZsiocSnQF6PLK1eUPMjj3RByxtr35acmYcJaD2sB34tBRoY1cFa6Nkx9kzbk7JjH7QGsA5VnAHnFE",
  "key14": "2vGajf2co5KKuPomc7XxyWZNm32tmwdmVj2QXV6PiCVyP97K4W5xS4CzG8ypzB83Pi3U9rqrsvWErX9Apq3ftExW",
  "key15": "3vPbVsBYWTqkZRfnDF8ftp14wLtzDFAtbytaVpaoLqREivh54Gcv9gLynwiJtpMZn5nrNtbE1U8RxieNnm1EjLKV",
  "key16": "4UEbVgcjrG9DnEma1hvAhkUtXyA5CdxtRd42y5NiRjZHT9R2KA14ufhTviad9poPm2caVyLunAZV2Eq4hy64M6ue",
  "key17": "3tTkwoiUNi9gm3q9Vsmm9uA5DNuUh6gLxAdZAxpPixRUSq5z4oQ5TZQQRUr2hYVZbv49HLynNF4V8ZEX7eMvb9EB",
  "key18": "8yQ4ou7zCt4GEvhYhnQETYaEVRemW6rMgjBUqaVzoUoHTRTjUnDruAWiJeFJtYFhuzKhrK6RrGRkmDsUJKzKWow",
  "key19": "4GuYX2XdqsWr7wbdQe6LSG65Totf5NDFBe5p3AFrgVyxy2HWZYJMZBvw7P85SEXYqdHjp6vKvz2vGCwg7aiajXhN",
  "key20": "3k5EEELhjdQ1UU1fpnh8u41VyKCsGD1p37nWyR1RNZqL2SpV46DET62VZCyCpfzrB6kUZdB43zDuTweWJm3Ugueq",
  "key21": "SomTn16zMfDKAsszy21MxaLfH2qTEps3g5dtHNTfQPgUF56L6xQHoS6RaXTCHGps8v2VrEUzKw2u1JaM4ZJYL4w",
  "key22": "Tv4NKAuw9NjhxkiXDTfzX4bf8Lgx26Vih28sf7LUMVeKqCYXBsf52yPZuSAiLxfCq7McWjVuf7TFoxtRfwU2ehm",
  "key23": "4aPP9VXDRyTAnDXL1W6gwUZNKMgQyuC2hkq533Y2FfujRtNp2DT9FLsfxgmzLC4uitPFYiTU3Xs3d3We2RrPDdS7",
  "key24": "33NgErknFdM7xRRy3nHGPLC2asEJdxFbPzuBMweXReceatsqT5henNYxESh3nsnt7inQQfuUk3idCrKYSBvy7x5k",
  "key25": "fMtv79kWbT2vgWAU6XzYqRjJ3LofeFZjFFVdFZtSH4DoKc4ncNELQypPuQuBvkpurpmjWTs3reAfshQBYQ2c6Bf",
  "key26": "47hWPGQmYwtKrMiy8LcPz4zxdEyabDsawwaGPDmeeaaA3HMRzGcY6osqyhFitpBn9cwf9D6fvdeCtsxAvrBquyJ3",
  "key27": "3ozEdrE9NdLprW5NZyB25c15BG9BE9m9rChbSzVMB8XJEJCJbXfd1YAnN8xd7UWXNpcg4myHqsdxXw7HMFk7wCkt",
  "key28": "3wNHyT3a3EVkyecwQEM56B8CFT8PyPWycjAaPMHNy2PziKejiNrYpqfQPSc1bRG6J1EXVBm5SCE6L5oE4XVL9KbD",
  "key29": "3eaJ2d4td5qVXVUSkLozudMpzihd2tzvsyAAi3yMymUcPCnrHopF2N8s9GM28dVDvDMU9Jig5kvZUhCWUwgyfVt",
  "key30": "3nQjwcpHTRcgQGeCSDuWYKkeLYm1hrmY2YJZygkYHMyVvqbuaiVePj5A34zfkUdKsphJK2pDY4Ar7nFg2bcgJe1v"
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
