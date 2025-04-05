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
    "2SXrGZDGdwVtp8i1No6c4NkEVbyW2P2Fs6LPQhbzzZinQyn9wV8zq1dZSi6spRTc3XH9LGBX1aJKCvbC3FhAKiyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuLCRznQkBwSFA8bEaT8YfQHr3jdE2JQGgNr3XT8JG2xjpQ95YaGJdrozyQmJn6muSrzw9WXbf2ziXbPWEo46mW",
  "key1": "479ynBLqs1VgkJWB8JGTBkmXiFKvuEgwc6ttUjUS2nY5EE3V7i3w3Moj7XPDumt9uGnZHMLcBmzACyvhF5ssVFu3",
  "key2": "2spFg6ysqQDy2bZgK9eZZ1CXx7UsiYd5XwiCejMJC8CN426CXBrgtGGQEcAyYnuxH4uHXWbV2XfFDoNTgfNyhpo2",
  "key3": "3gZEjeqYYb3Na4AgVQKYhh5R2rjbhX24jfqTVGx7eSGijZYop354YWMLtzGnsre6j1E4FfqRF7khRSizrN8XYNPA",
  "key4": "3dNNzJFaF5tVwoJYqikuADWX6Bm4CMNTjz8z6qzpvNeriuSndsQTNSnwkaBEFoddBATv67X9HdUWPm5mevYmjyXu",
  "key5": "4AVDcgWkSGgidA7WHZHLDBGZcL3z8mY4iD4Q9iEM8VgTMwPweXQjwu5mqL3DZQFh1oV2XahLQ6rCURh9aR4W5UxZ",
  "key6": "3jJPHVtZ6yqRYz8ia6HsHyHKRoN4BDiKu2TgxUAEE27FrW5F4rny7aM4Yu2nTqBQGy5pX3RZKUi48Q6ZABAbSANT",
  "key7": "Fxmk3FBzR13xc2L98DowwPtgKaXXZWfexPSmTEDU8VtUQPDZtrfsLEyxbsYknNd5Ky4isJSttYKr9FaCiW5d4di",
  "key8": "2n7r7otiEpsfVSfzZjR1o14ufT8b8pb52iEPk6H7wUW7yVLUMLdPdw7iqgVWhB17canWYEyUkXQhe2zknzPMv29P",
  "key9": "42eJNEqmbTuvSkfWxFSqZHCz88p4PLx2K8fnPY8wDj1ya9Umax6BzeUTiYVXQKN9j8zi36mAHZibipwqnaXZKnaU",
  "key10": "37XqtbFyFKyeuqMzfJezByprw4uMXtGWQcmH7XvMiSwoWAt4q8ivmo6owmRdBVRCXobTXFt5MY7cCSPGm3YsLAmm",
  "key11": "4RXxEoKCRiQPKAu72h6B8FiXnCAiYW5Dn2E9KaYWkHju8mvhxqWCBSyNrciyVgNRc4uhDuExiSa3bSyR19YuJ7df",
  "key12": "5ayVVTzuMMWtXmv65mRkWGkTt85a5aNTPGzYPLDA8iTsdtDrZCFEgp35fBPEw1DGPBjvNQYJVvHDkAmwjiyGciiV",
  "key13": "2d5YLaB3uaTGUjs7wfivRG1aatv79DmNDqLJMYXFSnpupAsaC5qaETtqtiFbT2PmU7K4MsU38SjmNU5jWK5Et8vW",
  "key14": "4C13R7sVh8rUdhSSber6U5bFxLGi64KX1nLSuQkzxenAygokxTGVh5sGr4cKwBDU9H3KBbCWH45mSnetkPFhtYTV",
  "key15": "4Bzsg3Ue8EwXvBqaTiBrZFpFfkx43ZWepDuFs6z3TTNhj5d5p3dzjPtMqiR6EWyCg8WvJA6uUA1CXeaMTFzL8GTT",
  "key16": "4LNS55qLvhdPgiSUwXG16LPVszgjD9xQ4NRUG4cGyPZaEgiUdSx4hq3kZ9mHT2PEyVMYh3p5AM9Eq7bReqnUTdHw",
  "key17": "3tCjH6HkP1H2qBFKLFr5g1tx8iAoWqJ7JwGZeXXbL9UpLmNS8Mrshp58L5sejunwWkLVB4hLGvhqThjjgbknE1ey",
  "key18": "513r1o1UgSjPjVK5jqHNVUS7fkBDYhA8KR32jfxTwuZGtptKf7BfbKpR5Uw6WKSZiXu81xw4Y9i62Wcb2VzV2hkC",
  "key19": "3RBnSa467V66s5BC3qDC2Yv3zeZJvSAubBFEymrQfWyAeba7Gb3tiEmS63QkSjVWCZRg7YbVKszXSP2RuKV6osQc",
  "key20": "2L1ojMuHvRZNp1PYFgqVgN7AJ2CA9ggyLbd5VfXTGqWy4atrYha5hGZFe7dnBgUd4HZskfqSJ29ehxQFJas8AXga",
  "key21": "39cL8LVLcNwRymSrzGrxLDVtGGfV6cjMUD2cGmzELzBDZxsdZnpjFn8189LNEcBXr31ecewo9okoa6BHhxZoJZ2B",
  "key22": "5Y8TUkcm3ke7TfpBrVVCDxi2MMmYxpA4qkvPcyAUtQGNjJc9psNcW4QGaTxbyBLAZVrmCS1U98p166oE9bhpK57N",
  "key23": "2EUsLCXMsaXpiK8BVjZgeVzjRcvXq8FLLYhqM6zU5BxXWiTvXGkDUoRgXejAvjaLwCEMqpBXxGDDFw85oECWgJjT",
  "key24": "3VexdcPR8d8gWHFjqRyGmGb95oh7ZdsNTeugbU8SHZ2NuQAUDyUXpctfgnjvh1LZMjYzsCjzWFoVinRiKNevcFM1",
  "key25": "4RBcXhq8gN9JAAk1jNnegVo1UwxBELB7d9ReFEX2HPESxkB5hQkdTBPX9ZGanWKaRXvsSEHdYjUZT4KpoA1MVzLw",
  "key26": "62GVEeWrSkVBCVSQF6u1NQGM3F4WfjHvemWjo8T7WUeTn6o546F5zrKyNr5nag6f6vfvGCZBh72DDKQE4haAz3ee",
  "key27": "Sem8L4Ai5idKhEkijrWU3bNBR8ygMZzD9p29mC4pAZW9cuqdWCkKXKThzQFhtrieqe1nZwS4bhjGf1vNB88W67z",
  "key28": "W4vokugcJTmVmr3F7D4KPHhkAjpCpahr2fEdBzbpVq54avZrifyn312E6SsMVpRXJeA4myNkCzijxkZ3LpPasch",
  "key29": "4LFJiqQBkZAooGyfs1LgXLuA2zWyBBdKwZBSt6CWkmWLeNdgSk56tTV2M1oLepgpbWLbM9YdqZwgwcndB3xBdjrJ",
  "key30": "5kcLSHq2gYrxq24uub1RdjZDrY2CaWWYtcEVZBFTpAV7MRTCbFkAQPfYXhrTCExCE34z3nkyMjRFjqByTXCsQeex",
  "key31": "3onceEPNbfnbnLX1ck4hGyrNhaxv3YKj7ibeRBXA9RwNxJ8nW5d9hyfcEh4TtboTu9SmrAhiFjKPobLj7rBdEQsf",
  "key32": "5WWEsqZ6RYhjcB8SHsaMFKv28EGRC2EPvyofNA5sZ9p71ivTMeTvVkksdXAr9mCu7oUvohocM3vX4Jjt4dwX1doz",
  "key33": "5mLt7djhu62H6drh6Yqc1DXpcntkF7aubiGTQYgqvnrKLpcZAhhWe1ZjJgDbP8y4JzDUPYPkCjt5kq9nWSJ5aX4U",
  "key34": "51qGfV4v9G82DPEceJ6s1hL8xgDNQnzxjziz59e4wmrhVnaRKp12VYbdxnbud41mAsQXqkfauREBwmcmgTBzY4Hd",
  "key35": "4NFsY9eBuNnG2vzo5v3ujcBBEQHaenXSGBMy2qGhu739a5zadBqwuwioTwGdVYyS4P4MQWeHWckryPwY81YomLja",
  "key36": "5iGxuFVZJZN3qWrd7CiAyENGq7GXjDKQBEuhU33AX9gzq9oRFRZFE8pWqeaoCmQGVBoE5XW62an5V3TQ6VPuovsM",
  "key37": "3i97F8BabzfnV6Dfr4wdW5mkt92NxvjZVHFHqCE4D4QVrWAKvNuGL5EPoYPsaBinn1HNQGx67jEzjY76jB7rz1Be",
  "key38": "2po8WR4NJrKrtvokQz5AMrryymdnqytLrmehoiXbdtetmkBtYpFVwXpddxGyjg7JiehDyqSAm4WVec7Buhqj2uJn",
  "key39": "2P8wSU1Ty5osmr73N5jTfQkesswDGnduistxJ5ndMM4Bfp7iVFz7kDnHY4gd6Umq8DhehzDpnmFdssvi7wNZkdet",
  "key40": "3eMNhEGeqtyhcGtJXk9BVq2Li4WGQu5mPPvBzsddevgVoioG3sY2bStaB4qAK1RPsoBw9j45aPhNQvz6rLhTM3Dq",
  "key41": "29FNnRxipnJoLWdjn28wEVk4ShTVQqM8dL39xXm3vtjgVgSWksbrFX8QVTAiHYtxer5Mb6iu4BByMmz4xKMednax",
  "key42": "qC7X8pdMgW9FuwWVqSaEipVgxrYvaNLXEsQfdoHd8k8mTUMxkX5DetB8sFmCkU8VFrU9QKizMA61i7FaBrt9N7Z",
  "key43": "2fMxEdDuDySqz84DgwRPm3t27KprZoZssYZ4HUhiPzRXroxWiNwZWmZzeLfB8JQqz7pvMy1PCq549zyMYhe9Hxcq",
  "key44": "43CTrwajvZAybRw3G5hjzcPw2VEeb6xFYvPKYDpKRqBKgCsAZUMNEHxNsnXy19VCGxznKy7x16Qnwm9bPqHmdUEF",
  "key45": "5M2iyYV3jQ2fZDS7cYBzEmLK2Y2PABqFNMAPjDVnrVzHN42y6waG31RNbSXCMc9jSxDuCA35DjHaU7pEun3oAHjb"
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
