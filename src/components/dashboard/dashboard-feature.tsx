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
    "BbQ5q55izMiCVjfii5CmtRKm2k91b5KhoKHR82iFSJjvd24JCCBj8XnE6P6DB62V8k1wWX9kWB8jB9J8rrrGxPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556hinifgfr9AfHvFHYtcHQ9MnwrNB5ryd7aBmLAhP7D1ZuYqnswe2ZzmAQmHZsAKza6bRjtrbA4qGD8iCXAy438",
  "key1": "SMr5hksdo4NguZ7Lg9c3c9kC8C3LvgWAbYc9HuP642f49gPCVM1fwYsACM5XBaEWBZgjuoqxLmhLKwsAfYcKAgD",
  "key2": "3bTEsJhTqiJsZ1VKQRYbCRVqVkJLooUoMHzhsG4wEV88bVNW8dBmgnBkWRwwx2L1QiwSbbt3RysRg5dZnCxxCsU7",
  "key3": "67DWFjbaLLyGZp3JGDbzeSR9UYqhsjDSk3X3Bu1ToiFj7hk5cxvEyvSTv6LCrn58KMMqJcHK28mcMfz8SVLJxZrt",
  "key4": "5auNXNxYV35LnK8JREbYpVkPixHXG5WhxaEJSogvZyJLHJ5GVf8zWKaCzEh6XppWRG3xk3Sx3GX23G1VdxBXmDVP",
  "key5": "54KuXZ5GY7gfKannaiySwEWEZgn7AEBhtJqThnEoDDe6BMd8eek8cN88B9zzze4MiScLGobizL3uoXtCGUg3sJeY",
  "key6": "3kFmdKkLrvD8V5FaUxeMjf3mw18aovK6dwZgTz7et3yxEoWkUuAcdXt5DRZyNDv21Njs5WZirJCgCK5ck3UYS8F8",
  "key7": "SNBZgozGd39RJtCAhVVJefmAMjGnTG6iXiMsRArCqtSw1CgFuEA19u8A3wrxw5Ss8XsYbSzxFrrPvFpRqHUY3bQ",
  "key8": "5oiinxmtrmfpzgoQ7HXcYZ6mFBQv2i1u2TgxUauHSpjAW7daXuHudg7XqAuajSmDnH1uZ5wdTwTzfwwp1gHbEhRj",
  "key9": "292gt7BghpTC2GHbhM4SyfiWzPkdCh5eQphCiZxtMWpQrZHQzjfsrkUyxyTnpuTTw8XsCkbXc9b6csXVFqMXHHf5",
  "key10": "8ZCTkJgS3U2qg6cBMJ44d1bJkR1HybjRw6Liaz1uZ6S6Y1bwW744aSGkum3WiioDksCtyUvnh2bRceNWQkzck45",
  "key11": "3cD7QzJki8gyDbJ5hjYVZnHevdYzXw8gCywvC47qZY8AEv8cmpiXfGPysLpFELjoHAXcMXkEfuQgE4gAYGFURPad",
  "key12": "2gtwTWcuuRJTTZNCFCNptnkQLrpkjx6abXHw397yvF8xSt9ky7trXrjP2HXS5b8aHvT9KGTsYEsH62Vus2R9fZDU",
  "key13": "2uzvNtfyxHny33dP48FVqeEYDYLDz1WYvyaucjqBZYjoGBfKBCfKVV4XXdodMsydsY1jPKE9uBpjni8yF8UuRyV2",
  "key14": "5vdcLLcHXY6Fb4iJh6zeqPEKhhGRRetx2i6PpesGga3SR88VpLpMb4MJjsEr3qYzSxYud7G8tptLmK1VTY5g3KZj",
  "key15": "2iSoqg7C6ucyL9UejDD11UM2HjEWGuipN67JGnnJgZB65z6kvtfhXMa7iXfYKxaxxGRchWEQs2RyEg6kmZoo8EKa",
  "key16": "5AuxT66oHJYwkDgVBTNUgzyu3facnTu2Gx31BoVNuxPoSDBWTAJoKxtP5CxMiDLX2xXTdyh49DqeqADFsyuyFZjT",
  "key17": "4ZTaSxQJEb7mJSKPkTsYJ5kvrqmMnrWd3Sn7gUJ2X1PMC4uSu6HiNGEtFt93Hwd7fiEktyNQWPfxvKTUnKm4wxvB",
  "key18": "4SMQKgEHMQ3F6q2VAts9xVm9ZmCipcnfCNC5Q5NLgzWfFoybAMF11f6sGMMEt8xYHCgawhngaHn6Us4wsLFBQiur",
  "key19": "21DafXo9YjpEZdfn3ALFfNYBYs4WA2v6AjK8L7wZKub3gSTbx44AsMSpfoxZcKYZbnD9jBS8KVMW8ppKh1W8WumV",
  "key20": "g446UxiLw18UZKocruKx4arsEYzmQLixc9uBUBcrETdrdoUicXPoHw7hK2aS5QAWfPvU9G3bu9JoSCZVq7TtsdV",
  "key21": "juKx9bFqEDwSEg65MCKyVPdaGEhBCDGTERjSXTChabWqzGbqfBANsW7tyCHmSsLNqayj1tX5sXULRzNwgLu25um",
  "key22": "5z2KQzTMbLGcfBkLusZFm7kNkVDPSrUNVNYvdE1R15xboLV2tAQQHQQrsECcVfxfQkrHzJoDBrGzBhBcyCGXsA1F",
  "key23": "5o7kPyUeenpqKXsLFEFhSUsfPH5Jxr9KJX8GEXwaDtXTnYNRy9cfYeArgWztdmhzwAghfEcwxymf2pGr5mKQYUx6",
  "key24": "4VU23FAh11jCUDqxiTK7LgdEfvcPdJ7Y7ArQAq5DFtgVWRJu5LKGvBh8xTzqgZvYPv7Qs9PkDGBn6U85NCzVnAXS",
  "key25": "51LP6pL2xB5bqNv88hM3eLMjuKPx2yntZVj6dAZ2Eu3uRpXKm8dGGUbbza4BgPQVddiU6WAbb1oXhfTnctjjK2Tg"
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
