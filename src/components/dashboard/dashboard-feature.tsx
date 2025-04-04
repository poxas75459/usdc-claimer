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
    "2t9ofyLNeZAPNaPdttcPDeTSQGLg9HEyrsc77W8SwMqrNCUHcR44gDs7ey8r7iRVNRct3P2xUbq2dtw1oxhZP6Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C5Hm77VC2E3mAicKM3ndU2ucsrGiFBaZmJpg1wh6Q5tryGijjh4t9tPYeHn5GvJMd72yxXXdaeh1BUHSkc9Tdzw",
  "key1": "5svLCNPf76tgtJHMTLTczuJhqn7sR9TyKzaNuebCw2YVtswa6EvMLBWTgMvryjEs6Gxec3VzJYYjnJBh4TXGcX6j",
  "key2": "59XQCZhRhBPGgjwBnn2khx6Y5kNzGuBQq8gwdimdcqtnnHmrz73KDeN7CoB4s6zt1RmcFXMHwPH5djhAFXDyZjad",
  "key3": "AeTxMduvzqZRaX6rjo5ucJMtztLdsKpjAeEbD34FAEY8coxPbVKZsTKfMtuLqCGEmuxEtt3NLxytG1Htgx52yGH",
  "key4": "G4nfKbkDsSwS8tR3Q4H4YKMB2XHZS63LhutkW6fwMnixAsxzMW6NW7F8xUnm4nkCdT1o37iLb7SdjbeEHDy8EuM",
  "key5": "b4bbL2aJceLMjRaKJdRJouVJ44sHfAieVLa1n1dWGZHbPS4h1ii8WtuMf5Mn72twXkoRcGF4HJByVa32hZKWerT",
  "key6": "62HmrnjtzRyQDqSnuWKkjaxV4kqHQNpQ14uWDgFktXxYJpzdLq9Hjh3ZLbP3xW1EE7L5LZinYXzUNXZ4HNCiZEQ9",
  "key7": "cnxANSpLN3GR2y51kuryS7BfezbjNKggtGS8es7N5hMqMVHrpPSrhZF28qPzKMYvfyacuAjXjpikgzYX543JEYF",
  "key8": "3oZeXCjEqgPkEboEKhYaADAqpic6MMfY3j2Mf7vH1vRxPSnckpBbMcbQNvHLJuNTo6ZKkaBG6xwKkT6GcL7XhNLo",
  "key9": "5jNUyr5J1SSioUm2KfXWUU9wFotFGmdysroAf4bJS6Rvtaj3WiFQ1QTEemAapV1LAuhamdHiGyrf1WBNUpKAi89c",
  "key10": "4JanFEPPyCjxdKqiMkDUenwxHBqczU6CBbaBKdos8Bk55YLy3uwYvDCoJTS2yAsY5KCi4MmiTNVcLjNWD4iPX1HF",
  "key11": "44XgQDSnJTk2iYbV3dEkHsDWHPxhQxfE1uXLqQzs5h16YoXFfuZJKW2euVT5yAG4v5ocC3PZwZhUdSKfD7qixYf4",
  "key12": "3dgAjmwQU5uk6j712MB5asM15VAy3pEYMTrJczQFqsYrBQ1VYHmu2bZMefbwjkgfR44BFHDeKVMHuQ7dm6kDmiK2",
  "key13": "56EyMFmAsVfsGb8EbKs2gBTpLgE2TUxaghKos2GVszrd3mHsQUJ3aDv5fkMZ1EzWpUQmobRQ44WL2xF7cNoTt6ni",
  "key14": "2ShKUAtpZiBioptEVJUPRmcymQELji2JL4R3MZCdyV3E2iwcSb2rLKhPo9eSZMFgpKWdsmYcVtUM44jHDLCfMPK9",
  "key15": "2dxkKtN8GLubVRGrCHQtawT9zSywvFkjffZ81AiB4CFuE6D6FKTQSf6rzncbziUChHUorLuk1HPdkMh1Hqb6LPbA",
  "key16": "3D8yFWJLdKpEhq6BfhyrWN9VM9rct9iQuUZiq3szCGk4pgQgwr2oSCavaHgv6q1yyQMeiu31jg2rS13m4uemsorU",
  "key17": "65T1Euew5p4SptcdvVkqZ5pCBB2V2k494sg4pQMiiLaw2AifoEJq57c5sUGFSGxZu4FzMUT1SibVxgBbhbNigw3K",
  "key18": "64SUd8YrKvngK3nArNRNzfj79uaPw9sfdcpXxHnAbnDhXcAVHP5k4277jjv2T1ofHVkxfoeQfrtNUGJyHiEWz2Xr",
  "key19": "3oThMFEnD2ZFM9GBqtdCPh3Xzhkp8GuqNhz4pu4xbCuhKFw1uVAgeUdxdTTKGA7Wgwf6S1hYMCqwTUGZXnZBak2h",
  "key20": "271Twn7uEuF1Yy6MFZUKupn9LaLR5YhMjQJ4BJWaYah7mhLSZFtgviTvc4pQ5uTXccKaf4mc1L4KdcVfaRaw8VJU",
  "key21": "3tc2UVXNxxjbrwN8X8F5guBGvot4aXWUF6kPT6LnNrmk7XZH1F3LkacFGVyK52FigCMXEn7BXVfaknhi5JtNkYcP",
  "key22": "tVpg6Fe2pFT6fKmfnLzXJapJJcfWRAgYiPCRpNctaW4PcSZGWHyctQhwKYMeT4WCbKgmqeeuPESYSEUXSRJzA1C",
  "key23": "3EEtHctqfdZLpXEYzeNSaag7P7qBpR7VKo5DA3UueHsSksNAsncKdo62FkVNZCWDtXPvy7SKNf86nTm4GN3vwrnF",
  "key24": "2uDxkg5C3PaU65PkxHp1E5ZDwiXgoQog9WvVXKkRhV3fkboq4XWKVMvBrPqR5UArRbCNW5dm5k8gZymprBFdUqM9",
  "key25": "SBh4bzUDaeMRBn86Emb1MUqJLanVEMBMJNkmoc7ZgXT1yCgafrPUNhB8jbbqwuf391ABZ8r1TXpG8iTiCRKSc8G",
  "key26": "331agudLq3zNyVaEzDqJLov3pdCioaXYXoiRGBfURxX5RNzESZanTWvZ7SfDyFvQbSzFMGHMKQEGAGaySaBS1CTj",
  "key27": "3Tz3XcyQHTEoZYKritKGxsdssjb75mj1deVMaWNkSUpc6k6y98T4t6g2r3yqS9ZFyh4CRZQHr5Lwa6CXcTDWqRku",
  "key28": "56y3gVZt3rrNUzfJRcnVxPAviTsBxJuCA3ceQab1G3T9AH2aHrKX7daosTNqWBifSLV1EHD7nV9BnyMgAuF8Een7",
  "key29": "2WCk77YMJBYCEiXMUvybXEgB5FWL9HutaaB1uMfQpp4nnZh7nq63qCBnqobRE46qPDHHAhbjUFc22RSQ1XCZmodk",
  "key30": "5CeA3KMewsDcnthM8eYvTovP9byvh3HeAoYExV4RBnUjwwnH9vEyxL8X8acWVfY3afYYEoPiDvNi2tJB2q8HzFj6",
  "key31": "4JhuNBjFjGY3YcvzrM5jRRDvVbU23TVGNQdkutaerCYgFmPJ6WUhr5KdpjrmtGcFt9qkgUG6DmeC4EyA5j55ttVp",
  "key32": "4cVwwZRt9tiBA4yZdzzoBAWgATveGxvZcjGGuyKtetrhY3RXkdqc74xAP6PaXECXGgcBB9PTG4jG4sSvxnVEfS66",
  "key33": "3NZJiXipNsS2UgFGZMwjVdY2bjLJzWHV8FQ2FLW39mZzPUC11yXwLYbGzg2JiSKHd1ac8GG99gz1eaQfvpDhbn3J",
  "key34": "3xyMZs6WS6zYxCNTZdN6vQDaivU1nrd8NMnkhs1PTsEnHzqH541hSt2BT9HodowPgZ4a3zAN3HhTqcgKfbRfUnjv"
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
