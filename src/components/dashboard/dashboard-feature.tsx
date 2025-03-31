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
    "4ayYgbATE7cW1Mh4imQJYnW5n6gkozkQbpLu7V1o2n2zyjhKM5QXfCE6Rz3sA1KQLuKC1ahM5aWQBZnZJYdiWsUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmKTPM36RyNJ2uPZye9veZ9rYEAM4fYpTY2Xn1sRUg2fkxHvLS1SMcX556U5PsWMNjnEAgAsw8QhE8Dw381SVqt",
  "key1": "3Ct6QZLTk2xGGzKvsHhYxQZb65HDKJn4NihBkGfEno3XxFhrXep7dxsTz8ztmPQpuxwEpx1KJUNk3DpAhBLUdcTt",
  "key2": "243DtzrjFFgQ1XnptpBd3nnwYV9GzNb7EPjijYFqRQcLbS2VTYBCG5BTvK82n7e8FzzhZztawP3TZGKN7C9jrbdw",
  "key3": "3cAGxRJUEPQM2M2ebhTK2bDVR1ZJEPAo7vdmPWeLB4XiumDtRktg8gwJMX4zrPYvRUwV879tr7Z1Kns7tJv9uj6E",
  "key4": "5BYw3C3BLRQmCJGmMuSjAw6RemF8xwW1bNPb7JKJWBjbpU2xadGu4ubRftdeZpSi4TpEeuoXtwhz39vn4undk8C9",
  "key5": "YXmS3E5XSrUNVcZ7oM2iNbjBifQG9riBMHedq5mHgJ3nXPYEBBGc7qRPpqBPNpFF1fQ6NzCfQUsXE7r6CRmEyDf",
  "key6": "4nwpbkpbr6LKQ7fa5p6xryX1uP5EkxpxesxupSo3B1JGASaKQ9jvU8Wftctj8SiCY5E1V8exrvbFBmpgS218YCdk",
  "key7": "5q9F4dYSR4F3s5RiBoohwkd5UAQobGQrRnejZM9NhvKueMTrcG8Vg6pdTL7CELjnkfnqaHQMAKtq6aCwcp6dtroi",
  "key8": "3mBqr6vsAFLfAqimadJCW6gYrzqBYvNd7engTwxbjxYhf5Tv3yc2Lq6MEPE9qDE18qaRpi14MT1QPpzP433yHkvQ",
  "key9": "4wB8Q5GDWsSLXe3vf3GfxtcmCQ2eMvxeJTba1ksDm8m2vhhnd1VRJYVsZkZJEvtNV1ab2iyHPUXUyzULAJX5Kua2",
  "key10": "55RnzmFoHzD4Ydibjbw7FY1hZMDga9xzzXQRxDQeZkhkKnBwexGDnPP2ac5mJ3fbv78bbroSHiD6Emcr3cJDKniq",
  "key11": "32pbLUxHuNDgHP1xMPSPmYw2S5jbGCYPH6DQbnozZbj2TATbDTNV5tUEYWvW4f8Pe1ZW7zwERBj16GYgzXrmJeCn",
  "key12": "2WzAaX32mEMEVKssVBgNem97JTRkt7xMciozBsv4VUbLWZDnP9NmK7wkpk4di5FGTSCkgTGmDzQXJWZi7v9EMAV7",
  "key13": "3icvPZcry4KuAh278ad5a75kuCvCRFyzF2zaX6sc2TjYocxb6PP5oVtm6DeLcrhNHLitbg8oHxCrkVeYGRwFPzEp",
  "key14": "3EiLWqATUDLpEaU2mj8FUNDhwvLwJFtiQg2nZiYmTF4FNsYdLvGREMLcF3Rc6vVaKeUqg5YsrFQ27GbSDXF1fCqQ",
  "key15": "2rYorwuHddcaMaCHAbng6Neh59RuNwQ1w8c32h82FV3ep4gtmiLevB3zH66kcUkqvgnyN756Ng6HTQP8CDpdQkhK",
  "key16": "4MsgUzaUrRobg8UaJDpKmxNqLAVjBg1dE9rACYQQT54hH28nByem1k2YygMtNTAVeFGiPCyDA92R5LfE8Tjshdy4",
  "key17": "Tr1qJK1FLMZiAmCyJMk1oKx9Cam1DYnnpXvQzxG3kMxA9pvyDZwTuNiugiGsb6tXAfg34JfTSy74EPzAGy3pb8c",
  "key18": "3XXF2KFHLZjtTgJ1QxRBELM4fZwVwDDoAF4TScp8r1v2zciJFfdFFCAu9GpfUbsMm59SCkcn5BDDk1Uwae1vkrcq",
  "key19": "5yTHCrP9KKrfrKKG21kd2EiPQuiMJpuWgvm2WLUgroQeyE6riV44RTuu6YeT3SbgXD6CYxwtsC8DxttzNTFRpnGp",
  "key20": "5E9aiNZ19K5jHqo9eoSx2PQP23ejTDDAigoSXco933kqP31Trv3bcTokfjreYuQvXsTxW6M8dcfaqMp6X7iNDZdj",
  "key21": "3NH3APsv3WZfYNRXG1UZTDbJDjrLo1xT6Q7H9tYLqdwYuvmRXN4kK6D1ex4cPgCNfCeanESTngiWjhimt3QY2ePJ",
  "key22": "63GSYceEyRZqEyisKDz6xNE23iYsWMa19kgs8dLjyy8dNcwsyt14Bynb27wBeTVgSyWnZEWQzzCCJBAZrG7LFyp7",
  "key23": "K5kyZRmoV7hRP74Zq3DDvCqeG77ZzqbRuFifMSLJfH95TC7npDHEdLG4GgdAfhVgidsjNo8NgscjBFPt7iMqcgC",
  "key24": "27xRhFAesN9t79ATNA8xZvJivv2N34s1VNsmAhaZnphWMrhJn58AqyT9bRh4jgekqg1UwZNDi8WYqXp8U6mQdhub",
  "key25": "264WnKg6oLEcJ6VvxJ4Qpc7oqdAwiLRdTNhEU2ACihUnqSebmrFJXB1bBsfxXv2Wj8ah9ehWw5yknzFL4v7f8kBL",
  "key26": "3pcLXKHzir8WY6FN2ZNwFXf3tfQMR17caVkmg5KqC9iqSZVv4ddAXg54jMLQZ2WwcJweXipNFpYzA7feeoTcMxJE",
  "key27": "3TFs982XaZBhKqFytJFn144pmSgoE6pnQ4itn9i5yitUf6o686TaeYGFphpf75f2LeFjpwWqDKdU9GZdqs5NbTVB",
  "key28": "3WGZ9rJAQCG3wXqTAJq5zeFKXobpdYMEKeKz6yiBLpfuBVXUGF2BFsjFCdXexA8dDfc4qmbumNTDMN2abuY6biVm",
  "key29": "3iNSS4EsLLzpucpECfjpx3DSUvXY6F9gjBLAiSiPB8iKCBcG7yZomjhXH2Et6NGSMS9NgEUVMb6VqJyb4hgZT2ZU",
  "key30": "LbNEd379uGxw15kMhbtky5VbGcMDB5VmknvPK9VMWQsgmbKVqHpk29iPjdCaQKcCYDKhunqCC74GzuEBbrDH8uY",
  "key31": "4m888sqbP95KGyGJi9bSijZLB43foum1xhRjKvzjybR94vj4sD2RYKsoK3c5nc3ZhDK8ymg7fntHbkj7yfr2E7CM",
  "key32": "vEZUj74N5MgL3UoGw1qAc8Wq8ofowVng2HrX8CUmkEiXB7iasGW7UXyPUUfQ8GyJ9ux8vgia9YXWFJX3Qq7EkMH"
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
