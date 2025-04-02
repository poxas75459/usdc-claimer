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
    "3KuMJtWG74H7LXJGMVXMB35EfyCRh64zEaTKYf36DZikhgZQACLmgFSBgynvzMyABkx3MDvPVAb6jiwxv3cA6yA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QjbbaDREMHKSCDmgWjddvz9XMSNoUmQ7o79MNA5qPYGHuP9eVoz2bQHvsYtuYaJ8iPZTKhMpPqTYXto6mkR3Xm",
  "key1": "63kjkeZ5qvrcgy7ANdNdsBiJD4fkCg6wLnLrCGhu8AVLoxVmeuBgoRKdqm1nkXU7x6fZnb6XfPS6vRZzS1QRyUDN",
  "key2": "3C5to49BWZRZTuX51NoJGvEP68GjfNwfMoV5JCYmLjH8Vt3knQuS9vE5iY9KajhkagYj7CxMpCQr36qi4Qn63Xde",
  "key3": "34bSR2bp1K7gSr1ZL33rKaiu8FB7eBMx1C7BoSb5geGtLyByLicabBabxJWTCRi7KEhGxDvBWy2Q986K7FSnxPrb",
  "key4": "2rdjXjXhpk3vVd8y2goSwrBDpMTLMriFuGzMsQz32dEFCdeZ7nGX6wb8HZ569oPcAsHJg3WGz6rj8KVjJgEmdUSZ",
  "key5": "33TbJ6c8DsCuwiuzgd3bi2xuvWiGh5fAxin6CSQpXuibvukQzmrEWvpuN89SHkjHGF1xavXLL12QUyQzcEfqHEVc",
  "key6": "3uLAwkwNk5XCWaBwvrGz9jmoDKyVb1HC1vQwjkmqAMhWwGWWfWcfB31CMqcWbDUKCfJLM1Da6jvsYgx6RVgsNV1E",
  "key7": "3gWdkJguSj3ej4VsUxs553WzU5wfaNjz7pGmNUtZyxN278w5Rv7Z4d9D3FYxwYwrAjxmUETDVyboWpj491TnZu44",
  "key8": "3N6UoB3p2tgQG8r8VgtvycyQAJacADWDEUdjWPdwdg1k8TgvgWZ9vcNW5THr56KxL5AR9kAK19p2Ry3XX59mtrjh",
  "key9": "48EYWqQ9vd5jQUQme8xmxxcqv9LZ9hbYdxB3CBvjgBqywuFveZ4Yju7H2B1RHE1yV2QAWg174EqmpXBe8xDft5JM",
  "key10": "GMoYzS6ygxbkNUpUJYnGurHnuY93aBCHW8zoapysvr9rU5tJEdBE6hxpXF3YsZhJLrqCUdhwapSrL3XgRJcpkXk",
  "key11": "5EQKJzvGPpTnBAvZpGwRCAed8XkkfqmZwP79Z3c66A96VEti1R5gnMob9qQ56obWd7HoDWKSmqoiwFMv19LDKTmQ",
  "key12": "msGGprNssXNzBqTcy6XmDKFX2JY6vFSoThGUDjpnqYwsiVx11zjVzRMJr1qhkS57Hr9NzQum32ZPtWRpaKDDNWF",
  "key13": "BWAnk7d9gYFbtrXAzMSU35P82pEL3J46Jy21FWeLhthXvKkyXQZuCbaiZ7ubXyojCmk44eFEku4Mc58rNVRTWtt",
  "key14": "3g6n8SZs1J54MfMWBXzJPH5U4LVhzemK99qwGcowDg9vpcdAq5nhcWH9FKgZFctZsja4K8sP41CQTtwvmGc8YBH5",
  "key15": "5jmTNru8RB6m3dzdz4te5VKhpgm6QXV25i5UrR4B1WGn1HgTLCvaTu8tfoBZnDQaqsVL7sDdBjHhCRQv3b8dfU4W",
  "key16": "3t7Fpr2wMs9RW3oQsr1JieD5Ccbmd2o3HLNaHY1j6Cg8sYhzkFo55mPKqx9RZcPWzoi5wKz3GKYWjgHiHHzQSWw6",
  "key17": "43MoANiVsnZevaKAa9KsvaabngtMoYxtWjRGnbnayRcDtFr8s8j3eeZ1TNPhsfiYJeTwen9JRpzgEZVkBZgSn6g3",
  "key18": "5B5oHbtZYnrfVvJPjfS6gdAbWqYynwfvp5GgdQu4iLhPytCQwwV9MCQc9PQgiTMTTrdxESKSmnHzzHSZPg7TxsFb",
  "key19": "2qJNBr9WNySUsTyCjVYs8XSv8T1epVqKERKLkZuFPqumAzvvW2H9soArVB1XCcTADGpNShTW1stPMNAUbMU41Zm9",
  "key20": "2z4LW3NBN24mK7yQHjBNZFnwXaASb321obkXNztQqznc9VeRQ4cEdbWcw7cPFNK8vo5tSLEmq7irWg7KjxTmNei2",
  "key21": "2SYHwMGTmUxk155r1Xi6YcQD9XK4wZCGZfR53ygmZvHE1KbD4R4UZdxfN1U9PjSq1SXrn4TqiofrjUVqHqn8rZRd",
  "key22": "4HNW927JYyX68XX5uwwQ3CmSr2yzb96aQQc4YxaCAYydCmfpXx126kxkkxYtzK9TG4VkdY2TLpEszYDaxqDxPjWh",
  "key23": "Qhw2LL1dWq9xYn9hm6XZ5m1i1hod98vd4hN2uq58pdudfNmBG5kbNjtHLpL2pXkcczSUi3j54rWWC5bM5oEXVwQ",
  "key24": "3UT4jQsNb5MkpXnyhDFgsV6GonWJpt2dEMvRiVsNq4YnA8gT4s5VtYKMeQSpmMENKGPDJzZRqvrCX3iB4Px6jayj",
  "key25": "4mwquRHnbXFXefMnt4xDy8QBaLroJZ9Mr87TEASU65Cg6wXczhHH5QWo5ZCeuzG6gBqjtPcMgH4uZK5hb58QHy3P",
  "key26": "VBDb592R3BiWokGQhdKjwXRrrhvCUXBN4PooNAfx2fvw3FnxaUkZZPaH6FoMQf9YBn5R55kt12TfmC1zSTF4tHt",
  "key27": "35PJwyHawcEH9T1ZazCQcSCReZtwRkRWWzFBu3JbbabQY3miShCeQAiMHp6J7s7ELgN9wAp5Vmmskcv7uw9ECKDz",
  "key28": "3GXixovmVMPwVK1M9eodR2qX2guBV9TubxK32hxCzt43f4vMczoSgk7GJd3jbHtaRAVNhS27azesfioufDCZsUEY",
  "key29": "5WZvH6fxk7bZ2xfiimGd9EwrnYyuN89FSjTPdzmWW4DeMpjgsz4yVyz6KYgegpmerSW8yDEgtFNt3Y1ALLohzqHZ",
  "key30": "4oEfmip1LKRfn6MgLA6pG3dd1BHmeTtuWzebKv2341zcNXR5wVU8gMoXEoP2HEG3Z5XaAYCCKunpQizR6rpkK2wx",
  "key31": "4hprx78z2eGn4d3ywgnwodZVLVX3Rc2dhpq1s2NApGuGFaT93Wz8MiazbKfWwca55xLfFgPxYLB5M2gFX8n38XWN",
  "key32": "SMRr6mDvvA7LsAtAotj9C7BLTLuXnDgfD48aXqCJcvnBnadBHWHmkNDVd3PmbGuVMtexzZumzf2FcYnAnx2sTnD",
  "key33": "38jxjoxkWxhde8Y5g3jjxv4C89r9CwHdV3QYYrmN2BEokbtQzgsZPLQLjq36n5tuuh44dGmdDJb7jzskVjer1XaT",
  "key34": "2YXL5C3xb13m5ZweYDFGCBje1qbof9Wj4zAeQYRgAcY1x8mSHe7yRKSckQBoewPWndeKGaQR9WRxKZQR2zeoRSFj",
  "key35": "41XHzDU3eqNQFC36ZxSJL51z4ivMqoweKTJqUfoMBdWHWgU5eC9RhXt4yyJDmQ4snWtY7wp1DTy6fU7j4AdvnpmT",
  "key36": "5jvvwHKeZV5LuE26v7h3rzCD4XNSwkDivvD8aAvZssBH3D44uzTJ9dbdptL56rwMJpUT8NgdnNipbgmJt2XFerAk",
  "key37": "3jJ2HU2bmDRrZHmCq5fkEmM3yxpQnXyeaFXya5N76EiUnwDtwXnJsyyu9n9Ee9jstcphYM5zZSgcJSjRvMmErhRt",
  "key38": "2hE5FwH6DFEqsUx88sdtKSSLN4EGTRTrMisfqysrrZRZKck35jEGu8dN9Wy3fEdg6ha3KizMhEwRa5AobV1Lh1Kt",
  "key39": "48WL6Zk7zBK7jrPrs63n9XdMw1ME9abB5iMKZatCkTb8dDWBWCAkoU6jfBLHt7YvZ5s2s6pjTf3pYqqYemQsvsdJ",
  "key40": "2rpkfjCgooVqC4cmzzTgTaKXudf9ovbWbvWWJv7ZQ9NdBV4MM6uwj9kn6FhKjSjh5aeKYZdnyZ9kKyR9XpELWhFz",
  "key41": "FAUNFbNJ2v5w6QE1qw4eLY15ZBtjn4DVGfrZ2hbh3DcyvUtFkuT1yVYzegyoxWXacAUrvAFwfrYfJ5hQU4nu1JX",
  "key42": "51j1MZVJDvpwijG4SBRtivnKcRWTeMGK6Rqsh1vY111MYaowBXCaETStU3q53Axa8NtcJpcM1QNw4QEqW2UdmTTv",
  "key43": "2nUkMcWurYZTmETZ6nMJSsucuebnYkbJCqzrv5k8q7nfQoXzEoCddNPJ4BDXSUro4XVrAUyrAmeQkx6ewKg7vu8j",
  "key44": "3FR2c2iEDoepPpnwJTZes85oQq9mWTnsDdgpoY7WUF4WbYc2oYNwVptbZGx6rAmGyVGYKhsKUfQHpFmZrqzkCm6D",
  "key45": "UPU71eC55EjV9mfVxcyknPQh2hswrZBwJstLk3HNMXxNTHEKPipa6eEg7yCo9CfyZotfoLDa2PzJjzwpnCSwdJv",
  "key46": "4nqMCvtzWSG11QiCuTko2K1oGkfkArwLy91G4hQv29s6WnaiVeCDygYLYD8DXZA4arfjvpny8d4Zz9bHv9gj1etH",
  "key47": "3cHbu6GPizNnfJq7iryDJkxgtCb3LpcbJBSobHJrE6kvCkjwrNX4rxaMRWAUugy5nQnQjrZ1go312UefTMTuYwYZ",
  "key48": "2yLXrPLL2wpfxxRWthnzNDwvmaMQRyKvEGSuMWsK6cxZBkLzPFLbJafGCAD9qm7jEyP6LtEiMzx78HUVKoxhQHK7",
  "key49": "2tY984gYG6esckzTYiTYKhHbTwbqLE3Chh9d7kByLeXiDaQusDokKTNYaXANS3h7uQzgp3BX1fNLffGyx7YPYa4X"
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
