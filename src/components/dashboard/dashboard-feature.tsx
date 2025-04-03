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
    "2kwChdvnPk7dr5HCFftAauJCPMN1EiABF8bNtMZuevvTZyvzMXMRswrmyN1y7Fg9nH7A9iaBFqBjuEAZXjJZdjxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnwj6qv6EM3opLJWNLpBrErmB3xN1krUpCiVXvfmyuZy3WtUSkFgucSU6huCWob9VdL1zG1dmo9MHhHnhge3qwx",
  "key1": "JNpk4v5BfZ7EcASXK3f3h8AnpRdJKz7PZKW79gVic6VeExG4RWPuPgGrm43Trvzzrb8yDFRidPMGgdHt5QjPuAc",
  "key2": "mKZSKSWMUqpF5PrWZNmEm26KVsUfRimQhXjktb3FUpPXyaCKH2Za7z91kFdY9cuaayJgHs7YJnArJ4X6JhhiURV",
  "key3": "4YXVSmRCVBRAvMBTD1WtbkNwHRHKK1Ua5r5DrFN7kNuxBisBF74e2newSXL4smknSyJZjE3MkuTj7CkSm7NLTcsy",
  "key4": "2fxMFs5c9tAsN6kzcEPhQqfJy4T3eozQcDp6QavBTPXLnT33bWkQQbQtgjke7K5dZmBdB5q8vX9CyVLrMguuzFAf",
  "key5": "4DYVJ6wNCzirh4wbjYPsP1aTa3a5sDjAjbWQVHJFffoVjJrB8Q3hzvNoppTE5Ux7GDD7iqMzTF7FGed6AucfuLzZ",
  "key6": "RUwj3hLAJqGx2v7sKkPFgexfVxqR4wi9pJY3D71bgV465gykF3J8C9k5yvyLiTLVZmK9DsHhDZz2sfJtbL6eSF7",
  "key7": "c1w7fmNMp46b1pT5cg6xa1Prvr8Qm7wgHZ12PnZXBQEhRfaYAd2noE3G9BxRMUXwkxoZw2Q5DohDnsC7SD4pHjr",
  "key8": "5kby6jmVDkzPWWZBgmz5YsXTYMNAEmuvvBiTZcxYWPDWGgCzgQqkTC3eNZTPH6xpp1VpEHHVt6ZoVppttQfQc6Zt",
  "key9": "idQGAQ7yJQmr6oGoM7RCwyJciXBw4jvKuYjHg6upDsoQUED8qGyPPNwRbuM6obEq72jf3WSBJ1g9pfHz681FaGt",
  "key10": "58mF57JSRwK1vCTWZZBowmRzPvn4G93nRYqvmZx6fJwUWUhJJgFifiUDVrVnakxekHAKLufMyUdbj9A7neHbSCgU",
  "key11": "4CrS6GqJcWvs8PfFqZMk5wEbsmRX5YtGqec1Y76fPe7NeK16tEZyQjTYvTDvPrEvNCmQEv2w2QCdCHBw5GQvaRdB",
  "key12": "2JiRexBZ4Kf6GWp8G35rn21Zf8aTVdZPg9LHUMxdgPtEHd8vbPyPX886gFwa5if4AzGa4S4XZnUMKg5CHHpSamrU",
  "key13": "45CYoTaN3RJvZ2GMy15XFQGM2JMvPUUtNeWMv4HoyfqTqCYPxGNxxjBQxqAML8JYpP7jpd8X8tA1g4H99gnX4iho",
  "key14": "yRUSVUT5fXhYyBsisLQksRetWpBENEnLiNZU3cN1Q4RRdxWtEn4674wURviLNsAZf7Lg8feFbfxhJTmjSmXUGHJ",
  "key15": "2qetMf6aSYuJT3KczN5paazpjBkkcM33pza5imS4NUEbfeb1fCJnLk2Pic2fvWPUaQnQ4h6sVxu71mSjKWAYZEU7",
  "key16": "2pyqcnaBhjGH9wgtZLD9CrzfBnf5wLaTopHhkorC3kuSJ5Xak8PPa5c1781bab1WHA5VHW6HEjpQYR1pyqtrzkGP",
  "key17": "kPAogv8f732P24bgQpa9AXooGzNgSFibyqqHQQgt6MtipN4cfBRLJ1omcFmj9jktGxKNaM746tpNyzBH5YZfpqz",
  "key18": "2dynHdsN8fXDdt8PX7pXnJUt5g15YV6yrNzJZMfPS7kYLfQqRRsJ392RyKcVrEiEYF1J83R1sQ2Res2y8nxS2Du5",
  "key19": "LzXCPA5BYyN6fuk5WtEq1WNCfSfhiCc6Xc7qEhHHha8nh4kofyUuPKHJGVXrgQcf6kn22BNTRyVSLt7vGaQ7TtT",
  "key20": "JXK8THP2NELiD8rphKCmW73vn6iXbAnpj8UKUWxWJRUS7V6YPdrTZ8B6GXsd7sd5apPnUrFtkiCayTkx1399tfa",
  "key21": "2mpL2CSKHnn2KLV6PPRpaWomk1ovF5BxghQQdbGVpuv2ZKHWeFwfWTDEbmwWPEd8rfBDRe7q9f9PhCJL7Uq6Fomw",
  "key22": "2CgSJ4mdVYJhy3WJPGxMBpc3sGXrxyuSwBR7jLupMHvd2ckm2XJ4QocKL4ogVvHyJByMpYEzMbmBrLsTU61LtsVL",
  "key23": "42Pf5FdEevBz4oY7cPohPU36hRqNx24g2QPM7nmrJXFxSZ9X7M31uRvVdUbXFgENzkNfNviZeJfLq5VXZxdY7bYX",
  "key24": "2wMBHc675DyFYMtGZiTQjdaZ3PtK7D9phah57bkgV6nqFFw8qCrML7meePBAeeeTkNfry7FkmawR4Eoc35KmwvaP",
  "key25": "4BbG53tuUnvyBxAqRvCzVkcEu2upz39G4Qe42bMqFRnTjKc25rA3TcEVF1SLvfEdFeZUCdNPY8me5KrMoftSUjX3",
  "key26": "4aYCAEWHRwrWwUZHB3s4zWEHrMU4UxwZRSH11DMGZ5BZoE4JyCCenprRhfuitWiZzAncFsSHokqyr1JLj5VEcwKJ",
  "key27": "52X6ubbsBJaGQX2qBhXsCfV66MA2GLjh1dMSzbZyanNWApb2FWMHb6gPYLSZWABfb9XSSb1zWVy4oFPBt69LpHDa",
  "key28": "5gnjn3gVPKHuToSJfd1nuWhk1VV8Wz4sv9y34erosQPuXkDhdAmb368Cm4QFrwxaWJgGhULN7URAoEFFqRYRL5WT",
  "key29": "5DTkeCve6KxwttczpNW8wQqaZgPrizysYaAE3TH7pj2GGAnUkg92qqmn2k4NBKbFDoseQz3S8AkshXVSvFcGSZYW",
  "key30": "41k5iJJuXMHEawAYLeZDJn1XsWGBpxXf1SnkLgcaeBHasjZo1vD5tVWJzvgedERK6dpcoYRU4V9NidcpFXs5KBRZ",
  "key31": "35d5TEEQsXYD8RSa2DnNiSHT518wg8iWMAh9b6XgMKKCuHuSDThqkZtjF8sLoYh1gyRNove7C8524D1QJ18w7bUQ",
  "key32": "5wdmEGDrpwfZiZwRK4tiTUV3p5f4U68LC3LWgichLpYtCmK38o4wTaTebuXLJHeNnSz3GKasWd3gq6i46S33v5sg",
  "key33": "U2GYxoyxzFWzgBsN9wvQC7AQVTfMLK6SUKLJGaWvQvK2RvnsMsGQPVPCUPyEUw1Q8QyRfGAy8cS7kLhBVsJ67J1",
  "key34": "59t2C4cYxYFevXRbpduDU9rHLvpDuz5gK1J6tyrXu7HGsekDirDmnrwB94zgarYfu6FByC13cQRYRRS9M5s9PFUa",
  "key35": "4DQD2dXNUTZqMbibKzX7GN34X7g3PAMVvPqXgJySWepA6ceWMp2TsoFBo5gpNsoypSAKp5X2AGHjgmiiNhsJhLEY",
  "key36": "56v9Ym1Jk2tn3eG2yXR4V97zZBX4qYB25GxYWEaZAWnQXKVW9dK4D55Dmxud484T8FS6sabrM2aBNx1nbAoVVFz9",
  "key37": "3TqtFTX6Qi8EHcesVLeRnRuxhXi8r2U71gUTu8LfaWqV6jPhVydMnvPaRwjNPpWw2myoiiVdWVkZnE2P7JcGnJV",
  "key38": "2rfY9WVPG8W8iAL7wrEyczNJbBLjDf9NAasAFWwZGR7sZuRX4MH1vZGmXRe97r8zteikFNtENK6heerr7i1JNKb2",
  "key39": "Za9Rr71xWLz44NpH3BUGrbY1tjKHXNr3jBiuBMUtorcvVrWWiNisgzr952tNJv25ZjBcgogzH6TBNUyfqDs64E8",
  "key40": "5R1AsK66x8Eni14k1taeHhUFHjxyNZv2h7PSwCSjVJrNnYKj2d4iRnzHbXtfV4bhJRevNvGQPwW9FJsnoJp2KenW"
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
