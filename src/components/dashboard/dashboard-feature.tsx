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
    "5SKHi33j4Xn1niCgNJXubXLY63g47Wz9Pgsf8ftQ3DdMrHgsFH6YnwHVBiMGZuqcf8cx4qw96Ag2JG5JRKmesYac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMUPzEf3xPB57qbicq5LC2Ayad67vTV9dnhBq1XJULpqk7UtH1tCF1P8HiR6J3bnj3qL2KuUxZvGJrzqdZyRuET",
  "key1": "5c53Y3bMofcHCcjxA3kqMK5i1uJcCSsmNmNbJWkxrkiHCFzySEpKVmVxJHgkWCr9j2umqe1mQBtxuvbDDV3ZsJA2",
  "key2": "3GVniyUE3YdmYrpajX5D9ud7AYSPkSy2z73qpsAeEKkQixJXNj2g7rbbf7V9FZ4pfT1Tu14kEYLY8tufbeCk52nw",
  "key3": "Gs4gk1rj5Hhb6rMLGJH4xxpcSmTeAGtt1cWxyRHpGKgPkfGAKZKRCwiN1DGPReJ53a1EzPZ6cZHugF2VgbDweiG",
  "key4": "5NkA6bBGgBqxr77c9JvvTcj6R6WeHXW7U7EWdRKxiss921kNjmj1XujNyzJeL5SfY6ctutCD4oweNR47Nwc1mdRr",
  "key5": "4KqF85tBGp96PEUY8S4agq3cXQ4EJaFLdkp7qcsWu4sNr5y6vCTqFRmZdY4o1XTbPZRpLCFZKsxwAsDLgYay6wog",
  "key6": "ZLPEW4D2QQgZVFPS8KpevtS2BVo8fc4w2CAkcQAy7fqDiYXSimDEc9AjfXokuvBRgGr3HTvLSEwkbPyprsE2tkY",
  "key7": "4GxbtsRJ3QouqogYUWJ2Gc7W2Xi7RroeoJ2xF3rtRfbfMc7LqYzcNPWYpxetz8F9kLBkhK5zP6RHR6q5pCiSBR7e",
  "key8": "3YfLm6nwNr8wcNjSaWkB1fAGEGy64fGys2JLhU4nUPjzUxUfeYrimKv1b3vhburHcc39V8Td6rEMHsV9NYHKJGjC",
  "key9": "2EZLYw688n7CRuWgqPmHkgpTocGzg9uuUJ1mfohiC9M57vQQ4wMMsYFWeowdJ6VEdp6qmCipK6FBcrFPyr3Sy2zC",
  "key10": "4HizvJkPhy7q3gYrLdW9datmi5ogLaY5Hh9J7dqqczfvHdqCsMqakuofMGiEHyMY9VCNXmfckDxYNa4NGbZrqCyY",
  "key11": "29NLePUmLZ3TtQZEikpraxKe1naHNnMFb3xZgEAnzi2SFuBcGxVEyhLbiUH5AQ3xhPBFna9Kaip8ZAAh9oD1BL1g",
  "key12": "5aRCHCEcVf5DxhYXYydM64x9d348YDXFPAMPyoXPisj1vS2Yj9naXXgY2u5dMAEV7r7yoG9zk36aR1Kx4Zobxr6f",
  "key13": "4yAxjpwxvDfeMeurrJjxVS7Mod6AeVuq26JZ3berrTqhiZ4K87qExwFRbMina4qCMBtAiTXiyiZnt6CvkRQZ7bwi",
  "key14": "32QF89d5n7qLJagpfiG1re4GWxfmnnNrrSX78Zo3hNLEbAYxsVWhJ8e2QLNw2fKRiudJqwXsMeZbmV5yTb1eUoNq",
  "key15": "3yw8mKWZdsyeCbGdi1xz6E4KabtaWZptrn5gmiB8YHjMwEN9P7M5x4Et2aTkfP3Bkh77pHfXopbYmQeawvvvosko",
  "key16": "5n8iAAJesmnuzrxCv9rBe8pwpXCneU8ibgqXk7pRfvfZyVTk8J5w5Buv6JRyutwpDPSAna2Pzkm7buhu6bxTRjHE",
  "key17": "3vbSpAJwsqaxAPxAAENoMYxRTH748Ta15ZCDCk3mFDmCuTbRA7qo9kwo7iw6Y9MCqueVwvmzc6TiUtG7LgvuxJR5",
  "key18": "NQW6PTbwEdXpvHzktRRa69tQxf3eXwxGfkDDS1nJ2JP2prVWWG5fopfnFLgbAbEHy42BrcfQsGrHRKYe19HC7Wd",
  "key19": "4RQu3fxqm5j32tEpgAgU6qYSA75qB4Lczvr9DhvXYN7oeoJYe3cjgVLqkdy4JA9hJCconLBVEkhXqp4eYrooCT5A",
  "key20": "38Yc7s7t2jJnzRuYxE7zhSX16kaKb5VG5TnTxFwntaEPbQYZ7iP7mujMcucVmManWMtP9VShaXJZKjSoYekev8hu",
  "key21": "5uG41onZ9KczkTwhZYdwxhtGxSHmY3xcmbnmYGJuQ3PsTk5tSArNX4yy9739DdjrfcLoPLRU4PmcZtisKZcJRuu2",
  "key22": "3rK4dQQTTbqeBHrawZs5LqmKFiv7jAsQjioHmCux5T9kuyV4DW8rFRpwCPqXsiGaUb1mv5mMkwYP4rBgE4ZFKhMt",
  "key23": "3Da4p4nxnKcuQ5WHGU4oMVtWD4kd7vEwACRkMYjRF75vWsN6sFhZYvQwBGk9FfzDevg7SFG5xNDbLJMEgYj1eWgk",
  "key24": "5sFvQ1UdMCB6msA2iz3WYyvopVCTmJdY8QF9TvzKUDsTmTkvkxktR7ATYHi2gEWzfqHcsPYuVy9rgr4qnefAfaAf",
  "key25": "3xyxZECzDY3bidQrBy16aYVD4zFGAL84QVUjPVXcgTScNc1L7PVbuRAcFLA29XGrzSwoxowTARmtytqfVS4fVu8J",
  "key26": "fD6s58vrhxHXhjVatzrS1uJxwFFHpBC4G8FHmEnChr8GQUo5RfcTgd3yysFt2h6Au8kMfwoTracvWstF8yYZbok",
  "key27": "2zJ8X879qRTeJgchcvx42ATtaBJ9XTfodbxhjWEL7V8QXPFk57K2XfezUZ3e5X3jqRYRvLG4r6oyXdueNhnnFgik",
  "key28": "3gZ253w4xcA6aWXDquWK7dQy8YHW7JQjZoJgkbWFTJaA52fsACqSXgXKgfMtf7Gfm23SRdGZQqi23k1oQ6dEoWfx",
  "key29": "3KTHYw6CTGDJuLuuUwZ5XooEEfJCVt9qtfhCxhPXWy85Mfqzg56j53BWaigrLq3Gn9TUX7stp9pBnPxZ9tCh7SpG"
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
