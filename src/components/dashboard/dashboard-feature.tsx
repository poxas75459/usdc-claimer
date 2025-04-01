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
    "4d4efrLoKjBgxXZnQ8XLB1gEsAgbpDntSNSmxdnDiNLfXr919br1wvquekZbXyB9MtvJ7zN9fc8qYd6dAcUHoGmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52srbHgaWDJmUkBGP1MtR9sA1wauppvR9eqfXwQ2g6GPGtKyj4KxDifzf3V9j7JveEnV6oUhXTCyX2px1r3xXywA",
  "key1": "62ACiRfFAsDKF1bmktvRMgsrvprurW34HY3JH159N9MSWhYWpGueDkeovXYenuZ8oNsRkfpcHL8a48QeTM4TduXu",
  "key2": "5vs2tAWxjioWSCqTi4ePpy2CWBjv2ineYBkuztSK7jya6pza3Yh4kNjiD9QoQYZhr3AnjrpdaCV3y6ptom6nBPSY",
  "key3": "4UTk9vkHEdKfpFM1KekG8TqEb46WBKea3wfQ5G7BdRCkar7qWHHq9TsensSxpz6ca26HxJ5hmbp43CGWuLLAexqN",
  "key4": "4LYppxJ4ZQD4mDbUyx4mcJEhVb6R1TMMXu3bkvZXJDLPUGEiM4JE3ySQbDrJ1LnqVvpZops6N3wMrbDYWS4JLPoF",
  "key5": "2o5dq79CsX3H4dsM8LxUiyxD98rBh28ji1YobsXkhU4zoxAfBouxDKrihDzCwuThe91uLEwN3AqGQeXZfH96zcey",
  "key6": "5eGFPqpPoxUUtnPwqeDJu91wbEE7EH1nUDrtoh4t8tuVmuVwoCyA63tJGAfuVWpub6PXq99ERi37rWXNCaNG81bN",
  "key7": "514DRZpM1V8bh7jhvNhknUbrEX3nWvSFjTxkznrvsXzEVQmDG4VDd6qN4Ja4WGNxNNBZaB4gqBePNm7QpPHsApzD",
  "key8": "4HxvwnQSQHvH1rT7UhANLbbSPkuimjXBUt33vcCRpFFksgDdDpcpDm93cCGrMhFkk1amQWFX2seMhcTfyHpBJr64",
  "key9": "4i98vN7jAhna5WVkzBRsnjUPkcNDBtk3SqvDPfsofqm76bLniMoPWc5GTbkS8kWzjnaqwEKNTtLcEk3XYFPzzPg1",
  "key10": "4oG5HcJ1y72koDSSAkHj182yaafMQFsUW9JvtTtpC4uQJq2XV4ZaQ891aoqoP6kbyXceBMyznhaYr3wvEKxAcjMG",
  "key11": "3h7c4Wi6kcsZ2V2oAk13san5PRzYu7XJe4PUDpLUC5PBtsEpLzhgR15d8ovLHqP97dJgyE2oh4f6dUpSkEQEhrg7",
  "key12": "4B4UTwEA6KC4npT6Uh28GvVQcy4zKDDC5QFuTEirUahTZyiEfanUTguQBsvVHThqfoDaeDmtBd8AVnZpRpny4jvA",
  "key13": "GJFVjgu3gEzHN24eYZMwtnAgBuNJUpdaNH8ncemYkZpAXkuZ5kjSw9V9az64mrbzLZeBeWpgosvDrfzisyTZgm9",
  "key14": "etCnDf4yximptB8xG5TaGEzniF7QVnzwRLhy6sXPj4xeZRP3RxD5djgZjLz3etNXP37rZYmvhEk2HaDdoz51uew",
  "key15": "23if9Zg5uL3QHGVCPa2EAjisSeEBpNmemBtJ9ZzeVUXkZDKdv5o87QDDzuFFFWJ5YFU5rMVcB32Bt75tAtSuatzd",
  "key16": "4B6tEiSP2hAZCyCDZk6DjoGr53jgEhm3WuJXw2jKbwyBP78oUqQrAEKYC2fEgsjHGDNErHFqRJCA8v61hyx1VGBn",
  "key17": "27Km6eSu2xAgiWMMK9ZWDK348Ai9jQGftjYttTWnKXhedbJNHXjybEo2xBGmqbMijkXJrVMacvx2FVHzaEpjWJvr",
  "key18": "24eTj9C2NGKMnza5xawx1f7DkXCf5U1JWBJbVf7zMw5LjLrFGP7nKqPePrUyFUaJsgHXh7hKAccovEnJ7JfXN6hA",
  "key19": "2FhRJo1W6AgbAoVihaagyUkLAo4GLUxCgYCecuLGcVC8whC2PsUqkYpcQoj7MPfsopw4BLHZno2h9EWDYPX1CSN7",
  "key20": "5NtHtVBT4GYVyq8h5VpYCQF7mB3aHHEcNggAzBc5RD78QUxZdAVA1KGgs21RyRY1FJBgjCeqPED3XjgVskScrg7B",
  "key21": "2VamjQ9xYZ3nyTKLziLJ6bu1qEn8moP5E648SM6RJnPjkp1NUqDef52BLnEb92mN9KNzDdysCukBzfR1cML8T4uF",
  "key22": "4fdtt5RPZwcEQC34QdCA2RSxTPAZLicD8qxebebMgnQh9H8a9K1on4cqqQxYxd5H6YLw7PBGKMPFh2qfxgPevj6s",
  "key23": "27vYAy9NTV4ZZpNfTkAEhDik6hFjQzVAcC4pdECX36Ncxzqbym9ztXRoYTm2MWqCQAjuuRF5G6JbxKfBGr4QnCxH",
  "key24": "229NtkQDMUX7V1UnyhpGwstKUnbDZ8gnqL7cbCMBqj8xqEj4XbCLnJdG1cxQGKYQCDs6re69RumgfsC1UU886Wxi",
  "key25": "62bib1EbaDb6e7Gywa33U5LdmNo5oqbYtQfWwyi38dWNDdwKpFLuuzNJbFjtLNDsoNckziSjMxFpd717gCfKg82j",
  "key26": "21ajUEAW6Kur4CEs3QB3nyrjsdqr5FsmLtgaewifC7kX2mCoj3KkDFF5vSUkYk4wkAt9hnyMfaKpTsFjzMcKcsXf",
  "key27": "4tVYR9wvjyrzyhdeBpoakFyLYBUmpj2QGuCV1ZdM2ApJd8xAz4hneHXFvWfrCL3TF4yq8p6s73bjBHaecYeig16Z",
  "key28": "j3uW21Zi2cGDVXtMowc9DhPev59eXbHvXwUtVT2h34n9u25pKfF8Db6idKbqZMbhFY2NjjxxPdypCrFREV26iLT",
  "key29": "3TcYarpSnfg3NY5Bt6JL9JeaeZw2thbmxSbKu6JPtx9vsPqgPQtivb2Q9Kymk9VE9jKQdv7xEp2FmKN2ZYWLcupG",
  "key30": "5du5YBrjFrd6kNnWqo462qcgdReBaNBMG8ZemAayYWP6m1fmDW8C6NyYGGG61nrYmooELXq4pWtMZQznppKHkFaB",
  "key31": "5MVRJmYiCbGNhh2HMaKoJc212sVVLFXp5tbg6qgthPtGi8JDNdfk4ZWpoqBeuMEUZhb8gdC5hkMwTHTDgFsmf1hg",
  "key32": "4kYGaJmbYqgybNqrT9Av3SxzEh9ALykoqfU7gfWPwxsaMYRmppGtANuFAN2RMb9qoMnHPK6KkKNjRQqL7bvUxtnB",
  "key33": "5eTKftmAgcWtdXXGaJRSganiX6dEmeCuMywKscD1Bw2jA8PyiDcWuR8jKsi2DLNgLVvpSTN6faJn6jNc97iSshjQ",
  "key34": "3Be6QZBeWeR2MQ9bKySdq6wLvXrfBkCSHQTmJM3EGNLwtNeKdYUN3D6Q631Y44ApSmbgMGcDUEmCddVL9XMS1tH3",
  "key35": "4EJAmzEZSu5G9We59nvN3deQtqr6nm3M4FgGmKRavDvvX9yGfK2UFZ1H5c7n1VLiKyEyyQUzP8MqM1jvFu4rWhuv",
  "key36": "3yP4vHyV7Uw9rTFjRuQtgUzMzZThs2AD1kEjEErNB5tBPmVMhGcfES8sC99Hj6bLVeHWhZfjJCEw3NnaLmog61SU",
  "key37": "5QirRF7FkwdsiZHXYPgoE6C1WZEvKfpBLdPp33yR8kKGjL6R2uQ9kSoPd9AWrPviWX9bX3TKYg832zzJSgEednRD",
  "key38": "2gnWh4SwzTmUsmVkb1MVVstN9J9bByLgwwbzMpTtcgZ3wvabnUZ5WPUK4TdVxTsYf9GmigUKfrWZ5PWPXLaiVbPy",
  "key39": "5uTfTV9KmqAwqayrA1TVbebEJtzsjjm5U2gPJynDJNYt5GFKZWnLxmQmGRB9QWgdJbhNScyorSXV4saiWB5opgqw",
  "key40": "438G4vymUUCLGgsAGs6jNkafXVscSrhasAxbU5FgeNVJb6awamQGf52oVdp2vWkdWBot5giaRDsMHMHbDBHaRLNe"
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
