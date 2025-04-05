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
    "jUGSVUPqZSmQhoYPuHVfFFhys9Na8aT3bRGvKEBx1tY74JKMC5Vg1NwthvyepaQgTeYcGv8JcJDUj12CpPYnEaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3eu8vwcQ5RdPLrX2WgcgLYstea9E6g5cfG8za5vJKsSm5n1Nx2ZCj8wQ3KxEZ49CamLYpbszyRk2Tj71f653kX",
  "key1": "3D3d3x1errBBs8U6g77AdeMGdj9TVAqzqHifMLhTDvCu9zHRMCYSTpJyHDYSstg8TkPZrZkXxDU4Jgre3gb5ZFYU",
  "key2": "323zQgUdcEz4JW9XjCjSoumamcxF3xvJkMVZyU72ZKvrLaT6HEA36f7yZDvYVhdTXiJKFUciZGMgtDqY8CUH7bUH",
  "key3": "5DiG5gz3stMQmYx3vr68KwKGt63KtJvGCcBiTPpdUk4saDmwdnkGCyHTZUbuQS6kpqKpax8fmZaJBeC4oUssr6aQ",
  "key4": "vcgL5NdQ5k3cUGHEfoKCoFJuSjREGUvaXVaAH4XGEPjQLU98Y3ciuECDrihfwKB5KytDXRz7sQGZgato44mFnGd",
  "key5": "DMajPE5zy3qs5Ty6uvMHJfa1EUHnXPKUqJuCxFy6f18QSKgK6YvaU9XgQEcXtwV22ZUPFoSt4zjuJnYJWWCkkLB",
  "key6": "3reeknvJwJDszWg8hpbYqRmbe5KxHmhVYH8poDTzRdGpRkeKpWCS5puzgE1xTcpA2oenqT2RZ4cqRXBW92coxCfV",
  "key7": "64j6Eq8T7SmgntUduV281ajFeZFWzjdSQC2ubvhjbMDQ5FyKWYH9RmoDgLLfaSjz8AKbJ92PWmsunt6zBh8qZGa1",
  "key8": "huWgFJTTtdBeWUKd9GvAr7edJbo4RNJC1ZNhpwzeDKshC38YuRcCpfpTcUgzRvGT7W1iyPw76iKDAGF82vUtg6Q",
  "key9": "aNopSDMkcZFcEkLBvXKnNGVXW9zpArWQ19xvUbVgZfu4ewnQotMPH6UCN4GH7hwa4yaUzSJ1mVntjgH4WRDp7da",
  "key10": "329ixncmVCeVKxAojJZNzzeBRoXEK2bhhiogbpRMRh6SZEBb2VMb7Jpf5WDgv1rynrqfQGMpgBgLJNonfZeWdD7C",
  "key11": "5kjPap17BaPDUnYSGHoeBCLhZAg4NPo1z1rdn4akrwKJcifL9bjcAWwJ1ks6XvbRztvEypbyjHGnNe7u73sLnUjb",
  "key12": "2NaPXZQTSHhNcCkQbwsXP2mywhuAt1nQpPaw3vRMRvun9pseGV2N7ZQ7MgzmpWAfdK7XRfN1Y8z2KFE4JL2bk5Fr",
  "key13": "37c2b7zpv4nCPjmfBf8iMJA9povFs89dxLSWYpqn3YapD5gWeNja92mXA7NmqoZ9p3U1zpHXxMvDvqGDGv3pNY8w",
  "key14": "5bd5Eu8gUD4UYYTB3thYrU9XgGyy5BTJyo2qqgMtLCzihQhbSutw954JrnHHm8Zw8rkKVhUD1Uch1JcXNydca2wW",
  "key15": "ZS4N8Px2piSTsJg6ZNMmPo7FgZK9dvNVQ8k9XF1TkEyuWtoQ54DHz6vmp5YXUmRUV8bMyTqTzLm8nsAK9ipycU5",
  "key16": "3kMvsMn7ujY4zanoQxwR4husNXB7GoAXCeafJx13x1c8YCnx8L4EHbzBPws6SwQmk3EdJDCpBJ3ruJpmzfnSWcNF",
  "key17": "8uGw6un7ihk4MJL5BxBUnWsbNLqj1P8AEd4nmGuQvabS6VhdeSEVCRh3YG1Noz235MeEsCgWWDNLLGVFCrfpPEm",
  "key18": "55YxLjWFLkUH5i4HUFqAfAgU6msP88YrLFo9qr4bnxZXoMwQ4az7GVVV4Figpp2Nui8NHm3DmvvjNX82r59tLZiK",
  "key19": "2rhoZe7JQjLuo3DAJPWvUXEAAbRo3fPprtiLsUfQ7JrVZmYJVq84M9mtE5wgxPqiapGFy3ScynEYuRt5NHzEAYfg",
  "key20": "2xtpQGZTEsTMkwotN42moS4QxmpbcSp5MeqnnwQoQPXBotf9vJHNFpHXduYAVhvALzcXWMk1AR8UHjfBSreJTFuH",
  "key21": "5tN1xyVQ15iuRK5y69C3ugsyKLkxFf2gPk2CDfjPpZawdwQoEa5y9GDcc739NBKJCz8evdLTWiiBFD1yTEA1dn59",
  "key22": "41RNevSW5sutCEm2YF4ovsQESNwG7hEbuQSUeJFd9VyM73QhHqE9qUU8kMBG4d96gbbcbca9MS1mPe7UKrxdmGTn",
  "key23": "23ZsGFaui7N82RJGPSqJaDooqVLDUu8C65zHt986AwkdsKfr5oyoDqwgdjjfA6zEDsmT6kPobjdQk5zn9UQhNCV5",
  "key24": "2rB3XysQM4Z68VVSXfE9kJcv96aXsWmHHEu9GLTojFYqaepSeeXF7r9Mw7LpUbeb3A8adR3YqvodLQr3LuyYnuSx",
  "key25": "4T6E1jXcdtT62jAPvpPYR9hpSTw5cY7fffeJj79DzaDqtZtTkAVbKYi8fj8GxF2GSqqFMjSuiT5vzb9eofHWr9U8",
  "key26": "5o9wfttsYJyEBd5FFfd8GZ6ihXTwGXZkug4SCvpdH6kbasEAi1Xuc6MXpPuKABp6zDvHhSzvhbmpu8wzg7x73BZv"
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
