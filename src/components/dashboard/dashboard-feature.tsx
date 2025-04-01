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
    "xtGDGp1J5yA4ZwWHVgn1WDWx6frVkvhJdR3d7DEj5McFGnbjb87bfumUYAYZUv9P5S21PuKyiv1KoLDa8YmG6CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgU443Xn36MNc2pQ2VZqA7k9zJ8935NMMM7oNqcC7CEhdbbj4UqeeLVsTAMnBJk2qYUNt9VVKFzbLivpgkDH4ES",
  "key1": "2uJfmDkEzkXhBtd2oMJq7KwxekZ1xqGxd2eMyXPnQDH2KycCX869HEn9KLjs2ZMqA6SUMWVv83xwLvBmFtGRp9pV",
  "key2": "NfvRyDfF95jVCaMQ6qTe5BmdDFT3dV5v8vsB3LdB1g3rmJ46NvJ65FuqNUwgesoXXGuye2JLgiD2KEbmbec66wf",
  "key3": "4PCPrLwfo2b8mmqfqsGP2rRBZJoK28Uc1H7m2TJQ5UpH9Sf1RZnqnok1u2Qeo1nFX9hSYJeVQgkt7eGKYFPjnExq",
  "key4": "5hbXZ3NWwnmML3cLHwhf7FFS9BS35fsNGEd6972t5m5NuTpM5zZb11GRzpjyoEMbErpGHoyodtYaw9KkyjtYbipM",
  "key5": "3zjZ2fLVPLbnQ49qDjobssisz5WxaCU3qDHfKnwCqrUtfJ6UiiyVdD7nUkNc9CGhDtK7p8n1eDrwuCdxoHnHjYPK",
  "key6": "y74ppA2DcfbhQWeGKU5ooyBs1mWqVLmPbYY4JdrTy5RYcQ6TSnv4Ujka1i33eoNjz2s2o1WuL6bqv5wz7s1zQb9",
  "key7": "59qkVehqFdtEKHzHmkvLgKZKM1X85E55fVDX9B7GtZQFsqddG4k7azhg8XnW549rMAqKiWan9zRBUMdEUgmh44YH",
  "key8": "5KCopaXyejBdTjE2eM6E9YvszF6CeKGDsDTVJK54yz3J2Nvs788GzCryF3mf2J8zPLQUshqscjwqUqNxnKkpP3X5",
  "key9": "4grRzEs17k71pBsPnfP19MiFmwuar4fXW5J2ACMLrbvrbB4BqTATmL6PLjmcunhGAAgmqjCWS1qVGrzqkWJM6p8v",
  "key10": "N9EWmzTvXGaLuhRHZKDPdTbeyzkzeFNY3qoL2QuXsVRskNxH9m8p3U6yVrFaDXXwYrhfNuJL9pQdUzkRQADcnJW",
  "key11": "Bm24NYVYKzcFXF4Cy8W64ABtV7e5ysoJUhDEGuhDqcy4yGSWBMicCRtUV2PaV9gQTSJ1HmBaC3mUPX7t9giyVBb",
  "key12": "545ZbTHrcWutt35CSVg9pbrAyKoPPzBvRru4Qx7hwybbNQtnax1gJQKEysFPBMAdKU4pX9gZusmSzHze5cETYrem",
  "key13": "gRAJ1XmhvpYu8kCW8C7FGo4NYb2K4c5fcB6ogguXUuYv6qMTWYtbKc9QLTSDEXsBLriAXRNWnKF2rUHk9wdh3Ej",
  "key14": "3jTkahvtAQFjHtDSJoQQ7vCFsbncdR4Do8zwS9M95XVyJd1y1JUGM9DtPssu1teMc65xeuhRVvWm5CAVUkfxqAoe",
  "key15": "An2DxK2VarovY6y69qjAmqRhrPx6VkD8p5QvPH7uTNJajB2NY2eNfBAxzRMyF7A25fvKgdmDVVHWDsXf8SvzDoj",
  "key16": "36kgnVAQFVdqwxPFZu2UdWpadmERX4kgzu9oh3RbPribdLXovRaBvP2gwaMG3WtMoZ9H8oLfk7FutdT3B1eRZsrw",
  "key17": "4aQmoS1XLZQq5FBnXLPVMi6httPy2GBhUFAeYGSw3QNqnFeQ475jUKV3bivCUZMRbZKi8wgbos7LzrFevJUryMZm",
  "key18": "PJnY39uYM89YzN5EjFzrmZCKSEmR8wttpJQfreZpzvnQN18bej2XJeCgbpTvQKn8BZDLdekR2KuVCEunin6eZ8E",
  "key19": "5PjmdSistKoJb25FALhaFK99ftHXLZRfBusVRp6HWGKdiSBg4PcKMpzQmvcUtDAMCaeuRqJXdU9bS7QkcVkjJmCf",
  "key20": "2J89ZuYk9xTG7PYtFyB6d2XMTVKpW7Fa3h6F8aHwaDLBPwyKjGuERbg1R6JZayYtnLUMYcq3J4NFzy6hrJk2PxAP",
  "key21": "2Ed8ybyY5RWNWEoSdATz1EaCRJj3AmdC4Za6PpzUVkpeZk8rGfS33FZZ7nW5w7gBJvqho6c5f5ZS7CFa5jdvepWJ",
  "key22": "3t8M993MByeSzFYnyDnmELwG72dmopU4GaTCfXSvS8Fr9Y5iZFQPEdzNX8Xi2ECVGifsZuLz3yo4AcB6ChdhksXh",
  "key23": "5jgBX6LAz5eJP1Wi1P3tzx1sAXqfuyv19nPzwNkQ6AshLroKnuUSq8uaSmANnDU6HVnMD2KPDiE33gHboGNgehg5",
  "key24": "yWEvPWJVfsTomJp1qfQ75ozEM9S3Zyydy6SYqezHxCPfJXo2oAR4wuzD9MW3bmEwcARbCa6Zk4u5v15db7dnjdm",
  "key25": "4w1McWo12Ex2jXFnLCud3wfgYD7y558Au8GZRcEUJ9ijjjwnjhLu4BQQ3vZ7pCJ4pRXwWCBbAgu9T3EBNRPL8Ydw",
  "key26": "553HnAzQEdjPHNp3wfFLFtoH2Kz8iKryJVRWmYGSTKMnrpGfGbeWQCcAPYaeZuA55et71q3hAhu17VUt3zNGQXy5",
  "key27": "cA1BPz9GvtqccD3KrpwaKAcmR1Vjo2dfKxqPqP6eBwkgNKxm4aJtSQc8buc6HZt3zHhTFvph4AigZcgUtswN8AV",
  "key28": "4PaTWFbLPWrpHh7UWWZMzqQEQnK6tHTm11qys5vkN4KESnDGMCyeBZRHVHi2wFDx949zVoXCF5xJAPeGoaAZXc1s",
  "key29": "3ir74HmgTYVs7HEKusPxZyHcB3LupWNTeazHxjRpuFZREtL4bJ7owipMDFUbbvXR8iNKv5pAoXieNgqTYj4ZT78F",
  "key30": "4y2y7phEEtcnjpFFSGMYVWPbYZV2MzgjWntWJeWV7pzs4eSf3V2E3cTW79Vz2dMLpBxm1MEymE3y7BHawS9dz2Mt",
  "key31": "3LAg4vepth3rARV5aSWs9eHytL5mGjckn5X7vPNpa8GRX4Bosur5h4nGzZsLNvya4oyXDTgz23movTBAPSne3KyF",
  "key32": "3CnezN6yVbroiPJuB8AaFK9bSVPDui8MaptwgTBqvavrGVS1CBFYbjXMJyysWmpT7E5NAsnQgwPhhCjxkKVfudT7"
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
