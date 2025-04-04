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
    "3xJvP8osduk2Jktcq4s295nDa3Bb8NWfiyqDqfFqR2vU8JfxJknwKHgicu3xbXbiHHriCGi78WUKPxq1Dh86V7Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCPXzC9fTNe6WY4A2JAdCR6691Sqz7x5dCZPc4PNfMUsgqFhJ3FX89vhJHBYTioE9EoyoArH44AkcMpnuoHvCLo",
  "key1": "5i5JJopqjaH1E3ZQZyD1Yn64vSTpWFi3fsBxHuaHJRpNfuixLNqizKdEeaVecaQFnRA5gRAm7aY69efYf72dxx1g",
  "key2": "2xRWCCuEWCg5e5KZjMUaDwVoNvLHscik5c9HWaGBHwEBvDCLPuGL4hTUKcbQurDe6Dtsr14ZyWAjsn1fzc7wR6LB",
  "key3": "5DoxqCQvyLnbGkNxC2U5yXVpKpHBFK4XRWGyDuHDQgzX4usvWoENN1BrPkTfjCyF7o3AGZKR7QWQ6qvkpJxiAZkL",
  "key4": "2vCKSobxKwgMeCQVYz9H8VxR1W7g7zR3qXfzvdqLaUspdbsA4RhtCC6pZaczTbUjuN1tvPnrsWwCyKDNiATfb11a",
  "key5": "32kLtCuSxW8FDcxumzVgtEPas9rbyPt8fxX5L6vajuoLu3kRz8gAbu2Bnz8VytWG97SKAyDperH1Dy9GFskNcAWY",
  "key6": "5MzWscyEL9ftmn74WTH5bNHgpg1pt4X6AK5U1cb7yaxb1Heca3JLVz2cGzJYpB52UDq1YespN449E5BLLcUw7b7M",
  "key7": "cGEGrTub1ryTkugEEw6mRo6ehRc57es3Xrf31j3giTiKYRMk65xi6LW9fBZRW43c56j7Yve6c5rcPX64qqAoM8h",
  "key8": "zvGJpDTa9Yyr7WKoT79gvzdG8DXRs99dGf9qY1PUh4XadxkM66HtKZHHQ2oyiRvnKfiSnwxafsq5J1ZXCCsUnZp",
  "key9": "5VNu3AVpa8Nf9uz491W7b1nazgaJ7CZU16PSzZ9G3rnpgRrAsuiNrhZTfhjswpzihZLWu4oX67URHA6UggAwBukW",
  "key10": "3TvgP6MB9J75o8p5WwmgmpWbKtbQmBv3TUKddJXFQwN1ieo21WxRcM5KP8Pej2LUFyatXW4375DsAAkLDu3kFDei",
  "key11": "2SaDEWHPsb2LJtjVfGxzmrv1hEMgaqWsvVr4HwZfQ12Vndb7vGTjcSKYwiBosWcGjutu8ERGnLmfi4Bbk2Uqhtzt",
  "key12": "teZq4DZVoaAW2ycaZeh1KBF8qHGyWA93r9fH8BHXfnmuu8PqBc6YPfUrRk1gRacXXTvnEuZBrK7G8ywfxKde7tX",
  "key13": "2nTJWvPbSzjmaoJBTKFhWG51u4RFXdLyF4hDuSpDCt4ZW5kyDgmeCn8aajeGWnJgm7pvfsnHpUyyaPR8UrbZtQyZ",
  "key14": "5MjgzgSbq3QF4xHFn7VXgSCuczQHgjneE3A7r16PfdWdYbo6RpWXnpnoD2Sr1bvFSiaiwrdksQVQ68rDsSgpCRSz",
  "key15": "2jwa5LRrNTG5yFGu69zZvoG3GPvgeBBmJi2NeACR3KNnhK4bXMSdwHevTaaMMwzqp1wn5vU9JY5K55BoDaiNQedD",
  "key16": "2ZbZXDeD3PkbAkwNfdELhATEqGtYexBJ5hihLLJ9CDcEgfZk2totvv3YzR4qywa2umTueRfbZYxbBUgnPDjonkQu",
  "key17": "2FSXhAyLtSRWFwXsFsQenxNWtuSqCW8VdcbJSTR5hgE5zy2YWZchGovFUr6jb5RTCuyrSzV2AufrNxkbw8FVxFAj",
  "key18": "4YjKp1fFjovqehGmW2imvBy7iHniZQpeBbmKx1wzEKf8gDsdMvfwS2juJ8TUL5tYB67vtSj17CXk2Qgrz4KQmf8M",
  "key19": "AmN2VnhJGdzxr5zYg3B2VubsWgrwcXRwYA3tynThCMf62D79wPE3ncetJif9sqX2qBUNRW16ous5Q1U5vwPfEqp",
  "key20": "3PRnag4JQ6KxuCguvrSarLCtvj6SoNsHkEhEMu2Yk9mhfB9Tmfcqxh7eQPGRhA9EEpEUsfBzjwdWj9PKKu5yKd9u",
  "key21": "61GvoPasZRqJcuWKp1GDkG7iNWRtYMqS2u1DWuL2osPcBgckyVuXa3E7EeEPEiUmAL3yNUDJcLKRJTCdFWuRKZwD",
  "key22": "2Dpyi9JWcdnHV1TCEbACSGVMMV3ApH7nktrrEp4KfPpSTemnpmR6VamUZeiqMezz1X6QafJKhRPTRg51DMf25Est",
  "key23": "2qcJw2FdKeJB2y4zL68DsBWV8XFwTzQFxUfWTTrGh8oCa1geChQLoCUMxn1JA7vVb9Lqnn6AqQ6ZGv2KoEoGi1Mb",
  "key24": "4YNV7XgVfuryuYqcQuxKTpWHdbCx4TEgJVD6GP7k3R6joVTH36ZrcFZRZqnjeiaaz6xnqDJwRgt5xMeWssyKzTzh",
  "key25": "3CRY65HGvVWkKYbG977NmEotaz65miuXYxZrm56WdHRwHfDLkzSazdCYmY5oYAsKKTTxpdJZzge11e242PKUKBka",
  "key26": "4UY24uqdVS5CKnaLYBtw5RFkTkaB7qf2Tw69Dix8T8K5usdb9J96bDrDMJ7PvknmKeMKADu4uTUdJTikYnLTBxJ2",
  "key27": "YtKUcLsGDr8T4sLVwR97brE26dfsdjyQfJrp7uRqX2a5ZRPBLs6jmVUnxj7WTEMrjamETE9K7NwgC5ucSLBGB1K",
  "key28": "4BjvJpAUH5AMcMaX3SBCzv8sSLfVQtJVpvLn79jhkHyCnAF4oVJ1t9kVEbo5XtwZFj6KjVW5vKE3uZdyQgn9KicF",
  "key29": "hUw8maYoJ7vuF6n7MfB3u1e3dYSY4YXzQY8RBeh6tZLaAFtyYAfCLsQesyQ1gqxUaQ6h5usNeVNRv15pj21Pbvh",
  "key30": "22UqRKoRC8JXZW3nb67GUzKQrG6uUieWKxHkpmCisbjceGPf7Pn7SM7n8qtNH2Prkm9pk614g9cJ6MkiL4i3VVtQ",
  "key31": "34jbxbvLFWgVbHiazRrJtgBmWwitwoH16mXHvumFxydXvC8MSokt4Fy4PKkX9bV7wYfH18mTTtN5wZTjP1LcLFxp",
  "key32": "3Ntee8GXk6ERecacqg7WgqjLXgCppydVCHQpUCDEWoJA5gDqCTkVdm3xHnP2vxLtTkX8gS9wMeNFc84SLhiVMHmn",
  "key33": "4yYMPNXuQuG81UMpj9zt6eLX73H3QzZdAhz3WdSpdWkG8EeHFg8FxirbsQaQrnoNdWrT7GBoG1KkDhqcoCEKEujp",
  "key34": "ytMQ6Jh9F92eZz3Y1JCfa1yEHpEeK4H2w6SCoq6P7rG8t37e44r5Bk3t1ZgYESaVkunq97CB5Asi2fVxkmKRt84",
  "key35": "3EDMPXWAFJDFdQPULfoUPbEPXd9WuKEKiwEqMCT5x4KgKc6mzBfFPTZrg42UJavmriFdQ5i79bFevB2e5aKFhMCk"
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
