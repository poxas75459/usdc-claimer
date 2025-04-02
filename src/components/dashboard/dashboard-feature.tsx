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
    "3suXAfESQ4arLUdXWtQNhN4EN2hY6C2hkDyn2CsUitdciP8FFpczV1fRa8wvrvdnHt2NQq3C2vFdz4CdBJksTj1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhPurmiZb2869qpZHrB3Wc933KzkFhUpwB3epv4ve2KQy3xNaH2C2u6XtbcZ1uW9EbktSdZZh1trAKtut2NwQZw",
  "key1": "477wB1RUmrdVRxRcW4X4qhpemYroRKeNupZM2QiFEJetiKoTxqMf9igkugswipknVEEwDz6Wvy5CF3DrdPQEtYyd",
  "key2": "41fKB6TET4mwRYKb8PUZdhCoxqjx7HEQxX4XhLDBhe9Cx7Uf4FfNjvLXHDdJoUyGtHEMuPkfy1rEgjvsAYSr3Vy2",
  "key3": "2ZRTXnNGcgvNhUYu17uTwqsC2d577KEmcbvyE9arS2kTX4L4DBKRhnm8wZMXfqW4g82CSJyZqSatRV2oYV5pjo7a",
  "key4": "5GVUMxxUXY3sXRrxv8XWhoRMbSm3xsVEuAgpJLSxLXcHEwpGoCE4hYCz6yNp23kJn3NfHHsnuZnnT8YevJEAkb3p",
  "key5": "21JQGvFKHPVgfZ6De79PK3TA7iJMXSNMyCgBjvBbgtYBmYFkbiAL6Dccb8ms3Pd6S4PVe7kqeZcdSxr4Q3bubKhu",
  "key6": "5sg5ZbMSYvP3DjKoSectPcrjvzDwjZAaaG56qWLWrdmTYQtnQyoihEJLvdEXHmJcarbk9DGEddHAgU7inRmqmEHC",
  "key7": "2EHgppnRUrbA9VRjAaFX3YHAEhdfwojT7t8asjB6uH61Y28fS2C43gMYmjyuwE9AmGMGit3Q49rAXauUra1D2ay8",
  "key8": "2eaiga3W4kTHZpR8f1vtj3kA5q3dwoY95pT5BYREaiwJ129KXPtNKsPangKzqwsmZFvXf1MNYz6tZNiqvCHwFCmi",
  "key9": "1VtRgoFnYN5GuUGvURQzJpeuCdoixPCUwb5kab4CfZ9vfvBUXeZLj64W97gkG33fisXGzbMu7K9gjKBcGdnBGd5",
  "key10": "QXDwYmDZsMR1Xhv2NxfQ5B1QdxCj4L7WeP8cfT7uxKXWcvaKxrwWK3KUCkk9qtZuRZoQhSvfPzq8FitaJoWRZgJ",
  "key11": "35jVoCG5cXF7Zq2V2QZobA7M12SA7hsnf1G7uNUpSoVGYdxi7YXvqBuZArEnJtCNKQJwqvPk5Db3YvcZMxQiFicJ",
  "key12": "3xeb1oe987VGT6WeaUhFCtciHJ1UotncDgTedCtMLktgwrQNpy68gUgUPHYcAtyEMP5NF9XsXu13sh1An78q9bWG",
  "key13": "2D5Hsp41z1fCKdKtGX2r6AAMXoX1ptP6BUXDiHVV9jhoJV4Gn3W6PJQ9pPyR1engJgbxjB9u3MDS3QV2Nhhi1uec",
  "key14": "tfPAM7N1oeR1FFndtJuEPP6ZrCv6ewtmnMZMntXu2UyjJzGGei74a1Apb1bbkqmkcwm3aKRsidb1vV7xg9a2eAy",
  "key15": "5bRG4MeSVUteTXnDj7REFz1nSYB9jHGfAuanBqmWroWjvsfxKPGYPry8DUdZcczB5Gn89J1RPYufUDssXNJCav5Q",
  "key16": "btfWHBf1zWicawMRAB7u1K55UU1ktNzEg71FaUtH4VUydn6kpUJmLWL17AzMZwgHh3zSEJETygVR7CTiM4Mcokr",
  "key17": "4MSMcM28LnLtxp8XfU1JF6AMizKCa2Xcks53aUTQwRBpvMWvgkNLFX1tLLgijbiGdGXbXqhrPX5vMjYX8sPf4B9U",
  "key18": "3DMLTzLsyaRwVonhhjSTJtD9AA5YArq3svGfxxioGzj7BuFJueT6eABBnGCwUJCHiCyBgn3BdrMV28wgjZ4zJ5C6",
  "key19": "3B4wWAQBDPuVE1z2AeRaqgwYbFqhjmcJSETht8zCLTksqhpHhBmm4TVGCiqmu7chVoiSv2aP6nAo2qQwNe7QqKh4",
  "key20": "4zDKKjzvZ3nZt8mSupgJLb2SESninJpzg26KpJcVnpfndsKud2Goxb17N2mF1n3wPT6cMh3BMso5R9PjsGnWoDwY",
  "key21": "2HZbZGFMsxx7vAC62tuNZiBm99DHkDBz5dcp4TVfttjtsgVkwgNdD8MNbykUL6ogKexg4P388yK47d3nXZD25eJC",
  "key22": "6iSxcTtXgewqhPVWBVZhdedLZMpBnuopbi6GUyyoYp8P3zVphJL9tPH69CTAHqE9MvkYYd7jBBz1QnE2B7676WT",
  "key23": "5RouBmVT3UVTmkZR6Dg9h6YsFhBuoFWvy84g1wJbQd4K9dafdpzZh1zuQ9PfTCN9zYhVQnKssYgHVhigsXgh7qaa",
  "key24": "2bk3Zxpxro6Vv6hyMgcdzgivLWNStJjCoaZ1UpqoKacfzSFUPJtVgRyfGBiF7UHS2RGwDUb2PwqrTRiCemzqB9wu",
  "key25": "5TgcQYdhgTz3SgwsyRzWjzUpTDqrJH4tbk8PZzMLT6JmxZ7nAA4ZTUAcggBSRc1DjQX9SSUaziyK2mvfdK97EwB2",
  "key26": "5H9T1bYcnxYASijZu2bGHzb7wPj3Ltue2WrDiRPMxVGemkhVtmZzvpWspeU46DBoPrikM4QDw8T7xkcMbBUC6ret",
  "key27": "oqTsQoo9BnEgL7ZixSeizm2V4rpwduTLCRT7fySuRGViqn9bQ6GAbr7G5FFXVqFN1cCpCb1ohMQ1ewttdhMDwpm",
  "key28": "5uVikssKyuJGu6w4jYexz2AWViCcZpR5ncQEuaiBA1834LMUZdqx74Mu65iDuG587P8ytXRwMbpvg5Q7gX1pqACk",
  "key29": "FjGdjWW8eryUWYojbBqZTZTvz8yftz424m4fChnG1pHT7tQEb6Go1M9JK9Mi5utjeK28tD8xFX7vmjAG7qH45re",
  "key30": "5HuqZhQJumALUKTH5mm5eQ1RrRFEXfbwtgKJrL5TYA8mAm5zowrCqdf23KTdDL5aLgzW6MTBiN5R15v7Y6ceaC7w",
  "key31": "ZqXAFijFjzUsiWMLh7GptP5AJawYcG99zRSSnbMYipTzUsvtumrGUsjjzfgnE5e3s8HLZxMr38MCJmZXMYsEKCK",
  "key32": "5D7fBgPkThfEJ2qa1kA38fYyBXne7Mu2LpN4yAsKmVsPkBEJijqtKruoPV68Yip9XbFT6u1k1C8msAaS85sS9DjL",
  "key33": "5XAGJG5NQBAAF6QiaPpHJgeBkFjrX4xWq8LY8AM3we6PaHfwwXLy1LTmZqkgLnrvG9kJPRKbpDqgUxLRyobqxRAY",
  "key34": "jLV2vcFBW8jQtQkFBj5h9sB5GkodYUMG93AkQYo4k5MHNTGjQkgteYAvetkHL1ThRR5ToT42HybJQURWYPnwoyb",
  "key35": "5za1vsPrTviVVTjt9sodFGyF22JwUrTryGaVi9QYfP4GYQSjgx74m1UfsQWCpWX53VAZTzTEngevgeU5nXWVFyJt",
  "key36": "pep2P5gT5eQcYXQ2Fny9HfF6Z6XP6Ff343r4XpmKRcrdABF3MgkNYjovsHzkaEuFEghHZACxqWXdSCg5u9Yrm6V",
  "key37": "2mqTKWksieR5LxVMzjHiKYARohBhmRxtvrYc2AY3hRex7tSVJyJR3k5eRDpYhnBhWSfb7pa1dCUDYHVX4SjqrdAw",
  "key38": "37B8rjqgADAieBpNdkgaXGHm71hnFDYtUEC5bhpGsTviTmq1khhGCAtnXee2NQyhu64U2JiGKekQgCvuojHGLTo7",
  "key39": "4ncrRiA7Dh9mVYvR3M32GjTA36iT9ENMwSaUT1ibqzwvrNuT1ybJUxq7G7SkMEJYRS3yLucQQzwcRgpgsq9WCNeM",
  "key40": "56MwMAUsz1ec1NB3AbSJF1FLARWtDnJYeA1zMf8Dk943MbsGSFq41d4xF6jMjE9UFYQuzYrjmsyvqX194LtCzcRV",
  "key41": "mzdE2K4TTNqEqQ4QELZ2KECiT2hbEXJy3k7fFA68U29egnwnevED7S37sXhmWEZNBFMenRX5M2fPWLvKQXNzhW4",
  "key42": "32BsaNtyW9nZ3CYUK9eL7DAgMaVmgkpJJSsGgXVtNywzj2GFvKgANwnGaL45yXwEhyoA6HggXdRQMt5M81wiLuid",
  "key43": "3A1BbjrrMMPGT1Y6FcxbZBLMeop1FtbU6fA7CBn4emLPzaBh9GT7mvwGFq8ZgY3XQ3mMzSQrEewkdZgDgFTwTm9h",
  "key44": "YtYr1A5DkbsgWdWWjp5DW7UJQJj3TVqHhFpbwt4hLHNQcmuJdyxNZCLD8irRaKGc6K9TKr7ZULkH6FSWMq1Xtqz",
  "key45": "2rnQxkDUgCHe38Lz3dMwuvUpTQTffQvLksWKv1HQ98LNcYAwFTHDmgzfR2j4rJLa238iKN7hcfXMrK4Mxv9hxLtQ"
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
