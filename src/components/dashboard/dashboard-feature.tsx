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
    "zNxsgnqUrsbCyxjLDZZifdb9VV3K9KRMFBG5Ms4GQggtyMHamE4b8mVDjz8dGFNsmoehRWqnUxgM5PVo4Dz4Q27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VqVGg4zX8Ss3nPJsmTzeNnzNTyy2tK2XhZ57YuwLBzdnnt4sEKPpbhUyockQeKPEJEJ4XZii2PUp2dsEhQAh2A9",
  "key1": "RZ4GaRy4ueqn8Z5b1u5i1PbDHmC5w75Bocu99V84GBvo62mMVyXYH5qY2sH3sJPgDoYb56mBKfye9SvQEjmjp2x",
  "key2": "3aC53tT17oYrk6FjzVFbxbQHnT5xQyxizjyBrJD2ZgcWN3tA24qiu5zHsGaVjxKh91ECJPAxpjGFz51rB1qWaoXL",
  "key3": "5xfnp8qBBFzSCEUT3gRU2HV33CAoQBsk5qLQfZxKjke4ytAUuxqBhcTNBF4FTtJni38hDK3B8RzMVUP3nnmbq7EQ",
  "key4": "2JpfxSSXvq5CWpJxYeSenu591iVs2HYbRCPKQnrWvsfS1sgvpjK6XfmTWQfuAj7VtezxE5vyQjxnFoJabkdZWMyK",
  "key5": "3GjzecUN4Vx6gj7xatMyVx5hYgdUpwsPAKgu9MTcAGKfp2NgjdPEvTUoxuLcoqvNBKbRwUKqErmo8ySV2RvvgAcv",
  "key6": "66KcktUxBdrvRBcK9TGiZvWXanmQzJSBARTjyiB3ftve81mP2T447pPPjUsc6bxN2BfzczNmcGyff3iTfRzbXZoD",
  "key7": "3LvfwgUNWTVfQwooT6HXofLf1DhnhV1i9VWQgwV5mxZEqRDLUCWTfszPkNk5BFANkaWyfFhs1BY9nee6i9AZparo",
  "key8": "24sVwtZnPteFFkCrk6nRwCbAxops5oPkQKnnv4U2V48SxEWyudUnd42C2pDVAbQkReLHkSRYC6CUTZ2k9bRKYdsk",
  "key9": "4mH9K5Ff1ZPVhdnD9QsiXBwx5LyvmLmnW7Vvi5FgjuDVJvLgXSWyF2bKbX5zxzcZQNJfUZ695rpjyciW5ki4tWP5",
  "key10": "52vbuXjgoZ9suHS81trea4RJQwt7pmQWpuiCsLkWqbu9QMtGuoZDxogQkzorQZZaNWynBXgWNt8wEBd2xUMd1KeX",
  "key11": "3LUFyauzYjXXwVN9q2WEA2joqD2rb6huEgwReZ3tstPXFGN1De451szJunSVvAthor2ZVjzFFCzzAJqNYBKSfFMK",
  "key12": "5GNxF4DJv2xQpk9ioq7CpAfQexJMNxu6ZDgMkeQ1TLz3FFaTKBtUyEXdFDaAhpDp1MfjrxmLrRTdk9XWr36jRs1r",
  "key13": "2w1hz357yzggxBzhdeP7NYqAUbchRDFuw6feinutKog9Ag1eYu86qWBmbbq3r7DED8ymSCJJhPpqZvsQnoCJ9kuG",
  "key14": "5R4t6irU8MrV6Gscb7UB3vJzBXPt63qAgVqo3nx1HgxaSAM85P5j3T6QDjW9iRpFeH1BWjmvA8YJMpeBfzRUF71u",
  "key15": "3o1y7g3TM9fRx7zYYatTBPHbtTMbfWzupaiLT64H8HE4QLthc7wqxa1F3EnfVAHowqg3H3Vme8sgDCK5Hd4GRs3Q",
  "key16": "4bfZJMGFMRyCzgZBrKGLvB9Eb7XysbAojJSbWmy7RLSY8xkLJbFRKdiQDm5wPtcW18Zc71GNiPfHE3rXpZrCVvQ3",
  "key17": "3NoXUTgzAgeUd5SxvFrMuQFCFpTHiF1MujNpL5XNDmkpxWDuShp96hdrgHugA3gXjxPikWkKtjmmfCDKA3A45grf",
  "key18": "5UDjeBeu2q6HnrEUAcB9pYvrEihTMETSe1q6mpcfpgf6MZ8hYahJqgre23sqShcLVyBtad69iLEJ7fEu2nNB7KMP",
  "key19": "2EZi4bkfiEsNmeV5B2mrePDL5nf5TpPkBYsyJCcXhcKEKuLudmdFLunrgDjgAZoKTPJ8jr2rq9Ady12SnB6sUtub",
  "key20": "5q7yir2NZbZ9SU494zU8ag73F3uNkoFTMVYcZFzFc3zvbgfb1ZdjPbQxUmo69mB4vPjp2eHng6rMXFCXGGFvux37",
  "key21": "3xcXDptDeTN9VCBQry5gxrDCUuQdaBVq8jdHC72B89Gojienc8NC6wB286FVXoQ6G8fkZiPGyeThMneoivNmWxp3",
  "key22": "5GGMKxGBJbnAjc6FHh1PLYcM2esXPReQ9uG1wFTZJPscyoHZBf29RWCuRLkVdRJGoPVNrjDyXYMwEzBeJX3y3uSB",
  "key23": "7NGw1uZndFoq4W9PyikhPRq62935An8SxY2GL65fRxEMPhtM8iT5JYaMvJQeD8Ehs7TtdT3bNCH1crPEQhNry8Q",
  "key24": "5LasrKJ3d7qDpWNa7cUE8U4kb8eUxwJGu2h5NTyTkddpVwp6cDygf3JV6BAiK8syXn49rfyTMbcvQxfrqSGVGxbJ",
  "key25": "65NkM5CKpuYSp9ThHkVqhGGeD3AgQXs2v7vs5P38VQfHbsSLYHx2cqqn8yjZuxcyxmTXf9GjvJMSp4XMuTvNx4Rm",
  "key26": "4qve62QUHhX74M3UgRaXoYQkriyzHrcGJfxqFNrxvhkzhheNpL544LqcXsowDBzB5wxwPkvF9L1chfX7pigSzghp",
  "key27": "5MZjJPXTkHgkLyghxz8XLg7TDQCTgQNcSdxCWCLSm8RM8e2pjJpeK3jRry8ENMDTdYqokudh2NiUjXs68JEsroD7",
  "key28": "5iNmmgBDCAXDMpZ7Bdn2i6UF1Y2xHHeVex9FZFgNvyV2kaJrPnGBgf88jnbeAeidb1Zqe7DL9PvytP82K7vug6D8",
  "key29": "4cV1tGbZjeahvJKhh2pkDWHYoFyLGBNU1fHdYHfp7QZLFuFcvuxrWQiCQ78arg6rrWR73xztknkNnoazUDaFmzso",
  "key30": "656Rbo5v1h9ZEZ4ApYoejSReNPohdFVVE2FZN6GQ7Sgf8u9vWrVr7C1wAdUruk2cdTKF2Vy4J4n94WzX18sLpVzN",
  "key31": "59ihazw6wkFxb4fHjahXiWAgy9wgo1hf1mtUzs8tw5HxfjvANSsdza3EAoqZpgcSwAh8HFCiXdsrx23oe41Gh5o3",
  "key32": "2U33JPzJGWrUUCLpB6EeRs6yYqoG3mmD3toBgzFKFm4YAUovEd45HZ3cpmZUrDLwCaBwkKBS264ELp1YXMukhXKr"
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
