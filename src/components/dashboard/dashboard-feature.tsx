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
    "37rycrCRfGTR8oLkdDhGQ6LpvVh5K7of2zEX1YNBU5fuDGTqVPQ1nWeJ32muTQj325LejWUhgaLsxhznfSNdEcyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGsKmrRNSRnhjUrBVtecuGXzwPbkSwPUm5JVJC9q3F4P56MTrudKwgEWj1e2szEfSLoHbPtZnv7nvMueRRfNAx6",
  "key1": "4HharVWfNcmR13Fgvg3EMJSPJdVxuZU6bEU7R6wsLp1KMJy8pFVzsyJjzBmQZ5sx5XEYgDuoMuZjXUrW3S1v1zk2",
  "key2": "3hEb2pRVk9hC2wHmoraG9mkUbCr8oJktCdsiedLX9Kr3L6F7TrHMdUeNkCz46oAa4uxAHcucEKEB3r9QP5HNxCky",
  "key3": "3AKoq7kcTpsUGyZEMEDbLQ9mpJbNQU5HKVNu5CNYtAGR2ejEv1JPjupfjKHWTCyKrRmcSiNkU59WQPKhBRoekPcQ",
  "key4": "314bJdbUscajR6AP5fghYKt89zyPiuN9dDU89nXEtHJGDpUFuJcbGxCoBafwJ9RiiQwQi6dULsQhxg94ShN7QNGk",
  "key5": "2Dnykd3EqjnMrM5G8qVpXAdYEdHqPyGBCcAmcP7HYS9vgdqD9trmp5LQE9WZY3eo7nQeuzGQFv1U8Kjw6ALBo3mS",
  "key6": "uWh2bt8L7xXdh2Tig9cLGHWwU7ijE4F21WwRrDDcSCFZxgjfE2u4JpyXbfF7HJkPqX4UM4RLN4eqDhzCfrgqh13",
  "key7": "58tqc8CcmjRTuBdyFwGUHARwNcD7K91Ti6LxEu2TJbhGwJTJW6bQsJGf5wyup5CMmGZekr6EE8No1kzenqHSu5Te",
  "key8": "5kVVAcUN8WWARreeKcPKtxW9H4qJK3d1bnGSf9mR32don8G6Yxir1rZy9hDVj6NcA1MV2LPtteFdDaqqzfQwTX1P",
  "key9": "46tbLN2YM8ETSqyJX3VE1EYysAXybM8DDGTWAVcJhugTBTRQtkSfLssPYbUVbvtA6Ym8tSdT3sfsTFbeqf5FeJwv",
  "key10": "36c582XBRJ7bRiTA3EWEbWjsSDnjbRz36tgB714yPJGXTRh4kbswDiYhoBfbmgMaUsjAbGpe6vqrUKxguKWkget2",
  "key11": "2bmXNc9youCjSPZ7kwfXZcWHgWG5GJNdpwHLEMbiwoFWkdfoT3PFsxazS6phv9wWjUnqhgSgaBt6J5EUxZRVCxCF",
  "key12": "MgRq4Qm6M1pPJVZoBkF4RirCTAu7TjaiG3KP18yQpoGsUMjXxABvL47kb7aU2Dy6UYs2gtUhRcgjMrq3SJCrxTA",
  "key13": "H1WZ8KQzhADUTFtWV64YVjNMeEedbXs3M2KkM3TQHNxcC5ULdLeQ9WtCSjctPfuuZD9VjdfwoaC2ijAu4nHWYdY",
  "key14": "3C4by8o2HxNVTQbd54ZkVSfKj6iHNcW213NqsGyMiHts4iSBrDR7imJTHjhCzoXMaCVbaB76AH5p6kk794Qgc12R",
  "key15": "3Xx2f64EpfEPFKnEk5WZuxGKYBnXFCoCuqMfFTdpQhzRfmvm9VUB3GLqHcUBhYHNMmq9fNmPmnnxhu36p5epynim",
  "key16": "2ZVSbsqJUY1NFJE6U5N74KBnc7dvpRJp1b4okFV7ePRVnZ9B3ian9DJ36wH9n9EKJrMixZUYym7CwMC9Er8Rnc1C",
  "key17": "52GM4BMy1jpUaxaPbRa8f2qMhqLohmWRBAswDADxsQVaLYgyN2vtR8fVTd2crHHKU1YKLiUsnHw9csdMnmSiHpnx",
  "key18": "2r4Q7XJiQt4E2Kv47EUTHXMTwjciX8hFLV6pda5vyGc6c4Lz1kt7nfA7zoagsn8i1cJUErHPPUzptYGpPMSNdCzZ",
  "key19": "4DqA9WMV2Fx8sgp4J8WDBsxGzhBpgV5TffJW8TaQmszk9xFWpPwNB8auwZGAgpDPvZoBeu1eCjtZJNfTd5cHDd6p",
  "key20": "4Kmb3suaeTPyW9RR8prTHxdRLZ5aYJYoK8heuQxxvS75qbfj7PS56vCderCaE67SyFEbY7yieTS8iU7fZuU3ZBLp",
  "key21": "4ri3JMtqMAyrm74E3qTyVsDE7e2y737hVqFJxNkZKfhpVZXRJEYyWcdMaTmPKPdMKafGiBzxRW7uw9GkMnuaczrK",
  "key22": "5GEN6XoCgRNJ714QPRxrvZ9XeWwxStdy6MMiWjMKiGR1PbTiGbfEs9TvLyVjMLQFRVP43BjTYKksFfh6dsEbzZrS",
  "key23": "wfbFn7iG3EoiAxTNhvRts2dSXucZjzB7tjhfTDyikJVXshG8i1qcWHKw4v5YHKFhiqxk88ARthbc1arAjSB7eFh",
  "key24": "3sxdgTiNUEDnhnQmUqqXqDGia9fbMzQz32YwFLPaSrEo1HiB8QSg8FLNzLo5rNst78ivWNQEKVnNw69vL9g3uyGM",
  "key25": "4DTGmaNojTjHEYroBzh1CQqNuGi8RnMKTTfkt2YyhyLufY3JtD3AgBYnCh3HLdhxcChr1YVvZk7iHSQFGHDkgoT4",
  "key26": "3As2Vj5h6WMaYMBMvnLkxLjikX5SD2CM7xx7VkkXKqsXsfdzLtwy24937Y4nUmcy6uqZrBVEzGAMbjECMpGB6LpD",
  "key27": "bDp9Ws9So38er8gqZcAXSwoLmivgNS2jAjXARtzcjeXhyCnLu9ZawibpQqsKRG3BcSjcxXeibFSrggtGZNup44b",
  "key28": "3ZcoNXHyP5PCbN4NAfhdhink67aa7iU4uG6TG1QsPrT33ZahaBu1np1ee9wvPxJj3DyK3bMhDbCLV5k8rPFpGB4B",
  "key29": "4VrKDaBsJ7Hec1RKdBpnKwGZAQMAaFfc6fyFaodjQhtZsepehN5TfSsW2gJmxEREYBFpa7Wy42AZfhh628etuZbu",
  "key30": "4qNodZBevLLJEHSkb9tAzi8Dypab1tWaRCoC3CXEQjeQaXC5wqEJGRsdtbohvgjzETKnTNSVAK6fYGh59grfwnSA",
  "key31": "CyBDHMo5jaHaq3fPkqeyitzufR8jCMd7W8vp1yACjjEHpfqy5bjiZczSfzoEvRpKjmQAUKHD43ZFtbxG9VHuywn",
  "key32": "2wXuwvGZPTZpKEs3XTFMa3Aevqnx4kbtfGpSNxyigGy7bMtPzSyrBcNGprHGcq1TgKP1EfYacJvmP4g5GDPMon9V",
  "key33": "5A5yWfiPvPthJ8frEhxB3x374kDaK9YU1VGxLUKXN7Y965FzYQmMyHcQEYyGQfDGVxnUV95tKEH5QWRjJFfF5j1X",
  "key34": "4vVfU35Sxw71BNWGf9UbQd2PAjCsSyLuYpzVnYb5h9K9QwyMo9QDVdWZnt5717JXQjQ4MTJDYP3Zve8ajQ1fao1j",
  "key35": "3xDsUsouHdafb9xmT8rqjCkhWke13unJaAYaH5T38BQzFqS4Am5Y1BwuUhh47a3xXt6dgRuyqb6GL525esggs7Qs",
  "key36": "5ZBqo8JUH2imy1xGQeUPw5k7dGHjHV3Eri8HvAMuKkdUhwLRsokyekVP2gpoh8HCVcg9BeV46XsSWvzaT4WqnaGu",
  "key37": "2VgWsRz1p2v9t8vtub2hodbE2JpqB4NncNLDMd6wXWmg4aQTPrzt9LoqV9sAFnXp9vQcZ28NCSuJRUaTX4tivdQM",
  "key38": "ENNZ6MnDCmNxoy4ZmndNMUcWhU18dcpDZb7jncQiYbgzUqx3U2eLF27AvFYYHjNsBnLrJzbgjgrZcFAZ56NNBjh",
  "key39": "5jPPB7uaALj1ySpaTrn3p1EXhpuMJJVWgzQ3eutNbJxzwUB2yjxUBzAnPBB2CcnQgxZY5AGHKmM8idK7N4YYJbG4",
  "key40": "27GT2b2aXpdAYBiHtoT9nZxSCv43hHBQ76976WrytmG9TB2ktnoRSUvTWuQeyaCn73raXKssrpfrEUDAEZedexkN",
  "key41": "4kpqE5jCixeXmghnrHBxyDdjG4Ce1dt2VChWUBy7EaqXGaLm5q9aRdfcocSu43sEH3gtvshhs4vfX5Dau6epPBeE"
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
