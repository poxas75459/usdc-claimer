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
    "2bKgQC3vAeQ8mgDaD14JSATLGdKeUi5AWSPBtR1peAda9ptJj3eFEz2B8XrG5J1BUtmHFuBprbELqcoKtyUG7fxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9XsYoK2uyTgVwnWqu5q7n2yKkVQDg1WMvp8RdNFguX26mH5arZXQdq4uRW4LkDjdtHofQoe2WJBXVEtNxKhbzo",
  "key1": "5ySpX4XE4FCZyxvKEvBkTXH8W3Ffwqy8bLnDbvkehqJTEPyYXJkEnPXqh6Veg5muFqHGMF9C8LLvVjuZZND4UGGr",
  "key2": "5CZ5CsnnmKtkqma85PGZP1rmp2YNUXMgeFBkK9tGTsRG2SiLhNX7paZGqt7xhcAqYQLgnSrqdbbLnkZ9zGrkd7Z8",
  "key3": "2xD9hLK65SDqLPWntCimcEzvnfJ73Qwd3tgvp6xyskQApgSoth5Tj8nVUaCZ8izWBjPvALjeungNqVU4cc5YTrAX",
  "key4": "4aWpTD5n8ukv9K9jfipE5LedQstAjtkgJMSiGLh4ACeZReAGxVuKDuUmFkWy99znSjkBnLHd4pwsRPDw8pwTQKUd",
  "key5": "4sfJaanmdaFJuPDa1cb2McJZCXAkgRduhVtLBJ7MyEggLLgYhhuRs4hkzS4T2Pcc3b9KPPVHhF5vJoh8urq3KvLr",
  "key6": "3YjeQyvwY8fnuMyG5DBsS9Kz5si1c9pKSDp9GDaaDfZbtZ6yt9kV7tFEgfpohQ1U1Lp85Ygkb6FiJrifHwgHRztx",
  "key7": "5LPE4xDjv6kpGmwaMENTAdmxc6iFegG4yxVucvcLnJdBjjhBgbrWPkUEVgSnFHG1zWYFxt9E3wwTAxgV2QRpww5P",
  "key8": "5Kqpp1SUV6rQCaqpjdPKFZvUiQU3UcsUgsQenC45geSyQc92k8DseZN7UuzWfpn1ZvQd3LjcNnazj33e3dM1RsNC",
  "key9": "24qnJxtxEmaXHhjXm9NBvwV3nsCsGWLJS5vZHPSDJpJ2khpQ4zpQtavJpRDS3NmRHtTWyk3uLPEFPpxiuUALeL5o",
  "key10": "4ZwfT9kwT3uSVbFhMhA7Mn1ueQiJeY67wwQhg6XyBWzDSo5hPwAa4Fv18RqnaoQaf83fEzZewGfUqEPVfr9rwJow",
  "key11": "5akBUJ868cFPdseWH2UaTiVsJY4eShLQrELrPiDbpHGRSxmhy2vCSNr2BzESdMwma7pqYMBtnGEUgpv9WyZbQqNZ",
  "key12": "XpiNg7TN8iqX7XboDj6JcXqThT7AjJ6yemfYstnyewnDwys93GfHxn5F1VPdyvcuxoRkYNEDG5H7bhDfhtASJH3",
  "key13": "2YYACwZ8h5GZCxwDd8nn4eemGqbqDEd8L6PknDxiJpFoyy851scAR7FnTzRVSP3uyDpjhMGNiALyCAiQnV7ubCkr",
  "key14": "4pZvCXM57oN4AYXjiFBwRKWj9SwifQLe4zzcFrb4TBHi3dmb17prJBy72xYTkaoPwXbZoyK2rroL1KEuaRnPh6Kr",
  "key15": "4qjZiTa2B4UxmjKw6hMXtCBAqbEEJpMZNnXtWNMgcxQwLWqQDZGjbpwAPD22u443CEoaLFcJjRc15DD8iioD9a2e",
  "key16": "57cRCnzs1mWrV8bcNKBsRei5XMCXvmvoysvcKJsboXj4tJbDT9H4zabjFDGLq6Q4uGbPEs4r3d5rWGjqkMLRBAP2",
  "key17": "3GWc5PwFC2EKcYbpLkPB5wL2FoYWvvFKpCmj9fnDanRWcPi7S3GyNEq3Y3E6PyoE1T7oWxcEEYBM9D84mzotYY83",
  "key18": "XeGpMJXuoAL9XSFtkDE9WYnhJN2wzCJyYawSe2fofyX4tNskfsFdspHPpFLxsMbnqnS3dmmSU2CR8HF87kEiEEX",
  "key19": "5H3327ZbPEhvR27v3DLZqctB5Dhbb9chKwnEeRTzMgAFP48brveKMjo8KNJ4LKtCzyY5fEpsZrQ5zq3NxY83H7aa",
  "key20": "2WN4Xx7uxmWCHrF2fT7k3xw61syW1tcTc8ispwQVQea8xChG6nMrB5AvC8A5xnPPSZgq2M1s9wYcFHjySXcyvFKg",
  "key21": "4gFA3ayJbFnRUZG61Qkq7g76Km9hw7LHRyGrD6abTtCU1CdsaMPUxBAPMYgUKn6BnyHUAsAvQww7HZWWTxVvBnLx",
  "key22": "4APiDQ7K1AWkWaN1LDpFUvPfv54HBfAgfZpsLXYEa9qwPjGP1Se9tnCL6FDpjxRVRSWsPfxsgA237WdW2MAdU7o9",
  "key23": "3FMd7mrZ2og3CkoZNRnJ5LCKG1eCZqhWYPWURKdQbjj6NtDAdLQB1HL6iPDGWdBhvYbVyNLnC6KQ5j9yKmLpHt8R",
  "key24": "2fvodiFm47gXoMsuDuXB9mtvMsyRxMNYqbQsaXM6C1m4CRJ9tmfni3mRCaqi4pSyadjDfbNqQJxZyqSTivaKqbGt",
  "key25": "w4ftjHfCWE7ZwHaZ7eYDW33Xwi3FLUMwdkeeq52H1fUf3MUMQHMpmP7YQtT24gNCyJpWsXJ3m81iK6jpYYJwjJD",
  "key26": "2H6pfLbw32dNCqgBZGxYjXE7m8S93gx2aevEwDMrzaWUh48Fx23w4dRhrTKBnRJrJV9Sh6bGWPocZKDrxX2GftPN",
  "key27": "j8x8LVGT4TVGMtFvKvTikRsM3rPyCCay8DQ22oZ3DnhKbnnwjDJGrCBCTW3FPBw2WhFF1HVhcFvV3njgqGRzF9j",
  "key28": "3RCQetDoCwC8g9FG3qNaVuKLEcK2egKwbE71u3ik8yokNHr66Fv7MXYNpfGPehvPMvWvxng284j1C9EsvutGpARh",
  "key29": "3ZgjRRDTEteMyUesWrQx7nGxxnx8vxzGHj877hzG2Dv66EWQ3QmFrLNDFe3SRvjhQS2iEMYSaF8iNBGpSvuh3v37",
  "key30": "2FbLWBP58mYQ4RivHgTYNsZKZkbb1uywp3J4KDDr7g9zvDyZZBSTwap4ud1Hun3aMKkd9FZQpGbfsMMFFa4dJZy1",
  "key31": "2bxJRMWbQGScH9rfairC3zPnpdXW9TSQBr6cRcmVPr6YcYFg7SWaFkSybLMiHGHeAiDRqPXhSqAxb5ygDrZmQay8",
  "key32": "2ow3WnehTBgGT6CjEPJLyWXe6WLxDc4SxEMc35poc86rzziB6JBFuGREn7JHjvqzNNf2P4L568CiEukv6F7GKXTG",
  "key33": "2CfBLtmcJNYqaoHamThWiVZ6exVyPXg32odwtGW2qNuCq3oU5RZqSFo4xcLMd3fYe6iYb66HySm1MH9p5xpTvCw7",
  "key34": "TRGdEg5hsD8vgEVN9ZyLhikN5YWsnh2vvrZjYjYDaNBKqQXRf83Qo2aJZwCiKDuqrKvgCRtvt2EqfJEBRkjH1nz",
  "key35": "4uvMbKzv5xc4J3p2pKc8njC6SntCwJACp5bVMHED11zjHnaneNXPFmNQtK9rEVMaGTcNQHucqF9JMj99jv3zpqSv",
  "key36": "2iPTX31nNDZtDwcCgi5ma3EKL2dee2GHe76WyudEC3CwPpQY8FPh8abGpSk221Wfr4jGM9ZsPKT5NiVxenS5msRW",
  "key37": "L2oN5iGmJyykwmkpgpFcJiC2ZmGA8Nbmri6X1d4Rn6E9nT6aesqmYY3nitF3m83cBjcU2RAns749ZrKTMKk9VPp",
  "key38": "3KRd3n7Ng2WECmPPD6QxfiWorYhVmybGDCkePU2H3G4hxRbfFmSei4gy6c8D8ZModjvFyN97N3o9jnmoyb1Dwe9y",
  "key39": "35g9yacBSD8E2sVPc3D7nz7iJVaYVFU92D6SMuobUKszNCpBKzujhgckZZFv7VYeeUinHrXYpkvDyS1sTCKax5Ft",
  "key40": "4nsXaXZoWtphn4kNsJmX8bJYaB1MwrwmCyaeJjeVRAHVaTzQUqbW684gnEvGxVbGVUzcR9fwSvckXRXMr9mqa7dN",
  "key41": "mByuAfH73soBWKFgGdyEbFL1pJ8EmDb7riPQM34sGzo3zwacHyhMsVnzx2PfAJenRppnUrrdZqSCxY8M3hLz6UN",
  "key42": "38gyGR9u27MD8LkiDn4XeVHFRttuzo2pSSKYRBfCjSaAys2t1C1VfujZJG79TxG2NJGmS5vGeur4Wc38xPsxQXjA",
  "key43": "2WZuXPvYwsPnjEytDSfZcgmDZS1H7k4jsAJrvgZKDjYvbTkkMmwHSMxAN5Hz2p1tseF3ommTBX4c1NMqeLhCxoJM",
  "key44": "5WHSpWLJwhb6ZygCGSGbFoKMNGdPr7CLK2LfduQvcFPMmfgvhvuzsu7QuAMcfUGFMkVVEe9dMe1gH9BAUBoo4JJa",
  "key45": "61qF5w2ZV34W7ctBMb3SRstgfzzthrq3gH7AJsBSvW2kx7TrVpmG3F9zuGfgML1kXJfzu9TKC2enFVuBVUw7LhbB",
  "key46": "53BmfVYEh7LAfxtLzSn1ZsHMjuPTSr7eQ2PP57aQFMVs6QtDQt6cYfyw9VHmhdiE18rfK9rGn3w78GgDDTZouytk"
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
