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
    "xRBAm2JouY8zA8DQhKsEc4dGrP6MPiBZi85Qtd27sKHQRauqETmwj1zMiyLvYZitEubgCS8NJKdfxvg5iDE5AvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaWGqEyCbsp6ipsqPbSvmU2uK8Dm34xtQtcgAFyorZiKMCqkx4qjM6Kc6m2Hz3BBQ9CoAsKpra6a8Vfa3rbTJy1",
  "key1": "5Dgsp8dqgtA57er1kF8gWQSBnBEJ6VAygpgnhagrBEaUwSM3z74c8AA9frh2g895qJpMVUJxpdvXa6AxcPRNw7B3",
  "key2": "CfJbHostwTvaZCj7nWgNPQyFiZgtLmP27F1p1ak6rRoxC1jHV3Mt8Qh6ANZaRNiqq7RhZFUrT2bqzWSZMyzUUV2",
  "key3": "ZPDbgmCrr4sX7VXvkExHUvTdCjqVai7tn7MYWPvnnxsNUgs1U3mLisu2tcaSZuir2Gf4wMnHugJNz4q9JxLnMaV",
  "key4": "3PdL3zesmdxq7rvReu8Xc2NkKgDE9XD7JXt17VnqqzdqmJCGHw7SeeAmAWuaLHcTY25ViAAe2VC7Vq3iXSnRNXLY",
  "key5": "3eKwqZkdcuWk3wWUFAPzhPC3QNQC6RN8dS1D5cpSHxyCJhN9eR4P3ZnvzqU5v29C8GsymzitLEfiaPNZ7v5wKjYZ",
  "key6": "2WfdY62QCPPuCSr8GHy8ZfeCB4BMaQETiwtcuUwSSVVKueHjxdXdeiMb8WZrfC3DTACah6GY6rp627yVwHU6SY59",
  "key7": "J3ztsSpKA3A7UBhtCFJ4u3JUpZM7TyFCxWbyXVFj66zz3rbXJi7NrkFE9124SE6QC27XNcjB2SGyKv6ivuVvaBX",
  "key8": "5Nz5Gmo9aLZZg6PNwLmz2J8zSXXPbrkJnCsLy34Py6y7MdVXuu3ap9xMxMPK4MJS2Zyi7vnAiGfLBRh4ArJNosrt",
  "key9": "52nVsTjetrHEj7pL6bhtAPjytQBGND1c7ncibPRddrsH8jPY94NyPdGdYkZe8vZvdsBjaYcQa5G4PhyubQHVoY5T",
  "key10": "2rAEqcx3DKJnhjPEDVAYLM5F8DzdX5Rqc3X9KjpR6q6rbNUtq226fLQVtqPgPSAXy3xmDedtYQaYfR19pNju4Hkg",
  "key11": "2xMTTcxWTEVKD8K1YvZeqTwsEcXFDbQEEU46pQyG1854JzycpghGWNWQGbrcSmnhq72dsbmZH9RGE9CmkRVxnZDs",
  "key12": "2xe2QEZGuMSdQVdnJhog6SzJ9iw9Lnc3pri8cYvYQMHiyobQKMVf9kTRKLx1WNTZ36BRM3ftwwynE4m9Satp4Djj",
  "key13": "5m9z5gxfJgVPFkjr2DUbXVMHVCw9dx9WAi7SVXpDx2zcEqSc5pNRi6zgsJUdtGdHAfZE7CPkajCtUXnimCTnsqRE",
  "key14": "31ZHAFcYT65Xkwm8jHc1JNtBQRMA6PRji5Ra2sNrfEaBarAqR37rcK1nF6dtNidSGzZAM5G785RHkiLnk8sR3Lk8",
  "key15": "2VVpckFtvgEdsvQ3LhRRqXjc8GQZKdGY6zPz3tUA9G6twvLSfsFH6uqZT1LuaSZHYmwzMg2BhdU8NuebLudGQkCV",
  "key16": "3Gvk6f99LdiWi1jPaD3AXSYJ7tzt27ruVkKLT7Q9tngDbGGA7BCYtKu1hKWFv51s3YUMj1FztFA3CiKdRJo92vAG",
  "key17": "2jpwcXQc71bQedra393d5xNsjPfjN7nhG83TYW1QqxNhhXKfPfQeeanTeZuix2uwYTKsj2nUf6KMKNtWH31yKkJC",
  "key18": "61nLDNcZACbyuvQEUfiER7SG2ZJDAKiSeAKurfDvRz5pDENHRbXpkQpfBPW4yiT3YXE69Qi47hYDvsp4gzNLNMkn",
  "key19": "4pKsfWymRyEw8L6SbuGSUEj2DnhttLG96YfcVxLsMXaXSZXbMmFcL8nNTaxZTRSSxYn5XFdcMDf7JGjYsiJrSztf",
  "key20": "4pPoSoZrTYMf2sFHtj874hDjbmKkQD6KdUcSHWAFdXmYK8LUTqgkPb1aY6YknTvGFugeBp3EEL7Wa1kM5Suwqn8N",
  "key21": "8JV7YuyBy4kNSiyNwfpKKzAoGjUn1rW1VbT1mH8BHPLBdsAGZ7FB8uYRRt6rvrXfNuEzUZCqLp2zqaRXrL7ReCw",
  "key22": "WGdGooq8qYzwJpbamUCqdXciEvVpFKWQNU8APxS14Cj8Hcg5GipirEcP2dB7FCUYwRJFQbyM3zoAjt4YAPhxzAu",
  "key23": "q5dim3uAfpXRuv7CXcqaxkgw3NQSr1v3yYCxZMPMpZiAGXA9GbFfAUSz7MZXF7Pe44vpV264Va9z3FEBKn9qHs9",
  "key24": "4jBrWRb633g2AN5zs93ryEMyAdKNpmE12QjueqXhVL95xXsHzpFcfedsrhsUXHuqGXAormfgvok1cpeYAhbcLFye",
  "key25": "3DHVMoykNCdonbxsf51EbvVyxdZMErCxzxxWDa2YBbPWdgmrBMYo7sFNGteD9SzrAky2tNuqx1s2UgPXEMpoBxHB",
  "key26": "3BSDbYkNp1EuwJW5PWA23e8ja3jK2exoXKSwpzh2aJ5aNXHH3D7LLcQL5MjN135h7qv5R5PorJqi1TP3QTKkyzxS",
  "key27": "5AopnfMEHM6LHtDbwDxPCXT2oAgRdbho8ZqEPSEP2RdmdykZk1ixKZ1vM23uen78CTt46hdotTNMi6TFSz71iNRH",
  "key28": "2ovFTo66rDMokqERQ7kdrn9WrgEWghTA82fiCc3MQ9VDNqAsAMKFDWxYKN16nVFPDoBz6xZBTuJjGeEwoa8yC2MK",
  "key29": "4qA1kEcgpDQdm2SzhLTYFjd38cXrrddnKbP9rSfb75VcXRs4KDN9NfpZbLbuFbRauKmww5p13uULNpcC8nFRjtxs",
  "key30": "35U18kh36qyWYGQuwSuHVthGKD36xpmNoAYfkEt7Axd5ZU77mdFdfRVbLRQnPjsXqDJ284YdZhrM1WFBFyKMANUs",
  "key31": "3xBQrBm4j14q2ScqZykrMouJsjzYcszjFsH9xLNoEwptjTHAXmW2a2jVMxb2NxfKi8wHuNbmYFyBw4k1CTi3FyDN",
  "key32": "29zGoiw6zwD9n9B85HVDddcpg3bAcpr1m8nckfvsbWc8Nieky9SY7FRFWXfqfk7rwoE7SZyAwLzw4VRzdSMAonKX"
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
