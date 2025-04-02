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
    "36X2CBKGTu4yDTPKCsThsENPDdPmjMGWEYxG7M55ATg2rpR1rzYeyLfmQzmSnu7zbQ2WMxL943pQ2sNGPoAUrvLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65q7GrfHbzXohtmuiZGsKrX5bzw8gxPDKUo9epZtP2aKYMQSfFqX4RP8xnkwXnub71FwNC4C8uUSs6ovJHCJm66R",
  "key1": "3f55JG51t97JVg8Vvn7DGtGRKfhrThhZk5nfABegAYMyMgXZ8isTjSH3emgv1ToSiZ2FLf976afvFG4nc9HbWjs9",
  "key2": "2NyEvxsGTyziVm3FK4yHpeYu6tMd9hPzeZoESJ5CqtMdHeAoi2ffWvHXRKACwdphVkMNdtqGoimg2unPhZvTbPVz",
  "key3": "3cyu65BGL8GLLws4qdKFD9dsrYDMacJfDX5W856fDvaZugbVxPt6eT2wMciCe2YXfsn3W4WFrqdFt9gxdE5R6FB",
  "key4": "4wyFr3cEjiPezqnXBTY6S2rVHKA11u4EBniDpKytXUyojnEhjeLRYsDRttTC8hXKX3tZ24hdBe7Ex117CxYqQ2pr",
  "key5": "4iz1wbrXa49MC8z5Y5VKzv5qyEHFdrRLyoUeW4nf5S8qNzRULFBJjNmf1NYcmyKnEtzsaJizwWfSkMEnQkj51SLr",
  "key6": "3aeFaGV9YfgwEqpR16K2aeU8TPhF7jdwMrkgnWR3KLP7bV7dNK7wYEJEHD8aXZ9ewkwyhXVGKz6e32gXGVhKa2zK",
  "key7": "39FcLRvzWEe3C7vmm44ctaAM9Q5FjjyWQ7scNjWPHEu5X1t8iR3CXEPuxkCUPJLG4UvXVMN1ZvFG872zpd7gFiDJ",
  "key8": "gmG8FhBM7K19H6VfKDBN77r9FphvqDssDp4bZG3b5tL2CzZbLQ2LUHfAShWZtbd56msAiniU2jKM5VdFKLfsmav",
  "key9": "5EwMcsrYkSruhYbHQNBPrXhobdvn4fdn9E5V944kR4rRXoVs7PnTftLeXLajF8KPN46nC1wKPRjWRbFizw5U4Go9",
  "key10": "6486L2LgpBZzCCpv5G4VoMsYQ8bPT1G2CBuY5bS8En9rRRY1QKdTcTjJaRApx93uRJ43TPPCjqVbAdb6MGvuYo22",
  "key11": "3UGUBW68hh3SnHBU54WE7sr4dXgaW7CQzS2ddPXd3PCRH8RXyFsx9yG2PCTrRnzaqELHgPT3SUV3W6arszUy1QLF",
  "key12": "Pp3aBU3jhaLve6QaccA15oa3q413U61BAC1fBTKysA8hNJ3sVTdUM7XwZbhbg1NZcfXC2SNoxgBa15PbJ4hrVum",
  "key13": "4hmu3kmRGEYVCVuQN3D419opLX5jyUJSYqZJuuNLpySeciKKqTA2UEGXm4KfneC4hcMMZooj8N7VNRao6sDnerr1",
  "key14": "46HexrnisM2yQnjZ9SZe2knZMnhEVUQdmcxt1Dus2C8LcsKEcUZ2j1HGAwaPjci37fXQKnnrBNQ5RRvYyrteuJKh",
  "key15": "JZescqdHaC2dM5MuSHuQ8cUXBTPNcrf43yJ2fssdJ95vgj9ZzbX7LL8WG9uaFyEeGKAD2EhBEgRkWUmnR6EZJTk",
  "key16": "9aGATXdKVQKH9emjoyPp4vpsfwFLxK5XBjNbvFbzRwoRYPzjdYDVt16QBCZCSzY7dYGdtSSF39ixboi2UaBWp2c",
  "key17": "66Ci8HHaN9PAGjb1a2gnSiTWgme21BiXFweUohNowU7YtmsvjSzA8SPDSzMuJ92cN7HWUifCcNz1TqrCXnWCuNkB",
  "key18": "FseyD3TEfupbEEiSgRbBrYewAGvmqY8mTqUFdjJWFgXiXHUs95LM5cv6SD8iTfimxrPxCF5Wd8j3KTBtidzqz8t",
  "key19": "3QkH4a8rHyaLs3zmRFmk1CTYufj4tNNuVxmYjxBf4DfdktX8LU767Vxdb7a7c6GzdR8XUij6xSC9rZPN7U3dKMsf",
  "key20": "2y7qCkSz8nVFBy98UNe4YdeLWrShDK3VJULFnin9XhXngiLfevBMRgHFrgPNJSgYamjYppVa5EuzTCG3o9scB5px",
  "key21": "4SXWypnWBdFqYyQv12NQTBEvWCqw5HRC5S4UjNFssWarikeqKF1voYovYgjecZENcgSin6M12FTFW5j13tR9TKaZ",
  "key22": "2Zi4kfBH9gdCspKEhY2ypsf9roRzfqivXsEZsvibr6zeAMwKP4UgutcDEnfpuYpGSDNw8RYcJjwPish8qdLPRR6c",
  "key23": "4K7HSvzZgeSR2yXeJZ2GsS5cKQJfTd35fvvkYtDNfgUT7N4y1z33zbD5pAHL82wnJZ6j6rKjQBuJ7SgiQS4vVjGp",
  "key24": "xXJgaGV22Ybj5A6yRMQ3bBfWMjwFuy3SFSr2R136zHvniNwHrXYoUUDH8Kq9BtsnwVPn9ZRbyPed1k18aMN9Rxt",
  "key25": "4KLfhkqRhtemRTNZj6KHqUbx6qkkGMbitHU7sNHaWL1jnsUtcVmBrG6rv35Rv34N5BgXFk12Azk2gao6Eobkxa4L",
  "key26": "4gGRLNRSa1FZ8HQ84rs3xLWQKAt9pBbJLn3wHj57xWo8Us3z6wf88X1jbLAT9HiPFHdWcw2pa9NDDHvWVt2MgXD9",
  "key27": "42xv1xSG5M7EewF836bJYFp5C6ucVRDsKma1PvPwHybCw8qRAVc1QcmBgDHjadMPaYEGjMkANwXFr68FqyHtWdcJ",
  "key28": "28QAE3xQm3gXb9WCXPZUzAceeYyTRL5oj4LgUt7vmAFF3fyZyBswAGFnjNfNQ53KbSyVszzA6YSzvpfLp2CWA4Mh"
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
