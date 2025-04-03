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
    "Jfz7iaHMpFd33z65KdZTcjue9kSN4jQ4V6MC7Sa2kz6PbVUyRonSxwMoWyrmTephQ3DtZeQHiYPNjzbX16GHqcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBwtN6duXyWXRm9fA2KuUfsVgVCjUwWnQEq3xq5iGS8sJL276uhnWT9jRWXgnxLMGhSUZ2kjnWDSZCpuxkFSdZV",
  "key1": "a8U5LfA7257nJNxuW6tKBqBKRwbZEdVmdFWZJJn2Uk3WkBeBQRMc3ryVtdUw5rHqLAXjLYAtrabQpDXFQ4snBt4",
  "key2": "3cxuJ1ZSQTz2Ynj8ektGe7rus3XSfs16eguje5WWTooxKtUisqYXJfJFvncLNDZ245pbVskjXjMbwVknHaUAj2um",
  "key3": "2GviAR3E1rNGCx15R6tpVnTWqKbup8NV4nLkuirCdUC13qnneNS9cYKTB6xfB4MM1DCKwsyuohbMk1gdo3k3vV9g",
  "key4": "5kvmKZpB7ZoW3frTsQEKAGkE8nvbfAN5HdK2t1mqLdj4CvoKZmENFB4wo2Q3gA46nn2cmX3Kbj1JboEuWzh27TZu",
  "key5": "4CX4rHMCXzUJpPA2ppkjNKzL3r3LNeVniYfN5oKN6Yryr21J2yacbNDS8EpV7yYxghKc8BDJ8PPLAqSS13mfcHjV",
  "key6": "4dybTVvbDzt5mtnmgW45zQRweXLg5SomjH7u3JahtQtsWcdNFr9msXt4bhqqPAPQQdRA9MqaRWjD5FAJuKmxCMuw",
  "key7": "58RL6arYqAU5gHmFQV7MuJJ73Qdp1U41AUo3T294YwRMGtyXQZm448vhbosfhoCcGdyKFrpfTUfxFf3wgqV8PbNR",
  "key8": "3xrQMDXMySJf16qbQExaW3Rr1fKmH9BQQ3HsqSHSum2uVMVnhTvebWVz442uEHPiQdUQTtLhDbFefnsA5fGQAFFt",
  "key9": "g3A4yCQ7577AXaseGqGTENCdbnePwjGT9PjmP5PqZLqFgXPzscZaxgPQKU7BwqD9VbXZFgGumVPG5vn1mJgt8Qo",
  "key10": "26ScdPFCT61aXXgdR9hL1ZHUKZoqb8EM3E8ftGrfYhzovvxTozit6i2qdYhVcoGabt8UH4rryD9TLcTfuyjgjQWJ",
  "key11": "mVviYA5Hf8G52X6E35bpdKMMQNpufeXJyBDCKHeMQitKyHCfAEpKaXcGHv4jUraG99WTjqNC29gKkL7v5RnAqN6",
  "key12": "3P2rb9nsSa4SqdtY25z1rBjXCZti6utQAm3sdWgzULGWJ7yownLDRXeaSfnQXdV1ppwHBhuskkaMzsXNZz3HKdvy",
  "key13": "4AXFmSKZB5S1nb81PA6pJwRKH6Jspi6TnmL6u4SzQtxoCXT351YkLJcfdFzvM2LbdauogUbcQT1kbEZ4xqoUPTnr",
  "key14": "P2HvsL3h7aeVjNyEotwy4j3Ki64Lnn4WAqiB5WNjK7iocu9pP4UdCo1UUFzSieuDbp93KTVGEQAxYuaTPpP3GJZ",
  "key15": "4hrLaa5kLhcVeTnjDBPTT6SfsDMvEQ7WTg6xT6Kw1Rpspwi1cF4GvypwYzqUwi1sCCH6SY4ZXXr1AUkaiSbhBQoc",
  "key16": "22gzBHDm1GzGtBa4JXTtwR8BwYf3PMhw5dSnMtXi4vPJVLktJQLrs2auxQozBQusD4tpc6x25Rr1nsKQBNVCd8w3",
  "key17": "3GuzoVas9ujxPT1CwRfFb5cHKvU6mhCaN93DobpSTVz3vGRgFc9ZvF3KAMHKWcRh7NVMsYMEn9wJbgdMfB2tzGzW",
  "key18": "4pQhx2FGBweopXvuQ519vwLox2Qbv51pfxA63jBCKcu1rc3r31ZYYLFWKe94tnbKqsDzAbo61Jtf32da6J1XYomy",
  "key19": "2YQKvG5So6z1wmbzAFCDjvsU2xrRc7g2N8cnnMiFoECENDAXcZ5XyAniRFnYAJkzpvLjxhAnYWs32dzKa3gMSH2z",
  "key20": "2Ux3YpU5A9PyvgFbxKu9tB29CqaWHg7yxhBMM374vAGsue1eG7PCLTbdfsLzqXK3MZcTkM238QWr9kNKKLxWNRib",
  "key21": "2kW1TWV9dyJDYgE1uwjxLj5FjzRYNoe9VPw8L4bYzPtXokkGfc9Te95UxH1YPWTPNJcipRNLwSvvCs7Fv5yeTdaM",
  "key22": "2YbVtuLdM9wZ2h4EdYvwHhoxhLcvraxLNeyMkHz4FH3bZwZdH9ziWUDA5RizQ6eN2sZEW2TroTSJaZRSrFWDSi91",
  "key23": "4xAxoUGmHgJTJCdbdD4x4WqYuD6iymQXxZJ4RE4KXuP3yJdc9F2gXxgBj23RKxwDgGf3t7WpPFxndn6tHxt7aFT5",
  "key24": "37TSViNjDQnNcAo7249iCuuAxJLbERkm1aFkkxuwxs6HSojHesZZSMJ13y45RQTXKG6HmJUBfVUecVaJVFtbLr8C",
  "key25": "5qCSyMSXzvHbsWUxQfB7jc3KPwiVw9U9pHuTusVRHgQppaoKLFMkTdTHoBgceEgZasZ7abGmWap12Fq2xdimwJEZ",
  "key26": "oTHNzr3SqFqjLYBTg4URmuAVCXp3j1x1sBhrdZWc5DaX6MA6duvfSkNV4uV7AdxCispjK8ecgDn5BZMFBh4K4xQ",
  "key27": "2ed4iGWasuvyFmwgsDZnk9Ly2w7PH7hEPz41ZESTHyaMkoXUQBoSXHRVmh5QD59ba52BKwhCej5F1RQtByAN3Nsw",
  "key28": "4gGeuGkFW3GAGM9Wjf63TDDXTXHX5veE9QVZ76zeY5yjCoSV9JL9MyDJPPx3AQYYNDt5H2AmpnptS5a3B11ymZbc",
  "key29": "2gVfF2LRqiGqC2n6tdhjHb9iX1BysE6CibwGTpfVVQiVsMP87AXvUzocz2KKd4jCHAjGzkC6xLPCZzEdRpvp3Jpe",
  "key30": "3cZGvE3G6NzsAnn5bukyctajkVxNNeaXkg1Gb8TLbRG1t8t6dokEcfcwFPi9hgJmxbyHJ8kVSmHtajPnVpC7v9AM",
  "key31": "3BYXt8EttjpJvaHuEnTcMzdwWCPdM8BWac95QxAiGPQCSoenAy9hfGTp1pXCLU9KwZrRXVbqdSfxMnv2ZbRWkL16",
  "key32": "28AzbM7QzmqXBwavnfcDDqDAL9nRwZ1U2i3PS5cUtFjmnbPLSG4SUPTJ7SZ57z6spj1PyHZcNzTiLBWZwzscHP5B",
  "key33": "33n8D2BrgNtZ1t3FH2EbZaexE3PhAaJ391zyuDCQg1BJxhmT4686TXBksC3cJZ1d1QJ2s5kfL5mq3nEoz5HTyhFB",
  "key34": "3gok4zWCUHpExrWfiCk2CknmySKd4QWdSAUo7JTDcjiCHwFLGtb61pAeWgVLLtH527nTXRNNmmbYe8ehadjrW5BH",
  "key35": "2hRb4KJVh43L8U24GYh5a15CsgN449pm8KoFY9zfSN6gJTEsBQV7A6uNRMiE14zX6tFsY9zfUjtrjDRBASwt65HZ",
  "key36": "4c72r5dgW1897hWYjEA8UdY5s6R1MuxtaKKXtosteTLvuYaLWYgRbBRx1SxsPtpmYuNVempuSdregQWd6Qbh3raF",
  "key37": "5bEoJxZ8goSME6CC5voz3W63uTANHrsakRL9SXWLK27Dz3WvrRnsdPtfThSXSFMDTYTtc7CJXWw7Mx1GVJzFgtYz",
  "key38": "tgFiVkoFTX1LkD6zdsGihmzqC1SLHNzSvJFUcE6AcjfQA6DF4b7oH34YqzMuveNgPTTwX6K8RLhu4gTVzsMk8xW",
  "key39": "3zW1Ty1VgAvc6Aq1Qqq3ii5Lg3qn5JUkyNYordxGXopBsoAB3vmXcagZPRSuoV3zVPG2qatTxnhPqWmdMVvEi4R9",
  "key40": "3BKH15FpUv4Tm46ysb5dbb1nkpMytcHNgkjfZbZVHcZhFwPzHnnMM3N2dyywSBkDqQBz5V27rGYxsCPffcYe7Nz3",
  "key41": "xBYExmZfetW9T4iyimhHZLYadpgLMe2dLEJ6tXwimkC1qc9QvTibuNmTriskGNir2smyixpCWu2SGNvmFZW6MPV",
  "key42": "4yw8kbjcgGrVbVmx3Zi82Rm1JgRf1h45Q7egyWTSBCrpBMNcxC98stq1NewqoHnLYPwapfJcDWAn9gCm3Ds3qbd7",
  "key43": "59CzbMakAHeuLvF2zMGwBdL6M6FUamragWDRVM63sEMUcgr9LxVfvpCNLRYJ96dhochde294Zr8CuEA5qV5uCB3i",
  "key44": "29zjtQyS3scGiUNNR4hKx1ADDM4TWK7eQbPJWu51UcELUQZghrDXFaub6Cnjnm1UzmBthGCXtDTmP51QnSKZiLXr"
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
