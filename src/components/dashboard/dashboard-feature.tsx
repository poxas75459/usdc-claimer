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
    "3jiLv8r1B8aHAj7tUEGVuZAy8bcyMEPKKaWSRowTGrYiBE5K8NGTe2Mr5VvFgqUG8sA1dZYN9M1eFWeGodKPWoA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ofbnAiP7gL9unrRQmbt8wZq3QVPDnZhcLWvC5dWqCTVWJ5CPjBArf9455HkQTnaFkfBFbeerVJkEw9QzBKdoM5",
  "key1": "5i1i518rcfTrFyzwaMqEQagsSLSsGqM14uX3emG4WFyVJ48CcMUsEVQjhv6i1BLcGuM5EucqDj59VwNwXKomV8kw",
  "key2": "23Emw6nFxxhgwzg4ddiZRnexczMUqmKPokamhvNBtpaatGWM6S6vAwP9MJHHVADPWnYQDkAy1nFSEHiDw3nKxcQt",
  "key3": "4U376adTsVLiYR2x3azDCvwadJZ9DmmNuhbxRuJVdG6wc71KBZY4ZwpCpHaBagjGdZzNtUG1dk4e5PbkYnQRVC8p",
  "key4": "5CReSh7hFVuKHUzLZtSo24DuBNp6oNNANWbsK8R1uhfnguPvJXtYTBW3N3jL65iDzbw1LCSfsvPJdodg6yBuXkHF",
  "key5": "3JL3HWQhyaKb5JDFZPtHgCAj4g6JKj1QtTmGcwaqtYuH8zFikhqPnz4kKgJ3cHKbn6GQ4JyhXL5waMQa3SWkB1gJ",
  "key6": "3mmzaaqS9SvPsMkXj4v2UN4AS3dZ6UurL1AsDnbBndv24Gx2cJpKub8TaobMhv9SYnQydkZRRgYAkm7TS8bMr1Cy",
  "key7": "2E7p9837CeLWXAvFHze7t4zym7oK8kL3qVmbcgBtrwYw9JCvUyF8bftreqPG1A14jbyELTrv2H62besuoZigBse1",
  "key8": "3XxoQxf3JcDJN7kGKzeQF6MS7YqDokPELN3gWuGwyH1onizeigF4AH4s9LUMFFfjQhiifRR1Hzam6TpPyqq46i8i",
  "key9": "4PEALSpK9uS3EufVzZvfS2sKoZQA93NoT8JuY4iVK4RvjRDZmeVx8V4Ff6pkNAAdTgTrzmXyXQmFZ4F4c5cgQbNQ",
  "key10": "4GQm6kGPR2zVFkZ8TaWHhX12FFAUVt8dbcfcHpzGv3wGvJiMQxT9hEgtmZjmDUyLLEqV87tchZRNczzbsg2yG7kd",
  "key11": "3EjywLBZEv6WMxNNTrZGD9JM5mMSqvC17jYcS5cyV2y2m8sE8yBwuCc6EhDHFUkYXiCkfbxzFQ156vTRfFYNUPEN",
  "key12": "3b8ESCm7d9HU1w9YhMw2K1irtizJwVk92Fi6gngP6s1eX9KyvnaYFLhRUUzQwEHPDMUPWtHBXM9PN6uTxkpGzJrC",
  "key13": "4u1ZiA9zC7LhR1wVoPbfV4QnQhg9uUcJokxBP3Yt9XznbLCVMV933f97TzKgT3vuR5eT4hxp7KUZ4QqvySpW4Gzi",
  "key14": "2yKqdk7XpngrH6pM9HcvpTWfNSPiZ1TU25bFrdv5uNCwkasnWJaCe2QFo4FEeH7P1nDDCiMWt4gKEQ4Ma8FuSNNN",
  "key15": "shaqe8j9zPdgvMMUkVFGG84pJ7rLnanBhhDXTWybc6bUe8poDgFZ9N4o7iuqcrCm2oBG8UmE3F6jD4nmrZxUi1S",
  "key16": "657Euk3pCUcfFds18tBb1SRWgGgoYNwwyDTDo16M5aoRmimQPpexTEHyJgfyDDCAL7ND91JazJFVHgbNZabMj6oB",
  "key17": "4LVGfSPC4fsYUkzXkbsc95oEtHv3asBHAG1oz9nwZiGZ98ByiLY2GQjeGycVJZBZF2vphdWtvMKbLxfHdct6swcu",
  "key18": "5ihwEJXe3o6sV1YC9s1s97qoMHRhcgp8j2yZocnFeL5QLjNAdRAMw21fqaqs9eqLRPLZZtNtYgBz5Re56ua3zPN8",
  "key19": "1ytWatEc5mFV3b6KXwsabqyVrN7m4cEBLNgW6uYLrH7Zr5M8igbuSbXFmv7Lj8UjkZbcNmTb8VR2iStkLBD8gFs",
  "key20": "2KQnqkVTXFr2CN3idQqGv8WqcgSUQetNzosmFYY1A73xQB3nqaScUjtTkyiVvuZoTKPPP6Ek7xcjj5pMin7EinBa",
  "key21": "5Tj5FRBiN34o4R1ypFDmv1g8U9Un2bMpNjus6yJTivWQvH3uZgMUz3vugw9oxtwAC4Yv2uYpdbEFqu28jFFqb8zX",
  "key22": "3Mm7f6i54jscoQrmCbEmzpoxTfhQTz1KSmkRmaiMCU53Yy9hjsfsQVfufQJGqzDLcKs6AH5KX9coKNSU4Qqgo732",
  "key23": "3BSP1iMxVvm322GtLq1Q65Dhr8FGfSoXHyij9NAfVWFAhTjwY6sqHUumQikUxor3ATjUJ523FJuYMUZvieVq51bL",
  "key24": "DTTYQdPXZaaU6M73TXGfD7VMUASSHpY4Rx7kdit2GqQ5ZnMxmtJ3nygGifF57uaTxscdLAn9NDQbtgqChWFuRQy"
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
