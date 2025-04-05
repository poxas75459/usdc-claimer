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
    "3y9Nx1BvKJkpvvbZwVwg3voAcGQPSd3TLBGPYFRPq9dttDkbFuquJ1JC58cigyi1jvPJi6ihJ6eBsghjWf7Z21gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxmEXC1wJzLi8MAs2FGmYQpVuRga3rnW3BgZQcyJDD8L7ayL24f6uG93hcWc6fYZF51H3mtvixN9LCAWmyJ4MuV",
  "key1": "5BYqAxJhZGur7K4PqfqsUm1tvEZ4KSRMSLsPQ8X8AevjXWmzd8xitRKVm3bcRBxiDET6B5pmFn8A2vyWchJjrftT",
  "key2": "3SA7kKLVXPHNgmRLdJndKY8cLDtFsdSqVsS57KYGvo6dgEZaBHK6mFs3DP3a9H3z4L8NDEagx4oVaBhGNJg3k8Ez",
  "key3": "ydCNHf7JdRMLxoL57ZzuowyWq4SLYPpmHLL8Fq1PXtxC8vJTQvxfVs1yDhDk5Eb4WWaSKia8eexLMYxmP1KvMyJ",
  "key4": "3jDyXJbCGJPPWy5LU6giERkzQjyLvdeZuB5PjSe793q6s63XfrGjX9Tf3FP9gQK5j4yfJYKGD4YGkEAGbagHBd4h",
  "key5": "2g9usHsSuWXU7yWFbQK2iujbyvS2dWvfYhQsGJjpVwdWRiHcE9GXP894ZLv2RdwZKfe6FWqvhLSsGD54cUeowezd",
  "key6": "5AkVLdZ7bn7JbJVojxqKQ5M2cKGRcUPA9E6mkGDwn2gNVAgMypEprHFZfxWkYU2ssh9shVtRFrUW3ytE1kPTkyzP",
  "key7": "4meZf6xXXS169CLiz1cAz3jT5Md2hor213HtJtZJo8Lbm3phdHokbSqTbpFvoPq98oivPUesixgzvcc2JsSkJaNi",
  "key8": "4JkZCjXSeiDqHQ83V2szs959tcXVtzJmGv6Lr6d7Ev9665puKYyYYcpZeyJ9uskTvBnboZLwXqhX7739dBwQHMcB",
  "key9": "5Uv5PavyGdVKkAtiyp9X9yE2vLw8nRDmpXKZ2h5hfg3HBUU98gbBuv9Dx69YUGNnLhzweXGAoPvvvJdUynbsRwbu",
  "key10": "4Nfjbimx8mS6kBw7miC2DoiSMY2BM7eF4NHuay5HrfowBE4dfPyHJwAZpoE2BCJizjhSA7SrE3G72w2gfauahQyE",
  "key11": "5uuBe24aoEoXsGi8aLLYURtGNJUNyNJcZrtqkUhZcQAWGJmhUkUUg9AaP9nFx8opt6txnUVgz6PSMcZpVfa8uKnh",
  "key12": "2n2jCaRimF7f9pjfJWYkYiU1X4S1ymnaQKa5jZ4yRPZHxdyn9Rrgq4jVAaxWCvuHuHW2REZSrW2WrvetA23E2nYE",
  "key13": "3iA3YSN5GWMRP3VtwjiZtLyi951S7dGS7oyUdviwnFLZwr1heL2QNrvra9DxNz5crWCEARKgJjQHfdK79NJUaPAE",
  "key14": "3FM46LXEyL6cdxj8UFK25CsGovY1DBW4yzT51ECc9725XU14pcvhG3ehz9XXaDCKneBVamvkvzdRrQFrfv1LpEa5",
  "key15": "5ruxXVZudvnLDXXifPWT3tuLWbXLV1XASNSHfGsR3goAzYtst6nEM6tfuY1inJxQgBudL3bzGduihEAQx6JMwNF1",
  "key16": "v4JbpduCheDR6Con4yeqPeoQMin9bbzHwzcyxu6fkQDwp1nLjKFpW7EuH3g7sLNpazkd4KaN18Bj1eFGS9UNJwi",
  "key17": "4Qy93x6tvym7SqFEqQ3Lxg2bdjPuT5E3tF6CUFwCtWha9BytUEjKGZyEqcLH6mrvhuhb2PVxAAzDPJDENtQkoqhn",
  "key18": "2MgXZPDUqVyt6hXoWwEUmMSuqJew3jd7jgxXMD3wg4zkLKjFEEudq1xCxsXWC3nr1cMfQHq4T7dE6AuKT2uu19BW",
  "key19": "4Qf95XcNRBMzeBJu5pWrqR5pET3HXpPYJRNRkgG2Amd66G4EdjAEjkRhTJU8f1pWGdR5JduPZYzbpemVxKCCok9d",
  "key20": "2w9MDGcf9yHfWt5mc3x5dqiF3mKgGtDkrkdnqA8o9o6PJoeWFUPKHngArajXseJUgKhDNThBmQtZThQBij7Bmuac",
  "key21": "4EKzSESXahnqSfxBeKrPiEBEMSC6ZuDAmpf2LvhS9pEQ4NxiU6QdWYnLk4wzyztFwfWcgvu7BRPq5er5RKdkfRYN",
  "key22": "p4xgA45uWiDjzZv6C4ZYKbTtquadWzKRohm7zhwDiSWTmJmB42QeXYcjTbuxs3EAdEdLemLTEqt7xnGLChQSmwr",
  "key23": "36Bg1VSFQgRKFuBDVYLRP5oXDbxmWSym7dgdXzmY2dGQEv1BvhTFfG331V3bBzpsdNzqtXFzGkrc1HCF5eUtm9uo",
  "key24": "3XRhw7C4kPgfjDjCAFdKTou1t6TLeRBvaLDKoPvsm9ADDUoa8aitAUbW9W9e9iHFpL3CFnhH9VtXHJ3bRQTU8oTV",
  "key25": "4dgNgBPeKpkPbACdZ4zs7E5fb1UcQGgH1KWTWeYJJayfFSYDdjRmpj2HKuWbboSBp5nLraToTzsxkGmtwD3adLP7",
  "key26": "63PkmkJsdUT2TaNPgnEN3ehzPZGCmPKnaYWc95DCRAAY4CgLjrZSaNe17aEcZPmkc8SrZfZfnr7Gf5XKEBMtQJ5H",
  "key27": "2Noe4tXN2SARiNuVRnBvq9WDHb1ZCiKLbCjcV5pnCMkTGWmpQhin6bHxpPndWfqHCcLk57HdRhS5zGRJsZysfDtU",
  "key28": "3fNyg6AtTzDLisDQKFJy7KS4hKoKHeKebMckrspAtsoZfSkep7w3Qna5QDPQLYAokE7gNnkZ5iUWMw7SeacS7ED1",
  "key29": "3bYY8kJHC2txbcgmV1XV6xPiZmWV9wQmpu5fQQ6hCS7TSebNMvP9eJJGK12eAWz9UmEe1GgmxYK8mZy2Y1gK1RTU",
  "key30": "63kU1EgKgXM15vFBKJvfZz5RtuRLoCR3sqS8Dd9uZR5zJBUigfUEdv5ucoUKwCumgVi9C4qznsmoWLWw3jyaHdGK",
  "key31": "546L5VEhPCfwcKXBFLUtki2StFvzErC5grc6fC9JX63rxzgMnb5oQ1ATXTzyvHKLam3YDVgVmeVr1LxiqTPdXtnj",
  "key32": "2hcg34xgSUxfcdGFexNwAY5Hicm4UgtPoStBdqmupQMYoX4WPJvzovaYfvauA6XERwLUC6KcyszKTHL8AfJfzH95",
  "key33": "2EbG43nsV8tPt6m6ihR2HscW59giUWtfbYb26oeJRazUfHmwpEnypZnjJi3d6gjPNbZPThJcZgAEqGC4BWHE3vL7",
  "key34": "2XRSep9Mv5neEvaVaYy6FeujD7MHGozjiu2mbTUCa4Um7WRjqv4M1wR95eNqaZZwK6fdb2nRniyBj4JCUDsXMqKW",
  "key35": "2wUhz7pp5Q3DzHwQwrdszQX6pe61ZZeStDKeaKCjDenzxrR1pKcfRUVPwffV8WYDpxc8j4Ws7CeT5XPDtPoyA8JQ",
  "key36": "59KFE3zYE3MzAKszG5oejeGCgDzmUQ4mcRnY2SJZjA6p9TrPoky3GfizVNRdX9HrMiwGhSMMGUSiRJyPgxwxpPPW",
  "key37": "2TeGDjCmGFdzaHxER9jcNtYUVtS2vZY6wLXJ98tbqRG8mK2G42JLQquSWxbNfUbvjhagfFavQo4nfv14Cvi5SCPQ",
  "key38": "51KVXN75cRhyX5dnkFtQ98eWFUkJCy2LXbTVFj7RkdCrKnArJmivJMCiL1jCwTnG2yDH77CcgnLhuoResGXQzu8E",
  "key39": "QZRZsEWB7mnZwJaUE4RG3Hv5vFkpGpnhhCnm4znXgme6xp3yXW1H1rEswZJbGsdma6MLiAckgeUWxdYyPLDT1fe",
  "key40": "47QM7UTxxVhEBWcnBLxR4XtoPBujn8wi9jpm2b55wG2HXbgRE24ZV8r3QDiTMQQTsd4c1ffxJ3tzLT6bSZ9T8RSu",
  "key41": "4XSWZEHZXd3axKBJuQuEiX2Ry2to2z5s7ZpghQsDJ71rKnXhCEHqZ5xwwSF71P1d6wRzQajktU9GHQrKUiPtXGLc",
  "key42": "fCSGyYL9xQxLeL7DUt1GWak6S49Jbbe5c2WjZQU99BeE7tDx5xLS69m6iCsy7f7NwKRbt1WXMLAdmFK3BHPfZDr",
  "key43": "2tF2f2Az7X6qxHbNMhYdpGqyJcuDSS2o8vEyaUhiQmUgfJ2wwULh87Hoxq6U7m8QDb4jjWZUDsiy2U2pxaGoJdQt",
  "key44": "3Agj1Acv3HFf4zNE96X4eYW16Z5CvxP11sxJWJi46LkKmnHs4KLMHkACTvVbjhbMhHBRZUXf279CGwbXP3bYpYXM",
  "key45": "4uZPPZsZLuiq6uLem8p1jSZuCJrT9HGKGTeyu1QJUdWBnasCB2rtWbuQbCugPtSevqSYvJmvb88K6AUM6REAZiaE",
  "key46": "49tr9GpNZC4thFTvemRNR5sminMmqwEpaep4ZjAay7wBzy7JNSvmp45iPvQL5AYYxZ3yBYvauaSYcaJmEbP3oRV1"
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
