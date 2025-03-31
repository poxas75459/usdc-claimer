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
    "51KCnTcnD25UfcC1zMdjWqKTkLqAFca9pdXv8Xemz7KcchwJaydyEeXwAAhgaewFgzVmVZiaUREYZNV45SM3ruAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eh5SyCv1sCKq7kQZtSjqNchZsv9G5FEtXcYj5BZ2tEd82BUpkmyFLKD1Dmggcg8qU6LGKQfwg8ac2i62jshhqMg",
  "key1": "4YyY1jzH61SW8Vm8obmziycpTSbfRJ2bRfEdJNef8P87XwFnsufi6bwWrUjEGE7HeBaQiSko2TkDPzeQmhQmhN85",
  "key2": "5yFnNUiWHPLY9tok3xycnDpQEVmfsKPpNJnS1B3PW1ZBP5nmESyxibmG1jMukWx88TrnDUMwUXr8dDMMUrjb6728",
  "key3": "4frv7GZ3TjGSdrMNPRt9pewpvTUWbiye2g7KSiaig8av9FNw1cY9UySqitVNEEHnnPxh8S6wiZ57cAps8tG4MyCh",
  "key4": "4BX7m56nXGhXpEWa1oR6uLKt1678zbX9m5dcNt9YbH8zXbeTdyEiatU5WNMa72RE2a5U5dKQJ19DQeREihZwJQiK",
  "key5": "3N6JS79MTcyszDU4y1t9CXrMe5iKuKXvokBPxDnjxq2wnTo5Y7SFpiRJsBTKgDSnhpKRUBZAdpxnDrDDne4DNHUK",
  "key6": "4XbTYZenPZhadX3eDvYPzcPa9W3bxSDGLpSSnoNwW3wPLnpfP7ne84XS2CrFvMrosLpfysYnhMYPRHdLnfS1xVFh",
  "key7": "3VkQYudzXHZ4jhAyrShTZV6hgVdnif7v5okx5Q6DhcVd8ZRoCZJpWpRMYbto12EyZg3D2j8RRMqeFTVN8ZPjoNAV",
  "key8": "2uFro3mPWg4VZVwqbi2fbBCx2Syf4x2oPxWGA88U39coj6Kv57iEvsVH22XLxxbJhFHAUCs6j9ecefzYh1AbJjyi",
  "key9": "3Xx3CvK5BCcVi2SicKyMihWKgYv7LPBB378GB7ans8E2NbrFnv8TRQXnJdbpU8vf41K5aGGkdyg8Q5GR2ZxSS5bw",
  "key10": "rT5khSuqUHjbvFuzP6s7iYK7ESL2GBhmBKESAVZshTwx6S5Z6jhsfNkHJ5qA4C37ggtqtY14w1Fexs3h7VErL8j",
  "key11": "5NKyYE9xVDQoJH36hPy3srEfgonLycPekXppL2DCTApxWTbri797usfrHv6sbGRqxnEgjNjTSsPE8yJuAKNm37DJ",
  "key12": "4VRFkNz1kexXpUeQQWwdphdXmF7cgko2PPELdG6MjXzBWLZoCB3jjbaSG5eC143jJ7wggJ7wbUjrqn44UeJMEivS",
  "key13": "4arEdGeCyTLJ5JQ7WKPSahQGC9LUkNC86aPwGeWuuCDzLgLQwB4SXvQ2CLYoCG4T4eKKNHPDM6Am2Pc9SzuKAmKH",
  "key14": "3aUg5LJ4rNB7ug3EeXqS274fM8uWJtthPXnsPEctLH5X1UVSypnvo1dpycwSiBnFZGVRHe3VNLLH9fQ3veWsgZhE",
  "key15": "2u2LBWu8XizQeAaH6zSwiNPNeiGMitRhcupPuhVQGgVeube3xgEj3VJnFHUiSwAxZDinpwhUgQGwQZPDVCCxmh7J",
  "key16": "5numfK1WuXt1M5EiN7neHsUqkdEVNHEBT9656LVu635ebHypPfY9o6kjXAcWj83Etn4pzbC5VakmSfsZiBUiov3y",
  "key17": "63Qdcrn5xbee4DHVMbdERkY8Jt64rHrsLN7LGEHCh3AkTMbps478nFGqxhQwb2zkadCRB1k9pbmEc3aAkVhZjqie",
  "key18": "4W99bCn9RkWgzCkH672ivtMcP96Ud63PwVPAckV95rgg93BYqbLNucUt1zwSHVUGLbHdjZWA6YQg4YaorEniKuY3",
  "key19": "4H16p7XvkGg6FAQaxTmJCAoAzWsc8dWn7QWkJFeC5173o4SGEnJKzhfnDSX6Mrkq4VZ6mUJJ16N8fbpE82wpeUfr",
  "key20": "4tieKt8nqVGbSupd4d5kaqfjhvUVH5PU37yYNkCcawRxQwQCx8Gcpn9jWLBbhJg1hQmv1cUi6mMfgTDEcBQRqeqX",
  "key21": "52M5RVujUmnT6L8xDxeJrF3uDUwoUm1VQhngpk7fatpkLGhkKFU9HVFiLdKSmfb3jHiatLcdHKKg7bP29rqc2JFn",
  "key22": "rSfJNrr28yEU5H1tcSKTc9b8qAYuo1W8Th19uKXeGewkxSYt8FoQCyT9v77YSCzEJ8DUwHjy769ES2v13R5RpKP",
  "key23": "9ku35vNA5wVNigF8ijnQijM6c6qWQxH38BZJ8hzr2Y1R5F4AmaAMtx5cR8UpaYCURTsrtCc5y4AT2P4xh2osM1a",
  "key24": "fnTvo6KuoSf6GgnCvSBcpxmjsCKzbbweRB7ydDshVcTzEbvfn47TkCWNmyj1yJPPLLPMvecfFsuxHmTbG4DtNnL"
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
