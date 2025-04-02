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
    "3CviTyGTxCN87jMzWXTkA2nV7EFRYyDeEH1kK9NxUFSmc7FeRUYav77Z7nFoyee94z6xhGxTP3BgrjzP2pKHaqqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DA83yGR5rEXkGE7TKE3cVsAxQxD8vVS3CfshX9X7q82PdwT1aj3wFdPMJsYLuDTEjaPP3ermt7QCtm7VjMaVQTo",
  "key1": "BUvkCNy8BEyTjCY3rse816DjhGJYGFM3noz9KxeK38ir17TesZaKQkGeHNXbQBxHHpQGAvYGfQnHK3X9KCcdh9D",
  "key2": "3NoozUont3MJVN45gcgMJBY7sjWcJ35gCQk1fjQGhm2ehzbrxYHJEzsnPE5Yd2Goo72Jy8TxVqJ8vAgEXfac9W1X",
  "key3": "5CVEFCoe3AxQhnUQt96F6BLVCW5cPz7Y7CWM9zxvE4W6NRpn5GnKAW2SZdZKdozfSLX76bbD1ympCdDj7EiNhqea",
  "key4": "6LJPzG3MdyrqBUawV1GefuoH4CzhvQMUc17uFR2BkUBFfsCbqHFL4N2NLaUNLuFt5BCJ4bVtTFttKxL4opZvjhX",
  "key5": "3ydccZS4CdeShchtM5fRZNzqjHtZ1VRXVBQcxsWs6vPMfYUDTiLAGcT2mr3Tfoq6yNwCDWZuhh6SNU7KbP6ELxTW",
  "key6": "2zbFwjUr1ZuLY3urea7d2CqPUtxfXznuhKA8YNqzMYp1foYwDgoiitqG4JFbLam3wi3WpVcvRDoP3XAVUBDJhGTh",
  "key7": "4BSiYYdDVqewgWyvNx3Xt6prKB7jGpg5tHp1gKZb6dr7RJinsH5KTFa7pzGGisD2eMi6rTy2YbLzYk62N95rJEus",
  "key8": "2ZY58ZTSfE3jcMV5V8bmaeq7kgFxdbax8EmJUpJVSkCsaVFPaL4ya8jUQCdK7LkDDwHJKUt3P4fJUozo28bynMxa",
  "key9": "3rBFkJofYkZwmR8hZsgBinZ388ayiT79JpsiHAN8CsPxqL1oznVhTi5pDt49QGvrq6NUwZv8V6Spsa6wahVoRdn6",
  "key10": "2TUSYU9XcM3fJNRxUxjm1CShamRd9KyYUzgTH7D4sGnXAa25SWwxN4WvXqoVrPYvDMTNwyg2KDADxXoxGmCVBzL2",
  "key11": "4RNNN643zhDh4JqqP9T6cwRyLN2dLkKQcWwopYDX63nN3bSDQp53FuuCoN3kA9gjeg7d8kKGbEHzpAWYvGGyWmqc",
  "key12": "5U4yXQ27oE8QFSQLF7rPZu76J7kZYUHTcHY167dN9zVgD8GBMtNiySHHAAb1t8uWe2ipv4zqwzhyxfZ8UgCdksrN",
  "key13": "5jg12dH67Tb9nEWYd11jqkA3qTnMRuYKzoYxEK514gCUsmAPYTngvkiwvi9VE6DWGd8EnJcLezWWrwDG7VZuS6DC",
  "key14": "26LQ7AiybURsawE1mFnnBzLgeLNKNBQgztzHWfWQqhE5uXq1k1fU6pj2Rnj517z9jJTZYGoh3PKHQsTaMtE3uNXZ",
  "key15": "4auPELtmea6PDSs3UTz7c5fBboBCPjcf1oGdKjMzRA8ctRzYYRG6wETLrqbn7WbKzvF5ADgkQj6nRBtQBU7s2CwQ",
  "key16": "3j7cvKCNHKBuVeMvimfsfEJNr6DQ44h4bGw7svBX9VqD3R2SuajgTjohWmcvEpiBcrbaNx3nsH5gjb14R6eLyifX",
  "key17": "38ge8iuyETL795rM94ZXRDJNQXNB1rnWVTniu5DzJEuvukbHmNB8xSeXa6xsaso8gtJhjcFneqCmPEkFuRkERi7H",
  "key18": "55TvQkzdDbz7gLFR5BSzwDHsrAD8Fc3TtRkGnhJ4urcs6Zw61p4D5ZmxUbE5Z5stT487YRv6dqZawZPwwpLEdyVp",
  "key19": "5XKgPSoNgqV9UR142PS42ewXrNGVdwkLHkESAVBJtGE5DuHxsNXawNAV4QAuneYivw14UY41WiiWo9RTB1PTrnXP",
  "key20": "3TLpXvtaC9gMLsxmPr8RFrcSZ1jypomADnfXu9N22BVZUpSrDbwaVcg42QJCrq2X4do11o1xywm1Ha3YXHatBdEu",
  "key21": "5nPdYDZyC9tB438cYxmv7Y9qRz3uM1JJBKWSa9JdpmfT7vubi3Wd65HLjSm7ERthtmDQkxhY88kmGDy8tLPenfhq",
  "key22": "4sLRsb8kHeRMqZe64PPaiSrzo4vujQnsimA21qFkFLsRxhnTQjiJALHp2ycdsi2NqGmnRjE2N3BFHLYsCGmMQBb6",
  "key23": "uM5QXqPCcThAYw5W7U7YQ2WTd3at2Ro9CGawWNseXV9r9TpdwP7jftpim7y4GcymRbCY1i2z7Uq4LDcLTa8J8hW",
  "key24": "5uEoDzfocy9fhJR2B4BBCZTHDMe7GAntByGXg9EjWuKmEuLDGxetVkrbJ4jBM2Ls6HiaKeEQzabHyvuNn9dTyUpM",
  "key25": "2u3oM1iCExKkXsuHE1DWer897u8ej1aTi3RRtSVi5uGAMjNkFqfxZn8GEyoN2fHtp4eYZ7X34D5vpuDbtyybwiNp",
  "key26": "23mVtHSepTH7T5w9PGFA9QcR6BHExyjHoNUV4MuXpA5iANZXE4YdzRBwJvMEnsdogEjexYKAnaNDz6gTQKWmfF9B",
  "key27": "yhMgXbqzRP3PBiMPBdu4zG5PNJK72BLUcVbTRe2zp6bEAHXsdmW2fB5Wf4UAff1JRP93SX5qMJBkFSZcP6XtC85",
  "key28": "5LzGBYsSXxSdCit5Lj4YpR15tBJj3Le49WFiAiGt6Tyv7oC7GPECyk5NzKB97mRWrLav6kE417wDLxSmPsTW8byP",
  "key29": "29DpmUMPxPt6YNy5dTyBFjRq44iXCHjD4WF3dVkAwpKTBNnFyemkk3ojWNAdLUsCewEwUSoEhcPhmqjetSbjHNbX",
  "key30": "2rHveZM9EniYxqXEMisGpMfpBS2pHHF6VPNy8ou5LHdEW8AY3xoWQN2S5CuctQEfzfu83K5EaApmsTBEuTqwXPfN",
  "key31": "53pRCFvdD5KWKpR67ZZfuEmpb9R7u8nPAgtvk6KG1wuWykrqemxnZWMYxTUNTDdavB5huT5RULikJBQpDAEExuuz",
  "key32": "2kUWxURdpJyfkY67rEY4yBRHNuan9rDMb568m6Sp1YjHAjDnzVmNekgkZXTJ2WuRKKFA2XHLQLLHm9s6aEhFuDjY"
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
