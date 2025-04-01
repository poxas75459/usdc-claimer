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
    "9VZrKWkcCtEjuusHZcyiFsT5ePpMzoeeB9GaKcu9oNgUwhj3VkMbZFzjRaNAEQhSADcSs531Pths1TiNS7fiDvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WosmfXHCH2TwqS87LbZPu3DhQ2yY9iyUEzqfDXJC8TzJHVVVCJEmspR7t51HDtBuF3MeNaA1pDiayECNSW7Hho",
  "key1": "2GF8v4zKNyJvybrx7tow3UBupJ3F74qtxraiM6QEbDAGt789yYkXVrUYvnfuFFrj8Bx3RKjc7ZPF5wWLWQvergAa",
  "key2": "2BrAB3FGVK8pEoYgd5Qwh4DBcrrQcNqZSAbF9ri5dRbDkWFg17rkBwG7UVvp9XT5U2QcsXAmM21d7YiB1LbJcfw3",
  "key3": "3bMKssk61LimLsihTRhNbgbTSESfiNJJtBXjSmzcMT4cc9ez8LStDf3338HS6evT6xNs8GHVBkRtr4jjcb4VphMg",
  "key4": "31ifAsx1Gmz49pvjgLd2kHnMTdYdt6hxVMBNPZDeDBoZuK9mnSBf8jT7s5USMmPsD1cREQRiJMgAbjPK7AJcKhCX",
  "key5": "5qBMdApzMpJFznxvyEuBNRq1Cq3RpXCTRcpwB9BXfDtatEFxWK6iasrnGtAVLkZnxsCbjV8ijLn6gBT8Hbd1jZyM",
  "key6": "3A6YNqfdrT5qcrGVjWQsXmPJL86v5u8fPrJ1RALWoztHdJTpMHyKrnF8Zg1UdYKPhYn25ZEkFzyH6A49EtD1tUZv",
  "key7": "4KM3z5NtSZyVBFHYWV5PP91NwQogLqG4XyVuBjgLp4UBZ2j6V8ZZyhhxbQFSnyaHbEMjxuHzm79mms1LhhMhCG1d",
  "key8": "577VBTaorpS4aT2E8npCGvHsuSP27Nx6D6J7gSMLvf4FWEc2Qz2TG9URCwfh1AsMVcj3w4hcDnfjey4rJDyNQYie",
  "key9": "r3DxqRQKRPzufbivJP5Z8rr3Ap1T2UdP1ZwssRTG86QF5GXcpvyvBgQvoZn2cVUC52kPZi6QDzmw2fwKdyrF7aW",
  "key10": "3H67Yyk2pRcP5wuBiaibnQxgRZmEwD1Yke2sTV6FTSnUnhRShLD1daWqnwT1b822rnKTtwYFyap3Go968Jogepks",
  "key11": "3mqpViqj3eQYQDrNUqajgxJfNRgYE3KYQWX9HEQpb65jjF62r1k7PhjAcbXSQPYbxDHU8ZYKe5eitSMgwf3UPSpa",
  "key12": "4qSBnq59a1uBq5TWRePRYaWhyrdANj7UAmzCrxseks7FEYZofKBpfkNzvQQxk6qqYwjdC6gZSUXEwMZqY7GTUsVt",
  "key13": "bSgTJ5jezkPCe2iu7smrBFz4o8cR93yF8ewYeygV7Yt9FCQApfRfQPGJAWgswunam5mrnZeejrfyeGbeDteHthb",
  "key14": "4emnrxJy5eVLy42pbqm9kZML4gzxN1izd1tJKheweMyxEUXKiXSiLw7RzGt1BC8NM3d5X7xXpMMXSsqtuy3aQRvx",
  "key15": "2MMU8Jay8nDqCcEo9QHWqVXsUWgmzwXWLDEWpdwVtkqUoiAbiFpv3uxSZTMruZkqUTLXXsdcystTWdYeSMdc5KSr",
  "key16": "6Jhbt6MQrowb4nU85DkX5rsZGf9MdU1ttEsXBemZJMDkcRYkks7wdJkJRjnsHbkGENFiQhFYNVjPcSFNqMeieyE",
  "key17": "ZtDeS719TDCcbiHYaWWhK2AyjYak58gXcBGi7iXAhEwMQucjTQuY2j6rAJkWxVCeL4rVosFr2M4jfWAErP5rbeK",
  "key18": "28B3vuz2Fd8jz3S2z77jRzQ4jDykRton46m6jVu5uDAqJzhLiBuEu2mvBmSf7rkTyPz1DXYZiogEKravkjzirfY2",
  "key19": "4f9jHJ6xARp6zWouDN9gfzXoYqBDEzp9NeGQYMWopwicGCxrcFmqSs5FwZoWYnY7STMy8UE4Umceg9D78kQ3C92q",
  "key20": "2HJRgK6V78YX2oemVv9FfvvD3YCofM8sjTc3qKQYFD3S2nx7BmcuvbmZzwmPKDWHhdg54rgFeUHyE8GzQUhp8dLh",
  "key21": "2EzFZDaEDWNrtpcjJqq7WY1BwAqeYvqcJuSTQkb1xuGoXTGjh4pRKh3rTM9wUtrHkomcsnCMAbaLfs5KHbxD9jqD",
  "key22": "5EHwha9BWeMPhUhYYkZ8Do1SUesucxrdfT3XavFEVkdRGrD5L2FnDRf5HLQmfbfnSLvKHNV63Bvvu1vtyddZNV9E",
  "key23": "4tNWD3Sb7NxtiW2Hz6u4uiGtxFzJ5VtBqvJqrP8Vc2L5Wi153fnjz5Ca34eeBAdWLqELn7AKTn57Jmo3LuzSpDec",
  "key24": "44MHRwKZTLFhrUw6h97M6E4hKPWKW14bUn9ZAdBiZENtCamjMrNoNQwXmYkav1mWVb4dQUkisHVCqysZV5fvWd2v",
  "key25": "2zzGbSyjKYmLicjHRK96KuhZXiBwhZxiTbLkdcs2AuaiqXQzxCoX6cS8rxdZ4MnYGqYURyDA3czxmLzWxrRScYgy",
  "key26": "5ZUR1c1eFt1xfbH1ZvFKPYMFkcQ7ex5YaPaoyDkMgM1NfN75QaH23jUfwbVXkCjQy2mPPLq2h16CKjbjP4GMbcHt",
  "key27": "5yNpWmbkBdP7TG9QvZzZJ2fuHX42hKpCk3yWWCGnjohjer1PdQZzvsnnsT6yT8EB5L7DFYUQdnhp9GYSKKJJ8jUa",
  "key28": "67fPn4aChNhtSRT1sNt4iksRaSb7o4RhpWK7pRdhodHfwx42DK9LGj5a22UCBxD8mtLU2VvL8qoz7SG2zCrxoNKr",
  "key29": "5paQd2xiMKZnQAuY169dbsXaTrPHRn5as9W8Z3yixfDHrPXauDJrFatXqAxf9fCZg4wHB9YjSvPWSDh9nT7rW6SE",
  "key30": "2VuHiEDfsbtEp1NAzdhbJKd6VEHT36FxXQYtGwVu5dNTjjce1UovE7oQzB218UByrPPTeBPRXKbPi9dHxngNvwQY",
  "key31": "4eUFaF2ryMvTYxayFNK48g9wHwn4GXfhAEFzHSEm6MpmMbshfMP1o28Gkg7eettVzZqBaLkE7wqyNBYivXHopnjo",
  "key32": "7rmUzgo7CRj6Xcwga8S6Yvg3Qc3gSwVrsVGy6M3WXG26LhVXgsFwMsyHkEZnL3ocmgVGWuZbturRPKzaLcg6xHy",
  "key33": "2DumQszZnDGyw1AvmGiLNJVnkgom1rS4ShKqhXs9BpaLPijR39pDKPTMrzejaa2TCziQvMx5AWpKhCw7XBAdyqDo",
  "key34": "3F8FfrWowVer1dLZico98Z3qvMdDG6kYsmPsHJCNBmuKdU4u6iVMTDc14U4LXLus9TNef8UdwgWWv82rfxHZmwmw",
  "key35": "2sYYkVnLCUP5T8HwJTBsiaaaRx8h7ZT3wKAVRvZLj2EctN6meoAXfvGAzr49k5t51x4Ca9SWqx6e1XjP5FiiBbNn",
  "key36": "5tARd2yMEKVSe55oLHmdd3M3Fvr4wtxmTixRxp6SaMDWGbCsfjJyZPvWtimeM8eAZwr5mgTU4VmC5KeynQDiDCnt",
  "key37": "378aXLJECMpbRUdaDrBmYJ1QhYWuzgCcWUNjqzjZjNmw9SDF7mWj9K24GfJPEcMucW1WLkwj3EomTYy3EaS1tnaZ",
  "key38": "31UbSqwPnxqLujDbNdoEmzpZygbh2zzvaELtcWgwsoxsXFG9kgdrnfTd1pAPdCLg3bya4fYofyCz8CUKDzEZva4A",
  "key39": "YyTSYtayqKxtFQddi1VHTKM9BXXj6sSQirmzAqjVnC5fvaXuYhM3jwubBEMFWBrXfQL4U5Z9tsj4wKKRKj2ZxxG",
  "key40": "aPreEqawZiR7M54JD7aL5UCL3sm5Ua1DEjcNrbmWn5FXmSXFuZFVcpWyZPi1WSVpFVEk3NDVBrTSrAdiJhEGmN7",
  "key41": "23cmEi6pCx24KSzyHDkghAUkt3ZNYZR1LH5n95oVkhCMTVsm8dhSvDm4CLGNmeqr7RdC5HzvmBjf2aMXwGBwFHE4"
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
