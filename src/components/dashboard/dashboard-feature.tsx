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
    "5XYrUfnxQbXybheunTur4fr5tr77KRjEqmQrQU9XSBb8Q6Cvawgv15JP2ZXSvDFkAA69SnESf2gXi49GYbmGz8Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwo4XqY3kD66ajURvo2mu32eiadT38B2sXtgXWgd6VyQYLyMcwhyTZ4qsNRSBmNi5c1SBcxtMeAGzd121GCvzY9",
  "key1": "2UUJvd77qXhyD8XuZk4bGmK5hfkLwDFRS1S8dfCFs9pvaVAevpvdQVA3pCNJgQxgyBP7xwsMyXrYaLfnNniPAdct",
  "key2": "3qUETNJgA4zTRy4U8Ti7dFyAuSwxmB7iogvBwfQq5oBbw3XgCPdSsJnDtwxKoH1UftFaS2Tmjw6BiQ37ujEfZPgg",
  "key3": "pdYNTApvX2wuoLMfhYHcWvPueWajvpzyBnXpcZHqXYqAohAH4YV7uzhb1chDDNnPjGRu4SbbnHLmavT9Gcqv8Zr",
  "key4": "4kfuVuE4yNX1Ai2Td4FivFo88HBcVcEVRwEnyV1eFGrQ2Ago45SMFdUtogKJTwWJ1AeruqhN2rGMEmhjvG4Jz7Jn",
  "key5": "65zdJV9F54Tu95gUhTF2qKixR8Dr3S525mp6DVc3Pn6hLB3cGpnF2735dsGFqUmsq2z1PkH67VSaMQcDN8yWNmLq",
  "key6": "42ycrpR8p51VsZdraJq5hbLqTNTcJYAw2Cn75bE5NFvBPv3twedX2GzoV4sXfFjrPwjTDSLHFiFFSHoWt2FiFsjK",
  "key7": "5FpZcQtS8Ti8ufcHRStMoL8ohwnv8WieTG1qbd7JoXwC1VVpJPCNAzGy9kugQUmVnuwsGoUJskUkUhDNPCYYXSyh",
  "key8": "2YM56cs4uLpTNsiebxHCFQhTbDm8aPiA4hfhrZENcPs33nh8QQfL6GF1HgZNTvS8cSQFNjqt1bkk112eDvZYEswx",
  "key9": "5ZTNQvq25UemHQmNPzhB5KCyisX6AKG1KbkTesuRytjozkoCKSDjyTq9CWze8bewJ9EqktmAFPMxvi8aUj347VjM",
  "key10": "2Lr2FePBep7oqBF2rpb3zzyPpNFAbmnA5TEg5VJ9CH9we7XMG9RA98MFsj26YfrFMgXyyUC37obo9aTccHgeSWAL",
  "key11": "4tEuvgErno8dZLpgegntvfzg4Rvh2iK2kQqufRk2DqEUwQy6Ra2XUbuHrBxTaybGRicYzxyzNmwRUZGMS7GttbX7",
  "key12": "4oq37ZdRBZQg8SvKQNSqszxtzmvqJy81HRUWcWZTWrRdBguaAmqsBmDMxv211mmrJFwhEnkdbn4Bpty8LVhWr6o8",
  "key13": "4N5qq5YmckqujCwoKBZ7hWPT4AeSttmWYYyMj7kBHAJgyqEGfmziUTZr8UiFZ8piDvtzbTGK95RJeN4dfXSae5zr",
  "key14": "5zXQpVAMLHdBQ9QGG9CH84UDpnr3oC7gpjbN96KejRVCuerw3HBVfRxYLAfjBggVkRWxeweAbdTvxXjPA4RKKzGq",
  "key15": "curPH1Rr9UfcrU9xopaQsEr5RPv4ePAGs1T9rVvCKpsjvTt34ocoWncvMXLDkc5fGePbFLVDpsooUUtBzuZsd2U",
  "key16": "2g13S8SMTWPvyr2stzaS415CkiLjddquJFKVLXY5YnXUJDByDeQ4omtow7KPK1c44RBHusy1Cm18C8RwJZk9MZqz",
  "key17": "3ea7bdz4Mcg1YJw8wQdSoGbcRA4xzkZsarQmHNgwqcdWMk68Chvj3aR1fRdkyCENnwgaW9LTRDAagk9k2G4tL8j3",
  "key18": "3FFhq1wM8wbNPy5E9EmWaCVpGaL6qDj33SkAsGXyZtdXDyxN3eXTHhs7cAeJX61p3HNLmxoHeX4k5FPKnob4EUuZ",
  "key19": "4jpWZvjpECRUhqpU6XXhArfNuawe8RDHjDsrCjp1wBDtGuNq8pi9LtrYUsnRKvtq7vAAssPZoXkW9p61CT6gouiv",
  "key20": "3YafcuY7BsbkNMjGkGYB8nJzmsBk1kgWpjjepBFzDNvtTfzjnt1AFzy2bbGcMH8zHBxbUtpZD219QHDDHYDS8BpC",
  "key21": "4D2Ub4FbtseWKPu6BdY4HtMAgx7i6BH35F8k6b84B7YZ65J35668GdpKH97ieVwZfMNscjAUUtvR9fAv2jhpqdtE",
  "key22": "Yma8sLFb4WBChf1J4He97vz1h3UV5XoFwA8Na53hYSMJ4gwuFJoBdxHmVvjpNrHduwT5y2kjgr9wXQdeKkpuQnn",
  "key23": "5aGjHsHnvrdDWaLCGP3fnLgLuT86qH6tmBz63PcRHj1xL2koeENtkVpmnf8DSSNXTseXmVErA8yuiF2TwxEFFS64",
  "key24": "2Q2rutCmNBzmHyBfFN4ESwL4hex1QkhakiLCk3Kue8BagLcxJLg4Wbs3BFsq7BxQejih4UyUYmoxN7WunKW6yiZY",
  "key25": "2vGcH4g3DygtRtgkMapBYVgWgGvQhpRaaj6tDAAErtKVDRA6BqQNKKHaYz1D9t2YbSZyTSMZnBV84wZAEDMeg7XP",
  "key26": "63kjsitTLtojmRPbSPLWWkCkq7aBxruuk8XSqcaPDP4QYHGY1k9PCHB3qem3nKJnozo3dBdzMnY3air1C1WBi67b",
  "key27": "5HGqverz8WtKg29hWzuRu8UBrXo8LXZ1wYceYmri4CM4cKATo5GFKGqgJUgodMwtT9Nr5rDBTMZeYo9HNA6UUtLC",
  "key28": "3ZvCThospQdcbHpNZdA43a5NmtJr5ag2AxftvCf46MBMEvzbd6w99E712jiDJbk2sdFwbDcx46vXJXJYWwGCKUTQ",
  "key29": "5ejZEkmyYdZ5qKgPAkyJYXTri96LSMq5cu6NSFckLL3XavtipxZjqm79V4R7LmwHygcY1Qv9JNgJjFqESk1ARCqb"
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
