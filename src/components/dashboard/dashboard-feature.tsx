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
    "3RKniCXGL855Emhpu4RCuhoeW1Dsdm9FVRhxfVcoTtnESeJbJzwmXYoQ9Y5sfqH9skahzzRbcYgCDbtGVktoGaNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnMsA74xs1mEmXvzccSorCfdZr8g8Jzs4w4ufgJhz1cAx1CA8uiHepPjUhp7P4SLpJkKYtsR7iQvajXYxwFS7F2",
  "key1": "L8ovaF1TF3jtkMvjNLW8RhpbjxoXR6quxCX1ai8nZvuWhXGVFCd3Lt41vmVQiuACwFubCYAeJPZrXAq5q1io8Sx",
  "key2": "3HhJVpZzrEV9jwJ7nYXK2xvXevYZ3R6HLYMh9s6uhgoSPUYjgGR9xPvVQibn5AU6dxXhFvBKB3eWkfrJTj3xwm2q",
  "key3": "4R9UuDi5QzcpFgPybyG2AfL8K2AWPywco6c7d2Dm7UMwAS38GQ6cfvHGSULQzkxVHQGNRpGhuQb8CLbp7D6Lbybe",
  "key4": "PFvTHGiXx7YDEvDhbNLszKcEUeZuS26qfw1BTrnykiMQfuSMUo3scvyME3TGXZPhnrqHqHYFswqyNmkq34THq7f",
  "key5": "2wUb97szhamQ3f4pdcZXxeirxTqno3RxmMGJXJ7rwkqmRPqTJXC8hTne23b6hiv3Vfsj4ySdTCXqYprFePBLcKVn",
  "key6": "4cRvGEN7Rw9x4VmZkzweHY9AxzQaiSx3KstSTy6rxsiYdUh7UTSgjSyjS39GqCVgGTvzbVj1MP4TQwaTsFkbUW5H",
  "key7": "4sxM7YkaHCsdBGupEzaiZASQP3rfMYS7GZhCzk6rLFHdiFnbnNDqWneV8SrzF7hCt57tynUBATDmT7fmowR4VSwk",
  "key8": "vvcU2jm8imx6Rt6CEvSQfR3qNv8byvWwPtVdSF8ZpRvw64UJMBGVvXJBPYa7whfieaCeEYdfnEmAeV3j4VmuoaB",
  "key9": "LotGupH93DwZ85U3W3vDASAZvudeKTpszJf2Q3KAzCMy2WZM3pAW7gzCVXVJfNRU4X4zhAsEMRipp2Tm6tvMxSr",
  "key10": "5mybjPicNCga26rk7UFozxSF1HJuDoBt69YBCpAzfo61nYUpyvN9Upe7R3m7osdiC7RSfSkEqPdJFZmB1pMod2tj",
  "key11": "2Wa19hEtY2roLcNoEzmkxYrf1bx8M1DYnbqqTPoHG3tvELnPJLJc7HEJKdbWmLfiPrQEb7ATPhaXyLS1suDm4ubu",
  "key12": "2hvPbwZ14Tv4S6Boqqr9FjRAueg2k2FWLUXZ6bH1USoh95wAPDwrNBg493tW4M7cMwhbjFqU8Ekt8mRG5ETHy7LU",
  "key13": "5Lfob1Qk3dxYGeJdEcao8hT9EtRzZbV6XZfm7GLDSUHFfdz2VyJQTKT6HRRt2VhEyNzj9BgU9Rcgc5ZMzeHFBHrw",
  "key14": "5JT5VDeJdTL2g6gungegdexp2KmxDEefMWT2J98orsDPCaE1m9LrcYPwzANG8gvrrmzmpseVXqMjs4PZqhX5RN8N",
  "key15": "3Z8wruPUMbjyQerxANQNjsMaxfGo5SZLB71WEMjH2tWP1oGQETVr57zGTAwag99AxhzXeJP5PTzd18QR6Tug3y4c",
  "key16": "4BYihwG2mKxotXMvsMBJa4GW96g284t3GJCANiWva88jpuVa6VKB2LaX7b6zsotsdkWsd9X6gTWKt89dEtvVJdDH",
  "key17": "32Rrkh9VtpJckFT5AdNGECEPW7fn7H3stC1aDkA7qymW1K2WH6wRrjPQp5RNhWrdZ8ZUouXQCdadUWkzJZ729VTG",
  "key18": "3v24QPSSgwySER3cwhMtbjkReV3W2265avCioiXg2MUD22uyx4cY2Z45EZAAFLEoN7Ro6tc2tyoTWApV3z96KvY5",
  "key19": "5YywujMMvSg8vbkTguCyuxFuMrKyRhHszabKkSWNsuhrnkUmPNRu98w14LWEzDqbJQwkPshVwPSgtv9ZDwoXN63D",
  "key20": "csYnu4MNgUZp2QH6QUGHecagDyo5x9hgVHvCTjhZDZLdxhERnrKdygzfRmMAZ3a9iKYJECvDvM5SMSBgo7ke8ng",
  "key21": "5S3h5ZMpVSTQyMpRNpMeqrQ2hYMNBoUXP72bWV1v4jDyjYhKRGZAHNxyAn8EGzL1hAY6tBHgqANPbspAwzzDiDvc",
  "key22": "2nVjvveYVeYEg1Ca6tzMARrjKfZQyjEQQwh8fLnpzucXm8XJETqAdvBB9XXvHcMxCmVxoQoS5GwH7A6ZvEgdC6Wj",
  "key23": "5k6JcWrzYtvRzhXUC2cZFVRGoaVza8dMgY67bBqUP7kWtdzkoqeD23UcFUNMqzDpYmC27gbXERxBRhtsAw2kKFkB",
  "key24": "2vUfNuVYCDaj52j82Sc1JREobDBtGaV7qr2wKqb8FEZa3mNCCT5LhcPY2jnw4PdyGVuoGfc17mS3ZjWf1pRDaq3D",
  "key25": "2tnRGJAx26295FAqGGEgt4Y2TQdEPYuHATG4M2s4MtcAB1dELi28JgykRPKnuuAHq7kUZLWRe9uRbodLku9CPco8",
  "key26": "5WYURSHEnoWBZUyTfYPZsrsJ2K73m2bSLxw5whj7YtoaqSwihRhextedfckwDbxx5cqrSJNo8pruQuZWTMBwE7WH",
  "key27": "NprifbEFVcqnXozVaxPE9grkzipKu1AbFZgQJSDygTQMfe1oGe9MKc7cBwxazPoLDth7a972iKCMV83bbUhQKtV",
  "key28": "mUR94Erk5KDLQE5tT4qzk3eLq4AkKQ16LBnCcxKqSTgCUPH8GyNfEdDAmK5J4SQwXoMUN6a9QwVCMq6FpPimFvb",
  "key29": "65W37HKr313E8FkqwRT3TDB66z1B9cqZg7Q1VTJe5apeNwd9f5rCckJ75JLsvvYDo9yt1qYVUu5d2UNQrGZzts7p",
  "key30": "2UW7yZrbqY2UnVuUWBaXjAwog1TUvvDSrv5DjcJ4QnMzMhw6tRu2T31p4Ga17VMZZV63hqWVTkCTkKXvxr6gEsbV",
  "key31": "4nm9qMiuN2kbvJ9a1AZby6kuJC7MTRzCeY6BD3sFAyrLtq4PmjFCWySozVvMbJvuxNGqoJUkfVHFRuZpPBUMzfwc",
  "key32": "2PQWwcJybDpBpoyAtNm7dLU1pvkLn11oxo35FHrcHsCK3RQLmqf3jG17PKB3ppVeuzFcEcMhmcS1p2bp3T32b14e",
  "key33": "c7LTvptq4senVto25xDQ7rQgf6dX9xKH8yJbruSsjC5xnZu4DA4JKfyojLqPfhc8AZqsXCNo3JNXcxwJ147YTSU",
  "key34": "3UJEs25EBkjeUJfgeyvmJLNVC5oZtZdLCp4Enp8feNrukKZdBMqikUfWMowZVaQVYVMJkcmuDn2JAWiN6J9j81aX",
  "key35": "5nfRiCRojuX3wFtk8J7aoeRXi4fDAeH3bCCbpzr7gH19U6UzE8Rof96AUTXp4vnhHhKKCsyYqG4WfCSuYrR4ury6",
  "key36": "4A9tZ39uUo14vH3ERBBz6mmARPmhjdKHm9fBVUSBxSufSz9i37F5YeYRiqSRexEwKZreJZ5nqfaY75jR8RAVpbJt",
  "key37": "53giyCfbCxXL4StCdwWDtiQ9c8SzndLucWWGsQRkN37yZCtjHckvKnwZey1dANTaAQufc6FgKLAsX6HtfAC9rKA1"
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
