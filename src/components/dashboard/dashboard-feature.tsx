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
    "5u3fDU1wm1xwthth9iWysQYY3WJvsoVHRdRaxQd3LY8aLs1HMFyq5eg3htZzJKBAGd58JmdAw8282FyVQwVQn2tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMahoL1Gn2rCKf6faDKtbt5or4mRmhC1Z6J6DppU3hhG9GKoc6Yjndv3t2mHuXm6huqRgHjy27mQEeTTNnXT2ee",
  "key1": "4hCgHEUFZGj9EQ7Wy2zCsnCALNn98fY4YTkkjYnhykKCJJFe9DRUrfBQhwB1juudUfPDnDintsinKSDr4GdBb51d",
  "key2": "4EyRiavyV5ZEpRJYJfMciwPTbKyvdVFVDoxrdMtGJXTLJKVrejQnyCj96TrSJiiErF17EP1mZsvu7csLEsQzxxqf",
  "key3": "41XPTLSxSbjEEgucTd2D61VNtciJBV4XSsTW3VLkSaENsvUhvAvDY4kjchvKxrusdfvVECyWanhcszvkA7ioNwtS",
  "key4": "2b3KSwi1LBBzJk8QaJZdoQbjjYpwtS2BCrFGevUgiAFM4H7ZR8rMdDxW9nTJpCwtPmakVTfiWvtvcGdDmdaoqJG9",
  "key5": "4aNyhLvc6VSCfpuEwxzvSSfyRjayP56HS27pXncjVTddtHLPbo1oUhw4NwjGdK5xmQeryaoUH1GjxtHfTYrZHDoi",
  "key6": "waEXeq1HZPcSYwPo9MFyWJUL2AToMbHRDikcuw5RK1hFzz7sZe1T6zyUtAzGWhw5QyCAUT5PmUHAw65C7Lv8ino",
  "key7": "57gWRzVv6geRJSEbFiuzrQP6SLPSuwGxeikS4M6WKRALEVMugJ37Uzdsg9RG1Ln6ZWQtEKFrdHtKdCpqKZRn6w3e",
  "key8": "LSgK9Jb9gvthWoosAw2ubd8kvMsPMMCxjYS3pTQrDCt4aoYSVSMW3gUb1LHXJ3GLuByyMHHgB6sXmTkwcSWsqrx",
  "key9": "4CeKu8J6dSGfozb6FVfHTyTBtSEHqzXy8iE8CRcZVGbeej1qDTyADx13tZwTPWnJbeXc2oBd355ToN4H5d7bJoxA",
  "key10": "3Epvj4aCvJQBb9FmtiFHXGTaSKy534ko4S3nrXjzUeodHNq31qB6g9ezk2BznVdhaNThHPxBurJMKKojY4BqnEQ9",
  "key11": "5aihJXb3C6ivq6LKpAoC4ogXRaCdQ8Z5FE77kv2nxUDea32QvioGbi26yxmRoNZXqYkcpMLGBEBSMo1Hr9DukFiP",
  "key12": "hztwHx6RE9vNDsHxUaBLaxw6hXThxdAuKckeKuBGAqNbRMKMsDECvS8FWuRe8zA3Jvgopq2FTmpzEGgVEiz6Gsw",
  "key13": "3MaEheNDZPpYq3rmDKu7VMmZP4fTgKCQod4smVWsj5iWETWpD4BS1tiJXjFoUdh6r29szPw64BapCCwHNRPYAfUx",
  "key14": "3BUeXSZjM9KqJEVKQs9Dw8FfcnqfA4kjkWcXtNZmki3p3AcLdHUovDdpSnEtYpMkdn6NY2Zq5x1ZUv12KGhYCXqc",
  "key15": "34iakRKi8XEJDLHWqdmgc8hSKAADA77VaX8nAN239QfSudG494Jti7BMjr9ZdBkekz3baF9coWmmq2dZyyj4anWd",
  "key16": "4zD2FG7GxDdXZPTyjTACnwp5f8tvFfMTcJn2XA2JviwKQ7A953BGP38Jnae7ySAAE4PdADvtd7Z7RQ4hq3XbWeLR",
  "key17": "2kpWn8Rn3zxpvDPijB4vfiLZoz4q6QcecpTe8ybi5aHDsu1ewu9UvQeu4NbNk7Qa3rSURv4UdtNsySTzuCaFepeT",
  "key18": "4rmtJjcbXXKdtCC95T9uyBdxPFE7PdwsDfAD3PXsMZ7sDXaJy7pJL1ptEZ4RwurWpbrZUZpot8RQVNMGSxv5Rnhh",
  "key19": "SDY5ZqRN7UezdhMLqhyNHaQtNeS5gthfcxtn9szUjAEp54YRByTed438U75JZguE2vdcDURJjE92eawcYF7zBhE",
  "key20": "622kyqvNuQpAwWUtAzBcGB4CckouRWeCQLTCb457pSBktS3gWe8zUv117gbQ2C676Tc17Pm1TUQ7Vg8pgBJsySdt",
  "key21": "4EBZb24xKpJ8DPe4NSiTzHPhQHt8kZnipabom69YmVM5FRwtrrxdCa8wEgdKY8BP7fogaFnm1uRaAsaQfY54eeYw",
  "key22": "4Fb77WXiYpcr4tVmsL4peRQATLJJfypson5oUYCbReh8QVRniAD3puhh69Yy6u9vqK1CfUuKeYa6NbuvRQJgPNfU",
  "key23": "3LvTDDSmE5vSiFZwGzqgEcKbobJ8V2HnEsUo84jmFZeaewVJy178ncLU6UzZnUef8LMDGENY45MrAhZuj9QYT7Su",
  "key24": "5GqHdQjucGnqQ93Se5jiWgmXtam4MrFfHURdBisqAdxZS8fYpxb7vQnPpU74f8ndh5CmdjaGiF2f2iVEMHSGK7vF",
  "key25": "3mD9gohpXSbiVfcUcW4yLnDS8AsH3CftCSq2Ghs73RHS7VGPpJwrPyhtkApJ6UfAbH3WgcRW8PMQfVLQ4GTXMEHR",
  "key26": "3yLibwr5Kdvx3RFxfvaDNfWN2hJyTg7DPAT2CjXGG86LPFp1ia9dVKocysAsoaCATmi6UFYsFo4opeANQ6FAWDv6",
  "key27": "zoT9EyN1a4teTG1JX4mp7RG6vxTkbUyr4AkyKC4BY9op1VqvQtQAXtJZc1cVgZ4JeVQnyrcS4ZLzNo8QentZqbF",
  "key28": "2BiURfthuf7mZVi4gfk3enMYjURFBDM8Sqhby46zDZ2Uii7WWQwLoHLfqjHiRBKh9pxAgiMCWnnmeFDqMbAbY2nb",
  "key29": "2WrdZ4bvLe9acxQor9Vz499Xw6s5pRkZuiJDfo4VmZZ6oNGhhkzPrfoBGqQMGCSEHH1UCTKGaCHsqmH7kaLYZeGA",
  "key30": "2BxVoVnnyGSr2qKED4B8mKgsRUpZTWqb9WtbDJ1usF3bHRcPSy5x8uzZPyDzrLM1cvTCZsZGiG13BhFQ4rmhyoNE",
  "key31": "3sfSfBX7DX78QGcQtF8riMUNzTNuL332fVHdvoudLYGGHTfW44oZ6W1BatkixmyfrNK7Ltypek8kf2w8ovVF16FU",
  "key32": "2SrWkqGNzAyW7dMTC9mqri5qyeELrKBS2CcmuiS6VyFg9wMedJWJCDJrDpAcg2wtXaSv3wsnmfcWQSnCPv72G6Hu",
  "key33": "c7kvxhyESZSd4VveHsXh2PLNTrX541uyY8EFzRGeo5EBzdyzasBiVzRsHZEdECMhj5ryWJBQuNfp6H15LFqGe4R",
  "key34": "3Hf3RN7jc68bxDHiU93XQN9U4BtTL13te5wHAzbswQqfDmJn7YCFmdctg9frivqG7b5d6EDdiPG6JrfvLLDpkFvv",
  "key35": "61mYoRSfgJtM8kJo6cpjb5ptWDGBNx1CbSkm8VyrpG3Gx4JYpUybDTjvCGpAwqnVtGubSnzMRbYSWQDiJBx7fgjv",
  "key36": "GhCyFoGBnMGwEYyhhFV7Cc4VSyswVVsZKhHFR4X23WZzM6z3MEnXnhsDHUUBkJWCgQXa5HYALtQBTvuGu9A2ivu",
  "key37": "KPtDgZt8PNmXPnF8Yx3ry6zSFy3nadxtQq6wbPze8uyGnd5YqjanZaNaTo8GCihobyo2UF2mkHPCdWZp1SvSR5P",
  "key38": "5nRKH6qNrdCsjiWoEueogF4ayb6n5dYXp1pMJVdF5HEVA9mqWCdaGn7Dr4RKS6GsKzoT33eLFfijyCSEYp84wj8Y",
  "key39": "WEhjAntuk99AHbbTZFJSa1rCC2dzuhrf5iKyQRWp9iWbsQyBSESVkCir2D5zz5ZnyevofNaEjKTzVw2UqWtqxwW",
  "key40": "r1usZgHzGj9zYE4qM5fa8j87LPAf5G7zjuEjsXUwKDFaNAMSBNBA5299Ui4mK83idpbxMNJTxdNtnsS5c6hGw2d",
  "key41": "277vXGBxFLHqZTjnYMA1twStkU1P3XvJPNiwjKGhrYmRnUBTCk9F3wfpzmdNXgvvCHnRvWa8n2USMN7gZoBmGYC8",
  "key42": "4T5tySH9DFCHG3Sr1JKt1Mkbxp9UfjWwXTJPimz7dB5yxdACHUutoM8eReBo8iuqK45kjCr74shmtMnNEEgV6E3c",
  "key43": "211nfBP69pW6r5YTc2Lwn5fSX65HQpSue4SVj1rDNf2qiMKWTGsihBD8nwgoosnaeQqoz3NSH7V4TErjQs6irxEh",
  "key44": "5cPXvHEUAtaRMtWdNcp9cz2nZQwFFMpKUXdhwbhBF1B5HjK5YfhVse9xBg2xqh2sBPo38DMCv25BZZGg5hijCJEo",
  "key45": "5vKoweBgfNT2Zw9AkAZLzTHT952n68g4ThwRDeeW3BBipL9hgzT14Gu3v8THCDTtDgGwEdpfWbBSoMBwX73onJpF"
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
