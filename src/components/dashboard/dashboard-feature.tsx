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
    "32GTjrCDXjQgEm5duftJiXPGZMaMRbePVTzsFQLuFyK5TQj1bt8sQFfM6HZqkWWdBAs985JFCNZLoMJrNvzUBp4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhzGep7oZQ9mZ7yxxdjby5VyEdUN5q9DmC2R2vMa1mteR9LJkou6MZc165iDr6zgSwb7sibhsaXNsKcLebSY9Xc",
  "key1": "5XoKaVfnrBm3YEZqtTKwEqT2PwWJNi7oFSv7bms8Kh6JH1fAWrbAhL3R7xRZb6xkfgLSjuojGJfFQ3ZeeE4AHfdX",
  "key2": "2Q44DvTYQzqy3WXnDPD5oyRtayjBHDFfY1KURSAqLh8kHyLcSr87XdGFU7wG6MJenKbxpv7VGZJqHJVxMmp6igqp",
  "key3": "YGuXt8uNEwZrfmEUCCwHRFeWa7NeFrDJY3zonZiZ9oj4XY9t4dwbkJWY1ZeAMRSXsFjM24awR9bW3BaBzRTpUWC",
  "key4": "2wwpdWHLmQYDjTCKryZAiQcduNbEqVbr2UxhKrLSGtyDgvNSKnNw53ZBiUemwmb5aerdGB4Pz9WhEtpzipMXQUhh",
  "key5": "3F34E34t95MR1agUPAyHMsdtdXaq42QLq3ac7wsKEndfdtorhTCSv1t932hcYQVTjZe9WB7yNqcsPRD5dPhSMqZh",
  "key6": "217Nqxy1RZY7mig9ho7cZfm3Uj2YCe3Z6P5Lk7rAKfNcr83vHKds6ECbEzsLtaLZQEeE1t7nbmMGDBKwjXSsQ2D9",
  "key7": "5C3sRrHidifoCJBXUnJUF5fhQhMRFhAu1GLCis63JQ3K1dbNtGb5M6SfuSUgkEVENHG1z2ELhc2x7og6mjf55cJU",
  "key8": "47iSe5skK2VEAU3yodrz6QNxVYCp4yak2nwpVweptGo8NZ6Mgf8vYcc5DWC9U7gHznowaJ6CSF9UzaCRgghgerXd",
  "key9": "U3muxxMUmMEL1LnHyZgboNBWFuEMQnsJn9FBjfmpdbJ5v8PVLdKxnb4JEc67CMmRL25REcNNfahu5RJkExz5pDm",
  "key10": "5SXqQ8NPVR6TVYeDtK2fh8zrV8bFUgZuj7muxNqSEMJMRGqfp2WXCAcvyXNecchhwykbKmGfJTrP4B7L1TGSQvdH",
  "key11": "4WFutCzvaAWuoikhcW1JFkZTUPBzKnrpRT6PL4TpcjokyavNuMp9W3BDpZPWZSXAAiV7FPT9CU65dpcR3s8i81Ao",
  "key12": "5Dtk2MNdhaVmxRvyxATfrb44t85SyUSUihENEhkK8doqyCAv2TWvtdUabJjHwcA4xfpnTmfngNRscS23hgfUzWpH",
  "key13": "Bg6Ri8kopNHp2zzUskZYbQjWUFG6G6DbXSixwnN574aqqpkXv6TEb6stKLKZKrneM5mi6mX5khJLBLx1XucLxiw",
  "key14": "v1MFRNdzXryCoZQM9XWzZKVn211BMM1QarDUSuz3DjMANN4TTwgPTXqn1JNahnd2fuhguMaFLyaCEGeKkZyEg3j",
  "key15": "5wete6KpW83VRvX4PxyH72ix1wBBf3Dtp9cbSRXhSfFVKHdcGMSBHw5Qm8K1GSZfQn7are4EGcbdrcuD4LcgGSnC",
  "key16": "3pBFgB7tH79rFq6R23goWZMqZidABXA6XzK23eBWPQMw9i8LY2Xb5vh9W2BjDh89UcPzUonpEcUzrofryKsEGgrC",
  "key17": "4pAq9CZgs9E9hpaC6iKVUZpfZZC4CAymg7VGRaiUjxYcBd4zArLp64faBjFESpvsUcceS9Bf9DshDK4ijX1yWxeD",
  "key18": "5zXczQzE24z7Tgw1b39MdL8PQguyeWRtGBMouwcS73jg3CVCEce6b5VLeFKKmRTgEzbQ7fvsL3yDvaQbKMXjEPjM",
  "key19": "2ieK37z9Vf3iasqaeeDNQP8mGDaVUnZTEYXYbsKnWAoxaUT4EHM4vUTMfxYW6QvGSUnQeG5Y942wnZhJ1DUVCDw4",
  "key20": "TpePRQv1gKMbQpm4kTX4vthaLCbJALdMecyEKw24ZwuDYmKMXvMCCqBWXATXzv5qszT6SdFzUP8vXBPTaKBuERr",
  "key21": "AhAh3eFhuLBVJsLZQdBAzaByiFrMmaLmmEgTY5qTmfNziCWYYcsR9boU4JWKJCLvTfVqo8oxQXLbebMR3RBNZvz",
  "key22": "3z3TtHXKG6GK4FBSeuZ9HSZKg1cyDkM3ESphKyBkdCirsR2EazNRVvJjrSphaxwtE3desQxhPNU72hWjdRvweMWi",
  "key23": "44hmUS7o1yznnkimshxgmWKt1pV8WRS8iZBDRmq9Jk3KNYjWiicJWYDA9czfPAgY12rMYYhJ69B2RszrzbJDE1d7",
  "key24": "4Fhyt3uyXqSG9m27NSCC5JPSnRU9t3xEJFi4eDVZT9EtY8CHodCNAatg8jAfnXHc6sjqaEsCRHoxf2FgxSk2PRcD",
  "key25": "ZUFz4HKHwGjv5ohiCyh5oavbvSC7AEDSzUtbAx1yE985R28YFVRoGtPAAjy1MgNPBTMDHhkf5VmEDskqoMtdatz",
  "key26": "26V8eQNfjsSdRgtGBZWgkw449BSGWxzJ2KMSr5ANZ6gnWf7draLygSYJePfpseWWCDT2cPgM5oo3seD6ZXLKYZGS",
  "key27": "535Ankcsoqx61hQtaVQgcZazjwhxekkmTvEQLhwvJXRcTvvURncGvCmkmwFmA38K56PwHcvxvXAfykmDTpNiLGAs",
  "key28": "53s2QMWpbhGM74gj26A1ugcKEYmdeUvsW3nBPdiys7PQftzNYSAEKCo1yptZpSReDZKbDVo9rSLAdYgdT4F2UMMC",
  "key29": "LgVwn18zg3zhywKyiTXZFKrK2wazjVPBvUAb7xmZx92k3YhhRS5RacrrWzu3GzHQbVPMzdgtYTKVWbAGrrcTAoa",
  "key30": "2DEpn6PmuiACqmfiEJ7K1uuyiDNtwNmMZHuKdkkZNKf3G1zbeZzHzqHAPA4qDwTUVVoSvQMKNpqcxsqySdadud8e",
  "key31": "3Y4QMqxgmscJgRfbab7NJC7Fc8o4D4e4zdr2yvxuSs3iChbzdxWL2Ca5j1A9KbHYWTfNKdX1t2wZNBawpC3dZ95J",
  "key32": "4UTYhPWd18xkP8RvHD2GxQcLy5UNd7vfnJHUuupjKubQ9drvBZZUdEi7qCwd1NN9zXTMeaxDF7E2wguAKGpcYh9W",
  "key33": "4qmGFKB5moCUQo6SEVrUaJgiSy7n4MMGfByG3R7SZRHNGBRpEAzb2vYMDhy4AKZSvcuiwSNwfeJpEukvqtnmF7Bp",
  "key34": "3Pw86mMoSUbjzYRiutnpGVZcuPUiTTLidDmDAWZYqEgcGiW6C9WvNQRmKMYHyAG8Ys2U2cwR9fRzRajc6aAoypu",
  "key35": "4RHhDjVDa9aRTTGDm6iK79ryqjuCWkETwzRCTYhHaXUzBp3cLAcH8saYMxjdixgXguRGmNCawXsbavVmdWVZK12h",
  "key36": "HBJPo7LgLFxctffbDEjojqvxSGvPhggsYWAZoAjoUgzm9qjjuw26ycANphNuS6ZKXGvbwoX5jGtoK2KBhW7Mqb8",
  "key37": "4Bf8ojjjZSf7kTeM7e7bufRPB8KGeE1zxAwPGNCb5vkvedtmcNJc1BXHFkRyQpCVi9bFfcZFEhzDGkj5VdMb63zz",
  "key38": "56D9WDAyK42hB7WJEpJmhUNTAfoKPMAcFHaGdoEA7RruK1Jch7YEcUCsREXSe7LnzhqAMGmnV1KEfLwV1zeQD8gP",
  "key39": "4fYDn8VskntVNcujxmzfVbKh5rf4WS52pvnm7zHS2rVGEyRPLmVWUj1ApBmGmn49qbhpadFMcqvQcGb3gNCueje",
  "key40": "5D48dRKaWqJqKJ2tPHHhZ9Pm8EfUyVmtupZyNW8tQn3YnHFKwg39TgyKEEk1LPc96FfGM2noaKkQcbNDPRhSrEpL",
  "key41": "4P3CD2jFRhf637MC47m62RtpASD1vY81QeQf2WenPD75qF3wcaJCHCbeSPCiYRn9pQo7Auxa1HHhZF61eqC96HqN",
  "key42": "48LAsNbpcK4mJhuSXqqex2ZiaDwd4fwVwxwEK4hieR3FoKhNp7ggCxdidjaC8GWr9W695ZeRvVrACZEDAJfo2L6F",
  "key43": "2PyH17JWcPPEN1UzLMdsKFNJVTkSrnG6zVtypFNdWsFS9eQ1ewDax8jxCNuopE5UfM2rd4qRBmtyL83RACnF1Ri"
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
