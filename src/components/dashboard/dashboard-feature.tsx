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
    "4mJiPPYnVzR1u1L2exsqDc3ib32uRwhMc8h6bEwWxYm6HTfioXpCxi5KCjGmBUnDuQp9d1P3hkfygjeF9agyDzNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62NJk6pFJMefbK5x4YfgNxiCfoLgNKe5Lbk6eSwLdAhtDvXyPrXewGkwNE9dznyMYGZd7yMY721uuFSMe1DE2ZxE",
  "key1": "52hCdLpDjc2nqM8i1c9FkBu7WRMSycadhagHSaE1SWw3X9rtnvzv2UsC94U82HHzug6hHPwEoU1NxVY64kmnnjsM",
  "key2": "5RUTLscZipQwR2hXLXTi98vjjSuc19QZt4FxswWn8cFGssuTo3omsG9PsEAaJ2YG7fXim3CxdzdTH2Va4UfWHuaq",
  "key3": "3RgNhiF7tCJm3MiAQLpDHQiatZNU2Dpo6bohkUEAS8YNAdxtm8qNrywcFdm3ugjsCiQfeay2d1ro55WTgiHvMA2Z",
  "key4": "4hZJz44MrkpX5AuyyWw1FLUAXj7v2iDRYgLz39XuypwkDVqJ9uAtp7Vw9z23t4ZkDEYMBomTRYNosWbxorNn6Mhf",
  "key5": "5j31FTWmVpV6VqFhF5zQMomUFgCKfRMGuaKCiptVvFLXmZwyFricNyvtKXRRMEyS68pxUdYN5cUCpkmrR5zBSfjM",
  "key6": "2pvxrb1R2W6ZaLqy6YnTHRJ9VV9smT4Jdyq98DXJJKffkrok9vGo4dDXGviBL6cE61yJ6MTP7jbqTRsALUtNkEeE",
  "key7": "2RXmdKqPihCkaPUeUakcsmaKD9fV3MTdLzKPouyQuLe8MiQHpcndYyuHeg8XR6Jaz5KyA495yoBgNzgRa5cZ6YeU",
  "key8": "5sPy9Gzns2ejAPkoTthtcuNYcvd1Bx2YkCv1j3CKgn8fyhVXuWpyG1zWZNfTf2wWixKtnKDnZDd1mZeragL1Zjmm",
  "key9": "56fCXrxymRPxzyzVzUhipuYh2664njH364gY6qY7GDoxd5cwXiSCdX3mxi1UqMsXbpD8c6VNVxHFeMWGE6WULdxk",
  "key10": "4eT5jgG8AHqwVHJsDDqbCbjLbpcgJn5TiNMrq4Aqi84appgfVscMf6kK6hbwyXDJfvxXcwYTqQLoRntbcMPc7BrU",
  "key11": "2ZruzftWobjFhtdFjP3cSYhCgy6SUmSVNej1qCSwAP17eLP2dsG6RvgT2sKy4ghSeyi6pP3S3KcU8WseMvDLfLgW",
  "key12": "4wNGMXsC79Q1FtaDRGjxJL7iKmWTKdFjxaw4bSAsWmUaay5Tf1brMztWJynxr7uaBowGch3n9wwcqj2quLGQd96k",
  "key13": "4qWPtbZNoPA84kvQTitEWpLcnNqcBXJF7n4KvQCEZX6827UkZoB4i6HaERm4HHNrg3dKnczQmg1kmifL5t2dkrcj",
  "key14": "4oZ7jzZGZWG9cL4AjxRMnjmstbYrDJLyWHpi8vcSpU1Ey2Gee3zkgFUohvWxpTGHkgpqFf3CWj3uCAW6GmUcQmZN",
  "key15": "sNx9fHaGsswFrbaaTshUVB1xuHtb5mQZVCmhDuDxGjyhKyWumXEdQSbdg8UdUMeCpC1Gx3xfiidnPFQ4cBarS6F",
  "key16": "5JK6vdYkdiVMBjXZLQeRZKaX3YUb96DQWLx7AfX3VM1FSe6j4FZEe1pi8bS1BymBsZtgd7LBLXm76AKjZSkT7wBb",
  "key17": "4r3jT4LiqCT61FFrc3e1ZsMkR2X5cMUQDxNLUkyfEK12ubcbk4NagpJwahf3WxK9hRWBK4cWJkVQxJFhuKLKcak3",
  "key18": "2SDCNzw9xdh2sw3FwKw3E1xsFN8NrRFdsyARG9vSkPnA4ynprPyaSaJTrrgDn5aqnkka8cP6HyrBzPz2TZx3LoEW",
  "key19": "45WAV5GeM7GxUeD377t8UfRqRjVm1exsPGDDRjwdbbVGaRwkEauYs6Roruojib7RkLF6EbUhe534pxWVFnLgeCLv",
  "key20": "5gACgLWQ9Ufhyotg2CosuVaxnE2H54ZXnd5DgFR8JSLmNjdYSHA46Uv1LvRgqEcn4nzFP1xXNgXFuR2F4xr1hLZs",
  "key21": "4uZu7Ddh8buZajCW7uLQk6DSo1vet77K1hrApfLDJSHNEZevXo8dUBDkWrAn4VVa1yqNJ4touraQqyX5n49c4MVE",
  "key22": "5PFbQNkTYiuXRhTLLcN4ncudEAPyDMFsjCNLR1gEwdciXFHJcFTtCnpsaoGuW7mbQmqTCh7j2aDaBpYpDnggx2fm",
  "key23": "DsGEb2dSg9M17nfjXBe1dHtNjo24eC28ZKNL2R2x33X4qm2THpR4sixyESSkfeLTkJnDN3co8hK7d9kiqBCeLVo",
  "key24": "5ZkmiVTSeAkzveF3yG2FDFZLkf5aWkwWSsagvzzKhXXKMVWEv4ncZMtt97SNJW2YyuK31j6G9uqZXJHZeZbxSqqR",
  "key25": "4R3uXqSdxNDfH1D3Dy3ca6vXpfAyeEdVgm8mNPeBXATLckivnFQqdkxjpoVUwaPQuTyjHRYTPuUGiaA152ivNTHp",
  "key26": "2EWSAZCbo3EujaRGqbt9P2DDMsUcVNJb3eZ5yZDAsW96EiF3zyzNbP19M2fgVAUJwgvS2bSYYnS93VHPT3R33A36",
  "key27": "v26bhPSvzszfuxxNMjPyPT8a7qvCbQbcNw7WChxtb4G5uoohStT576RQ3LbaF7iCqjGNPixqjZWwyvGT6gFMhri",
  "key28": "3TsvzY9Ds7fc5uKrkLFeurCmxJgfriivKnm2hdD2ZQXPuWXcxRMVm5qALaNGREsSrgy3Ld9K3ixzNrNyxE9fvD3K",
  "key29": "41Vz1zsryDmoKRZZ9h84KstgrzF4mmHv639CQP2danjsnC1jgHZStWPhfkvEkY4gnrnpiEemFYK9kXnC48D2evhw",
  "key30": "3hqooBBntdHzfitd3APZghkSEU9cSJq8JW1iyRKxAQc5iQJ2TnmXMSybZEP9M6y8Y67GNfm9qwdd11FjBYuQhsYR",
  "key31": "4WGkT7oQcZFztmgpTdcwjdFZe4Mwy58tEw18Qx6kwwtifVMD8XHSztSEXEDHnvaggGywjWCeMee3FFVqgVPkPRdN",
  "key32": "5Pz7CzS9dc3ZkDF2F2WxLRLm9d6FVBQV1hVPFsWt5jQvLDQ8cJTLKweqT4idVEkRxji9FsQkfxfEwSsxGk8yn3XU",
  "key33": "2aeWrf7kxmBkSmQ9HEQd7qS9mTpxYC4X7q2r1EaEx4HBagjDAck6X9p3uevvZGeRAcxTX1SzbZEkmfpSpJFc3iPZ",
  "key34": "24GYv9RwoRLKpUxy5A8ga2YUCbvSNSsHMzPLD6fav2T1FbSsjx8cLEvhvU4Y62y4XM1FDJy2uPhT8ySGKKDpxPwn",
  "key35": "AHJ1EWPpwJooc7tYZmmVjYCZts1hY3wEntNAjgyQCPSpT8bu9PK7dGqLPYyzpEVBREssnpejVEXzZQ8sAuaWnFB",
  "key36": "5moMLWqYfuVKq79uAXCpcnkDAxSNE9QyMSVXXUCPP6WHGesakvpNCd2BDsw3KVzeBeWwgNEDwiMa2sGnb4MuQQjX",
  "key37": "3RBoCy9ZPPhZ9sNecPKKuthpSQhJqEKQeNdShNg4iNvaTZpapftjAYq2oK2jfrRcB9B6f5yASMGAhwoHT5F6xVPf",
  "key38": "3MF56DCSy3AL8RPLn6Tby7PVegQqfTvqoJsEsPMdPNoZmFj761rw8Rxi5ZxzWjSjnzvhY3ZfD3L8p3GXEdH3iu9M",
  "key39": "2m7f5aABEKoTK7zxqnQEJubUbNs7hxzND1T3SBREF9YkbkZMjphDSys7CKfMQTtDDHmqsqBfarELSFzKxBoCJkKz",
  "key40": "3mkTz6Qeu8tXmkjHi6KNwsqTT4ENdQK57NgTuZZZdboHnUQMroMUVkAxmtnFeZyFnGSXhE7bo5qwqnYBEhScoLTd",
  "key41": "RPGPA8nAk2AAAXFbr8FxL62fiA4fCJ5unyS6FD9WPEn1XvDjCZq7HHjx2c5eCkKo37Lahcb7PtNFLPb8pjq3WRh",
  "key42": "2gg64X9SVd4oKj22o2o5XVy4aHZZ9vQ7T3Y55qBnnPf7dUbzXdbb7JkLnQxFqFeqzxVeT2Z55YBSVBftd3tGqA2m",
  "key43": "3s3JX4BMPLjgkxrnkvRwZCKTw1LDEKLaxbKv8MUJkRWbz4H2ysYGymvVx2UAGu1Sx9Yd6aounfjaNuPXMLi7pxQS",
  "key44": "2RnV6yecZU29HysbHFXuja6sRuGLwmuareKvFPqtRp27JidbFfDUp1vTPC1aqwJ7ywNfTi4Azs1kumCAYKWMQ2KJ",
  "key45": "WumT45zRTnrKGHPK9AAiZdafLzTmZH3PoiXxkNS8rBdNXpnb94VoZ2uxGGRJ4tb1ETfHbipMSZMioor2ZLyuPdf",
  "key46": "5rFwHeSge9FHjUXxmoUL9XDRKJChrrJV4WwTavqq3ms1C69mKKwMUU5UEibs8Umw1S2EBJAsSn58LGhjjtvgMX5u",
  "key47": "3eyfN4vb5wkF2E9CFWSLfSoiLUYu5zQn8oP6QLjJFbwtTbCAwc3kNMfTNScyLxZZu5iZjh3pqzeYdK4ajp1vPp7X"
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
