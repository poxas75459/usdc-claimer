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
    "Pr978dUuxHTpesFCKp2rabr8iPXV9P1EcUPoppozqACBh2qEfvN78dzbGJ4eDM5QXHMjEpCNdXpjSdveKVxCWnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VWmSSi2ty85RmdzvnB7UyM3G72VfoF7fZx5bxJBTDRbdHeXbDM76q1qUj9qvjaPeiLyzRpyLsKeWA9sN4kmnZdC",
  "key1": "5MzXJbr6LzNCcTcrNrb2NeuzS8ei4kPx4G7tnnkAe8D7MGVC176feMkzBzdYTaLA1S6qyKyNiRs3NEFbxfRsHeGG",
  "key2": "3zPZXB2Xsst7g4zjLKSPAyBPeXHb6JzGWWwi13ko53rY7wkxtRwDKAjqn2aqoASn2ZQ9aBPEH5wpkDEaNbXoFxMd",
  "key3": "3uoPEXVyKPJGTbLnLiuzsazEGgc43cFuX9orHkVBEK44nn7p9qRB1hP4DSbPXmKqXnJG9E4eZZqJTa9dgP3Jrb3V",
  "key4": "4NRk9b3tfETP3fa4Kkh8PXoQNzTjK7EGtZzXkF3bpdNjMnUqBYT2NK5aMyfmxJavtSAxcbCCzyiwYAeQgGxKLB1B",
  "key5": "4dQVozDqTckt1sVNLvGdvWwD556L7GSR8f1D8XP9saPUY9G4jvDa8QjzTwMhN6fp4JXRtvvZRYn4HtSCnx79U2Ds",
  "key6": "2RSNeuCYw3TUbqcjeqMKKSUxvNnUXi71sEwMg4wjpiiYR9H8nrLmqprMnZ6aTZuwFCeNC15vAcvmuzhPQoBUJafk",
  "key7": "2QaokHbTzfz5rPV4V25dxoLpupFaxtiYdytKWBt5nucSV2K3qUP7iwdRZi5o6S2C8xJhJusiz7aW7or3AH8NMdT",
  "key8": "2DdKq8trr17hdTrETEQnsMyRX57t3RjdekBoaGrdQkX46FQrks2qnMVKjzN6yBzTD5HPuBP3gdGEEWKggb1qNK26",
  "key9": "4P2DvBWexxnkE1JBDZRjEo5asLCrxfLy37pc77bUSjcZ1eQqrJKFW7AdVBX7uFUsmdR4dyTu9322aaREopMNRe5N",
  "key10": "jZnEbnyBrjn7K8nU1HumxYbGsP7P1HsdYyjW3oQYygHQh93g4npzgZ3biJBJRekjLC57yfFmsWVek8yKiYWfEki",
  "key11": "5XPMK7xzPehmRs3cFY4jtbrh9WTJkrrmUUdRcVfd6c3vWSmQd9YRJgHqTWJSpyqqTkHoaYsV2fZ8H2tjrcgn86PN",
  "key12": "5bMgaDB5GTMSPVSnHniFAF4Ku9649T5hntCNM7PCTYzWDYmizxYJQcmtpADKXVPJ5YS2tRKUTJEUs4m3Wo5mNyM4",
  "key13": "4gNrSM6Vjy3umuWD4ppD6wGPTB73NvLUYQyxy3dGZzTRhkwVcWkaqgDQxAee8E1Jj3UPdQfEi78EwcowYfssGpPb",
  "key14": "26HuLkUYbmPfBj1A2WrDxuDxy4dmnbPts8opfLzdJYX4TJ9TYx9oi7RSjxJjXgKKBAW8DB9r2JogTLfqthL2W1AJ",
  "key15": "56LKT9BRDX1NT9KbyL5wWejjvWi4nnVKzqbDxMFc5qNmr8kzL6USWKPD3JGokCvRD6Z1j6gkskKhwLUC7Swa8NTu",
  "key16": "5gLypnCTxBx8WPzfdWZNswcekvrUKSd3W261asYYS5KFPaJCMk2WJZBgbLAjUPXd4o6Bw8mh1jKRQyXWNww3Wexn",
  "key17": "2ELRw6RMKYjJGjNG8dAknSF3AgvMbq2zAmHcRHxHrEXLkHoH2vyNLNq3yzce9i9qRn6m7gNxw8TxMaYgEipmaLgD",
  "key18": "3DtmHUjy3nhUV6K9LWgdvKWufg1W6Ngop8zC3QEyEfJhyknv2Hq2Lma3EH2DFktuNPxXc3VhoSXQwk4QTejmd1TM",
  "key19": "4uy2kviFsa9833j8SF3R8aJCBFmDFpvb6MAGUAcpCXTSjxkpcpYwLUfb1Dux1XESh7vwkK3WWoBY4zQwaAUt4Gpp",
  "key20": "2xy7oUSQqcW61c7QkporhxUqB9bLJ1PvdXVv9NLZMP4AEX61W8a1AdyxKqjpfAnD1tza6CN3FUdCg5VqkBSVN4Nk",
  "key21": "5rGKB6YAMJUJ1fKafGUe1MDZbZm1jfU4r8iYPipQFZeuukH8FjGzJy7DBb7gQjG8itJvvWg1oXaark73653hhQk1",
  "key22": "3WiXLRZDduv4rsBg1nrEqK2HJKEqWLh5Xivs12JaGkTqsN7o6Qk2T5TAmWm42G7bsE3ZZQju7ii4yTx4Bajngm6U",
  "key23": "4Z9kVN8cmyjXJMGXt8huYKNxnaftKiWPWzgoDgarbccPYykJH884jrsCpG7qJj5QSxqdnr8VNYe8Fex9yg6Lx9Az",
  "key24": "4zgfscgaWTuxzRrK3w2GiXJMw817BiJA3LKkZzMJbChJWGcQEMwB1mHnCE1CZZMKot3aiqmcZjS2uujKqeHZwNzs",
  "key25": "pkUGZLKhXafT8UwVDUpuvVWLuhEUwCcM27i4p2fqiNb8cMuxd322Zrn149nFh6ge4Jo3jKfa3bZfPjgNKg8i5cZ",
  "key26": "4MnG79EmM661PRxjP4N4s4uM9LE4cr2zJsJotTeGoogWc61wG5sGXVexDjjaRvr8invtJ6YWkYEnbXYYeLJqscMC",
  "key27": "3W6Fc1P8XGaatFvgoTin4RXubN1jcR5rLH9bvYEyRvX1AoK6mEvGVsLwsMqrB6Efi5QpWyRdmZBYetwjjTHvayfa",
  "key28": "4xNxuCq7x1NNqeX4MiXZx87AiMgz3vtWDtYvuq2dWt4u5SZ9uqNW2WEUASiHGpwecrWiVr3cTCQCtnnKXDNkW1PA",
  "key29": "51f8BJSwZMX6ard2UcPxrvBTGu9msC5eJS7hrYvqDnPGfYMbkLAgrNtckBoZN7QRpTCrFkf3v5GZpJ6WyArZg2so",
  "key30": "3rjWkEriSNtKzgbnkES7JtKFrum6XfTkp4rykvq471Eed17Bhw8YDeWnaiHrZ7EvU2FsRQ2DHswZrAsLWAAJThog",
  "key31": "1qv1ABU43gUuVqxySW4NQMLXrU1dLeS6HbKiPqGTvuUPkB6s95xWicR9t3kMVaFg1yUGBDmMN3TsxdhstW84Cdq",
  "key32": "3M6UQkWxe2evgDss9W9r3gSSHhr3PJLNEEBkYb7mSjQsf5sauxBSHjiPCAh3jn9wRWyHFJ7WtyWmV6KDQ4CQhDpz",
  "key33": "5KEKFqoJUVoMv86u365nodiHsqxYeMfG7r1iH7CY2p39jaJRqZRAumF1tVWmiKYD1vtvrF2GLvuWDP3paNoUQg6A",
  "key34": "4gj7zaioMSDuSJ5YgnFmXQL1TGZSYiBma5gE3kHYcTsEqMF7Xu3TM8UNWZENQ7YwpAwd6mmWSgKWr4KNYdkMJaPj",
  "key35": "52uWzxuaU2hPdMopFveXUXdPZ5eVjHwwq4SXE6uKybTKwZquqXgrWLgoAZbWdwyadM53wyPRihW3MvdkPSDzAAGR"
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
