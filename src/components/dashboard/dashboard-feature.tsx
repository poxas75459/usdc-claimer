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
    "4pfmnQucafErBAGwPrcunz3Nkpcr3iW92QMZj9RxDXEndFuThtoXmfweafxTnCh8fguKi9ukaD7fdwm7LfpVzZ9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXXKf3HJDDg17fvsapbP1VjDSRu1j3TafctTqFzRUrXKVwDXjZ5KK688dhEd9b4ovHiKegwNvU1cBwRYZC5B1n7",
  "key1": "2DdoJ9ioZhHDqpNwryDtvELmasotCAXjysj3mtkUEwHSVWLBipbFYnZYvq9JKDhnytkgykjEr9Gmmi8y3Yk8rz6",
  "key2": "WBJXC7zdW7iKptD8i6Mx1VHMBZVFtCE1GEoQzB2UyT58JY4mD7ieKwf24ZFEbEtzQ7sWMzrP2NaZvgzmcW334vL",
  "key3": "2Djtps9k9mDfwPWsY21bic4xxtdy9Cum7P6TeTw7v1RSjjviRU1TvvU3Btpb2Xzkk4VXuSWHox3gg6aaS72a9Som",
  "key4": "5uEjBwFqZYVh67EmFU1ECduiewAkUsR2vZe66JZqkLaochL843wu6DW8wMX52yLT2GmdoToYXEzScwBzLhKMgdf1",
  "key5": "5NGtPkuUct7CxHri52GTnrPgyNy1Fao4mCv3yE6EnHsfEDm7jDXiCG1GLaXJMpnhG7ysMn6mLYiciT3SAFcYZZ8W",
  "key6": "2dKXJSogJK3FWkHitdJXkVmFeTiXFNLLGEiRrXCGAGp33Lu4PJUvTVWWzx8mJy6cAWdUSUcECYAt9TLBRcxCE9Us",
  "key7": "3MBAQkrD1JN3anJ9hWTmDb3kAdyvvEi3qSCiZW2YmBAM1oz5zt62s8PdqSeWFAirVVFroiXqa8sBWTTxU7ygrRwq",
  "key8": "2zfioSfeB7Q6RpkfRfZbxRuwVPivDdMfxmoxvvcxEUVh82XMjjdwXEZHhWqGx828f39ymLVpRPTgNtseDcBuAhrx",
  "key9": "3REuogkZ6P26Fx42ozhcSEBKJeRcRf7w32C3q7snbM19i8zmbRvFT4fz2Fm7iDBVN5FQsbV4d82CH7pKmVZ1YFpn",
  "key10": "2x3kyHj5FuPnbxpFusYDuzM1AohV44ueftKTJRpJP1Pb78mNcuy5cgdct3oupbNDPpRMBbxLVarSXgXfzcdeWLRv",
  "key11": "5uQCHDdjkEfvwmZdSgpAd7vL4E738qGJPLtv1pmYRGyCGc2GqB6Psqvf4ELJgXSMEJMABwsoCueZkJtBLriFiKV",
  "key12": "mLTYhQZh1RaFaSwrU5K7pLmRcPkhfo94FEj6SUetSPFV6XNiYm62fEz5HmX9QZ3G8FUz2XWkumbxv2JxscaChCN",
  "key13": "3SfVTDcwWRxGaEyDxnp4SnaapvDu4yeFsPNA8aSUzx2PSjb7R7MtJXtTBBzopjrmBBBgKePcB3Qeq9T8xJVVM6rv",
  "key14": "5ZW2osaBMGDFnFrybYdmvgwHahu7CnKDXc1xTo5MYLf3zaE3tmeRELXF9v1GSLLHyzqvQsmVaZ5cRvaxzWe8u3A4",
  "key15": "mpeVzkXrHRSez64bMUgup6LPRvbPaHARHFfEgBA8aekkmCp1sBWL1563zHoBCvwFpWCbGu4aVzuj2AJdNEeEzH8",
  "key16": "5oyBY4qK5dtgvzJtjJ6WGaiUCD26D563VHD3ciK9s4eABpuHDh3xGZW5sNk4iU5LZGMNjaWUPRPyF3sgjod8ytqg",
  "key17": "4MixF3CDRDgX7nN2oUaXMmXp4N6PoUhrcrEjc11jLwopnFtQyrVFrcB2BQpor5cDqtZKbXSj4mUZ4issPTsmBu8L",
  "key18": "Yg1rLxBbKHFia5jN9AAXXZFjEd2ka7HLGusVWCjn2Jni1Z3i9o3Z1GMDZgujQpMukCdd4xN7BiJ1Znu9u94zkNt",
  "key19": "2rEnHxSJfDMvGs6LpbJVqarpoj79hQ69myHctx5isRDnmscce7KghFpwWD2B47p5SDx2moDbrRWXY5t6XtXMpk41",
  "key20": "66KnLRv5UMnAuvk1QKFPrQrv2uqVp4esrjTV1nGdQW9Awnixom1Jxk9Cnv7ifycBrbHg3c7C7q6Q8zHaJws82zmm",
  "key21": "4FZ41ikrRNAj1mZbiJ7az28Yor87yKXTdV5u3JeYJ2ygKG5UhdKNCsChQ4CUYNG8nxUJyyitLB5LxJa2NKkegYSc",
  "key22": "XDBynGJza7SpT4KgoiT6XUWvNms9wXzcduttbAgDjpoB5etDA8HueJh1WnhsXkC7PeG8bpiXSVy3Nqv8u5gckGS",
  "key23": "58Qkwjahntq3w6358NUandsUXyLChCJTMyopva9aSYcitNZCKXZdhLbwRTbWoGisUUfFCFiYazbYnDbQ69GQh18R",
  "key24": "cdrN1DiGbcf2dKZFm5fGEpRLrGZSRTdfxBEm1wR1ju5zjLMAC5ckZVucyifD97R6oq4ADnni89xyoHpDR2gUYhw",
  "key25": "Gy8HEHVwgcHVkArYYa4CTbTj6Fr7hHcBBmz9ec1AAWsmJVVrbk7fZkYxzpeisdYHKMgnh8eLQ2Xo5j7ymMUiqqs",
  "key26": "52G299BX1D4TvHSzdmYwtpsQiur1UjLeBW6xiBPnQCLgeo6hEEYdUJGzUm8Wzw7kcCYkiNy5piFU1nMwyQeRGztP",
  "key27": "F2VBHoV3m84GyeWXCkrxnLtRvZrC9e1Bhe7QFqMThchfWD8fhnuHuaZQTBT4jG5bxf5MJu4H2YmvDCtMaezkBDx",
  "key28": "23ieNP7zQXWezKMGcBMsgEj1fDZjtiiMt3kRttSN7ob6CeZxCUkVNTbVFik6E7dv9dKFa2X9f1CWbHmhFx1upLRQ",
  "key29": "4mgrpDK41cpxbKjF181UfeodEc7VpivbagXHExPkh96ir2zg1iwzpNn2eikq9XEHgWb7ogUBz2GbwcWmhDrcoAHc"
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
