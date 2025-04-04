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
    "2uXCa2Mp1CcCEwsZ86vNGHEAHwnQmEYzqTQi7jSygSoe5SdfG97efSNRMn9oR8whhWdcRdKArRMuTHvZx8nSeibY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKhPBZRj92t74vbY4a5NtoEniET9MDuhVj5hQtscHMfsnU7vZji6NHe8vEv87j9by2FFJ8zgJMPeAjziTL6g22G",
  "key1": "2SR5EVbMPCRYhjwB2ZrdsxAT8vSNfoKyH6EbFhcP8E57HZSBNLzTx1WdJKvUBn5dEtjxQfnrSY2t2YGU69Zjz4di",
  "key2": "QarSg9hgHWqSmBnpHUZLC4yjYy3kpTgwCfVnU5ahWyps1VVmv3itiuEbhLXVAahcmp5GbxBMSE7mMPyfT8TzjVw",
  "key3": "kmTu2qHMv7h36R3Bn5DnKenkKaJUej7rvmEbaeN8PPZevNUxNx9YrjXmQjKtBvwukcQpnGsRRakzYzMeFtNYSx2",
  "key4": "2qU5p4DnMHGcYMBUe7Hb8Ucf9cN3XhT4oB83q19Kao5y8rDBzYorV1q3TeR2Ei1MtsZhhQKePwQvvm3KaAoBJasm",
  "key5": "4v8pJHMwNmYcGPR1vn9SJzGEcpuuWL5471s5nGnco3bBoKqUYdVzRdU2HqaH2TKBFVDhzniMvzgT3ejH6MHiU9CW",
  "key6": "zTyQD7kH7LjN9xXhouyxKMr2rZUU27qxA9fqezArPKQ9dNuGE81c2EvbywXTAFvCyRYi3NFvsN1u6hGaujEswfz",
  "key7": "3aaHrj2eP9bEYwWbuSe5LgcbiFpAyfAUj8aHRFugcWN32kgdMoQWuxbqUtAzKkGstAKMLYtfTBECcQhGQBKHeL36",
  "key8": "koouQDkC5ciC1rWBUy6ybe9r1ExJaBJjoxcRjnJt77cb7TFBJKxPEL64Q5JRzNncS6jXc9gNgeTLoKB8FfAKYCP",
  "key9": "2aq3zdnZtpUecGkgTnmYNddbSBzWHws7Qa2sUNMihyabFATZzEBoHeCizDfqjgW4ZuSVnruprfSrZavd3sZbFKNg",
  "key10": "2dVe8BHraDgmnttcRPHpaNbKDR5K9dPCu8cf3rYKTntmeHNbFYvuQ2AHGycDp1NSUN9AV74uCxEXpPwaLgPr9iuV",
  "key11": "5mHPQmD9rAhGLpQjc9LcDe5kmYdRAo7c3NHEdwVzwqx2bjFdjoNogjR2stXFsuWuHYfid6rTw55WYj1hGLmqXw7C",
  "key12": "472g5j1qzGagCiRBjUD8hTMLvyi5eusCvJZhCd1dGcDk2sZGPRkFgWvoPe7nUAR69ur6a5iyruLhfr3Hub4oRmd7",
  "key13": "7iEXsoWKyVgf2zjHMx32mHwAqnc8AdP5QU7hiY8MTkzcYuFkoyHZzbQGDzQyEvt45VFBVvjzUn8VQxZpNkGNqMo",
  "key14": "3cSmvFLo3nqtCyxHoMEE5uLbDc5ugvpDemLGWTvSGVVwsCYYncibdbNGLYQAkmCtGSdynN3YNkd83Wach3ctaCxh",
  "key15": "5BzDVC3388sRDsFhKDjLNrKvw5j4JjhVvgQjMquK5RXZMuoJntR9gPUTNUGe8zQhZHcDLyGVQaqrgFciKzJyQW4L",
  "key16": "3Ewbh8wEUv5dpacVVg7Gj6kiwH6Qo6xuk3BYtGNzU9bAKGw3NWnF6whLBCQtrbegkrM3AQQWFeaH1zCsQMkME5z7",
  "key17": "yfsueHsMk2qYJqMCmLcjsTwGuMUsaTgBFcwxHWeRLQ8N8gQFX6bHNpZ1yPcKucFoEYaChAmAmvTzbSb2QUKVrQ9",
  "key18": "3a68FFFLUWHnfAoGHJ6F1yJJGoJqKiFCKnPaazW9umWDHsjFtkJSQBFW9cQDfPsk5McHWYB71ezNiiCeKFXWTwqh",
  "key19": "4Bo5BfjooeRPSfWBfHc1oQAmELQnPQHCFPtb4Y6X598foc7dpdGQUFGB3FYPGZF48EafkHADYsKGRc4L7cusUoqs",
  "key20": "4beKteMVCYE4tbNcf9SKu3t4zBtteSW91eHUTRDo8YUehantXTxBAV1gaAm8pyXUnrFCLQuJxLZsjsY4HydUzo92",
  "key21": "4De5NmPQjGoH3rh7rXnAtA75j3KdXjLj54XH1suUcmhN4dYmqhkP7C6ViFAF9kXWagK5EeeE27qr5hKAFsDCNaEu",
  "key22": "4atTKojfQwAEMuWNZp5hfzaXkmmodyMjgaPzE4J2uo3DtESwjydAqTaU2nEwzQVoEyL3T2aLpB2stHdeNaytfcEH",
  "key23": "3u2H1aBZHNok3NfH1Ebdh8zR9pu6MxhYWYGUZMDVqu1QeZ3bcke3YdKsdm7Jx6E3uSUSQLMMVfESfzzz2ZJHrYKa",
  "key24": "Z1ayniMYC5nAZnPbzP7Cv1g3GzrxQz94GQPz2bThBXCuwEctwsaRBRYuKe1UuTnVgjU7Cg1w4QgW8SF64E5ZKoS",
  "key25": "2B5tt75GDQpPF1Vsc2EjuS4Tg4bdqn6RE3FdXasMi9ew2cpyP9ghS1DLmV6CvH1qpqrR1yQsThngA8hB859GLZoH",
  "key26": "5zX3otQNzc9ATi44bKjtcmmYCQTNkNrN16Nn4Sk2LAjJFWJoVqUu1v3xZoRYtj61RTbZYLJ1swP2XkpUsJ4VXoqw",
  "key27": "4iEJaJ5kqe1tEygbNjLg31eYFSkknsEdH7stbBZ7GLCqaCz4RVpCcbkFoCtSjpVBonfabu8uEYT2sFC8ascVTnfy",
  "key28": "3R8NUMmp3rQuoB69RRZmfUWnva9BssMUD3JE8a2KpGwy6zgxgiQkcTgzHY42gAiPa3s3T6nCZdrHCvdE8GrY8QKH",
  "key29": "3G71km775vqLtKa2mozk5raZk7WUUyq8RwCmULyVpYByrtLunm6GZj7YjJikr1Jds2b5VhDYJXTDP2Q7W4b35fWp",
  "key30": "3BVWBYBQYPAWv1kPAfWgtRj6KHAonen9iFEWTpq8Ud7RUxcbnisf5iJxQGr8FUgVyNKsMPYmZYSVoMNcm91AMKXK",
  "key31": "3XbHHHa17HAYKJm2EwkAKAi6ABDvrdvLFpT5HCihf8eF87tZcyg7boBptFUJGbbFcYK8LpTpiNhyTH2rwwfvTySd",
  "key32": "5nfupwF6CbyPPELbcipe8RcBBxQZke9XcRoraQUakGTaPNU65DHh3ZHwfzBYvtLRxU8Yqq7dxkcxtW2kXHnUCano",
  "key33": "446KtmxWLpZYR5W8BEhSZWNvDxpawpazKZWruYDFFjiFdZvRFGYWaZYJKAqeSCXXYfUSPrb64wvNyq5QbZLG21vk",
  "key34": "3KB5WSsjLMsJDwTNtAJ3wtfzCmqMSjMYTyzxKwXwwLZD1vyZEe5vjADYwAXEuNR2rnfBJkRdKecLf93ynorqjVJn",
  "key35": "4dZ2ipWW7URU6juXLxwRjrNU7cPNVgkuSx7qxGGnbk7pUVcyMTphmFrxJoeWXhySb16rheTz1HMAFzL63r9F4xqZ"
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
