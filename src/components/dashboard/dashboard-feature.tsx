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
    "LZnwGpKrzSPXFsWEaThXcKyB5zhgzZNreUT4iURrp2P8fYBXPPf4dG2aVysoKXz3CyBpiJgA6fXikoJbZc1xujW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xLZD9N8ZkiAzgfCTxkWmk2z7DqNszKU3xbFRmyx9BmGZfqzBSTjJk6KkjDm62ZnnuWQctEsFkzckQqxzcxhVEw",
  "key1": "5P2rde6aFR6psHzsWsaJ3tTNUTCNEN2ZbZW5sDM1JCCoEjV5JSxjk73LMu6tsWAiLBtJ53WDMoUE18ddxPDKFGrW",
  "key2": "5cDWYu8NvhSXrhyrVYJhd5hexy1Ljg1Ag5GSCt6TovBpXhTZwUKu3YXMJwTW5G4gFDRgfvdXs5c8wUJaacnkDyQ6",
  "key3": "jjshnhsqGN5ZNsubUc5zkQ8TrsqkEJRnYe5ehNZpGELAeaSNe26QiK5cvR4P5YBXhEVqhmSHFaB2BzfQ5Cju2iF",
  "key4": "3U85VHGhsU3b6ZyRJYNMH9aGrPQ2FAx8MZvPQKGwPKbBGcnRaZyiSbCKVKfz5oTPcHjGZiG4ZH65eCHLzjiJDbAF",
  "key5": "2dcFg45Cbj6t4zEnofZmmqJqr9SrZGerAogQirGxACvXd5Tr3bXno8u1hdkkGaBuQ6XsjFfk85UJ4dUUgR1rnm3M",
  "key6": "4PChxr2kETJBqxPZtfTyoF3uUqMq5RxH1adkR2TFuyLm3oBTwGWeL5dvH8cc8PLAKQQLSMLJaoK8APd1deue65LL",
  "key7": "5afbKCjyBtHAQEmArXWsaUpydAmwUTTcBhf2JEdcCAGxXsfT8PC1NTC5fvoa3EqNbpTHYCAocEbQFq29CkiKBpH9",
  "key8": "4mfQw1GUNnsRegEq2RWQM5r93MtLkH4wnTN67RLxWumMzK2r4zgH8eNa31JRirDXMaNP6ufxn4Lf8hPDEZryKuoW",
  "key9": "CgUh3RkbRFJVvf9QUKzqEcZVTe8J5dUVBanHZ7y8d14VkajTKVw4qPJFUjpdCLriKkRjj92MAGavAM8ZxpB9CRW",
  "key10": "43FPYxFD7qqdMRFaCsiwgSVQAEE5pdiiJ7p8kb8FvW52cRrzGhHxUZr7b6mjEsRiCVu2G1vJzAxdJQZTxRXVxTjQ",
  "key11": "5kcu8yhHSHnH8w8zC6Q2efcUrgEFBZpsFtr4vLAYoRYMqLqnPVP7mo4WPj3EipeR7HbigiSsSrYojvgiFuVWGUnV",
  "key12": "3Y3YKxP3xWf77sfoEvuA8DTiyAuMDRYEgF4WnGCwfKmPddJuoPJmfoqeKjNeF1pywNLoG4yz5a6vDrtpqmzqCQP5",
  "key13": "24BcPEwRvF1NbroWZq11z1RQEcw9XXVu4xgvw7R2ohe2aB2tksEzaduKKAkbFZSVu87XnNyzoiLkvkXUKYYjAqco",
  "key14": "4WbHkYWjFwUUXS5evTyqECVQ85zBJamynbCWB5HVNACtCGFJM29rRozMAtm6mngRSKeua8NyKD1RQf3axpDugFir",
  "key15": "2uHw5odht86RG27Hx1we5xrjZZo3Via98L3HTHmtqNpCgUuQ4iwLvzUN73JQtbW56F4YkLxaxNM6f3FUiCBeuFdX",
  "key16": "3nnjBRBG1opSTRryeZYGBaeqrSNXCcPzHuGPa83mywUxVgQrWZsYTBUU1r3UyiHgv4Axxb4eVdETkUD6vH3c2r3M",
  "key17": "5gZ6xuqBJYRS9C9n2f4hDJ6pQuj4ezRXCXevMFVnifM4nHpcSAjQUsUcpSUSercyA6Nd6BHefpy4m3raZcuu1T7h",
  "key18": "212ocoLUVfSku5U4r1svcyZTTPVaB29knTbwmHB9oJLA7y84UPpVdyKkJhiv8cDEvtskock7MncNLdfoLjf2ypPL",
  "key19": "3bT3JHnu1p7cnR59qYgnGXkj4C2tzg6TAMFg97KSF5hSi9bSjFrkKU2H7DzbXHTgzNTD9zpXW4wxEJrcSqY6q8fR",
  "key20": "26hDFmKdyeGxyp1JDPNxYK4ECCHseDQ5t3Aki9Y97NcCppsAxajWW2LPAt34XNZfFME9xyAATZ8jwKCXGpj1MEGa",
  "key21": "2XmHoLK8VXM8bpXBrJgwSKdT7aw4jpWbcXrXx66MskNJyeXyqM7FVL55NnCS2YLZKZmp94vhA17CWy8vGMpZuJ9i",
  "key22": "2rSGz39tkddgKGCEBamWcwrkH3NAMNWgEm8VowNPkZXQVZzJaDcuUASrwbvwp8S4k2AgkLNveH8Ggn8jctzaXaDG",
  "key23": "5V557GAZYTyuRJY21PMCSe17JnRhwXz4qj2NeWnY3ih1RpHXu9yxVrc1nf5xv8bYG8egfe7Brzjg8qvw6BLcRUan",
  "key24": "42SvDZoVUk5w5S4o3XYEwihyrKk7pNZYTs6etZ838F4J7UVNxUTUmHBzZ7uE1P2Bhpq1s2PCCcVsyN1KzBceu53z",
  "key25": "7Dw2jM4Wz6Cgo2vZu6B62vaqBDAHBkjX5CB6hfja3Bjs2XsXwdbUwTCrHkoNTRSsfKiiaZadkbniqnYdgzcnAew",
  "key26": "4SzABD5bw3c6ZGhbUjQdQ76iYweiNF12uDZYC3gDrr3hmJZrLW9WVNdXzPKWQTtp1SBgLfNggfV3XFGdVsonmtiF",
  "key27": "MewJtexNWS41PyQxvFzjtFTzkUBij6viNtPRc1VFvDCmefmnTJxGaytv8Q2JhyqnTjSvD1uW6pPnmjf9X63NjjM",
  "key28": "2ENEHtMXH68mEi4USNg8448zy5SuubXEqVQroWqvfbHtKz2pCtX2B6YHUJb2Sd5ZwUyfyuNLMpyAErMVt4KKQh5B",
  "key29": "4Qcr7wvdoAyYsWMYsCuTmm29XFTtJAv7ni5uok7ugWaNpYRGeyoNho1zjcgZmdpDCJwhKqzok7wNqSDjmhjTzcgD",
  "key30": "2HY16QRANAWXmJAj5oWhfy3GXuxfa7QyTRwLs4Ntaccs1JBjx3FnvVW2priP2NkVQ1ioa7yaLq93omTUsZiSzj2R",
  "key31": "42SgxdGKUUTnSrcervVeSqU5R18y86JBs2fSQbCtArZP3LEddroYzCJK9AjuP7RQovKX4MPvQ5R7MhjGejzfdqHi",
  "key32": "2XN7R9BdsyzZG31w532z5uvxx1gfrC6iCJy41KHtfgm1JU84Aa6FWQxPXYZsH3Vy1buwej98qqK1GjrbKpqf4wuL",
  "key33": "5Xm4N5dfi2WCfeY2fYoMiWpTq9RR3BhD81AEiAUo4KNKFgSsyfr6otFDZx14iQB1HWijYHpqYTmx7LHYaywRN7z4",
  "key34": "5fswUdPqdHwS5d923r6BRJVAKM19CZ6s8cpKP1zzbQciUkgetiChxBUCAzSF9TMUuQdnUT75LCHjexhFfLuramQV",
  "key35": "VmaXcYRV6eWUBg7kRxM3sBw4PFi4n5fceyvFvTWwNnyjoud8dqyz7V6C7j5Zb6ENN2EcJuJb7ebjLRy8dixbPQD",
  "key36": "2nTMYNG3vPRM4Ew13R2wTQVWonrcfzaCbtZent4J6YjqoThNW6nFpqi7S8ycBjh5tnjA9EmBS3wgPB1JQ37wFEA",
  "key37": "3a9FmEDp4gDsknZrVUTmrFW5pX72KLHztt83CCw4PA1jRVuKRoejxcPU7BqtPeNX6X2FKGxTkJsbhXbePHK3UPuZ",
  "key38": "4E5z9im9taoknVvZomPJTeU98ZmLxUHAFLZRgMHyjB561uPmYSZdEjGAL4RDJTmDkgfd6aNT8Up3Vw4zRZzDVfjG",
  "key39": "8eW6EvWQgVvv3YV1LX3AATPxh5tf8mJgkYG6SJ1d28RUcj1j9EaHXdpwGeD5kttSNtwnY9Sp91hRXsMoutPrPKi",
  "key40": "HLpfRBh6HF4gXR9jLKko4EkmDTCcvShuN6DRATa7gbfmtWiAKhqbQE7scTcn2GSy2aUhGNkPm3sSPcsCJi4ssTG",
  "key41": "5eoRMb13hvMLF1paNkqwzgPsTtVRcsF5c3V86J1NCTvyThTF7o2FQgxuE858QfiDrKCAxMWzmu1Z9q1G88rG9poo",
  "key42": "vHLycbHiFsS5JeSr9BpdTLWYWJ5tB64wvCEXaC3gSB72hheTWq1oYxsFQCM3jcPbXAuNA6g2ToAS335nHM3hxRr"
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
