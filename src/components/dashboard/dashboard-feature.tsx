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
    "5TEEjPyMTrhtuZrDjh4LddXFzRQdwX87WnABnheLZtn6A92HmkzEW8yHW7YTuLoT6NKB8KUo6yzDT3oSg86z5bi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A82PdpQkQiuwf5nu4RMBqMf4qLXRRpd4RAXEUBxX7SykMXDQi1uaMSv3ZwFTzrCMfS4W7iiK8mfBpVSqrTWhPUJ",
  "key1": "44n7Mz2ZQc8vFAbG1uY3LkD9X8HRKAbno2bho9pNHht5zdVNK4ELefRBhCUjXrqtjsYhViXY79PkQyM87oghbNAW",
  "key2": "2NUpngAs5XWeqReXLhHT12f55hr2q7cRPF1JQT9XJU95n5LuJLNe7qxNq7D6Mpo4UfadqWBiLV8qMgBuQMpYQFo3",
  "key3": "3ASrzebNhqSpZqE7pdXzjZ5fsRjn1ox6yqCJbw8WiPKv5Tp6QBx2bieSK69roWQYa6oDUpzRvArKZXCTE1HZcN9",
  "key4": "4CFhswjEKx7v3aTVH34VEZism2NiqQHwDP15jW2QatPUF31aZeJvPp6gjTnvrKF3i9m3SyvYuEzWXWw7q4Dzkuqb",
  "key5": "5dhXfSLSMJWNUwhADpvXpfn2JTroB9WgLtL4vKgYWrTDVc2qRhwU26pFpWQKnm2HgCfUzMWMc7pVQ4kycx7ZSENL",
  "key6": "5ckHpDrgCHzXJfnEXfbYn82L48xh21UVjT14P7ao4hssQkumUzWXXSfdegfCjGd3osMShRMHPvouoQix1L2eQAnY",
  "key7": "37rTXaoLfNzrkb5vzcA1kgJrQY1C1x54hpr5z7i8ceKfti68Dxr38YJGTWCtNHn9Q4qYLviKAKpQBUij72zVJAV2",
  "key8": "2EtNoefjfgwV55FGY2EbJbmsWFg78BRnAQ9RiKS3WcuW8JJeGSUzE3tQEZKNhLH1KnXTeYKUevMPNJoQ9GGBrHJb",
  "key9": "56vT5DWNkueWwSAGfLtuFD2q8A2TbZ9FkkfAWbs978Kp3attS1axbrC3UXRHoJbhrvhEYYmn4c1CcDpgRhYdP517",
  "key10": "kS5D3WhFjTkXfcvbJ6EubN7oNRF5ycjNwbr9BPFPrVtCJH24LdgQ6C3GsFdpYYx99rA6s96FNcENWZHjSVYmKcT",
  "key11": "4CaKb9a91z2f3woadViAXmQGEdCmf7qJB3zhbzuMQiJAN5SXQj74fsT12qpPhGvRKtNgy3xybcQHEkepCJeJJfoP",
  "key12": "448MduMFHsw3ZVjhei1AvhKCHUwWC4En3r7omwPEw15Koq2C1DPZzNkNDdW416K58WPqvMNjyGpwy846LUPgFkEf",
  "key13": "5b7d8n6edoaP97XcAEYMrBDdP1Us9s5akkAR6qaDoWuJZrsGbaU6QftS1rAXBo3rT3pWnZ5kiXau2X2qgoSbpr6j",
  "key14": "fpbtAmJ37LShgMcrpU33TkUvEZc1GTu9vpfe93FS1eqGFCMdqZ2udeZwo2cE55h5rXeYo6KNEA6uFLBehhbnbf1",
  "key15": "5tAqHUUJLVAULkBGSotxXo4TM6p9z9nY1SQAHZAeF1DjHV48SFD4hqfmjF7Jt7uSoGguC8hq8Ee4a2YhocR9MzB7",
  "key16": "2DnxW1Evp4PthzmYHFk3dF9LkkgbongB2RmSYirdaM82YCiXkvfe2KHQyR2qeMhVSTUgUFXYi6qzd2Jki7VUX3rf",
  "key17": "4RuvPiC2kQVbR1hj8HZhNrs8B8jdqgEwXYsWGWVZn66EG2uEkQpAVKVhP8Zfxa79F7Ea3MxDRrLtpPAn15dQnvZj",
  "key18": "2SJsgDe647PYUQHtDrLu9CK7c1z32zGFR8yHHq767mVHCQxeTdoyxmMbKwdrBfG9Vw2TFPqZT3t88y6ksVWpoyz8",
  "key19": "5hT7scYuR16NiQthp6XCVo1BTujMwjuraMiF5xhBdt94W9GwnH8m7YtXgCB2oL9CKBWi3voMZv1TNfaoAdeRT1Ac",
  "key20": "5xoWWJjp8rqSrDK9Q41Ttgz1iJXkc3GHJoD2zWGLHyYNBNYZdfygLkeQhkrr6oF6J67uTyiebgraDiLjd3zymxEm",
  "key21": "3hPQVWpEyWupDGFHHVuHwVXgpVEFs1GyrdRFqLKTwaPFd2q889LHpq9M2NM4nTanMzooAitq3TrbmA6g3jUMXoKn",
  "key22": "J3hTTAqKm3AN6pGiiijhMYSJQfibtCh6CyYhC83i7ShLQvAoKvMrDDLbaahggGP3UCyGRoyMgTibMH5ZQc77q2e",
  "key23": "55j6VwHVYTTMMtjRaYNV3FSJG4G9eCBj6QrdhKwb3XtRtUGx4oS8jdB5h3DzAU74RWhJudaKVGTenwLs1drKncLY",
  "key24": "3VDiBRfKSA9qH2kwrXHbC9vndaLHVVbVgRaF9dbGE8tBao21GPzard6v6poo3oqRAMBr1fHjMm6FBmw4N1exPCXk",
  "key25": "4dvBxyyHdj2Vr1RQosQtbUUXBFFTNqL9SNdJgcfuBxMp49ziNSyZbVa8asryhp8SXZ8U6SJF3gUVdeuvRFZtcjoC",
  "key26": "3S4AkH7YGi1Y1XsdcTz9p2S29k925UqdL2zPLbr1CqshBhQMDmCrrsRnVw4Zpc56pSEhFeD159jjLymBmgdQEWBC",
  "key27": "Ee7D3Twbr6ghMsSo4bhTJ4XEGkC27cX6YiGQwhsHzvwv3ggoR6i7pktqi1WkD9jDYrFLUyr7ZHuVtAPNZAc2DuP",
  "key28": "ubZEHuc39nrKKsnFWR5drmafV4p4JXYGYwxTvEKHNUU6PmxEMmko4Y9NqSkDxCh4AKqAUZeW3XjHwz8FjVoAicV"
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
