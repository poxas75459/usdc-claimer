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
    "5yoyDwPdrd2RH6nppfkYkVH3sskumGkxC4o24fisDDTS9Pdp2mgVztpmTQgzJ7nvUkWzoqc2DoPJFqmizyohjVE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DK5UVsjvzpad1Uzz4zuZmkRtd9pF9NK5Smp3sRPSZGYzdEYMs85VCb2iUeUtMpdH7VmhKRr5NyrsPUiWZCPMFcu",
  "key1": "cN2vAAJ6wJcCzsE6Kfg4z3aY2SEwwGXV3TSDCJGmevdUzvhteULNayAnhJZjMuAH2yK4SbdDZkpLSF7ZnESAun9",
  "key2": "61vs3iWBrg48sibSnrqg7GALYgTu4yj1pEYR38kXgqqnthJT5FCBaxA55KX6qAPnQgCWBEnsxwbDK6ULGWj8RsqV",
  "key3": "5YGWzDWjuxdiFzMvB7QV9k67zuvwcHwy5etUpqEQBRiWSW2UPSERrCcWa7JqEnrzgrjbupJxdtbP3pwxPWnstpbg",
  "key4": "3X9GhV3ccq9pWF7BtmbgR6ksR1c3rZEqgRCoiax5CWzwLxipiPCpFUwboQgWnihHadsdL6BNwJYztiLYBYWbPVhb",
  "key5": "YGJcxWV9PDqDcr2VVLjNM55tPPeCKahuTfzPLPwqpfKWEGKy7Rnhk3n7DU393KaQKyAZSwKywR5Skaw6sYvbsHo",
  "key6": "55KqDRbKSFp78W6Fm6R7FWGyU9AaC2nmmcdprnzPmp7BDMw973HuMV3gAxXs2e5H8VX9i7mVmdjC6iXreACEBar5",
  "key7": "54Chp9HizGb2vhA9CNE84s4N3Cm8ANr3pn9B3zs6cMc39Pe2rjmQzH9hasUdz8V1vnCPE7mWEBKskS9aTX6uca8r",
  "key8": "Wx88uh2VFrrXqMaM8vEAb9NMt3bwjVMbn45oYvetwEf9QiXGFUBVvujMjwe8TRfMK2QP7NcumqxAFr1zAnc7aYv",
  "key9": "61NoF7UTYfBvXdsm9mt8nFULpgjs4WSoGvvGRWoWNhwjHTzw4GaTAxCmWgq8QWt1v21CZ474nJfAgkVBFtL8CsFD",
  "key10": "5U8bPEF83p22NTVmXGSjtinb5Jr4fWkMzCSwDPJfDyXsFRs3ukpMroGkotsYcGKNJWBHqjpKyuJ3mejvmTzWBAcE",
  "key11": "3TivAgELQjGGT7ZxQ8NSV4svkif2bmnZh1sTAy49MdgvTjhuPNfLXmfyHXPssT856Ri9wWoFgyYMoZvJZ4Gt8q6J",
  "key12": "3gv3bhri3oiK2ito8ThjWvwAY7xbtUbWa7n5ytKULxnCdcn9pEeSjz7C5v4gPYwmTt9ahWN99rkFL2n1i4ytYiFE",
  "key13": "2qtBUA4n8cw98N88Pc6gEMvtCZCgVC9QCmMkW9Qtby8PG7fEAtAVyTA8kYXn6kELHtn2sAkfHfvjKTXrRVhLRfjg",
  "key14": "2UbBsX2aBiSgbXBNYmB7bDdtjefZXAwV7MTZABRvarKknUhMTGTzPzzDQK9nBL4eX3utiSeXGUTszGizCjRzF5aA",
  "key15": "4kYMUWPFkLGgrUPoFpDVZhHCgSTixJJduHcQd5RsbN56fxVLbHepm8ZeQDWzmgRLUV4eBZayY9uz52fZxBdZW5ZY",
  "key16": "2DKHcQUZj5UF3MVEMGJ1juVnqrEhFihkQf9sKAG7WzzucaCerCU4HE77feMgYKuQB9JKtm8nGfCuYJcHAP32tKGM",
  "key17": "33c9YZA1D79wUPc9JCWPCgssA7Q9qitxiEdJZP2kADzVFCFRmiCjd37AzEpBirgB2r7HSSE3BH4DPByzWfNyLDRR",
  "key18": "3nnbTJZW9f2WatRepDtb1j2uUBdj18YNZ3Hg2u9xE6Uw1xfTGVGdS5hrwevQGSeLyJv3KBa4FCKkP65PwBpQheKB",
  "key19": "3y38rBMWP7AjVaxkPC4TmSrFH1xB3rpEfnboEebXaxs5eq8Vq92novBkLcowXEPGRd4hywSxAzxdW927Z5Bbd3tQ",
  "key20": "4aCrCwxExfUU6htfb4hLHBPpFLYQehPXNmDnMeju3sAEjPAzobUFjwrSe7684YKSvngVHTR7xAsAt5dziL8JeLmR",
  "key21": "t5Y1SQ9TGTRL6cRW2WQ1vVJm2ikaXMvahzibhfHu5qmad7B98oH4CW2QCBTicFQoWFnbJasQZb3PwHycffQrSAQ",
  "key22": "2JC63bXBhGjEroEavYJSLiQTv44D1bbeJMCEZrQjySu5iPgjX4ShwQDGDAKaWo8X2Vu8R14Y2UQ1T6fZMmquW45C",
  "key23": "V35SB9WuoDQbpuSN7yiXMPMP9FL8Nmnnu7s5Xq35w4AxfRPEZTZz7oZNZffcrm9jaZpQjhJcPjq6T7ZxBsFe2dD",
  "key24": "4Uf4odGzz7KA4FnCjwuqJys6oeZB3PKWLQBoNzkrXT1hrZT7A3bEj7oTKHGnLyJK6bBocMQVUkK3dFZnLE8dvkU",
  "key25": "3J7UkdZg2kozGhNeoj16vhiXyP48fG5a6JAioXUXiLrcF6X7t4pykV8rnyjryEKajbSyfKh2VVQB4HTn1DTzAep6",
  "key26": "2f6XqivdvLeK5fYrNU3iDY2Ni5tYniX4JLgoAqg2uWmiAq22PRUaF4PzPBtwdDB3iycwvXCnkVjQA2c9oA18ufU6",
  "key27": "yF1XoyB8tSnkyDJmCA8QDiigDDqaPgYFSGy5eHVneQ3EZcspABdAwoEFhT573qosrZk6w7uKTaQ4rRtSF2T7RuT",
  "key28": "3HNG2YDp5LdgSrATzioZ5nnWDCh3hUaUPYzPHYoCUi24ktuwP457b86FbkpJDSUWCu43Fkw4CoAscMVVm6xmUTio",
  "key29": "2kfc4CErx86A1AMehkVUL1D4RtPhdkFrAo1u3F8j46xXZVy781zYf3o7vxwyYW4cbzjhwJqjTag4LQQP2eAM6q2R",
  "key30": "5miqzEEwhi8dhvLyWMGPRDVdUxLfDM5Jf2Dn1nKQ43pyu43EzJxMtGyryPqe3aCBcJk1yi4FHa3VMQTaWG6i6wSQ",
  "key31": "4DZCrWjbof8W7Q4pgqzSenagWnn3gCGgXWMAqVKoXfkWkrcMDiEm3uxad7FnLi2uobWVfEQTwDsjStMdLXgfWNYH",
  "key32": "3o4SJCwGKWWjpeySDFmFdd3bwJmswsKUig5f5A7GG31HxKwXaRDR67Pbjkpd9UywXycQcmrgR2n6zAbvDuPdfyu3",
  "key33": "55uY2ZNtTA2RxPpYG4rJWnFW2j96psQ7thFvJJyMhWF2d8pAUKaSS3H2rRecC4kP63pRxQHVy4GPEfv6aJw6rseP",
  "key34": "49HJsSigJGs58NUj5GQwzdQa7JS9TUCGET96DUCp8ZSkqpcFhYVa6vKT17MRqxzbMN1K5B59wqtVEGk1t5emiuu7",
  "key35": "4NFTFVLAZKt6FmraqUzGZzMmBhgSVRbz5Ny5gnRN4gi68zpfFBb8dUSvLCr6spVjXKQTncWyVAuEVRfLxSFYs9Nj",
  "key36": "Tzhx5fxCHxCjQe26amy8mjngNUuKEiGuNyvvUfGDdWHUdj5ABwyxFYowRTxncYxLHDuYssHSCwuWqh4ADu5deZZ",
  "key37": "2cSpwyfPZ9UMkfGC4FTTNQdyapPtuJJtAn24r1CxU8KiDbUyGKw7eehHzSH2vWNfxRRookmE4aKzrGqdSJSv6ark",
  "key38": "3dz3VnZ42S4c81fd2oZcj8Qhb69twusyw9KDjPZeQRoTHv11tL6DWCQ9BictXKeh7iPaCKwhYn3JW2a2bnGshCC"
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
