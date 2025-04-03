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
    "27F2vyVuUhjvLs8DuA6ZsGSJk1eKXBmiHw6WBwktvTotmiDk9fs3f8Gr1nQC2RZCeaUjgxP7g2gWorjs1ovmckRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cxd6EPZtLfcW9823xyN4LHGsiVhy7rdZXa24tvSy2HXhNpw4KaTyPgFkaRnRextDe5qRbyA7QHrtdLUT9dXjRrh",
  "key1": "vLWZ11qDmGd51euMRmEsGC84bzTMoKC9qEMfSjxthRPkpYMoBECaKawqtGSbthN1XqVZnb4xHNyKBJj6nkU9exo",
  "key2": "5yDLSX1tdQ6uKRLwYqUdqbD2ksyGgbHCqnZPb4QHDgTibM2D3dap4q8qAwxwRdZ8faYEGYzq49jBLx7jr4QXKMi4",
  "key3": "3aUvm1aH3xENqH5itsWhDE1W6ijP3KghdrTjGZDXLqwPUxjCSDGC3W6fHUcWMHDRN3r1ztFTKmeR1F1kjdvsibvy",
  "key4": "4xPmyWiZ2mKr5zq8WjdTzzW2pve6Rod2nxWMv6KzkHhX3ZazisZKQMa6FqPhxRJKWQZexWBDz4Qa2DCjXKeKEVug",
  "key5": "3SXmYoCLFh22qtq3YWuLBYGBeZA17Zm6HjbPAXfgnmLqpSTMqYaJNGigtmQcYCXKLFNtNhYDxPfNvjfzGQvsRUtH",
  "key6": "5LofrgyvX9WKu7sfHhG4fyngJZf8aBpszEAdJdC8RvjyQ3CcDwoMRD2iZfPZS7twkUuu6bUCo1BAkQAXQCXDjcCR",
  "key7": "3zP3JqnYFYmk7FvxWQfV5MKetsT6ChW1so8jXFEBa4fhxisisjmp124Qc3yd7JNRQGbL1fyNP3xybQBuwgbXCWCj",
  "key8": "JEnFxb4vJryxXU6XeN8JKdfPRZjxoRZHgVmFhFj9b8vz31Mc5bJwhzzNYYk43UXJQkkAUwWkBqc5C2QFUGnpZkx",
  "key9": "5dcQAx56Srh6xU8VNrKTGuqZtuQ6kNeubairaejj6ftYRHtGixTbvCV9fNYcpidYcpQ36kbJqBYhg5yvyjH2opYw",
  "key10": "2tX6XLkYxc79M75gToo45RU2s8aYXmF2FtbcNFZWFuSAUEtktv3jUZxdSRPURyBzmByxoz4sSvrnGx9L6fLczVmk",
  "key11": "4xALkBuZRj6ZQnskAuhP8KXgqJ3xNvBodcqLLaXMqU66csKgAGHg2eB4tLwQkBwQ36wo1hsGq5GErviW7fputkK8",
  "key12": "33h7LsGbxzg73Rv67xf4wNRNLs8HoYtGeukLRtSqdDzpV1m7CgmsxG84mmQfhGv4b6uHxxsM4L313kRiwNfbNaeg",
  "key13": "4bjHcGtUh8VWfKfoQEa6Raq9qmqcPUfqGxVHb4UpHnhE7DXWg9MYAwZcWtvVwh6gyXvYoyAA9DUPbdXaZKc6WLCA",
  "key14": "2RpPF9UJsnnQKhh8nyrT9huhkG8FYsGHchgzGwNuh5dM37f8fhmj2RGgRqgEW2CLeyXibtmkz2ii38wbTyRryLfR",
  "key15": "4f5ZQFAeNVkjvwtetHBaZWDgctyocyKdg7iJFcJzJ7Wg5SivxnifjeVYfLFQBLdxQfqxEikhoyXQwzKvadaLiARS",
  "key16": "res3kuJJjgyJRFZ3RyNrM2YjZj27JYYD4aRXCegUGyhLe2Tr86P87kkJrah4JaPU194B9daJbUGX9RvsiMAXw43",
  "key17": "47cGfL4TFEEEm1XGQ8hPUTSMtvaNPpM7oAdFHSYezikNVAuo3QKMZj5SkNV84ma5CKkW8ovpDWT9aTCijhydvnvF",
  "key18": "2cvwkegPLDf4PEfQ3opPaiHa5tqfS2wYjhfhX6TZ3KEB84g4336JPVw3ncH6NVhQZDSYmBxEw1xatMqT7qHZGqNz",
  "key19": "3S3fuiTPnEKaa4NNrYT3284Hc3yYM6buGtBYuyfppGmRrv8XBhF8eLomNaTNGPhgqLdmWqpmg5uZp3NiEaDG86iA",
  "key20": "4PcCnXus4MZ7ndajWrx7sNqm4UfuMYU66F9qAozf4qrZ98JCqvXPaw6saWmHaNe2TgLy4W94NGW4NNzV7R6P7FP7",
  "key21": "5qhtmW7pCsaLDCQoQPmTSAaNabBxvCzrWy6mQ1TW7jCKfTWjQTw2cnvq6EnbeXj8VAnvt7r2kDRkAdxM6PmXz3Y2",
  "key22": "4nUzzM2X33ZZeVNA56CiS9LFFnb9ByaGhtUVydodRTW4weJp87NUZCKGY74RaYQPaFpC7vVYKJ7uLma9SkxUDSWy",
  "key23": "KnPkYZcmB7i2pjMmdh8DA2jy1Th65umdpJGwuw7LysRBHLs7ja2kkFzzEWxWwb9GykqMiTUrRfpUGnfs7bpQr7H",
  "key24": "7SA2jiqN93t3sgNiagZAE36ExyRiZZMLVZPBSYtg7w1dnNVZ7MFzcHZnYNjNiz9E13vRjgJV4RaGbD7R8KEtMRP",
  "key25": "3YFKBpeFqofPSUd6RGgb1HBWFp6KCrRaodBpPATNgjTG3ZmgQLm3q1A5LQReUYYN1xmJKVXu8z9r2hgz523HTo1U",
  "key26": "qExkJsJ5o5KEN85qZrV1hyMARoNGm3BdZq1e5uwd9MBwvGJgTxFJzbGHSkTuSPWyKnsNF4JxZ8cGtBqT6osmp6j",
  "key27": "4EzeAGr5zBwvzFLa16auutmXoNT4BgU9r7DQWipKKF7rMpNd9Ysh7a7spGDjwFeTbR4c6Q2VJFXbSQ473AxehK3c",
  "key28": "M3HCpfMNeemBX2G9C2jMWpSm1G1nFwYgkfPCkuN3uTA3BBwMD5WgJK3ERyqf6CNoaSDPNW5atxrK2NLBb39g8eF",
  "key29": "3mXiLWqFku5nnhbYPw4p9goEF4NzPZopk7yZGcT82JiLv9GTTtwK6m5adgiBFudVsMvFFWiBq9koK7AazrAwL9pp",
  "key30": "5BKayqxKbmBUki14fZpRdamGizjv6qXKHwqwVV1eLop2Z34S9Hta58BKpEFNpFJAP63YP3bqNjfKbh2gbwSg6TC9",
  "key31": "2aDx9x2FpKs3H2MRZxxhV7rYq6PvqfwCSJemSWzPkL66T5gQeX9EeLKHs2xWAUBQACFXW8gnEkL9J1SAkTXttNzh"
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
