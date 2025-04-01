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
    "2sSs36W57KgEbs52sExuEUhvMqX5TUinx7LMy9m9RZkp2vc5YDRd2yzfxy9A4x7362hST3na6RJBoyxk39BrTBQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6njz7wPcQ1A3eUPaXfQzP5ASgD3rNbzy4hui22vSTzyrSAP141Yx8Apsi5tiGPTt9wD77ZFBiXSBa5GbbLhHDw",
  "key1": "2ZSfvyjhB97DiPaGyCYTq6W4JQvyBajXa7rEgYTptrqV4anPmHmaL1rVDaKR4435vq3NijqrFqYqrhwbGiHvDHNb",
  "key2": "4msK5sHKFwmm1oZjkNALw1yL2MsAj6Ngq8FVpTuHoTeADCNNak4RPU8epS5gQhUzgJqHfNHg8d76Z6LDU227pRTG",
  "key3": "29QzYPJMeynbXiZkbe3e6vB4nvY9RazCujzXCsSMaQPEDu5e2KhHXG8kEBui6sqKqZJQFK3VwEwFzUmFyrvhR7yT",
  "key4": "3FuduC49QZPs8YAy4SHfAXrDToWmbuRC22MXW9iTa5AQwnk3GAnj5y4uHvzkkHDTvtaWJ2TkPW8otKi2tXmhyx92",
  "key5": "2wFCKVcYDEequ5i1TnMwaGqS9165DR5e7tQ72hEp7ZstuXxne9tLmYP8jXwaWei1Weo3Ejhbs4U8RDVGgvRSWULK",
  "key6": "4ED1gDPAaKQ6r8YgLoMcYjxfeKjdZBnf8FidcKiBpXVWbptMNTYGGhbhRU9faK2HcyXxSASJa9bshKB5gxPcBSFN",
  "key7": "3JsTtnSd231f5Jpbekq4S6gREJk2c7QgjqttLaanEEE93DvibhMa9TA8j7CoQ7SGiJ7BHSjjGA2GFzem6gfKCbpg",
  "key8": "zAdbKXkqBmthrU8yhMze1jmsvLbvpnGv1V3G9MvbtWhJeH5RdXKU4sA8hBodfaoujt24Jc8u5wHAnNhXbaNxGTx",
  "key9": "k9zDCnhBPmTpyGsYcKFCEGaQ9LmfZyvDqo6Hj7whCgCR6aBpptPcq9GHJTD5HbSxTYVcyXU8G1ezqpedYYMAUY2",
  "key10": "5QT6M8xGepdiQFJkteFjBP9rMuzAJuSMw7KVMvguSXGtAkmB1k5Hs9VZAxwi43TVRhNxD6RGAmrF15hWNC7dVfFc",
  "key11": "pmb68QUEzaEuZj7H9KVkV6zXd4RCVzg5d8SAf3hy7tMkRsb8vsWfKUA3HSTj688WEEjEFhUXCr25HTczFonmYXe",
  "key12": "5TJ3DfgPJ4tr2KKrzNUpUYtfMWT7kisC9xRwxfPtmqs7e5CkBrsQp8aFDaeS887S2Xh6d3Ak9eVPY5n3sW3TE1Hp",
  "key13": "5vFW5XQV5hKtRfR8xwE69Ruow4sL8mmcuTzDuiZfXocquzDKHexX1XW1WzqdKeyoYC8k1A2qVqSMecBDh8gCoosL",
  "key14": "4bnxmKtWYS49jtYL5J2JSJSo9V7Egv9nFCecEgwnxpnA48HaM5f9CiLXTPScrjTSusFZBLq5kbAXjkC9q1fLu7CK",
  "key15": "4EHMGPBpGbkfkTzJYZNUVUqXhd9opUcKJ2etrQbSvAuNUrvvMM4FbqMiZCdsxM6WXkqsfrkyDa7C5Q8M5m7msTp6",
  "key16": "268uyaSPXvL8BJSss9sv9fwy1pDA7gRoQZAsvev3gtar7VbFvFEKgEVra1hQGEbwrcBhe83T5vw448165SRXiTjB",
  "key17": "2USdbbRLo5E6UCeKu6poYjsWKUDLt5S9BedxqkUrobo6EhTvKMgGJDfsLMLEDDrLKZ3KHHtK6ERsPZKLsCwS8W25",
  "key18": "3cEvbdso7kLHbvHDwAtUPf4knE5GpHvUY8nuPKfJV8N8pAVyvDKq2KEy3Hzctkj7gc5AFd9yC41hX5vRLbybiQpC",
  "key19": "3MwgnYcSHSSLxbpAxCNNkjtvu36syWoN7edm5wJqaJYCota2bR2mgxqnV3RmsymcuSiQ9K4KAXWocUkEk9aLdunb",
  "key20": "2K4UjBLMhXFMusKSYhu9gxZWYr8Wm83Vum3JwN2VFugihRvRYkajdWBpyTwjHxYE1J5deoz49u7tK3GcgyYfckSh",
  "key21": "3oBVgtSrVH783EEhp8HA6sPTZZGo5gokiiK9h3CGmUmn3VerDeaz7G2g6GfvQT3ukcMGmPYT53mjCjyEA5PM3urG",
  "key22": "4vr8F7dSQVNg4RGC2F6LFmuBFwsjHssJe3b8WAYVP1ddrSb7FFY7dc1FznAnzJERy7cbR4p36ZKNBtZ9eJYyS3TT",
  "key23": "5Aid7GHeAYY8JES4nRuyVHRTrQTR7aDCqfDKen74aEDQjGTeq8pLY3MC1X1Q193d4hrZ5fs5RPPGeUZ7xKcSGpkQ",
  "key24": "2kxmzuxyttFBtVK2KsoC8p6tRdUVtDTwnB3ypzCzeLsnPQsKuxCqrecZ3vmS7XyWyVGBdqRo3DGGsaugGFkDhkGG",
  "key25": "4HNj6SbNugjWsaQA6DTaCpUWyRTs393YZ9rQGDtbrQutfBJHKjLPNycUD7ErFWo8FX3CoYuJgUcXngsJEnc8jKoU",
  "key26": "5LbrraiBU6woboFZCsBGwdJMDQGFAkXhPm3SU2EtTtTL3i7ns55gjC8wKWg4Ra8fxoGGDTjc9zHM1jRETrfrikVY"
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
