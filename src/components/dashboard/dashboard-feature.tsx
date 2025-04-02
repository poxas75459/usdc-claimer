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
    "pneGe1vYaw3zJJVu4M5R3qGcehpEHv3RCKwfNWHtbWb3u5PWwqbGkr3AfttNEpQEKbD1vSEW4nxKJ641ZGsdq8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CrTxHXPvubFdsYqakUDeFMed1dRjn2BcbBbAqRNgEJ7MNd8R6ZW7yCwzh72RL2Qgq7wPrfn7RRRqvUSfoSSqZW9",
  "key1": "2K3dkDDJjyXwDEzXqgyg4TecEqpRywBqwMQJDBK65r7VXQWSP3TbDsnCrgW2d1SJr7JEaPXRTgB7otjd2oCFoXPk",
  "key2": "2PveFxSBmv3wUcjKkZMjsL7CY8bs6P6sLRC5mVpGhGxAtJdtEDDCSQGVfdgzcd8wUNd59o5VBQ7zdSFud45Tn5pr",
  "key3": "5nxmWWmHGn63bZhgn5f1zTLS61785mAhN2QPsobpC7zc6VvrRqMsP9cqhZoFe5X4qZqdczBnGkQTjX6y3YrFDAwL",
  "key4": "5xeXj9oqxDpPZUo3cg6GUdmJHRVCWCBTVRhFhxd7Qr5hMp2e4Nb5onhNHy5GGtCEu8XeVSvHQFho68kxbnQfpG3M",
  "key5": "2JFQhuFRseU2StsJdkFTarWsAd53v3gEifmTdiPEBuJruv1YXGTEVufFSxkcnX3xbGNcWDGxDtbqf2oS7GSfUTBU",
  "key6": "Ppy2zQnnhBxGhTrsUVB2V1QAy6HWsUHSrfWsNJUHbwAFHAVwCkXZbVudE5S7CoWNsBPzzJuD5jvmJJ9nK1AGV7Z",
  "key7": "2FpYG88AJmWMumCjKVG9dXQrxYD3odtvttaT25j6Dphxp3Zphp28qxedWgzYaMVJnUEAgA9LEMaauCg2P8TRJeCZ",
  "key8": "4X9SWdzvTijzMwA3BjhBisnxrtye9fJegfTyRnaAy2v9DBrtcAAxkkfWc9ghazgJfpGKNaH489CJZobWUQqHwPrd",
  "key9": "2RocHR5nmTkmWaTEfFJyQzKsvZQfJfwXMFKHfUGv9QdSuwHpiKHfKSZuAiagg5jhFLBWGLtgmuTpnKDaVTxx4zFn",
  "key10": "5LhFkwA2MTH1LoGCt3yKCgQEzY77cq9amcuHAsFQf4tv6R5oDCXLjJWaSrFHhCmoCkFWhwe47QSgVHULzCJCTgbw",
  "key11": "5UoLXt8SYvo1ABK6CYfv9X4XWeQwqLpnbM2mXeUTW7y5cgBJ2aJANNjYhaRYh1qdcEiAaUmdP5ZDybNGqBqztXXD",
  "key12": "3XetJFcaZt8HgPw3EGfRVUAcKSPAvQSj74gN7VPa5C3913Y9DbiZ6737E8uu76MQQ9Fp21nY6QGpEpY9ZbJKEq3w",
  "key13": "Ldt8zh4fZ6Q8rkQuB267rLDpGhgW3NVpANapZWjUZFgni2s5MLA9Q8sd7BawF9pE7rZmBMQyuJkDXJVgw1aeoXc",
  "key14": "3rTQBkaHdxPT7w9q1vEBwKKk2BJ4c24Fp7emftb38HZfhWYNcWmgmz6kpJ1wYjNndHGpL23MoXQqptEwb5ZH3Akq",
  "key15": "3BThjEP7CNzQRFsHdYDSWBwUcMrmxJyRaJjX4VFFevcFwfatGLeegxk86itWgrdsEarMcN7zAaXcgB6RuM264adS",
  "key16": "4r7N5NrJtucRxQHPuUNLFtXGTVrc7gsj54dqXphUrEUJKrzQFBe2EtmzbUKZkuabsWonb2kFq4ebZzJvt5K7mjSu",
  "key17": "3NKPmAqfpjXoUhknwZTHaAn9wiTwHkw4aWuV37rfbzRFc7A9rRuqCy4md8f9VSLEMtoFmt5pzuaAXF7WETsRrJub",
  "key18": "4g4YdMDG9jXij2GbYWzWdobhZA26EwVFTKy6Dp9RL2V2AdFLpkd3tT3qZRJkDnZbYCcn567GBrhcVZzhcE6XBAc",
  "key19": "5xhinofEm4hk4xgTVErxUuv1a1aXVh6eLCLomK3UyPoEJNimaywp2NmL1dMvccTZqZK4ab4MQfvbmoad4xCeN3Pt",
  "key20": "3YodFg5FCJwfBAMNXt4kLBVzAwe8cno9vXXMWWVNzvgrUK2tmEqkCvaiFkLTw8XEvzS2zVw3ubT4MTBnN3itX8Xf",
  "key21": "4TYJwRVQefvTuVKoXqXLGfUn47iXjsPDbnexHbYsgofYiSCVa9ixK5UTxfP28vDX8eb6fVFPhAfUh7m3WYzTpzSY",
  "key22": "5rxdrJ4sDkTbT3U7QWnSQHgF8W119sF79Ryb6nJvPmiUGAZt2EVCr8t4RZERoygemghjmwvbjx9187GKtBeKnTi",
  "key23": "5xKaevtXgva1MWPmfDYfbNLS27sYfMbMpEnY522tHRnCMyBX4ZuHATZEUacs4ofhiDggUyDGwAHJsCLQB6WZXzrJ",
  "key24": "72rRdXb9Bj7z2bTMEnk2nVXhMzYYriVX2x8ZfQTDPjVsS6Zu1wn1gimCs8xQRaTb3jwbrFiKR5mvSM5tfZtomoS",
  "key25": "3BfrvaRAyashbZaAhzHr3FXFLwHRsFLVw1oZCj3GzSoHFTARKj5MsdtVPNsUMxWNZpcpd7ANHdzQ1yWKLLANXS2d",
  "key26": "3kG5t4nbWn4RzsDoKTho1z1m2N915J7Yro8gKJMamzE1GNMvwy6oEXun9MnF6ovyRkutGdPa22r6vbGSoSDBPEb9",
  "key27": "479CNeyeFvjSwTxKhAzPF7ieQ8wxGWEzzTaLGsLwJdb249Unk4edxbrshg6wyHnWPTRxnizrvViFgyaSUezTB46s",
  "key28": "5Civ9Z4Vgb54oAnqEmEY4b9kTnHk7SsiyTQ5KeHG5gAzo5njvm651HL4ofLd2NR9o7kTkL9jLezYCLU3kQLbpkN9",
  "key29": "2n3NXa3Y85TFiDxg6Xc3zoVTNb1AAYKmuAUQ4hXGqZUSGhvUPKUZxczdw2B5t6aUM1qVbXdWg3vHJnuGQhLNz1Dm",
  "key30": "4yCvvtgLExny217iAmESCGjHiyYSMEF9k8t8f4KpA6dBQRmjyrh5x7HJCNMJBksAPzeT85h1RLaqeM2PVV54DKJ6",
  "key31": "3tjWmBVxWiRuWGSysd4pBiMiYhGjobv7vcNKx5nw7fHvXt6wisyyfMm1vyjnr5LFLq515UAMydjBHRVXPFujuot1",
  "key32": "4gZ9gTEhpdxDYZpRY9tVTeFSdtaN19SBCa9Xhci6PxkF5Hg5jkTMYWeGR4Baexch3sHGUHKKkJtWtS7cLGTh1g7n",
  "key33": "ysZJJnJb5DkgSxtt5NSiuf3KgbCTMuEpQZVrK9cBMbJb1LkzEgTcbQmVSLXLZCQGBkDyBWKwgxjQFdEcyCJ9ZBa",
  "key34": "2wPUQzb8jC2RFvkBp9E7Kk2JaVwLFCGYBxpJ8aP7s2yq99UFpyiU9LkNHUwVe433EM3R3i7dHFDyK2jgtEgeJpui",
  "key35": "5vA6w2CY5b9iStfN6sjZY3U6aY1RkFAu41zW2FamXnBBrRBmxkM3ErmNPHhVAoDNFk2qBydzVdh6Da5ZVDfh3srj",
  "key36": "2aL9YYzPzSVfKVPRaVGgxH83HZ5TPGbVNcaQ2jGkv4bvMxQ7dgwwocuH19sFFyCmCjdtikj7KMtfEUZTuGz9izvM",
  "key37": "38QbYBcMsfrvW7xbc5eVbD12h3g3er6nokoAc3ey6yQ5ZxKD2QjPJ25z7vjwctqSvbAUg8XCzU6ZntUeFaREYfEd",
  "key38": "4bvsoaXJCngVq1AoKyR8xjifJEifU7Ld9poZJGkPZGgco5UoL75cnMwZw6FvreStbZZEuNpUaWCc59FzvrxiUb5Y",
  "key39": "3AmSwa4saXThymekUtLxZ8aJHNcwRCGBfYSUZzEME1m6Ygth8RrbtwiibFhK3pZADqipCfRaAoDdX5SXn1gR5urn",
  "key40": "2n5XgN4TgtPFfiXL7iCG6oCgtw4LKkhuggru95Xdiugt6Q8cZ7WT7p5CUem9Cm1RspswKsdjpaCu5HKMhd7tmcmQ",
  "key41": "4i11CmEaDWWGVadKtny8KiwfeTCszzQuCjs2J4bH9k9G4BZ1WS7whRtKbU54gHne5nk2vqvgpGgZ5hL6aAfiHdEe",
  "key42": "43f7Sc8q8pHZBajCWFigr2XUo44QnTKgKFWZGhN4jZwey6eDE81yVQfqZNQv5yRUU8tfjEFKGoQ3aUsuU7FRRMZW",
  "key43": "3UqooVmc7L5hskH8Wqerumu5MQwmeHsvihHQmewhDPKytgcbSMPV6cw1LMM6pmNo98HQaeomUQHn6M48xwcFNkMB",
  "key44": "56HhGpKS3LFWouAbwhYovh1C2BLVJHCeWQ2UFVhpwZq1VFAjDVcqJZxWJCyBZcgjvo6QGHeWg1fa2KnbP2G2Yp8u",
  "key45": "5awqCFGp873KzYTj2ysDffYNSBMUPJyaVihCfdoGW9FbRbhsCTk5RbJQPk1cN9gziNhKwQGoyBFUqWMEf3XPP7Yj",
  "key46": "5jWbHVmvP6DPGEW5G2kjN2iPREzxRcTnPvxDf5eVuhEWvUN82D61L24YWBSW6YDXVdiStYbUTH5K3XyNJsEbj9EK",
  "key47": "4u9M2kaj1vefDR8rBdw2cTCN84TM6qx13udABfwatxSKaQCgXGg4aXRo2NEpvhReeD9H3eN8JxQ3KzL9VL7WH3XN",
  "key48": "28bPm1BX1M7LV6QgEF7pzYLK3FQ8vU56SsfuRrQBYEuvJrES7kMn4Mt7JjyQu4ibg4x4aTn1wgNP5G3umNg2isXE"
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
