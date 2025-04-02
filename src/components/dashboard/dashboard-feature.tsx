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
    "2PFLSjfdMdyKfav7RzuvY5hvgJ6eZbRjQVJU7Tq1EbQbVVaUEen75a2CHGfw7Zcn7ZZruNfLaZZm5FpSZsXAHHEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSqrfLcd9PADNmPyeBeAfzrZHHYGQWgm6rMcCRFXRUpFM5gdMV9AS8FBBMA8hpB7QTMXmFg1xdaqUDxx32s7saX",
  "key1": "4hYA4fADF22YmeanWVcBV6N2K1yFpCrrsjcpPcxgogLHhAeoXLog32JdbNtSRX1JYrupJMq9czcHbkfxj1DxNGXA",
  "key2": "kKoSRChjyK9B1dxCZhJbCzuLPqUfpzgNDMUma6KNuyzKfL5VXqPDHyWJUDbWCSxwe8Ewa9n1MJbjfCPh88MMTmR",
  "key3": "2BUCLGVTSwpTCAsN8vjkCMDQTANWXyNn1itXqGmNiehH4tx9XmofhA4LQawzigNbbi9m5KaaF6ou2okHDEtnx8c9",
  "key4": "54xf82nUnkecKYqDeCRHZUpzvxqii6Kncch4j66N8GbfdyjeKiECor8LfEm6gPooGE6fLLwJWx8keTZHQmkFUCjc",
  "key5": "syje9H8jWdtM3X7Sp4iFiRL3qkacGkpnFHdSt3XSrqwLkvZzcU6Ni52dmWYjavYw8W69UewZPY2YqoD16aroiPQ",
  "key6": "Vja8XeS82kjCRQQdipuyPG9t4cgxeAvXv8QLQsSvhpGEemBWNYBo1swwXdytX3aiC49sWRE48SGqJQaL3rgZLcf",
  "key7": "2EVFiRuZREZVdCJwdFdFHDbkZotYffuwQod33Cw1Hm53Dh4RGDzPTSgWqoP1nevbqk2657JE2JMXwfxkPPqQUTrJ",
  "key8": "3R2vLpCj5tEX9XdkwGqzbw9ME563Nw54kVzi3VBJ7cgBg5jf843cvq2LGWcL5VQF5vVno8dZ9AnPHyfu69aBpi3N",
  "key9": "4s7mLMcXdXPF6rXALE44jrVrSg97Hfea5WyxksZziREq4sPRWxsJfxJmNjQPUmaQxtN1vJ2F82GUQmWjcyVVdFzv",
  "key10": "3SAog4n7UXHQ23y4sHa4Suef5LYYik71HAs74JsGcEDm2fZAcJvgcqwxG9YUhc8XfzohLeVHHvhFNkjuWgFSFF5V",
  "key11": "E4YL6ZJwaRKdbKt9c5NT3jAYBcc5FnxxKy58kB1KkQfrLY2MGcWix9wxpnWUw3uQYrTUQiVqn3yB69sPLo75QU5",
  "key12": "nGJ4SX8tMsLdNsuH4t9Vdr339umRV7jgouDinM2yZgdmYYmF4dSXRCwbqHVtEc9mJHqEcHfcaAQNnYunkGkCDum",
  "key13": "3tuqGkPgsPkXJzgimojk6JSeTTEiVPiGh1VYH3hvAg9jW9mB9mTkVLA9HamFsoquYvioAuGFpEjLSqrdn573VJZM",
  "key14": "3ZuGtyvMdTy7GNMYJfysuAL85Dry7ED9r1aAba3MmUpdkKA83KMnKbtkHom7gmnr5yQ9Qtiozg3TeafSBu9VXdPn",
  "key15": "LVRqopuiAhUXGtV6vxYBs21Sxi1aFV5gkpwoyMUs2foe1HcvaNNT8tjzMmcjAdZkLAHFAuY2hEizTV2x4TCvFxC",
  "key16": "2GsPiR4EAVnAyg2fzPJR2FQ9fiCnFHSq9hcuQm2u7sgAEyJB2HwqeEg7DeYQRnGjcztgtzHzHQFquXozYnppGqFs",
  "key17": "5YHNA7SnL4iop4Ck9zMqxw344apCKev7twtoakmfk4XYcJzh7Nfm4X37wgmpgJ2dMEDr6xsCiakCEeGtwxztUUtr",
  "key18": "31AbxCbUKqxu1P9wuM1XZRZQE8dxeUP1fJvWgex1YKHDkAQsG16hET5wSF14nKK8bQYHFtRy9nJ6A1sTx7VRafNm",
  "key19": "3jQKAcMz57j2U1kMAAQteZKEdA5KNu6e7rwhYy5prVeNUv7hEJjnPTEJyY6zw7uLeBCA712NgB5kH9HNm9eFERG9",
  "key20": "4Sj5KbWj84TDN9PaCnkNpbuYDpKhVeDhEAMSULFZX3LqrmGBZXmk7nE6ZAz7yq7AVhaiUfosRCNpKTKTrn3LMtUe",
  "key21": "3FRb3hLbBs5D1zMSFUoXGhXFmtqAp7EbFaWzET8JvRVW8VndLQJjTds46LdJRwavP6mj4mANXbvq9azL6AibU5Sc",
  "key22": "51dJcVVYrUmygcmzMrvg6MxCcmJ2ywQyXPP7hjWzc7SGdofFQ7xcWCWYwQ15JJ18y1K3Ss12YNdV1ym5HNdsx9BP",
  "key23": "SZxSrMZse5qNuyuALSPe2nTxqPxhCGgZgWiaYhjaz323oXvZ9mSeXeyn7tvUL8DnTSZZTeudKLUETKjLiyfuLJx",
  "key24": "gK5d1jJsqcnkbAZCYXCjaNL5sFU56nGSqwauvRepu2BcdBbgiXoZfLjwA37QnD8jg1XTFF6sDjYPrd6f7FEVj5N",
  "key25": "5aDg5Enh5groig3DrBQHYZwD3mocq9vpVBGbPMbBWCdei66hErx1mosuL9dXCXqKFQSGa2nNiVR3Di3CuVnRMq42",
  "key26": "SjwXT28fJBkCuFVw5YafL5PEgZ1rWGgbAEWWyxaf7ubohXtwkmXC3TU6Ex3fy9vj9PLJUovtvLac1gaCmVTfHTK",
  "key27": "5m2msXL9dj2nTsyESV67og7ZmvCJrAmEXVfJhpsooBp7sa9NH3nwTRZCZpVqrns5XrvSQDfccTtmy6AKzndNXhwD",
  "key28": "3zPkoSW4FcQuQ49pZc7cZJTfdGuPyMBDcmGFSZySEjdmHNJcgcH2MFZJfvBruWwBp2nkUCwmXu5ezEeUktnigk9S",
  "key29": "43Ygmbz7KAhQWftRLStw9DiKJ5QgEgcNu65AwitDvXJC8fCAivJfe5Qu89vdmt9WBmmEtAQYFvxZUjP1FyXihr6G",
  "key30": "2Aofz1ToJHia2URYvhXuVhC9ZRzjYin7aWHyp6SwZvuipNfc8nBXcefqXu3rN9DW1pHCZsAQXqNoHLC6JFM4mznq",
  "key31": "BMM5cP8StkwHZuVfgxf1Gfbi4rK5qKRfXcMbkJtTwSPUtkqbbsH8YagnKKHG9PPec5V385hoFg4c9vDz6oRrYtV",
  "key32": "3vRQvn1ys86xwrqnUU5rG8UEthBNJzfXt5wWpqQgtEpMJgkDMhEm5rxnq4KZohT5KmMZDBqSVGMLvJjkRt86oFZX",
  "key33": "3LbLL6vugWG1VXJd4PPbXiMe2EYgvxeYFinN6aQMi2WTtF8hMBSSwin4U6xWXQNCKiK4yaPHjRt7khfEKUHpTADt",
  "key34": "4BSUKVdUpZpMDAwe8w8pC6qJgdQatcSvJLH2FbjMRVv5aan9iyRoCUSa8PrvDskjaxxb2zWy2CdoA7pcPNk7ubW6",
  "key35": "4B7LTTzqGdY9YQhbzq1xdfouUsyz4HDWEPb1YeT9F9FaU71h9XrfqMo7Cdvy5M1nLJBaiCb6WAb2xwb9Xd8MB8Qp"
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
