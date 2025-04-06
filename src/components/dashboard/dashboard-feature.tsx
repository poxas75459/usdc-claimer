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
    "4SYzABzh6JHr74huQ3TuRLKugf6MmJn9CmPZCr53B1iPy8BJRjhhuV6szTF9tJSaGYVtKSdr4pG9jzGuNLELK6Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juRaRTFKrWJszXKSJhhzWChLLDxBgdtH9uHahwdbQNyEyZbKwypiez6TtQh59bLkWu4FqTkQrRtJYDhwkF62MoK",
  "key1": "5ekUFq1JyfAB8twNgSQtsiT2LFmKkA77u9sg6wB6nmmz9eq4enEohHTpqbz3MsDkHJVF7R3DoPvk7CTDv64RJgRP",
  "key2": "3dArEm8Xw293yTtDYc23os9zx7uusFktvb3jyxAtTWEqT9u85PaNvxzi23eHSvpHLmJ9txBVBhob69B6Mzp41MND",
  "key3": "5ZSZbMcVJCU8gVkB8SLwKUyEcrB8zaFCRs57ZW5sNbZzDagnVaMXQFCQmMPZCApqi3T5m4Ymyc9u5nrz8bmw2LFX",
  "key4": "5XYVhmhn4B8Z81BjaaMH4Kg85FLgzkS91SzJhaxWJz6XftK5KNuh3XxMomTTMagXFfoJwW2pTei5ug4VCpvJXciW",
  "key5": "2FPKpzGCxZzCND7p5YMWoRSzUtsovUxKcFdcCHp14TbH4Bx3F943f7arXPJtmmXEBsa1sH8XYYuKX1sJhps5nEvX",
  "key6": "3T1rPkGaMC7cb3T7Ay78vLWh3LRKpLzixMYHFqhXbTBuzzcpiYZhWp9tb7R1SR7FsWTNvgBxZwRC6QkXzhpheLGz",
  "key7": "31Uhmqa4JEFn3baeDQW2sm4DEWrbiS6AnatrJKCCZQTLTU6fm6Hi8vozNg1viPSsNGWUDusBbJTNkXPrWpiGKAjo",
  "key8": "2raHS1Fw8RveJCJaWz5r8BaYmAudHa7mdqkJMxFGMs2nSxPFoytg5ZFzP38qMRBzvJUuoigUQztreA1MTivnqK1q",
  "key9": "3RzqFEHrzUSKjAshV9BMCtfMKP18er6fjYDiXBUdtGL2YcxrcSHUnPDTfPPgyRgBxVMXWYWyfFe6kcvjtwJuwa2Y",
  "key10": "4gyxmAXBS1ixwXStXFT2tV2wYT12Pb3oo9YBweUrvqxVcBomhKvhgD439Wpq8PP6g5CLJQKnLp95RLe2q3VPrbH2",
  "key11": "2itkzryBLX8FXE5uvpFgMJMgEyZvyN48maRrgz6Zwr46jiKr1oJd8nwbjSpZnJ2foxbhV6mung47tD38usQ4Gs56",
  "key12": "5uLWXBFYfJ11r9vsybnLrMYMXfjw37ooKikbVMoWsqpaPR5rmKLQmzjgkaf7zkWM478zbn1GHe7Ckg6maSRWFdKY",
  "key13": "4toMXpUGAwmU91uV3NqzMjQuAoWGq2wTXchxgjntCbMU8KXCFpR1UKCJRM91uU4wpnzoDMZSMybcB5hdjJ6YC5Z8",
  "key14": "4cK4LjZZEQCq1AG6gYwP6Jupr91La1B6R4yxyjhygQ5AFBE7rwQNqVoP41hyDmF8sYoiq4kpJxmsWhXwtoqfEv42",
  "key15": "2DrosCZM1Dwr5EX4vGyHMsFKMd2P39ujRZ2LGuE3yXeM38uUvWUJPT7NvL1evbYxjKnsHcXK1kF2VjbeXWaF8tFP",
  "key16": "2xjSaVC3pU1aShTxVejucxCKuFACCYq1YWNgQv7m5b46mjn7QPu7Hf8wd1M3YwYjyYBJNdbok5aN3zCSVbpmmVFw",
  "key17": "4U7JZZa75oUmvs2UFCVpsCi2r8sDRFxbZmbxHDBCB3qHoSXmsCcaD5hKpMZ3aN64ZTdDCJYLztH1besG6Sy5Z4Sz",
  "key18": "5yxjE5QcdAFVcW4xRhHA7uP71Kk2zxy7tFRtrZ6CTbqFnkNqaEUL8RBRM1jqvtGj4hzortaSikt11z7tuLeJbb7i",
  "key19": "4ikzy1Eeux4w2yMYwHDV53qGZcDy1dmDvZHAVFLCbn2Wi6N8MeUaCyShWUZwRg8Qs3TXBVLnPn1Q2tzcNrf5UHAJ",
  "key20": "3fG8Z5Z85RfcBETXpSYvUyuHkaBZ3RCm4HskyRxL22JHy7wNGsqgu2CaJMhUhvnTyBYdnkegjrezLSfgHfqFheJP",
  "key21": "3NhRbKNKvb98SgTFQAnmMK5hpApKh38iYNfjPs1tQrvxLDZoEZkLogawXTaHzzE7KyonsNBY39vsXKBF4iyAxB6L",
  "key22": "3SKtsuiGJWRCXJMt9DyWCsn2b7Hpi7JZtLhB2eX212hpKktJ4bjiRomT4RMAwJuMVJHJmLWnf55QpNj8qjysw7rJ",
  "key23": "2mao9jJh2TnjBDq1v4Q4iiNcUrkSdd6S9qcjbaPhvSqT5wwaDszd6kn4cUqrKP7iTaAEvuptq5SoZof6dRiiJnvh",
  "key24": "3dkcyVSCKPyv9HshihBFw2sE7WJUr3HCvkRMuHb68ZoBxjrrimdi9rB5KPbHizajt8uTuj3wF5aLphzenQmpnG4X",
  "key25": "31QfRPfaBDU2ampWM4qXA2wXbXNWoDkbgYMtM7N5TAS7Dvj4G39i7f2ibTi89jQp7sXN8vEnyT8Arb3ED2NbdS4H",
  "key26": "5a3NXFdkeRQZRKnDwDmxiYinkt9ujAKSmnCjbq41jbnbQnNUQGNhBs2giPATpSvgCewNPHEhYsa7qJpcP6MSpmyL",
  "key27": "D9VdZdfvDM4XN8vxV7NcYL6BdKU2KC4LxJfqJBmwZoJgSkwTLQL6izfZUxifNmkGDjtrkz4N7ZGyfFe1xYALKPe",
  "key28": "5tgQ4urtrctYLcdUUZ5kTTiMWVDbUo7BYEk8m5TmRPE4H3Z4NctLJyHY4NNB8ScMyAUnJz2nG8FJfMtofr7UU6nZ",
  "key29": "18YgPhVMD8nGJFZpNvj1Q38oKEK7Gn2qcqhLf4EENrsL4NxQs8TVnANz5rzBkzXn9CgYKSfdad1W8vkCeeGNkos",
  "key30": "3cZvWTS1nUeVW3zrnzaRm2rDzxDggyX37j3eZ3LcwUi5ZEjtziVEcxiEBAfZHHY8kkFJ6oUEH9KmWTz6Mmewa9kL",
  "key31": "GqHJiasqBUdeTjSeiTacxBzhQsmu86jto2vcW52J7fcKGdzxEuRcfMcScGqDNbQGTAqHWf1NeFfSgVdZ3bpdwGv",
  "key32": "3SpSzYmscrsYT5NMMqMkCWuwtCKJDiW4bWxX3XCRQes2CDLpmeKKrMs8sWxJfGiAqosxoCiHKoF7KZeJL6TfT3G3",
  "key33": "J59wj123tqPgHucpTwgU5ngh4u8BeU7ciULmgVKdg5QMykqXiYVHzH84eczEEvoJRpHEWXVo8JSciviwG5aMA9F",
  "key34": "3nYgJxztY8KF54DPpATrfQeV3oCEgwdwZ1gFyToLa4hHcSp9yHGCHeYjtTuYtcqfaoX1RLk67AedjnTvcPq6yyhg",
  "key35": "3FEB7cD1fKd9JWrtHfQkVKUCMFjxnX4ai153mzicXPgmBKjFekeD5khxvBvqeXEtekK696eMPAQtNtwP95LqciLF",
  "key36": "21CBcHFPju9vdQTPmnZcLpQsmxH9wf5DegS4TLCXhyqgbyRf4Xjdo4Ho1iLMXdRijCAypvVxb5xmKUrgnyaMgiPh",
  "key37": "64UQ5NrwDgSsXUry6vuNts7j1kdNQh6aXhV2YnSpdVTaqBjgQdn62P66BYgpxzb8rmsAcBsoF1DXy9piXEuSQZs3",
  "key38": "3wnB2jukgXTQy9no4qGKmUVczWksrnS1fytTedjU84r5AKTe5ehhDtswcvCPApg648kjADmiQjri31dQqFsQRtMr",
  "key39": "4BPumrYN8ec3njcwffTk2NBPVykHmVCkLfk28CXYYdX5reF5KNXJ38gBWN3zsvFnTGhNJ96nK9HXUqa58f9tuQk1",
  "key40": "5JvyTKR8aVJBLLWDP3HqLNwGhiwtgppF11GZUiUj52tFHdDMUyTzTdwBUbv7LtQ3dWL7Bsd1hrou9QKCwL1rWDWp",
  "key41": "4eEk9T2fJ2QerpjVUtGutiUTRsGGocy5ACNjuBfdbmYNYwdDnJqBcc3PZBb7Dyrs8QW9k1rR2iG2ATTFFRpM9N54",
  "key42": "5tgrdKWZZ2fLNrF79a8gTKvhsMoSJZGvZQCJkvYLwGedjxUqnL8yPVwPUdWNj21S3BDa273gATA8XM4mi1uuTJbK",
  "key43": "53ADacwUsfsrDxBb2AQ1cAQvUmzzvdutEYrcqTAvZuAaujBZh8hV727BHdeMpmPHKZJUZvgS8TaAgTLsgYjAEZve",
  "key44": "5ULLSjK265UpikMFZewRhmBdyDJwNWscjmSu5bFnaKnjrr8cH6pSXGkMRrD6KywASZPcPJkDu8r9yuqSwFDFJ2io"
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
