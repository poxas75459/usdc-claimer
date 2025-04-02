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
    "33rJfv8CDWqm1EZcXKVEmCquCFDbDY15QzZP1LfzZjPYZdmRYU8Ek7eJ5UEvnt4Mt3y9LofHxPkGQ616Er6YnfgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7FUrNpGKsTEFANWfRZiVFTsSvRFF4LXMXsmxe5ZLN4Dz7uQKGChZukvaZM4DwTknktajZ7rs87szadKHYLJ1pc",
  "key1": "4KZK3oWczjwtJvLVJUBi1LEdAMsC9cVqrAPKNiiJMt2xzBM2xVLbeh7M15V8xkmiX2dhdYuHD4t24pnMme2NDFSm",
  "key2": "3z4mZLZpf7pBBCU1CEqa1kibfACisYd92oQhJtabYGHUYgEMgp5m5eC41wd1ADXQncDe4naYWwLAeB6FCPdG8PQ1",
  "key3": "5kt4eRCqmAGT4AE6cSzqVQtMdSWC23M1j9DutEMoTdUCZ93ZoASqbVeeERfCMgZ7zYfTqTnpx2VFqxRuPEt859Kx",
  "key4": "41FVxhkptZJMm7mv5L3DWKjcDQHvsB6GGvzAuJuCJXiGsBNLVcKwhewgLvWXxqPfm7SHyFX1he88kSipay73exUW",
  "key5": "2RDenVEN4gBzTpTnCfgZsM2qHGjP7jwUoaghkkdcriSyjjrZAn9irYu12aCLYaoAropMUEbRpaLXrEvUjx722bKs",
  "key6": "2w4ijCrTxF2Ky3RnYijKRVf1ZJCkZr9GQP61cfiN8XMVsjv7Z2rj2uPf1hVbxhB24givF8BiVeAA1nnvoMb6aQan",
  "key7": "3czCHCTihjDRkXKYdu8YDd2SQgseoZ4fCwGZZgkmgSPHc8iu95QxSeVAtfu1wz84XaSu3b5cZV4HMftTyHEuypcj",
  "key8": "2WmA6KEL2H68xAj93f2M7WTZSdpn37rm3nkgQR5VCqB5gtKx1CyDt2CXiFptWX8KLEszNFBqdCWBJm69jkKN8ZE1",
  "key9": "3CyNJLTLTYnLukVFYssuzojEJLWhKpTvFqGbTMrt8Vxj8886pDEEp64xmKyEkdGa3hCpgDRKkaKnvbtFCCa2kpYb",
  "key10": "46dZRRFKzXN2Q6thYppca72cvx8xgiNBSMF26hq69gEmY75mW1FFLRVPdtw8R52kwx4pvASQuUm286ta7yhYR6FG",
  "key11": "5Znq6ubHA2F24TKNNQSbU9JQf6UVv2hXtPX9AbP9J2kSfAPq517YiNoNxTxb1dWAsbEtYPpQYqWBTVYpykPsmcMQ",
  "key12": "3Rpbe5FLmaFNJbCDdrzDPZm7ycpxSrscS9rPLZaFbJBtBMYGYtPTzCkMBGg6ed1Qbm1h9kNn5eFYGDT1EjZmSV1P",
  "key13": "2om8wz1e1GhTJ6NvPoKZzHHihPKA4oJTgKhE1yUEzaj2yhVchhRx4tCUUgrokRUVWMJ59dRQF5QPQT5Rjk8mbz4U",
  "key14": "2ZKjcAhkBXhBiX3WQkcre1ZWgf9Et1Xdy9fwxq8vrucziG2XGm389Zz8yG6bGdmmqGYYtN8rH6nBuTWjrKUfu6CR",
  "key15": "4bYqnzgYdDnFanXT7fQgxzQbykaYxHQ2ABLo7f9BHfJg6UzgrnhADu6Ps4DKJRSay9WMK4hyroQa3nEFkr7ZeAew",
  "key16": "3exBKAi129tTabm2Tkzo8Hcis9jtL86RSVWvtbgKPcoyQe7e4CaD2JtgHmPkEpTjb4scxk1ZWgaujkada4VQLXFC",
  "key17": "22eQTcFvUrwxYYjJvDtW2BHPrs5i8uNPZVn5pP3hPBqeKg1hxSbh6wYZnKpns3sWKtYzvnYTX4KC84b8SmBcYS92",
  "key18": "4aV4bR6MJzdGPBhi8tHBi5XEbKLhv8F9ZZViHrLweTYApHfDCTu5SgAJfMZ9sDMtqfKks6NgQFemzE8eL2pvRYSF",
  "key19": "34hj1HUa3N5MtxdeXbJzkTqf2BDc5yBbGbn8z16FGaE5SydggPhxHqJZDruCTGtK82PqGJmi8PqYrfsZXPoJ2dw1",
  "key20": "3VJKmx3ajisuSSxK1b34jccLSkLDpqMcWTMx4LnEDSxmaYxqiYEUnHhLn1J9v1NkY1njsePk6aZAihZWv4FnEmo5",
  "key21": "3xyz2wsFh9TmNWFCuzjHp8vzCjq2hAvvhfYGX99K6uxjoemBEV6zKGYXxymw8LHeqwKxehxLVKYpfpS9JugtMkew",
  "key22": "4nTj5E9UV3w42h6v52CkQE5nKFLHo6Gm5M82xA9hFeQXdCaAxwVfEGVXqkVfWfFBgTDuqfvnExWBo799uequxrBY",
  "key23": "2c2tXwtC7Bhg5A9zwUECNMKWQmnq4bhFAHHDmzTSPu67AHspkNRMUzZt7Zrb4LAg514gfK82Wd7dv1GrrT5RwezS",
  "key24": "3bmJbZ88meyuBT49HgruCFQmppNBq99BejeFGRhTbzUZdohdKtXVP8aECjUMS4xnpH1WyzbtLHMXTbWRdu6F2PWi",
  "key25": "5Hb7Ej9Aysp5Zc8FBNxvheG19hofibpkNvfQdLHv2tv7LvTqgx4wc619Y6cAXLfm9odUWQBtSgaqDxzzoEvFxv2x",
  "key26": "5DecqZCEjbqH5mN7vvYhXcf4vcwPudCBGC51K1WU37jmio6UkNcWZkzyJm7uXxRwXW3wG2b4jRuFgE1j2MUAPNZ2",
  "key27": "34bDrDFwpKKUHxPTLb4ck7n9aABgVyc1azTmmASMAhSMdrTaHH5upy3quKxfJ53wywfLiv3gxmRFCoNfAHHvHrkC",
  "key28": "2xZVgTeZEoZ434LrQ5Na6h72X9GZVfwLsFaxBwYv8gVdd5dfvfucvogU4ozedyeHaJVNExGdBxd7Gii3Gd6r4BR2",
  "key29": "5jeifCfqBTCzyaSXaCNg5nHTynoDzHWWL5jnpDhd5S7V7zUQKFAPP1SaDeTxHEiptXqJMjKfbbNZJGhvrtVLdZRC",
  "key30": "64wnyW3es5FoJAvMibkin9hdiCKuoBwPjDwfxkz1HBBVAb5jtgaTvYPGoiA6jpXgjhMKKpR7ekBsgURWiX9vSUk8"
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
