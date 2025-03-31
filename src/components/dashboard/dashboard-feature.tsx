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
    "2zuNLyYuwxttDgKdjC3eLPBYw5EKP8EDH4f2LHrMdDYTGg89W6KrQk69thpySceDkjKiZy6EyGSWjYmPhTshg7Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjigocEjVymkoWrmcnFNzBtS5wb6iUBusHe4micd9xeRm4cPbLDfupbqXzULizrFby423Phua5jU9XYKYs8Xewj",
  "key1": "3UL5bfbhjXFcYTiYHQGPZasMNtsQutJHyFd8fBr4zcdRvYHCCmmixp9tnYtsA1WxVKR1d4f6weakNbHgBFDpeKFK",
  "key2": "5x6vooS2c67n4fCZjJkZhiy3vjSaZfDfcaAFrTEvVoE68CrvhWfUt77Sdw4ANhGu4jAjojFXDNZjbFWR7AkEYNR2",
  "key3": "2dRvxJ8gjrdUhtLzm2sg7jEUdEshf2LRzJmdDKKDzjxTx6nnC5KXMwk17KVMQN6r31BjFsy95zX1Vp6LfunmbqhT",
  "key4": "38XzjPcS8pZPZYf6Ge7uVzBqT41TCL2SL2HDGSKfwtvJd3WAbehCP89JiLYy6HRfPvbbuWVMtYJNDiCDwfFbHxjU",
  "key5": "c1DuB6oCtjazwdgtfRLxHUNVrezfTcj2vgKsYgAjmnExJNxSR6JVHGP21yEqiRE5Ui5nVYKyuUL5mpqbQGMy6EE",
  "key6": "5HGUy5xHWSyVrKMfvHHRuCsreLJb1zteCy1L6TjHs9vEp2UZUX5X8i5MkaBuhFhHrApnqxT8C27AGcVVmejc4W1K",
  "key7": "29wSWfpP6C42cgcYn1eEk5fAGRzuWRn6NPvMfSGF3qMzb1SwthAjTkAk3txNXVRCHrKJWzjVsa3j5NsDsF2w1WEf",
  "key8": "5qrXyHsT9BEYn9naHD7vKwdLatoKtjJ6YR4bescD1eNHwJkJGeGqLjdvm5L6ngMKeGdFPCMsZr8x2ob5uPoYFuNR",
  "key9": "645eHVYWsiwopYAmDG5z13bfpnaHiET444BjW7bzxreKE5QKRQ2QGCbs7r51ZZFo9NqYeRdKhPUfdonKcK8LqfWH",
  "key10": "kd5XMajhBZQHhA2rKn4RokbPQ4ZVnF2o5XeEU3fUapwz7HJZp2RaFcjsFZuUWidNeKzRYLseoUvykT7k4QhAzy9",
  "key11": "YnRQg5hnmCKypAaYa1vYv55GMQ7JYk8ekaoN7P8DeGH68etTh58o2VYgHVAqj3UKVDTxyNoxh23GTAcCLpmRPE4",
  "key12": "4gxJvN7DEcpU5upegACiqtwj7BqFCWaxNtUqDNrbHNJZft3Pje17MWim5wR5fjaJc7BGc1X9Ws2pH4hGmreYdYN9",
  "key13": "3YEdyiMorx8wiBNbFJHwbCkpPuGZE5Jbs2zkBoD68U65HMtwdm6CpBUapR19WYmRiL1jAZw9DQjm6WaomL9MdCch",
  "key14": "4A2P918N4eEEUer5mriqj5N9qBrjFJmmnVt77Xy8nRHUUXtnkCwEDi5J9uqNpHZP5B4tsX3XBqjEPnWwQfiNYopA",
  "key15": "5ixfEnKknRNykN9qXbdW7GFsLzHqzxag9QbxP3pzmJLcZvE2g4VvU25PmEaAM7AyvEbHFEZ46Cc1iYx3Aba63YGx",
  "key16": "47c6hHpRvF2Wp43mrAh9b26hC81R5guf87jCvrXUxPd4CgiLWESrY2EN5LVVfK3ashzZS6N9UNRoDCMnghxnX7RG",
  "key17": "4otbkfduQe6SiDGMvDbwFAAb2X6BSst5Gf8yhZThFhJaqcjVALSPknADmj4b2SuwbwFCsixyKn3mQrzrUCRyjBaP",
  "key18": "v6nXR5LVvF4b66An31nHzRdPUXw5nXTL6h4a8wRpFgH4CoaYjELeaNm2dAoWP4UxmmFwoxRQVqm2qrNDz1Y9uXa",
  "key19": "4QzevJrNwzwQLaZoHjVefV46dVN6wdaHpk8Yc3DJqNymg4uQ8MmaEUkzSnvdaHhrxvmTb9hFSAD2Zmor9H3SFyFa",
  "key20": "2a8fqWdwHU1tE4ta1uB13zE1yNRY1YDg6dNGj4DctFhcMxHTxg3n8uWyXDnsVT1zFtQTNSPEuGKUeRzD47DEctey",
  "key21": "2iy1bu48UFVrhMkGvVLdkWsugpcQPC5z8Ed1FB5GDSJqA8tm3aR3bGJwiNh1e9FBADZbSRSb3LZGKKogvhEcTdc",
  "key22": "49WJNxBSLoWLjQwBNqoFSX3Do4WwGK47PJ9cSUk7Ro7skVsVd86KMF6xAa6HuDtM4V9YpxsA2Yutnf8XWDMGtp11",
  "key23": "3DpjSE1ymuVa2vxzuFVkrUeqZLULaC9TJzc6QG69eQ1iZdNmh7hD6ivUKJgF1bFdAnQmkzc533dpHRnc9147sTnZ",
  "key24": "S6DMVM5AA8Car5oRLGiHfdptKoa6vTBuGXrwycRz2uYjA3PVQaoHgJmB3vA46kisY662K4VcNTeK1ccCwfFfGkR",
  "key25": "3sMeEPwwj74DxNscZVdc1V8pjrfZvq3VPzma6u7WkofujLicjMhDDMcLTmGiWVBEuyvCP71rhP8Kq33CarD8VtM9",
  "key26": "4vx5bwf6AdhectLoCSLpGLv8oazZ1D6DjG1aSVsZma6cSZEkWPy3SF6qymVMHTpadhM3es1VKKzq4VyEsNoWdaqQ",
  "key27": "GVMVpfrTywneYbd9QV9USY7nrZARDavDXLfkTCuo4KCxR58y8BQzegyoHspoSWFFsMvqZBG3nYDXcAom2ZzPNhs",
  "key28": "5kjJubkB8rfAdhf6au7WoDKns2mX5oYeJnfhqQcKC4jaX748UXPb5jakkEfReB6LQZSosDSogBNxDVkYHu3HhvRk",
  "key29": "4igaAMEw4VnN9fsEsJv7ngB66NKPZ2W3oETrffFPpNwa6iETjmu6U2T4rGtf1L5B3ZCKskn7uSfYEMVVbBMsQbdB",
  "key30": "4zpQQebWzwhSBSWbFH4HbfeXkKRZmxU9tnchexYko23Yevmj8g87htb7pGV74pX2UtTTmvCXz9oBqbXm1c32n71z",
  "key31": "2Lq99pXci7hyHmcN3jDGyPf1QHtxGLUUZDFC5Rspu9WYpdKNt4ogPr7s5jMDjPWrbtk3Yu1AobTkjifjxNnZ2KrU",
  "key32": "7V4QcoBxj7VUJL8p4HSWgCewbVWL2qHPLVAXmQY6NVHZmEHKYaazKZXLpYxULgzF5D5gfE6EJUsaAqnQhrFagEF",
  "key33": "5dM5LwAWbXXxNTTAq2jdQGcGimKye2oohqYd3xLxZQLnV8FPEB66xzS3sRHu6QyHttRxNPxwKepknit9hyPJtVoB",
  "key34": "raHpD5U9LsSH4RN3krzH4wgqwPYm1oLJvRzQE9D2sAXYNHriidvSmBvacysP3bK9KiN9zDgJmv7WfHjQyj1u8Bp",
  "key35": "3w3YXEiytwwuUjnmnfobPvbCGBMBantDsuZCYgsFZeX996F5Xrhx6NvrFGLBhaBXT6ZEJEvDSnU52sGKcYn7ZofH",
  "key36": "2dfn3oAEzybk3YVfex7o9vo8YXkcGNFqhxCeaPyM2gXXAt2s6TdvgAYmTVCo6hJUp8JQR5N9aVDuxJ7ShLKmJQPJ",
  "key37": "cKfoE8r5gbcahwU6kqnv1w3tTYkm1MbERHECT3YGW6VnLdSQhRyTPD6774oB2oQjYVftwVwj6XELhLvd25dXpcz",
  "key38": "5ofzKdUhnpPXsQQLiEFxYNFjXSBXBvH654kybsknfGJxqJxeySdgvaSyisVEcWQnA38yEzaDuLSJDRRNw6QJt9d5",
  "key39": "2JnNsn7xdLeQ2bUGaZrtJDvZYpGDKNFx5QTtdePWUmPFnjV5gBcwWAVCwCwGk9AZ6XAj47AS8TuGaAqPTdEsr8F2",
  "key40": "53ehxfJMdWJA76LvrUUzP1tvPdRyfEYpYDKTF4twwQERiMW8h2jpZZQ3TymwuxLFZR4s8DzUuPzRrUiAnYeZSTu1"
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
