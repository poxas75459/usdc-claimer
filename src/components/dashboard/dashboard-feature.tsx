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
    "4Vz7GzaHi1kCeDux91VZJGQnJfnHSadZdKKm1dCzfuK3d9zeBomZ6p8WSSjRf95QPkfEBfn6jYYAdb1dBnLyD8an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VBQymFLBd3vcxaBrN6ippTkKZ5sgYXxX3hMASt7uqbkU8JpsiKJMoz3gBm6c1ttyskAKmBcMUmWF4F55NdxWvC",
  "key1": "29Uh3kAPgucC1YuheF5CnJK2jxUquE9ys9G7w4WpCgas7wV3Wmjv6rNB9H9rSYJMP3m9rxDf4baWPvstHp1dvLES",
  "key2": "3oBd33SEkJPx6bKGYwLLCyngfyPxVfKe9jS6NJFnmHpddV4JxRrLhTTLoNZUjgR73mV2CKgTBDMjiajC7gF7z2t6",
  "key3": "5xK4AuSdE6kXvnN3CHaszG56YZeJ4BKUoCRoBhTJkjtgxGfffcqyhip32VYotgb7gsnsLF6DNrQRy9RNkm9uGD8f",
  "key4": "66nm3AK6JBQrNRxxYhsiHSbkNbxDpJbbJ2qWkByfjiNhnrQke4XtFNsoRn4EzsaGEYES9VMxYWjCJTzf6vbND3Go",
  "key5": "46Q9wpWypswQmQZTQ79FhQ6Yz7811zoPBu6heMzF1mLDXiReN2czo8C8Sxp85yWXHn7asTx3BHpdiFrcizZH5T6d",
  "key6": "2yf85wzG3mhK4pPZ51bFUhpegPaqCNoSg7VjEU5Pkeg9oxZhzhFLimf9boUSLePQBWcum8vH6Gqom5xhZFynRYwk",
  "key7": "eHUp66gwnzbv9yPJ2XUwSggVNNZZaazeAaGKVtjfBqnzwBJ5x6JTFjmT5xdMX2tPbLrYrmRMiN5bXJRpmTMXZdx",
  "key8": "5n3HFtv1fYXwuR3R8tAXokDBxaDpmHCTnfhYRTMPHCBDVtrS5ZyikevzxqKxhNAkHGGtheL6mQZ7csaGKVAWmsXk",
  "key9": "21CaRiiw5Eb8tRg58x3gkViiRNG4jP6gmAU1xw5BpRzV8JZsJCXwMgMjxCXyfvi6UdC885RxnriTHvD3oCiJtnNo",
  "key10": "2GhviTb57YN2WjPwoB6JVeUt5VpVAG1WhhxWH9uZ75YF3T6bqVw8x322Pso7kKH9MbU6r1xLc45MYbRZSKtabXyS",
  "key11": "nkzBisMyDya6GWpJmaeJuJfH68yFF8Eb62pWMB4w6prXuBwHV7LivMpUQfinPogKvP83LU5oq64fEXFKafaQmWN",
  "key12": "5WByXDXQm2Bn9MhoYrejEyGj6mMTmTndMjNy7XcBNHC39FgG4b1GBNhTzaKRWprMsx63mCvkH1AS3PqnnhvRPMzt",
  "key13": "2Lk6K5u49xT3Y6BGnC84K4rhw7iQuKGgdsUu9XZvQhjDV6bWJyorr6jWTGxsyMZZHrntbMF2cxMESYkPb9BizW8m",
  "key14": "63A7nSYKeymAYyBCKeFiiSL9iCPAf9Ueggjc3C3QhJ9fKPs3S7C7ABPM77j7UGgQqK17ZeudjiQYPDepJeSE278y",
  "key15": "2xz7Gw8aTvVsc5FD8E2Fc3RpJrcBRGmmyRr3yFtyvm9cWmec3hA94r5spBB1JSZ8mbuBw67wastMsmJmyPR5moxp",
  "key16": "5UYV11TikmF4pah3KVX7YbMmGfBqh3a8kHv1rWnEZZgeanz5ojc3dWKABpAHge8T2TT5UhSBySr9msaCdGic3Cv6",
  "key17": "4cJg5z1ViQJ2iSSViUSE9tKUXKisAoFKVGP4mDuKMqCXzp7z2j6MtfMK1hjkvnDUs1kx8x7PGQxXVCaxYwX4DkVn",
  "key18": "5RDDMAkekmCXSJwJuCE42nkELMZxoRHGssnbzMBHM9mWvzhJeZDWDQCNJWEjN87E3c59Mq9ybAmyqMMCxGHgtihU",
  "key19": "2SPLMwhAvEVMcRK4ws83EVBjkKTtmH9y7wMEkDhvKZdGvJhaYfYYwc6rP75DEFpNfJKZ9YBgvYp6pg6jz1AxWJtT",
  "key20": "5AamE6zgVVGw75YksXFYVXh7E3XxejbPvnPwM3wgnbFQgqH1tDEYqnHxGmqEUsjHY7KNaE3T93JGZn7ikEHyiHYV",
  "key21": "L1eK7disJ1pAb13vW9FUfqhZfgDJksZvjtCjo8LY7zWuJyrs25usq8ueHLYFukgKCxikkpws5vy3v8VSbAVmZn2",
  "key22": "mmzbdfVLHz6T7RFo1ZvjYhM7rvYSa49y7AZkspZMK4aNUbq9KcKSY3h77boQopRqtZ8o6zXcRcx9e1HpprgiC5n",
  "key23": "2NnY5CLZSV4Q81XQWhKgBEgqFREG71QeyvAs78id6eTW8JmZDRLgwFaMar1QBQ1f5quvVyjiDcaYX1TkSoUDawzX",
  "key24": "5cNcq9BhQX3Z3WfZYNyLkhDXbrPKufoemJ9yGgyar8fVKLAbhXuZoJXQ9K2dRfdLVGiouR8nFFKn3ZTqYE4smeBT",
  "key25": "wMNcy9124DR79rJduAc5y6sK74PPfBSgd6oaoo4GrwToXb5xwPVf6YaVmLyEvxTYLGubALvAX79HJTLaPNm7NDj",
  "key26": "4vRojchAK1Z2saqpe3nzhRtY6M4Hxw5yVrof65PKmYe1T3Q6PbvNVmNguwinaxD9oBDYb2Lq53ywzH2G6g7C8iCM",
  "key27": "452JChZa1bQQzDdi395dLcaHGybxRhWu7ef9DRymB25qdVSZ8RtyUnLba3synpaVHzUZgeDnqtWMyLxmY1jVkJXr",
  "key28": "5MMjTeSK6SaTY5Z4Z3MHhZ8Rs3CbwfD1denZW7agAsgeJbvzqhKQyo4NFKu8usDZgcZvAVpi3HLy3FSrvpfEyZS8",
  "key29": "mqtGQXuoPfLWqeek8ieYjjBdiWU4hfS86Nc3rqgh4XEqE623SgRkv5J3aQcTTaQ5iQH9P6riPLxNQyMFaPm7vyu",
  "key30": "3YuUyyd1rZnD7pVfa42C22D6qnnrtFudH2vVszmxACirVD5TB7FYEuQ9yiVC3Pb4269cEjKBSkHfURyyesZvKAMb",
  "key31": "24L7Qytw2phRccmmzTtWbWQjbX9GQivNt5xGjaTd1GpyiCGKgNBiqGsU64vv4zVnanvRtbgCRvYTZW4Z8VhHL4ca",
  "key32": "4FHFJx8UGE5En3BtX4G4PsZaYM1U2qkNmacfjqk5u3EPqzqgwhf1cFb6vwQuPQf75YGyTCFyys3uhMwXEBB8F8H1",
  "key33": "3W8XM7NK17qy6Mdm8ZnY7gMm6uBBDhhiFB9NKvkxuHvToX8CJtQuBxPgJjQQNacM4a32939xb8ZwsqjntApYjCr1"
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
