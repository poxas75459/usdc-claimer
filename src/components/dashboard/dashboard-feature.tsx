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
    "3ihDqADcRi29fCyBbQbLSVoXc4ZDsy5wikum47HmHGbTvMt3etTJbB2xWd8vCSjr9zVPnmosWcizm76tLXwv4Pfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNVF8SmyHNtoVi1kHs25kVQzkVHLJB4YHW3bLtFQyNZtgok2tokjCkL3HYC5t35jqd9p7Mi2M4MUK9b2QJp2RGv",
  "key1": "5PRbUN89sFQkQgp4Uv6M4GhNMaXFk3a7UjBS3PQ7sqUzmqKANT8PuwJZ33LjThXfc7BSPTf2c8VbNeHYDcHnjR1e",
  "key2": "2zgs6Ge9T24uSLysWnpVHRp4XDEJtYH1zTFPegcJY46jX1zybLtrf2EY112NUfAcf1SsrmB8oAkgtNDSS6dbQgL7",
  "key3": "3R1CWdAd9vdJPEawbb9P6GLpoRmVXHvUAMeKdjVmQgfU397WeL9yUsb8h3Xjij2sLmZfP9MTnKFHhPa3p9tfVgkj",
  "key4": "3rStjvLUXxdAcXiRGpA3wobb1CJnq9HF5ELEnJJSRAtHMpLqz7GjUvA89bZo8cWnDbKB9UR7HxKNZ7UKL5qwwAqJ",
  "key5": "2QXuyvq6ajswPRwrJo8fX6CsBjs6PCMVzvKTodKrUJDz9KFvgdkS37ayKBVbEGuC6Z3MRQFx5FwKRTEdiekjPyN3",
  "key6": "65STsyC9LVBr9V7CHVA1U3WECMdXws3SZujEeLqKvpLnx2hUM7V9vnZb85rGKNMecWkHz6RibydV4fbTsxXoN5oo",
  "key7": "64ZNSC4Bw4jSZvUMn5q9ZU7w2yP82ALH3DqWHyMR1S7WYk18RcXcmp1KhEf7zX5CkmF73u7aXaatFFoCFVbyiw6B",
  "key8": "2oQPDBt7ihRPMo8Ub9zwf8QGDgR4ajPXqdvbQhb59Rz8nrfeQSzxXHZw7HsBaMEhKfF2UcdJcjhNHjK6D5EZTB9L",
  "key9": "66VVKYimJXf1rQWkFbFjDTbBdQAEYrZKRmj7aiQkpyU8CFAPZKp9qx3ckcoiJNZ4EL1i5SQaoc7SNR82zgoUjY1o",
  "key10": "pVXvxVPc2jeDjb9SVwvY4xHK5XmtMDyedrxaqR8fHBnopZYmcXQEmoFEobsjKhjXka7R3rEEGmnzmqQh6SB3yEb",
  "key11": "5p7HUWyg6MQbYx7YBeSjjdQxkkZyDrx8KQBM5pzfrGqwpZ4cKsptxXVS8UrBhj9DBmjgYchyXKeyWasu3Ez4Dtyk",
  "key12": "4B1vgfQvheRP8UngNMDk9Xyb1HgQavdE8R7VH33DYCo1j5qqkdtH6UQccq9ShZuSGx13MGd86vQqJJSmNnmDsz58",
  "key13": "2vXBmubjiE4nW61qvBCFjQoM5yAZkUuBiuvomSxLErsQTc2U2UkE2imvpe7m5aJExBQ99J13EVCGfGXtiVn3amS4",
  "key14": "4jb6UDL1ErZP7bzUm4h18bu6achMkViqQuud9iThUmwHcYAFfnF7bUp2zgd6k4sWZY5Dnjz4UzkfRDWs6a5iCeSE",
  "key15": "8CLvy1U46JSAv4a859ffgAMboaAMspoxopxgqcCmfGEgsA7rfh7CCxs6dKsRkVWK4Sgd1fh8irGpUnJw8at8Lh9",
  "key16": "2SDVsZKwQiDebTezdvsa2nDSfmygPpgbW8rYdXgnqKZMKhcKy5bQ1jxFFwU6WsgvVvoWk2xcfwi2Fe54HPMQtFzA",
  "key17": "2EqVndwGnuZrupDX122BPuzoGps1yJkSqvzohv6p9JD4k5ggAwygqTrZWKeY4oTBmHK7673KrTUD4e7bgWLF1TZE",
  "key18": "5hauhe3XTSzb6S5wYscWTJggZ2PL32bYSPafq1e1253Uw3b2ZBviMi9SLkCWXmPkgb72ZBXkEFB1WsZ8TtotmNct",
  "key19": "3aJ3syktmUqS3ARfuDgLAYoXgtzuJug8syKZcnsMWuZZdgDTzedXAFC3GA6kRGYyPSfVgPheERaxod7kEJe6MpKb",
  "key20": "QKr398KhGiLCXKudsLXZ94SPsBhUKvMv5jj4tQLdtki8ftL7PmokePgUi2hs6FykpuQZU6QWnizVXDGG8QQn5qQ",
  "key21": "3RSPLNviNCfArND8RCMaAR9jRd1zUZxBU4zokEqjVgpzsSHMJ9RZtDA9ba8k4hmQcxwpurELMHqjHGy7TW4yVosj",
  "key22": "44ZpSATJGsZ1KdTnNYhEHhtsF5Jhi6Qnp8fqqsMa9eBgv2Cxf5LXA8vwGatRcbWhjWUi7TRYsd9tm9zHJniZux4k",
  "key23": "2BhrkX2W9YbsjLSGunmogq6KvEYgB2XwfGmCmRPjnrVXEH5tXLDLrRCvyGiQC4bg68hpUSB4r4W8UzgC4UFwZDvg",
  "key24": "617i2sc14Tby75RzxaqeS9iKtx6vPCQTn7QwDnWvkxG3PJFbduGwtjdRdTRpXMyCRo6RWRN2pEPa49fXXVL9d8pr",
  "key25": "3cMucu7zimYPgGmjQhNpYa5SG16c1AC8DL113NJPq9KNnShjuYXDyD8AW2tLJqfSKCcHcrpPXqWNPJyL1nsYMQgi",
  "key26": "2Evn4Zk6C1NmiN2sgXxBg8H3JENJtygQ9ds7mcRqNkQtDh7WpxZ2gWuaPp7QNMLsMTkrqA3FhmtADoLJpBLmSkv",
  "key27": "4YztVTpynkrm33ZvtxLySwdGEN9oKnav1UnyX6irQMM68iyboWCMSvyASFWUR8xsUVP6mLCP5TKHqL6QaBrkd5Nb",
  "key28": "a6gk52gdvu8FFdrxS9UZyAGzZZpvXKVR88RjC3pogaHC5oBudWYwczwu4vJjyDxHdRaMqNTio241J2Q47kgwgB9",
  "key29": "XwthRYhS3g3gy5fgscX4sX7obyiyai1p5jtV39J69dmv48yKRwYXSEoeHYGgKjVL8FuA3ZpaP6vYJQJh3hwVAzU",
  "key30": "21tEdDiWVDnw5hpfJoWhN5cX2RH8zCvb1kf635qHyBsZZtAMrubqiBvx41QV8kJEJdCKp7TBnZqoGyGnw8Ca6m7U",
  "key31": "4rropGHm6sJQM2RRW7L9Aq3GdWY1dCTSZWMCht1hX8f5KH6abYrNdP8n2N7uVu2FMPVszsa2xNJZJbHKe3cgNFLc",
  "key32": "3maJxf3zpzSF5qCDapytW762BNq6sGaDV6wd7SD6nXNZ8WiKvcadpda6gpTi54ZQqpt3rwMefBWrjA7qfz747EEc",
  "key33": "4VXazgPmVSy5PiqgaWX5BpWRhpPDL7MPJq3tXjbh9r5cJEs5mpZZJaC8snAcU4pncTwgyoz2akHAKkkrpyDvhpaW",
  "key34": "5jaD7yGYj31nfCk3YuQJBavQJA68z5HWCkeDuHFLHvsnH2UP3ZLqpS7DeRPAqEgQ4m6EnkK8Mt2BBP1uYbUdbUxy",
  "key35": "44NQLXJ6JRv1wXypBMDD2u6DagMi8g1J8T2hSsbT1Bs98CTLfEE4XVZfEHVjXxeFJ1xeoo8W1ZWzyC62HygEJr31",
  "key36": "1oCyG3N7PPu93QH8bXdxUwF3fZSwsfF3JZsuz8JfxH25SCVotTVApVoaciWf8rJ8P96UHHi8QFXUEz6Sf8njWEx"
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
