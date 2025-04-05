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
    "3sk9a8D3omZbkDVN5nG1nS37Zr66WxZ1K3ecZbtELq8qyyXxRnxzDhPxiajxUa4nZdYB1Du3Js5CVhj7rkMuGW1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yMoMMEAN7gQLNFbrooAzCyHW7i2aSGUZVBCMge4e3zxb2wYNBusfDH3L5YSJAKTTRPFRQuE9X6XMXmajVA6tcu",
  "key1": "b8iCY77AYCgsbafwTZ9ZcGza1YmeVwK1uAGLnevZiS7NmazFKhakECtCt2b1KpRHoSNecmKTvxgcK1UgcGJXfcP",
  "key2": "Xh7PbK6sdxmYDdeHnLjYwfhQWgJQhdYshSK36sr1oDJXkAhfpEtQUHChxiRDxah44vNNqBjhxovy38cGYLf9LBW",
  "key3": "4jq8vhfAiGjJwngPxd853QJyeSSig21cYfjFcspRG6EqzD9bqw87o15AhVNk8C8Kt6B4f4hrAEdTmTTRzViGNJFg",
  "key4": "VyTHhR9kSRBd4UX7BDBvfXTwDrk3yRUhTjLgWzuPuPFEifBr7hztF1nPgAwSWHATnampgW3yDT4nhjvwqsyx9gB",
  "key5": "2g6uw4Z2SdQeJ1mrxjpyaQDCdgQ4hxRW2CMVYR482RMW7rtuX1owj63BsyJaRJVPBSvorGNxEx3E3G8ZE5aqRGMU",
  "key6": "hfBUifb7QWVdFMoMKfr74D8LhSXnrnYCD7S8eHcRjxYvWnMvzmoib6DHqKFFMEjrUbuzvsxcrcd2Tunkiikvv6a",
  "key7": "2uD6oFG4AE68YYhghsc39oRanuXGqV4cCXNPAkbJJmaWNZrkKKvViPC6GxZoPYN7Tmrmwmf9ukYp6DfD6aaSouys",
  "key8": "3DHv9yohUvH2nnkHpGKmJc42XKNR9pkxchbeHMpHvvnh2dA8XFZedLHfueyknkf3QHYQSwqNWdy5ap6ZsMgdh3oj",
  "key9": "kqvUkMc8BatL733VzXNNbSCGRGKnMKPASiKSnjSMRwmxfmY4SWocFaPPDD2oYcBBTumMGkW74RuhwRibMg92ieY",
  "key10": "21EQa3vYD6SB8MrD1y8tojiiJhHdUaSduiKYUwmBwKvwkGau1CcU3mUHQMcaw6FkAWaoCcsKhktXvJXLn1yfAhe5",
  "key11": "KngqGeJHTbBxJvRegoYxZKQ3jt4zYFkqQYUVBLAb5Ai5be49E3N7eS6tu5xybvnhE4VGeFuMDYRYNs2b6ttzuqN",
  "key12": "2pMXiVmu8Sia1AtrLBnmtgu618tF7nU272ahrcntBJCNG6JedV7gFdemYc3ChP2f56ZJ95vjZLh9BrCLLXf6o125",
  "key13": "3UFTVJhCzgeB19s5kvV3z9GKGTHnPYNPmS3iGgY7egAJn9EVQDCACqRiRK56r8Lb32ZxXvw9avs89Lg7YN6sn4mG",
  "key14": "4D42SFYXtETPz3JvSMLCCs7442jVeHRdBTHL1joxBgo5EFAJsovJmQvmPLDiFF5yzXHGXYX1THccz7XSDp26Jy4A",
  "key15": "5rzWHJCdJ417r5nz9FxRRVjfwEXSJVDMSHbwNWbbcuwokW44AEeDoP1soWNUytWSiaCyvZMoVqzdvMPLgrgBK11h",
  "key16": "kjBp1SjXKc3b7Q1672znmeiUU7JpuVRwU8ghUcWnJQr1of7X66ESRnp7W35LUcSkH8S6soicApLqwj1dTdKNBGX",
  "key17": "57a4owmoUJd5iR8LYUSFTF46JnvHxenvukWMw2CcPiYmQCCdyPbmVxvaZKKXJ4uE4JzbK6sWEv7Cp1GrHD2UdhG3",
  "key18": "mFBXPYmETxmmF3ccs5b2chiu7QrJWiGAevTNibvJdDwnUkNCNEnpbEzN4ZFj8uFpZtpsdYViHVuJYZJrB6Ysj5F",
  "key19": "1BnvZxy2uc9Hx2KMGMZ2WqdUByFt6Qcb9A2Hi4dYVSpWnLTQMeemtySdcYBfNk6cUmE6Anm2NTYH1bpgDpdH2UE",
  "key20": "23qKUXVQaZVtamREXgk7YXc5RRA4RLVHMvvM3RmaAbmoEyvbNeLAJe6crh7JK66zqw7X2gRPQdf2gmiYeqSYcguD",
  "key21": "wkiS3c1pTBN7yox6F6vbCYtDVVwvTomP719jHGrXnKh3GfXGJtdgyVyZ4sbPKeKBXQJGkRCFptVTiwmg3fhSfH2",
  "key22": "4DX69hYcxyXEYn8K4NBQMYnVjVMAXJpGux72zYNb91PMBKZNiisDUoK9VdY9sjNBR4Tr5MuNVNTmFhPRNhtaEXVQ",
  "key23": "6GYGB7wmEwnoP8QctTF7983FvYMYriECSBpfkAU1qhEeJ8v5pzLVxas2hw3KaBUc4RthwXdEUZq5eiGWAKPAKss",
  "key24": "3Ts2sZFMAJM1TiNppFWk7aVq44S7AfkFfYC9BWjPPFJogeEHFtphmY5tJZfxvjgAKHNf59KPjpoPoHWwiP5QYUyz"
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
