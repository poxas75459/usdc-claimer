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
    "2A5goXR4CEuwZ9Xmv5bx8DTtjtBVnWZ9Nj7KuqvMXsFeSaSXUb45rDphWwfXk3vqYrFshyiycHCRNSV9Tv5GrQ3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JadcsQKxzLj5c6r1qJDYRcmLzzLhcn3uAqxkA9S6Zr5gL4vmuEPKgEjG1Hj5u5XMr3XS48EjVuQwZWX28uEgftq",
  "key1": "444UiQTda37wbmwYLLZLTfc8takwzAz3BZTKvgxYyybATtDXWGek42YQGZa51g7uVXToQD42TZd7UkJQThXXEDLG",
  "key2": "5STNdDGXFtxpW8L48ZBA2jFEq4vpZxBBXFrjxhhG5kfqGvLo1ns7v1GvbMhstgoGpdKuaqLbbvayitXAANKxu8nT",
  "key3": "5nBiBHZg64qwXJ78xXd6CmD8ziQhSKCbAzkBMPW2LDBnonyBaioevGeRCkpssv1wRvNhboguHMbFfRHfkJ968NT4",
  "key4": "64BNZ3oSbF7jczp5j9s8ALfMdVgKn3ERBqEudbtdqTujTq67ik4G2i3QPe2YkoiQ7LFtqZVdXeAA1HXse8JWYTUw",
  "key5": "668XRzeUkMTZR7JNax74rurRHNuZdTaFNpGTuseMKbJQuHxrFDHDAu1Ed9ReDrdo9TGnr7xtBBrz6VpKuM2UCyf",
  "key6": "5LbioaFzyuXYAML1Mb7WX4HhWxx3oQtgp983jAaqP2oFJZUgZZhCGSBjnJaDcANEwU51ABURgQ6QYJ2Q8Ru8eyGT",
  "key7": "4Monj6eG3r2b6d91Hq1kBUbuU89CkasiXhk2qqZtMvfN6oMjHuzc2gRxG4GSvyypBbghvVrbJyyPB5fZ4Vyanoca",
  "key8": "2bdxbc5kUyaip5mY8eQMLjwhnTErub3SbhPaWF4tgCrpZqAkcxdxxxxnFkq8oif8sDwX4nDA7e7ecxsJD7zmPzTt",
  "key9": "5XZkr7BW9UGP3cTdJpxXzgKZBdyxgbEkorhgUWprhm6H8Ve8v2vB7Cgj3YBS7nhp914GCr2DGmCBz25jVJ8HPQg8",
  "key10": "5YwQ2tKctEiTXAJADJ5h6Tmu4nhGm7S1p6ekGnZxFvWZbGL8y8yRoASveRj3HdCp411otLgHQY52VsrJyQALH8yb",
  "key11": "5ArJ1GxML4AnAALMR8aYVswA1kQNzdaXXh6JBGJU1ik7GhBYt8TggMnTLUQLDQ1Tu521yf2m6n8g4PdpyX1aAwKf",
  "key12": "5ZfGYhjHwnKo8YxChkrB7jR8UmyYCA9vtRs165jpjy4hneGgt4Qy2cqepWos6d8fbDpNQs2zqmjaZ8URPodcTpq1",
  "key13": "4gcnQyFZdSEBZUxC5z5ySdsrDUM7FNwjsV4GEBa9M7SW6Yb3arJvQCX6TRCYVxiJRdmsTaYi3xUm1eEa4JJTLfpa",
  "key14": "3VRpfpwrL1SUyEJdBe8NWiv8eQH9RYy7K5yyXVgWB8oVtwcdkccmM6R3DC1q6ZUhasxtjftZW4sks4PRz7nhmmwk",
  "key15": "23C3Nqj4ubVoeyfc1EgnmdERv59mqsJLdj17Acy1UiJmDWwSzngpeJofEeaw9TRqurDhHgvmyMeen49MP1ewAE91",
  "key16": "2YbEFexQ85hQtR5Wx2QrHRbDZMQxsKyi5kpbhJAVr77JmKXU66MyeYL1UM9SjuDwqBq2zvnruCGecu7bFEsMit8c",
  "key17": "3Njj2Y6jZBPJ4RvRnVz8VLFERvGrikdD1DuFnFji5XodcgdVtqjYuXypF7JFuJFWosrTxJPLJonBUuUGtxjbpGrw",
  "key18": "Wd5FQf1gC3jELV8MtKuFFkExuehWHnUrBChwuYfAqaknQoyoVwCP8vXuRAzcqSNMVcAC4B3YmuAgYZuRoux5ezJ",
  "key19": "34LDjQJkXBgixeRNCK2kzFmz55oNamDjHeRp13QkkJMVM82qs6fN7NRE7t2L8anCfttDQy32CGSxuK2EfzquKBUT",
  "key20": "5tvHmtdXFHHgExkjG1n7T8DP7dTQJhsMpBYBu5EmpvpQZYXFxzyopMF1XkUkwQrGJfAYPuyKRNq3z8GeXaHASr9g",
  "key21": "5hW8NhsjJEUYfjbSFmzdNvvNzMfZNaTyvvAXzXct8xSZGb5Gu895vrMghDPQenhby2ka695jAZruqtziZgquvP1e",
  "key22": "5wcYvnL4jkR9AL3h5aC8PRUZnqewnj6E6gvLNiGdNjpBJLv7VbDXKZ3xwmBmHyb559pB65FcwXi3YacGikUanS75",
  "key23": "2UbaQ7Yp2AKFz8QKiZ3PAx34hHETcKTnjAXXWAh4eEuJoT93siXXVMUReJw38URi3EV8tboKjvs7MjjtJ6x1MEzF",
  "key24": "4yUbRUbByQBvNprC69j384JG4YhyWUpDRZpLg731hrcVpGhzT4d8Cx9UQS2LGMiD6m8yYhsuXu39uzYnEVuh8bWm",
  "key25": "i3AYX86gCXceqngryaJT2rkSV2rzV34DW9FRtsLgsAs7jyrdpEHpSfA7isV9b3bqEy2NUHQ3ApEAeVKr6BJjpVk"
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
