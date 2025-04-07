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
    "9pa8C7Fp7vMKXbonoiFWotMK3mRPqWAmrWotFgiaWtx54J8LhYX1Njuhwv7Q9emLSFizBhgH2D2HhTmAqb2nkNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uyPPDfK6X5f2s2cTEHkBncRnusEDZyPdBgiJEEz8onj9naJxu5zB4UqRe5Sw6wzDoDqybbx9UnMnKacE3ReMgNT",
  "key1": "34LWKE8sY3cKrc3UPfcBqunKsyHCGXwdXY5tVo631MKmshZkWdtk5ZYyYpSnL1Ykf9BrB5AUbiDnC65d7Xuz8WHm",
  "key2": "2mA6jfNvvFGqHEoshcZHLBi1BuAjxTYMrgyvAqpmim36xoF1U8iQKgkbZWE1qyNcs9GcFwZpBK7A1wrdPKdY4wKR",
  "key3": "3z72GZPNP9T9BbwvUYKZ2LZDwPeJsPqeKR1x7QVDraQGygoH1G2NYq9muLvcUnRzjnWziGt85xz6s1sFsmaYtVDR",
  "key4": "5kuPUAFb8cKLdhUp7RCyW8v9czLtgp6WbmerVq8Xz66cEsRcfQ4QxE2SB8GXrRqJspbtvBXeRzCo72Eic5fwc2MK",
  "key5": "5Zk8NL2ES4MXy7V6CmQ4M4cNGgoHbem1GpSsKjUFqtxfSJXw5Hvyqv63uXJkNBimBNKAtaW8nELzDpp1m8ZzJnfG",
  "key6": "3MsCvJT69BLEdFqSsyaLTRJUMGxsrpNL6PZCNjfYeJDYzGHAJKsxaoJxkZNW8tt8ckCPkG3agSF8gqJwAVQVjsFz",
  "key7": "3xr95C7fCJUGKWjM8xSfzJxfzx3RPAycjWySNSiPkue3TogmYisAM2JBgczgktgRfXGDDeF1aq48PZocvCCCA11f",
  "key8": "4New988Qxe2G8xFaQGsAxtLSDJGsk48aH6dHG1SNYXpuGM5dPzkqiRMbcGsxh881Qig2XQT8qd3KvG58qitos2oi",
  "key9": "5nUZLYBq1PVC8bZhw1PwE3NzsAQKRecbyu23Hz73GucX851WEHbApzdzPc1sZh5Fb4k29r7RVVppi7WgrekniWK4",
  "key10": "2GGn4CEs661KKRqSKkwteBzRDHMfxWSkjVRJbZqbTsYmJXthzh3uGgPQSUvsRba4shJKbf4EZ4U53P2dc7PNTwhL",
  "key11": "3azmnU92iJyTYWUCXEYeUZM6UfMrUHKad4PXBTxW17C1wHZBZPNfQPczp9gUrbAdobruQnhYDGJXDttWSxFotqqi",
  "key12": "4kwfnujVhd7Zr3T4Ca1zUTPgkqfXYFcwdpT24vXLoE77erHTXnXweqY6xX3b66bpB86pEG4jwUpNfDzcaj57hQYC",
  "key13": "5JLYrQ8Mu8DoyHQbHATsc5TUYNJWCFXyPHCSr6Hw59U32YyqgaN9RPJV4fhoBaMwHgoVmpNtHUwPbvMaui3aV94U",
  "key14": "2dLntdUhMAU2cbX1dDyGLnqckdQ3w5PrdQc1Y4KXBRg7iejqwWHtZihCYYmG6uy3meTL25Y3NR256h84X48gqm4j",
  "key15": "5qyMtg98yAWLujhN3qkn8i1f1q5jY763sChGoXQEXFkt4n3BLhZdBMJu5sPzA8fFKJRZvGUdcgxhSEo1uRwz1gXP",
  "key16": "5GXaNy57L4icFqFQ8xr7cZBZxuK2tbJmS7Hi71CEF3Nv8WjbZgVk3VntEcSRLGVtxuwaRm4Fqk458ph6yUSF1poQ",
  "key17": "63wAYA29y667VGSJDAWJVq84X8f6eTAvAhDghkzVphPgnJeK2B1qnxSeHn552ngR3HiymEozrEwskN3enaTe6juq",
  "key18": "5Jqsp9aDmZE25u54XHfPXKRRVGwQDEt7LDW4EBDdVFqXQg5HyzbftS8yGXvuqXz4a7W1FrsxtR4AsEv5g2Ccw9Q3",
  "key19": "2awxbSqzXkjzJaaNvEHziobyUSmyr5ChCYuBj7Qp9rzKTTWhtYWLfQAxoRkFPz9TNB6Vum9KH6xUdM7H3P3G3ss6",
  "key20": "2PW7HqQ95DgWj1LthN86UtL5gzFYDsCUpXFuHyfPjvvpyrk9aB7mz4j8AryY1Rrx4ZBr4BXZwRUaV1NRbirzJp7g",
  "key21": "jbvF5jkaQDWKLP8jvKri7bZQ8wcRJmiGHCUfdWyCNcSXiUuXBe6jg6K1WUXpLh9HsCHAbYPo7tEZFjeZT8xijN5",
  "key22": "5sNhfNWkTH6g9i1cb4xx5fCEoyn5wvNVyZ4vFYcAUEPAqEkAMDhe8a2bgekM1ApeXCqjyyAJvsa3Ykw13oUdRvhb",
  "key23": "2ieNKtJ9MeHf7m5xfUpx3o87Ri8NXqNo5bCdgj4UvFzGkCS3akW3jTLB3SqTSaj7u5kkZCMfVdU69baCYkKvCiFc",
  "key24": "5gCKeyut7iBgDVWtZWz2iMNTW78oSSgz8kdFJkMFi9BifZr5W64WSeZmqrHwdQNyxDMVTn92XqTVqeUANAbMGtgz",
  "key25": "5ZnLNPsc36MtCtUcWBm9D1AAuDjtFBkzPyXMSCCiUqMAPzXKSHrC9odpdPzoEPD7QJCYg8U2KTKESs1byqjHpeX7",
  "key26": "vLgpRsevc1CK6BktQKtDcMArNASLucGKvYd7pFYDED4yEL1whd5pmWBMXaTQQAmZe3vu8rAwkQjk1CZAECde6aN",
  "key27": "34bsG9fgNEkTYSCb2K3KymFUPRHd4zGGq9NchsM1ZBkvMkRhsaeng56zXM2q7AqSV8sD6yko8m8rmAS1Y9YixkmQ",
  "key28": "5SAbVpqdBSjtXgezzNbqtRjZkkjPVhkox9T9JCu3JCk9Gp2dx5QLYsvFspcmBkRbRzsqAnxPkG29FV4fM5ZcEb6g",
  "key29": "EUNQ5gCiqRFYqSHiv1ypjGzbW3gG1o4pxNFxxcYdvK5gPZ4V7FVLvLB8A7AdNNpzJf2Ae2x5pCvzqAqhPWRHgp9",
  "key30": "3F7kCjXGbG2Jx7Hmg94jFP2jRWTNzGHHdXvoz62xZ6GF58FzpNghE8ZDEDAkF385Vk6n1XQ1nNkBK77DLAnfZFRL"
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
