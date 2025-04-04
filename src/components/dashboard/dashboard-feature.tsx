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
    "3yM5y5suFifsuMof1VSxBySt6PisE3yfaMGSsg1ZoVQib8dhjN3UBAnuZkVyVT4gUk31NVbTWF8MUBcRnvRDgBZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUQo4SzNY2Suj9T2LnWm2UbTVXi4nJubekNvHFEEESezeECfar6tKJ7D3vueRrWdPSRQ58NU5cma9KU97F6D6a5",
  "key1": "5UUEU8uaFSN3zqefL2bcYTsYsHQh4oEXjkrR8RctUjz5WeYULD8WCbdC9c8R8dVrffqvt8RsXAKL7xHp2HrpgAAt",
  "key2": "5o1SjT66tRJTomm5n5s3pPmfnS64KEAjUakK8wmkFdZp7b9f2RFaFKyQfyZB46D4cwv41uXoZ4DbLNAvYcicWHtb",
  "key3": "2DvptEfUMXuYJ9jV1GJmFXQp7jswPfZ53dFVZ9VKyiWhN9bMCvxmjac1JPfk2ndtctz4MtnN8DwE2gxUySKHtraY",
  "key4": "5BjgVg9dp4VD84psaomVSvrGqdpRjJ3MJbeqdJaHDkhvifzAMAn9WbL5oB1FvqzYXq4XVw8XKEhQnxaUnfMpCFKA",
  "key5": "2CCzvNHwzZG4JqwZXzvdC5AG8xk3tUn9mYmX1jPkjWLB2nZFHtHSo8DkQNGVVAEBEQsjP9XgMctXXLeCRsCrnx9X",
  "key6": "5Kqs2Z9yV7Yiv5JGk24y9xXECtzyak7F6U8axAEYBBET1FzZGyX1PpVT8u89fm4MrWGJgTqBKudVMmRsVTzvC5Jh",
  "key7": "2U2pkVDBF3wLZvrhv8danzMJUENBNUFpi6F2kX5TdLQ7TDYqYjSiERsN7p9SKKa7yCUN5FBnayUwLAF3pKznjcYa",
  "key8": "3L8jch6Zf6ZDD6afQwUCZSyzK6RaH968XEJLvRWjp6FqGopmguaDm1k5VgkKZmo1prifSeZ2HHnMSMJY3BLFmU1S",
  "key9": "3fyhtnhogmij2KPeaBATZaG9MB4fPRe2cNWJpa8o1HRVWhaXT2kFXUwAcwSydu2fpokyawp3UNzAyUarBmYvdR2t",
  "key10": "575q2NredsZF59HUYxuEBHRqaYJDg7orh1cKb87QC1XdkbRzvMAYcD18XQZsynXcmXuhqHFJTTT5M3aQwa6KfYnA",
  "key11": "2wFyqtT3uULZF8qrVed3LaKSo1fcLxkD3rfzss3onZFannarTVWKMM5RVaBt3ka7Ux2kHVSztZwmVTY1yEfWEAYg",
  "key12": "qXr5G6m2nFJ2RZiVqji2RGFe8MxfeTKDJNSAZh7P5s5MrRB67ypGUVzecgoDPXNgbSrGb4xyMwP9jwjv1f8WCtD",
  "key13": "51wTbxAJ38eNvufnUJ9E5i4V56hxRkM1LLE6NoLwxiDTotLghZkd2ttRBiwS4crEQAfjkj6E9ni1oGnsEYE2PzWT",
  "key14": "5DTEJSTYpQL5BgEpkEvd4m4C6syD2r6yErZzQyBxETfhE4ZseoTyE8yNhnkVgQFSz4gZrb5KNvLwH4hwiBLBhaQd",
  "key15": "3V7tiCGrfbVABBQv8mvmihjDpuAiyNKHtqb6LYHvwWg6wWTMDY4rttUoNFUF7iPPvgLNYaNa8qMJLmCj1Ds91P6p",
  "key16": "bNpC84fLvfY7Ud9ey2x9H2P344Qd5SAC39QP2BLjsi4gVEitgvA9tsKbhcEtyxv1fkCPJiWWYqN6Tsky22AEpoL",
  "key17": "5fGXTR9j8x9XCzAeYGoR2BwsW8cPS4QBYdfVVWqy8Qj2JXvZ3zbbBdPyAA6YqE6otCSXActVsVEa6vxZYGJheLac",
  "key18": "dZggWB3oMhGy3rhEaeHj65BBWWqRdAodqFpu5HwjQr9hYbXG21MvUpZgSnckT89VFHSqD7su4UrR3TmVsE5YQkb",
  "key19": "43iYCrTeBNGcDFAHDtbvNmwisVzx13tauokSse6v69dFbyV41fAPwz6wfYVhUzd4fmu52dmfYHrzAsBGqZZgpPQc",
  "key20": "5dRtWfDe4yN6NyjRH7aAwJtZqTPEBWZziT4te9PPB1erXDPwSfbspKaVRkxab7zKAeHYmW4XNKnwXi4zEDuSFjBa",
  "key21": "2G5KpyU2XsDTTB7SseftPo4vajvpEPdymG2GwfhZvLWqneKqFVGPth7Fkos85QU2sinmrcoPw9jJiQPovFxo6E4o",
  "key22": "34RgERhqbS12XECo5iK78hCcYtXzXYj9bBgaEsetJLc29TX7NtLyp9qKNRS25sYevdxWbkkWV6dL8R7kMtvSkdEK",
  "key23": "2ZbEFDPDWr8PhfPuZ59xUYdHmzLu3HLbYUoDghUUh6FouDtnu5XyC6Dcdrku53wbaA5n4Roh9gFheBHpmWvogLzv",
  "key24": "4qE2yFjcB3m1TccDCTDnypRJrjHycBPvkoghLHusbAQ7J3PXSfCSnmhxEMC8xeGr3FEH8tQavror96xGmmJcbCgV",
  "key25": "26TnyHSLJGPctBCNMBpYBaz7ivNvUwuZ6ZjX24v6SSBvAaWTX6ThiaeQchpbMYFvW3fNY8LvN7gQe68YGFN5wBcJ",
  "key26": "3PQxPtNnuPNb68WHeTezjo9X7LK8j6bCRmjXfpi6DrfVCViyrvDjcTQyrEYGiS5zGHp7VhMroQExa3aN35BUZqbu",
  "key27": "3EkU2XKfiVAz9U3VUgTB4db3DSpc6ZdnGwGg2i7aqCTmcBXZ1UWC3J1BWwQwS91yYneixa8bwdNbyavVvUewj277",
  "key28": "61VVetmkU6WfiJJeNmTZ4Mt8N1MrAGNNBCajwJaHHoU1ps2M7aNwjkF8zGU7XdXitM23GHeijtXSdnRiTfL2wU7h",
  "key29": "47z37JzbSQWuThGiaDJ5M7DpaLMFPwqLvzgQZtu9HCBsadNxBHFiTmchQKBqYU73VReSqvF8uaU9Y1Mu42JZc6YQ",
  "key30": "5coyJVpjSjt3jDskFgiVGN7999hwsr8HZdS4cEzcZKbpSyNWXWpVCVC1Dg5axmeQag7MWqUeZSxR9zL7eG74tGqT",
  "key31": "22Td3t8RsUacjGMkTadChA9RgLm9uSh7nENVhkTNQPd8q8X1QnGfMLrae3YvyeEve4D5xpqZYvoyvzqMmunWxKro",
  "key32": "4V4AGoLbv4k9fTVs4TsY3WWUZhBEo1Frz4iEnarPugoEu7uYbcuED4G6xBpy21kvWMdMmfwwYtNt1nEF3JFJZWfm",
  "key33": "3uPPH2x1o1vDBRSjvmxqFm1FDq37aM1abfcqgLno1Qje46Hpt2StWDyfww7d1tRRFeo2M3vHVu32uFxbapRn84yF",
  "key34": "2gwZejcxwmU2rVEFNMWqDhbv77RGDxczBeyaXAEjLoxhCpg24ejL1DyMocpw9VjCRb5D5R5aN7QmySDKT9Vdcu6y",
  "key35": "2QsU9F6N4yhtoi6oaC91joNiYAaihL5d4KUdg3Q65ecnUYz1KrEAmsmRaJf3K14QBJnCWMisqbWu37UXHRKLFpEG",
  "key36": "61nwZzxqFVQFdTpGsbLCdHDb4N74JVb29Qm2nFxgeAfcL9KeZKQ85ntVBPCtNqA9bqAY3Umu7xKJWBraUkKLpZNa",
  "key37": "2fwaKQHJGQ4vc1mgrbqYY1mwuJc2z6BSJNG6oczPhEVZWUbW25oTMKJZ3V7q9Q2Ti8hEkj2ECU7uePnZLbBE9Nxb",
  "key38": "4DgLbt88kp6AiA6m3F256T8LvPR6cyUsY5AsH1992ffsM71od2QRVgUgLNKr3RNTCGs7iPkuoRxr1NXuhQY6KbfN",
  "key39": "5DJC1iBPQbko81CGsxN8B5mzg6MtRN3SuDRhjXxUy2DoamsSGvy3nBPHQZGthb97BqnF8S8UrtAPQCKjeXbyVmiB",
  "key40": "5xK3LPpcXSGpBLtrXexiuXnFMFeBx1exH4BsereNyP29f1LviQvarLGnMmr7BwikzGPBMvt3zmf4QQqB1yj16XBh"
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
