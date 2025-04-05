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
    "Vd4d3K4sRWjr84hR7mABBCVmnUNGFGvBKHdCeEn4eoMVDFqgWWG63daTPVuHfjrwMTkxX2t3nkvi34prjWrqGiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyxyscUhYZu1CdhXmJxnh6u4Zo8n5pmJjVjKUitN68cmBoZJuyZ8LDRX9tDkqtLcSyzVfF9PFup72fgSqjKhXC3",
  "key1": "4BVyKzXSdyakzE5UuHhnkXpeT9yNiXRrGNuQY6H8bsqCivvfg16WoXEFBrbtbjLDJxRV2RswNAoujF8ZfzMqrm9i",
  "key2": "3dVBrF88oZ7kA8Ry4qYAZ6hCb7j2GJ8HdKU7zvF48mnw5ppZGyFMAhCAHuESXoxNw1J4EfsL4gZiA6Y6xDHGnJ85",
  "key3": "62huxLCDuoPC9mHiE6D1NYzkPDF85Dbmefs34zVHHCQf1wqSBK7yRSVf2c97jpVRJ3HVNb6CN3qZvA5ESv3S38oJ",
  "key4": "3AZJ2xJrqLL8jejp5cj1vmhdgMRxigFb7roDcqE3EKZFQmJGZQDYmnPm3ygkRwNp3r8JTVKNCtjDZUgAwQiMUeng",
  "key5": "5qNoF6gToz8bvnjyfLSE1Hft42DqhjRArQXTju8nnEDTr8EyCjeUtwxdkwq6Md6m5bj4C3DBsfv31aZtXVnrTCRD",
  "key6": "2P33QmiBcjh25jC1wt6StK5hwxPZ65A95ZoquAmmT1UvAFNoycdbvcoWWP8SifQKqryQBDVRbUogU5D67sKfoksB",
  "key7": "2XCVk73TevVDDpd5kHCZFwLqDXiKoWtMoAtf4eJgHnn2kKtnMTMd9aFgtwsWBzYzSzCBw6Mdb3cYFzagVJ6A9BAK",
  "key8": "5VfeZLSWwyyf7wJ4LYg6dan3RowJuEcoq1eVpbumLYDZvr2AmdWTAw7Vxyx719cgNjPtUDJCZc1AkvwEi3pPpDNQ",
  "key9": "3RaXXp7ZsfdGqoWkaKjmbYttZay4Ecai5Yqqc4cQbjwAUPUMcwDBMLsazksxzN8Am68anPkXjnwVpZ7c2fgGJsry",
  "key10": "3ZpVbzXtMxs98SA7m5pBNUhmBeuWNhdzBfCkq4iy1QhMj4H4AmidM9AtaXunQhWx3yyJoeZ9XEUQXstAsCDyyMsA",
  "key11": "BNmvTWcTrknTRhF9qj1dsRjusz9NCbNAX6SDVKJp7uffDadzxV9MQwvSSqv7xLAodYqM93SnXsoV2kei6Z44dHG",
  "key12": "5ar19pMCioALnuvKYQxej6SgsMR9HtzGB2xAyLSUQSgxstwLGLUondR9pf3b4gXxXKiXtpTwLcRXDn6FpQu5giB3",
  "key13": "4CPgNJ7eiT9VGZfnJUUf592gXGu1YtSQanpcsriE731jmj8VWnbPXmvNwtsprifxrpBcUFYHUKu5A1x6g4yURyrh",
  "key14": "3dXfyfExfWm6hruwswtBU2vMmdSJGEW72KAUZVLZr7Pu34UQ76dX6tR73UtePsdeKHhZQzqbWvKwqKXsedHokiaQ",
  "key15": "4vmsYo9TLCA7qaYLEJ344rG6noAUmZ4HuxmfHpf3qXDfawgTALXEeV49DXJrEkr18qfLUN3pRPnJHrSVon46cuBF",
  "key16": "5UugLBmCuvV1iChv8AAR8a1ogp1wrRpZigBLS8zJCuQxrcvG1ssA5taT5DKNf6W2y32g7xUNYvTZcVJDxhNFH1Qn",
  "key17": "4T8tGDqzGA1TU8N6BvU7y3FxXtb7B4qdUb8MGVEXAJQu7LHN4vz8Z9QRFunmb6VfrfSn8pjNRvAHBpgi7yrRNBr8",
  "key18": "2iRJCH2QQTQXjfJyc1tFU8BiDZVoPqJsjVF62e4yis3Vg9Uf6gdJgqSkRWp6n8bwxKaJL9cE9GcKPUtUjgKMzJpr",
  "key19": "yTpP9uDpC9AqyPB7dXRzkdf4TThsJhzGHsvfY6Doa3ZXBMNdCtfoXaGpgDPASXCmurwLtNvhMjbAQbiFekv5zWX",
  "key20": "316mhCCCinoCdgHxJuaKSSBW6D2FSjBu8rT3X2gHRhUf3929Wb6Qy9dXrMRkMHquLvHxttk7P3Vti6LZM3x1PLyR",
  "key21": "2UgbKafr52bBKQuRGyqeJCBwAMYhzCBoBz5Qwn2BvcbbGDpMxVWZ5PEn8TDhhA91nJ8F5Dei24Yrnb3Yxf16JT8e",
  "key22": "32E8vTDcaPwCTUg2ceQ4yjs2q453mrFDMqH28bCvW7moZChkmqhrBL9HqnawrwMGJqm15UTBavEwVJ2gBgh7Q4TY",
  "key23": "41UXzYiaHRnwm8Ff54heH5TaZcaZexuycC1Krh73CdLvtrZ86QdJ2qf4ysWCgVHNPAVLmjSu6tuL2fn2dByJL5R7",
  "key24": "5zLiAA8pwqm73kdwmNXhypUFzdWUnoyQqyhYHy4D8ivQgReHy49foN9gGUv3VgFxYA6oUrqx3hhqbkWBa8fYVJu5",
  "key25": "nGCUGz5WNYVVomJrJJ4SU38iQtUss8nJ4sFKpGxGcKMrRgRMmwqiHz9gB8ywj15zRU6WZCqj9Awn1dGAkLBQMTm",
  "key26": "2FFiEZx8ikJFEFtaU4WdqKFaob4pTqrLKQcJU4sR6E1igEomDazbki6uQf7HKg6Gvh11mdVkUeUfz3b7oF4V9Abx",
  "key27": "4XtkqX3TiFg9u91tBZkicsHkmJZkQveYNgSzYeXjR18fSnoyMHym6v9FqjdtHFx7CQdxaLGirwGuRgSCkksMVSjJ",
  "key28": "3Me6eDGttb61JGFe2jUfNP5v59NtDJTSC4c5W1YR7GnWTvcCZXaj5knHiKKVvb5J86vp97WLxr5GXRAYjdhtN5Kt",
  "key29": "B3hSzQzEMVMWMYr9j5NGVwRTsQdZGBFwSi1xv45DZnTe4rKnVzpY3S2K999WK5n2oR63FiddMTbw4WTbvR9ZoU4",
  "key30": "4cuGYTdyc61SBRzJhiC8YSkCSkvEqGBKRGFyFQmLeTdKveTMt3wSbxb9pQVbtbKW2LUFFEnesn2pfRTak8vRKtyd",
  "key31": "4j7u48ExNGrwwZ5DCZJ4f4dNPVyMwS2bM7Q42Czzsavg4DKEGSw4G6pvEt2Hedmvp5YWnRmopwM5MuRP5RUN8Gda",
  "key32": "vmZqx58Z7roFuJE7HH47ZemrT3TviAq4m4rTxGrLyBUh39wVT9MmTtGxixPVWRYMnoiusEqMqb9UY7rfwEmHLsw",
  "key33": "58S4XkwTu1dFimqbsveBqF1VsUTBBdkRgxyE6K2WhKarvh7kpRfSHKHABs8kV3z4GvU9gsjaRX9qPbjvdmLLocRX",
  "key34": "2dgF9bmKVLkczmDqu6jQmNbNLNrrGeGbfT14Yuw8aqxw7y4sueeAdX26hxzNUwuNEASYSLvCxQwiYKNqV2tkhbZF",
  "key35": "5qiTKjnZQVXsHoSuzUryRXAjxZaEWej7xJcKrtW5xvHmWpGAiwaRfrB6eAjhWiTiGeodgzbYodZNzbCAkw1UtRcQ",
  "key36": "2tXXcMyyQDqoySFvCuF4RrUhKP1nrckGd8LFYxf4T6tVZfrhieofXAsJZfmDgAFMK3D2KPFFravHnDro1yRAXmpg",
  "key37": "3zW9hCsRaAiVr579JV63KepsmMjuuscx7zNq3CTQ9dhsaBixSUnKAdWkqTdXMX95u6nZ3ohNYxqVXiESDGVLkGvf",
  "key38": "vKyCsbYD3i7ufzpZNG1w5Zq2SShkKq34JnLoSUr4CRN3SUmdEsvi53cQThn6ya1qMKiANnJ5AW8EGU9GAMW8JeF",
  "key39": "5Zpzjzxdx2er2Fya2DHk3uq4uw1wb7hb1z55FbdS1nHDKXVMSvTVCrJsTDpxgdRFxiDoXn4Qs8K4vx89Vs5ZBuM7",
  "key40": "5CL6FV39jAUB3frJXnpqbPCV6fPw9auxryMJWpLE61ZYQwpdzyv9KAM4UobTsvt5UzXT5nPFFfxUAxQpMz4cY4w3",
  "key41": "2X2wqv61rMopeVqqvLXhaXDdMvHcnfskEmuL6U2rW1WhqyJNzquGfFHcjNHiDwxcUkSgc4KCgXfyPqNgtq1AK4M2",
  "key42": "5CZbS8Sub52T84m9fZGEncNTNbufPBEsXm3Yx9HpitDfeSk17ZYuRSxvWQMAGMzbFoqFcZ1PwS8YXumsn6vEA9ew",
  "key43": "24c7kx1aTmvKptRLvunriucLGzkt6sxibhuDeZUdNAtYBvbMwCk43zqXao9fTMKWNdEHw7ZCWofbjF9CRwG8DxUE",
  "key44": "3FXyzBkqxsfnbigYh7WfZTxRQt9Fzxh1MfJt39UPwENKjrC7oqGNdN3w1uqAiGrqNqsVN3F4Ga9qfe4vGRDzbFkg",
  "key45": "2CNtMxoMuY2AUwVv6sb2aEbnQh1ZZChExmSckDcfk2XQpE8p59cnMNFMNw6fGme3KqFd6mP921SN8XphGbXHauxf",
  "key46": "5j1TiiNqttEv2UsSWhJSN8X5imFfXHXyGKSLmeQ75yxHAvYrJmdc5kgWyXnZ3S33TmzraVUZ8aDndheHQif47cwH",
  "key47": "4M2sY2fW7FRh7Kv2aAVxJVsWDQ4MMKBWWdd7MZRTT4Rp3jRpmnNvjDRx6A2EsWQ5m1Q8DLGGUU11uAuQ39XRcJKB"
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
