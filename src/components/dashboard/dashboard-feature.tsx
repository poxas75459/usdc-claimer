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
    "YWzRmaFSZ5gdRs3eHVopCnV2eHEfpUiWixxoDp9295jc1qnfk88LYpzAL5e3yV74c7BM5NKnq1sjH9ahRNoV2xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYWzh5KmN1D6sRcEV7DC5tGaN13Wymoj1uxH1c8P85AZW3zhUBTQ9wMfX8oR2qv4nVWoT8EBkNQX15WMAjtZWJC",
  "key1": "2QM2ktpqrcJYMx9g5iWi8kDLwPoXwMqdgX1NLtAxpd1agcKc43QGkGh7JtGGabZjzD66Mpfcp4bYUQ77W1KHDnKB",
  "key2": "Tt7gw4GvWojUDorrRnQFvs4SvafKyEyMoLfPJPL4iQx7o4AGN6YQLyw6Krgz2UK3E8sPhssXjMNRw94eW5sFzxt",
  "key3": "4vDseJ9cCx8QUETJfmDuQdviMmLN96NSLh85hs9DSXd99KJPsF6CbgEbuEhBYjZ68kou2cajJFKdJJqNfrixLw7e",
  "key4": "4VC7AcTNxU7gXFxDPjwLkJ8QU4WmJvZysJA7vkUgDV5LwBTZ8UQKZjxhWcQ3oFAFZqibeMVZsojoxAdVNuBHr5VE",
  "key5": "5aJs6XERcGyoZqQQgiYsVEciUZPAjnhpy8aWJZZFvcgfQo2RDrfyHSHhZPuKjzDo46yi7xyEbrp6VFEZ87Te4RBR",
  "key6": "5edajFaKQz64WmphF6Y34GVCuURYH6JGSwtvJpBj4GfEvZZ8QaPSoRMaJa4iF2eiRLEnrsuh38NiLTv5CcnktXzJ",
  "key7": "2f659fHCGrhG5ZdUazBcH7nwAQKHCPdEQqCRgRvxHxKzcxGaPqp89hDUt3GtsJxuHqziD1eM3yojmE1SiLGFtnYY",
  "key8": "2w4GunQYhBtk7AMR7iboYyJTxw4vwTvC1vMbA7WE4P9PeoxBrTbDKo7xc7S5RXezBKtKjzRqQfBqjwN5V59AbCac",
  "key9": "3sqcc52fCfB2FWrun6VZQKjKVtnN9B6W5dPtABy9cnEFke2GRtuR3CpkSoXa5S1h4vRkEosESDxPayhPA1Ym5CkB",
  "key10": "48BxgiNtE2KrSWdpQQFdJDShbAr1S827fCbsbTZDAC2muSj64speHWfaPAHdhpfsTrALQuojMCgccbXAXQ9ANuu",
  "key11": "3LJGQXiBYA762KWoSAdjFAcbcVyvoKZuAJeLeBpYECJ5WQjTk1hu9jEgLoDk3T8bD45NemNcxFv79uqViDbDuk1A",
  "key12": "3Ysg3FEG1LPa3Hdci6R8X2WYdyeDRo9fK12TsDSAbP4g53xMikGX31pujuHsQrtmcPmS72aEhPmhHCC8x4XnvSD3",
  "key13": "45F5MbpVp91cDQbYSgYEDt8AhrQv3xeXqRqbBrMYgDpTDrqx91R1Ttvuxm7HTmvGv5yQhEaKWPXZzu9s2229AnKJ",
  "key14": "63Uqd3a5YR19SYqR1Yap2q9Gqrv9Bumd4jLywWxuqMLka3vreBB2XnC3akCvdEbZoWvkbvqGisxPNT45jXQRfNMx",
  "key15": "2zNqpa7n6V5nPYc8rzDovijBZKurcvJUi3yw9vjAyHHwkJhcZJRuvBP2U8imskVhpqXM2m4DDaWjuqEJGXkiMPwz",
  "key16": "272Qyk5gRQKcB2Z3JmHQG1WQmq8EZwiP3G2KrhFe46CCxfhsscbPVooEoCjnPcVg22riYiKqUswKKKo7Bpaz1vhv",
  "key17": "35rE6SxXdoHRHBNmY9mA3kq58wNUPVKwGJ75fUb3iKbgFaGrPbVtC6u76zL8t9idix4AjppM7HmzCizEEgKPrLwr",
  "key18": "2jfcuhRRqe9dUPkmzuxt1BCYNpk4jPRamQH5KYfQH97mDGTxA73rcitWzgzXXhuyYueTRfetCcUdyoBAoWW9rRKS",
  "key19": "5mpoATfgDAeUqWi5Ths5XbmAaL9FXuURXDXHEq164dc24KrRtJtQN7gYYUbxhotXHrJcaZohTLXMqHJKA265Y3wY",
  "key20": "Vf8dkCVhvUBxaYbF51SwfE2d596UPz16cYRBjUkagZepG2abR9LkDtt1ByCqyMGd7aVmYcrXrmfGH3TabuexhNZ",
  "key21": "3kz6k4aM6eYEZ2BJTPxiq16ZDJUBcsFnZBhonTydWmkLJi9zeWwxh3anmG67Sjrj6q8rZSagTC7tZASH2AtGxjBu",
  "key22": "3JWz5KdcS9ZWsow971ZK8rMvVLkgiURoZYnoqVa5cpfcz3z77wK3sURbocPxL67gMZvySgMUH295iRmQESsSynXC",
  "key23": "3JwP8Eoay2HdhrZ9CJnYuVoukdyHm8xVjJhG52S4nb9TUaG9puuCd3Ph7A2hGLY6J8GkyRUYCZaRR6Dvn2jQEWqq",
  "key24": "4834eXTYKrW4KcaDy68fGTBgBHb1MHvgUgL2zPgvnMTQY1FbQxjAAaXHUH5wGomWuS6snd4CAHnuRXNfDZ5V9XoK",
  "key25": "2pu4z4GR4hvDhNDjqu6fSv4THThTjufgCfKYXXDEwb9KFMAF9cQoNTU28c9AGYZcnxDCxixjvM8fWceezq4Uekrd",
  "key26": "52u9ppRpv1RX8pHdKazECgkc2jxXNXumLWtnsQFm2Wm7jg8oDSjE5vHQTYSodQvtLU3NHAKi4wE3StUu1sm2mS6q",
  "key27": "62gJ5vNLb7zN1ggH67RPRkUb8gukVfqi7kGU8yhcpbz5oq4ry6pAfmvbU8ngJGTjjwoMirimn1oPLVaX4yDETK2g",
  "key28": "55cZ6YStLK8cLrpSU2FV7iGwdH6HSzsoTUQFtbCTvMurgTno813h9cZ34jvTng46QM1qXZ3TkM1HWhExovh6ehiv",
  "key29": "2iN6rUhyF9jnPvsofVU8sY5NRUSR3Scj6cpUeyiQs4E4beuHfsJhaWbx2bm19auvu23Dsbg5vLqhJyB9cPxrE8FX",
  "key30": "2dWur7KD1Epv3J6SZi2AVXtakxPAaAdJyXGERV9RVvktaRrRp4nVMqvCbSHcrQ7ifV1ZD8DtGhvL7ktkJU2RQRTt",
  "key31": "nWDUa2eUmL7n8KcfDrJTKDYdZuzVuvPuKYhuQmG1byWampQgWyiQiNNYbxqqBGbeY7VMoQGG1hZwAJW8j1mq1VV",
  "key32": "R196tPvKDBuD7B88Ne65X45pb4uvpBpFMk5bQGgpdSUycL6aKVVffZYfGJPi4zWobN4EzvpcsXybWBiSDFtMcev",
  "key33": "5ioFR1m4YVmr2ccmLoR9oHdcHkTBE8HpdcRzML7Z5S3r2bejrtEBufLVGDwmGLXupwXPx2nCfJDE6nRTSwbLoZHE",
  "key34": "5sa3dk1KCWnZBXsSbtdAM3r2547bmyL5gcePFU6gRKCkuFzwKUDMAGfv2PThZodJgLV9NVdH3NrkDYiGeLNjSq4Z",
  "key35": "3bBX2gHS4uufZYq1FNc4jog7LMnAjkGMFaGZZbXNoWcDmzm3wKfXGDDV5a5TtyqBWKTP6RGrr5Dq9WsxYtABCgi9",
  "key36": "xYx6FzRaqLexQsQEDUKCXmmm8Z4cdHvnM5aJdP4Sm8rLrin7ttAoaecB849DjqYgGKGfUvikRqLrGWBqxuZoNfu",
  "key37": "3yDiq1ftGiCmG4yFGiKe8mZgKdFBJvLX1d6wEkuR8jQQvnJJS6GdRxtfimWxFXQYRC7paK9HNLgT6ZQiri9eimGi",
  "key38": "QmYgSgcQxVsHi2Z55frEXfXU967fAjx9TEcoC7HAfr3fAJ3YS84pVYpNiSh7MjSyrQ9ZktsAgADXFZC9QBTiKjC",
  "key39": "2Ayzs9xupHgZTFSXQaBHH2UtP2MtraPZPbfaMEJCHw9CvZ7sr3UvVhsXTSawyAp7guFjMKKCeewmVUU7gp28ohbK",
  "key40": "5dEzNTicdDrh6MYwpqm8oXfwuxhsQMsskbQN8RWckofS2pidBx1UEbEkTKvPgUr4PDeW34BtVUFN7wHWuEnFvacc"
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
