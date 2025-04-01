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
    "3Kdy1rjKU3j4prPBkonUZuVo4wUyNndAW1rdmfmHrLfrdcYAgYSccbMQfpJJk18N5KEHB5wPTtGYnLfhqKWiEu1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXk8At7AJTxmpscELJ6iPmYyqMnF8harPFjqDyPKZnk2UaG13MuXS6aYkVB4Cxqp7K5TLGKEcu4d1L9B9gjVRNv",
  "key1": "cEdq5QodVeyPE9qxpGyKzaKrK81ox361aRUX6RF5RApvqpp54u3GjWyVQ3TnmxFxqEjne8VFR6ye9H8pjPmR1tz",
  "key2": "5bMrGUybw8cV35GVm9neEdeL1Lu2wzK2HSW6gWF4D66pMihupSM7LoQnZeewHV87k4V3572N2AcH7HQXkJRW1y15",
  "key3": "4sUxwXMXywwRGU56FUJk8Txc28HGRD9N3WZYe274gLkR9jUd7nGKP2o47g81DhZjSK3FgUAPgiWf8HZbfNa1WcAg",
  "key4": "5mxDGBAF3bU6TugP76p7bN7ebmUkGYvdynfURHkP3wqoD8vcg3gk1HGddy5oMc6TG6yteuCzSZpy8hGCStBtXjjN",
  "key5": "9EwXci7nuC9UiqjL4RJNchGVUXzThH5tn8JwsEGV7owWwq5PYtWDv31vrVCMPeiuXq5PD8c1fARGkjP1ipZnXae",
  "key6": "5CePP4Rijv8fy6egaRhyshKRXLCmHFLSD34F5WtZDTiMHMgD2vv6dXhHDRK72xqBHNX8n1q6jbWsjhd6pckjui3K",
  "key7": "2upDEupUC5vWahyZp6aZVyLeeE7mGHU22TMKBUP3cNR9QeVi8rSacUYzBMZRmp8VXgbjyBcPdRs3AHQrYjpcUQo",
  "key8": "3xxW1R58RXBT3833Pt5DamKi93QuQyLky3hNMnFZERMewK6hVERPPL5LYQayaE1hAU13vncGips23QRJouxDq5N9",
  "key9": "3SiY1cUnYHkBAdPCZy1PGEyGJKKzShWPUDeh5yUviH2JN4v7CEitDeNTZHvFPRvTXafH1U4XJitcFakCxc5wrdJn",
  "key10": "3iMJu18iW4mh3KzMt8jGE3FKzJhA1LNULNVUzVNiDDyBfav9gprjjxky1g15pdcPXXaF3aZT1JHAec9V3jZ2oJD4",
  "key11": "3dV8TY9VV91hzbCRKikbzZJEPuHsyyBmSYmwJYJFWBX48xn88xtPauwW7Z3WBUZqgEmGY8mRcWVFUNMXATotUyam",
  "key12": "4aEe4fPmyKP4pxu3JPutXt3oPeb6BVW1mUXWR7Y5dyazju52R4B8JcyKfFuqXMXHruranpPmDEjTWaC5XdxAsqhw",
  "key13": "3fGCNxbiAoMFSpFG39SMnpuBFrWYnkrLuNCTXSEgnAN7yZHRLfusEb9NZnj4HZHSZia1F1RxFhJXJRDjzti1TEqt",
  "key14": "5KDYLLFzizpcaybxtjA1A2Dm8MLEu7hWhKehig4YzyFpx7PApTpnrKqDAsgFD5v7VXETM1WDmHUDSJbyydtdq6dP",
  "key15": "4PKUPHbkVNoZ8QVzwGumgDJnJGGGYFcieMreetJgiFnHc7UMznuCW8L9SLtMcshnHpvT7P44zqrDzXghH1gRDedE",
  "key16": "5jhzwmkEykTe9XJea8Evzm6189HgrjQvE5LBtbCcgDC8uPQfScd8X6mhRcCWDZyHQPsZKcohqFB5oQTyqJ7BYZfd",
  "key17": "5McMtZNHQvisTNYaDisWH6oRdVDzpVg6enhquVQ3tn7wAExmNGnALpokZSVhR4WqtVJ1EQZC78g7p97UPwgmLUdf",
  "key18": "3ykgWghUpSG8f9L7crtSbSD8n5rjudG9NGB8m4dCKsM4G6cruTprPP8KJ9aRKDCiJxe7YsC7GFpyRdteFwDHQofs",
  "key19": "3gcnbvsAPHpxDYpMnhiUva4RGYyWmyeaLPzy7AmB6cb7iLuGwsutsMmmihWvfHzjRC7CradGDqeWAfqY34R3RAN7",
  "key20": "Vr7adxfUGkV589saSsxm1qyJCSSY3Y9QkZ2DVmqeoUznP9d1CCNnup2fjAL4ZCXWhFdfTFcfyybTR112ovMJUtw",
  "key21": "vAH58SKsYKKhkw6HyHiUQe85kFD4jF5uDj6yUSNsWFtHKHwApb4EsTYyLF93pLtpvwh5QBztd8W5m3DMagwLzgC",
  "key22": "5NdQzYk5D9cV332WsZcAacmWU5uJyxgeeLcfsKDCcdgPwBf1dPzis2qxw5AEVNM27tfcAXg5wMN7oSSYKYkTkRMK",
  "key23": "599i2pv2SetXi7Vjb36v2YEmQ8MeZD527vckTBcC4779kDk6Rn6rJ6Q7z5vTTucvtGFb6mmRTp8XrvJpn9oBvYXF",
  "key24": "2XG6zTqzZbdRgDhdWnAKtBahyw4kFWEmZ9Kzrxdw3jz7Krj8dxrvvw2dXgfsctShRdPuxV37FFxEKPyESsXkuzFP",
  "key25": "6j7XBAgYgBYDkNpQCt1KkoyG6puyYh6tJrsgGZ1cz1Mu4UVLaWMhSiDxf1JNTbeHVYdaawNx9CczJkpTJCSnCwt",
  "key26": "uMki9FM9yq1dUMCfCyZCGJKX1SZ1znJAYbLfG2yPs92r7ygCPfGWCR61ELVXGDMhsdXLunNNTLuEf4aoTNsEAzQ",
  "key27": "3acMjxeU83keQe1f4r2ENdS2biZQ4BzmZcDzWNSsgXVZ1w7eNA2vWoDZvXbCJxLjDi5UyfjQ6EZUfVSgU7kK2xCC",
  "key28": "5mCJ6zZFZJGS8vdiUuDEPcv6rWEnLR3g5L4y7knDv4aRuAFLAHmDFigGNgPASPBQ2KGE3rMbvZK6kTAxaWeCf5PK",
  "key29": "3qyvWap8Pbh1ZBwNtrdSDe99HQ847iLkgD6f7nzi5ZSJAUBixPXaS6jxhzCs1QZH6Cz4N3NhXKcpcNqvTLA7GFUm",
  "key30": "2zpAVtBAzCYQskibWUNayRdbqrirE3sfq21iSU5epkfEw7jJ5vHJnC7tB4YwbMDvTNGjeKZZVKz8SMkYFtqPqnDn",
  "key31": "3uStzGX3fhvv34DDtJKTC9sH9Vb7YxoxAmjqt58qgWDAtXALSjsRrYcS3Q4Y4t2JWoubtw2DJRLFynw7jkJzH8zD"
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
