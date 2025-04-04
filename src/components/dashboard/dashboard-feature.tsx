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
    "h78SqX68D5XBXFNjV2biypJ4LNUG6cCw9NgzCe7MdicvPDphjfhCMeEMnRE23c9ognVkNNNAuY2UiefQPcJf9FH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ayo2Kzg8RzNMMPtMLbvQk4KYr3H6UDvxjutpxJevfQUMtU5uPKwpecWMFnGLxYBtfLzBFT1HEvT6TmMvUzDVdot",
  "key1": "2GHnRUAFoQcDE1hFdzX2GfzWnhKVGdUziHTTqySVos19rGH28uZbkoJmBEoyPccKRXnDDMrZB7KYETok5vLtX7h3",
  "key2": "QFRXQ6BChYENKLxxA3qD8FrCu4pZzD6CnES6RkiSTMGAWyzTX4bkw14fsYkCJPjDnG6ySLuJNbthGxK4Bv8wfvB",
  "key3": "44guU8CJMmrUbn5y2jN8W2v1dogXJqhBi8VVsyT6gSmtHGuq9UJ4Y8HuvgYP1Ky7Zr7WwaE75cLTuDdogFdW91YK",
  "key4": "55NPHBJXg4x6EudpC35GSDVs32fD7EMf372yuEqvyNFY6JpgARNWJY9nKZsTkBduMjUVqjT9KxVxmJyAjXmqAjRZ",
  "key5": "3YYfkZtg44ZUfYBYrnBKuadV3dL4jSyLK12segCMJ577wC3GhXzBcrHk75zpvWzam3wEmbh7CbcsRcHMccU4usCP",
  "key6": "5wezsZn3r8WMRiMySEvZEMcZy8gBwUtgkKk3mgKTQc1rJwAeqaSvZEfXw1CGHmcbsf32hj145eB4HzT1hkLQfaMn",
  "key7": "2SX6zw1BqoCx9zmTwR9VzRuhGyJSPeqmxcsP4kVYaCC53mwfGdVY39gX7heteZtn71MKznMHHbmMgbKipmt4yETL",
  "key8": "EAbvZQxEAsAgkUVCBe5RD23YoqsDETyDvaUgN8cS7TGtjSgKwpNNvDhAF8ub87gbusBmDGQWN8hdbM94stBCc4P",
  "key9": "3ebw4gMsfhK1sG7NQCiNnk35YJgb3BZCVkriUFm4mwCmxLCC3xVxa31DXoSAQ1Y3SyCv1owCVx1wTr3nbrauHM8H",
  "key10": "KnQLhH8Km7Jr1K9JeiHuHm9C2ELMCezsz62BcufMinM8hanF6CkepfNN1po1RqviUw14TYyYtTzy4WBmztxEs6H",
  "key11": "x6mb7u3zNfSfswAbrpejonaEpoEXRfWkrT1KJTQQgtUb6fT7y5WFhPkFDPJhts1UkiLDQyLvVpKetXzBtDT8gjv",
  "key12": "2fzWoyVU9hNfAC8kG2G1hfuyTcRAoFfEPDG9HWbUifbG86o8WHNJVMEvRZRKBanbLiYS5rgvDJKrMqhYvqkoEyN6",
  "key13": "4CsgRuQaNfA34fya3E55YACXfwxseHhwNqN92MEgRFRqY2WCQtGZek2FmeKMLruFpyvjtrA6HLaeSiLWSCsWMBbb",
  "key14": "4FXiWVTXFqbJtSTsHKYmRgK43m4E1EyFWjwHidkskmp45SBLQ3kmUw2LMyUcLC1qAXQUP99k8qPWK8pb6Zb7Nux6",
  "key15": "2woxECmhW7ZQLvi9iogiNQ7R2aRYd22XHezpoqjSzuEJRi9VRx6e8WzoKHDsYSz3oNev5KaFkSChJfofNy7vW9Fn",
  "key16": "3GEpAeAxAWXwubddRhthXQJxsEYt7i2WJYu9JMCgRUVDoajNUPVSYM4Qm9Ys8mzNEy6wC49h2HDecuMjqjpt1btT",
  "key17": "2KvigAaFUPRRSk6JuXPPgWeRr3enCP9Q5eEmaMeWY2JTMq7kvKUuPdYbzUnLWaP1KocorhuhHLr1dqUocnxL15qc",
  "key18": "4xuVq6wLb8eNLdXnGkT6Mvm1HzYmFWvahLdcWHnm8CRuBpboCGCNXCzHexhhqZ4Hmds1nMA4HiRqGyqQyZ2YQjaK",
  "key19": "31EPffq3pSvymUrunerpcsAXrk29HZvdqouvRUpB69t2dUrPVWkeQD5N5xjUip9amNnUApnyAypBQJU9DroXqpGF",
  "key20": "4VM9a5j4gVs834ZdgpQfeSoCc5vAj3PkDPfGpmVcfW7raTsGqQs5WNs24FKGHa7uXEa5YiuxrWtNEY8Z8jU5nNSJ",
  "key21": "61UuLfoxbDBhneWo2rB46eUaXrYykeL7QA1v3HjqcxaeXJGHsaAQJtmhmM9SakGxdDfQqYH4Zwyfj557hsF9rrTv",
  "key22": "28JdwTVUjV9w7tUNfs2HpfsPq5sBpjTfa5rteE8soTJnKDx5rxmbLFb3JmYY33gVQg1i8RE1yxj4qKzzxe6hJads",
  "key23": "4xKH1Q3JgA1zR5HTeNdxzKvHSxLSAGKqXV8AttgEd8QgAjsqR7JnmLq6ebzyBLYRU8kPyqoAvLm9tsxogC4uqWrA",
  "key24": "316Vgs7Jmk6DgNFqoPbdY73Q2dhMqTkzFgmkfsAoZajgFiujayiSVrJsobXTygc6LT9cjZc96QdEzK9p4BAMf2zd",
  "key25": "3EHQH8WzUtJT8Ffjr4FSLDybpMkN1dv8ZjDNngArJ8ATW8mvBmg4hUKVCz2KAbyhSj314ipPTgF9FrrJ5HAQMeVx",
  "key26": "63N2n3PCeyfyMcpSNeH9KHRtg9gH2vriz4HxWB1fh7b4y5VQFfWre15mjKmioV8XAeCYyvKVjrAPck7F4knj7Ywd",
  "key27": "664wvbWMrMSxQi359HtNVjdy16DTrh9E9gBt8ptyEtPefEhCugk5QJ2h9mk9nmK86Z6u4CVNDhvkdrzPTxzRYzaV",
  "key28": "3WAkQrxkWrEawbsrrTc6DUu6Qg443SouZaLFmcHjMQBMUq1asTzqwrfPDkajnf6RdSRTGe8XkLnUrbmdX5XPfkre",
  "key29": "4gSyGpDNRBq86jNXz9cdafwPTFNyhyny4Aex2W4CPuhYDQGFqjiVFYa6KK9rJyoxJ9sQQoshLKuvFSfaNmhtASwu",
  "key30": "5X2CG4pjvAi1FxesA4kBFv3TZbizBRrvaUoDQs9egoRicZnNK7HAmhG2HAqUCHN4jgBDykiQZpq61urpV1wFV2DS",
  "key31": "4KZfRwVk3G9BPavc9uAfkvQtt3P4SmDqVDcV2mrPH6Hub4NnxnZZ7YK5tKpX6V6SiGR7x5GYi3QQ6QFWeNiXisB7",
  "key32": "2m1wKZnpG4QtV7hpVWW3LxKRrGD9FXPmY82eNnt1i2ZMGoD3mRfrSs578WmqFB7zEcXbQdYwJKRhNj4S3Wo5ezmU",
  "key33": "Qrxc6nbqcqgqYdipiyNQQ6fP5Ck1vQ5Ny4sEB5zATUAJKpfs9ty918CTaJsXx2Q5r4LmJ8SU7KqySUg5n8S4i6a",
  "key34": "3vsCXEHdaHTnNozWa4MhZjCw2q2LtdL6iKXSPhKiZDK28okzXeFkP3qQmjJwg7AX5tMuSgXF3twbpo5C4oDhZTNK",
  "key35": "2sXRUE64xZkC5b7MSMcDjXDT1efmR9yia86FT2VckTRYdofRnMtcZyo9QXebBewSaVjKcyW8ozRnj8bWcneNaYPz",
  "key36": "2Rq4Ux3r9pZGpf6BfSrGTRPjjtPz3VHFKqo2VSMc3hKfmPvbHM8df1Arrhc7DUH7S4CYLNE8xATkorKDYTyvnR9w",
  "key37": "3bToe51o7f2Avx4e999qBMwMw9QNhnE5xuNFNMvmFHFaMe4tuPVMgFdVjJsvsZCCFijVPqBHoHwpkXfHyjSm6wkA",
  "key38": "64wmaWVG8muBv9r1wM6PDqKgUENvfknC9VpDS99Ck6eYGba8NRfVXszQEbjGMo52rwLPWdMYE7tukH4t12XqHjkd",
  "key39": "fMugV96eTcvXnmKndi7FZkDBUgCnYW4m5ngfBtLgUKrRNwK9kR2UigZuQ79LdS4mwpH1gFq7eQipm71qC1K87zU",
  "key40": "4qoxBVxiKYDu6sS1VCBe7nTk1kAkucVBYudhDY25UTH2zqCisc149JdhF7Bp2TXJq8aZfQc3ATRN5ZGrF7U1QoDe",
  "key41": "2Fd9ZXWL8hzmWu3C9ioYgSnE5NUCcy3jcCKpDemuQufM3QrGZZXnBzX8VVf2rodCVXmCiaJmk32gLnZKVZDej4VY",
  "key42": "4f4LNAW6Dv4CVhztPscLTPC2fkqy4R6KkECVX7ZVfmssNJaWZrchk1ZgXwxDcmZ3CwWiBHeoTFta7LUBkiBVT7VC",
  "key43": "3dmkebCczXZrtiPSqxGX8STpHVWaMYYrKqLU9WPxbASo1h2BC4pCRuU58WhBgHdssp9BLLMKNHL4wDVvM2T1WUz6",
  "key44": "3u36BhD32RLKHzbYG9DxMi5RP4eKR9nNmoZwjLn521hByJu3D9jzduxTkrmijLhjjpGMS6BqGLKojn6cWS2ps3Li",
  "key45": "3mMNX1KC729iYCBmWzGUvtFsb5VPYkg3RHoUkvvsaf59j9E1D6wEngGHfGV32kGX7zxMY2VLEHbptZYwyWiV9UW4",
  "key46": "56xHxkQubWvaLrFzAvqUbT3gAcN84o6EHx49JwmhBA2vN2Zxby4y28qY6Tg2juQrkeEbHYGB5VvL3qcEKa3zcHQK"
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
