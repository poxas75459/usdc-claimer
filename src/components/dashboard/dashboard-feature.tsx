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
    "kY4fRRPqrxC4VRGmET4QhLHBzoWXaDuHPCedvAApkvnnonMVRDRTKAEekQhbit5bbGCQKYx9REoM9zSczNkPxcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZaB7d6FNdLjG8HE6h4ajJc4mXvT7PBpDv6SAt5zkCeEmJVX3WC1RRVJ3i2RFmxnoJMQybw9b6Didw2n2QKg8K7",
  "key1": "ZbdCQJG5BNYMVMraVVw5xhBCUVkKnC3ojBuvVkeVUFeFXCe9VdFctqAgMbHSVNgfrmaKaHpjXHWtrtUTuZDWcVY",
  "key2": "5Nyfh3X7rmd41DDoaEh1BDSvw5m86sgXgi2P7xCyVNJBDwcd6UFSmY92MkYypfUJE6k3wAfR6Q71hwBGxnkwWVAM",
  "key3": "iTTCRoLHZEBjPyyiFggVMG1vqDXS3L8iVvzXWPursL5hZjmi1vAQCXeh24ryGdF8TwomAxkrvP1R38HuQeunfXk",
  "key4": "2YT3qSiQpWnucFpxAxiDRsCK8wWKC6mf1FqQS15AxAnCFnhqmQ2pFnszMg2TCpccqGCb8fjYLZCozzeEQUVEKEY1",
  "key5": "MRpbbSWjPqyaruRMMCXyzd96bprw8PerFBWtsTBJZXWh7DZSH5t3S6KNrmUrLiCSRdcobkwwwCW6Fo7h8uiy6df",
  "key6": "4bcNYurbvHAMpxw92AzNWmj1ehMXWwZgunyiT1h77r3EjrcWxxoSgLW88ikkGNr65imuS3CPoiMjPctNziQDRMEh",
  "key7": "2UkiAGnLEQhSd5s1iS7g4m8uhWvm5hejGNvctd8AaQqTbH1UXzj9DX4TGDHmW3BFeQkrn1pg9q3UThxC3YuoYLGY",
  "key8": "23QrKXdn2W7BkwY6VTPbNd7R5xteEVo2n5d2GCBNdgPWBkrYvsbVPYjFLxgfdee4YBiPTxDBVcXzcAAvNkLgehWy",
  "key9": "4ZNYacWAiKVAhJuobBR9KhH2VV9YEeWtNrxNPXASq2FymFh4nKfBBuXEJDK1QSyXtTZcNpVcehyUds7K3ne5Zw4x",
  "key10": "4e1bXwrt6jQzDp2tE4jv3PespuYEoFkds76xiKaT88oZWFwufnbaCg2SgMNho31wfJbXamGpCUG2bwAsVJQjg3bB",
  "key11": "59Fpfjir5m36utDZSeq1mFY3R56pzY6PyBiEcjJzCKJLWhxHrKuM9fqLKdS7cLPcZBHQbDATMNuaJwYE258p4W9T",
  "key12": "BsjDCD1Po8cj9YejjkCk9BWCmHakbs7gs1CcnE3uJZf4AHr5a82GLfz5kpNP8oeL6JsFRZif3fMAgP7h3ymsbdc",
  "key13": "39fVHifz4p1tiYMfhvQ3Q3bcDdjNG1Nz99gixKLToFiKmQSGFiis4fsP1FBjSpeMamuP9HPP5EQ3DhjhUTJKvbvs",
  "key14": "2ViwdpWVZoMk8k7w68hchQhuTKRRmqKBjEH8M7UdjN1aqvH9LwU937wkKfYJtEMNfoSSVVpqYrWYTz4chE7GGQqu",
  "key15": "GMX6Dofh9ctGrempMsfLAck4iUcRhb2U5daDHryxHfMMq9abcXAkwN7nQ9R4ZusvQUYZ3mopufwzvbqpEATdocv",
  "key16": "38KE7qZv7a4zZzKP9b77CvqCsV3iiSH8XtiaUGRJovJ2tvqDFZPEGzDhLuMSLr1nxpXy1dcUJcAb4Fc8KTdTjD1N",
  "key17": "39251LJj2btM49XVnS8cRHhGdSiDmCfbPm5gYAsDuCGkx5s2jvGY1vgbTxr7v4KveAL6bWHap1H42pYdSNLfTgmW",
  "key18": "3MUZuqvyVH4faC7AsFCLVbxKX3oTLc1oYwfa4NTp9b3tvhyevRVQ7G31dsFf4JdwzKuBWKTsMG7ec5U6LJ1eoypX",
  "key19": "34f2SFum72uCFFbTawrWWBNhzRHP66692QjTyV35eYsaeXmqAJ9zvDdLtyKtBQ3MmiKGzowqDuARJuLz84ujx88Q",
  "key20": "39F2YG7uEgyXrHhZ9WyzmNnChSCFNgS6kTrmM1TxHUPyTgwjb9J9B2N8RqKSweP3HXZqTwqXtDiQocWmiFEoTyAf",
  "key21": "4LHvC9i7GM38fGaUrdaExgNVM4nCpXocg9Lq3PMwLxK3Bj5Z3rPuANgz52xm2Ud6JYk4394R3vCWoAwF83NFCZzY",
  "key22": "5YsXaHJ6Wj6GzQNUR1seUp7ovxao5NXBbpiRvfgLv22vA6Kxnm96PfqKGxv114aRGT1oX7gwizZtNxbPcLLWUaQW",
  "key23": "27HD83s2emTNoYL2LfjAiGzjyq811A1FVE3agpQqAeTJs7c5q1dhDti4u397kfvt9m23V1P3JUo9WZqhcJbDasup",
  "key24": "5A2TkSPPx5VbSNa3n4Mik18KT3nKfyio5TLaYGYY2aEuYZ6KKo7Mc6cAMejVrmbg2i8Pp7FbuvfpXEcY2NdaTPUG",
  "key25": "4YznpeExjVD93vPCoVqpvSeVGZEgvzx7PtWUJiijjUP5imLkzvS6zmVmGdQu9rndx1PhkMWaGK1d2w7TQVquTt2",
  "key26": "BzqqA26JJJiHs3BC6JTL8xsWdV8tZkaJqL3mrQCMAP2weYwaCW16sbJkkQE3cGuNv9HfdLQQkjWaetzXZQ4bJoR",
  "key27": "2tWhY9aAagS3k8FJvk3Cipwt7SKtxZ1fsB9HsRTP52mHbRUWxABzEUH67coyG3UjueQiYBonr7NGtWA2pXD6PdNt",
  "key28": "5pMFqXpd4qZXgnC3Yw61SQdN43jBgcFsdPCuDpxqtAmoQzPHMc93WqPNqT64wgnroHTANEarSTkVRZn2H1kSdC2K",
  "key29": "4vutVNwjTjGv5wuM2qQ5NXJzKyT1rNg3KDZ421xinfN6GChZBPc8BVPWhJfbBTcVgU87WvYneNqc8pDhmCwW7ykY",
  "key30": "3C7Pd2MiYLS3j49PMrizXMybL9sFwKLwEPkaFCU1qTFoqQJPGr3HNgsDXyZCwziDAy7o7QenwLpg8Esy7Tty3iP7",
  "key31": "32AUs6Q3nEXPcPMgYfXtJP8W5tBUpLWosorChZVt1tMigmfZeiUtnZwgPJgRgzbqFtuuZKYtGi5VUuerX4NHZVXv",
  "key32": "PQGFr1FgSuw7LsgSUAKLvR6yn2vCmUQViAMXFktvbXLquZraYrJ4NNw2GZVWVJFV792ZzRFGxjzA79ME2dp8zii",
  "key33": "5gLX6rKZ4cMjXoEmwcNHkudhJfd48rTz9P46hyZiqgdKwwjVyUrbKEnDwrt7ZJuzCWHFwNCTTnV4vpowbaX1nLZ7",
  "key34": "4cFwpnJw98cQpui5SfRo6pnSLG1wbGMWwYtyq3ZYyUhT8HLZUVdNfetYXDiqnzmgiaVtaSFPRfpbzRC547R4wUn",
  "key35": "4ghSBVahuuFPy6Q2gAre7J16MG2t2PkzHhj3P8VLPX7oqCRaLDaqAyyqE2Xjew4FopKfPpvggFV6pSauSkDQF2fY",
  "key36": "3hj3DF459GMGYyM9k6K5RYSQKF2a93Aq3BP6NxjRvXfik9T5ATqw1aYbxNVPE7TWdxqcxgUFDzKiv3H1o9GJD32d",
  "key37": "2FGCwwJYqarJWPUpV6vyX6VxRgNgFrcGmLU5GfwPQapVoeREs23Mv7xbJq6GwXpT86DrqMXB7DLgcu2xixjFzFLM",
  "key38": "ho1fviXTNqH3PijF5H6zSnzcRLDb9DTZZnG4MSv9C1x1ov1yu9rmnyBkUJf53y3ar2hjYjPACLbWUdMd3G64qhz",
  "key39": "KSYyuRfQ1MnP8hfDZy2XmLcRnF5SGsRoeJ7uvwDVwiRA834VZf54MP1gPtPTVepGYdvksLSRxn7jqKRQrErdQp6",
  "key40": "26o2siE97Ghbx7VVz7BDY1k7Fm166BVbBke3tw5Ki3Z6z98CbP9R8NC36g4PJFLsskQnGkN1LSrRrCNAB7n3NUuQ"
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
