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
    "5TaHm8Jncdu3UbAnbnb3wVaYSodVXsxxjLjxDUQ89w9nfydMtJczRN4MwhxgtrWwXC1XbrYwsZtSrPJ1JLhvLErT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51eJAy4YbzCoUibQ29SjGfPGxRnJLUqgCkqKKxQgXMrqEsjHBe4KJiJnTVjFVycjg5MFts1UrwofNxQefWnbiUSi",
  "key1": "5WbfBbafhDDeLPoCWysp7sMd3wNsKsFXCE6zqcDoy2hSVvLwXTBRQbyCnQySRvtTj6zrnthzCQcxfLwi3HMJAJYD",
  "key2": "5ne1Cn7R89T7TC64M9VMn8UU6EW1gtTxhwZP4tKzUtfqpqs3aUafkXpZfvj36jqPuiJeCbsUzLs4xKET9weNNNYe",
  "key3": "5jkyrcGRTGgubvnbmuiAuHJuPsAd866Z38atnvj2S6K8GM5f6U1HLJoEjH95YXAgf5bCrAcvWRNLKA2fCogFtXix",
  "key4": "aa9zo6roFg9uY4TFdpjnqmtPRxWp4ntArhPbHF2FU7khiMgCRrZmC7xq4dQ5pb92MKyAk5TsGFbkZj9csNwW5cV",
  "key5": "3BKWeyouNMVukGiGg7XNASZLrGG499PuExTm28Qm2MHqLp7Djwpy4VefDtf31GczhN6LQEHWkQooyLqGEj2crspU",
  "key6": "39Hqew5imWXGUSH34Q5J39FsqdSNEHb1YGZD5axiPSyREx4vJLzHxKHrEcn6Tk4KgxfstSigwnq9DxfwopwJNafP",
  "key7": "61LXTDqf5H2WnFgMxqYnSkrLsjCLH4cMZSgPrjuQkaa1AD3YPbGyz6mgWVuhL8gAVfyoFujRVS2xjPknzKiE5ufr",
  "key8": "48iaMN4hradyDUyAG6BJhCgVfRscDaRpuWoMK4Lc4RiXt91dwD1WJkMkKxWqUpo5MdwPqXFLBToAzBCBq8EP68ja",
  "key9": "4ZK7TJsYyGQzkWNgrmuYSzB1kFoZEVm89QMB3RsedbeJAxmSjd3B5x7tJ9cvH9GqVgz4Uj9v5fymZAbVQzS1rLVV",
  "key10": "421jGkdW4omSsZjpxVZbGpTPhQUzWeTferECpUHXkV4Gt628udaNgbNG1iYxUZ8aGbgXPK9M9QXNkHcjQ6ZCL8U4",
  "key11": "2iKYePWAzMYbXss6wrcSPN411AoDKuxTYkLEBo2naQRwCfh8VmvKcwmmykR1BXbJgUGiRwdDrNKu2ZPgwgHNsTko",
  "key12": "v47xLF84UFeAwGmm83eZDPJUwA4iUvRXK2xC5cckzFap9dv8CxyGUwWfHaBiMegC7diZZntPRoC3MZ3vtyikHNe",
  "key13": "42KcCkdPTkYAJJxMvYhtAGme1MNKHEYd2CxgsGnQqVNotTVbMSGjri2hajX9sYJGTtbfhfdsbJk2RVyT42gVgfHv",
  "key14": "4mdFFyK3HqcU7vKLAbTcmJ2XykQZj1rL2KJAdSpYTGGd9NmbYbLpPGJmCPpmLHj4fMER68w6C1p4QBjV4oLi81Mq",
  "key15": "qGVsHiojHRiUyykTPV2y5hU6qzTFnHwjSz5EystGDdPTsDqgdNuVygUT5HS3S1y2ipoZoV3yzMDR3VARciVqBKM",
  "key16": "4DenZUNWHkGRet5M6q91M37PTNodhEVVawfv6R2PCf8nFtFLQFBufgSr1uzgtaU5NvPwZLtjbXoqe4jqYwWnUJWD",
  "key17": "2mFF2SH1CotB4xZQjqTzyraQn3qV1DsUre7cesji6U2QdPw8k2pNi2eW69knf3tMzHbmNnPSmR8vkEog31rrsqPd",
  "key18": "BCvKgfs4atnZQ2Z4AvaqZEd86RvA6871auw8cBcLE5A5Znv2kwhPTeK1xQtEcdJddDTSn3hWSeZ3Ci7bJgKWvxM",
  "key19": "yar87GXbLtw5vKMVyxao1VX3A77vb9JZRqDo2PkQoAkQ7fD2txnKR7jCP4TckDp5gXHc6VM7EM3mKjD71qJxF9F",
  "key20": "2LKq9Zm1PBSALnZTcwGmsXNg4xchFA8SXW3NoUfFbjgggR9paSgbuJ7DLj7YDeYuDudM6fXBuw8ukMnddBiwCb1t",
  "key21": "315reTHH4Qw7Sg3x72VzK1hRrj2hkwncJQgsKh94ZzJ1cB2to3y6HUKNviVMz2S9AbMmRSEPddsgBX4sJ8zHnnWG",
  "key22": "64cTy2Kq1AnBbe4rn949V1zyWCdzrzJP1cM4h9C4axtwiKQmCUyHBU1Bv58qArgD9B7eiUv7NDPPfRFsZV5P6jcn",
  "key23": "2JDYsmAWLan5mAtogHChqXHHLxnFZWRFJ3kW7CMRvPH8NuPoeUVDZFD2NmqrA8hxFqXZqTDHRTzSTU8vLMws6hPZ",
  "key24": "4A8mC3vLEv5Tic9gEjKnDunLcq1tgiGChQ3WqFaxAaJHJ37tEs23LEsN824LxMmN4PHBNzGE4wWngvaoCys9g3kD",
  "key25": "LWeMod4a1Her9PvnQHHJSWGDqF2h34tmuk4G3pRJj118azgjY9hqxhgHk1iakFeZEcXLszir8u7NadJXzujyHbj",
  "key26": "4ZdUtYAygtYkaLHz7VR5Tc2FuZMcpmry8xBVLH1s63aaDGiVM7VkifYFZHaM16f3xW28i9V1bE5fHhDjs5QgS8se",
  "key27": "45ETkxMPzeVvtfdXQUexKU2vFJbVgceoe7mpDhVLdhxc8EUP4gfvG9kfHwyWiEfPk3bzPYvx6hjeZZiYiFwahRiH",
  "key28": "5zNb2Pamc3JL7B6fnCdGe2K7Q9rMTE5k4dKEb14PhHgiFYFrMkzr6jKDZjCqgKP5F72xvdXsnX24rcnDXBcxvQgP",
  "key29": "2HzoYVZZmvEt1uABCzTeS295DfVMjFXtDm37oSrkAPeG4FkNSANgbsi7hvDJdgqTkE7FKBoFMhEVVmq9J9sWG6nq",
  "key30": "2u2FvWPKfsKvJDD4TthtQPk7NVncVWs2yyYZZngrtBoWmySTckKdAwM9vfkfied3YQ8dkhaHnm2EdW28WPRmf8UG",
  "key31": "ZXh2w5K8BSFSNMw3JSUKaBoEYGb3Yo5zmpZ5hCgPCjQC6teU8FdfX3jCTdVL3HtZLo6ewyDkWi7H3fCKQcfCiwD",
  "key32": "27rj1nRP72GKcXYSidJGRMnr8wjqsgUBiyjRazQZagJdcrGU6UwXHxyhVmjuavsnakMoksHeyLKQt9imPUxqFx8U",
  "key33": "3JWov4QK9YuCt16LTbbz31tiYwEk9983NFEW39zQDGBm5c3tdh5J3yD6dEqmuVJ7arhM2ctyp6ETJiVgaA6DW8Uo",
  "key34": "5DbNnWVNHu39NuUoLzfpMDXdHueYkxevEXW49HRV6ET36Zjk9jTkmGKeF6pbMEnC46H3c3WH1JPd4mkEK4UHzAW8"
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
