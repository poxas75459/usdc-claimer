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
    "n7FTLmmP9QUQR8FK97bAeqiJntRVaJ92PqDJdAhRfDLvEfbDdSg8mmypHXjk3pgwbU1uE8RWCAPdEggoLevJZpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuZdRs8DKN4WsJ3322jdec4hLy5x6GJDPnDsepm4YUdhcFGXHFsKnGtxyXEEioqjQAmcmZoeWno7ZEzAu7DgQu5",
  "key1": "5BVjuPHdseETn75avKz1b4SuSPEfcsfcFDpVDFfDb6jxWGqBPA9pE4qzy4xzLrTUmJH9BC93Vfh41oJNKqAigTzY",
  "key2": "MXtaAS21HVcG53LDwH12jPzyZnPbLQHRZTSESHckJpDNgc5hQ6K4kWEbS5zjehQkQs9pQ7CPuvSJHNnbHJZRuaj",
  "key3": "kmGRinDuGmyoNQCnDkgtsUV8gCK5CmVYv2bPKXmH5zSmR1ZXPtmM1Va3cc1g2U3UQowStVcohaadhwGqkJDSmiX",
  "key4": "41Y4r4voyw86HrHWAhNP8ci7mKGwHx5uPePPCTbt6SLkQPKLHDPnpt5a3myuuhBU9fiSb4RKkWgVWPAg8kVw9gww",
  "key5": "2p8jF4D3ZgCLt3dfunh3VwENLcwHvWceEZJkxFHKEqZcwgqw9RyxrcevSekYs7LVyTRDqcXwLbvNfLTcFr5AQJai",
  "key6": "3QYLnUekN7fXsa9YjAYp88s3hS2D8pMPMoC9V62sfxQ9zQfrWSRnuDxqmx5e4HkY9kdHtJns5rpXxjUd58p8bNN6",
  "key7": "2tNvMmqe5ypug4JDTyhn3GULvK5aAXdMjux8bV1GJ7M87YiH7hbBbzk7z6SxSroaHc4rjmxPVSKo59ehDNr2Tfij",
  "key8": "42VVv2GUiA1NmHtkHn9kGg9y8tXoXz57j2KApN5qtAjeoFKoFrpVxsJYGrv5uELMNi65k6KvDei95ztW5EivSogt",
  "key9": "4XEqHdVo5wMRWxakPzZHwnSqb3T1TP8gqmfnd8qLbLzmYMtztHhXQtqT1RZeFWnkhZXMRkp2s4XTKc6u8heXPjn2",
  "key10": "3wCkfPTYKgCz7c2ZA6X1SdRCNQL9ZGjZB9feNt1HgGcSUH78dQDxsYHkvCvGbqyyURe7crDR9eJaJG4KoSPU899L",
  "key11": "giFTVw2Dm7G8Rw9u9ovgbsD1PojhRxk1uMcYodCPyQwhjNGgiQf5bEb1tbNYcRWZ8izytGm8Vop5d2URDZABEEa",
  "key12": "5hTjBWq3sZixwhybqj9agzoaehsMRNHsJSdu6dgx3R7YCpeLpQ7HrxBb5uU48MeR71aGK8iktoUfTkXfabUbUnT2",
  "key13": "2pRm19f92yfJUwyP4F5z5T8VU6MCRXgegxZPNS9QypymzW1HQ1TNoVqdLRMvMC9uksXvFJ1MjxjBfRDUu6DXWUu2",
  "key14": "4qX7Fo4uKi4U3ZpT7H5JcvLeYMdCQpNbSTdvbVPQo3qYcrq8zH1Nq6Hf72eimFEzNDDYWsEVfMm2gTt83dMJKEyj",
  "key15": "2sxvKtboAiYQ4iqaKjKVsSi7vfhsixDAoFjW3XerAvBK15umTh3jC3p3ifSQVZ7Akiwc6CnFBFXNnRi8XqtXeWTi",
  "key16": "66nJYWU8dsEGu4AnxrFfTFDkatJShrJzDwf5R3DsiMrQEUaAZG5PGFW8A87C7ZJQP9Y8tWU6R9QaWkpusA9o6hra",
  "key17": "3y3Kgz3YBsYWhg4HonU54Pq56T8u14YAQMZTBzedvuLhAEYRxMzGBHxdniqfXhPk7CT5tqDNVepgC4aEigoqznXF",
  "key18": "2H9aD8wzc7mNuhqNigAyMcvkdgxdJd5kioaMkBPS3SigPb56RoWSN9zUsgmSpZMe6Gftenh5myhXUcjSiWj1vbBn",
  "key19": "5B42xtB4aGHJC7334oSd6e4htcN8AednH8NjJnu7Z6z12gJCtixGBvLZ7q15zw89JDL9rPDTGkkKRSrDca3rJdTX",
  "key20": "3DWQJTy33hCqALZUzNaN9WogxVz7qVxym7qDNVA9mAQwADYK8QYMfJLQsoTcGHXbY5HzgTKej2EwwRD4frxe4sZp",
  "key21": "5CEHiPVqfZ5zD3hPwAfwsFENz2Gg1awi43W2VekQAEhqRQvuHiWH85Vhh3jz92AM45YcRNu83wguh2UezoEmyiZs",
  "key22": "3g9FQQ9d7gYbFm8AZcShBzLqk1WhgfmqkxDBKfDvyXDwv6ow6CteXdPB9R7S4BsJGphY6fWbB9o6X8pzWSdjxVTE",
  "key23": "21CrErk2revJP6PDiHoG4hvc8hTGmXs5REV22kncRqicv6FPDevW3FJqg6u8RKFxSn2eEPo3ouurvcpKsFgM7dn8",
  "key24": "VCF5rZCevkCdkHWrTs6UkignNBoKMBLLNWwx7bYtAkist6bo9mtWTT6BUJ1L1F9w2pKHzuPKpjnD3H5gVhWJHS8",
  "key25": "5d5giRkrUu1diPaz3ayLpKNQuCBLjM9YDGHKvww9cnsSTX5kMpPAo2q6NBZdscZMTAbAt68torJQigw4C6RCo8zA"
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
