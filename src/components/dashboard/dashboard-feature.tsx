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
    "uYtLFMUmt3xJKK2QF5md2VFKeXsTms4W4strdmY2WxpAmFdGe828GPDz9pid4jdUbqdyzG9xwox4CY7faDUWLi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Nmo59QPBQ58ZwTa9JNNhod3wSaQTCREJgXf4RXVWrbr7FxiZxYUdRjML3Cnh31GN696AT4w9FcwbrzKUaceUwj",
  "key1": "3k2iTqvs19n5QmpELHK5xJLKWbsCHCcpMX7Eq9grtNeoRKNZB99eTCGyCeXRKkcmkX3Dywf5uVoM5UXVyTtKaMhR",
  "key2": "4RbaEPXntubspuZCupgWwG1a5phE7o1oH7xamCXYEtjqrcbdo69BPSSDr6fcs7owwGAyx57EjCzysB14CUMHV2Rs",
  "key3": "MwUSfLoChmKMrKeiiQJoH7TyMuqsiqoPiiomzSBdmfroZwCgDRHrJAjuGaFcPaUfhaJZbtoRXHfaEnn29mPHVJf",
  "key4": "5GmWvBwc3Wn39DFktC6L5px1MZ52iCdkCoEBWyQ1rnG5Rv8qAhULEUqjeag2AaX9aNn31BsGqPy3BfTN135nkeCg",
  "key5": "AV8ZaFRt8wPsNW3Sk8VhNxf4KUfxdUZJ6tYYKnXPDzDM1vHyj1ou7ku7sqSwYRtfVX8bkqpH9tLHAR6FiJ6jfcm",
  "key6": "5pjwquEKEJ7ueRms7qkUn3njBmUggLuBPkYvZFMVFQ9fwVKM5W3cQjMNgQpnpJLsrwvR5svRC7vVYD3hduYwuqy6",
  "key7": "4m48hLueJcdGTHhhfvUoCDjsHXio7X9CwRpbLW6fSU6Kx4uuFvLfXfiHW1MtrftLLX1skUNmR9QkDJBUXF1jTz5d",
  "key8": "4NnRAKX15oF1LUDayWHX2iaL5hCgKcgW15JqGYQRaFSVzTnuEpX4PyBFpAjKMG3BFDjmjCXDB1eReJHWa8SKNjcV",
  "key9": "4MnEDARa9chbKEQKshyK5GJuP19i5FXyP9BhwFdyFMmJQ4ecwLkRFM9dhKNtYgpu1RQSM1rTeWvqhwgUTXJYQJch",
  "key10": "2zFBJ38uGJzZ2mBFfQUStER4WBdCXgCLyDcTHxJ3v6EeJamLWNLiREayR5ZM99UD2JirVY5SasZEmb3WgzPPFmjh",
  "key11": "2nHAbFnj1wjDTrgts3Z4o6ecPLM7CzytcT3LW33Qcd36w3gizYmEJU7WkjGqT2RpJD2MEz63DHWZkxoAQX3ALBH9",
  "key12": "5c6dTD258CG3YJdWjwpGUDp4CFAyWmgd4iMAuQArWXj5QBJ1GnHzhLy12qMD29gtHAhnT7tasQyfnUQ8F91vsZUH",
  "key13": "3z1U9FAdaRVptqHUBcX2XhjK13Nij7q51RBg58Bdev9yABcZNNojknz3pcM6RmHNfT5h3rN5ixVg1eGbT5Bxm2He",
  "key14": "2u4FnEu6bjEQXpUGpjFMCNpn7Wz36PtJUqxQQ9LHAAkaqAF87bE5jH4uZ2EBmkunabNFH11K1GGTFEUEdDJEDkWH",
  "key15": "551KW8Z3JR36i3uXBYNVLTAiugrR5q8qPmHVUiETRGCMWMf6EM4RZRLSMptfPnq5ZQQfoJLW7CLf7opj5AZDwar2",
  "key16": "5xv1ebjkf46PXQFNaBzqiXVVK2YV1Qmihtn4evgUj8qrSTSVFjoHRj5iqy8cwB7WuUUG2o3XU5Qp8EzqsYUCz8Qe",
  "key17": "2z7Sd44pxhXn3jknHf3gkKG4NNcEb95s9qwVaN1bgEKtoNgn16QdUVEfDNWb5imhFHMpj59UszeZ1XVzi2pAnQUp",
  "key18": "5Va96eXG1ktYsFJjRZ3RPpeVrw7Xy5e9fUWkK3Y5U6Fj5MogVYVBL25ySSt5wKE6XvirCRdyG2k8UPjCqzTd7a5D",
  "key19": "4iv25zB92UfRJawgoUUxw3nM1bcfW6Jy8djQo5BPpvQ2CZ8dANozr13siHP1dqrGQMkJoPprz4va8KJV2GRWtzRE",
  "key20": "2KnqSREFAAK6qPEKYDuegCw4ZRj1F9C2z7MhwnZAojeaCmAn6DTxucFi72hN3eNWQNBmi8eWS1BNE8NVXBQLao9b",
  "key21": "5yQZw22iWiCWKgxSt1m41A7Hsn6TgSAPQKfF9n1Fe5qUfS9HJCpe59PtbrwVet5RJJTyukSdUtPr4Ww7J3qXCiFY",
  "key22": "2mhNCCcc31Gf95ZvSTtgPE1ohqcEup5VXZDtFPnX8rtpxXzXphbzE88sWoepDVaBukEh57na9GsuTtN2VVtrm8Sx",
  "key23": "59Tsz5qQMZE5JxyCnaTRSYy9j8xPEX4m1wFC7BBRvw1ft4x6yynvY5JPwNh1iKaktCkq6Pt41SEokcyzYDcDx688",
  "key24": "52zD9d3iP9PWmDPwhZ9TgGAXeiLpjiS8jPZ3PHsvYJn6m2vF8PiapFUvFmLi5E5WrMvJVHAnGsGkTJvA5SsesoUw",
  "key25": "3GRhDvn6wDweiGfQkmusUZgZRpvusftcfFTBf6QTrdq9zD5dJ9mnJJ93VbHqgh46Vvx1yGnpLPAyaHQJA4Fiq8Rm",
  "key26": "vJuMxNaChXDAi5AnCFQ2ii7C7Lbz8vSD51DP1qBgCYWBD48TGpY9MsZCmESP99aeYnLrYJdxSV5EtkmorKGBT3z",
  "key27": "ev1B8KKAScRSo9W5ehtTRxcCNdUPZxW97kSmmrV1tNWsWudmxSCbfupkHDK7wezRHFXqHF8AxfoUzYR3R2J2ME9",
  "key28": "3UP6hPuRrtJX3LBziiQiuadnoQ93d5Ytr54bp8MKdMfbRiMNQHtTZF6JqwS1sPVD5CoQijNKDEmgSprGUU3JLnmv",
  "key29": "2nT9nGoKcnkU6hdkBusU9PsGzKs38B4vn1iaeEUHkX75jDMJV2dhtCmfzrvwrtb5Mrq3rDhoqhc3ckV3HbcKP1gF",
  "key30": "3UHYMXtM95hUjr4c3w3kmHeA6bfrsSEm1wjcdHJp5BPQE14jLTAVfkAasfvNKEn5t2sjerS5F8Q4dXVNiRxhVaXZ",
  "key31": "E82oa1XrUNJKa64ZbLzPzqpy5DVvtkaujKJV6cZTxDEQNEXM5BHGZh8iVCEcWeWNRRL3ntxedCV5M4e1BdqvVyG",
  "key32": "4nustbxBsBDQcqAoFbZ91odGkNUcEjjzLi8wtcPnKTsMrJYeuvey9dJfe2x7K2HcoMksBEmC1kj6nMFZCyFGrfcb",
  "key33": "44MrFKmdKgTbofQLYjs6AFvGkp4J1fpnPEUY7r4ZXdncKGQTrSjR3YxPFrHMh8EY8X5t4vyqNJ9Z6kB4nWkdbEkk",
  "key34": "58o5zDFqm99NaQntU6cNpyattEhSFTXdKfd1qEysCHX8dWv2qkDD9xsFDWGvryXp3wygwmfR75k5M8VL4i5FWXKy",
  "key35": "3yXTyArHDAQwSaBA6eZTuKhshsHDC9PKV6yCazJ7gXBFGtnz4eCZJ1gwSJPbrvnnFER2uxKqPeP8c5zaaWKXxfsh",
  "key36": "2UqFt2UKLB3ABNpAHW13YeamfAiKCySPEpJucEst5d6bgabbskSxcvtsj8DKMuPRS914somwLMDD1UjQvBmhXHcK",
  "key37": "2ftDbDH1Ciy32GLLTefceRvhYTfWxFw1bSUYDkjK3etY4RXJgQ4Yzew1pMXxQen3g8b2Ss5D29e9UFciG84yNCCj",
  "key38": "43WCnHeF248Y2yRgg39u8iYwMYRMBJsDfXCcPdyv7CfphnPA8VQZbB5xpFzmhDH1JvTqpjSzARffngES47xps2iM",
  "key39": "4JJ5jP6Errh5NKxcr9Zze6KDid5AAMXqUFZHaYJUJxm2a5W7iAvqtv8qRVfjgKHCDsPJtdK6UpRySdbwPvyEXvex",
  "key40": "AkoFNYrhqaishGqKhkisGfrL4URvUCaqhHourZW57ki53vnqi62LMVJeWRrUkMmbu35joNZmdhnMRtW2iRKARVb"
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
