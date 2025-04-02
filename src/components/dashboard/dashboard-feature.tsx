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
    "2UWguDnwqtPwDnZNRnUBEUZbpZxxR2C3LNthpfL3oyVhfFg9ncDYBmW8KfEbrhLLQEHtmJ8uzHknzFeF525DAasF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8gxDryESxqQ3iH8osY1V5Ly1YqmjqZqJR7QcGoFMM6kk2m3kfr3nC54K3yBVs9HfsUt5zVmYajkzZWQQAMs5ke",
  "key1": "2aT5mTM3qbGthGVbngqRVnF66g7vXWQytDTvAqjLRXmYgSmtoXDp9fNYihSjzwySGxcM9L6VkWMvz7Td61kGFC5m",
  "key2": "9T3b9TipdmmAExqvdSWt3emnTmRgSw8unHh5XRd2MXRYK3ZEoCNK6Kzc349viW1Ku3xHuC2S1gf6JUN2q2DcZLF",
  "key3": "5orjypEbSZt9BCFDPfJg1AcNWLEFVhqno8bv32KY6jr7R8LQpDqMkrgzQfuz1zio7mLx963UaRqByPD9TmqXbfgB",
  "key4": "6567QRpAmKABhrBoxW5cePBz1X4tEVx5QrzDyquoZCkjy3Gd2eKypGsK11U1EF1j2yr7qn5k2UGmpNnT1t2L9JMf",
  "key5": "3B9NTkvP26tZZzw9TC5dQt12j9qbbqZVDqf5moS9keiJEWp2ATEB9NJbTK1CZXD23ckJPacDqZnDvpriMHoNa7XR",
  "key6": "3vGnn8kBfuB1hNHMxj5Kaqab3ZkMEXUia4qcBZVaTmCg7z6kxxMEPyHnWSbtK61rvGk47gGoQiWqi88FYFnsgJw6",
  "key7": "g6QkSN73oaSmhkxtFeRPfPKhyBiSWBhdEhjfNBV3kaExoYPWvHQPRm8VHgErGgRNZ1TVDfxGxt7b24S9y1pJf8k",
  "key8": "51KNaxTjmAXEmS8cAAzEsKaUn5fj6ZVVutTE25xymNa84tJcTEFuvyAD3Us2WEo34x1sD3xj3v5DzYZJtFQN1pUp",
  "key9": "LZH3EkUD6RzuSNh3ypmUFWLUpzHU4pV6PqcXgymAaddPhnMkkrvjCS6HJD1db8hh9QVdpmx4m6ypexc15tDpW8B",
  "key10": "3zJy4NhnrW1wuGYMdCAxEGhueqS2vVnyZYKbRgFD8YEcdoafSaDR9yW2e9Tznxt2Lt73qeo5sqYFR6AEodgNEZRo",
  "key11": "3gtYRZaePgCd7YZAPaB2aPd73RagbZ4AGSSP7ytoXfzdENPMQKGGYS9uSBLdJGgUqH1qzD7VKNHkB3LvYzoKgQKW",
  "key12": "9py23cq1UsFN65jTH2zgk2st3CLMo5nWz1ginT2VsyFcSv8amDVHhyqCCT7786e2QExg86oj4ihR1ZF3pacYQzi",
  "key13": "4AQGLMcj7XBSQ5qujRWnKaUE514TGCWaSrbD8sigJ449ZwwLConKfn33jpTqmawqas3aXRDYYpYmgVtB7wGGPDLD",
  "key14": "2NegmczRSF1eYvGVC8MwSQmSBj5jStbo5VLpJnoqcKnTSf2Max5ZUq2bjfWaK56PaHdKhFb9TQzndHtTPn3kJXTd",
  "key15": "5Fnt5VASzZtmmiZ9SDozKkQ7F6NvRZHiGJqgvFZHr8FGyQeoos3GA6E9keUr2ZyBYUgHE4iU6sTicpMsvKHnFNn1",
  "key16": "4VBp74EQujt58cvrEhJDVMYfHZ1MXHFSrGUnRay8PcmHDdfTC6tuBP3K9LBRbey529q7HGEsyMN5WrAhawi46p8M",
  "key17": "37dNkehcg1V4J1UAkko2QdDPesWBFKvwQyE8FVe1mvSxV4cJiw3vh5NJQD1oqka2cpYFMhuxnKDNNjedGSUd87cK",
  "key18": "3ExEz7w3s7QBsjkZKZpt7pmQDSomxqewpwxGeCUQnwuzXpKYn2Vjh9RAio7a6PU7kREm3fhGJu1L2DtQ7869WypC",
  "key19": "55c6HfatixJehXtwdiqSUJy62fxrHrfELdk4KXTDznLCh84CSh9G5LGqzrCxidW8UTC8UWm9DvUHi4iy6EQ5V3co",
  "key20": "2w7md1Nuw1Jr3ag5PBLUfmN3EvXqMP55vNTw46An6Yc15HYX4SieRTsqfotowsiTE8WDp9ytciKVAfKxquSJkQCM",
  "key21": "2oRAx6nWvtrtuSkw3UF4r396i4qmXCHRmFqscwgJsyGcEbztZZRFD2kmiEF2ri16m5VDLmkX2Y8G7gp7uz6JVDZd",
  "key22": "5YrDdnu3vpJEk4W2HN1pmKJFfFogQX9ipgwHATcpSCP7KLDwk6z4MTsUrW9CZ62RrEkPnt9zK75k8dV5L5Ss6Zz5",
  "key23": "3b22qWqge5TprizqYNVXWy6nNys4RLNNUtECVyBNhTB89P6i6ydDoiNf9wMAmf1UdXcm7qjrck8kbNQBPsZrS1P9",
  "key24": "Lz2uebxA3PDKTwehT4RXWAzNmyEws5Wf5KJT86Qj83Bo8vigSAKz6rsXdEuF6qFmxFR3d5Ku7nYrwhFHFgRDG7E",
  "key25": "57mQXFQ6TQbD9yRfFK53jmddmtCNxbj7PdL6vKBkwJXkujKi5eeaeYK1E7ZQLmQRqtza3WGsGbassU5m1ATCXE3i",
  "key26": "5GCg7rHdFwzZf9Sbeam6qcLdAWKbh7HB95rNHiUrJice75CD83VVi5WateGZ1sWprP2PEJqmbYnHvLWzY4iHPL47",
  "key27": "dAMYuqub9sCwvL75HCuXzLuYMKP1Sp7S6MgN3CZYVAcUXhA8LHEriko2d5b5aqLXcftxRZVM6oY8cQpc4TX7E5U"
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
