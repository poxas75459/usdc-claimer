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
    "sqUjM82Q9UtgdW3ULyHvK3pQ5m62uFGLHWsQVn9ZJRm9BJ525aszF5phqxRaEudJLKZFvzoY62Bg7JSQSvnkxUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEcwmBTSB6GuaCxrVjBT3LEt3rjZXaShfEToWcqgLMotiWxwCDY9MSdZGnRW1fmx6waDonXVMhVRTmmUGzfUKJA",
  "key1": "27EPhYCE1RR6s4vR1qEVWB46xb3EX513MiUepdssSJwHTMMfdM7nrcmhiYWsyXfeKsEhRknicW4oPje9RCqVukwh",
  "key2": "654jinB1bjm4PbjGuBu5Hfw9aS3XKsd17ppvTW7f1h2Q7LHaisefHB7WNyoT8jYZMtmoiQKtdFZaASbBBfPv6RWs",
  "key3": "5a4ZotP2uz5T76TzruVmjx2mmsjEm2xsC494pi1cTnPUKKpTtUX7SwjCdrQNkxJBWgRaMRRJqAZPAS2tDY71yUmt",
  "key4": "5ZsDY617kWwZqHybHqXMw4PYjmWMckshQbap3x3HxKi9W4cmnvLcx2GZYhbQVYh83kKFGKeKaEiieQGPB3DyatMy",
  "key5": "2eeNhgTx5Z3BmBuYQ1DL5iFUNcgmFDNktDmUEYns35zSBJmoRNzoXJzgti67SaaZC5RxA8Udyz6a621xgVRgLk3j",
  "key6": "2vNnr74Cb4GgcUzAAqbU5dgEizdKopfncyUNUWJmS8A5HfjuqxLTN4HxZp72XiZKsJHBBURbD3GVqwak4DgyLhCv",
  "key7": "5GiaoMgGkfTk4qashU4u8xyu6Yc8AAJumLt9VmwkW23CNWpdM7Fimm5cbPFZBPUdM5ujitZRawWyqmMsmbFQUsRQ",
  "key8": "3kqRJxa9hmAeSdnN7igxn8y2PqadPZn5nF8kkP6RhMuYWLGV7p8soL27nVWGymXTzC2qzQJmQKAjKsg3tuBPVmxY",
  "key9": "4KBKdjTsDe7uh5RjCo4FspXKknERiGFzwjKthoGJWWTFU3JgiKMvqwXLtUP6VXsN5y6PZ6mQ8Jvizco6c5Lp4Hcd",
  "key10": "4TPcaGg2rYy2WqWAHqYUdTwXVSZ5ri6umJjz68qfMURAr4r19ixKPjkbDeZxV161mjEigdHiAbfJAg6G38A7edj",
  "key11": "4475MfDnsY9jUx9EmWKgm7nfMZDoaqYVsGz1mdhoWS1CzTkHtW7JFRREnWw14WWxW99JNmEV1vHatYJBPKqKrUGB",
  "key12": "4x1VF3bPALqDCcUrJCseK8fFN52QbPBUTaLNJuKNyMd5jANqQuU6oWSGcSoogj9nnUfUsLXR3MWT4yKRE8fR9uD6",
  "key13": "235EvdN3Y58E9wZHRxjQ2W2VHAraGfLEKJ7n54WNGFt3zwuTsnah4avci574YPPoR2ZbSuajuxXbDbPTkya3ejVF",
  "key14": "66UmmfQ6kxm3EmvJhvVebbAXJAXkmYnJUjrwUWEipj9i5KQGavWre2PWqPZ7izu2eE8kroW9HniSZrwWgocexWM6",
  "key15": "47wafJ2eXjJ7XoVn3oGaE6uYZEBm9qRsfKwXPcRMZmkNJK5YaLYKyaSBmwTt2X5nRBgJqhgoWgfQuWpVEXMQPBd1",
  "key16": "5ZNwRp8fWmAP8Qu9kEJj7WmVqAMizXQatp3fwMwdJHtNrhy19HhXm9TmpXssHNw4H3fG3ESKYfDdxEVWXAaxhzUh",
  "key17": "2tF7pER6KPVFZXy7RT5dNTMwQeTuL5cftfxzDghUrofhHyRAzgEdaQy6CD8zjmWKq2anQWhnvvZ478JtHL4d1j83",
  "key18": "4RMS8GhA9ZzqKbp64ZEnBRzWVGQV6uTjEev8gjuGTtUxQPyyBBHWtMdz4pFvNNPRXj6nj6ZmDEnqDLnbS3sMyD7d",
  "key19": "3JTrxhLCormAuLETFwTEgcX8zpMk6QFBULp3q3HJw3MmGAaihFqofPpzdPkxbuePHpztttg6RnWBwKsFMD3UvUT8",
  "key20": "WJifdeoaBFExvEFjpk59L1aXLrCqBSoK3JYjEHVJqMtbRZGqdM59bxd6tgvrqfJxndU9Kg7niWUBXPZT9uBp3Xx",
  "key21": "xQ3ExVUSAnGsbcJKvhtQq6UYFP7ihFPFAcg6w5Y4eUQDgfYGor6HfWPLbdZZTRnmo5W4irBGgTp8XEvZ92EEdL2",
  "key22": "42QMzxWG6EjqMjZPW1kqfyHHFN8MzpvoE8P88yEPACVCQZWEDow4eKfnC5K5ARSiB52j3GqA5UvLi7tSFTn7xrwz",
  "key23": "63CdavpDaJGeepbFEaLKLEgrbcZPEgEbCk2dxdChpVGE2Bgzn1ei5V8g7fSNRaKBsvZRWBvpfmtbpLB3MZmKWjD2",
  "key24": "JMa9FVE62cQzQUTgr8DhBMx587qNixcnXSUM2CDSDDBK98z56gPinp56Ge9rADSSP6Qin2S4YzRToGvKP6jdXhV",
  "key25": "3YCcJhENqBt4bb97XbxcFX8JTFcY4kt8ybvL3r5cVvzrBMKMzGnJzxceaAkF5sHUDJr6LgNuB4sYVyeBdrNcxP6M",
  "key26": "4hQjtsqVX2Kp4AEnceYHK5vHsSHx4gcXy8PSarcju6c6WpjVYo26BBmDnngaZb46VeVadT5yU2pDhcczGihpyWNF",
  "key27": "2XNNVvAWt2fc8prgNdnX8Kr9xvGYkSc7xLUrNb88aKKos56xH3wXYTEK2FGWUBDjfYqsAbUhnS1kWTczTbdC84S8",
  "key28": "2si7vZpGVJq8t9Ff61up995C9cG8djbHdwYP5kKjUEhzh8kKy5X3AgEAodt2rAMsaPDjJyY3Jre5tMAyeSVVuan8",
  "key29": "ujZa44sHcs4ESKzb2BLTTyZ9nNpckcfPwoPnfChxSDot4TPEEhmavPa7rtTrNBns71STsUB2TQJ8m8F6jEC9a3P",
  "key30": "3GFyNStyKfir3QFqrABy3xaGBm7atXw6aqdfq3ciy2SR4jAeuBXhP5iQBnnvemiJ8JRTzyZ4XzZrtASKePR529Jt",
  "key31": "4re6qnwMANLE6c4WKxnhXkp1tzWZ9DiMcUtQnwb3BmZohtxnGohnRdYtqGBCFks9QaPgkpmQY2B761HZ34KvBsLL",
  "key32": "5j2nmCdPavzJxErvef8RgBnBeq3Ft5e21pLXEV4pzVUndWbUwr4Eep478oCCFyBeLk7ftermj2dH7KvnVi6TNjfr",
  "key33": "3Gt52gqxx9g1bcFsN9sUSxsRHVCe497wRUFAKqxaSiWYBDfVLzQHCavvUXXe8hEGrcyJV74LB1XRpwXqWqMvzuhZ",
  "key34": "2FmwDqqXp5S5MGMmVrGx3LvepMniqq4e5jqDWDWMJK2Sk3WNc9Pgakc5it9u3MWXm8EEPZp7gFbD37qitTsPHdmV",
  "key35": "52z8KuA69VFgFBZQAVn78RytyK9nWHs6uCyv1NfZAiPfgkrRg6d3R1ncxP1DVxBXEFSznKnyAhukAqTmjknpo5pB",
  "key36": "3u59hmtUrQbxtu1ZmLL1DG1nKCs27sujaNkPoc1fCFpLQCt5cptDjLCMuJ23hwrsZjWzwVwgVv91Ewdwbs4h58EJ",
  "key37": "4UpF7oxNqjdqVQAMg3quYF43aG5K1VGUiQLtLqQkAJRBVJMfkvbFamohBgTYsK3oSn4GjvgWbvfwKMsyMVSE7ube",
  "key38": "5SnJrR3f9GR956BaKxv4oqoiQb8gFzTq4WtLGNnhDpRDi3hSf8mfMGeFRys3FcA8u9iZaMEZhAoC7oyeqn5xFebk",
  "key39": "5bt1KtF2Gsd4a7pN3H7ATnobDPmuRwA1hxMMUiAiGh9H1DK2vJ8iqTaUyib9HMu5FBeqcsauueRk37pwAFt3sjnZ",
  "key40": "5kXkA5hr3Q3KyB5Cv1UTmoxtUCGfmgzDPKnL64xfBvECSEi8uCF9ztFBstS5cg8bmL6E6cY2o8qXUxnYWU3EGgkz",
  "key41": "4LNUa2g4dD49Gybb1LCgwS4i5XwBQCXcUFiA8uWU7YGMw756mvChDqirntPq7jguS7oS6eMzNTYwfTnFaZMWKeRb",
  "key42": "2DoCzXYoZATCxuZpJewm58xbnZRsLfiUmaTAHwNcCLFsKA6Z3nijrYZKXmwjgF8fZ8bpBoKi1Mu7L7mLGsSC2aAN",
  "key43": "31JAomGGAAZkEethjsW5V8gk872rYcXVwfynp5bKeJFm7vYdeDuYVYoVv4GZTxxGhJbizAxh7y48pPsmwitsu3RP",
  "key44": "5faefkn4TfRxTrcjinApDbYiSb3VYrJZRZVdaRW4X4txqaztrHfMbqvzvK3iWvbhopSncPK1gwfnaGjKYtvnDSbj",
  "key45": "5rZ1SmxqaWDZRdXoMJR12AjG872TosfABaPJHHNqL11nGpBf3FVtbtSUQjJy7ArnG51RXsTojvEPRT4nEJhP14ei"
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
