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
    "3qXn4Kgp2X7aASfoaW3kjNJpfbqGjbPDrN5VBpUUNV84obDzyUU1bfjPBDL6CZABEgSSnmCs9ygP5ndcbKFDRy1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDpvTHbh9jg8DmCRii8kA38J6onpAZcHyvgqhbsELdmFn2BJEezyGbp7h8q1hcTpKnN2P2jBXdwUWyHJngtTCKB",
  "key1": "rM7WpXUWmfgbi5smiaoEmwjC7BHx19keKYeqf2y8Ba8Ad3UNuLq2ovd3QocefcBwG7g15PcGjXvGnnUo2DZgwvf",
  "key2": "5CWST6AmTmvLoc2q7E2TpLUynhkqeaEQkm5x9zcdA46E2saX1A53fxfvUrdovmWtmdikg8bzjTzcgvRpN1PmA2Qj",
  "key3": "23XxF8DShCuoRE6NWBEec4ZbWTLAz3e7GQemikYoLe3Z7pMUwxSrc3TgcWG3gzFPPaVETBYZZ2nPAwZ3KDSux9yB",
  "key4": "39cTQh3pnZUQjeRNveeonuJ5hWCLrh7JMzoxunxknTatwigFpn4mTMmTPB1t8jvK1nHpMVrvnMBHhCzW46LcPCTE",
  "key5": "2KFFwyU6aHjM288cTC11QKmfL5JUAQXfXbSth8o2iPE1gyF6dYkGEJNCEumQRCbi6nHtBUaDkmgiXL7JedWNwDWf",
  "key6": "2KLvfBwvesiELqNuH29jMb7D9JL941FxJDuyeCVFEceVNgJ1SbB6RTn6jb2M3Mhb85jDqDVphZcyyqvntt9jbDNn",
  "key7": "36sQPjuEG7U2P1tTLyqDA3qNwF53K8EE6QHKrVTW1zuPGX83Lf9BAvkb1C9RMzxiFLBLni2vgJoZPUB5zLYtmggM",
  "key8": "3NGJEpbN2enyzF7Fz7Tv66AEH5pUsoP5zeHQFsWdBX7uc7Kr8KNbxpyVLDY3vDFFKRKzMUCCHWqapafEDYpuGEvS",
  "key9": "3iHDRJt7iTdVHbHJRbukR4iQVMgBRoYSnUGGNaXLYbX7rFqUjurZXjYxJPQcQC4cUiirz12EEogWr2Yzxa5XpprV",
  "key10": "4NYdPiXWhhod6x1k57H5NcWaR2SytHdUNhZjxcUPZCDziik6KyAHrxJziK2FBArjAdaWE5Q71uZ9C6WRns73XrKk",
  "key11": "41EubSTs3EKvUJcXtvjTne3bziwA9sjaesirjMrcvC9xeP5e3rDT3HRBNZtsPoy2RrZ7RMHDutUY7FeXykebG61C",
  "key12": "DWCRjrgHRpk2S7fJjBHLnY7pe87dbYH8s5FSkFt4nd6tP4VVFEynKNf2vqYa9pvyGExBbAUiztYBpGpUD1E3qv2",
  "key13": "wrMerhwmwh1Kdza8GKchmCeCitRZubVA1wF6pcq2psLEiMeZ8oEA5Fzquz8SCLSnFduScNqyuQYeHjj8oNHKAbu",
  "key14": "3ybgHSeWKyjNwkABnBQirXgJPysZCiyCQzqyv6vJCDSka1jNR6aowAPiKHJg1N1vR2By9MdHBzKswBTcTm41Sw8T",
  "key15": "2TfzAVWLg98AdDoZRxLzkKWZh1R32bZLkSzXSvNV8mGeWX97N48Fwi64AvzCyFQ6SKgPC3hao62PszCpUfnyFDFz",
  "key16": "QRFBJzKrwtu3i2xCNzyeneVxhiwQo7oCFuvuVPhoC1Jb4Vrnty54zL9JLPR7Jb2gSEQxBx8ZzyGfubY5Sg3HSfV",
  "key17": "3XvYhfobqat3XazdSy8PZQUs9rZH5QnjkbY9FVVvuQyisy9EWiB74DEWgMYGwQfeydywcjVdUi9Ym3Wsq7SYSW5P",
  "key18": "4svepBEkL3csXShYLw1sEAejGo42fXRLkXCeQhsourK5TGHBWnCuEpqVEanBm6rcrBYmzTCzad541c428P57Xd7Y",
  "key19": "3zDcneq58Zb99Z5KUYTC9aMYVGxDujzcrrEBy3HFGUrc64xRLRxJG6CePb4CNSXUn69mUrPqR8StV5CxQPaofJmt",
  "key20": "3FV2SoLfxrVXBfwPqmKi58Q9cVy1EFdgsNF7mRJ7LJ2Q7CLLjXCnqv1rV3PrV7RJvNg2ViVa5PbDWkVzRhdzAyEY",
  "key21": "xRUk54QKWgoduDm1Qr1xA2DXV2DPnmJpkTBgxBtNYxjaJCcuQBNY1TVNS4bkKodk4jDCDd1tnzxn5FB19MXFWWz",
  "key22": "2xUoQoshCqnXyzAM3jRhC8DaMR4R65hRZsARzRLhM5QygsSztFeyNXxMBYKA63hScPaeRZGWGhFBUcihbgr1gv1c",
  "key23": "3f9S2DNMjGfVPZupB77ERjQiYHPeFC6bqxr6MyBxZugsPGyEFGQynfAobJNDeBpMxbJwrVAyoAiuuTtRzUSv866x",
  "key24": "4FUzdeWZzkoRh9uG8UMpWHvswNrNxK7MaoLCJ7CZCuhhuNUJAtyMcaw5G8NESt75YqssPwR38q9D5LxPwim8oPEb",
  "key25": "44EKR3uMLxcpf7QoCaXpi92hKTBNBbauQuGacaw5brfNWv7ZiMz2ziZVdHyYFzq9Bv4HvksQnNrzJMdwNMTNo6Da",
  "key26": "URfZ67BzdPuwcLPZTprBpJfLm4DJsezKfinx12aW2xRLV5K6LoxwQ4k4TowwnCdQKo8JjQ6abvRUU8Jf5rJoESe",
  "key27": "4sxmZsXYVVmZdvqbYsvwmZ3EPhwGFyQg8NzhaDDsQtWV9Ca78VRhDRSeJrcrq8iFWyuHKtwNTUcqayT8Rx7gM4ps",
  "key28": "JBeB2tMEQp3yQdAdRqzNxsGy3RStwvq9vMewtHC1UvUR4u6BVUzbpCTzB8zSSUWn4SVdLxto5saBcDLXftJjwNk"
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
