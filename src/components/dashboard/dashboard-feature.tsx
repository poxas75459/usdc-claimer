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
    "4NFMMCNi28ZKkMgqEx51TViassoUHCEFXwwk4GHUGegmu9qU9okMA3xsCsYmWecjrRTESg1ND3v26pG94QFtTFQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHho3Bvq1gx7bV8kN2BssVFtM3M9vhM4gun5APkjRne11vPc84EpGSLhXqZK96iu1c6az5EV147d673zHRB3cLW",
  "key1": "3srjMgEDgRpYKDrN3gNyuhf6162BhTVkMqiAUEkzEMheCZ5dL5xpbM5SFvDC6uwF3SY7RqiRPSi3uY6VgXMBhU6i",
  "key2": "2hQvNhQoUc24Z4geBb18RcN2wNK72qnCEHRy8xTdXoyWCcnv3vAataVXSeFRsu1s2iuqtEag1poqAwKPxGzZtmHL",
  "key3": "36o6maprDPq27KP9ZcRKReKrwPGGgCf4sxTLW9YqpQgXjBKuGZFCiPbJwaKd5ZbCVt8AmkGzswELS6ZXHVG24VZB",
  "key4": "3cJm4bjLw8GAETHDBkrrsA8d5v7vk8SZMswSsSvorvqaoTi9fAtvChSRszcLaHeaCJfiriKwqgsZov65eTNUWhWs",
  "key5": "K24U7BgZ15VNRC6fkyQxTEuoMgqud1dEABRBUfLDSEoV6pduQUC7z1684qgSVofJLVxNWiM94CLgsbV7rTmMaet",
  "key6": "4CWcWSc6WYZ6YyEscgsjm6uwPNmqWgR6KsSp2oEbsY8Pt9g4WB5bCTZF67CGXgQ13jR8kxhMPMTGn6FJJyYSLRwZ",
  "key7": "4UZcTexGRHoPdRh7VB6bjbBnMZ8HKsURg8Y21HbAZnjhrgzAY1aGqX6EqZmCWpgMgtRTk5mxYKz5cy8Ubb2p9x4V",
  "key8": "JdJeFupNdYAvSdT9nrUraWNa9DX9zibUyvnQMnbVMCnDH9u3jGPg1EfxtTAMNzbHh5LdpSaBrZLJD3b6RUPPJEQ",
  "key9": "3QijFZJkv3hsq5kuacrAra6gHxw2n2gczgqUSZBZSQWpvrm7NE2q1tKEiaGh2Su8e8CzzfA271CguMhKte5bQaqP",
  "key10": "5MFddDdikpfxjRKn2DZqtTy6wGoJupbrbNFPpyCTHiRNX5e9ZspXvrjGvGadbBdStqrxYuHJZt8bKmSUEcG5A9kz",
  "key11": "icoaecEF657XYjM2Sxbgqqa2DJ84K8QZVncd3HnDaHUGxU8BtLyQunGcx2bPLWKpP6wgRpsgE6rYpG5R5rkuzXB",
  "key12": "5azoLtY5boNSm7qTXrdsT1hkoUKo726pw9A15dWvA9s9Djgm1Wxog5mSotS366q1Cd7Pp3EWQzmNsFRbYhqDrPEU",
  "key13": "35k78FwP1cjNccRDWNBhuzULAc6g9GCpidMSNk2us9m5tMLUm9SMARRwGLpsw7fUu78SnMD1rdwg3UAPG21mhRRE",
  "key14": "6778fdBS6QqHeF3bKZpAU4omQ3dCxPSsQDrAGCFFZ9NNbwajXARYx13uHMvBUCbUwZ6qsw8apU38Yuxbmm7iZdGq",
  "key15": "64eDmPEUoGoMTmGcSzLTvDfYQfzu47215Qm5ACZ14YBHVrxnpeh3piJTykXN7SPKfqhKyKAET1oDQsykwxjjcVah",
  "key16": "Y9cnbcU51U4V5LtWWhv1Hbvdb3m3C9GTbrybMfPEWAA1KP3XwmjzfHCVmLi4J3dMi6ZF6SJCeF4zejaG5SwEjMk",
  "key17": "3KcGoCYGazq5eCiDtonjGbSKnE6XHFcqUKhpNCT23oYpBRCaAjTcvbJjdVcMca2FfqZr13jieYdRhNgjfmP8wpGm",
  "key18": "4A3fbMpKxHB1noD25iNz4W6HvNXXazbwTdL1KgCAuksNGSQyfyuiWbybfic6bvQmo4SbpE6dqpdrE4F9yxre18Nn",
  "key19": "owTsZQMD2ucSt9qXvP6r3NhHCZwg8ZEk88PPvpw8rXiQjFwbS7gPuakcBHhpcNxe6AJy3bgoYBLyn86HsQSk7uR",
  "key20": "2anrMQPRdV5rukHskz9dnK1ztkwKB7LuixpNBR6oah4cJJC6N4CFhtWDrrVJ6cybWZ5ebXEkJyjuggR6wLmQKofG",
  "key21": "286cDJVPu854CKT4FM82fj6nidcSiQd6AZC1eq7A7HaPRNVtKgxyEioe7Bu1kxafS5G5LeTALfbtB5zg8EkeTqta",
  "key22": "5tztYhYN2uXeDL7x1gH372Y7hcVmNow5gaGpveWtgZ9e9uD6qVv7NXqW7nGUrj9h5usW2nga8H2xKvCD8Vnd48Eu",
  "key23": "Wo8JJXEWxjBfexvG1ig5N7FM9pTnrH3KpA6Qpvx2xMzCN5GcRSUvNWZqQ5X6kVxnkcQ8gnUAxowGs5Jvm753VYm",
  "key24": "2JCSgvsZqtaQpMLSC6xejzDVyy4hETyREEnD2mdmk721BQ31JXGMJvTZZxLoyVVSGvePoQqrWfrVPoGG2iTh3ax8",
  "key25": "5sLXUjepDxk6L4xfW4SjkstmGTyQCpsDuxC7cbtVtgVNGwUyPxUZjJivBQsBDeQhtif9MF1vBNt4Mh1Bq7XawLdc",
  "key26": "3veQMq2hb2A22nSWtr89SgjQzUthZ7nCxFaVsmcRWjNZCPiEWR9gB5zrqhNbpWCY2XuBW1sEf81Q7WPYREUZVPP9",
  "key27": "5HtQwHdKoy99LyhmUyPSB2kH8TVwWMpQ2MwNNpVNXab6N1jYEwDzHCTqx7vmvduAGHgZKfXywRfDpB5qz8CsAkbH",
  "key28": "4rftHfJX7hvBzNByvu6YhwxmQbmJKy6ERiyonreEiZrGDKHJhzNnpu8kosp9ABvZiqysgArFwcSFTEvijLMpH9uu",
  "key29": "3mih1aNVWRY3jJs6sPnNzrTvm5hVtUk2kU3fbjvsyDXm5QYTEwCYK7yyXPQUwvqkMBH5rWLVbRc7U51mdcWYA8hm",
  "key30": "2FQ2PHbi13goi26y42CFkG4xxgfrgeatVAFbwXLAA2YMF4oAzY28zJAZ3XXkWNa5ooPssH31YmkqTKV9YRPNYtm1",
  "key31": "3aH2vVbaKekF11C77htRfH2du85onfanDHEf14S5S9tMR16n2sRgxG36U3495R81xEemFjWqLx6nd4kmgaJPR4bC",
  "key32": "3ETyEY6aMEU7ka3fEHyHZADijQK9Ms6FQ21FFhqDwhLcEVkE3jBGAwxQXh6YWgL9VZQVVSvLEJWqCEgx1TpXqqVR",
  "key33": "5UmfqvwQDNkQ8JYndKguTbLb1S5m8FwoRADy6TgeSX73Ak5eRvipiBzFTRBhgFwg3tKnpWmgAhdFkiou2dmUJXLj",
  "key34": "ajfmyvz5qVEF8uLpPqinPhq9r6EYrNAYCoEFX5qbSvL59p9maKYy2uSB1ZTBF6MyUnYXorm9Zki13W6faFBRdPn",
  "key35": "3feuR42oDUM2mQSGa7ENXTM5wJpij7bXyz83vKCyDaa1hGh6cz5Jfn9TAbKVUggjt37V3nW7bhvvefNBNbYRZ39L",
  "key36": "MjeHHcsbvdZ5YWJ2jLpVujSweLMs82Yn1nHYyDEuKvr57bLiCmcCCCFPo8oNUZkKRMKj8JXQADumGkaT4SNXSZu",
  "key37": "2PuH3N7MvJ2ZhJ4bz3HEdMztFffaqUwxfG1tB3dGCncuWQsVA95y5MDWXKpY9qgxqS22f5TNPjQbY3BeEKtANKuR",
  "key38": "3CrFobYhNktRgnbDi7VvmgHrNptUu8FiGsV5qPuWAtHbkT2zDPLHbXdNqhuontghdxUcC1KJhRC15zhkamqx9X1G",
  "key39": "4tVcHPUN2BgP8if1yDfcnk5MVDmAdqupyd1q63cF68D55Wfcn6NGp7WJdj9p32utnR5jDuN6e3dVtmZZEZzrjYrW",
  "key40": "5rxdyjyhYt4PGYLoJ5YsspgUfJBTqdPF4ZWcpZpP1tRvmcatAsnv1AFCsYcZKs9bBNyYXee7rnBwYm6J2hEbSCLZ",
  "key41": "5DcTwXRdMv71VPs5iy7TF4XkCGMs7cyVeCxPEii9bzi64WbaaUUTbvoPWfvKkaw3SAZauxmNUsgR71YAmb4Q2qDt",
  "key42": "5JWfRjjpaPh6oaMGXF2eeT7Pt5hL48vdduMhd8TiYPSy9PwCPyeCY7fMBMUFozBr923Kosw3JRzbWmxMqf3fv4DZ",
  "key43": "34zooUfc3xheE92XMo7juaC32toA5WE5PjuKZBDvj8kQCKsJvw2pQ745xXxfvAx2Cu9NzBUTQ5B3GricfUZQXFTq",
  "key44": "45TM7mLHtgpuawdLtaDFBNgMyW3g74QXnD9VSF1RxEWg5G914Arptr7nqQsU6a39ne3S8GHF4Z9PJ6WvaBHnGio9",
  "key45": "4ZkdcxVq461fsLJXqWjZfMKA4qta6VpTK8zuEssiVVyXDQwgwmasowpTsK6wZbEE7xA8W2CsAvEFr6Y8Lyq5QMnd",
  "key46": "2cV4uw3YoXCxonBAnRvcNxjPSFdHCmcFucVojToZVSvNidDhHU6ZZSbJdZAfnpfAok3bD3yNrUkVpdBNi9mdiB54"
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
