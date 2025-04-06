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
    "345ZBG8VrGjfmd66V4kLjBkqACXwWzThXDAVAA8RVFuQjgJq5usuxDzAUMQ5BpDWyWQcXN3YmGYR1SfJq6g84CHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4AMtD4P1MDMbn99p7nyfcrfEFq9mQjRp9oiJ7XphjaJv9PELUVhaD4DrSZmSm1P1pY2oUC39zhyQYi5CaWsKBo",
  "key1": "66NkH3kJxXyUbREJcrSTCNjhbmKEEiDwQzydHxikRfBoLu79P1hQyrNPRNAE34UZzC43v53AZ2KTMQj9xfvQF2rQ",
  "key2": "43Rf9uN4EJPbncuduCniaZ5W2BUDwcraQaCDpzdCzyZ7MxsYAv6meB7KbPGcUMvPxWr3oBpGxkwDMuWGMmuMggbN",
  "key3": "57B7hga8hy311HN35PCmVrByMDGfnv9JcESVqARWP8VS61iqjUF1wiDSSbsMi7ziLBGivCH5WsZ3eciaNZRExw1z",
  "key4": "5h1oWsgbSBEAwZgkCgB7vkE2t5y6zrTPoYxa4cby8MPEtaQwTCxWVSPTCYNfkPJtmS62m3CroYjFoseztij93FZi",
  "key5": "5dDMVN4ub6FLTVk39hVCHdKwqBaUD6ci19XAYSeykjkCDo83QHR1ZXYEj4CKXyDiidp6oznFM3ML4LgTXihkPaZ2",
  "key6": "2L2RQjChdL2rsC57iB4cXAqZHRmYJmM6bAT2mtWVGLhaVhHJ4FvZv1c3aFX1VDjhWRPtwg8cL4AAMtSprGYHjhb7",
  "key7": "oKWzo3SGt7mczzQDdiUyvQVoJNft6ANFbuv9e97xGt6ovUnoBLaKaUSoPfB4szfc1Zq7mGbUpK6RZCSESf2Haok",
  "key8": "3dsYiVQr7hKG6ULAikSk26L2uiMALKQZuScHHsk7FFz1x6djAsQMHpzxVNayRWrKj2Xssq34ii2qb4n6YTy5V78A",
  "key9": "515h9UXbRiVCBD6jbyoHiAneBLdXWGiYJ2h1fFgv6TBR1yb6icEL1pUBcY6PQbMAQRVpf7EdYdkJpCQTBHv1YXT5",
  "key10": "36uU62W9t5wQQ9xF3gAB8ryu8hd99r5CmTzmGm3cX657XBW2fC3VUM3XUTDWNUsAcNPZUHpnv6gpqot3fvqcowCx",
  "key11": "2awbsQDe9tyhRgbT5vj3M7cpvkbYqaws78sJLx3MJUTLJPEpbQkD4bqoAgACQmCttrjG8LZBCvWydFHj621Sxu1",
  "key12": "3ZnEAvSG4AYhNHKZ2aKG3Tj1FtEBcNKDqxzuXGRuJabM2UDnA3VhuH1Hd7AcABiV7vr8AcEFDgEEhZcEy5PXVHPv",
  "key13": "3skNbnTSEoPUvVgpmjVgzxkwzfeFTr99wdyYWKRaEKodoAtjCrKFeQetWfESRD5BeUeUHifgfPayzYzcRKSa6bsd",
  "key14": "3CtwphM89SZwxg1t1FT3WenMwLdbHoTaAbFBHcgAHA2x7YixPrXjioJYVbkpv3iuZN8BWZfDqugLDtSsWj6MeDEx",
  "key15": "21FJGx8CuwWpcAfspw1uLw3Umpo4zywxsK3z6W5x5SGPZYZvHyFMqvmRjrfNSj4YzHLi2ntv2B8rPpb2NZAoy17N",
  "key16": "4PoQD3xSJUqAY3jdYqP3xAfMYbXmtn6khAu2bLnv9CV6G3mRSkrkJBd5DKnZLH3CCVBt1BavZcizM1AZTVDJb9ta",
  "key17": "57qBMuHX24osR5tjrhWgn2SXkSqCjvhunozZ569dqz7zwEW7MXhiixPgQz4CZtMMuGpVPUwsbmodmXAuwfSiwAro",
  "key18": "3Zp5YjvhBQhZYzQxgAtUW7wDry5yvJKSKbVdyWJRCSyE8whgQZDoUsQDSknUkRousrPmYqUXp7BGJYhTkp1tY6Jo",
  "key19": "fd4NmgivAvPceRmazyuXAsocknXD2xEdckks6xo2SWyqhyu5zpFzPxjPyyjdWWK5gocUwPhDVof27TJ6dP71WGR",
  "key20": "4BgSEDUgaGRgtJ5Ng7Dby8APLDomYEhw1YSFEjDw36CdAN7rmyzr5CJAjDnFYe2YGo2W1BS3k3JC2ypSSk8RSgaZ",
  "key21": "RrYjyAU7sL6ni3TdNdwjZihNhchHimoSgWBzUtDhh5LsVrC29nBNpqNuVatK2bMn74oK7wK53zNafBnR5bJ9Ged",
  "key22": "37nFtgYXJunT74tNEPndMvdMs8mGZN6FZemB75tK57Ur5dXeGNvZtfgCFL68eg6gq5ZJUXXb8ypYHzpQHaDThEfC",
  "key23": "2z9teRcY5mchGn2YB9X28YKQyBTQ6EJp2rLdriZH5RFS1NCfPuMH7GAh8UvowKmLqi7D9N88dakUw1gWaEhFMZ36",
  "key24": "2R3cT61f98fn6Mr95efW3ZcD4tbpa2UDEDdVbw9vprg9g9jmnpTAepvYVZ39FiUokDWBvmvFHnjfbRU7DhtqzKVy",
  "key25": "9Rmwvf5bbsfvV9UPbBVWG6EHxDvwL3CWcM6JhhmbzcXvMtvXYGqqcMzc77oV67QHMhZm6M82Y43Mnd5sswq9m1n",
  "key26": "4w5QpKeiQKTgK1wHQuioU327bEiYQBYr2MSxHZb1N2ynR3RkNpKfAURxjUzMZ2Mc7FHnpJ27WR1FpVCKyhnBfAjh",
  "key27": "Zv8GZpGby5GZ8jxvFsLby6SFf1io4PaKxMzFaVr93FfTyqY1g5S4ssUj1cvjFaoWCuKmVcVd4KPwkZbiLvQr7Dr",
  "key28": "5coHMo1mcwxots9PzkRfcisT6ezmtzeSpS3vo3KFoJQZMeH6oMRi9JQ3FB4mCWxUKsNs3z37UADZVtyNqSL19LF7",
  "key29": "3JE3mJKT99mQiuWSyRGzpiK5WRwUEAbeK9aGJfXeeLbSwQEfM8UsXx17geiD1rh2b4ugaMvNMsq1CxJvQvT59gX7",
  "key30": "2qyWhKSCZPEp6ciWct8wLL7nmsdNVoLwypNxAUamkW4JFeyuXwUfJP584FiyXd5LL5H3Z3QDMmnJ7rGymMnfLU5Z",
  "key31": "2Ckr1XtRRRTdWRLeWpi1fZxZgC39PyEWTFqEBrVXxgCRhWgAY3qkhbGm5z39ks8nGrjPb1WcZysWh6zUGEB19pwn",
  "key32": "KQkRaUmnZmFehAopq6WzN7hzZzirPAKBcBo2TmEeXG2K7wrVhqqhqwZDb6ePA1KA9aJf1gDTrZpLCXSDQ4NAb9P",
  "key33": "5ojRHpej6MnHX9ZB7iG3jUk54uhPYL9XMdE1jidTGykiBwAScYQJzo1bt7GfST52yRBGEQBKir6VYkgp2nR1MkEn",
  "key34": "3YNwKNHXSSHHFxcxTGECUy4wwkEzUyhW7CN458hcsTJ1fC618hoaJPVrP1rbiWhuQZU7g6vL5KNrF8Vyv5YYJu1D",
  "key35": "3C4yFgc7pA5vFkxgcJ74H1Dkg7YJWNoPGj2bPwPqhYk51inW6WhkzKMR4G3hUK3tdrDnFuZCpVj1rW8ak5LzozRu"
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
