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
    "n3u8Lybg899g7WHAS642HTxREQG6pSKLVfQhc3Vu6hgC6x9k94cEU2ej21oYAy38VNAcTMGfx9vLV87he9uespS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLqzCBKeDU5YYdDPfkZh8KbmV4nH6RYeDsSUJve4ahVjRekT8cPXoNeaUmLfBvJ6e9QMPLyn1P2CB7udrk5atmb",
  "key1": "58epYsypbYtj9ML1KMfQzqbLY2AcnFo689jnNRJdQsr9UD8ViM1QmNGzhiERiuBKXjKWgUt5hjQk8bTSGUXf5Gy3",
  "key2": "4xtENuXjnf2Ecjxh6p1wqD7vWDUxtAhLY6xWomRjvAWwE97gtAUmGk9Y26igfqXdrZMJF4ZD3kGFfZMbXaA2duiF",
  "key3": "3WiQYJxhyf5UzCCdgtbDFmSRfun8zoHgUCiodPXLQTZ4uys8sS9x2dtEboXQNJWLEcvwaqHpr6kadL25byX5GzSs",
  "key4": "51fZ67FpvY65ktSmNDjXgC5ELF9qDSAMzFqbw3rJPBshWRuyJKFUJafWWoEFPTuBZ69Js5AMr5tHGWZ2jVnFBWJ7",
  "key5": "5PnRwoLEWsxcXeiVJfUpyrr6pfsjNMWpVGXG1zDTVWYbsU4AgXR2WsKABfPPS6nUn9CLEtPRaDq2fEyEU19XyAt",
  "key6": "5tY62HF6myZH6FNGbETLdxSgQNLwatLFfH479KjPEzzPo5UDoHjJXahGjQXth5k5wfAAQX9253RZ2NxCaqve77j6",
  "key7": "3KBjM4CvVCprzKCGUExBKdTxuS5s4rf4t4SmAHvgyqwCVoXRQMoye8GVg1uVacdbz7T4cQVB9pQa8kCAehBwMqQm",
  "key8": "pyb7yxuEtGL3xaLeH7ntLG4X1VZGiMg75SH5UVfV2HiAZihGbkmjG8NfjU3dTi1NvUc8Q2vESxTyrHyeon8bttK",
  "key9": "3Tef4wj2KzsybmeDpjQACsKkZDwmpqJMLbXdQb3KveyAq5qkzJfDuc27BfTkVBMWJXKde7D1acmDTUq1WwzL5F4u",
  "key10": "44VTgSxvphERutxW9GyhP3Bf9S34DmWq9AsFKxNMqo1uVuWFqka6Y2ebvHUE6fnD51U3YHHGQus9PhbxiN2SpBeF",
  "key11": "4PeueDZGnBeGsF785SUaoaBdX3cLZ8uhMvN8nMo9t6LXT6kX9KjgCjxz7geyFihpaKxxd73EgXuXF2ghpWEQdQ2S",
  "key12": "2Ymn4fcjyY4HCiUPYLHqFqxQFLA2W4Tv3jG8eUTiJyRqd9psPQNdeLDNhSH6tUSbg6ssMTwhFyL2DqjWnq4hY4Sh",
  "key13": "5wmfTcvZC9sTHRPdu3QGFkqEczPiW44TfqsQwLtqRALT2G6Khdfkw7H45w1nWv8ZnLvdbuWLR1sPByVDUYujE1cy",
  "key14": "5DJm5xq35B5dPfL6HqbVLZeFBpasxx2Ldx1p8XJqw1CrZEaDrZjEwLBjPzncmXnPTyrYvXdEtcdhCMgvEiPTmca4",
  "key15": "4o8Bq8HWUJ3MJCZfkkDrKcREuLp5YupcbwBSNtrDstDim93u35FH7dBWodR4sqU6cHQvYMBrgApJgpNhmjiBGrna",
  "key16": "22VPJTAZaehnGF7AuC4LWdgsi4RXADamcTPv9yC5poCeGf92adUUiaNh5YHYUgspMKx64561Bs94dEpzptevVoJ1",
  "key17": "44cgA1PmyybHbrVSFEvpPAUt8PftwNYkGsJMbiaKca7gCnfsFN3RoN5UsPp2k91z1gHLJRVDV2g5rUyRNuStmJDP",
  "key18": "2G3WiUGvvH89UvMVfonpRyN7PaZu1T166nWXZHkxyhdT4oKHwsbTjiUtZbNMMc6vpA4ApNuwPfubKidwomNXGbtH",
  "key19": "24XPyNwV3okC1G51mHChMMYQSWxyJXTYkGFhL8uZG4voqXyS4LGF1DVzSVBxVG3XDLy6z5Jq8V9yZYZ56oSvzZJi",
  "key20": "3Z3F4VW6uDy48CtRJhafJeMYzRBmjoHQz1mMsf5yYLt8pxHzwTyKRBVcXoxHYdqse7SL6wRccsGPpRNHnaknQVeB",
  "key21": "2zNSw5C7hBX6J2YVeDLLBW365dh4NBKBuG1FJn4mkYrKHYUMerwcDUacvnfi53wzonY7QaUcEPBNH4CK3VttcVwv",
  "key22": "2v2Q1cVVwy1d3iDNwtDzL3dfdouDEZkp1QJBxGwTB7c4bDbjSb7wDKerfRb3YHHK687TRuK9RED9WNkTpEwSdU16",
  "key23": "2jVNtGUSf7unK1Ywq5mg6nyjQiQ69iECDi5qgwMapUPqCRpyaHpT6t9Xkd2P1YLaNwYnzSeRUmySapwhjBiKEwhS",
  "key24": "4oFB6rp2zur1RM7GqzN5w4iaW7oi6hu9eFAYTq3o2t5MZ3oNjG2LkzmmLmxoxcgv8CGv62jUVjNJQYrpRSAYygBb",
  "key25": "uJ23uXBFFfiL3bJHJ6xGQmoKDyCNetykxwyu7Dx6bJQTaMJUm5U8UkxUvKhhweR4pPr7Er3a6gLtpwX1G1CzQr9",
  "key26": "dKYY4DTre8tG3FKqYhWAqTpKeRpAcCdD8TEiHvxafAZGctrfsfHPRVZKDRWoGiYeZ52CZMsjf25YjiFcFiR4Cjb",
  "key27": "2pPZ3hn112mPgxPS6CLf453WwMr8crnsLpEhru9c2A8TX5GCTf85MYsEURCb4LgM7q2iLu1Ax6xCQ42Sn2CvogyP",
  "key28": "2wPhR2CeHLahSka7Xb6QJQRWVPinvkXyxqjKA66ySWpTack7xKUnWWmwPA7VVszoNBhsa2YAcK5zaseHrAnRB3WE",
  "key29": "2Czn6EF7or2Aw9pLcoxgyUM4o6Kqrm6J2mXGMwDa4QYob4vZvSH5ZNp1YdHSswxVmzGxHC8dEJiQ5Up8W6CmWFop",
  "key30": "2sxzZ74aiQTvhko83h2QAZ8UJ3tqo25pcT2HuUS6dP4nQPpEaujuHExXPNDNjh7RqJnLA1RdGKJ2RJwekJFHS6jE",
  "key31": "2cHkHjdDoSbP2EHCKaAd5xwdxrMQqQgNdzo83eGVEYCFyCZ8iErAhdqz1ADWZFmZ99dVPH6BTDhBrzmBqVJNWrhn",
  "key32": "25Re8tgK8q6qEWuiw1kH1V1EA4Zbt5Q6kNrFHjTcZUei1UQ2EHuww5y4LiU77sFoRFB7kfUawSJr6VBNzfAjtzYr",
  "key33": "2WJ81uBMKZLdRiSeoHo1TpLUKKtFH6P2twvkTx54rp1F7RvPsZoyBcicrWAiqkdPTweNBzB83PjzxfGBbbbnDDx1"
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
