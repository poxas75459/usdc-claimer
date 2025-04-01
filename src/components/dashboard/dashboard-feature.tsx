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
    "3gc5PE11GdoPk5FXvPb5FCKj9juDihz4CwumJDXyCvHZbyEUNtbTr4zP1wWbWPR4kyTHp4DVU5jP8sNRbxbYfP7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3by9VTDPJwefHS92VncZuNUHdinXRFJ6QDbEhBbKsYncwnfN8sgHTRTx5eC4K1F7ZFaMif11WhBTGfH3tbY9dLcz",
  "key1": "2qtjMo28Tu8DP7XvKHrMvHK3XM5TG7TK2VkjEGvaepm8p9hjhZzStVa3h4c9iAMxCTymWEYGQRyGMEoqXwvj6ahx",
  "key2": "2WGRjAmpoHvqTakc7pKPL7PtkHoFuH59Fk4qFUpznybmqyA8afCE3LxZrKG5zFZwcot3ZS9sTqfwkoW58Uhj7NUs",
  "key3": "4G9QCgE5x912nPjL4X1z6y6UL8yKhVrCBEasZEtcL8xi92tHBbcJqa1Xe7PfDugFrCM2VJpkiFNzHjPwLcJruHhb",
  "key4": "YGR34rjGSHwyqKAZ3dmE5jkXd1Snp1iFtPUnSY4R8CMh6U88VXRvsTKJeoxFYAHbZJ5GkyWi5FWWNgvbMhEJ2vy",
  "key5": "5pEkTbGoitZKMDSNCySPWgsBThm723x8KTzpHWtgLaoysmuKTCbDf9tfex6qcNL1tdkY1KYM6i2kkB97HK5KT24p",
  "key6": "47JAhAFNzJ1adehQu9xg3baGgM1dkW3R1ihatNyEjLU8aJnTtJvThanAx2yJLNH47mim171MiRQjNBGGEQRHFeoC",
  "key7": "5p5NuhHT2KwFaB9CKR2evCjZN9qo5Q8ZqULD93xxyrSgjy5w3eLsg3tQ9im1ntiyK57eER943XzsiBzPvkfWzJjQ",
  "key8": "24rJs8ZpxBtq1LhhSfzHw1rS6YFczT95KrFsjvscwNkYGkkg4XJmLVoQU9qF6hv2b8c8qbbbz7hKLpmiRbKvtmdf",
  "key9": "4b8zGduvuYiSDKH7fUrYZKqsse155JYUBhmuQ3o1CPnvys682spzUSoCJ8W7M7fB1onkjYFNnRuiLaLRJVCWF7wi",
  "key10": "2P3ucs84uBYJPMrcFKLDqLQuk6GHvxYJNsvXi1xnCgLRqAP56E4NizGq8unwMmf2cDBT8gdwZHQ1nocYVvnFVdJA",
  "key11": "5JXZJkriiGDcMKVY6nCED55HH9xB9T76gfsit1pcUAK7oLk3VJy9i7cYJfXUnSiKBgaTjRzFD7fRDFzRKYgeYfhh",
  "key12": "35g6QBifxEWi3g4pubgZQoFg4d4Tuxw4YhiaKYdrZ9neM92rozowidSJLcTDSLQxCN7b4rE3ECAXLiqocydvJUFv",
  "key13": "3Tax9kzpmCxiTt8kNu9VmLxLqrUk3JNkkYiwnkgA2urhyUf75yexXw9F8VrVcZPzVpPCCqDXAPyVCTfoEB3TJknR",
  "key14": "CkYt4CTctxaN8vUDaevKYQAHmvgsVAQqovUzCoPwMngp7rrgMLnps4Ya2MX6X4SHWotog7A8Sv41APuWwpVFYpC",
  "key15": "2cfEHUunHX6nBNCDBzHWva7V6ETk5CYRJz5e2bkhWAqVhPhDeRwywEMTHbt5EMf2mpzc1JkPoGwbPBJqWnmAhcU9",
  "key16": "2vJEzRr8HKGFFBbcYUkocZHDaKW1hLmUELytaYX9Rbyuph14RyXNX4dKmSAPgJ6EnMrfWLgJ2F7gTRw5ynHLEPgz",
  "key17": "5W1VqMBjkehRLEUqr31CYRFLS3LL9LoJQLXzQ4Qgd9ihQrW11c37YbeDsKe5tFkpRWJmRvAZwQR1w3RsRhKfgcCX",
  "key18": "339XscZwZ8SJ6TN38niG52eRwJy6ptPzNU2Z1Z1pVg6mkEo9CDPAF5JX9kpFaDSbBEMjc31wbuKzDWwguNXH9VRb",
  "key19": "4iEeqPGFtQE6LMcwrqTvxyQSDYnYmyh1Ythb3tAXFRHczzVWi6dVK3J8Kc5Hj3zMfpsiAjdJraVMvAzxyH1wZfvX",
  "key20": "8u5VUKC522GkiEQsGF8EF9wPRc3WeUqjjVJWk7J8EFpubDx58dA1vT39nwtbSFjKuQRLLBSG63BPXfusFb5QHqn",
  "key21": "4Vsgw9pzR8SMJqvefmyZrgBmA49tKmFMVsJVo78TpvRLv5e9oTLwF9RQzp7Ru4f6wGLrGeBv3JzfAzRy3duoKFJz",
  "key22": "aZ1ctL5ypi2Uj6BxQ4Q9KLcTWxZFp3qK6a2E29YUwqCKUDqpmMNJxzzWNve7BWYCG8QBVh5yq7EtZCuX2wT9XNX",
  "key23": "4YDczPLtBuXmazut8hjPijC2kvGYoHuxEBSRZPLiFxEHm1MtGYeQd6R3kq3BH2f659zDV9rAVQGEDVY93inn47kv",
  "key24": "2eRYEe5sfBKwCcEAXcfEapyaAXKoBRyZnCdvQS5JkQzR2aNmkiiWa4h5QnGFKdCtfLeHEpzA62yDSaDUNuNmi1EM",
  "key25": "3fXKuiqv22pf8qm7ZXHVdhZTWoBnHm5CEskXVHfDqFWc3X6n6LxmCTMMJtX6G3rEhK7Lbgqpr3bhntffNV5kAFFN"
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
