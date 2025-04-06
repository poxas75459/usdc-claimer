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
    "2SVWDK3Z4aKm7CTrFs7VxSGz3Zsr1Cswo79fTu2zCNSug5MZ5ZbmAS61HtfeWY4TUpVZTkLBTbAcTYyxLohZUvJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zhKCGN6kcPtdP5CcVr9gGvhowXEbu7MXcmujUNuDXDKHuoaq4KweCnvJ8RnAjb5ArnTEN8EAcegYqX2ueYu1sq",
  "key1": "3yEkLhAY4Dookb8c4KcruQ65bTLwo8s84FUF6PDSyozH3edGmsmPChWWNRLxJ2kG55w42h583ZeyvhApAsdmWg9t",
  "key2": "4QnG3TL47NLDh68eCRJsAgX1krL9K4tpwj3eDwKZ278jyVSAWfthd8x4g3ymNsMaN5zt7YGtw3erw24tj52atmDQ",
  "key3": "TnZmbE781whiATshjjVkWPV15oYGB7fasgT13Se8sQLQLiF4VR15JCKf3jeN43k6vn7uTarPhH1yUkmMnPA2h8P",
  "key4": "63pwrbuEMmqbZJHiTymxtXzdWr58kg4mVcA7pAJfzMWEzQb32Cmtd976AbG5U71ANnM5YuSWjAk7n1Ecr87FoQT6",
  "key5": "3dGzcANMPoKE7ZQKZm3Rapoo42nNpHnoMhFZDdDHHiWk6XyveA9pYhjXgtHQqrbbJn3QTfSG21WAJFozwRsQXCoa",
  "key6": "4QKHogTpSekEntas6THpLFnvbZtUBK8fVRu3PbfYA4JiXhf9BQmBkUipWFHnfCcAyhpHkS4zzUjsURHNUCWXKPmZ",
  "key7": "2mD9FFBkF4WVQvSJGB2DyU5WUKbTJUJVq9sKEcABZroyRLJJwhzwWocrUameVquh6QD36hAyhEzmZycDnhkpQrLS",
  "key8": "5sNSV1Q5QeYdp4QuqQsxtXPBCzYw5ay6dVbh25cdHUkZF7v3GdtQ55otJPEt9rv8LVn4Uiqrbp9aKZiMJA2duqFd",
  "key9": "46be6DcJ4PYnWPFeEtM8UKdJbM5WxvdygfgVRaGJBDdk3RCL1hC3ZMgvUCsJdcXfLeNzRnreLRvGVb57S84AFCJw",
  "key10": "5jdHE476Tew293A5XwhVpoWNHHeFvvgSo5LtGKD6p9Qtp2cyTTUtNcNtnZZFobS3aWMZTugUQxeUF8g5S2p3ychC",
  "key11": "4Jh8E6NaQxLdkvDLqtxpCFNrGigqG7RWjKhbdWca3giVaQtjjmvB5Tn6GMjBhx2iqdjoCYUSpyTSLtKtjjzvhhDx",
  "key12": "2oBTMZcypdguT8PY762PoGYF1TAeVXjQy6PnLcZfnvnrZWa8cggveFc2jJtU9q5tGvmnmNbW8N2uKntkqzLKrPjx",
  "key13": "44RwedvfCRTx4Jc8vATXKAzxCsnpVskyNakv3Q172L4TLa1Z16twzJVRZoXVYGZu81cfM9NtyBs5Ay7YQn68R26Y",
  "key14": "21S2iiWTxTmxZVZ2mTf2xEc1XFxvDE8WHZFHAFFGBkML7uvtvSSAf863X55KmeVakWs1ggVmjNWqAxGZBmecSk5g",
  "key15": "4DsyhBUN9z7YaLbnYuKMCLMgo6PVx5v4m38VPi84pPpvugGE5jushUAkdHY3E8dkWbsPS7qtY2J3VDa54qMHAuaT",
  "key16": "2CYXFuiBpsxk7cijBzTxKN2k7Hb8knQVw955HaCpHaHubTMuS11KW6xu3VR1f2QT8NuNE4QayQhBGVRdC8hnyhRg",
  "key17": "5WPsgWbdCJ9NT32tfZSqkz9jKPeCsHyM2rpq2bnXWw44kSygtFvDcn39ndUbeHrf3sMZR3x27jADXim24BGSJm64",
  "key18": "2CMgVo6jft7jC6wxR3DG4FNvdaJBcuag7BaBCYo1NPz2Fcko5htYThbTo8csfaijMxecM52H1wDPZh3q8iqiPgrr",
  "key19": "4smprXrg3ShvR5peVfLa94o7pPi9vk88x14Jmy2dgFmh5MEaM3ruHzRw7yauxXEN4Z2B7Dxp8WnFrtrXfVD2Tf6a",
  "key20": "4j3znkJN3WF42mdBogwQ5LxSczfgJBiRhYZvjdP4QL4eM4x4FTT6DEEFM19aevFsWxBQSAQwTdokrYQfpPkDBwWZ",
  "key21": "52ZzYpDYM97xhry5GDuPMqFWtHmzjTXKYcWT3EccpLJX8P9eey2KnX9yQC5kFXsYdmw14vT5p2hAVnAFtr7pW3fC",
  "key22": "wTHPC3cYv7WGD8D5jeuDeieo584gpKksRdnMAadnQzSdCuDUzcjZEmmRMa7BJD1hhiSkP44U2ETDWLPwrGAurRt",
  "key23": "35HquxPCECR4GoR1ZNcu24iPVt8gBd6jsAPs9Tm9hKHpmNSGSYhFa6SBTEc5iwNtsgoszKyq82FkKdXW8nEmRUdT",
  "key24": "31c3TjzMrLGBT3552DSj2Uv697SPi2G3w8KnUVg4MamDbLbEDcdXvdwKYZDE8wR236tQ7ppNfNm19kZ2YHrWowaR",
  "key25": "4EjZG2RG3tJzqZoqNdzj7km4xNQMR7K63DD7gpgizWKp2v8Bqc7zV7p4mWTM4qNHR93PKdwCzJR5NAYTmh9rmBjR",
  "key26": "4MBhCz2KZFrH2PptRvejdipo1MXLMVGZjjiRbwAYJdZ1fVVDVgr8Z8aCK7nVQz7fhZoWCUY2e5ZKQsME3pJ5THVZ",
  "key27": "4WX5Nv8NiWFEyX75EQYmviFWeVdJ7JpcQsWYdXXDzuc2m2HsbuqkHMq7DZaLb65Jsa2yoArLz3b9D3U3z3wsU7Gm",
  "key28": "31eMChmdbpFY7k3kJJThKu3HD3qgM7jtCZ6baVoU41AsQdvHDq4yWps5qMGow7ATiE6K6dLnpS52mGmGkvfd6MuD",
  "key29": "2Po2YRZCqheJZRgqEpJa4Bq9x1LPkULxS4RgAWa9QVzpp7u1n1cq7a42bBkyHgVLzkJgehTW6MfUApURzSWidQQw",
  "key30": "5yHJxwQ9DmsUMEFbMCPLbjc8SBauhxJT68MRMWyDMSM1nchaZw4HZX5VMkbAgg3EaqoZAeTNypaGVkdFhfRco2K2",
  "key31": "3RcUWpNDHZUJahC87eJ3YSnEf9f7k2fJ5zBReLZQMqMaJKKS8CeVxqeJ4tjsuUVMkanEbcavcKKvB8BPMkmKi1W",
  "key32": "2sa4R9FEZ8HapYEvwFfqLwz3pBhDkCHSightVe8abydRVR5Eoomd8Z5LJrEeYWtAruX2hbcbJMUBvJWit9ZQDPWN",
  "key33": "5Bh2bZ1jXPEGt2Gj1wQViJJDesqpFZJvJPPphoPZdx5yhMEVH2dadNVX1Q3CeoWGsZkyTi1D3PTRn5Pkz1YTTnaQ",
  "key34": "2cGjihpL3Ba9XbTMyqxuDfy8cUHQnux2Kuebe56WRtuMqAEH6pM9LaaeiwT7pf51zVwVbR3Y7znKjNTcKfAmeHL5",
  "key35": "4EWeoqy8dAY4kxYZaAAKpzMgZmgTvqoniTdTbvdwrT7SBWwKjkM9wQhBKSLRqZ1hBZe8nKUiHsWjp1FR5WC61kbh",
  "key36": "csyNp2UKRiFaU8JHMUXGThMFhnum9pALZRiJqLiLWHDT1nr4ZYfWVDX9BAUPqp5Ra3hn5ujYjwsowKfHHneZV3j",
  "key37": "49dWh4KQ23Bpn8Su9Ge5xgfLtMhJBvQ9WhP3TH8Lw2U7gAqnER8NAp3Bm7JmuDScSTp4iCNo8pK3eCACrqy4e95F",
  "key38": "3M4mU51jANP8xNHWLLGo9513fEA4xcwDg4HcLvMEgmzdevRokpN8dg9BEsTM7oMyUYPWoWUw5DAsS7Q8n3Uso8LE",
  "key39": "2wDmLM393jXwaqVNeLMiqoadUpPRnXzVvZDvP7NrjM9BHrv2FSaKSS9Dqd1t9xVrqTu6juAiyUH8YM1rutccbqQZ",
  "key40": "5xe5EChWDkrrFJuNZXSRKaDGswksYwuTecxVaNzZ7ThtveLQDsCEmXUuo5VefrcejT9BesXSKTNxeXNtDK2UaRD9",
  "key41": "NyHkdDuaeJnCP3jEsAhkaiqt3FYHBYqVkHWpGhAjkjjpuJHBgPEUj111YeZJ7cA9MSgcb1dWdN5WMALfTpPnJx2",
  "key42": "2427FFD2EBeYtAJwt4MR2HCCigPckSbNwc1NXy894W4mHofowfUPxLiS3xh4cPBmQkhy83SANytPXLQJv1Pzsrp9",
  "key43": "5JDUxQX6XXZNrxgQpr5bnqDsEjfkD2upPi3VzT2HsPyXTLTgFv4cBnY8fPBC6ZUSX7GY3yQXFbe58pEkeLNqnB21"
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
