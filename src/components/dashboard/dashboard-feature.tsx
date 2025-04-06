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
    "kiqM9pn9GuuAKU1JSU8o7VsEAtX68SB49nAqonMAB7V4TCRGWN5eFgXBjbvBsGjv9QUufUWXQbTzbZt2TctcuiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVJBjouKwmSuBVsWgRZq7VJeJdjBfdvME7UeA9sRUQjY5GADurXRfSciC8H7rBKggEqJcTiAQuX5iiHW5bczvkE",
  "key1": "5iESvgdYmddpSdyy3T14kh6skqadAFs7CcZ1tcw448RH8VhmFfNNxoMEb7HVPzgPvBBhAhoRpw1ra4NSDqPxstni",
  "key2": "4AYERAPcH3kue4Ea54ZXr7izDYebAfyZB9g9vHQZSnKcLECDQMdiNMe1KeyH2At7njfxTNjM6sBDR9EbV3zrzGfs",
  "key3": "25Uw3pZXgQsmrnV1mrpHqwG28MDP1Hm2K61CYD1HvivTLkEzZuTGWan6D9Mz9pfoH3pB3nzhb5JrUvpgpDnEew8B",
  "key4": "4RJk8VLhuvK1ynzFUXAwQ1jkx1PtA4JNXK4WBHQnGAv5RJQVwNmDiwtkasXVda2h6CurLw7w9FBTTsXcbiFUZiWe",
  "key5": "5gFNP1N27YwegJUYAhhYAqjLKFrwNkCckrNKgUX3qNBRqKbFMJgHb12tdLdofemZb1bQvxY8GHKtHbwLGCixmB3C",
  "key6": "uCGLVExUAWLbvSfy8YWyb7CSZVL1t1qSDujBgNoo1UQbLZ6ZyozmWVw4RYL2nykEh6ze8VCzTwgHK4LSozmrWxH",
  "key7": "2L71yNrJ6n3noFoYF4MCYfms4srn75QTzkTATuADW2LUd4JWJAdytTZtpNd1wHs6FJcXohGFJpVviJ3apQGSc1Bp",
  "key8": "52m4Qd6R45x6LjPtAQgVqCAuKtPitMKzj7wTgCFvveLy1avFSbqUvEuYxgaPkjmeDVewvhZKHC2JM4rZaWxbj2UX",
  "key9": "2yjWaSQS5oyztcMDirBBs3Df32ziJuRmvx3nGyusHeo263vRHRo6eCg1acD3V5AprsGsWSQQ9ZpX8LBz5pj1qETb",
  "key10": "59yz7NnTggWjwdYRpKuvs3pUM2oANuVTic4zsfMFA7fNiezWfLpjGpH1Kf2bTXeQjbKjEzdh1VdwpALwKypRGzP5",
  "key11": "3QQE9W7ZeVwQbLisk89VZyw8joeRzEYMycU3pEdYPKsofoN5eHiBTaVA8RTgG5iehHxcitzTzkZwgFAEq5fr2pmT",
  "key12": "2uqKf7ngtiKGQonvBNpbTjtS8GdLNbZB15SzacuZMqzf9YeE27HYxu5Ncys33J1syJYE7ja2wfV5st4YKThuzLXY",
  "key13": "59dZzgmVMK2Q9NpzXS5WTxR5uTZyv62VYmsDyPtsY99WYLRT9XzNjsJUkHLYLpEHqjjDCtpTPZLYu9avos29cYvQ",
  "key14": "5n11MFhMy1hxbrzWSc6Jy7PveiD1PToGtysUeVrJbq5p9nmPGnwPHQfYRXVzLyssBhC1RkVDN3Ld7bRAnX1UsJvM",
  "key15": "3s9Vat3LHDAqkBdcHQWybTmLapWQVdc14wVPjmWwc1ZgYHFZFwSqHJCfvteN84T9hR4MQGFafieAzQn6ubWq1nqW",
  "key16": "55qTHWUQmVn9EqS92Ek6TTkegh1weonZ9zR3439JLxL69R9eKxnf98y4PAibTDju1aBFY1gFXrrUeX9dXFHFyGBf",
  "key17": "PcVKg4XprCKvm72E3sa3weeeh9bvUukXm3EFfNUh9GvSxJ8JLpRWwceQ3nBtf4bsFNECpuxaRq1mbXL1WCsHyEq",
  "key18": "Dpzu4s52c1rVyiSL2qyNXji6GE6UUsdAnCbPg7eaMgv6UQ61bS6utVTit41Fe7NNk1MDLJbuQuQL2dyZzWakZDV",
  "key19": "62gUudeUC6sHMhk5ab1odqw59nLJw2oAMgnVPr4sibH4j5EDbc68sBjNNJgqWitwxVi25Up3Lq1mfa6cjmMc1ohH",
  "key20": "5N62yvShhexDBwfMQKAFCHJgq3tEc9UGK1EzPLZLhLZXtsWiQgYBn9BLhJFrZ647WVpVMiacG2oqeKBxUWGnJbSC",
  "key21": "4UGRepSZ9xoVdhMzKt9ajobEvWMJuDVn2qGrkaz7ffn7qbbvyihGdu9S9ZEdptwAYvPG2mGwUSFff61Dfm6MMezb",
  "key22": "xwMqFKzQZyJPoeWfPLsDZNcSeZSv6M5QmYds7NEuC9pg1aisjWoG1hnAWDM1YhAFHQfB9j4ERZEvbAJRHYCXmke",
  "key23": "5wij3rTpAxkmKFMU31rfPPmY72PkCiMkC37qUfidQZMtLh8fgrQva1qyez91o4JbDDo7MzYK53ikp5DhFTCKu9UW",
  "key24": "5a8h5Vhn6Y1iC5jgsiVH8q8EGjZw3adDod4gPF7Bqx6zzzrikTMMtEyaZTdbVdUiSiXeXxHPWzNFgzDPd5qqTY6",
  "key25": "3ufLevQzjzaFJQd7ntZWQX5RBjaXN7VJELb2dajcr5Hb9LZ83AApY629yhGniyUUwEcgfhkNcRKYb7EwRqVUjCZo",
  "key26": "5Cy3Qp5KfXBpc5zwDSC5XN2ZCn7w2inDGmzTggiygaSRiXntwNDtYKq7vCtydhZw22gTEMmEfZgCsVZnrhStViUJ",
  "key27": "3jk8tS6WF17CMFNSnX7ynNnzbFf6qvRQjsCMC5zfWa4VzX1ApoDxhyE8iq8cQYngAx41JHVgN24K7bx5VEZbPLbP",
  "key28": "3rKHeJqzJBJbMKDWEoGmrCxh9prJ4zcsjaSyM1NoQW3623svM5yTDSJXXteQtL4mUNtcoxcxrMoGhfCXtKuxPmhG",
  "key29": "2TRr7HwN2KMH7obQeawVwtqjnDVdtvGZzHVaqqhz2pRqzS5GKPY5RpFNqd3UnNKxybVHWmDqpVoRLZaA3waWwbuq",
  "key30": "2eDqkfr3hySjsBavcJJuLQJaYSjCjaQMdwdaYNKoHf4cXdk5yE77mYfZrb8BMjyDSiE91aZB546hqLx8YuG2UxjZ",
  "key31": "3Jb2tmWwDQZf1nKFxoGu2iQ2gRRGoMwm7mT9awm43AnH99FZBwY6ccDVtPiEEkphtL3FVQQ8HRfEsph6VXWcYxPz",
  "key32": "58YsPUtjxH7EmfUpiibhpJoBqBW5h9iDBiVezueiaNW7eiLH6Z1Lmb26rUDgqsKrDVDDLr2BuzLAV155dpqGYv7J",
  "key33": "2YkCB5aExJGyDUGs6w9PQD14MSRjwwoY2eUm8vGLyCy9BdSxfrmXcwDU5LzXfWb7ebUE5GqNR5iK1mukiyJeUHVc",
  "key34": "45Nae6hZcikp7coKnkXK5WjYjwPALPZE6Ujakg7iH9v8B7cx7FUHYanV7cVxDizXKHB2LXZ8cfv3Yd1XiB3zkRys"
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
