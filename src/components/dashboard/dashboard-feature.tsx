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
    "4RPxSE5FE2qF3gQq6Z1Gue8zqZTWqrXJcLP12iMAm9R26xKksLtRF82rdxgvS8bFvt5PcoBhQitv7fy3b27LDz3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogcN8Qgx2c8YKE9iSoe9Ub2jnV2PznLwvoz6yuxU4hhfFk8h4nfKsWyxwmy54xzJeH5gQi43KBjsMoxuGz52WhC",
  "key1": "3Jd6cc15FX6KBTpDEJH9NESzVR4UbBe2L3jjCYGfmKD6rTqvffodcwbYRurNyEKDeUEHS1pfBWeuQDF5EfhSnVBq",
  "key2": "3GFRzVibKavCGETTGwjcqwJVuFHkSy4aqNcaAdv7i7VYzcNFHSvSU7xQG3EaveX2yWzYwEX45ZtSpVFxLz8tZwnD",
  "key3": "4HHszT8yyuwqgsNRzREjjGzzusss1QXbvYgeQR8KXXP7n6sUcTBV54vHTa5UUEoEgJfHBD2rZemCMhFeFXVxJbh1",
  "key4": "3AL7Vca1bKtj9c4VH72crZJCsC3RLaUTnp4Fv63wVo6qwMtRNwaiWnScrmUunYerNjnUeLzJgx1BfZupudcHvtmf",
  "key5": "3oobZVhYZLoZHrAiVUMDDuXZdubpeY6NyuFFQaE5Ei8yHB47ESqPdobU23AiPR1HVMMaf9Y5rfucDuha3Br3oRWT",
  "key6": "4HVWQ5e8mV4K6kkdGUDS2eV4FgcKyUJcLdQ9qYVUQTzo7NNr5ATvgUZ732MeA11dN9yS8gzvCP7YWFTFjSGZaHTU",
  "key7": "2RqiW5vxr8oBC486PvpqEYuZsXQvdSACTPDy4RTcivY5TzkZTiCbaSTWTwsC5tcjTax2iA5tj8puUtMkmkQ94YRp",
  "key8": "4zL2AKMXD4c3szU4cddxcoiEqTYt2nCryYBQtNP9RnqQr8uKchh6sKdDBdPqeDsfBe6eB83ej5TmwquD8xWstBcu",
  "key9": "wBU3cgy3MFsfjSrhK2Mo8hkuL9QzydJE7R4KYvYce4knaa6iLS7KCMHruv5JwKp43RMQbeyVWQGpeTQvtggpKd4",
  "key10": "3YzRXrQtG8fFXh5CJcBPzDhTnixTG1CLDuqZP3ZmRAdsX5az5WTVci2FR4W3A2upfS8EHeTu9cQzYX8bTqrdomQU",
  "key11": "61Z8Tv6epMu8VAyQHuXCJNTuH7x9VFPjeUHevY9gaLEw9UHFuHswkLGV47dDs2369aseCxorJSUCbjxfNoKr8cM8",
  "key12": "2f3PpTokJpmjziMjgRuzinRZooRwqqDoTStG6DMqdNqS7An8Mi5HugD3C2EPkNWdeLTwifeGCbcbHdbdYZ3Xf5Ea",
  "key13": "5PoYTDkRbS2hxevTbF1Nmb7BLnbsKq7zzYpfteSRTAbmeyQvfkRJTBF6a7gwEeALsLzTZAJYeCAAUnFX9eXqCaLq",
  "key14": "4Vn2rACWAxo42FkswSACg6LjqNCBgMKebB2TrKE7BadFCPF5jToPFuhGwHZuNGuGExLb2CRcsSE17qCt9kQ42VT7",
  "key15": "2iiw5C9fYHpQR6a4n9MZAekELJJAxkix3MVnorKHsGBVEkF5StiigCXQnWYUBWNaEagJQwGGBJCcVbnnae1iKMCz",
  "key16": "2vCanQHvxVbthcXtMLE39jiAd6tuvLHUkr2j8nD4GameargTw3tX7292wRZGmCjJjy8B5Qu36wsuRPd4SY1C6aRE",
  "key17": "4YHATW5ZXv7jN6HZKto44329VojqYbKkEgwCKyRQf5PvDFcsZ5RhQUqLanjL2mjFYXqDrkU96ogp9JspQ8NLHF9S",
  "key18": "3VNHWUEyUsZ6QtrEqP1CQJ2qi9M6hXgawMRNdnXACtYRWiUaUmHgv3h4JUaREeyNnHwcpobfx561PrBw67vKkLSm",
  "key19": "VRgjChh7oerxVDEvZyGLtPgTwCxnoyhX8SSU6XfhTUzGrMtmcNRYqgfr7BQePQi55pDrGFrLcc8JQebuqJ3iMWV",
  "key20": "Hb47qAVCSQr8swGxV3gJci6aJ7QLVnCVcZonV6mXfUjhVRJj3azbETFmNzpi5rGQcbNdUn2QMDFdHDyZSorM5j9",
  "key21": "53HZvK6tt2QAsK7YDUjEsL6aUyXVqDcmwUnL8R5n3XgDzMmhS6HpdVxe4jyt69UXcBaH8sgNYombaXaipXJEFfim",
  "key22": "NSEryYSgMHMk2ovZB2Dd3D46q6dJuB7GNhNahB2vMRfPtsV3Hz8qWAHSM7kJiVE7nMugyt5toS8eLEJ24wLpBjv",
  "key23": "2QTGaq7Ks9fM7SY99sqwEt7Ai5cfBAGjERvXV56ZhiqzDzxKZ2bFCfu4eRifsULNha5sGg1t5iB4fzC954zB24ww",
  "key24": "5K7Fu96Lpc7mc2TWkgaafbrtEi4roHroo1Ufgs1vb7sK84YxWSMAMaNXtRmbepLLRgsjrULEx4KhzQhymkEeQJoT",
  "key25": "3oLBRdxkxsw8s1zbR7azymAoNrjaQMPBYnYoXY4vMWfXFrzKYoYcxgZQWLHvxdhDBx67ho7kMsqWraPTdrsnGsdj",
  "key26": "2ZJgGpmP6FS38oyYYmsJiAPJxHZYXeKmaoJpfLLULfGRKu2BrN4r8A2tKfSoh1EVQkZeAuVEDK7pX7Q4kUuSvDE6",
  "key27": "3LoLmxc9UHMuFw1zFNm2jia2FFqsREJtHDyshee22upQTvvfDxwp8vyMj21FQWxaC4jH656WfSR7su3hELRapVu",
  "key28": "QU4TQTJzMHNQD78k87xAFyKnkVdsc1MBjtEuRnTygArt93KBPVy8qWC6xGFpYfBQA98bf4ioBxgjmgFdidaW5cT",
  "key29": "64Lu1dMnJGyoz4Sh3Ze4tGF2ny6SekEq1TzwMMPjrzXqbMjYpZjFQAerEvmfnURfqJ326PnK8wPLium2ckxFuLBz",
  "key30": "23PfhjNyaxc9FppaHWNKbteWXPcUV42jt25ZkCYuNe7mCwjixpnS3RpYS16trJsieD32Tyz4FFo1YuCpxjFraNUJ",
  "key31": "pSiH8zraHWv1Pf81upg7NUXRtYfs4vSNg1HudDWDL5tpHW2zM9QUf1YMgzLKWM8vuh6gtmbpbi8FmnfrMxNaVgs",
  "key32": "4fPokGbturETVuVXCyfoUXaHNYiHqvtZKx8bZ2EPY8QWkkTBs2kJV3swMiT5Hyd98V2HmbwVg37vAXEE8bt95uXg",
  "key33": "PoWEqDn2daJ5NLEmBDGHH2VS31iy838pvrUifx13EagptUnWSHcv1dqcGvtpgmZCumTeLsAxdVNvAsRepzWbP5h",
  "key34": "CRwJLg3ZjSmVfkJ1wTdN4F3FR8EuYLDNPNZyBwbKGag342Yu3eedSdYCyFFLHMKU8kLLzikFQa2ytagecHDC4pK",
  "key35": "w7Jsf6x367RACFWC6doo39FLn1aALpHbwqVg3PJ2YGCvsjpPnBPLoQPFvzxuxcnvUDwXa8ANAFMiqfHazSSdpC9",
  "key36": "4TaG4hiZiDCZoX2Hrs6rWYvtZZZPxaTTYXQhYo63Hic1RVDKE8QV5Wp9iyZ9pRp1LwfgWp8x4E8LQ1QC89UNzerU",
  "key37": "5EHRNbBYjws9u8MPmDaAgF9b5mQQ6UM2YrQupLzA5CLGubbFsxJakXQPPub4Dv9heXxj51g6tRzuXpPZhmwvNHUm",
  "key38": "2QotTD699Y2TA5eimKAVpQuTebuMecCfRLYdUcuPZUzYnbXvQ4bpPeiKkqu3nR8tdp7LUrLy7PVNKC4mMvoQ2atw",
  "key39": "5yfQr2KpcrFDZcmGL1cx3eQT7SiwmmrFTjipnUZu12SqggHUpZAMCJbLN3NL8Ufjr4AjHDaoVJgdjJoVZC59yH5q",
  "key40": "5DBjb4Awr5qqag8DhPs8h43KbG4VEnSYwSFAQjxGWJt1DdyTGokasFyXwpDPJCuAfNdYFKBgUUnzEDAw8Bphkjbr",
  "key41": "89z42iuH2et7ycprz4GYYFWjJAVHs1PaeaguLnWccsAb1dumU29cDYkGjLDcUihMWXG4eGrWn3NyenycEDcaAbx",
  "key42": "4E44B42gN3mGpVRwq8e5vzisvMrWLjFiUWjpMXJo4CkU6LdgvtkxSNrD3SfsUBTGrUDXeJWp13c12THeaG45w3BZ",
  "key43": "5yxERprjQMBoygtf7YqLH2vMVkg2tH1RhiaN6kmn7WkpgrbTqZeyyeUP2FYq9xADXN79hYZK8AFv634gdnqTgWJP",
  "key44": "5NRi4BreGpsXqBmQdb5HVSWC4gp4QJY3eiRAeos5UmoqdbLo2dn9s1wCMAp2CtEVQKvP3ZcR5wCmVZooq7Z4fRJu",
  "key45": "2ha3svsSQACmk1ZJXVfyg93zr6dup5fWvdaAA4Z4wmyZjjdF4qJX9H5QHPWRXTyFXEcPXXWgPeSmpQnjzpAztwTU",
  "key46": "5B3Hns49rh8QAJ4iEF7mKLi8Nfr8AHBnqsemoXVL4qFa1az2PvtsYh2r5sd1Y2ojzuH9sCTPjFsXk4UC5CXRe9Zp",
  "key47": "5nd9M1D7xpcMSzN8jVyk8y2LHPhMBPCPioyPaNqxkmZwJyYXBE9o35JiJVsPbbW3dchWgb62ewY7QfNWMmLkfa7E",
  "key48": "585UJWrDWDcjMVQ8jzH3pr4KcHcFRNUMK36LK17Rrj6sP9cMJ6LtCyCYu8UDUUXsKneEj3U82oUeuDVgsK7g99qV"
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
