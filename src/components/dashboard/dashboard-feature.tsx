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
    "5RdvYGuUicJQ3HEsx6mNA7L1EPhzQwEnm1zmG5HYiAz8CSovqS2Q7sc6HDRuMHYRVhUKd6Xtg5p8hVVB78WQmP5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNpyzX8ru8US73WTCDaX1BTTjLRHtPFQxuhUFvWajp7uxzTrUuYpPrzLPTDLG6GhxTJtwr14HSTMirPGRb6mTyc",
  "key1": "627d6WoiYAeB4HsqJ6JkpLUjeFnoUv36gnJgy5erGgB9vFDMxkRT8STMDzRRmQ1oJHjiqoBLWPyofKcygEd3GTiF",
  "key2": "3tEYBJ65eNfo4N4m5LnZke8skUneN3kjh66hZ8meUbwUrLk9EPQ7TUfVCRDVjv8Ts3aynY2JgRd6oLCNK2F9z7y2",
  "key3": "23HTWGJ8covZQH2S72b3Eqhwk5WjHSEHfc926ytmzB8Nkn54svBfd6NeSXjmAwjLMq5PZoW58GhPFzH6NB5yr4xH",
  "key4": "2KPRRPJKQaK6E7F73f6dwVdJuHVGpKQeBQWX8gCrwcpXhX6N4FwJRC7x1Pw38MciuEY3cbyNSakiMg1u3XhqQz1i",
  "key5": "4rYRQzrDM2HZeGC2ftBzuSUPRfSX5mvEsbx486GqZcFv5qLy2VRVHPokvds9Jyy9iRs8rG5TPMiBqeadpYAJKCbG",
  "key6": "5HS8qu18PfQxVUZu7yGVRma2kCXS2N6P6s6CXt6UjcbJbtgcvCM4mVHCvVU2e16AgbLDqRPphmXhiH9QU5UC1kSr",
  "key7": "kecn1wCZfCoo46GYYMKugJwFmbbC1WiSF96NiykqJ5Gkq9R1imLYAEhDNVAJXDwoneJqKzPX8DtVyehjPG5BTXu",
  "key8": "5GN5T2PUozkUKJQuG3Te8E569dvCMtNAWzYMFxkQXT8pbmWWJPpPF4Z5sHCriSmd4JBjeoB2gQGro99yXkD8Ffjr",
  "key9": "23kbn3DuSjZKKXNYu4nu619z74QCpbmQvGg3u2oHoZ4wtj8XPniDujRh7i36p4gx8asSHxbrZFGWxcPAbU3AUF6y",
  "key10": "2c3i96qic1M6n1R5fRiUDC194NrpARz48cRqU47mRdsY29iYwC2wzP5xmvSPuUrGvxbetb6qANLBibfTNPAqAv5c",
  "key11": "4u28DgqG7P8MixgmB9M4AsNGFceY9AoDfyrTCuWxFL7S5cnJyXFGxfLyfbuadnDYsU56Acp23bu44ck4ZmNfQfhD",
  "key12": "sN1onpk4CBWHueuWg2EdVSCVYRz2EPCFwKK1KGBiSxdbbW7ij9EsVoeB8Eh3rBmCvG12Hzh6RjcwdBQhWEAoBjj",
  "key13": "4X7oG3x9xvYPcwfFxdBGzpyahddMCifhhMdehzRFwCCQyqoFCPUGCbiVEUGPHToZ4KfD6Nu7hVz1fTqeHGAtwPJe",
  "key14": "3DV6rs1H6VAbgmznTMuLAxduwGRJzCuEWUmgceZuHUrQmtTzzEFmYe4LFGZY9ofxdVzp8ENPgEzreZXV3YbMAeU6",
  "key15": "49ZAs7y2HAhbZ8JRHTiQ6L4CVs9H8FTsHDcL3PG32qSxtdLEd5pdBsAnBQwUtfUS35YygRXvYJWMn6a5Zuv9LKCn",
  "key16": "xVzcNcDxqXZhrH1XhGQrvVssHUxxVRL9VarmMt73VZaicENRMEcjhaKemVb9GqpnDg4Tpez2BWjESGDXUpfUSwg",
  "key17": "omvDUK8eCHLQigHeKyf7obrzeHH5zzU6uTeu2pFSbAVs1ihGG9X2QkyTYdxBYWGB98p3hMxez4a2Y8f5ZVuQTj9",
  "key18": "3JPranA3EovHqWXWhWVMAXVpqoaN9rnHqx8AT9YGnvE9HQtZV8xutWZXgJSgmUAVztZhRvsQsSoJRvhzab2NDK9X",
  "key19": "5JCzZdsAwukMKSY5KCX91VCfzk13sfdRsWpdm1HGpbFWnd5622JRxMaZ1xeouvigLPSxhYFiGcVSLR56D7wuP4S5",
  "key20": "5vBdpTmwfUgQBWFes269zVmdwsL9Fe7Tsx2x2h2WKfXQ1oXpoZ1ykA3hanVhEpmdU6JMDh6BwRgzHWsRHiyi9xv7",
  "key21": "4c3dDXVZgZ2PqDDqDa78yWqJAspbCi2sVMNsLr7jXWNCjT9uX5c39Litqq9ckfma7LaHpySS3fEoGEpAEMd3HAmt",
  "key22": "kVWAL4a7WKPvjgsWc9n7YDdKpfR7Th5DMWTDStaNTxoR3y2K6KPYgvAbNp64RBkHCRChz1ra53a5oNjDdnH3dA2",
  "key23": "3if81YRxRxNCeyvCiu4iKk2xEDpyL6EFCGn5pbL8MZWkHvKGtULCSL2pSiiDtGkBkPjXfDpNxiYBHxrS3Pdiah5T",
  "key24": "UEb82yWGzoHJm2jrkpuydm5r74VNPsbjv4spauXZqDWpGNYLsuqbgQMQyhq9v1dtRdr3tvB4iZqUThX3A99BUGo",
  "key25": "2yJVDJm1beQWxJQ2dTooMBygjV9G4cNd1dQuhhnxj2jn9FnTzLbhg4c6gnvHMLH4j37Aj78JS1mQeubAW8dTh1nZ",
  "key26": "4SeNEkVk32k7SyptiM5Z37jgREUfiHY6GfpWaeLhyH5evSrjXT1WjCicVWA7HJFdFYHMpy1Df9uT8juzX8E5q4vD",
  "key27": "4axPtSwsFhNDgvRCq87XdPGsgjer6MeJnRgmXYEhHUbPtdQQS5g5AbnZMz1ZcLF7ZDDFDm6HXmDcsNa6n5S7cSDN",
  "key28": "5T5CtfgQWeRFEXsoEXy7pkABR5NphLewNVmk6Y8MiHQypkLmmEgxsMFgFsSm5ovnxHr4muZDCoRYH218zStrVuL",
  "key29": "4PLvBxtZp4958dtgRm5Stq7bUV2BsK8yJG9DyjnerMKTPdxrScSEDYYFYcAdNdX2pq4q84PQCvTkYpv3BjPKC7By",
  "key30": "5xrujLFKtKjDGYjBz1XbcUG62WwypJsFm8oJQx15iLbEBF1FafTr5WQDGtVjRuFi7xjvkxrKAeyY78q2YgxsrEBQ",
  "key31": "5JZ6FMGwYBrb1GjaCb51rzaf5XgQEkfkyGQiPAytGw7qiirWMVCTWWn5eJxJowHGW4ut2PGcbQHfbgWN852kPaBX",
  "key32": "4m3FUK2KwQGPAPcL6GQWCWeT3VMavVDSEJCjFWUwwm9c3a4WaffoPxDoiCooKDJM1emtVGM7wnmi4Y1vrYofNbe1",
  "key33": "zpBfGP2euphezkCZBdykMSjW1h84yG1nY6HxgXwzZCcUPUTvDobG2nKmUXQe4VyZVstWXdDQgiuDHbYtBMXwH7n",
  "key34": "5Ch3f7ugjSdQCfAkH8S1eHAEFBu3zpezg2sAURYM8oEpvWQYXV6DZ2iCfsrS5LTLEudCL7xL3fi3oZhQa6zBbTUo",
  "key35": "5p9rPBiqGic4WyL88x1A5tYivizpwNdmP24CTcKspqjxwC53LFapoqE2hREhZdsihkLzd2dTuE3rvYUa2pADFREV",
  "key36": "2kCPYZgnRRfpnTCVSHhndo7emeW8tgnaJ1oBS5gok91FZRf8GE6tB76iLyBJ5negYkLhy7q72LkyiBnp9HNnFwJT",
  "key37": "65n26JZsK7dy5cSMG87CWCqQBYcwvJEbqzP1G7qNXY6qKG4o4KKjhQSEtzd1jt6z5GJezEBNGuwE4ehFewyoQaZW",
  "key38": "3ki4PsrkwSqZyv4XR2PFoNJzDMbjk6ix24myx5dukgEfwacctmZXvmdKsU4C2FpRseVnfitNY1T88yzNWxqiYVGi",
  "key39": "2Lzc47eWeZRFoqmWK83WBckLNB28YNF2DzGFtYMCdetpYUqkuqYbfKVkGEqMtKipVznBb3R15ooXQ4kqSLhoR1yv",
  "key40": "3HgG3WjZUiqzv7nsQUHZ3XpbjnjjYPpqQDBs7hPHCN3RJBGhJyE7MaUXFv7GaeVBsheXJm2PRXa6ZSz9CsLVndMe",
  "key41": "2FH6QEUQdgmt7cRyH3JzJ9cgKRPaVCnjMh9CBi5R2DjizBMA7fgmk8EZtLGjKXiwVfECnqL4KZdA8waHTyDhZbPU",
  "key42": "5hpTY96P7oRKXvLE3Z7o2SY7x9gMkPTQksBiNAHfivSmgK8ienbhhippLBEH948Ao55W5RHnCd3Hg9Sm6ZEEPzfX"
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
