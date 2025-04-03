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
    "4KoVtnVgG5fJMJPFi98czizsVVjY6su7huy5N8bRgH7aH7uxGisaWGzoSLwng2JLTbrpEku2NPJrnq8qXauXHUhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKsEQrMyzhCGhaZS423vgTNNCopfNLp9L8a2Ct41pekVcKaJrqj2bp2mR3q6WjTu2WNAovtJUvxVwkYtg9VpVC",
  "key1": "515SSHZCZWnfb31NaUgNcZv7xiHML7jVXW9o7jezBZZitYpRwcWqme13Py1aFWCUxmUruNU5hYRN5TELGpnxZUEZ",
  "key2": "4wTC6HHdGoJK7wyYFACdUX9xiGQro8ggndmh7CqbFHCcHT7p3KZhWGAhxa55vXHnGckLPg7VqPqtqFi9chT4NQ36",
  "key3": "5d1qhtyeDuUe9PTyMwDAyLoMW8HpCmV4jp8Pcz7srUiNPfhKApyLchyuWeN6Q9WNvnSC44wzGoagdjWq6UtK5x9L",
  "key4": "3wE4p7rzMPTCKcisjUGHBrRT72BQtgWfNTnYfYQHCsw4QUDwqzFuDN8BHnfNVYyM1TwtL78sSqLipxFMkvDHZSjj",
  "key5": "k1LPRkxhnTpkQ5deXA8LW5kiZ85JdFkBtdQzYSCp9pyKgAJMh4CA3SusDMyugi2D1rXm9JvKfGAHPci3NA2pasM",
  "key6": "2QPT4hjokrY2SxUMcrW7NgLRXurDp8KAiEfZMy3cycqBmJDpWAr7MYbC76F8RMsafDUZ26EnhbsdhpttnaWZNs5C",
  "key7": "3Vg5PtZQqxydgVEe8ksKYz39fBofFmscJ169bxQD2xUehLnJVRuML63TtrQ6ePrjvm2qkbBA4UfCZn5JVk6RV2jP",
  "key8": "2mHCaBo2LtPVWSJYvJMTxX6i9smgeWgkPrY86Z76Q5tbsHe3ywcR8jtc7KLPr5SDwnNhRMtqPABd6z1GQjFHKHWH",
  "key9": "3rxfa1DP3ZVw3iMnWL3AqnPsA1BgssshR9bjLMWcmhYR7LVNFKjN9V2WRkMeTf6PmMZLMzUwsTyZEjGMSY3kuS6t",
  "key10": "5W95bAppBnc5Ca9WgdfZbnUHchGL5dBPpScPNRCyYKpnkstCEHBkn8u9Jy5tcPLdYVi4Q266rm7LJz9dyviYdL63",
  "key11": "45M3NRyNL77ENPUxSxnyMdsMmH75F387gnUgojKD9B8Eh3zu46enRnF7SMviRBCnDfgGU96isPk93cnLqVjom6cF",
  "key12": "2Ziu2d7AeZEMVsAuceZSTrW8yULC5o5iHBG4d48AAA5QpCenNi7337mZgMpDvkh3cSBWFJU8t4if1wzh4vTM68fC",
  "key13": "Kudf53iKy5kiX91rnQfndxD9BwZhABnSBhbQbhs22SbDX9judBrjmDZSmTDuQSFu18magDJqfMDd1LNTRB23aDL",
  "key14": "4W98hMXCiUzpeVkLuo5eDMC5GUHJAd2XQcY97gbH2G3atjWpzpJnKq2TM7795zVQJEZECUcagfi8L92PsenqZZgF",
  "key15": "2Ttow7ZbidgJWfKGeEwazXJ5zAUqr8RLKvJYdPWQcyaZgPDcNvcMsfouFH2KgeSV1UUC9sHNgijr7XBCp67u2xRn",
  "key16": "2ctx3myT8uhxETqkF6h8uj9DU1nj76jm8UiSoa9dUWDWFfmXXirUVE8RcJj2VamkSaUC6AMYBDrP9rNeN1j8m7hD",
  "key17": "5H1GCQU5JMZWRgX6eCm9jpUwDtcupx4hZfEbjwNHPxfogLi2rEMmLTb8hsAk8R3UJ9n9jmsK89dJDWDxiSc12eBJ",
  "key18": "4zukpnM3L52pW5jVk2rA3HdtM8bKak6gtdKdM9Cty6PBdXWv7PWb24nn1dHMYEFrdNTV2Di5Enp4wW46PsMaadKE",
  "key19": "4DPACVAkAwoSeLJUgzdAnSvw6SiHrWY8t6fHLqz5DN7appnBxpjFpUXH2xwnBmLMdv7vtrbfaeUkDaVboJnmtJY2",
  "key20": "1267ugQ4E4LjWGedUcbNGvkfsqkQS8rvVJDnJaU4G4FXgMC3Lzj86C9cJ8XWP6ctE3MDG1RoVT3M4qRfsfobrCoA",
  "key21": "2HL1cnx57oKS4cBTgrBxqDgLFLG87naDVvadNzkrtYi3fckAofeB67zLdRxWybhFS8x5s4ahDP8SJH4fBLYzdo75",
  "key22": "Dmm1ZCRiKBf8LzhNFe28FbBkSzf5k3as5S6jKfZLKUBqXZFwYxn6qrk4uSZfnERDeGwBxdmW9iTwPN7jwDDC9nt",
  "key23": "2Vqa5zXhgywxWfURzTk6y6pduH4JoU9nmEVSDLyWZo8hHJ4u6MVkchnY4sRJo3RNnCQHvg56f63yZRbQHDJMLLa7",
  "key24": "RmJDnc57BJF1WbLf8xbo1d65HB4H42AArMaFDXcUatsYfPKrovt72ahLNzzpmV9cwnt1qv8zjPCNTWwCc3pWMDQ",
  "key25": "VaPRawAEC6CKN3B75n4Gb62Ck7buG7M41eAw37RtbTpSd2RaSgADp1rhAUeRdBN7RwPXR44xzgKqFfoX6Tk9HPL"
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
