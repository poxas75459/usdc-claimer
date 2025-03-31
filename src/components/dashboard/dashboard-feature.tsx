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
    "592JcYPehAfvMm425P9GTzNSv49XHzMuqmSxzpAY6EMW8dP3wp78jqyeDDEC15NX13DyDQM2cbDuKxVRA1dWBvPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHQgwsWzu5vsNUZpie57TcqN5ZjYGJm635vsKV6qgZtzfDcJrQqwjB9bFZap7434VcvwR7pwP3VTCfqMHsfiG3m",
  "key1": "4dnHZEt62rcQ2DXr31BirZZJzCvay1FHtAfsvFzfiyWuvpDKNPjznLj94drHfu9nHipYLnzC3HjQTshc4ghy288r",
  "key2": "3LWNpeZUAAVRu345yondub5kx7urfRDTijXSe5EDDCN5Sapouu6A2M7VizmfbBCZ3Q9Yy2UWNQAJAt4QWZ3LZ1v4",
  "key3": "4ZztRbsDXmBc7aMp8uVUTDeofNUpwBPhqy7PCAAyc24cppZCV8VZosrB1CnM4b5c74TKLg3XJGhM9kMDBXuzh8kd",
  "key4": "4rpaaHeTXoV2NVkHZn6QTLJktPZgH61PiwzjkYskyagz2LuBZXh54sEA7eVhTpcEboQzLqH8nd2GJSSkYEXZBVQ",
  "key5": "3vbXdz5L4cBjod4PU7CAoJtF7T8GwXjEUicobKwAGbBpfy2xdVCehwRiJ8k9JLnUAY8yjzqhpAcBad495jw13Y1c",
  "key6": "13m9YMwG8f3Udo9x2bp4bYy7Bb368e67tbUKoZyS1PwE87QmPf5mAQB6aSKEJVehHBzpyB24ZzBDXSeudhV9Q2d",
  "key7": "oXW95ewCUugtND578DBEj7iae9AhGRVCh3nPqb531j1K2WrUAXaSNC6KmaY11aZfRwtQxo5EY89Uoz5wWPiKmsN",
  "key8": "4TED6DHRwsQaVn8bNK94Fbdb2HmABUhyNxQo4eSsVGd3E6JcdsRiTCDppxKkd6hi2GqPiPgfWB9PTWeAYqBwK2Ye",
  "key9": "ymrdYsYFDY6JsMCHenQmu2siyACknQQhxwTcT3nqddQ93qnCsjsUwe4RQJwuCow4GLTpJpy6297uuieJ4xZ3Bfh",
  "key10": "2NsohFoqbTQt4Ua4qBR8ens2fYQqihWQnBNXpSZbgEsdysaeDrXVQtGk6VGPmL1QwNDMAhxBowFMnxJw4aWAJ2j1",
  "key11": "4Q37Wni5DbRkmxSFobf49NXuAKUMeMWNFXe66cS4ekLvcJRZTtrk9ryqApXVzEAScMg3LCTnsi7ZWpxovjrj4K2Q",
  "key12": "EVNeuuhZBrjbabszjsqNxuohgsymErKfsZXEhDLtcPD62k6bVRt91ky34gFXmFaF2HprmiWQpiExhxZ6kfMD1ZN",
  "key13": "3wNB4jUwS7HmLV5bXEwWRKmBKKo39jXvynyZy4KwDEEcpKqkLS4MAFqfwcmEgUuo9wj8ssSRvihjinEhUAPDHn5U",
  "key14": "jYMpoz5ZqtUiBNYnuRLbnuMpbFqW3NfA6x6b5DQUuAngwd7vV4rPnQkrrADE9X6TM3gWFCXDV2HHjkjARHKT8t4",
  "key15": "2558vBwXdujR7TQvmdtaGMkbnb8hrLB5ewL72r2rR3Mt8nLP3DBvNYVraM2BYAVRW7rXwH9xy51NKP95aWUzVG5H",
  "key16": "4oauYS2nwCC1BvBZHDqn97ZcP63qH8NtAfom1d6nGpMZoo3eUZrWW1G1RPTANDHDZ2crN4JtcnkqDsbjVog9Bpf4",
  "key17": "4wM5rzwfDSzQgX5Ja5Nruj6AummTasihF8RpLeq6vtaRbMRYCWM4Y7wdwSVywyLELHVLpmigDNQYGDCsXtY4UieR",
  "key18": "kDxHz6rQscfUhRcEmJyBUeGFk4ddhT49a1jx74vYgxhiKqjkX17af5qrFS45ogdtK24T35uDNu9jravsuBWiCpB",
  "key19": "5CRwZggqxqbj1dLn7sEj7xSFv5WBKVeGx887uhvhqQVBmQvQGPjy6tHn4RTE5uFGFskPGCFQfjRDrUD9C6hxyYoj",
  "key20": "19CbrALDhLqAdqAtij4fsk1rujzTydAFgjwuMXVSzQmbRjN5BfrwaT1rGF9RXy4SnuFtnhKSRovK2Y5kTVhKh8y",
  "key21": "4yJKyv8x7fpyZ9Xzt5qG6DwHJgZsuwA33NPo5xPsyV2xFPDB427p3bhZyrdeWFxciDUvREQ5foYCoGsq5rzNmMU4",
  "key22": "249A7oHEMv94ttXJ7gbRXYVk5LJLQzKLaZZ6q8rbwjxgJnkaqzAHuv25zTXmNUEJfERaJJk2hmpec8gsKMCoXo7j",
  "key23": "4jc9r57RnM3BcKEKPJB94cLmTZmHaQLfkX56uDy8mVMaNJfuwGuZLvm21JjdQQBXLTLmJEkfcjqDKKUEgnQHVGWT",
  "key24": "28jVsnFh5h2wby9C1qMrbjhYXiVgShM8nFRx4T8JNtGBWSysLNaX9MDYuH9THeCLwkne2wfU5GKzqgVnB32ZyuRv",
  "key25": "5CdDUa7gCdg8u8G8ihGY1tYnoE1CoUR8gHsJinJrNnyF89PiycEiur7uJv6M9mq84LsSpLRmWsGTAha2LjDknxyQ",
  "key26": "5hosxfimjiHJLxeRpZN7Jz6H2VJ3gQa4YkmUXjnv7FnYGCTdbPLqn8h2mVnjhtYhG94bCSjj7ZHsd4ve5GbkNEgy"
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
