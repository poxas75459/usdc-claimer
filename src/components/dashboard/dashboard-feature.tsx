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
    "4xEcWocZNoQSbdVNxpgmoPCqdF2yAh2rQqKnLLeT7Xce1DdBg6obi7ixc5okMsYZXoGf3rzLdqThSQ4FAzeXmhba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27e2udqpoQNhVpY3BhkHgHLY1riHGEzxJVk3tWpY8gT2hgx9uHXptSpProAjk2pthChHhEfvzmBzfTxK4n2TswvZ",
  "key1": "2sZSTK5tZRF9wMyu8pZKfWEtxrWR1LCULPRaMSqohPEFMok1DNdHv8827S7SFxNrnyRaMBECEY1qu9Yif4UqauYr",
  "key2": "41QNuohyCPiYSFPh7g3HT4VPnHwLJpDiiT4pMgBWkVd59AcbQXCTZZ1VnECQMDCR9Nd3e8niXff2KFHnWaJQh2Uw",
  "key3": "3CChMgSx27vdSX1gzMzx9WrUDYP4GX1oFwD2etzofGqgahxGMJbQhhj5KZ1SPagqPNefcbjjKwgiYvWPHhcdpN5A",
  "key4": "5ruAGbpC5okzHooNtwqUrvrQ8KWpBkuwbdHbf5Z7E22Q5YNcs9ec9zEpfuWj6vpwKcvAtPeweehENKgn2zX3aNz7",
  "key5": "2k6ZvNkzxsmBsjoVbeKrV6KmkESuzgxV64ERniRMCt6QcCNvwGMzzTLhwGx7hVfqK1E38dmwhAMSmZiqT2wGhYGz",
  "key6": "3cnN32cgoeDJ2vcMed7bgsRvHLZugswr5bikSDpC5pL13YE5FUqV2jGfFFA3xXnxyv1HFzHqmLtpoGxkEJvbZWdy",
  "key7": "4kEnmHn81rQ2AEa9fcptWiah6G6nqih35iSNs6wDfSXEEc72CzEtizNDR8sao5hWRWPj3STxVa14V3YvxCy7dvG3",
  "key8": "4EYaCfTXxtuZXuPbpNAcrwCMyvujmpQRzieT53ruMMqmGvo6PBZ9p6exFRmjbLa33GoK5zhWd4ijG1CdNMCAriR",
  "key9": "4Fw7Y9M35UYiqWrkFjwBV9x4NvUVqyAaUzD2hQbh7EmwFLTQkU24MAoQfj9vyTdPLWuKSScdD8k9VKPU1hGtNRqJ",
  "key10": "5hTmCXp4HAxovFyGhy2AgspuNMVLCJ3gXKWatysdqChNzTYyD68V5UBpNpBiFzMgVsW21sNZNNAPzRrsRob7tYQZ",
  "key11": "5Fpy6Lp1EpvrRf6LWHjUNVW5WwToKHS1oDCPhf4xonVCAPN2KgD92drJGczTuDEvoZot91TaBi6jLqBPW6ajy93X",
  "key12": "2gxhFbBtzSWdbVrRR4K4fKW4WB59vK33W5M8E7aCeMt6nXWa2KoAABNsjuCHPa5X93swY12d8TFofNqRGBBCmQhw",
  "key13": "4s3X3YA5kDiKkHmDd9KPbWNBsSdCKNsVCjDSDkr1rb1YShaorHXCT5Wb614bxSpZXnEYeciXZh6vG1YN9BDg8nws",
  "key14": "2v7fxQXah1GJf6B3qCgLtYCRJSSUsp3gZENsgiEnEcYBWETGg5EnyZVroHoTUyTQmxFHPC1aa5MefTK2UPfWt5Bc",
  "key15": "RRdSaSV71y5ftohv1wdxCubB2mkX1G1ztp2UgA7NAJceq9vMpZmRsrLw3GHrP2SGSX4CyyDG68k1xMqPsYehJet",
  "key16": "3TCsSDJaLeJUr66ByVeYvFk9nvkvUYc4sMmuEu5cDVsonAxbDBCwvmZW968iFmezhKihS52UHUv2nM66sSkznpxQ",
  "key17": "5kajbZFKu8NbvnjShmSypaXVCuxoiikQd4XLXX71V62S3yYVH26VCaDV7mgtp4Gk2VqgH7Go9J5UgNg2GcJcgiXV",
  "key18": "5omJQnY5JbGT4R6h4bc6nSvJsevgaHxnd3Aes6hgGe9WpZFXHsLCgQV4uJpfVDRroYJahFgqu2Lh3wz3Xisjv6Vt",
  "key19": "5wvijeqYkKmayFr6DGBysjL2Yk8HdNJQdLRTpBZX4EiYsChwuQ7n6QeLa6Fntz9UfZfj9xYDnBMbwsdEmds4Luqp",
  "key20": "W8hrUUwTz4Gd2n59rVnxwZrFycfy74yo2EsPT9BmdbegcyYd4jZwjjF7zLoav6TzcnHHYy7RoWGwkevSTvYruHE",
  "key21": "V8fjiUbmccvXQ4FxJSCsPo4KxH2qvp73pAkn8zT2zUzsWxHxTLUQX5eV9oG6iPB7Dej6K6dxR6pjfV3QuJBUCM1",
  "key22": "3D7RKS4QsXNRe1MhtorGo8wcKgJzzyGcL8vVNEH8r1dXzzSMHEWBKyUaqSfhJuPQCTKSbrPmqBZtr6NaDEGb5gYj",
  "key23": "Vtve9kQYqrC276dL5h1XgBX25KUZV7uaTJmD8Cq6fVHTdTnNeZGP7HUWMaTmprMFmQbHFfTFAF73RRPGygoYeFv",
  "key24": "H8MmCsgu8LvMreRMCGp9YxupLQ8UwPEJXicQ2VKz87xqXchQGLxebkbUkR9xmvdTVkb6yjMuug8dk64oPubNLe8",
  "key25": "4L1ocRG4hFULk5VW8w3hexdBajMxYB1vGgP3Fp1PFM5bUYpZ1HEUaKNfdByWvpw5ocv2MgHYLjqXP6ChBDehtunP",
  "key26": "4G2sKzYkSQVHdqssYHCQR9wHga5hfpc7VMKdzoxQyCNRuzSauGHR694iV1TRzsFbGymkWsisuNVbj4iL1qPsx63X",
  "key27": "4JCB4kAJW9uau5yLJpBNmZykXqkJzE8WvZTawr3teKVAefDYqjCuCvtDF5b2oKTedWrBNApyv2CGNosojkQYDJNK",
  "key28": "4t13a1PGDKEEwCZmqheS6Vdg9AMvL9oJzaqnZpoFY4iFjeFjC1GtmZ7FfDG9zXXj7Q8QgNzVdhU5ob1nJsehZauM",
  "key29": "4HppV4eych4R3xHdrkVMKnCdQbscQTjhbQKjhNFbJt5gojCHKZgkwqkf2dXaUbfNuCMZz9VA2ZwdTduddt12oGTd",
  "key30": "3n1kWh6rNnqdJkP8deQk1MCFNznhoYJm1jnW6PbWxQjZd8BkZDw3TTpS8TtrmdNk9kvktmEkoW6X4wuWvGLPSki",
  "key31": "5daqDFPa1LKEXoPtqZoLjia9Udq52e7SAwRuTwHvtchHedkMMKy2Fi6Vj6Z8x2K2BExsG6rpuf5H9P6zUGPNmoAh",
  "key32": "2jGQ4nwCa5EE7N7hDyYcE88y2FFaj23AyzbowRHjJuP3rRpmaoFoksFt31gUacMtLpAddYS69o4ZZYkZNPnofFb5",
  "key33": "2FfqVhfHjzoi2iZ7EMMQJCugu5cn1AHgCfdZja2MjzBKTiPMMKFfmshgeVP2Mv6Vro3DebrSzHDvnvDBdcVaptRY",
  "key34": "5m4FsBGGXLstPh8qKCaNTPN99i4cgusiDT96uNpc6Q3CuYhfzPdVNueuV8XQ5PFwVu7bytoZjDww6P2pFuyg62WR",
  "key35": "5Xhi8FakQ8sWMRCjJcGMikQ5Mf5dXgomC99KN7JTqSaVSGsewoDLqiXZrMmh1U55GzZDMy6TdoRGAPHV7KrGt4CX",
  "key36": "3JfNpf3tY2BWwDeQdCQsj6sEshPxLy7pVumbFvzSkpwhbpiYRQeVQFeYLYjp7EYCg2q9MuhUYWY8vQ6mNhjjAuAL",
  "key37": "4L8TfLsyz2Hek6RAPYNP5JkUjtQMCPTyCvzK9NKZ2qHYGGqZaocx5KJH71fWonA6KX9WjgRfmLsSGWx8H8rDzqXH",
  "key38": "zjRSB42LiU3njZ9hzTyF6Mg2iQ27UVbGfJwQL2YNW64jf3dArM4pk1yReRCm6LRgtwWzQW75Um1KZEGz34FkBY9",
  "key39": "5xDfRDRN73wSwVFP8tWj86JtaKHavU8yn3N3ot1FeQqLW9WESi8TWQAA9hUAEHPKnhfbLCeC5v9pw2rDQe1ZEQJt",
  "key40": "1BJWJ47VjUu8SeNfx7821u2Kw3bWdSqjuQYNmQdME7L6HRvvh36YDLUakHSDDc6ci9fXa3sqXM25DNipWe53DS1",
  "key41": "3tTjgfWt8by2E9dswmCyoeQEXhjoq53GyszyuU9f4HaDJCa2iUHHWuky2TinTeyJGSZfwdiKnDYoXK3SE54QYzie",
  "key42": "e2qVnNZZH2Bjua59ffmMcpMr7rR644JYtJiCGeDqzfrrX4Fvnx7sJRSv4FyvQ5r3skwEJQ7ufvNW8DksA7aQTeR",
  "key43": "2qAXiw9F1UsReL1UYDc28yCtgEZAHWZTVqBtRr2Z1V36QEfLiDhm9qPYdfr9U2dfxmQ6RhDRnTqv3xQKBPiwoa2z",
  "key44": "4BPy8w9FoCK7B8GaQviZTQf8wrnHzB7Nun6a196ANia6jkGEzNnns2E4omXfxDDFNTm4gYMxpK1gw9MkyHCKMrnd",
  "key45": "52CqkLtATzgU9p4SKAGHxA2WDE3L6teGMJgGrxWGgfA8TyWP5CM3wyLbprLyArgxBX1ytTQE61N6YaaqDGTT5JYR"
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
