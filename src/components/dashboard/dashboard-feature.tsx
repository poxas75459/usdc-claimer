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
    "5CxQA7C4A4pfeAwLj6NPjvotrm2VZMRUP8dLxzCJ5vdxzNCRVCYMNgEmFezVnTrNkAJNTBwV6ghSk21L5GUbkU6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D78NFQQpxR1i54opkeTMq1HJVaVEGAnrj84Hkz8GZ7ixA6paaxzcfUP5y6aqvafWpQPJMLSHwWBvPbTYxi73A1q",
  "key1": "67dPv6VKHTR4qxT4fDoKCe1KrdCck85s7WwXxVepNd7QoZkvBHpnfuXeZ8oVCa9dC3JPQq2qS7jtscFdJu1fRzea",
  "key2": "mukJPETzGuuuGTaUeQgaui7z4PQUfZaBphEbB6ohmZz3VSpK4JRu3Uk4Zaf2pAx7r9mmsLwDXgjP2iYpA7ZYREw",
  "key3": "3ZSpLK67WkBTPuDbksmh95jvqAx62yFd9PQtLNtJ5JShVwUz25zCpDLMTYAsJdcx5EpTApiebhUnGtmgvFhahjF5",
  "key4": "3ySvMg1ttEhKMiWr1iELkL3KAKVR6eswXpx8Jmksy6aY2JcyZsMzPSkQsp5AutjRzmZtn8xWHE8XMYmMWkE5H2AN",
  "key5": "3nQjPFXjXvg4xHtMg4W2mMq3bgQceayC1MdgQfnd5vcYY7R9A5R5FTPxi7qAo7tF7ouXGh97LuC5hS3DiJtQgEM3",
  "key6": "2PMKMwP25hV7W9EHFpECdMvfF7yL3K6vn2aGZg6YbGRgGYuLGwEa8nxRYAr9pcDhRTr874RJsjNhQ3HG7NHtdY2V",
  "key7": "53ZXiWYCB3dgYBitL5JMZ3jDnfQmA7K6dRAo3xtYo7FRDhFsicEDD3aYi7DLGZnF1iiTsZ7cxeT2UujHLtVmx33j",
  "key8": "27AZxQYPNSnvu9BvUd2UeoPC4sEq1gy5FwQHRZdVjagYEJBiZExnx9fZPvKCgHi2JzQ5eups9ASwWEXJzPtkrSKp",
  "key9": "2ewmCJ5UwpZnEHmgX311PRKH5bGbjKRfZQeRRLHkFRUy4EMj6a4UuWPWuXLPUhKxfFhqEd5i8jCmvbE6qvj2JPkL",
  "key10": "4h7sujaoU4GUsUbY7QYpQF9YunWDJPb8hUUnYTPpzBArs6Ks2GxXsqNeeBU4z6fM2H9e7FMo6sv1635QDM7ifVpK",
  "key11": "5aZeTJup2E5WM2S2aaA7WrxUJ4H7CG4aw6jPjmYb5f4gCm4Ze6wG5rwWkfE7ZpCfhoWnT35VWtk9j43XoVxq9ARK",
  "key12": "4KiAsRdQ5Kb4BNVqT8vfZeYRDwE23PBe3kYPznXQVa7Zx6dF94pLq9nx72y7PdRT71uTP9T74UfE5CT9ktxeszhm",
  "key13": "3NbjGnW1x2jwosev51F564hyHPjXjAAw4oeptLErrPSz3sme12LjwHykbNdQQvVMYhAivVwEAsyeLaAVTw4cBjUh",
  "key14": "5LmSNSLREH9AgmJoeg8aDDB22G4QGDniqCK19thhCnTr83TVKjnY1C2jEJQZ2rHPnougGvrW4Bce84MbFzpv5kja",
  "key15": "577XdXK7i6sTHcZqUAPreWKHgDLrbYrKKV7YsFqnGEKtTEuAPVFg37kfRkufcBssx9CVC5mTH5XRocUg4XNvvDMi",
  "key16": "3ydfg4WXsvBJ8NhfWoqcAophzfpoAHPWgdpXFdNDHqzqSSquUbF3yEpPCfXuUgVZAGaqm35f2isBUcrigDWysnWZ",
  "key17": "2Yqi1zsn5pEajyGF7T2r6XN4tZQoaBA3hUqNJThey2pKJGEvhy3Beyfu3u8ZrsQtwsS5YRCExPuos8f5et9ReHA7",
  "key18": "4XGn1oVsCPf8qw1f6skYxiS3dN4V9upPH8Fh42p4UJ7YGK72HpZLwP2pHvhQzTs3sv5LTwfxhztQwdhJjDF9isse",
  "key19": "3QuTi82omEpQ75ZXSPJkL22uahkeQdsE3h2aYPsJi266X99WznT9STW1qMbGiSSAy8F8rMWzSvwXg1RwVk8p2CnD",
  "key20": "5CZKqWt1zvYXRAeGhPHKXrvBRVevjYmSgpkUvfirNPLTRyjtitA6PSYdMgTqs1C4Lzc1KnrNxTwAFGARHrYg5Qco",
  "key21": "3bUsANbt3VhwKbLgL83eumpMz11Md9nTtgaBD8o9SbninCwz6gwhWVuu1WoKZ1gRBuA1CguKXYm11nbXi4w1F78r",
  "key22": "2qbTfgeenmtxVSJVY8zpNtSLHRtB9CjKptedTbyzxg4tHACF9EDvBJ5UAkPMd8WzZsA5kaoRe1LXwJc2J9WHqGcs",
  "key23": "4VnifnKyLzQUJvDmnqDEHmL4fFhAPHAZPz15VAsiVr3Hg213tA2nVmtoqtKianbzjUajx1sUspCSAM9nfe3QLMry",
  "key24": "dD98SAKqYfQQMa6x7jTneMGSZbNYbu9f4UBLsaqiDLDc8sKfhB56HbbU4Gk8MN1qRJ2VT3yCozZovfkBrN6Ynz4"
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
