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
    "GLuU9Q4VcQ54VW9AgwfeLSVKWxKRH5KjAf8s8naaFfD91LzEDEFG9GxSnSTe5T1cRa1kn43DtR9hHYY9VdyHR7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vncGjXwQLyQUymBRtW5ieC1axUyGajptajpZAfKDptzu55B1GSCbBXsBJfB6a3cmYBKzjcMdECS2Ng9LuiX46vr",
  "key1": "5uMXpviDEjqfrDbYWQPdgjWgHek2huV5odEUJQbP91qVS4YZnydocLXgffWMZXr9WLVYubvn6jkFRr2vxZLm9Hkj",
  "key2": "67GUJwtrdJVa1VdKEpkdYMrVs2F2dnsF1fvSmXpMTBiNJskRoo8BGSdW4wqFBucxsUA258bwdUYNRkp7esT2DHSy",
  "key3": "4KgijE2pV37mrWVJ4BvmUqTtw1Xw7KtGrpjDn7bFZEstCKFRSQVH3ZLiWJgF7hiDjLJFiTMv3DGCjkSp2KAWsXqe",
  "key4": "5udrVVAPkPga52Qb7p1vsQRSR8xsvLZyCZz88i8LAzLbYZEb4LjgREfe1DBYnKXbEcFuPMM4SZ1gdNs1JZ6jYy9g",
  "key5": "5A6HjoHuvSqJvvhZCaaNQF1ZzSHv7jM2WCdcyHSaY1mLZ1iG8mrEw1ChSn9Dk1aVoSJwozX8uhx8YAyde2NAyTSf",
  "key6": "5Wi8QvPQda7x4FZArRccPbAJm5mhGu2TxsZCHWhsnD6mSQPdEDL4pzpCvf5SaoA5YQT9KuhB7sSR2urph5H32CJG",
  "key7": "3ExYJxPf6xuGKMqEXjzrAc2UNxWXDitM5UaRLQpk6Js3axm4cs6Zfpd6AgnYJ2kDeMBKHjZbEvihUTNsHfisrX16",
  "key8": "5Hbbp4gRMiFyJ1fBpRQ9G22xnrVERy8hQ8PnwuNKgizSKF1zby8k13zbeimdwtKEoR3Fs8fzFf2XwBiiRoYVebyE",
  "key9": "49ZWWaSBoJUmnRo3S1nvHGcQioUFtDMYmz35SpzETUru9WgqUyJ54BqKqo4nMrmeMdE6Yj9amnfVVg3YHCgwoTCm",
  "key10": "26CN9wETCjHBA4t4TAYJgegSxF8Qd4jyN4SwAo7xVsK3gZmPm5i3Cd8XjFuxHTpPdc4a9AQzbiJfesvy7CCLSLmn",
  "key11": "5NwSJY86tZjqqVNQfQWDBpnFBBztsKbNiVGDWs7iEeyvPSJhfPHuzj9GbQh8jQa57bDoPmtG6JdR5CYDJiivJWW4",
  "key12": "2jW1iLS9xoA6jPyHr2LCF1Kv1RZxHPt5ms2pMDu7ZK5HbXwHAWMik8JojLTXeXi2rWpZ3eA6MaT9KdwLfgkkBovq",
  "key13": "y89dWdRMojefFz5G4uWERqBf1V3QU6PrAK8uPNepCB9H4zsL25Ui1CguGVuMEWbmzawsuEudVHySnCvsEX3L44h",
  "key14": "53X1neEvrUx4wyg864hmjLxcHRy32BbnF5zt6KZNBtbTSXNVGRNnmqCFAxXPSXAGoAkdj5zJ5RtWkQEdV2RZnDY4",
  "key15": "3Em5XJfdA9ai5CPtt2qwoZnB2WnHuR7kpkWcC6Tf3jytKjfUu3TtmgKAVknnJ5Tr5Le6FmqwxDhL7pPBdYKKy9F6",
  "key16": "2HatqxzKWY9ptDqzcpcf3vR3mToaTmT4ZimwjB5msWBBHxwGkqSqcvdwr1JyG2nm9PC8Mgf5rV8k8ryc9vYt82u1",
  "key17": "5Ww5grzJyDNydhrBNZkcj3nwuKpKhErsocRakwKpZYoPFQ9qyoRahs6WCJZPWH7UXinpvw4qEdTm2JC6hQs7tVJq",
  "key18": "3fXSMZ8KAtJTmNa59j2RyssQ3jGwoAziSZGZfhbLs4TigD5xqYKJwcgRoQZMKWipr2imAbZcNVNhxu1hu7oa9zeB",
  "key19": "4QW6JkfpFpfibkejpVVkKJRi8vnTVFqeh9HGmAA1422m2PdEgrVaz3eAQWFtzBNZ1rMwFpuafKS4GVvcCiapFnwn",
  "key20": "5JqjSqdi67Mctr2Q77QUwpg678xcTJWoYGvaw7rK48zpEDvKpyvTnhxbAqo729UWjxy4AKxKsqYZTPWP3jYgMMbD",
  "key21": "T6GDYuetzGGUvbAUNc5LrYNQeh9RhBEkepYLSNrzQk9p5R1zLqCaXoDirZagmvTGz2Rx7yuuYG8s6gSvvzLgQh9",
  "key22": "5WQVntMnDN5v9iQcRnPQLZJsEqKWL6s6NuMKeALYE6N2r77ZnQb1XgBwKrbcaSQUtqnfJbvD4mUiyKqNzBg4MRt",
  "key23": "CzJoq5kzH6KJasnrKztE2iKbDiRLjAL62d7kkQ8Hbx8tVjjQawhsQKMDEsMVA2VPta1feyaVULmNnd3g3FnK3MZ",
  "key24": "3affaFJzJWHS5aqb8uTPLiUVmKzLWFdwqUS9vgEGtaMofbZ2ihPBL3ppafeC6QsxxbRK1aZ2H7rUmpBU9MNGsKhi",
  "key25": "c6zzKLeC9fFBjRnk2nq8sqhzwy1FSybJqeBLnjknogFTUNYvszi4EAsJWz9E91bX3WMfVhK9agtenKoTbripVCL",
  "key26": "2nWCwtNPKB1ngi3yFM2D6Q9ErkkrcJzYWVfEeimHsw1dZv27Tg5HMRBxdzPZQpRgU6VXbrhk8WVo1ZsXSppMZRgS",
  "key27": "2HvvNrVWkbhfKeY9ScMiWaovs5ffKfatgTiM21DL5JGduJ8Ddib92sXxh4TvKk84RfeHaVBQGakAbyJHXZsyZNxQ",
  "key28": "2TiaihfCj78HizAhV2ReFHhTgpZfCwXpZDt8jLafYFdk7LbeRz9Kfg9VSkHgj6zB6zge5ZnzYMVtqVfmUuGXcXiw"
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
