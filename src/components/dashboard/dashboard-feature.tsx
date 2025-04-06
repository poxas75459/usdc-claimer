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
    "2MncHVdNrF7AQ7KeVRg6H8Kb9McYWpHrop6VNZk8MKN3Pg4Lmi5x4o2a54XtW4f7wk8GCG1oURrDyWwYN7yEbTPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ne4mtSsEYE7D3kvLdEcmCoqZ9FK4qb2SLxpNQK1f2HgC7saXF8Rh7JABnPHdanwdf1rNk9Fk8j6THgrHwYDBBYz",
  "key1": "29nYzqgsDGVDCWJ9DErrHir7pwAng4JYwGKkuYdV7TkyoRRyho14PwDqM7RujsNB9shbhXJ7ZdXr7qEmqhvGyBGQ",
  "key2": "AxWrmPGey53WaQrJy1S3e28ZxRHbbDEx72KnnB4cCmxGcdRPhCzR2KxEidbPgiNKDBrNs6qmFcKJVcpAV6NjGWH",
  "key3": "5mM1SFBSvStu7CZj1aNLaeYNr3SMPe6WHR9kEuepwjY7m1DXB1Tc2N4MbH7ghTzovpo7GnhJRFFDbBrPUVHjwJB9",
  "key4": "2YXvU5RTzK411AAta9DCrTVdTKan5wdu7XdY6B92AyJX7DyPYo36bLwnj5EMmvoYWxYFNSAHg5bp3ACq8vGeYgCR",
  "key5": "4JTARZJeVbX57sJM5gxyhQx4sVLg3Tf9QyNCQ3dzR4F6RzdfsPcSr44GgsLdZricYakDCbaNijrpUFXGLRDxWsdT",
  "key6": "Wh3Ag7U4YWSUtrEfFTXqKzaSjMvJRtgWZvug2o5m9oYJnGPbEmmMmK2g3gB4VSSC8UZcpXUKVLJQyPXfkD9Fv9V",
  "key7": "3ovG73tXwjqUnmeqTB7wcr4xZeE4h9xQtu2dPTRWdDQ33rwcFLdxMFtqEHpKwWmXH99N3EzJPReNeS1mr4w4LCTm",
  "key8": "3TYjz5C5zZyurVZgfxMPFGCd33fDLUszNbLnmJC8hPhhAG7ba7BpuJPqaLeyCQBqRtYbQkD5ez43UaofwrzZX8zJ",
  "key9": "jKcgTs1da6bBXbKqvjuoKs914CPSEY3RJHxnbJMjarfNyM1xs6TjGGHbshvj4gU1jKLkusLZmeUNm5HF8ccASbf",
  "key10": "4KBN3D8st1thmVUGUx5mtcSqTSnopKyxjUSb99uSNn6xJFULzUDHY7uEUZqiQpCCQFqbDHsm1SfsJwS9c9Q48zuF",
  "key11": "3Sj7mdnrbA3wjqf4VYgoBECjoJ21rN5LxBg5BZ22ihkeuqJDX5S6DaEq9rZSQpjpufCSZ2VpZNGTguxc4uoz5mZE",
  "key12": "4rERTNts7TxqQd689iWjA8rgJBu8T9iMJv49zf6EidPKDzEa1KacJ97A7uc4rvgaaYMzKY8c2d3JbZfXY5CcqJKE",
  "key13": "5zSDVFj459xA8fEYctemDMfbqMeLKPXoqBeUjB9D7mgk16cUTpinYLbtZxbooqcPb3jCJbX8vo7XgS827Df8zDTd",
  "key14": "yNYaYvVUoZr2ZGhfFy557c26tH94TeyuWrRw7DCpbyL4edPtWd7a2EybhWqYkr2dCvgnZyC6uCRXoHnjKox8wMB",
  "key15": "3cNyxS72myZhMscrx3hrimC3AS14A7k3mQaAzd4UzWUVsaMz6sJeDaGNtcpXAvEEoZygJ6SYxS6B4pvhYzEbEGe9",
  "key16": "35DP1HsQYBanXUkug6nnK2rXQqNXfaiD5nbmM8odUBAmP2XjmHHpbtEhBkuuHAdYcFvTbvd7PY64zVKH7z1faAJ6",
  "key17": "3oGM1LpXCAYg3UiCxMgomnMv5SAnnESbDAY1H4m17ajHKDWfZEUFvmyQ7ZZetVq5L4vvM1nH6BQvEHEWZDRRPA39",
  "key18": "8uaS7oeZdpU3xEmXY9PULNdkj37ZnhRKQeNkkdbKrapmn82ggT8s7D4pT1TrhMmenMpRtp3xq5MUYP8bwY64pVX",
  "key19": "msucJapJMJKpCCZSERG9wHZwcRSSyTfuwpE7Lh3DtmqEw8shUzZaKdWGt1NDwDchvaaD3Kiq5Fr5zzPuMDygEQw",
  "key20": "4uf8yERpDpmYN9RRBkJ7sPAvqotGPhHZ7Fh6Fc1Mp9rVsbMFEmucPq48bUX4iCQHZ3UXAk9xTDbUoJTJW8MaQfUG",
  "key21": "44Ybs5ormqTB62oPeyumPA29k1XDJGAfDzeUaQVgu9tmWz4AL8XKczab4GpD88gMwiEQE57YLP6Lj8QmKVJLBUqk",
  "key22": "5QYHR4tccD86nQ8g2WEJQmhxpRfAEpRoiHLGL9KY4vJidPrEt8ti9UhNSgccUv1THE15g4k9mk7GhRDMWnhUbc8B",
  "key23": "2vdrcgBQtePfKNcFxPBZVAJqP3GHiDiP8tCxmLs1rEDyny8R5hvL6EPkNQFY4hAK4zLpx4ZBJ8d9H1i5i8V5F9c2",
  "key24": "2me1RwfKNJ8bGvYJYF3ZEM6eHEaYb8e3uy3qKG162xj4YRKUMcRQ4j3VCmY9mTZ6Htf4yZCdzpABh4bZjKPL71Wk",
  "key25": "zVQGKJ4MHCVijZX97hicPvwkgAYZoq4qdcriLAyv6z4dM7tysSnArPDHyL9kuEtZanLADVJevkMNFvtduuHp3hv",
  "key26": "8GdkWGJifj66sKSXkvEeCnZwLX2N2X4KKEt71m4j9ZSXt2oFCToTNs4vSWXBvgVrvGEbhg3GtxRVwZepJKi1ytA",
  "key27": "5TmAwcPm74ABMQs7DFCApuRv8DCvA2B1h7qVvNALc3XXEYRso12C88mpBiJSafZNK73gCvLfLKRVwb8PEQ95mgtC",
  "key28": "o7eiFCr76WCb154JYxLJiMBtpAT6pSysaMjHA14wSmu7vaSbTe8dukhcv2bXr9dstceT1Yy4eBpJ3iq14DEe8hM"
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
