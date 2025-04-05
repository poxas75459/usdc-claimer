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
    "28ua4eNkqsRFwC1Xrnq5mYn4o6Wvr5QG1WDCVKajr2Pca5rPUEBiomBueDnhjFp1e29NKMKpv7SaD2iYC7BeJCqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kxShzuLatvDXroBeruL6x3CkDNBbkZVAB2k9p3ZKPWYLSG3wVLU5Zp9fRffimw4s2Dbsek9bguq45q8WAmv1xA",
  "key1": "26FEW46TTmoD7ysBjKGnarr6M45NjCVQehsFHsF9pAoX4eTL5xv44xjt4m9dwhf7ZECmXYEEGqa1tzRVNSjYhAjZ",
  "key2": "2pDg2CWF8BrxexjQg72Q2279oCMgXMfsWUxrhxurny867Pf31TVdL5FzaLmDnMQoBNQJjqaKHf5hqxuVUZjePy4G",
  "key3": "pnABbDWBpyuzoFZ5h7Bdr3Sm8UmzMwRf58AFAUe1mfVw11xkKVWgRfiBSQYPERmhbBiyuqWzMNwrSctezM7Nx7V",
  "key4": "54NaYjJPPRgLAbvVD3axNvbUoh7H3facQ8joCGEUqRk3pNLsZUxBntQn5kynkSmboWwnXnvk63cHeVXGvPWf7gp3",
  "key5": "2P7kDGcj4SHijAFAUGaRSeKrkNQqc2gD6jvMTzXRiVBo5rULgVczu36vxddBr2NkPw2ZyHi5tqVFMAon8ZoWWyfS",
  "key6": "49tvhpK8XZ5x4LQWXUxk1cC3A9s16M8XLgxxJ2Lm7Sj2GiheRsr8T4gdUyhG93nbTTJjjZKSEQKCQsfjkSVF9PyR",
  "key7": "5xwQS1Amfnb1Y4fDSX4NFnY4NrC8Cc2XRZPu8b8BdfoShV3FDuUmiQDfGdqRYZkCJWfRV72fy2DvWhcysmFjix1b",
  "key8": "2WwChm6Skje4EqoA3wZECaXkG645zw8poNrf8mjvUz7rMEdoQ5xKqHatUFGF8KKTzvAmty9hnnpRuVo5vtPCckyY",
  "key9": "GsCBvqWPXeScexYEWBftvud9HSs32xVa64oSa3kKC6FVnwZYAfGjCrM7uGa8TwD5uJGNJ7ncP5HFa5578FrJPYP",
  "key10": "4EhGUBT3ArGfXJsmZ1fdtMuv5TnJ6zNqwKStSsL1kGcxLqKWFqs8j6pPD447DqUwXbt3T7FGnLGnAxqPYxQRs1Tj",
  "key11": "2gJPTQNtCpr2WArJGmmpEcK51VGrrzRtzLtQcJ6SPpGWmGVuEcZ64J3ov2X3pUt8p9vzduxr89g41czeiz5oVtcL",
  "key12": "4zaQaNotTKPih2N1QC1JW6kiz1KUNYCSuJqPAeYVjHXhu6TPr23MZqUKRMtEDBZhT28UzpXkAG7TeAk3RMJwUWXP",
  "key13": "NneWw1iehVSLhaTzKs6B2r7B4duyBrEJcA4EYWb4c79Ji9Wcxa6Krsh6u9DWT82knot5RLPafpTfMDL3NeYH3Sp",
  "key14": "5tNVc8qiWdSEZnj9RHLwe6qkdty22q52AAZGx1xEt1FDUXbFPuC7sGeVAd9omSqBi7sPFLnYZB7z7gQpeVDN8G43",
  "key15": "2GjmXR4GNzKc2Yhob3jEkRTfhKAvRmcqx2KqfYt7FFBmRXJ51XiAddvK6KZyQoJBNYtHhNz7pPtDy8kMLPjdJzTP",
  "key16": "3GXE5fft2A1uTMKL6bPpAhc6H8wkGWz5CZaMYWA7mX3nvNwGY1RdjErY6fKcodx8HPBnZo1HErxyJmCaSrnQnZBv",
  "key17": "421gxAfhiY44Qv8tqmnA31CaLik9ia55Bmdzc2YfC4sfmEaBKGYL55H4hFzYxfniuwhRF7Zky3S6urFCVHhyoxLG",
  "key18": "2ZyuDNkm9ouAWf1LDThuCpaTMYgBbcW2Ctv47KimjmR2fGX5CoDjjX8L9ZP9XMXtA9XSjzyZxbjVbCyN3WCTtgxk",
  "key19": "67crcFq98TtizsBwHxH24peAi9ScrwCoXVWujKEXbNwhY8YJfcQAGengANoDKR6K5F5JM8K3XyA9xYeeECjoFeze",
  "key20": "tuGDX8aUkHovNoPM13diw7hBcwjdWSYBSbkotg3enYenysN3938jtgip5p6iwPLehn6YcgVaD9eLDXHuLFYsVuo",
  "key21": "3f8dovgCVJdNDrrjxWU6xt7i1xJRm24U8a89g4nHbDWkkoXNybftADJMdcXvHYn1gKFMgsbunF272rieY8Rt9set",
  "key22": "np99Qn2gQ8icDXr5WMnVZzToshCZ4AwGEcBPxbSaSGiK5Nhfn2LhgKfVdrQZis7ajUjKgTQvbjcKxNFxYB3e1eo",
  "key23": "NwvFCnPii4gsTErSwS5xFt8qymivT9jctJHczE86zPE2HiKLPJHYDd42dH92bedjhYeiEmpD81LGbGzhgmL4STW",
  "key24": "DB6U2Kg8RbjgYzVgiczVNpANEB1J97q6SfDPbwNQBSRPSBvP1G1rxTG1h1gTQPHAxyzu8ruVt53o5dLEEGay9YZ",
  "key25": "3uTVBi7ddHPEW65tmqXtJjP6iaYFjKYFtzJfGN1uH6VhXyY58zAex6HyhqzyuCVwBEBNkw6UjE5j7KLbxhuqknc",
  "key26": "GU6ac8TXoMFL3LGrVRxmr4UYPLViiEYc7PK5SSZ8ZvzMJSH7q33Dkqso4iLdaCNH9x4ahtDLMA9e1ZpLWYqRpo1",
  "key27": "2SkphwVUarCuaDZcsqWHX1gwDCiLkQT8tdh8rnYQfZ9S1zyCHVRbRVJoY4FfJwsTPx9L1spNfdHQZGP6VwbRq7d2",
  "key28": "5TYKxQ3wPNyfPnEfmRcRfQ7D9EwvUAkpuD9QK1tGzjcQFMwnJ3iZxGUDo69ctpoq364sT6R7SKcuo2nXhEV1LrxE",
  "key29": "4pF2VF9cX61p58jPb2crAHtDqL5Mc3FrL5EaF9zq7ovCCZKwD31jbK711HWCyQ3r9qEjiwwqHDiAmQdgVz56eFTC",
  "key30": "4AB5Ch498M3CUkE2jGPQD9Gjx7oMa6Y3VF71aDkKQBxaD1uhLfNbf8ZHw5ovhtHiUSJgGs1mVAdzyvncnScxmuF5",
  "key31": "3t8ehoXEbnCaih66JSQnq5CV5Gb2HaCTjqgygqHQ88UVWB5vm4wBfL7qrtC8A7LhgbLHxJe2267RCdXfcgPwDz4M",
  "key32": "2s16qBhvnZxDfYmrexaPmBkjxrS7VhXynhBkHrPLxkWiuEeKWhv4Pm12rnNV1gXxtsVFFw175mK9h7C1QeE79j3u",
  "key33": "5u3YiDoGk5qkx7wtERA5caTsdWv6EMRXTSKC8M4tVeupGcAvbJxQUzTwCECgfn4YYnGYjXXJb5ebn3NGeCY5zitj",
  "key34": "2xHDFWN3ZfGeALJjLhbCuTz5f7bBFcouiWEN8RoPhDHNc3nkiMLVavam4mAWCWzThHppU8dhL9GDfcLhktv1KmKK",
  "key35": "2wLtZkk5rHxJo1F9ZzWh19fWptzE9MGx822DQcTkwmxNvDhvWP1gYCifa69zYxYXMwwrLbiByL8AXWogrWa3Ar9Z",
  "key36": "2vsypNcNJCNFNCbT73zWJzqdmxAVVQx8b9xNTBSuYoafR6SjJPJZpdr8uub8J6Ji7wMTfw7gX5xW4mJHPGHUk8cD",
  "key37": "2wP3rL3B2gvVZUKpAjWE8iAVfD8HgZhYRs322UKsz7ogMgo2YW4HF81NNKreACM22eJktQp4ae7ZX9UAvzZmB16X",
  "key38": "5N9uBnMQfcBitCVNRHdGJUukkZX5Vj5SQ2hx7rNrkjkAwaZ7g6HwsRseb39JvYd7VZ1fiYhSLxcF6XdMQ5FURJTf",
  "key39": "4Ys25mBGLpwu42uab1hkwGDHAhjWmZP8xsKYgzfL3j4AbMsJCAWPn6oKHhwTKktPp1v1XFhxbyHCiRShKrZGVpmy",
  "key40": "NtPJXx7bBHAd5k2Xrrioi5U4DTE2neksVG9UkLHMZvHLjzp3da1iUcTgpofTdbxN7FSK2h4HLMibW5GRkemSuWD",
  "key41": "2CfmcCPt4wy1mq6i5Ezis8sXzxqNpr66icc6opqMVVzYXX2pTkSRbcHb2cCynULHJbBZV6ieBcWc7768GaMmPeHL",
  "key42": "5WchQ8UzxwSJokuNtVjvS7UsUXnmocWnoB2xcXSBQaTXHyTgxHiRbxm7s23ggKWN3KAoo3myXRJ5GWPVU8JKmcQB",
  "key43": "3wB5hXqbgKR278sQvxoudFd6grH3XzFtoPRAZYqnaAPehHhS2RX9iDaGnUetDFQLhFkzZ2ovcLJNT7c8qApmi3Es",
  "key44": "21WWaqhjNMVn6uRb41JPBcSx4sf7w28Dq7NZPv5kSBmc3HbzyVTXZbu5PfZnTWUDnrHKv7u8oFjeJnuKZqyTRFBu",
  "key45": "76krtSQ6s8AwAJAytYx5XNcq6hVv11Ta4WYY96SE315BAzMw6YgwD9H98tGXD4iH2zgH7qT4JAPBJVMYBDS87LC",
  "key46": "44ubmgmxuVi8zsXJq8jK34nbinXfT4NqiQ6hzLz7YiFfLTRu588V7wLxA5buxSwLnMZPBgmhDNHHJgeqciJgXzS1",
  "key47": "2uVSrhwwFFyUybB1uKE7sk73JYaLUBpieWDJmdWB3StvGKUKQ6TbsMxkM46GgRZh6TTsvw7heEx6Jp68QDFTPbo",
  "key48": "67co9SnPyTzgc6MrKPjqisApmKbVnkvcrGTQVMbjhiuxcfkkKe6PDZjBrfUivfCf9dxqu2PBhS1q6VuWhTaabqhm"
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
