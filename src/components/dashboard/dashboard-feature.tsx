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
    "LhhDW4Hn7xKGL4Qk9djshYRDusCAc89ZaaLocoMfQnybiMP2L9U2DuRAtG4Wqv7FGL1aWujdmQFvLVeejcYAvTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "viS8MwLEiiRKNL2nN4p8FFsCV6pPSCnB9VNs8SeFXjuJnRj9E4L4KdyajPzJf9KvLWP7sMF2kVzHE166bQS4ftk",
  "key1": "q1BfNLE1cTTtnsR5jY9Ugya7VyV2NiM8QHPT8yYg49i85RMHCmvUER5BBxi5DYyysftc79FcwaEcw1dmhL6sL7G",
  "key2": "RQMAmCceLFdoWGXDtvTf92MUe6xgQr4qnGL1YjHMsmtUCi3k8HDgW6qHZvx3STJMio3hHC6uDrszY6QMXGjsquk",
  "key3": "3cM8hxonBb71KievS7V5Ap7r7JQhXUbaVnxV2Yeu5YbzpaAXMNc2YTiZ5Lm8HRKSnVEFTxPtSUUDjSfYX1M5AJYT",
  "key4": "3xRarFCidCP5joiR1u3To2wY8rESnBcbkrib8HHbdBfpf5W2EDqAMQEnxD3edq3hhMpu1CGNYQcNwotcHbFdC9jb",
  "key5": "2qbKC4UWQNP6XSB3jX52G3igsr41PnUyBwER6f4LpQS312tMAozXSwWjwqnU4kNx9tSwVSmqCoYxZfTUu9WgxiMM",
  "key6": "YYRMYnn3w8bCwVY1vYDAXStKdtjS8GDdXM7sLPRGzzQ9eAMTXejqwd51B75hg54u8ESiAKwpVA2ijwhdavp4EZT",
  "key7": "3nAqiGfU8zq3eFXTbRHr9P1EFdaQTEotZLUzrPaJ4hdv2KUmzJu6CwFXHhHtgXYQ4Awzvr396UU9ZSMvXMjEWJ7z",
  "key8": "3NA1P1kV17LbEXtcVtbX4VMmo6bkkP2MDKW8qWTTy7HXpfGeR83fm5ArAXBrZXekaXzP7ZdWbVWxuJuK1SaJEPsw",
  "key9": "sjo3hbepRCzJpb4cS4iKg4wyjBVtRW9mDSnHGqfiB3TAKpeZVA7s6mwToa3b3nsV2jKv4KFkhSdfoL45bQRVyXf",
  "key10": "3jgUERJv6UXCYRFwLztS5e1KHFXM9fB4ucMrsusckU8CKhoAJgXnL4P6oECBBJxEuXJxJ9Nq3xFPSbwggEQ3LdJA",
  "key11": "5kQE69Ghd4ts3VsmnvMMKuXSjAyL5ahxmpymygxQnALSCz3bxLQ3peSZVuhvRDcjWVBcEpsJQiVsjBPh682F4uGz",
  "key12": "3GQWHwtZxNJZw8WC2M7DBuu6n2ZBcSwwA8AUituioPe4U6DGhHVjNpr2N4SunqXtEV1cHjF8yxFp9PHfepDzh7Mk",
  "key13": "4uMo78iQM7jLJSKbrxeLpeMURp6zxWdNPPGW92XLPikXFyYe3GrTkW4sNc31XFZWFfQjv5ygKtweKSsZbo3UzrDW",
  "key14": "5G4dTYNikisBbJ6pXEQL1hcCGvr4oSfzFSjKNTYxUHU7GHRCSxkGVdkkTDufzE5CGBZcN4KwQMtpyXc2oVR4Y8zX",
  "key15": "2GUFBQCU6WpTcgaHz2jitGnmSBVq9WoEz4uoHkUKJCbJn5ZYxWNGVxNx84YJ22a7gVRiE8UARurgBCksTCCaR8Nu",
  "key16": "2tmwXKW47KLTY3iNyueVopm4nNQS2FAEFGwP6NoDJ3H6JAbNGB3Jod6YRErsqP73yFcHzNaM6yTMC47kekga6ER7",
  "key17": "Xj1B5upgk57LRycpVMbqSMF5cyDXnTzMffJKZax9w3VQbWpKzgBcobTYsea69uN5JUtCfdB5Rmc2EdrjZEbABow",
  "key18": "4CBaERiwWCcbAb27MKWGhRdcLBFGAxTckgDzUhBwpBwzkYyqGq6NJtYzJZ62fzLyvV4JPjZHwMeJmukNnw2cvA1A",
  "key19": "2SdMFb9694ay62bpkcmgkwU4L4MHBcQeya2MeceCV5R3SGhZMUJxU2u8otzCQ5TvFB4omD4t2eeUL99vR3BDEsZD",
  "key20": "3yxiT1AA4TkTYSMaeCLnWPJe9wQrzcVDBad81gX9b2JBDeGJUanozWfLieuoRR51FzBn6MDfx6PSA2xchV3fXADz",
  "key21": "xKZVqBhE4DbnEGvknGnYbmsRG1vtAbmA8erVnMK2VYkxpNaAjDUVtojRNNE7Ldkem3UKKBqNV3Q7nek4YPkMTGa",
  "key22": "2otGtxfoHiSjn4niFsogHPfvAxmkwP3a9u4Zm4yTDRpv8Zz7Z12wTnmh6yxMvZTXGV15A3HbnUjzfweiH9ZGaat5",
  "key23": "3vDFRkdWv1kWRQTzowmWjXWNjEGGY1jVRUbE1TFf5PQTwiBzU7ALihd6QsKa1ZCwyHEzmthkfbAiYyf8eEXmKfhS",
  "key24": "24W7SAfnZQTkK2xJDAMKFn7snCosop16zwXnDWxpE3sSK2PqCJGxbkaJFCy6WL4cEsFbV5DBwqS42m4n5oBWAErZ",
  "key25": "34Cyo8K9okpgHYeYb64FH9PxzeZhDuH3HBGrghoFvQc2BMc1cX4LnRyrdPsVNZdiZT2oE8hmcoSv5YfeucWD4N8M",
  "key26": "BTiTijzV9mE2fYdVoVrQ3eBVzwcJUike5FFiFnxpAvGqLsmZAZAhA3AFEP2ufWt1CmAiDHaCyBgawSR9kdu3iQY",
  "key27": "5Usw3UUsKBkqhRKwhP9okB3tU5c5Dqsfh2GchFiUEbWna3qcHjKvVM61F4vcjbCR7wcLaDg6KSSaSz9as2TG3LGF",
  "key28": "5dgRSNCrZHtMCksJA3fJhDYhbHuvPjTNTH9RsPs8E7Vrh9FqV1TKunMnFLhtY5sW8YCqVTCL4R6f6YQJdJkk1Bnp",
  "key29": "25ATCXqTzx8QTxg5o2b8PCWSosnhDdT68sWor8uXmpMpW1R15RVaKqPEG9s5do8M7M5jSPmEShhcqWn9fpxbYAq9",
  "key30": "3iWABd6HHZtPgsVmRXy18e1hiemHm6M2VjFugzjTz84SC3EimWrT3WopSGBLtSpzEuWi9jiWDvVnShDj2i8jcTqs",
  "key31": "2ePMGpnxm55fcyxE3uYaS4fpduQvDRipgFmMi9iTNFCsAs74t2kJtg8y9NDMWysgKADgmjzB3NvNVwUHSZxtw59j",
  "key32": "PpZxauQNgFiKQSmqfwaqEGC6hhH8r4LRraAZDJSvDueJf7Xg4LJieDEyyesiDXexiANoVinvUsUQsmETLCT5t8m",
  "key33": "5u4rnRs4WtZMdgdithAcGAFn2aHC1KrALDwdgmJM1JdvkFtvJaUz6sETGUXYhiRTtDhSg4ZH65iZ75AADHPCnRSG",
  "key34": "2H4Le3ADE3KRpjjXWoRpovzGrJw42SBeCqwVkTUQbsLnBiQv5Vi5nm8ebrwRrDNTzKENzcmDBEXMxihEtLhKHacb",
  "key35": "4WFMhkHnp28zaDZQ9FYpGaWiVBxBpfuaYr5p4KcUo3SzqMSexDTK8AiR4e2qp5fA5apcZxKtHd4dJSAiJtbfgxgi",
  "key36": "33QrYGTKJjwWWrdZTuajyjbYaxBkvn6cqdatWxnWGyQPiomyzLzbdg8PMaHp7Gu9sQn728djLnPRybxsrLt7YhYi",
  "key37": "9aaoTCUvQXcsc4cgYjTx3DBHFiUQudqSLw63YaZhsP5pa2A5HZGiDBptqqZykqTxbfMoE9fTNw7CAxvZGfYFEvF"
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
