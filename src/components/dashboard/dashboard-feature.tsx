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
    "Qw2rMKym9yfqBRBfRXCLEUWqmypvBN97SLaioC771NgDet9ShX9kKj2f2mvxsLyN3g19e2YSJXLU3JdE7TLmyY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g57fcnT4PkSZ5f5jyX5rLAg3kFeu9LzPJk1GzsVbwbiaw6ykNQsz69Phj4HuhhLDcEL6kbSm1ms1yzadirhPZ6Q",
  "key1": "5REEU4x1ZL5zWxLPRe5Z9JanVu58vJaSShKzPQTiy9CcWnZDjYz3HCHtHxAdbivrqjxFy7rzAirLHgja2uFTEenz",
  "key2": "3it52GeYhuF1z4ZVWi9NjcMVesZZHW2mqhfLqETPmh1bUQm2jXw4166CQRTir1gfdLrz6yuAsnL75496yqpvry9D",
  "key3": "H17QPN9bRBHBLDpf8cMhrbK6jt2dMVBASQCjqzWbMtuDX1L93C4rYJTttpAs7ahjdwSLNsiqSQeYggvc8KwVRiY",
  "key4": "5geHMFdjRLw47QTZwvvHxd15yFBjva8LtCYKUb3wUHWDxZSsZmjzsfbgeeMc92CMt4e3djskfT8uZUBS3mExWvwH",
  "key5": "3cR7QNwVAUcnNqUpu9aZ1BFJAjmzWR33mvXWydSxHN4qmMwRGnuRPLB6jmWfpjKiTTnoHdXKYzy9aXVyenXYwpye",
  "key6": "2CMVnEcCnn2xKCBHsR24WqTJKv9PaB8xE5JPsdPxZmQ3LDUGjuoKFXxq5Wot4PAZ7d5A1WNSnkTSM1QQKV5ZDYR1",
  "key7": "3PqYokY9oWqHw2KfkBA5hpvU6pwfBWBLBPbpRNGKN5jYFqcrm6mpLnuppacEbfrP9UKBgtVKMs6Sq4DxmTbiWFY3",
  "key8": "2BH5ewytuEchrEjErKS6jfLksG2WZ2JsWSVr9TkcHTDcQtUr9zvZwLXLygBRfBUrwEG3VdXKNkYdFosiRAyWAWDk",
  "key9": "61ne83NGccFzovNpZWGSEa5K6tu2jWs1ZciFFMrRLQ73zHEEtyPz4BbLgS6MtSfRSGtRP6p6hN6CHNTYVkQmJEug",
  "key10": "4NAvJ6sgMbswa87HfrBD7wfqE3J4iPapPbmBVB7eEAvoExx36qEgynqNLSknQdfPBrZXGh7GQZwc4qhD31u9ggJA",
  "key11": "B7PMqBSRQXaRUFm9ZgqbDfsmqKJiU9LFFPtFeP5VNoKgHE35cGbCJJJ3pttSqRW8FtGyMrEJtGNkGo5GGQfr2jX",
  "key12": "259JU314yt3zmY7rhyx21Cdod5zhDZ28dCNtneD6q8rXRraxPqBQfbhmKs3aGJ41MPSp59aa7oR8bborMeH35EdD",
  "key13": "3H5UNY4gGuNJtH7PxashcG67JCPFumjzS8my5BvRdAZ3NbBfuEikYTkUBS3RdvosNfCxmUv3H1JXpwSm8R5HQpk8",
  "key14": "4XySZTDvZb5JFri2U5xH2RU4a6DUefRx8NmjW4JpFhtNujf2RjmuXyDjBJEvSfCkGnVKeUxD38Mb1oKTf3DoSXqP",
  "key15": "2x9LcGoP3V3vtHZzzTDh9GMqroH2Z9hk2yDHnZBd2UHpErMurxKLqjpFsuHoKTswwYegBtos7hmBKcqq1DX1X23C",
  "key16": "5v8Ck9NVKPjtRkyAD2NP5rLmrtsxQS81ZYdqzh67dxdchDyKEoKmXoo3uQD3YEa1tgCzemC8DnUz7bGCVHNstwrb",
  "key17": "3dcyBjxuwKj76FH1qu3UEbRTtpdnWN3otVpSmdTbSBdQ1eBtnqcHzSo6BXHrzvi4pXBpkAEfPUJvGxMnnidtpKET",
  "key18": "3idwASKHyMVqP9q1yT6p7NNcXkf5zwDZfgSxpCq25n9MM6HRX29LNo4f33Z7s8zqh1UMNR5zuEJpaA8vNFSp53Ck",
  "key19": "aJ8cdMta7gH1zpPd78nxj6v7XarnX9dcaiZY9dvH7Ufj7j9XUg74QX8LQU8JoFwr1BPFFg5jNbi14Qr6jSNvS5L",
  "key20": "47yXyLHviu5FBtQvb6R6fM73nkgu2xXYhJk3eeGjoHh7hozT6CfdPtKrjUGRamyz6HigSEFutMCZvvnXHabkXiBM",
  "key21": "46Tg3HJUE45qbyD5epLpNhkJaKqMDaX24RpowCvD5rcCkwRAtmFDwB6jLJPiKtVRiuMTB1S31hiRyyjs2FqW6wgW",
  "key22": "ve4v7mYq4MpoQH1cD8CCHrhvt49RKxD6bmH3Rw6TtJs4g9wauc7kPhf6f3f5J4WS3JB5ruf6k34LVTGiCn46b6f",
  "key23": "nJRKWHsTuMuKzJmr8kVMfjbuCxEBZrCuyGNyMyoMfnsK4khNsLvzaaYYbhdbcW9V58pzKQM9kvPSzmpMeVjWxVa",
  "key24": "RwCd2LMsPgzfG13vMbfT7BzyPwJ9Xe9cdcrDjmsChDe6tc451sb6jkC9374qAA8yrV8HxVEB3kvpE6RhBB4kZkp",
  "key25": "5rodFy5zDQJHZ4qpkqGwmkhkBGa7gftzUTUdoUC9XqP7t7tA2pY622nJ1fbRYWTDckgwuimuq5ok6MzZS4hUDWjo",
  "key26": "2eVVZSc81etgM7MMFHoxbRFRTRLs6eoqBrNaLyL122LLC6wF26Zb2QFj1aJMPi6tbmaYvrQgMx1hTGnNqqz3Vb5E",
  "key27": "4VJXLcdAchKptauHJky1ageVpbnBM1zCrggqcPzdeL8tUYwqTZAzQ8HDDxc3uE4D7c4qLp8Ye2SBGomzC923TFCi",
  "key28": "3UGhz5jd8fqynezbVpGzRZhYcWxoAmbX7dZ7PFQeWUrDC3ZU1cH5i8uYKXdyGEEv4ULZTPyRpzfjY1uPXbsVcHTj",
  "key29": "2V88gZSbwM32steNaQjujqD47kTYFattzvKryZKpH4uyCcpJsa9UzgxMHh3WwspTmUYCWib8A6F9jdVAELdy4BHw",
  "key30": "2mvQBp64VA8Xbvh9cnoy9m4UVYbfLecdeMBmi9Hn8EUs8x8hX1bA7cfqHUiDKStPSBcZkCqwTMm8XsytGrAX323q",
  "key31": "29yYZn7n4Vs7tbAPZhRWdAv4UTpk2adPzPBTttszxY7E983VMN4o3vvWfHSfUoUGA6LQFfK3hQLdXMi8ToDJHnyh",
  "key32": "2RxNWJJd41E1GgPBqun9VPwysizDns9RS6uktQscxKtKYydXpj9tAiF4DMTE4b3na6suLNhUdHSufSyGHqEb7Kxo",
  "key33": "2jufnuWS2bRt4cqQKe6dbTnLL6hrsgkNWtSfjk8dsuRRsa8ThU3EDGeSeZFAKQPhHd8bX5XLtdepvpQLJgE9e9of",
  "key34": "3zy6V9amBEMn3A1jmUirsu64ibuTp3MrvhkCvGdisNR2n775kqPVPndKacicrTFLKgno8WjfxSSLG4jRYvLPXbk1",
  "key35": "3xFBfcj85koSseG1zfrabrWYYNpWi1inZEsPcHEmf5Q7NEdxaxQmd195JAyX11WAo2mUwg6zaM1BYAX3Lu4PRSQu",
  "key36": "qp86wwy8vSfF9CR7CwWTWVAXbdqfFdATpoBxwM9RMeM8nKidf8XJo1qZdbffURLKDVju97MG1UF9JTGB5Me7WGv",
  "key37": "4nBhdLZtqHVLCCsjzjAwrWry1fzZYvUJvir2CtFAeiiZLksbnxjRV24yXWSGJYpfCdZUqTjMi8pG6TSJjZTn3itg",
  "key38": "65YRMxejpu9eWmm86GmX9icNZMmBY3jvZzHafSwXKRLQjrDVyiTnK754YEoPMyMEwS13P8TFhXyCYkzJqBi2FXFR",
  "key39": "4gQGZiww56dd3MT8PesbbnVVfX5Qw3tfwgkkvsTaa8Cuz9sCW6xbmPEnWrpKep9J7R7uKk8CPgw1VUQhX359EuME",
  "key40": "5T6hQFFH4fJQiCEj3vz74XC7dRCTLQ7nKv8EjfXKEwBEALNFAK2HoGA67hLhwEG1Eqr6Bwt5QHzAxqDrhiQY6myA",
  "key41": "66Z5WgHBhe4bpMfFYKHs4hTJ9X7dPyhQBit7TtRQZSBncfwFAirHXyTCmWcA7bxTPaFCH8KPLWCV8ivgDvLHNTay",
  "key42": "5MGRycdrE8YWXVjMRuoeAmTeVv2Cogmrw3xux3fsVxXndsQhrXWsj1KmdQE3LPF45VarizHVRJJyMqykaeEjpvMS",
  "key43": "4DjVphFUbRC2UnGzCFMRaM8EiA9X3TovxfWX14MYQBekGePmTYWVnL3uMwNMyPCKzKMWcKE6mxNoaYSP29s2HKaL",
  "key44": "65oM9SriBkD6t4Xim1Yo1BuCdbfcfn7ri8Dzzap82V9VknnfTUo4itGH89pyHitHm91KCK8WfGRLTh41jFRNUt2j"
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
