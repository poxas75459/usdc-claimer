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
    "2tFRFvW237Co8Te2fyh4Xh9U1sjBZrS1BMAbLtYRv9ZGdQ9ZWTFtPceMnbtByM1uNuZn2jiqkcnNrJ4o9fBcuURy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6kztrefJZxr8wSPTZy7nUVP9ZXL7d6cxUZYJeYykgz1RhV6YqLMaShuGfBRt3ZxgZVW9Ni1TReyfNpAu7eAuaz",
  "key1": "3CjTED7XWS4z5BE4zumKDHTmQsmphnuAyQfCUygPYWaMzS5468zbhTc7tXxhz9PKcEXfEHyNA3occ9qR2vvwRKYV",
  "key2": "4WLGMdJW63CnSMukpaRVoKaRWLo5H2F2fkBK4JrJsHaxLvDXgkcoKABixYAvm35HajYMgJuTvLDqwMVWrehuuaHY",
  "key3": "45ovujqqTtX95H67z6ao6X6gtYekYa8izJXa7N5aVdmSU2XgvSAF6AnEJM76JidzpwLBwxVErdLDXrNK1RAEoAdH",
  "key4": "mpsqDxnv964T9vGiA933EKdzpPemMmLzdMTTNQbAdzXM38mNFpun92sxTw6s953bQbrEGowXRUEEJnnvptwgNuc",
  "key5": "qbJje7WNDdS4MGkhcYwd1xD7b9v3jseT9gJGYavA2TTxjEstMjfhXQgJuT2MMUgvMyyquJCEdJrcKhxgb9x4u5d",
  "key6": "2PFAPSGa68bBPR1CSVigBnA2AvvcLd7KGpVppzZauwPz4jrqcY6j37zf5RjNzNuYXWb9jzMwrmgrPqxSfYPZbgxN",
  "key7": "8PpwopDPeT3UjKNdk8iiCiDJZuLJ8cbNorUVn3BJhdjx5PusosxSUeHKV2aAhYxedEkrEMVtwABqc1gztrCV8QK",
  "key8": "4B8icp9eUeZY5sDdkD5tb2VbR6vgzTxEmjyp2RuUKTFA5K24sXX7Bppb6UknPkeMedLJwBGK7jTG2E6AMaEGWRyC",
  "key9": "2tYvU2WHrpYtJUbM4sSkW21zstSP2chja9J2us594v4LSGagzsoPqahK9uUAiPZYyJydyPLerjYVfkyQyVvbarca",
  "key10": "23FLUqxyFZRgipEgWUJ8CqRfcy73jxdVzF92HDMJbb43iY5KnpHE9GkqvS3roCQteGAt9L5KFvQb6tNAVWExywaB",
  "key11": "HN8xY4LqqW56MZMR5MzbBYHJ5KYvBgwLWdnxgVFQnAdDUMFbUMw1ZMk38hV3yJZUcJkszRUbJcBttzWSPY1NgZV",
  "key12": "ZWaPtcBNuEBPpXhnb4EqMNZdi62QM14Gagqcioef4uqmLi4kSXC6TUqZzwvJ6otFiPci1BQZVB9Rrg9UfxK14tx",
  "key13": "5xFfqrBSiCEUejj86qKBai8uWBPQAWHJWmX5AXt3uLtz5F4CLNCYjVujkzQfJG6GFZMCTsY6gXmj3c4oEr7GESks",
  "key14": "XusvwZYwSefaGniBMGCY2bmimzLwwGyvyCdkzcieP2uvVVin6frRjqRER5EyTqmboGfELwFDqM5XSSNvpn3wUpB",
  "key15": "5KDZVcvdbFPbjsiJZSaMLad98VL4NGVp1SwdDhziKi3wntFNtYcw84YXjZbgGfDs2yUtuqhyAaobVWv8kKkJyFxg",
  "key16": "4y8x31rSLiPKYM7vAuEdujqAKzXmEwnop5Q5bF6ev1CUkPNKSCqh1ZmM1RgaygXeyzBcwkF1yyke8Bq4h7cmbsCK",
  "key17": "3TiNoe6J3HHogycATPuYMF7W1abmdou59r7aPfhcHm5SmiDe8R1oZj6wJup9EJzTmrCf5hC73P7b4tyKCtAbvTtK",
  "key18": "5VehtKLDZ7HLxSvfPzXm9NNja6vicJeAfpSLKv7afJrpto8bgDPfSnmbDHhG1rGqiZ9vs7TCEWBY7aPb94CW85jU",
  "key19": "65wg8AJKE47pDWVFQFu7JigJCU8WPb6WyqimSWaFk5Rdey6ry3rbg5jnp67aEk4YPQr4rd2sjDMe9qV8Tj1Zpipa",
  "key20": "4jKhztrLoUqaQEZfNQgDK8rSZkNU1ZX3G55iTHiKmxAAwk3w9xfvx36vT6WM2dsegVC67aGNr33TRJFgbE35bYQQ",
  "key21": "3jj9LL6M77dxisKfcSme21DNEZWFgAc2fN9UeXN3pnvdaaQJtwLc8mg1CJK3PHargniUCvo4fume1wr86v12AKEf",
  "key22": "2J5GhqKDorwVdhcpWkEWfBHEqDcsmwFc9rSZkLutRRQCjpvzRLQtpT5YWZZjiaszwCw84wtNmwKiyr1YyAj9wFeh",
  "key23": "3qQhCwe2PhvGBDyD4tRNsdUmbyN13mwxXuZRT8p8W1Uw1CdQFcqebyrFCWt12g9GAyuT73qH4XxEaVLh7G3q2Jn3",
  "key24": "3niRfQvYtm6k4KMoMQP6MRpK8ak3Ah6d43TCqNhm6aY5iLc9xPC27AHPgE5ZwDa34LjDJzFhGZgfSGXHGS2uo5cQ",
  "key25": "3b8fjXsRK5qFXRcFjUBynTS5ZMZ8e8ipVbYYBGUXgijL7yWuPX5zXpe5f9Euc9jHCnE3bv2hGXQL4Td35GarBCBF",
  "key26": "Zirdh39TEL53xbuCTAsPRsncpNLadPJzDMpnNkaZog6m9LKTyzC85rTf9W7NHA9THK99w3aPMwnbewUUJGi5tVN",
  "key27": "4wedskeyZkD1JXjv7Y46HfbVQiezkiPVTiGeNMb3ZEEmXKxWAvJ7NJx7P2rkp1KU4wfgPcU7fVoug7XdMKZJT9zt",
  "key28": "5b91ZZDZRxoj2hdzeXmfsJvetGTMTMBjWEUSSSQ6SDKpXBztFRDQav65geZeQGFCVoxkb9a8XcBBKeui6eYR9Cwn",
  "key29": "66Ma7jUy4kDpfxsWsDr6tct64WrkdwiNv19f85EKp7MANGqjSirCaeS6uyRRaNaK22y7HvwvWh3xb7JztNse1So3",
  "key30": "58yR5C5A9CgMW69kDbi6gZkkB3rVK4VJR1v2mr2qhvtkGvQHGfN4f2fKNbhbCQvAwgcFsJP23dBinmio9yeXRS88",
  "key31": "3D1xs4idU4kFrwdBpgsocudgSPxoQT43ib8BeYunt4Xpz86Jpz7utsjTL3hgsyqmdofrMxndj2Sx5jLwJ1qTWn7K",
  "key32": "5Nb8W3PgHAwyrFANjiaAr3YABN55zgZ9drjdArMPoSjiW8Qrz4TCmZ17A6z2WAHwir7jNYse6aFwEPH8Qah3eTPt",
  "key33": "573mTFhNYbnDkMeQoTqqifJEmo5xcconzWvSWi8C3FmUZm2houvP7ncdgb4dF9uu9xDnSQUitFC6iPTVBGiyG5tw",
  "key34": "5jGDaGSSqXyxTh2Mkza1sX1391iEXP2Xa2A7faWr3xQBfVqUKCu9Eo4HBniBFvZuZdL4gi24CCDPYEHByCs8cc2U",
  "key35": "SsnrVP45NtYTTixBc1Rs9FCiZQ6N4prcR1kqtEHnHs92d2FqVU5TDfWucQ2WGkxG8pL7v6UgQZ8aa8dEqfME5g3",
  "key36": "4DXvdhdQvhdWNqZ3LBdbPUeAp7JoujAzFXK59madM1nKkVLUeGccYbfSPQWNpCkyVpkHmJ9iXwKekhyWJcrMfbty",
  "key37": "36nA4PKx85GGDuHGbcEWZc2LED4SRpWKKN1uu9xveJzZnZQLAjV49Lp98FLri2Z8cR31XMf2MfZZLRyFPgRCc9Xf",
  "key38": "3T4ug34mB8Qdb9LuNfYa94d2LLFATDkfd2f2zdJQtqimrxDvHU8RpPc2tfA46qxjUU8VyZWtAP1mc4HAGU7dhcEf",
  "key39": "4upCjba7suGfTRtDmx13zp9v5rJsF6sPyqXFt9QQb2YxPEpVvrzECTnCiCZvdFhpfzQSSSmbfVxSSQHmKJ536y7d",
  "key40": "TesYUeX9d99GahyyP9qX3P5oJfUNrznXBWcE6cmy1nQNBiY5PL2mEG7pjVsqJkFDfRXNoju3SwZUZoFnMjNBP1X",
  "key41": "3an2dbissuCAoMBAXLAG2C3mr6ewZJExM6FfrqFborarVLQFs5iMEnNM1SiYehzkvMnr8jtR515pwVqY3JauDehz",
  "key42": "PAwa3Lo6hCd7meriDnq31jdsawpejrDaqCgcxJCMCQam6GvDqkJNEy8u1sZTyceCaBGvwQnNAM6WTA8ZxuW9xsg",
  "key43": "41LnS547f2vMhWxyFArsF5EXxp1gKuw5rdtoAbVdcSN3rysS9zHPBuiLD7KrrDxBTkEJr7EbPuwLthY79D5n1zFB",
  "key44": "2N5vi8tSoVhwzLut9dkjDgrPZxV1eeTLcGjoJCV67nrjb1z1QvazFsqydxzsQeaFZQknj4mXUJQ7ieSe7gdE4u3i",
  "key45": "3MK3kcN9YfdfMtLziABvUjhoxaZkhUu1xFKeRUrQJ9Lbzx2M8tp7iWJnHNJwB6bYbuSTaLX1M97ynLRsmtwsNxYA",
  "key46": "4XJ4LzRwj3NNdGuZofNnrYFh24eRbRjfJpkALcY24qJ1Ab6V8V6DiAyH4SrBDM9HmgvAHE52f2t9F7jmnDaaKzVr"
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
