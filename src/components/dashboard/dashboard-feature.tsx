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
    "yVb8Ly6Fm1aTKYpMTq374KtMY6pJ6FbX3jZL5bQHcARS74aVifCDZCFmi3LuR21HTyLBXh3qaTVDYJaXVVnokrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPaSCi14Mv5tqH7nay48jAkNGc7PQF2uGDG4ByXLEWXua1JKq51LbVm1e8JsBgDUGmxDzRDNiQt9toKnpuMc5vE",
  "key1": "5d9F939R8d21JzX2edNzxM7HHxBPkXMx7B8hxxJXPGsFAhhBgy2RGEcedkMFLe9V1kLQkehuQmAFSzFWEAfLCMNf",
  "key2": "4yhSMcu6wDUQfRy1GfvwuGr9ZZDJkqW2nX8pEBB3T61S6xrkYHU3qNCAcS1FikxL5iuBNrcBx8q71R2DL47ic3y",
  "key3": "38FKsF4Gmbv1su34izFsfszHspV9ERZmKqe7m7ZT1sNeiR9DGqzpgZGrU86tbUfqgjL5SAV5Cyc4MLKKLjNH6thS",
  "key4": "5PEihdZts8ft5zBUEHAC6C35JYQ2cg3MF5dNrHMeCqkzK33LTcC1P9PZciMndXHFDwdePkvAUfY3wceJH2z96k2d",
  "key5": "3d9EekKjGeesoc48jjxThF6bHvXxcumkXNWFibGtgGqRGXP3Tnz3fxnYtSQHtHY722n6JxCbTnzDXhiE1dyerwAw",
  "key6": "49W5rvHDSiBdbcoywtHWtRpDjzuiXoWtt8anDM7GkoKddPyRVbYWgX9CvTmv9jKWQvHxV2q1rzVBY3hhoCL7Bc3F",
  "key7": "5zfEwsUjJXkNjmPSaHeoFrgTTJNUjZp3n6VyN5zsDKdpcVdk1USS9jeH7uewqoAUdazKFK19ZksBy7JxFGtQjVpa",
  "key8": "6236H7odwPECnd3gqiKW1Zf5CAjv4ELE8jcJiZTMd5fWCbEeDxBNvBZC9wNXFG7e4tMNHTvZBaf6VMCQQLgnaxwn",
  "key9": "2d432RcfnNWtSrEdusGkQ6nfoDH79fYtxafapGsymy3Lys2vYgVNfAaxDVYBAJXJZwzFxpdVNcgx7nd8K3fQicsm",
  "key10": "3SgaDRQ31dDAG8uJpBbkT7idVUYS1YY4SgAqvhSh1YeVDPtjUCLoXnp5noZxGhqC7s12ojSHoL8Lcf1F8S2qZKFW",
  "key11": "4CWJoEpRG5PBBmbLABt8AXXqw25xomnDR7uuchAXUvCr1AHsczWTBpDHZcX5oWg8VCUCV74KU8z7tHazg6Qp7Ljb",
  "key12": "3xop42Wh4S7m7TrXa2xrvut7i1QN1bEkxt57jLZTdftFq5y2NeyHUXNuuWjH4c6JNYiSAp4ySMsTgsuve4FhD2j",
  "key13": "265K7CasBbiLfwyLkqnCGxDF46mEZmDReoRc7JfdLJccLVrNQaMvqKnZ2hJxyu1YYG2GYLUbvEck52A9hDTT8UBX",
  "key14": "rsThAsn41ggJBfudS2os1WcZaKzdUHE9rpZ5Kb3neSpj3kxy5CYzmZ9jyovm1xWbbqcmM2ntLBJLdoXR4jgZVNf",
  "key15": "5rogbBbNfCSJ1eZj8gJiAmpNt86qUvPGvygYbjpGEHzy2aPaTxXevRMgTUkB6MCxgmhDrKTTVUpMCEpVM7V9JKGg",
  "key16": "SKp8WWgFcUsKBDub2YtzssVtYTKAm8zPjRzbZeh3P41gDD3QUHFPWbjZtEDGiy27QQ8NjanFPapvEBGKKgMt5xx",
  "key17": "VBXDuj2ixtFc7gEatTXsgEHUvjsEVKL44zs3dtPtMVYGGi5XYz9jta5RPea6T364o2qLvs9YSKwPzGGo8K79237",
  "key18": "2zPG2hWNk7ooprjnBdKBu1pumF8EhRyZogayYJ73MXmriLKTGnJfFvz3wGeJU7o57VA88RegqwkEXPY5EPbm2KpY",
  "key19": "PC6rkYQow4jVindP2bbeGzoGQaDf8CTiQrEX9ShVeHYTafrGVrToCXdHKL2S6HweurabZLsWXUC6HFTcFfqmjp5",
  "key20": "4GWzSpS2QbKM4B5bWAsBiteY3AyTgEsmQQ21i5ZCgyovuthScdm3DnuoxuSoLF3C3z5UJfpn5xjXHq42JuULpi3e",
  "key21": "2RxuAQFPWrf1rkuDeGPzhvZ9tAtbN4ay58YEavUrQP4VcigzBKbdsbCPdmZG2hFeLxypoEFVAxtzAFnr6nyqWWAq",
  "key22": "3iUqGEbfAz3DKPgFGD5zhGVCAngh25TFuYJyUmthbTZk3ai8Sbtd3p7cgqxQigmidFp849peTLZsQ4dcmWkXvjwv",
  "key23": "3kSvmC3RDy74cmixSP7NxRvduSGTT3VyTBpXnXjd8RGApnLjXHpkJ8rLGvKh6H21Ez3nttr2kJJBdWAtdTMdHGF9",
  "key24": "c1v5W7N22dfAXQoMYUrM85jTEPpkKfbkLVUZ53FSoLgSAUow3AHzf9w4N2eLnmLtCDKpnKtwL8NDYDb3FXo1iRL",
  "key25": "5Q3KSD8UkFGpx5Fif3kTsUgKjLnVKnWX7Pb18MisEi5ho946gfsd2XtZaKF6urQMTcipMEqKL3Ck27LhpL9rvFQr",
  "key26": "2zk9MtZuTPFfYcEJRwy2y3C2PPvoh5BTL5xpZgfVJBvxHw54LivjMDFJ42ttPfdVP5R6iA49H3dqGUofX8hQ34cs",
  "key27": "2S8NPyYybDATzswLDTf5v3oaxcp3oD7Fmp65VJzwaMeZhBdVQA2LagQvqkHfkA3eYRrsrBmnRYyhUcneqt3X5a3v",
  "key28": "5uufzgFrCEfQErkNLkkS7qe4CfcFuQyyvSaDHQpEuPkoSznZYbFmcCs935LLY6PSm3f7e6r6i741bJmPj39Csiu4",
  "key29": "2C2dZqeHqV4UCRhQEyerUzmA2y35mVjWfmDAi6SSm88etoHV4sArd2iE3qDFWKXbheCdABuasYbgi7FHYoiv8YZf",
  "key30": "3UdrqFn82ymP8kDb1FSd5hHrugyrDuJ2JuvL8tvVGQZ2wVBendDwKcu5EbAE21McY2KyeH7yZSRK5FFVGB77AzuG",
  "key31": "3tmaR5gtBoyMFHHoSHt5Bjh78wcqhVY2WwddHx4uSbazpiyNEbhREQ2DmV3ettjQ7Uj2YcWhHBj4LbC4MAwujYRn",
  "key32": "2xj4D4nY48cySU7c7NVz4opJgeacxTwVYeyLQWwR4v4t5Miyq525UEqh5Wxj7prTjSEs9eatbqPTNB9z4Ut3dgmj",
  "key33": "2qVVqghwr28sNkLDxkFWCUpGGCgTg95UpzBqsAv8ciLLJeuUpsPvGK1d5icU39YiPSqsMSQu4gK8TP6euFZwt2dV",
  "key34": "5zUNBpGEfF79rWqGFyMLwH5DCjundFPscF71Vq292D5Hr4rHTaAoLP5T6Gax1HhDKM9XHGp7WECSaiMAGdRxET4G",
  "key35": "3iqHbofhWi4L9nNS3e3mZewbWSEk2YCJauJe6uyemh87rREuhuRMnyKgB9C4SuD3WMMWEuAbFXTYmVEWBKMhqeLn",
  "key36": "4dq2GpUyZNhW2M3zju2B6VdeysbmUBvFmSoGMURWbQbyG72KePEmHAfN1oVefWCxwnts2DkjtUATwY6Dci6RS9vc"
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
