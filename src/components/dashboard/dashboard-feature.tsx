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
    "4DE7fU53dDXVbUymmAX7infhh8Q5kTNVdV55a9SDkJcoT778DaBXL8BSnxKD5yqR24HKpzJ9RZhkBitLJmHVvaCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzpXtvBCe61DsuEXcnLSG3HtRc1Hgq3UUvbxPbo1Y7NjjpYkYG3PHiFMTTzHhEUW9zGifCjaPzr5JpUsEUwQwg6",
  "key1": "2CP4fysNRg3GrDkjYU49njpwJAiWkUJiTwN4eSkdZ84V72ZGZr4G1aiKHrNJBDEVcydFxqjSfooEZ8n9UcNjCu85",
  "key2": "5XkAJyxFcuoJ8w8bGyKa2TtNHjEx7urHaWwuz6Fa2REn5xob7tKwf1LK99rQFrcg413He6JV9eQgfinMXwTjPyzj",
  "key3": "bMs9Vs1gkhZeQquNMUtp6fr6LNzCcyT5ifExT4TpSAjG5axNvLzGcrj6nabdtiLut59FatuTRDgck2a9VVaRdSp",
  "key4": "4hHMy4ySKXgwmxBBS7a1Xsj5KJ3nYXKir8rnRkge9S9QrW9ufUCwyC6H74TYEQartgpvRYB23hUtNT12A7Yk3P1e",
  "key5": "QphuwZgjZUU7mzYjj5W5QJN7owYbUAc9QXF6dqHRdMo4HjG4CzKUaVTzqKH9vPVCSystxtHeH5Y7g4Pgp8rJHYF",
  "key6": "2hYFVwbeLTqPADpa49qqMKDfXbZzMfXRNb72Q2TwvdzDLxTRJ6AhMx2ZHfoTecfYnkMu9FboEbYfVoLdhQeCHkrG",
  "key7": "2QC4d8Efnqn93bsy1uBWgCcXhREzaXw5rNTxjEGw6iJQZEj6XP6AvkMPS2cMKvc2s3nrmMWRF9s7ZBmGSRiuDPGm",
  "key8": "3av2vwpoEpk56ofNWdu7F9ckgA4RVD8FP1z92VbpFA8du9pGveQUpQuQd8BpMCqmrEW8Yt5LxL23jvy4XLfne3ff",
  "key9": "DDeNUQCm4FzgSxKDjaNAJSzUnF3DJyjgC72Z7WXM3k59yMwny4mcZXnhGfWb4UJJCdVXpS9mH2gyWv4u95DSjqw",
  "key10": "5zWNrxV8nEakTj6JzgvZsEaKJEAmDYJS3PXDzweGveZunvMXvbJy3nrHkRhck66mkPAvsQEFsyg3RWXDw3vWv6jR",
  "key11": "5RnMFZuhC6QLq1mwvxdc2ivwUC2QvhVb4BALdfaGJW3QWquvRAbroe3DT1txk8t9vTUqH6id74ULDcqpAqoXPhu1",
  "key12": "65fuK8rW7od7hZMPsfj7nt6B4vU1xHo7ERSEYRY7LVk1jkWtokfhrNLSTNt1WdtL77vzHbHW9RfnxpmDDiHxaNck",
  "key13": "2paKAyTQ57xtRCt9ojQo9ysUqL7YHF4PQ1Kyg4iNXuAJbuoYPRS892oBLGXdUgYEVcxH2w34gBPUSuUpPbBcdnPA",
  "key14": "2iRMoNF1ztLe54R52ZvEgfcd1ZngXLRRrCUTnXB1XC7NDJh83Ravipn2fCqpXBg83mjH6ipzkT4biUHwD8kAfGWD",
  "key15": "3RLC4HRjcAeoiJfK8ALxtgy5qVqiDufbB8RoXzdok7ya4MCUYi4xfpnahUshKNSNNAUBTuLj5Z9pjJ7qoBL4Pypm",
  "key16": "5VYm1FSQJc8WmaGv1ng1tGugUZdBfJvVtXjt11GMZsPtqUygxSiewre1E51ccL1obPf1FhywSHarLP6bvw2BrvK1",
  "key17": "3VmZbsEda39z53YdEfzWp8MDsgho7Zio9EdGcNy99zmmCcb5VPT2KJSbGUtrxUXdmvuEfcPKmM9umERdevAbAnKB",
  "key18": "21GixYHEAw7dkvwT4RBDo5g3jbv29CpCvb62nMgJpG7Me1cTktzpV7DFEmikivYxzzhrKZaupe4ZJCqo9urRTeFQ",
  "key19": "sfS347E9s1ECd6vPr2bGwksKhhEPucogowQR9DabCPoySPN3EYxgsNerT8KTrcpxbrxhDJ5472FbhkVv58ipAaz",
  "key20": "4xEDZDapwD7szAdRmJNEm6XWVQvN9voGfCmbu3cikV8i8JuaoEyryvagmzEXWAtioiUkhdS96sHNGs3HYFTEAN5",
  "key21": "3hvJWAzJ4tAvjAj8QoCVDQ1Z4T2keBknq5sc8RR3YeJqHYzQ1stzNJcpcDUygqciKop4n2hQdnKhXHy6ipAMMh8D",
  "key22": "LQF5DXFKNC3zoUbM1RhFttuWBAQfHurAquTu9tBW3iVdZHt3oYsAfUUoGQpz8SRZWWRotUGqjkoz47puCTBedxe",
  "key23": "5zHQkYFs3dPEjCA2t8dNFNxoobmQwkuavqn2XgvPJCtFtSQwCTSTYCmKLjSf7ja7u8Uero4VgebZ3cXCWsa6NsQa",
  "key24": "tbz1BmRKCcxD4cwmcHqAcdQupgTAYBvc7Sxx7buawnq8gfN1yURMSUE8kaGoG82ehLAHjQDDXE9uFucmLKeb4UP",
  "key25": "4KbB1e2U8JzUXBf3PnCVRQnN5XTpPTr7Np7Avgo1DDm9h5X4TJZm8tSkErGSNuiHUt9jJfkLEKN7ozkzhoghkDxs",
  "key26": "2EYVwupUo5ErBFGjADStBTM2wbnhE7EDm5xUm2QqGytdHYsihLobGdGaa2fkX1TDbU9Z3c6hAYuXXGHfWq48ZsCb",
  "key27": "41yaQyGrMsWxjMYeBzZAYVzGJtHY6rEXAJrBDRCdrCMrewHZo8MdYfiE1kt3j3vqoTYKWffPYPkJhARuGEdvXQZe",
  "key28": "4HMaUnX55eB6JvfKqZm4DkC3bQ7PHV4xtunhd3XMx8iCD2fssRRxZfziJqjxoSHuNKM6tFs1af5B92czBkKSKtn2",
  "key29": "4zcLLXVcM73U9QnLkyofgp5PmgcMiToen7C5esSfT8McxAf9Q88g6DGpvcKo4jbUn99sknGLyGbSFrQNov8SqHgm",
  "key30": "3SYYeeqstCFKit9KSZiDJGBBbZUPWTfhznfeEAzC9CTDLGRPWYQDCMbnVppbcTyWuverdcq6SQLXy89EMugu83RC",
  "key31": "2pDqGuMYPemRWvPTjAvaxsusaxxpp3g1D1TgKYVZPkDuLCNhw3Fwyeqz9mzULjogy8ApCRpKE9mC7YFywX7hrLZ5",
  "key32": "m7aoSG99cA78AixfUBtsTkp6nx3JiWQFV8NghggkfBBt2za5NN6Mz9XtTbbKyxmaWkvqRyEuDzraof94vHhpoCo",
  "key33": "gt8iPPcHkq7A8G5TRkpHrFC1NhFqoYCxuTJVnRrNiXsZarMGrCNFVK1TvhKUg6xiRNBhY3D26RS286qqCypa4ym",
  "key34": "3ytpa2wJ8fkx67PS5QAZjdSM4HUXvXPAtPwt26pdmrp9QuJaoCPpyVQgiz4UamwBD7B1gccBcewbkbyRFKvuUwxk"
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
