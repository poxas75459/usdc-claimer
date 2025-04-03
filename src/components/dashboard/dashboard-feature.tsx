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
    "23nVr2ZVCUqA1HS1P9GjHoSaPT5u1CUaPNh7wi4XZ5NPFc8tVRHWHth4cqy84s6pzao9ZUnJQ26fUHdpZLAVzWoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UR8gQx9eeyoNWE7hD7x2z2PTEtLxJKxAPyoVrDr5r6GHyRDCiwmeT16HF85dM4AQryeY6DATzhfawWVZmRVY8Bg",
  "key1": "55ymQLxDs6PSpqGUZsnqJEURFk1gf7XGojB4sVnA4ek1f2ZoQfTgSDkCy52BjgMaTjJDT2rrPzF19FXLyYLYPGUH",
  "key2": "57WxwavU6j9LArtRessLkDrwwdsW9Cme5ZSB2ju5kKX4VUDtcQwFXcWcSHwH8xTaYKwECA5QX4w8GiFdvTFDnT2W",
  "key3": "4F7bEfjDyiy1VfweicRpFfsX7BibtSsisMRWd7z7YsL3MrMCaj8sPabuYxP8ByGFnWcoffR2ir5ZT3BtaxGeGvqb",
  "key4": "nAZLHtghkD1UCm2dARuFAB5mtEQ6KSB7NMUYZV759NYRqiHT5apDHsn9xLcyk97x6UFbNzD6fK9H8w6fgStxxNE",
  "key5": "4D7LVVYAq6FwrnVup8AFBcx3hzH1redFbErwKr9GxtXvSpCHpiJBSjYLGNXafHude12nbvzf6fKuTvhPN8FL5YXs",
  "key6": "3wbrW9djEJd49YY6E45oJwKrz9WQo68r8Ae6ibscCcSFEb5YKjWg7f6WqaPQ3uUmvrYcwGTTPaKoPttCVYU4odEQ",
  "key7": "51kjKUBumHNb4aKKBVK3d5sVmBHu91X2SdkWCvjbLjuRJTov3376DBxmsH466LErCJ8DAytQJPVrzP7bsxvDDoyx",
  "key8": "5ach9NNmTW416zWdDf1nZ8WxX2LfXibXcSriBHJQduNbRzRYtrqpyAbawrZzZZcfaDZCUcAsMggRJdyDHnMNuhxK",
  "key9": "3oqEgEuVBv1WNYV31Qex5nTi3ZptGgiinM4vzeETwUmYmDXdPGWoySDvPAvMDnbtZNjxiSKfwjRwhPtRcyqY4xjS",
  "key10": "5iSjnPaCpyRLbMi6kKfkqs4hJuWE53K8YtpaKDeB97uWRiF2jxbbELrQbWk88sYHUbGcP3qmus5E2XfJaE9ExNK9",
  "key11": "4VqqkFpJbPJgfXiVDYHdHK232AB8pQh9S4ZAvUxeuAHy4ewgViF85Rt25gWAsRc7qwfQgthxdGRwvyS2CDwUvy8A",
  "key12": "4fCZenY1PWpvM9AnkKd9FQumLzbuGDFCefPw6jm1SFXjPzKErKuTENj6MjfjoXaoQD4cVWEMskupYh9xxXEq2Hvq",
  "key13": "3q499h4qJ2LEDihdBYzfGLdj4b6fywMfnDY4JCyW8pQudkxrnbiRLwAizTTxgqQp4RuQuBCqjPVGu8Ldpb7xK4gZ",
  "key14": "2XnC3KtvBMK84fwPhirSYJcuWB5uB9W35YDS5foGmPF6DS2vX5GsXGXegoCPNSLMFDeUDzJuoFRk9S4yCFGyA6SS",
  "key15": "4saxB33qrakYs88sg11qVRwi5WhJtqmX8CB9nk1YcXQkzvt8pB6HDgjoUBKWTM5WZ1YGopfWKJws9tX6h4Z7MHA6",
  "key16": "2bW4TkVG4t4vgS5mukeLNZf8Kd4aRm1ket7BxbPFtamXXHkGXjp3TXasnGQetn3KiMR9BmXyATERDhdG1fw98T2i",
  "key17": "5nhGxYjbFgfTZE4dy4QFYR3F8fngdXMJkvyFnzriowF4hmgUPF3pdEz6BqaBtkG58CoBDxPCfpATStJ9P6fSG7Zt",
  "key18": "3XmuhkVNsswoTdQ8UpGyAjhCUfnkXQW3NcCuSb2bfTaeWnKuSLeLk75uoKoceJ1qvLckbEjBiyYbRjic6JScSDxH",
  "key19": "3fQjVonSW8pN8kS5aWz4S1reA4yQZrgiJgp4ZMTm7CSVe9fkAMSheaCrq6bXbedpvfy5eshfxWKZzxNR7gyK4rGK",
  "key20": "4KKEkvy2DJz97YGJx3S9A913sLELjDbXgMvx2BRSnHE1VQeq4TGT2GfTBhgrJYdHMSNNkiRnf1A8sbJ31JhKcqnP",
  "key21": "3ZJFvXUrVhS65rDVhgzhTBhbYGJoF1RsLHb2kLtnmSDhqrHHEoH92axBNmvjqPJycpU9nmV6ro6XYgoAzXmBUpqh",
  "key22": "43NVo8E5KE4pBQH861z1MSGz1p5sKSCaMp1HsnSjsMWMssGXtsaUddJq99eAWwwfiB1cbaEk9htHCDnN7fXBY3Hn",
  "key23": "5oMeQjoCBdy1T4omgVrTfzWW8GEvPQAPxvF6vuqiSYtcPV8qmJQJJiX8DCtxaMSXQ33ecdzJG8mSZ7aFzxirBwcW",
  "key24": "5igu65hprmmqhz4YzGTp2caUqmi9RVnsi7DDW3sfp25D4Kqkh7DyXVaxxLdWdq9WeYC3ZCcJzYBWsZTzZWTsGjka",
  "key25": "4FtQBA6x7A49VViN1pfMGbwa8hJk9VZG4tUace5Q4n9NrYajPhhdd1fmDGBNVRVKUecYQtNeCvGmvKv6T2Xdu7qm",
  "key26": "5PbDhVsA82MritGULdBWX1eNq27HZgBsb7FHx6xGmyacBRw414VFRCVLZyVg6ENetSNxdBv6P7x6dE3QgEXbauDi",
  "key27": "rAGJx3gqtpTyZhN33PmuWsH6qN4LJ2P3raKGeHTAcrJJmWv53YnYVGBcSSi1KUFFMLZFnK23iM9Ke1TrF6nQM24",
  "key28": "2zhBa7eGmcxjpRQH46VSQJPSuoedGWJEsY2BB9tRDneU9AzXowc9ZUg9pDwmpjjMwBWHwEa6nt5F25wjcK2ap8fP",
  "key29": "4hNeHsDznE45wddStXBgfAVWrTtn9z7AVFWDjGZTC3mCF29g577VKzd4fyPvJfzGcPCjdEEwicc6Adgnk2hvs62A"
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
