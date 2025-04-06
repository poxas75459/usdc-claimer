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
    "3xWzT3wXEQ39gZ7AMaStaLdCoAhaEFc8NJao1QF2ygq2wuGDX15mYDmRw58NUMu5C3vTJQfoC7MNxHZ1QtySVDQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnyUMf73FiYv4BD53mTQxnsvUPtzFJw7s7NWHn28BjruM8j97tJ1EFoQ7KqsxouXR497nrWn1dCwmheW2iNp3no",
  "key1": "nByToLXcsH5rAPU2AfztVJHnxs6UAy1KbzLnzvEFMJLgrnaWoEErQUQi7qhxyJz2w1keMr87TJtCcEEgWEZWgkB",
  "key2": "DLLSwHibag1JLEb9JqjBrvyFZRaVEJfp2M4Dq622DDcyFRP6NVDMCYgyceRs2jL9NCbXniHtA49EJspHEPgghJ2",
  "key3": "3Ciybdc1iDhLUFY8RVdmZmYuruCN5iwwvTuFDbQKWp3DszrEngRHyHQ8nCLsmh6GPnesQtmhyyZxAhiQAzdWV7qs",
  "key4": "5LZx67zoxX4AtsdFs2Vjfd1zhbyYmNvmio6ysiMrmzFNKJoyTtxWNHjnQJrDFmj6pjviYtDLe9jmEXGfwWYHHzQG",
  "key5": "2JFj5xKHyB28fJjeM5SrHqCL5tLRmfTHD4JJUkptJc5m2PQ4ZJ995L87sL2t2g2XFw4mAxueKojFGWosHykg8vSf",
  "key6": "3DKCatWoQiBAUWHH3rRi9dV4FRyioWmTMb49Nv2HVgfTB1roR17pyK8fwoswKHyT1ZtHJAJcwt8Zz8eYCqyVDAfg",
  "key7": "p6erTwu9axGsvVqh61TnKFGKGxyMa1LXDmJKfg8u8xqBMTreusPCdF6eJwQAKCs7yU1ocBng7CzSYtj7Qch9tz1",
  "key8": "2YNfuNnkhGFmm3REgZA27DwgRu9acAJEEf1pihztUBw3Tm6BKmV61cv8ZzHftGEnYCyV3XdbnmYYfzy2evtQuBmW",
  "key9": "5wiParrV5oczu8PNjrKtCC7f2VCczT8i8H6qNLTib9uJQNH2GspQEUFfRF22CRKE2BRATY58dkVcu5AYciajP8oz",
  "key10": "3MuRNKPH4CvMHynEDvexViwfCbDHyt6dHBagoMP96RGwSkF7oXZkE1nidV67mrF4uoU7KtbSM3mKV9zoEHiJcQc3",
  "key11": "3cVUkiYqNFhWhcBvvjgPQWuf2P2tcNv9p5grd1HEnjtrCa55GMx5weHfpQ3UVaoHgWyNyYwaV9kZZoZVFBn8sMco",
  "key12": "5vg5ajjH9FDrXc2AxFkRYXjchytd8FQBCLGZ98vPBnRisjEKQX9BHkygdfK42cjLAranRJ7VadwS3KaaYHuAeMBK",
  "key13": "qmgExNzPLsRFmkQctTiWBi3Qoi32UWEAyDbm4s1XUSDk7vPgY3qPTk27eeZ9UADda6pryCCEESxSGtGcgqgHb3x",
  "key14": "335U44dcLMhRjBWjoa861qqyZeQpPvKaCeHqbrdRd4RVr4CJir696U8YB7pNoWYtZfdHCX8Xf4gX4Ldq5SakuZGP",
  "key15": "5bxkTbwn732UuHAs6LRrDzykijzKe3HUGf4LdY1p1hSvqe7wEJAosDTN33QcUE4SUzPDKBEd3z1AsbZnWQFUHnnD",
  "key16": "4DNyBM8p9B62jwqawbSqiPcJWxgSQDqvcbcVSiC2SpCFSkfw1mCy7tofvgBkgy54v2tsNAYNtB8aqdv5gnYtYBSr",
  "key17": "2tfmsyMaFUfEJC4jmyzpZucZY2jbQCNpjcjG5K1XacvsmPzfMG56qUZ4VuoZG94Txtrq2V7ujgsCqsKRQJTAykX9",
  "key18": "3BzevRgFKAfjHZW5a6JPm8gVd7AMB2v4i6zP517nNSGpWP4EYrNaQiNVwNEs4n7SjA4MPQoHa2pg69c1u8tzAQzP",
  "key19": "bqvH4eEt86aB3mZYdJb9TAaL1n9Jji5o9FevBdw592EvVScmAdNGwYEPupKjqT8g8EmMAkEqJfZPAuPMNk7pFXi",
  "key20": "wEa4vrG1Pj59noySxNbGeLPZxU8RAEVA2yXpBKso4sXmrQkJqdNWuC2BVTrzmSZG9VCwwo52GqDWMeTfDMSZZZQ",
  "key21": "56oZCn4J8S2y4YsM6s1sJbLyvJaxnp4GwpuxVNSH1DM8o1yqrkQHsGfRS2q1NwJLYoeHK8ijqpGg8gXM3XeAkkka",
  "key22": "3rkS6nnxH6N9qPJriTKcXtcz5hJ27wNATzis9VXruwPLub2H3MFfMqurTM416FCq8bcfU3jqc8UqeZi7MaPtbScM",
  "key23": "4qHRA3NHtzhfJiJd3o9BHmc7bw2vuqRCPVG5hVxF2MADW2NEXzJ8uSYLWzpT6pCMUFZQBoYhAP4hsKFw8WePL5VA",
  "key24": "4cywjds6EDMbXXiPkTKsj6eMAi6NYFsBkudtWhoDJimRBmFZhpfCetRqWnLJv7YqHP95tpo3kkg4UnsgnJWzhga1",
  "key25": "2SmtJq1SBy44bbpsYnzWLbRZAMJiJmsnaaiYeVyvs4xQzCuVh34iQTfPCNX9oVwRUNdjze4TgrDbK88F3WvULbFZ",
  "key26": "26JBEyx5meLYAckATKXFMMv5wU67Xjqg2nvYKNa165aUDSrNPD6dhvQmR4YpiSFyzE6XRdJiUeqdYNX1QrEG61AX",
  "key27": "2F7pP94TNxMXePGupLAtSSGx1B7uQ574YfSfgAmzSDwoYU5icM55MWSx3SsCZPXnfgKDe7TXqMg8mAkZYtchxDRo",
  "key28": "2DrRp5EegbEmqxJfcJt4cCLrEtzHppNbF66aAPkEo3s8yveCWz6nGTv377PR75iDxCeiHwbqqjL8oEciEcZDkqkT",
  "key29": "2FvcmtNRV9aTTZ3MKSr8RS1f7cZNrckQ9YfujeuWY1jGVw7aRfJujKKyPw7cBL9MwoiJXfhEmQK77boK9pnSiKrf",
  "key30": "5yfGBpaasGLtFnBBY9DcFxDFPffo6PycUgYnA936G59anyjTzQKbUJmeRz7HjY56fHUFpDdN6o4VCmHca4vrzrD1",
  "key31": "2qr8DQxkGYi7VYdhQdUVdzHbkFNJLySEyzjUvCAfBnNAL3SNV8rkeoWadgh9AojYpcn9VRxHEaMZWqmtnbJFJqbm",
  "key32": "4fi3Q6aZD3epBrFCA1vPfBv9jsnDPhivXSgoEexfTAuF6s1Ud7PpWxER5zNjWUoAJAmb5BZw3XYNP13ZbzQTjedJ",
  "key33": "5S15dzo9Y59jRRvrBqNBSM4LmViRH4ccCSNWyqn4QvuzSkuVVsFKopSq6pjTz7BWNKzymKxUjKZBnN6Syrt7LGc4",
  "key34": "2Dc9muAV5HgHJj9P9PcuRLboAeGdgdjmXjMnvq3KKib2qg2xnohKWLdkmN5mpopBZH7j3FizKrYK9uYTd2SdvvyJ"
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
