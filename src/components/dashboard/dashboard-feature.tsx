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
    "5U61xQvedEYgRjpKw4oewjmrXEtGMGX8W97JWU3M93exmVRsR6RL3ERS2gKN3tKEVmrB7Hf4QbH5MGnNF7zEXaCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vc2yx6pvbXKsmcbmxetLtTAeHtzPpEgWVZDdkvo12VvGzqLneqpZf5pf4foeZDNdFYnQnkTBgL8riS8HED8unGW",
  "key1": "4TiFxSdinYpjjgetL2iJfVSLTeQ1CjMbHcZ8ooPg1iiUXKparSExetKh2vMLGNcZKdVUBC7QZSosrt9qRuAXAnm",
  "key2": "3m5xDNoJz1GR37nHUnE5E3JK9kPjCaFSNSezYaQX8wDw9NpeZiXTTLgfi3VEDFuvjg9Pf8uVDT8CJbZDkqU8LSRf",
  "key3": "2cuMPtpjGFuFyd4TkMMKSAprbZ9dAM4upMFxY6gJaUwsPk3veXn4oB9zeQNuBaq8oJyAqyLsuQmhkvYApp1JbUit",
  "key4": "39tAhosYcr19oMrMau3RmHSgNJBRrKUgD1dKyDkZKi7GxcfbtLpYhxM4zbySptJ3zL4HktEDsFKdVBTMqRa9U1sw",
  "key5": "556xaAySQcmxqofvkjwWXayd8jKgmmQtYJJ38WmTeFxWUvNA6JjeY5CLKqYphZ3fVcEbvTTHofzrLWMX1zSj4cne",
  "key6": "2SsgfwhrMSgc5tjrsDXwbWzEeUxYZwzzg5HtgMoFDfaQQM1v4jdqobZjL8Y4frgwYCLPhBHKZpQHbGrGfW4Pcvzk",
  "key7": "3QkhFsEhWgWEcBTcYo1aYS73PFHy7qWAzamBLSsVy3wWN7YapR5nFanXh8krUQUFCz5mzfrbNSqAevKABX3oGEba",
  "key8": "5sopMJiepsuyeweaL5y5f7kWbGUthHpqYs2HHq4JuXM5sCLDKEDYZikd4u5Wd6iVag2LJNTFyuaRYXm9BwdsMATy",
  "key9": "5x3pMzt1kRKourg5gwoH42WycVkTdCGizy4whJ8FCLhf9yFG6MECz8huVnEyWx4JpKjy9963RZG3zzNEzwTtAXcC",
  "key10": "5V4rS73hDuUJrVGUnb43i8Cjnu8QH6Tsd9sR566MLAmmDzKdoPTGcvNSAmCugTAmpRRABbGW2w4Nutz28sn1bNpx",
  "key11": "2gNn933kFdF75xZ3YDWHt2F7UN8AhMdZL1sJAkKCJU3pDY33L9ytok82tbTJmhVnUaFHjgWg86f135qimA7mr7ey",
  "key12": "4MnNnYvxzyEmaDFNDD9Wr2EjkwczqfMNi8XvpaLoHq3uLjciDNRgSKjdUQpBCjWPyMKM2CFsCNMqM226H1p2RfQb",
  "key13": "2yS7wn6afexeT6QbQvb3jcDzrdDukYyTb8RsWZu6FaZxi2vU5u8vvqj3zpavdvnGoPEyuFDNUXrCvCJMaHPbyEzM",
  "key14": "4ftG9yv5sEQn1XmXKKr2ejMijd8Lz8EeshwYDqSuHFwHRbJ5ZzSbZwUwgmU8VpmbfZsDQwDXyyXJm4uAZgjku4ft",
  "key15": "Ug6HMbCUz9J2aiFuT52oRUdGf1jMzfwCouVFyUVzvcvHRUe6Ac9R5MF9YRWBXqoqsBZBQaRTN6L1GhXE2KyxR1P",
  "key16": "5z66oYGWmB3LjpDNUtpGD1Vd82r1Q1F6AKsy252vAf1LPUae8bqqRy9cydtQfZzhT9UqtWpkBcyj5j5owGW22EAZ",
  "key17": "5AnhyqTnvLnTGgm2PrNcrmxbs6gxHy7niAHkUCWocJojHYCkrqZ9fL4L8fionC9GmX3w4js7wzWAZDum4Vbj5SRh",
  "key18": "3sJ5vLJJPRe1Ct7t9iUQVbCpXjJX8NxrzogyEsH36RaE5eubLkY81LUxjtdVeh2BUWTMAHQ6atsyhAu1XoVbf854",
  "key19": "5Jg97uXkyTf7Rk3sXBzkSbNeneU7u9gJij4N1L6fD57M52wvkMKYMQmwMY35ydJbLJxyjAkDx63MHDsiKWvfgmvZ",
  "key20": "erdw2AgYgxFMULmspy9qfcVSwZBbMCGAAxT1RzckmUwy3T66uZxth7CVgY6dUFwcbT1SXo4EsKCoLj1BbMyZB5Q",
  "key21": "9GbG8g87sk6tzize9u89H2dELkMfXLtAgn5etHzzfF44PGDH67SmJZESheznjkGiesAXtafLGjatF4QPE8gseiu",
  "key22": "4k1UnfLTEmWwueL3gfGntzrY4Nvya1qvHmomnGVzx7gyRuHYhnzaFaqiWXgSFaQhwrpzvwc9SKmP8WnwsghrLbEi",
  "key23": "Xwb7XgRwGEBYRLk1MuKWsddPenjd7Kfxg1tsxocUMUGwRad1Xg4mCWfC7vLK68gwkPciovQNpAyS6YsVVnJP46m",
  "key24": "2d8yaewCJUYB5kqFRMRBPedXRg6AMVfwQHLEJHE7EebG98UpiGstk9xRnHqg6pZAH44jXy4VYTKYYxCWc4j6nHu2",
  "key25": "4D46GG9ZkKBMTVAsq71bYmP1kq3i2Sf4CyQUUHAFHo8ovoZixRehJi9H5Ef3B4xy4WAFaobeC5jjV3fjP73otnde",
  "key26": "gje5ezLAsi1uD7uNEzxgGdNyL3zuCpqkBxUu9weDe8VABowLXa77N32jBNqMNFxWs2kUDNWL9L7Qd5XPd73sAkd"
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
