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
    "5kmtKgv6umAfU3J6hNsYKGgF6NHWXiafe9wW8A8dmEAzpovYuJqK9m33kf6mQbrCCxrYqicPjbGBgmUo31iUmFtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYSZXCPxGdydiTecL4By3oDhPdoTp4CgG4G5uvjd2dD2UPF7Wo1JQXEKxHX7oU9Ea3Z7QRPAak7nmwqi3XCLAEj",
  "key1": "3Dm5PHdJ6hjvVcZm6BtY6pfSG8RatXD3YfXjn9hM6E8mLXMjnqVWECbcN4KfByjR7EC6tfJKGowXJUXNTMSo9ntE",
  "key2": "21Ze6tMk1rke3ToYBntLb3aqNZDYh6C2eedNwUof7rm5GcSJwfXdCSq7ubN5adarn9J8L3epSQT1ZrTkTxYij8vK",
  "key3": "oAh3H2ooe5scYX62bci6fLkLMa7coJ9d2hx5txXx73JD7AGpPUbLCxLentXA19tDUyQjhJC3uCNZzW1PYGLpGam",
  "key4": "3KqzXHYp7tPk1EwrYMspwtLifW8MWyzGSC7qtmUQRCQowM9YqsqECq36eFXf8i62EpRf7tKaGviYUcZzk16vATAw",
  "key5": "3DHVYtw2YP8rKhCoruBJHyrknL6dyBhN2CqZ7FkKzuuxznpNzqXzeT2KNSodXZjZSxsyFCNRCn6Y23sLPhVUbQfT",
  "key6": "2V9unSDbNkkayoLAGV9G6V5bHvFKxmsjG56t9cnGk9JZw6FjTaxRRpgLHs9jrtbjECMyge1uZoG83Vd53QdVxMsb",
  "key7": "2GJduMmM3oNvgjDEAHu8YyBmrrQGAAaSN2NVkMmMe5DWiomsQnrDHpkrycZFGKexqbkc4BNrfUC5iUKCzL4jgj6k",
  "key8": "3tLqDnzFUgnKggtNoTbdGunqJLSv9YheqhNR2qMdHhAS2RYCCqmYEH1Paibkj7diwAy1YhHUK9JHecvHBYdKxgek",
  "key9": "5MnYjSW1n5cKUQSZvGx6PGHzYTTcT2f5MV6jc9axZ6tcDLEM6nTjCGHPDUVPCoYr8q9SPiK1miwUVhV7XynVcyCo",
  "key10": "rvbgxVUzSGcsE95crdqTmF3Tcquq8HCESDZxE7pAwdfou21mER6ZZ9z33Ximg1TNea5B8tYukiNeN4wRHPsz1VJ",
  "key11": "34fW8VNHTmHz9YYSGwTKmCp4SQM9fzGHeJ8TjeoFuQ82toGj9BuKvXTf2LKcR5PPbFPNAAv994LE7tBL5FE9iqJp",
  "key12": "3n2HfvgdEr572LTJJ1HftYcGeZseEDAhGUndRC2KjTkc36k6vD11ABBsCscC9ZXyHEHkW6gNUToeuWRxNsyjHnYV",
  "key13": "4ufiFCJd9tBiCjd87o7CfT27TUskGtJuned7SrmUaSyEeC39Q8po89Evfc48DA668STPJiUn6BsozVkiX89hYvHq",
  "key14": "5HgryZkW7gwBpCkwHvRSPxaka1yrhTmBWKvE8ZwVNdjE1UPDSw3dkXYs3uDuobo5cKqvSFSKwo31SXn6SyguJRZD",
  "key15": "efwcrqDVjoaLWfaySw9kBwkAQgtYjAQNEkVVSjjWsTbZiSfwVSxoRp4iZdMB3pWMXmvnSBjS27k4Z3DPbtq8U7B",
  "key16": "z9nvndcxgruAKzSBDNSEweVwpzbqtrCzJHf7a3HEz5hbKwnimLaPRcw9jVeAxsvsBHNnP3KqPBm4TicvfyppdQL",
  "key17": "4Qw3RVjJgnLhBkHKqpYNrh38guaTy4CpxUm5yGemC5h81QaCpMtSJwLcpRxsYQ6c8KhQsNL8NP8dGBXUQasUNBHJ",
  "key18": "3ufGqoWEYfe5P6ZLiyxHTzo2JhoM7CDsnXW123VZYGCgDxmvQ6SsrV9CrJutxC1i2BBFLvt29taGNQ3dduxpHsa5",
  "key19": "5tZXuyyv2BPD1P4EQuhdUDmKaqBA5Gxnp7E7VyAK4MByP51fr69QbbYF9i1W8RgDJSFXEs3ZtS1LfTS16wFRnXRn",
  "key20": "2bWBqvkJnNevtBdy2N33hQwfeAkJHWGyLaWD2cNXm9yrXbQx42aY4WFnHNfB1Fhf7GmWUGDLY84MQkosnYFU79wY",
  "key21": "4XAKYne1VFnK3Ex5SvKERwm7rsyFsWdaEguDm3ERWcXmhRSQjSsCx2CG7kZ5GJw5Kx6V5YBuxWbWQ4JZcLowFe2q",
  "key22": "3FPkvR19JNEoFzvHrTp3AvJHpNXya4GpgdRrmkVA15jksouJPWezTENzvdpKs3kd7xSPGz9EfdeooB5kL6BoTx2i",
  "key23": "2MW7Fcx2yvx2sSMGAJRf3qXZ5XLXZ5ZYy1oMk8ruC3rWDEb8YnTEtGZy2yzpfngkDg5UTcEJyfUyjQVWQg6At5r9",
  "key24": "2vWfbnw6rjECcbNKJPkyTD4aFUxozPMJoK7T2YCuYvDiHZQ95iM3VgVQppykps7TywXC7i1Bsxcga8fikuqm9Pgx",
  "key25": "5GPrLFCTu49iN8noBARemihxXvyAWdSdKXLdQzUJHRj7DYVSHjPnhqQfPY6gcmcorYfxp67QHW97LH6YJ3tFcBQj",
  "key26": "2b8zvFTqvj4nDsCjDyHLafBnB5kVoS3xLekByjUtJjz4LmjCteZMeuP3qBJhFit6aN2ceZB8LVsc4XNPAVo5rKTZ",
  "key27": "wFh6BC1N2DsBppfWVq7TXKbgrmdEuCaXrJhuE773q4vBhfhZcVoZyeUqQVcALVu3MuidKxdiMzJubYmprDeT31x",
  "key28": "64Kxp9aahZrKCtkcucKhyo2BHx3twSuEDxihGKN6tf2zF27hoiTPYUp73BDfkqHXf2xw93moPMzcCJfHHPrRUNFE",
  "key29": "2hfeC5DzrMzucaQE5BCtANYgudAH1FU2BwHzSxtYgC2ZRfFte79AvfQ8ikvTRonKp31hsXW21w9U7JH6mn86bzZy",
  "key30": "CWrdTtbuC469bcFus6qfYxca7b3tRXgKE3t6AvX7GqcxCDp64kRTYvR2rMaiw1NiMhf65YucfeEU3qT12ozHuz7",
  "key31": "5Xkr3XYLZCMERfgLM6ZdnS9D8CrjnYdsRZ3ieQnHEZNB4mNueZPXU5gLHznyyFWHd7dqiUPddRpyY1TQ9g2ZvNdm",
  "key32": "hgWE3fB3gicdFWsbi7pTpssVggy1FtfvTmPHqRtygKJJWamwX9STMa5TTzGFtkdVmY5k9ydxrqup4amhzyzJX3Y",
  "key33": "3F76qoqM4aJy3kTGSYMJwnDLbFD9U4DbumbiGZy5LiiiEVmiGzzmV6a5MCVN5nMwsyKLHc37xq1ZLgwkc44QPMSL"
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
