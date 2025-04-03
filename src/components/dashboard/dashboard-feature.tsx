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
    "2KyQTYbP5hxEdrw4nzzgUh8Zy4JWTP1n7hdzVG2uLUpJ6jYrDauXBU3dT6woF1BaxcaUXQPZ8fXJXdCRubadTpri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyBTd47kroSfagLSCXGo1kfrvSCRoF1Dht4iq6i9xrHy4wrbm26Avx1hysjXft3XgHtFcsSjBAichTvVKW7DXSX",
  "key1": "gcdpRAGxjcDVLq2GgMeaZcoyFtzQdC8itqEkVZ2JQrd51EZPzY66boZKPizKCMuCmPNJEZ2gkscpq6oXukRXUvg",
  "key2": "3Xesci4N8rcUKs1GeK9cGULGciZEMFc69ASjXpcsgtBVPx7EFdGymvQPJkxx4Efz3cmZKRfvAThYgTLWiTqwcN9Z",
  "key3": "5va6fPQ2Qq15yyNk6rk2i2aFE1ZHV9QLKW1tVHYMz3hPD7ux8P1LdXQthYW34jhQx14GJdokEPgtefyToABruWij",
  "key4": "2uWkq5vyepGTs9iSauMugtCeinvzM7ZD6Lg3gt32srPNudatf7bf1QKFiwQhZVqe7A4HdaqfjsCRGzKqfCVdkNP8",
  "key5": "4CEN5yeQgt3kTD55FDPhWcJjc7ftKStSHWe65LmdSJzDCBXDTWqYh4Nj5cV8AQAWwahnXG4Zk9baBCTUKG42Rt99",
  "key6": "5w2hiHRGRfibJCDDHX3dSMFDGAiYPxZ8M9wR4ykMMksPdnqECP8tB4pyn5hasgSD6gz9RKnpiCWYn8H3eCwhEGXE",
  "key7": "5w9QrEKtYZT9mdW9cP7e7rFMDcH2VScDZDkjNXfJYUmsERBExHeRhY51H13K3etNuaxscNkY6bZx4ALEN1Uru9PX",
  "key8": "zUDo5vHzx98FGitRyjGqxrdVrbVJoGgSQg8uzFN3CEMepBzUmLw7ZwcuvKyS41PEKdZyAVPGpyhx427Zccys2cR",
  "key9": "DQAAYeJkB8kYSPe7N5NFYQTt2YA5V9tJA5JJiT7isnLjyzSyfQG8XkqTCwphhZ9mdQ5BJ5WeMjeXmN9yhtKhrCk",
  "key10": "2Jh7TZXoytt8Q8H86uJtgeb3n79wpyCYv4r2Ahtch1KguxWKDwC4Qygtz7ADksLBni3QkAmBdGdnBV5K6SBE3o7a",
  "key11": "2EzkBagEyJ7dtU3WsroQhVfLgN3LKYr1SJW2FKteLkcyGhz9HbELDeTWR4nct6Y8oRSBVCizx5KPoQzr6rbkCFgv",
  "key12": "3mDkwi9vppQcwQUVhe7k5N28bXy43C1T7zdr9PtGdHLGWe1cSDcg9sSF7qpeuXs5dq6P7mLoBWKXVG5yX744qzru",
  "key13": "4vSzHuedBYehyf4bj6eirkdscvwrCyxS6Yh4rFd6CScNhjdw2BpJTiFYQxcFoTVdfye5n1iAFwyY86iQpAbDz5BC",
  "key14": "2DokHTNj7GyTnVdNpshpqmP8bL1EbKRDQUKMFwVzk7JYbFDrPdoWA3RmAJ7mJ5PE7ie1aukjPDeYiBFES1syQBKs",
  "key15": "3CwS28HPtKkWWSzpEFM8SxHisWJmsyRVcCJMy8g2ffYWiMgv3LmmKmTCjVANVxE6ePHtjAhBy9sKXFLzjPjr9VqE",
  "key16": "3hGe1vifTqSM7EzXpkDtyHjfoLVgid3BhWcnFqWkmMC1wM1Y6UF5xw5nBqneaffdSD92o8PnXDy4yTTYVr2CNPYb",
  "key17": "55G658BUfDQm9m4U5NvsWpvMkkgEpbN8un9n4wwCXk44p1Njda3UB5AG9Mmr6ECxjWC9NL75pVrdVXFVEB4h6BaR",
  "key18": "4THpSQh1JRBcaBBMLxVTjR43J4GqCJnXL9zkSbw3215RWbvxz15uQ3s2tUEGnYBkuVXeyS75NkFASBECgnMXLRtv",
  "key19": "2GKbbztnsixHuXVnUX3GXcw7wQdMkoLKtUdHHhShvPHdZEXzAciJh7ZxWbvsCaSTZvd5ecJ9tWKHxFmBfb82xiJn",
  "key20": "3qc9mwVtB5RxJN3foBuynN5wJVTcTwiRAKREP6EQsAvbWgRxVvhtfH656EuLNTFmdL94hoYJC9bB3dxgJaJUZXc4",
  "key21": "5YYrAAw5vCwCCRbbZvuoRCBdA38YktPzBN4XE3XSdd2HhUcamUVZtQZL42vBBWLMJb5NaJdyV3sCRidpKcQiFYjD",
  "key22": "EiaWcy7Tyc6Ui1PNaKkd3VjueVHhQvfX1oSA8mH9Q2yYjrrGWFY2wHATT3ktH8S9GuLttWNp2ipqu5hpP2WaZ4A",
  "key23": "3mKqRtRb5Bwv5AnTS2ejMfqCFZDqGZidDo1fervX9J1Vw5g1BuVfA8x7owCJCw2R9Z4Ue73PhdJoPxU8rwLapUER",
  "key24": "3BMzUrAdoPpSzjVR156EsxcA2fw8YjvxrRPcjrnkR21T16rbYf1vZ5Xy2zSAbjMoFsgXTdNPgKMKfHiHrDNf61AE",
  "key25": "2qSTWUXF39q2g8ZTDVvWfjDbU7iZf9mKNzC3ULspZ9qRKQyBnfy5JkwhiYUoni4LGxwCt3zY9Nhz427vaa5esWp8",
  "key26": "4R6BWweAPkEeW66AJnY8MJQ8eqBCjXvSJ466eSuqi1ofHjqR3bEX3VvTvWvLn9hPNwK36e16LpjFzBtJc19iDrvK",
  "key27": "vEiB4xJijx9HLF8UZ2s6ontpUvVtsPJyDhjKauyoDPfYGbYWaoVaZzr1RLHtpo2dHTZcENuuUcyHfPm4ZZyDNZN",
  "key28": "2mNdfGeq6HzTJPbPXv2hD36CtUDkmGckpmhw3LzBCrZEhnvJw6KZXyhbjBDU4dRcQ2FdMjPXrhjqSU9NxbvmSuXq",
  "key29": "5paT6vCoN8xNhnaKLNKMm3bJ6nPN8aZgxeFq48f6zqH8KRg5FQKRMBTPZQm8kNibazq63XTkgPvxK6FMY67p2Utz",
  "key30": "3pUzGwYBWzmFNGuJCyzkoqxti2YTuZ6rAVTBDhHSoF6cUfmeTr7UfzgiEi8hfrMvC72hxBrm2C9yJgaYZzuoFwiZ",
  "key31": "2LSSQjxZpTSAi9KqRoHKpwTg73UHfkHFYvoTizFkiDRYqpBGChGWVwWi8mdpDxCdwUo99tVjs7GH7Asa5LLPo6H1",
  "key32": "3RcdsSgk63AA7FCqykQ4zKTQgvnUavxR9mGre6DWj7AppXygK3SgndnPEsa74qC3fPitW1KGgxk43dPsdRee2YKB",
  "key33": "31S8ANrHGoF8JqANbgquXDeDw6D3JMV9LPvXEo3SFqHxBYELvZDBLkJMPW1k3v2Xs4PYLXqCmSuT2JG6nQsKZ2Gg",
  "key34": "5Yo394dpbA18oQkmmnrU19WpChGGN7tyej3tEJsrmns35tZjoUBFKaWVhSczZfHCC6U4ztrq6RHYwU3ZD2nN34r9",
  "key35": "3ex5oQ3sePDe5QmsNoH6FFB7hEGmHTZphHwYJpGNaLkkScSJm2uAvuZTi9nqBLtk37yVoABftewHtXAyRtvqRoyo",
  "key36": "2R6vtdd1XcAVEgfhQEaFfM7snfvRUutXNWjoMwRmYZgoKbyTy9HbW48rDki5PwXCjhNX3K53hQKoc64pbXeLQv8C",
  "key37": "5wrD9vzfy63NbzEigqtzeTACrTYqve9yR7t6vwGNGuE2ueRQGE3hvfptwp8sBHS5JWJrnjARFr3DmXdF3CrjHEvi",
  "key38": "JtLmSzcg6d8mYWXbnkc1L6ufazNUEiYVfvg6Xw738Es67BYYL9rnBVqA8EtGg44FSWVzTzbtTSC5VxSo6WEEhQN",
  "key39": "JRX23Bv8BuGiy4PzczLGqeGKbxykHoDu9FCNx45ULrbm1PrR8sCwRnYyDKPNSWsPBXAsznoB6SgALJeu2SMPRHK",
  "key40": "5ncdQepHtAi7kp7QeawqjFvreeJgmhPBAX7JypXg2JJJMLdrquG3XfhddU5K2WBxmj9jMhAgG6HBupkaCSzxTUbj",
  "key41": "V3LaHQDQRQJw7ELTQZhreK5yc4buZoVv5tAcrKMXrhrcN96z4GEAbcsGVCCvqY3C4hxhrn5XCHyt1NWnYFYkXz9",
  "key42": "mcUQqN7bjHrFt8fwciU5KRwm5kxMqFd3gtGssATtqKXYFnd5sKq7ep6qfsvqVfumkp161dDwNuZZ2fLm4CbHuYT"
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
