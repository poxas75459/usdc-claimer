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
    "4NzD4hBcYJBFJf7TbSRvTLyuNYqELLArtH5KkPbwVskduFxN6GgVxu7fADddXAKkwBbyxrKwfCLjTj8hqT1dCquG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUKH6tLHFCFfYgmHW5xD6HNHVr5ZDAwyaqWjeeUcXx5swmhVKtV23NAF9HtPrMGtenJEdnfKuxGqVQb4j1me3fU",
  "key1": "5oaWKZsNcLSgt8mTXQ6oitVU1KbsQzsWcEdogz2si6o1rura2M3x17DST2KQ2fwC8Y9YmPBTTDHw6X1VXCYgUa7e",
  "key2": "4ivWBJAfFkcdc8B7pVdVSfwdamKX2rR24sGPyZyTEW3BRPGdAFvg9J7AsBJHd4u2QRuKcVMtgoic9Eom2sp4hEWr",
  "key3": "54MGKnp2dxCAukxEbkT4L9cApyGbgN4DrAPZovZCtgt5h8qMfkbfSqWhTMWZHQLTycoLE2Vs4WzqfAqFGBPiDEZ",
  "key4": "3FB9czUq3CMwKto7zMusURUPLwVXeN8C9vdWDm6KAzu2SxFmQ4GGxuyELpKd9AWKUa4zkW5f5qtvDAu92bhiHJNE",
  "key5": "54En7NDeAGt7TNA45LjbFvAMwytWprQ7qfFPBj5eUq5cKf8qBeF2sz6skKJyU8XdGA17rd64b3eKprCsvcDUKQkx",
  "key6": "4Be72oxXj7xSBu7GUBvfJHcMgxprbVCegDcay5gfLc3xgxm4w3c9rRmHCMoWk37UXP3Cd1CEtFiB9BizCqz2MUM",
  "key7": "4skFWofieY2UbevjoJD2TtV8SRh12UaSefZWwkxDE31DyFiL4Tc2EcVoVHcgGZhr1P1n7vwirW1mS5zEWPwikX1o",
  "key8": "4rQREVk1mPGaPpKpbGpdxHzE3MtQ3hd6khhiC4qHgoPi8h34nXkt5WeF5vBW9QkCpstLbXtb39sC2dj38NksXtUA",
  "key9": "4q2CVxQMmSoz4XkjgDcHEqbPB2XSp7WSnYowCqzWxg4CBL1UvtrnWBb9ojSHuYiregp7TS5BQZS1tHGESRUP34m1",
  "key10": "4Esn8nExEJYJtXirmaNfMC8MXoReoZREFb83LEagCmMhR2rwrNQN2SbXt1nasGrDZFMzXZUjohyFKgYhz91MiUU",
  "key11": "34Y1ugJad3jSTiRB8w9jkS6JRoPpMdS3BzhBUVACiYCNhUkCAERTGZxEj4Yx73TNMMgTjdLpfBAqwRSa89aDgvhs",
  "key12": "3YCAWMtzphUk3Lr8oPTbxvibCLXxodJYfkM3tNQNtCPU4oqavTwzQ7H8VP47BXL9NRqqb45GAx694Uao4Ssmdnj3",
  "key13": "2a4qYkJsLqKWuCxKxVVk61PBVCYfyBjqWWYhtTsVhYmXjkTcwu4NsTAtkcgwtzCfavDFWwF17jcZGWuXgnNNqKoh",
  "key14": "NuMX9zQ1dxbQWn1d8qGaWDXeBQfpMiQ3szrd4rGQgzycnq7NmmbNZQNHi2hythaHdh5AiwJcHJo6u2exn9EsHob",
  "key15": "3X3x8S4g4QSKixYva9HfmgzNuLtCi7ehme93ZUYSEMLWEcNfUyawWqxuKHEAAH6rgu2VNKWYvyGe2Mcs446gitms",
  "key16": "FNJpQrd9qi9Hd9Ri7BzYYxRykQf8fT1zeRnXwpCTbBZo8MTKEerdQBMrxRE2YzWUoUUCjdAn74TJR717rPG3pEK",
  "key17": "4Lmn34Vzo8onMXnxCPaKuRHHheysv1pY7HwFTrY5b723UzAX8RLPDrxjXtYEjKHBAVrX8xKQF3vxMxv2K3X2L1BZ",
  "key18": "3scrqrPdfEU5pPYGdSW5DYDmiVSfMpTr6SKCTsinUMHA77Cr7huUKF4K7Zf85g4zYsiQ5yCcDpHmgXvBJ52gABRP",
  "key19": "4HSZ88Jjn8CY9DUVUz7CLK23CWtkhHrKsmAfJrqzBsTcVYF5ayZ1uiiuuuAJccSb6rUv1EWdJzHdKpNhfjzypate",
  "key20": "4MyfRngPHbG3SWrcngK9joj2d6qazVUZw8pruWJwyu3ptPebZeeHKmAxH3DpKjdGBQ8sGHj8V3GMiNGarPyMS1K1",
  "key21": "n92NpfvvHFKqk8wxXGa2gMKjCAiEjAKLWs6vzv49p6VAzH5jGcinYwwxC6Gt3m68pRBTpv5MP7UZ87RY3SrHBn5",
  "key22": "e4cyB6hwimesHwSwxHXdsRuiEi4girtUtjDkjDAVbPLbzYpCH6mHFrTXLZhMDcNrtB859Bd5ANb4x1MUyVF6kaJ",
  "key23": "2snPcEctdxUH2FguADFQgERo2t2atEwf349Jb5uCjn2zpNQe5iNtUv47g4ZJKQi9a7bWWqcuV51bJBL8o9ufnZgz",
  "key24": "EQtrhLU2c9WREKpM2zT9mgeg4S2wPztZcZi4DPVT6ryrER78BWjwcvaJR8RT9KniQBvHCyNXoAExtTnFU3tfDzC",
  "key25": "31CqQPUrZi27sSnYT3KdCzyNq4tDxAC4BowyUSEU2GHUa1MwL8qGMMuf5h3iYrsqWhQdsGirJgs3ABrAwmnoppNU",
  "key26": "31vTxBRncyashvyrc92X9nqW6TZmVKU9nUB36W8MHd5PR6M6D2G3XVgJysckJ5GMRFZPYuGmi1vECgx7MwY4gvCB",
  "key27": "3BpNCCsPPRH7mMoiiA8mfVPJoEpN4qtm36PVirjfQsC3pCbvtp74PjvjVMrE7ekhP452zJGyadiHSjdZ9fEVqwMV",
  "key28": "2aqpKwxmJXTT86hgbxPHuoeYHsZFCMjJP2fZYprh54bDt64ZUYh3Wm81vQDG4gr1V3qzKJZ4JeNNu2KiBvQ8v9PN",
  "key29": "5UQjsKbs8nq5vRWpyMoGLrX2tYwG4p1h2TGV943G44oZyNEjQsvfHzin8Y6iDSxgurCUuMiM26rWniVQsS633NmN",
  "key30": "2HTJks8Y4pmSsa9M8VN8kDBeMY9XsZgqcHQAvRRCnGWCWjMWXf2A8jFF17dCNSQZVDE6aj4ArPhv6nnU7EjQjhFp",
  "key31": "5yfLsTxxBiU3SPUtMnaJFbPb9e7SPU6FDr2zBwxgsNaxUZeS43QKdebUcrxXxySESZuZAPDU69sQMuXfTZai4RLs",
  "key32": "67M3svtFjAQHJDF6KnDHaRNLnjZWFVcTc5PFq2txMLVsDwL5fLcNTkhm3jYSwnuWhbhmwpCFPSozCJwbn5pxFu2j",
  "key33": "41Qcz9At7PhXj1Y51iKm6pKN4cyEhnatgmg8DJLztdoiFZagwM3mRK9FTSj5kx6wCncdgSrGcDbymYLYPYX63X9V",
  "key34": "2LXomeKShLNW6gPntRPibgJAEnhvdtDXkBwosGKtxUXqeXaXg7Nn9M5MxsHjsxHYu7DmY1uo7Wq7Rj27qpUG17kn",
  "key35": "5Zp1gyYt2hTWs9tCD18w9k4NdcdqQYFpAB1iExPVvwDngGBVFgAMoMrcL9w8CF4KmNozJYeANwX8VDHF7S9NVkQ7",
  "key36": "4peEeTW212iiPFE1DBQcD5aAtLwPqLAxD9AF46NuxbDJ1HNXLzetT5scT2rN4qzEzM8X3jwvTv3u1anC7WtbASHF",
  "key37": "5gEJQQMxMaRpFGAwwDB4WRhTiByKY3jdXH2Yr6ZLFbKUqZXfQ3A4R4kstjtHtu85Urfzo3ZH6C8VQNsXPfz6XGzB",
  "key38": "3ey8UFet9FNcCPjKZNNFgahxUqF3LGSh8sAjgK4qaqiVHnZmWpTNwQfgAeAzkTrAUM6vmrCxLcLA3YHPmZ254x5k",
  "key39": "624bBgZxisg3KWxMh7mnFVPvkmowJXQyKm4Y87gUAshy1pVUzQo6Bf7bzmVqbWCy7rKLQFaGatgVYohyG6JvPVRB"
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
