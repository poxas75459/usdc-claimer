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
    "5GwDmNUi78bYdtGRVmGPsTkaMRuvowS9RPxG8ZZc5n7ijZayq7n7QFtGgTt37QN2c7QMXRzFi1cFbxFdL9brqf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ey1XH5CSX9SGB5yyZXxKX3r3uj1TEvRSACsThvnxq8qyMk1cGTfVtzr351cTD1Q9UQpfbC2FjjQEBjJccqx49Sj",
  "key1": "3JEg5RcEGeygKdViVJrbbnXetXYD6bJTQQ9geVGBo2Axmts694n3AhrrRC5Vs4NkgvjsptTSCquHFuZ14HHLdWKy",
  "key2": "5hKGw1JfQAK2isVgYZScwwUi7kTpwAYS2bFrsvmfVYNKE6jPj7AkkJ4TRAvVriCjBVunxT5HxHrdqMdQWA53y9bg",
  "key3": "FSujmvY7U9kYHTHL9CU6m2yzoW5wGHFs4sk37oyrk6ogjprnKUK1VoFMLRNNgvh4b2CWzfToTB37cD3tdGAjqEB",
  "key4": "2qqcP7sK8VmdewUGfNkJcXee5TbwV7BjjVG8ZghCxXrpVxbVSYdZSRzDj969vLd3QbjfhxLra9p1qRE9MJwGquf",
  "key5": "3cdXebq1zkYWnGvwMxkvTTmXSn3iSehGu9xffhRnvPtQcwURCm4pDD95rurP8dMtpPgnFPtnqfdToMWLZg3NiaGU",
  "key6": "oBkii6p8wyq77yB1BSinyZeFKKzApJJHfufAspUJ41q1EMmz1B5D4U1cA3QmrxkMMzrXgaHhx6q7gioTQyjacZS",
  "key7": "5N3ry5oYJQuwCMq9VQxjVyQ2exn7DJwxL2PHrAJekSE1J5tSN875pqDauSL5z3VSyMnKTmxgUfPJsVgPDySm9ppV",
  "key8": "4rutv3MQSJQ58BFrbLDkDdNtk43tM5Y4FDPhtqMdd3sFJQ1wcbkmaGn8BHTuCnT1XsJ6zjaPwQud1MpNJZZKYUfR",
  "key9": "26oq7wUbaDiHJivb5RfGahNoBmShaUBM5AwxZiGFTmo2ACdQaGfTNvL4oq1vxRrxsT74mFjMZUk8CPe2rG8bUFfe",
  "key10": "65umSGak4FPD11AM3XybHx5h9ZgiikPfJJGiQS4mFkaaBdQmuYiRVsZmcZ9CFzoYt4j8QHDKSGVZdDAkcXphauKo",
  "key11": "5FH3HzLfxXQvY6LqVLfkj7qMAfxwNWasJGUAfkyXpxUMof6bw1XPpz46RPPjfkR2khFWZJKZwnuhCULqKxAvTgYa",
  "key12": "4n27RYmCLK4dAj41GHhvKwHokKNBsF6FWtyS2QmMTbQCiYT1rbcuaqKETyNK12T3qatkS7e4TtJkoA6bYuL5gC3Z",
  "key13": "5kA9twPeFKYDtH2ZgWCPp9DGu5EZ1atMmeNAV5eQk7XLPuTyUrxP617LKsa8obZrHyokQSMkTq34SG2SbXQfzArn",
  "key14": "3EebfmQb5QXdtPRWRWFbfbAwEpzhfyNjECkmt6jQN2r4ZxYECRejL4mRS9d56rTtCxzVP4FxQm1T8fQSBfogRrXx",
  "key15": "z6gTN3J99qAiN7izVSXGEba4abqveRSq81FUNawWK9MFM58KwqeBNtchsrtEyhnaMoNowniTpUTBQ2iEwAxxLNw",
  "key16": "xyvzQeGJKXyXAGPYzgvSkLdxcFoofgWCSsVCRQ5v1ZB4pmsw7tiyjdgMAXAS6ezY1q24GGXXN4P9DXFtyg5QmMd",
  "key17": "3mJ9X5zwpscPzjhas4JMkA3Y9fyds9KeUYsGjpcueKmK3pDhDHywd3hVcDApUN9T6NHGtRPYviMj2KJ7xA4KCFyC",
  "key18": "4yYuTj69v1gCcMi1NYAoGUfXyw9xmLubTjgcukTVTHgX5Ng6x7Pt9tbArbLRQFDJi7M82ZKLEyumE88XTHpXLHoK",
  "key19": "4839QEMVyoUPHHRrVNF5gwz92Hyq5Hie1ENFysWYrGd1qBP4EAg2Z28DaZNyhchje1RJriQC5anAJHgaC9QyPSzr",
  "key20": "4bYFLLb2XrZZQc8MBJ9XzfHd5HgrW9nttN3uQv6Q37AtcMQ4efWb2f2ATg6H9TZGEcGi9sJCJzhZeMG8mWtubXbh",
  "key21": "3SpvcFBhfHXrZZG9JL4TbzEjBVjN126whr2bAxEtaTvNzcQR5ukShaxMaYqkefHiydyxBBFyTGZU8gRMdm1jynxt",
  "key22": "5z2tPu2wBXbNY4sgqQUKooYL4XDebqKpXUvPrDaEzSUZEMuVvMt8o3t9WgM9hAqDbqhLniLDstxBek8yxLjVr2b1",
  "key23": "4DQ7ehu8MoTuU42GeSZsCL9yj9ZwcMnrdkfqy9qwB6EfYAG9jvxX65bFBQEzc7oXYk4aMHmy9C7PDbqpS7XHXUtj",
  "key24": "UxgTZPxUy87UqihZZqkX5puRsCTWkmGMwEK8C52HnVXnicD5EySfAZ1WdebCwNgmVZAgSVrtjhxmssF4TuoXRWH",
  "key25": "4kDKWrVXRVyhat7kAnCjbSg1X6JU1wfo7XAdYsCTH6Vrdc357MD4GwqoMGLAS14WhaSPbuF7LRm7evvHQfqCtQkw",
  "key26": "icWK6MvRpvZytGBVuYSfzT5KPAMWUkr8C66Si61EBt6iF7kM4VTsKSzu2nZz49miAKzWHZN9Ysc1bz7TdNt2Lgi",
  "key27": "2czxA1hGzBSnmmvPsCjmdLY3z8e6XUrMcSg5mKQ4r8r7CMpR5wYm8KXNNubpoouNrB5vK7H9Bc285fdm3R8aMg7r",
  "key28": "388oYXMoXuvEzczWKBMGc7mz6EX9pcx8hhe8v1jb9EeLwDghq4p7LEQe9j5ofk2YEqj5kkVtYtDrHizpTYfosCaf",
  "key29": "3mLHYANnN7gtscYHTHSMPa1GAFoTKxXZnCne86yt5DwzhPgC7wkUG5rSx8uEAAG1XhLfheT2Hz34E8n9qchpG9aQ",
  "key30": "KdpRmamB8NJ9yj8YwHh1b98RGW7im7kPACx4HzL7TH7u8YBJXnG1EGzjeCdJD38pTvZhfmUB59KZ3JgqbyWEyxg",
  "key31": "civ3wwgGVoZZUBLcuB4gupedvk8zzw7dkFvEB93bs3RsqifmaqHMSvmH7boYWDCnZH63p9AycWg6HzgpFsuCeVa",
  "key32": "41L7Ec792ATMTNdAP9SFgK9K7eQSzcwBZF8FQjGNLhxnFFsTcwf9C6UpQfQsZygaVGGUwP77jqdM8Wjx742k2roG",
  "key33": "3n9caGXhaKuorwHDkDnX4ZkPbgCmHNuG3JM8gCu4YzR3MwvnJ4Nt99dqUDSQx7pfRQEHdApfyPatCGJyoKFShyA9",
  "key34": "2nDABtzqbEkBu3yEM266JSmEAxLJNGev4xZn2bKQajEdhufVXV8zyhMgk6pML1KJqWZBgHa7GHiiWMzgQh7YzrbE",
  "key35": "3dGKt8LDE5Zs1cad9RgfUHdH88KbcS9CXYqZicUYANN7ExJvhfaaaUJKs9HSwzwEA6mJtV6sPiP5fjdAYADMZKCG",
  "key36": "7ytT2DTkus8M3mFbkxM8kEdZRKPwUE8h9Wgz2LgkQBhfjUEt2Uhf1yF7cTiLHZBN2xr4QvP2uTDhAtdTmuvyMnr",
  "key37": "4WQsDHGkuPvqA9HGJdMG4Z4qZcoENWyF9PviAM5yGr8nCzY24Z56opaCuvAR2LKHcSaVciQXxMyfmonrf3yJ4Mqn",
  "key38": "34cMgeVbRh3KGVADmJsyxwV7PeH1ewKx6iLKy64cyuBnF3EzdBN7V3nDKD3e1NJN8yXzsXdxvZENpRZcPWiDKUS8",
  "key39": "42rpofeTdMykyNMT27KViSfMk4kStj4J5u7jeBPmkuC19KkAVD8ZStkC3UE8xNWuynSBm3yP4C2roqXKBGyA5ZiC",
  "key40": "3GkQqteDaAupogkW9AYpvLYths6A2fdaMWAuCYaf5XMv6rUb48f6mBcdLcspki6eRiXDif6PjkaX62McZMewbceK",
  "key41": "45oYvTKCADKmfPhktUYSSuk6LPXWLHeEDYrpMPK95VGzCJaQYD4vq5kLTWFhHUza8XvmUvpoBd8rVeY9UhBvh3r8",
  "key42": "4Y74QuKEDwafesUbdBGaqTvEPvwy7UK9adJxHUyeHEhzk5auksr6hDf7ebP18nWTmyVEUASvZUC5Fajm7UYZqpg3",
  "key43": "48ixjQgLSWzwtM8STHKKMMyFLoSp24QUVmRo4upxH8u9nZAp1bg4wLxbYDm7Gfnyi31YBBaCh1fCWAQZDQBd4XV7",
  "key44": "3CmAqh8DD9bYRNfGT2PV16Sd6EV6GXMpLHoQfFCiQ15Bqx2QFrvTqT9pv7tTiWrUYcqsNgqts7PkUqDw1YGgBsx9",
  "key45": "Bn5kUPF4yVsjQjJpdrgtpKoaB5QR3XnqxnhiCFyZXvN3jgMzseX6nAmWFCZxrnogzPwqwrB6dEFMuhWqF56UV96",
  "key46": "KiLNWdMBjGnrzek4Uv5kfznccbGK9qF1FNmzHn8ThoHbtcnjYck546i28v3PvVRZgw2RkfPhLEb75SgrheriYJj",
  "key47": "3d1UkbbLvwVtrGNyG5DUF1toFSnSbyJJedetaoC4e91Bz6uLbfwJgMJGvDWUyWYrQUMeYrEz6AVSTiTP6pb46ntW"
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
