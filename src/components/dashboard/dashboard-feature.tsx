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
    "vrCeiERv1PKZWbUFGSZFsri5vb5rNgqpet3ir5AgzHZ4pLphZammTSji6CKpfsvonrkF1pMzMft7C5ie5GtoQYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMbwLKpCuJ9Z5AGR6vpBknrsKKkjZ3QXQJMrLUoPwNpWbepCjSwoqxxV6dFhrvZGuJWi3DCcF5eESh61tNx6U1b",
  "key1": "2Pz1xeNiMrshYSSqdrPr8CwigojRjkdnW5XkaiZ82sRbf4FRw3gV7uqEsbQygGSdvoeezUQ1Fu8sGFyKKNpYtW6A",
  "key2": "2BjbJfwJSBjQzTBv8Dt1NYQLqkw28PWkTQWqAAgavqrREaJUL9M5AXAVTTNZytPBGKGEpDLM3ZALY4ZtSi7M2fXc",
  "key3": "4XASRRzjzQNPRsosBYggqEs3rVpYVSG5NfcEdjtVwwFteEXwYZk8uJNjMqUpDwjPRxavygz5J6zzFrGy8PKGYoV3",
  "key4": "5dpKU3g1bp4F4yTx6D6B1zQs5WrceAN9t9Fk8nrk2PWpXM4U8Gm7gDebva6cHkNSdTPdoFR4q7hCuZJemiSmVxsM",
  "key5": "3zMCXhopDVnagHVvCWBW6EumR3LpkcNaCprLRf1BBhpdV6865MdRnWA3tsdXA4hC6TBrPKfyh2916RT65DamygEE",
  "key6": "3DftFoz5xrPn88ndZMoPrRCaRSNvWrEDnbTjfJ8nMa1vkqSbaEHXQvx2ZvjJaRq2T1VvzqdJNP2expEF2FNraYCZ",
  "key7": "2AE3jh7HeJyXXn1fJ3hC2oWCzHsGMJRuQoeuFcTYMgHQRviiXyTf5vvcZpmpMvzCgTfgJszkPQi9Nea91vYSfJrG",
  "key8": "Fy1L4ZvneM9KYpBVe1j5WYHkpVrwN5zEpjyNt9ACT6xK6TGADJrR8GN12b6cDAS6Qtp7E11hUTaAfvf5YoYpAHr",
  "key9": "4akaKMyWqX1tnbC2xCYQDfjX4SkrqJffC3ksE3CxPLBiYhqGnt6JbDTNkDNqCdVtmjDDU58cu8qafnLt8AuZLVV9",
  "key10": "3wetRgNbUbAf6udWASd8xZxEHBiD63UgVm5rh4n8MAMEUi4kGtdA19HK1zfc3p9a6PfEr7go2fViGSnwKPqUfcpz",
  "key11": "3JtsHhkgrTEbG6HEawtr9BHMXmz3MB25FsBH36ddQAkJxzDyGG25qNENYzNnjZp21sFPBg6PBHqYrU3ArPxpT8x6",
  "key12": "JE9umZ5jz36S968QWraTu7Bmu6oaawduVw8pEspuD6TvCRAgNmVStshmDoUe8YNW9stLuBdKjRfFvFV49AkEYNN",
  "key13": "2nh2Sv8wURnDUDdJeLwV1YXGx1ZUmd8ow3JdJjgUwvTReLLtoov3gf6Pkb9tdEXK2ECVgHj4dK7n8r87tZx3cxuv",
  "key14": "2u1n3X1dnwi5JsLpq3mGq65wU3AZgzhv9C5GU1BG7neQohR4NLAvXWhutRc8Ki5hB3WA19u2qqyGR7rCPp48KpK7",
  "key15": "38EPQisiTbvofyb1WSBKLVifeW8nRUG9c9xQFZHMBghjeAvC48xivn89ccjsj4PUtrTpzU2jLcZ7SaNQGH6dPCy2",
  "key16": "fUVbW1mVgxyMevEc9xqRXeaDYZz7cHN2eMhWCpdR3JVuUzFBSYhd4bcpDqWNuvEbGzhLaaUgAKXXceRqXsQtpZe",
  "key17": "jAexsDKUsf2brkzQNBHnazeP4JoMTWusLRzHN4y4NUjSqn1hAkuoRt4zzpSEiGo5LZtdZ2RzBRVmuuEmBLqGugt",
  "key18": "5poV7tMPQVyVigPM9sV7syNDqZG3JoRTtsb88FAKNcJWsrh844Nkuyd72kyPvagGfFWGLBYJ1mE2euqSUqV8yWU3",
  "key19": "4mR9cL63ZKCeaYTFVb4MMTNTJiuYg2w7VgXMTcd1WZiMP4F8vC3rjNAyfwdmh7AHFajcY75i6R5Q3MByFx8WUQ8g",
  "key20": "3puS3QBdV3dWjTfEExAzDd5QfQuqGdHB59kuUsJDYLsxeZR9t9DM1okGivAPmk8bXNRnbnJVpJBchKSnnKh3Rycj",
  "key21": "3ST1PVrzuE9TievAjDzRqwiq81yHYDtx3q2K1mMNVDL9knBPAzp5PowkavpYaCAtVqKa4Rwsq4xohKXg3mXiGEJW",
  "key22": "2MXaZ99qg32PSNi7qXprUyA9AoSb7vppMENPvRhmoJuQnxCttDWAmqwF5RGWL7fibnrfVTr4WwF1xDrRuXi8CGCs",
  "key23": "4RW8pWPZqEGDYhMBWeKRbiHigdSvct4YWHSu8pT1EMdUu7sf3HMijmThDyxrxu8o2CduGEz3bg4pmoSLjPkxAJqG",
  "key24": "5aKVgXxMH7SRQvadtUv9zWy8jZfByPD4CCMYwKjA5NwP1nhEt98HQjLWQ5n71A35jZwCc85FWwof6kNWPiY1BYhE",
  "key25": "WR9J2EtLwyXUDnAaSvJh5oQDuuCHTyK91rs84uTEifNcQk1CA1kj21GM5Ber63YHi7S27QiGAGgNxhkAnRRP3vP",
  "key26": "oJGBCG8eVtznvsCMAJZbMDxdmgkJz3dJCJEaRTP9aCHDzcyq5cnwX5ecv24kmiEJwm6RyRBegowkk9CcKddD4BS",
  "key27": "2FmjDV4dKwQReJXS9cKSVtQN2ETRQh7UQRMhyNaR98j5U3TjoQF326Ev8SUhcCHGhdsXgSBkushfUPnWMqyxFXf9",
  "key28": "5EEgBbYoEx1CmYiHdiCbLRraDCAcQCGyEwJ6HCzBNZLpdJKSKSYE2HbAFCaLdogRhitrKDeqqPe1NgKzcmvUVdvp",
  "key29": "5FMqRRW3Ptb9egFwuhuDEgV5oQZq49Ct3uxmg3SY12exnYb2G6mcTbK3Yt3jcDPUynoFGsCvkBHknb91CN1Uc2na",
  "key30": "3LfHJscAcRc2V2n76ZZT3ojKpJkvpRYjDmGVWY2dcyj423Ch8ijHG8ojLCu5CF4BptkcnhxutJJuSywD37ZQbc2A",
  "key31": "4xYdXrvAdehhyFqeQZpoNMDx4ANBQJSQBQV41LbDLBfM4ckLrfJceKcaiGXQPCWXzM69BTm5Ya9cqasxgN4NTybw",
  "key32": "3c62eVjhe6LUg6nvMR2myhMn44VbsTqE8Uge9spTWn2TdVLHxG9RAJqef4fx2GuFGqxf4L3vn9V99yVtvRRgrbYL",
  "key33": "3DJLC4gKjUTaYKcxXvgH9nZyhCwcgkyp7s8pcsNUWp3or4fzM1WoDdD9trurwjVrZ5f7qpGbSrac7P3G4zHXCzTQ",
  "key34": "3o995QwfkwVB4tmABsNn9rMFfQuqBUCvJUpdLu5hsnuFJ2V9457e5Ymp4ytScxQQBcd8arvQgm4ZdPZoQGjXQWa8",
  "key35": "cdc5Ez4cgfMxrHqqv3dGqJQH4hsNCV1ogPX8EucZB2jgLMHTmj5uvNHPa7Lhe41VfBb7RLmtXYouktJR5UKpHBG",
  "key36": "5YLRiUzkeHzCM8tGHeANyJhdJmkDywPVxFr5aFo489bnNgeLZno7vXqVkk2gSWwpFPyytzzu7zTXCiFfGDTWfj64",
  "key37": "yPgZb3iLTiai3k2529Wor94aAyEFbeKT61AjdgcFcAxDiTrrDCx9Kc4BxPFCAeg25Zu8ctHY2gCEznMBCqoEsuz",
  "key38": "Poi9k912A5oD8voRkdvYFkTYdHNBiouXidaBjtd1zUZ4dFFM3oeqtAEW92sYXz6cyyMsvBjzYCbGu9pB2Luds4C",
  "key39": "4A2MK5hhkgzDHUQeAffioKjgiyioKVobGV9sUMADt6LPyiCyPGZzWUQEq5SqebuaQcAwSsBk98Uo865y5wDnNi1b"
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
