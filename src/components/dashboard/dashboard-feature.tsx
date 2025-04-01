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
    "32bk1CoFSRKFKTsVurg3R6Sfs5X5dB6kWW8DvFPXRqKp6zfBKvJXRnS6ZxJVJgmTfhhBnNca3cUnGgzhpEUZi6wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2oQ9B5BKTdnqosxkrX4LFSWMa92UXThXZ7cz51ssJup8QZscKLzfjErxDyRDAm6dHrknw4LpiFeiDgHHGzeyej",
  "key1": "SbGyFGmEqmHrDaJDXGLCwYM1mURYPh4bkRsL1MoL8ecj1omD8LXyjMH8Gh7XoZJMgwmXrtdYMC76vqXU6cF1PmE",
  "key2": "3E7zAG25pJ2jZgpJfYbAMppt5gfbxw41oeJ1max7Z6iVBtnQxSvtXPUTqg5J6Um2kd7pHWpofYsqfEY21WhXEbcp",
  "key3": "hirEdY5UgFYDnyq6pLbAwGSkzfmVoVGp6VC4MEW34ufQn9HxPUiFZt9bACy2gtHyaxbhb5qzs8MaVbCb4AWkiSJ",
  "key4": "63NiDPaNVbpxgP6VEW21jHgbB2KYbZoDGWMnHMLz97uNpKoo733kALrwDUQQN6hWRTb3zxAx2Q8z6vG4nfvVHY6u",
  "key5": "5tU9yVjXmZPgBFT4huy4mi25kiUjrSzw43wTcnt8j3WCSeLEFkyoTgEohDaP61SDP8JhSZtvsxH2tuZpPQDG9n9E",
  "key6": "z8bBt3twTwK7VcRc8XfzFtm3fYvNkKoBmq2y4rJeEtafMvariUYFyis1qntBnrFtCHm9McYLgNEq9pXE3ahEFop",
  "key7": "SwrsstbZH46gTX2wU5dRQ2RCYRqvSw6zBgcq4DEKa3k1pZfhLCskQ7QZc9ecTAgHMaceSeHbFfKFUsZMQJFRhs3",
  "key8": "3Vakfnm3Ji6zNQKGktf74dzS1TSQRfXTsPpaP1AqHgi6aA2i12ubed7nR9eDfsEjTzrKJq8wQSCqFQp3gTaCiwGY",
  "key9": "3ojapL5cJkqZE6nBvvMgiB4bUXHYGmvUcpNcFnCNcEBWsV9Ks8VH5yXNP474v4UXsvTEgiFEfeDx8PgF3LzJCKgU",
  "key10": "48hEtQPmHAMA6ymrndYL9tgR2gixAYgcNuGiTCWKZ7ceRnEoAweCH6EqarP35NSoJfEsA7UU4Wftujo8ruYMWTHb",
  "key11": "4LWjM1YY8XbcMstB6tgVwizoS49UvS5W5ab4VgA56sBwipjmSZCTSHycznyP9ka6pyvnUf3NEbobwxjcQCWet6UV",
  "key12": "3mboMVUemRGtSuMoTtLcHTX6HMxJqn6UXypKWQt52mmJVDZK6v3WF7ukgmLaaWNm8ndBgAhn2sQN9F3D78a53KEM",
  "key13": "qxs5t9qLD5e2mbWcEgaby9F8GpWFUbZDFfMw2hfjvDWtR3brsJTA7nG7g4L96TaiAAqmYPWpr73BSYScgPXFSUV",
  "key14": "xXZihvQ8RLiem1m24jVqeaMV4abASi94Ett8pQWoyBgeUzVcW6XHSiprvhsqeWA7kA9UsBECieaRs3HHSDc9Vj4",
  "key15": "We6mAvceW41u27RP3X5P5V77ZBkXZA3HTdRjdyhZTbnsoTf4XPa5rx6aNQXYfws4HXWcwCd1Lc93s5ax1iTXb2a",
  "key16": "4YuBe11VYCJKxh9bvK8W9CUtTn2GEpiNTmqJnrrcjMSFZh75u86tfqynrsEXGSA4oJDtL5FwNpzCRXSZTS8RZaDz",
  "key17": "4VTkAqBL3Fs19cvv1v9nSPtVydMHycE4Ed126m7Vwi9k7xPXso6XvVgzkKKiZVxGaYpyT333LMmW2iDF4Nhtp3Zr",
  "key18": "WrnmFLiV5rZzibraTze6VPU4AcYotoRdiKhmxfNoAcGtSGUs4KLFu7QDvTKXaFVHtAVuaHSy5norbgwvHtsnUrm",
  "key19": "ahmks8DdmKWhi4MDUCn7h5f1Y6mJFdkib113KTALUShpeApLZnHEPUpBfohAC8zBiTLpb2QgxLu2vMAXv3Dq2mQ",
  "key20": "3PDLCCMeMPsqKHB56SCQGr9ibqvHUL3dwqrxMAt5Bcc1kaw3Q6k5i9FfgzdfsFwqnjuYe5hzfq7KWQfMxPzrTT3v",
  "key21": "4vc5LmMe2d8ZvrotXuRc5wEuEafDyaNaY4ySdok4JzEsuU2oCRJBcpNnKVMd7Uuv34o5NSYwad4qKdjHoPt9pBdP",
  "key22": "argc6F9xqVX6tDpDwhpTYohDDwuSegq4CSD6P45KJoJdXpaytup6wi1uANKVJdoohHmw64wKhmmEHSYyo5s73vo",
  "key23": "4pb6nqHgZdxLSmtiRudF2YxsEZ2b3T6dKjsPiZEi9vmV2k6bxrrpp8mH7EbEaJALzKUgvYiMDSYSCk7jNmFRDF7A",
  "key24": "4CXsoyNUaAnFDPcPxNtHavwmy3bmQPSKRSDhLL6btsCZT2D1vaP8gFNxxYijeSFitRtsQtz4SXn7tetDaYH5LSwv",
  "key25": "uaBxLz9bS4uBgLV5Dd5LcDzCEXJmjbtAgxgvbyd86MqXYGotgSCszLTLXysaqVB3aHGqBy4oGTBswWzhPZ8dwaJ"
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
