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
    "2pgnb7PP6f3sTGYo8uQA6jdGcJy94VgtxBpmjdZfMcarNtYdZJsuGPDjfdaTLNa2fwifkFtgoJy7hUbQ8Nqzqkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t56V7hs2c3f4KxKGAhiYoSSzZ5YeDxWae7KyqLGZMdUSBLyrgz2Gb5JbCMzk9CR97FudYNACBYEQoqHFc4RuwVy",
  "key1": "4cukhEqBvffxz56UXFoxLtDi6dLpaBseBuw1GYUpVKUmUj9uWLLrjRq8afC6v4zGZKYZofgPya5GbMCem5iWbAN2",
  "key2": "43thzYM2p4LNEb5pwwDYKfMac8LetPjoyMKZZz3UycKzb96oo8pjVNWPEADSVSS4hVoEVjrZfYrFWgAtYdshr2LF",
  "key3": "4MpQgmFmefowakgCRf3Z648Hj74XemhAacvuxaK44LmUR5NZH8rZrdMkdV61YsvVEJDUxX5fExqVCv3GzGsGJ8k1",
  "key4": "37GTrmYsQrvhFRQaH6G1x6ez2bL6nLxxtpyJs7eE8swPN6b7aGA76DzaVm2otsHfadoMiGFCPfAvkC2TfLcw2UXn",
  "key5": "Wtj8XswUXcBjHVT1p9gwAGScFC9N5UcFNohRjPKaoK3AJBgXZvGPYafPj1RSWt4AeJCiVGu2hJLooRTfPvZ4zLM",
  "key6": "29iVioiZyQX6oQtfpD4D3evxFCLCQpvphuz92yDJL3Rtr6jphJrbCwNVTh1TisPB7Y4mpaKya3zDaxts2Ztt6oww",
  "key7": "45HJTJNL1W8Qg2Qt31EWLrqR97cQDD5qbLsBSjgoRJftAHcNBqucheCaXWydZyh3kugj6o5CABnB8utFHPp9iWDS",
  "key8": "2FEtM2xBHyHZSAGwGPbHiDFKL8hYWCp6QwsCRFXbCnGWTbi3ubxhHmUkLdyLUhpxYsQYfZW1FRjX5yVhTpQjpgvN",
  "key9": "4cwarSUTByxpRnvcvTuFdeKTiirRMC34sY1jg9KSSH9LBGGyoDksWDHfxDpUGu9LcbK2qj6TkfSF7kDUc3EW4sq9",
  "key10": "4vwnTwdUEwpaSK3V8hCFhioMw7YHFf2gytoFTwRz2aQsR6L2scwdzdR4oy9RDfvnsDnVSXEfmds3BiUQXvgtyffm",
  "key11": "37jcBS2az3ZosB3mVQj6QQ8aEcWijPyFAVaxGMMfkijdopCCBwiZtCkMrwWEbhjhcqTYCdydJroozR3fSS75PE5F",
  "key12": "4gfVoWFQ3iKHuWChomU1EwCnUwCr4ysVCYQNJkGtz93X3KDMmuQpsapky8P73yCtjpB9A1gPtPRm8i7UnqTX9fxt",
  "key13": "4g5npXaRQkfVMEocJcvvdZ1vkD6qiQ5CoRdhyJp7YpsdzKdbRzJac7v5jqTNjDXc3MzRXTyS2rpaad9QqdgqBPv2",
  "key14": "qDH3HnjAgZUryUGCNBvoN5YMucvy6ZtxSkhh3QCHsAwNjbXYjKS1QCwg85BJ7RbwreDpEWB3eeWGSE2snh5M73k",
  "key15": "38mZ2X5w5RhkqBrRPF2hR9ePQGZxTi3xaJR4xm4xsFTANtULNpsEqMn1bLqhFfnseSBaF9eVTiSYafB3qFyrGaHj",
  "key16": "251CqyUTehQ78bTQCJRVx33PRjWKqwRBgtwTSzZyyuWz77YQqtjpxGEhru1HDzx6AKt6J28HN1Qg2azvY6Le3xNa",
  "key17": "2AuR4fg9xWAj7739eQsCvYbHCLkyLhA5uoXmjd12nCufaq4aPoJXaZMmdfd8EJiVy3DLjCAiQmQkar5yAWcYNJks",
  "key18": "2JALceRPAAQe2vh2TxCyMhRhPURz1v67AFvCXXjUgdRAedowzHFYWta5sN95tePMFC1iYStXvfYQx4mQeuVxUHpq",
  "key19": "3e5DcDZC62CQiHPhUHsuRV7n9H3YexCN8BYtWP79Dbds3w2qbtCordV8gdZvM1FC7q3AkjKHmV8xg7czAQqqtWb1",
  "key20": "3VDseJ7hFjrjbbxNtHNHixvuFE4reGEE6QvaNM49ofWmu2bfJpHa5XGQnej8Ux7RfsoUkVMboKfCxGRFV3HYM3F4",
  "key21": "K9kNzPEAn63YPWk7u2c8u5QSBbeYw5EQAUFSasUCXkxeHBqFFjZSg3MTrALBJ23HkYAdMe98127CcfBv6oKxrEc",
  "key22": "41Lzjkq7aM6ETsoDfDBcCNya3oTxhGZNFo8oukiMD9Gn2S5FydsE8UG3ruRPB22cJ2KSyZqxj3nxb5rXYJM6TGVc",
  "key23": "33bAvud5WZA1hUrJRdkpe8n574dzgQWfnMHRkXHDAcfXkVDtvSujReo86QKjn2gkyUgejhGWLctqBFjo343PssV7",
  "key24": "4pYtFZPpF5ieatMgYDcurjaULigdnoknS1GqAzY3NRCPvn7WSjTAqGWCXQUGaZiMRcbZYd3uqr8UTTNBsgWL21QF",
  "key25": "5bcRcm1R2tQ5AyBRHiPFmuKupRjufXHAwjfa8KeLB6e1GzcBn2gJKX2Cxsfg1SRZLDeY2x6yCkeTgh1tF1ZKhj38",
  "key26": "2TLhEqufW5B5zCXsWvn34QiN5JPwmBDcmjeQo53toXzUFueE2VUo3DSZRvFkgJ1m1fD8WvyrUcgcxvjmo8oKW3eb",
  "key27": "3Mx6mfR6pBqmuuZKJAbXu868D4fVmhfqo2QvjvDtjeWE7SjaiwFkoXasTjGwGi88nvTp39gKVnx44LfqjxxFmrRf",
  "key28": "4cnmUF7mLBLmyXDYUuBn93uw52oFbmjgySCUsWvUWcHtxRXuqDGJ6qWX7ixZR55jSNckvGQ2v2r2Z8YnxFXfNTwy",
  "key29": "4QpAK7nPstmosNwmeQA1kpZfUudz9Pz1U1Xuf9oM5ry4124cJXG1FhUpMdgcaMMrN8hVW896RRRTiNFXJGPCbT6L",
  "key30": "4zJT7d66ZMNbwJFoaUYui5YMPVjpkowsU8jtUNij7JW6m4m1cLaySXzvqompp6iPdL6CaGoHv6FLJh87zLgUDS3D",
  "key31": "2nNigaEv2kJAJ7tADpcAod7K79fBwq4oFeSu7b1MtEoAb1f8QTPbXuGmuiQyhV54hLgmjLgCCwCAjEsBTtocU9Mi",
  "key32": "2GEacvfAWs3q31qYaHr3pxmsRsuDzsUZPujhMfkuFi4WSYb1StvBGcaTrekPWVRVSvE75bGsLi58zn5uPgKkxyAP",
  "key33": "3NUEwXT6UHhsctXaqBAYhBL9PLqz1ws2mFzrMMzddgw3NdZbK1PuTM9Ta2BduqzgLriBthRzsd1FDXANZgCjtMeK",
  "key34": "4rPDp9cu54spNMJDN9Jxj5m2wci7FmuJtUvC3E1BQKuygdsP8C1JeMPAVFDpsQvYq5un75ebF5zduLV7ueC2AtjK",
  "key35": "2NhZZnjCaTBDYq6Lc1tykdxhKMP3k7kXkssWx2cJ3qZMmHynC6Kh7YP3YnTwrPHf1mDyTu2iJ9ZH2idbCTYxVasU",
  "key36": "4BuWZMssYC92CSeWWCR1rbkR7Tftbd3HzxJzkdtJsLXroMVeA2fVxu5HaEvWsaZwXuA59YrFRyGT2Rfw2MRADuya",
  "key37": "3eM5kv3aDnc1R8F8PPLGgB2E2JY4AJ5Pki13RAoTnsiogTSYrktPzMJVKg1K6sqHPHtZUMmtajU8uYEEyHftJWx1",
  "key38": "5dxQUJ2HS1x8cpR2uK7JsKnrdwq5dmVoYNLBS2nqpsAJCkNJZEbPuDAwyCAxCCyCJrJ3zB3BcaqxrRW2uJHG9xeL",
  "key39": "d8abv7cWGanp7GPgaPDAgnnYLL7ZeCTPEwWEa4EGY6EtWjWN7gPN3eouku7hYEzJLMxtZw1SSYG5oM8m1TkFWB6",
  "key40": "374MFC2Q4YvLQu3zxD4fRvm94FvpjyxB1tGHxdVvHnqGvkCg9P8CUT8nBW5KAZScd6rQkEJP3DP9w7rihTf2QFPH",
  "key41": "5kwjWJcFhvuoqyaqQcKDPcbBk9cw7Z7U95zbcBWoLaGMwBpaTL1VVy5mznkJpDF5KUJfChbdbWQEjkMHrDUVeZDF"
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
