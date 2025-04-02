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
    "5UNNCF518rn6Uv3KqRaNk5BnTbw3Rrd3BZtGsFoWhQHEkrG3pbAQLzNFPzbVMi4aJPqBCPkpexhuRXuzjQpZrjng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWJf88nrAPoMjN7NsTn33wJXhnnr7gfugaEpYdQqxDAzzTzax6FJTp7HsNaNuXRLRNHzQ5QN29xun5BsmoNqedL",
  "key1": "5VM93GMo9YVES8VPacYT9yhZELvBm5tY7fkdnFgtyU4L4SLNJW9s15EtcWR8iquunaVbGMANhtkLxtrFZzHehP11",
  "key2": "3oSooE1eb6oi8Zg3tffkCg3CekPaTNwmd555MGUqDLsSppdk2titb9jCqDzbKkEvnLzWRxnSjcNa1acLQJznGi2u",
  "key3": "37ktqrzYhkXbdt8DiF9y3scmMocHV7izfPKg85P3XetgfCSb3dZj8dFfiJRLWGkKsKPwo9M5gAkE1MQUZzDvPqve",
  "key4": "21HxyeduMAL761ySw3w2pzJA7zhareGdH8CpPt39mcv2uPJxZr4aCn5cnHZCei6Mx2UMSgojS6GNgtYSJ5FxdfgR",
  "key5": "pGKZZDC8ShehaHm4He6VaErMjygLPo1DgLZy5hH49RnwEkspzsUQUvMxruFyyRmAQDi9ApbC7BdGYtiUKfd4fux",
  "key6": "312X61sFr64MSsmoQAhqALadkrwu8p377KJnhRj9vrSrn1yYRC7p6hxZmWn6iMLhw9sUPXAPWdGX1Hq9Jxc5TwmM",
  "key7": "51RmpHJfqi9UCGUHu7kWFabtoq3GqofyckwRW9wnmRxm6zR8MZupwUerHsZ8C3SubXgUv9coeMeZGboKgVLWuYao",
  "key8": "61EUMRoHNxhJq8BCuJa6JWP1yL3t6Je92qn8HvRxqEMyNoaUw5xH2cWtUAHKUbqhQ5HA5quRLTFD7eXssSkdvSso",
  "key9": "2ooc7qX6wUBWAjkjvLkfJGiJvCCHYwQbzbaf7WP9Ato6Ddy5t2gJmRiqXeQiZpRchPeyDhcrfHM3kmCfoLiLRQBm",
  "key10": "2TYxwYvdM3v5WvYtFskxATaEmNbAJEUr5vDABQMhfLnUKZwWgK1eEEH2utQkyJdxzvpMyPXZejz7sFBVBqABzXVQ",
  "key11": "5gR1xjqayLXZsTqmLPuJPkJDtwp7R1TUKVR7mb1gybXxRAKiQXf8GV8DUzEwDyAuMPRC7F8ZzHCibQ9p7DHPebFg",
  "key12": "4NvPHwTM2qmzv85Yy8D9iE5PJKwT9pporxJKZhccVd8neBnXGCPs3cy73mLnW3PjxrymzeUmGx9Zsu8b6scTbsV2",
  "key13": "7zYT9qNaTQYPmTFq4S4bFBP7AhCYUmCkHh2NUoPZMPCVMt95rgaxp6RmMR9GkC1DDPipnuXcHASnSYtd5FoBQRB",
  "key14": "26uvjT5FUm9Vzgiqk3tjtjGyu6n3N4d7jDdAz1U8g3P7MH42eyYeMbHP5vL1Zv1JRyL9gc4BN7ArEUnERAa4K6mk",
  "key15": "5H5XPLTWKq5zTzK3JkPoyPQxRkBvrDMZakinxdmfUjPkDp312c2rq3Vq8KAitDCb7x8Gitd27jQn23LWpuoah8Zr",
  "key16": "5GQjcjHnRfZQfoKw4FBmauyZJdQKA6DXkuxJy3F4NGu1Z29YxbTKQjp43fynh5a7YhbpDUvtL1GLwiAyeX9ftHBN",
  "key17": "4A2cYkCoPZsiHdWrALVV2afKfGQkquY7oY2Nb2GN81yqh5MwCaCdWLdWJPFaS5jo22EpBt8wWBHVVBUt2HroVnkt",
  "key18": "5r8pZkw2diZafx354ddKoUdLmd2zK8g6QPYU2tijrGi8tYcbZpDxhNsnaVo88rERqdFebm1zFYroepo34B5ggTvB",
  "key19": "3qsF9GwASctwYrvNuLKwDkzQhBvY14h1nEjZkefZkLSK3L8UHQ3EC2mBuBKV8UghCHth7V4TDEtHBYs59XzDkiZH",
  "key20": "3XHimL1cYnMXGEBmRCEYCAqH8SmQAmJizZjFytdceafNdLgxYFhGcqACWzeFhx3K56sW5VsJk1buRZ7CqjEZ7gQU",
  "key21": "2p28tjNGzJpk5xVeLarNLaQncDAX3Lmy1PTgaZs3GKxzDLTwTqNNzdfWL1HpjUyz43hV6iBuvrnZk172zu2gmTtY",
  "key22": "5MUvMD9pqJ9mtCvuLKyD2u3TeotBAfgqEbnyF6USMJNQjnzcreMFpGSNWLvU7nnShDBDwWNiUmb6fZ9TsQsus36Y",
  "key23": "3dcwFtBfWn4yh36WLTNTB8idR9jkbqGwaiveN2PyeATMFVo7o1pEy18Riq2FHVzDJWqq6Tu2nSkC6Ybm76qC8sSd",
  "key24": "5qUvxkmYx8jaT1xaWuwrJpUfbNPEPSnho4hDA4nY1YbALNcckfCoSm5Y9xiZPVWPXgrde43Q5qJDHQFfYisNJ3Dd",
  "key25": "2SLYf6GLjjsttUxZNG6cFGaJByKHPTmJD2WJ6J9aBjygbgBKuRtDMFD5bvrEwMTAzVfjL6znRMpoA562BQipwzsv",
  "key26": "4Rt4EqcJA1vZTXisW9R9zrve4J75oCeUKqtmmrtEkt3tUDMDDCWDzmppVdzVo7cAFCbpazLmiLvXDBfptqY9xsSB",
  "key27": "PHbV74Kvs1kkDwMQRArusijFv1Sw4gZegxRJpi4KpbjD4CMv6WFdKbEx9yPTVSorLefc89BA4pHiED9WbFh1Fwx",
  "key28": "6QVRwyU7s9rRBCqBVJXAdyAv13nMXkia8t31Vj3gzupGJ6Yy9hVWFtJpfY6mHRTCZvKA2cYMqkAG6vRRNAJE7bX",
  "key29": "5D5YrVzpBpJe2wegoj83TrdsuXdBe9hcJAmBAGQ1G21BdDdMVwCSt1a6MXC7EkgvochgUZQaA4X8j4iFbxEza6aQ",
  "key30": "QjjcUbbHYQaM1JP6QH8RSTZdodUdrHspFgMuCkFViWRETQWxL91dEgW1qVA97oxTm7QGEJ6Ge6ZDX1oSm75Xz61",
  "key31": "4MBV1wR7h1wGMGwRQtAE4YuzwxmZEceQYUQz29tqaGUaoSWYtmnK1ZTKGNtXsh2N9UCnf9Vx1zhF51aqSnSm1nk5",
  "key32": "36pS4k6CSnaMsUjsLQtzumCXgQUwdiLB4qLo4nuxz8HXdZTWKFGeG7HXcabT5y9RZs6Gr5HXnDwFShgP6TEsrZVf",
  "key33": "4je86BtkPhsiMQxyxxJYeoRn5FNWvQefaJepcFwQF2WFpaYyn6Gr4RnhDj3jfME7EFccXE6RVRiJvFfHerADUeXR",
  "key34": "EGk5QHvkZTjWa2cKifFAXPWpGVsuuzY5rxF2fdNc6Vo8DXjF5YUxpSxF9ny52B3ixvcNZ76C5FS2YyPeFLhgyZv",
  "key35": "3HCnzfR8TodSduEK5TMBksyqhPpxDpgdDjVXgiE8V1SXjzSZzLjFQ9Punq46KxVaaDX8Q1hwyPJNaBtM4fJreLpf",
  "key36": "53gx5xgQshbSpwQs8qMtowgyFFGqqYjbEVBJXUWRkvMUwJUBqvvjYDJRg35jsAAzHeqzwcZGc7ACHuU5zxcUooT3",
  "key37": "5gTAiRw8ACNd3mYX5iBRdYZSBVedFJK27d96T2xxUDxSBydx4aGVY2RCjUcabJUG8XCVD26mcxgfz1Z4eTdqZKEF",
  "key38": "3mRpnSW6qVPrE6hRTVEFXRbhshaqB3cqQwyJZT671oxKAB5qR9GZ2vVuFyio51CaWZKGUw1R58dDo87xxtXG34Vi",
  "key39": "4sKS3B7CG6A44AKu5J1bBM35LLfjLmuMXVtzCsRiET4ZVJhFBckd9Lgj6Tg1kWz4rXLSrc2m4aTfgUYm5UqnLzTo",
  "key40": "7YpATDW26um2EBf15DDZhs1JvXMYgtE6BRYgjndfWQcsfZiYp8mLthfL7x5vGaVrG1bWqBCEPz4w7tD6AvakNSM",
  "key41": "62N6GQcLFCqMF2P3xskvsn7rcvKtDQnT77PNajCMDhBni7MFa1JhHrkftFYtu67q8aUwvoDJVi3SPMu6uLGcpkyv",
  "key42": "2cUFJEfdpuuzYoxUmMhHXFxA5Ce5Dm1G89tKR3c4hCLiv5QPByBXuS96ZdphnoKZspvHmA3jL18wwHxGkyy9NR5D"
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
