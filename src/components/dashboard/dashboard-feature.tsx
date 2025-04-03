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
    "5gdmktJVrMubcjYt5Vtru8MEGrsNPhABPCZ3Rr1Eb1f3JEeZqHh4c9NsnsedJpYuSQMC2qDB1uQ77hLwNsALdouq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKSz5A8eCTMCqyHYGefMsjnDTpJUY4x6z67WPywdFjNyvqZj9VskGJbUTuLtWtfnjXDAxB2Ak4TbvY5c2n1GUPe",
  "key1": "5EKvzf8MdnuFjfm7kVSTAt2aRvbgXgF8S1sx86CEPG53KykVcJDLkqb9Z7NYyfq8kinoAueJ5D9MwpWnv7ZS1dyM",
  "key2": "gX9e3qjgMKELKN5Kh7bh36B3fMfVKQFVThH2w7UZ9ekvYGNVtevbzZUyHWAXqu5BG2AHFEeKfeKGjR47YaSZC4H",
  "key3": "dpD7E6VvGMBDRDhmqbc51LJbvSFbYMndPv4CoUNVPz1qkMUM4aHi66JFcVaPmaE1EuCk2UvPsUYC1dhC7DXU9Ri",
  "key4": "2s4pkfWYW9N2MSXz7UXRqAWpi1MsXkwMfku8fnb5tcJDVo78YhirgfLofwBd5GTQXGjCnZPQ4kzaUkZPUcqrxqR6",
  "key5": "2YGgtmJWA92vyUyfunab3NqZoy1P22gctdFd3TzvsUXLbMcXQQ8enT6oP7gKxz1r99QKWu4U88wkyMcocyw9KRcm",
  "key6": "5W8cQWfhqVwKCGCiaoBd2E4FUMFNWFfpq8QSY1ubGWEaZEQ1B12pb1dK875Y7qAsZzYrHfzKZvopnqHUHpUFCFmJ",
  "key7": "4zbkCXcXz7Y3keFr73KYAWMczXRC2rcSUxMiqWhxZSZgPGhLcEuHQE9d7mGznCEhDJwgbcLR1gXuW5dm52XDKSVr",
  "key8": "5ncmBjtc44Az3ggzwCME8u4sQ8ZC8DPtuCGKLkcnt7kRtrXq8nZcM7yW6aaU3UXHjZSoGM4mwiTA676GcnRZJGpK",
  "key9": "5JQapG1LHs99XXMP1ZBXE7bG5omk7CH8ZKPgMKa2mojYmbiGNJaGjwGTfDqANDPCqGxAN7vw98xbgiaxfgUbwpnG",
  "key10": "67Y4d5DeaSU1NKGrkim4fADAK2ExTApPiPWBkGihhAVDHx4ZcpLGH5RSY7LzoeVhVBkNm3ahSgkTapWU4S8KsQGo",
  "key11": "3KwT7GQ8YWDGMCpWbvVQa9SkM2rvoGWUM2NqeKGbJg9dqr8GDoGG3gkM4ZD8k5JXp4QU1JpnuAWrgTwNmgkDKs57",
  "key12": "2RFaA5TFLGCAm7uyY95K51EKDko7Fowv6o6MK354akN4BzR5yWZZb9K1w5BBMQ7P8R66DhBrRND2Qucii8u4N8jb",
  "key13": "2YLvEq2taSD75cUT1avDupUMtZJRTFBRPCnVHYhdAK6VEP2UVJoQABwBmVHvcGmnCxgkBq7ejRHL3dobJB1Ez4wr",
  "key14": "2oaN7aUfj4b6gXHSFoGLS4yxcuV4P5Bgzx2MDdALHcUm8DfBPSK8kDoqfoAZKAmrQJ3RBScBrnPCGWGWsSbRcRaF",
  "key15": "121xssCsnby2L8zpYB9VCAEfW1w4XXbd7ykLKLbhd63vpfV9WJ879egXjJnciyoM5a65e4bSJMEYZnUvFNWtKiRR",
  "key16": "fjG7E5gQ4GS5vP9qbnW9GRoAYmJFwoy6sEv4L2Bq7f7pY71RjSUuE7DUSEhsFb5FoVU1qfbPGuSLgw1vNXGjAb5",
  "key17": "68NUXyWhK7W8afb9ZidQHvU2244RZgLsqUAuuRyuNUhxvbrak3xMN2Kd6EdrxGqbxfvvFRCPF4gewu3KmcYVoCB",
  "key18": "5rexVTirMJS8BvjvWJvzEm6Hc3ysXN48daEY9U4YQ7T1VR4PMhD4PVcDwmUWQS3rH21GEfhCYeS5SyTctjztcDiA",
  "key19": "2aypmSDSjeWkj3pZyj3Q8z9QvyrFejNBnaeCoW9FRSBjnfyNBRWW76EYbuhLAX4ejVsd3PQryrMqpMV8AWP1KNur",
  "key20": "4QGf5vm6MGf3N13zfH6hcNG6AdW2qmeimLJ4cZiHRX66TN5Tzz6mkGaPoTBq8CA2QMD95nEf86x8d4fQBXK1sPZh",
  "key21": "fVgjQ5hKsbkLga7xefi8bouCsvHyLoYSNft38VKRBnwJmTdUBB1q2qNs4HUY7hH9uauLNtJFE3qrzqpLq9E1Dda",
  "key22": "5vmy2qEc7Z7WctLXeHdp6oym9fhhwp5JmAxTWyZGEZ3x7vCV5kArDFx3msfma4q1vYQ4e9Nnvpdo36k531GqfTjv",
  "key23": "5cvnciPV7xJqy11Jmjq82NSijzEUo1N6rN1eYjbc3PS9soFFUrkcKxfwEzJGexMy4VaExC2CNNT3UTsE7VtLb3s1",
  "key24": "42XET31bmTJ8gkXKY8HXriBvrS1gwTANPtXuQMvbFtfdYwY77h8JHf5WQyo44o9NMMK4D2TcfSBD7KCBSzrd9hsq",
  "key25": "qaMyREhPK6ken4mPVMy6tTTENZPp3iNi5PM4YDTiJqVbo7zGqSUMA1iaTR5Cd6aWmFW5Y8RcRiHdDhHV6DBZRue",
  "key26": "451NQ8p7ktMqBttmM97yNS9Z5haJ5tCdyuYd74Lrf8dheZGT2rpNqH9QFATsgETDkm12xn44QocYnLLNgYBG4fno",
  "key27": "23TkENbfgvMZKeJj3NDiJRtToXVx7J8P5MRtsDAGztfZo8YiGZnKarqsyodsm8owvCetCZ1nZuRVbasgyNJgT3qH",
  "key28": "3KGfMWk2WocFYG5FRfmdaV9U2ywRNT9Wopbhxyko5jnjm3wWSE7YwBLtSsPuw4QXB6sADaahDfZ7ii57rHW644VE",
  "key29": "4WSWnNnfcgKTHwrTUVqky9KS81NXsA4hpHNegcKZo8FZ2LcYMdrMSerZRb4GbD6Mon6nd6tmK45VYWGuNmAsKWLP",
  "key30": "5279uSormEGveBMxGdAAXHj4KvEiA6tUGGaXcTqUQA2WRThYbcb5yU8zt42FL27z1cbbVxiZMTVGnwPszaFTeskF",
  "key31": "4VynEEdrJER3xT6oSWepkLQzMb38Nhynpt5g32Hnn3F5Q6KvbRVmLSekh2RWAaEQxssy8JAA24x6VY7dbaCgGa7T",
  "key32": "iVmLUB7mokDU9dSYQLszd3ceSJSzG35rZcfVjaK6NCyQHMKfudUqZ8BoefSxgh7GrQNXB2JLGZ5fgyxuTrZPuof",
  "key33": "4uF9UrNVKHg9yeEaG3TdP8PXcjeNYw7D61Sk3dq9VtgKCacyfLXj9siyydC7CPXKiWAsdfDQzobkFDtdggH42QdQ",
  "key34": "3netwAgVC5awPxWPTWJb9ZxhUF9cUW4a8WKz6mzok2vze6RGZNDD8ko7ubhenXMFWWkjx2oUrDM2Eiv4K6MuAAoc",
  "key35": "387GhshhRkUeDpmWD64uzTU5t3H1dM8ug83Nb5zrv6CchFesM6JXA3DUUrhCs96YzcXPEm9gvDK489Xi1jWu8eRh",
  "key36": "413zgjxmgCrU9E9VRGwAYVqaTnpwKtfDbSccBR7bjoNq67NEkw9eHnf19pwMBMWs5y7vBnnMgyevgY3NCzVxRyMb",
  "key37": "5jwRGwEDaLvXLGZsq7tBvd7aYmSn4APUxBRJvj2Dz2Ds7ckEczfSqoDrjE9KktQEFFdqNXQtF5kzQCzLpj33cH4o",
  "key38": "31GcpuoiMAwVhq3ssQMvSkxdCQXQKfNezDDHzXSsBTvbL3qurD6B1S7ZJNYFXG6ESuDkKbVwWrVMhjhVXMJgNYTh",
  "key39": "5N58PRC16tzQ7XfBYanMVhpuHJavrvEVaWi8uDD62MC5p2CcbAEb4n8N35JqxaPeJnBmpL41NU2ZUhAj9ysRcuxa",
  "key40": "4bbWbBtcqERVcsQNzTPFrnxwodMUJdMXKpYEkMWzVYqNzDS3iSUj4gCTgUKFcoVkdVVdQVv4XcNWCceuKinrjBdn",
  "key41": "2fGLrC2Kg5JuUWC5thkRBYXRUzwDeJfdnmiNLgeTjEittLraQWYGRpeTuGt5ZY2HQhGQ3RiJtbkgJYnrtnrkn4S8",
  "key42": "4mYrX2WUH1f1ywYNVMpUCMyTHRJgc8YGP9b2ejj2bMyn5SGCbjv2PkRUFwrnSgBRnSwfm7apfHqDiuxGp7NhQ32B"
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
