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
    "56HJo8sFRXmgC2Hhv46iSgdZBT8YntxxR729jGgymVDQbNtqa1qjLxt1zLUiSPWjm2ewNqxDMJYiVqNQF4CwLRyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gac8Bv91pAmgx3quDi1YbrZAwZFz46CwjzbHEyvpDstVcxk2Rk3TpGbtQ2VQYEhugbj2d2cgmVQdKiMZ1ypYKuc",
  "key1": "sb8VxuVnqZc4tokrsi9Z5SKN8mnZ6UF3M5V28piV9pUb26DXNDhCtxmTjzT93oNPj787pp4Ro8BJj8oCvR2kuKV",
  "key2": "28i8ojesMESnfSoeNbbEoNorVGmxja6TX85Hrk9pLxV47z4wnitMrnysh3Dtp7gtp37vNeCvwAbhdXEGJyWKMb68",
  "key3": "3cfSNkNBRf7UDXNZHswJgToQGVr9SpjdXCb9pQFVL6bB52nKE8Hsz7xmtQ3LV5RcP2UDmJhnjKfm6LVkiJZiX7QL",
  "key4": "2Vk1xw1MkYWyrhJ3LhnTk8kdXLNYzsM4bHqxjGXv5sDLzSMkFsFcyFZZZ1KVgShL9BDihD42Mn8FARuF88ybXXiy",
  "key5": "4FZmdhVuNkiphTAfHBD23pA3Lk5MjbDhq3gxcCpRGfeYLgpgpcmbaVufUrahHVSf7raQ6q8R6R2w6Jgbp2SdKEJn",
  "key6": "38GB69BAmkf4o2Xo7dwbMrQZoR57AgEtL7z1hPBA9RthNps91M7nzYrX35noWSE4NFCTsuLr2z233aaKJmVCoRkJ",
  "key7": "453qCtTEgdE4VUEvEQkXa8k6BWygPt4dwetLsCq4y667CyM1ck1M2vbWKyfG2j94PmajMEApok2XrUA1To9gEJB2",
  "key8": "5UY4Du2p4EiaaxAWnJt6ooi4cAxeKfgE1Hv8i9wdsPdR6kCLeWETQf8sXBgvw4EMnXQVTwXYnZ6zMQFrXYUasqfD",
  "key9": "K2ZD7jkMBdeuZcafk98iXRvCWumrBU7tWSuetUHbspSNKKMYsvs2j9BXojgmZwf5G8zyyTcdhzi3ukG6ocdg6mn",
  "key10": "4dMopE51dbi1ia9fStAuHJ9GrTUn4Tn2K28u7VxJa34M88eB2WU9JNGP7i2Kwe9gpHhQZWPSUfERoxAUUsXcarqW",
  "key11": "5cfeMjLMujdBf9aCXBpQx2nxamAtowcdLUpTBSSdU6CigpiLYPH9dKNrFyCUng3FLy9FkD3ceKN8wZ4hrMs4uRci",
  "key12": "2xycaxdeGtQnhPt3nXESApL2hNe9c5X5JiHhE2y5Wo8JVaUFkH5fCJQJdBffra4b7iBc44Px5DtG9S7Ht68gJSye",
  "key13": "56oByjAme6Fcyq7jcS4Qb36tz2wdA7fBg6RMAvQNUEgMx7PBvZuZaWGZT9BkYirsz5NzuxQ2Ezuj3QkHv9sYP7XW",
  "key14": "2Rj4EwvRnhqAYrJLPo6h5U1EQ7Bes3tToh3rQ5iRUtuFkwuAKRj5kpRskwj2TJLXkLApGzPvoWrmznu3tkHR39Xs",
  "key15": "5nbcG3EBMe9ERsASAxYx1kbGasjSX8e12ZmwZsjnAc7SWi51KVPCWMiJooqz716ttyqcUmwZK2GzSvnrhj2EVtsk",
  "key16": "2v7AjDARpRwgsLVgTQAdjbaDEZDm2eThS5ftL6Fj9orof5zreQ7p4AJivub8xZjv4Ase4KsAMzAHCCZJbnQhvFPU",
  "key17": "iRFb6E4GSXQAXfHS6ym5dZiXNNYxhgiNKoiA8E9haP3Fecse74Z7q4zhvSbGDcDFr9vWwqwVzrCGsqfsKKMa9xT",
  "key18": "2VHcgKL3HbLrTBgj3ewEyXAo56oEWkzrP8EeyfkVzNsXqVYTUsJmYNS5o5dMKxPF2HEecSF2xmLVQsewhLMBin9h",
  "key19": "59E7VaQN7Jhto8dLGgScXE1a1Xs7vQPYNzBgz5VFfWByWPf1PiQcQyXz9GV8FJ9RGtJocstuCN3WhDsBZh82ShXi",
  "key20": "3gd8yL5e6wLy3KMs9jLaoGWyhYPcdNcbXFkzYc3192Pc59fwELMBEGC5sXgvM6dmXcRAB8zPjDsgFKvYxZtACwSB",
  "key21": "5fGab2ENnxozPdUKycTLTJQFygpE5S9XYjkwca14GxvnuZgXgvJRziuDuUSVMauFzvs7bgWhHfFb78o6SkJxgpwb",
  "key22": "2CsHvRP3JnyrbNoSRMnG181No8y6ZtkxkHfBZF1f1PomMkqJDQ5mRCxSy3mLmkQEfUnpeUEhmeRzuMhT3or8BskN",
  "key23": "26oRrV1Ld1mhPhNXEMkfiVPdhrLjGktj2awXiM6kpDBcXPNnPiVWqVRsPmSo6hY57euJWdEABT84JCE9rwVYLFfg",
  "key24": "43ors8hE8coVTRrp46ftEYcXeRdiJfqQSSkaE8D7tKcSrpnWAyfuFpmu25Ax73ujXzi6L843GHrMxG9kZx34j6oN",
  "key25": "4X45TyJZKxKwxo9N6rLvR8B1MYZnKX9hyVYujz9YvFXsjrBr9tRG3YKoFaXDPMn2TX4V43ugd657GKTpEef6cAn2",
  "key26": "5tjUKtLkALq6YshenB6ySyxs7QmcTt4joAdQ1WiFhnreDWrxR1KRvunkvyJaTMNB4YjYNAEPzPcKk6UEe7RzkXeN",
  "key27": "4BKvETKTJcJSzJyftE64XbmRHSRPMiMevM2JAhVQjhiG4C2q424KyfxBA5HWA78dFAVBCM2vwsbbU9uyyVfUr3sv",
  "key28": "Ku4DpkVRiN87fgRKt9aYPCwfoLBqcSNKHjRKRdvtxYWcw2DEb7QpgkMyWDMmLz16AHqQkD973wATiTNkghpvgMY",
  "key29": "4whLrZeAbWh1xWGytjryZQQgK8fW6zZ9Eg9FYfQpnyTmA3bRTw5d1mi1gE98ev6Pu1uhgXqC1doMZcN8NpQJaZAp",
  "key30": "5VJhKa9aTZgEBh5mhEs7FmcLnDsqmarH5wPMoutHrRRcKQhrDbUKA6iH2ve1Zhfj3TvkbGJxN8PQvwu8c65hfdXc",
  "key31": "iT6jYKZP9JKhZqoooxR4m9Tpi5Aiusq9PBErWR3MBo5ykPv9PeDj9JiE8QZrUHduEtHGGykQ5yryY2Ls55ePdpZ",
  "key32": "5ZqNa2CnYCff9kWjaBcb98WHJwevjH1nAqHo4s3ZvmYPaAD6fKYeZb8WJr5mFtP9YKsZXitbmHCEmspGjnvgNAEw",
  "key33": "5EV4mprUsjAvsSZxTfHay8LqkJJEq3gHUFHHJKfdmZ6KhXrx9m1SrGpdPh4UUZmfoUMwckAnC7e8YUc922agf41u",
  "key34": "2EAQNNHRDgRCbZWo7oRQLhTFXvXw9JGU1wN8E3qiWd32KrqfjYGXFG387Yc6EEreN9TqQujqS5wt4GGFixcpD28A",
  "key35": "z5DEYS9vh1p8RnAgDWAY31BzizgaQck4CJ2nR3dtwzaT3aU1GgkPxLiLaxfgayzEsQBhksHcxMsncW4eVZEx3AL",
  "key36": "3pDB7uhRQfK9M2ygXSi5YViSrxRYxfDjZvigPA26c5q5CBVK7iWA7fyXFd5LaypCUWN4WkJ9ePqMPGGwwyeM3oF8",
  "key37": "5fgmKbSnvynQoioYpo7LSN8o2839wHVcEzoG3T3AWPNj5hwULUNM6cwzrU4u9z4qEnXtqjvJxpjYZibVJpcbiXoq",
  "key38": "2AtoeKFTpdLfv1GvbAEYuurbmghdgR3Kan6RBU6Bofoj5siKLixdEpPzGa4abAeLBDwvDbBB36PAaENBpQ8sdycq",
  "key39": "TRVDUJR31WSvuvkbq7pwswjpAPAojx3P8ABgwQXWum4GasJBRy2CcF9fkCeF1tAiYRLKxgCDh1ymJT5kY77ELnX",
  "key40": "2hs1J36ta7fdQjWaqvA2WTZ3NFWH3DbgaFpB8oDyTJ2uw3fCpZTLLCXz3xEammJDhsCCHj3FV4DhHzX6ZPeSMkt1",
  "key41": "5yjEgnDSDatNoNxDLZAXCSMnXPhTJB8emobPzVukrSokHaBK2ScLGkF9ShpQ4zzn8k75uMNxG65FAo1QqftAfomH",
  "key42": "4TmsBABSUZKGvdfxDA4Cr4QZeKBAgd3KHjrHfSHgNeSwxBZLx1GEsL2aJ5Bpf5LUxrQhjF1CBCncepmNpNDNbSJN",
  "key43": "31NuyhPBX83t34NvZ3BBgAsZgvhTgCMe3Q6eBqbpDaU5cHPoA4EGGxBzWokGfD8equsvhaRSVfFsi4Tq4LtgBk1J",
  "key44": "U2Ykv6CS9KEwc827xb6GZXrDuhskG1xsb5nnznpNp4wbBPUAVCErWAKY8cMfV6Hn8UTT12x4e9JQqi44BBP3zS8",
  "key45": "3RcSDoRgLYFj7BYaWxbDzD4LWpAyZMBDcWujsijLnj3yg3YV1h3K19TWsAbW8pdrbTRRiomHofLxmHa63pXQC99G"
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
