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
    "s5Jc7TFrphX3mXkUXKQ7mAU4KcrUFLuqjMfZGuYGLrBcuWQpzETTDYgyQQN5v8BASQs9xzn2nLYoa8Q6YX8FShx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8v5stuZHYA9gaCQJW4EimCXCzvkrBjFey4j9Y7YCZ3QQKJi3FvRbRiVfrZCahhB3gyucbgLfoTyipmXGSq6o3f",
  "key1": "33Wncpwk6Y1HYfrjp5MduRt1wR33eX7E1Ne72KApFXBjoXvQo3dCPxicM1ywHFVfhEc1Gk1Cs9K6U3MnY3mz8XMq",
  "key2": "ma3ATLDJBVaUSYJNicrkewQc1NTnzD2fLjk7JCjjijW8i2svU5imoR2qPCg2wPGgdYL9ZM3BMPoWHH9wdtXrvok",
  "key3": "3czyVGKFdRJSkbMbSsb6S12CgLt2NaEJiUBfbNc4ZtkpLs6ahoQHSGjWbRpzCBLrrgftHsDiLxkhUaV17S4yxRfK",
  "key4": "2AbLh7pYWDXteV5AcfB8YURvSPJHvyLPcjHAzgMbVzZZfxPKaT5RWUyaRQaScn1gE2Xyn2BigUGYhKNhqjbzxvJ5",
  "key5": "3LnaAuVD4Na56CsjrU9HpZQkarF7aBtbKgV6uPZi6WQM9Eyofj5P6QcV3nxH6mEXSvR4evZw7i8W9yF9hayRRcwA",
  "key6": "5b8bEaM7FiEJb3qkQj9VNdprtnnr4kguzcJxZtgbZMDBhpeaJcpnGd11SXKArKrQzTK6HsWcuEbXUQD5AX9ogLYa",
  "key7": "4XRYDFvyNoefXpixzYhpcQAJ5FpQEcYS53yuKaUxyjihGBpFEZsMR3FGyiEqd94fQwwjokbsC4j1zHXi3A6N9gcy",
  "key8": "2ZxtXSdC3vJcimwQFS4gd2ePpnFbEGkuFHBc4vAFrUeznU4JhRHNauNyrPS1gCgVw2zqnb3pm9R4b96yNBPwr6ny",
  "key9": "2nRXeSwee8yCPz4PjBRr1GHg9A9xjLGq8PeAPsJ7T8TLWn3voptVVGKErZir5nfRUVoWAU95UngkZ73cxTRiSXP4",
  "key10": "2CfjcpK6MbXvfYTiYFwM1rLLGSMRSTznXcrp3HewwfJkvJbsN9EU1RUxpJKRmRJuoiU9z6jX1Asgc1g396dcZk4D",
  "key11": "4W1fnCaDjHEfZQW2nsVmBZM32Yo9Rk1DZEUkHrxNwnxd5AFYZuPrdfov5Ufc2EWaorEfKDHDBVAGzSXKoznXZYZ5",
  "key12": "5UT53eSehoXKtBMYNWLdGD11Pbf3fRuyYpGGpFcEhYDoBeEKeEfF3WH1p6n8Gnfv3whmZgdRv4K1owv7gCLa49KZ",
  "key13": "5ZLrvwAF5ipJaDgRTDcRZN47aND95ePap5QwBKN8Coj4c71ZgnNK9br7PKhX1qBg564MAs2dV64cBHpg6Wo5wiN1",
  "key14": "3ozGTCZ9kgmgmsZYs65dwC4Jk2jLuh24BMBQraNDEKtpat9dFAqouha6WjAWXcHe3uuLbmhRQThKzinx2wY3evJC",
  "key15": "3HzRArLhAnGpn6Nu5MMj2PfPub85cP85YetHbFLqS6S1KRzoxJKM17oMUom8KRaVyN4yicwSSCK3cu8nMbT8HJAu",
  "key16": "233yraFCPruqGzxPe8v3B7kpDugyjG6GLWUzrAgL3ZfgeUxQ2xnhH8Hxsepg7kYyAj5vaqGZy7ysHJhssok4FafV",
  "key17": "4QZJkna6xPKbPb8DP32pY4ePYDWRoCVgjbuyxL61BZRLc157B4KC69tQt1zKkfTVGJqJDzNa9q8vhJmU7PS3Erfv",
  "key18": "5eBgUWNGPzLAGJXQvJeSCmrpqAvpaULhQbvgKNhbSMQCzGtmFBXEGc7VV1RSkrQEe3p2KwxAfZqw7yquuiQTzzgr",
  "key19": "hWfNkDmyKcqi7sqX9YhKAKYNuyLtb97iYrB8mWbym4eyP7KmKfM1qFFeiE3ofsNt1Ddb1SZRbmUGvXmgSXL5XRF",
  "key20": "4mVKS1FfWuaSjQFC9XUvA3xpvqoTLSZBiwuk59TaNDUvgq2CPXQfd3QDnKtVJoxjPJqrCbWJyVuhmXtQj9M7DS5w",
  "key21": "2wKDCCTDz6RVKtEdpz45fVvs65TfHPhymD4Ayc4AUGGH1BZf7pJ9VsMEbZ5pHcRT8JV8usnWTpC56GiHAom4MTXK",
  "key22": "46Panokq6B77QKLzKthpfsh5cMVcG1dsKEayVPCCKZvS8YHx9WugjzFbKwbiL5E8u3S96enS9yULnaDmguXK5jGn",
  "key23": "5NZzvzC5FuK3M14J3yCNv2AgzvA3v9t2p5XbJWWkejNu7whuxPUFD43K2xHAuYw2oFuhoSXFxinpbDAtYUBTXwcg",
  "key24": "5WdnsL1qLsSTqVbQYhdR5bUAsMagFquvV1XtpWBQ8MHFojjJYNA1fxKhqoggUjgiwrLGPp9wiwAqAU2yL696CK7i"
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
