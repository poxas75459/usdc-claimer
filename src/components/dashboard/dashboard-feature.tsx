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
    "3tYVcNW5ULnTqEwjjrkt82XNWqAoscZHN7snniGWG3r8FYPApenvtAGTwjYy2qEgw25A4NgqAdZDuFQDH8WD37zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2uy4vCDLjb8nxBCbs5LZoSCkgLB5MruBmXC8kdqo4WJGVK2bFn2zRUz3FGk3bFS2TapvPeFxNvqJxVyeHArWo5",
  "key1": "4LcZvrggxEvMYTbo1LMJ9swahsLXNiMABoQa5rVXV3yZ6UCa84BfbLggS6FQ2KDy355cjcEity2jGpwTE22toJje",
  "key2": "5biJTAbThi87jEfzbCjsLjXpYnWiYBHpWNdvQ3rRd2L8BTHWX9wvR3QV36KoogXeCszKwXXj1jMVjKE5DFjp7HfN",
  "key3": "4xak7b5kJxesDQVEDq4icKr5xDmH5ukx2xKgJ6s3yvSKhoPesYyPmFL5s7FyQ2zpGrGNEMZzhNDBo5oz9dJUSMiT",
  "key4": "2zMecsRSNK7jcHY115VhSXPCj5keDEQEJLys2q3CobepicFnNPq9jDxRrzcTshx95ryiKWmcb7qm3sUJD8AmJMRQ",
  "key5": "39VofSAU6TMfwHueUE2nRCKu8Tb9kU3SqSn7YuwMgtgBbEoJKgQJtCDZopFgSiG259wCCLy4iB9grQV5Jh38iCJN",
  "key6": "65eTpvGtgttkc7ghqEsTLGxsBerMqwaKpVU34tLAwCqbFq7WYqBxXaPJqiqSWYgJE2dqnvaMbnj8mfzQvZdSr5JN",
  "key7": "2cLyqaBXftYjbrpPKxQ7kGKmpcbxwp9nTwriuDC3YrgV8e2AZ762WizQbkkuPFwd9N7oRf8UefbmTz1t6PyUoqKS",
  "key8": "4rDxJQbMBcLzpmTG7QyCkQRT86qXKv4BKsRdqTHheaHM8KWKYTWuJuJcBT6fyairfF7wGh5gknV6xUJYqciNVjz7",
  "key9": "4VTDaa2vLN5qq5Y79WSP66dbugFwMRm2oyViNEEByUFPdcmgPGvrbRJsAN4b38qupCxUQuKCFwWpPbRgfswAv6um",
  "key10": "48MhYNEzgmYCYTjCq3C4wyzqBrVStz61a1TihK5GYk1tuVFcDJMRAQYJVQjmDzdiGYN5biMhQtVJ4UV5EJ41woW3",
  "key11": "4vyvHpikGfa7MZc1HNWMKWZ2ZTD6p8STMEmEs4wSqZZiTQqKuEzYcVyxxpVw7reVeM7W9uabJTRzkqDpFJ2uxcLk",
  "key12": "3zrGqGfBPSHkTuVtiGTBiKd7m2boaaYiQiSydSxTYG6aAmLbSUT6rvaSgdtdDFqj3MVwYToXi52p6uLh6Nr5UbcB",
  "key13": "paDJWuZuCxV6sHNo1siUvDXyDZkVQe6S8nhT7sisWXV8Zo5kUJxUR1xwD3hGX1hQ24aLRYdV1CuA1A4wR5uWJz2",
  "key14": "4QymM8d855fKpXsTkZnye1VV4FggHwrVXuExstmgkZFmVhtVRDS5yGkCChenGr9JvFKi99rmnAPeU7q6ULfABRP6",
  "key15": "4fuUeYX15hzE39YkfdF7ZCWUzDuePbTGkdKgpZgr4hcbQkpokJvsJsjNsr3owMLSJakkULE4TSfzrXZ9ExvJSgov",
  "key16": "4yr28EZC1mxMWszUQtKRvYY4s2M85JNXVGBoRXBhFsF2awqaJSbjBNvwwfSdnw2ChQcv8kRJiVn1tDKamCr3ghGf",
  "key17": "5m8h4QN2BxXnqNJt9DQ1g3WoeiQrhHb4NheGqjb5CvvLPRvGBhqRSZrSjAQsfR3YEwfVJZLum9PcLdo8kjJi9Qd9",
  "key18": "4fqdjb1GwCXb1oezeaaphf5yWhppgreDx7yft6o3zBwNAmpYucpJFSnvoiQGRq5HatqLYHy9crpcotGqS6eBxud7",
  "key19": "2QMuzdKS8b6AgN8vjR38KkfaUWS4fsi1jo9M9B9KqnFYBY8aqQ6EjQFJEBWcFYeoKgVU8KrE8MJR3hjQCsxDD54s",
  "key20": "4KFVU1wBte2JqjhZbVmR2SMk9uDArQgGt4ECDYtx3bh3vTUvg7ccHzpQ52i3HLZwGerZmhFkFwXE8bP5Xrei7RBm",
  "key21": "6m7Mo5t9yyijF5Yx7tAVDNTqPvG1UaPa4wBvp2stq4eKweGv9J9PZYwtoick7UXAPbvrYGc828AbBzj7x8anCKk",
  "key22": "2eMgP29FvD1YQXAFDrHddHfR1v7g9wVD2DsCe2M3ogjUsToosdjcznC47wGVr3BkwKM9uQ1v186VGToFNwwtV4RK",
  "key23": "66fxyrTcAwMV4eDFbPtpVvicnpcAeWc9CheGwgLwjDuVhNQ61i4fJwVY25Q4wQvfeFQxxJ6xw6KPw7RGn5v343RD",
  "key24": "3W96WVLmNLuAAPfddkywu4UiBoVdir2yGMhVy3pDPpRfPrGfoXjZ8S6YfKD4HipEqyWa8Pzxr4TraqEpg2DWbbMB",
  "key25": "2NRGdtNoHRFwgsQg4j8MfRj1GoydXFnQjMijVAbvHcV4rg9BJX3zYj4xTUNez9TFzFSSProSicaDcbZX8p3TZaBY",
  "key26": "4GbjKPyQPXmSxzemjTRmHpBBCGB1Vajy9UnTUX8owetYwGmtbaaKfq6SmvSdoW3VFWb47RXLSoMfGCBMP1UgB2FG",
  "key27": "2Kwpro2XDvVGocWRgpvNwujMv5hyrtFsuodPsY3kqADWSkrHTda2sQsSHwSwpCsfd2mJwkVm4mS119hYVzDCUoRT",
  "key28": "3zR6XL6PiCVcoc2RMTsQXpDmXa4doyyGV23EtK6zAZPvSEyeeLPCKdsfMRufnggnr4NNiDtE2NES3JXnBordMRJe",
  "key29": "4XK6cmtr4vyXaqFsGtWQZahSC95qJXTS3gJFqCdh3USdH4Lt2DimucJaFuCKhA9JKcBEMcXNHbDpDimEZxzUxPUM",
  "key30": "2Pucd83j5iJHcu5iwVeowQXWzo49abswbMuPQNFQ2SdwbrFYiW3bYe6Gz3m8fCyNiVAhs7GQUEp7mUmpBwniwKzb",
  "key31": "4gMaybHoeDWuk5gn5PMdcZo2qjSeUHLo46LL9ej2CE8tESTutmyjHS4WAtx2khEk6jovufp27KMCSxkHpUFhFdPu",
  "key32": "3mzgnNsrrG7y2KG1M9GgerS7RmsbP3fjVJ3qWw82bFwKZfjkiSMGpB4jFYLjPTnewvJrUr63Rs5VcGGbF4FPdZLz",
  "key33": "4DRHF6TwS17RpZqTuq9JrQ9oQipuBnrtM18kVi4KhqLAd68egxUTrqUks1LSMkCGccuLKU2C9FbXpTm6VD2MyKj",
  "key34": "3PqbvPLvAYLBUvP9WMWABcq4AqUiJBVAUreEzUrRgtLBd3q6eD538fc9fCb5xqRj7xRDTvnGwMro4Ypp9rbKxkiq",
  "key35": "5v8EmbhHy6K2JeLU9Y7xHLJG7C64thUpmEv2PkW1Ps5D8xv47uMpSjbzs53PmFZnnpo7hDwGEAZsimKow1sBxMUE",
  "key36": "3UqRHR1vQBw1qaJqqKd4AcFdN56ijuwvHNEeY1acPVBcCdZPyJ952sJgkTnfKRoZBo3k9tuzwEYrmyiR3U9ojLCh"
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
