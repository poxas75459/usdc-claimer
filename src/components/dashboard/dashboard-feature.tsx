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
    "4zic9T6RYcjYSckucwTGKGqdBwLWShPm3frA365f3RJxWX11gjZGmmnsXgQSXnUpLkBuf8kciVWg8bVTkSgrzvkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uut7ZspVcN9Nw6D7wksL1LmgQxN3uwUm23cG76ZjyDzsEUKSppkGxByoKMJq7qsGESpzSc8snHH1VeDrVbYAjxL",
  "key1": "4wCGUJrdiCFbynoAs51jzCqbFUoiJpUMHQvek9oezzpkNrBgPfJR9beCPs5T2WhgBsvUx39x1TZsLZ1VHSodJm5L",
  "key2": "5EdeyV6sVDwN8A1hXQKdSMY5sz3DcJCghP3ZnCEqL94zUwPokLFEBqwX2BNe8coTTZP6EtC12xELuEBNuaN77TPc",
  "key3": "51xrRjWR6dXmAWaHPxQjRecXzgRuR2Bn4743zjNpjGFBGVh1sHJtMV85pbTwDWmtVUsxcXyZEUFYey9fvAxPJHDr",
  "key4": "44UchPakCoZ7xfqbmK4P6XxLPkzCSXMUzzSzYSqQWvrKa8Ph4DpbY2BfihiikRQ6tpwhFkcbDPkDDkRAT71RZq7E",
  "key5": "5TCSAf7GquqwSEMX6KdThHS8XXAG2fb3pGotCuyTKfCMQ8PJJqePz9dnEMVx9acDZNM5GwErjfkRiHAaxsU6MSgj",
  "key6": "qKEha9uaj4VgUqyrMwm9wAssDqzSv98iQAKbUrSFMoVMnzFaQchWU4YWCcemVnrWhR6e3DtqsfUmBUtRyefpZKJ",
  "key7": "7BTgkGKzfamPZsLDJjZBmjyViYyz8HZxJKLStbfbmtD5XHcWjDagFqcp6VYpSTdQ7SxH5Y4hE4Fs2qtibrDdv5F",
  "key8": "BAfKGabd2q7D36XGpuJfQ2kFQaVZa1WWoJHRp9MbFX7Q2rMKA7vDot9C4b1mkoL65Biz2Japh9eBUsxEc2dTxKU",
  "key9": "3Q3h6d4uTLtLFBokncNnfEHUXpGSekfYWkoLVqKRPRpGy5kmWFvPffhz9f716jBFFDizbiwohckKpKS2PrvwNYKV",
  "key10": "3yQY83WnutH6BZfoTybk1yAvf1QyGbrGoG4b5UyA3BWpwrGMUTsq8YxoaUUMruiUydFszupUckkangxFosBAUaRD",
  "key11": "wzv6PY654tu2vqvk2BxB6HLbUbczPdC2H4BKgZV1yEtNXNoWqRH7WBQ6U6PmfQnQRJJEo7gGBzYLf6G1U9kXPY3",
  "key12": "4xgvxULsutfPaGz4W7z8JPvnqrdfGprU8qAEaxRf6eNxfq4V6DziSG3GtJNU7a7fQpC3Wvx55TUi1AGzfV7dpq5g",
  "key13": "PUsjeTQzyXxfrs2kTkZEd2ShtuqB3ENQjo6pxp2VR2H16kL19rzQ4wLhA2aBbKrqomP6egAxkAZCYUimqgKzYuP",
  "key14": "3ZqiZhbYoQfDvgaQm7aHefhNeUAM8yj5kcBdPiGhBvARrDFWGYa547cJbbep9Ck53EEDUZFw9fR4G5vjMLbjLEh",
  "key15": "4pNv7AUJAYfMZsNHBgk9CEbwaihyZeM1ysNpQu845DtUR4vvChFSDTsptRDFqvhtgsusq2nZnpH4yfEsxwwKzcyW",
  "key16": "WuH6NpzBVbJiiWQZHJAnx2cE5iTSyCjXpRFEHrJgkEgPEXEYbCmoccPmttfvALeVrEfs7nxSZ3mZpeHv1SNhs4B",
  "key17": "4m7tYbX8H3dB58y2dchAXf8S2PozeMU5ybPoMTNwMN8cnMqeKtUUx3ZYmetaHSyn1uXoywoQqCtu2cEyZK1GWeUn",
  "key18": "5gHdxkU54jDYcb3BZ4oFxSuFWMyWTfBpqYWM7rUgaxQ1DXFVj5QLXQqonDqru19DMXkzJXBbh5xiZZGa5hm2qd3G",
  "key19": "465VmAFESes14tA4M4hdRenRXa5hZXbRPGGMKTanWybXo5B4o6GaKx5GEmhES7o4EBcYx92o4HW8PgpurKjdaNgg",
  "key20": "4HoYr6ounPEWokss8NfdW2HUG52jYxiaJhEuaqhCU2zC96f8g4E97uGJtgRD5rnzmRmZsYW6ACXP856e99NnysUi",
  "key21": "58B8Zz11n6NSQQYvpauXfkq2VWE8dRmyARaoquGcjSPwipJc7i98fAHZRqBmGnSuGWqSWrWxoGXxSnbo1KKpu5hg",
  "key22": "2jkTZaUiBbqNaMCq5kxvs9RuKA7CVCArdZ82SEN5c8wRZTUMFpcD9evzhbYauWVg9M5E7RM7Hu1gZD2VMhsxcpsm",
  "key23": "3EadgDLmzwZMADW7VP4Lmgpnke3s8LssqtiWEiWk464mD2n19cFEXFFUZChUiqhfkSQUSXhqjfKcihDcdoJezsw8",
  "key24": "g3K66nfNgaCBzxZPyZ67MLyy326mhV5BioUNSM3NYAE8u5UNRLeM8pZEcKn98rPKqKbpjFFtCe23VbuzZxf17fB",
  "key25": "5kkAkSS9gPji2vkb1a4iAsbKf8TExms1rWzDytFHXDwmos5UnexXJZF1gMFpGyYAVCQrUd6noNckiyYjoavaeL3i",
  "key26": "3dfMcZJJTuEunSGXt6bNreq46AoSQocyJdPDv7tFa1ci1JQkDZpE9wTactkNqGWNe2sVWzLULHZY9V72TCTcQLAb",
  "key27": "2vqGAkiQsJKh6Ex8SZvX9tRuBh8AE7WekzghpZHiwU3rKA4UGWM3RkjTjhD6hwUtVyYvTPH193Zux8wat8VxT9Jy",
  "key28": "3ERcYTTQimke6gTtdLC3iMAaiM1oNcLTDYr1WroKhsXzba7NU7WgPSZm2yvN18364rxK9j8GN68tpyNXwAZWgDgp",
  "key29": "sgFHxTnDh6V7BuXjwGVVext16exzbnaqqibcuU7uZW3hhrYJj8MyZb2c5LRRSKXrTmVnHcPsApuLPeRgD8hnyWj",
  "key30": "4ihs7N2PrZUdx8kTDFB2uccMp17ZPiuBs9EcMCyqKPjSGqyMxesPU3X8oNNe67RgMoxGqokBkj4jtr5zJ3E1HZh5",
  "key31": "mhQ3fLY9nfmAEmN1BZJ8NUWRbsFvBbLL14wib8WSL4qwNtYgTx5EaqvKdkdGRdQq79kf4zRC3ByytQeJznPxmT4",
  "key32": "5o74YsYJPnZn88UKqqCvpVw2FbtyzBJYkiccUCvBduA1taFKtvEGwJjnu3uvGDKSruv7gioBSCRf1vAGUSbQuehF",
  "key33": "Y8o9ByS6TLes9CE1C6RGyFe7n4gk1ULeWdmNsJxLazpYuyfi1R4X4grT8T7ToUyw9cAmLDrc4FgiFuxKUUx1FAH",
  "key34": "7ov4zEUmECF77mL2GrZbFMiS5rLVjHmM6yrSb6uZJAuRuQRnXiKC8Ctpk3sYRcGBhCvccQLpujheYxyvQHzgCb6",
  "key35": "3rfyQ9CMiqYwYmFMVmCBD2h2J4uf2Ycx4ziTxsdYZYwjAgmtaLkhVm2hotYZbJJ7JogCEwM9Ky8hktrkd9nPDiba",
  "key36": "3qfswnWeyc6NXd3kkug7sHi3sXXuaF5bbXz8MqVbC9inKPZKdogXUqsowLZVqdBo5a2fy2MD2mUK9WfMPqBnRBvN",
  "key37": "231W3xEcjSWopsQuRSYr1us92BjkUwC9dDoy5H5udUyzKae5v6bGUjDv2MxK16QvYzTPcF46wjnhX7RWZkvo495D",
  "key38": "3dqpVzrFuVeBiag7nyD6FAdwpdJ3T7yCVFfBhWTLYZ3dxhuxJ1f7Q7udcsFewVgaWTJbQwvBsUNE2C9ZAzaJtxy6",
  "key39": "KyUWP3ze32zNbQ3NS1TqApSwnRV8WiTJFqTctoWhj5qmGQC6qpSfbPNZEHP3fdRchPfRV3M23hCJ3xhaY8varfC",
  "key40": "5Gisae7twZb7GsTPZq72x6RozF6kJQggJfZLJmvZYJboBKpAH9sPUw7c4KnCabgFUx8TsjQcYvDuneSSkcvvb8hB",
  "key41": "sGMK1ErUHAEKUrKE73UbYwvuG1AMxwdx1echXRbcpqncZ9tbWgtnj2b4c1WBCzXJsCCHETT3XtTQKBq7odwuiPp",
  "key42": "2j253ZRtwf4qkRzEQb5u87CvHAXohcLrWVp2hrf2vS6Gjb8eLMccAdbu4r2EdSRPvNLkaMKYoGKwdqrzfrti94sP",
  "key43": "5Di2T7VEXrofJWb4sBra9QoEJ2JaVJFGsAcDrDn4HNH8bZfYPj8MNmC3tJrZKHTSRqkL27p2wkiNzeSRxMiz9W2H",
  "key44": "48mirBGVuSZb9sdM41x16GRUFKcB1UfWHnossCGGzPKadg5vcx8Dyeu2Qq92cxAu9iP5zYti6zkVk5ieYX11Rr3M",
  "key45": "2j6CzMRYWJYNuffksUZFDgLrUUwoY5Pp25QKWFRwNSkZFQgdqnTFo33h1cGYm45Ekavg1KdTUbyUByg6n8iybX94",
  "key46": "5zPMeSGjgcUTEnr4ufCQuXeXVjmGLaQWmuNsWkSqTKgy61YvyS7MguvzhAkUNH8ffpuMT5muKpbuYScJmoQam3oL",
  "key47": "5M4erFpS7YB8uXnZAKe3WPV5bgAb3W3juciAC8MssF3Q3MDp3pvRP3nVHvHLdJ1vQG7K5FdaiXiAkrkptKsfodyD",
  "key48": "2Dhu2sSB9ZBxAC8pPxemiABkqGNwKpdgxeYFHisEALhBTBW5zSf2TthPPHbrL1YEqC1sbPk3qNv2NB9juV6RmiVQ",
  "key49": "58hPpzDj4xyFcNFPQkoSiugf99zwuo3KNofq7SfRdFCxW5rv5boYjML462nM3MQcv2Tfn5W1qB5bLnwBPXgutGL4"
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
