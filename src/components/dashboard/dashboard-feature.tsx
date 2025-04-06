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
    "3T9AUFLemQ1TKPyekRkhVVWp3W9H7daGBN9XgnxaJBZgaDZKED6PKSBP7WDeW8v3V5P5tDcZajyE32R3gxGRvkNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj4saUrfLcP7VTJtD4DywmxumgyFcbUzkcqsk3aCaMge5976Kwj29A22BceNVzC5oqDWU8xgbxikPTCGPzvSKGX",
  "key1": "3MkMgXSMDqPj86r5GU2P7ascvgGTtQk8V6us1q58qeb9Xx5daQD8KZQVfPgBbzUqpXacBCUmran6SjU2eJ6VZkue",
  "key2": "5QQHkvCwah6wqJ4RAPKNJJPcU4tMDM6bX2Y4EekNaptbRYgWkdxdckKU5hQGTuJrgrJtDeAsnrsFcqn8QD6DFmzx",
  "key3": "3Zt6TnrZoz76bxMZtLeJstWiityVMq9gJxX4JCy28wScJcftP7emonuzXorUFHBUcgh4mAwbiUnMMQf8Bcgao4on",
  "key4": "46sHHvPM6QAmiSRBkCQrdLwsL6JCcb4gBrPdarcpU8S564vBr7DZwyZdXCabeowMYVPJbX69P6MDH3KbrzFREvCs",
  "key5": "cvsfbNpb1dU7eQnEupme7PdhDHZMpQwschqJwdZBajDT4D2J1BNViszDU2auaAqVZrGPiH7m2GRpM876wb3b4sF",
  "key6": "2uS5x8vRUz92S5jTsgALCNTam17ccffxgA3PjbgrN27vEi9ZXqrHcmFiu355mtFkTStkW9MhvWTsGvmJKgm32rBc",
  "key7": "5nzUUdLSk4XwnQU7CdzFj2sJTX9Qeo5bVdXP2Z55432h3jrMNwRmDdNF2xVEwhBTpog3Pv3WwJLnHoDRC3v3e3bz",
  "key8": "5BKY9edpoCnRz3zim5YmypGdWQZ6wFCj5QzzCPJwzEB147A56dFCq9zDBhwQdmNvvisE94aSHdhk9oRCZx17nWKM",
  "key9": "656SCqagafXSU95Sp7dV2DCmNKQ9dXvwKxpww5Zg3SsuXqhyUA4kobYU914aEv2QZeWPKhJoh41xBsQvWmvAX4t4",
  "key10": "53yCzeWssCZct1SQ4ua6dbXTizfrK5mpwSiQhSLZ6W8PbjftDDTVttFWuB1wivnKp8kyc2MSWudWYAxRh2pJWHcr",
  "key11": "2cWtsyuBZ1FLvafuYkd4h36Gh76MLF3jWhcZKcpm63X8hhVjnDWd2Kc48TbQdhfwxjRi3hzpMP2Lxf4WzkufcDja",
  "key12": "2tn2S53Hyk4uenGgGYSDBRrm3qYJ67hY25F2cLHFSkfxS8N5BZpMrRbcFVtTaXs89h1vwacyuniUGwmw2zMMVweA",
  "key13": "vaqiUL1GzADdEhp7b5EGSVU3WxQm733Q649EoS1D2WxDmL8U6WYLYmMuGGhRREppbHcTcXTFcqYwy1yaQGegKCt",
  "key14": "5pbAGzLU5GKDKgVj3piSc2rm3xpKv58GmnFZQXbF1KPDJSGV4jL6wKeRicGXjCyJgXJFjyG9z4a6A68U22SrdmHp",
  "key15": "38QU5cbbrqLUuDmtSUBX4wufy2ZFRMeBTwL2DVakCoLgFS4d1bbY8wx9sNZmqvE6cgbeUgZugVBh3Z31CzwN7EWk",
  "key16": "5TwMp27Sk5BD7eQgp9piPABhe7avsZmDxRNUhszrBMwWmyzdqqLo6xaK7Rz2Brau8Pt3ZwiQVfpcHKyzctbiqYUd",
  "key17": "3iN7aDh1TpZZqyj5XPuCURMmMCgi1LzuMCHiCoPnguDjWoir9TnmrAX4M8GwJGD6HP6m417qsbYcN2uFLjZCRjQX",
  "key18": "4AbtfnV9GB89Ehu29FMYAyHgg4gGibpVysg3ASaHmJ7gs55RHHhkaugs8NqvK4yZBtZDSkrBzBugaeLpg3j9ozvh",
  "key19": "4ooxvZSuMXRQ6EH9bhcYWpTzYhqdv8ag6z5cVZVGFYzVMgAbT8j2smNVdhqZjR9gzDSeyqyetz9m6jCdWaUC2ccK",
  "key20": "3Vz6vLkYodLoje94dLj9x79AeEf99LeqQMUuBLNJy5U2AyCdpBGTQFLhaxVdrs6owdQaPXigWkoV9XhZW9RQSp5f",
  "key21": "LTo2N4EdgpFSBAdB6MFVXCbmtegrrAmPeB7MunHssKUkQFVDN7yHTWdjBwAJ1tG7Nm6DT7yXLcdt9SQWub1vjdU",
  "key22": "TKt813hCWb6ERZLVUJP6Tw862XXLSFoPnj3Xq3biMxmyWC4ua7CcJfSfYx6ei4GpzdCpiohyfb4LGCMf5GFxo8m",
  "key23": "2WBabz8TaLuoHYJE6cGpm2enEDXeNSjvYZ75MxpoYdoPxD7cqidto6HHASvnsaAwFLumndRbeFct9B6xWbGS88ee",
  "key24": "5yNxjg4dBSwNfSbpfSQBP6mfRbW4F2tQWwceyuLNbuDDDArvVwsnbxJLLmf4pzcrLNNPWAn9Qs6AZwpAjfgLxoHu"
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
