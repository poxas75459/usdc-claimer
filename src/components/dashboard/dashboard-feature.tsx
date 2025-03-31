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
    "Gb1kG1HcU7kVRKxy5Xefachyq1XgtNZ24S8MgdCEqTD4NbEk4DLZCTtaVevbuUTe96qTKibq7gYa2f6Jjw2gCev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgqdbjueJ1udZUd92MQW7M3eGTYZWY9gb3H6RAWaECcJ4irL5d8QgvMufzzajE4WE37tWvEksJFkwkfMtis2aTZ",
  "key1": "bkNviQ6hmjUi6E6cjkEVGHonCY9BD4zcmbzxGYhpZmn9WKyzZw1oV7jtUsrn325fQ5H4N2PXfiDZWq1ZVXcAvqc",
  "key2": "XmC2eJAcJL8ePmGNjCrnjZPeDw8WqbKwgEFt9Uhk682benFC6fdpvjJbKpQahXSEWDQyf3Y5S2NeNxTDTMaLXjq",
  "key3": "5k2ijL25ZU3vy518oLPMVnwsg9tLJG7Dz4iiLwRXNRXpBDUut66eHJ8pbxx8zGH3Rd6xwTKNFFXJronebH3voeU5",
  "key4": "3KjL4rtuYpSQinkDabdvznaxUACJpZ11ZR95FZJrbow3332uW3zRMhhVWGpWudkN62eUeNDUwiNQgmGM6549A1wv",
  "key5": "3kbJnLs5XrQAPM2NrR6gLTpaCebu7Z7oRvURWuwn3YC5sMhn7GWHj3XnPsxRJFk287qWhNh5nEUca3CQYX3XSE23",
  "key6": "25HjrEHr8Mroa5TNpqDiReiq5YQ6ayqSdwzVELXTYWHXs4XR8NB6sd2sNco41MHsCYSDPSB1qkqL7E8HaWfav9DR",
  "key7": "2WPhJBoLgG3P1oECitJweM61sMAKVEyB43TK8pRLzNK3Nr4FMPALLWFrWUxDXh5QMJLPcV67nYDPtv7YmKfcKa2K",
  "key8": "PywL7WnU5KzeAjQ6CWPbbbDVm3eBAvAEcYvngzxCGKhy7aHJz6P5F8DX3g9YqejkJpHMPxxMkhq12ozL4YRBArF",
  "key9": "5ahet23xzAS4QMEGctKGDXio9b2sEx8CAt2XikXqtXEiZM9MV9Sm8YUdTy8t5td3NSdgnXgaHEoUst1WBcEzZTXr",
  "key10": "4LnEZhwHETa2EJ16ST7ZZ5pcGnhrTSXAu7JzCh1ni5smaop6dqnzmHyjtn78bSETGnFmjxPVVxdjkPKTPo2rWecB",
  "key11": "48CTkxoVP1thqG9Wc5h8V3rQpbpTqqsDBDUYQA4npSsQcNVvmMEWtic8eBbvPZBtDwTKTTNMZNKeAJBDwJVgo1Y",
  "key12": "5xHGDbPracQvnahBd8XoqK661YXeTzWMeuqSttbWkcAPBC9R8UyWpxQYSiu6CqG6h5ZstrkDLSSAApWE2DhrMsXu",
  "key13": "2BT2ozTuYfYh7my6GxX6v56Kgf95QJUJps87RABF5p7nzTK3Y4gYYLXbYNThRQZunccMQFmM823x8vUhHAxcTsQS",
  "key14": "241pnZucwe9pBRQKQruu84SjmraUoekwerRiWtPriXQ7q4ez5m6JZ4HtBQSxMYRJxH1KN4SJW4UL7BcTFoxMt6L8",
  "key15": "4K2RdWyTNBa5xnehWouFyxWKeMHnVHPPPYiUbcrZcHwyCKi36uHii2BvJmaS2D7sFEhh1JSP3GzwertGF27ARgHW",
  "key16": "4V6faHFNZCRWLNfXTMkvfiE94ZXgiyu6hSECNCXDP4ENrmxKk46eVMQbxynuenuZ3XW65PeUwN1UjAwxuFKsphLQ",
  "key17": "u7G3GVC3H67mupQiTuo5tJ5AM39raFeXskUaNV611bH7V6AULQUZmkfLDsePxpBdMcfYnZN8KurNKPWNxGRnAjH",
  "key18": "3edFMTfmrBGGdk5PQtZ25xUmy3QeFLVyidNooc1WbDFpDapiN7vNoCEtN1XLnuyG4gXFDd1MsXrEULroPBKbzxPV",
  "key19": "3uHqbhrvxxWc7RuDMj1B44mWL5EXqd3gRgvsJSHyzHATDpR499Tcr5aNBY7jV23U6B8q3oRijxw6mCnX6jmDJeNu",
  "key20": "sj6Rfzn4uQL9rGSJqzDGUqMKYwzaPJsvfoXD4NyFQr9WX6MTRPFhE8WXhyZk4wMbEsrnrKxiCG7zJGaKrAaJqVB",
  "key21": "7cgPnXnd74h6RggmZbJZ2VnZz8K8CZKSvSr7dU1NxvjZq2aYyitk4PUivEmD4wxfQZH2YrhnpamdqpJQxVeAN5E",
  "key22": "5K4hc2MX1bUvpnvmpX9NMi6mUZ5CRd3V7Jx5rJiW8qkHKFvHFAEctMsYajWkr4v5MGfdPMenGYG3ZdgKZwCXbmE2",
  "key23": "2V9oQt7N9enjaAeVPSjpKV2xpMktsK4CXAQaf7sGAi5d2p1JYrXsuroXkxjkkKADcg4W6FxV8yXUJtrHPPopKxG7",
  "key24": "5vTKbsjRfzGU4WwmeXPpAybiryoXX2r1aYETwokDdjd2YD3DbCqbjeJxBbVu9gezuYgG3om6TFofYA3XmyxjTgdL",
  "key25": "4CZDuATuZwKFdaEqY9fqFbyZCtKhrqTEdWb3FH5V4CoTZAepEgtvsQTAuaPsLd4XHb9y33YDUhXrSopfUVhYqSmK",
  "key26": "3kKT4RrEZYQjobRAjHzboVLbd7eB8LvGexsd6VeyuFjB6dzTAtc3ALw2vpmvJDBBde16VsJRku7Av7xYsbWHRLnj",
  "key27": "4xUohHwQMnxGMNtZWiYb4369VLmbaYDq7QsD4AF4MrWZFgZeEWhk87vEEc6hkQyXQWR1hXLTv2gR1j9aLwHtLiDj",
  "key28": "4gqpGM81ZQyt8BiEFkW7BMU1yHLc6wCabwifDuMCK1hS8Lex4QqeRnbyWe5ZSbqp3DbhWmvPxbnJWEMBJcv5AC1n",
  "key29": "bCmsCyJjufZX1v5nsaNXG6uN7Gct9FtgDsjm9Kdwq3KQB25EuH2xJixfyZCsRUFNVoumHNG8EGoFSiNcxBS1U6Z",
  "key30": "4V7nRth8bKjpRJ3uxJp8k77RJSBKZq16SPc5gV2RE3MmsLJHgbV3fQH2E1RUmz3P69KKShaMsYwBgTeaVe9vxwi2",
  "key31": "2iavpMPh63y2e4EhfJiC5dK8JoUQzTE2rp7rxostGzK2LJjprHGwJoDu28spZwSw6QRozAxa6v7hmvKhM5KwLEd3",
  "key32": "2L4oqtGHhF6LeKjkpH6yP73ULd2A8gprsrfexLq5VuQKDe2Ru2yK4ADf9FEAZa3KW7AUmQXFsxUTDvos8hVZ7ZLD",
  "key33": "4U8cZnivWCm3cWGU4b8Vz1yRUV5v7Cbj73QdNf84JtSnsDw2uhD9tQ67UfADosuFW15qArRrZx5mkLrfJ5Qb7dJX",
  "key34": "2QsTXbHefZhwxRiFv7t4t4dgZXa64doiWjEzCL5gFXXYNddfTkz1rocJX46eZztvjSF4x1VntKmbqRWoUjfqSvGx",
  "key35": "3sYRRLqhavXZRKjMQJ7iDFD2iC3ZKR3h9Xan2yNY3xjtnTCVxG9b8SqmvvBDzNV8mx1Zm3tzzCPp7BrTXAcRjGFe",
  "key36": "3FapgFHPQrPPFy86pLrtQn4Te443y6D8aHeqHVDpj7kvmb6vaV933xaYYHKNeU4fBdAvNZbUbav3TrKu4DrPyzUF",
  "key37": "3GHyM89GoitTByVrswbUXTnHLskhVENsxPHHzeBx3LzULJwyeccwWH5wgPRRwRYVm4CqAWaaSNKpwEocraF328M2",
  "key38": "5tG9PrFrsCaJLftwTSdADwE8p2F3LKscZP48pFtq8KqeHnQER9GLKQuTmV3dXXQpsKKZHXxmjoN6DoMjY3jifj5s",
  "key39": "4HUzJFPzrfbmhGFP4zRrLfVJ8cxev9fjoAZuTAUGqmcMSvgJFmzScy3HXdt4ckRcJhcVXAdnTm5GnJUoJBVxQ4fg",
  "key40": "4ftFXuUFEkkL5LwG2EiMctbbwZnQ9YrrnndTUxCDH4FuBAGK8NfojMsJxYMDwNK1yVUV8hqk2i5aQz9SqaCBs5nc",
  "key41": "3LZr9biVVHGs1SvivWUgyuHEFebouTd7Vp6ETymNt5wfY6BNSYXxbELVi5hRNkrc1Gsva5ipgNgoWmc1xbDnjpsk",
  "key42": "2SKGaCyWcuD1hF9cQz1R38JqSveFgyU34KC45xBJgdpL8zWZFAG2HMuSWHEzWpMmZBEUe9VRk4hZPWnNhEEKbzje",
  "key43": "4VCwweE5nnuEFS5hrhKsspcYMWGkbXiw4WX6XkKzpgHtT59t77kJR1Xib6V5Nk7YrRQtd43FuzicpEjBrtGv9XZG"
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
