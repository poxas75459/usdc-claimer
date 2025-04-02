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
    "4bvRwWBYvdFCokgGyHQQnC8JFyMy5TJ4tDYEv4RAMyHaew7SdcUuTBYzxdjnRrw1YTAnmqSYMRQxC91DhnQEpHyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDv6oTkuLBgtpspCM6ihJzFdkk25P8o3iH5pwkMLnySt7Vk8mcwwM6nVogNvaMcm8CQZ1iiV62BPKtbQBJbx5dZ",
  "key1": "5CxVHwE8p3TnavatPxrKPd4xjJp3QTbCPKzsDYhuwR3JWmuoMpjW4sM9ja48DRz8dAVDQEKYjEPKtq87zyGRJqkw",
  "key2": "53T7Sm72AZHPvZReVxooeVUkDG1uT78RCchuUxruhM8ZgH8Vi2ppaxfsDzxVAu62mrsKGd3S9USRpehqdmxkPk8X",
  "key3": "5xtPtU9cWT3dEGqyhAkZGxBEYnavUhPxFc7jX4ebHFD5BAzjrr15keCNEGYtiNW9g9uhqzceN4xCEEi4SjBCFomN",
  "key4": "2SJdjL6fwLMP9RLLAQ6AHxs6TkpqjshQXe1yt28PGHRbxuob4ZvVW6gj9wfTXkv5qZ2XGsAJFbQyM68ABbB5jTxY",
  "key5": "2btjFvP6BZgaxrcstbFKDnQdNZkoSqqZo2rXw88upp1DYpVZFCHetvejDpbZR6HzvzayKy4WqnneA4YjSsYFtkfN",
  "key6": "2Xsk3UHhg4d7s4rQb1Ubk8ZyQi53ZnyGgUB3b7twBhMiVgZkDNHt3jowCW38g3KJBtxHQNz6SXpz7th9sXBQiG8A",
  "key7": "3Au8SWNVB2hpvBgxuLNJQsaEt5fqL7yAFq6iM41BSLtbZPYgeXrwW38PxXDh3N3mbRmeox57yZBH9FxpiayNFQ6w",
  "key8": "29acHFJr9WmrT3nJLQubzSSi3gTwiMc9HPKMaRvaGziYf24AVHEVbLaFVgVYssdHpvPBubW9dZ17Rej33qe4EGhF",
  "key9": "4EzvD1g6fCNxa9yqvryBECLSxYhdrZfeLrR55QVm93BHJpfSc1j5TmXjwbAN4bwtRbSANry5QLj7B2pcptVNkEDP",
  "key10": "21hpRK6rsVq8YDhdTPH93dxG1aHWCpqdREyY1zBU2VhshaDMcQuonh98sCSbMsx6qYVweigWYPFKwCmUrf7n37Mt",
  "key11": "3cmKC5iGmmX4dDJzbm1tbykZEgwicaEQxYdBfQ41nX1sht9PkAZrxKJYaz3x5HUc1onka1maT8HfKnoctBxM4Mav",
  "key12": "436cBHS2nUmV683SmAqkJ2QsBRYEsVEsJsKCPpP19L9XNufFZxnt4DsvaEFjhtYYJnvXuESRUtE1r6SgLxowJ1B9",
  "key13": "2c3a3maJShSWLLmMZBBHsAwckVbmEsUWHd3Wx6L5fKnzk84EAsFMGRfULeyLYY5UuBMBBcs6NzdftmF4kmr8ahGf",
  "key14": "5cbsF7PUaAnX7UkRJSmGe8K8hSSHsMWFvTgoQfxjyAJi3irK8Pf6et28e432GQgZs5iS7sDW6JtcPcUeravHUa6p",
  "key15": "2AbeQzsoqMP36zSgcTmHbG7Xy9XHkwKbWvN7DJnvnCow9ps582okmNFJJF3Bw4GaibB3gcX3MmGgQ5R4DudEkPpa",
  "key16": "65M9FCUnv4t4Ynh8WqQrKXpx7dN2pT1cxDbs7korg9rD8EzP1Uk8kLdo4rFCPHa5ocUwhhei3pAyoQPvyz2tmwMm",
  "key17": "dbgWv98rzoVvv9kYzkL1LMTKYso5KGmTrdHUASAk1tY1163WPJtHuhDjFNzXrdDg3naLhgruarmVCaXbpbsuSAb",
  "key18": "5vfrXvj7nTL98kBk7QNT37xLzdfBVFGtQgQqnR1p5KqUmSee3bnExmPmSUBfUJytqgxTBsHmDKf2NqiFnocxKjBJ",
  "key19": "5gTD5L6BdF4mwfMDW8B263vUvzF8D46cZpmrpiwxyxTEj3zAmCgsCWguAUkWHgRpViQxxrRLGy76ndGFEEPJgiyr",
  "key20": "p42Fe3RVbDetLttfFpzHzsgVBhphLcT4zw1cvoxuRdcw6AehYpF4yn8PvR8FyKRUck3mzNsWC6TiAfd5B4njot6",
  "key21": "4akCppR2x37Jnrxr4PsVSAAnK255rHt9X2MtSeHo8jk3K3u83d5sqHe8CsoQCRr7BEz3gtg7CWjJnrN19v6k5cC1",
  "key22": "5pAFdGDYCyeAnNEQ5B6uqN1miyJaQxBYSa5DSzQoukJzZQVfMjcR9fEZqfQpQke4b7NCMpYyfozf9FVgo6zdsSAP",
  "key23": "2zkjbDRaavwamVrRy39skQHSME8uWmoXhtVUqwWJGRpRoC6wjZz7bBcmdmoQsNtxjvHo3ZyNryXY1X8SSCbrnr4j",
  "key24": "3ZcfnH15JQ7Ajdspf4x8LzCvUGJwvW7gQ89eHbRT3zTA8qR3sioEkFw7jQ19eyJvShQ1E7tGs8gYEfRUstiQduGG",
  "key25": "5JUehLJyJcmY4sohLny41QWPr2Jy7NMEvYxbGDamWiUnqybJBJTGMXzs42SWCbxBGyYmCtUo91guintKAAUHH5F9"
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
