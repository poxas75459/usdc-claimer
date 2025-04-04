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
    "7GGk1Vb6rYtA4hUJToMJwNkmaqkeop2RQxYBkTmHSnen6gEf3pE6EJQ94wU9Y7YJw4dfYSSoCr6R1TZ7GMSHxEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHFi7XUVmeSnmqFZyQB6ePPwL8QWyV8r8d5R8bPvAhTpfT7QjwjWFygqD22HPojNE6b324XSxxe5Y3XXCUE2Y2g",
  "key1": "5HmtikAad7AiMrQ98r3j8y3P99dVujYfXq2bdaJkjdF225qEt6woT7gyr29P59Sfa7G5MwR9v6n4vxY6A4vnnCGx",
  "key2": "4pvfdDpJ5jq7gkit9NgkEqUHz8EXq9Nx1D1WZgJWMRNZhinVnx3B4Husq64XwrUQ5m9LW4WzK1TaU7aqdM4e2re9",
  "key3": "36QGYyxUvRnxcKozicFqm8xC9xhhLdVK4f2pBsgAYtQ5pxNGTh9XU3YKcs6U9J5vpgSxBpP247y9cLASJNc68Ea5",
  "key4": "2gQKd1n2SwGErPvcvG2h5PoFNkh5tXqkZjHDBWeSHwx7a8fNiGrLcFiJ6avqzfLvLmWq71kikBBM5w2GS7ZEusfK",
  "key5": "4S6RNBrcyJPxceUEcg1fDVzp8vYmrKFcPN6BUa5iTA3CHgbGKZFAXvgfCFtALtjRkXdHABz2j86ciSJCcKpcbfwj",
  "key6": "v5QWCfvT5iN3aipxkywz1JcrLbU82TDYHjgfHAqYd4tp8hADRJnWConptTVLUjFytTFSSKNJ1ZNZg5SXvL7bMZT",
  "key7": "3aK75T2EzTiiACGWbGcxUiK2zzjQ3DRyBtz1qoe9AcAHpLHLG19Y3YUJvxVsi96uZYySU3Y3WYLxHdPqz5bpUBZU",
  "key8": "2hzYweFgmY1eXcCUiNmFXqUJ1SAzGZovVx8WLcKsF4LiZXa6jXw9KTtW6DEDwsEhjPUp8rrY3s1eX1XS1bZ5ceoK",
  "key9": "igHhy3Vb9Z8crxNdvJLhg1KSzpcstze9qsD8iVXMvmSTw6bCS1TEDnnvoN3ea8DzY1513bN8um4SM9tPgCeBKBy",
  "key10": "2C1K4UggveRYX6cjkto7FNYJKFmiFC5JYehQKJGZ1c3sReD9xyJZBHQ7X9HCKegvqoCaqmUsdcannZJQdvgLosxs",
  "key11": "5CAftAMowdhPdGemfU8VoWyBhwA6sLByDZY5v6uvXvALWuZg1YqYHY51znP2CyQENeBuPNdyxpN8GdnTvB5iqQ5C",
  "key12": "adyqqhaJ87w5tNQ4CGyVEVijAZZ54Kp575G77QidZdsNKV8kXmvxhjoKeh2jk7hvB9UfbnBGUbSm6vqPJghA8ob",
  "key13": "5G9g4NJDNS2ESVUPnmEGB1M4xkRMh5QsrYj52YniJPhigCn6cbeRsW6NTpMcLgedWcWkACahDhZAMaXZh5mne7in",
  "key14": "TEn8gnwp6re7qojGWwiueWGAyjrBXUEf8eYM6T1cZB3fWJ2CwwC92qWEGLGvYA3zhsED2zeJn5cdsWV1kk2jj2X",
  "key15": "d86PJbbBYt7uo4CEXUGsBag8Q4YWr3jL5vVANk4fvzioqVxJYGtKxrnMEBBuYneGJT1xGV5RjzcKmNArQJG66ka",
  "key16": "44KwVULZc6SggwPVru45ZdtauYEJR1vhDwxfDpMFCkbT97QpRFzcZydqrNG4c4Zy75KegiTPLXsbeaQxZjbbrYTV",
  "key17": "5qobU1YW1e9vuZoBK36uFXWPBZesBcPYXD72aEwuujYXhhYo18Q6g9iHXbpTsBAf9aW6sjpom1N7ypPkRvfhMpxr",
  "key18": "4YNJxVAxSG5Z3msPeWz5aptBzHXrCiDjq59yfjdsHgyp7JNUV1Voh2diPXBWx8PBm94xHxqNpWSkGCRtb3HDWPxr",
  "key19": "2AmC7KiVpJrYmdnF2KAAfydENb42jzpnHfyjHZMc5MJUpo8JGAqUgqs8obsE5mNAbewpix584ywFM78P5ieWnaVU",
  "key20": "kGF7sikD4ug3Vfu4QtJ1BocfEYP3SnFu1xVrcAWiKjmDZ767eXxyLwqCAUxjwGt3Tfcttc3sWtAntCSLNzF96Zp",
  "key21": "5mt11AUPsfFvxjAb679FxVWYGXqDYXbx4ptL25HWWkqJzqKStCXJdsVJKXpuPtXEoKsYoDobb9ZZLU1KeSZNxZSx",
  "key22": "4B2fQMwZKHkz19N9EU1kjBTeCMhXXAm8CcSkYGp7htGajfzGtp4ttSUiy8Bad89EuBBBUDKeZEBrDahTb8TSkFnX",
  "key23": "2ucRKYaUvFxupNiJsGD4hEqME5XzfV1ZZvEnDJY6axoAYayAnrfXhRjpi2eWkY3iHzoACxYfQnYuV8VKJBrxfMzK",
  "key24": "5iUtWTFBcEzqJwwnsfgd1qg3d8aRm9TXWK2VHc6dVZiLCBehJN9yhoct11wKFAeNpVBNQuvZonJVxka7RxoLtKmC",
  "key25": "PtWg5LfszjduzkpKVgSYJfxVPE3aVnuSrDeJZrMmXsL7aChipw41ZFm9JoPdfdBP6rpcEWX4C66taB41f5j2cL4",
  "key26": "SdoUysQotgR3oKohGhrnNqfoT4twBYq2VZtwWNeTspY6iJFxsF8neipNDq2N9RB5YifdE8vCE2zSki2VMSiBQVc",
  "key27": "MRaEAiExJUGp3zmWRJX3aDcfFLun9ujnEBSDDEjYiCZ7kmq9rVdbJLc38VnMQuhvvzWXs1xWE3iaQuKbdeKR6QD",
  "key28": "w2WQ2CTa281GkKFGFK6ygobAtAJ3xTA7iHvtS81LYUL9SnyKPxvvH6xNPEYsnw1VQTq35WdBmdgXqw1iEnEFHkm"
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
