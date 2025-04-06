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
    "5bDLavX8Z5bbS76vdgSAU2V4LvhwXd5uZU2x4rDeUjyAcnyWVrAMHoGcHfPzPLT8iPBAeBpKLPZ2oxzKZFqeuhze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5GqVYcuKDfi8bF1K7TkcU9wuoBrak1WWyCtbZAQr87B2Mkd4FdkUujrwUFHX411Tnh4CSrU4RyoiPjs5xX8CuS",
  "key1": "3dis7CkU3xBesVQzsrSNuuGAcbuzHqDuM2caULaADtDzm1GmKFmKds9h8kyw35Wyunbz8edNYXvhfQmBmkeKcTbC",
  "key2": "5wR4N4yY9qx7MHCCAEWKZTBYemGkbnDf7JS41dV8mdk2aQGSBw1vm4XhSv2VpALSEp5BP7n11CPeHCg6Uh5XnAWw",
  "key3": "7kSG3c3RdeGtbvnCFDFHkZUWuQDsQvUCLt6k4aA7xgb3fPtmw2DqDTtNgyzuX9ZveRQtFDvbSQRk2RP6rF6wkNE",
  "key4": "DThEVoV4ms7gv5mwtCjvHaqyxrB4Csw7shFCkMiod57QYhmVCfa5RjAkWq5h7HeiYJ6CmBjqZ5ejkQt9hSrG8jr",
  "key5": "5ubTq3BpSp82yqaQRRV3uHh6yXbCZHkCiwBqbEvARdEBg1V2tnXdKFk3Tx57DHFbCk685pWwpUp3oPEF7poy2gxY",
  "key6": "2DcnNWjBDNgnRLLNdxzf251rbq273MXbkRP9LVLwdVxturg55NXw74c7epiPrchBYsSeWCL8jrwNFNax8wJYTs1d",
  "key7": "4zvEP2W1UDucmEtBC6VuBeQhdHBn7d5K3jnJu4sDWvjHzKWLgoDoGVzdDeaxEMpu29Ma3deKg5o1H5MLbc4VB32A",
  "key8": "2it9WVXhBdS6RNLFZVR5Uq2ZJ6B6T6CJhfuXj5xwSnN7iXfiWqTMb2Ee9cbycfRU9TL5HRiHao5WL5NTTsMhPQMU",
  "key9": "3h4qKNg1unyPjEQ7WjxNGm84JAMyN849xQ9ZM2rTCi5e1ZAgX7o8XtCRSVZnMMkntoVuHbgFZL3vtZnsfseZYj3f",
  "key10": "4cWVA3WQfyogukfQ22WK5zf3rg9Tz7CuePcLYKxh5q7Xn3ecH2fMTtgsYQPgSMPD7MnMvqnYpqYYGnvmQyQCwrwD",
  "key11": "43WMhJ96K5spSHY5QE6t7vYMTiXga21LgJbUz87XCku46BETQ75ZvjBf3Qokdr9E35FD1uB99qxrauELDACBeNLu",
  "key12": "4fLycvpQkLdLL94tEk9VDq4MKhp4gsKQyUjkDKGy2GHmN31Bxfi64jCin3QLY6xLy2XARKabDfBsHWBy66ctgdtV",
  "key13": "3z22zYx2hzmonGuUWx96ubUv4bbAaLfjqbx4EkbRU7ETWd3Tno9BGYEKCr1Mo8UAbBFZ5bNwYtpvPym7Ve19Y9T3",
  "key14": "ReZdGapXTDrBMeUnpogzjFSPZx7SqG9iFagZJYroxLUX61TK6RNKHGaMZbE1116LxUYzZcbFRheHsDiyRy7uSx3",
  "key15": "5yFYDbgdSbRhPxMfngb3aZeSTiUQS4AmmJpzLkzvM4214Mm69YcbZHceVd5v3WAgjAh45CK83GKmXLdyMpiJdEh9",
  "key16": "2iBikpi8i1oFqJ8oT5degpTQKwJxq7uhemjQAaAa5qkj8r4TC9Jt5FndBCZkFnGKzwjyn6bH83xJnModAGVbPbdY",
  "key17": "4sGADPtvEjvrPCLZhV93eBuWyfKeDF7sAopWwbwCqdaXgCZTWmVwGng8cyiRKup2AaLWGdD6MYXiJe4rLVbvHJCY",
  "key18": "ehtGw5dYk5zMmNKMVRRznHP68gCi6JsbixvK1p2N8YJtMfZotxq9daRr6R2SiGKkDxPU8HREwaFRzvfCqhT16Tp",
  "key19": "AH5knfZvUNBKoeBa2Ezetr7VAaN5at3d863DYunY7gZfuaYKx3ePYfcYTsGFDgzJyn5VTx5f7z3SCQyT6oBFtxs",
  "key20": "4y7q7ZZTKjJsXm4ZxrrHzKuc1R57yevW8qwjnLUb2tbU57GKL1bo66WscJNL3XBVVmocG5jvMCeV5NiUEHESfxGT",
  "key21": "1248hzdR6ahnoNXcEiZs7nuheAAuZPQNnashLyHbp7box2vZKcCWwnmpxqTguDQaZNYn7craKZFLnzu4gx4oVTFv",
  "key22": "43Ptc5wqpQGNiuTyp52d58dcE9nwq1sXu9q8BgoHyaPeAqDutrJiQvafgQoUWrDBiJwCFPRWzuiQfijscAXruQAC",
  "key23": "3oe7xib895WaA5Q6J8SESq6TbCuQBQyFjMN12of54NQ8bCMMmJYHK7nmN675BugSSHcpTZPr9MfZUt2GWy5qSZRY",
  "key24": "56ZbQ5TLVdJgTWSHvP6HkwcupH85gKroDYvpy2BsgFhEXPZMupFMXRAYxTC9E4i3ZsZiEMikr5ftfRqtnfW37WxH",
  "key25": "5obuA4YRSYm2F2JkK69wEuiYeqcb6yrmcfAgKCZjHrpL3APMzTKuiEnprjGr6PdkxBjFy4uA2CntJr2uoXrdVL1a",
  "key26": "43349DtAcB8F2oBvGMartMj2N1eVqPEC2gTLq2KRUdnfme3PWWzDaQ7ZH9FXkP8PGzyLSQdnxAneVxSoUWefs2Q8",
  "key27": "5eD5g1FqjPfj7wRXsiZpCwJNA3vfH8kDcQtFFLE3wieBbRKwB8pnZRYCyKa39nGqDEBRj7BcXm4Kn1MqetvzN7Nj",
  "key28": "5PSMaykbBykFnzzUJdquiRU5gBSema38oPyLn7e59ofYacamph1sHwW2e7qg3u9KKR5g4fXbaGNgz3zt4Lb1cG5b",
  "key29": "5eRcsBQnwBT91oLmqeEt3T4CtZVzm2kjZ7nEHsHjCLX8nvxUXHVFxNRA2pir7gS5X14t26aUKotFKtgwiSbiTRMK",
  "key30": "4yg5TEaUQvKYZ4ETTEGTyifrrvoqG7JuTmAk4Fja3Ds9waiGsQcXgajCzgcyN5a8iV3AdtMTr8DERkWZnHA7mPMr",
  "key31": "cC8JBPhaXzLjwh49r2JNAZUuCdF7TLjhe6oN2mTkSpTLEAvLJFL7ah3ATnCK517mkb5FFnzcfQJ7vW6HYe55FXU",
  "key32": "36WEPEXSPSwb6obcX3urxkzevHEpmwtfppY6t9Bje1wMBBAGsvFxF293f4AtTcqAz61BfuwLKTFxZ6NJqxbGiwzP",
  "key33": "4iox1S3wSUAAQmhmqXB54mgu9PP7CZiPcs5oQESUUV4gW43tGkeaTzGm5xdaTCqHyFJVAcEAfTPK6KF6y9CCgNVx",
  "key34": "5n3e7mypRTwRdNDw9wP7shLhtAcwf36xDEzin5DjvKG3qjBxuXBcvLWQEPjLwKjfY8x1HS5nni5M37DbXKv8QjeV",
  "key35": "3X8TJfuP6DffdGBk91eqkC3qfhPzNGYqvFGFEEsuZdBKr3YkPiDHDUgd4v7fp66jcvZgUqVj8PoBjs2KAZ9xyksP",
  "key36": "5edMY2WxVvWwGpf9GgnmmGR6gSp7HDuxNRbr8LMbBdhBwmppmVbTM87Tap1fhm5XhBeceoXqUXPwTg8tmKmvjHDU",
  "key37": "vDJPsZqeyjP92xMv3BGoLuydRUbgD2xnH2H9N3kZx21r8rKW4Lccje7U5DBXEXamG6rBHiJbAZTG9hwSYjWFP5Q"
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
