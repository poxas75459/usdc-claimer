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
    "5nYma5WjrtH4GZuyiUkn3ZCxfoKVRfkrkRQrvrJyuQvffLrwq1WrycvTYZTXnw9J6QDFZKk2gfRY5HGLxPAiPfzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h6DTXqifGjqg8X9CDTRUfrzAT6rgdp2a8hKpHPeGPGALLfxHS2gmixVkS5zy1at3qTkLwJigGh6RV8vJrXgZBqS",
  "key1": "3LyPpkbJkzhJr1kEf6PftDodBpcKShswrfv7a41EvrT2Za5xacUi4DWkRqtcfeJZ67VdwfszjULtk5ojzHQCDMdH",
  "key2": "2GbvtjCX7UZwRzSdaVzBWb84JUYpwnJ5CmghVjTXhgKp3xFWG8CYAC5ZXra6rFtdYyu6e24nq69sajHM8mdQP21R",
  "key3": "5H6TbVjjQPd4SGYrq5nS1u5Effuvakn7zwiu4sRNJLvDimVWinQR9HeQqbfkqJuS2gniqLaXBwFCWYbZuzfDG7cz",
  "key4": "JzpnHiU6oJMghr43mjHstD9n72jXKYXtFnn2LHT9dv7Gy9WtwWBVR6MtwYSphHJQ1fVbtshX3zK7vBp5eMJhc5Y",
  "key5": "wv8fotz4LTwDAVBgvEPz1wEFzaXZsNQpWvQNLDETCCrMt77Bqok7n15JjHs34eXUniJciGxKYMmgcnEytLnFKpy",
  "key6": "2R28XEWVMstnZh7kwfFoZrCQ8jcCaWEev1PYM9GqQpDVZMA4P8hGVSxfpBDgFwf6HGYouWCevuALWEYbxHUg9mtL",
  "key7": "Q55FSbTGtHrsTDB4biyRYdA5ZgUBB15nXykXP3iz174nF9SvB97mexxJhQETWE3P62YZJFz8xSiMAnJg2rBSUmj",
  "key8": "3x7HCiFSZkZzib3w9Qm5SuSZUh7mr95pFcGzeJgrm7NQHpQQUzgJyx8WiueQgaVzjFdHMPJk9mKNpY5G5DKd1oer",
  "key9": "4aefuB8ckBQSitLT2x2ZrR4xxfjDpNFbw9vAkNQKEvedYsDfuVGjY7bLjZWYACvh48APtk8iBTLWdmcZvyiXoXer",
  "key10": "3BQ3VBRdWqwir7PzheQQRZQV5X7VBEiEfN2Mc7TS8YJhK3iaUtLtBfQqvbFFLcxyqqM1vZsT3fTsux8Pni2S3Uzs",
  "key11": "2BDcYx8GZxkwF3XJzphdyH9X2XSEZ5V5HpadTWwQoqHRH8WrwEV7FihVLFkkjkt57Y1wonicvdR6zG76ew7h4J56",
  "key12": "5KbMHkUzJpQRxRksq3Qs1U4hs9Mm79hYF2RVxNBptw8tFF8ghADfEGFaHdhjGTDGfJV7o5AwbHXMCXKMe6sox6Ui",
  "key13": "Yk3U9Hv9N9WiFt7FoDGEmPEYKBGbLPDNrnZBqfqGzry5WSaxetvPZVRfrhgc9YV6k4xWUgaiUadjNBoAHRcRfLt",
  "key14": "64PfMH89H3dTLqd3AsPCoVC5SxwzrFZevCye6me35GhgfTbBnCUdvutKagzJLaijBoX3w1aRCvyHQKFTSSf2gfxw",
  "key15": "hVDnNp5KDzYfosrggAjsagvJL5DkZVYz2n7fYUueVtNMzP5pkzUs1hxGxqLixFQkrdMgtPt8or5Hj7wkzcazVYQ",
  "key16": "3NtXsBamvef9ZZTNSnx4zUU3awWV5yHeHPAGYnn8LoFKSu3fqvAJXKF8uQ8c397tvyA4wADiDUw2aVKu4jJpHuNo",
  "key17": "TD1CzKtNF12akbP6CbA8AuAykUuobt29Jn6gMGqngRgtuDU8cUxTwMC7EbxxB7QHu62fYG8r67cXF7abu8p7HH7",
  "key18": "iRxvdVkCukjmdQYv1CqSdVQ6VMjNz7c2azRLTYF1s3BHQjWtBJE7BxgGPBXvCivkbUATyoLNyodxrWziyQNYNYo",
  "key19": "4LdD9tw5B9S3pUcstnhoAmnhB3meM8PpNTkdtBZ9qjvMFSD8rZ1bq4GssAKVVpqtRXKcjTYVGZxP75VuQs9ZvLXv",
  "key20": "3k2mehhGA3Hj7gRYF6695v5D5ZXudgTAN8RV1gF1V8aMHCDiKiNXS2pX3eFcE15fB5erqF8LZFWxtmR9n55ozXmV",
  "key21": "5cokzRtDuM5zXxYKMLQ2oTL7UFxPzLELHYmysgM72sjGjKD6aZnuSS1og26FHrkdttee3MCbob5tawmVGFj19TVt",
  "key22": "3yFiqEDHAWFfkVk8m6vxCMb962CfQnaAq2xSrL9C8CZpp1kVGz7kzHDP4EFtutmdfKi8FYjHG2tbv3MjoYRe1Uwy",
  "key23": "3rTQExXw6hqwTLBPrW3TJfj8fx3NrfxB98f7ojAEpfMpi4rpoeetPSACqDoCVxUhsBGhnz9JrScNSRS7c5YfNHUY",
  "key24": "63LWuCLcRxa2r1Bvhurktxnog4uaS5Z3rKayTbiZd6DxhcHjhX6knKNStQFU9FRjHmwh1Ts3mHfXWNVu3jsS4ydd",
  "key25": "5sVchS1KoKqptEL9KEknFjeDi8WN52e8EzrY5rkUB1qQZgtTChHwiTt1wxavoFzimGu1VwBL7XpKNNGePn9PQpxQ",
  "key26": "trJ865jJL6f6UKLs3E4gkQkDsjspjkNm3Z4etjMwSmK58LVpnJApTgobytMSd1sMJ1HfZTr57sFBVHFgRS6r4ce",
  "key27": "5v5yp3fHcgBUPUcqruAzWD5u5xJeEgMDaEzUneFZJUenrsYhpFJwbu4MEjeMySh86NitHGgvdMu9n2RrxWG3Xb9n",
  "key28": "xQimU8CkmZGLjjGBLKTPYjdM4SJUdeQcUATDp3guYgqR2BPncFLP9NxXPQnkV2BWegQSQbTGeYsQAPhNkGAdAbK",
  "key29": "vdUuW6FEfyBQ9S5mesi3AbdEZXkNwLTd5GCW7skMkBbCFqMV4rNeUpbhFkAwg8LhauH3qKgWgrhp5zWpvdyP549",
  "key30": "4H7zRdW7pR2m7zBFbvLSpqhje5JvKdZHZua1bY9rY2QkKtZTqvateZnpb93wSZ9HiZ1DsSVTikVF62fLJ9SNeE2u"
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
