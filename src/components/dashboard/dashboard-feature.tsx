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
    "3WEfv8ZSf9DWQdiyr9hEKeQLKQ8HamEYs9W6M8MB2ZJrP8MxPskKcxpNb1g6Mz5KsbrZdNVabat55Asei2fB6txm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAZrkpPMLap89QRYVZFfrDnCVGFTDTJjuXG7JBskuCiP82T8qS7tEwmkxE6whJNMPrMQxFLjrA8hbx3zwnZcjca",
  "key1": "3LPgxrSu6kw17onCRQkSyqyJxdeE9Fzss5h7rxLH1ZLMpnWC2ouK5XBfB8qa4uKJQEFDwWRi1ntno7EXeF1Sf8kZ",
  "key2": "4TRU4MzXGSmZxuyrM9aNnQgZAWyStaTQgdJWPGCLc51CrirGraM3bpCqs1sHEAFxFF8RzVpQcPMxQahVbYwCLxHf",
  "key3": "3XyHBKH4hsG7qakqvHyRdj6v3pQHXPQLRSKCfqZYGncyf4WL6bF28VCwxsgT4wogxjCZfEWuRo7CakoCkHAPhGLd",
  "key4": "4x9wiZwAY9JndvDyQBYro8C37AXSxogfDACqbWY3HQBbmX81acJVU6qyfpmZT84Z1AWbpGFbFXZzAQvaZ8Ftzrse",
  "key5": "4N1e6zSucojYMPYwL3Ywptt1ssT2D7UdmkQCuToZUGM4UVmQcfVH1hRQtj7bPvRK8bn48kR2ZsaNaGFkRmJ4cLkC",
  "key6": "4APMNdYxJ1duek1gshMVQa5FDPFJcCKLrXo3v3vXKar26mX4uozvNJFFQCQpoNvwckKKhy7UAbH5GoCAuzte9pRg",
  "key7": "5ZWd5AEiTKZXTRrW13VE7rQRP5Q5VKpUyAHRb6hC6UxzjAeYTdNJj2BiSBR1X7V1DTuSJPHaFCW6RaBzbmfGuxVa",
  "key8": "5MYopovX7T4gsKQX87wcMeYbxKRbwfAUaeJZ72FK6uXqVAAAjWkbqdjYfnRDhejKswBUAt9yJ7Txy1fBP3uMHRY7",
  "key9": "2cJE8bxj7tcJAh1rEkfCoMdEnCRrymCignvVPHM35WT6y6iXpy9zMEYgAtbfqCE6yVT8hsjFumMGLbhRuqvMpU6h",
  "key10": "Vm4MhmkYfhYscycLcXxUmW6mgsu5fw3fCLrYeUMNfQKsMut5sAS7MxuBbZsSWDE4cuQvnQt7Z96j6QcWpAxZkiJ",
  "key11": "jUDPU5iTzGkthnYfyp2f1Azn8pwyQqWeZiofdZrHK1KbprSzjFYzJcUvGpf1BoiL99Rf1hjNUd6vCf33X3ThEvt",
  "key12": "5kMcjMCngz88CLt9qrRZicCg76owiT4f4kaaZX64VqxNQRTkiBqmgvRDT1HWwMhAkF1Ee9xqqbMMqYrwtGiGMLhX",
  "key13": "271wUN8qoAjczu8JvdjbeAxHdbUe6vyPi4je5ukDQ9X2QNRN511hn9vt22uNfft1vpKNQ1YsoiAY5sh4ttXT8gmm",
  "key14": "3pT2yEuXJrwo1sbKMviE5bxh8TDASERAwEVKHWuw2DgfdxYsA8Rtb8NVy5WrahtZuLw9SGPAS8bVMwpWApM77uyC",
  "key15": "55raL2jWSs5cpwHaAyGfa6QNGvHxtdwHwwtuRLKyvLDzQ8yPbZeeLrevsRBzz244NnGsaabFHGrKQQ5JmtoaAvtR",
  "key16": "5oseRkkcxpVWhmtseBDtsoQ15zUDF14CfpGEZJjHy3SHKJBTT1QW8v6uPAwVsgMozqCE18vuXrBGrh4mugWEqUT2",
  "key17": "5Txja7BY3nWSDHaTTak9DoBMUw8B8t4GjHiPc8ARKyAtFy3Kfu8JLkXVLeCmd2u6p3JY5tha9gwV1rsxQ7FhrMUL",
  "key18": "5auwuerS9jKNLvRVisUvUxiyQiJesHPRKv655s4xhcuSjDQGasLHv9zB6cMHvYWVX7RRXkNmTHPuUHvN2NgHZcSt",
  "key19": "2f6dJJ6by2p5g2VKFu4eXXVJKneNxLbkaoSzHqMK7K42C5ZtyutC2G7FBNnSwQsrjz5hRgHVciNvuZhuQ9Kd1WLk",
  "key20": "3k2PA3AbDakaT1Qn7fZRchq3sggryWY5rLgv6FREwGuWu2gkbKnfvDfwiDotCgV4xiGUPwyoSeuQG8VUxBhmuSRb",
  "key21": "iypwVRnhXQQPLusXSX1w9nyy6sjkkA4iL5f7QXWTr8CcxsdmQrCoxh78UWGgskwZ5gz47jgHK5ducQGTJ6obZ6L",
  "key22": "4ejRz4yTW9DZ2oTPgHWFvEdY3SyfZngDuwhThKnLhsCU8iNTJEZGxG2m3pNzSoCXJU6wQsp54S7xSMAH742sLTJW",
  "key23": "5EpgdRjs2q61yfend75JVmm6y55vzDHgvuFDE7zL8fnEP2Wsq5XqFwXPw2q3pHY2jCmYAkNi2XjtwBpyXj9CN4wF",
  "key24": "2CiMWuztRT7563aDqDYpAg4KPV9jaF2DtgsmteK9K3t4H1uiQ8UMePxhuP3k4pxty5NSYFYZbryj5DtiZ5LoYAFP",
  "key25": "AcFPoDkkxjCVrHjGLNLwqZoFJ45EWLCJErfQJssdHn3gkfwLuzeLPxksFV7GToNBCKm3ospiKcDLxpGFTokxcjg",
  "key26": "32qJoDH7uoTypBkqnxapFWYkfAqbry7MzcHvRSDxeAsZA2GyMwRR9pn2iToqKkAKt3nJSRaJB3yzLBhUxw4wR1aj",
  "key27": "43AuqmDkEFj3hxpWXY55uR9N28cL9gyVSwUqnJ21cjBgxPk5KuFDk58WRZMmGRHWRs23DvNnggzPBtvD8G978PNF",
  "key28": "2DUTurZGw3tPomnPhmFux7kM8g3FS3wtwy7AdnGWgpkDUchCvhfzgcVtLd4dbnBwa6w2yPhqxZZi3Get2Gj5ZrTN",
  "key29": "3WKcW83tuBzNMBPPoma2ULbQdDJyNroydCExYqKcxHzAuGRr6KHypZQXbyKrtD5LFtwKgmc9kBRA5bqStdUycrRM",
  "key30": "5KHrZSc7GmwL6agvQ3FFpQuv5NGPMcNSGkEcFTiVaSvzbFsig8bKJXosjieK6rMTXuaTMgzoPmYv4n3haaHU9AdY",
  "key31": "5HCGN1idDkNvDV3qZZrpFFgQJr7mTwChWPon7HGs2T3YmhVYw72h8JTqh3GHoX6ccLeskDUPpUR6DwyeT5ic4TQp",
  "key32": "FRpqsUz9ViE91wSYUr7uuJ26xjcW6AgNKuEjY5KntDaXz1kNVKGkiUWagJEy9v5zHf9CePF7cBQi3avfcMjfToy",
  "key33": "27xT3uTa45nkc2L6UocgfoxhwwzuQRUC1WkWGbDfQqidAhJ8fQApFm1xKtfHsbgqUZZD9oqeGCRVhGDDrd8Qx5zW",
  "key34": "2WZsUhge8qcXFqn82YPMoyn2tW46zGBGUFHjqDQt9CJ7h84o7A2ExWDxAyXUuz1URRtmgSS9dvsDfiP1EzmFTLZC",
  "key35": "3bznBL48nBmEtXrpP3XgSoYyyrewUGkkoC8KcWKFLMZe4TKx6AycP4xc1sbC3y5R3CkZM6w7WTB63NkpwtBgBxyW",
  "key36": "2tucENnY1YmjUFeT6ooav5fgyBGpeC68jYwiesEkQUYnKmmrgHwrNJ1siEzi43EH64Ju7ctUwWqnK9e2KZWxmbTM",
  "key37": "23CAy1YVXF1AcnHdaqKUijbJEnmrWYxuWfoQPmRUZQFXYXKYKJd7y92CkLimLjrjVJoxhBvVQoT6qdzVRiLtnhy7",
  "key38": "51JB3SCm1WSgMYammPBDvymt6DNqSpDFzXH59EGorXi4MWZdq9ggWSCCRepPKm677j79xPsUm3YgpTiFbAXNHZEq",
  "key39": "4nE91zLsdZ5ySnMbgHq5y9AXxq3bRSySzuDMMd567kijKgoYrpwMNBtyUyZvJRNgXw7qZHbyqYNTVrULVPjzayNm",
  "key40": "QY11ieGgHxwXrdgFKYR226gCacMzBHqudtDwfvCNywVGpVkZQRrJtENZFAY6i5cx6VDuHJ9NwiSNYqTfcacPJdC",
  "key41": "5AuZ3BFaAd3WzkLKFyWA4qhFnLpCps7iBGRiy4gLpjFdq7YdxcKA8y4oFY67hNwkaEBu9fRQLYq7p8RQFmxwrGfy",
  "key42": "4p2gCzMRCWbnh1aDnYBty7nbFe3WaXHUk1XCTcdJjw6mAF3yoQjrSjEyhoiM2TD6vxFYxaeGAA5CL77L63uZoNtM",
  "key43": "3oKjxwL6kvxSw1MtjssySLErStLGbRjvqds5jjT8vaGvFuC1pMfWmHTMcPntTZRt7icFSuyks4t29Uw6yvzmCXTd"
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
