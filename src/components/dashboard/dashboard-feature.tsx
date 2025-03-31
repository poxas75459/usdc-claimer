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
    "2knwtmzaUWBDqv4buLMtxJXz9P3hedBGZjLYaCekgjeL2zitvux7CNFQqnABPA5DVcSwWn7jx1W8XGy1xuoMDA5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJTkbbh14LGNq1ounUkwstzFydCfbCNcPDuQr2f6pF86qVQucV2pedNEGSWK5BQPHNLYkJ79unHnvw42gjHk8XC",
  "key1": "5eWwvkjs2PQH92beSskfejVfpNfJCNDEZ1fAVF8B5N5Z14NuXiyJyz5CT2iB2V5eHskZ3vEujMKSNAX88t61CCFN",
  "key2": "bzQZFtgj5NxVws4ujsodayXUrmmdS2DwWgEi2Eun52aJ8rxyc6ar242FtmzGnVFgdvqfozsW1hsMsLyk8GJ47ot",
  "key3": "37xMSaovzccABB7CJTP8BJL2LWp8Fw2GVEkVZq2hY12zpdfzdAaxqGpXfgjJvqXLtY9K4p2UbSs95u9iCUy4C6nR",
  "key4": "3eNwwVJc4jFtu1tUvu9Qi5w7VucZYaPZotCWbQXDRXKWyKurNfFaCrCxdzx8dJVhgQnvU6m25VfE2xJmuZCzqfGV",
  "key5": "2m335H7Mvv1NqPrXonsqMneKRP9Jea7NH3Rh5Ecp4LtAk81PgkCxewA1mmwcD1hZZ5i2S2pCVhzvbBoUzrsyRe2s",
  "key6": "2wz5LNjkNMaiBmrpevZG3vUsWDJdzi2vPeAiXjkNEm5pUHLeeqsMQV7T4cvMw1CaQg8F29EHJCfa4hDNQx272nhK",
  "key7": "41MgZYdEE1ojcrNRCs3K97JPTrPtchdMeyCY282t2seCnH5YbDpSprbUFHsK8NfgLHuRcmrQNz3UmYmPCRGxLgEX",
  "key8": "4cZEuY9kreHipMWR3mT3TCy2g7ftvhQTvM9BsZDmGSZzfo86QxwpjHPgTXN3wvDpEDaZcjvzY6P4shLyR3mt5kEX",
  "key9": "2qQVoN2eSpeEFLEQWfZbrgcJdRJ2Uu6qNHjcd4emgrW9pVhgWxpFD93pkdQTxE1gieScueUkB4UU8aET44RMXi2c",
  "key10": "XeAU6caDPk7VMGUyoniiijWeDeyPebswuAC943GUtAbArRjHQ2ynCEkRXrvVTg9bZCEzGh9gsSTJ88Kprrbc9y8",
  "key11": "5omaiLweFCKTtz8Wmx9KnHW96umZQ5mGehHTE4kr94LSZL2PgbysknrQgomTg9kC5yFeCnJmNRhuSJ3a2ZQe8Gcc",
  "key12": "3vaR8mCCvm2PTWGcK1iHWbzm7w2E3gLNmH3wS76qSMW4SA1Muv7jJUVaNX7F7tu1nEwQCLJuyiYLMPy8Vr1fXkrE",
  "key13": "4UrNR9iPwmjdGsGGPVYgq2L82Dnr9ptrvQdgZZJT8UyiS3cD2d6ZBrMh8QfWVFoXePUvo2mxvFudYCpdaT9T63FH",
  "key14": "3F84CxwCgDEXzHVrnWw4iJNSXSQDokuPsTFNHVsG4G5ttCm9teNkzGkRJFzpiDmJL3McqbmQ8YbCuzhmTxsmh8L6",
  "key15": "3QAqaqct4Kii8pJUNtsxRQ47fzuesxFjmrDqwfRXREVX4zjALgBcaoJgipsfPkMoTcUpUdkPzLXFLpGXnfwkB5st",
  "key16": "5AJyVvmXegVPAyqMXP8eUw2UM6oG9ZJfL1zLwEzBHmmNvZYqCJZvgDbAE9fhaoeMYZYkkBW1My8gj7maqcnUhpYe",
  "key17": "F3UGH2gh66mfcxY4X3boiQvyWrxBwnyyg6yXHRjnaQ33pKk7LeHjTzqR3F1CoTWJcDv9RRccTQxbwMX7NzTCLXy",
  "key18": "nQ1d3fxT68BMYXuR2osNs1LXKMJ9nYAAzjKLZhc3Y935UPHhyi4o4rcH6L691etBczHBNix7vwWZzw462DHUdRs",
  "key19": "vDF5WM4anXdcfDKMse57nxquY76ViBjpCrsQahS4oRnZU6UegRATZptce8UcXPDuiC4oaiai29uJZFfgeYkYoY9",
  "key20": "4JEnQGSSnbQphbER9ewSG3CgLR2gxLdeoZSUvjoFs3iFKoUyovtbzHoCRnYtQMuXfQcbyfqZivjNdvBqDz9gHbW2",
  "key21": "1z2Kgc1WCjXj8sbc67jsvb8pNimDrcAgHRwRKfQyWHk53QvQ4ar4saLpN4N123NfhsvzPMwvYqbu8KvnccYP41B",
  "key22": "4vd2cYHja6j9ZroCX4kWFFLaQRLkMc9TmWP2BBoc2u622fHcDPA6mHa4gMwi8oZREfBbhtXPhGbcE1NqC3QNZHoS",
  "key23": "PDMEj1RLMzSYLFGQXUPDbPvJyxDfzJn8NW9iNUeATzfQUhDh57goo2UGNsUJY4KETQ8Sh8ZE5BXgr3kaxETq7VL",
  "key24": "59cSckmztGQpPtgnFnf7pyCxXHnqZZDchVXrqwySSM6t2hHPHHLLqmQ5fCh7r2h9AE1oBjA3go9KhPFoNLuKAJF7",
  "key25": "5CoiwvHticae8XeukFknTBbKCSPdTMTjyzm2uXMZH7AZ2ikoyz6NKax4LrXmgRvTL69vVx2QtPdCU4TrK311k3hU",
  "key26": "MaZxByfNPnzJFvCRDUp2Vd87kpn6wURjH1K8m5N3cxCCTjVrETJSG4yAdZqi5XqyiZNrmVRKw11YkdcqDfnANsW",
  "key27": "2eL5oQmYdYVKvYnqV5UgBDp51CTrrhYjLQAMQbJWjw2KQNiPtcMctxYwbkqnKBdRpx12PK4G1q9rz9dJQ4WwPRKk",
  "key28": "4iLBf1P1ve6bnSuWFQ9UYnfVpsMFsUahiqLniV6UGETsXpdnUnxBSZyrGXdZdwrtQRC7uAaSgvpSjcqM3S5oEhWj",
  "key29": "3R5rfwQvRCcka1S6W3ybNKirebXoFW7BopANx9LUza25awzxLogr937uU3dR6fpoiApA3FfBE294pjV2gYYTNAwu",
  "key30": "26xUB8okurR7Jb4T7qmT55fm5Vdmj5q4HyN35A2CikbRQNHDX2ktP7ecbhvjBraGCWMa99DdiJYrFLc431pLuGLf",
  "key31": "3Uh9BA3M26M2kCDZ7TaJcMYjUW7j9ZAdQRUZbErQyzgNRxTjs1rQhbYnx4U1XVxwqqPmE4MRVsZ9uV1c1Qnpq12D",
  "key32": "ndg8RxPLicpSTiVXLvucDwta2EUdSbBEipp1eBzcQaaFj5hYLZvgm8f3ez9vCtXXC6ecexpVBjggAzWbRMVS2c9",
  "key33": "5ttk6d56im6FY1aae68DGpvMa4WMjAnGWuWsPp6NNfMqKtnkScKzegv8gPhKkoJyd9d44caHyEYsjhKgPJRoBbRY",
  "key34": "21bYdJyXx8Z9CnkC9WJt6hHF5fTS55DWz4RBg89SCHapurzenh5HnxRurYnqVhERDj8Kym9u9ytMiRB9MjaRyAw6",
  "key35": "4ayA1D14PnrsSsnhKmchRebtLrMjzUUNP8QynKUJE5hyKaCByVZsdysiKTBKHS4ePSxR9HuJMfQGu2Ti4AJh67b",
  "key36": "3sBosHWh2BxqwiqHheNrbbXRddTzGUUkzMBf2edV6x5CeZ51qUGUdfJvc4oeKUGLqUT8U2B1Ap7urb8c7s5ydCxj",
  "key37": "5cLUTTDEYExRSVCcvUqA5Ttf9zH2Gidy7YnDGJrafHBvtMdiVsVjzUupU3sosJwKpHkqX5iQCh1szdYQDCJGsa4p",
  "key38": "5BUZqDXGfhwbq13SZLNMVNUTN7VrWxTgjV51S9pBYdxFvhdTUVYUcgeKaQrMuBvnYe4kQbcLJBr6RwbEddoioyJe",
  "key39": "3ekWN7xKWcfGwdoXnyE9M412jEx1D1FHYdqFU1ewCEgceyFvS93sfQLt3bQJwHrhP7tKPHVQ8aHFcNCkymkFDt8X",
  "key40": "2GGC31Jjy9pcTtrSxC8usYAdNvs48Wg8ojWQAyBRkWTAvaQSsZE1i1i4BH3hmaTggJW5FA6ZfpvLk27Jy9Y2aFPH",
  "key41": "2qzszGB8fW1wqwjgSAvTY4pZ7r47KD7cg39CTzhVW5PRVCNSGrtWTkfDcKToQtVVF6UBNSV7UpHEuUKNRUSPb911",
  "key42": "Z4BefCcKx6j7wok8A4fNwhwX3ETSuZKSphFgjzziEmWSfhwrpxHSfjhUJ2bw8sb9uS91eQjvxur6GVVXpybTRez"
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
