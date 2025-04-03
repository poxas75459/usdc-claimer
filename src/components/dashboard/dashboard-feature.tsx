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
    "3gMRvJ1gKKm8TuV3jwzdQtXqncQbh3qtfvTihoyt2mJPbeg8XkPBpfYEoe1rsoNfKZURj3v8Fv2yDoKiDar8cFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvZHbBcETwicB8Z4X4siJxFFxXPEa667w3ingM4DkQBtv7kByFWiEQuiu9C5cCGAYni1rt1rVxLzJzovy2cuftT",
  "key1": "4mdQWPweHpULh29Vym3JNg99EVP6zDyVFo3pUcvb7hMFYpG5cNjeHTCA52RDgWvp78LxavF3myfCH1SqUFbasAVC",
  "key2": "5jpcyTbVab6hXbnTKBSbbVTpezPMDKzqPZjyCuEh2fF8YACqN7b54cCnUrnBGBZwbM6iemQo9T538JXzKndSBuwk",
  "key3": "3W1wPHm5KsDFzzQ4Pv6T4CSXJ4vBhPjScj7M8JtGotV8rkasMd62GJepq8se1M897zpqs9yrzZDYR4oJDpteV6Ux",
  "key4": "szNsLnfTW2inwqxeVM445CdwAsmc1mXdGHkcB9XpG4kd9925KG8KbKU5bcgMcr7gu26eWJygHUMSQv6hFt7w2Bz",
  "key5": "2QiWsjAj4LDy7JApy1pxeNdjLDLkqfHCkhvwprNMAcXfco3quRRdzN7uvZAtsndVVniJXdVfUQQ2ba4Mvzg4y1VT",
  "key6": "2EZxMNNWVLkhnMa22fTcJUXHVpiGKaw5EMFHTDAoQjFV2wGcm3wKX3kkyMixWcfnKben4rXi4mxXgCCap6NU8Aev",
  "key7": "3vkTJZcif3AYbSHx275h22mJezFfqRG7FpHMJukkUyskox72gSER3ipts6bfZw84wg8k2rxpmzueYVQAyWT4xRzf",
  "key8": "49dnK3XtMwdE6cBD83ffK8ZujCofytJPsFzyD4u9BJPvXLmjV55cpZ7aK9zHz48ubxTWpW6fwAFhDLeLLRqU1mdX",
  "key9": "3bdLPX8u1LFyaB7uf1eg4Zc3t9iHYZoAbtCQ6ba2fJnuRjJvJwYCmpaMatpdTtUjaPDxQYdTaDURcquXe7gtw9gB",
  "key10": "98KTSdXjiH9e1YKXeoQ96Y8Sa7bTTwtUXKYcET4LEvCvBGaCmBimEH2MV45khLszm2mSkn9Vqx8QSpUBarWo7N9",
  "key11": "5CFcCerT5ygB3Hp19guJit1W9d29UwDHRVWYLgpcSDx1SWNQPoKGYKvKUwaV2HYPt8SJYMtn6fA629wrT7tmKkSh",
  "key12": "tgpBnRa27xz7hriNSjwGyUKUHpveKi5EhVn15eqYs874TjrmGqu6U1YLdww5BGkxLMNokLYUgTRbM864FiuB7hC",
  "key13": "3rn988qm1LzQP22xxbbMKed8KTzigvBZxiJ8tZukU8jJjqZqSm4yD49Tb5khjCuuX6umaTF8SCrnG8c87GhfCvgV",
  "key14": "tL3wLhDeYYu1LL7nVgDSgVmJJbU32q5L9pv9qGQmLRQkBZibiktKJ4ay9djNvVTNjyzUowicz75tqtmX8MBL7cX",
  "key15": "29eeaNQiyqmHCMzoKf69aAPLYra3C1e8gq9cxF7FpWVJqrYyQ3rcB91qVAjyfmVBV9UdnStUzh19d9vJQqCqQi74",
  "key16": "5QJbAHTN1tUbQA6dh1MbxgmVcjehVGsxSpZHLrVVHT1JHBoJHtNmVKWc9pnLfNG6AEC2opkKmRbDGdzLP7QEp5qe",
  "key17": "3XyWG6cLMWRy9r1ACKr55f9G3c7V8xFng7rY1EPTfzjMMHk9gxXDnwhPeDHA4hZZJA7vHt5MCoqB24JWqu5T5BoM",
  "key18": "5k1BDe2jPFt5BuVbHBePoaeUiSrYA33X5htkCb78NhLtP4rvgELJoNGMCSu65ooRhJCEdYeVygxviy9pxhS5g2kz",
  "key19": "3HxpF3jCRuaXavVRoLcgptMeQH8UNH2TnfPkeFfcHNcATrapU52pkwYfcVTD75Ch464viYhNB9w2kkTQ6qa1Sp1h",
  "key20": "3CQL49zYy7tRnotpFoXxXVZGEjrqhMZz2knuUKDznUki3eXsgwryjutyf1fZQ4PLxssQoyYey3DnjZnqK99juvun",
  "key21": "5B48iQLxkkKnEo9k5JrDZHLianK2NEPTKoSFuwrRcrrWK3wQC5XQAno6WwRJFZWzBcB3bdvKCVB17rRCAfhscxVL",
  "key22": "3qhswYhWKMrkDZ7LGavY6ekk3JYiijeMyEqJ9gN3q737nC37e9Mo5s8wRxjhAJf68zbtVZ7JcXciPHrG2pytR5Hg",
  "key23": "3s8xUy57Mby2TVbMCJXqdpvtQJSFNkZLG3yXGqHA3iUxCEV4xymyGWujtDHbDHYWr4FSHarR6hfbJqLxiMadC9tK",
  "key24": "5n5SZRvbGZFkAy2WSxQLzCsgCAppYRGt82gHMiLCiAq1U9nMMWi64DVFaqPa3DoQe6rTLMvevhSJezqhvqoBqnGC",
  "key25": "2ci8gdMbUWtn4U6vPofrdneu21mhmAjykb1RDY699sPnnVrixGuGGrSwTKYfRaNpbGzUdKDNBy74TvDBvZLSs5y3",
  "key26": "5RCVYiNFEnHjQU31Psvog6T1gCq6ZFSQoydAtgku125PU3WpNnR1crUs8TtrpvZrm1kEe515LS5moz65wbaJNpAx",
  "key27": "5XWr2m1xZL5D9HLHyReEsMNoD6XbLw4nEJJTjrjnnx1oEoVqoo8rTn8YTKaHpXjF9bm648pzMgsUMh8q5S6W92by",
  "key28": "2YJeJ8PxECu549jvPQkxFmcpjH1nQVzLDbQVaK1rqJrLWDD1527ZcunCnSSjeQQNeHhNWcQUPMg5BehQhWCdGzc3",
  "key29": "ks7giMuCxgTbw36E93AVAPnJwPrhKStKPU7XqyxXoooBcAKT1fBMb9PGAypKuknyCeU7aBoqJtq3VkfoEj3WKD4",
  "key30": "2a13HARycAW3W1FEGzVkazLZYS7yHBBuanFRe61Sh6KEnvHg8gvaiCD5ApMKrRcBF4TgvYxBJXBCZRVvedaFjBU9",
  "key31": "3YBjjJQrZ4w8REGX3FYCg4AbCmB5avz6bKdmHz7hAuSMDi91hDWoErAW1SVQeXkRPEMKe5a8La9cPWV9hJeSg1Aa",
  "key32": "5tivgSso3CjqGgDq5WQYneXLX6DqnjiSYv5uWj7KhLGTgHeM96d2yW3ZbYcQ9S8hEqhRXn9HcP6USPvSBNXDdjMB",
  "key33": "3dGgNebjjdiJSF7Lz7d7t331T3mD4ueY5b6iWCTAEz8mRjsYgstnAaMMMwPT3u2XqNFfyXzug2p7iVoy32kdT4pt",
  "key34": "4ZhsCgKtoELt1PdLryCuDEbJxXjUrTGVj9qAxhk9Q5HiaXLNVWdbWE5Q8o7NU8RCW5fJ1UgVvqYFEZePGWrNCLaW"
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
