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
    "5jJyrHDLhx48N9f3kz3KBzBP9Y49kscYF1iZBxs3rYkoRcEm77dTdLgsxSihLj2rtsaZMWSnXK5h57wUsH29TAWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66aU2Fe54YP4q54e4ai3GQ5HK1WbaFDHWdVTXJKHZVzUtF9FLvQmZcf5HS9PFfgArPXG8uopai8jduceGjwK6Rpu",
  "key1": "2hpfJ999gVXqGf4mnxL2gtAMKYZnP1SxsRgzybh25dMwNLyw7KgGchBqknXJ7G6sNgWVje1fypjTohMtnYZWmkXf",
  "key2": "4hCMaq79cxG3QPgXSfNwR3L911bppU3vYqsPnDk8M4pc991wqNkLteBbRanLXVwT7VG2Vvhw1bWVDKgmoBpvJ17j",
  "key3": "3PDdUF1dYweXDvLvBN2zPjRuYTLBVNFn5ysESGUZxfhmzXAdjdLGd929cz47i2FEXr3vMTXNpiK138xwRpos3MZr",
  "key4": "5K7s8Bdmbj56g8NnCDTCAWDpP4FcWkjAxd9VAkBkLh5aD6wYrbHQ4cZUAALUefsdE5DezmfbEXQsJaKVXWAoXZo9",
  "key5": "3m8XY2Bu4JpZsUVaYLy7W3gw9T1Qzz1FBCkWrjfedVwvnNYuTi9hAhwVHQwBg4FNyJR8GgitW8rrdpUWs5cm4kvz",
  "key6": "27uP3jb91oLzSR6UtpxcLG49LDjPBAAGe4aHC96NYBA4H5bawx4ECzCdRXG9jP5dnd5VSvHofVWbRaQScN8qB5i5",
  "key7": "5HA1N7YBw9DqxutxYF4yrYK1Y3Hf1euE8zYVX8QKczE1cqvucwaqAPjJyWaDYMUx5mKnPZcF8pW9v79dkGLYFkAZ",
  "key8": "4XYZEtUW93URR9ZzrqknLZP5gt1ipYTt1uTttgjgFqA7YNVxMZM1kpRJnigFgJbb4b9fvdGABY8NAHHqcbGFcd7C",
  "key9": "4DZ3rngAogw3DDjaAzfx6a6ZiKQRCHx5w3SRGR5uDU6LNGc4Q583Eiq8K6RW8Ss2DgZsWLL8FoZm8kwZVTCAYeDc",
  "key10": "4pRfq4ddaEbiQecfc8ReuqcfPJgE2MLu8Rawh9WfxckbjFMe4s18gzKeWLZ2poKWrZ98no5TyWe6EU2k6FCnRsPh",
  "key11": "4v3Xdc2TgRUQuPBBBqPuoZyhiNTkLAq7BTN7kRgcVmf53WD1M1oMxp3opK6V2GwaQMHbbrNxx3vCnA5RUcdVc2AS",
  "key12": "nb1JXSv6KvFfPJkjB3FzyxnWReygXieeyZTVjQXyabeFmS2NJM9jftKznezHv7j4KDvNuf8rBYtZg3WhuLzm3hy",
  "key13": "5NaaHgWZeCh9LMh5QkwtGnyfyDud774nCdV8xiRPENfvJqDH9BkBt1VvL5uJCH5q3dM7rMmkf3CmjssGicLYcfQX",
  "key14": "51KEyUNSWZjjoUEwYRqZecfE5e7JjjFszKmTBf2ETy1fcJMXMmuqotjX5WCtbQcowmDKqiWQvaAD7hcq9STnCS8Q",
  "key15": "4DJCFRfaKc6zsMPHxzAYy6kmcCjUxH7qbD3nP9mqoJzEr727nKR7Uhw14umsdZzcbVKaP1Bu5gMQ7zVMAoH5x1Ud",
  "key16": "3qM5QfAAenTwD2v6HKpdnpuLeXfd8tnemTH1Qhn8sjbmdwAP6zfBnGzxhpDhECETDcMGaxz3L6CBrBszPx23FxK1",
  "key17": "34xmeRJojsRoiYy6jWanyuR4CcTAbwhpZeZkAmjYD8CQwa5kVbvCBksLDhJm5FfaaDRQ2AzWccB42Hf4zaictWtG",
  "key18": "BSyQ6UYFSouMHPtjpAfBFjEo3sXQHU9JZNEaG8DfUssJaYNBgAnhqvA9iVvKHnPVBD6v1hu2gXj6kPKXrFP8W9Y",
  "key19": "4UPb3hSdRYKB692XEHqpQbhmTWLQoyQTiFT4AwHZhS7owSkso84bx6gDLtvrDFCvq1TKxs9i5QQVwXdiwGsYHhQ3",
  "key20": "C5mEN1j6ACcWyRewoeNinf1HEESkQ4pTobTnDqEgssymFpQrTM4FUiFUCzXtNNPJGCXP5QUxvUrV2CPbvotmvBw",
  "key21": "5Nzwoq8G9bx92Ek1wgeYENVuDLyn8f7Zx2s8EXGRaP2QhxkgW1jxasDGUkboKcuhkCEab4MeEL6ECZCj5H3U8nk5",
  "key22": "4NDJpYE6aENvtT8NrXpRBiubXdpmYgTdnbK78iPCjJAxdih5fabDSJkRwVwJpvjbG68rEK3mVqxg6mVUrQRU2gCs",
  "key23": "5ZS16Q1pcbVcaC2oQc3RSUgcvMEoZ3rsRn2DStv1t1zHamzPDWXXqX9MqaZuQR3MoQAJfc2ma5Zgea5rzBaJm6Z4",
  "key24": "3AKcN6mSK1b6rdxJ9kse4duGrZqRUBJSJT6H1ymiqM1dvGZL74cFrrR3EcV7AyWUqcctJnjimpCttxKqA1b4MqQs",
  "key25": "3KLG59Jubp5Ut3UFks3Q1PSzXKwyVPWbAvDCCvwYH9G2MZPDjcoWhjrn6pWLekWbApsdSjtvXvCpboqmaDoCwLeF",
  "key26": "5z4pU3dYkfJvv3juC7ay8tH864kZtHwG38bhdXPg6ErN9ZjWhZJGM9t9ZXdb11bz71AxWhtkbvx12vYE7V55DoK5",
  "key27": "4nCPjjw2NANvsynUqMv4q6E9cxGdH6S1mBNihNWa1x2kVmGakLLmjSV3tUqvLXkrNyvdarryCHpf6cp7fWPMHnKz",
  "key28": "5ppJbVPFUXdWJetFGafx7HTAjUq3kN1j6RgEu1W4UhTWSP7NocTK75fBTxwUtZmquAdeRnEHa237MPGBpj24kWHy",
  "key29": "4fXrffMqPRtkrZQ4hpectvNcS1z4QHNEY3ggscj7CLLxfFFB2MkpjHVsVDz2GkQ7oyPwBsQB2kEbXTk3vjtPXUDy",
  "key30": "5Fi4B5BxWSzndesoeDvEgHa97kSKLk9ZVEiTVU7AQL5iz8edqg3wLQhxtcYbz7DB9J9LFh5kdAejMvgs1w6ajjkY",
  "key31": "2KPrgxMgrSF4P7T5UvhuJnNgyef2bnY8vU5Ln1VpcySzkpDy7Z7CDQ3yRe7bctrJrBaqFzEyEKkXfQy2dWfQ98me",
  "key32": "WMAqj1hUvG179RvzWDN7LeNQZe17f3sHMfpg9smTugU5pcA53LJYp43affcKf5enJZfNDxas2gwBcj5yUrw1y8p",
  "key33": "29enXm5hq4SCsa8LVN81rRMNExPmNRmb6AFK2n3A32avSqetwdayey6sZFe9abUTVW2aay2fPyGYWXtYa7e3J6aA",
  "key34": "646NMYVCJ5iQQkoVWwfD3wMqzDz13zYKwEX5BsZJq2WV7eHJ7AibzY8KTjf8LhWXso5HZyVgrcdQDYY1nb4SY5Wi",
  "key35": "3iG1m2f64yfW8NhCeyeLNx7QCvDqZQuczogAV8tkA7QeeTWuu7z2n5f3xZT2T8hecQ5jkiyT9XEQ9WHvctVxEj4m",
  "key36": "2iXjM8hc86pFB63G84QWTnevPByqxFoG72f9Vi1DJGeNBFXivyzTxefkARnk2zP7SERZoiqKbc4YkjjmX3ZYWhgp",
  "key37": "23Xp5ztjxWNzuShFjyHCeQ58G4wR5dL3a9FEKJFszSGWdeJ4T145KbnwZriScG5icE86VG7wmhYvxrnLCTKvZZ8E",
  "key38": "5YzUUUm1JpZwkeHQKtARfmPxADo1yiFbZHzPgSSD3414dichFnx1C6UZitNsN8WbrPcKT9x2ChE8FtTyfrXxYAsm",
  "key39": "5Dc9wXi4vFDc6rxFPX8m98bqLwaFkoUc7KZtrBpmr3xNRxryAeJXzt9HDhYtnwdh12aC36hWL2bTHwHoJMm4HWbA",
  "key40": "N2yQB8b4Vz3qCtJxthR2YrK5r9GSuMG3aX2qshaXeqHBvXE9BiciVaQmaAfyo4CAc9kSHeLz78gqQV7mL9wDC94"
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
