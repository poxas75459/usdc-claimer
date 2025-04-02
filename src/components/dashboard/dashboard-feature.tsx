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
    "5a5tNAPK1PhT9W5eL38iFTMQ42X9wDv62EHw6ePCxiadzhgh2SASUK16iTpSVXHJwibg16kFys4sLqZwxRH54q75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtHQHrGdfXhu73iLvN9JmTZfJvyjLDzQ81pxcdt5mbfAWc9MvhP1vT8UbaButgQ4rU1P5TDrc9hPzVXraKmJQw6",
  "key1": "NvyXY8LzAiKCt7phMhgB5mzcwXkR7LVu6jS7YrPiJTmMoMc5dMyhkF7qhEyZ1KqL5M2Qrg1Yh9afibfywHYzopE",
  "key2": "3AdyQ688eu9W7uayZBoqDfz94zpqSzDwNDJfuVbfshJ3XL6SsTCkGH4FWTXGLUTqCuMD9zSyCBwvYcz5Dje9BrcF",
  "key3": "3hpbLxFq7G4nnwBN7wDKxYdQgmoWgUWEDsok5qPvgyRWnT7Jj67MBxNDWemDMT3BVbPWPZbv8ZBEvgE9XE5TZL7K",
  "key4": "3ArwM5M5T9d3mC1SdB2ZMj6QcXxQWy7A7Sb4XnqfFLBikxFxCbKRCn1g9ahRMbzuTR9Z17YTf32cviz8bAodP3Z4",
  "key5": "2FGYZHDxaebbkKpsVNVjs63xcF4VKXouWkaEd55hEZtZMbnRLwKxUjSFfowj5R3YjhFRPcT3JvVyhtXorqmszFMw",
  "key6": "Yiz7Do3QcTzzpTN3Vba2pG999jPvuBYqZBV3ZLmqyTGnarQ1j22vg6Kt2Q9jGTF1W2LNmUjEvC28KCxvoHTsyFx",
  "key7": "2rFfywAfqmsrzf28X7DctQy9TP7dFZe2L1pXcHWeEgio4MvnHjAoRZqxpb8DiZ9oNjS5eXdsH3U5NB54uRFz1ris",
  "key8": "3usR1LMD5cajTPtubjb7gZVYmL53tHu4g6hyUCE6aXzwCzKwtB37vr9Z9rXTjuivpbLWLjPhmHZHASnKMjqF1F3w",
  "key9": "3LswKiH3x7qtJLAZsrcaxq4b285cGXK82H8BXr3aWB3BS5UdHPKMd7jw7r2gUhoHUznbQWqNZDWZjF7xXey2qCBC",
  "key10": "2jayfkLUYxv4W5fTHqCYcoyTWzsoKm71UNah5gtjEzyCAp2UrWT5SmmhENA4qS1rWg42tax14fHgSPN5ETDUJzDZ",
  "key11": "641GHZNJjLJrm4vHuTDGq3FwYSMdzP8ZDSEoBfUjmkVidnMiDzBsqZxycCHyoEqp5YYtoCVCjuVr8UPgUZVJbekx",
  "key12": "2dLGV4tP4nWBFWBNke4RYZXQaiKfFBzM4rEonD6xGRpwqfQQztJfpUFyfQaYpqTFaP36Beg2VLV5S2GX8pp8DcMq",
  "key13": "5zYJrTuJVmxV5qMb4G8F5X4rbJqgBG9awNL7EKyngtY91tfkXWH2EorYy3oWNAhcj8Rmof74DxmVL2vXcuMmxDJ1",
  "key14": "3mhcV3U7BBarcPwd2FnUEM8vpHeZYK4mNaLtBAb2YGJk8fkaU8H6sHDzzB8fVZh9TPM6StCk5DumCyzHKdKUkK12",
  "key15": "5mt2wuZdab42vzc7ZrZneRSRiq2Cnzb1p1MfcuubPh32tCT2cDUe1Q6LFe44SSvYQVCuPis3J4gpVzJKhXxWqTj8",
  "key16": "2sRvoK1eJz39uRmZZ7BuCV8qaFBozbAzk6mt5rF7xNbUehCt86GWf6YmpK1jEt5f3EKotZXFef9eRFR3NXDPRuEW",
  "key17": "3cpVL2u4F3E1Gmmove5rvEC2AL5JHt5GcgHuH2kiqa9DdFqWv9UNbyFmanV1kKRzEhgyp8BBzupHC33ZY5SCBhFH",
  "key18": "3q2JACA8gpmybTbWzyJhomPzTgL7f4bo1qUiSs7nY8wh26jgZeMZU6mESRaE3xGh7KzhUaJ3YFE3R7BQ41ZSeBDi",
  "key19": "4FR7kk969U9Vr7fJ9KiqdVv8rCaA3Jr5vL3JnNZUnQRo7gWxKaeg84xMwEkpDWx9HdzkgKhqcKJ4ys8ac4GKGL4W",
  "key20": "2dEx9puhYqtze6PsqG5zHJYa1NcKUQ2vDYRVGqT7emihJ4Nw5mcwgV5jYRmSeCP8bsiE3a6STXJarVtTRRa8uV7g",
  "key21": "3ZbcWbakL6nmaMQ9j5njaLUtRyokJXtZx5TctxeRr7aCUn7thK6mVhyM5xQiwnX7YcXr3q32wtSu3PLYWuZsMXTQ",
  "key22": "781ENja6NyBrDTLSKDMZpZoPFZ8pPwX3mf78h1EAYMUYQMqTmSmisA5bxVedDgQLSQJnkk8F4c6TmX6VY3CeoaZ",
  "key23": "4syPgDVkr1XZ2X8CXfULXV13h49J1E5QTm4dJfeZp16aogTcAcsjWNGsYBYU1QvZGTLWSNvxT43tQTJXzTfjAF6E",
  "key24": "6686uwdpRU1QBBEN3F24fdKuiztc2CeB7hjD6e2zuWd2jbKYVPJ9aQqDeA1ByZAXrhRscNV5nd2wDwHC2ybFgmPb",
  "key25": "4UwnNFYrUD9pMDPGR6wM4ftWMbZWGZvrV8xsce72qJT4NmkeCxSQzc1HDUbzDCVnRbAt1QPmgL1MGUYX7SgEramd",
  "key26": "34dEE3fTtsfi8itHNAhM2e1Xh1sX31HbxVr88M4r2ZwtBAAWWAnRR2EKZZGAn5TQbEoTU5yYwHHupyqQ9SbwNKYi",
  "key27": "4Zddm2Y26aeweudJLmuJWjGx2M3MauDcckzDWySyxiuEDaJvypVjrbEfUvrrAmRfCy4efMRHEWVGBYQuWbYW26pp",
  "key28": "4Faheyo3XuJg1U6ZyiynGY9rrpVpYxgG6g9BnzvYasoY14k7yCr2j9NdTiUaJporeiUeNmoSadnT1tfR6iBKmgvb",
  "key29": "5bcNcjbJbuYsKcYFRkw56WEpC5CKhPYPbxhWTfXTzJatYchP5fsUgUPKyZarokJEyaMayh4hRuN1KhyoDiavvgRY",
  "key30": "2qdrjNGCywL55dNJFHZQTgJwGiFxY6SNP9i6LiDhLaYEqq256xPaLJHw9c1TFsoG31sDYtAYZ2HS9UC4VYhGXt2n"
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
