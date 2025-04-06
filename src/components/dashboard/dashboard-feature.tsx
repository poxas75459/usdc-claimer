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
    "5Z2z3c8DcGEkbefpLiF4soZ48HP7h4XA1b4ij3RQuPXF3NrDG9v1WadMmTQuDhdR5bMCYEXctVRfU4FP97RzS6Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yj46Bm76eMqJGVSmZCANHrjfyRHh1EDfHVvCP1DsD675nVnstjTsqsySSXunxta9eM2TCFZEWXdCu5gsoXE2MSR",
  "key1": "286uYgVb4YmirLJ3mwL8R5nMoTNvXuxzoPVdSei3f2kDW6nc2SWPWhFWu7z5i6gZjLDzFxuMtgAXxdGv1Xfi8hFt",
  "key2": "2C6wwPPJTXpsDTAGUe9mjs8XwVokmTEaJ9KXt9XoiDVhCs8cTTF3aL6c3xyqSJw179YCYD9sk72qJrJnTJpv5JhA",
  "key3": "2o4iZz1BERNpJDw1ta2ATqCh6dSEVzQKiVR22SzmxDSewBCNaqrbXezAHyZjyADs9egLYGL2tkjN8Vp4gvdhapLT",
  "key4": "vgXPy2yk36nFMot3gbaomDU18cH1UFy8dkGixm9cdTeftQzjZiSpVjHJZJ56S7VfnzXu2BkinyC4uyheiEFDLSL",
  "key5": "V8iJyTPrmkm7BPxR2J1Bo3qLrBarbNw7Xg56baeJMVJZvFtTTyM7dRyVc5VTa9oW8vjygxYv1qHHMCWcq2tEMxY",
  "key6": "9DfH4yBAiNVMUwbcK7WzdGWM3gCNePd2eLPQEfCaLEFC8TXr7X1haz23sMtZn4ZFsc4qAmdy9VQovzYoeikovSh",
  "key7": "38bfCeQMhmMTS6FYnsiU9Rdit7VWjJLsvZnASWjZmUHKkuJAe5AvXfUHGfDX4fUdKvnVP4U8kNa8jF3y2MrUfftL",
  "key8": "sFhp2qVyaLNguTPJaqhL17iJKcnLzRsXNfzwfTqhV6QvKrQHJZxL9HybjHVc4cJXXLyGiJ9C5N1Zck4TeAgzqbJ",
  "key9": "2HcfqSP31GXDYifQ47TfWpNqKVPCc4TmcjMekYkKc36jMvuPxMnfGuuxUYuTqD4ooHTseYxsbqnwcNSAbtY8XzsR",
  "key10": "4X7WMghe5zwU9qfq7stfBThrqc5QgRPyA3Rt3ZeUptLSro3aXsD6oj4vV1rCuJiF6qeqVC5orRBdMZZFb2sa8C2D",
  "key11": "2P6d4YhMMTdhczbnbXFQYxgam3NwXhrYRk6hBSNR3bnW5eUtv2sjDotLbf83pHD7U3dbQhPefYXhePaabiDeSpnQ",
  "key12": "2BqEssGo5PT7iPfgjjwZ14HjHomqFgyGv4TGj3t1ohD9kehsudxiX4yUrMmjzbuCAMVPAXdYYv6CvpdBy4warhcW",
  "key13": "2AHTvzvmz6FJVCqnhD2Duk1CZREcvk7f1UAsiEEcRT8pa2sQ9QJ9vy29kJhAezvXr4mQEwTiBNq6FUeDJ9TK966w",
  "key14": "2nG4JPwG7qHRueE6FmsknHFfxF5JEtdn6YK1Jp5MvT988Xc6VKFmdiPREEzw4LQjsEGqM8zyjZwNALtQp1m45PVT",
  "key15": "3cJHMWhW3rXbwZpoqDfhZ1HJgLbbwo83h7TGnN9A1nX3TW88EPqmUjENURF1kGoEcYDDwtUAr37GjzdQJYf3LXfV",
  "key16": "2suwQT2Z8Z48srtiuKTLke3ifSUaDuYaPuPEMxk1Vpgc4HogRjaMiBmerSy3wdw3Pcptw8Gg2MxR1rTeGxBtwZUV",
  "key17": "2Z7mHHiy95vCqszN97uzigUN2q5FfeimRTPCynyUJSYdJYTr1cJAzm9NRF9ER7BBta6N3dg8ApEwrK1HWwAL55dp",
  "key18": "2z4aH9rakNHDoM3tVZt7kxsQ9i4UD9Ww6WY4azQrC7rAd74vmuALUcouqWiq7hZe1FnMvxbBFtYdeB1sm4t9KiAB",
  "key19": "2vTkKwEKmkeRTpS3aLA5Moqr4fxSRKBoq8Q6JPv73EQGbGh4MPDKsmLCa65AHAbRrMYPpFJGQA1A9A8dNyaEaxoV",
  "key20": "nLh6N4GNZU6r6Dfc96o9iPhPPhbiQBwe1YpXzGa4CAKBGULUVNXkYH8A1PFAHK73QKkWHtHihFPeipZHdhNqFws",
  "key21": "3omQDMYEe6HNLuFx8yo7f8D4HKncGcKQ9YgYfmNrHTpmJaqU3uLidEj3xd7V5BDiyWPZ2mibv2fPKjh1rSpXNYjT",
  "key22": "5jHrekvKb6R8Fnwgs1jzh2H1wbK1We2UgkDmH9gixnVbqsqUD4JNewZAYuB8cZVkcK2eEYK5UnyyEQwYn7x4Ka1B",
  "key23": "29sTELirkaJZ4Gmm63PN8YX7V79Zq7GRQw8AfyEo4kbzQWqp3zp9o9aBHBbQcLaXhFDWDULx3r1tC8chxdSLw2Fb",
  "key24": "28swYen7N7VsX3Y81ppD6TRKjgptYrN4NTEmKtznDt2u3F5akAZaokkagNAes3T25PyD1hmJJRbd9EKMLDQMSiSk",
  "key25": "NwCDFbatjTtjvqquyXZqD7V3W1eddiAxGp8W3jpUbDKkzxha2aqsLy1Qq6uYBu9XqEypRx8F9XbB4Xr9FeXbuHn",
  "key26": "36x1wUT5DB1GNj4o3nRNLgDX5xYUsD4a2YYx3njaT3S8SMnhnTWxKraeXi7HYZYKPruHgbBwfnAWEXGC952mZQTV",
  "key27": "3TsoccJD8eiH6jBymMQXTxEMtQdreZkGc8ADMQiAgWxWxd3s3XzZqbJR7EKxo8A8MWec2HqjFJAUz7k6ePRFoS7L"
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
