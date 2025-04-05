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
    "4dweWeUZDJKfS1JUxMkm8KkuB2JyrbgU5AB4veJcBZB9QxmHyptfwBFvTYQTPd8GzceaXoAtMHdcJbwcET1poL3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1qjRBks5iMz3F7fzrXtTQaE8A9RquVKJkHRqZ48YYvLynhTvtTdHLrHCco7dXdoLYwan7youRT8jCcciPBLHMx",
  "key1": "4Pi5qtJeUU1wbVejjgdEbtoQ1i3MA8LYNBxzpy5UpLFH21fnXTyJwLmmY5oRFQHjXLtLhWbw4ncaPKr8rEAWrfkX",
  "key2": "2aARYpjaEGLZEY3rUF8oi5sDdXmZrCCQzcvMtq6WfaCvEFHMrs6ck3JZxbk71oJjo8yPm3aWMS2k5jouBCVXJKRz",
  "key3": "kfuK8jzZg8N6UDgSWdSMjd7HFSzNscTCwUNM67RFiBUADnW1bVxxUDR3PdUoCRRtTdnc6cW3ffa3NbQ5uhNmUt7",
  "key4": "4VzCTxybjFMEaqQt9Y4GfgGhuHLacp2NCcWpJTBcLZWbzWs3Y13GscMdKLEqJN93iQuh15AHR5vHxr2ZQeiSF2Aq",
  "key5": "UbRvMgwrGMPFqTbRjkXvEfZZ182bXjUmyH95GRffXPDJmAGfy4vWS9FcuRMZCZgR1nAf7KVUuyzMCqp4KTyUJQF",
  "key6": "2hPY262s1YJ2r61iohdP8WSRw5B1MJB1Nx28c3CyGTeMDN887vc45dJXL8w8WpdqeQKAtvEL4AzEozhLnPygeVUH",
  "key7": "46Yfm8NQK5YAuUBuxTMVTDUocqaHn25UgtHnF844jgqfjbnRFovD98CiLZxTDtcr15BqgEnx7yV71Wp9UQUpyUft",
  "key8": "3pkmpdaemMQ2JTuzW5Uf4xCgrPVupb4T1JQwcnmTRJ89saoLMiQwfvJfLejKq9t2JqLxncbE3uMUm6XJNX7daYu7",
  "key9": "5jP7rDGh5eYGug9oDUuGmNPAdzkoJGvckdzxRACggVkt9XaV1XBB9tjimWG6FM5iMykgEkz9Q6aZ9bVpgWoZSv25",
  "key10": "4v3zm32r5Y9KGZMvm52uiufB1dLdkhF1XVLB2T25GLUiCocHp1nJ75HsTY3jjnVSfHxdDxZhadHPJs68AKCvAQ76",
  "key11": "3h8g5uu3ruqYZKzimtPZTqYHpmYWfrRpEdCXhrb1NWVWNyCNS3PdBhngB4y3x8DtorQ11YxvtDd7wnGyRvoVuFwK",
  "key12": "3XBwZ6w2ZvXKD2K8rrFwFs5GVGWDtu4S6mAWHUcSgAyaeGcqqMACHrg1LiaU9WBEBGVQZBgJt7m7mets3PmRj6Uy",
  "key13": "4rHEtABtebZji29wivMnDFzDKrFKJCHyEM9KCsH5xDLbA7yctorvFwTiUeWnw4gq36WiRmBCrZnLBaT5iq8JRBnB",
  "key14": "29XsoXpPBeXssJewYBobi573WigmW9bn24yxumNoJqHzNARRQ9m9hmwYCCQNvJ3FnR2mNHdjHMQR6QWtGYjsUyeB",
  "key15": "5h2aJj2bQhupSAXf6szWp1HPTZTWrCLtpjbEvnDV2PiyNpQ4Fqak4smWUq3nTMWy5tUaSLUfZpap8yXVaHApZU6F",
  "key16": "NXAsYSEVjhKpVPxscYnJCQZ5f9WFyT1szRtLBPZouh7zT8z92RvVqwpskFHJdZm3eWA6uSAaVzqQZGrroRwaAA5",
  "key17": "X8c8R3jZccxDWAX8aTY6DBTmwFyBrtwzDmhPKpfCiUjraRxmtVXe81ya933jBDe3LW8KgoDNY9tqMrd7GicHrrb",
  "key18": "2gJThZb974CGF8fxctcBumPmCVoVhYvvG9kDB3T8mpGqawqwfsGd8LzJ1ubVRZC46o5YBbtG5wgyuDLw7Lr7peYR",
  "key19": "3mbtna2PrdeUkkquqNva28B4uz6Tgf1zSaF48NKpH8UezWmGK1ovYE4qnZCca3HWmeL1XEe2vwcE3rxqEjVGtk89",
  "key20": "3HJ6dDUda4ZCPWweFeYQVsBmDjS8P5NtWfqbyRWoasgLHRxG2DuojeQm5bfbu9URSdHVaKAJf2LDmcbj4csMmXPd",
  "key21": "35nPoo8RcGzefbue8hbMkbDuEck36jZoYiweqVVxsX6x2jUd1cEpfexpXaYLgzG7ot4bXTZLLo3L2kY1imuKCnPo",
  "key22": "5p1WYmGGZWES5WAsiw4CBNPQquW8LjFJwhcP6Kdav8mj1L5aha5X6CApkBq2CvACaU6Wp2gNzptQtjK7pBS4BarD",
  "key23": "27DsY3dxiCE2HtkA9KXpFoE3KiZXyJvsNhZPfsgGF3WgKW76t5kREr8K3G28h1N89tva7qq6iaCtaxwVbdMw3vTL",
  "key24": "uWyjDWZddJ2MgVLNR8VQrf3dYEeWhjpcNmUsPoiYCfcwVHvgcdyV8tdXRgsHUZxx3EddezrbDibxm2NWqHTh4eN",
  "key25": "TxTqSPVZHtJBTdhrCVUEm3ThXS9fofKE2s9UJepKHkf6NzL2X4zQ4eYA7TLnV6sbDTkAjaHcoiAjc7AvAzqMJdx",
  "key26": "4nMPbRNAsFSu3Z8Lo9pNhVSn9mhEAmXSFQux7ZxZmbDW2kTgATGJWqH6K3oiHXxZvRoVMmdg4mNbWcd6F6npD11Z",
  "key27": "2Ti8WXfazZobqr2UA8YgCGqPBC25u3MhXtr4HCz9fW4sphZ3J6fizbs4WDBiQ7fqeJKPDVYmaLnXxoxEfbo9zwfR",
  "key28": "497CT4MLJ6jutwFwCkSfYLVKU9i1wPCEUL3DiY4F4WeM5fHPE1UrBMVykbgrAhfTcmra8YHLR17kX6VxsHJqRbRq",
  "key29": "2pigxYeN129UNyiUoSLeUPr1VakBKSXoPVEVyGdoZCPmVPZ9pc1TYGnzE9ea2jLvN9CrwRgxMHEurRemaYzTMALG",
  "key30": "2gx2YnaAhQNfqQ3GtqpE1mccguBBhpFUAP1e2Rah95MBxXKu27SH8PMhZhqT3ubsqRGkiBrC5oLZFE8ZV97S5p8F",
  "key31": "5XMUaG1BHaSnyRzT9XKWj53rqFDvqHMT79dcZBb4JxLB6ZsZcDPzLCv19vaiAsJ4iVynY9RkrhTaSngDVpkyXejx",
  "key32": "4cy4kbnGM1emSP58VCEKfFeinxeqNLeGWkuVVxYVjPBQkkqhmiMTcRn5sUpo1TjoCwuN2vssa1uAimfat1jnFvwg",
  "key33": "4REQTXZbbSqRSk6Ry2zMrDYqb5dGTeDVac3cjeQqyem36fTzYBA45eMpLJSCLg97DEsfuBRqztG6i412Xvwnm59B"
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
