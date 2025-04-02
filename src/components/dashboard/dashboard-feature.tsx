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
    "3qn7ov3BtMPeQfvMZ2fncSBYwuiFpd8k42za9H6QKD2WCSBDga7RPWhaVvgKodKAEUu8CwuMF9pzNiHq1XdXfksf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFS9XFKE1K2DekUmGmPPDk6z9DL2XdrSgdt2hVEWge2BLjVenqJCUwzghtaez9PZ9H8P8GQtTBa8qUQsKtMp27q",
  "key1": "3XxK1n864mGjXrnLcdrWSZR1y3t7mfkN8p4kRih7mQUWtVK8SJzw42gCduHPCdaN3UHEXyxYG1CuNv8Tgww2F222",
  "key2": "2U5NDQRsGeobCkUpEPh7T4uYmzHEE5sAeMtiX1a2tVD9H5Nv1hY3DK6jM2aiEQx34RcknTttQ4jQVsMuAjxUuBFt",
  "key3": "63s7VYEL8QAEwfCrZ5isyUNqpSMfMboqG3g8ReprDCu1nV4QrQnsNBzbX4fcqGZ7uuzJJB4ZF67eQh2W3e46PujQ",
  "key4": "Qzf3dG8swBEZDM1t61xKZYKq5VDq2TdhEjsMBNJeXUuN1r1mJmfmQd5LbwxQ2MoGNaPANQ6WLYfsnbjKGZ8rgYW",
  "key5": "2NEPp7kPYaCoWBER2FPrTV2Yipbp2KYt9rNeNTtiCSdJFC8ugF7P5P65h5j85GY16yJSN1xxep1iFgxNjXjbmy1W",
  "key6": "3qF8TjWoyPiGor5Pvv1B6tVPqhoPGFwok7RxsYmQwtzCovZW6SbtnsJvsNuzxdBYw7kBJbbokDdGbeHFbE3qebCq",
  "key7": "2UHELEaJujpXe553sCLxo26ncPkqDFvsvnRVLuFgkAgVAhyDfGa8df69qJ5V8q8ajeTtzyE3xinCY7T7cT5veBpE",
  "key8": "4BNsrFqaeCdFxvAjVWgwfhkgbgWGvfs61iuwgyZ7GPHRUuzB6UEgw1Z9rPBBJ43L43qCofzURJ8EWP4ZNek2Q8qc",
  "key9": "3He6tUhTQ2L9gvV7YXNxeaPmbSykysui3SR1e5DzJfT6VoDJ5gTpH5u46YhRMjQsFmidDjo2yGx1P2UqmsEwTnUa",
  "key10": "yNZZi52gkv5Fut1qnJPM3ZDvvq7vqWhTaF4QvRHb1nFT41Vc6wp4FhmRJmVZDS99yeswKqiWscyYAKQEMggchL2",
  "key11": "5LhaZeov2sa1U9xoT2A3TWFG2raQotbFJ8hy9NB63bai9h4qoabj6oVjPJkQFHHBMQYQRfLUWZvpnfEAZxPwoaVr",
  "key12": "273txvuoDMYN7EURwgnf52QAdnsG4WdHzEq48Hd4EZk661CMrgrBGz9qMPrQmrvVz9TEtUXwM2kse5Bkdh4HBtK1",
  "key13": "3J6zrqSGgkzAxka5AvYRghTavx4BzJwoW2ziXDDurkAJrhZ46paSg8v25R75NZmRrdoyPabnAnKViHVvL68YGPmy",
  "key14": "5WZMuxmRSiqjqPjyh2omkhghhM7oKD865HX2rwXpUhTpNh8AnAQuc4NKCcA9jvgeScqv13zuN43rAR7xnQovd1gt",
  "key15": "5g3ESvEZxhEnwMpBWN7en4MvzfDHDNVLdSvD91T7ygpb5wN1axsiaMoKRgriUFbykLfskoKD7XdFg3zDib1YMrBT",
  "key16": "iJgBjjfNPTxsKsBznkpfikAVGu6wHry6uzGwYXTWo3wG2vU6YkbjEcoYsvw6iZP39Dsb7nuCu8JMZMXjKxAgb2C",
  "key17": "3JLugRVuewGPP6oR4g2M7eGBqeP3yYBJxvu9ENenGdGukkZ2AHENK2RkqXXTE3U8WDkdKvuin5HCeX6CMUeyvAfS",
  "key18": "45aPc1SpAEcY6QyWkAk98NY4eNFKipc9MoVVWKyE9aWGodHoqBeQGJex8vKs8gyzE2YvWN18AnpkVz62CKQHQduC",
  "key19": "3T2zjCfgkDQoVhpYwZPmL9JsbQYQy6VjwN4w7ViuGufT7vNgdyPYnjAQjvnx7Kpi559mmwXTvhaqoBH9qHc2snk3",
  "key20": "21j7Gam2AwaVY7e2EXfsS35W5Tt4qYEgF456eskxQA2JqSc4KJf4V4PZDyfr6zt3ZrC24SP1xRpGwrZM7hBwwoxv",
  "key21": "23gD6NUGUX5EfPEwrmpWRCSkx32JdZ8eFYeQj7gqTYjfTkt1cKDBCraH2HDLmTVjrvrmuf9gsD7JG2NGLgdnbWbF",
  "key22": "xtu4NbHFTxRRuo99ZyGJVunxfskcvaerkH1EZXvED4HcYsr64VLjhm1U5Ed7Zuq1HfNRvCWtDiWqQWx1GAjRvq8",
  "key23": "W3magukod1E5zxAsmWYhDcp2iVvGJ4xcvYEvLwyTg5strHxKq7we7sPwWAjrPSyvsGBQgtxwwbgiKgrMj91P49V",
  "key24": "4MN1QzhQ61eNVKBSinQhgFkr16purCfGTYo7YdZEdBjocWDnfr378Sv3kt6c6WaM4uS2iZPX2dmKP1m59VwYripd",
  "key25": "3y3Sd1LgfwZX8zqpfPVTnRUpCBRMUrbjrvyiFWK9wcgfheZTRLRc2cGpDg8DTSposXBrsjsWpfGNvPnfcBjgQHJa",
  "key26": "3S8LYJaytojnZAEyqWKsFAcGpcNtP1AuC7nccARAM89UXeJUaJeqdu9cs7Rxpz4voqWdLyoBQT7ZpQEPQeyFw39V",
  "key27": "2WzxcW5mEQvNzDB7Vi8tHVMQSbjgYCrvLcrsvkCRzqZwWaqx6H5WbiXnmDaxDGoPmLP8VvnTdHSdgfCqBM4HrY8c",
  "key28": "3i3xFF5rRChy9d1fiGoFXmg3FZfrRauGWFmDC4zoLeZYfgB6CP5nk3u9vNxuoBhBZhznKu4b3vxv1EsnG9kW4zW7",
  "key29": "61Lre5UBWwDGnQFVURThbUyNfdujxFrFz5q4gGKRUkghEtavJWUwuQ7SHrGqyFH39EZerHcnJmEmso42N5Kcov7V",
  "key30": "4QBwCTRoKXvDLU8kyhCXbDrhJRH4CcbN6p2ac3m3xnv2hMnDUnwsJRTYRD3wzzDUuKEnr5Vycb4FwvM7hZ4Ztjrw",
  "key31": "HCgXoa6rRMac3FHo6zY8aZnkG14FypfoNFACjDwfYEB3GoAAhbyRw2PWR1ssCfu1EVs92pjA6C6DYgf9ibmNqYt",
  "key32": "88NCVjGXiHjZfdhSJA3Yvnzovc4y9qBvPbRFLrK4RnBZV3EJFqxA3V1KxchXxH8VAuHSxtTQcZPAZCxXoywDNcx",
  "key33": "3VEWUAokB2mEKk78JoRu7mwmpPns9kps4YUEkyBS3BmeCYKCkaiYhurBEB5Rn24wvqCfGMBZjKYu9KDAJR6Hmu5S",
  "key34": "22sD1DgamMArP3T6iNLRgaR8GdCwyMMJ9jA9KYNtDkNJMKCFgq6UjoJuAcz7oUM7rXh2e8sPxEKKd8jXn3t8oKM6",
  "key35": "UdAgpomgNTF2USotNXZySSBT2kE8rzACcs7kCJZK1JpvCUDfpAXrpyCSLphYLdxMJ3fXgtVEZFMQTvur8q8AaEg",
  "key36": "2wm6QGoQNSxwoVQzh8aQ1h3vFQuhHPKQ3fgH77Kiqp7bheW6iDB9pXR2NRpucgQMcarNJoasBmWjrvVQHdFs5rZG",
  "key37": "4wg9xxDSWiGdUczioo4Uh3Qk4jEMQU4cTB1LHcVzkubUuUEabo2XpVL5QpwCFkYm43R96qNJMEyAERX8HuCfqL84",
  "key38": "4X1wCU61k9Uz11L8ajuCWsm8jwFGZhf6iHpQB7wcVa6tdf8uMzNVmBDK8CUgRqMPuwGCdsManJTjzVjqW9ZxYwMp",
  "key39": "uzevxu8N5Wqc3E8XyJSusHXHAzUEAAQXjNWs1zFPoikwDW4ingWn8DVQdtREdb2coh81SfCyoQsbbXw5GiuTgLT",
  "key40": "5GvBc1EfEzpDDZCxF46xS5XP7vVTNvRPgyiusSFc4EgUpPzvzgZxuH2w9yW14Pei1afees1eH8n4WyQQ4oVHX1q5",
  "key41": "4WSH48N2GMR7tGa1PoWXoy8AUvKteT2umCpWJJTd5hsXoCtLLp28pp9MckXYS6jM38hgzjnUPgqHMaBL4hsiiLa9",
  "key42": "5pLFNj6wdJp7zUCt9GBez49ZrW3mqH4V3bEs6VYwzdWMuKDX1PMAiETxGxR6nkrF2XSuABsbiUgStJM61pm7T8tw",
  "key43": "59sJhajUEPN5dGbNv8i8RZqHirk9L5jC7amvgy5kFyHckb58xLp6UUneNhgQJ5sfoBpozXFhSzbB3VHFp3G1i2Eo",
  "key44": "381KzssQujMFjzBdHwfSDRkFMqCMDGJtbJsiMR2ooMZtpKjdYUrdsb3NsVwAergVNfERPdtxJuysVHVo97auU7Ku",
  "key45": "2WyvcucDNayUMCytcjBsdNba7EnETicUr36BMAjsREi31amVJMPwv8j7m6zGvZmGm6XBRkmx3V2e8P31wSMGRqpA",
  "key46": "3GNcHx67uqmRdC8KgH9jixHm1amoSeAKsVnxjU7yyCFBFwuP6sAFJoEpyK1tYYDtFF8o5gdxXvqSEW6diSBUEoDm"
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
