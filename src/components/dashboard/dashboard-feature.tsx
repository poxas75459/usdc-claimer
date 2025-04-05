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
    "24k4por7HbGsaibaVCdgZ8jfmVYBaDrdyEim4vEU1QW7Ag7ZpHU4M9C5TEiAyuxa5CuFjiYmh3skkREY6T6zZLbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v42RkcoJxxibKd6z9VbSBP7nETZpcCYfYL9ucSEz7o9enW2tzsY2wRRTJTFhg6mmVU4RoAP1Zu95q8uFk7ZVqFG",
  "key1": "QW2Xbn6KvGtgm4WER95ePGJhw1RjDGjmXxSjKixhYuYCR6r4SGui7nFNbv8YiCoQ6TwonfX26ZZLJE3TP7qmbim",
  "key2": "55AKjuvS4A5Wa9kCeg426VYyuXzqshtNDFL9n21hk8RrcfV9Y3rxVpqsvRBHgXTJ7aM2ujJYLXcPiDHCXc5GimEB",
  "key3": "3j1NWduTJ4L97r1VYTAGZMrvmhZBx4V6CC6ZQPh46jzoMx74KSZ5HKJzEKCZXGXngvr3seTNMMmhhvuFzxA8hVmS",
  "key4": "PUWKUvapubi2eBezgVa27TKKg8qLgbAFvY7kN1gE57Y1gV1gSqeXWT3pALN7Nb9UbECbaVi9wfF3jB3YhZe9nzZ",
  "key5": "435jSQ8FCRrv9zrzzZ2csSqDbWA3SJBtjdEEUENSEG1u1BkqAuyQimyccCCcQhTKAs8Aj1BU1Jt8geTrzCi9oT3G",
  "key6": "25aLBoyPpuV5mZFumzay6cHEgC5BC4YmD6Vs7hPMyZZyUywCQnu8i2LGigsS2ZBUyCJrQuP5hnPwC8cvscSicp32",
  "key7": "3TNwMkWfFe4NzW9YkHHWKBFbXcksHegx44TcFhx9Hpiz8pPaY8DSMfErtCiHWbmyEWoV9ms2wWGZCDLdbBUDuDg7",
  "key8": "5M95iQvwciZRfqWNuBsTg2JFXY328xwVZgyriqwnxAeiP76yUYjSoHooChDkWxWtBqZnZwK4ja6zMN1MKj9vhdMi",
  "key9": "4oNMnSrNkpZ3C1fL8NnghRNDHa9kg8CBtc4X452EgVSQdoFrRoGYhYB2rHovn7agAvbbrqVRFNYtau7Fh9e4BCa8",
  "key10": "3yTQ6t4G3RFvax2NjxM8RKNnhUjir1GopLU7uc7E5HW8KnimjzLdk8LfKxwXDnbMxxeBmseBacUpvwpGWDheFQYm",
  "key11": "xFk2jcH2Voaeod5HhQPkt2v7593skiYMWjssesfKeMo8KZDNWUVxDcH2FpzG7vkRRWyqdCiwkfMCaNP4BneVgHU",
  "key12": "V6CoCdDghvGuvjqHLrRwBDhWYNX7dxTTfpV1g5vBeCnsGLn9HHiXaNRs3uCMhUYUV7p9CJNmK4txXx5w2XTwHRY",
  "key13": "5wXw98No1VmUfv2SuP4C11rdfDHgtRamRHuW9SuRhtTxYGtrViP2yvRvRBmaDq3TZJgxTskeoxMbkgqHBrrfbdhM",
  "key14": "wnDmSGUoE7bBAWu1Jv58XuvxnT2bkfSvSAVdMx5QgdGx3Q5D1pz9V8XG6c9rrupeRcpYzdDxR2STeSxRCVpq8Wy",
  "key15": "5dVcxUYmHnvKr1hDGbus4PNG6Q8eLCG3CFjXf9xcftY229NeucDKV5f6bh7QEYZxZDEHW5aE4GZd46FYXJyNNQxK",
  "key16": "zaBhuBjCEFCKUP6WkCCxMcoRB9sbgEnq7dG5JPPGX6krhccoFsNhX4tanWWqdHupCY4JWxBbUf2kGuepMZwdUKv",
  "key17": "52XZNwdWidhG5YrHyh48wxsQNXV5QCazAKpTABj4UC7zwHqiepfWZCoEiiR3tQwxYZxtPwcWNF3Ekhmu6ioQNB5T",
  "key18": "P6aGmEdc2iNUdD1VsB6QCJf8zRWBA1k9bUHRn1vHezLdrLyjbuU5mchH2s69BE6SDPqy8WK2BdhGMMQRZa4qXqH",
  "key19": "2ExMr933iPUhNzTCBYxA5MVRsNmzQDVtkL3KTQ2Ag2ZuavHFQJFn1woYCURj4yBtzjkRm1cTZ7yVjj8np84M5CNW",
  "key20": "pgtTKf27VLbhpskU7to5PJHxTNrvJeRa9riDXZd7FfBZWWDd3AhYRX4JN6oWqqGhPd55m1BYg6QJrVJn8JeebjV",
  "key21": "35MLQEGvV1AyGUVqKfG5r3vG9hL6D3W9TEzARuXhoxkvxpWUAtSRngVite6MtFKy3CiwhHnDfbkiGbCJzf9wJgPg",
  "key22": "57uWtvknqqqiX85WyiY2oaCV5mcbgaXQbWuydKSaDerdrEfVfgzp5UxqVDEgD3csvRcvM7QPT3KvPKPCdUL9kSz3",
  "key23": "k3ds6rRFEfPgosAjdERYg7FjnmopAtieamh1cJHXMHTtGYdoaGkDj2yyHkRRsqb35KeoxGT89kt619GShLcXq81",
  "key24": "4BbPHhrqyqYCZecEMwCLU7VDHVSNYx1GJwLjpZNByWTKFnMNA43x8SurShhdpWN9ip9xLDLg16DA8KjBmM9cNnbK",
  "key25": "zKfLWdVgALbEWsVMVP49kNG7pa3q1tKSFUuT2CNM9dKGpxjRLMQnAb2CSrFGU6WJRoLWADzV4zZecEHkovCUkhz",
  "key26": "44wFBB2NihrSdE7VDYkXcnYLoQJLrke5TpxmohCmwjHvfRwbqPupYDnFE7bs6ULsuQT72ncA1LvRHCeYW5msZLqw",
  "key27": "2jH6o1tCcuA1Z219SrbLc12U7sVQGdq8Cyxr3sxhMYqpPM5bmhWv4K4jv4g8s5thsnVF5RVQCA3EQcXb54LCA4yi",
  "key28": "49zbYZUhBgTkWjjy5KdKdCvR5RLEpTXYZVvcTZCUPf6GzYFNxSscS1vVrPHY4wbxfrgE2QSd2x44Z6Zj4YQFKqni",
  "key29": "2uZA3fzqKGrMxJsVEnoKsCAW829WuDCtgRZWKGbwVXeQ57pgDjqSTGot8BMyBmbjTSrRyosjoQ38GjDTur5Lb9Cp",
  "key30": "3bk59cE8awf23WKAWG4f2pu1p3sQffnjN4uHAxLSkPrGCdF5H4LtLFSUrJ5q4e2PxiDVS5B9HVaW5cL7bGjkKYjf",
  "key31": "4LMjQ4kjwVpQtyA5jGBCw4ECx3XnbcTu3xxaF2LfCV6tKFxNeGq9wYcBWLpCi9pb9ykoffRnvgP4eXDTY52rd1rG",
  "key32": "XPwYCos94a1ktxc39L8zwCZmgn6k3i8K9WDAYyASeujaM4vgv6UVpPyrkHta8ffyiaamuWKcC7TQwszA4sesktz",
  "key33": "E7fYCKMHHy96SsJ5hPCkfyMLKGMDDTyZxaguDPpceAkRQ4Ebx7AobxuZgZ1DLjWWUZquShJqgAWeAby6kxUC6Fw",
  "key34": "3Xf3fmSnNtt4ozz7Y5ae8KjoDb3wKYRTgNesvqfRXnc7hEpEA8x6abybhWghBQGa8YBEH3MTvX46nMeEYN5QXq78",
  "key35": "5rE5gCP2xVpCZcGomHkyjwoHHwt175LVHRpGg448kfZAMW3npfBs8vmSm3EaWhSqCVKQzzFo3HabFirg4KtYtqYe",
  "key36": "3ELctAB6bBZ1jVyx3DbD6ZcFLj6qQB1GgqQvdNnkExnJPKz8DmBPv5M9Z3KbNWHu2ZNHqDtFfr184snfAcNQmmX5",
  "key37": "4j8VY2rxBBBQVm6mqCUukW4cu8xpAVhm9rVBMUfC6C7pMogh6WFBezGqRG7pZ7E5s4G6hSWmT8td98BdC5MTX4TS",
  "key38": "JJUbv52shhun93QXrXSETCSvHP9t62cLXxGdCNUKSYmUZDbF3kvoh9BKrp61ZWGgFNB4MGbkBtTpPj9xUQHYQu3",
  "key39": "3QkN721NdAPXMt2vcmxdm2ETkFmw9DSwPYXHEaVJTx3LKkRmzDuHrC1WCRQkAoixdHGyknxWVfAczoH49eXC11qZ",
  "key40": "3mtFf86CxXsqz6Y21tJjzsAomwg3hgptvSvPQ1xHf68hK39LEsjqyUmwtCSJSUJVMRJc8vemQcmFSvKvtVWEQS1M",
  "key41": "3ZsKNiMiKNrMVTsjomCh8AJm5BWvo5QKDWGi7yEqWEJxVQhgmzDGgD3mVvbew15bpKRqQZUwjkQEFPnWuNWWPANi",
  "key42": "54sobKWtKhCXbPZY2LPyzCNYx5BcNzWtp7dxGLAu4RYKE1HSDLND7CNZ99XpVPvbcLV258mtfQsnBZXEaFkP2Wf3"
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
