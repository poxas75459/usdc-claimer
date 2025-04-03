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
    "3pkZu2K9cMXghX9gWCUqiQhdSbsxxJHG7F9yRFp2YZg5AnXiV147VEFKvq31iiEXkzTcMtiiye1juVWtHsdBw5zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aonc1P7mtsT9BKuZ3za9M72CCxNyr2zdmU2RSwzXqMd1oEReW4knCvfrXewmtciwrAUQnaTQRy5kvPZyxv42r5B",
  "key1": "4Bwc3cb66ApKvrQ1yRiPhWLWh1HA2RY8DB4xGGXGmUoUjwm2wK8q1C3LEn1VedBWFD3fRv2my9hQqpywG8eqfW4q",
  "key2": "4UhJZmJd8jazMPxUDn9dZHoBE7c7L8zeWyom5tpDipaaxJeAnzV6i6BbGhAHj2xNQzSDPNcFsxH9CzvdjS23eXwB",
  "key3": "XCX2VusxaUefpo32MjXxqVDg6J9UVq8d9M4JHcnMDKSK6ftxy68BCXFkH6NrcrNGUeQYaoaZTQCvUYnXKEaQy7x",
  "key4": "4UhbXUwn8uphsoqwwdkS6bZd3RW8Q4E23mCLAE7UhA4gBzpjAhzvChksWtTbEGzxjaNVDQ4KbnJ5puxG8XrDCeQP",
  "key5": "4NRJGMox9XW7LHKktD9bCu2Hun6G88rTAfjXWzGKyoJpMMwDfUHBq3jS5gDZtrSVZUMcC3RGGqrsL3Eaukf88D8d",
  "key6": "56AyKJzd4M7BNtb21P1mDaDqxwcpEZ58ob4zsqiSyig3WNUk9DvZTssTQtPGMD4zdYwE1bZYUGVvbqjpx61LnWr4",
  "key7": "4HLA7DQLVV3LQZfufeKPFNLhQfQEHhV6eRMbV7XSUCLyJ53xNTjBTbVxv1FXBCVV8TunkuEvyuo5jAARd1TSo7qR",
  "key8": "3jYw56NnV3ixaRtcXE6TepyWRZFtZ5cteYcLCd5A8piBqT9G9RbNSyk6pGCgg6ESvPBnUSPuK2y8yE47JHMUhxUM",
  "key9": "5A4t4Tn7hszgp69biXpRhiT8fivUYQBFPVFJzXVEwoLU1MzWs8N9ZZ4anVFXji4uVQbZpy8MjFVjWFhctcc67Sxs",
  "key10": "3MiQ2rcWaAmypQrVHemmEdUeL65hwqBsVgbwocufrbmkBzEqKQQGRFLbVCiSWbZgxU9acQMkKLs6kA6s84A3Mqig",
  "key11": "524QeZw5YqVQXssugXcap1yk1FdNrJGH5R55yWoJ9aaHaY25AiYKptSwdHJgMCMgaouYsZNRmJ2S5SUNsyuXwNC4",
  "key12": "2bbrwYvenVJJF5PvenHsGUWw7vH6engAf1oysh3FHXcFWacGQ9y9B8PCqDiWX8WB5fLkkdnk5xNLCEQn8q3JJ4Sz",
  "key13": "2YKCYvfgzFiorrXHiLeioX7HMc1aisTjD1eC2f4rAKtPFj8doqTmJUtLp5T4pVDnKFXQ7daSAotq9amVH19sDbDH",
  "key14": "3LZwNVd1KMnnanB4RrjDKvu9NFiaVrK8vhze9ZjKiiaag7mj7AxJeXQyB3VoYY52McLw2rFcJuaKPWMTBQEo5DP9",
  "key15": "67pqAJB1bs6Z7HWhEmnPJU9r5EJFFvpP7SR8RHckbw6YcGzvnhH5jCQ41XNwoAk8yGr9UWyMu4MGHXu6foCQvihy",
  "key16": "65GdPDJZUcPT8yexnDXWcH5nK8dtnU9sHFCPUqSc9op2u87yBt7Jzf3TNn16vJUSFbQegGcgAjuPpK5UPVZJKeT7",
  "key17": "2ppnpvyKzmWqA4xzv6XkaJj11MgVYUKJuMGKgJP7Mo3ibJ7jdk9gxsRJNKM6y5hbbe89eZ3mdsNG6ANBP8nnX2RY",
  "key18": "4e6B8BUBm5szvNeyTNVSAUFs9iTU9cWxtWMnZNySxkafqA933bbEN36nCqCBFdqhFSt3EPcmUrsv36sPQDS4wjiS",
  "key19": "2CSRDy9oA2NSWg8hvzgScfgJ2ByXoaMW6seNrQfXSsQDDPESCBDzRfFjonsW6nCkTGD9Jjv3vxHAB6kksbjbFZZn",
  "key20": "25WF7VquL8KEUFgJ3GuLMPyn6sbSs4K6hAVTdUW8YLyK1f1V8qBqvbnRMKDk8J18ok1MmtZECD6WzQGkqUqMKabv",
  "key21": "x27WUdfQ3PHBxwVqxA1HZXwgxSsBSBPKhZFDbbLNgwX6KQ9qnB2ka9MJSWPM7Qt1ywBbG5xgete8TEjq7EqVwZZ",
  "key22": "4ktvac4WRDeU7hgufgizBoSZwAAFdsEd5t8PPKMgq16pL8GbjEuutsLGXdyKoQbjrVjTswY1KHzSHdfvoJ2dJLEw",
  "key23": "5U3GaBeMcS4yDBm6a8SopioS5Zmzg9SwRKLeCsEGmnw6tjey2kuH2jyMhr2gDP9FjNLVgbQzBetpukbytVV9mN5N",
  "key24": "4XyEfRNXdJ5QcCrZJ1qRXC15iFV5JJQUTYqsqR44G3PKBHjtzcmmARVQLDRSFXQGSuiHpkhjHciyBnkL3ZUUdjRK",
  "key25": "4EprPQ76mek5Nk9uFbiLxsHoPDPzF924K3rPNtXb8CxPf67KiwEmYGEvmcCxTSTjxvBXHjiyEwbSWQgaaBskysB1",
  "key26": "xQ8nA2xhbbknidhdBPuLxP4seMqgd2Gfy8dEaoUXGYbFtc8QqPRa7YpXF5KHNmd4DUX3VCgTCJYC6qcxKJF4CW2",
  "key27": "3vA6yuk6x6jMTHcVdae7eLJ4pgmhmjpXmidH6JkrY57dWAnsYfPkWM91ZAroGpJDTuJNWgqLKUpAusiL9Eyixuvj",
  "key28": "3MGjxWsw8DB1F3HZ1JRCpBz2KU6iEC87BdedoSnUhSs58kGS98oQU353LHg9bv1M5NkuSbqU77QLc39tEua7Mf3U",
  "key29": "5zhFkCYDFwSUtcY5nyLs1Aor7PBPzNq3copLy7k4vWJSnWu9ByxuNCr6c8ntu7kGX3UoyKsUJngwG7xAzQVBXdSH",
  "key30": "4TwTj3ZG3yNiDvvyXd3Ea1Cgu4qGu5KxwTN6fzuVWxyGjVp37oYwLeVbfKAnX5P9T1Xkpj3bU5YSw1nGkCKM4VAG",
  "key31": "5wdYbY8bSsQioct15BxLNvvewu9oNUk8wb3msxd1VPBug2mT5AgfGbzuFwSmuy6afuEx2rnpfVfoCfAkEWofcZXg",
  "key32": "4otCbz947H2pm7Kzi45gTWariLJJTYNGocq76pDZ37iwEa4VS4ksk6aBjPKat9Xc1JYnVTQL9DjoviuVGwZ7wSrx",
  "key33": "2Mr4MphzNzBGLKmqECGrt1BHigQrDvowGDTAvTHwrQuKQNoYtWVtZiU9UyvATDyuy75fz7eLZVt1DcJfetvgtRsp",
  "key34": "3PqMTmFBC4Yq9KdRYVCFEvE4ikMQyucmLTXskzYCvV9oyrqv1ujvTKPmXRER9Nn95zpCKDU6EaZV6o42FNNiQ6ak",
  "key35": "4sv7UEewNisMpceAHhpqsWLxWkcKLuMtuNu2CygX9W1fro5w4CD2ZTbY78YEHeAzbMGGVAxmsqsPRGb9Vexqvo5R",
  "key36": "s1qr1JJDFF24e2azAwd84Pgvam3SWGjNoxcF9pcydnx3WTxEHzWbUyGdXG7xrNWNoA1v3uYcoor6jsAwjGacqm1",
  "key37": "4cyLxK2MRJuZaewF9KYBM1w3fCNVfDJE7RQaKb2k9GQ55hweDSGHtNFddt58f4tZFtcn6fEj5owj1CQr1T1Ny3Ni",
  "key38": "4yx51XqnsM1hz5kdC2wvtHh6asxstis6gexP5rZ5QgfAtbgyrKKWg1zqd3fW96SQEkVeHKui1FEBuRszGzZosqWU",
  "key39": "5bCoEMxAdaiuf726Nv12f6eHG9VoTtRpU5HbMSRvVQQzHDNhSVDmciU2cQZYnLWmC6B2fGGqn5zMNK1vqdHjNnMH",
  "key40": "2FcEWFnSFBBA3S6YtGHXuU1d8U5yGeDsqD5mJW1GerSAKiHT7PHBgsjUj1KwwcoMNbiMcHfym24DGpQvbV7QWi3R",
  "key41": "4X8QcoLd9RM8ex4cek3d3VNgzq4EiLzmdVLL81pNRKccBjuzRuFmNVvGURFfe5rPxvQd6sDKcVvSokiny5w19q2M",
  "key42": "4Cu7EKchuw8zEGDYWXiHfKwiYufDtqaD2kTKTireXLNpY7WiLCvuM1YP4PqdDSETJYkpimXcZSWJaBRy2BUYNTb3",
  "key43": "5eyGD5gnPrH8GSo8ycnVZPpGMr7WeyA9GUsF2NHtHLJQVDivx8eZUbF7ku9puBPze3XJ2jGB9mMmzgohr9mFvVQH",
  "key44": "TqiYEP8HzoumX7DUyFWtdp3G575cnUxf6TNagn81K14gFg8DGSusBf5XT65bcEXsiEnUhF832xhFnD68dpSX2qX",
  "key45": "454uisTcJQGj3jEw7yDtYb2VyoNMZEJqD56Agd1JLJDmqW8ZaHYBpKbUGCBq5sUkH8BjoXkvYjrv5UbJewQsBrUh",
  "key46": "3ATssghwNk64JgPmXLUKvUQL6uoDYR4Y2dgHVY8Bjxvocpi36swgZpSph3qxQw4uicHXvXyZbSsvufjbrNCzHFzy",
  "key47": "2s9wGAvGcS2prixeporMD6M6HsyUF5YsgNStidvbK6m6nr82Pc6d7qL8Fs6uy3ChJwt7e6S5wENhonHCEkkWCZWo",
  "key48": "3FCitMWwyiDFm97R3o955BjUTi5eUrjh6mzMTtJLeMgJaGctxaGPSqk4jKDkjiFS1kLbd6MAFCGrP1NXV6m4Hjoc"
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
