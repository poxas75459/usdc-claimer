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
    "5NwxArNuMCknwejMYwyV9MbUvKBRjfMAbgM47KpriWSfYAdNZJTrYetsZqGDKAqP7irhWvfwRev8LmxQYBCCzxwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zt5gy4GGgKTcy5TgknEts1hAULgnKSvrEXofCqgiydz6RU6kYy4LVc6BB44rPnvqJyn2gmaHZAoRoAakxjpAPfW",
  "key1": "hFBzP9c3bvUrED8N5QLCwMu7W6Q8YJWoesnSm2da4dF8w9QgcC79BigDTRpKZZcSWDmQZcD5n2MUEAZvgSFSw1t",
  "key2": "3MjJWSD72xoY7ym75j9z8BEhGAx7cyM5tHJvMQBwY9WYbZrfeRNVpcuEzSBMLNJoEKyfbZB6VX9Zf4qbJiBcZaYd",
  "key3": "65G2uFDjMhLpSzH9BAx8AwAgHaBRGEifQSUYRBj57Wetusj4m9YB9jahGdLuJUkz948b8qhG1pT7BQ255CJnhKdR",
  "key4": "f9D76ny1bStMCcq6JPaGaTBcgXstMQdPUBCaBepj9xAuMVdGRVWfzqqawXutZ5p4dJq4gMgSy1fwW1o4jZxZBbo",
  "key5": "4SUiTh9bLeY46Ha5E4QnfzDMG7PkjBPpK5ATezKcH8nSFeQU3HKBjceN6wuWnfozaGigJQurgYzTMMuCwaCBbmh7",
  "key6": "285XQJJonV87v92K2jx7h167FLT5UTrtxyoRNuZV65KZ77xQ8QfiBvfgGDmzLP366RE8T4zatR4YXhNE8o9sqaS6",
  "key7": "2jF3aNMLRNjFRHvAa1GpeS7TmaKjmk1hqFoF9DG4dU8yk3Fo8gZjCR9BjMB6tRgGi4DAj2GSANoHaCK8nqqP8ab2",
  "key8": "3bPoLhkA1hsyEX5syTcBVpc9qfWjxoveUPeErFoLpirtVJoraM8SPtFxMN4T5GBKPkSBoWq1tc79W1vZRZnUgVB1",
  "key9": "zLDVj1bsP32kdAmL1P999hMPaRFxABJwAf6Px9SPzr9HPZH5yZcP9bZmQ3fDbsrSjANdNvFZ9fQFpHzje9na2St",
  "key10": "5yWWVFHGJxNTrwCv1UepKmd3a2Efg3aRqfaKxucEXqRRTJkvwUfcYV1763HMnYomfbi7Gfzwetpv45ECkUjJeP6M",
  "key11": "2RECosHmGHUjFKpwud8feupLA66YcmSjDPLHmePtw3CKNmuDNLXRGkzhMZNAHV6oKisDQGRqprsZAbj2NYyLLxP3",
  "key12": "3uEsEBQDzU8y6PFHjXR8TYDSkNNymWLWzZnrMntLnnEbFNyjdNS6c1mRpPNcr78Yt6sxDCxDrWoHk1KyqCrUq1g5",
  "key13": "WoirhqVrjqnhniA4prhseqtg2EMF3272AQEJL6X23ZRaxVhLDvpaCDK48EHwGQxpGWW73G2vo356S2Mwgyhrjm7",
  "key14": "4QAJ9wguEgseMfVSGCyxxWhBGbSejFXqo34b1ekRqppVcT9YkyJKb7ytB9Hu7VZskqpFCMMiFZQupDp3Xm5xrXEa",
  "key15": "w4U8o7ZeiMiEuR2GB7PesaYaSgjtHeSLgDK5QA9P7m4StJnNmN7gXDvzRRxYXnHiVvRKksU327UsvSWzHK7F3xC",
  "key16": "2DzwN8KwMgekzeKCmW2gR7gBx6a4cgjFk5HjxoSz34j2ZMCH3ctb1ynYycwTgsmCFsiYRrrUHSDWS9XXa9w2K7zV",
  "key17": "38gBTj2bCz7MWN8FDAMixj7SCobx5vLGjwezG7a1gK2tq8TwZDTg1hY469LzYF6oaPHz2fS2sECWDCRfdPhyeoBJ",
  "key18": "3DVCcgvUDWPbUgUJuc7UXRGRUpX7zeXbYcdhAKAqKjEeyxQgerPvvUBAPaGD1jsPBGSPVqYGJrH6CWyvpBooAhU7",
  "key19": "2BbfeUp7MHCQQ4VUeVscy4iHRUfNg6pd7aQNo85971NA1R1M4XUPdf8sSx97yV8YCfXC4NnKehjdo38Zem25osTW",
  "key20": "5YD5VDc3pga4Yus7nsfe4djooQ9guvhJ1aeBZk5o2p7Gn6F5Yn2XFzatfw7oMqWdN8be5c9Ez9DejKYke1i3D5nS",
  "key21": "2dLrWBbQJt7aMnuYHF8qeipD3PDjAa3pHR9yaG3QP3RzMxWvRqpaf7RdzV1biA4SHTr3uwtouVACwFTexbnBUVnF",
  "key22": "4oDFUp8uZWxBfJwMAHuwwBkG6bQUbaxLtro9MvPJFm9sLkCrP7vb63cjsuNU31rj9fht6kxHrz2eoxCop35Z81uD",
  "key23": "2fhugKobYLVESF4bCPScQRJKJsfLn3fWshGM9zfkTPAGN3nJ6e5RACy2LhoqdQQCyY7pcd9rLjmBvQYW79P9jzBm",
  "key24": "5AY5te4qTx6eTdonje63otPKWJJX9aWqEUKD3hNTDGKcwQTXDCm46jGKXLPBJ8BfMPDKwr24A1j2XxpTsPBeDUeM",
  "key25": "3Nd5eYV2dgh3HYfoepDVDp3FDL5dpCeQTKL2ZnFJSFhVLnuAigZVuvtjt6snhpz29HbVhykKvUc4psmQFPsM4L3e",
  "key26": "9JTP3tYzL98gSuByogbHjrehppP6wU39z1x7Hk6weDMeSwFQzGk57mNaxumdPwUUCvZucLgqj2sRffsnaWhxNr7",
  "key27": "2HEgJNJXLcSpiXRngzETffPU99xJ3iNPZUjvW4qEMBhL2989fX6it1VpiB294PwXqLH64ryfhoovLgK4at4ys5Tf",
  "key28": "532b68qV85yVry4GNQPty3RxEmoHKMVxSijk9ySqcjPsndA5ohaKNuwsCDFAUSSoG8h7zYWekABDTzpgt9XB6aSK",
  "key29": "28gckfoJp4ZBAjkFSrmhZB4G567HhgBePCZRrE5a8PystVCQsfnMCMh9pd41BnzHoJry1JGD9h7Usz5AxhRh9qkH",
  "key30": "BPvtJWnoCYLFQdXRHyej8vhE3nCzz1j4BgVs7Pikqw159VEvpRJ3wua5hCXwud72LxQmHzYnfBW1VZ2DBCTXdBK",
  "key31": "4TpA8iMe8m1dokLvQyLXzJTvmzPUhRwuWndZCHnL9dPMZjK8zT4bo8wVVRfH8zATDFcz6RMDiW8sc6n7SeELURmm",
  "key32": "hgTiVVxi2vqnaUEGUgJ8pKFv4EX5pqD6QfMQXJB47Bx7SPpmYbpfaR72HfDtBayvMcCT8enCyttkToUGhwYGQZ3",
  "key33": "3Yn1trD6NZRQVZSMxiyWNmmstP9xrJXq8mEMFEHKZLMBtv8c8qCgaVGq7FWbYgnT3cZT1TPT6i3794XgSvzwewSH",
  "key34": "2QGFKEKrXAoLkLYryzTw3mKDUPDrhQ8ft1xAEdZtjTTrq3w41XNV4AD7sdByZixfhQ54i9ZvvC42Da3R2sGVQRVg",
  "key35": "32pmReK2LNzQtbW5DxGHNhVfNnMWawdNjK2DXPReJk8B8KDdqSrRx9Nf3svCQePnJ9Hzv7kfJNBd5nwTtpiYm99P",
  "key36": "4zvXndW292pzVx7T9HV9ZrrXcq9yVYvyRRJoAr1u46LxLZX1kWryLGFneyG5qgfUEwvZthQLUn55AWCcwjXXEJmn",
  "key37": "3dShhqyqPCiMLKPntUesG7mNHa4r1zjcomUGaVo1pjb7HUTAfN78GtNb38XExczQ3WGVLy8cukvr46Mij8eDLHsm",
  "key38": "evVzDfuKUV3abfjdhykSLXDnKAvwohxmTbAus5J8X8zqxK2bg6bZkbm4dzsNcZfyHZeTrSafGezCYuu6zP3mwwA",
  "key39": "4dPmrdhWr145eY4P35S2uD9jWuRiL44Qu5hX322oMxPZ9XZdVJbAvwukZjo8ZWY3nKtKpUHAoMxMEZFVMQFiaemw",
  "key40": "4qoyemAtoqmN2j8HuC6Am13U832ZAPSxCND1MuHjgt62c6r1f8oKDX4PHPJr8K7Sz4XHsE88WBaUFaRL3b6AAape",
  "key41": "3WN5S6VBn7nKhUUvMJQUXD6TSusE7N9FrLqWa8Ri2vEoCkqS9zmnUhoJtP16qPf4DZJLiKH2dgsHQN91rijFbAFA",
  "key42": "3cBjer8Rakb8iZf6WU6oDrentY2RUk45ANxDNsbgRqnXsMAo4Qo4KGAWmFLkqtD9nwyxKFHHLq2RWx97k8MfVrWU",
  "key43": "rCotey4kajEECALGWfkmnTj6UPUAnxfpCUmSCKdRXsVBdt2ciJSCLU1TLzq5JGESaNriyjMQdvg465UYTf1HWno"
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
