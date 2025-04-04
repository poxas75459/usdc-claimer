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
    "3k5bjYiXFLZYWRbuAqBxU7mQyGtqaVa3SbcoEtnQ8Z4M5HA3mChtDcyBCsPadj37ZbQHzwGSnhmqLb1WodPc4MJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6336eAcryyXkD6RF7vQ1nS1dLCPe1aVWEzqdHmZkD7QbYTRCakXHBheyQvzHHAKxDtoz6N2awh3vpU8sAKfAgD",
  "key1": "2LN3HXMCPhaNGog4QCU5CnmxYoFzdjj6MM7HDbkJ9gSqE8afT3eRFoU5DjVw2FbsbffG5Cjm8d2id5htAuEvxj7L",
  "key2": "42z4UiGYVGpB3jhEp5GjwYgBErvR7GSaeQ2JnVWw8HD5bsNYJjVCJbG7mv7fBGKaTKJ5f8cqRoFhFoNCDZL8RrVW",
  "key3": "w1dqHA44Ep93rBx554LUJWzDFzjXquqzDoWgFEo9fRDWSTKQo8hGeVGytA7RxsUYUQFPgMZTwDd5rtjGHDicR3C",
  "key4": "5Yj63GF3dg19euzqRT4E1ZxxMZ82Gfd4qiwt6EDQGeBtz2wpHuSUNVAfNKN18tar9Smdufy4XCAc87ySdo8RGttd",
  "key5": "4ykXrrUjmPMmEHkww8G6zUA5ASk9VryrMcrYQNm4yJjKDTychh5gq4YroxWNE2DBhr71hKMDR4hrA8LBwGn7YGdN",
  "key6": "9mhbJ285CZndaJmbFmzAoQe526aeMroeCo2M5KsrB6gigH6VK2NBrmAydfUZW6cG4zi83Dv2VtR244wuaEYGBU6",
  "key7": "4Pnkbct6TWW2urdiZ68Q79VsmUFuAQnsBohkq47W4Bmd2sdnjCAsNChSGNqSzHMw638zqPK9Ua5NpchMzfgKk2qf",
  "key8": "ppUTviv2ui3ehZTyaFcxuFr72xmRDguYiuw5YCTYeRxBsS3bbZzFk3aEeVf8fBnYbpNxxqYaMAN7QfFEcYWpZtq",
  "key9": "2AA8hTk3uQkPjiYJR188uYjEj3No8DFU7BKXDxn5ecjLMEEqBFHCZaEg7qqjMcPj52fHdVRC31TZu4K7fc1brhDf",
  "key10": "FnqMEoWuNqCqTLMQUFhSxJQBxdrfoC3iDCYABukKjXRLHuWtuBXdZ4waZerKQWK9ayXPsYTN6ZUan6QJAXDsBuQ",
  "key11": "4a6UknHApT9SuYsFeiBoqXiPHpK4bg7TxRvTPVqjYujZ3Ee5ZCWXqj8nNUqELGMf4KWzdphwELYVQFFmdJVXxJL2",
  "key12": "4pqSSaX7ErawLwQT4BZmbyFsyE2wtbvyCdX1t8eddCq9FbLtjmkCWXZSLtWscx2267A5qytvD17cJtkM34HT2KTP",
  "key13": "4qfRp38Ymw2RsHWEn8pnDapjJTTMMAUV8NY1FYpYs87CXiKn9CAfLG5wxLJq3zc3qfype6PJ8YYSfbXcsV6XcSDU",
  "key14": "djymRwXe6vr7ucr5Vm7fX17XLEyFAKN7EjzyZjy9x2rhNLWBoHERpk4PGX8rVVNEKqHiEafGDvefSASrMzenQwP",
  "key15": "5eJXBJbLLFYuXoRZv7Wtw5c4Ae2zqiYr4HsgR5RUZHKf7TFU1t2ufuhKrnc4cf6HiccYupUksf2EKk478oogvGfH",
  "key16": "62ChZRRHc2ygktaE8Lin5oSCppGnbECGtS9nGY4rsh98wCSg2MVRBmvi7hZLDYqQcmDfHCCU72DwJPhvsyuStnbM",
  "key17": "5MM4QZcRyAqFQ9eHAGGKQzkLwzA4V6b2n1ZSDgHckPre2hMWceEdBPaTJGEEzbMgtGHKyKJJsEcr1pRJcVL5rnMc",
  "key18": "3uE5xdWhpunxF8U9P2sDQueUb3pkxuZjcDbT9AfKGbTAA7NcxxbKU6VmTBcx4wHQ18HhuUnTLMFXbww6vfYuY47h",
  "key19": "5PLqZA8KRVTfFMpNTPzm7Zh9UZC7mXim6xym4S2HriautAypfbLWpgz9VzvL1go97qGjPzpxUWYDVkWoP9weaWQ9",
  "key20": "2yreZUMxkq4VsbwAeipTF34cNfbvsYgdosoZsKmMrK8gwjvSwHeMDEsZGQsCo9YMLKdzGnZMaVnpwuAyuZdTozhq",
  "key21": "2bHRHKqBikRgNjzjFwhqnPBB8zjrhCj8NLT1gs4RNoJ4Kn3gg1tbwRkmKwW4Z5Y5skpbNgJ5LwZkqwo1xq61Pjj4",
  "key22": "5LE32NWfBNKugzj6Y46oUhQi3Lt1aQS8WtD99PvYEV85bTAngrXv5DieRDbuaDzNZAkhzWLHeUbYheDeEbGdwn3E",
  "key23": "46pxeeoZNNr3RWZufYgbxugYf44CokDYfGwzhGHSAvYCBWA8247Y455N61iAihfxW5gazqcfB12fbjPk5hWdjF9J",
  "key24": "LUeR6BKYDdjTnwjVPAKNUrmGrtiKPjdsBc2EXfNfjXESkhf1NESrViSxBe2UZjHFkYpo9wZN7sDMWuA1jssPTQG",
  "key25": "5UMuqDohUr76BDkqBsAz8cewNDnM5odP5DvozzM5BE48EyNYVwoRY6t6uPeCfRVuSTUnKdoySRXmwt23hE63T1cY",
  "key26": "3Q82BtEEj2frvwozZpUWMUnBMFVN9YhkKruj2JRfLt3aTZ5yy92dMps7FGGubtaCqGE2BPdJccMgA1BWUuDpt7AV",
  "key27": "ZjdcCGDe8kc3wkwHkRNroEq9bp1mE7KT9U6di4gH729nkgc7ygLMWCeqrsR2bykGTpPiPcna2dbjrErzemg7uxd",
  "key28": "5PSGzxeaC9ooxMg1JArZ2QHgC3s5p7F1x8MyYjvij6K5TB3ZJ4DxMfyPy2AhJeyJrgG6EWWskG3sD8f5HJgRm3MR",
  "key29": "2f3oUQjBRneVJeg53i98RJdC5Exm8YfE5qZHXdsBjsGqLMJZdrF5bZFZih4hMMvWyqnvjkn1ZjApgziaSiWGRupT",
  "key30": "43jeNiYX4XrkrG7kjo7kH1h9MqHg3sDLfYjRYiL6pX5nHwzb1L8geZ7sq5dk3GUcGNoSLRvznaFC8s9hCHTVrtBD",
  "key31": "G2AC4g4PtiZYJUhKVVKafB6H2vytP42GZTEvLvzg7hVFaETyktWRLo1HLVSsPdFz1tNqttjT3s1opibYcSh8TJ1",
  "key32": "47nUX1CFbLseeUFkSaVgaxwp8LLjeBVgWcx8PJFhnVShDhi3gq6CpWv4tejkVFDkJtwxEmbwxu6V7EmiRcF89TSe",
  "key33": "343Dfi9TXeyEm29BRBdAC3p6WUcwJjdtBwSMJyg4hkkeGRHCwxLZZMQNJz8X3U6yntAetYNg2YXEHzySvtBy9Xq7",
  "key34": "2mdf7bhvh1i5nPdc9XyM2HTjPTducWFeH4aftLcZzgoUUL4nhTA5q5auBpYHx4MtWouMuaXc3t39QgDo58ebiC3d",
  "key35": "2qLNRBVy2sfx6K7kZvYQwqJyHwkjrm47FqNXVokehjdGwuMpoXjHxP87aPEX1AphSPFdghB4k55vpfFwbPBkK6UN",
  "key36": "5NvCwHQV5fXSD5S9T5hD8a2o88jJKyVmkzd39CqKTYZyKfYvksMypFFGs359f7fqdd3DYeN5TtZZdCDVCnMine3",
  "key37": "5ognT2n4bcx2DmSyqHzmgzcw5HqUuYE5AS3Hj7QDUwz2ikPG9GBe23ye8Fp14bRuVPU7HoYyczkKaa24gTS3zhcG",
  "key38": "2xMG9uzXFKV8mXxbs5G6LnNyM2Nn5sBPZt5swaiBXBa3gPJDBV9Ur96vykciqFx763N1prgNb4vGeNxiWRdg2Csu",
  "key39": "342omWJWt4RMmhoh7ZRsJVxd5ewFZXh9AoL3MfAQSCoPApJxBTjE72D9pkVpnqvwWFP6a9JdGYPurqzvTzCVpULH",
  "key40": "44xGgXjftWDkCi1qxeLAEcER2X8ApvgZvQ7r57kbA6AhHHf4rPaR8xPoMhofV2aU7TBpMH2RrMk58Y11wfg1hcSU",
  "key41": "2Te4wU3xrDpgxxavKVsFahXHUwQXeTFp6WvgD2CLTYdhJSpNXFJhEmDjJCDr79MpvnM3Sy7yUcWbjt1g8v8WdhLQ",
  "key42": "4x6KGVic5pShQnxwh35bv3EyCLL3jNDzgv8sjXaWEFJrtw1UGjWAo1a4qoykQ8VH8sxhXkZaVqmuNb8QiqbDNubu",
  "key43": "NXeNbGTx9KcBXzWEYVCp3YQV1myaFfyh4DpcJvhTHEzjNRmeJQ9vQEjKq33iLCWgFFFQR9uDuekBwqXgsgFRcDs",
  "key44": "3qo5cvrXrDDT2XC6drS87HQjRkNSveicjutpeyNgGkx4S8UGhULcGNkLLG8kY5vWtpii7aYiakENAdjDSGHRbJdH"
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
