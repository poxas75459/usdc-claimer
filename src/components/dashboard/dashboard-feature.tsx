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
    "5H8HtQceTQ13fkEF7bnh4fHEVkHkTGMcdu6td22PAZbKErhEzijtmYKoHkUyZUqdLUQXNqq9XvW3X1DH2vXqtexU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMPcdGd5T2Y4Eirxx6UkA2TJ2vS1y6REehdKB4ET5bf8wQbQbW3WhksPc4b8NqqJH42vmnb3gf8cT4NGAGoyvMp",
  "key1": "2uWrpVGSHoDdmit9s9DoGuU4i23kRBtinnSVSarAmJaBZ9nF2Gky77tQxJ3QCBXnPyNrSyTjCfWBk6c1hoffyRSi",
  "key2": "2mxsowyaqiTpchVWsbWzEzdQhyLzjAyTX9tNgWrxBcD1UpHBaDxa5EAe5XoK9KMyt4GuDYzm6wWKkWEo695HPi5k",
  "key3": "pCzGeXjPEzXg1VHsLVm8fTeakHmy1xB8qzETrnM4WRazK9v7JUnLMHzmv3qWs9hUGWwttSQQug6feYHhdadtEdJ",
  "key4": "5ECfJX8EzScKqCEH5H1tKvSkC6jrkdJ8zCRiEz8crotr8zu2GhXHb6RouevshecNF93dzkHsd7zyX2FKnGfWEk5U",
  "key5": "4Gn28Tnyt7tFkgSRgNx8CTXVmyenMJovzDRJD8qyLJ7V1fXyCN9xmMj7u9UTuUyKazt6NRFKhJ1au5gjSr9sZeci",
  "key6": "kyomqm57yumYr9megMS8sKtLvHTNm7Lok3wVqb3frTUuDph1oSjbtH9FuayCQdQYJeCEYhYLxjjTKZtBoDGxu3u",
  "key7": "uC6XrHMaGkWjzdKpDisLU7qgw5dSC78tFDiFo2X2b9Pd4XDVDfu9V6ZFBtyq11CfFT2Y1CavKBVfsEfrcFWdfNi",
  "key8": "5p2wd8s4EW5LgUUq5osHiqHifySjDKjyAo9urZtVz2oFpv29HjcCspfjYcs65FADuAkD71atFh4V2fx45LPR8rcz",
  "key9": "5HjkC3VRQvsCJGbfBsPwwmPmba9PpLPJQvRdvPMbGkKgoWhog2w73tqGv4WuJhYzuRswTTY1VZ8b2rh7yqmHwFw",
  "key10": "zeB9cSQ7LC3VDFYEwkEPeYDsD1rzb7otTSfLw8m9tSUqDYauhM6QteskXt75bUxrsuAY9DjaCgFGewPZAcr8x74",
  "key11": "33XrLPHobgNmCmGc5Ug8fPiKKQZvW5tcZKZXXzLhvYXrFnuNDD4X6ZV6B1L8QGvMh2jPXGry5VxNyGKvxVV53fpP",
  "key12": "5Mzz2bJ1iUG7Sjjutvs8gUDytkSLonno6hsbKwXVVNrz9ykvAcxDogwf4DWQcYm6GeYke48NeefdekNc1bZsRnw9",
  "key13": "2Cqv82TVXN2KQMYyUjb2sK1zjjXWL59aRi9Hq3GgUjRpyUqj9dgyeFLLaN9eJThKA5MwMcopptBG5gxY8pJUNaAi",
  "key14": "21QFWMJjeFASx171GnS8YfHB5xX4cyipQJ11erALxt2RzDxS5dbnYf4jxQvup6pibF2y6fRNKMYETrs43mJmy6hL",
  "key15": "653eqjkUZ4ZKpkUeR2UGVQFFGMTk7GrwGxcYvWDSSnaiYmyCaM3ceqwbKS5bxQ4y8KmuGpwjt5dgqME9CoVTaXm4",
  "key16": "4aZnhXg2PrUaeHcVEX9ziGMben1X61cQj3qWuCcLFeFivtcPPjMJA9wzveFHJhQJv4KnxZhVFzmew2KMUcmoRF3r",
  "key17": "5eirPgQZxZEfbvvanwwc68eGoUZACUeD31tFmUWc2ugL2fiupVmYHMN4VgbPg9UL7KyKtAEdKiU1va93oz2wN2sN",
  "key18": "4tNRrELf11d8SWiwQdEZ3XyZKZRJz9sSHz4bKwK8neHySorrGE4uSASdniJH7sUS9bG9V1cnAM5DGzK84guUzMiB",
  "key19": "2RrKzEHsdYWZFNiPJwpEPNqvP8La9wj3LFhDiQ3VAVMmXvn6oE2xnyexwKLbKbchkqC177GiUkVBKRKaGD5ob6Js",
  "key20": "4b8DV6agARXvHuTFqnNoXshavXZ19GmuiW5CkSsp2xeR9XJDFGt1uk4PP2k3PezFEqWRxEPyxvkbEXfnMPQDjzBf",
  "key21": "w3sXBvsG99PYWWQE5Eh8wV5fTy8t9UiSVcmioFM4BiyiqDe3xHnzVbKPpyT3F9WkuzCtF2ZJpWxrttwm6cFnLbL",
  "key22": "4B4Ubb4xrc4Hs92FmF5onbTjtwJnGTuJ37uDj6RMTHg8i6F6FzcWJsmEh4qvQ6cHZF6DyP3xLM3kf8QZBiLETQ4y",
  "key23": "3GYycWWDZCwh2Hsh8f4zr6g7DnqmCdJPV35FeEWuwRR1ugm2QW3omuhosnqHrXbs2Zk1p2vNjbqs3GpPmC5PpMrD",
  "key24": "4joFC6GQLM1Jaqsiu3yR7DvE4jTMCVDcxjC1fAv2QNnXDPhMnZeFHmZT3C4VN7KDsD224zXgJGoFwWGpAdYxxs6H",
  "key25": "4YuRSUrzkuMoy7Ap7pYkhYQJcFc5Pqr3yRXZUV1Fk28s9so69bsPYhLL3dWEsyNGdQrg3otUhLQXh4CGSffpwcPC",
  "key26": "5mspUtsvAssqLjsGAtzSa4xQoQ5SWCXmhsSJ1CwwpouruhjCVoP7Hht9RjVP1rPTs358vX5M4GGczVUJBuybGqEh",
  "key27": "auR91rguxCg2LNLPVVGtRNR6ExvZU8zR93zHgtDDQy9QKm5T8wdRoHBdWWJ5RZ3UDY2SCAR3ZDgpgTH62rFriCt",
  "key28": "XnF6cgPozAr2LobEUaADm8Ek41pTySvDAKMosWvj9TzBvU6ze5uNVLX89cGYuLyzswC6TYVC1L9PSFKJbeKQYfy",
  "key29": "4H56D7RtWVwN4RjoYd9caj4QoV1yJVpMndVvv1ENdjh2M3tpPj524VWcpofvD4RHC7cD4tvPmJX9xW3TbhrWTcmw"
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
