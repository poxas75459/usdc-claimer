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
    "4KUr9CRgsPczb7RG4hYM9VhttoKiaiDyGw9zDvjDMmhgLivc4TLffdpbQmY4TukzeJTiKvN98VWuyrWQo1ZJnwrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZzhfUUDRvDYVXNcotCEg7L2zArgWkSYRw9RBhhTkhtgzgF3XmRnTQYDeJuMEDJnELEG6nA5UHZwu4cFbaVwNuw",
  "key1": "2YqPX7JmrJgxYczHM7GpfhbubWWXJed48gvFE1PcShRo1aUGBSEAAtpXPfnw7xNUgVSAhpfTqXgYeaMTz7m8aCZo",
  "key2": "2Ywc688cRqQNh69xv5Dsp9Vq9hHbaApVHhehpUmpzBqh4ZWKLKZi4JeytQERwiX2yfC1cj6Rnzs8FzDuKeQcwY21",
  "key3": "63CNV5MCmhyMh9Brk7qQPjKNmDmCLsKbA6UU7SjiNg2t7bpLigif2CN9zftLevL9YdBtZou3PwKdYc8RdGYahxwg",
  "key4": "3CKSMKxx4mLrNVAJWnMmx8YU431TimFPDDrcWoyZ1ra3Qg8BRkn7jcthRY8tehPPE2M3CQ2Kfqa2342UHekrZCMZ",
  "key5": "4JpUfx3Bp7dJPSdNKneBZE67PqZAF3fiT629Ff52CyBUT6HmCWrXuLgCv6YbDqj5NKdK2J7TCXjNL2aqZpjFqjwL",
  "key6": "tJY1CcfZ7KSyGJs1fc5betKGbwKDQ9WKByGvwHQudM58DXc2Pt8Ph8ZMKAL9aPrsMBDAYtvWBED9bEH3rt69nYs",
  "key7": "5Rauzqq1PoufaGKQXhaqg2A6YcAhZopJc8Vj8y8YFWTMmx2jFwy6Q96pSYtdQtMd1dMY7vUbpkPMgUE19xuCjxM2",
  "key8": "5Cc8k2wbGcpEN5mL8UTpTwQb3N5CoRa4vaxKxZSikUu2bmnor6Uc3kye9vZXP4AmyMUe7xk4omHndhNV1xsPgRnD",
  "key9": "3YwsuynEN5nR8kD6Qe7Pzrnuk2aQCX47dpx6Be6GXKJBgSC2NCbr1rKuCgghrhnDVM5v6v8W4bakVZcUDQPCPKZY",
  "key10": "2cjkdPMd6YsGrGuaBxS9MQwbm8X5ATszkUabHhvoDAMvMxWMKh4BsqJw4sJthRUj5XdYKvMR8SP7yQwU2di4Vcb2",
  "key11": "4Cnv8FUSrmZ7TnJicc5RCpwz6knwhP3w5XcHKmvjzwVTZc8LreD1cVUfGJTi47wEBuy8yo4u4FZov2kiTHT1YJPk",
  "key12": "5AzbbY8tHtZw5xXM2iQzmX1oHCxH8vrVSzxUVB48YJZJWiau6zKz5fzim2aw1Ps4GYUguyKpsahRy9UZrwkfXRLG",
  "key13": "51hKkveuWa9g76H6tEAukucV67tmQkvNLTScJWe47KzwaUXv24dLAkrrMxoVhfE94LeWMHA5Ze26RJS9GiAqjkah",
  "key14": "hokFDeh1twXyfmRT1J8QJQgKs6WW8YbpCKg1STzCXWahD34kjvaoT1f3SU5F8CmS7Foif3XKtxzjik61kfaWd61",
  "key15": "Dy2pUo7KAzvkGiTs7UC7tak4th9E5cnfscLMG5aUR6UbSxVzCqwLsDxd3C8x2UXFn9Gmw61uzv9M6DbcYn2Fwbv",
  "key16": "2SKGWpmZ4mGZrtybuYSoTQxqMq3QpdxdTyDzWMqs3faaveN6HzftMU88tKnNoSubBYznjoGaYsnEViZa6kc9iXzh",
  "key17": "2mtg65oRahTtv4DuB5Aye4e9yDgzrMa8eZCuVKtsS4eEwWL8mxRtXaTDMzwCQhQeah3LzM93RC8e5JLAjGJUgmGr",
  "key18": "4jGU4K221RbScx3i8MRSEAsR3CnENQUB2hhLn5SDRQ27mcEGJLtTQUQdMRXZkYYV5enEnkhtzF438Jwm9JnS61Wn",
  "key19": "3R9DK1ZtpHqY7G3qwGjsLi9jNSGqrr613XsKniCsGBk2sVeeDXMVpvuCDipH6TequPAThC5DCedZWFgYzok2qNUF",
  "key20": "3o2K4s6Dv6By11yfLmf3bTy8yUbLFwugCMfiiDwzL2XKhGckPYxjAxzurm762BVcXPMLwgTWLjNErZkYNJkKf1FX",
  "key21": "2ujzE5KqSrzH35RNxFeNg5CKN2pmAaWfNnpanbtG6KbUEDbFdrMSBM5yJx2UczXndKanc3HvMRDqZyQxovnrqGjS",
  "key22": "2MK2322SzgDTTbzE6HGc4cHaD4jp3v9HvA6kBtgwNHKGpwutckS8QtKtffJciKUnh8xtFqU5xUkdCVNXXc7Hv1T",
  "key23": "473P5Xzbk6DY3yWhsuz1f3b6GXmMaEtjsPdEiYWqoy42ARDJA9rzzE4XNWw9VkJ2VVCkt5tzwoRLg8JXftqmFH29",
  "key24": "4dAFM5Tox3SN74LpAw9BCR85uX4V3f8nRBo6cYHCkMx3Loy6vzbcbwRoM2XDbEFfYcLVbQSPvi7dLK1qYg3z7evv",
  "key25": "Yo2HuKVGKeUuA7aiiqQy2L7ec2PztVjiTM7RVPudfbFAZwpuvXENtfMCZZYqzvAf3ZqjMZp2GqwKo7HFRt3rWWD",
  "key26": "49PuVdkirJdZDmdswT1oyCFCvZqzHoFEAxCMWViqu7K3LQH3rLMPYay34D4FqBct4ehH2f7P3CLUYZoFk9XiDV8y",
  "key27": "SBnAiP7Gnxf7sjmdJV3btRp8XeJ8KUi4CuAEneNGetrMZPrjxA8gDGud5rcF3Bhb4adSBwBNSh3LyjFkoGxne69",
  "key28": "5MK5EvA7vrPP2ZZz1V76tWQTDWaoUEnxfxcsxnFAkULocBPtr2Vxn1kVb4u2mAg28yMKm6R3UTkpvYF2Ga23gEed",
  "key29": "4UmtvoRLWLVmoYRBqJ6SJYWzwcze3n4msEYcAJmdstrBdvSS47cNHaCDoxaaC8HSSYfGRDSW1pwEfLRn6hJP8S2w"
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
