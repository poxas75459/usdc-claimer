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
    "af24Zi2QNshsDVrp5Mf64DG3wEakiTzrVLwVGpxXprmyopMm8bpdmVGmNUtqCtndZ9as1HMTz1P87G4vFJiPdu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqn6mYQohjbANTSqnHVepkpaUvNTUZqNGec9GKHq12kKTbWi8YTTttAndBdrp9dtmjyMWFDfU2zAbyxC6fKLE4U",
  "key1": "iRd1Qa1k7NojQFfVaSC26wnJg5W72iJ2t5oLVzFnTcC347YfRL2CycjAQLCeyu5TGh6VPL9VZoyBnbtNJsbLCdQ",
  "key2": "5oxcwaML7xV3S59RzRfJrpnbA3ZAwLrnnCLeKrvgxo4F9fTnAYKLKh1gREPGVczW3Y55ADpLdcVS1sNuGNsLkzUx",
  "key3": "3UEmdK2X7He2wpNQvdhXDyMTHqeitHQymAywJwDaAwECGr1pLVWqN8QwnWSnXBEMrM2CdoKG11HdtLYibyzkPGFL",
  "key4": "qMphaHTjZx7nwdXgx1XiGjgoaEksfrRpBtVaTjmqmodxWyKfda1JzXoHDcnkg4vePnTgr24YyfX45yUswRE316a",
  "key5": "X7GPUc94TKbYHjaGgTN6dsCqnVpFfZu7yeABsyq7BkWBD3Hi7PxsLmXBeGjpN8v2yrdqVHwcmcFrs2mbpXnChUD",
  "key6": "3EZ7NsbARaTNx16Da6DpNpgx7bqzGQttinn8XXwJJLPCt1yGnx6bqDePJkoBaW92U3qZXa7Ba8TEgEDKXCn9QrGA",
  "key7": "4kaQuhnUjVkjVo2awvHhdSHqZUPgzGt1tjHs9XW2FKhAHKTnjk8NDrn8a7PJqvUgEhraBiNZb2k61PzRiuA2SNGV",
  "key8": "sEpFbpwZ9LDv7yEaspd5L6MGjvrVVPfb3idf2Lj3ggxsg8CyvjQxK5ic1RgoYyNJZeqYWQ1F7vTbApxaujKht48",
  "key9": "2DaMNFHGjofWGyBwhhBvjpNxvPwT7rPa2AthjakgQ787y8husftavXbz5nu8F5hbTV2Z9RvVM3Ei7oXNpaYeuooA",
  "key10": "3guM4BBRFjqjAkdUc8aVhpv6bnejHqcNZvCgFtZaMfe6AWCMf4H7B1mgFT7Znq2DsJrWMKmSCfbJqgY7wWB3tPWQ",
  "key11": "5FieumD21T9v8UMMNsALHZrGZShirpduetS7y34vZE6fA6ExrTwhjHEHuEoGEqPZ3uDocKU3nwUueBnSiwnLAGVz",
  "key12": "5wTMEk9UJtjKPPmh29pKpphUmhznJVoEfQusHGGrgeNpUHB3zvr3YZt6P6rFPUyz8uWsHRdHpEkDgYdKDWoanRgm",
  "key13": "2HQMTEBFZkRzngzz1ikAZRXhCuRckkNT4kDmzNqMe8LHKTRTqprS9yyvaNp7jzyQQCNceW2off5fMH1Cxye4c8vj",
  "key14": "54K6rSDPtt42oM74DmBBZaAZUtd233pAXdh5v1WVPSapT3cJf9QW7vHQahtgddtbG5MUKU8964JQhiB7amyU5jyX",
  "key15": "5hGtHk9Q5WCtvQ8vkZQstsS66wL7Mpj5yJ9ewGVoKG27iYtu1goqyYjbo7unr1KWBpVnFirmPN6b3LMWKdKr17sZ",
  "key16": "F3zrjdkJReA3NiS8VN579yWMRHD2qebwhy3Fa1dmNWpGPuCLXrh5M2tajnQ95C1K7ftNYr46fSpACUEVt3qSaZ5",
  "key17": "2mVCpnGbaYv97SSDfNk6vD2FMchpqqKZnUDqKcu181N1Qik9yQsRi37WGx4UGg4AF9nd8ZjB56QKxbVL2mwVJt7y",
  "key18": "4pKV9mpSM19Pp63Z4BchUGwhnn2VZtFFxChN66UJs99bxABsAwviqgmZMSYpM76Ji8kgY9yrid11mGYrAqeFBP6V",
  "key19": "61FrUzcwzcUZ8hLRSPtwqhajYq1yiYdfVLXvjnFfLcyP6A4ovqM3mx7C3mes2uQyEuyr4ucaZfAoeFr67ZU2nbe7",
  "key20": "3GRj3jaySNusKQ8PfRYLkSRBGkZF9V72UVivgK9fcMJy1e7E11FhfvEkxSByKDfCT9kBTUoegdjwtHmckwRmEbJb",
  "key21": "sNheNCHgWEDKo3Hbanz5gs2wyNM7n4uMCSt1oXeEh1E4vqG7jwB3zSMuwSWMUhjW9y5KG8B3a5fyiBhyoqkKhux",
  "key22": "5DxaBUDSvjCvmjdge6dwCBuwCaKt1K9LFfX9RRQjLMzcYd6yo5JEeXe956CMifx5zECbXQSJ1qM43kz8zmajvpC",
  "key23": "49sWVGwgySMkxvewW4QDZNLA4L8r67DW2Pd8jitdgvtnUa4z2482ZhNuRQgFQ4AVMkf4JtEUNdw7b1BiYAGiV8yK",
  "key24": "5PpTy7e2FL3gLh2JX9aN4jS4sQUiGR7XV9WtgRvvKmqzB6BVwZE7o991QvxoKbmpKfMe6wC1tS5Be1jPpLi5hDAA",
  "key25": "94w9XdwRdHbmbjCNup5SoV31Mz5Fcb5BbV52TWHqeTovvvVwuauFCFU2N7xJ9ndwqDzmvFVzwZBqcY59WXQDv1v",
  "key26": "2mmKLdovH9njck72QQpLFAm8Ye7e16cwPLtMURprRG3rF8BhaBwWEaKBa9jqnPsSAmbveBGusYxUYEbqthcL7Bsz",
  "key27": "4mftdspQF8bmvGayMiPr6hwcdAjrqeH68wnc5a7hSSLEb2wf51JH6RPnbAYqvz8AAQURMv338Bn4F6tsYhzdJh4X",
  "key28": "2Zjcfw7rixipNSSFGea4yXbuRqknNpzr1kAZCXrHXawpZhQH8MkV8bR5Uk4NoTBSLfWp5jZRzraUmD1NH9WATCYx",
  "key29": "26ueZFmErDrTczcfvhz9NcR3CX1BL47pGZZySYKnfCT67VuR3u2M1hRQ2cPDkVSUBYc7EdL2zYWeuF5dFVA59CLW",
  "key30": "KtTRj5gNr1Mk4MvzSySd1pqJBfbH8beVeqfU5cMdaJyn7rLnYGbd8XsgJZmmauG9gneuw1yus6hEcPbddS6SR1n",
  "key31": "2MaM3HwE75s6gQSWgJYnVYkXuZUYsDY4M38yGwdHwLobGVewAfoYVkz6UkE2Hhn9qq5qnrcg2syhcEWjz1NhE2J5",
  "key32": "4JpaQCtBrRR4YXVDhi6YSj1UkS9MTck1sZ4cjBA39oCxNroAqXcz8buVRN82XnQWCMKC2ham4iZzBfkFw1bhA4u6",
  "key33": "5cSHX5rzHKV5qMWCHf1NG32Pmd63vbgQ7TsCNZRFLr55eMZpJAF5vb2BZgPT9pyvgGa423ysMnkU5tSjNXMNaJPG",
  "key34": "65ASTkwU3jYVKZSH8d5ybgYvemT2xk3SByst1SYPJ6Pk1ez9Y9NEWhfXSuWoEtdNyVYGRhQNqz1Mk8poX4zbG2S3"
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
