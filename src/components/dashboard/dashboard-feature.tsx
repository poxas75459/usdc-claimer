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
    "5wbwM77DZjbMoLutitk7x1Vmu5PvJ5W2Csb98mh1Wm8wXYJDC4qjsTkQvHerTfgTJGa1kXBxNLhvqWpmc8ewW246"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh2hBUMFqrm1mHB1CoTmAtTz2wDMQunxEqEXs92zNjFUFYFzDWMaxRcjTEbLboEBZv8eQyWaW99EoTTEtzbhtBT",
  "key1": "4vvA5zXZF1GGubyDKKn5PoJiSBbfPRJwjWgbaRjPMky92acZjxZ1jS8yhkZauiMDynCveenxJWCLB4beSr65AFbx",
  "key2": "5Nr8fKWQxkW7caVB4AZvP6a2KBgG5ftP1cDCx4zWK2Ry394rGyt3qa28qnknNhbercCpAMSzhnfZKvy4TGieWRrL",
  "key3": "5F3hmRFaB2ggF2kBNqtcngtsv4D737M52pBwGP1jZhbSmr8rBPNnxSqjLeBiSMLBKjufMrtUeL6FAgUKKP87d5Qb",
  "key4": "29ZgexCSWdMAZLJSzRWoxXezEhS93W9QMG9hfL9VTmXMSK7E6cdgaavf3nNiiTKfk5QhXwes3shJFDYfueP7D2m6",
  "key5": "3Vo1G19QX2v4vFpMhZ5KvfJAQ7dFQYG9EscKMTaFeE56j8B9G2kBKrcpKUPYP3sji6a3z33PZ7Kt3kmjNFpi8qXd",
  "key6": "3KYHRN3iFDkyLmUq6ua36eu9KnFD4jq2tR9epW9NkUi4MUZEypLXm4DA44xfNunpnh6KnPZNyqyXjUCcVNPfY1hg",
  "key7": "2AMDEGwKb1LAJUF2e7eHMGcZ4wgNfRvD9C6f1YBtcN7ZBVJ8BBbvEGnrBh9aQuE9YqCtLtNTLVJ2MFVYmaUCkpZf",
  "key8": "3xvc8kYes2fq2zjj85mDeLzXKvBnZXoc9x4Cr8wAg4FhnPzHHEhkBMuQTyfYFBRsEb5msRHCUXe8xAfJDkFDz4Ra",
  "key9": "bviAZRKWEZw2ay1Rhm57Fg2FEoa6H7aJgbMbCNsZDtWE1XVJnXEATTufZaFVkR4JxpVGrsZWPBWN5UFykHRq5Td",
  "key10": "4zzWueND3KTgAXSf7vLqGuadE6jebzEtBVa8JpqgKhY9apJYBx17nJNwSk8rxmTgdB9B6ArvpAEy7c18HAm3eC7B",
  "key11": "2VEgqBTbDUqWWg31o4oeKDAbvDnL3MWA35gtvTt15MNedc1Ma8LvMBPVM68ucdoHz7mMxKqTxqVaYhHecU1ziSQM",
  "key12": "YKizYa7Jw1FzTMgDJ4WBxN9BNHyDBd4JokGoRd9SPjtsJgZXjLY2dq4kRBAdrYuu7yEdvB11SY93bKMN772ofA7",
  "key13": "4CpPccSZqLLDyf88gBZaFo7mBMbvgTprTJR9SD62SL44zyzQFnqoFFwT9Bn7z5ieCtyiEWgUZ7WLzKZGpwNauGkT",
  "key14": "4RSD7MQMZ41xeMCsKn7Z1UpHgBJY9c1uUf38tXJYrNFNAFSr3djiRv9w5RvKoPthbdrpT41BDPSF8qpDfzsBzLEd",
  "key15": "275KJFdxs5NTqpiEEhGcqgNUvs5ArdUaSnDcavkoDGnNjrknbXAQ1uUaK4AuvTCLstzoz7KGNEidqbMV93grAv7R",
  "key16": "247qbsDMzBQm6gn8JMEckby6zZPUnQehDHvmB7pt9mEkgE8bVxnSHCxSgLrqKj5LKXbQW3LZPhx9A4FyUC4tizoU",
  "key17": "2r7SQCXHFvSBR1HAhhp4VKWKbcZjPxSbTaNkRCkg5H1DUa2GPaZbkLBiQ8udxEUQ9DZsnbQxXuZY9HPhbgfgPsGD",
  "key18": "5u1xhoqSGuwUgjkGijJ4Kd2yU8QkpFMcpYn52gukpXB7S8PfnZZtM7haCTzfoC3of8tpkjUabnbbaXdkJsNLwJ3Y",
  "key19": "3XGXJg7vWhDbmjhLH4rDgYAGPCaAhgaj2JnYKzsk1VhztqsfLB77MtAeTbE1XytrKQjHSrbtRoRb3yqRFpXTsv1o",
  "key20": "4RfjaSJRgoA343nL1LtrzUU4xBzgjSx4ByDdFPheZKzgPMQz9DoPvTWoy2on1B2yx445TezQEfCgg9pHFmoia42R",
  "key21": "24vcYx1NzK43hor7znWCszZJhZWx34mkzQRPqq4pKizH5EYjJk1872Lib2KSW29i2pVX75brt5i2vbqbNhMw9iaW",
  "key22": "FtM64LEbNpvccKGf3n21rxZjMEUfpTUKghkJUsmKep4btQ8WvgdWgUNPze4asBRth1xnAVqtcwYSbC2oKMJW4cx",
  "key23": "2yfVmii6jGHF1USKM5GaoFS4oZGMu2A2J5BFhjPb44zqoddW1Zi8xqT6V5NjyCTfxMm7e6KpetLAincc6NYy3RZC",
  "key24": "5awqP7G4DXxDFgMj7J9RAfaf8TZ3QXrqszbmFhbR6Z17M1oNwxTErAwZxir2Pp5WN2hJ13oYAia2NsEfh7ReAkeZ",
  "key25": "ihKRTUrCiaAueGP9i7H9jLWuSPeLMKiWUCQ47nZcPr77oAfRNK2wGdUxUuApr5X8bphQHJnz798yXfQ57c4yV9b",
  "key26": "4GFvWy2GdaAptuqUcSNVYCLibzZVRXUYPXvV36XGvrZPGNKMJiPrCzdteBLHffV47bXupWUos5DonezG6Li1gEiD",
  "key27": "5TuEdHftJtyJpgopjVTj9WsFhMqsNmV8JWj1GhGshKnndN5LbUTLFBz1HUsspA21GmvEG5Hhjkj4C7Q12Wgcrs79",
  "key28": "4PmQcnEH8jHdA9wWB1fm9o3cUZ6LeKjRdLzEuBwZe6GpBFGpLUhB7nc4sYP41esAkJcQqyyEmFy1dSSuRSEUjpRh",
  "key29": "2GXXXqcJTSSvQkRnNPsJgtMzFzAucxU5ChSxttmGbsUGRdTRdRfEpwVvPLMvZ7Xypcto2BKu2Fc33H6wbwrPbQnb",
  "key30": "61ie4UgifZhWT1eSekyZBXhk4nLUAyw5FaxHfYRWJsDj7FAa2wC9EKMmSfC4dtgeNQkDCm88958fRo5hyFTxW9Yi",
  "key31": "2Eq2ziFdhtvKZ33C3bbeMY5pswjmoLxSsqwtTiCxJj88ov8NhtZfBWVC6Tt7y5gWgryZqZNNtnojuPgNbxoaUcFj",
  "key32": "tieofVpm392MZw1UYDSFmt4deAyxNapjymkcMmHduBxspgM6BEFxcY6hqX42GaMLrCayWoJL2HJYdrsxLXMNMXC",
  "key33": "3pFxmpH2JbNcvNY6fBTUr4wiJQqYPaFaMTjBbjavqy14xPMh58ZuNfQzXCLDFiwdrU1yvFN9GVaw9mqm7M9DbCbu"
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
