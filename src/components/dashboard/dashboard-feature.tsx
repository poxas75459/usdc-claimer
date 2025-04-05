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
    "2i1yCrzUzRYLQLoT3qJ7E5TEfv8qwJMZ1HE92cBKtLQ4pWnDKi85ta8JKgaypsXM9CKSj2RsgevWLyF7NaCo2xKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVeypXcqk8n6auAa19rDPf9JwrL21ZV7SJiHfxS3fCfbLgYpHSLfCuRqgj9R6LS2wzgvpczuRP1eFKcQzD5yDaf",
  "key1": "3KohJkgx1twxEEZUvEWv6TsLR8tsKr3Ea69iTV4KzNsndNhF15ojrd9RhKoE5C2yEQ1Q85Avp484ZJ1NwiXrCysP",
  "key2": "34khr9cqhYB2tkAqCCRzTbStMmLe3aWZ4EG7YqY71C2e49dE4D6z2T7U9aSrhPnyZe9uDz7RUkjDWcX84VJmhqqi",
  "key3": "4NdJ12NTDtYjA7mSeEfUUCfveP1DTx2TYNq4WwYxmNUq5c3yH5J3CE7EU3uCvJekML7QpF9rMhpE3Pu87c6nFogA",
  "key4": "3p2B3f4EVrLDEJ6oDbGS5B6bJtKcioQnoPo78gx9VXU54r3u5gVaKEPxMnWQMF6H5hPFe7EkdMc4EkQHnnwrE6J3",
  "key5": "fwDG87C71sXTiuGUNVdtdGU6wMbUfJzwXpsKDAVoYfYUuprRrYw9kr2PfyEPGbqof3kBiWJT2RxZuS7CinMVsv8",
  "key6": "5G8UrdPwN4hpLALJaHWT6p6xTbh3PkBmK15QbrKf5i4Yj1EM3uHkdHBJhVDu91ZAz468LCejbt8FD6i9yzaTgAhj",
  "key7": "4zorwXjcu8oL4Nk5mXBs3vgLtkBGWNkr5pXmN7Q33AC88N9PbppoUiEFLJDqK1SvBLk4ZArgnAhJ1CMFtjmtsenT",
  "key8": "2v8D4vmqLLzUf224dGbEBx6pjkVb9ngyzdCitGkEDLK1mqJXuwqykhHDky3uJKipxMojA9NYLA7sHGRYS8VnByhA",
  "key9": "664dKzAsAtz6Q5Kvt9Em23vVTsoFkovdsQ5qakPrxWgT3N8q3wUavbLV7fuxLcbA6mC1a7V9ZXKzbzsEb89qa6JC",
  "key10": "3CtX7z87zgwzM6mmqNjUSkdRn8B6DHX9tCoDZwCLyzAN7WW5XAGzwSEKakvbYJn3GsXRFnjuZcsLdJigHCUJYdMB",
  "key11": "4zfJnepPDhD7ZJwunX7QnJJjN4Qrdp5MRCGUvjZTDFxAriwazdPybdReV7JrXu19amZBbYfBCbdbwMra7dbuMDTE",
  "key12": "4eGva6zAYm315qdfydDj5A71GdGrbKQqzgHKcz8T6dxu8r2AWNKd2Y64J218p2XnQ6RqhF55FjVmfKJkJTyMzK1X",
  "key13": "5rwJMUS5CzUYNHUtvLUEHpTFUgQhYHPvLDA6EtjkETxq4HH1YFVzSTt95hTeMpDLzjtpRbezeb7kG8aA9ku8Fz61",
  "key14": "rZNBvLtDLYr94YzxyiGZkNhRPBVf7smPf2GXi5r5McyXSGuDfiSpsCYqxPpGUKXQ6Xox2bAbpnKTt3V8hjnwRgx",
  "key15": "4ZfuYD34bkYWASpUfKPdrsNCKnSxHeCrpDNvsY4fg5qL7wF98GsRy62T7194iyqKXgyPdHZLyD8BEesy6zcJzfjx",
  "key16": "4Gjz5mAoMwia1Vx6E9ANmyomSDpAJDUnXaqg78ZpACBhHwmjBkH73wQ4yDFMwhE4WMBJRtPtA9wBbutbXr9s6mjA",
  "key17": "YTvP8Xv9zsqZmoSufgYSjUUaKHegn2ytYDZhcoToq3zLxdW1FRQoJEzpogjuRQ12H87VCHzkQUX3yopxCJa4GYN",
  "key18": "4ANahQUfQ9FHnmePFvkfsZJabNmsAqmqXNCsSpNWa9tQqHXSFG4iALCmcYA5HdghhHEfNY15Qczcqo35z4TAfVT4",
  "key19": "3knvhnsMZt4RZXfjQobfQdB9J76kCC1u3ma839ByxkHwYZDcjrHqv45DuknTnsWij3f4M1MsiP2Zi2kqSr8hnYZr",
  "key20": "4ejGTzbz9zKs5pmxDYwRGLgCJvkSLq5CpAXaMe4rD7qNq5mzEaL7VzfmurqTSuxCmZYaSe29BTb5MfrKPNV9UvSZ",
  "key21": "5m33tErcd96T6zpo3AAxJEgqpp4KWkKSaHzrpPTubCiL27f8Kfh3PjarCDqkQV7S4NkHCqjK65QZMFhA774fJUzb",
  "key22": "72NanEmW16d1MJt2VkGigqQzHCPKDfJBSXuKfnCMMDCtBaQzkYHKsJfPQJYrRrGgk4qQ6H1aYXcf1cJTNhqPG19",
  "key23": "5ASeAq9c6rffAVV9NpDUmA9fsSTo4Hpi9C19jp1vkMiBvyJga1RGxFb1m8kRq3kvMJEh2J8Ke5Z3L6tx725rdSYV",
  "key24": "3xeoEz98QuutSVs5LeYAFWRdhFEreLtBjBMXPRH1NaiLJKGjW87asLw7DTJ3uXU2Mk6fG9LH96tZV1XwFRc7vGzj",
  "key25": "5JZh6gGCtSFKvNbNeQs8P87f5K9ZcxRC8DNqpFPxchp9GGfxYXm72asu8fC3N3Su9R7gUpwMVds719jT33w56rve",
  "key26": "SYQm7JUcE7RNTY4STpi11coTt78quVAi6rpaAk4jNaLpoqYeyAcxurN1sDY7tQ5VFp6kin2uTc7VVymfrYaGKHd",
  "key27": "2yN7MZ2XphwE4LwcWGWJq2g8C5Y5ogCob6DrUy6XNW17fNRSPz2Y1k93T66jEeiWnjmvoTnE7gTjrmDuAsAPd4a8"
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
