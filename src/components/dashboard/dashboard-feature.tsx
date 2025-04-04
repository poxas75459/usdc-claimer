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
    "5QnPMpieHghEoHDLjMGzqepNVyQweyWS3jp6F4hdZjz2rJ4Z1yuKKNWiG3wLGqS1hNPNoogVRX6Mk5kpvgdKZSWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6poacfxinbQLj3nyBvj2GDuiWSwvwyveLpkhUCdTb9neiZcaCBHKqEayXd8ys1kuZRui9B4dthGmxXBNPFQ2kG",
  "key1": "3YVKmKGZB1Ek8Undqjaf9KQEmASGgidXie5dULdKQ5qNaqDEud2xZzZcKbH44E3H3G4N9LY8z4nqCY3nusQhjpZ8",
  "key2": "3f4Ha9a22eQYnqWUa6AVCzop6CasoVMDwMvi4uB2hFeYLPKehDVwAYg4oaDnMQjfic1wA6eKv6ksZbCoZafSTN2s",
  "key3": "4Qun9MDFvggz4LgTax8YHrpinobKMfZGA3QxEnEnALXqnhcoGcPGqF9ft4KUQ9oh8NCScnZLexLtGEPZaY82x3X9",
  "key4": "4zQxz3gafnxaVUMz89H7Rb36Bf3HsJXkNkjgLELuQad3rh4JNh4rM49JZL22NLJ1VHgCRhu4ThDVrLqPd7JzSk3p",
  "key5": "5ZvFkUA4ZMYovNWVQymGKKUEnYmxpCMpY9d6Fj4UJQMNxuCvPPR8hHz9DqyNH48GyWSps5x7ew9FFXQ5R31Dmxdz",
  "key6": "3VxNjZg2wpwsvs12Tz9m5bhGG4a2KCQMtuErHQxD9JDKHUzgYBieXbMDeWg2Ln3QpFjU1ey86PSBUo1amEef9KWc",
  "key7": "YdVy5Jivdk9PbsMNoiDs3Vg4d8A3mn3jxzrAVCUyhw9a3Rn7LDKmS5n9K14eaKYZc8CTpvgP4sLCcPoZ1uff4t2",
  "key8": "VBbXZYCGB61UjrvmZuownBi5PRUZpVFjEHAVb4WXbrKC917fRPMtjtmLxveKSqAeJkgLkH8HWsU94owbCV4Nbt5",
  "key9": "JKRzNiX7efPehfQzTMZZTkY2ucUrLMwLaZUzsd72RS8cGzjVeVhJ5khiVZUw5coYopbNB9FJoYX5NdQ9nNka2C2",
  "key10": "2mhTZYUUb3hqnLfjMQTgr3orV5xjzVuDVRzT7FcVFMTyW9av6sp3TNiBSSfVGFNAv6ELSN9UPDQoZdW6KaXKfBG9",
  "key11": "3oFVGLGN5Mp5Tqku8FdGp7nRF1c7ETvnxqdW8xgSZnGRUVmadLY6daa1NnjuGUfr8tMcVmDA2y4XQ9LkEaE1dqu9",
  "key12": "5TbpvSL1LcoLnEqpDPHBteEHWWYA5RfNWsdyJSRELM2d7U1gKMCprrhWc5JWbNNxESP68pDUUfHyvFEfe3DkFMcy",
  "key13": "3ZQKhviXGCJr76SUTYwiy3jFeTaGwDDNqZU9i4YRiPdZLeouhjVftu5daaWPL43Zh9dZJWt82LL698mFmQkgwKJh",
  "key14": "p7QJnK5R3UxRyJ6HMsfDPqL8Puj4W56Znu7AoBTyLCjfb2BGhpEfDQUWyT4ZRksq49EKEbNAc4Vx11cz6LYXMu7",
  "key15": "4vhjaprbjtypo9k252iLvCNDEvC4WyW2dN4Vpa4hYqz2DCDwrUgBiV81H5pwnDVwMr8eHjBTfyNXVjAShM7AQPfP",
  "key16": "41v17GPSPUBWDAL6UNhpSR3LYBWPtPvJXhHd79rwEMAShJUQWVFaZZ7fHWZfBBVDoF6872vhfsCkz972sa7PNXWa",
  "key17": "BkZugYb4vzS54PckCV8DyJTJhKpeknNGSsHTJK8rkakYA4X4i3vEPGtnj779SnES6Jk7tYbSRN5VtUekqc5gQrZ",
  "key18": "67B9QFnFZHzGK5prZnF8utzE1ihsUiYh21GPdyWBEvPYihmbxYfDMwzbrcgYe516emXM2Rk44n3PjBEzikTdddXA",
  "key19": "zkaYLFThFKW4jqq78tk3KdBqwhisW1irxmXBgEMaDZUfbYdmgEQVqQ7EWvawVo8akMbVx3VHfCtBQaQm66DHbYd",
  "key20": "2vACQWdWkbGp1axH2zDYmXdaX5N6YL9cj7vPsxZX9AH9u5Hpb1MUa2RXY7Lhq3PCZs9F8XMPQ7Qi7cexWwDQL934",
  "key21": "5HYQiHKgSAFbb4rWbbm8W71Yu2Y5F9zH8CeHa4uPeWNxuX4Hn6tsSzJAGuutm1y6UKPBf5WiuSrA9mVH9Zbs2yQr",
  "key22": "5PaW5MkWVKgArkTab5u6NehvBNnP8KhVV2k9H3DdLdB5nid4M9qsbcgcWxggEPBp7eiKC5i95QbAL6XqYyqVpy6u",
  "key23": "4VWNXoYcX5on8rworjFJgszqzBjv38upJAt3ueLkctj94VD6kAEKAZhCoFfWVghGzJjrfZ7fRbs7bVLc1rphEST3",
  "key24": "3MQPPfnGtRGJq8EoTuVPqbZGyv5L6afhA7wbeU3NyVgSsmjZCsbZJdHWyoMU63vEaWQ4YWcUuD37cQmGSU4WttnP",
  "key25": "yE2nHCXuAAPsF1xHih7vBuACgLSybmTCbQY97eGjK3UYVQLbBXKMKZZnkCRpmVYX5QwJsaNT2GzZ9N2XENdEDMb",
  "key26": "48xWFRkYNYmTYdMipNW5wDYGDU9pyVtT4eGQxXYDrBbWCK4vy7LC8NCyXDZHF9PshumpbuL25qJgKjZprKqAzYcf",
  "key27": "3FQkqQGFmqYsny6icnkv3AptRkdzLBZXpX2EwfkVFiPH9ncUVNDAHjWCKGfSTwxq7jvaR2DmeSqyGWCbVZq78LYH",
  "key28": "67hXZsdAFCnp3UjyHgWbwC815r5rBhWysjyZp89SFEVRMmnbcTgZ1kFNyeknoRQdrm4reKoZK27gD8o9YnnBQqZX",
  "key29": "HipFp3q5Q6dSaHsU2pFMwFkjFmDz5G3NWqzhjoPYpoqfzBMfZ6QyBmAPhSYCDXir565yP6pHt7tpWUPDikjNEPc",
  "key30": "4rQf9Ycr3vSY1igwPwA83pi8WrHMeM2Y5orce5LGSRztWitpumLg1j9PcFQqaPJcufKk2NNV28pxUC3FkhbFLMHZ",
  "key31": "3UaFekvqgp8LtgnGBgg2KQRkHzkcmCuWQkiRJerQypv8UUvZX9MYYk753MxrbiA9j7ajdEoSTmEwBLYNTserZfHY",
  "key32": "5wn4PKFmzbaEGVQJnodEwKXso9QNLk65YooBVkUjSU7YfFk2RUz4HNRsbjPdYCFNPoBUzWggurhacMTwnysepyTD",
  "key33": "4mCvAAknZKhNRDXB2PnbGNC1MjYuHBX6ywRG2jrTdY29mQUdserh3ZichnZLAdJSsyzLS7rMh1dTBCdPEzAuPL1J",
  "key34": "w9iFeska1vJpTKQmjP8GgTtZzMDtpzbQVeHq3qqs1SzWBYn2xBJnvqFUY4gS9GGFLA5K4J1r2nxP2F6vpM32uDf",
  "key35": "nUiRDUs6233XmqB2aKqLfHEaBSfSrpP6ogoxCSnM9Hi4s536uYT2bjU6MVdY9YG16w2sD2U6ShEPyLEfEUwFtEG"
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
