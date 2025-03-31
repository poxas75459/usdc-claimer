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
    "2khindm4fm9rW5LPyqhQs4sfSGyFsrwWAybUGgMboaufeNJd4gtddMEgz48PYymhPdgtifi1UoQQ8DRpuubRZ33k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iexfVUPrMPRK6G3tNq5GJ4NQCkbHcwafYXqrkx58kQ8iKHS4J49w7xWbwmC4Mniy5iYWqvoVJk8kwMMK5W2L8tX",
  "key1": "4dwNNg8wjBATDUQnnZGYFcvy4H4MkEfxbswpx8DXuZZwUQ4L1Kzff5xX54eL6YrWu72nmMHUjnbuKdsGEVvpbG2v",
  "key2": "3GYb82Wo7EBGBURLogeBKD8eBpZQhjN9tmRAR7qcpb9ssVq89RGiCXRdva9DBkB244fkBDPFaLXG4YfrS2JjxfKs",
  "key3": "Ur1XycNiGNz716gQUA76Rz222U3uwnDhi1Tqynh9Vq2G2h4fEykzvAEmjouEprf277x8eQmvboZokdJKc4kTzZ7",
  "key4": "3EN6GLgPqxo48ccLPZ3GFmq53dWLfsDieztr4Yw9j4Tyuwt75XnDKJ5WxV9vD3nYkksgiR6gvjWovEWLdQG1gcU5",
  "key5": "2HLfVZUwP8fDb8FVJxufM9EMYBq8zNWKjMrUxMH3iHE21BeKeqtQBbhDqdXbeYX4EB2AcorSrNk7jzo2f2bgbaZX",
  "key6": "5azetfEvkNKSGQdK7ma8F87RRcx7n7NeUSKhVGAMs1CibyqCJ9N7Z8NNzMPGjM1rACqXrG9okYByeqhCoc9LDtwF",
  "key7": "5yJyDxoUzMh76F9xvi5sGL3aS7HAA8mjbQKjWhVDmZnF5KBNhAYq8qs7tRkB4a3av2ztc79V2mZ97rA9RQXMnZLM",
  "key8": "3Te2x4Z5x9EhF9pnnYu6UaCie3uHKwQfumLBb8Yd12tK3GLpgqQUEzZ8LiM41hwB2frnz7R2QL3banS2XjGaYRjE",
  "key9": "2JkxJLL6oeHQB8Vbuca5T5VCyG1Fqamdszp6vefPYB6pEW7X7imdFdAMEEL7Eo3pPEEftTQtAgnywvzSZ2xBxZx1",
  "key10": "3hecWm6r96uYjZq6px5htFWj25JrtMwvYiRePTTUUd4phNA4VpcuyhWUxpYqy2AEuHNfWYiqhxbr3RByidw6zszo",
  "key11": "5FzUHEUfHeR6f7EufaMPKVGc566RrVti6CcAh7aohXu2v5TJirzt2sdJrWcu6fwoEeh8ySjhs69JEDNRcpZi5bCh",
  "key12": "2bTG7n3ELEDkGc84GGZRkVbBdZC979wUXasrj5stWP7zRvjxGV5yEHge5qcTGJJwh9jFhMthXZPqh9CnB6A8ZkLY",
  "key13": "8JrtzrQ13FkQHq6pPfFE5RU9DeS45U7kpDCq6RM9Dksopdb1j5b6ZCwP4D32yx6Xx5M4yx8Mj7RuNrvKeLSZWst",
  "key14": "2T9akgAWh8voGtTY6vEnMA1zyNZV89XjohT1TrexuVS6WA53CfS13B23unXXvD3PX8mkJDkQhypJwB2TVvmx4dbn",
  "key15": "3pBawtXfkbHXSrpxb8wNQkwx1A4NsohPTJegdy7mVohT8hgJzfyhhESjJ6KzemBj7aSRh8Dt56QN222uZaUe7TZT",
  "key16": "64UGLAhQJP3PnLwSnKRhvoxQe41mysj3wJDMNU8vPcdw9W8eGSS9qvYV5QgPi4NCPAtn4LtT9uppb5XJwu9XL5X",
  "key17": "4iXhPoL2oKCPpKV3Hrb5t19uV8izMv16mgjTCsMRLFsXyTyT91zy2S5S983XeUKZx7bbXMFEeHcXLR2YEtzPXnZK",
  "key18": "ZgLGZjPwt9tH6oufF6jxarKYHzKY8f9GA6ZLguDBxm2Zj7hvEtU2QCH2feJUaH8ABSt2m6WC1kJ3dQZ3rRPZgCz",
  "key19": "BosS8uTQkeowRLbKmJN31wYPFbEmbP7WF95bYtiESnVsDxt5SGYrTMJMwPmxVtY3ns76dKGkDYDrWPzakWTZuwn",
  "key20": "4ZueTF3sYDphfaZMbPwW8qevx1obCJPdJ3wCjzSxBpybrtsoe8SRKUNQjKAdPozgxxmCXEt8Usyn6JVMtgtnvYEt",
  "key21": "5dWFpcsuQCe3pV4NJ6pHuGrkVwQrCUZJFcWWbq3E1qxKonbQZPNg2wzGM5bgQ7D31kFcV5MFgDyE1iNZf2u1FJwC",
  "key22": "5mckkdvR1fbzBgMRP2HsSHXgQCStqRucdukyCggpdkxo5mCVbY2nVGQRc4CBoXdE5tVEc7ve5qC4yeXU1aPxTFNQ",
  "key23": "2vnBt2sxt77QykYAeWSqiPpahYSGXE4iwWQgzsc1C2g2tuDyFkq67cucyWmXmu9Y8vbGAg7iMhsGZL6HsxnRFjFq",
  "key24": "HPb3PGSaWet4cGfk4sXELoExttxQ4sztfknamUisQxdRTPYFWLHBkGKZk18ijZUY7PysgtEDnSfsnAXgjFEpiiM",
  "key25": "BYnEQAuA3uUK6pprcuLJeFT2GvsGrzvUbPogLD5mFxrjWtPPL6tp7Bacb36eQCto5uQVZfmKmpkek7Puiu5aDCn",
  "key26": "kLCJ4bykixUFQ3cnDVbCTa7zsHgX8qZQHrFb2p5zf3zRvpQ7QNrTshADRUWriED3NkmX7deLYdHksHPUYApp5pg",
  "key27": "3LdWgRw5X8V5apkxSKXeYgMpKQk462juGhUH2tXDNuZooWxvp4JDvv3BtjPffdaddycZSYyzZBNrCKWVHBpJqgmT",
  "key28": "4xMgH8ULxkRbYNJvYGV23TkSJiwpZHrHxik4jH7cJhifkc2rhXP664FbNWMjveYB2C298mipW76DBnGeyqTKHyCc",
  "key29": "5ygGuXJePrHPo3R4SGXHgMyHDpTajeamHpmmsW6cuNJ9Y4WCfUzxyvJfGu78oryFxd74rozae6xJnoZcdAEeCgGA",
  "key30": "2dt5EjKQzXcPMkbvrvVMLU2BDk6iYs3vjLZC6ywtDVZeAsjDZTSwYgXtepH3mrBRrBjBFDSvNSZ8tLRVMim5PzB1",
  "key31": "5AcBNe8NCMa2MExukNzPsXD64QyEaAP1CwfxUHn3coRvSqFJQz1M5Yb4S5fQQd51MnsUWzHjPMSu5o5KATN95iEq",
  "key32": "2mEZfcpciXGP4A8XsHyzJUQFBi2rk1ttgYtbVebdquuaNkJx4TEBSJBveZ7rUFyGoJY4B1MuWiwWwEeJshpcTFpA",
  "key33": "2AqLDXLoespxeUWhx2hRhQ3hSYLx74T2a4VSNVdiHukMBYw8ArFcqirFVWLeSq3BfSqkkdDz9GTR9ANd33C9vMQu",
  "key34": "3jYV7PANpWZyfjdsxdP32kX8f26gKqeP4Uz9ECwVtXFG1cKhrWUk57fTzdtwkpQFrg2YkK9zDLT2UbZpg67UkcGu",
  "key35": "8SkFQBsZ4pe24p2Ldv9wiVUixDU352uXtXaa9A76jyi6jK9zyiteZV7xKyp4YhH7Fsndp7rJcEGmfHkPLxHSsDB",
  "key36": "JgPbdjUkWN9wWw3Su1Si9iuAJ4rCgJcEah5SjVP57WfpzDcKPz8eRgUAeFe7hJKRJd4ZffLv2GVQCGHYaakiumv",
  "key37": "3PNYn3GAp2nvKHMbow5RD3JsgJG6iqPhorxJaYnDxwqrx8fvKqRA8bbPgtjyEfFRgb4JPeBnjoSZ7U2YGT67Hajq"
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
