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
    "4K8e5gp3DUbZBax1Ky78RUcr8nuA5UU428k29ZdnwLWtFiK3WhHtXJVCaHfvyttUVbF3ASANVJF56Re4EZVVEDLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYPYacm78Hn5xGpof9FFb82S4YevSTaqDbF59oaUFWfamuD7PyrT4srAG1cbdVHCtLQph7NC6DWXfGZTe5hPPV2",
  "key1": "nzfbhAwYtyeccxJsPkT5av8eb7XyQymXBqqPx5y4U5tykfvghWMs5gYc1dnPjwRzyScYAHdz97CHVr6rvyZWqUN",
  "key2": "3HPDpnpg6icrejJjGsrQfRk6YNnuVfdstBAvMtuJaKV4vUxzbuQE6rtQBrmEphxzrB9VJVaNTHTJqXxFeq4o1Zxv",
  "key3": "tJStW5V9E8gaGzNJu9NDdQXordHFEFRkwv61p5iYsFiP9ehjAVxiJuKuHC1S1UuZQerAWpP3EHEQ9AEyFM4GGee",
  "key4": "xJGHNNnR5aEu3ZK7reVSf1U3CwtNiDu7EPHTzW5unBDeg83qT5dxSBfoUUPVBiAK1vgX5q3ABVGoqfz3SvNaieH",
  "key5": "UqjNAv64cbz8AP3ttpzh2JY34TCLcNLAVVFswHScjocnLNkXhKrnqkGyDAk5sddG4vpZAQC1y1g1sdWx15Hk7ap",
  "key6": "2yy2JDZZEWSVt8EmsnvF2yammQswdpR1CCEUkDw1eLUrMx4SULFadRAZEbmYvS4e3rUNtSA2RjWGouiAKnLRg8Wm",
  "key7": "5y7zg7wDbho9AYERAnqmsSJhmjra5L99k9eytGtkeAM9w68rmWVz1jg51yRo8BgsZdNMV5cTnbaLFuWRRZAkLL1p",
  "key8": "2Gbdk7sjUHQjbricB3UKZU9WsRHxcEtQ4WDPxsXfP44imySFjuMvhibWWsdrm8JFdPEbTcnSgtdCYW5usnc1qRrG",
  "key9": "5cNzmK4AFtRFGyagarsUdXvse3detnJcKjjL6keFf73JzsRGZKSMdeEMhRv4oNWB8U5ZUrAgA3ZEEgAq84P192CL",
  "key10": "4PFQeRb5F2xQmUQTc3CfFNAJ7BuUC25ZsXBe9TC59KWAiFYYaCMsQ1bQkHnNciavmd917pcUiaEUbVcPaXn3VgRJ",
  "key11": "5g2nf51rFRMo71q3EkNSpcbtWSLMJCcCSLRuk6pKgtTXVVtFRWkWzWRJYVm3CK9bGi4qQ5s3qBDUd65ZZqPiYz5P",
  "key12": "2moZjmLjirkaoLuWhPkmkZgP64yn1E7UQ12W1ZsZSTKzjKUebrCEc4kBoPxN2Zne8zCc1sgUweqhJGsjbQshwzKf",
  "key13": "38GY5KMrQE5ABEw6AX2beH924RvBxjG6nNenZwn2rRRAVQd4rqv5nTyr6s1cu5iDJnhiFYmRYWWmrLeykmMM141F",
  "key14": "2TGJaaWoXVs6Em4pedK6GR8TMcxJafppGYthefNbQc7QKZivbMoMUUGum1QdYFhhQFUMC6seZ4xPuZHT72vmoo8A",
  "key15": "2mD3zs13yRZoqPE13RKx7khuTFoyzCS3dSzZkp8371QGnBjZiW9poWVhiFdnUQjzTtqSkkEwzzWREPbVNjaNSTwo",
  "key16": "3hYcYXznvvFT66HWeX2yJxkPag1UZSEPBDRN6NAXMi3N6ChRe7A5oGUCQPMamvzxVw6ANJZFwVcvt7L892ssYmzU",
  "key17": "3U98tDppRwqCCjX6skbNDgRb9ec7jzJRvT316UzT2p3WaV8X2RkHSTJA27QvmYB8PR9UvoSsszCMDRFyADGXi9e3",
  "key18": "38qEworZpFHNbFK82gxSk2A3ugSEdmsKKEgaWNQ19u1qi6wJvb4DepyBjW4KTTCxLyjLo5qBdGvfczyMWwtgxWis",
  "key19": "3YYGheSzdYknbYYfhviSndswzPLn7vgiQkfuDfjYPKWBmm7E7jgdpfqYJXZvTyUzrJ3RwB14dEdLsesPrzG5DLKx",
  "key20": "3vZwSLWBU875fPuZJXkbey6L2H3WPRC4WhR84EQnWZpn8Gr8GMg588ij8KUjf6UWDAANWwZktXtgBpwE9UvmSd64",
  "key21": "g8GQFHv77C8fHLQdhNPH98ERpVAHnTosFBgCkrzUGdvz1J5c749XQQzbjZT5Shfb84SuQkuh7qd4TN9bdtRFCVY",
  "key22": "46HD3ZT2U9VEPV9iMyWfVuayuxWremjFNouWfoigLwQkbWsv1QzpxJZqziUsuUmTLP4VQ297hfJ4pe2GZFQJHAJa",
  "key23": "2SeGNcpdioKPnaWfT3EqEuVfRYHaWndmCh9JtnV9KCaGX5SMg1Xs2c8uWG9TfGHwuJV2fCvRa2WYXYfD9bMtYMds",
  "key24": "5J8QgryzbQfUeGL7LTLFN8f4XxGruHSyjJze5j9wPwxfpwN8FnTa2qry6cKVCwkCPEdP6mtFiBHV26e3b6sRXvRo",
  "key25": "4oJJ2Ngg8K9a8YedhvbWxfjtBwVzLej1XHKNcknXZAVWy7LKEDT8PdB7NAdu8SQFerwLj7YAH1HHgo1kVxJD1hrD",
  "key26": "2fFtzbjMqVcS83eEHjhzo6HBFDtUSH7yj1pVm7cv79gHrw7wAxp15xgwyKcwQTMBFqpDwoaW18ELzLrXgJDJ4B8B",
  "key27": "FAyEXs5u2JFTYvVRNkT9CWSvaVY7vwoSoKhR2HBk3CNKELbYz1h7DBfNGJKMtxgfB1qx1o1HVaSiHEDyrhq9Wz9",
  "key28": "3N8kagNZcvL55f3qgbxxa1Zf4x4Wdnn4r8y335ZCnthkdsf69tmpvZCXXx7L5H6TWJa4Ufp2bgVErRzoFamS7SWR",
  "key29": "32Bp9FQqJ8estSwxYucqrNRk1YWdNxh5XTR7epMP7CPDz5uN7ESHSLwBJ4kzbbapisoFxhJjaF3vowe9xfhtvArn"
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
