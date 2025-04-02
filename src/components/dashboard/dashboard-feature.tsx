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
    "4BRtbBT4Ud7gBNH3Tt9M9UbZksmJdT3gbur7TG4tYf8kZAnwiUjiq5stYsgTPwWgKwNfJejLY7HHC5Wt89MYA3dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGUoWynFBZ5FPApvGACHqHcuncvMiuHqTaDBVk5yLrUrRUKerZQGViGSfq3shGFbQwcSEkEwduySdhrgNoPdmdf",
  "key1": "5augZxkCRUKHLhknYkLxRJvZEXV2ED9WPo7VvUrmsYNUMSimkfHxd3LgxJNue7qmdu9jnUzSyxq3hxstQX2wtDtz",
  "key2": "2uZ5rjUqArLqWa9gcoSvWAjczvFhX8s4z87AJfVcbs19yXt8GbhSmvCTqaj72zJePHFrF1tzqm74jSg2mwycXF1i",
  "key3": "4V5oCP8jpGojwtWsZ2kFukhXKuLr5MRJMFT26E588gM9tHPSLYm9dB5RNM6f6dpTrmZRZFh7HPwTppYdDgZzq4aA",
  "key4": "2e36LS8uh5qeFyRTsRmwoCURZcRKAvuZ6qWoaPGpyikGYMiDnLQ3i6KBe1aMAoKWXRjVqHMBoLwY3iUjePdpstsA",
  "key5": "NvDrmP49598tXCdDaNquBrUPnWtd3TmgVsDcA7JNTPT2k7QsRS37su7GBVMz5cx1ujmJLCqne8PuQZMzYq9AYQn",
  "key6": "5iciEnFLgUhYzZF17tWaPGebfGNmkUn2DNpdKa9DMGwU22uzcHCyocZUjYjUCUygYW4dJ6hyEtNTmg6ceMQXhwvU",
  "key7": "4HJYL7riPmKUADqEwXNJHeZc1gSzsZFYoLtTJfyT76gmyoXhFHVh6YEXii3ryUtgVLuuiqA8pe79k75DqYtmVbAb",
  "key8": "2rQoBtdg1SJH54eQz3wWg5nmRHu5XBncWME78MqzsRvMGTAJDqDYNewFZpN3K8K19FWCo2mUNB46DekMjYYE5Xsi",
  "key9": "3z1U2LPr1nfcMB2gEzDQJi7fyUnMS9VKTYS8c8JYMc36n2mCjhYLRtJFjswbcJDcx7GWVfjPzi6atAAWgCGFApN3",
  "key10": "21dy6zXJHdLy3m6KrcDdqQ4V4FzDQDmMuiwFwzUs2KcWsXCek7auvTJCPmKtvspHfkLDohVHpRmvq7XC8nJnqbgY",
  "key11": "5CDZFSLF22FY1B7SzUjwaBwTCXsZtJrzHkVthKUt13xmgBTbHZoNyauRMuQQavxXHarSLgx2VnqCAsMfP26u9hqZ",
  "key12": "5wPMWDVNGeEB2ESm8zvKCqj9JHLtiH357AjNM3rjcb99sxiaYjq3t1LLSDtis86vkhXVZu71hoFPiau3sn6pBDL7",
  "key13": "4ieJJuZffGcoBb2qNi9vFXVL3QVF7GS1jryb2N3YbAeYQ1rxz3i3Nxd5ZrMAiMNbYUtBtgTN9LXKwLNKq5yT5o4U",
  "key14": "4TgGs1uCWaS9UW1g4mdc7YTb8Psf11E3Gy2gsua429cCnqAjXdXCemRoBLy2NcH6sBJ7HvMJfE2Z3P7tYDeefhhR",
  "key15": "4RFebjb6ihMwKcyV7ZDUWLsWagTb1SBHZ1mRYn7iYLKmohCje4Dy3d56E2c8g3SwzPMU4dMGHdndzegp3xdkBoMk",
  "key16": "3aeyrWoaJAiMTgSsiLYF13Y3ECN3LdQce2S5dXEbhP6kRG7cCcmJeHqErFM2jF1LY1ubMMVKAV7EqvNpKvqKkAcH",
  "key17": "5TyMcVB221Ch9MZ865Uj8Pv43XYLroeSkcr8mJD5R6uzpcYmK8LiVrKVkwGeVWuqEjGyYfPuqcrcWHThCsESjUn",
  "key18": "31BHuk44mugbPtZTghnr42GCx6pzkt5GgNjC2WUXMepXbYi4KRaugCCdu41F7exTjPLUYZyNtHaPnyjCm7nZivca",
  "key19": "x5tPXjyaishzUxjCjJPMfjDyDePJiCQwmcRzm8bEZnc8rWoYhzpfCZF2URtpWT7xr8Qk7tNLgvgPCYCWGSwqij8",
  "key20": "2rVci14vnDkU33EJetUV5biQQCDXyPn4aUbEGpeSyryQMZ1Hug18E2NjETezgnysQYPZzVfQRmGijeqsweiDsRsA",
  "key21": "4yhGYaWKxRiSequysrqRow3bddNP2ZYLgybPG7wC9Jp33VpmweQw41aLbVW798FfRVEJfd9FjtN1LvSWmXaKDAZg",
  "key22": "54fQ2Zds1gH3ezD9Ws9a9Z9yziaF59X9kgQAVDN5U7cgqQWM2ZEHMmfgsKGjpr1xF13SoCLLMf7xrF9pgRiezQyz",
  "key23": "214Ubiq42oTKfSqzjbNWouztAcEnJ1vDPboM8ro7u1Rb7qHSc7jNvYRKCaUmFM1Dt34VH48JxA85rVXcf8tMiwox",
  "key24": "betSAo6HrcyWj8w16FfBaTKVxVkcFcnJsWa7pHvf9pHoj5jrzY9GUrmFnJ96pUGSeiGmowrW85xHAZrmgWj1Niq",
  "key25": "3jmdNLFPPHCpWNxs6TAph8ntYxGjtdMee44WHjFLMdLzfZYxMskDXpGywQ3DGMhNmUWEyC9m56aQi6UK3TQhww22",
  "key26": "3ecJDkh85CQsu3JhytsWT9N3u1b2VQYUfdXJGyrfSVyzhZegT4Goxa3wgGJWkynmgfnhd6sz5d241e8XKUX3Dy95",
  "key27": "2FXNML2EhwtxEYECSUDZ2SVDohqqHMrthdyw9eZgMCaXchb4H4kGnEh9G1ucnBDKS1RauWzBSn4wPwdcw6z1o8mx",
  "key28": "65r1w8v6K3ho6fw4FBuRp5FzjtjaUxECMWb4ctwthK5593NLbC1CpSuQ7nfg4UCN92gLHDXGvJasrx1JjEMrSiMP",
  "key29": "2XogTpVZsf4VJhSocRQwFNrdX92WDHMoXgkAeKQXAvSbZoibVfgfvrD3Ucywprz4gHScrxxYn4mCj7WfgsJrQF5Z",
  "key30": "72H5AUR7j1RJ2TT7Q3MEz1qt4VqgK7uAaNM4tG7NioD4Xw1NRB1mhL72CX1GfJCQahQq6MrCUvAsNTxqpHD3Uec",
  "key31": "2rPMK5T99dPS6Myq7UvqzSRBwDfVpWqtzvzNPYxZaZZfWdsDYSCq2GdyWyyyX1wtcEEGRE5eNk4BiPHaYAWBkqzG",
  "key32": "5RC1GLhb6YuEjdfxFBycMKjyy4VZcpv7k138niUFPeNKKvCz91AV3TdywC2uGG8cx3taXPP4UgH5X6ZixGyP6gYk",
  "key33": "1AySW91gGP4pSu7ZDdMjkNNyaPVcrhBusq7JmeFC3fZVRrQUpg3s84eTR7VdHieNXSZamAhWgGxjCgNXDqhRSio",
  "key34": "4ejepdTNRL7RZ8b12Acnzq2R89jakmGtkwUomSVVxGAvhfjYcGAr36QTtCNRogfFQ6HD9B7ST4YPPoCeSGYouWTf",
  "key35": "5WBtCjXCofkPkfnDJnnZGv4v6NTAFr6f5woX5KSiAQFRbgtHhv9qtsgDfSYJjFgyDR6WJRH4wGY9AzdtGNDcmaZa",
  "key36": "46cF2MeKbzALJ6AHzdjya6rfMRN3u8Nv3Moy3WFPpZDGQJHrBdDdRa3mhUqCsy6EUSAkAETnLT3qjfsgos4bNe9u",
  "key37": "2wJREv2j8zMHvHLqPvaxCvZZmwbm6YkmEtnNLKMb8AbaSq256FmjPGTxX7Y29a3K21iiYgDb2ka4g8CGPjhKKuKy",
  "key38": "4aCN52fepxGXiToaDVfEejBNCfUWrugXyKwSdJUm8ZHvHSMth72Mbz79RV6XmMCVjKdUSEjbXbBKUdjeBQuqhrhP",
  "key39": "3nAQ5GTJb5Fs6PXHXky178RppqVR5ayXM2VKjxEsQytxs6rEaySvZuw13muPfLf3GpEw8yDiJwez1LgspL6273GD",
  "key40": "3NAQwNqrHY7HoZ99zyaGY1D55jtfy6CW5re2AURegmJ5Ut9RswAMwEhGGEzMzihMuNrZyXypeipVbnGayQpKy3Xg",
  "key41": "5NjrHm5QYmq7dguS986fz9udG4eTNvPK5hxVHfaRUaAtAnHn5WCPpp3dZPLVyqCLAYSB9rrMFBNdqWqi9hiEd6hV",
  "key42": "2gb42348xxk1P58d7WzsJGkWTWYuQyfgVkxd9d33EsHpaXXmyEUwiyQ2kjnyypM1VMfcbtyC2pDGepDBDxkwQ9Qn",
  "key43": "xSxzGYCwXguPjtS3q98J6MCDmZ3eNk3dfzyQMfevTGRn3HnzJPS8tUB1MwxiqjhaAvek2pGne71zhhbLSXJZ9Bm",
  "key44": "48YrtYMweny2EAaysAM6arM4xAiC2WKnaJ5zVnQR4bVzrURcQ8VWyPkvMxcae21genx4x1938BTvA6kJtfhdobgG",
  "key45": "3VC31KHEHW4LdZmfRFK5ZZhtN8U8s2eLrkaLFeCRkQtkfn1jg5u9e72Ep86Qdhrby6Q55Z3Q4MXiKbmdoSKNomnK"
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
