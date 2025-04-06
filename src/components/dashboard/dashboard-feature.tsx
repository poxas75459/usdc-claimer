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
    "5hrwzaE7j3oyPYWocCfZF28hVpU8Tj9TuRbYCmpYK2C268e2g3sXGTggX9FhCr1942Jx2cKF5sdD8wV7qEA4LMVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2riYudPQcEdCRAE25GzXvvpFiTJbXSRbp1Cosfu9S3BLJUrQkS1ddgUCJt6u37oQoEZy6uYLPDS8SvNRbCAdmMsR",
  "key1": "3fq96VN6FV7wagxfsDA266b6owvRFvTVvwDBccuZkV3PbK57xKvQyxJYUnpMcEE1CtAQkCSiAB285523C6dYjsxc",
  "key2": "4Mb8ne8z22Fs82un3KnQBy3mqbFvK1yYoMLf83cZ9WLuDZhARpEsvBYEdG4quj43YYcsrvFMWRTR4QusRLMq53R4",
  "key3": "4722xy3UpVTXjRQVPqti9EsikAD5FLMejK4do1XXUYteYP83NodPkc8EqWaf1wh9uqAhbAp7Sy57fJnW7ECw2wq",
  "key4": "4392x4AJDJ3wggUj1YmqLJY7v5bPkjLPvVguWa5JDnSjNBmfxmLmZaZ7yAFsCc1NmFD89jqVbKTVJaBtcfALv9r2",
  "key5": "NtDyHzQ6BhJcU4kuX1JECwfhsox1imH3XdDWbr465h7HLCf46pQLCLrDPdZqN7TCuzVRhhnS3RyatD8Fm9DXWKZ",
  "key6": "eaX8NgriCT2VSUDiCcC5AAFbXBGACqRR9LnJh3uK8G3xFsh2LoEwnX2iZUmNn5DZbKtnvdM4BpwoEQwwZREh9jy",
  "key7": "4sodrCX3JR6zS8K5cwnsvfAoMPP2GFGRuF43CYt3LctSfhsHhcKEyEjJcR2eAKEEv8oFb5TdHbgoGf6zKRGuaxuq",
  "key8": "4PpTyRrawAXYVL9mshn1pXWE4huL5T3cKwSA3m3J78119t4zoJgEizXxPWFEG6L4NdejwVLKHmeGo7HcrbGUANSx",
  "key9": "3H874smtE85FvF5NkezDSxdcr1UZmYEUg2JqdztKRspc5xy56EMKeH8U2SZUrF6RaupJzXANAyVMTo3rWux9a5Mr",
  "key10": "4gqkbHEk3VGKWtuCC9kZ1rED4GLwxt4CCD6zmsLF48yCarruDSRPwPN1i7wVnhX2FnQX5Vd5MUkdsxJHUuMfAysn",
  "key11": "eps1aHHRsbFTzWXga2pZ1ANj1W6zPFt9aRm91PKuiwKeCsgsRZGHrqFUBKR9ygZhAiwV6Zthkop6xs9XuZZouhs",
  "key12": "3cBK1UGrKg1ymgxfSoJPzW8oPEvNsxZ1ojsSFcUa7VLfUL4HVEV2P3ppcRXncrjidxxnW8YjSfXCzPLeNh9jKCUb",
  "key13": "JEiKjokMDK4JuEwFk3d62xa4nrF4LS63qrgoNivNmi1kCfKBRK1SkEpu91BhSxYGR3Rbq5R8ssfuvJKpjQ3CW1h",
  "key14": "2Ukm9Thf2b3EcbCKPpn7rVGsoRcT1rMv3oKqADf1Sm3CN1U7JmVL5ySCNJ5RMVxcx4zafwQrt74vq4Mu24JfpkMM",
  "key15": "2zALCkyRwjwKHE4wRx1hpBujVo2MvBW6QYvgFic4XqZjXAtQovq9SezMYHk9Hos43PgWuDDbHvmq4TVVGRTvxHm8",
  "key16": "2KhcdF9E75K91kiM1YRjQ4NDMgXh69cfPiSQtXqviwxsicsHD7padhHmvBrKcLubwDG1pmPF6GLR8S6CECnCtrFd",
  "key17": "gkTLrCydQWPqR3GYbGzagUSE81Kc6na5RmzonqPCzA6oxeYPCE1tvwu21vpsb77ScSa25gDWhxNJhUKw9E5vnAs",
  "key18": "2vnzqZx4u4HX8HGbe7GWRWB9rbLwYTX4LNHa4r5p6kQP2JWFHBw4wVrmSEz7pM7YWaQrNra3ZbJXDo8MdH8VHcLK",
  "key19": "4TykYS7wKbQFEfEE1c3HZ1gi7TE57PyUzCi1zBGo9L8cEmAAdTun1ymDGGR1KVZcNMrCM5Syo8v5MpoS8reCZxQh",
  "key20": "5kYnL3awtBVz6NQPE8GJdRniov1uVCG5Mn8oKWVrrm6gYVCH5fiQtnvU6DvMuC5kCrevhrqRVspx2jSed3qrQFpx",
  "key21": "4nY5GL6ZqsGYAsoN2z7gdrQTS6b8sFszifFma4VhYPLgaQSkJw43Sp1YMqJhyYFqEY4RVGMqxooZWcdpwEVxs4o",
  "key22": "2W1n3casWuwQn4bD5XaktwGpFdWRmGxoH61qcRx7XqpM1FwPV7QGNQfzgYaFjGT8b3xdJzhRXDFc8dZvbZVgvVMe",
  "key23": "5iUP1E3xMjFMqjb2w3hK38k1PAYPhey8ipHXdyQZwnFpxnvWnt1NjKXF2D9nUupV1gBSgpTL8qEpf7DaizTiDey3",
  "key24": "4sfw6R6sPjZjR4ERzQF2Zb7scPwSx12QfA1Dzg74v8e3v5zbjtQaiBkM6G1XUGaj63cMBfRC4PpGACdHoVyhN5W1",
  "key25": "2wAD5wWRysCtzbgsqnjLK78VBq5tW4PcypLnPj3HngFHgdtM86sApYpWRFasnGR6b6RCTMog2tVq76i6NhNLGRSJ",
  "key26": "2H7DuTf5JHfTtv4dFALtjLD7wVN6AusJKyTEs4bF9DhSRQYebBgA9cR5X2p3ngCmw6nYeK14e1PDjbQpNEGniD34",
  "key27": "2yyBTYbzTJ9MJ7dgLpXbtgnXCe5qPr1GX689ECmGsYeKGxQFEP2NnR6aVeZnMP4KsDcBKxMggdramTe8UazguDFt",
  "key28": "4goncFii59travibRCqgJJwmufv1rPhq89L9wQcz2C9q9y3mB4NHCRrZ9WdB6SLR9tgd7r6Py6LK1YpHsYPL411u",
  "key29": "n4TNMbyhHqfNzHXPAKfGGaF2iguqEv4mnSUy7BXS7vXiJo91TGh9h8DFGMgUBnvZL8UzkiNxEPARbbZebHrpwqC",
  "key30": "4TqZZK3z7X7zfsu3nyKr5gVx6HDyPxaE9oagzAxV9MMSm1rCpNqq8vbneEMgzQgyezKvccqnVbrWoqh97yb7BAPE",
  "key31": "4tazkkrYYRQgbk2aTDbKJrVK68CTSs1zBZSzT6LP7cp5cqn5twF7SCy7qGbU58JHMz1tgTgq7xQ6qgfpzWuSmVuJ",
  "key32": "3XGR3XyziHML2pDBAoqRdWEiswfP7ryZhY9uzz8xr7uhd12uiV65KAFGq6peGV4R5gCC4ZBv1fArepMVt6bPmav2",
  "key33": "55M2NP7b9nETXkAB79zDxcn175WZfq72aXntYZ5NTiDfP4j4VbekaMupDi2PuurfjT86cmFnbKeKBym44Q5sJYwj",
  "key34": "3ZQCo4q65LdLQWLDShP8SjfPoamDTbN23fzem7ZkNXqRK6whxyfG4u7vkYTfUJY7p8L3rVefE8o7gLZ3fLCELfJe",
  "key35": "5hBqzqEJ9XvYoB7T7PijbtAQ5MdBz7Jw8iToRZ74M7Eqxk5HJ5FcQJEbLrZGrgcTzWrguMDESx9aL9SCARXf47dH",
  "key36": "3Bh73ZitGrAmseSc9Y2v6257S3Grwc6KSimBi2RiY3Ua56ciHGq6J4fRfBeGpQsTkoHBVtRbGDwvWy9zourFR7Xf",
  "key37": "35dYqLCrPZ43iEuDW1kvT9vBhBBANjR7R1Gi5fRH7f3rvPJnRX91g9BBp27j5CUQrwTtyVjQJdibBoE2u3GgxDS2",
  "key38": "Cy5Rc9wZhxV6NuFoREhgwjtYHv1oVrps8e5SEjy5KJE41oDTkaRUcaFuPp8emPEspyPSLs4jSoWNXJ32quNCput",
  "key39": "7CCwsSQGscMZDAtbYNHtpz3Jiz2F2jxy8HVvaqib1SHtfKmHFudsNu8F8MBfmoJSK5mBgMULQLyWZcVnPWGAS9x",
  "key40": "4B3umsBxCi4kM1v3hA5wqnKg18y38M9HqnZdDe9auAYehnvhyzPTk89xcNZJPMEBF6SyYe3BhyPfm9R6XVi9S6zB",
  "key41": "5wZuev7Xoj5Pg7jKSTn3zBtrVy2WrmozMqmPcUusYB7f6ndJ1azwrwnHDcdYxMbYxCArg96rn2gnm5cx3KwtvULx"
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
