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
    "QwXc1NmtbMny6F5XtH7fqG9jDvk8CE57EtS6Qg7JQTi7R2F6qRtufkt69A3EGsvL4S16eieQqPUE12ipYjMtL4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Wibc9gkAoV6ZVjsxqtbK1KPmzS4nWFGNYf4HwAHNchSnEgSAirkBC2BLz5ZBxbE3safyboo2Qc8CBF134p9xXa",
  "key1": "2acoxKQ8i29V9zv2bYC29wpj54LLp6R1Z22g8wfMWhRQUvFGkhePXcx2FALodDAyTYKg7xLkdcaBYU6riRiWCUFH",
  "key2": "NqNGuB7KdozhK8k3GfA98V96GWXckpMLL4AnAt7e6WgpkhMvwAM3tYL3B4NJpSmMbsXTxoQ874pFJ4qZ3hfpcuK",
  "key3": "24wbmeHasauDhQGqvbCDZ3zi2RmkKvmVBiU7zT35u52ss4kUmE6ZtpnwMu3YQU4nBX5LHHYUCqyTThCAr28uofcj",
  "key4": "FeYhBAS9tKstHb4cTH6cXoBZe583Ssm1MDzR3667Y6b63uNrSbT2DuwRM7uAWg3dunqdegUQ9hP2VHFQkWjSiN5",
  "key5": "Dc8EFquq94MdJuwekj5WXfKy5gbkH5bfcnqdHZqawfy5jLSgXcaCAWca239jbQknNcL8vDasnbAVEwPMGm1B47L",
  "key6": "2ovFUJpX57irgoJDcQCWbmABN5ShdSrYgKxrdTveFuHsxMdmBnRAdqn2hJkji1aRH2rs6EWR1ATaYwLu2kJxAJi2",
  "key7": "3HPnc1NHxBJeHkeN6EZprdbS2vrqvmu9gEinkGpZsg9UocDoNSxKBpBsdjtdFzSpqojvbr5CFSt59L3cuedrLNZj",
  "key8": "3ETm6XvUcFR2n3RQVQARkSTTSVxRgnz1mbwu7g7F3MPvuK9zDvWNh4k4SfDGXgCYZLMpUpUkXogfwHh7jemBn7gE",
  "key9": "61wfLv556ZRX64cjF2aJFcXNN6QETWydmxWCBWd1C6czK5voW8JVL8UsS89muzVf5xQ3PToTwRqg5kMW8kVYiGFi",
  "key10": "4m6aDV62aj4eW2pVEagZNLxXWyAUuyEVq61w3Lry8pTwam7bnjn1XAH1xXJTYWqCeKEjctHe2bcxVHZFrgCQKUj6",
  "key11": "612SYG7ZbBPoSExvWAWN2asD44XhzNe8i5MtHaN4r1Pz9fKdr79XWccMV2a1fQeSULBM1hVeT1wxXRrGqx7kwaau",
  "key12": "TuGkM5u1mdjXpSZBaCZ2H1jwvTkqC3nF9UooaAmpNtdop5LMVYCtjWztpYNM849W3erCpbdeMGy7i8K4ofMPNmt",
  "key13": "2yJrj2CaD4jZAHmfJytKMmaTKSJYdJBof9qzN5XeUWNgzJYoSmdFedrudiqnHfpp9bw5gb3oa6qCGsYtLmEdwpce",
  "key14": "4MNtStKwPkumCjTeKGQsFR5cZU5T4a7zkMrbqDkzCyu5gzfok5vTvu8CR47nshPETgDgniwXUQBM3bvFFdtyA7yz",
  "key15": "ty4v9NNRjAwMTf2hYntPtuWdvYQRDk6JVNXbrUAUmq8a3e91GVih5d5GofG6WxUhN3o1MUDUwsUFuv5eJJkse7t",
  "key16": "2LC9hyt2Dvbx53R6MBkvEujCf9Kbia84rB3TgDYHmHAdBSB6MoZA91Jvgs5KBgcRh1cptXXsLVYyzxjAG1ffbVJM",
  "key17": "fofCAH17627utKPRCDtR6L66ECMXUdNjk46SsphWFAqzpSxJ2ojgNhPC4Gjv8owdygwUS5aB167K73v2B2wMZrs",
  "key18": "4Q1LmxSpeAPQziXaWemTd4QANqVFsxo8ZLKYQVLYFr4ffn7YJmKJn2h7XsGkXHQMDsnRwtSdV4vLGFJPSPX4a68a",
  "key19": "3h9zbnCwoEBt31jBKuqWPzYMWXqDegqnvesSVhG8Yg7Lw1s86aV9RRuZkgKmWXCURBWa5auvd57DwDFR8QbbLofW",
  "key20": "3AfeuAEopmvi2Cuf3LDqeomsM7rHNZxwea3fdcw9i3UBCFHD79fZuNjVAMNLqDPfPytVRRe5U4soAetyjh9PQ7XQ",
  "key21": "2JnYQTDYuZwKX1qEtzxoMhrYQ5myYFUKkfxk1RzvngJAKSpQE9Arvu3dUrpi1QGWJX4gfXWJUuWe1wZimAX9g3P1",
  "key22": "2Gq9YzKxLCmRMkVukYho7tRnhAXYNEfkDskoHNr74dwUkWek4SvSnNxhzFTFkFzkwu9xYn17WPNCfeDLbdCWDyEj",
  "key23": "5Ven1tBvVXNUD7hbMmuDbb8hcK4xx8EgqhvRWDLtePa5s2PRLx7DatuSKZWW5SZpn67JmaciPBinjpatgM46oW9B",
  "key24": "4YTYTXpSK6vEUsEMbMxU4ssYVDtx3cUB8F5s398ppaKeUafYfsdVjQpN9rEH5Z4mHJdMoxUJyiXRCHUmhf4b9omT",
  "key25": "5CCbnunLoXHxJH4DzybubF3rAjAtFES21oMAwJbSC6JwshFFASnGqjMv41YPn8V9TJMaBXhvRVTt7utBHopfNnLM",
  "key26": "2k244Pz2DXfdzzUU2MW84bcyWXT1beB4GHveEnmfvX9pb2EuoXywhDHPBFG6xyr8YS8n2RCsFnArBnwUf2CmFeQP",
  "key27": "3QaL7Wv5gmT2rZpyLUjCRSna4kkwqtqUEQ5y1KEK7zwtRhvant6rwcgiK1boqzurQhUxniAWM1g1MUZ2A3Ki1kr3",
  "key28": "iTX3N5MLkVzuTWvn3M2rPurDN4Q8qmNsAWWY1EWcx47qawuyYfiM5fdaYtwFmNu79ajWawPqUSPXo9gwV98Htq9",
  "key29": "4HgYZPSg8D38avPmNDtW1BRT7vwC2F6gq4K538Wj2btrVmPrRsuhyEmKkFpw86hpHQNdny1kbpQ25tAccs4t8XHC",
  "key30": "5UmiF38nXcnh92sXs7cqZBB5t82YE4vj5Gwg6tbbLa3EUm7J3Qj3KREPW91j5PebiTXF3Xefs5QhpARqKxfMzhNv",
  "key31": "5KoGb6iVofgdUhVA1kXFe8tpFYxfuS1v51zUq4FqM1K3CwfijkUE9LZ4LqrU7J6TfP1iGChK254mrFqUbYfJEqTB"
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
