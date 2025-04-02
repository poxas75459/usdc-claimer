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
    "2GSNsL2uEVJJRW257MLt4wWxypqZm365YEL7ZGD3zk8UGRhH719zNDP1KXHAjx3czf8ujy3Dcsrcx73inMADjney"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGEP6MRt34ZQjkfZ7ATP74xTGrULr2hdaCLJGqCgE6RaFy6EVnS9BRYy2x3nvuksHtj9hg5qeRxgxboJPjyTXvy",
  "key1": "6hjiDsxsbipmrSGL29vXK1ytvXDZSQKLzwGTomteSJ5hRA9hH9gTzsafLUTcDzh496rKbWxUKZz8TtCVwPsuj32",
  "key2": "W6v3Rv4wPfX4Frr4JWxEJyXvQRwJ4MPv9tnKV1FABsUyeNEmqvwPiVcBJu9NqmuZoLhcwAoqRopsJMhrwTVh3vX",
  "key3": "2JPi1Z4KDZWfAHStrckYjCcQ7ZWGt2wSAT7BcEFHXMuy2R3cFQCCRd1rRT4NCtJxKsmGicwTSBphhqigMMPXaxX5",
  "key4": "42s9rkFqcp1YDxaS6wG44h26dxnqy4Khs4oXaDN7mMt7cLGdX2dDxrR8orFCb1SyoCNwWJBqd3hHCuXkhFnV66nW",
  "key5": "5b4U89fA6xPiexVAH8KFq7F7n319qdqGLTgmdTgP9DjmKsaNbtDWY8ABnBceABAW7Pif2XavRWgUwwcV1LzdRdfv",
  "key6": "me7ZX876xPDioQex8LRKvBt83Jk8mtNZ9T2vsa8Y45QTEDb5zd9CecyEuzEotZE7tkuFvM8yHuZFg5SS6FVyexd",
  "key7": "2eSb3M3daTfvXfzBHALp8Wu4ZNrZwp2jB2x8KTjroucjJ473um1fJtMUHzZRe5yqXBajtAearrK3KfjyjA5DfTtP",
  "key8": "3Y4qY4C4kh3xE9oaukkH6xJwvMNZtcbWhs3r1oiGviqVog8bPXP1DyncSycPvjNapi3UY2pEfxRPAA7ou2zU3kpC",
  "key9": "2edrLTVqfrYsNoJcErbCH82P3w76Q4VAJRPYczaGLWxsabqGFP1zY4NW3AEAkB256PrKP1Y9tUM4ZH7XYKgQm8pa",
  "key10": "5yygbxkBw5ZwtCDATVBq851ALk9vMQGdUhUS4KehiZDatnaUjmdE3YQpeGhQZSKGK8rjb8XFGmTEMXbTjLeyi2F5",
  "key11": "124tZ6jiQpoAbTtwBkregS2gpeYhESvoRbrkgNRWjFMicTgfGQ5v8VpiHVmDbfGiYrVSoRukBaVyJvUaHpyDeGkr",
  "key12": "5ivySSFgzVfaKUAwzTtjL32xoKEF4aGqf52RSWq9SoHBKEQKfKBsC5pd1anas8fT3WbyBKutmVZzyrDHRRHDaw9V",
  "key13": "NbM2zMhq4mqxjsA1DSTq3RKiyPMd4e6QFjcMzRdgvEocwoN3YYwyLCHbBGStAeeL4K6ctHnpHjMz2Mu3MTccxLt",
  "key14": "4oZ1w2s7jWLMWTjK8BJbcScEkPwR1EJbXTcAhQguuwncVuBY6brsQ5c7c5wfcDSsiMjj2mbxG5W4BMPn7SdxAazv",
  "key15": "3xMiSf4VMC5sLVbJ3fubRvMgsrqwJZt2DGHfAprcgMvyzkRFddcaVaF96X43qaYp3rhxW55VfYQvMqG7CMBbEmhm",
  "key16": "2owX3eaWgs3zqRZagk3EhxFoPThdcF2LRADQfMPzDxPexdtGtXgr8idZnUAsUQKbuxGCcJcPWSdTkTjrEN2exq79",
  "key17": "2qPn2rddxZQHdrgFM3n5oX9jGu9pA7zzy1wKqdnF8zKDQUGzESF2hjX51S31mFaX24hjGzffk5RMhBGvq35iQfcN",
  "key18": "a1fwV11tiB5xAmXrU5V7toHpFq8toypomQwqaxTvhkh1cLG6yP2cTxC6VrnZobubhVQSczdy4n2YkmDMoyHMCqK",
  "key19": "NFLJ8Rgos3ndc3yuQUy9q8xXMrNjibphEp3gmJaR4BP1kfxPfzoEWB9VkbWjxMHDU8Tcix9qDivHuHiND6KCkEN",
  "key20": "29nd66bNbpCMJw382XKcCinkdv2iJNkz1rJ787882y9HQ3Sxvcnr2iN7xforHKoQRLskckVCEfGUbuEL6ETSB47i",
  "key21": "66omMHePVnjCC26uou8xaEszfpatBK8xD66w3EmRGN4zqZAZTHJoAZ9uDGRtxcYPwPN25LBK5eMLuatWLKcY3pje",
  "key22": "ZjAQkz79UBW6rREW561tWyHwLDnLYte1CWKxkDbFBQTTk2mPdQugpTRShNmdMczSk97jM5GLLdEuNoSfpavosaY",
  "key23": "2tMfrZioaap6o7YAwoGp4ZruBsGRoMZEkeL9Gpvchabe9GNihwrUbmnN1U9TCqnTiFpLAG6ap7x1BbQ5CMC1SNGm",
  "key24": "2VrDkadDVAKhm669PtnXjpjsujAdmaawtxFoeYScEDQRpTpzWJUrSBz8qsR9npBqrwpHStK4rsJ944U3T5e2dyvW"
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
