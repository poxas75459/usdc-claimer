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
    "XRM4TFPduHM6BaYEL8rL6qbhkpumVfmdxM3CvAJyi2CdGVcspD53rS2bgCjkwXBjG3BQWpeGXPX5wf8cWccF7us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSA7diBiyYg1yxJFxKHS1538LfUFpgWdy9ucM9rFvdWwM5t6FN1qwWxxR6aRZLF2SeqHSbCzoSdXyc85ufqYW1R",
  "key1": "Gjn6S95nFsWPh7ds6dWEXaTNq21BbaqKqoqTuqEKRCw8oMpw895h21diZ8fQrUJTZHLhvhxLDVb1EPnYGkS4mvR",
  "key2": "sPKCZyWRXXJUqM3GdUD49UhDQBysq1eDGeL3LKoqqzdiNKtWXp1z34SeUpJskYcgqYZ1gA3NbuebM5b7iAxfbdt",
  "key3": "PxYDUwsH6XMo1XC7UdaYKA87EUFKUV8MEPc8JWvT56o4LMFmSoBA2248v17Wu9aPtEQUEyxnG2mb1Z7pk2K3qWC",
  "key4": "MRE4ca8QHHFQTQxFKbBAhRuLTPyxEXtmTrJkJZ561qaRnRUJM6Tzpw2XW4gYvdWuyCxLNu7EjUFgZpdFxXXDmdv",
  "key5": "5teCyxVd1GCUDKqwhvKhVumHcMwqTuxXFQobLhYWCnTjpmNk6AFaTv3qrF6HPCPV7yHT8GNUizyJQmHiszgq2LX4",
  "key6": "4AXAXQxhJVf7rZj2syx3ZN71KYwd8xBvAmG4NUrwxAnHtPhDr6UjMQhHvxzHSkiyrHkDiH5Ld76w8Jsv2mUmbCuh",
  "key7": "ca44wjzS1JmvHsEJFEBSsA9mzBFAnnzsosR3zrrA6zt7Bs5r4vm3SM5X9ydNjhBT5UFHFxGqbWsmSm3MKvCZQaE",
  "key8": "mLyu1txscme2igUe3Axg1Y93KRjEUdiY5M8JpRvqHjX9BJDzi5CuSZtNCj1i5e3sBY3nbyNGHKpE43yQY4i7c7h",
  "key9": "3EJRaCAko8MU4mLeypb9UvKzzZpHLEDFmXWYfhb4KobAFRcnxRMNJSKTXKuQTqBw4afKoqa3pYF7WuXpdqPdUqeq",
  "key10": "2qHBBhH4JNNKtpZjuzaVi6JYbi2pzdC3KcY83jLciCLUqtExUrERgPGfJJ5YNrj1VFbHY5eRkcpHnYsueASWtT8q",
  "key11": "5py4h44dyVT64xkvo67p8Zz3af3NrVY65mAGesykEBM7Jap9eYJZ1SUWBC6EZbmRuSuMyq8HTpAzxYi9eNXYCDLK",
  "key12": "tmHmAtMhofF6opZUKWGakExQKQLUxkuFTLkbFw2uZgtLcmGg8e9roHdu8zhHm3RqufUtTUVSTQ9znaGkP59whDg",
  "key13": "ZaGUoWx98eNdUPfNNenAi4twssnY4QE9SPwrKJgSX5Ns9c77DG7hDzxLSTE54iRd1G7i7AwZAij1yg8kftFD8Vb",
  "key14": "8dKJrkyNQ3U2rXcccpoBfa6RNcBmEY8k28b5uBCAX3puqtggRDrLVB2hpSBMpc2jYB9t4EquR5NKVbaGxY7qRyg",
  "key15": "351bCXrFCJQdSNSfuHRZKPHNQe1pmxmGPGpcr5Xz7Y6S7ihXzTDcV2WzctMKAq4ePMfSkfn7ZzwPngXfACHrgYry",
  "key16": "Hk71BQx5f7xoZHe8pTyjLnRyKJ3kn9VYkHqCQfUooqWTW1AiybVtqfeQUtBbSBNZPGApd5EdmUnBkhvJmGZuMYb",
  "key17": "4FEpc8j2sWUZYzWYnFm4E2CBYnDraDDQ6tUXRQMbyRBLryMdnhdfJzP8YNVf2529Nw2a7DuMPrY8Xs6JvujeQfdK",
  "key18": "4GEZ8ucAZtXnEHQ6DTUiP2cifALDRe3xSqGP1WvmSCmsbhqPAV7P5SPeV5oCr58GPQdWW1YzrAxLDMPmMSwoi5FB",
  "key19": "4Ng453DRtbTfbGGK4dP6QuFgtxR2d9MGApiywBfB21s1sZkcZWP6hZBCRZ3McMX6z9qV5uBvheb8hZYsURAvsWBB",
  "key20": "5nbFXG5QD14AAN3pbG5y8EoKFvM7HAgSssNVB3YjcZvHYk3vxSfTz3YpnnCnuJfaWakTKzrYbPbAowmfM4iPNT9D",
  "key21": "4gWjCXsk3BDtsBEr35ZeZAJ8DYk5e9kW5t1EpYibB9DWCfJ3GwcuqNngf3JxBeiay2tgA2kzjyU5PjaHu4KKFWGi",
  "key22": "25nVA4isP3CeyWhg1SsQVefSCn6xYkuogfm8wLBAokdiEgpGWFtF7MPD5YeUHCfx3agwaED14aC1BKC7K1fQ5bpn",
  "key23": "2wRacuXbJxv1Gg4deQ875UWWo35xjSxJjCmNd339EutJDhkZwLT8MGBz8CX7QjXga8qHW8kvVC36hsmfscKZvLfy",
  "key24": "49hBW16LBENuryLGYjxztnHmvvb3uTMZpM9JdFtuqSEqkotXdJo9VaF5XxRjJXScEJHS2ZhS3xhycKMm2d5u6R9L",
  "key25": "5pALPCF5S6bKhpfJWbQT7YaDNV812Z5Fmiv2doqe76iTFr9wqnCk8ynwsW1AqHEd8mtDKLJvD2n9EgGwMLjBsfM6",
  "key26": "4B61Rz9GpJCzQSmX2xkXHn9Xbs9UFSnKPSVRgG26HhD4bEvVZeExuzFSY6SQHjMVtnkGbUnYA6gb6o79W8v4c2cH",
  "key27": "59Wdw9XcjGeLULJdZiqvjvCFcGADV5Le18STcK2Y4eRr2WLpzWaqc7GhPR8zwFRcbBLbVQ4sFH5y1b1fMpiS5RrQ",
  "key28": "2Pd9ZEkny7jMqw4obN4i4oU4tfRwuiMQrcEHASUo4w9Z8wUw8VmQpeSk87PHsSnFAVEtWXZRJeNiATLrjxpnLtyy",
  "key29": "NthC2t5wT4hiaNsvKD5wCasPuqvPmLnRAdkDbEbRacT7ZBkjVL7LKgLAXaF5YHtv2FcNJMWuGyjKXtuUnwys1eW",
  "key30": "4HBpEti5AZzg6JxofFfePQiC7jgs78PENGS1XoLMvJceFuR3oqmhoHe7FKUsUdkrmW1FArcGMrmuVewD48X6x9n5",
  "key31": "fSm4rbZEcFboKYK9QsPtiteYC5wLAFi5kTGT4RXjZefxo6cEuPqQRhUu9TEuFtKep4hHvA2XivBUaMKvFewta9f",
  "key32": "HpiTB5SmwK4c1enxkBiCuxGKs5RZ2E91GH8J3vJmMacaCFb54xDyBNJgBjquqaYnS8F1SfZLXhB1RCXJkZ9rE6d",
  "key33": "4wbvj3bJhTU9VHGAgCWhpU7MGTsbcbu8ZX4sFK8hxdjY9KQNTtTb4VYYhMpqTZ2HSQ5xK72SDEJA2qmWFn5rbFmG",
  "key34": "2BiST6Z7Rfown8ibJrogFz9zqmvirRnpc9oZ4Fc9YCVYeW1wyrHjy79A4vnNNp9aDbAtBJa8qsKKT6kTRGjEkr7z",
  "key35": "CYNMSky65GXLEXg9z1Dc7X9yh75RN9YE4BmVJQe2PeBEtvSmhGsygHqeMbK7Ei4mQmkwBXYHZk8tM1utqkUSLPT",
  "key36": "2mEqFpzY3QA1wdysfcDUqg6B4UiDfg64pyrWWdMV8dTdcoQqYux7YyVD9Mhme28rfUrdicXTsrntdCeeMW133k4c",
  "key37": "2yonNXB1L6yYy1yGonzKg52FTjGYEAddFXRURyyHmgXXJFDb4VfNJGqMPVcwjcAwrdU11SCUfaMGShahcHeWB72E",
  "key38": "66jfDMLinJDrQngGrJLH69QduVzdJ8WzxvdrdTy2otLY8VmfYJNsdyUwDYsuRS6scjNCZVriZad2H3AXCQR9TgmS",
  "key39": "2qN3zgC1QreERHfsX2aw4uYtLD3NHNdygKhq6qNKyyuaBXjyNTxZNrt9aMFfW8oga6UxynuKdkTi7DrWPFxgigeD",
  "key40": "4JuBNDjNpd4djEJ5iXMn9T29mkuxEhSX7XZ3efARvYnFautqP7CWQ4zrRfgxJJVfpixPHp4H9m5FdUeFa8hy45uZ"
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
