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
    "2CfsY7swZ9rEQL2aC9cnxNWUDqeFfjsVudibUBP3JkrTTKkiRtyc7EHdJPsicLVgbBS587GqS1StygmRkeGqS5Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRjfCU3fKGhe8HQWh6DvyCaYS7xF6HUxwDSKkdANomQgLWMx9VptWxMZLLYLB7gZfEA5nHftrrbVMDWgXgRhFj3",
  "key1": "xg3kJ7M5z1Xc1VzMLBPzQSNeGZekedf3CBm3Hi7bpU8k3iCTxZHrHQ8ni1f9p2XVTSqADyjYgem4fa2vc52J4z4",
  "key2": "3K8k9cKA4n3o3bM8ACWwYprjaKqhJFY9okydATtMSc2TcfF2Tj5mWHa9MDMX4Xy6huo4LX1DN9S9ptoZ1kVXin8R",
  "key3": "5NJFhKxcA5mv8CA5eWwZ49Zy5cgnzUNkAjr4Hr4DcYJCmuTaG4ReTUFsfCZPPE6Mvbw7AvXMHzcb81ajVKCBkPvk",
  "key4": "39nD1tCTRKcRUfZeX5oNjy81gXidbRTHr8xiqjnYSGHitnNZFjXs93TkFfKmH3rHgiNTxWbEJ1Fxf29TjqQD7HTD",
  "key5": "6nqdwCAripJeb8peiYpuZBsak6kUSoC3ZvZwFGRtRkeYQnicUbdRqZTUDyKWZmj4TPfEA3AT3gS6X5XJRPCE9Ap",
  "key6": "3AGqAzSK36bGxxMncpaeKMoUYJRPuc9A7xoaEAdUJKKnDigBZanb7hTU2dYwkc79XqPmyCF7uqeXuPGjLTW3BegH",
  "key7": "j4btHFRNGpvp75Th9k1iDgh1AAMCQXyEHzNUzBo9bcjrnEYVpLxAc8HMWgpZTsZ3xhUstLHKqKrFa94E69t3myw",
  "key8": "2j3Pik64x4sdK9Lq1kRLpXmLEru3DxtQBMz6zrVn2m4Wx3SxotEUmrLsbpepaSE2TXVeUQgU6GVfVdpQQKpYtAHg",
  "key9": "2VzBCEvUPP4NagCJoNvBrDRcLVvkXSzhxqQoxP4EWn9L8f1b6JCx81bnfGEMkeTgYuk2P8wY9ZzQavAD3pgaaA5X",
  "key10": "5fw5JPVu5wGesHo9kL7oditvc9Sb7PTRYQyftUUjgcuRmeB5rozpDkAN7eyQQowNTc6zJbpjQxkf1GnwVm3UwaAv",
  "key11": "3AwiPwr1tRJKg4w6TNCJi6pBXaucet3KaxdwHSnWYraDzgVA3iKBuCB1ajQkh24FXfQFx68QLHCjVwrhghokgFmi",
  "key12": "5KxoWGy8yKbGKjwVW2tATCUBMH6uKBVtbhMczCAF5TSiB2bto9oNPKYk2vwaEYzreAiPW58ePz5b9ouSciRyaCUk",
  "key13": "328edvQdJp9ByWHGcZGsnBw38CMmiBNcWq6e4pEUcNCKHwPUTqRUdxrfcrGEmAUbKruG7fJmmpzwrSf2K8LnSCf3",
  "key14": "ayJ86SaTogYBSYXRaLgVWBNkbHbX57DvGLtCVgcYFxDXX7soBmvqaGQUKh8Ad7JG6M7DHgZDcqaxSndiBjQkwk4",
  "key15": "2KaXWZnzvGJYCM5DmBLuB9HGQiXQEPSyAFL13vkZB4XifiH3WkZk7P8GgQKGtpoQATiEDCj48qZhuJkwWV2pHeiQ",
  "key16": "5Zv4JcrJNqVZXzHjendJYD5XznuMXQfUf6UDj3MdMSGugGovZpSmgThuGoeA1XSHrmfMWQzwXodkkavJy7qMP1RB",
  "key17": "5j3QHs9MdxDbaWQKiUftjNK3hjKAjY4uPMToxNyR5zbxtDHneFG2xogCq8tErUbhMJivQHpdcEd9eka3qYskLb2P",
  "key18": "2QtqCWd3dYpxWLj69tvDsmPhDUpBqp6oYb6NFW53TDUZ4rFipV3ypmD3aNjzEQhSnmYFCyb6qsYc3gQFDz2WrEZ8",
  "key19": "56hy1PYotEx6XZAYFe1YCRZMmG3jWRsmgb2upkfXcRxna8a4UTFDdQ2bjbmTXjANtYm8EEYKp9JPzFoT4gxd7J26",
  "key20": "FzfwZmEV8ZFvkiraP6ZeT3HwhB5eFKPYdVfMJspdXuzPnWGwW74N3aNGcnqrEkMvBKjwtnQzYcYW55oKoMzfX9a",
  "key21": "29xzZPcdufpsu7j26fPYWZ1R6hPZdgPmJpvuQMu73GsXEyuCfBzt4CT97hbBhT1DeVY4z4PJJE4fkCqNRp79mAY5",
  "key22": "46KUQFP6tBEmP9gWDb9URGsahtLUqLd1nS6cE3o5YxBiTHMMwLcbKXZLJujWnvQHsr8z2r9PdCXS7twHbPSSo5xo",
  "key23": "4C8eyavU1gswhwHYVN7x71BH5mTSRWdUHEAT6zL9yFAe3Z8vRLX9YCz4to6fyzTYyPjA8MxeS4248SLqLtVL3Zws",
  "key24": "3Ni9BngqW8quFRq5seyensG7oFydbqfVUmh2B6HNTpPcd9B99oegZSKMdt3zT9yQ1mCz8u34bkigZwDUUnCQxyzs",
  "key25": "4C8rCfhz25EN6mTx2nkbpxVb7rVQdND4N6WTkFwwKCtkmpEBdztiVvJskW3dcaomVQUYTjwM5ZQh56MkHwnTCBUH",
  "key26": "2hScNLAQv2SVJhxTxBmzKZcpd3v11GdWJgWrAB219QjaaW63Sn26AUCayBuoxZ38e7imz6Sw4779KnDknLpcnWKY",
  "key27": "3J1D6wPrvBTVfkqQrxaraVjEn6dsA7wbG7CF6Jo63WLgMeYb2ccHq7SuPDg8SRGGUmsfzz1cZs7G2SZ1ysPKe1mK",
  "key28": "4uce6EeYNfY3UCNvVaFpXMyXAHKPt6c4TxineyWbb63F7ogiFyZbJrxH412QzDzEC7cySqHAWgxwzkKQwu4xpndF",
  "key29": "27qSZGBdA8ezCb5cc8P8McByP69YDHQDVHjTifyCwVMdAaWyo1L3SbUAPBmWo4WmQiQjQvWsv84KCYsngjFpP4Pm",
  "key30": "3Hq95VDiYUchsSoJyZgYh56yK5mBNySwiTJJKhir6KETsSfr8gfALsckQtB46dY6idPchrdTTBj3LMgKYXaNvHtt",
  "key31": "3jGNRj8aboeu8RL5Yif4ijxDJM4qLUaTj33f31Pf8goEm2BfUJKUyY776msWodD8LfEgexdEE8ifdVhQFiesS1hZ",
  "key32": "2PsCwdeJ4mMjsFoFi7fbDzyMae3WLw5XWWY5Lt6FdyrghjQhXQouYQWhsA8oDeis7DuUfDB4myaBWohG88fwntvx",
  "key33": "2HKSFZ1WJ8vZmQGqSYZ9qT7fNdntxCcgjeYAfP3EPSFbcXcj7bdBwCLZoY91x8KoUHEoXzd3RhvTwBUJTENUaauN",
  "key34": "57qQVqZ28bvWPYCM72nRhVXDnMUwfkSA1GZBPrZhH8Mrz1oCVCrJHcX1j2n945AWxweKDmp9rgocHMMJf6DiGUKj",
  "key35": "4kYk4pfQ6R8TJtZkbPmF8EkvnDKwo8a1DCzuSwwCtryMezFT8iYSU8mFBuKtNpuUinxmeLyX6BmMfaCzbjpYbYLX",
  "key36": "V5vjhjf9fewgA6N3K5ykSi7qjxjrb17dJa5B53gvBrGBBt13R2uuqnGscF6VjPqZ8sQdBfiuNa2xmXn4YSS1uFE",
  "key37": "45ELLex78JxfdVf1sBzKaxzj7sqFgLnJhRt7Kr2MH2Yf1aSMeAQnj4YZdQ6kvB5gEY5LP2bNA6SNtrnE5rP9uhCh",
  "key38": "4RVZMVhEEpxB7BYGnJZfhCmyTS4ngooK7SuRJwxPvxWv9z7WQYstk1FYjNw3kcuM4NWGUqyzkr8rN5WgfTAPjZAS",
  "key39": "2UZTgkqh7h5hbWgy67CmFNeUSG5egcoSpgrCXs259BGvrr64et2n6rsBYzCJGRM7J4Hsi1K6N8MrtV6qL1u9Jptq",
  "key40": "4bnrjzW5U2t7KF7U984CA16KaTrqrX46DyHzG9BDpJvRnqE88xCprm5Ey9pfkybGFZzB4gWSWkzvWnqLZjoDrHtt",
  "key41": "YoPW5LyKjoaB2FA7TuH7xYC69ZPeBcUnbaLzApEuBxqdxscD5URZv2FUTKcqb129z1WhYs76DzK6HuP2gz1EJGo",
  "key42": "5JmVg3sc8fCLkpYxJfkUGMGPvLJF77xd14fPxNA3YKUVPtoyhgR2gieBFoPwoHiEo1MshPq2XHU976H2zUrAYAha"
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
