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
    "4w7G6zSH12dMawYZfJyBnr6sEKDBU8Q4TnUCqFhFsmcPbE9W1ejxiCp4Htc9PTa7pUxRCwKVLL1Ka1SRtvXKhmVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrikMdo9CDcPYwei5eSApB4rw3nkfhD3TkFHaZuBJoJAvHz9BpBMN2o5cCiLAvk9eNNko5yEsEZpwNmmJZFaA6g",
  "key1": "5AY5EKWgWNxxUVjXWVPU35gbzLBRkQhAfa6QbHyWkZ1jTJrMK4XpuTmExqBLEufi2xV7BDgYNeY8tLx7LFHZxaGt",
  "key2": "5MvkUr7XNWsrdcydQn2RT3GHAnTYTRWvDsA5wtNP4dPmF1brpbenfihqPSzPezE6xs2WNBttqGxPdovQdAEgPunW",
  "key3": "5WSee4E2mhnp8u1WzQVUhzxQ4eY7qsipqaernWawUhb6NmZJkBNGCVnHnSvaymmwKmyMyhV83ynJn8AtU45CwtJt",
  "key4": "62HLJqRzcHGHCJfYySK2Fs9EgYuND3WpY12spMbp37KAg9uS5gkwMUV29RMSuG6dDYBcmXgFiGqX3MnRn9FeQP7k",
  "key5": "2YhK5dFV9Vw9ZMyqc9vGPGF8YMWkFa64uEvFZviCshh2z2X4ZQdNhSY62kEhLh7w2FRx1LNybwZ2KfSnj3wrHLxy",
  "key6": "5kah6yzioFPuD56cuBiMBYhL8PgtFkaqBVtpzBfR11yiGHr3hLynrGajg1dwE7dGP69rduPNAjFYLuTeDhM8QnQy",
  "key7": "5FHNkNfbCNdKCmy766GwH6kyLCRGHRtWFuh4CETqDnfVktf1wKLk1pJskuR699AJN2VnB7AzsBGZDahdCPsC8M3q",
  "key8": "4TEiX9jxMEQuQjRDtdbB24Tcpbq9wedzcBEBhb5Fvy7vH1tTVpop9jda8K5qbwUXvtwkVkcDZXGGwLmMuf2qeMRr",
  "key9": "2GYgmQAYVJdLgCEeyPM8TeeWj5JK8rAsQoqVuXKeN9QhwN7RckuJtHLSavA7FSitqvMjpya1Bj8UWUUB2VDAFti5",
  "key10": "cNYytR3fPtoFKa9HwaJeQT2RYP7sZRASCQECg9zvgHLu58Nd5vGgpNTGTBG6ejyesmLcVPMhTTCsraWt2HUz5hU",
  "key11": "4UwsQFNKQsyRKzHfzfFtB4swyGrEDsmhf69ND9gge4efoYA2vq3TxAwsNdBfF8H7QY6mxvuFW4ipGANYdxAKb7mc",
  "key12": "5DtftBCHGBmS8vgR1mxqv5YXpm9fUbRjbxVv1fS5rcF6yrNGNwRe2pbbFnr9Tii1fnkojWYY1PEJdMS2UL6jB5P",
  "key13": "4acBESk1t1fPdv4wcKQmXvWcux8314HN7wmju4Ks66AUdTAfKBVSmNvhrQxZKjt3iGgzs5EHCQt8tkYkvRm5GMS5",
  "key14": "2A3Vx9M96E9dcqwdrFL2ScEmFLZzna3YTxV2CYKDjeimctJ1jiqop94JP1R1eSz9N4u5ufYELMVrtxi4fiaCV5Uh",
  "key15": "56N2weaKrrNbEzVQv3HTbvqq7vAUYv3rtLzvn3zjxdW1tMRDqBURFZhfFKCNgkcKCLyQefEoQ2ussAifiVSHYC92",
  "key16": "XLuBsDWNsBxMidfuSfucLuAVHPgSo8smcLnEw12Cvype4q83b4Lj6EHxRT3XJpdZBv1K5gpWCuBqvLK4yoPHP7F",
  "key17": "5mugAVqt4cW6AAhEX4v8zGJxmrA5iG2FGrq43V9fRikCWKFj7csPjLCjgh3FYLUJekvGgnC6wbB1Lp9gkG5mu6Fg",
  "key18": "4spS6xU4KtH9ShmMSiLGgPfrFjkhJV1XeT8Nua3Us8qKBYbBCJFpkv9uRvppHWD2bBWvkaC1RwCqLY8yaDKXshFk",
  "key19": "4aymGhdGndfcwx7PMRoP9E7YdUU3oNSKdb2Q8hbgqAi3uEVZoQfZbAk3zdpaTtjxqpRakyaKzpW43K7fKcyLWVLK",
  "key20": "5iDnrEVpFdNi51CZmdDBSJFBozhUF1si8APKQxRKUMdiXWz9Nga3bJromZ6grLsBwMRBoQNXt2dPRbHWq5nj8zwX",
  "key21": "2DVzwKyz53KvMevedtoDr5WN3CPuLXiaJpuchxUfzojt3Kqkg1sZkohsdyT1WETqxBch2c1bAMb6uT1nsZBnUkVY",
  "key22": "2Qwd4sGrGLTgHKxBp5hULAyyEzZYYaPE87ygCuVub2pu6ewaYqV2cAvHa6ASfgAvEYKGiLnJ5dWdaLFC92UNTz4A",
  "key23": "4182R8hVvYUqRy3BrjAnmFsNDQG2gMNMJQaBFACBa3BKoZyFnWZYLVs9ZhPF7gVBSd4hxBuJGjWWsAmVPPhhx7u5",
  "key24": "5b86eEEekBvQAAbpnss6nKoErXxLobktExy6sTTjfmkUxJj4pYyBWZcUbNm2K4hkyNfuC31bR3tWoQgx2hnUUGvA",
  "key25": "5qCabVXefegZMgjakv1FrevLQLAcYWmoV43sjVKo1nZjawMUo1uYTKNQShcfvUtQk7b1baNBEW9spEqTLE7N7BbX",
  "key26": "3s1n7zkNVoPvY2PnNGqkfMky3iKyMEwhqbzBcKH1oJCZGruZUFS194TbXyPqagso7KSKBQ2u5EmczTw2XZSKKvDQ",
  "key27": "jebDPA5DxontdX1GFdqrJPdbBqNJSSfenvf5azXDrt8mAq5bpX5AFPCjU3ZZXRsphuGGaipf86hRALWM5HNKAcj",
  "key28": "7KnDh1CTSUapqTtYjfcvba7GoK47fYSKbQiW3iB2pta5Si8saXz8we6ZXMLFyaDvukGhQcG6UXZLEVzTo9XcCY3",
  "key29": "2fZXZuag8Xm4iFtoQ5FZrpewfj6Y2kfFBnRLU4a51F3hCWtV4t15vMKzJcqPVhhVa1Zcztjx3TEHh2D45jjW8evB",
  "key30": "3t7LSUvZdcpLZqsTqb8oSyAJVeXcWz5Rp1brffgBpAYwLG6yeQqe1hLbKL7NN6Rpojh57qHoVpsAC8spanzaf6qg",
  "key31": "2ZLnrg1XqdPgsTnYSgGzDnXuaZR2mnhKTGemBfoj4PE5D2QGtPMFNdabvxRqZrSLh2LkRY9XfP5vy38axfkcx1uP",
  "key32": "39D1eeh4doTrYtJJhfx3wMo3KjxvUhjHGbSckhFMqstkk7LY6ZRt3wiqKzkPeicY1K56Peicm4NuAtD3jznLGNFe",
  "key33": "qnABiqibiUur69CR1T33YrC9hvy4L7QRR4tUKY8pPTHxCeAXYHoxMKTMjNomeJgxjTKqJwhnqCb3BWK4TELQnSy",
  "key34": "4iQ1G9ppNnFEPAnvCsBveDCpGyGEXL9PsGndCgp86Uznzvu7SU1xkxTPKbnQmetqgLyoVJWo4Y3yacJNk1YHWMDm",
  "key35": "3GVijuJfS3ep5MCDGWWwaCjYmQw9t4F5TqNPQuHDGLCEUmX4Cq1NZzNmYP4vYdAwhtktavjUtGGsEgDsdGL6mECi",
  "key36": "gD84LxmKd3oqQU1r8w99MbiBssenyagGH4DsWg9ucrzvf6j4oUWv1xs3hJ3pNmVzpvsBA1QZMmeMumtsSgRP822",
  "key37": "sfaKb5Dzzr1TmRviTC6hLWoi58tpbJH4W1zs2xsNP5AVktY4xM8nttP2HdHzs5dWwzMykUcHCZXXwrpQ7B7YKRW",
  "key38": "a5zdffLKofAxyfSTxXPqUiK29cXKVujGR3YpAVUUEy267MbvUNYm358JabQoHYcYFM4X5vs59FJEKNSYt6zGjfp",
  "key39": "Bz7FTtaMi9xFKH6cd26K9KhHkj9MdW2Vyidhyj3vXRGMu7qVRRaeZd1SsfYbGtVsSS6xjaRVZYrdkxpq7fvdKXc"
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
