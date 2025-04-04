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
    "35VsVBFL3Q9LKq1jQ6nUkmu5hof7Y1Q8jJRuZgZ6MoCxWpBbnU8mzu6eoyqyB5ndqnxUs6L6naGLZWqVp1HER9Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn9jmbTc6GwhQrTJzqD9BpXzcEfew7G5y48ob1sFbNXyeHSb6NRTe3cPjYyzZMVyUMvKp4eSSULPd93xyJiRado",
  "key1": "2UR94CJhCnXDvhutdVMWxzc1dChQm5xYcTi7Tg6NjtLK1B7zYBr3ZMPogx71EfKTherLupQTpt98NMcUaUTmG5gi",
  "key2": "3TzhSjE8cfUmBh2kft24gmKMjzbgK1RZsPmA4QjN3xz9oASyDin7TifimhvKGkufqPL6MFXH9WZNCAebCowB16Qo",
  "key3": "5uNS4M8uyaekDoACRnfXYzSFZpZfrvJHWgoK9u2xhF6fBQqYzP6Msm1dVD2kEuLZxPr6pQ7eCmeVjuUvPVAvAbHS",
  "key4": "p9VJL7ABWuzTTj5aQLyCQqjA1bzMLEghYbeRA1eMpREGxwpEu9xjefaB6hwAc1vamT6hADGJRkMUSB7gZyoRwFx",
  "key5": "4coH27ToXwyU4f5G8mLs6nb6tQU8xWV5gLX2mVJtZUtL9MGArJQ2L55bCCb53QX4j7TxjSHYx8WqDkPzsBhrTpg",
  "key6": "5Zd8ew7mZEMZDqvUnmRitqgwtsu7pR9xAmoTVobESizJ4rbw8skQmsLd7jLr3GFRC9Ls5tKuEaK5i6wnyzYSsJcT",
  "key7": "32Stfa6YM6dBA7C2rTWARXsUEyWvfMGRd8osnbZP4BsdWXDHkMg5msJcfxZ2St4kQMBwid6nUqtq7K8FaAACTVKH",
  "key8": "5z18KXtmNL5HXuz7BxZqShEm2p99T1T6koe6d8NMsNJj8LNycusRtNoTdr8hBFVqC9kXfaWiPxRsCwC9QNFDy97F",
  "key9": "3H5q13BDuUbQggm4i4BsPP9zV6i3nr4FGurmaxNGXLVQuhFLngwCDZKGTEiMd7fxHF8AYSBeV9wurQa2ShqXpjRF",
  "key10": "4pjDaLnQiwzeWHGVFUybgz4VVmWhZW8WLHCVGv1TTLwKNyBL9xMSZditnW8mmAkmWZVNBLxN2JeksPMSg39gN9mB",
  "key11": "2SJfw4JkTBAuiJZjzQS1DEM7i8CfRPeHmbuvfYLAz7WDhC48ZS2DrKoRQEP9QtvdVMnSyzWeUo5cajkbJTXAorqG",
  "key12": "56LweiZCKvysgDe73CZeJhbqsn9mErKABkcmUiL9s5QeMqMjhoTMrsj44psqTPknrgSGfkaHNqR4CvwKd3ELiE6b",
  "key13": "3Fg88DhbcsFjtHh7EMCq6MNVXfoAHkVtyH2Z1uHzT4SQBphBXt2h6utzpxDCaSVt4UFKTPMeVXqXZJN6amKVF6sc",
  "key14": "2dBgXvPKB94Ej59uvSTKjxSNnxxDx9ZNoZYXSeLPUaQt9qHfAYAibaTeLA51dW45CnJnXMbVUKxbk9WMr45eXp6x",
  "key15": "5ZffekVGFshVSJcGrMwgFqDy51272EWpF8um8oQKrthteJVruuxMMKpYyPEsm3yr8CNN6NBbppNddqukXXusm1S2",
  "key16": "3seZ3wtaZ6kk6VeAixtghQ6MTQZAhJQsKNMJvDHyt8ZTXyycwEVdrEVeA34xa4seHWnXgZh11VwRrHonNYZcb9ZT",
  "key17": "3E8gyAqA3jXPGW6bEVJpt1P31CghxWi9hHMuJkv462akQuXG67fHfR5AhgNK7Z6kGNFEPJZ8xMb9XfhpttRYgv9Q",
  "key18": "3X6S5xRtm6Bi9w5CBf9hjszD9iwqZVhrsBSLxCimCoXemQeFVbuu8kVAfUmuNV85ANHjUug1und8eahxKwx38LoZ",
  "key19": "5mvpDNhMDWgiNKDXuSYBM5L9rGd3qyH4d6Tt2U8PHqHuTG3yWpYFgE9oUSALb88ky5NHDiKih82SL5TEqKXZCyed",
  "key20": "5u2H93mMkzto6pxTvySK6TBv3baovy81VWokv6qKpxtGzDbg4EtJ1Me7iq4o9oy2oAzGQQJRp1rQEQNbvGPv9yP3",
  "key21": "GhPpZBMSDZajj3RbisYtZAvDaJEN3NCo68nuyZTqkbBbgms3FVpADAnSddZQbAcQiAZomPHzfJCCapffJQvvdjh",
  "key22": "5xFx6W5nCiq68bdpB89vXMtKiZYwL4rq22Y8ss6xHSW5h48T74WyH1UYBcSUQ4LaEqjc6UYe696QSVud4q4hFGYP",
  "key23": "5v7bCfihtTXSWnVoN1vpVopfwsUnTwG2rq4NW1FmwfcyNCNDZGaaThyXEYPUbshBs5SACM9t8GMjspriDu8R5W2b",
  "key24": "PxZAMTDSQVJauKrSLpbGW61yCi5zJ2gdDTDK7PDAfzUprsWQb2SbRZXiJxwnWH4obntr96VjjbGDwa9s7WrDaeL",
  "key25": "41v8XFJM9TTTX6QMTqgUcFJhqoVTUpaCwwvF6HVGNzCLtyDHUdiPW3fTkxMPvwGyWxzHDjH68QPbC121RBkZmXJ9",
  "key26": "24FZCBbfp7z7Uzk1yzhjmyYKNxme1CMrb9wRLGFrCQ4voSfxDC4sKRwrQfUmu26xQAWNzjsitYynpaZz8CLwXytV",
  "key27": "55pp2yze2Y7FarCRvNDWtrQbSu3SW9UMP8Yuuw1zbVm7QTHgJJjnqsGh9sXrgmwve4gnQQeyfisREeYx9WHVAgiE",
  "key28": "3SbLEiQWgYAhxkrSzwufmoY3UwNCsMJT4m9rFqdgsuAxTixyaTxSPcPMQg5DAEMDUjQKk2PmkZ5hrZpZ3a51cjjy",
  "key29": "4hgMH7j6nGfocRfqybECpBCUwrje87xg1dRnHBMWfaCgUNcgNyMVLB52hYTu3jaxwyTfCRwzGNhqi92QXXmRpkez",
  "key30": "3gg6rTBvtZG2rEDgumh6x3LhcDEPxbGwa6aV2KumAtwdNkSCtLv8VgswAohdCpkoqAvq7KiTfnSrduREUeDnPf2h",
  "key31": "37ZozsfsmR6YvvaiP6nvsRAgdiTnZCGkntnnJ8PhKGui63o1dNyhfTE9ozGLAV7ZtZvvzmLcShKGhuPPvsWKjWaF",
  "key32": "ADLkRQm7Qu7WoYqCekBPFuzTXpymS5grEKmhuX6dc5ALjKhTvurEeZWm2WmMMyGikRURQbEWdSvySsyJ8sNkMhH"
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
