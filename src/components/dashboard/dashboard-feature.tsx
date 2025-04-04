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
    "2aG7wjubHnoZLre5crvto1YVAaMZZXq1hzK8EcwvuL8KLE6D9yi8zQqRqZ3VjZh7usxNyNtFwYURQ3Ppbz2JNn9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psMUojTZFLp9rqP15w7iTXjkr96ZvXwqWNALFcED8J14Zpsq2XocrMgJicCRQj6AqkHDzg3fCHZ8sieCA96yNeQ",
  "key1": "2xAE9vmbVsZcr9fucbpE7iXw8vcC1fkBWWXVYXhpgsiGvMsDRciJeLYGWe6v2swbcGSQRxnFtwdrdxADSMLhyPcr",
  "key2": "5bUmwLDeeMqMzRnqyk112ctn1qCieDEZXn24PkG5vaQwHoY5G29vmmPkTCzRQ5NMsCVcSYUV6FJ9b9dswDWjudaL",
  "key3": "2TSgnZUV1Wdq1Xwh4Kz9NARQRxHtwhe6PXn1Hhi3LkeA4GUJk4jZwF8QtSLibfGsxZLnjXhAZkBee36XhTnNdrBf",
  "key4": "CirxFP9ySQ6JXLP5jQQc8CuDqAHctoSd5fZPA5GobEkyFBKBmzVQhWkx5z4G58sBLhgoixkmgvtTyDKe3vyfpWX",
  "key5": "nxroZpAUY1LVGSmd5PnWFjCChyv3vSVajmq6aT9U7NgS8mJfb6XcjwSRnMPH2iTf3Xf9aWUsX5gKx5nxswMNFHS",
  "key6": "5rCJx5NatzDXMVA3S3TQDmqjifkWadAeNXwzmrkLsqDEUWqZK7JeS7h5mYpRjj2V7ZWiuCQKecxAm4NFrEhKGNow",
  "key7": "k37thaBkRbTzE9fwm5EKdG7kYxiL9wKKhdeugCeH1D6QwSwyyJYCtAEVcT2gTPiBp3nSsYs3qVS2LhqfmhXTnSK",
  "key8": "4CRr1fjap42a3KXiiXhB82rXHuRVmxowkyPb3KBRSvjMccqqVo9wY4KrAWJXpv9xp6M1vM6z2cQdXEDSqzckRW1q",
  "key9": "t2Px1ALh8anrNKm589W3ygDSvJFbBrA7CHc4tm1g57fsgNTp96Npjp2eK3p5sCDRKbfK28BwnYzV6go85edav5s",
  "key10": "4ACS4eqxyKQR4CcLDX284prRViSvetRGWkp7LeJeX6azYCSreVacMX4cVqypzX7hRyThrz2RFphotJXbWxM3nfuV",
  "key11": "MkPhhJvix6R9Nbb9Rv4yWJiVAoiTjpfKMUtN9k1YKzpJ2fPW7YDM1JE16mjmGgk6Zd2bnLUinaHBT14G8f2TWdf",
  "key12": "55MEiSWEXiT41YzgmFJkR6R4UswCZ1XBut6JLinDUqmVAoJo9PNgDbJdPwv99zLAzthRthZDtobug981QSoo8kLP",
  "key13": "3iMR9GdZpMZUYwnjBaW23og7GA5wJmGJCEcKz1FqxW6eBXsoakP11VWSR1ZkNKTYysuitP9tfjzt2ZURhaUVsHx1",
  "key14": "4pJ4P7V7cGN4vTckfiyJDxPZ7TmG5EqmEZJAdfe3F7RYqUqZUDL57WKkY13kpR8BtCTBjkPdpwrBp6FGrzEk4MQN",
  "key15": "3nCxAa4ZggXHkQ22us65tYU2WnVZkcN8WpmBzbmbjojDXnWf5m2dWBBQeicG2BPpTnc7sSvB8FDScga5EeNdLXFN",
  "key16": "5kvPrt5if6VprqPkYspSaAXS59hW5SVsREz5M6e2nSsxH7o7kh6odjNzcySvFKqUfFyyVRZGvxgXLUkBK7Lax1dU",
  "key17": "5ByuDfKTqKGbF8Uuih7GXpuFoX8DAbRYZQmJtPWp3dAds4ETwzvUDwWEoMutB7yUfYJ5qrRTGQVtmDwkL8zmD1Rt",
  "key18": "38hjqWq1QDrXrFynRfq9j1G3oHZQn3BNZYhusnoUyCoZwYGP3U2s8XrT47nFfi5uaQE7wzXv5pspph6azyTjg18W",
  "key19": "4XGb28HzftVEKDMZ4vLkMY8NJvVary6NiVDHMRRYDzS5UA1ro1XNuT6ZMeJxNzXhfdruC3vMamCyFWFw8HtLrUUF",
  "key20": "XbvB4Jr5rSkyoRtEsC6nWvam5ixhVxkQNZRyWSWDLonjyRPow7Jw8xCqza9zSZM1VpA8KkYWF7Yo85nTmGMUN8p",
  "key21": "1zFCwqW8UiAHzJkQTcvtGK3Tmn6RAJ1LywKTFPFxuwZXpqXn6QpnzvR9bKQNwsj2efDc6uTsfLgsh8k1kQxZ6A1",
  "key22": "3DFUbmYbLyhzMftKKTjq6R5jn4FEDT9LxiCozgzXVpQ12bgVsAymRvSrG1GRVUdhNMkHsJMcdEsBk9ZQwNft7EsS",
  "key23": "pwUTyQxDdpSrFcu6f8ZfBn5XW7GCwXgwpYndqYpRgr6kSTAKw5667u6yEGnLAmNfXkb9hmLggyLNZMKUE23ta2z",
  "key24": "NryEA5peaekPK5Wbec7zoQub32Gm5UmNaAoxCYxv8c73A6eW4aNXtNR2vAcHXc7htY1cbAQAkWubKXHGpYxE2Cj",
  "key25": "3TrooUe26viJRSxDXaDpYVGfrpjHWN6dZW8z5Y8enXF7MnSEHeDawZ4GcjD8iZPzPqYQfnnmo6jiEYDk4DpFkihB",
  "key26": "5YYvpckSgkhVwrtPBR3rRz4gXtLsquK4ckxgUvavSCg25wwL9892qzsUHVEbhX7tPBBwePEXErS7Csw5ZdSJayqp",
  "key27": "2kJ2KtB5jXMvzpPt5ck7upHC1Pb5f6CBtNcR8K6wPFDP567G3oFtjVtePKKgjMsGnUkNUW1dXZuSjyqWhfScc3UG",
  "key28": "4MoaFeFncbebXcjbMc8pP1F3284KTeBwU7vJtxpHaR2cJs8JjtfLWgnAisKTWaukYws3tn9nsFf746Tyjnec6c8R",
  "key29": "Tbhnfi2YdjETSQe5gJ44ZzJWB8TYUhpDmEBcZi7SCK31GkkdhEiZzCSJv4nXaxye8XY9YfkgrSe9HZb7GWaQH9x",
  "key30": "34JYiVAPcL4rrhbEUkoQeGiFyNPvRjwkkecVQQfAX76AkkfsTZ22nEP59CTmeXwpQDLR8t92tpTnoNyFHTfmWJRW",
  "key31": "4CGaZxAXFpX2VninLxQKWJxbaCKkzY5C3RxDNid8FkjMzozyjPsHKgbnDABBj4YjphB6tW7EV5aVLD8FH85wSCg3",
  "key32": "4ho5WKTBjSuApKu3WNw8zxjjww6PacT2avi9RPzwWiie3jiRnkbHE5tp24oVG5VjXs28MjLnX7Y6KwxVAQmEnsaz",
  "key33": "2NoC2HnLK9DiCvM6RCGMuVsDNw9r8txSncv1neSJpK94YhFcPydCPNUMEMZmwWobRTEuaYWs1AwAMvsG4FyTFtdq",
  "key34": "3AeySfxQrmVhrZLnEgeaKGgLPgAbsKwyDA5gGTU5kGUyeZA77XWvkEpDpdaaq5AKF39LoHUjMXgC1rBu1y1uZT7t",
  "key35": "3DkidYSi9JdpMY2qdXewdGsexnH3t8khoSUdVbFKoPKgumiZRugc4LXwpAjXhiLCAFG3U2whg7iPE2HwoVE4JJHF"
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
