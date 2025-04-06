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
    "2sgRJUTB1Z7P2fdj3rWcDo1aSk9syxcJw38B2XJzdnqVXxuT2vyjYPRQUjRwANpP1n8BzSTcQ2m5CQkAz1fYC5Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2kHKt2CVXxgvaw134XESQ11mMBLdesriJkVgv3He5bkVj2r1jC8kA1N69BdCXwS8keduEDGgs37qu58erLjPe4",
  "key1": "2a48py5F7o3WkhUj3RvQyNSWbpRLVdkZpHLkAKsJPpdxmw6YaoiUZpM7NzehKDesekNqBkgWk5QnKsQEcHkqSb7m",
  "key2": "4nGNHToJoTz3WPAr5FdDM7aecnoW6kUHGYjuDfdmhPB9wU3ovsCyd64RMZPNwbkGh7GX1wW7NsikLme1aWvZCUkc",
  "key3": "66YgE7rGwALHHagEuyJxuteJrnPKRufsavHrSFfUURDNNo4KyagWRaJ2aohCUNKvTwuzh62mhr9nbL93PQe3DzWm",
  "key4": "zHdAWhbEz6o6kosEdpb31EeAKVELXc8XJQhGipi78JHSUiixkHTQ3rJZhjVe7bruZk13bRq7AvMtkLLJCvaYGJh",
  "key5": "5j4HYaFHyGYv4E5hb4XH8cXbh3GNuiAYK7CUuwy9z5tDemrNy8xB9WDC5W5W9Rq49TF6etcBjksJ44UqdhA4tCmC",
  "key6": "5Ygxbk9SgizSxwfyYK1QX5KnKe3ouoxEyS8GUaR7EMe3Dw9Po2QJvssg6e4zjiKWuYBQYAJ2qWkt5XrBNSmR5dQ8",
  "key7": "3N12gUUcMLXUmzWwgK14BTfDqtva2becFs9RhkinURVhEtFTEKHjYrmRnG2TxYvMU6VC7TS4xC5xPV2aut2dNEGF",
  "key8": "3nHJLp3BgsF43km5g3PCcSSWm83tWjrrfE919FqDZ4UmVZTZwp59R7YYj8QmmJHKwGdmAJKaEfoAtVS8nNfMkKBv",
  "key9": "4YFDwYeesqDv8ouw2uDtK1Z3aLk3sg3BydvkyVX8NmE9heKRbZLkxwuizGy6PSqChK2KUZnJLXq1wEMXGszdMY75",
  "key10": "25ctAMdMjj5GiV4DyyUXDSz5yoEHzAjT8UpKWAVXYSQhgKysnpp4nKpZHrpGwTDbsaSWWPTXzJ2pLiUj2VVjYQkX",
  "key11": "dFHNx6q2VzQ9XiL1zmSNijnGSGwdSwabeT2nDbUwGYhN6QRpPobMSdBvxXpbTMYdDXtjxCEvNTXBef4kRbudPHQ",
  "key12": "2vsTtXrZptTJBPfNzWdoZURtBMktAaeaCuRqrXTz6uFTu4cj5aKDQzyZHDigsS3xVVyTE3qMuUobQihPMatnjrYx",
  "key13": "suQcRQsoHkPF1AgWqTvLuRRzpERWfnaarT8WerMkESiwrP2kqGY28WsdbMCQDJaQBDyE2CY1wKTZGK2rFhZ4Ew6",
  "key14": "4av5Layhm2LtvJESqNj46dwDKx6Qp4fTe1w5mEh1xTjPPDm13yqs7FfNwcvwynqQiuczpspH4KbY9nhSBqXUuvB4",
  "key15": "4g4tdPwxWooQzmPnNQxGSSgVHQttew9dHzDzLxWGggagC773bkHfrBjTGwWXYMaKMoYZ76Dj4Rqg2iiTFC7LavRC",
  "key16": "2FpstvPhsDgeHGqDZP6Y9e9u5kazAi1PDsyUuZECLYerPwbbH6wjnpArEzcZYUKaTU3Day8a6DnQ8AgNNCsnWvTs",
  "key17": "8dSTpQpWxVJZTW148y5PojZidy9u3y9Eecahh2QG1fqxePMRmZdJVm2RBDTZK5njnhS6u77S2btXBw6h4hzgrFz",
  "key18": "2P68KkadUxZuWPhWztwgY46qEsoj2wRr74y2kTHGcyaDjhs3V7rax5WUGCkGNRZuhpCP1etvqAaDKviWMmnyrkSA",
  "key19": "2y5TSKR3DWW2AXMSMevmcrN2LU4s4PjnypGpgXqvpx8UbjSM89jBKpdFzjAeptmC9XxYJTLhSsrmLrqkX8F6unAo",
  "key20": "hMwjvYFVpeH2nsJxHDd4KoejsyVoSmX6WdvSBqtqNLbL8D7RmFWoKa44YtGPMH9dHVr7ikEbDbNXMCX2isCJWG4",
  "key21": "27bZkjpKKApcb8ekoFUjnoATCWySRf5aygVwTqNbYAvYsuAquHabj8xYV5fahXLqFbsChzTkzrNhTtUnYeBaH4W4",
  "key22": "36Wq1NqebHG1gNJ2TJf4m3PR4NUdZANqHw2qX8NXzrr6rYJdewgrRoqQWk5bejoGiuFpkjZfNuohcKenJ4i7K8yv",
  "key23": "UyuHhCPfEXNGM8kJ2vmNBXSA22rQURNDLxFoGnUMK4LM5A4PjRiZNjY9SyT7HW4bu5sctmoSkhSr5gvrxhN76fu",
  "key24": "4syMtMuSpUxTmHD8mVcYkKoZghCMwtLnDdHi7Ts7CpDBjvR1rNUhvhaqPtr1C3a14WwumAmpKh7NEihxdg9TPLip",
  "key25": "4oasZD16fXtE3PgMmefaqDiKigRBkcPn6SyQc57SWSgqbKP1GdpQotfCizGnqKLWY4Amwve8UDqaMXcCQn36hhbf"
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
