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
    "5kXMM3BHSaNNuYtndWpbCxWTPiZWsPw3DLYt3iY7KjCauFUPvwHiX8uEF2u33CghCnz2s2T2JZB646h9NSfJ5wiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iotxJRk3WVLyjpwHs2zTtyKYotVVqcdKUca6G8bLeLsDhjUrYAYxYAFSwSUec3mKpjHGv1KVLMcWipCw4zBaCJG",
  "key1": "2uYNqS6RUX9dnQFBnmiyjk1x2gCbnCmgy4oL8MrQuExTcwJuyZQFCgGERf5FFMdVEBuV1rw8AzQViwNhatdPrUjd",
  "key2": "4aDvNz7GgpUeH7ibDUC17W3qg6j6C5vSBBNrd17SihLAsZ59Xq4oPoyWQWp5ZASPLZhGWG7zJa65zYbr23BAHgX8",
  "key3": "4eXcXogTykBF4eGXtfkJqvAgYc8nSTu9uuvnqNfsWmMzK4JpSfrXVeximoQtMU6j14bcDMsWQhhuo9XAZ5WJTVTf",
  "key4": "4AihqTCzb5ztquGiYiB1DqKaLSrpEivEwgc5NrYxyWJz28yZLgdbmqFPAjJwixLYiThqkwimrcpoWnqi3M1eqqp9",
  "key5": "tWuj93oucvXrSeAKeEwAYmFhJF1mT7EnUniZiXdEW2YKZbhV2ygxh7bfTta9fGTXLoAgGmCzETwJFa2A6LSxbCA",
  "key6": "55xasYVCmSBzS13AWkTSkytmcRQGrhvtgWmaLJpM5cQfjLCv4oTcgaAnwivTeM9yJQV9cfAZj14P1rp3nYLcUXWa",
  "key7": "2nCT1rkK4wJtH1gZVRBopQT16uCpXoSYuB1z53FWZmqMSMdYAQoAGUFviMZvXCCVAEJK7zbDDR4vhREZku1HVRY6",
  "key8": "5UBVFMAeq4c3uFTz6cy8vgodhRQLWZ8xrevcRqK2ttuiee8fpENDnvKk2TjJVGUYPdof5o1bDmAJbvgkSE5KqEnd",
  "key9": "5QW948ggjDBsGPZhgmBaek7Z5WP9Pk2TXxk6sTU4yWCpaAJFR3pbetZKoBhnqfRryYBbwqGFrCzYjZc3334Cf8rX",
  "key10": "5UL3bHGB1bsHHNXFFb9FnbwUHRvwq6P6F3BoMFkDRSeQ6K9VS1N6aN6Xss5zvzVAB9hEHmj4pXoDzpYcwJjMuKQE",
  "key11": "2ge5ijiUvFJ9JBgSbX6WHQYjC16hb881qbNy8E3j5xZc4Qo6c1n7bVdcbBTeJxBW7MeHuFGULPUiUhKGH5HZimCo",
  "key12": "47nHarugvy9PN61xrogEr2gvykwabGbQr7cV71AYmeJK4Y5nQNrpPwW4dNi5Cd9z5xM96Z3DCLZHAcEgxasRekiG",
  "key13": "3LmaXwurSyHL8waYvFQTZnx3bU1ByQSDFDjnZdQdoZJMCQ996qJm8UA7ou24k8zRNU1nNYdFcg9neGJzRZdjMoFb",
  "key14": "2gWYYkULdzFUrhFiFE1AJLfmi6ffMEDa3nDvJ3cGvcD2wnDUXxQqPCvPJDfTXLZTeowpoKoFc9ijDXhbeMXao8dX",
  "key15": "2SvCsNTVJXZzaaQhSKVRAkFGthiLqPrMfW8FrQykLiHaNxXSihuAU6hJ5YqvYtvZenjbpSxkezfiX6oH67FSTdkW",
  "key16": "3X3PpSDQh8b7iZfjxbGhyJ7FSNWroqZTJUC7rzie8fymAtFPc2zSNvDMLw7dtkMS1LunDzjbVNtyc1bHLJyLtyFQ",
  "key17": "34rwn7bX8F5DhFQcQGFPAgS5p3nwGeeQbzkf1nR2eHkKSCkdwmiqjjiLFjztgjtPN3aYaDzRWomarrmV5kwXDBBW",
  "key18": "Eg9DbtdfwNxijSrqAfnjeJc5WFayaNTtwMsXJeRifGChDSUtVKi9yenteTdfr2KWRvfQn78XQcF6NYoJy6Jgsxf",
  "key19": "3WdaUTNQQv4PNKgkugoeHNxjLjRCQUqti8VF838zYZqEcpNXrucXvWRC2eoK8wT94bh4ciUNMmjHGHAFmuv2azkH",
  "key20": "2aMqtF4RDTKa6hu1pcmAMSyHvSCv7aL8gkd4iktZNSnVHB5jVXzZ3GvBbKigYctGg5XGdsLekE7bNoCXh4JRfbEp",
  "key21": "28rdFfYkEUa9ExwAyjeb6UTWYr2Fof82cWdvtzr9UpABB1cXW1vroQABApsyvk5JiEKMj2fdn44KEdmdi9un3RWG",
  "key22": "uR4eMhZMgPQZE1xiJseXoU5W4pxjrNs8kmCg5M4atE3mYZbhpffAaYvFHVdAt3qP9CYtsnensomFBTjZktkntVY",
  "key23": "2R4iiFsNcE7nzGm9GQijaeX6BJmbUpVo9YuKaGusMvkc6T8rSUgGVkWYd46oCBsbTjwEc69JCfhi56pavNNXpUpa",
  "key24": "T7JH9GPXo3kvxeXaEC3rYoX5xdsYy3CtJy8A7ANBNcy6J96NUeWWTacHJfzc2kcK5wvwm55Fif14LbvfrUZkqpj",
  "key25": "2f2hHfzU8m9pLYjeYinbmwyYvbooaxGZ9WW7za1ZT1CxFjy8Q5GCN94CC7XACLHmmfquMpG9tX8hKmMd9MR5aeNV",
  "key26": "4Rpkt8dG2H1Unng5zPZayrQNM5nJfgpkkB2gGWBvDC62Y6QXfcPVXv4cEuy5Hu6czEB4ebvGTEGmccocPgSGLh5B",
  "key27": "4mdZ2JoLAJ3FmULszMGRipyKyeuE773sy3bUaWD2ooSZmCJ2aeRP1zXzXcyNQivVnjhqzpFt81RpgT5FrtDERh4X",
  "key28": "xzABGC7UCL5fWt8Le17jCNtZvq7U7rkE6TGrsid3W3nuJviLzNQxZkb2LHJkw73FiPr48dFVdJZDd9QKvWPjSbW",
  "key29": "zoKgGVN7x718tFpoE7GxJHzhn4H5KtcvBL5THXWwtyagCTbGYy2obRqVghconb9wan65rcoyWwLBX9zzsKpTDPr",
  "key30": "57qtHqpJB622Z9ELcstSYmftccMFbPJ8gijxU2AQdegcFh6ZajGMafyBSBPmP1dmEufCSrBYg3ZFGWJNuDjQ8Kqp",
  "key31": "pDExVPttcXKk7FBcJXEnMXg911BLYpRrv3DhjmqMVZha1VW75rVUD8xxWE2Kdt8vDbgPj6ymcJUqzqpFAeedy88"
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
