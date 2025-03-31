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
    "2k3NfjrnPbNsMcV9Pz41Htkr9gTQJaLf2X5LErbtZQbxJLpsmNyBSvgefQP7nmZP49FtVJGEo4UQ4B2PwszoYuHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1njzPuRGhf1xt9yRHhF1J1nVZTgvZJwyApABVWiN2iZPdjuTszRuuLpSV7K77qGJD1GW2z3kKX7h46YMDcDxRk2",
  "key1": "4aPzyvkmyjABGKhcH6Y7WqYGTSGUbKSfyna15yE7pf2p3G5PRdzncWA2c9twY3QwroxSFEi1sSFJ7aEQ1QcoHJv",
  "key2": "976pijECpyrqsPf6Tdx9ZzZEyaqf9QYaBUeqnEf66JJakzAf2j9bH5itcAUUb5TDoVzzTj84WGmtKr4bvKFTJq8",
  "key3": "27fgELq376dAZ2PfQCipWcdJnmCNYNXNhR4H7e6MLAroaZcfXadwtJo3TsFG9a6wSgWuhcAnQ8gCtP6xWa9kvWWm",
  "key4": "2VcS7fVdX2scb8fFJcVyDV4c8RJDVoWRGFKumdbZy1NBUmt8S1t48Y98yHuDQPYiNoDbUqZP8jAC8Sp2khkzLx8m",
  "key5": "22ePCv6fjGqX5Ti3y1PGiLo95aSKTN4XpmsmpoeP2fiFGtVoVuht71oTrida3nckYJNFVcnArH8EaFrByJM4mZWm",
  "key6": "NSykzcYhQJhBNrPw4jb738omvE8e4uu8E8hHwLYCwXtk4RnNho3cyRa3UHdTMkRWepta2TnuEfr74c9dYcdtfWn",
  "key7": "2y4fTmD7V16af47GnkGqr2VRj8b6uR1EjrsUh1zAV6UVHwc7ZWy1JXhGnowiMk8XGSvgyqbQP8bzMbYKCkG5NeJv",
  "key8": "4QGTPZ3gfXJdx56ZQcHtcME7sDHwTKzcxu4BKrbxmNx5sLt82Zm8LiZJ7EWyAqT4dyvSdwFUYVhpnXfJgApSupRG",
  "key9": "5TqDyUWvR4jbqBEVuArBFnmvzgiSUhrwgXSatgfxSsAoDLoKogqZyxVoX1LJgQ1Tmev48w3mox9ETy5H5UJehkiR",
  "key10": "3AspbGokzeBLe7bAtYeizy63XYJsZLdARWxFaUEqwpfrnZtdhCmc6pGnQ3uX4RVoqiUwPDf2yxoByDo4JCzwtYhn",
  "key11": "FQyiQJ7mon82sX4EBk6vEEKx41g6egGqkeHmb3edpBYQxVxKQ1ESThivrStQUhbzrjhKU6xT5yjcRvxF7LdWMXy",
  "key12": "4XZ6oqFz3kZxCCg7fikzR31d3Kw7Ewdk3b3UBrxwS945ZMNogXFUFjHAV19JEavjjvQqYDvS7YhMWk3Ws7PGVLuY",
  "key13": "5Ax2iTkRitqnV5QkoF6byZoYdS6CQx2R9cdtP4jnWrbnuVe6gsZFkNotMwjVxcMF1aUrtrcJb2rNK4TsocQocSos",
  "key14": "2e2KDTs54h7Gr2se7rBydpVKfg3iE3sq1foTGUoCGxJ2QFYyeDSNjcbttb6DHffaEVvJQsHSy4WRiWSZJw6sNvLB",
  "key15": "4t71xca3SkdYWUpR72vYWkUjXCjXj4rvDBXSHCeFJzWWNhTN3FzAKMkEqFfKNah6Km7XXh4HDNgvb2ZfgDnE37ry",
  "key16": "ELFFombseoeX4Ma8Zrrr9jD7wtxhS88HXq1EXYRVaJuBxyHAGKowvjq7LDGP8Vt6aiRPpwRqmD89L6rFb2WXTFF",
  "key17": "4J2GhgKHUCQNvGD9dRRLCfByVwU7pXJD8xDiREjS6iqvb43vqtRV8HfmUDZWQifynVXVLhhyDHYQAbxFw2e5zkH5",
  "key18": "65RgGTcmSWXGiZGmiDava2dgXscG8zA3Ep2nwdNpW6ooTJExZzHB5PbHFr7P6Qeoo9nTTLSjbduZJto4VUFBbvy2",
  "key19": "5wnHDB8kuo2Gciedh1S1K76B2excq5nzMqYpDxrD7Ap8Q3oNQoHXtAmjzj8eeWFfejBxMco2RFo7XX391hrYoxCs",
  "key20": "2QTp8omwutZEKn8x9MLm4yDWkKyrun5N1w6UQuSLBh5aBPvbxLkHVtqXtD6i3GashVM5VehAMG38hqXfEVvL2Jwf",
  "key21": "39SCoJ5D1bTENdVMmHbRAuwbsUMHAPdRTsbH3tzHixvTYafkMG5Vsa7iCnujN3s13jZn9iyGzomCkY1M2SKXHsk7",
  "key22": "64h8GeeJp6xsNfNGRYMSMAQ2mEe5ET7wimzaUbMQsfLgyQvgWXGiRUrihzwuXxaZVD7M4jrCdShtB1mnmZuaFvab",
  "key23": "2S454sUw15YdBKt7PDDHfoZy6qSri7tmgMKpQVYMdx8ABjoPSrKL7fdMZxqSS1W4BUyM2WGynfYPwntWSyCP6YCw",
  "key24": "UmGEBPiSRvE3rqHVNG8w1Xs5U7zkGfKd8L6rxHLxQBnnfyz66CADbsdWPQw2LppEkJovYS5SZQBUQYVpDT4f11G"
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
