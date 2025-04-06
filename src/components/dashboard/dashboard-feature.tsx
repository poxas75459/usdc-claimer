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
    "fGyHsCtpfEEcAL1YkHvCCwFDvXDxMdVadvveNofntSuqXhgRE6faU2wtgdphCasfxnTP7oynbTVv881pPCP9XeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V8mahqWdb8gv1zFMmkcM6ZwmPi1VeDkGDy8UCAcmXnMvTpsugw4w8Pb3xhqVTQL3zxoPkGGK7kz3vJUwXiddGN4",
  "key1": "5LSvJtJRZqZ9fpGiARktmNg97NEyeYp16nzKVAQBepfMLJDuiFsJCetxjxn1a8JvWyqSubMW2zEw4w6gpydUVvTw",
  "key2": "5wR6ork6VHLaxzcXtLZxH6AAkXgHDFiEk1GDDYTgDN7UjWGdHUWQRAUmAsA1eWxoJ537jQqosuJenFVaArb7thL9",
  "key3": "kyBdtDRXtYHbUKznXdHGSMhmwLHk117tvidseuVWtb672n8MY2B2GgisvwTTfvUtiejrwfQ5Bkf3u6ajphBWQE6",
  "key4": "5RJiHg723bEkVwLDgqwJCPH2BUZPwFoVDuGCz4k63S9ixakF4Cs5X7ytFA6tCsoKaiVVjdjJyf8WQSUR2ydyDiAs",
  "key5": "3JD2tsbkMctfvfUwnne4YEompfAD7Hws6EMUitjPcn7pj7F2PKH9dNCHbVXKXLZefq5QYZ3R1z3smJiytyVoXm4",
  "key6": "2oJDrDX7YfXiqhSSKPkkqtFkgZZDmyPPw1iQhThZfTeQ4DGtHrnDwm6cZDj2x6smKQbLZ6Jrs6ByHmZjyKPjBJrg",
  "key7": "3NqmFMy8jWYtnUwpJSvadZS785Sz4xgJfH22GZaQxxmPvv68vc2qcji1n7P2VnCHefq9K1FGmUN5kgqRYoKn6s2Y",
  "key8": "3tfGrSXtTKev7JM9TqKxcj8cqbxp2tYy2tVMwDqG8M3CmHdmu2rbduzZpBUVT5sN7TrJVcArzWNWMFVuGk6mdi2V",
  "key9": "289ZNKdq4gk5yWkG525vHaQ7mW5R9X3S8mbYgsmmCfCSijVNwz5H2VAMtBdakTzznPNkfHV8mZHYZ8D3fYh2WW3N",
  "key10": "5y7eeihUDnQucrcAUATUkh3YMWnuj1mwWL2N14EaXZPrrDiEiuGcBZA8cRVyyDKHo168Dd5CffusEB1RkYJcNAAe",
  "key11": "2CyBy4yFvMBGVjAjkycQdwUh3UYmqH67YFrhKQJxGHH5zV9qWg9cWFdQvUEkadQoRNkRV9LecVjFcjrFPqhxqX1q",
  "key12": "42t6kjXonxNE53xpxJEoW9Z2w7bh6uqH6zPCwAG7NZtyWKV67A36mgv9NcFcXJAmUBd7wMuf7XDXLnP6twEdA2Ph",
  "key13": "2uu9tGh9yRdSuQR7gfLQFCKH5gC9GueHwSBLHezWA6MdGBaZKFcsGg3dn8NS988XW2b8eQteuU8tkwZ1M7XDzjTH",
  "key14": "2HrtGydYNTt2BHKhbF91t5xfAjjMD7UP5Q3zi6SnZaivwJ4naA15iCybgLt1ZFLkJRXJPLw66NCz9qKz3r3e7vc4",
  "key15": "5JyvKDNrvWubUrCQdCUimcMpYRiB59YcsQEB2WVXpXj5ZbYZsryRTwNQMoJX3PJ9kF1K5T2KcewzpE4gVCCAsqSC",
  "key16": "4qTL2KbeYu5h67BMKckpaDEA32hLDJ7yWbTKSHyfmZdYNzhn7QiHMHQTT1a4FsmWaYim1CE2TE4Himt25Mpy4Udm",
  "key17": "3gUwtALKLUDQSYeTop5yJnN6d9ub9jfxRsN7Sm1n14ntQENDxWokx9Smjn3bUFmbh9fsLCyqUiifAkLhMkiXhedU",
  "key18": "3nmFVjjYAQnc8GWLB1j3Q7iDGBCezwTFkK9GoH6m7h2J1vsaZk8MvNCFG5etrn7Jbv4X5r4LrqhZ2XzJGQXM1wWJ",
  "key19": "354zTZLj1bjJnk3FS3ExTyMwTcQuXSbFi2AYjd7UsBBnNTAYdM6jyDXZYDupkRq3ewG5PNV7C11D46nsP2dxNv5B",
  "key20": "45x4KPAvHZfk1CKsrdXJkm2kRAQaM8Y5NvutXZAg2EfRAXtFanDpEux6CUYnfDvy7DrXdtD2NiGBxGKMkJWuyZLs",
  "key21": "4Y3Fz2uWEupAthP2CQWxQaSqnnKiLxViSx5iCrPAsm1qgE2QgprRWarztdiSjrQChaapcTuo7Dn2TcZAX9uR5Jmd",
  "key22": "39KcvDinLgtySnypnGLD8TnygVNMV3K1X9gUs1Qw5wD7tAsvkCwdDcM27Ty4GMDgw6rsu1BfPPybYM5aQbzA34Pn",
  "key23": "2r5F2nX4RZHeqyENE14BzTjLC7ysi6nnteMPfACEt5mF44Hy8sTPHboQ823ta8u7kWtJgRk1WC6j2dFw3fzuUmcr",
  "key24": "2S21QBA1RYRaxBfViAQsuqQyGphT6RB4mKDz5LoWXKGgz3ejE2GufqL57tntAqY5r8rHzkUZD1yfMePwPFAhqbWK",
  "key25": "tFt4VG6xtj4qcx54rE3LStWVzQJ1VVxRETTAU5xZyBbRW2bNV6m6j2GZtPR5kuuwp4YFmxN5zLwfbpWeV4912BL",
  "key26": "2aS5c8PcHN7JdvLCqQ48Vo9uQi1AEgwomz3E2HETqQxk25KRKt2Q8r3X9piNgDH11kpAAdSWLMtrJr3PrvcdN8Xm",
  "key27": "3kCMZh7o1Lft3fEymqDH2CrK7p9wUjLEG4YVMB7EUsyH8bLMuoCcxE37yhDf2aUntKkSvKHa5YisHpPzQujDGbLc",
  "key28": "43KJGmK6f3tCot3YjaTDKRuPEmxVKefaBLazpER7M1CtunSeJVCtokQy8QUyyK8n2S1gfzeTDpdnJrb6vNaUMJjR",
  "key29": "2w1SymtzADVjb7vsgXmTu3pCjPhJE7NfSTZfGebsjR78g7bzmB41db8GtiTLXE56pLh1Lxx37Z8SZ1XEJc6bnhW4",
  "key30": "2PgbqKRBCDf4nYSNQcJpzbQLSnbdWnj5hXKvpivgsCYYB9Gk59FANFvc4NYwzq2CTDkwLLPFQpZwsQBe7yjdy1rz",
  "key31": "3wqGq44TzQhXUccPWyhmg7k5Uo93u4VoDV1f87mnTowf9YG6ZC9SoidPjUNNYttSMeo1wwQVZMguCEJdcikeJbUh",
  "key32": "4uuqWRMEti4w1NXN6kQFAZo3qHCKJoe5WWY3pZMSNZ6ktpvhmvN1KG4q7sSB74KXkfJZ8oqNch6m46jRq8rFKtyL",
  "key33": "2ZeJjYGcddxqppQgo44vEQechEcxNWj5DxnzP5G2oXsJ3BsUtRbsCEjMtLkMpv1Thbvh5WHsH1t95bFqGg2wGedK",
  "key34": "3bYSKNV1r4iE9UJMV75a6FWC23KZ4EH2xS3wqanXPTnM6MzvF2NAttL2TT9eABQGwLAvDyNaKCoVWoeMBdNnWbmv"
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
