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
    "2vngjNBBnV5R5ex7QcRBLRQtSsdKMgLAZDPrymZ5qX3LwphUqmANYsEhHLJtFghTv2B5qHwAoCbrxDt6BNkBFK31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDNEGEyA2WkZXNioJxm2o34Ga4P9wua9v7FLig8Vgig19FkN9TdXeiAqyGnuG6onUUEpL8YjwTjE7C8c85FfTJi",
  "key1": "2EByG15d3t7mAsiyRjeQGLaDu7svZ2gSk7afDjypeJuwnEmdXDh1L5dtx6caUPEWYj1j4KpaXkBe8eAru4nTjefe",
  "key2": "2kY13pKFajjH45SyWCrwoVzeM29s7JhynmfSptDQmgF4xCYsDLu3p4NhrTNGpHCmxMcgGbLmegGzBuSPGVquZYCc",
  "key3": "7mTjc3i2tERb5RoqujHR5ZgBn5dZRxwVaXJzy6sNbafPnYWHEVEdjka6Zru5NCZvfrJeQ9BKCir9Q9w3Skme9cC",
  "key4": "3ThnVRuwFjC9AU2726xupzMNUT78yAsvWKWEKDG1pbR8CdDAv59jL7oPnwaFpavhYXnCge4RiwZvBcNvssXn1Jge",
  "key5": "4ChA5AaQsMwthvSESai3MGgrL9nEcjtYvtfgFTAezWZLVWYiScr7GG1qoaiW2Z3bvjvwcs4BzWyuaqW6WvAphQ6C",
  "key6": "5M6tnogXmDajvmovE5cQkGFQK7hbm75R2sayVWQ6i6krzi41AhvuJvEmjfUtdEVJNC4ty3cDHrV9SR2yg66oBhcF",
  "key7": "a8jaMnkBS8rbvu2YBtMKW6ciKfhF9VdWgwh2tmziZ2RHqD2EAGRCJnLX4VmJcPTR982WdS2Xge4DQv6Ffkqp9dE",
  "key8": "4AbpLpXDZKwx59Jjh5D1hV6Sav7JK7RUpCozNPFuTJD6XUEt9ovBUJjvGwuAeCAsrTXLRC9vT1dzqj8Weu2gyvh2",
  "key9": "5HFHyxpoD7ThXSrhZHbUtCymc3RE6Vu3TJFtPCokYtZxFWoYt3H7631pP63eEkhKeZP2vQeJUtCmzFrE9ZmBfFW9",
  "key10": "3kFaM7htzeWsenXbfrbojvLz9RC3USLu81ZunG1TAYS3MGsZiiFceRgErgfDAzjMvjZiE1GWotiYopwQbht5Q31W",
  "key11": "4yeJHAWU2x2maGBbgeT7Ue341NcKSqgt9hjvxWbrR3eC6xdSiXrw6QeWif7EQCxnKPwnaHw1YDMHKKkrjof3aV2D",
  "key12": "66jbsto6U7Nz3jfQHm3jNq7a5bNi2FJkQmJUe9sCku7tVfe5FKh8uoth5RnQsKpoabEoGZZQSkhh8buaWzFpWn2q",
  "key13": "JUKnYaM2NeUgwBuPqwU7fFJYpq7MUSwZz6aDcouDkcBVE1w84xhsJKUbkCXyrjbjjpQ13zFBVu9r6Jsr8N8Zhu7",
  "key14": "2Ytam4XA9ck3FLjgzCXorVuX4ser9hgnzVqNtr5NFa8dR34zJwQLXnWU61eGhTU3cQ9LCihvmFZyYqnu8bywCs3N",
  "key15": "3YXiqgDiWFqomidpknFwazqeFGK6T7thifiZozGufKdxomQM4xyGUR4peWndDffTNqTCT1dyL5HTSNbndMwJ2vkU",
  "key16": "42K1JVBYpXkK9AMnsxDGfZKmspYMka2uZYCueQVwqYVrGZgjukd7ZQ2B36HjM29TwAnMeyTFFQ4EHF3kFmY89MRk",
  "key17": "3fh1D8J966UeiegPuJG4h8nEMGJngUKpGG7vBrHQ2LvjUWs6FmZL7favHeiLnziQYPz4BUqqjW9VDsVVUzPCCkDc",
  "key18": "3DfEayzBSMeVLjvFqPv9umKWvkcb2vKtdru5GjxZmnJqACnYkExucKQGXREikXSASLKkpUh6c47YkwC4HGUBFVfZ",
  "key19": "MVW5hnxwQ99Fzs6rfgyKUfJXkL9MNVVWn3GJo4HmxLfbRjjhwfZWcP8TRqwE5u8nLL67JuicFPry2KjFNxS5be4",
  "key20": "2Dwg1TAwfysPRwBxY5LXkrSERdBevdsAAV2oG4RhgCbE8swpGmjDAXEWWMW3KWCryUeSb8UazqfY4Ff4sBfPfCMx",
  "key21": "94Ljc2Z5nCLNXeYWZ9zRh51KYNUEpwyaGcKTL3k27qucetp36TRVrmWgLEWNJgpWBdYkf5A2LHSv9mRasZqfMb6",
  "key22": "5cfNey8Zzj1En98ujBUxpJu2BNvTbVSwmgwALVfNsoAXE4G9RCM4sHPUCK3pGYwmxYeqrL2PJnsgJNKyJwQxxPkg",
  "key23": "2fVRPyocwD1iaGbYkdFFy2EZdqYbsJWGWaTtSypB6qNz7CH7nHAu3s55uB2UHnYvfbs7YRgKQD823YEqazX7vLuN",
  "key24": "9cBC3JNFWdzfub5W1DBepSqK4K6egMDxNkUSc1qKssixK1cszXTJ5b7SR6uL7zL1WcziPZbWQVzSEm2mVBSHQQ4",
  "key25": "2gQTvwkyuJ4DF1Qa9sPjBAUS4GLsuf7v3Az8zcLC8FnTaB2ArXRK5yuUmfpyLVz8nh5mkKbY4v1oJhwJNufEQpgw",
  "key26": "fHopDrEUpb8Eeq5EwDYi2MKVhKXGVXEcdogbDU6A5JTMaPmMFmknnQ26gR9gJ3xjrxmgXP5gPdtfEdTeaHgRA56",
  "key27": "3MUJc43G6znqNiSjGYVb74SpXV59cBsrsH6aAgHrAGRKcaB2Y5nq3X2Ri8W5Cnfa7FD8uLgRQTfAHBAc9LsVfHoW",
  "key28": "2E1EAm19NwYBBCuobUFF65KaAgxNncaDkeX7yURTZvHDjEAfqsYhBKPuHqbauiSGpr2JitnBbVSfV9D1sxmaGoCr",
  "key29": "64beR7GGcPFvyj1vMsRdeuMg1mxMTdWHLS1FJAwxM18B8k1Vfj5krLqqgL9EUABLBUkwpHiDMBzfyDy8ukQ2Vo47",
  "key30": "5WvcCFiVFi939vUEALjQz3FFfCEXsH1BL6UhMe9hUEyKuzRFRa71HZWyydhWG4dBuTj1zbwwV2aUCdoVjD4g3xuN",
  "key31": "8rypoEFdQRNp8znJcuHvDfLNDEGRpbiBMj4EknLc4S5f7JjiSP2BG4bPH42Du3pN1nUQnUtcTwbGTdz9qu7kRLv",
  "key32": "4rU3ExyTKaYGg4mbg6MLDrHc4pPqvNHu5yCujrhv64M7zJ6sMybfPKPuQmEwJZMGpriyzkFPHvaPktUe3HVskDDW",
  "key33": "58zbJizsh96v8Dum5K6wGp8e2Ubirn1gKtSMRPRmWLuXEoGDWBfnGacUpneoYxPRcE1KYeLNCWm2WhgMxkFs633s",
  "key34": "feT8kYVcavox1tVCQPetimkD66vjRfFGR8D6Ao9x9N24YCAzuSrX3RZtQJH5g8kCYrLLbH7YkQZjKwDjGeMQ9tM",
  "key35": "5wZDfDC1uqCmPaRBqAEu83Q9BE65BaKMM3QzybHbittdjz7DRXQ4dTs51FfRJcm4LKBhMAm3FAmxN6U7ydFe2iUx",
  "key36": "C4byhKYb2MYaxwxSCQQnqwRfsTJ4xEETZA5K9YrFDFA8tGrJqPGhYjXbrJUth3hjnCxUBmqyP9MgsKjHcLhPx3s",
  "key37": "31DeTfwPjvTJpSdHPGUV5hGGyHoHEumagTELSyT6XYXvoMdGxQd7fMLk9V7AXyeKSgA5H7Bg7vQBnyTEZEm8wnX2",
  "key38": "5N84fbagoenrn4c8kLCrp9vSdHu9ma1GDnWKnsTyej8hXLByscuj8cdPHiLWKdkYWqEvQsMaApH7LtoHfQoXDhV2",
  "key39": "PoJjxqu5M97H3AHZQ6XZZK6WAYvciQTqkLADy59TT8uzeumUer8o9UvYg6cCkvYvw8fRyTQKNQ3V6AR2wvzfy4j"
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
