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
    "VPToc98uuSZW4bmJYAjUkpuk9RCURG5qXrrpTJyo2maMbygYxj75HPE6vRS3dA3jAhkJfZguP373VVpausEGAWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1N3ZBvpc8Cy2L5Q2tEmGQw6VLkw97mYWfSWQnULi7QJ7VrTRi4gKxEzs7EAnw3U2rgnFpB663ARF5auymgXNSM",
  "key1": "r3LuDrvr3jWPDL7yZv3x9hfGnCa1T81jfoT4Jvf212MdVCRq6PFA8iytHnFEW54RZhNbSABwxnqbXnVeoJhv9bY",
  "key2": "5zsGyJpwTBKWmBvqj1xhffkfRVxqPbFGW6ttJfcHDDULxnwQ62hJAueqwdQ5JbyeQmZYc2k2DCvvGyBxqxYUxq2a",
  "key3": "2jTRmefRtHABGKybvbuRfDmi86ozAopmtLLtBG88c1are2owX8SwUFg9t1X2hRGWyAK65t1UtzQ53LWZKPRHYrP1",
  "key4": "57Y7Wn9Qagkd8RtdPBu1nMFzJYdNVHeum4F3wp61DgpNyUX9Vmmh3RbK5Lfs7wCG89cGMdyFYxidypUaMa3geP9p",
  "key5": "241htmYhmyX5waTnxGvkLKAxtRUAcCEsiXbkLEihexFRfqdGmTTrFDEh4gJV5PZTi4WAkKjwEr5Wk3oWmJW8CnZ5",
  "key6": "4aMSUioc7A7vE5E9seNTj6xrreacnqDQfWHGQQaKzKQxMdQzLgkdisPPn3wNZVWu9kvQ54HD5pL1Kd4bS1hEG3yw",
  "key7": "5hPDSYTJEkgBoLofj8LoFFum3q8bzmwnX8evYygpThDqJyyqVA7ePZhwXdYPkS44S6gDk2WWtgkDrWkPnngoe9Qe",
  "key8": "5piE11hZHt7WqgKPWcr4uLFBpmpgky3ZHBDTCZtQvCh1sWtKEMG8bqtDHr2d1KRETPAK4ntGgrSwWRMx8cBn1US1",
  "key9": "44ttFDpbhwZEhHkZo3qd2xpi3PrUUCLg9EjFMCYDvt3QbcaGvxnMpgbCM4JNLimHGc7YHkntwjbEQ7cdpXGENYbt",
  "key10": "3TBGqzdR517Lr14iCgg1jXiN9EifrAag1cMv2YNg6hyzWDv2TstKCKcLgdUVDyficJ3Zxg4VBCpGrTrVK3qreQiM",
  "key11": "4zzDsjBLtV6G4KFkp4vvgNWUYoRsA8PqsVQgquV8Sr41toa3cnQNXvee6fiKBWNapcHGxCz6pa8i6yhj7kSuxqss",
  "key12": "5p3nejSJaCLbBKXEVTWSkiUoujsaxcrq92GRi9Nyx3VHjTkNcHbvMKSPWHxcPz7wTk99oBNEfwvuZzTQZfLzcNkc",
  "key13": "2wC7afrmSvKn6BbT3sAkrA6X2JrxRM5FdHvC39rRuZxErwfkTMKoJWfA5VAftBJ4H965JTSr5aiT7zE3o1aKdeox",
  "key14": "2PvR6YFEmMub5g1MXk3E2TGQaht2zyA9arsfP9Ua1EDru7ar7ATCP2yg9P1VZPP1NCZjprjGAngnbTU46nLoaEKK",
  "key15": "5b1oEsQzjhVAsnCmTkc3STn3Y43YAq57aqBRNV9ADz91TYzBWJyRWTfHvKvUZ1Ar7xqiBibJF29vTooJGXst7jKL",
  "key16": "4Mmaaqa7bqxaostdjyDuXrcAUVVsqfqzgxzGK1fEPWu7CM4nAmj34YDXqS1sLby5yfdjc1Q8H3YyRDP9pxZFzHpY",
  "key17": "2bnTAPKLr4agcd7Mbg5K7dp9iNH7iqSpnmtu5BRcDKjRkmpHExVxyWB7R4tWprwujpujC8FwHqarvq14ND4SS5ES",
  "key18": "614CAzus6iymc6JFU61ZaUEYeMSyF75YRMdKJk3MjdFzW8Tgxdu27Li52nvK87fYxZ6rfB51rDVCHH6FjuKVVk5R",
  "key19": "8UC9QMNs1eBFZPnrV88Bg2ocWdYWx37GWs4aENqvWa6GrXFYjTLaxVo63CmbzfSkJSTqsyiQp1x9sdURa9TqWuL",
  "key20": "5dPUKtSs53QER8ZUp963aw7NSyyvaroMs5zq1sF1Z9q6iJLvYXjHJp6KMHFmMVeDD6grkuAPTRSQTDWcsxweP1SE",
  "key21": "5w6gZWcd4vEp3pRJs3UdxyFQDmR6ocE43MqcCd3B8gXYVUr92XrCtZ3qzHFKD8DjMx68efyC3ZzDP8Z7rWePYDJN",
  "key22": "2JEWQhux26WLN15z8wegZLKeATkKQGizkFrjTUDv68eDZjTrHULthqgFBGDWcspYDhPTTjrJSs1k5QT4w64a9dWa",
  "key23": "5QMv5Jb16uVjX9Z62kHtW3MWsKpvNZATr29ZdL11Rob1ixWZSu2Sch8TnR9yfTHwrFVNZghwUw8yDSMu7pdf8x8K",
  "key24": "3Nf2H4mPaR17DSsG1LJ761WX74m4vh2SFWL2Z6wW5TC8HthYBC8xxP6UkcHvwUYZUL44t668G6NgDwtmJdzgv5eF",
  "key25": "3gGDSHJiWyzMi5Nvw3uutNSrTpA1doXe2jNMXwC1BbMRtjq66occSv3wUmnHf8KvtoDTMWKrPronr8JeHFbCMeat",
  "key26": "42VstMmq3uG2zEiXnQSd93M5F5mGLKerP3tUYevSppFfEgxHmAEjZND1uTqBvbwWeK1GHHj3UMLEVTvXkct2QvQN",
  "key27": "47FNFXiG88pFfYscEPowXRyhwZjE1rKVZY2dvnfNhGj7Bfsqg9rDUxLLTXiATbKChUt6EWqCqNM3uVHgVKNmwmbQ",
  "key28": "67iWU26SCyPGJJgM3kQEmhUK9bbeJtgKxbvLwZNMuU52NrwUqdddWgL5oLMpF4QL55a7xKqYKTd2vcWpFKWdpNLP",
  "key29": "5yY3MxF5fppx4dp7iuvAm9C55fEkHgesuiD7gTbYGV4cpAkXC8KtNmpLf2PHXC4sM1UXBSatKpoGMU9ubZHUysKy",
  "key30": "3yt5JRjPy9uUgKsGN9i1hLBzJ6UbzvgFuLMd8ru5K4WJtRXX4o6k5wv6jsPTqL3CAGi3xcNZmjdTwhNDdiRS1MXn",
  "key31": "5a1QC4DzRyQ5obeNfse4umryhqp7mYqeycWTxuVdvx4omdZFo5DiCJKKh8fTkJ7RtioZr7TK1wKeBwqmYxT345pq",
  "key32": "2T883nVvAL1oCvqnAbKcKEXLy9zPBifefhk8VJzcPqPNTxo5WZGCNjYEJ6V7gaCuamehb6XoU61fkRYcrq3WiGg4",
  "key33": "Bcoxi7UBYuwnSeKoL1tdGpkot5XriCoaDH3FREQMTmo8Q1jdAECe1g9aM1bpvZPL1AH6pAv1X1JF5r6uoNonuLT",
  "key34": "3HGov3NB6XTW5J5XvoyLH99wcMsAbbYXATJodFNGHVgAN4aYJ71tJLeFWUxBji8YPWEG8rjn8G6dAp8KtHXVewGD",
  "key35": "2GkFbz4atdsKwgWhMET8fp5fgXx54tRJrHKy98tuVisNVzKaziTBxrhq4qSJbRcb2o1ENoUiGPZxYCqApjQ1KTAX",
  "key36": "2GddTnTP41zRMK6jXdMsREuE61btwUcbkgsYVtjKEvwMYx3gLtN4F7ygUQ4MrCZKd4cDgk3EhuaDZw6PaJHMwVRh",
  "key37": "fn15Eq3Kv8yHQhKh6u9TLHFdFFF1d7rKfiSbsB8RLTopzbQSuS4WLedmwziZLZtNyU8wTLqpxVrRzVTMjajU3m5",
  "key38": "2uGsoJpbN1mgw9VHBKMFgvd7LkgY5z7p5RGyr2KxbPjf2g1oKKon89nTRxmfgwVxvLTDC1Kh84fF96dJW1hSDSdq",
  "key39": "4BnMTUZgyPwq2P9qPq8jwE8mQwR6hGquq3Nrj5tYnBtbqZ8sjSwGbwHmN5iPuwBNdZy71G6VLgH3YLL2ZiF2foNH",
  "key40": "39EDovMfFuP7Wa3K8XQuqUdsdxgADMChj9zEWEvoJFA3TyfKDoxgUvQ1ry1fZYMHZhp1WskMwWdv3WNCHYnh2wkb",
  "key41": "3fSaZyMAcbyi51KT3TypraAtML5Yi8X3WBDSgzDza1SAWqWXNnfcL88QjAPVs4LcMttvvQUj7YcavmzTSyCSnht8",
  "key42": "vuyvapMm5ffF4RFiiyXH6HdWv9dZztAt1P6GRFpGsUFSMroPByqVQCkaqBPmyy3kvT5F58MXq2etqeBVpddP8EX",
  "key43": "4NVEiTg9hrYJE4wBrYouAV7W65coPhCmDqCGgXSD6pmnQskfwqcSxdBHbLXhhGSJ6L8Hq4zMqX1Gr2LDanmmfm3j",
  "key44": "4o3yU5fNiRGSzxojFmXmnMMxYm82zhQJdzLZbqm1cES8avBWMu1W7L8uFCMK6t1HYf8AYxLHJYwDsNZa9LKhBa7T",
  "key45": "3tP8igVmij7CzReQ38EXtxWzvU7K9JSNKzH5N4JrNSDJP8XJPWofTfafkUgY3kjZtx1CmHFiNTHrTsNwfvUpvZYe",
  "key46": "79AE7XQTjmRMReLQnsyV36hb4x9VnSL9EwaPWcdGnTSeQwQ3g3P6HLxgwwB6QS26n6keJN5nwYygoZ11EMLMZUg",
  "key47": "56A4HQU2we8qZgcbRShhrjbPqRDoPEu4c2tNKs8JbM3teqy3eMmSQvWZm84XUuA6FceAq2YB3QZtF61m9p1DLBoZ",
  "key48": "38B7wjrJ3th6Uzz4vviAeNPWdP5FKX9uXb4nUiR4niijJCeiCGA9TCuitmh9BHpfmewNXq8LoKb36WcU462wKkrD",
  "key49": "4RZ8Xb5bbJzKUZ8A4qcMCiLFhJKPo9X8yMTFgHPQtjKPsixDYic9db5HaJJwT1u6b31PPWrcWNa1TzQD5KXikEBU"
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
