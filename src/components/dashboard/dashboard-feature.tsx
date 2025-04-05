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
    "2hQyF16ktzjSJX8sVgziA2ToBu8SkysZ39UeijQkaUoZePXoebCoKcp1HFckAz9sBBmEgzVbfCHVMqXDmGmQqcQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25WJZBVv2emFvggqpToySAjqFrHuc6SFC8Z9tvtT4xAETxEWHu6TfkSG3U5JYSucw5a6axNwWo3THmtt5BUcTvBb",
  "key1": "4doKVUcL9AuZYnBncsJ7PujnPjp6yNz8HcVTwg5MnCQiKRvAw2SEuXVUdVeExiK4mPoHgmmwmSfktaDcsz5f9def",
  "key2": "3AzZa3SMdfn2W5XgAusSfJKj4V71FSQJ5hBuynKBxYV4UWm7q68BTW4KoxyNSqQtf24ghSpVtXf1KQcuPSF6VrRx",
  "key3": "3HyUzGfhgDC3CDVi1P5eQiCu8uDTRY4v8pJ5SCHnNNFMoBdXVpJde936JKGCSn2wYfNqzB9a8VXktDe7Mq6qdCDd",
  "key4": "rdBPFv1afpJ2w6VwZTRRNaMUT298nAfZRBGYAHQpTbFEu7dQW7T2Xh8QRVbjnXkwQrSLB4AX3MDYz6HvezvXEgc",
  "key5": "33xC2zfDvrwSXoSMi53v1apJqnyJZtyx7zEv9azL3UTBofkdrqF7g6aN6T8BDDZU8wQiNXbmoCMsjYTaEMJ2x7UD",
  "key6": "3unMv8ycojtCTV5WLzsuQR7HqiQvseq8iGx8m2tbLAqUPnjrjPXQQcSgWpeTgWtjATUhAZ9mqWQFtJEHwu1HiKkc",
  "key7": "67pMFhreT14ZVihHzTgxKCN1vxXzM6KgNaS6fm1FS6H2GZAMPg3z1KcDDCsDbjCa16FmdqnKNru4Jdn33er5zSL6",
  "key8": "28Cguv8LabqP7ouJF9v4cLvKzLiv96F2hKgZJm9rh8UqpMq7QEqkvgN4ybjcstztV2uGRhmNmoHzToXvGcdLZyj7",
  "key9": "3KVD4UrNq9K4xUC6Si3PtpH7g73Ug6kbzWTVKfH9wcKGEDpk7kYqKYYrxjPfxqyEa6nD6Jy4USHZLKMBXK5fWhc8",
  "key10": "4JqfT25dxZ148RDv6ARW1vLRHXXZwtHBfF1n5L7P5tiXLh1LJKtQB6KgfR6M649bet4HFhW19JJowBoiQepBpDKJ",
  "key11": "3bMnTU4ZS7QG5pLXqtg1iUit3BkqHBYk6DsTyyv2Tfhd8FXqSDyj6CEtAiLpimUUHV4EXdu8WVqpxUazNaEs6VPk",
  "key12": "4QGQDyCQ73mVgFTtvfAXPMgKE98ixMi7UrCMFVofnfxuuqkRS4N54jdWUUBMXmSP6zSRxdxLbfdbVSBWq11JjPEg",
  "key13": "yLpgfogNGrm5m3f7hTsdGAzgp8U8x8tFgtFxh1nvicneFTfvNKaKaKuinbjXAqVDCuPwneJxim7PpYgpAzqt2sQ",
  "key14": "2NYWvzUhsyRJ9mYeDJCc2ansma9w49E1r52Pf7MyjCPGb9MqZQfPNANFdAFzFFc8ZUhMH8ExabzLETjRTFGxwNv6",
  "key15": "5HCAZTVKFPaxgoFacbGvCjEfhByG2wqF6YGL5Xsm2XVpcoNMTKMGbGXiN8Aq4LeXD7op2JGU73NcVcwPQuvxJ5dQ",
  "key16": "3zeJj3DnDcuwtXvmmxnxofNo7poQBBeNVLAtqYZQqYbCwXxeK9SeNqmbwVQsaMjm1iKjiZjK9ehE2JgQ7S8a2VZg",
  "key17": "9T3jHLtayHz2DmE2p9S8LZgh7BrVvie9n3p5ujpLrGYhfiRUmPXJpvmHfQNetPkiRo6iof7bhjAAbaejUA5A7v2",
  "key18": "5kvEXM4C1SbrNFETVPmqA2ZaCz7WK78eJbdxXJniFoEQACRobcGCXm1QELLTHXUAZHW1PuB9fNaQoFQ1huKk35dt",
  "key19": "45M1VZkdyuSbDSBWpS9nZxFh61CW8d4Kpk2Q3TPGw6USMmv5TuiKhckAWpJoqK1wPZJgqz2xMqstipEQzeAoauhE",
  "key20": "4sGGRoT3s5w8bnquTKvCNjRg2RcsMcfk6AoF84NzADfmQ5wUxQujcDnXZJBaaJShba9g4SYx4eyxVoSBMQpvAVjA",
  "key21": "5SNNhozBp3RGPC3r6HgumiWBsxXHQmkFwpy9XQ28bv1uCkdquomhqCbQgCgjn8HvpJbTCuzfRjKSZJR6aUFUpj2j",
  "key22": "Fq9BaJB19H6Ls43G7BxMozQbUDL9FFufp5Ah81dRWBPuzwngxFdiYzN3boVPJ8M3jtoHYstdHSG6tskcKNbfqp6",
  "key23": "48GEBst1afjb6xmgdNcpBez3CWJbg6VuHwZwAnLSGiXzLwoq8CWdDZ73rcrDQcSYy1WL72G2yxVHUP4nNa9JrKyb",
  "key24": "2LJZ9GUsPAWimaUzvT2GxyHU3ks9wDyFxpsVSN4zoSJBFengkkbG4wiqHbJmQFXdMBYFUwHRhkfc2qBtcWhPQaH4",
  "key25": "51ueusAUkQtVY88n54LPFuTBR9RycQUahkwuGqUbAm5r3tP5wDPtBj5A1C868nk92bUv5eYFqnWx3JDXYuRisr87",
  "key26": "4ohbjCiqpakDSHjKgEHmhyRAngqUw1JjF8ML3v4yfdwMwpruqgRY2PaEc6mwVvfUWgiALABBRak5w3sZ9qVqTaQT",
  "key27": "5xdgKEnRWCdV2iydtWLvUAC6hUVP14mH3Ha1xhCj6stGZbnTiufgtBqY2xkhRjZxuSP5KgAsGz1AF2bH2mvPWsrT",
  "key28": "31YZTFUCA1AoBBkxbNinJApbbNkzX3mYYndy9HXi2gxwpRZ7sUVaeg59XUj94CwdWE2mAj8N5ReUhtEk9nBURcZN",
  "key29": "2xKb49tUWCDmJ1RvBiPZtYEyphywPiVXNbvdHrUy2BZjYx7D6AtcJWz9vxHdUjFfMtiSC6f7Sb1EeMAQ6J3g3Kmx",
  "key30": "2PnWYKro2Sx3qu3dYDegeNNektuJvKDhDwVpAAmAC75ABMvKfRVcwXnbRjao6toGVgSNvNYFbt4zhCbyxcqrrEkG",
  "key31": "4fKpghiJAChp2WtEsVnwFY9A8e1zGFZXKrD7GVCRgQ7DPfBKB36PQQCkMLfFCpzjr11EoH99V59CSkwLVrVsqyGE",
  "key32": "sfAuEEk2fKZEpWA4Kfx6Jr33a7cFrbicaf8cfGxhRbfHn8KKBkPN9aEVhWAaJg8vCdYouC31RyyADkorqnmrH5X",
  "key33": "4VVWQ9uETsX7TVYSY1mqQDmsUUe2ss4FDeaBgh5p4mdMxdVuVEmBmTBsEpPxXeBzxM3gLugFLDCu7jceUD78fpxV",
  "key34": "4RyNRZJNNbzNy5vvZpWSEw2EWr84m8fmzv8QiGyJnRYPCecnxouReLWHVyLY94GAMjsuQcnqTEuS4fbW8CmwZnGP",
  "key35": "2H74ph4rGoi16oVLg1jEXpq5cmp6NSZdHJo4eZ4Q9VA1x63ywAMLFKdd7gnf2C5aJpQo14QKQRwzrJvVf7YTBqTS",
  "key36": "21efCSzLMaAPAimAZhqKxyMwuVnAHuUv8atXV267PJDSjw9YnmNu6iCf4mW5WVtLvFEyj9YU5TnLRv8AFNwU3zAy",
  "key37": "2pawnqz8uQDgbuMkErvpZrqc3ifsJkGyztHLQTZhPm23wPbctnZarFugvMZ1YThP6dumA3cetKHRXjJJTwavBhrr",
  "key38": "4P6z4duL6yYrebgz5nPDbHAWMLJT3AgK9wG4zMPnxnzw58dRxhaH7WNsVosxMUBooZb8deyWHzVhFazagJ1DG8Gw",
  "key39": "2di9CqnpxGLsxLoH9qGediwPUMXj9ayzDzSFgVVoQhQRcRxKgQgbW9xy9D2Jqa6jhCa5zksFsR658ubmRVNWC5hP",
  "key40": "ETXxZbQpHXnSgHg4eSNYGfByKj2HBWXiwCNG2PVGcsuuN65XF8FYNGJ3YfMCC8pyj6jmD89N6JbEuvmL1qaCQaK",
  "key41": "4pmzQ1PeVDgQPtai1s9wFPSm5fYShAtNe7ovUNxm4Xv2i1bvnUBQMLsmb86mLtZs4TJrMuQaBWSzRoG2CmZDUwh8",
  "key42": "4FS5mz5UHb1Kqyv2Y5MXKtmigycNa8VTvSTiJZ9vK9ne46GcG8AGAkkd4WmuPbi6noYhkxkhpMNazFfrh3CcqdPJ",
  "key43": "4NLLLeS8x71o9zeJLNFSUbw8SnojmZBUFpBA1Qeh3SfQnQZ6NcdPhPHj9nk6JvJxvzjMFofRk8e4niQPofrJwwWF"
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
