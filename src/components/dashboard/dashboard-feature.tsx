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
    "3z7r7MNPvZ7fp5TrQQoZisPP9d91A9oswWEL32hxsWzBWisTK33vWjnWyJvBBuczQ6NFGpQSsC1TQJxVzcpA2LdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C43XHJ2cKrEhXkfRN3cM1m7vQbUxeYqxXt7K25mVXU41bZFdxw1GjQW2JyZCr7Lg5DcRiGvcrDmLvsmxoV1Ek9p",
  "key1": "2UoS1NKM2TfXV9w3xzEUrvdhh7wAb4Bthisz71mdLifyVF79PCc2fNgcpEucyiwddvDCjDHE8BC26d529JUwRzAj",
  "key2": "4HuWEBfvVRN4xKJarzg7c8AjExkxpCwh4Z2rn6ZN3k1zhgWdd438DpkHzdREKeVm4tpYJLmyY3e3tJQjbAsX3Mzv",
  "key3": "4J5aHFUEtizWDuYfAewZoGBF3KJbNbS4vpmLWQmDbh9DULsUmiYUz58HNpkp2qt1pYZRJkte2ZrEwedQf8eWA8iX",
  "key4": "1AMA3fkZ42FWpkazzHPiB3hVt8ghpLnccaQvX3pSXdd93CWQ7baEXxiYbZt7h4mJaDhJQg2SnsLHpxrg8Eh3yAh",
  "key5": "5RJ5raue61FoVhkxAghNDv94FMbQpSYHD6bbiwNuDDex89YShunQnF7NiKYB7TzvpbjvCSXXyFivbrN67d9u9iGH",
  "key6": "5HrQccADtBfcDbHbjsXUQH1DN7XfcYy8dj3aKRAWeCL527GENCKZZW6YW1VMHospWYx4kq7Vx1rh43QraRXeiTqY",
  "key7": "XCcff73ZmDrfW3JrJ6sQ4KLm3SEF4WwAA6HKDg3dyKXeip48iSbcKQirRSMhzQzSbRYMwQSrSmKodVBoXvfWLmm",
  "key8": "5EFZeBYE9iRGs1v2iGxUTVfEUqvgq5iXZEG6EG1BywmvJGSgLmQpPexikgUdgZe34WE13jAp65kauGPkXKwexCge",
  "key9": "4L892tALSoWXgzG7a762BnTJW2gpLnBa2mkpjwdZoVvzjRzGSqXqSwE7Grt31GU5FjqkQ3iNrSqWt4CyouqwzX5D",
  "key10": "n5PNKNoRCJdcaxBdaQXr9JUShB64EbbBdgdZNh8Zm5GygWGBFWL1VbN16PWBMTMBgrmyHE5hM3uQNrXV8oqdK1o",
  "key11": "QXrnwaH2gNBj53tcfeVkkw2bLyV5pUAp2gy2eJSWZANzw2mUykpCoqvk9fWZyEsFb5APnjdNuPQjUPP6g6JzzZo",
  "key12": "4RGJhSHsN3tNy1woawyh8GhcfHLbax6SEfpWeX2GHGh3EAuSSrZLYFX2xN8Q8xvec7F2QRW1TD6J1MZSsN2sKC4h",
  "key13": "2oiH4XmFHtQFqenDGVbiD5ELnXmf2DKMCostPyohqkBAAd3aa5sP8uDVnkS9fEsjoEEefXzVe7bxPLS8tg6hPesU",
  "key14": "ZcaNHejLMix9oynNwVrMhpRmCQ9WYiTGRVFyMMy91MUPUwCURn6tRcrUwEda83Qht5j6ekuTcCHm4KeexwQZ5VK",
  "key15": "3hMxrkLAMyt62dmzxHb8EvJ79c9e6nbJjRPPQksJcD2CyE1uJrYt89KLWHNB6zF9qyX4wcqsKbx9d8Acj6dB2viB",
  "key16": "4a1QbGSCTC6QVUR1UpCkmzAhyxRD17j9zYU9GRo8G22seNniKjhMqUyB7GgNPSR7EnwEqcASho3zc2hk63UYyrEc",
  "key17": "29KpXqvypcos4cstjKmpp4Tbi7Yo7nhqjUcCpJAf99Ran4cxUCB1k19mtqQxdpYNAZZgM2oEpLPWgEapfzpckYdW",
  "key18": "2msiPrskS2vRzEzxqY58NZiaeWTmykVx91NfHQYhxGyfpiexcB7NyfMrndXnZecwjPegA1CBLvqXqq2weVxQeQQq",
  "key19": "2MvDEXKTq8UJdfJyUZY5eo2Ru9F2QjDw7oQuPAEVofYhiPZXp5wfwuMBFbDtDXfKQ7ys8JgVJZKWC2jo7sMxhENT",
  "key20": "2kw15v2jg8i4jrrAbMyLFA4SSxXUNygc1fMYhsmBGWozEmYEpgycSYqEG7umNHZnkuyLZasRHjN485q8oUjL856j",
  "key21": "63a6Jk59bArwnb5YNexokvLzBoMM5to1jkcHLqhrRdHUJ6GMfd1eMeg7onyXhsbxavrioYsSKTKjh8izY2KYGGhs",
  "key22": "2ppbAFGnQEWe99w6znKbvcBmxwww2P4guooq9ZSa4ddGitKSFJEzCBHZbQwAuAAHYKzpjnYKd289C116TFcMVsC1",
  "key23": "w8b8GWjWPuUFbiM3ZSV6WWs3pMBgfkrwrDYrP5hXJPax3xMCG89RnLaY5vszSfxg3NXa72nrHuLQz2qAtUCbmMf",
  "key24": "46v1o3B75mxWpeeoWfeW1YWqToCmJ9x9f9gRks43QSzEs5qsMd9rZnjeEd1affUyLxdB5EvfuJ6Vuh54GjBfkQ5Z",
  "key25": "67nDizvMugKUTDbL3ZKuGbuJ3vKiw4dsoyemAkJpXGCwQBoJQocaUfB1RwXpzZfTrCeQjA1Bms6gXKnTNuBHGzwD",
  "key26": "2LJV4oaaN16Mwd4S5F4ZsYv4gnkbob7nkhqFpPW6YwM9vchgjVxpu4PhHB57y1g9XLyFh2NRq17YP7H1VCyYvPG1",
  "key27": "5DsayjV7XYmrZg7np9Dxzyn9XDaLfghLmRVf4sKkTtyVAe2Cyrr3SxjeiGEB5jhPWFEfQAjEN5PJDHGrs1d5ERhM",
  "key28": "4iXkpQyHdxhc7XLra9wQaipi5do5sfgHf5r2hRmm78sTDi5uWHSeDTY46u1y3JgkGD2Pnc2brpKozywLkQ7CzX6H",
  "key29": "3wPwT8zbNCSrSEXwgcVzEgyrtFNUP5N1vcvhFE3eHtGEdNd3c7jMmnZFsw8fCJZVQZAT2CbbF4Rksx84tcveY6r9",
  "key30": "2qQb8XzagchhxVyCtvWQm51Nt7u1Ni7CQB9kxm4CxMBD4n9HkUEtXJR4FQTCsTcRpEEB9ggAZXBdLewMwwTrfh1a",
  "key31": "2n1sEfa4KzkVz1J2DKhbKvEZqBjLjcAH87qJKqEXwCwSfVX27rPVanVs55UvreAKhkuEhdon5RvxGHMXrotW66Hc",
  "key32": "5ZSnDu3oAsNeAQVrFuQbmGMjoQHxxhUFynXtvYurAe4sav3pPdXWEyEUmpaAu3hKU5m6k3AV3RdZQjtXx7cajewE",
  "key33": "4f7tq6dANbrK2QwExWzhCLe1CVPtySTmceeKftiwrvMQCeuAsXm2yk5qc7vM3DsQadaLj7saonNBmFHVQ1f9fzzm"
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
