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
    "JTyZDbafGiXNKRK6zwWAQjzPk5Hw18HvTGzF1E2YgpMnzJv6zeG3ZYYWBxkMYHLgAU7The5WdndUYWigAYFA8ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZFsPxHVCYbBFtfRj4bKEYvnasKskgkQghNMW4Bu2SdB2Ckboic1dXShDEUtoHhnU3pEPLP7Atjvoy6mbN6uJiP",
  "key1": "2hW4KKhs3GJ1SkC7wqByzQFKwJx9fZKSUGkkQBZ1uca4jZyVyKRRhg1sx58Dm8yjNzDk8avkbAhiRoby2iMcxTxr",
  "key2": "3bd3E7uRY3gpSBykaJLZ6eJAZ1j6AeWZDuxBeZLoF2FBr4drbaorTv7XTvFpBFyAgu3ERU7CDQSJrig6JN7yFKKP",
  "key3": "59E2fbW1qpFZtMnaYRM9baLE4TYErD4KyYYamsnYJSZeNBusmbwyB8eEhvFSbsqAbpZdfBd2CRm2TbwAXyhpdTfr",
  "key4": "3mCCj3jc1LvLzjYpdsPs8rrG1oFzyKVorNb7bqoWnz2zEYqHzLhpPEML1tge1Zn9hFuajzvTeuobHa4cfGxaf9ds",
  "key5": "3fjhLq5WuRF8nxWmn3S28z9ravd4zDhQC4gRSBtcCZFakkg3Yk1hLEUkdLXJLCgZaZ3J1yhr1eRY92b7oWQDsEm9",
  "key6": "3AaWQNFPcJ3YHkQkeTKRzWi3aCiTddBzxC8QWkUJpBido1pexQKrNXcYVMspKGGRWFqRKJQW9W3keEEMDb1ACy6R",
  "key7": "2iZ93DDqgupaZELBnwckQRk6TkYH6CnWUG4iiRfQAoUhsgdjnmqCYAkgMmi1yV85XH3xH42zLLXjgPinu2M5ypnj",
  "key8": "Ls7D1iUKrqWzH9oQgbo4iA6JNJ8gAo3iWTwxypNoH6JWnN6qtAGk8QWfnEgp8XBcta6BC7RUpxPS1QVP8eoNTx7",
  "key9": "5dDxqL9TW8xfR3bKR9Satz1krXio8Xrgpz3zDiAqjjM7wK8MgjrQ2uKzeekSk83NvqKMhCzNpLdGMAFQDDr9C8Zo",
  "key10": "cMwRHyKXQNe3s31zkNJeBjhHPhBydHasiuR3ybEY4S4WvibyFGYZAbR7m5D9vCWWCi9NPRKrwXdr9ZhSrmHrTv2",
  "key11": "2FrjFVSEzqa6kx5JxowPEx2FABYg8yxvdH9tJpBhYuLhNLULm8QBK2xUeuTR6aqCVWYZLCEB3Ex4htpwsyGn4guC",
  "key12": "4er6eBLEbKZ6WNK7UPZRPbWX8KS8uffWTdfy7kJTq2Goh6fGBCGF2TuRw4YnMh8DRjaXnkRrsEAnVxYNfoWeXdoo",
  "key13": "3rzqPs5MFYzt2aW1dZm7p1UYpc639yN3m8ZCjcwK9igx2yn2JBTc7HPGVewEYbbv3hgo9sTJSJKTWxivag49oqRf",
  "key14": "5SBwTdzmZ3iQb74wqAHatwA2grFMWXRptzExjw6dzuFRMKGWzMYMVDj6V7SCjAJdJi2VBf6J5Rt1yiJs4Nkn7P4Y",
  "key15": "2d2QMLrku5FLBDgWDjvFrQgLDHqdTA7zmbuLPnr8tFPXuyKEr19MvzsV9BAzUsMsst9sgZAaqtnK8s63moaZX5y",
  "key16": "gx75tvwryxzZuYALauoDCUBGr1yytQo1EeZHnvCB4CRbkJqMFGPp9WgEb2wNx6Kv4VR8279P84u1fU9TUaqMCgp",
  "key17": "32tobYBTF94o3jW1N5SweGuk7JfA94YpGQmUF3UBQboWYLF4HUHY8F5K5v6mjxzwcA41YPBGrMSZpy9QpMdZZuwM",
  "key18": "3GtAbbtdyFKZqiE2Tj46RrSvTuLT5agWnXxpbW51MJYNpnVfVgyeHQccoH3nsLHnjgQjAtL7r31F6cF5TZa5N4FB",
  "key19": "3Rt6Rqcd32FunjMpfowoUvoFc4q122NzCcLgWNFsuJfWxcqNRh6EQdTBkwKMmCkAcfqckp5xFMLQKbGhsboqBJLW",
  "key20": "5v1jXkQGk5AwfFWZjPcPfvmSwcuv1kH83ReyKb6W5Vjtc5d7FGChTRhV5SJgodRXNNgAKM7QiECupwScmdTyRkR6",
  "key21": "5G5CPWVAefL41L1SjCXZ6gfukHk7Dy41uqVRHNvAmiPqNoTmCE1uDhTZu4sLYNf155YAaF4Z9YyocsDgJ3kmYHZD",
  "key22": "2KEHcqQL3YtuBh8u6kvMsA36U9WDUMzcSsrPnQNp1PkaHUSfdnPopWEQYggvZZYEGcXqSrorHcBWbRbfcp2iPn5B",
  "key23": "67Yj8hi72hkKcCChGHSMuEKRmSVjayZYmkEbPk61k2kRWzNXUt6upRpVCt4zCu3RzSHQgizQbYLkDZboNJd777PB",
  "key24": "4BjabFhph4V1BhGQsCvGbW2tsn2feJ9GZAH4jGazcS6Nbk33apSXRFUfvM2u2ZP868Lp1qwyHXwMxFQPYSzcCKZw",
  "key25": "63VGKuQxJaw4VHXrC64zLCrXhVez7QdruKfdf4A46CWnaLuTMKf9eJtVT1LThzzhP6N284PMLxxghJHRd9MxHzeh",
  "key26": "2cnftzdap5zfhhejYb7ZFofRKhgWkCUSTXo1ChofQ61T9Dptp74TQ5TRVCMZbvc7kMvai1ag9fZmkUqHmiGZk9k4",
  "key27": "65Lb7SExKqgmm8K61etcf1QB47oRu4QqCqxQKPXNuyA6QNqnoD3BSMMJrPnb2BgPVrXjGpFwNDsCcZiVgk4KGzyN",
  "key28": "3fefXT62Dr9dgZ9WtShfUucBwAKzpM7o7kkV4BB3Kn45AkCD65MTcNbS5Z3WMbDPmJ2zStwc8Y1i3wmhPu6X1NGe",
  "key29": "4h5vu4QxEeJLwcrkLQVxrMuYXBWuuYPNYMBas4yA5GmMkeRHvsU9woLZer52e1uLFM6MbYTWZvk8MmLXskaSN2Hf",
  "key30": "2mKj2QUJd32WmxtiT4Wi5rSvZAAogLad5eU9y1uhrtnMD23gpfmJDZVmiU1JEynfjQGv2sVsuTK5ZasUjNT465DS",
  "key31": "2FAEwM71f55WC5uNjgxrgoFz8whPr1XjLbzi7fWgWJAcrvhzh1FegZy2JVWENqdPE2mZoZ7UYBbMawDrLSL4dZVS",
  "key32": "5BtnGGkTSbmQxLCUWw3aN6TsyxYpJpY9KvtgwTvC2Svkwop2a3uBoYD4qmV2Y7a3oVGaypCsVPcPWowt14QCSzBG",
  "key33": "5bS5LLwdzLyvAHDuCEL5Arbnvt7n5TaDGWYhUr2TkiL5KNuDsN1Gh7Za4wUbP65UXMv3kfqToAP4K6arM4PeqtK8",
  "key34": "3rfvWyeohp5KbqEi6sK94UYra3gSubWTCSgSjLjkgaZrcGHtFzBgVZBv6DwP6ByTJ3B8X5Yt9DE2HzkHRtsE3tuo",
  "key35": "4W5X26BPLTrwvkmPwEBiz775DBpFeLaBa12sbL5AyFkmCTu4v8PgHwikjevYXhNfv4jrkgXa6PcBrSEubA4pvyPc"
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
