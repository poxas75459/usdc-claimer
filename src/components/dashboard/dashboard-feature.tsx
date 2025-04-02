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
    "2KWGYR9SceoaSMQv1BAxTQxNEYzocHr34TBpB56ZrJwu6Gnir7bRSYAaXgnhA8JMPv7P4rn3zDDyjn9YZ5eE7KX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BatmbFzm1CBjmv8SjjVsRiGuqrX47mCK6252dfThiTGiYZ6rRtdKyLSRtEueSebJ7rCMmJwqQtepDBiys89hcmL",
  "key1": "4ckKmxDaXULmfgxonEmafpGKzwDr6HQAQ8vd7YMaympmvmYxobtmi6wSppPTuBJaDam5p9skBLMb5siKBmH9DcJg",
  "key2": "4xFdCV6Zk7QRsAaeu5Ksq3ccgGT6pWPqpAYQMEoZhzMvkgd57Jmhh3vopKjwgzqoMjKmi9wFcrCZosnTz6ewBqUw",
  "key3": "2535etgxhesDgQ3fKTinn82bTVXVuqSBbuiHujaKyFS6UfoBphV5TahgUGAERXeMFyqy6kLU42WyXv53szHzFnQB",
  "key4": "5eykB1wDwdC1dUFPKVmSw1MeST8MqFhL3xgz5thVpKtXiWdvXjjM29DacgDfjfEXowM9S6cTcpbUtihKDRMq6Bgw",
  "key5": "2YwtkqeohratPecxE9V9QdwANsq9WU7So3YJZCJP2X7j2amwhY24rMZHrBrZEY7kBdnLvL2mDH21avKG4RZHBRpc",
  "key6": "2Uji9dmLCKDfS9XQ3irxauRGQLQhXx7K1BdHc6DSwLdSkH8HB5AVsS6mAXsXpqPGzV3KkhyrJPB5waZQbWkM1Wa5",
  "key7": "3p5nYJkz7ZrJDQvkimPH9rhXY9bT6K1jkJ72dTV5kF6fMd6uodcomKyR7yp3EzFD54NPXZbeKWKJwsjgcEdvFjkQ",
  "key8": "4NeBnbq1JJfRvywUVvrSimq8CBBj1btuzfR41SWpMzk57K9eUGUfBLa6Ho3hjftCnbCY9pNgw7wkYNQhiUKkBoGK",
  "key9": "3brc1jfYKFT9DDRdGsfoF4NnyUAmRLXJgCaiUS84ssYBuqpBT9o9yVjCmdPJUJBEFz7hwiqf2471FKkpXJDcZhqP",
  "key10": "2PkyeR6BogKD5VuafiuNTXZDgN4oxN4fVfMaNgTdLsCxWiuXQYyMjcxtwsnhA63G5wW61iNB3nD2Yv9hYBPn2Rq7",
  "key11": "2KTpmEL2ChperbFiywLg9vrJJaQmiWRHw8UNd8zRnmqYbXSJDVpj5d2jJstBW29vLZ4sR2hF1kYJNumzbXYQkpKV",
  "key12": "58Z7TG933SwDMo81L1TY9i4cPMiuAWpqn6x8QRuX4ejGAVinpPyLEDb4fntLMPJwsWZdh3FqXdmNabuvzPcZ9wAC",
  "key13": "3cGSA4WNVGVtvZAchY9v5ZTcfSFgTz8s4u6K3BFJ5qz9pPbSap3hirqFRz6PjJnnMCftdDK4afWAmiNgN2fq5TDH",
  "key14": "2KHi2kn1pUxa7hoWV3NFGpSvmmK1betwNwSzTZoJeorBsNeLsa5EFPLZoVPz7uH8fyoFmv8Rb6M6FHj53xZQFo9R",
  "key15": "37EK4kBbfozmFZ9dFMdGAj22xPBwd3WiaeHrhJLPK1Gh1XjJRbC9sC7pyzgCgFsKucdWzfH4dX5b4nLvYYcM4L74",
  "key16": "d4Sg1vxgKfLQPkV1HpmjT2XZ73KbjaaxfFNhGiNqUjBuX2N3qk94ru4R3X7jXiZtojUY3bxoeydzWdf46gWiVAq",
  "key17": "4o2VF33GkuvDyNaotCnb4C3PAF5knhiDjwxDm8JH9w4ivGZwKgbKABRgB5X3uwDqWHhzFtAjdXCkaVeiAqHCRLj6",
  "key18": "4HSsCUYiRRMpfFejfoj9BVtrLyesbUbXEfsRWsX7Kt1JfmujhaexfimYveg6FrKSyQPLPppNotHDZw3af1anXYF1",
  "key19": "2hFLeVHxA5nZLr2HAG7BUvBw2v1sY5zzun5jjsygxgNX11gGgEvLjUDG1uAEPYMcSB4vmcBubb7iNTQaMaZCg7nM",
  "key20": "2inodmLwVCwWFz2E4Qh6VSbqxH7G4XqBVBNWxkdZUTvtzPTqd5SA4X7G7zqp1GbFHMis7J9zobavjG5tcrNprtjf",
  "key21": "5XrufK85pXng6C2BqGWDM17641VW6CYG1UEX4EcuYhJgazm1NBQJXJWZpJXxcEYTy1NgKMpaGNenKBCE4WPaPKak",
  "key22": "5EZ6D4NWbLKfLV39djEqyPyMtDLqdSwXdEUMKgZ1bNH43c3JdFSKFynuoBYaVTT3ofoZCFfcqpurQmEAa1A75PTn",
  "key23": "3oqPFF1XHS6E8FkCwtLMt842JX53rhuzDFgaizcrs6PufYrPRocvbiqzWTKcfKfYSECUh6dYgRPWftJT6HDw9LKa",
  "key24": "4nGW9r4AzyYk4SL4NkHHPAnc8zU198NBbLQaXbkBdNmf4Pdcf4oS13pKwfyvfZrUuRwsmzYxhpKRTbjbZqJP7VL9",
  "key25": "ethkp555XLWFerdHioLdJ44QRg4YBejKQXBztePz4NbPiZnabFhJpssjhwAboPAGWtGrLEM1Bxu6TEk7WM3W4H4",
  "key26": "23rtZPhaxt96Vk7byr6SCtTVv8dXDiqGpBu4dADT5fQk3G2Wzdo9JYRnZ4SRu8uFkLBmaNAoZ9MdVZpWv4MWgGuQ",
  "key27": "zddH53gBq83kW77SGedebV6widvD2YzJPdKCHv7HBy95d2ksccY68AwTr7XBVfSc4yd8GrhJaaDfNkAs8afHGA9",
  "key28": "3o5pLyBAWq4pYp8abjPNbYz5M7C3yNQzZqWFhyiNnY3hbz2sndgKtRSCTfBubkur1vuz1sTz3fLcpmCh629ZHmvv",
  "key29": "54Tg6wvWRM2eAkQQn7QSzb92fSpv6bwhM7FFBf4EAvBWYgWfzC11SZ13NpJAW1jihwUYjbKYZtb14Rz6QJHkiu6m",
  "key30": "3yFxVfFCGb8jKpsSYjpgQwMwPKPMUwWcZY5AM8TJCiXoRRUiuE8jHcRt6DGdvqjqNHbCQZmynkRUSNwNLdMYDFrz",
  "key31": "66THpHGPqT2X4NVCndmG4DYev1HWikWpnyAkgVonmAfXNUyYEMtB7cXPPPj6EDVgjEhf3Hzk5t7AFCWjx9sRuqkb",
  "key32": "5z2B1DFfC66P4psWJjqRgK6ueWRufsgF1nF7q17MpTgegatDvnhzugS6am2ZaRciT1SMNWj4kTbjkKr5hSFtuqAB",
  "key33": "5C3A8PYcvMNbdm6GKdxKZMR8dRJdbsHoB9sJc4nVmLnRhfiCz6NVC2647sGrqDx5p7xzMe8pyeSbs7RXYezJEbuT",
  "key34": "D7kGq7En43m7fWnWFFriNxdCAM5uV7xtbx6US5UqofxSW6pe1JrRdvW7diizBUZiSCvvjyiXVEJA2UviBqL4Pj5",
  "key35": "XvErzpUuJBYUzts6z3oZ6YHoXCDuiR3MZj9NbajmC44HfKoiGetFGG5UaQHSbUwQ8yEMm6rM9LNtt4ktBxgakLi",
  "key36": "27uDzazgx8Fsq2rx218BkZZH2E5FzAcV8pNSjcPydLPSHXTvQC4t3CKtBzWntyR8JH3dpBXxL47pvC7dmuhdVRnf",
  "key37": "3ufENjJUaMR1TL8VR9WTJ45dsvKZPpxofWWgvqU5i5j6oCutzxjiQdEjCU5XYYTG73mo7PkMyXc7SisokhSdbSAc",
  "key38": "4WtSAVvccWEZG3HTAsVkDp8egWdMYmwdXe6KdaAPzepFd14DeMquXZ3b9msgqWie7tLHZeCo4pn3nPygrbpPpQUJ",
  "key39": "5wL3NdaUAuP5a1cz1G3CghUtqrKfNUmM6mRPSkQ2H2rd8aYrHH8qLqFfhsArQAUqPz1GeEUyPmkHeS43TEvxquC9",
  "key40": "XYP5DwcuYSyx77teqvsHqNosHaBV8jpE65bqNg3sTCVJLxGDMrbY34YJXYR5peeoywGDEE6uUSUudWAsZGi8yKW"
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
