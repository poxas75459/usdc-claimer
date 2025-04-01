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
    "32U2so2Edv4BwqzZNrw8keSjKBXNAbhbDgyAWLMgCZzNE1MVFhbWKvwrYfNLZ4xU6w7MtYNcywEPHtHLrA37sFvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CfGNoXRWKbSaRaN6GM7uYBgyC46vqN6wT5fDcwvyAz1aRJvm6aJZ2GH3AQZYfL94FF59FASTPvgYgWFSMejDGEu",
  "key1": "28wWTaYxnRk8AAxjkW1rr8qxf3WjY1SRDZbt1zVjzroKDDRvkXj2V9UJqzC6VnjeFGpAc7HtwpgVaEG4tyqrQJQ2",
  "key2": "4PQzeup3nUPXp8U4VVP8fce5rZ455LPa543xUMLZJpu8R1DYZZ19yckJrQPuxSZqb1tk6FCs8JBJNSoMf2aMpetB",
  "key3": "3iRNjTnKGZxZcB6rRhdBr1YiafVB4z4W97TPT4ES8aBtH7ABAS6DyPCVnXXhShpzhz8Ea7YBZSfPZENwcKeSPfVG",
  "key4": "22HgRtNVCM91kauu316T2Ag99sXU36BFQczWVri5jxWAKgCs4PCbRofy7g5NbeMn4uE8wQUZciqTPQTzDmWu6mwg",
  "key5": "DDkbSz2y9hKuq8mAb6DVsq5gVA428ECdW4Bzw11gTN6HHPjd36QQ3KUhR5ohW9mj7gL4bJvFjKXiLyrxLVNLSnM",
  "key6": "3UtmHbobGMMgFpYLvgxhsz198nMTJ4zmErpGDGDgfUhi9T6dupxCWmpiipiqwchyGN8eMGKHpgBD4cXdQX23txbc",
  "key7": "5s1dqaNQkVyUMy9e779denDNKS7BxBUsdwV4SgFzsLr5yFWskyM1o7fLjHuJ1tGB7xyw9k2rRtMsLFbdK8gRz9Pu",
  "key8": "2wg5TjS9vZtRn6V4CaRGe8jRLQhaSjTFYUUX2k43AW4jnQNBsrzbWxb8QcQxMDFYvJhvoQQ5ZwC7Cg5U5V6pgpU2",
  "key9": "3WAKNv3eSi8NBWBqGywZAYyvx8uV2sa7KHmNRLr5RPYez7qzr6vC48Q9VwJoEtWC15abg2HNJPvpLZ37z8MHDZKQ",
  "key10": "dhScJNMZy1VvLeNj5YUX6f3YuDDJ52D9HxEKiabZvyyiTtrCfFebhkrSXLJqB7M52QEpZqDM64oBxz97s9f2KeX",
  "key11": "5qDPwFmcSjUhtjv7SXUmKmBHsboKnrjV6AhoJGdNNNAbptga3VWZgknUJgnchrAcvTfDADLsmrT7VUBEdGqgGsww",
  "key12": "2UHvEwwMcPgD2FLrECjsZ3hpNQDqAYkpqnZ5adPQc5BU5yDUA4RBf3QuxwJWGUTmMZBXU2bfUqMz2fKJLMp31KcT",
  "key13": "4hsgdCPzJaUG2PfPmN7dpSwtQxp84pV1rbDdjiR4ySRUV5HF4qYyqg8DZCY764U97dEAeWy2tepAgREQXNprtjjk",
  "key14": "VUrCUJjazSXR25xuhpH7T4ziNtFWMH8e26aYxBeqcNDtkX2Q16pMfAaRUgWv2fVKCDhRQQjbbutZoGfAuFQNir9",
  "key15": "4H1pWu2Bi3o8fiyGM5fGx4vKhfC6ZVxh5y1uiykShw5bMgHjj1EKngvBgUgHGVDkhaN7obZcJy7k6qnh8doXg1XZ",
  "key16": "5Hg3necE787K65usFwnxXZ1vZvj7KLezUEhSHLKGzwuh5pdCi7w1ojSKhJw2NnvGqWTucbNuCSRBAknGoyzrhSps",
  "key17": "34GHRSA3xh3pXf6pRkdxMfNYviybAasGM6swsgJR8ddipCgbgt249SKJrkFeri1zGrEZmMpgRDsKZLx7mTaZzQv",
  "key18": "4M2RnMEgzU5ibXH1w5r4bxga4vMEvGwsD9e1s2i9yvQT6prh9Vdv1rVLZJBY8UdHpzK8LLEZD3GqBpV8ys3CB4rr",
  "key19": "3RYjRVeWVC82gF4vdRRDCfnqxa1M6F2RTg7JXctzjDJEc5QtA4Eh4fvZmvDs9dNWTh5vvNdB7NdXLMQZRpSLEwa5",
  "key20": "2aJPcz4RgyibF57KgwPUrb4qA7AnibShBBSZG66SLRBnALLqU2aWE6i1r1dfm1C5ZEVWuKF1xDpQU8KpK736xNdt",
  "key21": "41vuwHkVCAiNb6xM7jKAofM5hSintQDKTTbUvgPcuDS8QgrjVM6eW99CM38RsxkKQeNjD56P3PN5XvhbsGoddEWR",
  "key22": "5r6trkRiQPBtQLSCU3EhFiiN4vCtpWmu1vmF7PbrzNxMgkxzw4xa27byzsD8qJguiRETdK1Q67Ta3d1J15JchTpR",
  "key23": "ZqcZanjAEv8uQng5q3aBsgmbK1G2AJapyTgADnMSGx9PtDDyXXMEfN6LKc198HBydqTKEyfzMKGSGAU3jMBEchK",
  "key24": "2eRN2xgrEMUrt6wL5NTTBgpRfXKaXtET93BHzBL4JZ9RKdhDccuuYA8jHtQHgVgLCd7h3nfmqyNR9MWJySZEMkK7",
  "key25": "3YeuRpa9yuSBgWwPeS74vVpDCGnPULBABm8fKC3ASJMtnfnbUm6yqnQN7FV6e85fjxfUM6AqGpUtTk49BbcZrJBV",
  "key26": "3SfNWvKyFjUv87PNYCb6exciJUfXbWSARXtBFy4deC1XMrHUd6zoYnVWds8E2whEjB9YEr5Baxzz6MLne8iBW96v",
  "key27": "YwMYrkiNYKfy3z1Zj3gSKk7yY2dFyjHjYa5i4nFZ4kPW2WUeqhYykU3mjYmBbD2uSj34azLpbG6QjWZGvpQuVFb",
  "key28": "41aircYsSjCSVXf42H5cpT3TGZpfUig51vWt1g3PeR7iFvf6JSqPXa6gafCjykyPJxBS4UthnYetXU43dxcsHofG",
  "key29": "3rhD9n7jbQiBiWfKTTXpzw93h3Xzv185DuStg3yspxUPmaME8AYBSKPo9mY6Z9Z5xw8AwEGsx8sdqH4dA4eKJkYy",
  "key30": "2nwrumpar8RkCHrhjX8v3XZebR1QopcE3v7gHsNH8kF7usKEA8624unXjXBaLjbkShtVjXAyqZhG2poAMbPQaif8",
  "key31": "46e6ebDk8Giewo4d9vrQfMxEjfdvXB5Mtu6xU9enuzF2T98u2sQiySRMv2nz76rTnS3QrFRGZMq2sznoQD3jT73s",
  "key32": "5dQTZDwCRwQGZA8FbhD54dtSriLDm4HN8f2st2qq2sSDzmk5kDUZFEdoTLjDFzeE4K3jM9MhH3sXMgHd8hhQYgFT",
  "key33": "5E51d8dAzVwWgFB4GtocurkvYBeXQDj2kSt9GMw3ShAT5s1377SXcaNC5eNC6jMs3oe6A6TztD4fxxkGMUkjW2NS"
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
