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
    "zbf4iNKdUnTuXjkehLcredxf6DaQAzs5R2UJTnpaTuZt3AoisJqADsxgqbnkd6K5U4stZmTfMPbDUwUU1DjGn96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQHRrmoinL7Xm7sqsJpcS58Jtr9QjRqLYbNYvhJM8gpENrGcytRvHhuAdcckdB3ckP55nhUF2XZeKoB9qYBedmJ",
  "key1": "2Ry7WtF1xWUy1wQCfGPTwzqy6QX6pCyGeNPwXzJ7ZL9dy36CyN1i6kesZvdWkxruDqN1Cvvdxk2AAnahKh8SEin5",
  "key2": "3oyV99qzqJZQk4EeCnxXMGptCQkoMHgWYXE8sxq5ZMTLBuwSSJL1z7LHpdhwxrLN5exLe5drZVEkcLBEuRPBFa2n",
  "key3": "3LYJiWa9ytEmT53dPQLqKjaiHDYbUWfsjdoFHWNLpgqCTmoBVJTxJG8fc5XVZrbJnXQ18hnPozNgvRA6wh5ta6vV",
  "key4": "4PCMHUXMEgmdt5LANriyfwc5QBruMnXXos3Uh9bNqLq2Z6xx7jaR9bgE8rThVzfnuazx42rspvf2WqKYJEcia69J",
  "key5": "5rZu8X2hp8JdvDPakgnXbRbBEBom6yzpK3n6m3yrgHe4Axpmbd5FGQo4FdrXAcUH9f121t7dgNsA8AN4NCnTEeAd",
  "key6": "5Ve7nroTW9rhBt2ovpEXrehH1SqwegwSiE6bEG9jSSgk9s6N4ZgTVNducxcAomH5MasruAkRHW6iW3nypVTwZcqV",
  "key7": "2gvYLgr5FyL1J7RNyVGLvQJWr61doYeKfNVHoVE4nkARV6nVEhHvZWtrjc2kuQt3ATc7BjXujFq9ksmeGendMdPT",
  "key8": "4KfCusbJMRLurPdXrJJ3gD3X4fHCgwTg8BdmQA9uxaciZ1CWjZsoJuLA4DD17ercxQ9jqJx3A7R1czKtPzW2csV8",
  "key9": "2xhnYAA4gqqG1KrnRPjyzAgmkb3YhA6UJqDN58AF5iJvC3jiRKpkhu1wBUjpkSoBWwJY64sKukeKhqMKPTNNkbtu",
  "key10": "3aYLjxrk6bPZM3zqAZdXmfxKUmmmY6VUApXhhf78PKiZfcjVCJdDdUkipJtRCbXyPFqomD1FqDb2191HGBcyXYqF",
  "key11": "re6pQRHLZvdm7w4xfWAHAGWfFQhPpEwQCH56j3NwpQEhoh4RLMpme7ukA7un7bCH7wiKC452YmKPLkuXggsXSuw",
  "key12": "5ibH795ehvru2XMbqkfCLcC73d4yGfwPew5MFN1EXkHz7o16QJKJi6oSCSa56r6fXmE9qVPq65pJkqjFumsauunR",
  "key13": "62GKHjYpnKWbzYVMvvorBT1ax8SAC8UuyJSNeqA1ae99mijLCRoydxJ13pW8oZVynz6S3uGBsQ7UYkdzYCqeVrrc",
  "key14": "4VQfEoXzmcTT1P9LXPEUEfg6ji4CHvLBKCWsH4729r3V1j4sk9LniwaiQYULMgjMBn8zALzVkEzBs7qxjwM3nmJD",
  "key15": "3RGboWRkZy3V3oY4RjpRWPsKm3yjemNqziGjinQmDtSMdycLAZBVioX7QAMayk1ziNqMFtekJj4sA4jJXwsyybvj",
  "key16": "jfoympC3jxSsZdX55GDhKFXt5Eu8gx11jJPWCYMCWvv5D5ULbvuQGqoUrdWWSgBRWwUs6daJZVfuWj93e8SA7sG",
  "key17": "5uLst2TcPXvtidLdBDKq8nRRWEv5sqtVDt8PwxGDHAsbb4HcRop4Pd2Vppdros1vZqpkddY8iQgheEHgKcrw95w3",
  "key18": "3GrgtDeKgTZqeW2yp3gX4NupmZ9HavjgVACj2fscfjKkZsPwbR3Gbc1vUaD1oXy7GZkhbST4ELBRBcAVbvsvYfJV",
  "key19": "2yzCCA62XPZwpG9cuMKRENqgvcS536t8aoyTdWfmzUkXtSv8wzrpboePKFHc1W1S81EEsFdaCB49oP4mGMhKkjz3",
  "key20": "3kTeTs2Yd468JoQ991DfsimYHL5gphEpiQVjRYj3GsdNznGd6P2SuLSYsy5HQ44figRsBUsgYFTqZusCUyhfadDg",
  "key21": "4dvopCRKtX9ye8G2JxNMBvA8EMNeDAG1VbhyqAGJBaA7C4g44nuHnGbq31mrEzV4xTzPPsJycs7JPpiE9cd96zCQ",
  "key22": "4iJDXLPTt3148tK71VPLR8FgzCVbCxZ8tVJBEes5UHDcZMpiyoKHEj5YMfpRdch7sptamDuqbUVaHotNfqqmheMk",
  "key23": "6Yd33UJEEWKoQqDWJwDskF9CHvHYX7Rr3gJsiRZSMkYAoC3D3ppbnPJofyMHkVSqfYuoFmXF5KuW9jVxZwMz9m7",
  "key24": "5CDVhXyNJWNrKDhWuf3QcNBMPUVjP6QSZdZwFwb85KQ3vKEf9L6yobJYQiQSVX3ekgLYDrT8Ne8sZex8oN9ua6uD",
  "key25": "2ydrHxWtdRgVTJGZhbC7vd67B14qRDhvt5ECBLNsmo5bJmCjkp23wHLKZHccrGS9zSmq68kagDw7d87Ht7JLEvUD",
  "key26": "F7DVTHXGD13FwoG5YwSkPacA2sYPDw8UcYNx34BHav6Vu9em8jSVHgdiRy3MXCQDbpXDEH3Ww5oL3RJzx7wyDoJ",
  "key27": "o6LcnCgdA4AR5Nu9agNAwSMGoHK4hFbXs7opU9yA3r4uDdt81PdQwi9cKgzBGiYFdG1p2U4pX4h9wWFi93L5McP",
  "key28": "24VFfewKeVHGqg1JvKABMxtvVLvvuCNeGPuHnkyzw94QFBc3oxRm2udGiaKRPnFjsAaCH836GqPY5AcSDnBmL6ma",
  "key29": "yRR77MwpAof5vV2Gw5cUNAiuShK9atqBWwZykKcCS4dykZ5F4DN5L5DLDDMEi136Cf3DJkFWWJVYQhvMgbssfTE",
  "key30": "27X1KzT1gSFciFXH4K2Vf4MGs6TNeughsPkF79YzRwsgBJ3e8M88HPPuYaug4cGjbQwKqcoiKVnzmDcjsmKpBXUM",
  "key31": "5UFyG5tmjWLfKAjLuBLWDXfkLpG4an8ar243Tx9XZs3Wbb4C41qmGKDW8sJUoDyEbkCcL4MGB2LizoTCaqGv16TL",
  "key32": "ctE6vkWpHSmJ6c8FAP9txsEgz7AKJpBz2m5TeDvaa4XnpE8RrN3pXZ3aXPQ3TYvu7B8YYvEAYbFzKiPjbRsUizJ",
  "key33": "5MVFkdmdVJTk8pLEnVYL8zmTcELxAf2WhDHN3n3GMhYy4SMdqD6rU1uVHcqWsyQnjNQyK4Xk5xeeSCu5ptyZZ8ni",
  "key34": "w3fS5DxCyTgifquFWrLP4np5Kx2qNn2AkEpSS1ekFT8xzZ2B9GHUNAHk8ioB1tEquBuzRcXVqZ3DxNGWjydXhki",
  "key35": "c4VMZ5q1cEmKmvPZncmDoHKD5gH6yrtf46mDXBpYFZ88hqwYQ4qH2mNhNNuUrmo6ovQsBwiQdvUs5CxmAGMUiaW",
  "key36": "ANbEdVV7z5gxbTM6qk9uAkTU7sHc56NLbjbUwGt4uBCNJSyReMko9kXqaTVaj1dGJMExMn5CXzqUH7vSdWJLjnm",
  "key37": "5pHDQe4FbkwYDxTfcZVYysgFrv7Nx4GLaF3nz9rF98NzLWhSHf91Quhmbcf16KCz7LMZa4cC44wg1E4gdudEGqNp",
  "key38": "2NbPKF8GpfuyRE8s8hawRWuQvShXzHWvs9QNsuoTnvqGGiDg77R2CCrqeh2RQi5eokZFHmbFnyxPn639FQo9xufU",
  "key39": "fYkrVUyjyHtRE7qrGGbxtDR9AgfubHr9ktXU7RvrwQ7TWHC3khuRiMsv7n9oCmsVQDXebXcgJH6tCfUGsfizkXp",
  "key40": "NKs4XvQsw49mmtqJXGdvQvTGvt8J2D1yXYZFpeYSWuddHcbpFGk1kEZ6R26DRC1wPF1FPLvtWF9jx83yVtn4pPT",
  "key41": "4feXcJGUeMq648c5VP55WV1uWf6rS9DV71pToRUDn7MfGuYvcpYq5wTk2bvfQQqq6HMS6cTD5DRxvWAz7hayTVcp",
  "key42": "3xi7wWuHFz8zqgi7X7Xsz4fe2kF56cqu1ygBYMdjHaAEkCvWJvtb9At5RonVFV2wZ5Qv2N3LSr1uQYfFs5gWrVKG",
  "key43": "2PM2Q7R5fcCmtXpxjGHC4RwYhh4PDbwbpi5aAT3CEWN4FgeUaVjF69X1eVPQMqunZTSqNoEvUYKiLQMrfT6zvGXQ",
  "key44": "5yZ3oJjGqRBYRpLiqFm23RoSCnF7PZdhUXTM9iPfMo5JQ7jA5krzXeEvCwRbvSfseKUb2R8FPYXUPR1Hzwgc4FFh",
  "key45": "35bEX8KEvp5JPHoTrW5mnnp95z7FVNHxicVoGT1WL5dkwNJZYPoAK4EV9SVvz9qfDscjWSr6jid5fniW4RowtpUM",
  "key46": "5FtzqTzfibJETRsgpvbinwE68PfS6SqPkc9LjKnTisKLQtfHcphZDwgVqx29GoJvoD6APu9VfdfombzNUCSSKwMZ"
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
