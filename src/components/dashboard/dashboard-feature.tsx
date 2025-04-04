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
    "28xXR34f3aoBogChabdkN96vvq5st6NjnBtRKzMyb67KGdLtxvEw7Za4LUyx9znRGWyXJAfykSkDSugccZ777xc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W683HwsiA2eL8bBhB6N1sTgZCNS9i5rKhU133ApPinC5N7QJEAbGth5qMEfvnVDiVfKKWEKV1EovdSGM1Wd2qYZ",
  "key1": "55ssAqFh4PkkLNBBnPFCevHBasZH7pbkhXFajBnEE9f1Mhz4GsXaXDgenvJgEhoFidkpDSZ81L7T4gfQKxkwV2Jv",
  "key2": "2Mofutx1obLTMKTg3GBYkKzqymkZ16iydK385or3imDESYyq6RucRAXTK2CMUjDJhLyYDV58YjkBB3Kxn8JT4k3n",
  "key3": "4ZKybXBvzgRdRiYirCFuvgPgTk4xK5sHd17MaPLPA8p3zGsRnuVVzfw98zM3xVM1wzBrfKoBtwJgaZpDMoSbc6d5",
  "key4": "4Fi29fZX1qsD6Bdj1JxcExUaNByjpM6CPEZBLqRPr6BS4Lmu4QMqr9yi8tsNu8FoQWsvwPEqvgpLLkxcdyyRWNYn",
  "key5": "5gZhbgwSge6WiWEcN8nygPG292UjLLXPwZaeHgaPuydyxZfbATbvCrVvUEzDAd4RdC3sWGdy6ckotk49wgRmw7uo",
  "key6": "3qhgi7pXEUsJKn9GG3AL7xFuaDwxX5mN8yc7eNDS5Gm9FUsfJBovJBgJHsmtVq4aeYsQFfxPcdL96HuwhtUWfaGv",
  "key7": "41HTpBWeVXTekFLxHK5xzfpRnWf1NqA7YKWiErnobTMj9kTugyH7pQa8iqqVtoyEkLmjham1RBMLb22cJYVX93Xf",
  "key8": "4a4yCFZHv8XJD3ZQzDXdstVVpZJY6tgRMrhqDzZK2vHGcaG4NCWa7Fuwjr4AL1Hjhp1B63wuPzyECKQCjcjBi7YL",
  "key9": "53hN5EpH3uNs9QFe9T1muMqNsoM6wRHgKjvbruoojbTW5QEQC7hBu6EZPugbJfuGTAKx7k4KPTvRPHiG7BKCumbd",
  "key10": "4ipTfJBHEEaXbA2ekK6UckzrtPTwuUb9WULahEws9oBgA1LHhFGDLzLB9XVQVWzcZXxdL2hqS2aAbLSRQBDb34RX",
  "key11": "3FwRBC4424Sqdr3ckgbjCAnmkdXMiBAx3WNBy1jhhfTMhHycHiskkNbo9o4FAhLEtmxMJC2X9UYF3JCDFYBs1tHk",
  "key12": "5fgkco1wXg3dhhiUHSXtou6Vcm3V82DWJwK2z4sZgypVCc4U8woZ94eW2zBKhtKanWWjPHghm9hsjAJXQP68V7hP",
  "key13": "33W8tHGEfcRAcdG6vUZncMjGT4dt9ELtztuLhqKiukbu1o3hYt2xwUJnTY38t7vBDdLWMGZ8BExbeGfGZc5yABTg",
  "key14": "3N43Leq2e1xgwEHrjGqQAQhNZTKLftDTDsJHso7YcY9P3HhEduaF59sqgg4uBpF685om6R3cE6KHy3uAoWt2m8Ms",
  "key15": "3NM8UEFqYBv54eM8ZRMaLrYa6bdyVCWpENmNMgs29grfwbPz5RbQ7eae6hw4SFXrNNwwq96uPyfxmGUkjfjwFLgB",
  "key16": "3t6BYuRSkgyUc8QzNB5iCdMar64jspLVT442n1fmXznBJ1ZSKYw8Zz3qpXxgXq9P8WvkkyWqw9bbaKDp3hodY3Uq",
  "key17": "5nGCFgBTh7Azy5dDFB4zTe3kLD9PH7m8TmnuSFXQxeQchHtWu2bkqm42cbAFSJMfFoMt9Ursis8LP2BYSRkd2Myu",
  "key18": "3CK1ieKo2e2LdEq3nNxfwonjxJ7W78boiFq1uB1jG1zio4f8JHMiNCoQUdtpop4LnpJ1fWEsDMAgWamhgYYkau3Q",
  "key19": "59XKekHDSMAgujS5Hxe7M2ovRpz9TgqXpUgRbnPw7C9uaaLsuv7NKGNEvaQ9oZrGMfY3ugLJso2cDHrm4C7vvPvu",
  "key20": "3me9thrusZRtw7PDtQit21EoRbrapzQXQir9BNY8Acth6pyGr6mk4oGkCqdqgaH1aVpDkTg4LQcFQdMS8y4xLxUd",
  "key21": "3c8spzWda9UgvrHmPXUenEt4TitBxiw9mAa7sKfxjBRNM38j7Q8FHoee1u6zrD381mcNEX5QgLoaeH2sCKqdHBsy",
  "key22": "5yoWdP7emRbCERGFmtaWHLy9fbwEAUL2Wdt3RXznsaqLXmj6ugYDHYVV2GzxVrTQRbKjBz7g2h78aieHVM59R2by",
  "key23": "59MWaueDq7sJ2VCcFjUwkeGjwRP2cfL38hemhbpXDGm36cHetCtng8t1NdgHf3rV4NEJaJU76jVgZGnbaLG2f5xV",
  "key24": "3cd53nYTgw595SUwMq4TN9WZpFBW56K3p9PuyvMmUtFCeVvMxKyRPWHJG4Tt8Paz4qL3giF5XYxMjQVFN6V3Msmf",
  "key25": "4hrxFGj3gWZNze3TtkxXX3N3LeWEeX668Lsu1PDfSd1F1bPtpCBYQpgbCNG6tnH8mYaPNx1h2gNapHdjKy38f4FT",
  "key26": "23q9pdipgTY5DcBPhtF1sGjqLJuE6sMVwg9cvsw6TD4bE8jCAeCyYJTdmctHBL5FAzKNGLMUsXv9uQd26JdsyxiE",
  "key27": "4f6Nd9KVEkciYgU22RHUoi34ykuZEBZSeukVDBQH6fVKDUUMgRq98Q4Yi7y57uAcipP6E7Zci7MvCN67gazJ8RLj",
  "key28": "4gbiNc5JKDRBxi8dieJ62R1C7qYqj8tRuovUkWvLbhvt5LgTaBfNpirr75ZSHCpdnaXCS7MhehvNua5P1JAR5riu",
  "key29": "47L7DiaPqmGhb8a1eeUYVyuPNzK8aJUv4vH1sZipYZrZGpUicc31UCWHjbZfMfJ3ixtCVDTiU6LkgvTKcGPbE34e",
  "key30": "4T2uMBNbxzNxiu4Z3KK3hu9AF2xm8kQBtxJGvEPhfcH2wqTfPVqdvahfxwLcqQCwpLx28p3jKWr9EvE1HgBEXzW2",
  "key31": "4hCzyvbUQ8aHThCTHiCTaLJXaMvcuWzrWNpt99GRy1vo5cuJTTw2cJpsqR7ja6i62GTSU5abtnP7mApXJpnHxAdL",
  "key32": "wytxgfTQYcP3kRo2FHUHiE6p3wCiJUkRknFfPpkd2s5C7g6ffpvuC3jhLgQvCogUp65Jung92pdZpYiVEDrpbQ8"
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
