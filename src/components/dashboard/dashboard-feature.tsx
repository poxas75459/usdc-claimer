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
    "5BvDF4VTNvx5P73rAPj9mvawRqaSnS1PvQXRpGLGSJJK2a8Yw9MKz4NWCLu6NkLbx2q9RBsCLikw4DEMaBU4G9SP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cuLZBPS4boahZYsLvp7tDRXGtQpQ8326WJ3hazGxztcqJiTGjXyMpurdHM7R2wGL9tZXdVcuzebQufWYW8eKkeS",
  "key1": "4VN6R1HyFooFcahTLNRNxgjWkUFRHEx85bNeFEBEQpeoNNtZnzAczPmbciAW3yoe2aUDhZP1xEMkrNBJJgBB6CnJ",
  "key2": "5ChBkEKWtZLaXdh8AXht3nRFUBtQj97ZnHwmtkoQP2YVYbXEiPpBg7ueh7puVJWpx39U5CEE1XaJfRGRahBEyAUf",
  "key3": "4qh6ojeM6o39m8FDMB4cRGCBVPMZKvqiFZTSZGSf95SvUTGUyPY8emgPzqCFK9J3YfWvpyc8arUHcdSyb93wUgsE",
  "key4": "3Xkio3Tve5GwUkPw5D5M7YfbSjbM5BMdhBVsxwDtJMCBzZH9eei3Sjgz9ooY3rJvKjBcukrz6PByBBML65e9tQP6",
  "key5": "2ur7o12Rb6E7vE79LdzFFf1W5tqpoTk6kXKrUYrZ1ZQ2aRaV73Jj4NcqfQyuiXfCFfZiMPH3jufLBpYv2oYKKMR8",
  "key6": "5S1nUs4KTXspkKiQm96y2fXMxxQoN7kib16hpbtFjuj2kR1mrxVJvEWSms31BsPS761ABgxwFcWQ6rex1fGDZPkk",
  "key7": "pyzcNKEGJVjUsegwCpfZHep9p18WmZ3AnJMERCiUDSDxMXU46hKU8Hw8YuhYUJ25PGhmcPoKPdquevLB5Hk25HH",
  "key8": "3FmBPpdTYLBRBu1aea4hWNs8w54oHXfEXkGKxjsidcePDuhtdore1Fjdw4pW367mPHeSGFJMzK73Tdpo6wDsVLfA",
  "key9": "4xuzAgk6u21pgHUtNVZd4tHd9JgKNshyynVYsVhR6D6ugjo7H7uszt3hw4qGQs6mrA637MaWBShALS7Cj1BZJ63o",
  "key10": "4yZpJBUcuNynTEC8gtV1vWEc45KFtLJYwfPkwzhRGuj6xwLQhPhmoVPZCAo1EtiAXNJdbbYJc3XMJS2zxgS8k31Y",
  "key11": "62KeTJ1Tp1J8jsSjNEntx662wC5a6euSDwBvugQEEKuoZEg1PSAJJ8zVaGFykR26QJGjS4xub3p22MDsSh8WWqwR",
  "key12": "LrdnS7ip6qHi5D9o9dHZVbXgKP9pKg1w5U2XZXLocD49TiywXxptpHtqv2WTm43w6FQvvwFAoiJJCE89pzdEsGN",
  "key13": "3K3U7PoiAiZXHGZmPWE4bDEGPVcubMdQMEqzkc7wfR7RN92wdYf9YK4h8pK8XnYKm3xJynF1XtSbhsrRCZgKTrCY",
  "key14": "4ckv85oTPcZfJTGZKDw7Zb7PvUeZM3YFUxPg1Lbaksm8npeQ5Qh7JVYzPAWpQMrhekUxEM7vZHJGSZ8QXdyLfvqa",
  "key15": "65azxu4rkTPon45NofHNx7mviCustU8T3RtDzjUTC19jLuRuiPKBDCXSiZ4jULhhNQ8GmKeQey95LSHUVK659R47",
  "key16": "2sXHFA23b7zg9mzHDcMZS6rSd9RQ1zWfFJZkH8feWthbor4MpAnUawQjP2mnH5X95rmkZt2N8zZykNJ1Lxm23XEd",
  "key17": "2cSkEUpd1VEugd7FNHBvaJpEm6DsH6zaHKHJuuFQqXjYgAA1g6G6skRykwtiATN2qtfbgunySYLrurb7FBa51ETL",
  "key18": "2uZh4hx77uZW1yu4t82AR4qGqEHzw8qA3WEc3gUXRxxbGHAEhrGhQze4aZzbLefArwQ7RMaVjGbjyNenrcMTt9om",
  "key19": "6J2EHjaTZHErkSZKZJBASWHGDCeYW35UZfc9SwJuNciRBk4Edsnf59A5uQ6QBMpZo4LhQrpDYE1Mnz9QMawnTHj",
  "key20": "4yLjCzZ6KjdXhRDZGdGLfWR7YQXQ53yRAGm2PbzrMwMRWCwkunpuPw3EAwm69eaY4n1mnAvULMsbL33gyRWKu9uT",
  "key21": "2kmLUGXtBqpfFDZ4s4tENtnes8g8rg4mQdz6afMyB3pJ6EYq9xGrQmAzbcyZSmJVTDkKkRUL4XtvkgmTr6nBn85i",
  "key22": "VT4bprdmFRhyfAU5oS1AMBSykvJiVSDmA6NQyVUdkEoYsHUXYAHGqP6HL46BEBAFkBen1MpuwWqE1L5Jwoyew3C",
  "key23": "PzkRoE2q4bYzZ9tAVRaqUhCGcLVNUAdwVwsH3dMceETGxY7jYwykUz1z6XsaJAoKYPEAewuk1RJvZgYJTqwbcHV",
  "key24": "5cpJx98RSMg3hoiaAwcxYqEjkF97hfZiHr2Zvh48TwcjHwpV7C7LDdhJbSP3xqw3mLqpuSgB18aEzzE6s4P1H4yf",
  "key25": "VgCroCDWV2sPzikYYePdQcDnD3qdfRsj5wimiwFApJevcjESSk2DLHornqqBBQcJqkygkwkfELqq8c3UvEuRzCW",
  "key26": "UHxTy9Re9HjTGWKd88HY3f7XXtiTGkTnm5QqY9EdiLFboFAFEeHirfhoCjLXJ29odWzSLdSwgLZWXiC9HW6gqiS",
  "key27": "4kn7UHNhejBK8QBJwnGXt23ZCtaiwyfV7Fk8aJFAFQpP3HBFGiDhac3fSsgea4UrZM8pvgoUKifTZeigj7CcFABn",
  "key28": "59LNt23FzVCweSEqTb8PsmWaBmVgsSXE5RhzSkf3Rku9mdMcWyek7XQAYU9oKnV4x34fNkBrVVVL5SP1FwyKiQ8x",
  "key29": "5uKcFbUgcwKMvopi7Q64LbuesiBY8hLFnweGUd8qXXcCgWhFBYH1y3tDoooZjNEJ2CgkvBHtY365MstZW8YAzcgJ",
  "key30": "5DN9jTjC4i8dcs519h4K86M6C6iL45AHSQDGmbfG5iGUy7MJRiFBkbpX1H532ejXmQRbheKLqrziQaPYm8eQYx9p",
  "key31": "2rfsiev7RxEApHEPzHD2vjUbcDEYB3AxvRZsRTnDm4kSDgzWqifbufk69LwYQM53rCykoWTJPnX68uGmEJjDgkJ3",
  "key32": "2BNvVCufaVrQbifV2JffEzCXN1qRNBMJNCEYL8B9juwx9JcQ95CdmGCrr4iKmyY6sgKNyEbgy8TcUeTQeV7hNcx6",
  "key33": "2iTFqY3E8tRqweZ81q7WKJNHKGb4do7wcYLuMcHp4LEWwcm2T86NQpPbR6tL5gtHVP2NRGmFxeVBG4xUNPukjTMi",
  "key34": "3yshgLXYsNYjPcrSPWFkDKS25ZwNUh92azKuVfiQwysxYCKMuvwMFcfTj8eWaLpjsMfuF9inWcDDB7dnQm3vquVF",
  "key35": "5gG3ri4wC8d2bMr8TVvwUwP2oi87QWEv96U3LRWRV6Ck7yUUfrxPeoJ2NLExE32YGYhZxmSk3DjxfuUmmNtDTZgK",
  "key36": "3W8Tq3DkXi9H5Qi6PmU3e6LE4LcVXtpnwXkdeZbr2Ut7vWfAbJ4btPJBPDA3VxoL9B4iFhqMpsXTB1Bw2zj4xew9",
  "key37": "48h1WNW7ZffxEKZYok3dLmmxwpG9PH3w53qPC4abQ8SqqFigVZTwwEpKfaXcXJQbs45BBcCPPZtTUaGjfSpWzdwM"
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
