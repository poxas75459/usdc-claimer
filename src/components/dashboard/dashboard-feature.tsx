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
    "3DCShFdbnWSaeBJCfx9gg2Y5Z16zkRwUt5dLu6FhDAzwpRQt9ggFxs8ksedadiKgEQqDaYHtTMNsy7u5dpeDW7YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XaKgqVykt38xM74VgQU2q7rSFCmqAJCjBpzAgsN92UVZivzD27vc7TcLgRWcm1vk6hkmZuEfDrrmChkmj3NEE4z",
  "key1": "37N78Xw5Lty1p4cGLuGfBydkUTPYZJQTWv7ovGSAAmgVybwGu9nG2Kj3eUHL5dFPMRtDYgjYeFdQphYcNXhKybsE",
  "key2": "4X2nSB6gzaeZCpE42g4oSsNqX335rjGUzaE8aY2KdtGjTsmFsbWFWP8FmVCxPFCeKjyHjuQ9yxyN6JM39St2QaXk",
  "key3": "2nCyYoDcVHjKRDLwDaRY1eNxTfWPE1vGw7c9GWVRALSkF5YYszVgGKjP44wAfuynbCA7oU4NAu9vcpR2zKohLjpa",
  "key4": "5exnb2EzDaoqUeujmeZGyEeHZwuqo7tJPRULeUKejWfGHdZ3XJ43DBTrK6AgJMnWZ1peiKW2p8UbPYikwCLGPUCM",
  "key5": "3pAgie6jjqYyFNywAeG73w1x2btguw111rLbDVwxjFxA7uexEV9MQArYCZuNVe3meBnf8Y4VF6mHREMYbdb6egLH",
  "key6": "49XU89MFhwNR3kz7w8pTkxajuQo7HMe6SApM8CYXA51ZXEUUUNhYQg6T5jedc22zPEvuxLtco3oRZcELAsdR95H6",
  "key7": "2HdWoUjqQLRGTtzwPJQSDzofqBqJMfy1VqFNxzca6jmdvDnsCz1HVYYEzn2wFjYMmjMUSbW5P8idgQUq43PnYFtJ",
  "key8": "drF2gnPFJdLckSGsJYTVQSewchtTBZDZkQHZPx5hNKFmKMdcwr1NiGbm5gzeiJvF9X3jCKbJa2pFWshFKcFpeV4",
  "key9": "5nJLzMec84LeektLo9FuoPq2nppSaDsRPLjNRryxXuqrKiYPwRm3nqPz2a27TMXJW7aNjrpB6tLTQbGpTN4q645N",
  "key10": "5rT4UK6jLKrobcNr3tABvcAyZdjAZ7kgrYhz6vHRQ5THKKSaVyWYhYZ2dCcMbsvra7iesmWaqKwf3dAfHWZYWJn6",
  "key11": "F2ME9n4dVaG6Dxorby9fRSkGbabW6pugKmGDgyQqQkfKw3rALrjWE4mG6GxhGUSB9vwLFW6DBXapAhKXQMx7kfi",
  "key12": "JqDsNgec8ALM9xsG8TDp9ZJGajkDjikj7fTch2Jrevw6ghbH3dP3e8eyhPwLZkwmpR8dVwcWmxtpQCWfFd8dZhK",
  "key13": "5ikpC3Hxx2k1djqqFkx8yDpGYaTFJa3anWifokKeFcnmEapVsEAxHE9rHZNRzbgoFA87wFo719K6nUNn3KKVHBbt",
  "key14": "ckzUM62McwGKAhEXrwB1qpTKL4Z8qtuSNPNqpmAFWufDg1BwZWxAN8QMDTy6vh7ZMMmF4uWNycagLNEnRpDgvK5",
  "key15": "4DgJ8dzi295sgir3wtsHvNttDRMTKWN1vH3QuHeRNAxKpAgxzswwUGMDoU5h7hf6KpvgLtGnCiV4HovK99FPJ5LL",
  "key16": "5EsxAsujU5AAygLojzs4VaeRzSPYtdw8rc4hPvTxdA34F2gq3MrJkjqoNoPD8YSpwqiRx4uChzu8uxNMi8JhQajm",
  "key17": "3mPoFigaNS5kRc1J1ugej8N42tPy79L7XF4cTWBYqoEPjz6b9RKNZo2WknK8vE4Br1pcSCR8MymahzhQPkcmkLjD",
  "key18": "42SM797MX8nCdc1e3xPcEcdWeaTZUfj9kKKCu1JaBogfnpq3SzpLwvbvrqXNrQqCwZjLxA2h2w5BqmuRYvyhX5Zy",
  "key19": "2XEhfbM5vSwDtxYTedjG16FMbrpVt7145Fph2LQNy56L85gAMfwxGQeFHJMu8RysamFUPfVWya7THbDDWxxMqXE",
  "key20": "4iuaZubL7qDTRWBFwsdcm8MGJpQq9217K3i8i3GJMytDbUARvCeeYRB4vaapYa9vW27nhUq4m2YN4z3vxi3XNjR4",
  "key21": "5dmqXkWBuhYNuy8CiTYxrUCK2CBhQR3Krq25mJp1jYgSPSVj6ms7V8XW9GuqbwU4r6RzrrCSqa3AQoe3Dk3xFcAY",
  "key22": "4SK2FRP5TDwkknFsJr1rLTVbzi1UeW6tqLWoYmfVVxgQ5PYe7oSF9NenTdciAfkZUTs9x6Bv5hswJ8TR2wXK7bUw",
  "key23": "5J7n5D75xb5or8oXTd5qGTCzVpBevi9Wb4ZQMqvwJKznGodmVuCV7bRKVg1n8NbHGSQa4n9gZcfyioDUrfjmasmP",
  "key24": "57WfaTYoCpjVchguLCwz3krFdthywfmoJYqd3ajBe7f59wYJp2pp3XHwPSFAb183vQfEhjxa29H9nWQWxvEuiFfC",
  "key25": "4Cy9Z4dFiEfA5ztjghAC7EEtBozHrwGSnaWHPse4QeKks7mTpzpCBs8idnCeuQ384QWTJeUcYgGBWMdok7snpH8a",
  "key26": "3mnr2gMjh85uUMt2CXMkeF3pvdDUhwTZnxxGjcXNTmnbCSUpgNGHUffsM74kk8N26dkxk9NsTgJUGZr4JgTgK2L9",
  "key27": "53uVpM8JTXfajr6SJ6ftp58pCELPaqVHbteHRMZBzSxxSENQePHMSACf4BE961HPFwukATiZAovLUULqG1HBJwN"
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
