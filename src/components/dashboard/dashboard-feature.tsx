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
    "3q5VrV1UCg1EdiizCFGNyaVfqNNFwCv2KwsdiNZtRd5MC8Vaaatzi3S4k4P6uw2hSzzSwz5vVoEV63Fr1bDw7Z7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgjPhLK6gLkyQJezdXn4FWwFcdzGUaLEEAtMiken5Dr2yPzKvAcyZ5rN1HoQZJMh4jSeJqzEEmVcrK6s5C9uXGG",
  "key1": "5TxwYtTRB7gj5XW8UP8JqgngyJ3fLYuQ4hf7ht7u76ezU5MwRfrihA8S6HLhzGCfGm4Lay7tvGPyk2Wh24PkQeop",
  "key2": "pvSG5nfbdNse1idngt5DJX8dF6diLuf4UDFdUNufGBURniXZta62W7b9WMhEKsC4azEbXygTCzLvz1Zsnbxes36",
  "key3": "Hc2wcVo7MpH1GDh1DtYFyGqpjFWXQd5zav5CYfoPWJo94CRHEqV9tQCyKcmG8T8JdEuyhJjpzTUkYgWA4zbPfbp",
  "key4": "UQzCu9y9mLLk4pd8BPFtrnCBfuTGSWoQj8eg64u69LiQZPRQoTCePpZ9NGurr49TxYRPP2bAKbqs3seTfm6mofz",
  "key5": "4dYxGdmMzfe7J6JUi8zND3zMvFXTbJLSweKXfrLKSsBfuCWLe6see828wwoamRc3onZxmK63riUCX85wEqehKody",
  "key6": "5PkJsAAD8in9dXg2f65KL8fTak2eNnF2gPTRYg6sNWyszHQ9NKbnKQHUW4ccJg1aktLhisAfusr87pCDcQCzLR74",
  "key7": "3yk2YBUZ4DLKPx8jTxCEFpHBBvt2pTdoT16ZdkosaJFVjr627XdGJohH3aXC6oPadRkMbus4t4drotJgmyfXidHK",
  "key8": "4pZPH1p58LGYEUpkTSV5WqK6cfH7TbHqRVNNfcKgjnzgugLfFop7nzoHUrB7tJuEr5ABpM9uGVT8P3CgWfduwQvK",
  "key9": "TwPjqXFbDM9PdxLFn2v9dhD77rPE6kXYxWXoeVqxiDuHfygkBVr5sTxdkikVMNnJ4hmnHRnX114LcUBMchdqS7c",
  "key10": "3yvKj1XjaFFpDREoR9dD57TPbpPBogoZT5RQ9AQn9FQK19sqtUQ4HEdU4EZWcoeaRiiGdfgJSKGJhHCuVyEu18Nw",
  "key11": "5d4V5gRk8mz2kAEpSqgsv3abkh7nkhyNbM6qh2fTatFfQK5PXA6hcz73aM23m2WyurZojmxDRya3rHV12kw4XFmV",
  "key12": "38CsfnZioeHvppodb9XVjzNRghiFYE8YW5NZfh74Lg6BiCUVwmwRMUqUigVFqErdCSzZ47g32QVqY6QSwTgqvzXy",
  "key13": "4myJtUMpncCx5eAdv57PwD7B2w71FAY22JeXZPPb388jN34sjEx7DJBLnrH2HPZDVtTzuf2WvopriSnp1s6FsDkt",
  "key14": "3ygGbZEtbSeyMxdfWmaKrcHFzcc9TtSEg3XV1Rx97M3RdEqBZr7HjmPDopk4DBZwAkp9JfnyJ5isLgvhhLkQ2WbL",
  "key15": "3bgrYVqYvx4KngYNH5Rm76pZPacrvGKWJuiYaJmab4sAh5V6AsCcsdtK7bn4KJcoe95x2VnQAZGtWUBNPmDwcMta",
  "key16": "4YQKQZH4hR1bAWDFogMe6a4H7ofeer72AUKKtZyYPoHxtU9N4WgzdWFvZCyKDWTVgsDLrN9VQZaVoagb8iaTBfyT",
  "key17": "4Hh2jwVsuu8gmUw6TcK9BxAPVVUr4deZ4WyrxFt7n1tMgbXXUFfFpk255cswtbT9DxRkm9ssNcQjpfmy3eGDSub7",
  "key18": "4niXDYBRdJVgDNz76H37qY95TzFMs9FVjbdj9Nyez8KAcuc5qwwCRKaWBwkJNtXhdBH5xsHRdoiWEsXFQRMJucug",
  "key19": "oKAVn444UvxgyppPAmAXG27ErmqBwH2i2uM2JLW68VukANT6jQYm2EUjTUWxvB21JLhXDYtK4peur6x7H7ngLrj",
  "key20": "36M2FfQRH5d8s7LdpfZ4M75u7RGmmQjLuc9LwqbCATtL1N63ERXLHneGEraopaikvokwidp3kx8DZX7rfckQFPSF",
  "key21": "3mJMcaLUdjBWiGbt7Y4ALJ6Dmx48615WhHgfMgAYwqEH8LxsPy9WtRzsBVisq7nFGS3AuSNXcvXittBiPrifVXJm",
  "key22": "2XL9AXavfx4g6DRvtdFkBbVNDgfuBkQGMmiHttedUsa6qXJ4iJwmjA8xPdqxMysL8ANYPb3edq9jCikv2TnjuBWr",
  "key23": "3CLSF91Z4pEXWzeyrUovWGfBTV3zK8LJgZJZuVBriyVRTZzrCurY9wxGBH43gRUBkpN31WiLHydg6L6nZqQUwWMV",
  "key24": "2TPf7NkyK4LVioC54Gi6LGkmhZXkKSUu9fXCeJYAkcvrQz1UWVxTyEgaSThwH7e667PkHxXKRnerbgCoNHJnaDZL",
  "key25": "4KDopr5u69EnUEqLoy24vYf3VLhuDh7x2DepYd9JLizCgbn1xgTAYHZaMRyhpeZoFGgRM8F3sZgz8BLdTUNSEDoB",
  "key26": "4joLogVPQRG3gEcjrR3q3Ro2rELTNsUwycf4r8qrJqLdu7yTCfZvg5WVobefG5psbxZPSzKpPsWD5oBN3qwrXm36",
  "key27": "65Xj9hbwuC8FYrTLuEsHVF1t8Zcs6RLzPqBJVK7nhTh9uXouRoLCCaJMirXQNrF5hw3rkK2St33VNXSVQ9mMGaXy",
  "key28": "3Z4SBxihiPW1qobCfkoiFXDY7cHprNUw6pvrGRF4BioDec979cg7DpG43YBYCE4Mc1qXVVgpbm6CKnKerbeAhfim",
  "key29": "61vgmehK3Kp2DcFn4sNSdfrmvxWPV1RqYEfrpVueraYDqrLzpbCSjcz3dzfD78DTKfnRCNPJhqtAodt1vdAPfncY",
  "key30": "niYfFdcPs9woUMoeLe1UfTfTXEgWVMyN9FM4AuoJDGCjZbrvZLbJQthAV7BhADXtSpNUVeqfvwkB31VKXAty4b3",
  "key31": "sTWdAVnVgvE2nr2uUD7FWrKj5US1fh4FGSe8YBoo1M8egg8xEE56cKE8vkLzczAes8emHE3gByaUmDa7D9NVsM7",
  "key32": "4Hb41qSNgFqgwCnZcqytJNMvaneEEUTesECorNfQBygqLoSfSZwYztQChNuJBHQpDT66HrAaVNfipwJnjx6yG5is",
  "key33": "4JH5isicZnofGpTGYQVJqMwobrrWXUqH8PQh2cTM344MSt72ts42wCfQ74rRkaxyKauPrCzdXZgxeLjtLd5wC8qk",
  "key34": "4WQ3swbsqrbqJe1BY1CoJtYmSAz9Qu8nU27GNgLwS4Yac6FnBzrKjKNVGPXfnGZGngWY6RQt7J2zw1dRC4rGLLzT",
  "key35": "3Kb7r6xyqxspm94q6iGi8ARDue1gzfEg9qz9jEqbTmA2nBRsUfFuUeLuu2QR9vhUcJGoPFTYaS8oBHVuicQ2QEpv"
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
