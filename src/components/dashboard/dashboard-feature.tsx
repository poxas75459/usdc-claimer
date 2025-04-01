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
    "3JDsP6JztZaYxBSohn37r6Efcb7aWHziazKpEQwhmF3oZvdUxKof4rgHZqNcQZ3G49pXR6PqrGL3RJ3RFad8UwZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yf5vf6ydHQ4TiZDzzHECVrsstxbJMm1rTXiDVE6ivYN3fmX97noyuQ1F6vqW8cxZDY8juiuFDPtbRARHz5uh9cp",
  "key1": "3nX22V7xugYe81UqwKQjzrm5DYUavixf4kL4DqSoTn2hGhAWZ5pXx4tUr3qCEcZGS15cpUqVvvRZjGRiWCFoQvva",
  "key2": "2wZgjX1QbUc2yMFhrPX11qsdNarh9Kzy2R1MzhwPkmoBXa3seFYFd4eWazhgvBz6WnLCvWGYgkKr6a71DGxmfbZL",
  "key3": "5rvXkuByKNk7oa99R2rvaCw8nEaepJem72fHCmQ6CVwVfdvCU8UE8kuvPXx7shvSBPqQPPmENbh5qa3fqD5FZwGW",
  "key4": "3tnqvDCTjGYdK5jHWzsLrWdDhyEPFQAqsdZ9oAAmAub6YdNowQtUDQnUXGUY8V61HU5SmP3Kh4yr7LA93VzSEYes",
  "key5": "2P2Lqd9LKKGvnTsYJPo1B9cak7dNhaKdQD8PBgYadHwvik2Qs95LnCJ95UbgezDThv95XDH6eQeDJMgfgpdbyVpX",
  "key6": "fS6dgSC5Z5qYy2S3s6Vp2MjEbstNfhgErAErj8jMgTLng1g4FVPDhpD9NwSA4Lc458XKt4nSxcXjPqoLCM7v431",
  "key7": "wftqB2MKcoThmyy9dvTrUAs57pvfnBNn4KahZTdQqAZWauUSbVp8sUDSYPTpo6R6cgmnQUbRarcCxptoBtws743",
  "key8": "36bPC7hrNmTeKer4WvJw2um8ogY5HjRtAMDKBNPCAfXDZmddNwWRnq1yYzqiE4u7zr5RQxuznkGwVD4AGmuroS48",
  "key9": "29W6tj2Ce1opsSYAKUmFVjT4ym2CaeUFubHkpZD53bZG1QYRkQhZgFSF8XE7jZedNwbrYnUiEd1Scj2bX5L9Z7hh",
  "key10": "df4hjxe6aSdnGkF1t2njX5cEHuMyMHBZ9Xt6AtS3s77CEYGo2qog4oxp56L29GgxykGisyo9q9k1vPTCZJS8NyZ",
  "key11": "33wcFbGMKQHkmt2NtV2bUsCjGLzmB2yorbbMhcnxPwtiiAZSXyTvZGAphcEqqAeq66ohrQsoiWbL4utHcG1eM4cb",
  "key12": "2P7XWwyFeB8KX7mguJjRtTsjZpvPtHAEaXF5tLGe3bqJaDKkBQkzPkbVFrejbLp5dhsBq6X8kuVeenA868NpRn7X",
  "key13": "4sBPybpd4DFspD4an92vTqoD3aGVtPE2JwC8kp6aFT1wp69LGpYej2Er1YgAAizPkwU5HNSaNUopu3mseStJkt2U",
  "key14": "4JuGYftFe8CpqxbDX8nUp172EFt2GAXEe4ttV4TnMNCtgAkLWityDTLate8Hyxqsz4LTuqjGD6SQYKzSUadrBMFW",
  "key15": "4EgnkfmFGkUKPKL52EZeDKMyEBtkpDWVPgi9De9SQwxUiSiLkZL9Arj4TzzKkKZAsRTPm2r5oWaXZdYugaSS3aW6",
  "key16": "2Uvim9pQkEctqMVHsjcfc8aLe98u4ozSrd1imRDnjYnLrMYHrLhi7tXpF5UDqAEckTt1G54uAMXNpwuTb2WEFNGD",
  "key17": "4cmvpJEUtZTvzVX4x2Z4PdaGrWkd8yjpN6pAqrbr5E8kPh27b8Ju2z6KTpMJ59GLZng383MXeaDQnF5RNSpue6w1",
  "key18": "5vdQo5DHm3DkrkiczGAYSVhabnkqiuvSXHuyeeCyQDCzUYqRA7wC6c3GDdaqX6SvQMoKC57FAK5ia5KEDVQFFDJJ",
  "key19": "5nNzvstALheWSrMZRRmwcw3DwY8MigCQ2S9RmEVqFgwxwtbGuQygZEK9KofXX3rio4zzDcLoWuLG4bGwgHDYujyQ",
  "key20": "3AVMCnA85NR1BfgFkLzZfbC12eZs5riKx7EhZH98a4SaDYcApkGgAf2djpELJ8RiLxKmTmZrgbBP1WC1WAk7Mysy",
  "key21": "3VCQgNwyaDCRwFLuBt2MV63ZKBsCiYdKc2ADt3KBYAiGDxfAX2VyLxjpVpZZRQnoq6eXFjLQs1izFkBvcoJvbBcv",
  "key22": "3Si8ZL4qjDkDu2Lw5diwjUm8RYLdRX417CCLS483H36Thoyecnb2zDoKVouKUmBcmU6sZ37pJYatGV9KVJe7fA83",
  "key23": "2CzC9op2BKaUNT4U9SEYMJTufkKhxvJLzDz7Rt1Db8b2SH9qxkdJvYNdvFYv4aK4jEwqVo4zA21MYbknMJzdsoEJ",
  "key24": "627zf4vJR59W5h6HDyykiibUfqxSzmVbyaoNoTKWnHywEkM3jLJmyCWthEQWeBwELnmgVaLraA6qStvKRZytvoKy",
  "key25": "2tAbavRdnq7zGNe2EJU45VokNoqnmZzC5PoKz1UxBt3Ey7BjXGRU8UEWNsXdR2LCza1mS2PyHcvQ6UqFcjK6Wkx1",
  "key26": "oAj6aqymSsFhz3t7WvPLZvM8NWtvspyEiBMy5u9SrYPP6WSozRGqhfvNwE3fUK95Q69kjcJgRBp2iNnDZejQyXa",
  "key27": "p3WMJtDUcCHePzm2Ph2Ao5aU5z3NavLLCKYXGzZuxX6pFK3a5gyuot5TKeV4eiPgMvQ4kLc5w7Xty8Xg14Y2Z9t",
  "key28": "24yfgcZxAhqb22NgbdYCU9vSsGbDA5PxgBJ6iBhvJwD2BNMpZEMw2DunWSmR2wPVCCHsVoVbEdYxp6DRSFzVerzW",
  "key29": "GZXhmLi2bAzXixPVHzt3dHFDRLc5ALY3YRY1cavKdSya3sxz2fk8wmkXo1QA7hLHXF4TDQ1PH2SRdxfD1z6myzL",
  "key30": "5ZzYJ9R8zR9hVtqaQvTcuSRQzVFGkz8BA4Ws1gkeQRyD2twWbnPcmCXmRZrLPPoGrg9pjBm5XEzkHJif9ak32Me5",
  "key31": "3T7AWxSqo5aEJ7Q6NSzz4Yq6VamUAPGz5fWzgv6tEn6fWEcufnYNKYi98nM9uGScejktstwjP5yGizr5bnwnsbV5"
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
