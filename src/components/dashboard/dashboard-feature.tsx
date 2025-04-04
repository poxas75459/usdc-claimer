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
    "YmENPk1KUy9HmvPnEcPQXhA1kK8JhEXieCrVgxxnC8hT4hcfMiDMpvEsfXXrifQhgMAvdSJBwAeYFxyrj8doq79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEUMVBoya2ox2LfxiTeT6NYjYe1RbWgBTqixHjNTLMg1i3QuepFqvGGPjDDDFSuwzgYovsefNgm5qBptXpjfqh2",
  "key1": "4fGf2K2E2HPmkpg4NQpgMpY63Nwxve18tVfLesmr9ARpxzq6WW5MSyaG2qJqZ6q26wur67xFA1NYiGZfszPKbdP1",
  "key2": "5D9PhjB1dafoRgPzwyBNzTi6pcW35gqMJ2SDssLBTmPmgaTJSUbc9CjcPV4ay1c2rEjcpNADYgcSeXfuvoV2PH29",
  "key3": "4u58jt4Vz5TjorJyRJ8ziopTYmjQp1Lctdn5cJmiqnCJ6AijsgsHBtTFCcAbVKBNKuMKqd6S5LzQwzCGJEhyUsZk",
  "key4": "5DkXttxhRG5TL7gBzUkUfJ9rG3wSSoNiufT3vxhaBhrrgHF8rwLVmfAQ72PKHd2woxCNDQvpkmjAALVTtAjRTYMW",
  "key5": "5ubVZtw8KMFw6EmzxVVRC4ucwiRKYyaQC3vwhskj2aDPoCpntMny5q8MmuDGKPf2pLAcAPzFcNQqStGmHErGS3rQ",
  "key6": "5zYRyP4EBf2gkS5uMGv9XbXbkg4T32xUZRVgaa6iUaqivoZpsFpZMzgdggYAH7Fm7nYgfLE2p7f3raLJDyq7E9WD",
  "key7": "4wcYysEtGbiBZegyeqcWH65AuUQErrGzK8X1sGXenqcXv6jmV4u7DnqjfQDNu6nh369A9aH8e8ykkQS1JhnjSwzJ",
  "key8": "3QRP8bsgJwUvFi9GnyKt9ADVK7UwiLH2AmwRbS3Mz9FMwLnqpSeB2mWxYMwShMhTQdPZEDpsu7Uj9kMR5w369jCq",
  "key9": "4LGcTeuaqLmNk8yxsoahJhZUgXZpdF43rgL4S1iERrHUARwnZjKwuM4SvSJhbs7PQrZLskWBji2cmcFJ3kS1fZ6J",
  "key10": "ZUS9K7i1JJ3JTb8Y1SXKQH6aY6zSpKAtC7LFcivCTCMdFauVHQQfM7iMXKofj1jpyPuYH26kRjUQrE4cDXLMtNU",
  "key11": "2FMath1VexRr2MTo63oXF1VxDaVbuYYp53TsoGorAAXXapjMMoWcts2fM18EG4NPXN773iXdQxpAsCuxtjhrfMH4",
  "key12": "58Q78C4GSiYXv6gC2zceu7gh5qoou1CZTcT3zRRC3VkWFEusAC4scn8N2FVNW8hTMEgQxNuYDdMF7YiuJFQSC7WN",
  "key13": "cZ8z7XoZzNHdNiC19DZB5M3shSdXf1Uww6w6jY3guHoJ4qKbHkSiE4Le2ai8YTcGVqL6kGtrEP2ooqf2HkwD1Hg",
  "key14": "3QAdSttkXV8pRZvWSj5Uk3FUmULHEq6iRUoi7zfUfDSUSvFp3o64GMuTQ9DmwmqN8f2GPNeErAmSts95AnVAcFX5",
  "key15": "2NvF15hNUcLNqSNjXe2wHwEKjhVXqdSCVYSL4TzBsmNDRrW66uRnnSf43w2g87yq5RLCzCYWgcjSCRNnsc3imwQh",
  "key16": "5F1ebjqBvtfJ5cNe2fKX1YrahiTHMMnpCsUptVB4LJufqJXs9zJ3dH2N93KWR4XW9VQ3D4HqwAEFJ4rFP3eyKnCe",
  "key17": "5Dm6oR9osNVgvioncw2cB423E1DCejjaTWVKRwar385HMQH93CnmDBQrHTnm9ixGYFDRwAXYMLSHVCXSSqL2JsVU",
  "key18": "3jq3aJBQVmnN8ZbSW5cSeQd7tWDvsyi5ETQkvrivUdst26Yr7vx8K5MeMVw3xEnSTmBRHQZTqZU7vw2KXqQsFAxd",
  "key19": "332vaPLvjvoCK7wT3oTcqangXaFFgZM1UjsrGT2wz7rknLaG1CBB3igoToRP3pEJYUtcmjfXQyLQKvinnJoJKzx4",
  "key20": "dZrGiP1VGNS3VKtxRbASDHok3JwfMwo7ogdVbmeNwoPDtU9uUdbzWg53a6fM7VTNkoKxPU9oztEvopRKnEg1pqy",
  "key21": "5PyVRnjQvLma1X9udF47zDgwqiSL6MtmCSGazFnw2f8d2iizuRYvjfBUM8VU5Ew2Pj6goFBvhufmPwBBU15gMtWW",
  "key22": "32amPKHLixtXndocLkdhkaTK891yshUTdX8zrzRGBJnibPYs7BZDypJatrv8A3daw8fttwnZoLBYCh7rZhLayzzA",
  "key23": "4QacBYXG4zhFVgobjh9x2pwKaUR9dJ8FNkDQUs1xTN6c2s4Ntii7AmQTgUmPGkBjfBAxCpgAaYTCREArs41d39V9",
  "key24": "59uu42Hz3BsyrQcpbbf1gv2XTUutuF8yQyTbbWyAeP3aiogKh69XoETMJBMjrf6uKHXJAMdFUanW3ki4ancvMiZ6",
  "key25": "2hrw897eZeck6U1eyHGsdndZaGqan4T3nwXpRQQXb1Wn3ZE4FXPggR34gnV7JJE1XrkAygozJCudhaKiBEiZ4pm",
  "key26": "2ow48CA4UtyTZHajLgqHvwZgYUTKtMdxTiJCjjZhraw6DB2cYcRcy5xqxdQavFNwmg3vCBsBSvtSaWuKwRsxfgrF",
  "key27": "36yZY458z9bN94wuqX4Vmn7Kbn9Ne6Q6xZutPTLJaTEgP4gmDLZgApqx7SFW6ax1mmMiDTcHCodAYV5M2h59fzyu",
  "key28": "2aswnPEf9XMkdu8TRPnDuppJwUX1sEdnEnTudtfEssZrU94yEB4q1Q8k9kaEAwKXqizCVRb41CupmtJc3x4m6X1j",
  "key29": "2beHsU422Bj7aYZN4GaCzJc2SE4XoXAAgVPbWkJo4pDy8uBdV8jzxMq4x3wZA9uxzxcqp6i71pCprVzAcaZUAvi",
  "key30": "2DmB7Qz5CKcNgDkzr6gVnVCkUQYgKpRgBvmPReem5N1sj19cuXBUCQN459F2n2xPS7iXjkYhHEcPfAnF5kwq3X39",
  "key31": "hdc3xxHSym3b75NdqBgAT2kofqX4pwcKqgm6oxdssR4xKvBFHqdbcb3m6xLbB3wCsxAfCg2j18jck8JmpF1rHPJ",
  "key32": "4dsF6rjjUcEC3DGZHaGbVCZ2CzNLnfiiDMdgY9nW1kC8G4Nbi8iUJpYKgy381Gxm8LFVEYi515enyHyvtB3JU7q3",
  "key33": "61ikUrZLfhwdFrY4me4scq7MVsMVa2kn1KQ3YJmU6gDEprYxbzdYAasUxPGV38Shwp4njEcEmbFgewDZvPmHfGzQ",
  "key34": "2CEwB4kTc3WZtcnexSJEP8D1beKdKTDMFofobdwNwoowgtFNzfTEetkwhWK4NubNxPvg3LPyBeyS2zm8ESvsrs6y",
  "key35": "5Yyww9JF9srVtXXFD7FoErxXUZDyFRHhwf1v7ScSH9vbsLMTMAqXUKnewYsoA4mp4TND46MJoFfesr7pECrMQdw1",
  "key36": "4495GL2CUAq4zs8ac5f5cZjsRmz1pr5NAux6Zj3WQy1fEYoLdRP1Rsynotu1SSMrLpFydPfrzpd4AS3CLZGYvH9D",
  "key37": "2wNQ1ev1Q9eXFFWGYY5Z7PsgTgRuoDhvwBtyLZiAnR9aKtwbNJgnic61D7gaDNdFUhXrxuVTkuovNkdJbmzApikK",
  "key38": "3iuBV4sA83zgXAasbujsUNsAbjaJgCneBpJ2vTQytvhk2GAHPK5R8QUncDQ7JCghpUzHXTL8g418L5rnd6oj6khH",
  "key39": "45pfZ9Fjk2SXhX89tF1mukdpPLkBcQ7s3e56mAaP3uGNpFLheppiGTj3JTWHpKPvcLWvoYac4kwCPSQi99DjLvRU",
  "key40": "5xCUPj5GhQLahMXUC1hy3ZvMeS1TYyfDMsaT6BSUPKjPfS6Hb7jFmRumUyDwNL53zSeNe5ot6SpZ7xGAfnTPe8MF",
  "key41": "66MuMwkCiJ5kqUqcAn7tW1AkGW1QLLrzzKuefieKUfhwYUM8595WRicuESMmm6schbZdTjSjJu4ULseuw8vdxsiZ",
  "key42": "4vZtKbY1An3e9TYbym7BPkS1UuKFMQEQgbcYKu5jQ2vkV76Jgu8D8APdzQN2YuGX43zBDk1DiKA3JKhug8GGRaPT",
  "key43": "2Yu1CuwGKVrEcivUfVF1u7cDpZ1MqXs63Nq9mEs4ZKHaGBNRVCTYsN3Jhx33JaWKrRHGsvw8aj23gw3rA7VxC1X1",
  "key44": "5hmsKRiw4JcCgYG8bTAekUC1JotnXpopwGNMU9VQBseAoYyUpsuF8TDks9NTzX5Rz7bgTk3SfbEeUdbTsqPzFNz6",
  "key45": "5mF4EVoNy7CgbSogi3unWH6Mfho2Gr2kkrQq22ZptbsUb8fJnENNbNWJc91CL6R4Koz79YU94JKCY4aCW5CZKF67",
  "key46": "5schLF9BaxJ3JWZyMKk99JrKUdBoicMgqfAWtAjKxGMRtBAmpNBH6Z5hXbXzTxmEGJeqKmFxo3QQG1yeT6bwoqYu",
  "key47": "56wHJWGe266HDgUb6scSGAh6J7jhFTz64LWkWYZ3eEY9eYRh4GzgmqNLtM8yo3xWbgVTr1yQ4eFShSoqictmGvnW",
  "key48": "2RjS5uWXGmRyVKk8G4KwnuDDUYbDWC7QD9gsgvjAWxaLvR2BVW1kAN9MGovfLHgBifoJ2SNyhoWenqbuSJtVQEXu",
  "key49": "2caPyyr9FrMnnAB1r4jRpvqgav6cUYoVXv67sHDPNZtvGVRQjVGFvuRAoddsMBT7gX2Rr28Qbx5BNBgu9pkF1kzP"
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
