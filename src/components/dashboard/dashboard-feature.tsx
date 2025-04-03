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
    "2eRhcWvBt72T6qnzaD3TFKgbKNk5iFqbjhYuQpzny7K1Rx2xh8Qj5XSF2aCZZLhaHNfoikEi9ijT7ZhVwDHdvFfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGK5b6RcwjDAAezZdabbENim8PFNsckacoDN7zbLCXHdqX99UcadtchEco28rEJeiXQQYpEPsuh8sAvduyyuGKW",
  "key1": "5852YLEyNyWE3ue5xgYTaZs3vQ7F84VNkVzFainxid8gErE9bvqbCaRnUbc1iehro2DdvaVXLb73eTL4X9X8XXrR",
  "key2": "3KKEaJ63zdsXt9DijVtg3HM5zb2HyZV1PivfxepsyjAnXakgcZFxSqqGDib1zgYwuqNAXYt3UEqz2R6mmPz81fXC",
  "key3": "3dPtJWmMetApfnTkNcRfdwRjnFqUu4BaxAXjUbPG1aTBbKurGew5skMbDDFXVCY76YgocVV1MG94f4b4BQ8dRHfb",
  "key4": "676Jc57CzK1KR61w3aXXbxrCA1c3RYivmMqZdyZTet6kWkTMnZ8Pc1BGYv75TaACjhZzskyc5D3DxB8doXs2tuDC",
  "key5": "HSDn7jP7Cq1d7XpYoR6dmSc99e8T2GBqb2sQzuXuCyMVxhwVbLMbMY4uhT1mxBGibqH8Mk8EhXhBCoWKckBZWXd",
  "key6": "5cob8x2iJeZhM7z4gLAd9KctxKbqJeMRWTwYHd3pst1MqSL4chMZV6zT8xCBYvqsR1FBFZnHmhFoAbUXHAW4rE38",
  "key7": "4PWgXi1roVVsRuQ2itXun86yr3iQkdhkqRzP9h2nXBS6RQ8VWkaGzeE7123u1y75HbKtvpFXVER4F3W5JW5xPTqV",
  "key8": "24EajBwMcuRDXVxZn2DAuRaZGgvvFnVCxwizggy3AkocU57oa77bBjdzyNhCeGmvd37rpMM48rqVXMTBh3kPVBfp",
  "key9": "4Cy6J1328sd8iZ9PVxRp2JH2BhnhXYC2MtKx6vzXuBEvRhGC5nVp8oUTZjZ63bLRB3oKzbrkEQZqfZMGYijUVrp7",
  "key10": "3tkGCFgzkMJDb2MsZzMQpaUbv6R74eJPdA9gBP2hELQQevnDdiaLsyBDbL7rH4EsQvQtx2DFiinjCx2yDtZKs4Fx",
  "key11": "xYXNUpVQDKwJL9CEeyrXgEMjp4UCzJnAMiz4zKZrQHmogjzdTfeXzkX97csFJN4YACbUgQLdQ5L9y2KKjxr9M2L",
  "key12": "2tQQmMcGp64aAQD4C6jVog88djy4FTF2HmMNzCfCo1sYZXHRKcuJHMNzcCKo6MDfzrHsNTikGMMDFf4VE78edkX1",
  "key13": "5X3J7L6yos8kubUoivm5Y8xHZXApKgtAeTQzCJWcKrsRP4yCdFvNe9Gv2tHXETWwwY8Fdv4egYCdEv9qAFvULxZz",
  "key14": "2mMHux4XvR32Dmk9swGffVniuQ78b7FumGsbs2tgwg2buuHEfkvkxWFPr8Fdjo48zx7KiU9aupiR9hpJQGvg2H5j",
  "key15": "4Dpnw6ZF326Gz9KGAbejKxg2jxCkBRh6JM62adEZdktpSAW2ijxx1xeKvZi9KuGCP2kHWjkxCnu2kaGeu96W2EbU",
  "key16": "5rXzqgqvrhDZWcF8RhCdpw1yGG859pjXSttSgYQNCYgyE1CSsDYnYbvquowk3sEwUMRwm14ubo1eWMtxqoAMZP3Y",
  "key17": "3m6fcKV5oyD8TArHw8spYX687NCRSL35Qrs253bKgh9mABGunwiv7vDSyoKVNEKkuMGYCqpM62A7fWwMpJLb87RR",
  "key18": "5EiJ4P2agNfFeSZ4BeCSdF9jKihvFP58ohQF2AUknP23HFnPdTJPAG3x8DJgV4FRFDtgoUPL7gPWZsUur721gsi2",
  "key19": "3PkupYrTcSUZJ5LcZfk2o7JugyhFwHoQPK93FpXrvTGRQumagFMihvve1LfWGCkZC5goQqh2KieYBicUXXzsc2LH",
  "key20": "55GmarATDKqf5iLw4dUYHXysC8GazVJhBQJr3V1gb8frtFF5dAiSMhHqYgfZk2ffH3wjat598od1fjpKPmQTJE24",
  "key21": "5cTfTexjcbjjBV6pMXBrUee5UU8NXjTJc9ZM5TzYNRDiCF7MB1yqaD9jkzWdkhFzi8GT3EQ5skfq5qyC1eC3GSVH",
  "key22": "5irj32VKAtkswwFxUvc6KvvVqoYkipGApkuF5o6NULhgZfiUs5cQooWrieA2Sq4B1ycBq1GRe3ApMuKT3AdtB9ye",
  "key23": "5GdvMKhBoFuFbSt3F2QU9rRYDK2FB4S2iWsHoNcJbBDe6FBjnj57eWG1Yvu1fYZoFQm7RpgQeUuYPtp98JGoXzkV",
  "key24": "34u7ULHFLyR4BsWWsJj8TNUiegfWiQsEA2ga7RyGVeZaP7tPy5bTKxqm98QnpMaZ7KxAssiukhvsMHjTUrNppEBq",
  "key25": "5GhAvp69y8987J6SxSb4VCjPbP29jN6rYUetxbAUdALbEAHJGrc61mnDAts5K2b2JyNaRsYVXGkSPN4ZuWCKkWnj",
  "key26": "27asqZfZmYRuyMU9wVHRypuj3BK1FyrZ2RatVZ6LqafCyPc65U9A3gPFGbDyG2H8VAVLzxGXfJ73BWsrVF9Xa17A",
  "key27": "3uZTLqLNgCXGid2Q7mGDNWFzmRYGFv6P7bMziEMF93p1TAYheSq3QGe7jr3zghXuHuLk6YKFf9EVbSNzTYgAnseG",
  "key28": "4kiMkkkvwEQoNKafKy92LQfZ55Wiy1SWgJufbmsuorpiqdkaqvWWrdCtUdVs7cCrW9Ji5WrDchiXG1Z5QALAQptx",
  "key29": "3gT6SpWRGCwkrbJaxxsQC3ZZH8mfdonpWsq72ruSzpQZc4PqaSuP89rcdGRhPF8voPt65AK5px3q2uChT3Zmq4ox",
  "key30": "5e4N6vudyVN2pc7EJSMvTf7GpmkHgJmRJdSALP3QrTWgjJWivXa2UF5achskcPeX5pY2BTG6ki1GWwEzte9vi4FM",
  "key31": "3381afBCQHrTTrrnuvtqJRctg6GuLTA8SvUBxyXhamYeAHcDWVpuKCjQWDPDTW9ksy5wHLSGFMAqLqgpCYBohsFW",
  "key32": "62Mfy6qCS8nhvw7k3tt4RGurupc6gNCk3Q8QHm7wzAiyrwpgdkCkq8vhR6Pb6oMqrFnFfY2X6gXsHPwEZsauUnQg",
  "key33": "2sS97qe8Q3R36ZVDY2sfcrvHLa4cB4KRfSVDgWK8m3KuCb237LQ7Yw7synWypLjJ5FFbC2d2VfvKZUZJbx1zSiTr",
  "key34": "4GMVCxtsiqaxMZjsTxAcke7sMgwcrDc75pbKfUf2xrFVt95b9Cw1mC4HUywauh9DtE9phkKmNkXjwnDioJGGnhmF",
  "key35": "4CFEJiTsvPAKTyMsrapBpqQbop6oWib1UqT23U9Vqdb6dTK9LAFu5py3yggEVV2mevNteSReQRQLxWVLfuqAsYqU",
  "key36": "4gD7hZH1DoMtiVH76XGGDWve972LS9yen9dgoyYVthJjZo5UyYTcXADkEQN2gnMPSo4zaPaBr2iPQvcKkfMcmPK8",
  "key37": "3osnBEgNLt4qcBYtEuqiHi3vpKNsNauHvP3c5VWo7Dn18AgHtoURBe5BEULEogFarmr4MHZZjFzKbCj7nhr34V8k",
  "key38": "WsmhR7vyrKDoGpaeft6ZHH4keF7mDcnM8qFWeBLzsYeTrC5TTvg4eanXC1iHvMhmhnBkmrGEu5cYSsFaJXNdeKT",
  "key39": "4c6GSgbcDGm6xTfoxstvEdqzdpvQ5oW5gxiLdZpmgwmU8oC4YU1oEdvof5Es1FFmyDL8jYuVzk8dgZcHbShYVzMY",
  "key40": "uw4eVJ56t7aYuNPASzKunLoG1uHwGnLv9SJ8Fm4FGed8fL5jiQTn8mKEZLQ8EeMcLmZKYramZvL9DJuaSVsP7Be",
  "key41": "3SVNkZujhKdmYnnDSS7Bnfh14x2ejMs3wKJdYfkccfhXWLQq7EXz3tym4SErh84noCkmAc1x43xhHq7ZHnfZ1EnJ"
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
