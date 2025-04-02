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
    "66n5woZTuH7aU9BUgz38ec2PcynyGQJMDL7SS85znpapwV5UXLviCyRJrKDsRYZuHhKcVLW55w68ftkisck4oRuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S1uZWsJgzmPKLYizEHFHyQ2tTLtun3XpfsYosk5VnvckHYL52E13drjmY5gaFUJC471LYX5qnVGRmKwhVX1xiQK",
  "key1": "VEVFB33agnzbYByfhFcWurz8XSWBWkaMuspsVtvUGviXguDgUiJXUUMGLYHtJE63m1gMajUcCi2DXXA7NoxMYfC",
  "key2": "5MCB6KCRP5NdEWL5ZEEKe7EdEjJjXEbpD2GePMpWN97gzycV93EATDXTUa9sv6PwVajYvLvdkhGYDSNDtHLyheb2",
  "key3": "5RSQgV3QUYzAXsZpjbwC1vaWjTc5bdR7WS6nZciZmmPvXsTXyjKipUPhz3qfc2GrWaaFAnbfvPaCovFMkSmpNQaM",
  "key4": "2o69nqpzv5Mbcgu1iHukpKDm4ZPRxwTuhXP1fa5o8f2CANKPehSX4FLcxFGeXRNtbUPLpJXiEUVDe5FWSuYhDUrE",
  "key5": "3h8fTdTmTQUEXoZmfo1RfvgmzHpTRcpgRvcCjMMqKD54sv6SbJ9dz6KnG7PbWwPyCbEMdeKa5nSqbpH7WEh6CJat",
  "key6": "5gDAUAQH1CVhAGbgMKriv5NJrnc2sshWmY3UJMuLHAwsoYZLJ3RvvaKpMRF4duW2HLJGiaekgoMTUfx1GbrccDSB",
  "key7": "2Zdy3PMgV4qQttkzsZP67zdzY1f4inUjaeKdUjd2PSEymXbh1QJqmeJnedtcCPFbnw2ssSoo4Vsoa1k8dpKydTNm",
  "key8": "Sxc6eAb52SuQ94wLTrw4h728jRyoHsQj7N1MiuWUHWwdSGLq9wafZk3ri1eFy82eBZbrHUB3Y3sBELHKB7xuFXL",
  "key9": "4RH7czdJQ69zqUj7Uhdj6xE77fr7xZ91azzJJUXuKQN59UwJRJyiruVhp3Q1rrVGYjtFezRmGREeoXniPwWSDYcL",
  "key10": "62oAJD4Zht1zCJX2TFEJgo1zxThPrtuCApQwC59wm4DQUMFAcuNveaQcU98fvUbS1NBn8fpNTYA8Tig3cat2pZEc",
  "key11": "5dT1xjJc329FywrjRPRYpdT4k67hWW5mcScDkRDNpwiY9QGgGYzhdpU4CDbvyXqgDuFYyxN5Rsybs99Hkbb89kNM",
  "key12": "4vj9erYdo3V2Z6bSaQwX8dUcWwMuUhZrp2amJ9aSRwVWdjfjwgWMCWdJDBrCTJ51ZRryytGr5jgyPVW9g8Eo5VVB",
  "key13": "k1BtSfudyuh7mcu5ZMNXc1JMKpcm8kPzDg9wXB2oa61t9Rw8TTB38fnhBa5d5gEoHJ41YRF161dCU6aUhjoHEdx",
  "key14": "2zvoDp5FBRdmQd4P9g5poZSn27mJsNcLCpQYr73PiVBf2vHqKXLvZ6PFJwPQQJygcczrZRsyd2hzVFuvXN4rcB8r",
  "key15": "2b3pUptcSbJphoTsTPULKDNKWe8QmFhWr7p4V8nR3c6LzafkMdeRw4nn9YEcDJeaksC1MWh5WgP4RsvjMtXAUYKj",
  "key16": "5SY8eL7nJSjYRhpWaviazu3GfVirLTN8B97SZJtyn4kNhyMtTPWCbwzRfksv9YujuKmFztkTLNB4QbjR7rV23ZTB",
  "key17": "aB2WCNtbcQsvqcFfV33pxwt1cyjEbz7aCPYCwvuPrQQNXy7ioCHNNi2pGPvsktKky5jigLBbZgWF3z3HadSK6ku",
  "key18": "4hd1AMxUkLRDwgyFVn8yFNn45DPZ7VD18aG8pJXp2anRYeFbZQSjbTCUNP4xAjQW1zt5YmbQX6DKnUxHeJyNajno",
  "key19": "3acukJvYjhvSrHkcmAfs9XoH5ZAxFUUSehvc8j8zsuSHzszDG5TLT1SbudAKJdtCgujjBXP3gSwg1xBaWUoJXme1",
  "key20": "2cRoY5UAJaiW7yR3uH4q98NuupZsNa5vMNARTtAfm82uBymN9w1pbuEB3VGJNrfZTYosEVP3hZHNgKoxeJ5cn6S7",
  "key21": "2kpyaaot8KQTy4EE8Xo9Nvk48mQQvsP1vdtBHNfJE5THLjzLhFwmWSfLALhiG2MpH9xuRGsqxRuhHbbbjgBA2QZG",
  "key22": "ofumsud4C8puivYX4u4neHrhm9ys1WLdjtyWZzx5RHuCLsqfN3PNbDKPG1emYcwHTrBRB7ZFMMh4BEp4STuiuUe",
  "key23": "4Ss59CPhx9ZUveiA2u2vcsy1oX8kAw16DEEztivYeCPV5iTu8M3zfoqEHUG2MH8EqKAAhC4EbcX4hkALpUSFhsFj",
  "key24": "2a54iVtfsANekVB8NS6bAZdnxpF1xED8rhqKUyZgJfLd3cyfvAvpwyxxNCsjw2UKztC917fKfo9erQk6DoTxgNTM",
  "key25": "CRVmAFZwmTKiN89KeznKtYMqwiQdAibN3XueDSwc9UVvuets6REKhER3nRezo4H4Un1r1H4r2RHArHfWY8BXkyj",
  "key26": "3KMP7rmkE5RdqNTP5AGmZhv6eemXCW6vPimqeCkHgG4yxyWGjVi9sL4gGVUuLQoLKbu9MrHsnXN9tYBFhwcc22zM",
  "key27": "3DHP124GqQVZVpwq3Rq3ppvgBvRgiVgkxM1zzAwdm7WMQ2ckPZjvZtiJFYJnNFV9Bjfu23ASf1Du6rTWnCf28Puy",
  "key28": "48uaJc2jyAKpQmQLQZ18jNfHVHShFhiLC2MTTcgtdfokGFsTaSVNV8HgdzyB3fQxCukwhjLL3xdqxvo2JpY3HuAK",
  "key29": "4hWkkD39pXkR19W7NcTGLeDrZMmDirVDFffjMGN2TLCNxowKLUf1TsUJCCvf3J4JbRpDhSE3unGHVpEHbp25Mtar",
  "key30": "5LAqqsv7Rxbx7UMy8NmHfWZFRx1DZQ2U1GCrKgh9RkRwoxDELK8kPUGXQgS5qYw8X3tpw4obKvbQbDMBozRNBxo8",
  "key31": "5sTuCfM1XXPnVAR9mFvkwpWnHrdrRmaGGuAd2JAAXZT4uMDFSVeRCZQMSEipux9fzKvjyLuHmBWAC3Qz6GdRiKD1",
  "key32": "3W5NbQgYv4ZfEzBak1sMoGSVHXxtfTpkN3z17eRLryTF4RcwmfVSUndfqf4KTy7hDByiFVnnFDrL4iKiZP1Yc7Xm",
  "key33": "2REL8TGi2cH73ukoDeW3vydAp8DMtJgCHLabKLu5L8mhmarcsguGXBmJ49CkryUZtm9okoPvxb4LKECuj4oqbbuY",
  "key34": "eQJ2Sbhb1AZ3DFsEHNDQ9Ma7y1RFYh4VC3kxH2aQr7SXx89tDNzgojrR6sf24dE21RHRYGpFpwBrFM5g21K2Cn6",
  "key35": "2kYcw8hgD8eZY2bKq488DDhsT6Cb99UHYe3GVYbP6uEE8WpAZUfuotJL2Spv4cnGAH2MzLJzAy5K2LGF7m78wpo",
  "key36": "5n6GhdWKbUqyuW9ingW75bXiQ3syvwPF1zwmXFZB6ssiirWBRtj7iMppadSqedDSNCM5PSJoyTZ6H3YQVDMXLgHp",
  "key37": "41X5owmJ6GT5uLLXAR37aaL9Ncjq8WiPCsV6NiFzwt4oD9LaWyoS4ZCQVcfBXRXPxfYWSjMK4DdmieSDHH72cntq",
  "key38": "4tcuZbuGro8ubEDiKeLDLS5ddY6YxDGH9hzyXM6BGgKTcLyFo9y5gzNGwxiqSJ2b6CZteYtqHUAD2jpK6iSPKAun",
  "key39": "5RQffUrdMFAeRXX2zjgrvZAB7LVUkhy9hHnT3VymTE9XVFSVKcit3zWEwz8hgcTk6bRdLyFGQz7nfvQQMQmRSy3q",
  "key40": "3WBd2Pjd6Qk2hrmdkK4QamtqpkCsFS41bgNF78AZn9vm4zPKm4a1hPKShYYbKgmP7mq9UmD2D8RVF1mJQz7yJ7gX",
  "key41": "ckcTi4KE4ktAGGKbLvqkGgTrxRDX6GgANa2Ts8Bbd5f7g62WAwEgT6i2bF5JdyEtdPGz1LF3QEivw9qS3TuHdRM",
  "key42": "YmqNxRp7wL9XHXVVKdB1sRBUmzWqiMPsdwM1Wkn24bFuKJfnRyuWv8qey4akwzhqZNBJEkURJcFrgQoxDgU4DzF",
  "key43": "5hRoTGfcnRWTt4uHoAB5dzqCzmMF64GGWrUK9t3E8URmofhmEPum2NuTywWg4ShGEXYKKo9Z8rswJdQGrBRgVXfw",
  "key44": "5Cm79BV5gU297gqCjXQ7s5XSaUPsKRgMxmFUocgVd86oVfUzVWNuJrhNHjYUZyGFMzkTHCV98sL3kvL9AjupGo7u",
  "key45": "3gBoZUr5KcPs34py7FTRPyvaReELRLZRv4ovdhHnJLiJtQeSqgQxv6a37Cc29186eKtvvKEe5Xen8SmgVEri1zQc",
  "key46": "3GgW3axQbg3G7Zmum4jxWsZ1bzM8ycmDwus8gRaWP3944Z6bZTELUD9CVniQadEroMfhohn1NGdA1zEAYNz8EPH1",
  "key47": "2haiuGA8HfHpxsogH6ZqhaBvx1LEHLuWcTLQkB5cRwsKMcZSa7e2LHw1L3EzaRCyn19NE6tJcphAAXP9mDvwsAKZ",
  "key48": "5TaLXrbMoSHzHdgFBWA5Efz4bcUKNWw5o8nu34etpuyn4tTtAhmfCRfma7W9YvbW3tJqZ65kGQwT3n5sp3vbpCV7",
  "key49": "23KugVTyGJNnPL8U6onYGzNHskUuRwYErVQ5JvTEZ2GvdzYCfisRB2tmdE62unAhFW8zaG5rZJvwiW9nTwGbZo81"
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
