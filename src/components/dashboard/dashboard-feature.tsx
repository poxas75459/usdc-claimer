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
    "66BFcKbtEGbeRnaowHx48L69hk1LGrWoWfz6CZoc5RbNszkRr6NojCxymrL1cEdv7ttWKbceRUhatQeuK64NnibJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ydYWArEiShLvsuGpWruF2N1LKqgzDsT8dLdF6ZWkX6CSsiVWvMRFeXtNTsdP3srVJzYvX697io63jGxZsuhYVk",
  "key1": "58DUxad4L9uL7RfE4qBcaDNKSP1eZU33Ws7wJRby9Q1eJ7BdPVgiHHavE8KazTbX6nWh1xc9P1CRk88B9vTfjUZw",
  "key2": "3ThtBXoGbJPkwrF2UJvX22RaarpHTdvGeraiuFGg4F62NTLg1PiatrpfHuRnuVhjUD5Hy7mciwYPAxjy5hyR4yvb",
  "key3": "2AAJMvMyi75gj2zBnqfeGVKfaEsbL7iccLw5azB6ANYMLvTQF2HayRAxmkT2nK7EudW3MU7Z7KuZYBPdHzbQsN1H",
  "key4": "4jcYGFk4cmuf7gid5NjnyF8AkjMwLVTVy1r4dG4c9FMfJHLSBRMAt94RgN4PZFzDDfuNQqQ36663QT2qXKtezCnY",
  "key5": "4cw5RejyUs2f6f1cBzbFUfSBpFLuutEKtepf4DjA4m6MvJE9XH7xF3kEwsCU8m4Le8ErVCvEopnJhxHRzoi79mCE",
  "key6": "4e9EFDe3Km1cZq2pTyMESxJoaofmtDMU6f5ttfzjKZ8AmnAiMQ2uphWF3uzihAPzn1D16VycxUH1NhZCAbBfbn1Z",
  "key7": "4QMJyhioQdf4dwq7SSB2u81cuuN4n3EcsEQLUBq43nXhgSPtZmqcYCWd2NE8SBZViGvQUjkcgiJkSg3AQX1wmawT",
  "key8": "3xTY4gLcuVLQ4wxt67pTJxxCLBZqxgnFZkkqpVFEhfafsVqMq6Bh42pXNg1upVd33CfN1SBeUxEgebKmnHZ8qJXS",
  "key9": "3BkaoYShhrHiQa46v2TyFErJe3A9RnHTPKZTwpMKiFrK8JzatXtAxU9d84zUMv5LUEo9a5G2WvBZQotv5fghshn1",
  "key10": "4pzBWm7ZvdAjpPj5v3KoF4rwFwKEH1mi7LoaD6qE3A5jqPD2MAAFDxC9KeHRSpEd3D43Cf2SBvME9tF4prsttpet",
  "key11": "SsDogiHVJZ54svMJqTY9eMh2ksGvFF2yANXynpNpNjBWa4SFWPa4kMKAzDKqH6hamoaRHVzZWcKYa5sWmqAaW1Q",
  "key12": "3eSUczAAf8RzLFdDD2zRJP9PNcRT9v7V7p3yXbJ7f73izYxCsDdeZP1BBLVU7n82Y3QwgriAcvbHcS71crGANUNo",
  "key13": "2sT78Ut4nkJUUZgLWLcEUfxnLy3udH6W7MXBEi2KPo6vu9qEKWace4pEyR3dJWGsDSH8bJRGfiDk2tptvtuYRj33",
  "key14": "4uskqg4oqCv81ZrZeLFtxweTZdn2BPKQbvecTqm2nu34cMpvEUprnKT94CWkHskWJyig5AfGvuEFUfi8JndQNsQF",
  "key15": "2dzsDuup3kTeNoKft3FRp2TChaAibux8vmLtMTJ63oFKhpcWhdzT1LXes9tp1kXHCNz625WwDF1kigH7efU9iPSS",
  "key16": "2ez7bvQ4n5xpN5yrz3KBvJjWcZ4Sx77NZMp9AkbtrYnnXbwU3pQuBNBQov5VwWQhntPT286pMkK6zyqARbeBzXRg",
  "key17": "4QJR19ebcpNZTVUtcaCzF89SUFPfApirhgS2bdPPX62W8iszQFvCKMesoqfrGA9fcEvJCySXafvW18L86MXY69pd",
  "key18": "6SojGk9vJj5LjeLQWifuu1KYHBymsWvhARcr3r9EttYZEaCUHGTJQHaw7MF7FdQMtXss82FZL98GBaKcxQ38rM3",
  "key19": "3ubrEzcDv5tBLD54X6FimvLRgr1gf5RQSrttk9s8eyQn3cjeUnCv1L21yJcnaXynieur1VxhzfrMNfSyp9FUXxM2",
  "key20": "5sgdieXzeRQBCFWNEpxDxxvaAeNPDy4gUgb7jQVy529MnbFCa4aAdESxxuWcTfk6y7WvUoRXcb8bqeMXuvi1yYer",
  "key21": "2HNqpzPnXf5XrHmJ1quK4PQMti88UenLAmYrHew3gpKpQteyfULibJFw8Dck76AHRuFXuA3E4NoU1ewiAsPmQ3VQ",
  "key22": "A6LpHrxLgeDP7XBtSuZ7x3MnQ9BNrqaXxyeEWZJh172p2iCsxbFx7j4Xyh52Eo5Ca8FScqqkYiiL5hswURH39Yo",
  "key23": "4ah9s2udpDeaTfsKh3MZhNrHVwRewnrsCc6GJjy9WASPjZiM8mfnkGPrJhkDJQbGf1tPJ5qUpgsagGGhbGuMruRg",
  "key24": "3T4EzuQwbN5NdvaKy6PB95wFASLT8jS9ibMAiQK835XKcVxTDPwBtR2LDm5AZRBfWwFUNaRJU5DFVrWAxFVyZEQm",
  "key25": "eGf4J7jteNBgBauQNqD3bGD6hxYuWgAEqTDxjPAiY4d5iLedUPs2tnN2GL7cqfBpDaMqARsy1Ukz3cDGiAfQNq5"
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
