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
    "5fkbPqsuRnSLCqr1dk3gxkoW3LWeoDCB8sMtxqYGZKjKDEZa7oP2DMqWfvdc1TkP1rJQWyXZBfxg4tK51hefzqib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8QJrTBxGFBqk5BtJZuTKjcuewZc5jYpRDbkjk4q7RApTgYPV8wP2zrbWfproqa8YrTUCx8Ri7bcYRFmnZ8XTen",
  "key1": "53oeaE6m27CqSkSkiNo2a1aJoJpu9XdBm2CdBkFXq6wNDRcMejxM2Si1Ry9yMRsckToQokh3CJ9fAm1CNqDqChR",
  "key2": "pAPttyLJHAw6haY9bXmzqcCmGLp9zA1eabaBhLuPLHqtNY6v9j9B153LS9HRJ4JGqn3nA3voYghDS8kVfRjrgvC",
  "key3": "23oVCWd1cXMYAp5Ty4DeVEHYmKLKUs2mm4SXTRL3HKrKX6FfPiie5Ab8Cd5qo1Vk3Qk8AEsU9n3EXXyq7BH2zWkn",
  "key4": "24Q5Z1VkJ4kEaHRzc9KZeqbgczLvg3KWa4v675nx4haSPev2NoG57TYbHqdzoLzQKEWKUh5eQLLtTjoaLnvmKt79",
  "key5": "4sCG95hzKUDHHMHzSkXj67QWg6b4crvZJ931teT8dEcQezqFM8BerGzxKKG2eLV7C3j9ajaJB79DfJC8MPYFHVKf",
  "key6": "3ihExXjXJe7NFX3Ynjk1FByKfuQf6Eic9cyWLAtmsgUuaLv8FRAME3zNBrjeBUbDPJmh8rHNrSg8T5wpmDZfp6XN",
  "key7": "4XAREajzvqactrTjHd4k7JuwPbmrXtGzQLh8kKWA4sX3CAXDMKAkFybrh6rA4H7CJe8raSsnWmXtWCcPfJRJKJR1",
  "key8": "2DcvQ7xMFV6yRgKmk1chU24qwzhWD39Posz1b1tnQpz5R4JUDFU4H6xwatyDtjPGTZYrtFFhpnH1mQg5dVUX4CT3",
  "key9": "5awehqxFZ4rV3RL1jVwwVi8XfVBxUoTFdEhSgLADe5fsgWgbC7TPk3nRCuNw47sAkHhiTdNw8ZqEpfCoDAM78U6m",
  "key10": "GtecnG5qm4C622bv5dS6ewRsVvQ9eqZKkmFigzxCa2WTRZaPZoG8kS61x6F3mAMsZQ2K5n6ySKpJnjGjehkEUPF",
  "key11": "2St44KRk1c3r54jMn1GASvvDXs9jxH1EfwCZLrZdLpsTrYFgBVz5mJfW1P1EK7VcXahj4oKWw73jxTzET6cemrhC",
  "key12": "TnbYTPj9VMT5ktwDCLCwbpPhPnsS723g1K6CP9UtTzoKKbQ7Gp9wF752YH15Wm8VUqoVtzdMv9D3W7wP5Qxg5bE",
  "key13": "Sh6bjktQdyVw12iqr8y9vj1rYvtvg9cNYjHjMF6FHhryKqUtydwV4XrGMaKYxo76zMcsUgiy51Jf1mVvEHsqTZE",
  "key14": "VyMZjXrAfdrGd7xa74KHQFVpfxvB7a4SeHFAUchwnJys8qPyfknymgXbqSL7dVGVhknf25ABEHDGCH6RVHzmtR5",
  "key15": "DkfMya6rYWgZPR3KqmFeKKJzRDzrZcWUoCSnt78axgFFuQwGLdNksiaBsgKeZzbS9jQ64UT2QcoLq8vAi52Mpx5",
  "key16": "2YJDrzVoucjVcY9xQW2SwMgdaKbrbVVxKJESuksAeQBBVXH6igypHQSjkzv9d2HNyg21iQCexz6eHddtNPe7hMGV",
  "key17": "4BSTh3VKBs4dzYHbZMN7PxqMDTVUXCaBAaSqE8atbyYfsZw1U5GFAdoB619aSxgyce9rnwdRUNAzUz3obH4AdwHk",
  "key18": "4ssXvgjPbVcqLcKjfTBVFsKpstNbueyXt7EKZ8u9zf6ppPPLARfx9GFQqpCFu8ZiLv6ZZQ7A21VEwifXarCRq1S4",
  "key19": "59H9jgyK68G2xx3umbGgp72bwo3n7dSAFqgVWPpe28qfaMUcg82kz11LkKjvs2Y1m5YkBbij6ZJMC4J2QCjWJbrP",
  "key20": "4sPbmSvCcFmUNbkz3w1nixn5PKR5kx1s9jcv6EUw2JcMe7sdgrn6xtQi8qoFEhxWrghYVGzDBgwYhc75cXeeZYb2",
  "key21": "2nH59qFYNrkZpAcjJyJEzJ53oFM7cZmVgFg5Z6T8YF2SoCjH3d2McvkPmBzmxLNKx7QW5CnpCZ1aijXxNvjC4Nva",
  "key22": "5U5mY3Crzx6wthvuqpabEF2L67jneAibahdzsaaQskfwnEhjgvivJ1rdiAwBSvrkX85cmzT6Yq3Nq4UCnC5Bd76k",
  "key23": "5Kdm8gndyzrmLh6vpuxWotJKLmDk9dv4WeYncX34EaEaLgwEZdsZ562fms7uWFTBoGNRdjsFYj4ejWRfC836Biwt",
  "key24": "5QwRRQ5NCfQsvcnCGfdz5uMmu9gw5GXmNK5E8JAt1Uk89CQg7BCwKn33KaLY7iW7Hmbc2avVdWJzeAacnG4HBU5D",
  "key25": "5KnHSzkNxCBX7uGDXtQo84iSvmF7nny9e8JcHKvEBQyLXVdLdMw2mAXJXVxQNDrBYcSjNsXmkyD4Yea3vVNPnYbM",
  "key26": "32ZpTEadTBcXg5ewmpzD6VWtq5rn7A43KqhygLb7Xvn3uKc2xek32HZEVUK7Hh3WaYXGRk32Y1hfepd1fHNYKMV7",
  "key27": "4AXNVvmvrp6vy2GaWZ9hh2R6EQTzhayVGFBYtyviZnf3Y4PNvDgZTnJstFLwnnPqDBjAeTE9GYH7KBjqUA8BV56c",
  "key28": "3cNqPNS8coqkB9Hs7aR5SeA3iy1MSGTtRPQRp8rtTn1CGfa9a73PNPfDvxggPQvc8K73UEyq6CCYtTAa7D3ZA2Go",
  "key29": "sJMa7Skq4EzrXCBD4te5R6K7wV39MFMTxGYsuHUUtyPs26LMwq1i3spAHoUKrHWE5YER36dX54HPFWoaLWZTUTY",
  "key30": "29fb1oHrRaprpdiAtPJVTHL5XReaG3ES9JwX6EhNByxpVCMRmZyUVhsbBSyrpaC1G48GHJAEFeK1dZGFYGh4B62f",
  "key31": "4cAfsWUiW3V7pB8MSmax8zbdDKe2pX6bpkBVyPVGDVt48gD3D2VgJGTSvxQjZpas24NVF6f3Zd6spLAVsSdXbikU",
  "key32": "3CHCarPs7VEXivzGbuYRSo64JFz3k4r8QY7rEGaPQfY4k2eMVkFZr49rGbKuzDWXn8q9qqxDQiPuo9EcpeGwK5N5",
  "key33": "2m4PsEzDSS8ycUsLs2orpQVTPpf7w8BpPnu8HNs5uavjX3uQcXToDxFF5BxKY5qMArQ8rTxHBBisvzdaztZyXYPS",
  "key34": "3aGzmf5BgciP9xFZ4WN2GA3Ka8KTYUtBENv4bCvmpFz3Mq1xVJECpNam37H2D6AT8Fv9eeaEym7nBAwauLtCf2Vn",
  "key35": "2ECSE8CxxZjYKM8twbWhQpRATatQYM8gVg4iBbxPdi8x1BRrihfqkVjTdBmXgRXicXjPj5zmuJKBAno68MrHzE6A"
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
