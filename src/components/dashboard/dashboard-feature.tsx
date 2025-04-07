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
    "3Gvs3gLBzy1VH4WbrQoHTqDSWAsVqtYj5vTMzEMR8g7VBesjShEdiJ6epFB1WrjiTQzQuW3c3NjVgDM1oAYT1yYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MnKMmd6gejtwN3aZM8WB5VG11F2F5uTpUEbbpjFE1DPP1exv4wXET5DiPCRkNiBb5DepdndeSD37fUeenivos9Q",
  "key1": "4ZHEjoo4sBKSAL7urMYFzNnqooMPzTmXHAcJ3hNpdqWnYyeu8YndnwYSDf7LTtQZJyjvYLyrZKDBojoy2Gyn7nHe",
  "key2": "SFVJFjqjKdmf5MSw3xzZhTYHKFgM7cYDvMtmV6fSdSzMvGS7eo6HC9gCGQhdjhMpPMUsx3kfQhdqSDT9SpDaj6o",
  "key3": "5fc3DkNHLKo8UEiJVDtnC9LHg4SwAXyRCLgW7aZ6MBcWYj9DmkCdTkvoF1Mx4S3PvJekx7VFQ4jsBciTuSX4wb4A",
  "key4": "2ibNxq5Fc13kakQPafwZXv7nxLdqFPuoxe34rB3vxgLWDkHAJ1kYKGtfCKxm2iLxyhr8HnfED8ov4HNuq1WRxNBN",
  "key5": "2VkbRiDYaMAUkraLUVJV7DKd5UKWeaQqkuc5ToQUqBwYpngv8PsfMiqDvgVMsbYsTzrUUvEpHW9Tm3DVjePNemnz",
  "key6": "3UwcwnQeCrKL9Ci7QxfiDxhBYBh7FnEA38JnmWyFpvM2rvRLrnZcs2yoLDuqyF9FqTuiLhtAyeGfJWwT8XdqXrf",
  "key7": "S34gfQdZxmLQr9K7KCpsHHuwLXjHPXZzzxC18wVwGqTRXt4Y3yMNXVVUtVCURQGTfZAcdCAbFHe9D9vEAEBQzLJ",
  "key8": "2ykJQs17SvkHpNJXCepEUFa7ymAcd3LGAJ74ShaK1SVPYpNaaB3TUzCvLJEDZNd3xr5KYj4tnBy11eopNxFitRkr",
  "key9": "4fsWv8HYsSQwgRNizEBN4t3KYuYSmC87vdt2JSPsPTegAx1mXXR2dY3fBNy3PfD6Q5zb14a78ZAAuyg5FySkPMMa",
  "key10": "3f3GnCWmoCN2nCPaXixd31TqjsKNf16449PyFN2DxTdfDx6yCGRf9DV5YJfdXFpDHz2gBSfpPbKRykrpdLkJHkY2",
  "key11": "2YLnbuwbvxF18zqJV5LNNEnfzKu76G62ycxXiMdzkvmD6zCsntPbgnGPjwjfaMNhbUF4U3FJvzNUSuYqJ6vj7nWy",
  "key12": "4Cu3ztimjs5DYh8DV9LNC2UPybQhbWicm8KQrcagSY6y1MFLoR6qdJtKuqnFSbYwqT5wMpwJRHUaWvQ9ZhV2nNPv",
  "key13": "GJz4cLWJvjPSPrewDcvHdn1WsnR6SBMpAr5nDMfT2vjwtf9AnnyasfwKxWTzjAECyxmu6BkMxv6gRJqtWE3snMF",
  "key14": "K16PcQRXbk1XozqPRtNPJCJaR4Qw8i2QRo7gLGyQjRguFYpniqFze7ux3CoSVErcSp95vi34bpmetqywN8P2xSC",
  "key15": "2X4siu3yTTPA6C9Zt9LrtNerFq9kN2mMU7qAUfZ4N9Hck2NEJEhejdouZFujhWjFc9oy78U7Kgi2MqsVBircCTcd",
  "key16": "3KMXsDCVkGQ5yTiphVia4fVzYRQrjbUKL2U5Yvypvuxz5fGNWxrbrKyX7pLnR1sxPntt3fHV6sobzYnWeEiabaTk",
  "key17": "5dBrPCGJwZe5kQdfda7Vth98tmKTMwQoLcTiAbHuuqWXa2SViVVrWmG2gwF4fy7uxgoeCBEeuMU3YaoYnRrj3m1E",
  "key18": "53yBDBdyyuSzt5FdwnRXCow4raTWFKBtqaHfYsg7DYUAYDyqbCLTnG6rdj1CtpRpVdg1gwcMD2DvZxi8bgmQwS4H",
  "key19": "UsxhTGocx97Z2AhYhf2LvTsV8DGdWwQo4uT5ZzerMFj2Sj3j7EwcbsRnGPQsctzxPdQKCEqMXx5tt8GrpU6rict",
  "key20": "4Wi4kdeakHmQvXMdrtZJxxg3gmWn778BFWG9X1suiVWHbKWueh1Yq4wWyMjdT8w4RSfZ8fwSLN6y7WJw5YfmtifB",
  "key21": "5rczZbtNMBwScugd3WAo3Ymb6t1iEfR23kCkpkswKtZ6jbHC5oRVDwDFZdsLNs3Gp4rVdCqgLAXuvyWbUpS9gnuJ",
  "key22": "3DXMXazMxM4StnwWTLPoe1UZTwybLh5ZqxiwkxsgbZkcCKa7MmVKb6BKCLr97hLokC6w1LzwtddXtNGaDvSmAr2e",
  "key23": "A6p2esZNnsHJJ3Z91deDb65HVw5oWKPEwo5ixtzjweZZ8n3yGTHz31AMhW6G3N3uY5Korv8UQVw3azdqwUzuz3e",
  "key24": "2JqhkWx7oxzvTo4zMDihriaEi6ChRuJj3DKNifySby8MY99DbKoDZnGUTWfqKMji2gMYHwUrXcJVNBQ17zCEFmLD",
  "key25": "2SDCDCQjygVXZG2EqZJtYbpYJeJAXatZSbMuBTT7efEsCoA5Gr3xU54zGXFNprKcy7chrPDwop6fDLZPmY8xGCAb",
  "key26": "3VXe5LCn8ANqrEyZcw7g24yeZ613638Lu1gGFUweEA6Hf2148Xa2Ci3tF4Hieq4jqfHE13U7ViUiCRf3G5m3XBJy",
  "key27": "2HmA3EMxKJkg4KUyFgT1uwP3cYa1LvKSHRTtiDVZTe6kCZhjU64sGa9wVLvkdVa5vrMoWzXV7dbR9JoWo4UiGDkT",
  "key28": "36izsoUxRUMB6zdwGRodDiPzcTKY1FpubebFJZ3w6PazCmqaMYR2Azu5YtzcG2F8vct5kUpUxeahwVBbH6TtJw4E",
  "key29": "5Eif9igchZYAQNXfqWEWfBsZvyxZkBZwhd4P9wdxziPACBRvMQtuX3neHuaforuR9f2Ya4Wg57rfPq2iQErxCWnH",
  "key30": "5R52aJw2h8TEVQzXVVzyDrQBCuGU4kYpmcP67EATjwWeYvDVCaH8fRqnMVi4GY5THqDNZHEV6yVvYC2Niueis9GW",
  "key31": "4CS8TftjRsRWmKhQdaqkWgVF5VaTfY4GTowY4msTYDR1yMhCUnwbotn66U6nqeDvy7fAENobisLygNfM1rPZGjGt",
  "key32": "3j8TKbzDBQyGSCMr45VXvef9MbpyHS29LNubwdvScktFDM6vATWJDPbuohfBQxTWnvBWS9wp2yvV3oDiNyUj2eUk",
  "key33": "5rrYzsef1AxPTyQSRYC5DaJvXBo1CUCKTiSuBvqX6j9Y67cSSeNN9au6L3aqSo6DWrQfhAFaYdn9T9zUF6gy3dm4",
  "key34": "2gF8KPtaPsv5S6thkhvpjFgsyGbe4Pq6uzzw199CxmGvW2aXQhfXU8uDHsKWVaMTsBgLg9MUsrXnJgGiDb99pWXe",
  "key35": "3D5Jz2KrbAipZ9x9F77Lh4MhXbrHSETrfbtDeHrMNNPvCq8GA6i1XangF5LE5vTFCqbwwWGR7WwQiuB3JrQRqfFa",
  "key36": "3cxoPstksg9BzKcAiaA7si7t4oJ2ut9Z5aHExGQEiPBNeAFGvd5NkQVKQsLfVi9vaukH3ow4HpXEYBD16smTk1J9",
  "key37": "6xv4j9VQRJJDqdNFC1sddo8fGPsz7MWnbuACh7tcgARh792ZLCcymqh6tYheLKwKMBsiEAdYPJzSaVTJN8L95Mc",
  "key38": "4htzbyqJGv9CJ7ow3EgsTDngWpY9CpMzcQquLJECNeMiAK73wtUNZJivy5MUweT1PzZUVhhGhmj1iT2FFwy8EHWN",
  "key39": "3U3Wb45DDAv7At36gqskAdWQ9kMg2AuKA5GsmH4YSoudiXGv51yJbkCHHNHN4fUYWhNtSFJnJDH9Rvvmy9amy8xL",
  "key40": "4StELczKVmWBSwgLrgaa3ooHpw1JjAYMtYUgYjHSsEngibTeUWhzcvbqPUdsqgJYUxzswB6vquvQ1gGpo1S9L8aN",
  "key41": "2YqfUiynHwHe6ZGZYVoTpshRDo8S3pxVhdwyiYBfN2p2ATGvDmzwqCgW1V1HWoJtB5MURaKga696b33zqHrYQXUa",
  "key42": "5CagT7sdCpvMCg1QtDUskAHaSEYb3vUXAMj8EwApYMpLHehaeA9TRWzbD2Mr2FdZVG9mG6SGu7fhyKD7EdGjQxDU",
  "key43": "4sF4HkWgfJ7ESLryNhy8NwbUjWpBvDHs5Whk34YJmWvzcoGvP8brZcbfyKovnXirJdXpVt6V5xWesfoqfXBZ38ot"
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
