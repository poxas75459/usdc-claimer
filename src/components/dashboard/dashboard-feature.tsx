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
    "3oLxWvxPiW8cNV8YiADGY8g84t1nsQxhAkNGEPDT85Vyq6Sy9ZriFt5G1AamAj9BCdLXVhYxTs7WUMPKAzqinJWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Fe46P3vPE7XAnrwk6uEVRx1UFwpSSwK5tZBHCoCu5tfF9yx5JyJEHSTbxuGmmm6duqnCu84YAXNhwzLshJfbE8",
  "key1": "5ViiSbpHwaNarCuHqH4dyZFPkZPRQXABF5Dp3HGTBnnRJDK3UqNpzg9BCfW3bmLsxUpjovFL6JgTzEswRHT3Yjbm",
  "key2": "5s4vto7eDe825mtWgJk248gXg2SH6R6ApB2qWBY9vtHgbf4EN5sdFCWG6xyZudNR3JKaDX6dpoJjC8sRTMg9aUd5",
  "key3": "5QgL9aY2gzAMevJmg3kk6a9fJT3Rh3YJLfv3wvtMWf8mekZ63mkP43y5gLMuAGUnkJ7aFmCPvpsNihdrUyRNNiy4",
  "key4": "3Gfu9CqdddhVic3bP3Dx9EiA6VoabLLy2cmirKnoror3w5bgPPdfDVJAP9k2CuFc5vejJR8nxeZbLDhm4XfzAKav",
  "key5": "vD9g2NCr9wWR2FijDXcUfoZdG4UKrpZfjEwRB1Qi3q4E5pHhQPe6MY6jTPXBumjE8HeECnpEo19G4U3UZcZrFWo",
  "key6": "2KyNPgtff6xJhSqADdZxREPiqi7Cq1FCm8ZCm3koyv5vA8HGzrLDLopr1C87815w97HUii1fqVA6B9GtHsuwQYho",
  "key7": "58w3jZ5BwDF3pmhAf5fAtqMiiDP8u5Coarxu95mxd3841wEjjh6nz1kmTcCijSQpoKkkuoZHdr8w2JoLNcwdG9Un",
  "key8": "2mWwhMMSbgcrVq27SY9z96B1zQoTfhCPSpqLbgDJ9CdZEeCBcs1NuS14Pbe2BDFqszK9fvirQQf6cmDDc2HAfKe",
  "key9": "5pHXDTBAwFrCPetowd1eBX6uGomqdas41gv9j7JVn3VmDxFsiuuLSTkQvmbQeBLs1UTVyLb3WRrw1ED9bjHaR9ro",
  "key10": "VdU6KmXNKENgfT2jZh5ZxaMHtCkN8A7zE3zs7AuzhLEnkpB88U2vKPE67P1ttgsubNx1zWesSbDJFNzqpVZ9anb",
  "key11": "4kMRwksEhgNEbfrrneK4cNDemLpHfqgXMsH7rwDhZy2bmjaakoCXWkPWayvSk2piwMwgdvAhBWNosyx8qhFro9zq",
  "key12": "5aGujqRsxtPrUAFdVhVbT3XKDkLAN8fNTgg2vcyZcnVpo9pUEzYg49ETKHzuyVZ7VAARTEb3L46cvC1K4oTjsgq1",
  "key13": "5mnDvFNuiN3qFdyRzajwdyHsnjZZnnncgq95CFW2k6RTzuL5wKKP6VY7FvmA4T8CdiZxtwLora2d84VwxhczebqE",
  "key14": "3s6qxt47527oj3FA8P7WNj5kdRaGkkcKgPtYRUWwxxCJ3kFBjWc6PAtWLxwjjnoyQArj2qNUTHxKtRp5kVrUWidw",
  "key15": "5oYaFzMt6euUxjRVv44y1NgAbEikvErMXCPMfCxbtsYdqBDTNgnqtECsJgtxBeHMQT9ngudNf6CnNQpTAKk3Y3s",
  "key16": "2HkppWco4v6pRNLoA4QCnhcAMYEmWVn32ugVLb3BhcHzii7bfsQz1z4okQnmsAkkZaHw9vQer9j8xSvs3haEDojT",
  "key17": "3Rcqnt4tA7xwCtRDcthDPyPUMyZbyajjN1B1nJC3YAS7G6xGXbgLDQuWnK8CvA4biAkPYkVHJodY8cWMLphzq4q4",
  "key18": "EeFc5RVwfeLPBp3k8FKK1we46JjyGgTD9nLv5k5VMu63jBWCRiuo5eUhxH5aPS5qVBepJUbR7hgmWouqdbzWJeg",
  "key19": "2MQfTeuBb9UiLypF4t5A5CjD8ib3K98C8LR3skGqoh4V4wWReFsR1H5KHR52qAx8xyeTmEWZAZitqPcHQ6QFacBV",
  "key20": "Y2BiiTgwyEiUNbvGiUBdLwiuB3BUQZTHv26HJgoqKn7VJdTTuEHChSFffCWW2Es3jnhCMMD2bMf1ZTzngghznLA",
  "key21": "3i3abia9xdYgNeMzGNgSKM9yaBsVgX35niukwCF57M9KeqvS2wwFNyDS7X3fFsFpYjbue4dBSFBVf1kxnjVwdd6G",
  "key22": "24vML6zUtB4MzoquEtKEayWRQziPUjF1GnKxqoeXfDDNCet9wiaPPzDVvoc83BvSf2jzyzoDooRm76Y1WioBtD6A",
  "key23": "V4TSTaBgvuPBZoe3NVvPmaycXeuVg6kQUhERWBDRcEaT9nCDbLzjPCekpgmAQn1UYYdwXuKe11oUh459fLtqsUP",
  "key24": "5UAtBzMxEEfNcRFYQa93egZ7TNDEzxHxNgu8fJogGjbnghLuDFR5Z7pahq29qg7T6Aaq5NCGzWK6pDb9UZn81nVX",
  "key25": "6huqgHzx7tT1xzLakbqstMU3f4MgNp691MrxhYaR28TKDxpCtAF9UzEvqUSyxAXNP3t8kVUf8Ka5fF1GNYYoysw",
  "key26": "4Ue7DdKB7L47D7LvCtyZ6M2wRehADpGbmvcs1k3xnnz89nEF5x4m3SGf21i8ctBThMB93zjRHEsvKDHwF72mSPDQ",
  "key27": "5mBZcueUeKc6njh1QmEfS7tTstqYH8BwwPaUxbCnAaWGYiAnsrr8qvjukgNKsTqhyR4gj479GzfKaGJoBqwQfozP",
  "key28": "5MwDv7WaJ1vogeqh5hwiReyQgdwgqQd6SBUCUzjuYD85HKZzmDr8xqV8LUvNd7qfbmZpQ3eXWPUzumXkaFkvmXeM"
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
