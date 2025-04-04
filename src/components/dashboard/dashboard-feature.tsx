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
    "m8jH2u9VdAdgJKowq1wCsvd8gJcRFfrPrpYKRBsPRYti6KrQN3Zvyt5DjGb2PLEpaYsY6f8B9YpkxmfM49yBtH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrEFtVohBvnrjbJ2ACKoARWi2TQVAuT6qbnxrm2pMxZR56vEhu5pgo5LQJ7CFvBfTCfDLAntX52fsP7UgtvrgDo",
  "key1": "2kqybZ1bTBjPueutjeenzDrXqD85pXZZCXFBripN42JWTiZRGvrdCtTED5GGWqR1BV1Q2UY3Nq11euyuTaH25XYQ",
  "key2": "3CRN8G36gggmRJncWbRUVhUaChGU9tsNCASAcj5xUqdiVKjfzz4a1nwcQWYkcJ8sVcN4n8LC4kAPc33MZQyoHydj",
  "key3": "4NsB5tN3JbWGNrep55MCUokDzitW1nsKm81xyThd6vrxKPXbNvxUqrcpcBSowtXqCMxz1rEANJAMtE5fubPgjGQM",
  "key4": "2debkT5ytYNAYX4444ggLKiyQ2CQqX7G6RpZxWcS3Ea9LYNXREWofnHhTUbYXXtUpQereaCuyCreeNWct3gQNghv",
  "key5": "5D8mEGR6UR77YD84DNJ2oJsKB3Dd6VNUihsqFKDM3aBMA1VGDshmvB7QRSWThXHCzG5RaxjPnS1hhXaNUNEgVE8E",
  "key6": "5Huu6LpsqRsHf1giPCD8dRkYnmBaiVrRKdFZ3N4yAeQsGudWLE7iDqDr2gANBitHiTvvbb3z2xdDrfJpu432wLtk",
  "key7": "23mLrmJ4xZfgHf32XT6Xi3WzRAUkRtZvL4a8bQcxU21TY3oFdgZMG3aB2ABr73xGnXDVoBuUVDscaR3k3BGYT8zZ",
  "key8": "5sCf9uS9hqyKy8RVFoGt7WC5WmBXqtMUpX3xrXazA3CYDzkqrpbQRpyChLxWCRieXciFTEyYo1E738Wg2kVL9NSk",
  "key9": "4h9Hq1ftCRyKbZAyDEbMcjMPaTE9RDZjbQJMBc9eY5enTK6q8aiqE1DjJJwAb4PaiKbJLhNWNURG2WPDXaajFzZM",
  "key10": "4VQSX2YzWje2eQV8eB9awkS6dfvGzwyG65ZYdBTHG5jNR7q8p5A9pGBB9XqP9731Cm5K71bPcB6JTNpuKPeDUjgG",
  "key11": "5j8KTaRR4edqAKCpQxJp4oKMiNrvQUiRfWUxDm3oeNA9nNC4er9S5BAyvPqF6D3cbdxdfZMLPvqMQjKbeu6CVXPc",
  "key12": "h8hrpineU6SPTGskjY6B6q67iFQSy6cPCj283ZMhzrbbPmAXDpPpomuduYgATVV4pekvetzyHVGT6vVz1aChJR2",
  "key13": "67mgLkR77DTohJ68Fotg9qKWNYyEaXMaG4KtoD5c4McS3ATQVb5wD6LzuBiHJENccRL81oJR4Fka17FD5suz3xQc",
  "key14": "2PExK55XvaJhKuS9HsKn87VBBjyChZLSWoqPhWtPeYQdCvyJERfUZ4BiapqgX8UiPaPuxzUUras7LnX97oCJyaYx",
  "key15": "3MhiabEtBzcz15dBckrSxKNWEP4pj7Gwid8R2CJYFJVevcrJLrECdRkWYoJBE3j4CCbjM8g3VH2RD54sSzCDY7Dx",
  "key16": "342QsiF65nUjpAg6xcsKAK41kXDkg7pMj9Ny3o55EMucwj7PzsD6SkXrtDrb62XJsDQY9SHq1wV3nRmhdGrqHGHP",
  "key17": "393htZs8ikZH3Ja57BN4DsTeoUP1CkEAA7c6U7jjoR4om7suVB3CdaRbMepULfuyTDfVkxrsWpwVDgEB82RB6KdX",
  "key18": "qhZhLQ8KVaNSFbUbBYDXZHBwN3p2kaB6kL7DcHbCPnfm5fcANtDWt3qVHQ4BY5XEm8wp8LU2zawEBrPCW3zbikQ",
  "key19": "5RWGaBpuyJTooUzRc7GPGZvmSmmRinCJcJE4GvhjD5QduFpZ54Hq3mjTQXsqm2PBzYVVTe96LiEB1ynQWwAX7viE",
  "key20": "5JqTPrr8CqnT86oVNfGwzGBMkk8VuFY8hhos131ct7Tfr9WzXqjELMiXgfke1QAhJLJxvAwmZwuiun34YNrQB4CE",
  "key21": "esVQBvgQ2Cp2GiezfjFimSQG3CkiYL51aKfxT9563qMyFBWrcunPbqazk98UwzmH5fNdwF1CXHF5YQRmhRCUHtR",
  "key22": "51zv3ze65CvPrTnj8sogdagZYaeAibTLasnfsHEXUuVQcP7VDeR7NQtZ6Xp9LhAsQrU5g8Hz7UryYdgsZEPhU6yu",
  "key23": "2K6hagN65KHoAGAbA7MnPBLYguaEUmpgZ1GLoqoJyCHZXWKxg86tPC1do6YBFwRLRXdaybfBtdSTzj7wQAvUTRp4",
  "key24": "2XJWWJN8xtsk1AYg5d5BBADne33jorjwbyJg3EXtgGNwWYPE1eNGTdxM7gmHrAQGrnKShbPL7jPF4xWmotnc5jcT",
  "key25": "3WFUYARQQSMfskq7YEtGGBrhJZU8oPatzJbaYCK32b1at9bNsjcroj647Vh2k2TJ4y9egAQqfkPNoNM8iPYagcBp",
  "key26": "3zsA8whkFgFDWDw8jWzZyi9XZYqov8WTZBZ99EgpyxxWVXeD74k63Y4UPrHEExjmHSDVbAZBsyqj2WCzSHqfhb5Q",
  "key27": "5B7idB91L93Fn6K2aTkwrCEttLZX8G5uVY75Mpjv9vLx2a8PTScxyPDit9J22SRHcUddqZAx9CADyunvk6UApBVm",
  "key28": "jVm44h1GxBZjajoh89GYwFYXQfnpXQZX5SdGfv6BbQx1BgZc996ppeUiny76V8xvsUNW7dzC8kNsNkcZYHjU8jU",
  "key29": "2h3ZjK5m5SMSJfLVWCtHjSKEZLvPhaZLU1toYzk5FRFTuvP2bqLn4yxvzBJ3bsWNcy1YU5fBiMwsTbFbFCpsMwW8",
  "key30": "5k2Ef4it99npMVY5ZqcHvcdRnNMuVZ6rc7ZPbHVuSYMhcfhgpZv7ycUr3NGnzozHrFhaDFfqSyYtqug2beYZF5G9",
  "key31": "38i8ZFyLoiTqeRyN2nvXdojdyf5LyVj6NzdnYnjkNUyRCaeRZEsoKrBLbMfCzUFGZBHa3qwEcPzFdmg8MtLBK4vm",
  "key32": "39nsipkd691pAvrUwnJNvrg42cUAQJ7NXNBy9QuryQXqLejUXfjuh4D2BwaHVW6VyUHJqjUPLdjaqMXhJXDDfCrd",
  "key33": "32ZcQDMFJyWkAAVzVrmr9eQGRHiHkdj5s3a2qeW2XbvaBMFqjompj86rc7EmXhDFAHScdGFwAd4hEZTbH13BKpiu",
  "key34": "9nWduYJWktxFXBA7YRWv7LVCsY8KTGSuQQrZqiTBi84UCbRBodoJdWVG98ku9xmmCBdPABMMRuRyNZqgGwwMSkU"
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
