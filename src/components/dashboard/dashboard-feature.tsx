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
    "3qdUUNNnbU57T6CiTEYfFzEqiBT3TCDr5cxyojxfMEaSHgWBCNrcKiHxqw7m9ZSWqRgNZrbSHxa6xQu67LjArh4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36V1reC2Rnbo1sQBo2zh49hLsnREXzasMJqe8X2DM7yx3QD1LSaLvVTU4SQE1aNfDXWLqDjLBpq1QHwtMnMUrSsX",
  "key1": "31ezMZF8BXU4t1NsxBFTH8w6y7jEtqqjUnJCTgYhJWfqAAgynNL2iA5Ds7FmGbu74gH93uGUDgS31LrcxH5bpjFR",
  "key2": "5KcwsPtznZGgt1RdKw7JnzGzY9VBEg5DtjF1MEFMqmveQtMhvgXLH1VpCbkhi4UEYP7Lj7w55Y399qcQwq6Uajq",
  "key3": "3dX78Nty7vWnTKYUtjTUH7CeRy6qEPcCtLeGLWVxqpwVoFCg8grK1GtWE5jKN3xz1v1ZbBwrCK5x99VsheGe8uwa",
  "key4": "3ohpYzuAAhn2pK3aLERNEVf3st85hzbdJRxJ92rRZREbNJJuaMY1VK4YrK3dmJ9PNQrpjRvEhtcCzaL8vPw45RLw",
  "key5": "3btwHW7g4s48BqMJsbY8D2VC5jwou326ysFU6A4BehMREhU37rWEUkFkg6pPbNfTZj3RtNJdzDnuSM3oJatgvkV3",
  "key6": "9CHRKVTAsbgR5qnMy9MYVSpocoy8wXZaFJDatCR5HFixa35DG5jXGrgCm43TnjmjAL6tpkHXfPFdH132Mv7ydgj",
  "key7": "2dDEJ3a5FBD1tqm8ruiV62dpxaTZ8UBBPNzYNRxmeS1x97rtscH6f7hUtJW1HYUDvHN7GNHJ5szzLtwiV9374kbh",
  "key8": "V6y7RDJWG6c6AKgLV6GYAY3LByJpBpFjSqfLaeMZeqGZqAMXWVwk57gimA38Zwm4kHDnHNXK5VgP4wLfYqSQ8Ly",
  "key9": "3GdBMkE94U9JCqgayMbQCGrZJbrQVgMXKL1zJFCr86h3Uo85ZsyGQXVbKeNvXTDDcbzzEF2Ni5vuvcmSiD9oT9pX",
  "key10": "5L5aZyr7QCD2sziVDbAn4jK8STg2oNBoP5gtDbRkzJYW1bAFxcxasi2tozJ5D7og45gKEosZAXj1aWP5AYF7RJij",
  "key11": "2NanX54m6hcti2bpPoGGeZRvq9ekdC1R2PNB8uDQHp8w8bPNt9kFtnrSvLoKUXQWKm3dosXTjRHCGHUaq48rjfXj",
  "key12": "2gbmA7dPhQHfHaX4ikA9nNV827Z51rjbjFjFGevYJugLPkaruMdBh5tzNhrScknvGstMrqizEA7bxwJV4tK5wpyJ",
  "key13": "5sQhU8QU5U6Avdra31Js8ixPutJdZViMPUHHftuA9sRffpwZTK1eghLaYGQQKtrrfvdWBAzpdcYtyrTXcG4NQMRe",
  "key14": "5g7aCHBsjT6715kRsV7CCQxF6TkFF8CTb1GUU9Det1gAaPh8hdqUEEzNY9fqWxUgdtFun4fntGDgayywokpkFQDY",
  "key15": "4hMo1kLFWfC4qoy1yaq8u8CST2fRGB88sVcj8JakLxpa3Wm78qGrZszQWASrWhaE3EFTdD8w3MMr3uT3bPcZmv9Y",
  "key16": "4p4Z49xp3CBoohpA8cPgqGwnF4GsKJURmT3KLnq9YzYkTcaR4K6HB96ubNQZG3R2annA8nioH211qEXcJ1DSd22k",
  "key17": "62zZN15f2Y4Ny2SBvoyHQ6recFL938JGcbJywgoXD5yM6CzHnZavKxAyytraXZSLNriVKJPiHAAHKzAA4rpNzc5v",
  "key18": "3AaPbMEkrRKhvwd5iWNH9pzW7aiwGd2JJXNvWARbFYdyoC62QjuGCbtA47cdPgcgsTsYGniwBw8nFV3YMJWMquw5",
  "key19": "yrnVa78Eb4m71UhqWyeq6kgvm6LsLBXSq1QDbQztxwkREkNsgD4Yme7BmvsH8oAnpsVENbzZYpWtuS2WNY3g7YA",
  "key20": "2qgTUuLdcBs5FFKjLa7esqntcyNe9HtQycwvHsqzfx1cd3MKReFVmo21nerPujpDguqzc2NtYCnnuGwLdGUNDDQm",
  "key21": "34mAdAwUrKiQgMDnpDAFT4frA5edUJaYVX4CYWgbEWuk7YiLQBPyfy6CVQ3m5YoRv8TdPRWXM9SiiYmkDm438mqw",
  "key22": "5vnerfacgJoCt48PU6GzRNM2CWdgubP5JpCFGXoFzsQ7VhBPRnFQzTgaeK4mUYow5muPr4krmoGw8EeVKjPqF9hz",
  "key23": "3dUiqx16ytafuZof9gSjqAzF3ivMJ8LDMSGUrfT1D9L2749ceJPcpzy9NGzxH37VT4vLmykZ15H4pK7wc3FqPR3E",
  "key24": "2opTEDUJXpHi3nu93y6hBPdjvjbphdqu8KKqrAoKymo1DxJNEatcfkEMtBRHRMe1mcMVdF5qGNrgisEHGdjXiL3c",
  "key25": "2JP3L7j8BChLvQdezYdZaDVKBZJ87Qv2uVmmiNas9B4sGxwxQVTc5jtunk2RmnqRBEZqrCqJ8kGM5cw4LgXB4rwC",
  "key26": "63ttQekRZqbQPrSyEKKsoCrZAnCAC1E3gPiivJNb934Y5k4u85W8vbrp5ngZhjCzy1yRdTFsfCyfjerG64AjBcPX",
  "key27": "4bjJ4xk29yHhQZswY1HaCgGzbWJsjJzrPQ4e9qG62W3ZhuoojzgN7w1yGexLN9SBQCkQ74mR1YNRJNrfjLWAGyWd",
  "key28": "5wc1XPdyZqJMhqrqnEskQKfwVyf9BurdYYh1dEtpKYF21CcnomytYZ7HNX8hTwEuNEpzwE9wGs16VPKaE3pfj9GX",
  "key29": "v7C8ShPTV6EkBikZw5Ns8RYQu2UqD346AZDDxWzuthjUVTNbNMku2w9Gw6Gi55C7jRYXGU6mrBCccrmwXX1VsiX",
  "key30": "3NYrdbRzeGVhssat7EXJPShy5NTqErigxMrBmWSzng8baGNn34FYjvbYksGQZtJPwoXRHvx3dJ4V4w6MCFpvn7rX",
  "key31": "4SVJoL5dRVZDqFapjy4gf2FVWyLXihAYWswwPpUBeGHk4qix98ybSjqrWztPcFH3gsZUdDWDLTJ6bRDBbC26wrQP",
  "key32": "3mLyFZoGCqfS4hCv6EzdStLHeFAsKpzy71khrAgwGhKV4APAotoAVuwv4vaMhCkmwENHcLsrEsqjHvBBVShBe6bP",
  "key33": "3h2pHywSCpD8SMPfR6497ssbAmNUHwq1hbWRyTho6EVfXUqNg9eccg5HhDcpvieR7k33wHRGDHsEKaHoaDPeueba",
  "key34": "FXf5qoBaowMzdYewwmEnnss4JhCV26QRMVontRcEDcLkAdeNYSAr1hSpxtHF9mM1DdEmg8p14sHNjTSFUwyZTN5"
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
