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
    "5zbLLSbYjSUpzXmXQ2FUGTMw6AqQuaYGpw2t8ay5tNvu6bFCxryAQG6KutYHoyz9dN4fqR41QSEjA8rxKcFgPKxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c249Bj3fnWGB5oyzfYxojM84t2JDACSzvvxXnq7C8bBtQgs9yiv74gzPjoLUwUK6jHaEqJ3P8X5D6yAWw4NkWDQ",
  "key1": "qFuzHhGsKV6fSz6nDrbyC9Mqzb6STZNDHiUDmsfoRq3M9UPo7weRLDCTFpwdoBCNegExtMG1sFM3zKutknv1g2t",
  "key2": "wC7cfhYsZdM4GW1ssiPWdxujHp5Vzx9wavHbxaMBkNM8kfALrYgY1wQpCiyyTMjTY5YYQ3xTKUBbDayqjthZ92a",
  "key3": "54QtRn5Jq9aMAfbxip2WmtxbV87ZEmDNNYzdFMQEGX8jsr7ad4bRNJhAqZGVLVDs81767zeasF8Z8LNvjHEGhoir",
  "key4": "3eeTewaLQfHbCjhDtReUa1GeEed715i5JVwnXiW1n5E6Ua9WKizKjFMkhrXyHEnJQWzE5btLG7WPyXyonbsbkWns",
  "key5": "5EGprn8DCP4vPzzRKQGsBMHYE96dxrVCGRta6eCVv4SkB7Xyq9N2wzUsN69MHYMoMP1w9rUFNhrhM5xyBpvKiFcS",
  "key6": "277c6NRiPNq7BEZLzrFGgxykDDtAbUqxMvxi9BXkoMWUUbQRKKH731xceNQgiPerjiaUAmiM9UeG5a7ntuNA4xRn",
  "key7": "2puN9DyHdy5bF5CHd6EDSoeE7ujLdNb1wWeVwka6jwu1ixGVTE4EFPd82J6aGPUpmvcQaHwB9ZppgmxLer7hM73H",
  "key8": "5X63gZEhDovaxkodMwrrY7xf2Sq3mjwi9T8JPMuG75msBUohZRcBsdaVVQhn7duG9FomXVPFeiykiHFh2gdJDPaJ",
  "key9": "juPWvLWgEkfYkMsks4GrRBCbUBsPP22tzW37kwvvDXMJSG32j6qfGZGx8deR2nCefsStYSNqPbyYLXSFikegHgM",
  "key10": "4e7uFgAcdZ6KTA58et8Fp7HYNWYV7c8Hdu9eVQaKTb5CbukbTFHwxq8cMDoc75BZXoaJZ5QN8sMjN6PvtY1qeusz",
  "key11": "2NTLX8S9YR9JPGqgyBoRkBcbmRdrEW1qScPaQcjPHGMB2REAnLkLtQzG3ddykzEQxeAhmQhg9L6CiQ8bAa96GriX",
  "key12": "3tNMwteh7wZZ4frXk2ZhuW6UKWzNraC8JjfUBNww2Gu28zRKdDaQv8VKKiF6DBuerQWwubdPjaBBjKRhECnpRQbY",
  "key13": "syMkHx65rEqeWsVa3nNFtKCW9ZySNYiG8aHDnBtjsBiDkBGxBSrjVwkKwmko4C8ijCZe8eaPe3k25gMraqUt7xR",
  "key14": "EKqq6yAxpE3xTX7nf2DipvAWEbtKwbgb815apStN51u3YULuKmd4NSm5uWX1zz2nbDZ2U99mVMpEhkC2sZDLRgS",
  "key15": "SgiG2qzor8ApwhZkM6gvpPBMpqMyqUJHxbmN2WnoC7wYfV6QRqh48AWYoU4AGZPEJ4vLEArRSTKUGnVsH391krw",
  "key16": "4A931Ta38ynhUuxYgFZLFSGb7Hdkwy5QNn8wk1DraQJFdfih8p18DgKeY8PmuKPUHq4gS325uwmcXbiX45FhakWR",
  "key17": "5EU2LgFzJchj4kYoR3ZGZtgkasgLQC1EKPrWmcrNoKoUYfcj6gNiNMFc5MhP6tyunphEUtfTBEzHY8LFNgSEek8w",
  "key18": "jwLD6QxYu7f3etUQkP7seyBnXaatxd577ArtsSegF27rVZ2DYfoNfaHLPfdTMMhK9MWZzn5CguWuryhLRTRATQ2",
  "key19": "67FfyeVMQFvxAfSPnNrt21cibb1SgM9fAtTeNX2L6hhnyFRBH14zWqpDMyzuddcsNQJdfMcq6be72tA46YQ9EUVm",
  "key20": "2jbyKaVJgqnYvuucPBDkeQzHsjSDpx9KMuSHD3oKtBWJ4W6FfoZVVqGJX4ZJp4rj5dRADq6utPStej1odxWXarFz",
  "key21": "5X2JKFECqA6PAU8Lo3FW5RfG6ArU3ktA6emTx5ewqdAiT6qYkkkDAXKPpgVfuMkVsvVk5UPkGLMsPQDNcwrnhssL",
  "key22": "25kJVtAjnz8LDx6JYG99TuM5WeSL6fHJxxUFDQbQMqZjUZD9tEvxarj8D5WXi9WJnoHYTMfAk9TCfbccPs85REWr",
  "key23": "35Z28JpbbdYBYoqHFmFPmLdJfnP5RsBukNMmHVJpbdzgsiBbkLP4vRjhYJDukgb9h9PL6tLj1tv4aWcaeWd1rDFR",
  "key24": "33173Zvqk5HMS6SAu2ZB3HhSeTYeDFtgP9JcwJjZWX4EFU6dwPnTr25Mx5tTmy5pNeWCgBg14M6bz4feRYJn4mZo",
  "key25": "aY5F1zyopNgJQHRmiVCUsS5yHis4FjDP4Wjg9t1kpgj73su9hP84CekipxbC4suVQqNuDUU7pgTfYQvgvWSfa4i",
  "key26": "4Cp6Mz9LaAHbaE2zDvSe1kAdPEQunFbDXjvW5JvDEJfSJTvjo8niLdmkrt68e9x8L1prvKoiSeJh5FFNzjK8vnyu",
  "key27": "U8KdCjk3V2JALiHx1HH7btPKRVxYTAvLPm9gKgFPngo6o7Au89RUsgZoUPUunUy3JAcKcLb3qw4Uq54V8RjNcLW",
  "key28": "5ewVur4HqcPhrQzdXgUWJmMAysNFb78bHezkszEN9GNApTwtsM8owhcz218Njc2oBvYe1BAHDk3Fp4cRPhUCR2gD",
  "key29": "4V2xrY6hbHXbT3EPPGbSnDsb7UehL4Mtk478GHnEDc4GZbThyjLubmCeu34MYKZTEdnvyjQQmZ27g9kVJUJr4hWy",
  "key30": "22Vh6UFHkSLFV2pCA9tfUu2RE5QKL13jNDhLzRE8RJtey34FoH6QA2786qq5u4JtGE36KmGbtAXrZChu67pysp8n",
  "key31": "5GyuycsQq8VKaHVdf38bMkCGaJhg5dPeKLgycvcN3aVSTzXF9GWmcKkcs8q9kunfoi4fzNtW5SC5EEiUqSG8nHEf",
  "key32": "yercGqmrU8wncKnw26aiBwwPjq2dwyKoTE4QKhTohMk77c6n9fJ2tgJt4YZ9sEhEaDpoijFYEbiWYsqrjC4UfEK",
  "key33": "5ba4eV3rkF2acA3T9WJmi4sGZKrQ5LPyvfkXMHBijjXR8YM2tK4EVYjvEmJY9SZyrd9tdCN1mMS9f7NR6Xhkh24y",
  "key34": "53touuBSdd2Ct6psnp6Q8PMvcK8swE4T94HExVjEGotHVUUe5xjdg1XFep1Ui6JWhHiKLaVnFGwM5LmvHD2KHLUc",
  "key35": "3T7aiqBVhW5pNRUDYKcF9foAx1BNGsjfnfAnAWbKH9K2QTmjBcYhaEzDDihnrYFBpzPDEMEgxe1UKXPs5H3XCmZo",
  "key36": "4wm4XNowSYRAfPn9yXM2miGTb2KsiEqmCNeSWv8MhMGhxaDeYrMfRRGMzzAwdcbffgmEcWHLwS1TrxeFxR6GE2zs",
  "key37": "633vpjvJkdVoNzTBkh4nS1w1FKh1QKBqeUgVwcGgeMY9bszYJAagpQXezzksWD1ZRagheoDpaxLop2XNJ1PJA9t7",
  "key38": "5DAYordG9WJ59qpYckTYJgWtp2zYmPXTR6fYBreqLPTuEQYRJvkpb3hD9e8wYoAaeXVgi2cMj26rUx3dXhQPs8Uv",
  "key39": "3hCPeQ1hm66eXeY5uRLep4NFpCDVkAXQEivNhxuwPSo118XuSZrv9zwKr3kC7BY9PUiUrHmcCLAu5Kp6xeV4fedd",
  "key40": "2QsVMDW8EMtYL5Uj5fVJxfe45W6ReBV4CA6YZwqd3jwM74fJq2EdT8CHun1kdbsAYmtEwAL9ypawhKkENGoEyEsb",
  "key41": "2vreGiXpuyLSVV2gtzZWw7ydD9mWKhKrLysA6QdQFyi4GEs4PwmP9rtVzgiRKarhjKbnC9CiY5JkViG2tyjkjDLe",
  "key42": "3hzt7XEwDt9nWmGi69h9Nw5oCxy753ihKrrMmjprf9LSA8D41JWW9b7jrtVWQ9tZbyB1chCLWmM3LjcDVo5MuR2S",
  "key43": "3MoMyprChtiqJWHvzpa8VtgtnLs82x3mhdLcztUUuRkcL2LE1UErJqkMfarL1Rd7u82aqaNWDdQuLhx9BTRSPTAd"
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
