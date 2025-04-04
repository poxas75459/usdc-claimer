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
    "3e6Wf7Tw2vgGV9Jhz89RxaZBGuTNRXfaEGPjaWguJXkxbFvZoNAnRriXMQvnnzLNxPqaupysD8UrVNUt75YFBUZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfDEKcJRfwfpsPYFW7rUTWbyU2ZDubcennZA9mTxZXH99gmZ1Z5Rk4s6FU6y78mYntN6FcvpQGNKB7VLBFkrQUz",
  "key1": "H4SvjeeMFpk2ZTNU5b1DcwsWtCLWmMEBjZyGRLYDzYUMPTdZMjq1fSV1EfCYzRYBHMaQmbWcxYZvLt8W94T98Tp",
  "key2": "4n1YNrTsSx9ZWth2qGW1BSyhxuUr3MovRrUuYgCHkcJuyVeEbryA21sDr3ATY8GRaKZ2yoN3HFQSYk4jycsLaMuz",
  "key3": "SNWC8i2q9KNtRsDPk4ag4KDHmAKhkeuMSPUs3h8mS68u6iqvYsNbm3madPdgaKYamrKwbczWKmHGrDR4f1Dwjby",
  "key4": "5u1fqeXd8wfCVhioWg6DkuQZF7ZoxF27MwBZ9aFpAAabSp13cfbN332KesWer249mjJ3sZ9RDVAtpBKKXPfdWBJJ",
  "key5": "4EFigQzVmzqKMR6e6kAeyvjH6rxNPcTb3DvFu1kQH3h87sRudFueZK8S5PiBs1XKhGDZsDiYHCpjDg5nRuvf3mVx",
  "key6": "3SY1SnHvYJc9KnYf61ic6LwBYURrdHTNBu3jVVsV6ZeXaf2pZmHzYDRHr1i6WvUHmvLZ8n9TraazxaMqEZNLNhTn",
  "key7": "4HyuNLfSHFMUUJcjPaW4zAe4idTV5xvXbh1UGzJXhCkjtx4mRM3g2x7CFytMLJPkG5qJLKxDD7YcdUu8cbs2VENa",
  "key8": "5gSZcjufn1R6grHXU25D1f7AH9ptfNTW5YFyJGfJ4jTZzdAf4crHpYJoj4efLHucnedx6zaqt8KFoQVFkmG6ECsD",
  "key9": "4EsapYsEFTKg4UAa5MDcdvHNEFLBdbiYkTES1asgYdBrHWXfLgkLP2K5SaLEfmh7wZB3pvLmWfxMpUrBMoFovYbF",
  "key10": "5awgHpTc6vWpFtSRYqtZofAq2MdY3EHHViJaMwZ66LkEpaBVZx9dMR2kd56xoTm8voyYafzvcqc4rEbTdEa2Zydw",
  "key11": "xche3xwM1E8RJJx3jayjwV2sSNGdQqis1zgCixusQfn6AhRY1WFZBMEmGNZ8htiYPiwqXA22LVSyjrd12MJqU16",
  "key12": "2VsrLv8SgAUsadWbhtvChCmhSEP2kFr8XvQH7rDDUQ5ymD6NSGV92tNoaBreZ7mKGqSyP6C4xvr45SP8NsXeg67H",
  "key13": "HrZwfRrTDdAQQyVqtJHGj5Dw9LbuKigpnBXK4o6gDj9LgUjk7wMKuDUnt6LAQsDhkk66r9CHaEPYZCdKNWGspob",
  "key14": "3HMgmAiQRHaX31inMrNYQeT8hC8h33DL6FyHhD2gm4ewKzsWCYcpzfphmSc1sqoorMAs9mx8hL27Pwi1CRdV7g2U",
  "key15": "3Vgk79YemioWLQ1fTYnHXjxcNPWoNfkbyG7FRNsGwNrM5AacpyisWfbVBNoVsMBVg7bw6cSatJCjK9gHUMBKwjHL",
  "key16": "3JsuUUWGaM8ifBYE1Kan312bo42q3ah5X1sx1L6qjexFrbipjXb11gDFPEUg5mbwGeUMerc1411hoqK2s9a417JK",
  "key17": "NrzXnuZ7wbPRcqDPzPDrU1yqGq1tu1W7TP7p9aPc9MZdiCRZgUhp2ry4xdFgxdhBUNbKoLNRS3H3zjAsRZdRKHY",
  "key18": "5w6G6vrB8s7srCDxchJDGNE4dNnybB5Z8qWLAo8HxTLBMr5nvZvHaeZEs7kcHrQVbJ2Tdv4hkwchAhXoYWFL3n5L",
  "key19": "5guriUdsGVFjjhGSRov2JfinF8jT2X8Zp8Qh1RbaUSRbavouUnjThZhujS8uN1gWddaGDxJiizKeEiKYPymoC3sf",
  "key20": "7j8DAhhTftMaBTxuQZbtrfEngrbNjkkxHPMH9AZJBkXMmoPB332Fg9S9AgDwzc8DjoVB74rn8jao1iYCp6y9NGB",
  "key21": "8JSmzZ4t99FvypXkVSBfbCFPLp5UPVMejqspQjYT37BVEWBXjBMn6MUeKmFVeKNnP4q8RG64sAT99tq4UyPGwjs",
  "key22": "ghJGB2KmLzW22bWXs8DBExsDJFaq2Ktu5Mt1aVbFJZmeta5iD8mFVqipiDJ9inZLbJi2U2wnFp4GWFZDoX9UuqQ",
  "key23": "dVAEiXiNfR5K3m938NnJUmDBC3ycunDFeTRKpk9U7fbkqrtWF7QmNtA65NxEafWpXvqFcakhUvF2uT1AdfPsJza",
  "key24": "rdPdELoXpaaXTLnabv1UcQZpocHHai1gtJw6Aj15v3pJ9oLT9EiyUDb46UmJ8Revn4BteuCgymTE7SD2odmQVDE",
  "key25": "34pVcBDkdrJTXreAJT8QWMrhRrjA6L8WAvh6EkWCzGdk6njLnaeN5pX5CoqVhUzy2mJbMZKQ5FmNwXEzxVd9QTBB",
  "key26": "5zEyNecTksb4W3ZgNGk3pdpvcM3trZMnJ8RJL85E7ht1pyDFH6xnoFLw5MBVAxYNNf5MWVRbq7kH6d9JacYQuTmP",
  "key27": "2jTSUMFBfLpuEXKLUQe2mzdR613eXfKTXUjLvWv6gw6T5HhhBX6jDTSnz92VzqLkC7Bxoq2zKSmPaGdS8ScjHkQC",
  "key28": "2LmTWVnjTBNg1s9WuuiyEzpAPfwULwMSmqhAdATgYcF9JomWtA1CNXnzBm7gSucswSY1rpzDfaZQCU35dJ5jqsyU",
  "key29": "65dmMWyhbaXeiVmMGgTGaJuD2WDMG7Tq8QWRcL6jPD8V74DYhsk5eP4sYdTFDFZaHmNkWWNwabCX6QB54rkwkhxd",
  "key30": "2rjJnFiU8MAbuxFf9GZuxeSGrC6vkmdz6zXmbyncAuNr6wSL5Mi38VZHbrEk46bASfrofe2zridMnwaikc4p7utY",
  "key31": "3JsFYjLH8kq5aSrAyDH2GtCtPVRwywNw6ogpK1N9qQx582kGaJLt7pZ6iPkYYCJN72Gg4seHaK2c4rMu62txbG4f",
  "key32": "2dn7gnLVEZcHYckHJ29fp2BZZjxt3JUTg26yabPGHN6YLKBFN8Ds7tHXRcQYwhKczTkKNtpueTPQ2bHK7AqaXg7s",
  "key33": "tei7BbCXjzPHEqXNZJ1dRPRQq98Nvoy1iC4LncaXQsxRrhf4vsfsEfVAc2JG2FmC2RipEUdJrZ25ZnQ9WLFLpvB",
  "key34": "5TwEsPU5fjEa4L8LF7NoNV6QMiEmfDmGL6cdX1AWnamzBakHjTJrVaURdKkxhBATKs1ht2XCCD2m518VJWr3n6FG",
  "key35": "cgeMXa7UxHGNUppMyed8QbToh8AjRUaudaKjSTf18La8TBxqLuaR72xFav8WGMEYKDM6Aovw7mQGDMxCFQmi2as",
  "key36": "39FTNEkjaA8f9o4anPPbdXsYca7yA5jw6ajNbLxgMctPJVy3q8GC3M5YRf6k2BkWQJWDsbRtU418CrXSLmCSMg5V",
  "key37": "3uAY31V9ENCRkUTah6kmvuWZA2hAbPrTTQcghooVWuT8hnPnE8Dbng2iPSJTFNAVR8czf7SxFvwGys7gNGX6E6x1",
  "key38": "3cTaG3JfeoRvRfKanUtNdP2Yg1Fqqfsskd3s55PqTjHUDtv2z9U6QYjE4mPyUqHJ7vM2GS3dtF7h5nBfKn8VGX1U",
  "key39": "tCz9pTTU5oEDM9ybasQnNLkvCijL2X9hB4x899JLNZBXcR2oJtk3nrX6APvJ44rsxDnMTic8sWcu3uN5KQQ2Jad",
  "key40": "51BjGWvb2ptByzGyb6H2r2gz4gtAhUZv1VbBxiUHU3ogiPdjumon7sxDcUiskuYbJNEmzFXT6dzfiniFpgXekxYq",
  "key41": "51ofx8V55FNxDxF4gzaQ4XXUVLqynMuDireyH2wcCj8yBqmFzEWeywknkoQhbTzedcvQs4yaKGVWJ7i1VpDwcqWp",
  "key42": "5zP6i3AiHsPtgxKfb94YPqpuJbSpUyWXQujoFHtst12hZDWcqitmez9iaM6UFt5Dcc4uAQFkF9xoo3qEy5VJy23F",
  "key43": "27gDALrLh8iKvEoFdQatNTDMSMwS72hgBtt8sAszYpRitQUAaUJnbih14FQu6tD3JHNucPvK328QrcJA15BiDZ2B",
  "key44": "5954heKBPW2LeoAZhTUHvzJdXr8dUSqcp2kFtGowbt4NPtVLTVVDzrM1cy77E5H6rAiRmMFhZc1o2ozLohBpiBsm",
  "key45": "cDL5ytqH9MN8zxoeqn3LU4gwhfCNnuvNhZnp3mE8Ptfzhx2qzkFBF6QwzU2K7VtN6bh9p3NHjBSWNhkPy3J9ncN",
  "key46": "4JtrKLEstBRt3ikyTFyP5dstuzwhYi88Q8XvYZyi12nyjFMV37tEttj7x9MkvT85peE3oFY9GyE3CmyuoWQ1KJfo",
  "key47": "2tjAnPG4RoxAXX4XF1b62qnrZfudwTT8DH7ZyBQ5tmJQku1oHiJSRGALvkvbS184osmyj9Pi2Q7kr3YWMG7KQLPM",
  "key48": "5DRHGfZonZAAvfZMjtjasUxxoA35isc6p5iPDXM3bAP7e6dkahpdzQyM3KXJzchy9UY8KmLqj6wdMkgcq6Ap2T7B"
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
