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
    "4xX6jpoQe7qpFYKgwbBjhtfd45wLDvs2RHQHNXDompaUvsyyUg1ckmQaiWw4nSZpkShe2ZyzQ66Jrm2Y7vaCm37f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBSK2Puk3UUPj2sCoUSMWq6XZRdtUQdLMfuXSggiDZ8hXzz8yzf4z7pYPmvWqKsEKdLLhQ82Z6k5JC1pfbVcedb",
  "key1": "3ZZzzUydvPQJEYJakt4XRvP9AZcRLeMbVZi9H9xr7BsaW5E9rqLUgtfWdobY4KhXag8f2ray9QcZEBA6gFU2H3GU",
  "key2": "4EEZBybtXcGcS28c4qEaRsx2j9TVUX9dAgBHCbEMawB3i14ivvSX2EDjTaULYVYXH9x4RPzHheDk4jnKPwVXHacA",
  "key3": "5KasKJQDr8GBwxcEGpxH1i3N23gwkCTereqUVRjmpwGggHDXnWjqwq5DXA298GacjYwtHNZaGq2YWpen95PzJVQA",
  "key4": "4LvTRV1znFVu7U56DTRhmgAKQyeLohbV7xHJsiQwVVFuu6yyhs8aHrbHWewiDRYUjFY7ycu98WWjxyvnrrN7yyTj",
  "key5": "3DWfDKgGnERC5mmddJ2rXrq29DCTsz7VgfiS1PTLsVGCqxMCrGU6WYNi2nRCNgEMKERbyv52vEVWwtePZ1cZKn9H",
  "key6": "5JmJn4Cqi72EjYXrogX19ssmp6uUYud9ydX4T6r2fPCPV6Rm4xNp89zASWfLLhN3qtcn6i2WE32v6HVbXNzueHAG",
  "key7": "3ySDueWKU4A7Z6JtzhYatUmARMD4V3FMgdQmgHRYVwa3C8dppWiCkAFxJ9C4iMQenQ6QMS6ejujeX55aBmF8TmZ7",
  "key8": "5aCZDhEdv3SSpDM2wrHKCDvBNig4C4KAVrL8grizJt5s8BbcGWuUHVnGDvAJKgShJzs8U4eLXtp1fEYfcX7PsWJX",
  "key9": "4DBUzrofDJNhfe2VKkxH7ishQUZGJZRes7SaUQK3DzPSkcBe5JzgK5FtsYYXcapMtfUv93a4TNUakgu63641M8K7",
  "key10": "64JkbngTjHquMskBb1V87vB38mUC2pZ2koG4yPM59pYntCaLUW2Re4hvnZY9ccNPt4aKpQ5MGoT9DxG441UK1HBW",
  "key11": "2TBQGZ8uZhDRtJn7c69tSam9QN5YPPgoqeyJpj1aAMWeKZdHDnvcMRzgHuhydzTJa7NNMqJUq6WwVUZEJ7yUAvUz",
  "key12": "3VAqtBDGgC2yzhjmQA38GmDgyHCHcr3JmW3yF6yi8ua7soiC75rJR9HUaC2PyR8ewkpXgPJtNL4Rhgt2ELf8L6nj",
  "key13": "2sBMqA7E2HNzdT3Wsu3jHqMaoi9BAxzPjFh1uUpeotduJ1z3PW9zfffvSzmvFozdUjocS5sSFUWAxcoFWgpXB1ei",
  "key14": "63RWfq76vNhwcetEn7txfzDHcYm1NKgmiu8odGRZYm3Rv8ZaQKsCQJ96x4wjzDezXXaVjdrr6NjnW1PoXkGnPAaK",
  "key15": "4TMvbjUQqXbWGeP1oDykRvsnjZk5ABwWACwtr39ydatZzYHYRRqBEtwv7PtBmXejCTqZpgiz19P3o1JSaTSmxfPj",
  "key16": "2Puo1ADRoyvBeusJPaBSnH4parkYrfHvrcw87HKpCYHnJL1sUNyZMNbSxo8URsv1QQRc8xgRDYYjQASaZAttDDDq",
  "key17": "34EWBWvotxFPPrt5RCC9LXfpoD8mXGLA7BMhJqufC1vS4nU4yunvtUqYQwxLTDkVTNGLwkzES36xguS7ntAL6xtB",
  "key18": "4CAAmnujsyFM3ATSSdnwLu4nk8LDqwHTXUwvNa542VwZF949KD4wDqkL624k6b36aWBsbuDUpWGTeHoBTBHC639M",
  "key19": "3uCCiS1Tms7GLTQpzEhLCNnQADevA8h6LdZXyaspi8H1N5GJtfjAn7xtAWDQE1wkXMaoLnagY5znYWA7x6zsyJaC",
  "key20": "617eVPZVpaP1u9ih8MjTKR9W7qgXgV5FbSQrBMEW7xoM9nYWuTPwAKPQGuYVyNGcm656iFBtqyjAnZxpk6SigEFt",
  "key21": "37GVFK28qnWzvEfkkrxri3smJKoB6EqHfbgW8vCW5c3Jm8RYoxZantsDGYnGg32B8cqVrKFDFdbchDqBN1jCi5cN",
  "key22": "5HQHw4vfbkkDH5einqXe7hpGuPSK6ntqEoVEhVfgtFPs8NHouJ9aRumLYurEyh1x5DKyiEhBSXu3bLwuKYN88pNH",
  "key23": "5G6uEhA8Pq3vsi138vr1xjZFbEqbHffEtQEMGrn7eUhmqPWpHkd8G4TxqjcHKpmDMxCNt1f45z7AkFf1HUPiJMFR",
  "key24": "X1hsRa6wYKooPjdDEizb61qnU9bWGiV9B8Hpne2pXUSE6XW8LBeDVirwuJ9Nb7oTPb3zoirmCtDwGWqGpH3mBSR",
  "key25": "39Jw6c4V3gE2fz7cWPcTL6afjCeHZsmw8fRJv1RzP79ubK3hmtwpwe7npqHmkmR9BwH3Pz2Z8DgdTwNo7LuPmYFE",
  "key26": "uS2xgvJ3ujZiYXLR3eq8HQjPd5VRAvDU8V52en3CwmyEACQYAJpPXfcRGUwGCbw1TSckKRHsNAE63CMaeiZ3S77",
  "key27": "uYTSSok6BVkPYWY7bUeniMhjBMm1o2YbUhcMtN55BnaStE1cfURyroHHRVZxmUofisoYhUhNh2kw7KuR37f1nqK",
  "key28": "4x8TNjCmLh3njqzguum3WHSJWt7Z3VRpFXmUXK8tKkissAz8Wb2NC2kYKHyPy2jGzDosRZM9df7CgbTEFUZJL4xJ"
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
