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
    "4u5udmDmmtkGS57uMjeKVNgfzYcfAHmMnfsD7A9V82hD8G9VxApTmQemZ3hKFCK7NUuV9TNjy4ovqf2EXAmb6hbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rj3NNMz1gdEQ1vJj8iXCsYUCpY6z2daY75Tyozu1tPe5EkxYDQ4swVgiLRjzDoGnRg1wLFwGmEhke4ZGnCN5LC7",
  "key1": "EAKs2joeww8oPdTitTSw6baKytaKDj8k7Qeh3cy1qz9sNTUD7tPiHQKFuM6azXHXW5cXxdeJiLTGQdowqXzfzDi",
  "key2": "31uxqNQhdqRiDYVpPCVTgtFC21F9dyvNELvBAzeukj4HxEpJg8PMogupkTon6FegeBRPJkvs4HxN1f7tUfkBB15p",
  "key3": "ZFbnpjbZERPc4KtTuB6ER1JPmrSKcb1PdoLRnPMZisBVPFvBV2jf4zvwcqkJVegEFTnUTkYuuiXLt75NsBstiQd",
  "key4": "61yEqJ6ev2n8QV5ykUU8GuossDYUzFCU1VE9ckFijNHzNRhE2ijtqCNqxgeQtVaNEvDV8NZ1eCdJTy5JkaCNTavi",
  "key5": "5aRTek7oB99uWQBVwrBsznX6u69HLa8t5Nv5cTxDkyztHqyB1MWAy3tXP8tdbb76QW7Ndno867ZwEY3gnBjeLeZB",
  "key6": "3Uj5y4yjFXDGZB9xEaFLvCe8ySxMMPJCdWzFZoMQJJwGjVhwtcN9kgvjSdeQ29tVbkvBovRo8Y4TXX1zF9naRfok",
  "key7": "4GFXFcRcKrHCKNZsVamHYENU11P6oQy5G527U4KiPinmWCK37XFR454aosniAY2qxxaB4xiQv9EMyq5vDtxuDfwL",
  "key8": "39J1c3UP5tJbFATQjo6MN4KoPuwniSKncA4gVm41eRCWAjSBxwfuMrGdSkQG4La1BhopwUJGHDzZLjtz6NaQLVnQ",
  "key9": "37g6ciiEJ73ZczF9mxVHtyDTw7aqj2agJd8PXBb5YVdeJmeQ5GohfcCbZ59YASTufte62tZho7ssW8PwhVR7fyYM",
  "key10": "2xQqBDMNwqcKrBDEks7oYfF5He9e5m1KjhzfrgDvFXL21Ue2tV8Q8UPsZSofmiHndrqrZDJsj2S5dmWhtDMgQbzp",
  "key11": "2rxoysxyznvpUh8wqAC4EPwCobN2Tg9VxoWWh8Yg8vpiEauQkTaujhRyM9dSxARoNoCy6pP6zEgov6eTNhk2zeD",
  "key12": "8PimQvxMm7cVvYm2E2Z4hRgH3LXvS2nB2MEEhtA6tAfR3aXaE5P1uihLRg8QRV2zoXqTyPZQXyLnjQD2fhHtXid",
  "key13": "2Zz58H6sozx3fgoZ4uaxpEdVKckE3QdEXTTmx56sj4EQCFAQd5HWFVE6GEjAQ2jwdiNefZabqciXmYKX7mqxYanm",
  "key14": "4mc8YapCDLXyYe4f5XXrQZ6CmJ6DKoL9YXQRKWX1LpWfHmGCCZSibwQu3oYH9AjBmj2NkZ7bWPFvebEX9jRoN8HH",
  "key15": "2m7wbfUZGjQsfqC5pWCDrGK2uDntuo6pnFUhmw1QVxSGw2hFmpMwWbtq2SFkgzvtxVWabEDS8XPfvtseHhccLHJt",
  "key16": "5r8KPYGVsnXNsaYBC1XWXN9ME9EfbftSjgzU5sqopwgPXpThDLqBMt367gWVmCgW1x4NGHMmQgYJSskvYJS8Ss2i",
  "key17": "2ecH7Sj4Zp4NkedRKLoN4ZkFktrM7qsQ8uz25ZyNBwVGDBSQG5NEf2t4QALLTB7pKkx3TWSLCidzkGT9pgWH28jz",
  "key18": "2FtBvePV7PwiGsyBiorxw6SGZzm59hSzCWUrk6aaRDarkx6ZhsWLRYtQoc2DhTd9vkptGJEuA2TVsgLQ454BCsw5",
  "key19": "3mqrWLQsoXvuKgmDGstQDLZgzBad4E1eWazGMwHFDfPxpvruYxq9L68ya9KEfgrsk13VoJWBhkq1hC9YJhP2RWJa",
  "key20": "5oxWADBPJkQBq232D3k3uBqgz4oEuuBLL6QLV1tFALSneFCYZbB76KXXyFfDpWu8QbJczJhdDP2zAjK7rduEKJgb",
  "key21": "4pg9eXT1BE81SCPeJ45gAHYRxTKKxipHFpqtUqFyrKuHpuQkq8X12XkKXAg1HoE94oyDTMqFfLWShXLVarMn1Ve8",
  "key22": "3s5bUUJDTZrzLcQvHkW44TXHdkfYmCFCQnNXz9gTinPgFvTTcm6nmLEbm37KQpbGA3y9TUrsRxLvv3ojGaJot7pD",
  "key23": "5SuXMyJw8ZrJTe9zUYVBaq4LQd5UgRTozpioCU4EensYbcCYeMRWpwdK6SaSGCXY3997onhsi2novfjrHF1CgqLp",
  "key24": "2GNC42mDBBsYwfQCrSBypB66uzSBYcakwVwuh5Ayq1DR2A4zGpnhuPKrAwXcXmddiuCCRYEC84wP83jGzaMEpD4D",
  "key25": "2WiX7FHL6dh1BkPZRqiDeMLSbb6XsjV5opXmGkDZ1X7YZB2vPqEewxatmsQ7swUUxJNwUyNHELSASKf8KLFsTzTu",
  "key26": "5PG8gRLvH25eV2dS1vJVEXkcJSUdnX4ntj8UQuubL2nykSGjwvfBhcDLorrPGZDRUnSDdfYYUjTBHtYzNcowGdja"
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
