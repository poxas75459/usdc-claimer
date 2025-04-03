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
    "4Uywn4xWktWLeEJGGpghCaivujnsZ8BMmHT1kBGi8494ymSuSJSS6FSuzi5AXts6asRSkJRwUxsoVo7GoSMa1yhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1sSh5nGnkQo5FtFDJD422mVAH822ajTJimYfBZMUTnnE8VUoBRTtietLUNxVSyb8Zd9gAhpaE6nLkgZTzi9qjR",
  "key1": "2RVhhQ4Uc9BDQwEj7h56kFJAG5iNB4mjKFxxE1B8fMY1wcaYauY7vCEP6sLBjFqMVoPW9pHWxqGGueMTMbrH24Wu",
  "key2": "3aP923CJMSuRzTuETUsaCoB37JjDwSfpfMRGFCZf3bRkyjVb3qw4ff9i1c2YoQT1NQDkA9SteYjmZXHFjMjAgdz9",
  "key3": "41EQAxhysXhFCnM19K7ZAm9X4hycG6YTwij32893zbuZfoqxiAS4Weh9awkTcifqA5XdJjMtFp6UsFSX5fa3G8Ln",
  "key4": "4Apmn89aq3SiWFhWHYnsxsY4eGNeGJzASupvvkP9STabMNB6cFcksnksW26QXrB83diaJuFwQgmuDhtvJEXuT7Ai",
  "key5": "5p5yz7Vm4cqDfF1QWAk1V2Zo8jUu6sP67aF2S2tpk9dAYrxD1cn8RPe97CSe2WW2EJ35dEocoMiS8b9F3A1r4FSi",
  "key6": "sdyRK9JGvu8w3dRV9TXtNrcXzy8HwN2tsNgtHgbW8eRNLQkNSCBjMNwfvs3GMTegsdq6Qj4zfjvA6QsRtPuaUWQ",
  "key7": "4M8gTzKTyRoGvHrCbqKDprvn3767cZnXTkN9uHJ5Nfi4VDZ9Vx47JQ5DpLFd9Fx7gKXdv9b755xRPTZHsvu4rZQe",
  "key8": "4Vp3yFchXNYuYCtZDETizDZ2dc5Sd7Cw15CEnM8qg5uHsmgXFrFHw4vT2JwHmMg9GhZPp1N3otdF8rdQBjP4UarV",
  "key9": "34G1LkGhqdTARr95R13Cub11kguhj7ezdgzqe45nB9TzpzzzQCAr1G2rty2yCBvGYf3jMuFFjeiM6TEvtGhHoScK",
  "key10": "4gcz5yHTKR7U2dcTYKteCTLdwuVePFL5R8oQoZWceupLiQVzjcDdFSfvqDv4ymXUcnzcDQEYT72JwSH7BVtTunJ",
  "key11": "2fuvWSirXz9QAnPmvWvJ5ptLZTHgGFvhKsj24cnoaZDnGSN7xCYpemBKNN4s1Wda9i3x5WG9ZY9nvJqKLbZVq81w",
  "key12": "AtKoQf9kRAGyGxNPLAYc1fwTLT7kcVkRap99oeK3G9fkFqGJqPzRFoAS3MdqbotJhLpeLSkTU9NDvCDP8fPGWgQ",
  "key13": "5h5BtaEB4duF4mAswqvm4326GDhRxhsPxAT21uEwa1wv9CGHqmtMPaBnU7ZsvaYHTtLBWNBCLNGTHgQeprw9e1he",
  "key14": "5BNbYW8FXiFKtrjVFaDaHniUQHfAByVDjSyUe9EqmdbxqJRmHgJptCFsg7Bojz2SLEFaawiedRFS6Q73i5V1vWue",
  "key15": "2tqwhyYDkHHTHSinvUe9GjVZbVhiqFUHxpceur3wnxPQ6r6v5CwMtkydnMsdJePZ2WHMMZZdXXPemLuyboAFsFun",
  "key16": "5WDo451cUQBw4b9MbPFk6fkzNZA9a8gQkVx41kKj8p7gEoEeB3Uq42HQqxAzBx8Hrpyr4sadqG2t3gS7MsaJMSP3",
  "key17": "x1n423u3jgfU1LVnMHoUEtUtxqGE7jnzWgXekbHcoCQwSpZ6naLg5p9hZF3tQoZLBZZWcCwtHUZbewiYWdsoYzs",
  "key18": "4znhpzwSa2BJtRsdGnNEniC6zYbHrwDUxgNCM2Nb3BMHDiXAcR1sYQtFkBokJ6s9r6pp3LvLoduGhNWPBqdYWunn",
  "key19": "21CyFWBzVA8P3T8wDJESZzarrCGdx1bVxauojT7Qa2CzeFTcCXTZLhBHv5AkpMjMg7jGeV1uygVy8mVtK3Jt6fkH",
  "key20": "4MRqWtJEeGdL2vRLsFYKEzwH8xpqyq6R9Sv3cCfL558E3ob4irWjCqeQ1LojMVTXDMgRLRW9Q3QCHMfdhLgXYnuR",
  "key21": "2DBcPGMdm5aDWM5FBNEt3oNnaBnAgJ78GEv4EAzbFwaNJgtrKTy6Y21WFy2dwb9dVjUb7Xri7o5E1bCt5RW9pGj3",
  "key22": "2MgtrCURKBsmLhtxWHmADGz46mUUsQk3dHwUzZQyFzDgGt6AffNiFBqqMQWFkcSnLHGUvW84JZoZczhbGtd4Zw29",
  "key23": "41Va8jAjugKMNgrjejwSW1bfHCZasc1FhaBWgg32PNBSsZHxSXSLUmNQ1pVfrU3kjG96TKtnrFXag9JwkYFSH96h",
  "key24": "35oSTRABTdimyQyAjGwo2LKKgJHiNeG2yk91LNCwe7UpuYYKDTPNxSx5qBQ4MZq4pKAP3CZ4TECJAA7XLxLVLETt",
  "key25": "2f3KJVvi4toiANK6qdwSM2MNt551teSbyScCDM2YAcWuKsguMt2SN7VpNSAPnHRwc7QTjnN4xaQ9AsKS71BaU3XW",
  "key26": "4Z9V5heP7YeShHcA22T2mjoSS2oUFusCbPQd3LNgvrBmZM6z29nWGtQXvQGTGsj43X4wFbfXtzGT5oFVoQJgkZ4d",
  "key27": "3XSYpJWfy4HcbgSPUCfmMCCh8zWaWqKTEz9Vg6FcK86hojN7W1ZpzAiDuFPJpR1WdNSPXeyrsneZr1NZM57ePPbi",
  "key28": "26mzepTHMr8wx72Ayq36FtgDZAw4w7oqmMCGXw42Zg8npjfkjEUTzRcNaVBDeSNWeMvjKQX5rnazmLnPdj3x63s5",
  "key29": "6qKmQoqvu8xWypywYQzvhMvE6yfUL96FRiVXVcuZdevc7N9YALwFuuGoA351oa9TSzcaoAd2PVDFq1LSgfJ9wFy",
  "key30": "31FewxdqNRUA2o5vNGXP5iGURfQUj1bsJwoK51eTK6xw5AJjFdetrJN6d77xtrZ5zFmeDsUX5ybrkLUmg7vHfUix",
  "key31": "3XifsP7EbdVBJAmmrMHDqbUeGQ1tmZdf8DBTAvyEquVj88x1mHRJymDkyTR2Rv8SmCVCvLtZ2xoHompnam3BwHgt",
  "key32": "611BVFV6aPzBhQdGekMMivW5ncRTRNKmwQVVasEzUJ2EqKAYbvR2z6AXmWmgg7viQrjk9Bbk9tu58UKMu8CAjf9v",
  "key33": "2XN8wUuY6ZYozdXo6Ypnj4hahLy6NdEAWdzHWUXZgVK3d8jynPqxwELV31wc2G5gakHkdYLgv7KNTt2c7fQXeFCy",
  "key34": "2rjqcPmWg9LjkqsgbDYj6zVcsZrKDGe12VVf5HHvHTBgZQdAT5QqduvMKVvkZKhJQTfpMY11v4i1mS3AsByenD8o",
  "key35": "2CRdwq8a6F2sk2PR4Pg9uegZKBdvrHNnbAJCkFuBihyQAhsUEHZixHS9GRms1sSthmBAcAmWaLHS5SoPzjRqUNw9",
  "key36": "5b6UuUrc5jttzqS7LzhwfgknW8EtgeEQ5F32n8wYDAF8BA5L7pLx7RhHkVYk1LyzeG71qBa2At6pGk2CST1t7DKs",
  "key37": "381rJJf8mBXphXTojNbGXzxTaXVyeYzSfdHDVgLxuS1na8BQhmyK6g7JXGXBdy3i5DeTkHAGrGRhJhAh37akvkJ4",
  "key38": "4P3CwM9NkRTwrXmCJkPwJCSWGkXL2Jgqx9oeMBUsP9hCR11jGyrePr8zLj39zgQYFBKQdLV1AQQGxjXY3Exzsgtf",
  "key39": "FasdGGx2Z56MNrNv4LCkDUbrsHu2bukecMpa5ULKarJ4wpBZVfpYGiiFfip9ergBns17T7czL76xnnf3rAcg2Cq"
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
