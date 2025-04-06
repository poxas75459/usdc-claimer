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
    "3vzZ5QREqUg8QiLuSYDZHJVtmA4DEZHi8snm5WnhSiK5xhJnWZa5cdsGgM12TcPKt3ErbXkceTQF2PTAKx1VHuf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfMhMy831xCRQ5jGf2KTpq2c23UszdiprNHDkA4y5itXw2tMFmDT5TWiNUXQekmMK9CyAe7kpY6xEUTAVrQSHC",
  "key1": "N2hEuzDrtY9o9Uim46Zddzyb9ABZvL7gBjEkLZrma9M7cqmYmGia9mmNL7nzZyAd7xS6XQ8UxH1GBSeCu9HsKAT",
  "key2": "5p9Xgcxq3QXyFT5RuRpWamMm7ZWAQGGF3n8CnpSoef7PFQBcaFQg6kCZixBYiTXuWArvZ1evuPtKmmnQhop9bLqK",
  "key3": "4yAM8aNT7Mb8c2iXEHgpMAXjHHjzekKWozQA2Do2euBG7BhDRyAHqhvb82Q7zSYqsppdqypfz74YebQLDKFCSrsU",
  "key4": "2aootXPfE9neeBMLKuHXD44DQ7zxz4YdpqWcgyV4y4FzRppHUecCbMoyzBhuPTdDX6WSrAhpstHS2jN5VvDHwBdc",
  "key5": "w1jyNgwPHRWo4jwcgbRwTMx4u84yxmzDGCGUd1f5fmeswq75uXV9EEQni1mNsTYGyQQLJ9GDahdwHjgzcDej5i2",
  "key6": "31Hza3kXVQ9RJhrKW96c6MXU76PBVy428Yh71oByPktTUgboMf6bBkW2y6D493425Yut7invJxoNUxxnBD8vKyTG",
  "key7": "4g1LwcTJafASZb426pqhHTkz7GrV1e5t527ahtg35yJDfAwDniLtZu2ijUhXPJyJZiXPrmgycZ1MBQghH5XHDYf",
  "key8": "2mvjaSxaxoQfVtTv13mzXj5zRNEhxcm5K9C8xYEprW6AgUkbsbVosemTQ7EYvL6ybGvU6YRFZxZZpEC6yjzLkfH1",
  "key9": "2f69ePqSbU1vonev8HtEHqB9Bp67tJx8AKKgwagCWYpX2KGzQFU6NUgcUqmJVzqHp44aJPDG4rbch4qLtK9cGMhZ",
  "key10": "qJE7rtEYPNjUke39PTHPsu8zeE6S173xRXhknnFoz262pcC1hT1AYyQVB4zGH8WJtjhyTAFad4nio6fFDoBun3F",
  "key11": "2FczhBZC7drLB5rU38BENNwiJi1Wsc7aoSUgz5cHrGxUabaX25kEZQeEv4yytpk4xMoHN5j28AEwpqaUrFfAZ4NJ",
  "key12": "co8MPtoiGzuehvk8vpiV3K4aWfkhoWvUaE2n9zFotEogPiyeSVpvrVpRLxSqkc8Mg7BV9bW5hgFTRHNNvFX3aqp",
  "key13": "2wcCGamqiNrx6s4W2btqdcYv41hkbxWEioDbtCwyoPaQog7ZWpBNM74rePd4WmTk439dAmffbVSonhiNZ5Cyr2CY",
  "key14": "3bLgCkeuaqgzZjwwyqDqpiAqj8jTgeGKbsX8mtaytsNguaKNKmMTFpTXN2ToN1tT3LXxHMFoQWhLcCmpQXCEW9dM",
  "key15": "5VXMCSLoSkjbSankHmPZer3sUcNjeMrN93Km7B2WU7CMQLjjAhdZLN9UkFphnWjhMZryMyUiHvQ7hpqdJb9SfNtF",
  "key16": "3SK8qPEx4KtQP6z6r8Yim4WyHiTxtWmf2Dpmv6cc3poc8vdbDEBkPihnV11x2YSqjdpzXDUVmZRPV9BJCHYr46Br",
  "key17": "mGEfceXGk7XJJNiVDnqaRktAvHMPW4bssVCinx53q49vidZgkWuEsbH48ER7sDRWfzz2QFt5AiWxTDtauDnaZcL",
  "key18": "3mE1XQCRog7CseDs6eF5DcQDnFbRDnhycPjVqckuTATR1fnQbWLhPeJesqXk3P6xX3vgHkWFvc6qUGu7XqVJAzpe",
  "key19": "Uejsg3zQHGxBgZ5gYtRVTV5W6xZX4C9ssKZQSeyiNicU2qEDAYozrWGzrcnzASW3RjgpTnitQnpSGTypkEHeDWh",
  "key20": "5MsxoZw7QXmrV3T22GYuWb9Q6D1rYNViRHiNUUX8pJ6gjpHoGAsrntbiPxWdSuHBQPu2bfXg7uhgDtHyY6Wt9gjZ",
  "key21": "5d5GBjcSdJBB7TRjqi1s5mdyUU3brqCpfbcXVEPTPrjvhreCRPMbqXCHSDeiwGNerXbGBtdUBxopVEiqKgRvPCrc",
  "key22": "2Dgow4Brry5p4tsQ9S3zJrN7TQRsoYfyxo1SZAeMVoQM4DxtPg2f1RomMNbASWnmnV8sY4hmVbXpgyrkVpDKvvHR",
  "key23": "2QVWwouNJwF9eURcEHS9F6aZSo4wp7Cpbep1wcRULZbVtUvzotsb3uFqdN2L1ThTQ2e8K4SmLqf7go1w57iK53Ln",
  "key24": "iUtR8LrrFt4z2sByh45r755Kt2DKkLmQs8YnUqycLhRKcBagoCqL4VVCx1fscvVzxpmUFSrAWL7iWaUQXtAWVDF",
  "key25": "41rY4vRdF8fZdA45ZfByvzuFZX3WSZW1Vjx4VqDiDWqrLupDDc4huR7ZVqmJZLyfXtfWgw5FF6ahpmUnybrEuign",
  "key26": "48mvnxZ7wDvcZywu55PKQctrLjKgzdAyVjF1cZ7MZTroGh6mjWcKzSMpLARUiqLQezetZhNceDFDeQWvMbGkZaYS",
  "key27": "ha9AadwHEXJFu3NeZwNLHMFEUa4GLjh9kujFBp21DzTXZcYfRgZmoG3jYAHCbsDc2Fkk137kZC6Zqm9yBPRUdhz",
  "key28": "2aWPHkMsWt39HtJhRBfFAjbXcDNiGVcW6f7nfUHC2JrtX6kNLCD9d2aey7asFTymZXsqJ6QAq8xKjvJ4Xuocb4KL",
  "key29": "s8gVUu7XkigiaqxjpgNfsjyVQbGzhU1fQ2u8MHDdeP49JEgLTgMCPySyDA55ZF43KWn1c67fGUpkzj6uBSd3i2Y",
  "key30": "gNUxL238rFUmmHcPZ1S8HpAyMVKb4sHgBGemaCELaZbeJKKPDZSbUriEU7DBmZEyxg8HgyzDq3KVsjeHd6eVBPL",
  "key31": "6481jHXfMs75XdqVC8CqGhuM2aw3Fc2yNGvKSPzzsJYiYT7Xowv4rtmKVfmS2t8Rh4KoQJ1UPRhgUfxMBjbgsgqJ"
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
