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
    "545EQa1uF67ByYw6iDStimn1Lb1ZBeRGaCkgtcYdzCTvEgk6eP5sLoTa2kZjJayfuawgs6xEukcWsRqzpE1ezwXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65uJwsDiYXztdDzXytRoZpAbBvg8gTo443ydZwfzvHgLZobwanfCcbEBxKSxMRL1Y4b7Mz7YE5T92p9BEXuKoUiJ",
  "key1": "4ThJP1bGyX4Lt4nYnguGzpPnWZvmWkxFh8FLFzfNSDtc8Wr2Ejtkwzn448QSnciY48BQx5NqoRHWFWFFbZnSMi4i",
  "key2": "5WwWpgXfmUwLPKn5kvxFr3TP5DPumGEM6749rjunTaC7kFcGQV6iZQZ9aQQQ7x8WyKDmRUUbFyzPsG4rzs9Ps8Yd",
  "key3": "5J9Mgj7nGwQ2mzGJtEjQDctLFyRyNHPykhrEb9Qg49LPSmHVJbyugNSNBYXDuw7Fudfrm8iMJ8LK6jDkV2rbM6Zx",
  "key4": "5hJeF3TKo8cKWse1Sz5WvPW7CDXrM1FkpSaSPFGsj98rgbvv7VyKUuZV3UYor9jkdxRBLfM6EkzXAdmCsXx9W8r5",
  "key5": "37CV3zCpuLqkmRT6qTuBm5WQ8XH9ZKE2yXn7z8MRPsnEZyTWrHXCmwiDz8EJXbRcpZ8WsUfhej21mQ33gTmMsieu",
  "key6": "4LbykRDweqkr12C7BMyeacDANXgHznL5CaSwZVJPWUiUf5NRPSpdej8FH82ohDyMkq3WusweQjFJPG1PWD1n3VfZ",
  "key7": "4YS7dRvzu7EeJ4S7F845UHQvWP1bph1uDAAHTsVLRyCsY6ttS3tf2ho55SQXwyhchRRgAgxofbrmQBT2iu6fDFRv",
  "key8": "4pLEebyEcrLLBYAPk1HERA1psTWQbvRFqdBMzMWafVwW69HkTCzMcNU9np8UvRYyP2PAh1edPw1bHf5dzZ2EyJ91",
  "key9": "62hq9g7M7vFM8yspdVmdZhyMWrHiW8SSGikjWirsV6jxe7gFBJ2Ym6EzT8x1oXPqgXXimimE6whWt2M5kCdbLV4E",
  "key10": "2f1xZJTCWAzpJ3oDH6M9hrxjmHQj3DewGnok8bSwPzNbaZR5ziV9PNjDNEnTnzE4twuNmd6DiZ9wheeWaeVVhsvJ",
  "key11": "uDniUFnqEZZmqcCZU9TPtbYAnUWVN3DQUcGzcRTdU8jcBWpBVWCundadRDfm6cpJGBfgVm3m5UrxxCzUSUz4eSK",
  "key12": "5mkj8NTDLG1YqjtyF5eeSZn8niG7s91eEP5GMaFBg9YQGTwLfE1DEXiwTcPy5yNfNnBHRY7A9eGnAw5N4wbd4ob5",
  "key13": "66LCZgL8h9XGRe1dzLTS9RqSL76iLyCeFgFfyHEA433MTzTJK4zkHvci3aX5kZkVS3A8f5jyuR67bbjt5B8kbZ3s",
  "key14": "522nGQKx1G2upZHAuVDpJNF9KrnmjiGbQAHtzNXQjkRvL1F6JFtCbXULxGTWm4nmNVcwvoAbLAx23RWhRiCvxwER",
  "key15": "WDjoVsLaHgu64fwJwpenRzTiNpoJb7kwsn3rEu33tuS39Yh8XBX2AUoWEzQ7LVAo2VP3ACvrgM9XZaMokz75Son",
  "key16": "2zxDWBeujbNAHLVB8mNv6X8Fuxaev5kCYr5AaYKPsdXpLDhhvkTEadQG31XYkutpJDvp1AgfXrqvw9BvWDdtejnU",
  "key17": "3YZjWqGua38UKsLzjtB7STiuX3GUi51qmucnJ86xThDtRVkQMcVdC1ZiYeQt2m8cNFPhY54pMwq1Hnx78Tq9UEi3",
  "key18": "5VXu6bbsuSvWVvSxKng3ZwUTk6HhUpopVbZpHnbymQSPQkAFnokdgxkU8LZieJwSXeG48PqzWwXEKFaPU1f19cHf",
  "key19": "D8h7EkuSBxZ2kPZYXeN814WU8h8G2W3qpkWdvvnWBqWLx3NoB8nyJoXNgtJJVxks21zjWCKPE1LvAUqWGBqEeqJ",
  "key20": "5tTgw3qi3eD7RCcaGUS8dmcfDwBrdjzZZZWdRHFhpcpL3Ssv1wKxdADfJdnj1TyrJgzKxcG3Zmds5WH36NGL3GAh",
  "key21": "3jgRjSBCeYK8qeuqdPVjdJC9jiEzPdbyGunSQtxze3UWvTxrz7HGGWq2BqiQ5WAb4Vwi6TjPnmxbR5LDQrVQmfEu",
  "key22": "4UhQUjEVoNFe2ZSMiKNirEHk866iGunxNgmAneNDqEFW3BtsvQDXhnq7UPWTnpqZ857kcotVCi3eyStfh3EGxSKB",
  "key23": "65LkvmZG2UapYfLLphkQf9FYvnWGNo2xkrnfBzw47MuMgm1bg7RekxBgCd3hmzdwWj9zAHEhZHFTDvtET45FGQ6e",
  "key24": "2qbWfgSrAH1SuAyyQJNDa2FJa6C7TW5pZRQnz8jyYmwhZjjt7zMaBMjCUvogMbJx448fvcFsDHbZvjg4vPsbLjo4",
  "key25": "2Mp3cyZDNdL63k9qSFPoqzjU7sP1yVbRAyRBCJtyGonFZbNcxECeMFd74dSZcBAToFgsG51ToiBvyBy8ZW8s3WY5",
  "key26": "3bskCdU95qA8rKiQJMRmbNUQSwW3jTBYuyD963e5HDWEosfZC4bbzpTgmriLD3udFJbGaSB5J6iwbZHtjYHDj4Lv",
  "key27": "2f4emcJKMFpBRVTXo1gsU5ieCXKkA1gKyLyohKzg1ywF8dR7L3ZU5CiuARpQYipuWqqkae9GEpMdADpCot7VWLzM",
  "key28": "5U11TKAzfgQBM4P3w248bjjK3XjtWWriHKZzgFgsQCLxc3KAWT3LMGvtceMpe8cxc6MBY8aJk5NUfsugrp16KgR8",
  "key29": "5GhEvMuywd96maXmjqubq9jbJ7s4454kUdEPBN5cQBFPXCWM4uoRfb73vqo41a1XTHmiSUDsQXkkiMn7shBrnFAp",
  "key30": "2YHC3ri4VcKX6XFN5pcjxiUFeavamGbv73QhrB6Hj7resffCDGQxKxWjTHCwZSRFxbNqTBsjrfrVZyq7H3rvjN5J",
  "key31": "4AL1JZdRJXHMJ6cm1CmCk2eJVzULxFjPuguznk6Hjbchu7VpDvxwvuqrCUvTZDDNNqddLwksoVmMuXL8mMEgFUvn",
  "key32": "58um2km5yfoLwnf7cd7fgbAPKNy2kskAF6LX3XfHhSxRHPPtNvcKd7n5LCgqS9YZQ6XRfGAwhM8jxS72eTyrgaC1",
  "key33": "2asQLv6piGanH5fucSF8qWdZasS4EA9DMyAaJPXhaKwXFkR8gZuPZrBweQt7EoH1e58CMra7c6EbrLGrRq7et4TV",
  "key34": "XbbKxxFijgQ5sJRW9JgA69ucT4JZuta4vtAZNNokL1nYZytaqapjTubLEu2792Sqt2KeBHs8vUL112rW9rXQJsm",
  "key35": "2XjcyWScDRRafrefvmRcGCjg4hCFq7h8S68GnRfyfyVxhVddRkofZp9MFo9HLzk3oX19MCGf1xUWSq9VAD4jm5iQ",
  "key36": "JmLvCW3isAaZZ7v5ioJfiadRgxkvK13HH2q4NP2QXrsiacVZNoY6ifhaFFuu3RzWv9eNV9XCyZYcsS11LKRjjUc",
  "key37": "4kXY1Vo8g6SJUKEGZ2TYLukY8M5f1Yy8FHnzaBYxmZyf4stdfU752xkfrfJxcpo3M5Sr7pTxj9ZTjL5Q4r22V2t9",
  "key38": "43LbgXDTCvn36gXjnSk31HbF8L2Eoq4vd9sVzFdLDFoeexjzYDNDAn73TyULeGwmMYBMgXGAAh3s8NvJJ2P7qjWv",
  "key39": "5FmAGkcjfAv76q873zggrh7jA8YDEHN24eer9xjuSJtZP1V9PNcyHFh6JXMXxmev8Y8xUkxkwkhLqM1vJt6KJQhv",
  "key40": "2TGWxGAn2iEEJkp43SFddCtfMrpCEGrL3kF9CYpt8bfBe1Yafq4a6F1CGPuBjPoe7EvWuBP99S39k5x2jBCazaL9",
  "key41": "27kwcWJfhqubWvNSLj1oWuAuUt2GRTxifJ2vL6w6Cyx3jZETEXkvMgAvriuFysFWou7M1iRkz4qFDhcRhEdbgv3W",
  "key42": "2uktT1Ggv3wUTUTSUY5VdirUTmvBPsgVkYu9hayLrTcBSYv25jJisQPh2txu1j3Vpt816ZyXUF9sdyfLhtXAr52N",
  "key43": "dkc5SP7iMLCiqCJh1hon8Ck8n94SvDbmdCoSDRKCUoJVHZ96U8mL3qDyD95Pm4jZ4feBoMLQVWigFNK4ksvYFVV",
  "key44": "5TR4qZBBNBzokbCXYZZvxAKnfaYBUCKCdEQV9CZFHXD5UiToRajDpFEonNkkw59MG1QN1Q4qr92qiV9vVbRXtXqv",
  "key45": "5U458P1jQWV4UQLGQHfZCmUqXzMDzUjZCSYfCruvuVK34jtx9rVekR1SNP71D1mYtjH1EkYCaRx96aBGFoMD5iU4",
  "key46": "nc4UwC9Xamzas1myCvNNVR5A2PpuAb76MdLpTHrnfcfv7v8w6adiJor4P4VQtzpDRN633AHo8P3pQvgPiEztt4T",
  "key47": "No7XLPwwFsqvfnkeL9JQm9V46aLRQz6X6fe9kE4rvCsaG374gVPYD2PvT3SoV88c5ftmByByr9s7Zu2o56akYa8"
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
