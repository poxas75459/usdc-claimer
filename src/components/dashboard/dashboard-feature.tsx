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
    "4i6AqpQk33sXVh1zP7BAodP8g2vadW582sSgawKdS5Cn8jkLZG8gw4t75kmFbSysW3Dj18y8Q5NCNZ92MR2VikCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8GFnm4nJZzB6GNZKNnHF6RtFzWZuDdX4C8Gg574giJaMk1hF74hGs1nCM7VShEKUb55ueuBr2SGoZFy8EGKfwq",
  "key1": "5oijSVke7qtkXx7XWdhqt9KrpYB15oTdQNdqGzC5vXLHVsxujJJJCTePhwyBYrsryY9hRcd1cQAPA1GpS9Gyjbu4",
  "key2": "wJX4eXaCd3zvU5WvdSTW6Q4aJtQrS1x6UDzSJdJFiMYcL7MRuMb7McSMUzAwLWWnjJTj84L8FAgJHnP2a3sRyT2",
  "key3": "YxkkG7X1xHpZiBkEpihRx2QiDZ6Kpvr4GXfNQ4MktvTZWZmDZLcJ3nrLvUjdA5c4mgNR7QGus6ZYWVekvEK6CtQ",
  "key4": "5HaY2zo6UmVnakZgbd5QyCj41nzzrVFtnMEjgvFv9DdeB63fxHcupw1grLLxmZktwtFECLnaHbZduq3cwxhDUm1x",
  "key5": "2ZWwKMz3v6GnNFLtbvq4QvkPNhRtD6UEzno73iCWoNiubzZqMHhiSQ9HQohmFHNPsdUTGLx5rsXUd7HNSxtdL475",
  "key6": "2SsDREooKQpA6JHiPyDLMCC3eqJiMwmPBkr65cAk51c8YPFcMFUtNbyJ4E1bKYELFT9hQN2J3EYa57mHMXbYJQzx",
  "key7": "4x26fPSXc8BNcrgj49WsUHPrUaLvDKry37iEN6sUACdRhw1dS6YMDfavpDs9fNrfb9gGn5n4RMp9gGiy3Vyc1gkD",
  "key8": "2W6qJsCWYirxaTmUwZaadgUfd1q3ZrM2v4QsCyPes46SnsmpdaZU9YJDx4ogx1KsPZUgbLLxNin2oLYtxzqmkFTR",
  "key9": "4Wx4DVzweRC5qEcQWN4cu9m6F2J8wTX2pR4iY9PHJqc68PGi8U4kZTM81tTsatanwicMv8va1py2QhUMJhsaHgjk",
  "key10": "4ButATXvvUkNDXkMeX1mpoA3jsz9PfymFneEM3TUqzYmZfFCf81i3WwFqT7GSHnunWu2oYXextpn4HFELfxWhQsk",
  "key11": "2jJ3LexRjVR4aadBNgiav5KbUkNv4Mtfohzk8E2sYLpsYXkWfct5wETcUP6xiCrSqq3MQnZ8hrAX4ae9k3ADBq3P",
  "key12": "2MGPhXJ6d1HEMbeuZWpiRhyynYGnpRc5DieuVx4aqA1ixa4xKK3StdCDcD24wTSuEbheuPzCNSVnhN39CoPczED2",
  "key13": "Xb4nNCwNmTVXs7GUAMZH4mUrbbvXWgbdhq5TYArafQ5oK25pdaVChqNjW2ZgHAcUFVuwgcTBT28DtZ7hJCG6ksi",
  "key14": "3n5L5rn54m8Y61sGZaianx9FY8Zz7UctyfshqYZnSKVJiRrXs9A1EJZiuJE8zfrCZzKr2mJBpswkFojy79PT3mA5",
  "key15": "5m3oHfKNZpvWhwLxHBoAekDgegGAP9ZHFP7EG7cRqumPjYRM2NXB8RByXbegiNv36Ehjz5aLvnEjFf6BiVkVR8Nc",
  "key16": "48UYS7Y5RButniNwqY6b65a7QF2mjN22418uG3vvc3abPjQ8dju9z4ZNQTW7HUgJvwVXjwm9N7VQ8268eJ5gyhiA",
  "key17": "2jHwix49kAthk9G6yce68iJqGi7Znc9u9X7yf9k4ra99FyVLfKE4wLJNgd2gp4pq3iZ5kcsY23WAGmb9s2KqPqD3",
  "key18": "5ydBGSMb5Z6DdhZNwK3FkAZofTFVrLjXa5pp2MhSSfbzh5KDfamuHmJCmXXA1rDoh4ZqPcSyKGj8UV8Ld5C9qkS4",
  "key19": "5Eq3YbXQp39RVmDy3foDUz7Mh3TMJfnNhc76uXZsQoXqKQ2mQnnwZpEsAzi8sMCnypED9xV4VwWbGDgDRSfXMRZu",
  "key20": "2w24Jf1FNZwxtRw3XmaYyyuXSXZ1zwMGbuKBzAVWykAMZYoJbXBA5oBmRui6T6Fqf672KtU5enNhxMgPyAgvDksX",
  "key21": "37nKZwgNb83CQh1MhvDVBEEtVBwTj6VvZn2BJCxHfJLkZ2VvUpk2aFctyD4Vh4cFFypkXFkdKgznHu8r7gsMfuFh",
  "key22": "5rTHLLK41QC1C3bpiyyYiXiioygz847chTzGVEzBEQ8fK1DFTM5PNfHqb3F2zB4y8rp17UrTwdpsqf2d6zMv5vA7",
  "key23": "3x6K2uJ1aBVkUekDdvLrYd9XLJVrfG8oYYpPhVhXP5Bo96HouX4qCVCmmkVCe31B7fKwwVxJLAsid3E7jPZmYy2k",
  "key24": "5EqACkfzyAan68yCMHFfJc1YGtmARs3y8foqZjXhkF8kA1H1ycCjHgWphMEZq9YgjoEFoUr9LCqFZmGss2Cf1gFw",
  "key25": "5mjCzzGfVvXEAtXDSKKsGFoWhiwKFtbgVhu3tpfthxi1mhKxSKNJWvQpX1SC8noL17NJP9Gp2eJnrZMwtAvBgC65",
  "key26": "5FqPVhJ33W5qrjoXK2q3gVfhJpaTN1ahgQTQnWXhbko8j6WSoDkKxM2hdS6nprQLLbqvGeiZTeLD2ibSQo9PLDfs",
  "key27": "4WopgrcAToHcz6XmXcu6R8D4ReYFXRGsApruPvh7WNDKcTWJ4FjpFKKzo8hPSTFxoJx95jAHkgGo8sZoVRL4BYaM",
  "key28": "2kW39wSJqgxYeFFTFF3gYLmwNpHS8yB77YyG3K1UYd5DsjbGn5UkNMPf3U5gLBDpGycSGChwrJfddpods582eEid",
  "key29": "Sn6ujF77pqjAbMEsC2NQb1DAQnGkSCEBncb7buypUBo4AmK4d8UidJVN8n5ybVef2j6Bc2MxaMRXc6j9pLdwpaM",
  "key30": "5cMrcXGwRAZCwvbRFWKvEQdzpziLpUYuvovQ5FvfoLe98Jw2W4RQHZYrrV93XBXaEekfzBzH8rDcDpXbCcQ7XNfi",
  "key31": "4AocwkJxbJMHkd5VbnM3CH3pkSna5c3pQhNjvgf7MNHfVg2CEdx1JmE5zmv795PF7ZPJroiUXyYWCh24o6MV9cSt",
  "key32": "92Avkh5zT9RyTckCzG9ndayvbHCrhknEUCtvkpXGoDVNe1xLJe69N9zo7rqrg3itHgLctJnMJcSbYm89i1nVrbt",
  "key33": "3TcBLdrFzospfiieYjGxxxMSkLWShHTZuprRhPoQsnZi9qCYPvExx87ZQHwhKDGdLyZhn8uD6ethzjN3F8PoLQgz",
  "key34": "3wDseQu6asKRLwkLTnGyFeU3GhMLiTNaqEqFgUZ4b13sbWAEhaZw29nbAbFWXhVdKHUENEAnwFWeSLVqVijmwF7u",
  "key35": "5LGdnEMKAKohGXNgsVRLbZfqHum12jUsL8EZRu8o4UjyT7K8WqWo5AWjPsgzdwChjx36o4MPKxUBQyucFu1KAmNS",
  "key36": "21nfNjPSGCx57BHtw5TCtke1fqXWdjnbKVMj6vdQvk1DqTag27EhLD1m55AohJvmQAsqAQtybnUkBTR8CqQVdHw7",
  "key37": "2bHdV9xUFtRavF3uWb2y8w95kX4BaVe12QW2Nw6q8CKekukrFvFsUWiiXmvnh4jof6jrcscBmE8xJUdnZgkwtrH3"
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
