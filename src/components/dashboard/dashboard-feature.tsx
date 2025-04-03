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
    "4t3vVdJPTpSMhpo5roKcNpywg6q5N3APteZbJ3Sy8CMARRRXYBmrE4FcYoqSnQKA5vLWmHBYgm1WYjkAkXHtG5Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DELGMyCLzEGGhxay3j9kxj5cmF6RLnL3bpTJzFtJM5NvFkB5DmvBBCYXHnSiANBaip9HJw1MgRVbMbrddnfF18p",
  "key1": "3btAEGMqsVPCeeFxkPEWTBD7in3znmUSBtq3FELWGbpPVYTQeizJNCTPPDucziedaHuVRaEPMjbZZC3YqcBw8byg",
  "key2": "3CsEhck8fsS3GvsxhhSxk9c4VXSs1nELcnha8iBcGHqMuoU6baPY2x6z46YqLRAEo1Sp7DsVyq31m5bVhKvHhcZ5",
  "key3": "YLPTSKxVFjwjE4LkmiTXSBqMe868cW2zMUxJVuXc8bwRXMocntRPWpszQmVYGXkCuwGDhhHGPnBuWwUVX8ESFso",
  "key4": "5mhNYiT7SJuYwx3XdqEyxW6CAv71y57uAnzeb2FqFbBX46z5NvZRnNcJ1zm6pvsAo7JXsemWhm4atVJWcjzvHiK4",
  "key5": "G9orWb3zyLqCfhApB18wY69JaYdZFyKbn2MM1pX8T3CDMbYFmYab4WGPrTJ1K8bwTtjxZCBbZQw2eSVj9cj3BBu",
  "key6": "YYkhmGD7MwYmBLZ6Lqu5TyF1cN9sPovhz8uq5CEvSHBgEVAUcuthXQjvTttRDA5g6ixwdtsskSwJYEVicAJ8rWG",
  "key7": "2nmYKT3kicv63YYrHnMDm5cT8Sw1pfc9mpFUiRTfGtJZNZujt5UwNPW5fEwW3CCtR1iMPHsB24ouPCNm5p6yB79E",
  "key8": "2Kbrhn4WdKFnyK5T7EhRdxwdvPTMh2knKqVAnbXf5ix6JEuwkjkBnnayBh2vTzZacawLfiJpCVNnVgyFiNSQvnym",
  "key9": "3A2mKwttR5Su7RV7Q9vkbRRPZLLNCHh7fwsmvrhisUTn4qpsehjK43GeJa2eUFnn9TL3WJMTgdoCybURRgYsCtFE",
  "key10": "3mCXC4jjh4wE3EkL21m8QbptMfZ76Kr6BvhPEBGiuPtRy2tp8pXQF4rqA6qcdQ37hterLDjMiMsgpsMn56SAqD5K",
  "key11": "RCrmozxNjwfoL5wXKprnrZYGzEA4cs7G4tpNUedRUGUAVcEkFdQeKnBE1UK5FuNNoEAwxkv3JCQdLV5szHaMWkq",
  "key12": "5Hf6TjsGzpV6AemuqKtrXVYtpw7bhTWSxpoppuxS6V7KLU2yBNmkCk5vX7Gv5gnQ9F7k1pNyFXFK2XUygp9hjCs",
  "key13": "sGhXjm1jBGXF1BNEy15UWgiQ6MZTRfnUb4XbWvrGeuNW5rHA7QcYtWL3eZSVRmuRgpXDgLkd5EspirfL7eik3JY",
  "key14": "iV2WpL12y9KxAcct2Mqy5gzh6GyTjezywTBPihJabSKKLXUCTVpqiQtKcheeDw1mfeA8ArTM6sYr7AZN2xQtMN7",
  "key15": "4hbo5QxypgqQHXsxhVjNABGnCCyoM5GAjPaoAsyAAnCrKfVJDF7e72DAK3tRtgU28cCEubeDisRWKA3QvcrExzNz",
  "key16": "2akJvPZn5NMcGc2VFAFxM6rQSjDCwd7XnxN3fbdytPJuCYuvbMG84dbeMPvP3Q238JEf9YsKubQWymBwWg2h885k",
  "key17": "3RXkpAv6bXLKGLqdPXksxnKrPUgvrNj9Qo86caQoekGD7MTFS46PBWQfFvKAPwCisuAkNTHaZYuLcQQgGFZsRP51",
  "key18": "5zBjJbP8AiyD1Enk9rdv6BQJS4XqRsTQSEvBkxCQQiNpneZ9974oAwYm4HYRGfpJ4c7CDWvGBR7yRTnKPuDbybP2",
  "key19": "91TpfLFfbcKfR6bTMrMScA8co4Xp226KcPZgX57WHVwxjfZRj8aBLMc1YViNPYKSM1Ma8D3NoPF1B6MUjV3d2sm",
  "key20": "V3udMqQrzBkFZGXm3BcK2qv3PLPZidTE8CC4kBNPtate8SeAWVJ4yaUBxvo9XQSywk7eENoT7Th9uAzpwK9NJGf",
  "key21": "3VU2VNCmSbAnyv2rYBxhoRP5duXZjGZQZEVP8owGqnHtJw6A1vQK3DgyuEMAPetcUoxVrvcxgnak6NJbeTobwBD6",
  "key22": "5AtbCmUQ218aiW1BGASRupbS9h6atNwqEGSwcbRiobLwDshAbsmsKGLXTxWEt71w34uVh8THsKYUnBNtM1S4bUsA",
  "key23": "4qZ3CYz3v1rFDyrgicyS1sxpdWXyVBBB8pKTuXPWHBRypJXbdCTFYswnNNvsUhMfE8GFf12oqWaePzsvEVdu3U75",
  "key24": "5nnKxiC8pjty2XYyX96RPupzH7eeoRAMD4dsVz2ydZcP1jEkaQX74ATvBaWiVd9YMp9mSSEX6GEKFas7YZnH9Mru",
  "key25": "2CCotzoRK4mFL7wibCk2HKCbR7dpdKB3wvbpZ4vREBbTHFK9G81t66kagP7tg9dm4DcueAUuCbyyFxdZv2Lfcauy"
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
