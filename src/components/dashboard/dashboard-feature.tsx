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
    "vFrtfaQRxhTdRG4t2EcTnEEBXuqCh6es2c5Wy1qJNPGGfZLgQMFoBoP3LdThKphSPtA7axVy9cEsrFBef12JcG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfKdZQypAh9pXm4Rss3GkKtqMeWY38ZiH8D8egoUKi1n6fCxooYXdGQPAf5okt88R1kTCtRe1Hhnc4i9AH2b7Bs",
  "key1": "5oQXd6ztCk7tdT5f6uV4GMKPnyxhgQeEZkmrog8DRDyxVebe3onwqnoUKBY5nAPYESjN9ePFdHBHRn915YpGYFV7",
  "key2": "3FmcRXgmnqSrUyPKPpPJShhypJs9TvDtyCgdfRqVvxi7fFhEFYYoH43McgB537o9VKttTeFa7SGfMJfqMyo4Znew",
  "key3": "61kHGFCAstm4sDe8E39WoFZAZd7RZpgFeNCw4gvdvPM9aTkp2AiimbhnU5P1T7QfkFr8kqNaDsy3iDKaDb2LZeua",
  "key4": "31ZpDTRD85jrKeooHE8GTSBCgZGXaHJDJ8S1Y5429qp5iJtdpLfF3oaBLSYNE4YCreuQwkcHXPAPSjWUES445p55",
  "key5": "39SZAYURVorkFqM3td54y9mNXXNJXxkDH1jmU8Yvwg2ev2Rj3ww4LhQyaFPnuVBKKKU1GDvyzFXHTMtvLebE2eQT",
  "key6": "483Pt8wqm6cy4ssrV2GpaW4AFfKQR4enRFX9s4V8f8q1Ss5kz6VywrUoVq9QjZkQ7s4sjScCFtHnAGVn9s5mi8FQ",
  "key7": "3Z7gfbAZ23LmSTNWByT2cggp9jPRA2pH2yHuMns8x9P8c3CPHYBYGND3finLmw1qNFHhq4gXXgpxSejw53dznx5M",
  "key8": "5fajJDsWFCscZqNGbkCfrPRbU2f7Y2M7v58cG97jPNB65ETwgM76SG4or46Qb741CQSxHFoDDDpGVQBb17fxF8BF",
  "key9": "2Ns3E1VC88vW7UWppTsBwtJntJiGNVPEA2a4Xd8aL6t37yhhLo6QcUAz1AYAghbcQ5eTd3KA7mZbayu35KYaubyX",
  "key10": "oAz4dageZiVFrUvqU8zz3utfFdUSQJfESbhwYxmZPUpfNPuuss2LDD4DJS4kCndvM9LecmhHmMnDvYZ5j6QNMpq",
  "key11": "66h9NEfDsv28w5BfvB93N6MNgJjdeZJqhdQst4BcBh4wPMrXYFFjD6qafzJZaYw7Z7qaifnhKydCnFYivhFKYTm",
  "key12": "3wTW1rVPJ1DndK1Arf64XSs1CNrVzvL7tVTGNs3EBTaou2ZUx9D7EQejNayMrmrDrX5jrXHkWjkX4U9MQkiHW9hB",
  "key13": "4K71KKoW5QPsQZSzgF3uh3xdA6y21hgJpBih6y9ka9URy9RZGtVJdDpHJFiqfoQXbeNizqwmdqQkEd4QDCLjSqT",
  "key14": "yTq9zZaHVUHgJDBxAkCizt5ieUBovdr5n7FaPiPgvfQwLGENNNfWTCAMZhytk1hqnVN4uRK5H6qa5qT6xyEtYr5",
  "key15": "4o53cGb4WwUj1mh274QDa9jv2CagefxzbhpUB9SQGsnno2RwWkmwGhsJUcTSCbcDKQ6Zx6oKbvjrtVkiCBHftWFj",
  "key16": "2Hig46ri6N9Shd4tRtctVoHX1kyGjh1iRPQDzzdziczHQPZKUkc4QaE1zvk2wK1kzaQcZf8ezVKWTmurGTwUUNYz",
  "key17": "4DrMpTMwvdL9LiytpX5VJ7K3YoeXbp4Wj7EUJcfFo6aWuZg4CFRN2aXQ3g1kmuWf9fdTZNxStNyfuRbL4EsSc9hi",
  "key18": "J1N8Nff5u3zMxB9ejqZZ1jsT1PYnq93cNJGgRtddssYKrPxDB9VadRpnWoFifkmPtVJZZnUvCV92hSbC8eLfcfd",
  "key19": "2XynZ3ZhRaUDn32WLuSdfUodSTyFNjkewANHwjBiszB9KNsLdLivBFBpuHPAMw3UQJGXxEv7fSkGELtkfBKTuUeq",
  "key20": "2rREzuJMhVdEkrurQ5vntDBS8eeE1rKEYQn2FAyyiitqP1kqMQvXQkk83HnpA3YSmaFuDnTSHGfYB4vShs9KwAVP",
  "key21": "5y5H4MaXXsKLU5tYUYzjtnJ6LERB4h91SqeKd93LiW4PK5RLGZk62vAdEgvJ7ZRCbQ7L8NBLzrFAve7tck9NN5Zh",
  "key22": "54wtaALxG55SZSDsHfL36bz1quTkQh5NtNYEoGyUEfCfQsnagpKZKLZ76y2peYp58QTmAXKR73yCNFjMaQdquqTB",
  "key23": "5wbg7hmtmz6YAQHJC5GREFJoyUNYLxhqqHjNWuPnJei8hG2fGP2ch2uPcRbYgf13wbgk7MRiusTWqsBrKEktHTMA",
  "key24": "5xSTtQ9DvZVJpNsMhmywG3cHjo9vpfHFUUGTfjwqT8bvELM9N5SCxfHHA5xGUGAXV5QiPgxNTLbM2ZrrvS9Pi2Wd",
  "key25": "4Fwitbt7bXQaFdw7XSG656GAqMZ98hGCFgEteFtAowymNzKVR2fTyyCKrPWaVSs6NzPTep2y432sy1DfVWJT76jq",
  "key26": "5XByKou8h5DoG5N8i5NVyxv6SHB1CE23PqPqWs3Caqq3Pzemz5khWzQaesN9eCwgEdn6uhbd4ojuBihstv4aEJfg",
  "key27": "2AZyiLaDNyYbEmb7SHeijZkf2x3g4qbZZbSo8Wr4mPMYbVYn2RNTfgNBjxRAQUa6gQWKLufkwqgYKjoCfMMx1WV3",
  "key28": "EysTpSuwjDg373qzbMpBfuqPgjUUbQtzVWEgnFMzzVC3dANNWosyqTHb4TMe744swQab1oCrgm8bsSSKSVuNY3M",
  "key29": "659nU8CAMNwXxeLbAFSxi27sQiNJtnRguNjfzMfWMGxNK28gvH3EsJrpFvitYBZepiqhvZgx82DnN6RpdgegDaEA"
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
