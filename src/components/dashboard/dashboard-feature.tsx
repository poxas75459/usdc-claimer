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
    "2LTfNL38UzdnTBztrqSEJ2i2MPpSEUaNdpXdTUCiPBvG2LREWsMQJqyeRpY6g8ynZTHvfEVeQTyjwZQuEdkUFMsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KrCXJbr7HfPs96FBhx88tNLm3qEWFe2ZqmW6Qjv5S5mLxtE6wiog85nLAoDYYNDPdPyHufiFXiBNf8eXttKg8r",
  "key1": "r891NHUvZC3NDYZFPZWqq76o7tJ35vBrxviLmdmTpzJViCSU6o2w7cS4cZoRYPgVvse7rhutyHw6q4XRigUKckL",
  "key2": "4Wx5gYy4yH3QhcxqR58RFGJ3pXaEcBUS8UkghSFkrfW9TDxFLVga2q7Kft6vQMwRmBwWYL6yXyPhoDYJ6bjumrxN",
  "key3": "2QEoea1yDnDJvpEGEgMhGN675DAwypXM8MLobGLDNu7Sqn4r9zssr92boCgygdKnrYxsX4JGbgMeATUUpHKPMqph",
  "key4": "3RGbiSDuWy1kSrciwosSLqDw1a4KLtMkzooZw3FbusKp51ueKHe51j8Zi49nUFuea5jYyK64DqFPhJwZpDG9gaP4",
  "key5": "2xBfsRaoUMLgxbhfN88iNTyGCt4niVNUKkc8cbSSGKcpxuJLmqTLUmDPVKeU7McwvhYgnjzTQu6dYq2wKqeodeSp",
  "key6": "53zSgdA36LWbFRfCJHW6QnAD4N9o8QYZepyoUgvj9nciywpruAyGQHYrFfkW8GwAHHx44LEkbyyxNKWFgoCaGopW",
  "key7": "4xVfXxNn5kdxsGv61tLSETLfoq8t5LYpuxCxbJq7LfjqGebVm3Bo4MUjucVQxdeiWJJZ774VdW12CAF9DF2GQoBp",
  "key8": "25cXVMoCPuk73d4gAxD3dPM22f7N6RPd5y1NbhnSm8TXFt8MPLax8Qpq68jLRxnUXrHdmJ8JdVaiH48PLgTPKk9S",
  "key9": "VGeEqcxe1TaFgmhA1hA75fJXf8xt9efUmKt9R6zFWhX7BbyTNMpaabZDR2zut8ZKhQRo5pKhkXi4Sx42whXtF29",
  "key10": "3FWCtojCJPxbrf3Y3VLV8LdztqEwfQnRs2zZMfdMW874yva3irfhkn9tqNLEC5wZ6giA9o6efz84X3phnbwjDTDf",
  "key11": "5yV5oi3YphAUasTpFMZQ769gUXazevwyiXiEbS7seVuqPFU1QsdrAyYzBN9kSKdgtvsJzE4XMp9YccAeZe8L9DzP",
  "key12": "2Boh39cpFgPPXoxkHr8Mt9gQKbAAddmDLfWugvXihMgmUkywwp9MtDaVqzJ8e5hEWef4sjdD3hBA4QbpyYVVGEwU",
  "key13": "2magy7mX5zvuuSveQyWV7MCrDgUeXTWCurDxMhPfiWS72EY1K2VFoAnjsKHsEZa6Bwjar9pJb6QeK4EaZH1AyVXs",
  "key14": "4Nuh1YfoMBt825Zz6LMfViSxvEsPwPEcMjY3FzuenCcHfz5AXpQRVuF9yjxxs4zxseCqVRdgS8KngGD15kCTmYV7",
  "key15": "22atVg3BGXEQDQJDG9w8R8nsV1iNz14jhaX9iwLnJqQJUMjsE82MeghbVLa1obWuhbALazsx34u1SGvo27HS2FVn",
  "key16": "2LzNMzPwVRsaGPcxjtuXESUf6z59dQ5P6GRMX3XRBZRTVXRDBcAptKzsF5XR3pmrJdUpwemmad5j7QsvSaDDUG6A",
  "key17": "3yFT4WGL6Db4PjuhxmzxTQsmuNWSAYVWJMGRCnYuvNtiMPVP5xuS2sR7192Ykt2DxezQtUPe66QWzvCKiwkbRa7h",
  "key18": "xBtiXBpvuuWWXwQZaHzsKpGLXcUAVG6935zpGfPTwFVqnpKtRxJLxMeMryhTuXznxQXNee9QxwZdLDfkzu2skKV",
  "key19": "5vcQrLHrZNGmfC3U1e95pWwydNXophso7WMx8n7dP7BQ1QtZSkQpXhjCj4UVPxyhUX2wnMg6cFW2TZVnMiPaBMhc",
  "key20": "79Vmq3iSm6aCvh7Y1CUdcGn6iXvhazQAAdEos1NcA88HuVEZ3FWXdwvaMGT8g664Ds8ZrTgaZNUKAHHtpXs2SkQ",
  "key21": "4Jmy3aTYzPACZ1rYMTf2tRrzujS46TFxtGovhFjzx1ohjYZvPY87ZBFoDWiCH9mn7kWXv6D44dcvXuEudUciaU7F",
  "key22": "3yP4kpSUsPhwRPJZw2EGv8Th47AFAX3QAtJuRwnVBZFzJZxb5bwHMvN28PvDeDDkarFZavW3XnFSmwEryPy9piHN",
  "key23": "2AMCPmvjxDwNVfvFbvCVQaoq3zN2votLHJ9EcWgKUYJCnT5gdK4AmeceSgHACJD2kxJQeKHWvy4aZLnvkvfQtjxA",
  "key24": "5TWUkuAAe6dcBtpgh1XXp8wCjAvJgpGUv8zTNbufUuVCT17mdo7TQLCCTusr9kNt4QoQWojD1b8PfWGeT6oEAvSm",
  "key25": "askyjJspnPYHFAqAja29VyDcsHgs1pve8JKqzWPm5pUAYTjEnF4bfXcGXBWip49YLWnRE9kPLVL35yf4DdGj11Z",
  "key26": "5qdMmf3TWBtUGSLJZXuGbLf7mYA77Tct3cKuRYaZSxkiK7Mevnc71KTcXqqZKSoT6FUXDAbohciJCDvoVdZk8bgG",
  "key27": "4drwQqHCufT1x8KehBsZjMpCQLqAfnMoSJJfxDewbU866jU6SQRv56vahLo18KEMYQqoCpc53eqBf9T1ATnX1Jfx",
  "key28": "5Dd2N7HMuUkjsVdPzdebDknqupi6ZziBpBwDahVxGyXah1x3Z8i5MqgwomHeYeXqDShjwcdf7F4qn3scxAkiF2as",
  "key29": "31r8WwpRSXVdBUuZGp12iRHsYhzcV38kM3zQYC3ABcUG1FCi7MGj6QV6kKtucB9QNcPgcLWVN1wpZadepVTwT9U4",
  "key30": "5trUsuyncckoKCBWuBpB5YoGaRTzz3qnqafwskGKCgXA7mX1hVqHcqyiZJGAUFvFCCy54RfssZwJs1adPV6J9Gsd",
  "key31": "5WQUksSC3DNzNSKXQnFcNL527irx64d4BVvEiyAyoezpgD56jvjBp2WpM9UF8pnnoV3n752V6jRRhYUqtR8aN4N9",
  "key32": "2hNsRxKf5kwo9HbXiX9r6A1dj1rgBMkBJJ8ZQr8JRmuYMS4mF1g1heJfhhLDGq2FLapP86wehSHukcxyBe8qeKgG",
  "key33": "568kC2Qw3skpBRycDX1ZNetSpcpV9HRxTcQYhL9GbCRWqrK5G5VBDrJrHPYoZ6Yp2XZzbX5bX55Twt6zr4SN4Bb9",
  "key34": "Ey3ZEjFMDotvcpPhnADkbsUZhoLdPByZXg7Jyv9Usc9UMB11pdMxD2kBfJ2mN63ngqnEJZwcfzMM7xeR3NBTYWY",
  "key35": "32DJYzCuaXJeVmQGGvKtDXRFKZv3B2u4enQbDkY2tPz2dcTHKtAqUWPtmHxFQX7h3r3Sk1VKYQEkvNPeiG8ETvn8",
  "key36": "5BmayxTHRCfkTkLwmhCaPmVs13FGMxg5ByrkareoQdWtAXJSsKw2TBNKdzS2MbKMAYfV1dif7eQuRGG7Nb71VvKA",
  "key37": "2WHeQfcAhZbSNfMPLn3xz3FsyVNsWCED1VHSzrDgmr2R4tK71thq7X2snHKUw4KCD7bJDikt7pLBgJKDxYPtKZR2",
  "key38": "4fu5rnEB2E7g7tbkB2Gn2tNPQHBjkzEZaL9znSZPYCEZD7w5CavnMKTybNYdQuYpcDuk3ssk2HYA3YpmUngWAVTW",
  "key39": "5KGukdf7m4qkudWg9Uk1W93utRgNp5WWoU8jS3DRtp4kh5THLhwa64ikWSGh5eMFbgiuxx3MdZjFPdNSWSP6X5uv",
  "key40": "3MD5KZFwbr8CNLSeq8YWHbTGPCmxzfSyCTQ2mKUQzFN9D8ihtBgcVwnULQVh3tFGzYD13YRiwM7eSHqH5zbGYSow"
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
