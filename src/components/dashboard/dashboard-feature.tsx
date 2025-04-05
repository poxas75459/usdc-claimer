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
    "28VeqrPKVrxrHd4sPLcNPjQ6NaDf89rZ14TGSmy8Af5E3p1t8EvxapBG3L5z7TfoxEf1HPUJThTJgA9NHXyjRrHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M26fx264GmMMBxoLug3bmShmbvzTn6M1yhENPcsCkwCYXDe82FYMKvE1BipjWMQ5tfMfr7J1R4kfUbW8JCCMRok",
  "key1": "512TFH3iCTkjQqQMbeBYhHtFHkV9puR9X2ukoKaSDgoGYZq78b3FGPESh1YBihu4ehVL9o5r5xWrfwyUnb2AkhRa",
  "key2": "Lt3VJ93JnNX64Se1KwHToozTGwc9W8N4WLhRJv5v1jWBbEQm7KAN2za7AJkjrXUrJiBtPjGijmDFSPdarqxKD5K",
  "key3": "3sFLFSY5ZkLdsUXJxPdnuXZc2QkCcG4MYk1UHG3gEcsUnZGvaparWRpQQjtbYCk2kNnw9AvwGomytgwgdoLcPGCP",
  "key4": "QzUBkDbQEk7uEWoN29pMt5i5YpTVkvHbQDstDaSvasGRuMXYnPkVFg6VGFaoCJdirx11SiWFKQfVDq4hKRecooH",
  "key5": "2m7oXRjPx13Fh7qqvh4NCoZ44JTqXX4zoySmiikpbUivjrQyiNpG3iJD9r3VLAGxMQT3zPuVQmEEA9zUZa6t8j4H",
  "key6": "2nxaXmt1zHsKMYhtLKr7zSHjn1vbNY1Khhdjtq1Zwe84Ykfe2DgU1E8HVnX4ZV54zuTyuHzPD1HgtEFnGjB8DkqM",
  "key7": "5huY6aHyyC5avdqX4HTB3zS283y1RNMMKMBoDWNESDLFWzH7wiaajGfYaBYMFP3fcsYtEHNW7ZNjPf5VnCoxmUop",
  "key8": "3tR8WZcdZFL1Q1pu5oAYc5RLwANZQbh6TbGdQQ8drPWucvqEj4MUs86XGuNZcNa4RWkm5XhXT62N85VGapiXQKVy",
  "key9": "4zEQGe25LFxdDnK54rxFNptoUoYTrJ5n8YoBDtiheWe6qktXjBzrD15ZU1gNYa2GYiwRG9ps6ATuNW6ENVPzsT8",
  "key10": "2pLxQCPwT1hMDpPKzZEYBYuGmMjU4yTk2G1vMVEHMXft5VPKwoFGnfyK7vMiqUc5Ef6KWtPjBVEbdDaEJFxpZaJq",
  "key11": "dmRk75rMvRPLBRCvT9uBAw2GhVmw38kkRkS6xZSB51jPp8r77SAshKpsW3so16WZypn1h8RDxD71WjtkjJxustA",
  "key12": "3iws8WS89ZS92AXkLhBHhKQPic52mrs6opiKbdMCZFDP8i9Pv5iG6XcUXqeRCPCEA9wkHtaddZmYDcyc3GByGNKb",
  "key13": "4cxpyFZ4NTQ1RTF23tre5K6qABWs8Vz9UoUPevFsiJpmDTwivDHWBVeZWMebdNXC7kq5sgxU9JJR3dtS5XYc8xFa",
  "key14": "5JCxsmw7EhBp674vTPjN4CZwqaEJz6wkp1xe1qqSohkn1QYqerb2Tz7LdPS99M9i9nHGLCfR5TX68tY1ow6vrUXf",
  "key15": "1Tv6JwnMXiKLYR27K2sRjrJvHG3tT3ibXT6uFCFp53dvrUFfhiZd1HAwWZJQyMG9wxDex847yc9vWdb6oBXpJ8D",
  "key16": "3GSuwNLCMKtWMGdqFxkUnfxWdDqEhqhgq3Rbi9Z2VxZmVsJZnmfiDhLqaABirGxWYxUnRkwYBEk8cURj8zD3mDvQ",
  "key17": "3C9nxNsudELdLjbMebfBGre2NgsNZpoLPsoWPSc58shfhpijL6fSnGCNoJau2qiXd2aCn94reoPtum5cygyuCPPp",
  "key18": "3GWV3qJiBQNCHuoKG41LiEVjShcc98yxC3p7HdfZanwGRKSTPMiCMBJNg4ys5ZmNTUGNePSYu3yT8rNeEX3PwZ4",
  "key19": "sFJk2HDPdzdoea1gHCRBaddZ8jsz2Db1oBZGbemNyNFV7zeZfJB3PY13MLZqNhQkXqWNCZCNznJyRcKpsDYKDJ8",
  "key20": "3sqjCW7ADFHmV5pHWUPCcsJzZ1cvFVtSHKobyps5wTNnVkPZMER3o2CYDDXVokevQby3M2LHeMhFjF26qSR8H5a1",
  "key21": "5ut8RuVFge862TA8fjHh362ZRqpypmhejQwsrxEZ7hHVSF1JVCje8RUbff7Bc1fwJHL3tNaB23FeN2PcKA2RTy4o",
  "key22": "5G1WZwwDDqtyFnhXHZSYcScrKBN4VhxSmT53iV8sR7w6gfXcLfzyFS6LgNyNWg6yKB3D4D6DXXAHo1isaJv6Vtc5",
  "key23": "4DTNy3nHtzkRs5pH3dbw3rwkBR3FKVJZxBS9C2t9KTc8QCZQdwixvSxbmYzciyepBbv1GVzAzwXjsJ77T7DheQkA",
  "key24": "2vbDx2a31VyfbAQdAGt6tggHhURKEgrAvgF7T1eitCmNVnqkfZe6j3iMsVgRDoUuM7qnLr977GJN6UAzoQwStUMm",
  "key25": "4nRBXYqgQ5xHSWhjUniaBdxQPJNCBJqi1eQtL1rDR8iexgoejjLdfpJsTXATQea9uYZn9QargsFHLU7K2DbdfDrr",
  "key26": "2vqiuA2bNGTEGNgSzBxK9zPPVhS5XVZejU4ZYcxsptobtcVCYfHMyBDa5aPTKjQBYtWL1gyVwdBnj1eGKEnCsP6Q",
  "key27": "46vKG4tJK5z3VVnHt85YdGrCUxbqVgwmFPrpxKHqUZzE3Ah5YrgjVWGV7wRoZMA7ZtSg11sBV1A31S7Xa5DwRydM",
  "key28": "QXYWDLLFeB6cGvVXCPCqvac9YZ5vktnUrH1GpvdM6eh9GNsRZkjYhaD4Fej7Co36XNENgnyJnT9koDrT5TewtHU",
  "key29": "2Ert9DcTPB3mA7mWA6kdR7feF2YCDEKBXkG1QQ9PWQoxLLFH7spA4DcxhWJ9RfRe67W3XPeYdPExU2mvcXcSuP3t"
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
