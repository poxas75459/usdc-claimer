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
    "FsGmgPuysrFDPG3mNjxZoTL68cLQL1Hikacup7PxAJmNijDy7KehUFcE87q7nGSu5ABFFH4cNEEdrmhuRvBoLjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYb4aWPvHyTJNi5LKzLzC4sHk6Bc2RqaS6etrospj1RdoZxuxxHHz57AQiRLbxW4QdUuDkT1UcsumhTUXXA5Hgv",
  "key1": "4wrCn3SfwmEWDV3obXSP5kLfesPf1xoYn2MGfA5eY2PBzGhqbYeAGRwegvDKe2frvxCaRSk3QWQfMksMshZAWgx7",
  "key2": "4JUo7LZi2Crwr3T3PESSB8HmWt1E3CCJexpt3w1mgbFhhHRGdz25QYXLzQ1qka2BuiFDXyMYvU3U4vAHBXEQDCKb",
  "key3": "4iKtyu7eQcbeSQDD2iLDupnWY2vHuQbAMDatwVorL5aW4mf4WkYmoJw9wQ2eF5gqyGATqQQooFB7bXqTFh6q8vx3",
  "key4": "hUytnxqLiDSMkvfVKJhh1hYs6vjQcNWD4aH5X3QKm6AcZPzdQSmcxH6LPV8NUNW8AMyiVpF7Za7RgHfQ7AMiiHT",
  "key5": "53xztkWMS4wnLBaXZMHQ8nSkXED9HxZcwZzLxgapgymzfHYg3mruixhpns2hKpoNNJf5vq91WEP7ambsFNKr2Er2",
  "key6": "5917nkjq2EL5SABfynfpZa3NAzoZdHjBgBEcJioCSvrGxwJUPKV27ZbGtgJ5m9KXxsLLGRedbBesQga5xQxxxK1A",
  "key7": "5Vpqiac1uGgy3QHcaGvkpoawego82CAaWYAvMehLRjrHXXcM5EcfvDDDBMkfDbCViGmdTQ7JisM5QEJK7NRzUF6y",
  "key8": "EqamvvjXQyUNVsa67C5LJDxE6hyi7YEK12V4VeLW9DbPu6iSVj1mN7UetUcA27HFBy1ETb6WQmgnPYUKQo4UePw",
  "key9": "TYvwRdvY9QT3KVZtEUqSUQe9TDYymiHnfz6542qyNSKSxLrqx235AApfut4yHDRfx3Y5S1sZ7E8uf311aTpjvwf",
  "key10": "4CbCD3bXVm1SF3hkeea2v7kfgxrUMpB4rQ81fw5R5spmns7meB6gxGCoWFxi7NhjnPZNVEqTnXLVszAWCX3t5Kaj",
  "key11": "64CEvfXZjDpX3EWgmMb5Lr74ecijoFgjDqn9KH1Rn4TdBSB1r88vQjPGkWRFVhmRRNGs2MhSmSjq3z8NpWnoLaFH",
  "key12": "Sa5y1GEHQP3qA2YRuD5gsw7hCryf6cPJetoXw1KRTD7woKPrjgpZo4GigLa4ksbp1m7S9efkVauFUPQPwNfuGD7",
  "key13": "5KGQTkqRpCCSpsjYJzaBT4KqunUNBpyQXEwFU9peWqRz5fa6DKwCGR7ASQJJeXqLGR8kDLs3XzNf7Es4Qw7FBhsz",
  "key14": "674a1JaYuua8FByVkpj77t2mqrR6cYdan1hzQLngnagYaaNxc2mCk4YammQU22rdehKzw2u6i6sKbsse2cnAgXhb",
  "key15": "5pb2vVk3Da77Z967UfxrzxoqxVfksKzJryh4RTMvQzTqLjJ9UiezzP569v6anStVJGczZ4n1ESg4g33NFU1r44gG",
  "key16": "5YtQuyV6eoUgreGC2X21DmFppVq3SPYjQRn4o7LFkoxvkgH7rVKeXjQkJEWyWx8jMsHyxDqZcqGkYeUZmGW2idt",
  "key17": "5sUj8aWdkdZaGD7B3133Pt27yAynxUgatC77bHVqt2VYb8BXdcrRmU2kvkDJJRdcn1ScZ9ZYWVgXjab1bLWvtmz8",
  "key18": "zjX4qAxGTusHrvkqvL6jWMM7X8uH71WWzB3ao9jndffhYkPsDz8pr6PTYJuXUZeTgJDQQAD5wYdiwtGmRh71ida",
  "key19": "4f2aXsxZsj2NApZEW8GSS4teQHUZLEFnXzDnapwS2x3XZPgJY1qY4jLTTpUgNfGaGTwddv7PL3qas5jKLMeBnGCW",
  "key20": "4rGW41ejxQF3DGKxdfxmn4BDRN84FhV1sPF31vjiVmzmCVfwFj3hNeW8Xm1p3aYLwY4ghjm6jRiLsw6DUqCpoFVC",
  "key21": "3uq7BY4zsYep7B8c3UtPab6xozaReq5bstXqMCbimJq4mBce51UocRXs3Fc4qPGMhGFZVPjtfy71qGPMGL8uRUTy",
  "key22": "CHbxgyarHuq441ahZQaoiJs9Wk9CYypQsGV5gT2EKxFHdbkfUz4tnrpkxuTQ1ZBDPNZXPUdGfSPDbnJzUTdg9Co",
  "key23": "4o7KPr7yCuXxZ26wPoukoScrADqEUK3vbtLFGeJfZjYoGLcD4uiDxi4ZazMpHtYqDX8aikCSNV4CmKKUhEpx9Y4C",
  "key24": "AgJRnVN8tYzf3HLZnjCzKEUb3qQhGgf9psgbdzCZKVpDVPCf8qPCM8UBxtmqthzqeGxPLMK2aozmfC1A27kr4hV",
  "key25": "24ve39A4KxXkdJ3CczHULe35BzwbJgF9qbW18Lk2dVHP49LGpCqkpARSkCNbZteSpNJDxQ9CQgxgz7wQCmadiHxZ",
  "key26": "sgQXhq7UY1o6jQ3gCfQBpGjNTqb4ZnVwvyraWDqCKqTEHgVU2WpQiRcgRyQhW3VUFRdrHG8C1Xzt27zZEPWcKVU",
  "key27": "3hsecqedVGJvyHXZa6pAwFAwtiBHKrugbs3ia65aF6GAwwnSMTAJfePWFEDv5U7za78HEArxD2wyjwdmtRSgqRWz",
  "key28": "2jFohaueoY9qFnd8SDAtJRqvASEXV4FTKBaPmmyvZZL33SeiTc4HiYqqi8eGgGvTsMY2q9hcjckCFEMJDJufqfVA",
  "key29": "5fgMrzK4mMJnisXzhfPHE5du8dnjmME5RBMKTRHsvKdg7S1SoEMg5Yvaqmc9diX2iagXU2SDyXuos8sjk9RBW9uv",
  "key30": "3VNEC4J94SoqBBYsZiCtKHzodSTopdwiCxghkLnEyzMEVdcGdNEMSatHdaLCX4ffdAyLSrDKRmEqbNkGtCrixF1b",
  "key31": "3vutwXkyyp3XnNMMsEEhnKKoNzUv9HdrAuS7kBNZLsKtMK8gGWND4AK1uhqNzUrXJbmtaUqTmF9S4dTsPYBJfeTh",
  "key32": "4zrmWZqBr965RZzKhMBMscaHUFB7mieSaq9vZtBP7wMhYAAi72pppkKqTszL6LeBwZNAhtArC5F9nXip7JLyuhsQ",
  "key33": "aANbPBkecpCiJZwYNSTtz3JWARjVMbhC3AbjJPrwv9sDzaz69HQ4woyUM1isMKW14GALjTbchKpyW3iWbNnazdT",
  "key34": "4nVrmdpPJh1J2ZMWiRCgSWBQjgWkBmceKw3pqdYsyA88iw3ZZGTMRXQSBNnfpHcHUp85V1449decowGXVE5KE5VV",
  "key35": "2nRTuCkh7FzxZaEZphWnvNV4TDRcC6hsYSHSB5cUN1282XJExzhoohCwx4WoT8JaCFnohL3H3nnhUfJ1E6FJGmXG",
  "key36": "31m5mALuUpFhv8CYvCXh7uEFQriiHoSpan8oHu8S2AHVnk5st11iJE2u33cE3c2AdKKyJEsUNSqm2KgaaDtyVnKZ"
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
