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
    "2HV2ss5RSBcmJo5BUneSkMoLfFCbdHHx6JSR4GpT8RAo4M43t13gWxbdtYDzL2KBgC4DNs5JTsNfnYS7MzJFwoXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqeTiStkY6yZmzZvQtRbqnZBWQYXcQKagwUceUWHdDVNj8wMG12BgZSkYp1jKVvqr1A7koM4krNFfyTK3aTUxF",
  "key1": "3gzWSoo9u6TRcUrtxix6A7hXqtRdFzoVQU7H2fexWSc6ECanPrySF3pPbrR5VNgrg5i8Dt8nAHAnMCDXvqVHSiqC",
  "key2": "3A5a8w72tvrcy6cNKxzA6Tn7tvgihjyoEAuuGscGrTZm6JJbtkC6hcH1b6L8QeM2w1P45kS3rBnB4Rv6bu49Hzqt",
  "key3": "5n5qVtGQBNfDkCxdxwyVVVMz5mmjG7awT97vNqoDCiwcaRzpTsoignACFDArxTsSUc4i87wTPScbY4t4bRprjXwU",
  "key4": "4YeVcgmafT38w9Ljje5dH3LYSLAyToiGtsccyHeqFQwW9pkX663RkASf9TdsVoVXjSiNUQzf5YVZrENgGc3nkg9h",
  "key5": "mmhagku74sWx1oeQx18x78vocfUzuKY7Qtgvq39MUrBv9DU2XFDdrFsrQLCPV578uPvbyzoLuUcfzJdF6f9ATtX",
  "key6": "2kqXQCVTcnuDdprUuD7bEmnHxNHVkE4oTatNEQeyY1nYW4iKTcuGBjSuK1CN6PPqgihPYN1uNuZ6UdFM1K2k28rA",
  "key7": "4p6gw1KaFAiikQtcsrpbD74xuB3va5TkME8SLjfWkhw6wk794vLdKGVvnFstBVKzeT99PTY1qqCm5MYE4nxPsBPf",
  "key8": "qv99TPvPWW6Yww13ouRMSJULS9RZyzcj2zVBEJ5xXi5VwSQGQUNPJeKiRaHz1RBq6pQ2TyMXX6mnQsFvt1g5GQh",
  "key9": "2gDgAr593wi2LuJpSR8tNdgdgNvsggPxbQsccLsF2iVoMe9Finq4hgueVsGB22JtRSnPmwv4uCb5N571kE8xEuqN",
  "key10": "3daqF6hy6SmgYesvRY9vPKuKJUVJfGELH9jVxiiVrG37Qzy39PRD63pj9VaEw6cgoL1KY5TEyEgV5eoxuR7WMxDS",
  "key11": "59oxdjA9jaw6XyFAgAE6dpkyoYApcFJbW3iLoAxc88z11Gi5dAkENY5QyNaLKWQQKQeK8oQxFuSghzUxyLYj77vD",
  "key12": "33aNL6WFHN4RVJ3uDAD236P3tzTztQ56YkNZJv7ihjvEqe22b6tfF9MEmNpwToqy7DRS4BEgUknqceBfhH53BrWb",
  "key13": "5XLpujic5nzDwUAZChqQkRMNRV3wNF6DRboTrpMiz4HifNojSzEsJJPA2Ttjd4Ugw8EkW4ApTEcTzY4gXzsRgb9m",
  "key14": "4P8L5uDBej2DQhF2dP4ZZXhDLgxmesAK6yqNhmtWNTzmJfEQDebd2CkDoEZnhMYU8U2fLzr27jTfvQeSeTiJJEP7",
  "key15": "5ewyh7osuNDnpzAE62y1iBmwNnRK4H7XV9iS9soosTp1mRi1SMV3CKxRQxRJP1za8T9FpCPPmhHfPFPwGTcn9Fwd",
  "key16": "5rvAmNhwVfHgC135sMpsafdgPdbNgH4k6zMCzUAHfRJhdeDa92Pe7fHh37vTqUPZGJ5ZhER6xX5WzDpEBqKai3SH",
  "key17": "3eNv5PD63x2zpJdBwb2VRoVp5fDy8P3jhXrH2rBt871yooxY1AqGxQWoPwoYx3bjCdgHJW2sTE9ZCgUcDcr2aimR",
  "key18": "4izCrj2f9GS1orpqEELn2p85DW9EmeCyxqAyUf9N5f5hfnYF6pTbZG5MiK3xi3MFeSeVKQFB8DWZ8hCUWokBdRXK",
  "key19": "F1ZZarCNuYejDGxUQuferG9Li7R82nsME2kbKBp6EoUvFmhxRGCzaowtz52oSqMp72jEkRZap2Hf5s6p5Xf3B4f",
  "key20": "3tYrKD9QZJLRkHxziA7i23jB7rHiLoakNNsXDTZqGoP9pGjHjzCitpGL95YzAVnEVBPGwVm6U8se2d7do4wLv5JR",
  "key21": "2wG4wvtuZgfWwpgquuZSPjEPP7ve9Q6yciKbqszDx3XVVfhnQwwxcJVS91mjdrdYKtJ5NEJsEACi1VKS6fWusnX6",
  "key22": "5pMMNbyFzypHZHqLTZ71jmzTPFXYLcN6CzgCjmTmCBGh1DZmAT3DWCgNtv9uPBNVispzG7batF5uKzyegJV9zrib",
  "key23": "2cBGgXMBmcbHJSdtDXR3gzaPck9d64x2cceGRfztn5NoAS3TNDDWKSZp3zKck4kd4yzCAt3cTr9CbMfNGm2mB4Yg",
  "key24": "iJGhq4Y6jy3LLxrpZeEPb75cbHdtnU27HMDhCzLykkiVez5Q41D7P8qAv97ysAYWYMAosEiEr8RpR7UKPe2iumt",
  "key25": "3SoAiR7B2YCW9Se5v1XTTwLVDQNLRPjnAa86GpCc25a1RhKNAC6PNE8YT4Lu1nW5HSEqmxSuT5ikKZxgoFiUfMm",
  "key26": "mCYaKjYNfF8WiHa3aP8fJa8Spj8L7wCAYeTkk67fUonHPBZjkqF4v6Fq8ELiCB1KwnWndHZV9UvUSAAVyUVLidF",
  "key27": "ju1cBW7DrjSECFUFuHJ8ehY8rgSgB1J88DZgqUKPrUmziJCzVZzZPvCh5BRRVpBHxcPARE3n6ng5kXBt4X8q5Q5",
  "key28": "2Uw9KgveqgiuGqiSiBXHYhPVZxiB9LonkHhLnDXiWfHNyyLYNeBYdZFUY4PHAe6TJEu9vDA4DHvH2VRgvMMQraui",
  "key29": "65rxRDp8m8dqjXayr25KS1YnaiCukjPaX8rnXmQYcfc7qCizoZV2UTB7MkyEsLPUCnGTDcNZnYAesSGChf7ioHRV",
  "key30": "4RmUjP7mXSJTJy6QCBMhwNbuz5fZW7UcxXXx7jEcgxSUTcWbwDWmG1wE1nngU7erxtwVoCBavopGHP4mowk5MAnf",
  "key31": "63GXsTfsCyuzn3amwn395ZqwNNSshUjgg9e5bqcvRm4yCxEDiar93reFqrguMf7jTAZNrR7X61Cb8odwKxvGETBi",
  "key32": "2NHE8kEUxmHDJJrjDVaKXkPPqkdyNo88hBy8M9hNivgbFWBF2ArHo7inNWEW7fPZ2rn6pra5BQqGHwU8VdnrFsoD",
  "key33": "3jsYikyG3ZufDAubBrkLmNfiYLUwGJcT2fCFjKEbU7MLCWprmksj9DWXJ2fxndwCqn9s3Tqyu3HZs6SecA7rpDBu",
  "key34": "3pv7JUSoc5jvXE6xm7itBPJscQkoUhxqAjn72dEpFKxVeTVYDvAzZM54n12wWPqdjZTkjsuvDzUSExiScLbMFqSe",
  "key35": "4EMbjFQ3TUUbjcVbQUSxcp9mQdZ6DJ34Si2tquxLf3qBupJrPZrdu97x4G5CLRRW5cLA9ztgXqjNSzH4wiApJ3ef"
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
