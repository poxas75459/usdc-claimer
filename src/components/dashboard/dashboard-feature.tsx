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
    "5EAPiU4dQaRtnxS5ZDJEuqYVVg6g54eD3fcHPHfP9g7jJXdgLJU4iv3v6mZMb9Nd4UDmQuDusPsFHSLGY7y7mpFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPFYr4bKgMLn3s37qQJuzztBrCEA8UvyfWBC5eHd6wPJ7Zy87Kx7o8SsHtLQyvKaMLLnba9Nm66kJotabc4bCEU",
  "key1": "dT6wTV6i165ardZvDLoAiwt7J8aQhFymY2kmkc5k8yNBkbUFPuXm63G8BpWkgFRyCQwcCUPCY6B4cEZS3UC2fZd",
  "key2": "2c1P3m3ppQiEgGvnj1TuLSALvtBfTTGQrG3DYQhryr8h7bUwjE65WkgtQNgvanUpwavuYLBy14N2mbBZMSMU87z",
  "key3": "5YchHJfyex88Sa6eRCd2nirKVwrR2aBgD67PMDh1HrAGiGgmhVkhHtJp3kESxJePbiXqmacw3UJaNgjVJXLqy5GD",
  "key4": "k9cEK71Zym3j2x8TV5psYMgRJe8YoRd3jif86LavSLFh35SHEWEiTeY9P9KRJZccfyHQq4C786Fi6gHRgyoe54V",
  "key5": "5rDCbR9oSzUw1YXs9SM1djudAWy484nMqHTUyH5SAfKQjwk26oF1c3kAX4tZ5cyNUtdGTCPaXLFxi9dVa8JhGF7R",
  "key6": "UbrYhxNpWxmvfKzp8YdSLSeFy8w4UZZV8HvTY6Ds6H8ayHa3WGVY6JH7RZJbcGf56PoGd2Hzmjsncbo2qKuGUzU",
  "key7": "3YSFSGB6VLbi8qcWmu25oWJWLjvAWA1t8c8CYpeCTF8AULosuptC4euZRcDjcUSME12MHFLtTbXzZtAxgvCzNBSA",
  "key8": "y29e1vq8aDucW1uZnfXEhxQiRhfWJsyDSNuoG1xBn8QLQt4NbvM3GoW6V3kaDK9JikHfk9Dgw3acb3dXftrvVC9",
  "key9": "58WE7p1kT7PfqJE6KFzY5DpYTsQoa7U7CQzHzzJC7SNs8ijxZiXZvQkjGQs1RDCJLsabTkWxhnDLmjS9ZrhPWxQk",
  "key10": "4nnbJchsySDaU1RVicXjX9agEMCsVqbSh8BmqeZQsBn9D86wXPhAim5qtitDr4azABZu9LPaALnwGAV2W2mDRZv4",
  "key11": "3J683D4vvxsKJW4Ny3sNxiEDpzxGxQ13svbRgyzrM2rphkyZgdpbL2TwMLmc3ULoT9PsJijktgeU59f5XyM8KvxJ",
  "key12": "5kn1aMEACVpXF6JMyxt8cN8CKeFnV4rUYSg4jkPPZttCdcMk1fiQpCdrkzRQ5XtGPzSBW9rpnuKeBu1ZBYvyvHMr",
  "key13": "5MdK8o1jCQDR1H6zjDXJ6e8Y4n1u2W964XZLotp4afttAtDuun57DvNfbHQWdzfZyhbhFoDt2N9SAFGqFY6Sxv33",
  "key14": "66we4y25AgybhhPtTmqUM1vNjJQet8GGfd3MA8CRAkkMfXvgfpGkfcsqxJEw277YPZZaJL8wMMik55m7hVYoyXmU",
  "key15": "66CH48X4j26AhB9pU7cdkBMMkWz9aJkrT3F3RheBi7htMjhXxU8J5bned1EAe2WcvJ81ULuZMXnQCfPndkVTLVgk",
  "key16": "3F72t86spYFNw5Qvkn2xksc7rCPnPppKMFBiBeLmZ9KeAKmvvwXNhidh7mNX788uWRYgxaK8eq7EavwzbDXcP44f",
  "key17": "4wJPQxfGgcwps7KS7998H8PYZWFqNTywY8LVRqtXr4QkuTAoRiKcGFfxFUxxLYg8CHXvxhRpcswv5LSLWQ8ySFNU",
  "key18": "4tXhyxzCUPq1wYQtWVyx7XXSqzzsSJys3bhaGhx7Guwxs1aMj4jzQFx28DxC6eu9VsCbx3eLrWUpw9K2wY3bL37a",
  "key19": "5UkNxdRAmuk3mPDFhXiDS8NcpUWBUhgc5xVkkwL2FwuVpbhmGWiXuZFWgEpXACNcAV9zaWv1Ccb1bkGMm7idGZWJ",
  "key20": "4jLv1EUmmTY9s7khjsTQ4Zfpah7UsGJmqMfrczPLjD1DXkuivP2e1fjbCMbPyUVJDS2SKTqgharREqoCz6Dpn3f5",
  "key21": "dBgbLVSyyFGoq4Lhh7GqbWxNksiN8N34YHsCm8oeRv4U1AZy4KNbN5tohBLMEWba6wJTirWBQZguawiSjZePPG1",
  "key22": "3LqsPh4EaoZqYFdqb3Es53QvnvhZocsHwS955drcY1EaHUgn59CqxrEZuWsKtrZwxzQgT7BLeQynAoNRyQSnLSSf",
  "key23": "4XDdm5vYFwux9yvhoeu4RS1YBVtQpBN7dwrVj9Gn8yf6k5SzHwYiP6J6b61X68phytho89fgJs1o2SZ5QNrvEPrs",
  "key24": "3mafr4nc4gKE6vVZH9uQzFnDgnfmmH76A7HR51cLgMT4pvUvgi3cBVabgVmNE7BrC2n7gn6VP9aj14EuL52Q6uik",
  "key25": "5qjWheN2rBei8S8YKDQWNUYqhH1puAsqqqDMYjzwG8czyX1gTpwosdEibeXXjjL1meqJ7vco5bUSEG48Qrrx2Hxq",
  "key26": "3LiLCTx7nKL24fwm72nLJpRbZrLwebLPsVETuqW3ZV8YwurGg2bpNjq1PDKxohiUWSCnqxX6iVxbTzCMXK43XQEW"
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
