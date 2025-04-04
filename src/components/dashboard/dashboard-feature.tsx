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
    "2L4UxpU8zPnd1acvDTyLDE6BFz75pFANJxoC5AAHKfTbQ76LEUETP5vYR32eJRzwg8MEpTao9xsBVmYhggWrtybW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LsP6i6gajGbpUC8zM9A2nkeC9SxtpM9QgHQgXuXQFsKPH9Co6FnXXWQhjxkUrHuTYAQSjJ7ouRMhd8aKucmnUxX",
  "key1": "4HgEq7nuTUgpetQaKtm6eCkvpcA4MBEVxzr1KatZDFd5D2U4SJVMV7yKQFaZzvRCJKQD2sKYaHduahsSrJD9oxBM",
  "key2": "2m6XycjrgBGNLgRKcLZSZ5qBv31BeQY5iHSVaAAfBAkxE1CxDYsyyPaGFQFxQtLFWx9zWUCUgsjFwioLGTpAVrmq",
  "key3": "3FFJnJmEWCxTgPYghDqnKb61TCAULDNAsjo1JUTKab7rvUdrdMLgf28hwiej7zjpS5haNHRKsEev954JdjNeiG1y",
  "key4": "3FYzUBNfwvWpDp1jaVEJoVWJWBKQhQr314fx9WoWnpEjShY3qeyXnGfZ3HxsSXmDJ46cChnPztD7tHTby17JYp4u",
  "key5": "44ygDj9K8K1syJz4KsCG7XFzE2T6kHppChxoevsLTYRcu3ni3yw1HHDuAoc9Ky93PoXxpKXZjiGBbhugcBuf8cVb",
  "key6": "2ubzzavNtRYh5BGRAfAV6J4gRv7b9cC1RHciQSWUxS1G7iJVn4UeJxTeyQG5Km5RMdLZFgWarU2XmUpgMc8NbkUf",
  "key7": "3Te9uf1oaY3MHpnYxj6YiDqD6RcxhNDMJ8bZZiXCTvQnxF3rduZXG9z71EcU9zQoBM2DrmpuyiAPJ9t3EKMdgCMo",
  "key8": "58BGeu3wTmbkjYiRMyYebGbjyVB3F6zqLeAT97uAAwmhH6VK2T7invu23QjSvq5JeW3vrnKrWKfbSbT4VCSwKjPk",
  "key9": "4Br6G4j9vEMqSrAaGF4jeL1mzZTZheG7JoquZAKVhQPVQScgdcsgxSeLVcCRNc1cUae2YSj8U4KH1ZWqBxc42hTb",
  "key10": "PfLp4gZ3AuTvWjMe3n9axgoYXLHuFCskFhFwDAfEoX4BvcT3eZfWfCzDJePxbspv7GwJDqSyM88iCH4K96ky9ff",
  "key11": "53DrzXGECjASZDTMw3FpnHbjwrTHfFcGiukQyRGFZkRwaZPVBcDnrdsixsELrFiXThuTRLpr8gCCJ7dMHwgQZeja",
  "key12": "2w8p287DwKLSTBxtqmrM8PDkHPHVWtyyNyugPPuAW1jUeB5iY4STMXmiqBeW5D5j5hedEpC7wweYyqs2Nojk82Rh",
  "key13": "d2pN1KLAVkSzjtu1ATbS64U87BCMedff5bdTMu6wJf46iRSSCXC6De1iWu7D8xbMFDUihnj6HEKgzk85hmGTPUb",
  "key14": "296HNaMXHwrr2foUNaxFwqRxkDXwL8b8gY9Jyp4ik6BaQ7TL4xsfyq12mKuHawiKsz4mUVNMRttHGyLnqw7WypLX",
  "key15": "5azwWaxa715amnJwZWDQY37mmCy3qkZhp6CSGWJ1Z4ojr6fRBmteoZWhGg9ZXZg6Kp729BbA3AMFLwA9yonqKwzx",
  "key16": "25w6i4r7QaeMHVNU7dY6tZgiXMLqTShY8xxRPVtAgcqYRx7khPZZshFy1hhE41ZjyWiior6DoyknbpP43utTWPpZ",
  "key17": "4kJmskF6jMmu9hTzo8PSxL89pEfwquPAtXHPvvqV1vvvJ2Tv5Cj4L27icaiPy5PN9qHnr3RwYeKMckm4nFdzixd1",
  "key18": "3AnhCedtLmMxsuXY8RsGJnnqJkTQFXgjQZzSYRXWLHYQ3SDbbEiyTkRghw9TVq3GgaHRaU9whz4BPcKi22JEnr9d",
  "key19": "2WxLMwzwoUCKLs7MEXXcCs4rjBeq6eR17yyVDFWQZ7maQKybrMrUx3Q7QVc2Lvc7ncbau8mxqU725AHWZdsbf4bh",
  "key20": "9aWhSNfkXinoj4bFpvqjMjDVK6MfPNbevHtXf8yFs2bDwreevkpLGUWhvpHrmvVZP486NXaKm1wUQMtK5MWW4Sq",
  "key21": "3FrdY5i6VQuF68hoKGAzAUUaRLFHC7V2GYuewNWLJdjQu7jGQzWHXDm5CaSWqB5XV7aHrLR9DWtNYQ3XnDLSidEp",
  "key22": "4femToUGztacHwXGj8nuABM6NQSnuCE37174fCjKDzApzCCdwGfoU9bWzH4Xc2qGt2zQgdySFHA7YRWse6aBsAun",
  "key23": "2aLkiE868BUR76LwJ3EmJ51S2yjiXfSJRSdcJoTLxep3R8YHDaQG9qjTNEahGToFcrGePmZJUpBnoxFuP2YVNXz2",
  "key24": "32zNahYvrMDdUmnnD5QFQmzjo7MkPUo6h8Nk7uUj951PB1oXd7UBu8FPW9oqEaxLLJKxCeYV3NAUpYsGsUsK2iGz",
  "key25": "3CYiEdrdM3X8qtQ8uFaBTATzuLKsMmt7gCmpbNjbYdC6ipJAb7to1yEb22Lw5a1xc7JgyKKZ8EmpyAgAQNEjNgXk",
  "key26": "2Dx9fbybxh1FeaEojXrD2CR8ryBU8sQF4WVP8bWTGufS3nCTeVG9cy4c2ubEH2dv3sMXqu5MN9HyNYVjTFhzMT1T",
  "key27": "58Bc1XGBmfo3WKdrCEJNrR6DJf6ajRmPsjbDhTQyvctW8dua9zWbRkyfntSe8L4WjbLEjcUM22K8aEesnUyA4v2p",
  "key28": "2wkKb5oqcQPyYcMuhxY4b8AuHh7Nwy6rDjHWZDEbGzQcTHE8LLKzmXEuVrB4AgfZqrysZusHLtDopyqY2hFEQcLP",
  "key29": "4MtzWyBVcULpvaeapFU8Q4zEwCk1xkWgign1mh7z7g5j2Wj3vF2SaqDHCvssopPnwY3LoEFKekjq5ADukyBFpWr5"
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
