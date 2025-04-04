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
    "3R3fvoCoPRp5UrTv3zAsftgsJswJ5WCBrWfehGXZVdCEvL7rwGFVWoZ7DdMQ7u6pCGVwhhP5vbbFgEqLVqF2XXkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XpTk77BqXtRjiK1bDp3Wz8jZTdH7g3Gi2AotN3cn1vC2GeTjrrYEWE3H6rLVnqErFzzZ1kR7icgE8KxfYpgFkWu",
  "key1": "29scrEtzfJTDyhhbmkvf54wgox3nZXGbP3N4FiYCpnAohuJ5fLRcD2KkbeNxaWvmeTP2rewRXvBDZv6qvgxtaYqT",
  "key2": "3FyAKdWfMf6uVSmTXBHKfeUdJ2JCbf9WT3EymbHsPeosRWKxJhWVPFbWgAHxj1h2PkwGz4cXwhpSvCQF35AWn6r7",
  "key3": "3sxvZCpoAMoMtt2HveTaisEmu69cQw13avViV3d8L3UfgaGC7UMFkQeAxKrtDdWgYPCSzSUkpDuQkQLUnpf4vrv8",
  "key4": "4pyrpBn8WT4qsig73gFF7fd1Q55MHDPdMtai4JR2KnkUsKNi1fqTnTGvJBw34FTroykRHiMaoLGqfKuqcTR2rUiC",
  "key5": "3fvD6o5V2bWhmGqn18MSZp3XYYdxEtJgeFsWcT68REsAv8h8t3ysS2ZedWk3U2Es2U6arGwdt4jLbvhKkm9xvwym",
  "key6": "2jSLhjdQPHrFBbtZ4sS6SAQTkG9knCzwqM46ndK7biYGVJxbuwuXcfcNtzTfu3X42XGyYCo3qerX5mMKwhyAds25",
  "key7": "38C8aDWuHQWbTcgomZh5C2KaN1LC1RwVEHqDL4gdmyBXmvh3Chjn3SkbGNxpSzeKknKb1U6RNPZTj6ReXEkGwpCA",
  "key8": "8puqt12DzkRy6HCe657BHTbAufqh4zwp4tgRQZRui6KQUvDG7gsy3N86fwz9YRC2pPiL5cC3FCJx185GCpmE4py",
  "key9": "2nqE9qzf1hWQeUSk73FJcPJziSrcky3T7psuZcxW6PZbCdsoUVv23ChiFusqABohi5bnSR9R9Ytfx6tque6GDNk6",
  "key10": "2qsJhk8K6vYT4VonLZC4pTxsjaCfkRxx7aumbXrbQ67uCJWQmC6BtCLDdXNpDRJZp6p7gor1xxRf95eNMop2qq3u",
  "key11": "2wknD6VpHw9DKVJkxQ1aHQvrCFoTVvxX2PXdu7p1YJ5ZF7pzCTSSAPCiMBCggPkBFhuZ3kxesqnwVBMXsB48FtE9",
  "key12": "4uK4KB2rC9dnYWeDsMyHq1UNHQKb5AqUtA7cgf5u4py1gusxX2FbnH5obYiW8tRRzpBovYsdmre1mVFgazTLFPUN",
  "key13": "2aaVQRqtkZgo21UUd41GsKSpHUHbJp9V3sYKT6u33eM7gJWabvE647GD31EyPQSHaPLcMccAkmPHbpKDLfThLEP1",
  "key14": "4AnhuDtzjeh9dQ7fbthaEqY26wwebsk4skYoPTAoQSiihfR8qAN9rjvkHcfv6xL36p7xfXnppnTCnoneNzsfrZae",
  "key15": "3ieF5387S9JuQoZjhdd7iA65FhrZAzmERF7WW86iuxoQaR5Q8CQFvRDvqYGDh8gUraVKkJx3YbBNJ3dWndVQ4D6N",
  "key16": "2Nwkk9ywFnEb8C7pbNCZD72K6ccfxDQ1otUJrjGATqzAM68J1MwMmWHWUaM572u2zWiWNjG7oXZbuJnGjAb2V6bc",
  "key17": "eNoeqVqqT6cPZZdriFC1sWYnuAvuddUe4eGGnjcUAWuWKY3Kg7DFqD3B5auJzP9FPeLLQX7ri4FTbEVoPJ6oReE",
  "key18": "4ExawaUcqnnuC2uzpM5C6GuMTCH6DDUeyifUxsqiHEwv1bvGASbi4ufLqp3SpUYv87sbRC86eJvLDr5RffVPWGcs",
  "key19": "4PvZaZ3xeFkstibyjSNZQ82oQcHJ5rP1UHPb11uatCmhX6asF6dz5bKZb9WY8LFGbK2xV8wzfXnjpQTze2fAr3X6",
  "key20": "2pLfXR2b6MpSX977KtpjZxuYKVW5xLtXMJDyq367yqEKicEq64ZDmEpeMqe6obrx9fz4cndofugCy8aTzbzGj8h8",
  "key21": "4aLge9hhCXRPHK178QvGoPurESE6YojJyJihkBH3fn7yFzsRtffSTq8ymJiWcR918p8ttqyUBo8LXgi2RJLzd3yZ",
  "key22": "3LZP9JCyfH6mP6CUQ9rPnDtQo1Pje4RQo7YbN7g2p2AzBkgrPmeZ2udnd3bAdS3W32mcqyqwvpvLAhNUpUox8Xdu",
  "key23": "ANhyTnWxLSLpChWD4VL7FYbVFHmwj1uQperqRxDkLLkcAh6pB3exHUVk2tcZravEKX3LJ137EHaTD4AiE4QwGXW",
  "key24": "coWJXiw7mR2WnGhChy58qpWKfhuDPUxxidUYQbRY23rDw4QC3F58Pcz7TS4n3d7K4BzN6bpAz7232QEtnHoP3fa",
  "key25": "5tbqks4fcf5K47J41Sv9kXZudznidNxhLbGWYPkfkxUdfBCDsC6xCafSpZmfXdibgWeP4qrH6MffwaPWsozYy8c1",
  "key26": "4ipEMjABT9SCeRE4W3aomvHiZQdfKvxjwD1HLDVYz5bBDt36c1F3d6SNYX4tTC6gDngDEYYo8vSuEGC6KEYFzum9",
  "key27": "3TWfu2o9T917QfV5y743ac8FXCMRzNNKxaDoLhPUYckkX89PGmvUj1CtipFubJx7CBcomrhd6kAmoLPAHagdaYzT",
  "key28": "2qFAJYVqCBmbAuad9bhWmvEkLixZgLapiUETSR2Gfu3nTxaV7ac68DGtBpJ9zTLKd5QKCq1Behmk5iiGPnJNpXr1",
  "key29": "4QxU4CwBHg4hAweTppFaP4qM41saqMNVLNZjBPh5Zbv58dSd1n9xaERG2zGWE4dK9rsLC32LJg4TDip2Fbir3aGG",
  "key30": "5CwJr2Y4oPqfgipt52Lf6jFkzJPpjWwKGyUVsXqEGJBvScgyNyr5Tvih83oBTj9zaFo8SuBHwhfbTSKZsSYLmiM",
  "key31": "Mps2hdGErUCi66K3A4UFDSUpyu9UDsHYiqKjpoyXD422rm48zT8R4sRsxJfaDrHus9ERp1M5WZ3QvYsaNDGxcFR",
  "key32": "4LEgnLXLiRjtLsxsDNmydYbHbwPsxBDxsaQJNHXXcmDgCB6aDyeNS4FvM1jh7g6Nctf6mS3ctGh74nYKpH1ciYXQ"
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
