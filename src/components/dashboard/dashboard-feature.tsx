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
    "426Sspei1XQJGfYCCM78G14JrxT2VpZED1i3RGEYMDffdCkkEdadMeKDF5nJiS5YVHstMqTzaAxeMgUNabvPctzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkD3kV7uXdGKAgL82jhm88zdjWDCBrZrU6QvA3WYhkSZfebfr2hvZdaeS1nB2kVqiAL7oGpPRyZwbNLu66tyfmU",
  "key1": "49PhTG8XpNw6iUtfU81eG64BUVdnnPRxNf7CmkMviyKvRtgFULLUCrE5RCNT2VC1T26KPJECNDnWgdZXTCanimo3",
  "key2": "28vqdDr1FvfKqoNPmShmzWdRD6vspJiS71hxCrQQ82o8ZVzJ511KA3JsZEH1n71bub3rX4iS73vi8s7z3AWitgfm",
  "key3": "24tA6dExT6zAMGYwSwZsJ3UBJxCVL5qrQRmQ6FXuaHGNAHa7sr29VeimBbMGF8p93UTV3qnpqXMZXDXSVdhoF13d",
  "key4": "4EkjGCncy3HaQ4Mh7i78Rn5MqW4uJNJaK1jwA1vHqxDdF2Gu5KKnYiabHpEc5GMPQt49h86rdV4bb6MQy5DJMcVJ",
  "key5": "5idhvVThK3uw2WSwLcWyVqawGWQ8cNfAenvAjXChr8DKohAppKB4VuAqpWqErpFaAKskzZw9dJ7S7TAuedPFHMR1",
  "key6": "GDPAUud4cmyyw9mo9NbEZUxMwfjGp36XMdqK2YCpkLhhBLhVAESv6vmB18cMZkm5692Nf642UKWyg3ZUfUFo6AQ",
  "key7": "3PRMRWdwRtpEe37GBAePhHpM49iuTVRYQgYsXfNSG1ZYFRHd8EpC7poxnXHGRF7bcm4zFjSPKE7jECeJe6z5U8iR",
  "key8": "SPbNhiNbh56yZsCBgUgNMBDqf2qVknyoUaLHK1KpkePBjBUneJzeK4kn7M1CMy5cn7AabWayiN5UXJxhXLNQjZR",
  "key9": "2UCxKZyb28FYzBiw7BKrAcasBVGHPUhPsQmwfeoW5xWCHZZo6vCqqe6scQAbqv84dnqVqYPuP1kpMcfCNC16ys5d",
  "key10": "32vZZKNU7FN3Z9A6QCtZkMmhZbtgVoqVLShf9Pibk5w2eSfuHgfYEgiNnG9LfNJSBiS4quMmHPvTyMkZx3qBeSk8",
  "key11": "3fjEgMR4xSdo2FaEUP8BxUbpDV52hQqg2QvsVMC3qJmTKMsQSfj1zxCAKYLZUnze7jjEnM5nGudKEYzLiEAURxVH",
  "key12": "59BNSNnCJKeCzRCMDfw6a1ZqC2RGUArFuJgL6gsM9McSVvN5b2MKdrSimYzPcxBnnuESpa3i5jYHTXF7m7jY4hwr",
  "key13": "4NefRGfxcifJdqD4iUwLgLuvPJ3djRi2KgRZ2PFDZWLkrE3WLfJDiLwtnjM9fCKCY5rB5AGiz8zE7iFXn8m2yiip",
  "key14": "4XfEEH96CsftjdYCDYh7rX1sZnetjZz9XNXvvg8WtU8q9tEarxJ4RZqTEgr3CpxTV5uTrKUwnW8VvBd4BsAqQ2CX",
  "key15": "6HbwNk8TvcZbVeZ92BKPgJuu4JbKCaytq2KksUs8PnuDw87MjyaKfswi4Pxrt361DUJGJksYWnAXGJR6u4Jm2hq",
  "key16": "3C4jiYQ5CZgSQfTyQ7wvvg7HDxSaE4ZrGpnJwd6zPLffSAAR6rbKNdFvPEEW7qh7QZR2Sd82ZBft7BRQfeduEcKv",
  "key17": "GhjjVW9NvycMBcKb6vUYaEYURFWouxLQ4kHDN3rhFqQhhVS4LugYGZgxbSCr2Q9FY6cmuHSn8Re9pNm6V5gsuYU",
  "key18": "5NKhnpuMQpBaTeri3VQnSQRyFDnCvcAWuQNVKgAbUFcEa3sezWD4FTAQJSksN24DfUoyyjdRQLookEFdHHJde56w",
  "key19": "2LSCA5bYtqRAeDmtxLHvTMFbf51TVt4CAJjVaXaBy7jwMqu9ZzyU5JPzSYxeEjKh42bD5BVw4YDVfPGUoJKjT4ko",
  "key20": "5qAVNcZ4zjUs2VX2SRtH2HCi9rxjfvUZnoFSC36eYroKVY2PgpSXopXQLo7VEyosGcJN2V1et3D2eDmyDDM2iumR",
  "key21": "7VxFst9aEXGbiHaj8gK9zUV2eQXjYuurmbkUXnXWNXQfooLCaRBTPx7RZDbfpiQ9VZNcF185ndRcZfvLzPux5or",
  "key22": "3PDFJAqF126Zg8qFn48ynfvgdXoHPFqE3dbUtYTB2hdF3ptRRBzKpB9EqoUrsAvnu5qsVkAUcQwBBUMpsU3gFrTF",
  "key23": "srUpULGEeeT7hC5hJRQ7khYRzaHgiwZ2GPtNXUgT3tcQn7TopuBNtxTPhKS1krh2vpXgi5utmcBv9ESsrXw8Zmw",
  "key24": "42eJ5etThiVn1bxbiuwoXgV9LAGthLJYdDSzS12pRCwwssh5dJiCpDAk9UuqDFxt8HTQPfdYexbQvJVZUpgxbYsK",
  "key25": "4GmUcde1Hes323JMZpjB5EpKY5jTu37is9zFVwdv4fux9qoWF1hBzNcrabqLCta1ctWHw7bUG88jQiGSEc5SFt1G",
  "key26": "2vECJWQaXP1WbLyYMGbMPQbFCE7T83gU92ZccvWuj5aYbFYVCDKo1m4VHfEdGpy35ip2cERg335nfQ7qCy46xeRa",
  "key27": "51kAnZmqczycYkpevjmV3LKFdyrjZWrf2s3Jdnw5cqgYkDkLHVSR7zG5NkmnLuS1whJxNR78Fpefjt5fGwQ6fCpa",
  "key28": "6CYEBocTzCnxvwQDN2FhCbYpMxU7kftLpvwXbRjCqirJQGsapHH9tZvhsn6NVzEvFaoYhzuJnZcVwX2auXvgMcR",
  "key29": "4iHb6iMoL32kjF2SRroYupdimBVGn54zAboiXMPTVBznbrTqWUoG5C63sWF6UFjieJpUpK66qEP8QohcmkVaf39c",
  "key30": "2AXEwtMNw5ucCLumUBeK3MY4oookFkvUkQ7tCRELru2R3afGyegxAKbpzJ6X4Q4FLnuF3XTSPZ9uw8tR1Fd6VHRz",
  "key31": "4t2XQCFRYJsMSwCSrHHiN6nuxFh54EnmECzCWGgryUUXVtdiJUEKQHGdSgtS17uLJrgXxtDG5XmWLhuuzeLb3cmV",
  "key32": "3acbiAMjTMedxDkAuGJSfoiCUdpTcUKpt4ig7naYGfaWXBU4atQ7ZVrEAzUaiXyxJDsHdSrA3WzEudtAkRmZqUfz",
  "key33": "4qJYK2drEviQFv7CqdgB6VcLaWQNPfhFGPWx8rtkTfA8bJ4r9MFr59XiC16QQjM8UAAW5iwcwDstmVCKVsDS4HMF"
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
