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
    "63dnZPBSL6zhsgQpAFHiGkGikD4GKcUkmWoCoA3p4LV6wFVPckUazQxfgj28vcSD1GMnryyV2zLGNqY6fFKQCdxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MHy92E4DwFBVVo6ZzAyckvYZCt7cTWCQK3HsWcDaG2C2TCfzo4CCS66RauvFksMiCwtRhn1FGWe27S42TnpNxvE",
  "key1": "FKbR4sdfAtwNoJRnNh7vJWBYP2azJNZia3U7bw1LthnJ4baNWzvGm11oM3pGmrbB4qjc79qE8vspVpD1jG7pQWg",
  "key2": "32Lwf8on3s4w47syHdMzMaR3b5UjD3mJiXhBYDJ44WcEbqQH1GGB8hKq7WroMU5HSiQPJtqFN5sdiDWL65FU1z3f",
  "key3": "3mkgXMTk5o3FTuLVevWVCpwU9i3nMYXc3GhQs18UThdQVoqcrx7mJorrjgPRAyE7rqMgpX9DdyuJGY93E2oPtPQf",
  "key4": "523gRmVqhVBCzNTwv9oquYZRz3SFYtBSKVdNNakYwYuikbuHJG3pTnAuzN4YAxxBE4mrgS3L72WrEtjqx1uicYCU",
  "key5": "2S4SZdbKWjwCBbdotjYNFZQzBd5iCeuJFrJYsuWH9HWgc2NDb8hxhHcZ3Dwic63UVM2f2edWciVCubtxk7P9b4NV",
  "key6": "4cAkB23BfybUxCbVxMcBLeSvTwg9fGs2U73g7cJtdhEh6vQspHrusPM7bhFX323BTnGV44FDeWRZpBQJzKLZx49V",
  "key7": "2uXM3KJgm1MGzZuJHnq8RfqVe8vH5RbRGMWBT7suAUsmpBBiiwwLUPXZ1qqhELvF9xm5AdFE2PV2ykatvgRcXDt3",
  "key8": "574HxmanichXBdSWuh4mZ7HRPMH8AA1V7SxD4HG8A85bbyv75f36c9w51HrpKKC1A7cbu2q4zwZg6WoVu5FVv3UP",
  "key9": "3966JR9xwANpiDkXamzEWjTKw6c2RUoWpuZKMr9AT2pCj41mjPX2CbiHfZFRQxzVoKTSk4URGMAND9oTZ2JmkgCD",
  "key10": "jqBPj1Kj9ULEkZWxb1yAogUYyyyBArLzvBmCAUMe86WyFJPUSQJM1z7RFRrf1ApGNSmEFXWbAG4b9BKCDvbgUab",
  "key11": "3yv9NBf1SUoLiPK4gDPhdQEWzRiKPHBt45jq7aSKbtC3qSLh1gbymy7wbM3N9TTps3UwkWg25u1XYh2zy4Rx4MqW",
  "key12": "fjqYmm48KB4mbTuBntNCHbSydtWfNqKEEmq7wWFdNcnAuBj5yibcrRxsebwrZMqPh4tDPRM37sXEgw1BZDYKaCg",
  "key13": "23rTgRTFBYwb17VXge4hZ7v4NGbt4ppce6272WnP3y27Mm7iRVN9ryJTx5tCQoHV1iVht28XotUAZhvPA1YdexK3",
  "key14": "q6Js22hSEGv2x2N3ZAum6mL2rNaSFfyn9sHJYRJVTkajhNhgusRoBax9it7kp8tbjV3wKVZdEm2s5G9MPqy7He1",
  "key15": "2rhTXb59SLE9ftQjygX54kxFAvekuEMfcCtDrXfULZrXPQS68teC6j3L9ab4dhvSxYBvspnzqqDpiASimhQS9re1",
  "key16": "2FADZiz1nVm2uN26kdBv5zWpA1GcfggFVEvRHgUN1Q3DEZFjknHkyDgRLwnzgbkXEjfHi7QVEKLsxVyRVkyTWbGD",
  "key17": "vsiUQiPhfQofpfaCDjo43hxeR5zZbjqnziyZZgQ3cF88TweKPinvtGTJDscV8Mf6SawzfoJHTUJqsrZqHeKX7Vf",
  "key18": "2jZ9jPrsNy6XQLJDexdjCgv2sps5SjzR7tCJ8QxQp2FdfjZGKrAyVatMUBaG9CANnktm7nm67Rm8vtnuTzXxHVJ7",
  "key19": "536RufvVMvVGrz1SY4Vf7NiyaKHzbMcVyPich5pEUpvJfaoJNorxtRcYx4uP7pJM3NWKQ1mwvJrLP9s129xk6heW",
  "key20": "37L1U7ooKALLr18MmankXk76pH5w8Zf4n3GUs76aD1KGdkt75jgY4gutoQjt4tKCrrUNEv85AFhKskwkLMeXZgMT",
  "key21": "5Z67quE9HMhgWdLrUgkEoN47iQxgv4CGG3rkYjTvJEjfHfBXkdTHiHu2GB5CdmKCLJi5idwjcCDPQAhFBRU33JRg",
  "key22": "HS8HeFVDSEL6gnbzT44mYSbBeNecqbsASfC16DuEtTJ4J2MpNC2SEXATKP4iXhZYjuQ4zMnPCgZsYeTgsqAg5At",
  "key23": "31zDSyJFfJXZLXFtdKf9e4VGkU6jeE8m6QKhX3hutzYgob2k6Fic7hrrtgQfrpyY9E6TbrYe9dE2HGHrC1CocBrL",
  "key24": "5NS2cQVheAuHQy9dtqcSsdYn4TEASKdz3TSbBFApLagKLRSP16EbEej12i8JX2ZEpPPC5aRuCAVQNU1hZMab3xp5",
  "key25": "3odqtTa35MeRTdua8DuJgsZU1KaP5sNevG83NfTMLMRFpwr2f7o9SfP78jVC2h19bvodYZpbf6FmsdPAXNLCE6To",
  "key26": "4A2tUcTWrvPUMzKBWhzwQLFKosyfRrDhSUo3Pp8v8oPid1CxWUBoS7ByB1TSLePTc73mJ8FRdLgXxDyAiufzJXy8",
  "key27": "bbWHbuyTWBcqQgkQ9V5FvaMMXczHvj5GdegBZpYoaZjsxJbzPuwdDGXxYfgJPF5JuJDoZuc1or71Z9hCuKghF95",
  "key28": "24T1i5Axp4iBz19EypTEKZEbADA19CYH4ctdZtAMuS2uhKB6NRsaeTnCjkbErGgLku9JyJw1HELBTAhgJXK3jmZx",
  "key29": "SXWA4Lf6kEVGJT9aZBmi9CiM1cq694FQ8nF7cpRLuQZuHEcs95ZE5qt8V9HAmh4TbBrjdzjvXiDchiK1YZg655p",
  "key30": "3VMVYM4vFimRkWjBh1WjZxeqPumzVMQuwgiMn65ZU19NnjGqWJi3jPRVftcuuTtMCUuPfYAcKRPTiMuXw3ojy9Lx",
  "key31": "2wdTP7fYL6Df6ysVmnnndVLPMx21X1NvH4hbzUxM2EEVC2kKz7dfCZ7wKUawBMH8bNGkpdxd6hF6FvbHHDtRrTKT",
  "key32": "4XZ3JBYH2oYGqSuSsqZM7MC7SLeZWT4tyqxwqjsnQd4i1drdHvhtK715Zrh8h7fPQk1Myq5kRd1z6v6DZZm2JxJq"
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
