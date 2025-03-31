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
    "3qnicJLFGDs5Rqknoi6nEH5gAjiXvKvNSGCDUBffAahcrt8q18UFjCKG5wDEjZJ6L49ZA4pd19yjC6srvqBJC4qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVxFd4sVxvBKM553G4biwn4R5w2veyXRm7merajkWKCe9WSNE6KU46s6iHCiQjATgfK3iRMom2eBzMJmPccpJBE",
  "key1": "35ZeP3rKWwiE214LdktF7KiyL9DgXmWix3vAUnqErscnxFQPhmkb8pC5GYETatPQKDV8N2gajAkvn8D2D9VWvDfP",
  "key2": "4NBXf3xEHtaR2MGffU46LULMQw6RTaT3FfA1Hd2fMeSjGNEbu4Yxd9f9PKfbbzfL1Jq6xPvNdk1Q59g4L6vKAuv3",
  "key3": "3vM5f4HverC8dc7vKZmaPdf5wCAF7mjwJ4G6TXSd2Jh4ywjFi7PgtEMoEh7h7jV43Ygqfy2DG5vEMgUt1ycw8i2F",
  "key4": "3Hbow9wFCmWeQXTNUZfFyK32fNnx1sBw9ykesy96mCddTfFHsDiTKaid3zrubv2xYEfke6mYKcLBErND5HaHgQBq",
  "key5": "5wgvW1TPLeMnFV2HCV3Nkoq8u8VcmARhtvunxtdhNiY7DuebzYPBuWL5v2xMy1SVY6cMVeYPj3c1aYK49Zvn8YSz",
  "key6": "tuNKyLPKHrCGJgRRdzk1jUWqx4BGjoEAnzUTos7dTNMxxstHYv6ArAgnFx62fui7HxqJ1j1U3kS9zPrGMzrkL38",
  "key7": "3mr7qXF7EVDVQfw7kci6RxMHVwLck3F8hKFcvnVd3hpXqQijmEg2bi1ToEUWYKr3UFhFKZcg9Wd7YKje4s3qRefM",
  "key8": "2FpxaN4FgyL4bCasdjVukA8DLioT5KBUvFPpKmnqKkm2cfedZaqAzBWsA72nz48bsPCnFMtqkBV1kWvUDqSbhVCx",
  "key9": "2siTQtK2iyooaA1t1ni6jXBH3SBuTJs55YsxxZUD5SFNwHaAztPzY76nzHLRzfXRrdSyQdtaKh4xNDpJtABbqm3e",
  "key10": "zYNfMG6R8ZannKAPvMfnxYacHir4xS21dc63g22eNGM5W3oa98SbBG5oroLkxACcbMdUwJbJKVzsi29ErMPUpCy",
  "key11": "3C2H6vej2SHv4JHb8s3GLo4WMML7FfCFTT36p7YUqxGx3Q5YdUQh9Z8pJySwxzKfCTWxFbtPfBPrWW2SSddUG7rJ",
  "key12": "5RSyicWbYMwNxb4eYVbHkgu4TDaurmtb9u1Qb9S5pBiLQxhZBbd8BBottB4AyuVn7idGTMfzJqCZrypkbgskfoRG",
  "key13": "3TDuPH3Sy7vgajxGL4QBUuQwLGr3wpGEUdpZTFSwrjv3p2v1UBhiuXPuYzdjBhinWkBEjW32JWUdRbjUaanH88Z1",
  "key14": "5em43pPXtKDxvu4MdXYJgDncBZzzrz3YEyj7zXTbZbgT9ZLXGkv3NsFVatEWUQdNnkk5KvXZAc5hHFhvh1ojo8Fu",
  "key15": "f17gqixbiztcNjwXt8j6fbp5xUQ2DuJVvrC7QUmkKVurqo6JupRCbfUqh7AzLs2g5RhHVNLcM6P4tVpiVrCZeTm",
  "key16": "4FfmQsq6zK8AeKfnHReHGfFjANooG3ShZyPomQqzYgNCvC3JvkH6LEoF1mqM1Hryjhb9qTD4aKRWtPTrqfxuEGXP",
  "key17": "AD9w4MUGvQTpHkSxHXiqwVmd3WTnVRfpw9hbsQ47pVH7Le8ofb2zUPUThWP9BiFMZuLmSSQQTc2fVUfedywPMcn",
  "key18": "2inot61B1jMAFYJcE1zBLGgnd1qL6SVxb6MYVEWoYjiExVv1v7aeh2h387hAXVjXFgspchX2ki8ZBYduBw6cnr1D",
  "key19": "5zbtqptrkJir4VLYEDwAxZyfG8n3dtDaVd43WRfCZ2xuZbcYNUPodRmLwNSRPhLx3EHuSdgUQ3fyjRsJ1weXVaA3",
  "key20": "aaKgHr94dZYpL6vvJN5BJ52XXgqxd8ua1doKmbTip92DcucHzqwniuqEf3ocBoPBotzwmdGD4ooGNSNJMCUfsAG",
  "key21": "2E4cLpN8tCfPDfFrPA4oivXuAod33SWTw3mVn6KoeQEtURMXj3fk6D4e5bpfLM99yHs4FSrbGvTgMqbLx8XvL4GU",
  "key22": "5RMbWtPzSvcne1kp75QrjEe5uwVFesKog5K7hrNpBJKaYJoBE3XWX8Xc97Z2p9jknVY3jABDKZwogT6AA3NwCf9v",
  "key23": "5BaSNHUhMxWNAgxDro4yx7QvUBRgf8uie7kX7d1GQPYvZbBJ2LXpeLEYqZxBYLWUitPfoj2aASyLXpjRYn4dL6Ze",
  "key24": "2TAWD4187w4fVLiaSw6MReTrpZAokgyJZcUUVyWSzauQtBgyPUiE6xxiPCEgszZnQy33aQZQeTuvX9sdP6pFEh2m",
  "key25": "2ET8UgeRThNixELGAN5CNRBdLaJiycnATV97fiLyhArwVAJPQGZjCKpFu2WxDBVDb27CnNS7CJfS3KtxRtgsFbHU",
  "key26": "2FbrpLk5zrLQ4qRFtJawmqk4JU42q22Jehg3BW1dKnkS7ECd2XeHXMwumXo5gaBtmp5rmtYai5Tmqr8UX76LfoJF"
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
