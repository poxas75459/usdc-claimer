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
    "43Rpin9UwsPR91cHr7TP6fCpQConAoy3cZFit1eiHQwVMuQtXyY2PvQHk4Qwjfysdo4URUU5W97Bqbh14GzWDW4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfcgv4Dw7qCLK4YRdGh4i1tKrSgGq5X8EG5EDHG4AbN9CBiJyyoFP37Sq3iDK3WJNVXAQ5tKGgJKbxZaga6ymFy",
  "key1": "47Zu1VWNR3JfcLfd8WuwuxDtNqr26VD72V4dHEmkPg8kmjMA5GiVZ9mXTDZ4Bd8ghbUkJYhRHjmLvyCYhFjHRU8b",
  "key2": "25gGntkZd33n2xsvmwmPAEJtYFSzHNZRu2X2e1FFdw4weF6CX9SGG8gCv4Bf28P3jzoREL9NQvH2258aLWnafu5G",
  "key3": "fRzZEJTETEj34Z19fiTahJU5Qf9ifYTz4Wm9vtqHKoAhdQMAXwx51vdN1SjzoQKKvbwzN6qUyvwirFVUvEG4KGJ",
  "key4": "rEfm6u1C7unc2KzkVuMxZvuP8BmQ3V4qCwVzCoxwRpbHqaDaKXWHgyLRaMvrpi6X2Kmd4ENK1qeR4yG2gcCppsc",
  "key5": "2DD3xvEi49ZdtEZ8qUqijyrQvMJynxeB7tPSt1eGyJNdvoLDurzsy7F5qaEMzexWLvPA1z1SKc9adokhSHnVs812",
  "key6": "3YsBZpdEsqMUM8gFjbaKgSz8CxynoF6LS7LutrD2MhE1kKMvFxZ4iojPBLatcKf4Ycq1ea8Mc1qADA2vTANmX95o",
  "key7": "5un1uqExPi9av4L3z3LouFGNVGXMzuWj6fWhh2gWH3qaJ4aonHDniCJy2tctLC5kSY5hWm4DXvRfYAg1839zkg3S",
  "key8": "2SfWRaAyCzoRsFPTcWpQCECk84Qe9ZAKBqcsnB9L2KG9BUtMYdiUqibHfJzMdzox8XpD8zP4insEHLfJkKmFDyEP",
  "key9": "5NcMmdybX7B2s1sqCRFDwDrm5SMej2rmBiKviMC4xjSwTUywi2prHwU3dCwkDXWEsfpuvLxuqRYegwZjuRA6Aex7",
  "key10": "5BVj4czGAg9nbZWotXg37zASK4kEcYUHEnt6otN9CjMtxjMDNMgDmALN76ygUKyxxyjRhxNTQvtDGYjmnXa6jpa1",
  "key11": "3pCQKXjWCYQRWg9bD8J2VPWTxuxM5SAwNZFgh4vZeU7izDWcComjLW4ar6cMN8116PBgQBnqSFJsRuAZxTQ98sSV",
  "key12": "4t1tg4CDeeWJCPenfZWLmFhMAd8J5gZ2Qh8245ZoFp87uhR5cUtEWtKgAk5fWYX99jQV8m5ff8nwjisgzxrnau5Q",
  "key13": "22EUu2gjnJwCgxgaY4bGGEgrc6F9ZsVEVpv39AcYi413VXd1tS23qDgtJoCepXvNUXz442xUEmzd6FFTsQXyXiqU",
  "key14": "ro3NYnviD4Bi4fcf9zKLCXSZF3BwmHYJtuEyPNcCtnXWJnmkDaoWnQoVuZ6P21xUWMWYhA4nTekMUBWUQFzdpV3",
  "key15": "3dVb7Cyhjj2b4mcJuiPr4KkZ2pJxmkKGnjEEPGXYdZ5NVaXCKAtXMcMFJnWwStsdWqHPS2DgofuuDe7iTEVzz3Zj",
  "key16": "MrTdZ7HQypZfTpD6BuiiTXcYPxsUDpKsRg5dvMFtc5b6P9NfakhZCtqj1UUSS2ofDJjAMVGPzTYGH6LwfjKJMhE",
  "key17": "4dog451emR9w8wSrUvFk8UDbW8h3KCCcbGBnvwRJLMPtgLazdGCDkchAUoPEHKoGw5C8NgnpZ4RNBxm2WEtyrALm",
  "key18": "5rc8JbpY4fi9ShzHTBV4SBGRyyJ6PxzjPEDA2wbFnZ5T84cb4p5jMpv2kkyh7bpWXVghHnFrjG8BoNkwSrgEt54R",
  "key19": "2moVjzzEgnukcrLfuWfovpDLh7J5eACxY8fe7XdccRaiNQa4HTXVMtuQDG1W3SXJwA9ydbAe5kRdDpVRhpNyqXeN",
  "key20": "2P7yA3pGs6gn8fW1J8Z6ciRsxsE7EBwSNR2gc7VhyDpqUdzfxk8rtEiMnaP1fe3mggacwBR8EzWBA573YCempcR9",
  "key21": "5pN1n9ouqBFecFERrjbPMjy25XuwNMUPR4AKG7sSPG4y7Y4u5Fk8QiN3XgPzyGQ9CcpNndYnSdxFTbbFKVgtPVnU",
  "key22": "3U9VEaHBezk2scNJRj1Yy2pWa45hfrqB4yLWDiJcjdfhjCeaZa956EfG8ZcbUQoJXyfka9An4vainRqvDq1tEyow",
  "key23": "3GVAUweyMeJMW645R88naSA5mnh3X5P3srGk2gqnbe4Dr89cu1do75wmdwJFv8LN5XBJHQqhLVdYC9w5kNwxueU",
  "key24": "3fz2Y4J1ByAUUWuPWPLU5iAJMCrqSVS2pUxjQYesrbdMrpXyM2YXP64u1gePAfM9b9bCLkwsBTHZJukdhkXb7pWq",
  "key25": "4u6z6w7J5FvCYv5wedNHeqh3db3BBaFf8jnu2K5Tt5K8wqcic9ANg7knQSNj4VqifN3VGGEygUGJUtVaq9QfdTye",
  "key26": "2MuQnv79Kuiyq7D7uBDpUv8d3XNTqpFJyKHmj48CwKWfwvGrt8VF3Sx49SV7wACRPeSMYDxgKdMJTKZbs8kTgnQv"
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
