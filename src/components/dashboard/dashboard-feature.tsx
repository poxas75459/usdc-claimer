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
    "22QeWZYPXfaeQcKCgV4a2gzSqJeizgLrBJ6FAKuSRYVXDEYNfBkKafyGmUd1Mx5oT6sdGXbAs4TC7aTanfXmoDnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1XVYibjUndoQzsi3hryYxPQRdqv52BdfKtpYCDnmCEG3gs5MbnrXd4ZSuDbJ1WJ1wtSYmoyKUeLHK7UCaU3sjT",
  "key1": "4GxFTsQTEEyJWtzG1TkjpXKLSAhvfu74uDTvEX6PCVGwQLH3qezM6CtUcDqsXDC7Vt8fcR563Woh5ofBwN7hLbVD",
  "key2": "mXUdQhA9FbcmiAoMb6jmhzAM1CLASvNmUJBNERkU1QGjZ5eXB7Zq5y9MnWFgk6t1jEPugEPHV6jhKarW1gpaEKY",
  "key3": "3e5zby7bKdCLyqH4z1so5bTFooS1WdEUYKfJfZ1LmUmYktjyCZEYPgqaWkrSisQcNnkKqSqc6qW4jmCj24B1PWcz",
  "key4": "2qqRQySztTPRNtNvJk3pKx6pPeiSRF2hp7qPn6cEo7f5Lgp8a1iKPbnSf6AsJ2GkJgggSRJ8sCE4xEg8hMiy3UPZ",
  "key5": "27AuoUb5gFtTt4k7tBAUMTAbydzdtnYDm66SZUpCGfoFDbHuSwCqWr8izexhJmqsUNiuYPYKZnMjwSKYo5mebhNK",
  "key6": "2drsPrPBXVC1JyJpmP5WteGv7eSCbaWWPq9pSmMYyrqf3H5E1yuaz7GNLeEznLiuMZpT96JJ2xAdPuMpgzQ5R5cA",
  "key7": "4DX5tLFrSMCMWGGGZf6RmxBSJFeLKyYXUp9D8a1cWSvGua9AxxGfR1R993KWYJA6Cvn4Hg9FCYVDNa9W5ykBgyw9",
  "key8": "38jDm4irxUX96fbp2nEnP1YSPWiWTdbFq3xrwTMrxFBJhjuXJR1nYgszyiSRTF1MCv5hmjXBtM7qq5Rrj9ZZdhCe",
  "key9": "4cchtUfPtxSoEnkuaH344aTZkSzDrXXuYU4ohEkeYwVvHeU5i8MJC59UatdhdDgHQTNcRzwvFBDGcvvfdsZVV6Rn",
  "key10": "5FPGHetyNY9w6Y4DDKoVaRwTcTRbd7twFMkCRNwgP8wmbc5oN5QKf434dQHGevfQ5Gad2buqaSmaiZAcSiAAVutR",
  "key11": "2v5hgnmqAqnufEKjQa8ocXjc2S2UtWmh2TWjSFQ1qsczbfSqXsw2esP8eWKigjXDZ1kfjYRxbej1D2BpLfxNUzzS",
  "key12": "4oKty7BCMp8ZLUB9QduSz9RMpwdMzEhMfyzJFqA44VBC6KQUP8r8YWNtMKrCeSTKWsKSA5mLzxdFDe9Lx4E1RSNT",
  "key13": "31sJUj9vHxfS7tpkDx4QSmRco5cz493ZenhtPVUk8u51cRr3HsSBnydo9AiPb2HfRP99U2Qbz6zRyhW4dhP3NTaM",
  "key14": "rgofbTVX2QngjiQXmAwrnnkUx8AeBfi8sBbWCvskpQXaMPHz4EtV7UYHNXgWTBdBRTkRgoRKmm4DiK52f596yNp",
  "key15": "3DLLbZnnGgAe6qpA9NZqoU99pBenwGTRLXkCPVhQzqMzri7phtucRd1tM2W5ZSpRRA7KU2q977c8UNbzHod5iGta",
  "key16": "womQhrGXMkDBoBwio7g6NzVwioB9JCTWadiarXufYEgsVmC8KqFo2a1fBARgM9EK443Znsozqd6gfyPcaWhSQ46",
  "key17": "cabL3xzRgm7gLtxg4k7La7memyQZh6gu7bLks3fDc5Yh8qPfjj69hMNJSr6XHyXqfpRpenopoCruugvtaJUZUgC",
  "key18": "4Nq1io7bQouaqkwcxVE89T8aM36tPXwcPNLXX7uWKXUByAF6uvdpwiYqvQ4zcC5YJ2vysPQ2sbfCpDG1TXHCQ5oj",
  "key19": "3EMLuMkmXuosQAu43Cfmb3vQ9qjSFTcgUazQyyfSHEooVnNLFD465fVKZc2dkBCwA1bY4GiPiLDoiLbCLBLYUs8V",
  "key20": "3DA967daNFtYhGWYTRCKD9CFdVyzKe4BVJfu1wrM5w34m4DtT7shjv4sumx9bs3gNhPxhBzgQrEijVfM5ZA5PxuD",
  "key21": "KwCjsvvCc9uWGhLtJoxHJPebhoq6MbQHXq32iw5F9wbVeQWjcnHiJP4Wyav6Wbxsy5YjyyWnoAGKBJUBsrjt3k5",
  "key22": "3BWHPM6PLBJJHQNMK1REs1bJY9M72pgjtUmskir7QcNw6iqwkEGCUwMWdT2CynWinuK7bVGXYUiprVT4K2y7Dukh",
  "key23": "5goM7MhisnivkBXtSjpGySPX6otV7q5uKZ63LBxhy628kHxpHDyDZ8Q76KtqUhpbmqDXfK229rFFgDr6VYJ4kaVg",
  "key24": "4su3v5wZKBUparLMSSJzsMzUYm5FNEgyH5g3CdgP4vhES8wWWnpLyt4D32Be6UhYC224bk88GaNHN4Fa4oqcchNY",
  "key25": "7p4LsiSQcGjaffeZQLwzLjshtMfDX3CtL3qZUYqPTmGZujxiVxiGFSJ46qT58Nwgjy1dNrgQxhWFnMokrYC4ccc",
  "key26": "5fCfAtqQYU1KdDr6G4LT6geRRKoGRR1YijGRpvC5WrERM5FapD9ACK9shDcwb1iAVp4a3gdpEo7mj8r1zajQaNSA",
  "key27": "4bAsDAMJBeUQCT84vPitJf1DGwhqd8jE8YfNWcC7MjU425LLrMsyxS1HmXVDYKCA6PfgcrMMFfHN1YBC747zyH3P",
  "key28": "33kVv5uotSfN6VKeFup3Q3ejAS4vHnupYiRohkXtSr8pLs3kDWtHgaXHhBisXdT9maSHqA14RRAcyEJ6AZesmxhq"
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
