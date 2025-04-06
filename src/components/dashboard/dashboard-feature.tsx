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
    "2T5okwRPuE9VoXxFnFF9JXG6zt9GDpAr9SQaCjSFHtNrYNmvMkocNC8aoqXi4LoPHoykP47pESfg2aZxYXwTZJbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHSybTWHYHCXdA86nZUk1ZeGngHoXkhoRp5BkHdobvxNU9yXotvic6PousjNRHrkYvQBNMCvTM1HiS8xSb4pkq5",
  "key1": "5pRa1euDZzisWVQ2KUPswCK9i5RhpaUzzggdM5CGccdYKc3gShtXpQVydmUxaYSwVaA9eDrfzmunFPvgPscohNDG",
  "key2": "B4uw6n3SMVmnk3LEmDTcFfL1Hx6gmYda21wxutfDERn1Ni3Sfzk8fXbXPFEkxPkFPZHDXrjgaGSsAP5j88nfzpr",
  "key3": "2G6ys8G9zdk6n1daDUaNg8WNvQKfVc2YYqtjiyW8kG3GoLmkk7tQEKHcbBajb3kBYfWUYwz8FU2u3wFh4RDkBvhc",
  "key4": "4yt1KL2kEk9W6axyvxBAGguM9WqtmLWDtiLY8tJqXCvZ4uE4ZfK9biRT1KfGZDKsvuU5u5Cmqrwix4ZoepsBFE1m",
  "key5": "5LNrNPSkGap2kguhCT9mBEBXjkvjUHduCbwznSTJYurJtSenSL6hLjtRFmxT1xbCo6vdRTHb9jcddpKh91BLHHJk",
  "key6": "2EFngtRZVeH4nK7jDQkYKFdxtsPfHz7Tyv8fdkuw8qdUWwHsmcNLGDMCmsw8m4aRn4rCraLp1sHacy3qvMDM7BEx",
  "key7": "MB9vCThsBR3gHXHF3t6Xp6UynbCkkUdwDgAeyN2w9dTNW2KrqkAc3D52KXU4vQcWo1HvKngh8onXCvBDAXvGJgo",
  "key8": "SJqY23zpK64FAVuQGKiJpDecH5Fdf4DTgPWu4b3ZZ2kUMtfDCfv9nNiAa5bxuU5uPCDjWUa7c3M3MWYaKKHrG35",
  "key9": "2BiewkLBQM4sjhysSwCN9HEEg6Y7Fd4FRKzux6n4tmMx2SFCnAip1vrcRoA1yef7HNX5fnVwPPNtAzc9Jd6mu1Uu",
  "key10": "4WPnrLLbkis1Jf37Vp9gW2Ew8irfB9SJzUjvnVmRxRruoJDV3UVeSghC53gkVR1tGs8nkx2CfEnuex4h3U398E6Z",
  "key11": "4hcqwf2xqKdXkSSdW4NRZ6kSj4urjdUf5zkJZJozUSAfs62v8oCSaJ9iYdHa2JSfFLeZ89QKYZxiYAAYXmNvkjwo",
  "key12": "3PBJiiqGyJzCgvmwVfJN3kLgatjmrenYPHy5jDy2R8VHGqPkawAAjpftaS5YN9C5AB3njfbhBCPNMNL45SNaYM3v",
  "key13": "3gBdB85dKbJHzmT5NcPBQwT8ynEtpFiPqPSYSTbP8wHLWn7uZPzEeSSFUbgTLNzrqnAyufNpEoucHwDaPwtzC4cb",
  "key14": "3eVmeNZEPFoSWtRQcokHPZceQ8wQwZ4fMU2unCBy5BHUo1Aaz9nDAULbsx26hwif6cqadq1eZ8KmF3k1bZCb7sBd",
  "key15": "3DSDSxf9pyUU64ZSLqexTG199nvr3wWHjFYz8XcMb6cjVerZKz3NqAL8iPbFenTFEaNTsGX2iNrN97ux31oF5nRQ",
  "key16": "4HD4eEpuYsx7zJy24X58312Z75ffbHTGjskyjcMdHHWzrDND7p1fJX7X21qmx3ydt5SZSx7Y7Svp6H7fYUArBmEu",
  "key17": "5AMkMcMSjdZhCRDJL4eeCLYjxGzJEAR9J7EMiS2FbaqamFtSGaFd9gZ8fh6sVXT8Z9ozxwzXqEKkPoH8ikQeH3XA",
  "key18": "3V2Nt7sXw6tRDmhGgqQYNAMtjZz4pbUqsbadwHfPda5mGxMuRViodn41XFQv3LX1BJ1bKFHirHkdseUxBro12rZr",
  "key19": "5NQTfiDoWFsSV9DgLkFWFYxeR5QA1Vhz2hvTtgRN4Fim4T5MTFBw5CoX2vA9SnkFyKiLRyYaN3VRkjcp33qUQYmw",
  "key20": "4kq2vP4BkEdmYbYZbUMKFbS9USy9YKEHh3CP8kpBnqVLxqtvheoiqfcoPXxgNyZs1edoxeoEc6Cee1oyH8wR4HZn",
  "key21": "4nLzUewfDF5vnKx4884C2rp8Wq1LHTwYZs9snHELRABycNRhjFmKE2V9K8pLvjNzCX5d6P3CqmdkVkZjqC56Z7Jd",
  "key22": "1qQpWAQKRnjkWa2XNxfPKDUbxPD2S3wHd6CC575MsdTmuvqMQT9vXg4sGx7cpzGWzWatnsP6KxuvLdEZDyHgL3S",
  "key23": "pNepUJbtojv2Yw6KYen9n92424zj2K1D8pecPte2kmP8Q39CnUg1xAA1rg62yCiG9EHk7eFZFFdG1YRrUqpsrQM",
  "key24": "48WiJGUADkgyFsc4z9uy2qeQQ153wciJyXEKvD7Dq4J1uWUyycpL1s6NNhME8o1hryPQtXNgBNtmNyRrDobbP3m4",
  "key25": "5GaP3RSv9e1hGa6rqDnw2sFKHUSZx7G4JyWa6iNEgyHJMqbaxXAVYN1PxHXRmhA3mEMKLhtJVwYDHZSKWLU7vse4",
  "key26": "3pKUzjcEqKLhBRAMSSLM2Z9uMRZsLyTJnM49RoMQmzWLSbN7VYLcjSx73Nn46U4fMEcoqRwDvgsUAJPq2CXbDr1N",
  "key27": "5c2ZiG3Zm66QmHRDDU98K3jbdTzsdfmmSnpzkqjkc284Wdq9z7roxcCueMdc73ybJ3vhbiBh5BtvyyK5DuBdeAnp",
  "key28": "5ZNTyFkbCH8qxAjZ88hYbnHCBNB627tFLGkTxRZyggMwpyoFa4WPAArwYoKzUJCarWDYXT5cCBzyFQyx1Yv98PW9",
  "key29": "4i2JatseUMnfaH3z1dPMtZwCJdrms6bgVYsoXrkn6VBzbUtChN2e8zcgNP54axYX8H22KrhtrX38yAfahWc4EhJP",
  "key30": "DVhJMjMdJjQzzfr1XqtHfxZya6e2td7LbRUx72yr3YGh4wKByTBJcVWSjMXXeUxYvWUezpA1fdshEtxhWrBsuQJ",
  "key31": "rBK7V2CsbvJ5mpXtP7tz4Up5LA46gq1AuXHw8zyxhQYMG99VDEkVPkTgo5tX1WA9DjeBNdirfNbJYjJhF5U9riE"
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
