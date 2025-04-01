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
    "3QXMjWUXWjXmHKLZ8eHtx9CGiQ3cRBuvR3XxhXi9SvhdaujMz2zrzMLbGXhPUbKT58kB5agSEY2rkcSGfRySKYAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScQxPyvNXpmmndhZzPBop32CRoS3LutLVs31eaghXUSum6YgVpDRY3jJVMaFYMbhiYLB8mPfD6t4hZJ1KUei5Cb",
  "key1": "5t38VhUH4XBRq8HkcLzv1sXXjEJwqdSZft53zFTVbtyKuygEqpXH7WJi1XuG11gGJA3iKvk4x5XpjuQLYxLoNFXe",
  "key2": "3LrTFC6U27FhoXxnYDXwqEPgGZCsCqgZqxQrKdZUpwoeHsDupakZr75xic6pLKj9LNx8b52UiAzyoS7Qxcho9snL",
  "key3": "26tZehZ5NJRRonwi6MfNUkSMZRDREZw3uXx1K7DN2emajsTavjrY9BjDYmWYHxzpr3iu1DUt8EgCcS9HtwZQdMs7",
  "key4": "2vfPR63uJosDviMx9DBx1odx5ue6nmHMbn7Ck84rcmVXf2TbH2HtEZQbf3SCeaJmfr6p3cYfgX2ih6xYVLCepi5v",
  "key5": "58ir1NsSZSta7uWWgqFbkjM6WuFwwtBksQWGXcjsMqsYAWjEJrGUYhdcL21UXKkWJJ9CT6ZtQSyzuAXSKjYDKJpR",
  "key6": "5PURaN1HPo6D9h49tAG8pZyWJdihgFHpqC1yjdzE5Dz1eVo8oLUSREhvAfrWy676RMGtcPhDu3Z7UXs2VaiqVQyo",
  "key7": "5seSuj2m8HZogPEKneqSXUkZjxAPDcbJarRuQHUMei6pu9bnNNNZy3KFgCPV5wfgGN5cu66uZ62LGQb39x8puAme",
  "key8": "2Bk9ogUDtoadSmtzxNbFJmgcz8aCgiZQzohBBBBeUkqXnrrcvK745t8yDwaTuFKL1JJioPH21UZqgaGx6m9Z6xgF",
  "key9": "2KPrNfduaaHtBFA6BhncLZuWzRnom3VfRXeYqNFRPvCWVZKPbTMsKM3uWt6cLmqniX4zuarJ8DTGEDyVWVeDauA",
  "key10": "1ZK21HfLek83cu7DUavTYbSGNVNKNgzFm2qdc7wuLH9bfrVGuQbo6aBvUBixEzeicP3vbvqM8mF6dMtjzeXnSxx",
  "key11": "e3fPKGLbW35beLdhBE1FhptkEecDBYSSGmjX4pqFboAs6YyTswzRgEJoD7HsdWqV6W5beCWz1kQQn6QEM2jKcFy",
  "key12": "5kw7DoAySaoNq8LPX5HMBD2X8fDPvc1CZreffWBMv8RuK9fajEMXtxCLJNSs2uZdnnsMzFfaGYwbtXwtTs18vbXS",
  "key13": "mojtj1YC1CLiDZTFDHoTWPo25vmPQeM8Lc368p7oFdXrFQC6gnzvWpeiQDVESUEDZ5t9WtUGE87L2XhKsWX9ehU",
  "key14": "5Jq31JDmDdTu5t8SmMwt3Xtxv7heQM2HehDQPvpSt7dqzZ3wbvbtvxFivaRzrAimebkWCMV28H7s6YseHw7hny87",
  "key15": "4STXpvwGJKa87988E2JPoezmRb4eCzYMNRj3YYPXF8osWLWdse8Eho7BHce7QKHHMRJ411noNATbynHtdybHdqZz",
  "key16": "2J48feysMfrM4pyLyXdvwZTkW8ijTdUNaWZCX3E6MAEFmwH9MwyJeMu8NuGq4LHrD7kMHPh7YogFJSVknjjkmBCD",
  "key17": "5jyhAkdGAh8gcc58UJr2yNbqTftMxmeKLp3wcXfxwEvTU5v16JKTwJp7jTGkYE4oFfQ6iXALT1kXrJniN5Nj1Upg",
  "key18": "3qY7Qdy34wpAqdh9mChX9592jFqey3id2VSShrCnyfNNUDmLJrGMGArXakhxyeZxFCAZ74JMeYqxQTUDFeS1C21a",
  "key19": "5RPb8TG8CJxSL2rPLkzjtCJuEJYfvJ82GCC1rW9M7yUKA9VWkZYXW96TaMs9Ki9pRDUR6u6nM5J9osvYih2QDCbv",
  "key20": "28QQEY2Tf9W47hYFt1Y9PWUpNyBuBPAjJm6Ndw1RWceLgBxeSUBAxoTVyjJtRzkKTXKURbu8XXssBFXTM1HvUhbh",
  "key21": "4x7GQ2dBQdXYPnV6KP8Rz3ZZceWdtbsuQJkWmbzLAr7trZa3SpgnJX4JokzKub5JR9MwhczBixVzkgo2LZXuCfac",
  "key22": "tfaEtt7insvDa6LaV6snuTPpTXGLPWnTQ5F33tqHziSmenRmfg62CRyFWVZLhKQL97soYFtCEVck6SCVM4nfdvs",
  "key23": "3PWV8mXPF5PMnRLDLk79UjBLVjPo5xvDztD95aB96TJp9KaRooWVPTyLVAEMpRhE2ssiHFvdsJZcgc8MJwVmEp6F",
  "key24": "5zu1xkaG5zMMD21xvvp4KXuL9cx7Mkpsa1tDE9W2nV1CczNFQpsYqNgGNaU29afLj7agwgKUjsSPLNd9bJwGUwVB",
  "key25": "4hUqh3NmFUVLRwSBGaRi2ysRyj4U8Dp2aSC8qrWBzusujTN2c7bFbdz5j2Cu71R1QiNkLWYNyF6qFwPnbE7p5ewf",
  "key26": "55bNaQBNhWngLkNrWGtnBoF56MnHBSdGDNL2DhWc84qBzVgZKxhR97MAq3mtjDUuKYjdrEpqXxLJ74E5fBapCvij",
  "key27": "BLv79BCx9W8hjdUTP5WVxwwbGTagAPtNJd5S4CF7kkkU9tUxD61E88YMipih36Xbf6MRCuuUpLpxwFuPBU5ArPE",
  "key28": "aYNQb89vRfZ3fUhYoaPMVe9MUAhRBfAfHE9dWofxdrfBNC7RNaz1d8vVuGRb1g4Fk5pMR6LyTH4shGbTkRo9hu4",
  "key29": "5m48shjuRdAvB3kwkRRyYttejh9tfqgiaTUjfAmRu3GxkvRUtst7aCxUY3DQ8TTQ3u72NPu4tnW5HLen1JP52GFV",
  "key30": "3L3HscHMttXqvNPF8ekvL4FLo8EQYbG11vrf3mr8jCrasbjMvpv8oHXP7tzcYTLHPVsMdydJYGCw3o4BYKWmaaws",
  "key31": "6YVEc8biL26d1e98qbCGXiNJL7d9DwC5VbQRnPvtgx34pTk1JzXopYaoNtSX6oMzuCuXHy1Hk7cYnf9wezeFmzo",
  "key32": "3bqyprjN8DdGgvbRTdpZnTqebGjbtumRDgZJVaPdJ9D9qXShmhgRjwuJkWYsUUGVG6nYcfrWbb5YFCcU2WrwBfBM",
  "key33": "3heduY7J2WtrDNv6ApJ84nvWGsFzLiniafxwN4dF4SiTcBwuTqssqw6ogYYHy6N619vtiaqrxWDZPkTgjotWGGvR",
  "key34": "3JF6wyRxjviTgWy2jPhiStUYKWCJa86Fk1HgdmkLtwWYBSq9TLfDaeFXmaEYHnDNXGFZvhuVYmKdzLXqx3wpTL5J",
  "key35": "5DjzaC8hyiZ9emniCo9wFzo3u2Dr6iofhr749tPL51sna2Bwr3MyN9XsrVtGmCPi3ZYkcWVKLejeJJLUNP4oqEJX",
  "key36": "fv2jzRVgVNjTZazS6PHocqWo3LvJoifJAwrg6FH8MiyYzj7ygGXvko4TgxbT4yDXBx9HxScuNUtqnDmb7G4J2Le",
  "key37": "5seqNMeoGNkGsT4twwybjnC5pK9Y9vVEeXs4Fte1GxLehEB2pLUBaXbJQc13B8SznTbroKD7AKbc7Mozm1DszawG",
  "key38": "42eA4pDyst6KP5nAbE67BUsem5T3kHR1WFtLkcnv9eSFJCqR14Dj8sJwfJZNVvqboLBNLXLjtfMvmgmXid5mTE99",
  "key39": "52RFKZNZaRGW9pV4fgsyo8zn1GJMWa5YnAnnVXxnjbpN1FR1rhtLirHf4JgPDD8GPeV1f2rNftRrqbikudG6ujfP",
  "key40": "3ijPoLUCxdF2PCP1D2yEdeGQRFsuqqjPwsGRBr7PkrFjxkCHTTWiUPLYaVZLjTFALbdcFzuoyzmzdodc7JbakHaP",
  "key41": "5EgbJPVxEV9GQ8vqPADWZKTduu56BwdVy6Lb44pdSaXffsz1nPA4YU39DRdPdFXw8F2tYwex2R3TV2ZN8Twimzgu",
  "key42": "2hchxnEYN6kvruiPkFr81EX4fnVdqnnEnwGAHh2L5rkCaXKEeHCnFpwpVGZVDeL1raD6Zz3W4NfE8LCEHsUrh16K",
  "key43": "5jYygkYiHBLDzHKEEhCi8aaMjafxddhMvs1VcakWpJbiQkermTn9jyR5J6mnb54HbKC8QRho2odnPC7FRENhwc7B",
  "key44": "3dKor7GvV24wPvk4SyWoTx4USt2zKb3xr4VDR6ibZdTxY9ZFyH249c6qsL3iz9wNmFBNd58YdbKSn2hRPymMHmxo",
  "key45": "3CGnoxofMuqgU7cHUyFA5gCzFqhonzs4HU8uvCjUNKzQYjdNYxcmmY46gamRk6R3SL5Cw8GuVBpsaroH2vtPZtWf",
  "key46": "28cmF1tNNLzGXduKYTeig5FbNdQt39EBVwpNzFKC89MHmo48bprzRGZxFtGXuRw8c1jD6FgGft4bnsVCFnCUimFF"
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
