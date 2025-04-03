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
    "63q2ooH3iqCaeUtx7RJRvUSGVd2cihJBmrJDTDX69CTeFyfqoFQfmjfDHiURzMMuSDWqQ7WUGtp4Y3hohydtsJkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b7BJdD6SVBMhsh8h3Y5ZbHBMgAWt2roiB22dGTygcvu5sQw2gNr6tY39KXPJaXFLuKY7BYisiRqVg43rZsTP3K1",
  "key1": "WzQq2qrTn62zNtJRKY7gM6LEvgme4wXBAqqeobSL79uqohqETXkPiJFEsLFi7DCeUuF1y1yvKrXS9TMirzdQoig",
  "key2": "2hCW9pxttfVMgLphEnr13d5zZpNRzZCNMrtPdtQEDSYfvZ5hwN4DYJT6mWocQk3kskgCANqGeVX22cmEBFWJQgDb",
  "key3": "5mSNx6iiXM8gD4u2eBnSH5ab1TJMAATuLmzeb3gacGFZMHjCBCQuX2jiGi5NQ3GcrukGJNHQhKJNp3QXnWD5skCd",
  "key4": "YGs6FUXnYfkYkKeRMfMTGEXq8BgZohQ2q9RdgAn47X6GvScJFpfYeyZsCuHn29AFxjRYbFw85djvnBYeE59DqTj",
  "key5": "2D7cfgFVbNMjpDGbgd3Jw5sFAsAXWURK2QhR3vk3rnu1cWmVPJMsRBWPHvX1Zvvk4dT3xcdjPXtjHTgMudUM3MkU",
  "key6": "4mzh1DnY8sgVZFJm17PgjgE1dM9o9mT3NfTMuH3iprKgSYRusUyTsgYKxmtEJUtKgAN15D69mDpufeNm7qE5EkDn",
  "key7": "5WYB5wYMDrxcwGngxc9TiLs7bKwst2gyRs651h1tt9mDxrHVUbqmnajA9yJaRQpNdZ6Y7r9t8z3HucYVXMQh71Em",
  "key8": "zMSFuxqVszPekFz9WcgsXUAKwSNxN7U4Bj6r5DR1FqYnFiwTrT1z4sQQt91cd4X6PWSEaD8NxHYfKfen3Kj2Wjp",
  "key9": "5oPrWExrjFvPZTNZars5DRHAD6inuhrvSjNW7oJ7z2P4rCcJ9p4uZp3i6bnmfmRz1a748KCM5ziWwhDXXs2Pd7vd",
  "key10": "61PJcRQLwxZJ7BHZtwYNCi48ixULPDbu4tM4axuKc5ijitaHckrDrVVaK8iXcNVT1P6nw3nWGbc8jxbaf3fTYFio",
  "key11": "L14vXMT7Bw9NddVtp4amjkpGNZwTM1NzBfnYDBuBTQhnstbNuQkvfQjSXHxMKr8A6MrdF35JsjvNeX3Vip776f4",
  "key12": "3j1GyUBGicujHR4DXiy3v5nz4QZ3qWBjQJaWVyidrBoCqYLAvmXVJtTnP6d8C7PbBDHnCaSnFjbujHFLg18yApm4",
  "key13": "3zMVCPqgnjQVWPU3xpTVgU7UZSjSS3yaWzoiSobtdKmDtkY5PmFQgib8dscEJYbNfAdD5YrgojS167rtuXcQATaE",
  "key14": "2MSfLJLudjAMdLtbXXBDW5xoEmPGcot3aZ4W9LVopenKgMRUsLFUHACaXUZNq6tXVQgDrHNZ8PGT7CMS7YcYLhaX",
  "key15": "4EDNUUAQDKeuC22GAAUW14GZVpFSZvVqYUkaXN33PUgd2PgCHQdAnEJaNUfq1D4rqbSKTEzuqmCQ1cVhoDfbySf6",
  "key16": "33kZtnoDyTsSA6sg3hs7LTQtiHnUZQSnREcM4QBYrCEUvsjTXTUiJFLEUzrvB5h7Y7cuFkiLcdo8yUwDMRQGhSjy",
  "key17": "42VKucnfBtNGNk6BcWKjSubdQPBe133NPuhUxA7D2GM6gnfr4ELbiveU48PMXqRBxMvTpAwHvNYnKqHWJgEtfL4d",
  "key18": "293AvBxNR8WUbKNCq2r3ft6Bwfhj3zXZL3UDea9ypXY7cq8D2Cg477LPkSQFH79i1tcptuZVynKZL58osfWHxDTN",
  "key19": "5qJ2nNH6XdmfnAFRvGRAjPcBztTCNCUAj6adn9D3TxUXGpS4wbZcjBF6GneFoBwof1oPY5VsUwGcyB3XCPFNQGq",
  "key20": "62R6xGB9c2qYBn855GogCmUn7yoyjUzMkwSktSpaQvFAY1KHcLLMWKdXWR7Jieb8zJ6aUZa6dVAGkuzUdqk6UAzo",
  "key21": "3PZSfxMXmzeF9tu5vdkQDpiPTgH46n4MsJbvzgtLbGW1zHE7cmrxqpSL1TXhr1iUymPbMTdUjymyz2nK43pn1Dic",
  "key22": "ukC1J776jGYqVEVXFWcZmLBRFLK9VwPmzzXzfThRhuhns91NsQLnCvXEUP1EPPNtqydsmothGVXoMJSDuPrkD8L",
  "key23": "3PAAqs18UibcrSnUqeTA2DBq4Un63p74JhahcimxMDJUenyWdSEsfZYKSQEJHupsxikxugwucxJWZSUsnvUqszBQ",
  "key24": "4dTG1Ccnq4E28JQdxMw7vmZWZjqU3TvPQ5cC5xYJkxdCi6G1Q3JG4APyKfV1XUSKjbaHXCagDQaCqBLcpWWPyTY8",
  "key25": "41d3RacUmManp7g49hGtAho8VZXhezYPw2WdkRiRE8s71FeakQsEQcYnDJWiCK8MqprwRHSMC6aSNrMt9mmgPxBB",
  "key26": "Fe3Fvw6RsJ4tu2vLLcy92XNG3GpCWKuCA2qU8a2qyZrYaejYEXGPfM3RFs3GP7xNUCJ6QGhMdDDsZSfFsHDQtgQ",
  "key27": "4EjsyXZ7wXLmNpVbSKEFXzkHWES1w8vPT52XZR24Qa9WLEodFZXhyd1GVjoxL1xSQQDQ2KFjCSZGA4cb6KEQdG6u",
  "key28": "5hA5Pr7FHYfmA7yzGz6r4gvCYyjnXV4PCGoFFvZqcdkk8by4bYYMKzm5BczRujxBRGQJFaR6CM8go9UFmqxrQT26",
  "key29": "2RA7MZa1kDVUbG2HDfBVWK9Rrh65aMBs7cHDw9MBaXpv1Gmod3kZEDMfyAHdEuZ1YSEZvuRTNokngyiHKXUyDd5R",
  "key30": "37nEFdpE3kMwFKxhbAvnNtdyE5CUjuxbmsc9mMo9mm5FBpucxta66g2gBC1NXAtE8tbqvpX38jXomYDkdvRuciTR",
  "key31": "csizYSxG9jK9LSba1tzEcfr7WWGU4vCRjMpYHdibe57ZuELxCwn1JzLf4pnnypWvQhvnC6J7XTkirctviqWKPqp"
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
