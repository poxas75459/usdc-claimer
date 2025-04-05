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
    "k3kBTSpHAmvgYawRsq1ZMzrG1xHVmA1XcZtjqPzTSj2ruBmkeD58ELDgxHJfXBYuMQtjK4PNDS34FQPStcRGbBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GS6kJG5bvSdg48f4EftfvvEyLSg2rYkxxEZKqE4U81553m29xeDtxUw7ybZeQyWBrgu8mWMMgmRerg2vovhibgd",
  "key1": "R1NyeRxxx5KCE7zTRNKmAbWwqUhc7sJGAHwvKWKGfsTUDrFJ8X2iC4hstqMmQK7rH45ZsjcpRHsQQ6jT3eyHyda",
  "key2": "3oARtinbUKZdJYFyKg1FJGwPwMbAkXUFf3PCqXDA2JKGiYvy1th7RHm23ZTtMJCqEi59gexu22Q3P3sZ4wtNa4bq",
  "key3": "2QGDMF5Tw9r2irLSQGmuMFJCj9kVJX6bKmj5pNFAoMPFXs7w6HdS5dnNAkxNDtC6iWaQP7TR8ZDnxEnXvn356rws",
  "key4": "oQEwx2vsB8ZE8uKb52fW3CdviNAFKY2PCU7kAs2gEsc69dY1HPUVjT4fgY3yXyTTXpC7HiYmtcpfVYXFhp8tFJ5",
  "key5": "3btEFXXwAcd8BsXAfzdcxfEQeHvcz3qrWTDDcxaWSmfH2aE2xeWEqitnY3j4BvgmgyFkoSfe6HJ6RgQ1LM8r1yCm",
  "key6": "sKqa59U9aRSRguynsikc9gyN6MMuFS4m5aWfuNSwnZCmJsTiMceJYgugGtzSEtMCXhZdpH8FjKRAAEypdHPa1vK",
  "key7": "QNrZhXDgj65BXHudoHQ7J2HPGmA3UVCv24zVW6UaCmGdGyreBNPQmp1Lv6pxCA7abzvxVqSLYFyeGEqx51MDtBd",
  "key8": "674c4ksFXTjdEsoUz35sJKodnLdbaF54ndCckiiiKkN4hZeTdjeiUCCxS9SZ7CTG8udvWxhuR9SuRcKumEp6Scs7",
  "key9": "mBDLY2uzJo3xmYNNuW3YQnKGiU5EixzfULkDcE96kMhUM8E5F4DzRytT4xbSRyiAnNfA7XQ662NSFP6LkgchZsg",
  "key10": "3ipQvxqWaYuQXcfKfPtu98jVGCtrHoGqNYSQ84w78yGMd2nmj4z1AKrcY1h2UXoFh4pDpCWxR3oe1G2VB5Uq5sci",
  "key11": "4oXMFsRiPQbhBwxdsEvz5xVjzqfie1E5FW2rQbPq4RGENtkXY2zxVLx8crfysCnQvtjoGiiPeyu2UuFT5hnfna7i",
  "key12": "kWeEJPM5sfipQHv74ZZeDVS1TPCyuHMhYbpPPFeDewhigSu4Xv3m1t2zXAqmzQ2fW85CrAvbp91Tt7vqZT3xTqe",
  "key13": "5wurweEE9MhRh4uZDpDKfNU4DqMoEKq3rMMfM9fyaudmKMJGJHk96FyKdu3uhyVoEnj2CFsnJnTscEaqVtnHnjHH",
  "key14": "2dfMPCU2dEPrY7uPauzDXZpdEDni1BQpwwfzBV38tsD3PPU3YxW9tViQDGjENUW2xGtE7xpcCBHbGsUFxcEPNWoW",
  "key15": "5vRh8pbXD5nyJizhAyXJDccFLAW9MsiuS161a4hJ4SaUGMdiUVreWizVuZfxo6rWYwoc1xym38FQ2E3ZhDP2v5Zr",
  "key16": "5i6RNJNnEn7pcYXoRDNrLavQp3eodYaLPbyQoAJKjptsMPJKtwUGgdC6CFkTL1JDk1LGep5fVBnTNe9GLSd6dQuF",
  "key17": "5CWPJ4pfKkPGVzxzuvtA98g9dfqkha5JDn8z15mhxS8JMAqcTA4aGGUezFkTQeqkWaV5TVTHnjhpWgrfWbRnt7SS",
  "key18": "pTm8e8fYAdvXbB2uD9AhQGAj2zjREiGsP8Zw4zhyQiMiViqjRsvcDuqrdBipJLrnp1yiFbXzJtTN2cq8yz5r4GM",
  "key19": "3gUUtzuZkEmMw5p7xZW6UawcxpQRiAFMqNv1yH9fHd4LufJcKfGfxpsZVX1K7DjSpFUZTS9wj5JWMtSe1S8VnfjY",
  "key20": "2oVHypenU62RQSfh4XLyuRirRobFD5Yu4mKSUUzmwYKbiQAK6K5wkcFaFALTXXTQeKJ9ZPWnHyfrRQtJeZypBLyr",
  "key21": "5Tvtb9z5KKvnMZSLipbgLyyBXNoKmXV8wM8h9ZCaPR951nrHXFo9ymzhWxWSYX5Qysstw1THDbnqZ75ACtyyAqPH",
  "key22": "57GxX8uKHtRC8VzRVGEsMVE6PbG3X2fyfqFZcpSmBpaK45moC3suTqcT5GdwyicsvTDdTkzgDG7U2AjeSTCBuBqP",
  "key23": "4fppJJgDD5pFKyksGA3hNoJ2kygMo8UsFZr1dy8gT15YP7Ty6YkZHu8mWvkFayhSJyNkWkWGg17nNM7TM6hYZFeC",
  "key24": "2m9fNkQ6wcSCZwLEGmsTEAmJ9n7zrVCURu6DJRXiMcmmqX4cXqEwBbDAgAT4fjJUJwmw3GbU6kybqzekTb6N983Z",
  "key25": "515GodcN6szir6izNzV3Ggxgye2hsCWGZELAyhVGToZAtjQo9uC4Cu4hnPqCEiX9m6udVtn1NpAwC564gfCgzPD3",
  "key26": "5RPbqvMesWjhFDDeAnuKz3xLaFjPXNC96CGXMR521GGe1TdvEvivqkf67AsRZEWuzmQF1hd1SAbgw1DnnJkSMynh",
  "key27": "3kn8LsBWQ7eCZNhL2HrwECSznfo8yDXnGFweJeuu4WT8FnnMUnJ8BhmeiNT9H4wwypCqv5cq3XhqmvQN3zSoywRH",
  "key28": "52vi5HhTRUfYBWSfWhjFoLue2CzHUsiYEyZeaocBTcz5apFepzHA1coT11EWX9zdFuaeRW4yRBUXiNNqDH3pow2k",
  "key29": "XH4G4pp2TTGyqrcgjta69uikUDKPQt46gyPyxEqirnvp4DmHuHc2aXBVr46WQPecdz2oVnqQPenbqyveRvvqPVk",
  "key30": "3R3fyqgwiNNcLfkueUFiYyEzDNbRJZz7fFR7fwLh9W8M7UDn9pJ6G5nPZ1wH1qBG7U8hQCLuoof2oC5KrP4eeK9V",
  "key31": "2bfM6xr1iGH8LgEFPVTvTj5wBntRzMWT6ENW5C6hmZXDWwcWF21bogeajSNHpVYUYBtfkSrHFBZz6gm3rewnPKbG",
  "key32": "2VYFBw9g7j5UNXstMXEJ4sU5Bw2arQ5mvGofRRyvQbjg6aSGX3Yt7sjCEGF17n8t38q6b6J9Ke4iLUXWpzmoqxzj",
  "key33": "5HVV8hhPh7PuLnRvL1DTxjHWWu2bbQGqpdUCaNyNK6GMpiNHZzcJdNps2HQW3bemktoUU1H1PPZRhXk8FYPzA5vG",
  "key34": "2iwfsBt6wJRzAeHyV4z7FxqnpiACQiZsJYNEsjqMhaPnGJLAuQDWD5Q9g86xjyDcPSTH93HNF1HfFs918Kx81zPa",
  "key35": "57u1eV8arZPfanbbh2TTiyy1vkGEYqw6p2qHatqZNK1v9cUppCcsGHGGMy6MxJ4tJqfdpayhVfFAAJAn2FWRGoGk",
  "key36": "aZKjM6WZ8LSUWUSdQ5ywSFdAWqtbiFdgr18E4kxWPuFqNSCV9GSVox1e8u8yEU3bSKnavW2Tb5Qvds2JR6padVm",
  "key37": "KsGsc33AemHDh5jj2uBoAjn6bA88akYcqRJ7VUMqb6iEP4DxUpNCpE6AT24dneUTunA8QDNADbYhmFkp8JMGXyg",
  "key38": "2SDVu9vZxeai7F5w13mt9veh2UZRPSgGAKCJNLFWy9vHHBP4crTAFNjsftCfDTo9Gw3Kb6968vniGk3Kimrzckeg",
  "key39": "4TamNZjuN9z4rnSerM7tnSvU2VyrPK8MW3mGmuSeRq58hCf6yHzEScoqnY2GRusG361YfL9d26GAgMkd3Y6T3sBE",
  "key40": "yTxC23ev1CrgqmHgqSZxEUvBR8Dzf6JMsQms7qv5ZZcUMbeynSyN6SWTw6o1BF72EWKJXvZLS8SnxSbXPJTWiyb",
  "key41": "3bCuEcZb1PLs21b5fELrajU7rY3g5ByuV76nhqL9FWvZv5VEvMmHW3gKLRcgoHL4JFU1va7cp3BUZcj1SXucANQQ"
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
