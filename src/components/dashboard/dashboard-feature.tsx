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
    "2CxmzkM5Jkxawom22tXFpxEu5CL8SiSWGLDqJPKkBHQ67YdpAhcFduAaCu7VAq3k81c2AdTvkiQh9RQCM8Uh9Lht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzUnEobGvPVwFcAMtJpYBFSF8y2Pb7enVduYnzkz8MY9Kkx9JWC5Cuwi2c5RmvSwGvTozt35Dhjrmxvftk24Maf",
  "key1": "3LdzHofHUPfzWz74Zw8ccZWLkCztktBVAux6SuAJmFmqpJCCgQabJppqr7ZVSBg4ZWvLGN5c2P7TaHmHNDP7J2T3",
  "key2": "nNACdskHAX8E5FSMzTMsX953taKMB26469xBjimSanFncLYWafWDUBbMMFBE86kY3gdeM3QADLspuBmCACfpYXt",
  "key3": "4t15bGFAP91vUB4UPoCLgA1K26mv7WPNHB9n2uANqqoZgjkgbyvYYoxTiXXMsL8daTMCdKEokrV54MsNW5a2gPTV",
  "key4": "5dnkBmYwMu6DXeQv8ZVMEZS7qMpWEcABR5GmQX1PSDzT6wLbADJY6ZAYe3aXHTofG4gT6tY4N4VFTdxqCoJBepvY",
  "key5": "2GpPJ67myJUWad6RB1VhpYxVe99nKKRoGd7tiTYV42sAKFPzqTMEE7uHndSWnaQrm4gV4bw9S1BJo5aGU9oafzbn",
  "key6": "5VTDu6sQ7sqg3GNSeRkpVQFEQFfN15y5wQw6fmL2a2CL4VCqd3drn9gSp4VgoH22Lqm9y4VDi4U6DQB3vQBcBSMh",
  "key7": "2Xu9KpSVaRbBiCrcGeojLA94bF3kk2Wm1vvr3fMQ4N9RzzCzZKaetBUo1hr8f6hPC1k8Ktz6CJbi2zrzSD1CkEjx",
  "key8": "duaSEcxtWoKkv2qSEox5gKVK6Hgoegx4uVSexVDUDnfDEcRVqMMQ9ynv8tQECWaMECsGhVNqD7Wvm2usApQkYmW",
  "key9": "2JQ1QDVP9sUkqKZtizJxW9vGU4qigpPbbTCWMPmHXSCFAp4TEazQAhESToVvRBehtNUY8nhtvRshhsc1Sohibj91",
  "key10": "2D66rnDdzDX55rk6pAQZom91ghfSW7mtxyMHvb1G4YvBPCzSEPJKU8eZn71gUnVvSEirYyxaTkKEiSjtMmCQe7V4",
  "key11": "4BAoywAvL3hrY18Dy1cAnbBRaUEG4KKqQQs5M6ngrqUFxYTnQRFzLgVgjAscMu9vDvgmEw6ERhp3JoqXj2LgBsXR",
  "key12": "4jq5G2WPsknJ1p1GWVD8DSPUSm8ScieKans1uKhAwkaFpys9VZp2TLHdjsX4JYsPLuGeaXo1ZgJqUx9C5eUy6c8P",
  "key13": "5D5BDcZpp6tjLq7b1Btqc7T9ikmmkJZBmFBBQei8XTfErHMUZwVuoKg2YVq14a5VLLm8n33mUamo5mNGv5eSiuGz",
  "key14": "3K6YNcGLWRnnG16JB34kE5ADq3V4VFwXTAzBUWwWYU161e5EEcZSKMz4t8ZxwUWWyaqHLD4j5p59FkYWpKsxsprc",
  "key15": "2pBvHYBXvAFHHYVAWpbXtrHdbXaZvTCy1htp58se89ufd88Zs7igqDKmzwzNpHuL9ZAzXJQPcV5WNHcfnL5kF9p2",
  "key16": "2QrK3yfE8k67QeKfQTJJLCRA2c6T8NMekxWuZLTLJiQytN5k2hajBqgvUXZgR7iLqYn2ySJGhybv5wyfWwkSx9Lr",
  "key17": "33owBsRpGB4c6h51yXgy3cxjjvbpL6t66wmquk1VYAzP2enjhC7NfBg7zkbLGRJjEudNdAzWEowwuDFCJmhTidjK",
  "key18": "34pvXB8qeLiYXh29muTD9sSXRxQybiUUQJVd6xvosXBJ3U1rtoSUWn7QfhMep1VM4n8k6KJrugsgowyyERYTAuBz",
  "key19": "2nxK9EKdRyVLWv2pvXJus5VFH47jf5Yd7hGzbwnt4nXHxKkbn4LtCF7pX9GchCnUJaVVCKCFMUrZmSVkAUDLP36n",
  "key20": "4xZpUwy9wa6fyqRV4uJ7Tb6VKzjNut8p77uz82ussDNWfA1nvNmiCfgB4NW5gGkuj2TGJvTnkXaPa7uE2BaWdjen",
  "key21": "gsnqWe9kBFj5E2PmUj1nu67yjjuSZKJug1bmNT2NoQX8ejJw7nDQD6XPRgM4q5XZsgPxeHhHZFfJfy4jcfp7Fkm",
  "key22": "3b5dXghLHBo3MgBgE8G8oJXos9ELehyHuWxSBBg6KxN6GS7iw1hiUabpm25ncbkZXwvgVsCHtBAMjncvgkh7iXot",
  "key23": "32VJiCnLDk89zG1L15yXqHi55CAynHDB8cjCFgP4vsZAhTcZQF112YwMqLESnT8Nw6rBsbAAdfA7E1Hshnbioy1L",
  "key24": "3TTpDscfpHkLmG1EBerS74qV18mc5ZrMWtfXDnnRrDP8QeN2JNYPkY9NoiKUxB3apxLwyLwVqYTtas8Y4nh223JP",
  "key25": "NzxXjzL52ZkiAngADjUtcY3hCAzcwAsgoTKvaHxRpb1UpgqTa6Nhc8AazXPyMrEn1RU81oEbquTsBXT9rpArbNQ",
  "key26": "dztv4dsyrPyfiJsFeGHcuowEKjHP9MFTctP2k3suTD4shG1F8Wi49FoXuCSPQU9GRiwvV4XWS8KxXnLdKvzTnLt",
  "key27": "3DTN3cEmeu3RpXgQg6rrUkwdYFogMg2FfRL4N43cK3KbHVgatUSu1APFADdqLcbvgr2tFsqqxaicwBHVooj3hdtp",
  "key28": "3S4iQJxUosKBPC4cbpLrJTL1himdx8mZyTP5KvG4fbeiVb5vQPXdHpbfCMLrwK8kcehfgVuFYP1hGR6NSVWFyXHj",
  "key29": "22vidERQLGDVtAoHFnAFwecVvDW7hBcACrAoWAAtVuDPGtbfhSAvHThudwucjCx8rLEVLFmZTHsWkFCd7CLZbrA8",
  "key30": "3afEMjhhxwznXCcyR639snL7MczbcMSKmp9efsU5zU8JecTeVrFGzUAXmCmPHEfsmqmC5trFdWKgxLadJ685nGzS",
  "key31": "eSGBPWMQEBWsgrrraWTxu9YqiwMebGw8u9gPbcwBAEEVf82cVGXHCq5D6Z4XqQPeqiLLM9c6eDShNqDnA9QDvLn",
  "key32": "4dy7ZCkCWc1sYNXzmFHjZCPuc3h1z9RX2uNyqEAUmxLfPXT8G5b3MKsdxQPqCpQtHahTfUKhwsKvn26uC1CFxK9B",
  "key33": "2Vo8YLMje63DiUAmUSGua9xCCYJdqoDfU21sRwjpx3uzvVbNaCnmNYfWJgdnU9msQkCAEA24PQJxGBEBfeAoqxkj",
  "key34": "2Dw3SRraESoD3wzjk8w9k46fXJE4YW3mhz1rQ749zD94b833arcozWTAaX7RWimVhUZhX4BSgcFuUnTzBBJW3gHB",
  "key35": "2TcNvucTiqf4ub8ZBXhRaVkYUakTnRJGxLLyPbyxY4iiLYBK36xQm5uMLVQ8Pazc6zTatQBMpeL4di2h63efQBMk",
  "key36": "yzHahqGRwAP2PyYBV4UV2vzM3zeBZfgujvAr4VxTe5JdVBMNJaZA4pVZovLaBQ4MnV847Rb1BPAtVMEo8BQDJ39",
  "key37": "Bo4fAP4129bWVfsLioFid9Hzm8njtd8bVPATVqUfEovTGuaxVJTFw2qTWzjqx4oR6JdzdN9voaHNpNyNoxUrGFS",
  "key38": "43aMHGksNdSoV1jBczk3ik33eZc9AMpyFi91m9ba9pNX7cfmLd2zFoCJzP8YXbqSLh8hmRvbFQXqgDFeg5U4MKeK",
  "key39": "2cigMd7yEJ7f1PmbT4NP3JQJJqx7TuTpvnJwdpNdEdUh7yUzWn18a4EGDvafcFkrK5V4LH6jM1xT6oVbS95NjHkH",
  "key40": "PPycFfg97XXWi42VS8VEyAKafKVsGvJBkWHGsmpU7agnwMDC4sC6ajZr3FR2ryDpR4G2WEnfVtBEdBH1WW9JHnH"
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
