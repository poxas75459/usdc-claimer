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
    "53z7CtLhQcPbVwxBrsitP3DcGGz1Sp33KVtKEeaLP2bmC2ogfmjQqH9vqrd9xotyBv66uZiBq6tjaejPcH6xKQPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmMZXvb32gDukrH2DmMNd3SRzBJMntbjUgArihp7qz6jqWRgBMR3aqcjzQ3njVjBv26KyxDgfdfEh9ZZNUtcbza",
  "key1": "MuJGHu8mwXVViPjAM35yY2tx1TycLY2QYNvywndYFUJdjpqLJPJBvAYMP3k4sQoQ6QQaSHZnrAkDcpqaAd4NaQ9",
  "key2": "p4q6w28cEcQ6d5yRxYn4bRe8HdUG3ApPuH7YxJ5qvm4H1rjD8Vnpf2jFHAvCgRN6VGtEyyUUCH1NGRa3XErZzgU",
  "key3": "5nGwLjnK9vX8Qm5TaY2comS7QghAPTVfWewrQhxLdRGjFdPAT9Nbc7YW9kxtSHLkzJpFRWmUsTkVJFKJniH3HwSo",
  "key4": "3dzea8cwxgXsjS7EksQJsgX7EPYS5Zfi5z36Wc1SwArjdcwRPKhmZbd3usq7YU4cKW3sbQLjn5CRbuzezihbovPK",
  "key5": "rppGiCygjfCwkXnPraew9Ym6qnBSMGDrhtVipaRB9piwa7p2r6m2DiMcAJD6k9Rc63kM4Gira5RrD1VN6RJ9A1z",
  "key6": "525HsWjNxEW8tUFPvzG5g8dR91BrkgSSfcAUN26AXrxiBdwZJ79Q7rPxmrSxsvh1J24r3C5JsmZbdhUtMVznVYXn",
  "key7": "xzjXk2KWVSK2obcWaq7BuirmVuveCph5gZCi14k3fJMS1Qa5RwYwgKZfbBUzMR4swNXig5idMkv7M1T1G7DmpHi",
  "key8": "6jTyp5c49yJ67EbgzPAELM9WTsW9KPfkrMPScqndqn3KeYN4iCmBJ5Vrii51bEbPDiz8RSrGCxgVxfM8mu2fJ6X",
  "key9": "2VbpFSHAM1UEebpJFmj9nRqWy2kFy6rJoxhzXdPUQjKSKgrr1TbTTNz9nYfvyEKohqMNdt5ZmsN6hA16DN7WVuYU",
  "key10": "5seZ1L7LCrP1Hoj8AFbGYmpqs6zSyK7yRTqdPvenfMJbhFUbeX6VXcMGHzkTzPvD1Dg5j2zChNc51naPgTUMzFyX",
  "key11": "2pxap5A9AozpCUin4QFaG2Z6Pksup4Z7iCuhM8Cn5axw8CvNLBE9DkZ2qsq1WN34Jwb81HxQhxJNvobtA8QWfyum",
  "key12": "3L4EunoahwFAzyYLV4mSZ68kCTjZTkLz4DSXgRzqhuwsdcfGEfLXqU2eGk4awRpfwwHXivnFfttsb7Uz3532uCMg",
  "key13": "3DMRNNLetV2Y2GQLctD25M9uJA3cnBUbcdiQmWPWMCraypbQnhemPYiLccTcggfkpkTyrygUJawRiQo2zx59g3HL",
  "key14": "5iQAXW9P6nUmMU7JpupFGcQBj2hM876AoWGHfq7W7QD9aCNc2rJXqhJ99K8FSTFFzw8De4sRRvWr2QEM7UgxWVJU",
  "key15": "39BooM7ksEttCYFqndiQCxngEZeTuFTqiMNgLLz4vK4RQNtucS76GxRv6e1xoyK5Yp5idL2nyt8hvKNQVoh7NWeQ",
  "key16": "5t2US9ra4AkCXEY1kZrTH7cmaH3roa4ipE9pcHcjJPjwDUpUMqEjRkyT5h2GoQbFFcq1FMM5vun58t4stKXtLhHP",
  "key17": "FuW3bKw74K6eQ7YYXxxeAW9AumDBsPmku5iUVNt4CSkK5Mtqx39v7STiDuVT2puquqNxdDuJi4E7UcEw7SGyK2B",
  "key18": "3JyPuVNG4yzmegCwbduSu3N7NYqJaphAeQyvQPpDerWpdqsHVsK4w9QQRiD2z65D61U8YJa4LNMHQC4a9dvvcF2L",
  "key19": "32TX9xKc2JSqUjX447H2pHLT4FVBG1eVRy1VqjWsfKK4LkXMj9a9x2LknRfCfbrWASFhCwWrMKeJRQYJQaBKFbKz",
  "key20": "mRBAoaEeqDvCbiP1HaJ1ksvqRF1AEb7yQbQ41ZY2TUEkmoWoTStr4jaQ44Chwdv6tjNygCewwL2q5jRhd2pytr1",
  "key21": "5E22bJV39iTqeXWWt5geBSdJ2NXetMv2nkKcktiLDubNfXS11atQuUdw96aVpVs3HbitTtSPy8BQBogXAtHs3fKE",
  "key22": "3spBLgXkTmZnhhQHyq9aoHACKihnNq6ARy3XAgPjfvCq9Z12di3if3pTmc8nsC1jyywHLLsstkv9P6wJUiKwJQU5",
  "key23": "VtCEJZHZNEjCW6XGLdxrDqut7nhJ5LsREVJpjUSVJSQiN7YhZ61x3ReMQhh8FumPkWdLkvARVpDww5LMEPdqHD5",
  "key24": "239XMQcrvL93nEt7MkidUf8HPAcNYTqwqfJhKqneH2r878jmMXk84d47XatcYFYAA3PU61QZbLuYcqXsjWvQeHhV",
  "key25": "648myoQkQn45gXhYNq2kZsPJxmLBPBABeN4ATAkTFtTfg7JAqgFzXTDmsB6MVEyv4nTDBMyzRyhTDwUtnGCrpgn2",
  "key26": "2UB61tmVuomxAJ17Mo2NLKmaoyfiXdMxF9UqeZb8RVsVExDu1nzCyJJZ7KKWfvmxqhre8ieFRt1xwVprwqExJtQC",
  "key27": "2nyVjjkMQVhUMtghUvbQAjSvLrc1M2iE8K3q1vWA8rFzn3N6dY6JdRCy5S9AvKWkouedsZ4i18dfLyp9mXR7gA9C",
  "key28": "3z9WGFkrByvHfVd35rT16QrCBVqGmgJWw4uM4KXVYoVEbh1yWQcbSRi5Pw7JKhzFw4FgU43ztrzL3fgaZEBJRX35",
  "key29": "4UgGCfuQ52xHF9QuxHHyBuxTPCMrspdzbMe2umwAYeLS2yEBtVxWbDCbsyNYMfGFBbCduesPd2cYyUrokKES4aRR",
  "key30": "5mD7et25wdjwSmik43ddpj4Y9Gx7gS7GPcd2xPnjYaGmeqaxUgKxMdtEVC8jxP35jThXVvCEe1brvgf3XgchJz7y",
  "key31": "2ZKsWk9SK6PJJfY3W16JjdHngJ1BZGXNSRJyQG2duTFGLcuBx5BcbKEPqCuYForYge61oy3MvmLF3dQ4GMHaJLKc",
  "key32": "2ZcU41cJ8yf1fFdiTau6QW2rV8pKuwZjscBoDo8Jij3ZSmzQo7jnxR5e7sc42WQFbHABNw5hhQbM8ZW8ehN4mpaa",
  "key33": "42iuRyG5s977Ky2WE4wd5ZFa9XTSzinuJBMFgHNopxzfHRiLtZHtY1j6ChNmioTLGTE6GzuvdpGHDDrgcdCj3JPV",
  "key34": "xbEDe4jedZoACTdHtNuNuUGspLKzaQpEUt9YxBPY9cwywkXorAHsYdcYfPaNCPFzY9AP4yTp6zLcSFN2GtXQLGe",
  "key35": "4Sd5UmYJXyykhTEvCnhdcj1DRMhpXeJ334YEtdHbvV2WkWNF27GXkBDPXVQSwHjKtL2tRSvHjLdYV8HwVZ8sroSx",
  "key36": "v6ZcpE6R2Rfu79CvUksv5nV4sHJJPmzqNbYsU5jfqBrD89DeXGU6zKgrW2LR4Ltcs3QtGH8FroXpjkAVvxWoYaf",
  "key37": "4aHv1fG8fX5o27heBwkHN3ZuaCBtxY9jLz37rCNJxeF1twe79dLFoPF4fh6sGvDLzFVrsro9ufTNtvcTFV2EGeLB",
  "key38": "5idGxBEaUnwe3FtaFgsUipgUpoqaTnMsZV8YYBm26besqH52scHTPDSm2ywT2oo216apNDQ2pjfWFeAwx8LP7rRj",
  "key39": "3eZmDDJZebhar1i9gk5dKMSLH6Wrytk2SQYNv2fMpbjnfnpMUApy9iZHsPo5zjNnNaJL8wv1TpxVb1aqQ7NgLpEF",
  "key40": "2gBkSMwDx1eCkUcQMvPrzRVVapxU2xoez2BBbHeJAS9jD4AFs9iT2z5HB49sUjH3pyjhAgf4BC29KorYosWKjNyJ",
  "key41": "3ZDSYCbZLFtXgstLAshgiX1Nvp7cbJze1QByWY9DBiUws3gW8Tmoe8RqLMcQ9RcwqHmEJwVFAMLLStkErSDm2nUq",
  "key42": "SVU7jH5VtsN3VrHpHrMdkh6VgNvUq3xT4JdSAERfR8igRjhUSh5NdB8EZpXEvNLU5c1Rgkx7wnPMoSuE43YXWbs",
  "key43": "23Y4rGDh8efLeGssgwtFcXk2ifWxcofdhEDNudKdZLfHmjNbh4rvFfhnT5zy1M8bbKJ5JN8g369HcVfrVc9AoqPb",
  "key44": "NSUBeT1UtZa23sRVunM8sYqgourpk1bqUE7RYZuzJpbw2bvcnpWGwU26maE3DP3jzkyzbYCpgLDjTxFjJCJcr7U",
  "key45": "4t48UTfni5Wz2N6Q2Crxx2nPe7gd72DRvp7apgyn6K771kwhSuRruCCjanCSfdi6vjRZrXHAqyotYTWi6fjEb41Q",
  "key46": "2aaDYiJUcmJL3N4fvApzCNDkHxpybcGpEHEHzmZBkdoUzRoJUAjD5hkKYjLf3uRi5JY7FGHSQd4bYgLKhrNrJbAf",
  "key47": "3aesBVBPMoGfwZEKc2UhFjSxfvGh2eGm4hLDp28CM5e8YFpP2FB1uQxJ1mUsmPp3wjWuS4STYrodmKDX9tqr6gp"
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
