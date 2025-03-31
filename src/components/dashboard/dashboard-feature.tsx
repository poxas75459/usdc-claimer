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
    "2HYvZ2gwhopyXC3G5MdAm1zH7Jj47Xp2PiCZBzMeYfnzZSSEBxn9M2C9kimkrz7aHBUdZaiqCUWRoCz8Jq2MHJwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bUkLaD2x3Si917sbdqe5uPSCTjYErxz2h5xAwtsJf4Ag9gGihdVXH2Fe9kan27Xaajs5hDQhmhBoJbuqHp6iyR",
  "key1": "3LLuSbvtcUvbwPVGuvA34M55xqhT6XNHPn4c4Gpey9vRBj18TDyB3buQRUqGqVHTBuLosnDxUqds9LBR4o3Fax1f",
  "key2": "3Y6dF9WXvgqkSQQfqAJmG4nmZzjFzprYUpFSZ7m6jRAg4sBfLYmZq6ZiERqkybqCs1vdZZksAyjw6u7qw4Ru6dj7",
  "key3": "iTi8mKk2ZkoshrEo8XB9RfK7VDNqZMnXhhk4bfN42tGY5kqR5ZPswopAS38MWrHpjjjCTkPXZdyFw2CkiNwKkDU",
  "key4": "2ZBBaSniHrpTTyf5EgZKuU5BDEDcEdQqTumYdtw92xEsBAdgTTTF2qaSPx32owkc16MPNB7EEq9uRm8xdDiquUod",
  "key5": "3QniETCh3J4wWu5Lm2GBpCHWLwEtG7zqJoCMtQgDomAPCDNFAP1c8qjVWYMLovGd3ScGGuiXjxHowbjxTHkdCLcR",
  "key6": "H4m5K8e2mwfnVKQU7EfDf6bxdh1sA1JwJwp6SKP94C8xZW6q4KKMWyaU5PPe6y9SYzkEz363wDWP1crAyfcvia8",
  "key7": "uhpFZ3EXGQLzfBthy6u4zWvRmV1vpGVZZkdpMKDSkixZx8Fs8h3FuCYhQsEgUufRwwi3pjcBN2CPTQ2v1KqDsEk",
  "key8": "4qvJtyYHgj8Ym1aDgHRYgPoRhLDMxauMd8VCXgfSvuYKxcppRGpFL7qaz4AheZAV2C55L8z1HPKpx25eAeCH53gH",
  "key9": "49yGK87XVrH8AKyG4Sd5X7dsjWdcp79u6XMMutBvTeLNRCq2B6L91jY1zuaJCYTQ7V8s82mVeTfc41zxuECFEyZA",
  "key10": "3apY56CyLDPVoDCGJEpgspNyUjUX9QNbwgkCGTFycpFmiY47LzF1XFcq3K8T7gquCm4HRHufz6UycwY45RzrRtqX",
  "key11": "67Nuorgqr2m4TvSXHkMqd4osYMWhBLEcDH5brE1DG4QmXn3ni4bxKAF4uryfNaeAbwYjeLaoSEYuf6F2Bh31Wc34",
  "key12": "2R7vWTNzLmnXoUGime8WSikw8jbzJRCm8CpEdFC2Aba919j37UxAesH6Y151LhTDqHp1GFAioKfrJxt8TcSy1MHp",
  "key13": "2kfP4v63AMuWdspPDnnyn6ZTTGeSRLmdrDvTy7238pAanb7DUBx2vnymcK1FxWg8XEQNy5w4pCkQGLupURT3UUGm",
  "key14": "5ZaQkD45JSofT1QWMX3k7dJ5tb1p9mZKnktEVDPKaxNpRWs8cQU83qLckPixZBW8gf7hAgrAomGthz8AS7hGt12o",
  "key15": "2DA3RroMUufH8cviMZY8StfZ12cbeaqF3tYmc4mBCYWfnMjbFugwqzNqgGFWwWNvRr3hoGqx4wHZ6pgVRcNGdeWr",
  "key16": "4ghGH4UraxQjit9Gzwey8TZ3oFK5zDgVqAaPALGpV3movELRZLftZLU3y8ZGHTVip9ZiS42XqEYQFFYz6dsioFnt",
  "key17": "23WTtYCkeDLd4N53rrCgz4VnbKp1BkaUjMXyZsmvKvpFTXYvNVwGbHNbSCdiBbWs4pLLdoBzJjY6fUnx1Bpygi1g",
  "key18": "3SJnR3yULJv6MwAHSjMWHc3ebw1qX4qn6NfD8NdrTUX634WGmE9L1wjpV2Uvm8gPMaVDNBJeTsGH44XCx4cdJ8GY",
  "key19": "2xfqYqPzvr8RKhimR7CaLEFdSc4eEQFsHXR7cjVus4s2Gy93NGWVMWRjyrPYuwwaiLzFmxZz4fzWMb7zrV2EUEq4",
  "key20": "2rcM5ytAyFjr2ut99Vt4RsdwCYntDhM5eVx9t7G8PARH42R6D426RKDqZfjHEnVXoUqWwPACouAHjEdpVnwbuZDZ",
  "key21": "bFKWxcPCb44wY1mr2BLipwvY8VGttB2DBrBGM5VJLpuXWCQN4ZNaZywZ8azFNzYU1cw2y4PwHHvbqr1q9HooGM8",
  "key22": "3hPGUSGcVzZeABFqdS5Z1EHnokVDRbftCqhqCc5UymBadHXyifQ6s53Umo6napysabzbtrojFv22XVzzcg4hxTy6",
  "key23": "223dXqW7GhbgrHUZ9HvdUXMwiWEopsG2htZvjU2LkLnCpK15BFWeqa3PA4SdYRQX4RCn6W6c1H54CyFwhaV1tZUr",
  "key24": "47a5zfYT1fiEdFSRef7N24dNWaGbsJi5iJu8KXGpcubjvviyjvjpDBUWDQtHNjRh6Sat9CGgzrkBJnqFsbWYyyWS",
  "key25": "2ki1dkQUFBMDCCds86M3nBbk2r2HXKnpNiiWVKNPBim5eFvLJxWqSqQ4xBtEN1e9MFZh6epy6a6MSash9fMhzLfw",
  "key26": "XcK5Pw7zta3ceyPrN5EdW11w9TSMBYivV2Pi9BEyGbtBPthVotJpffSBKhVp6jhWvp2Yicecj5U52HxpujaUVQc",
  "key27": "4fRNJKJ8s1xBAVX3f7XGf9KDfx1ApGRNUE2cPuyNaNqi3jrRQQqGNpiBCYyN5VaY3d5S9McEQ7mGWLDBQhBkT26D",
  "key28": "xg2rpaWdEBPpxKMb9C1xEbRZtRCPVuxEta1yn6rckL8QrMsuzeDNSbH9CNnaJjhz4nNZXeeK6vXBiM3V4ynFj6m",
  "key29": "2drjouxAGS6HMNgZHqKoa3fL7bZzeFC3up4zdfnjUtFo4YeRp6bQhYUCLBSxnRSypwMRdcrctUM5EGvpixgm8Ji3",
  "key30": "2zsVQRQ7H3zfss6hZRSojFzUb5nG7FZbWQ1ZirMr2z9CfpCRb1Lfyn11wpd7odprUjvj5weX7ccNBWANpfjr424v",
  "key31": "XcbxqJHis3HfG2wBbrcGRYXqkLZHA6J3ijFVcPfT2Rju7wQu84KUnzFQdavZVqga6SFdg4YWaHidobnD4jJGs3G",
  "key32": "4yqDmZzHLbq8gJS5eyVNfX5vFWvwphYYjcNS9dzriAmXWkhwq3LDBMDskfN98KSN3AC3XBX1C6hX7kp8HXr6WtUQ",
  "key33": "E5bQ8xgs6dq99GbQVJLVk6FmFGKZK1xhyz8h6NrSvhbKSbyeeSttx2zXYL97URYW2yjkRBBFeJnZDwpYKQhfp3Y"
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
