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
    "24os9dvhcAGQpdmpnGBPtrn7uEJzqunsbUc1s1VMPGcivGWG3HmjCeCp4o48zjuvA1kkLLBJd9eapZyNGKECvYKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hem6B4vRpjEWkNJ79LoRY7YYckuv2xDGsGe7T8iTt5kC4TWdjb9uAsCaXh89FHUapoDA3Wo4berEYrZ9BBBbJuH",
  "key1": "2W4T8L4vSWGkSgaNQYnRWWejis1xa61dSa9dzhTvMGZTfvd52LD8ntYkLEbdt6yKsBtAnT8tiA2RjXz4ri2WSaKp",
  "key2": "5PKvWFAN35Rg8pJfmKp4wjLLzmgL2HRVSpnXiJA51sgRvBUGfisK2FybAUF2M5tdySoTAAyzEV8jcbrqzr6sZNYm",
  "key3": "4cdbmiszXfurKxF98SwYYKrbuLuFc3eZCZPStDmjhGKQj5ecXX9Aq8LeHtVjiWAVHsMxjmxV9aPyW7xJB73RedYN",
  "key4": "614roh4V6H4CCrxGXrouUGPeWkkqmreYyc5vqr1d6PzMjodZW51ymgYc3My9JeqP2WFjoGuaopfLUoWNj4SU9kZf",
  "key5": "5m9dRy18YxjQR4ckjSoxEr5t63q3JWaVrYAknrB8YawsDMbRNUZzZgLZiEomsQnJY6cyqbeJ1La2SVzKsr8EmNJD",
  "key6": "5FRdqmemdJts2t5vPQktptKu3oqMCevrkDHy3nMHRWVvKUiHboxSASGDGMmkC7BVcdYM6GoFv57fgYSbkZk6RvGx",
  "key7": "SVD9Ago2RaA4ZuYRdE34z2FUDoWR6aQDVMLx4fUEeBJ3eMSu69bvyYwVjGCg27r9TbFmUdorhzcenMoeYth6q4J",
  "key8": "4qHs6qnt4emzj1xKruoFNK313UBaD4A2h6wRSsnUpJcNdenEPrh9qi7NCyPAXpjVzPUEPi6w2JiqqgHbQCuRWYuv",
  "key9": "4dnCsebc9x3txQNdwYDD3QCvWYQVYyDpE1J7M5HAcEwtKuNvjxwAJ6fVv7qPg9Jcde6vfhGgecDFA5KhUcD4cWSS",
  "key10": "2HnVSLgHPaUfx54EuzVMovgcAxv5xy9eFnkLmvdyph8GSiBpcxq4632agACc97vLBCz5GDp1pGoVjVStCqQCdsDz",
  "key11": "4yhXYcY537GkiknQA3sswV27eiex2U4JJFg8cPNEtYCCKtnj95wEGjFCjor5maZjjsdH8HAmTRyUZEc6hUUa6qHM",
  "key12": "5jYJP5S8UXn1P1h6z6BAUrEypnFesTrQA7QUY7y5ouMiXwEhQb95CbciDZEn74kguKAWFTqrSQPDb9TvuWCXkkGM",
  "key13": "3Z8km6raama8LQ7bPSF3HbnotDZskhemuLNEqpRyRcK4mmQkpSm9Y7FQhpYvpHttTajBYkmARXqUkean8rGhamk7",
  "key14": "oKobYhbNRxwRRLRArRQHbWx9YAvYZrXsiNc731AJLkU6egNCAWCUbNjqAFTicBRg6VZd2iNgTGm17To6o4oehZS",
  "key15": "3g6wMQxnURAQi4omzZHzNuqSKpvGhDZSy4BXtijLffnY35pyexQCc1dw2wN3yJJsbCTouBWfnizFvmUTnBUEgeUD",
  "key16": "32GneVuQEFTHLCtcwtrBGERCHZBAWJx7eWPnU7EviKAsYEnzPLRecQo5zpuVG3z2S8ZuuvZUdT8zPxkgAPGzmREf",
  "key17": "5PqtvMBaYngR8A7wyDjmQuXnkda1FxZgTbPtHxzkk5pW8mSCk4ZQCZKmtL5RCd4aUWeHbLyUe37BuMwCoirzjebW",
  "key18": "2TUXSYNDHfh8Tekq6ECj2QD29yEUSmXpE3zQDXh1uqprk7sqBGgJyjGHssX9fBXLKz7CMLb3iRmYaSAbAChadRwC",
  "key19": "5RbqepB7GcNTurqde2XpkaXxsDXB2APrCaubT1Ubhx5FNdF5uhCdv4SdZHmNtkdhGYDevtSWoD3a1RHgMUWzU2ZX",
  "key20": "3oY3ZN3U4RjXWUqSmrqX8CFxL7JkKbvGtPHtjK5ZCdAi9ZcWuj4oEXmZh1FAUDv4BYeVW7Sqfw7WmWiYqgmCR7mG",
  "key21": "22zgVCJAV6Erz5XNrhNbcMt5JiF7gz4951mshJrM9Lg8Qk6We3Eb6Ai2ybSfn1zK4cMjbQNGNWLz2vYKxaes1xyz",
  "key22": "31HvRM1TfttNAj9HxQCX6AtHS4yUGqbKfMp3yF82q3BPf1xb5nbwevsd76G2TPijN3QLL28bJyiTr5L6vcR9rs1P",
  "key23": "4TJoik3SGh2ESeb81g62nrAd9i4vijnS4N4ovFLFqKfisGngcFx1o5x5ReEBxqYahxu8QL6q2yBQn6fe4cKsJiKV",
  "key24": "GfJXUTRxxbaRtSL9GaW2SGBnBtwxzF3sMGww2jM3bJgs6h5S7ipkq5KbauXUgA3xw5knA2ZmmQ33FQxT8Q2SJ3Y",
  "key25": "VVCygK4ekaG9UCs1LtrqiviQQV1NgvDifWjauhTejKL5pJGDc1S1PtQTrkTNS7rVNKwkuHPMpHduHedBJLx6TTw",
  "key26": "25fCgN7cQu4ytFfmeXMArNg1nRoACfhNRvGEjuqG4z7j9zGgrj5R1QftyRvMPLz2fWFqPEEkzYUicNYncS4QW4Qq",
  "key27": "2VQMiBSKX6CQFfBpaM9eMASGtY5nyyyvVFG4ZCYWzMJdyT2Mdi9SujuFN8ueHMgioQi1WjW9xqKgkuf7n7qiefoF",
  "key28": "5LPoeCMvNowJ1bGFzGnNDMaCsS1kM9Y1PbMnV1bvS49xRPWiSxPNmVTXVUUXzKSfjkbBDDM5jTngrKniiqFTJoFK",
  "key29": "58yctSvo7MYnmfZbdD9va9MJFRTcPPKDGj6RKjE6XVzPVf8Nqz6Du6JbBJn2Qebi79HpTrrK2eohDYA8jaFpJ1Ku",
  "key30": "3ueZojCRAwqq4poJaUXyAUijM1DdR9TVtFJ1fu9QiREoYns25Ai67XZPEU1xbFj51koHUGC1dnzBMe3XHpktTfoW",
  "key31": "4uCi74Fj57f8LFAEqKx8recKJeWyPs8bkVWSA32MPJPWdNhMaqsT9pk6koUkwVmCUpGskVR8ZPoXfmZyCsUDzRDR",
  "key32": "2RCtorfUf25EkjaPepnnVXBT6RsynDhcBXSj11AjZiF4z6nwTm6BHtfbi1EWGtVUDD4nSDA1ScM29C9cxZwtidyn",
  "key33": "3i3ra31ZFkDgGR79Cyv6apwRtVqABUgcb8Ew5ehdxBKMWCKRgCuEW9dF2QvpoQJ6vEgxaZ4dqTUMFTuihTw85W4b",
  "key34": "2qnA7tyeXw9zaFhDmLZXq4dbHtmxSiKNuy7WFR78Q9TEsQqe7cMW72ikSmCBqsmGdJ5NQRd55JG3v721cfbhTqqY",
  "key35": "32JApiqTqkzTVK7LrJHbJpYvRw8g9WsvE84xWR3cN2jp3N9FiMkUnShK1cpssyRptiVVHQLoPadATcynsvcBMu2k",
  "key36": "3aTdPrkhkbaFouhbXvPzYPnCMHoHaZNB46FWi1U7Px2sbEhAkfm423jiFBAwBJCKLhvicLepG7mPmACZ2SqQ9WV8",
  "key37": "2exRpPDEJjauzthffgyUVkj8RBte49HYXNz6wQCYTwGCmqYFKjN7745pYkxJ5o2uth7D3FUnsrDqofxjFVnMRn9c",
  "key38": "42JBhWpgXzrevGYVGAF6wUhn18TPr8dCGb1ftW9YDsTf4KCx2EGYFSTp6CxtZgeFzt4i4URJSFZxurW3K66M41cT",
  "key39": "5SC3cLS2SDYp1Q4LACRVztMEqoBsSwx39NmgTKFonsVVHr1n2ahCMGWUQqgUk3uaev1SZ87jMuRXTAPiWnkfcc71",
  "key40": "MpXhd5nB1gHikYCccxqN9ewL8BvAXnWRGbycYXEDtT7ZVAGUh3BtPKiXCdV9yJUYsqkA18nQaa1RpRBH5NM87A4",
  "key41": "5G2LnTDzzNWYcdtsn81jWGT6AS7tL141SZk3N5yEHS15F9rKb6RKnpzT151vyHQMEUau5BkEbVQYG3QawCTBVpVU",
  "key42": "Qk1jMSdvpFvWm7cffPqkD3HMheCAqTG95zE3bEu7S39LxtZ5WdztfMdiXaQasEAiPvTBoTkJ2qGkCEtu9iNJ113",
  "key43": "2u7vqhRRr1Fy52NNd5ajngG6KZrcNbob5nG9fqiyg6jAMSqGQQa8YjzKVTUUFqcHrYHxCKr2gFt4By6SnQxR5hqR",
  "key44": "5heHKfoBuBCj48egcsRxYkPWYiPJAYAw2asiwFoVopeQ4g7QpXTTjhckNncDUYvdCnzs6fbESPB4oKzFysj81KKA",
  "key45": "6LB8f7ZH2LRS1i8osM3hhLaporad8hmjAN8RW3fxBNV6Aj4DkWGeBQbVd5nx8XoVQX7V8knbuDw6MMsBNzNvGGK",
  "key46": "92GQioQrZEDTEbgCzU5xQkZMnY3ddyUxssCFyy9Aivdsjqhkb7EyjFrgRyqtrtWTEEgcdvzLPPvUaPZi6JBSCxa",
  "key47": "4pLN72sYcoARgGrAzApM8dHdUsrxbcaHPJiQfod2wDN41gpkQMbDzRhZmt8Dvg4Nf9Tw85s6e3Zgno7Uwmi2bGpj"
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
