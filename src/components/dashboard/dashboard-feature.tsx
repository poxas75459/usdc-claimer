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
    "2x8VnLzqxFzzwVjoq8Nead8a1y3PhxD92PRRRdN7dPgFg3V1QeybszkKA3RS4H4qKuF4AnPh81bWoHwGaLCs8nHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBL4RjG9pgN7Amc35eUJ426wbQQuX9gR4w1gnSjPGd4tuTUELQ9uDFdccRgqUGCQXMR6UAZeTCaJ7CdARAwaggv",
  "key1": "3nCRyrR3JG74GXqmh9ZxjZqqU5GFs825x5sozx3y4M51xCwN5JG3feMQSe9Uo1XiWkH5tjzuFUU5Z8NtVTTJzyxG",
  "key2": "GoG4gZ1AJ5GdEaugqwTAgJAN4X1PekBYZMvp8LXczc4Q1k5LtDWeKMYH8kdYRwKMewTnKfoVMcV7grYWTW3Xan9",
  "key3": "2ipSowkN4KXEKxRR5V6N1ZMikic8jvHzRYn5RmEG5wtnYpaf3eiLgbMcgZKVwMW9Juk4CXaCnGgTnULp4UL7ro5G",
  "key4": "3v9vcAGFueyLNWFChhYv7rCgrPPyTMWkSViaMPgm42H4cqEyS1EJvkdrKQ87UMCxVRRJ7fS6yGYvaTsYKY6gKojf",
  "key5": "464uyFtPfsn9QVAGC7H8YiWxuUUEuVwcxwhdHaDm6WLi8dckm4cjiPnd8xUdZ3FQEnvMmPLX6Hsy8V73oznbRKuN",
  "key6": "3D4K8ANQmyBZ9wLobaoiLZ86HBfcrLcpwoXLeYhHgjyu5psBY6toN812N2zz31gRUEgAxe35r7JiNp7du9NU53Hk",
  "key7": "54BtcbkqY86LBtDwEtRfhDKzfn91W5g4Yh9YSyfriakRBecoyRwP3xySNAAj79gZdkDkkePHcZPdhRbXD8LPHdpz",
  "key8": "5X48NS8AqkHCeegENLRq8v7e54dLeEn1VFoG94TUwnymrjFUCx6zrN9jrrFWyxFehDRKbjt87jg2mfTVUYhAYTZD",
  "key9": "2kQxCBUPi5mKqxrRsrBQ7DA6BvobRfg1xnhmYLhRMtsyRXZ5iQeyXE5CfpZrpW75kGGwHqAQWNZyaDQ49CaZET3N",
  "key10": "2JC348o5LCfUCvz6oJ1S8J6WcTMAMsLtUKzdBN7uejAKLv88eqGkNTKNy3qGiv3p5qs6L2zZL1qMThqtdiRqV8WF",
  "key11": "3vtL3Q2dAaaZbPopQEgx3QtCR8R3ZYmAuxHDbqZMVnryfmGNm4kteocXnVf4oN5JRaiyULYJf1FxPmzkB5KAodD1",
  "key12": "3EQQeASSg2K38YktnBB6hqSTyPfQGzhQnYcEBW1cqMJ8Rg1wySyvPest4wgcPNSTRB5MGhZAAXeMezhckMxSAAm1",
  "key13": "KXPbuRee12R5YJ62nYKo7WiRuEn41LQ9au5qFP6kgxsQm9oa9urD9pyzJ5yrFohsa1Dic6SQn3Rxe83stoKEDAo",
  "key14": "4j4crmbnS5MtHamytXer29N5CxDq4p1y4AqGqEekBkzsBqcDMwAVhXLo92Tn7d5dHPP5J5csygq5RzxXxFNSoqrz",
  "key15": "4iBgQG9FGTDrXoR5CpiQRtwSeUpfxikc7AJYHzXyMoxqKQvPpxuygabwJzgGTnWuNfYccBH32zN1qXzth8pjbcdw",
  "key16": "39UKdtZMg3zGDSYd7MvVCrugLnfUZXVdZZtUcPBjSWtCJAh5TgVTBTN7Bq83VydkqhaHJg3Sr1ZfGG2yi5ur8QUV",
  "key17": "41tg4kqttne5BHpQ4Qym2nmnYokUz5V1Rzm6Nq6touu3NJnX1nJNfwLUZ8GMoRfgrHVYixkhUFPBDCKRuu1cwzXi",
  "key18": "2ijkJHMGT25T6U8C1vEuUKiSmKXhq3B36ttji4uiexKcY2HGhgqH74sgN8wwpodjeUGfMzRfzVFCE7Ay4vhMPpXo",
  "key19": "4o3L7w3URyostEwSfutpMLgvbVuq6uRfhXj3T7hFgo4GAWrXUEj19XwL5vHVXrg8LupY5c6Pm1ZA3A95V1R5tQSa",
  "key20": "y3YDb9S4nAMUAjDscs4pFYqUPWb7k7g26MbjgHanuxazzdTKpVUbqKUEwDdY7G6Bxv4PJ8BdVZePC1zh9Sh5peQ",
  "key21": "2PNzWNQqdqg8rgGUYMA6YuEvoj752ShimsH9HgP2Mk4pUrkncVTEnextXJ2euF3Rp1L25YLvSqPKw6fgEQsya8NK",
  "key22": "62LwyCdHK8sot48WsQFV2SkBw4EFfvsBTzszmYenP6ifveH4AStBYHpoz7cQw5LdvFuRZWB8ypBajVfx7sk8KFHK",
  "key23": "4rTi95kCY1NqAmxAcKTyM9prNr42Q5MSCLdbURtxTheF17cF73vFqUaUHSysvBbBU5atwmBVviNDSTB1UFTXP3nY",
  "key24": "3FwiWEw3hWFJBmCPJCDcB2nrTG1q7CYQjAD9oJMzhDZFcAizLqn3GczWMKC5a7TWsNPDwXzxXP1d2wYN8vZ6VFHT",
  "key25": "65s6gea47K1RZjU62rXFMCbnGRZ3AVhFHgLcLYYmHXyrhThDrCP3RxWCc62JEG2FTsgUTmFBRqWJhAu5dcK2TTPU",
  "key26": "4uV37Powj44S1bPWbj1kb6bKpXBzr4svFbgGVXju6ZnxUaGMRL5XSw8H5PgbxH2VPuzwYyJZah8qC7KSRxuwq9UX",
  "key27": "2TTyeM4L2WuZ7Jf2DEkQpMr22SYywdZLr79NgNszhpBCBfvUZHN1RtngipX6fXemVTGuvvmNwjMjaz47LmZGjE9H"
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
