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
    "5yM83s5NLpW3JDppeZkUK2Ki2RZDyb5521tdUzCGwNjKdLnzw5XeKVRdy76BHNjSBB4nx7C9b2ZhWp7q1qoNAcqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9FsA6Sr3cgYxkCmVxjGTZr5i88Pz4aNdW6j7keD7WheB8Kipa1nkxA9zbYuh5EnJMNXm2ewewYMTuRj62jTmfm",
  "key1": "3JtX49kFTtYfAug6zUkUme2BRjDE37fyEXqDE7WtpUM8DxAwiPmmGAyFz37iWwaNQSP65VG8wrxXDf4Roy1sXJRe",
  "key2": "4KobrXoDDkUTeSEaarJuHsSSHzaKRREb7AJLPTBQNWGG4bXxnqNBh1S7P31KuPbTtYmqpV3fEo4NZe5zrDhkvamG",
  "key3": "3S2PQBMrr4spQAZU1jKv7r7BF3VnRbCYmME8Ese7QcFzUG2rXSPNPoZtipdEaQq7NfuDnCtwph7q1v43chzAXfF7",
  "key4": "2dFowynFDocES8ZtNjxC9FsXpc62QzKrS6rTJA8GLUoXhQYTc3kt49mQ8hxdm8kduShYd2v2Ji7yinqQiBHE77M4",
  "key5": "35JoButtum8A8uVUnNFQZKSQs3TcCZ1j3TTLw3qK7BbxDQcChbfTYLKSaVXkQBxCU2kCew6LQZ175vgfSiSgKqBM",
  "key6": "23Pm1jMdiGFbADngigMHHe8V7qkfWp7x8HUgc9y1L1Uc6UTHNExUyfJBWqkueKAJS4wNAGKAPsRUvB327rpt4ctg",
  "key7": "38DJn12Sm2QTD5Qb17xjArErsYYRLe4LeHdqf7Nf86zeyER3aiEDGSdrZRmCEfykFoVj7KK3PunbNN35zUb9XbxB",
  "key8": "3vq4AQwSkfV2kKtjFDPzTM4Rjh17Kvc4TgdkqmnVwuVWEcqekXhV3GQZg3UT9JKbUbkQ77BgtKJvXW8PwcFRZNMr",
  "key9": "3Bi4aoMTkZgHYn6AHpZyvAsmyvvpESu77nXhTSamQcvm9LxWD1GbPzAjLqeXthSRpH73HEpxCyqwvRATnAvNM4Wz",
  "key10": "3x1hWZrv7MnLzCmHKyQxVd9iy81cfMkg1vzfNNygarRAnGso5ZhqhmQogcGeX4NZPw9dxTHXtwkHgkzDn8JMd3f9",
  "key11": "5QXnBAHqbDZNWr8K3KYxQ2hMfWUpSwumWrTeTWNsroV73GHkNwXVAsyq4Hrwj5Qi4VvoXqdWqMXvkrfGuXFVsMox",
  "key12": "5dvTWN7YJGucaKFaiNDF2Ci1fcBixktWPgCa72GocAS6MqpoViDCzzcQw6bZ2PwprhdFvqBDaxYYNCXk8Px8BmsX",
  "key13": "5Wc8hyX3dtKjQAHGooa9i4GQCMzP2yWarFo1TXrZy51aoRC7ng9cjQ4AVf99FmEE6TEEu6dAGwsikAcFjgurpNVL",
  "key14": "2eqBcpUDhjWM3YQjeRxQFLJYSvYwsdXftbWCm5HxD5aQmuT7ZvxppWCjA6YS1WAa6qZ9dthCHmo2D8Kf2nWboS5n",
  "key15": "3qsbpRfKgiZQ21gWNvRXzDLUnzJ41edvYNj5jR8YhNsp9FKycCrJNzXxw4fpn21WkXbUB89Da968gyCxTBRzYbUT",
  "key16": "2Lm9q3fN5sRR18M7vowaAViZgC5RB21x8EWLRamUY3WVkdLKtsBpvfstRWXPwzYwxpZdtb5MQAMqjCkWfPprV1Xe",
  "key17": "4czCf3VVnXJiUFnHwAZdDNrMr9DPZiLNSwJioEgt8GFCWxGNkkdkGryTgjr1fU38wdrh5FaoUzAfFTKwzumrjUoP",
  "key18": "5HAq8hUbqww79wMs7sP7cNvrrkQWBr63HpTjoEKsNXTwxvVzDAK717d3wMyJ8pGEV2rWPT6J19SBe87yAbwzpeAg",
  "key19": "UcaUpUGq9mdsqecHKM3x2angBRpc7VJ42VqU3JqPD4fyBkVCUUyNMjJPkrmERtetFy1AihPzBcGDDhYTUfJ5oFq",
  "key20": "K88bvKk9rCsbTqcgYyL9hDVnHPHjLji2zL3SkzHNYT61SpzhJooCNJD5DfsHAWXa9NHQtaxgB1rxzewoNKg6Tmd",
  "key21": "4Geramjdqru1VeFAUeYDAArmLyzxjv8ojomcPfPiG4qh4hXKB8XaMB79RrSdPronhghAEikug7ZmHYk2brotgiwj",
  "key22": "2R4yefRWFe44DZRa58YYH4UZP3zBYKxBNoS9x3dTxEAMYwNP5nXNB8XfiF6qXJBuC929uPEdHk1i8T8JD2DgPMHS",
  "key23": "3vr32R2gZ4dXEKURLLUaceELYdJujqHBansBMN4PWKkFXta1GHyDhroakoG3am76HyyHwHmHTf7J7q8KrFoSSpx4",
  "key24": "X1jtUoLmeJ8zymdEv7wmUq61hDB1M67LGQZTYA3fpmGpGzZzLKDYrCqV57dA6CQCNPioqsZMQG79c77mv83qyWU",
  "key25": "5A9zNJs9QNZ8sqFefjRKrv2gBoV6xwWhceCXbDS6Z9CLhyWfq9JCLkV8o6WXBFQgPEEBXaNgBSVQsLvp36ez9nVh",
  "key26": "2NjwjGQcRVV4msEjSfRhYwo5uYYE9CTtHTrnrJmFxNidTifdBzNRPbp53iNQASqdkE3y4ZCVJ6Vt3vLVNdcgqLRn",
  "key27": "oP3xL9T8E1cQeydfVWZNVNyWBzrNxMVyr5vdD6oZv9kwHEj86rFzdvX4B1EFgohnX4UH7gMi62ebSFXo4vynP61",
  "key28": "67Gbd14HrbYNJqismTTRB6GwQcoguoXMyzMcSBmpjdngNK3iey9vsYMjsXNFKHZ7rFeqBK5oWhqiVsHsypTNYEp2",
  "key29": "4VpwhyK1jeCvb2W8kfZrBLSR8fr9XJFpJhd1dDLPVaqtQr6Myd9gJUWxuF6rSCjv76avN9EMXiuDSNtVRKTCH4tr",
  "key30": "5wSAhqhbS5u13xtA5L3ThxgMPcihwXefZP8z7FLhUWXdxpfZk5WzVNgVacMm7w1hMwLzznWJWLCcVtgVc2U6dJyx",
  "key31": "2t7TmS9EbJDeH7iwYHCyXCU5vF3AwJzihqsvynvyc8sCQ4om462ANXXrAVVrcZfrwVCJDxsQUqmhRxA51Rjqq2va",
  "key32": "3o9JJNuM1k1oAPGzkxAQGxwiBpoWtoGg5kJvLzkfVP8J8c2ntdwP4hrq4WzE9vxv55WYBCWqPZqGyASFErexFXW",
  "key33": "WzDHsSwhPi2sBL3UGjSEZVByesdqGHaduSwM7KEEL9zNkK2tPLeegxVmERTWATLq8QKQMT7BkbQpwV7QnHabtKz",
  "key34": "57ZSyDVQNzkdn1fXT2hwDQd1QBQ4mTV9opYgDbjiPk9jhcWmhUyjSXayWXtDw42pCyyES3jPpfQ14o3VjtzMqmvE",
  "key35": "5LknG4xYsvLHW3pr94GR5AYwpETNuwu81kt3woJbojz8TTEP3Bi4qhCDRW2mQoT9ta43PzCBbj8cX3a9pGFYzJVn",
  "key36": "4s5jSETAmr9Zxwus1v5W4X9xYwDoymQdFktXFz7uf5E582s1PJzkmrhvbR2uUA3xcXFGsCGeRzv6GkDQjA1h5Lpa",
  "key37": "2FiHWjgXWb88NWfaWdctEw3nBYgrkcNwjeyVr9NitRSpPbqGWAAL2HBSHcg3uFSxivwUTaLorgB4B4zMbiBQy5ie",
  "key38": "26dBakyqnUq5HUAnG6TP3r278efrn2YxMVXbiX7BYu1vpFDPsMh6zcby1zCatAGe4VKcvCR6p1rWqXum4hmMtw5N",
  "key39": "5PGF8dK3yHqAAq298KJpakpfFPGx7LPsSHX1fr4WioQ4MRMoxkmBNaZCMQPKBnEdBmHHZx1oWzmJU2T9C1Y3b95v",
  "key40": "24DcHn7hkYhpK9dVgubLhP54Mq3Ng7RdCv1CEZoLJwNXGmJQ8SdBCG1GPMiXbZBHRr396K54AXfi7x97SdkNWdQV",
  "key41": "4czEJc3C6Jc9AXNtU9pbkH77xhn2mxU4MbKsMgMCJijBuGRzAm9CYmQwVu9qksY6kbR2mrSoZR3pYUPcw745dg5X",
  "key42": "5iQ2y4ec3m8dDVUDutf47K8w3ett16QL6FY9WLy8HRiWe2ZRofg57WgkjiPAiz5x61koU2nBnfz4tAxQScaXjD3h",
  "key43": "4SVKi1tygVpVGGyhyzwg29TUSi8dFYEKytp3YNTRzjaH1VHQrzrPwu7po9948NNL1Ts8TVAyicC9m9iRupT3E9oL",
  "key44": "vBRp2eHuSLUuvdri21uNcraZC9xt4PkjhHm1PYtGS4kEWQmj983rsVeBoFDktcfte9NFjZNGsvZKQyv1cnGLZSq",
  "key45": "4Qzguduu9Cc8t1336WYCoth4pc41T1gZftuB5Kh6VFMai7tXUkR3ASR2hJAAMjDcKFJm6nk9V5QkrmVC1hzb6qDF",
  "key46": "n6A4d38vadG6pindDJVyRpW1CikMh9Gnh1DjyDBZFC9vsoiujSAbKvCz8HdrNNazYWcKKu2doDLZNE8ZXXisX9B",
  "key47": "4RMH9wLoq5hr2MEceEziMx88Uwydrrp1zQCQ7pbtHcfWQhBHuZR5pYX1XNodLJqpyRvRVKeggeULPRpdq6Riyjb3"
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
