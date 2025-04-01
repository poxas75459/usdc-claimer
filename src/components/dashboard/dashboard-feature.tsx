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
    "2L5irGrVHexyW3YZfN27da64iJJQHP3XG5tuzdTJjTpDFvFY3TK7N46NndPK8LdbSkxQxZ71xjnZVTjaLhWD2jZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xde1d6ciFiymo2YRvz2XxmSfTA2RAH1RKN9W4FfdHqnzfiCR128KRkCSu4uJ1F26WJgNcUEhUNaqSePBjwgwQby",
  "key1": "3B8waG8Z2wsRgE3s2k7jRnSCjGd1FvJkuMCrPHA2qFx94wH2kZEBk3UYA5dnFEn5CTzmcqAfN7GMYLcAmYztuDrb",
  "key2": "3AAY9yvdd6pUR6iptB6CbrScRqLpC5YwoA3Dc6FikeftwWmG1eV9AocmrtbXwCBzknKjHFXRHmhUbEmhQwB9iVJU",
  "key3": "2PQ8VNtcrucF4tvhycCq4Uvb3dWLfXLEVxjAGn7YfPMpsAZfSzMZitGLyweJXM8bJ9shouPzmJCfoHyR37W64J9P",
  "key4": "58Hv2dkQx68jpmrGg9hJ8Xb9MKtTSHmm4AriueLhBsDtgLsYiF5ESjFkaGnrtjmnAd76cAbknH2mLj3KHsBhRkEb",
  "key5": "3LzmLrAQp59vtnY5BGbqSQzJN3tNgtq9GjHEkzmRTQTzY2f65EqT6n9tMHcFuGnjXAJWbWQTVSic5oHiQe9JiZ1F",
  "key6": "2JKrE4vXmAygYKEuAooRdLXJ3M4Z7J5vqbUQC12CShYumwrRey469BB8UCWDCrUcKdNHpgz7f11dSbTiKFde7eBY",
  "key7": "34NWmu9ocfQoUNZLk2EtLHdkig2hKS5Lv4FBMFGk9wrHW4veMA428yn66oiXShvxs2NMjV8qNF5LhymKewU7iAru",
  "key8": "3eBj5UTS5oLUy2Baq9yNPXPurbNqeJdDsrpkpHhmB5cRVzxiJ73yumVmq4EdTyVCpvbroyZcq8WMSqRnDh7TeNs4",
  "key9": "3jk5D2Xz7tyzo5poD1WvWedZf83rccu4P1qW7MaYT3uqwMXygPyoBXdmy8BFQgW4yo4QJuUZosoBXN3jZaFvPkdF",
  "key10": "3brRvx3uCHS5JPGJxWt2v7xs5bBDFtN6ENiKJthV8qNDKumhEB9aU1rJoriAvv7gdRhGCkTi2RuTLkT7qkiZTXzB",
  "key11": "3YDukZqFA1cdZMWZPkcuYHiucPRMMz3m1FMd5t4McD5pN71DfFFuRF198tTa5c35YYmm8Sm6vXegUXwLBBrnUt1q",
  "key12": "3qCVMMohZNB7jRZRFBtrwcR6XHRgBLAuiEAEDAd4CDEKahLR8aWsvBVNZX6PoGoHWxsuxN3hKFe5EVPn31yEPeEW",
  "key13": "47P5V7C2NBc2Hc6FPsSVCKqBkZhy1vPqBAn2tTxjYrnTiW9UmZ962BjLiMwBhxbL3zVEVt1vkCqj8vcSRWo618MJ",
  "key14": "67bu6HVsPp2FKbgmBjFnENqj1s3TK12GHVHbgve3d7teXKYvkTvSbkgCi3mkHfcmfvGfpd6wFTRRDHnr78y4XSH2",
  "key15": "27geXjHQvKq95wAz6E6UvXc27wbzUHTgSEha4wLKC1usqrhgoU4BDkTCewzkTZNAxiLodh4gv9xL8DPrgdMgJ9XC",
  "key16": "yBPFxkc1iNB9HgVtaD8fDPUYPuUutj4DEz1YdsKCXEYQveTYAbaS6dTqysKn9BEnxyUMnd7TaJpSWLFN1B7edTn",
  "key17": "3z1Zqkzo69NVu2FxwiBXgnyK3MWatHfodyunKPFbysrMG3yoK1q7WTdojYeyZGhR72NMHeZHoDpoH3nySQNof4dj",
  "key18": "4EZE1B3jJkC3CnVu7S2eCTD8JcCDM5T2xRNUtHBskwp54yKzfzdLnkAXh8ty86ByFxvUK1S8iup6bzuyXVk4yvXF",
  "key19": "5aAS85rKXw5VwUjrgtxRacfDwR2Gwf3J5bR2ssoXjjppkdQMCDggEsMzv2JzPm7Fq3H7xBJ5EZF7ym98AwiPXgSe",
  "key20": "5TNejTn6J31LUVkouTduU3eT3CYmgufJhhgsBQZ41YrToJkjoSRa9ZDFUd4hCM4EQMrv25JUTLxhMzpdeBXVgj51",
  "key21": "5Toq8KMDNsNTQ6xNZQDjavRQWbh16pvcV3epiVy2Xdb42EBqejNt2pyphiKHg4FVRER7shqMfPyoQLUBKRauTACn",
  "key22": "5fgSNrqCjxhvTqhiNV5gVy35gsEMPL5qKewjiDyj2amCMm3re6ZVo8LnfWZkoX7CfQYb4B8wjEHzKSjagcRgA6Zp",
  "key23": "3Ko6vJv3oyYuQA3rYMy6jFafaxasgWYX3wLFJE9uwmTBZzDL31jdbHjWWEAEVhEi1WwJoiEiPanDuGFv6ibPkL39",
  "key24": "41izyQXRKSZiQCBATdhNCc2ESfvYcdodWWJpVGzJwhmhtZjx1BfCZx65naSTbLjM9geMMdEx1Wz53Eh3a8yFF799",
  "key25": "6615bx8ZZDu63UX7TuH9y2Rqku4uZMS5U2vvrfKe81RtT3QQLcih3i7UdtiBdFdymd49gFA9d3XAjJV1fy4w8Cs5",
  "key26": "497YqEJh3N3kpDWcQe9ivh1TBySQBQFKsGcQQZqX2X3G5noQX1GdXdCELoss3yjxMKDrU8v2J8bH6pMwco7VDGPd",
  "key27": "52T9X2UPAZy3ZLHJ6g368XLyExX9LuZuBjE6WwqcK35wj5BviNKbjE41pXgCSZRFmq9UZRsy8CgPk7UBbXeA5JF9",
  "key28": "2Xp2ZVhMeNs95L4agYb82zgxsGMBFCdmhXz3mGYSSmSK2ShG86WkpcWBWd5Zmqb9pBhzzd1uMocf3cS8RayNeVxi",
  "key29": "fesRNRVf9Jw92ypk9MkLfjswFb3crFDsLWoNvUTv9Cnw13iUf9woBRM1zcXPZsYnrWDNrQnt3A2DqZ42k8sLHFm",
  "key30": "66ft8MsRPSjLWgha7S5xR3FFg9SjAdA2mQ2XqnycHEupENCk7S3u3BZm7q3eM1XZMR2BykjSG9ZSL4Cxewe3FRkX",
  "key31": "y5HYXcwQWrD8A4nFWt7626EA6dDQjxKE647AaRp4jPr7Me61PyhFXJZjPrXVUZSgwJec9PKqXiCFE8LF7MjJdWo",
  "key32": "Dc17Rq9X4mH2d9n4m2isj3911EsCoW4h3jHbFr4EYnZsy1HEzUSNabr7QN2xCebddBprJNobwvTgviyF9Rb9chG",
  "key33": "3VQvQoYg4DoQg7ZrE4znWdq2Homo4HdVn48eowitXaNuii3oCyrNJN77eQ39tjijsKU8iaPJhJS6X3B6D1uCzmbR",
  "key34": "4sptniHDHSFMbksneDMgvYXUZgVwr9EvDQSa5xLxWWuMA5QmLLWx7sPqr4cp5jsGbmMeA4H7VMYgjKHpcdGUp9ST",
  "key35": "2kko1wE7kxNx9BWCM66HXigaZg38ZJqDWd1TcjkwZoCJy3tcaYZKhjNNK1FVuK1Cb28YxxtKXAV37GgyXKkXU7kJ",
  "key36": "45VQMYeB5Buc2hfotZVu5ZKiLMCPqHVdPHCJLPecWn2RynSiKfURbWEZZtSPfpFNwN2NuSqL9eUPLkjoTixNk3Hg"
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
