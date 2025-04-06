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
    "34BtxB9XdgQXGfnoNMNK5z1w84K6Zp6WSndT3cQoaMQdLmAW5QzVRAqdEjqUPkVdB3V8B22gqSEdVuDiJbsDDToG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNpN9mPVaSmo2ecjBrkBjqXP1mB55ZpGLgfLAnxJovYHjwxVL3WpUuXA2xcKZF2kX568arNJv4y3jbZR6xeciUf",
  "key1": "5LikAzYWiigqLcfLjq85isJNriPBHWrHNNAZyFpcrzAtrHyyJGD5WNABmjMSNvzS1itj3QHvWSJ2xXaMWXzUA9Tk",
  "key2": "5QyxDwtab7kHt6r8VYY5dGMSZnYNMkSM8KexebBHgsXAe6vjWGpia1qKiGBLWoPcL3uDA4HSFjjbovdpwzQoKdJ7",
  "key3": "5EesDBs1wgr32X43HETjsjcAcre6mNYL5Wpitf3GBhhoNYu7Ed1zFouQi56FUBWXYpkDUMaHTNGjso7Bqs2soCj",
  "key4": "2LLATVf9USeiHZPAHXsZ4Ytg19cQHi1Bb3CdqenZVfbTRLEHGKDofusdJgo4gVYzSjywfRJXPRYKun843c2pmX2u",
  "key5": "5gczWzfuP7ZNKZiWG58jMX8Gj5H22TWRCw58PmJpbepXy5BMTEEynLzCRN61XJf2cXiW7QmxUyhgxfVWg3VvPzH7",
  "key6": "36xqFDouBuHovwWtsXCT9TXvgzFgYcWqu4vpoVsydjPa3eP5HE6CzjXSeMYP4n3xtM6gokV8tdydmXdnjkrG8qQL",
  "key7": "3EHwDdKj8P5XGWHBfLaiKjmKCsjiF12Fim4C9Hba2MGvTDzQhJTf7NtkQk5GzZtCxD6btDMpWmWuWh5ABXVFwdBh",
  "key8": "qjhCKTkvrHyZmAv3RyxyNKCK49bvZmtQ7q7wQFbGGe34etkXpJpyEoyZE1tpqyHcw6PK7D3oQpnN5X54zLw1NKL",
  "key9": "CeKHcPHoJWjcFME1CoVR8pFeZpni16X1JQmCaWu8xmSqZPLNie89Y6g5BWNck7rektx47t52ZVy7vyiAYhJnxHV",
  "key10": "59i1H6ueF2g9M2dqCtxPBcgV2vxpBNfoqzCZ9X7Vj5THUKVqdA2MVzozt3jPEaWBYScMDcGCiYv1cLcMmSzbVDmk",
  "key11": "4apskLtNiHj3ihLsxguPdyLwGm5vxVmc93fR5gByuLXjhfbmZeNmUwnE5CyB6p6kDkUQQuwUfJLzEvcT6eZ2pAAW",
  "key12": "3wWiBXmbCxJXa8271ytyN14R9tyqbEBAActHenjRC67hMnxyFwDGdov4smLFGYfmD8fAoijqiArrYTkBYuCwDfWm",
  "key13": "31gBhSjVECU3ayCwVkaaYGer9BCByY3NUv2nKfgd6xk5b4xTPxEbGMBKjU8w4G2kY9dxub5edUfEvoprz7ajREnn",
  "key14": "2YGVPMZFtYxYaKKDNjJvnkbX4uNqLR9edPmdexsEv2JosJgX4TzURxoa1wCC6AAmPSpW5Mo8HAaSpvazNJhZkrte",
  "key15": "3QiHYpQyarSKvFWezDUMk9kccEnQUwTTKsngiUDQaZUwy1V2ngh5FBrNaAwYVsmHvR2hX3TQkb6g93ByPLjBQm2B",
  "key16": "4Sftpd5w5xVsTBoYo1w6MaditXR4GUnydE8knKMzFabwhqECCzhz4VgtE31m9aSGdHTuwgAxerJANHTsFG93nYbB",
  "key17": "3ejkrSvJJJsEiHY32cfcuJDFo6x5HLXmaykwW7nbvUgTSgoPT638Gtedw5g7uBxbo28vmysDSAXYp8rETpaGPwY7",
  "key18": "2rY1sXYCDqUhpFq1DCKkkCWhGanE6kz6KxqQ395iQKJ5SY8ECAgdeWsrANZaV6HmA19dGiqAnQePfrg7M1yx66Lr",
  "key19": "5yQ62PfsSam6BqzBNpqm83iKpJRik6KFe4rxcCTNjV4Kz4Bv8HK7b6ksC5UmVexcDwavfHpXHhMMV3UtLCgQaQaA",
  "key20": "36HVbPKqsJyNGxP88BeUJbCZ3Go27Chwc3dznFQkheHhatptNYeJyu1DJ7aUd44S4529HgisB3DqWqPTcRC1q7Pi",
  "key21": "4mTrfArZCUdRJ89K1M3wxKCTA1aYAaHfGnGsScZw8uv7uU4bPCwxhG1oSZWsVxHXYM5u9z56x6gpSPKzdWUK7DQN",
  "key22": "3zRKpSMw5hxNvvhVf4TCgrftM5UeczXUY4a1dMKmYCLS9zwXdG5YeokTqF6zV4kbgWoJ3dVUFYFuHDLyGTSMkFHC",
  "key23": "5gAo2qCnVu5dN3XmXbDaSCZGbnU8yW5RpdGh86csg1T8DFGfyz8ip5Kq7XEsySKWkTJRmXXCu39Go7e3ja8qKjJs",
  "key24": "1AiiG6ELJJDwJ85gaY6T7aNmNbC5hmy8RSduSPyk49xrhLYkrRAeFy24gu3oEuMdVWh9ugnB67EG5QyZSz6CeqK",
  "key25": "4fb4vxiJYWyHytwvWKKy3M6eEe29Zfv8hY9XmcSzMv2PN8qJZoNGfLXFbqXWMffhDrnbY3qzP6NSFidcH9WdekR6",
  "key26": "4WbbQJgUDqtp6tmr1WBqAXmHjAqa4V3gg526JByKzigEjd6rC9wioPk6YoAz7G1FZneyxW6KpmsK2iqqU6MC1vth",
  "key27": "5uKnbgSCRuhAZDwA96tv8vZRq5Mj4QQ45S4nBwoyp64EmYZ6bcPTh6FAcS33R7bNw9cB9Z5ZTn6Hgthh1S6uQDUL",
  "key28": "gPqB6YkghWGTuXbCFE78SgMBhRvvaT58SJ8ruwKY2SAN6PPP43uioFHTqefqkyEDCfqVSnPELcQAgCyhpjj7CLY",
  "key29": "5zgengmtVSDQf62aYD7TebNvDAzJvLDnK7q2UVCnMr5Yck9Tpgxdnc18cgZfToCsHTeGaniTfgBN1beCak4MSbEU",
  "key30": "2Qm9AXipxGeiSHAD5vwhRaJ2CwamHuLpEa2ZmBBXd3f2WmjDzWo1vWZzyoF9bRbusdxkTcMdXKymMN3uBkJvuNxT",
  "key31": "3Z16eEuU9jfdjFgbJQ8DFk7r5VX7RTLuhKBabB3rZmREwHiyL5inuowu5CP4gFuppM4MPgfxUUomaQeU4fY6P22",
  "key32": "5eCL9BxhzoJe9PvgvB8xHDdnQyTp5hPcoPEyamdJCgDRnQUKVHqFJrESTFEcXQLSSox9rY8E4xQeAdAAqXSQmutN",
  "key33": "564NEE5wt754GDjdREpdwVXPQPGjG4ks31AaZsiCpvfFifWxaLZgje74JzUxnbvxQbxDMphzPT7a2fsTqasmmaqx",
  "key34": "2WDgrfF1vsUyMuCdvRn84HedBhbMBNaFhypoF7omCmuxuYqBEn8zhf4nt5Z8PZ8RrACc3fAZfNtbro7oye6VyfNo",
  "key35": "2AntoBueqb5mLCxTVrf73Nx4ZvYuxuhe15cPkZXe2pNivJVzDpyoGDEznG1EUPthXRmYUP5r9Ha9WhSVmwZMwZPb",
  "key36": "471oguRHenWnw2feyYc7vqsvYpUHHxbuCPD59Mp7h5zxk5pGtFJ8xFMeJVVxPPwLwqdMCvNUaTW8NKzCrE8p7CqY",
  "key37": "3HjQZfjn81aH8RURoo7SnnTm5oHmFBXVe5rQVCBrScF2U7BFmHJjikhZQmZGCRmLdFdVjV6h2v8FAuXPex39pzDY",
  "key38": "3nZL5xzWehcQsV6DonC9ZSzjXFhcmGu4YqnYP6Gtm4T7dRhWQAa5Ur5VXeKiXVyCPdRwqC973mfpc7NERFGfe5Gk",
  "key39": "3g8awzdAM5NrKZGBCNLLAM2y9hCTqopM26SzddVSdtxqGyquKQdSmP5VPyVtyr2gumBa5UpLxCQN9yNfXx58eLnV",
  "key40": "56hppcpBARYwddukJSdVNaBuu5ZogVYLSJZj8h7xHktM5LoEXVZnkSv3qqL56zac6kg9PQN8yoELr8r1MCftH2h",
  "key41": "5nBc166XQKQBJ87AUhLLaiDX7iv7z5qnbiYAvCVAmQpqZnU2Dr7tG9me98WfTjoCMYS278FJsenGj5yQWvug1xrw",
  "key42": "2mnMPa1hDnQFXFet33SGhon1pWMXzrijrZhEaJU9A1QjbsgeRYcAYxrm8MofzE9NegogyXUpLLaZBnLALGrmR8DD",
  "key43": "pyxJFaJ5KxeNyiYsShs11BRS7HuuGzKu6E4uzzbG7KrAqKrpL4ivxGeZ3HYJecdQcc47MbkSEfijEyaW7pVLFz1",
  "key44": "5FFuTQNMCBkeQ4ibgyBDuawDSCPYfZzAg1GjCYS46p3zfU51TTzaFb4GFkoDmBscK8q2QjpD7f2k3ojWzocri5Tz",
  "key45": "45SUHW9A72XfrXWA6mN8yjoDBs4Qd6oBwhAt6yrPbyACtWh1KpcwKSdHPwuv56rGs2EtaL34bUj4VBxVmCiKxLgX",
  "key46": "33xnd9YmMibvnqrYm5MbySEjap5xkmdjnYfKmds1bjrbsKrmqpdztb7FfUCRQEn2KCmkbbsUVHpm2xFfCA2sYS1Q"
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
