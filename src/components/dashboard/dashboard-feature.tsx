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
    "3Uyp7J8DraCPWRL9cAA821A23hSEZx8idFMwHtYuadWFMDdnfx7iJsyJY5c9sCx2jxsVMG15qnL3ksB43jY3RGHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65egNVT5h7CZx8g13dFU1of3UPwESFbqDEHPXu8JCPkUr1TwmPaTTYyz65fJop1UPx5i2XaF1mxyxGXjwgBd7bAV",
  "key1": "ur1VyGSyhTiHRMPeivjYW8eqyCDoWYbMu4M1ob8M76UPuF75meLWBAeMiDVhtGWQjMtqgstR4aFjQUnhUVF146S",
  "key2": "3NAPZZcCsYAf4ggMGk2nSQZSb8teDUV6WxA6cWEzkeCk3LqrvZRQBn1PNA4WkXTCj4RumhkktPGxQsetVi5j7UfN",
  "key3": "MQaYmM9fRVyJNuZdJFgrrhebgA4mPs42HbDfW4eyhJCjjL59su1a1n324zUH2yV89tB2om4WAjEt3hrRivYaZDw",
  "key4": "uPJZv2peAyQSYXeLkXXVGZBtQLPsfYggJQmHF8tHMqGC5bwJtXNLKZv253YrBAYD7JUAiHarvX4XbzNf3aFfti3",
  "key5": "3wRFPDbuJ92hQcrZULv2Sw7kDBucJR5b5nMYf68HhB3UQwwH38nSh8yLh3d2JFXLwYhyL4th6rpjikpRTZfxbst5",
  "key6": "5RxeU5gC7EzSMZcUJSMDf2aw5q8tVQeEfbg1d2pASi88xqwKPFUKE8mQvEG52EMuiNfnsqJfRcyp7uQniqTo7SxU",
  "key7": "2r4nt24bA3NAWXECJ6SLE4X4aZw51J9xQF5KTSJoMCuDEVAuZDP7MhGHp7CF4F8KVZP2e53Jvrckod7LLNSUaa1x",
  "key8": "49xooMYJfjuE9ed3tbrbNuMEc9ZQdwrWFAV4iGoTU18GbV2mbjKmd985ke5qpKgGvnp3KKzvqeWXdXbkKkEQmvp6",
  "key9": "6yuYQeEzRD9yThRePY3PxiHC2UHHiZ7ivNiqzPS5JsGxzhdFVxjmpFMCgtNEfRpiL69G1Dhkw4jAnZanrSAsmmX",
  "key10": "5PP5tjhhTTxW5gqXAjo5EgXW4F7hfjutL55pkux8WLZu3yJqdcu5Lvuk4oWbqWvTGpgRygtGNV3caiSzEHnxEjbz",
  "key11": "3zWGvJX7RctLgzVV6gViLheVnATraSCqfoGH7kV3hwLTgtJuABPjy3m8TWPbGZCqDSgRusYMEXMuac4R9qNQ5R2Q",
  "key12": "vubJniFohiXLciqfxFL6bf57MysvaREAKC7we5JnFsJjvcCfUH4TuikfdR9HsfMzhg5Ni1Ar118KstTGS9xqrg4",
  "key13": "5RQrbj7fUTZeHYDBmU3Dd82eVC6nw6oWXCN1AdAQNrX5CNYRFnro7CdzwPibnpB6Dfxa3T8R1843debi3Z9b5idB",
  "key14": "3jGac5YWdNBHJK8bq9HfcLrz882e6TMp2WF8DSzk3PXCaGHUKGqH7tCugFzmakWkHCjLPToaURBSsXhbn9hNrZi2",
  "key15": "2Bgc6BqsXFp7LqwynaSMyadcifFTFx9gqNykNezACspxsZTMad8GuebnQvWJVDKuqyqzEgqNvbyYudUZZoG8ar1v",
  "key16": "H7nwehL47i1aN8svfbGr8MUEViGTdEDm3XE4JQbnzqXstY17SmpfySPyGVQhabGpGycBhUE779q6CTWLXVZpBDU",
  "key17": "5g3XGAMxTiFfJjSE4VwapNdMVW93aHxvSh8DdoUDw7ErMWRc4MRM97iQKHG99gDHKpZGJR2ejdewYPgMCMT8R1LU",
  "key18": "Kb74ja2vSuZiCoxh59F5wsCoQhRy2iKtQzMJGdwtu6FF1rqzgxz7xoufRuJko9cSWiy4srG4fEJ7WBdmWpyGPTQ",
  "key19": "2YzkCLt5cLi3A4jYRXDLoa3PQryLRAeD1H7NqXtubt2bZY5FL3MNC1DwuTCBVDnW1F8BnvJKorxAt2gNnYHyxnLo",
  "key20": "3JzkwVzK3jdNJGjZJ5vxS4DgasBBWn8BM77oc3xgvB8uhsPk6eMVVGrg4eJhX8GAzVUbkDGB6x6VCpPVpRPAJVkM",
  "key21": "ZxaSyCpF6wrm4uRmfB1EooHf47tGknUhG1NDMB7U718iH4xqhCURKRnKttBjvgkat9KaMiMr8b5fViNYnHVbWNZ",
  "key22": "63JYx9dnbTbLa1Bnu7jYeectmcrkF6JRgHeEGgLoDkjLbLmxMDgniAMNkR83h9K6ZSdE8RzMRCJnmvqW3bnK5HAw",
  "key23": "4pv3kF79wATyyFifkpk8TNE4ChR6xLC5VoDRqpSdQzYMY5bYVF2PNgHK7TwCLFhexgbkbua5KMqWNgdWSU1viLoi",
  "key24": "2Kj9ieqkjTFYMs7GPNawWzoGRdA728F7nxwJ99d5eAN25jp7XyeZBG9Byocfg1jcPvkT9uxSw1kC6A7PkFy9EELr",
  "key25": "3y2AfhMjaUsYn1HknygCbjQpwzebzjzorSLSorMoMHoRbKjiE7wL1DEbyqQjL2PaHmtmPJAn3yZJF23UF9GGF1yy",
  "key26": "5QScy48vbQukKkHbyxyzwingC3miCDnPUKRyQBwioF5FgP7F4jz3DExCN3kLhEiSQ1DqhThZsBwb9CoUTqoz94yn",
  "key27": "2Mn9oArSMJsFxeBZNyRRxth7DL5Aq1RR6aiytCZCoTS1UBaBL94E9tH9BuwGcmQvxfNBqTCQLUvsCYzcFVj2N7r8",
  "key28": "2p6tG2STe8baB65FC8w3fmRbYhLuMp596WkM8vWiM1d7sGefwgjza6dCpNLSA7UjXjKd6i4Yxogoq3hVvNunKPp6",
  "key29": "3kiMtnN8M1gnCazBgWkZpGUfE8UpYTLSrkyWXDjWW8V56iqpZRpyfHNDRGZoPLQWtB8i3UGgfxKRjauHLEpefPML",
  "key30": "3mBpchXVUSPXPgdNjPNckkVQALNgZSPKX6Jrf4VDBFYgTjGZgy3DADc1PTSPHk22J2sMjBydg6Q41pqAJEyRzKiK"
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
