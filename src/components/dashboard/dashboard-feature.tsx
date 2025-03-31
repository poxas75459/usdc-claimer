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
    "44oeYT7rjUPfUadpwJfxRvXx34j1KGJfBTwTHccJ3mEMsVSuHaSTerCKW48KYasRdhU9KXTvFiVBMMYMGsLdpvjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLh4pjBFmCEPQwUnzSuCHnXvvFHf4Lth5J8crp24udVLwGskgMTczqvV4WqHHDkZutVDh843tGCaugKgJAt2NRq",
  "key1": "xGUxDP2bqVSHEVouS8niLAJt5w3qsoobaYtLdB4W86gY2HHPEN9iC1B4qPryM4138rBbKVZVrz7ZMpJxoc1LQ8R",
  "key2": "5Rbko23Gw6ZYLYtLw7Q3ruVu1KhkYTKc9uf9jagWbJmH8iWY9GH29CNxf5Fi7aWfNmecrP4eUVEmCYzDfUK5Xemk",
  "key3": "8DqRXVaCu7vUmWLtj5HPm3No6sG1YmZRoZx9abbb8vBN44zd9kz9x4qPDtWXEwiMaztQAerk6zDJKDBu3NXpBt7",
  "key4": "2tR9wut6wmoKaXwFiRwRYSxWhptNv9Bt2H7JujbuZRE12GJXTSGwxGTqpK7iCNP8XkxKa5SNKgArnqjH5WKDkJip",
  "key5": "2duwo6Pzuys7jPotCLRDhpMgJnYkY7dhGFAVVzkoCvQqnN8vEkQjwiLhwdddJNitjV6zFFBFT9XN3iVNgGL7Qf3v",
  "key6": "X2sHAaT8GtYEsLAJbQCp6oh9VFxhb3QWyGJRYCtPuqgAciXQVyDYsz8dpJefSsrCUDZMMTy24ES4dcpszqJoNDK",
  "key7": "577HB2fFoe2bF4r8z6q9GhN6Rq5BHrBKbv3EM6GVHKFd7c3o1r4Nv1g65dZRgXn25SZu34cZTjfyDntgTsRcv4fu",
  "key8": "22j1VVsgZ8XJRMQfzYmDCfjeYkZL81pzLjQf9MfZnNFdKR35xBpkDCwQCjoDLtWvqvUZzGkntyig9YwaDFBAeGjT",
  "key9": "2r1MPk2Y24TdyxXNquu551JekmRKaZUPM4mfUuqWpsr6q1ewUiG1GDVn284MKRFmi5uAuCBC9vMjRs4t9m49SDvs",
  "key10": "Uva42UqzTreQHmt47h8JyCmwuKyP6zkwxY18kETEBDKKYQ5QCMjAPj51L8ybMku7ixE7mkSAe71rwS3s5ofNmp9",
  "key11": "2swTmV96zajgoCHYgkZFUznT1bVgfSXX91squ4WrZCwPKznJYq4CGEHAVhJ1jrHFx6VP7vsV7EW2g7msMYjb8Px1",
  "key12": "48kNYbSjB98NfNvCUyR1k44hbcEpaMnJiHHt51y9GypNQFszSAbNyZQohfSJjuiKuowSWf1uct4JLBJ757rcTphn",
  "key13": "398fgRCBxU7PpChLA2dnbFutPeYgVfsRRgBpyYazcE1vVyFTERs4QzPFiqbNjwvvyFp9X951jqTrwcnwAhYv3FCz",
  "key14": "3vLebAAfi8qzse4iKzJcfhQu47h3WixSEQLwuNr6eAQiZFEWSD4dHiC27aax9RHAyK1AoKoei5xxTuFmFov9rAme",
  "key15": "5SF2RAcNVFMnDt1ijxx9jTthajJcuRKAVXTPKs7e9iPRRsgArnqCF1yNCvmezww2eB1Q3mruQ6u6V16jXLygY57E",
  "key16": "4fSbhU9jq6aSkkedg7jZLnHY6GJCgGkcCFYSrSBY4JH6i7ZfDZnSokQr9RzWe6xRiKvPS5CHv1DTRg4y2dyYig6H",
  "key17": "4vz7U5tk34c25mbX51VK6qJYQxvCKg3zjut1YyN4EWAp4Amib2La3vXaToeJ3p6AbymM1GMWeQCkLWhL4j7fWKBc",
  "key18": "5A5jNU2eoKSAJFSZaGcqLfj6kLDiHwXWAhSDu6MR3nZoPFVJ5CT32JMhFgENZV3xLkqo51eAXitwsANdBpavQvG9",
  "key19": "3z1wAoRa5J68rtu6ee6Yo6MG6wUoern1Y2z4yUxFUNPvXp7FoduUuuoorayZSHdPTrwcLDuh39pGaHNEaPD6n9NP",
  "key20": "3sdxqtxfq6M742DTAzrdDusSwUU1m6t3RBxGNdyLjagev8JyfvHGPyHMe4iDwPML9Kcr9eegYYoTj9k7akHVVnbD",
  "key21": "rD8tWUczpeDSwyZZzw9QErBXRSvHLqPejGfMQ4XNamK6bJ3RXS6uvMCWpEJJf3r3TXe57EtSzxPfNkas9278mNq",
  "key22": "wYrLNoTWVmDuew9VTWB8MJzrLxv3NrY8QcxcYnyMEJiMjDgN6fpnwPLEUDvEmHxe3JJkSfoEM1ToKWavViGATcz",
  "key23": "3wshsi465fgtnvxcRNzKGKFZF8yxfYCBKCVTByjSfSC1Vv7B2ctHD5Ns8qaD3iqZ6RX1koeJB84wLgjAbWKRp3VA",
  "key24": "2mYNL6h8J4QL4187UpFnk1DR1fCzQay8CmS8eNyUm5fjKSgPfqCU9mBgFZchCFL2xiaJ7Jd2Xcs61ZmY9kpn5EMY",
  "key25": "3zNT4FSj7PWUxf4PVrskw1Qzp5ajRfEFWq5ew3uFEfXKr2hsyaTFjV2j9L6wCBFC5oDtJJS4JBdKTnMb11jrMYyc"
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
