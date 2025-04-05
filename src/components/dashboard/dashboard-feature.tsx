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
    "g6v7aebnZfaGsUv1UnYzrWnjXWAkgLpWEgkojAm2SWq1A54x33yCdg7xR317F5dWHhRE3ueNR6RxXGeQS51Uax9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kaFSKcW4NXVgjg3eXXFJDC9pMiF6EBtPWPaWmrGpmgw3JZAs8E6dn2zDT4RMCruVtx43nhm5XS9ddKXsbyQNaKz",
  "key1": "5g7FVeuchEJjwPfoE8PGca182eEZrs66Me5RYEuFkoJruPnZCGQ1XujCYspvEo7gniMkDw8Qj5PYq2u4EMJnxHA",
  "key2": "5Uh9ddU2AZpwsEqWK5phhSPi5yNVQmgZPcPRLTxbQayhZBdVrbXjSgMAuKCHMDHFhceGLFETxJB1kYMk7ywpo19Y",
  "key3": "4GELiBYwqHgavvzzM5YgBZGvLAfskZTq9E2ijB3569k4p3XCZb61wBXm859TuPDyLTU8aUvhE6DsoNiix6D9Dpsp",
  "key4": "6oLjTsZX82Ys8b9CYcc4MocoiwP3cQrGNYRQJ2Vf9dtUh74zK2PH5U2TVECs5V8CVuiytPSvbqFXqomvW3scHE8",
  "key5": "2TasdQddbAHtEjU86UEoQeiGrToghGtGLy7ai9YofYLfpuY6p8FrDV9nR18NE4iKvcLStFStbpzD82ainVCajDf6",
  "key6": "44hakwuwcrUnoKSzLEbAbzaGBxfK86qHVCBtxCMhgAsyfwNNe8MGWynDYns2H6Q7HXMQT9ZyqFED4GKXnd8WtJwV",
  "key7": "2vhZCW9wZsPvfzEazekNpM9xrUgodZ67YyWH62VZVeVBpL3X2HB9MzGKo3TdSVyNUTa2GJYbZC3zdAejhAkUfxZt",
  "key8": "4VNm36e2K3CxgFB4ZywsTYpZ3ordVMM2UBfyen1iMp78fPt2WiqrBeExcY41zuTPCofnW3DhKfxCbWGrAqGnmsRX",
  "key9": "4nLx2mrvzqdJeCF89Eqs1TCyewYbYvzwqPjPBu4BCfDufqKbrBnD2dV5Qcjbb73du7pLw3wt4iTbQxf4MKGUN8T2",
  "key10": "2MgQER1XiGeSQu1yDTeNgNTE59o3wCX4712fpTn45pX2giVKMkZcGxykcDuTuYDWTN5LuBMbMpCvXYRriRK2NT4x",
  "key11": "33A8EjFbkxvqZaGYMdNK8PaGFpoWXHYN8kde3SiBLnNrVZeGoikNquRJyiExjjqQPnrSLcestZnBEK3ts7CwSnFZ",
  "key12": "3HuDshrQxm159fzTWmvKpbFDtAYSzcaAPMYsvm58po4MfPqHfV1yZv4W6nAhC4uamEZuTt5QzHwKW1q7gALKBuNm",
  "key13": "2VBf9G4wZJpH97GwnDbsBUMvYknZERSAvtzQg6C8i7C1HcS1q8it5dQjjRL1MgSQJ3GyhyfoWfBKaGma8ypPKc6",
  "key14": "ZQ5MVjsWNsYjQ9gvLN5vc5XUpojUnvfNxWH57a9BLx9d3NRD9k87f5JQCmb3yAkGTGn5KqB7vE5Gm1dTnUZJKAo",
  "key15": "5L3ZiQa1TsLKQeUso8HcuP6xrLUtcpwXzQpu3gsCKJppQuDF9uX3An8fWRPFABJe1eCydd4Qf8ANjcRzcRqfHHT8",
  "key16": "esyS2a9AB6zKCNPkgBRuNhF13QLdmSdudCuJvHTcygXqnuGWV5FrCgVv8rgQYBbWA3UFY4emgqFV4kj2PuY8M3s",
  "key17": "2vFiTMPU54462qxvtchaBcVBgtPRibzniasrh6nqmUyuFpJLnXJiiA26tYjwkAj7FdjbGqc1v3Cr6Ns7k2NmoHCm",
  "key18": "5N7Vj3LXqsnZ3pjbrh7vXtDkzourDUcsSMmjTNMbU2EAqBgCtYum34W8CDTE1WCxEhACmyFhfPXGfFxM21zBSETj",
  "key19": "4byHM4C279yow9Ssr6aYjBhAHV1aGeaGvdMEki1WW8WaVtiR6m3AfkvyW2a1E45si8shwJ94AdH2jbF63tuXXy52",
  "key20": "45ibfHfbN63HSkkYGbj1e3uwk8fQn9vc8Se4Ti7N7Qy2yNPqpr6wem3FaxbUBwGVjf6aQfHVy2cGANuP7qkzCZGm",
  "key21": "2c9AQ4dHFJoDLYB5kQhoj8iLXkMVcrNagYFZqhvRhuEgwFFHeJiWmQ4ESuGxUFbqXm47PwGcUzzMbPcxSL2tLRQn",
  "key22": "3LxEQjJmzPb8PaXNrESphyn1j2C62EsKzNeYmVmCvGFBiGDX6gbUrMMH3f5DUn1FCnKH8LuFHZLqq1GeX5kG8odf",
  "key23": "3Tdx6y18iEahmtFzdFXAMRsq8oqj9MYPg5HYh5tZ6xPPxhjDWrBefa85egyKesWPMhAPzzvgF8JMtcFhsUFPNaZq",
  "key24": "4vpPHtCuJ1NTAt1FnhPq4CwZfoYGDR6N8xru5wFsUwn42TnTEqSwds3xmtE55tyuVJnnBkeEkYxJWVrzMjv6HaeG",
  "key25": "2m2KZkurugopbkp3tFcbVoG2SSkemkTuBxWQ2Tv64JxWEvp8c1XzqqnjWiTsSi9gMQ4AqqxKfJZCm5KyALhVbsyN",
  "key26": "4d9JYLBXe9xHJBYScQoSTA4FaP3Y95UhczJwSR1apfrdMtFZnzbXAY8SJGtYA8UToKXGnzjeNFtP4sdoRVQsbNSU",
  "key27": "LYVWZcYzEXgSjFejnLzJaGnpLQWR3rptKWTVV7KAZRhLqEsKr1wRgogXLSimLum8r5CJ2oQNF9kgwrHtDs2pAay",
  "key28": "XTDarbrkpEskhJH8TNrvq3QegH6mi7FDYy4zqpRmmpLZus5er39pQjBNFvak5qQC5ZcdJXWKyotUmtb5rayspkx",
  "key29": "2nsoHBXt74Q8hnRdfjTTGG3AjgpfGReTifFm7NBZSuve8ZRjLz8cRQHxhR1gkpKrLn5nVgrmrzwMGJEQXUKwsRkk",
  "key30": "WD8ghSVqyUap2SfBwe5BAVxxUyXAcbHRjefFU5tonq8SRWfN2MDLfFjhHDWnXjvakwyako8KnfSxhQFQ9BaG1RH",
  "key31": "57F8fMUHJ9pjdcSX2NBzg21STEUbR2CTRsheNx5PmcNzNstzYMCz78rQKgJkaNpEKHtw6VEe5DgciSdB9E4XNZMd",
  "key32": "4ETXMyMGVcLHYSitxLox3zDHV1jT9PAPmXDg7fb6io3S86CT5mZMWfySRj9akqRx2aFvfGLYTT61DeoASbA2vSyN",
  "key33": "44nR71aMTk13QCy9fSnWW2D61BdTYAhnzkr2SdzPwbJVSG4imxNYtkoEkeNb5H4btekaA47xEUdeFeiEmcoRwKKE",
  "key34": "yNUCPBd74VqySVxCnz4AhKAGFNfm1H7cTQPxsffNbjjbAWQiHS2kEP12TqiFacgvqjruFZPUHc43TEWRd1tQZzS",
  "key35": "4dgVLnU83QMVSqWH1yHLjxUwRB7kz4u4ZbNN9TuhFvYz24x5WNGNzUHsqQz29EqPWg5fTHYweeEUBeiFBCTXBBZL",
  "key36": "4ngiv3xvxVzZgECNCp5SXFUcYJosDVVfUNpHDVkNhkJ4dnQAE4joSTrXZNR5RA5E4tkeiNCYF35XbZhF4XiRo2Yc",
  "key37": "3vEyH34Ek63fp6boBxfnBVJR2Dpj5foK8CimeBHxD6GjPR1rydsABA1124xRf8Pvs8Vr5L7qcWmP3UEnAipLs7de",
  "key38": "5xtbWYRbPSNYBKHoVLQS1HGhxRNX5kpGHkoGh4y5QM6K5ZiRUC5bdGUgeGw3PMGbk39dwwvhnpZcdmPWoYxhs4AC",
  "key39": "4gcGHv6etFGwSHWQYnEatnpvbWomnyzB3iQyYpb3ZnPRmWevBefmnFHZ9ddSjxdpETmSYALfCGLT4EEH6kX6mo2u",
  "key40": "5JaH8mUePbDQz4w2ac3u2suc32ZccUdE3Xx2GMdYSWDZkhdnK6K2uDFCmivajTvsYe2jAW9wg9GD7mVXB164isV2",
  "key41": "36XobtZic22CdA21rtoV6kTYEXiFcHCJgGEgms8nQCMhnH7H3YRQ1RN19ThKD9fFFGh5PcBDgoqopMF9HduNuzjb"
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
