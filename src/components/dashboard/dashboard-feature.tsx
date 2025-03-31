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
    "5JdiryFoWRaaWch4SV3o2NMHBiUf7UT337cz1XFDKyFhhNMC8bzpmMhAVRMSt4zjrSYR6gFiW2GBFyqwPtQ8VnDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNTkz1Mzc3twuyZ3dnBvVBQthZQ5harQ7FKBycjpCuog3Gh7dXLAH23JjJWtiK9LSBdyL3Ln44uSMmG8aY1UJ2f",
  "key1": "g85XrK3Y4s9HZbCnbBgoT2sqF94jx47VqYjxCHvTP7hsrKfrSgXFAQ23nVMXcrp8wPfrPQCPgJ33VD2ZU2BKEP1",
  "key2": "2Mj77Mux5fKY4o2Kvu6B1wJ15Hz3brUTVL4b3zbeuBqaLEgjRS9U55D1U6oiyXdFAAzEPdsjZaNJvdBQSgm5jeuD",
  "key3": "2SPUcjQUxzishAApVYvQrn9eHwmJ8ZPMsAbyXhVX1P5QBS7zBNLngk8vvLMvCeUt2hcKXwNYuXYKgxY8skpx3uUW",
  "key4": "2iT94bdXbbeyFM8RAAgPnEuyTJ8dAWhFAeDFGRhH44ptUxZP93y1p93uTDHLsJAya5NSxDX2gqwp4j9Xwuf8SWq3",
  "key5": "3HkRFLE2QEArDdXJqNQ9TvFxMQfNDPP3fDzKuyuFvjxiyn6q6LVZaBqgyBbrK2TUuw2fpG3wYM3iJBqQTs74QbSq",
  "key6": "gnQTf4HYLdHhi9VpnEGpya6pH75mqiD7yHBHhtvMvmqr4yi4LRS2dxfH8qXECGLHFXaVmG8tHWDkYrEqRdEaxAU",
  "key7": "3strDdond65Ua3UnZJstKyRnusqpu5iShWnWYYxHn74N6qVYUSPBHhPk36CCfe1hUGHDNCifJFQJ6dWi5i5DVPjm",
  "key8": "3N4y1mCsiJCJePH4gZU2E6aQZj7P66vboRJqGmwejTNbR5iibnR3M4tSygnBCvcPaMgedvDpAYgLCoZcRfWnPesP",
  "key9": "5WdiPMb8yt3jTDeydZ6U1VLMiZrJefzzGMa5hwYuUw8CcFJ4z8zduz5zV91ddDKrVaez7FrH6cNjqURKkwrLeqBt",
  "key10": "5cdCEqMAufyKeirRFAo9wzMoW4Bh63Kvb9LJbmjkffGPNis5kzcMC78vRqThMnckg5QwyoGUgi6zxHk4fFPFxiFX",
  "key11": "61rD9sxFEMsDNoi4iRi6MkQTmGSvXkZis8HqumXSuuLNyahQk1gbB1DmSE76hEdYTFBmmxPNCqu3a8NHUtJTn584",
  "key12": "2T5MNPQVY2i9P6DvvFNASwf53vR47KnZQKXt7EXboQYBRTNNQGgfZg4g8pAYYBPQupBBAUaTN5L1ki6PT2hP9w8o",
  "key13": "4B8F7LA1G6XwFyWWCeHLyv3ZbKgBh9cLYDdhMAHkPXyLpXtfoMA49bnEaCk1pC6QkXw1yYMS7P1krwt3vUTSGGN6",
  "key14": "2hw8y3EpZapGRZYJmVXeApgRWUMWkL78FqPWjYUm2yfJxEAEiRy7SZvVzpQxNiJjEbhStRpnqSF4ddqSXfHvuU1w",
  "key15": "3ZfooE9a55rh4txCCVamLYT6X3TB7dazZGTE7J7jGUoe7vwEjxV4UvYjmA4G3xBnbcbH6TmaAGLBF7xrMjGUNf96",
  "key16": "3ghDVBJmkDqHhJ51Rwzo4QQQmgUGs857F9zuWRKSZ4s26oAk6hFU9Ses3ofLGdGbLSdn1PMQBm39Sq6jwq8yNNJe",
  "key17": "3iKZZUE5M3xcsipHurN4jRw9DtKqmRWZ1SDgnuSVRZreZrVhmrPFAg2n44CDPwik56fRkpPbRS6rrNWJ41qr3R35",
  "key18": "5MXSy3maMp2nyfMteEukWJhwvPtS8gTHfMQSFaRMbW8KiZiv1582uWukjeADJp2JYN6xrtYcYH8Btabq9TbwHX3H",
  "key19": "5NWvsbH4xpHa6Cb65fGKMJoSJpPf9ezfG4StccuhF7jL837UniyG5RcVgq2sBLJ1PKCqbaXkdSbLdHRgTX41hUzW",
  "key20": "5AbyhbXbvqTkDVviJL1BfkdeTVgsYaxodU3xCHQw2qWLVPqoUY7YAtggorJMqguKJN5AnnJHy5tkbr4ejERf6rhZ",
  "key21": "2DJxT89jvmPk2znRzmQ7nXSh4jBomu6rPiG16Dw8qtdTXqFSAfugnnhfGjqRLeFtBhbmJ5rdmCZp1bvceUidZAJS",
  "key22": "4PrUumHcjzWSrLRsr2uVSPBcYzAs7BgXNPZBvNhmskGr6U7jSbBttqwiZoHsc86vQjRx7FRu9MyBQijx9SsebuXM",
  "key23": "5ZN9Bwmv8AFzkNSgocgUqGPRPWG2zWexp7LVmneLsnrcZLAR52rfq5iDSZrS5MEYjwzXenJkgyt31f3fioimuJpZ",
  "key24": "LkWXf6RGTZjArF41KtycvcZHd75uSD7TFViqK51gGcTKAHsqbpsoqU28rDT1mR4n8fdBzfmBukXHBxt9yNKpQjQ",
  "key25": "2RmPPKnxZbxvMthhSRvemCJcQgbrhfWC4S77FRewNMSpHvLGH68QUdeN9hoX7aKY6Dwr5bpvxEWThkZSN1FgjjS4",
  "key26": "2HtLyAbT6cPkdBPY1VZmmArkJfd8SLoH7wwjUY8JCwcLribAUBw9xSU1K23CMe2BzL8SWmNqAmZtHo149JayVyZh",
  "key27": "2wR2SK57jRduEHZEdzBjNRP44Dbgpe3RsRYZUv53MxvGDE3TSgBZntsZeM2dkpYYDhBf1u7HsgpQV9i8pjhsrkZv",
  "key28": "3nDpRLYDuDDYQnFxqsXrouMtcesWbnQVbQn43SQnPdtoJxA3i6U4KpEcKvWJHfvdwHu1WeyocZ4H42FwyX7EAEpU",
  "key29": "5uGZXt14k9tD7z59wwiSRkHg8WU7FsYN6eeyBoaSdotHdHrjj3bhDagxwGajUKtnyjnhQkGSHUqccA5oKqEhuE88",
  "key30": "3YVPoxhxghvT21RGafHjb2hTpsENDzT78RMFpH7zmgZevLtsXN6LNVDN7Nayj1Q5HdKmdgfH95enFVcWKViYVB3r",
  "key31": "3ntZ3DSSSAabxkFyd45G7dfvE9sfRK4LMAzuTRyBTxuPrQAydRRGgrHN3y4UVxEJZNkFA9UWtEy25Eu1oRv2fUMd",
  "key32": "4suojAAQV98BxH4HBV2jTW5jQDbYwhAh5nUmFTJTihWBCEkGaH5nxCc8MVMFdezmBiYHRK34jdnXSRtUDUUSoVTS",
  "key33": "4WMVv8i4iBGXJVn26FxAMmd35nPxnJA5x1ZVY4SpCS3uMCX1z2XqHg82GSrnUgiLwjW1W2VZurJeneVcDSNKi3dd",
  "key34": "222Z8YPsCGw13TF9WYQ4BA3UfiRS5owMzPyX1HUS8CsRoNwE8viK8thEgAyhkJnQAKQSMF3DsjSHQC18rQSzdfWc",
  "key35": "4FjCa48yHqAAsG4nMjQDh21DRFvYoymgG2u5kuT5U7uu7vKbUqbZg5daQoixb88kLkEopKHt1zBAUzEkTgvat4Ct"
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
