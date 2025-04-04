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
    "5iM9qCqhurh7SxF2LzhmZa3Q22DpHN5nBqrA7RriqT1BJF197mJULyDNSJrrRPbWmNGG1rBbxznn2hxsXMyFui8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnQagaqj5pCU765XWUjygtNcgYYiWuC7fMsHacxBqUhrW79guVjF81Xz3gGHfXwLRQHFBvEkCV2imddvtVjHUCY",
  "key1": "4GKuY8miK1LdDmxiUTC91VCt3ajw7YohHLKSFvxJUMWNLAm3ZxhCbbAoWTAeNbPSC9U7hcHvjonEkBqXiiRrYDAE",
  "key2": "2a6Kb91PKLTQJ4LyhJHiQ5NLwDFPBjNJ8mpMzDiAxH4d3SmSRqCGZy8ARYtQjyCb66LJ1gkfEH2hq4kcohkiX1m4",
  "key3": "5QJoDP3H7K5vMvFDZXCz7hoAz4HeYKADApfzjhUGcZmrLXoQxsn5jAgLG4vfmCmk4jE9w3sTyMZR5ZrvVQ3EgCuj",
  "key4": "ouVsiKx5wPWXsqehEBKzUqaTeCyrFSNaYH4rowvPmk9AkWzjSbRR7Ly4Q8mFfALkiihv1QPeMrHAsc5Y2mY3NtR",
  "key5": "382wFjhYtyN7c4iht2vfyd3Ld5FrjfEQaUbW72Xin4HvFUPLHDE85gFEjMYQrRFySbYAWhCD5b9qxK4DAgN4wCSV",
  "key6": "5wrjhK2LEPh212KBdGxD9Yd6jDsEKCXvkJbjvvFKmZmVhT96Xb7Lue9CbPzRMawyT6UdgKcS9MYHANAyqShve5jd",
  "key7": "55dh1Brch3YGyAETyq7bjsKvkcJmR4YG2kFSYM6osv2Bup79Daj92sRPcqY1ZW9XgC9ATotpze7FV7TExQaebrCz",
  "key8": "2vByv4jGMufJrsgchxuJsueP68QnzgoXXRXpPnA78t4R3V9XfmGczjGVA3aZp1zize83vCLvvDdH94YjAGQGy5L4",
  "key9": "3SNLxwf2kg7KV832h2WNr2Q2T9CFCWyhgBpHWSKwbYBVFWMPwaiTgkZZ1aDXM2LtgX6bMbkhZGswfWYkgZmwkYTX",
  "key10": "3cY33BtjB8fggTyg3VJ77Y3FvYF6txWaRNVcQeivcbQa8PrGRRQh2oSEvzuoqVdYT4h8ELtFoPX7NU33VrNMJCN4",
  "key11": "sGQ86bAe3XeutUSZJ1ZVWEmQYuUKJodWYxMB9ytHFUbapBhFe6zX34Gewy9de7m8qJyDgjgyShjgtKipXtshbsE",
  "key12": "5XJ8DrYDQtLosBpjDG3aJe4v1jzUNLe9Aq6aVPbTp1Rig4rKLnBRgtv7rSMLrEax1CuQqct1hG4ijKTy563zB8jB",
  "key13": "5FnnAHiNPBULEvd4mfewzFRfggsiofkwDDhaXp2TSyG8xEcqVqzErnf6gz6cvsVUpFDEWY4WT9ZUz9MFGFaLTESz",
  "key14": "4rbZ1dKjBCbheLWE2SvbE7myJ59XARkjh9uPfMc8DprVy1m84JgCYmPnVmnSCEQ13NkRJhrm9KV7dwqw2DQmpE8e",
  "key15": "5kobDikT6AUWENU1i7srBGFRmoRe4xYU2Km3DNyoveC6FBhRwf2Ker2HRcUxmMBstc3Wn9F5r67qtpFJeykSy3Qn",
  "key16": "RHFRMXb6yVyyonKR68T6iSd9qCX9Hx4esscmdhe8wiu5Rb1fBdnkcL4gFpsQ3pr8HSWQSrfgrro3VpcZqGRfQr6",
  "key17": "2qP5W3JAp9yLNy5KsYkSw5CdEGNiFSXjwa5mGW91AkS7PeVXkqUY2ePUyYZVK46KWzXTaFGT7rsVxuTGeH74Ana9",
  "key18": "5t5Mcf2ewiYjC5NX7Jz2xstpyrx5Akv1LV1SbSyWHdRHzzeRY6yaypJEHxkNyUbqQs4NfsF9PLhkb3bRyE7f9ZJ3",
  "key19": "4KWY3KrKUqpZopwPRWBoGCtd13eei3KCrxYYU5B41b9fpwsBjrrgCnuQhfY9z2YQqpMTxXSZRit8FqbSJHX4PkDA",
  "key20": "128ZrKgXPaSvcjf2epWFBdRJs7XotGBVcPHrMAahp6hrFNZL5XcrB8sp8rQcu5CLa5u9j35JMBkHJ5ampjjqGMqF",
  "key21": "5K5XivKDKSfFBuFhPGhWWG5s6kdzbxK7TJG4VxrCe2JAkApPzTHXz8nxwoiK9ab9UcLM7pBp7ozo2KELMdGp2bU9",
  "key22": "HVNUP8u2p2aFN1Pwyx6paoGe31UcNKbMUFg8ZFFXUB8MBgKrczdyoyWL1h7RYQMeYFDJG5yRTW2GMoXUYxrnRoU",
  "key23": "5LanHWMPPSFNeeQLN5SA954CXb9FpShYo4kwjSndhW6fAdKFBmZ6jniXj6SXLADiYQfdqyZN1LnL5uMCV8i7dAxs",
  "key24": "4AUCSHMFegRx41GgtaN4mxSAkich6seSzAXPT1GY9VfCkJuh6kKoxoqugENUb1KUCcd7jR7DLupgsZ2Un3uLjQh7",
  "key25": "4gmGAxrezHUHpWB28wnf7zKPThSCvBpULDRPuQoVWTNanr27kAwJo5TFJb3Gga88k2FHb1Nz25ao4Zs7JMcPhGFb",
  "key26": "mdfa2Fv8Eb8qP49GF2qTvKmQ9mY1FRnixEhve5aK63dyMh9Xqn7n6jiR58sYduSK357wWDQ8x8H5fTD8MeKxJSo",
  "key27": "2NqLi6ix29mEAt9ERQ9euBqyUg3uFTdW6Zj6FH1EwQTNuHgt3EQj9AryCVpycfNmcgtjcoeLKH6n72WaE8hxt5Lk",
  "key28": "4xghkRW1rLksErSMtm3FSTH72jzFL2VxPDtVAVLCBsBK1Fo6qrBG314TyM8vgXZ1yWFrawxtQQgsPwibuLW8mn8u",
  "key29": "VyqL1dyv5qw775MAhpCG78koEkc8tWTzfEwiLdNFQcCBWiyj4FLK4rTmZ8SZMUX48zxJvkUth8EnTzAt1CyVY1F",
  "key30": "5GFhgVucM6kGmp3kSkSWBEdPLcFxmSkHYsHKTeKixTGAt9Ke3oiv92mrDkgtQ9SQuhSSLvLGB8BmaZCDLybxr6Eb",
  "key31": "Fbv2wHqDFycpkJdJd9zcDTUYazNQS2EjdrD9BeUtYVqRCVJXYmZjEKvNUAyupwweF8mj1eqw1ypZ6RZxK52efd5",
  "key32": "3z8YJm1TEujgc9XLADRDrgcxLBmTeuHhnmSFM84ixXonF54T6JgUpcwvHuu9geJKJDU2bGmXj1VS6D9PszhG3yj3",
  "key33": "4hp63KVDq26qTWW6SDYgxB3RGHtS91bBFpxPM5b8SVHxcNc2aXcLRHCNEnjTDW6oHRc2oA2QCpfgp9gytbHGmUh9",
  "key34": "45b67rUJozhDuHDwHA5LNRyYB2mwGcvT27U62DTcryRHSfSAeMmyfUdVDGmtHeQZqJfmB739idJUJCDSL9jtDvJK",
  "key35": "5yUMo6vnryMrncGZYd7CPeNLig4vjMV5WYapawsqieuimCMRs6Go1BAkdWzqckmMy9iccvnG9ETUxYu1NzzqjG7S",
  "key36": "46UnShPQB7rxGugdb7BDX68K9Qcs8qkgvAbNuTDFYsR7NVjmgQ8sJPZrKypqn6uTHKj6EU7VJi7r3gbvvPMbH8NV",
  "key37": "4DdXsTji87pUaHm7vZbbeG2pgh3V5SxJz9huBVVLnqmE7XM6r7kZDHHBRFACH9XsWSAbXo56Fuczu8i8YUKwcjPy",
  "key38": "385TYemAqy2xXNiuucvXwFJovRXJqWFj1xJwecebixhs1n9oivM9fLbUMVvLfpmgNgqhcbd9bugcz4GzP3Lage6",
  "key39": "367aqvPhFogtNCfAs3543fPm7wyXPPDnKAwKDSEEgPPKoHYyuPhJB8zuvJVkixKnw62kwzgKQwtfgaHwvD8AcYqt",
  "key40": "TYsjVrW65qLvF2LBa6uMVjP6ehxBvctQRuYy6AgpzxxUVWcC8TTvHhbWUG4UN5Q7S64PGddC2B8s7tqD5V4RB9o"
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
