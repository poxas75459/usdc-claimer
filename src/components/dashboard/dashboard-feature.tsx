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
    "5daytohFLDGJNkR7HaP4efN8PcCgLvKsU5hKM3adNtZ5o5vs2SqRoUwvzr6EerMYy6uCo3fV5EYwDHBTADAgDuzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9HgiXGYipoUki7p5NgZNUj2Gz8NcTsdmEhUHZvMTdeDbwfZurcJih1yMcjJ2h4hCJY6zdD9t9sYXwodT3Y4BTF",
  "key1": "3A7STABthRz1ihbmEUBAWRoU7EXL1dGWUqLX7NzPWQj1Nzj2yBcWchNjVccBCSFYToGT1EovqV3YVMAX4b15bCrx",
  "key2": "3E9MfaZ9hvuy4rkYP9XtocTRpbahEhxKaKgVSxCKTmw213qUgNEsphvzZ6KLcx5XLhurHmcfMeVMSVv3EcCsvo4W",
  "key3": "5sLVAEr7Wp5UYJVHDJA4yPFCdXF7qwrSn3cn5SNAdTtSF7pXHRpsAyuqgNC5LMNZhE5DfrdHohgZaeowaiR9fmXE",
  "key4": "49xRHmjAixidCpywdKtKHNb3CwNQZTMsmedrB4cLZQbA2Q5sYkWPBSjWp8MNnU3BHt3xzj7VLKEPHJzAWaV2orhB",
  "key5": "2eWuocJEBRc5dDRYbqaYMhhUpNoPQrJtzRwLUSg2Skkk7cEmDFAPPAAhnS7g1NBiba6uXEKXd5YAnjgBUwLYKSyw",
  "key6": "52Mh4sZB8WWQeaa3GZYdDkBhuvkS6EAd7cRKSVXdHyouGNM4Qy88NBiUuKZySfNettoNNcZ711yqrXcdyTXyLu3n",
  "key7": "2i2NZSbNtBpSaW5Dziedr3m4JFGY3LQYtVBkHrvMUsBVhQrQxatLhEpno3smixnQG7EyhuLXiMKARvsLsmFePjTd",
  "key8": "3p1mD6Rn4jMxewpkYctKPS35NXfVBU7hdhkNkBHwLtXnucY37H7Z6zfua83cVdEteE1JZuQ85b1FPc7XSddevoND",
  "key9": "4qxQseMNRjBeAKAsadwKqNwFbxTnbnjFK1n8GYYQXE8gAaRwruB8Pj4ZyHpM9NS9Qx1gD2J1HD8inqnsn15hjkqH",
  "key10": "5jhHzYGBcduR4uquNpwmTHHwxbKdfai5XYdYkBshonztiRHa7r8rk4kW2zh5b4roWtdsxWH1t7yhNzk5mFABdhho",
  "key11": "261xV42Z34HzE9m7QMSaRbF3LtUphjfZKhQ7rQmwyguiS1N1ZBYvZsr2ZPoUUebRFN8ES5HbgT7BEzMZbZky6hNp",
  "key12": "3BbFgFNG7PoXSUdf18oRokjzuBXRB9nyTN3ykLmDpux3qkzozxCuHdhjJN5E1ME8jzrHMvrAXgb93hEZqcF8Mwrm",
  "key13": "5gU88Sm9GXWrq9LTMqymesdEniUrabgkcStVmKjozk7tfhEEASniehCrERXBqSvJGnCwHMRhZhyP9Dz1s8xVJpfz",
  "key14": "2LrcTKZYC1DdWi9K8Z3MU6HT2aFf3bkU4EpNS3zSDiuvGuGa9x7oaH5qvmZzyg2mSYXHdx31hmcs3fqbY1E8XEPP",
  "key15": "4AgToGWFMZNZqno94aiKSjYrmkvPpoLCwgPU3Yn7Udn6jgDJv8Fr7TE35Ge4XUGaa8TW486a71XDqKANF77Y4mtg",
  "key16": "32hub7aSC6zZZF8HeNCz7qXZQWuR2XRb4Tqf11zU5v6Zwamtg39ThaZbQawMinZBGZ29vPN5BVyQVuWSqDaFLLmp",
  "key17": "21RTQzQbBV9xYUgyJhjvcCedifAvjgy6jv1pm2aDmuahiZQGiPEYiMTgrZaK3dJAwYPvF4sX9rBo3Qovsq5wyjoJ",
  "key18": "3wWtMpZwWQ53L121pih2YahkJZNKc29SmS4PX2V7AzGjhuj2sehacHFX9dyg6FJTbnb4ne1mnhv7PmDtUswLTP96",
  "key19": "4VV2A3JXYphb2Fachwhoztznyojb7nMuTQNFEQUq5tQzdeTx5S3Ks4W9ERNc7XY7MdUjwwCa4cZbHDKKoSaopVKL",
  "key20": "55XzWi6uLwahLTbCJcqbSiouyRP5gHkKu2NXyiZpArEtGEzDqQZ8v6sEDqeAxVUTYcCBcxPYhb6FmbpJ8LHaEwy6",
  "key21": "5h9h3tEUHW4Bte6k6PSt63z3fVj95UXTnSKJifRB1HAhLg4p9AcPopBQwLEJc6NNTxwTAtQvAVRDFb5MYXkZ5UKc",
  "key22": "4QkvTnkmjMvjLttBPpGk3mMMEmqT3BRYVoKmC6gPQR75EYeuqM5SheakrvfkCCTu4EhyGTLkZ3yK4xib7vn93oTA",
  "key23": "3diBm77PmsgjUEGW6pFe27zwqWrZh8n7cifXacScBTJF8J41359E1cVhbawaQKzUUhYAgz2PN787ADJ2mpvLt8MM",
  "key24": "5jhAZpgZZD5FZJQA6K4EQB2ZsmJz8MopJdFrFCwJMdQ29zFdQPigRtTThjiUL191nYy59jBHbKcdEMVsxDGboKsW",
  "key25": "sPoEfB1vgNfDESH9wNzhy1WvST27nRT3XyQNRKeLhBqbAcxdae4tqPRwmAzBxY6aX5XvEKJvSjfSYMkirJx6a3o",
  "key26": "4XpS6eXhuojdVnmfCoqXwd4GhEArubL8kEke8URRdTQXCGZB3vg6aWPfWoa5TrXeuupP3WfpSUTdmRhBGpXjcJHn",
  "key27": "28FxYnFxdzGrnWNUB8yUXsirS9ZrwQrzdsFiTH1e97QJdX5ZRz4DekbciwBD5Ff9ytK5ZnX2FKqhr38mfa59eJR9",
  "key28": "3a2MmP3yyiA91jHNR7mXA55uxXBMgSGUwcaChWCgaHVuTDivYBajCBSRKsDuqCVE67SuC4YNSXH3N7ZgreUmumts",
  "key29": "zajaVrb6zC1vCutLkuhcfcSBGD3CKf924QcbBwKBMoFkwHru6bC5Ym1iNxSrfqA2BKsQavGH33HpXitobgLBryt",
  "key30": "2FvZXjyFc2c51vNGVuHRVFJTjcrYW7emn5a5CnKAAephQWu3wQFUfrLF7uRaMx5D1LK93UaMyk9mqwXuXzzR7kiQ",
  "key31": "5XzgXw8DuzdTdk88HciG8f32iT5ettEQtQFt9MieCSeBZuzZJy2BhqDbifmK4UDAV67HqW86Powx3GGzkTA7APJv",
  "key32": "3J7yxaHDwj37An2174zDbCpKYLFkJGw4Abuk7wt1EfGGPpE2RLo7UcuiqXwNZyxYTXgXDNPCyrpqdJcE3uGDQXNh",
  "key33": "5rtmjkntU4BKiWs31Nn8iWWMWeeovSHGam7dhAz6cTCyuPgwnVR8Dz36RhQEeg44v2Tf1T81RdgnQKGKqViQxfiZ",
  "key34": "5HaQ7zpqK6eMH7oJ3P2FBGKVwpBfatFQ8cFHTxf5uGnEB6WEVeQaYpD6MLmJCTMH1U1wVW9mkCH4gAUXThdqUw3c",
  "key35": "4ZdGFqbqDKcYq83LEin9nJ26b4PNuze4JxfKsCiJnC6qUaGoMrwBQWxY83HARQAwZNnrn35hpcvKNghSvE7bjvAM",
  "key36": "5m1REasrdyFg1mbXF7fmsUvYMEoCjCtnGBJ2yHJXYpNkWHW6373UsHu4DRJ4UwgtdZmbgjBaax3wC8a3VtBmJiH1",
  "key37": "3mjEA7BYjs7vRAKLLqBv8QRRCxxiGdKPTazqQFpy6A52TYaE71NJAVzCF3DcwtLYGM6xEwPxgrEwbv7jFWoUbZeT",
  "key38": "fHjJqgQf4bhEH5wwcVfQws8Q1Uaek58PrdBCFzSzRQMpXfeGTaLQE7CMweZ24e4bQT9NiBtycZ7zdVpJVrtfDGL",
  "key39": "4pfcD66bP4fFc6PgzGVFhnq1Ah48DxLaD2ukPiLKs3UJs2LZGU2jokqYwev4o8Q7bid6HLMvSEEmmttsSKUNhjTP"
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
