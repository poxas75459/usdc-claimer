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
    "2HbT8VgmEGeJjZSYynHV9rVkjLhNX4Qdm2EeVDLLrkvPVFk7rqbDmaW6KKtabnTnKxmGeaduF88K8J47YfA62vvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDXEApttqBqURg2WL5wDCR6tk7zT6Gom3RHu2WXtnhDcWi2SgCZm6FHDWzHq3AgKKxZQW2sUtu8szBttkJjLtjn",
  "key1": "582L3EN75Tz1nu3i2GjWzrx2xb1jka4Uu3ZiAuUgqJfxA1ugbjNtTF8E1cVCGJ8pNLLbdSYJ7cUyhReUGfbzzaJp",
  "key2": "4UfVpYi7zYEY1uDe44Zj3Pc43XrucssE6beBXkJfCuTSPn5zNADxNNjGTb8HxH7eQP7B6F9tdX9c3yJtSmd6XhV1",
  "key3": "2YM2Ra6TADeV2ojkJ7cJatLLqYH4mnJi3KtH7M7kcuMCU4MRuctwGeoEauYpuu2XoFz8f68A8BXeYnUag6s3gAxz",
  "key4": "mjn7pVP1FpbWM5UuAiUGnznQjpJhoqc3MUb3hyVBKV3YzNM6McM1ztc6MKkNV75DBVrDeHEKRCdyTvX7qSoVpGN",
  "key5": "3VVQC3QegMfKNSLtrt9y969sa6L8dhmqznEwNAtM5J5RyTauASk5C8fDaSAo67zDs5afHNW2JJBuPhwjGVLmPmvL",
  "key6": "a5rTCRt9TeGWUDsvNLGWBV3uAzDsVjgWaZa8pNkywohb1Yb67GTcRCruL7JbGNxAkd3HypRSuPzkJJKorGPQ8Ua",
  "key7": "5X3oRvVygvWTzLuXSBNZ2nQSjD9CZCu4vDMwLqeSV9HCQwmLesVVxkMrhjvDmgsVYte2TzByeyoGas976ZALQ3LH",
  "key8": "5HErzEHwXRsT4mgmWGe8qe7GbATwDasN6MEqUHGDgi1AsoJx1avhPgLRg7rCz8zKb981VfecpttVMR16g3p4kbfy",
  "key9": "2LMWrBKf5nViZ5sodbGU7soRGGVsYrNMBtSKTBmBJRU6aVud4idKkN9Q9iSX6Gy4QK3ew9ckLvQUCsMNuQP7USj6",
  "key10": "2FtxsmHS16ce9ukVo4rfroZo5c6PH3JmukUpKtyk3fpeCtc9W3KL3wNTiy79DLte5BEyVSwgyceAmTi1JCDb2rGL",
  "key11": "5qUcqqsykZrMPavf1HMqxRkEokB1iirs1wU72Gz2Q5XcKgz5tRD7SEPjgWqRyHPYejBbRfxXxyTRjpdAmqHwt8DY",
  "key12": "9df9eebwGN8EiwT62UcZPa65gqA9svfJ4w1Ax4UxxBaSrmKCngxS7u8iSq6gBvPNnM2f6kkPqbhfNLvx6j8rNEg",
  "key13": "5saZra7mhhBvT67kVC6qqeYyYsGY4Nz1WPfHLqiSFnAThE4o9KRFABqw93r16WCHvjZkMaMGUqJbx3igrHemC2AL",
  "key14": "2iYbdA4W1jJAQgRxSFe3WerDawEUYENR43bUd81vk82oWsr1DAWNqH8YnPCB79UMzS8Zn7a5VfFZr25rxmNEwVUc",
  "key15": "4crZs1iDs2diKtn78yJN71C9mUpnGSF8E7SsqVGJKEPpjgP49CFePYtmc6wifxfm9SNqPPwu4NGg8i1HzW6zb75U",
  "key16": "4ju4xaSxbZ1R6p27GT8PdYU2zRKXXbabr7FbhTe8NAZq3kyx2rYKgtPrMAucFZP8XkgcuSaA7omrBRy3BBDXD27L",
  "key17": "5fHNvwehBpwespArsKd4S3hciBJx6a2L2db3QB3zQKzn9dyetNbLaekCpnY2GmVArE4KZo9yWvPMJUX9kN8YHtrJ",
  "key18": "cotcUfuovXjHMXeHaUxiCTDHuarmSzoXbtowCeznYLBGW6vA8vhpTGgGtpgknPP7BLcZ2hm8ZCyPDdPSGpcpehS",
  "key19": "2qa5igPyegoNm3eW9Zij26iSXD62q9M4XNNrmFCs3bvGuV4jzFzjnXzdXpPkTgdvrrAHqPrZVutNnFVWgG6YkuVG",
  "key20": "2dW9QN5gCDgreYLJrpMeUL3sXfbgzak1mzpn2136QRCJHVQSuXyNs3fJfpegZFSLasue9uVfAQUduGhECnDKrL3J",
  "key21": "5cUJSxRek64Zq1ZuPu2ShSsAg9JmZLH6YvWa3jFL3Mow1hzE5iNtBpLxoMbwsxtLUT7pSyJFXmGhXGp2qEn6dfSk",
  "key22": "2pCHhz9Y67dQ2VhQTKUunzUfcXJsqt7nK3FiK6WsPezC3esD4Gfv5JPaDvQxAenVJKUoMw2gsMJqixY63Tmm6xeX",
  "key23": "4unaaBJQhMtn2aFjVz8mERNru3RNDweFSBUeSQXWgH7nCfzuQWMVbF1nbjKEFrW2g1jowJViatsPjZWKQrR18zay",
  "key24": "2cnew7Lb1DPs8pFhYpyowfTMnPuY9zvYyvayBJAmSzEXj3Wu3XNUKcDiFBh1M3jNbsV47jJBRBdeZBAqof9jm77s"
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
