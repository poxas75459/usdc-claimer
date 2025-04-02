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
    "24FjUbm7WJUrkH5iBAnnoboqEYCjWQpn5NcJM363VswFMcnqYQzB2FVTWghKBkffmCRbWFfwuH44BWezsE72nGDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eusefCR8YAGZdC91fVZj71w5PaY5KQjNjgHC8TvcQ8NrYbpsRnkzeVV2XcEqXpmGVDqrkuZGquUNgBXvWkYgP2Q",
  "key1": "CUgDSzj2rciSHjmWSuGGvJGx6QamTgyKCd1DXEmNSfibqz5KkjgTrkLgYrCTjNWVGCsjm5SNRW4CogUqNd9Kxtz",
  "key2": "21nCPRphHzMWRa9Goxeb1jEAUAnzUE38umhx2BsJsFEfxEXQNAc78VGKfTgck8YJ4UdMuNnL2SxqtGuVnm4fqDcb",
  "key3": "44xPy4KKmMGWtu9e1mGT7KuLjoqtftsgXbaZdUxYFzkzTNVrWF574QpSjrxFSXE8xaMFXSf2y2cKgLS9V1xq9rVE",
  "key4": "3z9NBF7KmoHfDZEhLHBV6uQD98j5JDaTrm1brTuG8pyUqTfemHxHbH9cmsCj3Xkbm2nAdPpPxZTVMNTw1hGuwY8D",
  "key5": "au667JkgqTTZvmAqBxADgyqTHRHxLZQxjQ1AJa75XstR12LPPNmHyEmsguFFrUKDG3Qb1QtKxpr386WrdzF3Spo",
  "key6": "4zLRvDxi2aWazgzThX5i2yT3mbn6yo5gVpp5DaFkNkf5mLP5XcF1JFYUYmqrvKhvc942CrLDggm5cAQsRCh8arvM",
  "key7": "2ab9JYqJ2pE4rr8kNjYTRRRPREAK9WG7LF8gpXuB5hHw3UesDJCtKwvahUH2frvGBuzoRwshpzU3uwLS4RqWuv4p",
  "key8": "4bQVdt9GtWjtQUx9JVxpscNrX9mBSST7Wp1k7ZaaBNT8hFcJd5nXEiqyogiPYBnzCwXpuYFaWvKvrjePmMfmtVx5",
  "key9": "5y4xywwCjMbj3mSqDLF6LPwJydVPGsrL1A3mW6WiDLj8D5SfPNpxoxQrxGXvdcrkWGeB7K2SR5pBw43VrTCi6eq9",
  "key10": "dvLz33NVsGnvwfN6cCMbyhDhcdPKcivA99qT9xywvGouAYepWoDtYPkXw5BWqJRtAzS94EZyvkwwmtewZF9nRDv",
  "key11": "2YB5cuvAyY5Mc24JS4Z5Lioh6mrpbr8CbaTp9fe44CenD8gF1bJZnjbmgSX9UAVkD1d2CWLwFCdy3C5weXjDoFsn",
  "key12": "2sTv7EoD8xUt6LJ43nkcVq8iPuJwdC3qGPPtSaXYE2U192ZKxHuyLHBMzg7eM5ZuHe9iWpwsxVUq4K3N8zauCzpt",
  "key13": "AKDp1fvoHHBmjRD8hg1uodgShut1Rwtsri4aLi6YSt5v8b5yhojsNEWBytrX7GwZBYVBC4Zkt5MeijavMsFmD5p",
  "key14": "4jbG9ScGH6iEtUicBM5ss9bvVqiyzrjJRrj6ZiPgVATz5isS3Wi43mw1xSt1uipLBPY5uBZdSSNmBbbSCUfsv1nx",
  "key15": "2X8hbSnuHLAnahiZU9pwjgGME8t4aXFL8kXBRoM7pLY1Skno2UALJgDseMbTgDB3tvBzkggiWysfEwQvAMvChkw9",
  "key16": "5tnzxCwc6NZhY1uSn32d9PrQcb7MSeCd1MLxMfJS2d66gJJm9r2vWNa44ugDBkkAQD7Uxt1fumeJAAyhPguZavPD",
  "key17": "hcGhW6pj5hM5tbQC9386iMfVASeQpH9rWoVgTCjNvLa6Ks3JVewaa2iMHBnz8SFNQNrNujvb2g5FUnSZ7wLLksR",
  "key18": "2S6R3PyGYzTWwC5kwfsTjMPXXWnoWfYCtfDgVrGsDux5cdS2jspNLPKYHPR1Z89n5zs5qM9dEFBomwnscZw957F3",
  "key19": "4drUg1pYvEvG5uzVVUEhshd1AouyezCx4XvcPWBb4dPDa6bX2Rw9T4LC96deZv3abhUHKRo6vyu4MUdnbmn1stc7",
  "key20": "WpSAGGDGzp9SSt42gtLVVrtud4sFCcjPqxBMNph1FezBpvnBDzhJJ6bLBKZLPNWTfeXDLYrUTBmYftw8PVJRFp1",
  "key21": "2veLJTnJYiCLF1dQ8s61ACw5yAVFedgdg5ticB69ETnHciCcjgNpW6xUwTKnTF6JdMJsZbwxQRiup9UKiRFEJYFA",
  "key22": "6623385s868m48vRdbuTimaLHEjUMP4JSzrFtwh55HNVMBvh51SbFvV7KXwMKBpciPzSkjfdd3myimnWSznMzhF3",
  "key23": "2PeJsFkivvo7V8jASXRo44b2WXxxm61QpL7bzrVVVvoEEAY5PzwHQYRfJdBrYXEKfdvQCs1WFF8pGtyevw6pJbWz",
  "key24": "44ek5oX4oNTmBpN4eEEQjizekBsj19EwrF2ivyqBGpDh8ACiq2tUSXQgTZ8TWgYTFtodzYXRoDv8qvD75Bsxx8Ej",
  "key25": "3a3yWqPAAys8sYpTSTVbsHt9mSgy5qsuMwnRDM9Ca75UwkFfSbT8gRkvd5ocN3eoc6RvX4xX8AJwTFACwrtG9PLq",
  "key26": "3Fd6WQa65rUDGNdNys5om6Qbr3wu7KJUAsi9phyiJaJDgsdJggSgBMPmANu7iUAD6Et6GW1dm2PBmDXsq3iD8zbH",
  "key27": "4TmCB12idXKRjenBE7NG7LT7Y29fbZpkLizirSeKagT2u6a6mGDNSnbn8Rm9htmRTNdNpDKZFe6nfSk3MTBbXt83"
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
