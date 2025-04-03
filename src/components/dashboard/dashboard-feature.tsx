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
    "5ZZcucTweYSw62DX3zKSd8MQkpMMs5DkiDkt54qvTSPSYr1nCZ9jEy4YF3dn6ZoWwLwt6pV4uiPVensrATRVzVN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tr5PzdqQroMXGPeAD2xLxwSYA3zWsqdut8sKHHgRmFvKoBLVv4qJRr76vUiRUdv4WK8NCVrLpQEYFcbwmeztyY5",
  "key1": "d92ezZSK9LQdwMfmrnP2yzRkTsKGrvLb6xw5LZ6ahWydELGBabkSWNGJ4NFrYFEoLtNYzZHpH3GuTprQenFLtMz",
  "key2": "2zPBJmWYRPY6fU4DeTGz2zZ5nXR8y2MrcJnm5nqQkfUWjgKbXGQKWruHGTXBLNJ5bK5276sohseSYpw2zv41R19V",
  "key3": "4iRTMk4aVxBqnsiqZGtVwtUPzpmChStKptpVpWmdzAWS7BfbFbY8F51rYC8dieAqdVXNJdh2hXPJ7TXuXeAAwNug",
  "key4": "2XtgXwNbiQtBHvffobHymh5oUvdnAXpuaza5umqMDQSsdpNN3PUAGxPfdw95aKbhZBkCLyc9NRXYNX7763jbCGXN",
  "key5": "22gkeGyTGQ4E2Jegx4cM4D29Ba9ZbZ1ACT99eQr8SjkJHhrHno5mHndYSHTYf1QNW43poPPSbUSN7T4m3ZV1g8Dn",
  "key6": "ZuB2Eqv15hNWokZKCrrDn8DkTGGEWUYJe27nomwRw85Yq8kZCQ1k78fs3v3CMG2CMDPMpPS7uwnBnWAecTYZC8s",
  "key7": "5NWyjnnrRXhycFVVocCGri56dHRE5vERsbwv9XQd9A6E2vE8Rw8XDNFRtqQA1ugoaFscB1iPEMz5S32RBgcWQh4N",
  "key8": "54pTdegjpggSCjb5DmGznxR3n1gbK9TZzUfYRbWUitKEBJLnKJBAkpaWCcWAhVfTQxKBuSfamQZHJNCf5g2iSerb",
  "key9": "2egwYwPZb8VJb1n8g7d2HJumuv8Z6Rk66DRghb8edcwxAs4RAKinwQqQvxgZCPcgg5iH6HSfxXmdb1419t9HaWT6",
  "key10": "5fkUU6gPoVWyLkqRLhVPyEMXC75p3YiWkNYshVh9QfNd3XEiT4UPMKeroAPJE9L1TGtJaXcQHUu9uJ4fTvycHNK2",
  "key11": "Fa1fnuyrj92UqQEmzYQjcjLUTpLtd2w3xQYMWMXgAWpCkfJXYykg73b2QyJAsRVrsnUhaA9KAemcKgs4d8pepup",
  "key12": "64tCRyYwyqnmDyY5YRKihu2EaisGranMngQ6Y16WnuDbzjVQxvxnSWuquXPXvP65SAqJ3SZiF9dJDVfbt1ZCVpeH",
  "key13": "42FvatoTbotqLME5n9BmVtatMFQuGLE38HrZ95FGybuWFUrybNt5GJdck1YAnzrvrhxfkp42Ti7L2q87wVRkwg3z",
  "key14": "UdyerQQsYPMJDSyo8rmdVQeAxPdLg6Ren7iUMzNWrfepr5X8bhEZZGUgUZQXVYW6bpdP77jXb7eoTTvHNunvNKX",
  "key15": "2MJzjrMZrncJ6ZaALBgBDuEEKRwRWVMhKePYBDCkGon4xgx5bRiLvQR5MaZuemhBBuZERVoe7GAzJyVvQkwptMsa",
  "key16": "2ChYJMR9UWbgrxWMPXaUVMSJMnNoYnKERZoLrSnRWqxeig1cu72mHjmwu6429ciZdmeoCEZo99jwxDrwVPc52SN8",
  "key17": "5qM11REy6aucniE5nMDisoBPU361Kbjffw91ShVoD1SUbBhSe4R5fTTHGwxkpPQNb9eB1kvC5NU5Bnpc5xiGDgfu",
  "key18": "3ye35f4vUfpAUNHXg15M1Exaho1oFC3UmftS39rNTBFvcwMWaUsVHWactdBo1Hm91ubQi35ZPUa6ktX6a6wA9Xs1",
  "key19": "2Ctq3VJCmx3wdqq3VS2a6w7fmdXYhHJtPogKejfqzFeA7QmZyM2Kfyfbpnwhcri2FXsbJM2VTj4TKGubvTMn5a5x",
  "key20": "woqPHWnLA7dRaTq5AZRCirRAkg2eUMZedN7LvcCEj1XRxp1CPWZ7Wf8ETMqAinR4cXNfmqfTujgR69QVb2yPKTM",
  "key21": "2YYVFB98WeEekoRwMsjHuXZuGqw1ZK2vNnYNxc7akXsBoPnK8o1bS235UqmzdhzJ7hvwM15G9UFbiwEeBVjfEGHE",
  "key22": "GVpNGzswSncYLbBuLNmJNCWu2gHjoR7PodKvkY3z1ra2mWdshXDE5tfribc9ky3tYDZG1scrVTNqYbHjwxUWDbS",
  "key23": "57zn35a78v3Pquq21t8KHifcNpwiWCAFbdHz8UpxSWpRFH2xiTw2YeGFFr7davbzU4pJZ5Rr18723xohhUJuTPYE",
  "key24": "31QAhJpbh9oJQ46dRN69Y8ZFk1FwVdYRtt3J5ayP4ob3dcUBbtUZSUcRf9qucgnp8dg3mcXkWTXSYxyvDNRPnSkT",
  "key25": "4QDVbTcm9WSyHZnVXRUwnDvVt65FDxttt78bNy5dFmmddP9qKCtjP7fc5fyb57LPBa5QV7nPoprKphhXMvHNjZ4j",
  "key26": "27KNTqYD8m3yVEN7qbn1zLFuMB48yQkgHhhRGNYUoWYX3HK2HDssvE9yhKhQynCdXLRCYCaqQpbwy7ztRthTtSrt",
  "key27": "48YYNg9feN2ubctVZdEZiMzyMt29VpS5SvFoPLNCxsccKwzw2Un3bzkTwvZaip4hv38e9CxYF8v5GaiArjRHfzyd",
  "key28": "4cp8LrrHr6aYP1SPeo1toQHEzMaRcZ6Vbvpegr7MrpQPnQgo65VqLpZid4dyuwziaC8m2hC7wux85ZMKcUApgw6R",
  "key29": "428e84EK6MQBJJmJWNur8qqmGWrm5W26d8T2wNg1gc5osePRrijVtRSNbitksQVfj5CbBs3jkKGXg9mJNp62bbyv",
  "key30": "61zLKxLxVYELemCQ2Bv8KapgGvQ1GiwGFYaG3VDXWV5J7LCUgF7sMgRhcPSnB1MR7dKgSCYo5VSADgB9XSo7FRG",
  "key31": "36ZnYASm5PfYDavuBkFDNAY819hog3g6CUvJ212iX7azrLSnxpcpHJoPZGqMtBWre54i5ST6TJK1UUtNaXKUCp7o",
  "key32": "7UY6F9HqzbwnX4PTnQA218QH6gb3WjqL6drJ5x77NZteW1D8xBahiQLMpZA4StivR3bU8RsXmxMSvWFUHQ2t8fN",
  "key33": "5sk8Hoq33NZqkyodrryBduKK1xaCPfgqRRqHj1HvQcdanv29fuJtcxw2NXdhPtgzAiShz3sfxVm3N7M6DcXsMYkd",
  "key34": "4FVUQhAjSThuMgtrnJK2hagkFSha1i64GMvZmPmgVK67pHeRhgzUpjmg8ryAWgzKwszD8HATLkrUiXZkv2HTpgkb",
  "key35": "oK8VLKB71HyTiJtNtWTHpHDyecWWa7JAapuL4vSRr42JNBt9VmWnvtN6VaokQzSvUxkPKnKZnhhnRyJsiGJFGTi",
  "key36": "eumSTBajEoX7TSCtsxATK366zFCqRgcwKXEFRcQMxCc5TDLQpnK8q6csazdvNrGYAQki5BEyRXscHXJyxBpYAnt",
  "key37": "4WuhXkdfmA2mFBW4K1jwpKYTtMsRHvMnkTfnV6yHrPoeScdRnAX6PpmBCqJjtZVfus98g87xrTPCxoB144dpZzC9",
  "key38": "E2gjVLdAfPdDXGqpgNAfMp9hDtDLHFSPrw5dNqidXG1vVRjE2BSBfTanF9kr7RLx57R2WgV7ZNFZFEPiqnQfWiQ",
  "key39": "4dQMhLhPMQuZ49dSJqY7Av1wTYBzjYXyCDMUZitQQaTfXFhitikx3e8HpFYuPFnbvqRRLz6fGr4RDBcnC8Btrw9U",
  "key40": "nU8TeARndSwTjVBTTQegjUKMXPmg2g4Mfs4xCoBqhb6EoVLxxtUQHT4TQzBX7L3dkCtvKLgobbNWV9UEK7PophK",
  "key41": "3foSuLfNvatsQry32vqTKhwydXgyv5L4uZaGukJGqXciJUV39ZvLSrCuXjwhZfwzTuHTsyAW1kXfMYpBTVatRSm1",
  "key42": "2krEm43Uqg22UaH7rpiSKks8Em6EKCqfff7M44yvkBFMX5ou9PyWoL64qAgCGcKkzz92fvo5eGAUiuVuBihg9B1C",
  "key43": "5Mj5H1DRfULSHc25ooVMLdGBYhWi2Tjai3ArhWhwjDfkhkRHXNjqzrm5wpBq1Epxnpj8keVDBCyZXVcaEnxDiVjj",
  "key44": "4b6UQo2dwZGK65xv6MTzGGJWNAKWED2j49ojNqLF8fBqoxkB9x8mvR5sBydG1HP6BhC5uEiisWr539tvmz7516na",
  "key45": "48hKjmp77wTteDxDwVsLvb3erD6ozoYGK9CnTY4eA1vpVhUmr3PpruMmATqJ5kpJm8uYqTLnSH7mxVpYNNpkukz",
  "key46": "2ksWZkDPNgkxmmXT4TtNCoToLYvioyAQFEzqhzuKuTkMdgmjxPAQQt8oaq8JXW4FSLsB6dAv1uSMbabGygYAhyZo",
  "key47": "3i2qvBUmZivHJ2AoReb2Q3wuUzyzYdJwAFoyWQzgAVQ8B7wAxHRa6sLsR8a6BexhUZALpwnPL3DuTcW9H38AqDYz"
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
