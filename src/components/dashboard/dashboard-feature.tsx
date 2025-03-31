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
    "3bMc7ES76yqqN62F3ZrSxrYMDjA3N7AvCNRawNuk36TpydAjUKtAAAgSUJxanVBEuEyZVbcFaZ1hXY5CNCE3Hp2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPS5wjp6e2JBzJXZtP2tFWNFEmYELeHT8rJebnkTDM7S3akGAqwMyr6UKgYrr4bSmZzTD7hC1QuRjmYyFpmen1a",
  "key1": "3EMCJnzphAGJhxDLrBsUc8PP5uwtnuXA7SPZpCeWnebSKgzMBUccKyi3kWRcU6T5zm685MxbNT5ANN4Zdfvp6y6r",
  "key2": "5QfKp8WG2LismN1xwaNgP8owXcE3V9N4SMNqHKQCSduGYuZqzyvEXUoXuSPLjoNFiU6nWg68RxW8WkRXmac6PdR7",
  "key3": "wBVLaJteA5QEEAzhVqqyGJVLVKMLwY9RB6k3YoGY6pdmDremMbswtGo32EntRSh7WvaxvBHgdooVmMQvKtTBTYF",
  "key4": "3uZg11q7gUL8N2sp3xYDqQRpx4cFCQbeKifLrYXJeMDofDaQBx74b5seCgqMQkAxzP9sCRJzKkKLAXUJ79z1p16s",
  "key5": "3yUjqedbnLCFt5Lb9HnWGZyJaYjMztYdsXmvSea9PYQQTpdtTkHuL8hrhxuziCsb7aR5R35fquTbB9LSYaGBADF1",
  "key6": "5z2CqqhqtTzAQoV51xYmznU4MAjPnUhB1HfwUTKu1JfzabC8jHZSiC49bMwAa6Fa5Kyp2CdRftsi9TRcENpXiKAM",
  "key7": "5pioAQoEEHhnfHoKqhr7NP1UAarn46uuxwRXFjjWKWJ3bcVDTUtquqJjT4kZ1HYCmyTSMKm22RvAjU57GJaUpLLk",
  "key8": "BWpDa4aS916L9ZGQ9ZjqdUxRUrWs2UNMZaLXJngDkbth9wJLvTj3sxz78yfbVLNVPibhfoxZuer4JkDtiFgGyDj",
  "key9": "rytaW7kK8ArKHAoTAAkiDtmHQYQAcHv1fnPDC1SGFydFwBWTJk9ujY6qvbWbtxooj3yRHgvMM191ZWswWYmg5Hd",
  "key10": "5VzaawvbSbHQDQcqrxYKCZQD73uamU8J8eszkP1SWyjqnCVq5NB5hBQptuX4gzbMXoEBTQR89DarZ7szukco291u",
  "key11": "2sJoF5YatgmAfpGhe1fW4ovRtt6gNoBQGJiHsJm1dbNChLfyqBAPPYAwJ4yC5qtRBrkk2rzSUMWeNxC83pRyHLqk",
  "key12": "651CDHseuV3YKdqbp7Ropv1DLvqPkoW37k6Q7wzknYkrSCLXhuSj3hmxz6zv72zhW7vQBFhik1bUnavCrRmy6BXn",
  "key13": "2u13kmhq4D1CG33YTUnGw1VFJ1NtFpkFSi2AhKGo4ScV9NxmUT34AhY43UQc298q23snHHkM5tUe4JLrymEMGqqp",
  "key14": "263FZu8UCFUwe19ZbWKmYmsCeXXmGaxPPzCeSeXJJB6kkw4uYGXXHB71Jtn2goNxK2Gf9RfJfJaJGRAfFeZChzLr",
  "key15": "zuaRPCPUH7JAwJUE56MusqHrvuZFiN4oHYS97vAQ2qDWd5kkDnxZf3q2rVYpM5YmKsicwtEyAAAYk3rALy2iKqS",
  "key16": "2bqhXAwYy9iFYqFvpvmp2CUULFMt3MmPwof63PpP8k23EpBMaAU1G5yhBudyM8ZaGooiwYdRi1ihmcQdepLY1WE",
  "key17": "4KXJJ4C57Z2yYqYQgjPjqhirajQqZ2CHh8jG85HtxSxWbgNfGUkYjnXjMy2bFDRUnceQcENmMXCGtvumo9Kdmzn3",
  "key18": "5zxcbPDene5o2Bxu4VvoFTTWjk5Wq7vgQ9Jaajrz6ouCNy93MfxPiSNXV8YEXNBt8hCsbNyEDRTcEdcFaYJ1RdQd",
  "key19": "28fSZoDAoWQtC6XZxEbdT1FeZxxR4G9Ki6mtqacWgjfXggnAzre5EmtFKYV7eUta9MPTbMmx28ynU2CW4bxwFmJG",
  "key20": "5bzmAXBtdnCktTx1pZcNRQGuxAUiFRMbUBwo1LnMumtdpVAWxE8Vmd15knkJdCdQcbnPMznELGg5zfWyMvDVxj9B",
  "key21": "4m1kF4sqY6ZG9Kti6uPvpEqdfgePDDE4RkX5CZYyKzzM1BF85T1Ebjgq9DhvfB4aHhEbg66QSVpDkRu6rQbT8ZLD",
  "key22": "32N7PaTRQfuBkhFiMTN6zKP139uQzbuu8xqrF914rXcTegusNEn78dnohFRkiaU2tYo8TvFmvmpXBVgca77Eh85h",
  "key23": "4iGhtp969GUbBpfLNXYHwtoNPADjE9yzMBqEJNcFPUJA2peGN6S9ypbSSRczkqhgP72aWSLrbR1XUK8U1dGNMeX8",
  "key24": "4So16PgXor5UQAYX35eFGRPdghuosmbtDqRisT9tA15mDWW5qXXthEWCg7JKw25uGcqj5ACDFDm6iCHmu52z1SwR",
  "key25": "3dCFYvXFgHvfjovvDNJN5HydyCjknVZ67ir6DNH4YwZVHRQkkAsRPrwfiG3hxEHCqxvP27PTrZz21DthNoUFzHnG",
  "key26": "62T2F4CM6vx1sKVgGbbXQF2dXowCKJrbPrL5NFqaXptkkvT1CuGx2uzEYZPdV2gckF3xVzrDjRr9deKUZ17aUSHg",
  "key27": "2igBLgoktyW4DVrAv7XWXNnpRG2re3e1pNsgSwEUxEePFBa8iFWWqfqzMhyZJxMALk4JHxiKXvq42nMmGdCoGoR5",
  "key28": "26MhPHMnwrYWAFNhFnkVDxfptRGP4qrSPypoSoM5BwzxjQ8L3Sjvjrfi6ZsKS9faJUQPct7PWQL1Jeu8aDmprxpD",
  "key29": "7g8Kp9oiWCNsGRHKdQ6ZC1R7SFSWohG2nbyCs5tf3mgWJJsuhtvPjqqsUwweCA5zXFRrFDUDdKAap4DDT6K9cQK",
  "key30": "5qvwc7u99s1gAxUGPgzvyFA2esfL4p4KoigShehK9iecLxgYmcoNfrNY681VzvRXJfnvPSv8ErLmY5yPbvVwChE2"
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
