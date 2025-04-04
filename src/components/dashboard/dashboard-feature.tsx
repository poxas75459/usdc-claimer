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
    "3iPngCD2nDU15E7fNwVere7Nzb9oEuiHJuqzAC7Fq3uWPc1tYVmyKbb4J7HSp8f8ZuLrosqhPwjwLSRJtMYa1Sbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8U7V2RgDwiFVuEMBoKXXzBoEevEJrViE94u614XgpsRrbmp5DJANfCm9odnB2bA6KV8Xe1AYXxsanvoqATXTJD",
  "key1": "5iX1jSBWATsEdeSdoN4yktnRtpxsjNpvnAc1SLfxZX7Jif5vEe21A9pfos3NKzDw91F1YT1HzuUSNK6VdP8J7az5",
  "key2": "4DymyKzckk9Y46Kh9BAiV8YGPiPE4zRbeui5jW7dJL7Qsyjr43LLzmuacWq2Aa9hR2rXDNeYRpdfaFnwdTq7Rh1V",
  "key3": "3QAZ5kwjWbkGbnxNAJarDt5TcZSzLRLGmQHJ9DkUGTs3JW3gr5Tkc4eG3wgfysvZBJ7GnmZXbY2T933sU84qetKU",
  "key4": "5YUendaXvDT3F8SLQgWikTup4Pnbm7yNpKiJyNsGqmPZ9naKdTzqSHNdD4ZCzPh6qq9xhgvcMYHVEyc7MNV8H1zg",
  "key5": "2gteqaGKUAgdzh2vH4hoSm7d3E7a5byCXtKZT1LZoodz6RYdnXE5nyP5ATEUt1G1HtVkgroHi2TxCrzDxBSyFq5s",
  "key6": "3oBJRcWvceisD4zhrw8LNxYDEncH1yU32gxW2AkGX5iRa7e3PHnkkRV7MjXNV7JYzUSpy1jXvRWPG63pyMKTuRSD",
  "key7": "23XA6e2ZdTWvQHkXqEWibqXFfBSrjWMBegEPZ3deBaXcodPi5K1Potqo57Fem6m9cCS7rEP1HeXef77w5Ss3fxBP",
  "key8": "4d4HZck3SomzKzehXtfruTYFcGVzqH7cQgmUkDpfks6tyrdAzZng2FADQgxuwt6QqBYgzniuENHyQkBhj9299vyL",
  "key9": "2SjRTE6juL96CcVHiz9SXFAAQfxaLuSqtRhah3B3vriCPjc9C35DEGzosi781JMcRGu3ZucPVEXxgCBayZxLGkb4",
  "key10": "3eXTHWNXMDjBQJYcKrd5xvuwU9SY8fAAhpy3Fg1JHWajs4aEiRh37h4xQfh7fBY2G67W1co6tq6j4zryaccefSn2",
  "key11": "23kzEgTN4uBASBCgfGuK34FLddrXkSCDBSVbqsL7GdM7hPrzAzmZSvXmqntnABGB6oCqvLnQEiDGj1cjEmiQayxs",
  "key12": "5bhKvyq8yeaGDs4QWQ61aeRk2vPAtqwkESmqWZ4wo88ekJ6T1DN45dmUoUJf2akAv2Y3Cn38pE3kSamhDZseghzd",
  "key13": "2CLpZBq6HeCWopXf8fuR9WnW9SGJwbzBLYTELURgEYFZMjZReQG3rTXBa1CNV8BDrijtUiJS57hurXUjDwHHXwqa",
  "key14": "43wPomyy25hiPi88kekXC11bXuzZfSGHiBjRaK2DD4SNTTkCiue6FJ4f6CCvdwUgfUbpzagLDX1W1QeeNmN2KgTM",
  "key15": "52msV4UkwEyofysCUE471v3KUc3V6LBkoVEW9Ko1d9pL5myKthuBGKFaHLpktAm8D6e38mhFCw5tm4rDFNNtQuv8",
  "key16": "5cs8hNZSrH6TaxWtC6NEoPDDBHLeANS5PhLiXNeNUotu8x5hyL8VnUpSW8fGvLPvJbtvwEEppxYMBaXgDvenwQsP",
  "key17": "2n6QaeLiVKTsBboexk86tRCqPwj7tSYy2djWkr2ApR3ispGNCi7aixuacj25N99d2LbykQp7hWnzxM97Bne75wX4",
  "key18": "39qYZWvXut1B7ZUyfGfGkP7vuecFpCUXMKSSHgbxpLwqLXkTGnGWF999rYhVb9RMrWAtt8oQNZ84UExbQ8V6xPMt",
  "key19": "57fTDRdoFh4jArekeaZHuNYsamHtPVa9siFhCMkkYGftKKNddRxxzf1rdqqfdYa78TPSBm6oirrNtibeT1HRNkcy",
  "key20": "5N5iziUSAqHGGpbkibiU1XXAzasmqoR31WvXGQm2fcV7RM1Fi9XzGcUnhJzjDfQF8ATzRfgJ493rqRTTr29Vc9sR",
  "key21": "F2RgptqsgBLgWr1TbtYzu7gtnDTYkW46APnCc8BmQmZcbCSJiapKG6zdtARrpzoarNXoRSXTgarWEqSx3Uw1GK3",
  "key22": "3n6ta6ZUTuJ4JyabTAL4WMvKsPfv6jqkeCGKUNxKzHzjZKSzHxZRqcPwrf47bzskC7rzxXjQSQXQjXk1DQyMmBAe",
  "key23": "4wZchChwVkMXeRiF6ShaQYXSpgStBTZ96MQTfbyGZhCTM2NfZCvzBHNjqUFxWNZxJuB3jTq7adrKXgh3fFoouzNC",
  "key24": "38FnvJLWLUEng7v9tUzdGM64crYqUCYwHfAqYwhmw1smam2vUzVPE54iZMdtN9RHsLyQusCaemvdz2vkWyvZouD1",
  "key25": "4iBxTy5VJ5ZGA8mUh4qX2PdrqUebhFdRJgxnFAPPy7oxV91qJ7JjiMS4XkCo8KszfuqQhJKPwuDEeRTJ5QTUiFF2",
  "key26": "518Y5J6SCkdAd3vyCLC8CPLpXbQ23m9wEAHifaSKrMYU4th3QYBJnBVtQahzbrbvPK6DGx9oQJXeLhxKSX2zidLt",
  "key27": "4VWXHPNcGZsbWPBRyMmqyB7oPpCCvfeMnG8hFFrxjVREVu7wB371VhC2iHwGsNyxLyHzAAZJjgWnPiHKtw2JZGGK",
  "key28": "24qDLNzc7pvWzpiMCCXrPMKrKBfYLqeJEny1S3dgVia7w9c7Apxpgnn6WXDWgZAZdGcndn8QvMgc6d4D4ApuBmYz",
  "key29": "23uBuQJTB3ccL8bRDXd9eDd7t3FBwnKJ3owhkq7CyyAyTCF6okBAG9MZPoVomMuHddHUuLxY6UWfCvmBf2obvXJY",
  "key30": "yaohdr2D9sEH8Nnmdy252egGXTLauZZEHU4sQ1dsHQ3BQHAiHtxSbkvQGpjMDsTd1TFo386vz2UM5Z543w3fwFo",
  "key31": "4D81sC1aUfkwx3x6vQ9ZvXNqE7uATFsKvK3KW4GoyXEkGA9RbZaXGTk4YavH31qX2Mfj5mUiJDnSVUmKuhXt8Eh5",
  "key32": "4rBX27dusZb42KCRoeJ8WfBx3Vdo6EHokUto5eKqYPbyKLJ8THN4vHnVSVjotnKV5oTzqmmb6CX6i9J3k88iXoQs",
  "key33": "397CjsGwXtaHrqLzxsCJFi39HUD6qZETVKhJs4zfctkLXerWpBuFZ63mceN4Em9F3wPQ2KBFm8kzSNRZmfpco1RZ",
  "key34": "41KQBwuC83kTQ3Mg45GrtUra9bgbo12ppB4Nj7wo2Z9ZmVgCphbqMcyyrfXgmirgNKENRRLPVnn78Bfn6Frq2FMh",
  "key35": "H7Latn5M99M8AkKTyFRbkdSmyz2yWpnbJxMpa6Pr27GrnMkRVyLy8BJRuvbabYFC8t1AxrdyXusVjjZWQexF4tb",
  "key36": "2qatQnQs4Ci6kdKE8fo8gi48wwq92RfToDo1DfdQHFB4b2dfmZCzz2MyauqgLaJBQsRotQQYPtetx5qLMiSYucpr",
  "key37": "wiJ6JkwvEwUYU7m97qKsZLm9WXcPAtpWwum14GYfYuteG6k1LWY9cTVi2cx6FTt9eESCZzkKfviY2Jboru5dNV2",
  "key38": "3Q7KKd4sN3wP2X9ebMDEgjpEP9FWt39wrKjrDFqmJ2s3ZPUrGbFh6arbdhS6gwzMk1QkPTQQvVawzB4Z3v5SiNJj",
  "key39": "5uDBmQp8qd1HmTjBSYLNk6WX5LGAeZLJFJb26Sh98QQ4AUJDc3cMv7JK71fGkY6SRzcnSRpxiLqMK5gT71wyHVLG"
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
