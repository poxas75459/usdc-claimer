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
    "4WPpLjTc8nDvYeeYH66TKsm4M9ABPcisH3VSnt5ZvjwPqpB43tQrG8y6kBqTaqmtEyaVVt4u2nmU2ZYTu6FCa8Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LqNKLuHjoWHJLuHrKNguDLz8bBkj6EuPUMC8EsUVz1v9vaJNUDZCVujrZwbi6MPqHnToawtxBiTmj6Ski5tUX6Y",
  "key1": "3LfDfJJDd484RbvDUBtQ6G4qtUhsThq7WP62V6toJ7cnSWiF1U1UUp6G6Ex8VEA26wAKGY85EqZg7y3EszNLxKG",
  "key2": "4tt3Rd2MbRjPocA8StPyUFLXA34hoPzzYjGMkutk1kGMtU2CCafqLaam81vJpmSNvm9y11rnRbk6kVGooZS3EGYR",
  "key3": "4GytbdvVhfw3yKQaburDw28LtYwao9tdacXthVn3nHzMxGms8HexNes9acfzV41wugLvTYPeWy4XSwE7qxG3Mtsk",
  "key4": "38DjnHN4P4hJtc9FovYb5fNmf7yuxPNg8ChRJSqBCDsGZUhtBJqSZCq6zpsZDJ1rRPWDcK2VmZBAc1n5vKiAEzhH",
  "key5": "VSiCZPyfcpfun2BPnowcytbSCEmNEuppWM5jCWs7LMBx3V7qxXSyyfjeAbwyfASEEorBiFgacv8nWUgUUAdwKL1",
  "key6": "2Jeocs2NdLmDSRiiq8C4vXU5ToJ9nzYDpFEQWVBy5bBfiZhwtqRmv379k4tCoY6iYVbEWXeFoNdWobNYt9aAPA2t",
  "key7": "37SwsA1gtXHXw4hwS4XBfiND798Ss2wLbWARVTW5MXWYEYq1kMB2jXmJGGpEr9ZtbSN4PQGpGEJJdCGeTj16tt5X",
  "key8": "6fmZPvvbWzmFRXccaWjg3Tz2UiZzGTN4rJLPrVrkgPthUG5uVUjKcS9JHeyXqzdBWmxhnVY4LTYjybNNnBZTkGd",
  "key9": "dZYwakjWnxA2gUNwrcsRBpC92KtYjvUAfQDSNQU2L7h4Dyw1nrRcc1KDYGxgX1LQGfpVSyR1pasPNMtpntGFwQJ",
  "key10": "Kg44EFENdEWugjYUjuHdWhXpZgRaZkzfTPrx952kbDyuVe45bGKjARt7K5CN3rim6kgFoQZxQJ24ru4S2B6kJiX",
  "key11": "4UK8vNKzdogvotA7hwxtM3UZNFTqG8f4W8Lx8ZopMC5RKLPMcjuape2ze7PAsMRy6h9gFVGTUCAPhNdvrHW4uxCH",
  "key12": "63VHq9xiHSaHGFgH7QPJ5yLcP1UqFWmGVcgjhr3LmVupjpBpBKv1oUVNwoqfKwaZdNjy97mTToYDCCFRozJRq7wD",
  "key13": "4NJ62jEePUZqRda7M1HpQQTd5GKgLrindA17NXE76QkXvAm5FvKidJrJhXtshKVKM3aceov8aH8LosHXKrgF1uC3",
  "key14": "4JpqX9F9DL7dYXdQQqCeWTStHgP21THwYF3e51eYrVZJzFUvVxQCDkhy5tfWc2rgCmLxLUVsNAkAmXfimyLACJYV",
  "key15": "5EznooJ5SCfaMmDEjsqCStV81J7XRmXqYEt23QDdYPY2ArmmezEAsLDAorxbJYJayBWCx1PQkXkoKXF59twNuVAx",
  "key16": "2cH8DZamTRHzR5VZtbHFC9G8WEojTmdZHQBH3psTZigQz4htgjNiispk9MigQxxrypGbMepzTSUfkTwomtN1BWx1",
  "key17": "5mSfTX52Hs5UdmWmWnj2LuDWR1fU4pSgRN9S4SieVR9KoRCBCP1E3Qf7j43anytzXJG85YLe9FuaAf1er46V31eh",
  "key18": "4HFKGqP8tDVqwuxJHQadhWb6jSutTPN45KXD2nAFWTTcp6HWGScGn6RF5RNueiKgKbUVefinUVMyUeurKwQoRrH9",
  "key19": "3a2cdfPUwK4XreBEoiducQew78suT8w4yntghPUnzbsrN82pHSVSMTbG6hhuUmMTnZodV4jbZrXAyjB1W44sVHSa",
  "key20": "2S8tAhRYvJFjhqhS72hWSCpKG1C4yqPzwqBdnNDn3h8tH73jsAUvMzXSyWKGdJTkLVG3bY3dMuapPxhmjGL1p29P",
  "key21": "2ZzzJuftdxfGEeANAYAjx4gMgPgHHnVxjjRxwMUJS3TjTrY3CHtug68CW7L3TLr93xdTpF39HtN9XZG71Z48fB9Q",
  "key22": "3Mf2kuJMwoVV1Ahj1dwgstuWP9u9dGLpSUdKVkwD9k7KBV4NLXKMbVs7KDbJcjURyWi28Tfdzidp6mEVNxoG17fX",
  "key23": "62j5jSZoAgWvb3kZ6tZC8zrFJZT3smqYPPUxpoyAZTr9fvhc4RSAxgBGi1SJNcoWP2ewjE3gAhSD2vHf2v5XVCux",
  "key24": "4g8qFopN6PXBvpkBEe3QRbmLFmWrE4Dw6f7p8WTSzWLBFDzA7x5wDdQks5anoFsLUuDCfxhEYksoBiZFjtCdpw13",
  "key25": "4Mbo7o8jgvsVNVRGmMQ73QnE24iU8tUESYzRamZ5yhJRFKommYbUx9KsFuwcfgCrZEeDPTzjxgByJdy1tSXarsMj",
  "key26": "4QKnCGGxEWAotzzt8r3ffaNVuKemv9HMRgnJTmcuCaaPaZRJyHbDgiqFHLeDarFh78HFfwWgd93MCkYMCoDVU1Ft",
  "key27": "3Ed64DGhhv2vFjxMJ3EYvQJkfZwsPWPdo7vfB2ZPU3t1UNfuVEuGc7LMqo64249a99ptj3AqGZBv8R1qNvFiXwc8",
  "key28": "HgyrucRrFaG9TU1jhqkrYo4ejdF4SbmmuTta9jkf8mo2ReN7uBziqis6rWu2T72zE6rf5x1AB93V45ACWabnkaF",
  "key29": "DHu91w8yWwVZTxp5LUuN8pT4zP5NDm2RHkTWo7saRCBiA6JYcFgLeiKKKQ3cfaZ5pA3eD1NKicztYppw45DxA4d",
  "key30": "4njBqe1MoTmPNLDk1Rv7ia2RswPCxoyUwunrpMMzm6BDzmMNbh3Pe8yqfUxZCwh9C5PKPEhA9JcxWxcHWitVCryB",
  "key31": "JLgKU4ZwuexEUSyjVXVAa6PFtD5kb2v38tovyGe1Fn93CfR7VMyad5CSpPDwWp7kar3m2mdovQanAt9QbeHS4kF",
  "key32": "3ha3BWih8DccXWsZyvUcgFaCs1XDTGtRfntzrzDDwVftHSwGXuXr9dhYTadzyjpsk7AQvbBosHN24192xt7FJqrC",
  "key33": "2o7hF1ZBqH8WGEtjPzuvA344ubLvLmZFe8i2PDi7LS2p6b6XswhwfzrKeknRWX86EDcvCnn9Zug8WrH1Gvzo8Yvk",
  "key34": "2ZBzTw1KCYEqgxYkBParhAkToxMTVm83o7PjaxChPUZ3MQMu3QG1uovjTe1ttg6iLWSHpu4MGpzEJKXfJXA26Brk",
  "key35": "5EvNUY6xZqomee6L5GSVfNnjB4ZQt3FQ63dmRtuMUerymJJ6V758RuAbKwVKqqripaJbYnLkRenz23UPuaKtoUUc",
  "key36": "3mprbRpCcHRF21Db6LzbEiEy8SssWVgy2KGaRECRR7tWhF57PYFr6zGfStuBCJmw1XSYJDVUYk1c2xVzzQBsQ3QS",
  "key37": "3aYKLxJen6Z8dKHyRtDaFhCqgCiwGR7kYVj5UaD3yrsfiXDvsbBgHmatdCrJgpDeF6Ef2PtHAwY8wKiBHUMngEJz",
  "key38": "3yzZ1EWQp1ScVU1WrmQcpPRoALobp7ZxmMnRhPFA2HWZgMKF7XjiM4F6bxWohVnS5TKCLGPQTewmkAcBbKKiNYuH",
  "key39": "53fyJRLs6Ax1nKDGVbRch6paFefXKeeY5ddK6Tq65N8WTP3JvZi53SoRAmE4Xz1iJazPPtaPqPiUcrLbkaszPmn5",
  "key40": "5k6YRXxLnfK2SeTHrLunuHpzDuK5AaxH2aEJEoMasqXxm5iSC66qJMG6huKLLxktD1tdeUiKayq8PTpw9wSd6QHn",
  "key41": "3mUyUinu125AfAt1j2cx41eYcUinPAFHVsJMR7kpuko5NPQ6ZXZVefkYiqtwnKj14Xnu71jeCd412d28CeQVBNrv",
  "key42": "62N3Z6aT3fePKh3FCgBbsKWBacyVniJUG5NBuGzbBc7r3NUgq1J6RCThCzEz53QKgWLjKVoYEqSPw9skXB79RAib",
  "key43": "578xwwVpWRBGhwS8weQV7V5LWMe51G9WcV9f7Q7vTsFf4qimn3c5CreZSV9JrKYTr54gJMs5kmx1HALLybnbrsZm",
  "key44": "2ANHoNWi4qnFyiLBpDahrYTECMYqmRe7nMNE2vXbNnsta4WAjkfaQcDpaVCy5JTpkxkU5jMc24NxqNV8rxe3n3Sb",
  "key45": "4JFhmJexBZrA5wpN6fCWyV8d4jqicEzhfrz6nJf2axh46tBLWcYCqevq1KaV866st2KgNGxwc6kgKpV7q1q1y1Hg",
  "key46": "2AdTE8Fh4HN7r4o8RdBoAhpQwUYqh1seRjrCdcMjdXh4AZPd1qLWiRtxU5DCYorogoctYFhzkxcvFSUMpuGmXyjV",
  "key47": "5VXXjkYDZjT8gFQR8Q3aEQ9kWTquwTD5JCgJjrzkURu74SYayAZPCQbibCXcVXYVK1JNL3iByNiMzUqaKFtr6okK",
  "key48": "3tE3TncZrpwqiN57T4gCqsxeepKK4RduzDPUmiZFDDzkwKHwFwsNQYXbYBfFYyasEMXXQkVLjXAXtxcbpJDRef17",
  "key49": "2hBdwRe4kzFwFMbaoUwi3HwX847qj8VQEVy88cre9QEgtWDKyzp62YhQWqerzgPvHuKDYRME66pcVMG6GpdEukHj"
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
