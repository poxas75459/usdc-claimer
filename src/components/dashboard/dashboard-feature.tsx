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
    "3sJmG9Wn51kkKa2bfvRBwtEGsGM38UU8PeeMB1fr7J8dsNxnZjv5xip51aqEkJZhTLAh1JZMVZXCsuTZ2qpChGav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sxt5PYNx9iavUbojuxm28nkpj9TW1X6GScJhS1MAHjXdpeQ1zMXmY8Md9LthKwRKMTFFmhYHUv6MpRX7oYgtTay",
  "key1": "5TCtjoDMzZFwPnUM71a1PTtaBmvsdV1iSE9exdukMDQdvZiL3jM4Q9suKew9ZtmoqarRmYERCqAQ52Sg8NiiPZq9",
  "key2": "4ggohn2oXwqK1sQyyxFBXZy3MWckZs2v2BHgfNAHFp1ZodAL7sFSFNUAeaFzFQcv4G6QG6rayjuMbBaDAzEBJkty",
  "key3": "2L5CZFsc2DqLAnXyoELiirBwfe5ZPT51krz2wiqv2Pn7tmy4eAFVAsEMESpL9S1EEotGDECJBrovn9xfbivUoaKn",
  "key4": "f5nmxmtCSH3bp2VHrhoSpRyJoeJ8wwg9YWW4FZWPrrbgBjCB72Ke7k3JEYuzMkcobBJDtnbxvwEpSkytd7vdnLv",
  "key5": "5uVspLPZmXfy483kAshPEPvW3b9z3mvrzz6QQyECgrdwSnGNBbVXmYDTqhbtaoLhdxvTMfeJ2uabdEhxkohrhCCS",
  "key6": "hKHAFiYw3ZwF9Pw7jnDMTUVKjxw2QDay3YfBy8YedkyLr9LTXCgZWUiiViRabuRE1fKiov2rRFHG7WqswbD9t2E",
  "key7": "2J1iBa7SDegQuU8G63DhzoMMK5RZ9fcJi3QKFF6P6ohUS98MsHhnTJbXin9zVbX6QnHqWKFuAM8CDmxV5AG3iuN4",
  "key8": "3Ye5Az2skgQTUaA3Qa1eGbRf1d8vHeJeXcgbWVVNf8M377SBTUeAwcva5hmzey89qtawr3nTb3Dw2M4HayTBKjhG",
  "key9": "2Kc8vKxPQQ1c6G88ikpkcdTJVaxV7SqFFMdpKhDptexkywv26Xey6LMFF7rt8Dge9UcA5Uy9PEpr66F5BtaoK3Ti",
  "key10": "3mu7hYxwrqysPQvnJJD3GosdbYDb3M4okCSUnnj5MCy8EQmvBGyKVmmCuZ9yA75G6VwzHGNi2XH3ZsjtYns1oFWi",
  "key11": "2gw1BHcEKFvTK2s3fhTnU9MyWm5pdxXCAUkJqRj5actusYWVY1Hn4Ct2NSovA81HMJpn5rbAdx572zGqSLNxfuiJ",
  "key12": "4KazWtYjywcQWwHC4uqNtRbMGrEkucGfZEFvjykqa8Fkk7xgXQJ3uZGRfoeAmdik9sHbwwuJSDK4jNCJxxRK4CSp",
  "key13": "372Xr6vUheyEhqpX4uvyHmexV6EAoiunCafMj6oojiytdFsauacKu3oWD5irVVXYCoMfYo8bMn6dfGNcZE7mcHbz",
  "key14": "3iWKz6sqfJYwbbcGAYFfWP9fWxKkWRtgQrqoUQGFqVg3DFufvKoNr6HTYBPHuQYbG16gFSZRtheHyXdvB8NK7QuQ",
  "key15": "3as4xSKU9bqjMHEqaerCy1N6kyhW9ZcGNxGGgqk7CYXeMtq5zQdcHPWajiVTWRbpt65KjTUaV3oqvXPEyic7tbCL",
  "key16": "2Ln8KLrghXt4o9h5yS6z2wXTL13eq5SYDoQWgQDq6CNHQ9ewEnJLwBHj82jRfTKC9DW4UpUn1UVyVWB4HBHdLK7r",
  "key17": "2saZv1rNedGb8Fgev3sxgGnA1dtV4rxGVxBH71t4R2Y8bUvc5MZbrWCQ3PemFLwG6B69jkcpbiPkLTg18nRkgkr6",
  "key18": "5gPvW6tcPzApTtRAhXDu6FpuxrpMNFJ31TXui4E1gGaCxcbdtshFXPK9UuQMQnom9ZrS1eCpX7sXqww1F8travxR",
  "key19": "2JCgsU1o3WD1PmSX2fe4eeSz8ajj9TMVUsQ5Mnx4g2SXoVctwgBCszwofCFEJnZcnQno9kk7gTaAc64zYj4mibsS",
  "key20": "3nymShsQAVwqW1Wow3cyhJ19mkDzmw1nh7XusPacobAobt5jrunwSfyaSPdvEtJ4k195To4ufh1FZBe52rMi3oB9",
  "key21": "3UErVy6aVkQYAzA4WUYZeShTTMU7RyiqtwvatvWPhJNyq5sRWgXq57r1b5XWjALbKabEff1CAXKhxzHx8N67jEDw",
  "key22": "3rCyg68T6AwGHsrdiuRocdNa1fdEypgki3dR5pJr9U6JkS5cGesqgn4W8sLRw7kjrxwwmkyVPvxfvnbRQV2KTGHe",
  "key23": "4LZa4HqP75x8kvTG2cDswAYBRv9FNDjK8rJRbDvh2Jpdmc6NJeVPbJrVbesPFD79Pqg8HFKbEV7CrdAN88RzKvWH",
  "key24": "52CkTYZXPKbZbscPjhTHhjtePJ3n2J5q7mckPtHo3bBrAMEqaSDgqiMq3LVQc9V2kHECfsPTpHGy9p8S8Bc7AXHp",
  "key25": "4k8Es1GcoF1aAv2QPZGNjtaLDAyLRDC3MpLJJvZH7Kxsz9jhMa9k1Ew4tNY5sFMGQSEpr93jdX8VwzBsjMKXM89k",
  "key26": "2TyQxFkrqcTWCBXmkyg9jfNA2pLvVayWA4FKoBUyiiZAfMeNEEy4hzgHvfZGpY7jvHyBejXGr2RZtVpSiPWWFPgZ",
  "key27": "2gDZDYQxGfzU4G5gsnsqPkBRnHJNvyvFHfJ4ChMmhwXBc5dLpWJzbhZi9nWADUM98gHXa33HND4Uzd75i4n9FoYD",
  "key28": "5YkHUVxuPjShj2LVcV861LoniKFgsKyBzpCBsWJ8XHjvrSLyST1Dwe7xSXDjbcZbL25ggWdrrjMZD1sqkc44CjTB",
  "key29": "5qLumP7MbT5dMd4deryepNbq6FLgN3ZWpMEYxVj4QmhVhAkbJgjWpcthPioYRMxgF27weJ71sHVevt7GH7DpRVaR",
  "key30": "2cq9mUFx5h12wU2GT5utjDhtZ24N66PG88pyT8rfqZ4tprWBzEeUd1dancWP94eLwR1CcRYnuTwGEHwmADLuLgvr"
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
