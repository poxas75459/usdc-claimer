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
    "2pRotE57uDvfaExQp5kNzyhrDdvh6FXzveeZ9PairXrfneWbTZGt9WLMoBuyH4dss2D8MLdUVuGn4VHo8Gq1ANCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqbGtT1xXFM3GMvwM2hG5q9ymzXT2NM9DCWUQo876ycbLkDThi6y6TKn8py44NipgWPG6ZiRycsH9t4PTPYZa7b",
  "key1": "5K1Qek8MdVKr5PzJ72rmrKLuG6eXhhpQ17PoxZhJmEhKGHqvyUjowsmEh4Rx26AsWnq4wKwYGVs9cNHEAvA2QCqL",
  "key2": "619gShCUJGYD7Nmzsjma9Hq9h3ZCwRJnY43RH5pfH7gcqd72LbeWWZgf11o8Ni6ESxxdWgryBZ4Ua84HPHpy9Pme",
  "key3": "3iRkhW767bAtNiHMMp4seiDfjDa1Fghru88mHxn3ME2kB7KoCrnTUKoMjyy73jPrTxqzw1ED9Eb2Xb7GfC2LX5Fe",
  "key4": "Sg4cVZdMdoTR1AthbMbPLeFMugHaJYFGWJPDiGwntaxbFRSVZ8rd4KqVUWKXpbgCJrzMJusDKPk2x738Rj6s4Vd",
  "key5": "jayGjT3ewjsZQNkpNYt5WqGfT3in8jcRR2CHZ12TBicnAe4u2PXGyybwg7NnHpDcCJjKKLKZPmbhd81APk881cs",
  "key6": "2gdiqeoriAaPnuvfGnFqAkrbugHeFduQhbPRcJXvoeyLwvTw68pUBKVk9H6q6A2rcxBBHvMJG7y4uMKiiX5JYSFm",
  "key7": "53k6r3o61PtfkLcRzpR55EEkhbdLrktdPiKpfWhXZpu4242WeQphg6RnsWeNZqfsUGC9BTqTq9Dxes5Lak76jghn",
  "key8": "QDiAFKyuGdDZ6j5rDzJU1PEK9B6bNuz6B87BWEsDo8B82LvQys6UhcCjzGsmFw2PaarE4q8Nk2ebeznUUXKsWup",
  "key9": "2rgW3aJTtVS2gQKNiQU7ctSi9EEvEJej9dekH2oWwkJhTFDhycURisdgZG54G1sfwQVL8uSBh5MG1eFRJZSLWXWD",
  "key10": "5b9f4MMgT37qdJKidB7UKacvhad5MJCVvotXcZpx7wJi5bMNUNY3nqtqFVtgAgMqQKs5bKkWNKeznrdibLKJgzLc",
  "key11": "39EndyLasms2NHeuKCqHoXCF5UHv2hMyU6LSq2JKKu7Q3bJsQ2B9sSrXTazGSuB9A19h9DgSDfaRbPhK3rp8DfZz",
  "key12": "54XYgfTAZ6ZB38qoLjpK1REzkvs35T1wWSmKRwRzWyQW3Jj4p2UsBfaqZVr1CNBppreTCNzLAsHwRcCgtR8ngn1W",
  "key13": "nrzn1xLzjo1vNGRWqwwUHZYg4dvCCaKCyrgD1VqxfY5d6hn1s49CB4fPCfvoGVt4we7UpzwapyqjyBUyZFyeSqt",
  "key14": "4rQVskKsR5LDjKz4gxdTAf7bjxa8h8Vco4Zu36orCrvdNY8d3AbMrAqL99F99hWsjCtTJyHUNPaMefKZw6XvaJKd",
  "key15": "2if1HjRbq1GPvVabgHQqS5J4kAKucP7tffz8AfriuSJZjwgSs8SVkpg8a7J2wcvUcxj8Bb9wDgWfaP6LKnEUy87S",
  "key16": "5miuswgPZjbaAPUW8MqSwb1mMhtgEnPCJX6PBYJC1WWGKUkZ6YmtexsNfu3BAKqEM5F5tGMHVkBVjWswsZCX5nQW",
  "key17": "5a9nNz9xr8t7mYm1KM7huwq38wjNewaZ8qMb1xXJyLRLUR6quDRSHwWGPqxygmTVq16Pw8Q4PxEC1xjwfRyfjnXv",
  "key18": "iT8kCZP3mQth8SrSvBmKFFk5mFPLbr19kXvHBZdtWeX2ANM2p3PDqMZukM8N67zazt5jmpKoGxHqMugbLZZ3jPX",
  "key19": "2jUyrzPy9j9JrD3CPtNQagdwjf2mo8BLyYR81CYdYUhNDeUPNNjX6zzd8XFPtXCnQTpogy4jz48jPnCue7V7aMHz",
  "key20": "4A2HiSLrQgJXhhETCkG5XXaw5c3ESJtgPxhejSLiEXZpSS3HhV4kyonMdwvMtz3vTrwWBebSutXbh3atq57xj5qn",
  "key21": "51rDhYWWeS1tM2fHSHZNf7hMKTro2yUKbCAuoyoHkXoyAZk9iXjFCdpZxbgnf4FVb1EeF9jYwdshZuYBG4bdcVLt",
  "key22": "3o5zUMAGRLH5Xv16NDLv2ZYAD4JxJDT2KdJr89BAtBgJoBjFAvFB6Bic7wSVoK29FAJYbBQ6Gn5JXrntPJqo2Qsf",
  "key23": "2HKEwyrAi8sz2EnJzHMfTjDuRKjWfDGp4YqsPWGScmmiGmUNzHhpkiNbJmY7zp6hi58U6FdysuKfh8oz9rsYPUUS",
  "key24": "3DH4rzeKqzXo3eiQRPuZKmjCEwU6WD9scvnV6Kbhz9zCfVLQQ1oVAqK1QJb3sN8DWF8gkmb7GKVzvti2tS66MjGf",
  "key25": "24GjAw57SoR6sCxMdquPgRhsWKxksVKpzq56tMu8tjHJzwJobw55d3JMCaBBFHQKsbDnJA9pz9hLf6z7kLPPbYn2",
  "key26": "3J2hkzBaoFFJ4MjFwZdHLmBxmUiagsh2Fcfp21ykDmraB4C6Un5yJtKdEfjdigXMDaFuLuDVctYtHFVybZ5vSASy",
  "key27": "3kKRc12rRkYs8MW8bXuTT4BtHL9CN81Y2fqnkVQh2WKvZ2ErSVbV8uNZPkPuHugSiVbAYseXD9EdY3He5m4qMTQc",
  "key28": "2bNmxUURnimpUJGwuj2idZ7wPQxjnaVeEGFEdxeGJFQgNtE6HCjGnRwUy1CxbcKnK4pJhd33VTjMcW9eKFk3pX6V",
  "key29": "3mvtTqBy2jPWh6ZivTsSWLrPY9VD3nuMobbYctchhCkSbyNRGRigEAKdJdCzf3CVhgeZfxuSW4dgtn3H4NQjjgUe",
  "key30": "4xQet1G9XcNndoQyzMbQrtqVFpKEjnQ7NSJTCmmpoyBZYzA78GrW8pKYPfGFTkbApSbbwj8abSpVU5TjqD4of8h1",
  "key31": "2sNoXLnhsbySCuR6YU6qxDCx5GMLMCpHsgaN5qjDC71fyB6nJJFGJ77wt5mb35T1EdKZogwZ1sGeuPW9gxTUmFb2"
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
