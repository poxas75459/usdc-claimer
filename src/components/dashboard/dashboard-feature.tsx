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
    "35HUCnTDyQ9UAAUqEZvqHPYCZ3ut1aTTs4M1xLPKyjRfrfRonbvjf2ggfnAtNP2TgMTCyTt5sdshHJeWcAXmx6aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhXMCUaH8fn3FJobnRVsJpMW8s8HbgZngNo1AnRXV13hPTDZHyhiKe962ZKqjjy1qPmQcLVvUmroPddkV4UfTvV",
  "key1": "4pZqcjPWJ3X42Ay3sBQZ4bYyrqm64JYN7XJioG8z7wZeNBxBiEdsrnYFyKoLCYqQJHc7f3C9BBWVUQngCWUPZ7qA",
  "key2": "HqaeqvNk581Nz3NDnvefu8wNZzUFrBvSM8r5GSCD84XcdhYRVssxg65JjATvfZjj4kwRShMxJjmSCYctc8nTPfs",
  "key3": "5fimd8yXrY6iLXgVQSSSq9jawZp2sJ3wjUZyESqHDzMJueFZfJeVkv6B91CF7GRnYR9diHAi4cEgAcRonMRdGyBV",
  "key4": "2r6AgajmCiettZNnAtSCGkuuegWkWwFZhMmdZQJzDrVd4MmKJhPnukMsymZn9GJwQAKUvKS5QDSyfbNt3dyk98Vs",
  "key5": "gvqKyBbXdPeY8wCR9ifYs2gn6Jri7cW9TD2hXNxTjBc5QcdzM4fFoQv4Wqj5XokrWrNoxiStKfsA2TarrvaKQEN",
  "key6": "tKvyZeS7nhg4NZV7i9GZRqMbx4Z4T7JhoERfxRrU6ErVf7962qzo7TGacHoCM5JVuAX8VABjnM9EdahY2os7mnU",
  "key7": "2xYrXvsbXViuhH2BcMcdnLvYPEkishx2ac6zUCEJXzbREZ2qNDQ8jrsMq5iXzxuDdsoJBfVJvBWRcJpo8isWrESi",
  "key8": "5YahkWEkxDEvPUK7sPY9y4QThQbabZB2qX5zQFfp6Fph7Jp31yxZWEUem2mioaHDWTmLHnt9gH3Ab15FfgG5mggB",
  "key9": "7gFG9mWB65pCVY9nCG12j46znGVEz69STktsw18dshu3TUgxkdwJoGWBoGHFppD8D852z28dxMiACS1HAZ4A8ud",
  "key10": "2noSLFGMmjeLe8MNvET4nKo8AxgiKdqYdTUwsmkXi1s9HAAEPbbUX1dU7MyRPHeEJerLPsbBwqU3WeFeH7GxFz3K",
  "key11": "2wm37bwWKuCfymZwpuYU4fowLkdSf8HJWzSUbudGz9rYGWd3digmYhFU9HMqqVHY5Db2Zack5VWxckRoezktVzPN",
  "key12": "2RFBwH5DMpyTKuFYXqipUv1uaJQcJjx8GzrcbYnxcJXqY46DUm1qotWfkdFm1g9WTLM8Zm4VECKVCU4x3gKdP8Jh",
  "key13": "4GLR5koEL3LN1aQfg64DnBEv7MKityzZP2s1wCBVX8YYcLuiUwhmq6xdx7rz914gccC5DXNH22pJ5po5n8V8NZRa",
  "key14": "29WDD9NZXLGMLrWF1UcU5Mo59kezhLjvW59xqhH3kfnR44Aoxw6kiBLxva6eRwi3Nj5UkysqeqDKqnCvSh6zG7KF",
  "key15": "47NVCMfc82ovr9wsgxBYt6aZoGgwkBuTwy9L18ZC7dghjJaY9wc5GnpSfgTdTuJUfiZvpdoZWzCjfonHmZHofQEy",
  "key16": "4uL14bemt7CKAtXASdXMS6ik8jT1qcKM5Pv4e9oPgoGD9769GqyDzH6JC88pqHPRRq4fv9WDLMoYcD6kii4tEZm5",
  "key17": "5D5FdpkTJry2BaAtMc8JoZyiBoUGbLq9oUtsXTeVjinGYC5Yn59kUroJySx4L88ox3QhkbfJkLhVH63A8ZeWhRxY",
  "key18": "3oybhahRxz4hQbGETwkSgeQo4TSaVKdRKMFBFUo1L3TDX5ixzTKdvsxZ1nvQSbr7tvmJaTbQpC1Z2V9afTBGAxde",
  "key19": "5DtjS1HWxoMcpn1Ha264H3jE1vHenuNrUN6CqBYMVkXEijWvbXjE98NfyWcae9hzEvcDnwFMqjpQ2i9MNrkatMHz",
  "key20": "gCqfHJEWj58JQd2uFrV5FQRBcq3HQEuGAsyXYKW5XXboruuE22PFXojtzXwQsdKbfMFGq5FDEHaVMZ35NCwbEcH",
  "key21": "2WLjDS6eUYMvef2g7d3GrwDFqQrtuAFDGFBUZ9NpvU2AmrAgDRQA6wUU2Aendd4fu7vETCfy88ZdHGgGmWirYK6C",
  "key22": "4VREQW4zHvexcNx2oQVhx5nCSQdNspv8Eec34PJjiohTs6awoXPaNoJakKVrJahrKRjcSuvdbP7KBkzhmNdJs6nF",
  "key23": "41jGJcwGNvhFZAWMPHnnUj8Jcout5MkfEwXW2vkzZUcxdan2Axvs5pvbqeDxG5P1VG6LkbUphQzKZFeMGGdq86xw",
  "key24": "4UmFabJmveH1Q3BMmygSNwsDg2scMyczQiQTjHJC6pb2RfLqDA6paR3MUisRRAnBizdPWkLqtwUKCDo47sW7Y4ur",
  "key25": "3poDuu2UXR29ZWHbTEKpUSRykFLzkS5E2dxyjrXokiwYDaaZez12TS8fMtV21Ze3ShGaZ23sUrX9B2jeqsRGpPx6",
  "key26": "3geXHYiGhjSiaQWF2rEHwHpWh98vLd8f6ezFxhqYUzT3rqTiBKNyTXTSGACVipB7YgZG7rxsyxamkrZrEhgcbTQu",
  "key27": "5NgLtNaFaV3R8YavqTjHHstKPNrWZALYLqrvtXojRHqnaREhR1SciDnLGweDEtywb7Kf9XWceATuYF6ttE591GGK",
  "key28": "43KccYqjSCvr3HH3un8tiKMDGmruao31fqhouokLSX1kRrp9SMCYKHib4rahggjD1xhZtpYwvzNSqS9GnaaMSDVx",
  "key29": "3C2ZK3kCXQAGFkqowfrHR8bHZeishxmtDGkCdePuBEFfLiXfWVNXWkoDXZKx22XQtF2HPUdXZ9zRjXS8dDh1Ako1",
  "key30": "s2eLTSs6u56ef1LzQzrcuYofRUGHrcekEC6MrXbm8K7RvYhcqk3jEt26bGPbatS34dnJv1R13335SAdgkapHTmq",
  "key31": "2csEF3FAnxb3Wx7gUCMVnN53tVsHUTCX6zSM18QbTSPs9h1WrJyYVq1zprWNqFfsDz1H1g9gZkmRWbRBjgm4PDGp"
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
