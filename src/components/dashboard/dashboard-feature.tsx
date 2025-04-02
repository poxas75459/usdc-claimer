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
    "2tEnDtGSYuHKmAciynmEYS9qrBx3p33WN2gFRoo2LCVT5yqhz5Uiaw9jKX11VtDfRXTeTd4rKyi6eq1APxiRPBy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezQsaojxCgZVFDApBxPJGRMsNVAfSXQPDJXy9HvsPy4YHqiQsBJV7VYkDtdgStiQBBSZtoqKVPM7SrHwkyA5FJA",
  "key1": "4Kou5BtnArk1GCCUxXVN8ezuWH8ZuP9ts3aGSs1NBBj7sukbe5kTT7uA6FHtwBnvv68CpRyEkNAhjCx6uGG7Zcjz",
  "key2": "5Hf4bsdmg8przqTUHhbzaby9VpH75ioR1n2LTFNeTgjuZyNNMnXh3XwDcENtmvqq4baifSEz2ShZgChgjAGkDpiR",
  "key3": "4w4ppkq45ZXaj4trQyvV9NaDWXnWdD1F2HdHUSvXSvTRkPpjnPLrABBNuV7F4CrQ6qRtqi5T4CrHQzTCPkvPot8e",
  "key4": "27kJwn4dTynizzmaJ1yS4aprFW1EJ9swwTRMNiPuB9LhXZv41He7k1BUMHBAgXX6RorP5TFos9LoQExyyB4HcWUr",
  "key5": "3LaqqPrZAnxsgEmUHPikakBohJ4yz91xoZTYGXwmHKjrc4s3GBHxBDthAm6NMJWXMFak9S8wjpvyeAHV1gDLYXxj",
  "key6": "2E16LbHZesGgWpkC2CWzXnLsMxbVxAxCSeSnYmYhbgnzEqFpuBh2qTxyENY7395YopjPdzVj9SEXSVVQXuqLENCV",
  "key7": "4nqpjvG7cMD4uD2NeNj41cwaG33uSPrX4PqJYJbfLFtNQZ3AMP2b99WMecvN9StfGFXpKTgM4JFwFyhjzfFZAk5X",
  "key8": "3gCmpx5J3wqvmVyGJCFwrA8AiBJ5TBnRDMWP2fG5YRdBvGpAZgxScDHmwyoSdfooSrnLxKAAwzGdRWyUgwP9A6d6",
  "key9": "5cHi7yu8gSk64BQoshcunCPhWtJxPMzLvFXrcbRiqFBXAQzkPe4Ps6ez7oQRxsxjW3ziFimEsBujBLgHbSzfu2WF",
  "key10": "5aYAJjyXg4rq3uU7QwYBHguEfcfx5ZtVGiyDR19bikVUf47HCSw3k4ZUJox355s9h2gLB2NBMqvR8z22s7C7Qk9T",
  "key11": "5C77RS3pirMsLk1nLDptkRToRKbuDBoSAT75Bq1ANfCwFsCyRQRXUzztMVnsQib5VgwC4kNNu6pZj9aASdt7HNbY",
  "key12": "47nwYbwmESMmTPHSVjGXXozk6NDVYT4mQqCPVDjMcULgPBzNiVPCcvwKpm2bYxPxFirVSDYETSAiQHVmU3VJf3G3",
  "key13": "28HAXBx5t2tmLKVSwVJc44baCd8iMpQ7pFPJ7oHnvka7Txzh1WYMasX8x8VJhNfF9mrY1yhC4yLoLxrMEGPxZjAd",
  "key14": "2z417AcDcrhWHX3zw5E3WsbJ2RGxQYFW5brhuST8W5WLQ8VVdzUvDMBdTnXfN8ry5K2MLZuVb5KCtC4biab9KudX",
  "key15": "4LvN1fDBZc3Hm4KHDnmgAKenASND1PA7WuzViXjGfzR2N4VRGgeD3hVV9CoaN3G7tdV2C1YRG5gP1Jvom7ENHiv5",
  "key16": "5GMrqBgkiEBNvnps1AqcsehwFYDXc63kiQCDAb7miWnqq7mjzHFTb1tBm5d915wWU39Ndh9Sfd4bsbatULYf2S5f",
  "key17": "UnPuRYDR6PjRKpWea2oqp4raTTZHBZxGggtWSMq9JwtAKh1dv2sksSbTzHe8BgrgQLCXgNF1EzgsRJwQhUNYCrD",
  "key18": "3gAAf7AVCiyr8L32KbYmDXuVcYWaSFwsugL3K3JYFus7UbBo1bG1bZx6SbqMWYw6zr9o3kk7u4D7wwK9jbxZYNq8",
  "key19": "ry4mARerbR4n7EBSrRm5fGWo2QX1hESdKFWLRZ31xd41xQBpiJ9PcFfcF6rYven2M9RXXtcpAhyHqT4sVD65eXA",
  "key20": "35n9zRV8aCeimibm5VaZQqR8wQMKhYEAXciTuDA7s4CXfqW2bpxhATdxMJXjXBB8Z1MDMy3Y3idrZTHLnnFFLY5S",
  "key21": "2my1mweaxtPqtRHEzeNhg6CihcJcjYPFP7jGA5hu9bjCBoeyu6A82uBroyJ8t87BSxKErY5z5BTiGnBh8rrCA6u3",
  "key22": "4x2YXn64qCdNzRaNBCyprw9nnP8jCoLk5VZfkaJ1LHKUwUfLhKuhmq2CRHjmjqUhX1Dn4orrREadDEpqjWuZGbTE",
  "key23": "3E18XyjBtNsWpWG7sTEq1npRDob3dYbGAJvxzHfJKnkdJ2UpQYSAWni1ZBGCGNNY5aVbYsNQCzHrvcnt29YWpPaE",
  "key24": "p3r2SNpMTFdDJ4LeePM8F69Q6A58KtSV7ni7GVndvhJWguvtafWso1Sy9mWzPYbPH4UGQQy13nix2bPgfp8DpTR",
  "key25": "2i28rJHhRqFXxTx9wu8QhAhqP8DmRXkVLP4qpi4noJCuLedDkwZ5GUbPYLEakZjbSErohZ5gqvu2tHekxSt7yLbh",
  "key26": "3w3ZCPUVpfNovq4achKJSYCFqaAKgEy6Wm3dAnFUbRt2kNfFUdWwLFKcmgEPjawyoJ5UE5vrUxTQo21CtzzNLbpS",
  "key27": "5SwyUnCk4AyBt6m18NY4i2YW76WRazWzdmMnXYzKBVFMirhTGx1K43sP6ggX3fniebTdhdiB4WCK22CP8R1pmPoK",
  "key28": "LpzmD4GRM1Ej44f3wfH7ChQpLU3wvJzNBu5wADoJ2JF3NuxgasjTHvv7BNNzosdfFA9b357SZq6LZWwwrbiLVY3",
  "key29": "sWSnaQrhHKYvJqi8Q9tdNgvADaj6UvMJD1iVrjWqw4FWwgQaoUxFHK9Qxw3yUWo9a7R8297ko3dAqVNLxms7GpU",
  "key30": "5swvJKLLY1hrRmwMaTNYtigG3qwtBrUMRTgfpY6xMq7AWtuET2vzWUf32NdjhiqtGACARffAwB369PzT1GgdUjDY",
  "key31": "3w8NGtHjPKoVs8JN7zYEz7DmqvdViTFczepsHUQY1oH8uuxHY3p7eGt1w9kZA1ab5NbVUML6fPnjTL7hDMm3QHY2",
  "key32": "5gJdvzj1PZUaBGfNekZDFGhh7NJpMDfLQTsuRPPfftTi3HyMZEmkfHavp22aLhjVVMhrBMt5T4YCSoarXgNSHSrW",
  "key33": "53rd77iFWDVRWEyJS4cUwat4a6zKLMtc8t1DWLJJ3eUHhQCQocBFmr9xLVouhRtFMe7rJhjei8vdyu2dUdqk6wKh",
  "key34": "3YgjjMzrb1GKRC8sMvspfBxcpXAGadz1G5Mx9h2U3hxmtyMmKaESiPjPeiP7H1kHZrGjfLa5xqCN2Bm8tFqaWtCZ",
  "key35": "3SyaPGpSMsaXAUqKUYdPszSZ1FTdrkREggrEVGCV8UgMvJTErYG7YZ69784AavzwK43cLQ2fNasXjN3yXLR4tyZy",
  "key36": "65FT7GyxK9xkFdaX7LwpKzV3J1s1XVmGgWDtBJT5snK7EvE24AUij8CJqA72DqpoECN9qRUq341AtiPCNNMs9Nd1",
  "key37": "375NJKstRK3kqoowd1HWtVL2uBC6vgcjqDPjPL5k777D6yXZQYRRzbcxW8Vh8XonrEmCwYxCZLN1fE9SfdKHgVPR",
  "key38": "5N4vCahz3hYbNJzPYGRhjQ1GA1yHWwQtcyEtti4ZMZzQQ5tygtv67aHnw4xqZVhSNdPfd5kxLQa9a8Xp2TkALebj",
  "key39": "2cZrM26azGYpZC9Qotb2BMoQBp9qsMCmp57mThmCErwK9WncoqBPuBQHvEEPM8uM8BckBYkYfMiPqmb9WCD5uSn3",
  "key40": "3rDrQd3CEKRTwGnPnfVEJS9vyocJXsAyt8vYqHUCGuCQVjQ957Woo8WjMa2rv9vUxfyRV4VLk4owUBNvsxde23oc",
  "key41": "2LeciYPHSeSXrCk5qGTEzoA4fctoo2kyYiFRCG8Px5NzWRdc7b2gfMWmgEGQWLsaxMnQnHTVAQM6XSKFDHxki7a6",
  "key42": "hX8oFxcdxCPmnqfrUWXpQaNkZGXnYDdou3VTX7X8yr1KM87XKq2iEhQiU4pu8zn7nSTMcnG6m8Cvr4FM6ypY56C",
  "key43": "DAPzogYxuQDMXNo3GVczNFDiAP2yq7FJuxhYc2ZgZSVQztDwg9f2jmr9Jp2Wac1psGcvfkYj6uUga7MJdby72ti",
  "key44": "38DyPE98cxo93QM6tnwS6F3zFBQFuSJAY9jcTovmXJBbc2hGg36KsgTh8YuRWxLUwCWhhH3kykgxUwmQ6SwwFpEq",
  "key45": "drw6ekMf8wjV8Z1Ma22Y1hjQZSmfxJ6jy7ShPxGPupC4ZBnxuhArYh2Zf1XvvFJCvQ7QGyTAg3486zkzMvqYFh5",
  "key46": "3DtBNVQTdShPHWdem2q1nnsQGASYq8p7p4TiPEwazyahT7iNT8QpmgwbRhVV9k9MD8EsBuqaQCCAKvi4tNJ4SRZY",
  "key47": "fc6KwqcJL5JWroZpPcSeShQjv7vJQGJihTZ38xf8jbhrqL6cHBccFNquZZU7o34Jvayut2ffgrHYtHqH4eEfWqW",
  "key48": "5w1Uw9D1XUNBkqSfuc4TzsBxV5qb4q8tso9kgrc9JN26K7RzzWUB826Gb415LcMFYR1Bz93B9gNqRsHtpk6RGJMh",
  "key49": "4cWHJgjm3CBy3Yf8pBW8X3K5R1nby9XkXXaUo52fGTo6PqeVS3mQnaSnaUu3K4uuKvmeewTgcy98L2Ptj8Rb3CKD"
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
