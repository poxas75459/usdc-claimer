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
    "WMT2KUo7dF3Ss9Cq7k5NVD7QNPLS1kYCDcbhoYyUARoLA1rp4aroou2Qm1RocxUp18nqJbmNx5YJ2mgY7YooFPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i5PwD3sdKKgUgNohB7CQUQbvcfQ79BRTu1iv7Ugor4d3R6ThXn4GPxm5T81bHVtrMibyXY6WnTpdTWcu9gFrvgC",
  "key1": "4ZJcq2Gfmx24rou1ciZnVHKGqJhoYDjkk2tX1Wv41NwpFQTByLua1fYUvytTsVeFHVUeGu7io8jhQdXfkeDhhWYq",
  "key2": "4FT5PBBALid84xsnXP5sELXhVazCMBJK8mQNyMz2ybDV2pe5ghHasKndR6jXtfD7K9Sn96s3XzsPbsJzERPyx7FF",
  "key3": "5U4x5HVCeTZM9p18ACZD8d8BxNeo3HEUdxbyvxBia7sejALiXdRZRPKCNyrXSZZVD4XCYuqoGrSBzpWNfuVH5Xa",
  "key4": "2X6BNihzu3ZwVvFBFdtNkHZTzedwhfkmPfDsUoq278tDm94dCPQrf8aE2d6R7ZtM2xnVEThM9Wj39i9gT8gcZT6K",
  "key5": "5ujiFesHjnLrVtodHaAWu64cW1wzVvubfW6TVrnfx8g8bwntE8oLbdR5hvKb6CNr5UYNjXpVLqyQ4BuYzgeMjPwB",
  "key6": "RU5M2K8pVBLodqzRF2BDe414gcitbdkw6u4Ddsiiru4a4n3V6bcrPcPC9VKymotiziCAG97UmqaMXWMHJckgPcB",
  "key7": "2dosC7r8PUf6PxQsZDDK21tTJb3oYTmkgcSWoLPMUfJJzMZKKbzU7qV2GwrzfSZo5k3pAZ6VZo1xbLbNeNE4DLm7",
  "key8": "2rcQ6TSDF5uoRtkZoaQQxy7s9pRrJzqLaPiBGtan2bqJjegmzQrSNYK7UvMApfkPBaEM4uVY4z5pkq5jCr8p78fU",
  "key9": "3NdJkZNxJnaaGT2uzuPsygm9DQHGn4oEZjQk4PgkzgPh1wj12f1HJ4tqLtaveWDVEsc9EvrV7RPAKJnsjdZas3XQ",
  "key10": "3M73bm89VcrmWh3GL93AERu9vb998cTD73r4Rgi27sZUHAJ3wvig3TyfZ7oikpf29xiFbGqbnpnCGofQcgXexWrD",
  "key11": "2X1CZXQkMUqmkLcaqNvcxh1UR1mvxAHg58cqmYiucYrbVWi7KWKZU7hNtt8GAUY2jLUjAmEGP4b2pMWMXjPu8ZvA",
  "key12": "4uyrbxVat6cVgW4bc3t4jZEQgv5xm3KAdsL5WdWXsLfAaXya3M9B9XCpfwAnpSmYiQig8KKREQGzDiG9gMDYm5xp",
  "key13": "4LYv7rS9QfeZ4JCjZMk1umgCHtUE7ZqKVm1wpbbKFrRyujWqkhcLuSJEa881cSiMasu6QMmk3qUsBc7dUQBEFhvK",
  "key14": "3sWRy4RdUJJ97gsQoZPSsR99HvqWbuduKaP41NnrNfVHUWSri9TykB7fiyuSHPuQMjrRvNevaGwvbv9crQbG4LdP",
  "key15": "5hRwcJd8Loh7sCZAaoKGjayBJ98i6FigU8329gLCKi7kzymJ5V2x4DWsBxqETbtKggz2PbhgKprXXFuVQFGbhocc",
  "key16": "RLKbA9WHtBYQiPxv151wLmm1tL53DV18cEkWScDTgyovzzNtvscjDbr1Bb6FJ4f63pL6Rm6seyDv3HphViykuaz",
  "key17": "vkSY1pvLW7HsCgi3MzyiE7jW66XKuG2qKxKNYPQQnpeJ1Ufkta7fDP7aQgx45X5JCk2QLoJCRjYfM9EVA4ZfYHg",
  "key18": "3UShU1a3YGiiZeUzDdC9MWQ66QR79RsUsTbQSF77hatAYYW5xsDWmtbXbfVfrXhttRjt8CbjN1u7VPKiiyCQ889L",
  "key19": "49uKamNzYwtxrU5Ke7WDNCiRaTQCAaSCaU8inD67CAD7aBYMSZRejqJQbqiHSn8T5fQp5rQnbJHYVpun9NhP1n1j",
  "key20": "3d36zXJuNLpWvdQJVgbh1VF9yYt5RDJ3GNtL9ajFjQrpVHQkt1rvvmB56jqv5xm8XhHz8sAPrRLqpLYq3Wxbn9XB",
  "key21": "4au4gbaZKhCafTrhvNV3u6eDroLnPWkuzmRmPh8bpiPidWYugAemMqrHTEnrFwm5vdeEJMfqtytniwPRiZ66Xv36",
  "key22": "rg2YHHQDcq4tEBqVpNc8S7DLK8U8EntoQdVJY5cq1CQas58vuiPiPr37cWBGR8aUjuTtP3sgQh3xrChwr7DEHE3",
  "key23": "2t66F9NQyoJuQFW5kKNq4aGTqAPSpZiZ2MAZ8Q9jegYYp59nEHk4xKbTAhdAVyyKmvkpsYspEfsVHuHurp1JVeVE",
  "key24": "4pTUBH3BDLZBB3H7VNSRza1nEVAyrbNAfpMPbL4QWXWgKaHoZDppXH1Yp9HWZbRkpXnQ2qiqmn9U4LqdMwwJTFET",
  "key25": "461DDENn55M5Pk61NaNctdFUy36LcTmXciQPbroMDyBHvD45uykWo2tHUdm6aAG6gJxBRR55uTUa3jFik3nGyJS1",
  "key26": "tHj7631Ngyaytu1Pvp8Qy3w1g96gXtNZRMy3sWJJkWE5WsmvutRTbRzy2T5XTSE22Hzjz4XMvZNWw8zudcgswqM",
  "key27": "2oKkoQVczsFcjXvw2kxt3HHNP6wQ9XMRKV14GkiLL4UJPfbCud2TVVQUfHH5jjWP63r6zsRNmHR4TUCiy6CRDSRW",
  "key28": "3H1nNQD9D77MsycBzUgDzr1TptqsBg2keNRCMVvBjBgGL5WdnRLyGFh7JaiMPpvBy7kS9aL1anywbErz2Z8QfbvW",
  "key29": "3R2WD9dPDnXXf2eeENs3aDNGELtEBx9w7Ujm4kZyiQ4z754ZF6scmPU8mZ89cryM5GDWB6eEybAN9d8MGAcCJa4h",
  "key30": "36gFDcwhXzHQcdCJhfq5PseweKkGvpCvMmhYuMTBbGswdABc3ohH7VnJBE6zsZd6zLe4HWaL3vqpdhAiXNLxfqai"
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
