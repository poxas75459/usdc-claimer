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
    "4akNaopMrCfR2gDTQ3CoGAoZsGt5RcitYEedvJYxGaLo4xVdRWvmirx2tH2N7NR2NPheh42GNYc3XrD6nZnKJsNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6b4RZv3f9JFsPjgjDnX88g6MehxqXHi7tJF7sSTE17eStm2Kc5SE7XXAvdqwb1cPtijFc158GtNy52zvz9oWHKE",
  "key1": "LqJmjieDuQ9RzkCzfKhjA1qnrU3ZquXYiKqdJJpQtQNM5hdedfaSYum5fJve4Lq4JStJTNwTK8jztfXz9qt7sxS",
  "key2": "36o9GEwXqotYeRmE39mSqAZnEDR8f4iKVgnGztqYDYjtbMyKmLKe3ZF1WwktTNxLdKrTBnhnvpuRutf82znTesX6",
  "key3": "2T7wVUPEyLXxRTjQzndvPwwrBZwG7wJHPQZYM12xhEA2E3J5Ri6TxVXyTVVaoGAdHuxc4NREKbLeeq6tYxJMQhSV",
  "key4": "6HcKMWF5rbF3DM6HBSbirUHKB6BZPYAsejkwP9a1kyAxicXeoMQ8y2a3oAgZr1f7q4RQUXRvkae46ee6KS184nr",
  "key5": "3oGKqNZSFvihDp422jyJh6BaL1RoMyS6ubUCTw71tq7pHZo14KfSFeQocMieAPFJpjCAWnnZiH6vmFCwgCBjh7r9",
  "key6": "2pRQ7U1KZZdA6oQNE6Bgm9z2o6ZDeGmVFehwMJ5MK5GnYrCAxZjQhjHtq8sCpxssSDset7fGycaMg4csFf1C2WXt",
  "key7": "4CfNceJAU1Dww36HrTkE8aNXn5UjrZ3C9cKUnFdxkm9rmQpyqK7ik685qvk9Wuga1rytvtkSwHauKfVPGW554GUU",
  "key8": "4hM7K89CtAue1F1PwyKjNMWtPhvbmqf6rJ4v1VBqwkoS9ArqaeE2aFoETzyx51rEsXiuT41BkERF22zxoa9PKnx5",
  "key9": "4sCEgBq8D9srnjVWok18Bh4bG7Gv1rh7UruLrjUQjFkTyCvFSbd4qkojmZGyf7a2Jad76YUgcLzNkf6fMdPKrbW5",
  "key10": "5tymskWQvu3bF1GJED3jgp9s9H1rQYYyYoVVVoo9sV71SFKLWzqCFng8jGNc6Q4nzFJ727tpDXrKy4Pw1w1YL2E6",
  "key11": "4fSbMurxBwP4aBi5rijrUqbofUqHJiBPmdW4XCFeirB1QMxE9E3zquv9fzG2BQEe9gZUhiKzVyNZDgFNzdJ9C4Zj",
  "key12": "5pxwkEyTHGqmFqqNsE6t5QF1KnpVNeAjExUarQrQ7LLKeT5HYt4ALgEa78inyC4Fmj2fvyTMFo9Vu1CteKzs6Fxv",
  "key13": "3hPseD6sE32Bvs5bTQssndfKBPC5ugKMV4bUnmPRvUwRCQNtz6k4vM3RCrihvCEnzE4tgEiDvxMWhEnciw84kneV",
  "key14": "5ZfFNJGJuoXQjaCHiSUJ4MhdCK8o5fbrib9RxkFcxMwTYFxyj3dhEtiTsmDPC3BztUVwmb35enoFtDZoNHNyaua9",
  "key15": "64VpY3bmiRzCefMviiwggh4TvUpt4MiDXXmjVNmfBkrKaZER6db4nqSYkDSSDDzbGZqqFKMZAsHH41q9XLDwCmU2",
  "key16": "5eSeptuBqQvDdnk1HGUQVSEEjaYi1MnUBMM5CS8qb4U6Cp8kHBt75ScAZmMvtDcqcnuzuhzQtz9W698FXxKcNXJQ",
  "key17": "Cgq8cc8xTKGqq1D4BnD7thjHWsvddFL7KxCQtJzNL2k4mUijuXLmhcFMGkqFhXZJPmHxRrTzWSXoL8pLNBJFRZa",
  "key18": "4hwM7KoeKEQcLkA1tdZge8P9GoaqR8fA389J3ArosDDF2XWxk8Kpv29TA8VZSg7UqgQUjQsxvGYAouLfKvpSbcmT",
  "key19": "3QN5Rm8kka6aYUVYrJ7RnaYQLuuQVrnvc12tTh6XhLgtE7WeS2pstJbUjPGxW13y2FtaktNocXxKe36avhpkmW1r",
  "key20": "5BnGB69hZHmfu84P8vZ7X2sA9YqJ935BPC62P2sMfWEv7CbbccVYgKGSWwfF1Rvycu4QJrUTkcGzGMarvdPVy73m",
  "key21": "zfs42ztJqBKSzFWxvLKGEdvbTf1vg6ovx3YLtVpJdC9nacxq1PPXLSwMdBD7YeNjejMAaNjKDWGUKwGSskL3aip",
  "key22": "3AswG4qBRnJhWV32xkmWtJLe17sYMuEoRjdqbjJJp5HMyCFocdPa7j37WaBBNvGn9Q93X6j1My5FEWb2NLao1XtB",
  "key23": "5zuQBJWzwJE2yQo2SXtXTKG31zwJN91svsSqa9DcosFt5Z9AZa4HWLv7CC9r5NV96BehTcopwRnoY29K3etkAzt3",
  "key24": "33haQWVNGFuGLHFDTsWdd4oYALVMsAo7ek2hxXDd6hXnvUqhMWJHJjnJYFE8uYpoa4zW7ViSy9BsApCBafietytY",
  "key25": "26ES7uPytRv8RVot4BnEWJacPc3UcPfKbhykR4AnpZL8tZ4qoDbV9eA2MpGCTVg1z8971BB9MMkwfEMHyfPrAsvp",
  "key26": "eikSzW4jjMAtSKpWCKbJ9JqbaT1DbARcDCL9dSMJMvKCdERsfHLKTXoLVbu2eQBFYwzFB5FoXD54G4gfYgek2uh",
  "key27": "4qs4GP33NyP7yGwD9LLcptTKGh399GPJhhCWqXPAewBfiJmS1ZJuy1Z5ZdejuDN68t1QVzxrkSHHZ8QdBBGKnade",
  "key28": "4qCMKUY8pGTVFcD6WqV1c3CP9Yw3TAZZTfXuub3tRGBA6SDF5z5ArMYYVSX7AyifWJL85NWvzMWa52CJoi2gjjUV",
  "key29": "2nWGTWQFhzX3e7Mo8T8CYF2RLb1RWRuRut4ZcCQ1Yo7Vk3d5zxhfmZes7FxCMPw3hVJpy33iACCMdKD4iXBhydVJ",
  "key30": "55QR2PqUTMrUWamKbWVqfR6MG8TZwVPFoBJp3WsMdo2LqLUFsZhGSXqheqmGqnD5rPjPE2MidkmA9g5EtdxwFtCS",
  "key31": "5VHQSiiTPsSsDYWMuDS7brzbWyxEZQeEjcAwV3VtKVmiN8a93RwfygiVKcPPVxAqDuQP66CjRccq11jFRWBVxvKG",
  "key32": "4KJLCLnkWwmQd1RhURzUyhDfsCecrmRtEGEj5DARejiuPifBUjtgukKHYo1AU93D1GGbeW3r3T4NJGFNh96e2HDF",
  "key33": "46TJCefEczMqdQKFCysTCfzhbcpDF7Lg6yFdv3QXYPGpAhqKJvrMyEEDkR1Pn8xEZJLnbtvvz81RjL6f3KTP7kSx",
  "key34": "54iPRS1bbDRyNguVYuWoz7V4UHhGS4dompzbvKHsLagBXM2vYwWE8PRieTnWuYrznurUZuEufEwDbZ4F5TPTvkZe",
  "key35": "257qYzuiwyUPsx2ZSaNzi23WBaRLLAxYS4E5tEyuR8BRpA82gKjGz4WaG36gd9v6TaQoCLfhYVTFeAN44RQWyq1v"
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
