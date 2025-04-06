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
    "52SmxcA9619ASDrD5jkoJECLNeSsLHMPUZP6qPXHqC6TaGC9jymvWF8yMVXgyGs4frJqJC4QrViLYvdkhC9CQwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gLTNYHuXf52dkAuamt1DKAPoC9r3JtZvwH3YfhemH1r4b5LezX3RhUPjA2Qm6BxaUCbGdAfd9211qCEpAGbpM3F",
  "key1": "xZWG4FprnWNnwgVnJXQi14YYQo7X3B57ocAzmQ9kBnCaVJ74nJYMQi5eD5SqENknDhQA9pSMdBZKMMkFxS23yx5",
  "key2": "4mwqe5J6eXUjN6LiYEVrGoFX1sfQQ8AF3BR1Dpifrgxp6tDFvpBeT3jaofR7WMifk1N9m9D6J7YBmTcEAWxBniXM",
  "key3": "4sAwAeEGrMNCTPWFFzTjDVNFFReK8mcXeScdG7k3rvpB7vVjip2kfZB4NmyLBEJYBzYjULF9mWZLeUAUSJafx7bq",
  "key4": "LhfsQLDrqW7d8sDu485QSWdn4eExjVTAFwp2coxV6EuHMPWnX927ZvJ9LsD1GBd6SSP2aKGcvoiZJhqwr6byF9k",
  "key5": "5gyvLpuNNaaHnwXo64kmTZVDKhuhUTm4FYudcDeFaTfvAJ1SomPyXAUejvPKqsvtms3P3YBetgF61CUVMhvkkZ9q",
  "key6": "488WNF93r3hbf8kFZD65otYqyo5pDpxbKsDSQCNYStq1QhfCHkCiaVXUi7Sj9KgApD4uSLa7ZEEMnFngDBGKQRtx",
  "key7": "dbEHSpZfg2ocNvMwuewAvZMthv5QbpZK8aV2FB74yR9jeaGKPVR2z72ozgDrbdxZ3FvTAmdPt8GsfwSEc1xRw38",
  "key8": "5k4Lo1YHrVFE9WVZ712osGSnQQFzSXrFcnaQKgn746fvNYAaNWVKgHaTvQyFWMrPbHvWwCeHzEqUyaB3crPYqpH7",
  "key9": "5XZ7rtqu1yCk5b9XGoPqNH3y1t6JaVWNoxun2vUAkWJTP1iitd9WHGyXXxSYuGi41YDXvsb4oZYQNb1nAf2BYMHS",
  "key10": "2A3obu1oKBnLeARh7Voe3MAPz1HQgMfSKmgkG9p6SV1Eubi2F6kDjtozy9DJLFnyEZbW4MbCh6FDmDPryRmkJFDt",
  "key11": "moAAa4NaYHdx3sJSGEVLsrLF3gyyW6Ta6hy974uxoEH9XN3X7Uyyo9q9ncwtgA3FSyEz2mRY26yPuFy2d3LSL1F",
  "key12": "4xbThyDCs2v3uqAzvNMXoNvjKiA6xo6XyUtcXtiqErK9i1WuhoujbEvQ6oNGzvFDGW3X68D7o3k79tjtsgA7ddk",
  "key13": "5qxBkqk2DgxizusUYeuHEXs9AVCkjbkD6JbGGgsY4MRX4XGD5N69HRDYFyc1N2zRuAMk4yu17u4HMsoCwbKyxgtB",
  "key14": "59yUvnwPeqAeZSss9qHUyhhjCto5uGgtphjvNkkmjFPdAWs7rMHpiupSbjxm8kL53JvD2F4USAvAzTB91Ew3DA49",
  "key15": "2g84g8PxpYZt31sYg3VsdERTGunoLvJAtN1bZQ3bSQ8PK9WjVmYKEzkFpU4NymKFFQhh31fkZyDBMchqywr7NYZi",
  "key16": "3C3uRRAc84KQfCeRwg8X13V78sWfkioAWQyhuhsmAx78PRX78bqmwibQnP2CKopGRwbQQpP9JnaDaAZCFsHszk4F",
  "key17": "3SCd1qufxoHVAitKiAPutsHg7PAnFGsStLFLsLsXhM9GtQAu5EmgmpQTRPTS1n6Bnu1P9h9GTSXfuEGcircpePLF",
  "key18": "29N4fFZKTR8qsgnEKxUNepn5gep8GdC6rWdo9Rhx3xE9qhJAWke3TvoPkxZoa3HXURpua1LeCYWwqqv7kto87ueq",
  "key19": "3krGvgc8NCGCwBXySZPy1W3nTUnPu1E7oDLxfyJmmLV7eZTYDxEFZVfd24QVrnStzGLecKsDjWJafndUeVk3ShTi",
  "key20": "pnB9cBP68qpbk5NGq8GsJnfpCuLCY1AH38UPmQQrFzKohWT1b8di9nKYECgsLeFXEbbspKvg85zjoECWZKVN8fc",
  "key21": "322kZtSwco2DWBSBhayLau2nxFioYxU7RJkKv5f2kVjGyESW9Ve2BWWcCj1CsuQDjGHgWhsQGfVSifFUzX8WyZN3",
  "key22": "5AHuVKWmWovJVvdRPUzhVGoRFK7hgbi8QjvaLjteZsBS8xjGPff5jw2Ue435jFt2bh6NC7NCuuStuRR8jpRBoYdz",
  "key23": "42No4TKnWd46Xaa1oAhbyzjWaHt3Y5XZQE6rkkp7tiEREDn7YAWCDPf7H2cTY69syNH8RmaAd7nozjvhHmoSvg7j",
  "key24": "3ACkSM3ZLnT2LKWKCR7qmxBhj5pUTaxyVWq5i4YBT53WNZ3LwxsPQRL4TP85uWJ93WyZCmJYLiHQ3KYSPBtfpoZT",
  "key25": "PeSGMkD16s1cQSPvLRdkcis1EqPxQuVqYXYLQ59R8ohCnV53hngqty7ttUzF3FX6VRhT4WY97KfR2dfR17vXSbg",
  "key26": "4fDkVbLouxF71beDPuHk8hb82FiJjJXY4SEWnR1aFFenDqD2b1FvFs1QjCqvZbsPKUN8NWGkFkwdxYefgUmrCXQq",
  "key27": "DLGkU9JNXpYKAVZeLVBpQPbP9sS2dYd4QUswWuXD1WcrYscxJdGGPKTkRgetsFRau5LgYg6FNFcopodU8pD4ES2",
  "key28": "67KiPELwvP721RJSHZwuEaPngVPaM6FW8yCcuv5em2h6UPonSP6wvbpYWxCTKgk3ioxoABPWShAKTesciqvDrGC6",
  "key29": "5XoJ3wPHynYTTNS8oPKRPZCD5ADecyfEWUtUUsCaAACVpCVbsXkXxn7RtAGcrmVUhdZhWty467w1Hoi3bXJFwbMN",
  "key30": "2RLtLJa62HYAgSKBx7moBoWVCPotexGPriXSi4mTuU5UeSTc6oNpcK3S2qP6AZhgthfLnE4j5A4UQ5xmiitNeEP9",
  "key31": "ELhsmbpooLULvnMEhccJEhreX2kTwvimSFJPbrAGQozf1CWv2FEmpLLUXRD1feK3CX6KAssZQKpTqYnAvSHHmEU",
  "key32": "LPQ2psst7X7panFFpaK2j2TDri5C3U98TiB6gZfuB3brMLxkKt11ZvfiEJUqPx9TKGTs3ijhv88yDguZg77m95m",
  "key33": "2DTWXric2JbGaqF7xZEGmeynaPi2qgFxPNpBa6KvHUnhWrkcfdBw2HRLJMcVmo9VpM5WgHH47tpFXQm1QNkBTMN2",
  "key34": "4mjhDc5fheWmUZGjCkQMNFA6g5pNpFFogj3hbWBsFvEg8PUnhmuvN8oVynw5kvA77MyoJUt9ov5DUMw7K3LscsxA",
  "key35": "4W3m4xhcbKvWi7Dis8rsbsvdq7ayfLydi2BU1ozbTc5fHvjmM4gFKRRSeav2cuqD3CxGP4h7hzuXHVvrKfZvLKcc",
  "key36": "2AnZdVFhcNxmxUj5FK6XAVeYbXhmJhxRn33Bsxv2gApTf8Yf17zwwjpEejgZFSj2GmWEHiRjLtfPAjbwKaZzQvMy",
  "key37": "4XkoPHujczh5hUv5SiK8RS26Dko96GKSJLd2zshD4B6PrxKLLsixReWL6GbNRWBQHYQLPtxmTPrwawKLQ2AaBrvF",
  "key38": "RA6zFDp8uFj4FZTrVap9NEgbBsDUbacUQXUXfekS9LHpwgj4YsiVnZRyZrJkmY8ejQNUstAFMcSjdNVCWMwyW99",
  "key39": "2xZFpxYh3De1e4siBXtajhFDVNPFchEc45PhkSsAkdMFD52LMWEBzH4MJHMHVy2srM4B4kxMVLeUgsh77wmuv1xE",
  "key40": "e5WX5j6r2rTQaTdwCf7ziC8QL7Bdg2qRZBVTyqAUcoHqt1x7dfsyXiKAubHyxoGGhRuu1czfDHAuKg4XTLppF7Z",
  "key41": "3HN9eFD1gcEvMrSVAG3n6JTYpnvNpF3s87FJwWYJD31d2XVVSxarXppZiVFTxz4YDqomrkcbJWNVMND7EcKjqnDr",
  "key42": "49wcXema6D2EWSwjoTWq5H1v6St1PdKRgBcpw5y7WW8hN8nfNvSGViMMQAAVKQiyh9T4X6EREGykX1TEp2FfE1WN",
  "key43": "2MrEiM6EB4kHfmuaBLimfS5UTkRr5QH9kaUXMMBWrEXb7pEZfbus2rALKVBnTQinxxrQYnxezLq9VkpzeUKVqEjk",
  "key44": "5kFezmR2sRtUQYPNsUrn4nnkpojCBz2HV7TGfsgLXyvUGmBttrPHjnttTwc2jYsKxLiQyorJ96mvHSWxVy1tP7Gv",
  "key45": "daxnjYxyAnDd68kFtr18SDbD4Mtr28LrP7fdNnBWR14JwsbaGFgwFCshEPwcTe1Qw633j1Ppq7d2WrNJPmiLZZ1",
  "key46": "57WNChLAH5EmAioSFJHULcKu8GSrWTpXcNkhGix2YHzkLWyf1dAduARjXghCifx5N2kPLTDmfdpz3jbhnhQUB7rx",
  "key47": "4raYbuut4HqU4V2eg1HVNUSbvuJ165GZ3iWp8SmpzykGCDp63zE4gVKxwaXrFdS68KLK9j4wnitrsS5bJQbfN7vo"
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
