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
    "3djfVqFGEUj4CbouzE6B52Ct49dN1SCP3daSaxzhGYmU8AChzB836wpdS8oPABvqBwMwFRrCYtNPGcbBLoSm3vct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDvPjR9zbhYKHgt9n36maLoXY3Z3KyuEn1fsxcPpApXoo9SiXX4YEmbij9bd24MS2z16nhLCYhMTmqJ6fLtNBvQ",
  "key1": "3rjWZWMUvQrwyUnTX5asTeXQRXE1hPpB4hHD2FMEZVYnLZR1oVCqLQRKotkagjGAXcJmwE2ZQkVMXN8f62dvSygU",
  "key2": "2VfDdqu9g9CsPLYVp9Jn7nFePSg22MQYXH3sWtGmwPnbM9gLoRpkmiCFGNhsS8Awb1QoSXJp9oNgJGbwDquPPaj7",
  "key3": "4AjAabju1myC6xzZs8N1zx6jS6MyHyYptS7AePXMQUiEY9PL7WxFAc2dLMdJuGwqB2HL9LkF5zyQe3pgoe36oA8T",
  "key4": "3NQk7d1XySXwjr7Bb3EJJwy4SXnKwhiFEUoUefU63WU9CNzL4xxbLdcqBJc8ohZ91moSkJ4BfXR47vgLjT9zpx2N",
  "key5": "7aTZkjeALNJzMDanEK428nzbbRsZSQX7aJpB69X7oXNqBSxhyynVyP5nkzA7ih7yfXHDKAfZWe8Fmpi2yh3hLgq",
  "key6": "3isxNdKNHW1MNqmxEebW7GCEHVH1bFh8Y7EXyBnbWc5SiViyVWbSTnYLDMnF8rRKHvTef9qqqiVQy4HD5TEZgdkk",
  "key7": "4V2kEVa6FcTAXv5imy187GtLFtdnQ2PkMHRaxe38giBjTmthJw2AwjUPhbsvs8oKxdxNAsoPRSu9HPsoN8F5UQT1",
  "key8": "2a4qRuvoFhRnjtyJz2jERXWpKNc4rrz1zV4eA3pjmc8jeMduYELtDEGYXpmwHJLjT1tQVWV5qBRWr3kzjhYjMEmV",
  "key9": "2cVVisWGtTnzp3sSGLJ6Tw8QrkZ1FVqtnJznx6iM97ZwkrdeqsdN29YWkM1xLYrQY1R3nbS3q9kFLFB3YGoMhSb6",
  "key10": "2qNPzErhhtdfcdFJUo4cfnfnL3aqU1MpisWzUri7F2PVMWkgecgwaM3MRBbTH7pUGsT1cEps5iMPL1gMqMfhaXjq",
  "key11": "2kgK6QsL9FePoBwEzwWi1Dq4FdbSWybFuCkHcxw3r1iuxPFiY1Bmo52abG9HkEeJYeS7VDzW25WpPCkp1sL4y8qz",
  "key12": "5hT1dbDPr5dL3zTwinK2cikmqSUnX2PisRUb7Jg9wjQB1RKwFjEUWnRuLZ6eMeddhXv2fq8Y7VbXyCRsx27znc17",
  "key13": "aEXhduATK6scnLkv69H3wcA4QFQJXab6PKaGEgwF3XiwXtXeWv4Lwk6CREAHA1pNALpQGz9FstARob61ja2ZfGp",
  "key14": "SmnmLrjCuKy2gtgZbhVPR14yxiFKHySq2HF7ijvLQYrcBSqu21hiNxLSxkSN3yawqimBVweHxPshzhaAZm7LmN4",
  "key15": "3ZLiZwHnFUcySzJSJYjZTFHydhQXTEDnpBNKWC1u7AFn9ZXu3KMV6TvvjiY83e7wcqHDbuxURA6qXBmPV9a6XMui",
  "key16": "3i5WmMoUeUMrfxKwo4zwSEBGwybXPx8A3yTD5ZYtKsfVfF2pmUiK74o369hSn8ePHuKNscaJtousKJMKGUPKwrb9",
  "key17": "3ycHGarejKVeaQ4A7Ay7w3d7a4cRvpSk45uj24MAWRSHrAwGTUowAUbzx69TEHaYtzMeKXad7xzU5NWxbF7sVmdo",
  "key18": "3B4KC6rhSBboNzN1rah7zd8LhUaEP5GrnuRoVUtGpDnT4WHTxs4CQ8uBPb6cEU3CrtsgAX5VFNM4bcRnG9DWK1k6",
  "key19": "2Fsb2QBxp2ttm69mXikXdntRfJQztqofwk6gSix7fKdwYXQ8GsC6bByyYZzukEwNsHoX91zGpWmKXhehYUFi1cSY",
  "key20": "ZneLERtzDvki2HmAtwTbQFKWEMD21rcyeMZToCVaLGwzJrxEmjZSEX1CajedsWWXeM6ie5pZpt8ksHKK83AsGoZ",
  "key21": "2utwon1YUFskmpVhXYHVPrxRp15TZ4XiMkP6EVkqLw61WJB13BsxDwbfYSoiD9aVvagsr4nJAzv64uBwp1EFfhA5",
  "key22": "m7nAF7dc5PhQFFnRgfBm7GxTGeHWNFj5W52cKuard4xbYWjtX6LgqJgVeSrpiJue1Zfa9StN9YCAxdiY1VMvkkZ",
  "key23": "ybuf1HsXfB2xxqz6Ao3hi6LTYg3hQxPLknsPAhUNbseNDgQN49UBmVKrRvUaSTRTPTj7Y5P2b7a2YQsm3w5FDhL",
  "key24": "4DpmHbdYtgFmHrH1krDUrjBW6AjmAW5PupCtZeownyt1RHo8ybek5UjNgg8Dp5GqsP9yTuA46m7oorcQwyshzbRS",
  "key25": "dNZW9H1UKCn719DF9qB8UycM8XLrsuop6qBKvb8FbSQe2c1xE58ojWH8W3A9oQEtShsW6ZvpScP71yJYAqKAGa1",
  "key26": "4NsosBzVvCebEdW9vPotMiRnEtgTviuEvpGfsK7AkrB7xrtwEfHjK5CjQDZBZBNpdq7h1h11SJ4d43czPTUH6Se9",
  "key27": "42YKVpUDJr7t2vsrmEqJstFArJUfzjs8hDGb5CzrzUBdYPAr2m6vdvHMfxNMUx7mfzA5hhjcRJT62nxgSpDqSXN4",
  "key28": "1QcJrEqQAuE2w3ixx85faekjjASTiwAq2QCeCq2hJF7asq5tsBgb2o68zBsidXuzNABhzvdWGhntsB5jHTcE26P",
  "key29": "4bstSxiCTUobH1ouTCqUwHjqUJsj2nCGspYWnAdjEjoxKzTZywM6qCJLSLSZBXNpyRBC37SYHdRhp3gwuK8Yc8HF",
  "key30": "3JnME3WR3nfe1DMYbbpwu3KPHZaQNPDhbSUbNjz6zfnYdwHZAtG6MUruMXU5XZHN4sKAuVHiiVzx1YM2hontKZ5B",
  "key31": "GB6PghtK3TPsDeAno6uS5eMNb2F4YRscTBPd9koSL8W1MEAsHydLN3g68BM6Fs8dE1pVqVeqQdDUb5sYGPnpJAu",
  "key32": "5MjWYau7Rv91EoQ49yQqXSF1pfsS3NNnCGzmfaktU78Gk17cz8NdPQY53ey2obHAtuq6r1UPwxwnQV8Xkenu9u6s",
  "key33": "XRP1y6nfemsgNXrscQC7LZfBq5rsYNY9BHXs8ckttHgdn3Aq7JWmrNofGD8G8XAm5e4GEw9WiKtUzQK7FaST5G1",
  "key34": "4bRm3b5XttDmHBwa9mAYWTJgJ87vGgb2Z7wiNsJrGdKS5ieg9zHVgKamYmsXcxod27KHHfkUEVYCjqKgkMrK6edb"
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
