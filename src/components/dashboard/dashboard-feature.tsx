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
    "2p3VvnqFA95FbCQq3gNztNRDWaJNz5C4J7JHS3RDNVFe4o5kwsnkhXjRya2G9G1YPsib5UiJ9S5s7j2bUjQZ6GXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XU2oS2raG7AkWtbb5oE2RPggpUmvrjRwCkF7CgKQRz16thHaYRZXZE1N8rnhSJMo6Yvb5XnHh2vgqMjjHGXpbv6",
  "key1": "616vEafQ7DxBzEDp9PYdbDUaHRmHa3YG4n5tunK42s1xXYnKKzJ6hS2eRqTNZ9Ubb4yTRBEPaYrLaVfZuGf3ZgFS",
  "key2": "56idenuPdA3NXn1neWN3ZsmqcwtMZd6MHSHEDAESH6y1TraRiPU1sPfuN4Da6Dh3yP4RoPhcFNoj66fqVPaAq3em",
  "key3": "5YqozMQ7wiz3ujmBxxYNjnu4EgUVh6UcKjD48DQKsnfDErT5YVDTDBEaihTKaHGdFmorSE5VUDyTu21i1vRfSp3s",
  "key4": "46XEweQkvssjEf3Njo7KRY5qzrZdb6d7idHBZ7mi3nLPeqfHhqbocJMpCEmJtyuTwoY6yUDvrwRQcskqeynnp9QX",
  "key5": "5Di9qh7BH9TNzCjUUE56meKpNobsYb42mbvDLgD2dMPrRRXYwHWgSy68x3VWXBscNNoDkiCByUwmis6BHyERRcnK",
  "key6": "WXMidNCiRASUch2DUCGm9kCEttWiaSuq5YvLYomaavcPkjYwEzgbvG23msLcefnMvvptLNM2zPLVhutb4mieMD9",
  "key7": "2Q7JDWFghaoowJirera9TWsY2hEGasNiwzoJKHMbfn7rT1jJ7dLsfX7kfX46nt7xUmVkka7QnfQnDgSHedDkwg5b",
  "key8": "4cHLo5B6YTfcjp9CPndw4gDnT1avLoz2mKQ96eGLN5C6VcZBmSxsgio6KrZN2XbveyWuTJBNPuaRb9jURzuoiBCx",
  "key9": "2Y1UVGiw2KWwdoB2TmXwkM2pDAUmzJtELaeqni1tmqita2ZQxaFhUg51SQ3Lc4bSEa33N8TaFGmWng1UPA3VswW3",
  "key10": "3yrGFmGSd26HpXT25yWXNpJfgqov9x3Zo41YsZoNENA5Q2yQVTz1Yk83ax9yJYJCxM5se5xGZeBmxwocQn7vvvoi",
  "key11": "3yDySUGMMsUd1mn48yceBTM81V3ry5TBTMdniiKUK1RY9HHcs5sSaraQWfbj2bh4bczz3eBuVu7bZim9Lu28ihCD",
  "key12": "51iWLt5SyU2YC45erc5zqzc19vE9ShsvFSPXfucnoQtV6BE4Xi4CATc72eS8w1Czc3YAVV8tKZEweZHwvF9Yk58t",
  "key13": "u3yKVQSxAs6dwmPqj5TUqrxN2nEovFAuCXJHEJs1TU2frZ6i7ozHenF1WWQEVX7avyrq7roNYPV7yxcDf9N78L9",
  "key14": "4S6YRNJfG6JcvvViGnRG6XgwqnfSEyRdK3Q2Tz2rot5THHAt7oPxnEAenYv6rHmeNMLPN2uQG2xGdQqka1zwci8",
  "key15": "WipTebhX5ugBbhsNQZXV9oACsFxmc4nCfyH7goQNcSBE6qktXR3hHgboo6ZfvVAGAH2fVU8xWQKZXYj4Gu8gJ6L",
  "key16": "4kWXtTYaun5YPoVfUPmyD9441byQXLa6DSwitaSLvM84JSJS13kaqDemdEUDeFSzXzibgPZ3ubRfV5v9RPS6bWdd",
  "key17": "4s2iHXcYPtHKVhi5uKrxCJCiXG15bs7X1ejrhnpRa57wqHdAw53SB2rPTam3mnNB4fCc4fHvGwmTmqXPHYgp7bbp",
  "key18": "5VgyE5KRHo2KkdvfnRmErMEGRHJEEoQE6QfKPUTsYQeneNoNXtT6vqtsrByzsdz1a2JrNkV2fBg1Xv549gqdBgZ4",
  "key19": "ChDgTeDDdpq6TdSMknoXraCTNRYyATZyWWz9UeiFnHwoHekkP2fqy3SEqPeKqk3U567DKhTLAszS7DQ9DtqxnGQ",
  "key20": "5oG3p3WPRDYnD1rgsAAtmWzq4Kn8AKRzkw6DhJ2zVa1iHCcfH9TiYHoMdgbua9t1m4YHqNSmAyuohNHMRtg6yrku",
  "key21": "45d7cFP7Hkb1H9ngyp9wLTao9GBRYiLSCB4QLySW3HWQRfVQapDLKdAyHXPWxFKR2RyERXFeafe9LoMF8sLc3UiN",
  "key22": "DoEy6VgRN5age2WwjZ8kVPD7c9n4Bhr1ELFCvXb8xQUtX7prTj2tsapouyPDtq5xyJQtxnVmDGHweuRUyAVBUHW",
  "key23": "45FmBNjtSatskvJYfE7nFjdYG7GVBhxaWh1sTS55DGwzkTMVmJVZQrQVDMZATaWRNVFCkpHjmVGKMrjyyyKLmGRP",
  "key24": "wQ3gQMjdvc5iFneoL6t6wdExHUtjUegrrFjS5UpveKBoEMXR23VJzDGxTsHdWAP5F5CAnapKMTtxFTBzLezM8md",
  "key25": "38eUXbsqhRqELHndRGxT3vYUwYKSkFCJMQcos5FfQw6CuxR3mp3d8i5yZkdxe1nh73DAHpB7kASw4hFHnGMxv2ak",
  "key26": "WgGHoYygVYBYCQx9ZDe4BG2UqyJnryZfsBtUhLoUYjuSfAWx1w1D3iiL1tuC6BqKocaakQs4cZPUwzkZZwCdJsX",
  "key27": "h845m1gWgtreFu5i6HqKQFLEK7Uziqa9JTADmTvSjEztPBe1gTRQfEoXqYTkCjBDBMZZcdq567axArUp8LAU7Y3",
  "key28": "hUMR429hXiz5sEgBWm7bDWqAb4KyPUMUQF7xSKGe82SCLepsVzqwHK5tRDDc2rsZCZpYxskyvXWdEXnhkPPDYUN",
  "key29": "3X4nAoDoL5w5WnEGizWUSBCg8fKQ3igEvPHKPf5gEcKKMRXMcPgm94xShAxJckKXB6KUGyzRJfpg6xAAMwHi8yZJ"
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
