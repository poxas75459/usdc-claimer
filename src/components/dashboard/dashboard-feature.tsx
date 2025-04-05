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
    "3LNgAJNtNwHqb5NHaWYDbdxtcChz9suAcaYdqQeKRkXZjE9V718XbyhAWQUWeU7ieZK5PUbFWYxiNdysDxcrn6du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UX1rEHwgZtcPWdtdpd1GbniPuvpNyzQHNo9tU3mpj1z6WzjvyvJd6H2E75e1dVmUjbCEjU2Qo7scxeayk6w3P9Y",
  "key1": "2Q6bYo5pzkqJuAbEFTkd2ZCbWSsDPDpHsmgeRcyAZoEXbsbkBi7Hv59awXScNztbbpW2w6C7Xk9hpgvkMexAzQhR",
  "key2": "2RxPx3Ju8YFpTeAUtFhCAAnRXZCPAjX53ZDZ3zN2dNyUTYfsBugkmpkgW2kaTRHKv8ZBeCxtzF5t7RAMG8SBny4E",
  "key3": "3Eed66p1Dxfxs77c2NqzsLRfPp5ooCL74NxMnQkoMoJUCavbjNeduZbJoxDS41b3aRJsFbMaPbYfZo2tFYUub3NZ",
  "key4": "5ruJ8cvRSXcx6X1JXPugjs7dGBzQPmDiaHS6XeP1QWmfayDu8nfdvy9ubNpiZxRiXAyUimofzWvSWc9KmxrPZVKc",
  "key5": "59jxTdo3w7MaJSkSoH7cWgcr67h9KqYCBesY5NbVZj6RN9edZizE93ZKYxY3jxqx4KhVYjUf1C8Jyqmxn8w5Jd4p",
  "key6": "45T3c98pq979jjZ7ARW4JSY2oG29t9mfJnehpyZZtjMjU6Stx62Zk6HRXpyLPL2qTutKkRALCdxnjGQBGAcK429k",
  "key7": "53iFDwh22XDC38qmHMXkMz4GfHs4AR25ZtGoTFGNpeRqwGj2478dYVPo3KpruFMeJj4ePhfUHeSqiYQ9fRJgkmNc",
  "key8": "3b7zNx4Hp7L3gELhvMAF3Jn8WtCjRQt4TME22SbWhqFyPKqxFLwsoNoCjexNSMHMPXn6uYjfybAtMUMvXMugswz9",
  "key9": "3wy5MjtVoYEMrkd2zAVtgKP5VaPGZHN68SbMoGKqT24594UGxW992zW2sVSKDrQjn69xSNLr728iA3D6LyjpJGwE",
  "key10": "5AHCnqyq2VQWPKsnToEpRiWNERxgmgungRXnU7ZwgfqCM4CHbC1p9EAjmqeE3V9uJ3LxfjmJUe26JUSFSCjBNyHV",
  "key11": "4JmtHAKqa6iiQNMPoN2q89ct1Mv5A6EkhcqAkSLLyK5k8jKBEgcKe8MjU6cu3fjErxpZpY8LNdi8mB4XJZjXD3HY",
  "key12": "4VHfMuxAEfpgq7CfHHaEuarbxWRFrJtNKwzwDqwRBbzze3XYLjGtHmD71BY7hqU41WsgxxzSpxNhqKAKq8DzJV63",
  "key13": "2wbsJrX2XSwZoFTMYGu3Go9SWFioGHGe2Sh4zxw1RyLbCpF9oWTkqTA5rdY9oM6qzhtiSKpMee5Ej9R1vJFTAyxe",
  "key14": "3syDKePd229bWRF3qFNshJGWJXb7ueM3kTh6ywNaEW2hM8Bb8HYrSn6pPWdE4wq9NN4Riq4wBfX42fFwjrYa1Xog",
  "key15": "3nWVQrGVc59Rhnd6bkQeKjfRZhg2JWa4HN2g4dZT9pEyUrCKp3gTLaC77D8YCW2AHzYtSPDbduWmhsPBdifxaMhJ",
  "key16": "4X13L5K9hu21jCctB7RXLofVnTgFe6yeaNmAsZpny11bmhzPYDbiSQJwkSFh2QA2x3B7GzE28JmBGrzZC5FjtPvC",
  "key17": "5qde2Ty5xfUkvus4jWPucmBLMVV9QuHuXAQcPaSFMjar97JUrXNtEueMKxr2P9KcNfGtaJuMTFvLCckmGR5Npk2J",
  "key18": "4w6RPhtepCc7dLfx3R6VsCCBxEgouWHB2McRE7y922XESjdUq2xfiXb4Du2weXjasbaPSk96oXjZXVbwKGiREHVs",
  "key19": "3QKtAzo3zxdTjySdd1MG9sT5pHfHGh9EVb2J6oqYB1eqUSKzYhu83pQZjE6PfhTijf1rbWoN8gUqJDY9Li5xrXXr",
  "key20": "2uYBN1ptC1nhv8XC9fDPXFCMpD7WHvgoYSbNNcj5eyVHhB5nqy7DYzQA9VNyKK3rWyz7mTQtVH8yLnmbShUbAJDQ",
  "key21": "3MLNbm5XaeSuuXt78YyLUVDgAon3Wop3fP1NHVwLVd93opLjqsVJRoZeXLeL8F1qD68aMx51DFt2poG1nL71y1eG",
  "key22": "HriVR5XKe8VXZZJWhTrL53TsZv1Mtf2mA5bNdA2kmg8gf22apQeZxujpQdmFppSFyaRYCxidS3hsWUKnnyc9XFD",
  "key23": "2Ef27yh5HUAxkZYMJwyYxHLnkhWzxUR7TN8mKibprw4zQt3TCV1b6wjjckwoSkoaUgFSodLw8aDPrgzsPR48cp7b",
  "key24": "5FLxh7cWAjVdYQTeHZQuedVjurVjbi4RcBSzVzpZJFbCQxNL6yu7bt7GR53Hdi2hnKoVJqHBqQKYeEih82v1YZo8",
  "key25": "2KDJsgMux9CsHZepnpQFFF6wkWY8ScdGL47AdAfenVUjRujfZeCWVzqTjkoXHkTQ1QrgfxSzvnbUAbQ9bc6qzq8p",
  "key26": "3T7qeL9rFkfa3CuwE2maXFkvwSQZ9zNgrqN7CuFG2gJ8C4FXDZJbFi98R78c3wxS5pGbwBNJ5yKZuzBfcd3tX8H7",
  "key27": "5k1aRSJ5SkJszxzH1MKcwpb6FQdLkDy8HkwXdzvNE2RfQgkRqT9WVqa5DRonZ3w4PPsAXjNpMcaadw5Hyeo7n2MT",
  "key28": "3B6oqdAoguhaWAuDNbfUJXShz17nHBtyvugeVfDD3wfH9PnHaGpriP5WBMD6ev3kmD1HCYAWQfQppTRb2Kv8hLws",
  "key29": "WGnttbDxn3adzYGd8qkfjqmdDj6QCKEJwjjQJKC9DRZaExPJcvET9Loud9yD5yvRigadNjaZDTohqp85ibTrq9V",
  "key30": "eKrPTpxaoACBfXTozR31Va5WC8fMb82LinMLqpjYVUPJcFDdo2MJQ62P1StfQrEd7oy2Xz4skCqKk9TMLJK2J59",
  "key31": "6pHbhPZ5SAhCKhsFVCg3earNYFTix22TBge9eszYRcSxb7krVNiBky2EWmCcVNLQheWwGm1iJR2Gq8zEjEKfPBF"
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
