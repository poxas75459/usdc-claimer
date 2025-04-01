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
    "5cXrzda8chw1WCe58MQdepaX8JxYVnViiwgoDCBHMJiZfkTwLXrDKTxcjFLYRdJrDyYNbjigj6UXAG3L7QoHqQ8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mLtEoPL6HTbVxLCr8EqhA2Y29ZfcHNLFa9iSBfHZCTc1hc4NhL6wKPBpGNXiRP9aTiNjPgoscWDS1hLMjqYqudh",
  "key1": "dCfaevuuk4neyafW38s2aqJ45vrDxe2aqQP1ryT74TR4F9duXpjXy1MypR7mmkuf84WJ9HBhaHDXYj8UYRRZoLM",
  "key2": "4wXBmtHoGdWN4UEVdKugFaT1Ddg7yjMSBMY368iuEDdEx3rhDEvE6cfXgj6sEYjmDmvXCR2m2H8JG1xRDcrqHem1",
  "key3": "3unAQhRTAT1HZVVybPX12pXzNexVad1YSjfm72PtfCTZLigVFBPgNTtmrnQQJXBZYM1EzJ2j4YWknJ6a3gzGj8dQ",
  "key4": "4uU3KeS8pxzNhd5EpBkAKET8KBsf1M8Ycv4t9BACui3GjDhrbohP15g4RGDncAWMENZxxaugwGEWWxVu8VyQ2Rhz",
  "key5": "49tNZtpbNVyaJ9UofXwR4rKeTwsoDu6SxTk7g3pQhYSZPwL4ebTypKNbxytH2MMdc5XsxtJptRDpd8uwzMnhVnbA",
  "key6": "58pBN45C9j53Co9kb7oqCTkjLMjoJ8t4AVXCBiYkdjcWaNmQChDjWpzVKJuYzgCC2RYub2gpGBZKft93PCookycy",
  "key7": "2VPco8XZhYgcobvwB3crRpNkm3wzuejZKHupwX6SU6cjyDrLPPv74tw8HcnHUjxCTypZpSNPTh2fG3wDVwNyuxVY",
  "key8": "3G56qPYzXEA9UCfLf92KBxH5NHeLfcikV5FQepvhKGWuUsXYRkPkthXDrtyRQtKkH4G7vhdK4R1bvWsoKjvaFH8m",
  "key9": "2ojnQzKMPkjzToXzZ3WyaXNG8q9VJnt7zZFHVKFwhoHJEkRc3mEHFqUM452JrWXpazPaeXuf9g634NUVC3HPNjkj",
  "key10": "1SuvYNmaMKNvspKy9JMbnzS2P7Jd1kZzPfLePkaKpd5fjsku13AYtCaioL63mF5KmbSq9BfoTyGHUBVhPzhqLHm",
  "key11": "4hCNJCWXM6PxNQL7Hi24cG7kGybH59nSDhtf3iRp4UGD2qgkXjwqerwMv6mgQnPsFoJB9ZihSGo1V4FonriQAuxM",
  "key12": "4YcB3nbjgzwxSRs6guxCQ3SkFNQTABbTrJCzvYJQvRk7dfb8j3TF2QuLQqYrYS5aaydyYfuYB6fCf4gdqxmCTuWg",
  "key13": "4duLZSFDwSHADL6JWkrqQw1YRfQUibPSUyXCS4Ap1TwGNmy3G8LqDYwJcjyytercayuFCh7pbPgRB7BKPo9fmymo",
  "key14": "5kZTiEqzE8KZrFakNppbG2NA6UeVTwqk5mqwjowA1H36TCUW5X2bQwPsriYJm2syGTyVrzAAWFBetQEdxYExMN8F",
  "key15": "2RFtM53ACuiMqxv8DytUFysc1VNxdytzZ1YudZS5kaQbmkVXvdKxpMECBjj4TdGnsZmUa3qgrxLmCdtRgUx8ejXM",
  "key16": "5k8dkbrXnuSBcBLMezGEu357VHjfWLndYW1W8AMMbZ8mD9UDQ28gKrkJGhq33AD3ECYKVv3krxCxsMqzMMk1HDNn",
  "key17": "22S4wtvJ2rkYGDe5DDb3ivyVhXXpJxV8GWpJj4CZfV9TtrHYivtJGUMz6Zd7D6JX4KKEB2tGxppEcQPHnC1hwepr",
  "key18": "4qUPXK9i9CBh47jxKVmWE9KsUh1GHc63Y7GRu6kgFedrV7g943cZztKeGsK8Nps6WAE4TBYfadNCWgk2YnAe8vrT",
  "key19": "2Z6PUcE77G19ftpSMvaDDcoRmvF2jJofbxNePciG18eCXxzjjtEzGSHBSbromkLKFbJnQrwCheYi2R7nMHPFUiH8",
  "key20": "5wragvnjmDkvNKCzzZUSt13mEQs8xq1H7Nb3FCbV1d3hmcrXGKyrZtqhadL2MCvtybVsFzYAuxuQgtYi5BnbiwBG",
  "key21": "4DvE5NTrRXEJrptjQM4SC9ff7gDZRfi8ep8vC34WvCdB4HMiwkuAhaw7ap59PWE4sMwFp9AAiNbmMcW2s7o2K8Lh",
  "key22": "3EKfYQPWa8vwzY5tnyXQ9yTubFvXAdoy28GWWcDkMqpxiFuKob6YZkTh9FaWiuPXk9nfnHVaStt2z8YbM6rPnhEA",
  "key23": "3zRRWdnRUgstS8kX5JwpaAejjhoFgW6opN1h27zEHfm852JzLXDMJAHjFgvJh5dcPkPtBkzmzCfnzRaWWpezQy6d",
  "key24": "65MfooiMFaZa6e1q3M29twzTrSHxzCuyJ1gwxxc6y9Gn8M3PKELAzqn63RvbpwtiYHVnpaEySda51whN8M1Q47y",
  "key25": "4ymN54berfx5jGrLyaZzbNr8fZwEyv3Am47mgFXqnzxULNY5k4tUyDniKKdnYsrMYitJDgsWRQSTZoePGPa53DoD",
  "key26": "Gy9WdrwardtPibwGJc8PuceebuLF9K3dGSX1615RJhFG51csNXw1CtgwfWVphyZ1g9ms6doU4NVztszpZquaKE6",
  "key27": "2b3ZZ3RN2DSFBYtSRFgUfNcCWr925QqFVRUUwma5BTcY7RHZPTs4h1gozMFtbQSakPiapxN86vLBUBU9nC73Lu5x",
  "key28": "2GTnh6aL8fZaNn94GnvTWvc3sgyc1y7D1tYaKP6nYASBHhwdB975c2aSDB71wqpFcgLNzpcA6osTBQWs5CqVFACi",
  "key29": "23F2sx6QQaPfvpym1mSa7pqpFAPQKpxoWVDV1YBFgwq76zzgbjYKVWoB74AtDzb846mAetu9yJYWRnFP5H58aAAV",
  "key30": "2jtPwVXEvdojmGZ5DuWm2k5hMc6joi2vDmeXDjM7dhqLCRjkcTSDGRnR62gA3JoT4KymnXQX7shaKDurCqDQ7PX6",
  "key31": "5F7GEsV4M8zAVoRqhBrmaw9DMZ1GXgqrCsY2xsWemZLaSA14KPiiZoiVGDb3JyKNa2pGUAtyEKohP5VcPncvo6ar",
  "key32": "4QbGQzeUQXWuGELiqRRaQdopaJpGDG7K9qR8hRKxbXGfcdFvrPpw4cD6it7r2nSf3e7kEbBLbtp73sj2ShtR7nwq",
  "key33": "2VMC1RK6vUvw8x1XMsvgoPZ6NXMZ6KLBTHe2dET3fZqvULgqytWBSQWUg9YSqTkV1tiojAME2xF8puezzc5jUB1S",
  "key34": "4kTiWDDJtmEZKwbW9uzA6ZqMPBMeUV1dAqPm8eXmrTZCmfy7K4mtv8dpoq3F5FLpL7vZzBLdWXVg6rSA3stXvNMQ",
  "key35": "3ZyqYMabHQCEZjEjzCoZx7Rc57LCyaucbtxVkYSN1XQf6GpdTPVQprxzLdB1CsJ7F5fp4AvFEXwDTw5KAVA5Xdur",
  "key36": "7TRKbjoqiEupbkMsa4DcHpuKHsyeemH59q4iAwzzqcrCE81cTDpJNfUAg4k5CiyoqaVNLyNpifp952gCBydRtZr",
  "key37": "irWNav7XamQMqMGdL79qgD1VxrTs1fgNRQP6uYGyNUViNKAxn1U4ZE7VfKE6W4r7Us7viXqeg1gtx9jHGu51dZ1",
  "key38": "515jwLuEhQvmzzVp9z9ZFxFt49iE2JGYKY8MpyKeAyP2RnRjNqnH1TiJZkAx98wonLMu5ykxDmyBVNitnHDQxrDb",
  "key39": "3h6pq4n2WYxEZGYWF4xNtaSWDvWDf4Tp6KrynRdPEKSt9gtPVCyraMjad2n37vtsdKoaGVKS1pEmqAXq3nfSaW21"
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
