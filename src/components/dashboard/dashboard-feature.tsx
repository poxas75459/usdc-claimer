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
    "5Tyj3qcE6x8Qvbh8HxpqK1DedUXEAtp7sSzNaWNwtVKc5Rb2xMDQ5s1kb9qACFGQ6eLcR3Jf8rFoCFn62QCQC24m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJ1rZh7yQk5BHjys9qEmzNRiCwabLFbX8A7bG7sxpwVZbNwcHkgb8aJFtL5UDYSZytivtcbTJDgr3qSnxw5JWhX",
  "key1": "5aR8YDkuFB5KhP5icjhSNFr2XuANMYwrnyFTvS77ibLfFrGgPpUb3ddZA3w5Xteuom8V6c2feDAX5q3ETXZfLG6o",
  "key2": "3YUZZfUzEnwJmkfHTrWE2bZidQ23Yk8Y5fiv423Yn1fAx2X88vmVGimnXFotnxoCcxTt7YP4EMB5vDANojRgyB4c",
  "key3": "sZPSX8k2eLKdFSvfzS35JH48bhMZZfdSJz8yzoWjhvrvpJJWsD4i1Cj9nuyj5BwPnn4EWoABxaEwrQxticFNfEA",
  "key4": "jLS9bcXQFRCXok64ADbT7xttNW2U8aiuiNnq1jFuF9xkjubRNxKTZYKBTndMpueQjfY2YAqEcDwfjQMP7ZCzjrW",
  "key5": "4bMWFZjH4dfpA1nWBtPaCTGS2ULtZ44fzaZAqJLtXtmZMjjFUPgPpiAczKLAxypYp5hzoovZCF6DhsSqgJ8kL24K",
  "key6": "5TFn3pHr1eyynAFHYaLZiDER9QeQYGz2QnJzF1PZjMNW93A2Ftw5SmZWL3s1Po8o9bVRhViaFw2yN8pFJr7pGTQV",
  "key7": "4ed8EtEKpv7JimeXTceMrFj7iBWKpL5qbbh4pgjeFwUDRsNWSZmrc9fFVc4hJ2ELNG8dvVZJyiVnqCg9mwuAFsUW",
  "key8": "3VFREYYnudBspNWNxWp6GShEwzKdCxGVc7KHmCbAuY1WiXANir9osme4CXdqQjMmdBfiao5Hrci5B9rDy6ijy9zo",
  "key9": "9HzrvBEnUNKe7payh4K43vZeNELEkZvjQPWaU6GccihKXTkD9TpS8qJLCBCwp3bjoaYQQSK5acpP1iR9iXCx8qk",
  "key10": "5gwiNHk6eYN9cg6Zt9RywiKYnaw6WUgi2gN3KzLZADmmocJMnHKz5sa9wxdfrX9pSseiiRxxVeQHpdD28RqgHFB5",
  "key11": "3NKEeTUbVZx5qxeE7KieCsPRNZoqgjE8F61iv6SDvanvsHjwB9RkjMC8gFiAGbWPba3JVb3acxAAocoEs6DpXifN",
  "key12": "4UuCtZtf6RyKtc6jWoedujPwC9e7DC8Hx8VoCwMVMPHhS4CBFkGB1ixLnsgGnPMhjjkQQqjCMqF9vV38Vw7zU7aG",
  "key13": "2g78YsvJvPoQe6frm3s9xi9pgBTHv1Ekgdsc7e3v1npMRzkrTFF1hSXSVmJMPAizAmtiNFjhXyrBNe3DCe2CbSP1",
  "key14": "5SAmeU2v8tDsNUakiCnZFwD5WzoqozDR1YywdCjQeLv19GQdgZbw9kFAYb6u95cujv1aqsAPXv5LLQnWR4ismLMK",
  "key15": "5jbD4uAGENBXkdtYjsFcSnTCwkNoDYkUhwddRmKVCzeHsctbj7T1YVXcA8dKFV3PGyNYCb6xVFDonVYxfwcDibgJ",
  "key16": "2rpbSpDtJPSYdTkBoGRds8bB773vtTKNmx4mfj77Wb6RPJtMxCvMtYPT3yJLm6ibmXTx43RbcTbofD5mUwjcaS2x",
  "key17": "2mtFk5gf8B8oyHK8AMm4vXREYbgF3oCeukypsBtErTLnNzbWnMDkNMcEQENNVSykcGRNriY8F4FsuUHTMjoe5GUS",
  "key18": "2UicWJUfxQykGSJqwbJAwsRYVW3rwb1siemLVhkGmmyQxvHZxsaeSkt4Eyun8ScaUj6LkmVFdb6DfPNynKUDtJqP",
  "key19": "3LFDd3yCB1dDSRcTvs352fF4qmtqqMtSbLJwhDZAQkj4dtmNXDPjSud36asmVXoqrhLFosg8E4S24unNZjkhQA14",
  "key20": "399G2Tz9TxJMgRJTdDp7DT6mNCExcePnCrqVK72MgmF8Hip6ok8uNfuFa9UEZa1BSsF2mbhudn3Z1zinn2FRob4n",
  "key21": "C3rEitCHMDGJoupJ4fjLWpodqFCkRbnPqcBzV8Rvh2WSb6k7KGAQ2Ty8qAexBg8oHdk549VuUPpy3H1ZRJrirkH",
  "key22": "ZbtPw9GNaG1DTMAqHPENYZz2bVg8Ttnq8teMhTBfNdzq4Sizme2tVE6e5R1wCVjh97GwP7n8q9HU8v5RenwK8uf",
  "key23": "4yesB2ya4kNue5CbSc7TapavaWsAz4eqHzboGjcv7p7fK4WXCD4DcxAheyzoAopj99GVo5ZGkm9tg9oFsFSymeR1",
  "key24": "4QZ4huHncKEk3gnij6Nzi3vsnWDBvPwNr5wXT2etxwDyXvRP2wvS93JNiuHDteVmhQ82QRTdHyWQbkMtYTPguJ69",
  "key25": "cJiXiZ1Chf2KxNVSancjWWJg9pBFtG7ZJQvQSitLVGRCYspwy58yms7CMKXRYcCqLtSEpM27ffszbR7ajfes7PR",
  "key26": "4USY3o882iGMYPb3BseCfaC8zj9LGKcM4Y16V9cntnMYPMKdCAzyRPfPjpfZrpJLr8tGgekP9zLCj1oQd82ePHhT"
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
