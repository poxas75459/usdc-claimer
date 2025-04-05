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
    "28fvMkMKtjVRqbc9ZggVfRokvb5emthnVGsHLaAcdiF7tB61MNSa6j4fc2GtSKTjzFD7dfcNrbJd1q2JLtHE49uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLwE4k7nobpAWkzFGLktNcvARBJNK64n9KRuaYXW61xZhFxjWUXqib2YHWuJt41o3FaiP3Au1oLoC7FiG59z3vh",
  "key1": "54rbFx9UJLFdTZJN1ZHAoLs18MePPCqpmxYesecwzD86XpMs19XWbiw1dVuxM69JqXLg1Qrjt7xEuPYFDZTvZaKn",
  "key2": "2fz1ctnf5fUYxuDDSNjjDEX4CKqA4XQVM6Ug9akMSpXQSUDLaCXf9GUevefS8v81rQuUwmM5d5NbensofnDLT8eg",
  "key3": "2hNLdnQ6PWUm5DxeHRQSbpjAKykeLgBvsjdGMuutEoicfQb5599tZkrW3Ao8n8ktpNsz4KPzcjbEdTwz2jCW15Ve",
  "key4": "rB9PxU6CwFASvkogkvgSnXRXqJ3KyXghkFwzb28rUNJFgqbFq8oEUzNaz6tPNQ1A6tDg8Suf1vHAby3JkHqCEeb",
  "key5": "4u4AER2SkvCtCkAkxLUH4NpXsFLpYNtLhsmM8Ycjdb4n5LQMcFitfzyzkKhvTkVfEau3XfL3Mv4brZrYqxT7N5oN",
  "key6": "5CqsyuEt4LeHsnNq479JHtu9KMMXAJxVLQ5ndzuF8S8NoWcRt41h3V1AihonqNGofoqgmwUXq9Ei9mzYJreydcEe",
  "key7": "4APL9N1CVimgzfKoDrTpurKLZzhaUoGxxuaAc9wG17wANbSb3bXoajBu2mFq7g4kQ5nbP8U2DmcoRsTdWv6oKKqH",
  "key8": "5c5mhv9ddMG7SQLjwKHic2jQyfCXsyQguEUukgaa4dQZidFW6CuJX5RsGt53VG2s7rUWpYLhu6xzz7jTxMjubTwQ",
  "key9": "2zR8mjaYxSXddeSwxyjTn3iBNCgf6cbneB2sfBS6ngtJkBuXqNEhaqF9VBK3yPreLsGVgmoBWd3bStJqYfoyq5EK",
  "key10": "qw4HfunwzB66zX9msk6bR1uZvVNYDjLfEqNLBKETwXp9LaW55WiS2JAyvZS8rh1vSkFgb3ue5p8uaG36k1VHqnR",
  "key11": "GvbNjLj9pszmGViadrXGnEmTrcifSopv2ixA2YjTJngWzrruMMAAv67jsU5Zp1daaMTEk1YPUMdGEWdDdSW2YEL",
  "key12": "kvSo7E4qRB52TJ4ooR9bn4DHAYPgPGNAfeED1B2f5nddxiFeFGg4whKnFrCbF8Ua1Hh5YkgjDHNNCpZVYnE9t4D",
  "key13": "cT6GJkmru4fbpVZCfWwpVUvCmocYxPziTZRsZJgkvtw4BLZGqQkzaM7762fMSYx86hseMJw2eBS13sXrhogjv8G",
  "key14": "6X9cfqd2pTdCHdHEA5Lsog61YbsQCXGZgZjFNinos2HTxWXY25gCZvw19gj7UKPo73q2CERhzQiS1hxNmLG86aN",
  "key15": "4xHEDJanpD1vFTXmwS67XPeyQyyfqD93PeteT7VPcPx491rxQEix8W7WmVhfUer9HWRnjhWQU3Qq1ZBYsMubioX4",
  "key16": "28146So6GSzsDnidWfqRyPVL5djRJ64MseBVDwyhxN3nduaC8KhsoFgFC1NoUyfRswidSvfq1nGGbK8ktC49HkRS",
  "key17": "5AEfvXeQAj5SDVfrq7zG7J6xJ36ruyJabsvKvbhbEFX83ofJgeLF84zeRZqxn5v3MidAJKHZuF7qdjHUPYDTc5zd",
  "key18": "4Po9MQnCMtyFFcXJuAQUQVXpUug1atUuhQNd5X5ax6e5XbYZ1CczMzBFsodPN3tLsL5vXWi7cjetnFvBmE28zqMt",
  "key19": "3p11nAVvxmk9JPj9w7VWDUX1SGhy9bnzRXaDbQthCnUEG7WpeE2xXDLTMTFD56N2nQEgQWPhXEo3U6RcALy9ZY4S",
  "key20": "Z6rsNetsPS2ymSNwCmV2TCVyHWfw5GZ8hUHndcaV5aVwS3h5kiCMnRxSCHAW4ydaF766fLU2M9fih6EFbZvH7mL",
  "key21": "58zyhLDQGmZf3crPDdVLr59GNNk8a7QiaFeDgJfoT7Ud9Ls42FZtXEA4d4mjLTwVEu1oo8irjqtpozJ63hnBo5m8",
  "key22": "5iwC1uVxqKa9jk2z2kfh7Yx2o9grS3pWsDb3Uik6CZTBFoaWPtVdVtZieaoKs8sx8zJZLNBdiygC2PDjp7PPypsW",
  "key23": "5Uymai5dWbbYdNZJJ3ErWDqnQu9Lq1ZQujiHa4Sz3ZGAZjZViMTvtdaYtpnTTtDDeZVM2raGCdiSBVrSXZEstDpj",
  "key24": "4mB8aeTZf2tKzYSvqPLLyjEoErDzwas6MDZEtDpp2Nn75hSjR7e1JRCxvqRLLJKM7zwmhuGfnhAm8tw4mcVboeEz",
  "key25": "V2E19eRBHt7jpp7wM9jWCyxoQLJC9Ff2XvwxTYazknLfnEc5DYnPp8a1TsdyH3uHs379CWbrsRHanivUCrETupc",
  "key26": "ygh9tRZHVXSK1gQL28XVRvsnrWtEEJf6kp8yrQBtPWoVsR8jVz9FJqRXFc6njV2nPkGkoFTHWy6ysZc2nK5rKBV",
  "key27": "hTn31tRxXhNvLCqfty4vD6X4vC6YsGssdTTyTJEMFhuN6Gq5DwJHZJJQVgUi7FhuuxHQC99bHHTWUo4EpTFBsat",
  "key28": "qgS19tmYpYFKKyg86pQFmvW2JXyd3oqfgYjiN5hZE8iEekXJMRVy9GsDfDdzrb26ybgQtBBMdx2NCa1dvnneJmj",
  "key29": "2Mr81BwSDof9A854ZL31ZebeMHKavmapUTDPhkHWF5DvDnnNabLzGTE884bMZTeQgjKFYnh4ZkiERR4CEtWuTTmd",
  "key30": "JeuDpBtfJaNNdhwfvyfkKrD7EAjNjADZdgG1JMTmECfGk4df3z9PW8taCWZPUMxUgCi8z7PDBidxQuqepGhVphD",
  "key31": "5bPCdeFCQJexvQb6RfzFpkihwNBMHgJYd8YHSpDEV4Xvi6fpAztoFpdQiK3We7uH9EeLcHja5RaxPKZgR3yvSDk5",
  "key32": "3qjrtUmoqfkFbmmoRwiNx564gyViHQifgzyoceGRUaW2GJ7sojVyQMuaUnpoVTQe2HkcauY479FNXwtQ3uuXJjh3",
  "key33": "5U1aqMhMpZHeKEneFwCmT1Nr6H53GuWh5orjCpzcefgYgdZgDEvdbMys6K3PPt6Jj29R5sXX1rmwyS47Wae4mNWT",
  "key34": "22Pq94ceyeU8W5CTJKkytS3QKQ7uoUQjthSFzKKmQT7VnLszubqU7U1it42wrSACFoE3zvN3t4WhuWKNaCk2FLEY",
  "key35": "HLRQqkFPKYC9aHTRUd3tKgJtX6tEtkEo1FcYqhbcRCKppsz7vEf3e1yECQHPSzbyJP1w2b6wKSp6adhMnJAe6q7"
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
