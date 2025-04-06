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
    "4Acd6GWSMuttSEDpV2C3hNQhWfkSxkuHdbVUcyCwMRy927bac8E8fTmzhDfbDaRKWgRY5Z1V32Pji4v6h3gzR9Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RTeXwMjLa3wfkfxEPrBVBWwp51Vzd6NK8BqTwuMPHk6Mavq8L7shGQWZeGaCJkjP6ACprHNSZS4kcZqSCPC883",
  "key1": "3sQVJUW3Lqa2NqLu2ds45711NeWaV3MDTqbGTELQ5mpjZqVdPdeKdvZRSRpPcbBsXg1G8yA9unJToJwL1ecL2wKq",
  "key2": "4V1yMqTujwHzbQJ64Vw4jqFCguuVPBgZurHPXT1Vw5XDvZEzQJKGGd1StBv3EqCqvqHMVNxfYhrbQpaDSyA8enGk",
  "key3": "5q7sr7LtDPBDbab4K51NDW3cktaGaKqyuoSrYKGcdtfSAPVuJhsipPAUzCe1a2KqjyoGqFBQHPZEK8SdhESxLjUn",
  "key4": "3hhLU7kCQ2qvb9VPtQSQtUGeX8QqJLgTWwgPXPCT5kvEfyiXa8rrvSbzB3X3srezbs1jhFV4iai7nidTEoorChmX",
  "key5": "Gt4to6F1Zzm3bYG9X1vVvsbUV1Eg9q75J1PDtDAYFb6GD9Pna95Ydm9F8sB2wwC7KHF3cxbwXjtwxrYo8HVWGZk",
  "key6": "5kXNvHq1ixUtjBrJBvPNHejjupaDSJj5ieRpQUn8Gp19vfTF8nUSniAjxfTas3s3vCqCzq6BgQpRfzji38ybC2nQ",
  "key7": "mgZnhNZ1W5cRJzu9HBJd4DuRndVPR7EbL1ZpvSwMAd85BjqyJYJng1toKrEdqYmVcRjWhPhfuewGWhtABNHzCLv",
  "key8": "2ivTUyTnpt8KK68dwbUgopFsBe3fbbUEW8ob3DZWnTf8LHmzCmb7BQf6umMqphu7hZRgmjzs59EXCY7yV2cLwbyK",
  "key9": "4tcP19E55zCFixFG878KcFTjNYvWQQ1jSK1C3vC7yNqikyhtYcp1PnzcscdJwwTBR9VY681GZ5jnFLr5HbDHak2m",
  "key10": "5mbjR2BBmNbFaGRPLgU4SGNvnvFCgJNfoWdYgRnEKQYibg4vQWY5UTi1c3u4vvKS4osDHKcsPYB1xK885N4kZdyY",
  "key11": "3JbgHShWgNa2GT1hEoa1DLVgi6h1Kwk34dwZrnQDcAsqLpKNzw61jBLKFbRMWPNGrPL9cqmS6offeqapQ8jMDeSr",
  "key12": "Q1S164FZgFUvryYCtS5oGULVZPnF1HmJZ7Q1pNt2BNwBEEJRqmpxxucEXbFkMgiXmVY85Gdj89JgKAAzLDFhnxU",
  "key13": "CKmTP7KUSNBgxG2KLUPzLSamdqxeV5B6x9Xomvpfvd5Rueqi54M6WQtn5qagRVLTToxdzFPd5XGCQkPmRLqiBLd",
  "key14": "4t2uYGThnKzyhLY6aJxdC2RnmaayC6QvSsk4nDtZpmMw4sfVF2r9ahDAwkTX4MwcpBjXZV44MnMKaDn4cz3PWp7W",
  "key15": "42mqijtQGhqBeQtm5Qybzdi7ZR1tKgADNDfFWnSVv4msZkU8x6G7EY32C1QQ4msojmKKJgWRLEutF276X3R2Xiem",
  "key16": "2gBpABhw4QQKBLsuL82WwfYCD1xX7cJBtTJYBWhkN2jELRDnzeJgsUWqqVRCuzoJGs4ZZaz9TWdbkBLmeUbEEWsD",
  "key17": "yQeoK85hUykEvDVHLFQLxKtxtNfpdGbPPZVFgHecr3LU9WPiM2qigySTmTLiNi53j2pRGhD52S6TviEtz5LNKpz",
  "key18": "1NyxtmMEyAUJ2q4qpcrpbzdvif5MHhiqw7qsG68ZqkLJyWwUMAMW8ku1ZufzyorRRwk9NhGukkTpDGTkb5TiVci",
  "key19": "2pKRGS22mN9R6sqFFJR77Zew2L7ys7skj4hUj4hBCKZUiyfeWCCQ1CMvju1mUdVNn5DYAn2CLCf6MCZUzjraXUBS",
  "key20": "4QG5BmsjcXNNmGhapEAiivf1H9o9P44m9PR9ajCQZTJ75mq5TfbKsyaSDPSqt8zEbycfCDzFasTn6WXWArfqU4Sy",
  "key21": "4UndeAYdgrZaVdqBcFwwYSNu2aWg5SRovkTstCXcS4gf1qvpMCTFMQZ4p9nHkv5UyjmvbJc91y2tgX7ATKFSYp22",
  "key22": "5nbv6ZXaaSjez5fKvN8kmwJa3T6wBoxm8bLbdAa4DsPvGDDACj5vLJk3gqu3zdi32RByUPqSbXvttvsmoVWVoPKB",
  "key23": "2vYavtwann3afmxm51KYA3yqCXm82J57M4995Pgd1tRFQ1tt6P9E8wXhcmHd35H7nPxtsWekuf4PZXWSWre1WRMR",
  "key24": "2UTfEnNmKUpxKGAfLqehyA1JLqxBve7TKStnjcDPxpg5fyL277MGvNvBc815uDwyeq7kpTLWTAGwZTaEL76dF5dV",
  "key25": "4JAWmYSzqK85yoMTKukKV86UiT7UabUnLL19p1seC7p3dHaBXMMd96r8UuNWHeV6t8T8mu3nEB7K7SSWszAwD3Cr",
  "key26": "zMxBC4uyMWbXsQ3cUYurLA7aQZaifRHjYcrRnPgZLbtxdwMwVeAEdbcqfdbPxTR9XCeFVDU7a9dtDpmQY9N8SC7",
  "key27": "4HuJxxXPMMrGfpWGzrxxhsLcCpzjbGaYJqCdTPjJwfzsnHMm4wfNTewNpJv6HyngB8srEMuA2oysxRZJcmVe3uHs",
  "key28": "4i8PTZhw1nuoWNts3CggPgzjRdDsi2od3ZQwe7ieavWktqnV7h3Cigj5vSrLJ9QyS9dqnVbykYNHjHJFzhH4651A",
  "key29": "sNYjuvo5TLhCdnBeqGT7PumpSGBEhqvjHDeMv7BRqwQhLvvipdw8mhiWmG8BVijPwYRR2LF7h3WkfjeM3fNGeNi",
  "key30": "2EcNFXjMhm2R3X1SRNxFaNadX37AqwpBoboviSeQhE9UuoE6TgQxDD1dxSQXAeqLh2FYhHzSsowvQGY3UtkBe5EP",
  "key31": "66zyD5fk3Ms39fmH7RwZj62HuMK2c4N3CxxBAYS4dAS5WpZYKMFFLkR4yJSCHmKwGoZ6kxuHSmVktyuv7qTLf1g9",
  "key32": "neiFU8oceTqRdiD8KtTAv2VhQp1ZeGNDUiCFkRqrArpgFuUxAEymGHDX7M1uRUNNkZnaFb8iYsNoeWsXU4GVis7",
  "key33": "5d6iTxq18AUZcoruSP33EH1S74dvJYk1DdXSk2JVNAdWYVg7V1j7n4Xoxa49QgfHLhpPQAwMbv9AHLKor6yZZwjA",
  "key34": "5MsX3f6JmZMnwkY5oW33HMyGGNzX8V9KZRpL8XR7tp4TgZuBju2Z17RJidoovhtX6EvHWy7FPCuKYNvTV1bA5Wpq",
  "key35": "5pW6U6NbvmWUVo1nACz6Kq8p4fMKz5hNekmz548QCwvfCJhYPy3YBFgPN9egSuKWw3HhTHpxjARgbR4TX4PNfjA4",
  "key36": "53bjjtZcwFSJQvdYL5RFRzaLf3CUA5E3e4LfpKCiKqJgbHdBWrsKRtbBGdwNpUhiJ3AGoR1ysrsVkjctZW6YYKzJ",
  "key37": "3DAGvb8U9RsMoAuocEmCbwGLUmk15tFzWFCUudR75HVLk2aj9acdK2U3d2utnHNR99NVNuTUiEyQRRNyXBG5FsZf",
  "key38": "5JYhzFCs8faaiKmZwbqCi1pvmYLqLfdLtMxUseFwJaLwPNx4JkQzdhKWYgPobop658JUaZozR9KyLzxQX984c15E",
  "key39": "2haFKz7dwDsoQ4rwRWECEufeHCiuKs4fmhz3WbgF9HiLFW8t77D3Vsunffk1EgGLuBQHukdYrw5Dac4Y8M6rBcVL",
  "key40": "25TaDDM5EhquMX7g5YAvw8jhDTkwLuA1R9SKHGVsyt4ASkAm6Vt8ZrkzkzAZN5TVLtNFp8voSA4Ug7mhpzu1GGYd",
  "key41": "4Hm3z5AquyKPRsx7ghukjmMKssmFL6SH2xN9NtSoeSqU8u7KxAwU23GS7cnYn2Gtcsnf5Qm8w6VPAyKVHJfCLZDF",
  "key42": "4vsk7z6WLwfT2tLAP6Zt2aMKsutkMPC1ALLShEPw7P2VrwQ7j8ephdfByVj88XKNuD1KsNni2Q6QRjrp58B6ypkP",
  "key43": "RN4edm2mUwAErBtNS4329KqnkYidzMGw9h6jd1tgko8CPE7ur8FSybsXkRspgEFxxxPYDSh7onRnpFAHcmtAFKJ",
  "key44": "ap7fziBNjkRmNH4wGzTXdZdthTdmKd6fBSMfYhHF9cywQW5x4Tx4X3ExSiNuo45b4vMLv9eD1QWQDDx4m3DDX9e",
  "key45": "hLdHMjEY6gnnDr42UDzJjw2YL2sshn19UuaE9U7jj9fUd16G5ydDw7nf6sYfoVo4QjkmUC3fKSWGgWzJ4ReRh3n",
  "key46": "5yCRbWDQWjyt76EosE4nDydBadVAWX6yLwscS1VmScZvULivukiJ1dWGwC5Jy7PENBz4gb9uXZpwPpUyQWx592UP",
  "key47": "4TMgBzkpnNpJzYyZYemAoLXRHB5f3vPUVkPE4z994xKLU94ESkfNxdkTPDMSQHjeiL8LrFSxWCv9hP4knfuEBg7b"
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
