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
    "2b2VNTkyhdYp4k3rheLygTEWEJY8AQ3NceL4vfGXvvDxNYPcptAGT2e92cqJiuxQDTCLKrsn9gcA7ZW3vNzz2hk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KSHWVVsRWXWrdKyHVnq8geeYVYLa58Q1MHjCGP3754EwyvVpqckXkNQ3UbDwpDFm8nWBEL2YeVMu6XZ87CQQHTh",
  "key1": "5PuEiDCDAJZqSJnobswuCF4nJr72NMNb248UDkFYg2aM1U6Ee9taQXaAyjjAWThfyvtaGnhSmNCtB9A5t8gQhAPE",
  "key2": "3JxQhJWthr8E9N2BMmLcR5w7q5f6JjX6zKuSEA95Hs8baZp2TuoZoF5jFABvEkwzKnMxG9nwMqEyMdqXT6Zme6Sy",
  "key3": "8sTXTspUDAvuV8t9Kqr17g2vF68AAxkMkcv62KXbrdsKwdhZtzPGUwvY69HqP6NwFNmUbwnGw74K28S9ErLkyD6",
  "key4": "LCKKDp1UEGbSgsmNjtTgbr7SQWYtYmcReFgNeXMLF3iFBfPkXsPJJaN1V2XvXTV6k2QvCYLyV3tBXF3oRZdikAY",
  "key5": "TUSCkT8vWZLf5qcz3XzQCcGka7SCoYNVygzih6mEXG96oeb2vPMDCLQUawzP4q847GCFGTyHRW1YF7FxDokKtiB",
  "key6": "57dHFfYMXxCtmq9axrHJS9AWY3Hj8ks7bVJnPMqU51cq35wUQxrpn6nmE6bqQLStZX2Jgqekxja3UdDH5unZgNyB",
  "key7": "3k2qq2uy3gUGQEB7bDyYiv9zKEi9cAbEyp1dqRymNg6JE11iPq4n89fmUvypWuCyDiKYQRNTEzHGGkMuoMfKXtLU",
  "key8": "3h8t75u2ZaanqLfPiaWEtYXeGYhEZpeBm6scSJyX9Qtkudk9v4ncvifSABgbJih9qQsTk7rVR4X5XwRK1RbgMAx7",
  "key9": "25wHues5WuDPAe9rbhinYJKzr4HMNCtj8JHw8rVPYEpZqr13LqujC55RSpR44Pt9Hz8iGryAzYHLNUuBieW9AoY8",
  "key10": "5sVCpDoUZJ4hMHznTrbjnCn5W63o6Y7exLduAztuFdyFbd3oqgDfn7hWJ5ojEx8CUvYvkw3Hoer3FS35gUvPCGYJ",
  "key11": "2EtCXCoKuLcAUg8MC1xzTxpQtk48aXQdttBounC3KpNcLbyeqxEJudUYXXC4BksJEn8GL65RKqL4Fm1x28HCENQN",
  "key12": "4Pi9QnjGgPNt7mPzHWCh5QgpHRYvbJDDcwBZ6L4UyN3aQ9WGjh1DSYwBBF5SJURLNnj8Fzcj3MCbpTGjNjV2f494",
  "key13": "7is6cjaS4inpGhdx3z4bJEbsY2HopsAKTGg7FAe162BWdBvSd73NcpBg8nUPrb3ciZ5iKEJp8GyKxPSUYbCHJUk",
  "key14": "4Ss9VsHGEGRApcPFVs9dHMjGwpe6Kfrc6M5nC1wxN4Z6GVkYQpqUUXWtH8rAvwHkoNKxCDpXV3ifvzoUEcp9txzA",
  "key15": "3JtE78v5hgrE2SMH8Va2MyoezyV7tjvydGLb6vRQnyEvHmTE7UzcGkB865qLHhV51TPHdw7iZD3AfRHJofJxrVoN",
  "key16": "4jVCiUh3uePordAmvkDasDDjm5SkPccjWdNLKxBiAqWgR8wcokCXY3bkNLwcZHPB7TsFP2SbzDzPGAchvozuZtZz",
  "key17": "3PZjWVk7jbUdFiDV8QD1mGryqaiaJQyNEaMjTuqj46KbEuVWNnNXvR2eH3poH5HqxyjRPhRTxNXDJxksrDr26pru",
  "key18": "2fUAE9756yJ4yZifuayZNCF6WscSsLQp3RfMT19hD4g13jLZbzW8uYKWB5DTN6seNhTkpRWFGvNGDneFzXeJvbad",
  "key19": "2JTywYpkUZZtsbdsDiKfykmwsGkUCmNDBk3q7T4aLoZvjBjDoagh38pBbx5e346VpsRMoP1Abk5bc46uPfcwsZHd",
  "key20": "5CaXyRdTsF8F74AuTVqNhSRkfbfzZXZiQBxVuczLe1ofgm7Byu94UAV6Moc3ig2Dp9XvZadyqKbYaGiS1NzYwgJh",
  "key21": "2xVF2xKUikS1xnP6mdACPELqd2P8s2ghjsmwHyAiQmzZde2zTrUuMxNA4UJQSeAZaRtLvYj3FJj8urXWmBfb2QLo",
  "key22": "29g7JFxXwi9LSP7qRqXkdKZvVGD1kHEMoJeuAXKSs21axRaadUMHB3ribdw8Two5mhekY1bcaeTLNyuuZ3WAaBos",
  "key23": "5eEZKcXGfJ4zLLKpWibayJGFRDb4yyDWQ8BsXTzabRsNBpsodeWQj8QSJvgccjKQZuf5avBsk6dFhAj3ZHHt1sJV",
  "key24": "2RFQo2KpeiS8pS2XisrLicHopVF85TfHoq6sjgXxBuJiiVvkwX8paUEZ1Ss9achHY1aYiWmjSkG9e7sD65K9jJok",
  "key25": "2YqrQ2Yy9884ZT8aRitD1tYQwJ6e3hftL1p6k1kUFGcwk1XAbZRdZiR6uQP62MRzXDa5p5nJU18jYYUoD9BYh1e9",
  "key26": "4MLwndoUoBUedqYqd8b31Z49YmEJfmP1DUnSRxodAUMdxieQvVELu9cyvvfCjt5VhtCikQ476P9cPw2iujMERphi",
  "key27": "3zN8MEkxvmRGefqTES821Zt6HstceMbDExM5yLVjgYqftzhBnkkHpzCoAdPhAhGgTYkn9rAB4SHFHAwPSPYnfksn",
  "key28": "54SnTvoRU7or1qSezA1tFcCdVbVsMJFvP1y2kNF1B6PYADJDVe59LPxRhTt1hZrRGVsXpw8rdEuPaXzRu7HyW9YC",
  "key29": "2D5yZGoYU7uqKvM9Zc6FocxFpXHpnihMX3azwfWd3CcY16Usi5G25AM8zANDjDSBVj7ceAtNtAWkLPeiC6CuWRZ9",
  "key30": "3QTbYvPR89CDK27vnHUVgjKRD1GX7wUzXkwziMt3tVyjFun1TXzKpEbrnmsBURt26bcaHTUNK3PXQNrZHLVincno",
  "key31": "BMAzYUG1i3m8tMiUUWwJxEzYtKgnkhwHw1GCYmFj2bxoYrkHzwqMcvBwpkzkmeHcsRo2KDQhWftDpMrXxP6SrmK",
  "key32": "46gk1kcujg7Np9f3bDe9QKcTN7DXW9qXZYdHVXdjs5cTavDpYy8mVZZ77aXv2D8qyW2qd71HsBDso9QFTAjEgk8J",
  "key33": "3uSKfR9m8jyn9XCydoimeDn8gGDcATJvpQx3ZDA3PR5r25uyo7tAvZe2L6GDNJCgRpogVas3BYDbPKghynFGakwg",
  "key34": "4dsJUzftVT4FzBWBvfXvwZBJCKYHGW13ECKkmNeZc1UdHU4grFVkxTQFnaF4r3bkfpVhqNpvnhjEPutn4VQzv54K",
  "key35": "3dEuVLYBi56zr3JAyhxWz7Ysxb5nTBb4WkvNjRaArWYuXpG1cvmxN2fEBZoQ7Qx7gFytdqyTtAa48tz6RGDQp3qc",
  "key36": "32HWMzazpVZ41dVn4ompmekSc384Ah3MMpvz4PxjeNkMMoXueQhtAs8Smi2tWjBiqy1QD9VDMZFZGYDZnN3sp2zz"
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
