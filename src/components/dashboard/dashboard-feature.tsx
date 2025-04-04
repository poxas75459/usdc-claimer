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
    "3foMXrQesvKk3nQ5dHcEi2VMAB4Loy6bSL7CsGH3vogmycnbt5qVh8tLHX7fht6cETdMiXqqLiXmgRQVmMq976yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KU2teTwhr2XvVbvB68dpc6fsLRJ4NHaXpq7WFvXXS9SsPo2GDgBh4Yc65eJJ8jQryUXP1cTqSG8WEkkziB5BGfo",
  "key1": "Zd9QPx62gqaUpU1z2ttWXmLXBz69q6GZRpkiW584m6CgekJPGr2wfMMDscBvnhKeeidyRqdJamw3eFWVGhWDFVv",
  "key2": "uAsqEfjEpbAV1aK9PkLyxcGSdNWbuW7rkKN94M1RCRMsZLQxtbbRKMoWxN2zQ9vUcjUi9kdtCEZq1acYT4o4xL9",
  "key3": "ASg1AE4SKFV3R95iy8nvMT8q9dMCsDZJhSV4SBz86LQbazDQhbAXrdWbsRxettu9QqC7TzzG5t3rGp9DMSrczED",
  "key4": "4vTkpJYbquy1E8RuHcB5c6Hg2ywd5NKvGjd1DFzdmjPQKK2TWdn7wV9VUtWrgXZocQF5J5t2WFEYa89z1w9Ne2Fn",
  "key5": "3R92zkR4zixERk5LRDCw2ChdKHCnHN9NwjjhxEwGdrdBEMmX2XV8Z9XTVGeKvftWao4rSKGdDpDNd9QzRAAXJTbg",
  "key6": "4x1aWuKeFuv8MChcRKoVHefKKuDndrSaV1PTpMbfETTmJqyPHFKH3awAE9h4mowWFDeCfJBaCDvieGcmSUSHgAHG",
  "key7": "3b2RmevuFjpm9Uy2rguxRgJhPQxW1jsiFPHMQ7BJYNWdKXWZ135tBav2aQV3Ni3RZDwmZcEqUHYWeXQJe7QtghJs",
  "key8": "5M7tmz6CenS1oJJB2UnKKvVCU6zMGWsJDwnN4WEMTd7mkFZWSfnVe3fWTK7nd3mouhwaiu6KotwEEEsw8VS5WTuW",
  "key9": "4oipxPsLGVEhafPPjbrfPwniZ6KfWiYyo5Eh4PAWK6hfgJp8icPDfFX22ra9KhBhJAii4kvPWjpqydbMoULvc7co",
  "key10": "3Q1pSmQyCDMV4TPVudsr6jb7y1QMPv4EGE7ztDuX3DqcFuWWtQPLo6E867xt5RD4ESgNBVSycSU6zg962FYt6nrB",
  "key11": "YLVcmbbKgsLeYEQPg44LzMiSUrdftXdNjmwWG9xeYxDQKmgLUVgiZ1NfqqS4mg37rHQNn5bdHrQJbzf756YZNuB",
  "key12": "95N7wRMUrtCZM95xmUoMba7P3P7UBXHwitf8Y5Ne3LfPuz3qvtmQZWYrRXxuQSa3m5T4STbwxdL4Gdh3CQtmSck",
  "key13": "q4UWShKd299AdaJ7NyND1wGcQGzEdwXDoG5RFJVfKMUHechNGfccU5FYRm8LjbmwpNRHtMBZboL8YiGjmJR9EZE",
  "key14": "2LSkSCkhFoPxRWpj4Dfg3GM28KzoaEJXXv2FuFrE6pZaKA6XnW6MEU6Be8HZpXyXc1D6bjnNmujrDd9ZhSQ2Adt6",
  "key15": "xD7JrABtVFYsCJbchGnEDAxmbCz2oHngedqyuU9gqtzGkAPxDGwioWBm7gcChYkaG2Fq1cua8r1LieuEuF4y9YH",
  "key16": "4Byp5oSX1MG7xRo4H5V6Xf3RBoUqG8HnZ8QPPtxs7LaKhPJtSJFqJSCFoYxJGwK34hnFRhSn2jcU2odfHSy5UVuK",
  "key17": "31NaLMNF4XK9akhbZSdQuvJphbSi3MPdWVHPPH4ESv2oakCmnh3TfQvbXB5dK35pALpJqhxBmvxzMJTGQQWaQdaq",
  "key18": "4HaUSbnaUnQgJ313tX1QYUkRywPD7x5MuxNmvMxWcCRK8caFxu1EkzDXbsc6cEKu157wBFHRE3rGv3uGwHfJanUr",
  "key19": "5HHmD2Fqu6FktdhBgTxnT4jk69ZS7zmeLGEL3VrABP7Tor2CNnSQ8MLPEm8avdjATwPp86gTGcu2VCAwGdKqnp8x",
  "key20": "59d4KEiYUL5sMi2pWCp2ejufRyisn9qtX7Gr4A3CCj9EGRm6acg5dZeyo2b9rGTZ4ZJJ5Bud5dQkzYiBpEKD2PqR",
  "key21": "5XvZc7sbHZNxQG1e9L1usyegtHhVLmrF3k6vgUCbfZAAnDZRV67vMRS625F8EVx2RLBgHnAXYq53otCwxS3wRuWm",
  "key22": "wCAppTUGyVDdgYGV3GG7PU6UB2jtAW9m73foMH2v4UYzagRezZefPBMCsUHGyVvgvfFmXtRxMQhWiPY5XsYgqqt",
  "key23": "28NbKr46pVrY8hG7VX27DFvgZhJV9cx3idTj7nDehabikhuaSz3yY6bq4DrVLjkN39DbdXch6k9jgteqKrMDSYn7",
  "key24": "2XAekvDZiRAMRcszeYjABcyxK5Q5AMWRYvzDFVQUFCEqaDhQRsQ8WT79BEdWGPaP4EuGaoKxdvxCg7FCCQjsWaoD",
  "key25": "5q18oy4jdBjbehv4PiV9r3cMoDERcGUEKpfnjqo5JLMhQaHmZceJgfv6cRMw1mwPx6cfYjRGmahduULY78S7iu91",
  "key26": "21KQd3xFfULAass8YrRS7hy4fC82mwphsn7accK1Gziiu5jivS6rT5H8oJXZPDroZoVeMpWt51YzQVM6vcqgJRZ3",
  "key27": "3QnaPvSDLARc5vvonNd44pRBz7SwXLewZKQSYcs1HDdVonUpv9wkkgiddjxvvJPAspAsb27mizzGm8SGG7KP8RTc",
  "key28": "y61PLm81C8qv3zqTTrHdVo4Xxwacb5ZN5Xs1En4at69PmuPdgiu3xY12SdudZB6PDLGYptezihFy9TuRYfn1mtn",
  "key29": "2QLHA29wgp7cSCWjQTToUc1nEvEGuCsQD4nw8TbiY4Dcocga7upP9JmMsngY5RRhgDEpbNEtuyQAmzWTvpm4asH7",
  "key30": "jZQ5F5gPpgrRYK8XPKM6rh7Zq9byEwUmsJXPFM9iebWvj8ePX1JPD5sFCUavrFt9rNA7zKaUanSphx4duNXmBmS",
  "key31": "2AxykBD2Z9q4fHivitTzvFT7kjsT6eW6umNx1uN44kh9ok8FPYETnz1kmsKAg52Nh5tWzsi2HWTy8nj5ejTY1nrp",
  "key32": "i4rB7RAbjhDJnNc4ZWGWoR6yoLCK34MD1dRcGe8eg4NZWAVeDf2tyDjPSwKS1sU5yfKyqxK8uPyAmXJ5anAnFuN",
  "key33": "2dC4QScN5yPnvPbuTgeJYz8JackQ7Yhbraj2pPLbNDzuBjDTENUoqLEugEJBX6DuEzsxLUxihWLi43CwKPDQfa7b",
  "key34": "39RQm3GufjryvNxEPbZcb5qWVescukmnyDbxmRUNyHboVk71J1S3BHWoaELmeACeQ37LEhFEwwuM4SWsrYSr9ab9",
  "key35": "G6XZc1a4Emb22r9DM1x5JkKY5tdrquj31mrMoYRhUX3hsSi3dQ8jxP44eJ389XWDakAMLUcBcannAzbw4vuWLvQ",
  "key36": "5PFpdgYckTWyC3jrgBuPEivo9uVr9iK1AJCrTS2S5ptHxbuzNTiPK2AZkQEwkhmrDibjFBP8YFr2TPL6RdHJzBAk",
  "key37": "3RY16WqoqWTm1JNVQYDuFTAyj8qBmfiqJeevCrFTafE3wuck8LYmcBFx7ja5pWRyG1CtKmeJZyRcBrDRDTyGvapT",
  "key38": "Qg53iZ9H6rPFGA1CnupQMaZpPyxXHcGQuaBTo3zrFTArEQjhni652vLnKuf5f745DAcLpZXVD4HG6xBcvCRdRkR",
  "key39": "51qPj87JyXwHdK3P32m4sXJMsQPDasjN3pRhEQ9NxW7Uexwfw6oEHBrnV7oqpCzwZrHedSrqJFaRj1eiELHKUKve",
  "key40": "28A64d7ziT6AbKYT6HK3Tb93Fqs3a7GUEip43Q2dJBVotA49m3VDZWghSVDbCu3TMrdxh9xkQgbH9FYzrd2H8wDZ",
  "key41": "5Gvqm2NigRjP9Zq4fq2D8KS7Ctxgg8FCp4jWBxkBrzYvb9AmoKbaXwn8QeNpENh65Y4DwTFsxJxLnUgMeG3VmMBV",
  "key42": "2QXE914uETNSWa2AY8d5xHaRvWZSpzkFLbmKTDGRvVvDPoTcTWDF325zBmhanpVxgchBLDbuspfYa6KnLmow4WAZ",
  "key43": "5PTP91kK6ABSBB9jEf8kmQU3o939GaSJZ1YHqLbmVrE29jH4jyKaSrM1UdkRvrWVMf3umDUHoXeo2Jo7Tah7zDjr",
  "key44": "JnHNitowBZ58bUEhr5AQuT1w4XFbqgsiHGgashLiiEKsch9aYqkEyLKx6u6nmFRCP1L6RHejjbcQS8rjoLWEZTj",
  "key45": "48KhpUTr4fXUXpVmXnQDfbbFpwrxZEvsyKJuTkn3CK7icAqXUvYS7swzETGho1b1UXCStWERpLsfUrD2bG7tDvuA",
  "key46": "q3G2ACjFyref3CNtcwfymUoDdk77yoV7cYs7PGdEoHJEu4X9iVu4SkTfEkFpuvxsnPcSCFTJLrsP9ZrUFEWVRMe",
  "key47": "5WWyRdGraTPemdy7pB4FfegnDU2bJGyQCmeMNyvenDuqHMg8tTsqcnRNFGfD7zpYYRcnEDH61DmrcoFamkHQnpbA",
  "key48": "2osawrFbBoi49K9UEdqMkKWb3kkNPxqTFKQbD4Brwe66kaPKaZesuBJQEJZuAPR5AEF6HR6aukrTUTgzM3CiCkb6",
  "key49": "4CzrXKbAkZRf53yX3CqcGZQEASVxaaZ4gnJcevaDJPqP9ajmftxuhF2myPiXifFM6PJrPg24jNrwsAk7Kb7fzEt9"
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
