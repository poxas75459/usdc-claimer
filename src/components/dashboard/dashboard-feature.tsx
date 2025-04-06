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
    "2hzNazFNUSUnkJ7xPM6v6KTmNKdYbe7mNSdk7V2CrVjCgoVQE4gkpgUNhPFPPRW2qg3u9QWB4491B8krF3NGVhGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mP6uZCkQDLpQ1bKsgLSbuFuQM2MVL1FPntccqt2CiukcGfXu7a5q7uTAxRx6r6ajvBXb2VunQHeZb2MjU9kKLLk",
  "key1": "4HFTXM7VTVJyJ8x9n4LJzwk2Hpiy3aWyj1qrQMxZXsRgHMHFys2rdA77F9cTJuFjj2Q85U5Z9PjqRKbBDbzCRNf1",
  "key2": "2jjg9i7vmFskfv1tqrXgnBABNqTWY1xYP8nnXBTnFGasWdbKcWYsScRBZKjZoh2yWcVXjgWorHh4hXBS5mbhZ5op",
  "key3": "5xhYGsq9n9mgmnQnL2g9uhAz8wCPc9XJby3iSa1xpx4f73UPnMZb2MX16DMTRSNgbAkFSDraep3su3rduFgjjQMy",
  "key4": "xPo4mRHwuM6eR1SQ8EaJpYx71X1fEb8GL5rKdVx5Mrb1uznhpoTSE7N69XmtMPGPfvEshcqyL4S5VpPzFYxnDiD",
  "key5": "Dm5inb37WLgUS4K3NJo16Pa7ChMyvjdFZAj6z8m89MuV7g8viaYxYWXCyQBrpwSQfZvRLEUkg6aPPM5xwM3gnJG",
  "key6": "41bx5deuxgKNqpAWenSd3Keuce3Ffg81ASQt7ksTAP3v2meS3G3B63Qnm9C3kvdw9jVjMtJ48FdLskzbNVwLz2zJ",
  "key7": "2L1JaU7KaG7VEsLw5LHQxNesBuL4uUEgeKTZ4pzU2g9XgjWaPTJkF725VzpCap8DQof5MZCXUc4sMdXaMuxBVMqS",
  "key8": "EWfoGGb6a5ahysDm5TNuhfo4YVjDspxnudWzBhSRWmmGAJWsG4ZijVehM3LTjytfsv2oXDBBm72EMCkFwVGEuFy",
  "key9": "6nQ1xwBrYH1tRBygVXPSD4bCG43RuMgvKAfUKWGW9JdgcSbbRfAF64HGzb56CP7mvS5orfSzHjZoPqdqxixmPMt",
  "key10": "2JybPXBJjE6W8mQeyQZBN3B7FYsa3sjkPDe87M4CXdWeJuERudtD7i4MSL72vjRgX17UCFiCKAQcmLFkixt9Avof",
  "key11": "4d6r1ZYfNqTv8HBet4HmDhi9sDDvB6m6TKW9x762F2ZR85c6CdCFq5MQcgb3hHeSd1LsqeTaMpm3g8JE6cbAaDUX",
  "key12": "5YGJUrJLXja89GK5VijXydnV2ykHSWrqPRZ1suSiT6hwzskB7u6qFW6gyCPw9ygjsxAjejCaSoucGeZ2i9VDW9PV",
  "key13": "2hL6cvwPBHTersFKKNbc7HdsTv5ymNoymjwNPYemXEgv98ZWNnZoqGji93aksbTqRP61LwK4nhCvj54wcRS9Xrra",
  "key14": "xHUweghvYB4oAfWyCXvzAoeWLxc7jLBcUtiDDtiwPtmaYm4c2NUvqCQELzFQngD9GEKVaGprkFWmBrvdgheW2Xf",
  "key15": "YdvkhMdyc2qZpwz1RkW42VN9NiqyYPUUKCgRhvGcvnveUcXzW9t1WFc4SjVRVUPyvwQ9sQcAERG8R6JuAL1wNY6",
  "key16": "5u65GeAJpb1LtZFK7CJNttoy5sQf3K6EjijFwaF8TpTmr5VxLc6ZEbLxjM74K835oLQCs9fzAmhysMJhoY2F7VcT",
  "key17": "2S7MgMZSy2mWwy76A3FiMyVAXNLuDsWuRuUR83ahAdzpXNfxVo3M9WNqmW37PbPxC1dv4PEkukrVfYoLDhxP74MN",
  "key18": "668iBBsQMoGjreQx4YLYKua8UNiPvaL9iWbfyRcStrUyDBLhqUDwpL9YWhtrWnVn7174L6U5JYVSP2RksfsUAJtm",
  "key19": "3sE8SFdNDKmApqCfydsRZQWdmjaTwPk4vNmZpLwZ8THYUJ9C1JehMZ81EUKSrra5hkzPsS1xiQHqYseREb7azyer",
  "key20": "z9LT9jULdpsbqWgYoVNDWDrYzanQ6UGyc8yRz4BHmo8ZYdvooriE42fn3AqLvPZxqED2JgANqTcFJ1YbfAUGbVx",
  "key21": "9Socpc6WzAyFBCZCFFhPssLtCJkqNkd2sfi1ciZmRtZWVR5XwVzrJUx2tnVKn4GZmDbGswopTYrxGRwzBNdPdWd",
  "key22": "42stUduaATVBZGsgbQiBweiYtwBzbMf1hT3Y5dnNFcvQuC9SGcGZvKr7LWENYPmwWjED6eECDygNdfrFvtrt2Swq",
  "key23": "2ZEjQg9mCKVPNRVp7b8uPvJDeVQT3RioAVVwSmRMttz4qvYN76Fnpz92RyRJs4YMx41k8DRzzwRDGDF62B7GEfwn",
  "key24": "3X8kJHDvwX4AAx4JrfjHbsQCzcVMgTwk8WEtdrV44LSRGsWXunp3XUNNETcms4VzgpumpwGzqNQbHFkGDpjJC2Th",
  "key25": "3p3T2pdsBVTAK9AVxTVE7tmSNEzcdGr9jnQEFk8Qcn4QXaQ9CvfuB6waFMk81gqfc2SWeA11SYwgw9VV56d3dxqR",
  "key26": "4rVTgyfgyksUSMEZuYtQ5YaLKic3E4H9ruvVVhX9abuc8zyDGfZgji3CzobxhvBGF7JSDyGUMPsDEhdH7q5ifMH4",
  "key27": "4XX6qGKUcyjF8xKWEd4noUtTdHXrrmGPKzDgFDvMgwAf8a52GaQHYpWiiA2nKtq5XVH5k71e48NKPhisNCwZgptY",
  "key28": "1fcouYP34Bh53TNwb5sz9GJ5nyKwdufibAt63VBK6F3SD3NeGa3UXqvAMxcbkS3TQMLsJrJJbWQaqSpndkJRzpD",
  "key29": "6u5hmNP7U5jqFyiFx3Xfr9UU67uvRhdHn3mMGUNGfADqSwYMT2fSqwSbtHgQhkMMScmk3E3Jnq8MUPC1LujRsAe",
  "key30": "2DgzQUgQRDJ7KYxqiVVYTPamQueqPjnK4sGTvX3qL7VHcGiHMk22kRkHezVaM8H5cyj8en9i344WF6ZBZVPQKsp6",
  "key31": "4iPk3GHtBqPUz7epRYWQ8DgLKpmJ7xmZDm4nLpFfXMatW938aakoFeneyaR2D552drdzSDxJALDyM6BcBh9HEs7U",
  "key32": "2vujeWxZxT5qq5dNEsdxxT45fq9qwyMBmkqh3fCuQNxCPeGEQw1RwUSLpUYzzLHpeP2fvo2yCWKfWTaWwviaBD8f",
  "key33": "d5U8ggVUWDftNmCjy55u8pGf5Y4w39bpzysfgEmqhg3SNrEdBWEZ6e3SvmMA7tGC5NfQhRSjN2BEdzxSFK4SH4q",
  "key34": "RQJ96wbgh5PMZuVw5uvPcF1QxitxaWwZfxcnUnZTVEaSpJJS6eXh4gWeK8FnYVTKLqpqzkVnUXHvTaCXAHsVCYd",
  "key35": "2As2b4PiAs5JH655wF8yD9fRRGXHUdqmvyc6PN6jqytZNxM9CyBM7GsYccDivNtMPbvNyMRKCJXuojAYTber4ZcP",
  "key36": "2FVXYpQShP7jUTeqtz6GMzQPgKoB8zzo4ZyLTfqWr7jnbHjQtUMQHXswdgYkEP4ZzpC9BPrrN1hWGauuEyWzSjPg",
  "key37": "SBxTnRerX6b8WmhEhK6Mo4Tqkp9Kh5eybageRyFNHzZheVPvDDte7uTBkdHAjhfVMatuK2HYhmDPEJsSPU7ePmC",
  "key38": "qQJct6JCTMCwBHfEFNLG1DLuueqYnfk6bVi6vUNfhm8R8tfZ3ttgW4JuYzeAL4SrhviLv86o5M4MgLwsGkfUAeh",
  "key39": "2p4C7gFGDa5kK5tW7ka4wrJdARN9Ui8dAq5A3jqWGtQqXeBAAPzGkmnn86ysxG11URELMVzLn2ik3N8qZE9jkRS4",
  "key40": "4Ukx8yXa6rHQSMtro7H54UFC2ajw97egGWaeb2QbAfa5mLXSBUFux9AAqypfgYP3DvULQMKcQmBPhEwNs4YuUVzx",
  "key41": "5MxYf4DaQQW3YT9gDN9SDAWDZtqNAXaqPfvjbmLiDZnbRcsFCnsrFzYcvNistRkN4kFP2PMdsifC9kVNMJUq9LsS",
  "key42": "5k817KkvTc3YjEcNJChVf1GJNQRbngXM4nMq5kW8zc19FgYGiuRLFCjFGGacEfjovj4Xmjp6AX5Y7BiQxSjMhMg9",
  "key43": "31bkbFeW4R8FgUxmoVj1AKxuvjboerasMfxChatHxohCRv6UY83rwev3qkdGvnZC9d3E3Ht2FFeM4ES4R7Jstr1a",
  "key44": "3Twj1oa48qvaHc4XMxJFA5fzfX7D5PG5uWFqPiggHGGiXKtguwdYZyqV24ir3jrFATi22eedQUrCjY7bVQntZC7v",
  "key45": "2nhtEtE1H7ubrA7KLuHTaGbtU3cCWD8y5rdkxuevFa3a7dK6nAqWcQsGSSMPgNjvayADcBoc771kYBB86wUCNyMU",
  "key46": "33CB4t8p5ajvgsXTbSChgeZzFkvXGzUg7ZHWtqFWgu1neVHLHeyBxPy1vPTsMR8fGb6upd2PZyeJ7L72PVPsGo9i"
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
