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
    "38D6EyQjvEFvF39FTfh5neMmYj48bf5e4UbQzos9YZRqudmujmDcBJYWTQGdUHdCvDgNQvywfnGfCNtV1DKBXAFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjxo9eMwZdpfZFEEUFL3dYd1zuD1Aooqkfz4hAaCm6WYqnoKv7DdRAYdADAXVugKr6o9UGYwWCghJ2QJQ7ZXi6d",
  "key1": "2174Lqg4VE81bBm32NwoRHZiXmY1GgL3CDR9foXXvSofUVG7jSr5qSLEY3Gx5bKqgkQkB3f8PA6rWDujKk2s1dGE",
  "key2": "2bYuypJJ6zWWKob9kcstC829dvano57SwoZXk8GEwz5CegehtcNQddrFe6hs1TjAQEfDHwVPgSdUfRSyaBrwTNmJ",
  "key3": "4efKLZyT95LFX6Grwj25jvW4R7mwGuECYyZDp6fTqYGLEdgGAryCSQEGnsMR7yVTUHwkPMNvqRLH6wFrHF7EHBko",
  "key4": "5BWZRsj3yWFW9i1pp7kdzx51ax5uK1gyqhj2d2BnNT1LZC8SQQuFVt9HLsQYLNSBnR7rNZGBaRq71SxAnjTi9B2i",
  "key5": "nLYHQueWxasfb5LN77kyNR7QxwfYsJXcXohZbYvetVQoq1PEbAbCAJ3ZZXvBgDk2P4kyQRmPcgjY968BxNsFTfK",
  "key6": "2nNqyKAwiPoSLsxKJm5tEozpW9yBWi96MmgFwhkiDWvTTSPgkgzbxj6K9uncoZuWKqgXSrPhJfAbvDtzFNv85EM9",
  "key7": "5D35NgA1sXE87TnU6cjEUuKVXTVi9pyL8kDwuy2eAMQDfZj61Br9HkMxxBbwYernHSK4ZypaVxbEdSgAweJQFzdN",
  "key8": "3B4oPWdw9CJLuNHLhuBFn4yLFbGR9ygNcNFJ3qC5qa4DMfBdgY57G8EJBHLivcPNJ9UhXnhVHAkUrxi5dztBPkg",
  "key9": "28KEYT9iMsKqyMDuDAHnsaB2Pb9yhx1idHSeaSfs5ZkaY9kkUva9F6VxLpy3urWsWPYM3EnJi4qZZg4o8RGHeQjG",
  "key10": "3Zrpi3EQF7w1Dtcchhd4gqpatWSnaDZ6U9Tgk8wuQUXEVyEPyaZoj1qC36h1QkvNSfpHnvMuvFmXHVckvENUrZHY",
  "key11": "2B65aUZrPrJw8psSCd7kCkqSdCUTnf7cpaGmZ4dZw21HdiN9mmRkY2jyCSxcDbdgcsz3BZEtzE1jkBzH2q2CnLQn",
  "key12": "2UvZaxEWYL7FPyoeLt7HDvMWy59PNzB1m7CfWfc8vWZRRCTnnXJXmgesfqLRvmTnpqBa9yrV8HEBe4BhuMgzuyME",
  "key13": "2z84mP1YrsX2Y7uw8RsPZyFSdncGWAKj7LtyhkzUDBo33TrKXftb1qwP32Xp9qEvqU9qvESSTkhv1A9ZTP683hDg",
  "key14": "2734jGj4vMutRxSbpjNtEpeeaA7LUBnERXZfM6Tk8amNwG1Gepn6s2sJAeQHQZEqFES2ghKPMPBJATPa5JLPgm7V",
  "key15": "4UvZ6VhvizpCovnuzfXnd1Qy3RBGCusWC7rStzwywKs5A73YVSD5KR8RidYqJ2YzwikrtYdvEvCAD4LpKf6n1gm9",
  "key16": "3ytmMpNiC8YriqPiTHu4Qxp2VufdrU4DtVTarTizWZLEhm4iyYmyiqx7UqJ6KS6gX76Ppud9CsFqH63iLXyEK6Aj",
  "key17": "VCYRvacuvQieYnYNMfbhMzDVVJwq26sfAZiRmLcrqh1qPYM7gGnnw7vMaogvi24u5AD6iPZwxPei2JSZrGNCnV9",
  "key18": "3oYjm1RssHYUmiKYvcq3NerKaMttTjwpYXkGccqKYzarih5hthuqwEZmBAHCoyLS1NwdpA9UXcKbBtzx5RttmA9h",
  "key19": "4XtvxRFs45V8Wr3EnGVwvn28E8E2NZy3ZY1tCnChFpKXRybiARKJJeheCLS5KdBpZApPDSW6YcBCLnPDiM2REHEH",
  "key20": "5jburRoHxcKAd3d7dVgU1dvgCMMHwHuiW1osPQJwLwYeKL5DtvPMcBBKphDSTZassDLBdwVppdcpY7ziScmTFjEM",
  "key21": "5xAVQiePcXGtqwTxCsRmRU1xe9f9Y8vvGTDDggSUVAmRq4EwphDXQkPJn91GzBcy3gbZfpJJEzY9xLheuGMy7hRE",
  "key22": "3mt4LgfYiELJJQYYdYkLbktX3fNN3xj8fCFvqG6PBgdeQkHazCi8Vwu4uxucJpKzkts3W8kug8p82n1UoCKQoiWu",
  "key23": "57rRS2uivXcA2L353m1pJKvMcCgZTtmXA9zau6KMiLLSP6ADwLvEhnQdt4uitUj5dJWFVwpBfJNafRyTMsAryB6k",
  "key24": "61ZAZ6RvV8fF1h6zQJDtp58mg7aexB92yaUzuhKrvh2LdwxLeYoGMYjQCB5oQqN1rmUSWFPcBwS4jaNBBr21f3me",
  "key25": "2NoLG3ZVXgESeQu2BUZLenJbuH7mH1H7GmUgbb88UYkuUk2Lz5AT5KEM23GfxLcgMeG7x77XXxERc7Zp3jyBFEgC"
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
