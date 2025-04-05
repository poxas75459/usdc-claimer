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
    "3ELFyf27KP6QybDAg23KjPJy46VjwhDqx2oGbHbQ98y5Woj9Sg93mVfiXwtnVAsxMLxBuNy3Z45K6PzxBNM6Wngv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vyeFTrm8b197SvYRuyUHUNpUmPuCoq6NvVGq9dbVsW7wYaeJE667YNZm1spAPFSiEw6PqaFk5aqm22N23LiEh8",
  "key1": "CJBVx5kFe4PcZqpBvPiJ22sTHTh7Je7bGa4WapWN6rJ63i2iYpvrR9FKrSVyiMFa3bbTFDiNpWMk61DBSiEmSRo",
  "key2": "2LQu2aY8nS5QBnotWdCfY1Cvp5MfNbaH9R3jEBDv8BPPdEMJdE1QZWxHGtX19QjjrioKnFyybC2okA1VgxRGnUmq",
  "key3": "h9JnaC1nnCfsoiTqLBoa4ytujn9mdZLgoxehNBvq68ooRVDvQAkf75N2ACEAe1b56wGEcPBvy4MgHbaDdJe2L4V",
  "key4": "4TfAqzjq8LYB53BwHY9hJFuWraU68x7fJTQ9vYkCKMYYUpv7qSxdFfuS3Uc9jnVZXuMW8TQ9RuGz3sy8PfBGeBa",
  "key5": "2fpEvRwZAjgDQVFH3EkarfJYy7p7u5UFKJ9Qx8Py4AvkyFEK7qfPX6KMLRxFhisAvdX5DMMnHot3XTimGJ6LH48k",
  "key6": "5H7sZ2EAgjYAwi5iUwx9PSbFBUzfA2qr7aKLncoESke4obRbbmcBQm7G54css8F5fhkmeCFziupHntASZ8ic3E4L",
  "key7": "65qxYcu4Mfoavmb9GXXxrrW8KHh2bSynmrqdSr7LXGnntteRfYXfSmCA2cdnVRFKSSEwVoAyduUanHhdZQyhRozF",
  "key8": "Wj776j51u7PShXFdJHdAAZPZDg1s21GXcy86pcHeuFqsjDvHeJj5W3af7feFHww2Ujh9UefuPkWyPHBdm8Rg8nt",
  "key9": "29VPpgWnQGEnA8kVyeK1mqvhoBJJShEgHRJEcuE3AzRjvSXjs3Bq5vw1DBo9GY2F13hrmePX9GvP1oFyZ2CewaFa",
  "key10": "2WUbyaC63eM1X53DVjPYsesxGuvWbsVrpPWdt1B4sw3ANdyUNvz1CkUAMTBHWXRQ5on4QFKGhha9aMp4ATocsL2t",
  "key11": "3FTQ7mE7m91LZgnz9HJnjZNCFis6rxW9x9pAVZL9BMFY47poCP1PKbD1zQnEwbonu6jqVsTkBjGvdPV66WzbTzuL",
  "key12": "4LZV13iJ46wwRbMmagi7EREx6iNLnTAePrXbJDgdQ4F8tMwi8nSYMnwU9V26U2CtZH4XnH6YnAHb1LSzxgKHiHe1",
  "key13": "1wnxuHdCQ3kustwHGpngFEMBXVYyfMZZHn9MNLai8vefw3WpkBcsYTNZLVidt9cRG78Kb6kRVtKNuG2Hncbahqn",
  "key14": "TSKsjmGtqvKgCc1uS5Thtq92pcGDH9mY34dv5RvHCGcJdbXPicXKZ4XdGfDMhGKroaKHvLgFAk6ShdbsoqdxS2k",
  "key15": "5HVLQaZAdfv6q3FXezoLQERN5xopWYNDftzNMkbKhz3M8jiCp9F4mXz3s6BvCKSg5pBL1xW76d42Uaw2T6QrF8ty",
  "key16": "2VnpmeYiHFmwGGxdwq458aSWcaT817gAx3rHV2tZgXEvYLdRWKRcCxHWoYoAt7eWfcQrFKikCPdQ7EgUhkMKK4Zb",
  "key17": "5p7KzL29oFfeKkwQdLaTKkzWWmsPVF2QFGV6W4L1VDcNmUCbu1rUzo1v8kpKvsZki9fZXA7yHDBnMTJa3LMrHV88",
  "key18": "65f4f4p1h4F3pyHmrMDTc2b6NaG4oyK3VU4WneyMuf7QcGQNjB3ya6aTaX8r3443VsS77SdE3TuwZhr1fWYW9tW4",
  "key19": "aX3YNcAB4Y3AhH1xtiN3RgxuWDxZREfiJbKwcQD41rrvA4uGEGiDCMsAXQxwiMzfEBr75xou9eKqwXaZEjbcedN",
  "key20": "3dQvNXEYMwb83DLFFXqmWFz9U2CjMxsDamH3Qx24MdZeFwVs8wYErWFY5ey8P8d9FUm9Q12MASihxBz7DweH7y24",
  "key21": "2uw2v3dgFRYgY9ZWv2AmDtRTesQR5y7MaKtBmKyLNbuG36aqQHxLQmWaanDTuAsedQT3zLVsdxndMbXU6PeL5Zjf",
  "key22": "52chMqZh3BUE38W9znG5tWTvFz8oTyb4Xp8L19EekWwFPHMMjzCbgJiTTRsS564gYMH1XLmvwAkrmNH2gXPR92f2",
  "key23": "3FCpGtvzHvwPtuydc4yGFU4DsTveEN4MFs1uCayiMNbWrPPumLPdcajubD2r6fxpffqZK1vEDBM1WLPMRJnZgEa9",
  "key24": "3jhsXMeZkecG3UG53mntZuKdQRzhhKudeGidUzwL2VmXKBJJDMZi75PJBSaE4cG5j66ZVRZreGZH4pmnRdoQmzKW",
  "key25": "jQPhq7Bip1bPHDZMq7AE3Q3KRGaEp4SiNznW3TXyXmQk757BLjjBH273miPDPFmcGDVM5JJX6m1cDNrZc3wR3v7",
  "key26": "4gu5Uja8CCxS4N9CvifKK7jfApbzXxKwRznXXuVJD5YozaiKhoh7inY6jzpqQ8A2BFFBape5hcvGNFcT6aNgPunp",
  "key27": "2FrCzntVw1wePcT717ohXPqs78J4B1ubKT8HpPZ6JfVLfY4T8KPeu85zB9N3Ac2UDZSrmpjcyz18RV95uMt92e3q",
  "key28": "2YroSj8xk8XBDm5xbTHfYE3wXChFbYn7f5i2W8J4sUm7G1J1eck4D7Pd1Q8cTipjJAMutEMu9uUnsixgBCfbdabz",
  "key29": "zuALGSFK3xbKb1btTLVFne3ABwMwtrqFmhVdMjkYeteLhLBj6g55N45HLFgb2h9zQP71xQ61zV2NA1ip5eWbfQg",
  "key30": "2owUy8PUoBwXZMjZLpRB37zjWgxx1r5B9amJqvCC17QTzybz7aSVxEvmLvC9J38HQTv1vzHD7kffzDCznrDndpKg",
  "key31": "44UWfALZ2HHtuEGVxuBK5cTTKksXuH9pMML8QVbzMAr8eVH7QTV1ee4GQmXT5Qa3wXVMuCfcEH1ydwRHkU1VhYqa",
  "key32": "64VWSUJgfFNQuj8PCnph3yTJo2wRZuEwFq7uptidaB7rBRgJYNAUKigvN9QJUq9CCQk4jBuJNPszeVQ4kmeic23c",
  "key33": "34zawGHbdDnXfrpeJ8freVbSmhu1pCV1sPQHcVJVjjsgCKuafdyN5fKpgAAHQWDibcNVssd3LwoeJXHzoPdGmsx2",
  "key34": "5kN2A9LAoBEBNVWcoZo3JLxevwNmZQVmqzwSZUY4whzDH8LvbdHPYPJKTuKmwRmNHMdKvmVhH3ofRvfooyGCsc7o",
  "key35": "YmsDuQPVfE8nFFfs4jcpCiDuaWomP4RpzU1GCVyYYVh2epXHkVi7qn3xDrUjHcfwvtyF8tj3USRBLmUuiMDdiwD",
  "key36": "5DCCKWraEogYkVm7C9mscwi6anYTHPB6UamrU2zFmA5Zr3qbexaaZ3fKEDbuoPCVZxjA8S5JPdhGPVkBtCX638dF",
  "key37": "5fvxGDtPAd69LG788U6Pr9TYVctwc8P73zMVCqi67CmJt7LfGYKRKLgSu3ZfgopwnrC5gbrUkizx57JsTynUzX54",
  "key38": "4bRwkfg4cT3rqPgDmCK1z61vhyn3DTmBqxrP88S7Zs8h8K5tXFvxEM597P86jSZ6dkcvweP7AvFybSXQ7kqtUMsa",
  "key39": "3FKKaMF11QbAW4hEWPrmTDf9kJCWHtTqdd5Ldi2BsCWAExyq7r5UbLu2fDus9RiFvRDpRZtX6MFqGu3moqTSnJTm",
  "key40": "67dSMB5khtVuT7fkJfNKqVChAg1nbZUcamqj2BedVDHCdXSjPixm9yyycds1Tmx1k1f5UwoKYud5QAcEYySjXUm2",
  "key41": "3v4UBKbGuVo5M5iDCshnfdCdhr5bCfRDbjQrL9cMmRZcJinW72bQ8uB4qHodrp5M1Cdc9AzDkb7HWDj7vKJYvnug",
  "key42": "2ZxrJhp4zXX6cco45RjPYa2TE5KfikAwcVmQgCNEEtLLEgaBbaM2uoUk5jgvhLD1yveJ3K2UM6gyV5Ddh7FYqboB",
  "key43": "4TwFUnDcsFQ1YaPt2AjFhfpUCYgb73KpHEehayU28eRHAfCprcW5wBKLbMizfW7kYvmphoQikE9qL6Vzc856tMWC",
  "key44": "7uMEYGXBwxKkZVoYx9jMk64p7DSuPUvif6rwStaQzLpivxnVwE712TfaTYLZBE6zgH1dSZ9nzTNXvDrdbwDyMhd",
  "key45": "2JrnwzEDhWnSWECnaqfcXwTiUstRtc7Gu4fD3ULrM2jvqMaNptim7jvpWbW8CfUar1YvP2BTjbHoJccNvatgGGVh"
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
