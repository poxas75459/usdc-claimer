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
    "49XDXN7Jh5Mo33zT1XrQapFois4n3BoVGZJ3XCjbucsZTyjQW6ZNdtdHmvTmhAWkbeRp2bAsqNf6fkgvNy5Z8pYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwpXCy7FyBnfVGmWZCRz7ghYrrRefNdCkj1NbfGq23LkGxQVZohqeafo7Uh2kCyTjUW1SpzesASgPsfo2rAPjpu",
  "key1": "2FLAzU6nXbCzJa8ifusUiawUaN3ZexWRF27V6QEsCqxANdx8TyrbEFKN6axU2CKHXi3kDPtZmG6fKM3rtmYbRWGj",
  "key2": "4BVtz1BNLhQumBzayJJgpcAAJCrpDTJnHpShgKm9FepR8Qen2jkSnWZpLrSiZX7fPwLxJBYWuRMGK7Q4F2qcsuh2",
  "key3": "3itQBKjve1Ai3YhxbkJGMozGNG8b1Uszb29HguNAKBo6rXUWgJXsFiRujVVBwom7DKHpefNQpC3a7azSbonagx3f",
  "key4": "4EtJg1cv3d2BsXfPvn5QmRn8hwnx9tdWBJvivNX83eGSGiDuenM6CJrDoqDZnySNvNv1E3M4t8PX86kRhtXcjmxt",
  "key5": "hGMEbCaFvQ6kVvnWVHxQaMGfvxUMykvEAzjo6q22YeY4AYBZpgZofbuZY1Js25HV3tb7XwQfkTn2vJynygZgSyM",
  "key6": "4FeEV4DzidqpHbqYovUPoYRd9tfmdN4pKsXn2tpTcgz8YjFe2e9vPLDrTDHTCNncXdCW3vxqbAjcrvrXcB3Ec2xU",
  "key7": "35V3jo4ZVnSAHLNbTf4KYzowmCcP4qcJVAyPrFdbR15CKU7XcTcoe7uszqnwV7r2Y6L5i5R3nsQ1H5v5pqbACMWc",
  "key8": "UGntVzfJeoYk386NwJhZbnj55J9xNUFvwTfzua7KWMBrBWFf6EmtRqJm6f18DyQkrV85vCSZ972DAo7mMDEJAs9",
  "key9": "37BF7P6QzXeuSrgxLgEeF7HFfdskQL5Qb8N1kyPDRypPMojhjabG1jieiLFiGMPadb3Edd24NUazJvGuRWSUvKXJ",
  "key10": "2eJsU4RJ1kNZKJh3v7codrJk52pmh6378NmmZVM1FqGBpV4iCZGd6yfKKy6AAtLY6EqvS7qeDuVZNNuF5c1QLkmP",
  "key11": "23E12CgjftKZiViKDgpENZ6oQLrxdDzk9QsUCHzKtdutbxXdNGrGBnFB4axkqCqpVNNEU7wBBjS32Dah9xemwb1u",
  "key12": "4MF4Wfxr5GjiBYcWkUzmTEfHtDexBHHXG7Xk5os8M3uRuZKWnyPMQCF2wsaWsubPn7VTUGomsk6gd3XSyoafX274",
  "key13": "4UvALvsvZ7HVDNwZCyZ2Fu4bQkH85GXSyVLRicNBqty2jofi8eeJKKv7ErNLhuTtBmdPDeMS8jyzT5DMWCfxm7vP",
  "key14": "3WKCo9LjJm4p9KQo821nWSmQhrakxGeukYRg3Zqobe5Q8UyvpncBNr1PjovdrwzJG62vdawXjSQPcRMPpMm7UgTb",
  "key15": "2HEp4esoYkMn7p6Y3bfY24AQnQpHp6UiRjSCgpUtieHpVVXzcZLgtpV8dXvMnFGbZtGvcCUQjYSVG8LFRzMBdqg6",
  "key16": "DFPnLyBRqWs9Wi7EUTpXwJJAXvg32F6ipVd2vzKWieaTxWs8nXXXADYynVdSEoeMbF7d4kEgTCtEp7MPNWhwSAp",
  "key17": "2AfvCfkSiH3McbZaejSL35aQTp6uaeN7LxcqsWKLXphqbzKGG5Z49jt5gDWJyYHiPWBSCL4HkwzCj3TQnGbMMZ6b",
  "key18": "5aD1ZuBnWPjJybiRgAynT2mWE7qCeJTqaGTtTxUDGhpYQZ3NarL1KmGtYCixv264pzfvRLPqo2s99zxzuiUTAgUd",
  "key19": "5C4hMwPMi8c2qEd3XBMDZSABwX4aoTDHWhtFHWQMUB11xKFh81RhGsUoXVirDWXHWvT74Po1v3LtkDg5dVeLGiyw",
  "key20": "5VGouVe39nhbhNRLSEnkRqci868FV61GcBKB1wk22Q2LWc86Nr7rjuAfNcbrXZefT1LC3f9GiCdJQ23GQEc21qgA",
  "key21": "3S7HXoWP9UTSSGxy6Ta71HUZq73beYuQeNwibSQ866bpSFEmJZ9QYvXytrQTP5VLHGtYjQpVHtpu6fPUQ4vbgSW3",
  "key22": "yxdcVZWhY4LenPkd7Wy4sYWnpg2iGg5Wmu82tejBkjP7pfPk5suYJEvqtfAE6fL1LJSLVVpfjUid7nudqKJwjXh",
  "key23": "5jYKBz8xk7FMoRDbeXmjheVyNaqiEU5sSbcbHqyrtJ94vwMC74hbbwLMZVG6Z1BEBqXeJQvk5YWSs9pKexdcJWvK",
  "key24": "5Rb2DmBBKTHdP1tDdJDgAJJt9Bvm2LYY4Ynh6AF6RZAWeGjDmw2HiSsdzJefQGDj5eVpGfnmqyTyyfSjNthCqwJK",
  "key25": "4NxmUEmNhz6ERXqJTJhJF3CsvWdmULhFnr6pYS45kgSXFEWjsM4gwCmqwMzrBmaGHfwsy6hqvCjSYmu8qnyGK71g",
  "key26": "53z5zAN1fj6Bn1RNwZhwcDCCPBg4KXj65KEuqdARpoyLoYBEF3TzHCUQV15xSVHtWSLjUWkfWpwCkLoHyGDdNCyZ",
  "key27": "2DzCxqxPbAeqAnnMiFRnPt797YfbFep4a9p5JjiGQBQB1ZoJQHA4y4cYaknVxauFuEqNjatrT4HGjqcVJwh1knbj",
  "key28": "2u8hbtvNAg9gHKdi3upiMgobjerqNeEmWLqaExpwstTZi3kNckwtU8ebvf5Y95zTXWawjKgXx5x48focFenDAPKo",
  "key29": "2rpMvZd2qSwUvKMaLcRXJViA2HvL3jBhiPu15j8rN92q9kvVyN1wcs9KPf2YLo5S7aFtxeYEeTyFuoQz2QqmFWop",
  "key30": "2Bn8YCCXwZpYactr8pvgPLqDpWLLUtj66u7ns8ZVjkmjZiPxJYPGP5HeY8eThmnj2x6o98E43stTBjdpWc3HdUYV",
  "key31": "2okVJ44GUKJwx9mW6gBrfFzho4XCbVFcCAiu4dMCtyJaeabFSRLqzHed34Gm3nd1LME4ZTSn9yUjQ6ZoZJUQS72x",
  "key32": "4CMyAs3uWe4NQ4rKRhBxVCWU3qxgsNksRonUvx8uGUjaADDW68cq6doshjdtbFjtsfLe21dWFNwFJP5u5wJT45tq",
  "key33": "z35tRTpsZjGsdpcCV9sCT1GP9Vkw6dyh12wi3hcengruNoSqVTUe8XuXESMgzdHbK7yonUnSTS65mBjFn4Pk5JJ",
  "key34": "3QBhoPMAhGDjQwc5raASZxqNzKsnbGLANRxunSXookqixv6FvaujG7MzeWRUMXikzwFJnxzsCBRsB5hBXHcwQUMz",
  "key35": "KqFBWS1gGjXUx7TyKyMAdHEb1WDzptf4KomcRXf2sYBLjFB54QE4oCdhSaUX4xHbW8BUg7xp2AHjaqeorEaxGkE",
  "key36": "4uJ1DnF7hbGCTF7EkdnNrYmi1d5dWXPaV74g8d7iypdvH9DNBZX8DWBUWwGbe9DrLJDgiibyJDWENRCkU5uhgxrk",
  "key37": "43u8xEJg8ppDPow6xWQhVZpZEjPpuRmvb81og9DBqaLcJo8XTv2eoiWZtk38biC7KDYhv3p14hZRkf5Pw6ubobzD"
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
