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
    "5mNwSf5SL6kBRpbtpWz2hdUVZyi7SLMECC3L6rB4QsbM8FiCbywuwCs4pPo42U97EPyjbKZ22nEo9yyvpKX9FYfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y1d6sLKPWoMoZoswqGb1u5yvYdhpq37xso2oDhpjrQ8FYaE1cxCHpm5AkggpiymuwSEQ4r3CzKyQRWGvCfV2UyF",
  "key1": "25ocLojh2zR8i3zun3FrYUDx2coDQ1LJCktibW9sgjA4y4BHsGaPgYfHzVXGLNSyMTNX4atxhcvpYqdLXEjx7n1p",
  "key2": "4AMNsLvHmjoW4tDVPoF34rZTr5vfRTWKGxKyFzsCtEHmbiHCV3YV3dS1XgeqyiHtdER4Ufdqza3He6XxV6RyZM4b",
  "key3": "4yCi9iE6VkaFidiyFWk2UaTeu7V2NXm1UkBKbWo74JYhKthsg6b8NFounqRFcrLsWm1of5dxKPpoeFkN8MubDmZ1",
  "key4": "3Wyerc25QtV14vyTStmomL7VdJ14XmCJjWRWCxvQ9ZRRVBC4SdGP5HNF1wpvPu9wKE534RsuHY6gLXhbg3hSa1tS",
  "key5": "3rvpNon2VCcgV1b2ieaidAPsRj4fRREpXaLWB7sjreSvG1hywARE6QaPEAUiTj4qHZSdzzyKBuPGAtwSkipxfEEZ",
  "key6": "5yUwP4r69kWMmxF3FZhNLH4LwTaJHgAcyn69zEv23Kw84xjjWu5ZrGQVFuYy4Fy2RrAJPGuWnvfR63Tg33JJnFcH",
  "key7": "4Qt9wxQu7UR1Yc5sN2DJ4t5UJAPKopQtHrneTM6GoipnrUThmuU4GJbBsLzKjZ6asvdRESYNYYRfinvfGkzLATjm",
  "key8": "3GUd2M3kaCKB1cYyXvzDKu52bCN9NJu8tLFk96i1zS71aUK6JFUXsFxEy1hx1yWSubkT29AsMMAv53Aggaajb2Zb",
  "key9": "5RvQzjissNJPxHb2mqaeQgU48e4y2C789yfao3SCPyrcNo9PFoSrLYTXkobUggCLZuBpu3N75AJZeYhcSDJJpuDc",
  "key10": "5ef1yRsBtBGj7YpnxqXsus4HmM61VjBunv4fqjWsPPNuMFcsG7L7AdHb2jYfSi9DfaCiq8Gki8BL2ynpJDAED15L",
  "key11": "4LivMSveQXKmDeQbrmKXmA6a5eKr71mbLLw2Gb9C6g33Ud7MY8aj4HphJNqYztgjNm8nnwcxSaeTmffqWRCd3MX9",
  "key12": "3UGeSgur2VnT68N7c23pKBeg1sT995XRNsL5TcQxacv14uoPK5z3cd8vy6mEZvJDjny8QkiQ5u7AbDCKN6jBui63",
  "key13": "61BFXvEfkKwMiWjxQJSfj5TaeQthkw9U7RJ7TtVusnXQqTPbQH7uDA4XLepmUd3qHP88tQZ3ShQnmxRmJF9f227N",
  "key14": "4FbMv9ZmbqdBoSVuKerjt3dd4xCWpSNMCTPiDpk6ms2KD7amfMU7WrmoC4mLoFK6Xto6uEjpe7AcA7CsYWTcNgsh",
  "key15": "4txZgJpryu6FpqRwfEjX46BanvKqbuUjLJX9CmtnMQz7zRoF4xXXCMx2f4FrJYY1e2By3a1k7wMaYFrg7LuvMLA2",
  "key16": "2Csve4Lu5tqnrgtbj615FoZ5kejyxWWQb4iWA2GTBCxgU6ueuFm1MzrDhNtHW4kZagSuPD5DxvQkU9Eu7sJYDkyG",
  "key17": "2T8kSFbFUfbEJtu4vTYCSV9zpDPttWbYXMbEDpRp2mUK3qL6BfAfHxzcViVoBSFfxTKhquJnR8U9M1aAXT7BboR5",
  "key18": "5BFzjJagv5SZ3boz8QutsxEEA4WCqcUfBwMs92uDWzcWd9o1kMmzL3nVkqjMHhw2FVADP5sD7nts13p2TaHTYuLS",
  "key19": "3Qr1HV9uLVbvto8XeznEdzqwKrsyQJEQAGCtVSAZ3vhejs4MQp7rf5GN5q16Hbk21pM2W7DjMxiXFyKDCauNgDfb",
  "key20": "EWvqN5vn65hryB7ELpPvfeyizqPQ61j5PCy1psweFZqfZr3hhX3L9GtNVcvKgVWYiYEtEjUW5ENEWDJBjQVKbBR",
  "key21": "31EWRmzz65kbizwYWEugFponMQb9bQWAv5gCXnQVcaMR6HAJn2ZSppW8W1YEYjonCtxzT2FTsdhFgSLPpn8i2Z2u",
  "key22": "4tX1ETJoJZTw189ShWgng79uA8etxdv79AahNj9LwSBVgL9MAyFrkjzw6rv7eCCCwfjV52126c2dr4uLRcXsqCSA",
  "key23": "9FJoNcVsarL7UViTzr4PiPBFpM99SN4vU2fLdM8HxC94hHCGsDi74xj1fsRm9TaamqpMhPC94Uk5rFKWc5zKseS",
  "key24": "5bzvwGX8B2oDfUgvhNuywXgToqtFbFe5NmTwB9HBAbf3w8p5gV8V2ysdDCKQabLyjVWkrKrUpAp4r62ynuuvnVzw",
  "key25": "5DypjADNaQbmyJ3zFRXRQT3jdVFaLUeYCdSW7MuZtshVktEJ7FGVZn6MELhRnhMGTBPGCUQktP5XicZSQzSLJyX8",
  "key26": "26jYkwz5LJiUuoa7xE7Ba1ngDL1cnRonWDEQqYfafTrRe22AiTffsAMNMbJArQbNzHZ62k7MsFak4tbehu3m3Huq",
  "key27": "2Hh4NhyNJMz4gpFWMCiwP2Dh7fGq5J2nP81R4CsscE7uwnFsLFT1TrNE1xmyU9dCnThAxi3fYtu8qm26dyBzRVJz",
  "key28": "E8HRepHc9HEQNQtRAgCfybMSwJbxY2VYviBsKAo2RYuPgcHfbAuEmmbvBYWMvtP54HwaV4d99Gp1eLwnMv6RjR6",
  "key29": "4WaQkjsRTtzQq8oKn7F5LVreYPoE5MKpNRyCDFgyYkTgXnixo7ZgLMHCf4UiSPuWgzqdvfmL7KvrvVN2ibjK88bK",
  "key30": "fXgc1MhzwjuQsz2Si8CcFrfi2GHrBBd4JjhcpcxzW6RLY8vaLeAiWJ2Gsa8rEuhoNio5TPuaEd7BZPKTZGaTgUs",
  "key31": "2RU6cchGLtutAYRQJw9kZdG75iX4yFMZtX3rXANL3mpDENb2prVgQE7ZgTdr7a4evHh9DWjscDZsbqEJPexasKeu",
  "key32": "5pbBkYXmHApAhMB5C4AnfKJYNBW24e5BWdYD1ggm8PaVUBf3yZVuAgdvCsqA4y86imQ1X8pTCCDEA1RsQaKJznmv",
  "key33": "5Jau5JXbbmDPcXxxZxDHj4EZFMtzZ9mtBTibWNQHjLa7rCLy5TVCczaMMTqWAokcfMnTF2zP4VKe3wKz3iCuwJUJ",
  "key34": "3aRFzG3hNX24foKRC9WtZxHsYD1WtD39DwVBxSkkVFtveFAQ3MpxbxCdLPQPmeiPJbnLqtpiCRajXRN2PYYHzy2F",
  "key35": "gj3qooB5KWmpgGxurUJ4PkDpTRnB2gGzfoyK3x2wsCTVxE6hSFrVbGeXEqWnGUUgD4HWHP5tCYpuRyNQSD8etCW",
  "key36": "5YCRDNTzWUsfBoRu7YgFvPyJfnbcZRmRKVPNNXpSMqKxU2uc4aYo7M3eV5ZHidNNu5bEcJCHB2SsWmaDFEchtaN2",
  "key37": "3GJpRyTuMXdY1z9hEzVhfY2czz7BfE5oY9y5E1dn2Gz29sUtm738WBopNypH48X7gihy6SsSGVahoqpDNmUpGA9p",
  "key38": "3MEbEVgxMHeAwTrprVrggzaQx9WX2bGiBjwAqNXwsoaBXVCn4xSNqcgL2uAWxBvW9SviZiG9ZMc2FPNHSS3VbNCD",
  "key39": "2n17A4VUHvKeGiDZkTjmjMNW2BtUcgTygA6K6G9Lnt3suoi7AkJFdU2aYbry8uzwzVDMt9je167dUQRZpm8RNotY",
  "key40": "3xB6AD6PiP17Vg1JSZvZ4wi28s3g2kmMT8MqD12LvYKWaK2GMpFq7zwVi89eZAm7tTTvaM2MW6aF9FHDtmj1BNCH",
  "key41": "feLv7CSTXYQTPVTDhM6TiquevjzG8m9kGvQExFigfYgWA1Lktwx9kKRcwrRenYEReZM6bLbzzdKseYEAGKTJ7g3",
  "key42": "4J9g56ep2oxdbH9diUVe8yqnNH3zsz4dTLdDgV5PBrmTFBMaGpqKMkJx1UCWvXZdppAdrFk5KVPrsP9g2VcjKBNz"
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
