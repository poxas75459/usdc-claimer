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
    "2Sikh74SvNeWf92fk8NdXyUvpQVSRFiSaXNFLyS5Su9soBz5nwwLPVt9UnAsJXNi72oMaxuEL9xFn3hCRTX1R3Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oSENs2oFsjdob2BiSmxkHtWX6R87ZJmTyxkHMxJsfr9z4CJXsge65dEw2WEJno7tuUX1mo2Z3cGx2tsyn7tRn9",
  "key1": "5snBAA3EnxDz1QNirKczdx9o99Q39AS4g4ie9VPd4Ye966fvMJNCt1okEnk4gPXPGPGoR2n2f54uwzYTwTiwhoTj",
  "key2": "5qqV4ZCa5jXaGJ6YLQfmHxmJUssx6B1TEhxWVFQBCzdoLnGf9ovTzv4EzLeEpZTrtnALk965YdoRkNNi7twwe5Tz",
  "key3": "4R4LCgL36fDSPcisjpikQSsZMMKK4dzwpYy8wX6GZNYXB5xdFt5Sb2ZfJtCP8K1X8fAMbWGD2CiTcawgSz2T3twz",
  "key4": "3gY2eqV34LEy4ginkCWo2xv1RviD8Dd9REUth4jVheDj3hqpgy8WHaYTPE5SNPkuxeMekF2fLhhRC6v8o3YJfm14",
  "key5": "2KFQtpY8CGnDdJS16SJnepKpF4sDGcJLZWd2boHiniy9nyGU68djBHf3k3u1b3o4HYdshBrFZVyRQhHSfzLpBuds",
  "key6": "pZtbHqExTg3AXqFQ7fNoHA61KRYbGZNJaiFMAXVF59oiV6buwHzpyuChBeMPqbnGYX76dqC7fVSmAqK8CKe5sX6",
  "key7": "2ByYdBnrsU8kALE4n26PMqp29dHPoFE7Y8E3ngZr4jS62evYDdm69WtMxhKaM1ZNMMfg5dNrbcM5V92ggTf8rESr",
  "key8": "4fWX5P3AqzQMzEzMTDCaG5ssAtooYkYKktTALgHaTPLuHWZdb2BCVjAwcCzVM9Ef1KAbY7auzNXsFghdf7uHQAiq",
  "key9": "37MiNPcdLHp39rcLonby5VaM2KWfjoCAZGQ5WGnNsMiK9wRBiWn2wwEhnfxiDUM1HNfFvaqtgUgNeF5hdmwDhPvZ",
  "key10": "3KANTT2kHSZ6bDMr739bwohzY32SJjorjygWozJC8tNE9C1fAu59csGfaoTE47epiHhhvSacmCdLchyQb9fHV6Kf",
  "key11": "4n5tN7W2CCQ4WVS5yJK6HWFfeFehiNfjCBDLa94ssZdvhVLc8DGeF3iYSayxBmkYz4sK8h7NiDsvYn8RrPrZL5aP",
  "key12": "2wHy83GShdxPUCcxR25caGo9FWb72HP2ttRJycgHY1qL5SwiZ6XeS2mAmSpU3R4UrgeMkVkWeka9UtvznapAL23Q",
  "key13": "4QwSrZTvTdXfhFs7wW1AWKocVbZWXtAxeFTsRz97WYYTsNSggtgPfBtNtapiXCjRjqbdFM4pxybe2zQnXGQytv6n",
  "key14": "4zmSqchW5pUr8CPX6naKm2VRNVuapxzvaSbkHGUkpw9g7MNRaTGXQXGrJrRUV5hTozTJGMRBmD7P2ppJCNp9aKBE",
  "key15": "RVVS4j9fbPN77Kisk7qfoWDWP4DQ2vW7uyqzqFR1hMJdwksCukaUXkKQSj5i1c3Y7M3k7Z7cqP8aCMWMdezRnZa",
  "key16": "y6vWpEAGPZdyEjzHrvnX69MxMMkj1rxnrzNwXDbwCubZvfBJitJfNY3b1fGPJjZkkrJ3u4nJ93rpZo7bRkARKBU",
  "key17": "NZq2eP3MuBC215PHdmk3swvS4rCg6Fniy2xSmBrGviWNAE1sRXPG1WSUDA2UUd8qajj6uZoFcE8KT544GYHcAqX",
  "key18": "SLiU6qfJEW6HurBApZa2ebi8zPV5aE5Jg7VnBc25hyCCuno6KnG9odNkyX2GLLqY9n6j4RJkLfniNS83SvZQoxb",
  "key19": "3jb1QMbB3NiexYych3ujPJQcHLGiJkLrGVhVL3TcErRCEj34rTW5K1bk6H1A55UKNiD9HYs1MmNPaoEUbD2SxH7x",
  "key20": "4JkYuadpp29hP5kxYxBxJRnay8Ei5xHDd1kUgUnSxmpaRYaDMh6SBqh8GcRaKmGDtHU5Xeei6NMA29R6Zh5GJZ5Y",
  "key21": "25HDbbadKxuKzNYqhoL5qY2c1HtnAv6QpUtarZ7Xm8MMM5u2qzAJNhrbmGEnVEYcGCcs2KHsLoLrin2gH7dY235m",
  "key22": "5u9fPrKegZacBfr8YwvHi5FcufviUF4aVvtvCZ3XPTDo9vgLM2BhRovCoj1D7ueETFaw9SwohR8YRMrSuukvp82k",
  "key23": "2Xmpc5Ne4LDQdxStTGeWgKTdgf4HunauYeyPmd8SaogzjCXCEkVPbnHXCyorpxVReZWu7xEdUMgiJswU4WwRMQZR",
  "key24": "4NWKnGDAcevo9bv6Tpnzfojournbctjip83dX8MAvEeCqtToNt5Jf2njEfM7WY58UAGV4pkKG1mziqKqHbHQXurE",
  "key25": "bN1pT2EAU8TMsyd9JbaFYjNpvFhkuj75Q6dmRguYAPvW29EyinE4xNmZwdCYswfam71Pc4E1ZG7ZrEcuLU44Wvt"
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
