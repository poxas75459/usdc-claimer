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
    "5XfR9W3WUTV3quN13Agz2YfAuzXbqD55mEfiURkNrX6aaXunoiDJiwGH7nZaEmBtmE4CDY2XU2bWn3gBJNDpthN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DvQ9SxfZqTUvgM42ULYaSbVrStXRUfJJB9AuJiGQfPxaKL6sHu7oyxqYqTydwiFhs6Hx57Xb6u1JArsCLpxQc9A",
  "key1": "3WsqCyhLfW7hhWJaNFZvtqwQJdwYKv2zqJPQX1bdGgVPbcLa5y1FsVGmWkr9rw8i9ScdypmR8e4LF5HmRAzhtgg3",
  "key2": "4xYFjjF2c8163bnBLyd7GivrLvrGRnH2bRmjFmSF3xfTmfss5JHyasVGKmVTK8vLsqX63shS3b2TYJYTy4CkDn7v",
  "key3": "3RoK2Mtk57ySVXWDYCrb822J8TnE7db4u2HAM1UKZ4NU31ETsAvukUR5qMvtgZ1s1WggX5BaT7dYzt5tbc2gx1No",
  "key4": "dzuLNh9xq635qkbLHd3zHCTYqXqZd8v9tg7UDzAEXmB345nmKmZPizbVs7ViJNMifBf5hxZFUFFeXFUxUCHY8Qu",
  "key5": "vRMiuKZQAqjgX373Um71obrKWeXYFaD7ieMAxSqLyePTHkZRM3boxHsvtGdFFJ81DNnL5FREEFDDkadsL8Dutkp",
  "key6": "3AYMNmLCp1UdirTcAf3mkbfBRgJEGB6VnyrqcrmFoCD7pujdSoumVBYmNM9k6Z5zwpgfCABC2CqtQXy1cCaJWSJx",
  "key7": "Mnz3ZoaZM9KpV6YN68XmAxVBpfr4nStxZao6tXxN6u5xrBz2TdihnBpzbrUWU5iLfwNynHnijxVX3MWi8S6XXAP",
  "key8": "3y2Tsai3KAiuuC7Wu9wjaGa9Exor7dhjPgVSaDHsGBoVwhBPVEzpHvvyqz7RPmX6eBi8QwJgDaf7EHUh5e99jFVR",
  "key9": "4TQLhQs9T7MpfmHvWYXczygL5KrtFcxpTTiHiALFZcaKov3rtXuMGuEsNntEn23DsRQrb1g84aMwjFbcWDdZKe1V",
  "key10": "2HZUPGxs2xBdAenRKC23wroxLjvqbYcsxRm5jrbx8puTAepkQhBiQYzAMb56oJKbB4QqN7pWuMi6JaaWdmfmhZHo",
  "key11": "28Yx1QVrKciMKFmfPF9rxhmQViQg8PccLs7hHQRyYjQTae5gtCYPa81aEoR1kMt53324dcMbVKMENwF1m9toMHbK",
  "key12": "2dqiqoq6iN6o4PzwqbV66dRZYTpke9py8rgMedzuLj1e4wHgck2bhL6ZVvpFRRP1dwZzHSjk7BpJ3vVp8teAin3A",
  "key13": "3SCm7tLBUfaDRY52AKgLURnU8Axssg7FSAHFF4JpUkocfw9oFbEbuousegseoiugJposH1VyC7RNGkcoX7fDMhfG",
  "key14": "bg6bfBZgRiiVQeW4FdmbAFm8yY4p41JvAVmhPHcqrNjArcKk58o7ziXgHdVt27gfVXLPWYcJiWg3JCbL4nd2GHQ",
  "key15": "62PW2Xxhvfs7qNPjgprJv2ng2pWmEskq2N9G6bS3YFpyphCAtg1npFcB7iKeeB6Xdq7ivUNaDz7SQtueKchVJcVB",
  "key16": "4Tz8yHUuiJWjVhWZU8ADrFDZ3FZU6wQt8VVcpE5SiVL7Vvf2MpLQuti2QibxZ8mgjRo9oNef1dpY7Xrk6ouZg4Z",
  "key17": "QGYFeuKW4vB774o8Ey6DL78hFEBNkZDU14pyYdcrNLu87twrHUjpB8TsGveDMrDHQEGHPWnTHUonrcKCjPiGN9u",
  "key18": "3PPa8uHQvDjjnkjoRumoHMyNjiPGMBSBcpF8RSG2JurfCaHpwM5FHtLSshj4Y14XCA86aEQ7XeeVaM4UNqT9FL6P",
  "key19": "3VUpR3dZQ7PRG95kCd3riezoTf1eixtZ9m478wLSmQ3QRNd8AubcVJWjeWZveTsagZRPLkT1yayFTYaqbihMdnPa",
  "key20": "5L43SkaPNt4xBZskvBXpiaidU6HYcNjDmgiq76ue8ChmBHYCj5vDF8cceeKjjCp2NdLuYWmdSgewU42fKcYkDALp",
  "key21": "4eD73b2Ya7WABnAiHddUDRGvEnhmmj7HNtd8FTS4Atq8RF6HvfKnbZk2oqRU64poJTcVHR87TZv1vE3fiC1gPUds",
  "key22": "2NhbojsourAbneXuc9MBSjxCbeFNpN27MFTLtPBi8yUCt75svVjEXCwwWuubeESHss6bXNBGKDo5k3kDky6uYPXR",
  "key23": "2t8YUcRtBozPgHLUS2sYojGJz51k3iDDkrpdTMfy5tduAx6ukKxN2z1FiuL6FUJg6f7SgQ3dmTe9v4F4WkxtoCMJ",
  "key24": "33qXGYXLM6MS9ur2FxqQgZmotmMLCXoQvYE4NfNkhK3xs5FY2TjtMpgVUJvGeQzM5XQeRCMmCU2KjNeHkaQTfdR4",
  "key25": "g8KXjDaBLmX4mzTj5nd1z3ZE51txsPMzuJtzQi2fVBD55qzgyXffL8dF7AUXgSawEuYVpFJPrN6C7wieKnaKY3F",
  "key26": "3Kpf1xkapWacF4MBZcbQgeoCpknKkZrc2UQkQ85fgYb5KGQ8QcDdpV2gxQhYTKGAP5FVnFE3gPBtqcT2DFsqhN5K",
  "key27": "i1ky5ziV8vEmqJC1HwLf58iYqzoT9y2z1JBK4ZgQLVHh5A8t9WppaHnq1aaSgrHz7onH1f9MWVpd6KHzzXWJj2Y",
  "key28": "2oFKkg3yckdYyco9Vrs1jqh73X5QW3PLjZvj9DDq32KWCh7Nf8XZhrrz6yKirYfjvqW1JAQT1Zme6gtcyQNZ6yUV",
  "key29": "5YGQDY7V3R66qPwnQCwhSDUstPD5Uhyx4zExAdP24XKyigjVJtt4B3NZ6ze73grKyaosfDsCcsvbLpXXmFJ9cawK",
  "key30": "3ohAY9GTWJCg8GCfQSoYcVPEsa9Vsima33H7zxcF2BGuqeFffqydLccRj3XhVS3enAJmuEtM8pyCowFoUHE1ReQW",
  "key31": "5m7NejmVF9K6qPHqm7VVk4LLS2qgCpAfQ4XsNJJ9qepyLu1jcsuxA9Lc8CuBSoGqFSybrKDHgZ78xAUgFST7dSrZ",
  "key32": "2aNheWnz4hLDPf6GVoYndJYG9DCuUrCSub7tPveoeB9mEU4zHiMC1A484Y28utoLhPXAsJ4sqosxAjzzdeJZKsDz",
  "key33": "5rxXwSU54jTjFsgpahRsoZnC5b2qKWx54qpDAzLZ9Ux7Ys9UV3Yv9dbERAiRRfTXNVyLr3APPCpgZYUoWsr2Kvas",
  "key34": "4zyPTnavRbaBdNktr5TxWUgj7iyK7U7zL2cZ8HwoqZkMXzqY1JzDSCdLAkkZ8dv877ECnY5RQhzU55K6pQhaPvfW",
  "key35": "5ubyBab8baUcaon1xCDczMT51dtUTJFk5rfpvwjUvjYmLaYGQ3PLWNDQzfSFNuqrmVcmFXdSHAVDFsLoFpgDYwMn",
  "key36": "eb3yXEbxNbpNELj7RZbbKZHWEyGfwyJSnTQsez4zBZtdMaqBSWzSdK4JdRgsiWdsh3MCvhTbcr35yNVE5m31MZ9",
  "key37": "37SCY6dDscRCVosG3R21aCPmjryRu14oQJYLqKeNPeLy8nKvw9x7xJftTu6HV5aZ4UDt6qyaGDxzzBdtN9d3NRpn",
  "key38": "VMoGX1WLYQvvpDcbEiBvTZGVTPLuVZJ5P8zVfBwssxerjY3buBoPNoEnQ7yE3CLwhUWwhKxEH3bWttpwdvWsrBB",
  "key39": "25vhX6MjSgJC4o6SAsZbEie5JrcDEo5gVjCV5QEeVSXuykXNoLcTh9hy2V6jNmtqYaNWfTLi2Nt8ixgCmbgHpErw",
  "key40": "CV6WgnCJT1HtyWeRiqomFyTpKeQJzBjCLqt7G6g5J6Ln3oJ1kywK7PL3bod4hqckPgjsW6xTMYVLrVjMS8dAXTR",
  "key41": "4vYNdJvQNm6LiT4GmFhURMH367E6JdiceArR6XfCqiFxxYsvsnwA3BL7nKa5utrsfbieMFuwmMoFFBa2myDWxxZd",
  "key42": "3PBGn25Dn7BTbepGqgJnEXHwSR9iUW113NYQGzbYQ9WC5gV3MXLe2UGU5s8tvhGyGsEM6iSjw6vVCHJMTtmuRL3Y",
  "key43": "5DesRHy6nBCLGUdo7mRyx4Kc3BrUVcnPGomteHWc6rwrE5WuV1RCYrsZAToGHQcCc2e46H26oTDzeUjwF3R29eFd",
  "key44": "2TvC1t9RLWGUKYjvkq9GWWegevjyADq8WJAQBv73swujj6M3KXvQdqaeb6PqgjnswLdbdh6aSAESfUMzUW458VrK",
  "key45": "37GQTrdhPiDo83Ex6G3yhiG6QqPu6m63BpLoiUwHT2hi5SypNj6CPiUu3ryJozkbecYMs5hV44iKmGGMqM61Tp8K",
  "key46": "5cT64Cx8nLwPoWPGkvkUA7kBN2Hyv4rHbFhBgFtuFzzxJHdce4oNxNaCXGcrhwjXRsxGo6J7scSHpVHFcRoaZtbC",
  "key47": "5MwVfqUV95HrwczSWgg9mNXedz24g9tSgvLPCE4kdwB9qo2evpLdx6JgKyrFbQEHP5FN4hjJAhFkNQtNAk3VQx5i",
  "key48": "5oJQXpzQPjxn8xj8dLFt6ohK7LvdTFPTqpEswsYEifsRBg43kKic9Cosui5t2MbSK9TogyCnNsC1gpwpR3NA9rD4",
  "key49": "121qUAxizAYyURK954bh4vXaMzNcRvrMgQQopsfFWPSTVpt8PTi2YFRf5mpTXostZhhAA3HRJraschLEbYWsHfDx"
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
