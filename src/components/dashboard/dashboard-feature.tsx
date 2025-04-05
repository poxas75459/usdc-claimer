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
    "23RHvgX3NpLkwdDbgs5o5AVKfukFo3qHCBWg3jD7kBqhgbLvtvWCdnZ6HgQnhMxuo1SLqxMVfqpHgJeWoxpMFdBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tu5jLqoBWGA2MuQEiy2j4poJfiLG3Lyq6hJnHYMHwA1uBDCqEXnfmsBpibtvAxGm5cTpttGGrzVo5vFuQhiJQFR",
  "key1": "2bMKSE7YhjkTc2MH41AgX2pDhSAikihsrnDDTqkAJeUfosyhUGogXX3F4yDdh4RHqHu81XreXVaLDHqB9h4aa9qY",
  "key2": "4aUMKk5Gp9Y2r1gzxZRrNyqdTGQivrDseY2FCDm2fASjkzQb4Rk7E33s7QhwKJ6oaEGJTd4xBwWP5U3oiEtSP19w",
  "key3": "R7HKLdW7TZ6Hh7RwZH2eSoRiAMNKytVJeRGf59uJT5uTaU8mJCAt88c4BDK3PytpGEHSgrMxTdgiF1xckRt3RCh",
  "key4": "44wjZwvtU51ZAiv2VWABccc2SaYCsgAMht9TEPeV6sy4SkhL7q8fkXNbQkzHg5L6dJ2ASUquQyvpNBRPG5u345pE",
  "key5": "5WEoNzSx2hV2iPcmwJDQr1qXy3uc2KntFccFVEUKoH4bX65JyGwJNvWdaL7NyJeXNqpSvYsZGwv5onNCXLg6B8T2",
  "key6": "5t3QhA4MTXVkGt9B1DnRBevSXyio3cv1L9QkrU8bpCcDeGNi3PGY81FP3SndP89A17f8TzEwiQoqb8e2ndapWyMP",
  "key7": "2oU7QGGLKSuNG8njsSNfEnCfVyre9XUVPg31ZYo1BFzbDEHZMPJUjepHpZ31uJ4qtWiPQXn1CjyqBBvieWYtNxX",
  "key8": "2mzi4kidTix8dpbfQfwsmg6pJ5WsgG3fhX1wXkpx6LZjH1V9ZHVnF9TbsUg1vLeHk3aYZdotDmxA29rjPPekLZgT",
  "key9": "ABkTEW7nb43zCqhcjPNw7vaRAQrBnGDmbNomCY71GbJYGBs8WLwjWr7Yw7Eocfxz8JqTNAi3QpJPmjqaAXtm32y",
  "key10": "DHQy6ZryoWx3NV4iUHYo2ZXwCv6BHywL7Dn4EbiuEzUjv59MksBU3RXrFaDo25MvECABwQ4pu4N59wMkL8BzM6S",
  "key11": "49GXRx9dfRgAc9EcpaXwLR9We8wYhrqSu13zJ3rBSc3gFYFUSYNJyRQtMos5TT7ATujVFnBadHwm46Fb3LXmmv2A",
  "key12": "5Sgq7tYjdGFtyqoYSMGoaRbK6yc2AwLVPP1K2FkioHvvd5nBgzmXmNPgxfGw7NW2hJ14LwfmHGxtukoB9frcKTcV",
  "key13": "uC1sb13CgJg94mcdGaTe3pGkX8vC3N5rKJbY5KpeXp4DTMrQ3jq6V2NKKvL8nzXGtuVohr98ePdZEAS3pp744Mp",
  "key14": "48gYQtZATdGrrEP83JeVnYe3GhKtALUXtZJvu2HypRoG3yQVAeyPzKRoLB34AXxZHRMajjaS5pPvmpcwxYJw8wN",
  "key15": "3JBw128BsBuhVLTxyFZ1B4bXaoPtR6tMeuJoo9aX7rBvXrw7RBPJNXx1Ay9piVnE74Wb8WAC28c1yxcSBGDAtunP",
  "key16": "5NXe9f9EH3oeanhbzyWEQ2DVARxHhNxo2L1n68SavU5WTBGgxhhjdxTKxSLe8cr6kQXMTuxoDvcAiKTpayaL4KEw",
  "key17": "4rt5vEQUY2yDpb848sNvhTiBWX1uYZW845PnUPN3ANDDCowMst3DSr9jfc66MZZ1TzK6fsrcZFbCoQrJeAoDfQwc",
  "key18": "3tG8L9vth8jJckj9uao3szJro7uY5HNe2JqSU6spfeVQYZgUMGvSFnWeutUcyZgw649emAcrvZXFU9n3s79fb6UB",
  "key19": "sSt4btUHXUSkpqk2nMo4NJjeNb1pY1VkuwwcooB5nS6cH8jPbWbWHq9uHVvdAoNnZ6PyQRWUKbKHdKDks6wpe2p",
  "key20": "33AUCCTjP1WwtBU8nKn7RNxfqYNAi9S2FSUddZHoFH7GpnAs3joWtz6yDkj1kbZRaP4VpKt9H9DRqq9vRKu3QJDQ",
  "key21": "oEkf3GXbNcmCjp7mqLtMPndE7yrEoAYCTXGJsG8kgbE5jLYmY5oER9a4qpRJRYGePfEMgBHgXnd6pNiXRZ38cwQ",
  "key22": "5hpAL6U86vhR6VTEnP1qaonWbWnNbJnyf9DUsc6R7SsuCy5Kp5xxVLPLfsMQ4TWhHktb8tyy1zFLJo5JG1ChRT9B",
  "key23": "36PEkQWrw5Vb3beUa3AYnEVWfw55wn6CDP7CbepFELRkyQrbxukmPVYbZUV3Uyf6ACh3HEuUafZBNvfACvPqL2FN",
  "key24": "24ve2wfG8WkBoUA3p8VbMYwBv4SNmSEB2fRzDwzHpkD6utfyK8Eh7pqGjBk4kuNLtQnXQb1BWm1FvjjSx9xn68HK",
  "key25": "QAAV9ehknQbwQ1cy9hPpBTWJ747QMgoVayKQGtvuyYqefQMQvu6NUbeG3DgvSP1wDxvG1vSmodee3ApZXK1jHDt",
  "key26": "2BqryR4498zSAoLMSE2zz3o22A5KBWWuPDLwMgHwi6qwXzzP1oBs8yqJ2Z8b74h5KucMSiHPMF8fzGoYQdwVZnQk",
  "key27": "vRqq1WSuw4B1CeNC6Q974ZNF38QKh8gCjybLms4sBmv6SYXcSKQXqLfTLybdK4v2MAqrkiY3pDpJQLHqD11m8TQ",
  "key28": "Huqj8cwZ5SBf1j5nzsPvTyuTPYuan4NBYnFk4zke3g4CwajzRGpTJr6kD3wdFq5eh1dXy4inBuWJY9yhyL5FuFU",
  "key29": "2WXqE1g2PbBYgmKsmbokfnUweogzx5DK6PYZbrVs217xQXEQLeypUCYa74RJTZtCGiZzKj3sZGb8gRUeHeQ2abRm",
  "key30": "5msHTJ92UavaoXucNE3VTzewgkW9Qhemy3ncn66bXbJxydgRCHwCBtoUGcuJu943VeXHbktHsqc5kzApXyAcK95J",
  "key31": "3oZGnarhzpipB4UgiYGGpPJSxA3pinQGzNyZEMrw5B2EYA4cYs3oUqwtsmJa3DJ3cYYJay4CvDduqbYqHaHUBTvH",
  "key32": "RnozVUNTL3ymPU1yFvYogCP6gzpY3hpPNdT4nhm6DSbApJqbYEq2zyLQU9GNFDwhV7xmvxFYKuSXPP7xzKgX9k1",
  "key33": "5io2T8TdNQ91KGK8AyU56LvGRn2ejntRrvEqxy29WGuZr8ntxod98Q4RUtxEXQqaUHPcTxwRYrPPRyoNyiypja9K",
  "key34": "3kEDV1e2iwdDveJURZZ13RfXDLBUbBBG9XU8TadZwKQFhsE61ZMREaVHdUcy2w4q4f44oZBHnTVCQnu2CyviheYs",
  "key35": "5sqxS1pQ553XCWVvmFmQC4NTAeAK4ywz5NtMascr3dLXY9tyCLvKLdWqSJuJG2crXiveFnNB9YUYZBuwmsqYUeN1",
  "key36": "5VpDQoqPtw7f4CwJAeeKiANhtfNdEo9BhSqqXkDnbUDR2kwKu8VJjoTTCKyE2CkCLAmSGUAMbWBt1btTdZwrYoGD",
  "key37": "2fWNpvFDWBbpE2UAmn1pHbndLCFFiYxnrEY4tQSxHwg1t79LFbrESUkMBuMR4U8BU45w84NYfD38JcEAgAt49FNm",
  "key38": "3RCer4UT2RAQJmiHe4wPMR1n6AwAbs6zL3hiPM86vhov45c7G3FX65ptBff51r5SPfaVrbntp93Uk7wVtz9QYhyY",
  "key39": "5ffbv5Ge1Mu6gsBxWkWQbfuAefck2zkx8WsFQoEMbXoyg9vhSueU2PUxNsB7mK21vzTAQ7fy6ELsYpinhMUinE4Y",
  "key40": "36kDCP7wAbMvRLk52PTY8VDWkJD4AkP3o1ydUKjzUt9xXnzvxHz9oZGBucaJ39ZkyXRPnHReZTRYDGNSEAJ98Fqp",
  "key41": "64dLKfCYkv2kd4MYvpRwixqH3rP1SrSfUZgiVw9A5Lz4vqC3eM3DcZgm8worrLMhYpJZLax1drxWXu2JEtmD55Ud",
  "key42": "REQRM1JnUmUrX6rLwo25e2jtRGVRWux1ujAQgGhzGEKkWdRwdu5wEEcNsV4xpSNP2UpHEY4KLYG1mfP2vG1SWTU",
  "key43": "bsspvF2Vbb74fy5sGcGRo2yXoY1GW5qNoLAQP6CYd6KtV95tKHwjsYRqfXa41ivuKAzVjw8VcsCf28FKwVtDRwG",
  "key44": "d5p4ryosx2T81bEqMeMyv6FEDgnwZiUVFMJKvmb2UYUSejsbzcgNgiNSK4noiKU1AB5zQiTNkZLaThTtkUJFS36",
  "key45": "33qT3MFpzFDQbkWR9tsH4YCvUTCNwovPZwVJ9WwHvQtGisjQSAsTwCVDgH95Go9Dxbh4zRhWGdWY71oLCwAfQqtJ"
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
