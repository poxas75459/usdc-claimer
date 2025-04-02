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
    "272BGqxwHpDT8VMKHagQS42AfVxN7epAqSwSXknkTBKNBnjcMGX5nEaYnoJK4CQYmjNVb6fLCvkN9M8HDUfWzTxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipfqE5i1NVeobXSZ5J1Y5dVdiUDtJx2QXSyG4z5PHoKuNqs1wPdNWe58THY1JeSRRWVaJursoryDorR71zhv1c3",
  "key1": "3otpKYwmgqWjNyVC6RJTM8CWdwzQ1J5iCKFWoeyJgdK7F7ReAFKwMcgqrhDa9EjF9vXikEGNKfHZk6Xu7PX8TxGQ",
  "key2": "gKY1BQXHBJi8zpdPdi5dJys6x5wgNUqj2rH8FNWyoWfkq6VGgkqx6naaStxTgvJNU88WuCzEiYB9Qh9bKrQ1KsY",
  "key3": "4ivetZpjubfe4zAmn1tht1Km8dbz8K9BxUoMugGSxMooGZSBGvZ2AfYSZc2Epkv4JHtH66NnKQKpAN8Qwj1irGrh",
  "key4": "3JRpdhYNnZsrycQMRNSYXAd4CQJGKqsutJhGFLD8FQGrbdikJHJZFCvSYYw2jNVTWNutUQcK1sREoa4GjDjCAFWk",
  "key5": "2W7QJdQnMAh9MmZNU9iZzKsRm8QRWm6T6HwnTQ5S2pQvhq1HviMqwXUP2vxQ8AfgTUDE2CdbWsMzkPNgekuRYzzT",
  "key6": "5F2HdSSAWiFoNVSefbD5nLV2pHmupzxnT7aWjKrY5j3FGsNkAEjL2AsmouxFw2h5tXMZo11AxNaoLp8sezuvGi6k",
  "key7": "5NDKLCnQwUEvjGQoUxpthJeqafUESXdCvyeeeqi9vUPpHuGfEXB8xCcHESBz36RGqnr2W5qJ4frFzTQxi2eTBASq",
  "key8": "2Qnf1GfQ5z29HcizK9vXABjxtvNbs5Uzh3KYedCYeVC3CsVwgjaXCkY98oQmsTXUvCrwBsDn58PxWUiMysfxo1C9",
  "key9": "21VcBv4TihofDL1bsKQFhkCiqV91fJ6My7U4b7VPvmWyinkJ22BP24GKikJjrgniQuaXAWyw3wKUnLRa3SMjKcVz",
  "key10": "2vwU6u1HUnJZEaHxrK3RAboD9BWMmE4P4feZSy9umXZSHuEfr6rDQcm2fyGUo3iVLiCvt6Z5wBgnh7ou4asiPZWL",
  "key11": "5BY57HfwXgAFfUoMBxj6U8YeNEyqYLoWMPtmvp33YARCxVxfR9HdUkVLL5RyPZQdSv2FH5mvQUgo56yvX4bU4Z2g",
  "key12": "5UpVmBCKqiwPeZY29GLiuNjuCbgGSJzbZsC8tXRyKYS8WKgo2n7VaePwAjX7fvfJmGuMf8MMKdvQnPmq3RkdmqKo",
  "key13": "dASiH6Bvs7bLTkujuJQxyDiiuLgBwhUTzCie7TUuaws2jWaVWzhHWUwYfQaiTLfrGcRZytZS1oSjttM6FUaQJPB",
  "key14": "39QZD5Fn9LdTWaMbSWFwF25bTnfv9KLr5L6KavWiY1E1cNPe6HtJWXuVK4CfoxJQbqMjeg1feGJomBaxPYn2G3Hm",
  "key15": "5YjWBZrJPSnoyLvaM9QBn3tk7YSd3rG8KmTdCe4r1LamU3EAzZPvaXWN6v359vswoDtq2k6d1G64SHQx4wHcvQUC",
  "key16": "58Ufh2H966Ddt7FSkcS64Tj62HbAiCTdwN9fBncSHpNspee8WwXDTcKWmb4rRsV5CVeyd16is1rBqupCeHHcHsgb",
  "key17": "55A9DCGzfs82REqtrCSKFW9hFaCw5Z6p7RySzNBXX8V8XEi2etS9E6jEcZ66X6EosGMoK7S52AMt7tgTixWQDb7Z",
  "key18": "3w4rPeqKt1cNnypEKBJxXzYR4dCr492j7F9ZB5KLnxAhRHTFdyDKANmGXHgsawqSiuYQKYgNms4Dw5q6e3RrkxU",
  "key19": "621M8JqKbjgfaURU7NV3Lmtt4njtgjwZRsNw4Y6UdqDNTmdycTbnp8faZQREq6FzMsEhhSAgUeD8rVjobR31onmZ",
  "key20": "64Vfe67kq4yVbmbu46R9C1K9kciGidS6AfTJHeou45iPiP8qgtW7CCPK7J5eMmX6C5Jxx99Ptirm8LP16JvYXqqE",
  "key21": "5d9gGupdgWZZz83DnLNBFmNwst6jGWp5RKcKi87ejCDqAvSJfbccNgoFJbw8vD3MdKWDoKPbhcdQwcbYh5EBM6yw",
  "key22": "2VkbbKGCX2TaFZ22d5NyABUaCTtsz2b9rh1uz4GKAZDjBDCVcgXVGgeBqqtzhnP5ZDL2cpB7gZ4RkDYwUcKPkahZ",
  "key23": "5P4gJ8GHy2tNqUTTgp3bB2pMKX4PS9shrYr1EmuusNXAmDRN2ZByDrZ4f2QT43MWftMHrX2jbkg7zHzaqQwRYr3Y",
  "key24": "3xtXjqYtgGeL22wZuvbEo8UEboHB6TucjqAQUaj87BZy2CAC3jHMAPQBDW2Qvv7MB3WvNjpuWeg1JL2rpTcAjrPu",
  "key25": "5wun8thHYB4FYZrrCXkK5jAC9R8SX2VjdpwjuQNLTTAzsqoyDrp84kczhoip5SYkiPeSsKus7fc8iHBT4NFCvwMc",
  "key26": "ALjMnUD59LcWtJscmXt6etnctt2JYeJEEXkEmg376FzcE9v9Lc4HQCmydqqPFnH3q9q9tGLeBmDrUbqvwRfqHEq",
  "key27": "2FL2xitVxB6evr7VWNHjXoRMxihcXRboVtFqAsVLFqztMgmTecBxNWGeR1mYL2iVSbJDcbKC6A8eFxAeoWSPVD2B",
  "key28": "56rqX3nczQXXZr6jF4zaSZVg7QAtdcAVwHyFdbe3KMSJ17kLutnbXwRgNvhhmRniPYJQ5TTg31BfCisRBrgtsmPq",
  "key29": "2bS7sEBPPK6jr8R6zpfEHsEs3y88M7j2P6xGydBwH9iaUr3aC51cy9GhNYA1zFfp54Vx8uygchR2zsEKi3jxMZxJ"
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
