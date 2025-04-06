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
    "5W3jAhcyqruY1uDWrQjTYW8Dr5BMgdocDLARf8z75e4pcDLUsXtsEnw2v2n1HKndgivJnTDNMTipvoZYyzmhrLcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKA74n9Y9TLbWmVLCTeZ6QfDWBqUNV3vM1AkR4ZXS2r1xCmyWpiUpmCBuS7iT6yfVG4stnMnTKzXKf6aX2azPXB",
  "key1": "4au1sRXo56t8tZbvoYCeMnpJansqtVkkTQq6yXwhZPTjKkY4VFXEAe1ecMe7crARVhVSpNJEazFcNE2Zp6qFtAzB",
  "key2": "2Nq8J7TEdsAgA656fPUcHANJ9nbGDixUn4Cto2DMaaSYAWcptVuPSaiziGFJXeAXMEbX7Zvt9QW298wmqDxD6Fey",
  "key3": "5wFMLaG1rGFqjad5kspzoGnxkzVMTHeQ7afdjcBQSJsherGQjSoqyojhJsck3nTKcsnG7yz6B7C7PTHtZQ7GGtTX",
  "key4": "B5ojp2YXQiKkEgJPi4kfiyKz22f1iHn738WSueR2BaxzwCRe8AHXh2mCJQWXSfF3sf4Jn55aTJGKzX2qmdhKTpu",
  "key5": "2VKKv6sYxJrymVrB4a5cF7Sau8BC4X35FjRdjEBygPf1MdXhuBhBfGXkpb9sB5YPEJpzfxzTJXPeQ7GzuMTyxcxz",
  "key6": "2koVk754PHL9pNf1pTZ8TC5q1VbLi9moaA2bqmoU8cTCNftba6h1LB18KRoouJRPUvqRv4JqC6DUBymgFPDUJWa",
  "key7": "3UsEUbMLC8tQexaSo9NZCGwzvRGVZxnxfihyFxnHqNgfCvWKioVLLahWEHjzqsCToBRdatw78Goki9McRPMWMj7m",
  "key8": "5VzNfYagm7CykK66LH4DcLqdv4UEj8uTJA99NutLYNr9HQJV3X4XTQqUqw4HQYeWbCZxKsfNdHVfXMx3W7Uy1x6b",
  "key9": "4zHzkmA4m9ivDEJbkcZY1vw3jFvLJdw1KFenDGS4gGhVQ6jUE2ryTCVLFHmNBNDNySGs4hV3evnuhNnmxP555gdq",
  "key10": "4xFnV1LednmMfpAWCXUSiF5oE36H7AfFrrdnv4vmbEy8DuXkStfC4tdSr98G4CPt2rMgjvVnFEAFcZ8XcGSmVT9C",
  "key11": "2c5ZVey9SFBTz55X9N2FLpJQ6oSm6na1thHMwe8rcmqWtmWKEa8QtonbGDZeH8bqL3Ggrzfd2SzVBbCdGvXdHFzt",
  "key12": "2GDX26CHYruBcG1bLVYV2r5z6WPobhcYAmJUpWUD8MNoQYZEmQMs1PpvT8rMhjknVsBh1r9R98ds8wvusYHaTYxn",
  "key13": "61mURvPsfo9Qz1Z3kohgCMazwGC5ay44WWhPrb1f4VLY9R3gFGnkPTccxoKVS2HyA2fHuXjfqEksBMQVEiqu18Zx",
  "key14": "59ieKFL9TuQvH1dpN9QAL8vyqGBm2dzYSVavTuadggGgo35sAWqc7T54svb9hrLtyT1tchQ8jmvGRDxvJd2SdRHc",
  "key15": "3eGYbWZXVvTwWnDjdgXjJZ8Vh2pWJMDbXnXkxFTfJHL58fH6SYaCDVJjsKaRzFmZz4a8oxa2E8cXGyHJnAhBVAKR",
  "key16": "54dV81rGgJ6P982UScd4EjrsV9s3pRXk9JgKvXBwZRLM1wjMMUkKgmBvH3NaeGtx9qmVct3mKTLQ5SJXFbdHpKMc",
  "key17": "4tmkp6Ju2TGm7n6zs54yDNySxwGXtNNTqpGeLjCjVkUvCvUjvJi399pNUTc9pST1F452MLpaMzbPHTpyXeye8Ynh",
  "key18": "418YRjcE4xfjTSpkNrXJQWQnhHfWKWSM1JGXd1h8zqCHDRPuEYGV5TXoBmB7yqxzA3y1c5W2BasMSqHQEvFa8wXL",
  "key19": "2qTjT3JXoEriZ1rvYTkbbRj6WtbJXmpvpacnUALZkd32G9jV1Mu2AwSbjnxcvFDxuz2wTqySx9saNUSkoAg5YXcu",
  "key20": "24apjq39iHWQPxpmeVPwTAXVd7QpynLtThJWtVXThP7Bu6wpUupRriTV1rSr17DXSjE2DHmggL5Pv3KrhybFPH3M",
  "key21": "3j5Wuvry137Q5ZGspSzhoXtjWtAhCfoitACcx5srXhnj8SDgDdHtTmQKyGdDSMGEyZgeJktYXANcBQw5VzRND7ud",
  "key22": "488Jwc6Vr5TXoBfjQjnYeM5RY7wT3xt3xCQFWSvVrg4QiTyJ6kvJ1TWTos9TWpG4ZevTXVPy9CfBHr48FQHv2zb8",
  "key23": "4inx46kM1t2fNTpVLBqgdku8NKFnZBrjfNvaWorwio9Ed4fhhngeeyLC7bHaREifEQ3zar5C6qfYz8y8X8asG2MM",
  "key24": "2MC4pJRGF5Fncdh7VNyzaAURzH5xpAPxor29CjpHwbAwWp73pid8KJ53G9Rm9PnaaabR7aHhu7yNcyRLMe569Gxz",
  "key25": "ZevRiyXegQYXUX656qkZPLU9PDZ7pxw4oupnkcRtHXKaK1zeHbQcv7rKt2HXHyXxPFpsj2gB1B9aHZy3ZnyVsDR",
  "key26": "4oHV1DyBNrywdwCg9Exf7wJ2qkVjzqU7f8sqeqWE3tLeF77bPs93MvCow6MFwvc4FHBmkfrk4oo19yEL4JgRX73w",
  "key27": "2hRBs1dX4ZV21RZcpP1duBSjiY6xG35HH9uM5ogGr6U2Tvb3ckiJ3gcaLgHfcoAij62GLDTPXUL22YUidsc1Z2ry",
  "key28": "Ckg4VNngpUf7qBfXBHnY9iKMky71BySxZ8NCL3NzwUGn1QkWwwDJXF2iPDpp79HTsCL3bt1nVKRYsCqnHNxnGxF",
  "key29": "2rbgPhgsd51RQQh2pf2G96RSwDmY6JjxBp2RhyjJcrosXMinCJ3iHow1bemoWxZhNCpKh1pkZyeBow89oWBDTJXN",
  "key30": "4GDNDTEzxZmnqPjcmyuvghAE6mUPveXNjiCHdwwXoEYBUEybXH1hsQDdpNwWBYa9REXeabDUCoTPG4G2xKW6vwws",
  "key31": "3v3DGuzVA5esCJMKCCzHrpKXacvQoJJ6wLV3oNgY2VTqaMRfLAKsWqLh8gZze4SdTqJ7A3iohTs287oigCpbzC8",
  "key32": "2F7N2gDhSVTpbScFEo1Qz5bYmgR6cWnXYiTAZjbJf4pjzayy63rF4TCif9UVnhueDHp4xgcD8AoyiUt31n47h7Lt",
  "key33": "viwKPQJ87GEAxuG8aTWxoHxJgvgbyDa24bsc7znzTDXJyJ2M7yRDdpHobGSB3bc1h8mkQC6ZUsEVruw6HkQCoTH",
  "key34": "321mKyh3HP2qyDCCeb8msNzToA9E5vBRP6HNQxZNZLyftQSKVLczHCdEapkR9HrzCopZrrGqNaAucRdV7Yea4eK2",
  "key35": "5T4DCgEYkQpuUpNKdeu3tr34w5HKB2MUYgqN3SenRYxBYfJMY1uVSzEMjrYXb6MxzSTJbyj5H8PEhXukxLyiLgPU",
  "key36": "4quCJsc1V3oZhe6GKRdArcfCe7nT2kKrSCcsqC1Jhs6iytuLh2MGa9bJDqEoRzx4YKXtZoY97WNH9PDoLsyhr8cS",
  "key37": "3jURtmNX6pLis9vSoJu3hNme3qVSjFWY9n2GK9k5LzkUvqwX6M3Pov8AsXhfXCrxAoEkTrqbekzLigUJbNN3cpYY",
  "key38": "5t32amEqzdcZ4r9BTqEV34vCo7KDBoMerfRR91pLRX6XF3Lz96aPEbXjgZjCh4w9VoRg1H5vPHiyfa7X5ktwudJg",
  "key39": "2bq6e66NrUxJJJ1XV1pij23tRoCGMTSRwrrShAJeomZRG5Ms9wNN3rLezthDSa17haKX3as8veWKbyuogzMh5W8m",
  "key40": "3oMEQ3fpH8XsatjeHnMHAedsunLtNZiTZfwU7kr4UKioRKykD3ELZVZvGGdwf7Y9SVTbUBUryepYhPxPN5SwBZqj",
  "key41": "3FuYdKgqAt9eC3LXRZwuJ781SUyQmdLARPEjqPShtCeP5TR2CP1hkL9kDoUGBkMM7t8U2wZaEpucWSjtffbF79h9",
  "key42": "3uYhcyigVMrMSvbse79Cd99EGA7SrGtEfgjcn8yYeypFckRCydcDkThUsx17Lg8NG8otHmfic2EzJXw5m5afDoCW",
  "key43": "5CHTtP4q24j5qu7NRoSCyXYqAHLN7L9Zqox7MZdbqAP3y6oV63jkV1nHH6dUmKeRiJRXvNrex27cyEVnH66BM6GZ",
  "key44": "594Fq48SpYkgRZfaBmU92jK1XnRUcVxw5K61PtGJCjrbfLuEapbMpsBPjuuBmW8uGJidh2shzPHt3DqDCFKSXduU",
  "key45": "39cbd4qTEwrAykL49sJoMt1wm2HKZQ2ydUV6TK5jLUZG6U1k9xMqnKH9t1yxnvMSvJNm2xqb7Q3CCBKRFs134Enf",
  "key46": "KT3jQ8Jza5SaJG1MYsmPxNB7aJhgjbtcYk2JX17zAhwAkdSC1ni5bexqbFaMUADNMga4MoxVdCvASHbRNxPtJQP",
  "key47": "5sBzcCTHpgxwvanQmBd5ZtJvEcXDkJQ35irkHmfWt2YVm91f46X74HATiHmiP7roTa69UVeDGrrzwEgyuMiwdkN5",
  "key48": "4urP9dtd3F1rWfdQfDwcQmD347W2QVhchRM6rJU1A68SCfBLoJvro1w2ADBkcJ81QipCVxxmuBz7PM64wPdESgk6"
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
