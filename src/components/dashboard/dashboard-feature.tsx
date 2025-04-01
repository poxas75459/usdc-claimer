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
    "aZGvmqxVAvHxKmh3ZZTiPwuAtNrHmpTkasjcDZgoiyFEBcwREfiL7wmM6evt47kF6zrKvqtqPjCtPNMSptRKVer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y38U4VFLo4y9qCruWbHaptbhfsRSDwRi23x6bndWv1TTm9wae2Bjpqf8wVS18nffN3P5SgPtw7QNBSt2MELK3qL",
  "key1": "2TCZfHgFvn5ETHsqnRwWvbeVSazWpWSuuFVemfqA5koXmy4UD535aF1tmtxbSTULpSKdc5ibLvJnGxBCXAQNygFc",
  "key2": "4WDPmhWSdrsyhdzmuurXEwBVCsanis2dW4UPuGPa4akjD8JMedCiXSn3j47HrpApJtbdDXLmKHSKcgDicXN24rQg",
  "key3": "etT8me8Hee2DWhC6guyp6j8DP9fbD4m6Hg4nwhCdBtKugXhMoWGCGEFWNQKi9VkA9ZQp5TsGdoTQi77HLekADCo",
  "key4": "BR1Buq54KXsSyiscMbtcgiVCzxusMgTyH5R551WhYq9ohHwuegyjxKyF55sSzvQD4cUPJsRQzx6gTchcfJC687n",
  "key5": "ieiJV55en1BBErXZsPfFe6cQUxev8c7ecnMuVJyS8UvsS6neW29qcRunv523VvjP37J4sw4ocfsJ2vxCNvDxLKP",
  "key6": "2kAaP2q3ppd3WauMGd8F473VNfgqnTGvLiL8svYFSCynDA5qhN2YPLmDRqABFk86UETdUV7mCxTkLdqmfba8hcNB",
  "key7": "5tf8XTLZyaCZxfX1vtjSBD5g3P9oAGxVWPZWS7TUcMQrBtsSqP67D8wMoMhkwBBvf17khHksuiYGWLaomdviRBfP",
  "key8": "5dNVfWhe433vBLoA93dYeM51Z8Zbt7US7ZeZhDkL18GYUUA5Y4HbwKC9x3H9oQptmvUyMHVTko5u2UxA4jo41G1y",
  "key9": "39Q9LjNsM2MfvV4dhxDG5hwJknqZERQQYYwEAvptvoVAakjqWd8EePh5eCeaT2VU8sDvHxuEmGE7WuPSpY1ZDJvi",
  "key10": "4B1djYFCLZvxD3AzbpYWq8NT1LzGP1h7A5qc9y5UfKEG3qruJvrxAAx8gw6WkNcPKX9cKmAoZGPZJ43xYMZkAvgh",
  "key11": "44YYKcy2JEDDqzkFNA2o1MXHyd9a27LLXbdLMFSHarPWYbLBGpwgzJroHSHDNXF8mizbwePWpgL8Es18noamB7zs",
  "key12": "4CVPmaTLNw1YhgQUKuKTBooXP9S29JQpHnaqmsbGL5x87efa2zcMxmLrx35fsCrKfevwdqNHvWtBVWwSbSDQNV4v",
  "key13": "4crubSLXaTkPDJXj1wptMw1xiUhmGricsVCREPrR2mckW7SouMAKExvoJW2UyBwxLxFpP7xieitFFfJuAR7TgHZA",
  "key14": "3vDFzqJgs7b8Rq5QxfoN18h8xtz9ojbcrnATAHqLgVHcGfEa4h8YxBLTPdn7ovAtpfPhHRHscyQyN7T7pj2san5C",
  "key15": "2wxmrkaq9UPpxCSXqrworgqG5R22EXaU8zy1f7ZAvm6yQsvMByLDR6xcYDLdRGh18ibbcKWbHBiuym5uhRHR35YG",
  "key16": "3X7dxsx7Rmw3TsjsfueJj2mdFWXUL9o9jSLcEJaw3U4aTbHhYyptbH5FCJDS3r7Gob7Q2H9XKhpS8cLApPvtJVxL",
  "key17": "3nUwhDZaBWxAjU9YbSLvE5gfQbtH3zGH3ZezXW1sYTWfCmg2tpy9AizQwP2tCaW3cDbgdJ7VBdeNNLTDD7YDZQtR",
  "key18": "5r3KrJfcYRZMac7yNbRRN4FQvgzHRuR5Wepx5wetLeNBaahXzZQdaH1HtYDgrvMvhSSkKqr5oM5jjor8mb5g3WRJ",
  "key19": "5hQtZdpR7NaZZYLcVqrwjrqU3gNN22XWF6R11YApeV5Do18FsRdCmJSnn4DPMMZnG97itGCdFQts4ZT9pj57aU2T",
  "key20": "4Nb3DeLa5RxUVfYthNCruu49pTTedSKCBe6eJQg76B3hQCBYsSCSzr7Nxz3tRgzhTusYsRixSRu63jaXgGqWuUbu",
  "key21": "5WWfuVcWgYAuaiZxrNQnzLJaz5GYSkNqEqvGspYnHmKTF86hp5RrkDrp4urmALZgoUwwbAov6SxA68ViGxEQEn8",
  "key22": "4xnTVpxWbHw6RqT1WBUi53Vj9xR1aiRCn9Aycscvc5xTjZqb4XMGB2r1JaPZactqjGCguqVXMqVXZtbwLAXqBy9S",
  "key23": "QJtDdtQoyGuvdBajqPvi3jLpgag6VuEYksHg6P6TK38ZBdSXodTFwBqotPoA6cWW2SF4ytiDZBA4dcacMiez3pL",
  "key24": "29H9hkZDzB3iDBA4yNRJrRCafN4p4oUpetf8npppJqJDxLXeAGMk55FXYKaW5kxfK2PvLiHPxaWQEc9Kq73PhBto",
  "key25": "46nDPL3ti9Zvv3UbjVQU2ARdZBHXgqVPkChJGnSiTxtcGp6XfeqAZQBvfWiamezncEiWcnp4ad4eAoAqULZyNqLD",
  "key26": "5P3i7T5dbUSyPwGCQjx7GujL23QkPxTpQpTzigmui2pQ8dmwxk86tGhuANRsLMfg8xEsnME4A1Dv3w1S9QjHRp3j",
  "key27": "57JYPW7JF64aLQUmwe7ajmFLUJDX8agMv7fybwCCbAcLMTQ7v8J6Kfq3UKUKaV38AdYgPyV8yzHXzqxBusKkErut",
  "key28": "oZ5Lm9XPXjNXe6iifqozQWbFFhJVUc5vq64M2fAAeLS4ycdHe2nHjx4mD1yN81VcGkGe15WTzQAixGE1zDewRbP",
  "key29": "BYMAQ574nhRXdt24ADSp67VsRq8oQpo1N7VGvWSHoPthUmaGnnBPBxWgHHWzwXaQTdb3PjhpJ3GHppsKjWsRkwr",
  "key30": "2LD8B9BgvJiW82135V3P1Wvsc6aijZMuSfMUanpUk4pAkgpT59UcprMmkQ1JcU9km3N8zFFBzdjHLQmVKDg9Z7bi",
  "key31": "5ZxAv8qioEWK8hGWJyW7rkqDgRRq8kYZ9fXhdNw32btAZfEFHJWHWE7oZi7qG6QUSZCByY3otvMjTUJCXB2KXkjJ",
  "key32": "4FBGC2KvnL3e8onMpxi9FFvs6ey6Se3ouxCWkWxnpYBGHiQn6Uy8TjanURgEw1L7wcBxBHoNCagoiuWBHL8hQJCk",
  "key33": "39tybsVwLig1NxsfdoGX992rWevh61Satpx9Md25hkR7DbbZ7HdnZRdZQYk9jZAMJVsg1TYr3n3poBuvJ7ZEPkbU",
  "key34": "4BC5fbsyZoqaQgPgeFNTis5DxkLLsmpdBqdgZdshydEchg4fi9r93bAxw4M5NppgRbXGYmqAvQtFnLyNw4ib2Sg4",
  "key35": "5CmWE8GmQCrFnZaLjeMTXDwQ5YaoDrSUo9ivmh4516JEjZMv8LyoQmEcE1oiMPhKX5QNTn7qbEABeNY56DtzFU7D",
  "key36": "2JhsPynbR1CSfNwJLhJsj9wo6x8ZXiTDiuWfLAykN99AYGiD2x4aiFTkr3JbeGXYgwdsGgr1oHVZeYgwKCHdggjk",
  "key37": "5QtymT5sjQGgXeB4UMhxmtexeqSXwFtv86Vr2AAFXfbotSubCQtck18MJyuMU1sowTYCqEnDkkugStWPgKjgGexM",
  "key38": "PPKPiEPeKwMXqhJYNHwZSB8yK9j95P1wgXg6AgFUhtC3JG615FXyRdUQKwfU5pEz5MyfEXJUChT3sVajYPVHfom",
  "key39": "5AAtBJg7YXYjmMush5rpNkyyjHhMG2AhGNCYrgriLr1nKKfRzXjS1fZ2Wy6ufnYNLfJUHxmwsGqxbwWDKeAc5SZc",
  "key40": "2TjzqwWaeFoeJoiXMmzmFsogBeejuuDgU4DpubmxbMLaHqGFRS8s2mgHU6eDY2zpotaCg3QrVUjLKUTxVZkHhQPw",
  "key41": "4MQMb7c2oPRLf7cJJAGHyxwTEvZNMLwMSvKHXwSYouXEoHxnPKFpqvfhnCqWW7z8L836Ch5nGUpv89pyGayFFj2M",
  "key42": "3VkaHMn8DLi3REP1hPTJXcPJMeB2fj9D42ifaYWbENAbjzoCx3iJRDFZYBzP2mYMFrBzMBmSLZsMVZu68Da1fqi9",
  "key43": "2b53EoGx25MpZStGaMRcxMiiphxPvTpBeHx7ew4qfb4Xu4uzqjrtspYcYTvRYVFeVAfCitpPdmgo2Cq6aFxq4bK8",
  "key44": "3L2XxCDq5P1JVYHYYRV7AR9y79FEH12afdb9g5i37HqwYo6bTiMpayVKz3RVBi9p2UgLDwjSWufBLPiDNoLgzftm",
  "key45": "2Fwpi8jNjYbPy94kKaN6BKXU6twkVPoTavvxqof2hfAJMaW8WRhQr9K6veP9DUapk6on6xX4utmWUcg4ScGWX26z",
  "key46": "3oMQsoZU7g7NkYdf7Ky1Ua9y6NZxTgzM3XEbraBGSpbqVr9nfVNcThiBv46hmpQapNEHrCg2ZXBHEQJVXWdCQ6h8",
  "key47": "4HWUgvzpWRW1EZupa5vvvV86gPmjWQbsysBKeWQufdnuaCnyyavB2iQMHeCv1ebbiEryY1UJKDjP2dtTvhRdY1g8",
  "key48": "29qqhU7YPUMEa6cwa1x58ANuhbfYcVdLoRYyJiBG3jssCDXCDEL8sdZaJUu9CW6uk5rffrWmXeeJdfitZRzYbNL5"
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
