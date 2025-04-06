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
    "mwQ8YQaSho8eJFPAPWaW5Esbui6N3EKweZHk3JnXyAozTLeM3y5ndp1sJVApYrJr9RJxC21XeohT8j4ezs6Mwzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWpkDKqBBPmYms9YKLZ8p6j3rechMriYfPvGjGqyxwzKJLvfNqq4fvbxtYEpdWP2m6EwcjreJ83dgwBhh4uDMAy",
  "key1": "bZohUBA1V4oN8ZN9HsESLF6GVC63WWcrtHKTsnguy7XUH2Swefkjuaod6wh7PB6qBrvywCnpg5n2dFakZyyKDMd",
  "key2": "2xHuEUncU6i5myjxicHJya6MRrq8LiNuJ66c9Mk9C5Bqje3CrkDQ6hwrzxpHdVZpXg6kNkCB7YBGK2PoRAzTDiCf",
  "key3": "4wG2SwE12gnwC7hCQjq8tgiAkbjFN3FxTuTT9Rpjhoz8qM8oPEen9zTcf24mhG9cHWJ4ehqyqa9pAXmLHjScqwbm",
  "key4": "gnZqayRGymfnubwqTfTXGXQaY6GxCE2omvmRrPigQTgPQ7ipdbXUYi9kGFcGcNP8PE3LWqffAiSixSjkWKFyfno",
  "key5": "3fLZKAnbuy4LD923ebC32nFoiK6zMYVrProDcdaNPi6SUGCKpMHHXMmg9BKqKYjB6CgqjBdwJwmw9CzVNHQcL7Kx",
  "key6": "2qLbxyxMT45BC7xjQQ4D7pfRZ8MiXLzHW4EhnmzBzkJ8XdsGap3K1eJwCPG8kysP8KCu63brsE7ueJwsTGVZyj8h",
  "key7": "4njTm7vaMJGtPDY9Y5VksNrA8gHyHrhvzPgJoUDUD4EV8qG5V2QS2PAArmMXoeXKumnFMfW2Xerhsmx2sVe6wCnw",
  "key8": "3N47T691uv8po749s3gpKV2PLXDdT1HTTNQyQ5DRzGw8yWA3ggYrwSV2Dkw45vXfjqhAt7Mi2QeUw469QC9oJAPT",
  "key9": "2RJwS74FZzqdT7AAPLmDPY86EzEvfyF46hFNru3SrmX9KAkRhbC1R81FgiyJUxdJu3gvzZF3BsV6LQ81GFUBqso9",
  "key10": "bV7oUL3DMQ1qDjqLMFRatRaesSr3qsVHV2RSZtb97NzkDE2MrW45jJczmfD6524ajVP2Xb4GHwvuQFgu2UPDR72",
  "key11": "4mw4CzF6icuF68HYk2mDoMhFZZ8FhiR9yABnmYpKC2bupGyowR61zepBbJ7ohstaAge7bM92haJWCdG9eAGm8CDx",
  "key12": "3ikKRVR2kjcJdhxC7G579kmWh4Rmj6vxERxfBvh7g4Wtcs89u7HSEBDdGQpwjRz6SuKPt8LaXEnpPkmBtRHN5tgR",
  "key13": "AXUunf4ga1yczieo4BCxveDxuyDZyKxme7Hs5FiBQ3HazB9a8yphuZMRXi2XYaQHfDDVaxqSvUKu1z3G289qWfm",
  "key14": "5QLH1B6EEVmzNBnMnTBuVzscawr9TvrNAQYBt4MuiiztNACFsK49cNZf4yyCmX8U9DryFrCnNiKQo4RGc3m9HFN4",
  "key15": "2G7QMVH1E8NHuibfrF4Asti2eUiPuo8LfNpFXHecw5293Wv2p6CqouhBQXWuqXPX3HqRJ3h55i6XcCgvDcpyLr9K",
  "key16": "s9HUQgWHCoG8qJMeTf4kcvuEzHiU5S2wg8QBE4DtCYbPBPLMFZroZvEnQjyvHysYoMeFBxtmGKNXtUbi8VCRT4N",
  "key17": "5xtaK7kdhyhsFabgm1MXhuzLeptG4GRBtrsZsRixyJorQSh6yQJc9CswdfVYdBepJLwA8jvjadmCwyoRSSxuyCw5",
  "key18": "4qwXFNd6MRM5zZeTD5dU3K2Hbi6oxJeJstyr4iPodukWuogxFe1yuGrS3EHuKNSHUzVh5xHABggTNZfSgTGac1vN",
  "key19": "2ExriZtuB9r9byZPoDPK4mtrx9N1Pm2LnNaGhxKhtrNX6meBSDiX5KpuWCytDc2FnijYhNwx2JobaGkpGywK6ghh",
  "key20": "371258SoYgj5GUHU3URawfZh8ovNDFhi18pAFQ7B1Ed68HmoUfAugAtNcUbenWrYNFWn1KcY8QRybg2CJ9tnLB9k",
  "key21": "3RF3oxouCdoMdTDcBvgmvbc5m3X6BmBdNmTAHw7cphpejLgNucqmWZLguTXTnBbDsDPL37TmjnMiFRLMZhFn2711",
  "key22": "2Rip4svgjzCbWpnXtk2GxShafyEqMA19SZta8NHQdTebBJhYTREM1F4wCULAMrAe2s7zpWnBkgvmDF6LiXqbD4xM",
  "key23": "36uh5vnq86bKKdRoaejzJ4k17pfcuP6XkhWTSecoy8uTXU1FXMccrmyUoEJNDxZxgPiPT7tpLHSHkS6H6tkKTiEn",
  "key24": "67Ci3jER8DnbkhnrGgSmCS5t7WvhPDUxvcDu4qSMzT4n3W7TwxP39Axvvef3zjpM9Aho93XD6Wrg4zQBRd6QXHFd",
  "key25": "59YKDdiuUqXFu5uwtBc4T3R1szUxFiLaKab9acBddfrEDE7wQEHAZzLHQ3tcFMBg3svMgLTPk1VUZ3B2HE6qsQV8"
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
