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
    "32iAkmTuDHeEyToWyGx4QyGiWV5THeRdhD2Tso3cHDBGacTy9gaA4J24SbEU13Uk4jspw1zZwaLB8tmrkAisTcrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5im553pnAcSCEKUQ9XPifAgpw3Zk59LacWnTBi1KXuX7bwSozzHrJ6eXvVPTWEQRYuAKJnWLRVnvLJ5raKZ7rPpA",
  "key1": "43vyKARBhPegbgnYsKRxuTpnuEDaAg8VWXAkTYkc3WMwLETSnfPzQAMC3tub42NixgkzCrMTPkEsoRyYVVBvGyg9",
  "key2": "3qfYdKshhfb6xYo2yjmsc9AVgJNZ4L3n6ob5zHEBSBjTbsHaNQGc3M7f52feUBJWN7HKRtxsPMzfQxpdaeAzdhQW",
  "key3": "4er6y47NaBThBt8Gc8KR1b9N7t1QhAC5Zo5irQ1AbLeEzaQct5vSQsYYsBu4EYEmwToQdYy53G62GfTj19fWH4DS",
  "key4": "5D1RmCdPJShTTHf8DaUSfgPBXr2RUDyCykSh5FMeyXuzX9v8mxY7zaS3Yd74d7UNg7cn6nkV21v8nvkP4LQxMT3S",
  "key5": "5bJGBg21wPLLRKpnY812wadVXQUiC2uSvMCQRW2FPrpw3M66ZoqLW4YtfgFTV1ntmWjjcKKTVtxVYfSnX8DyVuVv",
  "key6": "48jDdTySnErVj8wpM284R1m89ZMD8chQaqUNfi3324qSmCWX2VWJBGVnuANYjFaDhXkeyR6TRJCGxkXqPyVR1NNB",
  "key7": "2tkZ9rKdSWhYscWpBFdHG123H61RzPUC4mmeTCzXquUds8et1xTH8HvFwAw9VHq11fbRrFwYGABga7nHJqGRvdXJ",
  "key8": "uEoS5SX6S2PL4djFw32z9Fot7ca6tAUdo89B55NdqZpMcV1GZngtofZGVWm8ntkJZtiwyxLgf92TcYjXFNb3m4L",
  "key9": "3inUyHWSUNsaxazLYWGgTbvw3VrBEKwQ53MCqcfRjwXW25tMBJpKWNvp4SQV3araeUAzrGpS3Do3LsnkWsEpFanh",
  "key10": "34cA7Akuskk5XFHMWVYnm3XNjq1Rg9rUEdLyPMGmZJrw1qnHbu7DB2syi2YyDrvRY9nZmtnDUejPh24Jk9FXY4yf",
  "key11": "5XdJLktGMQyMo2K6XncyztV1p9bgaMvtjwwTd34nLx4HWs6QV22J2vreZBNifpPfre9iMUSSCCRBaocbMGP28QSr",
  "key12": "2QErQxooxTEhwQ2JsVwfn75ZSxzU275n1A1ZzcGy7uxT9UqhbqDkQjMfMNxk2GmcpbsnUFJ42XPk2zFmnxWyw4oe",
  "key13": "64qryEfCaLAVFLHWtKmcYjpbnzayX22YdMNtGb2Xvfw3PeTaA3DM1tdcz4Vs67izTobqUQvT1DY5Y9sHPhDM5XEZ",
  "key14": "2Afp54MskxKQyFiDqdHD1MbKLSHcYFf1LofKXMjoTzaFgnj4Eqb6ko2EPritEZZnhhYLuRjH3EcsSb1tKxM7pUEd",
  "key15": "2ByqX4rSoL8z5PBMirg24nGbNPDSxVM3dUUQpHAF5SzyAmtQRqgLpKXvE2PrqwwnnV1p7cQm2RYEgBUqej6gTH7Q",
  "key16": "3nbYe57u7uoCd13HnD3dNuzAT1oayHEgXzhTAKzK6op6TmAdSt5Csfc79LUNJxThCVHssAZuFrTdw9FsiqzcZEMR",
  "key17": "2mQggbRKkBdpjjtaUWBBTq7RrvKJezoWzRoKuJGYhUCSq8rLcUW6QAnpnABTLB2Evz5Pzgf3Wso97xUg7gB9nXY8",
  "key18": "3xx4KzV8Ho2im2tYhVhhy1pvommtmpjxCaPTjoWPgMw894RC4c4ShU8vUQJrgp5XFRBTumF1bQV4YQb9GjDufhTS",
  "key19": "57beZUmoWbkXP8n73ZzJFqBD7fQ27d9SfafnaG81zRHqgDbgaskDz1NYFcQchSrZJyfb3Fs6ikZSRvZT8u6XbwCa",
  "key20": "ickxCDh2csKVzQGj9pwbk8BakzLXa21xL1CJMmhxiZXN2K1A1bp4ifTtdSZqKVmeiQPiL68G1G38eeYZweg8aB7",
  "key21": "3EzbPuq862aTekZv3URxcoP1r7VH4pmQXon6vywgv5YP5vW3gfjkzZgfjqWqhdRx2S35Pyr5kkWXqRZjhEdoSnpG",
  "key22": "neXRpngGVxPheqXRQFejd9FDj2wyYrJZXAbseHwLw3EAcwcTCssdkaCjwKqy5RpZYHLknPSddPKSSU9sX9ho3Qg",
  "key23": "4wNaE4qzBG6Nt8cKkaggzmyqdLYCQXRnsGSbLrwJ6kmBB7GvaUJNv5JapkyCTRXxYnT71va2y7yVhLX7SqGrTBRh",
  "key24": "56A6VCwpcuYDq7s8DHcpkhDXMGAwwRyuPR2KrHCGFqrxBFQNBGx6KQQsGb26i4nbfHz2vbVMMqX6DEKy4VmgsKvi",
  "key25": "57twRPtKp87KfpDXs4okNdZenKTEGivWzBgiyv2WVDzkbZS75894DQrKBHGJXwnvDMKt6zCtrK64UsdnCAADJXVy",
  "key26": "LGokSMgzTyWpzxQfCgdLKVpukLU92V4X6hM1YD8MM7fT2BgzBhVv9Sw7HqUZ1MyyzWeNhp31uEusoPhEe7kEHs8",
  "key27": "51iRDcfZSkC6oP1PPtW28paKFpaKWZjSRGt1utKdMU9iPEVvW32bKtZYe3aG37L2ZxUJ6E9tj66ewW7inJCWyeG5",
  "key28": "2r3ptDYamUMm3NJTwRmKKDkmGhsPoXb5UngmBUJzFQqUC7eLkN3HrM5MTJSLmge6zJKnSwPDq4Y854WVSESYQyYF",
  "key29": "LkywY1TZqLuMSnHm7Sn9ysyreXgyKXTBmjpiB2q9sNhhjaHNCr43j31bCTZkxoZUFdVU6xdtkPzaRjchSuRXJRd",
  "key30": "415ViG4T37PMb2LZ44nPJ6SytiuTn6NicKJN2MLMoVUWM6jqBLV8jkhEeNUJV2u5RyMWbHJzzEQFiHUaLvMMdLoy",
  "key31": "4QAzWJWMDtTodX6wcXC2AYUhDLJF3whP8rbJ9aEa7UZkQfMy6wsuX4uaq9Pf7zJMnpXBELdYxLoRKE86aQo798uu",
  "key32": "3HdGgXVbc1jD8fv8Vfo2rp8uEXNLtFXzRMpEkpoEZ6eM1U7g41gWWUNTzeQMD2UND5NTJAJSiSfcq29PA8kgd4Dw",
  "key33": "WGb6wmxgPFsfPniuWKiuzmXEL3by8qNWWmGkdZPuK2EKWfbWKq6GFLfyy1PDpxbq3kcoyF2mtKbkAniLFgSzbVg",
  "key34": "44erCRo3w2F7YhpX9GLWo3QwdvHptCX9DnggXSKrqLJucDSk2ihiqQTuppZYWxTg8D1MDfMwVeWZgWFFZgA82eTj",
  "key35": "3Af38yJ1bBmTXJ75EtFPxZrj3fvXSZnZyJxgaVYSpmpawU2kzFRK2sjchwYq2QV9gCNbxAEvup8P96Zafxncdw2K",
  "key36": "62NQXJto6tZoZU7GrX7ycyqNXJSm66nmg1JWoba3tt9eo1CFsnrGyJxWibgkJ1qCWXNQgoWQ7Ak9HQmfFh9s9sHA",
  "key37": "3p82W1vPfxGF2UtKhtRhXNmjJp31nUyGAL4oj2wyX3zPNu8tHyeEdPkFTRHvwizDjnUgm45ri7w3aF8htpkUoSwu",
  "key38": "54KFjGP6kjo2nbfGwyx9i4p1wwwnasrTHoy6jEwANB9nkrSpxrrkpqYq2sbSC7sk4eMtpXsEC3wXAit2dA4oyap4",
  "key39": "icX59H8ndaJe35cnEYEryuVbZDzRFX6k3VVavvNyQpBrBuRLGaQH3R4eZ31xvoVjdBqaj7TxgAb3RpuWYk3zWDy"
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
