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
    "raAKJo4NZ5MnmjJMwuDeakrNsHY3rM5Jbi5LTmK5uc3CrktN7bFFrnJgZ9JX9SpC8KSTYU8rDoWE9AjoSE2bEZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmitaaTAjQzJtcn8i8rWpbvBqS26B9SR1r7KD49HibNL4rRbH4ZmgSqJiJkRW9A4puzaY2MmMeQixVmT2Z9sJ1r",
  "key1": "5EAQUVaiHACCutSZv6stFCdiPvUisRHMCpJiQT42PKAhim5KCoYj6m5yZUhm2pjqjHRMqE8i5iZrkSv3Mer25CVe",
  "key2": "2U7vNGTTXtsKSnCu9UyfWJiDztcNKkNeKAGmz9XFj47KnUc7jWQZ1V2JVaEajw9UsgGAKTSN7FmwEXowEgSp3wy8",
  "key3": "vWcz95M2ESGbVXWkiuVtvodtmtv5v9L8KDRX3uFiJUvL3VtVSzJqMHmUX8dnFwVHBnnjcFA7R7y6xHszPJ54H3G",
  "key4": "559bdFQGKHcyB4tHbAC9XZwWAVW1UN7it8BkrT1pj3PojhpRfr4cfqhuJrJYwZFeiPiTXQJrHQUndAeVCiGxRMCS",
  "key5": "3yYF7s4ZMKMmaqsRyxA6i1VqgGMPFN5Khg63o9CZbFYnkktEZUoGCpvyQHCf34b1FuJ6y9nhwmt16FT5ar4fE5er",
  "key6": "5MJLzGoZMsLiLugxpYhr2ezQQRPWsbz7fWsMbj2mYaVuQLrQke9jSjnyV2M7Q2Av2U5xhp2vUcvqjg9gfN9aYpE8",
  "key7": "4KBCyD2K52eLVUFoiT9QENfuDtqwCPqJiDC3W4sADPPxSTCSLqc12ZSgQWyNYSo2GSUy7HAvPNgy8xSN3MG1nwoD",
  "key8": "Eyt32Kv2tTQPuNsjXCkDQuFzu8WSKyTxTUSUmqsKQsBizDyjwbv6Zsq2RAdF3zyuejkduopB3J3jUXg59JURnE4",
  "key9": "2CJdf2Gc7A5AjSSgYWC8sDY5Snfuk4bUUkEYFYWgSjtAY8B8KaYXeuGZgmaVF999jsAd8nH9VkpGxDG87Fd1yfLX",
  "key10": "8dSvPgBFTiBYD8s783wXBxdm9VN3gw5nUZ8La1vxNYaP7JPKqk8GmALG2cVkxdBh9ftsW3AvjrrWT8nuosgiafb",
  "key11": "3DAbjVtNzH8nwU1AXNteUA2pUfV1Bt78CELXB999Do7FA3mUeD1GdyNSEBmRTQofGTLYmHU2NVigoksWgSPZ52D4",
  "key12": "LM7uJwPm8kDJ3ZgmrztWKyhS1KrkPgoU9sBbmjHw8Db9pozwapbVmYsXrQ8ACp9GMyMpmVK4wPQUqo8eYt2kgA4",
  "key13": "4pqyhRixrav86d7xLDKYx86R9aXq7tFoyQpvfDDjZrqF5Ug5KuSmyakr3CE4EQrJRdYTjz2QPqJnQ9d8qpU39ziN",
  "key14": "4gCpCUXGaAm25BTMMbLNTs5P27dPLh1SAaugfSQTWxXSuMgz8418AfBJEREoKFRTP1cSuUvicEKBfcKxmkyeRq5w",
  "key15": "3cD1zaMURcbPypFfhEyp413tQX9pg2yosQM4sDkguk4kevSah7MmAgb258pmMWeyxLmZwdbfX5WGsKbAXmstKUFD",
  "key16": "5V8uxGg4mjbDkkGgMsv1EaQL36dZm7mLx1bjm3SKSLyzv7FcDCT2A3qg3GLm6DuTbrLXCBzqmgysLRdGDyDwXVzJ",
  "key17": "28JYj1P5qbbWTbfnKdrdTuedUXNKa482acbGBzXFiXUrmcJAwm8jZVBAEDZYocZ5vGGqJL7c1qtKCsgqVGnXkJXF",
  "key18": "4YMZYNiVZBwcoQYHtwGF9SwvYBZBRfCDvcka5ffSGuuJ8ZCSRv2rZsH3guLheWPR28oUxtvdYz28gtSmKeEpg4hn",
  "key19": "ATSV3JGXzftQxy427bfQYd5AjuvG2C5NHBPv2RJ6UBrMEc6L6AkWWargTC3y2c4aF4ZRCFwT3XfMFxCXd4Afq16",
  "key20": "4C8mm71hQKbdwcaxvrHKRUcNjhZqxRtKEoYteQzEDT9HqnyZM38fAQBkmMmnaw73asBoYxkhW3tSGjEnhDLLQMD6",
  "key21": "3wCNafdBEkz2qraJihuS9jB7RFeWq6Cu6XbwifuMcV8qYgiGGJ1Kw1iZzLoZZEdR9fv8MGPkkExxg88KzmtnDcy1",
  "key22": "5gXqatdJ3ZZUndJ8YtH8sGQ7SiUTuoj2D5bAbWx8Cbx33go6YEBWAweEkbLNHL5bwrpkSx2xBY1GWZsUvJrQFHUg",
  "key23": "25csHmCqV5PfQJ1nY2ycNqLTGmmJbvpnW8pyZfDzYFSTxCa2ncfcFZc2CqUuwenT9bkVFnhLzeSJgcCMArQJ1D4x",
  "key24": "3wUW79yYLpzpaD36u4JiAAruRqxajxtD3es6kDiWWcvSExc4QMcb9sYbdep6GB8D3F1zSF824S1PH7ogEnBb8SYG",
  "key25": "39vUXf6wW2ibsLt7N9x3QUoAUnFrVD2oThJr8yeMbv2VZ6Qk4ehBRixL1wqoWmM59Hg2ujyh18qFT65sE6nYuaSk",
  "key26": "3QmQJmZA2r7D99XQtTMZF16JSJhjXoQAeCsBwp74NDiai2cQ9sX24E4sxskGEsm3uTSmZcUr5ZdxjhxYd9A1zv8L"
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
