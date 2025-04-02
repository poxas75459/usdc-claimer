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
    "Y7AfvDhbzkSspbD2ZcWX7uNm59MQo3RoCF5vWguXkwZeZF3KwAtUnqssjYjZ2GEkDrZD1PxgGjPq9HFCZGrKwny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tci3gdByoYTPjWhtemB2doVkXj8y6PGkKBE1Zw5RomapB23ai9Zt6tKm4n4FMkEH7PU79K6zXQBondKuhr4h1V3",
  "key1": "PdtShxWPzVX1F8M2TRYkaK5iJDj1CpiLyUuDBi9A4sZwjDmDBjuvEyN5qDEsCAG9vVUjuKWZfpCnAW3ErqRJ7YE",
  "key2": "46r1YpSU1Y5rdWj2WZ35bPCBhL1aLrMaY4v377j81CyYFCvoscLnSW2pXW2uQ4wrxpgqpAqKnSB1z3McNEu18LHc",
  "key3": "WYbf5U8R7EVQuZJzZot5pPxuHtDNvsGzf5smJ4h7dVPPSJixuZWEdBZzki97Uyc4SkVvroGicoSzWjFR1KJSuGz",
  "key4": "2H7jqVCkdTv67ekzJwCPXSfV2UV9QeiShUwV2RwTVHL8kVbjjiXmabjsAEErrziLc9LoPgCcWxg1Jd13QXgbnkXD",
  "key5": "3vRPagGCu334hzzjyLgXFscDmuNGpBFh3tx4edUpwNy3Ax24kgTzekJ2WzvCAfPNPsUFSuKn3WbNkpZbF5ntwWEz",
  "key6": "2854YkQspwt3Z4F65Nww4y8yznd4CJhydSwNPxSRMvMZkRjGmoUkGbcMRYx5QEZXchAVCPjShoR5BehmvR5edBTC",
  "key7": "5hZC8vErCW9fL4eCuiqF49jxkxDw9rap9qTNigUTkoKomPH1tBRuztdwkD8Wdt1MRghhGPnNbXgdGSJ4L78QE4eZ",
  "key8": "3m1LweWkoAz8RpRdxdjK6452FCfG3SZyaz9AgJiW14bwmvNhEvsrBVBSy3xyUM8UQDDeBkmKZrPzViVhT3UGH7Rj",
  "key9": "4YY9zPMoiLvqqBXN58b5bLzaQYuEsoBMeCGzsyDJz6hEJD8bmwhQFe5uQ8tF3rAhTbKfb4PtDmvannSnAhHChrtk",
  "key10": "5ZNdKqC5hCh76sKJUzdkxPDfzYPyF4z4fCrcSkM22RaJLC1oEKPnXPryrV5YhX84U51HPV7yTfry6EzvcaEEaiUV",
  "key11": "PXU5ZqAJZzZh2emoj2Ha7uM6QXduuu435riohHtb4Qns3mH47QX3rPxMKoBh7EGPzrwujdti3DLgRy7vz4zkwYU",
  "key12": "2ohJkqBjq5U5puYNy46cXD1znbE8ALZX5pprEaxjTW3VCquHyoKyWZdgtMb59nMCwCxpNDrTbQut724oedS5vTmb",
  "key13": "2Y5yfrUXpPv5tZfei2xisoGNeL2pJ2kSry9WbSUc7Acb8pTXBLhWvyuJJVHb1L5WoosGRkc9vmQCXuwhY64ztMWh",
  "key14": "62zz89z9JRmJ4GJBGKLEUJg7evggp6NftVCtAiiP786wb85JsiopdfFJWZZCLZRdqu1s4bDzEiuC2C1Lx9GGzUtG",
  "key15": "5JUyHhkqQvBNXsijcnWAKeF7TSe3jkuwkv5mtHpLf3GqZVybLEn2XsnDzxfbjnPGNmxERwnBsKs9N7NameNnQQtf",
  "key16": "qwSsHgHtu6GgNGcA9PDBPjKLDtyWRnzfgScwfXcYQHPxPNsvZ326UfLEX8yrLGbvAcfexJ5BeEYeRb2QZ4FtDoz",
  "key17": "M3XPdEvzPjsLd2RuZTykkYbv8DaujMtuZ2cFXWVFrv438QAq6eSTYDuog4VsM4KqZ5HEqCVu3aSyTZ2jGoZ7iyV",
  "key18": "3cVckDD6gTkxNDBvMRsfc3NhTTKrQBTyJF56hr1Z55xrXEiX9ByhtdBXA2HYkXVtHsXvFj4GQGpdhxez3PNGNqP6",
  "key19": "3Hh1hpUEu7B3SfExAtXibpkKM1ydfwm3AvwgAUcCrvDkZsoHuDR1KjD5cLy4toZvgZPJtY9wmakXMj9RNqLNuP6Z",
  "key20": "a4dPwPEDNFgb6AX5MPFMnxbk4HVWZ1EuKyQm4aBVLG8HVKuU8AkZh8YGfXBDr8heszY9SuH6PVWorhBDqKzgFUQ",
  "key21": "4XCByQZAG5wbc38DPDht3aQaLCRm7iTTTCZvhduAhfV7QYtTkYRX9rmbLUvipoqjcFqyV9yB8sdtY1LKgX8EJ36Z",
  "key22": "eQz9Cdhb3rDaxYwp2X3quNAAQ3YZj5jACEoUQ9jbDJ9xEaWK6KnGjmzgtEbHB84pqhS1NJd6JTCVMdNrWeMsgKi",
  "key23": "44FRXk1kKPzEoFAagkyUr3sCf3RdT1asVNVmNztnph1nyFqVUVaeqYs2ghGDNsarfFbTfAfjQydYsPAJmP4QGbmR",
  "key24": "4YsQ9PiFijVjBFJHFfQvCiSY26k7ZuwLQQeKGzxRL52gYmLdXyy3vcbPBJz1prybVdBz6w4DNfnBDbH38X1pbfX3",
  "key25": "Mo17Mdm6MEy9U3gX8AqQk1TfHwEyX7bskscuqfRvWtjQXWDRs2MNKz73WpAB6vWxi3KLhQVRQXjFGu1qznCLtNg",
  "key26": "4EtqjSziC78dHXrAg4Vteg92yoQnZgX6Jp89wYxZNMUr9kBJWPmiF4XfHJiLSFn742coKgGE48tmDr8F5sSF2Jn1",
  "key27": "5u3EwBJCYM9Y7A2V7MFu2mj7477CG3ZbNgRzPPn4HFU6qiTZgX5xr8iKGjdfYPLze1NU8qcywJjNged2dATgPpYY",
  "key28": "4xSkewEBqdGzM7p9iRbA19f7y8zqsYXrCLsyntpdVtWVxc4psYLt9hp6eawcggZ8taoakCrL3eiGPgDFPMZEYkbn",
  "key29": "44qHJs8rtKQQ1B4AZpXsv6jLV6W5VXFDuEX2BgGbKEtoHaRPdRMmvqtKzECk29MfGu3JKqGpSo2ZsqpDTG9hc9HD",
  "key30": "56siryncQ8Bq9EpSs3TerqADLZfiv9EqukXoqM7fk5FSFVAuKGo3hqkT7tFjSJubvYVrZXKkfswqCqxzTnBgB4Aj",
  "key31": "tfsF9Xa1sryqXHMvWW1jx3bmjqjZ1n19WHWo6KMy9Zp2zzSGymekJ7ZVk2poWtxZvuKS1qi6zws26jpvqrnAu8T",
  "key32": "585XU6QVjMG4eyhkLgmYxEdQoxEX8G4mptHMRqnq5T8PSLfU9Jba4wf1gRMvTSETkCobYCxfq5r2SJWy9wyws8BT",
  "key33": "2siYboCAbS1YLmymtNWKUAHeAoa37DCyeJHv3tECbeSPjJ5HJb1fKzwjU12JMo8hgHUMKygG9KDvWTu28JyQVFoA",
  "key34": "4HB2wYvVBv1NKvvTLzmffex9Rq4zEexJJd7L6x3xVxgVYpT3JPgirfh9kHS29nk5dFmydAbfaq1Jzigx8DUGZDq4",
  "key35": "31xgwrXfXYMgyBYkr3L8cbXXQgWwZNQ4TmwLdtPQdFUR7sq1AjJBKEnfo74emz2ta7kJPYjPg5GKco8b495tUv44",
  "key36": "3P1pEiw3H4Wd7uZ98kZEYFH9XgSt1uKfjZEQueE9qoakV7uGkY3dCR9i27PJhz4xbbhmd5A6M6Hd9kDd17Fm4w3B",
  "key37": "4ysCbnJHk9c8VsX28wCeEX26KdqgVFuLW6RgmVyynz8BKFza7naNdfo46h9o9BkJbjWmtnGFgPG3W5wCmsSf2Axs",
  "key38": "51LCMfKZZvpgLP6dEs55mL6i4KqoPsw9GoDnFysYG9BQpQTfDSYTm1Vf5WDFYdBkZH7v95i2buXTk3X7LfkuDatp",
  "key39": "9JtQgcsnEWQV8kCeencmVg23pCVxLJfNuk58qSbL8eHHNu5PRzjjyE3xesdQQHjaQdr8GxHCKbL6bu6im61fSMV",
  "key40": "2L5wNgSoSRAFbp4B4G5qT8BWyg1Eewo7356DSjerjYcraX3qJ4qpTaVn8K5LjRxWXjiyouFrLzkkfBbbEdzKSYER",
  "key41": "4ceoztw6ENc6no6U2n1XGdpwhhW8XxyqyDVbrYk754o5eN8JeVRRQqDa4zbMXgJCWVDWYub6REGxhKLAGB83VNm3"
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
