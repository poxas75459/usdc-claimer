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
    "7u8tpG1L1GVbaKk4fmg5WWs817W4STDQTRzL3e8rBdVv9sqpbT4dYc4fJaWizLDQ3Vk4GVahbwsgWthWACqa18U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jp5gajkmiS7Ymu9hntiuaGpMmtWAMpDEzwi7f1etw3y8reoEmyWExMsfDmUbTZnUB8x1tmKUh3gy1Xx2jKTvR9m",
  "key1": "32jQvSNEW5EuCUSBXPc5uMbRpao6iJhMsr2zM7whpGoiH4nPWBUnAu4wNtVEBgaRBowsQzDG9a8R1gZMtAeLhTWe",
  "key2": "JJ1dYMFyeEd7ktkgZTbYCzhcUsymEsMvujDvULXJv1XaMvhVWiihGUUEGviff4WhwsDjbV248UQuXKkAE7CGUsA",
  "key3": "5Q6GiXgy18UMCKrrnqzD7VNcbR6Nu26nkWwSkPDTSa1J1wxNvuWCK5eAWdXKxQBWYKR9hZbiHsQbuVUQpyPD6vA5",
  "key4": "3nc5tHoizM5aaBU2aP5MGWdvncTYGFn3EzgsytjU9MF3YP46fZoUEkpL5ZvUixNfMZn4dNuEokBkNAXL9veHcz5C",
  "key5": "58269j47Si3maX4LeweqqWpFiTBmcKqnurcV88ZGpojHB3NP6QnTQPbrv9hpsBeuKDejQFm4iGYrb3ci83UUuvTA",
  "key6": "3QsHD2397R9LaZ28q6U2Nqv1nLXVmgxvR9xhh75vRtP6eoquByeYAewTTNbJkE5ABe5J8mwBquPE47sMEXgLpbvf",
  "key7": "3Lozf64kFMSPAJUjVyDg4QbYisniqwC5qPNfLqrDtems6RK5GzjFXXZtqwngZfr4fpvMueRtN21htW2vfENGEMg4",
  "key8": "2M8vAajWg1xMsok8BmRN71fE9fqAZKCKykYd8AuWydEFu7RyZ74AYdbxpcKvPdVDnuQDr5MdJbJL7TB73ChHWTGX",
  "key9": "4wHTfrzBuzUCM2ggVwoiowkmE7skbb2376vtpjJFuR4Hw2YP9vgLV3gbsYt9x3o2q842UooeUnG8Y8i75gBjNLSP",
  "key10": "3ncRqzGdG6khvADdysL6u4xBD1ehjZc86r5Qd99vVeqDwDgUaSPb9oDy6nW2nxTDrrR7ooK2wiNuqZoKDAQPpeiZ",
  "key11": "5yPMgX7uHdHgzDWSeTGiTQSGPGznDkGcfEK4sF2JDbBQiFvyK6uwKcfwXFzFGwBZbynfzDJsbpXJRBY7wrZe5uCq",
  "key12": "2W7nSjXcXgLojwksCpuxBBGyGT738zrDoTMkW5DfvfS5Q2NQdbgEGQtQMFdCMWDaBkvcxUL5AtL8t3toeB4pvRB3",
  "key13": "5CmZibzFUt9zkS9oqabLmy92sGQweNRJBREvvST81b6cWCs2FfQN7sNAy3ptNCbVkhEYWaRXvx1XNULRCT5ZA2dt",
  "key14": "5u2cdyXy3cCa72gMen2dWVrQbcL8NGLJbVP615D8zKVNb73WGc1mXNwvMpA8V1RuAHcbTDoNiRvviT1c3erB4vZB",
  "key15": "36Tz8och9RLrVJhDShKzYfBrF3KCLZFj1J61k5KBtJsezAE1Rhqnp4AeTsDfK25JnLkb3KWuuhDWdBJWRcDSbK2A",
  "key16": "2cTXARpxXfi1hwQ86sRipvGaFFCYfuYErEKyfSHrwzWGm7qNekvqJYqBM9FCkjZj9VAiQWpnmhPAy7AsjEKSsxqZ",
  "key17": "2jfQ9Du6HALrzzXu8c73sbfeicPWJUQPrLevUd2Mx8KfUavEpHogyP5SzwyiR1VuzDsNQx2VA76kQb5ETRREKNZh",
  "key18": "4SYjoqM2uL9Db2cNQHBGDdLwkj1WmiByt18GDJvS9d2fwkfYry3eboWiAT2s1WNSHpX23PYwQmtZsNsNSDE6ZQkp",
  "key19": "3G9vzWEnLjThoQJTiz2cM9kUiQ72q7L3GYSpvp2qvXbf2u9a8QtbXLxXJp6e9dPK39hxVPG1D7YujACvMpoq6ePw",
  "key20": "67jLxpkUSxhuubrSANiNAhnprFS2qE3QKPpeVTogcNxnrLAUcteaYAXrcKNjg2ZosTSpyM7K4pmssdMJzsSqfEkg",
  "key21": "3sqwuWHTWCdykx2FxSp1aMFLPCq3CDVGUuaEfBw89cowYjAzUbazUXbd6EYoMqWu8bARUZAGWLSjF4fyqDDUmqTE",
  "key22": "5cmj6ss2NiBMQf67gLtnfPH3N364MzGJrB2GQrWya4vsQnorXgbmgEgiy2uZRY3eTZ1kBgspXLYW3SLCj4sUM8AQ",
  "key23": "KFcN7FEj28DkaohwzD3gyUtaCPuWZqZEdzEnDL5sqKGtp6uH2Zh5yJdgExqhFAkeLhHUZ5aTjNVmj7BNKmuLMSV",
  "key24": "4v1xHNmUJzfFBFawqK5AzCuAXbtHXVrLcZrcANPZqumRsWjTK1TTrbDkUKvJwBcuwqkx2C15wPcQDiUbqkEN7L72",
  "key25": "4iAxaPkEUpeJuweBab2ojbSkeXNxg5gaP7jN8GrUVpcHuGV1NzfNKVrQbVpbvJrNYpiooaHm6Rq52myyzKtppKi8",
  "key26": "2e2t8deNhtZiBhdBpM86gYavZ6UgaCTAuNhCxYYR1zx6ZkVUnhumrA2KDbEpffLamjtnQwjrB6fFsSwM3bh3m9fH",
  "key27": "5y8ajv6qEfY9SwrnzBLASxyvQ42FC2nLCHj6BJvCyVfqtxBwT8xESKvjWaZUTQpAKaMKXkYFCD8CPgesnQo3E5sX",
  "key28": "4C9ZwsKStzufXLpwJwHQGa2C17nsvfMc5T6PhJd8LhNyscSaefMASZRbc1yLfb2YzD3DT6yd7Bsua6Uw69VkS9a",
  "key29": "3eHVk9gxrfP2feyuhuNFjyjVBB4KGDnMEEALFbgypECnqerzvnwJ1vStW2LQSSEkGe8qM8tzreoEAP6Qx8kdjMvc",
  "key30": "46485HTnSztyzdDJcgEH3qgYq745A2H9M5TgXJriTt3YdvCt6RFbuXgaWPPUSPtJuxtJgDiCN2Xn5Ls4Nk972Deq",
  "key31": "39sWcbhnYocuKEdSuHJEcWCtYTH43dZZKbjzmbdDoY748CbDqA5bPLi6QUQJ9BNNzQTgtPYbbgJmEHjszBPd8A85",
  "key32": "465Q2i43pcPzzYhHPqHh5MCT23ML69tDAUhqjoFiCRhD12HU6wgNULmMm3D9SuAS8jQnuijhpG5Z8M2LbJYJFgRB",
  "key33": "53k9QFrc2sziPFj7H1xqA5ADaEhyW3ZzMyDaM15894FvCq1wmh5GWwEAJ9QYUP6tW2yc8woVs2z7XwdYWcM6jDcP",
  "key34": "5X6AKB1SVGFshEDdZzgbrCJfXM2bogrSfn4Lv1NxFgJAxztptvPygjARhGqimaM1EbTY76SQHhwhdBjEwrvtMrXW",
  "key35": "93Bdb5agHW9Yti8P8P9AFCyoPifPaBx5CaiXkwZ6NL6sCFbzPi2sfZ1aGx9u3XnjW5KgNexTtziyv1j6bAY5Fn9",
  "key36": "34CcRNKkgomxungoWuNdjueHdjp6QSJAjN7Dyd3vMp91QGkWVBA96xmBmJjT5cSK1Dgx3tdWV3DMUthhAYpKA3tT",
  "key37": "3fZhFJTvsJdYN8NtWF3XzwvFhXUn2zAAAuFfYq3Ej5WNxGz2FTCfJcEzAJfNCm8RpiPS9NyESKT2PHamnCh1CxVW",
  "key38": "31dTuEQ5UahtoXAbcUZQeWBt4tUZJHxrevG3nLT62mtde4sj2LwER1TFi95YAo5V6EpZRymnrjVbunMfYVzmLAjW",
  "key39": "5PVfXZgnKu94UEvCJZ9u9f8y1BRyhkkf4FLodE1e5qus9dQug3jj8vADuNtyTQGrATXj7FR43ia52RW44eLnHq1P",
  "key40": "3d6Ja37B8t45HuY8Lh7s7ouyV5asXa1PwPgd5AouKMR1PTsHhxfmZqSVLucAWzcCd2r1Gmc9Td4bi4uLYh9cGmve",
  "key41": "4P3wW9QZZaYBL8ifHYw7NwL2gWJKtAr9Hy9g1adSa24gr4Q6PuZWc7W2jPsVijpZrgngEJtun4R4QV1oYD4NYqAg",
  "key42": "3wZJJVL8qDFbr8BzJf8r2aEhvVpjtt6No3KD8H74FmFWzdcMgT3jjqpEv2wYL545uFbirshEZMuNGePLR7kH77EJ",
  "key43": "4nE3TxVHKAGmfVqWjN7uNmR4e6GzhUA65rGi8uJeKyk2BJ8PAxDnegXwfKiMQgcmNnRC49SdsL7DgMcFUCBPLkLx",
  "key44": "3ZokLAEfRquXAq5htjMkTQPncUs79tvidh4QE99odGqQEAk2FEjvwLMJenZrDKALfoe7n15zbPakhF5T5jtuRrAH",
  "key45": "3FSZLRtuDTZbe5ai625fABCwWXCYe1pQ5Pe4rDp6SUgWzTG7vMSLeQodDDUEdGT5ginrNYNQHKXLfdegL6bxeiWR",
  "key46": "GnZUuavtdSwNKNM1SUdqQoX2WftCbS24DyciWNbi1hDaz5LSXsiep5LRxSFqGUbGQPLWA9Bysb2qinn4usixJWM",
  "key47": "4z2NSucao1uP1tVruSaysFDhaCHJ6rVzewTJFwtvQ1P6TT8FeENSzxZsUK4sQQLbCGqy9XqzS5TJp9u6kyHKWR7G",
  "key48": "33CCuwhLDzAZYa5mLN78HTNtmEDuACLfN9GZQLBch2hUcEMT4kcDQZrb2ACx9fRMCGANUzrFcYJ9abNRVSYsU9tz"
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
