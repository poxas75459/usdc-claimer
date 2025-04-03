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
    "3wq8y82iRYimAdVhjTEZ21vEwsjYLkRuxGAr5cRZJjTUMJnGrTxuX6SwooT2XPj7ym61qVcQEp57hMu1Ma2ZgFu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYPQiY5hL6tUHXFsQVUCyJi9J9uWvSPmhi9D4orua3HKbB5hbpsvMDPNNQAkNKMHakNERBnJFHrEXKDjSw6Pa5R",
  "key1": "3ZpnLnUvPzPU5iDcJFgYubTpYDzcfgaFb1NZcAseeyqkbei6zfRyE7LrHTptDsTEo8pejDMY1pbddCZQpejGwzvX",
  "key2": "ksbNyfR5RvYfJ6rfwU5rv5mYnBdV3Q8mZ4XjTHMBTax7nMBxf7SWRQ8XyA8gwLHDn41LjMyNvRtiFwQ5zBtw3kH",
  "key3": "5AySoKZcvoAujjP1iEK8ydBV9idPbvu6BJFsXBKFnHnJsSWNduTwVhoUV2do6yqjiBGxGagytDYMP6CGQJqNkZfh",
  "key4": "2S1PvVkYdriXJdXJJUXcUv2Q6JdNaPXFoL5shuWhfhgfFpXMTKAxNNLZidYsN2KSMAyB35Lcu3eNZcyZWoGqWZWA",
  "key5": "4aKmWipRP994VqfogNWst6hne9zCLbGXd3KyGhcSs1vvJfTFjdhJ1HkTKfQytjyArBT3HzR1D6d59BHWiut3kpBF",
  "key6": "b6FUD1DadA6uUkEN5vzszwsnf3NoR8eazhesEFxfm8bKqLQwrHrpxACg8DAHrEQQE9mWxswpBRfM3g4YaNViVYM",
  "key7": "jDxj539UYnLMgQ2YnAG1qyETRnkKqmVaWcqsFmwF63gtiiouymZNHC2qNon4e1KTwd7H8wjD2jCkXGSZB2mc5M3",
  "key8": "3zJYmLpL5tPEZ77PoHMMS8EHhWtESZzK4yT9DYQqapPvEkUhjZPWgQBwZtvCeqj5MsJcvj5yaiJk4XPCuCAqZt8W",
  "key9": "3zdYurGfZYPEf8HuWZ2Npanpfap7p3ugWdiTVyBcTNfgmTf6niS6N8LpXSbgNEWav4DK7nwXv3ujSHHpgtkqQpp2",
  "key10": "AT2vqQiaYVfUzDpPWk8en9ZVYLxxqBGr2VuUoN7c7VmHS5VnQgdXudkVGbY5Kofi37TQmbKfw4SwnfkooQTYSHa",
  "key11": "3PtKq3MxmJNf7Gdcbpw4V4VV3qkEqWCpweWSiUzZsSbmfYT9xqRv83yMCNt7iFBTedyxukeTqXkwXkeGtAbmLQXo",
  "key12": "5Y7sW6ZzpArsZT3Gpqdtt4THY3YMWLtn2KivGWwBpVmLpvemfq8dbMhNyNQcQojEnaPs5KR8BHxQat3o2gUoMsWN",
  "key13": "5juuVwvBhPuwowHqhRuajdzX1EbLogTMxuv3qbZXUi9ksh2794jk4BzYGS7FxANH4h6mPS7eDsvAhZSzVajcC7ZM",
  "key14": "3RBSgVFhkhmH822TK6Tsir5wuy33Dfo9ZN4Bdbt3YjkATi4VM53hvARWieh1PPsYUnikYVrY4GdLhKNepVpEsSsL",
  "key15": "5xUkQBHcweVkDsjkn9BMJtH4ftRv9CEpgb2BZtuE99bqaFehc1PBM27JajiUyDvjivBbDVYMmUwTGHc9CVQCtiWL",
  "key16": "3J14btupFMuruXab2XpaqvtMurZ67ExVhgHsQSs1KKbkoeEgWAzvAnhoX7FW5m6ZocEgRsH1BrVeNm7ETT188zZJ",
  "key17": "4hiJx18kgZHGq5d9ixsdH1NfFXW8PB3rcuunf2wLkhmkXt2hxhRZfYXcqyXPS5Ki6mqR1q8zz4AoVqVzDaXJXpiJ",
  "key18": "wciup6z2eeqYsTAfZBcWqGBnbBMW1QPjNpUuv7q21Cv5Djy9sUoFY6c6FKh8PEadnhZq9CMzL1RDBgKwXXcFqQ2",
  "key19": "2yQw2TW9rfxigrR7fhcZBit7SZTe8guxsPB1bgXSAHXsBYigBxiKYAQk9utwiJRjhnqMBiNnQiyZFrXYJmovbsUm",
  "key20": "31CobgjZ46y6LQViw1ZLM9irGoNaVqKnQG5y7nNDEUzYFPu3nAQqSjS3s4jWmTD68YD7Xr6bdV4M4Vqnn2wbHNnB",
  "key21": "bXAtS21e8BdeDojrg2MQTULBuJZEwojAKekkgt7e2d1ncvTMsBmkuHb9EM3tiYFQhssqWhv3NsZ12iDiBasr5kH",
  "key22": "BEuQFjmvKNo7rkp1HhdEUVdGQX6HkqQQnPA77VXt4UZGd4jpn6RrXa4LYEEabQnczyVgJAcZBjeE7B7kcLcABGG",
  "key23": "J9aDnmhTFBMzHnpe5Dw8Zi7YauDXLndropYj1gsJnNRDEVU4A7XBPJkSztYQ6TpEoNpJgeamCYpxXzMLgT6v1Lo",
  "key24": "5Up7nqn8i2MswxXPSGwaV9yugPpNhnhsaPhr8TXoSNmQPFBWnnVGowdP3SWYBohHQWUqehigLtxyoHwuaJiDhmkw",
  "key25": "2bmmiAHK13vA24Z4cgCcxwbmtJmoBcuhb9JPxvpmdyvYwPKoJ5hbgsjT9gSUjR2WdZyuZBeR7ZUio22nrUh2jvf9",
  "key26": "4m8hE73siuQshVobkoLAGqX3o7iVz8eEoojMtZmiuEuBWgjs3FQMtJ5icQALEo7E5CxjNLrTbAGsYhwehNvJkbmC",
  "key27": "2YCbc6GLnY3YJHEo5RnH7re3E6WrYSDscwyUWKtU9Yc2LCUanfnQPeqBmgkdE7MFtoZnNSCwJYA3nUex8XCp5Pce",
  "key28": "67isKhpJ2erFdnYuNCGtpftsBk7ghZaGwXXbBazHqJn38ED92VtStY1EE5KrX4H3trfhZfjWEitQj8tEvabG48BQ",
  "key29": "1NC2gEVMPxHNSSWX3P6b7YasWmXxH87cvLMh5noJmuipBe3Y1FCnx3jEcaX1i5MYLkg2tyCqEinW2gckcBAE9D6",
  "key30": "vVBctytjEqcALxmoKAvMTJouLRdargax9APJcqD4PXN6cVZxU9seLfX6FaMkiLmPXTAfc9NrujAgQd7TRD5PUGf",
  "key31": "4Q4d4wEktrYKePGnBxqSc7eB1AhXjzjNXZ37DPxNazqZaxrtBrrcM9SaUtoCciz5SdHsbMN6aLgxWchS4AKtwNZD",
  "key32": "zjt4NqXZ1VtxqCpyyL3YBPibgHhRs7x4TFDBAebHiQDNMQTb4uywH8BvTrvEGsRS4RXqLc8kqhNyDanxCiEL41Y",
  "key33": "2gUAMA5EFzbWc4MuHtM4nEGHMYo3UEfaAX6y81oxe9pRuyDHyWhRMuZ53c8Pf41b3t8FtPJw7iXujj92VmjK36DG",
  "key34": "3pUbJHEJ915kyDBCFzzHEetpXyjf6cwPyw3naCJikbk1mYgXktEi8SkELL4uMPEFfMB6khksygGBdYC8oPwuBW55",
  "key35": "3gxi96iXcstgboBDJMvBvmDsiR13BdkSEMRSSFk62smnpRa8ecK319CtKqjrUXGjKcFy2suYrpHwVtVbWxKW4ZRi"
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
