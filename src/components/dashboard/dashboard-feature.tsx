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
    "4iXJ8ZctspuvHoMCUtXkaSLQ4uFkZPLjemn9n1DfXaHrpohr36vSZN14THhusYM2C4tB4Xe17UFfodv12viskAjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZGt7KvQ6ZMRWEqaxes4aMBZrZYYqHMpzpCELN1xK2tFvGVVk2pQSs5TUe3QyRWN82skkJ4ZA8jYPS2ySLcjXSw",
  "key1": "4h13GR5ZzPtFjs6bhRLRfxgPBNf9DuX7SnQry5xjMHMSvK1nofkShSdUtpQgmzVC1L7bJLa2uvC6zCfpkys8B1FB",
  "key2": "5uALaNwkWHUpvxmv5eK3A6fPwtswjH3vBMz4KAphSZAcVqPdNK2fj1MXGky23wFReiqD2nea6aU2QjqWYszKinNY",
  "key3": "5ZDawYYpX3juxJKigAH2Mzf9NVboLBdC4pDki1jtfvZm5iNetGCUjQWJW9RjGLwkYdcCQd8TpZRX1sRDzfUi3c14",
  "key4": "3odgscBhcmEepfV2iXFAjzg68n2UVT2DyPSKtYke4vRa61S14LhzLT8ERhByLZDbnLkCpb5ghW5mfeE9gSdR9MMp",
  "key5": "5zyVMmvaXmLWRYjnLXMtENkPWekM8GUnDTN17Ynx5ccfpKdDHmWGw6Dr9g8N577d6JLtJHpNppLgSrmMBKFaY342",
  "key6": "4fYNvU1TxYGqsc7dTncc3rWqQwvHAZacTyujP1wMj8tkDmXKwdH69Cv7ZReCJ5qZzuPsvr4e6SSx1FzNZep7nCbe",
  "key7": "5GUAketf5HEzMtkfKjWtVc37CadifwgN4cginCWVVsSbzZviBwQRAnoqCUmF59rXuYSJj99bB7DapCEqTsQKjg4X",
  "key8": "3e8Qov1yFW8SVGaLZJStGShGJqkvFuAmcPAhcRezsYq3oC1CkpJrAN1fAXzzLQ9Btbv5WX9LbDjyReQNCWMo2XZo",
  "key9": "28TDAK9LLft5yZR1xprmeX7CpCUe7od7NW3PUs4axByhMeHiexrHQXEvLPP8MPoFhXEEZWF7FK1nrut9XAvTixN5",
  "key10": "62DqpYv4JAZ7eTtwfek7LYfGa4GdC1tFb23KyaUcP51PaSdcGr64U5m9oun6E225hDZQyMyScSq6KruyfV9cHgrV",
  "key11": "2wNAgToD1szDL4inE6f9mWkbbebUZz6qBwhgkZQ9PzvLkuaT6PWbA4wLWcJqtqmeAMftmMWMuqbh3ywpzf97L7JS",
  "key12": "27MjuRRTpomtF9a4qqrdujrVvCCZaFo49a1RNbUTLyvwBPFyNB3Vhr9rmtwMrG8icUddbF9vztKsa9xsJPRqcAvW",
  "key13": "2UkAVCnjm6YhDWLvBLw7PSpYVVgFG6GrnZ1ikUqpr9GAY1ENnApEezbaKJLz49BLEJ3NANMftVQEnfUe3UZG6nQp",
  "key14": "56Vfer3bGwHbe1d7U2RUDKtRvNTTnNuJh8GeCntciScXSk5MPg2FVFM3hGS4sZHc3iKM6XnHrPBrYWZCV6XvRLVy",
  "key15": "63EPBxw6PftSe2qUArJ9U5p5Y6BjoDwjcqUXJSMfPUV3KWdxw1Em1tDAnCnmsuWtFRutmW1z2j6KZQs9aeriCWrv",
  "key16": "4dwLXQC221EnDbhQQMP6TBJwhNxpVaqK6PtZKGEJeqcsRGmJ97JYb5zehujK585VoAEYU8kCejuqnuiGN1wQYt3Q",
  "key17": "3Cehi8NEJcsMmMdevJRmRzL5aFQTx8ugTjgrTVkvk8a6aEAnuyPWrVRwTmkGEQFsTzP2Rdg5C2NFxTTcrsAVM76y",
  "key18": "5Lr78rHTigf4u7o4WGYwK5axafNWeege9KFWGFQt3sm7CJ71PfuKUfMrAycZbE7zF8TkUs2wpxM7bcwUyCwrtWUr",
  "key19": "3AhoxszHKbJAtgfHS7U3v6bmzFnXBCLxQ27cKB1AWwjJUp5XXeLvgsP4xgzu9ZVmLTBCnzbsXstBpV1PLtSVWcUQ",
  "key20": "2pL5g1D6CNT9JPRm98bXTrjWeuYisb1qCYfTYJnwut9ya9x2LDsQfpKZoV4by4rueAVX3q7uE9X6YhiRsJwSSMrM",
  "key21": "2c2aLXJB7wbqxn9qoJ5eMBHCK1Kj5zeMCPpGMo58vrxtBKCCvKL7dr7bUxHmSNmsn2L7U7rUk4wFsXCnAzgNbYs4",
  "key22": "4k8V6ykye4PVmUXU1LpLtSCEE172LoiEvjs9HpLBDERnW2ogfyJzQPXSCKb5xa8Yx34YaeSyKV3mVqygHsuVcTd7",
  "key23": "3Lz9a5B1Z23xVBsd6GApENLLNgL9s5h7TZwutqmfz5qQ8cn4BQ7mpteQ4nVVMDstYmQWXNJfC1LgPWW4vPXmYcFB",
  "key24": "5ADWCRBAxZUNhVujWehwShWXS7dLo8EpWSyKkWNaxnLmRhkYUsdn7wQTuobxMteAGmbttgVHx85zDvtfgZFHKjit",
  "key25": "5ok851SJF765ac8BJ8Zp7ztv425HRhDVv7X8BXSmBiYnfia5jtXtKNeBiuYggJbZ59uVAT8sSJBzzG2bGJfGPVT3",
  "key26": "5xkVZQW8XfUKphaVeGgmtMuUjucsugQwzvo6Zh66e9VQeC34qtrvC2amrrrP83e9i3YMoX4yqN3Ey58r2JeC1CCZ",
  "key27": "3T6qjdaTYEYbfJBAcVtDsuHqNYgc3tahf9vLWjtg4jigX5L7QDi6u1G8c3TbTuYutvD6AnPFXbiNgy5jrF6t7UTs",
  "key28": "2c4TDVkxsmDoc54BmRfmkAMMhx7fYVjApikb4agZGiQkdFbWVXDhxnvP5gGhhbBqXTk3cnSPAXMMU2j7DECXRX27",
  "key29": "2WuqEffBL2vPKcWE9YuThvFh8cRC7S99iQgSBye1WQCiTNkf1RFeAUYak1bCe2PNus8xTpGRfBVsyYvXSP9SoWn7",
  "key30": "48LUxTb8aLpmtmtem4bZBHxwG9Uwv9FuDzAMV48gC4M9q4SxcpcrfgsZQVFGyqAyfFkHkvtk568jhXubRZcyGgZ2",
  "key31": "5cTJ85nDpuhsmKByCEEs6Ar8hPDXjnn7f1f8H5x7ZtdCJCMeR526w7iq3pfXFDhGNF7NLQditY8UKHbz654RdHud",
  "key32": "2pdfCnff6sN8nMz9q9zAMsAPddWJAZBe9xdFPatgCRMYSZEfTVrxp6AvQLrhTxRystuzyUrtScdR5QZJZjcoyH7e",
  "key33": "4R2dTEhbu7oEf3CbsMsLiH45uACeJbs6QASvwzyqhm3QUHSEq4rw4dT8wr4x5ViMY4EWf5M8HqX76VGEw7Xd5XBV",
  "key34": "5uEEwCXmGeCmarcRZXjJdNueEU6aAXa9w7kFAJUH1zQe4EJP5FTrWHkSiS7abuW1RzQLhQY5TFFPoYynwQ9U4Wac",
  "key35": "3q7BvFhrFKBWcw1M5A2Knv327VuTVNgqdViQRG2AMcMC33yoBhfsepgqkDEUnH7gkm8dgrn8bzB4Mt9sDfueAz1R",
  "key36": "21xsbqNmh2P79e842BEK7cqUzTZC6KXSWJjaDNPXNUG6S8Ze2mEMt32AoK5dJdG8n6dwsfrPdP3eHWtMraASDhm5",
  "key37": "5zCtCiN21KARJ66CmTUNxk9b3ZyQErJQvvqNu9puzP4PE6kMxyLWSJgBHpqJX4gmQAxCSqkH1gQBWMFm7CBRM7ob",
  "key38": "3zi6pBMFt7aRMnTS7WRNgAbX5ok8k1fSBsrGAcN1Dg7TeVoBf7ArzgZmCbPZTKqN4ngSQxPGNkoAHLrPmf5dJaXK",
  "key39": "4273DDw17xnxdMxZ7ir9qUeT83F5XaPw74EsiR6kQaRaiaAiCWEq57SRixq82VhSt3UcH79hzb83eXZ6BwcWMEzs",
  "key40": "4j71DxhaPjM7EG4tDaLAeS6y7hpRkGB7EGZUXZLEYp15cW66qRHRPDALJfcNakqFknPGdSAWsm9vdYQcCRvKSLCw",
  "key41": "3m8dkhXqjkBeUDM7VVdkBeW1dTUdtFghRhwXes1sszSjvtKVAXrozccVPoY4Lf9MzqZm8Ruc8LAWZv8DQzv6LPFf",
  "key42": "3N5FiTDgg2QFqd8z1HE36sPS4mxzvJd2wUKDQ8rEJcumS9cZnBF3zB4xtPkqNXMCrnbp4yHg65xkW9fo5QAfRwbo",
  "key43": "NquL1HmkkL9NffDm8ZGoDnBDu1awvLuhh1GWWo3wAhHfqRQ7D6WzgQxqsKswwnQVRiL892QyZCqTLYiHWA67eRK",
  "key44": "38n3zH4GfdUu9EdpmeNj3kUvfnkEhiG5vA8U1nTnEjW49FrzUxfuC3QzaGBBonjWeFyDK6CH5dXiuM2GEH9FNjZx",
  "key45": "5bwRrVvAsYb4dLioytM9tq52u8fsfSUo6DHuFzjYZCHPdKHHyygTUVTT1SYoek3J714D3xBUpU6749TxoAALirin",
  "key46": "2pf3fhc8aKEiQqiPxPMm5J5nAe4b2Ln2hJB5Xf4nuKWWzwHvXbfNpXcnKfv419k6hhTfRXoigbzW15jBAyuQ8uWv",
  "key47": "33N6cPxCLWMV96yzqWLGTdgnfSpL9TUuTg3ADDkPwmZjpekebmY29tWKXmtqkycGfrQJAaJLKb8j3GgXkhWYCpE1",
  "key48": "56DdPCazCvz6xZm1gFZNJ8v8aq33bnEcXuzEaxd4FZxz7wa6k7FdhAivQjToeSokNHtc2XWdfe6UqwzTYjdqJwL2"
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
