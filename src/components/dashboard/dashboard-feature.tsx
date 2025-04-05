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
    "5g3ieY7GWyioxcP3XFxaqPwBToESXGzpsqLm6LE5o17F4LW1Mewm3LqTVeiftz8PwFoLkvvXyiSeAx6Qy8zmPf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmH6EfwM6LXFcCRQYY8n2ZwTn9uVhtUtdpHvUKqED6X2ZGP376Y4qvK8btWCbxN2iGQoUG6iy2BTQ3sYgj92Kkt",
  "key1": "5E6ALXRpsSisJFBYhJiQJwAqixYbq7CMJPF8XE4cBSF8cvPUjvwchLMkas4Xn5coUMXkToFVQnjBF3WuW9zEp9pH",
  "key2": "3YrmhzTRRQNy9q5Z9AUudjTLids1JSbGP6MuegABsGrRHoNuvJEHKD7zVTKuig3pCFkp6k5aK2sf4xTfNkBzAqj6",
  "key3": "37Juc5TqJjdQPBKc3iJ2R8viV7FUBxyDDoReiANjFPHh9a1j6UFJCtxEr6tTDthqytEdmPYKRuazQmbWAmWpbvm8",
  "key4": "2Q5ZDfvXidjBgJqZ9u6DUUY7u2zXxsgmpioP3xEvG4wo82VuzznDXLihEHrkYbEL1auj1DJ4yZZ2MRicE93Zsaxf",
  "key5": "3bzBtzzbV5myytgXHdj3cc6X9RzCBAVH6fkosQa5yrGQ9dsbMyQJjwEZHWHtJgZHCUYqt4jtw8UR5Xo6sgvhcwgC",
  "key6": "2xNXttdwMrLG5j8TuPKZWbGUJbXcTXHxMYGZpUW9XQAvfh37R7kbcYo9Tk6XeQvsEZPfZoMbMLTFMgDZeXdjQqRj",
  "key7": "2SsQmFZo2d3CeXw6ALAFZfsPguNf9HCBUUPnnDkXy3frv8F416BrufV3KTYoecovRtZUiWx4ZymGyrAP3JENpsf3",
  "key8": "2LtwLnmcS6M4sCfU6Cs6SCudbSbxj3dgmtNomU5rS76mftKxLV9Bd8oeao8kXzaecjCnEJKzSZFyYJU1keNYhJi7",
  "key9": "4yi1HCWDTiPw18jmt536ALDJGPPkd8GmGSxL4UoN98nc9ic98eeKaZUkHPJEKKrbVRgoWtwDn6WShDDHCHiz9dEm",
  "key10": "4rMn5VyyqY8KPZPu9ZXMTdrqnE6TCSrExf1Hfq39Xj78hSSJmk4AM4zE8Bt7nKtCZLHfijdDJXzLEZWJYDHMDDBK",
  "key11": "4gcykRHEgmpiNWmnFabBYRpaSh86nPchvFKXsRk3XxxgaaZdTNCkUtCgTqX5rEXFq9Eausa2RFTKnpQV6kAQ8szP",
  "key12": "4gxiPNcCWGbcN3HzbU9aivDtEm1T2SDh7Wg5JiBbM8Rr47hULGq6A6D3dP4RfwX2haBQLCtyHGNgswrJiNGya7Ve",
  "key13": "Vq4UdfszBVaehKtRS8qY3mN4x8MrbyyG4ypVinbppYPih5seuZxxawYmyVP2oAr8xH8cVir3UDmwuGirfA1jxof",
  "key14": "64UCMuDrCpWE8ji8DHYEVF2HF87CzQZaCSaTYgxxArn2thfANDLTEMwCzzqco4kQp27kqoVseo2ZZaBUEtYVV4e8",
  "key15": "24ije7VwuJDygjKhNJFgaMqYN5B1eSJzi6kWD2zeb3scgtwYuW3E9AZCpiLDVaWdSs9xCekZ6JnnfdNnjNiyGZHV",
  "key16": "t1hSLMQt4eaFXqe8pb6kwf17h3t4fd7rgs5GPz9MyWWWPajjaZc9Fkr7gFTQ8ifuEASyEXc329gqFPb7r6ErTws",
  "key17": "3QLcEndUYQfRznAeqYrmx1k4Wff2dYmEXqHyiPyx3aE2EJEUaPGLaLjChNXqpnRVEqQgqQNDpg7oKacnGY7v23jh",
  "key18": "3bXXn1MZNDvSaDS6msqtTAVMixX9yff1YLzKgvXJeS8zRVxAstTiaZHw7oRiAWPBQ2zo472LuejqVhSGkLPtSZfJ",
  "key19": "44VMvNo3EtokztHUV8vvgRq575T6Ea7sNSU9vLjaWjDkZdQ76SK7n13qyYKMUezrdUo4TjceP6qiUTLCx5ddYXLQ",
  "key20": "5DcPa3MuMboE1gm4zPxvqzqzQpUNVRxma1C76Ndk8Jdp51VxK2tjoa7wNyK7H3pAxGcGze647f2x9Hh31HWydUu1",
  "key21": "39FEb2EH4aQVPm6dQoRWwCmu6dAi89ahWh9fPqefuYMdXDgoTiLYXkL15jhuAJVccZjufLBXBXCnZmj3zSimTAsV",
  "key22": "46LNdhfNVqm4Psgp4UuFTzR3VxHndSJ6gWHwaAYimhgn7JpuXfDJqRNsSyyQmCm4RuE365u8inELxwxFfCctMz8D",
  "key23": "z99hCZPMFcp6DuoybBfLsq45RMcjWd814Vwqn7gtA1hP7XjmVfdDdqYQ1qdTbn2kJduRm5AGMuEwHV1QfJoacQM",
  "key24": "iDRYYnCDp6Hjq3SkVKYNm3CgZhBmy8aQqzp77gHTvAx91xH4B76LiqS12Eytp4dfcFV9DckmvcaeiU89yx6HqHe",
  "key25": "2jb3G28GMJeDBpYWvAtNYpuTF1ZjA5Sqa2p7gmk6hak6VoNNaKG3nRaJoz2LhXNXsr64M1UJUQT6C2uZdsqUhax1",
  "key26": "58V1jRAFxNaNkm1uRXhoLTfekgFsyH5D1dA3sVvw5Z3arBAqMRuEkMKKhvkHS9cmQEMyouawXBmmGNkcCFvSogXL",
  "key27": "3XsreDQHKeekNw7qX2inNBnsdXqqUJZ3zuk4C1Mqn3eVEZzZ5dcTLyEkJVkcAwz6uEm2kbTtLYSDAroPvNo6V31M"
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
