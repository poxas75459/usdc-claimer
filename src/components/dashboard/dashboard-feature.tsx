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
    "4e2FfY5ZnAS8fXGSV9rvq92cVDRRp5PsLVnS3QdPN235FhUe4WusV8766jgc3DSfwbSQg8qCa82JfiL71YQftHBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejorT4KFFFmAgFKuXCYFBT6QfrsAKbjj5nCkF7G5bfMEVMtcorNzwLSyCm4Bw2ZuFwZjqzEwgHivCu64Qd6cLT1",
  "key1": "BJaCLPqzAMLA6mgGGxGmW7drGSA2Wp3u1BGDtQ44WToebdpDX2br9sGpMbpntHYyw7X2bV4rtypPSckEPJUSook",
  "key2": "Jvo6owwenjFzK95UaGcvrxVv9Bcp6D7fN1T8cwyzqQoLgqgEBEu7ksgGoKunBc371cpQmCSP9jjLpzcGUbtdqit",
  "key3": "3vehSLbH3gCBRrRhZhy9wpC6eA3S7R6p28vJ3DR6bj3tWEGxjhmrQPWQGBWviqKBwKFYkWgktcC5VoJLvEJVSrGb",
  "key4": "nvSBwJwwAV2EctHihsM4yKbSdPWiMpGtBKZtb5e4ajyYqem7uihb16GeHimBXrhv8aeMxMdgwqTD3QbKo4izgef",
  "key5": "3xH5aEanFHr4sdUVCcsDY8JCA2fmgCe1AX6cS8wU5dfhcm2u6jZNubsvnd5NnaqaWkC9ohPnuekNYGT4bcCArLst",
  "key6": "kbCWfkSLTWXQMvVoY7NEW1YDdL9TryzFKj8eutP27yu2SFEpWk6TMhFxuG6WGUVpChCMrZCa763yfviKNfvhZZ9",
  "key7": "25BVubWJx11U8AkSGTMvqaC3S92vXsEgxn26hmxsgARHmASVT99mgV11haEUbZZWaC8iCsdkdiqXYvXJfxo1QMm1",
  "key8": "5kqpedRtRcj1Zx2UmzfGA8UaNCbWdaQ7ZoamR7Jd69BjPhSrxfmwMcuHpVF9qm6RS4jV3nhKvJuM4pD8WyDpKnki",
  "key9": "5oFUywvMXvfHYga5T4wLqRnsfThXKxv1nqjEbSboRUfx6d2RpPvy99eyr9sa6JovWnywq7wa6eXMvxJrSeoadTD4",
  "key10": "27Q5TbquFftEYoEepKjtwaAtX69QN5fvWbYCW9VFVGFV3hZQYgNJJUBoTXZ8VULNicnSTix7YpF8E3iU1ZePVqN5",
  "key11": "5rD2xXcpyDcuXXmc6ftoZnHYXqjC4hKmdF83PiNx5F8fTeYaRUW4s6VvpzpHyyciiKpbvmHiwvs5iRUV1YA9CJJz",
  "key12": "5uFraLapd6RXeUuuWah91W6XBwsprTsyoraPnNbRV1VfjV8QNWzSqeQrhLyBqBcbBQ1xhAQa3mVmtRR933iRTm2U",
  "key13": "41thJSj6CJAU1ZTMBuUVZuouhAuhJnMydG2htrqc62YYwCvj5sUQ8caomBQDQ3r3jS8ofwArUfQBH8TmimDcVHAe",
  "key14": "5X4VdeJdTjGGEXiqHe5zREEH2g9HdEgAPxWCx1nsKtLjqr7eFMp1bPPESosd8fJoggjxuhrf2vtEG7CMiJYQ3nVo",
  "key15": "5u23fuX49x2SQBVcZoikh7V1uZJbETXUGFkSH4tfhzzwDxQpz4uwNbpYZaSmDjYbZYotCLHee8VtKPcbyLgDbi5M",
  "key16": "4sapp7yFPyFynJZrqGs1MdZmmuA1so83kaDj2fbHzomQimgP7H6ZCoxZFkDPFJpq95NJVUxirJDAq1mppRhTvKw1",
  "key17": "siLgBRsqhRFYx6fSgXjRUrueiLxu6pZ3RVNSRzp4EScgBz25PE3NMf9FNFk7c4sERPEar9JnpmPuqqzehdjLg7o",
  "key18": "5x8c7RkW7NNpPnY1WySKkFZyvQNu7SPqcrq6cShwofdP54B7CTjED3RQobb2KHvUGqTXMKgfzv652yCMjTVVzaeV",
  "key19": "4AHuAVSzwUqYjZiWXkLWqXWngLokYFdW58gM1w8atRnMavt6gQWnAKWn5bVth1guSPi9EXtB2rVDNtfqwy5jCvHm",
  "key20": "46VptDFMoJ7BozNG5JYuFW9qwgHBEaP8qsMSrEAbnA4yk9X4BubUVqpbfTZnR4JAq3QrmbSsGKxMnc2eS56B2Yj2",
  "key21": "5WZWvNuXFqKPNxniYxYnqpsE3tX3nEuTsgzoYZa19Riur3n2K8AzBNn1RZT4HT9WpPTDdDzcHnLSb5TU67dnmPuw",
  "key22": "2xTxUhJcieiv1XeNdDV3He8t6BD2Dus1qKrJMccAuvuBsgtR5mD1eYXKVtQairspGrdzRPqX6Yk8d4SesW7iYJ71",
  "key23": "5spdrjQJYi62W2f48iJh8Bre39j4Np1C1ymxQvCWLo8WKExjkEHvuqhPBkhzNmnnMWe5hxp1CCpQj71NfCmaEzi8",
  "key24": "3jgKvpXUjxwvPEiQzhMXcQ5s2thVJVpDJDp86wKqC8pTiio2r3GyrCEVyUhovNjsehX7wKMREqzaVFXwwdaLDbFQ",
  "key25": "5oC7VLZiH5gh2VswcaJPacz8QQEA9gFyihHEyemhs2KqoiN2UFGxmwifWgzcCeArS8chbtDkowH6ua5LAXuUAAUk",
  "key26": "3ADeJwxeRciHVYbVwNHGQk7nSbBhZ8kApGsvKsBq2dsr1pKE7u4icffLHwkEsYVRGuHoE3tVgA4Nm4NeoeaVWthT",
  "key27": "5mfPpD9kcQi383GWwcFmoNYLfQmLpJ1X3mYUt9Wh7TvBViJ1Y6wJ6XoNC6SXaVQF8uM7PogRdwFXFTjPquS5KfvD",
  "key28": "XAJQUc5Fw6tvrcNAJUgCUhAJ2KCPyhH6daGXSRixvB9yWCNLFPYrEnD8JNfR3agPiH2N7FQMMyvhdtpzgQgcMP7",
  "key29": "5bxTxWnsv3gYvDtZnLoc52Bffvn6iFyF1bo4JNWMdCFdW7rJnXXHZZxTJSvxspnzcBF67aXnBL63nQCNbWeFDB4n",
  "key30": "4d4pJt6np2cssXnPxrNrGsFUWUCCZ6gBR8qD7FUXBbTU1RQASWGDC2Y3ykKToQ7dyjWufFUoctCo34aq7B27WR85",
  "key31": "5zz4C4HNrd6WDqpgPCWbFmovSdSWZXPWxj4WRj8RehbPuD72LxQWDv3ZxwwkwmU8XxkvzpsfQRtNwLTZLDpJpW8Z",
  "key32": "4F8jbwqitTRy9DAxN1hL1DjKpkh6anfmoCuvEZ78BQxmpAWTaNDezrYEX7zSmbpBuoqVB1YoVN8NRdL9f3QvyQVJ",
  "key33": "4T7YHG6sbwQbGUdmCZR9P2z6MpA7fWW6tgc3C2B8vwjqHuh4V7pr58tKWt3Q9LgcCR9brMmg58PeExFALeEMmUiC",
  "key34": "4zyJFRDgBgaxbKWziWuLL4NU3nxGnjj5YkmoPvZLVpSov3MrgDkv5rX9nGuFSmMbkdfhxuBs3ph2FRLz9wWGJ94V",
  "key35": "2dE8ipkJmwTYMPz93zSAc8KYfbmBdTXM2d4evBYf1TUHhB3MRLYMAwfSqzknLYMwnBj4LR8Wey5dZBaJjXanyVHZ",
  "key36": "CUqDYdWyNKxNq59dPzx8PicSEQ5cx4nL37NWZrBnRD3NuKvxuznna9cLrA9CGW428wnF78EczzuyDD3zjnURUWq",
  "key37": "2rAvXobtpgy6xDE8S2SEcXne3Dv9nK7PzX2eXiVRe1kZ8v7HTQqjAoDLbz4VpK9sYMCjicvshUTwteHeb5dhUwxH",
  "key38": "3nDgPAYfuasy3GbdtbRZ3YzZ1MPip8KfEA4sZRDX8fZghDbuo2e5UigaSPFTCYEAK71fP3YeuGoa9mSs7a3ZVPD1",
  "key39": "5XQSNAvY35128dQDEqRDhr2CYz3uDtUmyKQUobJTf8hna24TRNA8TQgag3AFSsU9MeEtDteRQtB5pCoLDJGNhRe8",
  "key40": "2ST38QSTk5HEFoN5BK2cbsh3PFuHkWgsSGUCjHuSdcQbCyCreEAG5SXhsorRbU8uRBCNj4cNVj68pdr5KotqFSEk",
  "key41": "4WNwjnanwPkAPwQLRLfRMnFz3XvKmzonZ8iXKKGzwSAkStCEse6yGxBUX5QrzYUmJy3tBX8KHr388HHGMaSYJ5kh",
  "key42": "8YnZ3h7qf1m7b4DuNiXyPTLMpZNybMF2BCAUyCA6pfkt2cU6UicvysSyL8KUyF9mQikQDHCNSj7q8ww7R3SsN8J",
  "key43": "5uxabG1vqLgceoiUjkk7Qrajz84BchjCbRmLGN9PzV225RvTpWcii6Yf4F98U63uTRQVsAHM5zDSrN78nkw8FVgN",
  "key44": "cqwPgJfY1pFgcU2nT5XsFQjmcxc6BnQTV5dCwRAGHJ4bpxfpj9reUCza4cz5XCN2nRU4PfpiUUBzE2eGovbQgbD",
  "key45": "5seWiYW8PVJfPEaxEdLuNgD8RUa4nWAUsYyCfVtFd9iX819yypZEt4HNDVQ6UdzanCAgjLcofu6qPcPLk5oyUNYd",
  "key46": "4jto21ieUYsEwQyNFs9qShUdZ7pHkXEcQyFVURgEK1De18DXSKW5Z3K9ToVmNmtmcF563aaP8GDBbocr7oqfqobQ",
  "key47": "4YLankqf3BVjVtLomCCn8LoKc1BGeRJg5ys8o944Uk3P1mnUgMocazNntHUq9VsJkQ4VENPd8iHs3EZcg8aB6xq9"
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
