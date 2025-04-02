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
    "21hSC9LRN3aJUAxxQ46wSx4EsoxpMvpMr8VMYbLGKiKpgHqU9rSdScrd3hxq4AbRr3q8uT7NqiLxiGWaj5Ldvygd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tg2bk26Wrm8oPbV6NCCVLb3BL7vmTuPvtboz2keocRRviRG8irHas5xYbdHMfcoUXvd1SxAr2j58454UfZtZ524",
  "key1": "2K6B6atmFqfouU91FYrJHPeWWuKr3pEHJ8KfkFL3pxdB6LwNPSqJieBqW8sCYnnj9zmp4buBxHNS39HSKJoW3crp",
  "key2": "2ay4owRH732ZTLtNCiMy6yfXmbg9oKQnWapbB9UkquWMfUu9kYRksgXGyZHzYoG2KFjUFWXhT3Ydyr22WpbWwfbs",
  "key3": "JzNzWgJ52xE989RWwo12qtdNqKcoAx2cGfFJhKZP98VDStf8Vn8TqvngdNAy1pxS2QtBM7su6Abw5TdPo5hiQgD",
  "key4": "352MSJqGxebLHYGR6xs1ZigvErZW43cLwCvdttAVQK9Qk4Wq4pL7BHJe3gMBD7sboAt4JrXgnKptyCLjrQoGxy3H",
  "key5": "qce1ZkBcRvVVTFxzKeHJYAgf1VM3x3dvQ6XEYNFkEbUBN3AFbxmvZe8sH1WTPBhPekvcoLyXQGP8AspqrgJBjwa",
  "key6": "i3c15x5q5C5XaZDfgRZeQDeN2YQJ8Ev4vMPoPFpmaoBkQPBDN8aNq5fmreern7mK1vMpUZpNmsG3kKgsJMaa8Lt",
  "key7": "5WMNGnCSkJ8E2UQUur3jogrd22ibPHrAoDBth9UpYrxCTBD5H56rPJkoZfePFy9NKjrBY6gpVGi5cGrqtdNYCZnj",
  "key8": "4V1BPogSwfAn2Hg95vMyB2LrjQD9rBkHwYKb7ieQcQogpWf3A9mQ5m7hDbZXHfHVsFTzHVEqmM7zVNQ1cKPF1bkS",
  "key9": "HCxmxGt2LDfKvBBmCavLJWCC7Ja5RvHJ7qHD1bHeGwyfEsZdLCHQh58a1A66H613Q1EDVFAZrWcprX54jD3VxeZ",
  "key10": "L5rHnUCGVejhXRzbyFGCnyhZ5xo9jDmuKcfK3zChgUqfMGspwXsduHhZLa2mPaEx3a1geqBwwzexG5W7CXNNTcL",
  "key11": "27RNQuqJpb3dGtAXmXtx4K6EB4Ef8Y6XJho6VeKno7pSwky6P1pZWWjYGYjFFvMTxrt66WA8fKY2T6ABNQPg56bs",
  "key12": "54zkbMLuvEbPxN8VFvq5LgiVn1b9oEL1gd9WSntpweHgEk5AjsBno8GKuCQkC9K44ckZbfZfmbLSEmr4j6WH17Hy",
  "key13": "j1NWoRtgztazKxPnD2iycUFrhLKVbSzZ5TDmFREwhFQPouvc9srDDqFaDBDsGFTRgGXZkgW9wkaD3XFYZUc6iG1",
  "key14": "3wwDaiByoXUyHm8tu1JoBFE53bpH7z732UMbgd7D8WxXpEqwrxm1GUmrUmXuJkuq5wZB9LDYFPdcedga7BVLhPFM",
  "key15": "3zswhTsyebRukv8poZVaUBTULhL4ForNMNTCiRKCeFc8A3hsMTzkKGx9emdxqwz7sFTUwVKof3AFsuTut4pTGBPw",
  "key16": "2utgAQfdTa17jWxRXdKajf3zrmbVQthLVPKvAWE5Mfg8MWLfPKjMAoRwZXvVDyxK86Qp6sBsJqM1SXUnVYyejjyf",
  "key17": "3GSXSeNoBYvKgT4Wb1aSL9zxnQHrymuTUh1FqXyn19yXXPSneWV66mamVpCPa6Ni29bfj1LMzxhNnkDjLaedaSeS",
  "key18": "5pFdpQ5zyPBHdhnqHspxhVGS3HDuTrA16mEkwhF4CqbYyTJ1bFcQ11WNoSTu4BN1kmo7vdPjSndDE4CtimYV2PnC",
  "key19": "49aVV4euy1TNTVETx9tU2QYdMFR77b5acz3EeHFxdvoVqN2XVrSxsCHCVhTQAmkwrPLT7NPQqBnEvAXsmJ6TUydr",
  "key20": "5bbR6n1sjkppCrV4GfmJMBba5PhdZtTz1Hr3a3H2T7eWDMF2VpTPnhLUYbSJAMtNUiejGfKCDpGYXScDY1z3nKgx",
  "key21": "2jbPpnuRMCV5Ezj8xHQb4NG8Tdxz3CRS8YEVEb8ErhESG8HFn2SqJzwfXEKBUUt7t3PXEyXcZ8XcULYUrXb1CTWb",
  "key22": "5q2KUw92Ksu1G7PgNDC6aZemcm52vvJVDsVJqEvLiE6MMC19aLWKAP9yHZNaTNE3xRiEWxGRV1et7sCUimk9nse1",
  "key23": "znfzMXKHyMpwt3knahj6yRzFBizKLTQvQ9SXmEgRQECCqKJ5hK4yYyzMe2LFW7YQVBcyckhQujmqesCTKGVQH27",
  "key24": "Hazom5QQpy24MPSkYFXhYDiReh5MUoEx17EnAb249aUesyNahmMi4TLJ7x4okArZbd1uehJU9qKsAynsPWSBLwf",
  "key25": "5qtZBhgWNypBKa1N7rAEV8nXQY2DTLDMGy3b6SSxCckviL2pR3uPojnxm7i8XKgt6GhJ4jVqyfrhe6wPET7uyNB3",
  "key26": "5JcrUMFdqzzqxv7hTud5Ji6wnRCciBGbAwXRo9vqL6w2VeR6qDt2epcTd9scaxaAHsn5NRrk7wjfBsSLifnNhMuj"
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
