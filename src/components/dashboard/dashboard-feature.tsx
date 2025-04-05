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
    "5GTFHT7TwekGhxK64DPvoNiUSZqcKa1DtVNVwEPXHdNccRwBs8zqFX6TJkrotFrAKbxjvfbFWUCUTmCNPS9vYpgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23y3kS3UDxZTnNp3m8kToF2sm7iUBr2BdwhJPcvpHt8hZnyyhxaMy7WTP18uitp3ePKAcPmwgyt3T5HxvtophcHc",
  "key1": "55QRHBodnFN6UF8MGAn1tbwmXVvF9ZhRvYzfG6EqWEGGKy5yUkLT9kwpR6UQCGWeZuQSFMeCnjZFLTbsC1yD7Hhp",
  "key2": "3k1uzwrLnHfYbnmgoBv4j8w2tVUkFDVxzTeMM1vbmecH4DtjLSfjVBUnyUPmV1RzS7q7MSN7jMiuVxeBP9K8VJ92",
  "key3": "2w4wmX6mUx53AHBYXTHidvWYDVNtcRCPW1b9XGJyiPMSCCfDGercc45ayk19erLyohjTUuiyVwTpaQoXYYSe94sM",
  "key4": "2E5ozGuSzXicFK45kNUwsWGg1EVKPFBJVSP88cCTbTSq7A1TFqN5k3QkJLRW19h7iGWAdZJviqUjZFuJiGVuf9Av",
  "key5": "2iwDDfZDj2pnFPkZnxmz14GcQ8ejT2iQ1h2BYV1JdAGxjskrqSmeBMagvSNEaEszXF5JzjNQAqYgRLboX61vTvLQ",
  "key6": "27p6qzxPUuHs4xeEntGkBEhzk3LqmksFxuz5dQxQDGY2mUTZcDTQPW2XnPYEnFnx3RpvNR3eoSmEXM3wznBXrBni",
  "key7": "3VfKfDYYMUfw3jni1onz6hwVBUAsSfnJLmF94zZXTYSFWytHdWvD1d2WjZWbZJxZqw15NvUgPosBKLuYr4kuRv1S",
  "key8": "5Jfzusf6iASwKYeuXTsdUbmUbm3PWX4iHpCSyHGdDCA5EsjyYTKwnxpuo9er74PKG95XutaGHWkNbBjFmKRpZzBu",
  "key9": "5RsACxWXN38k2XeDfR9a3trWHsfWVQkhU9cbaC1qneeVUxeHjPzSAJCeYoLED8AcrKwD6Wz9VQTa8g7kefyKm4b8",
  "key10": "geH3Zk3bJFrY6j89KWptWygXA9f6p2DunvAY6tx2yQnx14C3uFs7vtzSKKGY7dduSWnesVLh2sqkrfCA7Lmkw77",
  "key11": "5vHnT2m5CNTGZ7dfw6jKNraLpq3TGAT8RCTWvtynJQuqpPG2737PqxYW1PMd8QPqWVBSUXGPieV5pghgq2oKFo1S",
  "key12": "5e6v8hjMbiavw7JvXLxHpoAKPBzbm5EhEpp436yf1F5ib6DyNx2dxq5w5R2aEyF4ia5PsoBja1bFmTCY9qDng1rN",
  "key13": "5bsLeQQxcaM8tDoP5pHhnSDCpmHHYPtXX7NKmWM2b7Q4LdZHp6NSV57Z4366ocMGYDGdx4EJKWcWsP18TbR88W2p",
  "key14": "4VZofjHPvsidT6KZpkSATEPNecfQVMwEEfm9Fzwz7SFhWWhtkRH5hi7VDksJ1DuixoDUrgMqr6gS2pCWytUabJrX",
  "key15": "kMyHrhYxENTkksuh1otmp2oKLYnoc5shwvY2X8EvCsZZp2HrovwBr1RA65KF94pq5QU9y7oZSugmkwDKDFHFepY",
  "key16": "4Q5xCmutsaBH22ETqgkGrmz6jy6jKVQLtqz6iQp1tj14oojqZ6cpsTk7zHCYqUCYuWUt5TUsgibgKxQj1eLLEA8y",
  "key17": "4kgJuvpZEpwy6TSqJwwewRTDfD6AXa8JUFv481QLsZdrPA8gxG3zigdsRcXeDR48nvY8CizLWwudYJeVZBT9MUEH",
  "key18": "38szsk4ZwmmYZmik8uo4PkdGgjrGqFbQw5nHQazhkKErUBK3YLYaAn479eWMZNMxXTHkgRsMgkbqt1DfiVMUq6S2",
  "key19": "2hgDw5HEMnjXFr1hHxX7y7y29nkEzWG4hRRM26mxcHAAbTAEhe1bQ9ejgc7FxyzJjaFTQHJzqQiZb8Ma85WDUEwY",
  "key20": "3JBVk18teZDoxnYfik3HYcrjawZQ69p5wub9Gxy5qbRNgfNutAjyzxfEf9ce7sMKFrZwChAkBaWS4sHBbe5UHjVX",
  "key21": "2VqMVrF76saumLtixxUgnduTkTUSLKMvzzs7PVK7nvC14s1VcogdFPNtYrLm7AR7Jvu4BmuXXLwgABBCusCvJEty",
  "key22": "4z1R2LbX7RaFQSx6hSvRZeh9d3HuRKNgzjyFVqSzS1VGERLrBJxFfz2JPuKa4pv2MoUmnTRFMBr9bmse4oL3qwsZ",
  "key23": "q37upgTDxueZqjHMd2eh2VVAZWYdv8QGR5SgMW6FosLk1wkkiRShtY4Kv9Jewv7RKU142Zwkmhb6Hjtb17JgA7c",
  "key24": "3TgS2Lhrp5Gm3Ah57waL4p3za3cohc84t5iPZ1PMXhA5k3JVKNK1cG4MU5Mpegqv57rYiZhoHAJKgb6XvxJTGhex",
  "key25": "49CBV2aVTmShWiSyDTbgSGGnE2KdQPLoWfb4f1fyBMSYdGwXU4giGVd1c6itfj6ubDrG5KMoHkV72EnMm6cXdRWc",
  "key26": "5H2avbUCJHwr7uJ6G842BohrdmUigtvNyJas32yDe8TBbUTe4pn4Q9FnGcCD1wPVB4bVckpHy3Zm3gCVKT4ohS9D",
  "key27": "2DZpS1YGxVxdp2tCs5op8RDXFGjTehJ7KEKc4yDeKebitvhXF7tBMkKuX53fR4GHMe96giinvUzGhi7tbScPcvmt",
  "key28": "33jbaePGjX8dBHuriHpJ1mtMBegkNyqNbJmcxWBP9FLMVhLLWnzJBZMBXMMtJizyuqLbt9jtAUUhtMGRc4ZMg456",
  "key29": "4jSeKa1Beq6k2YEBoSPcViMVtTriHbo9xFUoFqRmjipPkwWgyu5CgXmKNBJuT8zSkmVDaj3NqPGmtURAve2BEYhH",
  "key30": "2sTorBaLwFNp2HUFoi5RcDfY6mnMLhaSgkCJo2mNgiQToAqHEHqVvo8rWfPj2wt8Xy8sah6hG7isT9jckqNTqxkG",
  "key31": "5Aw4U8tBNLTs97msJQT3zF6d2LPiMfKnFEHeDGybhrYkMig54ffwjcNgKdrJ443TiuFKQ1kbX9LPVhLCjvtcjMw2",
  "key32": "2phffP3bgYsJ91vJk6jtpV3z2tFcTDVxkZQbXMDMCEtUTmULwfyD5HN1dxLTnQQTuprbWsTSqcrampVqtRh2DTUq",
  "key33": "3j83W3DvhBbKUkUN4283UQTW7Hdd17K8DUgEAgMm2jrczZHPFrmTDfRsQAgRyUbiCJdA5kVg7fBtbRbyF7uSN2b",
  "key34": "5KNGkxpxAJaduumrin1NhRYn2VdWG5K8QRtHEtpKtnLSPzsHKUFkKgPSKzazz5UPwW4j8W8fPMdmhmQ4jPcjVPZZ",
  "key35": "4zeyytasdRZmkqFyqn6CkrZ3tdtfEVNE1h2U4yvgxXUWseigVzrhXft6ZUJsGz72Ak9DoSKxHtcHYMbkBMH1t9V5",
  "key36": "29dDxJmPKhLp46Cht9HFtkCQpmCXQD4rpAPLYFdD4c854ygrsHoms3d7oATNjcHSNJxEbXVQeQKKMZckfjEeP2S5",
  "key37": "3FWxUrPo26hyVtZRHthViY2zsmoA5N8fwKWyL7f9YQapMyWLgpTsSM9oZ5kmcMVznX31gNiUx6HF1kBvnsucXWk4",
  "key38": "29kM9rsVkJtSJsNfWMLSsQY8fvGE3oVZXwfPEnymoAbh68Yo522E2XRoTuQBZ6hxcxr1PWSwJeqQ6nixwsciaWUX",
  "key39": "5ZaRZUfRdv7iarMRcxgqxF4ca1QsVDgsQrVUzchisCw1MJRsqyik6J5xRudUmpmr317wJy9xa7zBcWcKVdAELx4M",
  "key40": "5ExnW12rYdNQgtnyCpDzyQmwAMzfsJveZ2dAMaMtYz3NLnFcHhmiKoTgEBU4iBqvbFSLU71JhpzdPwi3UQmMMhmk",
  "key41": "27WmLmUEpJTBT6pbGocFi6Er4h763sqehVUWMfTZpZTJyWuPPMn4TZ2ngv8LEKr5NFcGpVgheL2mE7dhaq6EJ48R"
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
