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
    "5byTNEHhQo6Wc4TzTrWzcp1jhoVidXMqhPGAynoohqvX74W34rd55zk63FbNPfaVM3wtY61KjHtiAtdfV7uBfT2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aoFFwtaGZRCkAv8oC1w8HT8VE95i7opdFhckYwNpn9rdkRJxahob8Qf3QrxqNhZi1z6Kj2qBo6YfSsZxm1c3Bax",
  "key1": "33G3RbACdxzEZeZrt2QmWmCGKdwpCLayHjYXFrQVmzXpiTsaTpfJZx285qPiAXzSkwNKbkeTN9ZSYRZWN9LYL3wZ",
  "key2": "3XU2A2SD2Z1zL81SfF4npyNjDbDyHh8EzSKWKkAAeXffyNEFrVcDupKGFHyTAsnXzUMqvmYJA6fePV96T1qydsj7",
  "key3": "2UEpuPhUPMNt3hzdCdmQYodTvfqgCZbSYj7jza2GWBgtvCakcd536SLhQkdugzTpsoWjvXD2Zw5abpRZVgd2tZBX",
  "key4": "3UXLG649qWoibmMTJt98JuKvh737JrEpaHNX5TYgYgGat2eWekJQ76UeLqXhtVkZ1mmdH1K9epvZarvjpHFDxj6p",
  "key5": "5WqQ5uzi4dQ9sNMJSqMMVCmPPRcbw1kmXVibJ7x15n8MYYzYjnf95k33tWmQKgCCmrhPoqN7gbVUzBUciHDZAtdd",
  "key6": "31etu366MntcuGkE5odf8ipnLfKhvU6M5wjGCikf2KEURMSwspvW6MAbHgbUUMBZcBHCFYBMjCogcaHkuR27faA5",
  "key7": "4grTtGEZmXUJiMU67M1Far6xYR28ZeyNmGohx2hHmJCxKmw52nhSVVoUx3r56FceK47TGPEz6VVrCQn3qUuqF1ah",
  "key8": "2z9aK2yFKQPm4y6z1pbbZHqDsnDteuHMvXYFgoDVhuG7V64sLfdQHLJRKdYDrKKAMsBczYej38yj2NG3RPozAkvZ",
  "key9": "2eMSixPcfoFn28UQorWFodN5F434x99fdVKVGJz7aK79FXtp4LXJaqJDXjiA12A8SHJZHdMbMJJpxsFsac3kjjAo",
  "key10": "4fgyJb2KxBCgaj2HhdT6smoLQSU696dt1qf7atRtid1s8eht5Ka8EPEr35Rv6XqyFKivoTGeLgxAm1RYErqc64gK",
  "key11": "4YV8UkefS5iPoCpevKTzvr2uXo54sQauQA6tzcHuaWmWAzDmSYuLK3vYfWdgbH7ZtSJnn9WKDawEUdKnr3yKk5DR",
  "key12": "3L2atzUPq1gz6NEV3SG1pByNTiP7wKaT9rZxfGhWN9DSTTmehZMHa89EZWCRxMvoKYrFe7L7aJiJSAgHFBHpL3TU",
  "key13": "2qSp6umuX14VKRLrM4sRCFhYt2zvcHd1iGNgx9ddfjs9k1YC8eQZMXVfK5nLPzzKTrPEziS87noWZW6HKQiCMZDb",
  "key14": "5sZ6dcqHFsrkNLU3DJs27uasYuEYucydiVnxnJSc932MWou2oEjEZk4oAwskJHjHHUkhvNgdkw1STv1dxWZAqSLT",
  "key15": "2pzQQJ6uzFNVEZvEdnvnvfSg3i8qsGDt57pvhvhYyKhnhhHwDchTMRgRr3Bx216UiwjjLDrT8ZHnN5stJKNE1TWu",
  "key16": "YWZh9Zp4UuWyABL5LAVHwuNnTfso4muPUS5QsQbHJ8ESJECihp8aun1ioA2XcTTShkZWHKPffruu5AApxUfmj85",
  "key17": "a3u4f8DcoV2C9vAe33F8hDSy1ZbJwyyPhpuZh3vVjuHo4Bnz8rKXVy7vkeieWABTWtw5wMjBZ9Yqk5qSRUFaABS",
  "key18": "4xF7uGm6kN321w1tNqt4kxHMqFbQcPHtzTgnnTNPqeSPGvxPoCkqAkwHJ5En1wuwaCy1Bg4sReyewLyWZW8AwM8Q",
  "key19": "5qw8Z7stkbph6kF8WSBbnxk3BsWUJUfN73AtiB8khBFwBvPPxk2WykGax4XY2bEdwe6mZcaPYfQs9qdHhmunSFqh",
  "key20": "4J8aGqgHadD6JD55MNVez1SmRRqjW1rnMdJYD3p9tWroeVcFFqKBR9rUMcG5Q7WsTdnLi1kCH91YcgRygyaFbgtw",
  "key21": "2p4WpQbFZZDQY5ozhBq7HpPtYsKvubFvwL6YwP98Jc8DuE2mEEY8aREyByK639heXsX56Q4Voy746KQ1t9NFj1hu",
  "key22": "2bZhFAgw3UW24EhZobhwrFUCYw7mq3yjKcGibaWUaLEr4cjxQKxBB1EWjNEVDXLmQTEJ9viJENYrcTqATsqisWBx",
  "key23": "659dA3tmWkXJmigni7YAWWdh9ytXNyvH7zgfUmyUD2sHXob5JNgvAtk7Hff8zZszrJ2Avzz2HzpctaEmyuh9TG79",
  "key24": "2dU3kdfEq4kbKxHKeMh22jfHxgyLgYJ2Bd94g2CyeTMuTKDm23SxPghmXcM3K7NVBL52xSskNn58XDMZ8MnXqYbF",
  "key25": "4X2Ae3wJB7iPvcHDeFV6DR26oby7SUHWevdAaZGY9ztVy35cPzuErKd6YhKRjaTBpEhhZVmsXGjVaRLvTtwzCaM2",
  "key26": "5oX795Kzo6CrERTgezXbczC442c8GidQC8nc63uYTU8QLb6zdDaB5p3QSZB9T121ZmWjRL2boU1SEwrLxzmBmRXw",
  "key27": "5tvofZPucPYSdGZfQCkgHdGaUDTk84466jQwgysPXAXt6752Aro691op495H1kqacWirbD1GVAb66h8u1S4FDuho",
  "key28": "23WyF1WbP4gk2qJZFGD7dfYfgjwWuK3S6k3pbofpmyiNCEDB7UXs3BgrQhDrLBr9nFbGtBuKhNfuodtpa3weKfYA",
  "key29": "1sBGeHN6z9nATmtvu5vFZyTEdUy43iNvUFdSjUzaj1bWndF3sTQpFtCPZ2LD2kCme48ojRUVHrqThtFJeEkJdhT",
  "key30": "4HZ2oUtRDqkJQnwXaHFheTUFbUBUH6hVKVTA6aVtEDFyiLMDpbTLB2cvZXXtuHo8Hqo5JV5wW9B7oqB77xi7o81G",
  "key31": "42dwWYRmNQnpgfePXeopZxEr1n1n3Dtjeak66NdwxTfuzDvkFkR4WkT2eAuuiwWhpQ9nMJPakfsHqCjMNRhw8G62",
  "key32": "5faoxFG4zGMfpKwQP9nkk1aotN9rM9MBzxVN2ntxdjAyE7USEuGJg8vfvDuXBvdeDzAKHE4mDawP2FcAR7Ehhne6",
  "key33": "4LS4bNeFH46qow2vGb1imyKNjzQ2MRhy1zadaQef8iWduVJiS7tpGoyDyGia2Z1brgFhcCsg5NkevmwGTyjW32kQ",
  "key34": "5NJYSPRocjc47cGD1M44ghmipz2NV2GsS4RD34T9PM2qkkCag9Zbh5H2t6s6WhHo7P7qK9VocRJtfoZ7Y1qrKbJN",
  "key35": "2L1fe55iowbAcmVv3bJWz8GBNXgpe2JYshB9XRm3AqymhBN3ArbLs6d4uZiJTy2bKYj1ork8hYh8RCysnRg3aynk",
  "key36": "dppiVVAodAtTeayaXwAT9XKcbPJuJfB1r542ccE7n1XAad65gKRGSLLng6D6HcXJwzaRg7DEaXdPcUf7ikbWyQG",
  "key37": "4Yh8hbdMHgzLSrCDafxa57zXRLSrGL7oDuRk4aa5fYwYFCJP7G5P63PxscUKr1EuPubYFqPzXdcAfeCey36YyQQA"
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
