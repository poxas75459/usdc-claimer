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
    "Lovxo8dwwZ4upZ4x9tPjJX5GRwzi6YiQZaat5t1fePGQE6jv4mi6UdmkMRF7iFkYsAFBbf8zUUZ6ngmJWf1sYEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGqWghW6zXLumLXhbpv7g9hoAkRPqnYBQJ2n7kNHqDLNwQ9Emdo8SoM8cykFr6KMSZqxyDHmiukgivVnMkRBzML",
  "key1": "5aMGYVmDGmdVa3H6cRSqvKqPf1WUFNWAmyPqCoVPPf15MrZ52sTaKWdy2BgwNwGA7sGJkBgpoGen6rb9wLNCCpfP",
  "key2": "2F6TbRtCrqaHsoyQkpwYke8bQPXdzdxVjBnTyb5RCWjjF2dDjXQmsikDZaiDsS27h755dXJQ9Y88XDfc9zCrr6zA",
  "key3": "4rieGpRD3J2yVhKdGWyLX3okAqtAg5F3gmEbXNpR9Cuch5enKAgf19XiTMMXVhoKCHqnkW25yVTfURBr3ME4XNeE",
  "key4": "5DytAG3gpx8H329U1jiNiiR5qEZX6GgzeZX8npGetxu3njECn28Es6JRELkeem8zzQoR5PUX1jQfS8M7XSSTUMrX",
  "key5": "3Sof5HUcKody7LkxPVB73qvvS8DhijjiKb9mANdUyPf4uHjpawCCWk2yMTzEifiupUyXPZxe4WdvYj5F1XYDNu6A",
  "key6": "5U5zVfaU8j5LVBj2zjgVdYofgoiseGASWmpUd1ytdSFTCdXT2fhishK5gePkuijnbqWyyCt5vXKxGZnNGhKioosA",
  "key7": "2JbFj9gEQjcKNrceqrFsjveALS6x6i5D2FTRzwS6mkiNVF3xh19o6znTDhEUUt1nu7MaMfMwgYMBn34bxBLNP2oK",
  "key8": "4KvULaRwmcvkEWf7eBRgFBEitTnq2BaybSDKxVvFAHGQEjp7bpcA9hmZfMYTmaZC27HrfrQ4BqC2TGtAwPARVjGL",
  "key9": "4L5rocNYDwUd9hYaHyTv6QRqDygFW5ZifDXMdEW9G4x1YK1jjQH9K4UBJ2a61E7J7RtV6RCTDAdFWcxZTbCkXN1w",
  "key10": "22v5ebTMQinPvZoj4gWtXZqdPxiX4LBD5RXRUnRvkNEbrzmA8t64bQZy6zkfKwTbZQy38ESbotvGtjBgqzdPqsSY",
  "key11": "44kDABEkqBhYrAWST12jkYAn1jKAmepbaZr5VWtHowvPZboPZVbr1hv543RTs8T36um7LV3EJafJDyRTsyWPmmzj",
  "key12": "6QTewUsGCgW9JQdVCBSHHR1XpYvtSCyxsQsxk6B4FVwBWJ6XVdW3a5zJZHpbk6sDjEdXsHkigXhQVR5uo7R6VD6",
  "key13": "jBycoz32tUykHiGRePwo8Ae3BP4kkXbisoueLbYtVCsNsgyGYK5zuRQVvZPaSoxEBFUsfDDzHD3uQi5H5CG14Dn",
  "key14": "3Umqke8Eg9bFaN8zRHWAWa8JrWQMNByPBBnP2m7myMqMeumzA6muu3Kybbh2yEa5yLMVZGE83AMg1pvG45ah7Wjq",
  "key15": "2PLhw5XVjaBTYVpjj6zontTouJt1MwQ2n3bSZ3efenK68qyn6aiY4SWtf7nRtgjZnyWQ5jsrwzM5kM2W4upGSwPi",
  "key16": "66cHk6ztcGX8x2t2vc44YyDFRfv5etKW1kS6i3QV71kW2yK2k752RxGs29KoYQSaCU3TiNZnvsfJGRb1SX1aTjdD",
  "key17": "3LgNLLfgJ4MF8VwxRYoaJgPY3fDEpvYEgyshKHcHBhPL8At4VBZKcKnELEAykkqoXuWisDpipgKHE49Mjzr6dgmD",
  "key18": "cKM4RCthC2zhD1WgvQHH8dTHPcZDhFqYqLCP1iKCbmfMzt6KkpoZZ5e5KDHSfWTSzSFJWLuCpqSQhjEqDBK2gEh",
  "key19": "4cAN9NQLL6NtAKGbsLmZVoZi5HcEsCymUqhzhegSceCcFftsWnFddnpGBHheYkP3p6gFecSrLhL2u9hgHrfCTgZx",
  "key20": "4tWhfDVqg3i2NKLh4f2qXog5TqavePL6C9vm5NgL2wD6rXoK2PLTY4GMnmCBDLSPixLxQbS13FDJFA3mWbX11EkT",
  "key21": "7txEH6Ce1Rn2EmaUNCYSFqLJHrGmXRVep48B3pgNNDXHCzrwDA3uAPAR26EumsL8j8RwrgDV4sDrPwxiEn9HmiQ",
  "key22": "Utgfuo5Hp6tRS97nMjxLAZcmWsTBTvn7ELBQNV9Rsw28m5jBgrYvcoTEMH6KGVGsbPLxAnRXbsUEWW1JEUxnv54",
  "key23": "5p8p5nYEFmHnm7Hx3QP7RsrTikDjhvjyGKPBeRiamDYJYNTbUUxzGLvCz2iNAVSxZnfXvZGEB9KTpX6WyP7qWFMk",
  "key24": "5G83FxSUobQHBnH2sJqSjSkg3dSXDpKwibXsDEQm2DEMfqug6gynSt4McXyAPkj8VXjCmS5EVfbQ5gtfbzQnnFV3",
  "key25": "2qa7CqE85fJEkHHxaH9EWYoxSLchTB4LogHdhsbPtKtT1VFfuCp12bA5giQVh7rbenGCLLeLP43ywsvXuuxWRkm3",
  "key26": "ziy32D2BSqS6iiFJViN16VZh3Z2cHSsrt27afyDHqG7hE3qkHXBNopEfsNR8G4HB5s519nn6DSZHTEppddUqnMr",
  "key27": "5XkghyshPjbyVKmibaNKFp3XmxndB5nCLCSwcqVAHzqxCiAL4q7d5axNyhmJgkKCvsTpca5Kka5MmzLpWYdBh9UF",
  "key28": "2McgYDW4gSQUYfLtbK8mkEkzSwKnA4hzxM7sGaqtH8oU8u7F4Z43oaZAXeVMciRSfwALhSLt74ne7o7HQXFs4NyJ",
  "key29": "22PKojNvdEBXnG6ffpsxzPcbMvg7JCLWyrXQeEU5mtQHgBBvzwmFSbLTmNAZfNYDDd3N5Drj6NEy4uRznMs54nFq",
  "key30": "2f7yQJKpnqRz1ULBLXaT6rS7tPygCDBnWZYd1JMnoNt4SX325vMeduwG2gGpCRxECqbfSTcQiyw7hNCdBoUsBNvb",
  "key31": "3QgwQUhuUeTZ8d1mhot3m2aa24bYWu4cAZgxjb64QvTp4eFdZXNWKgR69bBJt3k91wAX3Xk64BcxkkoQQBa9JJ25",
  "key32": "2G5SMewGaLvFaHWLR4ScAWCWrkmTiTL7swb8DhtwzFWPAC9keKge477XTE8oNkCELooLqszG1u8UNLDFaiR8hAx3",
  "key33": "41bo7ZdQ1Qedga7p1vtwDeBSa3XniB56AyB5Lr21MkvPQHnDbiBwasYaurJry259JzZVTw7KSQaWmmG9nK6mwG7e",
  "key34": "2LxXCsDgC8nhHz2o9qRCPrj34UsyLDgrN8QGjo6uap8uMoubETqSD52aSQpGirCT4bU4fmFKWAHX6W4ZnnvJwQ1Y",
  "key35": "2p1oyGHeyMtvFuN1RQ1LRG8Q3aH1KCd1DFPydN9MnUPrdJG3w1QMCAptTXjzpU2JBuW3tcvm6PEh9WdYLzRcfjUQ",
  "key36": "2subGzZpqAQYL9pWHytHaBokNoZj2vcqPCqzDT76wUNcpgJf6jRGjiyRfD3NxbaczCakku16EDTboCbam2UPEQ5c"
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
