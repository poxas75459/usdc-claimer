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
    "5K7pWjDidkgEmc8yY1dBBqvAeiyPtTCeSjFtErFoPXmvxUVxb9vxxpNtNb8BLXNfXuxtjiBnC2Vzppwdgnf1xoEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vb32AW4qdGmZumrCzoY41NQwyTWTUAcrcvDhfRGmUmLYXsW3EQevFKgrMSm8rpUUAWUcuQjgRaXT5f6SUpMqy7y",
  "key1": "2RBAqGEL3XBS5CkmCLSpRypXh27arF4KY2CyCHSfmKbqDuxZdMi8SdeJGwZ8FAiefyipGxoELGj9tGDf9YgddZCP",
  "key2": "5FCHJsB7R1WFxZ4SP2ukaa5wZvVViKcygUFPaNcwuYVLPMJrhWCmFxkQZ4EAq4oj68LfTfxPyR9xw4DMMoZyscsz",
  "key3": "NVZ6a3adpBgzMxxMkmrjRqzakudP4v9zjo34a6G6bgAr1P1XK33tMMAcAWWRKqK28W5j9VKtmFPENuRcf5Ryyeq",
  "key4": "4qrHWTQNg6DU1hT6cgd4rRCnVWf22qiUh25bApiYyBd3HXZm7ytxTU3tB2wD8NucroFg171pezXyXESSN7FSMpro",
  "key5": "37hKyDBKBexM2igJXU7H2TRvjG9tnygnHcS2ytFb2XVtg3viECxtFTzjQp1eV9WBL7WrL4hnX9KDVCwHLox5vLKF",
  "key6": "6yMgHtWFX1BpRViGqobV5pnVu3xrkHsGdHU13en97LVGHSWEXg2pbCd8mFy4kJrosqTNyQhwuPuAtnRvRH4Kbm4",
  "key7": "2PceS1HGqepC9oJcKf9cdcmZyHYky4KQUPtYEuEjQrtNZZSrvnAa7pau9Y4LEwfqgEScHJdrQGYaNusxFrVQxhPJ",
  "key8": "3fuG5ctV4V7e3h6Wjqpo1GiguNh4NqvmBJxzfjiJWKeqjDx9MwG32UiYf4idQFYVZUXGX1UabUUJyrh3qCxRrVfh",
  "key9": "gM9kFD4jwrD5JZ7oGuAyeWhMpYBVZwQ693AxipPPafD552C1Mb9gLAsTSqt3YpUbQhuEub8nedMLJnTQfqbvaGa",
  "key10": "4j3ax5R5BbzSAQDmxsdozi7r5J1ueGTiXLBk3aGKzaqCEq9Vk1vfReh2gWV9rvRoTM12YDJuoc8vzHatA8dZVor4",
  "key11": "5JjETuvPLA1Vz6YFd2ZJWvF5N8Nav7FeSSmfrkYoZqQY8tSuGnfJV7UNfxVLp2ffwjaVcdMRWaSKdaWrUemDFHdc",
  "key12": "4pRjNH1WNmMTV3uRYoPBJ5U2tHuHFoJJdGTj6HcMA6u8HoyCS8M8GszriAkRWvjxY7jXGtRwjNsK2D6X3UUKA7Vm",
  "key13": "3nSX1TGjoYKkpHCMQCsbTasjdpxNZynxB4dNXjSyg5BQcrJLqDnS1pPxwJ6sQrSufUakM8JVNvvDBqczbPySJnDQ",
  "key14": "4Dm9kXhipjFANmHqgU6PFAT5oDYhpeo52JM6WfHbvnxGrn59KvYKhQuW5cS6DXfiLqD5ZS9ay39gBq1oZ84Mfjrf",
  "key15": "3rNBNR5b6JeV5ar3STQxVdq1nHMJXghTaqtCRy4K2xyHFHFbXoLNaaZG3QYnrVxaZ7iakrA1bR3fKNwY925N79dZ",
  "key16": "2tPKrHoLML4MeJZz9fcRu7R4bFePSrNMFq8hfQnKV8mpg2zysi4fBpnMWr5VoCtPsr1M5LYyaMWinayKeTxEzaT1",
  "key17": "5paeChY2PimcB9qUwyrQpa9cucpp1x9MKjXHUg5j8jAKVsdtmKX9Lz6D5eU7BbyEkV6RFbsapNFxXXVxT2wZAfUU",
  "key18": "3TFfUFEJZcFFhqA2jt6DQQ1kzuJFaPP5fBV7dxtaJ7c2W5dfCq5tQFf3evuwgFYJ7qhYXzQ1eA8RY3RT1YuoeS8a",
  "key19": "5MzThiu9B1ZX1z11s42wSWJ4qVeGon6bonHYMsBTypQssdkH8GrNMjAYkz81h7WmJbj5S8amSJ1uPRefNpf826Ad",
  "key20": "5zkjSF5Kw3nHhLzLdEbsFhxpevfqMXxQDD49nSpeKDZb8ERXekoCwG6V2VLsMdw8kmoPcWcQbZ5f1VuKbnonpDv3",
  "key21": "3wMtqJoZoA2cG4GK7YjWmV9WGyu59Kdqe8w4RnRxsPWg9jXzpCnaqfvVdoC9MsyxAeSTpW8V9GAZ1xKkfCtrhHKh",
  "key22": "2Avbj1fBkaZHEsJM8WGEtwmHEgVp73PvubP1UafXR2n5tg5sVkuWxNDxNijAVk29ZTskqF5wSgg3A3rSQBKQWu7z",
  "key23": "2ecEQmGUhnX3uTTFCCeAcGhZCSQv5Bz9LypS3nFHKs1beS6UtedAng9g4aPQgbJdepvv4Ds47N3nyHj2UctAJ6oL",
  "key24": "45HNnvHKd7VEZUuNkMZMrE2FEtJJ1X1UdGtk3BFm8Sm4X1oL2xp6xQQCgLgdGdPdMaYSLLEk4YMycZ55b5DPFpak",
  "key25": "3WWzJaFTd7nSE7upYoJxL9JoL81zRYCTn65yAaaLMVNMLkNGNMsT9zr45z3ohf5KmGh264hSbM62mFGbfkzh1YK2",
  "key26": "2sgfBghjy877MTw9FYigMT2RFmZ2fnBPRFHmyNQBHrsSDk9ubGpgJ7BeFc4iAKNojzbquCsgsHu5rhsKKW6nuguR",
  "key27": "JxWDELAKjzDPLPgX6sT1xNHhbCAzTTQ16tcDFSoUDCJcji7eVmxEZWzf7pVgSqhJo5c68Mhd3ucFoFSYGmPFPQ8",
  "key28": "HK1NPy5g4Lh6MAdt6FUPmH9yEfDGgpGd3pjwerPpcc5zXB8ghMqGthuYytkmQpr7sBmjJNxdEUKHMKTULbqZyoT",
  "key29": "5wSeoGRfH5MD1qYWAKM2z7euGJgiMMpyasAwQn83zYYcD3dtkCoYdD4TvY3f9zZxQkq7hZtX8xB3gvxzJta9DxpN",
  "key30": "5WizniW4CDDtRsj2JcuuqyYdfGxsg9NLAsxTw6KTp5Bug47zqM5duDytA5EbDGuK4PRrwouiGnKxdrCPgoLUShwH",
  "key31": "X4ReGf5dttJNFm2uiuEMgPQCuesL42yKWbsFQKffJGFXPq2z1Rm6Pc9TXpfoHqNBbz1PtPkUPVRZDMxyWXiPy5C",
  "key32": "3MBGuR7uB2P789okQpaG7uMJFhUU21z1423MtgsE6R3V5mSvHuDkh6Ya4jXFCEEv1ok1Mnj1sGDbdh2MxX7LnbJ5",
  "key33": "2ykVTrhZWbVhftW9yYEBKzrpZA2BKNryzTtfQk6NT7xAJutKT6722LLTTfVKPDvaq4qqcquX3Nb7rGzWLwRBWzBm",
  "key34": "4kNPwSPXpUmu6vRaJ8g5mxeef3kRWcCJH1UeMRQNRK29z4w1szLucuGhYpx9amVoAts8vYzm9UMRbUBhUR1hDDd9"
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
