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
    "wH695GWvUg5vF66iRwL5kxy9WMMCeWPFnvyM4Nczv23HbR69Kg1in1qPmCJ1EiEPmAbJRcEBvLExmrQgAzTRrCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4c4b8ePhXAmWuKhYW6C3p8CrEtmTxo186XTA5wDUg1dYdfpYWnQ4oLbvMnDr7bsyoG35bjUqckzP5dskY4yptY",
  "key1": "2vomSCVoSySKmVuTmgWzJ2eHKSfVZPrzuHrYkXNBfFrzaUgTHaGZi3g9f4A6T382W7UEPmQxB3gAhm6kB3cohNrw",
  "key2": "pcAP57dfxcg95CgT8fFptc91uWpwV3MFAMATT3Atjf59CY6rdJgdfJik6SXrtTqT8A3KN3ncVnYK69TrYHS7DMk",
  "key3": "2aUGQ5odgTubsAhRJSGWVzN6SzN8oGLwUuUf9Mbjtu11E3fNBNZkUXSQvUgWRosz7rw4nUVjibfBvumyFJxg3Cjn",
  "key4": "UBJyUuGPgGxwTAmGitDxoYhCC1cQAZg3fZgk6yVob7oeBiwtfTrXs3tHL27o343KG8qSPrftnyPYA1K6S8g58KZ",
  "key5": "5HcCAyth8KgMPTR6JXCuF4QnJA2dRCdJU2RMg9335PL3p7jmr9rfkERj2u7QZ8bRs51iffDKxUqvaP5nayaciwH2",
  "key6": "2a8M7QziYp7L2sqDJWDGAhm7Y75sBSxvmgSTgAdygovqBvioyStm2wpNHQAy1NGxFn19SFCmTYTLTYnjNdAZgqhH",
  "key7": "2RKHnPTiUXAk8v3vsLQ36pYwoSmteWCmZcUS9Y2S2kXf9UsCMhA1nX8eSZM7t5scC6Lb17PE7FBnowPDy59ikg9P",
  "key8": "45R4k7cgePtgq3CdpQBGnGc5dN9CL8BPqEvC7wFAtPZRyZi9ej6Y6iRdAKCBPKhdZvNBL1TmExnBPPYiMX2Qt4pm",
  "key9": "27ejtUpJeiCbrY4DV4xNdMGj9kQgMjGbd2srgbGUFSUasF7c89wm7kisN2LB5xsgFSLxxFqD61dkqdxPY2Xzwruq",
  "key10": "5YY78r7c3VWQPN9VQDjtWPK46t7ZQtr5bUsdHc8ttzWdye493RYW48xuvoEM9oPQmZ2J3Gh4jEjF9mHgWvkyqBRu",
  "key11": "3oWyhBHqQinNPwE3XJZQcx97SVfZ13yVknJ5JbaSJiSrMiE1sDq89ZZnaJ5rsySuabk2BRL5z3yr1MHibyutS2d5",
  "key12": "2qHpumB47kc9jHt5FxDoh8vnDFU2dV5fXyeqRMCTcT568cGTCsNhAVLkBB3ch4WAg2VhiEwiMy9DrCAqWMEuQfpg",
  "key13": "3DNa9enzTf4mrYA9fFVKRYnRfstW3Gfkee2zhcruJvjpJGSxVWuDwRu1N3qcQQjTEBphxpX4NDtst7WMKdM7FZ5Q",
  "key14": "5DYGTDCXSJRDMjozoJdqZuPgGYanfDtVfDs5awWVmmihUhsncWb5vq6uitbJKwzkaRLf7bGYZBEK33HWhA7wrQJL",
  "key15": "4ZSeruDoTFx394ANWi636a4GnYvDLyDihmYnJZafPJFaSpSh9oVntWz8zGM5DkPqW8BSegm59fqRLoWfdUhNm2ru",
  "key16": "3iLfPtj8e6yqohG3UAHuP93zRC3nGGg4hAbZQPunECX1vH83eHdy23Q2xk3kpaCGsAiRqYbj28vuawo3rZo2Uda6",
  "key17": "5xkGuwJ2LKymcQZXjuexGgk7vGbBWoKczGjng5DLfYR6h2urNNqNsdSyh9XGae5i1ZB9BETEmPNASzCqa5vrn1ei",
  "key18": "44N4CxENAshsGoYSFjrqeK2corQsk1ahCKHxcQ4u1xK1z9aM6vxtj3tVdZVvXN1K6RzhHKxVx1S1k43csChJoCTW",
  "key19": "51ot7VG7Qf3ynA3EHoKzqX3RobKeEnwSdQ4aSgxETRFoKFXCYfN6iUSJHQq7hzVqe1idUwuaGkCWcLK2kM48kngB",
  "key20": "5HLhG6f98gqfGzSBJ14caPFjRQUqieMrPqmi1VAk1nzA7T6z3eF5tAMCeMBNJJ3XF9ydNK35ipXgh2F33CPDib68",
  "key21": "4KZ8DAadqfq5wak582kayJVuNr329CgHCLKU9jsqTZNqwT4thth2hY82SXXunW72NFBxfd1Zo2c7oiW5C1b5DLZr",
  "key22": "5TyLk9x2H2mBPogKqMgdyHoYEdk1UnLLMahcGwukhuY6mwuJaoxSmQcDoLsVxN28rhw3yYjRRZiaaw2WMfRNyfeg",
  "key23": "3gsDZktGyEnS75gSWqCXbteruM8SFC2UcZGKsF2DPxRMNNPJyXzqJRGEa1hCqZFYJMVSNJ5a5WfCtKdPPQkQRVv1",
  "key24": "5jooEJJa1aUHEE5jq7MT4achX6wxkDL6s4sDkzXKtrd94Qsd24a4Rd3td7hWRJpECYPbEdDkYF4fUYfZdwhAExW4",
  "key25": "5sTohF959nekz1jMNNX3CYk6MuikyYwLYhibxp2WYu1oH9PTAQf71zvmZrrTi8i4wKnCo2fSSrytePY1WA729PM2",
  "key26": "3VeAixuDWMgdZfsAHMC652iFtjyBrzgrr4EndXbR788waGSgpJc3hdUCz7LQWJC6dWGkh9GgBvu49xE5NYMQZCwq",
  "key27": "GFXEJwqgRYkXmGiuoXKcBds5dx1r81uznDonSiXbJnQJKa5rpuf1LYeMXnq7gbBNRRwNz5MiUiXMRv61NtUXZku",
  "key28": "3YF18Wusc7QugG8oG67cwuy5pvTKrTwMySAVTW2UxH5wwdhkSytahTVzzjHSpSMZ53mhZTv5UJC99PrPHPMjMCK9",
  "key29": "vmmmGWQXwDB7WvmpT5ymLSswTNTd1gkpaaZ3XW41pVM4Bp9NdQv9zpQXdpfbGxCm7VApGiu9E8u8tuwjjB3f3M4",
  "key30": "3RENcSod8FN46oaFMBF6KU53umoYSUXH4zX2pv2oGrDMtT4doUXHFo6T3n7LGYzMRwX9rj9ZkRsmTX9B5h77F8Sb",
  "key31": "5rCUHdM1MQ8GP886TtUkmSF8Gb7JauQQMCyTFpzNimMRTLqnSVPVQwM6KqKqBFWB31xe4BC151rkEUHTZ8SiHFDT"
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
