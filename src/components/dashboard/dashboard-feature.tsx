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
    "2mTSzGefW9tzUfcpXh2dbD8PoEXv6hDJe2J6bHUxNkZVviUVQVj1buRE27sT1Ee9Vj5xT8kyu76vNSbYabZRJ5Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwH93u3k3qojPTpAV8VSfHk7c2VhU5jCyzEXfEYHWo9asu3SmHfLjtxhe25SUZatLSd8riUECwA9S6SnJX64cYv",
  "key1": "4XbGMXxeWSSzocPYrbByJdeFtYPSTx63g6DszwsPpgWdChBCnxZacoQSeW2o31D3cQN69ezLJExJEpdHb3SanX3E",
  "key2": "asL4ge2jBJWfKM6sM4phHjhPcxSVTTT8eGH85e4KM7S2M86uU7S8W4BDKBabWPt1ZDSCNdEvtx46F7fXS5C1PFk",
  "key3": "3y8L9q2ArPBRs8py7aopB4swdUzbdZtUwmrnNq9KPtTrpSFeYck4hD7erge7zsHgY3YcvDvvFSoBeR2PvcYv8d5w",
  "key4": "2bh6UnsHHu3sHbsRbmJHnoKBKDdvbcmwpCcsMaVXWz19z3DaM7vCx6n3tsZHPbsug5Ja8Qro9GnpFbyaTM7ibwx9",
  "key5": "3sEhmpuEFXUBBDpMnoqgsPHh3prczm3xFPNnEEc9Ua9FFr6kci28u2VgMkcbcYdpwPg5UFXY37TqtmgPKtWt43YB",
  "key6": "21p5HTjXvJi1G9Mwob6dNLD1ktGraL2GhvNcddvQW1acwRmyp22DJbZm4mNHP5C67tjN36wTBMzJyN89cnjFxfnw",
  "key7": "25Yd8VvtbRYRpB5b7mFBBc7iJEuJ44qXE1qwow3G3bBenPYCfF8hDHTE7vyppPAqYr2iD9cRLYRzYBYYRgnpb7h5",
  "key8": "31ZKAuVe5HBWEh8F7cWUCtAYD55ZQfqsWaJqyubrBcJ675MVujvmJzhsEr1rZcnEFqPVDnhZPS1ASNj2QbRQfhkn",
  "key9": "44mx1SBk9dh1aFAGBQDS6x4xm3nXMfzHcQRYqMQFAYLAa8mRY7y4mRmJ925YggALK5v2PEgtYdJbW3YYZ1MeNzht",
  "key10": "dJMYWnwjVUTuxCFDLhsTD8DMKv9t8wAp2vv8z82UragVizP3NXny7zixMB1xZRv1LS49gN8nGNSsSzqX8cVRNnH",
  "key11": "36xw2Bj3z6eJwaTpSuL5GEQkSPdP4rCDnKW26qtjrRbW7abShhdzvW1as3NujLeKfcQ8A2vXYrt2o7bR42WGTFdD",
  "key12": "636uSSBDnnJopUVcLMDjzaGctsoVk82DG6yuqEPn2AePmnHpYTeotuorkLDgYzHh6GxzdpFRWyEwrhVpRaBvm78",
  "key13": "5jVzeMzERjEVdST1KBEnAFJw1CQgnqTKGFwhyd4uuFRcuXo7EksMnG72x5d1LN9ksVez8nC2QjtgoVNpsmhyws9o",
  "key14": "2CwZwn24iP2YZF2CjRe5fGGKdQdSuUqx781F7qtw9bxRj6xyzeFfLvFBiQzpkSYeB6dgyHycDiJ7g5mR7piut2Ga",
  "key15": "2eNSa7qRrUseH9VNKyqMF75ihvrSiirGAPhSqujNUH2Aoikzn6TPvnmeCR5bvkazbpfQ26gpTFehjpjgdQW3iCLz",
  "key16": "3jyXwGQYJeR2S4w9nswKNgRhmJ4ZzVyQf1uNv3TYe2LRgLQ7oX7dAsWf39ev4YcuGfXNfRxd2r6Ac74MDTAnrBCo",
  "key17": "4ecEXmKASWKGudqxXpHAmJPDVyVuquGsbMQpqa5kjDRP84gShVtr8sPQ8EahAWy72qUrGiGsDfq1J6QnFqHw2Rz6",
  "key18": "3KbidWqdMPwZdfRyQxdZkpsvg42MMHuGiw7h5M6vi7WF5oWY1HNZPuS5VgXGYwDhkPuRZaw1GM2pHJgN28vUqW2m",
  "key19": "3x5dEvCtjJDDXVw1J2Y3d89SC9FQ5ER2qqaBvvWE8xouRsFUtonzmBChtEC7yuw8mTymELiMJd5PhtMRQq533V86",
  "key20": "64v9yVkDCUgKzCuw6xuYaRV9V1KRKfDMMTcadoyARMwYt8WJR6jkT44J1k2ihkU44Nu8UUS17gXSvuDD1vD2ri6h",
  "key21": "5RqzEU1fRqZKEBAHYfFukFxsEH9bEaUy7N5LJ7T6oGgPqAWVmaFVoXhMvg7sDWqf4LQccuAfH3NXX5yr4iuZsL61",
  "key22": "3kwcFBPnTueqDk6G4k3QWEM1nL7zU82bhQhj38wHKsp3RhubKD6pJJfqZ41fjdLNzHUvkPA5Fg5ZZiEufc27PsTc",
  "key23": "5MWgTK5RxeDdD2gbgC1FPKMvaPrEvKCmTTJTqYg6wbgyCuxsrJEZAsKRoKrYRswsiT3at3X3F3aVPJqqzrZcjEkP",
  "key24": "46rHZwvofs224w82C25LGAQctHrmXbd6Z3GBdEAaHanWVjshGYQev8AqC3CNGbov1L2VrWi72CG6Gsq31LuDXx1b",
  "key25": "67G2vzpSfrU3m8z8NGzieAbHnEqasMYyFxYZWDumi6czwffo9zM7jz55CPes1XuomXxk6Tia2ZbVGLhFYUj8Kxx6",
  "key26": "63a6fMcqd93Cqw1mU2Yz8sgsMvbtMRWuYHwRqasfhzTyfZg9X6B9Poeo5qVHXKqiosxxbP79Bsy86naKarLn9WBm",
  "key27": "21rFLY4mtAPRXAzXds2bqtXW2PjU9JwMr5HvWh9LrEYervMho2XLXJD5NUQCtjLLvRWBvv3szP4MZfStw51ePvMv",
  "key28": "4QGAx14zrzKSU1HLimooqQn96WymQBuGjzL3NPqRZEf57zmemZ13iPqWKUjUAC2xuZqGf4m9Gc9bT3ujXc7GQbh1",
  "key29": "3vr9DbQAttoPCR2v8fKvy3pXGyEMxSM1pzu4Wzv45SSbvfxs9mT1a2CvkgynkLsxFEvZPxoEL8CkdNvTjutEomqd",
  "key30": "5DThog6fmgyYvMCnmgznrb4hNAdFZ4ULtECJJvaZ1Q62PPdLcJwK2HamU89CWcjJBnb2CTmdAtXrEhBXxgVe6gME",
  "key31": "5bw3mUpibbaFbgLEQUei4BSfNTtyiHSixLFkUcJEJu87yhoCpg5HkB5MeYx3ifKTdHZNBq9RggFmKP4u1FkWrQWR",
  "key32": "21gnrcwjkRx2HwjktHjPv9NiR2vdBrbTpcLm1wDGykzVeVSgc2Jpwv1xYoxmtYhaQu5CLQaR4sNWFtL72ox9bt2a",
  "key33": "4CZTZQqVTXBjQbZCeqUS2B2u4FDqk4qJMuDuaDZQPMotm58KUgCTkxLTpWxTuehDtfV4f44EdD8UG5rgqxGZcWAX",
  "key34": "29skSViRpJECDJNMq3GfELKdb7qD5GmTXrkyusaZuc8zEQj8VN2e3Fw1wcf3iZXX3vw42Jqyiv66Hgf8GKEgoUpg",
  "key35": "4ptG1eUyu9mhx34ZirUKB7w2nwpizudiL5KnXv65DMtUEGwJpuTD73L8inYpCrZ63HZKyzYH8v5xWi7Gs6wsEdWJ",
  "key36": "3wVn33ubaK51uJsd4mcNeKousD2DDQWfeP7Z5aCXcHq6zuFJAe62735cmNCiZhJ2FWhf5TJq1z8BQq74Z6Coi2de",
  "key37": "2bdcFWMXfMqNfD1fxmrVmPHfiPt3NcQffVD2p6mcFXkiS9odB8jAMTeNeC4hkgou7bgrkZFCmnFU5fQSuaRrM1XR",
  "key38": "58U3GUXP5a2irnTByfVbL12ew7tPx2c3STKEEjgeM75WjikPkm5ABDUMLdUbibVQyNRWw9aRPwkW6ecXHyqQ5fWY",
  "key39": "kgpbMKD9mRu9ZH9LJGsjze96aGmi8nhwdwC2sKX91KiGByaV966kxknmrs8kL2nHJtTzgFvg8Cfh1Todx2eEDnw"
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
