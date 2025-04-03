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
    "1mtmxLd1GHAMcSgkzBh235HGC6LFTxhYyKPr6Ff7A8ZF9VCfc9BnFBJS3SKLVgJ1y1fLXzxiGeoxE7L1E2QdmAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QncT6nou3hoCRRq3Kz51x5Wkht7Z1W12W3wEH5oRDG5qBYJ34Fy6nS5uPgai6bb7JuCvoW5XRRy6R83Lmz935eu",
  "key1": "5R1tMSjtzF6VfJDLz9ct2Ytnm7CWVhjQ6gsxTzYjbLBniYTFYq32Q131qBKNVLx56v8JNRhQBEdZFrB6S9MfeDWK",
  "key2": "5p4M7Na3jqJk3zQNd5oPh22eW2LcXeJ9S1wARTHfhRc5FYhA98fEQzwJkvGY6ptuHFjRPi4xdU6mhBG5V4XFaSr9",
  "key3": "5GwnJ7gkCU2vgfi4Sg7GVoF2kg24pjhWbd4zUU9EtPjzEAhkqpBbi38LAvmX2ynZkun8SomBwRRVnV1XLRCH9bqa",
  "key4": "31um2nLMKsbr8CMauJS4cNjqMwLxrpU4EtB8q3mTRBhBvi7xhUQiYoAKEDYxVMdf8E6YEenM9RF9YC4kA7ZsehnV",
  "key5": "2C1KWsZyHW8acStAosbNdZJPG82TisuaDadVtAG6QbE7aCvcKwBqnX3ifpWXdvbyvyQieuqxbUfZ4MHB1kg2oHXF",
  "key6": "y2L1PMAsDDwMTMKePZEPAsrgD3JcRniKAL13DwFeUWqbGk3PB7wmVTAFLVQSMrpABUHL8RTfL6PNmWzk6aCteAG",
  "key7": "4Qww3eRB2f6MpLok3tgfZmvzEvVnwjDfikUZah1jG4tFnaUS71LRrLokZnf2tSJjz5MaT5YsMPAvTSRFBf8Zm82Q",
  "key8": "3ZW2wP2NBhjdGA4FGbEeHTgv9YkmuxQnVcd4eRxzMVD6CM4qGubDwSaF5Ka4xdW2bsNMLRiqJj3CRoAMZxnWuVHr",
  "key9": "23tUskELfoENKjCLcvhkHfHDphT8nCX5iB2Lfy9CdFvhg8yV3M1Y5nZ84PVcbGHx3oXUW5dYXHiLRahuBc35DcM2",
  "key10": "3Wn6htG4B9Jjbz4CFxPuqjvhcp4ge2MTJc1aVQwrfeC2KoNs5prrK6hAGpVYXBKD6hNGa3a3c8ELMsrZReQBHqRs",
  "key11": "5fVL9WqG5iasLopTe2EMzznqHrDpKe4kx9j5NNeJVgVnymqtstzAbni31ENCeF4WbWyREpeLJhdsjyUP5LkeKWMh",
  "key12": "5AqEAQ9HJeCE3UZXkR2TbxQ84voV1ZnMt9gkjMpQsjrYUJfENoAhTvF6LVhxY8GznJRVYvCzYy64G2aPdCwPp9DE",
  "key13": "14u9cuM1hXRumbGfrgtYk3HEqJjU8fckM2QBd58nZMqUby3zYTRtkKMqbpj2sjj1RwSU29HnqJNWCbS3sPofJhs",
  "key14": "5exVWkDFMELWdWsph8AJZWKbaibHZ7gbUepXLHQPFcYTWhGDty74DAKyXfkh5dG8v1yNFyX61qbUruAYRHa1RvkR",
  "key15": "3WEha2bUUgZ8RZhWkY2khN9aK45K5dKyvjCQie237CXSQHAJsZvKy9619RMaXZiwzD43vN9pF2QjMrd7mjCtmNNW",
  "key16": "3xvGMPmC8uBKtPJqw5GdQamz9GAmjw4upuHEMFWLmsugPW9y2mKybrb6Ce3ckcRN6cAnGXt8zqTQVnzKyW5sn9fw",
  "key17": "2gBShXMcugbLukFBFAGw6iYJgqp7toCCjL4Q9YS93MVVpeG9bTYp56UuqHxo9QTUkjC9MWKTwaX6rpzzbveHKMcP",
  "key18": "3Y3FJnfJm4jZ6hjakD6ahbCHyTuCCsD1Wj9kcQtHQhNRNpjAGCSKCSG4p8PW6E84MD6xRHACh6SPdryMkHWPDQWi",
  "key19": "65p3ok9GQTrJ6KhtZpVtWcchGtnn6yXh2fC92C91rnXxErLyG93fwGDBfG44XthQJts7FuaK4jQAeDn24ThJcYx",
  "key20": "3wsP8ym9TCXCySj7Bgtw3jNPyTe2eDUD5H8SMkHJ5MKZcMdWmvPbZqriPK88j5EbMb3KNfHEr3GDhX4VtVDKtveQ",
  "key21": "5TeZ1BYyUfTarZwyzr1WoqLK4TGccjJrWSQUbeprrtVTA8rbybSZk7vzVHYTP8S6at7JmwCGnmGn7XenrAfeR2jc",
  "key22": "4SPCeTjWtB6HhhiJhtFE8qSUQzhbzsEJ4so7YTaNZKJ4z8ERTuHAp2X4fT2GbcaFdKnUwC1rAiYEzaYeSfE3rRB2",
  "key23": "DcZaKZdbvEGQ9nUbnqeQ4xLjjuuPbfWYVWR4xWJCmK8r8yQKcdC6RD6zsTAWZj1DWw5uciSBSUkaAcUi3VqFHJ6",
  "key24": "5aBmWAJKDuPujaw9erzaD1S3HX2hhN6AjH43xc2hpmsavmNtcSvQzRcaHUZD2heCehLA7u1C3f7RXqJ1o6am2xHY",
  "key25": "4DrwN6gkUEZ3xs4s21XhwqiPAko4CHmnryGj1B6qQfeWA4Tg2ciPqBox3bbigEoNHGPf9ytyEhvgDbmwujP6x2T8",
  "key26": "5mq32fj1bcW7cTY14gfTwQJiHPz8YujTXg77Pw6eh9VHzJiQsSV2nxc3KtwZp7eePj9YVa93NeFUmYjZUiRyCGC8",
  "key27": "2mz6gszG9x6i5FghsXaTQ51xAePuBAw6rREymumfqUJXDgWq7cNVtQDbCmdDRfLgL2VevUCWZGq1R6M5ZzbESwX6",
  "key28": "dG5J7KnCDrzwTYajVGNX626NyKJcKs89BjdiFc17LKrmsvXUpDeSHBL3SLwBsK51SfRML3pCKG3z1VYi1KVriVZ",
  "key29": "4CZmajL8BWR9WsCwebsrbCU4SoGAkSSFDzMjnfvo1Jdg78oBH2yuC5DhQaQmBW8Pdkev4KQb1bauT3YAJh7TA58j",
  "key30": "bujXjJbsXMnPjNh62n7g4X5hCikN7eyb3inAptHDjhHN8ncnjb4sjUXPF6CGWPe6Uk3jPzkpx9fCrMnAHQHZyQD",
  "key31": "4hbzhxc3TrQsVxZVS3YtKzMzpSW9kw1Tg5LhUGksQHdh9SRWsdhRKK83uoN5J2jqLwcyiKysdNFGK4dMhJih58Qp",
  "key32": "2TZNAEQ1h6CFCiqEN7KtbiPZVWe97oBVRXu3Ppv1qXNjCza7hiZEtLXW1k8tzvqzcrSoB73D5fNEM7qx1xyGFXRT",
  "key33": "BNdrCxdQ6nAhDLTGuUWthu6aKFM5fiLBZxvH2fkN2ExV8d5q91nufmVPudj96vb1UZEiqic72UKmJ91gXE2Kjng",
  "key34": "2jcGSn5pTa61oibQGQuYfQWUXgwx14zEYBCjBrLDdnG6ooAuGXfHxM2YcMAzoKz7jyw8dPmu2uy6XepR2mdq7ojd",
  "key35": "35Z8zZ6fE6HYhqDWYpqTkangcs1Ssc3NCh2AyVfwZo6AyMVX6SF8BEQzrARwXJveAaxAbLy1UnNAWkW8DVfo5gqi"
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
