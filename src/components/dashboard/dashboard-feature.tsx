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
    "AbbE6vrKWNWF1KCWx3UcAtso8MdxdVtC7pxo77LqcbspT5FUZNmqHm6d4T9PUjAotw37uynjCWnarGmwfAN6PgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EaLEKjaXdkyypa9Z3KMXLW499WgiUY7KLRv2PoRbDeiKQzAug41dYNQCWojsjRFDfzmfT5PdLWwbwo75WqTePiW",
  "key1": "2Tgd1JYiH19vqanwQDwPnymvw2XXjo2XTrByJTS7TpX2Yy8frVP2mmg6LZWVaUJoRyZbaSZuS54tKgRwiRRNREBh",
  "key2": "2eWy1RCqeomH7KYu2vRHSDvm1moTUeZnazfX4pcsECGMYH8meuxTRpSUQqgSZqS5gFKyDFiWtLzeu8TySmFCwvrJ",
  "key3": "44KwZ6LHQ4vbZSy36sukdh8LE4Rip3qwwtwBF4WWbqcxNPcegdd2WJzbyfqFwR5pS9B7dTBpSjb4SjPgnz1TkUdC",
  "key4": "5mh64n2wA4dUMSCVLkGDXsEfojY8daw8kYp5FMGveF3WhRkGZbNWuLRRLzaowFA1QaeQJpSPMmJQXT96qAYovwS9",
  "key5": "2KBWoD7sK55hfZ2ufdUaM8V3YL3t31oEBQfShxDNyMu88irXyPgnTTKQ8JuDk6SAkqU9mz278JgfeH8FMHDuHRQZ",
  "key6": "2Vd5vurqjmMiNumGtZyb4hGUxksub1iByzam1UKjMD2Khj97b969SwZd2VbZW4675fxgxn7keRmjmQVTwLYutPv5",
  "key7": "5Q3FXqWk5p3wpuKvUrJkLxz2JPoc2xAopD3p8g7cVA7tp5uHUNTtLFugUQnQsJjjH9zqzRR1KwERC7P74mcxh5pX",
  "key8": "3vWLnDCt9WcCtagiWhvKMHL4Jg4Q1BCy8zuBX9v1NFS5CUUsD6NSNfDgbofKcbdcxGsNCBK6fX3jbpTUnMkvavdh",
  "key9": "66bJeeY1Db2WrmhkDqDRNpQcvxLFQqJKkE4j487vU8gssPQ46cLJs94ChddeoHyCTPHLQXwwjww4zNBN113YVs2D",
  "key10": "4Dr4u3ytSwutdR8t9MuFSJmviGEMstdmmuDmwhaivbVnUgDxiZWWpi1soGUj97ZRFt2VCgmCChDSVbXRnMpxA43w",
  "key11": "5WcFZiJ9js65Qii1n2eDbMmgqrLrtCAxXLhdPyMoeQVcWrmU7xPxmMYuPB7ThD818XwbM8BQuTh5mWMM1KUn7GWj",
  "key12": "5PFknESR6bdqC9qkrkn27q6jG9C12k2xJLjKZ3FLZeZGd31FjbpffgdsAcaFRZNoF3cLReVnib4ZETGdXQiAbZMC",
  "key13": "4Hbc3Z87jDLauVJiuP1TmRz2eJZTSHtvphmo3f2zMBGXQH3tn7Wg7zNVXqSWwpEZmx5KqwNo188zbXAa8CUXGwxX",
  "key14": "2u6RsdgH3vqSyRziqDqMEBakELskdtpQFaWzSCoANFKWbpMykNjHf7kdhSWx63xtZfZPafgUGVmFqdoiVJkpLPxn",
  "key15": "4igyJNMNGLHfNxbGgk3CTRKmNJAF2Hrm1Y7bAdsLorxcu8d8qqfTd7fWTGhfqnM8mpNB1ttHHAnvWN4dBSFz5GqH",
  "key16": "24QZ5HJkjP1qiwncXBwVcq23jQTXKJPo6Lutur516wgkUTtY5npwAUsrFAt8HgoEZrvrkJDMMivd39yTLo7MsBSB",
  "key17": "2ByY4i4dviHXKiStJ9TGQFZC4fb1WFKdBftVV37v67yGzeZvL4j8RNPfEFAejw5UHNWyZJdcSgfgpvr1iyPocjd5",
  "key18": "3hETD7orMvk91XMk44JWsr9G1JhuGYfsaW1JDFPSQfnoSqEAqQskTX59NioesKb9getscxCpxTjWN25meU6iTYiX",
  "key19": "57tAbwLJ9jQdT6UEWsDLTqshig4t7ww9t4BFJ2yT1M8BGwDSwwfdbxR9NF3uByXfB3GaXLjoFQqhZcZi4Lihw45",
  "key20": "47CEvFvwULxCjVYn1VYd69SA254GaREHbtT3VKsEyAfkyBdntu7ddhNNgcJK9Z32HvBEyK5PbqYE9jH7dGYm8tge",
  "key21": "2rQNwbjHGPp45rvSEDXPfkYPnMH8e6TT5mTZJ3pMXBjaz6b8SR8h7CqUhrU5QNyByuNdJ55Cz7LZ3u1x8J8JqhQ7",
  "key22": "53A14M7x3fTdzNqqwJPXTGEZcjZ1gMdRVUj2EUZBkMzjTjY42hqpB5SgiGuETZNj3ATJScDMtQnBkLPtAdRaybM6",
  "key23": "4BV4p1DFZX1gGnbhPLMxo4v86HLquTLgBvJhWRuNxj9eCbi1tqMVXpNoEwiJY2WP6GLSz5dkXxPHECFV8iKB4xpX",
  "key24": "28oh3VmAWCNsU8b2x8d69n2NNotUPAJ1FaNxbevzChS9Eiwc9YTkTfo3Qxfz3aBUi7AdkFu6TyQLL9Uz7BjSkLFG",
  "key25": "FZ1kACET3RALEQ1SpKqhVswksPBEiG13HKbtcYraw2mXXZN7EykHuHyWBYAE1beFNU4pgi75ivHMzMp9UfcBVCW",
  "key26": "5cjsAT2kujPUk2BAgpBdaM9JKVvbs9xcALSXWmnKBVuctzPVH1DmFnzeJtLQzW3W4ozX8f2hV4KhWr41U5MJimUw",
  "key27": "4wNPrwMtDo4ZWmNQrd6gUkt7vQNU3rV2SikxkdaEE5seZW8dhrLHb6J5WABBvLx3Js4fd5GsXSfTcHikFfX1rxRM",
  "key28": "5tSK776sJz7AgXs1szUbLDCSoQY74sddv3rw5WEob1ctpKZTjMeevTnRK48rPpPn6pNTnnwX8kcB9unmXnRYiXw1",
  "key29": "4DT5yYJ1EaP6DfiKcgDqWLrjppNwDg9aiCBniUKVTLFzkb7rUrkPz8LCTiZeS614fy5mArFCugZ8RrGKCawb9dVZ",
  "key30": "4eFRYUc7VATSi6zRcVeUBSreGNdeUx4chgrKG27fetxi8p6rDTWEPem3XgLoe5k5sv7831kRXE3YiTFoVLbfKeab",
  "key31": "4mfpzBcD77x5WydMN5PozcdH9UTpgkLtz4oDYmcy5WdnuYYoxwXfj7ATpLuZ2jazGPzETqGV5Cn2zqYTA5Usig7x",
  "key32": "FpNZegQozv1oHqXWUwtsQeqqmuncDckERG1Lqc5ozvsFTP9U7PtwvKsDxuDVoZw1Mw6DTEp1ggUWH2QEr69fDHU",
  "key33": "3jfx75zfUVLpW1p8jETzHQKYcCnkiwWVYnZiz3wfTAEwtRwn2Ktrg9SirP3se4Z4eKpTBKbQ6oJBasc78cBSyYS4"
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
