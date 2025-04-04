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
    "4JEp3Tvqo6kMNi9XuYE32MpzXWxa2R7idvHk8cNFXYKvLgxsMus4XZfmucAQAZwurNJyWWtLDdSv9T4h1bcCFGTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPHUkV2wPqTfWJmKoEEAtCHC4aXd4emkPm4yVfUjeEiJcSP89bDH9x9uRM5ecpFNdDiTQeDgqZwzwN1uQTzFbxd",
  "key1": "23bCHLMMZLThwbEQ2JRuPpba8tegAtNuJ4AfWG2iFZBDXwiyWzwkFFNBHYu2gEYTPAm7ViK6T6hZQtkjMhj4PwNz",
  "key2": "2uhEHFnctggvCXFBvzURFQh5Hu44HN2YUvh8n9J8uQbUeT3R6R2xhxeazr9dBCyYCoVURs1McvfhkFheeqYJsJze",
  "key3": "2Gqwu2GQUYh7i3FuZbAvCFrXzudi4dYkmr4BbjapEJdbj5A7FxYzsTAMLVYdNtHY6q64Wey5Avw4piAC5Uud9Tqp",
  "key4": "3ctEZwsLESC3WAwCGYue5jv9Vqucov6YUHSkBzpYqiMAH8HevZXa3HeEMk53xopGs43oBjMXXzYzPuG7d8WDeLKk",
  "key5": "rTJS8FVgXwRQuKgiNqPcWP3dhacB7uMhJAiQW8xqL5iMNWXc2Sn5DCTHgwv2PCf2cUyaftzaqxTvCoWHUizTBpZ",
  "key6": "BYnCxNd5JduVTJn1ZBTHScgAQpPp944xtLcEj4TA9cU26ZhwTA9cvwSfAkS1oXtSikpnvjjwNy8KP3ow1gX8Ck8",
  "key7": "f1G3L7LZ7ykVMPMShizTyJMbvh5EJXAF6645fxiivKEnAdUr8WEBhLFEGkffjt8oXWmC7znsMoBTVLFFg5wu6eb",
  "key8": "2aAnu7YsqgNxYEQ3HLxh9C2Bz25TtGkh9dbX26pygXaEWKxPdaHmgPrWune8YjMhpxbJkKQxnZxkbLAVPaDskWWZ",
  "key9": "31mLCuoAMDHytHT7TU6YpMiWz8siSuBwjCJLyWsXGwDWDTisKFyCoKU41ZvM7KqvZmkpGh7LUy6RjfzsM9PpiHq6",
  "key10": "3gfDKch3P4sJBQcA5mNYbE9uwsvq8XT7TicoqFah2SZD4rTWfpAc6rawxwhrBSPXuySW8nsKEyzANAFv9CzE2cQM",
  "key11": "2XAYpdYXztYEn2NJrKa9ktSQo7TozX9vDVVDtbSVjWpz41jG4jB7fnvoQ3oFuFkAyk41wjPJZyyxCPE4epwpwhjZ",
  "key12": "3ZPuQNfG579LPX5oZ4F6syuoA8BE9QaJGeuKaPiMKVLADkM6YzBpfvKfEZFcAaGyb98QA8dXxczhkfft9vhgCFSa",
  "key13": "2iFinJsggUbr1UhR32pf7ErQugYf5ZJgdUfCDmBydRJ35onVk1mcL9Bj8m6tivkQuBfJsuAQ2HpuD3EyLunf2ME7",
  "key14": "2djfzbh5VSxMjnxiSKMC9mTyV1yq1mvwMZFgUfNLJFAJxmtVnCgLTeLhQcAdnYjJ5955r7b98qJg5jgXxR7sqavE",
  "key15": "4FtWVR1f8aPsrWedEVjQsvCjYFHZC6e1T8F6idJY4RhKNRjSuCiqgRWzgnx9ViueUHLPkzBEy4cdBexkrsNif6H4",
  "key16": "27T6G8sobbN3ApjiKYYGUSKy8KumPFhLHqa7o8yhkgHuWJSdr18m8iHNvrUADm3JUeqjSjdXn4HPdCvSTNjwVNCe",
  "key17": "3vpfEwnb9yjHg6aJ3P9MieyMrBBhWoDKAmW5zRBkDzZC1MYSE3WDad6ynZiLNotv2NFzsZojhAKCKtnCLsppzJEK",
  "key18": "2WkG19xM9dmUiMvy3V8MjDn9Y6MzNC7YQkusY2c967K3QNpVFe73HYtAkv3DviNxcn1vw6AnfMB9pFx7vVX9M37Z",
  "key19": "5jpmn9xgjoj7owF6UP9f4NXn4u2uAgt9uCKgwFKKU1HgJeXVHXRaZR5fGDR7s2e9tqYyo5rhVUchp4LZPhqP3gSc",
  "key20": "2Kz1rvyJF1NfUVsFn9EtMffkUJG1HPhXJmdNXgiaV2b3APy6zcMRVChS2cGUfSMMduGjaFWSgo4apSSGJpYTF79W",
  "key21": "3wAXwm3wMQj4KLkaWoKrJDpRmg3Tt7hcDH2SsUeNAinKjbRHJrKTpqS3XqeqGkSu3omMhhSY8kYNr1sASLnmRASu",
  "key22": "67PRpSf1CJw1pLT6cRfQbLhu83n9no2YWyMprhuyGYEqXZRe3sn2eqpNw5TnvDNPoReJ2jN66hohnE3AvV5137Fb",
  "key23": "3M8WVW2CL2K59u747Xy7UfTd1iMcQa3SnBhXSequncFmVZDYvELT59Jbri8isKcsxU9Zid3sKAE9xPhnTqDqcX25",
  "key24": "5a7uAQT9Mqh7Qa8TJZyzv4dW9SiqUqaVRoGKJxxtwcAZnYFjBm5o6XARrqxdkHfygg4akKcaUo7vnNo4ZVcWD4yg",
  "key25": "29CEZL1pjdiVFEhjF4WZafBdzME4FBf8vc2VWd1cvqFP9noVTYAcb3B8aRkoQRQmCokniGDxqRW13gGCjXvhEpMA",
  "key26": "rreJK2Fkb7D1DZi1niGRpxEER8H6Q3oV3wNBC87ZjazsQef8PmxuVL8W2Jqpu6t1hkJiXD6DA61P2YmnkxRBWsH",
  "key27": "3GqRxSQbNaQHk9Ajt9pMfnbhFAFMKz9TxdnXUbUhBKc94QvStKAjB99jNXLFVU58sMRe4MA4c3uUb95KsMqhiu1e",
  "key28": "Mk787NjWRVo65FzQ5rqQCKXGx2zJrqLL4t8p1B6Ck5zTt5vzmeKg7yDMo99hWZ3S1sYhKqmucNXf185sw7EiuC9",
  "key29": "62QNvsrPJeTyGMRfDMBcF2WhLGXcNT8Dtk9hpfUan1ZusLLYazVSBVFqwoLQVvukhLXrMnXfCB6Z8aWMswsPtnxD",
  "key30": "sQQCYXcgQAwneRHH3QmM45ymaSfB6JnySG8CJUzXbhCWBrgCpa1RrZ2jQHCh3zL8g3PUaE8Yeuz4z3vrPvCsLXY",
  "key31": "562uuPk8s36R9LryQqFmVPH7GsT1MbFtWdwdYkG979VCMMDgsjQsmnS6JkSPHioczmG9o5gZMoVmhZLdM6fcMU9N",
  "key32": "2RauexrDi4opy3jfxFJ1DM6LQWdAgRcCLVQBCFsCZ2P3one8RyxJtooHVTmRGQBCsByDEkAKoRCHUr5znadQ8i6W",
  "key33": "5eVzCB1iiM4A4zLeb9DX6vMGNf2Jion8ULwZQAHG4Jr4kZQtLtSAErexVWZezBD1sd1etMHJpdeUUymompAdMCBD",
  "key34": "2Fkfzm8kK5YoYkVyWGaB1kieS872SdiPAgyyzAssxsGhZBFU28YkJ3vRhB6BGspxdRKBLecUQ5bLHymwPMzYmkXM",
  "key35": "x2JdFrptv8w5uL5L7MbjFCcZG2wpEDEtorK7HudJNDjEmHSU9CeTrjNeqFfJaWb3BABponsemfrbinYWd7EZpEZ",
  "key36": "5gf7mS4Sx8TpZKUvduJTYYEJCbHpJGot1fEREytt2XY8rf2Y45QdqFWQykSFSnrWJstd2SGpjmD3NQo6R8GgtUD2",
  "key37": "4ZVK4fFbfxxf8xXSkdrU7f7Z8MCHm9MKnKbqJvLajjVrZJq9sbCos2G6TUtcyPaVPJuDVQyrqNi27GcNVZ8kqsnz",
  "key38": "5zrDRg9PumK8QKxWqqDFbuTHk1BSQRm6L6Ei2LwYqvVJGzvvMojtfPP8yZdYozFCe5oEZYvLmYJxqvhtjqHp8CKa",
  "key39": "zzdPSyBJP6aNjyhKHo15iH2XBqSjV6k45XRRh5xHWJ9UrJ37CB9UjPqz437QvhyiHSmiyQZh6N3ksZ3CRm1Lmx9",
  "key40": "p2MSywUc7pZTSFCy39RPURtttordxk1ygeZTWdohMiDS2mBt5HbSTmdQStgZKPMiqsT7xTuTCzJGkr5Hy2WJGZT",
  "key41": "5oZLFNC4ML22CwVEYNzpn3td6QB48M3FShmUYhwmAmaKSF7Ru2KkNCzGHt6i3DVNdw2LW8yD67HEp14UKRj6U2Xm"
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
