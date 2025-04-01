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
    "2LDY6wDuBAKDP796Xi1s5qyGt73Hcm71hEpYGjs1xYFFTqrqCiMXC9KnmUHRdufocc7NQF8HtCKkJ7x6cqaYzNrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xmHogLN9cs9kxZweHWWUR3UEQnMTSvUSuPh5CZqDMuEJADxtx8SJ9qYcxLceYePGwALb3rhMW822uy25QcZxUh",
  "key1": "4yj1RVrqcJCtfZAfvu9YSM1WyscFuVmbCCP26bvoU79jwjQfHs51yPXCFDnH4G2Wq22PouEqQ7MRWdHigvAGWGCN",
  "key2": "X1Un9fiJVJuaAR3Xxo1GGhKMFVrhBYLnZwVXRSK9R59ySLAJhuJwgFKQT2Wfk5GN3ASjqpFbVKNZKyhUaHq4sVo",
  "key3": "2zKCUEFWMcNNwzXEkZzW5NY6KfF8vrEsKg5w531PntaairpS2KuiCwxJQhchcB1KQKdpyfm5c1EoGMTMt4JDXrnu",
  "key4": "3admRoqjfT1g6cRjALUEowFCFK7eaZTJhutRyxYnmbBvheAdBhzyBY6QPzE81TELosMqtXeuBkX9gKgmhss1i9r3",
  "key5": "4GJo8aZQyMxrwhtqjHL2AZ8MTsZvAb6FmpYEDvHD8FbrjYgWUkrofuRw1YBZhDtX4qk68Z5wj3ZPqRN43MNCrPqv",
  "key6": "e94QngxpdepQBd2jnjhFWjfgXb1PmxqSpFSHAHQDAqpSTbzTHuGzSatLNyh9e1ZefWXpnoVmZtDUyfWB3DubR4C",
  "key7": "55xZ3yWxV3vKjCgjK7947Degez76PwiMhumi81DhTUaKsgvbeoUuqBXy5xHofDynjuuX9rg7e58fTr19opRJGVLe",
  "key8": "4wwyQbWDd4CafukDib1ZkrSqePGfBv1Y4L2q3rvjDJhYJbDGM7B8GrA3ybosR1unJ8iSEUtTqy7FMB2PgK4xHNkM",
  "key9": "553k2ns2bPrJmRhLwo1qisrbnPZJsyWybp21sM57A2rxvfJdb12g3EesWEkjNJ6RXpa9846XCGZYdaccKCDjJje6",
  "key10": "4RkjQKPmiBtJvZq56x5uCr8jHtyRMZ85JJWhMb7hTphdZAgceASAF7WAWZ2g5EiLVFNR91HqodZPdXR2HhSsuVFp",
  "key11": "2DnQLcXbBkZ8nY2QZaFeiKrYjjhbSujhLKm2LE8gFGpixGLLbkzREEfxJMEhbHjRCEr55bvj1x5EPfdzhLsxLyGa",
  "key12": "Qut2A1P3npiEyy2qx3NSxq9Lttp6QPGiE8WzLVcjHYNyEptFvYvxQ5ApzeWCJrJLt9qBZRaKnBjWcHpBhCHiV1t",
  "key13": "3gsrkE9qqdnjrzhxwsc47p8ahg44TKMA4PSCjFT45eumyLLGc6PgzypiEZAvduoPX3LQLcF6QD5ypZkcmp3PHuZK",
  "key14": "2JjWx2zB3hKRUNPwwoaR9LjPjhgecuPYcMhUKTqBnux32Mz1VSNWBgbEgDD8w33nJKapAB24gYRDgNqpMS3m4SED",
  "key15": "46mXM3U3ebkZLHJaUhsz9qXSsooHGZGu9n1tzx2GqACm4bhopuoxkfQ9NzMGfLpdpSEiFni6Npc11dhDseY7m2Ux",
  "key16": "8qSstnYUHnBfuLL1VGTNwrtgoTC69LQ9zJS8KHGBX4kyg7XrcYUsuc93BMNBKxMa2mE5m3A4SBZLWsZqPNnrKSd",
  "key17": "327hqi8dLTUhQUv7q8TyWnDLSAWbsQpNpNVvu66KCiD5GixeoadQKYcK4iaMiwkFZidcb58swRphAj7RuvJLeiGN",
  "key18": "BnKEzr23yXcUWWTVncNun3j9FR9MhYPuCYZ5FHf3CJ2wbjHCbPFDxZ3dk9qiExaT9kx4HbCDjfpTTAetciqj3kg",
  "key19": "2FonZTfF9pYmEoxgHdsqvQk1HcLLhDskuDcjcWski5Pcj86hJ6168L9ipvPnwgjCnXmup1WV67ayQhD7qR8rDsZM",
  "key20": "54ajgpvxhnZabHw5KkTcw1Qa5hcMFeoTGS2fJWJgC86dfNQdKy6Ag3BAk3Yhh2SEuQNBqB1PtCxbA3JdrQA7hPzh",
  "key21": "6dofwVoC5WTY37d2bMVaznZ5171eA7GjsKx7wdjfZd24gQWme7Ecgo8QcXa5JPyAbMvrqeuwNbvEQtS7NL5CmaL",
  "key22": "bWwxGzvWe66CDKX62bJmkecR8aMccV39RUnGftCHSxWfpnqJM8A4nX6s8a6n2LcW1TFas9sU1yFnoBPYGnviLZw",
  "key23": "62tYBSEbw289CEVp8P5ANpyHReFvcZ3qW9ZDdwNShLR2KoDuHk3qB3DWhnvzYe9dQ43Nhz7xwq8wuPCAQrnqFoLf",
  "key24": "3SNpUQM7XZnKodSydG3AgmmTgqzKMxXMnoV5YeNaRZxnyxAzZaUxNs77mxDdWu3kzWmBehw9u8bgsWvZnjdHs3Ft",
  "key25": "3pvEk8KYMLwuqaL9QgR3SbVEgfnqiSHPJ3hj3rE1wEbUPg2nbYXLaUC53UahmA9dJ4htPAY8MfqnPH4dw7NZfMRG",
  "key26": "4gEYJNPoLSXxLJuQyeZZama2RU5K3fieNp1C3m34oETMJa7pUHjUucPxQgMqATDeYL63CEKjzJFfVAXoVpBSDEVV",
  "key27": "VbRWqZMgAz56YhrjMKRg8itoq7X3QdqsdmDwrBR49ctdmTdUDMmVBp6jDJH3hkQjjHaabFNyLwGQ6D9F6a6YERX",
  "key28": "49ULAKrmhkvLDbm5z12MsFoxkECjc39EFJNL3qR2eua4gC1QfijmC3TcNUHuYCSooXc2FKMurEcm3xVqigDKTDxE",
  "key29": "mCNq9RRZP62xmhPbhp4qcbJQpbEdY9QQMVQJmA8h1yttJzW8DHU8JTaxtNTC339qurxXGjEa9TBF2fYHCZGWpSd",
  "key30": "2ZPHteZ23RgUcHC182D8MQz7xV4tuL5vFZokFuhH7PbbnTYkzLDEzZvZMfUJf4w29Rv2eQPkY7s2su6QkkJs5Wfb",
  "key31": "2mK2HS1qY3V4RfxXvYss7vSPUsny56H2Z3oogQ79DAAFzD3FtdJ4XHtrJ5Hd77FT4D2wVERCdiGVmbvZDPjLvtE2",
  "key32": "bbUQFXsVb28EpPbAFJoowK6T8cXZqfcXovpM5Jijd2tQLC3j1DEV6eh8emVxgZwJoK2KkhztYjYXNNxbD2tixMZ",
  "key33": "3uMfHtF4eAzDH9t1r1SJKY3P9nsaszBijMA7u5vsouStuLhYWHEeUbRnHaNtq584o4R94P1yX5sjH61H2VTspKsF",
  "key34": "4xR5H5Z77yQF7odCpRCY62KYa13gwFpMraRGihyixcvQKmogsYGuv4aiGVBLgkEmLdUbd34GdyaRAyXkG3vmxgtJ",
  "key35": "5YttGMCaygWvQbSnHJnkjoztq9uScG7aXa9c4Tbw6Yho4XSc7DREfVyrBnQGs4doTkBWmQYTzs6HgHJbqY7WheFD",
  "key36": "42zteBxMLRLtT47yZfYirJXzcsU6474htv6s564AsDSrFMMEBwgeFb2v5TSoHTGku7NrgCpdttsYcPBjrJTYCiw8",
  "key37": "6Ah9bekPm6d9XaQin9dSAcrkQ3gWhaWofXjQMyHRpzL8bXYi5DUy5zMpPnc4c8zmeLWEmuYZBFXhuB6pvXdZBj7",
  "key38": "4mgwuDRJR3tQw1HJytmAGXkVphakE8i5GfAjgSNUQwVA2kMbXACFbdeCDzNDV74YywwdMfgPbxMPRYCxNywnk3qd",
  "key39": "67oLgWnWwZeAb8cUdkfpi9FP1jMeBJSG6buWrpE4LySF7cYsUbpF8ruy6TPLnkQFEuqmsehbcu7UUzyJ2GfHgEq",
  "key40": "3ZgqKD3r6kimoNAu7oDr4x8CAKrXySke8CgPYDXitbxfH51yGXYk1DWBRpVQzGbrxaCXt4dCNdLjxBNfkpqVFybv",
  "key41": "3wC9SmioBrri512UQkJ96Sh4keE2LRWtqq784JFs7sc2PcofRJoHYkC5V9jmWEFZLm49QPyrF1knujJnALFCr9TG",
  "key42": "4pHWZkNbZboNfB4c3H7gDAyeEUkUj3QfiEmHSEVT5joksRUQLntpPcPGtTwQGABWxbu12Z78u7syqQ741YEy1nwS"
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
