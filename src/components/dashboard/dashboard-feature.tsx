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
    "29ZgmMUefHYY2DAhcPscsec4wRPH9rfpiCxtYz3CZxFadrxN4cDs343ozLrppgdGKy2R5wVirYndjn4rdLmMpGmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avffHMSYai1RreHyj473xE2sFKai6CkBEcxDtNfNX7CpSWi9889VYcDoEfEB23DuUPvhcmQKaJouLt5zm6R3Zwx",
  "key1": "7gfvwpFS1EG2vG6nev25UHkMtSjrMojAcvCN8HqiX5efHXL8XL6zT5tyh7Q4s3h5CTYwLdU7M1kh3Cs4UH4ATkK",
  "key2": "51ywBaABJFSYtjK4YqsRKtSrmX19E8n8bNPq7c4HjcAecEv6a2yfGACQRKMPhLKFHkKM27VzJY6ACraH6ZpY6iJH",
  "key3": "3rKNpimtyb3GtDPA1btfv1N3oFmqwYuQ2ds6oguXnwZwrM1vKK2YYGr5DeGcrTZpW3rYDaxuqu6HTBCwQd4zrC1S",
  "key4": "2v2pfoNUp6Qq2WDKcvvCKe8utv9QrPdH1LiYff4XLcnFZNKujSw1QeqBd9WiSXfyG1e4jr6rELcEx7NCrhNmUcqq",
  "key5": "4En8V2pHz4Bc86LrdSBMvRgvaYurcF2ZnJJXbtwkv8m819VhTgxtZcp49eiHkS7YiNaghFsjvNuky8fcEbbTu9n5",
  "key6": "2LKd5T1RKnLf98VreJ2Pqk6Ufu43gwSiAde85dqyMNpgVMCza5cKaKiptkEYUgsESmSmtbRDxLpUjCfvJVHnR3JP",
  "key7": "3bgo4em1PQBCtfUFEQ7EjDQn5ZKtAYJ5iwvxw4ZvQTDzz8nRsgvtdkBQ6fw2ifsiAURKF2BFJ8xyaZpudA5xVYqo",
  "key8": "5WQjkwkJebgi17Ywzvpn8RjWAribiVsWf3YQg8iXtke1hpNiN3rHkdgZDJBjnBx3apxuzxXucz3EjM271X9q1GwQ",
  "key9": "4uJ6DAufMvXih5DcjvTfNStmaWF92SP4dQLaTLh11aBxv4WBuY38dS8UzjppXcfHqR4QLWNG3FzU3wvGBtLwq3by",
  "key10": "4SABWo2kkVRdh3rjjwyJchkMYv8fV85NzBtJtAwH7NmQtbhX1DKk2MiLJL5mosycx7TwtgMzEzFJaePE2hEL3A7V",
  "key11": "MVNZrr84w9HAiBCLxxBxx3pQRs7yVmwCpCXQa2Qtn8m8vznm66HtUPenez2B4gcDWDcQhP4UeA1AQkcm4Tetq6P",
  "key12": "2GpGRTePxkYXPxNAyzscsELVX7dSiuYUeU64FCdmwU5bM7WYrihtgh4YMB9LEotQmibjbdYtWMEYXN1jfHN91GXd",
  "key13": "5Zg5syHPNDQGR3qinAQ28hHwDQDZUmr7VYpW1EH4YERq8D5mmD8yxW7y1c5UDWMvA7vAYBmeg4MSZSuD3EKBtiBs",
  "key14": "66cB2F3vayMrv1X8ofnGTLtrftvReof8Cz7oSZ71VbmnBNfHd6rL3fYtN2Er7dXXfMMuSQVE9Z54i9UqPA3kZ6nr",
  "key15": "4hiAaySJyDeGk9irGrXu7tkDrfqYNQ7W1JtinPD73boVfpXnwvnLcY9iiVLLdPucyXmRt6xXGdJUDiEnL6Tquz3W",
  "key16": "5qnS34BoXqXLZhTSi7BJyu55zMizvZn8pcPGisJzu9foHYFchtFN4ZESbW3rvkLzmvau2pX5Uoe4XBv32gt4F36W",
  "key17": "5ejGt78JxFo9u9EuVT5vuV7XU5baJhfHdJdxd3etKdNWEujfDioPw1Ux37xLDUv5xoFcGd82dpFG4HuRyEj2Pf2R",
  "key18": "3ykvaHuMMmzeMHRQ14sLQxKhV4G71RtWwWPRK1RwCqCNr3rGyYn2zs8pzfsSkNpVA3jrY8ueEZ5WCNrY7Ch2BJX4",
  "key19": "5LVSzbhkuyPCgrtGGA1nrcNEYu2tZPFj5p6EnmtnxrFKTbpyiotweoKrGN82YcSZAUQGevyqqZK9EJFJXwzkweog",
  "key20": "vX22t6Shj6oGmiAKFBwTg5nWfsm4hDhVK1VvsacukUdw8dhg4hhfMwCkiGC9K7cd1i4xC7Mk3W1nAXsJefE2ofB",
  "key21": "3nfSkS3BRycsxEB1TmFFccrcAa6eFm8L4DsRyCfhoVFbXiV9ufs4Bn53wewCJ4GtiAjaGkXQE6tcnkskpJN9Zvn1",
  "key22": "4HzpgTgKJL5Gt2zuYKfAapGehHBG7z5sikbVVQeHnX9R6u38kzmgNF7ARCBhs25XHZ9TfDRaUmW99mgVdHWzRDiJ",
  "key23": "4yYsPNYWfd4RNCmFXGJRwMPmXDbnY8r38qCQ3EbSRjv5PJYPL789PXJ81tkykcDZKdNjebXZu5NJLCpqQKumvtKB",
  "key24": "5Vd1TF2rPCaqNeJc3ok5Bi5wV2kfDkB49uqbMdaNKrEBAbqu1ek25Kh5AGBRypHqGVB4VmwT1v1dUWHcqgq7ujui",
  "key25": "3aBsotoxRJYuXHcVPE4NnZ1sy6XcBdYBD4nnk1RATtCHMcZyix5i4uY4tgm64QtWFsECwocdYPFMgEDLv7o2gPMq",
  "key26": "54yhHvej5tpGWzTKwJRsDSWKEw2Arna6kjxAwQk5yhDbhi9TmSMXB5oFoP25N6vkrYZiUDCF5bKrwnyQ9L5EeTxB",
  "key27": "647cLJcfUGsxcR5gmEBc9d5bm82p9q1ao6RSPsvfWoBdxXjpt4Bvyar4caLWa4grtSVKMbmynpMNLfZhS2YmByFm",
  "key28": "2WepPAHfAz3Es2BqrrD12f2v4BTUjpH3L969TZiJNtE1gwihGdHGmGeBJnw5UiXqN1QgoMvGdtWLgc6282r9qReZ",
  "key29": "4i2Hgz3K1keJRo2s8bYy4LGWQBPPKKCLyCZu46k4GkZuM9wqgfFCAFHCUWbTYxGKpeQRZdzXLEncVxEr7uFn5p9B",
  "key30": "29p655a3DErLhAzjSXKskU2wTREBdd3eME1WeDjGEL9ZPAjFWZzLcpyUtnPrPoX4er8U1h5xg3WAwQJVrLuM2eWL",
  "key31": "JSgGtj3SufHWMZHi4jwtZN6y7wZoau6eTovhBaK9xckFcYbgEPHVJXLdM2sCoDPiqRVteAeN3NGUpRakoi8LKWW",
  "key32": "GwBEdKSimMzi8GZyVjGRxjUhYsiqYNTkpVXhPKCmJUMSHAmn7GuFoZfiwuxUb2AvEiPDq1ZosSN3x3Psf5g72eY",
  "key33": "56ZT4Bj2nepageHRhVaBJQMDCo5ofuAf36DfwMQyjUoFcyJsy9wYh3u1cPVk3Z81gLQuMhKZdD8Ja2NtngBC4PHj",
  "key34": "5Z52jWUJ11yzf9YLYJDgkc7Znr8pfawkZEN14nnHV3KiriZdpEyb5DXM7o5PpdWD6RELZVJP9nEuJU8ctNBz4bkg",
  "key35": "FcDuTUuYSFsNfUXZTCZkmRyeGuAWr2datNCaUM6WxNf3goBSSupgMfoEscE1xyovpmHrppLPph51L2qQHxX4dNB",
  "key36": "21yREU1GTd4tHFNEBaofkthM9k65wxiRiQbTAZZt9U4EJajJfD8nydNrtuaVCLScZRz6huzTExRR2XTBaZTjFGUp",
  "key37": "5kQHmDuKiSonkXZbbgneEzYs4997tj3e4H8Hnv8L4umXuX7uJqfLP3dGNVKoT9U8Ms6yhge778f95dqox2H2SUJC",
  "key38": "4kf9Mb66jYho49sz7Zck4S1iUuCW8g1deV9eBHXvdKT6HpHHCdE2RPDbV1EonrYPJAw1wU3UMJUovPSLKDMczvne",
  "key39": "5p71LnyWboTWwFKtE5Tn4Pym6mM93UqLWB9qqQAFn3naLoegX2qoB4d653FAeGpvy9sZkHNBbnvk4XGRroYatPdH",
  "key40": "4vZHnG71rDAZG9KnchEYKNCLsbbLy6FnregG2DJPRtFpSLoc3chB67iZguBtC9ZwTy7epJGUKAy9pXrmgML6pZKY",
  "key41": "48LZjq8mQ6NQ3iBVLDhRDrXBf5a28tGLnhj7sZ2FkFzNLKiJUgPaFxHYp8PVgBJA4TFB5MzEBzCeaaP34gMdPxre",
  "key42": "32wHiMTn1mKskRoNGHudeexMG8ABWgGACLizkGj6pkBzoaNqJo4a7cXgvZyjPkuuYYNTtEQBxQzxL7ji5XA29EnK",
  "key43": "3TpKj5sqSquvU7cEeCH7xJwVXS2mrPqUrnccJCS47uSxmggVrxVvviBXTVygibYzpm8etg7EexCXNNashXyxkmyu",
  "key44": "3YzSLR6XLsgY6LRmvdtTTfp83pAwNa3F8WFRhDrZa6NMk57W2N6K89qQvS5c3BZjnSrbU3UaA6wNmmz8x7bNjyLa",
  "key45": "3AXH2G9ccUjBMS1ZGnpVStfMSWDGWeBiPiHZfUxgYyYGTF7fo54oc5RQbJb64QDufQMFKHGTHywSNs1EHnoYpwG6",
  "key46": "58aHWfkY2v38LZAoQ47F8ZAj1UzyC97o1W8tDagannQfbdEPfEYSbbcxpEG4fzBqdVv3wudhUa1kbLWCKi9k47p3",
  "key47": "LZkY8BJ7psQDWj3Ha73rfJASBcG3NuMtUVSxXKbhAh5d9srxRkmLb2eovfqctsnRaKCQ5oM5dgXzvJcukeohHXY"
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
