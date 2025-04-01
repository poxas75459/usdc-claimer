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
    "5HzWKCgsNrLmvfxrjsnY3A5EPJxR7jzNkRpgc9b1DnhBJ4NJy9z47FT25P4jDppCLpBDM1vJUQMbXTEafSPpxugV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSSQ9WqEk33qQB5ZmJpGT7wye2JyPdCxxjn3RdUVSxPPZfMMf8izR7ssLWcpQjnwH3J2WLLB6h5o8UtLMmVHDSj",
  "key1": "CUmbFFfJpEJRHPQkKg2PXxU9XRwnB6MYYaCug14rRWpHvYnE61CLVssnFazndAaAjLp7D7T8cCkd7nsNog8ukLA",
  "key2": "HqGnUFYTWcb7YPm2gaWuBTEkfNUtY7D2qgqHVktu62b9ony6AxhkTvG83kyEFtRJoXpv3zezNtrKkedDYkPP1EN",
  "key3": "2957PbkunyXALRDy8N28kQe4NDSUXVWRU7jgsTRaiWYQANDRsTmNEoLuZ3dJEe3oT6vwShbZWwk5398D9M9BR7hz",
  "key4": "3xFKJtH85mbPf2BLXs8AixRwgqmwcykLWyepF3A3H3PVS3T9PveKYVbMUfpgW95poGM4a5VkXirboizSdCg5ySrz",
  "key5": "jL8tjKuapVH22Vxbv8UQf8YFfkC4838iQxkrURyxKPW2pFLf6ZMg3sqPyGhPePTpTMEMwQcczkWbuUGUzghgYw4",
  "key6": "t4V8EQZ4sjgNBwTvDjzcRZhbsGjL8QGMfLiMYCdNiUAqaJsSRkvbDJJGhA3dhfUmWDSaQFSfjg3RCu4LZxkaUDw",
  "key7": "4fzEAonmr8Yr5MTdA2PCiTHGepuxX3RdJuoJ81YApH6grnr6bcBFJ5UbC89FkDb1xmPoSZMez73PD6p1gpaWfvVD",
  "key8": "FXw5C6zx5T1gNqceMQX3Sz9njYhTWkPHskPykqSLw3gPosgitgLyDmkg8zgdhTkUNyGqwzKb5fm6oeF911tzde1",
  "key9": "QQYjN8NXpNXypwoEC245WUXHzyMX3U9brdaAZgs2D2jmeu9a1GKiCZyUouvhCdoWubzN9FfqqYxjKWM9Py1japw",
  "key10": "61LnuG9ZBeyz8PjJg4Kp22ax6ikTjN9f579EKuECUriTKXYFF8SUPKTRKyb2S8PxfgMGwnyFjExUjnwaR2RooZhe",
  "key11": "3bWn4d4kZhZzhrbKw4ZnKq3aLsrgpsARFMmCCkjHAA9NxbqQCSC9QpRYzYfV6LGkCVG5u7PZerC5GiD5YwAoS2yv",
  "key12": "2DcjxcPRdz3DzZwVBETL88NFoUGdkqqPkc6Sf6CjipUqyiP9vva6GQQX8iPNCJ3fdrLn9xAaSq47MjGWW1jnZZ6u",
  "key13": "33e8i7as6tLC91dHr8kA9BhhjVZtqiYSTMpnxZp3BWagZXTUUifg82XWPq8MYiqxiqNoN6BkwWuRFDLvBgqTXZYJ",
  "key14": "3arsZ8DdwNpTzmxFw3eK7pQhuqJjn9GVi3s1ZcpUyUtL1jToQYXCCGEmuxigWG4sQdp2ErCeXMJotUQYPbRb3qd",
  "key15": "2BUbrtBQawELvs5DNGwRDb9vTnAo3DduW4sWDobgw2VkvcNfCubmqATo9NwVrryjby2rVvbZHJtbR6UrracESbib",
  "key16": "QktBnYDM2EqiHBaXcfKg5sNjwNmmQUgjDt8ePt1GakhE951YTEXqjtxZNh9wsVBbqdPQH8tWCaTYNEvoad3pLMx",
  "key17": "QTYswAf2fNf6z4Kn2JQjJwYVZxohZdkBuKsXPFKgoUokkASvb8mUVjmgX68MCSQpKerdLn75s95z91noxecTmZp",
  "key18": "5rcwqLYTR38qfMkR2ujkuGrgvqWSRmWxuN3DjwSkw8ahYRFac7dFNSQh5z59qmLv68FgLvGRy7Qu9UpbfBtB7kRB",
  "key19": "2DtmqCo5pJ15zx2LnCcyHsM6zx2K1xSfiSx3oh56XVPk7x8tH8kPqj69WNZD8xKSdQYEPuvc6bmAKsmbyv4QGhrx",
  "key20": "3M29c9kDi8t99BxArggUDMGQZ4KFjTbHShN5ArpSAoU19cRZFqEmcFWMiciReEsQ7B39FAM8csHfzSnQi4UZVTeb",
  "key21": "42uVXTSCkxwTZ7wYCYXts9jhbaiwnTYaQJphYPqaNZXeLE6VAnWrey7JyfYtE9Kr3J8hLY6ZfPWNHHvHjjGu8CBB",
  "key22": "LRafzPB9K8zRJ2hPruUcv3bd8imovZ1dMeW9rGzaohWW7mfcU8d4rikhV6Y9S1HLTicWVjsEKuwo2PycTZNVMA4",
  "key23": "fTHbzxYomEexZxbZmRm4MHoJrib89rTQZDBdjohruPDYpUoEKNXTbfR3rLo1TvpUGjavqK4gD1CqQEmmwhg4TJw",
  "key24": "2msrHeCoDRrSTfCRQQPmMPcEwB73Nhvdq9qet1CfBBpiyF5zuZsV2sPX6pgYHJsWBSEGT7ED4QxvJpfXZvaqAEmt",
  "key25": "6DkY9Yp4qtJhATVKMhcq1LVdP7vWHeH13USXqhZXLRTfSctpBsLvarS6JNfSu16fuj1oEDBQVogwwF68NJr7gzD",
  "key26": "2RXHeZoit6kce1BGzFBqPyyj4eoyBSM3JaGANJQJMspskvi7Ce5HmjPjQtYrbb7W1UYtHetk3aBZmQxW9RUYUmuy",
  "key27": "2LTEe6Emk8W2FTpDJP2wdCVPaeBzz7SZQBNTjmE7mCPD9S2g7NLoAGrHW2xnWmA3Uq3iBYEYxmip6SPcPwZ2m5Qj",
  "key28": "48vUX7DxCfFQSHJcsM48fKaz3dnxdEjQCFg8tFWRRA1heeD4DJaqM6BsWHxFeosjHLJpSk1dZDNi6An9e6kzSjXR",
  "key29": "28XrUEs9aGVCMqSqCX3ber935KFkD7BSqoSRCUzmT5UehMeFnEYSMZevbTN8xvnix2TngSVGQsVDs2Mdzn2CTroC",
  "key30": "3QATKqX2g75Uu8CGuTxgEyzBxwiXdXwokyJWQBSixAMijVdNoVQCiVPTRzNDHA3kgXWDV6o9KNeBVJEyYUFgJY1v",
  "key31": "3v8EVyit8YCrcbE6XWRp2x7QgLmVyYAkNSbTYBJvU6DfDJfoUj23spnpS837BX2rJRhTCe6FZg3y93XjS1pikmj9",
  "key32": "3j8MMR8CV5g1ZsSRNrp2cVkHCSMuMr2DmLiPS3XJmbRV9Y5aopGWhXQCVtA2LYxVKTmHHjo8koRtaMit4qifnYSX",
  "key33": "4G1JwVNDWqXQZuer69e1596C4f4DLXyVLLFFUXxir4yRSHkhXRiQtgchP6ig3XGQrsnisCgG6RqSuE6KYtwisS8m",
  "key34": "469EuLkkyXpktHHbSw4xvDtzDz2jCc1pUh82WgaTJaC6LkSMfTz1UVacMd38CoDfKRAghy33rffW8C2sqGzgHMHW",
  "key35": "2bftrxALkLD5LvAnVbmFJ1oEusVh4kvLbSGyiUExStGQnsiFaA1tx66kvdVuHXtbQz9VoiqQaXauDnAyYWVk8xrJ",
  "key36": "5djLjqdYnzM2mfFgxiLp8ZXy5kpZbJHBXcucZX75a1xTiiHTL5KYg6yK2AnJ5VehQN3aANMPKXiGTMmakYzgP1b5",
  "key37": "39o9ubh8HvkpZSw9VKcA4MYUk9JxFFgh92yRrNEwDz4vHkepLriH8D6my7mNQVnG8NrN1wiiCeZ3QFbAxNcohVuR",
  "key38": "2VeMGKTT92ZWanEZ1m2KrbBvoRVKgwsWCXtUcPV7gaudJvPKdW2E3sLTZkKMp35kaei3fyWGiPDUnZoVLUuQaD3B",
  "key39": "Ft6DJzksTtjeKM4cZsCbU17oAZixtzT2KNFUjsPEK4nA3qTzWu5p4JAZcxjgWFWgtpuAMofk3KEq8kL65NPhzaW",
  "key40": "3TV1HjCNMyDgoBXn9CnfcWMzgoUjKxZrAepkBbH1ULV9CmsiihM8YUdzoe2xPm7UJwxPDnExdNamEEnG4477WGMz",
  "key41": "5EZ3GLHCnX9ew9VpZvQi54LyUWaE9AiTnuBVuxppQfxRnUL8aP61bnbU1A4W3ybjrLf7qjBr2X6Aeya25cMp4xzR",
  "key42": "2nQtSjFRXDXr2a846ZBgrBgbkuzqJ7D85ihhgYmHgg48fVo2FZrQvSeUxBXuHnfLKPkfw6StVZbD1oKkaZhdW3ur",
  "key43": "3xendv3HoUGrHVVkj46x63vMzTWKStweDXhTGU1mgJckiGSQWHK1uauzYSuq6n8n54ZPXZaDcis2moBy9sDrHBKF",
  "key44": "oL1McpgTNLM6WjnhHkByawmm42kQPMHraVqz8egV41pozHwUaXAwKvnqRyUt6i24cdVaWV5g1F5wFPpvb139R4p",
  "key45": "5zDgQAALQnLy1WTH99CWBJChQa9U24FvVxmycgNCp8uwxA4HmVnyqxWCsicJhQSTHD39hR5H53bmkRBGgEGMZKmX",
  "key46": "2NK11bqQBDsjgkeyjMPZrkgCcSNYW3LkCa4EfomzyRMhKCj3LCvPheTmfRFQxkpzdF8AN2VaMmfVUyL8xt8MTs7R",
  "key47": "2TPWai9nTtLkCcK3hjqGfnRLncS3tZ7dhjtwvqcG2M8RBmRZG7cwRaHfQXW9MEonE5U8UMYZB5vZEYN17WmgQWF2",
  "key48": "52AezAzQvNpNHWJzmpF1DsZvMwKe5vLB2GGirkYYQhA9utvKtcrhZ2iQ4xtjFVbwfkHA4cZbD38ukvV2mjEYinaV",
  "key49": "5uw98CdmmNdJjxxhS3Z51yH7ShmejjA7Wm7QqPfoDz26mziuABFyjDSNpMX29WF7cxQHtEKoQPrcoHgTUWj5fwxr"
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
