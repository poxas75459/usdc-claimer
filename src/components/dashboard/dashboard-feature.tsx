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
    "66LFRQ13M2ZHoFrJK4RbpbwPsCCMYU7CFWeNx77L44ZXkf1YpJRnGzJ4djpmSsD7L6xX7XqCiWXL3KNcT94gBHiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukmnRF7Uq4aSwKnxRiUSZvZcmqtHXyq5U65oi6yRRkufZYGXufKQETPMAfbhW2ourg3twcJDekXDoC7G4ABpvxa",
  "key1": "teY4atsjMGB328ipe5Fg84TT5hDN8i4puww6xuzdD9CY764i9CpPbHK4N6BZnzHJj6nVGT3V9KFWV83i9u5sdZR",
  "key2": "3ti2bt4kAYnf4gbBkstZywtSjVF78gAYNktAiGXU4Xp2ePYMsBMJqNdvdkMhT5LTyv2P4B6ctABGsbWJtMPCSFei",
  "key3": "yPuKeMaLaMeCMSxj9VLMDzNhPsfdjpunNgvs14n6Z6yPXUJkS8HiV3gALDfjhCn7qD7F62RXPinHmPJengeNFpW",
  "key4": "36vPmXFr4Sxr9WdAGKcXpv8cYTLiqVXruCfXyn3Xc7JXjLenA4D7BMWNMQtaGMnnKhQemXjdKVXMbtze76MkKZa8",
  "key5": "432edLsdNeVaNBP9ya4989hr8k5NDDTVh31MQ9HfgaZo7FdpcHzK9CnvaVxwnn9gxzpszeHNyzH2na16JyMYTYM2",
  "key6": "61Z5CnioZEhtbmbh6P4tviPYghxXhi46tg9sqqvS1SUz4KvKY9TwQUTHcZ2J8zGhbvJq2U26Smd94BQLFeCZYSXH",
  "key7": "5dsdRhE6R8F3B1uQU2HcQZaFcHGF5GMGvqxL8KHUg2fhmvFs9npf5a4QVCnDNaHcYVRo4StvoaQEjwhNAgi93pLo",
  "key8": "2NR2qahxzzu576FjhbU7cqhxyfPzvgburNwvLs87iSeNxrxM33hBPXhqEFa3aQxWogECucVBPRbo1hTB3jpjGsVq",
  "key9": "Tog3krGcH6pBr5Dab7nFuU5T3g1PNvKnVyZPMSFFq4E6dMgtTBYrA3BVLATrCVcSRrLqqA5b96uiCjaTktaiTXq",
  "key10": "4syYDz1Eyh2Ee3NeLchetawraxwEKKyTtZwcivNYP8XH8qqTHm4fv5n5YjTYLVvn2MVBzKy3oNouokJEGFuVu9CD",
  "key11": "zbsAzmrksh8ckq1DZUTGLkrLcmiP3ay1aXUhDAVjJ9xrWi472CcTEvGsttzP6Jen47ZoUmzuDaAQkYboospxBTs",
  "key12": "5j1kMnQf69RXG6Yfs7zT8wUS1JWfJXsJk91sQLyBbsVXpUJgcYDZrcsDLdaZQoKBft1duBgVdocc9RD7KcviAmZe",
  "key13": "uf3kTuaorhCtpVdXkBXSbCrZYx7Hyx73M3UwAGuwZyFhjLBoqFCTNm7AWW473QR5yRC7qpRwVjiBDCYj7HMSvEf",
  "key14": "4xT7sHvBMFAyJcLo44KheV2oYFjyjtjrEHQkLZ1szRk9jK5mg9mTtdiAQaargxYESFtU8er7UKbg8tpHsvD2b44Z",
  "key15": "5LMPuDooAAjpbuT3aMeP5STpPovWzqai7vQeKKHgLCwz4z9Ke2XUMR1ahJnmU9LtyQgNKKzhu38HsGCnJ3mguLMy",
  "key16": "2BdtNHibNGVPyZ5Hiys5N1tWFUyKQAdYm1oTcvWdWgzsjjZHNNHJcwSTTJFRJJorWZoq6kgEcdyXDa3E9nZjSHMA",
  "key17": "3xS9q3A6SMFtCJ1HcB6R1LPWg4hkvxkqzMVaiv2N3Xgmk4xDXyME1bLRepPnRAyAkRq2WHZsQ6q9vuAoUnha4RHV",
  "key18": "3FX3vBF5xEEp9qJCq4FcyQryT674TbBKSwNH5qUuf2Kz4iufooQW1wiC7NSBEdR1cxrgmAbnLwDWFeZj9Jk95DDV",
  "key19": "42W89Qx2DrfxeL9Qwh8XQt8WXuwzXdqn1eGfXS5TbiqoBHXnBy1M6UV2n45L287fhQZXys2wwnyo5pnryJ7Y9o76",
  "key20": "2c4zgKwuZNwxqMCCSErarJr9geQitUdDAc15ofSfXSiPMUd6AujVFGqvYPmywvR7FgVmnwuoG7X4Wy6wkPBjcMrU",
  "key21": "5oJy1iLozyh5KhtUK2M3movX8wUP1BUNHZo9u7TBPm1ax73hDJYF6ynqnfceGFhjLkg8ELyKAC3Y2z8ZZXzXamNQ",
  "key22": "AFDFDZPrCDqzJXtDPUrroxLc53AzcVwN5ejGw3awPatH258GJrE1yXBQrJdWd1bW8LMopH93ppkFqcCRNkMVNh8",
  "key23": "B2m3fcJL8eTJyYCsDXY5rU5rf3txx6gSM9twTfZqGbmB8YVm9DxoHBfbp2z1N3ZYdmdzPa3tjM36H5Czv3aYBTj",
  "key24": "47Vy2RqmRL9HLJMHDRzfbcC26JBjWmDQtLNN8vLm9D7hJSoiNhNnp2aL418nz1zXyBGseeThvBLypLg2MCmFfWRy",
  "key25": "4yXebzdwvVP2Z5aAfCUcsHSMuSTxXRhtuVWphMzWZfJFJy4K6LsCrcDoKxHW8j3PRRw3RaDpe9V8R6C8tTJQTz1b",
  "key26": "2ya4JfANFv22Qg5BwTpjHNtEELH4wdbnURMmDgqi376C4SA9AByBg6oXqKD48oqUsbBWxgjaTfpToyf6zd4StYUe",
  "key27": "429uhfFrUNL8a4By2RYpWWFEMnUJPn9ScsRtURJzH4qooMgapnhMmEkKH8D6BDPg8FVxzve4iLAfBLKrMTUdX33y"
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
