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
    "4kDrZcrApwQ3oSk3zftVnCmkc95vLCydAUPEw5TxLPTdamrqiKCaAT858ToKhBqgx7MCTd5tXGKyy73xYHHHo3pV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6xJfAXKBTUwvP6QNXhGrjKzkB9CiSvUFEfHGsu8oeZ1nNeBYDJUMf6kywLGRMJaWYJUgGcXs25RHFeMuAfNnLp",
  "key1": "3usDjA3CTNu49yiPnWwsXbrsE1Jh656Hmvn63HuV14VRiJ9ducuaeS5zpxM4nUn14fVGY15e4pj7pqB8ygeFcva7",
  "key2": "RmuCzBPiqw8U43dHYA8eepi2NdmF6MCKfwhxN7NyMGgTZtXTV4RxsmFRwJkJKwj5J6wKc65SfPJ5QSQbvECkA4C",
  "key3": "1UnU8ypgDCghEgAv77Z6pdz2xA6pdCrShFM3QTLQMh4t3xRsrBPaHLJHyDUnRa9QqkZ4oTwPQDMWoyP7GBP649H",
  "key4": "26DcJ4E8C49o8HoVeWY2ZPSQovMfS4t59wzZ6jq3ZmGWnjECEmMfjF2jPSCNbRrhhx5N4yaRGYHUT5hXaTjiTA76",
  "key5": "Le2CQqn4YGThsfpK6t3KSuyN4mGMsNHfLa7vrU7tLhhbpV6WxexKrLNeqvYBvjSwrNwJASyZj4imbKgp3HFdBPu",
  "key6": "5NLuBgyEBD1ZAKJyMrKjbjeS87eGVL3eKkB92uHiaz9ja3TGFzBUBqydvDbYhvETzLQA4f5zgemPKwub7HNjNQmB",
  "key7": "4r4WeFEAmMdgTw1KULwUgNrovie8cBQPxX268pRCuYsc3GwLoWNYhmnJy3zTe9UUGQ2jH7zMpQK82zeXbeno25Rj",
  "key8": "VLNMXugNhZkNB5A3TAfisdbwWwLa8XLBAY2ZhUkjfWCgcVH28P3mjmsLJH1PTETCwVSxxKnUB3kb95x9tPFQfi9",
  "key9": "2tepPzZ9HzAtW79QB8YsSAUq5yrRCJdcQdcLaEXpcuPgUkH9FhuwkhQ5cjm1BPP47FGFxRucjsT4XqfeE49bXVPh",
  "key10": "2dHDJ9e6yVjC3M1G3MYbu5nNPFTzugG2uuwnt1oB3cne22znr5CjPoMKiE6NNXn9D4BkWmymWeJRJJSvkGz2gypD",
  "key11": "2Q8dWKyQrYGwPnuo8Lo2JFVdxk86uWvoAeA1fvNBAMFQVqNoMXzEaiVi6CmEaA21ZUFpdyx9RCcicdAGCoR9gLR4",
  "key12": "3Zy389Kp2adkXeWvMm2uZKxZTkiMDh36duPnmywWFNiXqjHjxbwvDMubNVmDk3eu24v9dz5f75WSJ8sLQdP2eVz9",
  "key13": "27FAB8zBEpbZ5yRe6cMMgmBGSBqxgJc6EhyjMhonmsNrNdTx7xzKQN4Jq45yKXW7Qs5A27pVZeVbnmXbwR3Y5br5",
  "key14": "UKv5EZSPRwNx3MabPYiUjfyxJS8bfssaGhZLyBrFzFtm5BwGqpBnFj4ZuoBGxSTrWva596CMLax1u7u3SDAXgU2",
  "key15": "5p2JwjaPn5655USkc6HSedzbrqdDhaNFajBwYH45L3iXoQMeKHNw7qB88dzW3epRLpsGejqc34qrtDvX4HB1TKnw",
  "key16": "4A4XtzN1HY45P3cXxDxg8LXpgJEQQUeJ8J6SrsW4bfsuDzN7HbqJ76ENbtYHYqP3pT45yDNQNs1w89eSsY48jyPF",
  "key17": "4NfudyRWmF4Qu1WPmHRkKMX4Ac2RSRLfdJC5KHf2KKxxq1PXrCr63q7YiyRg9iXw7eiRBydLiWGNJj5HFLeSSjYJ",
  "key18": "4SKtPMtGces5zQ5ozUMGn5oKYnhDsUZbCM5vuVT4GpVPvEkwD14Z6RkQEfsDfCV6QTK4LYVYaQpaSDz3LX88psrc",
  "key19": "4qa9zwTDbbmBRGCexquPyvx8DsXH1mpBXcv76dxHQm2nVmWLiA6UD3EsKBWLzQa4AJ2cefHPpHcwBEiLN52HmFYk",
  "key20": "4Afg1KxbKLGx4aVsWKyK5R1Ao3BsBizDPmTiFQdrhkfPGbHQvYnkJWMxY1Y1XG6BRHgbR5Uh3dNdHrLMSbG8KmcX",
  "key21": "5WzHkqQnR9HwK1CGabVHCaumhZyXgNoxwLBANhbR383XxzZAAXKtrqudsbZqyrAV7tNSHQd6HD9oGnhzeRu87h7t",
  "key22": "3FQJ2zsmqm6X67z5RmVELNkQoXfNGDdcY9rizM4t3Ex19QHC2CDsSvAbJWHavgjWfd9tVML6u6RQghaMZXqYptj4",
  "key23": "1J2QrCwaAgQ2DV82z2tJBwyHvY5BFrzxLemqshu1dp5D9HrktBdBz63JvKsYuvZadPMGWdJLeJqGg7UxK28Wnmg",
  "key24": "3ZiATMaWStQ528T4KfAREa8f9622Pb4MTwAs1yZYgeqRi8L4BUCPckfCNbK6XLwGjqwyokEA1oSbrCpmgKBinpDp",
  "key25": "4jnDLnt9BE1WFmnNG3SG2g8BnKgUiNT6dGDue7ZjkhXC6RGV4jY94Z2xcfykkTfZ6r6Ryq6z6TFEKVsy3hT9Fft5",
  "key26": "4bRPEoURP79bvQ2dgUdJDM2wH7CR6ypPa38WEFASPbmhiuy1QzueoYrX7iDuNTMa7Q9n9Wr8k4HrDJtF2qi7NS1y",
  "key27": "2A1rxDnhRwXpqYRSjSJ2XRqYYtvV7r7ptbFNzDEFN6jkY671UHwk48xRbMXCvhuu9LeUwk2NYYE9YxxqSXufRQZ9",
  "key28": "41d7c7xDjurKDuELySfPCfijMtBSqSJjanoqZAbajKUd5x9KykJLeqv7ZLNkQ5SwFo9mUZJqCV7AJZf2ei2GCD2V"
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
