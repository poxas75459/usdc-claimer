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
    "3D5U3xAyaUn8oqwEj2isTtVbFABU5af3dvdt3KgFpDwSheFLr4xi74se8EqorqSyxTd7EmiXUo5gvBL7KKFSmt5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzW21dHPqMBXMveWXrjgpAM6CrH1dvhMssY9Y5Ti8C42yebeX7AaCXNoXaYQDhEjiBuJS2DNZJcbhH6ZAnL9DB2",
  "key1": "5Y6Et4Q4bTSHeTfytPUSu3Vt8HuqmS77KgmmQ864m6jSQokxcXQwLRTVZjtM3hcLbd8TzLhp4c9AY99xycpMJTay",
  "key2": "45NCMktf2jsWbxnmfyGu5NCRSB2ce7zbUN77Y5PtArLJM3pjrfjZQZcWLWmraZfLYBKNCCg7DQSY6xmT6f7mmVqV",
  "key3": "4i2ELkVSMxU4aYohTyutvRhGKxWSUeC9ukug1abMnS9gf2a44A4Vx2SgmbjuCviUtnfGb44adv4k5wnefAziQeto",
  "key4": "5FFM1NKh3d5wKfzxtcEALmA2nJcieJYJa6yKcx4UGxq4nyVni76ocCGZsvWfyn49UmCzT1CLfGJBfMmSDLCktotR",
  "key5": "63cBZwno91T8b4ELGxAwdeZjNGy2i8Czvyp5PxmLr2SLZcabCsHesQVhGr8HA44m5Hy5vWwamVggx93gbxAgpDjL",
  "key6": "2cuQHydLZaL8kxuc2yjg31AHXiTtaJjYqhu4J1GeSqv6hTQqec5iUNmsMTCnXCryM9Sfo9FZxBZRaVhGaKhmvRxC",
  "key7": "2ty7TjffB4fAayEYnhk5gbhdTn994Y8GMrSUXeEpBc1xWJcMmv5FwzRvdt9NvweEwqk3VmFvCQsd74tofLMWRVzh",
  "key8": "4AXjo5fPfuTiC8m2WrrtkapjfwxPuDjUwbFGtAUf2Zdn3KWV7AxWLkNXQVySDd4HEp2U9PvhPsjVijrNarUHmMXj",
  "key9": "3SpueeDQwczKHiypnLkcwM6QHDrYhQEbo98jaJN9qjoPJ9bJXV7Faa46zD9gaEN4E8GvucmQ4u4jMAg2dZw3Q62u",
  "key10": "4DNTo8dZdWN1pZF5UgXh7oAGNKbWTyWsrnP6FWMq9ZUqPP36L9dJw6iFWT5rnR4bUSb3NrjcVx8ZCW4CCbi6dUbS",
  "key11": "5M1RRbPmBW4mSPQY1vMjVVUhMPySSQuwqdnGHciFraJYQYXhtpduqz5T6VYkTaZbVexBbRVjHTxBEKBNTN7FFWyp",
  "key12": "2quzGrskL68nDV2mZ7uAMWU8bHCn1oAEHs3H4WdjKLcr8tFZUWa6jnQPRdtuHGqenvLVrjPeNCeq9fLontCAHUky",
  "key13": "PnJknkfjwULVoRXdaCNFpjkjfmBVUzUpDhhNG61bRetriUycTMXQUqW9ktcRu9qeVYYcRZ4pqsr8jbzVzJfiWRS",
  "key14": "shdvLXiPpGM4bkXAzqMonF43mL7ZSgjTtf8Q9zMtm61ehQPGfugDD5TSzEvEsbhcFMM918n8kuc6UVkCpvgHCsk",
  "key15": "2ryKWtGG9YEefCpusq7DxfzDhhQTt8ggWXYVXRonRMAbAqDpBk2KndNqUvaa1SsrZhbhMe4c3HzNkJW4qoCaaCj9",
  "key16": "FszpaWxYCautK8is7EnF4PX7S2N6YFivqFBePzTj2hPtC4JDi2BwAXmQ98FokqitmwWHLwyQ72D77q32sn2JfKF",
  "key17": "5gJRgcB7fx8ki19V297nic2ctBazZCT9s5xxU7xqNfpJyuK81pWb3Vxz8qUrnsJhBnZ3SGRa61DPo1qPMofZkGcu",
  "key18": "3brtrDDaCLLLRq93iDvWegrQKRfDG8n4wLMzqyQpDZAdM9YLeobNxnc8Pdxya1iWQoYYiK5H3WvWUjm7dCDiY7Fs",
  "key19": "45ayGfrLMyDv2Wd32djLiuAnTxYbVg4jGSAw59SAyFS3y9ejq1xd5WMbwdee52SqZ8icY4ao2YzbikhcBSzjwSTJ",
  "key20": "jU8V1rDKXUx52Bs6PP3WgHQapPNgxyH35wVBTYhdnwhUijy3eXNjwUqm9JpLiXuaxDsX96XXHqjuGDMW3qKqAwa",
  "key21": "5mFjc5TmyzrsfBNHSF6vds19Ek1w1qoGo2sQoFp7anycg9dSUYDs3GuNPfQ1JEChdCYF23BrzxGPvSvgr14MLPqp",
  "key22": "21wU8Hv79ipcQaHxs1DZo84c832UJYKgvdtuxnMafipPXVs5L62EBRcftDAaZMaukDHQ5Nyi7kearW451WC4GjHf",
  "key23": "ZbUW9Emcpu1WgwNQzat2HDf7d9TtgWNYHhc2pEyJ1rhxbj68ZdLQsYfxdG8N5bvrUfbu4YRL14MTUw1b8JzKuXc",
  "key24": "52LxdF9pfEHRWBnf1UzQREDrY9qYWhqKk6UPnnJcWiiKCfmb7oNZH8tVHQLExHQuizpN5UiqkkNtWRhjeqvRTm19",
  "key25": "5nTTaWrDxrCjCj7FzXULEVAiuEB2h3aiBGBDRFz9xKwfkdQfTVgvhRLk7xG5TFhEDfw4cLENfcnPn6Mxbi7gfWvd",
  "key26": "5yAPKfbvzGQfQ1VvmVMt3mz63Es5AFg9x5MRw2bdqwxuBiVGc3Edg1VyoCpCGjB9ikNDSrBTUm7wxsi86zyTp9zZ",
  "key27": "4ooSUFnFe3Jv6meWex3f7hCtENdaXkWUzR8TXD9zquEdxjZyJSDAmXkEW6kUagmPBpKfqQZeKcKsxWeywdcDNBjs",
  "key28": "28a7p1goXxnX7SLRKWK28i8ZqpAM65oDymJvfHXgFqGTp1z82kTY8vBiZF58J3zkbrF94QWDv1o2AG8iLqLVmzJR",
  "key29": "4VUqPq6Jp5gsYZxu7woNc8qgAQfaTFpbfgvVcxoxscz6CrfsRz1WLYFgHscRnURMoLRSE5W7ArtbN7saQGPHvY8t",
  "key30": "5F3AVoDMfzK7Q5gpsVWAK1xNz7w6SWAF5kmBfExT9rubxPatnaB4UPuDPjpFaGbuDabFYWosqF5TKKu8HCxhNoph",
  "key31": "25TUPHTtre5mCCzGCeQALbPmPJi2KW94N9MpK7TiZoVVrpUQb3TZqnYQsmxCkRJA4xB8hFvCs8gLiYPtBmv7WRwy",
  "key32": "3rDyL9SCNXXf7WeRG2gKBwSt436nBunkwUxqMdCi39RD2J1BqJNbwSYvx6iSLyFLT5utuFXz6G7L2yFK9qxVwxGN",
  "key33": "JRDWFnuxi9p8L4JSgjt4f9Kw6nQrmWiAQcLAzDgVUptw7Nuyu3McLfJUAT2LiDuS7AGoQZ488anJ1Y11ryC9apL",
  "key34": "3F1dRYF1kr6D1vFsQXDnkSMucdRg1n882xiTeYsKGWzC1RezKFyfnaNo9n2FChQktsWkXUzyjHrAh6H2erR87M5m",
  "key35": "2zuajuZkLVEyUXTc7PVnoMuuB6eBwSuKmqri8fwqAEuQHwLEDHt28apNP1FRkfkd67kK32ExPByqEiQRt7NZarj4",
  "key36": "21eCRrgZrBvKtLYubDrK3iWTcNhd1Y5U88USoZbpDYAAKNXcas236UgLQXxBkoERN9F1b5WFAfnBUxBRQM6zxFds"
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
