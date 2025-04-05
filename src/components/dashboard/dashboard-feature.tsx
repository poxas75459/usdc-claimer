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
    "3SLyr2NpRAFF62fdRzaypkqyRYyKS75DAzdbVjcefRu2Q1hgDCZctEMUoGWhWFobUn3VRnkbk1d6RgX4MAZcgHLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1Sf7F78MTxmkd8bcdmGacBLumh7ELmmWFZhbVKKCDrXDgmL2PsMkPSNePG2Dyb6D7tz548bCQvi6jVcbf41666",
  "key1": "2XzSv5ZikrUdduj3ZaNsqzQPifTDRZdyHBCzoX1kRY9LvX7mvEUHxaZNUKYcPHkYHB7sjA39uf1tiy2mVjRVi8wQ",
  "key2": "3zRDCKmce6ipLosEPCPYdiMKsqaoJvuKj43xqCEkpEPb6kmb1Dn7yUFFGXZvFSgub5rJDquUviDr5ZJ2b4B7FdRJ",
  "key3": "4CrefR7eKjN3TTdHqMVMdrQe4hYRiEDGQLiSzXu9pLDguSi8Ubpwi1tC8vpXmJ3LJoxtun3ntDp6cF28nqpwSv5V",
  "key4": "2MKSQpKvJrx11AeJe9yYUT3qPGyQS9wCYvSR3HdvGS1y3geV5VChoCBD72kdSDNekPzyPVAXqJi55rDRvaFoR6ki",
  "key5": "UZtWoRr4HvTGBTnz56QMnBGiyPpENfxALxsAcDZCBmW5kCoGUqeniqGPCW2YFXctVfDnrqtBnaL4LUx4M3mYn27",
  "key6": "5e9n9w17tvwHk3jVfNW7txwfAES9J47vpPuBCy2pYbBX7yAiTDvr5z6CBVDXj6XF15WU8axHqZWkDHp51P1NfQ9q",
  "key7": "TCkGTE79S7pG3599zPE5hdQhr6ABm2hxbVMBS5Rz3AhReDdRtv5ZnWt32ThGSjPEX2bCLrGaS6HD86UyRKhFoiM",
  "key8": "2bk17h7QtcAQTKG96uKqMM7rbbxZsN6xiy2uHrtj81v7SPXo3aLa5bjdPM5uQhKbMcxhckmHAt1MCrbVncnzHkWi",
  "key9": "4RuG9AZWWZRwcWcd4LCZYaMYKGkv7ztyiFShgctxbxZWprJWf1fDs5fdNBf62sE2npxLan3BK5h45rCBzKuLYXgN",
  "key10": "53YZxzF5L8jowvsGmNvJYLJrf2zbGLCcEiXGjhA16PMW55HDDbjLeEK2VMTuqS8smHMt3bU1u2Lmf2kL6AbihjzT",
  "key11": "2HFVoXNBDSGhsxf8gDEP827KHC689LtFxg1Zme6zvxB66fp6PXS4fJX8h4aWR8Dv7EZMSjJ54P3LU7gtxg8tkrT7",
  "key12": "2i3HoWsuUL4dQPWgpmVQ5shpH6mgcEqz2t8hecUetmyBN4HBkKaZNAXPtLd4A8LyCa1HjH5YwmA6tKPDEfnt6nDN",
  "key13": "2nGgzHeL2dsL3uZ5wnks4CHuJCEhJfzCgF9RAegpDD5em7ENGHQgH9Afo95GRvwR41pozo1TzvR5cZako5vpZzha",
  "key14": "4di1yMAaEHcXRH19bVmauoJbEDxc8cG5XoWzwUahEYWu2RMKSgQ9PWJNRazyjFdXgzjnAFA5ozK4zGfVzwkWrZUe",
  "key15": "5yzotvFBPJESFZbjWewhwMJY1FitvssVyrJvT2W8yxZYJve3SpEwKsubo4UR6r6rxhDjU3Nx7Fej2bmb32RwVsv4",
  "key16": "5hwPLk9zbzLLYVRBa2BYdBMEVkMLP8hssYbujiwBVZKkeJVz1Jp8xVG4o3ExtSqWZXDpb92WxZxL1aZBQPG74EmS",
  "key17": "J9ZiGER6TBaowDno3W6KNo1xwkY6ZMdteYSAbcmqULJuq6LLmUHBFTfds4BGZEY8zyNSYvUUrVeHKyJtsDpmaf8",
  "key18": "4c6cs57FmNdevuEqYFk7cGcuob5NXtGwY64CVNNWQYjP7ngciPpqNPJL6ssLPQw1YcdN76FJu7yoqRcBa3tmaGjD",
  "key19": "3rpFRE12GKNBS99pjFJvtDGCCbCCbfFqqjxRQd92FRLYasAEzgSukikJ9EnHzn82oTEy4puCZeG6cz9mrLZYcF3W",
  "key20": "4QtnVicoeE7uLauiREYGzPxP6irfZ9ujbmEmEHyHSm8WsNPJ763ZVgMWj4yxG8cojnz3KhVVpbXfh5b7Y9gxuSdH",
  "key21": "3CMBLKZAGArgg2kr8qj2aaj78q73rSPfGXUMvkYTBpAFmujSahBZMo1Pqzz2G8aogZ4eyx6rYG8xAQpsbzGUMSKD",
  "key22": "2dxXbHAo7WLPecD7mgos9hhZKsvBYSLZPA8e9M3Lx2oLwpGAKzWTuYgK4CbwdwgUFZLYM6nQxU7ZDKNf22uCdc5k",
  "key23": "KkfEB5QGGTMe4fseLimySVMhJM1ZRGdAuZePSusEYMpu1TbXvPVLsXqBqxVQGfYs4gVkepnc5xsH1yTZe9YBxAJ",
  "key24": "piwShbqgHeSj1qqbQA4VwXd6XKZ2vcbtsg9G6iwhx75wgszy1nCRN7whjRweo4aTNAdWzMfzpN7nSQBc5zoGhgq",
  "key25": "2kKyWKwtifZiGkQjm9wTi79J71DR9PRzRyyN4sdw1uLYeUgxRwjJXdti4Dh3TfHwF2csnuoeHnzJffU5zdU94Xpm",
  "key26": "14nifajb2qD58BhpLE5BEsEHjgEyaE1sYM7WLMgrq9W8MNKSNjjrGzzn3z899RV4F2kWEix6Xagmcnk11cX8hb1",
  "key27": "3AqsNwA8ssC9anbXUz6K4xipBP5eTwSzW4LQ3W73wZBoQAG6zZ3eet1G6YNyBYqGCyoZodSqpAfXg1oVXLRr78oX",
  "key28": "62aqW519jkgT4FRC3eLnY6NbekH1N4fnZpkbik6k6wCj28edKgv1dZagc7oLQKoy7vScnap6cDho98sJdYAaR99D",
  "key29": "66LW87NqwwBwKUbSPAJFwxYoQXqJc1aUugaZH4xL8NxeztzZrhcSEP4cE4tNGXmsHqyk3v2pYhKMHnmBLVghvgmP",
  "key30": "5Y3N846UZ59r6AtWEUtPyDp2YQ6XstzPCggKbfmo3r2v9mNW3DgdXJ3reKSPGp78GyUmsbXJD57DSnXvXyaXRQ3N"
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
