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
    "jFotL5SHK4gPWAJUbsvYfatMAYskFFJMpHBcueHenyrwghRRz37TuWXM11YEEceCGMJW1vRGrjL2wf828n4Mc4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoHgNbhFGQe44MXgnnuZg64ek2zEnHgBL11T8iven3b3ZrX1nRg1XGxd5uPPjiKfmV7LnGFvcMCC5hhZytqoUcb",
  "key1": "4ZC1PbLJq5hK8ALSaL2kNSzeQoCa6HgrR7SCLuGJaunrWpMTC3nZHJVBunQSbPuZvaNtQEKxGwP1VRw5DkMFyCVA",
  "key2": "qJcbMwcNDcencNm2G7gPnfUXaF2Azcb9b62fkdBkzXXLHDjXbJpoNRY59nNZBVs2gzvC51wn6FKhw7YYz7dAGkF",
  "key3": "5jKXLHoFEm26WV9SPLCQBwxbDQnXZRymtnjtKE7z8MoNpGEjgQjg9i43yzSJdeJHQoMGPDxEpKByAkdeyRLYnDvA",
  "key4": "25EHfDK2oyzhYBvi3WpLdMWJgrdSDRLVVyD7sR5VwKJvQNeX6VKnQjYUzw3fNh5uj36qkrPuA4GMk3VCumEeZ2Zi",
  "key5": "5usj9CagMWGnyFDWm8AZyzfW28XhtZBF7vytmK6LkXQpp7LrY9HsLNkpPgcZNEcB3YKTyMmFzTMZgt6kX96DYJHn",
  "key6": "38YJHEaLaHM8xLk2MJoxsQ1ddxeKby3biVpEF8YoWwPjR5yjpPetMrJPF7pbgWPP1GJmhgN1HnhVaMW84UkJoAti",
  "key7": "2ydEZjftEydMzUC38toPyPMAUdGoMUXTfwGzp3jXxvL4436L5RdDmuuDLnBWmJSaWg3gPfzTZp1rFjWFYTEtMtaQ",
  "key8": "47eKf4mAe4fuMx82SZawa3S1FdZzGVnthTCG5LcgDXpeL1HAMFQ1M3EqLk6ChexDP5DMfzBXqmEqbGMwaQNiniBY",
  "key9": "3L2dvWTFJSVc7qr5XQyLgvTcrjGttw7JCKoSxyYQrHJ6R2rKRKyRzKUvnuuLKGoRDZCJgURK79ddCTtpvwMFG2NJ",
  "key10": "2eacDygH55sehpt2oFASQkXWGFSYKzx6Hj9kTB4km6FM7JhndtL6kjS1v98CrgDEDQKRfpCFfK9aQr7KkbS5p67k",
  "key11": "nP5skhHiBofaSSiN3G5A6Bt3beTKpwE5Kh24XZXQT3szVFFECzBpVxbYwph9paj2yTDfXvuMsjrHmeYgvg2dgJn",
  "key12": "4MJf9frmwjoBvuewg87vtydGf9k6wXv9gUcXqSNmUErFhN8W7coPmP9ZC6UEhEmCKdz8puWpBfZYFnY3mTghyGaC",
  "key13": "5eEzPJWXAAmyzEDbcPy6zZwpcysvhTJc6BXNshu6cigjxvMyqF2xKu6t9WZn3tAyuEiLRovoFFDAZ95WcNk89ub3",
  "key14": "43ZLjDtdBMGzaheABdq5xBwH18dHEeYoVwGxmCCdcdrNzPJqrYEbdDDXoZXkJydYUe2VcmGpMz64Mw1nWV23Vm67",
  "key15": "FSqfCATH6psXMiD3CNjG6UesuFpg8yWQe1jECicW6o8wr5Qa3noGP5rLdniM5aNwDQufAVh9XKH2SdC3EdTcZPC",
  "key16": "4fbaGMsFwH8GBUZG9raYJsu6W9wKFFGsZzA53ZNhXsV6dUEdSgZAADapAbYhAghSz2pwuHkqgTYGt9TbS2KvXKwK",
  "key17": "347i6Hk8zvRBdkd5QBRwMAvxGsZZp7TK6sGt1yiG5aTMY3JG4TJrAmmtkPbF5DEYXMNPaHfPy2RMZVDkL1jVCnNJ",
  "key18": "3M161wjKQdUBiUuYbA5jrJ1mGYToTLs54tuNgQrDSexXwzCmAYjDaesuoNHwSLgYJTRRednXawvqVGDUrzuPBhCw",
  "key19": "5Yv3FfUdJKDyhgzcHuneGCRqK65s4NZDKeRmtVjdsnYix8tmGX72thStdbTeJmTymiN3SbAH83N3ioG4ch5WjVkA",
  "key20": "4J7Fn367bU4MWbNivbF4RogCPAfVVPZhT1xFnKtCtYTh53DW9iDdrmZ9VviVnQioZsMT3H7VrVkeyP44DeHdZEG8",
  "key21": "4ubi5xYcudUfx1YSayTe85t2iwLLzAjNhgQVfti6BrhjzV1D15RaTyf8dMvbtSyxLcx77uXXQ6GHhzKYJrUB5R9f",
  "key22": "5BAL4PtKDLXZWvNz4gjoJ6JsikNNJtGsUGUh5GePnUqiUEfJvdgtXt6pBJhNxjZwVZSYQ59KqqUFXweXz5peXXbo",
  "key23": "oBPTAhFKJ5RvSoULc14dKp6An1ekcAL5u1H2ify9634N2yVYBahfdKJTjzhMSa5YvJJ4EpJkk66RFyJNy7p6Sdn",
  "key24": "5LuxhGBbWbUvJDyRjRAUkkRpQiNHVp4bXm57v5diuud1evnu1XYS8SxDgFMMiEUfXhxSz54vgK7j7whrwMcswBRa",
  "key25": "61vQuoeMbfa8cS4wcoWPdeTNhxUeYyv6yPcGpUwgb8n1jguMRkqamB5rczwLNjw7g1cc65LECLkXVJYxBsng1mxC",
  "key26": "eQHtKmuRePTi9uQX5frsCUKvAdhe6zq2Lkc6yWhiWVjNw6tgtP5w2VK2LPAHq2EKn7z8wyJLeBJX4Qf5HupXotM"
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
