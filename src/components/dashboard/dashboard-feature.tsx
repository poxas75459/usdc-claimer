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
    "LhbP4XEy1fWkTtw1RfaBQpqVLZDcbas5dVJs5zvWJQyy2gEogQmHnQW8F5aBfBFTwnc7HWvengVwwbGUPMfbtUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558zbqLnHs19swmCBGZ6uoASn69hJefjqsPAf7iEe4HXejU6j67aLYfj6SdxTr2qYdMQnjHiLfCrEGPC5Qo9n62F",
  "key1": "5hESdhPhZPYUa7LdhY9hWA2ZxYEeCJ8jYgJJjiGiqpTMuq42wwKuEu3eNw8KFCZRYhQ4Txgm7pGfin1NCohrKdCh",
  "key2": "8GgWFFJGhRf68ahdkSVLwzeYh13s3rTMyZ162WjH85CyMRaFAaQrmhC8EUMTJ4nwWpKE2uv4NDArEQ3TGdbypD8",
  "key3": "3uRnPZiy63wmCmqrH7Pw2wociMNPcKPGFrTHunNGJ3AKdRDE9e1gfdVywBbuEeBBVmsfVvfuujWiydh1PPisqACA",
  "key4": "5sy8QNynj1PrLQT2nFYvyRKr9Z65G92D3DqrUtRniTjRr4hVFPPQWRXy3ktytGc2Q2joVNrTa4hyA17FX7bPgkNo",
  "key5": "PBM28LmhuwLQiSroFHXTHwXAChpLnYMy6vMBD21Dr9F8qVXa7qMpfSkFLhjN6CMVSZprc1NyEtVrD93o2Zn5FHQ",
  "key6": "5jTiavJcTp2nLZnHNvdsDya5kTyDDeGQCo2RHy2BtResDWGzvaFVnwWhA5ioLDNoMjGAfQT9FGU2sfMSRRrKoGLP",
  "key7": "5Uf6x9EQKgfWRHYXixpdqXRCM6p49rim4JzFSxV2DshLqayUBXeEZAPFppx3QGDoAfnoCQ3Z7CXPgdxxLhrdQkeo",
  "key8": "3tJhxsbYES2Jb4xaQfL1Vb9QQntydJbR7W7r9HH4fpuStQ34u4VqqbKcGpSHpdJuayMTB1N6a3v1DREKbP5AU877",
  "key9": "y9XaUq6CM1MdYrKfow2DTRVLuXnnYaftax1uT3HpxvEifLGcWFccadMrbGGicoQNP5BDqRMstv7hMPizK25trQW",
  "key10": "59W2dzffsFnMiaCyeTw5VEEeuWFJikjmv3f4JGpGK4RBK4diBADNh2tHXg3JPFSMLbWAYLmhE1uAqLmFPFhdjMXr",
  "key11": "C2KxUjTutkXDpAYuhv8f4CipQgvvVJ5kQHh9G7dtb5nTg4qS4PrSnR8iBCpCY3Eu3C3HUd72mSGah9fZuhKGuD3",
  "key12": "5PJudG4miCNgLQvqzJugp5wtmEU7uXPvjEvVnCwCjZm8cXBjVD6wLTPWgwrJo7YduRyMBdPjhRkuUohEPZxNhw32",
  "key13": "3d7f75ZGp7Mk7eauzvCpYQHjHuJ1mU2DBoUifc8A6B25abCuTCy1vQEyv2XAYVufnvAMxJfx4AJGL2pwq9wTtYqz",
  "key14": "4rJ7See3DuPe4ZAezUjFwnw78bC5A2CYLx8Rsq5kpNcdCycYjvX3EmzrhpTHa4LLWx2nQPbKv7Pjgh5HzuA41XKe",
  "key15": "2Tw3hmRWuVTn4BjgoDjzuXFMDWpZha5cdy6r8ANvr2tmWrTtSSZ9PBBaWFkBmCJPtTpSoAppi7Y9WqhD5xgRVgJC",
  "key16": "4fqeBvP3q1zXoCa8Mdrs4TabHVScMQ8WyuACLnfvbaDwui7RuTrvAXQf66HWZavXB6gKrU6TuWQsxbHG4r6sK65U",
  "key17": "4tBVJ55B2EVYdv9mdnNnGn48vm7TuYXjSwuLFzaPN3hn9UcN6CyWAn8kSsynjGX5XbnjyKW3AcRcqB9wd9S8UmJc",
  "key18": "21YcN5DMfbFbA7icvF4kgc5yDjXEapWj4XRJCujex7q5DE67ZCZutCYEDULhDJ8v6wNmoRdiySSAarnMvrRrAwCm",
  "key19": "4Mg7kZg1Hie11J7HyMXPzKZBcQyrNdJifsW6wWyF82weybRocjb6ciGom4GcPFNUG2DBagyDLDXpU2nq6ticHT2c",
  "key20": "JG4BgXmvPg7DvMSzmB9fiJEyLsK9Rce1Z8xWbHauhw3jauL9cuHNmGrimqfRexQT7zHT1DoUP3s87YoTUnUYBt3",
  "key21": "2z4zugxP8umzonPbRg3ieUiuiBUWYy7mNqB5KS24r9F87udJ8iFJs58hxYaTC7h6Cm8dscfF4ns7mqQMaAwgUgmJ",
  "key22": "deiBqf6Xok52KTAbhpJtoHWCgRn3hUa7m2BEFkbbTTdyGWhuJZVvfj9brTCkcrV9qGrNWKYsYvLgW15LQK1iNzV",
  "key23": "4bkZoqyPN48C3Cc5G43GL6L2VEyhXeXN6hAqjkfsARczgQZD9sGXV6wmasXYXcvveRxcP52GNdCSj8yhQZ8dpNJL",
  "key24": "D2k5tZyTG3QqEWkG5jgr27j1e7iwiv7wds7kdQcb5FVJREPXbw1STV6obJvuCYHJsMdsNiNZRWN9JUbP6MdrBGb",
  "key25": "2hgbedYtSHx5GqoVSUPknw71kJtZgGN8GJWiwZaxXPDXDWerFex4swtVJUQWw8xaPV2QdedAEeSCvZUANB3Koow8",
  "key26": "4FcQMovH3tcCG8ptzuLdzde9vt4Y4VmYTxqRbPGLVcrPSH77dSwu7W7KTYvo9vtXrjiNRLW51xQ1oSByeeJqhp9U",
  "key27": "5qcTyPTkok4RS3iQFwo8u5SAA3xz43GNNQYegncmBFisuvFP4z7q9wVZbuMVZGdXsLXEMD1kFMFoGJjeSrPeFGv8",
  "key28": "2T4bc5j4cT2GjsruvmKXFppgdGWBA3dFfx2aUJe7HBZDMrwrgjqnx7kEvLno7TboGUUDyMUYjNaSYoBhPDueck6y",
  "key29": "tZQM5HY5wYVbV1FzQZL3ddZHfLd3FteHcik1MnhxPzXZwugJyoeKgtueSDUBKq1uHLdJCmcn2Hg8BuAfYCLcRZ4",
  "key30": "oG1ue6xVgoLeETH2QPYjhgFtr54TNngpoQPk9PHHjQfGhHJoX2QAAM25BCAcwSMJr1KpnnLhzn1JffSXR8uge7D",
  "key31": "3tv1YG4zxKuSPFQUrqWuaBWuhAnaPadTubUpejNLe4ZxoEahVHuKdwMaYtb9GUJzvkCiq7ykML4PWqYgDrcgKcPn",
  "key32": "P8BLKxmapYCLxa74XPvExMAudCkYE3YDC19K2UeQ28q9MDSGXPaQeEU2gCxxGaRh99VBcw1gFiwBzn7UVReaoRU",
  "key33": "3raysupEU2GLgj1sdx3SUaXFdiU8Tu6MEN3atTR47vGRWc9WytLvWG5Z6u8MrwJaMMZMfVd9NDaUrr5M5Xmots4A",
  "key34": "3UN2rWYfWCLUM1k3VXP3AfEd32hr3kLxFt5Yc1XoBnHmDsG5q2SfgjaaBkxcySanyaRo5Jgap4C8qRRzV3QN1r2G",
  "key35": "4SkHF1nh2JK2zeGrv4idT7bSV6DMmtuHeua2vAaj7mNoYxEPQ51GVudiCNQmNMcXcYb922MVqZq7U92U3NSVyvAX",
  "key36": "2sGTFZZqrcqoKCMMuUF84A9KytUh26KHtHc4s77KeUmKaFSwZ2XQUf3o7AfxDMu3Jv92J66qigcyQehptE4uXrpu",
  "key37": "3YsS8AZvU4xncrBosacEwG87tGs6t7fuuPBowd25T4VQ9JNqpAp92BUfxdKEdCyAM7afG9ZxHrT46Wzw5uxYbwQL",
  "key38": "5TuN96fQVHGc9Qm5vvc1mh5nc6baKgjK5KGtBuQaCuuYpteSMnammQma3cyenrLayG6fc5U6RWz22xtp1pcnohUj",
  "key39": "3D6FxiAH6uJjcHEzzte71ZNVQJzWELkKvqXU8MtHVAfLnd5RPaVDTxSAWRNzUmCUZqm4zLXndogW9UkaMc6qh1Bq",
  "key40": "jQigXz86N3EP4zLohKKy8RuE2Ag8RaAYKHTi2Lucy4ih3j77yQP1vcNtDHzEW3hVzhaSktubCDPN4J5QBterCSo"
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
