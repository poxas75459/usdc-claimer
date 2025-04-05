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
    "Q2XBrBrVvvP6CH9Q2FcazFqd3or45nGRPiJVgQVjESGkFwijE2saCrwnLv6958cJzwjBgEfFRVTALQjG5gAuMmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VyR5uSvLwV9yApzAyETJUL8EyVkQzZkWrLv2jj8Kt8RCPQXU58J8d13S3reYksrRVekn88ppd2u6BhB68CJs8Fr",
  "key1": "FWt9oLDyQWHwFDDJejURpYwRC4c5fWC3BYq9BJtUgavZoHeG5Pv2Mnq8Lwpjrp1dfg67RQF3tmjGp8pznJDNmeo",
  "key2": "5MZ3m3NBUPQsJGdQcvfNSPvwjC8tZVQK3a8GNS6kUWq1ZjkpvQqMwaGUnrhQBiB2kaUYLqCVz9QaBoyEuq6xomt",
  "key3": "2Yge3c9RndVTnGqGcg1SNmT66hCrNQui4wyrSWATRZUWoGeN5EB5uYtihSUmRM6WaybGekFLn66YzKQMapB5ug3z",
  "key4": "Y4eEwYzzvViwZVd25sT5GQnwheZkzy9gpunXEjKV8xTQ2KypNC5Zto2Dc3rrHW9saaaz8GqYR954epFWQP2zkPJ",
  "key5": "3vs8QTtgvFSNkHXfcW5djdPYD1pufnJP4Vp4wVxG1Nu72Y293NkbuoLgfdNTCvXMmagyQzzdSXxqiKbu8zj3Rzh8",
  "key6": "29q8sA8NCNHVLyU49BAqJMvPUU428b2c5aUTuPvNvmRF3h82FMg3gHE1oKw9srreATjBwPVhWhTwtSGEegUTsDkc",
  "key7": "3hxjQZeAs4rvphFiGu1ByTQK3LbeifyAW9MpgU1SMq52P3HL5muoKDELe4HSxd8y72AoAkemUp4b3G7FokUxd5zk",
  "key8": "4uDdFHYgQqC27hByMKvCnabVqiRAWGA4631ZZm2uXhsyqcUeo5RD1BzoW6zGPeLuCsueALKb96waBsn5c81NMfsw",
  "key9": "YvGeYZNfYAtPtkmWmkgbTwKfSWPafJTs71XF9yggBVqtDzDWSUNb1oPtrotTfdTzcnHPk4BrNSQNYNbpAJYBqYU",
  "key10": "4pxE3RhJ2aJQ3AeSaRT51eNp72NjmNTg12D2c8waW1dgWqvoEJnGgjDYNsogDGVNLtvAUvp8oTT1bVUrdp75r6gn",
  "key11": "5wW9Gnp1m3nUt1BRz18VnVkA8uKh3AkghQWcBYQLPRP55VnV5jsHvtcNTpRHCLFBkLZVBow7ancqMYmRViWLStPs",
  "key12": "Tx5EqFKRDuSiNJGQB6ivAu3jQfbN6fEjjkD7oVSwHtG2XhKjz3uJ8pVkCUD6Jr1jAedVjPp9aYcd6YJZ17iYtT1",
  "key13": "EFKnBPwEncRjteDPgxCpnE4wvwN65RpRvhhSTdjwtm1FURqkScg4k2B1W4kR5nemBGwcF2uoojEC9WdzJp8ae6S",
  "key14": "2tpFSQcVpo9FmeSY5Ze66cc2iXSUK6ThAwyadzTmzWuNJuRokVSWfrtbeErAeyTri5ZLXGzxyWjcz6feV4A2r1uY",
  "key15": "3Jig9YWpJN5ZbyJSACB3aitSDohZaX84rDsXQNq7jTDUUPF4hZETTuY3oF2o1qPabzPiV9Z3QQ3xHCLUyN49H1pf",
  "key16": "39p4BKQcjfVovmtSawHENXmenjxSZaLurCCsZhsR6dTfYHxG5psnHVB67xxWVW8hzwmYjzPocVhyLxxWuT79UWBS",
  "key17": "2v8bcn5WDUAEGfzPW1T3DycpYEktKjujcFaHv1ejEwpA6yEx4ZaHaibojfQiNH2D7PDJdGsLTvGeCkgrH8mdjTUf",
  "key18": "4GQWFukTskKTLGz1CSssyi2nCG2fSSSe4ANtQXWRSnvsHvJZMth52rmXCCzag18wE6skggFKDTU15AfJoAuLKXGq",
  "key19": "4xBBsM56zu6HXnWfthVbtihYcbvp4fRmTsrHew5geeacYrtmjciWEFXCBHuCWV9BEPgPhbzhcZFRmihyzUgFaU3u",
  "key20": "4w14nZR12AaZQyZz2X4zMafHuJ1BPiUUZvzwiDbQyBPEB8GXEhrFmh5XoA42QsKMsCbprua66j2v8heWFZRkC3MF",
  "key21": "WDrrXeGMsxy577JYiJDQwQ859DcKZRoanPVGgoFmSvu8C2gZ1E2yxGdqcF57fr2Y3EkWFbV45ikTxApwEqUvfJQ",
  "key22": "3ELydjZsHLUoW4T9CL9CRoJ6abFpue35LGH6hUX6VYG4MZLYy1UA5LuVXV6grKPcuPyfDp2zedk5eu4kUt8sKaST",
  "key23": "5jbDdRuLUttZRHwRmMV8LntmYQuvrD1cCqxu9JFqNeSMz4a32QjK66Ba45srNtoTe7uLU3Hjg6TxCWiYtyeGMvrX",
  "key24": "2QgqjKdLABwnFhwFPAV86dqJvk1YRCuCkvhst25kxxKgM1cBiVPwg5h4M5Yc31AGgws5Sy7cYgzkmVg8px3Cq4GW",
  "key25": "4wGSuK3ULVBvyCUa4VzFVTJP3fBcovpjW3vVGgsZ5AtVD1XfwisUXxRFX9dSxi9UjbF5zej8Zgdv14EBniuyfq9J",
  "key26": "3gNZa8uJs6MwA8xGa6e9TrZJpyn15Pcvta1ofXiDzW4611uE2yADMQnd22zB5FzEgSTcr5pQG4RcRqEDYKeGWycf",
  "key27": "HUepfiXzgskA7NzthhyyfqKzAiwWfh4FTn9sAYsBf56tryCArWAaATsMA3gUJfUSjTR61uRjGtTBcr8vM3s3Vre",
  "key28": "2B8Wp41p7A7nAc4PJaAbDpMeeNYsM9CnttUncU7v9rNyV6L7CamLUzY8r6aoeLBTVCniVivKVdKzHL5zjRSrqMno",
  "key29": "41Xz1snMXbWuHDmgN3AuXXdg88Ntr16cnxo996hBmEeR967u7xMgCw1H9szDd2rXu33ZzAjZK8wx2TkK991nmWvX"
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
