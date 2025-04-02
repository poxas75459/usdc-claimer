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
    "2t2tQ4H4g4Eo86yNBisEBQnu71EBFNeFLtzKNCotejrEGpp87pHypm9MUURKZfnxmUB1UZa6BJXagh6zwetqJLuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jVdA2UoxaDKnQVkTqGaxQSJBfAivuwRmhFi7NnfBXNoYMkEHmQpKZFdb7B3chpjgNLnHZzwVkQLy1J1Y5MMaYxz",
  "key1": "GRoXEDNVdDqoSfKjPyzPtZCJw7mdr5NgCjKyezHBNw4DsYVN9KYG5RfeLZVJvC38GXvT5KFFuDhtvsbFqcxXM2i",
  "key2": "2vjQSTaYEHJBkrFDLECpL2vTtbfAAvmcLyWos4RMdGjcSqbyw6B4gM2JbHakFQQ9WYjXmPZjsjitFnbMLVsMbwNF",
  "key3": "3NP7nHFpoRMBttVXo56RrZvL8D5HaatYnXMsqncFEBuVNH113yT1anh2sJ5Ur7s3VUyq4jjzu6ymd9FyGQsBRcSA",
  "key4": "NUy5ciwoh19KFPjDP9MddGe3BnpQSK5azpYoPVwBtg5caUxZCyr5EDZ1AEyPHmEmex5dj8pukJJpn2fuNP3rhYM",
  "key5": "PCjgXxoNdXQ3PafWb1VvBDFhm7KkrPeQTsvgPB4GkrWDVqtun3BpKW7p8n9GqSv4dj1hsQ8BG6T1rCVMyngZQzb",
  "key6": "3AaoEE3QEaqjBAcdZ3VfsU1VxW4wQM71H4PLRuEQxcgrLZw293gTBzrZa1yXVF1bUi1kbpUzaKi6Z4cMofCoJcog",
  "key7": "2XJiUTbstmhsYpj42snNPjrFdsb2utjBDSBSsnpiHe9rczH4L8wHLo1LqoAmhksoaSWKCZQcbM3JocMeNZWaCmbU",
  "key8": "4E8CJD63TAqxnBTW5AEovUmdgVsAaxt7cUJp7CeE2im318fmJi4SY3LpCDVREUnZowMKA5e3qsV1EMZLYvoJFF2X",
  "key9": "5jtxoQFQQaD6GbKp1ckdf8fyShUG5tu1QbiwhziQfzKK8jV2QharH4rqyHyCVdBZKdnAVmGMcWBt7LN1vSiyeH7H",
  "key10": "4PTm8y1E25ojQZwyYAkBLMhJg92VFj93s4PsGRkU1sapqKY36YtfQP9MzbnGUYDjENoF7pVuJFtPrxC1shTpFdv4",
  "key11": "2V13ZZbU2vYVb8abG8Vu2E82jWitRS7AYhB25g9UohWPfKBtR9kC4Fb16WYTNRm32MWp3BhMT7bSxQiGh62jkXZp",
  "key12": "4Sf2GbGacgvNQHwahttjTjZVPE7Xhd4z5w68XUXPVRz1g52td2isaQdKJJutkLbEPdYxzC7YNdSKLkXRc2qczqBC",
  "key13": "4WP6WdqJxmpFwrQgtNK6Bk3cFuTGtoNgrajJTgGGYS1JFBjDxU87SdDVCTiw4WVsnRChNDtSKrrZLQ2mzYfNmQee",
  "key14": "3fU438eVwE8xYSZ2AwtMWEVHrJ24dKATNQQ61ujgune3KjRkJhbEmD17enJg7PNYXExdvAWrNv4rJu1K7zHGsKBG",
  "key15": "6BBoJpGiZE4yoDeA4eWHKoqY3pRF9w1VMwKNyxoVo5W6K2a2hw6cxEyMZAQNYBCD2EyikQqSzUE5Ub86PuaHYMZ",
  "key16": "3WcVBdww2tg2oQTDM9fBQsSUuP9hza3JkKeBUhv77VM2GfFtZYbkNUqWGpaK38Jm2ZqyZxsAJ1pZ1NBQ3EK4vk2M",
  "key17": "Jn38LX3X3vMhmguUfW3dkrohj41jiZyhEYf6dtb2HKUgsEhdWFqHtLyb9DU8WyhyYz1xGMXdrZnwQeFvRQ8aiT9",
  "key18": "3iUKi3zkwW7x9K5nt6hFf7aB5xQfqRNauznbDAWzKTrmCFwctMfEcdjTzVV7HAyUgGMeFmMDAzjPZ5unhfAX5vRm",
  "key19": "5ouavMNbDrZapbsJWHopWbEx2TmX8pAEyfrXym4cTMyMQC3D8SiBAYpTTXLrwYCyx1ar4Q4v4mz2SFk7X7BYH2AQ",
  "key20": "eUHgTRurGFYhPrf6DqCno3J9Mkdk6nrtxyd6KYWfXtw2SnJ6PrawSCMqMqdEhbL6zAcH6UsK1HcKiox2ujTx7qZ",
  "key21": "5BQtVmBEUK2eWLSwzdrKyrxWVDoZHHvxUW2RZdNKDomehqainVP7FXow6DsftEeeMay3cvj6ZV5gaVBwFXaGxaog",
  "key22": "4aefhg25CqZTgW7ykCaQbQX3sE72gMfpRxs86WLk52B1n3NgujMeR8Hx869TVmzqFa6eVEAgytiXrCv9sRSTU6JH",
  "key23": "LmvoaV64obX6ELZLXvpqQwG88Atj3fZP2rbmbuUFaY47EQHtwcKuy89UhK9Aj6QE5trM3cjvkLEJa5sR8d6MNXQ",
  "key24": "64kkgZiiZtVdPtduZacepCADeB44xJ7UqNiFEYkHfDbUCSKgHc6ig6sxLyrwPYLgaevp85hwoCfT2oaqnMqNMjQj",
  "key25": "61r6kw6qfBerkPManqPQoNHjoVNmzaQoQxvApk7YHs6NQkPEYHE8JWpT9Zanf6NhbNLVmVGZLZHyuTM9ZyRzSaD9",
  "key26": "3iakRzT3fYfUtTzdBzvakJvmSWYAVmNmypWuomW4m5F695Kx5r21Rpf25No71XfH9tuN4cR4ZPaUzrLn3ePf2iyD",
  "key27": "2mHiAGpMAa3cJGnQ5R8Rr46GUpyjgpKWPZpvH6zY89gTQ1f9cxHo3YiqoJTcv1VEGwU1nJ178J6Ycc7GSVjzfBeC",
  "key28": "38jP3qSgXJCisuaqyaz1HiCe527PVF1XiVWj4K2WtCH2veuNVt3QKxh9AmFfMcrbqmF484sfgQNMSWyspxPxKiAS",
  "key29": "4d8qPkR9S9E2dwkxKRLiytV8rMwaeCkkd9g2LNGd8YaUdrnwnT2jNT8ZMgqSL1rm2T68XwaPr1wYQBATnjnycRKG",
  "key30": "54h8hKwqebTuzXDPokunnyAFsBVesKUvddQ2NptFAAEpMjoiRgTtAsdxfgqkAa1VnyFHNTfVWuBSBvzXcsgeVxa7",
  "key31": "2tpfWfphXagi8BFx8K8TyJRrNgMcXoxvPTVuErUWybdsvbo7PkUXxeVpuyKvkikgjGtDav9wcTqDXXdXfgGiAFWj",
  "key32": "5n5qw8h1j8JaL3oLkpdXDuogQsELyZbkm3RDPH6po17m6rUix629uDCUfQHyMHisJ1767cR41aD8rH5NfKBmhYfD",
  "key33": "3rfbs4Znr9e6q4CV7C4HPyYCSbxEgYBSHDK58ykfQfiWFGav9eHDZWRMt8wh9YyqjTg2r68xw19piE8KgjxwCq1y",
  "key34": "4DsdYY3ju4i7wFSMv4Z3K6U8FVgzi6Dj3ijz8JFMRmzj8n98QUis1e8YLo8r4Bguy9G7HJ14kJ4RnzxtRjDAjMcF",
  "key35": "5sWTpFTQqUnHPeKZnMCdyRZKPapqN9Keq6aNrDmGWmXM4LXNSGv1jkBQqqshDwrpbEEcV9nvrn9vMizYkhFjTAxt",
  "key36": "4S5AqDLSq7oJnGjZtGTLNLadAUiXhKi6HQkJnjXfgwG3dWg51pYjzNcP65pMhu6ASvzppNzqieVwQMsnqPafHQQx",
  "key37": "21CnDv5AejWfp2LhKVgjSuRUdVxZx5isw4egifYKB7jsRCtX7uRn6vqyNAWEGCvq2PkrUAuaDJYyBnN7Zz13UTvg",
  "key38": "1XkjxJDDMDYGXA2qxa1Q6vZWphnvXeMtfiBgqEQDRGqUK4EuAnw3gTgvtcgxJAHMwhZdFCgsdazX8eQJ2LW6du4"
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
