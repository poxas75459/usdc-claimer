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
    "5hbKbCCCeVytm6jxYvv4VZ4uazfRveQEDZfxoLphos7VcDjZDwpr2S6KBcowmyvZB3jFaaSoc6Tg3oNxeubeoCgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qR3UApC7sJQDjWEPEnrTbZ5NY8wBvWSBucqwrpmQcpHLf4hFXUTgtb49g29akJye3c3y2MePLtHLhBjVbbZXDXr",
  "key1": "4oqPG5uusHcHhevwQ5eo45P9ttW48FSUvyoWHZxhgpQTJ8CFogh3wQe3PeYbRY3g9S2wMEJ69dvPHw6GnaBcU1yA",
  "key2": "5Q1cN24rWmhg1xyW4mzPD9fxD2oHVgvWHmebYskP673NKLyuqCjiM9JesCoxB7zocfAaNiC5mt21Tn1k2VGvRNcy",
  "key3": "5D2US7vfBmwWpPYRsFd92NZuyS2qTCo6cq7hmPz1ATaKJEJT9ybt9PsDaX3aS8K4tkwGuTPpvfShBpiHx4gf5oWR",
  "key4": "3uUCvzKVRs35ugFGD9YVtXwy1bmPCJYE71froghpk2kKfWzWN8xWDWmWQKDKpxNu92aALmmYqfkd3dYBBrZ3xpvL",
  "key5": "5tJdm1TxWSKtskxgyUw1VvqejPEupTkLrNQ8p2KPXtX5LZrsFzw6xB34BB4EgNgWVnozWSaw7YUVyMEr1XvR7KbP",
  "key6": "2Vq121ZovsCYh2K2STpUsyPWTfBbp5ZbUVExUAqKwFjeh3iKUMVuopmStJtKBHfoT2BMfZyyk8t8V77QK894AZY8",
  "key7": "HXqj6qGv9gwne2KjeKFzSMReBXfeMK3ySZKhxarYfM1d88f8demL7yE1CK8kXn27mjkPgC7qZpCfxfwkHbYPH7e",
  "key8": "35iQE6LpchdgpbW7tfr92BJFuDYgzjB2pdHp44Gzo9doYYBarSUY77E3tB4Cqk66w5u9RcrotN7xLpA6QgzBJCkY",
  "key9": "4LEkJSp2gdmETzm5jyVhzChd7UAJksN7mkp67y9MgLUPP7LbQgiwAV3twuoYqt4MaBE9vpVLqsTfPqTjuJMdsZcF",
  "key10": "PYaVzUYTbcGokpsL5exJAjp95iyWcPvfWjbBUy5GNXaGxUaqC9BHXKyhJ3cLPLu34vrR2tTHgE65HMm3tTJpFBW",
  "key11": "2K9N6QG1W5oj1NgyoBi2pGwM2YT9RbewNYsq44e7EYbBACeQX3rG54KUbihd5wbpabnpmVRUpT3jKEmXgtAneVTr",
  "key12": "3cf2qS5f9Pqb5onor5EnqcCy3gCGFeuBsGL3s6wU4xdTi6yJzqRLGVpetcVpKsUAjkUefDMRNPWv3ZndQwNr15Ee",
  "key13": "3LYwiAbKym2oo6EwmnJfR2SyBAoL5nQg2Y2So3djLAir2Zi8QpE9jyxUrnFAQN1mTfwA7vMfFnz937yfVcwiZfSu",
  "key14": "4MVDBVZuAx2CYwMsCMGVe6Cd2ekVBCuTYQpo6qqRbwUtkLrU3FLztWNcd2hwaZ6cSN4XbjwvPzQt8HsPPhhH4EuG",
  "key15": "2RGDKZdXCqkVQMdQ7L1rB6d86EbY7yysuNdYVVfcDd4TCcq86ydiReVKgJutDaLhovuQzxcytztTJ7FJH6rqKhSB",
  "key16": "3CfBWwTwzVUyibKj4JXpNYCTt7XzhFJgJKhVnVxF7qxGGoePKxt9wdD51YTajqHZnQUKrbstaSg2VsWrYsSRMhUe",
  "key17": "4qvk77H8XD55AjXzVYAM8KsDXCF5rCZqbmNaAuoZvdFJygorgyzziTR4yMVm5LoymBuh9Cb3RbK7BBTro2LPf5bj",
  "key18": "9yeZ8Erhm64QXGzvDbbfAHyqnsoCV157H1Jzf7gEir5KCZFuwkfeP7XvGpY3YUKbHNZNYy8hHz2hYt5jLWr8tUN",
  "key19": "3bhiFavRZ3G3uksUoJPpgsjER2Qnj2Ctij8bseyBhhj4Rb1y4AC9HmPrPthKQzW9imAJEDcG7BUyCNE53tUHMC6F",
  "key20": "5QrwGggohqJd8PdXojE4wY4qSgadJs49QHG7N4qVjtQ9USWAUH1SM6yyGfMSmJ3BewTYxft1LxhHQCJZRSBDrzh6",
  "key21": "25h3phquJa4gWFLHcxsM67dFL9WUJbzqkyWgUJ44fkGpMkYVYTF53oWFvSKvksYfbzwj9tSQfqNGyB1AeUHxvrLg",
  "key22": "3R5z4xnUTTyTT2kLnVE4JgBjxZx9xzVD72pfcbo25zVNhXUi9A2nfYwHytt8trbM3e2VbKWChuWuv2NL6HC78Qye",
  "key23": "3hSZh2YW5g7yTPfhezz5MXurcFdLF9QmDs7eSwTNh1eoGrsmkE4kdcDkbV79BVJti5GKB3C7FdZ8YvTtXgJLN9M5",
  "key24": "3i6DWqoiWMgdvx42q3E5q2RtzQpFJp4Mteqn763RWvrs9qGFWsDsy9HLF812CpXordEkLMzTTrfvuTqMDw9EQdgK",
  "key25": "4NFfBKaAYZ81fefMEF7vC4u1CgbWD7A8QQ3FnNWwJSEzvXaGh3LfgVoBw7EX2eqecGUzCPZiGgHyF5VbBo6Kderg",
  "key26": "394GfzmBVyqmz9W8285zdyK3j2WrNU7VqGwJZP94i8dMtKFTNaFirz4s5x4fwJ94MRTCiHnB4wrjjf8m5EmP7Tas",
  "key27": "BQGo36EWobf7FXMDXh6nmLL66tRziVxSbAgg3J9TpBQTXiiovgBfU1JWKmJbFdv4G2PcioMuDUNCyAscNSBFkia",
  "key28": "45kuQUESUgFLPoRJYqZECpxNPREdFqN5B7fSEWB7GhQJaiCMZX7A9nA9pGkDWTfKgyhbse8S7wdsxzsodo32F2bB"
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
