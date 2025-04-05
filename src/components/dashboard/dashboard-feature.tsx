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
    "4tAtjX9FA1zQyZQF2m78wXF2bWEstpSBw6kgcQUyA2vyK5ycK1DouYpVZw9BDb4upB7XSjyCCCQnzrRMZQHdRRMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmRfkBR36qx68hsf7bwjndqsTd7t3PdQRvdY1GHPQCmZE1L3y3yGfuZ1Y7ePxNgsDhqeEZpYNJGDJeNaPoi7Ja7",
  "key1": "28g5PQ8N38BREyBUM2fJkrBWXjtJzQdm3kLbALvGH3WmRhKZu2bAkCEzUY6LxKZ9j9tARjtRBNDyHtdC2frsqoZ2",
  "key2": "353JgJh3eyEZKzKbcq3R2gCLbPFZfFD67ZtJzXknLXLaDNURuCqFTH2TgtW3BSdeXhtqzGa36QuNcMZBQp4Fw2mG",
  "key3": "3uyNJpPX3Ut6W3aNYuqQF9oVuCVEPWmPv7aoni9eRp8uyCKCATYtFZrZunQNfNUvMdRJUC4zsaDPvf2ZNvHYPMby",
  "key4": "3T5ku7WVktFCs3wq1AK9QspwBhTesGkt7ypgzn8f2esPqM4pu9z1fvs6L8mw942Gq4rathFmAxu3mVckVQyoq27b",
  "key5": "5YpUN4N3u4cpmfA7JhjexFoAJ9sFo1NEnn7qgg2Uj2PG9armaQbve2XrHKuf3zvqu8hRnM7ukSTvFcL22ceQ92fS",
  "key6": "216pnure8xNBzYR9qoZMhr1ETYsNk5BgTF1LafHXoEA9xab8EZ9ctNTzWPzrN2UtAmgGLHCopmTYhzcuSLJKJMAW",
  "key7": "WJjXVRGZe72S4Z5d7M3ShkQjtpaQnxp6azJRMKytmu7LFJaJY1ggKk1gwrqSYLTBbCb3KV1GGWcKF51Aos59Fi5",
  "key8": "5Kx9sv1LzSaRUnC1itkZL7GrjYQtNkoGYkp3AEeFnhNSQG1xDQEag5J4bJCAMjdp2p8TvfLYHDnrmznPK4qU6JuF",
  "key9": "2dVzoEgKoub2npqN9bBZ4TzLce9TJKESwobMMAn3zjeKMNjiqKFDUaZRfzzMyhT8u1szVTKtuSYABZDDmBkf6JRE",
  "key10": "2uxD9ntQhEvLmKbTp1kFqT6nnoXSdjLhshL1qvMXTH8vBPLHJPJmDkby6SWztpS2kFemaCXGa38BD3gbRmqxb8bK",
  "key11": "54XHg5MF53tXAz45gCDNGXVmkb8nNAD2x1qaH7q8D5evnbiBfmdTidhztPcvg7ZBXpSkaDF8boeZ5StUR33KVMhe",
  "key12": "2RKRRAtDWW8TQ4tx4FCURg28bAcM9rHVxPzTzr2JLpz3nVhcKJpEuC5s2H6S7h4Wet9wzigMc1SSDzVEd42VjgAx",
  "key13": "4qcWpNHLPWKPbS4qCUTQnFuSHbWps9oK7FNGhKKqGPLG7LJ9k5detg2Wh4dWxC7yse1KBhw9xxJ2tRgFj5W8wRp8",
  "key14": "5AhtLkej8LPacFYUweQNBnaNoAjAxLbTYiEGogYune1LFawdBbWDUnTiUKYhSfcD9LUTVSFwqcitQLveXbbhtnye",
  "key15": "bYPhwLz5SidGe2g7xpaWPtvQeqTPxzCX8t6tEJnTBvCQsHMheDjRqifbcGTmivg9nRZTVEFUXTD584wHfcfS2x9",
  "key16": "BNTdNLYqUjXBZ17r2zyMqpCD1FdQQ9nWZhxRtHntDw3BDQ2cmYYgt1VpmHaU1ArHVpw7Af561xqkEfhTAfRbZPK",
  "key17": "48FYmrhW5nkT5j4QbuDCyQQnqEPBJmMnHR7aKMeTj3BfMFYGA5CdfDFP5WTWSEtj8PQvhoeJSdxeaHyohm4DK9ti",
  "key18": "qkaQXKJZMtW7Yt7CXRFYQ2wNEderMFt1FK6hDR6xr1p6NqiVCQgyLirUeRdoBMXjFLiwHLZctdchtXBV8NPyw3X",
  "key19": "2uT6EpVbvXoA6QdFo8WZ8xZcTw5FQJR5Fon6ZzeZDduE9bKgFndYxuJ81j8aTdG6QfNrkCrsiMRiryLrZw26Z1Qf",
  "key20": "E56opcv6qBF1r5Di1i79YYm2J7rdkozLzaUTZFwtw1KhXf3vXzSQF9NED2uxxpVkN5P2MKkjX9LSfNEA2DiKcHP",
  "key21": "2eh8dyxufwTJDbuRSj4DBWFrinNXkK6DCJmeGCzP627SYQuF27ygQZMJUJFmYGybKkqm1ucSdFWJandTgF7tazPg",
  "key22": "5px5vt6rMaPThwy45ky9zFk4tCcuLsSA9yowxznkPak2EdGBR7BX6NoUPrgbz6esT2jkLkgpkCvwNYL3WCtkmcPi",
  "key23": "44JHMN5SpZ6B3cpov2jhPCru1Fd62Trcw8wrYpKthsh11YETD5TqLeL2jEgLbgD7tLXhC9eTu71CDbrvMrtncK5b",
  "key24": "585V2XLXrCEmyD4cRRmkjPiLomxRjsCFBSV7nMErWgm4ZXyMSMc1nZCcsxFq92HWKQmG7SmoTCgaHeZxKd1Dsixf",
  "key25": "2VHri74TNkoBhKVLhyT8JcKQAgm7iGUfdu3J4XbaMfhujpGd2XBhif8eiAWesiGZPdss69QwuLRbzNeLSVYc6bjW",
  "key26": "5U1QVZG9MtteYkSieXxC8qwYH6kin8FANCMf7ybJz4A1MKaQLQiUzA9z3duVA99AXuW6WDddxRHvJMHu3895mY85",
  "key27": "3H9fz3C9b6xMq6NNuS8RscrnVbX16iZBoJgMrgqrEaPm8Lycc22nVWrNDMz9nqLQYcp9TxXAJABYrUjQ4gFEqm2K",
  "key28": "2mnLxgZXPpPXcWcmTpTowMkZ75DbH2w19wV2WKwPKgQsrFPGimi3FpejvVPyvBv6TvsXhwquAUtd9wn7Q15A8QyS",
  "key29": "3kjT76bVSo9p1dKCEgxvzyvrGtb9LAH423gMUdkMbF9hAx65LLuJSrhch3uPmE6gmxLvb1if7S2ogCjXWTAsh1K8",
  "key30": "q5cYWAxBz9ZyG9JgP26aZqFgzUsQrvZnypYrhW8KBEYo9SoKf4q8QfcXWeKruoBzB8LnDzHgZh7VLXrhbUrjNKy",
  "key31": "5kRPaV7wTSMfdNyFg4SedjBZKi2h7Q5ZgefNUDFnaWAgNH1wcL1xw2nKGC2UZyTCQ7q8sJxHYTHV9WqEtXVrmCMQ",
  "key32": "3pFqdBLQKWABNNUmaUMDbYc1KiM6wby14n2JfPNT62d2Q37NQ7TordfUMk1woohg6Y8vnEADKfykb183v1q2JDyc",
  "key33": "rkhjzvGE6iWRQdoAf6dF58FbKc7Btk6TdQo4svBK67u2gDh6V7kr2vop8UoUz6bUxbtDUoyVnesoR1d4QRMoGS6",
  "key34": "2cBRbjPc2WjXgud37XBw2BcuvAtwJQBPptJrTAPQHA6Ebz4T9YjJnNorXwhyhanKahcrT9X49cfCLWbaybfM5noK",
  "key35": "3Ppfi81uojeMzaYaQJke2LrcrnogjDAHb8U2M15JHByGitHM7yLWsnKNE9VVayohp5DhxfcuKFQEsmpXeLmMBtWf",
  "key36": "K5BuLVXN8L4GuiFzEr63EPtQBadLf96pP4TWBNiYMqVNfG5fKZ1mehAPmToYhWUoB7gf2nMQoA8VnqdUdzn5Vbj",
  "key37": "3GJn3zDd7E63bHkLUfQZ8gCHRcbUgQXK2sPs3gujg9xT5tVbMePDRBgJx6dbgAURtZ9gmErF92rGjPL4sZvVkAYL"
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
