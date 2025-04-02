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
    "3iAkFGgGU6VmVFAfNFHEERjm8UYzZBpUeRi83ssUEryosuUXHrbpjiyR27pHfPAJVfL613HsWiMu5rc8iVrGJUGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52b8qp78UQVx8WpyBef19vPpUeFMGYrEETZyGpTyitd5yxaoHEL3RKf1z4sR6D4dNnVjcsaxRyUqmE7d4YQcWagB",
  "key1": "2c9Tsxf3cFGknUz2YuHsr3u3x6HBcmfZXuCkFUiFZosiBHc8nk1QDWFaZbAXNt9DQmNs3n3kSoA1aZUT8tLNrtg4",
  "key2": "8gqRuWRcWoz1tx7zjxpgTNTdjJYmJU2wgaZdva2Lr75h45qW7L1P3Ri8J3wy3uM71EzzEroVdB9p56nRqKrdFEX",
  "key3": "5XGbqkGymdWngFDXnzkjBGciFR3cSADoaC6yDyfqH4Usz2DZ8epc7XoGpSb7rTnDbnBKGpXSYURQqKvXHhyBrSYf",
  "key4": "4qAiX43xEEHauK5it98Cwm5tUFki9Fk8uFmWtWgkDuKMxfVte4yr4bUcQQ2sKh6iMtzAzXWd4wvcKqKNZjz94utN",
  "key5": "3vZj7KNbXBLzUycGtpRFfgZ3pmJD6RQqJm1yQs7ed1j5LCouiqXhR7TjMg9FnAkGgizCtnBnmLwpk7ZH4nim6Afj",
  "key6": "5VCBHDS4aKGDEWiR7VrfbGCuhV1iAr52KycUc374SiALH4SB1Kv3aR9dn3oKeLRiyArcB9D7vqWW7gwdHVf2mic4",
  "key7": "5kPXgp8rz7JFYQPVDuZeCv5p4YagzYdwuEpjfwfaN792Q6mhAHuKy4rPnpzBR38QZ4tdUEMD5qrYheLzLZPccwMs",
  "key8": "2J7onWsnk5f2rF1kKSFwfGvHvdB2vJQLjEy9NeSb6M28BXBTHCAeW39MpmqNGdHZ7s7yzqJUjYLoSNSDNT9Eoj7c",
  "key9": "BkgQhsrgkwmtBEFPR8SdN4VttfkjvAkZZNmpaYVkG7a5GBDpjgDcFwe4SmTx57iL1EmvSDg51Mz1uAXWZ8pcyVU",
  "key10": "2fBzghrxfm31nNz7WNQHyqhxiAJEcTYfHLBV7gz5rpuz852V2DiCJreEeVRckMpNSXq8YhUnN9dxs73NqWFu544o",
  "key11": "WL4ysGXcWnzUJakJRe19s3bQj4qrJjM8Bb9wnP1yr8qVREVkE3Lp4jXVbgrizF9PH6EGQUKnzPmR6SMUhDFZdBg",
  "key12": "BuAP6eVHVaAzQzjJAsAMtWFa72UExUAxSNJaetBcE8p781Nsyk8yyqb9A4ps3h4seQPdkdtsc8esE4DZ9B21RWf",
  "key13": "2ytwPPSDDcP67tkdkWF6G59oKWos4XcMr7QuLtimimS52srwgnSScsRhE9x6tEWjosNvGvFxEu1x6ycwLeGH1iLj",
  "key14": "4zwbg6sxm5vX4CHB92uNbhJtmdi4cAvra6i1ak6Vx4TNsp993cL35uqecFQLuaKYCoX4vAEHb5BJe93THg9Ef3hP",
  "key15": "3VZKC6rxzeRfbPMuBGTpyyVnDuansEW8VQrPJDHAnzEpYj8PM8TB5xuyMw6sPnJ8PYxcECw6NSrRhapjSFyvF64r",
  "key16": "A3a2wEA32DHRJX6W4d9Surxe8BWQqwhQ1BUzMv4MqVpiWeWnWqZTaG9NdghTavGtdFdLQK5eD2RbcxonMgNg6BY",
  "key17": "2uLKYfYg3tgM5LvEWNAWkxx12YXipourSUyrmp1XDrCusjiPWLWt8e9xCE3jnX7p8FQ7QbwgPbCZakeCMSkgRB2g",
  "key18": "cHjgTsrF4rRZCvCU2n2cLxUZvvfCpPu2PF8d5e43v8SHXqaeKUiY7dwT3AeDrJdn9CFmKCc9YSNFQXLyzH22ccR",
  "key19": "3TPNGaWz52LpUfndcDDsKeNxbNF7R7zS6edQvhGccKnmWfhxjJDkPnKTZGDrgxVb9W6iB47rbVUNvu4yUW1cXiVD",
  "key20": "PsMU2cYPaX2ARWZcbDxCoCNKqcJ4Hqg7KNpTsv3xxvVJPtrRS6oNrAqrChGQEvYDAYtgyz8Ka3LMrdrrmmhBr2K",
  "key21": "34L52EJQXZoM4TY1XchLMWBXJnwnB9qv8VuSbv8eBv3JTBLhnQiHVpTKX2BRzktieypQLM498o7mBY4AfTXXbmvM",
  "key22": "2QTA5wPSQ1P9eZ5xPKPNZ5hg6zQNWeezcGk4GSGhseijrBQUJJuKC3eiPFJYut72PjyA4y81iQeNe2oZmwRqCo2k",
  "key23": "2ViGRWJpc4mnNQJFMR6bBrHN9n7cB81KiNDBqZyJA8mEJGQLiRpVNU2QK5dZ4Nyygffba69AevpEwQhUtTDz4oQC",
  "key24": "4VAXKxCj6L8aQm6EQxmMbbz2UfD8CHc6xirBToLk5E9wPH2BQAcfS7oqbj4Jbvboz55kZTfgBa6Bd37QYHhS8oS8",
  "key25": "5RChQA4RkZvW8vN3WA2zDJQ15PXm47GRPTDB16aLts9tfMmdzKwMurqinPGnJRC64WM887NfUapAUMzMSANfY4oH",
  "key26": "6dE6iLNVC4a85RZpyVizZzh5eTtkyhpHrj5W95A7oWiGCyrCQDMBXL5cNhwdDXdQKPo2SC38ykFhktMoC3SWD8J",
  "key27": "4LgoPrNnp4HsyuSV6Zm3JkkCjFCiMYHpg6SPdoK6TYTYoJXA8umvTXXvEjNRA8aHfiHf2H4V3oJ7SCemrNnBd2ZE",
  "key28": "5qVBYaNpf9vynHUDEbWi9AgKQB7MpAizsDamhgHnv38Siug7mWFd7Q2woAx6cNhbtXibWo3NpZJAizKify2gdhAA",
  "key29": "47TwGYM6qsC29YvtBT8UtNeCrQXVoWo714sykntMyutTF5CQTY3jMPte1uqtLbPxc9XxaYzPrgynjRkPMfdcPay6",
  "key30": "4qS9TTpbmSxyj3FFjoH6yKkymu6LMQmnkiXyQGvM3Ubn1axZbfotKP8MXLvjwjqnYyKFnPbpvxiFhURYdTcDgXdT"
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
