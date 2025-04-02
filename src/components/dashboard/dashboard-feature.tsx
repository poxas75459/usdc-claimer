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
    "4uTNHgBdAKZaKX7ApkmVgStvyj2SoADnB4gZS2WGTaVrz9CMn6SKhbxavpJHz8aCDC24SCb2rppEW4ipkXndELYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErVghVNTVwgKLJZhcJX9uquGGUfdZr7n4dMUxmETdfrQb1shc8upgGpn3nnkgYeprWfaZR4XM6R4wWvgLaxxSVM",
  "key1": "5EUBkVyehKgeHj11vHsB8ox1u8xpudS9ZxNKzbWQwr5Z16aJmZw2JzVpnb8TnLsmMr4PdCkYakQJ1oejnhc4o9Rn",
  "key2": "3Wjs9HYQVqfaQ9a3af6NEmfC8jba3CMPn31eDUmzVViFxAdKcEbz97oEKweevta2o55dWFi6dhjyMB6tVHp1otsJ",
  "key3": "2stvcuDfpx9jFzBhrri9KYbf9Zr9tr2DfzdYweGExuJNQZjfpD5QNHXYMhV6whzB44UY1hE1EXaKXgLM7BjnRNBL",
  "key4": "4XyuVBYYwChWULbJGp4HrtU5ziniThV7tdQrjLgu7h2W7eTh27G9T22WhSR8r9uuL2md2PaRzzcfBrWwReGsfg3Z",
  "key5": "4MXjdLghezx87hk2ZmouU2LzsdQgDqAX38ZVhtxwyzWSEjGF3FmHGCYHMGmgwM14MF6nFgXYWkfCDNTE9tVURayZ",
  "key6": "2vLHgKTaGSbHnApaWP8ocV6m9FU4dictxZEmKf6mc4Ci9jRZuWoP1ESis17o3n3DC54ktqveAMKASHM5oNV5DArG",
  "key7": "2LsAb9BA6rgu2PcJVBYx934ryTVmTHNqPuj1p1zTV6tFZq9XcXv2ojE5veFTYyNovvnEV3o191qKTugCnRZ3K7dw",
  "key8": "4E3X8T9nFiG3AKPVTnUrb4nw3YJvtpaijEp7A2hpSffLFd3YP2ZcVt1EPXppGgcjbatsoZLA2J4ueZnxKV1tpQmL",
  "key9": "5jqLqqFuG8b9wQB76TTkeEq9SfLVF1Ys89aE4ab1ncU9eZJ7jG9S18geKxk358QwzgSq1jhSca8XCEGCmYs4p5xu",
  "key10": "aGwAUWC6c9nN6XkGoAZAVcZzNscavaABxmCKJD51pRWQW4PAo5b4d8xykASZSLmr5V1SRKHYiKjwMDYwPEs9vSg",
  "key11": "2yz77dyj9na2qnk1x78edDVuosAL6vjVFcKh3KAAeS3BdTePF4Np6wqPhKXaXzVXrSGfYiMxAdQE9bVMTeuohWkx",
  "key12": "5W9i1r26pyziLSAo2bjMKfDn6AaCVAs1ypsbXZZKWKKJuJZfYJY27ym9fs9cUWMeP13KfQYNi5j53TKCHgqHFQqV",
  "key13": "5jeCr5C1CPRa7zWLZJNhgkFPXraFvPghv3bkLWZqRTh5qtpFUWZdYAAWWPP9m2wgNsgFK3A7nzxyCY2YrZtL5ms1",
  "key14": "2po6EB7cCyyk4x5YVqUjvR7NP6JMkVKw4fPBFTwXiMnY6eLGUabwLw7wsiDRYvxeAgewLd48Xev21wMceC76x4Aj",
  "key15": "2nWFiqwRf3qtcviV6KYp67xMjMgX1LQgDQjVUWrBGLmzFVwaa9V4cbWAj8dd3oWVAJxRGpQEr4eJSpvXATMsSh77",
  "key16": "3fw61knZhxPEQNhMUpAbY4orB4V1oEGBonQhposvwxmrZLGfpvQvwSiGdCF2bLs7iiFhGziwwHPn23tMq6Fjt5Th",
  "key17": "mqfmQBRLDdheNomZ3oTMUEeVarUa163FRGZhpnk3BAnMbiZhT2XbeJSMiBnrKxJKxZNtH3owTXRuMgwNcrny2RV",
  "key18": "4FqRPFYvQvjaVdQqzXTSRtwJCyL2uzB6jadwRnP3GQ285L7nLivcAAaQocZ2LGLvaKMZTBeyrJJ1LRTfi4PBbmam",
  "key19": "6388RdAPFZksTmR8P4gxzfHG6ZprfcR4wtNNPRaGZJQeYw1SdcUF1JGrHSR2BtxTMvdfVSUKKgkYKUC2i6ECHgRx",
  "key20": "2NPRo3adVYsWyX9RoNTwevfKDA7RmeWQLgrKrTqGxRtTDrkrKVcQzhNxxH4BgEx8w6Zv3D2KeeiFHJXo3BWPmMyQ",
  "key21": "4w2zpPimCbVA6ykvrxMb7m3Joe2TnLzDVDkYKYgfQ2mdmMfzW3Sxu8yeU1vRGpC2reEyCKWp5nZJV46CNrsH9zLA",
  "key22": "2VMPwmWhhfRodvHYpV1HCRKFKyQhRHX8Q8Af8MJ4K5qKNeTQGxHdfRVAtGrtohkDCh3Bx4iu8jM2yyFXWsygrzVM",
  "key23": "ocDvpnJ4yDjdi8siuEiFj2raokYBYbHraTCxDZ21uEdRbCQ83c9GSckHAYbCJRGQMUsybAefFYNcg1mGgrHnnnj",
  "key24": "XUVRD1Tw6hnVysYG3T7yd3Fzsfy1FcG6pE2qaMYygD33cK6nRM7PRor2JYWfFThnhmiRq3pe5JwhhKn6sZ622PG",
  "key25": "2xiYziK7gzBj6BDpBm2HRrMQaMoFKf1hsJJZBrEUA1yMcwq45HgpoEypCZjrXZmnQfQE7Ut4p55nA5gA47Bp7rwd",
  "key26": "WqmrSsURyAcRWLP3o3F9NDS5adHroWEiUkEhftB6PGTd3V7TkJn73Cz9ZbUgDwGUKYn3ySUU22QSd6WbMq3jr2P",
  "key27": "4jDT6BwJYpgKqvPPuUiRSoQX1biYDyfYtobShngweQvzyAo3CjTDwhGfUas4Kg1k6S8VaATgtiJwCFaPyPS95eQz",
  "key28": "gcrCyqyVKEznDYnXBsaRTzdsyXjUwJrMGz3XimGXRhuhrpLe1g1MMRyc2jAyJWbL8FqdN1azC6QWYb1x8pXWqVq",
  "key29": "3q2AQ1euiYPjfkH54WaYuPw2BYDKDCtK6TsCpDJ1Ty1qnQbo5sYpLUwqQyq6nQwSE2E6JDfyPK1cFUr7VmKxsPbh",
  "key30": "3rEUbZwNqoAkphiD5bnttZxhKTtfMKGnpq6Y31CvFDRCZY9yuboniQx2rc8HeamHF7FfufALbXviMfPxvYQN1MWC",
  "key31": "2NTwCdvM2E92RyUJAG3D3atXbC5VUBK2knRu6RThZNCBS8Uns6aypgPAfuF2cpRT2QrCm6NQCEKjzYJEqQmssxfP",
  "key32": "4tHA4dn1kMetzdTGvVDqYgTsV6zJJKGyRzyKpJ3VAe3iDd3UGBWxHQPXF1AUfF3E5CGsaTDhDsAY4cKbYsMSViff"
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
