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
    "RH33LrMiBQMWGndCSx7tcnurttzs4VHmVRggYrovQuN7X4UnN3NzniFdf3xaLgr3k5sdzf2iNZsqKy7FBaAdpM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jd6R8bX8CDR34FeVfviesjFo39M5airDvniLm1WVrhHR91krFJy7VRKmGMrpUwkQBNYKRWL2rWt94nc7sREoswH",
  "key1": "4ejeQzPgQmfRBANhfwFQbskxdTSQWMLhgspxTZmLvRysFrtDqv1kVhEspRhsDsjpMAPFPVYxcTZZvGcy3rt7Nv5B",
  "key2": "3TeuoVyHrSPjDdnnNrMveKV49Ak8myqtqb1uoqGoK44bkPi4jYWdAkWQpW1xXh1SohPfLGgNLsjcd3DJWemwgPDf",
  "key3": "4JJbKy5ZQ9TMzUWFAyjPNqLRDDzSE8kY6cbqhjCBnVWJR1M5XSTpsngoFqVGKF6XePRiVeFvSekcakcr82wFsX6x",
  "key4": "2kRkFcHZeJ9rYdgQAWmwewAmmbj63KpqCgiubk6hu2TV43q34ypTR9QNrqCdM3kMx12GNNeEPS15DikgDAQQR81b",
  "key5": "5FL81KsXDF68GUpeLhfSQWVnpNqHy35qWG7gJRYU9M7GeAZTKf8xpzPrDPbepjz7rKBZtMQXiwPo9MaYbPEAyvts",
  "key6": "cudENtU92BWa6sK6pp8Do5uELYxpyTKRriJ7Qa7hnb4dmy85BKkDZWHpJr7TAbo8AiLRnG5DaJNQXC78KD1LVGZ",
  "key7": "33ibg3Yd2Q7g3CYEvu8QdegrzhD2tiRiecei7wEYBgaqeDaYWMWJmYZhmsG2CTpuJpQbtt4FWCjLNxAZ8xkvqP2C",
  "key8": "3AdT69kVYhcCRC9mHKGAmk5ZYMdKwyCv5ECf1yeYLxw4qJ3LcKJzLWURRpfL4RR4gpWKN69ybNzraC2Fs6uR9A7H",
  "key9": "s2h8BiNvZebjx8TjShoS4CK9jwUKAZ23p5xc5jhuYNfshQEskrpugHenWagbeKACU5sGCcUmTMdFhtiYNZMZ3kJ",
  "key10": "2PoA2M8LNPpPAiVzjWSh8K2vaY9bRQPcaz4qFBau6C31eYc5YUqoegZwsNghuQjHnyHoKPtecCXXmibHRKRgPAXT",
  "key11": "437ULBLAvG9pPvEux4h1TE9m8pB3amupHJ1EzXyA5kgQmCzcyC48JwVUZyoRpNkZsFZBR8UXypSFq995J5naZyaD",
  "key12": "3cofs3gDAshPTHuydMZN7xK2nXPnnwAD5Mfongf1LMiwTayPu5XjhEMjj5xrHMUGqv8b8aKtSYSu3DqUT4CzV21K",
  "key13": "3L3m9EvfHSuMtme9pthHKjbn3EQEUCkAYmqrELnvsBrXqvy3pNg1ZsvpxakjvAr78iyiM1EjwWSzhJk58MBWUApR",
  "key14": "5AZ1Dsg15ytkUTfeopY8S2dpPNPJJzko14juPQoBQbkMMQv64EDsp57U41EuoVuzXGWWREHKFn9FDjkFsWvf9GL4",
  "key15": "5dbDYbHzpE9g9wtAhwTZKHJnnJEtMRs7cpDsU4LSUMj6RoAzxx44BbCJkqgLRSrshQa3mW8xPMKV8BZDRiEjx9kn",
  "key16": "4pRQwYtNszbQ7PL1L3rYx2mQY2doWbLesn6yvNAX7PUQWCWEePmBxqVs1zdcSvDiVEPzm74FcjmKuqRxZnoLkZkn",
  "key17": "bAHPniaBcWa2ddNqkWQpLxX7GAxMBGXmj2cwfmDxKmBuNcsgSoky163hADR1WbVofKbz2YT76SMSn8ZV6h8fPod",
  "key18": "3i8HuhE3nbSKbar2mi1Qz9vG1ANbYv8Y1HsdALyk9TNjnijsCb8EFsEcHuwDyUhRAkY2QB4eUG6LcV6rUsCAhhwp",
  "key19": "77eMDTEzLy9t3RuYabHJskW84TymSx5Rh7yZ7ZBsq2Rv5Np2UNqHiCBkDsBR9QQeBRANmizQASxVwU8fAFxZjnu",
  "key20": "5vnza8UmdJn6jxuZXexpuBJDfaJLausuFsYdu1CKCkyyS7cvXY1gfHVkkvVFwtCtWE1syj1X9EPNV7AfnvY9ovX9",
  "key21": "9PmGmFFBZ2PD6cTg5acdKeevs6ytWR4dchuTmDjMcCGvqWA7F8rfQgrgDjjyu8ZVbbWygv2EhMHhyxK5ELaYQ4k",
  "key22": "39WYuapYjCddxyn5mcB6csUDeGcK4udtjmdRry2xeL85wojJTLypkRVTznB7Lp1KhhWgvic4JeoUZoMCMj1Crek3",
  "key23": "2mmHSj6g8v8MaagXLmTbz3rx4gDGjHVb3CmeZbzcG7rHgt9RtPoRtadtCao18PTndUL9cVH4eTcYL4v1UkRwaBSE",
  "key24": "4RHHjfg2NThAZ9NSzx7KBeNWRZjPrKtqrb4td5zEq5E2rBJ6ZsBybcoMoognMBuGDW7DQ3D2yP2RNzdN8jfRm1gp",
  "key25": "2H1Ve3DJp8cQkEqxRN35j6vmWjitufeHx6FrHunQT2Vu3zohck2akcdQYx7PV1qbFb1KTfDCRgVYZYXAHpSivVRY",
  "key26": "2r5kzTQUjpmRT2Ed1JrHYTbzdjoxdeywE7piADVV9HaBx9fBmFbm2DHSEqDHKVUrfj8PwZEyq6pURUF56Sagu684",
  "key27": "2e3qC6FTrR5kt6HUptD1pAHV6zn1bsaXExaG51qi4WHsQ4km6zPvjTQUfsRRsDkSrCju5iyGbmfRxf88hfErK4qb",
  "key28": "F1DDqsFNrbdoQYdsyKBxKr1SoeZbZU5j8TkNwmy2xfP9f8FWgY2YhNoMaHkJjnSGXh5qvUo89GCcJPoore2NPAs",
  "key29": "mPSdSnuVrZKjchPRhxcq4qYhVo6Qrsy7w9KY1poexBmS4tmzc5Eh1S5uG17q6C6FskjQ9zSgD2gr2xLxF5vmPfZ",
  "key30": "2QVgZYSeL6sepRoVdgf3TUnNwrLbvDDmvVtUtuU2rsksHqRobMziGt428XptGFTpf5wjuqBnatGC9WYCB123Z8fP",
  "key31": "71CZj1q6Y5wcMFkwYs7p2X7huiG2NBkxdY353DZB7xmyU5hsSG38HgZjv4gZzXcqDAL85k1PdRwzTyyjDcPbLS4"
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
