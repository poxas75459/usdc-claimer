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
    "xnnMPqH1WmHfgWBnAVrp6CdG3Ht8xSiDHrxYQTruRE45h9Efg5kBympemUUyr43NMC3TZMycqNqdHdNq5uiCfDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSseknXZuDQgtZ9bhZXY7zXWVcAh3BgRmCxsB6UEbqDfegTcN7EWgFSRj9xb5p8i2jgTCtDiHiee6pqLmvjMNwu",
  "key1": "3iHwQcYQgTS8qRPC7UFLz4hWddDPr7P138E1WxBGXUpPhAfNYVa4qWdqPuHaSKdeAMQL2XnT4jcUhRD86WioboSn",
  "key2": "5K11Y6F48Xth5EEPNCh5bP5T9nFroJbckvT3LCUpLNkHq92yYqEQFhsJ5gL2vUfLyAEwyGeZF1xkDqMWaU8Goggu",
  "key3": "5tmpmBbu8ZMKsLy1aM6pLxmf173gyce3G8VJFFtfCtiSwXcF7v3M84yEdELTu8ECHuoXKmytASjhWzjkJuGtDzEz",
  "key4": "2UpavEWe9NoScVC6y97GDnFdroriQRc8GJZY4LfukPnLjS9dzisa4i22TrGju9ScAnthJjhqpij7piYVQERFBhyd",
  "key5": "3AKFE2zo7qqe8CaE1dCg9ynD3KVvoF9cBwn4ME4ZxXEnVckVxniq1XWfHr1vDvJJL2rF8cePFh5LVwWhzZxqZ9m8",
  "key6": "48uKVi1P8HzL9bxK6H2fGQRmx4yAPuRCvPD4SWHfttUFxAGA2QWNJZshMkTnENDK6ddKBjSbU6BALPz9hjNf2t12",
  "key7": "CJW6HTShA1QHCuiCADLxs4ndxE48HiuAiH4U3NmkPzSk9pWQSY62vcJy2UPWJVHKsTYbBpM8qhmNSnjxyp5GWnn",
  "key8": "5LHrnP2VogEH6ndVAKPFtEMwZ5qEaEefkX6U1LeXHhBV2EbNn9HNuSGSsVqxs6Qz1RSJ3XcmMRbCcgNJBiZXqXhG",
  "key9": "GqEw3T4x4WJ9ZutL4vxUhzE9AX4evptDPryKo28MgCUj5JVx2nd85UcMdgiUuXX748ngythVLp91onHKPTuAPA8",
  "key10": "smKbgvYDuGixgsnGf3EALQPodPNb1u2ZzXeXK3UXxU32kHrWAnenWAkpetVjPxNsFfwzLkqpPXG7V53TPrgAfW6",
  "key11": "cn6uYEMotLFF6YFSJGRuz6P2caAU64cwqy9aBAHVG1y15Qygs7fCzVXHnHJsAvh2ZVzKMxZfgsM193nSNrf1HRC",
  "key12": "2tgqRb6TfakLMZ5b4UTKYp8xNJDnNHNdtQhHgxZsKKCiVs2s9di5D8tJxkNm6YzsuAEW9wzAmWvWdFdZGYYMMwYy",
  "key13": "19w7zozGas3z9FwwwikPuxWJx1x7n38un3otgrdW9fsJc2ZE4ZAsZrb5CSs6QzHKe3WK9JrUAip1ft6LRv2GHwo",
  "key14": "2S3eYsZNKkRyquR83JXd5jd2at3ayMjKpG39tnsdsK22wNZQUuwQJF9bSt7qVFPuMcAGrCV5z38sw94BnbaM4kpy",
  "key15": "3RM3bet5fyPDa7j4SZtHUM9fKNSK6Pb4NiTKCecaWLdrxgmSNzDXQdqbTZV3UT7LoQGDXA9Pr6ZzQRjVc4t2N453",
  "key16": "4zksSymK8Km4Xqcjq9xCWp8ggYWc7c7HvHVN4FdAeMkVdc6mNR8avwUiyaguqNhE2EnkFUs9AMTcoyU9A4DpxtMr",
  "key17": "62691Ugm8q23sYtAojg2dFW3jzw5hPqFCVSf5RiKxNJDyufdYVAYrM5WETtpVNvJHsnMCfP62z2z9rd5EVVQ9c7y",
  "key18": "3TkgSTEpx9Xs9yxDd9PUQGGFj9eJ71HiufPn44EfNJvCuQbhuEiKCE4BpR4NwUgDocT1sacntFs6i14SejxrZ1rW",
  "key19": "58xdm5W52ADWTk3Wn7N1xgd97FvbvEPWyDPvrYHTxLmnr3u1KJVWDYfpbwkRTK1KCVUn5kN2VvYhnJ3UgMbiPVrM",
  "key20": "3P24zQgqzWG2AXtMdAXANpZ2wW2BFpzgtYe2SDmGvDzuC7sri3JZTH59pKnRA4XCCmdpSphodGBsZniZGEkS6ajv",
  "key21": "63LexVpwpVmahGyEaY3oVtaMSRh5J6egEXQNu4GTDmrEXreuC1kiKsAgdGgMXdcGSU4vKW7aS382JiwJxanm9yyo",
  "key22": "5eU7V83xviueLE6SHCwxwQ5XEGyZfr6QmaKghL4sJABqFnS3chW81FSWL86DSRxDeWcBKgEhdRGTJGiDGaQz15Zd",
  "key23": "4NuxkZy78yW51mH2bqKcAvJz1YaSjpVQvXE7KRHkL7XJMWQ9xAyPBvsBbMyfrceqiJ4Z5p65XEUvMsUqQHYykcyY",
  "key24": "2cKZbYBUvh3HLnnkvwTNNQR5RQTnMc7jMtpmhLicYy9JnmhJPbVPRLPuRUqnLM6EDhxuzjjR8Hmaqdi8j2LQ9Mby",
  "key25": "5pYiPygjhBJVbHZuCmduC2uox8x2XABWC5J44KA6JsuPKnaNiumXBtTu4CSDkRtJ3CS1omQxZ1dMPfhwu3cT3f8S",
  "key26": "4GUFJoiKNrH4usuV54n5GMh6kQMjUW5eeCGHXCCrXxDwzCYyz43B1ZdbYhnywthbFhmHoiNejM9v81Z5nPiTiDvL",
  "key27": "523AU5mk7gEzjzbDUpqFJwYkSwGcEqZMxb46n3MKX3fPbCKfnLBnupNxZPnUMwc95UBYU7qcxAtFrXs8DNdTa4dg",
  "key28": "2rY85wq4bqxASx5ZNkMyCqztL3dmgQg8MANuqDT6m3aJGiQ6aYGu15VTUyPfjmjbh28oBbv3xhoH967wkVszUgJZ",
  "key29": "nZQpwFjML9Bu1gkG1T4p5npBHwkK6sn4NJdL8MTC1RT1RJfsS4o6EP1AQhoXkkUsLeKDN2QRDQMhG4frzZD9F2r",
  "key30": "63eAGqZtW4DqXs9vnRD98n4A5LsmkpvyTMytUA65Ncj6awgCv7CMbT61KLLsZZyujCmbmzphCXg1Uf6379y4mbca",
  "key31": "yr7YqJZ5FLQkUhZLi7USV4iJT9FVCtXkQpB99vcPjUUYVbBu5cfmHH1rrXDmyzv7EedKWDGFbuvRqWXdY2HTWNu",
  "key32": "4dtfWKrAzu7ATqYR26sasd2g82GMu57FxXoZXSSi8XDqHdvd4dmywUZJB5tWEtXzzWqAtBNgQLGEJPXHedWJYnni",
  "key33": "57mC92PGPo6jWjm4GNnDQ7TWKjYE3VNp9B4s3BpfsGqaKitgp3tdj6kbHdJ9ohX5omc1LyfCospUBhaF9MPXSLwn",
  "key34": "3oZt8WgYghCLJiahdGKy34XYXukeDeNTFoVuLxNZA9MshtJg4TzpSRioQbqAcXBGCuJMnAhR7diELzYjjpAoFw31",
  "key35": "FodannbuBdPEXqUsBsqdwCDutsYLD2pfTwHTPGCEqawkjbpMVWMT7MXrHznZyGqFspXdCiDsDzSSgK3S81WdEq6",
  "key36": "34SWYNHDt14d7YfNmcqYNqsq8E79iJFeZBHiDWibpn5EfcRgB14ir7TpSGiaZbSqhLKDsMHk7tXqPXd3VWZkDt5K",
  "key37": "3QmgoMrAbNMZcEfvv1aGefdgtS1igZy7cbrp76gVwcZXDev5EcSCZeN4pqsvqutvutB7FUQQHzL5BveS93AnMg97",
  "key38": "2omkfaKAnQBixeifzKap1QdnjSMKDbVPo5oibni4Mu8ruL3FHkUFU2UUJsgUu6fxhHUGJa13ds4MebLK12JLtxEK"
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
