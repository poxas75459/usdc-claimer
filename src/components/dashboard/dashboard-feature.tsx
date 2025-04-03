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
    "2s9wgfs68Dkne8n4jTHq8aacfKwWWiKnTraqfaWBt7aSTRhsKypzz7SbCTxTG64wwf8UeWfiTDo6bjtJQKwQNJ45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9v7cuqSZJwQKQoVXRiYfcKoUyw4kLw4mkyXzbkXiEruZEpEcrcboXbLd5K4mLx7eHDQVksbwgauHPiM3SrWoJhZ",
  "key1": "4vJHfHZVrwRSfikUzMPCXT49pkGeVedxaBqR2pPiLWDirWyWgkR6duEwmx9gEUwSVtxeNkAU1gV5PGUG5o7BEbxG",
  "key2": "5kA5t3XqSTsqwzFVqL6dsvB4msGv82b1qLZpSazBX8Yy64tVYhZDjAL2VYQqvbMMiefBXkwke6DKEJgDA87GF8EJ",
  "key3": "4iQrTas2fET34hcJwVZYxvYwtSuWqUKnPDqMxij51QX6LJ2jYjh8xhd5gPqbuocab7rvVpZT6SfivFhkKtjYyzTd",
  "key4": "A5CmaoHnMhd6tmBDJypUB5rNAT7ZE8E6BqeuyF9joJi4Zdkb7XgAJyct9X2zZkRZEQXUgLBmBQV9isAyhqCKQRQ",
  "key5": "2eJceVCKsac6sux8G8fngwSbi6DzrRCr9iT76uVV4A1RzY1tBwvbJ9HjWdqjHwxXRvGSHnU4ScwdMWbTxqKSazw9",
  "key6": "38Pea21EYmMGQ3fpP3wkSvRb4WFXZN5hbYKwukemmL1e1hx7D12PNxFpBuyMrSNPphvyQi9yfRjWSWXVtW3ehZNw",
  "key7": "DHhutvZuuXChnTaGf6B5AVyRQpkW3g47BbYdADSYxFeaonAxNxd5tGoP9zjmEKXNefuMFAaS85c9A9R1T5iawmR",
  "key8": "2xgWxyo4mUY28vvp6DexKesa4rYXnA1AGURmoDsKKmRpVoQUkYn29jq1cDWwF81uXTtRGcNA15J9Mio4YzfWbwkX",
  "key9": "46A58hAyXDF5bv7NqEC6JbvBtegLx1tj3jeXLbEi2wQyzaHK5e6gWdB1TAxPnd8dGvvc77t2k4EcpBfCP63rS2D2",
  "key10": "3TN1b6KbyuhAKkcsf8EpkmZXQGYHu2THvgnyhp7CwTYKjgDbLpEpFuMSi4waPf2dFJZbnFVsFpBJzRoRXwQCRBhz",
  "key11": "54Mjt6T6SyZQipttLjiByM7LMMXsVks6hArg3yEQjpT5NuKMPZCBiUiVQLXFtRK9XnDLfHtYpqagu9b3vKZuTcn8",
  "key12": "58fHkLUnG7jAjS6cvfhjVDsxvfVTApj1dgQL9SCMTQFtcP4iZnHJchLSVd3tePYWgbZMNRZSPH7gRmRck728i4yq",
  "key13": "5iLNMHbupgQGornrHaUmRJBnXxtkyJ93tgnxHjNSQGgxLyameYMGLAFRJRDGLugE6Bj5YQBkZrPy82q3wAwpBuGD",
  "key14": "2nNBf5E8DFCp1qt7tn2utQ1GiSJeGWszJdmDkVGiNUJxktLJVjmedgReqL3U7j52VYCotA297VdZ7hQVpHDH44CM",
  "key15": "58k9Ckmxy1vnuoYFNP7RV5c8JGByXXo3WB3Bq8A2jyWhaCsMVwYNeyphCKXwNnW4eLoCYbCCcCzZQAT3G4B6BJCE",
  "key16": "5Q3VbcRgHK7fKpTa8ASFMWrbYr7y9M1RNc9RGGvbhDYDSzcbfjAYmSWw2TXLygJSBo43XJcegKNwuQxsGbVAdFvu",
  "key17": "5Exqk4kc6kjioEzE6JBKsnE6jAP7XfRnJxxcTpQQCBjdK7hXX75iyPYzJ68UMVGv3EfZToRuLCYU7shdDrJDg4uD",
  "key18": "3AfyoUWmH4vjnySeMFF3rQK5FgcQjUBDU2b8odp95sFtZPbAhwdeajdrdUFKCP3T7cxNGGeCXJsqTA8EVEBbufj6",
  "key19": "4BLnfaCRSwXsZ5f9GwAQjFQL98GF3U6TBkcA9NGtH23dHXREA5rpcWEdgLpkcMMwrM8hubkMuam8UVB4aqFFGZRc",
  "key20": "4mkzsXdN11fraLLMANUA1zbnz9yPoRRXw5HBUDmzdWqG3vZioXT1FPi7dHjXTsyeg9oWoSgnHzXEY15Sm71RRcYu",
  "key21": "2fAWjaAJ9jmyyfzb6LzNT5VzrgrziAKF8fpYSaMtThMyx8q3oXBGHwC9qaNr8Smo6KLKtVxU7TQoCFBfdP3d6N9L",
  "key22": "56zSMnLGnbkicXwnLEPJDwFpPByuyihaHc3qRvfSh3155V4kpQpAK8JCRqnXXjySkFyiokQcxmPgvCAWuA7PsyYy",
  "key23": "K5WvivVmwCHGewm7577MnKdkaEm43Buvi7KBwdxJYBPLyHx1GxiD1ahq1AhCR6CcD7T74W6DwD9Zc2wH5YgEunm",
  "key24": "42dCUzhkSuEJ7qdy5GRSeuqRSczLB94CGuP238Hsu4wfSwviY2HXfvew9EeFArdNBEnQfp6PcyK4nHzs4dUDAZyh",
  "key25": "5tRWGPNvewfwSWSeE5e7K9tAUXfgdq2L1Z1H6EWYq8xjss681Mjm7xVZ9zCV1N5gZgB7JnvuguuHUsQCzZJp7wHJ",
  "key26": "fahDjrmZHoXLfewQir9UagfczQU7t3TsQLaXEJcyS3wGVETNvRX36SR8uv6TUpR583Z6hwdDmLCW82FXvBJosG5",
  "key27": "5KjB6ddSyZMpgmLxe279oMhGn2QyotFDtFoG2iv53whdowVGeLfRsPmQ1oFzRebmKPSr5R22gJBpE4EUeXGrJbxh"
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
