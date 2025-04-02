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
    "3WLWL41GqAVR3YWohKNaxWyDnUvPDrDEd5Ve37nv9g2dwVTfXz6JQcuN6uCBefkKfqPB2L2WybbLdi9iNwoUvNuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxs9mo32NEMNUxcMSNHjV223TrVzfTRRdQvEEWQnDQ5qmdSDk5mMGhwXQR4CxD1wbcf8gpdtoGTFmw1MbDVnZCe",
  "key1": "2f4z1LGK7RKxMJmy1qkMo2XXpXsz4KmU1L7ti8YKAb9RuRwj6CGEqdVdqRnLrVHNTpph9U5Xo3iYuM5S6rrezUXP",
  "key2": "3xBkZNcS68dmRWTszaDvjqTg8WVgSPZcj8PNvRJ35bHaBCrHkHV5veXoN1SBmXUMJtrbYHYMs3bcPokULyEEQCQa",
  "key3": "3HPwuxHNuhoD6dtTMfmYD9ZYyfxmzTU3WxK2CmnqsJC9NVzDP7k9VfjfLr7bVCHe3EumDoWBjCJWT5fSsEV53ZKZ",
  "key4": "2BqEwZN9f7EyPdHQqBDBTbzR1iMb5vsfqL7tMoxGcby3vCUzWS32j2gVjEYieJzzXyspPLrrnjA6tixjVfJdLQUM",
  "key5": "4DPp7EznPQ5XvziApBTg96rVv7XDrjPkpAwzhWUVuQ6CkFKiCEwSCHdU7g8axEijkiwAkZFQjcoxEKjkoVJ1Evd4",
  "key6": "3Lwyk5GZD3cBBBf3sm2tzVRSyJxQcn6XXstx8mkC8pY6h3wxD7UXsnn8q5tWNFM7FBLEB3egkqW5ie6AgRcuCSPF",
  "key7": "24sZaPqj5FSVbU1YgvhJS37Zu2AntXF1KoJajy3KWSXWyRZ8VWNzzrVyMEt2dijh1GuTZz8deSxAmtunZB3NDRbK",
  "key8": "QU74nXqd38K32vuaeYc8NtY8g9GK3PNPmVkAmg3SyNnKN6rp2eeHY3DezpDrocbhWAvoFTvwrmWgiCNxBu6DjfK",
  "key9": "skUDjdY17pjwnFUrxUK1cyXyX28rPxWNLp9AGG92YVAgUUn8npDQy1jUjc7WfM66bjNiyeEPKZiX8gQG83Lxe5p",
  "key10": "3XjzhZAY5G9krSPPwk2idJ2Zdu1FQJYXBaddidaU7svQxqDgGCaUGHZ9pfEm1LRrcRVcnXJr8FRzWDL5dik7sBcv",
  "key11": "3VoLmsJKfiKpsyWA5BqixtH66mjuvv3NgbDS9Z2UF49YKvJWS5GMKatkwBYF5nuvDYQbdUt6JvnhbiUhRScgDRra",
  "key12": "3s9vNQS3R3nhwo57b8YEqQWM8CngCLsFYWR7GzgZKLqi9gyFWEwi5r8d5s2T959FJZa8kC629A5uHJpVuKM2Apot",
  "key13": "NytJ6hgTHMqbFeikyYN2qtaCYVA1rVb31Q5j1VtczbqvqS7JkuHhhLgiEWufoVANXUWPxgx8tuc39uRPKish69c",
  "key14": "4keVAeAExrbCKviNtXr8DtR3QQT6W2EG7XYbQrHgHWehB6zPuvq1W8GVMcxawFWjmZcHkYb8RNy9zXd1AiFVQNuZ",
  "key15": "2wPXLrJ7zoeS64mBNEYefiYULf8Bum2ZgZxN1Hcwzr36tDsWy6PSMrnJH9HXEP6qgwZof3NwtA8iGUQTmzyqz6U5",
  "key16": "5gKXaoyCWro8BW7BK6JK3F9uuUJeaJcbyM1Sq2bnhcxxfMcMQ88TTyPmdiup2fGDS6WrDszQ4424bDV6KWoPC76c",
  "key17": "4jsbo4hU9eidPE5b1KAHpdDoFG4V5Xb7rHDera1dwTtTA8WeodGci9MxScYcmS5CcgKuSMfWZy3VWkFvsLFofogt",
  "key18": "2mgkmmmyCmD91LgfxgN3zkV4Dr9dgkXA87NbohJUyW6P8Wyd3GKT5mES4q44iYY3hda6c6ZEkxTxucteUgGMBr91",
  "key19": "uSrxxm3sjFapJta1XC6czrTwTtt3Sb9T6GCQ9NwPb7MSXr7CE56hG6oc7DbiXyEpot84uR6SQtHB5eRNGgJKZzG",
  "key20": "51UvRhy4io4aFmsycGnyDoDrmSvXJHKeEL6dYhSp1yBjuba7G5sqPYpdaZ6CYxJrEK1XrwbCtHLM72ZK1gkKizXP",
  "key21": "5am8VjV1HbojhrwuKqfGLvhjFUPnGvrUTZwQ76Z6uoeSiU9VvELSzLToBC1yRxGZDt7Kgv8z6pshNcHeCPYzTMVu",
  "key22": "32gfPeJanjAphfAZVFprJXN627xotz7Q1RyFEDEuuYE5SWXc8SHc4UK2Ep5d53B2cV4JD4RXDsDHtHgEgHfg4of5",
  "key23": "2ynoRzeSWxpHeYS3dcHXEL71zSCYL8Pb9R9sHgTryneCfPJNBLT5aWX4y2Fqc4bYxYq9vzQZEsBGwMYScZg15Wt7",
  "key24": "38UBdmZJK5wuTdpgodFoUcgUMZ6ypFQ69apTMT5KZV79WsFTqDxHhSwXd6bPPG1zgwuxh9Ji9ytUrzpBPZKt4eTm",
  "key25": "3Zg63r2eeCjftPVW1yf2EJRVDRkLXBYJQgecTbKGtSDvTRyFAZfQGpky5dhwC2yZVcgEgevJ8CoreSHKs4QJ5hDE",
  "key26": "63k48rZgtAkYgpGKmUUK4uDGZJP1YtQPSerjxNGWtuMsPD2TmWPge9c33uHRfWAupZmZNQRXkKC9Vxy2UqNmnQ6M",
  "key27": "3YPhVWAMns7CzWBmGeA2qMtXGskxUJdL2dA7tU5tsmsFKgG7LXdAcqiyB58z5ksGEy1aUsYXt2ejmkdFdg8tQqv7",
  "key28": "QrAZnRohc3CPY1gJyDqqhXwDy7THz9fSQLJ4sym1Xdn82uRLjSVe4d7nDFHeoZRQe6PuoyZQmMEqidu6C6heQ8Z",
  "key29": "64VXiauUeZrrsiG9jHxTVTnmDjDk4jVNNkkg6JaoAy5rqhyTtcWoU9pnEQCUnJntGga4RG85RzS3hoAdkZSzkf5z",
  "key30": "9uw1zH9bZHiKQyCYtzMfSSdtWyo3WvhC3pNwmDq2fAbNQ9Hfgqyq1bszb1eemP7WeNQkiyjCL8gsnNYnLwtACVJ",
  "key31": "4XWCPCctfVKQKcWnVEPgJckFBUm8GNYhj8ZuCqWHtxodstNteNHPcR5tJtdTc8Xhz1MQ2qacL5VoBu9n8UsWeVE8",
  "key32": "5RTFYHyMbvBWEqshhtCEcaeNYuyaKr9DYeBSsxRYtc7Amfd25aGh8AscsexZ87dopu3LMe4vgYcmtUkUD2e4aQZB",
  "key33": "5nVG1bic4UaRaCNpi8kbrdwbYFYForWFtRoGHyKR2hTuiuibRg6NhnzZJHHCoQ2yErnkUmLGWnb4bM5c2WJ9kM1R"
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
