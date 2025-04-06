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
    "5gsD4VVZdZhtiWbkprNaUbYyDAkZVpZT35dgAZnVM94dFhgorDUmkJ61FWqie2fgLmmyUZCoLUudLvXUp2r2RXX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjpKfiAQQQesepFSD2PxaUcTv7FRCvQcik8r4h8Dq7eA8GS21RjuDox2G6xJz9168kLec3mTSHWj3aZYDkSsfRF",
  "key1": "3PagYtHRXxBbiLLtmw7Gdjsqq52JqL4wYs22vjUFUj6V2RiC6zfDaQKVuT3h4u7JDK4mY48Br45P1wgdcnyWfTwD",
  "key2": "5xrWNm5YeadpWf9bfQRZN79YwFrBXz35FiMRRcYxgmfqFQGCCU9AJATxrCnPvC8fEPYh7bypzbdFEQD97vy8hEjV",
  "key3": "3Te5tBsZKQ7awvy4WCoP1Htx46q9fDKeio1YbsQ3xbFe6G7bBEPG6XKEqWddTQi8KqeAFoN41VGoRNS3foEXK4aK",
  "key4": "3sCvrUNhwfof3mXXXCkwJi3g1Y6LY83mciCrPzww6WMzsnx5dJ9piAEfd9KaLQK4Qr5k7NVP5Fn19Vk4zGM2ybt7",
  "key5": "t3YiKsoGxZaiAWaRHizdrGzH1qVjCPawCEwf2m9c5BpxeKn7zEFssZVWabmjR2p27c2hsY19FdWKemZBWjX7Pfv",
  "key6": "rUiY36rGiWeRa32xHKNtYhHrWk1TGdCNVWfPMs682SHrf8VeRjPcJTNSmprffNBzUSSTZL1mRqyReXUbxWYJAi5",
  "key7": "4appWyWr9mHSBkbcFqpnUUJdpVoRY9NHBpn3opKbkrPHBfoZgQFBj2AbwL5BouWSc7QKYpFsJ5m5FasBpmQrnFbX",
  "key8": "2a1LFWPZhjWYwxVisG9Ufu4J9mGzg7zVoie4Eg5bmL5AsDaS9LQ4Df6Ft7FKq3za8wxUxYJpa8u1pxyQFgHXAHAt",
  "key9": "rWWPWkz6HEALqLNBAr2WXrNesnzUCcPATKvcGJfXePe5Cibd5La2go1JKA2r9XWjCgQRMG9LQVeFiRRzM2xURfi",
  "key10": "5i88J97rSMbvFkhPAjkm3JgHoh6KVo1SdqPdACnjq1A5M1KceH5sFFpYh2B98RoJzqHbdYx3F8frx3n6cngAi6a7",
  "key11": "4Q4N1icx4McmBPcnnqwSerqEemxQHeNFV8NGC57vPuPhgjVzqwagakmiiVAgxACJED6jywFe71zKeCPWRn6CAwCq",
  "key12": "5VFrRc4hm636UuEUbA2zVwqShaSiTxid9HPxQoZkL5ejF7Nv5HWH8TULpCeBeBSjhs3nxvJPJoa182TeKRfRXY4L",
  "key13": "4nih4FZpGq5UHgTit25q4t8gPQPmJ3pwP1BqjT29PDjJaLidsMu1Rw49g6LMpZXAPcTmXW3mXXuszsvhfMheFXbR",
  "key14": "5VQfjBJADj2c1MtnvM9nsuTs3Yqj8k6TxbzPeR2bRbY26KNGrvCwZAEbTWxy8maXiRsxXZb5cbtExWJuqUeih7AA",
  "key15": "4xbu4EKPYvsmwNqeDv5GNNmmRG6dPhiEHfpz2es219peWumb8s7ceVxaHRxgr3ibDUiguvqQkvDyYmHcopLivc8j",
  "key16": "3gTU4M64dUojr4m6pdkgvNQQyzLw3CgXfEPTiHmCShYoVtPjFjTLMG8ztWP7wRRfNTjVBqdrRakPXdGYQSuKFD46",
  "key17": "2Y29QKJMjfixRQmFp62bcD15BU1Fwv9vUQjXHqPGjJ4DwcqsWc4iYH2CQzUNYWgL1bXc6fM5RXBF2EVW1BNXEdJV",
  "key18": "62TLBcjGJXiJrmEBTqerN4776eRZk93QpV6cKdaQxUANt3Rw95XqtAXxzXRU235ZwGYfy6ah4kciyVVDwYJfepVk",
  "key19": "3x8L6q4PfDE4NQqgSH4s4TDBcqjU3nnG12Afk5vxzyg7poAUNzLn3GVkV9cusCUzh2VGgsXg3M3ruT89aScYqxHG",
  "key20": "vThi4TsGbe5hvJTBXetHw8xJyo4brssdJJptALsBm1mHTA5CyrssjS2Tu2gn4WgeQ3SsXEHCaSqDkrWAbSXADhV",
  "key21": "4LAiHk9mzV9exXSPC4f2dBnSuHZVMrnEWMnKnXhk9rXD1qX9FUJHETJJ2roEUBZPrUi33FGcsDRzx1dgbKg5D521",
  "key22": "3NHUHGLUwE2jQET6YF9h5Tefsb1bYGppT8o4V8P1yw2Z3wgcMUbhjF7FXVnGcx7huFkXVbJ2LoXgGGHcTjaQ9FZo",
  "key23": "3tUfTisDSGfdESxFH2ihS6kRWa4hSAk4XBvFE62qcoPDRbaG1phmusZxcGMpQsxKWX16gRkMiLUSRS36pKt1LgAs",
  "key24": "5V9VvKvp41SgwkGNCoLducJdsi9jY9skuGRMEMHE4gQVaDZGeTU4TK1oqtwezeFmoJVQQ6NzrVxq9TyMxsapobmL",
  "key25": "2MWUUAfTYrJ8oFsoFt1AqwhnaWremG4EP9maWGtmG5yvaz14x5G3SizuubA4QPoiVPR9ccPkjsxjbxWkeMXaRbzU",
  "key26": "3ABWjguxnXzVdRrcXkfRqnRepk1DuT8yzzSTwh8vMrdwUtNC8cBQYH2DvuA5WviBDdqMETyYK2HXeqYN169VfRQi",
  "key27": "2yok2J5Q4bDqMfTKiEi85rNGp2uAgA1BYRdSqN6G7m6ZSfPb4XiXYMLiZnzsuyju24JtWFMBjLSFX3LwXeiYkJgD",
  "key28": "3uw4pEnKHpuocgp7RocEFvLSoi9DuprQYuPFPDmNihAe2bQdDY53eS1UYaB4bzPSfFz717uZAfM73XdLstLNREXv",
  "key29": "exnd3H8P7oaDNS7QrWDvjiEk1yUpjv4LBVTytM8TufjpS29NjBdokGK7Zf6J8N43ciKXKpyHY58LYLY71PJSjo2",
  "key30": "5SXbEPy4QRsYWBqoKQXhcHhV1DGUqMt5s7saN86CTdPgp2APWkBoFYfRW8zQdgodLixKxRb5hPkfRzp4dR1npRx8",
  "key31": "3zGU2fcjHcF5Ca7DGp1872oNhCoikStb6PJWMsJa2ZnfBCXHCvU4vn3LaxYgqbdJMLwVikArAWQdeTKudf6hohrF",
  "key32": "4gRwsWbfyrV994LXYUiDBYvhCqNyVdFPviiNzGpZZZTcN1cc9zFfqz1U5pu6P9ecD1YnDvecSkY3xPrCf84SRMKi",
  "key33": "2vVqgwuJsV8YmvXRsCRnQDLdy2GtTqrqgFZwDGrfso1GAyqS3ZM8HC7PuuipW3ZmGAYa3DTwvKsahopRThafYVNy"
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
