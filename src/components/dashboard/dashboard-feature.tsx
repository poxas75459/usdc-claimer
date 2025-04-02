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
    "3BnFhR3ow7gzzkfzuUAECL1de8ypUKfYoHffAkUPEAX8vFruPMFZ7XPndweFUYoeFUBxEYZzoYzyrSHFNU4vHYaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVqfcBKXauJvKzb8x13BpAerQ9NMMAQqexeGoNeNi5tNX95aenXspW5GsMEzSb7BkrUGR9fijEEPyrp7MX4HqaY",
  "key1": "Md1UGhp83AEBDScSeed2MxQiSYRvQQeDBuMi6VkmbnvQuKAPXohqv44gWMzECA3c5KsLUd8EvT7hkqheYFwJzwd",
  "key2": "mRdkEZe5RH5YGCkcq1wMHYShoSZodkYBH2AZw1PEyeuQ8ehVZyJo8n7oVdp3D14irYNUHjky2V6nPktiDTQ7Ln3",
  "key3": "2nSPoKi5ECkbz2NzYykXLDE5LyTfT4y5TmQfBxG5jpp1afSeTSvERvYdJbpXJKumcFT1RcNHaC7U1wDP4Cvvjdno",
  "key4": "49MTPoh3F9ALx6imDoTvUbsv25NgACnBw93zMJM9qPwaT9xrBAJAc2W6SfuaZyDTsaLTEReMHHDedAPMGQVKP66x",
  "key5": "3F8XMEa5TmZkpRMX3abj7SLFckQKMXuZgqJbiNg1dTjZK1c89oTaMhPzQMse7F3kq8N9YLYvKhyJGv65D27aTA2C",
  "key6": "2xw8EG1y5ebTgHVhXW6LjHoptUCZEzw69KRWKSRhYQsErn74zP8Fzj2grGmTMHx1tAV55FCgNjnZSTnZThBzwZ7s",
  "key7": "3nNhLTckgxv6TDK85o4RrprY3v1WYgK5R68Q9Zb2Ruw6Febpb5koxzdH7pmUEo4aCnR3rThZd6fJHudMk7952MXj",
  "key8": "65ukrdFMUZ3T1S9UqLdPAqvBT8fU9M3sxhZYwnRQtMyjqq56HDJD9TQBGU8U4trLUCZ2nsx7zmqKsZv4xWdW2HGn",
  "key9": "ThdWfgFs9v1Fjcf63J7iXUhJdbgn1WRRJiu2VvCeL4CgpbWzCgvtcgyTMxUc9kEXPDKq2RQKu6aLMn4hjxL8NGc",
  "key10": "4EiVxK6nGArPDXVS4dyJ5hRv7YbaGjHanpfAcZst9aYzogEkf21YbQuP2GsZvNYWDm4vgJGNLQLxEYLumqKoYoyu",
  "key11": "28shaonsnReizyaLL1rK4KP8UCLMGW4QKdCYuErHm1UGmFfv1BXqXnJf3GnNLjz8i8bQgxc8LEHmLXMSn5deGY9P",
  "key12": "Xarux5PK9txZjYSs9XbMTyExdu8LFiBpScahPkEDFpxTPTKdz1G9rQhnJjnEBeRpk1DGF2oykudSRMb3ZrAnWCA",
  "key13": "3ZMUTkjnQpbxWZrs7m1APZSJ489ZFUXkYsjALGpqSibj6PgUAC7GNzSQXxqSoS9TyTDdb1o43ibC69ErZK9cDsDy",
  "key14": "2P48jj2JeKVC58BGtfWhn8pHmm18LtY9wwzySr4HqGCXbkUzcGsqQTwDsunc4VYBExmUVVciDU2znM9GSjitDac9",
  "key15": "4PiXQDq4yLV89bNEHng56h9r7HkHejymJYb7FA9upPLYKxmHW85QMYBa3zRbXf987C5VpY7N3kdEJa5qnP5n5aMn",
  "key16": "2pCFuYQBbV3EjsdUnEGjA9ZZMMUHrpHTuYyZX4LwbcdmNbk6eCMdbwn6q7DYesuL78p1QJu7UG4AxndojfzCZypc",
  "key17": "4G33CvqiGqRyyTtKgDd38xNHx7LNXhRRG8EvCcKEVjxAtwXai8P9WH3Vgtb2Y2gU6CXipFYFQz5KzPPaT5UgPpsP",
  "key18": "4PqQ5tPEJEmj3qzRtrZrw59SPJs2acPwWhn8aX72jEm4HqMWhyd5HFacenKtxcyhTcQtsPrKUSjMdryCrfZ81hsB",
  "key19": "61ARi2fzqso4mYi6a2LrRdA2CHtSdtJ63QoFLVGx3cmof7GQUVFmqaruT5QCfvdkArTr7ad4enEnX5rZxLnBKqJx",
  "key20": "52JmWjUdB2Y55WLajwPv7xTQZ2tB4HvU5k66T3Fth5cDHaUMztsrFd1wHytK6fKFpAHxeCeUxx3Y1pqdRrjFodoJ",
  "key21": "5WsoDqZ8XxCNQChx9tmGJbnndEvzzTkDqh1whrC8FAqGRN13gkA6ZQTqAtRHz14fvTYPqyUDVzeeMvwCgNGecMEM",
  "key22": "5kvd2Hj8oGZhaTYQqYiNZcJk3P9y7K79vVz8FtTYzLA8Kzy4czkGeX3TRXqqcWtWia326Q5TCRmFhEHspGJkeyZm",
  "key23": "2nAsBQFqtTGqbPbiQpPEyPLDytp62mjFDd7ipp2CkcpyREsexvgrdM8bh6Ft9QbgPVrrme5wN6FhMZEVy7KY7mBM",
  "key24": "2jEUf7oXVmyCRNuW5FzcqHnnyjwzHnCsu24Z2HX7PK6hKtpWsQpoqrcPK2AKZDJkWYiMhWATZ2xX9jC2M33F2p9W",
  "key25": "44Bumvc6XrskfVGpUm4UQ1dqBUc18C9Ua5xzfAWyd5Ead23516jC9TeqZpdQ43x7Muo31sHwsV8kgi2eRcCBvPPs",
  "key26": "yoXmTXDDJKkv4z1hmycLErQ1BeeNWsfDzDNw95k9VAwKsn9VCWu4tWDGqucfdHkxmis2XHQTJJike6YKV3GfUw5",
  "key27": "3RTWJPzUpFAtazqjV7BoMPsy2b5srWBXkHuodZDjbtPVRNCgp5U2kD9kZ1Stw5AT61YtQdCX437akiQZSbSdXSVj",
  "key28": "2DsFbD5G17QA2pWaK16vNebkAKAgHMMp7U4S4nWgXNz9qrWXYjZYuJVUwXaiHeDSRq3uWuoaw423sjrY3rp3eEgB",
  "key29": "2zAFACyEguGCs8y6kaAhQXxMUWrQwgQ3nQoJ8tXnK4PuBJpHjSurN28fxk9Z9M6xmKZ1YyxngxUmpL3dCNx13NLx",
  "key30": "3u5SeZ4j8X1Hd5YXyYhbevpXy2zZS6VrM5c7Lgvr7ZV1EKF53FMX6M3WTTBLRd6xPmo9jtuDsdTbnpwyAarafgqm",
  "key31": "5jvXStSD4vZzhErL9kNAdb6ut95LfQZuYqk2fswVSKEEskHtQqD6WsQ4qEAuZSzY4JQeEmGaWhEsT23B4ocX5CtS",
  "key32": "2LVegmKJLv7777rNRSmuS7hkpwdhfHK3pgGzcoo3dHDMHYSv9m8UgfxyLHJaSsZg5uZ12TXcHR3QF8ntQdkzHDrz",
  "key33": "4PF2ud6xTAwCdmUTQGKVyaLm7GCStkibs151an9vPAfHcNPfvzgqrywthFSACPYA641UAPzLLRJ1HWJVxFHH6ndv",
  "key34": "7dUWvrUd8JAuD9L5RHc3MnxQgheUQqMQjpknfepGHcBjEFuLsd4HLtKsdiUVNG5Agtm1GnxsQ9E6GSuJ14cK4Cj",
  "key35": "2X3RpkGHc1AuSLpkS8iuG7XLUXFxJVRZ21txZ9u3HfEi64nZqBoXPAKWetKMhsrP5ATDBJHHTy8MwQyw6Pz1xnPH",
  "key36": "4cXoy8gzQCoYxpHoRAVpveMNx1GXSUEPyNKa4D8NvgXvafrumzgRQF38eXkx6ncPZHniN8F4KY16hZUu7yVGYKe2",
  "key37": "4D6SUHfL4vGjepn5N1itFgbCdzkC9SicFWTqxmqBpUjUB3BbyfTBWKktagKVWBzwkuGpoAPggDhwYrCwccCHhjXK",
  "key38": "4TBazrKoVtTZSWmdgZKcVokCwnTopp9v89ywufjY2czHEko7eK8AovYQ17FFhg8CrLvnUW8aAV39LxPwu8JMoQbC",
  "key39": "qcE1PQ5HrKaCRtDwhqGzvCa96kUF43c2nXmYUxih4asrZ95egTqBPnGSjTS5vB8vafffAUzTXgB6vg9soPvV6RK",
  "key40": "BWPT6yBHzqZumLe6KzF2pifb6SaT64RJhBZXzw3LpmMToCYWSceHLsXAehCjycTAnZ7RUz78q7XDknQpTfXaW4W",
  "key41": "4hmkGFHhKEBvXxW2sjmbkAfcZvzJpSeZSqZycjBji96NwEoS1qoLTiHuWmfhS3n4DEjgT7b4EgEPJxA4hfXXMAVW",
  "key42": "35jQpPdsZFhziYd9H8wVZG6whGzSicYdjsE2qE4RidGfFdS8ZJ2ik2z7Suv8BQWnqtQmv1jMANBzqyEf8ipUVAUq",
  "key43": "2B7pMU1xizB59qKXKq47o7Q4zkqufdbgZpk5MYCXizf9jKUhSw2WTuD7qmAHwv1iMbgzs1HqGy2kvPgm78o2MbH3",
  "key44": "4nmrYJGgUf3a8RHy6BfgU1gdiQMqpRDWN5BfVbgmnuoR7UXDtNoMFP44SKjnxcm8U9SicD49j9RDPs4aNajdzmXk",
  "key45": "4E6hzLpwrvsV5Qzyjii8dksb6wLvufxT24kMEaKJUtYHMZad3Dz626nHEnmBUCGYMqUaSShTccjMCWCoZ57HrmnL",
  "key46": "45bU4xRFsADEjp4vgsypLohBLZaYqbfCMUh72foLq1Eyea9eo3RwnYvppnAP7Mxatekk55ybLRMk2GCPPxJqDSu8",
  "key47": "5So1NesgMXJZ8Ltke8RLNCha3HQjUqoTA4MY9UA5EwnfNSKSjLXuYspmC4FomWjfN4gWzsW7j5n18ApWzKgv3caP"
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
