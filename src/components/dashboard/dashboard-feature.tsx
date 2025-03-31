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
    "3Pn9Z6k2jagiTqwq73jdQB4K3RxHyQa8tChDkVzZ8TkWd4pMHknt8AifGkAtnYVRYzfCL6b2YqSU7EzL2UdhAQCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxqFzGYMg6njZYctENR9N5cXWXLLvad8X23ef3FgLX8FSsQLDUfRSyyqmZbGH2ViDvREMeJJUgUMJWHGGKWH8At",
  "key1": "bmCUhUht5NtLoTh8QZ8aokinQVZEPD5sYnyFyLpVdLFVnjsGE59qBcjTi3zkHVBwRzDcvZhX6NPX52byKAe7YuE",
  "key2": "5BXR4SW6grhrH2RTLHQQY7ViEe7dExchesQGh8EiL7bdEDsgv4BZpyHrRk46P3esJZ33kByypXUpSTzjHhY8Rwz7",
  "key3": "56H2fnSXBrWs6zW2JpGmihDxC9va2U5ee5bpFM4Kg51KK6nKjFVipz8JdkKRmP6mL4yLJfU3TKUDHiwgLYU9DFwm",
  "key4": "5L1VRWc9SkCFsCLXgCurojE3GhkL4DiuUtR1njncYQSS1zNaSwszyNvSTZwc7PEYdTiq6BnHCqPPDs8kJUwkBmxd",
  "key5": "5cAjadUfpdrMbQQzCZb5t3a2vcZhUh9Lui6JE8GyEeVTapVzMueCdrz5XpMNX98pYZipjx7wrJLXHxtdc68YCpey",
  "key6": "4gj4W71tyLMaTGhmGzxS5RgcP9pQLCyHSyCGbHqDbmq1ddSrSgqQgEGVcESSr9fgi4jpdS68Hc7n3LVqGRUXTWys",
  "key7": "5MgtpaR237U7YZnuydShhBPsVDEH1TQhuYJGwuf5XkbsCisnpR5RbnygLoNaBrxL5MQG8bNKxscy1QKLnQThPeBS",
  "key8": "4Swn29PZG8YjaNohvrHi8JeB5jbiw4zMwhn1srreHxe5DdKg3qPRonD11rJvxHymhKURjgmGM9yWGEPSBTZmwTNv",
  "key9": "2d5ssQmy6cEQDeZ9JVJXdpw3E5xCmUBvxexSP6Cx7aSZ47ym4Zc6YV1KoiM19b3ygHGBsS6Jyhe6ZnSPHXb6kugD",
  "key10": "4h4nGcNkpTPA4mc8wj8Nb8vkVfJM21sqRadbfDwS3o83H1y4R6p4dqUdeVRGSBUCAQEgczohztjBc4d2Y13a7pst",
  "key11": "29AEPnNwh46uMWiorgYdxAJ5iioZeBy5Lh6nwFFgRjB47VZTJJqcvtkr3muRKwpKbkVqLK9fJzuRUBy82ZBZF7tA",
  "key12": "3Jzg2DBewPpKecfd3Y82WFhVap6tQ2P8kV6o5rX97YGmRqEW5EDuU8CyuzG2QexDwnySm6jcxp5ja5DJTKAPguv2",
  "key13": "33geNcms9KHcRop71XH6R1S3nLrw3ADce6FqBciyrzG1YQsGjqKWvxm7iP85ud5yBm3rzcwdVhK7eYVNTfyZL5Uj",
  "key14": "4dm47MrPcGK4syx83geFXG1Sa8yQMSxQGeaPDnHzudUhRJA7hkjJ24nTCuNLw8tcvxpTdLTzmiiJJGEWfftmyd26",
  "key15": "5A3bksyWPWf71rwrfcngkqDJ2dBhfxGY4YMPCNhzMewz3uE5wrB7idUAfcFpYWcoJL9tgnZrnx4WqN9PCGn3s8bg",
  "key16": "2rAf7Z7WxmDJibV6xwx65rYP5tGvH3obPQyjZchcwQVSmjNYT938hZJKJuPKCfyEWi5fgVYo8EgiKNMU7JD2cbPb",
  "key17": "5dUwgd2G3tTctHhrq7xHabgnyvXkwUyuKe2VkpGQgzJtS9tpSyEo69oR1wCjM4h22TyHoeEwmXEo9LRw5s9hq4un",
  "key18": "5xsaUM8Lj6zW5AHhwfVcxVeVJ1JSrA1WnWbLyCex1xusLQzHmmDLy5Z1VGTZ3k8TQxGo1qAUPuRN7h5wBo2SXL8n",
  "key19": "42m9H7C315RVcokEv87hsTNwhn1K159ePD4WY6ZJz6E8qXFhnr8GnRoLaAoavxgAatsYRGonxq8pto3G7NNqA6Xh",
  "key20": "3yVnFLTqZ1fgXccFXLiBX4WJYQvEppuoHa9TpTRnNwYwBkD8fBGQBpVuKTx3gBU7rRE8zEcCRZwDN3yU76KgJ34T",
  "key21": "4yuTgtRuiT3efsa69q3khmc1fL7J8dagL121Yszt2TLZaAVQBrAfDKBt3ojEipEsetS8K4wYujp8STtqdF6Zdxy5",
  "key22": "2Mw4zvWybRMdLMJUFFgxrUS5itNGqHsSqX1ArD8o5BJb354oK9eN7sCDqWvBWczBBEEWzor5KRf3vF2Sx7DCXSTM",
  "key23": "4HHd5rVUHx4aTjmr2apkRz12nUYPG3j5dPjx6kFnKBKpp4a7FGLJFmHaBaZVExAEPEEZ9bsNZ4WbaV5iZdm5sR52",
  "key24": "EPTJLi47XemKXvrVZ6DFZYW47Uob4R3erEwriNTB8EHPYhnanZkFPMRptz7gqA84a8K8FJwL8vuSTDxoiBdttBd",
  "key25": "2Ktwe8iNMs88Mg4ngyjaFecaa2zsHqPwJwHvMvSXScQgoxj2TAMYTWZkqCtbx5UrjgWBjFgVe7PrAwkM5Yago3rq",
  "key26": "5yhMJkxrK89o9cwYnjTNPwaDqGhzDicuR9qnsjTA7mTEQxmTBcBF2QXRG38ASoCaqBFjqi8adpudtNi2qC3b4n9r",
  "key27": "5qzsYSpv1SoHz8BLFp1XV4Hua5GecuMVmjoRxYsbEu2mY5CWq9pEdNUu71bUkUFKKBGuBwFbEnDkBAQ6CjG3YYKY",
  "key28": "jgBa7kTGK75btHbQdnBbFjZ87b9LgREmxFf3THpKJYvo69TJxgTC1UnLUorC2XLi1GffUDGTCRVfaMxbx4wBx23",
  "key29": "4zhLCqZhiGJiJHSk5GTbHvRQtzjr1DMH2juK2qEz2oTUp2scpBg1zvpTwFALb6WsvQtVnGHdMxDGPd7u8vU87coC",
  "key30": "oWw7VTCfXKSW16JXP83qEVqSe8KCbKUSUwrPLEzaV7wSXg79PkCyGnHXgt41eU6aPcFTgNVV7bS55hJ6UWGmK6c",
  "key31": "5YfC8wwvWJ5zeXFfJ1oH2AfhVZHGMHvLCg2NeKZLCWWEibtdXvTHHxf3CDRLjS4diYMcyDgMw2sw7wWf3SPZq6Fe",
  "key32": "2m7ARrRKhHCnVPYWMtd8PTTXwGcYN7sLemjBdNm86Aw4jSueGzDefHTgfbitzsLto2cXfUcAiB7o8xaGqx8h6JUZ",
  "key33": "2CfaTrDqFqj23Gs4ENMWk86m355XKdpE5dZvRp5ydkX4Sn7hU163iQA2bHRVYCYeUufeRe5j9CaazFRwdKivuao9"
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
