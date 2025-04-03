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
    "3zo7XXeme3Jt2L3XWWwDum5jqBtfPcMjDWFngYavv6jzw3a7cHDW3WFiVs4ADvGfrVN3tCnXUbVsoi1aLJFimQMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bgmwtif8scXTzLQLpWvTmxWSuW7G26DnDz5DZD71Z3Jq23eD3zvNq72YY6U6HBdS1QgurnQCFRWu3xiA4YjNTo1",
  "key1": "XZru9ETdS8tFsSXL6V62eB78aPw8k3U1N5iiqKuWB9YpD48GWvYEGqQBdTZej1Y4r7iarULxG3jxLRNWyBHeYVE",
  "key2": "3pPjGyJ4k1oA2ph3AbCMAMpA9VsRvpBXyANVUmEHVhviAfbMHciYL43tdhymAK27G7dWpkE7VwjwaXJaUQmbB1Mo",
  "key3": "4JE3MLWCK8LwAoDTQg1K5y7m6mn22m5RWqVvrdPDe5HMAcQCANwJGJNQjdBMb47MqSywnVoxWrcfYPLo3kvwKc2M",
  "key4": "5gjaAuyMqtjGqa9Uknj86sR2JCfuHeweNjp66S4DUzv9oGiaMFb2xJpwag4fADa518diutBzrViFAekyeAxdM72D",
  "key5": "xAmMCNHu7Tn2ZeJPeWJpvuE8Nmi2BgZKAs7f2JWf7nsbDwgdpr9fnLQfbf2tRcJ2QfcP8Rk2AVPWQXQEqmojRMM",
  "key6": "2Z9NdLZob59SByzTzv9sVsSwj7sSdXgDBz41cdmToxqJ7ddySyX2ArFWY3BjibYHr3izX32XcVtUomGhnMgGJr7G",
  "key7": "DDZcpi41JX1kyjjgYttWJhXQm2PktK21J5AZFGtvCTtvuxzkYw8WeUBdFH4vx5A9TLvdTcNdttD9znkNFwUiLxU",
  "key8": "5pumt7kVSFA389kwW2axA86rnmjZWE7j92WkBwXx98Aoq67Z9A4uLQLwWJ5UYnTtwnmt9wzMXa2JiU9ciPAvTKMB",
  "key9": "4Rp4pwDihK91rhsBCde29SgiMGCLApxGVY2KUjB2yZGbPqMCvJKuL5Zso3sSFqUHCGRkzcv8TmWU4Cv8PAunevAu",
  "key10": "2HY3u8htsjiRvJeQfFKzfWJL917irC9ePEZx591DhdjbeoUd6msLQWzQ6Gin912aJ2bEfP5KJZ3p6RtYWs8BYYG2",
  "key11": "5hBjejeDqmFz9w4MNhDnTFwCVFLtBCoXBpfRmMdUW9VHTizCzE8d7aWfamfuspfn61oVf5XVAczZvhrcGLxyrfb8",
  "key12": "2fUoZPsGe7AhRfVtE3iQSFbw3JAHy7BWT6sAiKRUqqfef9unL5vxu4SPGufqSBPALvN2YzidyLawbyJnCCV3Lm42",
  "key13": "ucmJyBpacBeKCYVkTaTaCuJtkCPgjaGaoogDxZts3FdNjhRc4Mcd7XKJUghLEtK7mmDBX5hb3VVC1zb4mF1zaTQ",
  "key14": "3xh5PFCd8Kp9zRj7NoVBP6BW65aHJU1E1Kak9zGe7SEJ4dVEp1utbNA3vgBtHTsNSZcauRyJoDqEJFGoKmWHjjJ2",
  "key15": "g8US56VQmjZfCwSm7mHi9e7ctRruvExtm16sMWnQmcENwBVt3gsFRsqbPSP1fKoEDuGPp1AqeiYZK251VGYx7qp",
  "key16": "2nnmGLNbU73oRUvCpY99KNvzWPcGSJPzZZG7dBWTarqsrpdbvbMEFjrgGLYhiiZiN1H5EV4qFzNaitdSyZFvgqFG",
  "key17": "2GrdqPJqB1LLm58ruHjX923L47mJftG59xeFKhbtXpSBczUJMapqxBqEkyuN1MV2K6mKdswoLdK8orUQtVr7fUGF",
  "key18": "5dWKz4Ze7As3Y1gaEedgEtxy3dUzEqWi6LrLthvAkoh6RLR5yV58bhG9wTntQDuXGvXZ1hst9Auo8Wriur5WVNrP",
  "key19": "2qWSbnmw6TpZFBBM3Kh7p3dBUfzovhvYHjUXqJmLqpkZqkN1hTXpAfumJ3nipv6QyNnoy4PhrHsFr1TBbaCZLCWA",
  "key20": "4UPJP1ENioL1T3CWzQ4y9p1G5Nq3xWMYo4p4hiYKA5UCwmGyX2Ao2jP6iQAU3tMxF8aFhC7zHkh2AcKshceTaehG",
  "key21": "5VdXYz2wqZ3fp6zyhVa61aJrY62bvLMqamRFe3Y4gDRhHagScKwWc6mKdRYzJC3RUXoZgP6trT5PSeqDVfq4m8W4",
  "key22": "b8RuZgymNsRiK5f8W6qPY1o347xnZkc1mwU7EwtGEY6JqTc4vDxmeXQ5hwTq4EoHA1m4KpwjT6hNmYywUQTVuzi",
  "key23": "VJj89VxmkCzRwJJeTjcgSU4G7Zj1qhrRomADYPBiUCgfWRUpxE56sV1k5JqwYwSKyiQVdqFAza5cYeCVbozji1g",
  "key24": "Wifzy33E8m3XvdmmhKDuH3qPAGqyKzocRQdRXXyifPpb71id6AHPkGoiZ9y4sqx1bwwDLtkZDMA9s3JYX4Qco8E",
  "key25": "ThJjVKCaCgf6v2Xd8gW2GpXJuEYqzz9JGBPwQXTojjc9bbTXPVxMUU4HroxKvyQhXpo8kYXGHLDAMuWDSoQdxix",
  "key26": "5GpoPc15yZokGZhKJqk4MwJPbcBozZBzEpj4mxamyh5ecc89j98BTLsAZ5YcKQmn1fLvpdUYS5f27DPk3aj96F45",
  "key27": "4dVAwyUAhzPhCrAPDfe9hD1ngScoaQaV1s5hT8ve81oEfKCD6ixCGJWbw1wAVJHyjw5oWWWo3QqXQqG3eKBdTE58",
  "key28": "4p5ShUJMYBcWQC4Xvq4SBYaNdSCekBF6WH3KvACSx4nCLzZetEifUGRhUAnFirzZNRY9YKUapzxE4Am1heQwU2yM",
  "key29": "5dW3R1ejVQQAjYKQKVbJBbrHm3a2L6qjwrmJYRiwnNfEcefDmBiEMoZWb5VoGKQacy7dNjLAjffjC12jpgr8uBBk",
  "key30": "4s1s17GG9nnnkAVuwwtDQoBWQqA7gkVjPqL9LvBThq3rYofFLnZRgxMHCKexapBy5a6Tczmx3pwU6NcskbdBcrcK",
  "key31": "z7KEpoxdZpk1m9wkvcASrC1bhT89jzZK9UDSa2KN2gjEmdMi8zmGkSXbB2D9JEqKLR4ATrNM7NQGqKaxV97FcHS",
  "key32": "rUkc66MA6JVQvzdZAyJxnHYqnMGyW9G8jZYxZuigZbLD9yL8nQM5z2HZtAn3WhJLXr48cijrGdJJUUmsSYdo6PQ",
  "key33": "62rUEYDWJTAsPbi7ddcyhs4u29CVDSV9Fx4d4783ovt3HtzLn2kwDrQ1rEZxYzVRGbotepZcrPakZTDxSsBFNZjL"
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
