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
    "2WeNUAnuUJbQXiLDFCZuHkJykgjfRCA6kGjW6GXjthPiztuj2fBL4qeEZPfiEPzvDWt2MnSij9NiUfuU9aas51Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UuYThfXNoTvjy8MAxMGqvn5Zu2Uiy5B4K2TpgVZRzxmJLU4xpcZm2qiEbKTQU1DEjqizQLgZAdHXzE1ztXHjibH",
  "key1": "3Wrpmg9uWP48dJfcAMjHceY63jenpETHr6CmaSMKp9M82HtMTgupGCbDRNdQikjDW4nbUgR6yA8jH3iN3PZ8366i",
  "key2": "4x5NQpjKBFRMzPFrA23VtPa5Y2HLPStFSAbCQm6CxMtmR4esj8XNF2W2N5LvUjxCn8Bc85sxdBT413KpFHGW5G8u",
  "key3": "52LdxohkKgBVZmfKHDSyLrUsGWvGvRSKR4Q5i3jb3JLjxpaGSEgJzGSVvX2MxjJ3JFhpyUMXoaQ9Qw33jdBDQbQr",
  "key4": "2ncj2vzsg6ir8PCiW9tysaeg3eDMvKiQxeWdVf5kunHM8sm9huYzG1tZDjs6MRpGGM1a7JUeqoMWoC6Eh3owN93Q",
  "key5": "5xDabPCa6uizhszh6cppUpcP9hCNyWhMptNhAvkCYqWN94UwoMLPZVugsFAE2DdUagsP6fT5ehvghZBJzXaMwS5e",
  "key6": "37u8fztjszAqZgYcTFWDPzt8gKQFtJce3PHws6VPModqBnN4USfThwvcVMxjh8UGGmhhP3zVSSi8kxgYWCCDjvEj",
  "key7": "31Y1arPvsb7SACQHpwdovvyUAk53L3TW3dpPtnpAeSgQxk2VVkgH6iwvUL3FFi15AfNjbe4XFb7QiaqTEsiwFBig",
  "key8": "SKGf9KhW9H1pncBuF1thK9xJDGxDGsgX8h9JLH7b7jfGJa3taithULJAfSFv2tSC92sa65W5jandp9ue42XF9Tz",
  "key9": "5SGHbxE7p1NV2VeyAsj3x6ygwsFqvKiM6rNuPVYnZix4X5BW2Lw2zykDuB3zsPMU2bigEhvvDJRgnhSYSjHqUffG",
  "key10": "4CgBee1myoQGSL7bLyQvPHmbiZgULsMcnjRJ5kKbaNp5c6e8P68hcXvEL48MVso5EJ6SGGzqtaFHazEXA3RN8eaW",
  "key11": "4pPmjNyAXJKoRGSej8ytnoC6epTrGa5xEAkBFXMMthRdbBpGRSAn2VvPpSXAmrLysv6chDW7cKuG6U1K96mDRCDH",
  "key12": "4rrfiZUfyqvsa4P8jyqRDofxivUx8yTJjNU5zn1q577eqKHpJHqDmw1WNYsgN858vw8S1PcyDiXtdjE6RWj9EVPt",
  "key13": "5uBosCX7GJZYNgx4AfwfViVzp7EpxTo9utZH7uXS4F4T9fDbaHy62MndCScRJK4vnijoS3g7LfKuyEyoaysqoqi8",
  "key14": "3nGpVQdwyhAGq8tkVyqmy6aXw37rZqjKJsBrzixkbFo7MkwbGXuYeYbHwFsQHihs9LpGLRWMJjiZr3qGHqs2SvNf",
  "key15": "41k2NsAgH7s9BwmysKhKaVG7YPhRphoqRnsjdLJKg7191fUvDagkLWV2NXJJFc5p1hmFXUm8nPSnrZjkU3Jps49i",
  "key16": "5t4VA833jUkzbCNorECSFzor9MB9Vta1K7LJ1G57Mt5kamiFM7Cf6czBViw18EYGp4k2YvJsYJE8U34Ln6WUkYw2",
  "key17": "4LdiQMZABZ1Utiwdca2CQbcXxsyrWx358XMCyPJAdH9XCgTRLhH5cQKfK21Ke6VudvxVbvfnVmghuL5EGGVDLbC7",
  "key18": "5KLC17j8P3jLPH1cGvG7WkECtZCpgptu4WMBxAT74oR7UEkTv7fyzMZhkWJcLP18HAmHYoYp3BYr1pzXMVn4YJzr",
  "key19": "4RSdRLeqhGqQ1yt2PJBboaTCBodpuoJHjMCqh6MU2AV62bDJDfDmxHm1wpx6DGxSovxLiQnMfrEu1tq12DN2eaEy",
  "key20": "4dsbCt6fTBAxjMka9QtzFZsWZvVoxDTiPksTDwQSuVWjRZ69RaAjLt9YHPTrHMERCaRJMShbGu6WAwkcHnJazrs1",
  "key21": "5ZvbV44yAPmhRVAfaD7Z9hTugJCVVuDErHeRMHKED4cbxTFtAwrKwJuYF4omVHQhbGSQna16ioK7nKAgFZVGdW3t",
  "key22": "62SD364N7iJdgisxntBprbDbaaspht33N7uY6DmzDFQxJadk1UtJwaze1fiDuhwwm3KS3Afk8X3DFDyYPmuSTnMH",
  "key23": "2kS8TdwWWsbKQjau8YzWQDNjR9TWSeVXZSrMLLYgnhvMGBC7aKARiCEdmq9sBuhJWgw9pA9sbqxApZdtvs1QeoXX",
  "key24": "2HVexnhTrJhh6JUnptqgiaQbwPQdiZuLr2LpRSdUUxjHipSDEGiaVGyLL49AUJRvzJDVWGik1HKUZ5AumsNNiLrw",
  "key25": "4V2NshNySUNhhg9LL7T1GHt4M561JWKDgCL2SotE2GsrKN7zM3MmUweYpPbEM3mN9rztHMU6bwpoA5hdWB3rmnDk",
  "key26": "3ixNzgxY4SYC2G4buMV9eYXQD5R71poMXS2fydisRBVJWDZk1ZmCTfjLnhH2mtWqXuV28jFPa9fgaW2k5tZUfpZ2",
  "key27": "4gq952vWWKXrWYkAun33LpDGjykqq84YS9eVvxdViDp6kBfvJBNvJXk6hqrPY6MyYsqfMHbUX1ensbCeXUhhdaBN",
  "key28": "3Nz3sTgXsFvBHL1tUv6RBWZtnk5tJEVbCN8h1Yp3rdMPhHQkheCcAaxDE1gEeWxskpMGPXoGeRi4bdiB9YPQB2qy",
  "key29": "CWvL1CEzBv8Gx8X4k473KDQ3antPwSRGUh1mUDf5UKWrAaJfEvZhcYQJJGJewsvjDkxjwZRxr7qvAeVtUAcqe3L",
  "key30": "2bHYdP5nUUQaCQ66XWCvw4w43yLdTv6fg9EEaRehaUTSDzuzhyWL1VtvncDFZiNTi8WDSkZMFkRoLv6zK1NkcevC",
  "key31": "5KcoiULysempcgSmTpVwab3zy3QecL9yXmaAjAtQZCviKFh1ydNLMmxPdiKWJuRMtZj3bVUyoNeJoqLenyzj4MFb",
  "key32": "2hzgJMMeeWDp7x98VQabxVVVtZ522wgjS7quJf34gzd4fb9UKMVtuxfBeYzMzNugufuYPSnAUtgw6f4p2KdmqUQo",
  "key33": "2tVaLHqPpotQKnx76B4trjhSvv5Kqjet7BYKd3QgNhVj3r2yyU9qhZAsCjsezGNuN6Hk1k3QAU9oBkSc631X85vY",
  "key34": "5uhtNxQnmUZY9WJXnJHnunq8dWY4qc15yJS7QBjQQT6iy85xxQzgE9Z7ez1qg6XwEd9pbqMX79QeChePyE4MYygT",
  "key35": "5Bh9BzJ5jCu3P7kCEaaeCgyQpaHGJLMhqsFvH8u2xtd52mqknqYhJwfMrjgX9zAJ3AipouvJQbkj9CC8UFry7yzi",
  "key36": "31NHuUPgUdzPCyNB2TJdhLPcwvXZNQxkevQ4vcJkycAY8Gb8ucrqGG2tRFZQ7VxSF97zEA8UWpY2SKsgVJ5ZKGtD",
  "key37": "2a6Yc44gVuZpsbbgdFZg6KmEUwLi8P5kijCYtHADrm22pZxN6EHN5jYjmQHXKiRWxZyxi1FccfVmhq3dzfT4sq9t",
  "key38": "EufjWm2iKxTAFosK46ef1HjH5XPoKkjRVLKnyYa1anWSnHg123HgkgAyhXABMa6cWYyq84SVLYYzDi6tTfpdijh",
  "key39": "3HarcX1ddYyJwbTWhBvdG48cE4UvdrDz3ui7bGJVFaDBTBvXTScSqew9gBT1dA8J2jr8NL5sGTXCfyg1HWP1fLL",
  "key40": "4g99tFsKKEwevQpABLKxgX7fxiuoQfzmgZiFaPWjXKZ4JXvksgVaxHmZCcyUAjFAjFxtXCofeCnbK6C3AXfHzks4",
  "key41": "2qhALsRZBoAoFNZqGEEFXHRM2avSZwC17Memtbcwb3RAdnyTg9ADBUgoMJBdyXcd2UZehSjbMb8BL2zGFpUrV3Dn"
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
