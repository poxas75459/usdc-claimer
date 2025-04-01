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
    "5Fm6uMzx56CbP1oA9aB7Vf13HW5uxFw86B5bTAMhhieYdBAqLfCnCvTsLZ1DEj5KpKbPSQQ3kdGxirwsfmbBpP7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snXfEqCFyk5U6TUMqbnd1C9kCuviRNJnTVkJryQhFZzMEt6F6ngefZaK8cXiXqzLb7DVaH5VcKtsYVkkXBpfrGF",
  "key1": "423bbdMRCkxZKpnkZ1G5T4uvTp1K3VM5rzid1n3XNL9bPFa6FD9wvHgouWwksYghwscZuhUfkQZpQt1BA2mHhwZQ",
  "key2": "2LHvCUSepJLw2tepjPJhLeF6eBHmPqvjQcTyETbAmQtPG6NzbE7a63pJRuBKbFhcsSDJA6zUvW1NfzksNbcNVe5D",
  "key3": "baef3KLYpswt677mgbDiULkqVHoqfNBBbm8pQSyYvdTTBSWAV7bHYv4WGjgaqRfQHSLhhepUEDPDSgK2kQQgRcT",
  "key4": "4QbdFbhmYhPu78BfcwG4QhukwWrJBUJUoa2MrjVtEKjB6EUEN3ggyQqj8DMHBDVfVUPbbr8FhYwx2MnT7QSMYC6N",
  "key5": "N5KeP2sHiztuBECDhLcTD7Ji3n4BDZxY5kaCGu896s1VXF6odyiFkPY4V5zV1vxnFT2CTfgVVc37zPuhsrLj69n",
  "key6": "56p41hvu4GyRjDxtqnFNsU2EpmZ6E62ZDQuo3ygKqr9RDDMZCFhQjHf9WvR8wRM5qjxNHLsqgqm1TVzYSXJUJYE7",
  "key7": "64nJpPxRFBmJ5dAf9HKBjfmmc2tfcMuNH8yuKcPSdB38MswLFLXzb3P6CzV4coL2bKUvo77EGy3EVgBAgTmd38Jx",
  "key8": "4dMMPL2xttVsdYh3BymgzG2ZX1KUaH6iqwn2yZbbC9FT8WPAaYkxPdS8r4NbSB3nDs62EdhMVguU4CmtEaz1JUvE",
  "key9": "5BbVbGiXpvhHqsj1YqXgoUdfHhaQv5t7rjhc81yEtpq9uifVFFb7h3Ch8hEhVpZRKU4J2cr6B7tWKMCe3qquvj7L",
  "key10": "4vjmq7fgAJ8kELHmX22p3MLK1zpcN2puQ8RpLNEMURJ1NLdT6XwBjVDbLwYxhenqYWdnFKETy1YaB1hj473wmgVp",
  "key11": "4bYk2KSgSr2v9PNBbpS7jCC1ZjW3Y1MvaBQ99qe5GJ7AVqWbqvShvNd4wRhwfeaDtRAJFoLj2xbT79pDWq78BMrr",
  "key12": "5WpwtMjonppPHmjq8FfgxAWjjAdouwJq9VU4pehn1QECDXhcs35nquymxdodXNiGb3rhX4r1PL7nJ6m16vDaYLGp",
  "key13": "3oJPzkp6j3VWhA5TLhMPtjenr2WbJvEuEPKy9dMmPrVvwaxWVcYjb4rQi6K5JTQd6EYd2ENB9RSvve4ewUEGRs3G",
  "key14": "5PHzzBqfVqXiT4Lp8MExWrghphgfmGgDwWkxFMraxN1Kqv8DiqR5ASTDSnU3BaHcX2zhZ29SSkZuTjxYw6SDKpYp",
  "key15": "2JM7rtvijAo3FAibWBTRLocweoMc4KkqnCveQaXYn818MwBUZBSuQq6wGTf8dP414YFHEwXP3DEPHrM9pyW9VJak",
  "key16": "3dcCormuEsDCZDhEgvBzwpCAf3VZtmMr4xp2twPET79KzyxzF7SM3Lcecif17Dxforgww5ndo2HHpc8ozAfbh2dL",
  "key17": "3MZAxcR6bebKCLEwGbiJBZSXA6hXUCEpnsKZSceHsXPuPMXg19sU14SKsJhJP46BCagLnGmJsyA6oW1fEBeYRfZU",
  "key18": "2EZePsnYV7VHivsazJ6ja73NQjc8WQufyB9nbTPa2zTn75CYtQZcXyK6SzcX6yRJzeh4Act2Jhy5qaHJdEGfhyTN",
  "key19": "2i468Q4bRNsvvB2vCYTEqTcJ2zgxwtmhwj5gkeYHKc6WExYcRCdA69WhxjW9VXwqqgQchaBvmw4jurQJDMKQejbZ",
  "key20": "fswJUoP6HZzJaGccytpYqyYkTMfrAQUso8H26bbMHWbhKmsN2MLk33ekdt5LDLHSugStd2gyFgGinDohPsHnQaw",
  "key21": "2SosyLHaaWQYyYRKcL8HiBME6VR3dyQoBxTcmv6QY8dMKe8DcaEMJUkUzYCdUdkMrkDcwvqwoiTDusfbBQVRSg46",
  "key22": "2naBgLVwedTENkmGZnD6qptYPoztYhAZjyJnkrYgJpAi9QsZRNkct5eYvtcuJTtg7SaERgxraYJ2rjHfS2Ji3YL2",
  "key23": "3kDrUHbvKZZsG8YoNKLeGN5RFCioGDhToyVL3cQLRxi8n69zyq8DN9vSYwoKyaaESkTXZ3ZMFrfkn1BNTHdf5aAh",
  "key24": "GwCJoP2HZYWGHKczBpLxFYV1PcLBFzxN2zc7UNfGKEcb2mzfK2m4ZEK3FYsYh9icKE6mQPEsqj5EQxPYqtMR3VZ",
  "key25": "5Bv37n3wChaB3oSUrzHCh6gX3FAchg5iGvjBPEiEi7BVyabhDe6pKqtRqLh94X8uLYiDoBQRMfajUR7MdyNE1GPW",
  "key26": "5fgRAixMrT7VwTU8z41TyNmkFasjbVFRBFAXjKkxN67PsemSXogQtBCdAkLmeYsvpyzmdWDtm6G6B2VMkvBDbBHD",
  "key27": "3ErQP6PHr3JxnQFF8m2QcHmNj7mZ3inz9TCmDFS3NDVefSzQnrTQY625qavDX54Jyjhpm9yKzLdtjyEgcrXtyWL4",
  "key28": "47MFuZQCk2mqbK6dV6YKGqj5hVos6kRYa2NULcoNfJak5sNDnLcoGS8h46WzjovadQWYRWbVKAcae6xiDb411GCD",
  "key29": "4PWW1GzbZz5Kru3ZsJgxzoY3XkNaM9XfzF25U9cNskbs34gRgm34jXWuztKvWMzetxxb1vLsLPcYZw96kqf5C1wf",
  "key30": "4EtkjcrVPkzMT462J8qNpn41RscBmoR58StpzwN6P3RgwJqLTQj3s1boMxSZ2gAzJES9byGGnXLayXYyahZwvEnK",
  "key31": "5kdFLmdQ84vz122A7wx8o3WVJMT4vGH3KiWxgMk6ApX4U9ERNpNxEMgn4kvbRXT38ZK1KG6tD5AJraBDfHWDnZTJ",
  "key32": "3aEf3eqLKrc3UoGhxWi9yYoLJJmvLqqCYX1JJWX8c5ASSJxBmK5VjfBJjzSLPxevjLAcsYvk36BV16c1q6XsBV3D",
  "key33": "2PM88CMCcYYJedBDLciMADyrNkfbQYz99XBRwVnisaJNuBPNzGYuHakGaJwZfKpFNYYZYQHtoPsJ7LCJ3XSkTt9K"
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
