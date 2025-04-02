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
    "4WS7yfHNgip2svSHhsvpbshjpieDaXG6wgCmAb9YPf2trKxXPTvEKGtkjxF1xDV5fcZ82uJERRwaqxEFUGW5g1u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gteRmza3GDitYuKMs7uQp8Ftb9Qnb7B3XCSYfaA4hvMVnfEyvS3X4qfzjuKWzFvy444igFdpU2pj4U3SXgomcGs",
  "key1": "45dom8PnKxhZi8JbnXx3NoFNavoM478EnFDoyzi3gaGQdgfZxjPm2qSGCv2a1YJFH8bFU9uNtkKXf3yicgeZhijM",
  "key2": "4BsebZAwSSubFDPoa9KiGCnvnwqwidmaQUygMypDFdovkEziKwJSBvFrrSmpcBdGS9PoErN3dcHQWZAH79RgrBUi",
  "key3": "2hZsG2gQnA1kSgEdNhoXBeC9r8LLtoLHeRduPbQzeHJxRapkskBLHJT31F1EbugA129aqzxn3Kiom7y6ixn2wqje",
  "key4": "5WLnSV4tb8JbkPhS3bB1cj9Bf9y1FHgRV9zqViYsdKbAY4w3JpCf12NGvz8Vzej3uVGC5Z2voh4hG2qKeAmQMKG2",
  "key5": "5doyr38DcYC4z75HL3vrsotYJ7Fvz3r4rLkVWjotrHEU5wzQ36mBURsX9aTQHcTjp9bBDATjskKrJhffSCpkPCG4",
  "key6": "2YU8qEGgKcuQNG19CCBoEFmxCEBCuoHab3fbkbjEbu8nhuoZQCjRSeNFea4McXE35gxjRjEpS1D9GeBQtcpx1JHF",
  "key7": "5ds4rwSKD1GRNSC2CUGXx2snpUswZAh2A1we4omSX5cHVUAXR7WfQq3J5zYJQ1Z9vUhLq8MqgdniyVcmxUgnZAn3",
  "key8": "4Xf4HAFqJ7QPDHAvvTn58FhcETkK3TwjzzufUcYhvEdEzGzrmfHD4DX1j25XsxPJQWb5xVQtk9nSgiq7mAA4K5rR",
  "key9": "2CGD7E1NVcW684mMJJCDwXosTnwyanbYzLKGmu79Sj6vQX9svyyFkMvZHSzSzM2VPRmNr8BqLqMcLuNXxCzdtYw",
  "key10": "21C3Ge7wqySz7NfQz97RBKixEcZ8uDtbGEXhmJAbD1jdbdBRvPEDrUVFTZKQR6veeEm3qGJiyqAVKkMwiHcw6Ryg",
  "key11": "3hw15jxgpcVYK2No92B7A6eXAqmH5rgnXDqCyReZdjbCpot7VwLXcncryASaMTNXAqLv1ft23oP3NPUCeTQ6fewv",
  "key12": "ferKTP1axCaPL87qiZXn8L77QZueeM1Cj5MYsV36ig8mq2mNEoxsAVvLnZd5LmFupQqhYt7S66CFVFhbPrLqpyD",
  "key13": "5aoRDhgTuCu7zjUMieq3wqeDPPr7gRbuiDbNzx6t4BDDAz9fAvZ3ZAcVrC1HujjYiZNHDvaCMj3vZ3xwAvYzFJXg",
  "key14": "4XoF4Ho4UWBJGamnBYd4SgCn8MLGyFQRWYwP9JMzcVSeDYFiXKvJ5ibEtVxDY1mdLSK8AurwtvLTtV5g9wvCJpX4",
  "key15": "51znjDLmCq22kbSHaWxmH6zZ11kPH3NhAzBWa5JrsWjJm68pufZyxMZd2FSqs2whbXCfwHwsfVE5j3RFcdkWAFKb",
  "key16": "5DhkKeyqX2RXm7RPm1P98pdtXb7GMA1nFynczDgFFd8h4hcuYCN4xKyfRrA69xh5Ep7Xb9rDAUhCzZ1q2VpHJ1SR",
  "key17": "4Pe8jSg14n9Kt4sM4qY9eF6sqtikuLgmLsMi1inyJNxgRk6fvRc3xadTov7DWoHt93AQYqQdpto4oFvfUEo9kQSZ",
  "key18": "4bQpNd3pzurLKbny8pU8pB97tquVfjqoDM2K5mRXJQ89NC5fMWRmUBjpGr5TUNLgvtE2714tZJkpwJukvUFsoaN1",
  "key19": "632Dmw8ngPwKCSE1Qv1whFJs7f8uT5g34fTevkSxFoYYYKAqG3geUhX2HmrFDfHXKGuhDPEdiBUbu8RQ9gj6rZhJ",
  "key20": "5TmXYe6s4wZyePBJujZC8ZiMho28gixUJFiYXrVmEkJJd2KU2Toy3YC4KSBL7LBS8geLCiVT4Ak6jcNAAjC317L5",
  "key21": "32k2RcLALse6U1ACAMatCVL42EK9vJeXpvF5wCXZfoYxXwLfB26wV6TUHdewAPQeZPLSn1N1cnB6CXanU6TA5c56",
  "key22": "52L8ptFoKdW3dAJArweswyrEwVrVo1Emb4D9MVFW9m7B6c7NymEHA7Z3tWvptrJWtgH97h8MiptaEgFmucEdUZQu",
  "key23": "5p8HdzCuHjnzfKSGJZr2botj22oUWdZHToek9ZyR3oBxE5EpUKbNKN5Lw5XYS3tYUmZoqZo8BnizZ1Vge1RoQzik",
  "key24": "47mpoKWERoxbAtjgT1iSQf3bBaLMK7Hz962S4nJRtoSPuRTJ5HvusURpGHyGXrkUrc2AZ7Pxt6pg2ueUr9wgX7hp",
  "key25": "GdbyVKC92Nk318jixqUfTA14WdbEH7AjNNUGsvJUCiZwKcZnrBtcE343Dqmagc9GbAP9bvSMtRmyA6izLT5iKe2",
  "key26": "3rtkkdge4To7LoXegSAJKaGp4d2shtcjpvWy2e8eYD9ANjq89oxAFDuXPZy9E5E9xtEtxcmchbzd3VPG8KactNx9",
  "key27": "33GnhMvQREX5ch2oimBc3pp78NyaYHZm8RHGtHgGyxVHU6s81gQuQW7TwxzDa2Cx5rgozvtBpr3revbfuq7ERhZB",
  "key28": "LJ8VMLvTs5M7d7s6w4SaC8LEaAYipwVYydnobndqSuwnegSuX6uzW7oggzQQt43V4oue44uAC54F3nRttvPAUBa",
  "key29": "2kEiFfaR9QHd4SJqH2fBGkQvBjt84AdhLZtro6ANHgRwYJoDsZC1XUbFUYi25SSfGEvktzULmggnEcWueEtdR84R",
  "key30": "3zpcZTnKPUhbbU7aS1DBiDkqXsGEzZUTVVMr3PzREBmudqv5fkdQUyhRC5cshaxqFz3wCAmf2cbaurVkpgtMSSrK",
  "key31": "4q31FCM3Ti97YmRvR7V6WycKSKRaYE69GRaQqiZHxtUbrqdqAUsxZR9a1wuwGo2osATakFhyQm1EkHywAdcxpsFh",
  "key32": "2tYwpdnEvCkP2RgLGXRXkMpiJpiZSMVbkzbqexBZJtVvpTZr3H5du3sESQsNudfFsKdJBWCMn1QsgokSdQGXgjML",
  "key33": "59d9ThhBYJNeS169q9JbjGeANMSSqVp6xzGoK2P11Lwpp48oLwbBESTTpF7YNBmKfRUXa9i6MjnkZjHV3Sub6zQn",
  "key34": "3UVDViywwLr8cfs18zYxuoDbMzb18Zf5QCHyAoYnfiS2g8cwytmeHXiMvCoJD4ZoAwusp9rpErmJsLooRsxrxnBH",
  "key35": "58uMsDzAbEbWybfJFSWHLZAgAW6T9s5uyniCCtPwQv6UNCZDFgec5CCJ3EL8UjtTGhpJJ2x8bpRBxS3F7kNDzjqG",
  "key36": "4CwEjBAaEEmVcjut8rza3VW79sMC24BwywrPwAyBigbD1Wu8YqWhsWcMnsrsrMFDtKQjn8TjML1SKSoY8zAeHLrV",
  "key37": "4fUcPT8TDRUt4LptjuQmv4TqgAzLDuUQS6f2n6p5KpSzz9ENnk2hUooNy72AVEVmxrYooyXn1bmta69CNX6NM6Zr",
  "key38": "3pMkKNbENXeMaFEFSBq7YxCRZWhWYMK2HaUciDPTpFEu5R8n2QzVMn6imYauUJi4rKAr9ckUrgpRaH2LdYGHfRtf",
  "key39": "5oMsdhsPfdjgmpt8voQK78jXbu9LEvekphm9yFn4btqpTNNqrnLMhcNiKvtB9uaUsdUBwSSRPoc6QEwhjfbqhHbh",
  "key40": "2SqD3zYhX97tptozzrosWUgLWnntbFh6UbaUnUNnZDudmEDny4qs1sBxavkWKrGftSxjdhpi21WyMADoAgWUp4Z8",
  "key41": "4fYUDLQoXSFf2b8ja9K4KFdezrJ26yMzz98GJGk3wWjxf9WuqFNJFKY8iFpnEtUGZgGSEM7vUENjxHKd6xAoccvd",
  "key42": "5Gh9HyPq7naU7bFfCiT79mpwEBthakCKfso8aEXwnRv4EgtenbaxZVPEesgHE2bckSTKLXULs4WTrBD72aUz79VU",
  "key43": "mcsszLuL7uGy73J9r5EuNaNVWbJE17ULUZmFoT7hxTmoixdZ8xFZhRGAXQzbytVMAwAejZfdP6SQWFAj6dAEUcU",
  "key44": "5fziXMRyTbPvX2fdJGKcYRDUoTsgBYGqWXu3NyxLjYkio4juTdDwg4rwV7XWR62uBb66VFEzbK4P1AVVf7WLLN7D",
  "key45": "57gkw3ZUiGR65kAw8QBuMKg1gNu4bbRNvcya6KfoRtttryhV13sZ7kPqY1aXQ3Lce1gQ2LwDaFDyatjmLPFCfLZq"
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
