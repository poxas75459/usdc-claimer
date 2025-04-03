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
    "87XRb4uXY4mWDBRyVQiepQuVtfViJojKQ2bUjcSec1c9do4rvJRo3FBL4tRyQxG5tiVy9YRjVGtThobDHxcGBHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENpdgxro2yYCBgFSF5EkqzcVPLaGUFJmfEu19FkxSxZ5U5YCXCGnfhyUgjrhwUj79dVcZpKY5UZbQSNXpMU5ycG",
  "key1": "65TTb5h4x4aLwz4R8KPd9aUeW2pvueqHftk35awrwSxXNJZ5Bt2fe1ucaRfVxrB7GhfuSyct7Tyqmo1TJhen2Rc3",
  "key2": "4d1tJn9ZZ1EzZkHRn7AfdjZ1n9p7vAqpWEG3cLJ5jZMg3XEr8rNGHqAkBUprroLPJ85Qvw6EXVdpfpeLGygqdSX6",
  "key3": "4tPPG3NbQmbbUqUz3eDspFbj5zqcuTRBsRZgMyfgRhPSZ14oNZFt9h9HNVcPK96DuF9qL6vuuVzFbMAD6oh7t4qb",
  "key4": "4C7t9ARvuBWVTk8LgfCzTP538UcZEPniUNda2FkT7cnhhFKdhSHcsbsz8DEAU2PBRHheGabCu6DqFsmKqXuJV2Xb",
  "key5": "33isMw5Sp1uofUQ8MNJwHsCk6tGPyXv5MFLX6CrvoaEaRQjMeQkFtCFHnDUMagR4LEvBjwSc5w1vM3XKTNQB3bWs",
  "key6": "4CjJkFuBzTT3DbFbB4EQ3bPEpFjgAFRbyPh7mcrm5WxTWivhhn9qoJZch1iK32GfjisBJzruJp63rwJtQKpgxV2r",
  "key7": "44BgSLMfjbv9LtwFh4RN69tkD6jwWLGtXpmzWQeSLUkdGwPK5Ur31fGJHvC6tYKLLkb6bCAC71B7uR44kyufP5j1",
  "key8": "4bXiPZd5kfuqoej1K4S6bNSRU9B5ZoiuvbLnvYJJpTrKtez8mCWuLPP3FqEE2y19fBrdCNxW8tkoahoqvtJmPezL",
  "key9": "5EXYyuDVAhvyySiM7HKGoiFP45oPnB5XYgVrFzLbxU9GuaW3cmsefob1kVWGMMiN2rYnVyjrLLnqhu1FM9kX1NS7",
  "key10": "GUwosgxSXucUQ6fQCnMFaxFFL2BwThkPaop7Bo5Ac9c4gRB5PQ4mKcLfgRoZdA8jUQJjJFkKtKHapnEdz2SN5v4",
  "key11": "3VQm2oqSpEVAKR5vyjFqzLmmNnzR8TRXJ4irkV982UdEwPwZwsfBraizRdCBoNFE1b1YiwRQAbLncsxfaJnRRC9X",
  "key12": "3DYr7CX7MnaTE188po2GGLbgLoAR5DWAEERB9TuJNMTEtbL1QAymqSjBszvZXqk9wXR8Xe6brpWWtXJzpwiQPePa",
  "key13": "2EPCm9VZ3ZUWFx2rXZQmhAgiqhmB6VYFpuej5pmi3SJxEtPdHoTDa12Cw7QkLJmokZowNmW5BUJRZit6HBkAK8gG",
  "key14": "4Jhyy7igpmzbJ6ViGtEDXjR8SM8oRTbV7U2mve35V7A9XdLdVCmtxa3VcjnogKgyCfEVqaTe4jFEDXhMm7CYYvXQ",
  "key15": "h89ctbq2Ar29QVKBqUPAESgXxf6vH5Yb2zq5nwM4AAUWen19GBZcc66Bphm74c4XaGrQKQomfHfcLZciixx9FLZ",
  "key16": "4ctrrtqY74tpVt7oqXhMuwvRdr3DKSKGrTeYsGFpvL6xypnDDDJ8W6KeRyffdaT56dcSFjXRdGjMxzBN7yuwoYYe",
  "key17": "UHRKjN7isj7R1fX6YkAaAvueCv9Wu1yyoDWs2BxC9PaJEXQp4gjaobLZLUxETNakCLYtj7fTKu5nwZo3HFajWig",
  "key18": "56aixxCdXz97JMZarq6Vv9TBj22cQj2VYW1WSnbXyRM7767Qcg5oHyajp9Wx9RnaMtKMtfWEDPTvtoXLfmfpawjb",
  "key19": "ap2D4AB3LZvQioQvhXw5oyoMAWa6waPmeTxuvdD2G1sSEtiZQKqqw5uqfrUV7Di5HETk1HotgJUrsHLQcczJWZD",
  "key20": "4M82DYAEV4pfcRetZgLZYNhAqgRSRY8RtiqWt9PqotUDYEbLXhobLDtjpWhM58Fbs26z141xuoQuA7Qx5D8TXvkp",
  "key21": "4TqcrLXQ6mMQWcXzmkuEj4pqCM57egmo2XggLGMFuff5GWP9YpSCY46D21q7ZSUnWiCXooCDzm8RWrd2UDQEm49x",
  "key22": "4C11P4bMJYZdnNhyTKGVAsV6XhNkYdu6CH3ZVJkGr4ttwMHTupzHXFtWjCUy3GmTUvJGA43Vq4pWvhN9zHK4bG5M",
  "key23": "5y6r4SbRnuuyeHPr9NhgteFhsmJZQwffRLKKFM3e5vM7NaY1NBi5vNyLcNrS3EfrShRGFCR9BTFhz2wPpP6hvuQs",
  "key24": "2gUL9XuyS3is9BLysfoBxmnyztWoVnyZjDat7KrWgNKJ6Z6dBsa1wqREmRBqYNW6fj6QVaXbjWFM3dHPkgZhiUn3",
  "key25": "339H29V3zxZuHY9M88Zr4ckeD2XJgrVyECiJZNCHkP5YVraP3un5kBcqV6majd6ggN7HJrAAUAXDaHCPb5z5ZNpB",
  "key26": "3NTBp1vAmrv3PPPDMTCMVxSzmGwsmo9Z2USyzgxdwVoHV1mMJ8raKNCwASVnovDjHxbPpAWcXfFhY24XrBSigxEL",
  "key27": "2BXeRgnbaSrDvfMHK9vrFVi2LgM7ev4wLX2VfzVQLfUieStzK7tbFqF2vtYRPVE9qQqR6s9AUr4Ur2EHLTZkMFPK",
  "key28": "43KQZqnMabbiE9HfzJ4XMadrjzwP6vd5gWAPYMXfaaDgsuLAGa6PJmpjVPpYszYbP7H75hwvQkxcgwzi6526tSMX",
  "key29": "2fhnhxWTjAe2rf2hB3nCds36cSXkXkwGMthoUFvfVQSywZKQSGnbDyZBGsVQKS6yCe45mjRtt6m5CymethCq6pA4",
  "key30": "UiNnxc6uokVf22sonb64RkBAb1rNUfqJTHkkYdyUWQrv5vbwXTKC6PbTVpc6j4tSA7BjzUAo6fDFyezaDJGxNhs",
  "key31": "57JeDw8Q7HwLJauqKwn1o6c8K2WsW8eE1daxtqGCR49FsVQTSpaUfsF3sbYteFjAKnGy7kzbqJByyvMinw8aQbg6",
  "key32": "5oCfnr9ZDgdJpCK12nJ8xGCGFeQoF14BtiL6qniiEsNL7aoVYcD6kkuwKjV6XvZjQXwqVpKqtNa2jjSEhdHf21yS",
  "key33": "4D5vzZAZUFXDqST6Zu2EfNLY7D1VxWFWkyV65t9S7z1wdARMZ7dsaszFbkKAbbrcaXzmTfwRujZvwZqS9jxAp7n2",
  "key34": "5ZnBUAfWFh4ZxbarzHcTMpFYW1apmgYU1B1ro9T1gu5B2iYAESq8c3cssCQDGminG7uayrc6ydNCfAy5SmZSbLYG",
  "key35": "5FUG3bzwfQ4EyfFV5FyVD9wQw2Pih6DT1kFRs4VsUPsPVtT6TJd8APPYADjnPkgnPeWTShDyK6FefgnUabRTSNCV",
  "key36": "7krvoHdang3riwAdUDnXKbK4Soia4o3goPtSYbFLgXkvB9cYCv1uxajonoVVx6cq4QWbpvc4uu4ghryNCzpPaoz",
  "key37": "U7h5FprBFHGB89UB5MfMjxSLQF1cSKNrzAwB4WiyrZWGqc1F6NgsSrhKufqjbKQ1UcbTmcha9EyjABdTGF2JLJE",
  "key38": "2Kr4sPaKxURC7Xjkk5yQL7kSx3wkqQKBRKKcktNaKtfDNLQYw9zGzXZrwgPLMnbaWmQFw9hP1Bxec6YCqL7ngnh8",
  "key39": "jKgP2Yo9QSQNidgEmxNMjtHMzndzW7Kyfmsn7UJ6tvBhCrh8c3ciR8A1GMdpn4MkGrUVuQ4fmE4dyYLdum8T9Vf",
  "key40": "4ofUeigfgRHej46ZpLwkTgAKWZcNPdZuuv3jt5wsizaMHzkt5es4VfMBuDkLrxXJ1hE4k1Pb2cJbY7WecoYH3wKF",
  "key41": "2vpuFKMuzyMSAJmteuogWakUjNELqsfv7weLZoEy4St4LKNpeEpXyTKfNSKbG6bZDT58cCUAXyAKL5EgCR9aok9Q"
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
