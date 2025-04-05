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
    "5hdHHT9zTNS61sPhTdT6Wagxg54hZ5tqWSzkin4TEHXwZtrgLoNi8PurRmnRsWkt4D9uBEWG1izjxPcjerTcPEyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7khhZDZNBZki3YskPuSPK2qCL9Y9zfX7AYZFEQWUu6mwh83wqRrymEPRxFx5qAQPL5DWyi8YsgGGM8Nv311cFx",
  "key1": "4BmrzANyZpucAnLZPNMzkEMMkhjPNjPxRwoTkiVmtidPUH8xLaZWtFapMWM9uCHvweRZGN66ALeBM1EHKTPM98Sn",
  "key2": "3Z2gAwPi9jfdobjZ6MfzE4QxQ9dUw21hfFLbDwj9SwgrBVkhkmwVViv9d1YhgovR1nsndt5bCeh8UHjhdmHQNgAe",
  "key3": "5E6K26QzPPEdZFKYCrSoVKzwcHF5kSu5xKArEfqbs5A9um1AhMgrtm2EZ93xGkqRUxhkcSjQFbPAFPzAmkBdyVvM",
  "key4": "48e2o2nr2MTRu7acCzqBZ7jEEQtxBx63J8PwXHanMoFDsQ879PUsGVAfu4x7XQD7zPCpuyMFsrCuMakJCKktiCHg",
  "key5": "2V73CwbbTzedQA8eB3xTpJvee9SYGT6r4zG3bFReWaHsns9BQ1bRCRS2SxM5MVEAB955ANcBbCoYSiATWYKZHDV8",
  "key6": "2MSudTTNzkNvjjXib9Ba8HNaycZuEH5ZiBvpFvz8idoazbY29MDa6XhCWioKfHt4EmJtWTWqAQh8SAjx6cJtAxJZ",
  "key7": "46cKAqrMQa4QC2eweHfDgdCCza5k9FUNbv9kYnUiYh5gzxDUaCe7UJWfCrFBmb5Lx4D36i6KEQZyX3wDPSHWU3y5",
  "key8": "4jqNvxCHo58fTZGRdXKKfjgFxACXoGuDSjR8vRdP2kbPb1VrHUQ7t6e7Q6YTSvZbX7H7pQpvzNVd7ChQYr91S5xX",
  "key9": "4VGfFafbpNzsqVs3viv3zr1WRxMWwTrzpBmydR5FywqWEtb1EnFoWyRgRs1XZJpXQMDEGAznzhp1dVrQJcEMxyhy",
  "key10": "2FKfKbPwLt2MwidmkYDaF3A3EM97kKG71XPrxrhw1H9VgPR6JLHt8oe2ae4gDinfGggU47DHvvztyfZZk1azwnaA",
  "key11": "5BXze8za1sGHZwZt2ENrB3QPTH7Xvn1diKDm5XkMzETfbVutjbCoXQiSMM7EVzJJA8SqWuL2JHk1iMNjBP4rLMAs",
  "key12": "5xqr8DHH1zNASJxH4WLcpgdUTwuqwpWbAoT7VEvtyC5AQejo6z8GDy2vXQY9FKb2ULNtqqXGJHbxF7B68hhuVFg8",
  "key13": "4Q1RCeJFruv7h8ixcheMQjGzP91rrd6qfnk38Kq7P1ttTxgukNas5EeYgbQrtuYFvnh2BCmtCZied7uok1J9JaKU",
  "key14": "48nUAJc4naTw5gXrXDw7FTqSdjCKB8X7TfeLNK3hsEY9aPsijC2Lrq65GxLwf8zE9eSbDLAmCeprMrttZ2tjHARV",
  "key15": "5cHbqvpH6kb2p2gyyABnhqfZUEt4NnMzGtidnrape1qq1HGLMqSdApC2McvxHEEmMkWhPpsGgtuQa6yKVAgaUayR",
  "key16": "QJnGfKc9dJngftxW7PVQXwMQAgGREZ1k9egZEQeBaGcgnRS9ir2ogwjscVanAr4TStFwms42Vk7tTbCB9Gs9e9b",
  "key17": "3TiZufDqFzimV8jAz9pHxDVADYX9mVvW4zRXXtioerADVDMa6rsM5F3n1G7QJCQe7YGH153f4FCzxq4TarQgr3R1",
  "key18": "3GqPPMS2DvRRpUkxDU67rEr7KmofnC7wBQqrLSgLjqtqfcFUv17eZzWLASZ1g8Kc181C5mmigrCuf5EPk7PAiJq3",
  "key19": "4eDHPuxg5UfnGEuH4hUbmLGWPqv3jLFJm4h1Kz5CoK6XXnNe151XyPLvEWuDB2B9GXJmkoc2ryaBkQRgvVqyENrz",
  "key20": "3ecKgqzjx5TwAY56gT2YoDbNct4omS5bmf7NmrNDuP55ypN4XbvbvGZx3xgrjjXpiD1an6McUkC4dRABeU74KMGT",
  "key21": "5aNT6o4ebUq2HkYHnrHodexA5oqRz5puPpPXA7EjizwT7Y2phmThyvqPDKkybYRQkW5w6P9YCLAWsaZwJvRF3eQL",
  "key22": "NcJcFnpLNEEoB8kT2qWn8zRdzzm5coar8XLVYJxEtoWKkHpq8QWaWBMW4G5uKAsfkAU2ikSur9AAXUTCy8Rt8SY",
  "key23": "uMqTLqdhT3qEvfLsg6YqzPVnW9rFSrQ5uh1SFYnUbqNdCSGvGoPRqpFxUPZfsvAAgRu9R8gPFfa2Tmq2NjXWcj2",
  "key24": "5KKAXTnd7nMh36WWVzaeGnUaDoXZyBpgGkREuUVYpvRAj9hpo226t8hBMuL55PqxZ8pSowGfnEVgiAJconBtA2Nn",
  "key25": "5Y4P7Sr9ZNqR2M966qMpA2J7rWiMJR9Q2ZTBaWgSnRdBMuLaPr5BnTdbjgbdFUmoQ8fddsuxRS8RAFEWSURBqhpt",
  "key26": "5XL9vMx1ye65iCk7HKMmzkkXUmesarLx6dP8uwyHV2chvuu8kUAyjzswVDqj7vkb1ogsz7t1SgHvWNMUYNAGprcV",
  "key27": "4fnMwmVAtEDbasoRBhUZozthqxPHCGVekRq3ekAVyyYNN5mgMLWJ6BA899YHByTmzuPuS1FBnA95ueYbmpqR54Mg",
  "key28": "4pHvhWPxEjxMAxZeC8cDz6cfX44Lfx8i8gGL5VdCTTTUMWxzoji7sdF7BBo7y4vHFMLa89zM1KMVopRQsKTNfKq7",
  "key29": "3PgLYLUuFFvgX2W4WHjkaWXEYJxfnBUhg5VRiMAgVvAMunpNH6PmRAtipfNQCi88qrrYFJHcNQfZUfp937FebwJp",
  "key30": "4CJCChCcYpmG78GC6Et91JV6FQYvrtG2QHRek6AJLLSvVhanEpGzwJZWYN5ydSkyg9sZamwhZ6qoCViKoKosHtmq",
  "key31": "e3Gfje7tQZXnfgPMeEVpFheey88MCVkViTVwscdouRVveaC6yTSapXYB26jLR3LzkGBimS5HnXKiqdPfK6Guo9a",
  "key32": "4UhEbJAboC1hBweLJiFgVr2MBCzhgf5t9mVChe2H1eGdgpa2QCqJ98F6FSdon6tQHcWPDL1jcW9BPyp9Eej9R3Ms",
  "key33": "c5j4WW7muF8mkARTcj5L95VDLcSx2uV87VD8h6QfXRh1qVYak4PL1b1pELWQfWKWkrnFHpVdZZYiKnyvQ3fNTyF",
  "key34": "5iF1dW9oitFYRhRov984h3DWrsavEQpbbg2N7DX3CwPp7dY2m5MWLQ38o8jDjN7y8ANZ6yTTK3LDF5S1wvXJsmzZ",
  "key35": "3w1gLBJqhbtFVjBtFBpD1UYg6bxD3ce1mfE3ci9Bjzw1v9BFsfYhm33wVQR6gRzUUDUDcb9MJskFBjdtcfefeX2E",
  "key36": "zi4FYTkq4oFEiFVnjeiGfXcqyMWeUdSV6v5ybLsuZJPuj251Am3rQrm9TDTEfvykMMu4w3JXsZ9bGXytamoAiPt",
  "key37": "MCKK57JgXnbWGi8crcfTPXWf8MHyELaKqhwEsxLB53dxcqTt2sZEJPxxutjtvVuc7c54r8H5JvPuHngUn5P644T",
  "key38": "24L4y9rPYQUXTKfyFedysZ8VDXtrsxsADffTxN9oZW3vAr3doDhq1oYXWUzyvG8ZUf5YsakaghGjS63wCocgNsYN"
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
