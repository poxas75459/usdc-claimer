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
    "3fiyQWvbC5k6aPDL3TL5p6tfaHCpyR5Lfq2Be9iUFPRo2TV5TmPv2PNZ74nKHmVs35ssDjWMRi2JVtdEMqAzfnc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5s36sXUv95s6oM2ExPhe8ege71NquvXH1swaHEzVktgWf6ELkrG8rDWkFf8KwTtgfZm8k1zWMyCebJgf4MB2A8",
  "key1": "Kix6Pwg7kXQyYakENXQYjoxw5DF9HPQdsM7NMoiJ9xTzjFBYwz8vLMZ4jNYQrgXHvQwaGUhGQjQZoHQErMF7VF9",
  "key2": "634Ap38YL8mGcsoCgzTyauy3jAGHyRjHzrfZTZLtJ25MPE23EmGDLsMCgAUN6Z4e4fZFvod8EUTsFUQFLhCe4yGR",
  "key3": "2qjYx8DuHSG7YFoFqKTb9xBzEJi9dTnfB9KgbirbZjwrWRiEHBD8cVWp6e3z7CfJ2UF5gS9jsWMF359F9RViZz7H",
  "key4": "2EtRDFEZARC4V9ETqF4CkpUkSRdzuFRBncpmVyfVRGCgcjKSirGmZaoSFAmY1dzGDtJQK1WLR3n2rCBwzRT9grT",
  "key5": "5CMY5cYVbASt3fho7mYCJT6eLUtwhQMrzs35YVZMRt4podZHA23cvyueK35jXCwYJz33WQArRaUjEfzaDeNtUA6i",
  "key6": "3AH3z2TFni2LCVAAZkpa8okofDyyApNYJZFSus4pGTdifV2APGF1xx8dqX11Sqe13icZuX7NLvuo7rKEssiapWm9",
  "key7": "61LEBi1VqLgamRaCecWnejQVzgNKd3tz1xeXCaD3dzcJwzczbptzmJRUYhuisiy46WEM7ftqGFyKLuecxLpA3xFV",
  "key8": "5TomkkCrEmnZccZ15LfmyaPLLAb7GubvZtx5sgebRG37aJE43grKVT2yYHHT2MJFPTj9L6nFJTsFtpjBGujNpPQ8",
  "key9": "4CGjMwr4qNHEw9jouFXcewkpzwXZP7EUWWTgas1MmgRPRyrZJksU1mACFjsFHC7nYtm7niM7VDhLr3XXp8p8kQzp",
  "key10": "4whnhxLWMJFCypXnjpZVR7NqHpsLTSFY1Pta1PmoemMzpVtgmetFSzvBHkoaDoAzhKihwNETmfykEDA69dKygVap",
  "key11": "29BWYe2TGoHdEQkvEfE4rkWtNvMKaWeQdvRs7Nhq5amnd8WXfp6N3UXmgwBHPuCS4w1Yh7NiQJ2PxrVFdofiTe8Q",
  "key12": "rahKM87RoPnPJxm3EcrehmprQR5wtJnsLkphqLoiRMF6Mdf8cVksWYYqwCH5t5hgyy784n8ErEUN9TUjoknqPtF",
  "key13": "rKp8kB79iHEQFtWNyEUSsrTNgktqjhjXYZAv2Tr6CjWHaCPm82oRuUNKH7WmM1d8K4fm1aPS7tT3f4iu9vtypgV",
  "key14": "4fyH7UXAFSeho3YZHNuGT98bTsyVNgFMicTdeGWmJ845MyuW57jxnuub3gsHUERNtxcZosQysL7WLxSyDisSJpmi",
  "key15": "TcPCdrpx3cLqXABzKirnqozrBonc78obVrtTyrgkmXR9ibm3VRLVkdR5ZUM8LXBpF6oe5CWonFat4Ph3V4JZz86",
  "key16": "5wMmmhXiJ3qcoeMMjqpqPFpMujUmNGZUsB18fzrzSh2cKPnCobXVufipNz3MzCiQHcTL5zvwzgKKe6dfkczRPHzr",
  "key17": "2juNv68ZqzQRHkLiVSyMNtwbnfsd8bDKcLsqC5kb1FdvvMug4ZjsySioKsBvbgYvLTHZevF9PEnuyUxmUFek2uDn",
  "key18": "2gyDKSpWnH8U9JczbWgEsgxUNGadpFgzy5jf8BeDsWf1dKNvWevrmZQwsbqAmZxxXmwPmgYMkSvSYmWHJTQT3GoA",
  "key19": "YRw9YoyhQuSD4cegZz9B6Z9zFo5Ljk8hE9ct3fyLfjCLYwBSEJP7PuoRLrK7zHeEJCdtUcN6ADXMGFLpKsw3gzm",
  "key20": "3Dz85Ck4v33FoGVwkoP2FwA8ocCU7wfsuMgYTB4p7JC9k3H53ojG1yVY9Laxzp1aHkGAcEyBA3f8zJwTTV14TmCa",
  "key21": "4EaTs7aX1wEHhsUREtPvf6r8hZU7ndHBW5gjehvTJGhq6LWuUgLAyAUvbKp9tSGfkQN656TvGLnyV51jr8jQAce9",
  "key22": "2ibD89hRiXRBdwsbX1abngDd9nEku3HgVEHmfW276QPGBjaUu1LsD6a2d7qvqXhdCcZfLmQqFvani5VA5uojCm4r",
  "key23": "jcLZErxAGXPtBi2ZsCsdHWZKoZJp7dVi3v9iy4ubtXVvUVX5QLvERo9ieaXVUvfS6LQzvuKfdnHXELp3Thk9kX2",
  "key24": "2643JG2QGUnn6gFnf4a71Mi1FgoQf3x4fGRMDEmqVENRARFWmG1GxJWsKsqFMPSJx1beRvJecRrsfqNzjcUuKFcu",
  "key25": "2eGXDN9e4ckZxcUfYMGgXSDpz5AEWd4LP2NdwXLKxsuf4awmKmZmK1qPny6BjhfW1PKd5WwDfqBwPMgZVz8Cwz2F",
  "key26": "55PtbsUFcNMAcxNQzPf7UUV7ui1eavtis2L6aGnwKuUXx8mkuyywa75XzMqumQzUsGDCXVwHfEjqhJb2782PWRsA",
  "key27": "4aFVguiC6Cy8Db8gnSptpV7bxzNu7etytzjiiSDk4AbqHVnL1GVhUAz6qJWigsTk8EQbEZNSA6FocEpKXWKMTw4k",
  "key28": "2631gy9JYZNP8TrrMUoPdcDUFnUJfwm6i47p793FmccJJGxNwduh8PG2gYCkW6MrLJTDKsVjHNHgT5LfPzrxcEEF",
  "key29": "7YBqaHFqUfwhy7bt5ynFqFXjXwQVfEmhhNHsw5e7z35wVxfXVmBDtifXG6ZTKNT8PoMqA772JtmFFCLdYqPwCD4",
  "key30": "5mRgm9ARd8cDinxYmndTbTrPHqkiTEGT4GzDdY4UtBgBFcKvvE4rUhw52iSNfRsNq538GsVtemQLQDvAsZy6DoCe",
  "key31": "4kRW4abZjeBXuCFCfLzaQEPhRiAd9JGser9HYHQn7URRsbr8KBcvfb2YLiZre8Ls6XfwAbuWHEMsjRZbBRV9XX9d",
  "key32": "2C9thfHkc8FyvCSThmGdEjMGgp4wf1NqagaKwdD7F21FpBQhgNv52rEVGgQKX5xdm1J2bctNDqnmEx6DzQdaGX6p",
  "key33": "124tGdtxKRe3Ps2Fgwy7z42htwPCaQqFM1JRurXgePR8TztKtXfBzrafTtTTVTQZY3ebPyKwEFmxCEeHxQKVAX4i",
  "key34": "XZAVBvpCKckTGXwcEmNcAGJidRoRPofdc3aV12gVNqZhwkMUx4vZM4NHYCFkGe2GfgNAon55LTSy8kBAhMNtBdb",
  "key35": "47nYH8e1K11jH1bp78o1mTHQq8m8XMSEtragRmmyxfZ18obRusv4RfEAADrGjT6iVPZ6ghpGLEyBb6Xgd6zTtDjf",
  "key36": "3gaphcyodkMgti2U7EHiTPnV7jhUWeqLxPvgfJeQoCKt5KVsJrdEVG52z4PR1oTs8NjTS95PN3WmoSCzYKZg85A2",
  "key37": "3EQt7wse6Qzt25Xzj26KTAeWfjW9ZAdfKaMJMdL67U91j14SpvEq76VjkvSyDe7UuNpayNYxxop4vX7ZHDVjiCG4",
  "key38": "5psjzPVvDxaRd4nGX2cSAsb6UgnnuwXipmpWgQnucz8bk8xX5AFAVe8CqDffX6T2yojRHV45wr3SjswZ75tWMdoX",
  "key39": "2c2TK9wbpuyWmC1LLERnxn2fsrrQyTu4uuTRJqfhCRZwweRqqyLJUcxWuHhPDTaAAyKkGsQEYvi2x6NF63yYVgUD",
  "key40": "52eMj1HJmZMhDm7M8UZPEVGzkCSYyUMoeUFp3p5qHUPjr4yQrgRuH5xuTDssnKQYLNXcWM5naGSMvZTYpKk2Dooh",
  "key41": "23f6B1kq3C1W4dKjy2oMhxG9yuGtvzQGxktYJFKzV3zeMiLRwhJZ8jsB33TgQeKFbxT27FRWCe5rpZEvpSXWpji6",
  "key42": "45KBogSpJUh8sAKCDM9mb1vrgVQYbLYRFixHLz4dwW3MVxKtqdFHE5FQbHXTUpurfGynKD2oDMDDgNXikHkrEiBB",
  "key43": "civ1d4zButYa8zQystnGVGWJDioJnmUznBVTwnSibMU3LBUbS4bghb3Db1YdioSXvLYANukwgbj72DCypSRCR1E",
  "key44": "3PEiRL7SmfBAP3yossRwUr5gZeMLunEqpT7HCzeChJ1KHh2DDKaRCRywPvzcqZbsuvv1utMNq86UUsCqxSQxbDjs"
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
