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
    "4Dd56JMJvxh9BvpSvfcUxnVevv4SUN1xpDqq8VZbAujGm8qCQ8cvNbZ4dMiCZJFdpGD6Wp9562DJV1sJKqNnrbnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YG9PuMDa58zuYap9k1Ksjoagw4UgJwW5Pn1CvnCwQM2gUxZ7H6Td2HKw3A8KKxpSEhnt1Wh8HXRcKn2CYa4UsWb",
  "key1": "2J7gbgVcJL84svAwCXEPmAhug78WWQTw85eaTq4n5tTXf97gtAx55QW8g9CPCuPa9LJzyukGp3ANah5QDg5RNMMc",
  "key2": "39jByw2ZAK47WSjLHA3Ucsiyn39CW4hwiBNhkGmroJg9M3yQhbo4Hd4cX4C5eH8ke8VYVgyGiUzyGs6KUm8E4A36",
  "key3": "2KWngz86bMBMdYX5SF2eYeK1xdf1JBNbxh2NAQQZHLEAHV7C2DVoRdZZV4YPNG2Yotbi1XLW7xHh2jwzUcBwDLnq",
  "key4": "3NipmDHFqZ7crsCKfzAjcix6J5B6NAZJXuA83cdXe7wK3BmFmREMCCu3Tp1F34BfK9sBJn8Rw8V6MyuVx55wFyxj",
  "key5": "2uUux49Y81dvTEma95HsmBg7vGWnsyryucsv7AoHh4sxKUHXYPh8gvpaL1Jdq9JPQ5TQXHK4xY1U5EMBJaahcNHA",
  "key6": "45F78QyMrGk59japdUnDvwh2cK39rJDYccGrbMysR2Fd53VR8D3EqeFBwsfvsEch1wXAADXawXFQisYDkCMDrn3Z",
  "key7": "3CbhjS8uXHoUTuumRj3uaPJ5rKZqp6ex5hJaAiavGo7ojvYUZ2HCamLfHur99fiBM3CyGcwuEXPYqGibssYUwqv7",
  "key8": "2rRiyU1sYBWrr8kcim4mj238LcQTi1wUN9yTMJWaUxD9uydPCrJ9u7Vsc4MJ2hALtPK6dvx8ZtZdGkS3yPpYFhEu",
  "key9": "3GswPZihFNYVQDDeQ7GYKBZmjyYEeQfKMggzrc3K6T3wtXzNJbjhq5XVgxaACwD1A1QzULEUT9Gwe2nhbw3JfLem",
  "key10": "2Vst4qg1q1rGTPTeWb8QUzSUoLYiKQLUmxaL9MpKWCM8zCfS3U8Jpi6MWLJpKuG3dnwWY26vCwHHdehpwyR785Yz",
  "key11": "3AaiFGFUohC4iAZttpH2hqpZ7mYek3Y8z9zM3G8XnTxdBYzf3EHyQoLVy3iFQguY7UqTbgASfGMqCwCeNzG8ct3j",
  "key12": "2fetqPJL4XJZMcyJ1DxDKB7fEqkNTZ9oQugkSKEQ5rnPpKAvFPfbKVJHNj4sJdwYkvvn9fY789QktpK65RU9Po2L",
  "key13": "2DxXx4iCaoPafe2A1yu8zrwwiKY8ii3N9vY3fG4DL628reDfb17rwxtHMaHrDX5dxUe7gYJ2sxxGKvfioS5P1Nvc",
  "key14": "2JumeeBEHKLcFVzvitYxdJz6L1BncSvjssPZHzZzdE3MA6sBEsuCC5H24aFDXmuru9tF9ZhUMgg7xmMJ31euiux7",
  "key15": "2ycEWFcKRQo82bykRoG4xeFKE7jRkAqNe5LqnrcN1fqc9fXZPijfG1i6rFLWG8r51a5VMTbgy7uHDD7Kpa44CEvc",
  "key16": "4W7JNqd6dAvvvo9ET3VqF3ietC6zfYBzCCpAftw82gR5dnKbwxTGkfHZWNv3ZSqa3TSKgxUkX4gSARwfrci1Fqj7",
  "key17": "2UDFeDEQeGBZLiSaRjBRa3KEDuFnWWzZ7CpXc2aPKZi2J7xWRcH2HvXYiWAsLtuVsa57yS1drWyyRNMc28TUYdae",
  "key18": "4wTqosUrMSxbajkLSsWK5kctQBXsCR7mHcGDvJR8AvWtBknC1ZpeBxa3HVPQjgVMqXKeBzp8zXexEY5Zkj4E1NYK",
  "key19": "26BwXYoVG5mXPixCehbLiohU6U5nD8U3gcTfijaQUv4L2NpsSMHXsL48tRu4jbYwQWY2U5ZhAH6fVYCqAaaF8gWZ",
  "key20": "5jVDfHXnuui3ierPeqdR6K4AMg2PDGzUKoxQsFVpnums7XgHCqnKkAUd2ShJhjBrDLZgxxEhwhqhw33ws5jp2TkG",
  "key21": "2Cuh5Sru63Pod2yzwN7X2LUnGbFmz9DZ1mbpKe2xTXGRNCDB68hYts2sHRTU8z9dm3QzQoEgEQYWnJ23AK8eapia",
  "key22": "4gdEAcoqkQ6EwDQAiAAgqdQo1QyZCpm5joUvb5fCNpeqCF3H3YkMxuc9hYiCa6YvfeWhxQsqcmHnxwXpe1HjJ3wR",
  "key23": "2TSzArJe56M2tqMWvzQzMipZVabxH4vMwczkf3WhDFiDEGZMCi6d7UiwZ9pnZDVRRhpfcaY5hRUk1Z3aVRE3Akwv",
  "key24": "4n7jKGshFibrqi2mgJMQQYxBqEYeqV9JJq3Cbqx23ksVzR12f9E8vGVCxKJC4eJ8DcCtJSccZwnZR8e3MWcuS6Xb",
  "key25": "3ncbBC2JU6CwJmunU2EnrGfrW9Q2u2NDHMPcnKHkhwvUKxrqDXcuJLGxogP9f2qwrojagn3ZsZuFwe3jVE4DrdmP",
  "key26": "67Ru8PdqUfStS2eqvWRSeiK4CM2efUgCFrtepoFuyEkqHLaKDm8qoLa6Q2G9avJHMqSmpg8GveppTmv88rsgSqmF",
  "key27": "xkQSWLVV9ZUdq9XLN16UEGjD8bnJzJaiUVyBdpyxPdXZaYoMGYj2pxcjvU73TzJ1PTJ8uTKC1qysydHwMu2PuKM",
  "key28": "4zFzE3vpZwFirPENqxKAVU5EzPCoiTuFbo3ozQNLfed1etgS5cMBDYcDJcKyoSwYrjj4buJAorb1wJ6bRdr2ry4w",
  "key29": "dGxkP9qKt6g1Lb2rbT7yLBMz9MjdmDtmkXhJtqi89dHQbDXWjZzey44DnxbH4w1x7Ph7HyHkMYwQG4AiPAU8ZLi"
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
