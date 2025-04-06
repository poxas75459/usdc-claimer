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
    "5PyMVMwjCx57Ud5fmS9syb1zwnSioTF99sshYUDN3Pm4oehLyTtxAU5vcDPo2Uq5M69MNSuryWGYx1Tyi4cLLnaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53wpoK93VE8TxE8B1qp3N2YrMwyqj9t3wypySNsZYmeF1vJi4iAhf79vzxiDNuPFaScXa8aJCaZx8VnMwfK7BaM3",
  "key1": "5X4YB2kMhVfVnztFuXfFJWnUdJsFCVttX68YwNRZRJb5o8SjjeVvcJZGiyuH5vDLuPPmFSGg6CCvuqSTxdrrKmDx",
  "key2": "5JeoWfCu1tCoFc3726rVHqqzLphhxSVPV1Kab4zzkYF2a7UoNyVzxmXaaec9LEUxZrsLbfPTWLzMaxDiGP4JBeqm",
  "key3": "3ChaBpQtV1cWKkRFFyj8qHWBSGL8FepWiD53wKdiruMsDo6mhkmAoqUzb1eGuziP5S9B2emNxr89o6ZjQWcTM3Pq",
  "key4": "5zQEWCpJo7zajxteNngfaT9824srC19VkEhLyi6hCNQYnjDtXaJe1W5htrhNpqWH6oAmAzX5KHNEz4T3ypgAdFzu",
  "key5": "461u3Ux5yQBNpJHktQZHz7cEMP9L2Qe1RhCf34VBVHeycrkg5eonxnNS5BArCb2vT7Wff9G6xQFe5tNqfZdXemJf",
  "key6": "5epPdwjcoGRncvwRDUU9Nh1p7be4PfTyVDGxWd7AXBqc5yJikmFaBUBbo5zAE3pSM2Vbn5zHUHsXtgzi7d4u6peB",
  "key7": "32xw75fb44j9m6kJw2URzveJSrdDkABB6NwV8j7R6Sc9TTptFrNWBLyur3E7A5VWjNMoTsQ4dtaBgvef5FiF6uye",
  "key8": "2DnnSHU2ZFNpuVN9JvV1EMPnhpxPLw4hAmoppJm8HMe7dLemyrepPs3r3q8pmrzEjrMeqqfiVFZcexAU7NtvCQq3",
  "key9": "5yQGnB9Pvpqqiv1E3zAUYkzNdXBWcFgszEMMSah1U1KreX4M9mAeSU6YSjX1tBcUFCxSLqkrgjDLFsC74QS9PTRR",
  "key10": "3cW84YLpqbfJCQ5NBYR8JQYVtBEuZwAGUGh8yNvjdpDsMnPbGPBo6SZFzFoTaQQwaEFdAX9KyNWo3U7Kw8wX2Qfg",
  "key11": "4naikV29ae3CPxsdLvFUKY2kkuzXtYjPL1SqMUq4hBi7h1ZQmQtqidSxy9R6qsAuNv7zakWPsqUdhShoQD2cW4au",
  "key12": "5AXReCbinMvd9Gb2htPx96PMn5LNnfUqVNadV4uzq86dpu5uEuFZDLdALSyYJ8xpBSNHvhWz5bmUcJ284yvFWXKS",
  "key13": "2T1t7r7RstHuK3E9K85pS9dD1BvJjQqRCyQPCxc8TWo2SsJu9fJETX62vJqLzmQmDacCpbHjhAPVAFasXrbYSSsm",
  "key14": "F6pZJnNNQ9Xg3am2h1EmRzuq7hhDUeL7PadPvqFXQLKbKSCvm3huBRdtA79qAzQbKNaoYnzixVWx2Su6yxvGo3Z",
  "key15": "3yQDpky4y1k6sp4trQyTCn3wAduCate8dj5JHG1F4zMK1ZRAMQ8cJURg1JY6Wp4fNhrw6TXioQRKNa1aTTJH5Kaz",
  "key16": "5ajFG2kZpWV1JP6kXLUmUJsvfbd8r8KmeKXNJXLuYHMc8yfLGQCvMGyqAM2BEV8bvcm9wuqofsrBtmWhusJQY93z",
  "key17": "24L8i6TaZfdJwkWWC1AieWo13u7vKr8JT2JWLWGHb9sN1GWXV77k6V4dHbAVQkvFFXW7UwyGJBZiWQTeFHzq1MFr",
  "key18": "2C2TBSWENFeYWXgn8xin7tSA6QikJw281CQc1Dm4nB36H6nTWx4TyinZoWNJh1UY6Z69AoZ1NxHoebJ9MijWK2Qf",
  "key19": "54KY9iaWE7996boZL4FGfaPuYBCix7aZGEMGR9FJHiYBT6PDE82uWAQNPa83s2AKv6KAgdftVLS2zPF7BE3FuyrB",
  "key20": "3wv2hnetpN7AHAbD9JRgvErpyprtuUwVNTqfB8VKcGZKEQAHfHQWpuedHZR4bcvjjm1v3i5bLgiZ5qPaSkkDnMZe",
  "key21": "XuokXCERnLE8UHhrcSS6h2zwASXwATaZD5b8sif1Pu9XdPk6wd95RbL3GmHeLwiFFGYBD2fXgZLFR2QJ5KNs1Em",
  "key22": "5cQ1fpttaVu9temwWfu2za7LyYctFsEWArgA8CZDUcTX98bQttVqX5gVUengC8jhZCzXCdHvZ45C185o2vKwrNMH",
  "key23": "5M1EJRMApeBge8vPxAkJWJnCEXeuNnTLY9H731u7EZy8TTmXx6D38pTsKTzppJ3iHt4NbxjJy6h2eytg9JwvnQts",
  "key24": "4ya2SVH4t7jybR9qZhEv3otr7d28Z35GU7vmrLc4KDS22WC9FaV4zpWTGHgvJci4FpYRK6J48msEYkBY8AhXCzLK",
  "key25": "2UaCvD6qjeNjoFxaenWRji6sc2c2VawusMG9RXrhYpck8dVrBxSfMS1wkMa2dF3izi2RkQPK2DJYHrSCmN9onP1m",
  "key26": "5LJZBBXtarjjfUGPd4Kr7vNd9UJ9NNohNVQ9VGg7X1T4mCCXzd4DCpNzSbSWGYBAhierrJA2UPR7urwoEd3eJMRg",
  "key27": "5Pu1cCViG5oXqaSDPBGi1CqHMxapDmUpmPjf6FBZk8RCv3628Te9dDYvhJrdmUCg7drF6hd7YfwsBvopEtzx8pXX",
  "key28": "knvXvm1PmYB7R9yafNqUunZrgqy1zzFv7axEmBn4ayMySn2J5absRN6RF7S5TdSWkB7v9xtLnaQqcugpAFMV1Z2",
  "key29": "2hcgnuA5BNTwhGur8bUYSqxgTY3utU4aVghyRNahZPmcJNCC1GUsyPNtJsgQCvWvabuj9W13YX5FVWSHMiAxyqkN",
  "key30": "wfY2db3d6XzfT1NUrjrN6zbyuBZzEJtkd9oNfanNY1WfDubfDM7a6xHKRvt4WsfPCWP11cLDZbbsqoPvo5g9Ajf",
  "key31": "4RsDCJMPjafvHp1knUdZCw4CAjuMz2YbPsConYA1Pwj4NtAciCcx1nJQsKgQvgwDDkvqvUgXE2h6TwdVE1Q6rMCY",
  "key32": "5SKbxZfrccuerjZLX1kZGSjh95ECBCpi8kXkqh28reCkjYnpxgXqbVNy6nq71Tbp8t5FAFS9agk4DffdnxfdjedA",
  "key33": "4PfmQ6CQid4Axyk6mfsvtMDJDY3522yC4kwpgv7inupGxEMf1Db3Ay2uzYBjJjdkynPdu5JkqTjNn1mEyExjinQF",
  "key34": "2EBzr7iDPxt1Bf3AcToSYuzTMAok3seinpaB65R7dZSCKu4voSVxaj8w9ukrLbHaQkAz7255yEcC1szLpyfmVFU8"
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
