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
    "m3PkMJwSmnW7JvLQfcjqne4k8VkoeaNeH7mot8cTYXY6PQJYeo551zrTQFncbnHXrWTKfyTFdWDMsTYH5MzT9Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGZkB39HwQXYouqHHgjxqBhnCKJ2hh7qtNoFQQucsSZmUwxABnvQEbFyqWNtVGp5CDPEwGoiUhWQUbr1mSbPoSM",
  "key1": "4SZqvuykTqPoVDnYVFHEaN41NngJyub8cAjqatvcQiXoqxJDMzpzNU4NLPGWnCdKVWxrVYq44CEKoTTmJoqNM7vY",
  "key2": "3Ysc8K8X8hLHTb8TqYGYuCMvPZN7HyJtPq4xcNYhwu8Mnr3GFSoECLPq5o2f7x58h9U1DESTx3S56GfrGTy4P4wo",
  "key3": "652J7pbutiuXKBAAursB49RN3zHDn2R11wW8WA6f9yPYC2uswkD8YkLfQ8LojxhyHr7xZgD8YWsLvdT8LqBYsH5d",
  "key4": "6679GUajqJTkRAdNRa4PdWi6BHwYseaAmi5Au73Ydx5hXSuQfGBAApoPX3iWgX3TY4YuXn42qTqY72kUdvrLcLYx",
  "key5": "3mS6vhswENsKLFAyr6jvCpcdDVjJsw635VGPgEQhyrH1K8RZGWEPnbXTe6TiLp4Mwc1BfXxApeodUEBumZgNQ7c3",
  "key6": "3GgAhhiivfLrvJk24hJzQEaBkJY9dkBd7Z8QmRHUTeJ89WFgBdsz5VCQAAEGfasLwoECEjCYjsQs1EnnJiNXUPgK",
  "key7": "3vpjEh1mVBnhd1B2HJgkKb9eKuqEWfQCPdQRdeRRXLUQfyn3QrGa7AHfTDbuhmGpknqyFvPFXc9txjHWbtFuihY1",
  "key8": "3hVcUpWnF7EVnGH7giK49UGgHr2RxLyKohLP9xjSmNoANaY1DDfFWVXissHK3grLY9jr3Nfaq4YJdZ3SGwBqR1a1",
  "key9": "42DiZqdaJGwYabddqTVtJu3rVhuvzo3ornVzfNhywkRj3XDvjaMHwZHGpiVARixPQVw5oTzyHQ4hGJXwDfrwVyEh",
  "key10": "4RAyZKgGSCdRmJzkmiswnVRSYBGMFpczqC36GCRCnudMXMkEBFYTFp9wUM5q9v6oiyEcsVAkBYAasTwvQfUfsoUi",
  "key11": "2xTbXYRnpkrzRgxobY5vgnNYqSJuxwCCJRmCe6pPfdFdRRo9bTCQGpaFxG69NuaJy9MQMbE3yFXrFhx3tXwhUBQp",
  "key12": "41WMHKaQuN1Bgwh3K7BJjEM4cXharrfpP5M4fLx2rC5KWE8PLVqoE3feh1W7JdqDJmHmCf4rBq3Wr9gc3Q3Z4mEU",
  "key13": "2uJAvCkjrbS4L9RZZ6cmKm85YU72rFir26zhVWBUAtYioea3o4ForKrBbFChoaa2TQdbQQKSbuZL7doPKyvdcCan",
  "key14": "51G72jwRRvTpoe1BAwtL1xvcUjvxyk3mqzMpqwb1E5Tvoarg7Yg9NBx3bFTYvjh2csHQrYPgKwhpjhEDem9Ypefg",
  "key15": "5Dp5MKzjvJYXaNaG94YcShfUiobN21SqAbvjcChr5PkxF6U9Nj5ZfRRyxQmXguQuYDnpgMzqCQt8PSA6u5uGCmYe",
  "key16": "ysxmmoPmGzi6xyRQ5hkRDLtq7AcjiKrbjS8cdnUt3zgs8CfRZf7xXbeAp85JYZNPB4PrdAqQBQBXCY7JC3RrsG1",
  "key17": "5NAYcuWRSAFt93puZChX9BvHCHbT5PjrmnjZHdWMUASu1H6sU9KxqxEWdJTSkRw4quyHmtywWkwb8aguTj8KiggX",
  "key18": "LosAiiuvYo8Zx5vN1WJLYPcP2XgbZjD7aRrvHY9JDiE555SPosE1BPt9RBoJhHTtE4ZGeZY61VS52KkhaNoNuEA",
  "key19": "4fAVQk441Yb9aXKAq8GNRjxu2WwWWaAJCnaJspJBWM8cGbzvvKRxi9p7orer8JSvbAedFea1wnLbCpUiX1gt5Bff",
  "key20": "3dWNN3oEbQUPcs86aHrPmKgEFffkdCrLsywboaN1xqYRC9thCeuc7HQvvrU1xzidernbGsgY5uVmb8XwCAQrCymU",
  "key21": "5BUwyLJ8iHaJKLm9dLKvgvGXzNnJCSYVqsojHqLi9ynq8D8L1dSRrGjebmeENGRihq2tTYifaZ4pao8qYFpkziwF",
  "key22": "5tQjFgAKAVC6NDLdLL16SMWzHE4MRRh7TVGGitKTZSS1628RXq6SF4gnkmNkob2k3xnyfjmqqVUSiuX6B41GBPSE",
  "key23": "611LYLH3nJBzkW3hsmwxPRYsLM2dpWF5mnKWcBspd7LQyad4e3UKWUWoiN1AsQKFoJJ4yCpgaq3FhesB7WU7H66a",
  "key24": "XhDCVwsgN83HRxqYiAUJZQ4CnvcZ5jMs5nK2feJzDo1k1LScWTFTBCQH5bFG7s1pEfX66fjCKdfv83Q4NZomvPH",
  "key25": "5ARZaVreSw4keyHv9tuVTqCpNi3dyi13NeGMxAWLuvG7wmNPEHt3LVNUT9vcpT3CVv6aLGhiKxjectDng6joWUc1",
  "key26": "5H87zqttXwCmRx29otzqHaShmpZy3pqydx4KZYffKNc6zx27juVkonF96jDrtnkzPNmsgchDHHMjthEBvsMcvECp",
  "key27": "rWuaW8fzqhWFRbNgmCnKmyf54Cg2mzvjAZvipNiDXY4XHsYrkFvUHaZkB4kuN8YZMJM9nCkWY3iPPwu2HKpjGui",
  "key28": "38DAzDVPCnqRbXUtqKXdyNZuLNrxQecHJQDixhtwxjuM4421DLzRRg1uKb2iYZrBRQfr9Ve2dmnhnxAPXVRexkBS",
  "key29": "28HuNyghBhqZYqKnB3N7GKVSqLFmbm6jo1qQwYTYVM7LkjLVnemncZcFtspTvW3jY4QywBrEyYresPNGJevfebvs",
  "key30": "4tuhzvzjEiMEY7YRNSDL9ZyG1MLA1i4D5iZZ155u5hS6YmMzHVcpr8QbNivdNqLGU3t4MTnSZ6SSaWxpaaVr2bWQ",
  "key31": "2JDLZdGTyGRZoLf1EW346vxKY3bhgoqJTETsRqDQ21n4JhJVyQYxYyRijDcAaHGGEmLKygp7xqZUowLkrJoVNBAL",
  "key32": "4o3geX2ptn56Qn7sb5GKakMexxwiGvZgy7DhcdM6Pcm5iRseoFioqyF61atCkXKWmZfinhWtcV88zvAuuDzTV29c",
  "key33": "48Wp6qYTLP3LsbkcybM3WqzdawN57H57KbR9r5AKShukY6kEcebiNYRk2asgtsNRyXagrsR99WNW6a5mZWGfMJyu",
  "key34": "3KvY4rTqizbPzMJxR6dwyzj5AXD8jA4bgdAQFHEByDZdLsNcSkBM6uSHPHJGUBrohPL48XqBdesiau35ez5xr6oq",
  "key35": "581yh2frTyg5FFUpdQotNaJpaKH2E2AYpAuWp7CtiMiN7sCjz4fwHVwR84FSQF816ZQMDk4XCSLoXehUSgdc5Rnf",
  "key36": "2oX3Ss32Cbm2rE647aUGNa8qPk6GPSfUWHXyLizFfAcyNyPHv4ZjdxtcpdwcxpKhAW4ekkparCfP7Co2DCvPF9Xh",
  "key37": "xuDLEHUE5gRVdszcDtdKWF3K3cMbQndS3Uh5JUpmk9uQztM2MfHLv1wk36ZvEGiWYTaeZEB8n6oYkgM2UE515cS",
  "key38": "V9nJGfkqoQaamWUoyUF5n2x5emfrxpx6sg4bB1NKTiqhdUF4eTEdSSKeppndceF65eHADHMREJLKhYHxPU3jCyS",
  "key39": "2aq9vWZbFz8Q63mzoLVgvLM5tYsPsvsVHKMSPyoz4tLZthix2MmA25YzUcQ36Fp2Sz25p6qvG4h27opEysHzPB7m"
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
