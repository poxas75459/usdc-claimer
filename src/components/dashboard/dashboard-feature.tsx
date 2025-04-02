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
    "4QRLryixx91kqMxmk1D9QAq3BVsNx9UpXYbbdQsaTV5YRghi3vY8HzzpVZ6Q5GofEXxxe5qbMMGMQa47EB1UjEru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veK5BW8zFZH3a5SaBPnTUEFedFgjd6KBekjHJiMqNHPpkKxe3fbLzFzjXawyFQ8Lpxx41kdpoQA39Jcvf7M3nMa",
  "key1": "qoHWZhCtZVsBBGqmCMFDxFjRnywnx9ZHmRMCnoMEv4jskrifUiLYHWnouRK2AnURG7ATbzuJQaKPAzfqaHftfj7",
  "key2": "3JfY2ULHjscdom6PWA6jUAE274LcLkTUTaWLLb51Gqm1KwzQ2G4RqppEmkk9YQ6TM91ta2WtxwriB7zoCSgNrVJT",
  "key3": "4sbru1m5UVEaG9KVgTaPhMNx1JDVZKzmVSByiwfMAFus7hAWRZzZFnc8q4gRSLBCtPJYnpV6LVixsjM7gM8vTFnM",
  "key4": "4Ug5Fvp4VVj6YXxoXuxEWo5WPGXA6ZtArhFWomguSWMmCWjMqdyKm5DGDvptsoDSg5AqZd3r71dsTa2mVa5sScyi",
  "key5": "3BboMsR7ZtcQNM34bEcopiYc3YUpD75vxheDRftpKKLqV4xrRTtmxztGW7fZtESatiZcu37i3711ydddo5BKSVf3",
  "key6": "127A5qvt96BoEHCQvPJWoh294WrvQsjzTeFR7RK7kYkBpwZwBjkzy8qoJJMPXNkCJrocFPfvy52kBbnH8M8pkBLh",
  "key7": "ZatvF8A9MXviLhut32cihj4CuGtnGC9MGv34ySzE9ccoTg99Rb2NbhH6tqyoqZrtGVoJ8Jja25i8y6PxaV6Uje6",
  "key8": "3Ss1fBYJN9wnK89xu2CtzFFuMZQ5CRsQ6sen68ap3qGQKJknVmzKMFZ1jYTwjYReUQPbW7PWvBYMZF6itWLRPqyT",
  "key9": "5KaNKKqsW8SJ7ekmm8U6aFgBz9s6DqCy8jevRd1f8eWkuywmFqNHg8h4DuXQUfG25Cb4LzhFx6R6dK7SvQq1YbC6",
  "key10": "3K5nu6RiXQZgjp63bZqYU59KrUstVRquVGQdNDcMzX1pWifqUMGUw39WYTYNG2B7YbhK4ecTeabkTMQvVsMzeFgX",
  "key11": "2ZJXy88MdCKf1DHCtvmUbgn5R4H1B1FwrxcB8xEQStc6iSR2keP5vTVYK4REBEftyzh413DZ13ENogDsgwrbERyU",
  "key12": "5aoFQkiBPFJKa7ikAZy41Nfyrf33Z5xV7bxYZwethrA7TYBYMHUuWXQgxq5YW2j39BzVBsMPpreNB5KKtAR6p5sU",
  "key13": "2UQhXHRRSuXXFR2CYDVszra78fnawYaq6ucsuYyWXt3acuEDViM1hFaSL7BbmyjsNgqhXNggJ3uB3zShr8tdMa1w",
  "key14": "57iXgpDHEfGJ13o4ssYQ5H5SxRWoCjarvLJYGg5wKdBhtaZjpxtJsQe4FX7W3SjSUaa3Uc2A3yqtHdSYxo9E3yPT",
  "key15": "4Cd1RrDPGWmoXwfkxELKGjk9xZhf39JddBAUjz7HfBjE1kRihSaYSwgs4pNCYrYrjHFHxRdbnf3HUWaGz5HzEhHp",
  "key16": "5MMQSf6tTqrCmxD99josNxmW7yPzp4j1nRx6PEcNk9fUogKrxJV8EVsefzBWJQq8NRSwwvQh95AHP5nvP6bw8Tyd",
  "key17": "Q9MoVLwEXaxR8LZnmRCpZhS5bUYjD3g2Tzetj2CSgV5o8wmjm5BJsw1A3ig1vAb9MqLXDecjm7qkSStFSdX8ywh",
  "key18": "4REuvsCK1kyDgwwiVZLHv5zgndfAjfdzYZ9qcUrc55UwsqsQ2zbQJc67AzS9TM1WBfB1jKLASkmGHEiNNY9x4LBi",
  "key19": "jXggQGYYFshcJe78mygLfBvas3NaJWMPJsGoqxHeNamas2saMNFughK1mVNvBwvkhtuKBhx2WQy5Q2S69tkyAzU",
  "key20": "3ifiZy152DdJHtHMpbofMaei6Uf4FAYmGYguXpdczbrXqPpNbSVqCgyzpwYmSzLcQPArrGd56a75kwgQTpmaZA52",
  "key21": "1cm2ZZ7ZqeuV236ZMNMkSDbjzDRgyvPfK4ABffGusZKNhaaQQQPRgdJ6sDafU5HcBjJfaUrSTRwDx4vMEeMK9N7",
  "key22": "32EGqGKko3YJ2H1c8UFeiQ2kHXnfivLQjF6xG2FQoVP3qHtducR3Uxezue1xtU86nRK5ybd8GZz51b4h3TMAQqWC",
  "key23": "cEcqbuJnUaDveaC7hZ8eYdPBWcHT3XRp3PqsvZEHNGMYofe3WkqyE68JBEgCSgv5bUaeKMgt3ZYCV8osu3pkLFF",
  "key24": "4HEHUga3175Ln8BJExsBWrb6LVdtR9eiGfiucpsy5GCwsn1tE8cMXoGcx5sUvmr1Lo9B9ycjJYWvkFbLHP7raUSc",
  "key25": "2V55YKp8xB9CSME7nsTAswEimo2P8k7JdqUXBZ4vExAL38MRADU7vciTuJ9WXNxdsYdWeQz4oeRwatKTn58XS4zt",
  "key26": "DQnAR4e5R4wiqx9yJUsVUeW69yFsB9QJVjkSYnSmL4hmaybCvtntcBLPVmFFBBHRAeGmGGmY5taojWhaoKy88E4",
  "key27": "5QdEz8cCDXywVpRhavCoyww8Dkzwq4hPzaYKvc1YuMFbUWCGLjZEXXMY4Hntfwjzda5kXA1b9R9aeUGum8cPupFf",
  "key28": "4T3bnjNjPmDodPh2Lre8uXH1mCoooHE9Qvd8KKHcdSmFBHwb51VcGMiUn9gu4kWZhHHSfjAUMfaNr9mAWgvGF9Rt"
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
