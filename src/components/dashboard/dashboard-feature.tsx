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
    "4jYkBB89sg8oun9hffhtzxFL2ipQKnVaaPMkzg6jqxH1xMTRhJBXjq1JWV1ii5o71Ctv5zdqsUuQjSTsTHeqyW8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMU6iyCa7AxNnosSYeg2JwoPwEiqjecH9oaRsyoqYPZC7R92kSYXg5hYFEpPNC21avMG2ZL1PFKaRy6DaKWJxpB",
  "key1": "5Pmg7Vq8AWunGBcxnZs9a915NiTQfgMahV81d9qj1fMB3Abug8QZu8RAjmmdTsijhP4nS555JAn7tUxXYZSewz3R",
  "key2": "3VVJVG6fcupVHQS1HgfNts6esNqCiTWWheUdWYYqRBQ7Bt7HT5Z2mF1QqcrCfqMMPqPSyFctLxGAmhMrbYhEx1VG",
  "key3": "2bwKGpgaDdZDE4GspaoEPcJJEXwj1CUmiUC8obXaARcrRta3TMc4PArYNEdHA6g5bYxeQYJJBfMieWUAJr9RoVfj",
  "key4": "4CSCSTwvvyn1UEB3hrcfCwEiA2nUDS4wnpBSCmjyJ5MF4n271kNm8LrGp6rtmFye2kgC4rjtwxJuq7tUyJTCTx7Q",
  "key5": "4A2i3Xi3yVGKzdQnK5Lvrn33yYpdUFs3xU4QeB2GqvCz5ivHYemH4Eh6r7iMD5tDxraYghSRdzjBAShp13BZJjQ",
  "key6": "5CjMoX3bCDscMqNZUE24eq2ekgf8VUTMJvyp4BubXAqaVNsAgQcMvWWRmkdcMDzR2qJVE2KRHyqpgyyEJA17754d",
  "key7": "3cLiGknrAtgwi6ttdMdo1zjm94gLjt6SrRp714bTXipWXqTGVQVJado3FB7TqQAvRuUEWp95TcDdeq1NomJZqQ52",
  "key8": "2EdweFwGrR23YtzSQFxmFgfttDHxgut2ssx6K8PYWstmJJFiXQaEyFgKXWUDBVrtdW1n7dUeBzYphA4aNpmqcB7S",
  "key9": "2u2JTeZ3gyg3kfq7Jvegct6hBb4cqYrCcU8dHdtRazypUGFrcwWtVCGhUiC5BtVyCGbfpjstQoEmSukiy5RY5MPg",
  "key10": "2qaLqo76UyonoJBBStQ8vfFfaaavAqm1oxhhAiHYGuymtRchsz5qPtQAo98RqPwk8ZQt5LiTP3bVpP57kf4N8xYp",
  "key11": "4wpi8YV9TfRrzzoZziG5H1vzQrBQ3VQbz2ZRbDzN6WvgwhwpvrBf5HPBqD2v6RmnUu9qa9MtG88jAXtvXrM9iFGy",
  "key12": "5B6pnrm3FFdmRTr6U8zuHvsXtcs96hktcRNf7USD9yunWk3T6kw5rBmRikH3DH72tM1HqfCva9f96wXFzF9zmVWH",
  "key13": "5g36s21RMM8m6SWSTRobgEge9b5UzeLNuB4yWep5QtBw8jYVM6ySJtkp9gLFfqTfNzchoF9GV5KcRxwpzhFebBdH",
  "key14": "4LhGgz2H3aPwL3zbquiN37RYCvfkQej65UxzyhvA8Z4GdNqji4JUdPGcfPAKPrUXm3dnjZGiPWzxQLKRekJ7DcqN",
  "key15": "5N2A4KtzFRQ24XgdaAwBMUezTnBn9XRNzyD59chuTUexEb72kHPDMTmdnigmZ5hm6gB8Y8ffUs3eFH7TVWgLqyRu",
  "key16": "2xQs4qwmnbcCkAn6uNkiTqYYS3JtMujT9qEvytYebXjMoVvgWbXzxynYD4pg9uoKufbRjhhUSD9jpZ9QkqJfefxr",
  "key17": "vr48g9Z2WAtm1fxEWWPmbpuWx85D4BY7CQHBNpPxbv7EedBdm8TSe2SaPu56sxQbmDKqaW93U2kbXGeq7dUdh3f",
  "key18": "3tAxo58DE45HBghSa2NEVKgNoRf3wNUgNcr54rxr3ozQHsFshrKQkuqzSoKSeJsUMiarwQZViLHQDJ4aK9oGYd8W",
  "key19": "54V8SETQvPrCf8b5WSXjv68pMym6je2XeJy49ZuLen6nQMp3KGsVzYP59WivMoCPdzC2yi9xCP5mn8DUghZ4nHgJ",
  "key20": "2BYQWQpyiHUtPNHYFNcGPwALsuFHk6mLJNwk1n62TNxMGEMGSwYm2dfrGKUP4om8k7yp8vXKwt1g7Y3aSjQ2cQCd",
  "key21": "3FSyiYzcE42j5cFxCBWYuCvU7FEaEUBQgUQ9qVMVBsCeK7WeHL92fnsBFispwEvvgo2Brja7YThz3F8LUt4H2My1",
  "key22": "4LskxPtyfe9Wy8ywHaBQY4fu7NY4kEWk2pLevYKGAaVeCP7TdR1wAFWnwbUMmXwoKvk6b3D18NjGJhuwsBLVy2Th",
  "key23": "4g6y12uGRoxZL2ABUaNCRuAGKe6zxYNmrPRM7wQMmfHHhMQkr4HNs5wKEk98UcXvm7FPKUDPepUG5hmK6kr58Qqm",
  "key24": "3131uGMYfmxjCUSd6azGcU5xcpQ1C1fudCc4bVBNsFX1VkX3YD5G1fDnzppHfNPdaoXSXoadYbH9WBAzNicx3YiQ",
  "key25": "5Bjwnh1J7mpoiSbLdqPGtJfSGcaEn5DWyyT1KpQ1YaBP41ZUh1gLkspHq6WTKqZxjS4j31qZDzV3R3tYgDYTPSpH",
  "key26": "8PT7CnfBEz8aXk4NsxPN6HwkfQCemMQveRnU8d8SLycNDJJPAjrdUMqKddxthU4DrEFeDcixLrtzJ4AvcUSJNmk"
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
