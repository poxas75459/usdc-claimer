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
    "2huBUcvwaGe4FwxN16uJvjNGGXVhPRAk45hhH2b736kgpbbTtt1yNgCJeatsxaj4fwDUQDjz1yvopuMG5haSjxZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLZeh9mpBWeb3FroLfHHkzH5v6AbQhezr6HZNM8Xev3yc5oc5ewYvjR2NnJvmYysvGKfUQyE5NwwNHm7YrG8YM3",
  "key1": "zixXH95XLczjEbRiXgSjV6duEJ3Y2bvzCVs6UVZgppffkswpuaST7bxSbLgNKtSdpehQZTJPUGM7byRuHsp43if",
  "key2": "357Xkev3ow3um81nqdm7ozQEQ2GKeACQ66s9d6NTrENJZkrcpvdX9a1ZEGuMmHq3tUmDF8Jwuh5H781QEruxAZxS",
  "key3": "2RTF3qLgXNtvPDi9ZYWiejtQBnpdAweQDdrK3kqUXup36Fz7wn5ySSxNF4GctbA81pJCw8MhEVh8HNvhBeJPNmwJ",
  "key4": "TLhpWqjag8F87GynNpPdAxjvfsHW5gdVZRQRDAD485hkMveGYBJRgLUCjdEPFEjUbLfksXfic7YYHXcoVW9tNXa",
  "key5": "i9W7ShtvGCjF86xoV6JWTE42Fr2Ff7x3Q3PhSdwggLLLvhNjp2AzfgVYDw1PphnvgGd5T8xVMabpQMLhFFwPXTb",
  "key6": "8pSut9pJe2tw1VUuUpkpALZQtbhjwNZrTQFjnLdwFnVD5W811o5MCyZYnhrSfYChBMa84wq5mNWvXgJxAsjBq1M",
  "key7": "mvxUb7VPpLQqR8FqEpb1fTL928D1nVKapVpv8x8TjvnNePmXxWPqvHLYnWWwgNtd3iWLG7D6rxMvbAz5Y31kV8g",
  "key8": "3F525r5sNr9QKPua6yyRQ73q5iDc7iDP4CHamjbuXjMFa7h7jYHeZkoBabFE9u1fana1kkh2kdermBv8qdHXGojd",
  "key9": "3ZmC6szHMYPKmc8QvG6RkprqyiDjG55QvxcMcSzZL6sevqsfTcfEqJaUL1gdjUKgjPqHyiZCZYjrvxz3yR7P9qhC",
  "key10": "NJK1pNHqkHDHB2yyFjugLFMs15j8GEMPAZ7bkGr1AoJ9gyg89717SWPowR8HFRu5PoH8f7kKVuf59k9yg4HmPJN",
  "key11": "296TkUUmmd3rdTMHWQPoKoPTtrz7kFxJq9JxYfKyjHjsDQuErBGs6TrBTXR5tQkNnSjG4h2FSjVynURfYMUtsi8Q",
  "key12": "3eC8kVdZKzvUr2kcXD4fpeum4pdTtSy9mMVupJQKZxV6HnUnWrpA11d1QxZjx8GyC9TBzXvP6DZ8jnfXVnCpSMnc",
  "key13": "25F2GQSVBnDqe6r8Cjg3RngvksoC3pc1dA6ZZKZBjAZBx2nTPB3nN7EJic34jkJL3rHKHHBRAARrEk1Rd7iJPskM",
  "key14": "66kfVRiMP3surwim5QqQ4xuwRnKkFJJREVHXTRaEvFCybuQLpuY6KTjsvymSLgu7vLDwKjNYrReMrTY5sLdXZak8",
  "key15": "329VaAnDSik14gfCYgUNPb2TXQUiwe1nQ5K6Q6AieamWCgpgkMp3CuiHoh5sFuUaT4gRJh1Yw8xVrdstvRbcrJ1a",
  "key16": "27RYgPrvc4LB7p3FoEjCkuTDeVgmdRzD4SRLgVAbsXyfUBBDKCbw3fooqfGPr288QjS3SLeRiMAwFhdsSmHD3d8F",
  "key17": "3qhB4hgy82JbArixdfdJoPmLXp1PFwNAT2sc7rb2tu3FyxM8ihXLSRVfChZGqXg3eX692kpu6PBdhvjr8XZqsDBD",
  "key18": "2fh3177BMtHvm7izDabvo8rA45gc4cTbSLHVfNtJhtnbxyubzG7tCPC3QQuhAMdTmvSGU7KxM8RMKpv1pPbgjjKQ",
  "key19": "399Fbwaqg1o2ibemJZFr4xTmbxuSGmfHAB1Yuk36GymEocoJmohYbeWVTwef3zaDT3c8zSgNXA8PKJ6C8s4ub2wW",
  "key20": "5mX5CQ6QRWRNG48QD33uXLmqXbD3FJgD4GtZutaRPAf5GmAWPpWUpPwUUvUtwZjHgns2zySoaAmsyRqktjpZMBu2",
  "key21": "4GuhYjE9MNvEvmSnqEbLaeREMTNXsEJHDU3RrGf5J9Z4qAbEDDsSt3VH6PJND7Cgd7siF6o3EbuDstEAR4GdPkvd",
  "key22": "57mAN5fFRQgEpxPzPozzFGfztfFrVWPGymknGDk1QmqaEDY3BzACaD3DFho5gVSioYPKFDYaDtwxGawZGs2SQoic",
  "key23": "ZMXJjSAUCrnvLe1PRKA9WqW8GQ6Dy1NJkUfpz1QbgjTh9gghfBCiQ25gG7kbJYHu3Rc4aPSW3oGcKnFr6iPXPan",
  "key24": "3k7Em4ona2ZpbzDzw7bfhu7KqvBh2TA2CBidErpTTa67hBWU3yhSwXyPur6MGSy39W2xZDeFYQCdaPG4YcPdvUai",
  "key25": "4REqKXd9MJf2RNu8XCBGLa5S4pAf4CLcRxUYpE3VEF9d1dUS3tN5L1cSa1BjBV58CydCsbRfSADdHSswvWAkhY2C",
  "key26": "4qNvzkczp4XbJsLYDGJAHu1hCPVV3PVjGifqFnuG7ayRxt3R2yNMuk17EUWwtSnhdAUEsdQhKhrNx2rPfUfbmA4m"
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
