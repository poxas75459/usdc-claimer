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
    "74ehYAnwKXi3CfCLXHm8V1dFGmjaPFLoSvj2RqnhSaeEcGwxW9h7LX1pNryJD3jNTK5aUVVFQRjnaEh4sibT6Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQ34HEnaZW7W5kNNfH3fBxVGnjH3VfRcJz3Y5fnRwKAqE4szdKUD26YjpL883Jxzx37Macb7EwH9p8p1Zb4zaHk",
  "key1": "3DB2kVAY5feRxx1ArEr8Jwowrer2asqwMXtm24qhzYhdRir341mrJTn6xLDWA3t1ygT61UijY1XkHYuBQXq1YuFM",
  "key2": "2YDwNREDCaWBovADnzqKCkTnY1VHcfUv4wDYwwNcD3W3Wmq68drpwGNsVi1jrKYxH2fKtjcJBTxf7u7fvinHTPMm",
  "key3": "2mP1jqpZ7X4EzZtprVAppPSXMeNtZgXi6dWf1aRxDtj7HmqSUZWSnERQPVyWtqYh3eLyiU7hnnCYuUAw7C1R3FDk",
  "key4": "4kccV2RYLyLAffGyL7jrgrWamy6ax71bmB4s7xtHrxVUkJTHd7pjXGdxWswvgKYhfX2f8tQLxBpMyZJ3LeJKuYP7",
  "key5": "5VQh2vWnrbUbrTfM4RoUV42FxGYkb56TNhSLsLxDbvYpwdTjohRkLuNPwdjC5B6TRGMt7rFiPiZRDwZoYpVgmZoG",
  "key6": "36Av2PTfjvAz3EnsYQxzPw9N3MDmqjHsXmR4V4yj55kmqCz8DXpMECECaDhG9yyb6odspBLraYhZkkeig7xWtbTy",
  "key7": "QaCdx4vxXjAhbK7WNG7xn9WWpe992HHsv6pNnKo331F3szq4gEDhWfuXvU3c5fxDHrMsxCo19soBj95QyqrteNS",
  "key8": "3EaZfxpCZrY9AdTqTrGS1AVuY6UBFr55H6Ua5o3tqiSnEoQa9AXiPetvhz58eT9T6HcBzkoLnqQSnDUiLefVgcLT",
  "key9": "5DU2s4ZMgiWNBBanipgF4pPi2uWVXYdsqBo5apttnjuDz2HkY8gBkxBphZRM72bJ2Ey2v2tkyt5TzvXt6mJ9uuCK",
  "key10": "4qJufQ6Fzj3k2BmmCP8aqg8eQasUVnGTr16Ycv8eGg7BKAjMgyLNC6hb51P6DxekJqmjEAjDnDGvLTV47ZWDCfyV",
  "key11": "4PpFto2ZNK9bu31YopKTTjqmfMoioT4EK5vopXGZp6E1azovjhxKZ6HNVENEvDGybWZLh1fzWqhYJsw43jaHGtTS",
  "key12": "5dMmy4YhccfSHnzhkUS7qavnCaamVTty33aPxBKE6ZZsY9PVSShXYzdwEmxuJ7PdUyuPJA4aSSdZvyhHNvx4AWao",
  "key13": "M593HJBQioYTKGsN7hdhU5ERZFfVNVyinFJzW7U4tBBGsKhJEmp8RicFmLzMZqr3EjbkTkQHgLonAAYaEv6bxPU",
  "key14": "5wPYB2jydk3Lt8cTd1fbj4cSC9pbY73hLwPMLmyNSCAsCjAX7f8D8Td2Feqkerpd1Cr6LGwfDaxoT4Ns4sJXE55u",
  "key15": "3sk21Rii6MKapEfkjEy54VRywgKJBUv5g97GfjqGrkyHfhcrFceR4n3mHkTo68XPSHMqnoPtv94mwHdCNTUjKdZM",
  "key16": "66XHqqxCSTUuGWNGwCryr3VuHxnfw9e3ZuQ5m9RMnyscuGtxiCHAacir5Qmmp9YkA6gnakUqnMmzjr6chyqq1vKw",
  "key17": "4TrTJgtYkRo3bTA28yJ6rYoVWECAVkcYH2PfgFFd9S8z3E9sWuu5mVytCWF4n52ADMSkmuzHqkeryqkq1bkV6BsC",
  "key18": "3Bv7t76D81zQDgDDwkq5nr2NgBdJnYGrhhqAQ7bVPovkDpaY2x2QSFNHfU5hP5Wb2oWCUCPzdEQPkoQwLHJSRKT5",
  "key19": "2aNXxMn6VY76fBPe5u1Wf4HSdRJm5sZ1pboLG1nsL5LEZriR93osKfQmhc9LbyqskqRWc92TCyJ9cB7oj3dB44CY",
  "key20": "4ui6wZE3WNikBprBjSWXar7LSemyTJvcuKYaQCvYM1KS2N4pJwje6R8qnqP8dJ53Pg62BbeGYtJ7UHj7XNyxLUXz",
  "key21": "2wHUyJ5tjodgh5niSyQgWJii54rNzoxQae7bqZGWVyUA2789beKeDdD5WmZZ9yWqvooFEtEXKNstk7oRFNPwY9sm",
  "key22": "2rmuJmEJvEMeMnTuqtebbSNi2XZA98tHKftZkPnYahJehHvucyipAuxUpBdq5aaYrZVhSmsP5gtgRY1D7pntp2N7",
  "key23": "33fZ3GNhHSE5bAqFpN4NEF1dqV31H3f6bDRxmFFU9pDQL1zvL6R8bWsjRDR4XRoCak4a2RFtFsuhPjPRpyA9BNcj",
  "key24": "4TWKXQL2GH7DFwdgRr4nwMUDbNZDZhkDxJ7EzjyHK1ih7AAidE8pEGm2AMAZk839wMGbuzowiEFxNQyMZaHFah69",
  "key25": "4LKKYAiGheMk1zNokdWttEAWvvuS7P4uHpnwbzWRD5dvV564QuxPgcgonouVS7e7rdh8gzTTTCRjrgXS9kxV41xY",
  "key26": "2x7UUvRwkq4hfaLoESXEFniC4ocMkcuZbg5VMmpVzT3DCtjPzgLVPeGan8AASvitu4kWEFRNwcUT7fxj4D2NntUL",
  "key27": "3kpcAjUkpB8HKo3VbJEanBEZrMgz2DcpQjFWfsxihR66u4xWYpXgHukExh7itUaWzN3rFVBHQt4sDEWuLWbpHA7A",
  "key28": "VhFWV6rQ8msQpDkPLjS1DsFrRLgxHVfwsuipPBJmCyhiW8D8gicboot7FhQviwwnywAfav35FYNbUx3f4QjpJbP",
  "key29": "2HwpfV9woLMrHteyy4xdPnB8u5L9EMKNiqkWanrsAxGDVvvXCGsH6o8VPwv4LXVHQxb4CJT6rxnBRFtzVTkyx6BE",
  "key30": "qgV7uxsSdF94Ubz8DxbgGszdR5waZuCVPCHsuxNeayYqAdR6fAVhA2XA33ve3cD39NXe7c4jbaJJennpq3FBnNQ",
  "key31": "3aHu5YdcKbmwntc9pe22mqRniDBiW2WJLvRUGH6NzAdhVFaqmhZLPpHHwmRanKffiJmrWRnwUPxbku68Rf7dYFpQ",
  "key32": "22qLrTcAqrgik4HdY1A9mAsdCbiwJgByGZeezWpuDvTXjA4GaAvKSnKqYVdvDKm8FCM68A3V1oEd6mFxstdWt42g",
  "key33": "2JeihFLmWFX9dZdK17LQFpQPA7WFz5Ho8LqUL45mMXnzGzgiQGJkH8ZBPqx5oC7x7igLf3wdijzMgSjbPsXhWV5b",
  "key34": "3aGQjKB7BWdFjiyYG95ZQNrC4rH6eXGrQHRXBJfeDnsD3YjAWfu2snbniK2QarkgbQMA3ctd3tdMV1hfdFjsmyso",
  "key35": "3XttQFdrjXRDJjYXiKTmyvcFQ4RP3REPjWM9FGQCADyWmVyP9SC6BFheeMuEJjj1pdCjKWy8qitfzvimNQcUWCH5",
  "key36": "2mnwLiBZfgGU8ujmy3mRrErSTg9Da4qVSct9Bc7b3GN5RcZzwMrP88A24p6CqY1wzKb93hFYfupzLsj5kzZjhDQE",
  "key37": "5cjAqMDNtwSNtWHVe8RmPRDhNTyMzaLenRu9sfwpkfzB31jsrgxN7NRzW7zPm5QVWBJxNQsKHweoXW8SJ5JK3SGM",
  "key38": "32H5XGv3J1412qsi1FZftN4fBSURoxogpPfNy5LRoVkN1DwzXNn7KLYSnURastjWE5WyeA2oVHycU2YYKRPebJq3",
  "key39": "4r1QzdHEv2ZktdHoPsk4ANgMW4wvqisG7huHmN1roi2JXiM9nFR5T6b2Pc4jSrT3JQgk2y1AmwxzHmMijWHZJD9x"
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
