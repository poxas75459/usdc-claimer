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
    "2XUwD4mJDP6v17ap3fZNz7uTcHqwz4DnWjhhBb4ejmioKx22KPU743tGF8jtSPNvs5Ha2Dtbx1bhyy2NqkqK7j4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c8h1UmzPCB3GbgvwvZdNvzM49uPavwqeqeHAGrDcSK8bfnpTMumgPtzkfpXAXpU3ki3mcBVkHtY3jhmCzAvd8zR",
  "key1": "kyysZ1qjNpYi5NRbj9nfFN5undXggbREmVD4fHQ4aiHuzTxRh5o2jnHN5ez2tBaKvga6HzrWs1eQaB7C1hY7FDf",
  "key2": "2QQ5v1d6dEskWAnKzsLibBKiBCkA9B7AEPwPmLURvehEJaufhvowzKpSkjWpghpGuy2YZorsPo1UWdjXFkVKVkPB",
  "key3": "LyabeVr2x7PB11xLrKk1huo92tEVu2GAvN7oNBenYh2yucFvc5MpLNyPC8cbK2HHR8XQSMSDv2cYtxx2pQiVF8F",
  "key4": "3gr6vhDRYoTsjFefSeNb9jnEPV2VTV3FdWwWcbR1XiiHcbzHZ9u8iYdxc19gkdPWUjSJNETcdcQf44oy3kiTFR2g",
  "key5": "53pYT3JLwvJJUsTatrjahiwbjn2nvhV8iSQ674tkWt8u24DTjC3c5o1S9kjePzXN2Wh2TnETWmRUP3MRs5ESs7iG",
  "key6": "5FTCTZTEtqh2i6xC45v4wScC122NiHaCK4hqQYx35tpWukVKxciDkuZc1jpcwwYvkQw86GFCS2W68MguLigebBby",
  "key7": "64gdjtq8S68wq3fXTHV8AHULPsdB27yNZgYEnjtiCymhgZxMJLFyjgmNkr1mmcmmNJBcJj6kdPegcYv6EztokfWv",
  "key8": "3MSQR4aXPvxDCuSZjtPzCjiPtMknnNxh6D1D1qaZuQniGaf2DVHS1tpG5A3i7557e6BLTsgT9EzgHpgEZekMp1Ne",
  "key9": "wUbx4vmkqTAbbAZvcf4fi8A5yUArMpPiodoqgMkVL1N5YbdATHirx8i4UMvz1sydVNCqfWwDbwUXaQQDwPfzoYS",
  "key10": "4XHbPBFCVR6uuHGpMgqobRtRp7W4MoskKAn4vqLS7zaseXaSRg1mxNgCmarZhQpdqfFJDZQLE4Y8cy1hhdPHJTJZ",
  "key11": "477rca7YdcEjuBbK3uy5G6iJjzfjEckkkzGQESruttdq5AnGkS8ftPsKxSZcqx3ooZNKNzQRVYhSTTXHXSSUgeoj",
  "key12": "2TjkjqbpmE9bfBbDnRyWYfxBvbC65qLJxqbzE9iakMxpzGy8GhqtuidcJPW5HexnQNaKvNpMmaVomA3DsbNtLM1b",
  "key13": "4x3ByY4T6YcXEywnmG3zAVpkexYyubHr55k6jy7E18aJHGfY7V1KqxH69rtxZt4Y5kYD6pAqFACpLrJyoRD3pWDn",
  "key14": "46TJetfKC8z6Q3Ez5fGJC6DEV3mtsY7Ct4dajTc4XHKE9aq8e2WTE4ufgcn1p5Lrkk2q2uSbGkwjYaGQANoCDukW",
  "key15": "5JNDb6ZyyQ5cgEZ9YHtqBGnTMwzbj68aTmxubBqnX8HAYZPkhXoe4mwKiSF1iX6Eup3kASwEbi4wfGghhTizMA6z",
  "key16": "5aUtMmkxz54X6zanXtTMYE2JzvqiWUK5wbBiywtLF61VkhWxpoRzkqSDshBkGjFoHnJYPongpnG4TQwe438JQ4Xr",
  "key17": "U37frSq9TmXY2Ky1TiArcJwdfs9BDY5QwsyaNddekVsVzpW3ZhsHceApjHzVxZ4GZKjkTt6mcwUAs2gNttqmhdf",
  "key18": "4J9RT8WjqPVPTNcsbX6vwYJcu7JrN3TRnzJBe3uuXHxuDMCpG9KLagdA6GoPQ71RVjNZV54c1uUtnQsT6sCBpHwS",
  "key19": "neatTUxRLdF6i2MjDEDzzP1WRosqpCiV6V9PX6Gggz71BUSLr3dPocXYZCpyEdJFHFp4SnopmWKLp4t1van8UwP",
  "key20": "5D4RALJhJAhLxPUSgB9RtXUhnsXMGGhZuRxW1KWT8DodxrcEHdrDKZJnqKd2MVshBCKUSUS1nnPGvvtingMaFUZP",
  "key21": "2zN7v1MoAEinSaRgjDVy1qGubGMyb4ypKuKsskwicoVEKZ28puyjYRG2f6G2Lj8RWdSiwVxj6u1TiU9YTJSXtgW5",
  "key22": "4doGpDzyfUu6YVEYcnPCgfXQfX1aomEXvVcgqFtHJeSUYcBofVFcxsmxsJV9eofm57vCwNGD8c98RhMcxeXEuu82",
  "key23": "54Ehh3QPoqwNBU3GTT5hTjjKzc6ivZwtAEPSfpmkYmQ5MiPxF3v19g9nEhDTdS9GTT1MQL9uJTvnhno1PvSnccAw",
  "key24": "seBzP1iPDNhnjTmYXaKcqNgG67wBwT5GXfThoYQcT4eBzaNDYV1ZcFfFZmZ7Qw77U7Jct4r8S657AK8Ta91KW9f",
  "key25": "2Uh1dfm4XuTVfur8B6KFyhbJKvePip2xd43MY3ZDodDQirLRMkYDh48ApADs78K4Pm6gggqxXdk4Zvqt6bBL3VuU",
  "key26": "4VvrebJMHfTfdMWS9wCFmy4vrhYJ22hpnpYv8thUpsTXWXCDzzeh58RponvNZK8cUyL9kQ7rFnwJgknyGqak94GA",
  "key27": "3UA8MuFE5YVtkMtLbgPWCueyNfyuDt9t3dBexnCxfpa4VdzaeC9ny8T25LXxkAm7ZyPdVZLxL6EuGCL58NggnSjj",
  "key28": "2SgTqy9ajxzZqGuWZ1A77oKG2cFAs99rdmFVZ7hR98yPu7EqHTbEQnKdbHLjjVDtnyRhhy14w5BbQwxk7oa69AkN",
  "key29": "8jZfLzDMCr2hzgXjbhcTqaAdcAwdCWxa6vhkPrkSLVBcCi29qyMzivsayFxSFxvWzxN2bpGdHJxb8mgL5kNKfCE",
  "key30": "3mD2z1Z7o2GwpKgkbcacnGSYvrFYWonSFxPp3ii6gW3x7VpiguagbKpNojyr8axpgdMSAZtD91ofuUvMEDbrmGRq",
  "key31": "5z9vSQBUPGxHP4rB7f3i69eqSfLouxyCrdPpN8rZe5Rt1KqLvVfuyaBAaFq9z3Afq9SamCx2ra4NMiZa624gLxCj",
  "key32": "2xa3Wqj64UPVhQxrhGfVckoYakGbrr9WxUjsFyDqjBvd7SoysFTkpGRHdDPuPrvK1zsA81rLdUQ6diDB8xEgRkyb"
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
