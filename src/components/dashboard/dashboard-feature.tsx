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
    "Lo2LN8MBV7B2HWZ41f5kWhaeeBx9CeHU37TPuDmnFfp5mYfygMryGq5YHU71UoKzgRK3BTngaxPCrYFPveExxr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1dc6zKJsGJbC51Qsxw2KzCLmGhTvLb5Ner6D5HgS3VAiimB2Jxnj6Mc2cATCDN4czViBNB7Ek2YtKnqRFTvUT9",
  "key1": "3B6VzRGw1tszym2nAY4Pk6XgyKqhxEfQhAiqtUUzuEYwrfUDqgndUewKiDp6KX6199Zf31AoDdep9YfeDzL2qYnw",
  "key2": "2ZkAezz3b2qQzmynqv3FmVzP6ZMGdNEi4uKMAmE971gJGDwm8bT5iXz6hBHCubAmcRYcyJN3LifLNGoVsXXeKC33",
  "key3": "WhuT1B4afZxsS5by4iyifhLakE2kSkeKv7Nqqmk7d4JkvGZoU2QHWM2fgiioN3RS4BL1qJyxTHhZeT3tGNiFbdv",
  "key4": "2joTzXCRGf14dugiWf7Qtj6hkLyUVHXJyM7eeLTkg2BNjpE2XN2LeHPbswGVBucp1DFd81Rd4BoajbyuEip2t6Wj",
  "key5": "ShqJchfFdnfcpMJ78VpCDcV2hkh26QdtU9MLzH6hE1XGXbowRKAg8sgR8nHQN5sAUt6w3u9drtxdMBTdjcwxP96",
  "key6": "4qf5FZp1HfNcYCyiSrfGJ2oAQVbSqnaParisEsnUjxCmx5aHnzNaUQ4LnavSpmFdYfpB34rV24nadyyLpWP43TyH",
  "key7": "34rmhpxrKk1Uzjw231SgUUXfwFsPcFXGaHLKvXcGpUNZ4HhvLeCvb9tpgm3g3v7mR4NPuPRPFw8XuZcmv7ujH1Sh",
  "key8": "5vRcBuGrFCZQfJ2QNaF2W85CLbnbP5jvfSdcpkv6A3oJ9EhCBEVVGu66RDMicUtpUKDeWpK2FcyZtkMj79dsUEgQ",
  "key9": "67When62uuAD5F3S599ggQd5hmK1PD5CFT7KgZyshRE4g9GiqcPd7MRX921FUQqDWeXhf7S4PZhgek2Skgn6sRsS",
  "key10": "4Z5BJ4QYmPn5ec2rWcDnEzBr6SFAL6na7jcWP5r4DhiY8yaeMSyWpiwDpNcWWDZsek96fN2pThMBnJ9jYhZEaBcU",
  "key11": "2hZ55rAPPXqWsw5rB13yLgJcUetcc4kXuHmJa7HTwpWeYmzWbZq9wkGMio6d2nH9EnMSVp6oh5rB8fgsHehARrLJ",
  "key12": "4yMSbEjpEZMHeZuSW7i6rY8pm56w2MPpVZxVFbgyHj4bdYpgnhL1gSBqZDvZfa6kCX3dF5cxJ6Ahb88tEum13MCc",
  "key13": "qEQ7ytmYcWAdXAHCfotXdmKVHTSpM9mgfSV9ZUTt9DB1QwRpNkc64mhTUyLmmgSh7YDnxzywmrgjt3F4M7q6LQE",
  "key14": "5EnQo3TXEVNr9GYibgWwwqKCAGjyBmrkhgTdfMXmy1U6afQmc82aYyXtzrWNMxJkP5AFfoErebk7RzTwJ9XzQSmf",
  "key15": "2bBY63HiesXCH3buQ85X42nofpTgym5zRsFvBMnGaHcLcHg3NXinFzmJFcjngWXisqdzB9yjtBqRL9KWNG4XYYV5",
  "key16": "3hbmqAcP6bhZ7gLoZfv2mdKre6Td9DwgEa9Wqh3hpyEhhr63rQGNcLkFPzAM9nV6GkmMvXJ3HewrdNnPReo7feg8",
  "key17": "5sCFJDRF9ZmUgSiB3CdKJBFrTx9BBpdkz7dk9PbRb6ajudtKN7VZAscy3dqCJgFP9xmhSaJ1fsVkF3GUn7Dh2LKp",
  "key18": "rGvnL79eg9DHqPdQevYzW8Wy7jzm3fcviFDHV23vzCmafaKzPBR9E3FBf58NakNbuk4wdLEfwjFE7ttyE3etAf6",
  "key19": "38Zk52zbgbrtzPUxArBcKqb5ZM3m1k4vXEuQBqqhW5nejZ4zJDNMFTuRi1dvM57tJmnUyU2o2sEuoBguWdM1vkgf",
  "key20": "RAuNHkaDy7xvjqZHfe3kC3A7qE1LfeQWq3qbrAdgLehuNRahjguWnGNemUNYJY3hiphbKjcw9MBehH2XzQ4amCo",
  "key21": "487JDfegJh3mRngo1kpXRrWBNMHN6vKNxEmbEcUMFD1iyEz3wB89nLUqX1LxCUix3YQgtrzUs1trFa3KFoRyP3y",
  "key22": "5xmCkXFgxKNEhddbnKqPBoyu4YkyKrWp5P1AqicAF6VEciNZPHPw4S9sgLe91U6qysTCDXhrbjpry53jMMQioErt",
  "key23": "653hiDFspAWKxjDNvdbFrac3ZTFQxfbL3GDWfTRkSC1UkcMS64y9ENAP2wmtWFXJZWavtHJV1RoPD48kJApiMtgM",
  "key24": "3h3xwngybE3XUS4AFCdrmtNZb5BqhoFzBs41y3ESSX7Uc4JjfyCKmf42KhWSd5Qs25q8GEFSY3mcnGrxPgDiGyzh",
  "key25": "56rb5PHpM6YUQ5g8N83xb3DXxFKUqzwePzABRnce1pLL7Mh1cQw3H43Tst4tQVbvYimVA8awey2ks1gJBWpkCMq7",
  "key26": "rpHkKi5RSDSmGKGjfZ8E3Ckh3ahSMamvbQbAagEcNctDAYh7qh6g2sq3vcS3memzgg7ewvG3w9xdhQYz5KcuwQB",
  "key27": "4MW45hsEoBKTuJ74MQ4S9c5LNqGD5p27BqhWQKKc493gbVn3m4sakMDCdcsXnVJS35z1pCUbtjLZHMvtp1dDJhm9",
  "key28": "wifcVxdXqHSAUHNjpbKLU1AeWBiLzmDvayiH2y8ZnV2x8vLGk7hr3fjPkfPnUzDnXKJo8YYQ41d2ghLjR9DaP8w",
  "key29": "8Vqad2GxrRhfPCQTXjFDqA9syez5JdWM4PRTfmNcLy3hPWHKn3ZNAW2dXVksZ7GqixccUsRN7tEbNnuaPEebmKw",
  "key30": "2vkVqEBkx2vw1Cg3tqouDzAyZpVFZbRPLpgXkvQxSd6GedPJ6SunJgiShbdv5oaor4zSWCEvByvAVBtVQp2Dmgj1",
  "key31": "3xQRKQUfLR68FkQQRRXepUBx5KZXX92QAg49UhQCwPUyXetjnpqWfMRjt8p38gYrtkRduKnHUGq1aG7qd4D13VD8",
  "key32": "sCX4vQdPHbnCuTiHewDaerkd3TzboBV9t61tVvMEzzcS8jLgFQkGWZmBa4Nr5CVzjdmtRHvATfwzhsyQoS3LAxq",
  "key33": "3jSgZpFrTbXhHaXJxFo1r2B5vCPT6kMmDTFb9NyJuwKP7WH2ts1qMgKu68C2HLxsGB78Jfh9bBiEa3RqmNRtRvpu",
  "key34": "4Soz2xbbTUp3idhm9gFPmjqZ8RWfdQN5MH1gVVfZavg32LriodWLk35euqdnj9zfTCtTPtat3JgkB5Rq4hFvRbM1",
  "key35": "pHamvedPqHgnC6Zm7yzZu4BQPazRgVMsdL7QhzgbY5mwnBCUagfEUGkfxSZfu3n21Suzs9jF2weFRFUbn9sQzh3",
  "key36": "37PeBXmRQRFskiWjybtMBDrcT1qU5U7eRhCLPbtHoLGpfKV5Z71YVNUTtP2mX7BB9HAiWmgTJkqdBFAzHwSrFEAA",
  "key37": "3Kh6nRT9wYWyCvxKJgEaT7aF5LErDg8WKZMbAjvyrcr2VjVEtqTaRNLYbq1cz3FpmpTT4jQ9rCwjAbQv5QQbKjY7",
  "key38": "2DtKh96r24iCsRxTCJHyG2DFtHNxtHNFcRzyAQr6VFUbnJu574nkGhohBN99goM11q9wwGgDksbboo63yyZLaRiQ",
  "key39": "5K5tJJWPHRUU1iTQZjoz9RepjpqJ6Ced2EKa2gW1oYzJJkMX8aH6YHgnncBACENHyjyi6hgxQywnS7wLpYoW2B9e",
  "key40": "5vEAS2YjAhQoHqdHidj3skPvzLHDssGw8GRSLA5ZGBnjV5ujjsbyUSXesMjTJu2e51oDFKDZTosvpuhTE6uFVZK7",
  "key41": "4VRGyiy1YeBZMuna1k3KoT4RMcfDutd6J3vYkN6DZZs8fZLWdLucVhLAtXzNQAUsiEBwZ81QZaFkcempreQyCoaE",
  "key42": "2KrR8HjCC9dWviuct133BuZU5LRMCRGawg1RNAMiocsXuEeoyY2rAeKj2i6dge4GQYSpzLVCPvkhbVkNEPgenCj1"
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
