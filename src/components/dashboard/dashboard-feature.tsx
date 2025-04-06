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
    "21siETWy8dWCwE8WmL7VvHckiY7BQTxCm83UbHrYoPGUGqwfd349NxtX2zc6G7SgsjkUqUQWcy8Ak4cfhr3JWpos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wyabRYfRyekypKrpUiDUQ1TiEKJmYrQSXS2Bh8TDr5zmHv1N1Y48KxjBmmmcRqpFjb3SQNrDMZoNfaKGm7Jnwt",
  "key1": "2jTLAFBUTeKYmVp9YNgu8pQVyRjyZSnMQoEjq8PiArgyhPN4BRWYQc8LpcKYXFLkfV49tZvQXwbK1mARBimzfkj4",
  "key2": "3aZ3F3cv2mR2sH2KH9SHamim3ixhRJsH8QgyZ854HDdAqE2HWdr6tjApFdf1M3naSRVkacmB7DpZMmVAjTyiP6pw",
  "key3": "4DouCoR8TNuzCy7v1ntfwsQESLBe2c6RS7wXHMiUhz9i5NBws31t7eBniyHg6yJwgYSciEo9eU3XtE7u9EcmzET3",
  "key4": "2e4MQkNm7xY24YcD29GouKNpLyd9nNDFD7RiQ9TtE5yDvUnZAfwFet4CZGX8ktpmmXxtL1ZmVfExirDFbTn9XGdY",
  "key5": "5bTzSjybusag1W9iqBzhsosCDuSPWNYzh51cpgBwzuhdNaXqvaoqh4xQtzmTwqL8afxz72caHhUue8k721x2xPUW",
  "key6": "1G5jd6QJSRfcpDi5WhcSvdNb67dwjDMb6fbkkpkTjR3imG8oUkJdZNrqa9nTJ41JzFroWrhB3M2DUgwR9qDKx8j",
  "key7": "53C9zkPq6163aw5hygSaS4B97dkgujp4XxWmamLtFdpFLsVieDdwFJF8SHFDHYg5SpQRc6rZhrA28K2VKnPYNuYu",
  "key8": "5DEkCWNq96jiJW58puv5ykvFQwgY1XSBZ3Gu6N99Sw3ox8KydvWZBWcFATP69E56w1QfW9dFH2XTrrpGbvxZTbnf",
  "key9": "5uTNXmrWrgBru2ThPc1C1FSfdayVrKKPwHKZTC3AXuzwaUYygmhzz7t34VnV9yLKYR4Sy4UdqWHQr82G19dmW7M2",
  "key10": "4t1uHao8UFyHar1uXQ992LAd615Mi4MX3CFh5wyBgH6Y9a2H31L4HU5pVApVRFmsRiQCajnv2qx9NR6x9qbwUBiy",
  "key11": "2gEoQn96kpy92L37DWeHAE9kxJFo7bWmJH27N7xG8x52otrCHer1G3PN1mpg9Byfe94wtha53mrexdtTXEFbhaei",
  "key12": "3P6k2SNqjKpk8jAaGmu73aeQUbvqtpSy8UmdtXH7Xh2yCQ1YBVu2jQWBakA2BRsfdni4i2uqiV8r2Rtvm5Tp6mZz",
  "key13": "3B6ebT3fZYqDzSppUnNprVngy4AVq7SdVfVjGKB4qEZ4LhERem3fjVnGTkLf8wN9tdMwsb34dgYN6zmUqwNaUvuo",
  "key14": "5DyXRDrTBy3SxoCx5qKWx44WQk4bdhqJFs7W1Kej3yq9aG6P3ZYJLtELovnwHj3qhzbsvwVjYs2aRp5xhUdgJviF",
  "key15": "3dbMeWKBsRqkC81XtwYV9m7kmnA5ghsL4AV3aY9FeGFVniujEnfw3cRTtYBB11oPzZ42Lu6YfSaKJWuqK1oCvYz8",
  "key16": "3mbgLKGNgRHGThq4X1RLqz3VuEwW1oS1Zrm1oJQQtaouzYmmW57C94qrGuBebwXVGQxK3KyrMV4FGFReeUoi8KEb",
  "key17": "3TH34r2toF32MUdSJP3enqYeQqa6r4hma9B8RtxyeVm4qjuARuxERVA5wP5je8CU6wW6JRq6LHDuG9yJocAnVHY9",
  "key18": "h4f9ymmH91B5ZMxi3caved5evX8Q8ZuwfTeJZhkYFd3bp3fP6ABSUUvRZXuhh7MMhVkr5ERCY8hP2cT2K4MZtVU",
  "key19": "58enZCLsaZKudgFGMPJnpnh6Zeu4jDstvMZwBgwgHUe1R9AK4CQFcn3mgfwoaRjya4KRne2uSt7Zx9t8VuCP3QN1",
  "key20": "48r6dwDoatua9uLAV1DAmQMKMnNGArFzw5N8vWvrZc9nvoWrXSv1LD4xL5v3CmTKTFMr22q3QUaHnHNLpoJvZ2dv",
  "key21": "nf5YgtY9iE5NwPakQZsceA2BhTWLqWXoFRoSgyGZh4Lt9mSyjaZiUnkDUo1WgqaK99PR7JGS5ttPLwA2rmfzUoC",
  "key22": "4BasBa42fN4UcXnSPhAXqNrvz2uxqvHUThSN1XTvSHkSsV7EP6u79FdT399aveHKae9wnPAAxSwtxeH9BUy9uFmP",
  "key23": "5r5F67LaiJHiV5k1CM6JJyUTkCRuaCWoTopGoTUDEpngBDvwzaPWjqLXzFJoVZ8NNGDNfTVo4Ws5NN8Yknvb8WMF",
  "key24": "44zi3SQ3dUksgPN931a7D74ikptN83oLqWQvonGGKccPYC8YLg5SjzuufWJjDYYzzdBaBsEoviqN4ZzGT6RuJJFa",
  "key25": "4nFRMMYu1ak3aVVkZ3bJKk6AmhaiZhgZyD9DAv2zWeDX65gGsiraCbJFsCMbXBAraxJQRBLVyrqqZT6MKoMmgVCX",
  "key26": "3zBD5WBy5tMxuggmN7fyfWvhoi66pm2LavT8sTZKrhtvZ1spdfZijNvsPBFDYNoWNYMWzJZeAzvsdGYyry9udaKF",
  "key27": "58TAv61iyK7GeksBf4AFo1XprJdSG4se7drHQThPBMNWxN3AX2F7HvaPYxeyGpFvCfwdLwz2eZLZC7vnSkwoNCRF",
  "key28": "3K6sm2E2LZknVLNiXodhnWjztovdiXWkdSKvjxAAL35DPoXhtzNmGT224HFKxJGuzRuGcQ3bZ8gjGLgim6fDg1Zd",
  "key29": "3C69k9axp8vWwrmAv1VbJuLYRAVNEQoy8EqLBbNXMNMA1KxuwkkBGAJiz3DGKFnaxq26rDAjnvxgTVQbhkBBsVRg"
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
