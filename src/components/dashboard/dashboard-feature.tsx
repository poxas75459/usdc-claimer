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
    "FAaYo3rU2h6Sz6xdsGuCWhz4Y2dsWJdhSwpNgkZXn6Uw2woY56jYx8KFQQu3vwaLBV6ng2ENNFKc3nTa3guVx5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABQuS5276wsPqbf2y5Bktfai1XKnXkVEbWjge6HhgFXMB3TVVL82dTzVbdf1emYsLb5e5F3dyN2pPkerZLZToho",
  "key1": "5uHPuCcqRCiRr6iaSVkxe7NWsnqNAxrRVgcaT5mx9Uoc8JVk9WAVLKyMzfTSUpgqhnVvQTZGUjxpn7WmcczG7pyc",
  "key2": "41XxdnBm44FdHuXwMddbjvRLuLLsTFaqY9DWAQDXfANbgvQXE1wsyZ9Xed6ye55oTyr5o8GFUkiWa13mvxdM3BhW",
  "key3": "66EYGsdnuUkx7Y2buCPUQdkFRXndHGUpV6CYEjxc8vfrGKRschboMmfkguZunnReZVDZpCkLDgvuosFs4jxPDe9X",
  "key4": "5pfTh1ixLw1sfsoPoMD5JSrKjuhGDLjd3pZm9NG5hYsxor2WQrawhMsKUWfgHe8qFhunPXBaDYQkT81uxTBYFkkp",
  "key5": "3nhU6A5CkVmhfsneU7QoGnRbqrv3fw7F2uhw13eBbpoWEMQ2VfCzTgc3pz4nASjwMtLymXa8pt1fbMzzUs364oXL",
  "key6": "32UJztn7uwPesozrcPSK5Y3v8uGapNucHWWDJbMzApuFMwu7Z7jt1kbsvmLVcqKguMvzs2xe8MU41aqyDYJ8XfNa",
  "key7": "bLpZkTJL8LU32nWgnCtVaoU4aA2nCdZuzoqkZ3EvvKd6jwd9JtbxfZ4mtCP9X3BkXQbTAYRjgQ3REZWmD2duLvP",
  "key8": "5U4um4BXfi8duVaAfrzHbqNNEegfH4MGNURbA76o4aRmfQVYC448eYycovAwURpvaQeTw7s7yXogtAHuoBXRNgJU",
  "key9": "ysbk3AzSDcw2NpUJ3moztXvPhzAz3VPEEgLkF439h4oWW67U6ZiETGDkrxi38DAHRRrUscW5rU45z2N2YisdWo8",
  "key10": "2C1nSd9jrrUfJiwzTb4fdKxfA69V8XJZR9BddeoWJdk8iwWeLVw5z1mpNsuMDZ7XkLBvrbcrrEi26keYe9Xh2HDx",
  "key11": "2Nm8f9unTHN23nHTEWSoAfPrN9PQD3t84KuSDsea8eNnUjPvXe6rr8cviNSXnCKmTLsfyiMqpWbydtXu6kpACey",
  "key12": "5SYs3yLb1rbdFvRW6MW8PYy3UkMGSRFFsKdRr3NXCy77GFa8tXXMFmLfBYmgFBiFdnh1Gk6LJUNkoFEhsY3rY4pz",
  "key13": "3zJoxonY25k1R4ThWvv9A56gZd6aVXyUjGPMAuKMSnQnrAsthyCvCEWGoDQgDNexmb54uSQXsuYULD8HA48cyZJ2",
  "key14": "rZu3iqDSavjKFPLFsw63bXS6MaFEA15KvEhzsKd27MtuWTwVSc42AiQbACus9UqCs5roiitX3BySR9kBLug8FSw",
  "key15": "2bTmb4qnQWvV9ruZXuV8wYFHKE2zggu66eC6znEbewD2M6vabysNenGnEKRBQwPPGFtYnatHYhfg4izEvCMDCWg8",
  "key16": "2YUsH2i4fEPXYn2c2oQb1GVjNnFfLZZ6mMyk6vKNsSpgCXLGeoEXHUGqTLp1oFvTJEddamEkumXE35mGXLfCEbPT",
  "key17": "64nZ7EdRncbhPia5phm7kmAEuRJ8sGwy1TStRyTdnZttPRee9soL3NySgMiN5z8MrQyKfQq6xzPw4U3bh7f2MNgA",
  "key18": "4d6WJYFoqH1ZkThAeD33EcQ5uye6EDVqvnxbWFK97h4va5DAYKcTimyCJ4d4KrX9FpriKSneDe761BajhrYEzhpw",
  "key19": "2h7SvndkD74WUNkTdF1PPyWxobSPzMg6hyk1NsJnQMvJDLSSUv7PX9X2UBYbHrsTdALXy2Ucp5NwAcb9PEb7TVfC",
  "key20": "2zuAqNosY3MqUqGdtwLG3DUU8rYsHsAUfcfXxDbffzFKG1boAHiDPV5RbfgqAgcPfdPBmyeM18DPpg6HVTS528hE",
  "key21": "4hmX4wHKvCH3PuoFTuWVdudF4EqTWMX5r1CaHbj5WjspC2yJpxMMQbEZHuSoj7mgknVc1gLi4RSH5izrJoXr2UXQ",
  "key22": "5B2Lddq8ocN69GKKVTrZ7Uc1jp6BXfT61FezYJjtLfrZm5G1UboGD6KqqpvrmSEf5B5bQwKxP6y45jB3WVCT2YpS",
  "key23": "21vUikxcanhSqitgzZvMaetaucLoGazTqeVVSrJb13c4f1Pc6SBWeK3kn3YqeSkjEGzaBrQLWFomeXcrSWX6SoRM",
  "key24": "2xBjpr5eVBsACgqRx5ZgCY7m8iTrnQoBfrzxAz3FHAvvocqci8Rod8ZoQfH4y4wSSTwad2Pioc4WV1EyLDryxoMH",
  "key25": "5UnEPCVNdhVbuMNFJ1FWotWZGWzo7e1prHCCapxXUbCnaGtUhQiAZx7W2jHebQmYMtnjTJzmb6ZfwYrNp3MBQWUE",
  "key26": "3kh7meCKpb1ypXtqEz69uNwJGjwNaQbkQ8C5i8vraQdTBJJ9rQmxsubmT5gJc3dyvKcWLKegoFLCu32LQVAMwiUM",
  "key27": "4Yg6KxhDUzK8YSb27ptQ5gQKx3Nxpo68oc5oPzFZm6pro74TY5VPbgCUZc3XMp3vWhHaQbjsWeAY5f1x2qGTEqYH",
  "key28": "2b8CVhUukyW22XeoaiTQTVL4FJSN5XdLjsbznCrxPv7c7fb35KQQFHwU9BAJ2FuayUrHYdA1uoDFmG4VdW9cikod",
  "key29": "D69n2BXTw395hbBFqrDuji9tDc1ZcbiYuEgtQQc5bn3i8KqRU8iYztnMjco8oBhP7buPMSnA7o3sGRbVGWa8127",
  "key30": "abyf1Bqxfg1pcvCyGwQ7phocG8MJBxDCeiZHutXKTGNTbatc44bCwysHs1oYJW6DixYf77sVuk1eRD3SnMi6BgJ",
  "key31": "5q8KgHgrLBA1AgraxHNEXZgnFsJcwyhDDkFbusqY94BqDPzrzfgYFK8uRLezJfXJQ638XpfSYP9v5TwCn9X2x6Lr",
  "key32": "3Wtt9MpTwQChLidYsh3NazwYBGQAvpcXY8Xg4e7zcD7Qb7YXLXY7iMV9y4LzgGPGDAmA3oikaRBXvyb1NEDUAvtj",
  "key33": "5hYVzmvBMKBE3zkQuANcGrDsJEcV4uSsgsEqF1URjzhPoHHo2Aqt5mgD4mQ8tJK9UkpYSeaECTkoa1t7uhY4rSmK",
  "key34": "3q39h4xur4TVHUejfGi2xgohVHvzpHZA73gtoSKkARZCzd6i3YiBEP9NyNn4d8m7jrCCHgwAcr1nJfiYc1hy7Rfh",
  "key35": "zDH9KQsETACEaPeHhp5RazZFaiUMcppziHaC8kKHBaZqYWKfXrZT1Vy7WcTUJMznQMhyTkDQcuKXGgLdPqKJn6h",
  "key36": "5ug9C8n237QeAVNVj4RVDg4axB7wiW351egqCHWiawN5SCXEc52AXmDUjYsK872JGaNCexSyBEJv4bP8NQTijbXv",
  "key37": "4nFaUYUnwEARxFDByEAu8xGV7BnxrGahX8c5GLPkaNisrxgGW3eFmVex2vAYPPcKaEF68qjrjn93KSu6F9Ffdr6x",
  "key38": "4uqWYdsXfCZALEC2qqVpRqkas5N9KRyEPDUxzg4GDSpFjQZsqQv1zAw2qogCL2KQQ6wdr4onzGLX93cZzytA2FLf",
  "key39": "2j2QG4WfxmDbRwKipRNAAHNusbR4pACJD8mBHPz1j3xJBeYouAxrEdoNgYn7kptc9gn2HrSeqRtdCvKcp2pPRHAN",
  "key40": "2R8p52AtbWP8h1yif9uWYT6eHryGmDgGieT8B3KEZz94qrAhkdoDRhCrzJcdA8AUvsNu9BcTRHwZAtcMaUH8UFZL",
  "key41": "5a3ivratrbVCSYPUCAHJ5bmJZzVUZBWRJBbefuSuWL2iJ9VpUHinRM1icsh1Bt42ZnjdGo5AuooLTrczTAQZpsmJ",
  "key42": "2J9UMKJa6UFr9vVk3z2w7h34nw5LhfUr61uJC1M58yyevZHa9yEUiuXUjrWcrmGdUA1hYAC1zMRMsXm4Sa37nsoy",
  "key43": "3Lg512hityofC4zgyz3uewFcakTW5F4Pcw9gCgNEQ6gGEkkWQg9R9uuMR8eF43CqmhxYoqV8z9F2ipamf7TYu2Ur",
  "key44": "3t8h94AwbHyMJ39sQ5f8yjVjdF9cXsR4UpajemxXNL3mgRb2JbDUh1XyUYyfdB4awKyVTVdPunEnYwFo1eF8ZjG8",
  "key45": "4hdRPei8HXMUpLUpsDXMA4DQwxj1hred7k4xXcVUnmDK7BU8SwguNgGaUKK6RXGSpFqHGMjdcvo2iX5pxqJXWX4E",
  "key46": "4FyaY7p7FDN2ZvebWaCppXyDKGahZYUrm6UAoPxqpDtGi7SX8eS1bCy33xSGqJVBT4eg4rWrU3nrZizCCXHL9RrJ",
  "key47": "2czkJbrix5taQkp4RVHMTYPCeR1p5cdUCSQ1DckJ6FDqveHxHw8mJvpoxNh9fqUstT3F21H3bd3Bt7Gsguwe6YYY"
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
