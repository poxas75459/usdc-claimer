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
    "5gcn8V9GQPmATNaLfNvWFwiYqTFnH8zZjmf32PC5sX7FzbBWfjjrQ4Kz1q3P98bjPjKHEa5ZSrkAzZonV2n11eWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npmVkj9rYKEZaWtBCRmMmwq5QVvUYPQ11G3AJ6t3pAhLgYaDMvFTx76L33W8dUuCLFTQFqKnPp8DhhHjJVALdUo",
  "key1": "268UL9xxatp3xxa23gY2AD2UWEqPTzi5C65cHa1nEwpipCJ3pAZHDE6bkXkA9JnjXVhEJKi3NYEGscShe5RTDPGc",
  "key2": "36oYJTMrsDDsZdjtmSnjqbH8x4ShTNJHPvU5fpetQbqekEyGAkVNBgu4mrUZpgeUj9XaTpvJPHb9EqPhjXUjfNWq",
  "key3": "TftdTNXyUR9BEq6GELtsaBDzSpjxGs1vWiDxf6NeKngbPeEx4VSzmVvuKCGzj2wpth6NcC4hGuHdCAKEiFp9BYM",
  "key4": "2XvjussoxNC8PKjQ7RxNVbrhLknzYdzRgdhpNgPmBB5pZZVJQMfpMohSJ1oL9USPWSRQKgBycg8qsWuY42rEXQRj",
  "key5": "4X9QAm5JSn2ESu7SfTMweKb2enDWwusiJrTiHdcpzymRNRKRoY1v9gf2TZXj92qPy6Z5wNHvmey3oSC2Xg5wd8Ba",
  "key6": "57zWicmdwfmKx3uw4jCitEh11pCW9KBinMwyazktzLhBxq7dB7r7SAHBAwYdX6Ry8YLBrmvAeXuSV8Xhk8h6ET92",
  "key7": "3uGUeUtNuL1K15foYqjCH1BMobf9icScfttKLr3WMhoykhYn98VoRwHBtTDteQwJgD8PsS6bLcMwTjR2QvT9LGW6",
  "key8": "2qzru1m9JKAnM9BhxrQaho8k6mvzK8jnEBiwgjprRe2i3YtF6xBQ1CMEeQS9mwyGtw4bbjeSiNv41USty2aY1UXm",
  "key9": "4Hk3K5L1cJnhiniacGZUUpjuKWbwwm7V1oMvA7ec9tmRyVfXf4kXUJBCoPXN47jrJ98V4DkrCSsJbW2X91J4wrka",
  "key10": "Vxp1jwKNCproXncCeS1eXJT6iZ5X7PsijMc5s7ohGyt3BVoshWA4qwFZnpd9BrGpYMgVvKYGqB1KzkLTDidYqUP",
  "key11": "Sz1Bkmnf8b9VW2Tmpj1yYdPh4DKKv6TAMgYysx5KaMQqah4aJ5EieqZ5ZR5DhDVedK6hwLdJAD2DgbfJiPC1tVg",
  "key12": "2cw8RPTu65HfANTboycpsUzVnudDu5jj8KkR1wi67qs5jnQXchEKMKm85FJXKjB6yPzyfe2PENDvnWBWZGP61mfo",
  "key13": "4f9McFF4DwEwxN8ZxAQHBuz6Z6SBStSYZ9JiBZciLiQgW5kWg84CeLxqz8HLhGx9NmXp5nkDECdSF7iLVYfjSWEj",
  "key14": "47LgNH1P4g3xyFXE9Sgax3oUKKLsLoRDWZfKZp5LGgaomHwTuB3zBTM66twYFNNDxL4vgjx4TqKUbjUmECzsYNbJ",
  "key15": "uBeSV4oN47DXq5FNcAtyACZw126vqmUcT9LXE6DF441Q34fDQ4JJkyqMpiv3bwHvzuvpMmdw7cArwwZxduwbpkj",
  "key16": "UMvdghNUHsFXdEXeHVwL8UBsD1dYr1KsogXbefZivCTgJqxxAv3zpLfvdPDRycw9HCJy2VpfbeYbtQiCYjexuc6",
  "key17": "4MuBY1UURWLbMvLTQ1anzSTFTG6QS9E4Le4A7Wivwx2nbAc1bXfwcSmWV1QS8uHvt34y7w9F8WUy6izp1NghjRPT",
  "key18": "4Lv5K2MqYBNAZtDxcA3t6T1nngBry27DwvBZxsgHu3NX3rWDQpegg2tL8ujNiJm5qkPoUTXSg5qCWX4eWLBWQqMJ",
  "key19": "4tdYAFnKjkctToLsp4eA3tV1F5uBQRNGhMMtqfMwYpQWBVyqEahqzikrYNQvYHKe1cy7fknJgLaqJJmRG9Tq8EoZ",
  "key20": "4rHUwbEjUXwkVPvchyBy3qTMRvbkZ15KQjm9T5ZQhxJmyWrvuWeieHQhbKFbteXqXkN7u2Qr7CzZCre3zgDSPa5q",
  "key21": "64aCJBJCaBiLiYY93rcVoB5xE4tTCKqB7yXJvdGsARFFWF3GGLz1nv8H581G3huUhbabtiqH3Pvvqncfdpf3uFEL",
  "key22": "PQsfPd31UwvpKQzWQdAEDCwG2mjQvaKW85kKUd4GauwszeHps7ceW2bev6kZN6rNC1NEVgNiHhCoLn7TaocjMYX",
  "key23": "2Uwr3m286k6msehogs29WBuVMfB77jEoHYF6DgPnTvoe3jiNxgo7CMm5tc7mKEHeeoJNEKonNG6kutvWSoAMayKp",
  "key24": "5QPkQp9zw3dhAW9dxUtUA7cLpBkcVXH5FbRZbxNurmt7PiJFXWJ5aeQjUcmy6WeoX96jVBffisB27famUECeV39m",
  "key25": "3r2xyQpfGTaphe9Rr1Hf6rjQrfHWtubdLZbztAUrRkKqvHCRfpvToQ1UtKTWcojT2rJamQ3qsmjgiSdLH28hmrYb",
  "key26": "3wY5pWv26FZSLSs3HdSH8BdSM2aGuKU67c4Z8W2P9kxeVSd4KJuVBRPPUsrEjBBdgT5ByXrotjZirTudwhuA9MPs",
  "key27": "3Ur9Pcw9UEvCbPuCkQDSTYWNb8ZW8Zjx1QUv13oH1e4VLHt4ptu3YL8RxEtgC7Upnh3iJxWtUdFgG983Uc5S5DkS",
  "key28": "56erZ17XfwQfZgbYHUwF2f1Z5vxNg8cQdrX8Z1RbPuYEGTibd1gHwEZ3Ajn6Uc3c6m6tXwEBd5EKcXYME3xCkZUQ",
  "key29": "3tXgiidw5cVfVJMQaWoLdgFSGEXq9cyPxTaWJzp8eQCqbgRUaZU5rRzkXJ6Nkfs42koYvGVNNFpJmNbvqu3dT1jn"
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
