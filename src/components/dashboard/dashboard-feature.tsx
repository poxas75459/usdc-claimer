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
    "5Xo2biTUqdENCdeUi5surzNJpbzXip9kkoZ762a13KYuVvnYWctTuBdwAnotmY8ShV3YEspxQ67oU5axrVVQxMJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqZNYaGcd5eMVYV7AEMqmeuLiTtWmTSKv8YX8LyS4iPoXHVsiFcEJGjchFLBNrzYWL4a5iHCANc4GvPy9aK4AnE",
  "key1": "3Pu7yKJKnKQebs3BSgUCZaRv9XH9Mzucxoe1Hz4bfT6BSw4qeZzGzvWPFqDuwqz8UhkgXeQFnAzAm7TmjSVtaWmP",
  "key2": "3AyuEyA1TC151wB53YyfGSm8RoV3hMz6ENTs9VA9qD1zCV68Z8gA2XByYSwdrHMjgoXoWANUcTA55uzRSB1y73xg",
  "key3": "3Lk3ZGJKQR7jat9ucyWYcGbrCDvKmPd1gJMxDLPNRT6uWToj7o8AuRZjKzQ7TfdkmDgnt4BDGRfRjeRRobUkwpiF",
  "key4": "iVCP7GVK5tM8qscAs2TLLmB9Jp378iM6VBH3P2CakrgTsk2Bfc8EUpY1oBTfcEcBzjp132gvEx3WWEvkQZ7qXw9",
  "key5": "Z179u9L328GbD5XCku5mPqDhszzv3wdwdri8hkXDpehvwCayQYcdnrD3VTfkwCCWKQAqXftzFBVziQfgw5Q8osX",
  "key6": "2H9ecgvaWERxCJ4nuWPAnhy37PDNbPnyKo9XsdWQ6hvzbtGTMkS7RmMKiPwiGDrjJSEJkC5Hf1HBMvnMbfxv9aKk",
  "key7": "4iTfKbfMGUAtJiucvpg4EaRUET5xZbVJJa3jZd2hciMvFpUDrHdjCZ5bkVLGjUGoS5NNdLssBEyXTDBiSHh6fh6c",
  "key8": "4jHEgBFTcVEQSDv1sJ4T9g2G5qEB53Px7t6rutvo5HgP6V7FJU9VhgZjof5ZSf55oU39wUPxvQTLLHtxgYifiHoB",
  "key9": "5fLGXmjqTyEHF3Z6GL4UnbvTyELxUr1qGc6ieVXHd36nHkmFJi9Wx1nV5XCSrn8KWbXS7nnhnwbA4qwg7vRdLmYi",
  "key10": "51w5zCzJfNHibHs2YqdLiuP9UJqATW9NQFCL3gpG5qBUSXz9Z6jrBFyo3GzAXcbcvySvrRUzMPsHriaZswyJjzeC",
  "key11": "4GTHHBAu2W9rL1ktY54Cx9qVJfJ24zEVDW2BADo5YJHYrd9R6gUj1sEvxBKTiSRxtBuULTBRYGN76hQAxASw4237",
  "key12": "628wGamKKadPzAMvVxpxh2kGyJrN8ADKwtC8aFPX8CXAF53222kkn9Sm8UxSyuLbJwkEgT8zbCvyxpmy3GNXx8PW",
  "key13": "45HRYrFLqpF8gruMt7eqQiRK81qnpYgpJcLc8nqhpaYjmNi1gNVNrTvZPyYfxBoug6raYi46XmYbqUXkKvP4uRp9",
  "key14": "2mQWF4jYQesQimcVSJdPFKFup5jdN1GqqNxB7zie99iq5oHayVgHy7ckbjEcA1xESduuwyFBt2uYGPoJXK4MSTeU",
  "key15": "4iXjndpN5rymBL3zsWHHFqsRo19dtff4PByr6UtCP8Sxs9iHLcuNbNYiNDQ4YqGfwtC1e1aXhU2DYKSU88bFvmZe",
  "key16": "4wogvzxgQh7RauGWtxpqtMauxuu7E5J9aq3KPq9X6v3taSo2nmgChwPDYEo44BwDhVVGHbjD6y435zhPhFn1ZTok",
  "key17": "5beiU2FVdWFdvU9cgCy6SNypKUCvDm2bQm89VcV7dz4QTDm5QxaCepsomFeJ8eFA3aiKkzfwSYjsX9w8GFFVHq7v",
  "key18": "4sVmzNSkfeWaNWMLsmwkSq5YnkXQ2WpFtspi73CrrxXq3rfktsjoXmxLLvQ8H2QeiL2age9W4D769XJrUP42wpgN",
  "key19": "2D4xTJr3CZhf8yH54GV8cDnpExAzCbkZTHrkj1k6hc2djGf8A4EFATxnGoxW38tjeWXzqhfbBmvgX7Hh8iVW2SHz",
  "key20": "od5y4kk357tHYs6Bo25SQFBZG96NTKt5pRVt2c7VqDNcAgqqz5kKrVQfFu16HfsHvXUSKHYKCMCz6cmAnfFNHHy",
  "key21": "bJ6s8jM2EWjA2RqALA4eMijzLWXUgFVsUAcpJEJDhe3v8xekiwCE8P1PYzeReKPjy6KZJgceHwgQoDkhsw7Kq7o",
  "key22": "5MVhY4Hy2PvFB1oQi1MD3vHJcsq1vdvBfUytHgD3fWMMo8CQ5krPS3sfgzeTBMZqwJZ6TUzXvCkDa9qcypGhFZ3p",
  "key23": "3nXVftxV4Wg1DSpZBbHVvmjL1q1UL69N81YCnG8A6nju43i5AwCtwwJQHhSForXNNiAZStJFEyEgjGSxkHn8ksKF",
  "key24": "2tWwu6mgKEfQwCpEd47nY7QLiBn4QtB3tvNQWtogJMvvRS23i8RYpKYPMK2fwEDJuybC6UVDkM7RQB8WwNkTLDGV",
  "key25": "5ase4HearApdw1k84x6rANNuk8LXwdGXguD4zhf436iiuESXSNWUaD4HjW2SSAZzvxi6BZDc6bLgyHkWi8BAFxMC",
  "key26": "3BKENDb4DhUPjVs8yjCFAzLHTPJqTDLqRcZ2NzP8cjarh88zRg6iGpDvqUBkH26amp3NCT6jcnUW6y5ogT3vJzK6",
  "key27": "YJEv99u2FC6QKajPiD4HELWekmXoVpotwz8neG3QZKdsXLrPLLgSA9SNAUQtXchsiV2rXJERanipF52rw4BnQZU",
  "key28": "3eYdHGLeJY5S6oJUME7WYXyZRfqBRNfM7TgyRrzVXMfuBesSUdtSfz7JkBR6iBjqB7HGxeonBXPFA8cQUG6xhmDu",
  "key29": "4DMZDWtwPmjsCbHrbeP1hhZrbkffAhoqoEx7KCqJSuKXtzEykDNDBxFt3EtDa2rnqbpzL3yoHvRn29UYkWVBGZD2"
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
