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
    "nCWbdUs58wsijqm9Jk5Znm4h9YxGNRKGVvxmzHxdfkGkRViUFWB8u9JkRbQj9bW1k7dV8j9Wi72U1serDa4RzBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nx6NsxenZyb1oTiktNwHUKZ3hMhUFuBugZwB3NVfV7RTKoPAmQ45UNrYJ2hkwjn53AB77j6AFrs8c1dEVT8Boq5",
  "key1": "4P7gbDJp9vCXnVdmTzBUmPYrWgMb5pgctd1LcLsi6698W6DJjWjG9A3bjagaFfKbo1fKS1CGygD954Jf8pAP46K4",
  "key2": "3qCgt24N8MB1NjNMidmYo9FfgzMbSnDDE4Z1o3RKJqGNM5EthXL2G3ggVbdzu6poKkhAZDM7mseERRy2Q2Zmu17w",
  "key3": "3vcdpx5oLRucepxznXcQNi4CJoYPmJNy5Ri6yM9zbeR9qignxjFLukfPDQF2GArfjni4HdFoFXF7WTziDqDgrbq7",
  "key4": "4P3vJJYtpHGZUJERkYsRWEzPhFYqmiB2itUXtpjM85nSqF8FSLvC9Bv7GKYTMh5EZfj3pGBjp9whqrd8YFwMbeS2",
  "key5": "4PnPs3dHNnCY6McSewvRyD5vwTYWFRAN8X8yVim1DWLVLo9oSBLt8RyJCLLiEwefoaZfRPhs6DHo4tmZ4cErKQmG",
  "key6": "59D3Abwf9h9cCmQcF2kWcSuSEg8GUw7G2nMgFAfvx53jkLFmfZ1K3qPewGVsEjnVkGB22Wgkk2kTeAzMfH39hUKe",
  "key7": "e7Qfq7c8AUQpyDLAe7qNfmFLPVJ6ULQj7GA7aHFwEZMegDymqr3wXsbFgYk65a8AFyMXypjbpSdyZXyhh8tNdHE",
  "key8": "58JWr17sbry9Epd5inBd3xAthiRb3YV1fMi9ptvRGP2QWpz4Dyo8E5XMySAD5VasWWV7QJq9AewwKSYCeRFZPFzw",
  "key9": "3LBiKxWY1ijm6Sew69izmrU8LKRSVWZR2hGV3ED1jetE73ADxrC2XyamcRpn7ncGE6DBAvpZLfZDEv83A2aUymTa",
  "key10": "3Sma16qGUs9Dri6BrEyKyxc4wq5mxVKoEbSuexAGisgWCEJKTEdn8c7h4ybXmWBLoW3fFWniwyRxYrrdC2LFGdMr",
  "key11": "221E8zuN1HhsMYmpR6h3D5ocmtLLLqZAuh9VvKdcZqz3EPBu2c585mYoQkguSEebbnuhwrykzBjrZzjWkFCFLCvb",
  "key12": "3FBYBPUznz3VkMpEQY8J5rgKcD9CSrtmAqMRHn9KrTgxnMjeux8hTxEfL9Mpt64dKdMLh2f3pR6w4rkeWua9ouCU",
  "key13": "4fsAGmcv7Fa35wKNT2vpDw3PpQ2ca4BtzhxmCKZMJ9u1M7NDr7sC3H8e8R32TAnY1Dg8vXKN8JBpFZVK4CpU7PBu",
  "key14": "28Wu1H6JVzJnnUVWQdDqhk7sPYqzTDwsiutMsiFPzo2jjcwmW1hMbLNWGgpEqEADgpQ9sYBQKm6VmcASPkuSA177",
  "key15": "2cxVDFyat1FHMpHQa3fASSqa6y53sAJKQEqUxaZzMAkNStrhiSszZcHCXPnbUaFoe9zEy6NhoS8MLyuCBngRZsVa",
  "key16": "43fYur3ovPiZnBYZ831Yo84xsRF2WJ39pBdxPPkuhK1Y1FipumkrQCHGHrwXkX8to7YDbi8bq1e8U3AvGs65b3Lx",
  "key17": "Rbo1XRk5cCx3up1RByJK4c3ux3MpvrhVhELiD3EFG5N4s4RNboUvDEjGMbM8KYHpm4m1fAUmyRFm5LDvnAyLaYF",
  "key18": "4QcYRQ1fjCMNRMzzjR18uVP79oC77myw39TvUXXfGWMdXsNgQ9vpKCTqgWEDsV7Ncipoj6vh7QUqJSwvuxKQMdGv",
  "key19": "5JZitxvxxG2FZmeSFexTr97iBCDTruu6zESRXji8R8QuaSh7UVvQ3FB2ZdzTDrwQEVyDhqqWWAnxYSsGZxPXse9e",
  "key20": "uwdX7FbRYzEJDwvixuse9z3wAmdXJEvoBDySDi5WfPsfNkU313T2DABHWrkFACHUABk7cmh1eLk1MuZqhPnt8MJ",
  "key21": "3bzMoySsfS1jwQRAMD2vMv9GwEhtCY2Y7TjXh2Kxgbjg7eyj1uYdCGRRGqgPQk5GHFfcdyPMn9QQixr2i9vXs7fy",
  "key22": "YEntGLJWdsqKH3zUL984vhqybyCaTNpnPVWisKgYb67xQTybKrJcAm9ZKWTTHBVLg1VBvcWqdmpKnF2HgESCddF",
  "key23": "2XESXr1npq1qz3tjTqrrZ2Jy483YZCNnQaCyJgtEa1Bmt2Le5ja8xdXyeo6pynYkz5SkKRakqbST15V9edTrzgLp",
  "key24": "56SHYAnCVjKqJDmSG3SMGTRkNL6dSWb8s7XZdaFhixTwKk2DUuxUEo1WnJcoPRQDdWULyEEht5j9y3LSFNHU5dAG",
  "key25": "eFLo4SbXGgERFk5mAkhyx2TXdw5KnsLhCij42H5aTD2HtvhMr7zTzGbpCsJLrwMwpxEpKaQd5AdFaifYQuF2pF9",
  "key26": "2xKc7SPtBh52EtMbMhBbsBbbA88CByNhRvNtdgk9LTQQDRee3H4ChL6foH2uZsKUGPryXEmf9Auph8o2QssrK7yz",
  "key27": "5sEGwAjKguNn2YBjaNTB5Cv2r1czxwKJKszcEkwDxmSxbXHp1q3GWDL5HEsp3vVN6BQVrXkukbL8RG3AEivkLiw2",
  "key28": "MXWEVWi7A393sFCmqah9N5Ere6hWbtpEZ6QQTYGtSTHLf6f9jFBcqmRq94AXBgm1Ne8o4dU8CASHtEybD9bk2FY",
  "key29": "4yZ6YFoCxoWesqeKQzi1Mw5MkoPGN3K9VYsLpKbf261EJMh7d4twZYggwHwpm7yvyZjqFLHjWttRxHbWMBDkDdx3",
  "key30": "4uiNHSHfPHAFfrWNrWAW438vW1Xh4NmxKskk6mBJxunRxMHBVW7mVYzc9nqbZRRJxRrBhx6xjxX326Rs1cZSmUgr",
  "key31": "fJE9JLb2zQPoJz9JsaN4qB6NViEXNY3QBC48AQEXs1oYLXG8XPHJ4GKHi8i16FSgbhqqcCuzLTA2Sf1Q1sYT8dj",
  "key32": "JpUG8a68rN34kcongR9Qn2LvaTFQHGSg6iz4gpbejyFGBVct3oJWzkBAqm1i6CzwYSMTmvLEndSsCLJHFVpi1rV",
  "key33": "4vuhP5t8bNGzUCnXzSSK2MM3eq5hye9woLCXz3acPKBR7AbipQQhi6VnHF3nyKiydgQmUg8Bqvzv43EQACKeysz6",
  "key34": "2eNuGAX3nS1ACpa8pDzqWcaNVFJYYBvEiLJqaCgecAaruVxDZtxgWetQRRVZ5ji5pF49ERa5RirHi1MXUKHMFuHV",
  "key35": "4ax3aFdNJQfceD2shDghUPAsBdpAZKCqq1cEnVsUz6ePF2N261FEa4tuWLL7ENrWakvqiHwVXShmoK4QnrKRseVs",
  "key36": "4hAYYK4BrL3pxdyUp6WwGMfasCQUzwNVs4dVY7TMXf6JBoNk6iWRjTg7nPegVNGYt2r78HLvJ487sSjsqrKEe7au",
  "key37": "mJi2pr5RNQeU373h38gGqrsDTtQLFNaHDzddxrWcuAmcdJSeCmtyZntDhkGBFfwiUFko9rbgdfosszkuwPvzkh5",
  "key38": "474yimZoQrV43VS1G3cTZPujFH87tMDQME5T76FeCM8EP68N1qPTXAQBZTPTUm7ZDLspmJjmgoP7Xgzn17TeJCZD",
  "key39": "GKRqN6uZ1BFiyz6h2T2iG8DQaxaSCcsKi9wp595sMkZU6yE84iy4uKuNCSLziMJj7A683kDFfDjGaCRB7xp9MYM",
  "key40": "EXUSUcW5u5RnLhUJLNQsDybuBRUhfJrGm24GmUbFq7m32nVhPgXkE3VFg4zvbUtQqduMPPP98VB2Gqr3sNWe9fx",
  "key41": "4t8PV5DZBFfEtJsUQuZKq2bu1QJNSWT4QKondkMDi3CScDyJHSr95YfLA1eHwzxTY7jTC6kSFihrKrixMYWEZWdZ",
  "key42": "416cN3v84kQE6aWFuNsDsCEvLbPfEwNYgZ8ymqwyVMqP1ZqpZULg9i6ySx6iVLwFWJMX6KkKAxAbkBKHKgtQsiWn",
  "key43": "4WVw7Ar9AMyr3vfcu7YvCYpseq4cvdMG3Pfs12PxnJHBU6ssqfRjngktSbV4AZhqPELJ4yiRfpRyonbJgKhgueXG",
  "key44": "5enP89nrbH87URXw42Rp3XNhprQ2K8rwSJeWLk3PPfBvHVtTnHB63H3Dod2s46Ka1gJxFip3RxUVtdDVf4vLmk7"
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
