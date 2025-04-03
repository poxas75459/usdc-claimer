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
    "2GsQ2ruQ98NjS5buNijxS4Y18KBjDA6TS21Wp5GtM5q738PAK3YiCtDuuT1v35g9aDsx4aDQwJ3ZhKPiXJWbX21z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCnvjXagYzfBts5x5gyx9mPxku6uyEEHxNtFEmn9cABYgd53MPnRhqeYRouUXVUaaLGoKNUvPTEiQSpm78eqL3A",
  "key1": "3Egn9UpQ6nFNystYznKRKj5nKGBXw8NgpUzqTDydyL5sMbPprMY6jmvjZhkzDgsu3dxendfUPTzgBPXa8ag2Gi1T",
  "key2": "mrAsCrgsa3CNPPk8hoAhDbDvkwa8Pwc3ZMtEpt6MN28y2W2pCY8NkjM2WGk17Dfi99ch2my1TZdsgxamogoWFJo",
  "key3": "5RZC4LBBWKXQJ9myHdYR5fomF7r2oA4ufyV7DSb44zyg36dh6iE5U93NnfoSytAa9W2M7fyVGv8xaPqJCYxaiQbf",
  "key4": "23AqziCcFHBpMVGHUcJTxxSYBwKtxfdBHRFncefPLdTLz1oSP4FWhjoW5vgsEtk2HLqzZSrDomgHi4tENvwju941",
  "key5": "3zXh4bFvrVnU4hHR45bTDocmysGcFYfDshCz4VMGn6cwghdv7p3PbaLAP6RSf42am2web7pgT2nGPqtkYwK6xgN7",
  "key6": "4BjmfTQxJS7oyu4PSaR2da2jsGc3MwWFFnCNKpbvXdhoJULSnnpMnHGDRfBviwpj2dLvkEtSpZqvywLXvLgwKme8",
  "key7": "63kQEjWzRUjy4Rcp4eVckAcpfT3pmfSfzKmFg7k95P4ck5V3iqkb9WQKKLfc7tj8kqW2m3GTCT95xGz2bBP8qfoq",
  "key8": "CLDRGFSyLh5srWYELUiSWPNHW2MiWwgqnbii6HE17n2VZdNvEuprS1Uvk9BbacSZxutCF5Y2idmhx1cJVTJV22o",
  "key9": "677T7S3u864ybBMLosGAjvTwVvLMtCpVrGxj7fgaNfJRGtAThNTAUePhwZK3KsjCqbWX93rmwtiHLfj4BozpKsAF",
  "key10": "2Utv814eu7rBhe6eKVLGGtBrCnK7Z6UzLfdTyd3JMC6tDNzEVi5kV4cGrhKyFsvvRtMrmTSQs3kAke1CKcV2nXk3",
  "key11": "4gfE68BWyidAS44zPmiFzZXV77e2y3dJ8NDsmYATBvJRBDpWgBSeZ761MgNA9z7GJEJfj3nz4gMiiTk5vtZEB8AT",
  "key12": "5PSnj1ZFBRx6dfvpNdZ5sDPWETLfSAnDTerbKVqq5ogxWhjUzMTckhWkn995YKjPdhAfN6krVMs2KVdwdF87pcvX",
  "key13": "gWr25TkijpVXAty7mZMDpB4pvWFh3syVBw5MDwNfZA2FR1jgcQyWmDiGox5EpGDsjSndfVTgQzkap2XjdvJay9a",
  "key14": "2p7FgxhgRVG9cMKcZB2Uf7ooCnEWG6fqg2UtHrFrg4ThDLrYFbamiFVx9uSdyCagbdfMJr7DUMXDWir4H7yJbpVp",
  "key15": "48KG3KDRMmhWyRSVPdNndgMDLSz2M5vWH1fKst3JkAwRCHYdnYoQiCeVZTnGYrnmZmk3azCkxLy4idW3MoeeXACw",
  "key16": "5WY2tePH2QjJYwgFUETQPo2YYFprLR4EtAR5mSSeNAj1b4CDkTf2H9pDPoPJt9czjYQunasL9yctGeUm1D7XHHDr",
  "key17": "4ihW2m9WPrEphpCRuH3MR1FvvRycYtyqwdEvPFZc2tU7dbMChWNRQee1gvs6ijFr9at1HXqMKEpCLXhnhnLKygvZ",
  "key18": "5CGebQaNpfxck2FFUwEr9FFPoMf8Z317kaRSLtUhm2W4C3FSbtogW1xQZsci6AJEEbmQhyEzRdDcDPKrL64vjQaj",
  "key19": "23jAkN1P6VmFe5FTE7uVRe99CnERxJUbaQsT2MHzALsxqk9QiCuaqy4rL8jszCLG4m6jpYfEdUKrnYByPRriEBCS",
  "key20": "4xiL3VeuEeDDVY9ju9raTJVWi6SkLKYFTA6AtVLAoqHJhsRB2XcsDpUgawRVyJ4zsaiDEa9Tdi46MFfo86Yx8RvR",
  "key21": "3KQVkswXEPxm2vFbFZJBjZxu6A1gLkJETEfsyoM78TD7v5f4tySSqdxqB32zBtE4HyeQE7gSsqMFvy1Nkv2wd5gS",
  "key22": "2qmUFv1Ah6Qs9LRJwgSawhK3sxmYDaKjAifTtFGHfbawHTJwAMCSkLxkgdvRSz1hf9JQSJXRtehaq5fc9xGJngKc",
  "key23": "3N4KzDRy6Hy65RJRKfWvx1zVTxaH16aC8RsGYN5yexRtuzLCf9V5psrua5me9DBuHpCpCh2ShEVYyiKNb4NqDUzE",
  "key24": "2v8rrSLTdtA866XhoZb7Y8gAKwyomL1uTKkUmtusM832bnupBrUZebftnvtz2PJKWRFs6WgnNX9wfFGDcoW3axPk",
  "key25": "yGgKTjFeE9CbTJfpvdJEfjUfR4PDgMLwuHPvXTReMyjGA8ig7x5B6tMF3DT1bEHfn4f72Tqy3ZKhqTCaUeN3pPD",
  "key26": "rrSwwvGJqyEBK6tvMpDqMKbwBi46PpUaTYy2xfMRkCyynXMWAQyUopqt35FjETHCtei9ktsvswAgn7ECiYwUzUZ",
  "key27": "4tpmNbL6ZWTKR3Jr1YLzFpTwPbJcLHbS82Z1JnxrnHTB8hFpigYHBa5JCXLsTg83QdPWducn5Zt3iRD7QWnKtQVQ",
  "key28": "5X8kqqvwZ6xGkURrd46jStN9huok3u2wWQ6AXXT2Kc2f338sHBeGr3X5pNAmyD1NEb6WPFhxm8dnfJhzVba5D9bt",
  "key29": "5PRThrUX5M6Jf3cMuC3ckD6ZhNiMqZ5Ey63FwkrCL5mk3NT43pYw8f7G4ArbvQPtKRpMwv3EgYczuw8YPoHHLiZ1",
  "key30": "2JTRMaHHjGK62hdG2jUr6FAZ1gpvL1Tb1mdX6FVhK6BEyfqJeddMPcHerv63NT4ARatjwRgBka3XTLcgVSt5QdFq",
  "key31": "5kxKbDQxtySt48wNHje1523BREdxkvuhnzgkJmrvpkDZbMsdRavbDJxrLhar6LiyvEEEpQdi1AQLpGs7y7nahr6u",
  "key32": "mUAHmfo2ooKNZbYkZQe3Hq5tcDB4VbeN6N2uKFtHaDmuS1qT8hTtkvgZrSxzZBi1KRTBRvEdN1KbgXMeP52j5mv",
  "key33": "YMTzv6SFJ6LNT2caq4jDTTKr8cYpSFkyzWdMANfY8pbYnM1qjnZJ7vnRZ5ZVvQXSCpkrYbxWMfoEWHnZqNgkATj",
  "key34": "2AiipVXqzNF3W6L8aTsaw7fbrSBG8Ha2DDwEXgtGZJ9fB7UeyfaPTxjCb1U2v5ayaQrWKfi2PSuir4hYVbAqtBoB"
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
