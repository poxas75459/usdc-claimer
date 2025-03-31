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
    "NbXCSGnkgmLf4fwCv8CS9hjfmVva2VkEc9tkHxHSegrKurY48t8QUDQTdbk9Sf4nHZwJ1SHqdZiDap7xk1YocDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DZ2VYtgv3Ed4STDjxVUNDsoJnheXVy1YPkVMcG8yvUYnm6mw91aCbCFN6Lc7xCWsoTP1RPzVHCa6ed8NgMH5oL",
  "key1": "3Yefv66FJTh5sT1nEBUBgDsfLaRACoHC6CP4xEthV3m99G8PNFJnWh3vtuaUusKGZnC4LqoH8pP8XrnDKtSy6pds",
  "key2": "3JciiMSuKsmbW8sH5DQwHDUbyPmP1e9VE2pkikoy6mpyaWd9k3ZjzQRz1rKzqFhBa2jnRZX4A5Lw2K4AfaqUxKJe",
  "key3": "2bnuSwVMeGj3Y7BoiJVZ7UacyAJGmrv827G2RP99acwsU3tzNZjYrhNQJXme1gs4gjtRjwhdb6msVjcd4kfEDeaX",
  "key4": "5s1ELFMy2PdLs7NJBMGhZhr9LGzusyeXvSeNCS2ighLu8gtDXuE8r8rpSgmx5ebgGS263zCkSnzaRks9cz1YnJue",
  "key5": "3aryyVJRP3x264w4odcpqZvStT6KctX5SMFztvhFHY9XQrKysHunThpvUqVrc3M7WSY7cmwFkdL3TgQ6J24iFphv",
  "key6": "3vd71cMoBQTAUCCxgz2uwDZny3rqtx2Ytotc1aWCUZG6BvhgYD8h3huoigspLNH28J2ToG4XGXsgnkjVJ5ZVfKXx",
  "key7": "2taKwxeUyQEXioXvi4JWM1faHxC8iWXVhyxnLUrkB24BYGtpnDr4RyRZH7ZiXqVAyYHyWip32Mkv8gTxQaJQENxq",
  "key8": "2kyWfsRvcoW5azJ5a7944YBUUawYpc3PtC8T14EaVR6FhjvYxpKvpUvzQ2f4Q2YDFDAnL77zbWnJwhziE93p2qDA",
  "key9": "4RZ58drKHae4yF4W29WAJNXgGTYfBadVMuGAvcNRrbhTDyZeZGtLDzpXsFjzCt4udJQy2qarukPxFZm2rb4PEMXu",
  "key10": "433jf7ydnk3Y6mHE96WzJ9mpQyHw8EJFva8T62G4cdkZmxfXKCbsNnrwbtVwXekgR6u2HihAiV9fSVxnuSNoZRhA",
  "key11": "3GZpPz3pSMmL2nmLUaMndmms6oQBetg6TtfrAx6Q8ubEGqXo7fXV1rHUNntzyUU5pJ8sEBKAEMw59VJfN6jtDQmv",
  "key12": "eAXM1byujDvUefAKxEF32SKXbCWda3QCtwHdyo7wy6XBUgXDxaZP89tXuvc6GH6BGmrZ1274Tb6vcQ3rNN6ySuN",
  "key13": "2XGV58Pcv8hgwTUR3QDTM7VtBgdfbDLYCyzZFHdXXVUQTCWWajvDGSjFW5t4755J2iXaMhZFtu2DzEZWBYN3ryEr",
  "key14": "2cCWKyccGHUqYAPig75kkLaMnj8zkueHdHWJyqHZUNnzZkmwCqujbfiqhvBmCJwtd8L8dCrawjSmEmcUjC4LEgNc",
  "key15": "5xEghGEuPdtLvSLuLmgVNS6pfsZXqCun4EcVgBoUxgCx9ghHjxz3TPt9PV9cHenLYb7iNyWVYkh2N1QYsGuu2iJi",
  "key16": "4XxaNsiHNBBFHsxM4sJVWE5RprYGKgshsZdYcohyCMDxeMjxvmaG3GHQ6A9cjJtyhCNL5s9zvMzgudttonRPrUTg",
  "key17": "4kg8oy6GySRQmmL563ootwDoQnvgQ85TKZXWTh13ec4oLS6vW2jomj3g57SDeBiqJTN3jeoKK95ZumbtqbHa1si9",
  "key18": "5bjieoGhNqhVig5NgVjwJwLEVV3MwZzX6953msjBgeZ5bUgyXtPcucxBfQryq7zU1hM2nc7nPSVv5DyYPNwaBhsf",
  "key19": "3jbCqJf1MxVRrg9MXLPDwF26cMdW6JBmoQxCtbjHvhLJ29WscZ1BtUdKg3zYhAtVLW35FZk6hL8baDykdJoBesXp",
  "key20": "4nsm5xN3Qieow52Wa3QYmCeKiQAA1iDdxjwhEmXqGhaPbpp5SUvbczBdKH1iCAGjaZVKDYLA3w5b5A7Ur2bT3K7Q",
  "key21": "5rDYefpJak8mefADSHanPvdfmJHAj1qQvXzdchCfMZ1rcUCRw1xEiMc5QRbizUVCpR8jVMuWyP5PFPoYkpwQEjuN",
  "key22": "3AJrL15pbPzcxG1KgKSkaSYy2pB8qk1KQEAunJJytUW5fZ9FVEwhEoo2U3hjzJ8QmHQY7UKMtcATYHhSGY6ooLQq",
  "key23": "2NAfQm56NaZ6Aby5o32kW3Ece7jKvgJ23XjrLTbAknB71K271Aze3SR4No9yx8LXEjkogA866RyJV6oD8zC1BFLc",
  "key24": "CCyGuWcUh3xRrpxBcycLGgis6VKzVLHKi1JTs3J3Aw3dXTsdboNdjUuuCwhKL1TbWStTr1XbNWFkUbcHDgqMbD2",
  "key25": "3hi8MP6gWsV5Q6uvx34G1GyUWcLM7gK8K7HSFguHCj18wPy6mgK1gKHMy3H5ZWUninipXDyuSWiK48NMivicrcHp",
  "key26": "3HBiHjrUAEJqHnE5Zd5jMwG43BBHENiSPVFJUZcjC2DEGB7GsWHeNcH35GURehkNKVk1bcFPmZGSPNth7R98J3QM",
  "key27": "2eaL3LjUUxfdahjMMgoZjyqtfiu7v5wgGiu3DKSQnUDxCzpXYC7zcsnhowv48JF9DjtqSZD5LeHFmikotSZY5kbC",
  "key28": "3fbh3VfsAnN3CznX6h525wthCgC76MsG4WZzsKFj3JWq1SmbgcidtRmuoGq5xEA9kUTbEFN8tT27BK9TDRQJw1wC",
  "key29": "3BzEzVvmYSWwg7pZ8aJJ8o8rWkwcNUf9ZTKxgqUhZPZnVZ3DbM5RCz5zKUxhRRiHXmsh1FMbk2NRmTguq9hfPQDe",
  "key30": "4XrAEDcYiihaBszfBmkz69v8dhjCgDmaJonJZfYWkugAYRfAeXWDxkA1Ptd2usxBfe1bs8hocWiDEZthwB6UAMNX",
  "key31": "TioCXtrqMGJUyu2fXBpcrCeLtFxnPcs8z23yyG4eBQ4r7p6gptmRtCPDJFsePDZHFpecHX6ccrhcWmmRpMZm9qn",
  "key32": "4NMH4zh7jq8sYteCgEnstW2TfVnXN8miYxNPNEesShCcY2tUfuZyQYTgwqV6D6e9YHg6CrVpon1988MGHQsktvL6",
  "key33": "23Dnic1NehZkQNAid7FeT6sjGWAcsurizxedmnnbRtmuEN4Nfx5CoY1oBnhhjT1kgywJFKgHNcAxwvxxLBRbq5Nq",
  "key34": "2vJrVEmdjYNWeMULndwr9or7JD51CtYCDLufGAYB5GkQMR4AviozdubMp5G3pw2pHMgKAoo79VbS9tkjuqyCBv6L",
  "key35": "4kTEfQCe5rte3rkajxQrFyhRMmftD4SUXcaMPzd4YMEWtJBU1wUNqQfSfyvkM3BZHWFJbHEGyYW2nj7SChape73S",
  "key36": "tWnBqRcWPDpReSRSzsjZc4qURzcdso3PBsgLQMD19DW1vNqzfSWc5nxkYHXWVvdpvDwZePgk8xNK25rLCjR8ZSg",
  "key37": "4s9z5WxZGJqB2GezBivhVkJyEAkTiq9zPRzxxfEKHjNJToCAvVfJuEw6QqYD9taFKrUiTK7gK8rif84P3RL2d1pQ",
  "key38": "5P1o4Hhp85toeSjjMFTVPrbUiaeY2xFDHrXyfzae6H5nTLbgCC4FfNmRTH48ePHWUFDviD5LG3vzF6utuydJeGQ2",
  "key39": "4kKeb9UDTWowvXTZoe3sUbXqnWeCCcdBdCT5ViG7P6tk8AZ8uJHsgAzYTGoXVEauUzor9CxVfnHjyJQ5avfySqFF",
  "key40": "2BLRt4nyvEy2T3xPpXNeM5rBRNWVgGW4HR3urBznusnX5F3rmfJUWJz8JiiiTJShkMgaikUHiafWCJEop3Ky14TW",
  "key41": "BEDq6RugmPWTq8ksxtgk3ycLtRHWTY9bjuMGRKESLRhKnBPVWiPLQMuSma233ARpVx1KTkTPur8KZCwyPeickza",
  "key42": "3ZDAa7jUc6D7ATXtnuPH61zQjNJjPTaoyM28QNhtrdx9qqnqyhkGEgM8UHbnrD9QQgnsrxnV3kioz6N68wchMjG8",
  "key43": "3TyBhySBwrRSw4R4iAzKwBqfHqbnqTogPX2Bj6VsuMHWsKFAjixGM8ydfxpUewUQoHViyd3uSPuJfgNbPGC5WqvB",
  "key44": "2YpqqBxRKV2wqL14ycJDocR92UTfQGjLzpNxum1aGTq5qPNuXGEntLqHhWsaFXdQaW5avfdyuR6TmryKTuKVDFC5"
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
