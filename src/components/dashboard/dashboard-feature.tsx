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
    "EpFnQks2DfXZQMPEDv8FmjRuFmzBaeWUCf5GWDKv9wVwsGkBW5s91ngTKwC6MwUG7drfd1q9HctWE6KFagQcoVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pa4xyAqF16fKrAouRUjPnXfYXoRpaa2kBCTqWnARi2m5F6jKm3Z2LXgiUUEf3TjmoKgX5Rkcqxn8P1EMmu9Xi7g",
  "key1": "5BbYt227e6EV6ZzWshmBPcm2oqbU1nf2Lp4s3DMiv7mwvxC4EDugjVa53tHx6svHvDbn1H9NJtMUGS8VBb1hFnH5",
  "key2": "4DTYsN5urQgXsBbB7PAXVc4A3FGeAySLmeQh99Y8wkc22C6mU4VaU8fjanRrJyh49deiZFBRRJYXAjWJonEDtJ1i",
  "key3": "2PPQdkNRhnb7X92Gkxp1ZbsGRPiydWRqrDsDVQto7P9QYewsSK6NFGsC7zbxvWvJyG8nB1qK85pFoK3tc4ivFG2A",
  "key4": "wrq6twh7hThzdaJQ2V2rCB7M1VGVqDKW9gkknbXTTbMJAzUxzmNw6x2MGyBzgbUCPXqknoNBcfaFxoofXMcryRa",
  "key5": "5M9awV6uSngmpgCJ3qCqn9fSM26bte9KdKjEgt6K9MCgPDxG5xzAAs8H9G2K8EERGXzMbuYdQQSBCLUSGSV1Ma3P",
  "key6": "5yX9AQkW68ReLZvrLH9b64rj9bRWXw9SbGRFTpcJRjmUMRgiVEN3BBXTVm1ooJmvPYWW7DfKNNTaBCFwj9PdhkPm",
  "key7": "4PUQ7QggUESNfrCc5MTfBJubvXs1NeVYYFSGg5zwTvrRAqPSE1t81pVDbLnixiYyZAW6cCUGihzAr3KvNASqfSZ2",
  "key8": "4otgLjKSNA35Pp8jhUKdmKMzuq8VygnsPs3YjF69FJjS4XghJjQfwCFpUSQyVecFokUQLSApNtLsH4vZX4SPe2Pv",
  "key9": "KBnNQjNCkXnAERoQwstLniHuYbAFzk8dg1yEY6gGB4MUgae1qBibakbZDfJW2J13VY2J21oTjCBM1ryU3vG8iT7",
  "key10": "2BG7V3oxLG3NrWp2vTDVXq2gojqDzKWg5Cq1fvmd8srE4M4CAjC8CwBNSsjUWcG6YJWCnWfJHdqAz9NuEdKPD96M",
  "key11": "5bDdhaDoqeNkSpF9Fdzq7xPzWqhXhJA5otTJeu8Xvznycp4vhjLa4NAN824tcgt5QGNGGputmhPdUN1MmQLFaxki",
  "key12": "5gvZeT8WKD4h6T7xZeYBHcSxD2uDrj7twMP5z5S1nz7gLf1zRRbFbXcmVSzfeiXQ7boxtRaFvonzajjLkR1jWYH7",
  "key13": "tKNMjxTyNWRmUgcNB5QouMHzyyQZgFkRpUBbvbAjxeBgHcasXfV9ziTBBZBawTuvejbxRsZH8nesTsAZq23Wscy",
  "key14": "4u2Pv2hoKdkmXwT9SGkAdQPJZPqKNJGv1RmT1f181iFFpPmQ65b3GBXLqY5HVusGWUr6y7qMcUPsGvU4GkUf7ttN",
  "key15": "2nC5Ut213zE33ybrsaVpjLtuzwaAAimNQs3Aoq3Zzz5u5mGd6whSrjw6dbxYpx9DFfifhrQTmcSd9CzynduWx7JK",
  "key16": "h45ZZLQvNSRdr72ntG1EPTAMdT86Wanu629tqKrE58SH6ydKejTf4z982jgd7vSvECjsMDVgPQmRP1jx5z8gGm5",
  "key17": "3twqBpQwKD3e8FbuYJKkgx53uSDdjD4eYBFTa6J1jdnREJdJgffc7iHzaYvrBfejtx3xqfdUtMmLUu72oXiP4qmC",
  "key18": "3QhNXDEE21DAkxiPV66127HM5UGYRQWrW5bSqc7rfLTnCvvB9fstvTdJzqzsTiC4giKsvYk6U8MzgcMpPaQn38rh",
  "key19": "z3XmbLTdJgxGkpcwJ9QzDT6L8qGuDZPGQRz2mBUcFMqRPKDek57QSQMjcCBSWLgKxjkcqvTgLHTfmBa1VqKua2s",
  "key20": "4TibK3EwsDuuywaeCNfm2cSycitZAzHpbtsDet1223ub1g8Q5C4mpifdeUoQTCvkrY5SDeVNUaBRCLH7o7uH49fu",
  "key21": "3xoqfGDUazpF5rtcP8ianQCs62Zb4DcUqV4XF44TvHY9HtAKxZ9JjUW1yhAyTNPp7cH7jcMb9Tv4qoKSQTjpKeGi",
  "key22": "3adprHB44gD5rdHL2G7ARhDTToPDHkB5MGjGTZRixhyH8xjgCJ1ttnD5MHxusnhmqFSq7aBzkv2nD985DcETcPKM",
  "key23": "48HE57BFxfCGS71LiVNDWf128Zr9hcfYeZTcDENMSuq7ZCUP1mDrcw7e356Hy6epCddbuFBwup5MEqCn1m8KCx6b",
  "key24": "2sHAjLBAFap5fkLda5rL7rqBxT2yjC17psRq5WNEPenZzNnT2QvuPu4uEnCg7vGFLiMpus7qUV2Ah3iYGKtdWDfM",
  "key25": "3cQdCK5Zzs6XtX2dEYagvcHM9pyJMN48LuAfMV5zGeRJZWK8R9eBZafPq1enDWmFGUv7CfwL1g5U9hmGTw8oEixU",
  "key26": "2GLD1xTwEXDY8Uh3TpgpAsMe2EM54bZTaJ42MSc2vjixEA3byjEy2G5fPdbS4V3KuyHz1uTHWcwMNomd8378KGsh",
  "key27": "5BMKgaunnnEE7kC2LoYhhC15GcQrJgLK3BctLbZj3jcqquidkF5zVEEtP9XudY83XpxRjGSjDhXpNdH41gY99rG",
  "key28": "5voQifVS4Y2q6wkYrgJNwvrGyFVXPBbxR9AZYqvvJ8DCaugaMcnTFXee57kKGvzVF1MNLx7aMQ6fveMKj1LqyLeN",
  "key29": "42MLN8rS7ZxbpuZhFVi53GYpRUAdmKtm2aK3jLENZdL1DpJDbi9bsKJajcehg5yYqratMWNZ6yAKoxK3fWwBU8Yr",
  "key30": "5TEkAdXRCcV8yu2iSv5kJaf6tiKBNX5v3ekB5wZ4dPco3ywRDFJhikvCYUpXLfigU64CZq3oYL5iCMq8byKA57LA"
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
