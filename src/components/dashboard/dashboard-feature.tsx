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
    "2NPWPJY3zBCJDirNdX83YCcDR1GKbcCTqLZkptCjMxzLxRaVREaYzJ9ZcdwsqHBNux7nLBefSbb8ommQbbLc6gyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNvHEjCaLMYfcBsbmgkUmhtwuLx4VuTbvEuCjsCn2b4hWGqvFFy7kjRptc2RiaALK8CYu7Ya4JqSdgwYtE8qt47",
  "key1": "2pivm4sFydzZHcEUXD2YnoXuhyk3aMKWYqG9j5ekZs5WsWnSrL6dk4FUnmGnXvcnqFmf8HUBUQNLJ3PJPyhNfWz4",
  "key2": "SEnCXPxzQ4uSVy5jHPE63Xqp4oFfAtFJ59cVx8hB7nvm9gYLX3EpzPpbvn4XgKJfYYfZFDskXMoei1wdUM5YaHp",
  "key3": "3zNCZwcxVDPowDKYXiNY9Jbs1EoFULx6oeekUgQTUNfaY77wYExB59S9yXC1Fz35AT2NJaXAiskHa5GF1wypjERQ",
  "key4": "YuJZUKVY3SwTmzL9iZYmJ3ZztZX2eM5r13PoyxHbc8FLUP4v2zfVr6HLHHMjUqBc15RFqdUniZxj5XrDL5v4sFf",
  "key5": "Z3fpZXruSkwVocWJaH85HQoXYwic4epEzSEP3LSxWt7uBAjnzWUVEaSmQBAsTkGahBNK5sdaiTwRbHAHFBrnNZw",
  "key6": "3o1DXNQ23WGHMc8GjdRHZfCEHjC44xsakanYQmaiXnYTh6xiFjNzymgJzeVfkV5CBwHaTTvf5gKwbLEPALW5mDAF",
  "key7": "4bceEEYziGNHJeJ6meoBnwtTXX8xhWxCec2qNJD3dBzp6D86QKoE11BQBMPv8KA2z6B2h1iUqWDsiMwBeNFtX7BL",
  "key8": "5fAjRd6XHfGoZRjEi86G1VhytkJyUHyctM41ejc4qPpNAkJpJezjqL8kAWkqkY5qwnGLMLxQxC7b9x6Ytb2S6JX7",
  "key9": "4xwK1RN18hEftG2L3FQWRbdR5nAARRmTPkyNakvuwjxLxDgkpmm618L2mpYQuifLXRXpT8JSUru3vZFqhrxNdrf9",
  "key10": "G7JRLcbAWWTGuVREb3WWSTvXAD8HcCAb6tBQNSPvfUrvb636twpvSWuvaQtkK9VLZEMRXn5MHruQnD2WJXZiU9K",
  "key11": "iQzqW5wDJ2YwGgvRMCrefbzsQMpLHTx7HSRKowro5dPKH759X12PPN3oCJ3wH8PfZht5HVPgbFmpJCNn6yyK4Fz",
  "key12": "5BCxhaX3hjHQR3QsmQnAyoGz6Xeq41VzBsqapQLtwp3wMrek8dRc42tJ2M5wMpAfpZzYYEdXC875FiWRP499ijdM",
  "key13": "3V6bBDEKtE4s5JLevCdjgVAdWmfAcKrfZBvKNyJFSKWfcMma5rEUY3yVJMqj34VrS1F5iU6Ba1DEoMY7wuyBSxi4",
  "key14": "4das1XQPRfNujBTY5FH4uc2kMc6p5ctkbZjtbNXGb5RCjDpjvuXsKErv9FLY2crVF6H9XHSzqQungja2hrncP9mY",
  "key15": "vc1jLeUBdpG8GUmSN4RfKd7dARFB4Qiux8LuZRDpYUj7BefeGruHSm7pz7XpHdHsaPR2WPybHRjTq8WGuYEurYU",
  "key16": "3ZvAArY3Kgx7DKTyHJdC5Ssm1Np3L5gTNNoiPpLYHzJJCPCxerfN5CJrUqcVk3Y6S1zz67LFgjxTUPQbYA9BpBJM",
  "key17": "5StkGpU9y68zqZ4adNiE4ivJM7WgRpFzjnnfbVNQpkYM5qDaxp9QmsmYfH8ptSe2uzvXv7PQ4YoLjVETpPtfvAkS",
  "key18": "35FoeZAhHxeMK6TRMhctsqyVPBdpSS8Ed8523vaV4w4RSeY52zBSsYM5wfMG1QMF4dQprwrkjvqgw6DqtkYwhPXU",
  "key19": "8j9kmQ1nTVx4K19ocAaihV7SG2dTWoV5piptm1yuyAFunZoyDQ2abLvJTrwc3oBh8FdBCaD9GSo28h3APh7FFUT",
  "key20": "5dpxQcxYAGW3bqWVcfxZu2Zy5t38rdoJnhJJ1Zhti5nnLBGuFcdEkJBM34dFid32MBeqgsbmjHWSf9TsBUVwak4i",
  "key21": "2W9AdLKwbjn7BfCKun5Dxk18oZQRHunSDWhyPL3JLyR7pocv4MtE6GuZPSLVqJ9FBpnuqv1JQTvNWsaHKMMFB4qr",
  "key22": "3G4VuAxLM45GstfgZHgsgoAZX97FBnBW2FVEmbLZyUTFv7Tfq8X7sH2WkgPa3LQsMWCwRWBpFWGxigpCkReywMez",
  "key23": "4Nt8v4pGbrCMnM55MjSEqDDch4GUH3qSPLsNeDa53XE7ZBsXDRC7KmYxdMcMc9QhpdGvfFsTF3j946cg4twt1upa",
  "key24": "2HvsL7pF5u4R8D6HpMuCmf3Pm57xQ5WRp27XRL7cxPibtVX5KfexXm2iD3kJoamu8Z4nnB1swNtdJSfLrvhT2rmY",
  "key25": "3KiHmwZ5LAW1KAp3ePeQU7vfXzadjHR6x6EXfXoG61D43wBivP9uZL9D7AyFrJU94rShQ3ay6MkQh19TrprR6gzn",
  "key26": "5cgBvub5r1MSAd311gFt56mf8Lf8iWbddQAsMZWm35f4E1aSi6aiXAwXXhWKLJ6XxjX3A4d3WQTtE1DNUhqrH4Ga",
  "key27": "2XEXZtdm1pvQD7tU5UunXSma7RvEpVHKx5xPHzqrSHVbWRmEvdbyyeYiT9h4RKqFnm4fxZnwhZeV5Y3ywpXVt2aD",
  "key28": "yph52xNA5gmthJ4ySCSg2nKQk2C8pZ5WzjFF8ZKXDQUoLBh6dBSnsU5ETJ34eramGsdTZzZN39mMCNTuh1QLkHH",
  "key29": "2u9SPwjuQY9mqckbDPNZmgvGFomGEr9XVuZSETdRJr5sc3dDxfeSQdU9fE3m1Vfv9JJ3nvMqRunXsS1HE8RHPv79",
  "key30": "3SJEv9XCN8ixo4hn7ijsBpu5FD3QGfLhVJWTD4CZSaRnnMk5hpMj7HmTEtqkYzy1k4wTZMeoH4fAnGnn2Rtv9YUf",
  "key31": "3Vi7AnzN1xBWdmhDDBn3mwtPWTuMjkya93Y2hScnx7CNaabMAgDuW2tbVWq75eDsmsXxsN5AXbbg7LmT2pxaz6dk",
  "key32": "3QFtGb1ew3Q5ee1F7RQ6EguXF3qqXuNmYBm7gu86zyb7AvPnjYVczsr1G5FaSBab62hmQjhXvngWeh2Vv2nwh359",
  "key33": "4YjsfUrA4SRTavuiesBfx6rKaBRDUukKo5A9dh7JpBfrmE4zijh1RhZSxRqZ3CNxu4ceYZ1Wotwqf5WR1fG4YvW5",
  "key34": "5tdKAVuffNvoR58CtHvC13pZ2QocRdKfj6obZgNP7edZ2zTHPfBfAJotgkECj2SzYf2GkoPZZjPvHpLikQZygs9j"
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
