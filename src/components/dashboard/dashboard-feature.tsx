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
    "3Ak2MxG7z5F53UKX4Qjv75hgRiQMsDi19HSzGwP9THa3sECPoF2MZ4DdJGG1bc5ChWEofVxy1eyfWVVBpvKxGkPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDwsdu9Gbp1bBUsrAGcTovq9oYCQzH8dmzYUbjuEcJBdF5ufgj7gxGZsnq8pLuuhWX8yw257BCza6rk4aSbzkW5",
  "key1": "3neaA3p2fgkvVGCtW21Qi8UmwTxDgLiWBXFmzLSDGK2ANn3guU9Cip1vA6opEyzL9aUHXXVHT3DY9W4v4ugZfvbb",
  "key2": "37t4quPo5mWULnrJRwkp8KbRxiLcs2BgzpMZoZtEqmh4FFnTbqwm7SbBaV74MWaqNCYYB3dP1s5CbiKEQ66vYF4F",
  "key3": "3wQkjwFf5S4LGWe7FTWunGTckAXKn5pchwz21CwHmK11bc1F971EDQqn7shtj3tta6cwg7K3tdMYB8sDjFmyHi69",
  "key4": "58yL6yYb6WYzvvTuySdgcZkjxNYtoBAdsXJUsMyGtai6w99dowGHwjzEodWC3yioyuEsn6nrVQuTgcUU57ERANiu",
  "key5": "HYEPiVSB6XKrgs1kzQEwgYHVUSfnkh9vq4nkReZYZstKVYDdNnhPVKUJJeaMDitbGTaT1CZAPZdr9wdV6Ypzt3F",
  "key6": "3YjBYERRrZVXHr4CL8L2E8izfmDczDdSWArzSCReGmCpEs3weGZqiKBdsU7JFZJDoJfCrf13TUuvSxX1Q2KtLacg",
  "key7": "3ssyZCk7Ln1ZAHQqa7k83amYr2Jvunj1jqC3TCDWS2iZPu23B7eo5Uo4RpPADGmbBEuUSgXvDtQX2it8Em8gGDGx",
  "key8": "5RPbsk9YHtUUCJShkd4C1gHmUqHkYQwtAJX9hTj87FhCynN8j93ZMbfLFDwsh37Hfib2nFtvoDF7T1p5pBAJ17Sq",
  "key9": "4HsfZTZQGg3vCV54sAoF9RQTCrTDZjni4p3zyWDWiBkw9U6fs3K8P7vNWYuW1kPvV8FBsp5kHQ1LsXobyY7wF6Cc",
  "key10": "2JKP5Gc2yCYsToc4GHtohUPXu7P6BRAGiDYnpxbHWavtK1Gy4BgCAg8aHYmrTzmXfobYHhiQJiwPFerzbPvei3Gi",
  "key11": "4t6v2azRNDbuutPMHshKCPKsFzBGFMeAZdZi3hSVEDzzPZyCe5uMuqJSyeTiWHKcu3ohCwyonoeFJGTTv6JpGMT6",
  "key12": "58JBdNtjrqFKrHHXwRLFz6u3Z4vfUTth4Nbj2rif8FnRkWitXQVETUdiMyQZ5t36PAuaVWUm9beke6YHHcpw7rMB",
  "key13": "4aAKwRHJDrrNaxiAtxNdJQthBGmc1kcaSTncdDYPkr922tfvpgYWo3JQUHyZpP4Wfj43Ed11VNQDGyRNE23fjut5",
  "key14": "5H5EmARhaRKti6Tf5gUJKkNNKdwoNUGRRz5Rv4ySs7iT4gjgc4ipCxCGrjvTD28xRzJdGih33RTHU3BgDJ1Cf8kR",
  "key15": "4BVLHmkB743pW1HirxafKZXXHGi6zdaEg2AR6xgPMSYtDMcT15onUWpnAZdFA8PfK7QbXBaZiBLzYsBQzmQfhB5x",
  "key16": "4zmFJJwZ6iD6uNZqAjjQmicSMEsxtjoEBDJTBVCva9GFaCQL8kRL8StDb9Vj8zB3NZUkAgoWe2RHptmi6si94SpF",
  "key17": "jnSEQvGhm2ghGdeYrEymgMsczyJrSDmhYYwWiAqnrFmec9aopyW5oLHAoVkA1vE9CjAqy1wFf4boyWYYx5Ru245",
  "key18": "2e47fM4s2bfz8uT17ttDadZVR4d8oxi48JkMJYXPkXASwHaxeUZJ7GTZFA5BZSkA5xfF81oE4B15eZGJ8HkfETqs",
  "key19": "5USRSrZkt2dfLm79p9GZmjacTEk2EEvBVpZ9itYHmBB9VeQQXRnGSv386oZgpie3JfMdGfYwpWquhPc2EnJPmsan",
  "key20": "2XWFTGahCLk2m9Y22MWMobXab8HppWayLgzDRpARyRWBhyNsoLFQqNA4WqvCsZkJK7aPuzWeMD9ewoNkqH4fdBk",
  "key21": "61pewvQQrNDpDcjN1RvUvS6hgneXRKrkWtswYU1oACVoXV43PpM7vV4asyyLjGsePFEe3xvPucnJneATs2dfiZdg",
  "key22": "34EMfCTDa84tchbjqYfDB7dxdLB4zPNxskHjrDS7v9mCcYJm9RfyJnAGSNfZ7135EtSyWcYZKc4oUYYA5KUPAG5p",
  "key23": "4Lqz7T2YVu9mYoPZ87WMGSpnQHwGnB2fdWqUQK9xe1VuchFTkdgEGtuNfL5cqBjPM5apKBgTdXLZEsMqEyy23qDy",
  "key24": "3aXvkWtKYaa1hyo9WKYcdeu1jorCfaB2pgPo128x9H1gkgoHFeTq1UoQ4ns5gty7vEoZ8sLzRsCTChpUBYrZZr95",
  "key25": "6348v9DVgGzThLyVzidXzLiNh4s4exhBtaRGryuQMnJLNJJuYGXSMwLZ4cHm4TY8ZSauSDiVSio5hrwV4Ae2Qi1J"
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
