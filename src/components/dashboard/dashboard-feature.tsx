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
    "4dAi8HP5xShxNY4QjYRhRiop1xTsQDTyM6VeGMKSAJynfM8T8VErVpj5ntsDw3dz6MNdafQHXcnhXfwPCje8mEX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nY3FdT2ur8G6BKPA1cKboaU4egXFRcKzK67sQuq8ehWmN9ZfMFoiRseWb1HXy6rkzDcz3hMjDSLPwLetFFMMNnn",
  "key1": "5ejey5qGyQmqMhPBo881oEzyRki6Le2BzG6tW94X97qrkAG9US3DcAhy9xXNQjoWbRfp6oChBvKeLxB25Eyk9kpU",
  "key2": "5iB3NKGbdDH66RNhB4pz6gZQY51pcv9HQBGN1zEC6pNmqNSd1djgUd39kgr7pMqmr2HSuHeGWyguFgNEhYsrLCuL",
  "key3": "zLungMqYkXiHET8JgLVh58eyX5bbnTzuHztX7PBjUML2rNMmsuvH1q8VN1GCrQTFT47ryYa4AMAVrjeoxMUmrj1",
  "key4": "k2AuDny8dbNK7yqWKK9qtvZwJ9nLEsn8ESxJSDmLLUL6j58RvL5zSRbATiEzoDnkzmkto5yfL9zgugckPfwJQsb",
  "key5": "2VmrHWPqHThu7jaG4e7KA326Z2KXswXNcGuMD2T27LQ95H75AsXXedndGxyDj7D1Mj1aJHoK1nvFrpMkE6sELhkB",
  "key6": "JXkt27wBoT9sCqAnnMTpSS7MYCDKTdjt1YeJWAuAkQi4oTBtaFZZDprTBs8xB3zxGN14sk5uSFhPM8mxDzuUb1g",
  "key7": "5pz7FyXcx846yoJWUDsrZvmGESRwnjbdBufhajodzjgQNSZz5bQTSK6xL3UbgNxHjXjGiLHCEbiaKYoU9scAPYKC",
  "key8": "37aREkUvC7BWNrsRYU7Mmd82TqrD9ZzGL73VtGGEnYHvePSd65vysCBu2P2thWQgqo6E34BhV8WL9kq92iZFcKUJ",
  "key9": "GzmSH21st8Safq2cEbya15NVN7G8bvefzLWja1d4biEaWecCAn5mWVuivkGDGbQAdJYbtAem3H5y81mdSL8jzsb",
  "key10": "2gYgeBJbKAZY8xDt5D6WygkSBorbUsMJjpuFJ9R25kLeB9mHYNVuBvgdCvBKfo4y3d7QJPMbaT6BXneuYTjEc9Nu",
  "key11": "2pMB8muogwrziEnL9nesgDKS9dUeuEUWN7TA6cKLBTnkLZrLxEhnDhMYoaiyRXoAekhtiBfKzKhYZdACgj1McBJq",
  "key12": "7VHZFstpDaGRP3Vt8NsCPYRxxsMhtFM7ZEKzj7MThVqUZacvna7ZTbK581pujddebU8ofwjNY6VtoWjWbHptSHb",
  "key13": "23XBCxTByfEKWoW4tiiNQRHvLDVCUPvPBVfjTjqP3L9f7KpfCYQg8scQKTKGztUP4p2BMDC7wi2r7SDgecKXvoFr",
  "key14": "4BHFFqBhBSp8WrwoWKQw6y5BhmugVbX51ooR5Xq9QvgTtJBLmP56KusAgn7z4E4ByXdoMSJ4MndHT7f3fiohxAvH",
  "key15": "3cLnTNT6NM1Mj9XwQG2Kbwi1wrRL3wvRNevVs7bs6en8Ymd21HuGs9GetDwGweWZhNWXRbohABKkGDoRuQgyYCBi",
  "key16": "5QDvPNiQXwfBBPQw7HHJia17GQokwQHzcTuUo8LMSKKH4qMRMCsJR7k9XqrAbph73ReCqN1gxvycq864iuGQ9mou",
  "key17": "3v7FrBw33whWQefFsneY4AqcxKvPf9s6ZKyxoMAQ28K7qhJmb6qdtZAyZk98YYsCQTnwXDpUYKz5PbHYAA1fXUyq",
  "key18": "qu35RuJoTfBkLL2NtZyzo449g7DVmfYccyJe7gQJdbpxuQ8SwqP38pM9ThtLZwWRXvCq2CgHwVkYp7SEpSgmGqt",
  "key19": "2Pp4rGgxBkTVT1cxHzQA7vFkjkSFD4snc3aL7qYy1HQ1b6p2bcyoc4imUWuUBGLkr1ka3fQwxPxi6mAEcHLR5Tmr",
  "key20": "A28VJ2muCbjDhKB8UuDLicbzYju1GBzqEHbfkLLDD8GXHjmaFhrrFuj1fiLQcM6tV2zm3v2gGu6oWR3dyauBB1r",
  "key21": "aG47zMnRqvkBbhN212xRtT2QdSzFkZZUfdqR6qSsJJEFLKAW2ZW3zoFhTkYTtCAyVpXxBuMmhX4ANVg7X8vNvU1",
  "key22": "w8gLxCKYhPQdMd2aBpWqSyNFRcNxNeUyRQ8D2Exyn5hF4RC2AEx6hPsmExfjL3awNoZWezHzqwn4Ux4Av296yM7",
  "key23": "34ZBrsBePCdn6QSyqPV8pjUqd57uZmE9KmVWH6dKe3D4VJEh52y8pgG8wQXSpMKpDh9ae24i9tzjYD79UgSDXaRo",
  "key24": "3kfCDJEaY7bc7gZYcNnKS8xCHDodo335ZPyRGxNFmH3SZQbPpCvzLFkvJuUPERJGvNG39cz6D4Nt6jrftWi3E8iH",
  "key25": "GWQDaNt4YY4T1cCFHaZh7WWn8W84qaB6jSKc8PbrwesktVMpiLXvR8BL9wbKCBLLJuMbiXiwLsGM4uyY8HTGeUB",
  "key26": "3ziQLMnFnbXWfLSYCmDPiEU3BLZkxPfJ57FdZg9w2G4DSYFE3NdcpMS4M6rTLtakESAjLp7fAUEqjrsqDJqnNk6s",
  "key27": "5kXdBijnm5UJWC1aZt6oeqqc7Z7Qmdndc5ds8LkE2gs41uDjHbw7sRNz6UpF1nnAWjFepzvSWtaSfLELqiBAa48j",
  "key28": "5sY2UyNyYG7S5qfxvpQaw7qP86dY3jnh7TjtVtUemRiLt2R2AfvyNrbQFRQsUHUyfs5PBKCWi1Lx59Go57RDaEXF"
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
