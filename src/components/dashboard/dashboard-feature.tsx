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
    "4nHiZRjPdWfd6mhdXYZvsFyFVcoZPvyrNuuD3Wo4ENEg6XDwMFaw2JPgg4d6sxrr4TZPqPx1MFEVWwfoD6nZcSS"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2ERinUnFNMZjWgZmHQjhypa2HusqEC31TPP83DjRsrTUQPZcsFvGCoWBtwZdzoneYG8eAdhsRPMZtPYABFrNycb7",
  "decoyKey1": "2rYbv42Bu1jtnAYFKjsrDRG7zSbXe4P13GVijtGZESmA1aj4k2HtmGVvkH6bv27UJhNjwj1NQrVpqCUvvU5FzSod",
  "decoyKey2": "2yFzAgH1733TfujTuNX8TNTfThUdFP5SzNZAEZnrr5ckhWucMwbQBgJiemYTntTj4J9kdT1haCgpXm1cx575t5Xs",
  "decoyKey3": "24RZAYQrZJcFSC9rMsiT5YtEWymvonTdXYUbvgwjf5cNPZrENB6e2Ym2quSUkStump8yHdvbPyH4Z1TFthLDc6LM",
  "decoyKey4": "3ViPe1L3Q5CmgqXSWc5VTfZh3uHBevBPgeouJ6nKm6PBvWGd1K1NgbPbsD8h54XWeoFzzqxezhuaxqLtgTHkzrr6",
  "decoyKey5": "3rZLPraxazK4x7btmzGoPmwVQ4S9SwUT9JkKehEPXcDcrgdMjxwZv2WdoerX8j15mi7RBocHcWsBdBgZMxf31FKQ",
  "decoyKey6": "2xi63CYGP8GUM2RLRUxv1CPiqxXccmGUSgzkqVdse1XsU6m9Mxw84JrcwqAh2MsBaH8E1zSibnkzKsFKtH9RFo4A",
  "decoyKey7": "4oWNN5wddgiaAnvQi27xRuapzEr3RP8Tpvp3D9RYM7sSBUzG8puFtZz8GyxNkA5rzPxMNN1Xr9rUHJQqzyBjtfDN",
  "decoyKey8": "2Z8Xm6T4WEPcbE99uZymRhWp7nNUNmyV9excYurW81VHXb4eyYviSCM9ddTGxHoDgiX5ZkCJ7mCiKaZjvza6MTLY",
  "decoyKey9": "49NAGSPuCskbCQjrNghwksA9Jqt6ezRShDsjxhYThnYxZBC2eCzyU19pAZAUaCWQsUNfm6GtZsFzyYJh4nbWDRzK",
  "decoyKey10": "9kDab9rC2ijW4NVy4sgYfk94zXPmEiqR5kHAaWY2awjwLtugjLxbXrNKYYLcKV8Ho98TiT1oWWf5sdLzgLiz3zV",
  "decoyKey11": "5voMzZ9q4nN3fEA8eYFKAtEMJN3UKA2DYBSHcaA5Bu4ryJt2VvJ3YirSDKThwARtzos7hBMQoAcUD2trxKmrf3LC",
  "decoyKey12": "35H67cU7ybxyzWY4LsFDgCaqHqsdkx9uLAayxwtCEuMonk6QmvNbTUZ4DxznZpHyuwmJQXWvHdk7v59M4ewQYezL",
  "decoyKey13": "5gHNhqkyJutdNfJmJDoDFmHvgS4W5gsA5SMTa31tc8SJzt2PdHmt48zuY5eyUuhkSFHpHvbjJ3FGbKR6s2VUYjyK",
  "decoyKey14": "4zngp3HVeP5P8b8vc5kH3dEYQm5yD4zVSp1WxA3Xmxe72dJoxnoE3W1K3fSYZtMU8RvpyKEKmqSSMQTtWToL5R4K",
  "decoyKey15": "4yFKmz7zcPNJEfoEFH78x8kz7Vv8C7JtKfzqQvqCAeewmbfYbbZswkSfVPaMZMi9SXmiJdyMD3BebzyiE9SDW4vT",
  "decoyKey16": "2kK4FBDX3Xz4qbTAqLPgnfA2t8Co7cyQtpDAXiXX2WzERZzyFVR92x5KcU3yp6WKjfxEJTTymdHtJyGyYS33xUPk",
  "decoyKey17": "4r8HHfbUXY3UZvKMWmmZMcnmCdbXrYzy5sq4WwNH6L4Xx7kLhqXLd6gDVY2C2xUdEkcRadmSosT1TQGPwqVx2nnR",
  "decoyKey18": "DZ7En7ZjddjMzof7UQ98oc3uAhGVMFGepLVUykm2sJjXjwefeFcaGiDsJnftqe3wxh6KSe3j4VgR18jpsZY9LGS",
  "decoyKey19": "bJjob9Ct52eCBH9yey4boP8vNWoRLeSnnJXpdWSeF6XResJEPHfg4RcNMwKtnmdjM4sE7Yp2JDJLXhqhneZZBJT",
  "decoyKey20": "3LAyuTtmypXVhybYTKGFvTUwQ2u1vzqpQRJDyuJDcvAQ8ZHKzQWumV2UrpYcZE6GCMzAHFT9yXWWi4QvRQViaR5y",
  "decoyKey21": "sq7YGgM9UGXouBDJ2Dbf2rsXwfxsR2BM5hn9pg3RhxSpgDT8kBQS3oYiPLVnGDoet8MTB8oxyZ34r8UVyQ2sUZ5",
  "decoyKey22": "3tDZZ5TUm1wmV67HqgrCPQi3z9BNXn7HEsowcQvPw4XXjExFEdwDhFdg6yFTNyUt8kpkFiVyWqCP3Qu6qfPt1AV2",
  "decoyKey23": "4CELEUeZE25g68V6QqDMCeDwsyHsMMAsgqUPAP79Q4FRmySnX923iTMEM6sfpjxpLbWggcsZvCANq3QyZ9iLEiRf",
  "decoyKey24": "bdwqejDvZivP2j63V31oBNG9jUCTEbZQZ7Pr3tn6iAaaFNhbGHXcZiaxXuHTJ3KaH33Gx6BzdMeXbT8n5DxusZ2",
  "decoyKey25": "E59g6sjgs2FQtWVQtGwWnEME1JMTA47FLfkPszeurKns7M2qA93JbUkzQUdb7yQAnp6Rra5c7UWhBNC8RBXVX8j",
  "decoyKey26": "5YZHpvJXhLCSJBiZgQtAkN16LsKEGgwCsvTTxyPQExP9dYurUqSt1AVhi72Lc67LR5LqnYFpopPDYT4oVAsHDrq6",
  "decoyKey27": "3vhWCBK3P7ZQSwwVUPxdjHAPXDXvUFqPVfHAo7FVkmXU3Qt5vTPnBsduyXrrTp7Db6WRNMYp528QEtw3ssGjhSw9",
  "decoyKey28": "2m9ucECvQ3JR1scMX8wcD92y31ZjgWQAjronpcBLn519xGFduHfq8SMqBFKhccDdfihAbY1oHdYzzQ9pq7YM49xg",
  "decoyKey29": "5NdGECgWqr82TALoSk13vNwcotSmksufQUZw94z8Wi26ixJHkfSn49RkJ2PfRigsfHbSC4wSA4FcLdnyAenDtvMN",
  "decoyKey30": "4UDPXtcJyYDm1VszDXnrP43jTcqqoHrmgUjRvUj1Rm43mKqTopjGnzcAhLgrP2mUFRfuEg3NJMKuCuwbLEWjaMQe",
  "decoyKey31": "4eTKsGsjnXWoDU6mgiR5r7ibkWPdVDkVfS1VL5YbApJgqUuDqXZ8e35rGUPcLt4VzVjFKs4385mb5sf8W45Gvzxe",
  "decoyKey32": "qhhLmZD3f1HVA8vC7UzW14q9kzMPzmKctG1wUiWWgqhx7obAZXd58FvfgDUVBSo3k3mNPK2CQwgEniwhVyqMRnN",
  "decoyKey33": "5nMEzfeZEGP28CNfV2U7zY7Nb7iVuoFxX9ydbNo99ALX1LXnXTRTPexXxjr3mhLmQzu56VVBWKRT4w2Y6CXzH7ex",
  "decoyKey34": "ZdpAvw2oxDVqW56dLBgYBWMm49AFCML5wq1XdBEk2G5wJw7eSzXBByw2JLPbVSERnQj3YtrfMeMHybcjc4SzWSZ",
  "decoyKey35": "5FHc3j1SfCtHsw69GLFLvzaEHmZJrUbpGhJN9GgCVo42LNWYQ9avGAwwqAAQsZcwQ3ukWt1UXsa3vKpuiKUZe6Ai",
  "decoyKey36": "6ToLibAYwjWD5xADrZFjegG4f3rCyP9AN53BL8i4apUwCCHmo921NAGAPWrGNMcW6i8tZPXRc8R1yacbzvvZfhE",
  "decoyKey37": "4eUs4nbK3mkE8QWSEuVHSCSB7r1GLayBME4L1ZMGMv1xoAgpFa3hvmwcMUcmHx8coJGWgFViRfZCWtv72dkoRQkE",
  "decoyKey38": "5cEyHBYd8MYghjhTeSLUsdarjUVMmCKkCwRLdqcidXqDjpZWk38KjdrzdpZvRhhM446EppTEFXnjc6xcrVEGqPyV",
  "decoyKey39": "5J4QE6fDNzvomkVT16WjnSVERABZZFKiwYrUgBJ3mnRoz6435hUr8CVGrXkGxwh7cTWnurA8uh9is2CRDAHWtKuG",
  "decoyKey40": "32hrPPa3QudEmF96dv5J5NWjafUFADEKSHhjs9prNyop99oeS99W2wsEyqX6meYKAkdLjbLxRSwJ7LMx4FS7jbGE",
  "decoyKey41": "3uVcijnJeCo6AYBvoykaaXDF9Puvgvw7Z89ELudB2ytvJBrE8AC3c7sMKjx9ZGot1f1QoxVaESxeMTqshZmfPh19",
  "decoyKey42": "2ztWcMK3a9Y9oLEvjTiNsnoK3R33m3kv8YWEek96NJJCvz5bxqh2YjJN5UMFvxyfRftowqzuXoeAc3274JLg2Fn7",
  "decoyKey43": "4q6aP7mZo8cusbBp8oDopMvbPML2pjQrjrDVHLeaRCaHSsNV7zuTo5GdqLRVXki2hV1vN4Weu26NonE8wJy9Dnuu",
  "decoyKey44": "4hbgbL3C7SK4LvsTL4FaGpLfDewXXPVRAExJPUqUcqvHtD8wtTm3BJXhC9q8yShLTrd9ABDyyf7VYMs1r65fx9ep",
  "decoyKey45": "SZmt4t6ZFXQHoG1LKwSHhvntASD54qV5a8QV7fHe2nsdAzQKhCARLPYfe4G5T58d71ptpdddMhtCLTKbzkBQBRY",
  "decoyKey46": "5KUjw9zaem2u2YQ5aTLFrdpKKAddP9sgTcsqQdBNUGKsm81n2Fahq4F5ypKm6d5bQSQdqNNPiwQt5EmTvQQ3NdBE"
};
// DECOY_KEYS_END
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