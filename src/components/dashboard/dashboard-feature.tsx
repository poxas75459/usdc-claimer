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
    "5kJuat4QPps4vsiusvrwarJtCEZRFsoakHLo36hS3faWE6CakXoDiSrfiTQ3x8J3hrZUbCyaxXtKbnwGVgkjtGRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XomMQ8WYbaC6c4tn8NzsjGFLxeNQZo97g1GZ7fczTPdq8c8k3qp8jEJd99jQ4aM1siN23Pdm9Zv4gjtaVf1r1Y8",
  "key1": "cs7DprUFJbvBhxEYEHczQgFJBcmJNnxb1nep395rJgVC9vGLfc3737icfwVNcKrxtmV5i2ghYZoax6nZT1wtyiZ",
  "key2": "3tKF9KBGTd7RVDp5oyiYdt6i1UdywyrEEm3NgJJ3VJ1U9Pc2jnGWwmHSTCHEepHfb1nvjohfD26aHBKfpL56YnSo",
  "key3": "3hFVKpQFKC9SkpyrHWGi4LQVfWtoFKyj7wV9jxfMk7b2YJw8e6VpeEUbPrYet3hc2Y3Nj66x3RQrE1NVFDS2hec4",
  "key4": "3T9vrXGeJy6APWFJoEGo5JgwGKiCta6tpt2BJ6NVL4a6sM815gQ1eSiMCoEue5SETqafG4VyDQSzo5o5gY58VP8J",
  "key5": "3W42DhphooKEZWD2jpyyzBKwQfLyHbJDda8m23ZKJdQsF4qWZfdiptiiDDUGgiC9BP8Ga7bdNcK71rv9pokBrL2r",
  "key6": "33EQPYfYYNcDQLqmn8ZX7MaswNXeRUqwu9wBAzTn4eMA2Ni6efGhVQaopTPD3QFiFFUsEcq5E7GibJL8YbDvSdUv",
  "key7": "25iSbVvHNM7kmsQAza9hTnYZ6nUpLkSHeou2rMf6vXTHqZyLF7omAvKFbrhAmB5R9PHw9iJGX4u6VczQnTmgVrqG",
  "key8": "2a2cXgRDjS63ToiVFP2HtqfxD4VqEjRapB4S3PFixiAE9SKL74hMyHFRX5BgEYMMSFk5nk1L2mRbGmZT82XRSqeY",
  "key9": "57mjKBkXbRXxYXbddu6gnnG8G11QFPnzpwGR9PY2Vp1BUGbRenA21pHckriccHnPxh917kgHMytagBJ9jAkbyCGX",
  "key10": "2AZMq9EkoiyTUBGz2Cd8nkMYjLBViXGSCzvx2PeoUmDMpXtncFypiNMFnGR837XqPJ3mAKbAvtfMmbDf1JEW5o9B",
  "key11": "eL32UWCwQfniSrFTkSCyMNsXmcrhRdwqbW27oxwvq1CgdRTDFKVnxdtWPvUPjBu4RdjKSuX6aCi2xiqKGXZBEBr",
  "key12": "3asPy3Nf2hCREGh4nbUJrfx5SoP3zRTpp7vFG2DibmraHxvpGtNtcRDFdiBVmCdARCJbGeh1TsXM5qT34Uf4MYWo",
  "key13": "45ucBMVkbQdkEYVgZ4p2KHs6emgAxwKdTH48TP8hqDkLiwgoyLThjDHY1XeBQ6ej1hrhY1vcaGC762WLMZpsjSX1",
  "key14": "h2nKAzjLXEybA3AzPpMkThGCk3VHpALoW4jH3pFFqet2ukZN7Xspxjd44xUVXwBUZtKFkVkMAmKfcPAPTJ9Rscx",
  "key15": "2EwntqkXAY89KZg9mpuCmqL2BVoNMiTyVLY8bCAF67jHbCCFCEbxAoXEvKAE5KrhHnJgHFJUG2qrEznwYgFPmS1y",
  "key16": "4c1H6M1KtHMCRwbB7FkqgtvmfBcYzUbu5x5xYNmBisFd4St3GhVHMeh2R3qQUSQR5iGnDbtkSLfXXEuUjc57emfx",
  "key17": "3x6xTXmK4gGPe1mWCF5vt4JwE34BrjNi5zsXvXgXJ3eaZLLzJWpKxS74kB3H5xPH6JxvJQUafSzU924iuYF3jq2k",
  "key18": "4aUcyVyx7QaxDWEVF3WkAhQBUag6p2V1wMLuLB4mTapJLdA5VHGBeDqG4t4ocx3odzWkLstPiAk8r4oEVoBiapLq",
  "key19": "4uRwywF4ft3agvxNXHawMnXkpPgjCqmw9WsnpN7ZRj4Ubri4qKQ9UNnn1fb277uFwx9bkaefWy3NhUzwuKDDDGbG",
  "key20": "5NuFubfzbtkFpZwfmACpCQv5oauCsjTLN4JaKvAX88ZA6Z7Gu5xwRU2PqfG4TSqXh5ijTHAoJEPGd8DkFQDYdbMA",
  "key21": "49E2hmFub4gyh9sDbndwGBHnGmLQFyZqhaDp8HqyDV82eGa6EEsqtQjLDvLKLFL7zRts3EBH71Q2grWWRPBRcQji",
  "key22": "PkASF9bKw5VTpw2YDhQArMFK3Es9FxBZyry6sh9Pef8uJEYnKsCRyn36P93Sodtm1UrZJnKwV5nDj81zGcPGMSX",
  "key23": "4yupg4F1ZVPv225njaCzDD4LLkhA1FYawhSSvefcKyqbWZqrFDevJzcYogmv83WGagQsHqnjm4rYh62hh79N1nrR",
  "key24": "3JzkUqcShLtn3CHBQC2R4moJjzh6LDe4gD2ZhkMxYXADeq7QkyBD5NrLLJRsB2xkbeYaB4unsVpdEc5T8sodbWTy",
  "key25": "5tGtM86nPdyFxK31dCih3iASfZNo4CNBnoYJR2fTdfoN2Moh3RvcmStATiPTA3Fxsqac9ggqtzaqBK2WyZ4v8zdZ",
  "key26": "3CBAcycbCUTkGqitpmSA2Ypagz1rTkBcgRchGzt1gCV6rHiBJV3FSncGSa7tLztHJNxyjTSHTzLqVa2Qk6mottVK",
  "key27": "4dN7MJbEUttVjau6NngCJ5Vf816PSZ2cfJMiNBEAEGcrVNhuHfuKdZfgPyPgR9uwynEpnP8RvuyJvb1yYLr2SpNP",
  "key28": "3B2nkEuLnvVstHYg4w9XaXFYujA3ShhtDxFWATEsk3Di6mGKqN8wCSF3xtVDWHtXJG4Y5LuffU4DmbxTGx46qeU7",
  "key29": "4PX4eamXE3yd2GbiRCJcVTfwn3bKzkMdv5QXrCw1i6RMR5djDG19JAyuwBZbwq5G5wiTZhvMNeSz2LU7SoEP3i9p",
  "key30": "4y2uuawtRUFBY9s7MQZA2ZewPTsZJSrn5UXQrxjQ1FHDTXhsgp5kuGVBjUnc6B4Hrk9C58GkoCPPWfRKhELMfP2D",
  "key31": "37cgeHKXC2sRBE7Zf7iUmHyFLeaPhHnT5JPFenXaTBm914jVT3v9aCHHTeWqRfgtPKgKGUcVPhBYpszqPSxTLpKr"
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
