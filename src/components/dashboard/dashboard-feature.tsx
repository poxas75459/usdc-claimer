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
    "66MTVzTmbKnvMbw8FqzBP9jixJ2S28piTXTdQYhu2dqFvHVHoL2UCBrxks7XoNKpaDwJvFs3Uykf2b19k4NguEKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9KSBAAmSWd7CV9kMHFiRaty5BG8yvsGdVeavpVULYPWvAG1UJtWgREbtVZqFunhTuzTRpopHqedvxtTy1w8cof",
  "key1": "23vPmxECcH3LQXtdVYH6K88Roy75fE4p9HPtEp7PVQ4GCe2tMh57h1B9UVS5UhVAGyN1VJMiUqywoXRKeYadwmhK",
  "key2": "4hQM82WL5WzPdL3mzGZLEhtpWSaSyPjZ7dAVnApec8dgVKq1Nqa3RP4Q8MsWNoKjAiEq54wpBCnXYkmeeCjZHMex",
  "key3": "5pTW6Cito8G8mBxhqGWFpFRoxqvteog7JVyPTUN9yk63A8g9ZTtxscXsuzccV5herR8iRnPr5Crtmiv3JDNUYFfa",
  "key4": "4yoT7YELkhJbaZbVZDHkjfTyceawzFZRpoZz1BLAVSA3bX2j1WRKsNDmzgiWEFHL4whjeLgMSGsAGU16XwZNYrED",
  "key5": "4STLFrwH5EWfKQX7AGHe4LabpMoEf6YipqcmEnFNR1Wrt9VK8nDQVZpcXk5ZQz1yA39gpfCq6tHCdK2es5zSksZ3",
  "key6": "4MvWPDdHe4cfgxTLQvRy5UHXvFzALGA1gXWHtThFjQv4CWW9dCHKWscVFay6YyASSq6PS41FhrUwF1oZ7poapkGD",
  "key7": "3hQRMur8Xp415kKB5Hs142tgmBpxCAvr1hX6baigMuMSWFGVMCkLpKEtEyphdL6k1Pdh2QEtnyF5Cikd7r5JnTtY",
  "key8": "4RscPzXX1WmowuBgZ7C9nx5gYnmhVPUXy6fNXy24CQ6EQ4VWUpj2Wacm2jAvuHixweuGWpB6z3sGAZ1CJDY3SpnF",
  "key9": "2JaDaSkd1gWSufYsSmR9niTbx6WLAgTSUV3Jh9kNps97XkXhGkXTDajUzi1EeR5u1AVozABRZpLJPncmYGvgiiWH",
  "key10": "n9Q4VSvmEn8dwBypo4DtHe7s2L6Z2LiQ1P2oBJz9UMzjJ1Ti1PZKHmVdx4E4DM114ZjkMuDbHJ9YgfM4QxkvZZW",
  "key11": "614UAUrh8ay3BGr9FjyLrisnKuH9HDZ51GQc2Q2ZfjQnw5CNPyh6WT6MEX1WsPLEwLKtAtkTZinHUz25LfeH6UNF",
  "key12": "2BK4oBPmE34Lwi4ZNCoZKGCvekKm1Sy5DYBPtvopmiYzEfpEKE6jzVoEN926fbCh1tg7JMQPqHj1bstkZWDoi4BK",
  "key13": "66yBHU4sLYJN1Uwm3GZRv7j3ZejVJ38ZtxDVucEp83xngh3CrL9jeqv8SVTrazeZEMH7B6dYygKHZzmPAFzfyFff",
  "key14": "42kycPz3emaJyhieSsNw32ZoFCvvoox5XYZXzPFCVo8UXuiT1pdN8M4WGU7JXy8ezsjstE5aEsnmm7HEhHFTFzEE",
  "key15": "4kMAFuEK8RX7EhJDFpESZf5y4zbZy2GwngKVhx7aoH4iS8FcMPj2LDCjoK4pYY5vBu9X541gJoR6ZeWjwpsG6nBT",
  "key16": "2URjqR5mjQZ8vaqzmWNnjwthUuL18NDzabJgbBrmHqszNR2RU1SRYieZetcm8QTyZdgYmeiM43hkgReDiUyt5nMi",
  "key17": "3KGAQXXMNVtqu3c2UT2H6vaqveoRJLtjigeqrMvvFeuyZrDP3g6u8gC1FFAxM59ZpnvBzcMB6251JzrypjAimx3P",
  "key18": "39PrCmfPX5sF49jVyHpdybu46wxEq4JaC31rq8dYtNo4bhfEQXgiabVF4fnVXcxeySSdnfsCsS7TA3p9ez1tajVG",
  "key19": "TibryqiCivmBW5qvnAjfNmLbyDwhHBN3o6VWpm8Fxt4w5kLzLf13XHK5axoTB64fqkniZ8FZBb19JHz7iSCrF4P",
  "key20": "44WCDSPbvq2QJtom7tqykFSrbnDdhMxKmi5u8S5jtqjq4r2zu864wHfmKZTkdEPrmyE597jnXRtYyPaBcwaxjUjk",
  "key21": "2TKGvtEtoyLguJ8EPqUikFVoukvMVxWV4s6sJ7x5eaDGX3wuPhTeRGyQ2WNRQa9mo5pmSTwtypconNyGy8AXhJPC",
  "key22": "4wqXWXx9A2LBEuSz8UUpbsg2GBWQjMrAsQ49sZus6SRHgqR3ZnMmxWkQJtGJf3DDA7RJYn5GRSzLnwuTMPn2kADy",
  "key23": "5yyE2nxcWjar9NUvKxmQa2aBScAXvHNfqHo6KWAbU2FVPyiQZGqoCyDie4SLoYvgbcMXzpwG2XDK9xDsrEoikSGY",
  "key24": "61rcTuY9rmeEoL4gsWnzkccJaRXrJTcLjrDwtQMCcfnriAr4SY6LibLBxKjVENhfVsUZAXPXCYFt6YZAvezvdn4V",
  "key25": "3TUyMi2cfksJc4bR1h7jfc83SN86mVbqDL2AX5Toov7PZ5YJtkEJZGnkwqshCgEEBpETUvaq6dvhtaHVF2ynxH6L",
  "key26": "4RAvDC91pGfNSznkNKsdU5PWntRQWSNMR6t5BEdNrH4vemQLrdHn5PvbNJrRDa9sTBfiU8r526M8VMgYjDZdqcz1",
  "key27": "24eqRMrfLwRRppPKQUmbCV618BjxZqzTNt69YJpcHDxHYa36a9zNaWZmbbpWme9emM2rEv5pHGpe5qRrEVT9xBUP",
  "key28": "4PaWa7wv3AYpbhRybKqTc5mhyFBpnW4KVWs5W8TdmpioExXNF65FRtUJ8SXMGvMxfxaobQ1w6zTiGMKWhvp2EAtu",
  "key29": "qiDBZSuywSmWZ8oneL5BdS4addTwiitCz9xsLwteoWRULTZBA27UPLicKCSKeJ6Bcp4KAcfuBUP9rVF2TSUtYjZ",
  "key30": "2V7xBSjt4ssgq3BKa3hh3Bo2iBLG5PvvdwPVDJZDhoGrQeWu5RUboxJG1mbYTfiW5Tgfqv3pKM3m4zDd57kohwR3",
  "key31": "Snr5mqR48DdyAj8DkVa7CDzNDGoVcPdsak456YnGJ15n2M49cR19NCAw5YzQsgEDbviyG6gHVLd22iM3WeFS5Rt",
  "key32": "5X7EXmT7qfmq11cX4FM2iAkeJ8NrUmBYwQBEEGESKvbX8MxXca3DVrZPCFmPDygEk8zHyVxPUT85riE4t6jhLKwv",
  "key33": "4XAeWV7mFdK2f6nLBuZ7uXgbq1bEF8YrUtX2cs2oZZo1pPSczqBRaMtchq6xtKYboJs91irRxEzgfdSDcJTFaP9L",
  "key34": "3ZCjWRCT4WWX1xB8n4BLXgHEjLvGNbceVemUEnmMq4foZTUmVbMFkfrhcVTTVotZru46Z4S8Ejyd8fYcrwARPPFZ",
  "key35": "4DAjwA6tb8HYputNuZH7etFEhsgoaC1sKASD75NCM3AaDzGoffH3USb32pgY4EnBFDPBYR9U1rq5WYdXhK5hfLq6",
  "key36": "RpXg8oXB6AD6vh8ACDiN9AirbqBujMG5eDtpttaeB4WAmgFe2VEJbmoRdPA9GsGYypA2V5QqnmMir46FCWmUnrx",
  "key37": "5mPSpLTHMvpBuNfJxTyH4kcqgR1jij2jFsEAyX9raLqjYkYhwGVMeuTy7wVAsCMoxtC4TRCCLJVLE4BdScjxEDPd",
  "key38": "4n7DGRJnm4vpyeZV7Kph3rEZWiijCbMAA9Rtmj6tkdxWRhZbXv3MNVXCX9BQzrqrfPhKj6V9Hij1GGw9NHKrjYvb",
  "key39": "2UcsXi5BPqosR843mVgF7tdq6ZUMbYWLVxv6hoybGYxy6tjsiZMS3arozYiWYJoYY9EEZnrvCWRATWeTUFQkQeBT",
  "key40": "2aW8SRKPLqua4MzFWUXPuzeFju1rRYHLyBUo85kHKkcgRHz2JM19RbDB7k8sdCeD1QEhDag271kJv7WZNj6pb2M6",
  "key41": "Yn9M1sGGHcf7LC53JV6FM4se7YKFmyyHgNRuweA4BhhGguHpx1ZXmifL3v4HtbnADDfirzbUFWH8AqQPp5u1TFr",
  "key42": "5zr7KeH48LYbsT1FYo1Wy3PoFKnJUwNek25dcbqNB3PBXLBu5DK2WPGdcnRbEDbQ1V1BBVKxoDVoigiVQEFz3mZN",
  "key43": "24QQkFbmJKxyq76qWvgbPmzgR7PS68uWV1eujV4zcHK9ojoim6YdSWuAY38dhD12Lx4xKepTRnDyiiePdMA9Bfhm",
  "key44": "5nV47xz6yw7kh6VJJ5xLYXVxiGu31rEoSZxmkDCnespVF7BAdRoqtbX6pKKdSyuThBJMjVbh8ex9Z9VhNyE7qYp6",
  "key45": "2gZjRavk3prfqtQnWaKK5V9dMQmtBfDDKigQ48xqsAT5xz9idPMviHgmSWcA2p2R8ipwFz2EGSvEKiFjP9jpGHCG",
  "key46": "2evXoF59771NpYVTG3sucJDqDt7ca5uj4WwjjT83SHEGNnLVbbZVLiFJmFrP4f9ji6hq1g1yMSPN2U32afkyvQ2U",
  "key47": "3s1NhaqM96LgssQgqZusSPecd9ZoE1iwCLHY24rVTJNKkgpxyKcp29RE9yU1bN21G8Q8KVCV9NnMgz7QKXLnagxJ"
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
