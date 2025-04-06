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
    "5YLAx69V6YRd6s3Dia1hgf33uRdagKDwWGJfDGXPZ8s8MWKgaS4BwvZDEqu4auW5jT8pjGNZ4cn1tZnbfda972gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmxDs8bXBa7wSr7GXFMsG3q8zh8poTE6v4MY9NEVWUmbuvHK15pRDDkAf2gTnuDJGiwuRfSEweKu7cpA1eUmMDz",
  "key1": "51qKCoXQZ7zUF1B4wnm6YJJ7koyCKhFYt67eKEuPuqwMV9zZCXwBYb5bYqbHta9zJEm8b1yuGQZq1FbNihDEw8cu",
  "key2": "2VsgARDwhZNAYAE14pHBhJrKK7JZAnScTAfr8PKTntg5Hn83JL2aDb64VneVnonJUJcvi75YNSa8M7GgGWL3PDK8",
  "key3": "5fNrTVmtjpzQFDbYavs8SNgkW5NgnKP11RCc6yJYtzi9zzHpWivKj1vAV2i3YcXvNnAEspC5z6RYUTwCNFdQ7eXS",
  "key4": "5wtJpP6WZYw3BiBYDshbmFmyPjw1dfikNCH1ewgcCc66PzBFpqyNmCdXBJxAFKoSMpGvsAgubrw9S1YLn4Ezsetc",
  "key5": "2qWKcxHhDfE1wokoRzwEwk5HfdSXCCHG2qzxzU5VvzW7ujyKy4MNz4psPTKKu9XoepUy9LgUh7Tb96j2m3oNVa6B",
  "key6": "5htu619isJpD1pRrwe8UW7ww3MKoXVjzWyS53aouEDRmUCJLT3x5tunVAFo39E8CJcaUTc2F8k8M5vp9HVTPoyGq",
  "key7": "JKPyebEhNAenDENQgARpdG1Sd1r1RJ7Af2kDzSRoRNqpSkxPKPHVsRW7UxzZbCnu1A1VKa4Wx5hSdz6Vfgk5RdM",
  "key8": "6s8qJUCoasTSf461idvTTqULL9FxTy1Wytkw1toKHki2DQKopG5HMmPySDQVugBbZw9Josb4jvgQD6JhqaRMm1Y",
  "key9": "4gbBR3mnPMfvaAeULe2fzBkfk46gEKJcHySjKrwC3gePm6qgYW5uFr3vkSbk1j4grNzmb6FoBdQLKzzeQ7G4zLu8",
  "key10": "2gB5Erv9t5NfPWZEZ92ucsvaKDJNEVTEi6krsdnk6yWiMsCiSghCMawgdXpeBA9cYBc9V6JTrXGwPsHC9urk4XKP",
  "key11": "5kcjfRVmeSXSkNUGeWashjLj8ueAb96gMoF3AoPmbANtjxfwZ6czJajrqWRZrP7esq52skGLxKJALf8WxvtFAcU9",
  "key12": "3j931Vj4RwYDhxkbpsuFtcFKWuFBCqthgUSUkA6ru6nGU24iH8jfEJwwLAcFwVVcgkNELUJWj6zFhpVGYxv5GhBw",
  "key13": "5xcdxXgor8UseQndNcrqPY7sP52XYcusCUtnWHyGJdVrCZKsxFxFexURs3kQM5J1ZUEQRXGrmxMeYrAmcgXn6reG",
  "key14": "2VjFvqMjDvTDh7EWzBxKSPEqyryL11uZzaWSiWY61bpfKoqjthQjbhuiCDmwyAudgKizZ6vGzaXh7wpAVm8fwXmB",
  "key15": "27G2UvdxhBXauEntizpeSrLnFp9GkT1HCkMwuo1rm9yRWegfgrRTPYjgoVCywSfqhjvtvvB4RMA46pyJK3duwqay",
  "key16": "5CEYv1hN87uPV46KkJd1FsqqvKerMMbL3Z29tJ75pqziMnHWGMePFUWzV3wVNatbsos2P6P8uTRamYDD8roPdvKX",
  "key17": "4gGDA4dfmVNFXXTsBgwSAEZ734ymvcuHMcMnndaCuWHryjGa8C1xvNYxPhSJEQhxvu32EC36LHABZFCjHB7Bn3kx",
  "key18": "cRLZoXKU4cKe8cyUUtFb9iySKsHXEtPmbDqrDo93SgtTaCUNowpVrg66483vMbsyhY1Uu2SHTgUy4Yp9tMN52rC",
  "key19": "2gb4hoA1SAyM2mhpD6ATPNmWegdgEbAbawYujgyar8r28HgayPTDhmqURZNF7Ppkb4E1YG8gfUHPg6bchZvNUUqE",
  "key20": "3BYijZd5N6fDbYeCft1Y5rYL9E55Dc3GgZFU92P2gjR1Whk9aVoZjWVu66znhzfCS49Wha8vdLqqu3WNQgCQ7xCS",
  "key21": "38qPmnhQufqSFjFHShTnnueTByvx1btT65woUTVV8bu8561goUF7GbNkrw7vsiCvunar81ftQUxZ7D2fEHzAfFKM",
  "key22": "fMd8WYC6yoYz9texmLedb7i33HBnwxyHu2Z8QPzLArRkVrUHx6QoDMtfG13nd7ueaQP1iDvzawAdRF8Jh24Jwna",
  "key23": "5XuXbqAwVcPyMfHeXZAxvHmtVR1Yxu9FUVjR3aWCTr8GuHKuvsZiAGxRaWSavddUpWiDkuWreAtR8diTUJpMJyZZ",
  "key24": "2AnQ6eZBU98sdf6zEL4fmz6FurGYeWt3wq5qDzXriXLA1m3gtN4Guq5ynv3o2PwEReXMNs3A8QSAcuH2c7HJgyN6",
  "key25": "5Wd3gmhccGCSh9L3orzCwJoY3H2R3R3BagCSDapYobEbizmyQ35HBW2cdhA43cCPemTA7iWsgNw2LsEphwSRXnPd",
  "key26": "24zZ4ox6cXUy1ziQJ5ciodEDtqjaPQh6HKkozbqFb2GPtaKPyNcYCNeVzCtuQNSN3iCkEHk8T3NxZ89RuvGMK2p7",
  "key27": "mMjGSnMq5nLQXw1LcP4E2hQfYnfShqUpzggisZ4ySvxFBQbxcwd5Sz5bzbfZt8WNkeVGk86MPrmxPWQqzANbcLR",
  "key28": "5sCsD1yJANKPFRMSPj4BQASLfmGYynhSTn4S1iJFaaZHXAPYjF8DQcJXaxn6QcopvHKgdtY9QDvqfnJ42D6vdDcB",
  "key29": "4XYWvvBW8C2nK5XmZ7ZtrQBA731W9JQUAXoNZFJcQa47brQSByz9QhG1NE1qzfL2MZ4x6xg91NSDRuyXfz1owJPx",
  "key30": "XtpsV2WLanytWA1iPmyJajehS1Tq2y6PaFU3eadXuYHSYMJUmZUkk3WhC1HEHnqxgSHX4PooxJvLSjHPgvRdeoF",
  "key31": "3Z6YYHQzBG1idbcHFjsVijc84AFx9amHwK9qoan5utMJrYsrBKAQ81vpF2D8wRbqU4TVbgCWmr5kcYWh3kfC8ECk",
  "key32": "2PzDW9UgVUrWhFwyw7voZjTau1sLXoGTGjbiTNuKuZHCSSUE4bP2tEW5sMCAJacdLtPSoYJ6PXpBxp7bSN9a5d4X",
  "key33": "3BrgnviMx6GsA7F12SE88eJ2N3tvsUpTEqUZnKUrPa4MPaFoMVk5P8zhz327FPvzaCM48JwkHoe2UExMy1jswrKZ",
  "key34": "3yWqCPBhRTt5TxMM3bAtRPPZxwmZXeMag6ihxXcWEgH235wrxdP2tnTGVdPmNuiiy1s4PrdTP6Stmbk5WYeFveAN",
  "key35": "4cXEiAsjnESExe7zRnoLmfb4HTQCNisQk5FAsjxgXtS1PbtAX15xn46rwdR7qASq1zygAU51k3dW6bEKfBDAJHic",
  "key36": "2SKARrMWXj9dqFBFRdefjsYvgoEwF8TQWX9nxE83oWiEobNMgbTmLfZHcZv89US6m3JmY96qhDRZpM4S4yqsatM2",
  "key37": "4u7xvPvXMdt8YNxJ9qVBg1ARFLeiqLQVQYXZfMpSik2xBFo3h3gLZqN3c533yhg5CrinindKrpWxedBWsGVzxiGC",
  "key38": "46H1DQWCbrjKzHNVu2V7nhmdh27w16AFGp1uNNkPPP9ycSsFUazeRRJa3o6MUNvkX2FbjsE1dZUbKqrDe4xEEGJk",
  "key39": "2ACvV2eJVmhLnZy5ozUAiNR1zv27SoxyN4kFeMnXQ3TxynGRhqtbEddCPfjxxxysHrTxXamG9M5ASWWrNn4uB3gk",
  "key40": "3XmtY2v6EBat3fzGGU6yUk7iGZjmkNts8WULjytz78DP16Msx9AeUuzPWA6JkNVJR9ahSdVA1vWEdj9dqGjC1Rv4",
  "key41": "58AhJBGsS8HAASSCqvmr7QZy3G12K6nVudUVAcnHf8p249v5U8DNHJidK9psR66Jz24u8p1MftUyPU9E3MuJhmD6",
  "key42": "5PXEXBjcRrSG2uX3KKRwX33344LUf6bFV9GkUthkwvpbvdjqfknQ4qQhp4CS4KjpQDxqaopCX8wH6H7ngFBEfjhZ"
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
