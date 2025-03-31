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
    "5LojrFKFHTZcwQAyKbrxThixDe69aye8DpP7XhwNNdpBfE6J6VYE32Bi69St5CQyfh8ABM56vXHVZX99U6pYHpoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HMc3xydfUqCC7K9oRtfK7ckdgXaTJiZQcNGmpnmWPeN3qQc1seMBJbG2xZuGFjGUsBn4Gjrd3JRzmMg9p8GgEP9",
  "key1": "61u9AMTU4SCtSGirsYMNGMUL5F5Jwiaf9dBCxf9bhgZ3YLqBFbZ8eG16eK7afTRFMgFMGEaapuajoE27hcr1C4mz",
  "key2": "3g1Dqz3Ys223A1AYoai1HKC9rqzVBcZudEfFpEpRSTbS5EnQnN9X3gf1VSRGigR8LggMhXSLgc9zn8vy5WRJqu1D",
  "key3": "613encWvWyHrLJopsSoPSWdxXc22Gwyzfj7zFoVDoUmc9BDmtqgQSeYmHTR1phaMPQeiZCGrNtftKMvF8aW212T4",
  "key4": "4Pi7rEVApY2vCv3zYKvjLc15o21PvtzrKYEfmutpASiyu31gZjLcEQQTfeVsX7R7j8xZE39ornToVDHQXefU3NdN",
  "key5": "46YCjoDiitRR4ubwdnbbPdeDDCQfVEHm3AjDQGBk3dBFBUaKGkbLzMCGQJsWT8y4UYXWNx2WdVpScQSyEepLsowC",
  "key6": "3Jw483bmSZYL7qU37Q7hcyJzkBe9ue5GpCswHqanznFWY4YY6avg44ajR8Ymf5rrngzf73CdFTQChLTdrPPWirQF",
  "key7": "231jaavsJxQpNjjdWQXcd9GURPxZmMxsGh1nWE8AV8orJR2uF9zsRTqQhVTABb7qpZXMTYJjzCg4MfcVjMkVKToQ",
  "key8": "LgFAG4ZaD8GDSrPPpQK3a3dhJEKxmPKMoGpxQjc1Wv63Vt9E1FizzsACGFc46p6vYDcqJpKJHb4y4s56TofmtKS",
  "key9": "27Qntzkdbq39bo9FhEafYJ3GwTb8uwodef8ip88hXi1uAb7GhNJ2wNV3mtzzkskPN7TQMv7vi36NwbNC9T2ij2SW",
  "key10": "3Vry527ggjHxSnJn4MzVmEKXzKKn6Rbs4VZ3Ps4rgrkgkAx4asvdrKgZEnoLEpb8GaR8TcvQwdHDevssNaTmpNP4",
  "key11": "2B5UnBBAGnKqJRcHbzT5QZShot24CNxjAjvCkGXdbEhVrceMJxGzEycpALekCgZhVLmYtVcoVbQWHBNhe9eGKFLV",
  "key12": "chumsenjM4VmESEmMXN4jBCFtxGT3Mt9Ri7hg4PasH53Q5MgU1wiXqXRimgioroVuThvcRtuwTMeXhw4vpqRKtz",
  "key13": "2vhsyTQNXkvFApNpSoNfkuHKXkauRbVaHqwFtq9F3aWczm4AhT9d6we4TWJTbviQkbv8vNVm11gQbGtaJuLGw4fy",
  "key14": "2yW6Tr59B2FtfipotGnQVosFPsw9iYFwijAYtU7Rb65AqaZyeX5qwzwB1uo9NTNrFhP2UJZZFuZup5ivyJwbJ2XB",
  "key15": "Vt9dtaqb9hfJEN51qejJvZzocUGudF4ScyNeYHwvXFVf5RUxqv2rdWPmSewwdZKJk3wkNs6BVYhCsHg1D9cz1hq",
  "key16": "5btbxYW2THmiJJcpRsye5A7q477o3tbso4227A9UZBZVSATouVfEC1fcQpdJTgojhvVDLKKoTsUg7Zn9SFTvjqTH",
  "key17": "2WaeRkstsVY3mWpXmvetJYWCXNcLYY5BKufWKhDEgSpNXYURb4H1rtyjWFc1JKgmmiE1758Ecv17wT1T4cZLjLT",
  "key18": "4Brn4TRPdbgUhctAfyhFVoZZ5qA9DpMzjZBivPSuS8nhaBaohXhPh1afdYa5yr5DxNB7G6VLnAYLKfxTvuSbdgkP",
  "key19": "2niJ8XAA1cw1NToiHYeHRfZe48upnU4YThbzED5Uq1BJcKYDM6qHnxA3Wtfh9zVG3auT4uZaPRXjK7ZzvGddeVAy",
  "key20": "4QthTkkhpnvBWptXg4zTCY9NQYpuQxwELUQVJ4Bp5dPzn8kUTWQZ4qkA3oVTVM1yf9HWuKBG4oPkZ6YiqRP3qMqo",
  "key21": "4mxFZ5NQmG8Ff9ma22qimxTZZ6tUvqBVdWxWcetuH7hG25optg6NngUxpT8uxYFYTxf1DAXH2LBVsnF6fVcYsGa4",
  "key22": "4xKjXPCb3KjDwqBkAAwmZdbYpBuaeG55dNsTzpKihf8gyzb1pZ95vzAvx9qE2raomNESWwsaiQmzsJr3sDDN7TZY",
  "key23": "2iHHYKE6uBTiodnxBs2vvqwmHPFkvMYiw2PEFVfKYWmc88Z1eKsU9AeYXKoXJASP8ev1kJvKLcnjvuhsyoGYiiaW",
  "key24": "4rrB7NvcjyE8doscTZuZBjVkWeJErntpK75PYeHyfH9VnHHZkDJjdGg56yo51Mkw7d1zdvmqcL2zykY113fhdzVi",
  "key25": "NMSEhMu4QGoxRYy2Ybfq2QG39aZVihG2FXqdMuMvpeBGQfmaWkoWFgkEHfKNEry8FTGmqui9zQ6nKviG5dAfg7Z",
  "key26": "2txmRRCPwRPVVNFMwLBG626SUbFYfSMcrAeS2CaPcGtCrRfpFKZwshXHhLRDL4dLqwhpdKwRYTtGnytgFpaEa59L",
  "key27": "4gj783mQMt83eqk3WdcZXW9TjscDtVW9mxnMTqLt3pmahPsdZBrUMioHAxFdhPXgcFyifsXkPQofgeGFi2QPPgys",
  "key28": "5ck62ucNQoJ76gsLi2XbhAv8kuEsUA8TDnXGrKr2ZF9V93GrCe69D5Fgjbtwtyuh83uhLqjA8Z3i7PPfMNJbZE8a"
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
