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
    "5MgKeyM5de2LQM9PpDEcUvYwMcaT1pZTnfonT8Yc2JPZTKoB3tPQMEKjec79fBobXqMtFX3Vj2fpwhCoEtH6DR5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVbvx3vU39F6AXgnpEhxKA8VTcQUS7SAByjvgyUG3ymNN3Wta4fnNVZDJBiTVkwfRcmyULQszLZCjsg4ZxgwMbg",
  "key1": "5Fpo3z796dJz3FtcY9nzgZSGLRgM5tTbgbFL53ZRt2yokjY6yydvyXLcFeYppJ4TKXqykLGGjn1tU6pEddUVjW48",
  "key2": "54SXdb1AezGU6n5sGv8FcZVY8xxEYTAZEbK2jc3hF5J7hKN1w9S17pKTAGZcyW6qEwBu8gmR3iWVTohb3MeYAYox",
  "key3": "2MxphBhsrmRe2K5CJaQbcsS2RmzEXi2y5aYeWfeqAnEQRjvxhVE5mYdFbiNC8mq6EfjAA999qxMjxa5H9t3KPKpo",
  "key4": "2suNXNCENog6APbHYcSVY89MoxR6SApW1rtG5tiw5PaMG7CGuTbyXbmsZWfZFzmATXyzsVVMqSz62RWW4pygZThi",
  "key5": "2JWiw9xi2k9uXprjifHmANgBREEunEeawgrZHyT2VYZVzNK5fepr1hohKKwfjBjBN9Kzi75e57HxYm8nDYu7D3uv",
  "key6": "DfgRWkKHtTwS74iGNirMXnrgZmdyT9JvFHEcuQDBd4j4hzffaHtDybzsixwYGMa8bH686z9v1Ab6BG4Buc9w3K4",
  "key7": "21mQeTFXZfugMxbwYNzzsvQAwTzYZf6hC8EBU2uh5CQPa3rEnEsY9FNTrZkw1yvz7oTchZ6FzR1EinvDHiVaNxyE",
  "key8": "43aKqRhH8tNWeByuXdiR7hvzAD73v2EkXCLEHK7RDpBb8pMG2G4S78TRavDK5whw7rCCJHzPamfxwPYJ8bNQ1JSh",
  "key9": "3XoiLNbTQ272i9783xcp8qbfaYJE6UDsrREgvG4RnL42oiHywUobkwqYd8Sf9zBtAH9H9FYjY8R7hUEhmRsjKocU",
  "key10": "4ynDy9o6X5RfVNDPYZMQuYbNuwoGbN6vRZy1Jzjft2GMWJfAdqx4E96KvDE4xSoLH2TCbcPk5hb7Cj18YLhxmLez",
  "key11": "49kWNsPmA78TWA8Tad2Yi3cn3ats7xLw9r1bucYoWtwYCp9Y5MzAzBYGMW3mUmqiuznTY7QY7VBiWKsjgJxAqqAF",
  "key12": "5SBMi5RJJ3g7vUB1Fbm2vDfqA8tre7TtxtJtChRPT6MbMNRDjKxc9VwCcoTWbMAewDNHy9z3F14a86GKyY22gyH2",
  "key13": "iwneJyHY6UX3nkG9ZMp2Ahi2Z4dCyoqrobjNuFvPnn1NuigVgfAQzEuYwULkyr81xa21BzoLmXaoJrCXgQ8awZm",
  "key14": "53KBuNfNHiZpAwydJPmT7hsCrYnbpN4zgjz7ahsS9c4ktmaQCuxGzKj1yBDBiBrKCVXJA7fZLzYiZkYqwmDPDUcj",
  "key15": "2NTWUSGyVV3N7zpsmzXzZqNijEZBqELWunmLtZoaghe2g85XSXyM4MX1np5sAPXH8tT9S4qrwWPhhr6mkH2fUrEn",
  "key16": "2yYk6uv8tDShdv6ph9soSsthAd5oJcsUPQo8XmFZDmgC2SSEDjqv45dE1mvCUXCFi62BNrgTKt6fqjwtDbtrhXcG",
  "key17": "5odgF7EedkoAc7Wt56HsA8tmskA3eUgM5WCUkzq5sJXT3XDyx88qDtB67K7Bz27MmWwfGyYsYrQPdmjWmgwshpV3",
  "key18": "4Y3rzvs8tUos7yfeMDuLqgdCW1UimwNt8oVTku6PnbxjiGyFaZBHtG9vp5j4QcGh4WhUAYPqfz7sHJ69SFAoZySa",
  "key19": "PbeobhD6TuDYGsKcyCbxVwUeE7HNFoySTANWGP9uDdzFdJwPgHSF3BHLGyH1nrKRLeCQwAarsniy6DBPCTY4gA9",
  "key20": "4bZYC1nxUSkJzBa6uEHGXc9AchPiCEC5jx99QtQX8VVKbQDemUELwfF4HxH5mokvURNfxE12tGa8vbTJWh7jJjzi",
  "key21": "3NEmEDdETNf9Erwstnrs4226Xvcu6x1Ba1ZY4QcRmNdoL5aDwLM2vUjt75iadeFdEepS3dgedwzSKyRtVGJRjmwk",
  "key22": "VxmBVVzzxata8oTcC9aZRNoE6duAg7TApiBmFZRKXp4F6k98t7igBL1LuGXfuejkjHnzYAAQjexzDY3q35B5DtS",
  "key23": "5GtRq11oHSHitM2JTN9TKuWW9YaXMTatx8h1Ai38A58oMantk1o4VHBCnEcDGpbBqviRjeMnLccRk5hk6SKFDCTT",
  "key24": "2nghMbx91uvNKtYoaUBfAAa7M4sC4jUnjKGz5kxSRBd2KL8uUwVi1BsQFLaYpnDALbiPQN6gzEqzpaC2YaSY3CwP",
  "key25": "3NgqkMujgZTtQxDNkzpAjsXpzXLUHVKpPBmJf9ANsKo9g34t7v2Tipg1f2YDmUDHdxDzMp55Eg9P1wcAErzg6dNE",
  "key26": "5b1Hsm71aVwLZYc25Z1kCpCQjZgQJqPsERQWWD5cJ52HcfY52Yayg8obv2HS1hP6bqUkB8SEHd15fpcc6WPkLYmi",
  "key27": "WBtsvEdiDvMSEcE1D6iKotVcuUVxqryWg85ySXFYD2Q22zpYqs3Fu59iqRKdXys1WHD8XEWQ6LxQyR5Nom6GACL",
  "key28": "54hnBxH2Ea514Gq6HJG9eqrRExS5QaGKX7Xk4upZN7jn9yV8BbuTRu9z29os3XH8Gno73Qj3JVATcochbJQgk3bo",
  "key29": "5bE94WNjhd648776cisqFKVVhXTvCzFXUxLevK14pH7cwr8EG4LXCaDoDc6BsVYg9AHyUZYRdZ1NEhbdWpASVvVa",
  "key30": "35cXKivukuywgM4Bzys5GazciXVmx4pahPQnxcLuYJaReoHKgUig3en6Cce1zaZ6zTsnBoL43teayk2SxcCUBqkR",
  "key31": "2vfFEsfFmjB2KD5SNR9F2wz2mtW5TBq9vrPPfykv7Kayzehi5Zai8jgxKWYa6nzGJJQcJ84fLEYnRcx8maurG5s7"
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
