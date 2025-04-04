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
    "2ZeL7ajjbC46QhnWZoRy7tqZz9mKyPjaBQfCvTtvA22dSsyQGEUUMytR6hhFUkTDpF1xCMRT4WFb9fKjkHxjXPcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyTsyKV8qv6ZFU9ohKvxCp8xoFmTmJ6EZitg9sbiNA2xwmo73ppqVksKQY6cJXwVhhQHruvHfmXs45JrccwpaaD",
  "key1": "4Hzjdheup7pVZU8BBhB3Lg4NPvrtp42LajfEs2p17K6tu2VgJR2kJx33ZWZHx1dXVDLru1CEED1bQnxYgri5oE4G",
  "key2": "4jzAB1MgUvEKSANKbaA2GgEzGKdb9MK7KuTYSidJH6LykYqE7cryBeVxKZcPdCqQqQkCCBdxZCTq1tRLaySxPh78",
  "key3": "3kFXF5ksNi83iC8Rk8eyFD2VFR8JGAFVsUYL9vroWFckqNW9tb978hDNmSo6S7bzzsUSUSodDing3DEgvQLwi3qb",
  "key4": "4zeELUoq12VkBeMpB19aVRQA7H51XtSAUPxeugPHVf9MvuQwBrbU5Wy4FqTnXshYiezaD5UAJPXXzqP2EQfwLRrm",
  "key5": "3wJR3GmmVCjcWbmbPRyyWgjf785ALwKEuxefVBJS9xmB2qXtFLmrHDFAcEKqNbP9dmxNrTbm955qVPjjNbXKtxCX",
  "key6": "28v4MiwW6uKAgftoc9Po3etEdr46nVjUzjwig2526gjffCn4McEPVjadVZC3AN1msSZyLasPVfqFD6JVMuEZStG5",
  "key7": "3ubpwjePM1nFuCfjf17krmJV1E37s8npbn7aRLqRmMsAtwAB6iYq35w9XNyKfqLBSDUMFmSbZNbnk9KQJsCmu3og",
  "key8": "4cbofYW6XAiNH7SyqJc4KVThCHEi7aJagVPSHZpA9DmYRe3mRpHjFUzkh7iA3MMfQtgxD41u49QbehgnMT1HerYc",
  "key9": "4VNKbHx8PCyQ3WJoXbXWLu13cqgqoLgUKH8TamYuce9L25bPSACVb8PMFBPDUTBHXKmjbU28o4Syar9tMaynLK8s",
  "key10": "4Zs2D24bENr4Xe9gJMb6YF4apxMXTz2EpfNqaegxir27YK7KByAkQde2pHBzgZpiFcDn66K1qJBmGdPpayE6yWxe",
  "key11": "5bWw1dS7Z2rw5RuRrCMx8whviDnn1Pk7Y8wdX2paEq4astonW6Ko2nUzkTrYhehmz1YcbYRtMmM5K5T6HfVD5mct",
  "key12": "3M75C959MwAGGDXcpUBbYFDsSk49CdP6Vafv4SGzthiiGMkKNSBDzRP6t68tzc8qLQAvuo53ETVyLiwXGBZApfjk",
  "key13": "41VdeZXi64NbkmxLoQopABhzFBPacJdwreHoRz9ZvZUWjpTf6BMyqLZ6Xn2xGRDZL23T895dgjaBcNizPNuE9Rrb",
  "key14": "2LbGZrtXZT2ZR8fprJpSXDXxp5n1mVJFVuBGzooCcJ1UxoYKfpTToZxSQms5xUtpTcj2UEWY4kiwtvkpwX5xfhhw",
  "key15": "5RUrMaUxQAYBDVESeLvBArCKEeM93MydSSW3nNHvbybHdzMSsxMNPzc1LW8RetFi1D2vZUR9Qmt44FstQAuDBGbF",
  "key16": "5ZNM9yM4A8GCowDmpBr5MHjG8tukUrybo6VyicAdKDNWEjXaw7bsuTPJTVkKysfXZeoAGvQctCdsWcnU5Ljq6yF1",
  "key17": "2tVCE9tEeGg9Ddn8wvhttr7LS7SQ55gvjxDamwYfq6X983yLRTozMK5vp2qKQMe96eZawTA5w6T7Knj5DxLSPBoM",
  "key18": "353B7urYGX8ACh1QcjfoSxvFb8CmqHN1qHLegiH4GJKBzDxKV1hoTweZqDzYR9NGojGf8ygHcUjiVUFTFcLUKYu7",
  "key19": "3t2XrSsdBAjAqcjsZW2wPaeT3Y6WwMnZriB4EvbRLJYd3Kz6Z1Qtc9UkpNvBkV29gHBVN9FzJosehKkoqW2jMAPg",
  "key20": "4PQJhCQKjS3ap6DnATujQfxw9EVbZUxTYfWzf7zVpbCRNpkPRAk3yby2bJknTVtvfWeDQqpCJ49P8Q7S2XxfkBgi",
  "key21": "3qEx4HCRBvn53ZC7AnR9RLdiRa4q2qrXCku5w88S3PThLFWmTsGchRsutyk9XxJWLBG1NDN2D3T53hjPwSroRpyG",
  "key22": "qpYUWgJEtzSK2i72ZcfQN4bGCRAU395aTPF965BcdBG5snawCt87HtEiRFF2E3gB8ZhLvzSTVXu7QVwzZrHWbRp",
  "key23": "2UVwGWL1Sg3VzDfc8JHLYy2y9BBhgiLT6TpGBB8H3vHRM553UtfAaFCw9BExFVmeBzo4nFiYBg4W5VoAZWAqVKBH",
  "key24": "5qQMtjuShaLA6SssxdZVAUzHzw7fnWRWzMW3xvSyQFef7FcnESTSu5onzzGShMShhw7PYQvSDxqsBDYxpCtZWMNJ",
  "key25": "GCUvFq3rAYkiesV8G71JcDcHBmhbWh2BBadEVFwWKyqsh8sMgkJeZJ7JvQscDeJQP21N8wisny1jDnz9BpMQVVB",
  "key26": "5krpooWRQRP1yh3yepVSqe4xrSjxCJmCsFmJVax5PfiJqmeGMWNcbfjB6cBQYrKXh8ZaxPUq9wt9fxMBikzpzAUo",
  "key27": "5dRXs536yJp6pf3X9piDJrDnAeWbMEpKWY8Q3VRhTPMRN4FFQ7KDGxDYNVEsgRjFxDGbwkkCMTq2iPXxDV2MeWBf",
  "key28": "GeDDiovW4CpY4smfN5mfMnrMzgPSdsH2Y9vL2GaSELsnY1LwZ1nYg5HHoKVHDzJbnpLM37u6dcj474XCj879o4x",
  "key29": "5xWqFzKZaQpdggVJdpP89Sb2PXJqnw3S3YTkfgDPP1KdkA2GDFwahzFqJMX87bGCxJ1r6WAo2V99yDea9g173Su1",
  "key30": "2rDLbWsA1PA3PdBHmLmtRT9z7kYRt5ba5ndwMny1tPgNrRYEKWn8mV3SztesJGz7jVPPTbSxcs83Z2nvXpoRE1wC",
  "key31": "58X8MauTodXBbtqA4dEQL83rRHhNmsX7tUR3XZWbG6TPHSSVYqKVwHV1uSM5D5SiDeEGSRZWnMv9Bd6fSNCfZosZ",
  "key32": "63Ji2DHatJACC3ESfkwk8Er39Sz2kgoniSKHqSwt9Yby81PvfjPjkAJJZkkL22cNHsVW61rY4HkYPL9YxBvcPZ8W",
  "key33": "23kLikeP2iuNbt2LwfaGD9rT6fNWHrQDeBJ9wrwUCU9cm3kLNoo7csyxparVKVtAZE7QQJpVV6MXznJ1RJ4JUbgt",
  "key34": "66GWpaYZ3bKgAEGYZezryUoYKnNFFmP6TCaVgXRA8UGBMqgLrSh8YuugmBNHxCqLoYp1kaHPthvDMShreyUAWxMx",
  "key35": "5vXtfM2g4pTtdeXD6yRPtTCpfGB3HUSeatKeV2cdtjyzKeGuKaxKZ9eczWXUQKWAf8pQx1YrR7z8s3ZAC6e9kb3v",
  "key36": "5MJf9CB82aL5ck4qEQ1Bg9kJWEmV8GodCsFEmN6naWXzwYnpUhypPCPMeo5UFU3ryDKvzRKGeVATZVyg5dZPRYhD",
  "key37": "jk8Yt1RLEq7sNA35t3xoBC35nqb7imFsfy7T9gJtB3rMrcaWs4vjiQoa4oMaMw7Skru9KTg3MWjxXwprHdWF166",
  "key38": "64XwCTn7pfLzNtHU7dBR5dLRmiUqnH8L8sMNU9iGHLQEJBaKPA9KkKZtP367aT7UQMcHmLwLKvR4eost11m3SeaY",
  "key39": "525h7vHbfMLsHRPAAocurkcuhhHNcPrHbGsb5vsrXJTuDnQsUcCXtNmhLmssoJWVHD3PASo8vViD5r6NiRUHzfMe",
  "key40": "3tAuXBjq17VGZsBgp2FVX81dQTyUYaBiPoK9ZyxLWrRFJjXGamVNujpbE1TKULgdLXHwuQHvnsVqS142wNhemFiv",
  "key41": "5gJAe7yBfbfn99ZU1LXJZD1j2aLaiCU3SZrZsXF7eGMCGtoqeT7xWzuboGLiugUopvpzBdjUkkncTqMYdEEVm4Hj",
  "key42": "2dGeUWuUE9ATGNhTfRXH8m52RVWQ9K2qw2nBtbzw1x5vSTb9SP8AwD9R95KiZFkiagu65FSHYdCRfQ4ekfHfFdAc",
  "key43": "51TbgVau5Avk2WQmREpMmU6zkYT9WzAf7RQ87Mydv6eQq3hpGeXQb7PpXESoTZnG1yLTTrgJCE1HnvEaBzxJuqy1",
  "key44": "jrxyCeqLH2g9fZ67BdXAmbZ45K7dAPL4aFhSV41HwqJKwfNbv3HMPzmxq1g9ATWUFWNwURSVQNLhhBeZoGJc3RD",
  "key45": "51tDXy7UngnJCKF7eBe8mjDuYF8JS6hYuUn5gJfBHfkjEf8aiiqLXEVocZP8JHwGQULDgdEgjiB3BWWXZ1oKDibL"
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
