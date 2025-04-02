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
    "33QT4n6QeW8WQTbodHrisbWSuqbv5yaMm6FcTm8snaHRbDiMaK59zKotbdf9yx55KvfdszKLiKZ43548G7CNLsyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgtN7Zf1emTJ9G7Q8urGR2aDh98F2ECh23PV1SkXMA68K3h8wbwi2WCfdA6qwvmssPxVZMMZsfxvpwRp1GdiHde",
  "key1": "4mctxCFNdzDVLP2mKpDEht1UDF8JYvbJyjjg7KZ5m2rK85yBj4EZS2ZP5tWz5iAsQt4MPJBUC7vuoVgXHBCb9HoR",
  "key2": "2YGUq14CLpZGUR8Ht7c6FgZXQ8G6TC3HAULF6SUrSbPMRNycB9QBGdxJ31er1WAG6N6BacoUCkvubTXiEXLB8KBj",
  "key3": "WtYzJ5Pfhz6Y5QejKtakkHfgknt4Y5V3bnVE3Be64ULyzc7c2AmWRp7XPp8QUZttc2HoYFzWhHKoh8uTyVmkePP",
  "key4": "2d6iFXtokEMWej4fiidx11Aw6fCuXS9b6GPkzEs4p5fnnzfPXUsEM6kWMZvW9TCzh1K64suVHe8icmxrMRWH87vV",
  "key5": "3sC86CXP9ypYyyxNqUk4M5QBiSZmD7ALXESdkuq4P3MMtMpdjNra8BxbyZUvXa1CLxdsUYtRKxS8FxHDDRLsX9WT",
  "key6": "B6ggAdH3vrNTD74Q5geA8AHcHj1vnmLgMWvngohAK58kJDPywrzbwdR75YjyaxGYKUbfSn1YzKgJSRsqM8r4qRo",
  "key7": "2pDYzaYWcbzAHL7TwdQdoY7ASvjuvyZPjGvUriR3KPNeM6XLpysFfsVpbNqMvi3RMVfzNKZ5gMq6qrjmpVbitXiB",
  "key8": "3XsHkjTYjduucm8LENhVwjGTh1iyPpBXjffw5RMG93fLaWEwK1LjhGQHhem9PY84RXL7fgK4cD1JXTYJt4jtizU",
  "key9": "4rs1aKTpB3WYgNAJ4UQmHeUAfXgVChVHN5c4cpqJ6bV1MRTm1Ft5AvcXFiF1uRYwWU38Dkw18XbYZzehft6h7VsK",
  "key10": "4e2C1zTbKXDBR97yohF5ieUBiC5MNV1BSBYgDbcnLatZJSK7RbJHTpZ28hUaJS4Z77CpeQ8iqLUd5gu59oB9aaGa",
  "key11": "2UnPrFc4AEH7gPGiEAXKjUn3TqdBeeRad6CQ8ixPRLPnVFfE1RhhJ49LHKpNHQBfvLbVxZiu7QfkXpRCkLEJD7TX",
  "key12": "2nh8wSTzKBFBfHX3DXvrjvsFoQhTeFEM8s4jnS15syHNnVsPTu3hXBZHhQvHWMBVNXyYeFf8EVaQJCs3o4vFvt2R",
  "key13": "3dopGtbcbzCsUFsxX8XknfjP1EkDFTDH4GQsvM3vEgqfAf1onq83D43phs8F7joHuA4Je1zjwTsSYTCQMe8cxQ6m",
  "key14": "mmjqEyP3qvCqA8gNVVjudFoexXYqU4VfGvUDkqNiMiF6C6MBVNSg1nRAowDH2y9WT97kz4jTEEaquHc6HUugYj4",
  "key15": "3Gn1rwfqGnHBLimh7whVV8H9RumeP4HH3rfwzE4dB8f1h2A5sEnftzhErMKBbecuTENdnq3uTKH47bTYswEVJypJ",
  "key16": "2ocTBUsCuptG5ErkfmxAXQYTZjYZxXuCB2HtnVes5vVCBM4SKZ9kJSW9cZPS9ut5fFDgqVAwUbe9VgSioyWQkJPg",
  "key17": "58M7UkYhYhauyfVMtVuaW1dnLfywQwXp1qTvyn5h2qXTj4DKvQy8opWaffwNmZi4krP2GM3HBkd2BvJSdE8MHDaM",
  "key18": "3khdGT6Pj6dKeXfHB1h1K5zGWT489nmDCTSZpD5rPEU5Bu8s2terz1xzdiwSy2Lsswfxhb5NT9ZoGNF6XbM6uJsW",
  "key19": "4CCnpHDD5BnzJLFTQ9BNUqtveztJAws8kBD9ciKqRcDA3brKV66EVxHkZs97JLs4T2fMq9eyeDD7ZcMs8DuQa7sg",
  "key20": "7J3dn33jrDkjsDRWBZ4EmZnt1w3Fh9qq9SRvvagovTWCjKEcSSJijKFKP3QqvQVr9C6ijc9MUBK3Q3oquXcVhcJ",
  "key21": "3G4USisBNNxQ4o1waT9iDTRhZichnMSiYQUYsxbj4A53Mbt6zviimjCeGHBRLrNZ81EEvXaEc9ewreC5FGdZSNC4",
  "key22": "5qU9jZC1Q5PaHg8weUbaw4v8JHnHVLeSjo8RAQANpg5cPa8PojEMRdm8XFshjZZev1yMh8qKXEzcE2GmGeSpDHyZ",
  "key23": "4UP65r6C873YqWKrnEE9Wi6ob5k1NJD92N2WKv74rDDtbUxjwFdHKRdSpN9wJGx8uVN9D7ev699VzjQZxVTC14wh",
  "key24": "4MHheja5Wz8pTdFSiT4b2QHvdGGdUCRexCauTJKsXwqZCWzbUbLkv58bczxHCkwxuLFsBst63hjKGs5HgUoWdy9X",
  "key25": "2cufVNKGtMQsvdJXtNy8kqrCnLktFcE8FkPNPFb2hnXDQzGtKDGwx2fSswTY98B4dULWFkJUZBdusi4b52Vcfa7R",
  "key26": "3F7noasKcy1QG7CaHP2sxKKSM2oaxdw3Lqwv9PQYC33vLnMhsdyEBMAkvxuGgVYbm5LgpTUPEoWLZDMtiRcFS4ga",
  "key27": "246HcgC28pyrh8P9gRXGwMz1auVwNRigtGiFM8So11eWVT2QeJoUjSRME4uykethY5VuoZcjRLoEN4YcMYgnN3d1"
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
