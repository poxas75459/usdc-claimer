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
    "5qA7tCVeyEgwhjpZ4zBkMeiN25jDfds7ZLk2nd28Ncm61yj3z4wwkEsVR5xLMLhEDTz3CbXKqWV1K1ia8PHHZ1of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBpvcai8eXgJ5PWwF92CnfxNhhuQpiMKAMUNs6c9KDosUkFo9HDcxRsTF3bhVunwZXuf6QLFpU9SpaFbP913rW3",
  "key1": "3RTnNdidakxvX7Lq54CZeh84q3VY8yNKy2ja5vPW9ZkijGMnyB9qgCbv5Sf2tcAQnLFqhqUWpYmULrn29azTyrQA",
  "key2": "ec3V8s3y2waWJVuWCbFVUwdsC76kGehzDw1ZSpV8gxTqpD5n2ch38jdxgWkCc566yXoLBz2rEibujcYsEUPJymL",
  "key3": "3ViAeaCAXiAVBLJucdM41Qps46CepP36x5bNZqZEQ4RLgpoMCLWQRo9NwVZr4iK5Hk9UFu4B6DzKEaSdykbaFdb3",
  "key4": "2hsCH1UfsBAVSJGwTRWCBmthomAvqrMq45iDE7kHWaZHCBugTUEQwGxe9wdTRCQQHtt7E1yeZwsVYdtqCH4W1SkQ",
  "key5": "5a5MjjV8HuCr52HUECCCFje6fRrs9jhuHkp1iYBgbZY4eQrR1LFu4SpCEpvnRRj1LAxzcji2YPqtvoXuumB5smxV",
  "key6": "3dgUbiTGpP5VkJHWjUjgNDuRtitj4ZKVp8BHJUJDJ8fN5tMSoo9ydiqMAJWUf4BfS8siHLebWmJQHRWnrTppbdis",
  "key7": "5vaBiSZwpKVsNn6VpVVS39a77thzThVyDusF3xHP4N3TjqWwXikFNQCooBBZ9oF1KnbVVvaFEpvwzkBoGq5y2rg8",
  "key8": "5iMYyoX6T1GYmLBJBZ3FpYg2pF8tLWhSePLTKAuSTPENtLvmiTdVzNm2ViL6dk9ut5FBmbHqXaCtUXv5VKcPNtkx",
  "key9": "5JicfV2ViPCdT31nBW6LFhSzvBbMfUc25knEFrkQNoLLf5ug9Z5SsEPtyfEcnp8zpMfSkrBbLaQs2SQNESAkjUVS",
  "key10": "3iB3gvAJkwyLHVHDnrJj9SZjhkpiVdiCwa9FkrHX1nYhjsa9GfotztVW1QjPUZqCMP4s6VGcVKLSQP8xF45ihP8w",
  "key11": "3esPyKXWrsMNMFgjJz57jbZ3GnWsgvfTkvu4PFKmJQqt4AxAtBsNsVSYimtfR3WnX1a3FaErmB3F2oa2NHSrYGoy",
  "key12": "5WACM4LdcW9kzxgutgYWjrB3Rj6VAJy6PLGNb4ffoYo4y6EvmNL1QNQfMvsgLyLKCnFztotNgUpWffhNRZYW8671",
  "key13": "APq4fi2mHEymAwDUtTJi6nz74TSkmVD5cjryKP1b6fQyBAkhDU4KozyuovjPRFoJSh8vbgd7arNsE7ZMPrviQ5Q",
  "key14": "2RkvktqnPmTtEsScbBYdKWKH1UxUQkkvyuasZCmWezTsTShw5DRJHMkFkmQiB5YHwNgjPTSSVuRspe5fM7L6uapo",
  "key15": "KX13rxjtB2o3hxeDu8T5jYD5va3XHGXcLjgXNEb3fQkU7rPzGKAJvutqcheNjsnpj3o73THSdMa95SrpEg96zAE",
  "key16": "3Le1nHZS18rjFHgt8UsL5GU2Zdg8X7m1dddX378TdRshHDk7eoHU26YYy66GcFtuDmuKPSa6FMfSYdJQTwyQz61",
  "key17": "4g3pv42zga1v7MiLcsvRVYHDxyKaD7MYwrEuZP3hTWLV8PqsQixpT1F211pqVamoV37BAdefqD3zqMuTJg8hgVvr",
  "key18": "27Qw6wAJ7YU69W8aUESGHvKFoQnheBVuhFxnbU2ZqWJbiiRdtWHbNr3DhKWxYMuxxoS66v7S3Kg1N9SJDJ99X9k7",
  "key19": "3hdKt9ZviyTjzosH4rAVv4VL3PmoDZzm4cNznnmUjLpQQfumcvT4ndmrddrdaYZXrq3fP46UJTEvuw9yadicFB8i",
  "key20": "5uSCHJwoLFRWpuCDa5m7ZnAuG6L4EAP3mYrsYYfMtK23aAmUbpdAgUHGtYmENNdxMCzHGuNKjenji896Z2aqmP4V",
  "key21": "5VBBqiYbgW4ymyFbxmSCmU5E9CZUak18ytVMCaRfj4TZW476BE8Lwm8KSMhJpkJp6gyJFtkCxD1Ny7VyVHgSgCjK",
  "key22": "3n9PNTjbP42NrumLrS4RbMjVt1ne2Z9qxjDPs1BtCNmEapymYuXvwpjVBAc4PDeQRXMFoAR1eCqN2xzm1dmHUjRY",
  "key23": "3nG1VvBYXZ29ueSDmGhDwPwwQwbbn1y7E6F1fxUXSoZWNiMBHTNEiEjvmqQ5PKrnVyLbXVdTDcZL8xSt1uGoRacA",
  "key24": "38BsrR6rLJ2EKDfD8WZ7KZre7JYtTzWyMAB3X6ZXihrQemGaQVpgUgEuepAnUtoWhgXTD8Yj7yKSLWJ9dQgV6pWF",
  "key25": "3VyAZAg2mUKddjEGT4wHWuwPuYuDgfNbay8dYnPnPbrUjxk8AuiQf52gQ7vF2XYtPVBQtVSzxSgbNNqiHcmgMpcU",
  "key26": "2Aowj9tRJj35dSUwDz3ZdeYz35JN869A77CWkAC3LiMPkftqQ14HLSxYJVP3Rqe6g28X7SQxoNyHLuJvsRi9GaRP",
  "key27": "w6RktNG9xy3g2G2Nr9QFMRb7Fejrz9xHvsawTRTu2PRdpFCC77PFAbraRYpHTvE7CVu38utHTiLpnnyoDGEUGt5",
  "key28": "aaFwtonyuDtKKe7gtz4Nc2hLdu1FktG2ABVWir8gr6dRiwzCLF1Qc4wJrkVpu38r7mnMA4nqF4QSogoKLtKktBg",
  "key29": "3kKVKpkoPEb87mCj4zk4X7aPbPoSqt8NzgEjLSkLNQzyj8QgCLMVW44nQE7LggwGSAfDqce1bvX8CwkbSdPkdKAZ",
  "key30": "2fR5pT4wswWGjsuwM33a2CgEtL7vT789MDvuGK31EX6cN4EY3cC7AxLU8dgbj3oNczPgNFTjZ2SJYNsDWtf71GRN",
  "key31": "3TzPrVFF2mpEMGoy3DwAjjcArSeaLqopFCmuZYSScJfcGRFmKi8dhjBBh7gycstR24F4JEtubHcf7qcUUrkPyRu7",
  "key32": "FUNdfBWEhr4S4RcMLhjHbGjJWFzZFosQNnh6UjXqrGFCcPayhHzFVhvhFHEKQNv1Kqv1S8dpdTqDPTJDVeXLcgG",
  "key33": "PBijYwBqFbPgQ8zAtpqYXFnsxPueavqD5qX9cboMjwUrovGF3rZkwm5pTgEn3s8RfdtRdyM624Sn2KfSz4LscUK",
  "key34": "3D6oMhVzHQQ5xoJJbt1VH2KFDNuF2r45Eu6mreiZb1g9mGVSPVkJANpRKGhvyV1EGFEWUTj9KTgBfVwrMpi3Me95",
  "key35": "3rgPHbiYHJE83tAGt7GDauMioX8sUekUj596pATsbGqCe4vr5gqritNBHWmuRYjk2CYKqNhkz8P1J1iPUxm8uEVt",
  "key36": "3XAVx2Jtj1FXFwWzkVUd5gQLTZ7yKydtqS7mYT7aPPsvM4nqjVQHFnFGJvKN2TU6fwkgzk1vwvfhHbtQiT7Xs9pT",
  "key37": "jfFCufLTxQJocJYXr3ADJoZPBgSvSexkfmJ2nPo8gCXNc278umkF9br7shL6mEaFdubjpb6o8jUg55Rxxmo8zom"
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
