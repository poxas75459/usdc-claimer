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
    "3ZrFrribkY4xp7xPmB8Mfh6L4RuLW884mLGW9JEsCBtjkTkGmcD9EivTt5akJWUVNeXpi6eDUhMqFXGcMviS7Pa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEv11kqkhxN94QJUjwSRNbqhLzBracs8yy5Vpj4tmBBrCa533jvDGhNB9SzTJ1qNKsQiVRQ1nccNV3yDdsN1iE5",
  "key1": "62rGnZRdbcHuKfUgdHvP4yimmCdse5j9UFQyTerhTuB3jiv5L6mgfZvZNsPRdffYVSaS3gGSE5zB3vAoMp8KUcTQ",
  "key2": "2x8NRMXFHTmfXQDEXSHYKzbZVKT7A4np2mbeMEqotpZ4xEKqLa2wuvCxZK21SW2mFpEHfAbAnRTQFFVNFTGsvYpk",
  "key3": "MHspNiL2uRCNE3sS65f82aPsHSZq8C5ka2ph8SGfZe8yGqo68PqveUUG5VyXbsyB5dqbcjY9nxtvfUMSU4n4dB8",
  "key4": "41q2zYudYSm5AnMXAArAWSTzMDdviwjnkuXfiv1W4PwDSPDqSKjvjCDd2pYzUYj2YJZC29ffEpsQMVqrwgxSxvEA",
  "key5": "49SGGGgGeSWsaSSHiQPAW3Uwp6Hf2DVbgMyyW4Nj8JK86UAmrdKXmQuGMCJaThhp9m3JjbWs3vojmUMcvRWR7qmg",
  "key6": "2tSEPCM1m8S5DJcymihS5mcKttaAZL4AFF3iFVMd7KhmbYiwuBFjgsxJSVoWyF1ubGEeyWXxALUasxbw2iBVUcHG",
  "key7": "4p9n1AZ74cFUv6itXWvemFgxqELbrTp9xwhj3xBgEm1bG8J9XNuKL5SRKjMVF3zkqLSULvJ4BfyRFgo8ZVpMHS3f",
  "key8": "49eQefpHcyQAeTtRE9ayka6qBr8HSgK5s2ZKv34zJuWBgpdxtLbZpumVK4DadSUYLhca9L8i4C3SeYbyrGpJ4ner",
  "key9": "38smTXJAemLNX23iSL4UbUs1q1SjyhfuJXNQ4fpqCr7cYNmd3iYbhD3zWCZ5dUhu1vYVUrTwKP74HMtnxtsTa55S",
  "key10": "66ynMiVDgEERqeDAmWAmkXzhiPKzDUmZeF8xkfT4yHaH4vvd3W9CHKLzdQgSdy9iikRcdZCMLBuHwUZjiSvN3EYS",
  "key11": "5EWNB6SKmUfmns2iDNa2m4BFE4fGiVJYkEGqHzHCExmqfNy42fA8No5xuurER4eCaddoYzrwzLspge7mW9RUcQRU",
  "key12": "5GeuQcTrusNdDregtmS6tiphkNtYk68Mr5AJqxrjfUt7JJS8n22xyYPMWLLzGGNahTNfAVVagTmKLUvi6nPkGgM",
  "key13": "4oeV9HBD8Mv7soakxRZBB9HHJ6AS63FSQqpNSLAzRQNZwufGaHr6oMWhs2MaA81VmekyLQGjbsugRap1T57v6Yy6",
  "key14": "31swtp7A8hnWS6X4LXVXmy7nYjgC2D6BesVznAXQFKmq4eHRPKLBFrfdzxgMx1UyKkWrCXRu6nWKGcsFkHpiWoh5",
  "key15": "4XyuguQj2TMXTqmemGmSEwBFLjW3McNfaGozsonxncnT9sAip6B2hMD1yLW7B1ogaQqfmXm5us4K38pEZ271osff",
  "key16": "5ys3HCf5obzWGHB6tzaYnTR3PuZMz51p4NuMiwPBVGsNNmnoPjm148tPmSSvwZxk3xV3SstwuafHJVdRhgVSMpRY",
  "key17": "2HAcCWTXf6ZexmTy3JShTLsfqwjDKZ9kQU6YcDNEYie6FGTa1yvH5zrdf9mgXRJ2WtcYQ2x6mVixDba9ZS4vhHtL",
  "key18": "5WyzfmfgJ3Xx1WDaKt8XoQRWYrPKPsvHQxnzXTTWMmRWSXV9cua7VbUr6CRsDXoZhXoLgDEdPrcWUQR6tXGotd6Z",
  "key19": "YSEoEF6qXdXFvz5HvMBbkUgmGv9o2xvwvvARFAAbPpSyV7NdVGvXE85bVwXLKTyjKMswAN2we2ppdCXbpLMZhBp",
  "key20": "56k6UwDzVAuMC1WM65MDaH9DBwZzaUBwmBtZRMz3fqXQuxqNcPjwvSGV3bP4MqkYa8wvQGwTSAuvKf5SbrYNgEgc",
  "key21": "xsUB4cMV7uXk4xG5QM5d1YVqF45762uxBaUosrTPJRiNPLAeXuVZ9F1tipD6dDSZZL3dixQm9DWavgT1s9VMN1j",
  "key22": "4cdxfyHmwpCAJqRncZb9PVA1x8Fjcg4dmqZpkxtixgJ5KWCZSpzgBYqjUkg6QA2jdkXaH767UufZP2ovrvkcgEUb",
  "key23": "3tk8s7VWhR92deNKswzTLvaV4GNFcFCeMHFBQpuwyQmZJGNtceD3p5LptBknMae4oGNeSVA8V9XesEYVBdYuw3cY",
  "key24": "aXK5sHbHenRVRUyxrja1xL6F2Nh1DUP2HLiz8UYGn8jdcTQW5WneKDiG6jxy6nk3biowk99gyNHdqNmxHnP3nV2",
  "key25": "7Ftyx6NjnxWYWdE5Yc151tWFg7yha6WXEkxfvTSBex4fqoPRqAWtJZsDbfKNEE8t6C2gvoqZZvwn7n5itqiHvic",
  "key26": "5ZLV5vzr7bgscS3cwWjVKH2yCC7nMRekThKCogBzbP3YVmhpkmZN7cYLLXWQriDT5qSQjv9TVAuiAmG2zELeRuLY",
  "key27": "595yWLGr1XctpApSoEGUNoKrAUPWjLKeGoSUnUTyiHRvw88zPkD9AypBh7QmshguPS3WMLq4NzAdfyxk36KWxJ9S",
  "key28": "4SPBPBqEXUUhme8DCKX3WVe3QQraKzWpxwUVr3ukHzqhhSNavMQnNFf3wBcrqk1PAu4JQH1QpTm46M3B97mur5Ek",
  "key29": "5zvxxGb3pLh3sMP68S8mveR9WVEZHX19oGCi6ttaXaBcfZNerDVPnUxBg9Y64brV33chWyCesf911bpKbSp63Z1H",
  "key30": "iEhEQQb4Erz2T89xL5XYEo2hoAerNsV7EZCPtJ58rc1PXNU2K8jJKUP1HTbX3gboXyU3zuJrMz6NomKXCsmBD4f",
  "key31": "3EApsk4JzDVYwZCDWT8ga2kiE73cYNanQVYfMedhjtN1Pi9xgXBT3H8gyKw9FRaUyZcXSeMpbNuXwTrxJGuvRB81",
  "key32": "3L5mAgoS7C3XTccj1y4dJsPTbzk8yxk2XEsyrV7RtZ4GqUnUW1pktK4uyUJqz8zjTXykTLu7cPkdnnhQionNSved",
  "key33": "2QyMy47Akv3N1E5PjXmo3w7MvWU4VEvRM4nrUSe4RvXRon8SwKtgy3E5j8xjwVLkgBueZbyCbXFgXYy2SiBWWtKd",
  "key34": "3Ag6isaYHnfkjXkX4zmh8nZymvBQX7GYLL8UYPSaWa4s61ppMuPEoFUvsWpqtgunWH94dzvbQY4uyumwxTADBgeZ",
  "key35": "4aevRDfoqrcfhb1nBo5HwbeG5o6B5gJbrCkCUzrGx8iek4zSm7366BadzEyT7ct3XkfgSFoCkU2uihTgK1k7auUk",
  "key36": "145oC9GkbUSVaAbHHj6JTasjoTS6nX3ZFJ6o9iFuKpf3VohGPoGBCTug3pcsxy3N3C3vdf4xkcD9Hd5EtkYkwQV",
  "key37": "3dk55UTjoozfP3t14FvieBaonaPseMvqKCCAwt1xJqUv1Mj3hD2rMdcoH87X52DtYEnEcYXr7dHHEBwGKUmhtLRQ",
  "key38": "5j7CcVeBBhJPP95Q4LaVm7gydNozxAaCfX1brdgB9Zqu1XvDBpoDYb1GcYHNcpKiek5XsLY9i623vsfoE9h2vsUY",
  "key39": "2Ap9WkVKZZT7rGxBLLNvZgayccedPTJxcJZh7Fn7EH2WHHc2CXeR3FRCCrBSaxi2nmv3y6MBTfumiUjUx4rkxu7t",
  "key40": "43n369Re4AEi66fikTLXiurS8M11LPp73SXwuPqwWTCLdRR28vbS1hodQvPceamBV1HyMy6TfZxiBYu6dbwiMtNF",
  "key41": "5DrL2yJEXdNoY1ksdH5RAgbEgg5duuWvxf3UJxwwt3rCWq1pdX9NgXDGmyuEjuNUbg61Dh8sogvaxUzGDGCTK5YJ",
  "key42": "mRA1jM8uUaFurq6LTHVFzVd6LY1CCHNMfkNBodGSEzkT9HBXiVLfaXxqbf36j6LohuRN74BLpTozYsMNtUZryEx",
  "key43": "8QnwDcqhTvzYKkR8mKN85K66uqhB3LyJCtytheVnrSFJ94w1t38pXWcoc5vFkfP3r9kutHZUGeqvUzrcGrp3bY8",
  "key44": "5vu4zucaR6cPbFNA6MBpQqRENLXHERFM8YU74hpPQFuvJUmFTcsV3Qna2y3NY1ng6A7aiucivaNdVSNDooKvEhxi",
  "key45": "UuE9Viny7SUyEKKuvZftYsprEPFXQBRcmxQFYScfRfqf5vhvXt7wEoWMRomuu8u5zNDJEJM8PSpFKixefh4LRp7"
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
