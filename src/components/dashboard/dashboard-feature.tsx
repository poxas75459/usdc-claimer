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
    "32aXGw4VmnnbXiRhDoAhS8pDqawAu7BkqsUTpdFFzea1pmc8Yvb19SZ45eohRxXf8n2KWHmGeq16gJuh5ZcbGizK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7uMEGZX5Mpc8g9fx2RFxQJcesWjGxqHsPq6ToBzHg7aMiX3B797LY9LeHLR1N22g1LzqF38UXybmhChXN4vQxj",
  "key1": "3wbqYqBo6VuiA7zkS7k82Ez2EqRs5drTxAad8xvrAD6TUdCSfMuPgxbF2y6ZKeczTvdcfLnNisjgMtUTFoAxu3jB",
  "key2": "4uSvx7vtcJbzXYDQkkRvdQDXbHZbn8enXm46V6R8PjF6S2CWWCEWtarh8fVrE3mSVfYFNuWantMZwU5WauY5Jntx",
  "key3": "5Wx1RW5hcvWqQKxkyDRvgVfaikjRp8ZNrpPptzP2UfT3nbLDrDYvCRoAQyUseuzSkLfmDfEAjj32eFBZN9wm1wDU",
  "key4": "36A2kDh9U21cKtkSUypZYMpMzSwipgNJQCcsuj3z5Go3sfMeT38rRW4759yCJrkVmvBVJMABSndz7QN73UfFpwcm",
  "key5": "4RtC9yZxzSaFLhekmde6uSVPmFSHmPxA5KwfW8nfrzRNXjcWXakciuFDaQW7i8QSeiHUt6uZkmfSVUoRuTSuQm2r",
  "key6": "3FmE5pwnGj65xbFnwLdBkLrwk1buHK7nrSTPiNRyPkveB4NBh7FZicfNgTgAWautcNfVvpPVCS2R8ALHGxg2MkKJ",
  "key7": "GUdMQzUp3TYRLXJsoXW8t5uWgrGhJJTQJvNU2JJaZZPvNnz1CzPf3PuDQDGwPcEiCaaStT3rPC6qcSBqdexYqXK",
  "key8": "3pCyA5XXnRpRgq3YQpUtoxdrZvhAEWxzKHVzUgu1LVLhAEuzEKt3aX7gAoWjqPv8VxSSaobJ7B9bUwnwzef37ZMM",
  "key9": "g9kTNeJRGz4PDGA7iVJGjXZ6attg2buJFViNXT6MV9UeYeb2X79uNVADRauktbkW9BvfKvEp8kKWj21RR7Q3ZKj",
  "key10": "4Q55G9Sgx5HhaWe1J7RMcWHhqDtcmbg7xq9szXJkDzsQWsJAkD6K3aJMkErwC4zqNgYJDXkG6SJ5rJY1EepifJgv",
  "key11": "3SRZBNuJibYVmmkhbq13KanCVjc7S374Gy5YB9RENxYrp41P81mCcL56zvQUumSWKUAxgjb9rCHk5vGAgWsDbWvK",
  "key12": "2WkDAVPyPG85fZ8NdfoH1K3CU4xjmhxm7kGBMm8fCtuHMxSKXMV6C4kwdwQcgWewJ1K4LaF6biccTzq5tPwX238P",
  "key13": "4JAobKeToY714qXAULYmMa5zkzQeD2hL4jTdudVuphAAdwWXytAwXezCoJuuJB1xdcAYupZfZD2L32gw7pbqFH7",
  "key14": "52vYt7UKSy6RxYt6QivTKVHHWukS6vxdjJ4anRChX3hwjNi1yJmvC6LX81X397V7VtW8odxqzBdR9bUUNnj23iLH",
  "key15": "5WuTWkXMaAPk4aQacssCBTtPsKBeMZRrZECFRQn8EG7kia4jBbk9XVcAxbvSNRAtexZe9499JFPNZyo3p3SeGbEb",
  "key16": "3xZWFTKXydEa4ajBvsvFNN3V5LK2kUghKtNJtQBFAqDUnfSynwzGSLckmyLd3YQCPsPpVgcjbu9VoBKV79i7DP7X",
  "key17": "cLk7MGsdJbBCTNXa2buanpsAen1mscvvYnhY7qLx1eWUk2UspaYexcrChHHGQnSEWKG2fPezC9qoVuMFS1EMnCp",
  "key18": "5K6SGywjhZjXERbezDuJa64moCSNgfmYM5btBwsaKiEFopi8bK2ZPYf9rJLRb1Kb9XhtLxYhWphGv39gFPKYEnxT",
  "key19": "SecsgopjWCYdWLPsMYVycfTPGmLwj8thjkjNcPoyawfeoHWbarNPJGkVkswUYB1bu3fCGheKwb6iN4SWEd9D6PF",
  "key20": "3FGpTcoxdEJB2qTK4Nc5GBNcs7d8MofKZouyo8kuqWaT1mt1uPq9dRg9yuW62ro4YoEct7t3xTEAHrBaqfjAvaKh",
  "key21": "ySztJMFjCgQNqEWjCuQtGTHMeBW6bxayz6rNgYJj1EPPY3wpkNNXSJK5L5ohbhzrAYWiJRdkVCTd2EDS3KxjWnc",
  "key22": "61rWvb4CLWfs6HEQp6UH363AP3fjHyMTWRh3ziApj3YMkXnrQmmJf2cPH5W15cpbTgZE2rqDQqu1DuFuDHrEq9HD",
  "key23": "4JKCn7YEuvMWvRPsBMrzDJCXZCUURPZihZQxvpRVdrvrG5ePAef2Da8PCiKdVW13Wy3qZfGeLNL6fyvbrBEnzZkE",
  "key24": "1KkGH9G7VwTMzwZmDMp9jSQ7PmHu4EdoznWATzCXL9o8jzQUTykMaiA4N9ogvZ6pbdp3N2DkyJjW56mwMA2gSES",
  "key25": "3CFoGbhkKvoTWszSsAxtBCq5d4YrvF1rCeQtF7QW8mgGLJdVHxbrHeoTxsSh7sgBePjkjGLRbWPJejvjBYiaTXcc",
  "key26": "5AAoCJ3d49nqEx5xomB8NgWag4cTgdvG92GCTPA4eQ8Tjn6HUsa9fE8W7S1zcFmzpNnYQJnjpgXVTQGiPaDxX9jr",
  "key27": "2QnaA1GNtFrD6FsLk3N2HSQztAhESTjsiDk2cEByDur5P2ETXr2MLvRRQKrb8ZTiZarvAASqLMPnohG4VvnBjHiB",
  "key28": "5q3KFCdr6xa4FLFSEs8JRPuyMoWar4QkSZ12Zfadbb48Dv88w9TGCYURZ3Bj8BJxv4e8bZZcTpzWEeFFuu6tWKnA",
  "key29": "3SZgPRrpQSoKM7Ms7euUG5hafzimkuFTa4E3jvdq2ftnKtt4GKmgD6DmFKLNjdLBLTQGnA2A23URiHLQ2VUhMRsh",
  "key30": "5r2jPtYm6idngMSCMz1z8isxCgwbobc3R7VvnFiuRf7yT4rvG1pxwDU2TzeQhVcBTbt5NZJtiGxExciXXVSUWvAc",
  "key31": "EahfpSeAD8Am6YFombfbi1aR8Bhbt4AsThXQPHbbwrAQcPFTGqPs4DuRTnakFQpLSKbYwiXyJCDpLs5kdss2DeK"
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
