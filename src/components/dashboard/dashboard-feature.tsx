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
    "5K6ZsveiuCCFMyjTE5ANv3FmyoV319UD8YQUxkCKcUSVvZrTBfR8u78gPwb46zxveCjSp5ihRJmZxGTi5UZXS4WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHerZV3oNqJD8tbKfvKUyNSLWKoSJ5etMdXVo66y9JbQc69bn8gZM6QQ32vsjco4KAUzweBBrVqUHcLeiMvcvpY",
  "key1": "3Ayf62XKtRRj3m4kfgiuuKFxx5V4qD4NFPHbmyfpP5DGbWg1pAdYFgqDV7jDwZ5wCELBWhf3gkZRadsQPfhJ6MSk",
  "key2": "5yXVxFC4cS5qN3XSvJvzNmw59sGvAHiHHbrgxEHSUgaRU5sNJMxukDzARFksq4d2vbyFRTUtufT5uNkpfYBJpaPt",
  "key3": "2fgkyRq1s4dd9qnNNFJ8YBDyZWJ3Kp79xn2TS5d9Bd5cKFmqAiWn2uJbWnzk1homHtdLejL1TUPdCZVEkkZo1piW",
  "key4": "2jMUN825nmp4tG65BJmWTRMLwSqYfDzDbmtcjQDuBezYuJQVr2SXXKEdxobvFdWiprZ4kfgkYpLpv8nY3imq7a4J",
  "key5": "4VCsPBTgd8qRDgqaeX7Th4654nZtCcAgjzopEEPhS5T7wm5eckxQNYqgj1uPZcnmoUCx5FwH2F5xeZBTt6rtfTDp",
  "key6": "3RRQLDHcdQVxDT65Y2VexShTUousGsQVDokbB9MJo4uJhD6p58DAt1s8iCnXyj8yq7CcHLhNqRypxGgzif58u3Rw",
  "key7": "ZSUBSZ3vzNXWuFBQ32bSTYP8tbanW969xWvzuD4ZcskKxrDDp7pjBnDAeud6DX9QmARDEDMNqEj4nqcR2KYwVJa",
  "key8": "4g8i9J8QLiKBMWmjmUXUUJ82MssfDmHiZ5FwAWpzr85Vrnrhk4eGiydPEPxBFTHTvUgyVijSg4AMLKzCqFSM28Ji",
  "key9": "3DskswTjgVBoNsRNyXhBJJNZcpjL3d4MLQRRiDAjyM2xNpVo473sUCp49E6p7aeFNBFG84CgvcvBKK7nHWBCNsrK",
  "key10": "67oyBCZovMC86ss3rnYdUGjQSKERaVYSMAgFb1qBZZseyxJLDxGVrVYNXHGRS1czs8xyAwDBMyXaiPnmM2vou6gR",
  "key11": "53TwEfQzPLVJattjR8taAQpgmHU9qKvDr76Y4n4aE1ThsDQ3PEm8EzbZuC3NMLnhayhhNsfBCdcoRounfFHAwRwG",
  "key12": "4GXFH32cP61rVHW2ZSxLp5ZYbN9n61EEQJqrQrJoyDswiMYt92Fd8D6ZgHHWyT29zRAjut8cb88DAfcte7vCMWaN",
  "key13": "4HpTZran8JQ53cZy39j1FS1bMvT3B3p6cF6vdDSKDHFSvyxRqUQfM232kaf1f94ycyvZiSdSMURJsghuYhTMV5GU",
  "key14": "S5pEEfMQdzz9HffGnK2ApbAhcL4KNhSBU6gddTdEKTSX3Y5bFzS779qoigp1VtzPjChcwHUQLYVHd1GNnBQtApw",
  "key15": "yKvu8hW5t2mSQ5qKCbe3Bwx3WBZCbdj5ySNn9kvebZFPYozRrqoRZaXmoQv6xRK53FcFZt84kjZyUSLgTnaJ84s",
  "key16": "4esq5WY9eFdfdLCvDSZmowvoVuQoZ984WnMB7TJYBvgScCiHUbRyh3bJnABRkwgjo4KGRDHVTf8gLfyr88mriWA9",
  "key17": "3KZFQjqSL9qJRhQufeiYxDKpmP2EEpiQCQBc3ngXEcVdZD6j7fcccvcJWHLmzCTCZFFNvmxNE6h7CgqNsXCRhtCH",
  "key18": "1QKFWv4R8vxmnVwQ8ndv76Bz7xEVreASNdDnAooibzyiDkMQUCBo7yHMLFYMLCjKjL9SoD9m6nwyBjAyN8sx6be",
  "key19": "VL6EsbYaHMusZFf1qHVRKUD9cteAztvdLpX4wtoYxhip9rYayB2dwUBqLoKcZqKwmtU8Hp87fXvj1AoaogRPJDm",
  "key20": "3ExExVZXgfcpvd4kBqv4CALzhsombJtmp5Wx74yjV7TSJCLDwZyyhMGw8qSmDHruFBkMh68fG8xgg9rNRqkVD53V",
  "key21": "dYE9xWDQoQ8KxR3u1aSbt6iUy6wQZc5AcQ6P1tP9Z5RTsQ7ERuDoUwTTcWnQxkT9PmmQ62DodyKUUpQa5AxQnB4",
  "key22": "2KNaBrhv5ypmiXH61GFwAJcUvJ4pzrbLo83h2ZPV4yPmwsu4r2FC19RtZayUekA3cxv7WmBHXWSYqK3zffivLe7m",
  "key23": "2nXivVJQaRcEaT11MVwNSboufys5UapBENj12Y2GiLe2F4UK1fASpJmVf1uw45DUQFFdXmHcaLwdi3uzWFcbb5e6",
  "key24": "3WsHViQrHGn1nsZGQSvSaY6N2gE9aKbVPaAcnwMmxuVEVJHkUgCxtkuw8HxrmmLPE9Dua6nx6N6VTuQ1qjRvYGrW",
  "key25": "2GqfafoXbnhnPsngjKhVR9JdPUnTitWoFUmW32LZMuyCh3HfkRrjc3Aeh5bTe2KBPMu6CdcXNt9vGKQSAq8ZxNo6",
  "key26": "35UvXff95onRf8pKa1fodK2GE8MginKSBnWodbrhfzSvhxZ89ajvN9mbZvGxZ6CdN3MYjCJJyvJTfGtXjeP2eWa5",
  "key27": "2jixKSTBQ115TFry6ZCBPyotGMdzHDZ55GJ1QVmtsYt3NoRXtu5h7xnNdGvXhgFtYgDA5xtiBSdoXBZ1bGtPs1xX",
  "key28": "84jAENK5BW9sheryddzMuMDqsmWMm7zgibByQwoeujZ4TxhTyP7qh9dm48hP1pjyFNjtHsU5Tyz3yw3S3qR7YU9"
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
