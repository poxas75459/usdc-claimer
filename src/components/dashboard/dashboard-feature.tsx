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
    "4mPMGm9binuqWcpUgYKSM7SSZzj2HiK3BPsRMoTpcLxc2nXYPd7ECTvGE28SB5BC2EUGU7A1PcJ27B2uUxwNMMWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5Jj9HE8aLMB2TKnoUxgU7bt98kWRLn3TPHGS1LUUvYYDEKJZrytHatFinu6rQtTi2HpJ2xXBSuyhD3a2fUfo8j",
  "key1": "5U9bjsCeNttJQgcdyoXoCBSqwTDTMG9xbRdrDMMuktkD2ARtqH4xVsnNEZdHar1N6Rup3Yka1J5Zxc2ZEhP8Ju4P",
  "key2": "3yh4kQ9tDZdicYc7c3hbHJpJK5xNU1y2dQ1VvLPyKmVqP3mkM1D5uENNZ5iFtuAFYBv8ycq3bH9jkeeBHPgRHgqv",
  "key3": "24wjMUAK4M6wBAu5vkLsmXVKQFwHyPfUUzJAo4sTy64Xt8FqkwF4vc5CfV1hQEFZ6XdTTqqFVTfZY579D15q6UJN",
  "key4": "XoX1a8gxvDEzv3vf1xPirfhGjDaftyA7XFVxHuxE2TYvzktqDv8e2wmz9PjsyyurVwFxg3RsxMCri2kXx89sk7y",
  "key5": "5ZZBHdoE7YjAzyWxfCPjxRbiqEmXeT38dYDnDhmijECnyMGV7QcEnE5FGSXbA6gM6LCEw2kzigE7uy3VA7bj7Lra",
  "key6": "2Cbesftb4NQE2oWcKfs4j2ozGt37nEHXHq85qGGXcsyTha3U7KZzX3RgrZfG6e2m9epBQUUyFxMH6pBhSDMVVxUA",
  "key7": "47rnYFUGW6FEqAyvUtMZ394g7NECSQyCVmCuTMda6Zt3KmgZWBLVVHA6TjD7LpEJbtQWCqTDRkP6JK5Y8CevNQ7Q",
  "key8": "4uGCH1FJSr1vyPbtkxHRovemf8gvpemga6qwayVBgVEGbvrxupufwRCqWwDBZPu4QYtikw3yHLrWqn4isMEMcZYD",
  "key9": "3N8vWPKxDXL8izmSkd2wgeHF5VY8C8jbmfkzqH94UsQd9HXdZaNFVP1zMGZXohWJuzFDDBVwiG8RCt4fTfKdwusb",
  "key10": "3mZySTggrPZAfkwjgRgBHDnzuKDTVHanjje9Lzn3pW9NHRyfGqbSm8oF4qV1QDg1Zg1pAFt3QJVxo1FDQxrsipTw",
  "key11": "4JxpyqkuFsM9sX22jUyvUvFXzeqTcFciWRLENATvAGVGpSfQ9y67Lcvsvc4xU1YtU9XL7J174Cb3H3DuaMLeVc4T",
  "key12": "58xM3BwGb7V1Cm37aB4W3ddq5FxSWnV1a6ynBSCuqqZ63UFivPfKDocPjfYYFFdSSa9UULis22SDGw6ywrnKeKS7",
  "key13": "3Wy2XYJCVd9UjAuHqwdffQYuGzx8RAMYxjmgSwvdoQavTf8FhByDvqbNpbuTUBo7Ggx6mLK7cwTmygni9e1aPTD8",
  "key14": "5SKTuWJFattWnKaD3XKBR8om6tTndxk8kpMpuPtzYwiE82jcsDvgUho5ZUXpE9yeAhswcEP66z9zvRjrrTtTXnMU",
  "key15": "FAArYiEtc7Q4hr6yHPByYQhhGKYNVSszGNKW8pP98ZNiKiYG21obdrQ7rTSo5P558ZnQjGnd5G1sXebLa7dhKYX",
  "key16": "3NRtMrj9MMo6LLsdsj1TXD13efVPRQiYfhKwFo3rjGZ6Hm47985CteUuaSZYauAZFwVZ8HKQ3y3gC1bFzzdj6czF",
  "key17": "28yUjaJHVjUUbj9ZvxuxoJTNypgzY69zYvjtx83uov7gwsc4vdQigRxWeokMwoSLzcct7ZDdfkrb4py13oz9UK7R",
  "key18": "31wfjqdcCRS6pcpxxL8oQHoi34sFmDha5CLxVtLfyTxszcguHxDcbVMpVt3u8pQUMMjQ8zRhdtkBw6yYHJwunpCY",
  "key19": "2VU1Nu7kU84viGGCvHbdZhGMYEELGUp1G6nY8W1vLatEHAsheaESFsi7323Xpy4wyepD6UR1GbaUKsJ2FnuRkFxt",
  "key20": "2HAfAHNZ6HKXgxc3DcjHPsb6zoUMx2TYFUNCtoicSkUiWtMjB1xt7iGgiHnSCTmpQoXC6BWz1WitTy6mjLn9XXh9",
  "key21": "4ANPNsioMvhqHpoQ1jmSmHeJMLhRgYrcAHM3bgan8cfNB6nACGjSqbAejrBwJHTPPmcT7qrrUwXV4LUESAfZhvNV",
  "key22": "53b8iznAQbX5wqh1r5c1qLAW9Y7kWgC5ERJRF1Rk9SgMSHEXS8MhmKmNBQzoAqNChWZ1Ku4u1GBiNaASpG6nCoso",
  "key23": "44DFSpsDmWv2KoQCSvrYAidhzXwSbKf1Bn99nQZaapRZezcHE17b1D75pohtXKmhCp2kTiviXcqE7NCXEZbVBzH4",
  "key24": "3pHF1auUaq3rzuFhtURp6fHeWYS459rm3fQdt1RM3ggSMcEyqbyjb88wHRZKTLPFT6wqSTrrD6Mk4TF86F1iCFGx"
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
