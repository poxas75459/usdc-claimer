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
    "aXNgaETXpaHnrTWNRXY8TVmDbCLCNujaA4PpAEuq6xLfGg9b1qyU2xBwDWHmRipeUezS9RggXbuPQSKKtYotHzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oiBUnCy7t9YgA8yn3YWwpMKUeosuhj9QGXnPTbTMAeJHnxkjVPoWFE8gJgQdpo41mrstDvQVzsagLUpJoS17Zvm",
  "key1": "4YwinrA7VMD2TvXevkzX4q3Aagq5DtLkCuSGe2RRrzW9r6PvFQrZwsSoj2w9YgQUkDeNm9YFkNr4qoqWFC3YoDXT",
  "key2": "3j1uz4NKNRW8VHTf5dgf1cMdn1crsgr4UcaS1XZWcPAzMNQFvnKaGhaGmSaCkbWTNHtocFH9XfdFeH3gfKjjwzNN",
  "key3": "2BfGgeUJJZUQFf6pSUqgULdYyCQL9Sq39ZAtMBtaJshhPotW1yjsnktsvPDiytcZxTU1eJrLjiqt8fpTry4haMNK",
  "key4": "33EkiUCqYS8xxH1A9FhVgrcxj3bPoGGr5798y7tFACJzcuBoiiK77St4odVRCq4LxXwhku2Mw2VCbT6MF3sTBjBJ",
  "key5": "4ew79af3xLr9g1M8ydivt2wLnGhd4im4H23QUNGdPX9dFiibMfuvLCWkkswzBFocmcCgzsNXyiGrKJBzWvewVvvT",
  "key6": "65M3wDqXTnynKrhWUphxYfBCguHgxQJktvZoyUCJvF14G2DXN9VPrR4MXSKRzwdvqJstNHi34Y8zFSMLvVcmm7aB",
  "key7": "2BPZ2rVPf6nu1oJfDDZzQcTeuqfRuH9g7PL2Apz11Wp9mHDatm9eRK2sXUTSXsELiWwFv1ZyunZ4oAHAoXCP3bTR",
  "key8": "21duJNhHBvEc9nC9XwB4tXNBua7MFXtXQQ7vLgHV4SjdNs8EevKND1h3Cyvd3uEkdfwhgdzoP4AmRXcD5asdKXD1",
  "key9": "4cMzep9m5L1mfxs4chchCBamuubKzLRVLBX2qJ8Sf2gudWq8JE2okNhujX8puohdFCCyqu53KaNtxoPiBhKx1tyr",
  "key10": "3pzYQUoWXcT4vFizYzt5uute9Q8wEaHKVQXsbGvSo7EugiV49Seae2bjY8YfnY5yCGGVmEqCk8KappK4Vh7GkPkW",
  "key11": "4M9Ca4cNyPQMhJ1zwBB4WEoqA4qKHAjkdcLt17TtT8pSpBn6FkiJ5XdbHX5GPKeNkUovhS15rtBBEamV4R4tPXwQ",
  "key12": "5MKT1aahfPeaRVKEVgfDUJVhKDjujfEA2e7aNhWkQTRm4NpEdWbU2oRyPbh7JBoiRtVpAzjeabJbqLQcAUotQDt6",
  "key13": "28zk6esj3vitQcXwcxziCNXiDj2QSVmsUF3cqsaEwSE89RP7FvZpYSbBm8wbhrEco9XQGF9fxaXKgmX9wE4jHQ4D",
  "key14": "2jrn31CFD12jduA58mZJW195ck5ba9nnUCwCTNCvMJPTNi7553KfM5A425QCCDNzzcYUGbrZLCBzsXhHMrcxBBvc",
  "key15": "5GfaFFZkKPC36mWBrTahap7XQM2wWuB9cwaZFVSLcyJve5F8zJTyxm8F3UHYQ7L9NvJRuJet5Lvp4UTdnHuXqNEU",
  "key16": "46UPAPM4gSnDXSTZZe83k8jXnCD2wEkgEcPrXF75435upjDD5fdLeov8nB3bLxbWB1ZfkJtZ3Hga4Az18KGSooda",
  "key17": "4TQgX2ZDuVpKoUeSmcdnPoyWff725coiNave1QtgqhozkC959oeWrbZVV9V2KmbgRq9wm2CvjU3c6eVPKvdVz1D7",
  "key18": "zQ6E7xoSVzjgEN3aTN1xaEQYJcjiF7fWLeeYjAJuvGGN2LZagwxcRxs6jaeZe5n76VM5eMPqs2oMNvjnwn5bHt7",
  "key19": "2Biv5z7Ra1FvxHTBjxpFcqFB6fkhTAapRiErhhiLuS8G3UGA1zDgXFn7agQk9sNv7KvuRFmaQ9DdjsYDfnzYjEWu",
  "key20": "2LhB2pdoTUoYGsK39voH5BPhcFFvfSJDSGDxFBdngDA8uSXzaTvogu3mCAhVa8FJzJHtAHLosx3b737sNgSNW2TE",
  "key21": "5fLRvqcQWawo4cAejJMLDfprmNAcqsp1twCfvvsLQpjATbBFeCfYYLC7oKHRs1DHk1PPz1rgDcbGEdyLQTY6FxWE",
  "key22": "553scycw68w3maF3kuLj13dVfahT4G1SCN74QTTSVk5JTb8mce6oBTXpVPDBQLidSxcNygtDWqeV5nSyQsen3jbx",
  "key23": "2WPW8ZJzyLvmCJjsTPUkj1MpoNGkhQWmwgFXgLTEHkAFEdn3NEuNyPuC98GFXsNJSX3EytQvHgRDSciEWEzsr2tu",
  "key24": "5AYCkd2a4oW5aLnUkewgMfyCyvLMorkmoTaA6a7tg1Cjf7wXniFFGzwEAqGK1RF4Urcg4ptFNa5YRKeLjdC5hpz3",
  "key25": "3AnVjj4whKTJQNX5mFzrN9VaagifJoUGHqpwVvinbccNPv2zpq2XzppRHEUpeJ2FHTtZN2wcteTngdJNfmhqfYM8",
  "key26": "3ot6qQVNy2bXbjVhMDZeHbvLsfZtwfC6VfhWCmKGaoMxREKcfP1jQ28wzrsw6kENmfqUTwrYneKfiZjLXhan9t2w"
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
