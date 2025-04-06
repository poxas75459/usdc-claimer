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
    "3Z9g65k5JncmwatUaggnxrfmFGsqJRF1NTtw75x4sNJDNP1ZkEywzrSbH5b8kKizT82RmcS9nPpPQAR8dncVvJzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431EcG5qvqeUg5rftfsL3rAPkuHYAcJcEcUhxZpQNGLa1s7y6sErF8KwcLCdogAqbjvBffpvuvnQMEJw7VD1ZsaK",
  "key1": "2NR9PT8PqbYZeaHEsqjQbG1dEgec4Ef119jvqXmPHRGHHwMZQnf6JEy3JQeMoTVCeMPcqneTTgU2oDhpfCJFf9WJ",
  "key2": "27sDfkjPyt15fdeUjxXRoAhsGphLx5NnF6pHTbDJmRrFcKVxztVcFQoCcv5CEJqiVqJnNsoPFGUMBTWprGdAfL3D",
  "key3": "kN5bzLP1tKVG4F2HtJNDvJuZbJkLowgQXKBxaHN255Ag9CQxeaTyyPvBcTosLkUzWGAwZ4yWZyUvG5qpvR6quBV",
  "key4": "2fEzq6WDM1VbadDqNMHKJgs4cyEwJBijQ11w4ACPQA7XjXv1zf3MkynTkL2Ykag5Dk1b5HfVUo5bWxhBECCFn7Ht",
  "key5": "4YsnjyHjVLnJ2tyrgyjUpXKNBMrxkNucqvTHJLUpBG1VUzFnUZ3BHyxrckBGU4UnRyKRHryb6WeEcmTGuyd3GqAD",
  "key6": "5ABpYtYQsF5XP9qDsPR9YtkNoyoA4Cg8gU4C4w1StCf44o8y2urBbFhwZDruxiP2u6bChKyjqR2ebsJbL1Xyaa6A",
  "key7": "4gpFQTutCCmnEQ45mVC2HzejqnUR4EhVedWv36FAQEoUoU9TDkRiBSP4noanen6yR8Qtaa2iqkAdxfUmKChtA83U",
  "key8": "4sTLZZRMgbDeLdUL5kypejBRz7stYsQrsPm3H3DvWE5HGzUdp5vb6ryv1frUH47J1oiocEpRWdCJ22d42MaRmFzm",
  "key9": "5HFjmqcvGawFC1APYutY7zPkVas3HVEcgS7FQNS1pEKZ5GwJLrqenmW2Unv3N7oPikWiYkYHTpSTttzVacn9BB2x",
  "key10": "449Wxi1QhpyPVFguELRRNPW4xNQ3hufnAEG77eJNsVGcce8XijRdEUj5jsgKvFPRsEHV3rffD9vmeMfHyjWzN2qd",
  "key11": "5UxSyWoZsZApDkVUg31SzQK4AXP37a8iCu7ZzCohtucT3xbbhWCNyQWGBoghZfKg8VjBPpfstEXfqKQMhncYLnVi",
  "key12": "899agCv54ZMpx2E5Q98vPf1172Tf5y3kAbPUZ7ooSrKAAWg2uRqaqvpYvAfQG1PLWX4WmQYckuozX5WuHP3k77A",
  "key13": "W9qm4Zv2kmYqUzrvMS85AC5CtdKxk9ZEUdQYnaKddcZf5ndt7uuM2CVE6HZjM8mgVyrci3d1vSLzUbVRy7fKB6b",
  "key14": "2Ke85UP4zr5r8k5KTdqdBKnX75JpF1QKjc46YURVBUD6QRYEnvXZ1RZ8gmCqPCbcGo7946twpz2Bd831p21GpKf6",
  "key15": "36m1MwEMWqAbkmWAoPT53La3Kzhdox4mcnhzCbTN6vSe15unUdhTDECa4hKTmuWFHvf6kPWNgUSesi55T4jeePiC",
  "key16": "3dX8jehXohPrj8YP2tdqe83cj1jpm8afqui1Qt4UxaHiWhD5QRVRhUhpwNy3BePrUQ6c9K2q4x3Bo2f4RMd5NwfA",
  "key17": "5ag8q5TY1ZQSErmCFayrQKJ6vBj5RxmfTxVvjYj2xPud4DeqM7UCRY9aHAtaca9tshbJ6gavjmenFP92bToLSbaf",
  "key18": "448frSUy53xBTGKU6oBho3wKEee8no24Ni7VdKt34ecJhbvj5s4aRq8AyFEGscTzPFiofS2dF9iJuvQfv9tmvdSz",
  "key19": "32JS1vYrSRueZa9DFSuNZZwz462WykGfAd7aMA7LuGxQH6HcvwdcadgN16m74VTx1a8QSKU2KfjTooP7ACcfnpjf",
  "key20": "3SgfB3QnBkgc3WNoM1o1gawP9pyLTdizbk89vSVUbqiH8TwSwJS5fwGLG8JFtdXU7GsEf47cZYx67FxuwpvxuKnV",
  "key21": "5wAYKad7koQUggEssM7YyX9weovBkZGruKew6nZYZaHnNq6MDa5pLQQb3vzsmLwKmTndPBZu42rt5ZTdq7bVYqEN",
  "key22": "t72UTVoDBTRSJ4y34DtisSPVZhvRy1uMh16MzbpVkUGNd96pWbHAfd4D9Gg6aErtoJYKXaAov8QJKCGmFiYmGhJ",
  "key23": "5RKPTCAFNfr3J1qetXy6yU2z8G1s2r9dboxRtBtP3KLR5xmfUS8rAURpovhb13SZKLrTmP9oUrGZddBhGAhK6E67",
  "key24": "Sj6v2FuVDUNZ8BHpzwCPUPtXumutYmmAezWnSQqm71eAcm73wi5mLAX5qRNypWsUNX19UJKPmdhhPowN7R9PCgu",
  "key25": "291dV4Hu4AdxmVp7YVdY6zRviZ6xpt4YFbnCSRo6LFJH8YBNHjtuYskRvs1LE5QKxyaQncrA5wHgHZzSszyxQc3g",
  "key26": "5onMSAPaUyJmdpTqSYS7TChikub3MsAWXvxfQ2ny2uhRk9hsBKLyfkpXtstJetaxWWQhHqBvJdSczWCGSygqXsdd",
  "key27": "WbZa2ZfEgJkjZtb76F7BroNaKpNGPZbnpUrooD3Le4xEbGzzLHXko8EqNR3ohax28B8dxC532RbnWTWKMMgpMZ1",
  "key28": "5Y9ZaKqqKo4GfnryMQeUpE3irf4QQNVbiCwHDqXvvjqiEWzaz5i2yLumF2kvEVzYnzeJP4ra75xXYFQMa4V8j4dr",
  "key29": "5igJBo7x2PpdK44u1sUbRNtaShjF5UhfmcKtycSBBn8SDca6rUg442Fua6zRHg9Fp9dmmVsdSWAS19LRB53Av2oK",
  "key30": "ckVz4p4F65qYCvWBcypH9MbBaVCfkhR8oPVsnYwmuZ7gayC5rkavmBZjA9VssUWRum4TqcNXTYBohhLbESysZ5o",
  "key31": "5Y9sNguNpgJJbKSBF8KVu8MqTfMb2kho4P5UptGoCPiAaicom7yPWCVU8eU8MCSsLn5yRJfbcMChbH7iSFkyckQg",
  "key32": "26YEBBFrcwW3DHepQMhUesnXwz5VKJzohc7eoi6aMCzFs9wWzvocbZby2ZNkor5ucHGooTmFMbAoEShRkmUtDqUV",
  "key33": "3zHr648Vhj3GQd4PiftTmfPi3cEfDnAtETuMcrnLVij3CCDA2KFDtz5UZeRShgeBN9kBD18HF4f8LSSETitEfkV7",
  "key34": "46dL39LTnjftnC6DH8Kws4UPXJpsxwc3Rw8NzTsx8DU5mTDQQvGf5wBboG4CeLnojaaX8QMW4TUNMJCr3LJGXASe",
  "key35": "5PhN8Xcuucw6CKREGggF3a6BLrhFNPbDk1RGpL1q6Ryek1ZGBTiqbnWRo87byGUxpaGWT6jJ7kwP3UNyXTxV82dj",
  "key36": "3u1vMfGvGX4Gp9HXAfuv9i9uowcYQH7ZNKnNbSkZ51tULpCGdrXUn9kq3RUNc6AC2x7RVRzEEKafcXbitnsaF5Wo",
  "key37": "vdubbCzGrubSq8hfDc994dgiCmsiw3hd14eyKxaaaV3RrSQmtvQvYJEX4gPN8w1teFMNZemmneUPTEYKUqKmCKa",
  "key38": "WzE7Vvi8TeZRbujwGSQduj8a5HKWh6nkgGha9i1e73NmT14RYQ9PM6PvA825nvWBoCyZhZTpWBEbS1GWXGMoeND",
  "key39": "bDunD5246GJBNtYDXfYRXEtyuZqv63st24SftG1yDm3k8HE72NiqwEg5MWkUHVDDuCou24nhtyYECLdaDJG5jFE",
  "key40": "8oz8mgVEzVaoimpLA7urSoJSZCJ9RX3XTY2TRUKuPpE7Yn5Mk22h8nKaTtqH4hPKcRBw435RfvhGGa2sjkke6c7",
  "key41": "44EAJxhpCBY6UfNrX2ohGHXuq4qoKGhee4EFpLi4cAVSSUJH8hoAkGKASg4tAwSqSx92DPmekEqoQHT6VQnBBKdL"
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
