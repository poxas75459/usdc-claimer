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
    "3mV6HSa1Wzx7brd91iapjxgCsLBoWiVeBRnBHovFUstLXm7QVd8Nkp24hrY7AjZK1C3FbLEGrwg8HzU5iaabKxFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GhPf3oqrmAjafgkJ8qcQR7n1LNPS6qT5ChWHJ3WQNcHtGLFnSyxJikdp6nx2G9rkRLWVixLq3dRkigy797XWD4",
  "key1": "5DE6AbY7LM5X7aYGp86ksPHTAiRBYUF65y8tiBYaq2H1N3TawZv8SqgtKwT3GxfT295NEXEduqQbDuoETZXhx8QC",
  "key2": "2iwHRRbTwJFoMEyQQMe8U5nNXj25gteecuStL5YFSJ1QLGyG6KNV8w6SixgtzooXqnFQczJeMmYeQR4KtSvrgcqB",
  "key3": "5QCvKb8C2vVjFme9UAP1D7VtowiYbs19Qn3b2d4NH8nmBaC9AGvquc7VoYWX2mdmvfTCztmAZ1Fu73LuXBWscZdu",
  "key4": "S5sGFcet88RmS8oPDhhbcE6HrMcetEXqpXjF4z2DCFxDttp8pEASfGnq3dU2BxRNvvPmY4YQZRC9Nhm27uzovF7",
  "key5": "dqoYTBHhEAvynZ3dDXJqQ7QLKfuG1PHoKEnzMq9yFP4ojpdH1DKdcUhRYd1E6KbrTUDAKvuketJJkaxHpaGULAP",
  "key6": "3RfGDqGn9x4CCzAVttQ3P3dX5opy2FTDaBzNExcLwZ8T6rXkcRLfCQn1mW64SFeLcSnwg4W7sEw2PL8XDscCv168",
  "key7": "eBtAfGJiCGmmC5jJkbjhjP3KqxAosrE1XZ6cmfX4vy9kg991HSGJid2xKDhsFGGnZeimHuwVmuMJEKCWRbW6uPy",
  "key8": "2EhmmVWqZg5zpgtQA8hzzveRdXyJQhJUKSJafZCpzXGC5kc3LubLNcQos6Ahgez9441dDUsmsDKRzMcQ1uxYx9LK",
  "key9": "E84ysqTfANcqvd3ZQm8kLmN6SXYjXdRUq6zu81uh639Ww1XvZbXoLjiKgs9xv7GvCEJzaPe7YKDeWgzZiXNkYub",
  "key10": "dHG4iJPAWAJocTXwkTTZKarKiACggfixRKgF9GEL582CP9QEtxvFqriM4dGU9Tcj5MPPrSBfLNKdTkUFXzF7iwR",
  "key11": "2sM5gX6yqm1VYUyvAfamKJjDETPHSjRUeFaNsAJbxCsRHAjZLpEeYxLUBMLXftNkCiFe6M8N8tB7cnHrLW7d6vRR",
  "key12": "4DyPqdkUsCQhLATL9dhT3hSg7hUw2vBQ2yrUcFdGyJ2BSEDWazkUDb1sUC2Knxb1rMJ1Si8DD9Pubiu4ctDVMzgp",
  "key13": "2cfuUh3d6HDE6JRgRPg7H64zktivLfzcwaf1na572DzEyL16ZvWUVCpJ8JDE1B4JqJcH8iZqe6z6rBjYcFSZrVok",
  "key14": "3TNaCCzpNDaVbTdgiYg4BcNooH7xs6AS5m7PzVQDewrfV7DmaqYHKq7WS8y9gf7FPe2eTikXvcgrHGEbfYBAnocp",
  "key15": "3C4Kw51jBSX7Ctt2sBqhgHVA4HLqnSKNxH3KbfgpwgxtjD5b7k331EUuKqTxQr8nhFE2UzshqwMsdQLQ9bviziNt",
  "key16": "3mqhcs5Zmjh1aFE8hQ984P27BaXKNgmjM5mUYJBaRE6ZG88HHvFcY6Q2GHQdRRNsJ9WcbhBJaLDYYtFua3zNc2XW",
  "key17": "z69Ruxn56e9a3JuHCkJ72BKcgtFTXgxiFf8buEP1wBPVWr3P3mC1QtPCfPYWAXzxCDWyzhnBXFHf7RXHD65eQuo",
  "key18": "3yhCPCCwxusmyXmzPTFsx6bpHhSFk8YAhrBbMT1XxR6aobJDJsXDaGujiiAYbD53Yu8UHLZv9u51KzKZ9Y9yeUiU",
  "key19": "2qjnia4k8GUmrJmLkTD4kUGad3wJiJZSat21DkvpSzbsEb9YbnueQNETf2gVNAuwxuL5dTQmBepKB3EcYpYW2wvQ",
  "key20": "3ecLmP3uEudKscCT3UtjK56d1eTE3GVSERu9soHKd2Q54btkQZFS58q5AWLpPuMaLWCR5NXv2R6DY1DhsimXwUFK",
  "key21": "2rhhNrgKthZpsbo5FWmFTZaJj7SejRN8SLciAuUAFG5T57VjAXYb9itMnQZtqSTBkLVNp897eRD3Hixx7Skni7ts",
  "key22": "b43z9JKjjjUzk72YD4Ssq3KpsoUGBMwGjRGjVu67jy76f1XWLb7VH8KtpJ2mKbNicfpqJPg3XdH5e59jF3wvXfS",
  "key23": "33SLTFEgVat6YppXz9itmuHTu1bLoHJqmLtS23vifBKSMMzREfozEMXaZa6Ru1KxNygkvVFUJZ8usf9YMJycHt3j",
  "key24": "2uv6QVeMnZsfCVv1fWbESKQ33Z1tXmmpSbzPmshsxfm6FL3giU7Sn311vN6PbY7ua5NXXGuV7cEgfibNSYyQHZza",
  "key25": "48FkVU6n52EheXBUsuPEt4VjDAmJ8rKkPcdyzjn3BDYtbS8gUQ73C2Ys269e5vx5AoNKGPBQDj4jLjXKPHrBsaWM",
  "key26": "2afZGmV8WM8xyDYEwh1ydPTzMiTEmgWBnu6L7M2aoEZsSpNtycShJTLvT7JrdXRgg78vg4uavXvB3XMtLp1EFmqH",
  "key27": "2LbsbiuYSDyAaHL2u5wytzb5v5pdkcSNZ7FsgF5zUNAsWu8PWiFMGxRJZFRrqdhdqPiSHWYy92RVbZ9v1wWfvuPo",
  "key28": "4o3Y3HeP8CWJjjeZaPofA69qHA7WYPuzos3RqaTQSpTUtyDh8VMBDrxDJnbcRqqSoe5qAFmE8vhfEcbAy4kxFg4r",
  "key29": "2M7vRnMP3YUKpvcsAThBfnrUoYHWRnX9wpfvKWZNyx4hZKLrqbbMDSi4AopRe5EAGENn7215J4caNieKimZW9KX4",
  "key30": "5BWrNy2X6L4f1nVDDtnwHoBhyhnZBXvbRa3zT1JNrxVGMUdtoA1aVCioGFdodzsg2uasKrLPhnac5AyaEXjVTcoP",
  "key31": "3rcqCddP2ySY5KrvnjzwhBT7F3mdau7QLrNdTPX8uNhihLkDQ6M5BftZ7mWpeenRfV7r1ENzeH4RjNHjh5jYZHjv",
  "key32": "4xXHKVjg2aDXYUhn7hLiRfUe6bVVQ2bV1KQN7E1osrdCaSJ8Cqh2n77dB9HW595kE7zmkKqkASp9xeqmMv46icWE",
  "key33": "46C3imRP8698uGggMmnc3Dk5PGQErbj94USozXKHkcxeJugEU93uQy4p91JJ2GiHzskemdoSX4viPY98PMHi4r1E",
  "key34": "67U6BbrrmA9wp6C6GEBWuSpfvwN8GFyN1xHJAD3HgrwK4frkaStUa9wamcSg3i2Gvgz1FJeCnBwEzHMsazzfKJNG",
  "key35": "5cPDLu32UwWWxxheKf7QDu2ARzS7KXrn9gTtsE87cNjogr88cqPaxvC9dr1WWRNJLnQ1vckxuvCFKcewXAUQj8Xg",
  "key36": "2nnQtj7Th8GoLdSgPruqV87hN7DUuygc8yEVN5U7JqzCXYhSQryscmcMDrTFmFqDEM8fB3FsDH3DsFqc6CXgmaRi",
  "key37": "4aeV5kpmiGYoXWiZvqFRUnfokg3jWqawDLF9qigWxMZCmpba3Acck77Wyvd1nbq2ub85hLL4CSnfEPryjfNhtwj9",
  "key38": "4fYnKQE7DjR3isQbYdyfEk1ijntr5uUSYoESo2Ei1iGPGRyXNYvH1vpD7LZbEaH8aMaSCUCcrWeDFPrd6j4GdfJw",
  "key39": "2WQfmXpxkrNhFJ6BSTS87wAbHtwpYfTLSg5JPgKwacWZgz6cgs1JdKwj7bfEXAneYsMCCL8YLMky6iYDb3ewiDbp",
  "key40": "5gjvTEH4jBDDUmm5M3vSSYaDfvTk7Fv3vxi937jLMuxxv63VbF7x2dyJ4aSCeN2Vps44AekFw6oti4JRj4MN9eG8"
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
