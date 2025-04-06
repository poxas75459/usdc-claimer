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
    "5gPzkHHixYxzqdjjMJzSKuoggYZYLW1aHCoEST4KvYsz5FA8NseyNRCsXWmnYHink75WpHzShum7SomDy5shXixs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269zUcP5vaHcy1f7dxhKamjYN7pQeVQcq5R4pAdr3APobyUmBTj2cPyXKPc9feKPYPkuWJC2mnEJMbcZdTEBVqzw",
  "key1": "5FMN2iHFgpFNwxckL6pM6q3joZDtC6UX6Y7kMssMEU12egFJVRvX5ubhFU21vCW79KwCRX3HfvyZP5KjZtqSi2bT",
  "key2": "5UDWvNSDuj1LeqmcFjzBun2jZWs7ADYmzLQYL9byZjRfjeW7yJbMwtrgEqnpvCGfE5K4jVQyvMq6kasrRGwWnu8X",
  "key3": "32bu9aj894ZPDrTtQMo5sWswCpat9uJoXHnprmFsAeafAixGurEroPvKZY5ngDUTjss6LfgXgzGLPqi9exgfXN7T",
  "key4": "4vFMV2u3GUyTshSd318d813AFHkv1X99kK1iWJVVRZpq9Me2yqDbFxabcYJR5Vhg6ya3hvgmwnKpjPuaNDkBdoAi",
  "key5": "5d7YVJVkqt8TNwk4dnBEhuF9PqU35GyXc4waqdW2ue8wej6xiF735TY3wmjd5UqtAFUZSMbH4wf2vLnSUGaYv3Kn",
  "key6": "2WLYx2KG37Cq7jXvR8z8C15hgoatC5r79e5Reht6pHN8TS8oqrC941t5M6hKRgTJzyuzxHM91tWg8xb5QMsP8Eai",
  "key7": "2vNUZQaovzUxHMtpCho8uptmPoHXLf6UEyNm7pqU6BG3j9JSJ8uijZN9CA9Q9ouzuHfARLab7V9wdut2fAujkhHX",
  "key8": "FTMvyu3QijT8cdzZst2kKsgptBQkc5MYMVsWN3c4uAZwq1g69ta1Fp589fy85LkzB9cqTkF6NxfTFv7TDGMsyfq",
  "key9": "42sKrokAKMH6qwVp7kyq3EigRwNcaMYnDdFP8UPxVxTzkNZ8CodZP9qTWgfDBjXdoLyxFSHKLGL2pUd5sEj9tNfK",
  "key10": "5paiAqSCjnLuugdPX4RP6AUTQDEufjdqE2m6EZtMgN4VXSW9MBU87fiVox5AJUkLKQswPLjcDd4FkdaAGtbQw3GV",
  "key11": "5kfzxsRsrpMbqvDL9yn2NENqxTuLwYRSEMgMGyPfjBgvdnKxbQyvS92kQrQxnwB22NVbRRaqJ2D1QahXN2G8JYxj",
  "key12": "XzgA3UYdgCU1qVSdGDSHZyioKXJoNENhPu2vwAjo95qxtY5LMeERxxDixXvDqmtmRMPxxi8iKT6UAQErrsBfZ7k",
  "key13": "31NH4JTx2ELtkrphCJxPs9t7SMfvWjhViWMZnuKs3bJZzmAdeVyf8tynBosVLJsxdZFwVyvNMy2m31nqJzT5u2Kr",
  "key14": "3VvC8uSjv3M4Vd5katyokMirhNsp5Kfhj6vUYEEHLmWhwyMVyxnxpTntoGX21rGUYUgye1dvEJqS72XxDhntsNQU",
  "key15": "4tLiksLbaiYp9j8c5XyJow375DM6YDVpApXwLFWKxSs4PSmW1628BiT52f8zGYNP7JWZ9v9e2BHyVsf8NUEof9oK",
  "key16": "2u1AN6mLbTkXh7WLevtEhq8CtqyiVFjqo8ZnyoToy98c7jSru4N5mTTS1dFrQkBmGTYeLynTjMaJQ2yL13qsBUeG",
  "key17": "5ptAw7mkjf4hj7GUogxBEttCrYpFF9zcxdjoMpsBUiAMkWDiHL8xZ3ci97qPSB1AG4zBVNBmSRbxjTmSueud9HoE",
  "key18": "5aN6rEK3fwAkzGMDH9usmWVfvta5pp8ZsgrEHQWF4qJE5QG8aDbzSYifgGZSThgDVFP48D3XyV2fr1B6sAab7Jpj",
  "key19": "2RNPGZbrVkfFByd8wHDxeDXBpnMGY14wgi8656H1L9CuhXecrMFQdCKFZMtQV2zsFUNXTSGoeZowkgX53ETC1kfp",
  "key20": "5Pixdb89isZak2vpLqiHfWHSW8he6SYDT1QdenPrX6y4qsQ5tQ5z2k7pJnfa1HZrw8KRBKd19D3EuAezQvsWrgR9",
  "key21": "3VVMKxfcZoCEKUFnbkyuBBgnvr5UCQcZ9MMEn33RaggvnQarpnK78FBSEsS29mHgkPfWXjT6YH85wCq1Kv3AKRnN",
  "key22": "3C2LLY71R45wJM5Y5nzoa8U7aVVqdoY4DkNqd1kXB9L25AfmANDtDpRr6DREBtfQe2mBZtjWuJHoh5LJaa8rFwoh",
  "key23": "5CUsf7PqoAX4sWPhKW57cd7pWXAbcEK8csyQdJozUj6cxnCydxEMPr9S544XH6LFUDTyoWpYjme9afmWyKe739wr",
  "key24": "yiimHhABDtaoDY4sV7rzKFoEdCrL94dCogPQkYpJMdT8ZpW9tuYjXjBLdxvWdiDAothymGkW8vc9X1j9Cy6Bpii",
  "key25": "5Dh8aMse8NZeyRW6QdsfVkSjn6c7bCDahWRSh5aN949gxCZ83HJQqLQZUT9zjuFb9Mj3hptaqKYkgVqpU44fGm7H"
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
