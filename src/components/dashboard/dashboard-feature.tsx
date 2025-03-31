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
    "2PPJeXVCB7uyzwTunwr93omEtFNbthzLqrHXyKwjkPxo9YFsn4GQ5d6cQSsdRFCCCu7eHWmsyBFyFmULaatvoeGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gfwq1Vh3aVnzovQnmGexojFJuxNNZE85qYHVZB1sesrD7r4PPNiw2XkaEM42x5mipskBXUBQFFXE3GcQ3AP2G2i",
  "key1": "3uE4HGdgwMEpmBoAEfLeTDT6ToCQ4Qz4mEETmqJAFaHLfuWzoawtHm2S1afKzbdKJqGGJ2u5rhDN9vZUDSFbXF6g",
  "key2": "3gCpdpsb3CFsWJCnZAkDDrzcrgjM7cR9RzTdwD7aQyVbSVQfZjAGji2qdncnawG9ho4mf5eZK1KJWJ9cgVwqsfic",
  "key3": "3eCUUN1QgR3QeBd8tTc3ZsNosUy64Fi6PMMtj93ebCykswNrTELPRVkjacjfvoXiTFbqfQv2utmPUqpfGtt2rX18",
  "key4": "2juREDANgUZXrXMqJjDYpV5Vg7L1xa1TFZ11uE6TbhYnTYuY4jsESAmfW4Hgkiv1D9sSP5uNeDM9DA3Jvg4Uu3Ut",
  "key5": "599qaKLhUgY9HuQt3TZrwLmcFcfhQCwiYcmz9MLkZNSvod6tdioRMNFXbjEzMGREpsmM4vrCSDz3qvQMrCd9DqoM",
  "key6": "2wwbPGaJC5NCqnn1k4J8YrMe6Pt3NZwcTUf7FBKGnzuhe832HxyBQGhw5HxoxnxW5BpxB9cmcob3HvVSwNptjYCr",
  "key7": "2qSiLwRzMwSh4SvViedfPjbeHvdqTe6XkDyM831TdySqYiVAGF9nC1BYMmRRTk1mScgn26eiAXLhgCrajR7yyqg5",
  "key8": "y2DLVVtjao2PYYNvTbvDQmsz7ozQh6uX1xPzuED3iVhU7WcRYWev3eRHDFnHSPvpJsWxjdNYLne7ATauC3PYV1K",
  "key9": "sYFUUYCRtdaKXWq3mAzRJK2pjX9Lz8166csk7pe3GehcEDSqDva4hHQVPHFaNPa71FZagZK7t4zDcbb7SQFtLhv",
  "key10": "4T89ysdREV6fv2qD9E4iegJS2LzD8XuCfBUhkEvst2orLzdicMERwbVvGgERrGf3Zr5w7APg4JV55mKupSy5DW3k",
  "key11": "5G3Ce9jbSBci6JaLq2SaY4BugXxcu9A4jSsW8NAoCj9TamZaf2e4sKNLNaYKgsCzjC9tAStbLqgLWqkePBNCTWJU",
  "key12": "5sTgsKxouG7EzZyrnTZ72yFVpc3MtznhgpxeRjcLzRdmXdKoubVcyBRJxxAju5EVvRfdFR9inuXJsWTcwkcxvUZS",
  "key13": "b1sKyCpQYxuezADuA2VZT62Nqzf7n1kXyZWWNAmJ36R12MdkcHzkRmGryphJ6X7ToukFYGXrDWkbwtexjJVWZtu",
  "key14": "2fWMPzcMEKUuXf9Z5noNUMSQ5XLup1qtWYu84cfxjVH84KGcWrR5zYQiJhWSAwp4a5X57gJsDq42kHnfPuNE5uaA",
  "key15": "5do3ZkL9V3mGBpJ1Y3LNWjWNTbBbXdf8FB45aZkMcCXnJ8aF18wLCmPdKWWbh5Do4k6XpWRRLArMYawxEANA5QFs",
  "key16": "2oWoGCQem6bSDU3ECwmyxCyrT66hrq7DeJJ5yHX1W7TvnQmgzTrqtNnw8erVqb4TcKb6aUusQtPVWPB9QAuFZpYm",
  "key17": "4Ck64xrKSgSzEAEu8tgBWMTjARPx4vhyR223vUhSoS83GNXDJfJjktWBy4yRjSokrhB2eZYYCQgMhowDr5Zcdohb",
  "key18": "YRdRxqdKzVwfv2kZT3mcpGLHhLF63aSAYvjdEARCGAZBAXrHd6BnrBdCJ71xDXx5BAMQaKSd3v3wBCWmpRt61Uk",
  "key19": "2fBe8fPAk643b8BhqHbVpyaFTiG2rNxxbuXUZZRAao8uDG1Nenwhazy5Vrr4k15LTdxoHVfw4Y8W4LFJfPtAtHko",
  "key20": "2BXT3U1qzW1yBprvXEHCo5c24krQdbbSvaTuqtgkMTUXkeqbcVvh3cDvdJYhq9esWymL4Zq8SixFMEe3ApZXeSuj",
  "key21": "36Ep4xjAtkZ4NJ3sMekhY8eMZ7AZYa5AQ2i4qAZ22hXrBDhNGyFVrDqbpzAXh5XYhXnmA83bERBsKTjCH4Q4mDug",
  "key22": "JsqFBVAgyUqiVB647oAE644SgHLkHuSGaD5bd8Kgo3qpNUQYGY1jAFfbnfKX817X6UMgfss8G16Y9WWsyKRzpf3",
  "key23": "62PzLQnqFt9XBcy9im5D6BCfgrUn6ivSzKTwCZikS9wb6t4vaEqGxG3KVARfrCUiGkMbnmWScoHhy63mG3fEEjdk",
  "key24": "4uuvE9JCZCDfepodHKXY6MpRvncd7yGvEMj1yYkRM7VoKsynKPb2uKbGzCkmJPf3Lnb88e97whrCXXxKegcS5PjY",
  "key25": "2eNf2hnXpbTwZECfQvbA1duxJU8foTc4agRnLBBboLjSVukx3HgQviXwRAr5wE4Pu11or9cvXNn5rmCo9t5SsJoP",
  "key26": "5XrLJjLUXAzF76BqgmD8bm9FCxhKqL9miNMszRyqHPQt5XvaExxkGacZAyv965HgAtWe9otszYqRrxRrXFjAVZJn",
  "key27": "2ffmxheDDfgVi3JtVGTwb4mz6zkFdvoG7zUkVTk3Gg7HeMpvgfCLXcYabfLRCzPtentjhADBXNBLAbDtEvMdsuQB",
  "key28": "2PiraLnGrNFsZe2W3aGask1PwGda1iQtfriQxoAQQYJjJFaELNjiw3JD9Kuaudi1cqJUEiZ4qtLnAhN7BTrC5xR",
  "key29": "3LzYPYCHfPokTpkqBm2foNSLS5t8SExdFDviBWVkcF3mZMhph6mKiJJ4sAY15f65E4xwSzi4UwuRoFGNu7zbAT1o",
  "key30": "3T9UxEU5pxdmom4JwHZVoxaZe9ZJY1cXkshWhDonmnJK15s4DUP2D66vD4y2JtKbdWQ3fc1Jhuat7EcEWj5sfTig",
  "key31": "5EKzUs7DEH3JWqkk9tJXnEb4akrxMrBbspAnMhVmEwa4NPpc9FsbueLAtWuEzppyztcQMhYRpvHxTVHbzLcPu9si",
  "key32": "3x1uZV3YhuAM616NDX44X5PvrTqX79qpdXtTejfK3vVoQJMARapD5HBiMuFhTZdmF6npD5wZJ3gXyJWwwzTHgV4o",
  "key33": "397TDYdpqpRVgUsVCdT1EJSpdYeVnoMD8P9F1NnbTCy8xoRXxPmqWNhVwRHG1dVG8qtAvzP2JTVYtCbK8DA2bsBg",
  "key34": "K6LLws748SzZSrKR9d39iJctunHj8G9zptEotj95Td1y7XDmq21T5f3HtCyBc7a7aW7mP62qr5Dajodgs8QQxrC",
  "key35": "4HWbKGn1je5dqLVyodEZs4wGq5r7hBBoqfmBbiRwfx2ZaRvJYnKNY8bLCTtKTakaTKu2rXzVHEo5bhWbQefanpDs",
  "key36": "3qqqgt38fRVkPbQL7PA7fuvynvg3o5uvhGmegbtKuBCeSWTzZ28HK5WW4sVZQbRpnSVu3C4jj3GfEz16h9diyuY9",
  "key37": "5DDybA9Hozz4eBQVvdDavEoXyrDArvnZtb9TAgM6q1ecEsA6i1WLnW4ghZrsb7RapoFMm3zNE7erEX7KKWaUAhYs"
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
