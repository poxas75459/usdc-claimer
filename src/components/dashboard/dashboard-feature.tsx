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
    "pCtwvAEpJKbUmETuUZH583K1Jw2ZdzTTJ8pneC2tkNUUcddtZ4mAHVvNXAapenyFtLosxqH1yHESEVpr7gZZ4MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jNuxrKqqYJFe8H3MJRxUxWAjXJbtPTYkz3DmUEbwUzL3Qp9eAJyJ5VoNZYVFSNP9Kpn6bHdNuXvQ9SmQgC6tz6b",
  "key1": "5c2BsfzNkxFup1foGhRcBs2Xz1Xz995YKXjwniJ2qeoU5jmELFLCHLdRqy2WA7XuFJWEbfKkA9pub7HU2mRAPCMa",
  "key2": "4S1PkeDWfZ62Wju18hQLsuGLQVhe8Zbp5YtBLL3nsxJpWsDwrQnndwMmdBWcPMXwCwAvqcsMkc6GVV2gzrCB8BLX",
  "key3": "3F42Lb18RHJWZLA8ZUZUeXh21mNt71NuAGM2djtfU4XtEankob3JjHNnGiMbYubcZzvkNeBcVxqzTV2fg79NLoqP",
  "key4": "3WJyiL4JzxAJgGR3agZkp8ZPfmZ43Xney2YFzZJBGYhLp8YupFUbU5KAjActKstwvoLtvipEjA9FS8DxUZWd8ptu",
  "key5": "65CCxMAgHwJfnJ18Lc1fkqUUx94jaxczXCTiMedkvEcpeemJDYToWcSCWMS7hrJhuw8nNH62h8i58iehn5kLDcUY",
  "key6": "E6v8tWs1QDYD8RXcrMUzygL9PHDdWyxjvoUZeThpmD3Xt1kowQbpkjpLeJZ9bCjrKqqPWFDJVodbapzk1sz9GG4",
  "key7": "dpxVmsMaUqCUsLefdcMFhHF3QSHKiJkWKddgRN7fuH2tLTo5mdduuJ3fKkiiFVJ7zynNDY49uErpEyCa4fGEz1v",
  "key8": "4qsM7mFH9jzmLcitrwcZbQDjsVXMNuDsBiD98MKsHEvpkLkrMnfjzaERx3MC8t1sXJ5p6dNPfAYPmn664QDEyYnJ",
  "key9": "5VTy4Uq5kd1W3iVRCr1Kj3incq6DLmSDeA6juvxkg9Qsg71TxcM7oW61MxRtVC92Ar2BpXrdfuuqFBCxLcgMP2iF",
  "key10": "2kzyrC5wuH3uLZZBAjEUfVFFndjKQH7rPJ6HmL24beebWaLAxFxAhoV4usJkAcE4EFA8XPfA37n2ymamuLAtGC2f",
  "key11": "4rynAtFCtBJGD1rzV3Mdub2oNcRnz62nVYZBeVNHug4LY1zAf6ayXqQXKukcCTPCty2ni5kovJUnRkLUS1UEkKYc",
  "key12": "4zgBzJCZFctPPzv5TB1gYX8SAkifLEDe3gBHSZtiNvVZmHW3rMNqmafxn1XfgNrWnZbCdmbojvB1K5mxvbrkK35g",
  "key13": "2apgDxrpLNWjcL3MahtwBz2azCQLm8nQqu2mnvWE1G33d7kooKuo6mcXM74nWhZTCRUf1FTv8rma8bw7RzwG5Ywj",
  "key14": "2QLbTs7JZdAnA9pdhUrVcMMNXvLTnpNBTpr8ggp86wj78EkNocrxitsf9KfXAUbbnyGb7JBT4UrunDDHEZjWQwTk",
  "key15": "3geKzst1CpACbFRsbcTiENwqiwKeB8tGonSWaVcEEaa7umhGZNRMUUgXWqFRZQH9KJmZMzKsCtVP4EJrhCRCM4mU",
  "key16": "Q69TNAvjuobdjNLW8h9iTugSmQRXH518u2w9LT8jpGSjiSTbKK6vkX3PYU7Ctb3KFGtrZNLfFY6WpKzMsoVzs2z",
  "key17": "38VwoNtNPtEWsUGHxiKNWnVBjBWfT2xxf4F9edGG5ZXNMTRw7moHvaa8SYVY61WNrv7eeRT7aD7MqUmgjzHhcq37",
  "key18": "4jgepTbKcVRdfUjYpCVLe6U9szZUzovE2Zvz1zJjcgNd6sN7U5KwUh8dJYK9azevQKWGUcuN9CfhhWiWApHbSKzy",
  "key19": "LFZPDd92Wn3Prq35ZK14gUzVPDn8oVDbnjy6H54LjPpFH46cjwzLXCgx7Ap7jdR6ayhiNuBp2pQoNcyLHdhUv3u",
  "key20": "42g9zoL5yUz1FjpkKXrHHCiAiDePhXSGSEwhcgyukMiuGHZkXsHdH5zyoVqShoNbTDpsVuwHXeUgRqWZQry1CmdV",
  "key21": "5Txn6q8u28fAg3QvsKH6WZfiuLFFezhD1hdMVYLitcW3m6w6ja9w4gbfrUBnzBVURwjChzYTx9xzahgWVeGZGiEP",
  "key22": "353ZjGR7p6rgiEND7CeSETJoPvfE5Zqm32uUNWzAXjWqzxQ2DsLUqKEBYAHbxnWqnfPat45SZt3n1EvHWH8YLAYY",
  "key23": "42aKYyjCR1fW2cjyMUyBdLFBHD9uaqGfZ7QF6ML9AZgS8RoQqgewQmwP7zEAKDshaWs8jZA6vT1iHmQJZac7pDVJ",
  "key24": "3bwwtKbnWjNJZgo8mykjUfuaJaZGZT3ToHo1wKF4iPexhEYSzewLCDjRhx2ek18r8Be9PkiBah2CdjS7HAt9H6Po",
  "key25": "23R6aMJcPdHsbvWqykcbfn911itNVCJWHSXMuquq8yYLhDPBBVgxg3zZjzLuwupuumE53cyX9C1WQbfwxidw82fn",
  "key26": "xTmg5d9uMzPgVGtGzsBj6bxwh2tXQcngSy13jAVWEbL1vGtpCSa41eGNnaHkYXqUaoENGAC4ZxsnAb551Aoa1ez",
  "key27": "22VxKm82YFhUrSHnE1mFSxP94uUUFXAU9M2B35KrECu3XPZKGBVvhzdRP3pBQugAkVJuCnLEqvtV7p9rYg3cQVMy",
  "key28": "36pi1MB4WP1ANM1WrZiCKTLLLhYLLvE4areEn8XJfDPdHDufNfFWizU6bApwT7gbLqPaBSzQ5eExtC6BrzSsKkkD",
  "key29": "2BdHqxX8sA8fX9Uzwf8ZEUvYt8FjbJfAurzxzE1N3TuSC7xCgyijB8Hwn1c2tzVqvsdHXf8oV8R7PEAWUCHSGbwr",
  "key30": "5eJ4SQdwUZKYEXbxdcPM3jgtAmddGVNgUmq4WNSUGNntyaXTWU5MRq1ThQvbcjMoG89R3JsSCmYX1BGN9NgQr4Lr",
  "key31": "5ynbuZb93BsVu8H7hupmmXjHDrWrYXLerx8vFSs82KgCSdnJxn21boEaKHxeGBJ1LddHk5YmSBGg59fhwDrhNK7b",
  "key32": "4iABTGvx4AhvNKDhSnbAAV6n8w3KhsBxggFkS331PBQ2HcnZm6oh3GsuZA7zV6cEwqnsCzfHEqReu8eUNYvzfB2F",
  "key33": "wvdvDpmhcnmtTHTRXP8eiEXweSxbLD84QMFR4UasFWFF9tB1JAFjhYDHZToaYgPPN3i8vQsiNPin8QeT1BFteDP",
  "key34": "4GZyaj8Ga33KAPaityBHCaU39UT5ZneykQFmrusdgsCqoq1wsepd7pBHKn8YfKeWyqiQEfCDGKsFYRGpbhZyhqta"
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
