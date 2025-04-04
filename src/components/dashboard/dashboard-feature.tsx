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
    "26z6CUwYns6puBeiBBgCZoG3uNX159PhM7xRAMLKw4jn4nMDm7f2oijuxLcx8okbrqjJnYKsryvbnzgpPkzwm3kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXqQwGEQA69YK6Lxnq46t3jSyZeg5YoQ7xxwzAVA9ja7YeuMUd1cHYDbWfBmgNgdC4zjF6Rto43P6U1imB2jzuE",
  "key1": "5sM2qqkFJPDsdGzZPM3ubPi5FgXdjBCHQY6YdTwoQjFEUFbJjbdMYZ9C4tbaQLhrr5HwVZWhd9RjGQYKUEvSbBtv",
  "key2": "3WLayGytojG3WckzBT1YoEmhvVfUz9wMT8xwFUr3EsyMHCpKTAqKJpHeTEDxVgU6eqtoocQ6EJpuPPrCqJo5JHqK",
  "key3": "4HbKKSWYkdUX4jXALrpWfUedAVsQrQ6gm9B7CLWVkXDUHWvhLRBfqzoht2f6qjVa7QFnm14J4KbLEuSahHJBM9mQ",
  "key4": "2ZUSFqaXNkKkXwxRph8fkT3gMEGF88ZampwDUxqDFSCMq7BMjihmNLDiHNQrj8Q2WygjR7bJGznHn5EPrJQnP4WS",
  "key5": "3nF54Dhb7qCSpRhxycsHBDx3tY6fgXbBFcPKAaM8jJ5dNaBzmvDeikay2PCjkqH9CEqmkMKNSfhXFiRm4vyAxKyw",
  "key6": "3F9DWYRvfFhqjqsLwaKLNEteuVEqrwjEMEwq64BoatmXBuEUxXKJrCUxtYKos73pjbrj7K7mgQLnPcDq1zCZWgzu",
  "key7": "5zLUuNrBnbjDqo2gDhtmUyLbp2cK9ALbqD7ajLtc9LZa9dk4fk9jnJTsT7voGae84SuakgRKjmWMus6N4m6wDJXQ",
  "key8": "5yyzcy6xKyGuYyR47Y858xba8KzdWDzvuQwvfX1ALkWHUcxBwPNpgqoqKgUryPJ9Vz8jFEfNBSAzA6HMDbD2At2P",
  "key9": "vk7SJEo27JkLgCE9hS9M8CU46TR732hmA6px9jonwmuLJu3TP5pxvdCFfQcfRWzXxHKYoUp1cJMcZ45TdkGfstt",
  "key10": "26K4UTubmsU2bQoYiKsoGXJJnB2q5FiSgTYf4jZB8jN7bY6bbtiaZAbp8HF9giQ25ASk545dB45o1jyKHrycJsRC",
  "key11": "4UzZnRw8p65SpMcQ6T1TSTBsuobFBfJLUahaVTrVZGmNoWJu6Fw8BgyjWLuxsXhs9QhnCZgcyZpGxvH7WeouxVa8",
  "key12": "2sAisBywibuSAns7aW7ySs32PWjQiz5KxmyLQmKpoW9izpCCNw9WA4QcfVLjh8cNBL6dtK5ueDJnoSTgZHGGZEya",
  "key13": "326BzhTymNqZetiAVVDq51aBB2MUJDtBAgNq3Sn2CGVVypYfX9YKLDiPitb8qA8Bb6ay3Amm1Eg2qFZsuXD3sdPd",
  "key14": "4EfnzxVpYJwt1jQGQjvNS7sn74yQASB5w23qipp5Zb4FfyfDUng83BTCmecmkFtHGJXZYwFLuEpTdW4LjCT3AXAg",
  "key15": "3pFpkJ2HDGsfnUN5VmBKnWcTkcCkQkWsdsfjqSRzkJqnGnTt91cj23F9pGBAL2v38PDmEmwn7ugixFdUSDgWSk1A",
  "key16": "5Nos5VcBpWjoLyvAB6MPbDnAJDaSnvV3F9jANVW5Udp23S9SNFpB6r5iRy7BvjLSyFd1nyKzRMaJHxx8JS5BZ4Wn",
  "key17": "2R56ipssh9zjJUNGF9uewq441gDaEs5sjRufzPYznY5jKUnGMc33FsAeMZPv7a5B1tRrtoeydKVEPvQizS7Ctkpw",
  "key18": "3CNvZmzneN5kviQoz9PzysHmWfeki7jgP7kqh3hYkzydjDCQpAuxbVJydHoQhoDwVjvzVXd5WRAgt63X6pj9xNmD",
  "key19": "2c8RwjwrXEtkztkRAdChwZHGh6TJ5WAzoupB9Ai9MaoFPtkjc1RaGJ1bfdeFUfdQ2aaCBjoQ75NZww9UNknssu89",
  "key20": "4AhdnewvgkdyfQtLj6ztNA9LsSVAkJHDNc62s36T3PY82aLUTMrmFAm965esKTMNCeafLx7ADRsyXvzTR3DTNRkT",
  "key21": "JJpJqzkTBWo2jRdjgEkvUX67rJo1sC2EivJfcASDDthyWqWX7d7eyjQcJzfio2cFYNQxe9sBBy44UgBHbxyed4S",
  "key22": "bKmbbXFie65njNgqzTLN421Fw9YBUm86dVEURhFAk77sHKtuX5Cn9Q12F6ySARdnX1nWtqdHJ1jwCb5VnKTQ5pP",
  "key23": "3FFX8iUkktLA2FYmQd53HdEY25QAPsTV882iQnWwG1qhkvKgzPnpBF6DuEnCtksmscq3XTnwFH2wrPTdkxvb815w",
  "key24": "3yGKZqw9zhVDbZJZ7YZRtS3xkQguUayjS3mHZA1j5f9Rkmxv4TKXCqJETnQ9NmpmNFaCLPLsEaeDwUUhzmFtakLz",
  "key25": "GqnWLN65aVuqVmS3RZPucDDXUJ5aoajyqNB6qMT2UZFecVu5oJutSG3toSMPcsAVHFSuke8nrPKQFKx17yKtiWS",
  "key26": "3oxLnzidwuf7J1vLzumzeqxEGkLHkuK78fWpiKxPgjdY4mhC8Eq1ktSJw44ApiGgUZiY4ygLydufGtAfFmTvJvWd",
  "key27": "5VQ1MkqB5iWzK2ZyZgzXMB9JWXjKeucYjqVGkwqhAkeq668kGNkhE5Lum8PNUnyGJheSUorp3cudodWH9modwvCy",
  "key28": "5ytH8rrPydyKecnArAgsDQT74m7ceAdbdRknZJfSWMdxDdpyo4JUSTLV9RDy5wJdN5rungG9t9YTr4tLjMQw39Kv",
  "key29": "5CHb86kgKkoD4VLZQueA9AZSYsYPwHuPHdBFtG14Huj9HhvrerDGAekNH2wrNWKEnzNp4SYwKKBPLkMRMB2VhA3D",
  "key30": "2bBThgsGg5MMds4c8E1LasCNgnEkgsYzw3JXWZC7oafUZz2U4K36iiWHvQ5UgsnvenX9WyFgFJQ2YSPQ6CG3WHBE",
  "key31": "2Ga22EAEk4qEo3jDLH7yJbYUnqvKa5VHPkCRbU318fKxxMpJQAA3zd9T9KXVFe2jnTgEgFJtRm97hjSbi7irymMd",
  "key32": "32ecaWrWB6Lok8ZafejKzfgemxGtHyz1CXVTcVXmCyuBGiwxWdCpzJYpDEtUTfFgSHWzmUBnXfTUeJGzqKYL5XFf"
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
