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
    "2sVWgVSUuSRbsVUU3Qsou9VjKbbuj78bdZSsyp53ey9YJWfLQFA3t2WNdvuKeYsvm3UsYu8L7g4mhz6VEYHHR5Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCcqSz1yhxLgEQsiQNNwf6h6yWGz9sDBYie7eDK6gy8x5PYhaGYc8MSbUGq31XhohjWH8Wr2YSLaa9e7fTf82eS",
  "key1": "4oVdNrwJdvdHZR8p2QgtL69LWDzpaA4TrRWhY6v8GqZsywW61cWikuiHw5QokYLFjk5UZpnT1VtLoti3d3CNxSGP",
  "key2": "mNSAjCpqR3afwJsxaNkkB5q7JswiubybrSPLp2kCSM7T4ERBZTFxKRcqiQqcwFzXt7TX77XABXZfnTjCYFdrw5s",
  "key3": "2BgdEDQFtKBPrXyVvVaLoFJPb8VYN4QLchc7WHsav1J1X8gsfQS7kYvYMapZBiPVTTGpDjNZPMoozJRN5dXnNP29",
  "key4": "5xYgSCo3K16kSfxY3BFXHKstamgdxzNmG9XFmm4srd9cegeyMkMRMeT4DfF6pjNUShkvtujR8e511HtmiEQQPUq6",
  "key5": "ZHftei6id31CJ1zf6f8woySN6QFrafE1M6kmFFWwQJDPdJxsAgwDUwercfUhwbsephQt8Qzqnjyaig5Fr25FewG",
  "key6": "2bv81WqMJGSVySf54F3uXZcxN1FaVwugw9jexdqcdWywbJsCNyjAPtTB7sDMiU7VcHJdLCm2LRC3gXT5FzZmfSkz",
  "key7": "5iK5Yx3D8V7aYHqpM5KTU9dkETVUbS9R6XdzNUGdJPbpE6JN3EmJPoYKNDX6R3U5gLeK5pccF9Dun1VNmFqUCjzq",
  "key8": "4UFE8cFd6bj71Evtuq8ou9RhFbiRxV3C81Q59Jos2DDY544begN2c8wp71upkzXySZeqQBWDbdZiaJALwLxCGZpu",
  "key9": "e8awPuAXUs5avxaMWKUMY3LeQ5gaQZENXQi8YHY9vRFTQZukZJNWxjY58ziYy3rMSvwFPBtcmxEmbe61i6vSXvf",
  "key10": "3VJcub9CrwfM2x2QDdsUEkJgPoXwdb925P8gsTRrosJBmg6LBne7FyyAUWxArAgLY7FhpbeZuJ7FW3zv3WU4AJZS",
  "key11": "3VGw9neVhGs2Rij8qftNjD7JMMRWhwV2GTfbNQZw2A8eY2kLtUiqRcNptJnDc9Wn5nxCNNrotRGS2A96uzidYZcm",
  "key12": "3D3kbBJjE8KFvyjPG4YCajFtnBvjLyexoTDqLwGvywMNhJKiEx55HWuocShWQ37GLPmDUfaw9WgD6y1QdeyfswUL",
  "key13": "2GXyxBaTHjWzcRaRbt8ZP2EHtaiarjZUMoqkWwN6dsbSEuAedWouT8pQu8wGkwi4feFESvqgV7G852We7JNW5pkq",
  "key14": "4LQmZy6LF3zDonhH45yXVTz6ZANpQsPs5vU5pwHuXVw3WNSoQkaT2jiWxGfZ22RVSGqSHq14fXPvipsQtfcqw1s2",
  "key15": "RmMxuFURPFBm7LjoT8Pny24c35QHBte5fEVLRkyr36T7nsAWAHiKyUuq166Ay5QpL7mqXy79cyaAwtDHRcEHbmg",
  "key16": "5UCoGMn5WWpoeDuUxBrumyaJecZXRpQ3Xw9tGMfRcDK7sC1Y3iKLg9EMW8XhTyLzmVKAPVRzXRvT3eVoHa9JR2Gq",
  "key17": "3L9CVcsnCeTra3F97TwkTd71Bb1bwgsJqGTjJrjuMKzprC6njEeb4Brury7HPgcwWhMSLXg5gxXYhzyssYaHx8G3",
  "key18": "u1GbErTjNBtSMN4tC645iBs3z3UDZDhUWhPMpYX4HqmGoVLZ9QZACwfqFE484aPjjaEDmWWRJCC6UTCtWftC9zc",
  "key19": "4iGPjbS6okR12ankYqupiEnPdrbsn3XA5ZYZJ5QYMBPESHCdaqTrr7Q8Zzewv1k3tA9Ri6sPc2DddXgyGoRSYhpt",
  "key20": "3ffiWMceJkERHhDZBxB3c8sFhHMCioWpaySnCzxHWH8y4bwHEpEYSz7nyhvWdNwNQadaUyPbdbPyASLSoNqQk8ZU",
  "key21": "5KPRnZu4CUmagcBfrpwLKYqygBeQrHyrVC4cuDAYm1uXNduBbBuNG2E5PDBz2Tvhwf1jaL2vrX9cxHNMPKR8Bx16",
  "key22": "2SAgGGhyePzvv9PbnaqwhBEvKqv24mfCaYtps4wS6LdqG1buyYjW2UFKmKL1u2GiwTgh6dwVH3pzkyhPmFdpqPNV",
  "key23": "wKBPTipyNRVfwFYye66eJ2iLhkPCJ7bitNEnnR6QFXRfyjXz196ixCZoXVZNhB85nB1q7uVRsiqQ2ZcXtbEuaYs",
  "key24": "65cmKXbCerA9J6Q2aaARAbkJbtiMMgffMnnVkCpaBA6xwJZLSgSHWFHkr2CcgECjoR3R6KL1De86v9PpYBEGsMZy",
  "key25": "3hCognCZwn2fb4QNhdxFT8KtkjbFfHvCJkbG2zEmoLiFudrfA8JvipfZu2wzBUu9oEpQJu5LAbV7Vvn2xu3ETo7w",
  "key26": "3FYPVJua4VsXBZfuvjyBZQohv8azaZcmAdsmPK9kG1puQZ8ziCezFiCSM9H2F6Dh7QEsrKM2CiCD8ACzcrT3jzxV",
  "key27": "2a91Xp6qb8ewbwU3KnFrhaKsercgitNG1kvj6n2Fzes2Po3DYEFcXQALvGkHqHxvLQu1CHsUzLXtRW3K5YG2LGy4",
  "key28": "3813gKGfrxcZsAqWTZncwHA6Zvkvan2CatdBs3rShFxwKoZ1UGMqdx5oMUpurnwZ4p2iJcCvpKKsMZRP7LFDoesz",
  "key29": "56q88uLwwshXEvdfZEmaoD6aoN6Vqg1H7XxrFCdLgDDwjCaseibx18R1fEcHEFKQqwGnurUgnGrzbyzKdcACfQgW",
  "key30": "3DUs3kXK7QiyESZ5Zfgyr6eAHEYgHhRkM38v7XV3sbKUCyRZRcUYuARpqdRzpPrdjzDLh2QDvTvuoB1KmbJnYq63",
  "key31": "4U57dkMpZd2mUB92F5L8HfMexe7s9d1tixRCus5yahLbQHvSTF59ZqncG8XvDjqEw4bbk2F7Ux8SZmG7t6skyWRF",
  "key32": "Ed6JuPpqczYyFtJHatefPhMAe1MRrYiFKVQGkehtiB5Mr4SutxEMmcm3E464Cv5GTKz4M5Yoda77QJKMKZphWf7",
  "key33": "4KiAybdUVWqSXzB3QxYTmV13bG9YoLBcEkVaNt7hvFYRbaC9CUUSccmg6sPBpA2RJ4S8aXkeXYmBN9BRpHGGnV3x",
  "key34": "61frZX9wVTf8H1CNENnji6WWXRjS6svE2vjtxcU79ZwwzfnBELYnbaTkommzjMuVvJMgHSPx1PhVnQD8VjzNwY9b",
  "key35": "2gmbULCbZ8dSMRhbhaCLwTFahASFE1JdDMj4inBh7JXCffbbK6ZatmS3sctg9iWb4dnRPmRsLDu22PQx9YMe8AnH",
  "key36": "2j8odR5Y9bFTKRXWn4j5AiibZXCHVdsJr7aFT8rvRoU54MLqgUZVShkM9YeZ5h258GVeqM1RGwKHqH4LHm9LJQ5P"
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
