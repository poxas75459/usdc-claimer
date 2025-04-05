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
    "2V1p5mr3UVyrfAyrX48taaRVr1PZ7iSEvtwKKrk8Xur8frV21BKtnwabFJ9vP2PTD4QSEeBCBhooQAtRe1pobS5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGjc7wPofQHgqVku2Hw1C9KbZULSNkQA7NWFs7pGyH5bKpKXWwZQUQGRFBoNwTXgUqHA8hioTeEViM1Yaa51yaS",
  "key1": "5hCXT8VUZdhT9pYuf2VH1vmbjpFSvAKF5WSzc8tAp6ZsFVSEtmWdt7MSDA49uxJ1GS7h9WY7hbHaAw7fPiatXtYN",
  "key2": "3KLRCeFzrodn9pNCF8DVAoHnt8KWzVx3frknuwSBnfvVW4tW3iTbP1PDNobuSRCijkKG7riLJazpS6yEk1jnL2ae",
  "key3": "4Z8hCLyV7Ay3xEL6LJxfEZ5nDbga34fy364i38thXFgRe2K9F7Wj3T39JgC8orE7KQoSN6TNB3JZqYbTsrLidpEA",
  "key4": "416vFaxz16ohAG1EsxAMXDLak5jajcHRkiiMSJEhECCX2bAmtxqnUmm4fKjxEDCuJwzczoP5zrDeHZYZKwLWczzt",
  "key5": "UhZhfZZToKG1pojM1YhrRna1WpZBWwvtvBCRXcBFnHk9t75zBSpcFjLWr1w3KEyRa5Mh8cCd3s8LGmaZXKbknCN",
  "key6": "4HpMsPTfvnwoVAMbfTyBXgvGceiYFy4fgZ4idkzEfPYokQ1RssELA13oi6H8JJdHKA5hJGLCQQeXuE83c16h81PH",
  "key7": "5kev8mxg6t6t8arkWzTUD3sx1XRVk2dVBP4y5DnbpKtrqt9E2rp8pzLztk3fsToFXb5zFkokG71ezdmWrbjVYBw3",
  "key8": "4dz6GAA9sGTKenjHsqFWExVLv1rNPEV2jxWVdmESW97oCKUhLpZKxiBYYXAPFCsPC8RLcTrXmi4wsSagh5HGqnxs",
  "key9": "eFavDQmTBvM5x9NNz53rZJwRR5smDq7GxqAcY4YeSUX8hWqEhwsyWJ5YYr27pXJEoLz1TeNmvNxqhynANNFyD7u",
  "key10": "T9whERudc3zpLNQY9ixa7GMVtT9oqUHdNwcjpZyCXsX7UFvTsYnMbL6GxX9NtgmMoH2fofb9ZyTXJwAsitq6yvz",
  "key11": "4FDKHvVv4YV6Ep4SriwBsnpdmajuZK9kEzyofLeHREy4DMW2VRtEi8svfbZfHtrT85MT433ea13P6xViBHb5B55J",
  "key12": "4trNkA8i9rWS5ckj9o5ZXq2jRnoTeE99NitzVU8n78EUAgyZKAWkcWUJ4WaBiDZwg7DSd1uafdwkX8dvi7zpSBQ5",
  "key13": "5tk4MTRxUTLuqtNQwMPLGANoWMUss3WKLVESXa4eWKUJY52CTzmgPVRgPJ3YWXkGg657cvoYpk7b325bbx3EyfF3",
  "key14": "5yjxxf6MZ4868DA74YzU2izqHEkp6sCyZUsp1ws1ND2tGg4W9zKATTdWTZZfETo8tCnVqHdxEHZrfMjK5D8qNHKT",
  "key15": "35vq3HDK15jwPF55h17Dyj53cFr3hg5bLJXTLtDLTnTWawWvYeiuPMdpkQaknArbRvfwGSxvdmeon1Qy37emc5eb",
  "key16": "2yux8TyMq4qoG1joFhYHYwKfQBQdoiRSf6JW2pY15CLYWiQgqGhRARG4rX648TahQMSKt4Vx7mPGW3oF1RsAANBa",
  "key17": "3NJEPyyWhmky8WKhJKAggTEVy9STNq5eVeNoQoyCN3bsbFAGhkk4GfbJ8cpwidziRKMTx9XiK2CiDdZ4rFkpiJP1",
  "key18": "4Mt4yQiK5v1p2ummHgh5QB23Y5A8Sg8SiYqrNAY3FEsZTtvgPnf8vd8LpFq7SnhzjT7AaddhoeBzjJ8LVE76d99F",
  "key19": "42SFyyqzDPdWLDrGkMHwDJk2yiyeaGwcSeZErdvUHFj4rrRkGsVU2MUGwdhAt2mMQiaGWEsoq7ZcwDsiqfyS6ffF",
  "key20": "2B17nh3RW9fofEv2gKT8ierwqihqREfGh8egLywBsCyiC2E2WWLHWzgmxVLL3HKozULB2YrTtqy8ZLeiQpwMoxkD",
  "key21": "dspZu88dyh298Kxd6y4iisdVz3kAp9qCZFzf791WrmNe93oAByhJ29VqkDcAtet5Ddb6sHUavQYEFL2aQJSYLxk",
  "key22": "4fimNH3DGcbwvddKfRUD7MKuokK7Hym7yuk2uMHM7nq9Xr9a9iVMgPasi2we8TdjdoHnFSTsLbx59VdMkhRWaXHj",
  "key23": "4gQGWWcsPTv3ijm7GxARQk5z5LHmCB1vy1ZagDxPev7KeCXLWAHQUFEETmdTHi79B7xQ8urKhSVWrp8BnPcnea5A",
  "key24": "3gdNDQUEHNuiZKTUFq7iuQqXJy9yxJKnokMi2bmWQXhVPcUwWx7AGrB4imYaBqbN19rVdJz21MirG5dxBn2Q7177",
  "key25": "xrvEBgg8GVCGdRKEkjCR1pzp3bHAeWKxdQC5HdxciiXtkPcHTxvjhcWB9qUJXXzahFsbBPjbXHGna4YfHgMvmRP",
  "key26": "37GHGRT8W6zBxPMxK4mRiv7dNoYi6Ju2zZz1sng28hRY24vUo34yJQCdVMGPCQZWeMei8JvarRF13SwZvwXmARm6",
  "key27": "bzSsiQk1A3YurbkZsuh9Vy37Qx1dx6XpByc33oJ3bzZWFvAp8rAGtaRerf7USqL1Rgs5CK6qS1vTfg76fwzyP8v",
  "key28": "H7BbKfRCKyRzybsjRdTbzCwkp28eX3Cna7kWGjv5R88TgcH3382UHgxnHGeZTtfnqGgsbiSEJnYV3Kd1uxsmkjq",
  "key29": "3n2PUtKSHFrTx2Pc1cBApaB3RGyz2fdJrwHEGZs1opNjDYjhT5QWBejCNFg7MJPrds2CfPbzUW7Tt4F2AcfvkvNE",
  "key30": "43Ce9juXt6QzTT8nUS2YtkSEVcU6CT5ZQfpjGjyPadZfvAnXHYsJrf9e8Yqweiq3Mnq3r2yfkwuMYwnuNXERkoFK",
  "key31": "595ssdAxGxC5aorMrZbkzUnqFmRiwwi69D2ApscqcqdcwefwtsQhscgtB39qu2KAXDFjANMCe2kqNCSGJEFQ81XB",
  "key32": "76rQPGbMqVw1iCipK2AqE3T6EmmzGpg4LKjdGqswq3p9fz7uuA7YkVtVQYvXxeVMs9eEiRW3NoVrcsfzRyuzJeu",
  "key33": "FsYgnfCevXFaxbQstTgzXrvQPuUtU1e8c52BQZYFTUNiwHzSWm2QZcyYjpk5MwcZpZ2N2GrG5xd9SR2qYHox7tR",
  "key34": "2fGEeoFWexa1CRGzk6vtyJzyHQfsKaznwfv2n1Vgg1A4WL1rDRgBdGdAEBfUGGHaxD37hPne8kKKTUpptQV1v23r",
  "key35": "48TFBhbzMKtNfws4k9Y22qV7ocgspghYdC4xzxCg52QT2YnTf9cR8rLquFF3FSfhmgFZ7jg3RkfrKc1k5Vf2Q438"
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
