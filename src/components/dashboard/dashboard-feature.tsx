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
    "3L8Sxd2p9avRxS924MTxfMwouyDQSRwjeDq9FMr8SX7M2gAoRUyDMLaSWJADqmQ6ntrpSogzwdtog3iGq3hN36wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocMU55wzidMKGbkv6KGaJBDfi8YBLh8emQhfANM7hb7saVaBjiYUqxzQzLo4bEJ5rjq4Nk7Q8Sai37NuPPuT9A4",
  "key1": "2xMiPNPiN81GQcWbjaBLRkDobrLH9Rx5fHHudgb9ZEFdXssd5dVm3kKG7CQRf4V2eqGjtv9qpZ8c5VorhKzYi6MJ",
  "key2": "38jxoQgTr66Jx7ycVizWSnKevifma89Cb6Ky2DVF6uMEARJ9d2NiQNjzQEwj7QJZPDEXJpdjcDD63KSQKsKwhSTz",
  "key3": "4mta2YF8V8SDeToRwgXqpVyjd7fbbLoRC4uEkBEoXEZkp8Bdn1LNgyvZYhBCVXrcW9K2SnoQFBS72Lo4ZhaymKY9",
  "key4": "5V4xNStq6T3DQrkjq1nM1aHwqqxghq1Z4GsfnJswcoVMZxL77CJ9ajPqxrrNkirZGNUs9i6XEjXykZUWfAGMa369",
  "key5": "55eL4V4aU8aAaDH652mb6XuVnj4JMreeYArSB7UYUuRL2pEeVGtVdfzgsvq88ksQD9frAAE2uBWcMAqy35j7S48a",
  "key6": "5jT57yRUnoRnA8V2AtMNRaWdAQHBcHWSzpMN4AZwq7SXdahXSuK7skBmorQyzBKdrvZwjrYCWBhnTp3LvfWQKxP1",
  "key7": "2N2SiC1CRw8FKPrBm8JLENmrtCKG9rNytWqay1JMhorCFeaxAHJGjVzBSi7vFB3ghVpcn8cEYUEnPg75HaYq5grH",
  "key8": "4xiH3f4AtcJkWLuevPnaxaeQEhf6YuvB9oaZ27ck4zWBriZtyCL4tXccAvNRREoaNbo8DHhXRDnx37SUH29Qgq92",
  "key9": "5E9QdiTCRPuiFMTzV36XfEKZZVkQ8hDzsbpewtkWW425jsZa8QDoauZmsFKBF6iYAEh9cfu6CLmb84DyTyu94cQe",
  "key10": "4huVCYucjg2riFVtgLN2fmBGMyobJPLjaLnxk1z2CmUwAveBsbyK387KrHczr8Rhi8MMvhtvPzk5G2RB7ZmUL6oS",
  "key11": "n9WifczvNETnEpDnJWGtLJuWJ7ZyxDmsERQt3BZesyBNxu3vugeZiSVXRVBiVSYwa5UvY6LKa21oqQGW3rTgeab",
  "key12": "5NkouVKSLr7pCWM8ytge5aAvCYH7HBdcecyrj9SsZJR6y7mxXhozCAtGffZc4PnvF3hzr3SJzUzzdtwyDSXCxLfy",
  "key13": "pmCCC6k2AvWfXQZHDEUNZTEVeXj5EQSQiPhh7fivmQAjUfN1tz9tDFNxAYtxQ9GckAqyfLRDfrZWFAcPVF8vx1q",
  "key14": "4YDKW1ZBgpq4LU2PNH7kwvMT4d5fsRRscrKpuvHpgKcPLnMjGxxdueHkB7T2riFjJw7DQ7hmrSunP9EtNVod4LQT",
  "key15": "2zWztd4ZVoQ4Q1NQRhnKZafiYAfePuXTTGryB7gWTka81LsuPQLneY5Bq4LwN535reUv38YCay4ZVkMXw7L3VtEB",
  "key16": "2yB9vhnmLw5tZS7VQFoEtEx3cXDCW4YRs6eXvsuAAWgFh6Eq2tYMhV1fnNthg5h8subjAXzsmmaEoRSht4KwyAaf",
  "key17": "32KdYiA6kdQxccAzMmiYnFmyKTCaxFf7jrv4qxqL2itjnL5W9hhm67Y6rEcVrK8d1W7es4gN2yG454SuWGkr6ySx",
  "key18": "2kagRwQiEnE8GwrdQ48zZrBKaVaUco6iHK8UUHypSkyyz6PoxzuHd5TpcejmT6eLh17mAeCERqfDo5yYKfZn8eym",
  "key19": "52zGWvCHdLqp1UYxJaiptNXh7TrjfGEjCq3JD6PZdByzBXtQEosomCk35FPE7GzdA77wCwgcAB87xRqBWwgh1piA",
  "key20": "36V2JKi6BHtLd7BYgkMbT9Kj3xogUfTrrc5qiHtcQ1eentEJWucNdgYwKuTzpE279qWHR2Z7RLFXVxXEfDTC9Md5",
  "key21": "2ntL2WE6SjL5afPbVLiCPo9qBEFYxm7vNXjWHPP83R5SSWYHYcFua16NA1s22uK1W4EfvTDhGigHmxTU1tMJrbya",
  "key22": "3qmNYH1LBRSJ8kjwMa13juvNB4LFEnaZkyXjthXQiXran4W7TRUE6v2ii9hYY35SPiSab1wJpjBtGEqDA9qHT6ib",
  "key23": "27d4wKwV4sxjx3Tug3VDuBAx8tXSogGyq3S9HWiabJwL5RbXy41uxKHQzbTxaKpA5szqUpPc2zSwwzGFdAnJqao9",
  "key24": "57t2D2fwyQJsuAYnJ6L1eLjKYiXBpnHtJwP1YihjPTvDbDrzjKGqFsYg2sp3mzPigPxDEjA9cnYFHuqYkKBgnAga",
  "key25": "2jAs4REVPhyzo3usXCgXUrCfXtM8PAHwRSNC2G3vw8mTVoRKhq8G36wXKQ8E1bivoQz8ekAHyDsDPgpV4xZe3q5f",
  "key26": "MvAT3D1b5zSFqWJaBHXDbMz6QCwEPT8fUwiUfh3GXMQ55jY4WQMdCRh1bDsBLC5q6pHe3zzASJvJkWWZvmUc8fQ",
  "key27": "2gUzLSGDUiEeCQeSfunTWEcECtGDWd1kz9Xi2GZZ1jmBsaPc1Y4E6XNYx2NY4Pmv2B7xmCN5LFCTMbDCWtVZHXfm",
  "key28": "5rssXBNtZMP5vpA4ru3Qw1sQpiaUDTiHUNG6EvhcqavoBJzSVJ1j7D97uXtrAL4psq3NX7LvDLBzyhFApX8MW9uN",
  "key29": "57Ye3vrfMBpKu1nGWD22xJF5UCfDPcT7zhXZ6hJmD6m4V27Mqc1Bztrj1G1TGQqk3toTHhFuyh2wyKnS6hyykKg5",
  "key30": "558vgy4v4BFM4iD6aLZZMgQxd3Ep19EVWQ9nPPepnXkuGLauJxJyQEHhmkfHQLTrdXypZpEnDu65QY3QNYm6ePeH",
  "key31": "4tva72LczXG7o9VMkEGiSS2WCdZcwfRj55Pf5LuPHiVBSrsxSnK4iugqDCjSCW6YqzuQu9ZthWZdQtK3DBGSt6sF",
  "key32": "53M6Ri7z44G9VHP6RwfLbYptxQKEiTqMto231aeAQjw3fLPhqg3WygtrGaonUVxefP3rUBiw4wwMSz8Pz9eFRJh8",
  "key33": "4ja8YPTBtcb8edGRKUhiPQW2ounSK2gD8Q6JLev8HMsM1czfSZsSbsQaG7SJKtrL5vDeBUpQRHPBcRyuSaeUVLfN",
  "key34": "2YtYgCocMvdUJ4u68b4BRS6xUxFYBUJvkcebPLYArqPiXvAfHC1g8rzEuUgdtuQ4Zqvm7Bd4ssquhwCaoub1mB4v",
  "key35": "5K64wptqSGNKHojr4DJK8NZ91bUswiW67z73ZVKCukPgPtEhtWbq3ZgzuKai1TDL9Bbi4WafaMou8FFXnUqX5bWJ",
  "key36": "5EfNZUV6WycmyE9cy7bpNbmfSjhTrdN7bhY8rwYBGuT2tMiedSenVkPAXPJLkjJB4NeArZBJXkZ8osTpT6EjCHj6",
  "key37": "JsZhJesR2QvedyZbpQutbzHw7sVQMiiQhqYwJz2YywAgkNRUiLPK4BGAF4NAPqB1TX8uY1ggzUVqvNRQmTQH8L9",
  "key38": "2LDYZA7PNiRRjpHzkvyKfXt69DicSJZAiWeHbz4PozznKSZAzvRivzDs6iGDaGkPR9u6jpB74C6ytaaFVUtXL9CE",
  "key39": "5iQNPsxyyxWVQcZavz1V2kgX82ueWtKgMN3mR7d4dCSPb8SqLt915RsecAh9dtF1XBrjgfZDvZ9EdgmZo7e79faY",
  "key40": "3amB1koUJ6pAwJVeHGzhx9Rfmh1Gy54t6aBHR1jrvwaGaQ3briPxy954RPiGm14eja2VMpee1iP5xzFWSA4bhTXY",
  "key41": "67fWTBfZvq4NEdRpYZDpsaSpD9d2YZZuUpUzyKWc8GREfmv9EM3d1DdqdodBc6bFpNTE8nkKnWgzR5mCaCZVKkmn",
  "key42": "2Zqri5CnFdAKRf46VJuodwd3uskid3EshqZpNUZAJVcsGXCXVejHpGy3HS7iTpgXd5cEmgo5Xpyd3YHCDodRrXM7",
  "key43": "4FvQzc1YXdsPHiRox9xtMFH5CSG6sRpeaADrvWS7JxBSqF3PHvr2iX2X4pvLGiVhpuXGEoH33cmPMG6D7EKC4xBx",
  "key44": "kv6kNjiHScCt4qw7jebumRf5qmieDDdRdnrkz5bbBsnEbAQoD6ZZ4UE1NYY9omZwcnsBpqUijUTP5PvkdJ7iCuK",
  "key45": "4t9wxUETAEzK7qH9F9iDQrvjeE1bBGwLCCRdt5Qc8UjWMKsTRNTQUHWsMa8Zy1QJorTSpf2WfnJ8YsXXuVrk7RAn"
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
