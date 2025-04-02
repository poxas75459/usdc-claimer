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
    "5V9NZXaTrgbNZs2Bfb58Tt63Xud6bSxgWAUSkSSPdvZxptDKYBfyqNyzRFEsLg9bozRodwwq6NqkG3Xna7MmNFFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1qUXb8X2TnoUsP8bMgC7othcKf4C2UBqWJ8WdQTJKEsTpesv5LKQ2Mcxkf6PfMaaHFgrGT871Pbtw4xWe1RDedJ",
  "key1": "3Kn1PiqVGChnm3qcSZLjNBwUJxqXo3m5UHftsZKphgdbWbKVUDqDFqq3xKYiCzEUqeh8UnuEzxZv3ndD3ZLMDnu5",
  "key2": "KhevoCXGoaKD4LTJ8SdrsRjhdg8SdixMa46F798orWVKvrT77hmM1WjHqk1SoNyueKTAMxy8q54LJsMjW191to7",
  "key3": "3oMPC2mccNcDSf6GKYgDA2TDEgnTxat9f7UWUaYXdZbZPtJunGEF5Bq9UqArTaW8qw7oC8GfMXMCxRdemC6Ar8fb",
  "key4": "5eHj636TKwZF6Fdt1Fk8SFhuAYc93LX9u73YeJQhJqsjQvDeRtzfCVZwL8t5nwqwvuAPRwbfZg2zKaQ2Nv1J51JA",
  "key5": "4UFXGR2YiYpYAWinEerGgxY1U1afwiAYLW2CPUEWxLcUFuxPDqJYH2QEzLJJDanMnT68cBMu6BemdbKhVkRHoAEg",
  "key6": "4NAbjCybk7JFNjTNdsX2vv2W3nxHKTtyeTjZwsySZyuwhi6mZoxktnRWC1jEKsqmKeECuaGWANFu2ZFcXAHkk8hP",
  "key7": "24B5fCbrLnKg8F96kbFj7DSFg326QVBF5f3Mf8EX9CV6f4YopTWvbZD4fkxpJ5V3MYUMb8qEQcWVVp5vwFFuZp5s",
  "key8": "VHhxMLFAk7bjdcmAvbBhCivWQqE2MaRQmYaggNvS5BXCSm7naERvYpinRBEaeSkhMx7fNkpnQHKDXQUF7p8PHaF",
  "key9": "2nevWJQK3uHSuU5Lpn3WT8LCRqqM1H1Y8CLgB7xJ68mEjyAQLJwbVkMVehqCjHpLjmWVY8e5J7Abh3ytoLKEhvV8",
  "key10": "5cYeepJ6fmk7ZjxeLXqyLktC4B3vRHAWPN1fsEtcUMuA6uuPch7oovMMrHxct8wJvsh91Azecq67Yh3nTQngBVwA",
  "key11": "poXUUzBQvKSu3VHKm7eDWkSzow4zMG3Rcrk9zrmftwoRyiGRmZgTPUrSzK4iHCNuFaLykmWQntEurPhL9vUGLmY",
  "key12": "52nZEghtEyjkGRRM2ZU1VmqSaEUax1RUGe2jSxAtNx87FvacaQwVbtvLKXrfQ4gPfUgq3a99bmdbw14nhAhNkEni",
  "key13": "5zbKLw5iANQdFv4LfVDN3qt9rVQHaqoEudse4iv11v3zrNRi3McceFPc4QccsMss9XVfNSxtLyqSL3nva9cdNmi6",
  "key14": "hKNR6U4PR16uNmo4VHg5B7G7UQ3ig1b8U1zvqjFxoyetzr19e46kkM9HQZzvZDw2KRsQYWu8QRttT2hvbniTH9n",
  "key15": "26eHaG2H6DzbYhfU79tQR7QCMrTRE6n5MxmVD9fiy9nKiFvKqNETn88giTZuvVjHpXK9MP3cdHXQ65YmTcUDHMqM",
  "key16": "4cWhZVJCdFL1sfrgVuSiPu82E5M4faeFgKLjn66fURvJEaZR1FwdbBidwTFPJSDQdgqMt77qNMs3YisxQaLY8ykF",
  "key17": "3fuW5WvBbGbDLpEAj7AqG71Q3pzjuFDLpAkhdfQ1nor3oJiaS5gosEodi2K4hBFokhC5XAReVFKw6wYzu5ssXoMM",
  "key18": "5Jn1kuQJjZ4jUEt8JLedK1nqn6yLEouWrUKhGRZY23qRVLpJuhq7aY3fSFtwmK5bcS64X18nF5fmBfFTtnFHaZze",
  "key19": "om9QtDZj1d4Ka5qXd3G16PLxPyZQpEqGaRzRCxWGgzu2g31BPSTQVq8aHf9T4X68LFCj8h4mTKbJGRVo5KapxhS",
  "key20": "3kbFgfmKJmxGQ2PViCdHEF8ZZeQV5Wrtra1NmjQKmqkqJtcWFNsVuvKx24XzQtLvRCJdmD5oamoSZiZVDUB4wdVv",
  "key21": "2UBqQNTXVrzWzc9rYwpQRi7o2H8gBbkyxd5hGZNpVMxcsJzukbnW1AEKcrP6N2mqrnZsf3PtUvT4PcZAwmA3DRb8",
  "key22": "dyd1iHGfzNMV8jjJ7R2sAZFeAQ2794162HXzhGL9FDoh3eBQYCxcGgnz6d6pnrbHEVkNBVSy9nEATBdRZxUUtz2",
  "key23": "2UXNWmpn8fqB1qWHnTthfTEociwLvmJc2AxgeqNvGuC6auF8Jv8sfp9BuTNiaEJJvJDCdXS1XGdBKGHz6PAxCHwR",
  "key24": "ezbya9NBL275jbhWN6vSgLSJazrJiFdkfTLFBXtyksD3YeHXS4U8MChwJYRKQD5M6LDRwyuoewYBnjKhb4cvdH5",
  "key25": "28Rzd4n5PkSJKndjNqNkNREqo2Tw8B33F2L2YbTkAfwx8q4MQUXm7nMQSLvDx54V1w82Daua49JiyyLn7DWTcuLT",
  "key26": "3TE1yytxNaYNBjpqzZEc4wqhC1em542QuPMU6qGA19qQKf2acWF3HvD7p9GExAB8cSc6efQxR3qoyPkTSGom5EmK",
  "key27": "39Ssea8K7dKvDZuhVx2LQze46daMKozmDf2nxGugDaYsfFGBRaiVds3ueDku5yYAf4ZTg66nzAQ7t95kXqjZfBvK",
  "key28": "5eQ8dPYHyVVQXYNng7unVWArxvNUqx57G1hNMPqJ418295LdtuHiK9iEa8avPGToT37tvfT4ZJeg9Se2ata966oz",
  "key29": "3y1U5bkNpMb8jR4Rppz5ZN8SsQ2Ukh1yMpNvFG25U1m6rfpBfq8cwxVAnWZq48TRamJP2QQdWemmHH6ijhjJFynD",
  "key30": "583dzv1KsX49k22vUnB6LPfH7dG8oVFoPck9tkKcNsLoZWm81ygs4MYQwLNhW7LYpzJoBhxxF4hyn758Cm6C4tKF",
  "key31": "2VpT2qBpHUdnkmxsTrKgHxKotNAocRZjEP5b78hNmsQar8Znpyik2XELAVunECRoDBUNBi9DHv4rv31cBGnUJvHh"
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
