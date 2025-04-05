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
    "32SGH7WYAhdp3x2Xt26zqc27u7SmKXWPX3gLpoq85Qcoqq9YnN1Ca3vn4r6JU2wU7vJ41mQqobxxq4aBRUZgCtG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXQYhRNFch6pNYgiZDFKA1Ns4MsC7aUjP637pVkkHNbzFidffCZ2Bn3Dh3D8TivaPM4mt9jKD5MHNJHWSSWLnrM",
  "key1": "gtWRXhixmWLgrGiNcyjVYEBhixbaXb3Ubxs85KH4RYDNViwp8tSBYR8FfrVLt4cc3ntEwjU414WAXN2n6KvgiaY",
  "key2": "3Md9hjLWyKbhViRfCeSKScuPyCog7gqUV8tTqtUmySAUq1XMjRVfYM48VuuS1ZYUXxiWsRCuwnUerj9YwZH1jp9M",
  "key3": "22vJ8pyWGX6S1Wv3HYEYVCkN5hF6qBNBnzivkYidYKLirk4JKpZxxSfaiVRxA17gBNutz3PrjgDq8s1GnXRvnbMB",
  "key4": "4MRFUSG9n8TcTLXTgJ6348qK6ZVCjeMYo3FUqSPa3jauNEpdtk38we6Jv7YTmYRNKKCpEuKh3ryYqoCnhW4RpsPS",
  "key5": "5iZcVWoggpCPKksFHpNAAT6nfoCJc2YmQRuJMSshtR5V3pM3Ukjqat1JF7EDrn21XZesttaYU4C79S3xD12Qz1gY",
  "key6": "3x1cQt8rFP8AKXMMJTBE7x9XggmWW1rTusA8DNbXiVwNYo7Nn2MHmUzc63L2x77b4jMvkRTjaniiS7GZsxQhDmxH",
  "key7": "4cGnhdcVsTAVtHwNH9A14G5Q6DaDaAHvJT3atDdyNPfRyvLQhCv67FUzQ92L6gkscuMrUzRUTJT1XPSC3S9RF4nC",
  "key8": "21BywayRjMn81PpiqW52BPp5WBbs85V9gvLHZuTH69fiQVhQV6XDETHLuWdcrUuY1UqkhExbNhPss4xGCY3nD6HK",
  "key9": "3ThBGqsSCTf9GKAiutnx4yQ4gSuVBib83MiBeQv6yGG3BzG5NaaSf82N69fbQ2idaVvt164rWU3zxjTDh8JXie9D",
  "key10": "3ahiWpw5xnSwasMsin4HBEH3Ck9ddkVJn5PCHq7baRLfusTE155t1CZnFr5zg96FuXEPPAECFgLFnPDoC9xUFgpK",
  "key11": "4SoR1CBzauSaw9vpFwHkW8Mu66ZNj5Jy7F3i1Y5ErJRdL5MR3cXfAsogJQekwoaDiG3hZHKCyoTpB4S35eqHtwjr",
  "key12": "2kUMN3e4oahJJgwqEhWG8Ker3KCDwfrSchLqeGv2Qnk8xQFBH7kTpq9FZSSovSU1iw7G1d8pK1N2agnr38rqsRwo",
  "key13": "62bySJDGcYbqkkkENHoA4Tcji9WjrPeNYKvwcNdnZMftNT8fnh6Bb73U72DtojEm61RcypHHmNAvHtL2v2gGBx62",
  "key14": "fepjj3GZRwoEPhR53kik4bpm9HYc6Wt1Ro3NW4F5BfepAZhCXcQkCQfH89ZWsqUVPn78vuCK2t4e48TZroHkA7E",
  "key15": "4fhvwNRdkd48aKS9sAYEzXWT65SZufaH6dsGdskHo6KkXzWPAB2pS5JsY6YiKXcWcEsKc4xvrmdmDC3tDjjHvxSu",
  "key16": "bQWdWV1xQLL7hyFj34ZPrJLSYTTAvK777b2iYPtfH3JMdNC6X3RUBRuwzcV1gCk1eWRwog1A5LZMHA3vGbAZYR2",
  "key17": "5HsmmLGjsoyznTqQTLJHw7MD1AQWo2Yq4MYAkyCbxV3628KP9VSA8b4JGijagUDQ8yGWQ2xYpeXTKaAVam9G3UXY",
  "key18": "hi5AqMRmbKL2riZZsUHYpLsrSuDnthUwEC2rcsgRj9QGZ3Ba61EDoQNFPMm1x3ncYMLYeehRTzEw5FizGLdeJHj",
  "key19": "3H1rKVAUU7UHD55YyfmgtwN1TEEP18Uwb59VNcvNngp4Jzf6EF3aqFAP8VkKZj3qym1pYCvnMpaLjo2SohV9tLou",
  "key20": "2a3ePBLHkPgbEFbbCDX6F58XbPSphRiroVTPXvUMq2VtpHtCu5oh69ChUMwPFDrT3tkcZmbtkhS2XaYiUusPLusb",
  "key21": "yS7gBzd3nYRfBSUC1jgeXjqArAidzcmqQZr4rED6Efxt338MA33FcErRXkitaxTJ7JMRGyiaYbfGFSVB2UeUiPT",
  "key22": "3QyD6KZ2jKzTraLxJ2VEpCuTTEoi4nLvixawAZRfjBUjYW85TbeCYPv91XwDsAFYmcLNVXjTyNReMoqZShaZo2zh",
  "key23": "4d16myWEL8o7cx54MV8NnaURsV4ihgjYjHU3B6eRXFiKHFbqihP3ZrPBFjh2ZqNkzH7VV2RDbgrgLFnm4yeFncx3",
  "key24": "2V7dHqGams1f9vTKXFPBaRkrdYjehvDfTEqSaAit8QW7GnRvxhxSTQentDt2fwf3SAi5mrsXMitNns3E8rsDGMMf",
  "key25": "21kRVBSE7H9hhYWEVZBidmK2HUavyFcEPTtp3Ez1i3NqZT2x6mEi4L1EXKqsFpWJab8Pq4bxam1PhdPBgYrjMcWP",
  "key26": "mNGpUUsbAJiaMRgoDgvKKqHeyLX5xbnYEbzMjRUTY4C3spyEMfSokYf2sjvfFNq42QZeUYFrGuJ5dBgLeuLiDad",
  "key27": "4RAhHW3RGVkC9aifYivCSxvKxqVPwtJ2bTNcSz8mSS2QSgHkDYumC8xvqVNRrH3VCRj8Dd1v7H1oPMSJkz6T8Mh6",
  "key28": "XrFq46ki43ZBcFLjyzRUS22aSfP7jiM78nY3N4GybC1aAXsbUZZBd4vft7Ajc86tB4uzyrQMEoHWzQWPhjZiW3n",
  "key29": "3z1Unbe5V2Afc1Z1HJvGSNsxe8RyzTnBKHr1bEcj7JhaYV4evz1TTfazL12zHzHcsp7UB47EMLdwo5D6xNbZp5MA"
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
