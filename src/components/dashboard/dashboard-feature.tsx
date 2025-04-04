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
    "8xvVY33Y8NKP1s85i78C88Ay1FFvsw3dqGxXyJ1i1VaPjr6ueQLu8bNWRa3hwAMNwo3s9msttHBgWzrCrYhqyHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUJbVgbFLGiurfodLuByCaHfjoPHGjDyj3ipPB9wuQLpUPrL4nad5sQuzAxeWigKNiM8eCAzs28vHhJbvv8Ro3d",
  "key1": "45EXy2m1o1FabbVYdompR4CwMGpNdNCJF9qzQN8wAx9XeWQWuRVa2Pp5LWbikD8UN6UAeGfh2pmyLNZ3QaMFU7v3",
  "key2": "34QJbssHoU8ryPy27Kii1fbpzF4Nki1oeK1KnCPxv7PTUqzVLRQZSjM5uRj74NZc1HpwGs51WsRFujjF9eFtQykf",
  "key3": "XN5jxMhbGSEe5VenJSz9VsdMecP6jUpQahqJYQJctm33UPQMg2dNf5RjU4aHLhiXC2TcuiVaa4rNFihHaWNWb6U",
  "key4": "2PrJCiFtHrAA62NTEcoPc3qdG14a3BdZJ4493nEJtuneLjb5gWd9gnMXh1Dv9BJhvJGgDcFV5LeRzXLgMqyYbJHZ",
  "key5": "3dNWWkF1qnAbi1NFzWKLwsTmChsdxJosvLbqP7oZZts2BRzptBE9MM9ZUpXNT13ZhFi86YTrZ28fWRtatikwv7rS",
  "key6": "wvxBPzBNdXJmPc8SPWuTxtWVEwbTLskoJBpihjczBLWn3r65Hp9w7AQXgWaKWJaiXLmNrV34SbQTk71zKzBvBs6",
  "key7": "E4Gdkyk3vvNJkUXrYveejzw75XNf5TUNSvv3NrqnBdKamdCZ4mKz7cB4cG7i3V8TMwgq9dRKakR3RBgJasnGd5L",
  "key8": "3QG2hRKQfgkCvn2gWnA9m7tJKyHjX6kKePTK4u3TBZmY9yhxLo8PZXmSx7DZUrzzb5zSLVSKqGHDCfSLME8ctRwy",
  "key9": "5UBVEKNLyMULLqCi77HgbZa7ufpHbL2geEtNR26MtgYJZBWAbib8zJ9LQXbyMmRkSE82xV8PD6wHfsD5JTm9ARBF",
  "key10": "2nnPFDBNB5trbvEqMtJLvDhephDevZjqJ1Xiv5UBLWnJLZULtTvgBPaAnupme5BXEyseKTEftvuWziL6PVS6oAAC",
  "key11": "5EGHbEEpUUpZEZH7eCisp446aiXbPjN9ayxYSu5PXsjRf8dCvAdV9NQ39wMTFebk4ukyUp9eZQqZ3womw5fgUwuY",
  "key12": "4HWYeFxtQxZR1fzdujLj7n9GgHKTPdSXdaUPiCiq9YCmSjVZGb5kXjinCiyjN4abWJJ8V8sH8ZfCrUa1gTH3tcjM",
  "key13": "2rgLdGoeYTkG9wYrawDxZ7zfofSqYXC2ZaSxG6ghYpJZtR8EhUMWLMGd7hcGfH4rbyfMjETnb8wWmb8aW63mofCi",
  "key14": "62VeH8ohKAUtHZHQUgYseSgNbjp7dHCeArVm44v84e1LxPRRhRbfy7SujJB2DyQd9pPFNCxZqGp6kqgphcGZRbfi",
  "key15": "7ZrU5z9hJnvdW6dPntpPASBFXkFfoVRprpGJfL5eyDNzzuWm6YxH4FsYkb45u55CgXaQ5dfLnr2fzFcfsr55As3",
  "key16": "4FC9wEtuBu1KsPwuytpALFZ4eoTMHd8HeYmxdVMvSECTEWWZDMkMfpEKjXmPCN4Br5yALrzN1sEeeYMwatn85U56",
  "key17": "rzr1tVzpanFVw2cfCLNV9jW7vf3UkkaKf6Z8ehRUZmeKDDM5ZbsMYQtZ5g1n7N3PKmzmnP2pbHC3tcArotmUXKC",
  "key18": "5nzw98YzzVh3T5pF5WUQcKCtYQGN2foc12bAzV6cTgCu4A7e1dhAUcJ4eymN8px8MMK69GpPz4pdXes1VeEKwujA",
  "key19": "3MdPaSvPHRLVC34yPBuN4VM7STyUV1f8sYWivL6VwW6BCLpBEMvKuewp3Svh9JgMhaBvhYFnLe2NPFr6WzCXwKgz",
  "key20": "QDN3hf5WkfLZVo5Av7QF6fcjB2e4zaKWieNpa3r12jrWnwdBABXupTJDq5VtQw2UkYEMw3hT4vDbQqDxUncPKqt",
  "key21": "3McaMfiABhQhuNqj68s3yS38QZKjNAkK43MuNe3MduCQZf1VYahhUZsbeAMkJtEQ7z51fDvow3rz2NySa6qNvxKf",
  "key22": "53GMBJam6UKkYcV2E31Cvvi4fY7XuGajEQDqcfqr78DbFPZ8P2Rhi52V3GTbmaJzXmRNzTfja8qUu452YtTNrbDC",
  "key23": "2aQDQ2ZkS6TKJL8oBFENcp4ekySd7osY4w3WrUBDhMoxqzYaku7LvGUgSc86cWVFWTQbKFahy3yhhVbdA1nDnim2",
  "key24": "4HrPWVtc7tTPzLZTQAWJihQpZ3a1Nj25wdHTf2GrBHoKxLkHekhsJnhZQhdTnXhCsJcwvsPAGVGnwKwNv1AcMs3o",
  "key25": "5aJzK3LBhLhMSFYJd85EbBisMAXES6SHr6pqUYQ3wHkXJbyeSeyaeoNSu6icvpfXCzTvrKfSrTvTQMdQK4TsHoUi",
  "key26": "zaMjxusvgpA79Ty4rhEG869JgL96RFybMngE3oG4sZSGhGa1Si6RsChP4NFkJ3YSYUR23eXwPqcSg1Mkb96AL7W",
  "key27": "4uUhufchiKjtW9Ygd6p9YTvGcKtGNYbEhjLHSz8fQkvCkPy7MDur1tjGdZF2k9PUah5WbT3j6Xt36Bm6zMihYfHa",
  "key28": "3Zwcue8B8as8isoRCmQiWZNSKwmsgCkQLsAsTcM3uBMK2J6cnnT3pg3w8KukAYSy91Wrov1CAo92tm6cc5b1z2nx",
  "key29": "42TWVTZqCmiFkuatbwy34qoCnVSg1Jq79yzc63mB5MeVogC8RWjKT8DSWnCYXxVHRAtnjXekvfFLgUhPrWdQGX7W",
  "key30": "to1wQ6xmTA3qgoVeudSRmV2Ypp9qBFXLKNJXWfAgxLjP1ZgK7v5DMn2aZhVdHjH89q5oGmXQHoHX7ozVEwL5eps",
  "key31": "2m8LevQCDJAaxvNGbK5G23TXaLuRNRfYjxu4czx34yjsgWoqpWPSMVExAmXPEU5LLKuD2CV4BQky18WzKwCji28u",
  "key32": "456Fy7YSZU7ffEd9gjEqM9sM2f6m6ZS68DmrmbDrQUecpgSZN9cgQadXE3NGGWdFotFQEdf1XVfBuBMBtfCXToTM",
  "key33": "rP49VDC8VS3g3JMNj24eZPE6fJqbTutM5f56q6XTAjQkK3ZW7rqsuQGt1j1r94Z3jnBRCtMVkHKm8L87vfHBjV4",
  "key34": "3R1CcWYZ71zZJ7AgA5pvjv2WK3HnCK1AB48eCWHjhaHLEB4SEvkhsYv44cXMboorteXmT6gV9eksYjsQZfKSnj7W",
  "key35": "25akD6ieBKvmdeBX44S4gXATr3N6S8MB3NF3f556i2p9udLm1XW2oHc35X5nDdtQMvhBBtT1m9zGgsdLDJCwqrqZ",
  "key36": "37fkx7YEe972JxXeeUdzAH3PA1jCwtcXnW2WwoVtcLdecy5WMdsPdrhDSMobh6UeFagyTgoQuPTgvPitSmKqVhTW",
  "key37": "5DhJrdkRsrBvwK5XqSx9NggRAy8ziMxXouZqVtwiZQ8M3LK3fsuHgPCUT7or3F2vY3qE8Qr6uVi3WBqwRr9hLuDq",
  "key38": "EYxKA86qGbVvdv6fDt7JtJybypbEhgi6Pe9jB4LJ4ztWMzZJvPeV9d9taZm9Bvx8Pka4UET1sSLPxDFe27cMHzf",
  "key39": "2y1jAHf37D6d7K3iTQUhUz9mpxxp2YTjyGS1RHD7UQ4PKhESB9r9VF2jbT3qqPTDkYvPr6n3UGESW7x1r7STNQE2",
  "key40": "436NGJBHsc3KEzXxzmH4gRHVmCwBYCcNL9kQp5AfV2LNSCuvvC7BS3JYtmZXFX7cSud2kLs2xJVdwzqnvEjcwqE5",
  "key41": "4HH6uNxQcVGzacwpf5J8LAMQR2qGSZHvPfQkfczn9AKKPqN3eQgaNLoNzVRhfi1K5NPjLdWbXSZSB5JP23LG69t1",
  "key42": "5bM4vcZoUZ3rs27zsPNWFehNZjatz7ubrBMLLKmYrnHGHvXXoK7WUvpuYpgoAbkpQ9sHTQK76bFRR1k9de9cdRBN",
  "key43": "3b3M3VkonZG2PFpA4YwdA9VD43MwBSVfE5MmH2bHa5Y7uXNEryjLc5ir4ai3dDcW1sVVTx5d1yWC4fas7K8wMjoL",
  "key44": "65icUQrFrKgPxEQD5WERkaB9EQexdF8ZDe4HsqBe3GK7oVhyw19rNw7B8WA7ZFkiLpNNjErmyh8tvtApbSxjoyd4",
  "key45": "4fNyWYqmw9bAKLCz2XQK2iFwZdKfPH3GWiw5KQfqPuz5Nq8KDGhhJwv5j14hKhN6HbTycyffTg4EGyQxcFcfm5FK",
  "key46": "3cze7sbJdjpaTb5Sjdbq3j1Zr3GojyLmdtus9kepJYWN31YU3gMDK4GQNLcbKDRJnaNjpd9i3NThLtR8od2h9YEY",
  "key47": "31grs48fHxKajr8Kgq4wWFtfeEkDJsHhHbzVVnz3du58AymkpWnYcf1Gc7WSpkDBvbeEx31QMTMEWtmFtRudzG4h",
  "key48": "5wEx5RJcMUWvhx2YDoQKnGWq84ySQgKcMyi9kA4vFv1rTy4ojfyvqck5KuMCNaGSEkHnHr6L6W285akYhWr2fmUg",
  "key49": "2sstW7H8uPA9vRXXxNBkzqn68R8wCYpiFvP1tkmXA96wDs4CyGKMcorStKZnNQkgc2oP2yA5RhPXBd7jZ1GK1Fsm"
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
