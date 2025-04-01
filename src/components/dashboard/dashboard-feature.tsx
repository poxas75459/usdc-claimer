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
    "DiCBrtDXmtPSbjgE6aYGhFdYbKGYb293gZGU1G52TYTM7rgvsAC3tppnacA617DKDmpmVcDefj1utd1doXzj8Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sJjnEWHL55sVnY4nxFZe7gd5Bi9esNrDtg4PZANZWGdUZDSWkQyuS7kTW5mhFLv8Wz1goWgGoHzEGtkfdGLYpUV",
  "key1": "5igHpr8FHkmVAMhA9gZUfgWaNwGVXcVAv3frJR7sWMWwH7DNUEa1axShopJ3oCp5QLiqh3r6PAwnQvHp1JuLNNeJ",
  "key2": "4qTDYA4WDUBcLCeKfWQMb6H8bMFMuh3y4yCgy2e9FXxKLXERtn4UcSgjZsRQRZBKxguWtdTLKfvutAa1JYhCYbWG",
  "key3": "34i9huGcVN17Bvktj2RS7mkTNiT2QCT2bFXn3TGZFt2iKNrSfaPE4zPDpVtcZ6euCqtvLMdEE7YWVwJcdvf6R99k",
  "key4": "2Nb3SY12oPoo9BDeVuNyjRXobiZEPWqWeetbzWj5QEdd2kkRq3YWDtDUgcDpExostJPesqGYtp7nWQ2SW14B9eqU",
  "key5": "5edw7BHgR8ktHbrFLuFEnRi6W3zmxMjeScQsHouTwKmbDbNq9Nw1p5FNR8wKKWw1YQMtMZVxWA8kQ4UaSVRNbUXP",
  "key6": "2DDJHJLzKJSporyckg2PDL4n1RdxyQr5fU8GEn6LxdiTmKvnmAXNc4vBhFwCDbCKEMuNBkCvZ9fc4PUP6cWsC2rk",
  "key7": "FcRi5L38NmkpHQqdG9QGfAcwwPJUeZ4UEg8zY6BEBSRNmDws6HVcKGQun7pqxJAynLo2QBQEYLUYt5QyWFkKaNN",
  "key8": "5tyd17HDF7hanTV4McAwPsmS9NtNfpZkLWcFzJv6tg4hwvSjCJamkuKJZF6GXuVb53X3KEXX4EKzFs3FuBm31Ujz",
  "key9": "z3MB2w8Yxw9PRbmHPbdXm4B4dnsEXgryBu389EYp48Wgng6FSZVxmWD54Vqr2AARHhXDXcb6Q89UQLmTQbt3Yuy",
  "key10": "oyh5gZ9e5KkVKYe7ZtksV4K2MBf12jZHcJobpfNKidf5PDLNJEqwiix72uGThQyRdophk75WdvvvHrEQeyPtXve",
  "key11": "3khPbHQC4nzZMjKygo4rnCxPyk4NH27nndyGMjDQfVG34ka67Ceffx454bkMqiBMN65BdSoVK83rxsaC3bogNgec",
  "key12": "3zGs62nSbbuCGXhbtX9qtccLhXdoM5YU185G73SzcxeUSP2iSaezUbYFNopS8g1rqXiLVH7xezHYkoopMrTEAGaN",
  "key13": "4e2VQGQCYS3MCRBnZuS1bVQhnyGuC3NHGs4YLRwgMLM8xu7CmAkNv2GW92B8L991DiKgNSeKyvkZkaxXLZVMGq7x",
  "key14": "2VEkg44Em33ox2gy3cRXygNfR54V83gGCQUXr9FdoNi1WBfUgNoSQMnV6z9cch3xAdRSiDVBDXCSadL54Cc15GGs",
  "key15": "5tPGV4ZBat3Ycykud6YfrVmD8no7pJkV3pR2Ed4nsZXikp1Lx9TEjbVpXTJozJ4mvMxgRw6buq5LrooMiDLsxZ5v",
  "key16": "2xYVrcBCPzfqgFH1QV85SGcvdnzfAZ356PQXDpTPx7tAiHNa9xt4N8AXFWxhgccphpDoTDjSEmcHhatLNTT27i22",
  "key17": "2dpT5JvPnVYwbVtsssBUnLm7DajsM1WX1qfsQvRJSiggkXW1VPSFrvTNRBiVCCpjkhPVFiJncZQj3GbvTUkxrtNs",
  "key18": "3aB3g65a4BTMFc8ku772NQtPJrbYntJV5K6fDBvNnpxLrHB7cS5KtfFHS9bfmHTEnt5ddCkMzC97XoFaHmyYhRYV",
  "key19": "5GWPd2EirFwcRJguuiEQFoo6A5cJ5zsGUiUxReiuN8osHY3gy5sobq6iY88FnA5mruJkTx3NkwWc6poLokwKrjpi",
  "key20": "4jR9ZcoWNBaF4vjV723qBoAQDmH3HL2Ngrza3W564CUEoexiwpYbHicdhrgWnWP27UyFzL1kpQHmuNvAEKhY6BST",
  "key21": "3MQiSQ5StJp9tJYYPPTEtrZFFLvtRkwgo9z8u3rNrghaexpf7oFHkKZjZof9ug7Pm4D6szjQDBD3L1FZTVefG5Fb",
  "key22": "3iiGAQwpnoqvTn5Uys4Rbi51Djx57c1gNigetZCiLzR983PVkhq9KwSbYuSrXH3PExbNdr8B3mtsHERvLL3GvbnV",
  "key23": "5ZcmEhs1a915mNUakadjR6Pwm4BFeBNHTbMjPfY6oSqjKDysWAZzi4RfbpoWs69xgv6un4Hfr9vmFRkwCfhFyd2u",
  "key24": "2sBQkudfuKBVfkcDAe5L2CbtdLwmsmLtyKGqJ9ZkKQ7qj3qf76Uoe3ezLxRT43vQuqWLZJUWqWgRsfTwwo6GRVcx",
  "key25": "5sG75k2Gbycd65EzzShuFtEGokGVT11WKUEcDeWXoVHADucozCooL6GPJwd1R7VsT7LGnQZty5g8CHW9ExgAqDQn",
  "key26": "ASUYWk1TwHuj4DuboWst1WYLFQeNGeM8VrsQ1HLi7cH3L8y5wbH8Ys94kXZPASce2EdgzirmgFL6nU58vWGpbab",
  "key27": "2P1W3WjA2nePPZteHo1MSUZsPx3xRYAgmSnZq1bTnUshMLN1MTMzPc321rXkY6hpYW9wgr3WYFxWMWZ8dEekY1dk",
  "key28": "3q3AgXdjVeQhBbcZmssdxnLGfXEGebacdM5fSBvmR3hLSsi2BHKhbYWkbakfX2DYve2dovvx52tL24mz14mHkBBz",
  "key29": "5FGKvnd347XkwBkKnEhd1yxPQvUxpxLPnaLyhwR9bhGDEXXem1YwCzFzDZXST69GsJU1NXVSggYP9HghCCN7jf4e",
  "key30": "pAwjFvvdFu9baRrNC4hWK61h88pQfepYwjsqWk6dZWBGe4HP5BLewou65bu54V35BqCPdjbPPDbR6tj2b8rSAuJ",
  "key31": "2kVQdWJvxVLjyQhDXqoqtUoRhhjsGffomJurZw9iA3vHvggXNZBo5iiXZvarg6pPDKEmLLDn4ez89FzknJsfr6Gj"
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
