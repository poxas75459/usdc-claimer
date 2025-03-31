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
    "2xbSQ8S1FXrARtg98H6Eypp9y15BQ4SB6CoCdnjrjsXEFNoQ2LfYwZGEfZHCZeVJnyr22MAH8PzSRfuBCGdeeUVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ax2edVgbWTn5cHUXzgEuym21kCMKdbDBpPZkpagrMQf8bhzJ1o6KY7eCtctXKsjHRNJXSxS28mestafZ2mCgCMQ",
  "key1": "4T7K1E98JZhcRX95BARMFrnEMu4T1b6CtceQrHM5U8qfmiCocXWY2PwigK7KacBw42qr5LbbdeauW45jK22g8XhX",
  "key2": "2oVKjR2P1BFbGpVxfiQuykTqS7L4LWqnCDE1oTf6rriHbkcaafwascAzwpphq4fExLExQqgjR6T4KVWfgjerGnZi",
  "key3": "rMiXHz5psKiqpWPUirDTqfoYKtNcowcNiAPbngZNjEZTPnKitTmfp3sjbZZPJjLcvkdTXqdqavyYietDiVtYUZb",
  "key4": "RbUUvuQs3jCck29g3cYKSTXWCEmW7PCpzNBRomhbAwJAunaHbT2qssLywWWS26LBx9CAGDfKX3cHPZNPW3aXP9t",
  "key5": "3gA2x5aCPKWEoES8SJFAsPqQDhWFQg1QyKT7yDqxo7epz6XFrHVNeobXw92rSR8Lrd6fKNPCfAtDWV7BAoMERFCL",
  "key6": "3vNvbizCp6seQn1KFg7Z3wHxq36Dgu58NkpdMYWvJicArHmPF7jFxaux28gvHJcLgXkokcXHLNTLfzd1pMXdgmD",
  "key7": "hsZww6L5W8CSkoGphXRFGg14xRD5CGdrJojwKr4PMLGFosz74aT8eFZKJicMihchUCeYGZpgvhM9s3MEPSBKPuj",
  "key8": "1BFmcNtSP8tbDoXdLBTr71eajTVwrxSYwoTAThjb5FsS1DJNFc7LxKN25jEiaTAWzjnkiiX1ciwvbUFQR21JASn",
  "key9": "5HtrZQd2uBVLMrpX1bpPnViJLqQoXnGv7L6iNrvf81cV3UmYBjQBqY29AJyy2AFnLixt3D8YEQTii3mGEAviFaRg",
  "key10": "4MhP7GaMCMGpRBFZEL7UvYtrg8upDT6kAtAVtGtndBLRP6Th2hajB6F9HNHreKvrSE3FKkxNMdZTbeNDafDcREMi",
  "key11": "5m2DSEP6dHzk96mrQQc98bKgZCfKqkutjpKMuNimGqnUa53Xfgg2XtyEgncFxQQfd6kZo8rWPUFm1iMbu94MEZXZ",
  "key12": "3PHrGx8VJo2JdDBD9qgkAScAp2VSPvFxHP4FSYveekVptTnSUDxPq28TCsm4VQpiF3Awz1oBS6hw9GRNpv2TjuLt",
  "key13": "5ApkcgBFatY23o4DmHtYkcwN6f5zFMJuRjTBfTN33ix8fWz83tFEN1FGTsss6giLUN1XfDgTAz68Zqp1FqJCmGq1",
  "key14": "z9rThneEY8irkX6r8uhwHMB9fGid9Xo1YrjHDALJQwPy9tNESgkFFm5MXNJFATdRxu9Jd7zyLPk3kbBPixy6DnK",
  "key15": "51Niz9d7Tv4Rozn8aSNi1Q9mCd5UeGY5DxoV61o31MLnv1EhDNv3md15HeqYdsEcvxc77AwrUsBuy5vYkvPRqEjC",
  "key16": "3UBg37Hbi89CAg7M8McrBTFU68N98p2eh1f4Qj1gy2y82UsnfjXxe9TqDZUzTojYAVCYANz9GLoGvkWE3LNXEp4k",
  "key17": "47ZVsFRgtDJrHGdBDvZ6uv1mfUCnpH3PYthMyWwjrGJ8gbG59oiaXLb5bYBYx9egLiqY3g44U3Lqe5hptMJpt5kB",
  "key18": "4JFB1bRPQ4Yxt3ZQAXY793nwPUmomNBxxtFgay6jV26rCHqTjjnUxWQbXizTqE54VLocHjXBXFih6AqDY3qbrShE",
  "key19": "4UdcAHrSqGadKkXEYaDmS9ddqiQ2frJh9vemmbWdR97bdLpmSU8CiFq5FTt55T3zRky6ZiJ3BxNJMzoRDDdfVcTE",
  "key20": "zJma73VgVcT8qBa5iiNUNJSZt7TA2vGjz5NDEBksDxyXKe2wHk8z6PkyVrCz2o5YKuu319zsaN37p5fTGJ164VE",
  "key21": "4i1yAnrwhDXseQ5b3hFDVgpwi1bdNgtirqYvuCevaGrdAhCnLoXCsd6KGFxvob6rcxrSVqT4Gm7NYgLYZqonFQVA",
  "key22": "4hxUQvqSMVzDrcNNQR3JqYGS742u8zAAkp1NVAtsfW3X2jUmMJq3H5iEpSPmqsP5573qz635XT3zmZEF2dFmZUFA",
  "key23": "nfWsniFtAZ3BSovY7W2AcnUWw2NbwfnuaQ5ktV7z4x7K6E7SvQzFY3Ro76wCA7JZGJRzRE3DefJdEAR7GfcUJYb",
  "key24": "5Ty47dYu3Er7ffD64efwyzbNC5awHnLUysr23stBQ55npocee5t6wQiVYGPuNLhZ1V4VZ7wcZFadtazswqt9JiCE",
  "key25": "HHui4mxCWeut3BKtrueKvRK1LN2SYM5cuKSfzWoWoFaJ94d3CqrqTAZhVQxQAenP4bUVFBpo2XiNydumFz2udaH",
  "key26": "XGNiE4ZWnFEetjWpe8DnZcy1NgLRtCdDhweNfCHZaWxATr784jXLFk9FDz2Qmpmzby4aGz1i6E7j2Vjcp8dwCNg",
  "key27": "5bd1QxgkHD5HSupz4PFATifEXuLVwfUAaoEF87NyvhVtcKTD3RJ97JjwSuywjswM1qrpq9psgZvnZnK5DXvgCaq9",
  "key28": "dWRdeviaBs3PpRoD9G6gnPN8HWTXMBzCexUSfnt5LjZcYoN72vYHzX4HdkvcB55ZHMyhoG3TQ2Bbh8aUsvgNaJy",
  "key29": "4i4XNFhQfCfoD119EWJtkVo5Y1Ayx3eQnkApZ79KTMUJZvRYBzH32dRCNyshH1yfUvjufegL9dFebKrTyPiC79dj",
  "key30": "5Eau8CSDDZGN97XjGagb4nQockLAKoqZacQebpSmipZYH9uVQxkCZUuG1ryLys6412cb85tddyvdS8KhkYzFofyk",
  "key31": "5fWBdJManHUgr5vnhSMwq7x4kArexC6ohJ5T3xBsK6BYo6k5Jnh1BvCKag3Jt1k1jHFY3PQYkynZfc2iRAbfpWjf",
  "key32": "5zw3LMAzhw5TGSTuVTddKEBSDwEyjLyngP4kjqLETaWJMrBWGYJ8vNhv3zDDF8FfzyR5RjntDLKCJCwHoMxfyPm1",
  "key33": "3kLeQoW9ggVeYyJVoJCJBG73LNVsHDx4DwMVKYtJkqHSUP73bds8oxXbjrrXemyfLvXdodvtzdo6L52nfuy1v2qQ",
  "key34": "nvkbkpHi4FVK8iJki5aJaCpAPZuLiKxtuxVQHkvqVneRrxQhWnxrWXKBruVTxfJhQN1AmDK8tT34SFvc4MZBapE",
  "key35": "4xLCsh9KH59SB472E1NgqWAS4NeA7zBuqxd3kzQDwiLyicEMRpEsSrkNKyoLTntteKqoJAxR1E8iELoHwunnU8AK",
  "key36": "2neYdVHA6LUWStDMsoznZjWS1ebmxEENZsKiZiuSAmrtnhtwLZ2WodSc7Afh2mtJ3PUj7SHvPNULryVtLcwRfbJH",
  "key37": "5EfvXLfiJUwb3T7uqBRReae7QPzKYSjUCm6Q923q3QnoTpL78DKi9rZYNVjAiJ4jKdGftgf2hNT2KzeCm8RHm8So",
  "key38": "WQMJBH69WvyKccZUCnxh8kDKNWEdQfUgu3GjKFqvaH2TbBR1jbD5o7uDqQjTe17aGGxaxtSE7wZaYyPRc1scrpw",
  "key39": "2mcNHXeqpgfGbNrV761KNfETwt3RfvCGvjycyGdtsoegaMWj13dpvpTXySCLcgL8vX3P8wK6SVLsZpPmpYmfhxbD",
  "key40": "57f6ziq8r54Pf26nsp7UTYhSoLhfaduy5jtQSJmxuNc8o1SNW5zbk3r9mqgtVSC8CWWYE1yzUeD1ygCqUVtdZ6sU",
  "key41": "4zvwmeUagqyCVBpJDzYfdExRWVcDLLxmFjRCAPsRPjmNX9gNYcsoAsuLfMa99qMXnELRnBnUYssRCTEuQzbCMm5U",
  "key42": "5TWi6BP93y5gU1KsLq4C7QTSP6E8jc4XYtjs5rHehcp6DcP7TqkYwnBg6Qa1xRPYiR5o2MVCCrxNnugUQ6CkycJ7",
  "key43": "MANx7jRRZ37ivJQCL5fggey9shWHmVNbNhQiwqz13VMvFU8yArUYFH4azLUbv27ypvv9nriymZNGFdzsAJq73Wu",
  "key44": "R5HdNbfvnuP64Ycg2dZBn7iM4KJwENzbtdnfngdFQiAuHWPAD7ZpSQY7VHJHmJ8bHQLD9LWwE4azAnDaEhn6y1A",
  "key45": "Vrn68Ykm1cMxoVv4hXd1yMeJdcFsNhEfRwHurf3aN9GiBx7rvbJrDXFAiBPjtHPzF1dX19pMgSZaQRxZrTvRKSF"
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
