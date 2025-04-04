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
    "3LStTmNzb9AC3yYGrbQ2KAe2aXvaNPk5iyn6oNvyQf1dMXjfNb9P8zFL1MWqh3MxxdMTMzwmxwzgRnW235BmUTeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZiYwzEA4yHrg62WV5ELV5HMcBEjZidzhQaYCida12CPvaKg4L6Hrvd5H2Hnk3S7frrnWHfYk3Zw1xKNLta5yLv",
  "key1": "4qwKMnVxgbbhTpG3Y4PkS1v65VcaV3DM7i9GGSMt72oSurdh1Gh34qFXQ9H4CbwnBp3KbkahkzZjz44VivVLWyHg",
  "key2": "2UAjjNVEM6D8dQhE3g4SZ9Z2Z35T75uAYCDYCHPwuvVbZ6QmGYA1DTDZs67tqvmRBYsCHkgKDs1fTJGY4CAUGjcf",
  "key3": "bqycfL39nZkqqYxjXbhJwz3WMsEGUhNQ5Y2PcsouDod16MdwJzaWvGUWRaibL6beMh99ucWvTdFg6eQdgd5MW8V",
  "key4": "zGrVqxwNdU6Hys8pVsiwobGk6tpmgDWpuiWYweLpavLUoudzMM36GgquKetHeTr9xPGciyeyMUnAcScWWMbJoFk",
  "key5": "2ojjLzcGhmLs2LwKjiXLiQvf9R4JZKXt8nykhfQwApPwx7jaPgUMBWj8TiaV3zmJpBAHw2XNSH2w78JcrrEAmmZ8",
  "key6": "3sqHWyR6dE3VZSPt88XtehTHfRfLXTCMRzC76Ezn9QfdKwcnbxL7n5hXcq5oR15rAEKvYLzUxLymn8f9xqB87TV",
  "key7": "31AooBmHycVcjqUP24gWd13BJZdTpx6iEZd6dgoQgQzR62giuc4f1e5AcCXwAo6imGdyoB973R7FpFRDTX8Ffv6K",
  "key8": "2ZSgv8ynGvLcJWUQNVyuQmMRrFXGTvVsXv8uUES2aGsExro8jBEJKaQZtHLQHy4kxcwtywBFdDxDrETNDRoyUHJh",
  "key9": "67m1QQnaYcTnYkuTKoEvzNvaEfxhxxj6iGnQa8cwNzXiwJG8bu7nmoffmEwpBhEaQ6UCzWerUzrwPQXE76w5grVT",
  "key10": "5C6rKyumEwPUAx7FiKP9aUiQbdFAwQgGwx9sgSoaEkGBDUrJJfmuM2HznKNFrAQ4zW6AanAG2kdprQgKsJ5SHSfV",
  "key11": "5hgfakDhBVbVs2bNTuJzKREvfvD1fNsArTMx1UuDxM9V482HFtSDSmDT4AGYus2CFTd9GFghrNsdHzUNBFGBBMty",
  "key12": "66pqgRJ7HFo6p9S3GvkeSQmodsKz6uBkrkVjhMgPvB6FTnmGZk9tH9myojhQYyGCVeFqSCjMzGArN6BfDQQDBzrk",
  "key13": "5pexRAjyHv9e3kZ4doS4Whu1cBMexjrtSmH45139pyA5413eps6LW9Nyjvz6hsfGLQtuts39SYTXVEvwxoXrvrXn",
  "key14": "5cm1xkD2UsWs7mc7JydMUXwHTsLV7xKkbwe3ZThj2F5nSGFv4em5ft5XiSJqcg2Qtr9v5KiBrfBqJ4Jk9kGjY9Vg",
  "key15": "4fqpQWaDc5w1jbBaBvqmGVjffoHByWY8oGXPHpey8eGNATmkCtN49SctXMyA7CkeG5FVVDz2aEovTYvb6G56ZQT2",
  "key16": "2XC2eD85GiXHvN2kNissFBSDnSXJ7YeU6gHH8oqqeXfjkKrrtz8TsDtZAtzaC2r7Tdk2w2U4Ekqv9bMUL4MsfoD1",
  "key17": "5jye1nqLvcpoAaatWMeptCkydY1mLHCH1hS2ZJBnwH5UcsgoCgLzEG2a6rWm3X9ZBMEhtKKvL4EaYBMEsEccuFXN",
  "key18": "4q9rrdKRC33JQE2pxpSH1PKJNi8aHK1tkmjZ5KwSGN839PAo3PAGN6hNCYyRogCji25EsNTSaBCjELd2DfP5DWwF",
  "key19": "4hQwLGzF5nS9eosv2FNXEMoYRw3ZEKTWHxDDJa5SrtxcvHEPQuM2anh74jwuo5fL4EsVCH7gdRHm5FJxmK52t7TK",
  "key20": "CXNFihQoHjxgAjHnscwbsLormuVWUueQQ9TKrgt5wJYMb8d7ND8fiEumVksuFoNfb1W5bB2qzEP4yjo6BmopnKW",
  "key21": "4r7eAZf63CpdTkhyamVrEuNeWTmj6WF5D3v4FL5kismHAryUmFskGj2bCfEVRNUcdSXYVHfLMvEtB6uaTyZpTsq2",
  "key22": "5uEjA982T6GEz5m7d1pX5dawozH5mVw3kt7HpeyU4B6dgj3eo83JmXuUECgfM44Fyt3NZ1UwwTWgEQmJkwtqpbiq",
  "key23": "5LPKo3Vgr96e96CoEfasbrp6DNLidG5gJn1pUcNVXr63JYaWdrGoVEFyNcXtBjEzcwx5mLfU4YQ5KYWchzf5sn2w",
  "key24": "3VAyxJsNjwRosNfMWasVjzyxRwRCRHmCnbhVvopJsh1JTdMrQ6gYb1rATKmugZ1f1xieypPkc4ziJFZZm3xe7T5D",
  "key25": "e7AwHwHonWmx7P45Hzc6uPPRPPBV5TYspxbjC5nj22SAKTrsraVMQqv7GLPYeZRXE1yUHa5hWaWZ6qhpXeHJcrV",
  "key26": "2DdZg285WU54duU1kJezuc33s4SwZ45eNw3qc4czkF1CmmwS14LCoULCZBLu4dzRq4oTq1XiND8zhoUB5BiVhoQQ",
  "key27": "39HPksdN6CErGBJPWCy9iWuCSGSr2rg8zVmzemqGXF7eLqoFvsxkpu2gnWFZYGKUS3xfUhyr5a8eTJdLgrUJptRh",
  "key28": "2rKtCbYECiGRfNiq7cPrCWB5yFe2r9ED8MDiZPWP5SPuoc8r4AuNcjR9uCayQ82EZiRFqU1NTfrL5AbRVGoj5S9r",
  "key29": "34svo1ZafeA81sGeYZawQZ5SNNtLkZeRbic3c9z4tFxq72HvYYfukcxKaavVLWNtJKiRKoiWhQ1h51Y2acR1nbaZ",
  "key30": "4rVYdi7Lgz8KuxHDawFPr8bHXvJ3J4HuixPyGQoQVJ9ehFxWvq9wGygrAuN81AgU5pqcGyCPFfNU1reuRugGUTuW",
  "key31": "RdkHDSDhcT3VM3L3Rb2dfPKGNLrP2JHWUZsWE1dUvqv4FANJv6xkhxN9K4paxNTXCkE2z9ST2Vqq3cHkawcKSAi",
  "key32": "4bMay1rkLnuHDMQUHF9XJwSZ5FQGGNLigkWpLk2MsxCAzViVunUT13KEo8TArDUZC36nd5sUbq59CBYdKBV8JXMA",
  "key33": "5t9mfjdjQ91g2w2GoimFoqSerpefCRjFiXFXPpQA41RwPZYm3PUq1oeGKNUbE342DXp4LAPCmE5Y3WNvFwGgNGXr",
  "key34": "1zv6iVHTd45xQw3pSsdJmfVqiu45dj3GyXxbLSNzdt3R2ECoYtJVutBtLVy6Z5n2wJqjgX3Zuqx3vbYWHadHyJK",
  "key35": "4EsuAp4Cr1Kekm4gaNqLyYshCmbkq7YmgEXRsBQGzxq1oid4iESUpxxAFx5SbHDZ8ow1fECywUxbqfYU2SckiYBb",
  "key36": "cxunJGstu7s5XjCZ8nvyqHpXsz2HUey4QmPZLPUjzexkvJdTHEgm3AK78C2SScaSHNF2jR7pbfnVVqKogWBFEos",
  "key37": "NGMucyj4MrejPXPNUtnirLvTt6tZsRqsNiQDBFNVqReoyZmmWYfBzJb4RF3LaKfJzmNf1pC5yr9SPX4CNJn7QRJ",
  "key38": "3wSTYzNGPV7Mpr5unuRBMZYCbftWUoTMqZh2kaEXV8Ta8UD92jfThnGmPCvDYQFfqU2C9NeSDcsEsif1SxdQsSXk",
  "key39": "GponfuWLpifwLDNa1b7QPwarZ4npykLd4KWe7cdCdqQyD3K8V8CY4mJXRdCXGVvA6HsLYZmm3Ku3uXDMSKQ52sU",
  "key40": "2R7N97yLyDE1sH4h4d4hFiKDn9sDYp3M3iHv2nD8JTfZPZaVsQSfYwbHEgajpLPewfr4zw5p9k4MeujDjLeG2P7p",
  "key41": "4r4Mj6oj4AU7w1NfeLWB8YM9Dyvn5EPSR6Y9qH1VQBF1EK9rhqovSfS5pqPT9WxsxMerYYAXewqrpPp2kTJ8G2jJ",
  "key42": "88RqhPKKxXcSNok6mzbyvvvBTuX6rKmrFrt341RCG8HY8Yjs3sSVa36uRMiZsgcAPNzSP3zTuE4dewPc3WptK7x",
  "key43": "3E3tee6Fk46p491dom2yMzp22EW3W8rsWMePtFcqPdRYgUrJYQcbkxwADLwjq3Fw6foqtoxCQB2RS4J15Pstrm2Q",
  "key44": "5wE7E24XUpHZqJyxuT9x43Jrgy41ZWRM7oykVYsEnPQGYU63dxcXbFosa3f4mhHWdTP6cZS4knsC566z2H2h79TA",
  "key45": "3k3TCmKdTn7dXNUih8ZYktjxhwhea3SVkrctb3M5ofaV4BcDaTEQXrBqLxVKF82EBiFJEKZKouGebDKCb72QA2jG",
  "key46": "qD7gj6a1xCxrRnwUf11ZJ2gcHE9QXgmAkoVfpzYK86NaiwoZZL66HoMt22u9DD4sUsTTdBTvPwwjS4KJReAnqhf"
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
