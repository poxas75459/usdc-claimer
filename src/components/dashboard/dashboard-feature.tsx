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
    "3HbNmAHJLCXocTShFKLLg8bK9XAxtCbBCDcMMVS1tERjygh65Rmhk85U8cqLe94CskPHXD1133Jk2vNkoChnWjNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zU7CriF9DUucFocU8chd3m2TQSSBppnWzEWnRp1zhCou1YPhqkUMTheBSVD1oJCbaqZHk1qbNQF7Ba1NvwNQEQv",
  "key1": "2dd5UdY2tTDStSdtTHDJPzkxKmKRVZ7RLTsSPj1psUGL38XKtrb47Mv4BoC7iFNWwRCNNwTfTTUA5YSPpeEtjSsW",
  "key2": "3HM2erSrqU3cn8WEprgy3rMLPvd7nCm4ZfJ6bKt3VZimYozSqaAB4T5UboarhaMU2G7BzNVuPLwoZacAmE2qoT2F",
  "key3": "VeHkG8Degcvg8Dwou6Pdqe6cgSCzd9Vbeirmt4Uv7C4bZRT51nSjsFayjy3a6Fs1FK7aBk65tF2QBNsdrfmtS49",
  "key4": "LgViYiDYgbq22fDemnfES7cAPfmPDwfwBGgCPCefMtfC26BtM7LHMJSERLCsw1JAVYR2rdtw1qYT7LU3b2eUFfi",
  "key5": "2TGLBd7r51W5hHsNCu5NVebVSv8TT1rpqD9agrGGnEqxx4YzTn88UHEYnwynURYfgcjrWfykGbkWTzVAz2TZzJkp",
  "key6": "3wK1kFDeggfubnE9MEDP6VXhMVyVBKoQJ4PrgpVkA6FauM2Ya4Aui5Qm464gVN8E4TsZFPYatSyqLcZhBSepm7fv",
  "key7": "5fpYcGoJgE2UAh9T5NMEi2sEDcv2dQArYgmJ5KmmvYKyQmi3maNJGL3BCjzanLRrrNRke7JpA6kXk8HN2xULcQxX",
  "key8": "5FgkxjWP8zmarW27aePjw1kB4Z7KaXDUE2Bfu9jm6bVNtTDz87V2Xj3rY47HnpFPsxvR3Ek3xMDkwYhp6fWorNhv",
  "key9": "4RfLJu7YJCtQBYGRM5C7QooL22ajPR5WGrGfjrYYQVpLcy1wB6joRUzHYJi2ympCy7TNeuHF9UV2m3Evt78BLZND",
  "key10": "5AWHkXr9zjVSpeoQnfpYpV2hBL21NZ3TaagLUHWFPP2MJZSxSukNsNxVgu4s3oNFnNFGd5tNpaQVmHYDvFxzpTTA",
  "key11": "3jK9qRqLTRPXKPcQHGeQK5xs4ciUpRGK31rJdbMXWbzNZs8Tb7q7DZCmMVzhTRpXwEM2Bkpy5u3d4LmDACasuUy9",
  "key12": "2RtvrxTeXAfhY3DMQYq3Y8BJSuzfpqj5hSK9CWnqYSd93TyQ8ygDb53svkQeWcJAiNuPQ23dzLDgnPJjamv1Ks1z",
  "key13": "4bnsveXJcvWWwW1Qw6yZuQm4soNtnCLZzTytPL6aW46oKL8FCpjDd4yssSmnTRLkkJBtkaAV5ogaqdnmQUNWRxxQ",
  "key14": "62ysDgkFw16QJ5Mm7DsQENVm2e5rHiNZLCPziVZYNw8wvYePWuyKPBPcVCcTAbKndZFrSSXaRCDUatzk2KTLYpCa",
  "key15": "3MZ7m3YgmDWHDBVHRbfZd1PRVXygnzesyUwTXRXi3aA4rYm5WzYcopxrmQgk3cfbmBKeSBezsXXQLpcTEnT11egx",
  "key16": "4kb97xqeRXu7AFWhshzngRGCW72Jdy6yhL5vCmHDw5Y1YN885C1XfQspLgYD21rV3ZVQWakLhEWPDKsn8PcxAQxH",
  "key17": "EgwYxGQJ1u5Ju2r7CSgd1NENfpVrqRZSaNq9AZtgKq5NPKAnmxi8fGmHTXGTaZJejkXeP9HUR6UWW1AWxKGL3f5",
  "key18": "22fSBSiWWVjVD7MEPvUa3MWE2BqT8ggNtxg2FUBQ4vcCPCHhQksEVpMbUAiFGa1BjjcyBo3TJ2NkGvU1ZCXD8dhZ",
  "key19": "2He3qRKPwwfKYwSXjZGYqV6zzBCB1kVa31Li71nswDFSHkMDYR3XcpNv1dEWUaTjFMFayNm24v7LLVSbqXw5MwSJ",
  "key20": "5i7UUfRduLEPhevPTDNU7EW66xJgdLfezVResSnfdhWDju9Y7mitDtYkKLRmiZsSQjXHAniVgXfnwhLPfFv9NFPD",
  "key21": "3sr4HDzCnmcmQWTxTQiGkioPCfN1U6hogi9X6VGNfFUr58ght2TyXYzrQ7K8Zb7d9HCwCpMASsXCzS6c3DDcGhy5",
  "key22": "5wW4kHBXvzvjrXWGV2RfmKqDGFjtbbukHEUGxxe33gtvMNVs4WQexQwiBks7L6HUoskqjfLLHzaBQ8ER4FTUmsPk",
  "key23": "3ziq99TTm2eGTp6UjZvccLtbi8bmysHQs8MvJy8c5X7QLD7vHsX3fg1AZsJmh4218sZVyiAoGN6FJ1cNzdJWoTAg",
  "key24": "5kGpxy3PLSKjy97yXJaov59LJjSBSJwChe9PPXpYS8rw9iyaVvzdoKszaqNkmg2oQ3sZtwXHg7mrY7TvUPveLrRp",
  "key25": "3A1qP7x1P7wJ4z6VXigUT5oKYVo87mHLHAU2XZvCkTkZBK35mLNrdB6yYxHDcRp2pX4fU7oAj6MuTeTazSHmwbif",
  "key26": "5LBZ7JCoexKrsbswn7rNoGb7csixeBmfcTzLotmtF9qNBeuUmRwJkH5u9V5LxwucRSVqHoZFkJmNTAvMg8exzWrc",
  "key27": "4zmhtUhA81cJxqEfPJpxXg2xg8xarBM3v9QpjCTvQ2Ua5sHiHHtk5qenmPRYeeQY8Dp3ZZMubyyJW2h84DWdLxSE",
  "key28": "ChHR2AezjovFMVgKoJRucejzVWX626WcNqSPtMy43LjV8ybPKv8fCiRrmD9W31tPXJQp7gkrrFrmgXLQmXraztX",
  "key29": "5mA9f5PRsdwZaJxdiwTo8pXya2Tk1RVoJdyNinrSPdyj9dBdQoNtxfjkyJ6EvRK5uqR9Win89fvZXrCDS52iBPDy",
  "key30": "24SheMzVMaLG7KYDZJjehGYtv9otghX2Lt1N6i3UvVDU9sQePQd7N8ykcrXas5orSDLB6kMVTdzd8Gy9EinB9bSN",
  "key31": "bV6E5KKfF8pV9BN35ukoctG12njFZfdCQf5k7wnHZdcqbrnat2AocYw85Psidnjtgh6cEABzsVo4MzMiGa1qcgy",
  "key32": "62sQ3geTkGMuyjxNbo9GsubkHjWPBHh44meeWuZft4zMJU6VYmwp3kb3SCovZ2VqPSVzb7M7PXb6YTwMJDK2pVCy",
  "key33": "5eGdspP8xqNLA9aoVQd9Z4KK1wPvBq9qnE2ydq8xTJhcfuJajM7GewV3N6zNqSyS4goBbtpuVJc13VmVhz9zbGr7",
  "key34": "3vEbznPCoyqD3cumxKMuYkUATYE7yYAWBzvahs9A1gALwxtdcvjKuBR2bJj2tGrqLaWBowdkdqthfat99NtRV11Z",
  "key35": "4gnKeGxkZ17g6SZPdrz1c5EVFK6jvwBWxMfD3wrksA9Mzayi7BnM6bkmUWkN6k6KShaJhWYbw7gc3yTaSdg4s3Ud",
  "key36": "2CzDy1cjB1w2sgP2kbTHo2FBsdvjfZ6ZNHXFZVZqCCXR2ZKKaDQctTKTA1eHCWHdGTKoZtccd2pd7qHeVSUzBQ5J",
  "key37": "4xFxv2xdSu4FbxGZ9TtD5wgiHZxyv4BkAuHVoDDUjYxRT1f1gH7aeW6V9L4RBKVhGDx629Ri6MwZv8sU3kwpFxyf",
  "key38": "2eSXgHiVcApR6XMtzePkmZhXcNjcVJriiczM41hFXryyJe9CkhDWBTtdVoeroFQeCcdrKVMgVnTXfowk3UqH8jA",
  "key39": "HprMizGZTnCFyZvUsPVuMgrJSezVuSfGMoGuZt6dYzMkEa8u1wCaFMnfseGDJHqTQPtVTbTUzvQqzZbtnv417w9",
  "key40": "D4zhduuxkP6SQqEjQFjAVwp1WGJyiVPhL1kF7d6rWDNQUBozCqzGh3DJ57vMeE57PHbfAVY5ouAzZfMBuA2GX6E",
  "key41": "3vSfXJaiw7ErML1UWZN3xz1nVTPDmNhkhKXu3pLmaJ4Hw4W6GhX9zPwGQhmTF7fybQYeoLQrU9ieeQjBc2wVWus9",
  "key42": "4XJNMFQH6SZQGjbHvypyUTC35MuEi38ssCBBwXGfyMEXnzvBhqxG9wRhRkmHsWgLacsKjjSfL2jve6s2Dra5hRda",
  "key43": "ti3C988URBkW2nWxM4XSE6RX2NHqSnXRiu8sgvNTnNVTbfm5VaeKJz7sB4D9P2HdjCSG2epZrcHZaJ4iJcsuSR7",
  "key44": "2bNeyNJmPurZVaHeZoWbmA4txht3MhNfS4nwKPg2DjgMUvogaXjajSDc8SnA1ta4e6bCqFij8DpvCYBDvvsARGBQ",
  "key45": "4G3h9YutESVDkLG17qeUa9fs2WmCM36ud2o9ZccWybsdrMgaiVUA5ZYomH3PiTxkF3fwUJ6bsNnWvVBukZjMwMFi",
  "key46": "4dYTi3g1bjW1mPVqajiQdPhQyyTViD7USyeX36ZLjmHHYB6qmpBYQyrZyrR2X8coBJEAiJEvf3VmpVvjqEnoKH1v",
  "key47": "2D15evuEHobG1FYaDZmKFCnJ2vFhMHJBWJavCzCHdcVVY6ZoFPPN21XaCoGnar1pdiy5UnaJkKispCqJS7aVJMD2"
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
