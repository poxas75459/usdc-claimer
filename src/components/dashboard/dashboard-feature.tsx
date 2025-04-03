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
    "3UnRDuSCt6F8n4QjoZAFcvoh2Vtj9Pehsu8pRfJJRG6AyKzSFi2rcntuaozUT8yZRfjjiko6mhh5ZKPuEpWAqRov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6Tq7ywXec8Cb2deeEqwRoVH5NUXqJ88FFE8GC6Ae4LTk6Hp4993ZFnmh16qmSWmPE23XkBkSezwbMYVxP6TLEV",
  "key1": "3TEso9RkAp9hoX713Q571VB8oVNpC9VbrHzjcpSWDwbRe85kELzRC8Ci47VoVGueQFb1vJowzo245HnSAzRM5dhC",
  "key2": "4cfesctUh18co23HwCtvARkvjo29th7R8gBcRkP1LdLLtdhQ3Tz32E3MkQb9s27ZTnJ5oCc3TjfJnAcAsfKbF2bh",
  "key3": "3yDtGU36K3LyziY9eRMNsn8AcRgQCUww9Vkf4jE1f3zjcrEM3ehBeeRbDEVvqrJJE4y1Z197sBaBxdRqp7wb4uQJ",
  "key4": "2pXTvu8D3nn6SUR3rFvQi4uurLDCmaik1H8TDpk2kSCLiGEsewoiFR5Agge4H6oWTgd8JwpwqSYTtnNR8u8tjRdA",
  "key5": "2GP9aAZ3XkRGANon4y1SFfEPMang8BaeGaxAiU4stS9sVSETnL4Cs4TwHLKe1tkeGGNVQNfcn4vsPnS34zxDYadb",
  "key6": "4KX8w1RhQfNnXsCK14X7xqTiSSjxFHE1qCfnBp3nxhXco7QZAXhUUCmbBM3bYbyE2h3wqZevXSV4gJiznAaxjEoE",
  "key7": "66qLjyEDGfEvS7LZbDkzLqGtNFdYbu7iYZmZPkw9ZkocS15rXoxmmxdWBiRpHNLcMeyGMeuuBQNAN7KfkZD9v6je",
  "key8": "M9K2YR2yHwPvUAP6hPQiHBd9rLMYFmQzkFcQqG2NWZAqBtnNX1tnTaeXYZYSwsEh6wkKG1WXycF5uQwNqKpdgYa",
  "key9": "3DbmApT2UvHCwiQ3CnF1cBahCEzmxTsQsbWxe6nYRkXXstjGBu2ZQEJ3f77Y64XXUtoNtmmBi3WHkaBmcBgTmEqU",
  "key10": "2hy2eY4Jk1SDEPfbn4fn79e6zGge3zp4fVEWVVTnxbbXvyih2GabJujAyGVhtTz6vJKrrMWeERy7S7mZbt6wARFH",
  "key11": "4Ag3QeKAN8TQtweAS6kLirp2P5W4sepjty2ikFPy45n9JHbrs42kE5DjXGCmohd7RsqCX8n9Aurkxpjr4rr4pEfG",
  "key12": "jpUpQQfAGrDSqeVviTTQ5cFN9jFwWp2L2RuanXnVwDvUmW2Hwq3KwmUgLDhSGnpdcCG3uSumxU8JzUkgWfXGcne",
  "key13": "wL6XHE8MbFo3QQHMoUvb33k3bfWSfm4sAqbRegMba2aycj2UW8fbu8GAzec8ihU7YdYbbKDf61nCWGvMw3NHS3V",
  "key14": "4UR78xMcVRWHgFb4ECQLAEcNuqtwmQHvyi68MLXccjrqUqBamhvdNgHUDyxReTQpDpQraNJhpYc4SnpyKjsnnmWb",
  "key15": "jyCUTzoNBj91DrcU4SeczkXKxNdbrr4eRiE3gR9u3demfdTfgnKGqipTzziTsCFDZp7tFW36CSy71CEWZjTBxZz",
  "key16": "58d8fyoK23Qrj6nHenD9oCHcy6sBrS3SUm4bXyZwY1rQwHGB8EA64YPuX1yL2E5QTc6fLDmfGy535LzAhja2DGF8",
  "key17": "22re9iLr11KrXDCVyQW2w6qD1ph7q67oqDkus8hBc7AyKWiszpfF7aR9r2cJ6DJsqqWFUEvJGM5y2bnAQkLXUqqp",
  "key18": "4qKpYUsJBnjc7bREAvB1M8MJRn4XJmwQrSVdZHwuti6wzAe65zXdewavYyCjJKSbqiEwFyJ3AKcHmR7m2EcKRe97",
  "key19": "4szUtutwcCejnvFaToRmnVtmtKjypLKASWHp7crFLAC3z4x6ZD14LAbaHhSHNe6ps35x3JNjbhv2sK7C2JSzLFNe",
  "key20": "3mVUDBLekbttAaUWwZ7Gcz9q7at25u8gT9BdiS924faYCy9nEG9uLVyGf9EyNAtKVbLKoqA4cgwzbaRgugPS2Zbc",
  "key21": "3UbrYNqAfpLmfyxNxn3gfbtp5PS7mhXHSUga6uaKhvzBn2BBodR8v12VSJXjkvhpuKKNb95US9miY9zcBNv5Bnkt",
  "key22": "2agMpsM1HEmao7GLFmozZmJDLNBZ3muqBcnwjgGY6jHqYwC4bcd9NxK2Rqu91c4Q9KB1BvrjX9XdwQP8DGGYxFrj",
  "key23": "16RKYYikSojfAnaZ9472FnispD97wnYcpzZasFF62dV4HAhNMez3nuVkDW87tXa159EggRDJQtHw925enAYnzJj",
  "key24": "2U7DaGGRtssG6udtq1mbzmvACpdfWPeUUsR4zzpTmyzXUjXifLKdafADJRzXY3RQztRSpQTMgxqyyP395eJKigZ5",
  "key25": "2j3i52Wkhf392Ng2uTP7Jm4j5RFNM83eJK9Qf6cooL7doPj3vf74WYLYVjSiTB8YEccYyPB1zqPGTCcKnEskC2Lo",
  "key26": "2P3Sjpay3hecJjAfVvEWBvZ3ackyLiSgFAgzCw1dy5ercrZfdMg9TmuGSDu39GUjv1eykwS2Xm6xi7jktfQg8uSs",
  "key27": "49bfnFgHEMuXewsF31iaHXJC7wM9UX7NGWjvAEWxwaN77yZGgMPhE2cxdXaY3rvNgUeZUcmMmpER6y4FFsjYeeHV",
  "key28": "28rrArXG3gRSF6tfvgNVEExoQJenanaYbu8jtQ3HVDJuz4vjcFSEzQBmmKJ2Ndbbov9RcgmffrN1HVE2RKDAxwn6",
  "key29": "4nf7kQhcNTTmBYyKNmowAR33BzN2FEMpGYufWrcBxTM2ME6rv6MTfE6BGoTvRCm1Dxv1ZJDrbQrfRy3paBCQPEyu",
  "key30": "5bVSf2AxZaat1KKpB2iXKLqxt23ggNuHo5Pi3MMkHLUFPQt7WHiiShgpakyzEkx4hfgoDcPY9RqV9LWp1HbS44q4",
  "key31": "45uGjbMSJ9SQ3LY84S4iRRQFA6Mu8SNfGBxDdoeiEYwQX7MYiaiYfvJhWQ3wLRvC4S9BXk8M5AqRif5PysWjVqay",
  "key32": "4J3DAfDiDcXEW9wByeNz8rAgSQmtKjfbGjN6nDBz1jS1jpyUzWHZqFWKa4B8UGihP7NLh7hEbb63XCju3Bvbek4Y",
  "key33": "38cDPHobWUma56SHQfZ54Mn48CKPJ5oAY19Sjo69bWXmjTzNrZQGipgp6rQdWT79FwqhqE5HtXkzuuzhDm1UqKWH",
  "key34": "5LCezAWCYacXJgqr61Lxs1GKHVk5AuvqfAwLQVMwccY9E6gufnpRsxtFSEtKe6cGHx1ZbRa6sV4H2zrUqZMPvfUL",
  "key35": "3rrw5VWxUmmFYM3ho6dfgJhaBFYkQAKrEFRsfn5M6PwdKgsJ9JsjxxzWZerAybPPQ1HXkxFLLhk4WaT8suoNAmcH",
  "key36": "3cwHMy8e24gLzTRuc8NLxnm2XJjpv8qjLUZ7oKis6TLqygyLNT1B3ykeEDiKWM6DCFAn4N46dAzEMxwEAQKDLYeq",
  "key37": "2Mb958wczpQ4NmUHeLRTBcV9Q7ssDrw88qXdgB3RMucrBwRCsfWNxf8Wk98GYQk7mzTyu2o7wpbZZye5taiKXcL4",
  "key38": "2f9qnVJwxTzpPhzUJJXnibeqPsfsPBypGPMr22ovic6836fDHnZ9ARPtDY22cBdiSYFZ2ESpRT7FMG9bcvXKnpNQ",
  "key39": "3W6hmmL4F95QxGZCLKedNDW1gXKDDZhN4hpof1uheXWER8Ns93Dy4QA9qD9oLtHG2tyTCzRocJ5nMnppSRCmhF26",
  "key40": "5JZ4tmUjQwnozuy7TFsKoCGBK3RXwbZJBE3hiqsN5F9xqZFWThBHHuUDadtRzwjHU2ooFRsARiAkVwngkJ6eTYHZ",
  "key41": "48LJ7dJWUgtDRsY9i8nvfDMMkYULfgQXjuJ4SdAGMy6p3KJAftEkACESbqPBvsw2SqFmyBVvyvfDpstzoJhk7RbD",
  "key42": "mVqsw74R3bigcByC3AMrhDaEHrgDDBJRSipTiiPFi6f8e9igCmG6ypX1WsmuoJh4xRfwdbKGk7P6snUvhmocNZg",
  "key43": "4CB5ZxGWdr8q6LwSJoznk2b3qFYzHkvWduvML3FGk8QranL63wPSwRH4D9fBvXgRMgi63HctsdtNCrqbhLDypiba"
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
