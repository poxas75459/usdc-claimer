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
    "1T7eHVft6jpdo6AusbvNCo3ipxchEGEh7fE7dNfb7CMZocMnZJjTskU7e4SwUA658cUgEjxvMkM8aJfNqDpBSPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krJCd9KN5KofYKwrePYxp51ESQG8ZH5NA1kucqfQPNoQ29qwJTfu1XpF5MQCbQ3jjKtpwdmMstw77zbEExsZnf8",
  "key1": "3aTX2YSKpnRZbmqqLCT8fWjxLALyzNaKa2NafFrg5SL9YFdB39CNrw6t3wDSXc3ukNoJj7f7GvWPZJzR9r3DYMd8",
  "key2": "57wKLMo7TBJkruuW42QREqc8CtfriB8Tzv8HcXr5wDdWo6iStoqjDAPxUN75JpSebrkyvrL2Td9nP1mjHB5tTx6J",
  "key3": "fHCiU7av5hfgLd9VA4L7wJTMELxbXQMPibRWn8XSwvYKWFfZXvpSxEPPHci3rx4gZJCJUiWxZnSQrrZtboZquhL",
  "key4": "42ttEMXMTPbJVrCXvJoFhhy55apra9PEVF1TbDgiRPNSCQhbzB8nHeaWqFYQFiTXZ4ZsZh6BbDTbqnkVndAAJGdn",
  "key5": "3B5m7gXX9EzCU7CstGDEqSvLcjdaNQ8G3vU6xCkBub3rP8JDof51yshDJEGWzq5svGS65zMsTYGzB4VG8puKYPgj",
  "key6": "5S4AjdpeQgBqYi7DuFFfAEVHBhnjtYjZP7KrR7RruDfAHUCgeeAf9cduHQ159xJXaKjy6dUjmmTgjRdP5gAHKaSk",
  "key7": "3gXzijdxi1n42LVNYwfYAYZbE6WZ4LgwXX4DZus19ovaAz2CTFbjccHWhXGrCQVHMXw6CWDDo9yLrTN6S7Yiqi6D",
  "key8": "5959NN7YGHhRXpiPk7mqz6CoQKkBwxkbsALHpQix9jbBKvMSqGxwZSFujnJXgDXaLWvPhE3kjj66cHoRfBLSRmB5",
  "key9": "4GLhVjTB72Uae5cpkxCbe8fU93E1CngkMqB8eD44gMvWrqYg5jtcVioAiaJ2PfzoFpwCzuHU6z5zSu91imiaaB2Z",
  "key10": "2cjJsUNtqjaMT8zoqqtJhrKLiWkhskZJEYAcq3xJPDhhyTtpcrLEpC3s6YxXbBXAThNrK57zrq7gh9TBywRJMEFJ",
  "key11": "5e3SP1R11nTqkDaY6oYiq2eHPTjWHLvDU8aQgkZcpxnNgkCS3F2NXMACvSE1cT8QiERRQKCrJG8BF9eV2QAGMtQg",
  "key12": "27WVjG6KAcGskfa5vZsaFpsd3CQpWJ7WEfD4omRtoajGpJCLb2oT9DCmg7TYmHk9VUq8XwBe2Wxfc5bhWyShJKvb",
  "key13": "5z6Nn2X5E9bC1g8QQiJxeQBktkbLpNR6fjyBWTYWztJ9V8BUnM9roeZH1747nVLRZCtSkYx43QfzBna7eVoee9Gw",
  "key14": "4SNuiLPJ6Xybz3i8oz6HqpDz87DghuH1UomdcD7kxWMb9eN95AmX4oXyeyrEHgieq8bdHTYbUrM7GrATauWSsw1g",
  "key15": "41gkrcLUdxcJy2FVryD6khqBXU3QzDkD6yRhZeABb5ycypvZkQYvdgnkgR9vUudbFboSdxmRpZKceLroF9x8ErxB",
  "key16": "4rsRHN5T6wdYhF9YUjCUJMaSg967L3ckerjiELuRMrrAougv7oxmdF7EPspyX1Bof488FbED4XyA4uYP1B587yYh",
  "key17": "34AeKWaAB35DDbYT8VK8BNCuG47yCvqTAynng4gP8B77xvZfnpdRcTHSGXZVLfwKqVecwx9kfXXwS3T4xvzLboJa",
  "key18": "53XBV4S2qHL2DFLqGQXxFBoaSnHtFyCRkujXhmhmx3xU8fBdQ7r6DTvYdfH6a7tKaZ6eizdNj5e64CySWz2hvVob",
  "key19": "3BNa8piY54oLkenAjkZVyciqh3ADKN1yoFtow5ecvqm57qNbiTQVdh1aqDVKCrBEouVK7WWY7nAjyMoMh6z4ud5B",
  "key20": "2VHanPRJmntrnawB2VKqbFNjHcuzkZ4YZ8yQkLnYnFMp5WnGhEs7N3LHZEagXaKRDxs3vXWtvXFrMioM1sN9rnXN",
  "key21": "4Wq5yM2SAmimzksrR1kob1YEbAsoqcTrGZLgaLU9kAc1bbrQZM8w7tcuSYqMbUeHP8qMmEFL3YcPAUeKXWrpLG8N",
  "key22": "43YpGr2EpHShCmjqCKCp1vuDuHknZkrSzMkJMk3pEhFLoXjyFpg9gvuDgiTdh6YTNr7eU52kKMC1phTbKxu46XnK",
  "key23": "3MzqVqdugTVxaBE6ZimDWxL8BSKgXLxnbJqSEb3vhk1NwdgDfRETY53PX9opH8uBRZa7Ktah2oFVmcq66UeSTgdy",
  "key24": "67E9rPcAduUTF6b6aRyS5zcnC7DGgmekY7EdBSWDN6BreahhhgBXgSpQYWzMcoHvs8G94n9nWTxrKyJXGYXJh9fq"
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
