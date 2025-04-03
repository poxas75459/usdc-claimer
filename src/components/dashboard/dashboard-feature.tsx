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
    "zT9nKjgV1yzMy7p7iUVp57TtgJP18AW2PJLyjbGrJ9wH7ZUQwtBSdS54k7TaBP6ZeBGF6zShT6CazmEuHaQEite"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxCmP8KuyQEuo9b95vpEtfXffSUrfGzQYR8Lk3C587PpZQPpcd7vfHvzXfdPvm5JEyJsLMHax8X8Pve9pReXt7M",
  "key1": "36T1uaeNtL3fPUmKU837Tvco1EcL7qyuywxb97eS1BAG8apF8ZaRuiGTt3sNR136tBeS9aGSbCDrZBYPzmPrb2X4",
  "key2": "5ATNLSW1UfFjVAV6gAJWXGgiv9eL6tARmg4KPNBU7ukJmiwfqZRoFfYz7QRNL4Bw86SLBGRR8m4veYWRbC3LBynp",
  "key3": "64yU3w2Gxq9a8dWUKPJDp6eeRwVfZL84xUNavcdxVn1ihhHkJTLGng1FGetj7jpcFZUWp2R8EWQQmR3MN6PGkYpR",
  "key4": "55nfYw3qFKgGMJuqNp8p4jycnjQ7bPLsPhehXRGRDVpf4j5DrkR5BVbJfNDKAQJSwgeugcy1wVP3z4f1FE7Xy5QZ",
  "key5": "SKRgyvzdiTrPe3wzHzoPLG7btbuktYxSaRzvZ69zG29pBnRpeMpDrtCGMA8ARrvGpezeRXhGFPmCEfj4Nom3ibe",
  "key6": "251FJ51uB4ShRHKhGGyZ8GzMUfwuMX3pfidi7hFoC5SvgTB5nGhzeEfU8nqhxnTzeBzqjDqPYrgSi8QjdWFERpPV",
  "key7": "4qXiQjxbuPbFBh7ddNuQw6KFxZyiXJSWwo9P2CSqB88ypqLPhUFYnAKSSTrvQbKy3c2jVpgvnAMxDpcBdAtRqtPJ",
  "key8": "3XDaR3tvNRjrwgyhVQFmrhKWcXiSexcKz3s4rDxjhDkHMuWkSJshDXNXRK3ov9ep8ieEqVFAKqnL6MZLDek2UpzU",
  "key9": "t5uLmi2KnGJ8r4r45mUXTFi6m6ocPNLFLn4NwDLjy3kJ1MbdHDYNwESqUNF6Bdca4RGMu6vfVk1QsYVRNtJn5FX",
  "key10": "5ezzsfKyhKbpAQBg7PSbBj12WKjzeVUZ84Fggx2yvKJLpV2bk6TjJWgPVgpXVafVSdZrjJQ1q4Beu8u1v9RzoyxX",
  "key11": "5WTB1XiCJmXimWMQpHUU8Cbg4ZqoViCX75fmQQdSHfnCScmVtsQVsrqu5K89TMMWQCce5Z7owqnxJYbgNfZ5Pk2b",
  "key12": "4m5ebUprYDbNGCNJKJsFzJMnZNyqz4jmgpJ9gdcTuAX33TT7JDDmKajHiApCRnbmwLHcXcQb2S1HLPzC8xmMboZM",
  "key13": "i8LrZfDsFvjHXEpp8XTQm3QZts6eJHnDq38gPokzanxVTMkn2QVhKM9NoJb8T8EGAwCJ7ueA2ZqrYnsLAe4Wpwu",
  "key14": "3mN4APbDb8vz92KGJCE8rHskt6FcUMAweKaYKhZoLi5z5x2E1p4t6BMhhv62e1wbDRctHAavS34DCH7WFSZzDiUe",
  "key15": "4kHf9a65bRTUvqsSx9oThig6mQ8DKjoTF2wfbyWb7axwyqbCEUDZHevHffYvyhPKhP4KcPvVE6Qu13R4vjBvXEUU",
  "key16": "3Grg6k6W8si8H7ZnC3zzXXfWzxWnp29RGfyfrMuenbwBhQKvJcJ7hTUbdFcbvcUyFBGc3jKuG5kEr18UqHmnADo5",
  "key17": "4myKBK9guSqzGsyjgTSj8QhzCEqwtpYR72UWM6X8VMjPyQa1D7KgZzFBGE3vqPa5NzT2bGGmEcQ9xewAXcjEwEAY",
  "key18": "5taChknXMpjLEydbq9atuNnJ8mWBHDfKih6XhECLub15D5LMta3V7Aqz2WbXveor9efuk9CfbBEEhqsUBPPBtgeb",
  "key19": "2926P91H1bkP5FaEgWyrzRNhmLzFT68xq1GH3skCn4rdTG2fSKrRAhqc92CBjUkaByJLCg1LPxVhAdDHqcbxazCN",
  "key20": "Zt2kQQUrJBz2icrKdS39R18CC9e7MR6AhcNTMVMsxc6LDGq3DaWRta98zLTzQ4xMjpXQ7rHSXVuLEqEYtEZTQnS",
  "key21": "5zXvyDTY5bfhgcNeR3CVs79ujLJpWCfZtSyfYm6apmRXEJgEED2eZmKRfEsHyp99yuGUexEMGcg9vPBEyHSsgQy1",
  "key22": "2aVEdzrBY7j5kJWLH1ncQh9XRNgmZZu6bGpSQpKa3jYsrCCbHVxvm6Gkj9TeNmAtXeWMSarx6QG11yez7XsNvtaC",
  "key23": "42BBnrBKsnrDVoxWph1rEZuSbzdrmdkqBH5hQkwzys6fMNruwxymGTN7iRjYZb14c7LctXSnG9jENYobE3sFB933",
  "key24": "2Xj4YMBQKYfxnpf1BXCMCX8LBBmrf9rahcmKSkZsbnwmpsPcPb5GVd7qy64fPsUTod99pE41QnNcwJKiSSkiPHv7",
  "key25": "4FrQsxJuQrkwf5HEn8XBXHKdqY56r9uPdPSuuwvuBuQB2d2P3FhzaUceL29AsNZQsdQBgg1LC3gjR3CGvpMSyPM8",
  "key26": "4A6fzNxQ6ksH65Y6GQATVczWqfQx3npgAtTZUHXJAUkDawb15PL16MNpwquubW4vwpKMJyBhh7Yf1WWnDUH6Ss4G",
  "key27": "45buL8Tm8aGxG53mAG1Xe3pzXSp73rei8bjzMbQUA7bvJmG5AF1PL8cAGKjB2oXQHEVteQ8hdQ3d4qQQpcgEMPLH",
  "key28": "4d9a8gXnhfbevAZABMLVdU71iU9RbpEE1mB8s2ekgBTuFHveYY6nuPDVRLQkUC9WEa8y93WA22oYAtFRMCW1KBXz",
  "key29": "5n2ydUEjX6eWCnjHMPMmEiYfofRM5QWNhjLSNzWiXJirB7FwfE8k1Cg4hJUQ2KFqsd2KZSCNZZAruB4GnA6Dz26B",
  "key30": "ncXZWSacBiP8S7uhgaqzZMqcdjLk4mPhXZ7RHvNfuCQ3qZ2jS8czWRJqdKz21sXkmzCbfk6ACU2CJZV5B2GK1Kq",
  "key31": "aW2tKM6KgvpLhKHYFsxLaatCmYZ9tYQ1maGPcZz6583cM7RADeLJCjk88UMwWpPKDhQpY7kaW5GdTdFTxBZ4Kag",
  "key32": "5khmebjfEHYsTM1aC2gwFMNUx8WjDLud82YzmUEZeNfv8sKEr1sCztKkGacisNc1gekPAxZ9EZfuBopUjdSL9Uo5",
  "key33": "3c2bkQjWZeSvYWG46gZDyBUAjuDxYzrzWdnqCbryvxGaw5zgweXXUfQBaSYzagmtjrk8LZHGuFfYejEFVj1LSe4L",
  "key34": "2YEJSpgCtACdhHtRnLkBLmnvFHAqpjNMHhhoU9tnqzR2e95SAWFUpGWXYnybo39CD6i2Vcxvywmf9vB5geXfw3ts",
  "key35": "sryxhenXU8rhSq2CnyL2wRJCSbp969U6wW4GRJSf714zu51jbkFU3kB9UL9kWXLc9s2i4dN76SkRRjxVXpLnwEH",
  "key36": "QkZoe1AbQhBBxiEbSK98SbYch1eRHz3UN5h2eEHzvCM2AiA7ZZyNkadZah19Hu9SQpPFxiBwxb2nYzPmHfmbjAb",
  "key37": "ZjycyYMyHT7Cmk2YWpnHaAvbtphnp57Xy2isA4kb4pDkiwJEz93Ua6pmf2p6vx88knyKun7Nrohvb594UgCps4g",
  "key38": "22FaNvCpdHEL3tK6ofU8GbuKosVsQeoqefV3BE2F9FtenAx16MjCTdxLwxBSk8UGSfJbqmrdvz518mmm9m7Jj7vT"
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
