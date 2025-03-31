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
    "4HELFnu2feAE8Wmu3erww9b6kQeDXFbMAA4C6F6RNR1CY4D3wuzQLWrFdCXRAYMD8L6QKeJ52mKbBi7JWNnjhshv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Ya24yZU9HfHoaWBpJ2FhMpZyb25aLviwJ6drYJ1zgK8g9GfXu1vC2233ik8HY8K12hTpanXL1HyWPqSd3gaFQm",
  "key1": "4mc938ThiZjfdfMjJmdmC3wbnU9fLdDP4eK5C59JDK7LcoFTNpX4poCMgKsqpkU4XPybyTAPXg46sBzN5Z76B3zv",
  "key2": "5fNJ2CFHceZVi9gWtLepRrZHLQps5886hdNhmGXK2kKGhh3YVqd2apspXRZDiuqJtkXf3ds64BfSsXA7HGF1zgQm",
  "key3": "dZidsKPXHtWwuz7CqG3NZPF9woaPLy7tzb4dr3iVU7Bg3Vw1UMGdTroQzoUFWSyMY2w8TehkfZzXAiiZvKchdYx",
  "key4": "49s5htRccKqVQY8xw6jaWMgmqTbkVVAUKUybtzftkiARLhrniYjeNmcPveKFHHpomubdNErmGiwqD9yViCCWtCWX",
  "key5": "4QZ1Jb5qox4BaWtaEn8wVNufR8McbJoUuywEp7wBVNFHdFUmcpCCxCYom4QdfpTNtjhcPQCy22q8W4H4U5RekFg1",
  "key6": "3cYZjU98NeYWvnfizboAS8yXSMqN8cPik5yfccFgEc7nc6xqzxRkqoVGbxZPwtAx37QCRZ2kgTruSzaqyrbjY7LK",
  "key7": "2AwhgMhh4Mt7Vx6my7WXCqt7UaTf298kL13JGLJR7oxVt6B7VP8MPuNw9tp5jtDiJSicPQFUnUhM8cMiW3p8Fjc7",
  "key8": "3Bdb3DMWK5vrAidng1fCstiV5VRGdKgW81sjpd4gUfoj5CvZ7kCvY3eZ7jveKjec5Q5qc1KZEcKMr1RQtrhnWo5H",
  "key9": "48cTZsVDwXm8DDsGj9rgFprPLm91u8mTiVYwcq9D4h7pkgNyuUiBwWKuNnKWvb4xWVov5F4gN1CrkjKzDNAvpsaU",
  "key10": "4y3u8vANjdw4YqpMHXmBawvvX2xMzGRQx1UJuWxo2L2yhCmp3qbcqJDfgruG3ZfUoJVD7hFTBYfWqzYDbfhveZch",
  "key11": "3p72Mf4KNn1kXtceX5Yo8AiLvAEYdWWXtFPCegFfYCLB9zTwzypW7G5fexc3FMzYA1XmMEoPuhxSRpZkSiqfrkg6",
  "key12": "5MQiBftwhYMMQ36zej484CBK3R4zScrbKYHgqRPSmoCPZqpYC9prhwRdhLMsuYPStDczGMjVYwG7k1fFmjHeXMby",
  "key13": "M9JqUjGPFaWykRyQGuTAJZ8hvb937S8XnNr6YGrZyEkqCxKXd9hhNNB7oVptuagTjWRuRTxnSBuW984x7Hm5ZUg",
  "key14": "4fjuAnLzu5DetegoEkyYBBsdpcFx9hWgL66UHjkYVooaq2Tuwmd5BazJWWesJNemXbXJk3whHBWnaq5NbEuswa3U",
  "key15": "5ox287n4td5GgkEPv7DQJkPc2c49gmEWxWVtU1QDRhAurwGR7gnfYxf4ZQ9QqwzhbYHXdfecq8JMSEc9eCJbGxTz",
  "key16": "2fXB5jk8K5QEAXejamK3gCnCoDrcn4Nd24Y94jHBUXcdo9odT2QeUXzCmWBScxT3jXZ6Rg8BsL7xzoeM8mqVHGQY",
  "key17": "4RVUvm1pN7Xnr4Q8YfQ9Si5oRfXQAkrEHrR4tbg1h2sYcGFyfCbAb2VL2AMoBCL87szqoXXK9hccqiTeqrWJK58r",
  "key18": "3jPCEnTm1mQL6pwREpQV1Edu6ZKebhCGyntUti4YoZrY3cf9b2G5rRMYbz5hhwxjifvTEpjXRg9UQdFUKAvfQ6bt",
  "key19": "2gcsF8o4fdfv19oNQKoWEh8xK5daDr3xGVd9XvkgNtJTS22wnA4pF3VKVjXzjzZbSKf4XdRzWGQ3e3dAiTNKeXVB",
  "key20": "4fNbL1dy3QqJrCyXi4gthBxt1MQmGwyvd5vh7nZNk9K5A4mpsNGCBiJxRMVxM5nSePTbKUFWLJWwcWd39PnaNThm",
  "key21": "3UTd79FQzSsoq6MKkra8B9fMRJtr9BdSdQqrmXGLJrVNH7VGwJk9KsFMtGKkgGpCSfFhaNnyD7JLbMq21rfKPPJi",
  "key22": "2tnF891Wr3Xt9hQUvZ686sukZK8q3UPeprWYCsvW8XxbQWS5av2VsDH4FaSmwpqN41AwfevrJ2gM82uTUJRUAcRX",
  "key23": "2BvUExb8UAWoQi5j3EPVsZXK6ftnasKDbPCwFnMqr451xrniLLu6KkoBHg3hhXxr1Q2FgMaE52SVKPmbLknpaF5S",
  "key24": "4mF2DYMzthFCwM2YhpqFfvcEkJ5thiPCWUxAE47YMewVHYsHwdy984dxNaivAd4T8jALBXay853YYAz3MyL1emhu",
  "key25": "3Ca3eAe7ULWq3YShFiMF1z4vKDjdzmC5cNs9A6EnihxvAFT8buUuMYZxPZyAuvMb7J4XzbK5TJWKEdWGWinqJT5p",
  "key26": "2vL1Vma11n3vVh8jKpPWPMzaxdWVFxY6tmitvgdMmBhvjN1XR3yuVyV9xZX7T2w8Fe9oYGhtjAbRKhKzfBiaPrfq",
  "key27": "5rhGU42aDjWkPm3nZ2bRjcUt13uhWKvKcSaHfmxRXenzFHmDiqoyf8GZUPWEiWhEWQw8E1P2FyRs1QYAtoiPqYu1",
  "key28": "46XXAjyyNmCDUunrbLJH2yF71F3AoYTm3HaEJanAU1rAHNnH9vjUi8WET9bUU1vB8WQweJetcP9qfZLTnjj2FLfR",
  "key29": "2LC8fU3HPdsNWZey18JUCmFt6xUtv95JcV9qXR1Gips9URwxBLktn4vjAg6WFQfPJYTss6dgh4tggRCFbD89GbbE",
  "key30": "291NYy1uj4n5pKmh3pbD2KTFvWgpEDUAkvsqQqhbyzFTJfoEbctejEXAkdrPTzxj7cxmLXnXdtqEVQpEgz3TJ11N",
  "key31": "opi1QzwtRDNCmcSLtMv6zfzS1bSgUG2mkMRfuZ1PAGm1sGZNh5urAZ7XajifGeRUKGBwqBbVbWSPvZC5sHFVqci"
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
