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
    "5hetWMUfnv8KEu6zwTRtDyrz3HawardopZdpk19ipWbJDVPTWHVWx4LsGpcSh6bj1DFGB8aAP6BQrJnD4jBg4uuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1z7vpHMw2LgbgQbdhqzTt7WtR9WK87m72cGqzZo58FcPVi3Nyh654qs5Q8A361dLGmzMVo2RHnoGV2VeoKpbbM",
  "key1": "4QYTraUL4DeBsFh2n3GSJJSdskyLqG7kVTbZcP8jKWfv9vGN4kq1uFufKY8VhdDTLSJTEYfWAwMFoqqYXedWFEMp",
  "key2": "46C7zxxhJsp3fJCM6k3BP59aP5z2V6XfUn41f2Vn5V5PPu1b7cGjNMRXBo897ZXdrxo2CNE9kH4yvbd3cjGrMYzN",
  "key3": "3bgXqvSFdWk2nJscaECqGAQa1gPmjYdApTwgd7nkv1nuDKDKBPZE7jTDqLsvMePSYrU2xiT3VTDbbQiYgCspSMoU",
  "key4": "5GRZYVTyRLMnQ82FtY8k5GsxTuXGwDB8m3dDqav5jKFKaXYGVhJiy4EcZVRmM1FEF9C3qFSaZu9tXEwu114qAQk1",
  "key5": "3yXsFknFJS7Dyk5zPksiH8A1ToJFZq9yxvLXkWfmKfhBvDyZdnGuJoi3VoAtSysPbxiRN9ZF4yktTwsvjCEpfLkz",
  "key6": "53rLaVTUtPZahu7ofsAq4iCYJhPHbq7uefZGFX9N86BBgBkMhRHx2mqwj8qhVkMtYCfMRiVV5QSD2wUHoaJPD4Tc",
  "key7": "5KGQ25sbPbPdpaEASxryLFP4kSsqvp4dmMRnGsMjRPheKzLqGjqVeGH2rb39vYBkRZvq5UU3QDgC4M7VF2xbosh1",
  "key8": "AsF33uLRtEfsUCvJDcnmaz5YE4dsDp6QexyEM1TiKmR6fFoFvssxhn8piGgwts2m7RnB2FteLFaNLXA6zL4rVoX",
  "key9": "3BBcdbjKmt6Z1BSkEFAY83XrKNhpNnFzmUafLRNaHqN462VPnyr2fWC29RJm4e9d5k6oXR2pgyNmVVj9st5ic31G",
  "key10": "2av3v8nEa1sZzVGG3Kur8kT21faHp6s1bgCTJdXX5gZGCy1DC5uSFYcaw6VgWPaDoodWwDhtuWzaUiZ6DwmrsZNJ",
  "key11": "3trqCF4jz5Y2SesZneXgWMGjz7iYihFA8TF5yrzirFhHzJRKffAQqAjbrwCxVdHpRdGUanAaZ31Q2gkbGujse9Eb",
  "key12": "4rKGdcgSkUQjUKUDoLwqYDKFF3vxxqDykfDpon6VcQYhQbjirvN7UZy2ZrMaxP2cHAkuecbq2oLkuuu6T1393JzZ",
  "key13": "3z5LxKLxqyNhVy9eyZYDZsb62HeGCaXbCZRsH8UdMSYfaZHWZ3CJsT83Vnd5C77VDbVXy9QnbZQ2qBCLsWyE8Ed9",
  "key14": "fH3Bceox7qn4yVfJuUEWbxHRX5KdnvxaPx3DsJZD46XZmRzkPNFkPmsBuRLJewoHysqbEfXgEh4sLTZ6Rj6X7y4",
  "key15": "2XneLsJz5tmwPcBNc3VMQtJvz3WY4k1MpVRnqx3SxWFYBrF4Wyh8AU7EMfCa6aAyHBW7mfgqxuDCpjkTkPJWiA2C",
  "key16": "5SMaRQu9UwoVfpgUTF3vskEhvheK3kwQKQW7Q6sA8fneCDieFRrUzmLDWWTtBdW3qRsEQsqno2RK1rx8DXkkGWso",
  "key17": "442eqf5pH9xVDiuHcHypbu8dMnKKahDNX8c5ekokrwhk9gEjvtaqLktuRjWbbpkCyh5onGDVjYsaSSWEttU36EFf",
  "key18": "472PMnfJu6JNpBWQbwLjXw5UjhDSNr8dx2fdD7PrAGPYX8hYUkNq7QR3tZdz7hV3Lpr3WMDXbhzSFY5qY6mEBULY",
  "key19": "55m5oHQao4F3Bxkm2HhFcrXv7Z7vg6UpnH8PkawcTWVFg5Sc13kgYmdcX8vcZAEeFL15jURceSZ7btE1honTpWbo",
  "key20": "3ptNreBzbMP9iaLr6kzGuL3r171CCvKxp2EhpGKZ6Z3Urr4QCw5yC3b1EDPu6HhAB4tQa8baGhQgijueDF2Xocff",
  "key21": "5JYg2fsPPXjGwBxgmxMmTFFb2QcSTpfdXvziEZHdmL1n7VxFYfueCXmD7ZQWDozQQwmawLxNEiALMssgq5TvZzW2",
  "key22": "4xiuSDhgTK9Xdo5aMphKeuciDtxRGskpMkjTntM7RZBfrVZ9NfSzhMXTj26WhiyXFF8omoRjJVi14KXBpYgjDDEw",
  "key23": "2vSBbSYM6HD5W8iPX6EXkBFgSmdYVq47zwtwp7W157g1w1e9gdQ3SZrnubPxoe7kuxPDxzYuKj6b9Stpk2n59Lvr",
  "key24": "5iMp43EBFXr7cyDnz2XZ5sQD4VoZy7VDwsZ83vqanvWmrXWvwWaMViQvJESeWPA6tiRmsbfnbHrNMbgcjkeeX7eV",
  "key25": "2kHGJiMoxppQSoDVhNV6eNu1uB5LNN3zFosX7oYqEQp38xoUuKStzujzHHw9n3pGXeAaeUd5YpA2UcEyz74c5gYy",
  "key26": "4gm73tL5Uhb6N9KjDg7mQaKz5PoM4pzD7j9Zs385igpFQ377mBZQ66diPEKLQuA4Ao94kMzoUUB6NmYbkhU9VBKj",
  "key27": "4H6itPBQMJz7c6E3fvUHteTFsYx4ffPndkDSx6FRpFwPQc9E4dwJU9x5DyPQFicU1SRXanT4C8SnkmbkHMBKStwJ",
  "key28": "5tuEcWPWawwAtsbYSPLhoCZsqvKTvoVkvnN7UujHWt5nex5C4vyb7f1yKpWoetdaMi2zFgH4Kmoh4jhBbeahMb9i",
  "key29": "2S4VTFrfesCudizYw4L1PLQLdnrMMnexoWiMF5gZ1hvyvZB1zQoDSVVxRfebyR9uknCL3HoTYEgzqesUDMDWXn2H",
  "key30": "3sbsKR4KzwzeknxACriiF86BsFsNroKsXUHXxsWa5BoZBXeUTpa8QcYFvWEgb6s3grGiFXEuG9qNV7X7vWQwN5LH",
  "key31": "3Y9yJ1B9Cxv5owCr7papTFcGGjdhVoV3oyddySMn7e3BGgcUq86syN8bPwndHm5Xr69KuiNBnmusPBCEiokoZueA",
  "key32": "3XFcwhcyeDn4zXvYxWVsjmHE68mZS3FHveX1fGdteyXGARG4DZFs5vpASudGw1WPUA7SxnvghzArKKAzad5wCe87",
  "key33": "5UzeSpQ7CpChS4c224ETzHCE7Kzu6RG8g9a7ZJSH3UwsRiqaW2eWLz7JWS6bDieS5cqLXG1UD2QugQNyRBSFkhk4",
  "key34": "3WrQtjRXn1zcsSFvbqJViz7TyBoyKL3H45tvvDpmb2BJ7xnqpRfA23UCybtiXKsQ9HhMqLoYvFKgawMFenAZwrj8",
  "key35": "348a5X5MzvYkGTj7ATc8DCMDYegRpTsLbHcure6TqgHYk1Hy31LN8Y3ghGQC3SRf4bcaGLXucqDeUXPG31CW2yci",
  "key36": "3dwkrJLt3ndNVFYfKVzR2WecSXL13tpUqwUZiT8gcvSKd9vakf3ePJtReiGSsKKEkFt8inNQ1x5iL2ybNwzXSJ2Z",
  "key37": "4dQnqbwTi1FPefPoo3DjzSEpWrftUdFwg4416TzkM2WXVp12KpyxTGYz5dGSTb3rFEUtBu2PwCdTU8buv86PobLx",
  "key38": "5qUaxKDU9VEfMmA3aXpjtG6RBVvTdkc81aPiU1sPhdc78xyPRxDtbvrpcccYHbA4hsuKAcYzb1vYwdxukxrsVynT",
  "key39": "3a2tHyqpyrbHmkLtdjUf1BxEPEkoVtnszpmiy3np9SoJiSAjrGrY5d92T2wt8aJqxGD2T1581oBSecyUcWWPudhg",
  "key40": "D5gqjYML8wrqnQHR8sTUhCvnGnuLVw7VicaLZw6KEL5vAufP2MKgnGXkzmhjjiKZakKRZC4e6aNzTBFe8pJzjbH",
  "key41": "1wDjAFCtLuw9gZQ1ZphgvGeCNaW6z4B2bHCMkfWdzXKMFMwdt16zzYnKmGo4dh8GTKgGJ447tCnfSn2Ta9q87fQ",
  "key42": "4hbrtL1khorqhdE1YWcBni4it36ynv4X2F96DnbNKGDGwFXUhYe5iR1a1t8wb6iDjWeYyw3HbehX6g82AjSWoPeT",
  "key43": "FpnTgEZX8Wea7woTD1NzGNBngV2QJr84ABtKLyg5VpoXx4DVydgRZ54FapHVSsL8G3sw1succH32WkcUPAxn2WW",
  "key44": "7XMf9Uhe2mCZrH8ZCCxQ3fqvizv8mhBWSJebg6C46apQWTa4m1dxHnT5Vj92By941AgD6zeSQjzMaFy1zhBbyLu"
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
