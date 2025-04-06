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
    "4RtQZLs2srJFSVey2hi6s8gH3cmTKE54oZtHLLh2YQJZDr8fh88A2Cc1PCW34DwUXh2PrLN9xQawRpEHhYz19U5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5314MBNBbkzE6VonAL8uwPT4MaYkqE6e7Nss7fnUJysGfg8apvvTVZ3QQrQzPXSAmoQVJHyEGeynd6DefSSmQdAe",
  "key1": "U3hFFVc4QKqwhvqFNJroZVagN8BPrYcWpSsasphFxUqt4CyPwLV3rLUmtzne933oKmvQuice5DEcD79QDUDTTro",
  "key2": "2pumYHw184tDeFKxNWYJXAxfVpJqYa2NFUPwpKYnh8RUrz549XgrBfPvtoRKvFuFx5pH9TDT3wu1GcJXGgagUV9L",
  "key3": "CygASMaKVhfQL4ozyvJ1t83dLWiS8eZYzt6N1diz2Khnbo3yb5R1RFpkb8msCUqnwBrDuAv62nGnoxUDAVd7i6J",
  "key4": "4qQDL7G42UVuCNNKspuhijnJ7SYk1ACZxY1xugZD1gzecrt7f6M9A7tZT9KMqmArrNUxpSJwLqEZWYFC8oAbFRda",
  "key5": "5grigEj87WmKtTwiDwYqqGY2TLgSDNnPhkPAf9wGdXeMpSjjCxzQ7wB4wUmC5F1tUqGzBKUG1gnf6wcD2taUQ1Cv",
  "key6": "3xuNtGMt2LAhiiFCmczbiYCjmwb6is8r9zSrK3wqzoVuKMdobbExGnnTYVvqKjA8BBjhY2xzbijeJz9vnigdHkQx",
  "key7": "fd5H4iSjURWL3G1BTCaHb5rz83UcVYW3gh6MaEAWzA7pPKyMutfiJy7QQ1EGD82QmqgEyBeWH5hAMwX3ukWEdQR",
  "key8": "5ia9LoXTmLE49aq77t27MN1pwuHrW9VhHv2aC8kRGTwPsg2ygsiwzKwvgkpYh3CvGHnNbh1V4RKR7PjdM1hQJNdA",
  "key9": "2BbrFWMzwhKL85CSfE5ob4s7dAmVB4Qf2uAYkkZcr1XFnqNFqo6mK4CUVpqHGFRo5MmzNBkiKj5dcQZE75mCx5bX",
  "key10": "3ec1yTW7coEYq4obvAtyhSAT8ZL7ekk8dJ4wfA236sjodEK4TjgfVapDsk59zJkAzkhewLLAvNLj8q1tXoDdMAF2",
  "key11": "32di9qtmYm4UxgKPVv5F1qBBp1gLDJXrS2X3qZo3HTf8GeZgee4CR4ch3yZt8vAmRT6YLjTzpm4u2XfSTkGJdHft",
  "key12": "5Lny52m3MB7AdPspTdHfC8Dp1Tf2LASsF526iGeieYdkeSNXtfvq1N8NczELh7As6fuaDo9JjuWijKgzNeiX67Vv",
  "key13": "4hbRovq6gQi3aCrFp5RXB3m4ZvrVsPCMJt2PpNbYoREH2NerPm4XBHdbCUyn9gqjxXTs6rSpBDErhvXF8ncZ3SGq",
  "key14": "2d6cbY5MVuFi48vjeVJY2dJD86JyXnJWpLRCaPTBp79q1qfHMx7FvJ1eQ2iYa5nrYRdbwgXbAxVKspBP8LWJgUYh",
  "key15": "LxKuA1eheaaeS8u371sM3EMYpt7j3zXvcXtsyQ5mLCTYsSaxTXAdxeSsspd4s6qaBPdn6yDQzRrHy9LtjftQhhH",
  "key16": "vH1nA8Rvcg21cLGmip3uYrPaAvuHovU1AW5oxUCeDy9PdhMQ6XchESGShXxPmGxJMcb7wSYkymudMRj6L3Uvrdo",
  "key17": "2g36XJC9qSjzXzfdCJL4HKxZEaxPU7uCxsiQC1YFyGufDESnKuHrgEcUyaFLqofqNr3waegFM5Pi5G2v5FEuZ2wD",
  "key18": "4F4taWV5RMctf3uaWWqVfBxnAfzuNQFFe1Xg4XvuuZJSxLGuMggrQV5U3AaAd6u1em3RsK4kTX68deEaT7vQnBHL",
  "key19": "qpSyZFEbDHPM2kNUFSY6Wk6qYpbifT1nJXmkuArmFUWw6WWhvXPfW7S7dkkqNPh91nC1jeqFqVPZNwZaBikV8XL",
  "key20": "3FgoCCK1aGDCsKr9qnA35v9RbE3dRSMANCiJvTZ1tsa8d7VBcchSWh3NBngfBgfuECsw4EYi19RyMEJWeUXGYsa6",
  "key21": "2co7jCZqzuCkxXfebqpZ7yNdVLk7kMK7D8e8s5BSW3xB4jxkksRXCWTuQZ4ZWHytbkJVAZncxuHfAGRGUQWMUnp9",
  "key22": "h1ZdhQJKispKCaR7U7Dib8VyZqQBHau7ryP2avJWd5gcpv1RtodDuPurUNKpD4bMkCkeCmxujJZ1rDuHpnpRNzy",
  "key23": "49g5Y8szr6cAYz68MAxt9tbWnXQnUJw9pZUxwYY2b3mULu2Bn5vriuDpq6P66sYGNfRpnRsNYgJyzce4BiUQQXW5",
  "key24": "5VzwgtrwU5vkZMSXSCYAdffMgXgAPyrG4G52GpEji7kutZEtq2pTud6i3wvpTrzkcrdYpskBrXNomqE22yNcYmjD",
  "key25": "3GRF9bBtjZD1s25mUSShzvUQnTxQinn3FMDBZXGwms3eBUbBkPB5uDjqt7U2GmvYM8KSH8w5E9xcqyG9zYgqjCwa",
  "key26": "GM2hzcLo6wjBWS3t3wW2ma77nwUSnqFvFrgrKR4XcanbGHzFj8fwtgszYeVShoPFvsM6wtKRZwnYUSHNbbZsyxz",
  "key27": "3LfBaak4kb9JWEu8VPejy7L7yasC76FSiqbb94zkzoM1a4MhT56E3NFyHxwe4PUjrhHD8dQFXxnSpkxs6xRpAKAL"
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
