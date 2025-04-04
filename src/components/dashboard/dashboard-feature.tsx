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
    "2yFduZcxnknMrHAgDHXp6mNCAHG1iWAPXm4kHpajD9hUKmvTR7KoXJsTyfcyBHXXmZGLwmRrmGvp3idCYyezuuMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNX9HUDHyQx2TFSSAzhUrzgF6SBysE9FypXfzX2NnwammHC1UbLAn794nYJtQATU4DCuHR3rxJKbLaEBfZEubWT",
  "key1": "2jrmZcokXkHQW73ezTpoLeM4yWJSh4N4LfSHdv5eVMQW86cWrhBXQbLjv6DngpP3XZ7CymdndsPYwgaC4QrdsL1r",
  "key2": "38WTDrE4FESUDjBmTiiX5g3XxvyYCWku5j5sVBDvUF94xanDQLB8emiWkWqq329Tv2JqAHUcc6rsosT6DbfutsBW",
  "key3": "4fRSqm9WJicu9Ci8hPAAZCtRvgXqWeX3x7TRt7FcQWJJcU3W3LDsqaRh4r1GaZ8c6tL5fL4iYRdGSVVozx7RpEnC",
  "key4": "4uvkaCqihyjeFoSXBuaZbEUAmcc672WKNyGzE9csewVvnHZdK1a348G7dLeE4WFxHCnn1az8H1EFzfamohj6ryaw",
  "key5": "5VNT9V93XJozmyTt5Mvnnhsr8s9D2WFETiCnxShrjCmgyNb6H1XTrndHmxVGxXUYx2WVYC5XCizRw5Y7CuuWvu4b",
  "key6": "uN9UZ1zQGKx1xCu2hpsXH7VzZwxcSbmYGMiDUCcv2PUKAvy3A4opYchR2HUubXpoYKvwngB9uV5Piq2DvtgnScu",
  "key7": "M3NZEgBvwUeGytpeQ23bxdFSo9bgmCuevT6neWzD3aArjJVHBCXCm2u3R85AFvn7xpNkXnCQFASnKUMoJHwsbKJ",
  "key8": "2F8zfnfmbGnpo6viMf3uh62Hfbv9eoap4rfbcN8fLN7nQhPGCgGKHeiSiHPeLnw8P7mxteo426bXdGRWYG6X4XBf",
  "key9": "2rhfFMWhYGMWVL4X1vVVbjZBktzjoLAK7ax7u7eNezi4e6PJyAKJaoKkMDvfNq68yJe7fRQbiozfNjVvnD35L5Z2",
  "key10": "479j7seP44Vd25f2NeRdesNAAsdoFYkZGnrvKuChAnMSeZudPiyzjwwvJSoH3ymb6mKJyUCPWRHYpZfKkirn3BqZ",
  "key11": "2tBkQ7N7xAsj5MDMPENuyiYBhcjXcieEaREq6EbB3q7Lpxhd59VLambHNQVqoaKNm5LxM9h931wfWu44Z9hUWBSx",
  "key12": "2Sm7mySgYheuuw7CqD2GZ8dfHunZi3UXuid9pGNNh8XuxvaTTXxGAypz7WRRt1GQGAcnSC1n9h2cTvjZ29PTzPaG",
  "key13": "66n4GUkLhz9x6svjciBHJjj7vhHUSjyJTCJSiYJg3uG1owxKJjyQNtMUFTJw96trdGHgkta5Hn4nuWJzZeifdKFe",
  "key14": "3mSN5JWRZ2UhiTEoJTbpgikzRrNJv8qXPEoyqXGkMaRVavNiJzrNYYg4H7hS4ijk3NRQ11aUHM8awy5W2Sy4GypH",
  "key15": "2tz4kMrKWNfiCwm7nsfDf8VtVdCeXtsbJCQn1PZKzMsodFyyecXobfvNgv7uhtheaZR2mMfXTBj7YU3wY5ic52wK",
  "key16": "5yGdPP5xRja1mETbYkCq2v16f8gPjFrqDwLUYfQet3y6QVozqCtbf6redcgLGPW6817aHFJ926fso6d2vey9dPnM",
  "key17": "25vig1uZ9R2mJ1YasZeYekzEyt7upyZVUaGoxpQyQn9z2sS1USz1kLLDqP7Wd6pc2K6ADKQjaHvF2pJjTEnAaGYh",
  "key18": "4RHeegUcMVv5bQMuLfxW3WXnKR52YKcuiaHkUuUqKc84fZPCHzn9e2xPjNBSubScZUTJV8Zjrd8Js3icRMddDEnL",
  "key19": "2fXWtt6u7jgadgeMRTeLkMpyk2sEYNxTpLForpAxV6q5fvyVhxc6xyNw28Mso28x6PPjStKBxAVG6hK6qb4tHwXg",
  "key20": "2unoXyBCe48iNKozPMtPkQkcwE7aQivPCbyP7N1UJLJ5t4gJyq8mfL8yPiDSsbdqTUarpzdPcgTYavQJhF7Nh5jk",
  "key21": "353gPqoaWkStrnDdLwRpg4tiQShx6FcL1S9pQNMm2xTNXNat41pXX1JseCQaL6JK2R4j9tdr4zpnrMnqyWn9f291",
  "key22": "3q76uxNqAXofesuj3tAHwGaQF6uZgg8frZBUFGaToba5sprSKmFmGC89QkyVgzXZehwHZxBujyHNPScXzu1iVq71",
  "key23": "2FAKNPecisEFz6qW8YqovT89swUp1qAFXGm5LbtzNA9b1uoF5kLUW2WYKMBKgwKM8tHtMRFHnC4Wb6S2DT3GwDdR",
  "key24": "2MNdrPsF9zez2ApjRti2iaHbdBi5MD836aGcakcu3NbhaEZw2xDmiLgonKTsDSb2ErLjWy9fHzKz8Z9PHL8HPf9T",
  "key25": "4WccTvisGDNw8PN6kdWyKKJTKqWmgHC9iHBtanwbUJZ9iDxcRb6D9q3uPWMNty6cQfra4Tj9AVNZxKAZBEiy4ryv",
  "key26": "2J95VXWT6PFPCWYEmPUWzEeMcFc2QrzSYWvyHtWVDEakGCe1y2dAba2AFW52skdGxzSt5b1wfoDz3CFpKw8ikrHs",
  "key27": "3AD2YE7U3mPcftPmHTNfVMUZwCdgVUXjoJLL2Lc8k256raR2tXN3N9QJbh6xTu4uR6eDoQsv6BNNstiXygGiznAh",
  "key28": "4XHgiDusPZbqHfDJZ2jkNDVS5ehLAKdinedhXQPowuuoNorD7gC1aNRrqWethKFU4NnYZNJ59dpFzBN2BrqDKTA4",
  "key29": "63DyFfe2UJkcy7naeariAj6oGfZkYDEfuG6Etxbkiqv9ngQxsBURT9eDJGLXREYP8oVn6Y2ptSp4Lq1KALappt5d",
  "key30": "3q7YBsJmu7EuqtuvujCjyLfQ8B7snYvqaY8JHbtm9ckvs9QSyhbsgiTchRAXQ1R2MJtWNNiyRT2snYpBqPCfXuvW",
  "key31": "2Z4T4Bu4jTvn98eP6GsuLaVP1Mdj4tcWCwM95MLkjMqZktzgUhrphxqi2LgQiHYcbQQeta8YwDyC32S1aZQdvJMp",
  "key32": "2FViNhDhDw1gHDVBEYBbPcAcBxipnRm5DNzp6WbDVoA2vyD4zVK9E4fhXCx1J6MZCoerWbqandhhfBcbfQ1Su1c9",
  "key33": "4HM8fVr84ww38T8mMe9ts1DPZ6SXTUcS66fY3AJgAz7R4JR2yRE4NonEePF3hRwfvcQugWAqznggqY2ZGwc4gRkP",
  "key34": "5Gfg865Eh1w28AWKmAS38hqWfMfE7hZPhrAnj7xNcL94jjDUM6VcN84TyCS5GkgSBcjZXmPhmk4JQYyYh9nMWXYp",
  "key35": "4NngAU7t2gqLeWHiMFa5BwBJhuvQY96T2K2ds9boLfoHA3b54Hn1bZAW5sfk1jDZz7D7xdroAphuiKd7UEJRee4y",
  "key36": "4o43QNBYR1Ld1T4rDiESEs2pVEGDm5RSPdw5c3pxHchzkhJudF4ywQStvAKiSL5qzs9vuydZMRH4yg516QxYMkAn",
  "key37": "3LWuhapijdVxMgaytkBqgqmV484jAmRXFwws3k19T8pJyXxtiy2ExhfkDFn1yWqESeRDjTrQzJYunLoPpj3w9W9Q",
  "key38": "aFcwZ7BQRiFMMr9iNwJwNEKNZKUvtcushsAAFfGNQVZEnm4SkGGeAqiAWccPzjDDSgY7r8DRvjyoNQCFsyq2ZA8",
  "key39": "2y6U5thpuvY7zy1tBGiSgYmvneTuLy5zWWtYd2fZGuhj7yWNNxffc65eAD3wnbvBQYDm9JhwRDEqwcUfJtXKJ9g6",
  "key40": "4RvwsRewfREuMmwGBd3jD4wa89qzMiZRF73jMns65FjYYA3Gk6y4EXoLLzn46NV8seHhQzs6qi3JNMDS1SEGy5PQ",
  "key41": "2H7fsBK76QgNqi9nzUzJHedWphb5YiujkReCHJf5WSARtZGYRNCAp2rEu9T31wXjksoCfjq3Rjn3E2DuZFD7oxXW",
  "key42": "5S2EcBJyW1Ykkvj9MWQTwKvZX2vrqzMQLYr2rPqQNWCwC48AH63KQpujvpCAZ2FWhJkMbwNrhwx1QntLoxK7VrN4",
  "key43": "2yGDnrLzLnM7fPdgmn8wG2uiFa5b4ESsgGSwNHUShJho7w9p3jNd8aKuHxgdseJyXiW94mbUDtoNfu3S5WnXTbDZ",
  "key44": "64CVuEUTKLZ2Gujeg9PLqLMoMubAxSTG2QJP7YAVoagTToadYpNGMgk8RpzTU4bQGiorvPYy1m7syZypuo2Fjx6F",
  "key45": "m5p4XRsfNdj6ZzEiKd7NMhaW13tHwRvjtWtzcofqqfrYgoYLhKvQRrE8RM7oMSFvSasmjRtMy1VKh3Qgn43DB1k"
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
