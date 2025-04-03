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
    "yozKQiiDpPdhvCB78ksufgiA5tXHz1hcyTTjcvEyPGMrj2x2adsbjDuTFgQMjNy54t9QSBYK2eLiVz5d6Q4Hgox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFo84xRR3HyPZ7tYiJTPzqMAh5NvsG6z7cv5W51oG8Hg21RXkZF9Np2c3KgcwMSurHMawYdS637HNM8HHK7A3J5",
  "key1": "4p75Kv8XggBXRTaXZ1rrG5ZbB4ss7XDgLLhw6AQMPjBDmTVtCCJzCW7EasnLAGg21vPn1K9qrWUzJTEw5haVuQWq",
  "key2": "3ncDC6p6FL1aNRzAA9kG5RSS8SbZhuhAWL4fsV49GaUkKefY5ebyDWgw1j31pkAnxkdL88gme3kaV5vamGpxZqGj",
  "key3": "2bz32NtXhGxhWphPaNEmVFaW1YH324k36b91of2Jck4TPxKJLhGBVoHaRKLAhTvsgSa3Xn6kovhpQqRK8ENvCSkt",
  "key4": "2E9aW2AH4FbsupJVE57SaRmyqXNw96hJpPvDEjjNPxS4j69muQuviKVdCsVMsYTa3PsYDP3oE8MP97GaHcCgcTgW",
  "key5": "4kUn8kVS72ij8nff71N2oX179oAZQ7uW5DbQ7QUmsqngEGp81JAJAqSSptcUcTdz3tV27RvAHfN8VrcH2pafU51n",
  "key6": "3HkUGf3LnMnDA7UDzAz9iMe4LWjpN2d22JDcqNTAwjfCdL39rNigU9V2MEXbAEZZuhZS4AaTAGjnUwLYev9fcQ7n",
  "key7": "3WHzY2PFNUvNdwjDGvV6nScdFWHuujDeC6sZmQWk7GwX4MmNwk6kLcTfyxVgP24vtMaVNafXxQoCCe9FTdkPytnC",
  "key8": "2KDNmWaoSsSShxcw6Xmv3u4vykHTmjWKASFDxFMYQJexwsKas2YegxYNDGFhSMF4QrguMmTrvkCiQMxkytDumEE5",
  "key9": "4QatbPxiescA37xwJw4MEYQcdvSPGM8ts7EWHnu66SkZMZhvL8CtgiUAERrHkzLF2PqQs2dM9Y6oFj1BuKL4E3zB",
  "key10": "4LSq5GSektQqLXhtexoCqEzCVDC6eTKQSwcvaA2DseYqyQsTRWesPZohS4VBRPoKTQRcEsa8fKyaqud7wQuQ519G",
  "key11": "46Y6AQuJ1tXrKBQstFe1Lr9BmjLhAtaQZ8gxQsj5koqA16fNwXwPfyRCYjDNJiR5Pnyx3g1x6QdMmPQhRV6fhu4t",
  "key12": "5GfzE3qe4jQZoF7rnd5S9wVeUJxfuVXJD9neQHZKX9QphW6TbL4RDi2msFqe8uoMwFWPrVgVbBg4y5UZNgNWwfNL",
  "key13": "eFcbweEuh3dKofotPevsN1s9Ba2BVAW5Mrerjf55wzwJDSUp2RNymeKRpr7fBVjtgFCz8ZutGTJQszFPqBV7o5U",
  "key14": "2EqRjDXFxxTmdPRusmynaV9C5vsAP826S5A1cJogTzM4H57ZjeQsTNoLnEaisMgqA9xZe2ruUdg2SdNBcQWixt5w",
  "key15": "5rgCsgybx58hmzBjHHGth24FuJ5pXc7VoHFKXxcj7FbGqKY3qS42WBEsLC3ZgfLMhdsMm8EjRxHs3htVd2hpai3a",
  "key16": "2eedsVdWZB3rmAQsEy5kibVL7zjKkB2jyAXSsPWwC6Knk5PrHEUvwxj8vzU9CAEXq7LtXm2Zg4MowNx2KowJNcqN",
  "key17": "y9kPLdkPT1fKRjmFQfU7owPxRzbQ81gDE2vkFQcDnZm6YQUfjXKYB4GnwKF5Lj1zjVb45VfwQqgF8XRVJ2hj7u2",
  "key18": "2t4UhJoUreGnh8yTBZdhJPE3CNWKKXb8kVSzQW5bPYrzqNFpJa2xVf15CEEmbQVs53k4AHvf6EdkLnbX55c5BL9w",
  "key19": "5vLBcePdLFr4n2PFKqMXFeETTSPF8saGbLVLoWMSdfCDx1TYJaXbcAcpUq8ELqdgNDvAETFgfmtDtxdguKuuHcS5",
  "key20": "3e8gsfcNn6PQZNYa71x6wPPNqbhCEmVg8NMvcv8gBem5v8Pd6q4MtdMPhcPhsxEHSTx2KMne2X447oEqkxJE5QqC",
  "key21": "2MV5bqGE6FpHMQvhcwydaQATrWyCwtZbxeJpb6w6Gw62HMKhSm6y3HHhABjT4EP2KpPnUfSfTBsndUcYH72Nq1CP",
  "key22": "4SpizgNKMSgabeuVhxabSbmctZzNqVxGJwSgitwMdpK4YRYoXto2odHWegMJMt7T2ZsdJYhBi6BcPL1vDT3prVra",
  "key23": "2KxkWbVCefURq4Y2NDscnH8NuKNeUA4FCFCTtfLKx7ZaN9ctQhhHCWjoErn6gm4csgSgAoMoYd7k4RZMp71UnFPH",
  "key24": "3788pReSVMeBDnL34eep3qJ4288xQ7nsXw3VWDxk5Ux4YKU5U7estj82B4ubygYBRGuAEfk5Wv2vwyJ8feszX6Ro",
  "key25": "5HN8nENyQY92h9By7Kt3jqJsVEoedFuusS7tH2r7f9dC4S53tSwNrKHvLdxUZnQbneKuf2Qa4mXn8SBpGCKwtxQG",
  "key26": "4yYK9ZJHkBVSuk7Rxm2LMuDV4Fh4vCx4GuX2fXG2boj5VmHiDi3J5LtUXR6DykPATuHdoaeYiifYfXmXhv6StGVW",
  "key27": "6416MJtYdqTKJFSozUPZRmNw3PLXJJP7o3EBRDBJeqAw3PRu65XjeSBgULE6GAWk9uXf2DfTfygZ1854gnfBGRsg",
  "key28": "5QZmN1EyCst7Xbp1WH3JiKHnU89iJKCttZV2SLPE3796iyJTpDVAiNBintUGcMx2kD82nTDHVJuMBb7KEuhAFcEC",
  "key29": "5MmgJKzN124bBxF1EC3yCv1GReYBDUvqHr14PFHXdGJFcrcDHyJQfkhWKpn5WeXZFDogJu5MmwhPE2iyjk4ezhFc",
  "key30": "3UzbdYQv1LxnxWJx2DqdCyuM1ie1aaeQdUPEFF2DNWkEy76esWGZSU1WTw9L9nnG1vyK9nLAWiKbygDX4t33LCR1",
  "key31": "3LjzfoUvkLBngq9ExP6fikYy3GAoS4tDSFKKJA51tAKvADPK4KcokdSnsez1AgRYMKBeA98h5Q4mNBqhbqK8bxDw",
  "key32": "2kjwb638grdLu4p4pYFgr32sHCLL3Edt58wd3sEPFqY1woMQLuLgLEJeHiVPCaPEuBoWZXiYCeon8K8HjBixiTsH",
  "key33": "4uzqPbkL3GxGQniwQxWwDyhJ6NEvkJ6HaSjHQ4QLXQ9vNvuQLSedBPat8N5mozDt5TziCSEwRpPCcjwpqQZugf8t",
  "key34": "3dvKEEjrP5x6gGF4jke2EbDMWTc9pP7Bq6cgZxH7rSp8cUv5nRGmr2PbtXTtZd4wV9Ffd4jd1RTnPEDry7wDR9fY",
  "key35": "4gwvSi8e7N47Qht7bbZgkbmmxz12ziZUCjWRfQYxvcqfbYD2Q8AATtKLsHunQzPwMsabmBXTwgzMKjVaHDDXsWhG",
  "key36": "3zWcfNRaJGJ7obEBJHUynLpEfJATdbuMEPfpV3mwRA5hGVhqWYAUsCesQX6ecoDPwnGv9d59S8w2BQuSkCsVTFK4",
  "key37": "5YLzNfGcMw3eaJ6o44AwxZC7bwwUezxkz515bPmAKfrbVfxv3qfNwA2447REuwyt93qxkAAayaHWxtaJKrHrYznj",
  "key38": "ZzkLTEXT6bR9ZV24GvgNM2RMacaYUCUTUtfWaGoCiLUnHHUMsnnETF6daCHGRZjS5hZPqqB5Bv8h6RydMDzqsMf",
  "key39": "5hKtzBx5eZ6MpeBTxaQdXpt5SyWJQe57RwWu3BAdEF4sFH77GRi6xyzreQEvXb2e7hjCE66jdavvFyzEATiDceWd",
  "key40": "33kKCMqVAstSj1HVuRphWpyGRBQS3emy4E3TYNpdc6VFZarcnUmKrMrtVjXPzjx2eNH7DEvr7LfoSRYvmfFPTT98",
  "key41": "42bGWJjJfeweN9NQjgxCPYp9oZPHBuMe3bhUbeDWduLEuFBHSjeTmvX2TbHDvdeoUaKKruV5D9XzyVaHygUyeeT2",
  "key42": "2ZLfERKzsYR9AbuhyCKqVXdHw6Q43jebkE13PcQANs2xvW3c1JEf19T9wc6fqmYHbuev2rkmi1hXt3ph1KBVAkbH",
  "key43": "4vXgX6WBMS9uu1VfLzf4QvwcTG5Pzh8zrdzKemPCK4SpY2fYZS7j8R3Tp9Utmw1r8ancfKe1ZnVKm2BQAUVygdRa",
  "key44": "3SMsSseWZz7gJNLvXbA1e4Lf3XW9ScgNDiVHHzRDQhBc5cjUHVt2DHfCn951eTF7Q3dpsXAEaKsKRhdrAaXB5gjh",
  "key45": "NwHV9M3xpikiPyeNYqmtioF2bgEnLfosfuRxqPkghYqsU9uteKG3tQsFnzTkUsXo6LKX2xWWfGq6KgXz5AXLM3c",
  "key46": "64pYM5oYEiVj5kfEXc1q3djP4xhYjfVtBQKvDGZ5bCvz9Df8W4aaQ1NCffE6cWGoF61CW4GhPagQJQmk7gqqd4m9",
  "key47": "3NsZM77ZZbMzGhrc2XQAqm7gqMmgsehGdWuwpwV85rKR1gKp66rdaG7bAPD5ak88wcNZJXKKvic8K2Xvp2dKjmKF"
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
