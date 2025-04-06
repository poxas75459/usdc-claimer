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
    "5xr6mFTXr2YrPhjqZ1RgKHmRyd3Urj4UZB4iQfuKNVXynhPVqYcqsrD8nDipND74LM97ov5jU7PyMxp4JdCtpCXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcMg2FXJ9ifZYCFU7bvfcJVjYWKQDoBfVPpgWL4SWT2HqeBmBjPAYHt6JB6cCtWj7k1Z6L9CoDfMTiSKZWsyZia",
  "key1": "3Nau16bwr8c2r9L2Yopo2C2RW7xKpWV6CYCi2NhhDPtwvoKCdrpfcaHQwSGvXrRNJuSdSQ9iJJ5JHVi8nPaMZbBJ",
  "key2": "42jvaXxEydR1oMt2j73M5i9M6xwckESqjkwtuLCfTGSjtRGChrGEBSHbo4FgyGpLWHEW6fTNNokNZsdBSdfD293P",
  "key3": "XouTgzBxvJnDATr3XdFg3m4qM4NEpHvoe5NpYExrULhEaj2Ugm3Hp3G1EdGbtNyFuwmqmjCjzant5hKXMHFjy6s",
  "key4": "2JnKH8d5nSTU7wm2vvXrcFcMUoksSAXKPEefLEVXgq1zqhUbLwm6tJFE5Aixq7F78JFb1aphAGkbc3uxydmjv1ze",
  "key5": "MW3VV9ms4e1ij452NE3ZnXyC4tsM4htTNRim92kGXkecBq7dXBjk1oDf229TbBR7vx7MB9S6saBntHNWvNLARuP",
  "key6": "3zsyKRRJgvmosGYhxfnjgC1WrxvQ88y9gN8uRY3qW7iBmzrd2ZNPgVhNeWVUXJJmdrQzksNN23aKzatCDzM8PSJR",
  "key7": "Ny3gSPBfiNGazw6AeTzMEi5uo3dcYmGGcjXzrXXnrqMga2eKZiYZRHHLJEVRYaRzp1cY9VYVoN87wQ1a2XDZxZt",
  "key8": "3pANFjoZoiPcJy8dWXCgRhznujYgiyqJr8wTYTdeQiY83RRMf4BhBtTbph2t5aBnxPdehhQ3PcGeSPy7EPdynmw2",
  "key9": "2occNvcpoFqWPKz2fTEcubonaLxZnh9VG3ToV7gvf4vrZaMXrTSTNBgCeSMb3Z527uqKQVtERXUjukWCMDnrues1",
  "key10": "4ZqD5kbhvwPfb75GDkXpUkFrtxgRWeQnj43to6RrMKw1GyPujoj1Ttv6qvfVAC9LfSRnKh7YKdMm18hSip9YWudH",
  "key11": "4tw9xV3JaKxTijkn2SZbYQsQzEoBR2HvkfW4SEGVkCgPNXzt7EHTGRvJd1q25EKJMuAmAMEZyfUU1PuPtBoR7yeM",
  "key12": "6GDKM3cy4xw8miZPr2wxTyu95k8eoxKmuxdgKyP8HvMw7CdymTuiTTZm9dyguahwQDUD7mESeZctmush4SsAWoo",
  "key13": "4nJ9kGrTd45motMFKhYfwizTSgDtEtuVpBrasu1RqeJjPdi3WayhyMX7stm4Vp5tXutZYUSxuuha2vodsVSXSyUg",
  "key14": "4ryfSYe1tpM1VgvWmuEvrKyrDpXmzZBsMD1A4odQ8f7KEFD7XpDWQVXRR31oady3qS55XeEEroghKr3vrwve8YtF",
  "key15": "27yn4jqqVoWeWHhoiMUk6NxAu65uvi2TbkKwksoCnhyxmZTmFbTCnwt3yofvQWHctzCSmpprHu9KTJ5fitdtJVwF",
  "key16": "3BPcxzGqWGESeBzBgp5FK7dz27qciWPxLY2ovGcx1KevwbYWMHWaftHEZy4LGVvLMVhgFXxcT2MekiX6ZxbBAcsh",
  "key17": "5agvbcPJwLfBMDfHANCbh53FdKEfBNSYZkP87dX9J3AzhfyYtC965JkiPkYyuA6WvZm1mxty5suU1SanEnQDLJwd",
  "key18": "649cs9pLFwyCcs7PrUkJWBLG8oQh7ZBRAW7y4v8ancf2ujcHct8ejsZ9tD4PhMFY6t48Pj7NHr3UYXTKR55pAhT8",
  "key19": "3EwERcUBgBE5wnWVfEYzj1CL3xawVw8ea6jbXWpHNZeq9C1iThJEoFPNNs3J3y55fxHoYpxXw5PTbgexV3X9J4Fw",
  "key20": "mFLqJuCq2zFQy9GoS2Yssgx2tkDNmz72h2rCdnFdEMvNfYTCx6y1P3RaqHzVv2tGed9cDZf6oAtiSHhd2B7TGXX",
  "key21": "43tXLgfBU6Z9XG3wjXWsAfvg5WZQsFZrx1z6rXpGUJDZuNFZDTQBodTheBvEcY1dLpQb2ktyAHRNFpQiPSXeX7hw",
  "key22": "4hLhjY7LXZujddN5vuieUYtc9jktaLhfPCCcrRas8aexkjtMtzkaZY2y9bApC3ddkikyqDHPBmevvzwPYQw17gDQ",
  "key23": "4V5iTJgpML4jyFhumck99ZJ6BRLukCfk9hkiGVx5r6WktgU5eUucuoDp4djphv9taBVEd9LP6E8LLk6jdVGpbArP",
  "key24": "4ToZz62Ga5yoegdh3FaPng6D9Cj1AZra3ZcuDt7wjHc5zZbqd2MW3iyJnnJ8AwL9gRhpgwH1vugaT6w6mHurbqyZ",
  "key25": "3ct2gvhzwdrNnDc5q4A3s32d9mCYrQBkwRQGdrRwqRksqSq7Qjan8X3AGQ9WMoYNXQUh9rXT1hizpHgCcX1Fwk1a",
  "key26": "4edNcsVbNmoqEqFgNjceY6UEDo4aHMt3pDpxp2PowR1FWipXXti6p3z4hxPyM6rguEhbwU47trhYq3Ze4P9j91d3",
  "key27": "2v8wXaW8wcUfJ7a2n4kXZYiXKwLLKqq4Ukg8TsruMf2cpej4MFBJniqRUM6xkiakE4aCpnEsq9XDcPK4Da83PVe5",
  "key28": "5qsV6XVk4PhyQhRrsZQGh4T3axpfHGnwzJyecAFNDcg3VY4MrHewCvH9PLQquWrxmGtWttdV7K7Qp52zVqFZFZSt",
  "key29": "jeKbpJ58vZHuvnpMvsKQ5JLU4dEUgPdruZwrG7AJtZDVkAXFxr5seR88sFHWo3zwSaBJhZwq64Sn2hKvVpNAEz3",
  "key30": "5SKGAeUGZZHfnQGcjAk4td82h91rPfktM1iWUvUj5p7pgcUvtREfpimMRtk6rHcgbT3HxzvU7Et1UKxx9i7bigEi",
  "key31": "4PSz5eF3CXDzP14pZWMHnJKvsWPqnubXXZUrkj8PCE62DnkEEMWVEqrgqaP4znUrCuJYE1JA6pPFueT1RRhKd1pi",
  "key32": "4WQChQ5fUF44cYzixPVJTKmpeLDypXdSHFsUNJjEcoBs9zesNhiSFdzW3vCdHVeKsGmByNQWAaxocVj9Pwxvckss",
  "key33": "3c9YC9GBVuDkSPiMgqV9d8n6wLEqJPxUQDyJ1HbUEBL4m7v4DZ8vuQEidaVRaN3ki6RWTFqAvmbCzfuyVzPyYjBH"
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
