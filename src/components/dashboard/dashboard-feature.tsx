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
    "5KGpBXKe8LprZgDgvj416LYD4LmdzXZsRyaZ8DB2XgQ7Qy7RgLRzetRbXQr46s2DRPKZ3EhYxoNrg2wGHQ4i6JZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgZvD8WBjZfBkRtLPKE4qyKbJUG3S5JL1HN8YWUeo9ycWGqgKTJ2ZSvr4niKy8FhYVKkZ1GUCrFNDRCG7DvaW6G",
  "key1": "d3TYKVTSASFb5gxMd7XSHhbFtwfE3Qi1CfU3nukZj3oVtTT8JWoU5qiRtoaejboSwe9MxPy62PniYjYCLtAggUd",
  "key2": "2DPYia3UYf5VQ7Mtv83pqAqrVJopfBSPLcVDg4dPA2yxJZhjD56kPq7ZKy79DLakQFVeAJ3ujeQtnWNJBwqMS7H3",
  "key3": "5E7Y7wUVjb7mg7FTNckGHMW8KnQFPp2FeJjwYHPTLymd3o2mR6tRwkahq4r4JSikzosfTvGV6gDjCs4pMM4Fxoe1",
  "key4": "3oG18Bibro4neVUgbguYtfN6c3bo7MgUbdg6JUCKFKqYF5JkA3jDgmHMjkuK8CGmp5nTTGAySzW5ZJX7LzdiNCRn",
  "key5": "4LxX9UmmEN7SdHjXzP9GLEW7CQN3uTn64baaWDmVED98kMySjLx6yPbxyECA6YzV3KEkiwDVsZ4TduD7vfD98KhM",
  "key6": "5keNnDbRTjrgAJWZAiUxxrGRo2edxjG5GG8Rqws5BVtzVhfeq962vFPr1ARsPzAaqBY71UFmwCM6ycvzP8XLzNES",
  "key7": "2mYryJdPNBQKMB3UHFT7LHg5gZdDXU6nzfocP51Psi2EfTt5e5SMUvgg6DQoH2kGAngVUiZVuLmMAetQySD4XQNU",
  "key8": "3mn2nhz4iWXiR3Gd2kfmGAvacX8MSn2u8EpcF9zJrhoZmFFz7r4R3sbMFtAw16JJ3babdgTpAzNoAdTTLG3M7mQ2",
  "key9": "vHzp7JUG3ndJVaioB9XwT4jVETGNNtegQTyGbAjwWUxbaXVJ97Emm5DgQkuNGNrCyeCeZkgfHcmzwTUit1oWPgs",
  "key10": "5cu752M93fEEfqsh7m7DYY5vstTkH5UDHzWr2VrDvPNXNydHc9ENXoyq3pqe873z9oX9itPYeMq6oKXCipBmSrm5",
  "key11": "4CKBAeiTyXremfq9drBYgZoS8jsqDWwyktXhPqwnKF8FcJAUpj41WF3yDotwpbihuNbBLsVHBVHYoEsTHSeCjrfD",
  "key12": "5vQQ4wnB44fqddyqfpi2fMQznVH3Dcc18orAmTwo43ESeY68bvhnVFXB3HxW47d9GnQtCiwvuoWUgyBJe5aX3kak",
  "key13": "5x9jEbFsP4ZnQTd3Svntw8SJAtC7VAqxkcWWE6XFKe334Co5YQ1LLJFkYAQQ2ecbHtukDRBPH61vAUTNnp51QGKQ",
  "key14": "224CEmQfCuWt5kvckUHTkmrxtaZKw292vnzckvxP4H4z2WSvMNLwZxttKfRnw3TtJUz2Cp3pEeX8StkwBTSjRU4G",
  "key15": "2EHFWUmtG1q9Y9Yrj9TJrHSVCFVuxdhtcSRaCsj7hvQ41BX1PNX8mRr9MZA2B6XLJvhmKgEVWCJuBiq7GPHC3rWu",
  "key16": "9jGUXXpD56iF6ARREhCwhVrYDCSjgCaXkPyQPwp3ZB8xDZ9Eb8bHjEr5juJgvWQ5Wy6AGGspEXyburaxQpzsCJY",
  "key17": "5jbswu68NMsYUCbbQ8d3j7n9j29ihqszFz4bowXocBhW8mTRHTvbmjrj91636FTnF2jhexxjTeDczdkgQYEzgjDh",
  "key18": "5i6uVDFjY8xVFHn2yNLoaKjJfgLte5GMTpQVuuYJH2cy6gPdFTmUbCLUVjEyRqfEvrbWGRrcBqamBxEvvswG9x8m",
  "key19": "egtPP4cXHDCpdqc1Qqb6LKLL9F8o6Q14a7PNN34CzdfGaW1GnMQdoywofYw8sGuUuPo1MSR3h8ckgVoQxmWcKH7",
  "key20": "4eCrScBGwPFsMGJf29mNWyspvsxTGmRU7sSeLxH7f7U9Ha6V4CaWzrSkWoD3EVVsGnWWVRQKP7fDNUENXiVMdnnr",
  "key21": "Y5FQ7e8o6y52GkvY8X94ZGHtzkWAp976FfPonfYNdegGiE9rVTzRH37e2qTopF3kZfcG6PUv2PPbsUEEwMPk11j",
  "key22": "5K8VfnugwDw2m7Km75ZLR1Z7SfSptKjSMwiLVq4vtfacNC6frfHzAX8bzX6xX66M7eawz72JtNpY8Sikpy3rxTcL",
  "key23": "46raDCvYbQDaYJhLL9JfiEhRTg38e6CnSzmzY2DXLzYfyvfAGiwLTDF3sBsaYgupASzcCABJ6yhdpUvCFHSJDHno",
  "key24": "5XKXSNACyLU9zEPUdQN3S6QoWVHaYtcFjJgPqnu5GCvXr9JQZRBk3JYKKxr9SBwdCXLeXxHLQKKvXWmV1pAZXHP9",
  "key25": "2LwEFvS1N9LWyUK4sho62XiqgqeNrVg1riKMXh2ZNqh9QRxRnjfKaTMDHpM9zQr6MkNhixyrC6JE4XGVUJ8sEzL1",
  "key26": "2R2Vg263Fjye3fpgg1giNLdcBZWm695qiuiEn3JjweF24gbeUBwfVvdPYjxTNEMNRxpoLzHVNV5gyQEkccXrWMvH",
  "key27": "P8zTib3iUKwmpGAWbvEL1ChoNjV2M8Q8pVFnp8c4asop71o6yymAX1CFFnRRv4xYAkqfTTNvcUVqLdai1wad7vB",
  "key28": "5VLe6jzXijnHPGsMabobFwAYPqVxc3ZA5UpGA5MxbUAwcJHE6qhaXRjnC4pDnDRvpEZwRgMmhhhsFukHfz53xySH",
  "key29": "59qzJnRg3P7R6yZtFW8Mg1C6BDo58pwUN1juGHt1JTagi35rHVaDJWSZJiZ86BqwLdwGx6o8y2oZVgbheTFQfyds",
  "key30": "2psYa7kLSj4wWpC4aBzMy8DSsPb7YcBnVAkiNBNefhEupitSFqb8FVy9DE1q28A5Hn6hBZt7HVECLKkv43w9Dn33",
  "key31": "2t419xDqVAmMM78jmMnFXus9U16n1bo6946ighQbKtdU5PsN8571u9Efn3DYJUneR1P2cQRxuRB5Q6LQJ6EEDtru",
  "key32": "3FsDnxAwBydLxTrQJCrPgg55zm3p8RbyCyKQtWsFzFirAPWjzpQoV4G2kpMF9R13hYyhNnwoq7aMxD83iSqtTUir",
  "key33": "2RaMU72DcjHzUkJaXuKdD1LyerbDt4uks9jZhuaNeiKy8gGAVpa4wdQ6ptSzyqvS8qTJ5qT3ZkVJmozMt6xkYkMA",
  "key34": "2ukhY5SP2m23VffkQ1SRLxM6s3ZsKzB1vmBS8aUaQRcCVkwfbpFNc9nKULctneHfnZMVftvN4nSMoHMbnCSpjpZK",
  "key35": "vFCfzgwb3PC5xrWDjcn6GWytAKxp6F8TW1ptzRMcBibzw5kqpWr2CZmsf66oDc8zqesoThk7gzdVqEF4ULA7nAd",
  "key36": "4VojWwmJeoqUjkMfrN4rUrKv56uGf1ph1D5fbt5g6YxBLn6t5euUxVQJVcEULvwBtj8duXixFQh3CqWTb2um3ZV1",
  "key37": "3j5nZdpjUQjGq7z1rSV4xbSWzSc9ho5sT4rkuLsWGh8qu1JQo857VgwCC1dNCBRjj9deX5jRmx72ZpPmPD9NAjGE",
  "key38": "2GiySj2LjVBXv3MEftaebWrwVkX62bj2rJLK3UWurdeLsoy12EZZp3wS8EBq7LWvxUB2xVPiN2K8ZegToKNDUsro",
  "key39": "5Y8zsN3DXztUjr39LnnzKwFQHytMzksueDn6YMwEJgcx4e9Vfpqy96454eom2f1mZMiTHhEjVrkDxvpisgaNrPjY",
  "key40": "KkB55m4xGGRwKL5rCM1Gs9i589JfhdhoVCHFagmXKm1HRV6j5G6russkRyyTuYYJ4N9g7VTsJFMWnNtp7URQTLx",
  "key41": "4UC9WVfpfjXJsPeFHXSUwk3cXkaQyLFRrJU4ExnvfrGt54kQcdSja3fnumvuWxSyEpWFroXMuof3TPegNGQkSq1L",
  "key42": "5ja23Y2keuW17aK2PCLN6QcNkZgcE975jrHUJfgV4JjWfPU7KxrvJh6ZiKdKyy17Ln3VSRHs2YavaEf7AE6fKQkq",
  "key43": "4YSjYFChp24auWR6YK4RPDqC5cL7QqoUUWSraAhs5dtzQkmNS8e1urS4v3oW1uFGKcqZqJG5Gz6NwWCuyp4aLmc6"
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
