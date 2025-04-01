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
    "4aTxXrUD1yQ5DMYdAZH27F8nK9CZaXgnnHko3oU5m5syKPzdKigPXY6GEzXbJhm5Q7DwxnJck4ftFR3m3vPkEmGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCE3qzcNR4Q8YpKx3x8WxLHPNsnjdm846mTkA9BBvAKyLmBNrthyEggt6CZoyhPrdW7HF6hcZT7wQSWM9Aw4hs5",
  "key1": "5Xd4ANm7w85BA4bVDvvtcE48FhBxaNUzbjmXbK8rpfSUHDE8DjxzFbbg2PyoiDcdpyQCfxMC5Wxniw2jo1DKL6LF",
  "key2": "4LW7wq9TPyrqKxRV9YwJgrufpKczGQsF2BQJn17vZq43i4k5A3SDtokhSaYsinh8ybAz2UqomwBwSb2vfNa5PU5C",
  "key3": "2LiE435XDQKmYM2pzoGhZg1stKJvRc8Nz34pDugdrJAmLWZ5QDMbewbmukXW7vpzKZo8naNENMgAtziPrns4MbXn",
  "key4": "2NYwE7Wv5PoqPT4ACN2JYdfxjrUdHZ5eXtTdYkaDYoJHaTxk7MkmtcrgT1AUhaYFzEVvXZZeAkxDEXLByxedGfcy",
  "key5": "mHbUwEZuSu79H5CBn2QfECxJ4EgSztWrZHjaTpfFR4ujnV8p3W7JTmUmoe9D6321ucvReQWXTBaHXgD9nYAyrZ1",
  "key6": "4EjHjrXqD5XwT6jsghWP9A2oSBsaKhV1bZX7sj9SevjUAVKfh7xNtFTZb4nXrTCHg3ZEr9SB9JYoTCxbMdXBhNkN",
  "key7": "5X9UBFzsmEcYZ3Y1tfxXj7gZL3roDSoY7rVRsnd3afvZ5bXcnprLYfxHRAdSYrzkRDAPUiqmQjgqeD2ATjfUdbjX",
  "key8": "62uYafW49uRcPyznU6pnk6ZXqwHEjWRhfRcjHGv33xhDSmCfGP5qzb5mQSYxfDTBm1SzyTfu5Tc3BbgXz5CwAnEG",
  "key9": "4SUTozpoM2qgCxEiJtQTAKp45oNa8XY6PfPmmbpQqycjaNT2EdpgG24ezUN5zKKHUdMJAsXjkgBrkKo6d6q8GkhW",
  "key10": "5f31cqFn5TxSHfrpPpNsTFmxEVktGLNYRPc2vRBy4pPTrYv2bkFeRvwp5WdZkT4WeA2P1yTV5xCEGJ75DBCp6EB",
  "key11": "55uuQn2Tejva5qVrKyPxBcYitUDZgxKgpEXRoREStgga4o4pWCnDCgg6JpSbqK3AQuWf7fpekwSwv7nquYPzCT1c",
  "key12": "A3eVEX8XCscyoKMZFqpjU6EJyB8XWHf8Pie1VGAvFTYM7KPNZtKTj8Ro6bpm5C2mGeNgob6XP3Zt7CJZEqMvJH3",
  "key13": "2hiSG3HY6nTdDZhAJ9HEhu3xDktnpqpT2hqQNhjXY4Z7g6YF5pZQSAc65P6gijiDKZcSkscgJwg5iUCV1w81KScw",
  "key14": "2ymxuvAekgibgquQENUx4gd2BhfaFuL4NRupd5zZ6UYXzmfspZf2PFZeL4Gm7DwnSuyxoBU7wT1PQx5bckfGYBWe",
  "key15": "5iTjQiM5izzmc9YSukr6CeLJgn7Z97au9ddGba27vXuK6insXtFUGhzP3D4sdqMjpZx9NpDhAhrrpPpULsoi4CLc",
  "key16": "31Ef5p5hEVQ4yHbPiKWDcSJMbe8bYSu4f8Vc5LUPrRoQiu3tqTCfa69EeExJjSb3aC6FQhqadVP8ncrMPBrTrm7Y",
  "key17": "3QphQw6ynx3yDVYasG4x3RDDcGQFqBFg8PEUp5SQLAatEdmfQvLSKsCPxuX2xK793qQAFT9PwXy6pWFm6WteeX8d",
  "key18": "ZHQe3Uf2DJUpasDZ45SvNTi8jhpngRp6Xb5w9CzW4UNfEGsyfwhiqJARVjLVrso1zc1HsTjcmdsy6XWtUjjU3LT",
  "key19": "32Rjt28m65YDXA7p4VXLYw9LiwoW4yj7cx6PUaffZ2MPuiwvgJYYxQQLZgQBMvRqDWePHGvshMqYtzJ8hFDycSoB",
  "key20": "224XN5viiHZBJtuVeTy32n7GwbxzaoFuUWGeFKs1L7yYDHFeYFRtV2xRQNTYPoYqoK9L3qMfW7LPCBKbWpYU11A4",
  "key21": "3xyV6NgBeVEcbktvQEW69QBEi1QL7yqxatCfpzywbwDeUUBJ9kAUKnrkZ6mTB1yGTiPY7Qc3sJq2vXsepiCUcmvU",
  "key22": "35xd1xSwWbqYwLjEGWuMFkfHRTcgZbRMmPXTXDWightggzfrmudkHd5vWbD9MNzf2YiRon4GSepu3Z9m7Hxks1uN",
  "key23": "2Q9pkwWA6G8kgVBND7ZS2KP9Eh1kP8KB3PjKcM8enwJPaZ5j71BCPrJupEMoAoF5YNDfVYMjXPfzC762bbPggw5p",
  "key24": "2W7Lf5KEetFPiPi4sEy3SCmVEaR8pdLPnjsuNU4e4VNv3JxD6MZcAPyCrqwMCk4KoGcUMbyTZyaM5YTvzVEByE4c",
  "key25": "2DwKoncTUdkGHsLPGtUDAnEs5gPVJiuZEp7BJedywXfQmoKmjJNbhRq8NDvuUezqfx717GUNyv1YWSkeqdvjf8Lk",
  "key26": "61TXPbGEDpBVBYv25i7NMooZWPwyNv56dSUp73XqVf1fLovE84mw6fYp2ontLW3MaZ3HbGGCLf78zKqwPXPemgao",
  "key27": "2BwSvX5tywZfqu3rDSP3QzhU2t9QUgGFjuVMSC21zBJuTE7GAx4SukczXiqvStmbJ7DpNNpFWkCQavYwKmcXNUFk",
  "key28": "39HDb7qKH5JcJTyjcHH39PZkBShT3bu3tvB3Brg4Zu1G8EfWkm9dEsx1fV41nAo8qFSyydy9fWP3Zvji22uUZBsh",
  "key29": "5LGhQCJ18yBsRugvyLHxDcbgc8MCetkNTBJQUCNNvLkMvJQZBAVsoTb2BMURdB9YgdKtUhgYu4uz6sUGXSje6o95",
  "key30": "5fzPVAWbdE1e9ZXaDDySXaGUrXU7yL4wcFo5xghSz5uSyPwQr1fABA3yKtNGLZdzXDCxFsLnfjqTK9FUVZmP7b8i"
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
