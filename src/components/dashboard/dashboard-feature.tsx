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
    "2LqHzpvYvtHVD2P1EqQxEmGgMvMMAGK86up1ygRo5LzmsyBqDpbtBvrLAtnCaeswoBr723UvU8YdaaAKhkMSjDCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykTSQ8qnY6wWMehnPSDqnoqAphxMRsM4BT949B7fE94sfPUjtXnMtU28bAzGJNNCMNSJuK9Mwuz6GVjqfMtdYDS",
  "key1": "313MpKzw2nM4mgWTptey9eLiYYt987Y5o5XDmunhmg4Xd8DxRaZryXRhnQsM5suVGSAQkGXZiawvuJLXtBNvTCtQ",
  "key2": "3K9LpSaPqUHDmo67QvP7jfBr2QCC2YXjSfNVT7CxtwakoGNSchkKzCiBjcPkVJ7mH5eh6yZ3124Tkt2tCVBjAb8C",
  "key3": "5utTBJnrgznb9PAcCU2sUiwipqAxMKLgbHH4TGZEUjXi2eD8zKrohYLaL4cZsFfG7u6fafu7aefFMXvJR82Wnm3b",
  "key4": "2mfxr2g3YurrHtCuCnfiQwvffuqdEdKm1k3CRpXekdYBfHKnz76LoFP66wQUmakqqvGDSztmqHZJz9DCn72cNwHJ",
  "key5": "NqrqSiz6jV3CZZ9RzqNcaYXYuSjug5FgasaVVkPEFidDLUvSAeCxcthoezK3t5NhtejpknzQsxZERCNVi9TNsXw",
  "key6": "2iWnwwuU8ZfXDjFbS7AFCGAh3oHJ39q44r5pTNv7DQbfT88zg6qmPVXZhMA7L21HZcKgyXXFTRWipJKSMYejTyQz",
  "key7": "2eUWdjhjyrZVpXziCK1XUvnJuc4gmi4cF4yyZhhXAT5MqmxcUaThHYmv4hpz1nCgLUL2BHG2bkVvPY9um43vFRBJ",
  "key8": "5D3Yx9BL8GqCkinVkRdCXvU4Z4nPQedjx7VJ6ku4Lc38KYtnCTdAYNadTCd4Rn5fdrytQXDFnpvcfaCmeP7rZ4v8",
  "key9": "uLuMtdpETj2vK1LAVYLDwYMesVKWqTF4dKZTdAhpSmWbPiX1EEzQhwzYSNcrvCpFnqEwP3LMwhwzha8ZuJQHfNu",
  "key10": "24QeZeHJ63SyHjrboxRzZmNRKv4CnXfUjq3sYvz5k1Q9ifkBne6dd8m5jQu3W5E8kBpMPNL83NenXBmjrxGDPPjr",
  "key11": "3yrSvB7BxKL5BtLV4NM4HXHZVnYYuP8XBiVpt7GVVrmcPs3UZieLxbFiRqmv64BncjAPPbFaFMyZU3mmx6VBqWcb",
  "key12": "3uS7hCSFFoL6wnGaFKS6fNnYvaFLvZ328wqoHiCgXV3VDcGk3C8edJUbAJXeSuqSw4f7z1ikegNubJQjiLbvGFnr",
  "key13": "51qAXC4zZ5fo6Jq9MD1rStZh6FT7ijC7JTwwSP3DEuC31bDKtJRCHkrzZPaztPBY66saPv1i7x49H9nPqK3jnvZK",
  "key14": "3TRPBbfF5SCdgQSNRficCz7iNNY9tXEqHiaR4rDzi2kssbxrAFkESYuZB7xx35jpnezfkFREPUdKet4SU8dLerKT",
  "key15": "2VLekh7eVMch3Wx7TLwyDMCzrwg3sSTCoNeK7VN8RamSR76PNxCHCA6pFMXUF1ca8oAAPUqrnB24jHGqmERYRDjN",
  "key16": "FEPmQvEUTPBgNZinYt4dMF3aba4XFeTKxu9yQjTi84Nzx45ioaFGi1Brm2wVPXHAFdDLbM6xhh1zPaWNDCa89LP",
  "key17": "34AWt4991xiNNCGEprBij1gGj4rkcysGMub62KUYZhi28iQgAhm1TFrrXxnYJo6EynX3WBg3EgbAfTwZFT96Kxou",
  "key18": "613HoBctonmFioGD9J3xSjNynASCXQwnn4jCZMLdtrLfeRqFugGtNfrEaAav4W7SzYFSSB3sGhqBww95Kaa8GRCL",
  "key19": "Cwju2uxdLvdoBUAzS8rJTw2FVxwqVo4mj1QkXWKaiDrBmtLmZ6iVmq4VHxkNeaMLDMs6y31sByNj6D8dDBXRo9m",
  "key20": "2fq14Sx62GGwFUXKHgxVyTDKGyr9sHjdWd9jMW8GUNaSWcgKSZipuNTE3cAc9uqn6q4Qz1Q5cyAmuaMcEUZxq4Dx",
  "key21": "33YhXqoDgspysBdhX75wSZYt52UBh7BECg2uEwMDqnTo5RiY6LPhNyUS7dfc2fTDHCsk3t2Lqci5XD7ysmUHVNRV",
  "key22": "5cJJB2eDzp4oAXRkvchFFSEY3ERhWXyk1FTEBcM1PCLtKSf2uAMJuf4wzTg951NEsnSWZVJwjSM3csiudzzsBdVf",
  "key23": "5ARTtUdGNfp1NnYXnmUByXY6dWZKKw6S9tvHdbXZ92VY2Kf1QWLfygnaNWdb7jKRvjK5uxJ7eoRFTh45ukZcZ74N",
  "key24": "kEPWjBSVi8KJ4JzyLGgR93suJLdCKPk8N45ysWRV54ppPn3sVn9dgW5JT6PuJY7s9vjaHbKU6fcW3YtoBGitwzC",
  "key25": "4g1RpiaZoHUt77fJj5oA3gdSwiJ2dS5hasV5VgQ5mF5iV2bTzsqPFEJ1xoEAmPJhi7h35SuwvjtPJbDhwzAD4RAj",
  "key26": "2avYNDBoGWmqs5sSEwx23VvC8YVSjBTzNKn9WS9jgLz4sHmjhuFRt9W9iedEw6nxbZDbu4TDnyTQCzPu12Ai9qVz",
  "key27": "5v3eWrtuoVF7eNMpjMdbtaoyUJY4MuDAcvkX7293yo6hSUENUspr2xXEQtbgSnKCXM4Y3JtkPfdSvgadwGjccA9Z",
  "key28": "2Pm2bMyVjxPY93bExQxPwwdw8hR7nKJq2EJCvvTaBuAbwucE9DsEMDbz17hcV6iL3AYXoHWaSLHmym6w8ueSJdGb",
  "key29": "5z3fFBBWyzXgqE1rKWbycfi8X7voi6tTXGKARhUeCjYShJQvb1LWdeboYoTF8j4k6t5FVNJY525787Fy42gXfsfU"
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
