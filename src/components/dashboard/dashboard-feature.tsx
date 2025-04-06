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
    "2tA3TBW3jG9Y3CPN78qDfRPQyDZMUejgH3NAuBhg3kkEYhJcTQ2yaHQU5krUcNrZDzyKGFrzZMzB1ZiPoVeMNGyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ds3tVdujWRE2NF5vtEj1b6ye1oPfCTeE9aMvanyjX5ymeZfZLunUGrZod7h8pzuigUiXBFpZqc1YRYXZAohj7aZ",
  "key1": "5AsGBDXF2W91YjBQTbsjpo3zubdA1EQhuGYZeFGDSD8wrBQaBgYSU3WDLsrVSnydGD8JHZtkCLr6inA57kfU8XyN",
  "key2": "zGBEuncP88JSvvZbMMVMEwMXCbUmza2qU5yyngQDems5FNXqdUZJh5w6tc4LPxF6Z3dv9Bpo5qj6EQDJHXK8ZEV",
  "key3": "2Qvc2uDHWDbFEJXMtdvEhawTzgnx9ZxrAAFnJUwiWMmTtWYRHHdbLkrbicmAwveLKW61ydk4cq3Ep1P1pokFAZG3",
  "key4": "5MUfH2VDzFMSR7nbZMegZx94CbWRmn1MXqZhancC5szANcZWECq4CHs5CaPpCcCCYyHZQ28ECVe43TxtSD5NYL9q",
  "key5": "4pNVpgUKPvoXzz9qqiaRGcoZQerqGiRsC9QvdHanyN1XBpW2GotZerYcvGvzdAsxuYTcfhhXQSiqShVMdZ2Vstdz",
  "key6": "5y3wQidA26wCwvJGCAiSM3sDmymzKy1EvzxVASgsdcprcg3898cuL7a2MTdjdQcEaBttMKdtLjTrjhmBgQEv45sp",
  "key7": "47L5rYpv4QUh2hhRCoJFx13CuQjiBX7djYk43hdGv5MNQFqChuA55ZjUckP6uX3jeKGYQevoPGWn9SxuVYfPCbEB",
  "key8": "3GokMEtRVNDmPdYLHyavRQyrL1PbZSELBf86cW7N4QEjni9cgXjk22gMvnZL6gqZ3daBmyQZgfvXwQGKL6Yc7oHX",
  "key9": "5PgmSrqVfH5GAcomGmAqDPeaDrA9TM2DvomSh5QhcpJq8XTAr8uQ9obsVbaJCkaNixqhe9Cwz1LnBKDyoRk8h5Yk",
  "key10": "3NHsgJZKxyXvTLMLV1tpEHjD8ReFR7Q8dwH4zhq9sSuH127qHEqbJpDeHevhnHtnbeqQEXNBx3tpn3viafjw6u97",
  "key11": "2QCGD4zRzYHjmKUjrcq2ASY6XVQZ6fFpBwjSy76KQpwSrS9kUkKkgJivCQap1mAzzkdUT9QBnSy6kKnPUfRkm8NK",
  "key12": "4s31TXiWnMRiMtku2B2NVJbQpdpWGDyrLyqsV5zueW5SrzHKX7h2H4WfWtxfnFegxUE1ybHqCs3mGLctxQsro2TJ",
  "key13": "2qxpKptuFcmU4VFULGD6xWudznYA6Sg6Lp2F42YfyMGDqKAUAtdZDZn84153nA7JgAHwkuP99cHq9gcEND8Qm3bK",
  "key14": "31yEEnu1JupcfpyJGCorwLS7DA9mSHCVinWnPH6YWxi4mPq51RfC7TsJ77vHLMhREevbxwf4QtJSpYhuNggV9m9d",
  "key15": "5aDXEHJnttd4pZh2J2HaCWxPyUorhURSykUhcPDmSaYm7jSrTDuoKoT23JPxGkBBETMuKJzuaiRUbLXPQmjJrLcC",
  "key16": "4LLW16ipeTXgdpJKXyu6MgtMysctvds8MfPnaw5NGVTZMXjBidmowVm7k4srim6gtWYxJJvcRTv3mFp192PVEzAP",
  "key17": "5ToBCRCm3SX53nGXwskxmbu3gr9ZFkdXNJQPFWjEKi9qNLQydy9ynRoDG8Mrph5WtYaGwknm1LNmj9CrYtqELSAy",
  "key18": "26jhQcVzHMy5zBYR52uKUH6gSz1HvuozWcuERukGFCgHrEHT5AEuwqfNeiP4CPKWJ1KFP8ZVaXuX7ddsXKFqn7cq",
  "key19": "5g4b88KV1C8y9srG9LEiGXJULS2UD1WSoNEncCJ5TpfBiTuDXvNMrxUmhptuNCLhJf5ZcogK1NgzDMEAuFXpT1DP",
  "key20": "QK4xAr6aDMBxHT54nFBy8UjWz7xxYveJs28cKE4fxEa4cFx2ktqfhCxZnnmfXFw6hBGSgeaLkAEp5uPah4ojzTu",
  "key21": "2gawNXU8TF2CKJ37kmtD3sFQV26Zwa9cHJxJ5JLLkULVkVwnxymk6DzatN5igwgK7KAgMZKwWn4JVdNvHbGYv1Jy",
  "key22": "2t214GygjcdWMSL3qckLhYxD3kfpxjzMETnNsykFN7EYKkDtdC9Rcf2dLnTJhkeEcF6mNwjGPKkM83kQwkSjYvRS",
  "key23": "2bMZWdiJ4SyeXsSnf61GEVFo9CaRKHGk7k98KArQNzUoogQhLUs1tGrPDSCTvoYgFGPfamzQuYF4vYjvfBZPQ3vS",
  "key24": "3MLgvgQViYdDLVvJSVnuQTcFnnYJPNjxqkdeQG4gbLTUfnsW36hQd13r4Ec4jcLV1AnXpAj6NTEQJgf1Vvmb3iew",
  "key25": "47TtB4pYsfZu2qMeB5cFSYePkYj3Rh4aRH1GU5Nkd6KB2TZgYhRACceVNJpYWXupbsT2cVgKcDMVWpXTL4UvgtCn",
  "key26": "DqR9gvdi5Kmj7Ubw6enNXhdAi327MpUhUiMT5QvfPpJHqfFiANG6HThtybDrBX6nZMauPZJn7LQy3xytyyqMNVH",
  "key27": "CRSdbDbqrRACLUxFo5La9U2FpEvSUjcMWF4xjefBGUWzyDqTCeXCfXUvAJyzdSjN53ogSBeMgJ5BYoasoA72mE7",
  "key28": "2coS4D3uC25iPXaZ7fhR11NwREuzXga7XMeYe3taZxCYdbYn6EHuyo7uM4vopP64q65vowAAG9nddFsxhNT6uwDA",
  "key29": "4dbmKWBDNqzR2Gz8Loq4ecewpWWRayt5US2mJKvE6G5mXSgCFEgDBdzsgWg4VFEtAudmDDKUcEzVPKRpxy7dQKNV",
  "key30": "3qFxFx12eHfiuQ5cqvz3x47qjyw6KAadYuz9hAZbv9REi85K42u3vKf2zvSQfN5JqW9HdfrUaKxj3ads8zXUgEa5",
  "key31": "2HaoUqmCShRL5F8zde7fW4THh8ofHtuA1Q8HdUjNYuVw6RjUfQK7jQUDqWPo6mTiDfFESLPd2JaZZMkgHwXz883D",
  "key32": "3ge33CNNr8m9wazMNBwyCbHEz95PgJBUMZTtcrF97cjLbhwcbb5x55oU7sWSitavS2Z1uoDPPNqxRR11P2RNekQZ",
  "key33": "2gFuFTSkigco6NAwdkp1G8JLUhDh5GctvWkSwo5qvN1fnhGXNasq5WhRQibvRC2eh1xnF89SvNfNsHUXWLcwathz",
  "key34": "28s2DaaD1cYraGwCJWu3Gjr2HZ7tUvdc3BCs5bzLGS4F5bi7pEfazQoxhSyq47T9JoN43UJUHU4mnv58MGs9AxRo",
  "key35": "45fWqZKYhWvoGEjd15vJhHDeDkxqtxKKJ49a96AKG5cYL2W6iES9wjkrnnJ2Xs19zSnaYYjmcKVwWQ3wCyD1qpNj",
  "key36": "5LCdvpei3Z7W9NNsaMfoMih9P25X7uRM7wna5R4S4iyNFDWvNw9uEWc9su3YJgJ6pZk5n9hrzfhtbHNCm5mcZUAU",
  "key37": "5VhchuqnAXaCkH98TxvJ58ux2t1Uvi9JmXw3So6LShvPBg9GGp2mDrFzTgXeS9pQkKX98VckN3cquHV9BJmJBqL6",
  "key38": "2faqmHs4yDfuNKHn492yVA8iLtgqKw6DJzYRQWPmG7NC5WgjJN963RmswJjcURJix4MKC9Nyk1HBFaVJHmrk5r8E",
  "key39": "45uJdEQYtqkCiU43kPUJMDhv9mb4KnrRVNzecdcu8hrDdi9BAYiKxArNC5ovEyHmZdWhn5uzMri1KdW4du6cvrW8",
  "key40": "KPRWCo8y7yDL9A9xsE5UFt27i6rsoRsrnjefK2gGuDiQUHydTpTh4fjEZCj41UsSh2ns4CfSo4rRxsrPheJzEhN",
  "key41": "w4NzJKC3sBRcRXz1BV257Ac78M6cVUUVp4qF23tGgmV93Nbq9K3PzpJmKccF9qdCiKfWKaSDvRqvkfWeiZ4MtpH",
  "key42": "4UHDYEcWCz5163KyTdeZ91s8ngPVbqPS1omMmcWV9bBY2p4RdfeRm4U5Kknmib2AXAxgsv9Ynjru1wfWReMvgYL1",
  "key43": "7K3a45TZ1gNQzqKyq4ecpVuiT9GG7A74m7zqyn6ipK8B2WMNuMbrT4cKg9THXC2FHH9fX3dFiQ61JMe388cBeik",
  "key44": "61NAFKzm1xbR59U3vqKmJHy9kqqXwHVNxGkSjSqEzH29HFJASPRFM9fpnpvnRuphDPUayJKzk9Hpx286e5nW1awb"
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
