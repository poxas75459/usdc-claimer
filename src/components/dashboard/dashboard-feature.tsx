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
    "5ZQTBsfrKXnoDcUtahywTzFnf35CLhXNzkVjWTxcqxTLuUfW9kA8DUZFLwu3JbXBgLV5zkefyAXVP7DfjmyrXEHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJLVVohfgvFp9hqC5oEDhe29Hto5ASceBBwzmn9DbkMMTtZtfpQwQq1tTi9ZNXc3qV7ap5Th2szFoXHraa3nNGQ",
  "key1": "4R2bTaaih4s2yPrg3uEtLsHQdDohhj6UYQwTGRYu6BtXfuJh3fauP8GAiriPwjTGsYdpE5otstDKsFbwLsmM9dCy",
  "key2": "ZKir5eUeBe2w96UJxZG4Fj1W4FesdbNqroVVwsiiqBDDVr9YQS3tb8wGng7khhrwz2X5Prh5fFfbrUVPUGSh4ei",
  "key3": "66QxQbDMucEqeM1Zw8L8djcm7fJRcStZibff1P82oAJSY4LTmnm3c8c7JzyVsEcvViYLNuwvGko7U21DQDKGvH4o",
  "key4": "4TXo9DM4X3pcnoXHjjWi8yxAE74WqjsEG6VjKzSDXyeMjokVCUtzvCG1NVDyKfN2a4Pidj2f2LGpzVsFRasP3xkk",
  "key5": "7zn6aGZK5LnKr55WagZFPryqrsxAfUKz1amPg2UacnrTWSQ7akxTdP1rfp5CZnK8vADcFDPZASYbDUHH152aRrq",
  "key6": "3S1SFF55qSUT8ifg6n3SX3fW6fe291FMaH3JyGM3Yf82mRr8FLEV9hphwnfLQeC3BTgxDJtX61AAvJXTYPQVui7n",
  "key7": "hS5pHDHYhdxg26GW4VT8Nb2beFNoUu25VS2wUuQLhNUTddEmcPGUZdjoaevSNDZXugfcNvzdSAaoB7ZZQphi7PW",
  "key8": "555KYFbeEjJ7wrqoN7b6cVaAdocPDK15EE8E8XC4pkAhTbPH5WhCgF28xwCrPMCGhUNP3Y3XAJugSWFzKtU4JiZH",
  "key9": "4E9858zLVLXsNTCZRSqURAKqV549eezwH32ushKvGbUaEg7p7xaKyW2KrVWpM87YbUqHbnCu82DfaGySPkxcVLE2",
  "key10": "3sPN8XFGUDrZXMRDWgp6XR5wejrfdkz2NT3Kw6nn29ekSjfKfRo4LfQXDPcYwjPMbGedFrBUXxHHkisNDhKTvoS6",
  "key11": "5Sa44AwFWevLVFU2jGiLTnErx55JZSh3P74xc82jDwhj4cwey7SMHRxEwZuuunFCeNECf6obt8cqUiFAN1iFKERJ",
  "key12": "4XEptxtfGZFaGrcPVUZm1Vb5reJnVfL2qTbuC4RX9nhZq6EWdurSoMiXLWr8fmqUUCCDX4xw6a5n3s3sXKPHikGn",
  "key13": "3421y4S1EQiszLQV9eJX6BBmKfKv2M59pGwXbtGvDkeoaoDPiG9CT9PdTRWW3PLoAKZukj7A2xWYLxshiy6eMVU5",
  "key14": "29yzU4MZY8Sis4NUz4RqtmLmehbiNBxc61MY3BDX21vJ6ypAaF79kyTGB6qygNdgnwBRaRg1pHsEpB5cpVJ28V5w",
  "key15": "2weTpQHHiFifc32U8QmWHszwLYvKPjPDoVwQ3DNfDs69hcjH7w3hf3Xrzgj3NkycqVMZaTnUXkczp7fsga83WoXo",
  "key16": "3pfxmRvw32vdab5p1tJL5WCgphKH6g5mei3CKrd73yiqfz37r8tsdcP77pS4jH1mjyhY12X29hSgyRbDRnuJw1t8",
  "key17": "2eXEB5BiMTsFjepSFXu6YuaHMEFNie7dL62vobd61V3vM44EoZFo4dzczcjzzkLtm4eTczCVBu7FJu9Kydfwfc6U",
  "key18": "vTygNjuLBYA8rkjobCgcdLyouwdnsMWgNHsrSm5PF14LhCAhYVrxEYXxZuCwVqkacBRWS1E8aCGqDMG5aSsvUxp",
  "key19": "4wyXAWYLJqBjJSn918s4Z7NvH9gbjWnj1W6ybdLABYEbaz5nLqXYjohSsUUxrK4bWwo6jxjFkwMpNLVoai8L6cqS",
  "key20": "3aEDVKqb4X3rbCfahK6UN6JpF2xv6Br2hbowowfonh36FrmFh4CDq2vvbRQjqMfxqzyrkoWb8i8mqUVhE3CvUUGY",
  "key21": "KrPtyCLA5454vZ9Hokuyk8HVQbrwJ9w3qufeB6SfWBS6AxpfbKc9BB15LuFR6KLMZJ75eWxTZRD5TPYW7g7EEnu",
  "key22": "4jSi9y754xQCfdhVZYKenjqYMS1biYWxNEWUCRi4T3BgrGAM8RHNG7mvRshy55SfLFhqzSLn1zNBhyR13rXTSzRt",
  "key23": "2NR9Yc1B17QSxCkdJVRVGLjvNWKt9ue7ma7ZkEeknr3bqs5pUjA413Hcx2weATdanprsqLaHrYA9KADiraMiNkvx",
  "key24": "5ijctfRQ1LX8fCUM2M2JmBVhhQBx6eL78TyKriHgPUJDswRJFqzTTErGi1pHKBpw3THTFdi9s315Bd6ZKpy49ptK",
  "key25": "3GuGMJZQTxXvds4m22xfgUxh3n1E2AA2PsHXyaGxLZ6hrwqtxk1fjL4WHkazffFYVuMsUt2mAjkzeVi2usMLYZtN",
  "key26": "3CY7tqgj4jN6TFnGyu6gzyu43tUhXkZHGKdBqxsM8Vh4oNuzba5HsBJAHojYbM9b5XFTR8diDysoUYGumGmFgj3T",
  "key27": "47rEcXbp5wZ2kZFmrdxASjyL21vuVm4hFfwrPfv6pEYTwJTfMx5YWnaPtZCu1QxTM8Trkknjjtn88V7zJwKp87qf",
  "key28": "3XyE1hRo4hKmfjPdmhkBHXrTALnAiF6MiusJjZmGo4ZqSFoSDRC1ysocpUzgYMxUYVaLSJfFiw6GYdp95XdPfhdM",
  "key29": "49uynZdBUoEWbZmKxBT5dcwiVAW7hG8FzwcqaAXpNhEzGxcxyiv78qsvYTYZdQ51281WDaYXc7jgXEGotcDnKfHo",
  "key30": "2E3u6vF7SifxxDnXThyF3QFPaVqqsJyuSEsLDr1G5rSurbwRg6JaMqrFycEjXdVepMuy4GZHRSiLeTcWbEgXYyJo",
  "key31": "4VDdedArg4VXruA3W28WreLJjBosVR6Sv2AjwGC4gpAzbXnF4zUpiujeRRZ1nVugtBNodcJ9tDMjkuWAU1rz9ogz",
  "key32": "5oDkWbsd1uwPDkhSJBTWpF4gZtGQDoTuwEbdGYWKGBVdjTKW33RhFM8J6T6H6D5JwpPiP8ADAzZs3irR4ezdJ3Qk",
  "key33": "2YCEbdS6ZN2UCwg9ronQzS4A9J2gPN73PUuNgb6cW1QJ7BEoFioLFQAs7jWb1wNhKWzCdc9xBCoe92CEa42eGa7a",
  "key34": "54vncArydwT3hMSDA9wE6x55Azf3b2zWaETvrxqBgRdwgDMn3eTAT1GMpXVyipNkWLjH1wAowSjoNJDg67wM3e4N",
  "key35": "bydyFuqoaQ6YR8JvgfYGq8Y5FKyHxNetyHCodz5JMT7Grw8SSZz18YGF2DHDMRyjVk8WhiPQxo6eHG6VV2Wgj4m",
  "key36": "3tzg2HqVgRXPnRKKBej1JnggVo9r3MUXHXDmAnMm33Hy6Zpy3TkMGyJeTZ4DXy5cUwWvrMWpvGT8jXXQn7HePLfY",
  "key37": "3M7uhDAaBycMtb78LH5vd8dGgwzNpPuGw6d7cCprLdURAXtcYeS1xUdyJmjj3vkT5tD7vLgoVcnGh76ASh26h9HP",
  "key38": "5w4nHseoUMwGxFAnyVzBVLjawnavmf7sEyyt2sdD1heV6QFGYAw5YRKEazV5ZJS9Yg7HLzQdJchkGh76bbRX3U26",
  "key39": "5ohBHDYB4piaW3R4u5Ex8DJWaSKXENY3ki6PdpGE7UCBAgN4c966RwQMSZ1vYbHhvdb7JJkRQQpt3XrjHh2JzbQ7"
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
