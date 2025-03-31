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
    "3wYPuqFTeT5J5CmBjRkRap8ABaPqFDf9yPbxdpijfSaMxTpCi95zjBPqyKecbfUrfeW6EbritiJSmtap1vW2ewkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuQHQdA1JiSnK7rVA5tci4CQhfTNS7fbdUJ7NePYFSzsgJ27bJ2VHNpEood921bwENjbNXAeNBQB7mHBa7vzqEc",
  "key1": "4dcrMjBJZtp48h4TQFXUL1RpfzaMyQr6D28C5KiLPvULLYhrkQgoUpfQurwQKeAnd7sUd2yUuHgnwne8Cw7swtGu",
  "key2": "2A98ywj1ANKo6ZvrEtc4dG4dQdYt9PbuDgUkJ7XbkKCWx2qQ3zirfX2dSPrr8BRtwt9obANcXHTYXDppPb4Uth4A",
  "key3": "5du5RNykphn6DWNZLMfJGYx6vBjUUpsphHttnnkq5e55Xv98e3fBkQiEyRPPoQaWJkAQMvNKHysPNAaTpUx4UxFQ",
  "key4": "5f5QczTME4TcMopfanzDMFkUS7s91MZ6Pnz3cpba2XJBpZyfcdSxEBdmeqz7TimFU64sqhzSBevDAzXG1oJwvcPN",
  "key5": "jSq5dSVLdQf32baeNtEnfqaSpK88dpANMaYTpc8pqobyhFkVYMsnvUiCdc1ph1AYfNZ2fdxss356uS1JTpFNgPw",
  "key6": "5jS1MxpXbJ7miZaa9SeiKYyy55YWmVFbTo5HRS1iUZfBx7fb5huqyaCk3d6Xk3jGjxEBnkvLexsLb4xACH33e3Jh",
  "key7": "4vL1S3WyPMd6z6NtfhCW7oqNfZZYTJ3J5Rn52pAsP3CZKtRVKPSP35FTFisU5HEiHsn88ND1YHz7KHv3gEprL2cZ",
  "key8": "3K9zKnFSUDpHPHMJEhv9N7T5WBEmvLCKTC1qzsrF6RYGJAGAuEsZ4cwFoGvJ1hmiCes1mdRJHeLKwjSgpbhdeGvN",
  "key9": "BPbTMaAGxtUjcT1B3AToGuemLh8r2T2VzBtYZyvjkHUJ4PHZtJs1uwTPzBmQ9X281xf3MRbhgbE5v4Exju1taAD",
  "key10": "5Dkv5tph4VJVPcGm3yDGg4aLBsTJd9azv1nhcmYSWr7X1ScJBWy8NjS8962wPkacnFyUTDTmj5hfPLMajaz671Q4",
  "key11": "5KEqTKaF7FnACYKEdN1cfckdQ7LBJ5wmbjDANsa6QCbnNBQXZtEVa6wCaubtRZQxrVjzqAPTgsTpXrqTKQ9QHsuG",
  "key12": "4m6aqLAuFHdP2RfYceCYZK4U6wX5zUKmzRHNtcprf8C4XMKmAxeVEcrGEu8RoKVx6Ck81rKJViHgd7Y6MLeBDNMB",
  "key13": "2nYoS56R55zoWscHycdRXceDi35LBLh9oeQBHyAP18Ktiade99GJaK569UBJN7916AeUVQdE4VHgiyAeA9YyukPZ",
  "key14": "WC9MdQJTgwwX9QzHY2TKgpWTbWBxzCN8i8eUsrah54aoubXYCe8KaLLJnZLLUfobVzUp3j5JmjsmpKp9BaAYD8b",
  "key15": "2sDjKhtPXSxaKZifhVcYSEzMtmiJJvm18nEwgg1zeLPr1YPtsdcvwZkrQBCG8TQDfFWvXkCxTyGK9yBmF44RFiL2",
  "key16": "1fpZaX4NGQcgbHZAEuqx2f7HYKvCrtveyJXtheRks66hsJEbWueyN7VLmXE95gRA5Pd93U1RAaZV8uDJ2fR9PnE",
  "key17": "2aDsWTr2ohcpJm6Y4yeufcgDR58tPUGLUaMDE3zYB5s3NhBgrqJMmX3TTAAvUEjYANLAMGUrNQCsJpgabpPAkqCD",
  "key18": "3dif3AuYtNMPcibnos61Jzb4yHJXpSxS9qpuzWB9eYcBeH8BFEyybbeMSga2SRqx6JAfuU8KjPWAWpc65L76KrXH",
  "key19": "49J1oMMjwHXQCxqS3GmR9yTZtZcMgzBsp7TkYMoP5AzL99Eu9niKdmhCZTB4Hn37atybGGA67ru7sb3xxRx2yRCi",
  "key20": "4GN7A7urHeYgS8XkEkcKhjUbBmHMdUpxGjLXmhpDmYurTo8ZhWzupgTdDbnACnoxFS7FX76q4Abmr7ySwWthWxCA",
  "key21": "5v9gukHZnRyfBBohMxEEekGnuYduneFzLAmLgSd3nm2rr3tmgpt2hEv6V8ZzyJMAaU1tp9W31AdZHEr24p7KpcLW",
  "key22": "4rgyKoUqqZ6Bgq3uLg1VWKrKzxGy4a2H8cGW46hnrXdXemNpTBBpBjPECn8p9o9nK68mTRF54e8CzQ296HXSopEL",
  "key23": "31JXbkdeAxshKyywQiLGS5r1LH9ABnK1EVraCmskbj6FRekPQED8AyZmkcCJx3YWEWKPWAxaK5RtZgEgjJuWwRgK",
  "key24": "3JNJhPsBe2P397q57VTFf5hqVfEEb4PrLTR3MZhEjDaPM1X9oFNzHCPFbKQRgkSBjKkaCsgvyjD1TLRqntq32HnD",
  "key25": "3Kd4ST7z8x2Fb5GAVqmtaH9ym61snfPNV1zTZkP29i4bJPogyZq8NtSEsGqs6bVhJGYroq5uGyoSRfGZ6LbSR9Hs",
  "key26": "tYNG9ELN6dac9EBZ2iYCqbFFxLdvV5aJiCZzHzvVGkD22C2qspRjixzyEBFt8La17WMhAFkAKZnGE7XoKjrm5iA",
  "key27": "4Uuj3iBp5YY4efeZ38iwgxvPT4ryBh6GMHQVfTh3MMXngxTLHDxCCzeYAfTDhPdnyqU7wawxdoMcx6wuo7mrMmbe",
  "key28": "4oN2SfC6x6q2ozFaXuRBFYCGsRNuLgyb8oMSWT7o5kGJRu6dgiZxrXjSJ8XvvnzYXgsmh13Htb4D6sj4YwKoknQ8",
  "key29": "3ZHuuzfT1s8ZTx95HgPEJdJspBVydMLwBZXqKcCJv8c1s768abSco6imPsYxqMYr5ZUYTovRZZUXfBqHotVJ43c4",
  "key30": "4tc3v1X8XicKJ41gxnVM9qDQYSNUwMm33wBE1oihcMCJfzHX3ySqBirHjVEeB7JA1PQ7M3bPLRE6Bbfp2UUZdwM",
  "key31": "4Tc5jPJmbMgzgHvqsYGtdD6e43F91bQACbaztCoJ6fQywW3P5TF995myHLRd5AMfWra5E8UD6x4KoTHpaqV4gswA",
  "key32": "3627SZ8J18SWyEjYLTGe2SCD6Esi54S8BqPJ94qwexUetMp8QMLJtMYTpxRnGPUXjLPGUeZPGu3WhMaLwZk7hBru",
  "key33": "4kxxC8ipB1BswFT667yo2C37ddZbobpqVntfV6wdZ8twRA6RogA6upmbgFT3hvBVYY7caUXAmZ9anevzH9Hrgabf",
  "key34": "dJtq5i2WUa9fXvSYAxGipjqn6G4mQ1noNFcucEbqyxnhCuV2jg82x77QXc7fMGMZrZZxNu294reUamUYJV8x9Y9",
  "key35": "2wBYro22urE1Fr7bLB98nF5qi1zHSyuG4L3cZhVKoECd7w7cDCYEJZd7rMCrHTkSs5vr8Ay6Emw5k7MMRt5DU538",
  "key36": "xQKAT98tLkh4inCLQTa8DscYY6KQGqqBNLsvz5bcRsEnJdD9mpXz8UfWXtBau1QHZtmu9osqaozsu93ut5KLqJK",
  "key37": "5bFcn3rbqvrY8eGdHZepNkC17kMa42ND3fKndv3HiCwkjaT9c3eqcKVhvzxEMKnqsdNmRUjt99dcH5Gr2nLTNfbv",
  "key38": "2oPGxzUCHQgJg1oSSCUdrKfnzuHYJFsgefEqexpijRMVvXqqnVVfH2na1apAT6tb5az9pS8GD5Wi9wvucPcsNMhN",
  "key39": "576PgKFqG7K4c4kF5zteNXpx2o8hhL2vY1fsCMYbddLveHKiyVyMipBMdrwedgmTJFXSRVm7jYzjqrozyfWP4Qxq",
  "key40": "2v1q7aMDQcVLmBH1HAViRMprMt5n3XMBfjTBFPavCNAFcFvPTGd8M7ubTP7umcGV8eYZUurzKFBJ2hBexpsXzwAZ",
  "key41": "32K2x7JLrAwRSZ7hFUzgLe8Dd8qFf5Yy6asLtWum1H8teeNcWWKAvTpzTJXb8Wh8SVfwCiaRE52B982gHQ6mRTE",
  "key42": "4699E5ETmYY4avPMv3eJxGYxRePZW1mFyvFmhxc78hfWQEg8FbjDsDAbTpnZM8tpVmhBtU9V1zPZLfivBscbwL5y",
  "key43": "3JR69nMNaAPAe9Q5MUPWicN6SsTvjKoduAMpDXtYH2MCXXENEMGakB3hKzhiQVExD9QgKKpb37q4FnncRVp2JQeW",
  "key44": "3fcCDTiB4YhvR4BHHeoZXBQWJRThvYnXL6omYZmESRzLHpCmigE5pqMRN5LAJrwPD3ARM2eHA8GbuCuwZgNo7NfU"
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
