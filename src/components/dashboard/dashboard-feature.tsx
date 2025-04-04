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
    "634iZ8pRvWevSKoN6ivzjeSi3y9oqR5eZG1gK6JRViN1tbYij1JBjyXMtBA2cSr82ADEmWiHW4rT7hHC6T6SJuJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22J12VMJjs9k3kSEDrvruRuKdUdTUWNS64Dv3avsWtPDQvUiWSZqJF8Yv9k5Cye2wAgHDtsWrtwaQMxV1uXkb5xb",
  "key1": "2rhqPA1oM8K3svCRHpoZJZ4Q3iX4k9TT5rQtow7i3TPXfU3LsjVXZGoV6vB1LEzHEHx2TD9zTeDwMdTBUW7CPG9e",
  "key2": "3ZzCsCQyqZEYU6U7yDmcN3cX5FfZpxtSMtdDMEkTdqKVpAze7dYwn6GYiRsgksyvMvj4v9wJFi8V4AMKcYXn6bfT",
  "key3": "QJeJe7F1Jy4Sst3AAyUXiPdPsGyM7NSbXuPdUweT3BC7gbtUCrmFPLQ9veYqassr6U5ZZYxZZaLx9XfS2Sn3BKz",
  "key4": "5zxtnPEXE5d1fqcRMJoWbyfT9NTvj3C5Bt37baLzanMTtu2Ua4Xyq6HsnXzqPoS2r3LGjNvoaZzjTDxr9r6b8WfT",
  "key5": "3YX1L9gpuVdB2izvoNpXcTAAfT4Cn8LQw8EEz1XTJ3B3nHqjxjZo9XgLUxNUDarGbRhv1hy4wL3ZTEWWtpbrhwCM",
  "key6": "Yj9CUXtZhAzwAGoupDwRwyZxXzH3LmogxmosjhiXBtkex17QSqqMi5VtHjhwP1LMs4ik1mdQWEp88EXHrFwQHgQ",
  "key7": "57j6YHv4JC7GojB9KfyzqEDP6ftNFHitQE5E3V3q7KDs3boAF147HdLwxrK8xHWXH28HEQ5Ag1FSHEu7RVnpTrUm",
  "key8": "2GEPQ7HgPDi2dGBsF3amrGnuyzhqG7khryEmkPwyfbHkqkHtTTeCKGGTfkpRMdEWyekkE7oZNSHUZT1YUg2WVYb6",
  "key9": "n8r5pYR2gB43orv66MS48ybh1FMrdW2AwJcsMhEt6HDJy2SkKhR3Qf1AkT2dnF9SbR2vHW9jMVTEEgHsyP98MRJ",
  "key10": "4wo1d5HAWJqmJh6wp8ZJAkNF7BaGowbjs2Pbfz4CT72zy9Zb1MjSReuc7WvrzuL5c8fvaedPVqWbBR41bcQ41rb2",
  "key11": "62V6b6X7KrQQuGYHN9L1h7G2cNz9aURbHcwboZestnFKivTJ67yWDbHP2o8mo3uYS6sHLMgz8JVfXUb6MDwHuw79",
  "key12": "5NrCcJ4GooubpEgmP6gVX2hNPWVbcXb14GQGqhkEXc2fyzHidrywBTdAqM5LRu9n5g7PDPMcooTaNayeeXYCq2BU",
  "key13": "44FrWZpZ1Mkx5YoqSmibBWb2BNWKEEwLSJBMg5XKayYuUJpFEUAgceCtRyLNmoGfXBwupmQQiSpmfH1gPfcc9CYc",
  "key14": "LWGbvyvBVsqPcGAeq1ginXLZDnuGfue2pfo5LkvFLiRR7z1hesXZsLYJYF74HB5cYVdHYgWhEQVj99zFKzrkWQU",
  "key15": "eQaBMwSKbEu9cvcX4agQPwtaR7Uqwf7mdnwFAzP4XY9QR69MkuYb9MMoN5TegW4eV5EkFk4Uy76g1LicohQkWXK",
  "key16": "3pbCzaNAFayzoSKztiGxtzuqkJDK65qbYgzj3jsemhLSSjNhyRTyc5UpgcAgsaAHRvkRCADf4E7BPDyFSkwu1qez",
  "key17": "5oZwK9ntHfNtT5GxSLw4Q8BKmgxUbWaYvaqbjE2D4xLQysDZbkn6CV98DZU6PEHL9fDyk57WAAgZRiGKvqG5svr5",
  "key18": "4uN2YHm3yKAfBupUAvitRZJ5F4wnyYQCjk6UMGYN6o71AJFSp815eGA89Mp8WwFutN73A863WEtqsyceF81ZikS5",
  "key19": "27JT7UDMebQPewfr1iVgor3Efkbvcuu9KcJzDHKSB7yA1tWSnbxX7LJLAwamBRYCEXi39CThgsYdQnRG1GUtpXS8",
  "key20": "32SUyfCMsxbutMk332J7XvfWd7v8Ygj3KH3sQm6crJ7kQLfjmQ8VmcvFboCRi4spqpe5yiN3KmJgW6S6tfkQnDLQ",
  "key21": "2DFGa73BBT8x5kdQXCHHmatexPFM4Z31PuFsmSebPNLmvApPveREU4yCk2xo9xvbyWqqkp1dnP7mxtQAaHGtdoC2",
  "key22": "5afGabXK2LjDYS7EUhQYazzQ5w34ERJUzADyn5rEyiN9WVk5tc2X62HN4sWnugtaWfTUtKM4Po6NNQd3hxsDpXUd",
  "key23": "3EMR2zXEPWBbNitNxSJcFGwsZKB7Ax5Hh2QPrPPQ8WhtkifGvHfV77TkFkdvP1DbgCCaMhNR3BSjoQdk1QtKfhoY",
  "key24": "2jysHTLuUdYtcmLBfYau7RNFPx9RWRVhTdQ4LMKbwHWLZBTCNfat5VRiYrvowdc35KwY6F2G4KeKHhJNLdTqgsG6",
  "key25": "4zcEULWU1y3LQEB3QzK52e3VzdtbYzTGLiv3uCuN5yz1VKi5MTpxcxT6ZqfcEfBE3exxjPPVv1LdtKBt2Y1pdHsT",
  "key26": "3xfnHvGi2UxTJwANhMra8rRz8RmTDhDVXpzP5Uc5AAwKU3CNP6yHRo6rhYhT6GqixFABLAAbaP8mWmCzZJnYsaLt",
  "key27": "R2zwPwJC6CeXxyDYuB4pTPTni9PvQURwJgJaDehjidbLpZW6BHRtDxfkfdAAfyG8WP3VoP8jxUPiyM8XhJtuGVV",
  "key28": "5FKo66S5mNsYkh6kShoKCmhzrJh4JcbJox3DWMT3Q3PpRGY9XEwTvHymsgVLF5BhjhPxE8AVA3w14qXYU5tukhmu",
  "key29": "2R9UYXVBCn4fGXDog9rwDQgjtTXj4GhefpkQkBuAgWh7dn9FSZcfwy8nxjk6DxqucxSSwaZY9Ff7bHgBv6FpFPit",
  "key30": "262SycwUXC98XSybKM7ajpKLfE2xE54dSQYHTt5RodZxtuK82dWnL8pM2CHbxsX8tGVf9KYn4SXMXZt9zcdsJUbk",
  "key31": "4m7D2WLsvEoP7HNa1pQSMa3GCoKmxTrSUwNX3RMrpTUicbuJkCGzuzEFQwbMEJhDsQBJsTkRy1CGAd7NJ5TipY9D",
  "key32": "5K3RuJGGsUrFSb9uUbkPE1GDRXC7NntWEts1ZwofXtXfX2C52T4mv6YTvu4p5TTT7aRq2zNFhbCiDWjwsbiZQDwp",
  "key33": "5nF9QKuK28jcdPYh5SCH4pWp4vqD76iHQXQ77CJR5biPjvb5vFfhGxb39eY7CtakrzdM9Uy61XpppE7cRkD1JU3w",
  "key34": "21ASW91h5UTRN86hBLarobgtfWygfuv5xEtwsAQDpS7yDLeBuYNvzHRov9tYaDMQCPYf9Knr7uwiPjstNyrohQDk",
  "key35": "hj7urSWCV86xuX96ma2AjSKiowu3ku81uUnSpbyGmRUriBUqBmEkpBWihteWoftcinLqdPhpXj7JUbhRy1dx3b9"
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
