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
    "2X6pDbjeBXPDLLaH5oQdJBGW5UQskr2jswZRd5MxHaLiDbm2T9HdwxikePTYf5UeVdrY6JqhukTkkhXR37DUDMv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WXyM5goptfYtzKGCkVoiCxKTS3eAFKc1csNsfCJT4wATddVBsDgTZLuh9Dk9VvcrAbpv89FiZrczEtZ5C2RZyz",
  "key1": "3BR5HFiWCUckX5uP1UTUSk5PtCLFpGLYDdAeBSe8peuNsoopCk476ZkZAHXYrv6hUoAq7BQMd9rLJquVsuA4a55z",
  "key2": "upQXq8vHcncERhqCCzTRm4ZRuiYfRULDnChm1TmXDbhxxnRGEmCg9Qc17j2nBAV6iDEiMU2yWo3uEp7Hzfwi1Kd",
  "key3": "2kwq1mtFqzY6AZJobtf27tN56jiSPzHj5c7aAXDMXddKMJ3BzH8xThwyticaUyXmbAzUJrvkoEnWFDascuz2g1X3",
  "key4": "53e7vmwsFsBfMWvLXjLYbLpoSBQ1tNsn5WUGiLgzPpgV6maDqeT6t5QtfoDhJJCgCAnUbgQrp1Q9UGxD29xtfBNP",
  "key5": "oMkxgm9sMvvBzhg5KNDZ6PcrHDERoEsM5wqPx4LJLPZQiJS5L2ZGi7FwJGjdoDzPHh4DKmUT1Ni4rsoFM3Fb47H",
  "key6": "Zj3N7FzgUbuKRoaQ8FTFhjXh7VNVN9wMBgA39RSke8JRPUxeKCvFnV2BaygvtbPXWPLKxmkrLHmbM31tbsSrEAm",
  "key7": "2YKLASozS587KG5nHcx7STqF4eYuwH97ZMcH9jjDsFKonUez8EuRnmsHs23NgiQBRsk5eniKEgvhVBrB7wMfy2qy",
  "key8": "vLsrXkksx3WAt59SmUqMUULrE1QKvbgK2kkiX1VNqRns4nNnf7AbycngYeAziNL4NNMMu3cyArAfQpq1XwVTJQo",
  "key9": "4AjYbwaYStNAHb3fkg63PNA1zLs1e931EqdftmSnH4wPUN1AzUa7pmDetNFSXK4mpUMP8iUBtsQnooa1ysgX9E6J",
  "key10": "2RPGmw5ascLsxxxQ3Usy1b1Kz8AguXXNBJHnBkktoVQG9aSmpGe2ieJcwLboZQ5qJU8k7ix8JNK7dVexem1Npo1",
  "key11": "38uBtKjHprRRyLAoTCjm3FXZtPFmLMfPUh3g3Pd8ViEYSPt4oQfwq59Pqnj8dAmpX7Fe9EeYtv39mfU6MxDUDTBt",
  "key12": "ExvMW27wKcnJfGq9tDDXw9kLA6S8DxTMhbf3KC4sPVunNFcSqL3yoBSsYMng5d3aCGUBQtPBUZPT3yAtkjnsEym",
  "key13": "4ScjBiPLwjZTQNfDX9vUkyLuLuazUzz9z4wcng7QsWRbdjQLNeyE2t3nDRXnqGZZA6zDrJ9iNwPpjK9922xiiaPH",
  "key14": "3XqVc6ZMiAoYy2nWDX4A6gDH7t6J9pbYwWY6BUQiMPb5m3WLw6J3w7ygFdQUrHfpAXTmpbN1VroMp319JPdgCyHr",
  "key15": "2UuFijJnNSfyLPKsnemBV3jB1KjoiTJEoJoNv4UW9b8fxeoQBoARPk3NrJVSZB7wTL1AT2WhbQUbMih3afLbAnyT",
  "key16": "34XRA3xQR5cAw14RfA9uEybmsJcsJjF1UpVSi8PMVjq34THRs1G31a3bBpW2UL47EiYUAANmPoMGUfQdYbwQhqak",
  "key17": "599NXUePFCwDps751qUdvUsy6c57RTRTwhWgMtET8vf7Buz1oUGxPL4SjmhHjJkFcyrweWkgSGucgRUgtKYpr7Tz",
  "key18": "5BtPuwtCfw3qEAigooiLZAuc9uPc2VDvCVrSvJToc3zRumCDQUaaEqrJUkhzoZvveA9R6qYPWjhs5m9aRF1eYV6o",
  "key19": "3k2eVTmHSSST2MvJ3U1yMgF5B3iDHUuDd5VRjkbUdJDK3AxZSVggQJxa8nickyKc6u9uq9CSRkfTzjRhoXEdVEdi",
  "key20": "4oX777Gr63X4B39otWnphkX9GW7eADxaUWWcsFMXcPqHUhRQ1rCo8aUSbAcuTkbUSGjo44HAfEBHv6N7CDTF6UeK",
  "key21": "5mbBHA9LZi6dw1nozvpsbRssdQUrpnqnJUd8qR3rNyUvKT4FaA7CGMSWeQGWuzuvpRteBXRqvrF2sKVj8vmvniVh",
  "key22": "2AD2gYyqj9RzfjD4SVQddWTCxdsK5LUdFRV39oqiJ8UN2aVXo7a7PumBR8EUyDiUVHcAa1j25bGCq3zaJGcP6BPJ",
  "key23": "4154fpx7f76H689HppWbkeQ4pNT6SSv7H3q2g4etrLRyMEuAWTGS2BsCgbygCxCrRyWV1rLXWPZqht87vtbmp6uP",
  "key24": "MrgVPLGiTwUrityKXQSARD12ECvfEtznQrEizKcatvVicZyKx5D19kLCzGKovcKcogS2RLHVjg4X4qgZceNz6Dr",
  "key25": "4FStJU35SRj44cHenW31KWNMbK283GrnXCYpDb8YX96PsvkJMKRcEFFPijr9M4FHxtujbZVUqzfsPoYp9voViSfp",
  "key26": "2GaMhkopY3z2o5nSwoLe5vs7jsq7pYJytwG1btpNcP6whfVcb57AkLQV71dwMi5sPuhBYYJdm2bQMuhmektnxAjU",
  "key27": "5Zd8ehUm81DDYvdyBgHyR1epfe84frGjT5MX5Hn7FZFf4uj5bdGbStfP9CWAgbbTQM92146GEaBf8yQ6anXoqpCJ",
  "key28": "4rVMdXTSJuD7ZVuHmgbd8fXCsCgsY98j5zEp15Lsh9LxokCSPV3LHvn7QX3FDiWC2twiF68d8dMcRqPrmVDeX8rC",
  "key29": "VZJS4EWLFw6tXE4Xi9tVUemzmt8vookyVoZabR7SkqTjhjj1CcjG52qQehN5KuYCuu68ZLwPs1uZeewXRmmeGku"
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
