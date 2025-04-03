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
    "VKGtyDycLg2icXDzteq4W1mf4iDsn6nbRtav4nYocgk6vFVqDbpdNb2HQyix7i7xWLugD4VCQQtUGSty98LUueB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2FojuEcDHGg5JfawwmKv25UG6ctEvXvtUeRsgHipY36iyMBb1CL47uWpXKpS3ouBVHRe4sjNhY8BxzY8FfbDtL",
  "key1": "4KUXvCiGCmducuDAkSq2EGsAwCbusP8PJfzLPAgYUdSCRdv1iCMGHCQSdt3VXEK3gkZaEGoRh62CNo3pJDjcvF6J",
  "key2": "3FZSGyVUTmPNDwRS7gqQr5Tukr2dbibfafhFXUomgzdCcEnkBEKN3FQoEmBMHXL4f2CgMYs67u2oGhPgHr7jXGcS",
  "key3": "kr7ogToumF7DBmwz6o8VvnSongRcwPUh5aHoSzRWMxzUcgifr5xm9SQS9h72ikaYwUxHq1iFgVBB1bZbH8kq5Uu",
  "key4": "2YKnjVMCzydqmrr3vSk5DuNb1Kx6TMY82vqddfKk8whn1uiMDQAZ21sodA2BsjyvaA7yq1K5AGhcRvqFLEE8GmwB",
  "key5": "3KGkFsBgyzpLjJNa3YBhhc28DHN5ASom226F2viT5JBkcbTykQiYaC1fVgVwNkMs5XBTn45EecW9tWTBMny5WD6b",
  "key6": "4dA1fM8wb6k6i9LnJKAGLWgERdMoLUmtooRAQtn9bREyCnSPQAmvyQLrVzSEAsywsTydLSnTUeigEm1sBM6My28i",
  "key7": "oSuALkrRuNmM9sWSpXQQhN1iEC1CsAEi2qvRj2C6EikjznzhJaRQqkrWEsKS2RjN4XwCWACyCmwGsEHudzpc2Xx",
  "key8": "3k7wNg58Z8ho8LYE4pZBZTdCwnQmvJiKKRAitaXcPadS5C49aAcEY2zmkW8XmTg633W9toHfkrq5cYMWgdjDrmvw",
  "key9": "3FAm7jhekunFz6pHnhGSNbx4gXgarGA64eekJVbQpqDV8NaZiYmeubVbKT1djUjCYYXuBE6UjAACWQ5jKocKCj51",
  "key10": "5GokSz1cHswCdC1wB2GtayhVNG3dcq5yq7hv6iUzihWaupMa3D69b7peZya8caE9LTfRCB2yuNTjjFhXioKm3MiB",
  "key11": "2Jjy4CHi27hFyFSXwFVJqcmnpPiq2DZwdLfTyidxB9dxAi4ZFkNsoMCkejtq7AvxGMFm6UMRfsxRRLJaJXTCLHXU",
  "key12": "LFYJEjCDnaX7n8BJeYofWwJNpZeY7x7N6sAHfkgJtSxhbVDmHriE96cDSc6c9ho5RRqFyBx2WQ4LUgczEMvkiyK",
  "key13": "YJV7EfWQR26KxquJvYqs793QX1QWreejgMi17JnxBX7no77rhjtYuUpB73ooiqV6j1RnjNqtZmzjmUHDpKWaQmm",
  "key14": "4ULgAV5aDd5My7BffGeW2gRPbGzXpfVT2mXc9NePA54rBBhcZWSeJnsAKnH47Xcqwv1GhZPrvpS2H3549FBhkDPj",
  "key15": "32JKWMGfNbRzJXUEnSWHQauD25Tm4wmc3XpDCBB1em3jj99kjSeUxb4gDLmYeRq6mZzisXreji3etJkeRcWoo7hP",
  "key16": "qTRP476rF5yeyqZrmo6PHyiWxsxowXnoA3v46yufYuTtHLUdonwx8tRVEP9v8foUUiyTJetVU6QPqLdAHqEgVh3",
  "key17": "5m98RZEeEQUDUsTSQ1uUkraUgAKuMox1XcDZgUhC8YkSx6Wic7XnbjgVmabnVLss8vrkuc7U6uzvbJxC9jXKNtb5",
  "key18": "52GpUQC2rzmk4ASgdWNSvxvVAVbdvy743ZTwArM6ehanh6YKtxUTZfUSqBhArbUkQJvCgMQNpTrDzzP447oBLwmN",
  "key19": "48zDQ6bXbxKQGV2iYig1ca9u2PcDYLD3KESNFEn5WQHMp5Epw1f4hKQ8C3TJQmLKZhUiQYRm1QiRPUSREE58mr25",
  "key20": "gX6sDPPPGAeTECNHSz9KTAKsTRKqvwwmxh8uNQfHhzzBckwS2n9o3udji4NjUGhS7ajCa424QFY5C68K6CMyLUS",
  "key21": "48Nh9N7zvBgu6yfu1UA2EX2XQ8LuLn7WKvCZDEb9PTHsfo3Zw2kUGabEYqotvVgEG3Dmujna9DLwWvc5ULFJ8FAA",
  "key22": "4QNrKgsgwDp7BsYTsXK2ecEWFQVVZMAiXrLzMrCWT737KrX2b1tfFYfjPYHGkT7UWkMXuVP9Ura9gJex8sewt3Qn",
  "key23": "1tzgtuZo4JVCAb3afUPrFFYrs1Xk3bw2FJL8TjTWJ2V9DWWyYLJ3a29iwwngkYxz9tZ5v5WRo1ysTyTFgiM8sH1",
  "key24": "yKFMjiBnans3bMvVyKVhNJrAJsKnXRQYMQNDBvjHT7dJiSRnUgWfxvvJqpbozaku4mrm9aGXbpgq3oJ9G17iR5C"
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
