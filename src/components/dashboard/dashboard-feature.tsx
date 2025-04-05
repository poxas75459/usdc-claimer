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
    "3DTdgBVfMNTBdNbGMqbqsTkg3JvNorLjFazHAD69WGio4dwov6zgh34zrSShv1QZopEX4ScWysK2a5mYq6Z83npD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ompZVPRHUUz6nhdP8DgQuV8VVJg2cwUYm3qA1yhSHQYJcgXEJVcJrWNwAwkAyHhvmJeHZenu5QGsDDxeDEywWSJ",
  "key1": "2atZ5xKqK5cxJW8Y4MHdigU6FmPGd3bZ2Wh7BJw1u8M2pBk2xqKbkAHMTkcUMEZca8LkojShvBA7jKqPZ23WrgPt",
  "key2": "2H7S7HQf8K7d2t1KfEoTEfrqBGDmCQqACPieu1bZgZjHJVewniRQuybfokmooWMpSu3HQM9sxPc9YgirUrmJCg8G",
  "key3": "4WWphRfvhXNcHTpbTGKBtv9p8i443atFMaRqRE5Nh4J2eiH7EgHe8KUx1hnYcBLR348LjKCAcgDGeDNycvRcyyrs",
  "key4": "3jZkiS7EZ2pU4D7VmNX3BWx8WbYCX6FfYd9mTckn5f4znTEBxMqqQHuAK9hyW1kypoxah6UX8D37AbEgqaDUtdPs",
  "key5": "o8zYhxsvarUswN594hoYaMx1Jy6MkjYd1uDyPjY7MoLVB7GWyvtmz2NGE6RNqBiuhhiYvn11BgHT2C5crBpwhg5",
  "key6": "2s5K2VifKbNictu5ZHZVauvbzfY4S4nVv5sEv2J2WLfHZVE7qJ5n2SF19v56pZ7vNFx1fm8CK95kSnBGJE9hXKNi",
  "key7": "5mVGeq3SbjAWivyr3gv3yFWRkM7UZYwFJNWB7iWAtg4ze2XwpV4Y3b4KkFozbhmWcuAnW9cMcxgWELPZuyf7Vqvu",
  "key8": "4E2bGy2fjXRgpxv2t9pWNEmWLtbDMqG1tHXqTUiw6zChXqYmHZHBxkKHqBAWs9ZdGnZHvPX4KpFdSscyB2pH2urQ",
  "key9": "y1imJ4Sb69NkubvW3CX8tuvKdbABMufBLXtEAmFi4EDcsNZhQBjHuc8HLpT5sUrmYpMobjtvoAqnSZXVaweMHbZ",
  "key10": "2QeDpbi2jVC3yknH1b8qxQbhUR7zuY9u6aWQUwgtwra5LFkRmcoTb9uqVcSEPPbuv9Nnjontx35VQ7CAzza8dyW",
  "key11": "5UMQ6LfvgWFhZGwEZ56vxxbeoBTym8e3UQ95T4P28HkpzCQYpBjsVPWu32BprvVhckVSYGdb9NANyfozCvyhTDSf",
  "key12": "4d6TQbvi3aavtdd6qttXBxymG2pLnTqL9NtAQAi6BtC7D85sLeprELu8mQtzdzHYVtF9KAAgBbxsYr7i2ASo3jju",
  "key13": "4iVmHhhEnchgUyUEeyZp2zHhrw2ewCb3AsgsravXuRgoeMoN7LHvradFyV1zUBBxNEAzqZb1NUMdJADVSs93cYkg",
  "key14": "42B5ynMa56PvFVLkCBdeXL2UorRqRkbHtkttNdP5N2sN5sz9FiTFHsaY27hNTkDzP8n7Dmd2XD6aqQ3CVpypEh4v",
  "key15": "2LhAVsd5AKguRHgJrFnEZoRYzwzaEfuXmJrmuwMtsNfPR4ZfGC3YCiLNpvcaSYsVLUEBaWJD8NTPJjDQTW7wTM9y",
  "key16": "ca8C4zaYc7uveFkcnjswWBUnXNfrdQQs79gLCh7mNLz43EBzMKLU5ibHFDYjFGcPCDfj9aSp4pCdsJoYQxMnLow",
  "key17": "5iFMwMRQxxb6qqGf8nkCURtt3ytZuuBwKpNSzBwBozPm8MTiPh6S9DpxCCSpb6ZuUvaoXkvrVsT4fQXyP6c7YwZw",
  "key18": "5oGN5eb4WA7NPZumZpk96sxXYpPZvmDmRAGQrTNaxVdrpSvP3CHC3xcacrCwRssJnAdqZLRgngfWBzjHR9pDK9Fa",
  "key19": "2ZAgKMuXqyp2EmNAwE6D1b5VzNyoXLSCNgqyqdtLt6Rxb2XP7V16TvrZwVyXEb8Q4w4PyzqXYeSei5xV9LXnc38g",
  "key20": "23fZvo2EFMprD22V6pa9noRfmg1JHQsB9pWJ5dMJ4j4kvRBKdZhYyDuqcUchZhXBZaugy5d5WAuRig5PdbF6FyMD",
  "key21": "7QMjP4Km3tKMYed45EmHNZPLMrxFn87BD1arwQ1iFNgoVg1vuum5c4JnD1nGgJihNQZpm81GrPM6YPzZ8vT5Dqu",
  "key22": "3CmRv1BdYUg5gCUEaYoBVwyThsehXDydSGEkaRe3t3LgdXnPMfiiT7xSmLkP8uJRemY9UPRSKs2XgLmcSVn6Qmnf",
  "key23": "5kLBuUuxunsCjWBURP6RpkZ77T8ZLrqVTUXpkTtYsbap9bXsueLVW2B7nrHnFS2HoXjPrJLRRe1sBGTaauYtFoJJ",
  "key24": "3yLEDARdfqZiv1YWH82iPwyGzzPdEcbjG1wGfyQKJV8ktBAoFuZXEgBMAoPamXs4toE2vEabfcKtU9Pgpu95DDo",
  "key25": "5neF4cLSEZzk6G1Ua1X9STqoHtcrpZ1NtzZg72iFNNRCdJevBRmA5vtESzrNrnv68o3V5VYW4XKyi8NgGQZJcfFz",
  "key26": "261nhpWq7xmFZQEpxDDgrBwZt8jBdP6io3W8hVcrpuWGUFekGcmDnRRnuzbr8G4dciKKT8KWmABfwtszycv63PQ1",
  "key27": "rBUyJqcoexj2L2D4jRPezgdfhecXDtsBCgEGGqhYMkF1K5UFL8nYCiBGM3KK9bhzvqAEYW1CGoELX1nntxd6uTT",
  "key28": "hjFzF17Se5Ri2Unz2Qu1haPP6VqpmKttykePJBpVNWoSc4ceZnHM5kFCHtzhyCvVGQiVkf4G1jgpDGeejMw3ujT",
  "key29": "4zWYBuxJL7ZJKwJgsPQw88eeuCSncbBBHvdtrb9wNxZKgq3n2vGACsPg4BMfWSDrSNgHvPe6jvKX8QNj7CMF3zWK",
  "key30": "vLC6gP3gjv9YnH1K7LDi92Tw65eHuTuhhmmDGvEyyAkqQ1bxf1f4ahsUDDC2LD5Na5SdmPoWBoh6UQMcrbM8ox5",
  "key31": "2CKd6fKQTTtx4UUmNA2zum9HNtNxiy2ERgKo442qPdsB7M4aphmgjqF91by49BaqfnqzKiTt1nc1up4CoHhmDLXV",
  "key32": "4MjRtjnvjZzPivoHh1ekYCNMf3i9NEHqxp5Qq9PWiixwzatYSnnhUinviQPLFczgeTNGLYBhLrMUvHbTXVB2z4ah",
  "key33": "2Wuwd6BKYjTtfcnfAJRemHtK8sawTJyQmxEQuEpikpQCSncwKzYjf9BR4bLpdq4fstEPa8s3rk7DYVARBnh1qwMx",
  "key34": "8i4JqcNMWPw7y6w59dUMJqhgB7Aqs7b65pULMf4LR6XBtZf3Wnr67fom9LPeA61LujGhVXRe2jupq8tRKvdXt7k",
  "key35": "2gQPYPEN7QduHfPjGsPPXdMLD23D15TKfckyfNSyLBAV9hZKWYrTgzyhCwYSXbWRpV2fXStbHVitBc8SxS4SSdMp",
  "key36": "5oT24Hr6Bx2sVQdorDETx6tPRjRHnQB42CXEt4b1oHL9PjGcCBqWGYvt7U24bmf8vZ8n3BfjsVsqruviRxs3VLUK",
  "key37": "2oC5W9vJw6e13RvbgoKg8o5wripNzpZS6FRhaqg94zCG8uwXe72yUMoKSPMGEu2pTfD72wozZ14NAFHeNhDPazpJ",
  "key38": "4MMVRFTzQ38TrxexvEFBzWoh5rpVCBJZtgzxQESoFDj4ds5nJ5cQJ1iVVnbDUf7PZEYactedhwFRUmp65w68tWCW"
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
