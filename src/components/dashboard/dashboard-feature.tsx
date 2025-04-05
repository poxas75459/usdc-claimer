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
    "3zzAbxWEDndTmqDiWckhtmGDSPucxjb2DQBg4pJELCobMioZrrQE8YFhLCoNMccXJWB3bsUFzfSqqYbr8sBG8EpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXXDKdFJW1EFDmHwJhMtpabVRKk5fyKeTouZG9jDC7yxB2bKu8wUpV89vc9YTEZpntoVKByeL6BeCY6v9EJkeTb",
  "key1": "4ckxeSE64b76kFH7tCWab3QAH2Ktj4jaNbAmaq6HukevJ3qh84yvrSPZ9zaGJYvaG8TigadEduMBkwixk1aux2cs",
  "key2": "4pWeUN6VU7u6i4MePSUkftEBE4wv2a5sKJ8ABcjRdznK2dKsM6yDYmnKHkWc69csv7aEa7ixwPUtUciZmbchk4C4",
  "key3": "54jZerxB5nq3qWZ5ve8rmMckzWMreiboZ3aWoexyKK7eP5B5P7Yaj8o1vafVRuxnycdtmqjL9UdgCueuiaAWv4ou",
  "key4": "5meQEYby29akm7an9eTTFHeDZqeShKFmWhmzYvH8oXoj2xgaHfZPV16juWhpXdgbTwJFyL4YtB2iq1ifdCsh3gtM",
  "key5": "2BfHmv76wf3WvpvHAg5EEzRnmvnnsxmMR5V8eKrP6VrwaVeqBbQiqf3N4XxMsFo3JBKsvk9dq62M5eicsKyoiVYf",
  "key6": "4Pr1Zjff8DwRprhJbAAWMQmA5uL3rzDH5g1z1YFvwTTjD8gM3wjrXR2BAuAB4s4JJuSZN1nftGuB9eMKGEJUeeS8",
  "key7": "2Eb62esKCRFP9TwBbkuYxh41LN1LX4RN45W7brEjRL9SG6JQ6Dj8PYmRnMjG3e4F8c89c5kwtQZGKiYkVxcz41sb",
  "key8": "5qjPAVH7ji1bMifnF59TS7RKcfDKyu2fcukaXCaYqtrVvUuKcfwZy1swGjtqiqmAzp9hCV9wEHUwr18CAn8952w1",
  "key9": "3Uv5QPGdohCvJmLciizvPs9WiJKijMBDztNPSvWYd1dGpLDK84cZjVf3oVYFUCWVv4sjGL5oRorpBBwHzwvvwWuB",
  "key10": "2CxBbjQBGVPgNWodFLLYNbo4JTN88VjMmSjPqkZkrsjrfvxbPpCnHU963qraUMENDGPKrTz5khhpuyym9LnodfUk",
  "key11": "3HC6Z2PVbmSFmUEQFR6GRwB35UK9m1Skup7TQrjBGkMrrWzDzTX1PnrmTez27SLg8TqR5M6uSmrAGs5sbH6MmAmh",
  "key12": "3uQnJkm5WH1pFsFNKwcDeXWdYyWWo37dm5pdjw5GcRd7jJYoWzCWJYy5tjfvb5P7CuQBQbaQKdc7D3ePBZx7kAF4",
  "key13": "ZEaBm5Ng7PzGpUnn6nTwkXfPGoKE7Fs8hzW4YW6T7hagTvY81ig7cznt3iTxQ5Nkb2yTGoKfUUzAbisQ372gw1K",
  "key14": "4rcSFx8wE5abQDLGVj6bzSgQZizE5eJKqzLov1c5JXNKtBMZz9U38QLdKaoZHsbvDFE8Tn1LsqBdMkCxJ29FKomy",
  "key15": "3HSCrmz7yG9pqSRh89jXM4pRaCiHFumpB5SYbEfEdoGcUfZqzsq3jhZpunvpmughgFF3hEgmjNVLHkqwEqfs5tTk",
  "key16": "4y3GXzTPMQk3WuJzG53LX3vh48eVVKivXMzMkeXe4ecANpqdpZibbkaqusi62AYMoTrugJ2uZLkuEMf7mnrKq9Lg",
  "key17": "4mRx2gfPJx753pBMbzPskYDfTvBYY8C6ka7xGbhjonZC8kYvdsmLDVCmm7JxaQumJeQz8xSPbZJovQWttE91Puo1",
  "key18": "7J3WPQv9bzjN9aGk2pKkfTfz8c5NzJNoUYjRiredpJhML6H4Ns2A58nxEtzmVsE9VHVTbgL2jwLZ7QFnXs6p6T1",
  "key19": "f5wc4BBjbfzPZo9P9BHRr9VryMYFPp5GFDH5BJqi4f1GBa3WYDumoTuoNH9snwbnYStSk2mWmN3KEyMh7idKDrR",
  "key20": "58n3TVRnM7Ykr5kiWKKrGJHGA9NyDYzpqfLT5mujteRLSr7CNqb6UwovJUxSyWZw1gdbAAAb7xWsMgLFD5V9NPYJ",
  "key21": "46uPZkZmXVwt9jUdnMMDvphnE4iJTRfTP1c8tPYECWV1frzUTAsvJhbEAfUgV8vRG8zebgSbWHy6bUzkttt5zvr9",
  "key22": "4PYaiRTFdcFv6upg636atfrvrF5ETo3XdD7umHRHvuG6CpZWS61LRdRpEg4CEaYwehajhBCqiaVCsQPcNP93zUhM",
  "key23": "3s6xNogiped1wHXVQmUuEp7bXxTCMitwQB5ARwVhxzrV9TSDs1mmW9uGG6oqbR6Jb3ebiy5oKmBhFzdccCFch1zo",
  "key24": "5JUwVomB7zjbzr9JRWJdyerPkvtMxYgQbrXGzBRXwnHt5nwut3XNcpvN7qrcy6DktuD1pgZR7iWJzDUhamNPB9jP",
  "key25": "2J1DDc54GUDQ8ssuKDEPpTbSpszGRWhECDop9yzEXXnwYSXmBjfy7PXriuvJM6fn7YBeXSSjso9ReNiD2hti8vjB",
  "key26": "3NHJzpnHfRbe5f9Sczh3DzuwGzXuQCDzfLQJTnf5CinorG84swSToc7WcU2L3Mo1GkmvZDnFF3xYted8gFogjPTe",
  "key27": "2Pnmv1A3pAsF4ha2HTWaaPudun8AxSHBQTPE2bgx8FynbMXqPQ3bhcm6KCgCEHSAWdaZScf5Xm23UswQSEedYtc5",
  "key28": "4NamcjqSeUWtpmGqeTceuKPVZmNAL4PmYytrc4VxzAPXTKf8CVuFxymNvV2p7CwjUxit8M4RjnDuze9HfG5vQwKD",
  "key29": "4iMSG58igCR5ni1pmQngLf5cBr6TACESqPbGZbHY2R2whWzKfhBYC55tP2dwCnvgY5tfdUkEdy8ywXuxXsj2GSRa"
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
