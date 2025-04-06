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
    "4pk46WxozjJ7anZo7696QSwKda1NYMbtq5Roz3a4K1n4x4VvUEL8uVrSFBu5xNj5i53ywpQrjG6G18NaaPZc3rM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTQngMFvAuFidDZL4zSDqsisrb6sdn4nEzyWk9Qi4g5QWZQgc65QejhdohUXMQwfFfUMdAtZoxPgiBEuwK97FiX",
  "key1": "33AEytuzgGcrs84Pnnu9xvHQTAKk2wbZQBcJ14drUzRE2R8o5etm5LHSBP2bdCV5difuAnfdrwhv43xL3ZbbeL9i",
  "key2": "4XScxP9wttUJ5Ck6hYAxoNdpZN35wEsSxDR8cB6DgBacFi9hqaogHPstsKeU897srJJTY3jft21wKcEWhfn6ttGN",
  "key3": "2WqSWbBNpQEErvTmeUYyFxGnQNoMUcJDgaYEsLqAWoYMS3BPDxbrFtTXfbWutNyr5iaqdrJrFfddEWWBygr13wVp",
  "key4": "2KssWRChWyCPaTpYPJe3Kc6DsYw4ZFFACqPSmom7oQLwupy7ymdmHkrFR4Yzo1SLWGRGLG2egsATcBXgqWVjTqeu",
  "key5": "2HYubJYgUUa1ZHy5rfSKQ5zsBpQfKQhTxrS7CzdVZCGGyAvRtUk41ZWXdbxXgwpKgkjAXPigFagKWdRfmpFF7iTR",
  "key6": "4G3Mq2w3RJ2n6597Ubiv1gCiqUmPpUBsMKcrfQtQco1rN4GbwWdaeHAWMiAWESAJ74zwq5GnX8GKEsuHNbn1MjFD",
  "key7": "646Xsixf6mNwYwVmJGKhxUNEN9vSuC4p95Zw9zoK7QPfw2JYJTPuVdAzaFHHHVFkk2Wr5Yg9ZeDHBk91rSA3YzFv",
  "key8": "4i8LceMfUvZ4f4eDom41MBXAPYeypyVjMTgRvdJkdNMRU3JBLj3tK8c7rfFNtopzuJHeTG2SWJAn6BvgLNnXRMsq",
  "key9": "4wUPatpiYZb3oEBQqQR998RHnAsA5LUP18zXhWHrLrDgEtzfa92VW8jJFUnWwvTijtM7RsQ9EAzPCU8yMPiXWnHy",
  "key10": "KEfaRyweBH9z6FwEr2Qn7dCGQ7mP7jpypUf7oxfWs9xwy99i84wHJpvKuwBQZXPKysxWT4MQhh4t3DWMiJM6DvZ",
  "key11": "5LE3c5DamMSc7Kby45tioudNKLkNm1g94feLPeyvdymYAFSvwnxgQV1eH31W4K9VwEwWUMh7pLfbibqrrJmhVNb5",
  "key12": "5HmhG5SHeVGWCtMEk9KHt3KKgQ8r5n8apP6L5w8hVHWJH6UCztrAscVbPoEw9whnhusYVxXNzVHnQnzuWgMRAtdT",
  "key13": "MzeXzzNspb21Zv9DF7FJxCc2GwoL3DU5t1WMujapAAibJDFpgn9cUjebubcQJF1Nuxz2Nq58ZzLpL4LCZJLix2K",
  "key14": "3xqNCjpY59SAJQmuWZJxUGrTQkWueZzdQ2TNDXPxaobE7TH6CKWKpVA3wLYDVweD6M5VxXD4ncPcuZn7z1JmDc2E",
  "key15": "2AMCmSVE4zaBBpJorz8SwBFqHjNruuPbgrreay2tuxYtk48LPCmcG3RHLVWWYZpSRUXFGdaWNcGitM8rFq6iVtkz",
  "key16": "2bK8sMDdqDVVZFrdw1VUoxD9vUFcD5aq2rKPkyQNxoa8iHKy4UEEmz3vvbpjpCAAyZ9BUZxSSKM7kfPwECpCghfR",
  "key17": "2whYYu5jQWMvacfShURijKTQiB3XYFBAGUA3HkwDaQ2qf7KadatiSPzH88v2i3PMRC2bBKjBv4QooqbEojCirzd",
  "key18": "3bhvT1EZqywDvyGKejBUpudC9Yb66De2QnCnLqVn7MwK6b6zgVv5C8cgt8j6AtP7zczmUVgG6HG2uZRwJ7hCTc9r",
  "key19": "c5tJcoGtzqR5KyBzenTTATKbaHWstc5MVZv61mnNQn2DLpVMZzkiCuRodzNSpy7pZA6A523BFEZyKHQSjWbDLbQ",
  "key20": "5h8EDcUbrVnT8ndumX4b3wfN4VcJCuTAFXSvWFLZsxhyx8ti8nkGQ7AeypiAbdbJTcNmENsNFZhovhmwN418DYtE",
  "key21": "4sSath4Y9hU7ARHj51fLzZuiQZbHEcBYPq2WgjtgTdhLCxQq5msmoJ1qz4CnewUvQPMz8Gy5amcawBETUk2uJY8y",
  "key22": "UgKjokwXDHn13gGmvDRY3vMmUhcxHvGm5a8JC3W2NDUy9LaZyNqQRoKRLiu2vVZfuvX8o1XgmZzbbAHDV7x7oGf",
  "key23": "oMmraSNREYXLjYNwQodmYKZcrdSW829bVPbJEg1pm5btQMdqbmLaFMas31H79kB33aWW6Bpjf6ESUjDDbV2h253",
  "key24": "4q9vd755X6wKZH8LVR33dqUTnTRGgu4XVGTWusqP2khy3GDsJcT5GHEC4SUw1faCTRM77t6Z22tj2sVW6BAX1obV",
  "key25": "p1vfNrVcE9taJ77XvXFjXLVZLzNH6Mne3joipRNpuyS6dWN5N59ighhC1vYLF5sjy2HN6Pph1hxQmfMMGSRfMd1",
  "key26": "ZFT3pPWrpE5FXHUfja13KRRMJsxT1vqRZvBEcBKuyWMBBPHrCCr4tNcV1bHEmvWuZJPf2mbxmtanScRcWaMNMMm",
  "key27": "y2VzVHCsky3XTWuUeqEXzpiz2ZTZ7cKgsE1QoxmKu7sP1kuGt24hNtsSV9uauB5L3DoPpSLsV7zB4gHGN7BMncp",
  "key28": "2Grfa2m32C5ijZEGeuMx8hwmPqxPAVFHMGwU393Mx661dGHe6ntM6V6GLDFMPrA2ZUiiC4bhBxhC4cDZZ6FNDzCD",
  "key29": "vApuYB9vzw15fDiMSzvVfHD51TA4XQDfRNHSWV3ksB56Mw4kGNqxAU8zSw28pHA7q6JMDixKqPkNr5ivRUnwaZb",
  "key30": "532qmZuRbKXtk5ETZioQpUAz7bwuo791QABgefkdGFR1UwvjbeBA3kgm5UJKNR5bSzoiBwwacjQo1M7fjg55Vhet",
  "key31": "x4NQmViwxRYdAJYimq227X1sLEeVdZpgHR8Tde1De8DDKsuNhmqLuXYCrW6hHx3xPMdbLi7ceKWpjfk3tenoksb",
  "key32": "5Kx8v4kB8EaWSxoebBwkLSpjJzrDH6GDbDgSRaHnQF7a6LrR1hpPKMJGfcnzgf523NC6xTkt8hgNUYpbBgFK49WR",
  "key33": "2ZHQp9DLaSmxPhVr8QvS4cx1Uu8p18r7HXs3hymcsrsLUCyxy37wU13c53S7STQXkYKM4S9ndaEg52ysktrMbfzX",
  "key34": "4pMFaZfPykrAamE7xH3L3SYCPxFBTBa7uq6yrMLdet2N9r75siCkicSKj9zHW2aSEJJwt6FQSpYViajdXY5pK619",
  "key35": "3vwidkLmU6JD3htpt69YP3JKVmcw4Z4jRUr79DjcXdfmB5NzRbzhPHNmVxcBYZqFbMVGfdgGjYJHR3LPuHbJPrUW",
  "key36": "EYAh21DscgJhNfAowFqduUckA8sF4tERe2MznaSkVZUybYBsgcXK5maB6emaeMPXrPwxSoE7pcUDQZBxr1HHYRp",
  "key37": "5Aggz3YY78RbaxCN1pf3yFkjZLWr7gGvxDFAXh11J29YeJeeSg5jHgEWxhoZexP98d2d2ucTY81UMNZjd22W6Ww7",
  "key38": "3d1emrqhrtG2HxcTgmq4eJwtvbrjLroWF3f7EtGycmNGdouSy1Etry3oVD5Q3nfJJCx3Aiz5QPXQ5JMJy23sWpME",
  "key39": "3iwphCteK6yxzfzULtx5XSbL4LZngEGj13fwnzyGfNbRZieeR5Eb7WPP3qtmwpfkzA4DG9mP3WFvJATgyDvWNgkh",
  "key40": "tx4S7fNr1EkjUjNcMW4Khf38Q7hQNhLyzMfquNQidHqszc3EZR1HL7ensL4rHzoYj7DybSzdp6QE2iSETZH3HVh",
  "key41": "4QR2NdjDh6nbU1BaepFGvVW2WGsdzKBMeFmHxhNP9NNaN73fHwFaZbKV6QuskrPUzRanwbrVRgh3zdVW4pSzJ842",
  "key42": "7Y76vR9wtKBgbTNnJKUkPnELhcVFnxvFYcfvGPXfheh7UMkd2FePUrPAcfpKBWs66Zu9VkwRXj4SNxsQsCF8iu8",
  "key43": "2bhA1Xpng3Eb1QDvhXxvQWG3DJzHVVYJGrEzuNVaeoUPimZbtRwrEkgxBF46bD411Dn1fnT5FPHTMhk71CCi214W",
  "key44": "2JRpzB2EHzFzbuySUVV37hk4YUyh5D4f4vVwgBnqgY8B9Mznpi727foXdA8Kzc5tTj7jYUvidrVQtJ7XB1Uy2hYf",
  "key45": "4i6ory8grfPra4GNfJ8HnKd1Lj6RLkXmUrDTk4csrsKyWSew9HCfg9pJmxWrtLUHri8nhKZQ24rTkdBxM26Cbr4w",
  "key46": "Fo7kYsdFDRNjpEUdg7Hfxp84on5CBAAy2pVQeH4KVzn39RnX7AcEvA8EAcgbuFdmyXCQ2LEBJD9RuDZWU8cG155",
  "key47": "3EGgCssbinqYBs4tYF1BAo1VYrnyQNjoTV6mKVpDaUsCbuWvGNHK9KFUcQWGVAqomAWg9xepcFcyb3hYxS5cJroa",
  "key48": "27hqFPAgkdW1HwRhZyDcQHYrJZR9f8hWMa4911uLNmNwxizdMGi6rTJ723grfp4tkoq1Y8Rvy77Cy7WFddUQ653c"
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
