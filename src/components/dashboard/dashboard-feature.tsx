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
    "3fs8kRdt18mU58h81MuQeY5NoALTkUsS3k9Ve5GHcdbQx8FvvxYYMMo7JgAp3D3uoPiBMttpYXefGY1GPnFwktS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBQET3prPqNVAzHaL8MPq59RFge84ezBTHdMC7zMVmcQHqvKL7gDbEmD6WfDbEsEE8jMoekGmK4fdHc5HzFoLuc",
  "key1": "5bPwCrDTWFX62vCvTucsMDhMH4pwcBWg3esYF6y3mcxn18DNFzRKCYZp18HoCWMjqXr7uzHLThjzwvevb1sk5oNM",
  "key2": "4qktDLjaDxBWc5T2GWuPVe6DMAVqff6VPxZFi9ViQMTQbqJuoTjP1CQ9BWJJVqyQdpdtF9Hu1oF1b5BDZCDzURvn",
  "key3": "2kqWjfcyahHpsouSg1pFpbf5pzS7z69Y5SgzQLBeTTKkp3D7h3pj8U9GxgLeY9pidnev3B8xXdpaUdMoLtTZng6q",
  "key4": "3TEGg68PFPd5dNPgXj8SWwheFtXa86ToT5qm5PhB3dpGw3stqzjdj2ewDGNsEHL2bCBPVEPzQSMztXtGG9DpGHny",
  "key5": "6HqKP5gtCDwKq9Zt2cpMAZQhbX4tjXTpCA63bKKZAQ9vZgk1SvGEDLnFxvUQeBqKizrsrby9Y28uazzRgm8zDGw",
  "key6": "4zAdMavxL1h61WBoeJwBN8Bia77aSHLqKDK1vCAP4prnmFKbHMDMKnZB5nBSAzTDHWczDDay1ZvDXjjVg689z82z",
  "key7": "3A6C75VrgcmVLUfY9mTgKcdehVNxnf8crPvb6G2WgsWBsWNEQA5shtLPSa5vG6fNrgroGh35rWk3Jj31RFUAcaFK",
  "key8": "3Dbjg4qERmLsY9vVtmgY1BGMev9dy63nCaHUStwaT5bPdkLJjmCA98hZP6q4iRN23jAK4RKBRzvMFTMwAtXjR263",
  "key9": "2BzVDzauJaHHnusT9TRm5nDcju4mTonKhraj6K7HwkkEV6b2oXhVioHtbgujipdi8kwp9UeRNumNsbtDacLGmd1K",
  "key10": "5mzeh5CT2JtM4zkPkuxgCNNJZAnAsWD3ykxUyuux3EhU6Mf75kk9UavSRgdGp7wvTDJAJmu3DTySiTwkzCeHgiXW",
  "key11": "57TBoPhDkeQ1dzpRv7ychJWaFE76NSLvRHhmHoo9utPMqYMxLroruc9ZUMVmUMyVEX3DhaKHfhAvsTmxeANbENHK",
  "key12": "3FHRJ78nCYTuYKMtjjoNnLNRUD44qNXEH3pP2G3oNVXXF2Z44ZJXYUm86BpBeH2CeVQV6poXXePPigqhDKVXa1GG",
  "key13": "5PsK1CyGQJsbcePFH1CCVeQy856aB7LD8kjRRTW5iYDz363ZeW7oZJkPjpa5vPsDHyyRVVFgvJTU6XAah9fmRw3t",
  "key14": "NcUppFWahciJa6ALFQK25U1ZCj6y7P1jgkthc7m5hSZBEgJvo2kZXwSzbmpwVLS2Hte7896TBDJQSDQ1hYsootv",
  "key15": "5RsL8496U8qvMGoCTNZs1dx46nHMRovo3GQNskxyv6LWiqXuZNTCPShMkGkaPKynzHnCGNZ85GJwtFJZVLPfFJLz",
  "key16": "23DNME9bFavnM5FHWqKZa2FAdmt2y19BR78mzkDKS9s9sfr6NUGwTM2mkQrNKWLt5rMe7qhc8vd4LftYJZbGG8X5",
  "key17": "2z8hYDoVXQUEbMbj2S38bHnTQicPGexLVmfkFSLxvQ3v9FDRBeZfGsuzHDYv8fYjR2JKxyYdxUWbLm4NpgUdptU4",
  "key18": "2NNRGvZ9GixBL92mt7NDGmgmDVj4JiK5LoNLYGKZNu2ZRr6YiZcWL7nGrVqerQ6vMyGvReCTU5EiSW1rUsRAHchg",
  "key19": "3SSWYvqEgPPqYQXboP9RgaKS98tMHqU8eQLfhQ82GdR5oV61yTNHf9XU3aVJ3TvoZZbKpQ1qAfrbYYESW2c52oKg",
  "key20": "5jGnWLc6iwvNmjkGMUbySN3vfAqRfLvxrm9Pn1nNfpomMWP417Cu6q5BZrukUvoTfWiuiT96DV4gZoRMjWv3HKz1",
  "key21": "4vfVUsZAQ1tR3BviPtPBBrJRM2KCgQpMeikn3HjD6sFuqvcvZ25jNdvfqAroNStLrLEKRTiKUzXSNKmXutqJSNAu",
  "key22": "3X1F6bdxyXQo6bvNimK8E9zSq7cV5zCBJdJzQ2p2qujyqK6AtD5XiC7AXfpq4nsbxzfbitdQNobgkEC6jhmhhHwo",
  "key23": "4PjKoAhKgduBneRP5UzsXqQ1DD6kYsrqwwPbzfPAPsZ5hX5tMnQG7ohQ2Ro6ZGYKNWxVzbHjZb6jdax28dfGKcQS",
  "key24": "2kSkMGoaxXASPA1wxdQc2nkEpXrc7mkujZMYh5CjxMBGRAKBpjEqpN7gLvMym55MxczB2R1HjTuCteHHza4T6eek",
  "key25": "4PfMih6ZpaoqSjR8W6hFKsj6iYwGdCNCugVatmzN1MjUbfJpEFfFiV19RU4Y7r7pzQL1wwJQE7ymGS1wr9ZJY3bh",
  "key26": "5GLRvA7umNtKHb7dfHWw3QDEuCmbMfU5z2bA5DyJLmA32WPXNcLTU6kPanhs3TwQX4iyADAdH2cWUzvh6vKcXUgy",
  "key27": "T6aUUfWcKrMLB7YnQ93orf5Mtga3ijdHFLjsoRBzGzDfiZVC3vW1nFp7Nu65nBW1zj4KH2T6q53JjNZn3CtaHUD",
  "key28": "miL1CsdsgW33b6Pa71d7fwFF485sVbMK48W9HeUQBM5YFAgoQCaoAGXALRxTMmKFUUVCxx5ADLWxAkGyeep2x7C",
  "key29": "3kaTLvZYMSGVUSqjBRCkJ3NrhkFxVkyHE7edzEBefA11s642TpLLkn7kLGt5HXrvHQBpGWWchUzKyxEXQVB5EgSv",
  "key30": "5jSypx5Yd2Tqs8JDVTAZmVcDUVKNa2bRcP2fiDwGNJiqNCgJiWtmCKH5k9c7Akw37AWWhmpi6Cm3won72TY5czEM",
  "key31": "2k9rt6igWMYCn5EzFchgc37LGtrpnzK5v3MiZYyPC5Jj9T6mdGFQJVgT59nWQrMMo6FtoEqUekJUiEUbfQbz3spL",
  "key32": "Ve6eTThm2dof8cPR6hHP4wwpw79jBX221M9TtfaACEzbrHftYRGmoa2sXc2W2JwDdULdtCRHhthMRPfpQZpYKCG",
  "key33": "8rVTTB3X5n6VuHU4D6Uzhjx4qkEdcEveerAqQBZicwcaycbEALk2sCJoPCjAtfkx4JnTMah2NkWEVZnr3DThN56",
  "key34": "4k4Kqg5uXvvdY9Y2gvZAZQFmkGLaFdQfVTmWMUfuzanaTg44Nfy7SSYGVSffzeasDjS3LfZxBQg5dqaCzRUQH5X9",
  "key35": "Ffaq2wknXBUZ31txoNGppVXXbVhQeeDma8Sw9L9iZAY8fkomkzkzraba9p5zNm8Lu32SUQwvGZdxdRznwzDNdVi",
  "key36": "2wQtNgYtgVgCVhe9RMH6F7PF7si3p5DRey6Cjo3mUzC6HMfr7Z5dKAUBuVdJTyJmBc1SCkvPSqBYrVmas1Cejk2H",
  "key37": "2TtWVRXU7ty5eXE9wgwAD6YiAqua8npqsyNLkhJxNDDyvp2mFK6HZg1dtoQhMLThrKP6hF4jismcok6Qjj3NgpH6",
  "key38": "41FoZHFmAdczZrxDcPkARyPeEE9Gca8nPPHvsZBDTPL6tDGaPZiuykmpmGJifuyxLcorXWmtQBZkPKnhLXtctdX5",
  "key39": "3KCWgpRodpsN6Cxcc3sN7qFEbGDct4su7RVX4XVfEWeHUzX5Pi88QQGsH1JC1TiGTPGh8ksVRthKEwsE2cSZkexU"
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
