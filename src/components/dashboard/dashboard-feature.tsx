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
    "2v9c9Z8A5uYvKeoCkiwNHi66xEzwgcF5kD5sr5qiAbkjPUJUiQLGdfS9TXBB41dm1Zt5jHXHuuN292qvxJqnxNvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QxS97xpjbwZKefboZkdvYodiukVrXXaobxdDRfRNf8r5vNtJ8dpSgH3trs1171W6V3iu3Ssy2UVquDft77pfZYK",
  "key1": "59LXysz7ANnBoGzG6f3ZEYtNg41FqxG2rCyv7f1Bj3BpXE6UDJJH2NvqKTu8izrx8zW6fZS6YfqjWA1KmJjB7xhu",
  "key2": "2TYGe7C9AS3phhLhcdWycfqcrZBBHV8Vu55urVSHWozNaUGtCGid9vfJkDYA5Ccq8dkBzwpNau6d6EeDQFCUyM2G",
  "key3": "5tq8xBDfYMMZHuyQ6CtgD1HddQhPKXccTHkgLptbPKHfUm6BusmUMX1gbUoYjNcg4uadpomzEdf4EAXu8597bWUE",
  "key4": "3aEiAVNBPexVfB4MFgmcFTp3rnetFMW8un5b7XPnhpqPCQhvNahG1UwyDJGGYz1VqXy3PBSuKAb8i2SwkQHw23J2",
  "key5": "5puKpuFrbArC6gRV8Jb8D9s1zM1CuDrJJYYzRAoq8YW3Rq7Zjn1ZqyNAaRh6vDZB3BTQR4nSqXvTTdccimw2BwMS",
  "key6": "2emk1bzaJZ9w7JAyMyx2xHDjB3MNYQUwxqJ9XVM8SLRZmsVUdgNWDXcS18wy3kihSrez48LPdY9a647G19RdQero",
  "key7": "3oZ4UGHYgBXkGKC9XaYj5ZqpVjWWRjzUAYoqK9rJaCccExbDdbhD4ye4CwWERjtc6SdV6jFSHc5GNZPjoMTcjWxK",
  "key8": "3XbHiuCLkE9P2LoE36sJoxRVwSgrsCmUT6T2CpmncVJ3V3XYH4EE6aPhSniK6DVXAbKK5npCe9Aa71a7YB6SqQ7U",
  "key9": "649S2Bn1XxfVwp8v7Xfv2KC442QyaWS9CTpddHeRqewUZpCsVDtdPka74jYMDmakRTS7PfiGh5ap4d5wGdiGXZTy",
  "key10": "rWhnSHAW9MSa3CHqd3Rfre5Fz6EW733qn2fDGY1HMhkUxi38r8gQmHq5c7XAygz25MHQYsixS2FF5mX3gtswtmN",
  "key11": "37mpA1wTkyG7ktKHXCS3tsCJZ2pMFSMMUn7rftTzX5b3eF19SZNfL1BSfcz81YziQYzNvjZJ3AkrCcpGfpJrRb3m",
  "key12": "5aDopE5bddPHDyQJhozTHmMQHf98HfbPhpUdjXacR3jeHTYYJbnTPXnbitjyj5QXPtmGN9eZtPnieCJrx1giVhB9",
  "key13": "4KkhjS6j2o7y2cKqR9kM8oo2is4ts2KbvhLYQvGjdVjheXgNrYCNmGFCF9LsLo8mu1rL6YsPmMqrBWCHN1mZyreB",
  "key14": "3k691eK3ZEKuLWBuX1McV5VbL928juk9fWyxRwxQmuyZ5A1x23qLeZvi2MGajHDtetyY9mp7UZgo1zktkqkcxb68",
  "key15": "JhZSUVw1MonvRwS8i5R4j4okYqYhnTCzcW6vYRimLho1cjJSL8C3aDA1mrCkrvzXdvdPNi4FaCz5mAA6YEEfY35",
  "key16": "GvjQh3NZfaVVJgBmL46wxpQ1PEHaGG26KyJcRwF4QhsBcxxwXcVwDkLR1kVyynWssSChtagj2kqhehufej9r4KW",
  "key17": "4H2BuoX7XPm6hFzYLwdag2W8xbwRSPZafDmto5eF2bRA1w436gxRjQgRATzqLbmmtJsLQyMSXoMUEGceB127HJNr",
  "key18": "3QFfqKC7yAwR3Frfajv7bjMyahKLHGKP7mAxPVPYtU9EysdXErhN4QBs768zsnDMzbYHCCHFZbugwS2UcRagmF6G",
  "key19": "3BbWGcmHbvDWHvGvBNQB61cuXAqZXJnDQLpNtworUNVwUdev16DdrGqcTHDA3TUWKGdNAXA8pxvFaA4n9VHSFQWr",
  "key20": "JeLqHqCitjbE9KfcWEwRwJufFgjrtfz6VsJ1dcZZccHKWRT3TzWEpSjP6mjNFPDdMnXCYKzdFPCmWWCvbx3wF2h",
  "key21": "4fisdKRdPwnH91oMXymHD9wARAUPLn3HrJHSvy6MbHbQgMTgPjGB4n3tWiCzo9i7qM5Gktq8FNFVMdrvYgPT2KLo",
  "key22": "f1trFLXixguCWUpuZFzMyPnnGF5vvurmfdNbSzMA4GvHZPyVf51Zo8qtLX39chFKXQN6Tm8DuetL8TaSopEH9Zo",
  "key23": "52eMgGTzvKZutQYTFqFSyyX83p5G95Brw6X5BjKwMpnXFRue3imeAf9DTkToZj2Trvu7joVUazxczHqheFoj2DQG",
  "key24": "2tP67zRfKpWp3fkfw546dqHJTKUxhHTRAGRBh7QrZDtJTdVp7EZAek1NiAATRmXgLdygCQDwnA3zX9h2rimvM64c",
  "key25": "5KtqvgaQfoGUNm6ydqXvHC4bUCYMKK469EbEYaHBA7hPZ4wYAKWUNmxNNJs4LqRv37a7MW3qPqHMBTHqtUKTYej",
  "key26": "3Mrb9Cvuwjvpmjcq51YEYhW2mCyHYKcJtwGWb1oqY6dsy6DJitSJDfXpDbBG4HSGEW3JFiLwUpkzLp1JLCDtXith",
  "key27": "4JqzUQYAvyPoCXXpa4T2vKMgQNumqXKzrmNT6CTwJM1owQhvUqYQ3dx63nEKWtGqdKWbhNdYaGw3HQFdPXzyw3sC",
  "key28": "oNEwjq92dDjkM4BVffQ6NPGR1vDUCVWBYHV3LDrqpRnoYmVNVVijdrKZwJF1P8WofaWvdtZbbUwsNfo9eAUb8y9",
  "key29": "5XiTnRax43PCGzQX7zHZD3bXqNuP6bTyGMPFAWUxpB41w9vp9BpRNf9S4bSm3PRkoSbFhez68mb1tZKYBiEAvxyu",
  "key30": "3jqSKewFLqbbtNwM6dj1cJZhmAkKy2N35wRkqeRagDSw3ujBjW2z75664ansJufaAPc5dTvhuyrHETa6Cxammpxk",
  "key31": "4hC4BF3TEs9ZFJhxVsDaF8aFUPXnebPWVQ3UpRmuG2fzmsNfjgsV96rPe433zSsasb83fAosUjaoaAnq5aknDK3",
  "key32": "EcrQwhL63JzfFcca4BrY3g2eV8LDVF2PPDcHqevUpSCi8wjrvL1Ew8kJ9KvZX8uCdpG6ECYgry7ZwrvHGXBp9fM",
  "key33": "nwy6Tce2WzZmzV92FvWggi4d4cR89SjXQvVPsg6hot2krTn6MMquchJ71rdPBpXS7oGw9wFoNGoweZD19UJcCGn",
  "key34": "4YvTRZj1NeNq5SDzHBy9pR1Tpg6BvSQxig1M5D6gqknMidz9XrscDwZZjhfJ6MXAXbSttQQBd7SsY6gHcym4H44F",
  "key35": "3scbo1teaDTW4CxSQwjGmkaQUMcZbWvvVDTeCTfbw27RNjmtDcbnQeuRmyHwxexvMa66iawu759cuneGTtGreanf",
  "key36": "4P9sxwLiyoxC4rPc3LNCXXZUHjeeWU97W8qHYggC7LY7GDRJ6oQsjLzfCZaM9nya1vVmoh434DorJExZ51biFHxG",
  "key37": "5inT8AVr2ekUoLaiuZxijDrWYiBb2XAz9ojR3YkrRqj55ikrTaQ4j1amJqXGrCRuWaMfpwtSmXjQQj4c27Rp7hxy",
  "key38": "5SYSqSmVgcA4Bw4kdpx87oevJqGRW2wC4csFbjf5DtuphPpqEdQEUw9JLwLZrE59N3Y9nVqjqvB2uconh6yAQWVR",
  "key39": "4aoepFF3X4eRt2a4oBYL16cLj26e3xcuBRca8k1LcQetbnh87eaLYv628g4HAXg5aTxjY8Zsobis34uc7cW4JxYu",
  "key40": "4wFHSZcV93uKaz468m4iRDCVXatFLFosPLmG8JZ8JeFw7omz138vttBezYEWW2qUjTPi67Ft8FsDrUTUQevqsF3y",
  "key41": "4PP7Eu4WRjqRzwcoW8mvjrvPxWxJiEtSqEL6nAd7GW72eb2HmbgJQaWv2Krmj4ya3je8zDSJi9ivtbzGhSke3kWM",
  "key42": "4uz5FXFAw9DiiBYpWaycD8WVyr6hTHWPw1eJ427BcChUvMFeApxFGkSeBxjVTJxWSwSPRAtgKQEVbXkuqR8sugVX",
  "key43": "Q4jVMv5ytuUEcVWFhX8hRQLmnmmazDD6pk2gW17y2odJ1MXJdTCsCbQFtd1wo9Nvh5kvaH6NG7asafm8WT1JnLL",
  "key44": "3HZMMzcctTPckyYbev5zcYziE8rcxS5zSPSnCNTzT36pCRYMh1Ekrn2H1cuqk6PbDu6d9B4CmALYWbcDUnwTZNmv",
  "key45": "5jmLPpexbjsoWjqmydZdY9mpWogpmbPy3ZAzv3ChbDKxub29tncCfZa6sXCsnBuCBJqeQG2DV96qFcSM6zRnWVDk",
  "key46": "3NxHr3aSwFbqr2t8eV87uF9DXnt3uHeKYRRdPcF6CB2uh5TZ7jR1HSA1WiSdvhpcntp1n3angSavfrMQRHofyHcr",
  "key47": "4xw5gcJdfubnxznP2tfKmTduEUv2Q4w2J9wVDqDteQNy4ZKDJp5yBa9VQbnAuta6Cd23N6XA1T24r8CQM2fajYWQ",
  "key48": "22BoCp5ghpMVVuiWYiiALi3xcGJfzSR7oUeJjAd83FoRazVPfsoCzVTfGcAkVMiZvGrdwaEyqVDE8c1yJCLPLRWv"
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
