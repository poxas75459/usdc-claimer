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
    "5zTZX4aEdcZZ29FbJHQk58ZU6rTnhTpFnvGGvUFVqez54dqmA9DsmVbMCvJknbLazxsKX6Wa29TzVuMmMRs26uR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMVRs4KT7rW5cPHKErtQgwLGqftGNdxjBcepgcMQypx9r3KSBvzhwZvC6BgMi9Kcqxpxd5X7fPSSVzsx2FrC53P",
  "key1": "qgBTGZMRghcz4vUcxVkyGbMTSCpCvaT3GxCUCPRcUb82DPYJ6bDgVBgHSdAzBNQCrS3tWB8Q7YUU5asPQwWxEhS",
  "key2": "3Lht4KvABmLtvdEYLbvkKF2Z7uLMtoe3RRXA1w3xAe5ZciPRcp9uAFzJexwf3Rs2LCg53NxLSqQGdeHeQPqqReny",
  "key3": "2mRLGFMFJAWsL1zXmnLy8qLXvUJiBJ2PjSyZP5RfBT5FHf8uTDHmhZ9nh9yshsWrQMES4ZyRe9WykHx5f57NpSYE",
  "key4": "ZooJoDvpD6En2aXyiehT5TzZ5XVKAuHQ5FU4Z8tJ9Mi9d5i2gq6qXRUT1ZX5tnS4UCPwWAuWipYAmyGhvc48Yz4",
  "key5": "tpqoJ3b8Cq9BWjyfJax4AmWZd1N6cDD1uLRXj9UQp9be425uhNd1ai7Seg6BcEQVMSg3DNnvn1RkYa2wq1q93i5",
  "key6": "2D3Uxho259RtKPL44SBxaWC1VsEqB5Z4dvgu2LNM7KPgWAbDXD96VrUhxtbBRzhCS6CguQiRne1oNSM4tt34Zfue",
  "key7": "MSuyeZygAL5xmEUX4J6SCadM8nuWaUEAmSe95A8FaqpEzQKLAkmUU8quWEC8UawMJMczg6ezZY7m8b9QHTGQytu",
  "key8": "3zFEhX7twxRgnxvmwv9D4j2SMeZSMgVvTfHYhmqL8F8hGtuL7RZSvrMaJnHZksLTE4JRf1n5hzFgHfNHiqaqRbBk",
  "key9": "2xeFe6daYT2WfBZ1f9VZWUqH2H99z8MHAuHH1SFkz6W8MREcYig61uepS3jQTawWSj5U71kQbyGMTvsKzEGfgXRN",
  "key10": "24urLFi77HwEERm6uhdFyxzLeu8kSqPZnQjVbsVdM5EU7ZmJbh8cS8EwXQTSxALFznNSez4XkjTUYB7uXV3ZBYyC",
  "key11": "P2VZzGFzY1URu9UkswwzJXy1yT3QrJteCXaSAwWvs3fe7UubvMRNygeJ5pHAitEpLUoLmUqRFsnB92FWWktnojR",
  "key12": "WXLCS4QqBQiKLh5poscL8FyyVEEsLPdk37NU92tvK3HZybXTFFrX2q1fLgSS86paftQnqdecUkLqZiuKVgtBoXa",
  "key13": "4SkuVGjkjCriPcCUWumEAL2CxLwF5mPUNaNZ9jcuLYdSNQHnqLZyouGygcYmG1owM9UdhuJCTzWZD9xCbG44PPQf",
  "key14": "3sk415C371RxiH8pVPK53afAhakgQkNNPvHgzpYpJhUQgPieWGaGdxeuhBYaUVcggN7tC2RGVNttd7ZiVxc5nsub",
  "key15": "5mpTAadwt7gvW4KiGbuJzh7TY8aqpweo8ydDB5DEkrXdPBF3dTvogsauvyhu3dxoNwkoZjFGZaokcSKS2HHvX1ow",
  "key16": "284Bz9B6A53qzsfTDaes9im5dQTyaeXSGWsGYoD4imSAEgpbfBm5fpJXANv5u3mkAU5PSfafj34SLSc8dTNgYByj",
  "key17": "2aTgTWwJTA1uR6VTiHVPpJvhP4StEfCdCcE7AjUwAqdiTJeHXrY1VHJ3kuhVArnR6YHJXnh7mxp5cXoDRuWmbvPv",
  "key18": "4d3f2UNmrEyn5dJugmPJoH67N7SkiJVsRCAJR4soza1WjM1Lw7DGzRCd9NWCAnzG3L6zvitoYRvfNp84C3xxuRX4",
  "key19": "QrB7FTAyKd2WRTpDuRaaUQvo4MXx2X9EbGi6UivoHQ7Ne5rS7eraiMLfhw5jXbo7a12uziaAUsigkpxQCdMUXEj",
  "key20": "5AJqnV3fFfkTbK7jVbP9zxeTfjxS8rN3w346jtPoPnBbYUh5FZmgKgjoaivhdhTN9ycsYKGyFcy6DK5AE4i7jj2a",
  "key21": "61xjkWwawU2WrxhWyUG3M22W5UYZmHHSqfhaoSWjqUqbhqWSWCvACvu8F2EvLeLwn69HfVCRpYxwMTtwbqYTUhir",
  "key22": "2znJm9TKXWWZiERWQtoekRzChKM1kW6CReh5GTZ9fgdrKn44ob8eaeE1rkLgrGJCu23MKSxUdabk1WtXaZNgYcwj",
  "key23": "2N4e8CkQsU53rRa1M5r1kUmj85qXhKT5Gwc6Gq3JrcaGd7vNT1s6WKfMDQNHw9hQujNLdzgYafoNC5DYTCTzwL5Q",
  "key24": "431yGAQgiyKVK9xfa6g2wtpUHpLUM38AQu9roZVcJj8F9e77edwXDXbbQkvcosNnUm87tAcTFQLjm9kdGebyZnmY",
  "key25": "66nuDBgSVFXJNnkiqi3VBwYF6XHWX66RgnVn2XBwYgVPHe9S5sZgQosZtJNSbTbexXpvhrFEJrjDm8xNCjPe4jqR",
  "key26": "4ZXouaX2irBxPGZ76BrH6UiWjxwc3myNCk3zP1rDJE3sjSCiZqxUWLwAnjXAQQiCSJu9Uh4TRYbMru7nLo8CARB9",
  "key27": "5vcfVTxirEG5QYaYNWLieBgwqxVQM6zgm9CH9gGRME2HhZ3Ec2MRHt5kE3VLFich7u8PrJibiPW2CU6ygcjdF1nr",
  "key28": "3bGhu7fNbdT4CuQaFC2b8VwcRDPr8iomDhZ9TMvMRhPzpRbUCswXW2fmn8xMLHfzzBx9VoxNQNEP4o2AaRTkZ13x",
  "key29": "49oaBKACuyAbFQft1W7Qsx8m3pJznBnV8EAvc8Pe8uoiMtQXyLJHVgA5DGwX12xnixT9fRiDXgfXtzcGWiRpYwDd",
  "key30": "613Wbu4ZTbf9pLWN4SE8qBAjTa3Bv5f3BjdW2LwmedDKUxfMtZeroMZdVunvUy28ts1P18x4Rn3C6YZ1K9VsQ1c1",
  "key31": "2QXfKmA3A25PwG4yQVWhz24eyxD1buLms8CnzdPQyqfMfCmXuF3KV8mr3eots3be6FQ2TYp1PMDARhiDsgpDDQju",
  "key32": "3iXY9KggkGz4dwuKmvnJu6cphUBdMqj2FRTqBUw4eTANexPQXAgDPJqDBirUeSnRRGo7RSngkvgJ7q31mnzwWtMp",
  "key33": "2zQfgJLsnp75ux3cB1z6ftd1nYwStCXW1hLPTA55hJfcwPPxnq7HT95YnicXrd78tzrgQ6b88Kvxw9xb6FUt9WM8",
  "key34": "3sbGNBtxpJigZpsv9oor9iHwZw5hpNcok8wUSoBywLPhK4n3qBZNW7gBaNCQbkdaas3853KXeDmxvkN8oTq7cTsF",
  "key35": "3yGotctuc7gcpYL9TCuGCkm1UWwzG5DN56SRBAN6DbefhANju8rnzt5YUNoTsV1XtzkaZ8mDUn6czC2NJaLW22h",
  "key36": "3uc948qSz33Guszv6rzQQq6PprmfygzPyideony8M9fND4tHwq3TueketKLvjzGUJz1Vu7tSN9mB1aDefGvbtLCM",
  "key37": "5yLVnk4GNNxagNqPH933a7aREqLW4eNQNsoyjiBfET5yzhg1fdbLVbExWcQFzqyBcWGVJpp1sqmDAB86cETgerem",
  "key38": "2CBuUD84jvh5VD1Fxj4CgCuqqzxtiwqaiMksprKMjq6bZD79TBkhc5SSWr7zsEeDSNbfZSynzr8ZYCSPDrWuGwvf",
  "key39": "2nndbmdxJgvKNN1BfCBHxVgTtwWW4PFvEJ7PsTgyNXJVxcRBb2GhoVV4q6m1eaj3xQp3AwBW4GRzhsBMQ35K2ZV1",
  "key40": "42kEuGd8gcaHUkJYwXc5fd4z4QyfKUKutbHn5dKBRtN7wZWW25eEUApRjdrsG9sccen96ijJo2i7o5qmktHbioY8",
  "key41": "2osMBdXD3HGnc6Xp33oT53G2Ps1FEznLeuvrbzU4TNn7yzxm5LbLFTj6za1gR9SPmg8qfpXzTf9EsvfWgt8bauRk",
  "key42": "5aqMmAiK3Uw6zrHMFeqSNiHxawgmNDkPTJP6AZHDgVNQ7q1tGiMJYqSwFGEZbvDbACDgrLt82ZeUX7JXXwaEPBwr",
  "key43": "5KozUPWX9qR3YbdUTkXJjmM6nstcogxqutVtPx8fAUNbsMv88o2YQNUP1BJcvwEBtezGjo81EvG3A6PKEBorSefD",
  "key44": "2brChM2NdoNcJHMcfqW3SCQUGwHrnZ6zMPssSWEpS5kZ7j24NyVpbyUmrCNqhL8MH2GwfEhSkPZ4twKpdwXCMxmu",
  "key45": "32BawvmEKvLqxSf52RFXHhenrhP7ji7BYCikNQgTkFzuGE9esuiMkdLyd8Z1ygqenUtGRMWgpW4Mq5JYqSthpfCG",
  "key46": "5tgrnfngsy38TjZE5RHNyY2VnXXQevV2bDKphwJYwHGABT1PsjagEe9Zc5JWvtBo2iw14W7aqTEbeY2cDRpvxqKZ"
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
