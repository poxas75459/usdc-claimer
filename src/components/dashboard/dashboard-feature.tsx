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
    "2qZnEixRG1CGPoKzsJFnRFdVo98PxTtKA6J2gw3LmLcUCvgrcQNg3g4WcNnfHPk8sDk711qcgCNxWPPbsyu1EHyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iFNg2VTVE1wtCA2Mz7J5hnRnfr9k5BBzNFY1kdF1vxy4PJ7o4xYN6Pq7mXkWS6iCAbbvWb3CDFLPSCGFH6AwF8r",
  "key1": "csYbSXJshzUiBcmmTHTU2LowNnMHWGm7Rn7hmUa4F9kmr2LTbWb3zqUHu9hRQKhFLRHwHfQJ6nrGd85FJzdkT9J",
  "key2": "3otYo27zhTCNqb9j9Rk5eyfibiRs8ZkPKbucpfmhw7MN5VkfPxYpuHagiQLW52BRSg1A8GmDy4ocQacHCg4GSwAe",
  "key3": "5VEWMbcLZ5z86TaN68XeLdfKcNvYXEqirCRcXjdg1is6UXUewinyv61x647bk7QuJ51Kx5fcH6Xa7DmKZ2hBDW1X",
  "key4": "3MyqiJkBg52KDw1rLmMwVbiiSdNotpVsXYZ2j3SfDQYnyFatkre6vZCMPD8aArXcmJBJ2jWb5opTnQkEwKpXYojD",
  "key5": "2p3mNA8zwTFcuKunyq23YuEYEaQKtoH9pJtPsBcAFVTTn4oqdGtc4y9tGH96qM5af6ZNMyMmz8irXuEADWCRLfa1",
  "key6": "5X1LYYQHbAFXQm9eJQpeZEMNvePFdwER4XAJj3GHPf8wdS7KrTV5JjSf88jm4u43w6aJHn4GQn9g7e6bMoBvgYXj",
  "key7": "4nfTh1NJ5CMUgtjydUT9sXawNfWhZvFih4yU4YncvcspjiaWieEA5ywsY3f8sbzhtcyUc9QSc6J4ibGPxtwSuFvp",
  "key8": "5fhfWwVtk39GWswXB7XRykcerRyAX4SNUWjojjHC9BoMP9FiPcGgKR2QK9XWavSXgU52oNHVoFwBxrwihGSbTH4C",
  "key9": "5zdh4DbR5eLivBZTsfd3VfoxoRb8kRT9KzBRQmb8k1D2xSPsHbWPcCohjx2vd3qoZfKHAesZCv9JaNoGg7TESxgB",
  "key10": "4FNffpyZdbhESNYiVAoYmg61To86kULm59vLuL6c8ER2WTCJHsUKNfU7hzUuWhVRqvvz6F3Du7ZPaKCub9GHUkNx",
  "key11": "f2wtnTEQ1emic736W8H1hZenbkxLxYfT32Er51LnKUYk9QwS3pojEwmWtSSxM5wGi7hmxJ2PeUyP1voKNZBvvyz",
  "key12": "3K77YphYHEzCCUDibggCzbD9K9uq294Vatohg7VsSNnkNuV3i8oZVgHovwZnwt8BWEEcy69SVnhmBtrW7e2ikCmX",
  "key13": "4mwea5PTzfAnHQmcSEA6pG4fEsV59eNPkcDzmhihE9tc8Y3cwoUv56Hrr9q4bhv8jr6RVbsx5z8Ae7YRvsAAwjx",
  "key14": "xmZdQirFHtAHfwUVPHKjZMTzBsVY8VuQ6NyrX7N4nCDaBhpAxp363isyDKjHWMpS3BmEgz82SNqNaUC5bZSByrt",
  "key15": "2makvCk3obptcuBSCa2PHSqkSsDRTeQ1ZUqPKXXhso5d5wzaCjxAqHpCj6hrmxqHJCBD4oc1aadnNrLhURJAifsu",
  "key16": "2DkZMSL6qHSABTXYxKwcDwqVXE4LQ5njuuCkDtupVAUra7mtCWyp1JZsX82BBS8TJnaAbJEcmHosgrgz7zWSEh3j",
  "key17": "3khVDSvLpLRGpyAP2bBDiLpWHgxxNFboHJna5eZr5iLoX8QxemFEBUWCpd99QVTNpyKBotEHs8jmayygFftxD89P",
  "key18": "4esTyUgcwkankrijCVHtyJemdmDcxKk8wUitticFiLc3MiSBvcm5QS8eqekCFyXJ4idAQodFhu839P3pUkrdRiCr",
  "key19": "27WLvb4JwQ9SrN5YJke1YAbbrRLKkAwn8RudMvZhnrzsK8GUkZ33FywztLeHsWnTr9NWqfULZqXVwNMV3ThTZtFb",
  "key20": "4XVcRMVNdYNi9p9uyTR8hyy9vzrBCJJcykbNtNeZzYCBUZ8AF572ttXx4da2CdPjMwW8PYx51FDZWxg8U99QHRfU",
  "key21": "4MzBZv796w118toPxofxyB84dmXzcCyVJRqMjznHNNTBh38pR13R6umpSdHq9j6QWveMtX7yQBxAUSwZERKGu9eZ",
  "key22": "3GJwSYDMBXJr1Avr5JnGVqDpx3vizQhCmDf8hJVibERZPVAcEnYsqxoxipxRDsJNS4h4oz7QMD1r5dJgfDPk946",
  "key23": "3TrXCuaQRDEeRUbAZzu7VitnDRbi1RngfQGE2YxRZwFw6u9k1KaVLN9mCMc8ELbCNMM6tmmVvzSAE2uLM8CKeHs",
  "key24": "4WyEgGWBiPSdwakJqxS2Kkx52c8hC6jagBr9bJRwfPy5ztHjvRP6MoipYhA2zgpgB5TkYHn8g6oMFBv3DHBgPm4G",
  "key25": "3TDSUG7ezCyPoG4HcL7Tif7FRwo73rtU2UUWean2pjA3yNzSyBLumQUo6Nzf8omrc7DBr3t5Krd38UynCtRi3Zwc",
  "key26": "5UZL3A1YJQiQYE4hh6wK5VdNT2bBCETasxkD35KdiJVnNLWxwq6mccCjSf5vP6t3wWoEUi7eiYA2qUSHTWNEe7Nj",
  "key27": "4FhMMBE57S8G9qGYpy699Jz7ck9RchbX1yc5boV9XE72x8bYtRxFEvAExWuvGkjb8xG47Du6EBNkR4NJHkPSm7LM",
  "key28": "4xiiXnjCfxeQzt9CUPp9qff7aG6BuZ5cthUaVp9Uw5CL44JAgHDh4qUKsHJLnQLxd9yzsr25LW9N1jA41e9Ayojb",
  "key29": "f6H6ygMBcaRbvaNqoMcTbMF7HSJKWW7WFfhH64wGv4MZDzCkuqWx6jBBFhTY4mscAzFuNsmQxaqiD8ExoL3MpfE",
  "key30": "4TA5FpuuKkLp3V9c4yc1nnYoXymR9ZQNFFfsChPfwA3CetWKFxEzrv7cdRGJd9fVmCBRmECkKCML1SNuiUUUhP9R",
  "key31": "4tFdZwZ1kyPBDLn843DzfwsmAWahBkvVtPRtrrAUscdNNH9gitXxchWkQo8AEB2Z51DDxCbDS24JrvCMLM1yMLun",
  "key32": "36MLRv7o1wnjogstAmgYsNcRxMPhhfGCgpb1PB9BtxQq7zknW3mwqYos5Vh83XojYonh6BnajpUwFLNsMAqFRpS5",
  "key33": "4SMBZ56sSM6AZSdRc8uut9AxqJAEi1pXVFfmtzCXH7mokqFikM1BpfKpfxNpCQbBLyBmUvMNpeXCabnvQNVQBp2X"
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
