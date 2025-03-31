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
    "3152XHnk1kEFD6aaHKQRqevJfseL1G6br5y2RUPjfsGce5q2F5AMi1Jpq7pGJ7y3ZJFuUfYt35p7SjLcyEapkhjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4jSCNVSxxAjH9THdkCeYLn129M45UWiZ9dAJirWu7CeJkHJKaW14Ui69A1f7SvhqMYSGdePv7oVYxK5aUVDyRr",
  "key1": "28dxrBz5Q5W2yjoW3jKhFEhdc5iGEtQPrWnzPonUCxvS2P8tDF2WotKP7H4Wg7RwoLANrSubysk3VwxL13veyBWE",
  "key2": "5SdZ2TK83orzE4RPDpKgHYitrdKe9osNzBxtawDYC4R8xLjwBqTTG9mKweohHYsfvLGWUpnmpQc2iDZZJSLkxfrj",
  "key3": "46ucfkmFW5g8BUqRkRPFvznG5G7kwqeNevgedFqrUmM6Vo2KAK2WBKBZDx6wL9LJZKFWPu6QuBGTpP7p9Qsunp45",
  "key4": "3kKQS6rUrWBWtLxbwMUVNN7FrdU7enXGLXHbRP6pwdqsXG4UgP4aJDBhe4SxakWuC7RaVPSWPYGKfvv2wfJLo5Xd",
  "key5": "3BkgJQt89EFikvGsGNnWQRWsVgxvfK25de52dHrbHAdTdn5hJeEujBdSMJ5UoBDQ8WRJjxAtPqjfJfZaW2QNgHTD",
  "key6": "3R3Ctj9qKkbuE6VZZ2qomAdN43AdR4vmNUypztRVQHmVYyQqGmC2jaKx8DnKC9CoKYwQwndAD3NtS9ggb5aHVKZG",
  "key7": "KvSd8xPqfmreSobiLZ6CYUqRReTyKHzB9YVLrHnYcSvsMo6FBza9jvnDA27KTGSudaButHfUvv8trrzr3zvwMQr",
  "key8": "2RRhV3eMaYT6BUct7oMKY3T2qEdsHyRfaJeNkyyBr4HqwRamZDnhif3zALrv5abmLAL6ssoEvYSXoSYqWs9YHPrY",
  "key9": "26CyJQ5qPicRExD7z3PfzgzJAeb4n2SbhWCUXqak6xEVZR4GZ4XAnmSRQNvGZZuzzTfcQniFYGhMrTDaah9DQy5r",
  "key10": "ZfkuksLy8GovBSFe8V5YcXkn3btzChVb6cPcpRbAfg9CsUKw9aSLQENzzxP5rELtftCR9YcQdUFmB2gzLdodnCT",
  "key11": "AMYDrC7e6MCUUm6FXSAZpnsQedr4iFFNzp7ZVQJVW5PNZaDu7GBKLQ8V5tx6iBqH3Y3qn9gtx6EyqwDszZYSQCs",
  "key12": "vENefJS4eci7cVnowDhFzfw7oC5rv2d7yzywK5tqNuDD35nfADSf1XMfe1GoAjo7JSkQqFCtyVSvynkrYoq3DcR",
  "key13": "2d2SRNCsvR5U3pKBTeW5U9sCqobqK3VbbHPzmS66bqPF8bQ1Tvydedz1WpxxywWJHNofocBwpFTrzbguyjuQvr3d",
  "key14": "5PjNCTmwpXSN9wybNFB4rmR3YffXgjvakEEde7McVMiKcsQLwwmHC86HcRHAkW3mh17yFKUHT3hFJ8z8KuCgnMCw",
  "key15": "3iRxXdMjLQRkZiFKGfxpPrpFaabStFBcAtRPF7xMLtfq3x28E6CywXqKWQDHAXX1uy4W8jMZYr1fz2Ak81dkAxB",
  "key16": "2PJe3CuvEEYBUm6SkHyFikdfemaGXUT7okaNrRb2hNZe9gndrSTYBpmWd7hDPCsAAzhHSXd8MhciSTocCs8tJAhH",
  "key17": "gNWyRBCBtdDm5quywhLrtUTDUWtV5GCeV9Es8JKi4oAY8vn6UgXVwZy6UTBLz98VB9yDPEms3FLGM2QbN3XCA3w",
  "key18": "4XP334trzTMAmYeLHoiheAvfJMnH3a4HpoziH2YhR8o5EoKbc5zUpfC5b3T4kcqPS863td6xpq85SMa18wYtswui",
  "key19": "2NNigUWzZyhKzEnAAcJQtE6XhHwGy9AkpRTuYxJwvZw7gFM3FR9gh9UrMvBN96P4NeeZAvguTTjRTfKywv7bfTgS",
  "key20": "3LLDcmYam7TKW5ZFDVg5mdpoUgH2N3WfmRAuWxCFZBh53HDrFSHcbCgdBshmsBg7mDbEYQ7MqWviymgdfUnqoVVi",
  "key21": "46sGwY9bqN1T88y4LtvmMgaWwy1o3CoZY3JoHx6GxNem6ecm2bn6SBLsKrfFQPRjdukSewe6X94qJsgowjtquebx",
  "key22": "3ib355bs647c2FTxy1hxpmfvoa3aFR6LmQgjMZ776kkDCE7cndhzXBP9QfayB88no9nb9BHnkUP7fnMp2UZPRsnj",
  "key23": "2ZHongqHVX5Lk2EMM1crfYe9P96PtfMEdLhSWhKe4eRE5EynqPujhDEd6dQMJiRSaCgnvELvdYiuB8yqyyrotUKr",
  "key24": "3JBE4WgDg4ttackSfugihvx1YMSVETGk2tt8y7MvKBVjnU8cMWMcA2UAW1vfva2fc5JdYajEA8WVP773sPsCZeZm",
  "key25": "42RkA4PMF2Ppf86BooYyReMsY5HG75YKj7LXZVkwXiCqyJNeCnSr9qiG6XqiwqghZ6wEXoXhm6UGE3s9C3dYYEKF",
  "key26": "37rDGTB71WjoYAiaAoUfvbZ37yofF7q8BtWPEupmJ7tzzxbGzgULrnW4DuYrTrUKoUFZ5p5dhCvt5WFt11QU5o7u"
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
