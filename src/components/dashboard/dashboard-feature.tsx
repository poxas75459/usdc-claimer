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
    "58h6cZytFBxn9bA1x9P5SG1nd5rvwxRtQkuP3AuLJKPzyiycCH8Lpkq16uQHemc2kpn6pBBMME1FGPuEmwJPE8Cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N5xFQuo7e7UXbkxESPGFi2TFSk37y8CBWzFWgrR18wAYCEHD2xDdS4bQQrVB7qcS8D2svBdeCc1NSXCbiGiEzYX",
  "key1": "4wEE2AeEwRPtRKGQAZL5g8kDgTytXbGfoTSC1gCqFZePCQek8MZkJL5x2CUDe9hvwUWyvySKcpb2TfFTekj2GDnL",
  "key2": "2LbVZY7krRx9JL3vEgkfQ4HKSokS8w14F3RpLtbAAuP5m78fEWnZom638vNjg4agJftXPD7MffV7P7uhC543X5U2",
  "key3": "5kuefXeBEYUuSy6eVyZsZrkgrskDvSxuQbtMCcf1WT37MnztyJ7dffKpQK6Zr3BN1EPdKPXVSSPbPVbQktkjCqCK",
  "key4": "39RJgDSgnKsSev4ADv2DdScVHLxQUc75vTc8fbTCqLu2MuM6Hdy3V9SDXXUW7gwuJFsG1x4t2JEEN4DDZXf1D3xa",
  "key5": "4t86BwXvu6rgjxuL1kUHnZCoY4U4Vn9g3d7C4pJDyLpNksNXTTNBSVabZLpc4mmwz4zDcf4ctsdcjdKhVJDbMGtX",
  "key6": "3MZBiyasc6sDFLENnKTagfc8Yz2CCioN58rWpMnoaScB1vE4Q1tcdjk9n1HiNZ42bJBKjRxTQZ1ZyVgKG1PuT5av",
  "key7": "3DQadN64KYiWE2eo9j5X9uKoSK81bA7LNVqM1wTsy3uhWEWwjMLBni9taTH6hYndMEzX91TdpwV5nzRCS7roHniM",
  "key8": "3b82FVgsASDuVTfA4wz3SwZEsDzxrbxfva9r27RsojByEnQ3pR7AmgqQdcskZxAExwnn2VTy6kPxAYH2Zmj4UJ3B",
  "key9": "43ejHrbeM6B5tN6Fwim3j4BSFxRHccW6JDEDgNB47Nx99JQVt3MBA8ARdRr2KkfYxbZ474CYUNBYnp5DrPVucS53",
  "key10": "2yPE6JdLYYS1pVwm3R5gvcSUaM545Q7bMVPySQoEyr8PQuxBjAiaP7FSpvw1WXPaDTw37WDQNtnKMs9hvTt4gWAQ",
  "key11": "Dq4gHK1Z88mcRoLhsFMf9mDFCy5N836jgQBJHtj2T1ZwfHfit1ePbKFV8g5NFxA2vTtnDoY61ibBgi3ZEYfRC9z",
  "key12": "3ohzhazyJ5zKT47tUfgtS5ScvqSkcKQC84AqoMo1h4TvDMxpraWgA1bhMQeTPVr7CAv7xobQrbawi4qYjn5oLHWH",
  "key13": "xpCGc2PcdpcCGg2nuy85y7jkc3bHhPAHJ7A9i1vR8r4CLfGQQVm8CMHk1zCDQzZpLcA6aV1JVt3V6Aw2MrKtDAi",
  "key14": "3kkZ7pWaxhCB1jJYe5FHuCYC1ur6sh6H24r63mD6amaNrRc5Matca8Vkkxu4ZWFweqgBYPCn5otok5FMyvhcHy3x",
  "key15": "2piprGT49G8X1Y2hbDzot3m4GnrbmLNuuZmCujNBekQmQj6cbkB4kjhhxmwUP2cAeTUofu8LfrfwUVriaV2TioJp",
  "key16": "6173rzc2z4bQ75SSFHe7khMx968ZgnS9XxznW23wn25Da73LjYaerHbWM9htbBAbLyySmF2pQxEHbfhyQwNFGV5H",
  "key17": "5DUnHXbtAaFZU8oPvXEQ72TH8rFxLmD8ABJYdvWGTPBcyJkutEbhSu7W36d6if4mb7uYV1ujLdZAU64vutDq9wVz",
  "key18": "3qpQLj1TkfoRExsmSycML41xwHShrVV7MPRUeBdsfNt2oS8JPMcVeKzafLZppGBiamTrZSEPQseuwLC68rUb1WoQ",
  "key19": "5WGnTBfKFxAnGVAdZTvsfCxEF4Xa8bQbfMid9bH5PhQHnDGgV6pHLZXrgQCjT9yCSPiNDPTmir7jdF2J5fBMT1o9",
  "key20": "5jAChrWBPfhs72htzihrBWTvZwdJtf1ByPdYwRv8TBU5DLTV91GqPHtEC9Y6ixLGgU5qYW37z5SVPeaetmHGqZor",
  "key21": "4biBHstWpEwmZoT7kj5Ce1PNvnkwbB3ZvSbVyrHsYjMJkFRjC9ZKFUQnRPRTfWQY1ua1tBfYoG84o4QGe1yePKHf",
  "key22": "RZGndgyYVv35XTSvyRyx6YUyM5SCuhj8WGvvb4Jcwkq4zE25GLXNBJ9tfDC6ZEidnqFDqR52urPpoYpYWmEr6m2",
  "key23": "4kVX5iZmZscNwaYAR5nfEofaevYSHbe3rDrqZNYRLa7TZzmBgtnBRBKR5nQ95HWAfTG1rWnXzpEue7SuvwuvaKEv",
  "key24": "3gmgxMedZNUooCuKUuRjn7wALoYWche9FQbicoxnaDwZhVLF87k43gTDJWxHm46g3qTD2utSDBTifqP96XT3soym",
  "key25": "H2xSEPcbBPiUwkKx9NuHb4fb84HjjQQ4ELofKFps9byu2BP7Rkh8J4QZg4wSVykdTGRnTfHFu6i8zwCYA6jDtMh",
  "key26": "2Ro56RgAunERLZTpSTcnnWwNBck3KjuKNn9r5xwhxmAGffv51UarG9CAQFK5QR92M4s2RBKaDiVfnKnSnKpj8Hwn",
  "key27": "5m6kAg4wC1Cu6rZvEkoKb19b4q81JSetTXLzMENCodNqYkQ8DgG87eGjUjgVmyVPNuBNXu9zsVrpUDa2RtG4KdbS",
  "key28": "3Up2KFLRvTGuEQP9Ec6jm1Mv9JnTUaiNKecZdGaKLR1rbYQso3jCNZtu523pXa4dfR4K1ixaEEjE5tfHw8AEXJDo",
  "key29": "d827wkdawf5TsNRM3h1Sw43o1LtUnXAt35DWqiod9xh3RUppKkwxFcXnsdmeURF9fNiq3nDndzyRrTRTnSzQrcP",
  "key30": "35EpL17SV5JJJanRTvjs5pLo8qjeWUWVsrBunSrdMQNdPnghTksMCKbZcGixB6hfoqS4dJdYNsjXADKWSj5uxaNf",
  "key31": "67AKqC6npcwEEPih6pvxFkajpkTkzGtdL6of64VJLw4jY9LcPTsJ9aayoyvVz7FCYproak8UYL9J1shVYuSrwHWD",
  "key32": "56QAHUqq46oAQb34oXjdxiUYbLxUFDVguiTYotKcERgJVraG1WyWdKFqqekPbMHRaKYhKrDEfD1yThhiTViymrij",
  "key33": "Gyb2og4HyGXRoULZ1N4p2V6efhV5WrTTopXL7CjkYhxg1BExXJkDhZPuXKXCYKqbL7gkbcvkDkQz5PG4cjV2tRS",
  "key34": "4BByYAcxKdkf36ivncrQHBE2RcZC4YSFN2i46r5grGjhmoUW4ZedHETsqwXmu5xCaAff8WWMy4iHMuD8Ld3JR71K",
  "key35": "3LZdAQ8ZVyFEepR6pQtrgJnSKKa4S8hnJ7ZMLRWaxNKCY8N1CfjGZkZ6g9eNKDmbzj2eKNhRH9nViWYpLW6F3x6b",
  "key36": "2B7mizByW7ckD7jU8dMp6oizguBWMq2Z96xLpLVJMe8K4MN4f7rZskBaxi61WA9EhqSLG5aiA2f6q57X3P4S9iq1",
  "key37": "5sJNXEUKF7bRs2dQiJRnL9EWEj24K3JcDqVd58hsEjKB7kCnpeKGwgnh968RFTAyrX1RyJXjtzj95HYaMJqoJ4A7",
  "key38": "5He9DLNmjwu6QzsHBdwqzWfYQRjk1yCW6mWVynV6RvtC9VD3zW6Du7XouapnuVRjPxzZ6CwEGzhwhbrFmU1HeBPd",
  "key39": "2WYknBtuzUmqsuWEV8GEbw1r8jsDmAGfGjoBY9aJ95yu1m8JmcbS43yce4jKAzQdbj4YAACY6T6D7DRJJCzmZo1J",
  "key40": "3JoSkZ73JQK615ZuUjfmBuYnQJnsMCLWx1GVEM2rdwgmsSVRV3WVdA53MbrywdLMZYRHdBJMEg5KxBhH4JaEmArn",
  "key41": "JSVFuka8WP1rsKc27iMDgtPGSX2nY2tAjGnUGuJCPbAXMwJHTf6B1CU2huFRMrM59DGN9Fu3HT4ar87zLuRVoBD",
  "key42": "3AfadgsP1x5Lqh7QMLft9ih5G2TyTS8ET4F7dUsQxU4mU2tT4tSz7wKutvxAiFkNaQv9GVAEDR7kS89q7hvuPbJF",
  "key43": "2nz3hNJoEQPun9e83SQipqqDL5UWpShuDjs2wcWa3WqBQReBdQzYL7hUmyZ5TegznFvexNbXkbt8ZqLpHKFkbKvL",
  "key44": "b9qxMtT6DCEhjqShVD2KzEz5X7SRsUsNeTb3ns9Hok3yo4GqjiuK1iVLgfBetcLHpkpQmtj6NYT8cRMUsa1YLEt",
  "key45": "3XsM4h6Pm2siYb1xuucnHonSxEJKVZ9t1jf9T3GBmK99bi6RSCdyqPMBTtUFJHEnDuqxtXyYpo1M9j7n9kSUzapG"
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
