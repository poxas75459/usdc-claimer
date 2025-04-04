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
    "5V58cF4iGDf7AqSm4wJUzRznc2QZZcpF6uTJjdBb7NsKH4bJ2DcwKQotkuSdGkg5xt2CjgaR8qQkrmb5iHVPiE3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLm16YTXXDyLUSqGWGs6hEQsEeoMhN68E21CeZEB88STSWne3dUCxY2drAztEBKhMXQM9CjZajt1t4NS5rYBNWs",
  "key1": "2XuUs9fgawskPQfVrNGrNZ5kYmLvx3dV8pEnjH3vHypKST3WTn17TcdVYpQN1suHQzjDAS6wFbGnPcGSk8tKWciG",
  "key2": "5utTKZH2XrjBUP8cog9qdTgYWW7jkpoHEUGEYkGThrVunZTSrJ5toddi5KfpsPfJPuSkYDzjik2Tqxu4VV3dZihB",
  "key3": "2eUS1Au82dPWrPKZdgZtmzhT2UirgvfNPcXuTtk4digjFPd9koKu4FvW3y9hZLHtz3eYM6kBQvgZvPriKiTZpy5e",
  "key4": "3auKzsLC9GUvbPnPQrdhoFi8EduDjJv4TWvWFg7r68967oPaaENEffTN952qkBzJXbwenQV4PEUsu98U7Cia1pjD",
  "key5": "3CmmFj4KuhBrVrrJbYPcWWyQPvaosuMMJhxov57csCNuCiwKuPDH6b1hhBoKuCC6vboGb8DYjCrasRL9hqWDQEBh",
  "key6": "4kMtYHD6wmwYVZWSwBNCYJmLCemFbxpa6EVsGwzKUWTfZSc1ZfucQEQscxsZTcQvjkuJxd3dNX5YYoTatYK3G7XW",
  "key7": "2262M7uft6TReqMa5FeGCoycePNyX653CPtVDr9oMDC4PQvADueZec3RUNwKttk9KpAL6EWGLiveqhDRLRzSyvcm",
  "key8": "GySQG8wHwKJ13JcCmj73kDJQwHdkLQmHHkYWaj44prqtrTb2Gawg2nAB7ywge8y5VjigTtUL5fmgAJirhRAmghd",
  "key9": "2una4hqFSA56Br9RngUkp4LM4bbivv5Bcp9kfnF5xtoqpuXBmrpf5sX8i9nLoctCMWXo6gfc96TdQ4vAFsDR2QVr",
  "key10": "63aNqaZn5hsReAmYBHQBQFP5MjaVTnsNUfAfxZkBNYVwAEJEfNmwRfTswkgxDw9z8bwaZDjYzZDNSb6E7U95BPpq",
  "key11": "4N7iBykbjNFbgE2TvDpFiC5QcHcXznA2iGAJ5fAUaCZ1Fzb83LRQrMq5fmE84EFvUAa5jPHKqNH2q4mj73vT5v4i",
  "key12": "64bKFQdVchrTiByqrU6DcLzhjTi6dZ6zmkBvDi9CqzkzYXcoL91NgP7MtxQAf3YDhNgagK4M6aMTnyfeVHWkbS3u",
  "key13": "5K4TRrfGqk63FF4SvUEcSf2QXMXfHvJfCwpg9rGqmQujzHA7ejN6QXbisgohfzjeEVtVffwQ1soKhHDnix1eYK7J",
  "key14": "2VDr4CMo3R52JXyJaZGGCq3h6qcd7KMb7RrKD6uBKuv3KVfSRZ3krzLyyouBQsaKKTzXv6mdUpxCvkJqyqoJyB51",
  "key15": "3XbtAjid8FpqCmsEJtnGdLhMNiGaE5BwPQGrA1B3mHLQezhkTUeSkRkkuvHHkHujc1nboqXTeJ4Una5JWgjo7YrS",
  "key16": "2Wi12FFC2FdGFzU1zNxkaiQdCYueM2CrQin8Hbg6SvDvCEtaV3hx2Bt4ur6KXALrEG6dJvRCNczsqiWsNSGLgVwF",
  "key17": "63Bn8NycNUz4fh9a9xAZHHoEuHqmru1h1oqPxr7ubFKA9hczGcx9ySnsceXkwzk5tWEiksLS3afwfCm7EopMe1zb",
  "key18": "3fPfDJB6jYtv4EiTWGPkxjtmQ5eLDuFXPnD3wgAcUwHc8291CMLgK5WrFhZreZcgTMQzwHGWBdBYh1cqxT1V9BQc",
  "key19": "39ZxLZgC2bPq9yXDeTPesjLFPSn8GogxPxMDYt5jULEdcBiYpXuji69EuEeNnA1b3L3R3XQNR7ddNkkpvEtp9sQL",
  "key20": "32So1BYwj1cCJmi6TRyqNSy3Lvsa1jAJBWVpFFRFbSn7z62WCF7yV3KtayEhC6xCpxCvwAo3UXu4Ts98JoJ79s9U",
  "key21": "gwUxhQMkSkxupXAuiAugJryUmhW6sEWZHkjwrqLWhC4c9Qu1GRp2yLfhnEXorioCzxooBCskDkKGzEhYXQqh3ev",
  "key22": "2wEiE4TX3U8bsNs9BQwpVkgc96yKYffhvGkvTAqEvwRBATwkVXm8vcuDe7gtXNJpeZwR4svCiKUW4C9QJCtPp2Q",
  "key23": "45tm2hM5sZ6st28sTd9G6ezHNs7WnofHUFtPGsumBpjGpvdRxf6FEAMiMqUGkw6A1Nk5C5uQhpgoTihBZz7599Ej",
  "key24": "3VDHGXW98XZntcT7tHfFwnPmMNHSvK1wrJZv4kzPfL1UmqVpe6iDp7QCxVu7XyEd5XgU7NC2ew6cXrggvpsckgEb",
  "key25": "2G27zkhB7MyGEdjQ6VPpXbkLrD8qsRiHtVkRjtpw2WYDGwGTGXhWGBEE4vJAKkGYzGzXJf5bbUS4DunDejBvXjzY",
  "key26": "fytFtqQnczaqErv6hrTUpFhccBA8i8JqSqh481Gr4GVg8CMkPfqaB3kfdAh7jjxijgpUa5mnKLfsEWGDkwNxVk3",
  "key27": "2GLYPmYGKHywXoSBa5P2MVpRW7VCs5JGgd1RYHR77cn8R1xpLCWZ2vNCDpac1VgrFoXo8jbPXpdijpvgTtf353Gt",
  "key28": "5kNbH24aCzPCKuKHx7gEGkkBHjPE3jatctmSoNKbnJR4DHxVh7UepAtXYLMfrjE9hsuvzjkbWsa4tKUvNX8nEKvZ",
  "key29": "5XgL1Xk6xxM6Gst7onQd55fD6azEcpTk9vzmzeh9dEAxLBCvqjcWU62Ubc8K1q6TqHxFkvNuAXDbQC3uq7e4naLi",
  "key30": "3cq5oGrEcqNp9McExJpV2Vubp67VxYZxkTDNbak8aS3BbbRVDcS6936WDkpW3Uze8GshJmVTo5Vyag326Atj3tH4",
  "key31": "3KyLBKitBYy6GuyNNnmkUrs28NqvH9PBJM8dummvjxwePhe6o1wWiUPJm8TjYpzNWcSP9wgjvyX7vxzt5xbPY22W",
  "key32": "4H5kNX9Jt4YQ3rgdbUxNQiDTNUMkiwDi91NNi7VeQ9tVHwyuHGRaDF6ufXXYEu1VXxHLWhopXR81qS2HJPKnVPTd",
  "key33": "398jomLJAJqvaqr9GKGq61qxS2Qe5zDbdrwPUu61JRZUeG9nZERQFfqbJFUX9NqKR7h9V4b2A3wbEE2ygH6ViCtV",
  "key34": "52WjEygS7X1AzGRWhCe5sYkxTrC8g8nQofPZn4tSBNmUXCFNgTyxRrp6eazBqXyjj8bMHnQiNvcSgVX8DNd4JhSL",
  "key35": "48iGDV1f2E1HNERMFurStCajGfZSUsfpmBcAnwLHPh6gdGXLdcZW5gzckdb6VGoMhE5F23dYf9AvK9WSBtSeAv7H"
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
