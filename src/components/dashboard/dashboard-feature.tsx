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
    "2Cv1xcCDoEe7QqvP5KtKUVnTKuJSfhDx6btgM2Apehb1DP5DW5GnhqJuAztyhMUCaF5RX4dRWUi2UXpAdxHWypoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lx3WPcAmgEZkSE6R2f7KMs9TJzkehD5fvYUoccFuqVyHY1BJ3DH52QFA8qRd57Gu96naKbK2t7eyufJZJfU9pLf",
  "key1": "BogAkaP5TjwRUqqBX53TNHNosUUREFvjWWV5eA13bbYCoar7gmgyHeRzHkMG6rQ9LtLeSTyUhBPrrzH4pYAsxUn",
  "key2": "2JtvvSLXRA8ZDbi6SQQnjgTvNC2YeinLPVZ2AhsBgaQBRN8u4GWg5qxv8VW3ZQsFRfb62NCcCZH46C93x9SJjKvX",
  "key3": "2JcAoVtqn6GYVdM1bcnjz1J6Ab27xmyx4TP2thZWQ2v1wTLH9Lbvv94ZyVHxg8PhgPzswsR2ZSPqHYqqbRnmMPBn",
  "key4": "Ty5DhRVhh6cUduSKm7EafitnFKZFcncXsTasF2Y4KW2JCVoAvX6mfaVg3JoUDvrVdPCMbBQRikGqjG67bL5jj5N",
  "key5": "3FxkvPNgq2YJw6gm1rJjhn6tvtuYxyf1S8BW4PY7vW7py3vasbLYfTTrFUUFH6DzLfy4vPULoSKGv6eUXeRsgG5J",
  "key6": "3QMgfoN1mb1tejwPRxMjSnarhESjaqdwqGMhdBuEMvYz8SyAM5z938fDxEn4BEuX5Yq3ZvYZ95nSayNi3pjud1Kg",
  "key7": "3ouLpCaExPTFWaFnNHHyL6pvuGRg5nfFLfCxtQfZ2tM7aWuMMLyGUify4H6HmarpAdRCzNENMnnmagvQ7aUN4TU3",
  "key8": "34qkGrAmWiHzrmFSTAd9jnRt4Xnc6x6SRyrgVFZYGYLN4a1hPeBNovrzAQBFrGBPNuRAHh9rGucbaoWEuJVyHLzw",
  "key9": "4chXjK3JB2r6KHSEQLtTkAi33Np9Z66zEsGhiN7V3SEdYpnmrZLDxxrqNoetfm1dUn67ugtZtLdnbB4EYrVzqsVg",
  "key10": "5RbyR1kTJmsaJ3xHqbmc61TNVH3TLdYB3FKUnZ4U3y149mtrdrpq9UryqHRobJGBEihjYWc2wFmFmnya88BXfXVb",
  "key11": "64PVacz7XKffnFsSBBuKJgTXetYFXU8pRZJ9BbNELFSYDsgwLwDUZVfNXwka59dUKim9BWC3MCndhSW1cAKAmXTG",
  "key12": "3Kzzu4kn8TqimobvcErbk3iRGVwjrkV8jKE5jLY7rBLtJTBn3Vr1mLni913DwpbthfVnK6i4toduReuVaHi4Nmo5",
  "key13": "4KYEPs68y8qtzREu8XU52EHU7SvsLn8sda8PHG6MgDtyUUdCNEeaPuPdJ6SHDsAvfxc9tD4Fmgovb844jZJkL4ti",
  "key14": "2PwuRgkfZMx8H5dxZS6atjydMzr4BSDvGdqecwCQprAKdcLRL7Jo1WtpsTPSx5bKHKtFe941srxZwxgGCQ6SLM1v",
  "key15": "3dZVvmiy4pCraxieifsNF372TL7RQ7MSifkFuxEdhyNkPmfAnKB9AA52qGguuqpHHns9ZiKDn6X1DKpqS3Uws8FG",
  "key16": "4ZZk5pRX42uaRfHVzhNjfmB15Keh7z1ALB5aqKD1jsNMWanS5LjoMtC5c9g5dv7DUKs8aYhtPNayZAYZrprfpoxb",
  "key17": "Px9ce8R3HmuMYfKu38KbLWxxcswXWoFuAZ2jUMq2jXAz4u2XcRgW27rF3SrcSbehPUDDkQ4WWEUqCkrs6tdvQo9",
  "key18": "2K86ZNm6RHRRa9wFQKF235gG2Z1eLq9LGTnhnEs8PoptqmMaSut9WC6abNgWgwWSP69NSdkcvbcXQpjvXFK8sQwy",
  "key19": "4UkTahqcffteK9apWzRrS1jQSMxQHLb8A1oYnwundjiN52Nsb2Z5nBTXah6CsANw2qPDbWLHYDsTKjqR5bbDwGDW",
  "key20": "56XoKTufBrjR1X3hcxehpWkB7Z2bf2bX9jQk2DngAiwoRHKbkVZb6PzenS9qpVbznRdkCmFbSCyU9RykRV3TKbT8",
  "key21": "2ndnxNQxzQkjc1hRNcU3c6Gy97qjxPVCDZQNCUeAMwEAoPXxx9HEfAvisTRsFwPxNcsKq7ckbbe4Qr3VP4T8y5n4",
  "key22": "CqcDdRQM2Y9Ds38YcCwfjYNAShLK9MmRm7q3Cy93Je3NTTNkdcUBsGToioQEvRbPcNCR2KrbsC1XkZiCQnH6bJY",
  "key23": "4Lfu64C42L2AbDZrPDaGZNJ5h4jQ72MX2dJpsdAXv64iW5oSqThQLxh9Ps4r6MUMFq3fLTvxEerj7VVD1HVASc5W",
  "key24": "3FRJ5WA6sqmVnKS7TxCbXXghCyBQjCuPDZ1DLxFuiH23nDQyjNSCaMkBosuG28MyBiCRJDrSoGaLgbpmGmi3Lskm",
  "key25": "3vacXX7SoM99bz4uNVXGmYADw5qJhiEHBzZcb6JH9ZjJzGMEqfRwj8oRRSt1cApRiJKquA95kPgQW2mUyZNtqBLR",
  "key26": "2HcsNumzLaARQwmpVgCkq62FMYSm4H71dJbvat1wXiRLWzqfruv5xYCepyJKcFNjqJ9nkFLBhshPhJdm4G1Kq9r1",
  "key27": "5ZtoMANQYjhYCowgsih6pvpE8jdnqH7a4u68vz5pjXENMonTFcHuCkqxEN8coGtYwmhnhGR2fZqsJTWMzz2PkMCc",
  "key28": "38T2MKnJ872YBJKhNSiKiYDUHnD98Xj2UcfC6gLT2wf9oCW8FsqENWpZk2AgAtaUxwBHEaBtACXHbGFAGPGn1N7W",
  "key29": "2V19XHRoHo8ajCLGhG1ShtQ9FgqwaVtgggSgvGc4voe8qiFiR8X59kziU9J3KvDK8BDFSUxYZ9dW1kFL53mahnB6",
  "key30": "2kauj8e82PiCuidv3sCQHvK92wdfKAoobFSaxRDKBWS18e2jAiRqo7ruT1rsgxCQ76mTpntLtR9dtbMrTCzbNmXV",
  "key31": "2Cpg3DXcJbMC4o4imddTfUw4HbZuDooFTB4fLe9cLDUuFEji9niG2sSq3LrT6rYDzjzjKFz3YfnakFcjnYiQbVfq",
  "key32": "5svnphdKZrjvCbNMv35bA4pGrw6TYaHV8B2hLwtrmoFtrLeYqxNpbSmuTe9rJCT3R9ADh77sQFZFR9uu4SCtnFWe",
  "key33": "2XgNB3ERXGhgq4LZt1RSW9iYcApqKa4QmFE6g8tK93fBHeSTzR6E49BmW1aphMpy7pMKEjrjc9qCVFHcMzj1BffT",
  "key34": "5TSDKrYpyAhqKcgWcpQANKLe2JTHzve2eaK2AtXYY94P3KjcuKXreujvkUiPtBrtRyuXi6XWc1GFjWSZCwT6zEhp",
  "key35": "4g2GVTVFbqFQQesuRkuy7Z55vy7S86NgWiRsi7LJx3X8tLivbjL8GJwyG7UQSKh846eY6U1DUUdJKZzwLCBNVJxZ",
  "key36": "5SgdTcX56zLj8X5SSkUa75GgsNfCmzEXBmU9wHMNRcKh1NpoKJVYq7PHt5iSV54cqhRRy55VYuzaN6wRKssgVAsp"
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
