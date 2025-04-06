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
    "c3JxjqycTenjXdcUn5jNqjyvP4CHNus4W3485nDtpitrJyKarxv1sgk13BUcjDK873wVFemwFjv29tq5dFjoPwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3as6qoB6Q5Ufc8gmzjfKzVFwRkS9iGb2MLz6iURVteLWEUTKQRbvLZfxQvXGKj6K2KVRST6S4ovqgttRmiZvq9PP",
  "key1": "5MXLJoWkwiasckPSMDYCnbpoydByqGw2KUX31B2tSDftMbywey8S1m56G6AsFPWornfhWZSJJi3DuywQbpQ3rWe",
  "key2": "4dxfqqyxN4m2XLzfUrzY8ncfasbCMTeLSt2Hc6YrrxvSBe6UjSAmHRkLPsZF7GVQ4GjNCQFScjySzETUHsT65XWB",
  "key3": "52yLvyk1uMQgVGmEYpDAYjN7ca9tmPSxzAScByzecf59hMvFrEj3zcgtEREXRcBhGjCAtoUyspFpH2pQJaRJcxTL",
  "key4": "4ejLSj82FMjV5RywqD64hG7Aeiz3ceW1fR87jBNBrcAY4FpnHJ5xtyXuFTqQuZfcEhkMcLFhR67rkU6Hy9DAKRUu",
  "key5": "4vvH1epYKCnEc8Ep5fwr1By5kcCvnV5wwwim6cMA4AGW3ezyHWKJ3RiCs3hxFvD6MHjkn9d18QMB4tiaZrLGy55y",
  "key6": "5MFTPyLvgTZdDPzaaC4mr9Gzp5ME3NzsNkgmVPNXhXfcwP1wthfMMnhsKWrv48xFRtu9h5CsPmwY6mLyAZLF3A36",
  "key7": "66fLoiURssbJstEHd4aqBS3vvpW7G4KbSj1Zw4VSqD4VMLQodyVUAZwp5rrJU1PhuQCjnPcbC9RpPmFDisB93GGF",
  "key8": "5QQ5qVr7ZUkn81sGgRyYEUMgMa9GD63Sp8fyzC7meWYQZYiBuvGacwzzzHnHaL5y1gsQivWCQaoeoNsVcKgvaiUY",
  "key9": "4AM6jvsRev8TFcVGVCGg6up3nwx5CJYwdGTSj8sDVj2B1N4jwXp6tCF3C4tToutAjbM2ufzTbfBPtYi3msYrtgj3",
  "key10": "cDjhUgB8Xc2fw6TRRHq57fnoNiqMLfFobKNyXGgwBEo98rstyzfgg9hLHB4EgNeiQjmh21XU4ivmT1s47CS89Kr",
  "key11": "2AKt82PM8P79qx1hEt3rfvH6YTC4hyUnoEJwdsAXimmzQkwuZPxBfVhEeU8LxwruuZ53HVWZjG2D9VWoYgbgxRnQ",
  "key12": "55kuKMcQkFd3y53CL8UeCMoq3uZPVbHLxG7yNSptU2M3nBcMqgjvqiMk5LKxkbw25LtrCaAAH5mEyzWnDphtjGSE",
  "key13": "aEw8kFWuSAZFWEPX3RaNeWe68Wp3FcDQoSZmTWr8B3cPRkenUu1o67HDmfJVvLM9utfdsGAdReVWNoaBfQWLQsR",
  "key14": "4p37vbta74KuQiPaTD3zPTfctMo51ZWpsNXqxvQyQregarsZSCbG7E8gLoPaV6oAa1L1wkmCfKef9zvEs76zc9zN",
  "key15": "2fULtZxLgKtBmwjRGjHadsvfi4zdQYBGRu37jN6jSbn8A8Gb6WFkYe33hZ7PnG3TtyACZZ1P29hHCHnPtEjfSAW6",
  "key16": "534MxVM8fBMbWcBbkZGBYg6kLEkp5kcjXMKWJTRfqgKn2sj799uSj9cpMZBSpqyeVgHCGHfbBgkzC5QqCdKt6ZCd",
  "key17": "24FDUzDpppj6jpTqYKv2ARvjRFt28SRftBLfzdBkyz3c8LkJ58MBV9PaEbGUUnh3DbvF7YeHnTWok7xg329F8it9",
  "key18": "XXLs16NLBi1vU1YvCKMGqguE1yq1gZmRvSqKDCo4yDdtoBsE3K7m9RbbvK1DGS5j8N5PnLUYAY2c6kwpGxt5Lky",
  "key19": "3CdKCnTJNvqivMqxUCLgbaESef7rkXhENK1QKJ4ThXMxodZ2riyj4qysttgvG1pVV1gUkgs5CDvVRk4Pmh2wgwnV",
  "key20": "2NKzG837LAGuzft6Gg8N7Yc1YsN8ez7VVKSBH85LaF38WcVKSGNtJsC74WDy73HUQX975WSMLVnWW9x5PKyvP6zD",
  "key21": "4ghos64Qc3t1EzVs5ANQqrqGsJYbhZXKxUKof8HZ3kbGetNsUh9AakRde1aRby6cR36pUHRxjniKgksbAzRTFDzh",
  "key22": "hwGqagPGwnW3D3AZtBXhfmhSfjAv2DTftda7Mp3AtG6M2WFDX6wri34zuwKbFQqjqoRZQ78hPXHmyT157fYAN1i",
  "key23": "5okdew7FYPwPF6xYgTM3WU1fP4aqbisAyhEMbpAVkBiZgkHejV1rfAUz2XcSjEvKb3pishDGnteqBdC88bVbUHbD",
  "key24": "3YEqYPC2SNwphKcFhABFceWoBpckyiafiuiGE5tHxrtiPkEzfjMZ8FVpM23jZtCvJiLGpujSJaQrZJjWGQDaCmiq"
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
