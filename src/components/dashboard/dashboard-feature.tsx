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
    "2Gg84QBqxYBSjTNA5n9zreGiQscKHqwYM3PKKMbaFD1Q8W5kR86nGC8Wvc38eF2w5mgDeZyLSVFxzwoqBZbiDz4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mg3S1VS9sqxwjkPqUBgzRBBKtgQXjANZT39JQboEyf3RZhBaoKZCYu4GKFhcE9DkFrJuCtvzFZtcaWzb5Vatdbs",
  "key1": "36mTfd7d45DzFkm3S367cP89wMhuARUHKaiv5NCkNrtRZVkSG9nxp8NUUdGaAR9iYqwv82sAT9pzYHckbny1yQ9a",
  "key2": "4ePeWMyiqGBMNs1z1883dwPgECP8ViXYp14nwhRKBeZ2ac1FNH9YYMogaYcXruz2LCSCYLXaEcdpUPdZjDroY8GP",
  "key3": "45JFpwrPVjDtDDrj5MNGVUJwk2ezduMkfni3dVwUgN9N5a6Mnfxj5toaDjYp1bN2h1eZmgMeamQ1KHhjPcFRvDia",
  "key4": "5LF3cZTkt3MAfBeaCZHDtGHNp37yT6ZcbcWD7JcJT6wou16qgx7Mnsb9uCYD25x9YNb2HVcYvfPzyTsQVYcLXyA5",
  "key5": "5vL26ZmX7uFpVg5Q6hQaAnNMEhC2136noeALRfSofM5XuT3YGuJmgqPncLZd4pNExNdpJEWopnMy5hGDgpMscKNL",
  "key6": "2DmMvfN4jK9PiZ6gZfPBAC7DoNS4NVfFaR8pSRdVzijxp8URHZPHanPKqiPBFGZGeV8DqBWNnnJDDE3WiYoGAbP9",
  "key7": "2hatAw6f4nAX5XpfUcQ33hCzszs2Jr6TRzWpX8Wx1AYzJPkULMDGE5VFhAj4jn3DVCzFqQGNQeEaFacYa494KUct",
  "key8": "2mBv6KykjaVjioMNgk2uAQWi3vhQSEC5kgmumYF2beKTSQE1WWB4taKJNpv8QSJGBBTx3RfnR74xNesW9WXAPE7u",
  "key9": "5RdGq4Dy7DYFgsonyUCFkmnsY3tLsi1KmsMBs9omyTHCw45sFGpViqNBUsDQT6Ad4EKfnjMt1MrnzzuX4UpD6Pjd",
  "key10": "4wid2ebN2jTcH1qz1jsKzPSMEVJ1AkJsrzGvXJcuGJtZxE82X63pKnic7p376TyYSXN3TUUmWzHkFaRzEtTTifbb",
  "key11": "3YGr3mbiHGsiMANboyQHhDdZkG7ssABxz2aEUgt6aA4taC8HTn8XHb8icf4QjaJBFzYewmJi7Htce1RQUjWZ8GTR",
  "key12": "2QwvdVFtjieE72gLFNm1HrcLe8wwKX5hiLrzwRKBwShnb21Fv1b6Lu8JXisWLjtCBj4EHLnsrw6CXd9jEvEEdi5h",
  "key13": "29P75JSKsz4wTCz379GfRMW14wGByknerf4upwziwos7gHhwkUkfPQNvLp2RpBxo3thMcXZvuvLjbcPYchrEHS1P",
  "key14": "32MbdLBAa5SMCPMyTp1NwDxPbhB41UURywMcmQB5kXDtxvPfuMqzZbEppfeiWoSUUF7EdM8W77bPeAsMHXyt3ndz",
  "key15": "48bDQWbjQFNNoD2n3tAM6syZviqeuTmqSy7FLmqsL9Cj75VCLFTtjT9kHgfYVBMhmsjBJw38ikLdT1Utg5cjrVTd",
  "key16": "TUDcavphZmUdYEt6ubNK8DDD4sstTVm4hAt1WEaNBkgxQYPpLQTty6LZspvLr2Z2Z1nswiNDFZVWkL2gCyaaVeq",
  "key17": "5Uc5UEkeWmhPQ2xxNEdxXSpt2xY2uVTYV38DdmpXBNTZHb3Ga3AXN2QiYERFnndg7prvVhaXm6GdXnbaaG2Vw1x7",
  "key18": "4mXRsVE7Z1aQh8jYcy7HzxNhdmJKMNZXDAzdrQbSxSfUCigaAEE5f6ipPUUXiJnwspqdbHooUQhy3nAZtqofHZU2",
  "key19": "2gXsqWg4yEeVJoiby5Jd8FuaytkLfCrCPAtKoE7w7HwFAteBwNXhSLZ7R8JdRtWWitFx17rhAhK5PdUM95xVj4gg",
  "key20": "5eyxZaVLReThXYmBBN48eSgzNHBbSyipojuukHTyd66y71SrphbcAGddchTTGKnYHehsm4ykRayfjGsnA4jt5SuU",
  "key21": "3qXuGS1CsSWsrgLpjtTSAo4Mbvf88yCwj9JvDZe1br4jTDbZZ7gGQviqPT5HrdzbxFVcuzMD2oh2zwLbCbfZFZqi",
  "key22": "F28kuEQQ8qsjjxgnaXwLCBRpDEnUEFXbNS7ExJQGjSEQobUv51ZZpDiSUjsumDxuqAa9wkXuKAG6fPzFCh3RJ9p",
  "key23": "3GygDvYXLoZgoeUrnovfP2gCWXopLLK7nt7W4R2cypzCmUBkQHMjCFibB3dBo2oL6FNakNj3kzJ9LsmT9U5aSUbt",
  "key24": "4mF85LqP3nT8sG5YMnrUY7XaxTa45WRowEZxL2iVizqSUrffPtSiWMEisEA8hAwEPyzjoR51war66TYbGkDnMrrV",
  "key25": "4KPFVGKQL5Avyo35KBRMM8pZNnZNaMcoU2tyYwgxCxJVowNnpQZWWkRKDADdpruR7kCNVTw62B42Y2d7YZfHvjVq",
  "key26": "5weokVi3y5zvNUuyXkcg88efPVs7EuVL5ocsxec9VbbrpsW63Cajd4k9p9MQv3nPBythfdvPAJ1EqrLRt6GZPuVh",
  "key27": "33e4mNRtrHZFitp6TsDqfr8PtxWAQB5PnDMdNamwWmHAQCob8YFgjt6Qs6fDRagmwMmmSnBBMo6X7MCZD8Q97Tg1",
  "key28": "pvApDjcgc2Urf575tcMsbf2eDemQhdyVtHRcFpkFGosqEUJBA1dBDFkvkLvsFVCUXVv3sGPtMbtP5oHRUJA254o",
  "key29": "48XpXnuD6u4PWj8uvNicVDk9erSVvkD8L9FdCT1DRL4r8fGfdTPNVCxZBT56XZXRnb8FKgBvaLUdR9U6ZGWCU5tt",
  "key30": "2HGqtMWtN5ybdBmuqezLRXpSLKV9ymHu1YKJtZP2z1uanjNAVTkFoaSawr7tRjUcAHW6MyLfnVTjY88LNxHjp6k7",
  "key31": "2jvJLVMGSsZkPScuaJDD8s4HHvHyiEdDCuW7TSGFoYaHx9rQUjm3eszks7RrcVYPJm3p3f8FhJB8MwXSkTDPnms",
  "key32": "2UsetgP1R8WWscwUUsZGXerjSDD4GLcsK2Z6sTMtxKjSPTfcTxz5JAWh1QbtcXfq5kEAuqDxP9oSuqpYwWHYW8ti",
  "key33": "52R1TTe3peXQvHWErBmMo8zXZDJM4EdTzKfHLy1ubpjRt1WxCanAEnVAUwAUekgsLyT2hUj8Ppoh7geYPsxWgjpg",
  "key34": "teLmKRjAU5PLiur3qY4JuzBBQ8qLTh6da7kndx9xsAnBmGyXyFXv7oTPD8YFiZdDEcHZeZMW83ubutTEn6rcT6M",
  "key35": "t5ftqQYN2xv9CS65AXU2xaFT5zL4znviEw9yBYPgWpu7eeUmg959CZMWhEqaYRwpW75sYKxJuDpA6iJBg5kJick",
  "key36": "5wn9FoLDXFtWFzknuSNEbgekTqTqbRFVa9drJYuthmgnDwBRHiX2v6PCSwEkajDJbjAmgXFonimkTL58JNdHM6GN",
  "key37": "2S6iGeSRSqXvgCKeoaonQAmYE5aT2LWafPaArcVvrNtFB4cCKuj6Aw2XjCdnfyvxa4MVb9f8bFmHZQbdnum2g1XH",
  "key38": "2hoW3DdHnYaUc5VroWJoPMdGNHq8QnCaFwgevJR9R7pLRb7b2bYbDBdnNkGniMdLzAeoP1N6qNCD2CDiesu2t14V",
  "key39": "krG6k2BQND84ABhRv7zPT1gt1646SVg1A51j5BxENx18gNck8Dskco1ZTLEYBXAdJFP69nfnKnkaVzKbHYgY6t2",
  "key40": "4HhmXt2fTKnScdDPMdDgcRmZEnta1kjD61sFrABBr8T1HesWwD2gAa3myPjLfueVe4Hc2HTDoGmcW9P3qpWXS6nS",
  "key41": "3PDRe8fNDh2VR9hbaxzMZ4CoSvb68ZSSwPMtcjbTT8ctpK1PFAMdzaUzJW4CLnsJcTG8ohvZDZ9jX8RGkjJQHkLi",
  "key42": "4nopj3LDXzZ63r2tm8fR1n3VcfsvmSkwNTdX1WHxp6aDh6T6hJKbPG3KXuVkRPWovKrURFgfemgUsQUBReVSfzod",
  "key43": "yeR3yyiZy1WKBsFzoHEZCUtq1PTP6Tq69H8Ty1UHubyWKLVKi7F2u2RckQq1RmteXPQkkgKrCQCyYGHWMWYxPDL",
  "key44": "2nodDfFY4P8y2bgMYJXgBfezrrxSre9tmEfcoViznNUVXgvfAr4qjzvxcvVnz89WJMSQJ3YMUuLdawxDvyTDuap8",
  "key45": "xr2UEnVgpdLi7wiPT7m2QJYBce2Eox9KZjksrLobRwN2pt4wLg6uB9Q4kAiSVHQwe48vaMdYhTebWUBzBX9uwss",
  "key46": "34DdCVirhrDbQucedJ6dYfBFhXhonGXYCAKKn7ieiNtKFUkgBJvcFZuQH7BRmpyt1BL7AdMiecNgXxiAfAxCfXf6"
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
