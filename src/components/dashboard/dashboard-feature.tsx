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
    "2HjwM2b7B1vFeUB4J7DjxGXvwEjYZSfxbVLuDn9QK5fGfYHJAubJMMDjwNFcb9ptavUnnuMhVRjXco934nf12Bep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r7PDF6Xk8Lf8oALW3ct8S7vHRcZ69gz5MwFshraUu7jRu1qpuTvY2pgzm7p2wm4YnZ27sa7TXhs99QDgVfdT6v6",
  "key1": "BNPzsAAHHomRm3qhvbHP8dquPPGgeQTGc9kn8egXM2rVCTv52Koy6cgJHP2WAy1wRBiDuEK1EcBMG18Yt9fSXm7",
  "key2": "5xpxQr4Sfx9RvJ3wANLth9QmDEqsG8VWWqjs5fdKUjqFKFVsdmL7F9aVUFXsr71AfKcMatm3eV13eDvjePrNcKMR",
  "key3": "3DK5FTH2JKVzcGjf65ehDi73dFsdv4EHCDMFa19EaMZxmyPNat1E4FcRGHiw8xs9th8e7EkKZFx53N2m5FB1KbDC",
  "key4": "2Worf5u3W6j9Hbm6Uxwv7KPdpe7MsrRaxg6eQn4MT7kSfSZNt52bgYwxuSnJFLA2uc3ByNYWVVN7qQZzq2YeWcB7",
  "key5": "5sq89RYxXTeXNcJaW5rpUUDcvP29RTSxnyDYKPbVSsM83nCvsAM2haxTacPxSDry6GXEf5q3LWnmTrMNGkuuP4UC",
  "key6": "2FTLTXDQMNLsEqApnbv7wiLdpxH4S9VZzTrDYm8hXUZbGLzmg9SyJH1h9o2xdGWU53aSeFygqJ8PtKMAvjWaiP6c",
  "key7": "55FyPeJck1uVHYzXyCyqN4Nk4MEZ8iefFSDEC21232ejwTBiKHwNqtgrczqJ4UN3rXVV9rb8935noneDeqGewPG8",
  "key8": "4FL2ebBp3BZJWEhLr8vbggYzHi52Gyrck1kJ2zpJVqT9sL1MckeqPwb6ssvm5Xmg8eNeRYBkyjv4ZnJq3egWms7P",
  "key9": "H1Vee3ndd8X79paDUTBgUeSvQmMHjaR1tzPzGGy9sB7qTqmHGr8aASg4FzUEngXgHL5LnboSXdxohczJejs3Y71",
  "key10": "R19SBjjtstwpWdxRA4hw6kppTbuS5K6VTDmzVgDrhP2ujRB3MaRu8HZ2rEsg8py5iXs3eoU2FE34eAoeUDAzgVY",
  "key11": "3oe8yiJdktKCuzwHNpwTiXQcbfuMx7RWztQVgd2nxC6DeGrx7WZXaJgAH5KEuAjcqw1kCXjodt1zMTomAD7QMb9D",
  "key12": "2s2EwWBWzLJ2CsT5EzdpPF1esZzottRdeqWoW3V8BB99TbBrhGbnzjYhBQvQ9j6dJnLevRcYY8jwcSfVPxTv29vy",
  "key13": "3WUpg4Es9duUNZA3r2gtSpcPLmrRfHV7zwvFwmT2iNCUgeAPqAz9PSAX8ggoumkVB5G1BK23NSEg6cnmeM3sJDax",
  "key14": "3s7juhYGu8WDakxGuwHAHhBjBae8L1gbeJdLsaskWJtvFRh8nAQQdongSngmkCFQxHLCNPzjwfX1RHFmqcnA9v9m",
  "key15": "HgrGBFwzDRrX61ZTR3eC1METm3nFdh27BYCFX37xvCc6VcbNpUAW58hSYpzBZA4Ga9H6y2ZE7K5Nr3g6w7WKmz5",
  "key16": "4JpsGikkt16cuvb3VAvVNdUMVyaj6bFJNVoTC7UBddALbBuUsqeTE2NEe8bZrMJDvNH7SzBfPgWCvkXrGDJhRqxy",
  "key17": "LigsYdEyxzHKbSoLDpYvPxdovXJgyM4x8L51PNRRAvtfYzYBnUFwJYauLfbEEnsvcP3G6UyhTMsgQrH29Yq34sd",
  "key18": "4hTo2Uz5qsrumuaW8Vun2F5gnvsYaGGVztbdaueNusNYCZvHtMjNC28hwAjchFymQ3ZUegvHRhAkPW3PJgg8t18d",
  "key19": "4DbCdoDbvumNRen8wjCH9bgbzFzYbLnejW3XKzyYhofzxK95rux55EKz8QQYyfSoPcpeRVzxdZKLPCSUnpEE5ksQ",
  "key20": "5YYFuPk9mjnFBCwx1Do6bvsjv7a9Jdg5inyaBkQcFRWkgpTCGRNhxkbS37koA37HcCyKNXEJr3qFWn88jdkPFuhs",
  "key21": "rGdJeVfxTsBN8Ug3Hd9The412bgAm3g4KPe2p8naQqHsTPoVRa2QVBkswg4Sv8NLvz6h8fA4PRBeshgrVYtfE1R",
  "key22": "3Ro3PWyPm5454CRwV5UhhChqVELgwkTgtuz9dReRVYciKTEf17RsGAKQ7NXyaSQ6UiqPdiLDHWjqexZMeqhCct4Q",
  "key23": "2sUt6P58gDcjVzqtDUisxg194yXhReSLjXzyGfmjof6sFZojsz4eXfzCtYS4C395ptTXtda5t4QnxdCDv9VGf496",
  "key24": "47A5ieyGJtrBPUnjEoKrn28qzowtfBsX8WQDxNL3kf4Wsapmydvvw8bvXmqYQSGDG9hwvwDjksEHqHZb5p64bzpZ",
  "key25": "25HWJQ6LGGqxWgzGe9qN6KRHk3GQ1Qz9ejfCd4reHJnT5i62kek4CLtRZLNP5LzUhXkve92FnCLFoTifveTNf3MY",
  "key26": "6315zKmKAsvcpzwGt5VjgiqU3Z79uYdAW3EsN93CCGQJmNQBqBbGQ37Sm7eyUZZTfiSMVh51YT2fkABHahW29bQi",
  "key27": "5jyxotWHw3RNtJ7ymw7mnsotQduDXTDHqYNWRrWJf7EKiske6xDMQtk9pWwND2YmcpPBtdEZ4oFdNFdVbiRkwj6D",
  "key28": "3ipRxQc6SxYXHhqhyUAzEYsF3TcUvv9HLGaTTrMp8QnLL2LjTK8cLKjUwydL2tCTSdGZ7XJCBtJSBpYcKSBgiKrh",
  "key29": "46qDgB83DtCEwLuPabPzoQnSX8pmrmSBK3kvMF7iqfPVArXgaoTT3Zgu1Xdfn3ge1VAVhDgfeJFNFydWfWDuaZzx",
  "key30": "eUUsQz1B87AXwsvxzzsyqG4CEdFrfzsxFu5s193sjiP8x19QTFY8ds7RUFAMP6FmR9RyXRzEnBsBTssjSfXoBZx",
  "key31": "vSPC3hhNH3bAqfPATKmGWcxk2jRpNaRYfZyREyvg1VYt331riNicqnNS6t2b2Mk3sLQyTSZghdnkpYo6d81pbnu",
  "key32": "5cVbyhffP4C7qWrA6ri2hGPJmtJSfjPG7XiUtbXdtxopBnyheC6c7DXf7HKAKnT9YREB1s4p3bwswRhWscJa3Kik",
  "key33": "3VRRLfEE8qGEDSnLLwXNCbzEhUPhQ5wxCCf4fHT9bvtU7wHXL3jN4guhrNvJsmgvdefyjwfVUctdmH1k9e92w8yU",
  "key34": "3betkYtHeTcXysyLpgWurFEXozCasx3reJYtRQ5rEUEoEdch1nLVU5tmJnGjDqVyYHUnGCret6r7jjKR3iw54Xv3",
  "key35": "3yXzf18QEFdQuNX1NC7z7HArvknHqpuy98BV7xGD9V21yVLMzgPowXtV2fjBF9g7Krwjk6bj8FLBBB4ZiVCHTWqS",
  "key36": "4hbhURZq8MwjiDqtzZ4FQqBTmM63PqBfhmCvsH34Zgha1FjhGbX69PCbW2Bh1oQ7vw4sRbXtMVyVX1GtjNBzM1pM",
  "key37": "21Zwy4eXwHg8LmiESPkF7CAAFjc6QZ8b1bp2CyGMbhHGfExxZptVxkw9PuTjNVtf7RvmzXZFTBfCi3a3PNHBWtg9",
  "key38": "5kLkGsXRpY3ZHMfFNqUs2SFCRS4M7mGpJbyZEBc7wtgZMNNJvMJSUeBYZ7fQCnwK6Se3wsnpAAKgmTdDq2qMBA9Z",
  "key39": "4M9J3bTsXZGPvfBNGkSowmgcP2toprGTgv2P9Le8aj7JhNiXsS51pXD4ym9tnGv8CF7D8uiMaVnNadJt4ejY1yrm",
  "key40": "2KmSFD7Fk47R7kDAQAvjxopdLcMfdVLuyzBQBqegewdQndUNoUVzP5zcZniCtqmV7H7fJKevqpPL71LX4kPhjxGs",
  "key41": "5gB4FZiqMWxjEt8EWMz98xaeBnZFKTF8LzwFVChFgtE6HhNFHZnX8ADmJj7fLHitifAzFPjxxE3D8gHWG7wNSwjc",
  "key42": "MeGVAkK9zdtJHmFbTRswVaFE6MzhjwR3KBKro8vs1fetHmdj4xGCVFfZk4gvUGV7wLS9Q2K91oZquksGjDqCRx5",
  "key43": "5UbRBSZafCTPjkMFL6G9CGB89ookrYoYiuBBb3UdvyrgW5X7bKQ1s4v7qJPQYtbatBjpnwEHvt93x8hWS9h57vjv",
  "key44": "5XbTZMo8ar6sWfpu2qYgZAx5MYAJgyRGA2MTEnAjBeF5c96VV3QfupnYRVREok6fQrqLXcfTmgf4ZY7PUyLFrGRF",
  "key45": "3gnDbeJN9etBCvTUoHSaUBZxiLfwoyx59AMNeTQZmAtkne6AMPNBxzEiFoc71BG3peShjGbzyRBtAHUonkWJcvai",
  "key46": "35BubZQercA7ExgZgjZAoGQqmRWHjAhTeWYZftHoGCXZrDk5YuDkXfPcsH6brJ8yLhvSH8fJNp8iuGz2icnkDKnd"
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
