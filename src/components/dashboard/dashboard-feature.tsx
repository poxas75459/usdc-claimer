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
    "4EMGA9YEV6WKQVDCWLEqNRP67qzsLf2gT6cUn6VHxYsE7c2oPEbpiqoe7aNbugjjnpWijMezj3U3ouMFvTFJ1QXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otSTScEBCN84TrryP7qUPVsj1rY4tRnZuSe5PNHxzCi6Wi9paVpXVBCnyBWSrWMwGJKwyzXBfWwRSmzbpWDnimv",
  "key1": "4vgbHA2S9ShX3wv2tsv36aNEh3t14qMFeVvvEDc9SUNPAbfnFU4bhhwRf1qVkyuMBaTwQkHv4rLKvNSAJthredgX",
  "key2": "4ErC2F9ykzwCLJmCfNe7vkgwpCVRReCdptc8pifXyQS5ZB7qynKi5BHtn9XLpjuHycrw3fNkkTptqEVVV1cjMBun",
  "key3": "2i2aGtynpe52W5teRozNHznbU8iZmDWLu5j7dkygCMiuVs7L7GKDn5VoFK7wHVkpQ6cKR8yky18w4UPnUbwaJyVV",
  "key4": "4ehAZtK8evzhneqdMyUrtjsNUUs5S7oserm2yM3iWXKiySWMDV4RXaoA8z7g7vktWD4bBbdcqZWBvnvAqE5VvYru",
  "key5": "5LctkrBWJBE26mgTZrpcHiEU6BYeSGraULp8DfKZWBu78D4PAaL93nfjKYrDbr481YiePNtrTFvBZuNbVwphHUX9",
  "key6": "4RjnAPhiUBcgMLfLEZQ6sVRzvQj6vM7ZQxgXLf3awNqmKUYBWjtiAwd6So1f9nzxboFfFhhqxGhdax6R68PRQvM5",
  "key7": "w5vHvzXwb8tFGXU6i47joyYta2H68SqiG1acsCKUbSsL2Saks9CSN9gDBy3uwuwGrbDRNCHfzhxLpqiPEkgSWA1",
  "key8": "zFU8tpxScNTnWwW656KBeo7D8EuciEni2FSys8sTDvxb1wFB8G3LGcschUfVcHUxRigM9MiRWKoKvky1PLS3PyK",
  "key9": "3LEn6HHT9kKoTXfxzzTC9x9iQPS5RVnka4f8ezjKP9cYCXBmNpTdbtG8gtTLfeTojcjm86eak4qkTa9TuojNM5W8",
  "key10": "d7jkKet29Xk58a7TNC5dFmUa6Zgw6QjuUUoMVYdHWbBqnwLdSnNWrDdP4JtqNrCYh8BmfruvYgbQQpJpZFLxkL8",
  "key11": "6mPaDAhqrUzfUb6xSCjMKeUxfNK4rbsogTe9PUgKYvs8JBMrM3msFR4x3GGsqTz7163nbYHiaDUicTj9fNvbqp1",
  "key12": "mL98v5ww84SFpMcm2qZECzHYEnzPLG6LfHkdGjKizzt5pcfVkGiRLBCekipqqnMbvnqeUnnThs1M6rXNGzCfAnz",
  "key13": "4mSTLR4Ymh82X2R5115Cuowj3aVdBpZdtdZ1vR45phUA7AsEriZ9JmKd2HqBkWebLRzgVEtAe7AQaRkzw2otYrUB",
  "key14": "4hpgpQb598pkmpzHsW2xHYNZeoSvitfeXY4aALipzjqKCBn1XGFCx9aPVGwMpdyjTmKbUTF3L11L6cgmrDv5tPYS",
  "key15": "3w2TDZkdZxt3cdYgmztnPgqQFJtm1ENjmJ5mRLNeiskGWxJfyqFcdMPey5M8ftcpNGk8bEHqV7UhBQjqoGcEV7kf",
  "key16": "2kU52VU74bde7VhauNC6YoXuaiye9y1S8yTXJjCXcpvDuieBVhexMoqkAKzMt2ggiGY6NfFbzxYwMuAAQJJ6LWsJ",
  "key17": "2fNJQVR98nzMctj35tcQmSdrAp3KghKx3hgC2Sp8k2nYWQvRPG8eJVhKt6Mtxf5mdv8UThkzm3N9BmhCKBabK2qD",
  "key18": "2ZwJVfVUHa5f8j9woWHKogurxgxokxgD3u7p1GkU2iea9VZvS8Sa9iDmqCSAHiLeTaZVDDNyJBJnkRsPwqzr7WAR",
  "key19": "35GpGafGwcDfoGaDVXzzwQVngQ5XUPicJsyxZWcdqcppJ8ce9uEtcXTghZMAd5kk2m4QhMxHDxcr9nXXoeAsrFnA",
  "key20": "2x36CHm8aS78CCBskWhCN43d8geg26HVqEbV465PMzko4n45ZEYsn4DCw8quh5qLBtaiFfvsewfbPkNJZyoFgSqp",
  "key21": "eTPGeiFaKXKMtSzSRSYRDkYiMpysLytPMdpDjTrSYv8jShY3qo7D4QLuf7iTha9AobbiiA9Ae1ke8B7oesWg9n2",
  "key22": "4D5DW6w36fXCbFFRHHKgGxv6bcM9YZJA3QGXHGapKyQKSuJqFu22WcjkBCK1BuUEzHkrp6rpiiuAJKUikNRcPj4S",
  "key23": "2bHK6nbcsQTSdjoythUh28ocN4yA6X8934jVWU75TZSRfo4jxWDQTfygfqJiwf8QoKTFuXYhD56KkSLq5FP6FUND",
  "key24": "gnGReYxM3cZxe5PBei1zWjPVDA3CFGm4QUeGcwyxpt6cLBmv5GeSRAFdzLFBGHMYxi4wdVEVvhZtgvSychcyUWm",
  "key25": "59V8rp6oWxKh4ykNwN44dwo1igNBz4sZu6rz7Mygfpb86UsmBAU69AMYjPjt9XydgRgPqTqHxgXjpFz9CkZ7g3tH",
  "key26": "NK3FCQVfTtAfaSst9drPihsMXPELFxkSs6faa1r88MMXFYoXxDawFEvuC6PD3mF7wq87NW8oiBmuxEeJqGss2FB",
  "key27": "P6wwziDJL1AmjkKqA5EyERoyDikDuSvYAY1xMV86Pz6XMqYZqvedCyT9yi4qz4R9nRZ6Vt5TUsePRjxi4KimWwJ",
  "key28": "EjW9gVFsRgLU44WP2PU5QJRFD5kXqesqGjpDuFoxXPeASoZ5LTnZxkXRQiHpR1hUBhJSrmpgaNZj4J1H3GFFyhK",
  "key29": "4UciKYdeaejE73uA51GgL6hEMzUAWYXdSrXAt2MycAwwgE3yAA1LaowzhwogCq3KMC8ztR2vhqkYPZbgibiiwvb3"
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
