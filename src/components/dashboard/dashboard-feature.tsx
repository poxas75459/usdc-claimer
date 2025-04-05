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
    "DQK2Wux7SddtYmpTE4d4ZyeseVUCXPVE6ZErZBz6MKDHvSiGk8HK6pwUhunrjc6SsncTihbAFhydojvRnRNWEBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwyJNRKcTNDe4vuwZtXR7jUWt3dTwHYQ3w9Tc79BrSBH5MBB2257o277se1FijpxcVnhchZnAYAdu6pWwjXF92t",
  "key1": "47TYFK7JtBX8w2WN4AZt6QQypodKr1dz2otWMHNWSCtFYQRE8hZV1FWyCqYn67neouukcYUjsFMNoruwytfaPDaR",
  "key2": "32DGByVvLRuQCsq5LvrdMdgB2Hvz9REBmHYbbREHfQG4vio6R8vNSM75Y8779D2BMWpaDiTQP47SE5MCtXLr5zuM",
  "key3": "3RGk1ZZ3TEstmDKFvAuxpUw8vCJjiUb5gkw6iiBGdspL6ArHLFocmcB1K5VG5RqE7LE53h7q3TBrvcWgznUikukG",
  "key4": "3TA2mpWiakqmqt4jJELvP8upuc1vpAwxofELzWMgTG6E6S5AwsPn5gwT8KomWPtosWwTCyg3Q2aWuvVT32rZTHM4",
  "key5": "36DYvLrJxH2ENiDucvQZFT7JR9djTY9LjsNSCtVkCq7ToQkqwunDoFAth8sf5x2j37dmHYMRrSHJFDryeAKkUHE9",
  "key6": "4EBc3DqKWn3hZYYLagNA33GU2Fe5mb1Q8PGSGAj1nGcmnXEXjzALJeE4ey7kcoWx6i4GrwoahehzM4ous7N1c5q6",
  "key7": "3p7L6hozUaaUzbXY3qzk6ashfPE4bejWNRfKMGykXJnAK1tRfmXDsjT5NJn8y5MCGBRuwVyFbKcirbpCLzDDHfmp",
  "key8": "4rdJq1Tf53BYUZ32D9VbX98CY9vKEchTMy55t3S7XNVxm4P4qSNxruhyPUSLrwf4UJKqHq68oLtE2kNWR7Sktfyq",
  "key9": "5u7DKNRfoPAN8GmRyyTzeVzPi2KVmw6rLAXY35jhy6wj7ykyod5UkfbZ4bwsMKMgSKf2R4prD6onGzzokDh3wkFa",
  "key10": "5dYzzRc3f9w7fCbZBCWUugLobqK5MN6hxV4g9jEe36ouGLSFek3gjmm5dXS9CJXwAS4Vevu6G4UDNmB9sQV3RWMa",
  "key11": "2XRWpJP9D1HJwrEcd4CtkL8hg1svDiEKcQWKijHJmDkACbqWcUHwpb4QbVVZnvoe8tKUf8iKRaxUCEasAxeiWXPU",
  "key12": "2VtccY2ieDZt1Zw2s48zRUR9xrNtd9HmCuTYAL2YXcoQHMGGNLr4xJcZgJW7jZL5745xXM9JpNAdtuTWoNC99VTH",
  "key13": "3d5uPDQWR8yH6rwyH5E82mZoJJQVnf1Rf6kAqAGQseCJgc8NbQ6EBiKeCn8Ng2ksPekqCfigiFhtUNFXKXNSie4k",
  "key14": "66wKGQKYie8tggxZtmsh2eYKiSjna8nD1y4qpppi9FZ1WKCKCWV5ArhHqjoknmMd3pFYJES5mg4WzaLNgFsY8PMz",
  "key15": "3bgGfvpu2JowDBtqo1JYwRfqAHgheJqifNztSmnCzMT9YE3Xf8ERRgfvhEPcHbXfdyLVj23QY2bTvFKF8MguYfDF",
  "key16": "57sHf6A4mbqGLWME2xkQNBWQKMUYtxCrk39BN8VwEHbynTh14K7wiy1jAYih6ogPVJWSHyD6Y3k4TTJEHvfDkEd7",
  "key17": "5unNzYwrhzSL4Scd9dLuvFf3voTRx9jcTSaLwM1TbGALvzwmCDgNmsbganJxWEtZ45ireuJUoS2acDZvM8CQyPZ5",
  "key18": "5mdoPKMN2w8BJgoCjG9qvD4YxsA8k1GCMzd6B7i7FLZxyKzHsmA8RSgAjWFW8zduVehzvHZ7DhcyTBhWjEcV369h",
  "key19": "27VX4jJnFSKioicErbgfV1JVLV9nZRRcgAweNe2w2A8gQqnkRPc935mF4y4AndEynPji66AGvozihPa6pmUAUGbp",
  "key20": "4L9cC7oQZfGGxUBPm2EHgvkMqGkCKWLUi7KNy7G2pjKyqBCfRCepujVHTch9HmCNWWRxujPGPPNDsGWQG2rNw75j",
  "key21": "52afCF43G1iJYaGwc7z1xfKZUiXfXLZWZAiB9YCyyxRRQsw74ap9htiT37RS1QWn4MpTHb1q7otF4ZCpYWEt8mMJ",
  "key22": "53oTT8AfLkYhon4pb8fETXJEaooYMm4rdeeE4AkMhE8u8ptJFTFXJrJkBfQUY3vnNu8yhdNQCvsSmK5NaYC8X6xd",
  "key23": "4PdCUK31oMtYSouPnFZqVWtRfr7uoQhJr1f28KPL9B1dcbLyaD2tncn7cc3CA9n3TpZD5cQCYqf8HFoZJmn45w5w",
  "key24": "kBYBPdt4mYCdgHokDjX6pkNSV8p3yd4iSgTK9Ba9codDk4aeTGLbPG4Z1WN3xDVdoJ2ryCcu5Ghh6oEe6cixXKc",
  "key25": "24Gn4QQPz8aFAURAs9GjSktp53jX8az68QZoLHt9ojga7CvpxnyviyvDhnaHidsE1woa11vWeb4G9WeXAMWxqqYS",
  "key26": "3G9pRe9gGBfsCcHbVNjroEie71ixZNsgrarBN6GJ3RwpP5Z83JqbFPpXrGN598ZhhPsP1qwgZwUnde1zKKjnG2hZ",
  "key27": "HcEQ7MDaDVHX6jYmjV9QQMZWNaw7Xr3BaQdBEXmudUEK3B8FUGttnVBTJUNHAYPDUJdfFtJZAaveddmsMjH2441",
  "key28": "64AvajaCU438Ad64s4ZypU13UxjPxyLFoD7ocsbxUuCADH5sEqG5KsLPUwUzM62BN3mx7tMiHh4wqk322M5WuU3y",
  "key29": "3Nqx8JpBapNhHgZN5o1BidJ8aZmr9BcD7y9DCMg6dzoci1KRjKS1TFPhbWJoWVr2cS1Apc6LgZseTLPT3AqFJ3TA",
  "key30": "3hRVVkjnA1opmrkUk9LzMQGJSAPkuqgnHAENYMYiCGVB4otRiXzRjazVFa9dk95tYJaCEZacG6yD3ugXXamYBdVw",
  "key31": "5EhCTFQY5KDSrk3twkyZUETRg4171PTuUibU95ge4VoJDRTJTBTjUrdwRpPj3KEvNxukwsDV46fsj1oWjSus9JBs",
  "key32": "2u7tMY6V6u4LVAUVSQuznNEt5kuLzU1Qb2aEcFvST9KX8L5A72GHWYzJfVEeNuxoTVfXvEtkHuki9U7fJbRnQ2EQ",
  "key33": "4QNBpU5jj2UtowQTPTUPDNDcXbXdUxXEJKHMSThQbm7joQS6W1znL4EDwiTmiABzoeDTGcMF9NdCKLMLTfoiUHD",
  "key34": "5bNaJ32UfHW9VBrME7wi41CEFwgPShAzMiykznNCpDyuwTABPtC6i4eRX7kdYDHh5Ny2L4C2vc6vNG2VTnPbUJth",
  "key35": "21dA5xnSaUkHGnr97nNFSe9rmMZXZvDcG2eor6v43deJhXSEJXAeeVwWwYFH1gKo8j34NceQFs7vLUp6WnpE3UgG",
  "key36": "cU3B3AvCy3FjhPqaDgoVPmkCix22xqR2PpMoDMBdK1V6FX9pgXTZ3Gia6ivugt4tmtTNUT8jN7ZGprxQwGgVR8j",
  "key37": "x5p3h9vqQ2NsTLLPiRVc2ihqNBfnKHYz2zbJAACRdegNFwhKv6RfEV9mwtEtsnFsZHSaLXE2ESKXv4EY9K7GKk9",
  "key38": "4bc9kncLPcg6qzRocfCY48buKKSnvyLAxUU48DKFmpiDCvdX8g7PsmGa9XdiWeBgqj7DLpSd8fcfyN1Zg17Q5GiB",
  "key39": "4RPnzSHFEtFXzk7L1dfWCB9PgqewGJVxh9yVqbFqeVjCHvGby5Gi69s61Ao8VszEFxhZJkSbigUtpwWZBqtQxUZb",
  "key40": "3j7fEJXXr6nr8RKS5rHMRYGujNR2vT3rZE7i1H6HRPbTVYxu4DobGzpK2LTr72eTYuewdXNSaBKwHKPjLFT3VMyg",
  "key41": "3vig4jVkx4fw3QUM1rNrVV7dps148s6Xz3z6rM8HsLVsb9hC4ANPYbkBy42gpKZrRWfFZfiE4sLsJqmcZfpuHJpG",
  "key42": "4ru31ASDP1EfetAYFEwT5KBrd9WrCRe55MXYSAdcXcAiH7jGA7TKJ8QGczgCQhvzoL7PdbRx1DmbdLdWQKm5X3ht",
  "key43": "4Gh5baHwboGetC4yG5hSiw4GTsydvWFm3oTSS2vmUihQ6MbYgXZYf4YkzHRt6jeSi9tHNWHx9VybJtupLP5BdMCt"
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
