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
    "3TjYAUaTW48eyTufWQfVjxaH6PS33LH3TatTN1FWkyppv9P8cYd86SZZUGdUea995DeTFRZcYCwT8CLuQxZ5n8uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgV1RcMXp5z5YPNoWbU3SbHu8nQgqV9qavkwarFCL7H8EF8r4wJ5WZ2EJWaHViqVp7eWFrT4QqW5LLffLrky3La",
  "key1": "39R7KU2b19mkiqtRigj4RtjWrVbqxFZwfAoXtm7KnHMWQj47UmBFh3Y51cwch8yqxv4W4ukkrWtDRfdo25MJ6L1k",
  "key2": "5HPvzSMwazAnKBzYJJn2JcgEgDeht7MPEfZQQ6bHfrH9JaDowcnqhwheGPZesT814o73BBm1eibzyrByNecn7GGy",
  "key3": "4Jxjiyb5kxRmQUjb78Ap8jhooNCdZYhPL6KLcFFQ1dd4QtXQ34fxHWxqzdEzikS28ZD7CtxxDh5EZVHrSfXD192y",
  "key4": "4zMke76R9n7QUSEByxh6bShqdaUMee3DrRzax7stKBPJGgudTLDciGGkWHpvnEXMYp8CmTyQLirQp9LnR3piM3fL",
  "key5": "4af5KpfLekLdqUGgQEpkCNhQDLCbrm1SXDPk8NXToAwWFftGLRaSPfNhmygtqJAy5A2eJzshSVA5nfGyRFxLX7gp",
  "key6": "krTD6vXYooh7VnpZ9kkKirrCAkmVcjJeFyHW4LNrAPXLoBLYTFEJKp5S6WHFNh6ffN7D7Wg7rhTAUWRqkfbXKJm",
  "key7": "2Eau7RSJfXD4NJZNr9Svy1d1NUDzXqsMCvpQJmKHUxsbVunzvWJj1s5JePKhMYcJ6dtaKL8TEjgfWNVMFy8BCCJ5",
  "key8": "MphCVhjPQZS5Ac8b3pGGghRfx6r2cXVoS8xd9gWvYr3VVQ3pZguPiUh47o8BMq1BxuZ1gz8TpVmU616XPBToX1u",
  "key9": "oQmbtJ1HPYhWsqyr5DbuXi35LBNqH5PSxWsrWnNKARnzcVNvApgfrGMMv8oUBNqh4wo7gwXgAaKHzKKVdVaeMn7",
  "key10": "4LcadrUJ9x9XDQPdiqejNtkk5swXA8jzRmP1WR3YngJjKVYHySEyi8Q92w3B39pYuj2ERsdS6UEP2Bfey6CBSGWG",
  "key11": "ZVdN6ZeH6YmqUW8NXKqPEkhbkBi187KPH5svX4HfH2wXm4fwXpohwQvpobHLnLVYpU3NFvz6inmRrhJywULFqPF",
  "key12": "3XFVbTCvg4XtXY4kMgo7eDgP7FjuTK7NUXeMviJwqnTRUBLvd5b3fSWjzgiiEfKRoZNtzn4FVqfCgG6PaFEN1ojJ",
  "key13": "3DjaM7d7aMDsAntpa1Q1VwtGKxZdmHuGkzcWu6gUjGTTEEa1XtWfkJ2wrkEuC5FyhjjzJgmjVDd7GhCwTZzUREPM",
  "key14": "353uXLU1UPFTMVNhUjvzXkHsbFSuDgNNpCnWhCBS4jGv8enBz2w8PcLSDssyJhvHwewj7rmSjuEW9BFCYZ69W32G",
  "key15": "3pDg3ZNeMcKLAkann5LeMVqRmEbB5PNeDxdS8QWQ3EQpLXbhh4vrjMr9kDYn1wvJjKjkYKnjFeRWJ59k5nfyMPd6",
  "key16": "3vnCBNYx2XgsVm9UTmoCwcMjtRh2igmm6mcGRt8uESwbZP7krk3LxdmxxJLWPDitrxqkA5BXJXRSNJcsrs45eiJE",
  "key17": "nTWZCYwUxa575CbNKw7BZsKskets229kSGUbYjbqR7yaR9VumVELWBFyhL5SrMokupc76xH7jw2KS5fzoJPRPpt",
  "key18": "65Bi9m82HPM2kJs3ptwMWg3aXTN9ABqSAUVMNdx9aqPYHmHk7zhSHZ3Eea7BGbmjnUA15uVpLossfg4PpSoSyVRm",
  "key19": "3Mm4Dsvyp7sanhpEG8LDwLanu7ZmrF3S3WxTiHjdK6JsPpUSzR49ThvhRTm5MRVt9i4cfAENqfZEZyhYMafs95wB",
  "key20": "4TUBHhhhsKpbCxG3jNrb4nyECRSc5c1YUMGvDJXCFqZvj1nBoVrRdKNWCT6s5tLRCgwrkfVRgU6iqcBPnjGnMgeV",
  "key21": "3toQ2BKhFMUNsHg47oNeLGRoSbSwU1YUAmo1DqYKJszMEUoQYD12HbqpXCisZpRhdxTggrS8GJhTkfnz9UusYb59",
  "key22": "4ejovmpQTSAd9zTWve7ozYQFTXmUR2vzfpzVog4LZFZDSGZxL5ouoMZ1taXKAgGYPeyQZ3mUEqUwW7p6pNzdvySU",
  "key23": "3TWGeE8ZyuLzrxhgDbmPWCVoCVmKHfcgoEPig48JuLtzyfjD1F3WB3jxyjBMUX2NPwPdp6gDeM6xU8v3pbKDTH4q",
  "key24": "3nttr2Fgd1XxG7h2kNaRzU45w29PpWdU516uwy6CbAcScRPp2GN4KpHRUVcmPeXD6RV8CipuqcNtawaP8Serga5Y",
  "key25": "64KcCpo3ciJ85YhPbW4EXW16So6mv2t3s7xULnF1F4WuhM3vqFp7p9wZSgdqjcoL5PFvFco7JpyogLKQTgy8FwUL"
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
