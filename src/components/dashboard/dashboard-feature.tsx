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
    "5PE2HKWRsW78bdjxUisJLxvnsBs778a4nPM3vDQHkX6qFgnVtPoV9LJU4nV2YTDs7Ss9XtSABjreFzduNFCm2Kzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tANAHqjMoj1wMFenvV7TfWLQvV19nA7ZVFskbsu6SpQdsQyP8wBHevQTmfHqdy4VFoaBKahYYHdGcf3MZXQbBm",
  "key1": "42mwZQ8tTfUerFzDmdLWxBMYqxpdnemsF6iVPF7qjA1uC4kFXRKUjn98rwR4oBkM3Ph5rRbG5AbbzJUpGpvTSGxP",
  "key2": "9xJhdNumvVG4uyS35KXyURpoZwPhVWqcRfkcHewbYvjEjys95BqC3htX3Z3mqEsBFvmvsodgJyCirqk5z2iR74a",
  "key3": "2g3N4nzJEAWQ9wYGT9Q1wUM9wbdENTGEetBcTnwktZSZMAXWrdnHuE9FVrJgSKbAr9UqdBt5QAvPYxFpAhBFgaLr",
  "key4": "3DM7qQ5ZZm3d3f6rDF7gkqNqT6pM4oBpATKNkJbiGvhNfFDrrRc4kwGQNc2V6RqhK33nPWyr9FVS9nZz77cWZirA",
  "key5": "3KssPZV5i6dNocL3hSxB2s1Ref3HeZKQjYDYPv7hX1qwUrx5YjLvCneELAaLyZVgQ5aZMwAK2yGzcxdWzftVAaUG",
  "key6": "3ivywB6g6wEzrXTfs8TMQonW6dHznK8p4s9xETdteLzkrkbqhcH9bGCJ9b6y18BuHwL3FUUD1W9eVtzRWW11L1gi",
  "key7": "zstqEhEqhwa3EVH1L4ZXahT8Fw738ZZD9YohyRrw9zKs6KKui87rz58HnwkGuwW1yLdmfXaW17Trm6zdWHTj4xT",
  "key8": "3Pqg2vWhKfiRQSryQPNbKJukgGCidHmKt8nRqyvjrHgPya1vu3LnpmLtQ3F9t4iKF1zerCKnU9XzdtJhFjBSRZS8",
  "key9": "25EZKEWwVVpzJK7hTQxUii5yfHzuGgp6owD7BVZpM9RvhFkiz9mNLU4PJfD9TjtCQdxeU3NZdSPuG5shm9U6xLFv",
  "key10": "9B6GAyHmLPtCBKowrWF7Q6h1ronYpJQKqhKa3QhuMM2TjoBYYgrCMudSnZBxstktdimQBtKy3hugJUP3DeAPFLA",
  "key11": "2daBaFsqhVXzZUGQhSZGC92pGpoUQVaf5J78LUZkbbZC5zJeFmd6uH46HgDYzuhjFWquxj73U6usjzM3iQU6bxCA",
  "key12": "4XkL6EuELKQtEbm5SLDLBTjSBpvnSSfKNRDNHz54Z1XgYvxomfnpumpRmJhA9WvSR9SPwNruhZEiwzZJFFwittQq",
  "key13": "4uDt3vUJW4YEvKQocjCMqXPNPL88rE6LYNrdqgUbUrnbhx2vebubvMoUasdkEk7G1s4uND3jUVrzd4vk1mSEMy3d",
  "key14": "2tZBW81kTbANmgK9pqCCC86TTYPucpzs2FdSDGiNGdsMwpdmjdXrdRethWu9fsUJGMEEDjFKU4wSJc4Z3ajhce9p",
  "key15": "34Wsk3NohqhsQ9z3kcqu986ozy3s5zWDHkAuGH1KGMDdaKGDUj2BDHLejc5rCm43dCtbzAwWLeJYJZoBTggjonHW",
  "key16": "3FbSWrbY9Uo5N7CXzSDthVJjqbdCzcZ4c9MLkmFrJXrntMsckuzkWMiokQGG6ismmgpGFMVWUHvXBuozCxHudfHZ",
  "key17": "QSoBvcsKqn7uHUxB4RbfzxM6BED621nfP1nE95c3GVf1ggrD7cHtn15YQB5BqXWM1FQYuUQmFy7coaVhJJozZJu",
  "key18": "2avvK39bH6KWYJrFvnvWcKhTQPxXsTnUMfenjT29W8YQtxmbD9DN8Fnffg6o35yeTF3MzZSD6qPMWNRY7QU7SF6Z",
  "key19": "5aZ4DVqcNcbKVY29veLiPb4Zmxo8mjePoqh8mJVVZiLznACLUoCMQGVB3YGH2XVuFWi4JpoASzZWmPG5oDNc5Y7o",
  "key20": "2uzA556cNaAiRyPMnQAmbB3VpnxTEpszyPHzbFsaSi5uJ5UFfPR1DJQJ3UwQQzoK8brnshgLBr9K7T5VYRcJwRpw",
  "key21": "2hX8shdibncLS5ye3pAGvXFkpRiotxwC2t58fr4eukcvY9dfMfC127b8XFiANVwg8f2aL6AXcdLJN9qikxoewVn7",
  "key22": "4Wgs2vouw88nNZk6qJXwrAJQx3K6KWfKT3YUGJGmQow5GAXbpxoDAoZv2NxbufHKVpHV7cxPPNAV18fwXmQtZA2Q",
  "key23": "ReNtNwjsnivEcfKQ7ZTKCsppGSxq2Gdv4kk8nK4Tg5XcFpmaqqBX5vgNZTmmQtMQiUd6p441G6pVHNL2Jn7VFwM",
  "key24": "5Xsi4S6wf2pEfa4o2rddigk49d2gqni17MTmE1H6jvy6o3LyHJTF7kXsSfW8NKaYVeQhAZDmUt4ccJFpqgrJqwo7",
  "key25": "4HZw3kra5fLVTr6Ehpf4vZitJhRfPaAoQJZo1nVzVpyGkja4A3uWrzfrvGUUHEoLdCsNF2QCTNcHitmqTRMzxgX5",
  "key26": "4qGp7GesZ3mP3XTr1LbAmMUf14pn8koFXTWX2F9gZtTBrxMckpVCS6bm7Pnfssj5KCSv4nt86Gm5bsqH3mvF2Nbf",
  "key27": "53MvgmxQfBXokZnxLTy5vf9Niz1tm6w1CVuuxbn6t29oDbbN6QwDAnpdgBzYJw3QzRJpMGrSCJrHCL1EGV3VitPc",
  "key28": "3C8DXMshxf2ZsgCGtzw75X198BPjjUQqwaHD3kQYtEKhK4MJLGJcV7CAFZu3eBG28qvnb3pViMnuP6DwBd5L1ZTU",
  "key29": "57VPzSgm6VnL6YGH2GoZ29JkaKZ5XovZ35saj294jtYm1iHrNGVPscVyhwfbSiqffsYFFhTNnATFTiJquvR2yjsS",
  "key30": "3dCDFVk8DBtcNc1Uf5L8XZBG4wZQ43nYFokbEjuJmTmk8ejeFwcWam54cbDh5eGPGrSQF5KK33cRnXMReJ7H9TNH",
  "key31": "4jbiuvLCzrPba6g4NNErup7iJivGDw7ifEqNJSqnFS26Yxt99JmrxtCuLyGf31BPomCiGo9WXqcqubiWZSLcrEXf",
  "key32": "3UmJmWRe75vjNJJAuW9ubizge3rtxmZ7ME1QqGrtRLQ9NtG9iYKRUU5WhBHNzVozmieHTKercKN7dYDfsz6tAXsT",
  "key33": "31EbcjB85cYiYK7CdPXXuUAhBAFqCBkF9iq2f8T5jN984rkTffSeo9VNLBwF1sP5UUbwSbM1zFdwvD963UunyU7v",
  "key34": "5nKxqwasn9kCF53cECFHCLzoa8q3ABPPr6QdQN61t4iq7ngxvvNnwRFdEFVGU7WUrN7Nha7UVDLmFj4DgzizRnVi",
  "key35": "4Msac8RewXVnNCan4zuMKzadoVsztMFrR5ouPb57Miab7ScZeJkifdGxWagdT5HimDBNMxUtn5A1UuFGoRmn1Jes",
  "key36": "126XwRD2kmWKNSXxbqvtxPsBRbva3igFQenK7D9GTSCfKwpaYeNr3dR6BkY5M22cqLhpoFwqhok7S3fqSoEuZtKx",
  "key37": "4mk9Zw2s2d5vTDmdm89wW88pY42uotVigVfe3grdYzwgqPCNnj6YUHhPScCzGjAHuHYFK1pi3Bxhtkdw2BPSRk3",
  "key38": "2og3xZGnabRoenBnJjSXhEcxi8dymH6mbFa8FpbMDyztRMs6ZzFwHBrV3sv2Ntg82qLiCGmWrGPrYENx8fXQ5XD9",
  "key39": "4DZBjdi4MLvJtZX13RFC7z3tBCQcMouUrrRd1xzwi1BYtZcwNUJ7d4HtjtnPEsjadKnurEYNSn2iJ6ZTyh3m2ccn",
  "key40": "51nQxovhurVqs8cu1LXaRmnpHTT2LDqKAo9N3LpajEqgYsfL7njCHo4xvnHsfoz78nccxwxKgNAKPVrpn7U9DHp7",
  "key41": "62tv78TwsCCKKEkJpcGJ73METPqfQRzn6mUCBXBUYUAahDAxt4ZEDKSmAZ3aW1YTVxjBKcqL5cDH6LtrJq6T43Rg",
  "key42": "GyPFRGYJ8JHmgoUXdhp4CTiw3wxf2pRfB1Ymu7gFiMwYJjTo2Meb9R2ZvJBzmsGngqxRPhEEWWqtHfU3vbT6ABB"
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
