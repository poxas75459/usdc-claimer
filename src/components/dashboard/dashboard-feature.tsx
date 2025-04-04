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
    "2tJE5APbwmAcdy9SZeghNtvt7rNQRYZS5WsF1aY2PAibkqcLGxnr1MAGcwPbpRuPnM9J6MRJTRdmYhmcUioGq58e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fx7HwHCrhmFVQRynvkhjQEHiMUg11eWXXduhMfKRZtL6ZSPVs12NLTe7boKVU6dTEYKwvqqHSzqrt2tPDAD8hvW",
  "key1": "4fdcdbepovdTEmZK3eQq7ce2WFW4VCjzfVfE7cgy2WxY26ztbEimjR2UukyQ1dznYU2racLCgDYDnjdYK1L6fsbu",
  "key2": "47GLTdsqmFnVsnGq662Aod5PyAnQgjTw8SMxbfy5WWsDug6tVSM5mYvDDE751tihzVJ1PdTiFJe6xu4m896U2PdS",
  "key3": "4bZXi2s6W7PvHeVS17hRpxC3kz8vfBKtUVFaMEaFy3Tp8P4qkaDQZLgTHL7H3v53CMSWe1UVvqTkgMKYRGh38n7H",
  "key4": "3mnZxhqW44cpJXCCK4XVTdZkzRjw1fG41J6wGDfry9dUxaMiQk4ZUtdgPpU2uW5fRX1xjyqFMuuyGPY6cMRiZbZg",
  "key5": "ookCwQfv2PvKw65mCEZhsCP8moKvRRyJ3GgiBUcWh7Gqp4xp6wVMy1kvKheAAqz7xxHRR1Y8m8oxxVnd1k48YyK",
  "key6": "RFZ4aGfxw7QNi4nf1z72kGFybjsbBvfCbNMM8d43Q3H8cT2sqeqXJRykA5ER6U4sVtxSFRh9hnLLRwyzpsigrQN",
  "key7": "2Ahmup4DJLzPsvtP15Qs1MqoPEQFL9JA6DQPbsYrfhw5NWSR2puYHV38puFenUzCPyTndzvQbxA6J84A4BWvMSvS",
  "key8": "5Wm43NNKPKwXvjaTRmjeF3QFccnZ4hqce35TEgHbAVKcSvB3S8qruTbM1uUcDGMsFY5a15cZcZva7tBzRoSJhgP2",
  "key9": "Dkqshj3uE6kaPj735rnvyVrA5darpGhSytr1KwoBggJQNubbsyabhiqmAK2nemeoJ8kWob2k6spDqexTPAgNXSK",
  "key10": "3Mxz9s4w75bZKTFbW8yAvRwSDkc4wRWW35wnEjBqAdGPZrqJXQSjSF5HLiF9tpMKBk48r4ZCvmRckLB5cnmpkDZy",
  "key11": "624Tz57isSeG7Ki6MeGmuSoqcR7w1yWVS5SvfyqpxLF7PeJxWZjMBtkiNCSUbpUBRHSeF3KHA1xA9tnAmBWubuad",
  "key12": "3HF8qeZks1hhcMMYomHS6jyvCg34xMwFEfumseMbwLuuYPWkksEaz7xiH4HCTW9xLj5Hx15ebSYQsSwedW1Eee8D",
  "key13": "3wvWfA1feAfMagH4j4fzBb6LKhTfkJo2eveqGRmfuhF3aEkB6tYZLY46gU1fH23RXHs3wFXAhjv9HqCLu9aYgR36",
  "key14": "57Pp2u3HSQ9LPZPSDLSLMGhe5yMHNfpppVndJiuqNxAqyAZGze5FhfUHBgjiv5cKmXpCScoMccQ8YjHv3ZYNw25Q",
  "key15": "4nMNRL7CsTCTzzmTGSLRPqbUXf66WyccbR3PGjtt7qkTuCZ8r5UmLWXkf6XpxMeaxN3zYzFV4sefWAn7iJ2cvnjs",
  "key16": "3CUYE8dH9iftwEFKgHkibCABJ2VxrMR4psSJdQ9yHNFXZ8D4yXijbph2f4nV6VJ8Z8ga3YxuSPhyHNHGcQaP55mA",
  "key17": "4YDedj5DSy6z4o4vdkCsyQWqm7T8gCJ6UQPuwrUzdrF2NwU8WUJS4QTq7auvuo9zYQCChYPJbkDKHhQT77y8ddFX",
  "key18": "518UTsp4JxuspTp15FkD89vnSiKfawgKsAw23QzHHRiTuqbi8KZffeZdcuArhY4zYjTPybjFtVCJbnvSwZ3AKXoN",
  "key19": "vaqyVLV4ZBdbzHRTDKZjXqxpSwgxjxHmaJYAxMW1uzQYjbWA5ymq3HbkUJxZdz3bemNaGYV48XkXgP8ecswUHUs",
  "key20": "2mSSoyziiVCYeSYYgLnLkPfr3xspp7HqjxEoixnoSthaoiBHyc2mT7eZ6mBaCQu7mtaQxxDruvkhio5naqQH34pQ",
  "key21": "2vb5dq48PZabPEWtPQe4qt2w3vbsEp1GCncj8TGZ7DnGVXLHwSjZVhHVPVpoifQd5cHzkEbZFMuobU8xQdVD6v2o",
  "key22": "bu8GBPn6H2oRhvJyn6cxGoZGRT3tCPBDsPtbbzp4AySmfwFKPBLJYHQ4R8SFCjQvdUGrAMseCiHSK25NdgZGQm7",
  "key23": "29wdCQGQixwhuy8tq18Pzwwo8K3qpr7gC7xRQpQJeb9YVjpxRqgAoLhdEyahagUncnJW3CCk1urQeqH1dNyXc9Nn",
  "key24": "3u6TX5CJaJL1CSQwob71kgKs4TRCuqJWGziM1ATwbWJUbWpyafrHtqq63WHpYzdfn7HNC9wHDryUQfLWt4AXdC3X",
  "key25": "369LL3cHUvDAdSv47L4Wdz8pp9LywYjPDGfaZJA8B72goE2B4bAsuC3NPBn2LgtUq3EhfBABgkP1xDvEEXfQyBKU",
  "key26": "4bMs8i1yREE7UQPiM46NAxGvw6QWNnuGHv3tqiTYqnUMQQYfAaDx82D4VfYsAYqNPkgtg5nomRh62cmYTty2LD5F",
  "key27": "gfTbwEbQkgR4GkP6updm6Q2t1tqEW5jek7D4o9Czv8gDkQeVuJHVohU1xzE57NmgsKiV9YLfiVed44KEdtikdag",
  "key28": "5gi6wxoS4UtrztpKWk6CkpUFnfF1J4qiqnbqmcJveMUniBEK8UHn9RRKZvAUju72yzHnQ46qzZyD6kcFEiC7Ly7t",
  "key29": "YLvVzZrDc3dHn9YF6vbxTKuSeH6AReFvKFA5aqbFB2aSe4gnbDM66kadxoJALyw52p6KeCW1UJQ5xNRq1dqPr6h",
  "key30": "5bnbsKCTZ88ZVHt3wNXEH9QRdPcMAY5HCVWZvCAtYbdg4Wi9dxwA2GrKwLK2eSP6ABJLrg3wUbMDXSZyBPGo8unV",
  "key31": "2Tzv1qyP6vZ8eJK5qcpbf9mNNHpKFsMZe1WeKm5apysPKuWUbtS6vRDrVQGm8jDTHLjZzjg4ZYvVHFyaTvbZSD7Z",
  "key32": "4koDEawkH4zR6j3DbTpc3f67K48AGBv72TTk4mBQpFRUgCcVn91WBfr1i7GrApvBpdmn7TukEvJ2ogJHUy725xVY",
  "key33": "5kJpxqNJtCkWDvUFMjagY3b5roLeADEtCZp9bnG2KHhcxHjWYRMvS9koCxMVtjEGERuzbaYKyD1LRJHN2vuzBevR",
  "key34": "nY7i3WGyLi7hEoGg9Mu2ygLNBNa2opqtipUqH56pWiweAT5XkXoMeCcc6AMbyWCLwjTEGWzTGAPhZ8Ue4zfv98Q",
  "key35": "3ykS3nQ1bGZk6kM6WkVKXqKgXJf6Dt7GDN4ojQ9qQBmRJC5vpem9uiBneA5BQmUP3JLouon7aw4Q19rtAjJKoj2D",
  "key36": "54zMAQUfxNHyvBrU9D4HMipnTvjS4nh6RnTDzTNGokGND2jLmtyF7aQXCVUvL25pXyVpuX8ss2ouNiXucwnszhWH",
  "key37": "5q3KoJ9VJhM1QUcvV9EgQVXFoAmY5BVtuSvcnWrVih2CnyfkqZfCrBScPxGVdUFw1xNL5m4XU4g3b81qsRKbNN5M",
  "key38": "5Bf5bpBdGLZjzTAC3UuTDpMc5cJoKC9kHW2G8ugxJhpiBHVHvp9tkvREWWyaH6JBNP3URRRmVWzRY2R3uAkLaaWd",
  "key39": "38J8HCvwoEZbNDqWZxMs1MXWvD1jRJMn4BFNdRy6Jkmt2QVSVxcf2qqkEv9GJE9Eewt3N13XQtDNugM9fdmWFoYR",
  "key40": "4diNxrfnWf2Kj5EwcGU7RrZgvTrGwdkXD9aw8mwVRBQwGgnXLdAhqwVVZv1vn2F6U64hjDf6p8VfbgiXKsDtZMsw",
  "key41": "44L5xrtM8WUcGKae6xAgtmTT6Nfg8q14zAUtvCCqtbTJbvKPnY92JEbzBoZ33GrqzJppBB886vryFZjXtN8gBxW6"
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
