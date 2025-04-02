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
    "2kVGHDgqdf6sQuR1VjLfRhjzKtLEqpoazwZWSDyz52dd78qjsq8E1cHBRfCLQfsLJttTKNySAGUNqkFaGXLKWRgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EjooF1ZCcHo6o18rX33KiqVpVCHBQVifCDFhhe27iroWvafSxgS4HuYZ85akfhvrP6RUJg1AZ6tYkRvSKSaBanJ",
  "key1": "5Wpy9mGd8SdGMCFqwcyQubD5PadAhBzFDiC4NLCubzsRvXgUFAiqn81ckTjpGFXmpqbxq4yvXHhcsQQ4GFgajegh",
  "key2": "4NRoWDVbSc8dMkaJ7FemL9FFTKBQVz7vZdJRw8pppsATwCSqaBfYnCrTN7NCYiRdxiezQUzPNdxcVTXWaUV9T4R",
  "key3": "3tyJ4Zr2qBAf3JScn2EEGJX53scE9gExtQae8r61JjhyzVeFwZvejsVoSYe6NMgxYu4xAwHHJW4B4wNjrrHuxwp5",
  "key4": "5DQRV4Boi48NsoLFM28v8cpxtvpCbhVTE7dRVxKhHD8v6RLZDNAa24cpcgz5c74W6rj5Ci2S4S1LebqMGK8poRsi",
  "key5": "Be37DzNw5icjxR4ULzdmBfuTroKuv8YqbMVc6TN7ajDxZAouvRzSF1fJVEUmFdVMNLSWMwnCiUD32kjicbYGBsJ",
  "key6": "5oaUaerx9dZGsVeFR3ZMRbuuWTjdPH47KffF1bHpautKhjVGiRbyrqnTy1LyW7ed8nwkcoobrmqNUyJzDVZmVt8q",
  "key7": "3m2Qf2YewVGuZPp97V7eMUjXyWGpSiM4WpK22YwogmpJASxj1LsuMmcLHPebJyxPTcH4W5nwMfroCLVYfgCQoV3Y",
  "key8": "44BugLu4Z5EiLZYSyQwcmkos6MxjQnF9ngHRNm3AvLDSoyTPsHg7ry45SW67Dg8o7MnqYmMs9Cq7rve6BjcMVYMV",
  "key9": "dApynMVdkdhKZbq8a7YSNsg7bmbn8XmRs6bTYcLUR775vWkdDEgJqwvqbeUMmppkeBAQ1TGN7WL6J3SCq1J2eh1",
  "key10": "2Lb9sRZedp67oVhNFyGwaLoKo3fFtnivb7SisPoDQeuYYt7AjR6rdAACprQRB9bRqKtbWFxjDvX3WuHzQNjdBH3A",
  "key11": "rgRLfYNCxAMj1E3yHKpygidpfNhvBrmbo6xa4MKTPaEuPS6H9M4CDAdinwMCSRtRPYKhzRLbP1n6WpjKnP7JuQ6",
  "key12": "3Q1hGcLeVkLUwxqevRNEC3K8BfniJPkYBiQC8JKSEAK25MtjUQN8ab8nVnJj6DfFuaeacpLiMKrTvsYS3cGLWccq",
  "key13": "5kenxFFsNH5zTZQaFychxH8RgFJFBmwaDUmdJP7SQodb2haVhRSSUkj4ZFvY5nqxysMykjgwndQm55g5TtPaebHn",
  "key14": "5GQpaXTnCvpJ1mHu4DGSNoKTfgDRLchNjaYg4tAMZU2TcnunemcL15cddaGZBsAufah68bgyb8mVSoAErvLc8Qiz",
  "key15": "53YNGjspjVCGBAixaTUmUqiNk8ALTqTX247Vz1Ri4GP5UzPBCEezz453KSTfzLhLDAQGd6SjKVuHw6ihr1sfuo6C",
  "key16": "3hLCmsUtt4QghGNSXam7b6X7ttYe5AzLcmQ86jFwMFq1EME67MAHbWtxKDabuES3AqG3BPdP8fxRwt37mLTzYgTo",
  "key17": "3P4upnSxnDvRd3CXLYHPpBmsydxBGLeG8NJqXsKTdTQcsbNgHzeM4roKWVj7eapiN8BbZ4sXeqwEEfPZmSiYmJtX",
  "key18": "5BVeTqzCwPFJ1HBpMXUXbEwBVzGTcFff5qv1YWAjNDLBnBthMkmgY5Xd8f8c8pZWEPTowE9c9HQPkCiaVF11born",
  "key19": "e9myqc7MVdf6eu8LTMgbxZfCegQCC4dMRrp2T4nkh95N31p7uqiT8Lnh4pATjbcHDe8s2TsRcTNjRMviEV48TB7",
  "key20": "3VSe8DyGpALJivsT8sdxnXnVcBWzQ7NTQ1Qj14gvDPZNS43nJQkB5WE9X1MSNCx2NKt6oyqFgius7NYFDVeMH6zQ",
  "key21": "63YoQBySoyARwjUQtmpuzgn6uKjAPb25fVZu35QwkycBF4hmX4dccBTwWiz7K9AbmUD2WCMvk1H56Fy276tT3oGA",
  "key22": "5jrgBp1ggyAuiyzAxTLfyBVBhQWAJ9zZPvTrp8PxVHq4wrsAvuWUntx1aURzxFAYtsu3EDGShBSitCaGzrCrzTps",
  "key23": "B431k2CxeyDRZUNfnirPjdpT1Hdi4nFjSBiKFC4Y6pcPDbdxe8jD6byYzBDZRj8VH2jqDAxSNZV6UzvS75ySh7Y",
  "key24": "5q1qvXPrnTd8hzZi8qk7sMXvJ3JPNT2f7yPX6bcqycb7sDWFVgxASbtMFwdmFLhbeoGarJarUKGfiKjyLfHdqq3h",
  "key25": "2b9mVBc2Guq4MvJvDqfajgGvT9nPKhCc5Nm9mjdKb6sdzCLr3bHwqdjg63vgdMy6HusZ4mPDHhx46SRbfFf22pUT",
  "key26": "5zYev473pkMBK1Yiprk6dqdwYBjFMiMqDCv6y5JRHVi8LZBYePKVdiA64ryHTdniWTC1iBte8M91CDDKoqSyS2hM",
  "key27": "4Hx9Jr6q4Xdz449wbwVwuwYZbQjkqawN6cdM3oST669xRCiD9aRoHX7PBvNzufcsT2Bt2ATHfEpEBZVPx5weCzYX",
  "key28": "kszBuESd8EBf6TNqriVRxnkbGqsybdAFB2hGRRQi6DoC3mNVgv3YaU7rLaaNPa6xM2L1TuH8R8oeXv3XrKGt1D4",
  "key29": "5mQEUPwSsmUakrVap4Af1sBvDDQWJgWAP1jYuz7ib7LP6kxoGH9dKeH7bB3wY5UVTMxrP8QjJr7WHXU1SXK7ndsT",
  "key30": "41fVrdXGCgbnFKJKb7y1b8tY6DecVVTRpi6Af3ai8mV2GBSXPpwcyUvsT1Gou8YR3owpz2DCni4esGiUir34UeBN",
  "key31": "2P6Zx7ZQxbzmkS4Rt2AnBJvbjC47BNetUfi9up3icT1jC4mbK8NpraFVhVLBr8qRALVvybosEiWif2apdkgKPaPj",
  "key32": "3XgDrLKoN63UPMcrbG5kLXjwEBWpLaXvcgqJqdyfp7Dmp2EhSTUzosGWvFEkcpEVWdwyHEmPXRyUX6x7aik7mDX",
  "key33": "5HGcN4BvrYWMLXpZk7CGDcNveLqt6LAA9LV4RNk8N6g3KunWCmoBDQwTLsciwdoFWspgUT8KGAw9hkcBp7GhiUKo",
  "key34": "2j7BQp1mKKnvUjTs9v8LC4mrkBDUohRKrHmDKVt9BMpWJA535muTcwtdGCUXspAK81jRp7GfuwDgk2zgsxgd8DtN",
  "key35": "2Q5aKY3gU2FRzAwejHTYJtCTcUNFBjFPk3C2rA6rgmiwgGmNNBJEjkeMcKmso1A9BcTaRxUADXJ1ULBuaSfgqDHR",
  "key36": "CS1jajk76V8RaRL4bksB8A5ZPm7okZndx6mJRaJ2jVvghjWuJHWZq4GH75qC4WkQEnJpbNqrXtEbtFEvRArgum2",
  "key37": "2HgQHPDWVykADytR9Tj78gkCzaT2nrAPDgTFPuKY2KZLJPesQfaqMaYXynNGw2ds39wddD7kjttpfZH32d6ZeLsY",
  "key38": "5N8LJmEuv8KSprYT1SUsipzcLwdMkgrS52moFCdLT1wTqqTQkHJRVqiLL5cQYa7mR1F4PqzJ42GqEx3vYVCRCLYC",
  "key39": "axuPr96S8jqn1gumXVU8WV9TQ5QwGbmM42B9DbWJvcxnzS6tQJK3NWyGFCjnhQgdrTWGW7JnYDXvfDpcWqqtqpm",
  "key40": "4cLNeTU5sBNjn21VeTFzqrGnMSExFU9M2RN6pMbVtCfxnLv81Dcii92ng3pnvdJ6RiVEzJwvRV5be1d4ZBWH5iDD",
  "key41": "54jZB9kQ9ocVVGZeMFwfMLZZrJbBtR58vWTre4srRWJuBQpSinSGnqNQXeGBSSd86PJ5qhQwGHHji5X7otCEmRHs",
  "key42": "26ShosuN1UWs41LEj7udx35HbiuXxMXbEnixoeShYtTN14dEHi3HHBXdADj545pJSBNg5Wvm6KnFFsDpMXgVrbsv",
  "key43": "3T6cJyeiv2ZLJY8m21Ezu9rzUpGFdZhjND118767eCCX69WEz7sStq2S92oUEhqqGjr1iewaMhdoQLMYKpL4U7yw",
  "key44": "5AYa6QsRUEZMATZHeuMEEDqhjhRmjwgnjAQCJA9H9G4mtHW2FX2eSm82qNFYHKdj46DHhMvVtTZ2g34ZsCxwfRC",
  "key45": "5w3FY64m4b495bokeNbtffCsX7kp9Vq6QfrVoCfEvXEK6YC1GZdNbqDBG3LTthRTzCeyS4LwXP7pLMmMPmnLieCt",
  "key46": "2WwoKW5xbRrfw4xDFi6K7RaubFAVTv5tYMHHpGNF5afc6S6xX5bAn3nZBULQZEuZWM8z5PsAmhFNuMZTA98jrHnL",
  "key47": "2P9SFxxe8QJj6jUAXRqi3DtjWFfVHCpytCKgJQiF7CFSoQ1jh7vxCTp8iz32dy5V8oUV46QSUN534vpvZn7axeC"
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
