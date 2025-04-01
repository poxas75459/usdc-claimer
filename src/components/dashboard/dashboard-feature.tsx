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
    "JxKKVeVWxCHgcFYvdkZHxZP98PGgWMQugy3tGgHEu9mMVRmZaFPohvavbakCMRxGKnBfrnFDEnkwRVx4HDDoKtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jErxA2hKLCCGGqJgqtZcG1zWpRuWqgKec4Z7ZcPzwgjz6rZHTPKe2x9Xp2T3vPHASnQ6NmMHS7DHENU3nv28hg7",
  "key1": "4RMMKyy1nvKjWzSsWw1BZMmYHWh5BrJoeJuiV7GkNBnGdTrf5XJ5LfnfdW5i3q7UrG6Fv2jLyCzdbNpG8C36pjAg",
  "key2": "dTyetdkSzbixmLCcmLN4YkKtJaSJJtBGSD9dS5Av1pwWjPm4h4q1MJDr84iDJVqHMSBGSNp2XHdYuetHJT8EJAd",
  "key3": "2d9MSmJg8ugAL1LPkFAXuLN4krCTB29RN7x7VRQr9Yq2aQXCX9nhhdvnn827o5xvLXPm7Hs44JaXF2WWPUbUdMT8",
  "key4": "5uFSauJyFDbNdV4C8pAv9QtHbBuJ65yHiUg29fkT2XjHzGHeGErZJRV5skkKGdfjvR6TJp8e5p73XkWDruTNTZoB",
  "key5": "4YURLmX3Z8LJi5zNrzgGgX3MMnsHNCKx7S9CCAFMzgCgirh4xzKViyM46Fwx1eRS1TEF7MCtDBBLx3SMP5McSavW",
  "key6": "3G8evXzrVkKqvZ44FQ7ta7LbBQrPPQLbmFnv1EyYnLgFiFPc29BJ9nXupaxCv8VVPmwHWarw5sE62ytDCZvR8ZPG",
  "key7": "62mm6h7zqqDvPp6s68nsxb5WpjUUjQBYkgMufPWBUS5ypYpmKUCe56HxEsWwkwjYzH2F5iLePbHFKRWpmt4vJY3q",
  "key8": "56ZNCX188LXL9KkhvAvr2e56bcgb4Zjd58CkiV6RKZQ5Ga4CAnx5xu86L4V2Vqoxi4emTRnfm3yaQfEcjUjuHMzP",
  "key9": "2WJNs9iuwdY6s8weXBfcvStUXNKznbtFLbscaZwHfiFYdyMJG1BHn4Gn7GpVN8VQYwh1zLg3qBhL2vyipMdUP57a",
  "key10": "3wxVPwHexMm52BxDh1frpX6JAx2ogMjUiHqFNAJJkBiCtYLJKArQmHdmdU4LeLpEp48sEjLF12MigoRwqsF9NAz8",
  "key11": "5gKK4xHvPgnoJDTvgy3RPSMdCAn9kM4AFhM3WEk6SEDPTUwTtFLLAbRnsQabB5uszdrAAZqrG72cJRaay3RCrA9z",
  "key12": "5k73yr8M8kj2VSxK2M1i25hRtTW83GTM6aP8Yxfm9w1YNkz7zUf3SCCoESD4p8eFdzdKn4B3vGRcvS9ayeFWgcMg",
  "key13": "5THzTnevjmSHM9W9MYsbNkejsHv2FErT5c4B3euJwJXVGp2NpNSw3onEsxZnNuUZnp6aFUiHo3CV71Sxgze4vgpf",
  "key14": "4DJYa58irLAPUn1pztDNA7GQ79GqzYbe9tE1WqT3gfGDSNxWWYmxaQy4ATwssTP7qu7RexNjirVHcmj2PyJQbbmb",
  "key15": "2jxmGR1otvseDi2BsyGCfzGAepsPPB9BVgVDcoGrqRzjzCkpcHf7gN5JuTUbLz8w2hdecNxAKCnaPqzbfdK91pMg",
  "key16": "5Y7VUq9pYAptMhapgf3UNJmEG2u17fxysdSYopHR89QkyxbiykWkW6FQNrB8NePuDu1ntQzcAZJrUDhZcZtAVWEi",
  "key17": "3deYgxxEKvNfVkhjvXmNsq5wzQGc7vSyVmYMCj6AQn4gHhb6HAWhQ7uWgTYg5JWB5b2qhx1cepuX4KyrKeCi1ZmW",
  "key18": "39mC6xdDjXyVgNAZPEbXxJ8z219Xsjn5Kdvw1Zz7wCRoozCGw5ChxkwkN8BGS6jMuVuuHRZACEcsYzxXfxL19LkU",
  "key19": "34WFc9YQtYbUGDYibuiCc1UjiY7tZ9YDPP8QYqB3XwgNdpqC1XCB7TT4mWso9WKyCi61yq5atYrsdjgpbZp1BuwY",
  "key20": "5J1QDvkQo5eNXUrZk6QzpMRy1DZskn1XW897DqQZxSDGPwbPyvuGT5hMZf4WZXR3QtmLAUcRQ9pnCasKVXcsXvtr",
  "key21": "3h29Dy6rHs59m3PY6MKmkjwfV9JZefNYKw1w3hkNjc9cdcXQmPnT5yXYAw2b5GvoGZG5dJeu5WCPvQVTiaB6Gwha",
  "key22": "5jQQizNBh24G1Sm1F49r3uxi5A5Ra2YLxUq2GqVvavGF51xQyAkPuTLwK66MQJqb1uuWqTpTX3Hr5ZC3kFezjQkv",
  "key23": "5PGQVRVaLYKHAHTJyHhX73ihhgR1ExVA1h4v497BLQZb6EHwyZD9RCUJqnTGBMugHYHYtdTWTPGZADpZuyJRPqiK",
  "key24": "2Ts8ZFVWuM6eVqvdugLi8XC41bXLFMFGv5NWcD57fAqZRUrDyXVMy6nzue9HpNU6ffMeHtr5qxTN1etb4T714muj",
  "key25": "5eFN4UG7DR56AFdZu3bdKWikaMyaEukjQDgd6wcazUkTeVtPY2GmgHChe5JR3DLr5wqo8gasyBE4u8sx5tA6C242",
  "key26": "256nLwjhz6gCdVFHAd2PDyVGn6nfYpkmCT1coFznq91uTGZrftkrwSwGaHTBoh2o9tfTMnpZXrFSL5T6w1qR6E31",
  "key27": "2AxUuaaHHxwcPWHeg3TDTXoAfmpMthdw4W1ETHpxQMcpcy9KbXukWG1fxmmyHKgwW4rRoNm9KRu2cus5EvapEygW",
  "key28": "2MVdZGxNbdDusQta4bCQD2Yr12cqKB58HqBzVuj7K1nZN15e4Fwkr2DLEFMnZXGCDVzCVeK2F6zV9TY7LB4hqFBV"
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
