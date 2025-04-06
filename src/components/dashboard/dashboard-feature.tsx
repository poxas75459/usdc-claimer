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
    "4BYhsLk2VkF53PqPEJPHUvenbnW3cEG8eG95NU2kfQa65gySyiDMBfWrBWLcfoTs1hP5pKzFBumn4vhSZNLqszuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPesHcU1jtgjR7HgugCr1Cr7VMPXgPTNVJ2XsJFuK4aNQtytxmSyfMKFhfQqm8cvUchc4xeB95vTTG6DSvfKDgh",
  "key1": "2mYdABZBySUafP8UsXEg85idCN5dQ23AeoR7GcjfzvrDC6S7zopKMmwKR29vngTctjgUpAYwvsYVPiwpv8n5AEdX",
  "key2": "4rQwLYDfVfyXxZWRj2WghK3BQUbH3obwDtQV5fCoGaWjAVxGWzhSxBLij6TT6x1evNdxDavcd11jgnsokWdRwtPX",
  "key3": "5Ygv4TpMBPJMq1w6bNmRQwkMa3pGAScZWMcYJkNvAuLe1ENj1d8PCeiLq6sEBGknV8HcaxmEWZteZbH5La8fKD3D",
  "key4": "4m6Svg9QMznzHyhcYZBDXiJUxB6orz8FhVknY62nL8vXeRAVpsWZfFuveHMSfM3uesj2y6tPUXJ2bKt3AfW5bW8G",
  "key5": "3e4qgqamW1eRnBmcoKanARFkUYQBW54UxCBG5BnkNEwtKfqFjnitTYjyeWJzuszCtZp8Y6TWJzGBkyq88hyTKnUN",
  "key6": "3qzoVbcscSUP7xBHKLUSfj8XrQsKoBbbuUQ2mrDkY4MHc4JC8EmBgXXXrSSkJ9oHY2Tavq3kA5j9HMvRvut9v9Nd",
  "key7": "2iy48gRWqM6u7aiAoRTWxzJe7daTT7gsptz4ukjttpR2uCgBdcz2CnZkbK65PwhcNij1eaD1z8yFXH4KKXq5GkL3",
  "key8": "4sTYjUFTwkre6ebGAKfSSuePEcgUCeAJxFZS7V5berDsrRjFLvikrRkFwTsjjHrTUpXyNhEkLMyJTAUyP38VkrFU",
  "key9": "4EdDCmvZpgTtNWHdEdKDL1PuEuUpme7gkL8u5xhTftkSob7fdqU2ovW4aGwE7stxdsmi6gKV72YxigqTiwNSkdn2",
  "key10": "4hM8SdXe6QoAHgwhQmuAQn9QEg8REfTHYs8uwkrv4BPNxveg1rEdpHQho54D8qA1SWhdZP3o95u3cJj1NjZfMsP7",
  "key11": "dBLzjXCwxTPc8B6kK8RZCgmHYCxncceckmgoy44z4Jaw2DFTxBrzqjJg5S22KpzmjV1EeeNqrNGpBV5Yvs7BX6A",
  "key12": "3RYocsgeBawJ3RuLyEXn5mkdqwRwTt4uEdnKqPssXYAsQhSdSKdsjYxB7i2k2qy9avjquhwcWo6Wa2Q3DfFjUBa1",
  "key13": "2SGByrpXBNGTypL6BMxe9VjVaogiEcf5ZgfFNgL1cAhF88qNFZfV8UursZKDVQrzk9b5dXdsyBudb5Rir4CcMsyv",
  "key14": "5TsxBnGJ5eCuJ9VrLcX9TZjEz6kGgo4ufkjRDE1YSULdhJLbBGH8FupqjTKYGdnDfZeDnfDzeXbPHMWAwEGtjfuK",
  "key15": "4ZoidAqWWwZdnf1RiPwLMC1j9zU2jbAc9QEYyFvm24tuTVNARNSQSBm9PvwwQG2ocegTNzMF7F5ojb6EUZEJ3jus",
  "key16": "4tqemxN4LbiPuGpjR1e7qvEKGcWCmpx7nsQs3eKZZAGZfrLZXkMXWBSx2UBsfAPParUCZoobiyHdtKzRcb7Vkf5L",
  "key17": "5ZrbH2u9cuyrBH1PN6NNFucQsAL74DkRy1Md4LuvZ7tmvZD1AquhKXNhHuKzEXphdx3T5KmRZ4zw4P8QNumcHa5H",
  "key18": "DBqeY35H6WJNqTEBFE17ksPkBmSFNEWF6X8bh2MQtFdX6oXkoWSDYNNB6MYUwQmp2BACZGjifnhzKvmacnESmcH",
  "key19": "3E7Y9bbRKGqStKDHvtM63pr1GfdTn9qMn5MdLvUsCC2jWAaRbmV7mn3xZVseHKnKVqSWFhVS48YLdft6D4QmWc1j",
  "key20": "3J5LKutzZAYrbjY9sHQ4ZASGBFXEgbKP6s4SLao8DJ3Rzk2htTYu3Rf5uPbzLvB1vDQUeJq2VispfcD4adJeZzjB",
  "key21": "4HRNxeLeW5smqwUVHz9wZ6MRcJ4pUuMnkPK4SXFwo7LDZPXSAGZ1qm4UzQAjANeBrEYHdUxPEvtNdr68q99XsPhU",
  "key22": "3owVfv5udZTNzMZj8PF7fSiot7AbaP1L3BMcCMXut8NnRBWNurMHaw2GJsYdNwpJatkFa1jvajEie2deGo1oaLxT",
  "key23": "2qMswJjX2a2WdAP3BzFonCY3yvkvRq2eCKUCiPJZC3GStjK1L5zc5ti6PnLbYxUNBCPpAji7pne1LoFvbTRY1qei",
  "key24": "5UzyMqKNDYfdDmdNEFvzCvcU93RgYGYpJjgTDiwu1P1EAbDB2H2zAvMGsiCb4TJs4QPJCivHR5c48CKJDpnby6Aw",
  "key25": "5YUb1iqokPpzJMNYzrmuipDVHRyCtPjgHEmA2i7Ktt78mucodNeWdu3fETbxeC666RNV59fSjWmwb316bE8oJTiM"
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
