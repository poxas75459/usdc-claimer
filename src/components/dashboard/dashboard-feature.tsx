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
    "631Byvsn1RjZfxiKX5JKhbYvH96ouQUCh7Er7QnqrifLiLvAJZ2NQGYTSg9ByCsnLtgWLs24SNLV6JwDXmDeTFx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6XsjjBYQz9RbCec5gchEvhLucdsxdkBkQNaRUznp6kFg536wx2sCnJVVQASuqXthZbywrfBGdrmnpgt6BTdHVW",
  "key1": "3HPPB6D7AxVQCHwv8aMXuKSYJDX5heunrHPYKdTMDKhdSARq64eSezJY7NazGZYWD1afdaRJ2PrtwvpJHuuXu8Uy",
  "key2": "4B4BTnrjRfuEbYSwQK8F1QGcfh6Szq44if8xnjt5eACV4Unya55EbzjFehTkRNgSkRCMhWwQeDNrbGuapLJLQqsc",
  "key3": "2aqPB3DK7MdvStC4Wi4X5a77p9VeqVWbghjuY41jPMEaSLEXbqpdw8xQ5Fe6cLES6DKEgnhhiT43LxtwQMD94GVU",
  "key4": "17ZQtAZ8die4z78VCdEu3ToDrX59uYmyPWkmkfCSZ9NjW7biwHEAsQMV4rGC4Td6Jsux8hSor5GvbQ5kqwBnQkC",
  "key5": "3eUkSebtHGdMv5WiKBNqVaRwaAxJdL1nGA5NWgU3B2cJbwdxaps5vNSmpg1oSLkkpPG5p9vKr5BQbrrwzs4dGEct",
  "key6": "T9eNVTYgCWEWDNXXDjcqdfUxUdvz8yQE5h6AyGneLxEMsVCR11FKinJqyrmkGvFYU5JZA9bNTGrDt6nDCPTAYAM",
  "key7": "4YivaAtj1Gx9eiZ7fRQKHojCZ2Vtgmng9jagx7wzvcwjM9zmsQ26ZKYGsLgiW8Zj3sAKLPLxCxWyXUV8ZoeyjW7L",
  "key8": "2bESTkjFPN3YMLPP9DgGTVKN6w7EWEo3BreAgQWQh6PXNC7AympPPdTJAZY3PQLQk935i8qpHpMU2e1H7BWhH2NH",
  "key9": "3hRHwQ8namGRMQvrCAz9nHPW2XBEofxFf9PB6CD4zENp7fynG1iiwuN5Ksc1sJAn7B84mXVAeLKxUi6Ntu5oUHPg",
  "key10": "4oxtSxJ6BM2nrH6YCcAKygq55cZaPFqSYFbVgws2ZsnhWQwPTDEaoB7BsdyEAkouCzZ3XaPeuCVB14LHNVP9aWTH",
  "key11": "L5zAi3YWGYm9XjXYq7EAHoo3f3CADnhMAzq48n9TQdLVXKyK6mrEzBWzZcgviXDQ5cXu96pKhLwunj5Qzb3K3Bp",
  "key12": "3M8co6jzNa419y2AnvJA4rVXcEL2r3MTnmo5SKF96s2cy4K9rdA18eNJiHLufsScwaxdNVcL6mugub3MgCzdtry5",
  "key13": "KTQVBBJf7NYghGQPVzbeSzVgFGiXkVpJvU32yxkeGUDuGkDAGsHLUBruFtZwmULGkahqaFzrjno1wGYnMCU3hqC",
  "key14": "2UQdsQ7Cs3XNbPyd2CwniWjq7kJ4hwHTaVLTY5L17tgULgqQMnk1uChqXyx1zvzyGinmziC6zTm2ZEKJQyafiLoX",
  "key15": "4UpBcE435B6eF3rebRvXXLaECC8EPWfjWYn66n5hEMAeeGNySpjhpsx42nj8mrUtQVPtUgefXBntiaKL5YDekvAP",
  "key16": "4cSRBgxTAqWPqAbAed77k3aCC5z58aF8NMh3rAQksyxb1utYDmSPpQFZTscdFJqvMaLd6NntW5uunes4udtC77x3",
  "key17": "3qxsp8q3mm8bG1JstiTWM1DSMPJLantxpMEWXDkQFUPh62pHJSdJhf4tfS7U355iYqaLNAikiwdMkCWY7NKjLyq7",
  "key18": "1J9gaVCtVusysBiFFjJEPqpNVC2LERmkBhm56V78DtxH51NFiA7VHVmzM2hXSE6tc9cw4vCdCHcofbgyn9tBenH",
  "key19": "2Etiph31VEotYnJC1Qu3rkASyyC57JkcAJedbyQQqtuBQvGTWo2kfc7RUD1Vyj9P1gc2krz7vWrj3HgWmVsSTpiL",
  "key20": "pW862WD3osPyHy858DJx5jGGdJmDECz8j9g9KVeN6ZrPZgJCbcK3Bur1cR6CVEMXvrokZ1jNKYEcadKjzn5BRzg",
  "key21": "EZcAjJuif56vURavcQjuN1U3baqShWiifReyx1anefGwpSY6Ra5nLzuCEh6u6ufMdQanV9zp39iz55s1c9vRstw",
  "key22": "58YdCiDY7buq75mUhqZfN3FKXG36tAUL98JtiWU8ZkBCqMAEWymnVgZ1AF9bobQb3ysqcobhScDfyxCA6oLZW4Ur",
  "key23": "2JhEKCZwwJLQvUMNH9xVw9xxeQC4EKEqvF9mYuwhS9tYdygqn2egM2LqY7YLse3kDzGt6E1baGSQFBfaFdC7BVYc",
  "key24": "3AjbviouMy4dMDALyoPbJLfnSXQ2UjNMHUu9AsKtDtn1GAzBtxJEHCWWPH6HU2ZYsF9iCaCm85YdrbpNaacrSwka",
  "key25": "3wy2c2MtJXiuzybRFU14o8cjLoshN7GiCDBFGmtRyMKsLw8pcBpNHSDSiqF28jHd96cuwEUsCd9kmtxQ8ChgdsF6",
  "key26": "xGt24FjZSodJKjM43h1tSmvcagq9smbmi55XPnC34KbNMchfk1vsgAQpnGd3wxnapv98y63TpWeF5iwXE4FYXXq",
  "key27": "4v9r6Mj3x8wQPfy12vx8xxGpfHQDjDo8yUJpxjBhJURqeHJc61dR2fGVqsTAKS8eJgiMparUtG7B2oZBTh6n4qju",
  "key28": "3sbA7iH2kLLqweQr8wWHfDrWjSs1hLZQKadEM4VQPRkrFwi8RUGB3kyZNBxarjRGVDRzLNsNHw3xJvWoF6yeKyxR",
  "key29": "5yYGxG6unGunTULvhHJhfnk7qhGSN1wMyuKyGtvhRNxDxgXZDJDgZSRhvWQG6XxRCFKnMgx5mynMgWqYrM1PLDHc",
  "key30": "cGFCnYMdbKSYfAt6CbfR1k8ikD7VAGPWuYTJuxXq6NQHHXrBUzvD6oAZ8qTDiKhFTMRi1QBgrJZxMGf5DZSoFHe",
  "key31": "5gcCnyvQePXzczZeNPCcS1mgoW4svDszL1LwkKAn1gyAvsvsfyD2xiVZN7j34xKPaZqNxxmvGcgxP1eyyti3WLCv",
  "key32": "3vRMvRHvx1KsB9CmahmW2MQVZ974dt3wryT119PdZyciYjPz6nxy9wG2t4YJ9dr468beFkH4ePoW44G2yLPQC7a4",
  "key33": "5QE9XFT3aDdmPMBuyfZ7V8iTm5KLCK3PweRc71fDE2WxwzuETfDC7mBQp2nkqXVzEF2dMA4MJaJtmWZEXX6tSj1T",
  "key34": "3Y9JvMncqZV83ZsSxiNtj3fA39W2FFS6kgsb9Rqmwpdr3BZm7V4V276pBB78Ag1vkFFPBVpBVKDY5MxLMZFuvcCq",
  "key35": "rjfeKiWeAfg3eJJKK7q9ttuubXoepM7tBGLRuaRZFBXfExdXvaJYEx7dfp4w2dPYnNAbPmLazbPArtmktaN6tQs",
  "key36": "5XuahJBveQS8YpKK94YaeZMYAmcQ6fATUNojjtJmyCHdPWrJZK8gkV1hYpUKhMy4WgpjppA93AjhqXetVzLvAhSF",
  "key37": "yx9fy3wr28tpAofLXoxVd59XXy1veaUwUAW1Te7gZmzeAjMu94c7rWC138smy5mgkfcZkP38jYHu2nHKd39tQEZ",
  "key38": "4DNRjE1phq6DiYu9fGnAbyMKAq9WVq6RBE6Q6xH1L8HbBjB57h19W2JyiY7B5nC223cgrQyWcCYjTwKxCCVQpcMN",
  "key39": "3fR86tGFjmrUtQVWvxcZaCVPUsQv39t3qHXehmVsSHWXDRHpXHmFhr3UayndhY1aEHPsRFfZ4UQWgXTPKMEt2wkm",
  "key40": "3yUMv7pXfiLYrYgPmzh3siwq6F9qGCaKAqt6Z3TTmJLSBgJCURBwZrMW6R69kR4qhs27Dr3Lnrn8DjawFJS9Nh2",
  "key41": "29skMca9QBEdAuKQAjDMX3mXohPbuDXR1sDKgEnRwQuxXDpANfDXvNxibKaV5HKcmiCcSf3R7nHTsDtEPkmsjn3F",
  "key42": "2sh6K8vLAsBGJuTipz3f8T3KNFnPSe65MHrf2JuX4h3tszMtAjSyZf41sDKrMuGA68kaZ9HJFAfYKRM29BLf3dM6",
  "key43": "2L84qFiooPc38gLSczCeLnWh1n4FQ65GNkLd8X7ZQzo4ewnmfRveRdnWe3oA3bErEHERHByJcDcV2ssndAgb6CMb",
  "key44": "4apANMARjmp4BKLRs5FRA9P77tANUUt6JppGGTnTgkVpmBV6HpQ8m8ZWUjq2YWqBPUT8CGnpW6fqbXstYWcZGfAu",
  "key45": "5kd8KerPFYT7bUB1CB3AeTnYBDhuSZLfmvAMw4Q5xWjcwy1ZSwFzHgYDUFfRY8tEkRuAaVHEJZJCSbi4pGkf5Vz2",
  "key46": "3FgqPhjMGtGK7pdyw76LYDsqAWpAcQ1nk7nap8k4fNncvVVfraKFe4hsk9hyJL2u8VHrKeuup626A9EaUNQeuuy1",
  "key47": "54b5kiPLA1sQFPkhapTEjbsxWbCgPesA1iQvznMV9mNyy2Rd65Ucd8mF5LCYktrSU1o6HyDJSohsbLxEufHQaEVB",
  "key48": "BMQTXXcMYDAHaHzgqa3Nf6GAT4QcBKMKQVMwv3y1wKs9XWKwTgPpEseJ7jJjPL2zXXTVDntZiJcvzXLVVmm7Fje"
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
