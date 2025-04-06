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
    "5xAsNjLBCqwk3QznxQANuWtqizwM6EUkLY7iSfuxo8UahftQ78JEZrxTsfQPL5FEU7gaXBUxX8x85CCCBkbFb1Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TiutA5iwuxGNQJE8DfeDN1rvi5awLrZy5CHSXMFmGogxC3MNLPLQtBjweSEeHtTJAyc6GxXXa863Q4CCY1AmW5k",
  "key1": "618g6aYgmw6sdexJu7DkujWEqughBfmcL6UEQ7pzVT8BxEdnyFxEYJxbjeHB9ScTLHdejrfWE1UpAQfnRRR9wtjM",
  "key2": "4NXTahqoMuUgW5fc6ZYaipyNxnoazUECAknviK2SMiootzEtkFto17P1cyku8HD7iNHhoJMXMmrkKJwFUTQVWBbS",
  "key3": "5pUefPgiEzELZaTVenCiWBaJo8s31YSSnaw4Z8JLbvJdcz3PqHRuiPuMa5paEHJb29squkdUX6TzgB7sAFmTr1Bn",
  "key4": "4h7tniPU9wVLeX2A4rReXKzEVZgk6RonjAZGB4roBfsYsaALGdYFmy69k1zZkttLgxjRhzHBgYFbnoHMdeJEzCEc",
  "key5": "55DW7sDR9rSjWUtc1nDpshAHk7XLSSuq1yL5HpNhioBKuiX7LL8f2Uc6t8qivD39JxYuV45gHZAXHz9v6TU7Hdir",
  "key6": "1riVShmEKFSXCVvJ8R4xtXEmfGrPAQTSxxHGoyUY7asqwH7XNwzdnEp1DXVLiiwFFWXnUYfnvD5ijnMmAEb6gfU",
  "key7": "3F1vUmG719fq6RYgtJt2dh6cCCDcWyiCd6b8W14donfkHjESMXAB6oS6RhprrWtMBKSd86c9K6YVFoVXJxPHwyLq",
  "key8": "QqiAQhpEae1L4BkVAsCEfySVW2ownqqwVBbWf4Wp4fMj9QKHoPisH6Gi8rTS5MzPVnPbtBpEaySRh1sMD7PiLmz",
  "key9": "gQNg6Xgh7y5HmzJqG37UQdLMoJznKq3AH7xpftzWjmGfQut2SvmF9dsqMSBfiG6BFNZyNVTQ2zWNzDXuka7meuq",
  "key10": "3Y7GMQATfdw64dQMqVZvacTtvHTb4yRQ61sJ5bn7V6chZoeDAicXZ93gHZgk6bWT1WSQSNWBN2m6WBnknP5f8aHm",
  "key11": "638CUC4tXn8x7eSYkrwecQVs52aAJcGKojKaDj3CLuqVS1Jk6y67rjudosEDCz5hvDE8tPqDukfmRHChkkJGkpm1",
  "key12": "2DkThwf87wZa5tzfpjBagE5XesFEJ5ouLik1qSwrejaZNPNJFutShKgHtvVtbsRERWkrGyZB87t8ypd7fa4qR6dC",
  "key13": "2Zu1vNbcGQ6wk396swkHLBBYYjEeJGNyMcMKBydHwXF9FPxHew5KT5ahbma1gfDBSteovoQTv8BCnCFycB1YA4qN",
  "key14": "3KkAsXf5vGgEaHv2zkCV8HrktVf3QBbYhPYGoKzvE3RqScrLDXVmauoCK2Ypz8YBenJSX1uNs1h9sTctwU3LRstx",
  "key15": "3B7UNNmZeF8bgpQQejEdCTicZmhtz3oV8MfuTZCMWj3BB4A8JrxmBSLiKTdd1zr4eTrsbYWQyHEfaPwPu393SJJ8",
  "key16": "5oxt2bVnZqhRAgirW818xy46eK4aYPqvNFGB7EjCUTSTo7jRQ5rniSDRRACUPWzzKUt6UvayMBQ4PKUAcTiLBs6z",
  "key17": "5eoMar5xz3hQ8StzhZtNXjNBrysSnzSJWMJ67veWyWTiYoS4w6qBdy8wMrGipndxNVRhK3rjBDLzonrVYAETqHUd",
  "key18": "3rBFDoqqdAwbWhJASdmFRAnFPZTrAMTmLB7n9Vtr399K8RgAUqVKzg3E4HSpRufJsdaNQTwtmtWTsXKdvqS5PMF",
  "key19": "3CQ9PCkgfGcZLUnMz5GpQz8GGgvqbhHoSJhhN65LHU9Qs5FmVe2JWigwzu6FuQDsyq649PbwCacW6Rje7gmJk8C7",
  "key20": "41pEauYBukgaqQgsnRkyUKNmxWEsMwpjgbGpah7g7NCEmhCc6fDRa4GtQ63apCSshxcqXB4Lec2GNJi9A2gqzJj4",
  "key21": "34kmEQRvFCixykkaZ7P4EPhWCrVVNDJmbmVYWeU1Ndh6xjBiX7h5K7pA59VfKWQhGf4t4Ze5zcuD64t6wQYSbBC4",
  "key22": "4R4zJUqRw7Z2ynEYm6VV5HrCaspou2FYZDrsyWGMo5Ace7TVw8x1xcTtWyvKPLHZHjHgRa97wibwyjdzvUJZbY7j",
  "key23": "vT7SoZHxoWNazMmHEo7Bjcmv91RKkSEbdJvJ5zVLHXHu65rgLysBKn94jc8x86y1EDchSBAXfrVRg2G1975EPNK",
  "key24": "3fYiLMMGDyUf4sn64cdeXXgoAEKwsnCoa3REQXNdUgM7cdeXFm8Ja3uzoaAT3DjqRc7s7JGKueQaBt6JzrZQBT6n",
  "key25": "4tULz879SJ7yYSjFPzRmHKzceJiW3mTbnQdUR5b8iWfVRZ198hj7L5QD71aXYsat8WvEDFHysD27CjXiLjkiz5rV",
  "key26": "2vJjrQ8p7hK3LFyyqBzAzhB7S6YHomtG6qp534HrAfZWjndBiXR2Y9cv6gju9ahGWN1Fki18im83Xmf23orEnRUw"
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
