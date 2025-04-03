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
    "3fwJnZZ3twQUNzxvFkqBJvnz3aSebMSDYHdmHCS3FCLnrZXGZgWuWLzfnus8ZTa8ACyoRyVSJc68N7ivSpTfGe8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgbasyHahGCKUNMEv8984CsGn7hrVRVUDHnVB8P2tLAh98oePSxUDjXUJCQDehP8RkxbWvMuv3fpp1mhJ9zy3Gb",
  "key1": "5XaSQV4BAsDhbnwdoUh1YKY5pVKofzLcjqSn9FXP4pKxJ1n4z8HCWgXj2TbemU6H91GUMPNoPA9WCf6iKFakMT7G",
  "key2": "3ESNW39xBpU45FiT1q8Qe2WwYhHMFf8se1iXky8CMU7L2RrTbF9tdNtSgxUpNDVSfh8uUAk61zPKkg9BgTzkmwbY",
  "key3": "4Sg2873JQCjW9KaydgjUfio7ZHuPrbWhtfcJfoNDYreCSY6ZJQcz3w8V3ZgJXMwoMHCKRNpV6pFXduhwkTya9UBo",
  "key4": "4565pXjeeWynSMDF4nCVhST9Uun9ghBG6rfU8jP83CMhub8uHEFLvMHQvSe4PgeY23SZZoKrgaJExT5gzjr3kXhR",
  "key5": "5iBW7AXdwyBGCLrDEXbmWZjKVhHeQyRStCPFCcQ8gk5KCJwXjUD2i9nqAQpiKjztsaH29Hnt1AqMCmsNC5acc7vH",
  "key6": "2fkGZtrvwvrugFkWSGoK6sDAdUgQgS2gAadFC5XaovEp5QYx4nvYAgwMK77gELbgYTGZ3xC2PLZak33j7MX7paCH",
  "key7": "5sfcTmpczHTDuoYPKw4MaaFARfvhjVZMRpcDjYd1NEFxpRvpwBgNXQLx6Xe4LD7jNGZCZXHNZnVyyvsVeiyiCWPJ",
  "key8": "4GYkwZ6Fd2wNQzQguvJFP97SizNfCsREtWwoC7Et7Jn3aWMZb2iovTHpKUUhmDoiiRWnSBHi1HzFDyX6QNwhbSuJ",
  "key9": "3UEoX282k4VsZhz6ij7YHjt1GQUZiPtq8CL4pwakZBUJXL6YDe2E5FRb96GDy85VbX1E4m99YLjSC3ZJPsE2xfsL",
  "key10": "2NYXM31KEaWin3C3gTUbPQg1qdwH186iWrvCD3cK2TFMJBC8aRqQuhwm7G14523EUQpeBPVsGNnCESs8QJFhPHmT",
  "key11": "2ypbcUVfxSS8A1X4Hr4mrjZ43n2P2sgayDaknUesLtzNxNBwy2Y8Y8qsXg41XjEjnGvoBdAoevojVHZJckDnteMm",
  "key12": "4jGHVnwnqUB7U3utjrQmfogUU7xqdLNSXiNmCxsStdsEvnV7uxHYtBQ1rPVPz2t3BpnPE2GiRwfwjWPHVbJW8LVp",
  "key13": "mqQSXcxZUrEMr1Q1PVcNhBZDBDUz1Dmvnkfvrv8R2exerx8PN4gAvznqDHVvuVFtvze5PU6wWtuToCTaPQYjNaa",
  "key14": "2jiGW9xZrLDVjsxoL6LsqdNzpDL1EzHXJ4zRDSK4sLqMbeBoXpMszsR24BCqp9jGmT5fuy3KPcM5uuwiEvdaoqDX",
  "key15": "3HsfG35bX6YgCEjtqNMQhLAjo6YjhdA8TmVzgrSP1nVZV4HV2fuSszspA3iFdBVf6pH4QHXR6bSZQWhg976hCAwN",
  "key16": "37A2dMpzdkx8k9SU2aUehPW39DWVwmeNe19S5AVpiyub3bGgzL1kvk1VFqkjyVyM4QXxurCCH794cGSn72Hqz3Qu",
  "key17": "bz2MM7NdNLBUNB8s99p5bYWAsfCErcFXcVErDpsWS2y5srGJtGpauDcmRTCH2oX3JmPjedB4p28DnKuJAvHYW32",
  "key18": "2hP2BrMhiykDmTNmARJdPEvBUoWxQ3GZGy2TPEXbHceU9DF1H6jTovBTEsconSXW9txrgYLwXp7V8nDWJaKKgQiT",
  "key19": "2KSz5omWtKeTq2XivYbCaKVUMH1BiYRKNA9sfb1VkFpkTpBcM5vbehZ78KcJew4uVzfXa4gAKp3X1gcvosb3fQPR",
  "key20": "3z3BhpWWjs5Zow4CDR3GZD5FDYXetd5zJpXXx45Wxk4seq2MTo8yqUiiHq7MoY3ewFtHfjfJCk1MfvpG3LVEAGTT",
  "key21": "3WpC72RMoWhco63qy442Y43cG4yDCPa9yoXxkdQyH79LKuuoXMPQJVnbcTXhiAu3PnTvEQ67FcQnczkUL8mePG63",
  "key22": "4DdFFST1zKe58xYZA58YsbKhNJmHYm21LashA3gi4fhYGrotxLULFTeAVE1fBTcnQUSMbmB5dQE3jsmfrEDcXw4b",
  "key23": "5MoqTuJdJrJJpFDcRA7tN2Uhze5sy9ZrD143UyVuWnQoVreBWbG8KCG1TgoFQPyWkaZs9ZmFCo8FzqHQHVvthyqz",
  "key24": "4oyhjNTtHx3kLZGaF7sn4kjcpN2BUfS4Kvx7e4otB4zhTWpUDotynFW5izRiEuJZi6mVkcQXt5kN47CvXsYzs9v6",
  "key25": "3L3P3nNSevYLHF5uetQfGGNJzqPdTGEy21TY55Je6NeFnz1nib9UhDUfTKa6pMQx4aL1KmQj7TsSXNesZ8qJHVzo",
  "key26": "CXWYg6Xi1xNDMytpcABbKuWyNEzCzCT874CNuXY7jkDdnDvz7GGXoE5hguWSPYe1GJvCqVWa6xD3dYnyMahYjAW",
  "key27": "3U3EpNCyTaxa4uzwxtmsEZj93NwZy2yB7E9GQj47fTeGcztdL1WYpukVFek26AQi7dnDyZCsge5UTcYA12MNHRBN",
  "key28": "2oSqbMFxp4USiTqxopKMxrKTsfMwh9X49PgdjWagG97ysLtHHNRYzLTomgcW7EzKzGgJE2pZ1YtzojCe6xvU5YGJ",
  "key29": "36SbrZbeA8VMuc1U8H9Wwob4Hz9aKUxKss4MJD6JC1EiNKwdyd8qbcDxqAydELvFJ6CR2pEVjE7aSNBawrVvmHLZ",
  "key30": "2zhNykovJnsWtdan1jNNoJr4fAYcaSWj8eTZ5pzjePE8ABJT3HYzTD2ptaBLk28EiosJDMo8MVzBd9vXD1WrQw3i",
  "key31": "5pKpVUnEF8KPzQ9iwrr6tudHQsqSs6V1gX6dWumUVYpVBQsZLLQJe3T58Thb8XRrQED9yEEjHK27qXHXa5GhkRiw",
  "key32": "5JFKrD3HViFz9aZ9v8yEzaUALP9W5i7TEf2bEUaGd2PzhmvVaDRzNSZ6vzYNoMeMCnNTuJRZ1Vz6HXqNa2w6QHuY",
  "key33": "pcThhBqDfFQFGtcSVmzS2pU82W21PtVfaufqWzCJgRNXLxm9B2FC3SjG6qQT5X6gj6M1iDxjtDaueT65tCxu2y8",
  "key34": "22h1CURzAB83ejFLcZyjaQpavqQwziMWCVUVc8ypxHgypyYirnKz9qUw2x1srgQkqo2CcKKUkWzKxVPgJ8or3jwA",
  "key35": "56cQAA62AmqvsmBcteKicP53LwvayH9d4kMWtMuU77MvQN6HAmMuQcirKKCDC2skWag1xwgivaNnExeRfvxg3Q72",
  "key36": "EHWX3Wa4NxNAjsYAjKnxtTe63pseQAXLJfdAnMnjvDGNp2oyqt5DsAbBSv7qQitpSXhuxcrEk3njLNreAN38X9B",
  "key37": "2FPSxa91HLhgTD5rAHAwcGTUu6Z5E2UGsECUUDAvomWGZZwQXW7wiBoPYRWJC92QGLRYicSY2a3UDXm47WtJKi8M",
  "key38": "Gq1n1MQ2PmUwb5RaHUCqZXR7GCdzknipjr4MGxWMpQFgAbHReV6q39jxVoSJa1eCDWnKw5eXM3RVtamJQbFvyVv",
  "key39": "5c2bopEg9b3LtyQTXB4hAAVnh5J6MEhbtzQvrnGKhM1Pap6UnWVc34fnh6fSK5XEXaKV4jhhL4SxzwmnTo5cEtYL",
  "key40": "565ixtykdhNYfnQv8gzUYnuYDLLW7h6TJqCNEkzSr83T4wfWZsQzw7J9iVzBdfVq69QLnpAcqmDUi3GepWLGfedZ",
  "key41": "64b9oFSVL9xrJQ9QH5GwgPmhT3AYXR2njAM9AeokZXGinxjPjsW4oQdSfVPxYH6TCjAHPQhVxW7NgxWaTCxeQxxA",
  "key42": "APJbcCF5WPUhFVyoaGBeog1xUYA1pfSnR5TNPeSL3ppvNv6c9BZKbyfiBA1CdELJ9DLRCuCpJzvedTb4YW3tPy6",
  "key43": "Yzd29rwtBMf2CuK6tsSvAnE6yPGVPgnFHxYmfjnzYvX82dfKeJCvWqjUmzoVMd5782BWxdYcq6FEY6Fim7K2KQL",
  "key44": "2jSRLA5PMXFfHsQaGAp8uwMV1g4EWf6nJ4yic1bpW2EsDUfFzhcN9QZW6NQKfUFPZ33z97doo5VyL8czLopESe4C",
  "key45": "2X1bCcxTWL8FjAUMv27nZaHq8Ut4Rmjh8FX9TRMP7JapmBgRFviKZ5WCRpUxuZnksEheKq6XVVpquL2GyxVSHa4H",
  "key46": "dtoz9ZiuM2T8APoRav7rkUw6iW8pbApKNamwccXWNRuxjjwG5cjCUKUqArUzTdXBTrLU1pYwAGGynVRvEt9YrAB",
  "key47": "51SAz6stJuB8j7wNCpQg1t2F4u15zXbQ4gD5CYNTA5enZmrkcXmJeu78u8dqquf9YUiXqhc2qjutAznPY8c92t1s",
  "key48": "2rguQ1vkCGTdwHxaH68jfUgzfGFyR2MZGWq6vaVnQpRJjbEH8eGCuxVpq14ntVzAVkU7GxnPShPTFH5P5dmKKwF"
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
