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
    "4jDb4HKou2DFPpRE8PPeqw6AYJ8EgUH1GByaD75qmznyvrceWARGMPP32GfhwnmHbGuXR9vhesU7fHS9ULaf13Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r42KnXkce2CxgEPibp9EYLuuPDNno9oG2T54hYr5JjG4hmBgeRiHxz3xTmNZwhLboqwTXdiCKDeWSDHLaJ4njpj",
  "key1": "5Ehjx9V5p4LcPge3CYAagnJyeKYuRhKM3XZskFek1scg1iqeobAZgCqv2URiBw21H7YYxirVnTe3voB8g4xLEzFH",
  "key2": "4Lc3eZK8heHXQnimDRx2rTiSfUUP34bghffuH6CNyTUtb1sGiPyTXhwDd4MmgY8irDRFpRUvAKnDtAfZhKQPFSZV",
  "key3": "24SbGSmVd3vAJbLdRyTjTVk5LFTva71xs5og9SHAHNK8gr5dSuZDeHDndCqEXpoeMZTrUcH7YMQGtm7FLmaRJzw2",
  "key4": "2Zo4F3LUmFkNsh6StSRGkipqPYRDdeWccXnSQrUXaBLCtQiqgGyoWhoco8R4HqmPsffpC9tiF7R1h5rAnGhTVp3D",
  "key5": "5hxbiPXRw6u9GsoCLVrrmFjPzGUdv26W4EXyJwiNLwyFcCHqGRTptCgVcWmEq8kFE4fV5wM4C8M1SYGsnQsKvjWw",
  "key6": "3cjGfWoQhyrZ13PWaYreAsSGsAPhoFhpR89snWGcMQ1Z9d3cvST9KCWYDBouoMVJ8859LvanqQecTsxsA1qsHXCy",
  "key7": "3hJiurFeepwygzFuTu8av4aGAf2gvUKWXo9g2ePH9CsQx9ssaYqWZwN3sk6NDcD5PzZaHqXyFoePtnuesYJwsTDM",
  "key8": "4izVMhbUo5zix6rwSdkWYcUSLQLvZFsPWwKrgDgYJXFvKkySseDzsv5yEUdfPT9buLc6prv4VvjN4yWMGnqcCqNC",
  "key9": "3KxDyKHCaG7js9SnZ2dvzZ13RqH439GRRpKTNBkK3Sa7yeA56rLNN24RbUsSXYWG3vhpdiDy45y3KJvRK94YA2MU",
  "key10": "5hr8CDaoAhk9UQSTMAP3tMieF2fyuPMw8F4PmxPZG5AmRdwjta8qosaZmLxoQHsSXpSqoYTHXQooFDKCUU1qbFRz",
  "key11": "2QLEhJMUYW95pu84kKCvrTLV2YJ9oNxb3ox3iVg2ts5H8VKuPoCFVgrhNeZjFQy9j4tCr1FQE2KyLkHqehVBXNSy",
  "key12": "4rWzNLZXTgbC8g3jtNTqiZjAe8mZWE9gaXj7rSnx3UbdMb7S66uuvfFpQGLBvQxMDgJqb6rDEDLztCUJow1PsqF9",
  "key13": "2QMi7TxgckYMU8U3jF1edCCqJK2gHbKosmFzfgq6qs8WYh58BsYtb1ydLfwRPQJ2YKJ8upnxHuhX51LABZvyHdGF",
  "key14": "4uwvqEyxNFsyQsZm8QhepoU5kehCKwMAEHdh9VAmx1hhhoBMycciygRQw6cgMF84LsmR2RHJuRpCW7irM6h5espP",
  "key15": "4Gvq4q4LFwdQADztXmLZJ4fPn5iVqTEmpGTU4cQqG793AT3zg51zHyT1yaYdpdr8Wz9d8yF6bBErH5KiwPhq9SDA",
  "key16": "vSFhjpKPGdBbaSwmBFVwG7yMdkQfHKJynJSNWFbjFCQyEUqkJgXopJ47389edybKkbhLZaQU1UoqHHRz98i6PiU",
  "key17": "5PmorLGjwpZDRg1vg5ApweynxHKgb31iSXNHKKnZ2uJYiNm4Lf8R7ntNF4PP3NuHqBu95kgnAaovBP14WYJEzVLi",
  "key18": "xr5U8Ggj2jZnLkqn8GR49UTYbiRYnfyHF11jRTXCU3skARzz2iMUhZn2y4NP74zfvphAw7t9DcMqej9PVEqwyvP",
  "key19": "5TB3gwm7yNC8qVRKQhcA8tJZ89JkuquTuuyXkXdNYjgKdCLYJhdEZh6C7fF9LhD5GMjgRGqYcTPiNuoRJ97ZDsQj",
  "key20": "61BQRrKwkp3A65xr7waKXC64RyVoRXgQbmW5WibfDeQyj2HyYWCM1dazkPL864kRivkPwN9NprBLonCqAynVzbmj",
  "key21": "EJo2RvQr2iyp9ZgCfYk7rJ9wn1nra6kEmKW7fpZrKbjjFsAS23rE9xDASmPqwERM7smSuB7xeyu3ncSUqgThUhq",
  "key22": "3jrFtGXRhCy6VxFGfkdrMohos1SPdfSTawMaEHhJD5YhYCp1eVjRPTyB1Mip5SARHADxG48BLj31tM9ftg8duo19",
  "key23": "3agMeS8KFe6mBcyR74Vnju91LEcVUYBv4sxHHKe65U5GQkTKiaJSdK3d11jbUYML7DA9kDpq11fan4DWA7X8TD9D",
  "key24": "56e3VZbVjVzDMqngSGEnpMY5VQgK5ATEr3SmU3HP45N9cardY88m6jvSrddWsCDFyPzGifYpa2izuPdbGmJDbJrT",
  "key25": "5p9HAjHQ91EkQDEr4oFCMe5R6GS6AdFJaa5JFjmJFYMjASxUWTdkX4emCz7voYqQiNMsX1qf6h38FhvRUjhxcV8b",
  "key26": "514m7HaMTgcAX9ccgwrHDF4Qo9Hjq2W8gGAHB3DzEGPGVXvy4M4jQihgMWHuu6TenvJSRi3y1wmhLtESkHhTdhHd"
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
