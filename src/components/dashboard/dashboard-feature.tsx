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
    "5CTyCvS6deXfcV2ojqQrDTvHuu8iCF98WruujdxvF4J5g6728cUzFHP2ZzyuTBtzXZ64qCSEgCfzrGMe44h7hfQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwwomikSXdpRUDmUBbVcqNcMPDgat6EHUKakYMXfxrRceEEEjcAEzwrzByZ8tuenmQhbRq4S84zAhcN456NDHBX",
  "key1": "2QBaLJnG9DyaAfxYX64EVLEwUQsfL9KrHbkV41ZnEvuLQvCwPnxnwfTQZ8vXkhXsx25tApkpDWc6hnWoJdrfScQz",
  "key2": "2G2s47Kd3v6UQkPZNfAMJcMYKhuqkCp3qDBniziRZruy63X9ki9LC3j6qdBnddbZyonFfqmyJqEqcznCFNcpRhc9",
  "key3": "5kmVWWKhKEcCQRfQuD1HnRQva8x9tzn1EyzS2pFbuFbsbG6s41RyGURt2waF5ESPzrDPVijy4Hg1Fqj2n4ZgJHeR",
  "key4": "3ryK6t6ogtHZdaM9SgfioWxtn5j6RSNHbxHfLyuZTZHH5vtRs2GsZcLv8sca7kUeoaK4rh8NBjVcavoEuLyo2cmP",
  "key5": "2Ny6vvT6nY7Xw9scnKTujnGkvHKDhDUeHTbyeYUGMsVxoHR99FrcWhaSA8gvYZjZNmoms6nsu7NgbYYAKx5R7nRk",
  "key6": "3TF1N1LhhaFfCmVw5qrVAbWUT1tewodo6cxQVGfcK7WS2c82x5qBe7L7MSnxFysZoas1t3JHexj3vBk6jeu2h9VE",
  "key7": "5gtwsTfUEPNoUSE6cfeu2wUktWLzELmj524z62tDSzcKZJkKcjN7PN4DZZdGtRMfpBk9x1KzoBVfBV2ortvZDD6P",
  "key8": "5KUocMG6q3fEfiGDG7rszu6AuEdUDrxEx5MEufUc6MWgkPeqgjGzDxqvPZck14aQbZxPb7xqbRpFN8o563rV5vq1",
  "key9": "58McK88ScMguvVk2cuTsbA2WibNbjogJ6y1iLZwbQgvX8bux7fxsgfvdwAFGotqTAL5FY73D8S81ScfhwxW8rUtK",
  "key10": "4X8URSibDahw1BrtpFbuTdzR9VEXfqxMmnjwaAkZbwCKWadFTjucz1H6UviEM5M1dXDswMJns3yg93svrus6Ehuy",
  "key11": "3r9w4EKuGVGFsaxSvmi3NBTKdCL3CUbgMEwTuymnqs6rWyLLQJEDefVqvfoNkHNxr33k33use3PtuC2WcsJRcExX",
  "key12": "5TBca9Bgott6cuPMWLCxoT4CMmft7oypk4qA6DzN9LHGTKkhEbguMixSvbhQqykrojzj1hWoFdkcoDvYpzp1mQnE",
  "key13": "3U3vVWJeTmTJzR7LVM2RSmb6vnZ8U339kAWXBiTVinZxif8SpBw2GxsVq46U9TE5JPepgYMxUQzQfoUXJ5iEZi49",
  "key14": "42f1sMzxrFwLn5EFyCCodJz5vg8WrfwpfU9iSJuor9ajABSwRsQeEa6YJtmPKw1Y71ZnYXAuCssC3JCEddqAuBHP",
  "key15": "4FdNe37Bxq7q1JyHk1f9iv21zzZZFakefAm1J84sXnvY39W86i1iYtp5furUQ4V1cRx8NJuakSdTWBJbwWEggnKX",
  "key16": "5ob88LMCyLMG4GL2arMGSoCVzaF2swZFfnPahvGhPb1jmQVNVtL4734NDfNeWg1cZhUYA9pA3eCUW6H3FqtQfBhj",
  "key17": "6L4EGxh37TC4CrzpivLqfZ9vqrXi2A7GuDw2dCwj3byc47Aenddmr2zkwE3nGuvp8wkcMskA1ydmtLJjL3rMm4X",
  "key18": "5eoCUyqdnRUN2UeU9QXQPiVGA6kttYYS5uLbp8Qq9DKTZRYEZxCr3X7WxwjS8qeX1pZmGKwFcaokSD6GxLadxyyX",
  "key19": "5gUUqcQhzb2T1nvCX1ZfXbUd1xA5st9essc3yM4dAWqHf6fTQkG19vXBfJMmaD44KNn7GeSubNyhNaWFVaFaZ8eL",
  "key20": "4w6LFxkJUvWb78vpPiWAEscsQ5zGb2LoACoKU21e8saJKVvzed9mxey9YF4CyxGokERPi7FZfWjRFwVNvRUaGky7",
  "key21": "3Lerh2DbnWTsvRvjVFR2oFL9zw7EQeCcX4aZcDCXc7FgLS3iLXRzjUbQeNCcbpqas7XUcu9jiQtLeTwaVY63YZkM",
  "key22": "Dzz3jLsgtNzFEK1jb5N4VPZ2XnLacW6YxQ4cUtJ5ZTXt9da73NevbL6WyeNBLYqcBFcnCKBZcUyFGm5JED1JKPh",
  "key23": "2TRQgNReWxLPjyy6VA2mqX4E2Gj2atRUJSZSR25kGZN1mxaT8ZXt9dN4zrip5bxhpCBpCQ3RPftE8au9LcJymeFB",
  "key24": "LZwC3277EbupMiQ1bcoCL3pLE5H8npngmQHdbX8722VLPoXsFVVb6AtJQc1KeKdyXBJDv9VbEoL68trKz9taqVn",
  "key25": "4zH7N9tLC4pmiVqJiCJS5eXyrpRL4iSco6JUouLFd8LNFgipvQHFwb9qxyCsMDaNmNBoNErMCEraAxxvcAUDa5pG",
  "key26": "nG7Fz8DBSkuGxkukD3f9yBhayPF7Ah9WxHLYRNkTnszQJNL3pboBjncNCpjdpeqZmMdPBXViTwHVy18u6ueYCgs",
  "key27": "JHk1k3YqPFG8fpg7uYkao4Fw9HY5WMoD9cLt71V823BEGCvLhbW6JVC7Z48oBCgonvXWfecL8j7NtNu5Zp2SfdJ",
  "key28": "2FiHhiv7tH9NRhKT7NYvWB7ZhZtekJqc4a2e5wHnMrMpqeszv2nryqBWZ3TLEdBEBBC7uH324NPHfz5WbtQDVrce",
  "key29": "355QEW4V9jn9hXbHMbeGukNjABzEwwDKSPiK6gZgUMN9PZquQk3PfvxjUzUxZxZ2wNpVdmELc1EygfEP5NiDj7mf",
  "key30": "2qM91YMhYRtTm8J5dXGECdcvGgqyeTTfzChvp5VyBLrv9e8c5t7z6PEjF9pTzcDW1HjE88HMDBHrjsr7YEP6ximi",
  "key31": "3KM9KutmiMXM6kecXGDDLEDYAvThm28F56itA2FsCJdxWKPh4SniC2ZUrRtAsoLtnAFhVH2AE4rm8F32k9z6KbKQ",
  "key32": "5RMahkvtpxTGov5xyZnMXxPVUKmj1Cvo8c4NkxqtJXBVwMCPMsBKHwcY7D7k9hwNop8r2rgM4oo5cqMmRD2uPMNJ",
  "key33": "4Km8nDWMJirTgzcqvgKjH7Nh5ZNGkpmpdYJJ8pr3dqqSQq4uCtmPDCQwrCYJhfnXGPE5gxAbnk9v8P1NAznqf7FQ",
  "key34": "3pN1Fm7ErzgDVnm2AnTxHoMutH6DvxPFanQ5tKJU8wGdw8KhaU95ryJypweKxW2jgBUoQhSSv2rT9u1Zw1Ngs86a",
  "key35": "2MkuDzTFgntZbD1C6zHRDvPMi8dnHXkkW4up92xjTt2YrhoBmszJ2R2jayabcNqLMMaaP8ASru6gC1UTcyg2XzJa",
  "key36": "3VJPvaY1DHq1zhJGCVobWiCTaiZLnQacyWKMeRPVpGY2w1FU1HnVg5kExxAA134JAvWoGmftXLonumotmfYky58s",
  "key37": "tz2xehy2jHCvqqYVGrCxcbRqS7dJJC9pGVb8qGgP5vhU7r1DngsWx9vfPGSRbgKG8n32jdR3EinypkTN5saHuHR",
  "key38": "fx6gxcxkUMqqkDxxdjYrDoKqqhyWfsB58Y4nJBJszPtP2QTsaJ9zhWnhH4xD3NmHFiVA9oQ8G74JdFjB6kG7diL",
  "key39": "4137qac4NT1bZPeDBHoD4rAYjddekz4RnnBYGWYcno3Hfpb2jawn3pQZWoiDie6XBLMzsLDc518ufq3YuwCSZ2q6",
  "key40": "v4w1RAGbm7Ur4ZSoyPDURAsBHTyukBm3YTKupusME9qgKU6uK1MHZuJ3xFvw9uN4jc7rXb65aT3ngkJUgpNZBGR",
  "key41": "61JxzhvHmiKN7rfx3J7yCfYnpfYH6tu8h59kxcVzPtQvRFMozdRxGdPG2VKyGruqF9JmbNbNEaDjQpcKCoFcPxgk"
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
