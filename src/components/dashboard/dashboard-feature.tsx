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
    "n3Mn28pupwAET1TKAp3UT7kmGGqJbzU4zYJueFtuWuqSHi5mw9i7hXKAM2G89w4RMkjoXF6PnaFteg1EzJ3qQKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36NC6os42VAMtCjNE92C97qD5Ku9RwWmUKgXgDHKW4AMoTfBznYNgCHf5AYH8DkXzQ8pSqUbBKF3SGEK4mM1v7pf",
  "key1": "wnaPYxUcbGqtEGwStXPVnEzv78GhATBT2bvEJTvAXDZp639WesAy8A3KKgWVuYYjS2dCBoRrpfA8xj7Tpur7QFT",
  "key2": "5wdmHBPRA473ZKRCZnngBDw2TRKZrY1zMCfk5TCeJziwFSKV567weTectzu3T74LkYjU6MWzNKrv6gSTWVFtrKoe",
  "key3": "2a1TgdcYu6Qh2usKz5d8RwQ1NWv2rbMudXqkkxLedQ46gJcmJaVBehJBuoo3ktAxRuJa1qyKwhbpdmKL1LAADwzA",
  "key4": "2PpVJrrbPoSDXqQcqRutZ5gFhiU4yzUpGvMTt7ZYUG2WNGyVGhZ5NvgRuqokKgksjXzJAp6hNCZGJAWicTeBVRmB",
  "key5": "3gRXDUroF2ayzi8KX7x4jbP13VLqecTbWYtQvPC9nAemp8CEmV1XcchdpeWoQu9UT6TZgiXL4uaFdx6odGQjuB5F",
  "key6": "63v25BbfhtCLxQRbLDsEdrVXMXQcLGt1VhUyMrxQpoDy43N94cmpj4SiMrbE97tpRR8W5UzrpXSwQytbrDFC2Fce",
  "key7": "5tvYB9jtsTsg1GqBjphxcA9FUpoRCXAU9cYjF2nog17pK4Lkv3zp98BjG3RBXe9MXV5qPtLFYjnK32mnGDXkcPvX",
  "key8": "5ZKQM7ukPh2GGqz5MBWJBkTEPXkAmhkseABUUUnhJrrnMX7h3HMQi3GNKondwS57FLE2QfvjQ1Z9JuT61RkNTKyq",
  "key9": "2CUcef8ExfaoZuW3FoWfgSC1rsTPM4nEyyCaGNFD1cLh5CQmTZvQJMcm21yBjanHtYApwRZmcp4VdrzFSg7gVz4k",
  "key10": "4yQAdc3oYxMH67ScZJ5dG6iwwMYZFywYLAuGpKVomT8cEkrpvmFzB4oeRn8yAtCjDLeZpsB7ZRW5DK8FykqmoxNJ",
  "key11": "2X3TL8uP1wVeQCm14BNVCegpz96sTC7RuPz4pQvnBiV19QMjQ8v8uYcDgLS8R2DCUcTokpXeFoZn7hdLF2JKXcVE",
  "key12": "3RF8DpHWg97hTi34Q32B3LNoMVofrYBi1fymaGSjLrpKny9jXJGibN4NoWkhd8iZSFrKxRfsRwS7kwsaDXwpUo73",
  "key13": "2NWQZhvpkLpys7NE7bZem9QuPh6RfpyVEh6GShEwvKYUSrn4RMzB5z7aNwYCvpq7QaQg3zZqxoZVYB6dGL96vfJo",
  "key14": "5gpwspraBokyeAzYTqphVdGx3om13uf7eyGRjKBpByx5d5e7toCTPqdMCZuZ53SuTRKYVRVnsP5eDaMAU7VrTiJ2",
  "key15": "37g6QkvzKuSEXcbqDxLbQc5V7QWWyf5t76XjynLPc9iFp6mcQEjbfXmUMJ4E6BFFF4sX9CXdHnH1oBYDvaYvtXrB",
  "key16": "5dyP5KUfHcZfs1aSMxwC6pwFJLtqn9JNRRqSowaAaEL5s7wM4ppZoihmXUEG2g7LFworcwEVtCyfBTuYWgCD8YDV",
  "key17": "2KsxQKAuoYTd64CnSNv3WcCVyribcaz5VQr3Zv26Ct3QrpcXyVxZGSogAGgbwEejUCHWP2feBphZr1RnuJNEVA8F",
  "key18": "5hq6TmGc4RFzWvnbdYowDtWv7iU5dHPKeFWdswngq5kJxWJq6Ae5NyEF1zNCdDxqBfR23LWqAAww9Ea8FKF5vuJ9",
  "key19": "4kfXJoSMDYLDpUmSqPqLtJTowV5LQjFQefpNdSb3s26gwzShagrdj93r99d3Z55wQKe4g6cgu8dCi67gLQiXsi4M",
  "key20": "2mRigA5QxxFYKTaxwRvSZKHUwW9gc1FjwFnVg68Bb4ePPiKbjctEnHBvDVP9HVArbpz4SCJ7vMMdoofdcZ11XqCy",
  "key21": "2A4TQ1UAxEjUNC1riMKfzBhzDDsTLU2WkrkF9ncDdK2Duf6uxNgpMZG2eoSAYk1Ui72X9z9i3R1m4Ku5pweTqk3P",
  "key22": "a5eSvDLmcxSaqnN8QpYbFDssepdVHZaWtaBM8H4p979ZCJRER3C4EiJPY4BJHXBsJ3YJnLQ3EVGikHx1pi9Uo32",
  "key23": "2Ux3cjp9z49EWksGdsD9PQZ1mP6rtcy6dqiDpkmMoVRFGQBQn7XP4yHDev7sDi8sRWrFe8CNNhhUQTjXeFjec87t",
  "key24": "65qkiFxVEhZ2wmT6NEgw7XMqTucQ3sJ2Btn9G4bYWGR4LKFmTXKvGg6tCimbKpC5FEEZF8DK6FjC1cTZ8eLGtUUY",
  "key25": "5XXZHUs57wyGJokRniCPFXJM4ZC7sonDnQbmS2cKX89e6zRgzsMg86iUTNrEhxh8xdeTzhBaPzSP1Pt3WyZQFCYQ",
  "key26": "46txYK7PytBvgg2T7HF6Zemp3127fGfoHLHBJK2fK9WigdfVSAXjPtXX8sJ3oJ9cXM9xjQq5TBc3ogw51RboNEwW",
  "key27": "43DNPJLADaWPWowMoRUyy4v5yXzJxhmYp43jeV1f9B8puhC5hF47eKUncb23whi7SS2pYoa9aWE3JxgjPK3e7zqU",
  "key28": "23qS5wimR7swQK7VeFVz2hMmFrQ5aiaxRo3t4NDn1jmGFnF4Cjs4tSDmkJipW3b5KVqN9QoDvNZRVPenxRrG6Vyi",
  "key29": "47hj8dxWT7U83PeeRiVn192CXTniJeYeE5Xv6ebje1Q2u82db4C5Q9LdTbqU41E4UQumHNCzwtpk4aW6G9GW96Dt",
  "key30": "2VMbttRZNecpq5VDcCee7ECkcQRzfvqXhZfoCwYh2M9r9ZwjjPpUm42ZRcZrKRBVdWBNumgqiJUUtvX26FhGDTTy",
  "key31": "22mKBDAHFSXekDuLt3b89XLnLhyReiDZxQ1cuXdDe9kUB48jAQuFJM4tzszVTGM5FgKcfnPiRkGTUCAxrWaa8JgR",
  "key32": "C7GR2TNQ9AYccAzg42xy9UdKoDcR2KbdiqoDS74Vdz6zc3DNyFuEJ9guJutiDxbjZDc5mYXidwAH5t6u7KeDQoH",
  "key33": "3AKG6est41tfS1rWT8ipxonRE4QQi5MZApBft7eK4FFtaqj3J6W1VqDZ7MBYg8sk6GX7NXwsfiAMumww2HZDjRns",
  "key34": "5qKMf6BYGg8wbB36gZoV6hM3gTrr7mfHTfuhvXJCNsKGNqogqxjvPwCCFhLUmNynZzGW8u1VE7hcu3Q9y3yqGYPw"
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
