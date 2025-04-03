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
    "24spqsRJWsYxtm7FC1bae2nLbT82WC9MUQ5QZ2AWqzBu3RKUGFiTiLXrzNWbPB17iBuoday6i9cpAc49iA7vPH1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHS3ngmfZoQSzXGfAtCfsjoN9KLpN7QivpGhr591FtBN26wqsbAanbEaQGTpzTNvgGAsmmzNAXoP33y2Vp52FGu",
  "key1": "3jZgLQipeXsu4zKehgfE7uKVM6Y4DxmNDaujXFHuy5nzQBP3tGZCSZ57eThJ2sCHYzBb1HoMdGem6XcEauda8ZxU",
  "key2": "hvqcfQnpG9ukwgTYZcDC8Q1uGzGZJcrveJrUL3AEwgxUcDSYKusUxg7BcDxYkRhmMVWmnzDhqm972xxs46GNdxi",
  "key3": "293KFMQ4UWRuaqdCGXHBhiBN75h7f3TDErdHRRGwjxEvGMRAxqHHsyK8fqCFJDxVeZ3hJwBJRFNVQ4NDeAi6RfNS",
  "key4": "65Xbtm21ZcgamWHwYaZB8qLTphDtQ3q8WNwo82TzymcoDj2KAVuXSi7RrUzRduFiELwRUccW98cCg2nXewHFimoA",
  "key5": "2XN9nx25LEckJ8VjMfYLys98rBiePzQqw8D4mzTViF7QpknroniYj9m8ikAYYuu5RsxEvSPsNAySq33p1MMFm5gG",
  "key6": "wysRnAqJce1A4PHNB3nGdcwFoMyHoFfpTGC56CuJD3wWcmjPZCCniQyKjL5pERwsZHc9zbBnM6vt1ub3akqk9sA",
  "key7": "551A8BnLBWsBG5wCK5byXCjqtNKpcn6e6odzAaeono69SoKcxVwSdc6LEDL7drDM8mBY38NDky3ELWckrGFQxxAn",
  "key8": "5ChLtUBLNHSBZewHU91nzp4Nneg9rpchQrCSqA7UZ1ggdNKGBDz7o7NbTRrZVf3pMJs1N4K7YcdcX19cTSbJ4FXD",
  "key9": "5fmeXqYbsH5SpWyajrYTgBKEXEPCKzPJuCUxwGZ6r4UDczKgWR6xuB9yUZMnvwhr4aHaAcKc3mdkYpNCaCCKgCS3",
  "key10": "GUMP1xcFQGtCiUWjbEjb1kCjkZjgj8HJDeEeXmbGhFsJx7FC5JHB1g6HQ3kv4DRpWK8WPMAFKVFoHTM9uVSdXgd",
  "key11": "5dmnXjFEpdw9LdHEJ8chTLEGLWFbSRFxUSviUkNZXeZNbDmpuAJ2vL6rcqR2MGNhBAELJL3msB2X4VzkANDTvnRV",
  "key12": "3Csmzmwn9K1v9qWnmZAfh9LBYRfL6EQWQueNeKZJEJB6i64hguwhgpRLG8f7kdxGxmDhdXJsx2bjHTfCLUjxgNYg",
  "key13": "3TXWm7s1hzwr3ZPTFXZhRY4b5meUZbq9ZkgKRFaJriBVqgRBK8Wkt43pTHw9uHNTjerePSayhJrJT1jgxmG6Zv7f",
  "key14": "2yo85oCv5CJrrPPqiW6Y7q8gJRRJPBTTwpTmNWLCBRw5rzmdPvK2Qd5j11LhywCgJenU83PyPYzCeZj8CspDGmG4",
  "key15": "5AHmji7qZ5dtqz3iPfWPtAptguqVvbqtguXAZUewGsFGVHWpFk7HsXS99basjqkvVeyHEv46nKMHT1cKhhz5jmbK",
  "key16": "591chs9dWP51z78qajs3rbDFNN4fCSDH7dGLYoZXKCnziCFp1GDCuNiitnTQpif3a42Nu539pN3J71TV9yg4gKpP",
  "key17": "5e5NYtDCyBHodFwrS7fpBnhzK8f4rsrEt4poipmUum3ocpzjEZhc2nHW9MUHBYFmuMrshfvZxt9kun9Tn5QDoWM1",
  "key18": "JawvgExKJuvNZt6SZpEC1VjNvuLeF1p5dQt7zWPYd6vhNkCrrYZEbMYvN7NS34GoVz1WYixyfxBNva4D7vjeZXR",
  "key19": "2sj68VaAYWPx5JYDZPAjhb7pjc87xuYchRRo7Yf8i1pFQ8dCCquPjSVEtVd1B2KS1wcTx6vgwUzzg1513ecFCryq",
  "key20": "GDytPvAt6BpVgicrA3jE1zmkYUQPcmkQHsmVBKZ2WueQMGkBQGLyfaw6o9PNEHt5oSQBeaNSJrK3KTjRj3MnaKn",
  "key21": "2tnCfp5adv4PaZjQWVg3sg4reE9DiiSkGXgTjjXmZjyhtXuL1YCKAz3q2mfuKybo4ik9J4eWG7jKRvdjLDCVYpcr",
  "key22": "4HTzdiebZpdA9x9xGBc1EQwnvJMdKNkBas1UDx89uxJQHzJEhnXi46pebGNALFuU7Zc6epqNATqfBUo31NDMMsvT",
  "key23": "2WKHCSdnfJj65meQsPyVGYTi1jZhFSUMcq3dJcQcCdCBCm29af1eiKA57aXTGdMecRt9WNbcM1wFE5hNU1DHVVWY",
  "key24": "64bSPECJrsbyVYWMHfWwt2nZWJvyWoAeG1HT4YPxXAnUNBZwwca8jpMHx59oHSsPsKmj9ttSSDaxCfwyC7YL3zAJ",
  "key25": "fCgagVSSr7PLcLuYJREM6k9318DKTQfFpwnnsZeU6GTUEEFkiENsYk5w5bzYfSm1RMYifh7aozpJi9N8N3WNWNs",
  "key26": "5VyekqWAVpUDNi5BH38eEy3c1vuWorHAgfXC2LagQVYum1Qq4udJJyinY9HU9cPBnHY3gsjoeXRaH9xfbKhUjBtn"
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
