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
    "4h6Y1wH7f9j3s9tCFoEZvDX9nKNpAcV1w7m3yYorYE1kkfnnhKevPQz7khNr3r4XQQ6wGkkVVffwt69MqoDEn97W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSpEQRRsxRXfEfYQM1JWeGxxsh7iDGm6sYopVTKnXgwxUqhapVhG3zkq8gQuEtgVRNyoWgXKxaKMbuy4BNXAfh4",
  "key1": "5NmBjjcFQjJ7isL3PEGWhtN7e9r64Hy1cDAZp8K1chRfnxn8R4Pgw6fostq17PETd42fg3YK8szRiqkX3uVTW47z",
  "key2": "2D8RWehd2YoWsNNGfKFxLuAz6XdcQx4iJShFmoxEvAME4GLJAme193NL5ZuXjsdhw4AkN8ZPYsTd1zXd8aigCtU4",
  "key3": "4ENB8mQSLDJPfqgvBr9qQnt79g7VRk3BcnGViw5mAwFUYxEvxq7tq3QVBdDq7mnGtk8LECYRaZ99SqPxf8aWWQYp",
  "key4": "2r3c5WYqZP4ZhdBsZReabkoB66gvJQPDzkduvxerxgR7AcKd8wZPZxjraQERHv5avDfoCuxUCsvihtA5kicDZhMi",
  "key5": "3bv2og2HgrfPkF3T5u2eLNBM6Ach2fFHsJY1zMikFcUNrWjCj365hVQXuLy2ZNUUSge4Cm6b4DE42AJrP1E4uCbW",
  "key6": "2d16NUupQhb8YyMUF4YFrSQ7bVobhw19MQGafMFrY1wDXCVL7CCB12aTJcmhPSQPELkyGXo46MHvR735RFGb3Sn9",
  "key7": "5UUP6jrUGN9HBhN5TmsBUMYuWBYTeu9dk22QKU4jv5M9t4X2aw1kdPkWvyMRs3kNzCutxnk9n86zd22dVBcbkqB2",
  "key8": "3tv5enVqZyv2mxfji4Utr9k3RG9fbRxvX3LJDbBQxpZau2MVNasDsyYJX14SLtJ8p9G1YbkquJhvdz4NkywLcP2s",
  "key9": "4Jq2CqhUjvA58pECGPYn5G3534UAQHRevp2utbkpfVXikMeeuJ8NdebJiUbBcjcLpQy7pQDnsj3vXbVERjFbVno5",
  "key10": "5ZjXtQxsh8UUvNy3kX97zDVDLnL9k19MUS2cqg7M2BK2F5PZB5xXaSS24cg5n2wndvZkC1FE9HoVoJWMLNK2QcbQ",
  "key11": "VkvqspFZePzJpY6jyWbQpuBKGwHGF1mzHsDvp9wUkp3B4yVqz7Xdfdtt1Bxtzzo2rhvi7VQ4DwZVSQHEb6jffzb",
  "key12": "2odRy1ejS37sgwxmyGJkQHKPBCw8TFeyn9dMWha7tF5d1b5nz5nJdgZRadKr3EYnYkxJucFxpStocWRpmm999qK3",
  "key13": "2wDiuYGQvqtdyTi7S41J9GWVFT9oszYA2UvSU6uP5eqLL2fsFWWcHptduv6BxATDj6Un3FfvjcM5CKnjhCFSSQoc",
  "key14": "5gQLwyoXRhuPzuZu83UncDadQVcXUZAR8Eo6B9GVdnyVt1WTe1UvB2R9FkW86PtF8FLn95kpYZwKeqkVDJSA8Cda",
  "key15": "Zxf5axdRgAPztYvh7vjL6XZ3CsJ2gYRiETCubLgYcTVZTJQvTGCYa7zLG8USkCgNs7mKy1qdtR3aijpEq1jSYed",
  "key16": "Cp8VSa8NPtq495rQw9hT2BW5xnBzUhXsbeoAZomECHFzPwL69c3ifGmkkpYNAtmiNNJAXQQf6xjAJjUYRFo6pVc",
  "key17": "JwsegGmiqsaNECFbbk5HakjaG3ptTc7hMzu1mgSxTFyGypdWyZd4w4gn64Np5jSLVWY3YfxtnosofZEoy3qs3Dh",
  "key18": "4sq7ZFXSvEgjYxGThhUqXRiCfQXnjFdp46mb8SrbP5qmAfwe1QFWdaUxqAChZLyjQ5Lqg7wLDefJ36gGPvtEq9gB",
  "key19": "3FNUZXkNeJbeJtZtF8MxhigGnQVsvQGKGEEEYtNbf4HobhdiXCE9XcNQRRRqgpMBBMREZUrtzUzH8GU4EWJ9YM6D",
  "key20": "xY8LpU7RevCCMGHJZ1z2f8JWtpjVH1cFaLmqAf1obW7cq3R6DB6vJ8YYWU6ogyoMtaSVweFsAPGzBKX2KGT8nam",
  "key21": "356QmsbiFBXvVY8cGrR3cfAHVSW5LsKDQ8G3GM32JkurAcygvA69vTk7Wj1yAdwNEc2r2skSAVrX34Rmm8uw4WqZ",
  "key22": "2BWLYaq4V5oPx5ezy3dxc8BA6MNiGMnamfsRAzfog8vQhrFreq6CtvfoP7n9K9QdmZsLaPoHqXkioi9MZLBSvjL6",
  "key23": "498ZvsPfL3e36TfLC1EjajLEojtskRarXY1LDUEhfs3QiTyiVCkkK4faiXhhShWw3NHey6XtmaMpmMfBLXKxjqwb",
  "key24": "9p8czjLhJ7D4mjkhVjRD7SeYhycftpk3D8pKLEw7RASgRCMdTUXfnBqNJY9rNf4i16PHxmnRUogcqYnG7x7xhRm",
  "key25": "2HQhHrZt8AUJSFwA9UZGN7GqzYygSFXUu7yskQopqj5TDqUYF1rK4PDRD5mD7AKhCJPD5cY1KerJey4sdhsFQvCm",
  "key26": "5pTZyS6DPFtAZKDTG1a5nh2oJbwEdBqJVRFGjg9ADcRgJmWP9SBjUQAMofKzFF1t56ubejcZydArUKsWskqV4a4M",
  "key27": "XGyoq3E8RRCMXgCX78GxWsC8dsmRturi8UUfcqTrSfkmAhZWTbuPCEZ3it7zPUWhuwmzptfd2Z7URFQNvtnRk5w",
  "key28": "28HwmtCEvnp1K8b42upLt2sN7LfVtYkyNjT8XCp6ekkJjZfi3DWo2Joy92c5CtDh3MHV8UhBhiZU8NRBrX2EYJxs",
  "key29": "287LTx5dSJ4riymYdUUS9nBdwdMBn82676H9asSzNK8hH2A4DvZUtTQspfWiGUycTiNSuyLoNrtZa2LREtem1Zem",
  "key30": "3HwThHFbTiGsY8R3qaiManPr91edq93X1KRw49fuFDkXwDw52H3peKC4QsWiVJ4NzzTL1nK11TiZ9apGV5vjgXGp",
  "key31": "4t1rodyozabXmzVQdWUPLRhfELjeVgWayJZRuLhKrhNDVtFLGRGJy8o4MbenEV36QtgVzVXFUtNKcSQ3H6UpcEEA",
  "key32": "64hXazyqgBj1QLrrmkB6WvWRst53Qy5v1oLgs7gdDV1B4zTFb51ZuS4XMgn3gvqUZaLDgQqcgiFFwP21o1rLLKPZ",
  "key33": "29CfEJqARzruYrTnEL5pXMa2rgg9s351sbPgWq8fVLwD9P1yxo4vCqZ5EYh3w8NXJtdwAaho4oBW8aGpVVH5b3bo",
  "key34": "24R3v5wEg51yKaJtLsqFeRk8Cfgm28nqDcztMKybUvisDY4njQv9tuPH4YmWWomy8g2NGCCMtM46hedrMWGd2nwi",
  "key35": "2GZ5mdTbs5ybQMBVmU1Eh2xLVHujDaMD6X1vPXG6vAcF9PiMHKeLBrWfMrDHRyu92B4HXyYxB5U1Nmy58iDPRcng",
  "key36": "HkqYc9PPL1dzjkHB6Zdj8v3MaHcPSNtj2egPkgrw7NjXAWHzfqVyAkqA68mkT59AR8JAB7eFAad8FkSA9PcpXwB",
  "key37": "5JL51nRNQtSMTGegrQ1EdhX4VpipDZCM4LG3DCHWbjF6V7JmCF5rCoGmW8TmzL9d8jMdNuJnVmfSzsbjnnrpgDQL",
  "key38": "tiLSJG3hN6BQn5cu2yrFAwAFRLiE7FqAJy9TWe6fd8pdAGbWkV9u7qEHtGkdqmbgbBr7Y8D4S8gU6UhtPd5VzVr",
  "key39": "5JwUhTE1P3P6S5RnkVPR85ydXVfGFPRUqh35uezkwmZ5BQuHF8vVk995BCNLhkVz91edUCrZENWyD4XPWoVaMeK5",
  "key40": "3ZAVbq8HrJZdkSG7wkAYjUX74CW13uUxrkPiNdXhj2W9hWDAbYe1Zrvzt75SDdUPnvJSLNuWhDGKRYpm2YzfdqE4"
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
