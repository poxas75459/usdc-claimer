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
    "45jCPzMp3AMNvv5EHgv2HHhhoDwH5K94wRKgW9fywbZKsbeDL6Mi8tzAjV5a2Mwm3tRjkbJHTudEMRARaFuxZgF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkyhyaPjMwyLL4WAd8ye5GGt4ZFE2PnMzr2vnGbgVL41cP6upZ4aSyNoPh6CQh8NjcGpWXzuxsZAoB84CdPYyxY",
  "key1": "5xjWMmZKenB1RLeBnt8pz8HqQvySFX9X6pi2HAadBHhBzTcj3GPQmMBXw9W41oLvFsGmcegiyMGKTUd45SmTaCy2",
  "key2": "55oMqtCEi6obrWowhQ34DyeYHGTMqf8zPYrCBMoPrvXetoAAuufXi9rbfjVGc1P6nkCUCV9Um5G7MaeKXxaR9CS4",
  "key3": "5iJoKeaMfh6vLv4KiqVhAVCdrL9q2Q7Y3vv5soqHofxo1iTWUQWPRUSS8HfAQYSDyDSgDD74MehY6RLRpSHyhKM1",
  "key4": "2Fz4Qtb68VobALCDGHKKrkPMaX1sVrfioTUbnk88y2BENhou6MXUU87XdHJLmne56jWSosJn6H6Qr9u98BzNkZYz",
  "key5": "bkGHWkfETjqMJhJ8h1F6yVkGQzD8SwWkP97mGNv64q5xKcFGHZhU5MXThFRMtjyLPrywyCE4fe2166t5M2SLiwA",
  "key6": "4KMGRrjDK6potvQwidCpWbYm1J55yggv1zk13geovWmxU8kjcbuwr4zT8kNQNitm3rrSR9oRDV7D7bx4LYbYKNMj",
  "key7": "2gULsLoiEfZYEC1VipVf8FD2MFAVCYeMtzTs97uKCs8iwAjsEEahjzpxHKVDztnYe7mfbRpkFM3H2TxhfRCwyZj4",
  "key8": "KajuZERuR5qkfgueMZLw2jekiMTEAeqXjLbqRKTTb1vNXCXNuRLkAWzJZueGYufVD3hnqzFp2ckPzWQTcTpCUpT",
  "key9": "3iUTzVkWcwzsSvESWXKrvYYjUCDQq2cs4zb536eWruo5LYQHa7wyJ7mVR5MxtoWNaDAk3mjJ93CSMmiLvePFYQdg",
  "key10": "3omBEHYNcSxYaURmzMQ2jdUse9k8EKkatoVaXVq1vYH6eCCny8iAteitxsqAU7zRWoJQBXYGBs4DaPL4q9xVqQxh",
  "key11": "4AAeVLS741p6QeE2rgnAADpWirgg1frcooVPPnazzJoqZa1fBZVSMZgkWmVRNg551P6x6sLWNtuung3mexbahpkp",
  "key12": "3Hknci7Dnf3WYbqw1PnjyGeUSFRcTDuNmSgwiLoPvm7FV2Dr2okxdwiRABagk5TqoY1fX8BbQF8GoQ3N9jrDR44m",
  "key13": "52g86TCB4FLt5EsuBHZJ2QmBYSJvAeNA494RLBWG8f5ZXdA1kHSrPpJxfmj4gUSCuS57h2wtp5eV5eDfCMzkFUf4",
  "key14": "4EYJSQmveJhryXSLJXWv14BMkEpVKdLN1ok1shW54bFtFQcAxyfAwrhzb28EaDaxhaJj3zzaVbyk72St1EcHbxhM",
  "key15": "5nqnK3ZYZWc3BFTsF5wpZv4urTtwgCLTWobLsmyzoAMkSuV6b3hosVNEKnE573nAw5LpasZGinRJAShEE4Vruso",
  "key16": "2WrMxLUuzksXBAdhQaqFAtsnLkD4MuXmy23FE2AVNhrDVGLnW9vv2GzoFDaL46vWJwWaZ3BjnqMoVBkTKyKUeRTR",
  "key17": "2D6eeSScwidt6L9cHp3PTwDkNSLZWvD28duq2byETmY7uaUdFwURGy2E4jarpYTisf664STPDts6yFDdCSiHRuZu",
  "key18": "2rnNXHXCCiLNTiP3TExUKvFSrhY1wmQpGXrbrDBWezmkuW23uDvSxjkjSE9LMkW3cKUrb2Xih4X1V6tZm7k3byKo",
  "key19": "qvQbwnzLRtAk6LJReRwvX6rAgswApfkU3eCS1VXYciwXHMWbRQTX4Md2S2axL3v8xU7bJNpTB62VhfPUu3V7Y9b",
  "key20": "3BGNhJ6arG1ogG7vCifHdh8eTd2aKm32pWkqiAMKFj9aF4HBEKJMtuzLm5Rix5kpvtdY7XfZefWysVXCM3HFm38X",
  "key21": "3UW9X2bMH9ZV9cdGGBzM55whSDNkPtCmxpLHKmexeVozdN3SewamhTsa1bVzyMGvefhzWqVZn6iVWKLvaQke4E7m",
  "key22": "3zvbcTH4XTLmBL78Kqd7ctqZ3jarVovYGUTp4KNcRVscpd8oAM2GHnvTWXMBevuucbpqgmetgKwxEcPvQJDAtUht",
  "key23": "3os4cDagbHWJWudg6oFJzpeef6a8LfTyk51xNSnonYWKDVZVTAvd2orzqj6C26k3RJxjidQ1g5JnH16TiLJkMYP7",
  "key24": "5AeBPRJGH5tFj7Qp5orkVmHVPXKrWmsErXrni5Yvi4Bfy2bXCX1ZdEFCYBBEdgyGBytktM8ZTmWu9CCc5UJ3AauG",
  "key25": "2wyBtdd6eUj7GfsNUjZ3HzdeKxUQTbbVbhEUoPcgCu2WYvgRpXKVZejAaMbqvkcJQbeApTaxf6BJjcDoDo8epCgp",
  "key26": "3mtCtHrNekawsqxCPJmBhckFN8WximNEgr8jvjLWKvebUHYmr86V9TMG2QsFTjnxQbJpms9XoYUucrwgpRMc9ouf",
  "key27": "HeikSkfcQeCtBsUTbjrc3xUfnee59pYsTqHjQerNEc9pPdbR4GNc3g9LZFoifW9N8goBrxRxFqARrwqzJfrLb8J",
  "key28": "kF765wc24V6DiQACZ9Q4T1Rkfi7JKG6vKBrAeXKgxJCToLb9XASPi72zhxaNchFmpadRt9woSKAMJBnKnQvqkGR",
  "key29": "5HGHNc9eAHU5ihQhafGp3T7toMQWcWCmqwSm1cmL5B3BhqCgML23iG6aFy2fgyVU4eqXRqSFk4ztWodCYn4NMGJ5",
  "key30": "2WgLDjcrQ56bRDptwv8FcAjxfm9vNkAbJ7sV44p2Sc9CKMiq9RjKJrbSCe9k9F3oDqQ73S1zio1oiXaS2cZaRt5E",
  "key31": "57DUmAQ4EU62CLo3VC4zbieSFuXiMEcUsoqYQ6P9L1cbbffkeFVVbNoXm6UDTDQseE4gzWh6Uk4YadZXPACJA5jP",
  "key32": "5oAcLHaMaKag1nA3VoK66j8gVyvcvhDn3BdnJyKYuRek1AyKd7z7iiYhKAbqzTeS4HbiXb13AsoSfurVXbPd6sCF",
  "key33": "KU341WvaQWyD5hnHqfvarBhuYsubqMPWN1D5ctStbm4TGMNCaMke1pHwUWjZcs6NLmDrEe9pcDKSSHdRtFQqywa"
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
