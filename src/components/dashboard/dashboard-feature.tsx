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
    "2QXFnFN4AURG3jX7ahHcLZ1CioSeAuePR27yjJDxnFJriVeYtrp61UAHTZt5TiBrtyjPiUaYM6sV6HkX6WFV8eKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wsmv8EJyyWnryKTfneKczY7JeLdYj1jotJ4FtQ18NSzjZx4KiA1c6acvE71uTY1p2DMNdFnha7F75M6sGNshc8",
  "key1": "c6Bajj5sug9z7JJWz1dYQCGgGiLa95obPDjyp8vcpseEG1Vo7B7fhEnyTjRV15VmjMmbJvoepUEf8m8GkVdtCmS",
  "key2": "3kmBsfaaJAZjqJzRCt16Xj6FTmG3ETAsJ2gHAomBvW5CRHENzyXqsAKTNzNE6zGFmAb7UFS9bhoMeqjejCJZinj7",
  "key3": "65yKw71KTGwyEFMmm8ppL1kJwaYkChLVKJh1bV4WUXJbtjSmDDqkBSbD3RTrCj5UcvtuqQkpoQ6Gwo7e1Jtm3vVA",
  "key4": "2jtfvZ76F4uF5jASmmtwCDBZ6wq9CYC9zmwM5ZgrwPmxtvZsivcepzC9cYsvGatEX6aMi3AQUDRzhUCzTVNKU75D",
  "key5": "4CCiodh2WpPaTWuEsMhcRPK26ev7v5rCwVX6Tr2kYf2R8TdYEMK917cLzUjoKgHUFH8EedMR8urs5Nwh1ttJ7zjT",
  "key6": "4HbdBP9oeakNeJhThjGZ5zB2DtsCbQEA8jgoeXZYk9muVf4mVB965rUskzRRD6QGCZ1ErSX9RaHWbSCx3iB5Yivp",
  "key7": "4giZzVBpC4nfD1zzHqP9f1BvcumJHssnpC9BwrWc5mivD6Ge1vMRP1Qm9YVuZUwGv7bZrYzQnvxLYwxQZ6JXLEui",
  "key8": "4JuLXRg7icoTzZxrQ2Et5Boj9kqzoszE9D8NjwQRicv4JpUTAaDeenEB9iNKvkKEQuoVomoGwKhsA1Bp74mzpsFS",
  "key9": "59BMmgWrzfDuVLo1Tvw9GRALRDsGYg743b9rLbi1mvvJJVBEuQPcr8R5T2bVJUJuSS5MLPFiiHorgWMGAPgTpx93",
  "key10": "4ANhYVzJUtfRFRt76opNro9FP5MqAaqonXYamE7ZWAEhEYXsN7CnuyXmNEEihdK4ofzdT2MSYy22H63xL3ZMpv5t",
  "key11": "4kzoQQSqymASNHS2sj4bSYMSgVCzCJ2uRZ8LAaBQ7Tx3r7Eb6K2ncM9cvG9dYqYjK1cETeZTqxFF645MLWjiFQcg",
  "key12": "s83sUTWDu9xm3qrjgmkWjnyE9BskYiAV7HGDMP2haseKFbBM3UT5QfX761ZwTMbGVnv6Y4DyqknrAxRPuypEYTc",
  "key13": "37SKL7HLPEVJRwgXjqncBFA5iu1vpepciKncZLVYJAJnC5hrcobj3ZoUbFx2BBFpopay1MhbhoKkeDmVuBpVGw51",
  "key14": "5uBgigo2BSs8nwNLVTWp2nfC5Ze1Z35b5UNgRq5CFRWP13LfJoDWVzAuA3s2AFTLNtbNYkyHnARvNaDqxLQjbPxi",
  "key15": "5Eeawtpna14hnhVSPRwXyeVGTukPKUhbbXSp1wHK5oiRbkZ81yFUwMY8fRmXNuHjgnyWktyCpjANnxMsPLPkMpTi",
  "key16": "25QkWhQj6sKQSyvwRi1fs3AYUV7agisFAZ7AECCfjHBQVQ4HxUPFJwnigARTusX42to9QwVtHLdmiFMMGXsfGM4F",
  "key17": "FuvTnW2oNe15D58w2d7dQqiZhD6j7DNsSyCHkbtG9asUDpGFUGqSSpHpWcFFgo9BPUVb97KyZattciDkUAAJJrk",
  "key18": "8v9ipeisJbd49VTtKaP7bVkifVMKLhBt9DRSiki2oH7VWm1MJ9zSukyeHMuN3SR2DMQo56NFSd5ZM8DNFd94gbN",
  "key19": "4YVbm6PwwYHkoNSUaHt3zZqfSo8F8PHGXpjrAzapW84MG811y3s3jhvnWbJzHpMYFgRRbzTYJMZqWFUJnM5bxKaV",
  "key20": "MiUpmECxyvAWCgbvsUMsnPnjqNho8n3csjiGLS5KvbRHkh331NTWFMVLGzCcdkGGmdw8SpFiQkU7LgPQPzFrPBc",
  "key21": "4YtSYCwLJCTPoqwa4LN4yGvTLf7XbJ1AoEyfeSmmSnUQ1C9G1G2wC3WQug2QbnbuSDFwxtfjhimP1UcDTZsJJX6f",
  "key22": "4ubRenxCGvLaRY6B4WkcEyYt5UTiHHtZcgq57xjkUvrTxNGMFm8FP3i5912E4iY4AeXbWUd6oTE1n14g87d2pAnz",
  "key23": "Rpb3L5cU8HvmqTbJ7VTHjWFrUDjumAWceUsDwDpdPA8hVxcorA7dySjBPJJ6BsxSu2upY6fm2hn6HGC1UkgYJaY",
  "key24": "y4Q4N6b4bfmgBnHb2hA2W1LwmoUh71G83N8R55wdBx3dgRMwXDi9f7UM8DZLDFh7nssCGS255mcKhUr1RYBKM1c",
  "key25": "QufhSfLSPUULUgNjn4vkhUL8J4TKjsc3VNix88isjJ4ZDZgeiBpuzMtA9v3QK4NjqXbgL5JsNA25DRgW6v9xDB1",
  "key26": "56MhM4ue5PttSAGwZ6Uwuq6L7UBeRiNCYVs1dK1EczYk5GnqXdc7HKCp4FsdPrKA38TsdakX1tyf9XWRHn6osEa9",
  "key27": "53jtyRVu6cRvyrC2QZmfyHk7nEe7iqDWjNKEfKkJUMct1yPtdnjaGFbMJupqvq41ZfC42yfghuDEVetNss9nYay5",
  "key28": "veFnU2oJQboKwRjtVBoyU6jbDZS51HVDzm28xjFTWBC5HQgHugXGJ3xGaa9nzZEDSVcEqpGNgyGYFTtHQtk4Sce",
  "key29": "5AdqDcbBD1bpsUurfhNbGkW7mgXg5YEAeAYRYunt8i4Z5PaH6zvweqs7uU5Zg34dUQ1CR11c7zijSGnfkuPNUgCS",
  "key30": "5ADsGTxNDxQcR6usq6CJT2M14xPVaeGTH3QQEfFgoku2kb7ZFkbDMrHtWC6eQ5n1eMSAuv8F4UEPUf6nqbGJBpfF",
  "key31": "3jQBmpLzVwL8Rwmpogb1bpTUT5qCb2AnvuYCu8YRHaUqy9BoK628Cw9gzHMThRGBav5xCbgwokG4zTYsnsURrqK3",
  "key32": "4tGvqbk6NL71znoEtaTL3wveL3Ui21T78qZpvT1Q5tm1pW66pZMHjjAAXRp11ZExRCpe4f3QZvRGJT7JYgAfkG8w",
  "key33": "3mYZgef3UAdZUBepeL3Vq5NoJ5qo2UdLDbp3Psy6fHrnTXgvWAsWeUVngS9FhkxEsPvFyDeF4ApXfp7T2GyJVAYv",
  "key34": "2vSMVx8MecTagMbyoeKnF4L6VXK6i2UmCtsZaobH2ewfzSmk5pj2MVqF2jVTZPkxXsYpX1JbGLXZA2dGNzgww8Mq"
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
