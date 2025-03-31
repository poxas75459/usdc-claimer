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
    "2cZqnUmyDfqpf9LMoUpnhNtrLkbf15jU49bpPdX4z1jhx7DnAYLKYpMyJMJCYKn1UftqxFUxkPH3uSfzukZKpqWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvNaMb3bQVb8ispgoiM2kRXK5M3z3o5W7DTViNshJ6u7x1NrMzP8Z6WG3v76T6tVGmTEd9SQfudiELT7AXvsN2S",
  "key1": "4tHE594gJLoCjbSixSd4KXUsn4EMGVH76P7nnkDfkFs8Nr3MBb2MEY3aMPgfbtNYZiQcGjUkk2X9wTpQPPKigt4s",
  "key2": "4x9P7gjDg1Bimgt79zX496t73G7ViGiSDkBRcpZ8ecdWiGaZMz4tDA1h2gGZcpmH594ZbDwtBwfFj2xHMQbvNNpG",
  "key3": "4wV4GE6VnPjfnG5ugiB1s4XQrkartaLSsyd1E5aznckEoYKCdXE7mxoPUyiV3fxuPoKBWxihQSKxHtv6q6b5FN74",
  "key4": "3LPQZa8CVkppSqMGAzZYkMP3sUzq1f71ZrNH9Wgpdv4LYHpM1n89ZoAaKiYfUkJsdxmBYchKeDSovU7LH7C4Ro9V",
  "key5": "5ZS5Bb7k686Na7KoFugoJYVCyeRmCBi1GpuNN6FWHKv46P2RJ2FUw3iwN3Sn8DZjnP5sj8KACnxvKa7DhCkgaTxr",
  "key6": "2aExkjdct12Xpy5cKDhzcGVrWPdz6f2rwnwN5bhA4mAyCtkokBH7Cu54ud6meM1rN3f9qzrYnkKAkNCu2Kqs36RU",
  "key7": "5MZq88yQCDhQMcr2aa34LUbUpn6v5MTj8vc9kC7c5g5XkCTrrDeUpdsgtvZDTBtqVr8itin52pNnM9DebmqS8yuX",
  "key8": "4ZKMU3otKDCzcmtVAMwznqgUFas6NZqWPdct4u5y6U8K2kgTywrwswEbEJa2uYcvG2fSz6c9aXA7qhUqapgWjCCv",
  "key9": "5n94YMj4icumatYhWWGLhjcEmmSgK1cDWyM5dqrfVKZPo8oqzczuBdahRNy6TyWjdoEjaQwQejSbcJ5PkvmmriUV",
  "key10": "44HbSZB57oEQxHJz1VcnmVf5seL49bduvAjVwQfvFBCpMBFodkQYrQHRtFubXzFMNQqNmQ6Ezwvbz7ShprTPv9D7",
  "key11": "4sjTsy4gKPs4M9drXsbrUmDdosj7NAWWA44YLHqNE12CbWKpga314vs1bivnnhRGU6UNskWpHkFbMGrXbwB4CHqg",
  "key12": "5cF7n153hf8KuefVvJupXub87FyuvyRBGjWk7BGvZ7kixAEixEQgPMCVxgquJrnQE9mtMoVCxXsRgyq1j4Uzq89r",
  "key13": "3j1NMXmB9JJ5v5jFL3VJeALqfbVKyoZ4utKDeZyjjNvSU1vKtCAMPDVwc5TVMKmJNKwtTQ3KdjE7sANhEnkrJBik",
  "key14": "3HmESPNoDEwLSS5kLgmHYobehtekzye2HGfxmNH8SkwzYrptiWZ5PDTJTiwffv7kbg1ynaCSgW9AfxMpttXBTM4g",
  "key15": "fbDHpRXF9yT6pquBvueojH5CLY9tE31jr5wXzGSTYB3cpo3BHkY2HEKPrgMeQfJJVbJQZyE3QWtEX5bgjqCNb6T",
  "key16": "5dCkbBZHfyWXBTEzpnkDWzBuUjifZ91bL4xCRmacreszVaFGMmtMhUU2QS8Sw3eFQA7J1KAnQWAi6ZnrYz7UsYnW",
  "key17": "4FRULhQnm9pMd9VWeiqDCshhJ8cKdug4oX9ZHScAwBRomiA9xmp9F6yP6cnxMTRMu1ezBNAsK83LjYtPVm1sdtEv",
  "key18": "5chwwD2q9TYLcx5bBsZ2FZdnMvCv5FBQZb9E5uNW8fVAV5QMiTorGTeJhjYGdHfAVhov5RmTjwRyMtxpWLemaDz3",
  "key19": "248jMPjZWu3wTpb5SZAhtXZKtdFLEbkV2fjWKdfipzdiNaHrVTRDDtTXfrruAQQxjViDPghs79C9WGVsNRREG4LC",
  "key20": "2CDEQ8BEbWSW1aXShre2g17iS7oohj3cjtkXnxNPe36dn3KNJWcz3D2LFXGRYxRKpuCkJHZZ92FS49h7LJJkvCy7",
  "key21": "65VgFa3rRkXCfUAPokRHQDTaxtkF4TWtb2kjGH7sHw8DFuaEm6tJ4pCuS8RJcrrtR1bj5zAcYoKk5jaHgHovdGhi",
  "key22": "2uDCcYsjs9H7L59pFKWRKJNUJwcSvF7AT7RCP6KktqS4VRTWVWfcQxGRswRwVJe3DtqS4PCLvpCe9xuntgCHeP8Y",
  "key23": "2U8zZCZEXQprhEzp3RFTJnqXctBTcL5hGZrL6dZHJjdw973eagMfwE4xntVCWF6wzeftzq7Y3inEaEB5Kqgz13dc",
  "key24": "2iVjwQJuQqGhqD8eMNw37YVSh7M7krGvp6B4peGSWHGZZyMwqbXubsAwk5BCQ392fRUoJcvB9DKJsQsVyFsgij69"
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
