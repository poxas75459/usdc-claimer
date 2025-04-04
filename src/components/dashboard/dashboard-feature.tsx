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
    "4xsEKwdinZFG9nt91LuobehuK97EBS2mxE4kJDrtnBcb6Yp8wu88Uyq8t5V51P7MZx6GqKywXp9K7sVsS77uRdAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEuPmzBJTqgqUAes2e9EtCoZFHvjHyA4KSJD55A7bCzw6HHd4yWLkkFcaBrtxAQJUURAERzVH34p2aYFT1q8KTm",
  "key1": "3sCYpTjwUCLzXDUu8f6X9LxMZ7A8xtMS3DMNK4aFukEHY7EqrU8JQVJsJFtFFdXKvyz2BFTdGwsK1TSsKGnXGZEY",
  "key2": "zbpuGGLUXEjoBmwT2oWKHN2VAgLLhwaXXYXprFytcr2V19xpaEvVCganxgkVgzJmmjzAPn6iPRWybbGVdkAZJfs",
  "key3": "3Mkb14fNqYJ2tf3fS7e2sSGdkTokg4hRvd6SjobdgMGJWNiwFYyeCmUi3kJA7QBSYsTBpRCDYPvTYiTHQfZvxAjF",
  "key4": "5sCfVhhiTzyG8sqvg5m12UbT6FDWsLk1qbNNx1Yz4wAGTc1JW5TWuc9uXwM2AX5QrvbfZptwdVhmekc855Q81Trh",
  "key5": "2jT4dvMbUisshg7uZpPf5okTASCg4pX5CzNGX5UbwtRAet1vRgwTWhxs6UVK1V1fpotBkAtsHgJcVr9qLQDpSj1M",
  "key6": "LXgtf7E8oKBBhQErB8MYnnWbodpGYVM2yxgS3XxxoRSfBmrHeWnxaq21azhJYEXXjSKnD9nxKGqbWR4jek3Jkzo",
  "key7": "UMiGXLyy9qZuXHfkDaGGq6766RxS7sGigb5VMAvroXLZ9b3Ffjh6LcN9qRZ7YNNFVi8jAW9L3a14UmHhYR77eeG",
  "key8": "xsJDR64kFDqWzPQ5bUo7m2i5sbQG13FkivxKeftfLam1Dn2JYuDtM3x9kyDDz3WCRBmizksPrWgF3e47J4S7Nix",
  "key9": "3XPj1dim79R7v3FEA2gHm8B7R1zVX2YidCcuAxCtuzaoCk9edaiU3q6DCKHvPRDJcYVaUHMfdRJiXjq81Y7GRgcm",
  "key10": "Uwc1ejzYeT54Sa24fkXkpo5ryg5ywEuv914p8jFQdBviscvHmuLvTZuPE52gY8mLmr8s3PTbXYWwqdbCD6oUcDW",
  "key11": "52J8XryaJH2QiZpn74uKhLgeTd3d79kPfkJcdZ2YtRLQSF4sgEBphvGNkTQFazyoLVbg68fcVzGQhDcj5D1u2aBv",
  "key12": "2fCmm6E1bF1SJgGeuDhMupczGgAezjtcR1pQUab6aSiKrMBnwpXSqPwTZgpy2ejcUptdUztHJ24yDAXeYzW1Yrct",
  "key13": "2v35AynPAgqb4X8vd66Wh7s5V13bfxzxVCGAhd7yptBsu8aT1vUavqx4gmydBTn9kc9RGH2wmFrLdqTRw9jEMUyb",
  "key14": "5DHbR5KBuE6tEQnQ3mpHYpJQYhod2sSr4ALhiyjitRwyQ4tfRnf1ZQTUSS81FzMsdrin7UNMdihz3uwybtsmsBpf",
  "key15": "3uG2N2ZqM5TsJVnx5KrxDvszX8dcoqG4jCuPBY9vdPye84U25SPSw5zyxw3JP3ggANWJLVFyAo3ePgvk5Y2euxWL",
  "key16": "xEdFmRs75BjiE6V43XYZvK5FSk2pDxwxECGbLLwfeXTvMntzo1vAMGDFJECtybyszHLqpNg6yHc3BU9o8A96PVM",
  "key17": "5nzoNHJ2RVujpbbGA8wUwGomm8nWpLYUPiHVqqQgPJCyxTibE6vskdfLTzJ6bvW1wUmTYnk1q1GwMh19j8wtnK1B",
  "key18": "4ngdfF1oq51YBFpgJkC6tjEgcoJtqqFAEfhTBQfkYv2Qew6NWeRv9KkHSzJG7cNtoaXmBQtDYphrgXEzcPMUwo88",
  "key19": "3365SH9hwjYW33bDT5vimeEMi4EdWeM5X5ZDLmSMLqiwd1N1U8GMhbVTUMs8r3wzfgY7u3bFqhinWP1XU5T2Rdxa",
  "key20": "3YgnShf59spJKNaoHzyJohpqSEBuma9Bp6yeezQAc7kVnaUzoDUyDpSe4kD1txCSwMt1LSoB3W4SiTDSNwLYzKUE",
  "key21": "PvYxFwggH7huHf4XiJL7k6Em42jEhuQYSZScYgSUJP1YJcdvrRbRGmjgZr4fbAdDUjf7yBmkJiwaDZaQSA4Vegy",
  "key22": "3jpc1aJ7o2bePwbYd5ACthFT5KjTPCzpByzNTUubcXHxrZ49gHoj4jo51UL1T6zs7pqmwEcyhKhAHZ6abRdecDvd",
  "key23": "4WzjYfpwCfJGs3evBkj7JFMc5rwyMuBdtqUiK7op7aDdtgnFQmGKKqNo6DwWzJacQXM539eWSTZsKNwkh4LygvLL",
  "key24": "2dyNY2smESZQCUXkrPEU7JNdmKorVKj6rZivepEktSfbKiXPNJSNv6yRyLG6kP1mYeLX1JUh6GmMx5KaBHnSjRR6",
  "key25": "4y6sGkWYsjTHii9NsXcTYBhMB1knP1cd4HqvbQvp7doPxRNJomC5SwV58RMkVHTjBoh2xBtmhvGK3HYo5eSA1SQj",
  "key26": "2rxaHYmppaoDuYxrQWR935Z9ngPmXSARfQ2gHPQH1BUiofqbyqpviYpoumZ6iLkJSpbk834L2K2sKu982D48BHem",
  "key27": "P6sthX24eZcW5eETmQSFL7eC5rRPsnRT6hiRNZG3tChzpUWMdmXd12LQKUWvB2Hh7bx7g9kfYJaQ9BYcfhXSCuP",
  "key28": "28uMgQ989M9x7puL8xTf3enu3GD49LW192vLy9RGA24ArPQ5NzYA5CFmzNrYn3EpSd6V7tzCnuuP17qyLcnFXeG9",
  "key29": "4dpMNRszP6rEYCQjyVtD4G9Da35aezgMyBF9JkRfdAfHKaXPLnWdjzw1HDXyMbJrRg9U78HmX5rbFwF8tSHgsesC",
  "key30": "4CRYCHfA2x3fF2SzKTuDW6v1SFCD9jhZ4owWXrpRQ9w1Qc8ynDg7Mn71W9pkvBXsmJhuDXcL9KsnHa74H4nwBp1q",
  "key31": "31cXGngRvRtvrNWeeczESTmBqeJPeU7QnEkdND6A6YxBc5o9UaXVZ1SrKjnpP9fVM7G1pdxkZ3p5M8yhivHvSSbj",
  "key32": "LsN23DZHsFbKd3TT1hSnaCzg1kpkRdqLc7MwKWuLn652ie8g7a2igoYLC18zZk6oLCxAoqEgHmKyanfqjBBLuC9",
  "key33": "gPK1oVxdLKdJoaURtGRgEmFhjPrpywsR8tyM5e5h14Jg1TGxeYSiF9Moj3SniyPmebjU5sBme9h2wB23vHKaZiG",
  "key34": "4LobeRueX93j112jSTVijEo2PMnobVGHvzRv7BahjtTwQAQiUf9GwJgqo6nPnBKW6YodQiwTbRbNUDBLDNqXENiF",
  "key35": "4UTYTMX9c3QSEkFikCaqF49UNaCkguCdnaWcbd4pR7yoGZukCSgN4KJegde1zQZiCA3zoXpKH9pS33FYaCZ8Zab",
  "key36": "2itpD2hgfQTLnbyZr33HDVhBRhYvBoo5DGAcDVrBwnJfywWQNGdx3aaxwZFUb9PcvqzDNo6KUqt2HTFGjkXywMxZ",
  "key37": "49BjtcUr3YohX1VHdkyXD5bXQ9HYnN6LDx5U83nuRuB1sXg6RUFfwnqrNr3JHuL2dW3kpiCkLr4zPyNT23YiT2TP",
  "key38": "cZfX97R3pDvLciLdJZgGECHkGXUS1WWwiDY47umoevbpXo5bgo1dthtcDHeiFtzHioAePpxUvjPXkwL1594qGyt",
  "key39": "5HPVU71CeG3VEri5KejFX2fFMQQrk9wHDNdEGztj8CHU6eyxMkcCyjDSQLA9nHqmfoN3BLXD1oACfxR2NBFTvNbi",
  "key40": "5ENUfx1PFP6nmcwAuCvc3AYwY2gVXDDzUFgpBdqF29cupgthCTTWE3ZyP9N6EphWLRuNC5Lx2h5ZeZPVT9SQ3hMo",
  "key41": "4QChpMJRxVyKBKRFRrwzh8swc15fxdszfhJEzcx9CZvsUm4jFxwpRqQ7rtX1X35Qwqi2ncAHDMfUKENDXb5vA7Ba",
  "key42": "5r7YAQ84JciGAyeKTh6kZGUxBCATaH5YaUhGoTrTSmKcazD7BKiSYytcaSHK4fj2YCErrttNSk2ar1nDXDHqPkYq",
  "key43": "3ZVvHWqQgMumDtnrDsP2Ufbt5Z4yhW4Yyti6TN2f1ohJJfmqfuHM1dUc2tLXoQUCUvC1v4YrVo9sYenVX1LyKyR8",
  "key44": "45zzgnDNmgE4skXxHqANNG2SuKwtZNFL9v2tdLwrj5Yu4Q9abrac5uBHynbVF4WVsv71Sgo3k7dgBRxySQa3276N",
  "key45": "48xrP7zvJWzuFWCBY1TwHi6x9DhYNzWsAin7GMjj7EsKg4Rf5Q8HP3CiZasmKfth2VQYjZV71qKmsDYv9yaREbgp",
  "key46": "2CdayTBjzshAp5Kwwrce8gVY5pwB833o56QcE3LVJPALAn7S7npVuFdDYfxRVMJF943imFDcwQSw5isrwvZqHrw2"
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
