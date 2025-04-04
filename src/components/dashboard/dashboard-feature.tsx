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
    "5hSGuXvkAxQmbVTKCJqYhzHWFGLNuWDKzuAz2xcCCQ3AeLKYP7JuZy7uy5xggtnxUaF5H8zGGBKcADwCZP2ChLYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kLdJfsgAnRgXxiztXvSAwQqgPW1EehdG2N47Na2Tk8pFXdFLtEV7G4gqqFeZQHA5NQqPR6tDhKUSraAAUQJ16L",
  "key1": "2aQBrAoSXzZ4wkwGKDZGp91xBbMwm353h4FbvwXwsTNyNL48xv46jb4Wcr5VEqareANMVG5yrgcHEGGcLK5ryVys",
  "key2": "49PLeqKAr2phyXEaQnzWaK8iuLw5N8DaPJTZCNAF6yEbj48LKnW6tFFkYpeTWDLrj7jmrHRpShq9JbbD25vYotWc",
  "key3": "2uyYi3euQEmRmCT1Rz6LJqvdUgn9m7GPGCJiqWhjrP2KibLrFBM4DmvjPH3WBXky5vznvtoEa53Sv5nB6B82CoDh",
  "key4": "5KaBTSWZYQigSCWWoZxXuEDpka3zBDJ4ATjHSWmBuSmrjMfgTeKUdhgxzsyfBukBtkeFz4RD2Ju4YptzJZCMFifw",
  "key5": "vwPfVtV8JLCFtgTsUq4s9F8W9YHhAGtjbQFNs6wWChXhYX1hCH4T86qQXV1yLjdPpECW8yYt7t15W7Vv8Y61v9T",
  "key6": "5fxDi8TrGJ9Rz1PhNTszpLt1WyUZ2RKkngBEn7kAHA957xDsBQH3HLRdeus1KtZ3NvdKHWyGXj1nKCX7nGysrRBi",
  "key7": "4C7ehoGQsN5UubUoDMtbPv6uVDShYmXvqbLeFuPPukxUKD3zG4BJNuHFjG7djtHQ8JF633AxHubTrr6PnASPR6Nj",
  "key8": "3T4otUiNRnwCaW5N6EXnZrzU2sJ8fcmVt2fKp6hVhQKXxzG8a54vSHi3VzW2fHnKuk1pVVx5nNq9BdZpkGYYtQ2e",
  "key9": "4w213HLrPP3dFz74UYuaqhabZTYS6zSMy8hGoHDk4eBhKEB7sZd7LZajip4Qz1Hgy8KFVwADbpK92zqjBuUP4KQV",
  "key10": "3gM1ozSCEEFy8ym4ci8ksu5RoAvXvPGxEWyBvw6ySae6qYxd9DRNv4eayKfeBKudXH7wHGqZT27jb6CRqG28Skk3",
  "key11": "K5w3PSsiaDpEjxPJNrMds8R9pCXBiVSymDUCGo1wtokQqvm9ahN5BE9TWrfsczecmGENJfsFDtRCGFb8fvtATgM",
  "key12": "3mWkiBAKRqs7P4rZBotW8E8WsGpCTFL11UKPkMdLNwpo48Ny1CUo4rvaYrcJLnTmg1Gqgo2c1oWvtkyXUR598iop",
  "key13": "3gYQkdoJiVyNS6ydnztZ7rFsPEcqdWrimQ4eM586ESs4RXv6PAuic3L3V3fbiSHUxvnK3e8aEbAUBBarVNHJ1ENJ",
  "key14": "3CyF88S917jQV2vtRnSoCqzuZWmiJBznTU7u4GsZ8zCqpb2vQHNom6jWPvh8gzQW9TxMJmmt1tW7n7meWfa9RmEh",
  "key15": "3L9XPY6eyHpVNUrQuZYSgJQMVKWdC7UHfnD9iBHGokQ4L4XRFeGEtMVV9wKi7AjTytXSDNV4q4MAgtH3SGXmoDtt",
  "key16": "5FpgD2L9LM3TbPdkMDLvkBU9fRENqDCKodtMQqXFtf3dmw7TwpaNrV6XJEfM2DppXay2SwiuSGFuqw37n3TCwEUh",
  "key17": "2gQtY3yJSUf2W4Gz4szZgD7XEgC7QMTrc1DYECebbDnquisGiiF4cFcxeNXdr34bUoSDTsopU4zZh39qF7tyD4ae",
  "key18": "vJ6naecrxjQpop433QWnvazBx5jKAvCTs3H8BY5wpFarkLGnKD63asWtQXLVu3dwXDudykKU2p64Sub87VAnDc9",
  "key19": "47VLakJM3UhcfbLaMsCjN1LH71No9L3WNobjAit298yhRQBXvYdUA8xeSP8n5GyfRLwZ5smQnZDP2eJiheEAtEMu",
  "key20": "2jxWttMRrzK9AzaeavWL6ojf4jpebzjQ7teNbGThVorD1PTH44NAgfHzHAenCc8oRWgf6GchfNdCwoYtdx2NRoF8",
  "key21": "8t8rvn1Lb8MVyUMbdBggPcmigHHnZitKRYnBVBqBy3AZX6RVsRkX8P3VoZHhafAThiND8TqNnfPZmK18eQKN5RD",
  "key22": "2ursYeV7v5fuVoidDhq1skv3523umH8hSq1Ziym9w5gyp1v8p9Jq5SycrpUqZejPEYTrAzbdn2tqhbxgm6cTUtNr",
  "key23": "3heEpMnZCzwE8oKq6vNQ6ya3mdHKkpG5RH3UpHT9DM7bEz9Zwk7Y84rwDq46vQXS4wG8yFgu81cXw4JqeqhwNyUh",
  "key24": "5Bka77BxPEaefYUaz7DWVrjqcffRvNqpfP2TXVr6av9buWnQ7ZhB6mpSN164khqvBah5g9WUFZHcXoYFFYyCNEQJ",
  "key25": "4PRZFcUY35ETgwvfaHaVr6zbyLSUVUiYN2ygDmpYaSqbBDQdf8HGnsKK8UA4cBchDMb7ScPXJpSZ9vvjQZEeH5ew"
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
