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
    "3LQiq9Bb5eDhwXh9QVLM1ykSQLEVRq3k2Bu6Tu2qfMADC1KvYPzCUuTygmpDc2pahM495v7E3ygb2gGVC1TWCwNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRMCbdEGtpj874zxgbN9tJMpwHw8qRF6jcxHTLxDimxbHh9mKE9RTFXKkiS2qGLL5G8AkJevM8GpQzSq6uVBSTR",
  "key1": "25LzifWyeqJez8iXeSZEKagScv5zhum117vVZRFHD6JxNFozCNLKh2AG4PnesMSCTmrShJbRuhN6TDuz1oyLmC4b",
  "key2": "5bYgsGKBeL4MU9XcfzpnPexka2wLnFbFre74K3uoBo8wutom3wFZq2J29ETeSEm2NNCvrx53pJnQtoGdsU9DQ7KT",
  "key3": "2k2bapHtWn98FEyoH9FC55oGEvoXkTD5sFEnzadvUmpdEozUrQkLxtSTBthuJnYVyhdq9e24TaTwugxqBNQUVWPc",
  "key4": "SXgMmqMxzc4dLfEZYZMhkX1RHPLVozaMUZWWeA6qRgARKuwuV9u2y7e98Rn8Lrn8NCXYwAKHtxcL1MD7CBMH2zq",
  "key5": "28jsR9P2UYwiW8HgiyFdmtYpSUYtvViA1HsooFwJzVjwYyvgH9cxf5cb3KSDWz4tERa5BawjtDUd97mFEM6p6x2K",
  "key6": "244mNMF96Jr9UKXT5BgqarzKFY8MKrwQco88qSq4W7TuhpjFoBNR45j3grm6KCPfbapNDC4hoidncN3VkQJkji1a",
  "key7": "5kW2nSm79gvQKPH1yTVbQDiyZNKffgVWweFHJ8YDgPpwukmb2jGM5WxysnB3CUGjX75FuU6YFYxwdTVhr338NpKa",
  "key8": "3xfNjXNgXqhFVj1WfXmgB1a1jk3n45hWxCPhbvJGsnG7c8wbCFw773BV5oMmsU5KXJJrj5HRpn5zNQkbZqfbsU2a",
  "key9": "2a4TirEArKRbpSHNZhYh7uFLYMv1GeLr1VudtFpZc4MtNGCzxFqH9RgQvM8HREh3EJ3PEvtLnuCMT7N288wKrEag",
  "key10": "2zzsrVCuT4ZBEkDg3z4jc5fi3Wt49Z4SVfsdAq6SSLnsWsmem8gvQfoc1c27ALCrW58UVo8uxGzvdeAKWfG3rmyi",
  "key11": "2xnFP2BVxaMpF3UcYjxuF9nfUcFijqozsubB7bxpXRj4B38QG6PHYrEvwMv5BsvVcU58i3f4LwXkF5Mb1w7Uevzp",
  "key12": "nEHerGUGaV7ekQZuYwTZCnbUp426StpeorUzqTsaFM95gMpNRPLtht2aL4M92UeBfux2y8Z1YyCTF19qNuPDUv1",
  "key13": "64FMbGw4PTWQGDKQdcheVxRSodZGpskPS4QYX9VhGRePF555tN1YFqC9DVkdRb7pZZshUsQHAmGWJaLSjFWj3mSw",
  "key14": "5fy7jcPr7YxuHvtsH4P3uwcx6hpxPeYWS7mU9fKzzAUEfu7ABhuzFLBxjjKBiF4zUDZsjGqz4EQWmWkziSP7Eyoe",
  "key15": "3caCsjv9R3gJ21QJBgJsBJYrq5uK9Rpf7NMQ4srTR9nNHdNme4QLB7S4JTJ6MU9geUzwESA542uBsAN786Q2wtzk",
  "key16": "v5p6GU6b3bVijZaotWWF9zP8CChc4LcEtVJMJPEDX7QNbx4PaRgQ8X4twoA4ZJpkryMm9DUVpx7q4H4pF1m1Khg",
  "key17": "DC56dV3re3fMSF5mkZA586vdDjS2gCV8Enjwr3tNpeHsDg2ThyhTXTWMVq8dmfSdFx37ep8cvQhEn9ee1kU21R8",
  "key18": "nDH4JBoYH2wNXiU2rWYmtrvnEUzF99mfiqygnztEtkwgM6TResW9oWJB3LY6sWfXydHz4xW1zJAkvtL7Rin4HpF",
  "key19": "7ncx7bn7umVCeuZYGZDgNCVxKRzL4SQ3KTgUeSiRs15AEPUGzLqvDdm9R2x6Qk2gZ3R2Y7fsP2a6m1LkhcRcvF5",
  "key20": "2NaNfLryeHhhRKajKdKoLv7R2fhwsgzvrd8sxtMVxruNKSCpQuQTDU5Bq5sxEN4XcQyAGreLG4bYrDRKTajycUrA",
  "key21": "3onvUUadHsMiwpNjdBB73zvDkfgRrn1hoA5UYeH7rAtvk7NejLdUceEXRMaE1ZZGG4gUyy7z1jdzbPang61C9Y3Q",
  "key22": "4GjURywLMexno6c4XJcm1qEQ4fc2EdvWkB7y5BSj7DXemR2kGkW1dQkSuFz4uzr5V16KEQ78ggQ1E6bSaFEjXNtM",
  "key23": "3z6sZYBz3tzZyspWh276PRHrr2PAx4NzT5zNZtecXTwaLx136H6amkVUEdgCkUivVJarQHqLSQ4RgFmzWKucKUEa",
  "key24": "5Xq5Mh31L554SyBvx7ERvToEXR75LtfDTEt4Vn56XmQGFSUAZbmRnwtK3xvUbKKm8joDjWc52kLjVV1Vhur6FHX6",
  "key25": "5UoWwAtyJo7qxXehLkAXUVgwdgKUNLytmw6tWLWzuTswsLEB73ExJqsmH3yedKDDabam1mcxXBrpSKPht2BAieNa",
  "key26": "5WSiYP6Yvrbe4vbfkpc9NRfwCHZYoMBzB3wkZvZgw3SDSjPosJzEpATkwHpVBLv33dnEaeXmos4BCeMakgkfTx79",
  "key27": "5dRvcVQ6SN222LQd6kZCfsppRFEkYWEic74wwQewFPkSymqUB2wFMFGGAQ8zqCDcYAnGoZ5H4YEsriGujYZroNiV",
  "key28": "39afNa2zsq9roECMeNouzgp1VVn1kbABQZhctTEpNE9HybmdpKEgZ1ptTgfM1orcV6zh1ikf2EXVrUNhRWQj5uPn",
  "key29": "cWa36AtqZ2qvHUEyJ1JFE2g6efRXUbJBn7wunrxsAdrRbKymVr84oFumD2M4zeoHLRCrSvEMjjSyDeR6Ru9AQWm",
  "key30": "41iYxM3USd7wnCzgCabwJ1sZxuG6k1cPwyfnZzyUc1keG3p8Ro88n4HoCNsymLQ2SfYvXD8rWq6FJfZjcugPhiWU",
  "key31": "63qGCbRRRfaDzWUn9s1XaDLuS7k8AS53F72zYx8uRhXgtcskbo9Z58axHkL2Z1HqQD12bwhXVdamZHTwYq4kPJVt",
  "key32": "3xLfxaoyn2vUUCUYKwoG6ptyU5PzPgTdgvanR7bbHPHUFFKtCUJ9cqsWLYfyMVML5F5AgBeMPx9b6g5PSyJoYrTN",
  "key33": "4aDTrQTkxrh422dU7HxqWdWW2b1Mea3cZKF69wCFw3zV86D4s9xNe4Yo3YjfzSM5DzZLrQdWPHb68V5RhPNA6xkX",
  "key34": "3BmkHangAQsSYSGdMoaPYB4gRsoFBp2dmE2AeRNk3qNPWULYe5DZfcvvdmTmq9oDFzV4docijuMSEdSJUWkM51M7",
  "key35": "4JVjyaqEnyeoG36uujGEHoeNKELHxqLQHLViLNeJRnXZRbiGTtrHmpFWgo7DmSwS4QMVyLnUmP4XmNALPhecenV6",
  "key36": "3QMju3FmYiXoAt13oXrwuRV5i632BtRmVZFGzr6PivPLDcnykFCdVRjqwwVRezw8QVw7RoV96apkFXXcGewgeEmc",
  "key37": "3DBuaJPq1sdsJ2uDehp5KhqJnN3rVxmWunKWT2WXPGeos8pASEHDhBTNDaVntir5TC7L8DAc78gaAU1un86da69",
  "key38": "yFdmGpoitaWgqTj5pU28BpcPYeDZVk3XmjYZrVwug5kpTFcgTjNjwZcPFFSbQhv8hZNDqnvCS5wnABqruoDCVUR",
  "key39": "355eUj6yg9jdvxymArTDXE6vDB4h2x99fgRBZwDhyMT6UR7G96dsKk9fhmTshdQdXxxNAXGKpktN3AAAKv2JshDY",
  "key40": "4cGmzgRkEXUYVFg9pWWTX1wdppzbMkKPJSh9guVJmTWo9ciwVhubUnoLfMSqC5E6EqkA65mZYxPSi6AzC3KXyg8v",
  "key41": "3aWVpUHX6U7zH6MF9PM9hR8n7Y9B5omqEZYm2LcfJyJTDJtGqxBLekhjCTA5WfhcrdXuA4AgdCxh3Ypk6ro51Ejg",
  "key42": "38VvKjiFQbXqvWCh6J3gizvxggYYGSDEyH1o64Uv2mdg7S7UdQ2WgAuAE88aihhRcN1rXNitRMSfXEnhWae3NxD",
  "key43": "2LZuZshyMLaTrMLiwX49uWpGFjwoxyxG9ThfKJCM2TnXV7sMRZfb9vYxcHhYyE7ociB9NFMLKJojnV21P1j7Ntat"
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
