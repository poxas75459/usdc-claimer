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
    "8WhCjUyHEeY6JKiP5sEqb9SssqcBjUVtJS8s44v4XG6CtxBmQZCJ834kgc4b2zvWEts3zB2Jq94SzR9XD6PxhHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3GYrynTuSzZqzmxg9NseJSTsWLfveFhKCXHJTXPwFM4x4ju2KiMU5MHCvEgX1XmVWQTFcNsmzCD1fRyKe8BHYM",
  "key1": "4y896EJomDdfQ7ynUrYTtQJE6Qi6bV2Mz13gMXtkM7QD2QtH3UiieBjx9Wc5tkaHRY3cvbJ3efoq93B1UDHQyEgT",
  "key2": "2VSKx7JPDQW9VqVLiD5gFDecMT7KPXskQmTbSDmM1pagaJsSAYdBRykDJG8UPD9xR7kmnYU5V6EyhyaJBtRXF9JX",
  "key3": "2F87RvJykJVtonRGUjVUnwEYXvG93Tx4dD2XWEHmGnfQSMjvNCJVJVCtkAcuU27vCzyKeijx5QhM2m7Azxombjkc",
  "key4": "gyjH72mg28qtMhgEJtmwUXFtq3oF4Z9GhUv2ZRhFg6Gotdmdc8X1M9uUqbsDrFsqiwmKvkAgSUW9Sy6FdamHit9",
  "key5": "3v4JHQyri2UymWVGeBrYfivSF4rDAJzwre894pPfvXbYcVJbzB1UbyP5CqHMFpFB36bZQn4hK8LaFoFWLD5XE9aj",
  "key6": "98ybec4VCder7wXdrTrjVg8VKKdW2eekUKjtJntrtYD1HCjN8AjJcPEjGp7X64nkF2jk3bMgeNBms9jrJTfbPAg",
  "key7": "2Wws8tvECttTVtdeA5ivCwsjTdWznuaSTAsodsNrTSyVVmUCsBsm3QUDsNtqt9dG3xVGL86yzh713MK94bwVyxLZ",
  "key8": "2icbvLY1G9eC9iBexHRhMbRNucwJayySeoSpMUrCSfXVMU6PXktejmW8vgLqo9jSGZfGNg9VNeJezUSotEoGmfyC",
  "key9": "5igx5Ztc3nPjUUnbqBw6nF4GEn6hw2Wyednnc9spsaZGsqTRUGjFmiu3gkGA2c64Vs4VxBoUAe1xQwmqiEufn2hM",
  "key10": "5NFk7DgB2S1sujPpaH64VKixa8SSpW2McaW2TNJbvFnpnQxcNdag2PjxpKCE7borsY7L6qxnWb9xQzhVpweDu4tM",
  "key11": "4h6oszBKpLdkJpkUQQYUsKh2qDqXzXSju7bpBYBZr6d5gSWUVMDeGaqgCPFwVQmcWKjoxNtnvBxWaq4qJkG1VrRg",
  "key12": "2uwPn7rK9688yowB1ftknwZvhp8sjzTGgzaiq2VhzJXA88J9UEci15At5HEfWhyzYCda6dgsc79ykEqT9ReozDvo",
  "key13": "5xaXNW27vrFqHkn8UiCcNHqSKWryQJH3Pg85djds2VjQ7DqFuEZTs2Qbi6SjVWrDid5kCLuJHCtEx7rgbaRrijkr",
  "key14": "CbCFLQCGVFWBBN62PPfKyfskoanF9LhTNrdEXbb5YAs4Z7XT8YYvhZrkkr83jCR63UuaPNifntLQ1jKoeFSj8Xq",
  "key15": "26Yhw5o2YEWQrXc4HjLa4M1nhDcE3j3hQrMV838iCT5bPnzCKecpftEBXSueUqSs4RJp1PJARCZT53ErvcmSxhPC",
  "key16": "4fm7eY4ejPL7uuPZ6HGTY8WknUcBeeLKKSsDximRMPdBdLkFtMDpcCEt9aQ8gxD4cfQSNdNPRjQFfPSbBgarkp55",
  "key17": "53R8Y8MoHF5u59dCVduHJoRZqxbvX3Da3JDyLiHc1BcwRMDeSEiuGHaaz8KJ9DHqAhFytKEKPeRiMERTTMfMSTC8",
  "key18": "3BUpGYePeasGSJ2DJfn9KxdHhYvs6DcqZ8r9sVmeCifgjLoty7XsVWybj179LVGVPScdvhz1emFResAUg5cdUc9w",
  "key19": "2M8vuwgM8QaTkJCVq3kr5L7R9rdSaFpQaBMUWti5RdUmRYVvDi1RL6Tq3jeWXn9LZMj9SxgisbnJfvzq2NEBPa1t",
  "key20": "aKmu66TTnfm8MuDxxWLpz9s7RSfxZRcFzzCvgKDqHuRSAuzUPhB7Mam8eHt4dqGijVvPuQMKxf1Rnk6ivVrSKiL",
  "key21": "21y6CZsyf5wkT1UFVR8c8s2SGLKtf7hDkQxWVW89hKLYXszLru4sJs7pqGKprf7B5WL4avbcFkd3biZY9cajRAs9",
  "key22": "u8ZWuSbhsvtCrapnow9D61iFDqtSBDgg91NyJca9v1KkLgFQTjtjdijvhekhMgV3K328gXdEUNQj6DSBDoLUaxM",
  "key23": "8z2uJHjx1zuCoR2NcduApM1SonqLVca2rErkXi7tCd6zVjgoMpnCCchgTJ4UeVFCeFGaRdi8TcYsQ79w3XbMLeh",
  "key24": "3EKan2wwA7a3DuM1SDWoe4HA49HYvq7jCCBwbRqGTqQRckixmpHqqxzM3FnVm1hdxXC3VKxPKCAGy5CKKfoiTXqd",
  "key25": "3uR1VJHUXN27BhjFRjTHAEYReMU1x9mgKSNAeNon42nhipiWzUqkzJpgsu8DxxJ49q7CaKvo6cpYXMz3eUnZSeKc",
  "key26": "22aC7RjZZde6YjFo3AwfbL9d4hWfNsoUDyTEGrafZLWNBbMm9VFhEgxAHNshsBj21RkjDDL5jNRZ7HFTmDCjP5gi",
  "key27": "5aZ9SoVRpjrVFYxZupC7tmCEN8eJjKmm7R2td2uagqTMHzgUeq8ax915N3kMc4VbFkC1kfuysfpHLUtwR24kWJXh",
  "key28": "4FZWyBZeho8HV3LNArM7ewxrL5GaS2tCQ5JjHGVjsMaGPxSfNxg6tw9xvqrBpJogHJsE5rvWGvPF29FpcVj71iFk",
  "key29": "4VGvigTbZiDgjG19LqpbWZKnc5sk6LLKY4FjiQwZgD7pXExHDmioroBWTt1G4WmzjhsYFRua67pgukb9kK7fLVxs",
  "key30": "4vsAi8uJsFbui6Bksh3qQVGeU342GKnjofs55TBk9hYVybPXfdPtzeGmZRoW6jxCbsgNLmU4vH52F454Xk1bnSdM",
  "key31": "5Gqgv1U3rGGWnqVoUCZPcEuVxMx8BH6hMNSmuEYQHNh9XLmtzpJzrsZ1MqNmszcVnUNSRgGpwhQoLuaAvkXQ3xva",
  "key32": "4EKQeWWzcD5Mgtiy8XFaUsdsL8LDkLQRZxXAezeC3e66iGv33YZVFQVaQJaxPhb5g4qL1jjzGvGrQwork9oCMVGf",
  "key33": "2wDtdL1oiPg3SLQ3reU3MAWFnZC52rcy86eBLAiwSWZTz2o5ifAu6Xs7Y2BxMRYsCGCzFnXTejXzRLBNBWt9aFRM",
  "key34": "3kaztLzCAWP7QENEEDpgaBtwyBgSzi1YhSgeW5xmptAqu6y3KzAZDxADkWEBSAX9UaMaxTp3avMFTybJmBFAnaL2",
  "key35": "4M1PJBXpKfV6HRREVUkUHbairiirixoD2joGfryNxv4XHQq1FF1p61g9iSRmbtSYMPq2DWQzQpJVNwfBYay5wZwT",
  "key36": "t7AFzef3cmRcgXfau3FPjo83w1evzCuV8tBJDAFN8tuygfzNnieJiwwYL9B2o1KMmdzje8JsxDGa7jbJa88X3Yb",
  "key37": "5HANmwQBLtu6xfXkVcVPVRanajnY73YDn5GYEZQQ3nGtTs9qoKAQoRKkWSWZDVBBC2mrUSrPpqheJJxSngzMhZ6j",
  "key38": "5H5JSYvXwBCEebTEaytMEoyYZaJyriLyWfyHo2g6eojmw4n5rj4YQvwB6LLkB3eTKgCNofxenQJ85tBkoPo1qGcW",
  "key39": "556A6GhbCVSkjQJ56uNiivBVYrVBLQTd4hArRc3XdNpeG5G7FpTsMVbbbfWHwurDTqfmZTR2Rpk7g48F99uxytuh",
  "key40": "LxmNQTEJ3kB9ckZjthAVM9ChGmFhCvfPUP26DwKAV7hMsjKtzauZFXitoEwLYuSvYe13Bua1gpACZ4pQ8ezahx6",
  "key41": "5Z8NkHd3AcSGFYug4ncjK8TYcrSnd86a4Q4jErkW7hTz2JW1PJSPYXNjzYVLTMSbGrqDTdP2qDxqKqT4RjktHXTP",
  "key42": "jF5CsWi9U48xk9EdnC9PTN2a5yb6Dm1DcW5qbT8qxq5Kmi99xn1vCNdn3od9pqa6bzUr8FEf9tDeahQzSe2ny3z",
  "key43": "53q3FBXuyFAE44roycqq3kwD5odvxiFTgi6GLqpJu3GDDRUMUsbCs9W3ZyQNDdZfTiDpQsPBUrovfQFbFQ4jUwbM",
  "key44": "4T1TnrtTq1sGyXpFz9MGiK9nhPDx1RDXf12RK8Uno3WVfq3ESyp5Gqu9vUqkKXDUPBsXSArsjp35gg93s5Lv92KT",
  "key45": "2tYKsZk5jAd9m2kBKpPjzP1WdpdzkVybqXPVJkJAqFwJ8ouWbwU6R8qJQmNhN1xPPRVr5WteQta3i14nAUEkMffF",
  "key46": "Bpxn7A1zoMRLe9ToCXNwhzwvF4fkQGoDabmRVos2wuaFhMAMvr7xtWyNLR7sKdminoUxRgwwgy3zPmcsSczKmpg",
  "key47": "2oYkNiELMrtmeu38m9p6c4HMjAC5XBtHZV4bDzV5TWQ9F65tGeBWY617CptYeYEhQ4k5PkbhGywX9Tfv9nKweHkC"
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
