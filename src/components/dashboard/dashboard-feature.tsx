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
    "4Xb4EQJN48gKL7RMdp8K24KcAbaouNSwYknAosoS8YN4H5qj3wdbD7EmAgG2k7wdQGJoECENKHHqR7zgLGU1fDuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CQQS6yE2f63QDJFekdjPD7JadnZV18T6wyp6KxzMF1fXeRCiLdvwBv1od3C45ZYR9Qmot4ug1oNWJZXF4ejGv6",
  "key1": "5HDSC3PVbZWxuSAEJcUpS9ZwQQjUehsjCBaZnaPeNXLpghaPT8JRbLBsRUaWvGJHk3fde3DsnRixVsMKCg8AnrLS",
  "key2": "5P1y7FwawzK3pZfJTYRJary4vo3e4qsh6uk35TCt2ipnYNjzV35GW63oiyCpyVDVLUqADMPox1CujF8qyEM678KE",
  "key3": "2KqUN14wXEAxyXxiXtvpyZUi7i7fEFeAQvU1T5H4FZhpa3jHWSttcDbqvzVgsy8MzGwRpxitDnvb8q2uhHNKTzmp",
  "key4": "3nHCC1ENTTSofgY1hSt3G9NiirrVxyRLzH9zdha4FDHDgE29LNivZ6u9zBFu3SH8iXQPk8F2R3fvkAe9czdaQCLT",
  "key5": "4piZQwLJrj4GNkjMBMW28KuAUjgoMCGvNsk85VEJTYQKAtNiFRxeWMvgNfgTdPrSYmLeGS8YUBUgJdm2HqRTcJvs",
  "key6": "5rWBrPj3276mMhJPtoXspn44D4dvhiaBw7SFEg17qfba3DWfrQJMMgjGHfP4e3BUdpnjECjtpUao9dXgqJe27zDE",
  "key7": "Jmi6YvF3T6KFr34VQSVWsiEL3R1iQ1WF7GNariLD6Q61v7LB5DR5sLN6t3Pd9iKmE8oD4ATeoQwnUAgH6BstcKX",
  "key8": "H5RczfHxwsTS7fB1WYabStjGx3GXAK2G2WruZFRdLHGiugKMfwWmaN4KS9fRH2yg2tZHsDmYL6RFyY3PRv2MWNS",
  "key9": "GXvZgqrF6Jgax8akj88DA9H4UiuYJYfpqzgoD66Thrm7X7kY87nEMFtzTfHoz6tfZ3NCHT7fkEezwcoDfHV9haf",
  "key10": "P7wJJAzmevhAxc256L8Scpj6uCU1KocabPZs6dBx1pa2pzSBXMKirm24ch2NtqcnH94UpXEZ46MERUkJKyNnFGr",
  "key11": "GwAfDoVdwSjMr7383X4RPkgXtjAPRTLNprcpo7iCMzNDSrzVknnXerNyF64LP29zyQfkFDYh5XWMjoWGAgKLUgz",
  "key12": "4yTkV47fApMz4peUzaNCKakNUnCgu8do4HxEVD7viQUZ5zuKqnDqLe1ZK475wkz4G5fD5TGUyJChSQ2xsoi2W5NR",
  "key13": "4ZEoXzqZ2hkXFGHQkJv372GyYd2J184rwkoVftAsbr9LzznZVy7pMMvGJvda54q3KovWUy8cBbJwDztfXLGY5bsB",
  "key14": "51yRF12EhGGhfJzCiMyZ5gT5mWzF73QzWibAPatzWnGEiE4xTKrbphwM2s7zAmCSSDXMz4xpAxsKWDs7wAVGLAXb",
  "key15": "2McQkbAcng21K34UWoEahxUVnhKx6gCxCLHDUYto6btWoHRJrP4Zs7pYfAsq74pd4Tz5zq6zw6dWxqPxtxdtrRtZ",
  "key16": "5FMZ2bgZ5jYcGH8pbC64oJHGDZkG7425LcTwJ2en7F2RafUbTGgFd5iS4Ys6hD8Px53Hadozb1PZqFvAJfAZELR6",
  "key17": "3TX2oAB36XkpaZxYUeUCrdkvP6aBSMzKYQE24ZtLWM61nScnwz9JEeWgyrpNyHfTGRebLM9jVBGizcVVw9h7GBkh",
  "key18": "35EmaDfuS9Ywk8UJNYcNuevPXTrXqqn8kEprYHf4mGQkmpwALCzcnRxuLQGw88yi9wojN62cLovphpwjk2dBKErY",
  "key19": "47smjhkaAEZyQKD8DsDNCpyfey5VSW2Ctt1m4dJFVUsyJratB5zv9uAEwQgj4yxM8mn6Djn1RBzwW7v37Qbv12Qj",
  "key20": "5arHo69VK5fT4GnpUQeJrjSaQj6NYai7ARnDDYnjFYBeyANuExybHhTatcdi44PrrL2dgdDkp8tgZ4cHrRJZrzzz",
  "key21": "5fr45RGdmRoJ6qHMq1nJNbGpsadgWinnRLvMrArt4nKNUhLANpW8GRV9EuQdPBq2xqjCSNCQdsrpzgRDgnbEQg3M",
  "key22": "4joijLMo2JWkrQrEKzZbB2KcPfeaCK8ci7H9v8VBQ72qPpC5FvQaaaNU9BSht1HZGXuiUpbbrQ6zN4H6aXKgMewt",
  "key23": "2eeBu6uor4wwyBe2r468cUyhksFUZm8UGg8oF7ArRcs5GySiCLtQNBkpWk9xCyjA8uHftznFVyH3FZRLofmkyS5X",
  "key24": "5mSUYaPh7kKwYHgpXf9SquF6SfQim7LzSGgtUrTeca84q8vuZWWMgto1D1FhczkHnMWV1MXAxdfLhVciQ8MFQrmY",
  "key25": "3sAuCBM2p7oDf9XRRKNfu1fH6dh4xb94hCEbmjQftyeadTwq4tssnnZ7EDfc4H7uzhNFJhsucaV4hpatwPKt5vzs",
  "key26": "2h8rAsTkJYrSyFhXSXLfVzVCNsdY4BVAUfKSVAbYFDXQB1TfS6KcA3M37U2TBuzaV5C3Nxm9qTRSx4ZkLR61nrzY",
  "key27": "5ELbUSBvhwEd61kXUVo4PXnZA8CkVDFo3cytiWcXkekoSHfNPmzZk2FTpMeTZMi9FND44BRXdfc6PhzSrh6BY7An",
  "key28": "2AhD5SnofFwWVXav9DMCkQqW96P1Rv3tyn4UQbgAdKnjTtvPpCKap1gPyJK1tipcRaUKYF14mEMRH33YQEH6tWAx",
  "key29": "JcC7tbKDq9xgTVJ7UrVP8nsf4oxAbswHqRUdDyvQmZxCKFcC4iAtbur3pNYZq8rdcxsSW9iP7GPPbBX6DxrqZE2",
  "key30": "3Gzy2cW6v6oUwX6MdjXKwyvVifJhQodRoH4iLJMThdH7uBsVAhYhrswvuUm2u56ZsZgoAP7778KbK5CpcMUavT9m",
  "key31": "5JZ4A637MUzSEdtmPQaFi8gwJB3pvxtVbbSZG3GRwffPD7QDteEr4a3Qw49SRtb1jHXLEnbhredE5oSiqVfNfQ2E",
  "key32": "iPxTT8zpBNi1zyvAQf4rob7WyvZbTTKcorcRYqhLMycQXbhAGWZFqwi4NV6DEoFuxvMxEdsTx99F7f2aMj5fGNs",
  "key33": "3kEt4u9XikjRM5vJrpmWe6DWtqq3AA22B15YYXTZ5eDxVW8be9gM1NLp72uc7MRcaxB8vMYwVpYPJmXEzHM1Jogn",
  "key34": "5io7HQ4WFaftjZSdrQPK2bKnFNQebLhJLTGSFqnuKU7bRnGEyNEhmw7h3DZXcqfF8E85AqpnGVY15RtMa5b3nNY8",
  "key35": "5tt1S9QwTkMBCgyYq2sswp7xqMUv41Z3ZCzp1pBCcoD7efGMC853M8DpJZUM8gD5KvZMQ4PXBKoLy5NPswb975sm",
  "key36": "VnYcQqWrqA4YvS66ZhNxZZ2vfkocZW8jatJdLCkYqPxSHBD3ZWdmgZZg3jQTDoKxM7mZcBvsnbxLjeWa8wrE4W4",
  "key37": "Yvsvg3PSZGTyQnNETQS1xLntK4je3UgxPHLPCDHL6X2RMeKhTNRpxks8B5PwENTHZCfqubLA3YaxXuAX6SPLW9d"
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
