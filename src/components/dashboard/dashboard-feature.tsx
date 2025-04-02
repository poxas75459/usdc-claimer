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
    "5QKirQt7e2ZLhZTU8b3mMFsFzpwVrwMPS7wsuyZBZZthTu8UXSwKc5pEZqeQXyWmV1meikx5MgGBiSdppFhaS73j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BE75vKEWzaubCt1NxKtVDWc8FSaTrwsrZ4c9BzstGtEZvMF5egxsv889ruxRmRmcX2H46SVJCzNPeg9KFsRm7CB",
  "key1": "5f6235ZyJFdDzSeFfP14HquiDGD7HhNpFB2fsHnBPLsahbrsPnkp7d5LkhDffnW8WP9nPaExq9VwJuP2JqovqLxM",
  "key2": "LdrdLsCp1oh3kGL6S4nezGnMs7BkWCn4XoxdbNrgYxqA5wDGaNvGdwtD7HYTyUsWDe1jwMH6ufP2bXt76uNBEyf",
  "key3": "5F9SWA95Sppmg55xL6xPipLKAMuE17MpjP8hy1EoWLXEr73bAy8BTKdeaK5Xwd5mq4hpBJ15R6Fq56oWEnCmYNPV",
  "key4": "48UCHxG6KYQY5b7B6t1uasg2kSHDxcgLFwxW6uE4J4zARTguNcWyZboGiyjwgJomZTY33sA8QLecmJ7KRJAZqRt5",
  "key5": "26JU1Ne2UFmVxnzMoEZ4Mitve1ymeKRSLTRSaHrFW8cgMWREGNpW4vG3EcE4GubCBP7x5yCJM7as7nHtjrt8nKo9",
  "key6": "38aG2uuzgT9YKTNgpJkHofwgvoCJcm1CPYQAR6w6cAAdCZG3BatEhZMAhtxFBMAXyNoTUSBpnaoGhfjTgx6TWRhM",
  "key7": "2A5GHfVVUUDkcYu2VaWK2tKGSw42XehFyeWat5QYqrtEMd1ZbLpVtw7kyQzqMFhi68y2KVgw9h6giy1jwaRq5Cth",
  "key8": "3MEDGZ5ojrJK25wxNxD8ZrJDsQk7rvKEpX6yN5ThmKzEumv9vvuGWTgJBhPFwvcC4Rc1bLaGv9qmUeEsGHodNTws",
  "key9": "5su1D7JbnkHqUWFpSqNDv2xom8r56iTX5kZ3hSYfAU5t5KvL3LS3nFHnrU5L2YiCvKKbhthhmfYVtWU8tkCYCs3h",
  "key10": "34BDt6EJUmzHHKpyFKyqJwnDhwRVQAwk35Bxoh9LWA467Efbre4jdEwxFVntkAWzAFnm8GtmsqcE3EWWNCdcdPWw",
  "key11": "32QfDJwEdp6aintCp3ytBFwaBqg9SGmZfBRRbJiyoGwz27FrSJhuNvdXQmMLqs8mT1bfrKLRJRWaK5w2KgjDDS7f",
  "key12": "3RUg1zLJQDBdYDzGQ5mN3U9WHghdwkmA6mUATPzRt5t7gbqqrBs9fpKXHB68knKNLfiCDV7QGg32FEkRTdJthkoh",
  "key13": "vzg9cris4ntw9fiEMN3QkjLHkkPFLSbe96jwa6YUr97uaCa74Ffqa4AzBP6uVfgLS8Ua9ZVxipKCYbR1mBNUwTS",
  "key14": "3juqby3tWxL6digdAmFm14zWf15s2ZS5wfAPa63PqnDbkEXVzEZNurAYjswuSfquixWZoCZxzPDe4FSCtcyoaSeL",
  "key15": "2pUcV1L1xPAePkxi941jQNdc4aebb3gDXfhcV8AHxa5yURoDiWooh3v1uDjEHz1tVNPjaYTBhtpi5GXEuCCRRD6w",
  "key16": "5iV2Bh8PTR6Uss4Wxjt9y1zW5dsopEf7GoRJMF4JPHAj3G8TtQ2MkMgrUjYKcoUjvM1nB4L6FrLWVRM4hLoz5XGq",
  "key17": "VneBiUYrEhW6KG4RaqgBL2Rbi51xREBJmLyWZf1zcDcScHsKWLEthEnivHyApVVySsP8kqqWBELYwtioR2d1yVV",
  "key18": "2AP5YcbHpVsQ9uNbBdbPhe9qDYvPNbPeZtnuwwoeJDroa6a5UozetKrN6SSEqYCf3kL7KQnDTdCSHnjJhtmoQZLa",
  "key19": "Rd2WB1rYArXZrFpwjkZ24nT1vu2C7Csxq8euiu44xvL4GUN4nhv7pkURPWrbXYaQ5pFVQ53nuyzXbR8mrLKTHMz",
  "key20": "pGVZbfm5WQpve4qA2fLUL6XmQsJmgwJ9HAvcAbwP7g5gNYrsJD5S5aEWKonhnWk9wc718ArnK3iVKQEor9x88Bd",
  "key21": "5FBp3ZNr1DHyy1xZazwABzrJMpoeMBcoyEVp5aD8MNswNQ77Muguxc4HgwEPioJbkSD7ThoJddqwY8vrhdobG2ce",
  "key22": "CuY8jSP7tfN8E6LuqgqnAWUiSkbt3KhYtMP7Yznr8bsJCuzvLbQbjzxSPoxksUU8UyiQX88KickqsEkmLPQydT4",
  "key23": "59Spd2MHs9chMcSg8gqMbp9hg4BCqAs9XNxfLw5p7AmJ8awcUvjqKLCRZ25bfrKtSzpYQw7hDhV7FNqKXcHacRME",
  "key24": "3mchguHtnM4xct8x3F1iu8urbBx2zMKp6gm2xmF6WG1MWCZWtetpM4zXw5F8Hr2Rf6VGjdzzeu2UJienNb286ff3",
  "key25": "2E7E9SbjbXkxegytcR4QD1tsKHSzSYwQKzpSBuUL7aQvAg1SH2aQTE6UZggmDtq6WrD4VRGz6ySW2Q2bzHexZH2Y",
  "key26": "pRuPCSmxgXmsAaJs7B62hg1bi39KXTzqWHdDhmCXk7YF7BCW3y8FtTa2FfuJw48Grmb2CJwQv7BHRV1jYRoh56P",
  "key27": "3Lu1tnoXFnvPLwUF7sbSwtwiSLUrX9V4MSWr6o6gafsWcr9CLZKBrfmvA4np7pvU8whNgGy1XERiDF3vXGZc6qXm",
  "key28": "Em4U6TrsGdSRvroL7826Vo87zd5JnMKzPNTczXgZaQ5vqGkod9B2cdNiuoYxrRBK9CvwdR9xtsQVhuXJjtyccjN",
  "key29": "Ck1CByxXmSxWV1Mwkt5duz23ww6DKaQj5KVkxXgu31XKRQ9VRdS9LoN9Pr6XEbeJxs3qijUfcynHBizkkCApf7b",
  "key30": "3gW23SfzkVNcUE8JQHbrouf1cckKVWPsUk3u5ha3DH4sf4fVMmTCydiaNVKfrGycAYdW6PndgabKGQv7BK3bDqmX",
  "key31": "SSUtZRzLxwZy9pBfL9eBUCz7JxB5FcBZV5DDsVfstPHCuue39LJAsqbUYHrzzanCoEfh1UuRq9d3TaqnvAwjycU",
  "key32": "5A9TndmXUWMiiGp2MaMN7oZkwDLKq7L8TvLyYv68Q4JUpQit54YSgsEiCBjjk6XY9HprcSPMs5Ajg1cFU8pC9wgv",
  "key33": "2QEgAWY8XRyPR5EZbc5BfwDX2qPNwgejuJXD56KtRKr9obJxT91Nf8NAyaxGYdP8rMc2XdhE7YqPxDxkmM2K9CqC",
  "key34": "3F7rXpwMtUbsBBA8tAsCv1SbJaZotUJPY3riPqu9DwP6UUM8z762UWooDt1f47kg2JKsoDuP19a6eDqYBTsiSXDF",
  "key35": "3N9MaUSaiZKDYdU165PEpfYaVzA5PxyEbL7DmudFnTegs4Z9M4cYUki3ZcdHXC6GHtUWRJDqhBobZfnV3BJqHJf9",
  "key36": "2s1GKAmqBtTEtrx6vDbKaKUemkMky6FAyRF3XiovW2vQkSFj4YRp7tPWmJ9EJ2gadZWkocHB6LX5vbTtmu5kcHEz",
  "key37": "Rj9G2N9dkGYMdK3kkigBAimj5tdDgrCJWR5BFR3KK2doXPaVHRDC7utKWhXH9KuuEzBoiQ92ZyBRPtrCQ8aNLGR",
  "key38": "2P9rKdPBn26n9fv4vLmJi8wr5DSnto81ZSHigsyXqj1J5cVq7LqosjsZBRVNrJdLVQ9vPdVUMHCa6LqzdJxSbRgR",
  "key39": "4EC5pos8ihVxbTTkXfyUzn5dbtpSSf1YLWxtQCzBwd3TGbWFG5hRz6g4FZbGt5znJwrGdwDx9jm6sJJ6N2xSxy4K",
  "key40": "Rv619FQoBCh4RVQTnUa4bQ61vbnCrppzjHCRRjei3yZc8NyHb4HB8sKx98pQUBk3ZZ6YbXiwm5BWn8FEfr5oQBU",
  "key41": "3x3kHenjiiGJ93TVKsbW9TjMVVwSe556FcUfJRT5g6UDMJy59iAjx3FMWBWtesH313Fvu9J8sdTeB93wPK4qLjNN",
  "key42": "3chbJDpUya6MFLj8Ruhn7dkrQkciANeDCqfxnVTMqCCesdhp68JHo9fA8MwXqpMD9D82mh56YQW9kXMKhz7Qw1JL",
  "key43": "4K4Wd9PsxePPjzyQL7p15jyTHegpazbmdEop2xYxsN7U8QjTyn3AZcbHPcLxnrFP9XMuQJQP8nur5XsvsU9Kdt9Y",
  "key44": "4WrhzyisZEkgxGA7h5QVncJgJTfGufGR8yrZrjCTYhb9aPjWwupnbrwPKoZwVEjvFizQwa29PYDNe1XxME89mbnZ",
  "key45": "2m4BBfhKBgJDPNmKPccQAiDK1KCX5GYda7CwtKZz34CgzMUAqRu53KgAJn4bWxVw2oSmDYtTRXyHrCKJnL4sE7u2",
  "key46": "Y9qQKeFyxjVLPDkauzjj9p3Zyco9jq4c6S5mRsa7BtytrEnPT1vPW1fXcxAf6syNRXFLoQJzHkkywy9kD6erhgK",
  "key47": "5EQCnu9rcBGVfjsbuwj4AAiPHi5wdL2K4J9h8zcfbCmShmajmTdLnjw1fYuWTeCuhaZyq7F6wZ38j3DfJRVqgcu3",
  "key48": "5uESBHUc5pcZ9YGEHpECq6JTFXfCFZxgJPXvDTrAXxeysi3vYbTvRT5dpr4FCdB7svNduXJnkwfKanVLjjA3iPMk",
  "key49": "32QNusx2bFXA8KiZtHsCJNALFXGLGqM66zGA5bmHeaVowZoXNKKpnuiaDcDwQYp5uRRWrMhFyRgciLnYhQyjF9Ti"
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
