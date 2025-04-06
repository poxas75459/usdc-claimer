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
    "3stoUf9na5smKH1o2pvEYH7NkkkyVkdxGJFb2m7kbppmDxf2uwLpavYXuU3rSw1R3pUzfrhYGaS9zdcNHZN5AMfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7tmcn9DroHJ6gqR5pHjr5x4fcByDXUoZ8WBpfdxRQvhyPGVi2WHwQWRKo9ZLv1c2tvhXRLeZRMB6SH7EMmofGN",
  "key1": "654dRXXPg2eoySws28uPY223eH5a6uFydg78Sr9xUhBgn7JSWM9ehviowfkrqmd1DBEXyeoWsXCPKssc8aYVDZTA",
  "key2": "5tSaPZWhZWBsduY3D1Pf4WyXAUdhss3jdfEDuCfeaNDmWxwTdAzm6JpsHVhYfGWQzixKVWSM8NGKtf3uy81X1XGP",
  "key3": "2A9jQCCncs26PAMTNzMc5VVS9rtuPN3ynCjaxfpoAdjyFgYmKVX7ebJFygtReKHw6ASrV9P1w7X5xQvNPPCSzoUq",
  "key4": "32t5v5u7vxKRJJUqojKzN49tqMKhseKLiPG5JyeZnkLj2sMncpsMFbN49DDrpX6JJm7iVGnR9naNDaNYXTqqi7ZF",
  "key5": "5q1nef8hkcZR5aoz64hGFPk4YA48tDfZrUaL9jzBU14Ft4PvjthJSDPjMxackW5w4Qo5orb6eHgHBA7Q5wRd4eH7",
  "key6": "DUwVRYNW8nGK63frL4SFMGECkc8c8kjVaSUuXFVVAnsCnkHG4awC4783rswiJJv1Sfq5MwZtYVv2ZU5dpYRvwRj",
  "key7": "TX6jVrKgPF7eq9pvfgZivwZRKSZLSZ21s5yktCnTmnwhtF8itAxkqdYBqdCF8xFrceGZCcdTN6UiTzrk4KzTmZe",
  "key8": "63j1kMj2xo6WY4kn6hqMeVPUCxSVLbCbzWwsshbzvZYd42CF4w8PLqM8LcJGwLeLSK5R3KvxKUJvZvH5rDMBtJaC",
  "key9": "33GtgUFjfNuoknPfQt83MPckiJydagxz3Cn6UJTJnjzyQZ4dBjgf3KA9VVNpgQJRHNDbPuWzGDuc9MQwMiv8USdk",
  "key10": "5ijTjJJshUARX3iS5XJ7o15fJtp4NXLBsLCQ2AcDSvtny3JKDcLZzKzP8BNGrsthTb7VGftrBYF2QUGPug9sWzC4",
  "key11": "5tSrFJZTRork8gJ9aSDAN7GTUx8Yt2s39eXWdTJWjhVqGizvdWzeZhoSXKbsSvB2yqGEdZ86KfhSVoQFywbZdnTN",
  "key12": "2VnfhFvND4gEoaFPPmTznCYYNeMdTWBsnTA1Zfpu8ATdtHXGjDYoCRjPTTquSBVDUZKz4D3BtzAdVM7bYZwTLcjQ",
  "key13": "28PYmdrcvoCrcoGUCFZFjK8veu6TzqGWguKczhaHdvCYLH3jDorKP28WWHQgB6tcXuUPoWLKMjegrAiLgzJBsTbR",
  "key14": "5RyRqtx5TqYvaa6abtkK2bauYPdo3dL7euxAq4PTuRhogeNpYSRTqxoz92i3iEvq2ftJS7MZBb9cmRrLDFdthjAH",
  "key15": "5agxoFtSLRvcMXWXjWzJQEcXVvRGpWkzAMtH9Qx7GsDmtV6UYgqAxMmGR6kTVpVfoo1NPgQrWqpmH3t1gP8jFBSX",
  "key16": "6537R6JoACxiGqtjLpcxbyFQpjgunG5Shc5JFWtgnxDXaTNPrvNdoYif9co8XGrcwwYYEWFAEJ6bonXJiMR4mFTE",
  "key17": "4QmEY2WZUcBGneT1EduCNxrgoTPUXQLUw3AW9C7jmU6QhPo5JZfEmfYeZ6Quodj1LzdCaTmQFcEZpdeWDcFWfj4p",
  "key18": "2tnJJro1mh3JYRZnuEPwpangDdyqmszrQGk71W19HAC6pGQhnwZg85Vwvg5a5suyZKNWoNSY8QfCgv1mEuG6UCz4",
  "key19": "DwUXEVST77u9DMe8bzkMYSd9Soe6faaAJu37UXraVEtdJF5dLKQCsAFAPWn3WzocUiDD6XdBU55VgGCVTyT4fVH",
  "key20": "37KaZjmsoXMPy4BHmu1ddABwoWUBrWyLqRF2N2ZjCZe2MMUj7SrXi8QwSDVRE3WdGEnh4RWrporcqSfSfX3ih8MG",
  "key21": "4BG9DWsNjNhJutfAhNX4DiTpQK2DWke5GQCo6647yikekq1AJR8ccfhwXCgYmndeRi5e2J9romey8EyNrwAxGQSX",
  "key22": "2tgrxbDGitgpgi9iUtrpTPtcZkjbZtnPAMxRk8aJbo8thZY3vDV3ndYTR2fJqJy9E3u4yRwa1e95PRToDUpj4HhS",
  "key23": "VwLHM5h8uh1MXn85xsDe8Y9rK9jNEke8PbLeSKXR5BMHLqMYFLU536fJS36dMMThXyTq5d6YmEoCG4rg3LUupd8",
  "key24": "3yE9pqbcgP4MgUMYZp1nBybqK7jrMae7aSYHuWzKXt8Zfr8bPigaPcWWd6KGGr1t6uAkdGDr8QUHtzFNzyCXY6zb",
  "key25": "iuQ6Z9iQTueDk9LMnTrGCdcgWeXeMNs7p5Nxcmk5xkmogCojSoKwk9AC5WZYMS4ZQUnS288n79nYWQcV5seCDeN",
  "key26": "5YKBPtoG9QfygSQAYMuMSN5aXj2HhiBJh7B76oQwSTakvwTwU6G23JjRihqQKB5t6pFt3grbMzLFB8YjvSWfzBp",
  "key27": "5v1Pca4PywfWxjE5Y6qYqzZFUg79EaEokd7sWbK2445BjRRvgPWdminASMSkc4ugsdcGfsagBekJjC3iVVW3RGxr",
  "key28": "3SJLtWissx7cYretKaxAGZCy4z8x5nL4HwVMiQRf2gtps6fiwBXcX8cKx4z3fPgpGLXsu4dcc8dMwjUt2LPcUazS",
  "key29": "5FZNqkPrPC1sJWatNSDcJoTi2o77ThTBFiw9TiFZ3Jm1ELBtoa1aLYjB3RUofYM7VTKLSQ2ivjPAvgGdaLxZnS3d",
  "key30": "5b72iPikouUzeg4Yh6aCvvCyrPBAr2xy89QD4nDucLKqVZswGK9cZAHn937vd4V4HfHuvweWdapzMGXvYYmTkSST",
  "key31": "49nMzqLBnwSGpmQJ874FsF2dixXRojgp3ACa9myU1midvuDaRxQTm7KW3APGQSentGFbkPRbR8ATQhMLVSk1jcU3",
  "key32": "4kFczZnKKbtUXYiDdACwy7EJcgX9inAeLNw796kNAfnaqTcQE63wK3UQYVF3ZhPoPFKmgX73JvywCMmR37s7UvtB",
  "key33": "2NK55sHrMnU2qy9zKB7CHBkVSyuVfMxBmZmE5n27pCFbV3BHRjcMNvim58U5uijAzr9gBV26VBgqvU2vTj73M5sG",
  "key34": "67aDkpLAeNfrAWffUVQ1PhD7NSmiLapYKUUW4DXD6U6anFkjP8YqjegRaCk7pKnyJBnz6AbrpRHKH9ooEuk9BkC2",
  "key35": "3NNL3kv58SUbyGNYE8PAT6H7L4utNFVdcLJc8rEKFskLyyZgEcqE3xuZptB55A6oJfkMkyh3tq4LiX6VCGPAKAFx",
  "key36": "2Z1MAuFyigsaNZDEkAUpP2DgJtHTCug6D37x9pJDDkr7uq4WnP4cExtdUYC27uueKSBrm8oCQZ9Zd8XzmYosizH8",
  "key37": "5wy6Y58Lu8FwFSUr9FTMdrGg3xwWpWAQqQixc2XCkjmKH7RjW8UgzCCr9jpX1n1Uua6tkRLCZRQxXeVgG6VvTo4L",
  "key38": "2MLnQQWkGmJg1UjKpNCpdHrYmfFP2SLZFUWUCUwutyAfMY6oPSxZCLqL3RXXvLdF7WY8pMjA7Pa3HK4Yp8xZgU2h",
  "key39": "d5DEP1TKbd1FNibRT2MHk6fA7Fv1EcBTTG42bmMcgo4desohJizC6ckfqBKQNG72jzByWfznGf5kn41d2gXamgX",
  "key40": "2dRjQrLesP4qJ5UVn33Yrn1ajLcwGPPTLEFhfFycmFWY88QVoSnoEJvxn8b81PgBkFq5iZvpLTcmeQVD8LM5gHhU",
  "key41": "2Niwwq1QdYfBUDA4gWa1NhvqMGGewqpKpRuu48FsU1pU2oCDUv5C2wJKH9yznU1WeuBawpaaPhfivdNWJCN3frmp"
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
