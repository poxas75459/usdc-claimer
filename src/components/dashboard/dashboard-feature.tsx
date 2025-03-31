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
    "TUPjhULqHdnnyycJFxQeWJ1w1ttfhvceaFGsKNqkMPWV79JFajpwQozMCSbGdyYdyufsLPQ1m1T5PwaD51iXK1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39k5a1vPWKMBskqb8fRKbmYxhnmuxVKqNthhjmHkLe4Noe2C9BAoop7EKhKgUc3u6gEfhFZRdJgiE25ejVL9BxTG",
  "key1": "pJ4bHR5jVA4xjJyKg5V73UWLWFHRU2E7XYdzxH92ccGc5N2G8KWsYWv2agyt2i5iG88qXbKCTGx1bapmp5jWf7V",
  "key2": "3Xs48s7XcMxstSvAEnU26BpdZ3eQqMyhWg5zZVSe5EfLUByJd6qC2E5MkQ5agf1ryrUG3AAdhwCYUiLXCorqProB",
  "key3": "vaE8borx8KHGZktwQ9hRkHsAwE85PeTmezHCbyvRws9ryVCnWV7Zju876maeAaECStCuMVAkZ9cTorASBqCWwba",
  "key4": "3PWkqKJinQTzSq7GhWgJ6tNRUUJNKAMMY8KQgR5So3p8JUUkJdtk4uBjZX9B5mKUWJuUvE6VseLnnzUaNCBZukdA",
  "key5": "4y2Npt66dLEL9KkP2DX4tcu7Gw7UijNtm52mgnEm9yTr1fdrv9E7KPeibaCuYhoFgVJvUrzTWebWob7Cv8ffBXAq",
  "key6": "2bHJreBATQNajJchCHVmhLiaYud3Qw4oypL6HAixXoRX536z8q7NtE8b5W1UXJ7JbMgMPPMAhyjPeMM7mjdfEieK",
  "key7": "3H9Fsjtefbx8FfHRNr5q5TDgNrvf6GxYMJsG5rhxXYu84PsFsMHP6EtMAiXZzo3cudL92FkQG9erPckyBCzRcA2j",
  "key8": "4JyL1pnshZHX9KvFh4HvGZZWa2SNJMu4vRgXJt9bz8Qt5dnC475vfpLZHs4a71QDGh5SGVD39NtRMrjBqEvUcWXz",
  "key9": "25eWiALkkYeygSRCit5AvaG2W3G7J3TboVBzXjAi5PY36CR6U7zxKRUddHdccA2bPMLPzV3fb4U1mLAXKeBm5uGJ",
  "key10": "5UEWQBKKwhbCsw2HuhuNw1bLuV9CguL88Zdmzx3RJNr2z3sueSWGu1X2rwTyfUbBhSMFiGJyRw9WYraoHsUDMwcr",
  "key11": "4b5Jv3R1wjro7Z7jCjcaL4qiVuNzoCBekVsP15qwkkDHf2PzKPxVtqrdsYiEMe7uU6PcKf5GJCQHDgYhSFoFpTZZ",
  "key12": "2PWFtE1pz7ssmiFYUkFG6CQHFyiujLXaYCFnuf9K72C7D3LeLGKFSNp73Lcm7zA2PVDDaucuwy7w9h7qBunHcudx",
  "key13": "NaQGfcx1Qd3BQjnbKPtCsJtnc1Tm5AQgoTJ8xNrMBDm6rfLktqBo9THKvR6kAdoN1W5o42emm4kK323NnbQGBiU",
  "key14": "3Fgbuy4dwwYMceR58JG362LD2FSYgvHPZ1fgbjNhRiGS1bUvVji3BR2QjAvCzFN6UFgg4jS7Cpmn3bf2FyLDH4C5",
  "key15": "3faFvKuJ6L3bot7Tn8b1VCFDpvpvEWppWeUeGM9HmaSemVKv1TVqjW2t73LXuLpvkC1UEdpAVkFNEHwQncGwUSVb",
  "key16": "4PtUYQrREJkz2dcWW7uEL8xLAoZjKGFnDr5W8RCcMur61v5tFJ9cj8vr9GZC59zwwLYDuKvEWxiLTtmHbV1rsVK3",
  "key17": "54eebWuJdooD3NF7oafH41Cs6Sqx8AcHQ863xmySmycvDki5k3vjmMBEq76oCgVBkCZN3SYbj31apCYVmiApePkB",
  "key18": "2TwtymtMp48CkJw8F3kY2ehDitaknkfqzCDuC5mwwMMYV4DqhcV4HRfy7wf4Du7FstXNKu9kivWbct9tVnqz4ScK",
  "key19": "4LBdBEQHNaHhy9CYia8XrWLuePtqipkzu5YHpS39j8VkcdbvkYXR4ZmnpMkfWGj3iBgDU7daDh7snjjJrpBSWPWC",
  "key20": "452Pg321xuqmbSYAw69E1kmYK8FdXEPeGcZh7ycHJ6NKWt8dzqERJM9M4HM3hSn7ESyR6L8U4VtDpTCcrXe2j3Vq",
  "key21": "59WUQkGkxJQLdjwH88mQMsvrGyYUyR1Qss2qs9hpwVNBjv1paxebJDKTJ3U6V7ehJv5xALp2RiZwvs88QzLcJeJQ",
  "key22": "5X8e7Vyfz2dPZVXMLrcmumHNfdrU4FdbZ9kWv3dgRr2qp1tT6z932fjHh1nbBVEUan6eAC8BQH9qbYJZPKaKvJY2",
  "key23": "dKZjNXJshGfn72trYv7UT1vLKJhSd4uo3ZSusmNW1H7z4rrY3rRFaXTPLfvsVzzeBdmvm7x5JQL4qzd5RQXuhhF",
  "key24": "54GUSup1U79sv87DUq4WVVC3WRN1Fb61sHhyiBoP9LFMnfiCHfFBQqCh5SeqpdUjdoA4ghoSaJyfTUehcFDR27bW",
  "key25": "3mJLC36iWFbssn6PnkZuMAEkMY2GsxAyBTPypHgPqdBLUgL4be3Xn3idzLKMrL7MPWkfrLutgPrecL4ynLDXkAnG",
  "key26": "1RZNqfh3ndXix3NU8qBRpfQ6Tz3WWzbw3ddWe4ZFoXiaig9VEDzZb6Aoj5RuT9dez7EGzaKm6zJ2VNhTpBc8sK4",
  "key27": "3y6Tzh22tmwLG4DQzNKzc413MidyqjLqB5QYzS2WamPNEWLipvWjSxi9AbetGdpy9B1hpLckprQqF3LqfMYkzWYc",
  "key28": "2Gi7Y7YEfMXStUbxMGAqcKiq5rtPpscW82YxCK9wSKUpz5rVj5onvhN3RjUmzYB1zMVs4Cd6HrTsNxgtrK8MSxT",
  "key29": "3gxeVoiu8d8JFPGfsEbxzRPNaknNGsGxmUMTUk3vbo6GLrY38GRrBBLKvfbCKTtNWjuGT1L2cDKZsoGoiJ9q4mTh",
  "key30": "4ymmcA5gmbpDx7SjseGhVEN4MpojxSP4kVYJb1jL6YkwboBKwquvBnZ7CcYjexyR72fJFwUZEyWf1Rgby77T6YgL",
  "key31": "22QTJ4KS7eLdmt4CNQdaTxrVzXdUxSvGuyAdtHEgFKG5t5sv6fUsTEihkfptNk7T1ACbEDiepFU1UAbazN33Tbcr",
  "key32": "2kErWgoT6bN3anNJ7zJqSYUptvwoPkRkwiLjviiFZeTXs9Fg46XBAdyoJiTQBru3eABzk84sHeLrQFMXJE16AJYJ",
  "key33": "3pzDZ7t33S4n1myFzihKcZnBSzEe8ujGhpu5TRRP2kPFMqUWsKsTvUDbpRuRNbLCuMi22FcNZjEDATD7un8b38dd",
  "key34": "4VrRgSty4KHZ8kFRHZykBm17WhNmaAZujzC5pMt23XGgWmTPs7h2HE6yW62NpjbCiNyRC2K6vrFyG7zP8DEbKEqp"
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
