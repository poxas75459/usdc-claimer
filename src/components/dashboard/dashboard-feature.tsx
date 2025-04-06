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
    "bpyox1jVizKt3i2XBu4j84nbYXGMkxds6UoJihxZf6xgYaKFri6pg4d95XZrtUYGAw7za7boGJkAh34t13g511Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29eZQ3JrWh2kMkN3J5B2hbweW9R2bt2TGngQWmJFv1sPbyHU8SbNtSPr8QLaDv1xdR8gkESWUdHFJ8GVEx2D4WLJ",
  "key1": "3RHjAndmwNiYVisX7iG4vPe8feP3rwP6YmcsvX95VH1RgYNMhS5UPkUnm4JVWHbyP6osFvSEihRq3gRnUQXUGq6i",
  "key2": "3eg3XTqcWWpvAfQVLiErZiYnBNyVytwvCaTSpW2z3TcaHqkiKwSvqj8KTBGUSQrQB1noT8Z7PtYrCUiLr2Zmn1ZR",
  "key3": "3aD3F29athv41F3HspepzZwpJR9q53emGAoMaTLPhoAVoPfsyY24sg7GRdNDohnV6GqDFT91zPVHVv2jaNzkqFQw",
  "key4": "n7MyP5EzcfrLQwfnW8TcFhedxEzEAcUmqvbMhkSoma1ELbpXSPhu3zTrzsS53p47bD9GrAvRo1DaYzBN4rywn2d",
  "key5": "Q1pWCqBSyPx74S4pPrmoXEbJkpLJoWHkBMCv4Qp9ZBV3rKiVLkNM8x9jeQGgcHtHRdzqEvynV5xCpHU9y2FeoDt",
  "key6": "2374gfpRi4ZVaiGqmCr5TaeBegUPDocqS2TmoHTjBHauQATae7Pt2MVuqvpj7MQ4YVu9uQh2newJJg8rn9D2DPor",
  "key7": "33LVxGaSmVWHv8sUMiRdm78ZpYqffgbNPytELeHTpkW2yHqRJn7vWuNZP4rVQRyz21fCtVGVftfeafVKrd63E1LK",
  "key8": "3sYJkDWPZ8im8qK671VTGNJ9HZ6cv8zVEb842gMBx6rhKHYtTNgkrhZhCCbkvQsxM4DVreuTwr2CsoVqYY88B3Kk",
  "key9": "4DU8Lx7En4gSADfBQshbg8vY4W52YdpBm71qKc4GyYhkSBXXoyGK8CrUEby3cQq4Ryu7minuzdJmzyGhKEtyqibH",
  "key10": "mBwqzHVidrugaVCmoMyt7h6ZPYTd6NnMcs7kTEdXqm3iJm189Ajq865FrVfteQQTyDv2PJLPJbYcFGaNgf8jbwo",
  "key11": "4AtEu5WeGdF6BtyyyhocrGFHbs8eWWQnDR6Boqj2CmGnrLhegnxFymfBeeCpuxk7nkjytiKtNUd34mCiksFXNQkT",
  "key12": "3zHiDWbrz7pVzhMj6UVd6bXPAPuUpd4aTQ6yepyRc9ow1Hqpru9oVzRsDgRMYuLyUgCN36HevNudRmChne7yxEiv",
  "key13": "64JBcxUHVv9cUBKvfVJbQKTx33nnGMLVY6TXfXtNRPe5mcJPb6hsDEp4KhReZitrDGPGDDtHZnGg4gNCMFUeU3mz",
  "key14": "4b7ukDMbvofoqKHNKYqRycBWKKtEfQsnvAceLaMZPFDvVeaYnw8gwqAupztWmELtuJ22L9X194LfdCfErwpLfjT8",
  "key15": "272HxciFZVdKmN11cLtjfvADjFy16ujH7WmXhnUBkgSssafPKZCzoLaG4ng4PSAiymxRF21Z4FwjpvWmhyuPwke1",
  "key16": "91a784uRysP8s2ER7Uy92mr9qPDXkwzfYwWbsSUwhq272h8DvAVGcTCvk4mpBtWCNMpV72bE6vKWbitLyrmLvPy",
  "key17": "BVCxpPphqTQjXrwMLaw5QEWbQCoDgGXYBQTD2b81Tt9JbhiBcwSuVHUq5p1UqH6d1wHZyoWfPVjfVPEg8NBwi2A",
  "key18": "3e8SvMHcyVXPg8yqvcWpNJzNFo2fKGE4gFakKA7f7AsHw19bEqefUwSCSZUTdmeRa42PUbTEvRYm3N3vQu2Atze8",
  "key19": "3Qa3UQnucZ62NTtGc1dGRdbzwwZuJHgJgcWjetRrMhKiCd3Hj4yynP3swMFywpEdskbTiJAbbPPH4qaDwpZSkaNd",
  "key20": "45x7JciFPVG7nrXXPjRJyXP9iwBPgfV7s7bCGRcEkqyr6aYUyDZLZuegkhhd7VWUYujFa8iuAG3dGMywTdbR2zeZ",
  "key21": "RsqaRtytpPwECbusShAMTwHdvFvUj7dBX4frmRMRazWJs8vnfsuUoBG8yTukKtC4ARhfMGJebzp2wngDV7h4zQW",
  "key22": "5dcYRHdEZGcGFcyZgG3Dkafi8CUHfknt8cwmxKXcfcmR2NLS7P6yvs6ksEzqisGMo1ViiaujfmganiCSsPAMhrCT",
  "key23": "C2kTvdyByDtDPQHtQE4GaGJesHwvcJP9tPmPGGYGXcxsoGZSkkoNhvtWeTCEn8GTG9GPhpouDosiPWNmtdD4deN",
  "key24": "3BoaB8Ub8QakBKjHGKZG7zeHUoj85X6yYrf3RKYme3LpPFUn9LW9TmaCMwE5yiFSUnmWkErjhPf1gs59bhQwU2Xm",
  "key25": "4X2xUoxMe9D6Vebt6nESpzCR4wYEYswEnZXoac3fG76PWd48oDAXkBnRJ5qQmJUeY8GgUJojikQ7ePZU9Gtn6udg",
  "key26": "wiuYjvVPgGwU2Y5iXAAQUPBV85qiGdjQC9xFSzyRyWwzfYigD2fjMyUJNFJiAnHSQjWbaGq4cMHkXBQWmnU7QKa",
  "key27": "2BG7NHXxxb59Cj5nn4tutzopK5JU4jKoVCcusBgUrg1DtDBi9Txe1MPN96s8dHBQKk6xoZydJGpTwP5BCsVEqfg4",
  "key28": "2rbSHoCi57YHy7w4gKmB3LcYTUrW9Wbe2rq7xQGF6FKgVXso8rH3jAN4Jdx3x37mgtHsupaSgmLKa8qeYjdnh2o4",
  "key29": "5g9U7Zc78rhCCGLvEBBT8MY6yS1TKHgnzpmEW8akiUWX74U9d51otVJdJe1LtxwaPhiTUmc3gAZCPmjVDTwnQ7Sg",
  "key30": "4JWAeCJ3F8PgRGTv8DiEA7k7Pe94k6FjwKPTKSYSgrPdRWZ6QPrGQ4iripd9Cesxhtp8qX1TiTkJNuaxoaPrb4BC"
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
