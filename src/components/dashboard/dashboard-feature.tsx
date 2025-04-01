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
    "2DtUCQ8ScScXR7xNcFuJJUDjeL3kpMwddtpMeBbLHkzH3UY8ans346o9m7eqFZh4Fte2xboPed7pP261mznLmU5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFWndDQ5r9vD1QeFdrg6vKq5uHxrPaLdUWG7a8jA1Eh3LH7qrHfJPMBFf3WNyfxp3rHvYBidTZQpjQ3X7cGgqy1",
  "key1": "3aNKZHghwpzybwnKADzH4DXAYaVdaGUHZKW9GLh1mrSyFumiBVHwpTEh3C8wHS2CDyw8Gb3NiVus9ZEAPmUUxrGX",
  "key2": "5D1QCSFxbNngMmZ23XtKBS4MQHi4L6wEQTP7nU3TaFWtuYMwCdYNCdEDci5viKynHnehk2V3N8hNCoFbj2q2LR7S",
  "key3": "3xAtNmekx2WqWSJ1KiiASha3yX1sm7gpyeN3wLVwTLSLakJ4nfwCsf8DHJwx9CwFABw5jvHKmQdSTepg7VsPeJrq",
  "key4": "4JjafCKjeAZa18PHoT2fHYZi4VkUz7QSpMSMsyxN3DjmXW5dQVhMQvSeQwWa4FmM8Xxa5YBA8uVpzxbQkQZLAb2F",
  "key5": "3HMyV42EUrKAW7Tv7CSYyvCH88mQE7qCaiR8QC1YY7hv95zpDCfUu3M36BFxXAxn5hpEXMdGZyXQg9FosoEoNAG7",
  "key6": "36hVxLTsjQ4Y3kL89V2bBTYrmUyTxjPsZFGFQp7iD15CayXog9i7ZwB1tWWhFZ89csCY8eNNhufQq56WZ29VJbyb",
  "key7": "45quhPasZMzzWg9DzVDXUCgWwav3TFG9bm2r83KsF6uM55xHSKTe27jAY8YkSGqy8yXV9ciR8FedPFsWzJPdUVyd",
  "key8": "3xQ9nF3mRARjY1wsBbypYF1VPFk4Dg2ipi4RME8ky3SNpNYHdnYMSN5Jb8ePfsGUTPfgqv5eTddvHNfzvtKmeLVV",
  "key9": "2YwvaijC5Cb6LS5a2ZDUuHVsga7ctf3R5uuyYoDWkSeUopzAg4toDjP3y6E3VPpT3Q2BYjf75imNGACiHEn2GnW2",
  "key10": "66CY2AJN4cf61kt5avYpM43VurEmAS96q2VbY4dcaejEdMdEayHZdYUD6qPqr8edxTZBTBPJ8tPs7Fd5AkxzX3cT",
  "key11": "2ZfiTHGkU4gtAzbotvHhe6DghNo7LUrqJtqMRkqQ6xAfM8DuT5hmVf2hpW5hurJWXsuTRCWxVzhZf1jmoaFbzhtJ",
  "key12": "oQUS3nh95LoVGnEfS6vNBVKieZwmoj7Y1zc5EbZDCpjLi5AyuAz1qJ3BZ56ed58rM28Ds8bxsLcASTnSYCAxwE3",
  "key13": "5jPgRJgxSdex1ABS4aoBDmzkRUPguJchTRTohwG7ZUu3v17aesAz72deoSLfSrBHcVuhGMPeYKmzHHYqgXHVPKtZ",
  "key14": "43KW8X3UbzkecHihNk3VpdPJshUre59faCHa93HAPeawKjDra3pQyQyVvqTKtvKNNAJWF3G6UXTmhaRPXbsZg1PK",
  "key15": "66hSfAg4WioeFJ2optvmXuV7JZA3D5mA2HRdDvi4cBNSqcCQHNpShch5wBCHrzqd8sCKP2Rj76QeeFQTGnDmzDqF",
  "key16": "24YAqv8TKrkpK79yewLXtarDtRtcMwcoXZdieRku5pidrBWUy5DhvsSyTCEq13Qn5y7f1GNNMGvvtGm5ac8xBSyQ",
  "key17": "3fLDe78JVZ3SJgneLdugovxVEpZZh9iBtnXsb9sQ3zL6xAKJ4RcLfgnAn63XrC66VKyFmrZ7whNZpizduVNNRjDU",
  "key18": "5yeoHuf9nS7CvJWSn1y773njwvtoTTE4GD7jXcNi9osco6e75csJEQR3rYXNK22ZCx2hnViJZj3XQgG8SFpRvhoH",
  "key19": "4EhSEKywSBCGHwCz7AFTahefWtcPizs2GSUPJArCYe8aJUV56D12ZwfNvAff3Z7fuupCSFKYbREpU2zoH45qLBqp",
  "key20": "3MHcYn4naTY2tbfSAAx1MFovw6mjRTMaxf91MhqVrVQe1g34Wrcdv7zMoeGfGgYjonKmVByjs6sD5ZKmiyfj2pen",
  "key21": "2vUbgvWrJLpSzAdSvLCxLngdj1anBYvty7rLaFbvpXewoVMnevX7TNnNLbF3TCVWHsYokdvQXDXCWmLRjnTcPnUE",
  "key22": "2UsYtqFmDSQd1iAiwEaubDgkzf2ZVHaCjxX4RipoFk9i2xa7NxzSFcUAoj9rqwJvtCRQ6UjRq47TPLJ5Y7G2UvRL",
  "key23": "4MUAErKu9ENFEdSQ8ejV5ZDCMNkizPZvwmUBrcg3VZ9DhQi8kur9fjxScfr6USni8jZgHnkPxntDRPwGrDNkr4nj",
  "key24": "4cd6u1rBn67D3VvEo9fX2w1XhtzT3nE8iE6nutyJZjSjKe9FfRdSrGKtDHbFbm1jbfnzzgKGH8gtt5MgnC8vhPDN",
  "key25": "nwGUAeEAMx2zpAzLVCdVrK2Mkerucomnbvop2WKHaifqzFg7T5GwaWPjoM9N4sHUfez5XgfTqAXZuS8zvHkue2z",
  "key26": "3YEkbPGCA3GMtmFxQtyZnZzv218DJCFcWgPFzY7ZbcBoFj4PCi77NYBdCGtMfRBmsm7EWXaLqE32ptbYX38hq2vf",
  "key27": "5CsohzT5xLt3drP3YJnMXSTqCzuXam78WLpW8QihXhXTP3yGwtM9U8Hccg4eYMvg3AR6rd1eDts6iySomEcUWQTR",
  "key28": "5GqJvv3pYMaVekmWLuGx92NktBpUhsV8x6paSPa6e3q7YXkb6anmoL8r5wyPhGpyLnXj9v1YjXiJiZwiWwMG2gq7"
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
