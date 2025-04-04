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
    "v1MTdZLhEcyUgGwLHUTS52Hqrs8LhcYSSqBUJVUB1Y1TnESYhiySX84HfYzxcVSdxh81s56huDf27KqK2ijEcNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xKUYQ4FK4cv9PnfNx3umnLZYRFATTUEVNfupYE8zqBvP7w35tEKgcZjGwXS4t8hBumJvoj9a8G49F3XyqYFaps",
  "key1": "PLn2PZHNNrev5EG3eTWNbRAhvbHv8jVtrnQtT7Qy5z6FDC2en6uMjV9ivfgsYHJUg21aamenXvL793RimstaR49",
  "key2": "K9aLQtJ3CPhpLgsd5tLEf88CcstxS5wrRK9tsrh3cc6QVnpXtj33jCTuhruT4NzUx7b4oXEimYqwAm8n25feZF6",
  "key3": "44zd27XEcyKBeYJdXazf9YUMVb3RwGKscqbkc8zBNnXcPjQktj3aQgEo2noLsFRFEpogFdmD7VHuDTds3Tp4TK5G",
  "key4": "4NJa1KqkCP6djm4F6TZscc83xSsujzyMfNycpAHCWrkcJsgDJ7HenvGsAEyfSRFLxWQMZjZRZmyj8Jc66FipaqSR",
  "key5": "4eFm4Tn6gDzkyMjQ7okwzz3sdrSyPs44Rs7AriWQsPXDLueZcKaTdiwk8a3NY8oiacVeQs8kUPS1fMcGZHSx9RHf",
  "key6": "4ZgZrDFEBwZ6pd4dQrtJXFGydbEoQv56QtVDNfx3kux4sfQJ76xoTgtV3R4tYQgaVxjndddJaLBMFY8LPyebnqST",
  "key7": "59q4suyKgt3DPsKTB82J1fvzzx34wDBACS9gytb4aiHYhgTnErFtmFJC5nVDBPZV9xAAqh9GootkbrCRwgUNybJT",
  "key8": "feg2q8rXGTApz6DeQ6dq4bLTYxQgRTWuU8mtL5iGYXqE234PeyApb2gFHKPfBh82sVtprMLv5nxeaSiJisWZWbs",
  "key9": "6277TK3mumeTXYpmz9Rzmc4fJNx9cQfEcdZ47uTKvpTXPEGgNaS9E3jMt3e88U6UwNRHD4CQRN6LbHFrrZoGu9Gz",
  "key10": "4wvL9dx9ekqoDFY564qX6kb9ytWeZeX6dSgF6QZufwS3A9GAG2MGwAZju3ohbPzprHneJ2mNrjFnboYf6CvaDP1g",
  "key11": "2okDxBb8sqVeKBkwDbNTB5nTfAxM8JWfoWdDabqskwkiJ5CvY48dzQu2s3TLnkJXm5u9xKREDk71yuCGb5iXPYtq",
  "key12": "2yPGReZkA6QBBo3rAQzn5gePnNpFppg3wAG5YZYMgittv4gwLhDMEAqye8kpn4ALZfPztiyvdQi4MWPDCgrffUzu",
  "key13": "mSAjsK7JdWBDKi11YjH7tCrpPBJRK4FtDUg1J9cYbVt5v9gugCGmGvJZFGhwc4XgwEWEqaMUticNQmsKqHFwAPQ",
  "key14": "zJ7M8vpuqVsTcFiG4sYUVp5DiRXBwBCF6DGdoumhrNT9xnsfSsryoYQaxHywJSeDeTKS65K5rNGswrmfQi5qzR1",
  "key15": "58F7fs6LfjHYBaqJLSoVUQFu331wz3skof5R8KHVTzE4euHdkrWjk9AtynJKGfQ9wJ6spmqM61eqLmJKbhLYAZYJ",
  "key16": "61VPku496CBziiZovEfDBgTrYCgWsfTVkVnwKHsg21UUPvRZboLgq3eD51YPGRVUx2JY8RBPiuxQ8k5qnUiF4sLc",
  "key17": "2EL9NfKMaoNrKqfNFrnBYxRsSLH5jn63WwBektkNbimtaCXGGc1A1C9jo4gMvNsbw2XdCYvwJzeeZbvP9FT2B2sj",
  "key18": "kKrc5q1CdeQ3TJy3fpv5xcgSXi9Nrs3VJzwTeorVXfxz5m3k9NHkjNS346oMdee7utXENDbWaShYUALEwM3cJZC",
  "key19": "2k5D7hzai5TCwpEsT1aSVfN59zVP1du16GUksqANtg1wndToYgGWcYWNAsGj5FmazRw3c3Ut1UqwFc9Rx6dJVmUN",
  "key20": "4a87VoUvNxQ9HpAXHMY953VMTs7qLfoH4NfKX2BWdJMnZuEVTjF6KBqoxdasRpfU3jhWpcHL7VjbMpR41ipDbvTY",
  "key21": "vnVTJtF5gw5WVrSF84LSJWTJbTiU1bdbXCSQ1xgrfYtRRHYUKFAZjvXNchsa77vH23PAnLRCztuWmUJErNyweYu",
  "key22": "5ny2Txp7JYfF2sJbRtDRatRoE7FJunPZaw21PXkPKx8TPLruPV1ZY4XcusbjYQP4ACFWi7Zt2chfuYyAEFjmQXWm",
  "key23": "55bn24Ge6fP1SmWVJrpkSUUS6g6acJcCF3rx8BUZ7qosJLzmS3Fhmz6pqiFeRx7W1SzcyeqZXqBJnohz26i1MEAP",
  "key24": "2pEpQKJhPKkk7zYNZ4GUCvQrSBe1T7aV3BJ7znHxEtkrasWRXKekiwmBcJmXswr6o1XY68eSE7YpatqUthx9ESDJ",
  "key25": "SxWKkpn9CazW6P13jaUygE3TVyWP5udmURNEy9H1MnswYYib5HjsdYtQVpR42N9Q1CHi417fFdhWZ2oSXd4UsSu",
  "key26": "34imQqsYcc7qdJLfPDnNxuAGb8FvDyNgkydAYQQuC3HRGsHTPpveZTZGzvtLSoQCKuyYAUwfu5cBhh9HqvPaz5JS",
  "key27": "63CLCVofJmWgKGtnxgKR1JyLoJqhaZRqXTguziDT8bU5YbWEsWNz2QhHwWRj1bkdHyKXgk3PFgidybpWzk14sN64",
  "key28": "SxSpPSs5XqL3S1qV9xdcDxgBUnjJha19CWPHAFg4BVUHhWBZZoag4pdv6zu74DSzxPZzEuf2AM1W6pFP266sLuC",
  "key29": "2k2MfmhqFfqjSJJKfxRUyoyrf72RLnBdFWHr34C4WePgb6rCgy48aTitjSp2aPKXg2QbT9bv7n2ecebZUa4CcNn7",
  "key30": "5HktqpmNqUDRdCqg28mjU73ittgL638Kfc62WQdaBny8MYH7znLUSgv1B8LRpa4SsfocNPsfD9gvrCvMxqbYSTvm",
  "key31": "2HEcEQyoSKMpg1iYLQHTvhgKo9G8iYyiRxCjVpqDvn633x4WZrsN4n76qQGeF6FaA4i4SyNWn2WJMdDmrYyQETRB",
  "key32": "551PvXFi7E3DnZ1F9huzMmSRrSuhs5kWNf7S9u5aoSyfzRCH4Nb8UpRQwgMUnSuLm3WFBdYd2XYj3sAm7QLJSp4r",
  "key33": "4kEkL9G8a6Ydh4NZ7Hqr3L6rciYDSKtoj4QWsMzhi9mnkskhgUixJzWH7v5r99jtPLV2zJdrL9E28TeyfHWjCC5E",
  "key34": "592LyafkdVd5AMTEEGgPQRnHu1FMFB9MiwWLxRWAwgvGWmw4UvrNAdD9huXn5H39XC7eEGBqT65jA6KJshteJRBQ",
  "key35": "3zbRzjBzQh6whxM3ujdMBxc1zDDaekwHrZ7m9PBMz5PaUcQNH3QnecP6z4k65LJgzavv5XVLB6tPtTKyoqgySCGU",
  "key36": "5SUnD38DzrYyrUGnNvsLowmAzVaaRXKM9DgsfF8hJN2RmGNaqpksKeCGUDQt55SZ96XtcisZPwYrJPdQtnoAR3Vy",
  "key37": "4iAGahCKTJ7ihZcJg5uwvHDWR4iY1HHuVeP6BXdZdjmcFJJEvUDB2eH3JZotgfXMjBs52PhM7KAPKnLbhoyXCsLN",
  "key38": "2w1y4JAHaavQvxQLwTP3mMZjrLumtPhSzxJKb9GG9CjXg1DMrvUHB6eLtMM2ZDkUNo3U4tJoV8Q8WviWiKEDqMqb",
  "key39": "3ypDx9K8q5QjV3kjJmfxAzt2YhfyiFW1MpbQHd6MA4nubMvzwK4nLWZhD5eRMayRA1gkzuxGinbexP1qp6rMc68n",
  "key40": "5dL6Ph1xB3FUw12dNXK6a2FZBQXDmb5gszvEETQHJex5ivWUVs8SZDw1Hb96uY8BSk5JbwnoxByWiLc3RjLibwif",
  "key41": "5GsgPJu46M7bfvPaYCMFosSCLYbQEbzR4HCKxS7P98BUB44exdnc9tYx1wbuxqXJWCDD98CHAWHNK7qDnUwoa3er",
  "key42": "5NeVgdwxddP93Xhw6NKBtuGtx2UEyaqRjrc3f7bcXvuKvjasxDJhaj5B8dBKoj19R3fUwFo53TYj74ijcEuGqG8L",
  "key43": "4SdBVyn4Ltj7UKpfyNLspU1mz5BLZkaqfPtGdbxAxyqKjD48EiZKV4kE7KD3nmcKTVXhefk1sX5tvvj6FLDDxMgn",
  "key44": "5E3CMgvEDeB91oqRUgFU9KJnh3u6Ewqfd93axhxGUF7RLtscxpzusJ33rUV5bn9HacvptajgoDqNem6U4YMWDR3G"
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
