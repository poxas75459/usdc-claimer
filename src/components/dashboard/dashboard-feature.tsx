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
    "xuCobKE93Us1QLqa57gcid6dmU84MqMMjr76yjXi7fAUxcy45dSYi9g8osPG4uv3f2yhHM1B8YpRVyt8UuWWWze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztEkjHFZsACpwupSc6bPh4WshHvWmbxuXqLxpSfErcqgEmZdRots6XQYRS6E8Evf81DGEkM33QJ4Q5w6HUiQfnj",
  "key1": "2FPkwvvNdZpuZ1qtnoBb5vq8yHCsQWechov737Rv4Rocey2bXnmdTaWNEp1rFvHnrg1BqqX8bY7ZzguV26qBzFSP",
  "key2": "2iLXfJFDTMtY6ZHXnBzjr1rGHWgQiEzVyuqRhJCz1Acnh4vNeBpV5HvfZwzHqUundEgD8nNN1bx8pJudYZwumfFA",
  "key3": "5CXtmzs6AJMBSre5tbtX8KzUee7USnPLRgm2MjikRqoi2FU6zaoJTi8kf4Q48dSLYFUX8xrva2nQGXLzqNTMyAEh",
  "key4": "v6ttUGefvst21BJz3zL9ck7v3CD5B2pNhGNHfzWrg7pipugKhTFw3RYH8EK1kZUtdqrUZHXW39931vfckz22zRD",
  "key5": "5H9YKEwmsv8LapSWfC5iabqqcM1wtCJ5omY9KE4JTp3APSTJWRZ2CgUNp82hLB96HVg7RwdJGhULTMdRFcGuK7qq",
  "key6": "2iDqZUmNsJwmDh5cVjEuLk5hpgpKadSakbEnZ7NRshVHvmSkcUdfCBcTmHsbh33AqA9mDHNYiRRR7HHEGbGirXEA",
  "key7": "9Vs7v2S5N9hWUDDSeCjTfgEh3FgusN1rkuZ3jtizQZ7N1tKBhGWdUPnGEGM5VRrwATq88LWFRjbpRhgWpQU6tSu",
  "key8": "d2BMzT1J2XnLpAAJhFuHHJPatiXNGmLEaADPmbkrXVNDvY9xgoPEvsH3owAwk7B5mxx8bUUbPAtGJAc39YXaZpE",
  "key9": "245A9A16KhntspDz1gKbvaztxgRaD3j7teMV7vyfrR69sBtEnEAtikxdP5MzC3sFAZSYGTeUZkxQPurv1cvSKjGL",
  "key10": "4RAQXTf76nX2iZgRMujev6QuGEwdG8dfLUJk7LeD53RvbyTkL5qudD1D2fVocuVKAGLaHcAqzCwYqZYRCqsrzjCy",
  "key11": "4PerzVfrvKNopzCUeyXZL46tUMrqG2mPp6y7hnz3nDZnLsn7dNLNGjTJbMGaWHyqnQRS5SKTq6wN2MK1TxR2cDrg",
  "key12": "3m3KrxXXzrPgJ6yDswKBqGG3aYr5xku9jqHn4XFrHzrR93EdU6afvRfLmEyRNRje2SQjG5Piw5UdxcnVD385DR3w",
  "key13": "42wwQg33j1ripv27qSWqyBkyptdZE7jgFQqJcEvkQbLturS93xZRDb5rc1dgynhL6sZr2TKXgm94Hy1gNcwT3tZb",
  "key14": "5TkjaK8S2zC2h8VNqd5vxqCbKE8wMhA8mUir8SBQ338tfn1kHntrrXCyWkkqsHxBGYTmFBZ9BAFFi3iSbC1dPHqA",
  "key15": "37mFtZFxSptxHYExrkT498G6aXRnXxKiL3xZGoDTixRn5vPUuybCWATHeyxTjW1fRutwBaPXKErswege6LmcWXuh",
  "key16": "TkTh31PNt4VVsgjFoo9EXfDoXZJd1t6xRFrhdpesRdwtRE2d6tqrpaj8fUkB5Zt9qBZDVt2mUEb16CVvdGb48k4",
  "key17": "4sEn9x9nC5Ud9AQL155KXiXZWaUsKbSaYPWoCZVijMc9sm5DjFqoDoYWHkduUL3L8P8r8pNYAuHCT3sHBzhV1pzZ",
  "key18": "2et1HMARmyt3LKsJfwWDsrPi3Lk5xrJru6Wmw1CiFYMTzZ1cXnrc3vUFdRupven6gKKqQPBQpviC2qUEAZ3b4red",
  "key19": "5nT5CcqjuhMyeNSnghQRitK7DchhSoAcicBpq5eb1dju8UpqyCyNDU8gqRQWzsoJHKrr2YVPzgdyE4Wgv4uyPGf7",
  "key20": "4ETFVHZ8qDvxhD7Jwidp3sBg5Tz6sFPDvJAnPsbsARjoqR8PXH7sv8gtX9pxEMuQjq2iZZCLRWjSankQgXC97Sya",
  "key21": "5sZcnyfnr6aT5oZLTigtUwYyUZfFowNmbMafEEvV8ZXEEqzWQjnYnauomCD9o1iaZ99gZPdQFBef29aBeEKnVyTK",
  "key22": "2o6odX245wXY33La5qysUnZSvWrhedU5hHt8ti1n7UwX65Y6E8qZqRvGArMoPYdeEggNPsSkHVNnLQkPGtam8xdd",
  "key23": "e39JFNRhupwxtghLyBUPSqEjPAc5t2S262UuZzJxtohi4oy8tmNzXoLUZ3QTDV6ddAwkikWymVGQvMim4PvCz48",
  "key24": "3wxSdomeq8wC4dydxKRtMQYiJB2bmaTWjwnySt4bPzBJBtH1zucShYiZxfkw5wSS7sHYbxpwL9oxrqyFQqRU4fkx",
  "key25": "4qZDNtxzkcHYHuC3RUeBdiq2o4tyyzX1RkW8rXY7X5xR2PfPgDLSy8oz9xwfEnJeCzwUtKMzfWKBh5avNgyeRpAT",
  "key26": "58WfDAuFnojHQ4iGMwnxLyRYxYyPNbVz5mCRVKDHDBow4hD35FRCsxW4i3ftqszvtkM2e8VBtrTH9eRooSVEUreP",
  "key27": "5whKxVE4ch8dawH72oma6GxHofHLV69Bycz73N8gjoiguFFR57zUU8FoPHPPK9RTY4xeRvQuUmu3CeugfLF6zo39",
  "key28": "2RBSiYpUCGJN9nBuX2hKEiuiThCcevAcRVYEsCYjsAY9KFuSCFiJHK2T8kCunt7fwhdXDnvecBDoRupmxKqaDohU",
  "key29": "2kRYZcgRJVNRZpjJMq1naVisSAyZnhcNLYXnjZxyWaZcxK4Ewfdn53BKuKoVaxKm3v46yf9jDPQDGCGHiLPZ3xXG",
  "key30": "2vD5xr4ZCkUzXQEmarkESxDajrZdRvnUbRTTmzCzMfoavFscvrt5qYWRNgeMJLyxfca8vgrUfW6E4Cxw7GnHXqiv",
  "key31": "LcSzXWfVVG8qMSoCzRnCDk9Cs27EUuK68H6NtQCFmPGG1NQc4w2sLN862QuX4wqkJH63mYCnzxQ2oVi9eqi1kyG",
  "key32": "3NVJNz6iXp4NwWHSQw6E4VJvb4BBsFYi7a8FkU76s7HtJVs3ykxvPyTmUEcHFMLVb22ChXaeTvRSezVmni6E5hwr",
  "key33": "2zLTQzq9GQxCPRej7fFAgoZKv61XrZB4ekhfoxhp22QkFMWR8WiUa5wgDSTGDibbA58G2S1EpDWmXWRWquZSJVF9",
  "key34": "LRsUq8WZAtfqdU8LrZVBezdhXgTMMD8tPKTe415RcYLkaUJ7Jn5Zu5ptsiyXpxfptFyVbM4X2KKNvi79hmeFopb"
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
