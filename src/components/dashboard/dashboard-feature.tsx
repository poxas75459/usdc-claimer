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
    "5oXvZxfJ6fUrKXxVXM9sJkGtCRehncH8g3L4wJDiZAhDsXq94BUtBv3PFXFNG79cpAbSc1y4b3USTxF6HeKreXnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Q62kJ47pHVr53rdTk5RFcVSU5xVh1GTAUez9YaCMzHijnKSTYjno8nPywc89jwEf7W5pfMq7qDcXLzXTiBREdu",
  "key1": "3PVUaoqQtWSUY9HdEfFhieSTbmty9XgGmzkphSBUegk4VQo44JeEN4kQ1uskX6ZaNKKqYERvC8iAZBbe29JMBAS9",
  "key2": "37DB5gwJuYbyC7h98PTHjPzK6afR6k5zJru59v2frqoFAumkJS3GHYz17vFzyYsdsC7FDANpLFs6ndusg4di1LYg",
  "key3": "4goUu9gCVjUqEs8gtJQBsrGVjK79r6LuY4W2e4L4ASafMdxHiVebXBcvwzcWcQd9L4kugoUBukNVCWpoCx6aSSq1",
  "key4": "4jQEqcki9vAWbpsbNbv7y1ibb7FE7mLP9wRHwvbReDfjtVb4GwwXpQM6wuP36P834zEmcpqArhqGrXVu82ABanWU",
  "key5": "3ioCcmVgPwfJuZBh4LFnkpphwsZnhFYxLG2W4QvNLcsz7EgvnJg8EKhkWkKMXwKvNRc7UNgmCn8BuyGCr835psHv",
  "key6": "3xuJyKv814JxJHGFr1zxHfiHUB18vv2VtmyNT1i75ZmEy8i92Kjc4KdK9Z29CsAYj1FqQKe7VAcPFLbAwEpyv6cU",
  "key7": "64FQhENWc61p4qLpMe7LeV1szYzk2TwbVJ91ZsU4Tav5whga6tjhJb11NmMP1VPec7k42DFR3FHXXKRDBWF49GyQ",
  "key8": "ogni47JNf8zx4sVsfTfhSVvSiRkDL7p485XcASoURr3jSioq5fENTpUztkPTdTGm9PEcYFu9v11PEieW1Vy287h",
  "key9": "2A11EMcwyrUpzH8uVnXir1eSQm1LRAJXpRaWcBrksDT7BykY8bdvrEsZTCbTnxZvHwASVrnwKM7h9MpramcV4VWT",
  "key10": "3GdFWhxTTpFVy9TB9jRwfaBgGQ11coh1rVXBTc1eDsqv4QiUrEAtjTsPhNpdrZry8DXDtEm3u5CrUb5RkZHJM12z",
  "key11": "5ohUhFQ9WA54aVFMYCU5hEUo4WDLKLDKQjuSCpG1vRNm34VL4PcAbwsDKqyEmzKgLVhX3B2YWn6GHN5rJ1ZaBVY4",
  "key12": "4RFKJ1WnispQSVpbJiWjnCJf1nFyAdLMd5mYW5hsfE5xubT8Vqyn2RXFSgeyqC5ho2ChzCM2qLjPG2YoEqxcnZzu",
  "key13": "4oJ1dwRAdtsJwHp8i9HF12TqkPQ7Kgv9My8Bw5bHgA5zUAt4tWEFm4ebsStL7YqHriHMcakxSK4jN1F1dH4hNpz8",
  "key14": "2tBDDcCgUdjKdvujw4j3HvtpsNe69GfaqeXV5X7eTLfspdkeWaJknaKGJ9eQMPsrxfrBEF4vdAF3DwyQGV7VDRNU",
  "key15": "3JFybVrrS9EQf651LQtYHbSn4PLAFS1CE5Lb4B8k8zh3AQaLDxvoJtEgRWeTNAtzuwmDP8KQEwUn4yUYvLVaYfv6",
  "key16": "4NYLnFUuyu9DiKbga9SsmbMXvva2P3pRS82AX5WTVUSKwhKsy1Z5CdkTZANCoDMVuRtsVnUWd8uxh2DyTnRJqtWD",
  "key17": "5NXaed4ghtQYoTQ1NZ8rNd3oVvXpgCHWeVrBgNQa3a9pPGaJU8cT9LDQ4NtiAyNudSMGTVbt8FdPieKPTb3gV5ax",
  "key18": "5cZFgdgQfUJGU7JpE7QM4N9Johhy3ge87jnEfhfHuKN3TgziQ1vQQwfci4JNM1zfU4pQs5HrQ6Ks5emHwCN4B8pe",
  "key19": "3CyqNa8oKNurPW9t1mQjHid1Mob5av8WT7tkAcxKPbbGxn2DC7YCLs1bkjWggQ7dzdwMUfvxsz9UnemcoHRg6UzB",
  "key20": "5u5LUpU2gTczWEeanrniDVkQBYHRhXcrc6DQpdEs26ZgD2uBnJWprGAXjp8BfTWa9ZfuG5id1fYADdmBekwUbBCB",
  "key21": "2RxoeHFMKCaJxEYv1Zh6zjnHbrNo8yiKD9JiHoHzEcv1AVzCuostK7Nu6Tcz62a36yWtXckXa5nqeim64wcAYpTF",
  "key22": "5Xof4jL8tapGUtmpQRH64oHBRdhMS2UxANqCj3JMGTwjoEwqVaKUvKnoFgQYsHMCsGZjFoN3BBdzyfJGEZeezawe",
  "key23": "4hHHBGvUv7KYJmfxHQUP3yzcN3GKDaTX7uFdF1PJpVXrTz3nMUzHMCuo9pDY3JPVge8Rh3D8z92oaYMAX5Tkg6VE",
  "key24": "2n67QErjuKuYtmwxCb6gUiTtDTYXoqXo5BKyqjGPWUmptBEQBC4nn7U3MWfCwaLy1uUMXp7pGSrsN9cDuHfRLLdh"
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
