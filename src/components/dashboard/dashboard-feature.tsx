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
    "4wubgWwz73wGVJusVkzSBzSNW4aWDVoGDhUxFKmuAThW5RWZ9S7dRU35i1ytWZ44pCeRoQSHv59TTuVjkXGkYexT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zismkijcYzKsxwaUXqPJppMGCZSGS5LBrwAy13yCQ12GGa2mHXspxaNr6CkqjzsXBtoqdufRrtZjcycaPVEP2mL",
  "key1": "zXWZqMYo5PETDC87u4K9RneNQwzd97yrn9bWY8e4RCMFbRmSqrZ2duHenWAMmcCX8JyKa55W2Novhtxdhd3LPkV",
  "key2": "V3Kb4BH9FHpktiKU93rZp6sHkzJ74ejXmqseLcdzEY3nBzcW3zm2VrrZgYZ7UgDqXeaQ2E4YkhbKoAjptjLNTAS",
  "key3": "2FbJGCZjnu1tRAKvYkXgGdBkGCftTbNsWBxafRjuSFRN5rr3fGTWVUXNy2PwAHF34CXGB6o53brKxHnm6hwa8rCM",
  "key4": "23LWTYzd6Hu1nMp2SJQBKWVZxu65LV5asqVHmTdBxEDRRGvLeKAAvkHDcpPLCBSDuXrrAjvibu4ztg877RwR4rpS",
  "key5": "bY8GowdrCuArp2F8ok54Jng4shgjAo6JxkBoJLwicFnxiHnF2YJKttDLdpMF44RoqcEP7xCM7yswds15B3YHmTi",
  "key6": "qpa6eiryV9UE5z7WTNybHZic8QGzZE1F1WLeL6an2Psw1xxSdwBgNQTw1h9bpeShce9rPGGXEZ1U21p2G4ee8x2",
  "key7": "p5yUNNSp4Nid9vEvTLiJSNBPzY6QQJsKSB6TC5xo837eiLKujv6MrQQYFoJrVqtB6yjUEvVGtD8UzwJL6aHfqsu",
  "key8": "46aHFdTv34K375v16C9WVN8LRqzLPL69n6pqX6yHEc3KAEQ3aSgYZtfGRaHdDn9QVbHjnJDTZmUJPBXbYExGPN9C",
  "key9": "35qTGbBD9MbpSvkaRY81TGs6fLRNDyC6Zrycjn6MtjM24wTMnuwxeZtfmMAYNqhF3BAjYi2g56nSddCSSEe3VUm9",
  "key10": "DDZQ4rUUMUnd85ckhFHdCzgBhqYmks4E7qCDgr7XnXV4jdATycMwd9RdoXVhS9LfkKxvo41cigzbDF9tpcuPktf",
  "key11": "5jcdqw5twSgRCGkiiJyrXU3SjUVvCmaXyde9UW6rD7FzJ7jfBCNVA7Zvzva8426M79sMaCX8397pndVow2BSmNxD",
  "key12": "5pXP2ZLJBxyepWznjLhh4FGGdnXMN4Jf8JrZvnYhEH7kVb1AWPYcuVr7oYuGTFhnfyjVtDPY5ciFPsvf8gzg1daB",
  "key13": "3b5avaBi8GSHu5qbgSRUpFAHweNU7dtF7kcFdcu62SkQ68ZuV5b36FepxwyWGV86qXDLvTfs8cqY8Dmr7yhnVjpD",
  "key14": "443ndedp9D2QCrvU6NjX63itMfsvAX7WSDuzLtqWjCmis5JPLj8s2S1XjNUJ4DRVKjAwRWNtqUDaCiUfuQNQowJT",
  "key15": "3LeEFebGm5BmLmEjNJh2zfTEJLb8oRcS25BFAhtVBGWqBKYqpK8Y7xoFkPPgrTjUJ3JGmkPRAA7PhTdSudC8Pkz3",
  "key16": "3VeResRZgMYu7DcVBuqBtCQhPNr2LXgLHfWGrFqy1HYKmxcmJ6vZhBowfAA6rBiVy9gjcWTe7d2ptt8YUKBEa7Ps",
  "key17": "4JgZhjCzZ8WiKH5qi11ouK1RxDixXY8cAGUewFBpyJMjKrnZecA8KDh9xhM9PTEPZBuEhsm5iX8n5VK5X1vXKmpf",
  "key18": "36LjCKtMT6vWCwPN7PDViY2UvD9MKXUgSB8ALwE76u5QxFjQaH1vaNuwYKDCxMchtVN447KM2hC1tBXnRVEx6BsN",
  "key19": "YW9eg6zCEsjXKtcaKMRriUhSBiiK5RrDEdG2LgJSZvfFQ8sGLYtiFfyJs7NdL89kC1tMFacC8D7EopQeMiZwNzN",
  "key20": "5fh7e9Q7xyW4AQeiVXaxir4XRksJ44KDwLSVe9Kd4e9nNssqQp2S2BLLSUNFurC1ZQBtHGpv8F6hUabtRN3vYr85",
  "key21": "5Y4rB6E2eEunfMbFPQmoNtMhXFGgRyoMEahgywnd56ATHgMeVtSGNzuTwCdTu6EU9W7u1vHXYgnwYqxTinZsTjJK",
  "key22": "2PCkKDv8nqBKjX8nYGw35d6xy2GaeRWTzzSHwxH22UCBMG7W2qEszohX5U8Wd3PWNCq9LWKrgfHEPpRiAxt8Ysn2",
  "key23": "62xABXKqh6VuwqzaCfpbfPsivjJLTBZf1HL86atoJQhgYsxNZ29avR5FbmjXBCLRT4YUw2nhhCidkiMnGmQmTPam",
  "key24": "HcGgJu6eTWfki9gpwkfmobsh1nCwxvHMhQRq4mPYvqdXxdYEXqMxbh6pMhSWeGSX2wej2nXBPrHPpfmkpkeTFHC",
  "key25": "3XLeYi1gqsHEzPNekuThvjWmP4cRWrdgYsdYYQ2pgCJwGGtWEvQkw3QDEAM8wFMbVjXsHF9ccbH7cSF1dBKXeBcT",
  "key26": "jW9RyHLrNqWzUoJ81s1oMYQHfJa5GKFbGuysDfyYBgoe9zRdZUcQBrEnYxSizkEUv4qJLLawAWj3wYkXaMnFJfk",
  "key27": "2Gh2MZtjcS6gUMUAR8PWXSBrvrHMwvpAFbCV8kQZi6DkdmooLSf3fjkxbK9qJHpQw6JZEeCwR284n3c8zSqkre1z",
  "key28": "mgAhWW8EDiJ1xZ5DXogRuZkZyg7ZU7QUZAoiLZdfmQYSJpi7vVe7PKFNFD5DZkHzfXZSZ8rrLttTJUBnbySVB2V",
  "key29": "2MCVr7frqHGP9dohM6tF5J4n86bkWZpFQxRfyS9Rp7ghbXVmBy3BHDtk2ZDe6Ug2utckvZcray82QZwUn4YJxPgq",
  "key30": "4MetmULnp22cxz58QjhaJJ48AF3MW7aaH4UgnzTL1LBpxtRxjk23s267NcHLU14bTQWDTVcAGP6ASCRWMUd7vVs2",
  "key31": "4e9Dv6L9mFUVncx9kzN4XKJkgJ4kbcUGr4LEssEJ1fcawaqCwSyG4WQigz4UoHfdCUPzNQmmwBA7Pzyrvn2C3uxm",
  "key32": "5VqoZDN17BtL7D5WNW2C5CB31FtNjdK5cYdKacqtRSWxx4WkVP97VGxo1BVBDe5sxjDBS2XSJm95jUFe9pAqYrf8",
  "key33": "3PTLZFpEg7vPuq6Y15gq7yLSZZB7cHZCeKcRaDxwoZ6AkGMaAAr9Nt575thHRSgeE5DmGn3ERB1GsVoHzVSPkHME"
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
