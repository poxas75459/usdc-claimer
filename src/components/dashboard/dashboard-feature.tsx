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
    "3k4c3Xczw9QFdnRPRADpDTQLvYMqveuGJ61Jf1Wiyzrj4nA85ZLUWZxxRfaFV7L1QsH6nqTxgjqGdezXgW9HwFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yif9J2xky6fgmwvfdQ5v3CK2yCQbRfCHLsWYCZ9Dx4bTwdoojzci3jTWsEed416rVGGwQxfDbZcPQLTyziHbVao",
  "key1": "2a4rbfpGLjL5MvjA96yeN8GRCxC5N1HrekXYngCwjAXsMH1DDB9wLFAMNHeJU4Ny7DmGKP5mmLhm9jchLogv23pN",
  "key2": "fqnDuHrFt2xmbQaAjriHLF1vuAaWxQePrmnvDP5igz2SpJsrPFfgfNeuNCyLV1w6SMpP6WFDXoungEK4g3NmyGn",
  "key3": "3WSX8G3z1bxYGSjWiKkysCWSyvTzjZincWqGLayqK7ys8Wun83xCEYBoq3VuzmSfmzyE694kF6EWRSr9wHcXcf2e",
  "key4": "KZvvJo4pSrb5jrPiBHcodrQeUwHjXqn2cREwELyDhQQuzTLpQhBgPsEivL95GaaDPaQJujjrSrkv9J2QAGwCp7P",
  "key5": "7pFDW9Tw4H8pD34Z6Kbq3BUVujdGkJgAj6rGsAE54P8UnPNbR6kSBwC2nZQSQYQscTLQ9psEmsthtVVU3AqMUFx",
  "key6": "m2c9WqnnjsckfgqwL4PdXooZ12UhyYXonpd1dEWP39tkuNfzcZopB6gBycrLjHZCTnjJ1ybAVgEikMHarJQ71Kz",
  "key7": "7itRHbAVvjfAuKgawVXwntkqPJV8hih9yYQKR6qT8rCrw6ywWdQbYAWjhiigdA9BdWswK1rkKi1D5fBBww2pobM",
  "key8": "4cQoy7XfgsVALWLDSfT5DqWnU8HNXSW7UGEAZ3uB4RRZhc6cpQiuGJyTthufx7Fo5KmvKatGo9CQB9VviDi9Gn6X",
  "key9": "5p2nTStU9XRpi9t11WHLZccrBxumFJqh5aqkAmSsiBwAvFTE7bHHfawNfNFa4StGGotUQLZUFsHKUyjjX7VFXcKd",
  "key10": "XdU7iWgdM42qKDdhdMLEddS5i3zEbGNohPZ9Q7AyTgzSWSKBSmK4oHj14qNK9yG8Ds97AEayuc4heh9hsVNNSke",
  "key11": "2N98XyPmpGnzqQ3Q3op4AFXLNcKYUTD6BM3wpBiqmBNLpgnT3JjyWZ3PiJXW1uzGxTQPUj1v8iEf9azUoyR9dsr7",
  "key12": "2JPLBe5CwKsqz6QMnR4p2z5AkK5mtf1jDzbwEBvDdpsJsmrEWmAR6MzdNAMALgw2YNgRqTsifBrjpwe6FsNPYuBN",
  "key13": "4KTRoVTGvnDH2GVprFotA7yKK7cSYvbki3dyYyW6tWfhEwobiz8Fq14Dn7xZgCbBBJrUDHBkodJBTSWfu7LR3gHs",
  "key14": "RcoKs5fyJwPFgSJvhAkCRpMTub2SL2UePTfakhGzYmSxJuNftpDjPYosmMRXNxXwiZBr6JwcmKQkhUtMz5TGXRH",
  "key15": "5PoAprXbVhrDUBYWhuTtNWRvgfCrgkxjxzL2ScJnNdNKbERCj13LuoB4uWL4Pqws3sVf7T7Ahc5dYB7KQhoPSLkB",
  "key16": "2uVJFpep2pTXzzGfueBKgNGeB81F946NjxDd14BwtsCGC966XE4VNbWCKPHksd46TzRoNuJkYrcppizBQU7UeToT",
  "key17": "5co7431ZM1fBag1RbpKat732kpbWYjVysbSv9jFCCghFXARKrey5Qtur4WTU2senCtNLagR5ksT7V71pkJbBZwTW",
  "key18": "27yFXCqfJWEJcpG3Q7Xoqm3dtrzPsXvTaDsjqEHRyTvUjUvNFkYYB3xmoGzg9564ZGy2vNGJhF47tZU5CxA1FMCF",
  "key19": "2i37u3Rm3uoMy3WHfWvUAtU5t5t5mDn5AiTpPmiBUvhmv5Yt72Mopu6K8g2bBoapsfreuwi4tqTmBQUdEEP7dWyQ",
  "key20": "3QYJYXx7tnBrsbhP3ydpR1hgSxkSp7QpuNp8iiNTMMbZk26zXsbctCGVXBq7ccDw8Aws5b2U11mazL5ACV2nENBn",
  "key21": "f2vxrjkRFwbpPmTmZAZRs85GXxLiC2a2QJAZ7LW8crNmtvPen8a4kiSmy1CzHh6mYTn3D6DeXj1od5mFjUdux4n",
  "key22": "335CcPMUXNLL98mYTrE5s9EFuGj44nWUaEJDg6KRiygGhuyGqP7DsQaaU5bhtzmT3PMaVPa9YL26utMUKQVVN8DF",
  "key23": "5rRZsG2vUd9FgzJ1u8UtGW5V8ZE1bfi6CFzVyt3frGH6xrkxzmsvk3Ri3ZfxUog1rZ2FaXfi8Lo4sBY18LaVeTpZ",
  "key24": "DCJvTeMbJRBBF8Kzf2yr1JDPr8URANdzxJSML7hTxK3614YXjeMq1CcRNPVHqQr2kbn2TzRir7SDhXUi1vpu3KX",
  "key25": "4TGrNCguERi3XH2Gby8RDM6HqSRXS6xXH48bZi9XWq7mgYhprTqLWBWNesG5V141BLg9DficvMwqEEcbbEHwh2Vf",
  "key26": "5a4cweS1TnVVP2xcGzPEJgrZJsVfwPbFGri7JcgZPM1cvWHc9eYdJ7bheEPDJiV2QBULZyyTr4ziZmUYkFendbZM",
  "key27": "EjDk2WessY942nTpfvK4WY2zix1QbfzW3Qn7P8cEzKZQS5xqyp955U6adb8KAS7MH3mt8FYV5nRxE2S32qL6DUM"
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
