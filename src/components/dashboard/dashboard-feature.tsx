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
    "5Lk1mLPFxycM1wRw5JfZMM8ta61cJS9uLRUy792fUE6U6kRtxEFxYmbBT2q7zpjmJrd6eN6BWM5gJv7aFWNcTygs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SBgnWpbhWap3MCB3UM9a5zREFQ1jCCVXkGERAkeM1MwRNtVC2yzAuzoeDij2Y4MUG4YsQtGLmvywwk1Vqvdip66",
  "key1": "5zfzX79w8XjMAUYi9aMAZS3vNwKn7U9p45NRPaNLJBaNwPLr2m5nfv9BzyqBZVt8kMEPezdWbxawEjt9dE8HfDer",
  "key2": "ejDTmv27rAhLY4Vf3PC6Y8Yhz3L9ypxRVRFPok64xMin5mMX9KJrueCGbitymgtMza274VcKRoKUmTqUqe7x8Se",
  "key3": "2Drb7bFvkCRgHS2pXd24NTBh6AjChECA3mWBhK9bF4bEbzjGKVrq3Xa32QunWywRKT7J1K3sFGuTYv27TTCH7MLE",
  "key4": "3q2qD5XBntJd1UULZun7S7P5vgZqFh6LUCzYu9WVmVwTSnqDcqWwSWMZK9o1wbV2TJE4faB9z7VpmqWCxU8SBjKN",
  "key5": "4Y371fPLrnxCtCURNeXV3YSDjys5Xp9sPeEEvF9te8GNiyJSmujS6P4btTk5nEG17Yt6nZDTA3UfNJWzQWdhtAg8",
  "key6": "4qoEPS9vZBZ5m1vtKieqXnENR6jSawiCSpUeuaHuAs6jymcfQfdsekcYzBiAmFG9CNyWJAuWhRM75J9PUtVLmUBF",
  "key7": "VfS9Er6LXF741BXuswwhJehSczQAr4ESeoGABa1zFGpL745XiFVH9H2ga3bWSU2ti9myxhnREFWPmi58Tdd2g1M",
  "key8": "2HfSgLjMjHibxcHRNrSgx9Fbhzazb6WaFv2LgkNFyKLivUD9qMJB6KktUYdVwJEhBaCbMgSKU7soVf2iG7hMdByY",
  "key9": "zNcgxKDFFT52SB1krUabqRadCYFHqoZrBJYsjjTX24QKsD2jRX84J3sBe62opvyUrWubDf3o8WjMGx6uLg4RpYq",
  "key10": "3bnk57opxzrCyUySf4PuwCCzL8nfDG5Ckv2CAyLAaKmHnMt5kkJxGGTnsZZToj418td5uXT4KigtfER5qJ3qfVt7",
  "key11": "5R97Ge4NqwNm2pLSSGGRdzERRddYqRPukPnyx7HSPVSQfcArh94XqcK23h4aUZh5tNuX1bHtRywuCaqFxjGMYAvr",
  "key12": "5oxTipJ9Dq9kSvmme3mtdgeb1jvo2GQkENfRPrrN5JwRL6wc1zHbTHaFPC5p4CTfrGZSWrKfVT9xrwoxe4RuYu5U",
  "key13": "NDVGWteP34LGx59UoEbu7ZyRaC2PBBJDFUQQHK5VruJdMYjE7j17Ud3XsdKNpB9xJSSMZ7t1DGdrPJDS2F7pxmV",
  "key14": "5tJ1kSw2HZEsSn3xGDpZ2ruuQsXTcaZvr6gK26uux83PsauWutmSufW2rzMiHHt2Rh35fA7D6tiHPQyynMXga8SA",
  "key15": "zTJoSFJAqc6fNPZ1Dax1WxE9a4WMX74w2oWUqpti3WFG29T2ytCEj3EcEwUKB5ZbjijxPLdBoBdUpsuErEzkXPL",
  "key16": "4MS6SsZzsmn7xyTpGrxGA2TK9n5NwetjgiczJUoUD2XVitrf5xoSqyE6HNYk36MHEgG2Y7nS9d2zGzVeQkRkSrmL",
  "key17": "4D9N1RuFdjQAMquz9BevuNGPvMMUWj4CBwQujW2LdjorMjj9NsTBs3EKWyj5BDz76iz8dEXvz5V1mutXHsZhnqfK",
  "key18": "3XgcNgcCgZkKfSzSrMSYGDx3JQS4ETKcJe2VBL36QsmW6rGTu1LMPRBVDCPUCbomjspieswcF4V3EKHLo4c64KuR",
  "key19": "CL5HKXEoQRwXfVEgL54QKKshKr1ymjbpTV2gvTF7KSyo1nzR2f2ebyUknhjyV2FBSJ7iTdgugT3mHyt2zHEBJW7",
  "key20": "4xenqfjSykgCV9QiQ4LQUh1Q2JnXPrwsiDdfA19WeVNuB7sacXCWAtnB1Q5e1XJMkgogxxyNKrkXHNxSmM2brw9a",
  "key21": "4D4dmNna6SzWq5Kv5NCdvYKWXE1AVvF3vb8BkJMKVp7JwuSjkKwLtkQrMYxnSnoWbXjoj2feLeKRbgHwU1hUyAqK",
  "key22": "Qw1VdoLxMWXrtWD4MSSTweUe4JGxmxaAEfgEtpmXBscc5uZpaKTiAQjSzVDjbDGbkTXhDGw5JjfHo6ovpWwNwnU",
  "key23": "5TfThDAFFWmKKhMoSDQbz5hbnKPXFU9HoVoQaJfBMPK1bEjMfsf8NvYvuR3hHsAwugb7uoGEqMzRPfjDvjaAKPXd",
  "key24": "VJvmmR3h3yPGfQKA7foVoj34xJ5wj7eL2M4WSts465HMYAQui92LCpJzEvUVW98fAVgncU7abRCNybcUCUrzaZ2",
  "key25": "NcMC3FwyqUo5NMf2PDH9L3dWnPJZgFGeJrh8RVAoZAur4ayquJa8acfPvFB3dNqJcyEkF95NBwTCfw2xkr3BAxG",
  "key26": "pe7M4Ko7HHkJ6UrtKQNfBCzpZjqywEx8w4Y4BSDxLHc8pKCqQ88BXYgdNg22Rj4mpL8BntAHfax9uJrxxPY4d21",
  "key27": "2kEv67b2idLFnbVBiD8a6k5pLwrc68EvdWHKS2SL6dsthJ74YE8H25bUpKqB8JQNEyu5PyvUAWfq3wSLzmE8xeUY",
  "key28": "5MKXs5zrPFApwr6b1cgPdZc3k61ikUDiimaQd9iJPcYJM5ZhRuVitaHqGs1PCP5V7dSq7oqbHVxAvZ4zunoWvpXD",
  "key29": "2xPVz8iGx9aMYWgiLh69J8XomDYkFpuvfK62dM7Npz1KcaAn76Lg5KVk5Nfozs6eK8uyiddt13Eaba68qvMXbARr",
  "key30": "5Tw5C7F6brkNavupdBSayGG5P7SBaxNypdhRV3PHvMv9J1WByERUwwN2K7CWm9gVCVnDDzhNcpcCB3gJDfYkPESV",
  "key31": "4JTYArsv4Fom2Fd9TjYZdrhcc3mrzk761UiNCzqFToB3v171GQPmcmgXRTTikXtZLYHtXnApJdWXUiVje8psMQ5S",
  "key32": "2vCpkCv45es7hHjJ2r9mmPKYt7KRQGtkgDVXoQEtYsWpQCb6zi9HNZYmUh4ddGyHNzcVsPYzhTiGFGoBb2eSbwC5",
  "key33": "2WES4vS3WUEG5F9Pfk7XcseUk4Spdv7ZHyJUqtbqsjgdsNCgugtcPXYQxpmjGyjnqrMqu4w7uCDEBjwFYHLFKMDo",
  "key34": "W3YLCyw9JTnotCrYUwhfVR2H4CRuCk8bey81q2wD9V7gGWzaH8X27kW2QLZzmMZYb6p26XDfjPhrubQ94igKspE",
  "key35": "4tRw55zhSbKpZoVrFAdyXQS6dPVRQJpqmJYqbiSHAACX7xYDdbfmVj7QEs7wSqLDeKTHCfnv8pLrpuyomdizVH5Q",
  "key36": "2yDouHtvo8K43rCvL2KQHuHsjVp65M49aZkxM66DDynHG8JVBA4a5aKRpnwoVAT68JZ5tRozMBEHmDtuAXgqJg1q",
  "key37": "3BzA9EWPST9xe4rWk7WMGYaAhpKtMxk7xABScv63rt4QfnHeuzLQehREFXZHV1DgDmkwdyQmGjSEFYCK19DhBtn9",
  "key38": "2Y8rnu496Cv6FnvhUsAEupcEVy2qWs5XarQJvRresRwbyLyva3ASkVT2eeRYhByVUMd5YwD5PSpY84ssvVWjJKHt",
  "key39": "5RD6zyZtEzCBPYMw6MhUeq1QARUUaXDg2VzYMkZScWrPyQ1EQh4TTvVi2STiubZFhdRQat4BU4eAaEtNZp6JjG9L",
  "key40": "3sVXXZgQzhjsg3iYoGzL4e6SGmLraz2X3AoXDnp9rz1CUpNFwLCTWWmtNP38JmgDtZipHbiWyHCPzRpVKzSyUmm5",
  "key41": "1FvMMNKnEeyBPPdieWZjemNohDi8NCpLHmRDegpTP4kRuswt9FfZFDmCRoRuts5LHHJ7mxn43CRh99BZY4KSoj8"
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
