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
    "5DV6jKV2oeEydj88QgFHzDXXNFuHtxwREkiGDDLwfyaKK7VEainxaEAB4tUL4kDmsuXj7W5im98yky7bdt74bqAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PqULjseiLmNp7uapZaFLsvGSq9vaeHUNm59ddBkqeiNaVPqKy9u2qunhUzwbUEFuQ8mWb9gNfat24fp1ARbpiN3",
  "key1": "3hC81hkaZ6i86ZMMtxz9r95cv7qsNdGaPixBJV2Y1Au29KCGvF2PQ54F8sFRgJE7ax7NkVftriE6EViayZeBanhe",
  "key2": "45UUyc7L4j1YqEV8UX7tp5vRq9WAmkHsYiS4QhvGNtzcjeGPftmJHueB5oHXvG4YgRBHf3ywvjL4mK1pcj1CvnsD",
  "key3": "4G2N9jZdeARkjatxe3t6nymqheBSDnppvsHNzProUAuuSU4FNC3SVB7Bqor7H7P21EksaruQD57ducGWc9eh8J93",
  "key4": "2efbtWjP8me6LLPtfZgqioQ8w8TdCueSh8AXXhKTB9kXRqz4U9d5kx2Gp7UNz9zwPavSwSejmM8vWYsn8fYzrjKG",
  "key5": "2U4f8LsadyMcEsYEQQycx3Qzc3TJsYzs2fuiZgHMEsyXJueZytwcoGhDub8JW7jXXyfQ8eSTvKCC7xEtA1j26Y2Y",
  "key6": "2hk4yYqP34DjFTJCxrV1A6wXnjVy7ukfmrgTkLXTj7Tg9G49pgbWyc9h6vnr5MWhyhdTNsWVM5jmGdf9iZhg3kTx",
  "key7": "4N8AhvTHP9AUidLiZSJ3FJkgXUYsmNXP3KYttK9c6vW6dUmbcPW1gNAhfsMZk18ZNyZ4Cird8SaGf5pUsryxvgqE",
  "key8": "3ZW3fNsScxGTj7tVJQJFGrJAEm1EZZ48mgoTBVheyMbiBCwAWZrFVxh6EVBo4L3Msjz5rWregVy5DynDzNPzw7hi",
  "key9": "648znWWzJYvrVNqB5siR68DKcpnXLUZN2Qynvfd6HVbrBnze8xseXUXKt41xG76fL4oUWHaw8YgPAGyW9oFdyZSF",
  "key10": "ENT1d4cawfkEQoRpXAD4g5wrRCTZ3tWpA2UMULGULfd7to4To4CZrfsbqZVQ6u4xZZUQYbKviA9aMSCCUhNTXPF",
  "key11": "x8w1RXQZYRDRHopSRMRh1BkYMkaMZMmCZmtHzCM6D5H7ucZnEfbiwp4GUXWhoFjSnyRVzMKNg58QULrWUsyGYgn",
  "key12": "4cNyYzjcLPdG8QhpvcDaNTs2NZH7LBJ8vMvKdXJ92U3b5JFXPDGuLstyPMqrtfib78o4TXLBR2XpHcjJBAx1W9fy",
  "key13": "3z4khQmwmXUfbGd7T62XQ4Mi7Mo93m41pxgDGeSjQrjjZ5Y7AiQnsVn7TbhciWgP1GJxt6FfGumhiPafHme79Ubo",
  "key14": "3e6stJoA3kQ5DDKALK5GgtKwJQ7t7JkCFk8qu4UehJcLqcqhAt79MdDi7g6jSXGMdJZCDGxv66W3C4RJd43WhZc9",
  "key15": "3Ufz13UNdGSP7BHNJUnQknEYAzBdzzeNojKhS2tAokyLGWYtqMRd75yAwPio3QJqYahPRWPifBe26x9REfYZQHH8",
  "key16": "4HDqNs6UNzrz5Z9CHLqCn31Nf1JJUGsCcFVPzgdkh22LBPPYL5A8AL41adX2CEc5BWUE3tEFi1X6NjJJYEcMp1W9",
  "key17": "5kjhQoJGCMCEzwLcP7mQQn9zfkdzCMsHuFccCVDSZ21BU3Vc4HtiEye4BBFAf2ELWdrwuWabgHwy4sfB3owWBvgQ",
  "key18": "PKBYp2mxHDRNUMkwmK5WTPJGYm3oS3LJkxYuj7f8sHzByivEAaQn7Ru7R9RXbLks3Jro4EiBzckUGd2fDCRFewA",
  "key19": "3YezAVsRCDgBnVBD1f4dhW7zQRx2ATjjGUXM3BtbUS1WRqtgZUe4ZFyxXPi7EE1n1T7tSMAPkvTrXRz6NsWKt4Vc",
  "key20": "dHu9vhbG3i5qGSX1tj4tsCnGV36tVS9AaJLVbjCb4HxEN4RVqeKT8DzXEL1hG8rvhtoieCeJ9wCpxivHhWvYnPo",
  "key21": "62mVE5G1Xyivrpuj6S4TK1Pp4n3qZcwi3HLxw3h8K61WZ8xKVnMsQYAbKkmqJwkZDAnxDeVsS8o26kAYitWiGbnQ",
  "key22": "BhMMd621SwzWU26cCCUGufY8A22NvZMgufE4i1vGzYWs2PjReL45ryY7JgNyaHVmLh8KBktGdncvJPAriDuaqQx",
  "key23": "3HNekag91sTMZuSzPPBv9TNA8KzpLR28dAtuQ1hv6cu8h4meHXVweGoKn4BZbGtD1VipSjAiPjyW74VQB1eLJeCy",
  "key24": "4aJevwAAnXW7gAhouB3S5rMWNnXJcTdre3Fx81L5MXYVAuKMHypp5HK4jGAdtF5KCpA9U9uKq3ZZJ1V3QwKeuyUY",
  "key25": "3cHY2gzhGRnK3jFADWeiAhbWmg25jyXq2S3NVUFdV62cCZSdzq5Hcfxc7y1KubYdjEboKvoRmaYTBCoWVzpfNEcu",
  "key26": "4uwwDAAadoZcYFgxyA312RiRVTnpUMxJGiiS9JmoeTarwrjjpDTCaCvC6HoQZoVDcSDGnMo43dfVGBwr7h7wxgn6",
  "key27": "3Dv3pe9z2wrY56SuKtChFUEjspucVDnaZ5mbo23gCvbPPyHHVx9cWLSUvCc88GaP5aAPC8Fgb5eWCTeZB4jEWm9S",
  "key28": "3nqN3yb4WURmUmcS92UKhc9o3aXAkWCrUAvyXLVCm3tqh3agGt7KXsZVkMsTjy3kpLSzQdtoiEXnqKYT51NUBYFr",
  "key29": "4gfD4F5Z2gGvJuTKM4AtCxqUyz6qzepBdjSXoZsqpxRbwW68L9mQJW9tVSLb53uTgy8o1aEJEAJiPVdTz3UjNdS",
  "key30": "2k8afPUWcDp9c5TGVMfEKUEhjcFuLJyZauZyMHj1heJEpnNZnfaEk2kCJDQKXzfHmtoCzr41UwoupzgjAL1TnPJK",
  "key31": "5ftS3ew4cfH6R3YYYhes63aurBvo9YwaFCac4S41pXLsaKiZXAsUAa5f1THgRUFs4XPjPXSqea9y5k4XmVBAFJMu",
  "key32": "39aQNe1VcAw4uvvEKnL3ZE1j2EjqXfkUvWV6Ka1PijY7DPfs64BB9xBpiW9jrYVp1JJEUt5cHKAqbWxL1og539eG",
  "key33": "yzP8UtZYY677cJXbBhG5zH92SFrSuXSXCNhmXrA9MRsUZ8sPkrJGYYteypm9qiVpejTnppaivGVadeAE4qT91pn",
  "key34": "37VLusZpadhBFVRDxiZLuX9KZMk1BMyp4RbRVD2eJXkpecQZEA2mupR3Hnku3U9DXdf2L7wqJSCZR12x3FhMLLpe",
  "key35": "DvPujXh4kgJq956xFPotjB99L7Vg9epJY2xuMfHb6nHhx4BiJQqJJqyEwGnbcSWTS1SBzFE1mvtrgzDF6essB7Z",
  "key36": "24n8bQeGgfaRGi7b3St5YvixnESsgnRQRUc9KeiyLdQMVcav7JEeAMCgzHEMyUzah4fyU8vt44V2PXKjgDrgeVNj",
  "key37": "4vhm8nx3QTrQwiJyWbL3qzugxN4GKuy5XynkJn3p8xtULYYdqfqAoGy7ouSe6TRMq6E1qEXngNRXprik3UxfW4u7",
  "key38": "4UiCJTLddrbxZtdjzkvog6cQt5LuUbhjug3xoGuJtSqtMN8r2HNXEKmpYE27NmoX6KkNGDjDEJQ1zws5a1LS4iWb",
  "key39": "4uYPpBy1uKwCpH9emT86LkXYpTGq1YyKSHPrMBNG4MeQNkT2SNbuKR7uryDNzLmBkampGnsyVFep9uLBoRndtD9Z",
  "key40": "3TeEL2QBxYivdhN2PBtw4VLJYqkFjk7Dmqz7msaej1VLX6LA7kSYjUWadxnyueMN9D6yqfWoicPyy2HeLTBmYPx5",
  "key41": "XbTkW8NYcZ9N4Wn9JfppzY2Z2t2oYU4r8tzBvikm6WsWJKSXF8hSgMXMomB8fBfkeNhrmV7UQXf4HbN5Bf2qGAq",
  "key42": "23GrEd7iLKCfoAPuMVHhQcuysDmSYc41rQ3yasgzHzamU9SMLFNCEKfJnWAXKpTiP5nagwcPDQQprL1ijYUuJEFC"
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
