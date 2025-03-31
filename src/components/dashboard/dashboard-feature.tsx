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
    "3kH1VZH7vQfD4FKZUw1wqX8M7Xwr63xZbvontzFvyriT2LaprMwX2GZA8Es3yiBZpDTjJuJNYRUWnV8C4FuCgL1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aF3RsWHEjKJCBpXsqZCCL8AufniXmwzzgKeFeUrzwDp9i6padszjtBFxFzQBSkot2aSBuq1GZBwvKWzEBbRWvWr",
  "key1": "2niup96TJnzqBrWsxTpEN8p5rG5ubMgpv5iupfCLLXTCwG6pWqn1WFomFCTDrzNhHMVK9tgtkC85W4epar3fPFWa",
  "key2": "5uec2CgyDB4GFfVY6VNmUzkEb5TTYQQt1qL3wScGxUGbvmeB5yuRgEUC2Fvk27i7EJ1kskHuFHGbE5ETgUkneyNR",
  "key3": "2Qyt9cLESPW5f2r3fZttzWsMYZ6j676B9UVwNk2drUAp3pYyvRsRQcRo4rppzdHqwZAauZ13T9e9Z7BhmZAUzns1",
  "key4": "nVKv7C3Qq9VT66RcKsVJttHyTBYtVVcK2FUaPp2VAfqx3YDvTzgWMuqaCT7EH66dWHvgmGo1dzVJDYv2yGaC6yu",
  "key5": "5XYbD6LuDFafrqShLrj1xN1VN9XDGcTUG57USiAUXebaTv6UJjjKGHzZPevUeTDZugPVeKZHWe6tCjLaiH8g5QZK",
  "key6": "5Y3Dk49CyrgE3CJUBpozT4GxzMkfS5YQjpCRaHqUaYMXECmwMTjt4rbDkoFZBwkjCUXAjg2ZBWfb6dp7YsB6qH9a",
  "key7": "zo9gZHv6stebx159BhdmK9ANmfReXfHZdDMdMgCeHxeziW4Dx5H5LL978KvmHuhQb3aHow733thuv56poGXK2Qj",
  "key8": "5eC24iP29sUZ6Gitd8mfjEedEPtLKw1Fek65UgqaxX6XU3yHKM8aRTxDirBeX26Q5uQhvzveZYzazpLb95ipYVF8",
  "key9": "2eoNhDMFuGSR8NkM5QtJX7yRsvifLucAVNjYDkMnN8CpbubxWv8gCkURmawDL87QiDHTFHU5SVoz6KQfNxJhSxF",
  "key10": "3F7gT313JPGWUwp95fPS1kvoyUTgfvwBP3inWCEBjzV1Dv9KuzhPxQ4oxg1He33bpvzexQQMZGuKCvD5yZx5hqG2",
  "key11": "2bb2Ye61AbM7pvZHkYUXFiiAZxrA5FqqYFJDV8uh9aCHYoSBydQF1wi2AjzzDL8gKwcBrtTpj2TRCcnWh4Bpwdp1",
  "key12": "61kvyctCQ39SFVzCXtFGK9PZHNPhBnay55FQvGSeNjygy3Td45AhY61q3T9tkPX7EnR7wHYjXyC5NbP2GZXf3WGM",
  "key13": "5WHqEmu9kLwYmX5JkkLRN1hoY2yf942pYr1ruRrLmmB2NjwuthS3dw9onrD9jWNJZaeFTWEraES3MLyfreJvKbfY",
  "key14": "3YK5Z9SSveXXT4qqkVaSYkrQiKUcPqUuRA1wEeCpeZBMnb5PKQBT2u1B7Gyq99ZNKtbXdAyFQgUnSfEhyShbmLv8",
  "key15": "Wfi9mQ8ck9kdBWWydzjV4QmWzJo59zXP6uFkP5SHKJrMc5xZB7QXHrCSjrfB6QYgTqzCpXXWVEYHTpDrc4MjFcV",
  "key16": "UZc6tsttdA2Q2V9zRMVo8HYjbVqNrV92rEAckDEybigXh8L16hTuA2743VUTGztVNctaWtPYNdGff9ca9mTiNFA",
  "key17": "55NsSsjbyytSiPQn78zYkD836AMCMdp7EKRrR8RdooerTBDttXDRyhSCojXMJSrPimpNpPQe14TbTwAtajFLrh4B",
  "key18": "21Xx2uCGRT89VQwws3Y9nR9QxcMFMcBENz9M91zqdzLEvfiEYL32v3nPHmHnTkwCQuv4xcvDWR1iojcZ9qcB9rGU",
  "key19": "5TNtp3NmMTRiPxWuBKxrrk2woRGcDxaVUasLUHZrQoAT7as8C5iYUGGvPhFwTwUbdjyoKiZNLmAeqJSMsDCUCYjg",
  "key20": "4JY29nypRGWAeEkSnAgQAyoipcuHgJV9vW2TCR9D8o3T3JTaQoPmk7yAQGKs4WhjWfN3rLn9bityizhA5WBEZoA6",
  "key21": "4ABouT7zqHmYw7Xn8Xwhx78ckTtanFrYNUzUQdbYpUZ9AqES9c1JuoXBmuUXUgw9dvRZiD7PbHGNm7RcFgUkzEG",
  "key22": "2M58T26WZDwD8ztknMDkJGNogBFSkTqR6DzJ3A4V598FiYT8HHRsFhTQjaexyxUMp7fVVbnUDJ45P5YDHkodzX2c",
  "key23": "21WkGMNGpWz1UPVN6ZPR2P7Grg9iacmx9DPyvLPN9geuDraBSxck6rGuWeMnZioS4WA5Wv5hHhXTzdp9mCsbv9V2",
  "key24": "5YrvtqTStaG8S21vtNoMiU95jnUBTGCswqMXpNhR58buJ2G5V5VGCf6tGrrrxwiFunvEPqGyFqruKL8Kp3g5Diav",
  "key25": "62DRQXZn5XgbxnBKwkXa1a1RgM5VdzRjhvBLj6uxRM1dbpn6WyF7HGEoU5cbPfiRCGsQrDSP8XRxkN4o6apkFSpg",
  "key26": "ovmhmEtfoYc67a992EJfcHzUbn4FN2YaBPDUKGxx7BoMU7UBcsg19G8TxV9ppUvnxCpAe9YwYzrH9c9C5dE3uVi",
  "key27": "36r1pbh7h2h6v9zDdADCj1Nprgv8wLnNqc5JTHRG651RroyRbNzxBTbFsvAu36fwgBYgjSC1z5GzxUdBUgLQzhJz"
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
