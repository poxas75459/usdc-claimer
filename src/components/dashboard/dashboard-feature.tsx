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
    "4MzA1y7478h2kdL9EZNi3ndZdamiJQCgANtbe11wfC9eUUwbBagu9yGy81X3cUhCm157JyPG7y3TEy6mYGJqnYp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDjYkUKX8K5P2egQD4BgmL3EwWm4gNRt4ZXk4vVfiyyvuEBXJABM1a2pPywBGieo7tctB1gXeQXggEK97gkKJND",
  "key1": "3jB9YVtTSzrnFiEuv3QWuLHEDSg71TA9qeqTakb1j8JjBA67HbxbKrvjYg3i5QGBodN1bWqdr4g5qLettuJ7pvEH",
  "key2": "2zexzx8QQ6PFgHAf4X8DtfHvzHvbdTvKgh8Qciy6StBuPXhnweopT1i9a2wD22tjBxH3B2w3DrDsTYrhYbu5pU25",
  "key3": "9USLUmUTYJVDHewMnCnjELfEdjNGWxyJUxkRGgSwBaZeEfynMkQRRqxqQNSYwQrxHujkk3Nzr3RpuxH5pMMARS4",
  "key4": "4SQcwvgmsXb8xYgevuNz6nEuQWrtQ9F3FFpHaGgJrma1fwg6RAgDrX6G6RpqxnEMfSEEwNmDPh1dpSrn412myEF7",
  "key5": "25qq8KpiQpKNVHnNS5VzE8VgDCDwTw3TS5d9N7BKxPhzayfzzHVkpGxrcSb6cwP22aGfQUq2pm4gKcxsRXqCrNoG",
  "key6": "4hxMrZNB1NQEiR5EbEWX9fhxym33LeXsPvhuHT6jVx4h2mQeLvg59uhPVC6xH4d8zEEbufpZyVNJ7fJHiKGyQ4rT",
  "key7": "3AK9kesK28zQjV9zKmMhU8TV7h7su9s51aft5LH3KtVj7J5rXAYRsFegJ7av3LhsTNVZVAUhZwZYwyyvTkW8aLb4",
  "key8": "2WrMfnfwyTteDBixvKaKuZM9J88BgR5E63QyVXD5qGDH78vYAnBCcA3jyurC77AfmVwTAgKXVdo4eNwpWF8Swxjx",
  "key9": "2kemB1p7HAhVSsj1aooCxzxaysH4Z5oVRyiT5SzT4bruvEzt8vSKsi5f2TMD7g6LazqowyEjhem246UjJpVEiNc4",
  "key10": "4LHK41daQLgb9TyHRYnZtR8XAjL5bKjetWngmaiKgnnJYMjqh13WoEgtFiHAcGKC6hSoUrKm5LVcNyUNAjNiy7U6",
  "key11": "4jtwzgvcrrvZ7cUcLkLMDUbnTXKYF9Pn52Kzk6GxYphGNdpJQ1Nhc3o1Gf6X7y9MMonyEoXTogqriFKDgCaKibJ6",
  "key12": "5tTU9TPdMipLKJ5uJqPUDF92GYfsn2peysMzxDer4ZRP2h1pSe25mB7KuptLRG1axBuV4P3uzfcG1TYt1KTnjokp",
  "key13": "5qvLe4p3BxuHU813ZdjnkTZteuFA75mGioT55ke6WE3Ya3a9zYoAyJZbGp35vNAaqAL9Pd5ytsgYwUv7PmkyVbsk",
  "key14": "2AZYuiGRvmH3k8JNBiiBCLQu5hoGddykS8tzqV9Q5kx3Dkrifcdb8YREtxJuUN3wDBjLVddJUf3nxbXQVYppdokX",
  "key15": "a6jXMgD6LKAe9SqUkVpvcWihMBgAvMeVYsYFPh4sGhYUDqim9teG16Xd9KBZraw7Evs49HTywJPC2UQGhM7cQhL",
  "key16": "4PsRPhjHv1FkMjPgdQqQ2HPABkwbswyVptV7ewaM2nN1wQyRBbszt1cYthqgaq9A9aMqB18fg44sHtxmsFx2UnnG",
  "key17": "5ZLzpv9Hgcqz7dimS4x2ym4FToMvJXXVBzm54nFF8Z7hNUDByb7qsAJUU2mySwgH52fyLD4RoNnCDg8iUHWjJzzt",
  "key18": "4GtkCSk16JdYVK83NHdRzm8KEumTH17ixQuoxrWfmUaog46wNriCAGNgYbyjy3F6GTU4PsNnjziJ6o4CUNNZCJ2M",
  "key19": "5LMKLpGcH6k7BSVNnkiGiBP7p9N2qR1FWnFWr4D6WSBwc2Mn7AycdvPuXYJDDvNWvpu2A6QxinFe3Kad9YSyXJkB",
  "key20": "3Yp1sNwCft7FjABnGqFs1ppbh9GMsywPaVLPE1D6af1UJQUndHF778chciCTE1iyq6KNngWNs4X5jS8LDwRRrrbj",
  "key21": "FMxfeeW59PKik2UX53ZqAH2QZ9noR5aeACZAZ97piNGexfeSrAtR2zUU73w4jfEB6jtijF354DYPQGWKL29NGkU",
  "key22": "3ZeAAHGpr6K33gPe2jNAPcqTC7fLQ7PKwiYwq8y4sSuVExXu4Tff7hm7aefRbjixdteeMfGgLBzoGW8KFpeX5dKr",
  "key23": "c2QjHqxU9jdREELgx4oM11BAzDH4g7jBcyvREhJyFcMCrHyUDaq5iwH1G2WNs4BpzVgwaHbSZgutgrmNDsG5BoV",
  "key24": "KpN8nsCoBNYe27XkyWVDHQiFfWyZN3FW1EeioTJZ5QroH6DsAt8PPDLPT4eoqxLujRk8J8DEwxY5qbjNMy24eo1",
  "key25": "2v5574S3cjDTPMESeKNoF8duXRqVESpma3BcAmxKe3XFHa1E8XFdrPNTW5offnPG4q1xruDPecbJAXYrLCWVwS7f",
  "key26": "PmoH5LxCsDjYD3ACN69uncjAnV4TbKzWKgdatXKtVLFHHpHkZ4iGMoMdsgRhTyAHkHeKCsk27T8FmtVnmyBpjbj",
  "key27": "4KDzApcZh976rQCcxTkpWYrspUGCmtCnBD67Xz2t9aBE3pRtENrpaybMLkL2FR3RoMTk4ZVo7eewVz8J9Bd7vMv4",
  "key28": "3UyQAczLDmVG6zoT88E3qK9ETgtDiNwp5c5NocmPwckALMJA4ZjL6JcyvrKY4Hb8xwqKhq3LtHhUHKvCwm4kBVtY",
  "key29": "5czvURADP9SFwMCU2cmCD8CPSPWhdTfoFMHnLrPCePziFV4L6xrBqhhpBi4qYh2bXmVvwVVCXuYwdugrTgNN3SxK",
  "key30": "3CPdpivjGDXrFntHVeMGRHjkVyY4ziRknbeSYW94p7qXUfRVUU164RTuJBGrr5kyUnaJTonVuPKpLcUDEqAitMA8",
  "key31": "3PiW4tC1NJbiZra3XnewSPFh8wgFnKEDrNTBj8puB1EvLunXbvAXPr8h7Z7XT35ka7vtTJcZJEThUS7TiSaFiSyu",
  "key32": "3eGuV81PtYPAzy8nEAVeUTHYDQjubC9skyEu2Gj8TELD4zhAAjP1wvwj39UdxpVYTutbnaospRzC1Gt2Gu7kb2PB",
  "key33": "2ayeFstRMsaRehbyFkxGTKiCpkkBCXdyaoA3skJirs936jpJVr69VeGyYsES9hEYpNECTRD96GCw89wnrDxGDsP5",
  "key34": "37eqgZ1HyNwztd5WQwLXbxMYEbqGyuMBkFPKjqX4ayqVok5cpZFom9Ui8TQC2L34Jnr4hA3btGE8TSYZVY4CuQgx",
  "key35": "QSnmnwJVBfJdKaQhU6M2dPGedvu6BMD7w4AGqjcwaQ4wq4hLrUkxWpGpPKrguiJpdm5j7gFvf4k4qhRzAg9k7r3",
  "key36": "3GeykrSaknsEoGfJkKgWmiXt5kXQDeeaehFyRaR8cjpuRzLFjUbE8r1duw4HBGfzFh7579ogEhXyij6FG1Fc56RY",
  "key37": "56V9wAMchTLEgDez2iSZhLeaT5fjn1PoH35Ka7TxgEF9dYEkARkjXEXWXhx5ucVYA83GVuVXSR5CFUyBQhWN8QHE",
  "key38": "4utPH56b19LcmHZVi4NgLbDiAWWmEXfLw3ASErZjEPP5ZFpWQx1f7HBP9k7JowMQF9FWTypG4hSH1S5LjfZMRUrb",
  "key39": "5JrFzEdP9J1KQk2QDpn4pB35TD1UkQbwh1BAcwkCLdrEFeq7C1oyQ4Js1TF1kBdoekqjGwfkVzRtVv9jYMJrGYsS",
  "key40": "4bs1sHiNDbUx5oCB6kvuF7w3VUnTU4zyS3bkgmsijYV1fQWHav1Wb6FpdTcMbeHFLLQddtoyHXygmh5ubvArZaBw",
  "key41": "27gVYcCCTxyLpn5ddodVA9WRBPUHiLsgHVu1ybqYKWeaRx17mr68Ct7RjnEiPNR5Cn1v3VW8YcmRpN6jFC6ocEXr",
  "key42": "4vYBpsKwfAXGwiAamC9iGpSYTM7bdKp8Q9Z6cu5v1VLha8inTRjK5EmDRg5tNntqYwa1MKM44dwDB6VrEt2VJ5CD"
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
