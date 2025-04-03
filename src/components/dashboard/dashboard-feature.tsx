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
    "u5tAC1t5UPqy2shbSpNVrMXp8G1xQ5T7DetixGeJPv1grTSM13EaxhZzWr4CKhrcypMUzB71Az3jhdcw32fEPef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ohktPpdWtbVaeiV96MAv6enMfKw1j5zjZbr3863CwJGND14VpJrNVofcvUNGjhucZ3SJpSjeWVFM9HBzL2SXiA",
  "key1": "2XUx2ouZysVTwuudyr1yDKaK31sK5z2gD97zquW91dAsDabtEKTo595vBoZtFUnJdJPhU2PVxVdNaSbUABDQKizu",
  "key2": "27Jahv3dH1TkeXTk6J2xM5v9xnuzLMthbLJeeQskqezDa2TQQjuhc5gZSGcrCwn49oQ2qesXk4sDCv2Pkngq45CH",
  "key3": "2eqe7Eh2v9hN4kRZGMY2x7XgK7wvvaByJ3XvaCxwia8WjzhD2q4NyQhvxQh8T8vafhgZ1LVQxF9CQUTHEZ1LwUXU",
  "key4": "4nCnfBqrZmf3qN2KMjDTR6whfyKWvGQwD4cmm9hkHLTgYsJR7GtGAyKEg2ryDsnSkLCivJnGnJz5shvCGu35Kthc",
  "key5": "326QMuEp3VH92b5W24kgdktWZVCvK1HkzJZb3mPGXitTP9mTYipz4MnKhewXnDDcfyVmoH9u8VYwrx4d1k51brCo",
  "key6": "2uFn6Xoqmpcodewh9eQZT1sXdgrnSwcCPum1MjxS81aFcP9McPPi6ceoriwT7FDWkxK6DqGZQqGzfo7fpubGLvEc",
  "key7": "4PFKJgh4QoBBt2w5KmmmV97wP5HN1o44zbLH6V4i4xsJmXnVnPxXFz38LRBFPgor31Xfh3LKByF9S8PMkSsy58EH",
  "key8": "62TAxRsv3xRN2uAGk16LqYee2XayCTYsu47Eo62zuRL5nMdtgVKAXdLw7gA37q3u5474aLWkn1p9xMk7q8hmNxGc",
  "key9": "5Cvhb8sqj1cPfapc6PK4QmcncMH3sjpRvuK7pegJWiMZ5XeRdHgQ8V1wzLZbUULjVndzcMt46Y7kEAuDLHvY6gri",
  "key10": "kFi6aMZxe9k9Ukv4Zmy5QGLCSQ1qzoSdP2rBqY6cLpuLimFGGjQienqbQiLgECHj5E1HQcYcMsmeVh4Mq9icX3w",
  "key11": "46tuNFonsRu3BLwyuAsKZXieeNoK3hazrwutt8ayE6ftKQRBY2NoA5ct7YNfTdRH1uMQDBXHo8eL1bxRLY2uqRwt",
  "key12": "3s6X2e72dGm7XTiXgjtPETyZh5C2QxEUmexXEuxsshrBxisDpQz1knpEiBhRpuAzc7iK3sbzxUKumWvisdwxR2DV",
  "key13": "5NGhhchgXsJ9d4bjpJ9Q8dcDKouDchn88XXQjndBUyB4UoyVswghpeToKEprWbjFz8upH3RfPWii3h5NK9KWX4uj",
  "key14": "DGumF5T2XT449pzEvGdN5Rozr8UVpTkJUa7GMNwBTakRrU4gMVjogKQJaVTZSim5bAX3eSUyr2nap6AT8irgFhr",
  "key15": "5gCb8Zjcku8rvMvkfj2o1mGcg2mV9La11JSN4JdcBe71KvmoTNfjSpZr4mv3UJVLH9junrYoxyExBEAZAZSkreF9",
  "key16": "xEgLrmz7v6pPwK4gVbCtjZgwnES42VLbup1RW7oRUttcmE4y98yghKqMHgeDvfpNEfPmewfu3wfBEtZGGgJ7rtF",
  "key17": "2HhWyjv8hsXaEXAkHuKsmsjueZYyMrDVwdQ2aY4LRiV2YSRNqXHdT42nSgRDQycgnbJYJuT85FdVaFKYqAZeqVxv",
  "key18": "5VP7316C9PEkqWmBH9D2fWGZCN3xfdhPFvF6fNkdMjou61pYd4cYfm58eJWYJVGvTqXs3wHnUSHRk6tPenvsXQjW",
  "key19": "49iqKU695vG8HczHFQAz4reTnt1yvvhciZjehRLF8g7p9sHNcWoa6mVNk6q7nAWtdGGrJaxBAdhsLh1qL9cmTXKb",
  "key20": "4a8Exd7fxF8GLL1uWNVnF1r7VUY397tu5pUHFXZ2rR7ejBb6ZRTdFHTL1c7ns2fXH7SHDSY41JwQkcYA2wBkumoB",
  "key21": "4UfR6eoCKqAuSj48jE9kVd5ozmMfC2iVuSjiTgSP7i4xg8Hs81mV1HY5Qyy8FgZmsSemnZDH2jz8oQR2i6zmjV9p",
  "key22": "4jSmAfSTkegE3NLyLVcE6QRMTUqeyBkBsfggQGbjpj8BnLAhu1vv2L8n1dKhH5srnxUcPFp1dsk3EQW35W17wxSZ",
  "key23": "2B5oLJSND1XEsVaSwQtGfiqkyNEoC2dSBUbHZB6UyqcF9b2j5tpkMjaYrkfmXJ997R37x3xb8a2LzuxDKAvs4Tvj",
  "key24": "59Y1nrp6PLZn1DwcH6njGcShhYyZnhwtRjzfAPsY7h7nErEHXAcLsG4MCZxXzYCuPw2F83hKVskeDpJmq1qNMAu8",
  "key25": "5mLvDnygsf23MMdA75iThJuFsvThgnPYq5pEDr15qk97SWAoL6uaEB7ZEm7kjgESFtCnbiHLKrXqfbLx2KoYtBmT",
  "key26": "4zusqhVMbxJ2DpbrHTdbq1bdZ3eKeWRDAwe9W1DeKnu5hjsfCihGKFYwz91oudMwYxVLpjZmEtFEAMhcrWziNYH2",
  "key27": "3Jhkivx39ttF5ijTPbDTPdXKheaNZ24WYaS43EvUyUBoJpMRJrku69zaQfLCyRtn937GjH8PdV7x77s5G7aY1zsA",
  "key28": "2BXhEseaNqv1GJpUQA9HdRh7Hhy2rdDbcjy7sDdG8YiDhwGCtzY33KmKL2GVhsSreYhpvZrS5rVoEEgH3YXPQ9Kp",
  "key29": "21z3459b4CDDr2g52jAuJeM15vWNv9TGnAmNzmGDnWtpCYNdqY7ByNAPBgSY6jArWtwkh4JCBN87UwVBXHaB9g5Q",
  "key30": "3mxymDstGPhszjn9yuZT2S8Bqdk4rqA3T1rqc7qFYha8ZwbrdJfM5sPquwgnkzbnxUXJd8c4XbSwrsCaJD7dGoZ4",
  "key31": "2jyh5ZGsPs837F9daPhV8JJtvBTzEGrn1CXJ1xUK3HtTUphFo22zfZkrjbnarUXcd3CTYsrGZk8aNZJgAvZdCEdy",
  "key32": "32H4KKyb5r678iYGxzVB47Z8yiKCrPno5he4xerHfMtadio4qbYi8yjihF5vhDa4AqbihoQQxrF98LByYyfmmCNR",
  "key33": "5nP3KM4wW131GGQhcCoXcKotGtyKbRiY5jkag7Yc6WKxsd6Vf1YoGn33tiZzk2feHoUnxuSxSefnH9YuTg3mpYYq",
  "key34": "26VMzgaGD6zuav8empkquWZ2gsLazCHxUVkCrWohDYsUjYzPCwWP4cqePhEDjfXNvP7bBUSSYMenEVWsd4hAxd7P",
  "key35": "4bi7hG6hpXAzZGvtYgyfDXnCrcD1TZohDUyG91xiqjYSoGaV7cGwbzSTLayvtrqPMMF4f9GzddxXccdg8GWhrozf",
  "key36": "3g9ArKWgYoEdnhUu2yBq5jXASv34y8kgTvUWddAB2Uu8yw7MvXrY3FJmHDEw1XruQ8psYJCoUzLbyKvq8eXr9nB6",
  "key37": "2LRBcwUotFXkjGCtj8hoz479kGcgm8VbxxfKPvp9VwqRh369eWX25ctVtDLbp4GbHuvdtkCL3vWQSg8NxekzZ7AB",
  "key38": "47rwqD5vWEq3rXb4kzM8Diqq5PCjTfGbQvwH6xWWTUATLsWcLZp1DQbY8xqBcJxmAj4JCg9JQGaBJ59Af4KdaV2P"
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
