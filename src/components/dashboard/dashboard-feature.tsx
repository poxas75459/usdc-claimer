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
    "5ieQEmVcUofjweQWS4uyyVNfALyYSRMZkt3TZg2Y1yXiFNw6RErgP5DZzgmhwpXB64HMDwXw5PiDJ7UyQbF1Rv9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jb17AW7bbNJGjtEnZLVhM2Ys6VnqCx9AdKLn4qMXaRS3FUYZpHoVpZgCeWUzgvPzLwSzJSgrkjYvZkjhfHkmgqK",
  "key1": "269bAc27HzZVSnCwWfPtCcW9spTR7JULzDUqCe8FYHGSvSps6WCTtZPdEsQJuEproNvvjtzRz5pGqKadmtMJ7RCg",
  "key2": "4J4RNz5XQLRdWYa4Axv8dtN25APhXa2ZHzPBFgaQLsJ3dYgNkmys5teQxZskjbVDsbK9eUXkrWxTpqEjVitTVksm",
  "key3": "5rtQ6fJEybHSaN1CpAtFYUmqWSrzX83eYgZLiwCDh1uWuKxk9q9By3LhhdDqjGfVuSzoBFZn5zxZZoUL6UerBW6J",
  "key4": "23fhYHaHKftbTxp527zwmjBc9dK6gvevyhuHZiWtkJvDPvYyNQHsSf9D8roC6NG7TrxUntALqSM4Q2zut1u6EUN7",
  "key5": "4GhE8VyaMhrvJKFc9ZMbGrJEy1pxZ8uAzWZ6WpKHNgdnDJt7VSVfsR7T9RYPRKioi5E5AtZ7ki7YgP5VErkuhdVG",
  "key6": "3LYwYgDxBQUE2QymCpy8eEmVQMzQVUGBxNsS5vNGhwYdnWWYBRAbN4tPtsMUumFHsubm8zpAkexzNUN3Z3ty1zYY",
  "key7": "5Kerew1JWorecjMgr44qf1oZ2yNPgkMqYEwgDvGdFVHscKMB2JvyKQwcWbu8Muh2z8YmnsDcphARkBk2hdtSjDte",
  "key8": "653yuFtDbbH3T9EDDXCjDNptuRzmeayNyTCLqaDvxaL2VCzFJuKhHTudkhVuTEyievx2cP9PxUFLk8CCyrKgL2YA",
  "key9": "2qgZJmKsYC93mGv5JMxM26LGvcGobPPYMkjGN2UoGzkJhwctvBjaUDngULypecvZcbQL8cQGrj3vHD3v4rFk4Nhr",
  "key10": "5YQCAxEE5gXpbjVUNyu1tDMnRkFQvSPxzj2ZFLMX7ZPDCKCxqHNEvHzmRqzdPgTsKyrejLiG7gds7DZJe4xMUHgw",
  "key11": "4qgUp5sFyEk9xkfratAPuWx3PNL1JFexKXVbqLKkjcMhxpLJ6QvdvrR91j8WBpQJAfLFTgG49WhR9BkdWgbSWqtQ",
  "key12": "5YETAxJmX6MecUeytWC2MFebUehM4NvDAdG19rr3pL89AgrXCnctD9LbVqti7oFfhKXtQMqC2pXqbF9MbPXMJ7Ku",
  "key13": "51cCHX3J4A8oAJsbDvMdvTonu7oGYkW4isaDHSwzgTWR7DSSUYE2vPPrrdRtLEpGrsHmkP7gBVdLRCoaWfAXZ88K",
  "key14": "3XKnVKKF9sgNwMsY54MYHRNdC53mYHXeubAzP85uJGRVohDGvQrGrfHkc1QWL2yEvkhbvZgP3Yh3EHgef3hZb5AQ",
  "key15": "559LUPHgs892zRk7w2ArMSVebxrUBoWNVTQsSujnWu1oeSVwN9iMFZcVcXwvN4gjr8Q2EibccbPV7bAt49z7GwTv",
  "key16": "2NvEG4oDzjmJ5AM6uTLHZfdHRPDHGhXWAvzfNNBxGvc64TzprWp1MZBtdbrzWWPVU2aUeNVLAQobZdMWuTjLW7Z7",
  "key17": "3KBGq4LB2tG5MY6iPfKDPBsnQp5nrxDmGY9ddsiSj8MPKCzPYBJwVFoLEyQoC1Vst8WZ57nJXcHGqBb1pR7xLAfV",
  "key18": "5BiLW4SUiNTQ1iA5CLUJxsCL15bHYWtL4se96Sa4i9dG9DJw7vZSKGLiH7fwsuQNX4g6s3HcS5ZF8Ys9uYghk4wA",
  "key19": "4X9t838rbm6rMdq2qHsS5aRQCwFT8VzpHJr2YdW5cZSTyzh2iXoGkeG517FzGMDCYWXrFFcEHaDkjr577BET7JX",
  "key20": "2XVbm4AxCPvoHP8knj7Qa4nuskSf4A1ZyFQY4i8Bri1nvdrcURJSFYKyfYj265Dr4RxsUG1ojiTbbVPJ5aWVJWAc",
  "key21": "65MD1Zna1h1oqyAtiAzLC7gxkjyzigmxeJ2JgEAyVRZgnBrHdxNLDr5NLNU5TLu6LzadChsdRuKKA3raUPHYgaV9",
  "key22": "2PAujCE9QZRbfDDe4sZEzorY6tb7fQcYmZrMjSaxi4b2FHYCXhhbvk827gAoNB8Ry53TGCByWdteV6wV2ZWHzYmx",
  "key23": "5UaBGoc8YV2ccbzc3FHU4Jhn99KcQKP99RLafYjBp1187G7EdScfYhgn8Yqr4EWhPZethTjHi65u7CVVkkq6ip5r",
  "key24": "44x9mbeLD45xDDwQ7WbCTCRYNgovb8YbkfShtNoptrcnuZkrT1vKV5JN55fxt43WPNf2g1fgaJGrdqUp9RkJeorU",
  "key25": "3iXafJEiRWZxTP4VnKUFJkVZ9NFcA33WTycrBZppeESH4qmWMZykc186zpyRboMFkWWYwR2CaTDyRuBJMzh89VN",
  "key26": "659CNbghBYBQ73LrvN4PPMbY3TGajRbPWNKexQDoqQUAsWKw6HEAKwJ5MJWzzboBCyJMyapGTJdZJWJtReWQLKsx",
  "key27": "5UQKEhi8WEQMpk3zonJhrZpHGL3F3KmjnfUuShvpYnnopCqsstaBAj19rfrS4i7d8Ba6QtA3FRWPfP8XdUdA5tmu",
  "key28": "uPt8VyuEeA9PAQXZCk1WVbZirPpH6YL83BzGYttnE3hTUJK8Rczp9ni22kquA31EDPGkuENe3X8NXwCikkCybnJ",
  "key29": "2VNsucXY4U6wA37nD9YqTisarj8j2qGRQvAiWTdLmUNhtHmhTDKPpzmdS8b6yn7KDpQPdj6Ep7x1F47gXS13Tdv2",
  "key30": "4RCsjwXoyRHVUMrZPnaUQAXHN7543TVtbif5m3cVfg19s8Dmx2yoyRgfuHKyedp3uBiEyRhmGrrTBg6DX7M6hNy3",
  "key31": "5FAEawDHJmf9Bj3RWzQhuLgbseczdxNTv9zaz9gYzqkQbPqQPjktUfMPW2Bt3LGa1qhsnH3nXkFGf58px9t9f16b",
  "key32": "4anTiSssznYYriXPics4ismx6pBPZ1EUP1tm8B7Kn6F4PG1p4WZVDCNf3f88NM7sdGg3dWrdwjXozZKZzV8irGPu",
  "key33": "67QZzvgAiY8UVLox1pKvHZREejDeesWfxPABTF1pUuR6H5SjFHcaSSMs9zWH3HuzF87aosFzdC8GnfnVeBbthMig",
  "key34": "5G6Ub7xmgYqw45MrM7EwPoi97kBirbFPobnupL67inZtX9fV53qL3ZbNn31JS7NhUohQgVUj3wM1GL5frVYyhXRu",
  "key35": "21VcAA11LEtz5YmjxUqWEtvr2S8hnPUzx5Eag2czH55Rwe3unhHUdQm2cFYoJcFCp8RHYw3GyS3Urgy9ipZANARP",
  "key36": "5NG6anY3mMXbkz6kwPn7C7XMzth4VyuJFP3FpD4wmvBUBcbjkCPYoFUbMAFmAS6F1kHfUovxtYvxyJanURWmYdEw",
  "key37": "L8t6Qm4mxXQnt5QcfHEHCwv2gDfpcB8fZYq3da926zfTbvsGNTH1AayDr3zG1Rq8tYtdRKWBVnqDe53uLuwfZH8"
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
