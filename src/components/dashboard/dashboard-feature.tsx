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
    "avby6ZzetYsbKKaRfAGG67Ag8cUD99voHNcrFMU8MrS4fHZ86ib3zjcbiTwGzVCuZ4HQb1VMgCC99q4tvmhaSy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khFiHZqxxJCfZ7Xf26uPZ3NfbKY37SQRKSALVG8gACiChPvkgyMsQEEMj348UxCgqDkPYhxKbh5RiZuhxhSH4ru",
  "key1": "5WgHR9dSzU6gpNGL7GWVm8DWHc5b5ydqQHSkXTRwVe99S1yfFMgVT9mG1hSrwHZJVQ7GukeXYbQjag8a2QWkqrAg",
  "key2": "5AQZ6t5HPJND2hryTAzvnbuqSZb9uDeh9MmNrr2fWuj1xK5nGJwqjLpSkuWCZbZYsXWMwBNXJfr31NShTtE73Ef6",
  "key3": "3Y9CYpKmZR8F51H5MgNcLYX2oNTEfmaQd3HUXHipkTcECGW3zpEiXa9QzALYndjqixRQHj4mo1Suk6SycWWaWV32",
  "key4": "3gHRHYmdsNd584kJzymCLz8Bob6nyVwkgGNN3SZmGxtKB53Uqe8doRFgM949ikUJTVS2VacTy6KKjSt6PQcvYUuE",
  "key5": "4mk8i1qWXZeauGw6nHkLwtEbu1cfyDxecasdaqsMkdPuZZXRJc3m6xLYCxMDBoUJeu4Z4MToraAnXUsA8YkbvtWU",
  "key6": "5TbpYxCjV9UkxYY8RbsBbgmd2cgDXLH2LsbAz1xHqMHo4dQ9FDnhz3pcMfCfivqR83UKoPVYgz8Tfgu6XRx7oMkS",
  "key7": "4rRiERn9jx5AZWXfmGVzJxhneZA3fQgtZ4iRJzjN3mqoTtPyREmMz7xkGmuowk52phYiEWTN2Hcf1UpXGJCdRGsv",
  "key8": "QcB2v5dhRitshjEaRSG5BnRyH9w8QKjbGCbiXbgoNfb3nBhdiwFmfrUe1KmLLCkygnpdQNdWDJrpS9FTsWPehM2",
  "key9": "L8ApZD21qH5hA2LtfitUo917wB6k2s86ZRRnnGLEXcbNsupaQBpnqWBd5tcR83NM2Ho2Nhv6eAZ4yJa7gmfBHQE",
  "key10": "2QBxggqRPaXzuFp8dMbwPjYtkTkpCZXoHMUNxokQm2UFXo6H4UBUYNHWkBKtUVeLJjR8q68syPYdpcj5fN72z1uc",
  "key11": "5zjFVjZqtDnotKuny222QRyRWrwJgKu5TPg66954mZtQHpXpfhdTasWb5JxTcaV2ob3DvJrYDJpBvzfJBTmU18mb",
  "key12": "545ZJ3ULHRuhs7aoD76ZV3vDqKr6zkD1BSxY4rYmn9AsfrpNfHaJVCfyHzhab796uRm2Pz3kZB6F3ny7tzmedYPi",
  "key13": "2xambNixjUL4pBu3zoq1NJ45QrfeW4MWq3ykuZeJAHbJWmkDJkQaUU1HviqPEbRC6nuuYRa2ZPe7LiexDGrq9RJ1",
  "key14": "48MXKuE7yRfYdHwHhtcW36PHCEYRY9isv3bUrkRpq427q7PqFXe1SK3b97FpsMGhUKpKoP1dAgrMPipFaYjwf9EH",
  "key15": "5888A4GoVvXJWz5o9vnxkQZdj3KWnYub6w1YWFMj6gH9ZeHs55fyq78akeeZBbT7aJXsEPcnmPLQDjqAizYe1LiD",
  "key16": "5ivrA4oNwbLLDyVUBJvTNTCDJr3KxTjAbxG5AEhCjkz8zuLNzpvGEP6AQz3Spx1C4J6LjfYxMqD72Q7UCxDDxm5n",
  "key17": "67o6Z4FLX5QVCk9iedzo5qgi9bLJkaFuz8ffMnST1szjsCMtgsW8Bo1NmetozrM689D4DypUoUXG2QBVjQx7Mtf1",
  "key18": "47SAv7aLJmJzP8KfKorAHZFY11RgLLoadzXdjW3u53x2of4xL2iuS8PJVWp3fWZZGmAijy3zknDiWQXKCKW6E9rF",
  "key19": "4tQ1SFLd1bMW222fhnTfJaHaD1iK2Ho3dhvK2v141ET5DeqrmmjZwZXa7quXoULpRtJdhytEsfgnjaRMThuUX1go",
  "key20": "55HmsW8tG1ncvi5vyKCJceFvhpHi5mD5kKAbBvsbAcXVN1UFXuJZoiMq27ob9wKGddNexwj6WEtJmE1gTYSKk7PC",
  "key21": "5b3SkSBCQBs6HNnYzHCwr5QrQ5ZFKoXawrgCpfcnNToVLrx9WScr5m3P2gSzmErzPTFU5K9vppfSxKQ9qnBDrkTE",
  "key22": "5YNGmK6rMRJ9QG3LNWsaGeTyiwtNUp2LFFPuAGwAjMD1128bRnPhYZMrwadn7EAzGD3YkAWTte1yHJosLJgxcMTz",
  "key23": "57j8zgh6JooBJZMxDgsUTLsBjwX2FMJaoJighNdmUYWoK2WaMCPVKj9Eqe1dBCFxjEiKkpwqBuWoX1oDJonRVA7y",
  "key24": "5vf1erVgsVgtFK7AxgxCY4K3e7EYcT9FcF3F821jGCxoY9EmLVvLKrwQcSKYjBaTrn5aPWvcHUMjHt8hbPf6GCKQ",
  "key25": "5Gqdgpb1fZ1eYDRt6vHh4oMKcDE2dH2NyE3YwRtYTYdMfhYheoQyPJk2AkVd7iYtkP1Kh1w78pGyDqVusp8ef6Lm",
  "key26": "53DWLHt2E7VmeA3iqC2QxX6zLY8acjEs5cQcuniGStRjDGJE59e3J5CEm5hCN9NsqucfUxZ6CDQseqKSvCFEpCFD",
  "key27": "3ybim9Hvb8ZkVBBCfPtPMGKHCCPP6b4DfxFvmrY5DhvbMkLcLTsX9yqXmFgpV7QTWi3AWJExaZ1vd4Umqs24cUsJ",
  "key28": "UdzUiwtZbrW1gA6vzdRv9XeSZbfs6KpLv5DSQyFUpm9MXKNbGX2dqSdrAWVsETj3PjLGuF2R3gvbHDRLjvuULSm",
  "key29": "2AdCfUsTWS8YHhVBGG5jwt3tkuvdxUMriQ6BHfgn8R9zJLzW9Pg99zPCQuCTx3xNNSG46LvRGqj8q8PZVFL5ogbL"
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
