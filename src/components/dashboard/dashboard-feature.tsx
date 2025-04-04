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
    "4WK7qR2cV3EdrXSw2qeY29oaorCwmK7qxy3KGdsxjSSeyiUcXw3rVoT3we3Fy1H2wao1gB4U7tAmLudJWrrKWpb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDE1KQ86enDhaBN2UFHB613zQKzwv5coes2myo2fuU9anK2HJYaES9GSKjfBLdFM5VDJ7rcfhyndqS6chvC5mDA",
  "key1": "43NQjdsq2ZF9jiaZfXF14A81K2LRfmabavVh18h9LV1voPSSt7m8XzN5jVKS1uS3mXzsrNUVYzHpxKJ2ayMWAx1z",
  "key2": "2uaoSvXzoUmGey95ik1r68yHfMTj369cy8Nw32zCUCxsaynzBxHEpWMQwa7fJrZTbm5PrR7KdR6sc1eCfyVysBDa",
  "key3": "2cHTEp4Xpi3SNfk61sGFhJzRaXtByWgQ7JRQ1Naa1RdZPaK3EBxMVa9p2HmPPxxeRaG6j5WYMpTUsWY98rCW1Pu3",
  "key4": "2Td5xsfPFGy2kcbvHAnxQug3SjsFMDJ4T3tKR5Mnw4FQGhFC3592RnXgpTBuMeqs2Aduh2nNNZmymsdPEPhQ4txW",
  "key5": "36Hw34K2jABYtRCwyJT6TcHiQ4PSRv8NcKGszEPKTCxM7FeHburBMKgRqxKtGU3Ruduem3WtJ9SGihYL2qwcFyZJ",
  "key6": "3eLXn6vG3tegEU7TUSGqDobvijKGnpAEo5sLBZmHjCy4U45LbDsrNYZ4nne7XZJRySPtNto81JYMtipmfDLd1tPK",
  "key7": "KtW6X7SoonW376pHFK4F8egUmNEzhFu4VA2j9voTDMaES71UbBC6Cr9y3qDKYJtGgEoimSMbsvcBscGm9JSvM4B",
  "key8": "63ZD3X5dLqcy48vJwGuvMLBJYQvYwo9yY9m9wrZk2L2vtYakUKG1riQ2BgPArjcEP7J4184YMAWWdx9A6eArQQj3",
  "key9": "gnpXQTARMB1YAgXnZqEKhRDvJaPjtPAovNXNTik9hCSRcoV6FRVpdkWJdXvtF9emSu6LgY1aYbH7r42gd18C1Ak",
  "key10": "3iiPeahmHoud8sFJfJ9usT3FeSXAmSHcYhCU3UYSth6Gd5vsdUyhoJ17ziSGRB2h9s5GoJ7hYj2iXHSu6bM7upQR",
  "key11": "3Bs3T1K2oLH1EHWdQF4BwJNZBCK3Ak3kaD4QSNb54dgBPzYFYPwMxwbhXBbVSKMCoJ817Uwnxoa6cUbNx4bYdZf8",
  "key12": "45pWyEyKGDgucj9whcASkY59EZT3EqHPY5yR4XJLrdwEyKoDkSiKChRxLyK1esjPyfXuzNEuy9yFEXK3mNLhBuNH",
  "key13": "37Ypu3rHzvbTcdH5TeTyskTb3K9iCnrzFmocbWPDnEJgUPZGyEBdrnH4bQoVH3TNwUGGjhFwfpENxjCdwf96Qi51",
  "key14": "3oiFhXnQmHvhpzgHxeQca8zCahtnq8kbWu6TJqAJSbNkAQpbupUPY5a91Mipqs94NErrMPVgSKDfuKydQJ57BKEq",
  "key15": "2qV1sHjaCSAaxoun9hc2c2GdtNNjt7Q9ybUQaNPgeFsNpNMsJp7EMvuMvAr5ZBn1oNWHGeXTQSExY8H5Wq4nrfyw",
  "key16": "LiLuSjxyryvwzfUKJDc3axgreuPVUKfTuHHjcLNUGg4ysbs3KCDdpCcRKbD3xJAjN5FtPN28q68NHDP2krEr5rn",
  "key17": "2JWLdYA5ZdvEDttXK7QtuCumcrPgpKSRRUnJyRjKzmMRHTESEA8e8cVaQ9p5TkD3HpKiscAJHFFuRBX1WG6hxwuT",
  "key18": "fUYA8Brjgqv6njhcdvQKUEBhC6b5abusEsm6pNEfj5RErNuWXyqgmT5rsGrcCTzT8o3SzE8A7zZib3xkxPzG7ea",
  "key19": "2WcMMKpkyRi6eETHrGnDxYxito9aySJKsf4CBdhJ1wXooTazcEcLQStStPgTt4QMPZyGYmxue8iumWmDLdgyKo5s",
  "key20": "3Msf1VRCkWSh8A3y1VX1pVSGVmnUmRyFkrJoGGJX5Wv9mGYoovrB13Y6SThR4twtzjfik7iVW8khCVynmsXL9DVW",
  "key21": "2qMQKxeKchhLL8QRnvKWGKg4ekLbR4SMFYdNsC94p3LvewzyBApTxvmukeykQynH7Q32kWAvu6W9CM1JQx9Kb7Ck",
  "key22": "4ZEATuJDd4LPwkhn4CnVvofWKe3sobMLsUGbkq69iprVe6zgHYuFCBvc4t3w3QLEhZdRUXPv5mGh22aN7BK2Su4F",
  "key23": "5ZaRXEtewToeyN7XeUUKc135KvgA265PzvZ1CYaSVjPvxYV8BL3Us2NYKV9ZWZ5KhAWzMcVPitMrWqtqDR3eggfW",
  "key24": "47UNZ7nvdtmSCK263gNXCBnnXwvbvNgbjHW8ebozTMxJZWx6nabainkYmo6m6yr6knpDKnkickZfNb1p8Mir8NXe",
  "key25": "pmCV3LPbCsVFbkPsZQigSW37zRXaqdhX4eFbc7EwZAQpe1DwgR6dawn9ETmRNcqAGsuzNEwaPUYnwk347m2tJLB",
  "key26": "2h8bZSRGGjdKksvYADazS1LWL3DcrRPbfdw7asoFrSun1nh486hK93qXTqhrsy65xDvGxQJKSmVKNDDkLuMtZyZs",
  "key27": "4xgmj4swZHmcMdCmiDNDgoDqvQK7T2ckkjzWBzkr2znpHawwYmWFvS79GcSnf211zfu4iTdTet8RcgwzUNVdnvwD",
  "key28": "2MGVsc5JQnkiQLu6LzbhUcavjqJ6stn4thkPJjiTx84RNqwK3dKHz6DHPsWHCo6DmUmmUeMu12beL7QgWSBUZgS4",
  "key29": "2MyYmUvDhaBA5FtQor36pS48P6eyqbA466iiy17H8wa7JaCjtqhrmcP9QVAeo3b8mgbf8zaviznqGZPgqWfAmnHu",
  "key30": "VoEyyxVsjGLHtpfjKFrv6qbNGgzazrtVMPR2Y8BMCbLbfayoZxiCc5Ugt2yMVjUZ5aJT5NH8W3Kc6Rtv4NwUxph",
  "key31": "PmVgLNMWcfsavor4hivhJ3usVnUVgNHLwgUMVDV2ZKGf1PgiEus6q5NJmgCK6cTBZr8aAG1uyHbEtfZxEzk8pAU",
  "key32": "ZHgk2wgqNQ1iJGL6851Sozq9KHFzLHQ4d5nJoFKPPWDJRNsy9BRkrkFGkJnUEBGNPC7boov1d8ga5rYcsh7NXvR",
  "key33": "2yvzFAKf4kbtBEhvs4mhqLQiH9Vm8nRv9XvzZW5QJBYzkrbiLeYC1ZM6jLhwK4uckNPb9zQ4GziWt33UPAsismqi",
  "key34": "4Ge8Cqvc1zFzNFBE5AcUxBw8M2XwTgBGnvtG6jCLzPK63r5sY4GHrGY3fzvYFNmpdbkSTmcBfBJCKZFpP7Euj8bg",
  "key35": "7okAkBuFtQtQtfAfHqsfr9ZXhfSUKLjJX4kxjTKYMJzmkDqYbQTzR23DJaBbZfc7jdhiQjLQmB5vR2pLG1PCyd4",
  "key36": "5iaZHjVSqbRC6moZJFSuq9mQRCEFZDAaSyH8gwezZsGB1W8kYj9D6p2vYrbuXbq2n139tKfcxi1gvRLqMEBCHzZd",
  "key37": "2JjzUiZg8QzfgCsGx4CyMuRARnQ4fDwp3fzJDXkMQnZB1udtdkmQ7dJDGUJ4BmTcf2Efe2QzgwmTtsNzThPaZSNf",
  "key38": "55dremkY1d8RJC9z9cvtgexcv9q2PbHei8T2DRAF9b65jSJBLH4Pn7hrBPgzExNtFJhcyBVh1uq619mSan2G4txX",
  "key39": "znrroimrws6Vx8vh3g26ZHkoJWidtubnh9AKCsvvWEaVM5ADBUXCse8jL6RSLCkTxSZHrQNpnQ4pnQBS6aX781p",
  "key40": "42fM7kTZXFG1LN9jbCKte3bJwSFYsNXwZFqLKuUtMb5Ssjf15QrDW8VHWdJ56YkkGHU1HAuzWTA3iwLTyv8XUAZX",
  "key41": "2zABbzAsLtKQsjABwCWeZFCoceX8Y8kjHdcyyjhG5Fr5KerZYbqSbRHBQWKjkzRd39GTqhG31QAmh98TUgyki86Z",
  "key42": "4UHtfxK2fGkZQjp99UWNPokNUNpFSoQVSWJ99QWyg6jaAXsLPX8N5eK2bp3HcaziezcAxwKkXgg1Ub24rHSjkSEg",
  "key43": "5htcHQtFnunTsHppJF71yaZiXtgguNwKksLL3JP14eN95Nt9rPTnMNrtu3RWw8eAw8Lt4aRBdRKxvWrsPyDNvDrE",
  "key44": "5jJvWR1cbDZWQYe6x4vFsgCqLUeCrjS9nDs2WG562YcuDmxFawioLEqyLsuqN5aJnEniedLgfWynX23wfoiJHw3x",
  "key45": "67dY8XP75i4bbu88vgcQu5YCZijGyNmLf449dqnfkQjqTai3m8WyADUEPT1MfvsYvRTS9NMTo6Df2aCNkNSUUVNS",
  "key46": "3Ga3m4STmvhMksCVc8zstQJDisHKSFbXtFjwAGp7crxRyMmaWfSoPEut1Q1HRS74h8iHT3eDTK1cis5jvacLFdiv",
  "key47": "2X69M364YVMYCQEweJLQHTuqYdWNcMp6hS4t7GBBHKNHQJfNHMpw1R51AwFxsUxJZLvUMoAzNUx6Ke7tqrw1QBZY",
  "key48": "4dvyFcLzx4F7oLTHx7HiLEsoQFoupuJ1seQkNMrE7G1DpiuLaaTy56oC4He8RYPhQBGCqKLy85EAyeQGa2u15awH"
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
