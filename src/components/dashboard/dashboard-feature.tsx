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
    "2byH7ZQr93DKchdLAWpeuDQtJpqqKS3AQWCs9JVX2bjzwLqm22yiJp9E7WJE6GVx2wPJtiz98ZcLUTWB24pgPLDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASUvE2P5QUubvBX6fveZNA5j5K1Kqf27mjCAhMB1jEwXLtqhYGSV3s8ufDrZhSfiUckm8oe87SGCrH2ngpRmdYE",
  "key1": "4cgPtbeszPH1bC6L2yBip2G8c3os27fnbSYKfBDE95kUFFYErYLQzTKSpHSNJG6WdkbKGaJU3ESqsz4fZdnRaWYk",
  "key2": "5SZBZBfY9wKYgrKG5EkHKaFYAWQeprfrso66AtsFxoRVYX55Xq61MTpPLysrsyR1wbtGcCzPXbqhdv8YNqUFwti9",
  "key3": "532ivFEaJ988FUU2YVSuJ2QvNQhDafQoQJsuuibMHxn6m1Stukqirz6ac4LsRbYJnfaT8NjjkZ17Yct4Ae9bZaQu",
  "key4": "5D9WwMVbia2814QRPq1Vv49NKw7JVYoCa3RLuGVwyBgKvCZdp2GrJrQ1D7bxWJ6r6EmeCMMr5yzgzuxpgynd8Mzn",
  "key5": "49q4EDjEHLFQATnjtnkZ4KaLqKNVxqi153Gq3wbsHfdohcbACw63bJZCdEfzdDJWuCbaqEhBgsKE1pr6avD8SwZr",
  "key6": "24fYjRXTVLy3AiJ19ziM2ebaGBZRYaYNB1Uw8ZhCwna7VU6nTyNaKspHNusry9d1VVWUwKRZxKfVETRKiFr7Zxkv",
  "key7": "2sqtTfiTHJsuoUVjjwSuYrB9rebJhtpdBqhy7GGxsoe3AaAJZZhMoeZTRVJgVvZuUWp4iJ8dHCtgLB3miWwPGsWH",
  "key8": "3SHYPkq12sycctWf6DmuMbNr4eg5Qz7A1HxPtLvuaJHF9TFU1szDnhbK9YL6GY1y7d6QrFRPgfQ5Rx55qd9DwxsH",
  "key9": "B5mDwx3YBc57eN7j744nhJaq5FvizRUbzvtsy6X3NuFm7d73czJEoGqnEsvVamKFsrHBjkEtmwqeXrJCj9bZXHF",
  "key10": "2NGmZoN4RAkcjkM9RqJRcpVTepWy6EAs3JcqkL6PyBimWNQyLEiu7cmWtfsgz25uka1ctE18ikMZmhVBtiAvJD3i",
  "key11": "cVnocZG443L5XqVzQWA6cVCsaYAC8JjtF8dtG42qKUoBcQbxnpfcEKo9S4VF6ZYMNsg4VfdGr9uSof8FR7sMva8",
  "key12": "uJGyJf1EguV7y5ZjZDKbUnMJyRNrTGb8XBnxZDYHNLygwXdCbwseSbHkQvpLFFhW5WjCzLRTHjwwH8i4eWyH6WT",
  "key13": "v58BqJ4Xa1skazE11BxcnWdk5ykMoFHGjCJmJAHntghxgPHbk6GjjvmhF3h2azE8VikPugVfbZtyHc4AviAnfxs",
  "key14": "2MNstHHUxDen7gQMvh2rLAR7mNW72sdJT71fMyPDn892fuRNGASCoTYo5JnKTQmzYJKBMvGGAvvskLiReejBziRj",
  "key15": "jf7pBEZmddg3uRDtbYPLDZKYXNNW23PMbvPZYsrEgTR7DuBsjN6fjc1wjxGbkTTa7PtZTSdv4Vk65g6eG3G5gS3",
  "key16": "41UKAtraReJvoWitRpmAEcRb1fNd9Yz3ujvjwrhsALN5Q95Cb6GygLQcDQasmKRUDbcWaGFqSDUE7Nvsnuzf7X64",
  "key17": "5gv8Y4FdQTReKzG9zonrFVnD3i5i5HibuAzn4Xa9usYnCqoGdQbhCu5uQER9pkvFKGPobAGFAMHVPcnGZykx5X6y",
  "key18": "Ch5EDXiw4aWckhCS1as6JJnrVCnSbqSMhNchRWE1MFKBLwEYVf1kLBKCdHXZJqQuW64ngQc8bdf2YzyktRnpydj",
  "key19": "31cb8aiYoHAwMoafTe1MMb3Go3dujv4M75hS5mWhvXopY72X5dNkHUzbVS8XfPX9x6KfAQXdudWdstg7ozAaWbXc",
  "key20": "2hz6oPwW7L17rKB77LSQKNPCXfNA6rxMRw8sdWQ6EDVMosnsbhdv81UAr2kj2eu2pmCte9HxjF67pXdvjopNx3fi",
  "key21": "27q98ccGL4YezrL5DnVdG5ozrgw55VaUtwMdvE4vL9yUMAfyoN6m7efC7DSmS7V2Q9AGrMMqaUfyTCKtprzi7QMs",
  "key22": "4KJKqpKreerWpQoUUiHfYeXqbDUsS83aXcxJBNLVrERhGHDXuwAcBYZncYb7M2jNE5vP89RWkKxdPLAVQuz6njdu",
  "key23": "2ku5qJGuFGYPhhAdcntW8XVBhoJhTQCmqDSB1LfMCGEUvAQWJeyvSSQLCagEcRYMSy5VEh4BpmtCEtt15L2GGAta",
  "key24": "5G89fFFmxqcrzUdsJZkzNtix7Q4cCafv48Cm53pRYT1JDMDs5yZdLQWv5ruhzPH2fha6xQvhMcf93GHFoUHL9hJ8",
  "key25": "3xqoCkU2f7kzf4AZuWfeRpMCtP88K6qy69CRfzRSNXXdfjwpiWirkLxgrsDYqk2DtbX8zDHVXiyBZBkWeDUo4WYW",
  "key26": "5EoJ4m18dkP5KvrWWbcf7ntyVd8av9Ek9CT7CcTK4G4GgmV7P4srzB54dV4diwFoio5m4EiUR2GUo7Zr5mscebtL",
  "key27": "5m8SMs7SPn2jgwc7eEVChMvB9mhRfax1DN4dGvnk1HFjT25kHsik4BxpfuBtkCLrkQcyQQtQCCXQPwHH1DxdwE1Y",
  "key28": "2JXb74fAbUiu9sJb8jmxdw4ufL7ZL5VKwGePt9itofndXURXnphgSxFBSJWCmcYQnvxnxMgk3G59aDsnk5i7pQ4Z",
  "key29": "2uMwpMgZ9xwk3Uo6ZUDQWWtFPTrrZbWzFmuD8hwqnqvvdsxPL2gv3ejH1kmACCFjwTgdsZ1C86Y7NJKRYXKWo54e",
  "key30": "558YNRaRymWtqEedqGfRSkeJiuYjAHteDyPtZJdrmKZMi5pW6SGjQhm6uUnBPa7V1sr1LD7241rYw9shCErHbr1",
  "key31": "4Ru5JNagPB1UHNSZ2jqKw7t45v4sjSuLCPpr8MZBNcHfVKnyaBL2aQ4ABUDygzTFbCTXsoxXmC7TZKjGVGPFxnr8",
  "key32": "5NbbHKP11ctugAyvcSRpZ93Eyx889Ci1TRFMA9mBNdbUqEazRR3fuKagJzCr8cSW9CfE5gxxszKkXB7nTD6cmAju",
  "key33": "Gx17JKfEy94uxibWRRg5gVk5N7ejHAxMCHjphuPDMTGHshs3p6HGj5VViko7zQWpGBMN9TzEvp5FMEgFPJmPqVY",
  "key34": "2cDaHQq2kZTe32jjNfpQsj9dPbs9WPzE51G4ZvYBsCNhTxSTkc9aRfCehNDHDvGeqSWNSY84rUBnWT82YbwZLa9K",
  "key35": "2hbcHSudVztyP2oNeFHgHKmc3PYUPRwPsZKRMdmseuAqDzaKpL3NcR2wiNfx6JoJJujAfEMzjSDwAJF9Kr3JSWbP",
  "key36": "2QteQGPKmoPWPseiBeqs1sVq34mpcmgff1vrnqec65SWYXUebjZH4seR2JqVq4mrFDuAkJxqYStA7nebanj3x4ov",
  "key37": "26rAKfCcVeaY3x3oMSxnCdDbvnNP2hkBUo3RqKZHrYMrfWTKgGQnMEP39PdefvtincL5BUcvM37XvroB1SW4h9oa"
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
