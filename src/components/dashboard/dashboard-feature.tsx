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
    "64mcthHAhUW2QHVVYb5iHLvxJ6DG3iGFauhr4bCWymxh6RnvDpRWQDfqwci5Y4u83Xv2A4wapm6Xr2haDiwJ3FpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exW3Ce9cG1SRgynqtKkCP8Bj2o3FtPUmrnhjwNzzG1nCgjepYjSVvc8QpJA4BCkcqMQQtWUfaCUP7P3EE9ug9am",
  "key1": "7B56eD4AEoZvv61KtxNrsYgUPabWgtRfBELi59TaciHSQiAsW2r63sxbEgyLv8U6zn1hwSiCFnqBVNHePVzzENy",
  "key2": "3LBPPS2gRKGwp2sns6Pf5EBVo9HHbdVPKrWs1vCh8S8HK5rhewjsErU5G8e8hM6Gx5P98QwEfcYNfyomcxx6dZTn",
  "key3": "5a6F3W8MwBKWJ1tX4meLRVWSnLKYEapK31fwfiWUcY1k9kA1fDrYZXrv9LC8jLfZKjWVNaGW3bWBqWSosDe8q73W",
  "key4": "2TuvE1mquYydeSDiXmzhSDkVSz1Cr8q5aWMDTEko51jMZKYtF88Ru36FRUTqEaKTYtsosE6jAGMp6qvxVgVJG52W",
  "key5": "3vWG6sGQW8Tbt8dUmwBDnwsBjh2PJhkqhjzx6DH8HUF3QjF2mzNSCDnUzWJ4decFy2fczc47jLt5jEpjDehqksNz",
  "key6": "2PHa5BLkgtfd7Ej1w6Rbd3JMDYaAEA4b6jr1ZsjVVtC1vysw4rzxntEsK3TXb5wBWmzeN3m39Bm4kZvs559R1uQV",
  "key7": "3jec8XYCHyGFVxUFCGrkAYC46sEZNgcgtZiemD2c5tTQh6eu2FtyidvefMqqvYkzZZeBX41pvqgWtGN76jcUw2tR",
  "key8": "5eX2dDv9gfSrsE9S7Gb1SDfW84SMmx4H4p65cbrXzLbf9wmhVjKxBd7rjKz2rtfrWDyDpaSps261r8W5A7jvN4JH",
  "key9": "3mUQZ7kddwtgaKV2RxB6Dro8dWbMahznjXoHgzHYsNRaXQZNAs13Kxa2AGnNj3fUuhAqUBwgoHCvcUoQgJqbPeYT",
  "key10": "31xY67aLQvhZD3KrzkbBjoCgjnCZ7c7PDSk1QMwPhpKrfS2ZKueZJbShzwTEaiSXRe7RuBFZGaGNq2sji2Xs9hng",
  "key11": "2osfu8eKvp6KzxgFkK5Aqmq4viRUP9Va9kF5F7USqAeG1WfsA34eG2sUYiNMXEN1EZvAnCmfo2o2WCU2nj1VvCB7",
  "key12": "3JH1gzDoUngnmicoUjNE2ZP5SnqNwe9obbJNQ32QdZxW3EezDjNwwtcLUEMo9YTzh3sjuLg7nYN1uLzFa4Qzzkm",
  "key13": "sJLokiakHuH2a4vYKtmRAPVPH1p7ENbt1UxFxGybb2u6QnYZX3HGXkMdLbfXRZdb6GVwMEu6Tapv8ciFcHmM7Rf",
  "key14": "5TL8M3GnfhReRb9vTFZniZyrTGjg1ixcP4ZQJg7MH1hpcmDLRG2AHNJEA2mXeAnwmD4sPvyMTUhYCB2rm4rPZZrg",
  "key15": "3yEAKQqYwnBgKNBkT8rvQJ5KQiapTBAJ6mYY9z8DvWPtF1fd2Vk3y7zgP3aNt97C1oKStev8YbxhJQCENJBHWaGn",
  "key16": "4Xh6D7zJb5FT1xkbZP3NTmFdLgHW3HLEqKbvNd1rruZ7M53pEu9pVgqFJxW1MfmfcmGq43wydDT1iXuvbxnXMeHf",
  "key17": "33x77DoyTMetrytCat8eNWLcGeZsxMGA3p3iSDraXWjxnUn7QqKdrgB6RV7WMvcJdLrvbWfQR7MGm69cqTv4QVvV",
  "key18": "4uQjqYSVQT4Bq5PYcCwcCjqGCkb6hB5RoNJybrNFCudRxwW4AJfEYwu54dpURXPBQfaq1YwXeL54CcAZeNjk22ni",
  "key19": "3Z7HtA8rirh2Pm2zyB7iBvEJTj2Gn626R2ujhbPXpcTgY9CUNXGrQ2a86ricAL6uRWseDAwMwASy2qcFwCZpch22",
  "key20": "2qG1j6tWvsELmDmj6rRCdVTGRr3gyW3XMbRq7V5jmdVnTueLBvgftSds6aPwYzwBy6e1m3QgBE5ewtskwuEPsbWD",
  "key21": "MX87Gc6TWgWMwve8ircy9C388oN337kNhdpyPTLyA9SF1CmSAbXth3iP4DRqj5wXuGCfWf6hCXUe5RyRMKMWmkS",
  "key22": "4zu73NJzLs2QrtQLdmqQTN2GK5amweMEgcTVTx3K94MkqcSjHyzwtgEyRDnhL6XWrnsfCnCCkaQQCBNwvHJRcdXP",
  "key23": "3E3PAfnwZYUXxmpPDmWkRoFEjMhPNQU93QiUvK8Gso5UeEiarHCSyYymYMeRUivuceGS4SsK1g8QDqnJQFrReyHj",
  "key24": "jWNjZJPcZPKGNuLA1ByDJob8vYXKxChNCzwdQMzAMS6ihyy8kTbUoHwotyDNt8T4zDV5uzbwV3A4hyzUvscdh3A",
  "key25": "3yY56i9PdQNBYNHiqDYs439C7t44yMxkszMEs1kDkyWGRgYUNjLHr5R3rXhT2uxyzos9GhL68sVimq3SbAYmcJUg",
  "key26": "4ec2FygKHj1q1mcygwYMww3xtQQwxfPbzQGREpdKtn8mxycn79xntXhnsUCnTTFKnPswV4tGurJLzP8JsPpkSqPU",
  "key27": "5aM66hTQR6Zn8pvB4r1yFV9pZqs9vnKfdsPNiz3La37rgqq54bZLDUEhPCLB4wqrTqMRRrRzpAiMfzz8LoZkpzTL",
  "key28": "WViJfWhUvzDRNQNYZZyFtJj2sxJvPrsQbYSMzWEsZCNheFwwp1P6z9owqdMKMx6Gf4UM7Gm725XxPG4A43CFZL2",
  "key29": "354RbhMaiDbXNNg5ufHSc8STeKmb3zBMwfrt4WXv6SjsYg9JPjiCgHD7JmT3ew9C9BG4fJV8ThWzmrkZR35Reu7g",
  "key30": "25uaQntMF2tpv2qB5jrrxXbEDjfNcm52ap62CYPnwKTbPL6nwekNniUXQooehd5RuEz3DtRuur6wJxtaWsPCYAjq",
  "key31": "4KCGT3d1Mc5aHGJHwKbFPDH5jb6sEZvS7vizVweVMtG6wXpSayuuswG1TctCFeXF7QPkk9dBzZjcmyuj7YAYJwpb",
  "key32": "3dNvh8e2DKXtXsevoaURzsfYQDfWE8wdqeWUTxGfYVJKzSa26nfb49Ji2MqQwQPW7NGoiiLwWkSTHNe5GtGnXN5W",
  "key33": "5VqfXMGheHAsYD6CxqXVjgCDBvmRcL9yDCfrrsQzfu4WALbT7HAnsvxPY4UYnWQSmMCTxtSfWycpXcGTbS9jR83R",
  "key34": "Twe7HxXxr33vCC6qoWvaq4pPGiDkN6CUQwQYAhaokASKmyKbBJCcAK8xwN6P5LmPbBAnruwQsNpVvPMvLpAtWPE",
  "key35": "2oW71FQa3QbixfNQ2o9CGREbRDzxdE1fqkhrLDHP8k5xz6cKF9nyAMwAtWwY7avjuWF7vbg2HZwWjMRZa7ubQsxJ",
  "key36": "5fjZ5YHZ8mZXRwNr66fpwm2CaqXJMZ8YYoiRDV7rV3mLLYzYQCcEQ9x85qUHWba7RKfGTjZpTDwRBbETKweFxP6F",
  "key37": "4TDodafwXxzuCENo8199e1jVXVVmzBq7ojvVoyQ7S1Cw2nDQPvmGYCo4XUAUf9jib3pZwLikBRq13F8kofunRmw5",
  "key38": "5SK3faqPsZC4UVPUn7pw3DmsZPeeR8K6r8Tkc8rHSipxnARSpXHxUw83ydmm13QGLmmfRjEuWmAwxDaQRnUt62B9",
  "key39": "5yh4cP5VyibfZZeUvAmxa2CWC4ro1AvbMiuaG75XUtyM7ze6V2REG5TavTAK7zcw8D6VujntGwvJJP3qTHpT2pBR",
  "key40": "2spikxiGdZ7ejuzcpc3KLduevxrqWo2xak47nSMaG9bJtddQSB33h2of3Sq8rZg6RbYLz98iXnJ7Zkj3TULNtttF",
  "key41": "XZVWpwcCAMSR5s5Nb3U8aeVHV3ZK2WbgQv4Jjgi5Z6DJ61cuXhyGihgKxkdJ4mMcfERQFGHZcPDNJE7ar2sZvXG",
  "key42": "5LB7piJbQArZ6wCoeghqUYtYKUvfkkUjv3E77L6J5HaCaPXE8Gawju8vJYqycatFBTECdNz7G2Hp3spLqafFQJNt",
  "key43": "233DYKx8x8HbpP2dhNqYkNSGkNjEAkj52Dfvpj3UgC9HMLCCNZBE2WyuxPmqBH5RnSTN9dfD6nKZBy93qVVuBEWj",
  "key44": "spuhsTb57QGS3a9wv9RRxg7HpDpfPUV8pex2CVtzebwX5dAtaxQMBBWomK7we6AvfStRxhrq6hg2z6MdKdyjWC1",
  "key45": "2AcS6pQwWtA3mRn5x7fsv3TYjQvQL46vkpbH4BtnWiuobjbc6uxY7PGVC2amBAfbqGdgWqhm56AWMawvGD99TfXM",
  "key46": "5tAhobceabxyKgZTMXvd5KtzXLY38tzQALgGDWMUKcniomzyqUBsyyKU34uyBGytyM7kmD2DXeZXo54VZUUe1FKD",
  "key47": "viXv2FTs1yMn8BnwtReYEQQLfNjDXATQP5avNQy1TtWHA15d5ZjrgKYy8LguYyUf7wYaSYxPHgiDVtGqMvkPa8Q",
  "key48": "31UkLho9bPDYPdxEtiDuqzHbapTHC7Qq4ep2djkhxx2JJpm8BXFtqYsyNEJGhg9YqGnVu3Bx8LGojVR2yFptbDGo"
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
