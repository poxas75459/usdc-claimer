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
    "32BxtKyMRhQ7oVqLzWftmV3MygypGURjNA4WimRgae9vAAekbhwkgzkrwBLER8atusJnmcpahtap2gjxaT4AM5be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRoSrgezU8J74K2vSNzQLZDGekmz2K7vN4WmRUSu8byyTaagv9WiUFsRP689jNvuEhrRcNrkzxfK74LHgyYCo9N",
  "key1": "eWSvSeD7me3C8d4T864hcTexx9GUqGNDJ2CtQNHz292KBShXGbJ7AKRQkQis2H8Jtescu44yjshPtoxZ68euMMR",
  "key2": "zaqis69vMaYoM9qjWw6K94dXCy7KLwmpANyTuh24UwT838CywokLMe3DoDi8MRV3shR8RCRA55BDCZbPznPHG7k",
  "key3": "iPLUC11bYiQiQrRdBWDjrM5vSmgRb4bpezrEXkbjgn6yKGTEnJQP8Nwa5yRisTSRG2Nzio6WYH6dLs82ojt8xHx",
  "key4": "3ju8JZgK9tbtbQxDg1xYqLz13tzcXJ6bDvVYU3i2hL8ABkowZRzKfomwLpDM4bfttbWPJuPuDgyhaPQvAq5V34o4",
  "key5": "3FVADGUPp4MS64rhwp6UqTg2ntqfHGNWyt59RrB8vKunGk88kkdsuQzuR1GXtEfxwwNU13exZVT6U6hNbgEz8voy",
  "key6": "2sKHoEv835vvSjVj2pSzhxnqzsxyQrpRaUiP749M9XUT6kU8eanC1KQZetfookKXMWuZAb71NWAWE1UZCptu2ZCv",
  "key7": "3uFmHrvDjAygyN4itWE1114DjQ4KpJQeDExwdsy2j4UpdFznZwr8unvntAHSr3LeeXXHqrti2zueYQEMmn9NfWCq",
  "key8": "3QKjw2Xz2Y5w8dDD2qE3SkV16tjqvSHTjjKRuyS5Hkp4PSLPpJs6o3uHxsEVNi4F2akjPaiskzeheX7ZC19Q89am",
  "key9": "sZmYvSSScREsHK5EJNwY95JDBmNMGS8ajfBZcxQU1M9iJTo64FD2JxM4invHYQhBPc6vEMkHQdVnQXcFAU46KKF",
  "key10": "2eSc87ALNN3bbU9SCM4pFqvXUQeSqtRxKg5jtviysotBLJgSJbjAgvtVjzvSdCJoh6MM7RSJ5C5NFKbmGG7A5bcT",
  "key11": "5ab8diCjDuts7PHEbthHgfiBdghdACgrAinhKgXJ9SuoYjXMd8WkLJKNoU4Rv2amaxtKVzg3Ee7zpjAXk32vCGaa",
  "key12": "4rRXDwiXvJa5QgXMXgf5swaF5kRuhn6GKzLvCCwHDATaQDLinGyLJ1Ucv1ZKLJerzRZWzRR81kdTgVMYcMytd79x",
  "key13": "4zhULefsjvaZ9rMRJd15UL7ttzggV8GkY8aEKXgSUm723h8T9B2cvhBgU1NNd8RKU8Dg1ogPzVFX3tBiLJ8qv6v",
  "key14": "2uxchHPdhao5dEnjrPUUwhhDHXM8gK5VJR3aLerpaCqco3iY2QYQaU1hQ7xRxYw8fMgH8pUnjC9hRxbugNH11KDc",
  "key15": "2Cm9wXCSMwZ1soxdcbicgLkuhi54xBGc7PbJ2rtu1L7jJpqizXhqwwwhSSbGgk9aDViwsJAkFzfg2bXuodoR5nQZ",
  "key16": "2EJeDqM8yJWjLNDhit6X96UHzzeREDVmEK1AfprJfrg3FEHBXibaQBQuqsdczHUXjpf8rAHUFbvbZfGsqSy34bTs",
  "key17": "4emL1UCZM6SXAEQKoEd3JBL3wRF7kjctnNxB46SH6duZo589yiGJTX8jnTyKqQCPDKTqJfecyDfAQnQXjXn2e63b",
  "key18": "35iQLWm6rvM9V9ZEBX4pjiT7k9toeyjWruED36ZCpyMLVAFgLn3fZGxB17toWnhEtycBLNVrz7gMeZR1SNFwdR8K",
  "key19": "5BXi34Z9VTcpcc6TX5nUaHJ1sGkDEYyT8EDziyHgpDE2ydXGy5aCobjefyDRg7nSKWtH7Fkb2zBsXALuUdbHYXCK",
  "key20": "2VEcsPhyhtkbKV28NteUVHfTD8yxtcY6ck4wrpEuAYL9ucNo41o92P8y3j7gSPvn5ewVbowjvnf8THZhVwLtiQWd",
  "key21": "4TA5DaWwyD48sGrAKbV6417XKtQ6Uw4RuE562GfvyooAYZ4v9rd5PZriwQHQ21VvM6aQjoFrSxJ8htMU8tkdK9UC",
  "key22": "21dF4TrKiRj45om2yGXChfF2z6ot34sqZ46SJ414AjZvrrHvvehVbG9o1ibge1FY7Jq1z1BxPe1Y8ftE5M3gXWFk",
  "key23": "wsCYvLizCVQE2TxmRY1jVG8AvRVm78jrQRASgqBr8VfeQduaiVjVSzoZLgevZik7yHzd4bSyr2Yx8P5UKGzbTBm",
  "key24": "5bEMMJ9RkGKBp8EaJFVAJKHyvbhb5kbzSt77i7XTHw2ZRM3YAsv376Gq853SJqhkDac69MaPTmEFtCgn9w9RdESZ",
  "key25": "5dbFF3bV2JRUw3TWC3izJYux6oHb57GEchxb5QZK1Gk5cajWwBRmmJffPsDKeQwMRUTBFsEB9g12b38TDngc6d1R",
  "key26": "WwD5wWhp73sNAGchGPDTw3ANbjnoEuZpuqJnCAFMV5f6BJqcffom7xwMku2hp7V23JUR9J4kFtGuisbbRxYTWBX",
  "key27": "wLHaPFv1ZFDvQftoJKt9AmKo3vwCmV2Db3WuSZfjt6GXZpuKPZ9o6AbJBWDEFPYzefFPRDCojKQpW1h9eAEc81J",
  "key28": "5sSF41dPT4ccoUKNB5Fq7SFWtSstSews8v6chv33ZKMK8nxSs87bDLHScE7ACeZ5JpiyzfNjpUxsFNs9WnFVDqqB",
  "key29": "5YerDg8eHm4A5ffYmCe3fdYG19pFh13fBqgFAqgrBLi8QLYt9LcxG99g7nTQDgDhjtsYRtEcCnvvkSop4rnKpRkx",
  "key30": "5Dos6JJSCYMcSRRRDwQ2Ds2xSvYySUC1BzEMZkMnpzNx72V1k7FWMLupjP6GKYLAxN6VfqQmNuFUWrMfPnrjcTym",
  "key31": "3fCD6B56fpUqraA2Z4RHhVwr3pdozWE3T77QYdQuupyRJkUgb43rYHbAwLh1zwGT33RvFTV7yhyh8pRh6oESTu3o",
  "key32": "3mhFbAujToWWEnpSSyALzifQ6M5jfvj5gsqRzyYfoJvhJVj52kUL3ZgqJfEBMujcmeeTvMEuxvj9hGU1ojcKEcZP",
  "key33": "dcJsWFgYTZ91zo3BQip8bd4cmejJAosLUiwKKWK7516cmoxR6hGFSST6Ur7GLVzsLhNrKF3UeBg3iKuSu7Pi6XG",
  "key34": "cpL1V7sJNWritzCYuMQ9a6o5dxJbKUKK5mvk5QZkwPiuZLbfFYKCytCydbQMGQuA2pSo4Ux2weWc7TzPixUPTe1",
  "key35": "4aivxx1JbBWbg3CyqCrP6za8rE17bxR6wmTzNU7Y98rPGKg2T7GMksj514hqScFNKqs11mLBfe7EjjWmv9mTMQAd",
  "key36": "52E3c1FYKVGHiVZXuzBU1yjUNDWWmUxJhAiuawAD1rVPVX42xHkej1ZP89DHdaqbd76cqSsyKSSvRzCVp1nn4Tnn",
  "key37": "2iXF1rmS7RwZ93EmYPPB675skYtzCFt2HRqGZGRCi6SDhLAqvMbTT6dExCf8Vq2Bvp639yRdB8KSrYyMxVU5qDdS",
  "key38": "531TA5k2AF8eZEoAxPun2qWWi28Ft9htSGoHmVuLANitSzykCvKys1xDicM3rC476Kf5dPAMMhkWDGkJFyWEMHJC",
  "key39": "TZJhj2VR9e4qtaanapj69EYW5V8JmUEuVm4Rv5bBWJEG5SZU5Yku1GenT4Rgi6eVz9ui3bJFYsBdYsxrQsEvJvY",
  "key40": "4Uby3s3pkFQN8KQmvLDsdeABmzmEJ4L7iPqMmm53RDPtX7FbA3zfdFgbmY9gUKYwe2Gwov2smkwa1tWcXTvGWj1c",
  "key41": "3tWqffw1Aqmb831uDnsbxjsyGVs88UPVytWdoboKqRF4H8tUR5H6CrjUdQiN5NqJCQGCX17QANXkJdoKspfSXk7D"
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
