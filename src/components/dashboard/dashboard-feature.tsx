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
    "2jGX6DUS2Ym7L2PZ22DRxP6p6fkKurPDdAB6gc58ewyL1sGaQCGKuxi79HLTpZ9hrRE8q7KXdYBucuNsJKMmAD46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1WtK5PciDTA1WxUAQDaKxXKUTd1x6M44nhKR7V4S46ykcBfEqZu8qRGMLaAQnrTbEWi1AsmfqYH4CQaudB35Us",
  "key1": "2cxAUZ9TESspQCRXxsUhC9Gw9am8erEFYfbyF3HAWtZKYJ19CZS4WMDtieUbrtjZx4G1qwqJmN7SexhFTMaMV736",
  "key2": "4hdDN2bLmq3dT6M3mjLRvUdywiT2ehD2aV3FdBoVovZ4Dhybx4MAm4ycuecZ1JikRfShyBMRmLmZc9JsvdVJfbtV",
  "key3": "3QZtCHFGibLd2cgoz8qvrgn9rGK5aS3hGDMFLd49JDafASqn8gjpXi3td9v73cCccHxNz7ZqaQEk8Gp95VMjE76B",
  "key4": "3rkTmmHMdzzxt98vfkaGkgxFSSMmU4PVR8ZzX1XFxuzYUdggARiLFnT8uUUguvGkxVxJE3CrKxsF4VF8RSaQjQjp",
  "key5": "2tfZcvQMC53AVteUPmtk2yhZt1NGUpbCJmrRGyhrLcNR5RdUQw2RMJwKw3w8AedFB2NcTgzc2rQ2pEBAKnXMiAV3",
  "key6": "2ZMQcbWDo6EU57GnQnYtTNzXCfZEaLGsefZs6ADZjfZ65NQhrmDe1AD8BHvpTjbsukqhFbZmsU9Wxx8rh3AC6uyX",
  "key7": "5hcYLLxYfAEPJxx7uDbZYhFodP8y3yi8WXA3nCYr39w729yutQ9jpCAMUwBvSV2vtQ2gPmxNURwAHFjex2HTGahi",
  "key8": "gmrBsReBkSwoTPboZ31gmq9Tq2QMcaZZSGqZZ1JGiDHAmV7GGJEPheUcEpUWhm4usCoGq6WnG7MaunGuXmWfpEU",
  "key9": "5Jqjf5adonPLBdBabEKNAgmeVoRKbig3Qg2czxeWRHmzoWjVYWyDQHCuoTacPFJjWaPyBmNRfdKHDnSHpVvwQkuG",
  "key10": "ha4QVTWjVbfrCsKvof3opeuk82cu67a9uyMcNT8jJpiTWPGdcBsrCnpJX2umP6PDkRWJgEiLMML1ChGeLzSTKKQ",
  "key11": "NvsiXYGqxvUrmPhVgvAoSVKGb9EZtFsXxerf33iSzCdB4pv8SSmcFgKyvJXcsZhpeWGudvQsi2EYoyomPb97TVr",
  "key12": "5vFBMXZPZ9Ziw5WQv2ERQdmGYB6sjs6fG7tyK9C7AEZ9mBYRyrhMcmXHLEsTpjaenzjqRtxeBYTYXERFQNnsLqyY",
  "key13": "BQeTNLMzJAY6e5SMQ3uhSWNrDpaHJy8yLzjm5yrE38grvKJnKnea5WgVa56wpDUDToyag2hs7XrJ8L7VV2D77dt",
  "key14": "4AX8AVToGoKsH3pNw9vK4TWf4dfcSkZHbFwaF89M8wCb1k84jQNAQxsi3Qshexa6dkeEHbAzdnMdJpjybzoErzu9",
  "key15": "4Efgnc75mrBv7KZGdNfPKfipDVDFwghRUVa1xhwBQCVEP84rvZxAJZxHzkdMkVcifw2vuVuzmGdBs8WZ9NRwFzKS",
  "key16": "3paMq5oWQ6juxpESR5KAgPj2oeWWG3EpQFwfcHn3DACF8Rrbu2UiZKGYFw95JJQ3YBn95bQMTmebYMvcgBMm2kVA",
  "key17": "fxL9CzHsVoEUzQ3Ty3efijtu6kyoEwzrwHZSz5bhKUgDRvzuZfDese291J88p1nG8KAtNVvinpVf7B4g7Y2YcGP",
  "key18": "4uoeENF8YpMKf4nRKbftDDVKDM2erDBTiM58Jcdz6trvjBsrrRuNyrqtU3BAgFnnYhe28jTA2Ynd4ujMEmb5oery",
  "key19": "5WvNsL2MWvehhUNWefFbx3rpxxv3YifRGFKm19EFXetBmo1pupCTntbfoVeHZqkStowq57n2gy2anNr2ytmgVrnZ",
  "key20": "4ak3DDE4RL8KaDMozUwXgiQLGLpKwubHoKR7MBLW5raGtnW9aRBof9QNxkuiyVwCjnWLNYBAewuWRWrUYbxYXRP3",
  "key21": "25xUakhn3trtz5geP5f7wmeERQPhgF9xBiVQZeojzDTfji2CJn7fVHziotgcqUB1yjYmc2pHpLk4TJMk1NaDrQyj",
  "key22": "2vVHuMK9egJQQXMdy4dSJdnhDFQ7DYuB4rcagmwMisSV5LUthCwmPCa9QYmcxirsC2F4XWVVQYkbpxDyjjEqNc49",
  "key23": "5qtsrU3L9Em3WsPSvNcQG4ZxhfvhnNstXXrP4EX9eAfdUtt5e65mKwstHBUVC3Ksiiph7QtLHjrEWRaXPPdHvSgY",
  "key24": "4HAJMwUxizmFSBuxtvAUJVyK3R4nGwHZNBzxYcEqGBm5ybBpXRVk7EXJ5uTtidRQsXLAdG6U2hwq3EHxNV2oA7G7",
  "key25": "21EkfrGNzSaYm1hMXJ765EEBDjqCmtmgLCHD6FccUt9QeRq7Ys6w8k2h3V8pcBu6mdp9a9RSo3XSHPgi6LPcjsNA"
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
