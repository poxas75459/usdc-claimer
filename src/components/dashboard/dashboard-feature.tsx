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
    "2T7Wuh165xFprUgJUKnc3UHEVY657CN28kK18cLXNUcr71LdgGBthKKCCP1e5KcJNCSpeLJy9UxeJSNu7GBcNBS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utk1YSr2aMDih8m7eu6JQWnmpHBFQR8m6E6EjiQDi1hYU7oGoN7CRXANiESnkJkoBABXmsSaX56soNbeehxwpxv",
  "key1": "2yYf1APswzefeWivFTCd3KYrXhwPUUgYTDRqJzHuafECiFZwaJ7HYWqpXo5HQTPyVU1L8VviBju4r4uzxCCgb7bn",
  "key2": "f5yjK9o9uQiZanb1oh2hrYN6mc3piPHHoRuCe5Q1ybuKKrGrFNChXKfXVEZ8dJwN1jho9mEdbmPjtcwrnHBLhab",
  "key3": "69VzVZN2HSMs1ULeEEVeh4Dhnd7k8mh4tM78TwEGikaiVtwGZpYEhdBYPEFQKyuuLw7R1tvcf216igyWruQFkfx",
  "key4": "2i4ksYGWdE2TuLW3c38ArAvzf6vLR5bbY79tWdT92HxccrPD18vckYVkDhX5cRWbqodKHHLHvRwPL97Li4NoC3Fp",
  "key5": "3Ps54C5PkHFVodCPvSNmFmyw5tEZrV7tqfqMnnWihegC7Q9UdCgdxVa7A2NabVEkM1pCkJgZR9bPLKxnPDKuncDD",
  "key6": "61VQjFTUHuAFnmwJhoPxfbyVjxaGAhJkRgU7mcFTzZYvRb35LKjuuJVgMHv6F8njDQHEsS3thvxqs96pVnGmKQnR",
  "key7": "37vKfT1grKUodmPHvxpAn1NXVfGY7sEJLmUYfSjj5AY6TcFu9Jy6BGt3K2fbdXa3bxsvEmTCuxsiBw5CwiXnpY4K",
  "key8": "2HUjrGRMEqnHv1nUPQfaCWiMFAjUQEC3fLv7ToGvAuANRoawtgzuvFf3ZVZ5wT5CwZScWrWkjZKGLq9YqBpA5SEv",
  "key9": "4zMyds1aLeAsCnukboSZC98k6KUxZ2xGX3F2Z7dHLkVaBkZ8twk3HD45j5sLGvw986jDmSsHEXvUGLe421LvhiiU",
  "key10": "31tPtWr31jL7oAwfnDQ9jEThn532eULKADQGr462uXLVkMPoa3EAPCWKiDoEhK9wJA82KYMsJKTBrRhHUvgR679W",
  "key11": "212nCSrSVKCFtAkZPufoYeksDwWnv8yAaaW773GdSMftRUXJgjm4AAradEMwqfcL3urCogKigLAkJuwpUkvhf8ie",
  "key12": "2WRGF23sGcTqRBWrGi6MPsxcV27xqCvoUWib5GQaFp9NSP8LyfTdNEbAfhDfcNRracEir3mJ3i9JuWEHhrt4RYxR",
  "key13": "2yP3DkB47rBET9k7apjnXvPqNvXpGfbqD5moVmsYpcE6SfrpJkXPD5th7PXnZTULkAn2uvoCFNPidF4ysEz6DuZx",
  "key14": "3x39vRrXpY2cHKHXHeDmNyXydLkt4iCcYD2NY2bJckVg26uArjV2b1J6tvaka3fzekmisudRhbMPbm2YRimCGYaN",
  "key15": "3WVev3dkLVbLErGmRYXH4ToTCDZdGFdRpyuPQsi4uW2y8JPAhBd1gaC3AMhsg18jLFkp4W8FRsdnzqv3mDKzrgH4",
  "key16": "VVQ7DzYJqeoFpuyFpwU1HaVFLQByQLbGAJZkAwn3zB7sa7Fxm4WE8x63RPY82yE6jLvD369m1jQcnBfM3aXPXFR",
  "key17": "3rA2RnLWvk9g8FyrzCR4KHLbcdRbNwsCXh6xa8mu5MtFUPW7MuzbPcpfgVBY9B5xoJnbwrbn2KdB7bgnPKDkJqUn",
  "key18": "4NR2EdMwvNnab1YmdVCBwLPYjU6u8usMybQ2a8s9g2GfUJvKsvcvRUwBVwNNnQ4i5uJSBbeEpMY4yk3EXbxkBWuk",
  "key19": "5k7u4eL2YVo7CuPi3QRn995CQqqBDcBm2NdcAzK6VfJVkgf6nNCwx5kNkNTLChi5bjVLTdRHGJ9ojNSNwPnLoXHt",
  "key20": "5hAHK3JyRnygSf37hNP5MQN5E2k67qXMPJe9bqqEUeXBzidAMj2zE5Q445j11Bb9EhDmtuatTFUd3RN6gj7auA8m",
  "key21": "PtUs8hLtBiJn2iJVrwQKBzxdwCBdDPgjBPsLJxK5K8irpMHmD1zmG7qrNwL8EFFJg6GCbpuD859cxLkK5dXzF6v",
  "key22": "pSCCTCNVRvNQhaPTqZyXezh8zYszUBcGjvs8zHBNdeWKiazC45ewedVwYH63QJ9z9c5bn98uHbAEQz64EdfXYCm",
  "key23": "ommAAAxEnLhFtHMpGbfdjAyY7HYatbxoMomUA6S421Fum4vVPGm2CNKWx38W6Thy53GHZUp62MwRmJqLBReDfA2",
  "key24": "ANsnbWHYRCh6EWsGuuotxaZM4WXWiVBgwasDKkCRgXPyRNUE3nEBFANDhzXhWq97NFyLacWdKyBJ6vH9ePHt2ov",
  "key25": "4Xnf1oRUht9U1ubNnzRrdZqhN2LoJ1V8bZSSJFmKjsdy683zqqQc9kALVCbK1T2p9owtfPG5AA3g8s912EsVWjti",
  "key26": "3bo1R8fy9PjaqMcBosBCc9qQJCkoUzcarJH1oqNxh7csjSCpCoeC5ZZe5oAG5aZPzkHrgfNAEmzwCgp5MTdeJsmU",
  "key27": "5Z3Fc3vkXJBcAxZR5rB1b5RKnNRB5cFWM82muccQ8xfKg4wRtrRcm6aJ6BodojQDBXy5Dc56ZH5fjcTPG57oWEux",
  "key28": "2NHg8kiiCKC2PBD2BgCYKR1Tb1vqtX1UzsW377LiwfHKriCekuSwVp5xK1ojurV4S61jZW1Wr7asD2rTVarJJoU7",
  "key29": "4dPtijb4MLkXRQnWmbZCt7yGMK896ojjJCPuHkKzB3hLZ7HjfDQoUXvJ2pAn3ELkxDrWkpWREaumgn2v1hTVsxcC",
  "key30": "39ZoSDYTCYN9o1Lc4WCBXrssKrbKoaDeYFHidjkgrNhdhFxhXe7gSBBmmz8rDs3AbbW3U7ZCM1fpGKHb1MgShAKr",
  "key31": "2ZX1vSv57sjaPgMwsprTkqBJCzu9LQpKSLdf6qFw68eZidYMnCaTgnA7uVzvm34CekFSv5kRVJYZ9xc3TLKo1871",
  "key32": "n72WNWA8pA9Jyq9biRCoCMvNSwWk8c8S8DwCoi7mi3SZPmSt5GNi6pvU5TTri8HXQL8ixCV7FusFo7oFrMAkFgs",
  "key33": "52NArUAqyh5dewY1vGgUMuK9N5WiuHscbC6sEtQPiM8TxJXktnhJdqk6rNpuvNn4bEtvd8bnDowfyjuCmdu6ztdq",
  "key34": "AQXUNZJEwpCoQvbt2yBFW8y8843KfU481XC6mYnxHpDCwtyc6ouXAWzMemaeNyqPQpQRnXUziY4argZKBaTgN7j",
  "key35": "2XZKHuG7RxtmtEcnGGMBBxA98muUa8W9dfKvMFWov9zzDjRw1g3JiddN9udyZY37JQNccwLdXoRKwufFS1TRwnxX",
  "key36": "48h9D34jT5votHuyzVUfpGThkQSV1D7tHWCARCPAT1SWKkPjxrNHyFyUvyqfS6To24t5Z84UvYVr6QtR3xSWEf9B",
  "key37": "5MwZvNhUG88V6R6VYDPvcQperjVAybEoBYknUmGKkpcAt8cSxigh8RBQ1qxXferQNBFGk4VzrFwTqNJfAJFCNyVE",
  "key38": "3n5vMhwcZR11cFaV3hWug5ZX8D6BqCdkh9Z3WzsJJJdusxjCLiK3mfuCJ49fyKnTWweWyGqEdRVnoZNCvtVPq4bu",
  "key39": "45JSo8yM7yCZUyXzyEtHGwoC6wF8zYHTX5xENpnBb2dcWLgAq1tkqDkcU7YQuazYyXm2cxszP12NrpuWgmkZ7n8s",
  "key40": "2yhSuxgGCbQKzYeV5aAtF4LAZa2R95RPGaubSkKHQsR1XR43XLrWXHf3tDA3gUYpjoPKpbPsk3GBLxtXW95YZXHb",
  "key41": "3n7E6AhFVHuqVFUtdkzQNPPrbeymi52dbySgQrrbCszVf4BxhD2qPcbqRHs61fgT8Cf7LtbbchHGRWUU2N17TfVQ",
  "key42": "3jL4KLms7kvSmrYicRA73zQkyCo9FRx4FrTqfHA2MPuXXsgFgmWYTGTXNSu766uQP5TRTiBghPWfMDBhSejNAsWv"
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
