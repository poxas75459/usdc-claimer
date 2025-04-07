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
    "V1opuHZWVJttXDwBPL9LVTmznutYptw1Hs9j2nPRpqjN7HkcmxqoBFLJvn5P2jbG3zFLQ2TUoDETRMqHsEWQVas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFAB6r1FmVqBvTTeVeFpKr3SoQ7AdcXUhpS6rF45VqAVPnFUQMLeS83P1C9gWx57Gn6QBa169Ujc8SP9T7Uq35A",
  "key1": "37tbEdtWE6fTb89LUuUCARvzu8EED9hnFuG5f62HdTaLPnTZd71QHniowZkyVYdUvz27trqosvDHUWbHDqwuQ8uR",
  "key2": "4joF4iyyXkQH2UAJgVu5qtXEJxAsRGAP6NjpYHTb4JFR8bQKxhxRnHVobV44DAXeZxJkC3nEyQaGgRNBF9Ysmfyn",
  "key3": "3sEXVJ8Njq4MvXr7CQdFYYuuqNHw2w2kZjC9Uwnf5f9FvfWTkr24BqE6rqX7o35z7HfDzaA4uK8kdru4nYfSUZbw",
  "key4": "3MCtLFMhAgQ3re1UDabdYsqMzjNZvxh3SqQ83fLZ8QxT5CVhW2JqduemQebM2nFs863mJitZFU6qBkEMx9vfqosK",
  "key5": "3K35iYtBnuy3KFR1hfrTZuaGeqScqee9EQH7YHFg4NQCT8Rr9MZujZGEKJQjHY73Uo48J67XVc9LtuGwFteaC7eV",
  "key6": "APMSpGjBU1bELqKMgYqhid4VvPHyqnSmgvEVnsxYYHKKvd9jVVxFZXUCcEpdrrSweyjcKsoprNQYAbBTKQCpBff",
  "key7": "3pcbyxQJqjGHRHGNAR4Q9GwKRYhWmzX8urVMBcHuEJ7tHWsTqyDrBjnwiJhQStRg7j2gNpo65UBghtAuhK77BZ7B",
  "key8": "2ssSMfKEuYaMuig4AtKPmYq5Yga1W38731x52Tv4QB2Tg5EZEax6cEn8aS1oB7Sq3CYWovceqYdxQiLFvkmsmL8i",
  "key9": "34CUf2kzp6huXYs3Xdsj9TNyEwycsEWmQH6bXaT9WE82Yy5GX5GH7gsBFmQUdsJFvXEA19TemEL5eGmhSqxoFMiV",
  "key10": "NXCpmHxUwCcD25zd46KPPBN6rKhLsZnR1AhX3UQ8vvNiWpTUBLYqR6QFukYFZ9JX95H9Yb8b5Vhjs39DD18PtMr",
  "key11": "Bwx63wrWLXBY52qUbggBxF8Z1fPhDjpu6jbpi3U9BrDaTR8n6iGbnksAd8c4b17zJiuzR18aNXbDHCUrbjdWFbi",
  "key12": "65fgeQ6wdaiC9wynFB9gsFpcv3RwKGVP676zRgxhYwkfGSTjmJSq8Ge7qrAwmjEn1pmH1GXj7F9nAoF5UWHhxn8K",
  "key13": "2voR6Q3p6YLoqRkxbhGEYd8iuGFDMoAw5XcovPC7nyeM7kULZRGdqh1WZheLK5iTMfe16hU3HBkmEAD4JNW94b6g",
  "key14": "4TjGYVkfQ47VDK8wVHpSsw1K486A3C3jJgge6hrt9xq5u6VuBWxUXYt8jLXEJC3DTYs8kF4SXN9Fkp6GncqeMejf",
  "key15": "2uWEaPa4nyvXYWC8eYCkdEULnnrpguvStZTcLzts1qccdz9hydaKwEqCEt87k2KGp4qYQt68wxdkCn5txVYsvkAS",
  "key16": "4mZFuPCzWgMs5doS6uBQwrhj9DD8pBNuKd4K4iro2bevHPws3DesGudweeY7G8uCos8kWnVF4BNPswRgvLdUWEq7",
  "key17": "3uFkeUmbsHtQo85F2UrxdrFEoLnruhncXyqpQFQpB7wLMCEAboq4qkLS4Wkjm2W82Uvjsb2srNXrM6WDDwCNgihP",
  "key18": "33n7RFeCz9CNE8f8z5te4dfGhdBeCsK4i3eWm4pWn6771MDSYegvr181UtCdwPdoXSHz2ogeGD791NGea9zKjGgi",
  "key19": "31SHjzdrqmf8Fwi2XGH1tPmvukVfa3DUpteayLjQz8iGZoNhb6Lg7Kh4GPY6XTY39a4Bns9diX6tVF7TJZKP7uQ8",
  "key20": "2aKLPZn6K5kujkd4iA2aGaRCdircjQyRdbXpqfbcQdDTyWB1F4ZEbHZi6PeRTyD1i23NsbBAT55ecyXWS4QuBay3",
  "key21": "2EGWW5ExA1YUoEze2vkwFDJGnc24JAwAqengfkbXrt5SYxpjJETfvRgwA7tZnmMfBYuSg3mfx1ZQgRyZUragnshD",
  "key22": "36XEHH7fCNteUbyPEemwzwfirgvQotFtkYo8Jz8X8asFqfqoB6ELFRuBP3VbG8jJN5bvrn2vNUYVAFcuTAv5Cafk",
  "key23": "wkXA1eBV7vy7py4HnXbCx22PXZwLKDfncd34EawAnJ1qoZHbxhcRJefEsnDJ1upmmBcpda987Vr7i3mXjQ4fZu6",
  "key24": "5b5bgRmMJTLAnBUdxtB28ijXkGX1sAyUYhiacWWN9EbjUeWMLCKMH13UnG2vMmC4CkDfZgDKHYctq1gwpcpPTgjQ",
  "key25": "4CJteTXPhqBNhNFNtZxXMsomPBYS74G7ikt4mG6gGVeaLrZoRb1U7xXmVi44R2wV9MErbepeMnrVdpDpzaS1xCks",
  "key26": "2fQ6RoeQYiyZEgmApiH3WyyhTfZjJPJGcBnqcnNm2Vex6cpnKt6e8GtmNgrA34jLQNxMqmvkzC7VQmC8Djh76wzd",
  "key27": "2sWdUvBMxozj3QohwT4P1YC14pkDqn5TDx3MNEqgjNHEvDRuiaMyZjCafXXR1WMPzm5XfvoYi5qyjn7NEFZ9mbSz",
  "key28": "3cPgY7hsBLxG6W3anH3aT5bxsYLwb8h5kjQ5PAx5BZqGNjDLZi5hzuvfY4gb8Tdoy7Cfb89QMWcroapx7UcDjGD8",
  "key29": "4AXFJMkHMTqS8CBErcFMVcGUMUJBFKyrU2pjK156PXgHwKhmPAFgp7AUBSHFCNRmENqDHNNDy3E8ZrjQU6srTi3B",
  "key30": "4UCStLfds4CyUBh7Xh86Vdez9pYfLGs4cRJFv8cMmWnR7J59npkFyySUx4gqTA68wcp3R11uBb6zjJAcce7kBKox",
  "key31": "8cbhb3jAdJ6gubB5xFYSBz2i6VVSeYNcaBrGP3YA28ARSHcYyVLbkKG9cFtRbrvuSYwgD8pz4S31JcK7r4YPfhi",
  "key32": "2Vgm3jXdcj97NhmNbLZWYMZGy3DhNa9JeJuoV66Bsq1M9nF1su5kHSiFzbyxVnoVpUwwiokh4BJ1G4DcWVm2x6yT",
  "key33": "27QZujYBaQrWADudftt5SepTV1E2xyx4mgXvvJkaARXMi9qf2hgrR6X7FLCV6fgZumm1C8ddyLAoYdngjD1wUAen",
  "key34": "2de7zEkacnETfDtEGjyeKWZfiyiWyjEHVvX4Kh6SrdXJZGjEsBUBnptc7dPnJzMvA9ohMiit9f7mXVE1yC9BkqfD",
  "key35": "2pRYu5iQt2cDYTuWMv51nL7NmKFGNjhLmera4AEL4zoqW6Cmd17C3TttSH86y7TPsMKzfRtMnaYYuUwFU5fvhm7s",
  "key36": "4wGT5WU2Ev6PxrNi1wrZv64VhaFJVHctSzg6ZWbUcqvZvaacdPrZ56uNmxpHc88Kio7NmkZU8pMHG4hSKyjKD1eK",
  "key37": "3yfUCMtaXvrbXCQHRuupR3Bk9kHxknqtNFEx9si78vAdPt7XWGoDdrQWKptU2QaDSHMVmuoAhjhiuErWN2EK91dk",
  "key38": "4KAWCbWr75Gt3tncYTTFnVbeFzS1qKKv82nRZJz4BK5NYrKoBVETCmYCH5zYhvrNqRJZVuu4rzcKhy8FoKYH1FQd",
  "key39": "5BpscxuYRJuvGy8REQm95mdRuvvNs8aTuqi4vBGYZbdeJ4ktcwck7NWNdVWJax5rptqBhDVnWa2LEwW8JK8JugRv",
  "key40": "5n2Q539nGnHU87Z3ep3iSa2C5d1ur333CD5hzn5c6875vSVtkrGaAxQm2LSxmN88dGsaYDAPjDcRaC2yyKuVgjEm",
  "key41": "4TGarFTrf4Z3okMocVq7cRFDdv6J2FSZf7D74A773A1594mtkJBnQ9m94Hs6BNDoByePJHz3nQ1A1YzVQ8Y4hRcM",
  "key42": "3bt26ruCdABUBGtu3a83d3fcu3VewTgDaFGT1WXLW3krERFbrnw9J3ACVXhYwpCWEfJxXXnfsgUKiSpkfnU3UBkT",
  "key43": "3fvAoZgsPxA6nbRciUcU8eyGeS9E2UNPVnQsie4Ykt4SmzQxjPmZyfLism1SqMAr3so4DKi6WKLuQGNC2EPqY7eb",
  "key44": "32QmcemodcFziiThDXNBJ9142jcWAfQzwEQ4xb6ct4tGUvFnsdXKXpzfk5gLWjg3VD8KrC1VhVRoB2xUhLSDq7i6",
  "key45": "2tequfsdVCF7S4RCSLopXUyumzVYNkMATfdEZXA95MiqndAC3epZhz11pRNJusQa3PcBJZjBbiEoMrdWT8ze8MST",
  "key46": "CSu8inENL7Ko1Jh2SF9T9rZqbkYyjht8s1Gie7GfX6CDC42xGA1MuVeibxwmnWQYTGtBqHYz8fPSdZog4hYXpsv",
  "key47": "5f3aekE5YybPZMgpEfgTJVF5y8o8DKkEtggZgmxsHJiFcsF7Fhv3tT5Zx5dkN4Rc4YHgS1tvus7ta3g9m9FbS4UV",
  "key48": "2qsmDxWXViuRiVtGXifFV1Bo2dA6JeiDZnr9yzYEzyZJhbQkK7znKVMVHYcydnqHaaejvtYa6dkZYjcoozEsodKu",
  "key49": "4E1sRBwFChmWkdYUKLQ3azN7m5cZcnP7iSAYA6YNcLgoJQbSYdH9ghSqzkRxWh67Kgx8scUTZNfBdqvWvhMeJasB"
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
