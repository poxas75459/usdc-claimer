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
    "3DtJVyvyhmnqWXKeThZecy43NtzG4XFfzSWqAf6M4bHE2BEAbvRCcZU9Bf7F7wad1Xso7nbSkN5ZRPbsKVz26HwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sqm9dSeS6JM1uSYMN4AhjZ3CstWjX1Upq581E16LqtSxRqm1P3wgiJ4eSvS3KwhRFVAhWE79StgV1TjdUzb8uVB",
  "key1": "bEV7bRZhpQ8q3t7ZLd9hHKVBHgaAdyeNXWYaXf5AZGRrEfkuTkfAJJcHif5Thus7RQSLCoDvrkNXiSJyrttPFYP",
  "key2": "kSYi8Wx5tjdQDQy7ZjX1A4tPtMP9CVyLHMrRRHLRgiQPFV6C6e5Km7RF7GVHqAEqLEaGBXZU6WyypZhYF1tRFFx",
  "key3": "Y3xYuro12w1ZeDa1sbPa1fmUspw3GSUTMZskHWoc3G4LJ9krH8d6iCSuNE3waRqrZPdpu9gQZrtbBWFdG5D97jh",
  "key4": "3ajrdRQHfdzj2u9CfJdwwfdpUxPwUcsiTEi66XYtLxGc5Dtv2E5Lv6SJrpw4Q6w3do1JJJgxuw6pS9LzWCD9tXfV",
  "key5": "a3xcKuLPxVdjPJkfwH5jPP16kqn8jH6anVEiAJj1dzp1Fzr3vMungdNCVWaYPgBtCGgTN2JVGGR2Qi68pxNWd42",
  "key6": "5cDdjmGvxfikrV1N6hQM1YXh5NgbHSnnjMXiAHNtbcW5jjgJP4XjRsc8QdtibGSXePvsTZmipN6fxkqpCkUNB6wo",
  "key7": "4tYYNQhcFtSMHgodZJsxU5SickyqCQBe5eeS1MVSXcGcjuv7sGwKKS3Y66cJ6VcUuKSce7YgJ4N9Gs18PiaR9riF",
  "key8": "42w5Br67UHUh5KAqkUPmkwvx5XT6teWmyrxMucHuih51wi3r17d5DkUcJJQuC3ikNdqLrPsRxkcusmQEwqywTXph",
  "key9": "3buq8BnsJyBTJGCvdZgPuD1tpsmKPfvG8DcsoWRVz7tf5H5DrmkZV141dZ4eYVTvRKer3NZNSfmyR4TWRNaQFTYo",
  "key10": "35YTtBhfkZotwu1hK5iNenu8KyyCytxxBFJKcRCZNYN2BFGUqLS5LhUiSFojKZv6twwk3jEL8NfZ7wsZd5LTHXNt",
  "key11": "3reH4dQTv5v2eZj3brSjfk5zmgA5ANSxXox9g37CY4corhgr24cN92P2NjhwFHnSSpf9G7S6ESVhbZJXTmohJ1wW",
  "key12": "656hfu81DveCb8zh4j2Kxm4acvfM1xyLWStoyFeYq2GReGziTwkutPooSkCzw3dXeA8JEwfKkpQQTtXkUXxPmGSB",
  "key13": "aXWbztrwWu9uBaoMDjyfMNDfisFE8ExcUt34f9bDZoreYCAXWVGhQVMVfSkbVL89G8g77xEY1wi77zbUSbCJjmn",
  "key14": "59SS6XSS7ErZhuh4Vi8vrKLRF2h4nrnRnyp4QDDrJxoi7FYf4CJouhK7YL5TXnA8mbhAxSNz6Aio9b2KMdxphdp",
  "key15": "UqFyWayQ7rUi2SqEQoLjUVryn2tA9ZpcPkRcTirJdVDnHuUzihhRf5mbDdLPCJxeWPrVxSH5Hi7VDnB8ZXddrkq",
  "key16": "5K6YXdSzE8Z9z7fXz1xhNiir1YNKSx5R61CjJxJ78Jxxzo3uifwy2y8LNpPLEHKAVbNuvpfLCVvBru8gYGT4rgDQ",
  "key17": "5Qwrymnas9FzB9wP3pdXhyogbPeL7QGLmLw858JXrQFQXwoNmhPZzCSwbrvwf8thWfUazTSWb6LqEFhP53q14S51",
  "key18": "58A5DNBS9v8RuJQGvRSCH7w1PJUx7UdYjYXsfZKsMDk6ykFowTwk22CY9r9mnPb5U8oCcPxdQfukERnNgueCss3v",
  "key19": "2ZqDsMCcBoM1Dx9jWcXSrDqE78WQsyQe9ceLKtPnM15dkQnAKAJt89KJQ2Gay925xeTvxbvGsgFHgdds9EtqAMZY",
  "key20": "5RaiZ9397yWxq9iKSjt3tUatqS12uBLvJwwe2VuBSEh7aUS2uyc9EF55szuoQzjSPN59VepzowKXsFBEX9CiL9Lj",
  "key21": "2b89KkcjN8VZ6SRJuzDHK5jmPquwXg8NYZg3LPf4doarukbTaLgShRpW69ChJ9q8EPm1Nsq7vnaTs9eLDEnWG9zU",
  "key22": "5wPT1cNo3uojwuHsRnqvgkNrqZ9saZvRYeRofQqyb3aaSWpKaHq7NpGSFnTxek54Zvk6VNAfrCHeBa3FppZBs8m5",
  "key23": "3eQVMUyStthZFbJAcDXCoXShv6ZJ5Ef3TMyLdWPpXiEXC6UiRkutYnyWPQWtetypTn1pG9nWDhadaiti4YVJRke9",
  "key24": "2cF5iaw4fakCUZkpJ1ZrVEWxQTp1TrDeNaxv9apFqtMMWaH5B8dExSSQZaoeenbj8GfDAWaBLtZzbpDGzYbYPQhj",
  "key25": "BGXw5NxPj7P5YSvs5ZJ7XiYgc5TQLWNoUhtbjeybKeViN4SDTYLay8UtA7bwedYSaHUmm1idsMpY87cfn7EvSGT",
  "key26": "3X6Xst3H6nJsCxAoTbCm3Lz1hiAKhB3fhEn8mFtF6N7wgJZspsBYyo89ChtRgRFRY4XfdhqyMVzibWpnQQi8CCJy"
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
