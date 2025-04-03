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
    "3zhKTHiYKGPPCYT6qzNVNwk7hrstF9UrEPNim7DMkNuDuuGdbZSW6iZLmwGpkYU3hSEHdUw7z1DjV39s3k8d9NDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1c31qDfYZtCatERv1qm1nGinBMcg2T3QLnen7QRR4enr26KVLaytLnQh43zJiXGgkZWuabY4TRVCuaL9F1HQYZ",
  "key1": "3BxThbY8DikVRvvHW63puiu4pG93gekHHTnefrELsLsTApRwoy1Ch1piXjU7u9vSet8dbBsvUBW7crzJ3jeVjfRT",
  "key2": "2h2V3E67jgWf9x1AzXfSA1Nd7DsZPpTM1vH1ZTT7ugTjSvtFR1mA3F7s7uHyfVQ3iZics8aPEyqmmMZkXaNfCvu8",
  "key3": "4b6VDoodCfvdfkmtLWKpjfw244trqPAjPgfRP6SjNh3t4i4VtTzhxT6xxvJJoo5zps4mbmhQ2qaBufP7RiMeGVR6",
  "key4": "45abENFkLAPP9KpZ5phNxUrmzRsAdJNEbVxhEsuQjmvvdumB7DwniWP6919jqyFoVsx8qPsuDv5EHVnhFTHkV6uW",
  "key5": "2eMszLzo9PcB7QZUgx5MvUDRz74wFHSGWsFgvsRTdhPpqYMmsxRNyie5NsSRVVA9XKGK5SnRNLVAMXgWy292oxbN",
  "key6": "28haNjorcMZyPP3uuzAuKJ5Lh8wfBUHZbT1TAxhHcW2FbAZ7nz8RjCRm8nfJvdPeP9W1ueyjN2R6tVnPdTWVJWuY",
  "key7": "4FVzAggRvnh4M2o24cpvcXEQi1v97M7KgT9JATnfPxDsWt1a7WJfBsupshU8W4Aa3q2tgqhHw4iN7Z4LuVqExdc4",
  "key8": "YP3jpdV2Ry2SdoFRVmM8AgxwTdn1z6YV5vqPZb8H8oeLdytuw1tERWf3hEhvDrXBJELtwNwXNYJL1xg59ARbUEe",
  "key9": "3XyCgf23pVVn6mmk5vSVqgC2B1HXGHXzs94LgQnASzaC4P5dxkri3zhdLTKfBoxM43exRmAdXXy6mQp7foZx82TW",
  "key10": "4VVfBmCkusqkTrzK83qZw3MNLMsD1GdiompaGTMy5C97dXepYnDDQxstFYjm3rpVEEx8Ura5PNpxKB3FaG12272W",
  "key11": "RG3LDoTGVb6g9m9Cd8uBV776S2xzgYoNwAriZvfuFHAWvs6cpkr5SmRwk4w5xM9r8SQdC7FrNBaMm7euaqCyZyQ",
  "key12": "625fu8RAjj8wb5YBQsuN5hNAD4vZNUKKxbzTYiV6E1xXuCZ9sTs677uic6RRZo7RFckE6prtCowicUeSz4ydeCdt",
  "key13": "54p1vrMESQQQyKQV8SstQCeSRPiVgQZ5gLRmuPzGeQS5U2961mAm73ZzVMUWxqu3j331m8X5c4m3aTWPSxJeGXiR",
  "key14": "4AdYphUHbkp1eVKnkhn35umybZxHzRhvVJorXjBReBdn4kQkZmjSddA1MYTMBkT7e5Kz1bT3zUnF9YpiTRTUAimh",
  "key15": "4GfBTuwgoCP41LHcNPrMEW4cJcrbgfgrBQh3hTUqjnXVFoMZjnkGMq5czZNkW5ZHeE3F4Dwbv1vBojGZmWFQgYLg",
  "key16": "3tSiHtrDZyUrk3gyanqmwgqqWHCDys1tH6srh6ZYDsRrtRSWLji7Hg4eKFB6Frh6Jq21PnW8n6MTcGfHxtxMdHs1",
  "key17": "2A3RBpuaJ19dB36bSZA6WT6xt1NkFU7Qd5XDPfSr4kSeJbWxBv5ox7nYG4z7cLWkB4u2Rqg2X4ATxkgrPkvw9wL9",
  "key18": "5N6UCapMtjg94QdvTC3me9Xe1h6kx5Nh2RHDRYjp6VyBgS9tmk9CbnpezutaETbCMYDLtA6H2wznC39tT7ZJKXQD",
  "key19": "385VgkNk3qhZMYpSWZXxxmQDrS4ozkgbvPs23F37UPADHNXyRy6MXvhmTEkdUbqP24tah7c2Az1BpXxgXtyQitns",
  "key20": "3Hy3tXiqxnaf62TZ9um5LmoGXoSiiFk7PdRzQKwUniZjU3zqWTwgL6ju1kiByGDxVPkxhnpnszT6JX7ZHiLmEK9n",
  "key21": "322smbfoR8LpmVZJ9jjhJ9kEF4TmWGkgAmB28BoCCYaUmxPWxyMNGXS3P1BtjB8i1iK2XSwV2Yh5MFesT9mp1KKN",
  "key22": "39NsZiDxbg7bNPkMBiJbZvCdcv8ghWKBHpbBV7buo7FmyUyRYvweD4ygKnfvjrkTxDmcWUv1gMtygwouPq2gW4Wy",
  "key23": "2coMtgbf3yMgSnKL8yDHgDkut9d8naUX39CRafHAaL2EHmdLrkG3v2Fq41SaE6fLDhQtu1sdHeWWGv8gXFaa9DXt",
  "key24": "4aWQmzCn2vsLCc1sibdbfYFu3r3Pm4b6sQZKkbfoYy1RBEenjTSMyoNUjwn9zxJ7qUJg8uH8Now6iJEyMNVZqLVs"
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
