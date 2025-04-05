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
    "4mHFWi2XpbRbnLbL8D3kgw8sLkcv8rSCGL77XpfUoxxt2HSNCXdZoGjntAqRBXAbr3oJnKLpti8Bjm6WDPB3CFXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvrm79CmRDq7Hz23rCstQPKkNkbwjuWt8LxkBKbtb6EDj6wNqgCnAu6vYK3Wq3cWMLqLGguTntDRyofNB6zzrLo",
  "key1": "QFBmmm16Bhp2eBVCRthHjVeHw15U6yq7fydBpPa7VtzVZGsKXEE64AhAjhGWMo8rmKCJEoXn9TjYMLR3S3aTtdX",
  "key2": "2i31oxxd6a612j8BDq1ViKWaamWqWSDbQmMe6aYZMNGmWeDPiTv2AwkYbEP8c1h4uS159bbWifDzGLrEFA7TCj7k",
  "key3": "5vBipM5YAfD8aZyDuPQQPeKXqQN8brPddPjCc6Rr3y22hpHQB8qwNPg7MD6QZTViqXktk82zXQRiPf9rprL7awWG",
  "key4": "3gU79qMaSiSvp4PPFjtbuD2YCMsuWXfShEVHtBL7ADy293XCciDhnax8pUJc7ofVv6rV5GcGAnZ4iRJnjhnAqSmt",
  "key5": "288mJsmQNtD5ZHEYrkPGPZETbEBLAUQQfBZJiQsLmBWTciGkC5AcJsrxocGUoes4GDEy3f2vohrmEexBExj5NEd7",
  "key6": "3jid2wdDvG8NrRWHQYnv3dW3JudhdLUg2ZCes4p5k51co2VW2L5aQiHgXaYW1ddhEscnyC3skq5H5A7bCw718evk",
  "key7": "3pwE2oxhPnRBoPTJSR3WKksguJeT8wAZGJQzraYdrSAB7i9DVF524iUjPy6rpzJE4vz2wK6Kb8TwNUJ6P2sFkW63",
  "key8": "3HcmvNJt6k359RR3wsFoNnv3VcM7rV81hiz7fWZfhTQY2KX3a4NAAdbqyShzGkMnpGTdkJWAk1bjEDLLFqZNhh5T",
  "key9": "34wTEB11SuMQuH9UPZGyQKZbiVf3Wy7vUJPnMaiHiqucyDpq5FcV6SDE9VAVMVPPxpSYy8n4rP5B65KVjqKuFwAA",
  "key10": "5UZSAfiSJ7JefVN7nLoBWVF979pneDTt6Np6APeNhmxqMs8CSHuA5pt3L4ebDpeuZGjqPQU6NKaLsHWDoGpcu3VW",
  "key11": "2kiiF9mV7CZLnk6kF1GtkmhaAUGaMyFknQnz7e2FHyoe88mVqNLzfAAtQTF6ckeq9AhHerv9fq6gyGA1pDK5y2iW",
  "key12": "3sCaxPKzi923aAk8oAWwH9pTRKsM7Ar1SsgkykUrxdiMnHjKwLmf5HCEwyrVxh2qmTfC9xFbzYuk6CpT479d2NQr",
  "key13": "43ioCwJDU8tMdbobtDzPHVfPDXtSJ6hsA6vcWRdurwCm2dMaN86bKNC3XSYW1KzSTBQNcFgq5Mex2e6jnvt5vgfy",
  "key14": "26RAix3vp1R5gpBYLaVDWSxKTxbDN9mH7bcJy2BwsmLJe74ozfQd9E7rv7qaYCTqWutTNg2aLFz4TcuPSnNBe1y8",
  "key15": "ADFer9RDc2rRWC35N5eyap1Qwe1uCiFEwvaoBz3G9t3yLUyNj4jYuucLCzZXWfdrwYy6w7JakBHT1fn1QZjL38H",
  "key16": "3TCVzKHNUc6Ree5zMMhPxKozm3gdi45oPSQuYVYL8vgcu8PgVFHGzbzD6DUQUSN93VfDpFqoDT2AjpZVpNYNBW3M",
  "key17": "4h2ysHZZ1NwepYpaLCtiVyckyv5P8uifMw4iee9pUGpVUKCcBN1gq4QZjb36nD9w9rGckwbZvuttoegzttMDR4Sf",
  "key18": "3bALEgVKwV3VPRHyV6tkU26uVTFkKsdUqA5LkxqJTz3GBBZDQ1YFRe1wRthefGwviYJsQrdB3hJnKsankY2tY6ir",
  "key19": "zCAEvzjcsNbicnwszMyASGwELLDHNqbtZyTM5pkxTLx4H5njFkuu1y5yd5VaTF6nztjMvacaqHtELsbfYsx3c9m",
  "key20": "3YA445Ytkv4BRrdZNgsMKePoSxF2VwmLJL5EETF6aMf14AHoCmfqwFBrJxhXCYtvQfkWBujyeBvnm3sUqsULkRmT",
  "key21": "2srmf3EcdrwD7K6iz4qvBhG3gS9gBbtr4nZnuAZzFvELaaBLbvbwUFg2DkhpmV9KiNQVzxTYkskcjTNueNK87Rhu",
  "key22": "2cwWR1BcFXZuFj1iG8XvHLHXCr78gUeaxsrwqPtWNbAWgz3ncBRo6jr8jmgiBwgt3FVWPEEiSojdnDUzMtg6Wnf2",
  "key23": "zAHEvFvQq87vYU1LDWvBriUfQiatqAiYsw82B9nf8BEEzjjFcQLdBYpuv33QmRx4Ekj9GkKb9RvUZ8f87ZJmqfd",
  "key24": "2RD7iZEj1LVLpnbwRFJds2ycT4NMick2kb589exHv6VE4YoM6uYK5AQfu3PHcWeU3Brc1JoNiYAifLu8ychEbFzC",
  "key25": "c791EVcxHmNFe9UQoLQWhXirRiWzoi43vSGhHXAiVmrkYqJ4QQAPhhaTgbEj4mfQJ73VgQkw1aaXC8q2AYqaGdE",
  "key26": "3iUwzJJc3dYzj8C33w3X6ojvEnyf7n6fF7wgPy9qqxtHvN3Yx1d4hD7hVGPFdDaKzgi3vy8sqnnw3cDCZeQ1GpUM",
  "key27": "cyCPGQvHbqVqfZKSmfQWBTtb18fWZGSLuoBRarmzzkR4AqKJYaXfdW69f9izCnSzJmHnC7TzeM5JjVu6JpsNoSo",
  "key28": "3NANKXx2EiNJ1ZnSuHjFFZbuVfcf5zgZHCvZgvksDemfTccizn1ipuRq7be6o3m819thJogdRYuFpa6U2A53sTAS",
  "key29": "26N65pnTTDidW3DrKAK3qdgVdoJ1GXbqs86btq3YkEWFYALqkdZjdDo3e1ENxqdpqpdC4qegssBBXXVjgdjW6XN8",
  "key30": "39zi64vYNnmhuaqZuDHs95bc5cm8ZkC6zHhE5QcQqRecZpguJ1PtewVWL9e9ZyK1R63SyjX6pjQC4r8ys6BNd4kF",
  "key31": "46vy95qSdxc8sAwP4G1mKtcKQJGKCqjWHMLYXDjCGhUwJX4Qq78ZFu1EXkVbqy3t8Y9Gc8ZUk8riYjF52ZzEsNFq",
  "key32": "5127QYcoktoRu6ju7i8BhHm6D7TtMQKoswsFQHeJEYuMJirJDpzNhwkcDgwbdWbZaaLy3g2NHKoSffezhpnbA8Js",
  "key33": "3KuUeC3NCHnGK3CwoBhyGcisiMS4EptrRm9aWizSG1nFXGgRgX2oMkssy4j9KbXZEK4Lf4ExauKdx7jrxqr7kKXd",
  "key34": "5d7PHAHhpzJN5RXmTuH3j6S2ht1LicfX1YuCeaMEsViUf8K8DDrrfXsTdHcsDWcmxQ3Au8hDKjUAv4dMjsaG7baf",
  "key35": "ZpiSHCRuurervcrExTgZM6Q5g4D4fonmibKw95QfeVzJQhto8q7Vx9vDP7kA9ybxy9riryNzVYDV4JnpW1yB8aV",
  "key36": "SjWHP7M4p8bsCjwLjHWFrTWLfoqrsfjjABF9eX963nDkw9FpLRpBZdto6tqeZZoaPf48PKNqrnfaHJHfaznHKQC",
  "key37": "Pdb7dhsC3ksVp8BrfciZtSZfVS8WswLND5QcFVEVNnucRzsSQMYRx4hQGBA9DmNC4EkphgaqZrC4RehhjMyyG5N",
  "key38": "47N9moeDJZMTZG1FnBFW7A8p8bs3vzvxqGudEGHZVgsob6Raa8GzgUqEYfbdrvNYUVXH9g76u7z3E7Tn3X3sc7m2",
  "key39": "2A4V4AouKARNSgQjBCCPGEENjTHUn5tsRWXof6A6zG4NYS2kCyMauKDxHbm7LrpG1Qw9boJ191ayrMf94E6FrnNa",
  "key40": "3W6KfyGRLeZAxwPZ5QNhRAdxPTDwa5AbCsRuyo3qX8iLwx5Asoujqmk5LKiwnK8JmuQLHAtVhu2drY84cCbP33mr",
  "key41": "2jbYFr6wiMFNNJaJA9KQqz4L8vyWb9tqsUmjUCfu69mLuMt1RTWNpikKNsh5xtYtmyX6qiiw6GjegTREUhsVvm21",
  "key42": "5y6kDZYowxRS5umd3xMcWKt8Wza8SeVAJwbysse4jEVFCud3obz3Tqbif8AEaptueXdmXT3pk6m2Ui573hHhozpf",
  "key43": "3TqauQEUMfW9qcPbyunwFUf3Q4zdAqzi9ZGng9MtSKH4SxBpZEFWGfVfi6g1eEKbrHuDoXV3D1KYhFn2B7D37vsQ",
  "key44": "45EBh3uHYpHkgzhqAcXZXuGhSKEeyjJGjmBw42oxpG5py6rASZJnnxsjDfkHmjZdkXMHffxHm7mGAXvFipDk4vfd",
  "key45": "3uL3hMfMKYgZL8sVvVJ4WiKWzEDkVt4yKGUTj1rxKTA77PaCau4PvtQAhAvXCFSSvs2cZamY2VVdbG2CLoPiAdNR",
  "key46": "dLmpjno1rtQHuTNjwnagLiMFnV4Ju9AA1JrmQtTSfxcNywMcmCtTewRn57Fc2opNTfWyYP25VbWcqmFdFTU5U7b"
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
