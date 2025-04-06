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
    "3QYX4pv6hgctVhJwxfkvcCaEZNCCnCZhefPuyCdk3sjYKMp2ZbqDwYK7CSEZUdxVsPnQJCTqDYDKtJkVhktLZed1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TfQRBDZ1KJ6sqTy5ZWDd4E3wguHsJpXHZvwmYn9eHNe8w1DKDeD13nbLPBpS5CXruvZ2QZqnb55uFJHsgxU454S",
  "key1": "TVmzFX84XCxT2PmzaGdXUVDTnpuynX4TY9x8KhZCvywSYGCdKcrP3sM9bPDgym5nsnE7bsEi2b8o1wmgDQPgFKQ",
  "key2": "55HSsX9sPxVSaxeAippfvKXXDMaQPSAQDVdoWkLiePKftdTLg595814KSX8hyBLTi7vpt8Pk4pf1WjH4oogyBxis",
  "key3": "WbhsJspMuYYTYvUiBj6koKXdNnaFwr3Se9ZJ4Xs9jLqcRGHgThHwwFmPxP3nTSpGGFJQWR1dcYZC3Q9NjReQec7",
  "key4": "127fP3yaTtmssWPELq36eZPKkWsTQdi32S264X7fzFgsChDDaubQB8izaommrJ1S698bndTovfeXVCwsrrtcey5",
  "key5": "3BGzy8kbkY7RsCaHxA41W8x2pFhWixvtUKNrGFeQEAUP3WBrrB9KJLUrxvxX3Pqf6Y4Gp4Ta3kJxvAa3YYQaMLrY",
  "key6": "5tbyjxcqAQXAccSCwYG3eCQAXJA7zgFRMJW6B9H2BFsYqurvAHYFr2btWdY9uqLLDXtvXpGGw9aq73Y5ewdyE2WS",
  "key7": "4ybLPpJuc8nFSiuD4yFc2JpUoMv8ZrJc6WtcgmHS6zkVqnEaUJ2WoKhAiXCuDGrs97xKPNLsW2RTUYtPStzxfKgL",
  "key8": "3iQ8YTiyGEf4NRA6Y8G2RoYxo5kfigcg4Kju7LBc1bjihdusziJxPDsd9xJwwHsgbMmPP6zWBmau1UXD9xS272z3",
  "key9": "fbNHxS13rqjhk3acaMHJD4iP2wboUktxg2VrmBevE1tdVP9kgFimaN5oUb4nicnrnwHEpSG2FP9QZQZkkCzhqnd",
  "key10": "5stacsuZfwWvGmicrtQ1e1CRpbs68yrpn12r6BAyGehsjyChDc4dgVttDgQUxDKabAXZXmWPbFuEVxnQ3CGJdp9h",
  "key11": "eQ2oavoszeN1tEGqGR6XY5cxcjsMzU8yqojTuTEHxJGKZ1PGcrSNJQ1kbonAmz7ujjnB9QR24nTBzty6bLmCroh",
  "key12": "2BVdsFhFVQAaE4wzwYJCN1EsD2SQymCGsWQHh5XhQ2MrpW2EjERzYunjHbSv5NWj7YVoJL1oHD6RcP77deosWdhs",
  "key13": "2n47eyc6z2UZAbwhagHwprvyXVw122KDMnnphdPCNGtH4jFDyxtb5xtjVCTg28kQKsnHzdi6yFcxJkyTwJ8BSewx",
  "key14": "5wJmhjjuokcHZs8EMMCaQvjPWm753ous1ws6CSJyVsbaDcrXiMzNBx89jaaY6iopNYBMyGYVTTwnVZSX3RkFbc1d",
  "key15": "5NHVCV9h7UAoGf1RXJmQpnkR57njaj3xSbx98qstGhgrCTR3bPddCqoKUqAJoYkFRJdg989SdDSrc4PUTrFi5JSo",
  "key16": "2VSYY2J1xWiA84CG4hRXzNh5fFaKY7UpMyBYBKeFuLZG8EdtmAAQGYF64AhcdGnyqtmzy76RjXyWHr111oMmnYc3",
  "key17": "3MEuRZb1E5X5vVAZwMqhJVnVgHerAbVZPwBhfszV16ncSWhoSKx4WLX6qfeWEBswSxuJqd7uHkeQ18Q7BEVL3Pcn",
  "key18": "4Ptmtq6z9CyMiunArmsiVZSCxMdycWQGe7QRGfSx71M5dimastFYeDP77aqG4odry33qWrV4KRdu9demfwnJGAHo",
  "key19": "3nuUULRFwPv8gYiCjaFhqecr6LnDGdaPFxknrtDhcjujawLupTRr6dYjYnopdut5bkJwKCgf9ScfeDqaZZu7sEcx",
  "key20": "4RJUwgw7LCQAURtGbaGvcueSSTAJsVfX7jc5nzYvv5xwyJUM9t1xdvdhg3CK4cnuLC1NwJavbr3pJ48xLq3VtX7v",
  "key21": "5KaqVHZQjgMkUXWtMBJw5hy3ijbr98oKnhZo1jbNG1UQcRw3U24zeR9j4B2Axo7NfPQuRGvosP26EHPB51MSLMxJ",
  "key22": "3iW1AEAvP6LRPzZgaVTkBspFpWxKoA3VcH2QPdCZNETSHrryzCPDd1CoayYdtBMKp8y4Tq2MYZ9XmoY12UkyTNV7",
  "key23": "3C3uAkG8mQcjXqJY2KZsWbJ3PnWrkY4sjENV5VmoUYgzZrQQXTz3W7xceGyzSu8WkKdVEoFJeNftBmt5rGQnmH8h",
  "key24": "2oxSdc389ayb4v921QQMBDuXrK9bLzoDCK7E3oTfvUjBFSbu62ABMkSxFcjZdErGrzFQhf9H9Rq53141gS8PoF4k",
  "key25": "4yiYPRpWvyVwYWGV91hze7ShZquMAsAs3biugswMwU9p9eyhSbkUk98DVcDMPBfdECkj3J7GxiP5L1tB9yppt9b8",
  "key26": "5cspR8ghCMbSEfcXBC3TeFuGPySqkjcRgayVgvpLoNqCfeaTjZ8WRoUeLSKZPSiAb5PCrhs9Wn4SuWyytn4JykA9",
  "key27": "2qsVsRDzQNbHCdXbhJpjj55skv4o7pJrhWHoCiw4azbRjmJFyD553AyVYMvYyDNR3VWb7gNpfY6Dc8svnbhgmAwA",
  "key28": "2VvTgLzEmsEaQdaV1A2j3t5PZAUTJ5KSe3xFoAnSjQQY3c9RrRtBnuLZmVq9orxr5wQ5ADV3m8FRibQCxfxDMBn1",
  "key29": "2h7A4QMcdLkMi8VdX5GLmXhgQvZQ99Z8fWnpgHjooGbjC5MTjJBjDaA5MS3bnKfMRnxhBvhucAQESgP5KzUVJbMq",
  "key30": "4bngZNGeSKLhNi6jg4QUS4THjnBJJ54QSpoX9sswN1f1apL7G4zZZgT2T36aVWXJP1f5qzJrrfPg2Ss2da9Jxcys",
  "key31": "AcNF1AsuePydxKPfisReND9xvhLDW2VEiWqg2fq6UDL4z8vnY6uFtonjkrXMHAULVqobMnUFApmjQ17omKiBsZX",
  "key32": "5VU4eZxPNg75evk6nsRzXhiTBsS2xx7GfysFxVdzWHPuEWuzoUzCrXrpKe6fHpMGJUKWc5ucKYc2vWMrn8ZF2Qbn",
  "key33": "r5XATxT9kdG4rVMdY6GB5Hb7UGyKG5K8ZASCYAJrCVzGqfhL8GReQA9vkd6BRnPWoGZyjPQGWphjrtycYwWyDQG",
  "key34": "3HGK2DEnDKGig3nzpCkMkMx7YCg6RNnUDnBxxNzHk3EFZSX8nfaZVPCWrrjYiANYV9ri7CZy4CnuzRQfwhtbyzVY",
  "key35": "3K9WunXfDGhseZNYZjuJXXC7wXNeXRMvwxcyu86F8Ap9eqHR6ZfNJRPdUoka8GdaB4fUxgghSsmg5h4wJAbFVv9u",
  "key36": "wGjq7iQwPX5ix6vx8FjN7o5oYo9whyg5FsU1htzrtzkUpyRJ4v92YX69cdQtJ6iRaeaSsudBf7efpFic3rFBaLi",
  "key37": "3RZc9bb7L5stz7F6sEWs5UMaY1tcjqvdyeHaT6YttXqo9Lo6nUY55G8rZVAwGCP2bH2LHVmLUo1TYM1LLzx6jSFj",
  "key38": "4qDprznYQcaS7WfTY5xKWdBxJou5HeAQ8XrNBrLXuet5cc5aqB9UhUA1A4dgonbUZnaNgXYpmGi2jnwpB7nJC68h",
  "key39": "26R7eunCQ6XMLZnD1CFz5Bic5vsPenFhy2HAnDb3VGDoRL9cs48yLEQ3m9aqtdngCMKCFp2JcgtSMQVrbu2Ncmcw",
  "key40": "2PG7gJXfZko9JgSNpa4wU2VebT5wE3pksjxr3CVNDTxyoc4JoPSyAy58K7FDkxJBJRdZffvZGxQ4fAXLdVYArn6i",
  "key41": "BGY1jffWMMWWFpBCochhkENeNrUQJrhF1x1xpT3cEYNZ6qcSCHCnjkGNieqKEfH8GhGhX6J8DH9v8wkeFkgPMyb",
  "key42": "kWzXtkJzpYdp1WYQYAXUkWaU2nvmnQw3qan3K8ZoMVMiPamYTgwm5pJWxW1UsxmY3sf22VsJXf3frBHaAa7Npm8",
  "key43": "3Q8Eh8JvSpNBvTv8f5Nh56nRxpnizTGbKemcDHocdN9oXhwQSv1Prs5WnJ4KrZ9TXM1A9pxjJtQhj2TpwCU7GPSc",
  "key44": "5FzDFAXC9BoJXXL45qu1AgRynER31HvnV72ED9VTNAcYy7SCGGx1ipxfQLLo5d66AHt4uNCFyrParGautt9oTTys",
  "key45": "tNRuXc8ZwFW4CjscDg5V4Yd8o251xKbWg2SLAGYStXFuKJ1phmTeZ671TVpkA4kdTZ6DQupmtnAcTZ882E6xoRj",
  "key46": "3Hh18TEQMzYwJUAkLL2TESA1rpucDwN8sq3LKUVsnNH7zYe3SJE5NiAZMJALncZeEDqhjaU6fx2qneKk46urvrx3"
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
