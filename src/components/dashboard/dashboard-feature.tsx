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
    "3vnnLP2o9yaAtuEgbrusUpzLaqUR7gH2LvpwPpaRCY9PS98XkihBn6PjDkCDqL4taWWUmkqUcS8Zo4253w2BNRGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orivbauXZqidWezAi7pNB9eMdAZjZFezNAFcbn6eUpPmS72Jedp4jWSxZP5dTU6rev9fw8HZwZpe4EeKx6NQE1v",
  "key1": "5DtzHxNGXjArMmqHg5tkCPyzRy8pc39eYCNcXSstz6qgxLRP23A9nNBTEZtARHDn97G1KBahNDn97KKqp2bsijrf",
  "key2": "5pSSXZLnUTtmKg3AgYwnhcZhxwMpYWXQc93VEWyQENgL4pv4VpAmv6ZNJPAh8TraJaQV3yzVCj6PCo6GRAkHzKuH",
  "key3": "3bAGJ635KmwHEn3RioNrUcRFkGEFWRFCHhquiYqdo2tHXR23SEhBbopcxQDgLHLLqhdf1H5Njkmmby6oaMt4E26R",
  "key4": "2SrD6Kpxm2QfMGvDdQR9waUMPaKXDDdkvAotqdGAfU4VdsPUWZCmb5knsmJkjRWr4xniGZz1wMB5pzjbFdSRwiYZ",
  "key5": "3x9jtMTSMJaknv63HgH8Ndc71czXsRrg2myDwLVKdoPHD4uvG5i83naBL7YaEy5JDpNRH7jG2K4JiSdE6BSQzrb3",
  "key6": "5V2fYy85z8YjyWjK6tCyxhzcWnRGJLHTMpsp4K3aCMX5xiXaKgmRpcAursnNJSKEiAcc58cSyaJ4ayhv6e1USYTx",
  "key7": "5aECSFeZq7mJgJB1KRG6riTU4jtNSpcZiXRR4w1q8tz4ew3kiE9TRvm6cCG5QaXzM7L3beTr9a4Uc1et67DhNRnm",
  "key8": "C4phtUC7eG8Zg8JNiGLEqsaDjDyqf6nU2VFCHtseA9mxhAN5xHygh6tiXTcnCNYspHmXoowG64ixeXzKopiiBMi",
  "key9": "5Qv8H9rPdtDEBzfHzKXa4MYNijQwvw8CMNoXYZhxSoq4Kt94mQp4GSkhJ3ihMcBqqymv4EmngVZh5jhWETNn6pUZ",
  "key10": "3jENR1EfnRkNKhx4JiHEYtZofcAzdUQULKCC49rat5sq7kxQ962JJXuLW1XMrLiZvqGM9Gi8uT3A1wEsRRgzBgML",
  "key11": "2XrxVKHcdDkcCbYrYtxTRJ6jZiGwAgKSGTetN2G12oNqtwKyQrssm6kUpn5NfGenW2iYW33wLAyy4DKHpdBVnQQ2",
  "key12": "58PappECVTwEefoVVpP1m2W3Gpbky6NwMkAGJzu9qi7RnmLB35RCyHBqXXTQjvZLULSdLUqJj8krTnNfwZXw5uhV",
  "key13": "5sFzWrPeffDxXnrY2HfEXhvdxxJZUNf1a9kiFZpUPpmUfzpfwpt8ekH9wQ4yKWjNaDDh24obJHiaHcsutXmCSb6f",
  "key14": "aJQvheJmfVhHqJdt4yL1L6uhS9NXdNowECAKTb9Yam4Ch87WuvP6H6vANaJU4XNAXhabUYkePF3QJErCSR3Pts6",
  "key15": "2hb6ah7LUh76pcgPuLAGe6Nw4s1eZZob2vQYu6zimh86Mn9AYugtzJJn5AdoRWabjaKbWFH62guk4qHsBvFybn99",
  "key16": "Abbv6eL31KX16JFCgjohjE1ij7jDZKXN5orwmskx5oKbpr3maTbaHqcCmi1DT9jiyjLDaCXCEV9XaFBfdiwFqTU",
  "key17": "dB4cypPnYn1Jjxeqak4Yki3dVa4q9sqXhvLabeZLmJieL6Mh55JTAdjRW7tmST4yD4NdDSx37itSa3QRqAv9eEV",
  "key18": "2iZFFsD16u2WXiWxXDXZLMG6qarZpRqJGxkQSvYkmPjLCrQvtZPDfGASBd1JNfMoiNfeLsRY79LKnRg7cJV12wyU",
  "key19": "4ApjQqF8J9TxNKc5RTLuoCigmTacgG6fX61ezqNHB5ZWgW5Biocw2FPivSTHw5Kn8WKnoWZngc1dRmbMzdNqHVLu",
  "key20": "3Wf76A51mv3bzkJNAz1f6zC8xBwUqPkLf1Kmt47ycyzeVpFmKJCT7XLxZQwXgoC1kKw9MWA7qbcvZK5vDaEjjDQj",
  "key21": "2swUEy8aGjZpEK1y1SE4mKrMh1jme6Wy54NfukX2JCF7YFRsukxnGxY8VFjwATx1yPkgXMc9S4nbE6vgspWkvdZo",
  "key22": "jEz5G8HDX5JuQyt7E3GPxXgEzKsUbE5hSu4HMPdSFcJSEVPywo8K7HwjnksBNYZyAEx8pLJWBJV4NqXPaubmZAq",
  "key23": "2m6TW8Z7coN9zHyvXKN5dPHpScZ79FFtaT231VJBDm2kkJjfeCidUn6Djs4zpaetLWMdcoiwm24BvCmAWGcDTMik",
  "key24": "w9rygCMk8gkBwA1sD6f85h14AK5auofkAWQu9PDoz5r5Q8WKmiGgTiJrUWKqxdkvn3GhTNhDca4QJTDbkJXsnr9",
  "key25": "ggs4JyWhksafW8SWM37bHYDMeJeUVbZNML4NFqaKNSivXQdckTEA5HJkmHdXKETsesVU4RAdmh94LYp1CtAZULJ",
  "key26": "2jTMubv6tdYZ9MKXBh4B86b5Q8KtpQzs4HXucFvfyQz31vie17zmLsLAtTBFhDyt2RbtkeMywespyq548KmtqZ5k",
  "key27": "4mxJ4RcfEX4hgBazVceiRa8du73J3tg5RW7ZxS7FvgF3T61eDzuKpTWrLTfCzx7Hc7cQj5jNkZb8Lqt2dv8ZfswG",
  "key28": "3fWfPjcEvCg6dgCzrhhzrNHBnTodso3nVfdijnsjbRtJwxXZBCvp3qduGGXgbHsMweLjhWMNasZNkgjzoiypxcrb",
  "key29": "51rpiybZswrvbHPHRgsnwAi696eTEARpPDYagDhztJpjx54csR6VihHUXwuVDJboNbASp1AakFUfdPBTZnf75RvJ",
  "key30": "5BoYqm3J6D1CR1yCTbhf6j4AuLj2a8dAAGkwVPBezbKFJUzfbcuo2YFx6eaXVdspYue5FjFzmYiBkDQXRMwsQPKy",
  "key31": "28aVdGV514Dkunb7fPQKvC2dfk4N7Vi5r8FZcJkC9ADyPVHYtC6QWdvkRFkgzWyDUD5RgZGKkBrqv9WegYUPqJgv",
  "key32": "8N1UQNPMwrzcth6hzkrVbjCMdzHMajWY3cGbAd47z3QfPrjCssG943NU1s36GELKbwVFUK7F6jsdNKHMheBFJ4r",
  "key33": "65sBvVETYevrGqed84iB2q2bHj3S515QiKv5Fbwjne56E5f6VE4V8KoQPjgMTBEj7sAT7ewdtibnaH5NZAt3bwb6",
  "key34": "UXMAtMDajSB5pwjsNJ2deaRx2K6cfRsMCETfwRd5AGN35XjRDNghXiUUzNqwonDhjaUU6LEiAdSBPLwEpoHhArD",
  "key35": "5BN3GFNuhfTvQLFZRcfEm8nFbKfkidNcX4RmGRTJ1FpAZqocpjJ12qNTPBGN3APQDvNr2HnzKpAVz3HFdJY942iG",
  "key36": "5LmwR2eq1eFzrBvjQvzRwxReWEbqgmodcvMmFkRJG6MkaPLxd7KV1pwKqg25eb3FFxMVYeYhMR2CNJi7kgcb4oKk",
  "key37": "3oGFCCCnDuDhWm2eV9RmKM4unZaMxzJd7FEHjjNSK96e1FUkNyjdj69qMQW8yXCEifKCwffQV299bipSwZZtWaVt",
  "key38": "LvD814LMWfk9GFWq3kyFkDRRLetJoJdj46gZs1tzSjJdys2zeAnWzawETxvvTjV4ed13XT1xTeP5ST1cQyqpPXH",
  "key39": "rMEwDgxWcmhfL7TBkyJX74KbxRV8pBDt1XhA3XAwLU8X3BEaTumNuXCnzNz11nBNHN7h88CmDV7MBi6GKLVTBKu",
  "key40": "6zTUpHuxnhPRyQwwNzMcwahgRgq1oyHSdAVNuayNoxcDjFu8jJPfXJg8VZM1XRE24ZMJjCbJQhHLbLuBYAZWhUk",
  "key41": "5CK4wvu5bdP8dixtvBCiN5HKrVc4PK2BNSccyiaiNraxq9gg47DboWeMYaSaMQWavBFmqMYuEWAsJuw1ioy4G4i8",
  "key42": "3KV6JAU3xNS2HKNPf7p8Z6FYrknuZndPr6EFfwm2oVT7PTHycvqQGFvGLQGSkwEGZAhzsBZnjbivGo3QSxBoe9mv",
  "key43": "3XfBRzN3kqtLkX6DZc6o3M7QWNi4WRK76oWevmt312MBssdvjSqFaFUXHYsUn2ZMei536VJuPzupwwEMzDL1nnJ5"
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
