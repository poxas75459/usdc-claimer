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
    "26XXN7eis7CA8CwaMBEfh66ipzW99rEnaueeLW8Ej2G1KzUV6SPYesVqvns31k3RXoTp8bSr32uXJxuADgoRicdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLA8edi3hnSDtoUJxPGwFzsVz41zF5Rp4ySZHtWST5hjAXM26LWUVgMMkPKxi1LESBRj1q6vfaKHthA8X3QsL8Q",
  "key1": "3Lw9YUF7qh2t4LPVxM7nCnTeKpf8tcas8tiU1M8A8BV1Jr9eZkM85UhioPE95fyo3EuUY55snuvk9P7NrnN41nSh",
  "key2": "VpohoZX7XKKjsuXdzKUPB14BHvhSzvkfFLTvdpt4kWtbx2DFNtQH8hRbhxqbG3voygjuu8NiPujAmCd9arJL9vN",
  "key3": "t5sazXUenwPRzm8Z5FfLnqxbznoSQ3xWKknDe2eeAgJiEe4uViXHzqaXubPriamSBCWoQKB3BUQ1RuGiJ5cA33u",
  "key4": "vFB4ijoaSAo5B8DVn4JKLwfdyqE4SpWcj2YdRMH2heeQ6wof3tLW5Jz41NzxaRBEUmpot2bZYaNSZok2Lg5GK43",
  "key5": "62fDPJspb3wadBqbbnEGVtAfJGXifoZzmdse9vPL4UimSq8dtyjK2wSwiCVwFhNsCZ5h1KwFMaDdTXx6DkGo7LAB",
  "key6": "3ck9B5QWYMzXLGU9yQyYSXGaurTcaQqxsY8reTzpJhta9ysDYK8QDhrHVLon6Rqqhxv5YrEKinEwEMfES2uMxi4Y",
  "key7": "9bwWTG492xAMm47co87ZC8Bmx3JGoEfhWjHumcZKVb3cv3YAhbKDQepbT97YvMPNjfAnS5rJ9S4TqrActpQgojq",
  "key8": "4XRyhQzQnX2m74NmLzzw8LJU77P47PbrYiTjV59bUrS84ecahzMqvnzHhhKErCnWxkx7kDgkESsvQ3mWRSnnPgHb",
  "key9": "345oM7Z2U5QCHeu9WUpqXvRSiQNoH33jmrxnYuFLAKvazBx5gavLwa9J5ZyZhdNUqVCziBFYB7rtAK84AnSHCgQG",
  "key10": "45dmRvcorcUmqjG1oWbK4AFHLRLLqp934cMoHL8G1XkFMHakgVH99KJ1QFByPbyLFSPoqgVb7dyfu2wsc6GArrwT",
  "key11": "2g52kgB9vCo9HvUgeAyWHbvqW3uDTeqmsCJHzBX6FT9DujBdmtnU4rGXsdbHJQmehtVU34YeYPZPv3Xgakxeiyr8",
  "key12": "4EMN2Kq7yGoFdMAVxAz1VB5WUQ1gW7Yi9QrHP1te6nWTZpUqrVbafcdvtQpdi98m1g5veTHB3j74BMW3M8rfdEGL",
  "key13": "5U1HnTfAHZZELj3wnzXMtV8wEmm7iuYiEKhu8NNzeup1dCGEmfhUmSZLf8qFfUuWRtwm3McXr3Zsq7FkjuxY1Zxg",
  "key14": "42vhtnPqEzJnB7BknjPzYRbLp7QuV8yxmsxT6j3YC7gsG9afgQppuKbTzNYgLDbgo26Nv4eJUDepE2gF8h52znDE",
  "key15": "ohNwzb6AYtdoZ6eNbmcc7TPoxKhwPGJXD9NznD1KychySNNrL7tAisoWBWG8fziG8shRRkaWKV7TW5h3VgxATz2",
  "key16": "2W5WPyctzKdyCajBBbT3PKs8DJ5fKjyieSaLaFU3fTWz9AbSTuWjYpWm5w63EcunaVUVkyA7BEfWebRCS22Wy879",
  "key17": "45bDFQrxNXrrFXeib65C4iaTWJqvrnRuWUXBqsBaJhSkhJddqnKrYRm75JqQkmPCgxDiNrgAK15UXFqDNqUxn7CN",
  "key18": "4k8YzfTC3HMP2DjKMsvYW8z7q9SPA95KnXoMDUdGEkDpVZd6w4uySZnC8nwAoYeN6fynPerDJTWMu3cuxsoeCgbS",
  "key19": "rh75MjmtGrCthLEW9ZtbZ7hmffgbtin6vPbdaB9gN1xcukParj4rAZn8TpzeYXYRnp2xzz156vJV7E55t4qfFEk",
  "key20": "57swn3U9RMwhbta7kaM81k8ojmwkBScuF4CpgwU4W8oy2qtmrZpUowBk5tJTmBBrAUEpgdij9grjwFG4ER5SMDiu",
  "key21": "3c9xbkAM8U5u8kfZqKuPF9nmFR6EmqQJRuCofneK2dcPfSwfNLCLurTYKhvw9N2PM9qsKwDSraNn5WmuvoWJPU2x",
  "key22": "3G8Y5D1DRvef7YFnL6jF88VkoFMiDfsCn3KqUPic6RJtykPuB4X4ByXQqyFidqoY9r9TEHyGTPYFkPaa8JbGHanW",
  "key23": "3thqpg9EzsZHwMhrCAA86vyfNtFqeHQepb9vs7QhyqGPXra2sQDMK1rSwkof9TczEGbactXBy6UJf8q5aTnfieqV",
  "key24": "5MFTtZQ849KweM8zM9mJXzpS2NXT5AnzoxoZAvqctWrdxvpzixq3BkiRo2aRJKFrpGX5B2mJBEEunGekgpt7M2AX",
  "key25": "2ooZ7Evosx27Bn8ctKABmdRqJ9T6xPUoRSzeV3jDDuzdvaKu36E4ddggTZtWUaA4ZhmZKNQmGm6zBNq9TsfZQGVz",
  "key26": "GE5iYT3UZK337t7pDWtP2PC4WywHNYxBHnX2Rg3C1BSr3JHbgpaTJmLVS9dZHwpephk3sm4NUBF5vbMmBWbNcBM",
  "key27": "2iamV1MuKRSgzydQKXJwsRq6tD4K8RUuC8KKogVWoT8p2yrqJwMTA2rtpgKwTZPhCP2UontSTbXkLRetzBt8kF91",
  "key28": "5vQrLie4VgtrnFgZ7aR2wFQFop7fLFJvVRLnqQWwHxVeS4zfRi9ATytP5bGzUPaYDpzaPQJGs8gGonbxadRzTCPY",
  "key29": "2eRbSnzFoKC4ZUCdotc4daXu3mCY4BBtTYh7BPLuLLB9SNRHuzuQWaXdXVTgscX1GQU8qxkxGMdjTL6aXXBv1Ks4",
  "key30": "2qFKA1stZYiuXgLWF2MSCyk716riYk4jWMETL2hvVYiyGQfuKfb2iUfK1qeR5w1uKLPu4UUpywQ3eNpXNYPbLwfq",
  "key31": "2prYgyJ84BYV6HpQskj5m8AWH247mX7Je4JQ6Qpt3pGohoMXEGneEjfFY6mQhDBraF9o2UjPQMTkdmzpmwo4MXPr",
  "key32": "4NRMEquakCy91TtBmBR6RweqDaPs96K2EokJyUGMnQQ4YwYkG1xTEeEByUPk1qFiCErbc5L4tw3AC958kERzcmWd",
  "key33": "2hP5FpQomXLzfx52cvDLhfodGFNikTbxf7CmsePsuCjoKMDEzsvaqAtu372Xq6t7so6AmWX7uwA5TsyVgkrLWCQd",
  "key34": "5896PU8eAc8q8u4276pvLW3WY3AZv76rkHYeAKquDyGbnPRL1924dbGcMXnnPpbxDceXhaz9iwWXaNSw7wA8Q7vj",
  "key35": "26YVQk42zq5Hma8p5FhuscLUdBh9RBwhzSuCboASCpdsVsbKP3GoFZnPwdNZTvAuaMy2vWkMdVWQ5cyvRFzM9bLS",
  "key36": "3ASrsRzSaBFbQWZTAFY19CpydMcto9fee2pH9gDBh1x34wMvv3tCJuYHAu64r9YoFmTrfduXyuAPX7myHr4uhpLQ",
  "key37": "2sVyRZN2uSXE8HkAUT1koFb4wNveE2kk2o4tWcfHCzaeuUMbSvN5icYqNx3AaVcv6YjorUMdJP6dKonVuqLFYTNF",
  "key38": "4TwydWz3FwkNo3hiMMCoQECEF69ckJ1oTkT6n1joTuUAkrEanVpzPQywixTe4q9cCLEbPXFprH3HAw4TyJbNi27r",
  "key39": "RSHjEpTrX9rXxDo2Q6oiVfwnBEab92BuyAcDLei8BVsk4p1zQf5YkouyMcnqiVWW6wpNdWHQkJnDmNvajDajEey",
  "key40": "Nn66B5xjW91aWQ7g8ff4ieKmawCFzxkVHkYF8s1k2BL8iGBFbxiXg5L5FrTzW3RkTRafnNcyQD4wtPfqHJR5MRg",
  "key41": "bwhEyz1fNnY3doeXnHUsjS3FZ5aohuc6FjnCgJpyac89TGqmjrMitvRTArMyo5iSuavZxdztyzy4GXBKxqiXBTi",
  "key42": "5h8iAZJWNjQ4utBshvsr3A8SeD3iS7JAYgzpnnYPf1oNSrvsMAVzxNWCtRDXvNuLBshUeY6x9SEBmMnbUasDtqNe",
  "key43": "yuZaxMWeBMK3NvgQvVKKD3ScmU8v983ReD9NJtnTkaszT4ZqdzEbnZYL2BrCm4N4gimpB1vhfuRaj1uYdQjnwbW",
  "key44": "3xtQc2kgBmdcvgEGyJkQ5NneW6ka7sWSeMNChWQ923nko7uaW3CpdwCe9Hhf6NcDLxEjcbXtPK9rabWTFicAvmYS",
  "key45": "3giWePgQr9FxWja8ZUp17bELt9Gi9NpjbYfNba4PfMCo4Ld7RLaZmx1mW9QzDHWg2Wfr4kgktob16AmVvWcd8aFu",
  "key46": "QxzxNkGWLDvmPwhTFpJMbEreZD5oCqvocpF7iKMkRZrghLXnVB6A5SQ3VNdg4c2zVkC7ry93WFmi8fQdNcKu7Lc",
  "key47": "2gtw4vbb1bXKWGu5Mh2bJmazMQyN4magQMTiiTrWEP4ipz1mL682PDKr2MUYx3sjDcSiw2dXG5XMHP2A6Eb3Mx1H"
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
