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
    "4Zw4w5xs6JHjAZNYzpGZRDRDpZzwCaSvdyX8PMQReNanBsE3ekped4EmFy285zPkme9zKWv1rMt8wVSPTCMQGUMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YvAC2YfCi681MsGz2GrVfbyju9mJQPEzLum54u6igytXdG5Dny7k3raAA2416Rw1J61D6RQBzy9ktnGmKR1qJiH",
  "key1": "3MzrBfHDzdFCnFFjNw2VXWW6o2ZD9Q6CrjPWK9pTN36e5SfsgaJfMh6JFYavaxZphCREAvj7iV1Aqvof8qaFTtWo",
  "key2": "4s5ye78uYG2iGPdo1LB2N6DACuH8DtKVNN6gqWi86Qn5oQovJ8KbGXPnSEHpp52Dm6ondkwoTDVds2AME9Nqz3TT",
  "key3": "4rGCiwarNjLSDntPpvEaTxY8tM48rKHfKV4zTLm5E9wzRXFy2U8ftMKLCC1FPGsc8qBNMovduqYreEJqAt1pKgEK",
  "key4": "3cbcsoEEU8sAEU4fiaogZozjyecWVEXVda11wF5ppgTtYn5kpwva6GRQ3DXqV7YJowTJhqGtSvu5xHqH5zipPv3L",
  "key5": "3PdE7h1DWar4ViniZSbVTWVMJ55uAtKT7GjqkYyvUgGptKU3dfSoio7x3PZjYz4UKv4UzX4DNXc9WXJPrfBcss8q",
  "key6": "2CcisimmiMz7aqwwVDHhkkqwqxUZb7nje7hqgSi1ZEcWSW2jFHU57u5PJYZoYPts9qm5VR57rb1s3dWRR266Qvi9",
  "key7": "4nR9qqn1CWMDMNMB4oRaCy5DXQuLw4RHgyCyov44ZcbmqTRLqJ5YuY6qeMgcokQ1L9C7Uvju2tMxdencHVzeu4j6",
  "key8": "ueg3fws9Kb15fvuiv4RGLwThzxqSYxo8dqUhoJMLf7PkkAyaQ3W6D9e4SkvkoyiHXsdX9HwVc8dEMTycb3CUQSQ",
  "key9": "3jxVaMBp9hhgtVhKngpTHQGzaQFMEvhgZAwhRQoUGSbyqFt82G3XVm3EhZEmNnfxSW12fCwj3e3rBPbMrjUUXeyf",
  "key10": "4JGdSamz3w7tqWtfy6pyBHTmHizp6GkqL4FwHQpQwTSurMEGJ1DGb8bDiVRDiwkwyBRsEePjJJbQLmYQ3NdF9BoK",
  "key11": "2uHruWwrPVeYaLMq9c3dWdNtTKwDJJhdEHr8sXwfd599i7gTBaWgpEUXjr6Mv656nKXDwATKtdB2rA3EsY9ASz9q",
  "key12": "5udE4cD8a1y8GQkyWU1Yq5MaHEzdY1LbW1QXMt7W5fbgb2VhcWzbfdnEajsTrb2C6jbb1TcXA6yTR5yDy5HxGbNa",
  "key13": "4E7BfeGivgCTrBF1Ls8r6X4pwEjvGc1VQTmoXj1ZuhUTpuiXpSwFqBH4DcfxebXfwFcRp3AsFaizUgQPcm6Zx3d1",
  "key14": "nHRXYDngPJthxjgUHNLf2s6ESjUpVZu1fgGHYdesSXX2buonEhASS32DaeY2sMQv8pBrYZaVLk4oU1hTUhtFygV",
  "key15": "48jqknGVq15EPL3jydj1w3MKb7jfNJ3zX8yCzmz4FuvTNZVphpXkK9uccEQWnNvzUx9UkM8soGwKq8NjM52FrvpR",
  "key16": "54u9LAoAoz4MWxGaJtniD64Qj6C56JuAubkKXXv32CowE7Hb3YMV5qKVXriHbD4wR7AWuX5zmk5apj3Xx8XnWoHT",
  "key17": "587YPKBjrZDVpr3z4jhiFe7XfgAF7cJqnp339T4BPgp3aQzQ4RQsMGDYL8fbLArypG51qmeq6UZhrxQAkLWvv6yv",
  "key18": "5txzjW4PiEJ8PXv6bf83xUbxXfoZYoJL1jjtfCSgAEKkuwJHDcBm5WsBVydniiAR6Pf6Au2ukih13yajNd6kVzCE",
  "key19": "MxuagjVNGY9CkJLULnKvoYmH5YnuPNus82uu9RmiyNSxmtbyGTBc7a4UzFnTuHHugsMqpgasbhZjNPb6WZ4yaiX",
  "key20": "3FAhDWDaBwfcW1WrKCDfSieEg6TdwRDaDUKocy5G84GT4Dfw1bTeZP2qBFWzsAi8nCLqzLqSTu2eFjnugwCLViGp",
  "key21": "4H3rBSifh6uugRNSpJSUT78WPh6mbnVzVhj7vWddUPhNJaYn2sWG1ENb7grACHBgMiB9njXEibSTdF6AG29ZB3x4",
  "key22": "4QSist86fyfiuENDLwDj7NskVkFiHnjPJ5kZeprC8qWtrqoeGyf1Qv13CpSeSHgtmnNCKQpL9RDyF65xejFLePAB",
  "key23": "Tyz9VzcVVAzKACLWqgTxfxwuJHSiUp8muAKaobFkJPw68T5oUTEpyipFYQUbUTz3fAme3HVhx13ESbdAKArF5N2",
  "key24": "3sTFnrgCF7GdFvwKN5tHeHYRuTXD6ha8D6gceZTWLT9mtXZfLKuBUEFqaihUPpT52TdDDHTfYV9Go1tQmvyXQbMT",
  "key25": "4X67CA8HR6LsmZgnP5w7V8i5ymn218d4RssTT9DGazdZAaaSABbX4n6dp3u39cGGz9CiBuRZbYqgSc71hybMJAtj",
  "key26": "2KmGj1asa83mLSKs8fvXBHjfKFtXFWHHiZrxQymXhJW4NrWGsmVSL1dEknKLGqmfRwtSFwAqCD8NXXVKG4pyDiKz",
  "key27": "2wprgFntXx5AXLp3Th8rJxNi77pi2V5nmgLP7329VZV9U3yYMbcHjZPSCLxtGJTdK9jMhWmyEX1333N1cYFU8knc",
  "key28": "2qq7a5gJR4KJiPMgBHsfVdSuNrFYvi3ohagJe7r2bpj9TMMU7hR8mdN8bzugjJ78eF6vMxt67YufD1cHn2X2prrb",
  "key29": "3ZEmgoVgoV7EgmzmHPwDgggcTkjEjy3o3rAEY4viacj5Fyo8AcneUqKWV5BqmV92WgQ4dearfX79HxfshGB9iM9v",
  "key30": "ivd7pvzkX14Ar52orZN6ybwyJjTYmnyaX6zn1f7iX9Rex7699rWdsG5aYHV84wXQGC67zy4in5JuffujWkxUZkb",
  "key31": "5SjePKxt73YfEZ1E8rH8zNAV99qqAhXnrKWT6spzLZ6schvXXouksqfc6YaC4JH1dGhVLDjwQLNdu9WvvbseBRH2",
  "key32": "5dLRk32AK6qUYzMK2B6oXfVvpdagnVCdkZg6KedVVrVvrxQycvVmXBikWSkwcKz6rc8dbwDCAbXU76FLA6DxG1p4",
  "key33": "5t3jXrr6keiF84QMtu2P9d4quFDWYcHZQahqMTtr1KQiGsRP46usBeSRhVWHkMk4VvXRnz9Ncp65151foAjfSi51",
  "key34": "3kpSTXozo4dj6CFNpb1boa8E2BgJmJ3CtDjk17mNzxQUJCf1hnsecSzwJv1qaz3bhxDztRGsmr8YrgZV76SuCPPV",
  "key35": "5N5hK5MUgjHrLNc9ZB7mKSsh9coK4VdrprreS5r5HKREAS2dpgVqDHC1duJHoCfXTepVxMuRSU5DV24bBHn7Kq7Z",
  "key36": "2ggyEDBqhDXvJxZUggwQHaqS28RtRRt3LU4MttZyKF2d4rWn17uFEku2mmBmEJudSN1NyLxsvq2AnsoatyYY4KXU",
  "key37": "5REdSuxZAW4t5d1cwg42qvRX8pvkTdhmn6qWc56WtSPyRjwhgvtGE5NoSaisF121GsWqt9pu262TQXrmkqEHYjQ2",
  "key38": "2BMkptAEPiWiGNSYdHYnmjUP97gx4MvsYAsnKnmbfMd1Ws6Ddb83HChKqVk8BbsjuhoswezRqgyZ6ynN3h2H1im1"
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
