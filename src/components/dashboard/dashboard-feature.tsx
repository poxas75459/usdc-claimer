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
    "4zTkYk2r9ZVhRTvWMZbawikNEytn5w89baUJ9DNTK2mtAhQm86vG7aC2FrmbQKfBBTvDfqgLnAEvZdAM6JkCrckt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24TbpTSi6MkRvataCeUjLRbwMd9HTEEcCBXpKowGiYZw8ZjrWsdbA6yrby1EgsNR9NN84vAuQqXLncEbmXLsGSVC",
  "key1": "4NZU2gQFxhF7V5Nr3Jw21wKnPmjBGn47vdGgDAXd2PkerQJUaqoxdRdWtW2vsLGVo8n4hGcnzwxf92N4Juvoyh9W",
  "key2": "4QuUBZK1PzsMQNeARUZK7kPfLBGJ65x9eRFmVRQYor3bSqPQNgqHx9BXbkCzwXpnLdsWFLBiSPy5cfQzaLW9H1u5",
  "key3": "2SwAX1XaiXar3kkDK5fXGck4qEfQ7Ja3r4Y671TQV15zSX45W1VbzT725EFdSCmobJcZuFJCYEiv3Suwx7xgikpS",
  "key4": "31LfGyqMamq1Ykg72t8chnZGP8pcityyFJ9u3e7nJnFY86wg4iic3GxXdhVYiKTtBQ5Ym8GMcwGRzx2H6Ry7byw5",
  "key5": "25sfMUXuTEW9CyGpo2C6PTDKNiZqCbWRk3yW1VBqtHKNaAYB127nid4r5ER1YxpgBVxARjn7W4QTLcwaKBAmNkvD",
  "key6": "4dHd7aopMazQSVW5EAw6cogUF1KndxM6CZV1NQ39jGbFNbPQLmZw7S25CKtTiggCXMJwPepKx9NxssZXC7nEYYMk",
  "key7": "5KQbDmMn3pB9rQQGXssq4uvpR4qo5cYRvqd36G8NxNbmdofgwVG2kJmDiES9VmFaNitiubTN4hn28WuqQuQ5Vdbd",
  "key8": "Ck249QkXkeBt58QapRZnDRjKa5HT76WTSHgypDv9gnXHSBgmB6WJcBukfg5FN262GzPKeRkm7HTZsvLqh9taBtw",
  "key9": "5gQRNHpnZeNqLoNHXsfhBJR7pZwVypTDrYgDD1v3WxCJLiSM8ithLcoYvjFJE65Ey1hevfstFjGtTW7T2XhJi3xH",
  "key10": "41AfGzT3WrgnosacCG5KDQgZ2fSdbj3mmuSdXeo7nzxfCP1iJoW4GMS6ZqJRcrrTQrUEWPubeQEGSTDrQjAz9FaZ",
  "key11": "5FCZdQrNefrb5iVXjqvVjydYzbpyenFxw9nuCnXhrquaNJFyrpzQzFLUajjSJ4dzWEQp6MgQS7wrvEAxCYFq8ZaG",
  "key12": "5jaWMmpg7toKvBnaFSUJQWM3mQTJRy5q7Jq9gXuVDN11BHYy6UyNPCKky4YWKoL2iYLjTeYSFafFakx7GmcmkQg2",
  "key13": "3KHgnqb6BP2b97maRNpAFVo4cqpyXgSz1q8h1R1cwshpE2ijiWFah8fkHgsvkZ4AdE2fboFpY9HK795mC1opzg9A",
  "key14": "7Edy668meXZhJvrwVpXDsHK2RGcqncGtwZ4gf6ZvXxt7m94mYCqrj7B1cN7G8wr8JNgBRzo97JAn1jujfZEPVeS",
  "key15": "WPCHMyRg4tAmCsQU79CnSPzHMpMWMZcKKQ5XenLcYHLJq3wPwJh9EtqwkH2bPgAFqJmGkdJSoHAKxLcc3EtuU9t",
  "key16": "4SAmwA1zWNR22RYFYFYYxPgq8W4mGrdyopTYxYToHEci9yLTu2zSdvbZ9H5wLM47xfJby5k3KWwqy4gK2X5xvVJZ",
  "key17": "4BW22RwPqskgvpz9ymLyxu9b7GiYBk5Mfpp33hQXqbN1B4rZr9P3c7Y7SvLpkraQC2zGmttNhTRdMdguy3ZRvMS1",
  "key18": "4Y4Zw54Ctna5cg5j7E6JDzR14US4LuqaWh6gSh7RbsPA8Jn3nRUE6w8EHz7rk8V8mRxMb1paF9QVgmBquD4EkHft",
  "key19": "4nUGydrvKJm5ymn9cC5fZaBpTK2DfJ5s8tnCmsP8yg2qVbDyrc12PfsWK4RLbPNkCfympAd9y59x86xZ4o3HhGQo",
  "key20": "2FSxhJuVG1ppYbyPjLd3f8iCVriMWK5C7rjhyuNejUm3heWkzAHf9QaLYKDXSBVsaBnArQLx5eoPMqHVLoUYitnS",
  "key21": "2gGJ1b8PUCZxpLjevmjnxUerNC1wYHdEN82cFHx13ahQ4xoGJh5DjpUD2CoqmGJURKe85XKQLQf8Mbm34JRznwtD",
  "key22": "5UQsYaqBsbHUwUxHM7qXec3Mj9tpuEYd5qJDL6iHVgtY7jUqGjdGU4BZpT7XGxfZJE9ja9dWkT6PPWJm4vcKeaty",
  "key23": "2LEdmRseqHuYbEYQCdSj88oqZFRUgBdD8VKQEeWvL7BcCJAQGZBssqT6Y2cec56x9QH9yrwoweAHByidvxzg6yD",
  "key24": "aL6gtyTD6ertH9ssmKJa79z72cBwTFB21oZL5rPVpV7QC49KGvHpSf7ptkBVr2wSNYzykuLTdPVTkjFGsjVUM9p",
  "key25": "Vi8NR1wsJHpJMbHJW9HZhbWftjdTgkSS3R9pF9ARg8i4fBcmYJE1XVuoNS1XVmNcoAougEt93BojeFmndprztJH",
  "key26": "4ThyYjPGcnt9pdac562Q1SeU8hc6u4HyHM3WMw88i9jh1qefHtfjPG4pCfQim6j2xYB2uziNJpPqeZDvKwtvKZBn",
  "key27": "NKqBGEzBW5yZ5KMWoNvHHH36dWrQPzyc1VCViysUDsGZRszytgr6h156HA4zdHh2zyN1ifh4L3mvf4RwpdcJmi1",
  "key28": "3QuubrLRSri4QS8Y6UwujPza11B9UcXvhSfxdXzERBb4wQ84VP51xkqNKhWGTkUKD8PoTtGHNZ3ghHLHnG71vP76",
  "key29": "B8Vd6r1NhR1D4WoTHb11q3GwYyGwfNgmkbjo5cFj7ciKfD3ACCb61E1FcfaNdAisk62hxH7mdEXYxrwqXEHDQT7",
  "key30": "5QXdXUiucweFFe1GoSEvWjQmx2DavRscBVkSCofkMaKQNFqqZgMKAunKh3EVRdxyG4QsL69n6JKUJWfaxyH27LAX",
  "key31": "5Sg1fU517DVSQcSRVkP7hrm3aX9HiC7mh8NCoX5ZA3MG6iqgvGePaDU8ikPH4xgVUvwSpC6Hbwcv9UBs7QWUVacd",
  "key32": "43QTvhjBz5EGi4Vav2C5NaFtzuecPKCuu5HaGGYQEg1rMjsFqhyWCPk9maBXSVnGFfBGLXxAxp6hEqeNRRPtfnmE"
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
