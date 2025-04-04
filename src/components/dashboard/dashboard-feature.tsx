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
    "3vXiRMT47KQfbUoUf7JTL15GnWBAdJJYuVWPCuprkwDhEnUypmK1tXLnBANu82NcCR5YYFPJUJAew4QCESvcHBGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8zV6Kj8H3WphZWnBhczMvk3DbC49PQNXEtJ4ZcruWUGBdtdxn4Y5WJaRJwT52ZZWhQMiRwvuhtsV1mA1DheTTs",
  "key1": "4BTEZUkxxxfS5LhpdFFHBnpWEv1DTaVDyute62ophcyUwoB6zh15b1YL2qNkBksxchWYLCdQy3Shu6VgBwn3FSy1",
  "key2": "558KUJzbkahoGg3kZM5xfGDEu4hFoKddYUj6mk5asmv52CgtKmk36pjnAUrysB3swXmcRN37ZfUwQELBh8QZuvzc",
  "key3": "4y51kufMxvMmisxyyFDPcdVEDP7QnFxvhoDucMD9F2hUe96WaB87U5x1sXv1dk1TksUrdDtfXnWJ4tS59Lj1yiw7",
  "key4": "23y3exYeRNqriXzrNbtJ2Vs4XDDhsX2V9wzpFzARtnyzSu1BnyHRVHiwpbAUwVVZeUtoCSP4UWeGXG29LuM7beZ3",
  "key5": "431zEkWertS3JHsXaLcEth3xY9rSPYSi7ebf4bmJPdh82aTsoSuPnA6k48UR4Ugjh8YjriSrtqxoaBimMdjLNToX",
  "key6": "53z8DSnGcJAEzdTzpA44NZD6su7yeUoprr6Ff4j9RQyYC5V4d6JG4mj1a8799TjeHt6ecGRf6huDrXiztPVyFNa4",
  "key7": "5LzWoJdwiZg6EbCsMFTRyFbNpubpPZaHadd87WjnkJoa8x3772p5DiUAHYd7eVJwTpcaaZkuLJKQFVSuDJDT9XZR",
  "key8": "5hNZ8tmYDG9TvJqcquEg7r6BEFDkFiBDrYBMCH8PaNPhfjWBD9DQbu4vDG5LsmWTpZjx1CcaawTYXqxuVuqXvnNx",
  "key9": "5Pcqasd7f9W24TxWar5d3kXXrnUpwisJs6JD3r8HX3FUg4vtftHYFuDTNfnfpgiPiKKYCyZAvf4kvub7WYA33Fi8",
  "key10": "nuvbNgprN9wEUAw8V7ofoTiD6oEuGj2osqvXLdTksqHBjZg2AikvB6d4TsypBDrksNaAS8xtF8pkFxeeuSatvhX",
  "key11": "5kiHyzgPm5RncdXmu8b8E3kxYezdFRWx9ALmMvypt2qn1D5iSMBCEbXQC2yxT4xWy3EovhEgrNB8rkKP4vhgZhYb",
  "key12": "62ypFxh5GDaTVFUm2mb6ZsWn1rAtzivWhK6Y3QwbFGVr76ryZh4fHpNczoEVCWr3Qh4BkZZaKpg35V9WxP76FgUt",
  "key13": "45nnZfiWnfqJWsWh5PbGYvwCZGHr9upp7wx5CcjrtvBTpL3ohbWFhJiX5DFs4EkZ5e8SpD1NvYG4wBvn67Hsuuaq",
  "key14": "HrJwaUv2kSmdG4T2UsiMV6nkr1CwPRFdfyWFSYotaMb6EDvMUKt6dfZ1twREDJDo5kM69Cu6hUZrTcrdaiq8axZ",
  "key15": "7NeXqepzBnfdnk2uNzqVFgCkczmrQ9kXP3jeaA4XYiHt6cekLJjh57xZYdk29ouqsPHHbMY5XYuoX6QowrRH3X6",
  "key16": "5ryRFVMuFBdu1sLj1yhVzTLpjcubEs7EadNqGeL73HrhA5BjHy1b77tAqfwaBSket3eZe1d6opg5nLN6oB6zkfbC",
  "key17": "5WFVHRzmsnJqQ4VZ8ZwMiUAbPWFjJUTFstRxcNDGci9aP5u1yctktAj9Qero1yfyk3Kqmc8c1r6Fbt8egu18keBE",
  "key18": "5JHp7nuV8qs315s2WfdQCAumqdT8wEXaZyHJC6Zno2wJ2ZNepiRJRM6spt6TQ12mMr4LqgrqgrgxrEQLToD4rg3n",
  "key19": "4PDTgLUtYo5zMJVcztwx99euc2ncTW5oNxmecEDAnmCuNUATvAgapPMKXosdCaoPEKW9azcmwZazmtDf8iT9JFM5",
  "key20": "2589WAp4naqAW9SJBrm6RFpGpF8SXmeAcn2byMFVtqSxGxY6oEkEK8FFawuqPAKae75tNowECnPUgrmP2WoZGzUi",
  "key21": "4irqujrGaEYMHNKN8yBS1xE6T4B6VtECmTA9aA75VtjKakCUDKPWkRBPP6a4B3Xyv3GYK4BdHBcMfviHEJSHJoCg",
  "key22": "22cSS56AoXqeWFkrUCXwi8TZoJuChkAapuKQAoX1WvDptYZVnYW1cVSepoZBBjUkTMqFPCGzWDwzfZ1Eur1GFRGC",
  "key23": "33kBVJ1rQzahdJzNSdPiHk96fKiAqwYRtQDaReAy7R6428yY7sxTp7AD6PWt836ooMWRohFcrzuUmjNV15KEbKrW",
  "key24": "5TbKHPP16Ym5woB5uJPuC9oAeS8ZnCSTiqkLncJjyaRJ7QQ7Baz2crWVmSnjYRbCttztLc1hD4D8kmZbvAYvpcmP",
  "key25": "4UpHSfF81YWckA1GCLA3Azt7VK9rg4857dQv7o8Twioadd9bwf3QHvA9GDKjrweNFZf6jSS5abTrUNi63zCVQRqY",
  "key26": "bXfXbhcxRarxy4sk7ucLqM6xPFZmprFgtzJvbYGGN4Tr14MNj9ZL8dvRWXTGyypmVXdvkiNVQgw6xKtc1pafv3v",
  "key27": "jP7kvsXwfjZnQxNPanf9iEHhS1az3b8LdC2EazgdZyJMnNFQWkoz74dG5ecx4Sss2B6idDk2d3GYodUtUCf4F9K",
  "key28": "3JcCEe33K3xYnFvnCDvtF9TqZxA9Qwx2zjtK3cVf8YsJnbQ8KgSqki8s2RpwUWnzJzv7j7Hd51tzb5AYxpAxb2CB",
  "key29": "4C9gNKhkWhKbGJhoxFQixt2tQjKSa9ChBVRH8CY944LwijMN8QUmXskSHt42dqczttu7NPDYcvZuHLgA2LVpJHDs",
  "key30": "3DyGNewHwrrMs2aB9HxKQCK58F57NCdqFVSCu6RApJQQ9KV875MknUDn4bAmatX6JnrpWLdh6EMDKDoZJhVgYgrs",
  "key31": "ovRFZ4qvsy4R82oBhwEomPZ2Qo5stoBjYQkCVggzNDDrQnuwYsU51b1gLmB67UXGkMEFr3v52zxqvBpSJEf91DX",
  "key32": "5xnGyRzdtFHEbsMZBiRNdWBEQ4NdSHUAveAVkbXGMo19aJ7a63ceavmzUD8RJzMpSRzeXJaSD5rcLRXZE8RTwHpv",
  "key33": "3HzpGMwbsxbFnToCc3htgCja3NBAvoSMye16Usf7mXuHPJ8ADCKkEEEPUGs6R2vxnKnj8VEJWnLFgdhAGMBfY4Xk",
  "key34": "2pU65T4sNRFBiGfKthhTvjPbvwuCDUHgfv6TTKBpVzS3oVFzxt7pyo34gtWt3vFNWQp3nf1xqAr1a3eGuSD9MN1r",
  "key35": "4Bw1ekAYC5BcC7oDGKf6rmBmCrowEWC7koR3wPUBdD61R3422gmG8SGWhda4SZxDy8hhEeebuuugLCt7do4YwFGo",
  "key36": "5kRY7T5E3D9cdPtoU9EBgzLUHBUrb8PXMdQyt4TWHuWEtkXrDKRZB9dYnfK7WdTTanVAsxPY5AcqCQsrAcpw6pNm",
  "key37": "139dpjzEGy22VXpvTR9a5D17VFx33MUq2iFJ113MPBmoQZD8siLyeFmGHCJ1kBrw5MXrj6XwYstAt9uiKjz5kKT",
  "key38": "TM5JpRj4oer6XsiKzzjpFAij58jSVL4bpoKbLs55QEhDvtR3EFn1AC9DvtpEeyNpTFqzTn5U6UaLUVY6mT1hv4T",
  "key39": "3gCSBQhnuERhADsNCdC94gfkaWNQiYSQYBFNMekzTMgwJUntgda73d8nTPwXmmr2yWEvxEBcrrBwMYMiDqB5SEB6",
  "key40": "5Cy6kexq3itB3xRumQJqqoWry5oKExN2Pef2G2ryoQBWE4ceiLkvrF4dWKYkSEEdzu5NENjBExzos75bJe7cx2fH",
  "key41": "5uWchosuRNpL2zUXEJq9VPmn269HPkMsUnsx6TA1GcPnHej9BC37qsEetHhGWPwSCtxBF1CqMWsarPxrtQCyPVW7",
  "key42": "4phNNyVhnicUkZbUHytB1pcahrfcrpDULVGoRichfr56GhsRZHswxhrgJ37ydZkXwXqq74E8VNVC561VuSVqL9zu",
  "key43": "3wzbBToQDrNBGN5wSva7UjhqZ6k7pYDEuy8BPydxQoRiQLB7FSihcsZQ8X2rJRcok9AmQHratk6MgBE5q24FuvKq"
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
