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
    "3vHgmb76hPdNEkrbUdsg32aDfEJqM3CwFXtQzHrCSTo9YYXPRZnhMvhNvWzUxof6JWh9bPrUmy2mU1XR2eEfKnyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYVjovQx4tXkm618V4x9jzqaKr5vUbAfKCnaDjkih4PiigRHJJWEdjqKVCbQjtdQymVXtwjsmcGKMaM74sUX8iJ",
  "key1": "4A8fYwzHhSJLtaYqZwDCPn3jk7cqZDG6zr68CyYqGMmgGzLRZS9DSiUtdGDprF7u5Zug3p88puEGVVmWFqV9ndy8",
  "key2": "tBD5Bpj2GfwFYtMfqA3vq9K7i61VgVpnCCzVeM2Put42gTWd8bkYb76FzP6oqEywNP1EToUV3Ls6CnMUZm233q8",
  "key3": "fsZ9hw4f79aGRuT4H9XzJt2yLPKNCxNVfYnPHRpXi9EtxAe72vxwHy6PuqGfVpTPJY9aTv6q1X4Da3ozYczqAtH",
  "key4": "1hH5mrxeZP1KuJR7Xe3ydn2DVxoxLnzoTF1b4sh9zjkXub1KNgjwtLeXMiu5gowSv1ZMDPRpLNF2SFHdzMYHt3q",
  "key5": "2me2sEnhG5CcgUsuNLmF4txEy1MsJdZeeZmWfQSXHzzeE1XNcNBBbCdu2Z6269WV2BdY1ArwCDsdqczzEtPiTaot",
  "key6": "3DXj3pkFKc4BtQtb187cH6Uk2FDZh3PkShSd5N9JuU2MACBabfDWfhef5mqGXMLHW6ApGYFLsLhEXJgviz63HMoB",
  "key7": "3M1A1M3vSxjTKmBS6anyWmb74jptpyyjLydKpa6AciQkYVcMLiD4eqy2psFAZT9P4erpKvK1dNXB5SFGhc7pDVAy",
  "key8": "5TLKQPEAxP7pwDb7WN6NiRZb7PEfLCcShukr9gVTTDfYwpcGd2VjS8x8Ux4YnQ3UwucB2ZTZyZM1VU8CWzFNmSrZ",
  "key9": "3on5suBcAHrMn1pnsVR4dBhY7CZ1Xfxbcgkvey3DRMRYo8NoFvMJDbohitEBEKTbdntwdvYbspCdU4JaVgbhaFb4",
  "key10": "31AzNhXWi7SXtizSwetkohBvAiA8SHBe5w2Gc5YXB5E84BEHXF9vZdgZgVgKH43CA5zCrCNmfZy9bZRNS4dtwNgg",
  "key11": "3hLLxhULmfzp7zjpwe5anhsAZWQuYPUBNzmoncxiU97a3eNWqsfk53tL2WqqpkdnkeWooPt5wsC6ANKsuX94GUei",
  "key12": "TRHKT53YYaEhpZ9z6JbJoqoZCkqk4YLSWEJRLpyvy1c33rrmCKX1E4nr3pYp7Bi3bzpBesoAu6x1bVsH1KSke5e",
  "key13": "5jcopPVREpN28dqdk9EaZk72ncAzBviC72RYi1ns3zadnVqBLkE3L2d5sSgvhjyUyoE2aypVMj7kEMqjYpevasfL",
  "key14": "4R8Z1A3VTL1Jrgf7mSYHZMGAKNuk4ocQydoZuWxTu6vA6S4UGoeaMsL4tMzFFMASwrf3g5VDb9MTMyDX1JZYxY6G",
  "key15": "37bof3VU5VgiaUFRzsQeF3MqgjxhwPX8BVJF4DMcDiMKMnmNHVCDcqvfnWNoYwgPGkMZpXA1o6CeVkLebs9cUyFm",
  "key16": "5ouXBV8XJ3AeDSYpd24tFM6ELkB7WGEBsYrXo4UY8zCKu17LuiH6yNeC4qdWS2XZSU9DMvkJcxV9VRZQPT2sXeDx",
  "key17": "3FBMKUGqrT1ZCSkEJfXnBXLQ2XkqsgASvVkZ53fy15x3dzVRcoZacDpUxkbyL7SadnZaKnpPZBzwccsELKZ9KJeS",
  "key18": "4pEtGSp7WMaB6eAsQbSw3yU4BUqsDaYCTUvoHUfGtPrFJhTyXpNdo3UPsyBAXfgZPGbbKsKskEmVYXDvxEkJDHto",
  "key19": "5MnkEVtGTvVqshAH7sEoxp3XJSUJyERiJyhURi5XteBNujVmf1mYQXuXEDtXyEdDdGWZuPAhRfGfDqgGscQPpQuU",
  "key20": "57NdDX3ZyzkEbFhLPjezzmzuK5fRn8xqkx6Fb3TEZuHLN5vDG8GeUJ2LVTAWQB2GVdLUpUsUSCBaWrvriW6yKYHW",
  "key21": "2xqQKokc5y5YuqDJc95BFPsm9942xUBfEAX8xU46rzCTiXK5pQs98aiH8rfkk55AZKWicvYJShHVyN37q4XgFE3b",
  "key22": "ikGEscKaUufXYeNgPVi2QxAdquXQy2ig9Df674VrdEQQuvADpcUzQbFR5esXrieXZV1Uh7qHAJ6Fv6SpdrkxeqT",
  "key23": "4xzjWCdGkkYh4HXdRWeqS6oxxsFM4XVQFkEzw5UqxvUoW2RsnH9Cvvf1sC3Be6ZwRAnrHFKcbRGBaETEBbUjJnzz",
  "key24": "CyYy2rTUBEjGRP5bkcfMFJH8LyFNWSYM1qvCVR5mX4k4DQkMzDbnQ4Tike4uTZtQtijrgpmQrLniMLk7TW7UqZD",
  "key25": "5XjmJYFh5ZEPNtff2C4ETpCCJiqGf8iyAJMzSRwmY4MQ5MG6o3uyrgnSgK7qRAF3vXtP12yrGPvj9uc3xLMSVcxg",
  "key26": "53oAAHP7ZGyJ3VUJWYeUum6DbAyw6myZw5WrMXfm5R87AVDStuHGxoSHYioUxHixvgc8KpduBzB1ieJkvbkwX4bc",
  "key27": "5YRHY8HVwGSFert4smLzUR4h8AmL6fzyFafugoR7PkaQUAivaACafaXvkGuzccxXrAYUyLKY3Wz6DmaZCheJEeN7"
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
