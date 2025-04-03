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
    "57vLM8BR8L4J6vLHfvYtWTEv55hrmtNc2wUZYDLwq3SpcnxL2Wu6jDBtiiN8BgbVv4BDr4dXqV6ppZZvuSXNZ41o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJEm9s7cTxCZXZvJ9VLkoZTVH4JTqDp6VvJ58RtQECfjec45x9khvq2zZZZbjdqwoYQt5im8FvPCPMP5GKijEJr",
  "key1": "26D77FvoLBZhUFccvBJDeVk29saJYaEhfojrRZQsQ99zrxW75GRn9EQyFyxRT6BkdNhq6Wr3CND3S4XrJeZRLdAT",
  "key2": "5uXa1JdSnXwYmSLm7jzYyHpad5AQsfkFhHwSSAUUXon9Lh7MfUHjgrm1HzUYCMieERB9dbWG2aLtgUds9QSZ9aQx",
  "key3": "4HbHAsGa3uS9DnbznhfLt6vsuK9UADvp8oERz1FrXtkUowiS2XzjvTrLQqBUgZqYbaRkAg7MDyG7Z35Fg621FJ7z",
  "key4": "4YxxYzxVJKJ4gnoJvhhaTrfWLq6HbNywp7BnkxBncuZY1YbRP37q3vREVATP2ZXFvQemMKCpMk7BdbbVWYgPtUaP",
  "key5": "R3tdYEE5oHyEyWFEx218T6sj7JV8dLQm5QrAgEU2HvodPwnWrtW6kpmwFCcQFiDvKE7WUoUY1EwpSxVw8TiNNit",
  "key6": "4AoPC31MwcWGrDTre2a3Gf8ANmec3ixSMPLSXtdP2buFyaa2USHTdS9MNiFyjgBGJYjfRptuRdt2hEM1ffni3wW7",
  "key7": "3bJnA5dFemkXK8bDqyQAcREiGxSTsZJduhvYnv3UE42hMAwdKWRgr7hjBf8JLjWN2mpuZ6mRnHQK6dL7qu3EZV4b",
  "key8": "2SuRqMf1e8ANTkuBSDeDuc9RmsxQz7dhijp32AFF73zuofMRgtK7Jd3hpif75VAKwD4p1wNPW3gkAhT8YqGfUHfD",
  "key9": "39Xf6tBByRUEZdWYdiZa8XLGbiEkdHyJgxwh5cbbno7cn5jxQt7VM4vbqJWstpfzhbtFjX2y13GT82AarzKEHCGK",
  "key10": "2rJNpDZwT9tzv2YBSG9T79KHiGbPJMYQLxFNV84AU3YD78FdUPsLu9G3Uqc8TVbcrB3SHr1r8zWWyDBPCmHSw3u7",
  "key11": "2mKZFvppryJemUA4ErVg8tMSVJVP2dsiEmLW6Rv5Frb5SVpmzekfkW9o5KP6evS6wR2RgepBMQFMsZ3mzqFEdji9",
  "key12": "5QMABTH1hdsTHzan47WgXm7KGWSQUQKNZyssRfYtf9u6bnozjFRP2pcKvjov64nyzDRoSuWGqcK9UefHoNqvgfHs",
  "key13": "4uwDtdv5C9gJxNa7DbEbn3JzdB4E6X5EPCeV2qp5fkJW5vgduLpsmzTirChUSaz1PtPLnypzyu7byGHKWoEZcby6",
  "key14": "3r8hVFPABrcNae1VTKhXEAKBkz6cPSJWtReeAWzM36DXHomtTGQyerJFUxdAhr61KPSjKMxTGtdbKR15Aj3BDabr",
  "key15": "65Qp6GXhiAMHBAwit7NV7GadmqdRjeCgrt2ZPNHi4gipJak6QDZ9cokRkmc5PWTGbhEWyWmerJpZa5C9AJgavtfk",
  "key16": "3vA5bFUDgG544H3JSxRsJKdAnyYWQB3yACbdwQLuhYdpL7komAnq54r4zNBiMUtGXNLqtsKeqG8L2HpB5Xd7mGVj",
  "key17": "5z8WfdnGdkRga9UufwfaMMedGAFnvKsJoVLAQTuShCu14bd7cQkPrtRoYj6Gt7XSNRVQxhMCk4s7psdsdLgZurXy",
  "key18": "4u1hYhU9qy363XARGfxJmtMQPaGSD6Vve1ydzSx2U3iJSoNir7nSkMzcp9YkvBrTD7hi8KZwQF5TNyS2Bc9LjASc",
  "key19": "5MFNk7eYTVzW2XYe2zSNY5MdTo65xnC2raZKaHg45NunKcwQ77gu5od7Fh7pudaQDVya4ppCqMMVeSiH2dE2eXUE",
  "key20": "3pCJVsfv9dhWwVchfR7FkBH5mHYrwLQYcAh2HXUiq2j8KZs5SDXD2vDpigobpWPaA8eABX44Yf2w8DBYp5kezWJT",
  "key21": "XkEWmq1sShgPeMvtCbb4STJvXizwZnU6XVBKZxfAUqtNvxU4vZMiiS2qCG3xJa2RSLGQp4wbeVUUmbo9NCikLNo",
  "key22": "4XCouEoDeCqYa9W6aTsoCYH9XWU5DwY4HHFvVas6U58pKP6uVWB2CCR9MVBhkpnr22yAa9iF6kqJfkQYCeZMEiPa",
  "key23": "4d2CpfieQza6k8akCP367SSatW27NNMV9YFocbyzhL3ZpMdqA5HxvXkgRzPq6oT5xmxsk7xJtLN2T6bPFYbMMZ3s",
  "key24": "5NegbAw7Vth6gZjBfB8KGtDM3M8EfpY7nhc4G9bDvk28g4EJksB5irVBwrhY3UxSJSWwjtHSAvPCK9SyrZHgW3tG",
  "key25": "2uS1seB3iVE4Pm6LR8N1GW9FCq8xmSL7xED3P2TaPaiAND1RbHQwS5YZLV35ifiYT2EW9x5whwbbfyC3QP28btSx",
  "key26": "5mWMRFzt5aQDjJ8sejd6Uhaf7f5To3E4Drj8Q93dDVn86QGkfwjkMnf11o4h22yXqWZdo9nXMrrTLtv7jNtDdQ37",
  "key27": "3BavpLwqav4t3xGSSkhNCeRoZMaELX2Bqv5295vUiXoFSaiUetvQhe1Yx2uR5qyv3nXJ6zQAYXZ7PKMFmNE3grrd",
  "key28": "DETVguMZMFBdEqMGr5Wrj8GPgcGRjzCRjKWjoGCNNkfB5QaZoGskSjdXhwJ5MB3WbPL14Gk6cLrjX37acYWMe8J",
  "key29": "uNZNWnpRV1AT8ymhLeA5YGuHMAgJF5S1ugfi3kQSSJvHX7tFhcYe2FUhhDuer4Gy8ZUMmV4CJHfRqntXfco5XNV",
  "key30": "4VmMfarkuTJh4biYvCNsnf5VuYKJs7JEguz2xUeD57eABwaDMEJDqNspv98QiKQXrxZpDwHQqPY8ZJX8eEY2To5j",
  "key31": "5M7FaAka4MPxCdnDSEYpw7hcSSXKFWAK6Yv9tjrcwL1PGFW83i5ZHhs1cHJZNdXmMMj1PHG9mKmhojT51GC54cNo"
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
