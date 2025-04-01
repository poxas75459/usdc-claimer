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
    "5qLfCiJpDnVpizbBn8woBjETeHZTFSmatu3Cx8srs6fs32XGsAvHHcNrk3myQCKnu3cs6EdkbUTuremYyo4P77oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENxCma4DSAA8ftTGMGKNpKxtPCDSGHXfHhesw4Gv8bqVxwGLSXtFqphJC1ZTgmPjGBewSf5Azxgo7TKnbrpnmsP",
  "key1": "2o5FYUTRsvN6vvW31z9kTNZ2Dxw7hwBzMFyxAoQ1r3obzLVnvBiDVK7294PaECzbN5dcpsHWcpo72XPBG1QeJiYZ",
  "key2": "66ydaMo8JPsk78Pnj8uAWjnfpEoLHRvz9G4Nj1enpHu5WY4dob3fWzSP9R8X5Z2Qcs8xGYEkJw2zFQkydQQGoVBm",
  "key3": "4AAX3PFnfpYR82DX98iHsPjo2vWSASh39E9sthskt4fr1zggTzjFQGZaXqB8V6nGv6eYbTA4tMfkHdmndQB4SL1r",
  "key4": "4vF3KJ7pETBtC8zUFQzqsa4h9tCEvs74B7caw74mXHwoAqsKrLCCmXcFb9H2cwhANZtyrQ743kXLnth1mV6aYnho",
  "key5": "43tYArBro2wNtSzyVas9pwYLXeBSb3WwtJtekeiNZ7bKVnwZw72TynV2SKnQm4DvgKrZ5ib9H9zNbDttUip46pxw",
  "key6": "hupHhLc8W3WJe4oV25dXQY1yvBkUvSxkCeN4dA2rdRLx3gjAjax8EVMhP7nGr9sWiJPkQc1o1ky4Ci5GVESP8n3",
  "key7": "3S3yiyorytGh2NYHZjvR2bD1cBwChRhK4jeJJMGDCsAweCFnX4Y615CmYAPGUAnLPcUvz49TQFa8eyrt1gEKKJb1",
  "key8": "4HbLkFC9XErKL46BPEhjvtzej9yrFPXPPdto5ECVXZoaciSQvwrwSypyZHiKFD2GMTLyk28bQmryHv7ADmf4vMzz",
  "key9": "4Azu5KnosJT1FMNpvGHtQhi6PkDfrZKEfw98T9MLHse4oUpp6BfDFe39jsupY2Phqh3VfUM6XXmsyfj1vdc8V3kh",
  "key10": "33RtTirSABzUNVBWKbCcLdVvLnoA6TwkuRdtcBRbzEnPnnEEGuJuhTZ3cPKn1uqAu6GvAvdRYjESXm64R43RMxpU",
  "key11": "4qQLwmhAuaGB967RWozVjb7tVwGz2TCZ7iDapbGbFb7PYSE1EL5DMHS5yzTu56v3iRMee8P9uZi53CACGqwF1J8P",
  "key12": "39uLWrwYAL2d5fFW29iaP3LKt6eMqzZFHEjGwHuQYWh7GxT2dwSGoXAdSLMBSmcABfF3rFCu8o4f9cKqwe53Cz3t",
  "key13": "51LrHJYJUtJZM3xrKhEZMzS9E9BpSfnogZyjK2jTzTDMov4EGo4ka7YjMGrV1zSxbBwSDRLsB5U2HUgyZApCQBbA",
  "key14": "51Mg44THELbnzUeVBQHjE1dNNk4qbWb59VbRfHThzWLDTwmsgDJMruYK2wRMbyxSmxJrNC5mkYXTbQ4oqgrjfh18",
  "key15": "3hwGRubMwXrvKJi1XVGETUPh8hHrPvxjirKS5hJoU5om3NuoyKEkP73mnrfuhAj5H8rAEq3rdG9AW6eG82DvScfa",
  "key16": "2GZyAe7VhqSwcRK3m473RXazTDc5aWF5uvqV5TXwP3GiDq5N3gr4fopb8Z8TUy7ixiLWvq2rGvPFqZi8bZv5aER",
  "key17": "3a8u47syXER7pfS4cbAgtpmoSpPK2C6ihYyTXQfDJgpmKcy9krv97Amf2cTsy2B4N3YyHqkCBNjfBMvBuVzgeTQ7",
  "key18": "4j9xqsRBsFerheAzLXJoZ3SoHNGbf8JwGGeFGNqVNn3XMf42pxKf5QgaFj9VwSgWx8oFSdLJpe5HaZXkdpzMiJkj",
  "key19": "41Dwsgmd6dDWZnRYDcDwib2LkkMMLqDre48cBodempyvXZTzcv6LK4zFNLamJzoF6pERwoCHNGMfgQLVqyYMogG8",
  "key20": "5ecmyn8ZmMDsVhV4TzosWjJcYPaFTtjF4ijgRCgW6XZxVCW4ksYgorceJ4R3WT5vB6DiyTeSukWAX35MvVhri64D",
  "key21": "4TsNr8GwjcMSjXKE7wGHHmHUgceSVkZL6QH6CXS58qZaTmRByjuX8812bcUJCwLbidBjSmDEeqjo6SRDnoqNciyB",
  "key22": "2Dkmt1zcs1VqRf4Lj9bK6g2Ad4zd7MMVDungc8sr1ZfwxaVgGKwZ7vnvX1YjXPGrUVQyo1tDs3ed84CbAGcaNkp3",
  "key23": "pPGAyNUh6KMEPTmWsG3KrrDAMvD8n1QkKbxZch9HAhj539pmH8YjmwCGC1bUa2ARQJdEb19veee3ZJudawZFfWn",
  "key24": "hitKzbzpPxhVa96eUnvDc4Uvmwe9YojRfMVydQtj1xS3yxLUnBs1mEHF6d9Zd4b2ifTLesGESRuWuLpsWigu7Rd",
  "key25": "4XzbnJjngi64861HJ16FfeKgC3NLiKqNuKjBjdeJ7jDLcZCkiWU7mk4t8q3kPGqc4WW5eJiWM9jhq4VbjFiQDgcf",
  "key26": "2pmjnfj8cUiBAwQiDvc9HAhbQSuArbEJFFDdcJHEKMFbkqnQ1CXMxg36sE4nNaz43R5hk5nd97JnEe7G1uSnaCLi",
  "key27": "zHEo4mjj1tQsFebNDFwWCZ8NRguxSE72bu1PwSs6HCpxeSw5ebBSxWNqXcdv1q4J7JrpSVqCuSL9CjjmRPwdrSG",
  "key28": "735Xu1EasCaDGEkKkutFY6aAL6A3jQtKonXrhMx76KAdS5xHg118nzD2UgoMRAQnMDxt7nL3njQsMZnx4itDBJ5",
  "key29": "cyyXZD57TjbRBN3vmBorJsfW9bpqtrqPgqGm2T9eFGwmLm7rQqYHfjhzt2MoC8R7LqfNomAkn5JGBKDpsKAwVF6",
  "key30": "28wfbpod1jPzY32DeYCfqrvhaUHBP786fucTU7nk5PurkqU94sJESqq8L9e4L7nT3bkpDJtHK2BgjsnjYY6LZ716",
  "key31": "5QU1ZqAGrdDfFQby5UjnQKkePcizBB87qhBohRGGD3RsET1jjAS2egA6gTwiEya3Cbtemn8dzxy88xAH1PdhpBwv",
  "key32": "572QYN6f1sbrgjkPULGr225wDVuXvKTBWXkVmc5r2vjNx8Wb1gE3agJnN5vXMkiYGax3x4vzkDGzRPCoT9aW8UR1",
  "key33": "29jpm7WrTRQ8KLJVQTVJ1AvM4NjwME38NKJwvX4ckvnYYf2ZaerG6YqZ1nUbDmKM3s8LRaynW9dt11J8v9WQjR68",
  "key34": "2XUfjRKspMdr3RnVJrMvvndxoayNYJ1JLuQN4kqUF3Yv4jspgmR44h8sxGHPQYBVS9u9EZSf7n89RUjaSEoJg2i6",
  "key35": "2LaWwtEZyau5Lg6PtMxuZ64TV2XtCt1yn3qgebbZxeEpwtE2rYUbi12e1aD3gEZauFS5fimiN1cZfVgQ5rjWGD12",
  "key36": "HdwARXwJ8XgtE5kNPPpryCG1ncCSbZ5675C1GVzx5MneNFTEGiEZpKi5F1SpxjSSBAHPSFk2bVTnd2YJTUGhiKc",
  "key37": "5oT2DS4n6SHwBbmtFdtuhNXJyPRvS4J2SSchWeefM7W1Fsxk5RumgnwCMPSnAvWyVLUay7GvRWRPDDMjdF64Zo7M",
  "key38": "3a9jh5s7bFXpvsHzh5L968BcTS5bTbqzrswBw4YfcxQJgggyQnLEZZrF8UaHRKdH6Vpsg2vhd16UcWMGdJPRXVU8",
  "key39": "6XZ1hnFMgjVJuQQxuRvxouXQznJVHddeVkJkpsaYtRTUgUA2NWNNA9xff3oKhJBodLzamimgyrEykMKFNCuxqCy",
  "key40": "Gf9WF6amWGHmrAHTFU8GsGcY3wC3onb3gRn4WhQGG8nurWSRkFp8EdHhcGYs7ynxxFp8esnDVsc3SXjxxX7UmoM",
  "key41": "2CZmVaU3pCR9CrfFq7GTTwvHjF3qZwhYYXdk42ajzyxDm8RuwC9waS4jEChKe9DNCi4LYuCPFW3NJJ2hKWu1btcN",
  "key42": "2dfSznTwqwySUbhz9eaostRr57NYDaoYibXCJHy8aup18XaiskGwKSTwhEozVFKp67oLmdiusn2qDcLhoqke6nnv",
  "key43": "2WXrGqfyvZKWr74tcsCcrxCW4KGKxWCenfg4tcvJEhhZ6qEJBLBuVFjVVi2UfFZPBp5Wted23mrzg7Mf6hUkDH5B",
  "key44": "AZd9bdPYcy5Z2LjwEsrgeBgCVpQfp9sLi6oBukmqt5FoqCKCk4StpKqkkTwdZqFFs4CZkcyJkeRWEaaknfzpFuV",
  "key45": "5aRWQBgxoCujcgL58A7ZsEDVjSbFwAUzsX3K7qN129NytkszUtkJ3bheGwDgRJtxjbdzHu8eo1QdWSeLMR7h1RMs",
  "key46": "2f1NLbba6JxptHiNwpB5UCtqBjCiQ5uKmijDEhkCkmTbR66ELfMex4Y7b5h5YSrSEvHrwLWg6N6ZroFLToy16QSS",
  "key47": "3JBbAJXmqUJWxV1huAMrBzaq94ahBVWSd6gFTrq2heDRRzSpDz3k7BWxCEUXkmfGGmeijsuAUmvQjiZ2xBdZqkyP",
  "key48": "54AM2RMXKqeczY8DLDqkjnTEcuY1Lpurh6uxKJaT5SHKXsiqophEZUeVR4oHjSM9EuNgnC7ZJBgKma8a3jQrkWUi",
  "key49": "3PWr3kdpuENeFcJBSYhRV4W28Yj7Zhvf1dJ39msubAz9F3NimgpxEpcmbM7RoUp84HQx9zesCTPKXaQbr39gmA9g"
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
