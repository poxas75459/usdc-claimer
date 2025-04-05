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
    "rbJSvB5f92vtRfr55xs2qDLNSYFon6CXsQ9hvQhjECcG2haAnxerPusQkoLbaanTH4Nw8d9JjS6fx28D3tXY1xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wbgg1ddT3V34zGfvuuhTvA8xCzXU7w97sjbyU2JFWv3ejuGS8QV74wULp9cntgzb8PDLEU7QjQt6qNZqrLtkLk",
  "key1": "2zTmkFkRwSCnmfPn14fX1mecNHhChjYvTQA72N5Yy9NX6dnvioD3Z88tb1fFqUV3TCgAKhtsPYTevyb4BPYS8a2i",
  "key2": "4ogvh2eaecVmmuWZzLyKSZDji8YhjhwCnYLDdB2XpZButG7yNCPbwX6RCzBHE5BE8wPzBy5WXTUBqb5W7z67hUW9",
  "key3": "dEXqFoaH5YA5RrHjqsn1ANA19Tv8VJi8KnJQdsR1mM7rpR8WE9gFjYpcooaYKH1vbvywbKDmMgyh9T891Gnkc8q",
  "key4": "3BVHmxUBuC447VFEg34myv9kFitjAZpMrqat3nD6RNCLzLMoV5FYqtvo5QfvoDGEVrLr8HFRypEx7BCk7fYuNpYf",
  "key5": "3xo4pkQkYoEMGcJEVLGRkpiMMHpyoGxSjdwLivTq9VRYeJEWRXP1whCaMj5UJcFmY6HSf6etvggh23wVPEyvW1nm",
  "key6": "4tHG6jKy9MQtpHBMoTYRsHPBDLxDANtHS4vo1inMyrHCv7r4cmsBYCGst8Sba48MJxMtky3buvuTQTaHRSeVWxwb",
  "key7": "5L6Nzo8fk7pxPhBWbGmQ8W9mPmvxPcfgp9SSJxya19tUtm4iwTTiXwdCLXyJNgf79KMh5vx8uVS8BJzSeYZRZ7UR",
  "key8": "5cEfYP39Qb4vyxPFg22ro8tQwBZCdL17bicN1DAVNi8JP5BLi7YcMGBHpzH2AUv6XeT3qk3SCkxSK2DmJGUEyNDz",
  "key9": "4onEKboiLb9zUMxinc6T5jaTScoqVD6CwVEj219g4S35BEPx9gSxVdw48fwQgHPDiEc5jpnEx5UgnAdgSzwRnzZJ",
  "key10": "rz8Mp3i2LHceMNRnPmrdtEbjnarUkkNpXftEBkgYWiJg1UGVfHYjngcocD6pfBKXULeXrRS1B9dsvEP78CenqYS",
  "key11": "xq5kJGy8HhXyNiaa1v7oSbdfKnrFBDZcG2yTEHWtpPCGJb28cQqr236biuuXoV1EX3KBTdFBJYeDTGdDqxRohvV",
  "key12": "53PcoEVquBjcjdTsxTzWPpJYJSQathmQALkMuFa1eh8a9VW7KB7xCChhdyBrtgZBptJWp9P4L8EWXuZyjZvehjrB",
  "key13": "3bVSpoEBKc54f92HVyUGtMUEKcUsY5eVeTYvdWQvMKMtSHbdAWLu7TVVUgbN8M22UPnGwmixAbDj9etke3La6wbG",
  "key14": "CWyZKk63masUsM2gfzYD3ZX1pE1bA3vbPg2Y3mdZ9k1fGSea59ZYtB3mM8pUGjhy3hjxrCQrbppEkbNHWSsrrLo",
  "key15": "uPsZbgcFgXBet4Nn6ecYvtfPP1sdD1e6nryBA98dxRtzMdbYFkhr8LgkxfZSBsVibopwG73CyPj1iJyjrCqP9Ty",
  "key16": "5HpCX8ZdcAXMF7qPGhaWETf1toufd48sKMBSUk5Fwc3m3N4kUYCgd7SPeMi9zuQKmCzpb6VYwRLg2FGSnqFER3YZ",
  "key17": "63ttuiSA41esPbTaGqdZTqwNxszRAPQhajxWc1a1iLTx925JaHZkzGbJzW5Q9h3SotDimxLCR8dLHrAN7sAc19TT",
  "key18": "4E6bLf41pum4FgQB1rU3JTNBSbHxLAAr7Cfr35hzDft6vwWTsEjgJ3ShVMw4gh8Rx17NmYujuBZwW3EJAEp6C6Qt",
  "key19": "2wUbcY4XJz21eoPcMZpm6nUPHWTnToNEft6eNwcjYH6derDawvSEZY7zj5mxMLuVhxtz6GyenPRw2mQxjG8qaALS",
  "key20": "4Yvz1UcwBz7AYsv68PKBzDTk1DBSPz5mRnquZeEqEaLHfQbYPqSoynqnhb91qUhPL1yR53BDoFzbZ3RtTvNugE3o",
  "key21": "5NihqdvZEs1WNZwvNxufVJHWLUWtJpYtBMxD91qZSgRzZ2QDtGuPaS2ws1JefuyXpzyy9YhrjEBw7XGHRpyzTqdb",
  "key22": "2L2KfcD9u1MufLUYiownHeXZPuMbHZgBGm542kXoHVNJoxAVFFM6eL1oADYxU9JNJuNjj2a1k5UeDj1GuffY42Qt",
  "key23": "5vXEfKiqUaJ9jH7SNmbbM9TudPRNe9DXZmxuabQdy4oCjye544LiS22fypyuqo4sFc2euG7cSvifLZCN52dfYBC2",
  "key24": "35GAX3jGaEncbjV1VUkHoKA3XyXL9KxxjjWCicZGh6kdUVm8ZncqUk14xZaPT3ove7bTjoGpeCLArY6tHsnwdAM4",
  "key25": "4BnS3ags4EmmQUCcVXDX9W2qQbNZgkWwH7w1rAgSC6pvJewpGRSvALkChcuYgpdiKPTiojXxhtr1QJ1YcyKAFRGQ",
  "key26": "3hQZMKjx1dULvT4nEVTzK2xUHhu2hNhsysPQHwGGtmJm8VLXALydmHFHk9kQJzfK1cyAAHkYvMGBYwWcYQJs78v4",
  "key27": "54XsJtN1TKWNPuqfdpdUU7WNX5wwK6qfceMMtYEshJVvE7yJLmdE8YW2LMyPU8UEZGF3BSNaeBuNKDPtGpKfmuQh",
  "key28": "5sPZMFU46ypZkRDSkSSNiFnZv6KUVx1LwMN2X8VQdof7wkDG4gQnDZpno8aGKCqVNZbrVNgDvisCxowXYL2jemEE",
  "key29": "gHvdqSR7Z9mcWEbie3mpKakmjMqDaM14WrNndE48F1YXK6yYhzZEgEkRXGKXXLtdjU5ttoqECA3Dii3ApBhny6w",
  "key30": "5x2XekJ43NubpRLGreDA2Ynzqie4k5ixWrhN4amxjHu6YJhtRThoC792aovs4uPCZrtsAZmgz3UWsYP2jshsh2xx",
  "key31": "2n1J6xP214WMCxwpGV2xbsvi1q3oBMq4SqgETbhpvRxwvSU2NiQKg4V5iqPTupLzpCj6b11TdqUNaDvzfZ7z73tp",
  "key32": "PupaMqEFoNekNBka3sJzBcG5SqFuXJjz2ppvXeE7LEFBVmN4X4Tdtd2QufqFBWWRokfy58mtxU4KrcPyKVZj1Hm",
  "key33": "4aTKq2vWqUtnBY1FfkNpt7584V8WQfTH23vHGQo9hnNT65gqCdkpGimYSTygAi2PDPvoeenLwvn72u8wDm32JWtR",
  "key34": "7yvPs3BPbWr7hs6gjY21aWEgBM5grMtHZuY8F73nN8QWvPDZtTk29JRxg7BWNdLhmQnHWmfaK1edYPWSjHf3xWa",
  "key35": "42hCaUCBr7wvqvZr4RdDmgAhPoEZN7FSVRwrmpw779o53yHXVtiQQkAJmEmMCsoXcV3PJJ8x6MzD3UFWgu2Y5pza",
  "key36": "3VSDNtXgmNsdfwMDPTmVWMxsVEzaynG4x9egPxofbe9PwNDq5MaT9Q4XYrPjns9A7gw49BZfUHkDhsjuZEMWt96r",
  "key37": "P5PzAm52JEKVg4aFCq5PTYE4mgz627D92pCdSTtoabWJGB56bRP54fv91QDWr1Lhu7WEELtjsqKzpcqJJonTf95",
  "key38": "4fCk9GwAvJQr9mTht78x5MnbH8LBVXt7ySEgbej2nAXo1fSkYUfmnga4x7D3BGzcRWvCJsxxrd4jV1cyysShGxyS",
  "key39": "5oKFGPa3LSGjx52He7v55HCkKcE3iHqR2qE2EzMnrHW3iJQwbU9BDN1BufkWcgNgXLe12ukQXhKBV7nixGRoGdRW",
  "key40": "5wZAVbLZDSRFWxVkJmuQ7Up8Kmp6YMDcntLuTHJm9TCRBeXtzbixSSsbSVWFsRhSibY8DDsxjANnAoGkPyJr71jD",
  "key41": "5brqex7JUNouTiyDagE2D1811hFVCfNdKJNVFK33EFbve4KivD9L5ZbLfiMSBzPXoDQucMVKpe91RVxR9joRNaJE",
  "key42": "3EA17yd5c6NajDY9ftkmgekjrX67NpgccoMx1AwYtVqi1ikmv6yBuhtYL5gZoouPTN5CrSeCeQrhzJNssfee6h5x",
  "key43": "3jfmg22dyu7w8JYLsLd3s33mnTtDQDL1kviLYspubmcDNDQTFbbVmC957aYTLM3zrkpjVhN4TQ86AHFREiA6PCLE",
  "key44": "3nXBAhV36qLJSsjXwYGNEGpNjzgSGahU1VeaaNG4c6BryT5Eg2Mrbnz488cEBA5xh1AzMPgc6oQHj5PfQFmw3BVQ",
  "key45": "4KKw7ZtDs41QPJiXpZovyTxgcbAoSr4GXsjPh73aD5NJmaB8vuV19mxNhNXbESTBJGUYNoZ4mN19m1xAqkKYRd1G",
  "key46": "5mMv5GBxEJt8huSF9vf5nX7wi7LqwYLNjMp45zdHZVocwGThWE81w1npS1DzodLZ2TtzZzLdiwTdRsRqZydDkMh1",
  "key47": "gcXEk6WxToqNnw5ZxgEgjWgVg6p4QDzoi9tJxeYqR4PF4DhdBsyTUunXsZ2YiNRdLoj2ckUmLDSZ36kNv3cQ2Jo",
  "key48": "25qrwK5myiEFB5HQctcrRpjD1ap8Vn2GjcHpj7keNfXaQdNpqr9dq3xDmCgRRzyMX6S3YbLor5qVLkdqesmz7nTp"
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
