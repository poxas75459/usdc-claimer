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
    "56g38mBGWVkT2C1kEg24VbyfkGLGtoc85V4uH1Fd6fzS9Tr2XKtPEJM4HQtKudEX7mqFAV18pGq5SsqPBNLpyYpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bh3Q35wPwT5sF3V4D2HgjQgn3egak84zvs6kfGzyoCcTHA1suNd28fdtxDs2xtLBYiKdRFcJVQ3qoLDusPnSxJo",
  "key1": "4MEy9zjaVXosjsDSbwHt2PupVGnsYdhPxmoWpb5ukRVwbSv3kuYtTjYzjA6o2Nu2XZ8hUrx2HZX13VF4imf9FhS",
  "key2": "2hC1Ky6PLQ767Ffyh9br7Jda54rqXsjRRh2JAUW4uaAm46SVrC6nZkqFr9jmfnZ5NbiG6Xoe6pNivNKZ95W4HpZ6",
  "key3": "52af4hDVF7w4BiXEpiUFdRow1VUKMU9V7WqT4USEn75NkTtKrjt8663Msi9iw4Pf9Fur9RDrKutrG36cdwyas3YM",
  "key4": "2gAh28E6zT5GYPJ4Jyt9ugCfzChGNLqscU2dbiXahTnENVvLwqHj3MPCF1w8oLVM8cmSHcP2JPhUtR2uSPF78U7B",
  "key5": "4gJfbtCtDh51Shi29ZbFcWPzjX7NsxJfHVQhN6cHWgBuvAncoNEqt37mvRb3EJ4Y8DngKR2fHAgmrZMQbVwM1ARD",
  "key6": "3i1usPju1ghSsU4eBiPFoSZ8XkG2dcPeqf63NG6imamjbnuLExJVJHGcL6rciDcjXn2WaAQWw7yKgtguKFDai6wd",
  "key7": "5tZ9uJ91zTZxDxqYSdHaHFkJ5H9NUKed4UxxTjazZU4F2XcaxZWmKfhHMDc7dbivFSDBXk2xd738fQkCRVAPSohd",
  "key8": "4BAYuinCper7qNmbmgQzd2HCDwwmK3mX2WmZ37F2GUVwJ1N9pTFzcguGq6kTUZgc3SAhbjxHmZa4Sy8FQajZjqCz",
  "key9": "53gcYsbWwHd7RLPdTcQ4wx32YhYbe5P2dzXsBsLSVdDnLyfbmDiThCob7q58WyjptwQXKJVyYKddcx3AJW3EGoVR",
  "key10": "3bRRmTQxnpD6rENaxSHiqasAkMGk6m3Z3Uvc5hYGbfEELfkf7tC3wCnUbyKzC37H9QZH1RRjDsRsYenweKsMMYw9",
  "key11": "2HpXs4hjFjvE2jS49ZuBxwzF6KXCqPW3q3aZHA1b1CdT7fuarZkZZhHeJhsC516ckymMVnFrE2pY1yQ3TMCnhhd",
  "key12": "29mKjwzX3tmSxQMpFiWt4tBq69QS2y62m2yQSxomcuDpMNFueSUcBUtKMrB1x5RrGoNWSZTfisusXn6hhpUjGLwS",
  "key13": "5J7zPH8FQy2Dvm64hfzfN8vmCfhaGA7HHeiiESPiPyry81egVAgTx1xXiKnAhNaw2N3i2rV9NKimvU1RS8Uw2AyT",
  "key14": "572zdQ7hCXoeCxtKZnhGdxBCTnp4EndedmBvXnYJenXmFabbgWPyhYgM3sJxWpcvcyebz1pgjzVjY9TWzQv8jjRY",
  "key15": "6XAKp8Hr2AWRpuoFDVaff22zWhgxHS9jVonmZhp88TWRJQrR3Yi8CW2tFyqBp42ZWdRcQcynzm1xGJw7WmWC6WL",
  "key16": "3PefK88ubsGFsk8H8nZJU1nAkh8WcjLkZYSdtvNxyMvyBf5Hgra1pC2hQBfAMcNZp1TprkPBbtzCMWYZ3S9bPTBP",
  "key17": "u72g7tzyq9oYttU9cQMRNeQkdVgnWq2FQk5XgqrvNEQSSc66ksatz64h8JiGAGuzKbG3BenuwvPLvYDA8nhEs9j",
  "key18": "h4WAgP8hSxExhBYxN1FVsV3qD9PcAuHu9L1d59FpkYZJBUbYn2V8Q8PGYNpX7owxriNZjbEbUBYS6vWPgWdQDXs",
  "key19": "uoCDoYZnscZitV3QPmmvpw3TSGUckrQDDsQ32gh9pqCgjqBDYtm7SPGTLarjsXChGgQ61P7uvwACv2gk5BRQYEm",
  "key20": "53dEB4mGWEipmXXj7RmM8RSpgmPUVuZJ9R9cLGXFZMCqZoRn2NEgYy2JCcbEXgiQnat8PuaZExqs23p8uXLhyAB2",
  "key21": "jWYea3fktr6TSRLs6BQ5Cf7bQqmkyB8g6LRjHC47wQQZdiVKyVYyZy1fTQxTqmEWG7qPKFjPaupfnc569ouKbfo",
  "key22": "2FmnsC2mPcQPo23ZkKc5XHTrhHAEmG1MWPBptbb6PPvqRdEcS6nwdxYnFzbZCv2pCBW7K9Tm9mYeZoNgg6UAXV3Z",
  "key23": "2eZG4fxtVhCmSMpzKqEdDuVJkqS9F7sEdbvDiHeHUrbJ8bHu9jzVscDnSzTwouocPrMznvwaSPhjNP6HMLYQwwzZ",
  "key24": "Yo8XYf7waUCemFg9pg5qCxYvq37n4xfetwUjGFgi9AKjZLkB7nurTYSD3xGnsQ2wpQ1UWngwAG9Wc6LHFuiGrEA",
  "key25": "57CYiixH8pcbVYMSXM5BTYqzvYNdseBMnVb2fGEdDzdXWDN6HZJEXfZJ9v2X4Dsc6jPvXvhLAE7ub9HJuZTAznEf",
  "key26": "59zYSrfKrtsymgFCXwzAik6q5TCk4ioENWcJahd8VzpydCpQuMHC6iG9DH3WtSwjjfm1MFLZJcXzrLareYGKuZS",
  "key27": "5TWM63RQMdq9DFvQJwbyTPn7A2ubTTTUrPtook8jg8ouRHMPFFssEBpvqKSN4vUeUZVXPn13Jx5LsidyxVsqNFcB"
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
