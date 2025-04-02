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
    "27RgLWBPvxw51AXGsTKjQNzTZdeD7jQczeX5v2wrJ7agJHwSJCZBK2QjxqeEJmfGUmXHu9jwwC2evF5XrRg5DQwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGrdV2FXbhXZ5SUqvL1tZWcmhS5NpSaTLCx7rXx4HV3rQ5zuq5PvGm9YuEJ4p9Mui5GvXFQJrhAFmtJWJhYYbVb",
  "key1": "Xt23ATer1vKFMZaHJi9uPQjMwVqq3pB4LzDHcijbDJVsGpvFMm1RsibFpHPXFPFoVycn4B8ji3pXXpojJuWNFtC",
  "key2": "4C5nPQQFW9CjNpMYB5bctPo7L3xW6P2MCjUL4swtRYLoGkeeR9tY2G1aLADUDwgUxyFeYrRRTdjZGSSMFjLvHe4Z",
  "key3": "KXDcvkUUxQpAWzpno9VKMsBpAmcwrG3b5aXAFyKYakWnVRjjzmn8TdMSnohUut8gBBEftvS4jq8uZamEYB7hueY",
  "key4": "3WkeUG4Y87YgVW9wcmwo63ePVA5NwF7p94fNoeigA2Br3jH4LktGXepDwHC65aVwmeAky8GJvkUnzPHXB3eN7qdu",
  "key5": "453x31aDzUNvuU4jYSRBJZVsZv2WPnyWhnPRCHeaYf7W5K3SHAQDGVjGpRYohuyQxfVxdEaJPfQM4Cx6WhhwqZsL",
  "key6": "33yGdKS8S1dCUWF29hzV2qLGomKApFoeYjfXQHa2HpxXDew15tE8bvVDUcNyUotPKwiVeWwgsvh3Gx1z2w2dYDpd",
  "key7": "4eK8p83QBUKZgVbygqwXVC2qRZnFgWmABsn9o3e59jMm8XgAbiQ9R52bnfYYHYxsJViTT3wmDkK3zuHZM8L513Ar",
  "key8": "3bEdo4GL91rg1n5uyVtSvZWdTNm2MJkgD44b1YbtJ564VrwZYQ7CYgYmmQNuSZZfD6ehiyNKLtJjsPyWSGWT1r9T",
  "key9": "A7YJAXUZJLgQ4DUAVrNjiMqhoWTVvruvEQ1M7Zpk6HdoMVePWdNraYYcsKNdHKwzjhAEWCLvmGf9a5Jv8ceZiDH",
  "key10": "5dvwkWiGowdBU87iPuEPZ5TyN6G76AREvV31dgfUW1hKSbwdzVe6vCBr398GeNNsUn5j7VczALxRYEQQFAvCUtv3",
  "key11": "2bkxuJ3qegHSky8XTYRKNyQekpSk6Gqgdj6sKE85qt3FQouo17kJPsAFasnMBeLyjZP3snK3cwVytRyKacbQVwXA",
  "key12": "HytEK8bdwAMpLX61AM7eaySYFdCYH228v5jpp7YvTVHikX5bLhV2Pj6MoSDmcvyFwr74jLimuc9FTikvrA647cQ",
  "key13": "3gL3DpnTvJ7pMWvcsyCDcYfqFUdYzcsPuZh8D5GCpg6gC9pHaPEMiyq3X2GjDz7U3FPjc99LnfSbxSwozxEbnuui",
  "key14": "5M2HwA5LpswSq4foCLzbj2F47VTMPXNACgjuNn6JVkQcoHLx8YPRVNwqyzZ1TnLEoFiVQYwi3aD8R6EMVWFuLW9C",
  "key15": "Ek2NZh29DXcogyCkB62HNpzkxuf4QdxGcb5jZfvbZbbe1NfpkRVFhnPypbA6gtFjfTYdA1kVsC7c8x7Rz8JW1v9",
  "key16": "2F4tA61vSQDss1TBzh1BoSA3tp6iRWAK3w3zdoW7KMrg5NLCbMCTyk7urjcnfzHzPLMj449L7rAxaV1BZJ3B2oPW",
  "key17": "5vcNwVW1748THvtbFFCTuFShorcJFDjy7aNKDcJd6xKuYVygNzjFbvFy4BoJA2bwPMA44D9zCgUopVpxem25a4Sw",
  "key18": "44STJAWFZk5bYm8ZU9MCcsufoiYS3FUv6L3ifNps1jC2zr7iSdws7gjgXAJX4VYSSHguWKisxfNs9kPy1f3pWZ37",
  "key19": "4Csg2PBNgfhKMasUbg9t7A3rpD7BwfAQkM3xzSSkhmMUkXLB5uGKuMiB6qSkgk4ANotufEvy64iA3jpMFBX7pUio",
  "key20": "5rak57jpLmwHukyDAgj748XPC6fzixA9ZXV8PgZ5a4PjzXxwMRfrQTz6ZvozfJXsF4CKBK8UYUmndHAg3j9D9HNC",
  "key21": "WVv3U8Mc6ayBLnCkRVdvPsCKEcWVM6CJpc8rECgA7tg9396Vf23R7eQL7GprZq546y9M6FbybpEgFvop1k4LHvz",
  "key22": "2HshaHgtc5xyVgBCnLzPDetuHwBj4v1jxjoTRu3ErARbAAtmgha5GiNkzMxQigGm4c72Qevx27zBkrG6ar4gFiMu",
  "key23": "5RbKTGGB5vJKneSGqwPwMFCDBx9oUMdTQX575SFjsKeK6Xw6odvfg2K31BibcfKGWJhzPSe16U1f4aLGszcREuwf",
  "key24": "3iq3p5hXo5dLgeTK49MWrKxFT2VgCha5qS84yYeUdMUHe3WtvSE7hLkZK1Q4UzozmHmenJU4jQySZhQKAz6oob1Y",
  "key25": "5iwVppZGDXXay2rwD2bzaQTcF9CX1BS6yTBafXXsQs8FiCsTuS2oPktei3oYimJUCK8ZD1zuqnXiYXmey7eqbsaL",
  "key26": "4rXf2aB2ZJ72D1ENHkd73ZWk13qJMzJCCZHwPXX9E1Cowk5V2Xdxd8AQegdfqdWVFzXYy7otum4jJ2BGxm79MWLX",
  "key27": "4CtSTkBYMuP69ATZmg7A4JZFyfzXLanACc87D6aFcuJ4CRbnjTmoQtPuTZ2Zv5SZeL4QgGt7S68xb4jDg6dmtSKq",
  "key28": "5NDSYXHQQXuSUkr9Xcw3Fus2BGmoGwyHVeD5DM4KDj7ftBBdBPzHsa879v4eKw5zyyRoeju5omUMp5FgEF2Tue2r",
  "key29": "BVnZBihS9bSf9AymB5SJEJdkKNKroT5wyEggpsCmixtT3cq63doHfSepzvtByDuJS1TyfBcLauuNHLcbvDCUkr4",
  "key30": "5EeRP9jCD1HBtvNLtm8heJtYJ88h6zeYBHNAmrSrAV7AK6aTJjjE4WyEsLQCkQuW5gzCyb8A7TsC1VUZY6otDZaj",
  "key31": "4WyG5xcc2JYPcQN2tdqW2r6fXXXUdpvw35YQv571zpUMaxmzMKLpuFCWtxXmZfNxb5cbU7LA9YKYe9Ng5N7Dd1da",
  "key32": "Vzzs5HpHNpPsAmjqaG5Ukj7nixRMDFWounzPPSN2yntADn6UxrnZ6JgRcGgn1AqBiyzBoCxUJip59MMo4ZU5kBT",
  "key33": "5DBtAxvi5iYzdKnKqXHJp1iGdJE7Y6YVAgNjJgNjUkZpqwSwsMz4KKTT2wWSbnJpVZYBs58y9y7VkuRGdxSarmHU",
  "key34": "22gqRzPGjuTuZ2jF4etrJXtmo2QnXZ7cYvbF5PQX31ppEne3rz2iA1tqoFve6QsXFQNibw2BiyXic1UidYHk72cG",
  "key35": "m6v6ai3CYZhKkVAA7jGWRPoVCQa4B1pWFs15jMLPgrpgewQJRYTNSoX6ah2B4HuNjwQKg6kjmRKRpuH9e5NuAef",
  "key36": "44u3ULXtUY19j2KQzxKnUQnVNFcCXgNck3tnu6tvddNvKtdhWkZSemfkGfrxb5wPiTCJLAw25gMbXuvtbby7NNF8",
  "key37": "3hx7cG912QoMUhUiqvabEs8rZwyKpw3AeJ1JJjqS7RSeDMZEUwM2WbzPDeSMMJxeVTrdkQx5jGxq8HRP5Mv4s6dy",
  "key38": "5gUpaxq8cbdJyNoaWxF86iWXRy8HeehnUkjDN7TBjLRtUbLzM5SGX5y4MvQA9aBnXJ61Xu3p5x63VfJ8BYQ3Xvma",
  "key39": "2jHhZCYQLKKuYNHK9yZaRy3uaRmyWezpCM1QzSFYtqKHyAnLi1VitxvUNbZB9FrQWftdDjG4CqxanniRhJPDgVHy",
  "key40": "27yy84aaqMg7AZXLqkdx5gyTSPnnVsr7Szw4A136G9K8pkzbXzrEFUUnGZ8HrV2BNdeWYK5PiWT5yn3w8yV6eLkB",
  "key41": "2Yy7BNxb2KdGBaebzhJUVXfoWHDkEcjBaDBkePEnGC76F6sH6y4t7tvJE2m4HCXmdr7bSufxuXW716S7iQaapfK6",
  "key42": "4CiDShut2W4TW9SynZNNdH8StZHgMuKWDW5bwoLf6c1RSWVtQBUBrdwSBG5j6ESDWVHv8r26QcLdJBuuex9xB2rU",
  "key43": "3NhzFcjhS7drgepC46oyfABM835PT6K3pm6fbWUcsrtPz6opStHE4XV2rP34vA3ec8j4wG8b6LUTi1fyxFZ9KiP3",
  "key44": "eAvrprNctWbc2aswfpMPrtURiXsXSP5ixYn8A58kgULbHnT1v3m3FuBkKWe4ZUW9diTdPebDzGh47aR3nUW9NGa",
  "key45": "3Av5kEtzYRM623Le1obajooA1zCJLpr3JAjaKz4t7e5RJ1hDipzovzH7ujebCfdfJt1DyXR1sxVVEyq7V4AXMWcX",
  "key46": "5NvkYCGpHPrS7WNuzY5Fp2N4UKuwDXMp5C5A3AFiVyZHeRa5wFScstFADgsB2yTFusRaSN475YpweXEwpzrwrksX",
  "key47": "3vG2bKbg9AtQoZqd8ovThkJjzG5NSGg4dT5rVvqUFGLrABiSVjJKGCRYU6EayTTV7s12AUf63X7L1aP5cGMtRqmW"
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
