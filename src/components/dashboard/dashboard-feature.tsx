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
    "3cJkYQGCohqJXcoWEVsiwVmnzzFzz4KwnVPyGBqdBQg1EdWo3RNMJxXiEvMHZE5Zsnap3BSr9KKJXFYeUJHSQ6bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdoNPdWWpD2kWfYFeArV1NZpfZnPVdV9tr6rAgsBq3dNh43bbY2UP8mcFhqPuybti1qQiZaLVpAe3sn5ynH3i3y",
  "key1": "3BdqVAP27dTuzEhi7NGJEso92wWMLd9XoWxnSNpreaTV24GBqfLjqWqYzJZ4bTJrhXUXJ1vBVQjVuuVUzGZKXdp1",
  "key2": "3jZHSNoyCCsGKfvcMR7DQ3qa6XFupVBn6issUsZPHHHDFauXRWyeZhLPh2YF1ykZuX3fyDZc3U9sE7mrfQhzsDCi",
  "key3": "2dRmpJ74uzNQJcM1uZtbzQtFxrH6A6vVFij9tofmEMRpQKF3hmYWgM2e2dwtdhGr3n94stVjt66PSQxbf9Ymt3KX",
  "key4": "5v22n7Gd3psH93h9osAe7w7tEaCXWcnU3PiNRFjszs7C3tkRzimuBLpzbf2apKADBTPJdQBQpCn2FrnbMzuJ73kU",
  "key5": "48yHwVMe9sSr4Weiwh6JkTN5Jk2K2WubdqiGKcthfqNZiAjXaimTzaj3bFLSLYZyopBGo7QW9BPPTKCUjRyptAdK",
  "key6": "74Y6Y92drVjjtn6kXQns3nkBKb162oDkfxZoUyQUezpisY4FjRydNWGNg2gysYnhLHdwn2zPtuAmCNYkU7k9tEi",
  "key7": "t7MJNfkceriwapKQVYaY6HFTG49F9LVGmReDWZ5LUMAR6tg7uB9HuUjBgmGMMs4o71iznRxSPt4iDMqorcZkySm",
  "key8": "4pHcDMtoyDtptyRfYHutQq9UGnTTk9TZXrhfeBYq6exR3JNhAUHJimbHvrDuALENzFC16gvVBvraEFTgvMjxXW71",
  "key9": "35STWzkjqpkRLJ8g3V878wCHcUBC7MC6zjPWpG7rU29jJG7REbmrFCGmx1KFKRuDiJ7ykJ2Xq13z6PgQGBNdTBnC",
  "key10": "3xcUtGKS5UeiEc3YVvi3vY5a4U8njhL8DcysvEihdDFMHdbbrHfVpLHc3oFjeVBYo27ynddYDCRxVrcLSdNm3noq",
  "key11": "25B3frSL3mqDXt4PuxhWoSYuDCTDn6Mtt4ZDi8sUyqZpRcCA8md8agWtBczK8GUs7tQuwBBUUYzYu7dui55PUj1D",
  "key12": "5XUEwrLJ2drmTHrqpsAY4ofGFk2R9zyDdA7PEyRrWscExNcZH4S2FhGkVYgHRMi6b3QQugmLrk7GgogNgekTHkQU",
  "key13": "2D1G5MkCuKg6QcPhjm74hcCsScr7JvnHa6nyENhBudXBuexGENbU8vi5h6Zo2hBhBZdRWgEE9W3dnofAUsGfsNBy",
  "key14": "3pEHpnTMTtzCBrMs8b3bX9MjtfK2yCGBNdPaXpQyqfCRX1f4TZZhyEaH62hQVEtPqAvR7ypMbKtzRVPtcBDk5XDD",
  "key15": "5htNSADvU5HQmVUW8qAM3UPfRB63KwBrUbCgzrgc9ao8Cwh9QaCevTn8ZvYCF4Mv6j66iapobGmAsB6NLe1Tsayx",
  "key16": "WtD3a84Gczqhgfu73wdsaXBMx2ndJZicvcRvgK176cYCj32n1etUDXdV2EcW7EYBX5QR2mHSXu5aYiWhLioDUrb",
  "key17": "pCvxh9hVdJ3zkEvrQ9iaBzi9NreUMp7ePpTgtYh5mLURsXiozNAawhLfH42xdQvGHFkpySgVRsgjXetQX1qjdVG",
  "key18": "4f86kbQJSiVaahBU1Ms5whQaAbbLXYt2gDfM3fDKjFmt8DEVtwhrxxnNmDrHGJ4X8q1sbxhnqnvJxNqe7y6KgAaq",
  "key19": "3VzYf9D9GycYc6RAnpK5es7zByfkVbVUi1cvznoR1KcpeVKZKFMQDmo9ZSSkj35Wa8EcDA1yBnHAWkNxfQCppVTA",
  "key20": "4NkBaXJJvWHdDFYgidnW5eMdSQhq54xCTEARXj58NFGSxxEpnYCnggiWvPyW1QpuVdeqYsvt9eTnQyvUHBrhisUV",
  "key21": "2mr7nqDoYLGftHiJtnHbCXk8HrirGwbGFasjLFkV5jeaFmebM6dz9oa8XNx9wbyEXFRCNAihhhAh18mr9sRQmwHi",
  "key22": "3Fccn3xV3UvMmEQqhvFhkhCphLaAk1kLqEHbbjzq7uq4qAFigGLk3PBpotJ2RFurDJdREooq69qDvFZ9nRWGj153",
  "key23": "2cVX6J466wC6x1vNkYWd1YUkkD3p5CXjeJ8YxSkxQwDZokRPhRSzu1E9Ym82YwHfn3GLiC64Wu9BX6XbLbJ8CAVW",
  "key24": "5Yx71Pej2UcshfUGb11Aow7VGMmT24R3yj27gqTLXetdaftmHfcwTHsgdEUoGf1iYj2Gn3NxJBzFVcBKccwu47p4",
  "key25": "5jaq8nUq9qEFrxjJxzo3KLTWDwx3g8CV6PRxUt4jffTsD66SkNU1ocY9jhoRKKgcAYgcdyPUAaLtTJAwZ63hMocV",
  "key26": "24UGTDcaBcPpcJw3rba7YNvD29ZWf1GFPoxJTpHhFznZKEtNQhEXKJ7kMXuXjBvFXrsGGETEPBsrhm9KtjAMCJ9X",
  "key27": "42reWB9HYSa3Vzddoj8tvg9bsWtLyShKkeaotomJUNW9vWnDMMZHzUTEBqvh4bw4fkqfZpBHqwKmwHYHd4ktFe5k",
  "key28": "23ag9DZMQt4Fec4LLzri6L7AYJeCx2dVi4UEoZWa6ZtHao14Uw7hshjn8H3dnjzxRnBdN9DHbZUi1RiFVQ9PKW3B",
  "key29": "5k83WLeGCC5j3xE9yGVNBEQB7rUXWf1NPM9qTdukfJoCmiP195Xbr4yknyMD9WF3XjjkAdzXvP3ywAHHgRta3Fnu",
  "key30": "3LKCi6MPhKdjvg79YxGH2SbaCWrPZkYaymZxG9QEanXwKiLyrXRJgH1DtmE4DEGCQK5RsSt61x4onQFAQZQ28vFh",
  "key31": "4JtbaWPEh896mZvJa7nCGhjFnCrwDFi6txJ3oS8GxtRVWPqLn9mAfRvPX99YNQznVnkVtqhBntMNt9TmuHWayU9S",
  "key32": "5PFnVm4nHfGd6HTLvebDhzVDHaUtCmSRMtLVWGA2BngHKBfKm12mCei6Rhjs3gLNDS3MUefqps2c2khzAXykP7Tc",
  "key33": "2Uvor7qRbXx5YaN9nMtk2NSN7N4MBLGFHduT3sLxF3EbdcWvK41qvHNnsms43RredG6bmpdetTobK1tYgpiUE5mz",
  "key34": "5H4ebs3DneNA7jhVPxpBaJEMBPQezWG2yrX6beqs7U92g9PNEB8sfnJWuSjUWYRvx8BaRP7iTydea9Ef47YGTn52",
  "key35": "5kGXdDNGYbW7qcaFyCGi8BjgbrQ8ox7kUsZRtKJFXVkFBzsuyZxHwCFAHwnKiK9apvt2VcbUVfTqKtfYdwDvBpoz",
  "key36": "48qsnkwzDvRuN9AfqEhTymmNUw3xvzPNcZqX48MX8ZTUPHb2EezzYUu9AHzWz2kuhwApemkRqxNX1vv3Ka1KdftB",
  "key37": "4xufGnRmc927PzfoTyT6eWnbrBN2VZWaW59USy7GimpV9UWz84JXUqRHVdENq3vRvpv8Htk9yvzXL1no5myspwr6",
  "key38": "3hiKRcFAbwEfZrxUmm6S7napd3sGaSmNHD65Mf7PkYN4gWPp1zy2eYEX5a4CyA17ZA7j2oXD6GdZUUcyBxa3QwkH",
  "key39": "2Yk7BiWvQyPsGHG6NwLmimNEkgiFUkLAFwEZ9BEBP2Ew8K22cdup4wW1AXHzMJ58WFcAzP5MTMXbRnHqzuEmmGPD",
  "key40": "4nMSm1tQ4hphvdh1vQSxaTBpaHerzodR6jDYMQTRfMfqZSz59JemsALPXGUCEo19rouagXEgkiHCpLjpE38aZ2oz",
  "key41": "6aCzEmo36areXn3MroRD9wgpEvzRss5DAgXb4Zyf24dCGX8LcQKEEDLdauVMQcv1oE6R6wuHpzdfcA9gtddYaLL",
  "key42": "67EF7NSpQTL7UgkMitfWcmHBBAWjBJ3yWShUkwj2B5h1wKHJCLyNuHPG4CoZ5b9CjFLGwowpUDEowNfRpXKBTc5z"
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
