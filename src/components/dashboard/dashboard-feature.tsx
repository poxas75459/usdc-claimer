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
    "2sntcda25W2LXBhozZxSsqocYd4EdYnx5t5Z4t7fFvHsQuyQ4szdRw2yjZo1eMc5LnpxYm1E9RC729koRXF8uYSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAg1zFG9zgJVRmGBbBDcqpsyCHhetPUDYHQFh7GayEUfqjPomqNeuCPF1r5bZBY6trKoQLTj7LVH8v1qkv7LzJ3",
  "key1": "2Zpeo1ieZBe4J7Y8PPteyWWu2zeb47X4JUiBYGHi3Wezcu2c9fw4cNnkEw7iGAHzM1w5BKPZjcn2G5yJsWUr6WJj",
  "key2": "3WgFLpMpmTj8DfqGaSyPh6HDDZVbrZfvocqJXxxGFtNBXXRVD8NKGRDJKwD1sCJVLdvDTXQXEYPRiqcGWBxs4Q78",
  "key3": "66oZGu1UwG9vso6B5vWh2StxJm3amDYrSPu8V6bbQevsVMYx36Jzb2b7zzrARa8YUU6MFTgRsbCfzT5tgb1xiykH",
  "key4": "5zpGo667pXXPg6NHqMPfC4tbG2REmSwFQ9fNHdqgLTQLQjM5d2mvSs7Ew8TQczLfHB5bhyyjDqL8jqN4i1kcSALP",
  "key5": "X9RPAkc4vQ74jF3i1bMZjXDfg5G3RUMaaMvjTnZqijnRXpJAaGNr3LpCmMdTdTZfy6jAkkGZ7G5echj2JYngsWR",
  "key6": "2GkJa8WR3JoobUrFKV1ttrRwdJpLtM3yGmWRAvyHUFNFhmrmkJi1xxjZn9ehuyCK8MBUpfR1RJk92FatVUBdwLLD",
  "key7": "2Lu46B167GHRTurtgshiDYd5DmsPmcUMnWAnH5rhtWNzzVe7hpwMdYtdPSsCi8CUzFWhb3ao1tWw6wDQfmrvEK7k",
  "key8": "4AJUGhrhYkLxyuG9A2hXdhagNWmxWxCdL5NxdAfSZYGU26XL6DWQ1TVwj6hfrucJQMFcZdhQbngkenQNp3LcTvfS",
  "key9": "35FVTcfs25Vj5xxU9LUFDn6kdsZFUAcxAFcozRyuMXHDpwEXjgyj8XDJ3v6Coj8Kuq2GQAZGTvDB1aj77Q9xT89h",
  "key10": "4KSYdHQYHg6S6HcyadZa6VJazBfksujGjiK9qGgygSCrExreCGQLcJZ3MmNoU8JgkQ4TGSW7dSjRMf2DetLjVeHc",
  "key11": "3Hq7DH55F3MEmT1RQms7euHgfZLBLETrPzb9QTketiLTBv4cwBqyK69Z92vgNg5BLYePgkypB7tZqkYwASVMeX6p",
  "key12": "3wY5Lm2TDmaHctgoKdRE12NFr7XEZj7GAMkDqwn69NknDPpVffwJ2NsrXHKEcJZt55uyzufBU9xBNnZCkqmKaQwR",
  "key13": "5n7ApifeoYKTz8RqjqW1DeLocmGds6J99krg6q6nwfT8X2BJcontJ8rrzNyUNekziNLtXhC5Jb6x5DQs2z6aqf1x",
  "key14": "32dKE8xsGZ7Z65rN3GdRYMHsj4QNZFcyaDkwHX2U3yt55YKXXQbPrSEWnB661jyXnZQpbNWS5xB5SYu75zwBsgBZ",
  "key15": "3ZwR8JgHB6mJccrxGLfvpRHhUPseWWPMLyxF6hPysXvaDJEFu3tkpiBz6yxgvpYU3gjyag8qNrGZE7TdxtkMen35",
  "key16": "2JFMbH7qLstqdnL9piLRXmrWeM4M6N8j393XZWiaWaqYB35RJsdbFoe4pJUgAh5pGEVPp1rwUR6LEyk79ZcrMaZf",
  "key17": "5AMX4F8784KzU9YXLzbdDoHiH8z21jV5VCcfoXsTL7nPjyMbd6qK6Tuhj5aS54Z4gWDRbjk2AbWJbbZF1vxVDkBD",
  "key18": "2AsCkGjCTLZsha3tiCsvBw99fmeHgDbcVYuHPU15HUnvofJF6Ngg4WUNumg2yFkb1Dbf6G9y1wyHUPkbYqWZGzSL",
  "key19": "5dfAu7geLprWtUM4d1bPcStcMYFojk9nUDszWfvjwqyTUs9SyNncQ3sN1j5vujUKygUdd5BGAadCzejJQ39x1Lyk",
  "key20": "25EZtnqj2bjiXkFJ8ixSXAeXFp1iJUu6PUYvQ5gGUz2a6dsdSpvrrNRvQkiYUdrDsvUvXdHZ6Ljqx6kBJ5eDuHac",
  "key21": "2Kk1WzUkTCSNgZjRFtjYb6WjcK62QXFoPbM8tFsi3GrSepeuUvnDPL5rxeD7AaRXo2BAbKdjMUHwnsr6F1w7HD27",
  "key22": "3LXfeAjdZP75q8DLGqNKpvDoTF4rakchbCpAL9ag688gcZEuangXmQAEU5K63T8opnZEKBCUnVMSZvifJXbGi1Bc",
  "key23": "2bem61L86GNsoBsYbiVEVuCjiUW6sUsg5SWgP2DoTLTdbhZjQxaGdwcfZQSspzzum7Tt6bGhxfsMatu81fbRAZg4",
  "key24": "4qTEFoBjupenxVkfiWAb2kUjiShC6eGkKLZvjCtwXxADTx5sBWdZ6y6iALNipTFyibL3MgXLrpiSkevJ6Ns7Zt3R",
  "key25": "59poz1fdPuWcHQFB7hekYyZ6rxfCr6uUD52doLh8CbaXRM4ssb7fboHpHggKs5WxcxdpmDzJoAwyXQ96T4wwXuNh",
  "key26": "2R4aHyZTj63p3b7ivnt8wn4XWaoDxri52GaZ1MRjZaGBfhxyKPs1HBXtMZDZKpK2p5k9hsSRKNjNFZWgMeJZjVfw",
  "key27": "2zcmGt3Vxst58UpXzukyTgbHRQ4kZBpKJjRxaYVMUg1GtTAmLP3EmX7ji8X6k3EnF2B6PSiDzW55z1eegqqfwZwN",
  "key28": "3i9omQgiuDPY6YxM6Bbhtiaum1R7nEsyW5apsaZjnLd4FYHSogFgA2pm84dX76qJjA5gNPPZxLMigVEMsjTJ2PPW",
  "key29": "4em41SFKhAh3fWTqAYLCjawWs8cYB2Rp6gJ8afsPwUr6keEgod4owJ7jh7QjdRbFg44MZqj9WVtTFm9bMmQxummb",
  "key30": "5rNduZmjbcxSRodKNGzdYT8igEsGG38V5L8vMoiAzUtbhy5QiVTvR6U7xLVr9SWkHNbyjLxJnMM246kvkPxcfcYd",
  "key31": "2aiG2AeUNjhEPqFBD5eUjDC6u1ftHNwZAnsAH44uif58xtD5XKsgDze3eD8jg22xtzGZkhKXXGWBzpz9gHfjuoc",
  "key32": "3HFHkGWZELMWdQDX6NX9yQiTRvB9fY7MsMJYs39jguMXBXfUoSJQ9qAoCPLR89eYB52tt6P2cwaeBmvUeBwsD1iJ",
  "key33": "5A7youUXvoaSKzCjnzDcUmzZ6U4Fr8WxWMSDucGZ8GPwCc3SSvopT5yqnRncgBMxSGxncYNsYhRmiahqy8wYevKZ",
  "key34": "NCSF4EMKEECYm63AQhsavuayLtsHd1JoP7xMR4e7XiQ4SFxsLstgDTqYDyJG49sQt414X47FkKLwWfvpm1UEkwS",
  "key35": "3thYVJoVi9LcL5ugVaAWiNmTwzYcRc5hHFosprXJU5QCPkxcxc2uajELkNChkyg8gUfWkVKmX1iHjCF9C7iC9nss",
  "key36": "Mgkw4uym2BArQCMs1xW3FR64cCsDGH2aiQvGovdDP9uDC47qnNge1czEnZ6we4tVdo637ZebktHE4Mq4JQdTsTV",
  "key37": "3KRokgpwGqonohtyFAs1aaF6fWBQsBVzxy7PeZrKeetnU7hn4aNZq5quHwryUUSXLSH1YAfbzbxHyScvpDboBuz5",
  "key38": "48r657upKM59BHtPDJroGKJ78J695nC7W97LBMdtbhukTT9EANd4utwDYdChKJh4LMmUvq4gNQDEScNLdXYqFBYA",
  "key39": "3iz8yyqCo3mT827GE3CoSAJPu2Ky9AbhuH9P95w2Bb1siQnfoxhyKiTwifRL6tCXYt85oSYcCJoNC1iq4DaEZhjj"
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
