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
    "2gd6Fz6coEV66SGnWPDXyFoh1oCGAKpVWQfN3TcibNyUwDduiEHafcnsSJgcvZ5SbLy8BDXy15J2qAWKXFBV2BBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3Uyerb3tiPsubKWxd8pYWLvkmBe3UPmN1okAGJ2uqVSosmCo1zjLMdVeHcwBS4fdyCcz8nCrjhqhH8AnXa197G",
  "key1": "49piuQSfDqoVaV59KwnmTMZaJwEFwAWLCPeS4LgEbKdfEZuRMXLwLzi7ueyUUJw3A8ofR3TM9WZHpg7M8uiWj1Q3",
  "key2": "5QjG9zBReG9C9xu7LkcjLCjtPoAq1iRhM1DrSbt8CiwSpsSboY9hCG9ZEMW24MJnJFtmFMWjEn2DbtJyNB9SonQh",
  "key3": "zjrp8Qi7Pz91WXcYUQx31QXzSjCzExcYjDwMseA9tWSLHP6Wmcx29GpQuc7Nbn53DsDB4ZKTw5z5Z9zsna7CMjP",
  "key4": "5GPtFxsWZ9aD1w9kJsyXWeY4rfnisfyuhEeULgpzgM9hpEC4PAWSgw1fkG18HBPHN5brYPrNvBQ77NrviGrhqzcv",
  "key5": "4qiybJCbkmdwz1FDc9Uhe1ZYGFYx7BtiV2axcPc7CEEPQ64Ee7Qpb7RWKEPpoBus8krfWVgQZSy5G2Auxv3xBQHL",
  "key6": "43DMZrFZNnPyM7RRbr1gApgyMJrBw44JxDtBBA4a9ih2u4UawHpntwo6EcCiTRsa4LyufVuCzkmcJiyfCFAfY3hA",
  "key7": "32uzVhJep8Fhzh7vd2NJ5XugK8EL7Bafu3qSuUnMFC2onYpXYPYCuUCddu1jzsRSSnYMkgmei5kzekMUZ3GL3w7w",
  "key8": "63qWej1Ys5T5UuqKop3TL7vambGUtFbFkthtaJFw7wrZjd8ErV2iQ7k7BMtA1r7ULm9o5BQaRpcPw3pg7xSj18Tc",
  "key9": "2H1wSHEXGmyTXVbvthHjeN6ptz5U3S1kmSfwbzfYCDxj9T4rYoExZnGyiarxJjVTBYYLqw8WDExXZovyjeBfQ3Ze",
  "key10": "58FbQkYBwQr32owBhxotdZU22ZQ8T7rBWJ3TC6Jhrh8YXbD8GYguof31NMRhz37u7hqxuGGiJomV9f2qdmpspvuK",
  "key11": "3DQ9PaigqCFjuoqM4yyH1zQDdVG9vVahcxF3UQebxdQyVsqfBgGFbbzrBDmrzFrj1KLM52tF8TuArKdW9ohQFNGr",
  "key12": "4RVLM7xRmdHGwU2hdVX6JBEVMBxoR7bLMSMR3DSahnyvgbyGRvfD5J4nBJmaXNtY3Qf9A7K9Z4bEhtNeYCXGGr6f",
  "key13": "4ATMuRxxVToFyK17LhLX1wfd6zow6rURt1Enqrrppn5uRi59czUZEejAytapyc2jTt9sp6z8TZTLLn4hW1haLkeN",
  "key14": "2hJjvwFhWv82TgmTQG3XFndx8JSUagtjZ6ko4HUuHMZZDckR59moWNBRAsEa6QfGJjFa1nkVsZL2FWHMuvPfjzoC",
  "key15": "3YoSoVDUBkxyHJzsH2Cj3WVXdWY3nkSSyRG64nhuDy8AgXfQZtu2ci9mtq3uJX7Fga6EPnNAuBWzNesJSm7z187b",
  "key16": "6qaFqmNthiHGenXg1dWMzMCCgTDBc4sEQbKFvzGVEv12iGQ2uXTkPcHCSBC42gVzUZi7DxGaS7ETcHoJoAK4utr",
  "key17": "zTY8A5SvaXjXPHUeNqh26NUCkVAYcra6N9i9YtiGWVoTUNDQvjZyzGHQjJUg97DsmXM3WcdGkgy4UWtuaChz4t1",
  "key18": "w8FAJPYE7i7oa9Gn63k2rEEfNiR5UAPw1HSMhkaDNczYrwAoCwkpmUYx3c9hxnvgrFJbJxdqSE4ZxHdq9Yu1UQH",
  "key19": "5oK1vQUycMMFsz2PUPNjmxtXM4Y1sUqWXmF62WLBJPCE12kqegYobEg59nH6Y7CSr9VzQur5PBfzUr7vE7JZxo2y",
  "key20": "XDfsyTBumZtWiisa6p7LqGR6ZCUW6yGnQN7tLAYQmY5APw4h3PhP2HBGX9kjNXTcWxnQGFs61VyFnMyCvZfhidF",
  "key21": "25JUpQaneNvZeQkLF9RTXEdN5yrTgm21nNLjNX8m3Cgw3Bi4mSoUYJ5AEdAVFXCc1mPo3xevQbvkW8fgVJXxvmxS",
  "key22": "3zU5H1geRcJ239532vbcCFBmf8R9H4ESrk32HP6d4QQrPwU67WZGc1xPsPQ52wt36xazCE737oGLwX1YPDLTYar7",
  "key23": "K2PiQm7GpsvH79i4KRTg19xwkUDUsgnG8gZPBqpFzKbWebNS8fFfW2d16jbSD9CpatuA8fseEg3QFpmA6pnqTQT",
  "key24": "38Yg2HDVSY8fyhzFWRGoQvDPLJDizxi6j38mDsBXc4MCo1NkNR6ZrLQYLDBJZrWevMcCk2tiqBXXHXrap7n7Uhw3",
  "key25": "2EapB95v7152egvZp5WvNhQezLrGuaXx7GoDQj69b1RERzVeJxtArJPBwuoVTiCWkoAtcR5GTkzUB2wWbzuKJ5QV",
  "key26": "3h9bkiZLPgFgyeBVNZoWoBc6s3o28p3zswfSy5A2AeEZc7eLge8MFGMthGUBfPWtqef8toZ2haTFhiek2mSo3LCM",
  "key27": "2ddp5WgJNFypLS2n24dcMpLvijjyVLYLR1SB4zkx3TS4YHqxCPSY356UQtCYehhvUBNufUxtMXGo2eQCTQBtUs5Y",
  "key28": "4VJywjwLNRpe6uFQPNsLJGBi97zdfddL8smzzP36QdAbkMazvhtMHsfeq9JF4Pgi31DcftDc4t3zEkZTEBzA1GdN",
  "key29": "4nXwvnQ67CGnf5Cx4zQTNE1hGvXCiehsHctUcBrtMjqfmxD9bfz1WXKLG7ccL8ryNbZeYHpqxqQVXLS19CPP6Hjb",
  "key30": "29Kyk5Ks5c9BTNiSvXwvX39B2PG2TQn5VGs82vSg7HF18JHGwL29tZZ41K6g48zx1NMMZphvNbFdrLiTyG8YCFBF",
  "key31": "3UxfSKmoNxuCzYtpQ94bupwNWLfnV2E8h9mMbbvpVkoj4jodWkvU4MnC84DAceeZJaG7UskRxZMm8tRgXieH8cQ1",
  "key32": "3kvyfn2bJBt1D1ZeT8y92cLyHhPr8eULcpJQEQkDw9tx71PvwcA8WMwxTxWdv4UgDHnB2qSgzPVxRuKw4cx2qWhV",
  "key33": "3qYjiZ5Qu2MAeL6jixXhDVRYEcQkAYcBqFdhHyhstkKVWmm3ha1qEV5KK5mcPdd2WfBVYnXp9aNPzME5kHcxvvKb",
  "key34": "4KyLo1zsofFQ5LRA5un2XU9vJ5SMhssnnaCf6b9hAHQWGDFXN5rA3DSTWYDShJY9vfBJLn6hQESUbqXRLvaBuFVZ",
  "key35": "2b8WtXkwai24SjdWVWuCPiJESqjVnJzMQLAv94gufwFKmNtzcW4bYfV6eREfEQ5m57aRFZ7hgwX2XBtvGx48QBYN",
  "key36": "56Ku1mxd6s33U45RME9ie6tkEnAF2bBc1J4DTxuqNjdFCzdYTfB35XMQZrX851Dg7HcqRrbrGYxg4bJreku6nPML",
  "key37": "41Jh7LduHv6rFBvaviWAtLBHn1tb1eCMdFU9pnk1CZywJUjS9yvGmfdMqaYNZqgUxTjvko6TzymjATMwEJ6uUxAM",
  "key38": "4EgGuUA8Ui4mYLnvQStZ4NkrJubSTKYy9hJDd72isM8NpPcrvNKxXrdNwrduJ3snF2fadmdX1YXM8Q35MKwv8C41",
  "key39": "4Eoid2gUbGCXSunPSb2a77iX3jTek8ygV8vQ3Q9zxZ4qMXZRqvHeRXuqttMvMmPYufV4ytwitGf5cENwz8yUCdC5",
  "key40": "7njKARmcqquDmq9CkTmLEw9GedsaLfDbfzkGuUADDM2XH4D7NNBKv4sLY5vpw7Zi6s8oWtFkhR2pof7iKyXEdff",
  "key41": "5uezhMeECNaMey71L2yStV83KDHdkMggNTXTw9GEQahHtP9sofjuwknpWHZQjfNa21ew2ZDkmAJUmE51BAKT6uHE",
  "key42": "abFPHzR5b4qiVNESemN2wjamW8e7wHCLmMvZWBXtcqzaeT88ci7h8jTmEtXbFDYuyvG1TRtPwc3dg5hdMZA99Wq",
  "key43": "4jhyyr8qSUjeVPpLpvRjyMqaTfU3zHZEN7fT1QfnGzG2pCZwqnj7EiTuJYDsdLDrxYC1yofV2EtaLvbfAPr2ExNK",
  "key44": "41dem2Qcry9qsFgnpYHcfKNusX8HT3EM25m8RAAqpE6VDFBnFoMjYTU3Vg2PeA1zLRi7xfufAeSyfMHc4dviMR7M",
  "key45": "4ZEjDJELENprqaVBFHrmcmLpVq4SBmyXTZskcq9ZyfFNFbo9WRz3FGdowseZe1FR8CVVouRXULJkWZtsoE5DGz1e",
  "key46": "4jRuGJP5xgnB76qnc79XrYaZCpotvVKTdifdh6CWcV1idNdgLLnSTRJrHisP3gqWn734J3d6FTM9o3wEv8DiXKY3"
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
