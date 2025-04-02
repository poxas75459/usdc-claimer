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
    "5TReeod3iNPjYDTSKapeV5aBbkkB7ACddotiZ55MHCBqScm64BcY9eyV6FgqNmKudBwNwGMhLa85SrmYmxz1EweJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LC4S6Cb1CTBHG518u6JkCBcjY2jWoBpxRWHiZaJoJhZzYRr7SQ55yyN31N4iubjAvyUsusRoaupou5Z7xzddFhg",
  "key1": "4nDfBt5HXa2H7y8hgCJ8vQLLeBKSo3Exaa8URrnbE6YwN6W8UyNx4TL3f9RUkRCyUwzBTxABoX7MSnBHoPyfvMQf",
  "key2": "UtvB4sWP2GvBU6XUbub6K2MqGhwS9JRMaeqHSmPE4sGgjz4PWUdobmgKpZeXpEBYxRHqZvoAi322PJStKdSiMaS",
  "key3": "4bV154GRBaVsGU5qZ21CuCjSxcN7XnVB4oWto7D6Cioh6mzSrarhcMUPAyjNHty6mTYZestjWc1q9aYdHZVmiVjk",
  "key4": "5n8sDd49h9ftg8Q9YRt67rh4ihDmPq9AUWJwbcUPD5YCmLJsdUxQk9EXg2KQjSGGYJHh7UzVmepZxaEFSR4x1LP5",
  "key5": "2AYAgrSZ24ayoL7KKJU5fAgTY4d3y4dqioxAHcRfXH3fJXiupZdDLdS1K2N2Z4515aze65ZjuFhDLcnabJf3n3w8",
  "key6": "4Fhd4WvuBQ28RPybMnAR71mrUKFiMK7mFBy4KyFAF914j7u1GhkedT9PkeKkc6BPnsdQ9y2EQRMZLENfub6pCgM",
  "key7": "423gta5UUhvcejuPQGJBxvdjGqYJt7soZiKEhze4mGw9yZsDVc3C3e22JFss3hVsQ8Yd1WtproYBGPnfHbZhvrSx",
  "key8": "2uftL4S1eQ51qaL77oK28nXNHSTLBf3GBVEVkN4ifpKTjme77ifxXt2cLaabwGmfpcwodQTR9EcFNuoNmNaMXoHB",
  "key9": "511h66C15uVSkQ4nto1f29xdj7ZHwAQ2UAy2HN2zmsMzxSUjyrm9GQpJqxSJCqMQi32ZXz3y9gMU2JKDyNwbUKz9",
  "key10": "64G1iACgVWxZPzK3GgsfMqCWv6JLZZBikyuu5MUPseFL5CGFrZJ3gMjtHB9g51gUtyQ6qkxMayrZDcfXFAaqLLi7",
  "key11": "6wrsEAreXTtYmZd1P9VxLJz32KLSu33HQ1LxvngjdkYi3XQGNebQGPgzC9Xmz8yJ4DeKyoZ6jvbUJPk96oMXGAQ",
  "key12": "67gMw87zfj35WQthgLwmfirCWzFpFotyjoHodAKXFdwiSZcftZ6sHGHBke1Mpf6j8EPeRRSBFv8gEJRYc6tzmUAj",
  "key13": "b2qdWjjwUivo7Px17suELGJW3wqJ3q6PzUQmxuFXY8GnPJhQcwczovsRFVaw6KDdB6AaNGg7cWEbby6yRvQ83eR",
  "key14": "3MTUxVbKLjgpvvEYybyv5KwtsXrnQhg4eUYcwNpi19sXWBaE4UbDn4mLgn5r8oX1mPgeUu5tKbqXity1dYspwVZ",
  "key15": "4VSzAjPU11p1WR8co3AgzVpFjLR7FwRJMdh4pwJY2u3yTxwc5kp9SqCjDUg6ZCzQMqCT4ajtyRs8HJWtvnVkrb1D",
  "key16": "4FDjZDEEG2Z7DjvuGMt4nyQ5JDP2YonafffWe6gSYXYKfLSUXiVNYWmCzVSqKEv5r1cNnScUyajPFMj98BJrpLEE",
  "key17": "5FCkhsMLiTUN5y5cVzNLzBiwBnKbowKM8eER6QivDTSXvhcuYCbaRkZCTaLkgUVyS5vKZ5RFRiuy1wKb6oKQYDSv",
  "key18": "2Rkycw5zjrjxA7WYaB1GdK5NkUrUE6Eytk7GQM37nVLEa28GGAdokxC644h2mpzupyMBbWFuGREKtS8Dj6RWj8ww",
  "key19": "9GqRmj6EViKV4pKBmKe5k12Dq91ZjNuPeEX8pg63M5Nk6fPvS6pyTqieNnFFgLgfNoVdtt4MxQnuzNMUqzuBhRE",
  "key20": "2Msci1VasRuGLqJmTpmKrTtQ16k4hRPMopbGA8419oXZpayJvt27pK4zZAduCAd92phtx2SfpPEQfoWhvaJ58Wie",
  "key21": "3t6FG972ZwcEVjPcVoxVR53EQTzs2Qc87PF2YJXW7eWYT1igKeCkLuV6rTuCPpbGy1BXkNEksfs3UyGGaMM4Lg8N",
  "key22": "5CFmzj9BUyjgkaoJsRCnXkPMWx5DpUJ68G7FBMUezEWNMji9SZSxMyYmhLC8Mxr2wp1CnyZiQ1vMNgS89cTnMowC",
  "key23": "2vf2MmAB2gYwj4rbKhdyh9mEapamHw62vJYzha9HGFysvNit7Xn3gx9We87ALxszr7t3qcv4LdP4tfASsKhxUL76",
  "key24": "4V5q4jfMvRusb1B5XddMfo8i1oieYVVYAoU2kMZXdYaXqtUp6YDbVy7L7Yk42ESU29URnZZZrY3sRG2PeMLgy2wA",
  "key25": "4M2LHxsHeaSApkBQShz1SL9guTLFfEDYQWcBAVQZHJCxXdXBQ1bn1pQ8tqtmuZX3uGpTeMkRXAU68ZJdyiAD7hHe",
  "key26": "N2RweziUbL7tvz88iWJmeydnnT1UTScJDp4fjTwvWCyFABJTFJtbdecsFbZS2h36hjqCGRHQEQVkyd7TTT7hN6q",
  "key27": "2znuHkh8BPbGnuHJ7X28aa1J83BUrMi2ekivra15RtEStBxtzbx6CsCQPBnzGfcsLBq9XbUwe6QUGUcDBdK5azsz",
  "key28": "3efmEzDiA2c89dTkfv6nsKf2yC3xmiKWpETBaXKmjtrz86NKENKPKgyknEHrxEgCLR4N3jo6XEJy3SEEZoW12JDM",
  "key29": "5xJcA72qg2orqQcxyamBywXdC6Ved6VsVWPTi7gkgdHLKqacZKYvs4yQ3hjwJ8XfXZrjX9RSqqsSskYLgTC8Ent2",
  "key30": "RWuTY53bdLR8SFxYY5idhDb5p6eVBJKbsooAHfpQAyeSWz5npG31uGJr3nh6bHY4Jxn63cVEgoE5dYqouEbUmns",
  "key31": "2F6zaS2cHTZjZ4nbgoRU3qZW75JUocR3kNTWbKW4XFFbHQvUo6pBVvBmFWhYN4rZHt13BsKGbrB3op9Y81B2uLQs",
  "key32": "2ZaVo66zmkiQwRUiJ97euDWMz7Pi3cP3o3tqHqnYcy9FHudSE8G4gDhbTGibLu24pU3Lf3ritGFJPbjC5PY7Johq",
  "key33": "42sbjcitRqE8zDvDcMYmce6ymo2uDBJzXsVHzXjPCxbJAjNM43y1k3H5BVY49pMgYTnsWML5s5quTGQR5Q7YbHUt",
  "key34": "3eQZLA2pDrGKdZxKYrJ8DvkgzdVK8GyAzi1xDH8AoDsLjHBMuaU3ZrebC47bEWHdangvAPXPXYqf4Ng3hD8tDbh"
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
