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
    "4zDMPPRnAgEzBw1ncgp1dwD6ge1MuSWfpQZzXMdpcXd8ASrHBnqyJyDWPhdczARs2nmpvqgyCBZDkd3aFvudRQ5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o4m3WnYNrxYYSAMSvre8HiCSnrgtSz7gS3rNnCckQqpZbV9DwK94UGyR6KdLPS4H5s6ErrfnsQXXWZ67mUDR2ar",
  "key1": "NJc6MZ4B1vTUrcMwf4DUSstvE6uaX8ZLPhzYUwTPpEkGi1nWcSuaQaFwyGz5hcKGzg6j4LQFR9fra5h7dRiwVBs",
  "key2": "3zvijdcfDchNBee9yXxBhwGovRa1dbSz1cEe2CG7BaoEAo8grq1oBW4Qihwjyr6nVM8V2wxB3Nbn9K8azyG2g3gw",
  "key3": "2WCqT8RjkzkHDADvV5cYKJ11mhuHYg1GqJWwhLSvMfHubAfvSyQVKembTpbLFRpkUaCqmuDPJRcaRKPu9ifkN2Nm",
  "key4": "46Sd4WxS5oqhVsxfe36QGJQqi6BXRoGDWBbU6A7ozYA9pkKudQzLhGP71EPtPEAa8w2jjokndzD49Ahmj4jD9txY",
  "key5": "8dg3Bq3Sz8ahAKyCnxRbsP1VKtX8BVfQGG8wBqVvS3ABUVfVmiKjftK3NNVNv9s1SMXcrMJDS2GtAy55Vqwv1Sk",
  "key6": "ZUBPNevM9BrfnyQTKdvmUBzXsm91wS1TRu1XXqxj5hAgM4KHHp2AMVv7ZAnCHGqWbxe8atWTxdrU56q4DTBh33s",
  "key7": "5Cor6Yt1QFQeY5eeo1tY6TT2NV7TJGTftmVRnAp9v8hH5zuLnrK3XRMPRqgEoiZm19D7RakvaVhT6C9fMbZL366T",
  "key8": "5rnxWw34n1TxMXgu8D6SysR2HWUSTrVhZ7pUG5dyMUu3SwMKN1HbYibyWo1d87shcXuarSHwH6wQiFZ28vYikqPT",
  "key9": "3shJeB8qtzaYJ8PfMR9RP7gTtptcJ7vTYTFUMPeK7muPS6QCc12NudPXNTxNHquvSqfnexpN9y23LYWJGPPViXQw",
  "key10": "5avsx7ozdrQzvBzK9PJyCs2HYKwY8biSapBBBNJiE8h6ptTBKPQ1wZkqwCBM8WcbRQn86A64WxStRWRgan135Yhf",
  "key11": "27KkP4LHcE9iHh3nBTK8RQvu5BmEUWvuYawMnAkvT7JfxyejEM3Sm3KbRpgyBXRqGwmdbb4gwx9SneJSv5sSkcg1",
  "key12": "2GTjznmP8eGNyT8AQpTfBM1WoYXMsA5WYqhhDaoV3vgMn8znTZdMZiNrSXM7ego3mx5zpabc489gezaxrwNuWdi3",
  "key13": "4ji9bc6YX9VgaT3AKJ2hoidSUsqAX2kmoxjUyDo4LELCfv1Ed5ULAyMQpaBCnKCKzmciJxCaVPsmKEPtMcjzwqWg",
  "key14": "4XmBDQah2cP6m1yT7ZinFC2qFxTAtqrJbWfeJg4QgeB1rHxWZZGZZ31dindYxceP5tNZ9mpS9Mej1j7vEhLok7NS",
  "key15": "5KrnED5GbGBDaF26pmdd1gHpsmyMZb1dnR19fMpyxCb9xqzPXSUCEhivBLYVqpidVL3MZqyXcrgr5auASTkpwNt7",
  "key16": "27mccuYxg7foKyW21ircxahUn4nFWdB33HhVhSgU3PTQVmEva8524muedXVSjiBrVye9LceKtQaeP6mepB1KwhZL",
  "key17": "2ufkrVc4QuFSivwVKivp8tdTz9F8qEm23ZdJRYYT3fcuH6bc7oVLeRmrrd8p3pDPutfsHVWKHUAyA3w8wQxeCq3r",
  "key18": "4P2d9pwR3r52yVLjL1DPcqDPhuz9ACLumC2nrQhp11t9Y2HxD71zFZtNSwb2W6FcBqHveR8r5GWgHp8RmbkHwvGV",
  "key19": "3a4xjt5FH7UPnrPHFvZ3QC12eWX6rKYiUgjavfw25akkUEm69z9hMTkC8sDLwBSQhUN3h2R2rxTF6rExAoHvwje5",
  "key20": "32ZL3Z4aUB2TPXLAjDWwdfKFhuidi2eGoFZwwAvUTCHDoTisCWcHBUjJQ6x75ormhX4SLswH8FdbmQ76VUmvBrJA",
  "key21": "d7Ye3eTthnZaCBtGscYjLnsFLwwbeLWDeXcu5GPneiQaLgJACMjguJJzZBhGMRqqK6mxLaBAkPwx4JbxMdigDyZ",
  "key22": "3BneKBuVpnz6aitZ17dURKMmTwfJFM4UUFMb2YuhpisxDyApPV6ZPsMgLYNGSpp97mAsUDXTwwyQmSwkbgaUGmz2",
  "key23": "4MujAkPEBXXUcc8bAtVNVfBYkY631DTnLLXTjJvJ3CpDynDG5MEq8ikkZJjcZnPr4CyTopcTzRrgAQLQBcZvg6B",
  "key24": "2JHx9gv5QfKjZF8t3nT7n3TyoMRMCJS7aGDroetHGVGuqZUaQKKQ8JZVhP9ssnKoiv3W48kYTdfSjVGHAsBXQ4z2",
  "key25": "3SractBPqS5hpYQvgyrdrR5BkSiFAqC4YAb6aVoP1fxMaPoHMXSQT1MY9i1oYrq3dBsRmtCSPJFsu8kATtGVpxzq",
  "key26": "3JCKGZ7jKHsggBNo7XQEqz79g86Zy5R2BTcnMY3AyyauJjKm5Ji64fVne2HcjzP8u5MvNQpVHxpTRi4BKoeJyE7K",
  "key27": "5pLrb4zKaQKts728buXtFfF1udR3PuJT5AMLXx1Jqt9eTASpN1eeq9TPtUpAAkJdvAAkxWdRNKA4pBi3BqLDqDYa",
  "key28": "2GKgV99jMnyghJ5uXEuPqNrGPhB82wT9fmXw7RHXkxKA915ndE7UdM8SW3aQGvYc4ZFVfiE9YxuzVMT7MohUPDwZ",
  "key29": "4eNZu9juSP9iCt2Rt9CH7idUMzy3Bf8eqGbThNFENF3NCTZCftV56mrK1T2gGrrff5zqFs1DeeSZE2SRx6cG4BXB",
  "key30": "zmuAnstQx32KZDn3f6KSD6TaeV2wo4vG5rr8uqRo6VoQ8aG4CmdYyfA9wVJdVHcBKVeZ1STKKrnW484JxgTeyDi"
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
