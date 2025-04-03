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
    "61xuHzLVX5ZFJi9dHDoUL6KwUaHUxyB1YgADmdqAqLXYMDDifaxXmeWU5zXpDRAUnVU9PJTGZVEFYs7SnmkzXMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFxE6aexQnemUw5th38HMcmySVEWrPbWid6i3wzkr3PoTbV8R7R9h1S7QWyuY5vpCUqPWtofsxAaHXcKoF1a7iW",
  "key1": "5mxLv4LMnmQbm4CnvwKxMoZThq7DxJtRGoSQ4YeMEQmnmxxmEusdEcSQECnbRWhpvb4et4nwD615J6JV2dfn1RdX",
  "key2": "55gX76X3ym5ephG3N4c6kPvVpfsue1r6age7b4insjs62TbqrEEgziVAV6YDMKwrBTt9FbsWRaFk3p3EHLgqdpsJ",
  "key3": "aCAHZD6hEnHfYDXfTDwkYowatmByXkLrPTZQzc9jU26caLo2HZnHxX7pBgPbgsMFRKgXzCE6F23CFsvLoypJNJm",
  "key4": "2xZjN1DZzKAFzuRuN2TthYVAypvodqB9EisUba6uch99ZbrypSVrNwsmSKu7998JAZoiFFR1GQzCXjXoabCZJNi",
  "key5": "5jyJmBmUQoErbWQoetbEGjQWtvU2sL5roQYTTYjidbqJCjy9Bk2A4BDMUSCw3xXWSBvT7paPLaHvK4a9EuixyMX2",
  "key6": "4pzNfKKsex2q3w6jZ7fqKv5jANk77kSZ9pG58dmyXQQ1Cd558aQ9zAdKNe7KkLGVuLdpkJQ33qDT7MLiScusffe",
  "key7": "4U17w2tjPMitPxhYwH7uRfP3tsCLiKSAmXkiypq8hhoth1CPB7yhM4MWJod3a6XoXvHsBMCTJVcwdJz2TaGtr2ZJ",
  "key8": "3YqB9sQM86DXirMhfYFiJbHsXpUYdKhip58jPH7c3XdSYp76WLZwfk7FkgKHCK9V1XhvMp6HVgtZ2DehotyKaGdk",
  "key9": "3Bgw7YicaKMuZ8MBkpm6AVieEnL2tqaXXszhTakAHWt3VLqzNDvrsDQZhQxwAbbSyTiB7MGe1GzGMc2WHuEFYqF6",
  "key10": "2GjFajCgGttYcfkFJAqHPJYZuPXQSfsq2W1SKhRzxfzZK67HuskNaLLSez9faW22KJhJhWMfLCa4eUJqHmehyriH",
  "key11": "4rakUs6UzhaH8tiKn4jCv8na9tbm2uZwVWwvGo9tt5SjBxzQ85Fv1GQvTpBRAFWundb4zNpmpAJqbvMpzbPpSmks",
  "key12": "2qs2PnKaHg9DLjaPUvwQQxQYVoGUCEonWsJN2EtUv1aAXy2Jw3sYPTrjkrnrR8NqTCNq79ThHmzhWCRkFWYaQREY",
  "key13": "5FS12aev61kXEDjnCvjjRFpuWFJLJKHjLEFLWhSFMZq2LQ68qan3FqYxDwDDYQrKuigjwZ9GrPYTJSdsazSmhke1",
  "key14": "2DGohpMKcfKxaQtVuRCvVW7e3VxSuKzq4RGJqn1m2CJMps19ugJFnbXq8Fcozxbx99Gz5oFxHUFVAa8MpEExGe8A",
  "key15": "4mknhDoh1f3j8Uz58MZFWkp4MwMnPMN8eUpL6ekrqDs9HV9BiJyNp6pBurDoU4yuDbirjYKTstPj8of1KG6oXwFK",
  "key16": "5dr2TuSdt7GjaNj2JW5GrcjCNjxbvfpWtG4ybCUY6bjHJpevJ8SQeaD9P2bu3sQunZ1H4RHtNGcLErb8GyLz1iXU",
  "key17": "34wRytxuvYB8RnjKrQjdBsDWCZDPnYPp4KjgEi3xYLuot5wetsvrqCpvyDnGM6ug3nfpqBsvaa18E9SeRAGKbBFQ",
  "key18": "4oaVE56ax3hvSKTyuqkJCzVzjYW8wjao8trv3zY4csVCnn4LWaSdA5SPH6jVRBVqqFbb8RvrpBQttc3s4ukQabvm",
  "key19": "4CZM3gEq6uaCfMHTDMrCzgKaPzUBKEtu8fugZsFo32rHAYtfW4TUSCwB4XE8vDh62fJ1bHCtr5BTSkMvzduWQq9Y",
  "key20": "4oE1w6Jow4tf2poK1D2KXJ27mrxoV3DGWhJVXJcHgqwEZzRAeZFBNxFT8itQ5teMWKBaUvvTvpdPSg7eUgdCBLrs",
  "key21": "4NMLp9wfkz7RhGe6GxG7jFKwwWaf6XKyj4TTXoRpjdZgRC4dY1BGU3iBN3WZHuwoWSybava44smwGKPjXyRrN2qg",
  "key22": "4yGyTdrfsgrnNosWeCEpgRQ5YcHd9wKR3PK57wJ9WJAFv9opTFQuDJxznvX49ZoG98DcrC8UXeHf5H76N5QmZA4D",
  "key23": "5Ktwx6wwfXxc4TbjSDZeDvAWpHyCChx38gb283kFHKJJJqcju9haN9QNJC14WYQWYRDocomPAHewnuVp2K9dcKGt",
  "key24": "2ULdXHuu8v7UZwDfsktFj95bRJhUu51UKW9PF7Pmiwse88CLEHZDxQkAXGqwmnqAy1kSHMrj86Nc7B1Z2aVaQPm9",
  "key25": "5Zzyf9g26V2WF4dsUF2g5dnNVLRDKjsNrMJFocvrFKzH5BBXvuYfGGMfQcWgVDVgczr4kdeBY8Rncxf1a22XMHBr",
  "key26": "5pnNgezD3wuKGfhesERuxSRaGidPtNpscaiSkC17mdbkwqcoo6u3gBrooMxkGxDMPebp3hrvrnEEVWhqbYz6dR4N",
  "key27": "4MAhMu2FUiFySsYhQmZHRdUqnTp5pqam7XDfTHbqh5RrcjP3t9yjvTpqLQTfF94ydMSrNUyQbK7Q6CYrJtYzXV6M",
  "key28": "2GxGBDo6iKwfXBZerED2TA1MqyvyEgzrhBENSK1rKCRmnudrZRF9Q3AriZTJVhZT7muQAGwm6Pc2j7T7K1B5UhVz",
  "key29": "5TAdL2JK5Kbd1DPcAsPRVYfEvBVaSYWUeEbuPiafPfAc6QXsBbdYxcD7pk9NUdMXqQmraxvZ8jy28WY8xet4Unwd",
  "key30": "5hTQtLaK7v25rv4VBLRSw2TJA6aPNEDC4LRXfqFTvvRkukZshY8tXbwYVZoaCySFySbS1NTznpwcuuAdf7cDZdEe",
  "key31": "3GotMLGPCFsioQiZPVVqvq2mCLo9xNMbxZ27zmpmtt5FumTzYLi6DZmX2axAjfZHGi3VGPMnss3Bsa9qu7wffaM9",
  "key32": "4cN35gUggokftxr7SmWNiuDVoCudimVg667TZTedSZjXHoLBkKxPsEcKpFeeWpqnfzYfYfEyfPzKCcjBu9N1wRaq",
  "key33": "2Qdw5Kc6uJMtW8mJkdSmb7i4skQezi3vWqYvCQGzMeiUXNc4b5xmLm3Vfiy9gjXdSKg9SkUgnVDRm3e5rWEBSkG5"
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
