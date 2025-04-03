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
    "4AfjxUbdDEiyezq4jsq5iMbh4rwRs66yV2oeeFBWnhhGb5bcmk62kqBvsduv4JuUEMPtD1mbBdhxxUfpaNjiQGsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HXBfXsCCEGBni3yfmhvpB8o1TC8JLfQ68pQRkhgL3ucTrr1cJZicEBbyKGPkywLZg1ZCtuVznYBz6pD4p3PBb9A",
  "key1": "Ug64hb6pVzTfkt2rKK4ttoEmQpM5mw6W6YH3wJRbHTfbD8m6F26FeaGbEoEbtMF1LQjzb2KtEVVcJMhMWqAUnDf",
  "key2": "5hmjud4EDxqK6mTBycrCskAYodmWk2v4eT8VysWtXarhjM95mPiBbMBrRhpaj47PwCHESvM9XVkSM5FDDVWQvXVz",
  "key3": "VV4aqJL1vwCaYsn8ZPQsMjDCLR7kpxmoRhS1SCTVPu5zHtPmHtwWaM642ShBiRVQVKSxSvx3gSx3TTMmjMvMWoi",
  "key4": "2Xdne4Qm3H6JCJGD62LEsn6FeyrmBmBfKor18sPkm6AUifSx5tKvHHnNYUN44Kom1XeARruq8P9jXySFMcCQmDNj",
  "key5": "45HDRY4zm6XAA4GCRSEcEG6q4KB7Emh3yJ6aaUhLsH4GBYVueqLbtRCd3hogqoJNS9uHa51uPhPGrFWMgpSwmh12",
  "key6": "JKFneAhm8tgTJPp6mBwePbCCarx1iCCsaiqM6SZKFrypWcFwjXYZGthcpB49kGK4Ah56Hn5DEkGhyCu9i9zjcMG",
  "key7": "2Uwhjf6GyL2ZV4TCKbQaXU3UfzCkaWaFLxwkr8vSzDyYpf4h71wQnwkNHTH3woSqFcKWcqbMzceGuZ7j2SmSRXgF",
  "key8": "2dHQLQLweE7sW1Q8e9rUvuDBmdsfPrWaqVV2ai6chwA3B9ZimkbaDr75EZkU5F1Uh28gKRxwgsgsTbqjjRDf3bNe",
  "key9": "2teFZLHav9UxCRvCtqdgG8DeChSSQ8qbYwT32FFw8pQQ9VUcNvsuZDaT1BiHU8F12HCkLAaG2spW1p6gXL2xTiQm",
  "key10": "2dso1VNERy1kJCNeCdRcSpW6NV7R5bgF8vyU2FGgTE3M9Pc6ZbzEKoBbVnT1fcW1248p72iCwmhT8yi1iMC9w5Xd",
  "key11": "67YxzjzYqtqJZizDrQD61n2JuuHPZvbFcz4Jzy2AqPQdW2GCdkth7rBzJbtY71ZtCKofcX2ezADFa1Xj5RB4b1m4",
  "key12": "KvXbpLusfn4F4FYkMdG8HafwLwniHf4ryfuEZf1tPkGf76uaSiwL9v8BKTgCzZCQzYEvKRRk1PQg1mzRgJqpjBa",
  "key13": "65cBh9tRFuboBU9FfSNedXS1Qm8xGkYKp6eXSMyaBJh5oR84XkaUKhqxvqGnLRjZLByMmHUzRMRaEoB5PtEWEZsg",
  "key14": "4rs8jBUgVq6apcqc54iYPtfNKbvZTqR2wUFWbDqSwjYFNRc1GhC51XkJLbErN6BdA9L2ATjAX4W2epHT6uxjriPD",
  "key15": "3C99Sss72h8oTWB4nP9PCz5X6ZuipfyB8JKLabNzuicff84YQCuiyB5Cmd85gMxnAyJ3ipQfVpheJ8bntb13rYPn",
  "key16": "2stEaFWUHztSL8uyX2N6ZkSmSweoS7fXWFquW2ye4g87a1gcQbSyuzZsqUU3DRjHdCPGDny7pYeSkBZ21F6bQhwb",
  "key17": "57hTApgaioLqvaznJFNTdv97mcRWyuETcjGbVxQdmdpLhLbWS1BDu1ToLGDsGjxq2Xa8qX18ETJS3NoMJ92JJoo6",
  "key18": "4jruYf4DbdNg8681yvhtrmj6ruZx75or336xwZf1WnqnvbX4HmsVExm7p7WjEkvxWQR5kinvAuqaNZPVkaDtRVoj",
  "key19": "4xMgMpKZdBjGU5NAbDYEte9bcnScApt7cKQzfrpcGou1hbEeP96MefoqL929Ltyd6nvbTAQ7ve6Bv3MWXgD1VsdZ",
  "key20": "5G25DhFmtGSdTCLEg6qnVJtqHQbxyUzJArAczfK2ZvbRLNjZZvysMNvrPoP1NeRT8Exm8qt1ZdtxHH3uwsEwRU5W",
  "key21": "5hm2VdX6hL1HSDZ6f7kaYcxVM6iC9KUeXUtbg2Lna793W4Ga42sML15StcbxUtWkSKdFrARaqFawiyzm6FMSMdT7",
  "key22": "7tg9MELu9Ru9j6y9fAB3WgqfHAmoiWPNRbAoyUy1dSF7u4B4Kizk7ox6SHXPEBLkWLUuNJEaJbaeBWPvLdKCUNB",
  "key23": "5ykMd3AtYt1tTC5Fzz8SEJSs8fA2gUb4NXyycQPVBZDis5iQv6vRs5NZ2B5trkPqLSutYSegkrN3TDMc2Te1q85S",
  "key24": "5vu9sHY43aiv86fZZugfoQSUonXdxPE2A6tcE3wmzF4MQDquJKs6kjF4ShP8avkAdFx7WsSEo1cyS5RmEhxmsb1o",
  "key25": "2LFTFoJmYQaxfGiDD7RLxkgzPZthDSYRxKeY6rVcEzehR2V5RXabRufvXtyAj3wNwThJrRmveWjXt3WuruaTY3js",
  "key26": "3LtfQDU1YVr23SEJP5HZcL5gKSgbcMj6PGurbcFreoxR85prg5RBRyq3CdErxsnFeY225byFiBNgGWaSKqk4Wtag",
  "key27": "2YSi52ywsvMqQj25PKTobceunCs4rZJajoBBb3bikY4JHmNi2jJBbjcyUhKrbSpxhHTRDwR6scM8gNgCUkJAYPYQ",
  "key28": "271SyREfXrSyUqBxLanniNEKnKWac5rYgq4BUXZR1xF6V6SWS5ejZxEy3VVzJUvRas6zF1P12HppirDKQeqpE3Mp",
  "key29": "5C2pkfWu1Bht5Y5rSyUZd3WsgGw2ctQqfb7qZmfmtoqC48ucQdoW3SDeZTTBZC8ZmmdGDZymNwznhCYaEPiAMfre",
  "key30": "4Gg1T7PJ3R55qp9dxHMKqHDKQidajajRRYmdKJNr5jGR5NZyiqSQ5hFEc8ejTAiFkCPNrxYZDdS6kEF8pyr9fRjq",
  "key31": "4KUqy34uxxC2j6TWH9EYZNRMPt3gt9WWkRNrNHQVWg5W6FRoL1Ngq1NMZ35M51ouKHCLxzRbve9yRdjBc1Qir9x3",
  "key32": "26o1SmfD2WBfEVndawWizfghzBC8DobQQVPpVdGeB9Twu6a5P3N5yAEtwQoaTmcFm58uw2U7mPmV83gtuy5Ti68A",
  "key33": "3KPjMdERcNiB8qzwaV9FKpVQXcDLzZ1xsEkhBneA3YYBufG5DAqayTbTZsLn1gvJ6S3YFeG6bawHCiyGeYaewiio",
  "key34": "5N5zPYL6TEKt3LwAsLNpCRzAnkg2T5fAeHofifwmT9YneKMuBikhNeMtZDUoDJyJ6fdxwKcTY5mwvdjKZbHXUJsm",
  "key35": "5VuqM1bZXfLCHSfPb9iXZvaqM9eh8AQafFxco4TXrD9JvpqdjFJ5hFFfududjx3DUwCdvmX1DGW5Ma5iL79Q71yH",
  "key36": "4NY3XPicbwZ29BV77jxSsT7kiDkK74CYHfkUGLRWZSJ4Tj3Z56vJuNFy2oUAD2tHTzQnkpR5CZR8YhnVLHe1HThH"
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
