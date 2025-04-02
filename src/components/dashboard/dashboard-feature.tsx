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
    "4ZEkf4vdmasHAEuy2rArebLZrP5MqMPzRddCdj6aNYMoU4DEpX1y8UCca3k6qgFt7h2LK1kQVgHGoXaTcp5JTXvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syJuXt95Y2exoWqARDVxY15NPpRRiEWTjHMEyoneS2wDzPTW9c75M1p3tkeQjKNcbzEXnwys9N6p27kP7Hr3gcc",
  "key1": "3XfuyUzSTLNp1qJRuKSauhG3bDnaeRzjta2qztToHmPzzuQLizxYVQozP4V3b5ztszUY1LTZv3Pm1MK2Sk9rp4Z8",
  "key2": "3YsjjYEfyhFcAAuoTV96DdBA91bU714eB2wwQAvv3xQDeiBEoCdbpGtiy3reHmaC9UZ4TUa5uYCRG4Bq9A4LNd1j",
  "key3": "3nvzKqer5ZwckyfesjpbyD8Nm53HDrwRzY1DNQ6o6huZMQR8CrRV7re6izaMoZkv9FeVqYYKVKxxtX58kngukmnL",
  "key4": "3u5jhd2NvZky2wLiUxMqj85cpGCKAfhgeP2ifVaKTdZQBhScF4FpzvWkTEjNHQAYggCfVFr5dJ3ABh46cAnNbLmk",
  "key5": "4LcmofdAfG1tPeY74cP2432NLsvqLMffac8nxZQVQj1WthxxetzeD8eYYi53rXTm3aoY2MQKhLUCekEzdBLJWyWn",
  "key6": "5VW1VWuHxQ6J5w9NdtqVmJLWsKRpUuQEAN5NzYQzuxQt2UD8zR3cCJReK37PDKnqyTb8nha7UesuTWkPCdeDKub5",
  "key7": "2En3izSzJg2bBYU36RhrpruSTXsJDjoCoGc34qaAvWAh1CD3PtVZZeBRkwuP5hphv7enQFGmkEczM8hwG16g4oxD",
  "key8": "3sYaRqhnQbm8CEC4ub1QHYHpDRYbqz6rsjD5j12Th9oQgAhW2icvjbjWYaxu4sMAzFfrr5BRKFQiLxRsbBjHFFaN",
  "key9": "AmqMVEKCNDFvh4QfFpqjNTyMqFahrShJ1bqbZb8FDjgN8ishzzyLy2XzvuHp1sHu63ikyFXFGnfZFvRdMcPrrgK",
  "key10": "2EqUSxUA5J2KTVHNsU1cDZsGeGxAqVZDYxZ591ng4FsGhhtySNxiG89SZQ3q7AiFUWTqa9KXuxgWFXkUwhHXDzUy",
  "key11": "2ivNFUoYe6K1BPgkSXAdGVgF3dNgaBHCqmFh3bPa8rAehn5CJe9pTcZDr11FpQV7dg6rAk2BFthiNR4ze62J1gg",
  "key12": "58VMRPNiJAPzjHgxHrknm6va84HEQ9Ee53xFakHFKQP6D39KgrLVV3Un43JYSeGjmvuDUv3TmKQQAeq15B2zHaNy",
  "key13": "4NEgFU1uBmiUgY64XZvuTLcAAoEWWNJECoZ4xxMDkk3mu4PrdtjTXdaf1yYSMHiFyt56M7z6S5dfkZWhroYmiBsR",
  "key14": "4JWsqaZ2NPfVPxkNCDCbKP8wSeh5dVmc3EJQxFynUa9C5mrtHozfk4e5ghjVSqjDmormwtMyDi53u43gX1sKVEm",
  "key15": "buStuBpcq7Uc5yM7Xu5kNYP19QAiQA56QhL3K71CniYjYpyVnDjo3pj1JudvERDVuLkh1nMJqfuFrQ7mAK3pt6j",
  "key16": "5AcRXNuKass3EQgmNZpFtHhy4j6FKratnTovi1fFAy9kDnJ2pCo5B7mrcrTxJqbtK3Efog28VZmHD44nnfKYWLU6",
  "key17": "2BPmDkpEWzjnm1T4nbTpMum4R5Svf65uedmdoGZk2R2UNVkfFjppuJweX8Qz83xmyKryqi9QoAwsp74cEaa524DT",
  "key18": "23kRyNZU31JRwKpdcNZS44H5E7cLc9UiRzoHifFXWXRrBPgoG4u2B73x1Z774aJz67AjtWCYxscchHQr3NhpTREK",
  "key19": "4sYhUC4ZwjYFqrMqumwU6b1t7qApo9C88QWbmNQHjLGkqa86B1Mvqdc3mc4CA41HzxxM41MUWUuu5M7YFrSYPEkJ",
  "key20": "ouxbqBcouXpeNhGo4Ak4YadTvhJMr21q4FQZfZTDdgTuVbR4jSyqmixWgySLt6AajjbkN9NtqLxMTirw6CHcobh",
  "key21": "4NW7rYv5iuB5dnJc46d9y5P75cWGogr1CbNq8A9CaHNAqbqsYzJCGufX6gGBimxdX1aUpVzAB8TBGgsDPnPhqGBy",
  "key22": "4qVwJRRo7nr1qEgieADAgC4DbXgiJYmd6BswrcgDwyHaftxEbpoZvb3UevPFqrzmrtRN4quP1C22j4jEzrvckGu3",
  "key23": "keZTQrNnQEVhiujz5ZG5GTATHbxH8f2xsfCxcGB9AUs8GzMuwaGUvYkUQLgeWaRpZUjtH42LNR45DRmMHGhLUHX",
  "key24": "57QPqZUU48z4Zmijg61JpEPthnsRSnF7pCyQHTZvisD42mPdr4eWthqSBmnQ2qR5yfQsGBzkZECEw1YmtArCxEg4",
  "key25": "5GpP6nRvNawgHcAUoBy72kctyjNvNCMK4egvX6E99zAfjXaL7hr1fAv4PzJ1xWEoVGFvR9LxucnQZ2aCrBcm15C8",
  "key26": "5Gom8SFGQtRZJCiXLsjXzTQAjiteGjPHRTuGqhnGvTopoET2Dzpyn3BbuDcgRq34eh4swcr46wA2bVgxv5AVt3Zi",
  "key27": "4CTyC2ZJcSGPFCMsHD8BxpakmmecNELdGCqDuvgCVgscH2yxFepy56gboxZtKtNz5FsPJJVHwApHT8HvU4KVBxkz",
  "key28": "z7TacmNNEzegvLGHtHieqEJvTEtYuVkEXQvFW9QAntzp5iksyxLaL3UCTHdYs4w1mfnw2UtWPYZyrPZDtTwohdY",
  "key29": "5ZSg42VP9UyW3DFkZwneY8opUsZzGZkanoFyXWwTQouVRNVeLED74k1szBv8LLzMdwway7ReA4p2Zwrcb12waSQM",
  "key30": "5MJXo11CtddJCg4U1onHYVbBLEgwP6LY14YbTnbdyKEp1n988LBSMqDqWzQ6pfZXHiWzqroaEDBDE4LtGrzPff3S",
  "key31": "64wstRgox8BDXuXbYpJ6oscg6WBN6vXYLN8wVSJECxFkuNU1Qc9QtyUTE5AydBinZmMUanvbk4khRgdmm5p3iDsd",
  "key32": "56B1QDWns9rYZ2aj3sniw9W4mx55uVwAmMK8g7XSzP8sWBvXGaJP52BxGVcJA2PLGbcDqh9p3NDqX43Xrwiwzkph",
  "key33": "2m3AXcjHkVm8XCkU7Nw4J272ko51RSvz29wjLpUgCfScQFqEfcgrDKyHRVSHJM18ruZzg6MnAxLLNsWHXam3CiW5",
  "key34": "51NY1Rd5ed76Ktq15qTdsVq4MTrNWVdH94j3LhGUM5LRkgvTuJaCgjCTANxk4sVs2ibqXWoY8zxBRyUsir9GUmoP",
  "key35": "4yXfpVm8h8bgdQpS3cKMpHNJGvhU9XwjhJzHFdmvZ79TfCVr4KhWwsuHdisCc3mhmUW1FZ1GUuy3ogN7gWtfKtZd",
  "key36": "5efKMYj1H2w4sKHfALVcQTkeWXBqmqZ87rfNqbXy3vBCpSGUH6ykgY52cptPXzyWXYxDWXXtDmQwUyRcP81GK8vN",
  "key37": "XZnnXbZrCZAff38F83Mk1UKCynSQNZUhKgePnhZB5EQxN2zM6tvURA4mDAE55q92Ysy6nNWwgShD1JvEfQgL8pE"
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
