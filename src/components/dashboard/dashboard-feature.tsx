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
    "49mnkLXw9i8pdZmPgAxyaMELtL87PpzdPkbRntZg7wGTT9DgUBi4JrSTwbVcY7LHvbybtNBUR6gUhgTZ3wX6Dkwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9X7JT3vg4mCayuBKwwbtVLidfBo7UUmq5Pff1pvWfvdJ4CKQ2bFNZoc3DuomdY3XFRUSmYN36EUGzPpqJFRHvg",
  "key1": "R5mHruXP1LcNmchQVnpzarrDRii3GjDdTCGWMEDi8NKLjUZyxz7wnPFue3rdBZMhr8wF1fAxaDhuyBR8dVLNBxz",
  "key2": "568HrCQ7He1JRQ4uwpW2Fan58S7cKrCoizuikEi8xkKx9YVMnKFFijt2eg78V4CtHbXRbAbxv5qma49qzrKsXuF9",
  "key3": "rB6EZzgWYzAJB3BNFimdKAaPpFdGhWFZVrmWSbr1T1mH6ryhKZkyPH5qdhD2nMEdtM6C6dBfLsUsH682R9WmaAo",
  "key4": "2seRKP4GNR7inzHDXRCxLrXdNN6eoiNFMVLXxtUa9tJmqrEsBB8BUcFgba5CYbPRcbfjLWmqW88wJNTpsu5EBbfh",
  "key5": "8Lwovjm7SXyQjgSWanF52TvgVKMwc7FWjA3wSEQdeF79f7JKK8BZGvvGRibNuJQb56fCof8BHoCAgpsR8tRKfuP",
  "key6": "54dzMRdgM7Z6v9B11xdTm5aTR8eLkhbYFKFJ4PbomkaD6AvotmJD9fKPVotBUe1ZuxS6SBKEWfu6o82NkbRKp5xV",
  "key7": "3BVya9pyhv3YKkHmfhAQikSngSgPq3ApNmJyD8MeZqSR5MBRkkkFrxADHmexGM6q8MwncfFKcwV66BBfJDDZgXzZ",
  "key8": "4i4R6fLTdEFVbeHA1qZgFRpy2T3MCtgN9toadL7EGnpZBjue9PsZPAU4bHc4nRaz66VXcgbdpBG87XTC7UQWyHvq",
  "key9": "57gvgn3jziz1QHCRAyYpsnFiZHiQiWMD2F9e1B6EVKqfVbTEpT7YJdn9QU8xXA5A13X55rKBeoRrX3skDc2HKyCx",
  "key10": "66ivqbwL9VzxMcGr5a3gqXtY76YQMsGRrRvpwW4DNbhnHsixHpPYLiJkCNiM2135Kzepy6KPc3hDDn9A6B4z2RYM",
  "key11": "5rkzZe2FqX8ExLHj2JCReNmNPGy4yCxuU9gvArRTqzHoNkabHF7RjrSNvQGaMppAWxA6DHptYMa9RT61vdgqzvgw",
  "key12": "37qM9fX8PN8dkgYt4CX5X6CEta8aAo2sxDahCqnAwtSt58ecJ12cdSijrESgqhai66zJdpmfwmmuoW8aeTTjdBY2",
  "key13": "f2Nv6inNaWRmSSEDRYCvikin1sf8Wz6JLYwZUTG74yKy5ubF6hMtkG6AdKLMGZUvWwzR5Q5pFnxYmGrEyKzpKSM",
  "key14": "3cv7fH1hpiMdou1TjoGqYypfea3qNwRNf6k7U9kyhSicBF1BACWBXJGAhixkXDWgzeLPJR1aPHJ6g9oytJ3Skfup",
  "key15": "583YaKZkVKXqTKfHoyAmf8wGpbSRGWKPEuLvGDqLVopgNomau4epvuaUXR7UyCw1V4Yne6278DCFFJ7cr8Qd4c5F",
  "key16": "4WGPEmnCTtuw5e3DFD2ToEG1uUnj8uzJz3KmfKjZynr9Cq4wubRxeYgks9hZnDWazF6GUDz5o17X33QsUv1vzkEZ",
  "key17": "3DmekLLesGvzdg96dvMofcRe7j8DUNrvBXaKv7BujzUs1jtZzn8QQ6HJHKY2os9rFW2uz7EpMtpw8uGFuF5KEpHC",
  "key18": "4Q2eUHQwGvPfDB4PfnqTQ4aZKCJXWB3v3ZcTQB6QCbp56gPrpwF8mTpgo7XUztcg2rpKbDta2NftxTb21wi1izJk",
  "key19": "4112sYPE99CnZY3u67sY8kNvJKBRLihk3SqPeAfjupTUU7DTMT8hpaCKDNYGUmjDAn7shxT9tzaiot5GqS83EdsL",
  "key20": "52aGid43qmJgUrLc5GA9KH16AZMenCqt3gfVgRZBuxdSnZHt1QfBRNcDiFttXxB582L6yBZY52UvVQnqoR3PwCGK",
  "key21": "3gaXvnecDxtSZFPfzMKrmtbdLARRX9jm87Wii4hawNuDju15tcUSDKZC7d82ssCoj7s92VPfa3cvpHMxPDQr3d5S",
  "key22": "48VZoHSsVWPfTK5ScU4gqe9Xgwhg7Dj7At3v8EdGNudyvBfL6dMHgeQZzxiGC3iyW51MEqTuCvH9uSRzC7Gp5QkP",
  "key23": "GCpXLcYiuj8fqvXFR6WGMpo3QCFKoXc3jfUY7qLcRDnc1sFkwNPszs8YDsUzNPELftt3RJVVpgPi5am3mTHDuGN",
  "key24": "3NRGNUyC3vS5ZVrP5Aq6KpkoZPCUZRPkxCfS9GSihR5TfhkvMarkzd1ySaVDTWU5RjWJrsJDo9R6nG3yLuUgZLBt",
  "key25": "4MQ2pW8xwsJiBNpzAiJp7o8XUwBEH3rL3GAUZrxgzkyDaTn15C9mFcvU74DUN1p44wz5N3EVCogo9EskHprxuxRQ",
  "key26": "2q4xEKbicRiRBJHk2LnGBA1nChXbLdocSdTcgu29vQFojZkSev2s94kk3nGGhsHQQCiWVaot3K2CYwm784Ts94ov",
  "key27": "31yELczYsj4eYCZGuAcCJJf78HqKEHXfvPv9RtBoysNq31s6Dnyd281xgkSGMKLGNWSjH9Hkk4x5Kc4im4yQ6QV9",
  "key28": "ny2PmNQx726MrxhqTLM6Ew21eMRLMakKxLnP6eqZEC62SDZTtFGY1Ums7b2ekXEJz3AU8XKYzdApX6jS3CjKCFr",
  "key29": "3ECaAJA2h7cFX9mXs8bnmiz34sbdzQKyVamKkh2jjxXxXHFKikAM4uEqn5rCjd2fzVdN1bQGocvW8EqQiQsR4FKx",
  "key30": "2sDUi6kLKv6y8bHrvePsCgStASRdxaJxcyZXWNraDM8JSCB5kBSX9ARrgy2gxrBi4T5XKueprHKrNxXSpVWVjS8B",
  "key31": "5zhYgeFkirNxVixqxz3smQwnT9v45BtdLiWfZczfdMrqwwtWZR7ZAidsZ3L56bGoJDyAE4gReifxhRmU6hiHk2bb",
  "key32": "5oSgRVoG2LU4U3br5ZdETti9sFfem92Bmu2ekFtDqseit67AMyTFW3vwvRfWvUsuFDTFfnVBxmcKWiLBuhVDCjNQ",
  "key33": "3FAtjQfKUzLUtKmxkaqvKyJNKKmDs2paPcKPLr9xd9G7aUAj9Fid2yBiP7AcnG1nf7nEzN31Mg82GfgRXWHjC23J",
  "key34": "56QPPP6B7i7uYAtpm4GZyDpNUgux8LWYZ4f3jDxNhyjHx3fjA45w64Pfn7EY9Wcb1KBK73Pxe8fBAvezsXQi9BYD",
  "key35": "KMth7jNTmcySMpjgqZxi3zKAtT837mxnrYoeav7cdecwjP2h5AARYjPPXSNYUMqPPv3gP1AdBS1ohdJXRWmry2J",
  "key36": "3XDXEp6Cff5U7yrMawJqeSzr8ggnBYJwXxf6MZGQyv9GjqziA1rwT3tSFc4T6En899mbkstS4gvTFhCwrZ154Uni",
  "key37": "RGXRS3JRp9rWTphwvcmSgzxhEKPkSxAhEUYTZ5roqEXAuBGA9ewhe5a35mxKKJuRkGgAmj7n7VVaSfmcSj6XqnJ",
  "key38": "5CwNUkqAKAABfWBxj4gdmViE11jE9jtqvHbqg2tctvMppNCh9t6dNwAkdFVG6Ez4Exa7DQ34WCLxJUvhowYe3w43",
  "key39": "5848o9jYP5hDqGkyrkT8dqBXeDpFwJyqv9zw8xC4to3e6KFJkfPfeBZeMjBBEro7NDRqcDxoAAuSzC4Yj63pFcov"
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
