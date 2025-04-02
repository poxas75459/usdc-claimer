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
    "4x7irZNLGqxYYG2NHCg29wwbed1b7MPpu4Z3q2PXWT9BQJbNUrVMVF1JjmECGgsaQVNxVy7wFzZzSheRLhVAtJs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKpBbPW7Zq33epYvnc8zytmjc3g1JGfT2KzW6JcYQZzB6fVzdTAhtMkuxHGYHcRSAiuJM63RK5B5t5BuZE6ipPV",
  "key1": "2QtYFeVvpbCRdHAg6K6pw9MWFZ2UHoBQ5ZE8GPFr7ZJAAxNhtSNyN8nUWBEB5MxcSt6r3ztmCQVnfEVMoGmSs81z",
  "key2": "3EDAkLKpJuXVRkoXFMSefJfatCNiiMyB2exZGj1GRWFqPBqmuAi7X7BnypBrzw9VYy4Uat29BwNZpogQFvFMQrZC",
  "key3": "3m9rEG13jd9pgjpWmM7rxwVAVf4noYgczrxsEnq3vefcL3uQFgsMLUEBvbk5JF3rZ4mFWPhY5WPNzLDEsXFyGPpD",
  "key4": "2GGiakctjNy3H5r2nzjcsGgNSBuR1dQvuEPiRuesiKwpzcXyxHWvS2LpvYJXjr7eX7PD1atnmFxmm79VVm6XWEpq",
  "key5": "ZWYeNbDyvE1bBonCEWrcn57Zrw7h7aHWHDjHQZyReqyrJwFdiEqDfcRNxyjWAY99F6eybmXswbRUDRt4PtjxHii",
  "key6": "2Cy1Z7gFpM4gUxFihYCDeN6GnjHS4GCSTaV6Sjp28grrZWj4jDsuwG7GD6UjxVW9Upp3KTSbiiyvpc3Ya7frwk7s",
  "key7": "yQLFcBF7GdMxLahPWLMCJBMKpLjm4PrSsrzCR6Z5XVNvyUSdBL6deZ9K87jRWTvi1z8FbvSmdkx8ekBHReiWd6c",
  "key8": "6mSCy6oQ8edz6EHqHLNRbNE7XdkxS8DWbUGUEf6ws6ZV5i34MyKTHfnJvUWZMgaMGCkm7pszW98VNuYoHqRRQsC",
  "key9": "27akbhGfaThjFWoTVrsZABTJ4m1gHxvGA6wzPccho2dkGL6ZfWJiXLWJTYQygEQevXwTB13MnmTYes9qXpDTYz2n",
  "key10": "5qVpdbEQ8LaJFMoQX9rJZeAhJMrcTR4PCv9qr7TD8t3wXce6p6cq18SdP99R23g3n1SkGYLEgsdVHTwghAabczDs",
  "key11": "3Xm6S9jhwiHQJnUzWohzMSsBnXhL6hvPbLTC8tZGfunmSkGZjPKg6rMuForMZt1koCERs6RWGS77fva52LphpdZ6",
  "key12": "2aX2uHCeqbgrWhhDeu6xvsWqyFhuPheK39y1eiGnFSwgVNYibJmJGrQHoXQdXVrvfTU5sMFb8MAG6wwtjxMZQoSE",
  "key13": "5M5wc7GQpaPGwPFpcD7HL5w3QGLp9WyKGEcqA28zj9QqVFxoWnje44jhQ4GR17iJhAm1CZ8MAGaZqbzAzUAdSQxF",
  "key14": "4hVFNNsBPFd3PF8YidoG4SEdGQc5sKysjw3JRHaQ87ytDPdVCMwyhFsFp8omV389TLgqmfnuYzxm76AeAdvNt3pP",
  "key15": "5Jo73StPnN7SJyJ2eTa5AX5AcyMDYDdiiJG7eCTa7rn6hQrtV1B46gZF3YGqbVGR5e1rFzVwV7ihUavGHtN2LhSd",
  "key16": "2Ze8nk9CZoVKiGGNkYbh1ZQXigjSuy7aeDXc5xYzLjwxv7ZSNp3fGQJJcsXTdt3mcCp4fRqGxaPDshv2XjAYwHsQ",
  "key17": "2NVDVrWcEyXkahGovDEUrYco6UNvXEnDJVKss6j36Xv67K8YgZs9ZTovFCy9S5tyFyewGAgXwWTY56Xd3r7K7DL",
  "key18": "2F1QRF5qFwMq5Axjrt1bojbFMzZCm5HSzEzHAE9vNbq4YMEQKH5cDoxHkUoArzy9EgbWC9LSDiHC9XYJkZsWAcRe",
  "key19": "2xTtPzDziqgdZpaWCPqPG2jsGdHxL9zzmcfTKFQxS53o5sYTinGG2dvVKkE7ZBSEtB49fR2Ztd4gSfjdVuQa4j6E",
  "key20": "4eMj4nqzuDqvC4SjjxCGwBtqWGkq87STXQCni5YrQvUXbmjn3r5G6JWenBWcer8BCLPaEbHJmS3tU97FrxgKDeQL",
  "key21": "5VRxqWFySSNvqEsWTBb5FER2n5GTA34SUhk1vwGZw2ZGUy762AP4eDFnuRQXuDfx9HjT38BZFWHmrGRjZ33jHvH5",
  "key22": "25hnoWeucjbqNQMft7suxyofSKNCXbd766oT77YxY1BfBDbd8LXT8Y4h1SgUfvyFVEoUtBB4wNS69j77SRArGVWw",
  "key23": "64v7iKDrsEnS6qkHC9nqbhtpG6rFGnaJnYGpH63r5w96VdERdsJDFwmXAiLS6fDbTuSHAoWFJyqn6N4kziqAsDUq",
  "key24": "4sWHJTGTBLZhndPBbUbrd1pVp4UAszGwUoHbjJS5YA7La9WWjvQyppxKSw2ghLkqGsXjxvycKj2hdc12yL8WHKYd",
  "key25": "4RHrwwj3rBeCigpT2ZaUnQhKrr3RuM5EX1qavK4CGN17WACHJP3WhU1oMW3BudL5gdqKR2TeR3UZ4qD1Z6YZKQMr",
  "key26": "qxKHKeiccW63uB8CGfdyEWRgF9Lse5dgbnT97ezHCSrYim8qTckWxA6fsLCJThPmDbVZLHfonDL6MYL3Gq5Dcge",
  "key27": "2CENF4hT56MeBEYyXrzxMT6XRCdvEZCoYadPTFhA1hKUPnwvhyR53rkNeb6SxHTo8xFzFR68v9yLaqqeJwAyvvXh",
  "key28": "2XZ986FZEn57ZicnzDRxZF3gHzzofhHr99n5QNMpfJ3VpURdw7Vcz7wopNgRCfFCUePYvDDaSFximTfvVWdqNDT",
  "key29": "5CfkizRtZURAPfD5WWsbbPjh3cWJBYC7rPJV3r2P8QzYVhGXsgLMs12MWorp67QrUpKu5d6Wt9xKY6W1WRZ7B3J",
  "key30": "4r4tsJtZuLCv5eJa6RZ9W2MzYqmy4VMwRr1qDYBR7MiUvgNcNcjJTVKRJ8qKMjfvQeR8dKKkX1DacMbEYnvJJvoW",
  "key31": "5GFKhbaPpy347bNwvJwdMLS16jARSB6tWjkofoAYKdXodDAxXad1xbZJbpphcDriWhjnG9pGSdEKiqh3SZpLudUa",
  "key32": "28VwP76v3PBP23g8vSDqB1i3ZF6RVinxRCw24rS5ay6CXgg1zCNEsD5vcoAwmWggDyodQx5hejk19SmvQrAbUVR7",
  "key33": "Ntmz6aGRn24wAxgsMppPgGSEVHdMHBc1h2TrvGW5BPWR1t1QDEwp9owgDox9k381mGcazFDCW2DMtK1BAf23p7S",
  "key34": "5pLnFotExtbZ1wr1JxTL3m38YYZSxLSXNN6AmcPeTwuYYJzeirb9zd5dNwehMxLsXgZNDvanJwuNzJfn4GKYLe8Y",
  "key35": "2GR7HoNt1TTVWdHo4ZepHmgjPS68Ju2JDGBW67YS7vb6VVCwJ7drV4K3VMwb3LYQTQRobQ7GLoKekVvkF6hiDrcy",
  "key36": "3aepoeYfFVAmu6fMb1oEUATiAUKbAg1MZ3rsB7Q6BihPhZR2hemgtR8GT7RaVakdccyXTLNuXHU4fWStLcQ3add7",
  "key37": "2w4naHY19Gf1PjQZyD9Lk8TTXU7dDwhzQjFScePXNFJxdMGWSQ6qH2Zf99B977aH3RiZHPDhPz8sC6EAgu3Ha8KJ"
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
