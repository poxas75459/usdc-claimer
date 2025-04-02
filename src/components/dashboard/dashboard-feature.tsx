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
    "4W4iyaH81mDM9AQkuyfHrogiDz2DX8seP8XtNrWL9e1ed286TS12BEZGAKiWvUzugybMgswTR5oTdJpWdR4Kw9ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hLXadeqaMPT6GKBXoJnGBr58zzwGmYU3KkovYLRn349ZHLbKZF5mbyfLJSeitwYzfYETHXgW8k9t6v9ZQgZ8xV",
  "key1": "4sTE7BBX6WCyPpJW3SXDZKcDpbYY626SWi7JfmkDpMqns9TjYbqDf2Y8SaR6qdDTdj3j9arnpieLBPKkxjLP8e9M",
  "key2": "2AdJSutU7xL43xURB7aNKPjwNb6AscTEV9BLvGsw7SzB54e6xBtMHnC1KtYbyxn775CGhsgcX39zAwjYN14ytKyZ",
  "key3": "4QdmbYkoA82sjvWF3Ss9a2CpJ3aTTdv4MUPrDgX1SM9QwuohhhHrfspUXurhoYZ7qJPJa8XRkCMiAv6QmNS9R1eK",
  "key4": "VmaLThVNqjXEu6mFd7puuAZoykiZrYLyArzEcJJ7MyineRSx1A4SNeUWaic9fkRrCXJ7Yv42AJPf5B6oT87GaFs",
  "key5": "4fSG1rAXfQuL2cTbjvx3CXZdQEfYwaBTqUYm3Wd724Y7yRitawWBhSH6kSC3rKbieY4RfzRYGWv4gspot5GUHvGG",
  "key6": "1As7aA8Vr8YBjttzRwTta5qezmsa8MqZJwDnW1aaQd4CFKHsxuE2SYQwUeVAnUjQJYeeb8CtV2JqRFbHLmkduak",
  "key7": "4QRrxZLFGXYCmUyXBqXbazPBCMjxo9NbptZA2ASv1EPVnH7eU3rozwzMMUUiD9PvtXWgqdfpoRY2sduNUq3TjKo6",
  "key8": "3QRaNcQh22xdvTr8FK6WPiLqbv7rUnwVjAndfE5YC51cumJ6y8DonxedU3caudWcomJ1pNEpTcpjYeQ6sihfvSnX",
  "key9": "5DSUdnePVmBRvhcNboCk44vd9ENjDnfvM7reyn3dUKGa9SFp3UWWo5QDby5nb5k3dK2SJXfo2JrWZktpKGuU3FCR",
  "key10": "ogdxZf4qr5bHYwALRRgQKKqyD1nv4Hoz9AjE8FMLk4h6EVjNjHgEPBBqZF6ANonrqm7MafYeXaLqsm4uLyktt7a",
  "key11": "LBkQ4yHpGF8h4wZhJWNHnatSkfEVxpmJsRtEJwdxwWJFM5d7FMocXHvkdpiyrmvhzyC1am1fm1bxhAHnZCpXVzr",
  "key12": "3Tw5mbESa96KfaWkrCtDsPWh7tBR7FLyKcehSBhYtpAugfm9gXXFSmEezQhwm8RfF7CppxZwP6NyLmcKgLwdghvD",
  "key13": "4BcyQ3xLik8GtMiNkMWqUjAjKp6cunF4yw9MWKBPhw7swpL5fj36Z3VkkrysDHmYKaCcpVGMZ5YHagNmUSD4dXRj",
  "key14": "4vcz5uLEhu5mMfmPuqeGumawyru3gDfoHccyS8aLRPFvVjCyGgTeGjnqiAftwRmU6FEiPKM5tpza4fKkFZPKXts1",
  "key15": "47wy8F6tA2CntjqMg64wBgR7YA8pxKTAQhX3CGMPSEnFDVZjrLHWDUTMxQG3uyQGFC5Hdgax6fitzsA39xtBVyo4",
  "key16": "4aqw2hH9sWTpWeYBL1G4iemFb89V8XHHcANq7WdSrBh912Cew4SBy7SNMiTM6vguJ9LLtZi5ssmFEgAfPvHmugUm",
  "key17": "3bKixWQ8Rg1LNscZ5dugLK2UdwMyFz58pDdVuoJJdD5Wx8xezJ2k8Bc97URNGTmqavcchZQYBv8Zf9AsVsKXMHcD",
  "key18": "2PCDGMNbTJmUY7ESFZs4ic89SzCrqoeNBQE2P6gBtn8SYyNcGTr7igk1xB4kqyKXki7L71mv381FXtU9cKTTDhDx",
  "key19": "v2B1DYXeoB4JPLjxz6nGp8psUhyNRuPSccf24LJxLLPka3jTxi1DLV3Ls7PzBJf44s1Z872GB72Eu39s5g4RAWc",
  "key20": "41P2NZ7urLstrSvYFJG2QBp4z29fLarEM77ErosEioG4PF4xRBoeHL7JE73cwqVkZf6RbtXojtWdw3vKHqZvMBx3",
  "key21": "5zXrJbVk1CGf3rHTv8y237HcCwWKJFz8xZpnCdpBZvqv3Mrj3ajvRCigsXaEJGnf2k8jLVa8PQ5aV1vCrsndHrho",
  "key22": "55JtU4rgAhn2cpBGY4NpDH2CEPWqQBVxqJVL7f55wgc31WnHFweXH9NWFjKNHtx8mzqmSdN8Zu11PsqBUFaUaNQf",
  "key23": "55ZFNGyuzdAU1sGeZnKArpf9DiEHwWTtc4MCfKBXZydcDckEvtnMkXuWczsZADDdsD18pmy2fU9f15iJLah3LBDG",
  "key24": "5SAj8vHdkqxkAUWvXttgLnH7wsjA6V3EesfdLDongBmWPa3jfut9urmxgBbNPPnHTg8Mu4nF1myZgyT3bqApohts",
  "key25": "5idEQub67RA1r93s7rGDxWmF3Py68gpfxzSZEnyQHuibUfzJxxeRjtAfw46g93iUZC1YTcGBLkHQg2eZN5XZMMS4",
  "key26": "83UBbBXkAL8t3rjXoJPxUkibH27LfFKR2qsdT2Vq3BKqpCABF6TJANDt7DqtWeVdsfTkTF2i9EZ5LDCxrWyxLso"
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
