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
    "5wad1B8BrdCD261Vt1TpUk7Bro3AnmpgM5RtqFb1F8HgNqKM8TZo9HygEFdZ7vnGa5hjGwCFx2BF7qXDJBd9UATy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxZEo3fZpbSVkwYys8Rp82x2JKYbWisTZyCGhtKP473uzJ2L1RAFyYvPgpppDefoWV8SnMA5sRFKf5CyejkKC9z",
  "key1": "21sm74s16spWL4GWiyUiBMhnMuQyENwvKidCD8Y4Xqd85SnPisax94iJJZwj7udg7AsedxG11q1LcaKDLprAs5z6",
  "key2": "4uQzn9MRRVpuxLK5UpjL4aWsDsHPHAceJh6QyGNMvnp6w5VUWuUeQH3KVDf6cBvibkqWryw4GnGja2ZFsUsBvmPt",
  "key3": "iHs9jKf7N5x9tMSAmpwFVvgd8oU4BDSnPrwJwvipCkPtCMeyQqahV7aoXg8wuBYKM76JmoehFq34JbhcsM7oojY",
  "key4": "6MEMnK9aYFRkWbtRpAzh7tt32JiyC7RbkrFcEnauYSfk32WkD932s3SaYfDHieyQjpgv7UU1k8yYcx6MgbCZQ56",
  "key5": "4EbrnGSamQp67EcnTW2dniu6Qr4Mw9z6Q3QP8K4oMMnVb8VvwmzCkwR9jcX4o3u6PV5vPAtCUZN68juRQoJpMbkG",
  "key6": "4SkraAZzocmzKLUYRttorv2fcFAJ1bqGkm7aqWXBGWyFFq5h8gDovHEFyPMiHHoDvyG2LStMuJE92Zpdjzv5FrZA",
  "key7": "5nynUzY9PWfsiwqV4a8oZtNfeDKo98p4DDPWo36eBXWqPVzChL5Vu4ePEGUF6xZ9tZBWLr2pecbdAmLkjXUjFSq9",
  "key8": "2bd2FvKE4RUaamHBP5AwKvLrEQYr9xoZjWMU9fUvXGofgwahqSbQRoQPLEfbp3XzMhR52pWNnURsP7ErmRsUBR3f",
  "key9": "3cAMrxS2D5VWRvJFDjXPfC8N1eGuKabBBCn3Da6YNYmuGNkCVCyZnq8G5MRPekrKuCRFdSKY1ZvqkgJ6Tan2YZ9n",
  "key10": "3KF3qiJxq2GAHwab3ZPZY9Fc4jDYZVrRUGD7CCcsLq6mHMSeD5TFktTqB2czBRv2Qat842pMbULWjSNTEBeoBjCu",
  "key11": "2zJufQ9oi1sZ34TP76oUM6fY3hBkx9tkCFtGQjbkiGTeHsoyacMd4TB2sTqcydw3vfWjrnk8ZVv3hvvmRmwiF838",
  "key12": "5EXNrMF3Z7t64ieXH3uTEiGpg5ZdyxppCAG7HB37nkU5nf8VSVAeyMEodyN2wbaxro6ZiRpF3QMDSXZK2d1JFwYu",
  "key13": "3UQM1Yi6vdjK3iaSvuUKsmoJhnBzhJdoL1XGd3JgYbkK7kW9SHUUaBHhfp76sHdnQ6TdWZtgnjK3AVFqom4pznxt",
  "key14": "3RNm5MTKuwFxTT7a411b8MzVjnr3gBWdRr7va9ZKyWd9QCULxonCPPCuBRpSoZWE78ChuWTapJdzLnE1PE9Fn1HZ",
  "key15": "2aHkPCsgsaqsxJ4sWh59Xcx8XBVzXBEkzECT91XiF1fvvRzunEGdrv6RptcydFRMaGTZkaBt2nmePoMoRtqNvFgt",
  "key16": "47NCBB9e96ASRQMp4MP9G373xCLgwm6qPmb4yo6qq2FWjkFY9BQB7KjvhRHZxBTquJokwPFZKkNzStaYaKtQ9nrd",
  "key17": "3oSkD2yKmiyVUQYrG9zhh93dJPbsEtzYUYGs9X7SnjXqo5K4xmyxmTEnxWiCWoKA3taNnmzaxoxtc2fA27Hpqwyr",
  "key18": "3Q3eNocd6VAi7qLnASnFfAQhJK9buL6W3sEFgwDHu6kQ67KS6cZZx4xqCnf1WNufASrxgCPHkcLThMuCEm8MwbdM",
  "key19": "4UGahJ5HjhLyySXHQthPgQd2dj5rfS7xAmTodPvRdso5aQnjnAAnBfRDMB3TiUQQiZLTxBuu8apBTiqadJirMXYA",
  "key20": "j9xajdKSJDZ7ePYgcrvTqnoNzZQvn2veY5Biw5EJQ2RkQhAqC874MaXuWEAk3tA73jL2ryCDzteZB1ZrMNvTddN",
  "key21": "ZZ6os2gDUCJJingEHThM4fTipSp6Cc8E9g5dScdR2XzLNYDGqYKc7Phru7rXWbiUX3b3yNQDcDrv9xYH65CpFaK",
  "key22": "5eGR8AQxkNpFCKqRQJf6qDDF9d89tbrFAaUb52F7vrD6Kws1wbeZijrntVirUiMYAazPYQHuMcoRb8hQxeYL4Cci",
  "key23": "UEU4VGcBUGMgmSRtwZdbqFc7ZU4eSajNu8ehvmctdiPvoAibgUi7dX1QLAPL9aXShvQ8oVH7HBPbnKRi3DaTSj3",
  "key24": "UZKEvp6HiHsMLGquxtmtGKkSHyMdtVgPG8SmDwxEaq93PKm76vevrntXNbdjSaGSkL5e7Qcs7Mud77JQM4te6q9",
  "key25": "3p1bzwXfxrPP9PzTcEbqZEqw9BmZgpG1mfdCHLKxg6wMZRAViG5DiEMQYmm365nwymqsW2Vz9Tjh7SWAWvDdhz3v",
  "key26": "42orqeCQBgN32CRBAvigyRTyo37xzab5S3QKHZ68hagQZR3UCLqkML9tqBmk92cPmkjTAkaREVEAj9PThNYAHiL8",
  "key27": "2xGeLvZLc43KSmPtnghqwcUoYq3dncjcTD2QDjVV6AKRAzA7Fgmux5Ds3DacNatJwuUnqbQ7M5Uw83oKdPmQuGTH",
  "key28": "4x1dAbeyH26WMGa8fJszGX41vsvQ2DjaX9uCjbTVuXA8sLe36e5iFrmxcXfEdA5bejC1LPNV8hmWZk8Gdo6GLdYE",
  "key29": "3ZVX9ryNerMWahcnHKAtgotYsB54Q9PfiAkUu4oddkf6GSq5D8KXkY2nJDXGrcGF2aNaqFkMvCfGEyWpWRNk24Cu",
  "key30": "5d6qbDfFduUzE66rMz5E6EfFDi3VjqduUCeG2mj6ispW66m4M9Z2guCQH3oJQku5fhQz16PztaH5XdNDRujZmi2h",
  "key31": "WAb7TXy5nQNinyTv2j2vjn2SgXn1azHuXRzUg5Jmtmr6RJSr8XMHtcZMjoAFXXGPJXjUcPXiU1cXA1pLhUhKLuF",
  "key32": "5mCCdkBsjFvEBGZZA5Lq5ZQd28NuSFb8x6S13N3Jj4rkhnt8d2DsNEDjpWwWW1aBnGA33niKeh1PEjFPVfeGFy62",
  "key33": "oi9PEkq5vi3QpJpQa1KUhtVgCtSaVy7E35PWtWamz59XbiaZdTve5t3Ewg3dp9Ff48p6W3CVr3HbztBwYHYCaaa",
  "key34": "yfkHW36fw9Y62xNH2guFwu1JXLyU313FDZJkBeWpetYsyLiuEBPbzTRbzowC6rRVejm2sBaqzBVZUVQV1Qhw8YB",
  "key35": "3mern9FQcxLouL9CLfb78VwjDBkn1gAzo5idZMfYsGYnGufqvN2YDUokNNFSGBzf8jtfW3uNhpo9Uf5GX1NhRLeT",
  "key36": "3bDPDTMubzdiujggSp4ActCFMnZEfQ1nJsUw5S5ueyQy93Fo4eTbzFAo1GGWpATuWRjnUkZTSmvDStbFzFfJ26dG",
  "key37": "4eR2o6aNxQ73GkE1rns22i6FeyTsfaVYPzG3i6aKh1z8iZ11Bh1gyzbkdQ5oAgAi4mh8qTFTBPnftUFnHQ5ifnHd",
  "key38": "4vtZGhmHdbhM2HCvxCqMoMBryfEPYTLTjAoUajtADV41KWkSJZPG7gAQNavDd3ArauYgmGZChuTXbnP6FE9SJviM",
  "key39": "2HvoyPjYoquj3ZAgfNKErKk9GEVEehW9VzkmjVBbqw49ArhoPVpSpAzyU8XZCmSVtx8g9BgrCQVeePy1ZfygqsZa"
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
