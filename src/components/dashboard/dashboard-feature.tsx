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
    "4sLNZubmeeK6jZYVXscLCrNe5oUoeucHNaPpmLsysih1niDzxRT9D61NYpx7QEUmDx8rZNv9aJWKsRBnbyMRk5Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "owJ7QYuNwt1Z5t89r3cW2XSyeb4dwbrHqxWPMNmLbWdnsbMC14rW2YZ6PE16Z3NfMGY7FphGs5JnvybtV6AwJv3",
  "key1": "3D81MuH5AwrGFDL8UHGDDaCDpZLHujkSCyEdc1XqGWh76XffKUsB643XUcKBXV52kTqgrqRL1U6SZsqRDH5xyvux",
  "key2": "5UweLTb4w9d3K2KswrHi1K2HbAqCYcrXqPgQ7EQeBjitLztnPiAv2zhBiU3bSy6Zu4bmqVDJnL7CzcKHLYfGkhQt",
  "key3": "3LBNtLt3RHt3mZwAf7TbN65yx5bTfixi28uhSNUvnWaxKFPA6bKMAPu54a1CE2TGXuE4kcTYUikidtFdLauBcdX5",
  "key4": "2NUtw2wzTuXGTVUf6bk8ED3qsfrbRY7GaLue1V4Y9d1Dy6FFamMSHmnrgdinxC5KL8apNaXNwc96SLsT1k2HTs8P",
  "key5": "4ppXEvHVt8yAshWHHc82qMTm53BVonPZCkH3FTyMpowa95sHG9TGG3SJXVZYSTjT3rq3CRVamuZAY2hsmuvoXYus",
  "key6": "UMdEC768fpJjjBy8LbxRJL1dvmHYyQNuzSMAN164S7rgaqtswiiH4Rh1try6BWuxbdAZ2gjhuuScXgVcXYRriPL",
  "key7": "2P7ibbnTS5mER35rUWYdbRBgT99Qu5SuWNPLyC6q3ha2tgRxw8ryaBJgCQ3qTEozZPrgRsQviNe9o8PK5hjxKuP1",
  "key8": "vnEp4SpqyjhfqBSEGXAzwV5j2qwSfmgbDryLLCmfjzAfGLb4mEsiTorBnrg6iWQZV9CDMciuKjXXMBSakiZ2bMx",
  "key9": "347bz3YsLEsX9gNgX4Ekh6EsDo2SJrZgHH819tTJ3fL8SbFePVvruwmAnh6hjR2U9fhQv3Rdqdnvyboqk4Sbdfuc",
  "key10": "5cd2Z8G8du32PjTwGkBB4yQX9VBbajetrPyH7cHGrQiCEFb6dkWfy4G5TwkTb8Wq7tro9huF4HR4ghVc8F4QnAH1",
  "key11": "5HwfnEQAqGri3ux8jxpe7j1ePvmXynKaWhrhwC3ASqg6DsGnWDv5VmqAyn458PJkq5Gki8vmwu4JUgiMwr39bXJp",
  "key12": "2wstFHQwswnpVY3XsS7wU2SHWNyJVmzGgNDkjXrN5A8eZsgXgvfLvCZkE52Graht28wS8TSBy2ZVpM6Um2TCpoMp",
  "key13": "4yoEY3u78r4vtqQZ2cZkacSaGWjmdoWv9s6R1oriEvYxoxN92ejjUUyfqogyQuBJ6hFEZWmsLFpUbuxi9ZiBPgFC",
  "key14": "3VkuSp8A67AcbwvDfEEi1LuZV5hpEsmAschifPBsxHBXK5nyu7m3QgjeYKPcuxhEKuvG18ZjcaWE7BuSR5XLwDCe",
  "key15": "4C7qTKft5VLP2YivY4DUwo9FT6UAsrqfHBe1iMUpnA3fd7888qDCFw141u7dy2cNkor9tNMhkiyZkne8Yhtb4waC",
  "key16": "3nY9w5LEstEja52mvazUtUToHfViLFLVUZeVD6C8rfTFjRHsyekdMxJXTYrFkzSoMHPuyMjh4R11JiyUFiv5JRMd",
  "key17": "4VtLwRPod48bVCbrTHYvcwTxc3yfwTFFeMgW4EkSC7xwDNFn2pN7mheVtYGSENb3wVjxKnSJW3qFc44theg5SR2J",
  "key18": "ZaaMtnX9vZShujnPyfSjD9N6MYbJWEbC1Rk7LDvptcNNy3Jj6QwKtMvvNaxKqrj832FxM9gWmLKP6mgURk45MLa",
  "key19": "3EqSKqkcxifeqvwqbyP3MhJQqXXWJdS2xh2T2rQjTABwyAq9wA2GKiTgjg9tuhmhHT35zE8oXr46fPLA6NwzGyZX",
  "key20": "MMKUKghFc6NVYjTrVBjRc5kHv7mNg4uLCavuvb8zXc4Mm3oKwcWAXYQMNMABtf8UcaziCcG2cWVdB36qh7gRt3U",
  "key21": "4uUhCAcWPequt7e789gNcyNouoMs182MEZZGPummX6Tr3x4eJvpLABnu4k6Z2wCeKUegdXybvDsznbTvYUeGGjGF",
  "key22": "2YwZ8w6hzvftBbtXwRCCeLxXc7g11zmfBdm857qcbiQXPvRX6wBZWiZyZGSoRv42EqKkKTK36dPVZJfHMGPWECW7",
  "key23": "4cSxjG7ZDUMsvcUyL1Q2rXhUz1BYZDHdQDpYAeSDnrzF8BcEcqL2oUJydfSjyWuqbSjKwDqQAt29dGs5R7sjfz2y",
  "key24": "TUckKkLv7rqUfsGGtEfXBq5NERdPqcBMWHpSeb241rfNHdwqV6ynv3LdDb38VqP72bNNZgKH3BSsmRijVLdEWz8",
  "key25": "3k7wkDFDJMLY4oBwWzFJhUsFfwEhzqW6aGAGRSjdf362Zhuapmg3ioiG47Peofc4TCAgFAGq2RiN4o7BUM8TKXaw",
  "key26": "csvcnQtQ5SnnYXT8oPLNcWiprbCbJvuLwi6iGvN8dFzobBBFcBW3usuzewbyG331tBHZU8AcvEutp4XjjBHcfd7",
  "key27": "59daYsmsSyuNfp4r6UKXZ9tZDRsdiwN7WNMorsMHRzzCFnaGsnPUhKpPQASoXeHpmx3unwifA1shUxy7JRWwDcwQ",
  "key28": "5EE4WQVePBTDDyVuXLXTkEcoVA5nyfANb2yQWzYrPzhYj8cZAyYAcJ8rXvY1kMYYhpb1DuwpmEjMz9gscW9V62u8",
  "key29": "2MhnaVhx4QHWrmQi6UWNk75MNXvZenscoNwiky14UmDVxqMU5CGxEMdB861symtXLfowg3WhJP8gJCNSqbQ89tVQ",
  "key30": "52fKG1Gzbk2xNqqDUXbhNj1ciDBN7xhjCfF71wyFonX2xzUsxeuUFMVnT2sQm9Y8BUPTVNyCw9862aD5SRuBgQVN",
  "key31": "RKUFtLApjGMBz9h7viBqST8BBH4wpJro1ry1rjdib9ZWtRP6PosfsM7teEpucECSqscV5QcoiuRVtbcPzuboPt3",
  "key32": "3TCEt5jGiqbgyA5P1mWB1TiBknG2PRCPvHJijoXGXuwBS5QPWrYkr9sQ5sfSXHg5h8rN66zSnvDgnzbDg5ezeknE",
  "key33": "jGEYfHa8qXjavdKNu2Pz4Qm915doUDjmxLxoijubkFDzGbf6ms5hwGHgfGjmkNUKEdDiPpo5qEmmXcj5TamxVRj",
  "key34": "D7Unz3ZddesrTdC2rZ1YpoSeVtnMg8Edsiic9FVB6LRJYQ7Fp5wDMkMBKiHLGQVUCgB6TXieoQ5QAb8pCbq6qBu",
  "key35": "5MXajpv61oeAt6YdqyRCLbUN5Zvae582B64oGxp2rSWra5PdfFUvfK4z5Hsptc8JevN3tAMbUAu8ZjDZifqqVM1Q",
  "key36": "2EeWaKKzDQQSEFcS6XfwXmbvbgqbtwrFKi9GPU1wNfQBeMjaR9yH1kuxuvikh2zy2q99VUgYg9dAzXbZNzRbzZXm"
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
