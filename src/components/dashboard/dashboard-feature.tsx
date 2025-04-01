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
    "3zSAREkuY97yxnq9XFpbNJ1MzCq9eUWpU1xzmrLQnAvj4MHhMwtuw7EeQ7WEoz5bjdBNeUHMy7yzSBzqH5vKPyBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFutn2kuYrPNoJQ62C4sVaefbjaWKNHaCS9w8871w4Tid3gyhwyBRZeCgzA6ns82i1Lux4FWwVovvVFcx9VYDZ6",
  "key1": "5ahgtMDUCxHu7NGqRfuWDBUJCWvUUrofPEFFP3ua1EHBN3k7bbLBgXcKKCVvmrrHzVQ28soBoMBufSmQARsU2eV8",
  "key2": "64WzmWSsJgejY1t7EJUwyP4bsSabL7n652KvgAphRa5kt6wXooQYqfmXUTTJieG1GyupCeBugGYGv8S9g5Mfp82w",
  "key3": "4RusqT594nPNTeNT2La4FsD377B5gZrGPK5EYPawivoEfWZYxaUvrm3K1YnwHQpz7Ex27vTU7YUxBLT739ejCHJf",
  "key4": "5bnsmF18hjpmahwWY5agSQ2pciFo7bfSAQJsoKr528M59trFo8kyUBhaYUrFJxSVthMNYfpazYk6PHfRxStPnNMe",
  "key5": "3mDKgahySXoadnPKP1AH8U3ytP5zadDo7YCVa7HgzQh43ggkthA65hpi1rd91Mue5iEUmVAVEZEgQnmvZ2aH57nZ",
  "key6": "3aCcfKYBqFQXpDVA6SRFPkZt8nfMEobEjjXVcQjEXkXRBKZdErDXBi3uAbRDAq2hGcx2Nuou594v3wg3LzkRjCjs",
  "key7": "2R8BP6iMddAah8RRcBg6rrUXRMDgogECDx17hbbLswSCoKhen41cZD8exy8Pg7KDfdvwhUVo1q7EgLXV1q7quBQY",
  "key8": "2fbkwyiB7mEz6RcxMht1STYqhrx3uGANNqmnypzh4b3ZFYM29WKG2sPhPmj5pCkcLMWadN4An81iQESb4bHpRUJi",
  "key9": "3CZrq2jELdfjaVpxpCCxupRvmP622Wm4qA97j3NyL8J9Kkt75ro3PmBEye33GyegGEpsy6rRubEr38B7qPcJ6gAw",
  "key10": "3vBTD5sLjkhYQraUoe6gxhg49MT7TjMQu523vzhjQc19who6VccakYEafN4hww3MUFYmeyuFyM3vouhn8vDrHJuC",
  "key11": "558VTTAutKLgvWAy9rQFLEjiFQGiCE7eqC4cfjkTCYPYmwTN2KMzr6fjbt8Nheqa5Za7UU2tZU2shaqZszzo8Dez",
  "key12": "2ES87cEJka5yg4C66P3wkErAGzmvAq7aMMHhboBBp88swJ4dY8DDWRv5tSMUyAJaLgGRNGW7tUwrxe3dMScYXqpQ",
  "key13": "xzSJx2kYriTYjY6MosTQfJMxhJAygytXdQjXZMPtYxQrYAgmEA7Mg5F8u1kLnuZnCGa5SoUfUw5nGkp77wqm2DQ",
  "key14": "5ao9PMQpN478PRftrQPc1KeW5DE7dho8wASH1SZgvVH92AC3LGe3gTf5vbiXUoRxw3zYDUXxhzgDvpkR7vUUKBC6",
  "key15": "2bbqui2NLz7TnB7L6hs451WTgNGdoMrrpHniGR9iX1CnD3HSwwk8DSEwCzdNcB15X7esRWknRFeGe4XPUWHPb8rB",
  "key16": "fwhmMC2QwMNtd64Jetmk7WZQkj8aPF36pEYPFuiSjfbPuTjfVEmids7wCZv2AFFGzhULQ3USbrcSHrTVTwp4QdF",
  "key17": "5K2tMz4uHC6CxeQV3sSLCN5ii6ZVDP8VwNnaNYgxXQdus4V9sAQiSpyxEU2v7kNKsmNMPHCmXv3P4XU6F4BVkv1e",
  "key18": "4Unhv9VRd13a4jgCgLcaGbrS2pPdFAnSG9HCzaLP1e6RfyDEzDFV2YRoFM7VsvpyCEXLqbWPNNbudfqrxFvjLre7",
  "key19": "35YapVUAPSE1LFuwJ2mNwNhLG6MH49seZMk38VHCmwMFrpDbfw28gUCkgauyjjJnfQfmcw5wg93LxKuNYcxP3Pud",
  "key20": "EtvhTvVr6jzmkNK9kBGQWi7xb2N8Jztg4zyXHpAeTreUrhzLqKwekKboJbwv9mQXJ4CVbvA9nZytFs5p6UenUhB",
  "key21": "2eXrjpNAPxGuk3mV1dZowZy9UvMFM2G4VhrGx9pwZhycmKpQfHcGwEd7tjiBo9KxQHtnh7NuobmgXfmg6knbMW6b",
  "key22": "2izQ7UAh7DbaJoZV4StYKa9wMQVQnpCS4YHxuqvZZigpHad6VMQAK6ziag2qXpHvGtmLDtsmuLCLvxzUzMWXZDKh",
  "key23": "3PvECYhiNRNhcCkcXk1RT8xH5GtjHAWG71sRep4rW8Qnz5e1n3ZVGBiFEEb9tXerSKREzszhij4kmsCTFAHsujiU",
  "key24": "4HkKFfBU9cvseEMSQ5i7PR66eQBJ1htjnDowMoimsehqX4mdsQkA9Ta4AZ9HhLeYpMwYU6BvHVjUNfhD3fezLcxB",
  "key25": "2jDHtWgZ5Zjgq2npZfYhsRH6Zn5ECFdQfjau3W9PPY8xdnvNra174zqJEqmtz3wvPa8x84URDTdyhrUnuBJNrDNQ",
  "key26": "5mnySBYB8aLVJGT5ia8iG6HtiTGY4kNsfmkp3VCBYYkzRJXjH5CjqqEEwpNKzzksZgmHkWzpgdvgMwNTLE4FwxsA",
  "key27": "gtyLqEH9bvMbjyMaPSBYXmYCvQ5v9pXb3179Zjgz34hTk8Uck97n3FJ9TPbbUE9JAXK3S4aeTt8M7frxwn9zdkt",
  "key28": "4oPvvS7rPqwcgSbdYvG7e8h5BuD23yZWQW29cxVr2pR3xY1RkopoVVDFRNPWfRHQuuh7HkhDAjd2JAYj7kEhwJn5",
  "key29": "6vFzDr4v9JHjvf3qvdMeoYEnEeKfQMZ3rJLzmDLziPhTjGFXh5j5A5UwAbLXZKz3cb1avUwUfCjqJajBUWVyrh6",
  "key30": "67TmAiaWyih7NL1D7i3g5gLd52jw4BAwSHgybgY6eCEfcYjuML3JGSS7g215x91uHhAHpDVeKiB6sJujqJ4CgFJD",
  "key31": "2Y6A9uBJkaTLWyfUfFBRewtu5Z2L2R36Xqv2tHF3sJK4nC8kxRrzabbUVNdnj16R2RHvAp8tJVpzECisuAqKELsa",
  "key32": "65UPeg73VrsNgZtgjLjmJMn4ZWp3PZYudvDsEsAHmMVrwyTyGVon1bWBppGLSaB9ADGvq4bxXvxMsZmZuYvqtLpx",
  "key33": "3rQQtFAP8rnJSTRkrHQgFTEY13X3YnLBmAHFMTa3eimKg4NhSmCCXzb7PNTVdZLfSVz95zKx6AEHhJjQ9x5zYPhs",
  "key34": "5JGCVa6y95kPa5s8qzmS22bQo4HHBgmqKQQ2cpzi6FNR4CCL8zJTnSAR4XUXB1pzjF3LDmPPe46eHAiEQ2L3L9YK",
  "key35": "2YZisQeC5S3bgCNmeKBQw4HTLBA4fpzBG1ey9BfcWKz6Uvuq8f9Tbn28rL751E9pr3Aw5B3x3BPRp9B79XwoteEC",
  "key36": "2v2SHksFtHGfjhjDHHA5kQxh7JXpZ3bbKp53mLx6wpYhMJScsTRAJe3UZaGj1rJTA1oQg8eNyyrnMfQoT9FaCkLe",
  "key37": "31P9j1derJWF5bmh7quxqZy3BxXPPciEJG7Aq2RacinMagJmhejnfMPqsYvCfGsHm6Abpi7GA3UKAEZ3hskTPxAP",
  "key38": "5RvXhzYWAXfxsMbnSb9XDZFtQUVR8ZJfWT4dDe2w4CHkcu4HdDvz4MCPcUJ94xDPDJLmnkgmi9P8kUkMY8DxxeFS",
  "key39": "2NFpPTzE85n9VGtBh4pKXunCrrEoA8B9w9jGq7qakS9Z8tnisjyLzFvMFPfjCRdFNyEp2nPJMBA8K27gmQD3Zwqg",
  "key40": "4Yowf74ZmRawnvrNKFw2KvQYVDgb6WaGk7VjuY2nqTZpK5V3zdNTrsx6PYiLxWG6Lxnc72Hc1gvmXSMRzxKZVsnr",
  "key41": "2HGRuGSU6zRCADhsi1ydQ6pCnbLmshKRcRaQ9ztrLkxTKMmPYQk4r4afiSFpXQ1kc5f6DN7oiEUKuXD7gpupqJDe",
  "key42": "2TTZmyuyhjUe53gYxgzNMa5G8krqqHxh2EmV4kCjfBH69WFt2q2dxkWcTmwyKkg93whFuNMsoY1dyNFrzHmYnhiz",
  "key43": "3z3Fv5JadpUNokzFv9VFVEjD3MmFrJoCDCzRRgAjiy8tffLHcfuKPn8a5Er6P8uzB6b9Z5Ldt3f17JnE1c47syip",
  "key44": "2pcNxM6Ej23ubuRJCbxb1CGPn2YPwfw1ReMzqksJf758Qu77veChrVRLhVPZs9UeGdkBXthVoNFtzBdwecJP43Py",
  "key45": "4vq89Pohy4LwnQQyCrGVKJULJtcF2zTUJsWrPyKbRdvn1YQzpz1F9cQPYLFkDQpAaqwjQxTURag2pkiEC1kR3Nn1",
  "key46": "3kTbtZ9CEPWrvZJPDYYqZauUZY77MZw8Pii4v57ARqHjNEfVe8DVjqk7QYjWDYNcUVcFX6zFhRWVEouXsubPDiuf",
  "key47": "27FvmLpcm1h6TWqB4wvNkaHNdY4pk3gVd5WXrYUwj7g3ofdrHu1W5LhVvcLHY8q3LVM7HFPm5AKDVxXrAKF5gUtt",
  "key48": "4wyVKXrYvqysRQqKyerzkXGjkwXYtjqZNCuw28YZjEj2q3c4z15m2RKdiRwcoRfimpEPJSC5sya2roNzZ1hGUEvE",
  "key49": "AhZkkfDh1iYkfrKZSspse9YwQ6cnBh8q8j4g8wARRgSN7GXcW7gDCEqbMsizAtCuDFSoTQQTWZoffaRbUPiywo9"
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
