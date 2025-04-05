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
    "2P2KqNLVqfxu1FPDoxTirVY9h4mkbddszSrX1cjkLavCKTr1qLZABYCA67sVDtcWo1f3Uu5sHM2JEDTUbToZM3pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UbH51GChT7mMfbPf1eUDZ8GrJogWwHg9WZYxUZyUeioNNLswMb2hFdwd7qKjKcovXC6s6jf6QfC7aAPeRu2BfmZ",
  "key1": "DhZWFpgp8w8Nkna1ZhiToMJnbN291RR6txBZHkjhToBQS6jWB35cX4JayEEK9sTtr1wMmrAUHKcykpEVMrgqwqB",
  "key2": "2DD16giPWqY19uWyYqsvncLwmkMGvmd6tAenwo3gUqvKZ17nrDPrhaJFVEUBsLepi6ySjarthCGREhHJ3JLgSShp",
  "key3": "z4ed2ZmC4NyUvri2taHDge3BjktALYPR8dMSaU2EMLWjkXriapQdSXgjdVXyM2ysTYf5GtWicmC9YdiC8B6uiG6",
  "key4": "38yWkFTwKRDM4MFqUsNG4sRoEzyi7mAmffHUHEtTGdJL2efXoUSi9tYH2ZRqkyLqrm5HcNyfRpZ4RYdNZuZsWiRT",
  "key5": "4kxQcEsi7h82QuLuPZBV3AoSGVTDpXr7WbpuqB5KfZij2K9ZKQEZ3dKksvA1rc8LtbbtyXjgS9Rp3uqF7nbWhPYp",
  "key6": "jokAeZZC37B6y4V92XCjpE31LYgc5hHVjThBXP4eCdz5PJpySJi42YVe1gesHnW5zf1T2NAFLAyeYRzSRdZkMxm",
  "key7": "5tt6S4AT1oZd9kJpnb3dkhMHERdPaopai5GgbzMfFMXiNAvRq9tmWDV5e856jzncZoYPH61a4nDooFKksp5R2hER",
  "key8": "47BxQMCDqkMaM9TQszBKrHzaswhSdPE2XZebL2knf4etEfNxAXrkeudyrPrpRRQdbQz4NdPbHCejZUP2YcfYRyxf",
  "key9": "2oAbvqnNbujGciPiNWU7dYLbmhcDmszhLyppb9YG8tneHhqN6ktcedSEmA5EcKb9csNHt7xT8o2o3nC6ABpJSxe2",
  "key10": "4Ryp6Ur3uBjcLaf8rMs6VYVG2d8AES7qeMeVRYftKzM8KuFEmy9wJB6rCWscSSq3ck5Wy1Tgb8ehFwLnyi1y5B7p",
  "key11": "47oBU1SoaGF4bf9XrH5KDw5K5aDkyjw7ptGcctpaxf19trj4iEyTUjnfUoixi9PUQGBjUYAdhTRvkZTX1fZ3SKdo",
  "key12": "32dreARf7QA8xpBYZz8byPsdQr8YawmfgPo4VBUFDv79mWstQNKfHmkAqFUxcreavCDGQ13VfAm5VX51mDHpQZdv",
  "key13": "4xpgWXe1igcRySTbdKMGx2KSzE73xjaTFLTMRQ415514Rr8uNqk6r8tL13jJcojvPGkMCGTcd1sVJ1ZTFwuB11BF",
  "key14": "5hDmCHYMCrPnzKimyYDNT1W7YnrDU2cPqkY2m9VV1Ffu6W6ZaryiwgJ1jdi6wHPttrbsFo5rScxtatPTHnzGp3vQ",
  "key15": "4SyQeHqY5A24HsNSgxXiJgFP8wM8w2L1vysLsayfhsybQuQqXpLV1UNzWEyio9Smjyr41CZArB54vcEwhnjr6w9Z",
  "key16": "5qVs26pYtWVu8NnxKtqfr26AUM66jA34qHEwvK86xo1Khm7EPvSFKNH9pHLvmuhvh2Wnje3EsSULRG3awE3WKYou",
  "key17": "48FhwVmhSARDCTFLtpUYXkB6cE2ypxohjzmtgPYSkomm9tT4DvGtE2stB57YAdc1ThzgJeKV4zurk2csMMUm9jsP",
  "key18": "gda1q3qGP33onC16UJT8L7e7RMnX59TnyF1LVH8RQZ8GMddGXnfX8eLknx4BhEmJ6nhdShM2eyRPNxtEjoaLNtf",
  "key19": "31Z1BRL4gUCdSdorvfHVYM2yeyTncTiFkzKqsVK7qE3SQxt682P4yqXRCVX4bRWJt9pTgtaudEsZKgaMLcr1GAFq",
  "key20": "2XMaSGTgf9RZj9hGFZZn5YKyrBEUa4hTviR5TgKYAjFYiEVdb1JXaUgCXm7kQPAS58a97y6Gm4h8p5bvAu3u95u5",
  "key21": "uN34yEBANiWWrL2NvdRUKwMnWdazqcTD9Sy1zbJXRcSpAw68AaLmHtgreBugWz7FYFNw5H1Eg8t4vvAP28BYn8b",
  "key22": "5Kyz56UC93vZ5JigVMSSy1HUgVSntuXRGo95A8dDfE93TN3hP6X4Axaca6dVQFjPum37iYU4EM4GBRErQWp1APxA",
  "key23": "4tqPTgx8Eqwx8QN5wPXALSwx91hbnEZaSaCeYHSsNHRebfTtVmq8qqMe27RcY7GB7L2mQdDPNKM7UPtsAQ1hAxLf",
  "key24": "2XqpL9pZ8kD4sUVhyWWJTvcbr8PpuCaAdLDehK9Mi4tzbVft6nex4bjkGTLKwYGYE3RY5ZAynt1Xdndx9b8xcCs4",
  "key25": "Bsm5yjybNmPbsb8s7cVTbNYRmv9bpoZietHmmhhiDzTgzThmRQgvkUcQG14AnB6j9UGyutduEgcvM7LtrfHLL2D",
  "key26": "3L1JngvQ7M4VCCCXp8414zKd8mB4dmyFMHT9yMAWpok2xZ1EfSieuCnibUjfUqSDQMYLdweCRcMAhTqicYLKqVZD",
  "key27": "2xGsjvLSb1mC5DhcPHXZCAWHpHknLvU7UPgS2Jn6H4mgTMkLmEjH8HHhWrExKmPCBMRc9Xh8DFr9JuujtRBLrBjh",
  "key28": "mfpnvo2n7XfeqWJtUvMy8mwwoiMJ1mj8fgngowEArZDyCaAkgW2SAUDfHq3orCuhsandsGZem6PS6UCgFLk82LM",
  "key29": "3Tj7Qr3HmGwikAg4Ujg36NNRdtdHK166wWKSEc1BQQyAg3EoRNe7TgnQm5v3e34c88iUddRbiFp91WDoiZ3rT6F9",
  "key30": "43RrhJFUvddt16ZVX9E1QD5X2AWD2f7yUcQz9PR1zvbokSRNBCrVyNdEStN9dSYUnjW29aTpbWARTLueTN3fLuST",
  "key31": "5xX2S7sWf1RUkEJ4XpqfLC5xqLGVH9q792JRQzgbShW63NnVGnTPqJqBqPN59KQyBCW8eykrygTxY5b6krGR7Lof",
  "key32": "2aRF4mtiqtWn3dVU7PiXZsxnyYPKhe85LKN3BVkF2bvYsRfjYcGTqqWwiLmEtUTAM23VZZ4ouj1h3yFCia7V6B3S",
  "key33": "2TKN1GgvQnLhDLk6YNX8koAfszNHynfAPC1BSSgymDKAxMMBnHpKzwr5raK2HjVqFhgXMDCFsPLJ9d4impLwCGsH",
  "key34": "27QKdZgRsk99Gsx2Ty8rAKR8ygyP7eNcByho9NZwZ5uuPJLGjMDgy7RcjgDkbrreeBHvgFzoSy21btcFr8UeqFzR",
  "key35": "5SM7EH8hzyaQgGMfZfjfsiPsspQ5xAbKjuyDVerJrpMAbu2RwhLvco1nKLpczCiDNADYkYjtkwA7xZB2vAYM5e3N",
  "key36": "2yzQnHkBeFDumgmnnjYZxUqbroWyUxBRYpYg1MAJqU5AJdJuWHKUQFoQtFLaZcGiD6dDbdWgLgoq65vM3hqX3Dq",
  "key37": "4SCvNiorpQf9AU3GgUhSPxL5ArFbgF1TpJXuayQoekPMHnL9g5CjwaFtr7NTNpGaq2rzokvJW4Wr2mZjgAYsFcfJ",
  "key38": "3qaYH47XDveuTHLE36NhGZLvR9D1nfKn4vmrLWhptsyJG4Dw3uoykKuA7yhW4Y3ujRTbPStmYVnApFRHAPLkRuFb",
  "key39": "2AYzzn8d17Gq5ZYRuthSudRuzBKUQDTsWJNGNu739VJn3qk5FWfNwYNs53kiinA7ksbH1AwHJpQNp6Y87iUtZ6oQ"
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
