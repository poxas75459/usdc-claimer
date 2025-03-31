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
    "5a7MwotKvN4n3ni6JZ7uG61ZHw7S54XDtNsvswnBAqy7bG3vaPsrCszLW53bJCYr7u5hk7RQd6YbuBLEj3t5RZgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhXtYRcohGDqVyDG5ZzefaoJLxdeVh8TGszPGJ9FSg7yQfPwTJwHUw8xGidq1dgn3uJAgTX7uoJKUT1vAgWnKsf",
  "key1": "moSwiSx4tNyXhsziVYmT7SaZyKBm2uWoiMdTsDMGZpZdVfKdmaxuukj9ReWU2FLiVDkX259bZnX4Byn4AbFnzWm",
  "key2": "5Z1hj6tVipPhQrbLG3gy52DAd6BXw5xseG83Skmkz5L4JPGpFVLDLRMdGkR5w7mfipQFnJ9ZJbzV9MvVncv22esj",
  "key3": "3nC11HQYU45YWqv3jTeQ8vK879vfx4a24B3xURZXxXmsdpfyj1DKgEgj3HEBN84zxZvPUCK8rjCyJXmWrPfQ5MUm",
  "key4": "65ZFK6CBXueVovPE2i7q1hp2WvAmc2spCUY7icUevG9HSSRxD39XpG9AxReoSnYvYMsM5TW1qWUGh4hWevrD7SKn",
  "key5": "5mRvfh1WZKaw2yH4TpvdoTfApLSbKeFm2eiPdx1re837K2TynQLPzB2TLXLkRJf2xje5kNtUimn28AEhzE5AUCP9",
  "key6": "31w922XUJRPRPPdNxfrSmYBX2G958798JQFEecwDiBiwzsJEDuVXQwmhYSL4RBraN477c3TQ9eq7rL1bLQsQmGNv",
  "key7": "4ngp8GFXLbmL3mHqMmZNsW4LKsnE67Ez9LtUsSk5wbVWgVjRetfFLEz2BxetRivfWYnUBUMoaQN23XS65xtXwYLC",
  "key8": "EF4RdLX4LJ1MCg5nRJxQjR8g61FphnQAwYUF6cV7JmtuK4geCVCRKHT2H9pRXMgdmdmzUyAVraBMKy969MyPp5N",
  "key9": "4knCq3uRLSUfnD6p58bnUGCVNMdCo986eEUGGjrPaKF6Psqq8KxjDPMKkbGEn5z9DJFkWRhxrzEpBxM7uv58sFuX",
  "key10": "MunTKxd87dhm653SGDknXD3RrnkC3enNBdtEHsJck6RXt5HGSzTyRy1isZVnoPcQA3mZUpRpiyfnUQgm8UADFMP",
  "key11": "3mZh4yNEDW4PY5owUjurn6mtxjNsZBxHg2iSx9Eez6ZvkGBDto9AqKnCSRxrEQS65L6TeZwT6R18DjsjM7TjN15U",
  "key12": "53cRtnq3nMvHF2DAyCvzBqRB2CG265i47UG5f863SFc1zQLCyeKhNx3mN6zUfjsHuZoT4U4hAA2p4qXwANc8xkXE",
  "key13": "J3VM1bDXAcC9jhp6jP5V4uJWrRrR7DThSztgrh1XiQWNAW5BXBHSZ7SpXV4V8ffzV7DMWma5iCBc95Lbub3AEg9",
  "key14": "5RFVWDogo3JB7hGB8g2Rcy5TMg5fFYxmnyGsXv1ypMDiEqrZ6zXRfqKMLwEoCY7txx2o3rzmdPSiiiVfHPAtk3pQ",
  "key15": "4UfieLd6QqMFdsxM7iq8uEupiqLZUyFEWNSz5hDToSodNvZTJywsBpBodwGeJ6EKs6LZX4KumFrhrbfgGkv5HFJk",
  "key16": "tRZZa9Kotw9ZF7sbJf5UyY4wyMzCVjKd4EeY35TUXgzmGay8Hd1n4EdgbvzcwKrtSswSA7Evruvybjy8iLjFL2K",
  "key17": "Ga7BGkDmkuxK9WYtA4ipjwg37QBiUW3oNepRrpyVhwYEXbT8zGYaKHXcjZ6VRHvCR3dnC4279iyBkgNjSbrJcdu",
  "key18": "YW5kN7i1MKndoDwnGdr2DropJvmrNuAYwUUFtGyTVj9pn4tqmV7cU3dHbKgVeKLAKovTZ2LLTkGdVthjJPVY7bi",
  "key19": "3xvYB9sAwhPqLKgkRJ3Y45gAtBxYiNexrRY3L4LtJoyzUPkXGVXeS4iHJbxK1nT4C9NWp2NDjwGU9kueKzDocX4k",
  "key20": "2FUEqcpGaY6gkUU9YTnbykMGT7m2jk36XXEco1PoQMA7gCWSNxpANxcmvgSNV89JCsc2YdvWbHNUpuKxGAucDsEr",
  "key21": "4r1NXWNFQwErNxpFZHj5wsJD3sL1DzuQjsgunZNa6XUFJBb2dtSQyrbCK6buaiUmEFZ563TGVxjwwig1g6MrYxuS",
  "key22": "32K4hi1u3JyzV5xdPS84AHwqY7TKLUY9KxN9u7aeoNAZhP1WUULwnjCumoNRm8imyvT2je5JSxwGS995H5SUFTyP",
  "key23": "4SjjfwcksCXK5VysFJ3fK43XELFd1Kh1of9tnt9fLQpzVM5b486P3QdBhRkrycA7evY5JPTeqVSerqSDNDcok3cq",
  "key24": "3C9EeBii1LaDkn4fNaqkKbvhJ4YVJ97xJkcXD2GrP33c8dbMf6xUWHVBEiYgGkG3wrWCnMXPRbuDBL4x9xjbCFF5",
  "key25": "4E3YAvh7afjYiaokdoLodzPb7NiiH2tVTjLrZxvQ8MYstLnz63qFfjE4AK47Xqnpi4hCpqLsXgBy9XQrzYXuTZaD",
  "key26": "NvWYtvxkFLf9JGxSdRwjR8hdn5gf1n42vrDezRqCKkEe3sDkAZ8BtsnnUz8dXMNtb13avAmyTJRrc4mD7RvWo9g"
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
