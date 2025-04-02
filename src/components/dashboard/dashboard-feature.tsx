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
    "QzfAzgf28v3JHZss5BobAKtvNDGhy88bVjAqkq7BtJusexPp9zVjTk5jGLPiznw6gAxH5kAV92iuZkvxyaUw6Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39J9KnkzTpo3fFaiBktNDZF9vSoSAshrTnffbpiWW6aEiZYs9f7hEtP97kiFNBSoRFycxqRn3vbERjvkqb6G31kF",
  "key1": "2SwqbNR9DvfzAduxbd11wiGGsNX7gY221MNZSueR45nDE7jyMukxp8jF1gHVkLE6nEumFXB6o1dPiGZJjH2jEcBM",
  "key2": "4RYmeS9VWbXcjXLfKNC44YAMLZGbtCngVQrXigVb5Q38dXDn463QGbXge1gBZiTUBrTFWXMaVgAEhYKeFvWzYbGD",
  "key3": "2ykUkjmdcaiUhaqeV7GNmgdFnpHBuNdD1XnUDbjDLxFaizdHg2kQnHrF11XGzLGTAmRw7MXda21uiP8TW13PfySL",
  "key4": "423oEjm43nFKXMLtA5tMKESXTYKgNM1XFKcfFQKyyre6WiKznRsW5P3onTjXo33mahnVWiye5Y9fEhm2sNXaAJQV",
  "key5": "2LvpKisFpieHLVAnGwo9G2Kym7RzYCLKTQQLYoqiw1LfuMeaKZWAiuNWju5PmTyxKhh1rvTVc7Ljv11c5dxYCEtA",
  "key6": "UqWAKp2nQcmtp7Ga14oJM1FrRrbWPSst2YiM7eq8WRnoEtquP7zGSXUW4SMdgtBT6yM8bRZYfGdo7vCa3Gvp1zv",
  "key7": "3VUnm6cckiYAJmH3V4eFFiRbECnQQ9pHgwftDo7FL86J7DiP1iqwgQDBcF8F83oW6xaKLmngfFZHdoJMugBDnXiZ",
  "key8": "4Rf9C5SbyxCj2npCwCvC3p9k9h5tHWZUVauE4RHGwgNsKQ1erEUnrtopr2V7pqjGR2uZiPMsiZsGYKa6LBT2yTRs",
  "key9": "wqrMwkk6vTZDdakvZPu77vnDktDuNNFW9atH6X2ez6jFHd72hBQedQATtfE96prGtPV5iKHpBS2ZHXg4BC5vmS5",
  "key10": "3xNj79pyypriUnCVGYVXPuNRgg1YwmQUvLbqRsfE8kUAHWRdX1dekKdt6BAYuMryHSZA7ymH4pEi6Ucmap88jvku",
  "key11": "4FbQhJDo21itnHJQz1K32sJ4ZsBoh1hgmWi1cuywbK1ftXNyJUtmem6d6pCpxwtepoh4ZQPBseKb1aMLbCt6Wf5G",
  "key12": "2ZnQ23dJGBXn2fhmZqhFV3uWWDa1SnpunJwBnL7Cr9x3L9R5cboDKNTtAQmhj9ACpeXcU2o2PVLtCHEsD7fxfmQi",
  "key13": "MQhoBMzZpB961qPdMRi7bU7SQj6tyBzdHWTpYWs43ZHnTH9FP5BU5wsjS8ABVUcfPZLMs5Ux7iBw9JgTQ5197oS",
  "key14": "ct9se7rEe74P4fn6mYiq4DGwrVL8jqPMtEU63q3pfNGFGHq38NeKaPpLbq1ew4ygkm3NN5f8FQ9GPxGhhoKfpY3",
  "key15": "53iEq38EoHFoQukaTXU8H7EyVQTXQfCGriu8NybYc7sDpw1QN57pRQAkHCsDP9dRjNU4dW7JStHB9ubTpce8py7e",
  "key16": "4yB2x4NqsHixvvCUdpDtEMZYjVoDfEGebbgY8QNWBG78BBZBXq5N6JR1EdamkjoG45x6ntn7NoeEsbZMwiXm53NB",
  "key17": "5RSKvV4hMQrLnANNmvyST9j4nvtahTRkZVTbmdUoMD43xSBq2ZWbjMPHfwAd6WzL1RawsmktYFSiAG5ECtEHtz4Y",
  "key18": "627N1X8tCprDPwSxYz6QrKN5sg8pUKfhvAZXa41nPZU637wfRAhZR8cjSNP1TYccedQoXV3p3nWv43kKDVoYXpgb",
  "key19": "63Sg8nc1FMAABR8NbKhaKVWhoH1M12mL5DFXkWDXccNVTbqrbtH9h1Fq1mbmjYRKsxSVoMs5uPtjhkwWivDtzMs2",
  "key20": "3wSmZyo3SJSLpVtHDJAoBwCoRQkBEsJkL5pB2R2K22HiJEzbE2V6DYrxsoYyVsKwLdkEitJf2ucDbKs5R2rK9Wz7",
  "key21": "567prM2Fdf3qGScmMuqet1md1vDoQGEF3KjcF3DDzo1WprmGcgee1JosjydBWqcEFemWHxBKbDNtprBABUjXxL7t",
  "key22": "4cnB3bGUEVPo2v5kPjjjrEqm1Sk9sXnkuTMgHByJC3xYY6nDXZcJspxqjqPsrzX8kV5vAYjtDpau11qWzhiyQo71",
  "key23": "33pz1H2y9f3UaD4iVguqLFyokTh2NVLmb3DwTFQdfvNyiLcXWMKhPS3bofVXzQ8CrpoFMuCzEZ86wNv7fFc9Dd7e",
  "key24": "4BKx5NfQg5TYgheiXKiS8AZswXgvw8CxpDxHqJVZNMV8qgEgHDWjHJoqiz8ZZAYBT5cGDxSvdtM6kJMjwfQJkEnY",
  "key25": "FF9JU1QH5x2XNBCuxvBpdo1tmCXmrwBaoqG44BcoYjqbrGjTe2qM918AiBevsTdxoYntnssVuDDcYuu2aLoG2Dw"
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
