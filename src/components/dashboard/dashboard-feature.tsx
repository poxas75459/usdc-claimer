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
    "22gUyn5ovLGnwuRdzDvzi1VHAKURZxYKMzFU5yqkCpSaYCXyMKmSm1yqUeP3LErP24FDwXqqZDAGCKgDKbPSjXaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdA9RqrKmT3Dax2BguJFQ1RonCNjhUKdjGRUG27A6Rs7cDQvKUGG7N4sc68XPhmwcRiitS1S3Xv2Yg44NJnFHxY",
  "key1": "3ebAcW7Y7am7Ux4nnCj5ncoGEr2ut44d59QLGy26at9nv1NX6Y9s6mVbbAo5WHDM4Gk8u4ZqwD1zpjq69xK51xt4",
  "key2": "5yVvWxzykuWZsNEexJr6zGwTuc7azTmF5JP6uwRprGnuuhpRpMDoqw9CDrWjqmUKrvxB4wQZphLmBDhspuP7bKt6",
  "key3": "4ojJwaxCfmRCNJZQBdLPAGBsUM2M55E3v7aG3mJJmWvrbanjp83ydSpioUhiqb7fH8uz7rYSZyJbBHy99QLemJC1",
  "key4": "4iWWAH2kj4EB1TyMtE7ieGD6V3mX2UvBCPWeSB5Eds8sRsDBRGwm7u5Q943Z8PYXtgeKKqLCykVP7qY2gKxJgha6",
  "key5": "3eiSEKAueoJfzEVVMbAdazQ15F3EDTXyXEU939mpAVRB4mTuZmj8PqTtv58CAekVogHACg1Suq9Dp5ZQAuNTYr1y",
  "key6": "DQvFfhCJJZcYsF1LKk3STgHEBYYCV7yggFW7WiduTzSAtR45nVRw2dUCAdqRe2is5wh2S7htVz8uZrDLo25Q9HD",
  "key7": "3j3ZmtQt41g8JSeNpFUSZUUBYLenAnF6uoVhkd9mhrWuowMjUp9jcPGrxTaX3VSX3i43qZaiPaSMTborzqq2JmeV",
  "key8": "53eJu4noHwzgVRfypQMuwaRj3jUL642wn1ai7Zi3jwTT8f5QXLZgLf8XJydncT2prsaYrL1JiWZXa2DoNuVJVzja",
  "key9": "57BasN9d5Rpm4QsciFi2nsxkpfvPU8yuRWaxZxXkCas1dDnSXEpGeQAbWxw5Fi8CpSXReAPYjpYk1hXviUBMav2p",
  "key10": "4qYiREoHmFqLTGqWzH2argMPd4FThhbZM2Z3a9nGUM3wSp8UogjQ6faj6P2L1NMfXEvvL84wfmvpcMt5jy2TRqCZ",
  "key11": "5zYeCSPvAgAJAgLuYweMdeCsDu4GdgdEvbqBAUM96JgsphsDsD67JJggesoaVDFx7RsdnD4TPVvHSFV82VRRfH2T",
  "key12": "3brdjsdGCsq5CMowX4w6H3aREKZvSq7NE4LKjexrv4RoicTd8DPhcWXZKcS7fJ4pxUZ6ouNwm92EDE79bAAe2mFa",
  "key13": "S2orLJJdqggtRRAqQwuzhEmCFVBfhqSEGoXPW3JkePJDbvkSPpRVJqvsaBWtzCrYsYy6VtYz5ZaMtAnDYphJqA3",
  "key14": "8UZ4VjnwsDceFBdh72AQZ2SxtGS72AgVnAtWgf8ZRfZdGSJPMCim98v88FPHCoa5sfKR6ARWQYRFBD6BQHsYLKf",
  "key15": "29fhDKtCggr7aDmpVREZb1wfjQrtAdU3p5T4nC79ApjooQjuuHNmGxKB1dV296SuseX6g8pzbJmp5ALNuMqhBBdr",
  "key16": "5eRkoRrZRuczmARuJcSMjqpzwN2cDtwa97jRtwVQpQTWPZAXtY6hg7xzpXDaMdWWnvFUAtTzcNDnmgtNmQAgTa67",
  "key17": "LSVwbXJqS3bG4MzUVFf9afpfYDv6rXkTwM4BdquNGagJXcNCszKtqn8bBAbph4kizcBfTpkhoTWbpdUN266JtHA",
  "key18": "L7S8JtKaGZaoabha6ohp4ArTcYBKXyp9sNVVRXRcUS8drLkWCodDZ4immB3fxzgWew1UQ986Q9ztTtyMJTUwJv1",
  "key19": "gZt2ymVhnmLAfthyWvXE9mC3AjuJshpgp2C6Gea4FsvWP2DCVjbKHTV9vfMgc31PXarVKVJRsPHMxgMDggKHxhq",
  "key20": "2oTuUpHTHDVUaihPmr3c47y4eXfixENAf91TdViHFz62GpwMsdfRGN48Qv3Jp3Z6TjD7UySYzNBTA33msJxUrMfW",
  "key21": "4wrk3o9ouaU8TJdp9yTRURweHF7trWwPPxcWENtFiX8h8g4t6WyCB33TQKztxfJvxhEN7XnP6AD4eE167A1tydXt",
  "key22": "4AMX3UyAFoRi6zyrFmwNuRRm3ApffUxQNQ8jdmH95cMJ44L24EC13E2kR9gmCLbdZtrhx8WhSZAz1ZcFAG4CZwTd",
  "key23": "56Fktimd22dVcgFEGnzoeNafFqgFZSkgFrcKxDMbGQFkXc4HaLb8yzCRFmigbCKvWLE5qyq3gBDK4VC9P9WTe98r",
  "key24": "3JeJVzwS1qUYy763hiB5TKLbG6sJ7WE7BJ4RyssDDvjd8fpvVmqVUbUTvKxgBoLE3bCL7a8xbkxA6KhFutx7MRVB",
  "key25": "53f6CSbQV4NWB5FXTWZCT9GqasYXznpR11pFpeTEopbRsokxDVeawssot4Rp4pCKxENMNtaMwC8ZWEPJ3fL3YBdV",
  "key26": "2feCRzzNx68PzPAkfVk6oFFcYaJEctkMHafSu5sMgS1rTd8tgtbFiJDFgjQ5QQv6MuoD7bueJh4cmnq5GA1RKLv",
  "key27": "5beeY4PJoinzjpMvDSpkPq7JVeh7WXTQyrnCsCUdp6T4xV58q9xgAcuK4dCDjXG2uV7FRgcKh5GKMrJe7wgvmVSK",
  "key28": "2PNiphzw7EJZ6oVLBjW4kswdsDPZ4kCJjLLFZ1KXsaPPThaXq952mmPH7i91HTmBWNtZpoCPJuAhibNgjmwgcXSa",
  "key29": "2SiYe9cTw4XggjSVGMJ92UNmKe8xPdaJagsbUzssmhGoEjaSB2yjoMFuvFnpdoqBdC44E8kza99UcvybCsoNoNk7",
  "key30": "G85DPyFRwP3tFcoEiAhaLZX8ki5vvKaWorXWt1UoHi1v2nbCjaq6BseLEB6rGRPwQWr7vaADorqUeXn4kty3LRx",
  "key31": "369hxwWsPbiuMgGwZWUpmNxbezxGwJ4hiL752sgCNHQceTseuQNsqNRCCtA5NpAZdP2Pbx1q5XKLWX5syS82fr1L",
  "key32": "2MHSkXcQh33YxitLXFFZMbGZCkyLBXRi1ZKaiQhrkR5yT4ZrMfGL2FYjpGAWe2K7XuBK1NMRynoyhQciH2uF2c6d",
  "key33": "4hM2gyYFdncgSAJrtMmnaJgdLSaDY5WB1UjvrXSaZNyWpCeBuvS9vkTYpcm15iKn6K2XaeGfgpUDispGF5ThDgQF",
  "key34": "5YwFRrzQ6fSL9DPWJBhAMT3v5R1tA238n6EbdyFrbfb6Rd1G6F4M7tNv4kMKcHH8EXdPaS5JrQhW8J6c3fFyVy4N",
  "key35": "2urZsv73RaZsnKSTude7tp5QnykARnYJFetct6rdwKb4dWCNNpNoKLdw77Z6hftb4qgvRYTaP7kcfsN8xhXFCRP7",
  "key36": "4nHqodaxsmBadW4n4wjfhWbAnNDUib3u7gmoeVNjwCgVc9u5shcK3oZ1SMdMYzEAzaGRzgpPWCCnJxo6PKyfraa7",
  "key37": "4xjJTWJajLmdcXXeEnL64uYAyuMwSyy9PvRZHj8LFEgT4gETJJ2nbAKofSSpn2qrW3NQBrVkEtC44dftDip5sAca",
  "key38": "3pxj5d4rgc1ognQYtEHrNR4MH6Z5SZ2ZSev1r7q31UcyrQaqAJ4SSyRHkQwj6bS65tQatPbJvZzAZrCMYzvohd2t",
  "key39": "4FaLLh1CjvKvzFMGgsvG78VdUX5whMfggvBYx5QsT151WmqM3qh29sLggW79EorenFNx3CJwHw7VfwZcDZHMWaT4",
  "key40": "T2XC3dQZDrNjUztwaxDL4wZFgsf8CcE1rvSVcGtRQUbbv7mPkpm9pfVVRViezEJxFvuQa2HWp2z7TpQQ6ULoV4P",
  "key41": "SQJMmjLcEGZZoVMoGzcxLrzVEoVXsHoxcD9s3URYXfFGnM8uYKrCE29dDnzsQspmnu82b9n4JhK6csJxduXBiHE",
  "key42": "2syZGBLe15g8VaJNX49PRxxa1Se7oFL83fcrrSBPw1poNf2JVn9vAXXE6CzUNvkNZb1TZpe5qpDoBvK93hYn795R",
  "key43": "59VibzVvZtwoV8y5S7sFMRSMWt7Fu9NmafPgKVfdhJFVGt85x1dKjky94iv6Vp2Xtpnv93xhQbB5sPiKiw1Zdnue",
  "key44": "3wyer9ogANSJSTicedzxk7YdmqyicbTyY6sJwsHRFaEz5GJY5LhAuUSM1kde3eeLuxGGhyKonQkK1mBpPomrKt5B",
  "key45": "4KypRc51DxDYh8WMRHmA8VWeJ912g6qyecp7wHoAe4TG9dyhQxUV8XevTAj5kKBX4ypzRpPzqcDKngjQKvCdPDfU",
  "key46": "59mWSLhC7Gfdv8Rettf7oBPS3U1NTTyGUGnwH6gk6FoY1qXFJLEUf42ExfC1MNQBZsGErX3PnnTCdVwhwSR5pWHi",
  "key47": "5xVVPdDFPsuaRthsS16uBoREgsL9m81T3LzKqcunw5Ss49S7kQ13QnPqTkUbimecSQZKoYX3zaWbsnoJW977PGML",
  "key48": "5GmFbJW9JxCQDhkVgbQ9wTbWxREw5cfyN5jhQ57ZW6MhfKReU1LFG4hcGSEjaFE1fJHNN3z6Uz6EJXrWZcMZGRqC",
  "key49": "3N79WDCU6FZGMEa7kmG2qyVeK8kdPPkvLBBdSXoaPqY7qFGdCqHgFaX9gFZP7ZFTwJJ1NbjKrNekv9F65JjeKXma"
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
