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
    "4h9kbsFTBFZmWvbFU4fVit3T6oqQ6TFeVkFsxfU25X1qTgmamfyWvGQCMrDqyZ5aZpo8JqfuFTFCTLh3oojTyAiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLyUsGebsDquCRucZxDzPYsbSkgyF7rhm5qAxuRd3t4BfVpuvEQwRp7q6arBYU1YnPn7XYpvQCYYkqjEQHU1fMp",
  "key1": "5XcVuZw7qNjbN5dQunhxYbd4QPqxcjiS3JJZkuyqpoh6aewFD7XBRcjkW6bmhM576pMKEXiTK5Afo4NHnWPp9Say",
  "key2": "2p1cHMG3SftL9qwTJedoLb5RnEwf7YESveAipLavaLw3jfV1rN1C2o89o5As8bJxiZFzukxPUs674rgtvhNzsBvM",
  "key3": "5reynndvaLHK4KEDpsScCpnYkC3vEtwgmmBz1crHN3tsJAvJSDWCW21WaeLVAJzhjpMUi2bkmb4d87hYse9F7TcR",
  "key4": "3yQN4jGiP2X7LibcjXnT4BB3LGp12JxzvBb9TB6dXyDF9NLWYgEYepHX5kXykJEmTaDkhRZC2CUgw3hahGiFQzGx",
  "key5": "5b91yMbH8Q1UNBEuAe4UJrStmZK59vx4kTFtuvTwGxZEacVdryg1b5WXN14titrHE99L4uYkVkhZyp1F35txh6uF",
  "key6": "2u7maeQ1Y2tAFRBe3VnAKHAPexr59LRWwvnYXU7Qo55gTiWg1M9a8JaBqjQF7jPvQrLq5cWjFkn5gcj2aZ5WuFLU",
  "key7": "2obvVSt3bkMPicBmSxLAN5CBUCswjqYmMecToVyoryRG4Gas54r4EVrhZeaDuyQve8ceHz55ZnaZBvjoHkiPBDhm",
  "key8": "3uMiYEaLNnGtxkWM8Rgu7J2D1mGTdmB21wGfwFBiLw5sd6oGmA8qkgBcwxvW4F3xVXYHi8cLYvPzoSUGkNzDQ5HZ",
  "key9": "FmEnpxEmzuRArJboYiWjQLzE8VST6ZeT74YP9szcjUatsbvpFg8UXGtECu3AYbWDV3bNPFLzp5aTybbo3Ju1fbM",
  "key10": "3BpyQH33SmKjawrPMYeQTXDouUgLYiTQuauyHzZjWGbyoPsBGtENPWjmUriuNzAjdWVxQzyJvAsRnh4TprGEBUWF",
  "key11": "3y4nvwBrX29hMAVsGUFc58E1xirHJrj681VFyUVvBUMnbf6dkksomV4neVjSA5PZjAWKMdgpG2mi4wYV6gk8caK",
  "key12": "qewdeMropdam2EzLgN23kiEvcwDrAR9vWyAKufY3tdVqzdSJE4szyWfJRgKPQDG8qxr1fbDzJaPRhvxfmmGBnhu",
  "key13": "52Md8j3LnUhpbPvBdW6Q27RjxQLcy7vhjXz4tqigaax8QN8PjQA71y1VYgUagVHWiArgcokTdZiPesT95H3ot3uG",
  "key14": "2H8uQSGWPEHqHxWT5M8qJnWcpufLhmsTFNBQkrfhajJB6zhJkRjMWHVuACeM9P5KhjEvjsUGwXGMqX4KMVXR8v7m",
  "key15": "UdG1DvDWcE63wLUUehBZoavnf7S9umCc5Kjk6Qf1RjvGBFeL3nt7BzexTaRe2jd6rTiaChXSQLyxYamzu36v4N3",
  "key16": "r9Q1s1vxdmhZjEsJoZdi6ev5erTpPPuEup67iWjUhL7UQ26Tx4K8bm2J46TycxKimLcqZ7S6sYkH18LhyfcYWXZ",
  "key17": "5eoS3YG1F8K4pcJEszgWt4ixBS2iCyryuBMbo5bDheSTrg1wa5APYni3VVPGZSUJkUTAqF41ob9duTDwszKKbwP1",
  "key18": "5L6iVXCUNU7U2qiihybrAmbgue2TrtzYYpv9UYoPnr4SFFyhN82b5PTroHBNvkeojK1Xir99e99NvhBqG6LUPKCe",
  "key19": "WAf7CNuLKErM8PtBdVjbJDvXqqo4iwF8GCE3VPCQfoXc7woJZSBz8cv8SiDtEv6s3y2eKmtwvZT2iwdN9TG1Uy3",
  "key20": "BxqZsMquU7dLZSWAewa79J9sABYMsqtB7MpWrU7gCwopMpwdfE2xTj3XSspRitWfgnMwJi6CG7ERCN5Z3JvFGjV",
  "key21": "5D9Szpg4DUJjh9XcevWHRYp3yBQjvMWihjVUW61EZyDw9dDcyktZntzdQNGfRngyaEPkzHRXXxpANiWf86a9Zf9D",
  "key22": "25inRnMDFn5DF3puVrjHBKnMqUpDywhxHxXmvL6TQSXguRwgVteyPkNoxGvQHy7ssUNGEuJBEhWCP6L4MT6WtsMx",
  "key23": "35hv3DigcsXDhnMM2rjFU5ZJuniQZQSrxC38Nkz9w3f5n8SmF9PZ6zP89cXmakkQfbTiPSEiULoVG5seZa4LXzNX",
  "key24": "3DLdT3FTLUtzvj6PCaJB7feZTGj3bj6RfCs5NeqiUVWojJ8ub5kBpVhaMJkT1FhRzcHBvUo6Da2wAMFcZ623BVSi",
  "key25": "3hQLTx96EDrDCy8TTRzmZ8Bi6Dk3T7aigyrjYRJHUgnreLGN4iV1v5YZLtJ9sezbAPJpGe1FwS5zZzsVaLaeU8od",
  "key26": "5hmLazoaCYqMa2USptoWqsumDgYrCwbSc5jBw7TdSxqt9fPNT561GxwCo1jyG3A4sitDHz3mSknqv2ZJjQesxbLt",
  "key27": "2AcQcj7geJsrHvFfv48qXeESecG3zgnAXkDtuQCjuY1FDB7arBZPd8ztzsxxVZjWno7H6K6Suhv2ke5LQsFW1uoo",
  "key28": "52LhccAjUyiawMT3VyuCuyQH3zzLLkHP3ZwfPcK63zBg3VYrfm4NEVe319fMh5M57bYJhqMXqHCC1o9VQFF1RDDG",
  "key29": "4g27aW6qJp4e2zQ1jKqcpRK5h94ggxdd3oTnCPrVFpimnRDWs5p2VPeECZvNvVBHQfVrUcs1F8qSWeKJ7frq9KXh",
  "key30": "3PS9vpWYJZygLq4aKk76XU37mM54JjVNjSka3o1AfhoDm7JGMWLKFEzwvVSxCvZD7amTeAwtB252ErkfTD1EMpfp",
  "key31": "5wcPUJv9EwpTZpRmibZKY4SkmoSuYNH9BJFxF8nwgbJRtHWwo81PxzmAuYaqZbc4oPfHpj8rYSp3Q2TAToL7H5n",
  "key32": "3UETiAMJyD922hFkgUTYascWABySify4a8BqEDxo3hqCKboWdwc9C33iWyBwD57Te6Jo7X6FxXd18adYZFSVTEDZ",
  "key33": "58HqJxooWoP1dwTfBbaYpRzAVh4ojg4GKYThmZswFYMYq2g4GdUaLKoCikFncxhAVssc1Ug5MnxVCctS7wZxxHui",
  "key34": "28C5hfcgBz4Le3FKLCj8mybjWtbn2GqRg6FceJfqLFvWxdG2bX9YwCz8WGZ3bt63P3w6tFU3otriLy78NRySfRKs",
  "key35": "5Nurpq8wWAfkKNtJN4vyPJQVg7nfNF7fUFwXSpNNo8f6p7BUaNEMPE1oWGUbitrpkYrMJDzY8LWRqgoUQCfuEk2d",
  "key36": "5naTcB8UAZXh6Vh9Cb1ETiPYfu3TqHRvzcfix12EfgNmoybdz7YJ8QB4dGbY5bcWpGVFHFyULp4fYZnuYKS3f967",
  "key37": "4DFpMYat4pxSFb3v5m9BR3UoMN7TfVd4kZQVDnFBMH2pZ9ZFLEsJWRy6HyTYTb5QxxVcsbZhihhyFihcP3NWudew",
  "key38": "5q1FyNrMLrWDSb6P7Zq9Lg3We2UaKTPsYX7WmLwL6hzuhzXjfXvtWti9DQ6SWivhqJV1GbSzvvZSXju8VSCqERpN"
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
