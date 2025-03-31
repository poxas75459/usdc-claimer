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
    "4iZCpkrEC8HmAbgaWi8aoePyvJbRK5DAy1mXm5XM13ttEtMTXnYy6dw8QNH5mbDZhysgqKUQay2htjAojEVxAXuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwBtw4HLuS24s1mioXv1AD1yR95pyvDgeZGqLNVdS2u32mTfQuoAdzecwjcdVyEBqVBUutPQHDa8jpKQXG6LhmP",
  "key1": "5cTtGLUGRKx5tZf8Uf9QCfc76MEgyP9Mo2UqQsF9Vtm2d4jYAetzhu7N6xfgUdAzFGrUHy5i1ZxDo8nkHTeMN6fp",
  "key2": "2q61yoGT1PvdDByjZaMDnvh4yAvvtLtogawoRpq79kb9rS7Fwn1mGt4N8QpmfKfwptHAR25JvXuFCwp7qngobD5o",
  "key3": "L2CMQPCEoae13qfr5Ksp1gLpyDd9nt87NaSLBRsHtbPo2q4Es9KXqJhBSAUQwku2xxCZXXm9iZFeesToAHVwgGa",
  "key4": "3EKYdJSnk1fE1yqg8Kjf9SrmrDA464BTN6y3chLWj9YcnEbRbKnSJHYNEE5pA9XELeYzF7zD3wFRxBPeadMBHQDL",
  "key5": "2FZQRGJQhPHakfh9k6CbW39bD1L8e4go1wRcNeUdR5mEoHPbPS5kugyUaShMBcptxqXSvWVUFC7zB9QSc3FR6N6H",
  "key6": "5ezYciRDd6kCXbVnZRZ2yU3urPnwK4e2REgoDDTT5HZAtt2ZKSrAFeEumYz7r5M7xqKrcnSCpA1d9A2SkULeehaG",
  "key7": "368Ds2FQ3Ty5bELqh7WDZa6B6nKEKKD8AcEmvnTvJ7bhHTqnweeZ58Ns86U7Qm3EYA78azm67wyyVZXmknAkbTJ7",
  "key8": "2S9Znf3Crz5zXb6me7qzWxnsmebJvVFinvMJNNfVKh7W1r61oCt6BQZ9KmBG5CZnuBAUhdvKRWqrvKV5Bw8pDjLu",
  "key9": "3gzkKe7fZrBupz4r1zDUjYZLjoFbjnPL5CMg1ErJRyrRqDTRwHKAgRiCPBR18H1gNAe94wefQ48zdKpcS721NuEA",
  "key10": "ejqcaxqmeXGxkEjbiG3XpQyBKDzX4v5R2eB3iLajRUEsrAf3qxoPZY3N7by1dpFw1yLPhQEv4qZVvNhqPrMdFjb",
  "key11": "2X2pcux8NRcM4AuZyGCyqwazd3dvxoDFjkT4cYiCDFMtWLSnm1tMeR8w76yk61QoxpAgjA6pEUreQkq5pPpqvVC6",
  "key12": "49bYXWdmexQ7s9KzsSDR83pHEjURes3s9UPWxgWSUjhKcNwmfbmXo7boJRSHBpUq7NWxYdJ7nEA2gh1RrHSnX6H",
  "key13": "3B2m4HwNumK4Z3rhQf48BXQD59t1pQuNuH8bYMNa9RMvxHoB9QWx4VueW6kriBzSstxjEoXTp6KSzLLBVNjFQsph",
  "key14": "5Z6jqNJTEw3USmRq5SKmu3nLq2ePnL7XWWCmQE9wLLk4aRrkTynaeZ2FUH9LAhndHmdR9ebvX1Bojz7yLjt9unNM",
  "key15": "4NWgwTeAmkThNmMdVWGxkseEKtaG8AMB6BHKFQG2wQJ21J66PjAP1Ba8vY52vQ2u9vCb75AhdbMSncATGh1wMFxR",
  "key16": "2vjvjA7waV5BNTGiJfqrYkdFQ1RUgw5XdMsoGEK5iNoEC4RtEqAjRYxP2nMSSpcX7wU5NUhAevfe9pABwLmBTBkw",
  "key17": "yjiSWWyVQ3oFjffXRAwQx7a8i34kSzit4Aqqwj39y6u1AXRTo1hBgbMq13pDyVjPsieTtQ996CDX1BQJRgKNqTE",
  "key18": "3Tz8ySXKhctBmjcGifh6opEVLemBn2yvCC1cm8BinE3xToAdTsprYr9FS1UvXUB3AhTS6p2sLJLVXPQ8wZjfgsMd",
  "key19": "j68T5Acg2zFdVtncEc4n7NmffsMvQZacQ8jJwzhsXnxiRqZSZio5hWyzMZEF3QU99fkrm91awYw583uLDsVf6KP",
  "key20": "2viZpNFNW6kFPLrCjxLrfRLTEztHpbvFK4ZRa8quR3cdeGE6FPMugDv281CoXkuiP6LuezipFiZxzjgw7RCGZFcy",
  "key21": "55d196r9rFYyLPDkJizDHGo3LuHanotMHKkYPPnAM4TEWr9RL4aKtuRDHeeGdfuVruMARW31WZgGGE8So6iqgye5",
  "key22": "AcFaU7N5KixaUG6Q92opeyGf2zoWWSJWebhQG5BNLbBSeykn6aCaf8nzePkeUPW6F8WMEg766gJ3rvkgVFmzdAy",
  "key23": "4xZiMwLEUdEc18XGaB5KvPBi25161QPDc8qGucBPQvCBNz6jXNwqNKK1jpjXxJaZJJ3BYBbtjGk1s73rnBp2ShZW",
  "key24": "4ZFjZQw1tTrSfZepMx93yu1JrgvcgVKdXS6jxVwyGRvSRdDVixiu6eLNBjHekY3zQ3DWSJ2rRTUCyy9kocAoJWzm",
  "key25": "2BgPgWVkkUKB8KUupeRqJ4erBCGivdwZbGWceC9XeiQUGZjyx7FCFM2BjpBpghQoJttHLemqdr9dFsaeEnzMU6qw",
  "key26": "2E6sLyAFPrV824FE5qNs8Uckgn6A7aJamNJJ2v4t99x6PQWNya2XbbEUAfDwnkLQd95uqvTD8ozjose8LvE7wYQY",
  "key27": "pdj97jVFa9qvJzSwQhYS3aYzxwLAFP1v8nj9G9Ecyb6YDNvA1WbfFTh7gs28wPFGgTGH6BYV3b2a9Ti531EB7PA",
  "key28": "5kzctUE5edVxP5hDsStMRihitguQrMtsg6hRSdR2dfEmvXzhKDdadJkmoTE9aGuErGrcasXDczZBPJcS3zpjLRaS",
  "key29": "Fet9wzchvqW41ZtBcH1g3XNu3RYZWQdLkUuDaQeHn8uqAtvrGsgp4nmsMAMRQSasZJufcyzbuFWmjUyeGKoUqUr",
  "key30": "496HzSZoKYkdXobkBVmqJmR2hJ4r7PueSPu7xpMFUoZxMm2b5NPJmJzvky74sp6WCJV9yoZwDXAvKneJRUZp84Fy",
  "key31": "4RdCqKjjboaqwdDpotWZD5dp7QTDKqAHNoucVAp3228jXD1WnyotJyThiq2eFUsd9eTqr83NuypRC5vofZuAPPMc",
  "key32": "C67yuaMsvAkoCYQ2vdrskpyjnTaj2m6zcgJvP1KTRjmCFec1Xj5ktokcWpVA3jsyWUFpE2mgmNteLHxWZhQLH66",
  "key33": "41poycB1JhvxY2Jy27CkfYkRLiGpmHA6qM91yxYSap2c31uoxxJ174qJB3VYUB3XxLqHk295eriWkDb9om5tqyev",
  "key34": "CNxLxweBVW2jZtL7gEzr2xqCEt8YWi1wzUHac5fhaVHNP3Uh4JnrxBhSLpYdJy58Vyq8nnotx274Gajv4NXwWdA",
  "key35": "4KedPggHcVLh6Pr54AmSgaj6X592gWszhvBv3dtX4EMTTALWSKQPo21oARfv8dj6kRV5t1uzQtm4aM4bboGnPMuP",
  "key36": "5z7rKFJFBWZKqrKA26ACG5sdJwU9i4VyTitYPKhHHsfqAKJQHwBJNqdqWbiriyss7PavU4EBNQ65D6SahxMWwvF4",
  "key37": "2Tjgwk5wUGjmwbGWiHD2f3nzm4jmxNA8j2ssUXws5fFWNRnDfyRCfLdy1DQNobjvjyYY9rqc4fymnAVGTiAurL7b",
  "key38": "54HwYsKdknkZ8JmGaBxFDgqieHRHH7wWna9QXffyTjRbfcMk5SgSkzm9PW2Pzdcq2i3MNW6c94V61NoWwDiQeuJU",
  "key39": "2FuwxH1ttTux99N1FuvVPPyR9d8WiTNaEMLEhn1QDELXCPzDsAr9zV9BiVqHskz45idgKH66Caw9q7YfM6MY2UA9",
  "key40": "jt9cxVDAqH7dA2AiaH55xMT1eoMp6vzZoDguFDGrda6qKj1rr4k7j8p4sirMh4Wxu2UNesKR6EhPZmzVRAAEywv",
  "key41": "3Kw4hhyZ2Hjxz8HM9qatgVUxPzyhVxBDJGvTwzgdeR4xPi8UahedQrC2YjfY4fNCLCfsxpejbpXnHfEfXkxL5QJm",
  "key42": "5Bictgz7veTg27qvExQTGPLiQzbD6XyNqqmfvSSRaetM7DfaU9ypdAFS5GX8nv7mjm5tKPQNQE1F4VMexjR7RHxC",
  "key43": "5ofSrrZRRbnzCTQoWqnjDSxnWwmdWootfrSLYwgLsg1c2fAdyMhwnboosjU7ndpkRpCUpGA53LSpmJ8VgtoF3yKN",
  "key44": "fQKgxfPE76HSn91RCSxcYkcuZDvYkJfkCwf8gkQ8DjH6wstZo5G79cM7gDDf1HTnDCEJ4UzSARoHxw3MBzMNk9H",
  "key45": "3kJ5a3bnu6AZxn4ov6f9nokoF2mgxS2VCCaL3mCKt4y22thxG1okg3PbBxuzLETroxwYqD71rCfp55hTk5KAs15X",
  "key46": "9awy1qXoRZ9XArmNQJvGMbbEXa8ndGd39Xg1rn98fmDpsiD2LeSJwjwFZQPVNn7p7U8qTGdjSsD53ECE9gbqPVg",
  "key47": "4bmf74HVWXcwqpeoY5NASi9MgzDhaa3965VcT2898AmqRT5fdi8pjcKBscWXdkwve3QEF1a24BmpugPByPfuEmzP",
  "key48": "8qtmb6tbhzjysHkEM9Zk31ypTeBRhWKMXa4Mpev81tSefqhLJdU1h4L14VBtqwEXpvrFRVo675SqPmR45wTBzE1",
  "key49": "4vV89HKKzaij6YQ3eLbwdiKUSSk89rqo5K5Kvn3D3CNMSWWzynnjoGx8Z8NmNAKy8eNnc1BP2AfZavX12qK38pmF"
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
