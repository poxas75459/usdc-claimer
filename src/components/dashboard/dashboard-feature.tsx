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
    "4bqqeVUCNkSWpPEho7Vh49ASu2fhPaNP1s7kMRYK7waK5VBJbrYd69fP4D3uDw8K7MGAsnAawrusnyRHtEGzgJat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYeaq8a8UrzdocPa6gm2qnN6egHh444ZDMPAFfKYR4MciKD1iq61TSNkjETP3qmyQ3f4nX7oMDTdvWB74EQE7Jt",
  "key1": "5XeXyiD6CmyWRXQ3z4VqWnT3frhiZvq8D4NSFhzy9aatE6fUcUL6jhpy3nniBd7B2iZY2eRXQwpkUrHGqqmQT2po",
  "key2": "3tQGfi2HSFgvLTrQfR47Yvm2WGdM6wuYnX6WXPQKSkwAkeRQAZr4oqnCENkUjG7WprVUhKLNBo4YzUFLZiFG1L8x",
  "key3": "42HzQLvpLsc5cWyLTFqasiqkpNPsx2tr4cVa16r2GVMeecPgqUsbb3Rvk1rKeytTJfgM8GntctYZP2ZaGXdvbobv",
  "key4": "2vqko3ja6TdPCkB6o8NxG34n2edRbGP4pa7PP73WE7G1i75oXzvENyQE4DNHzVpPjoP8cu5gMQyTq2ztYFadD1nR",
  "key5": "4R6s3Q2cvmDSfUgWodG2dvg7xoaAdcC52NCufBfFHyDnVpbLsvRyuX3QGcPwjoX4SmZXWSfYaDBEoiGzPJDzcRAw",
  "key6": "3LVDfQ31rrK69u6F3DSeEPwjkHbcJPyBhdSpiM8rxFuGPJiARQivcuZHhexW15xASxuKbWiwb5YGJPV8Spm7TtrU",
  "key7": "4xr6kgWdQ25aHfvJwpzHCNWpbSwbLotj8wgBBPtCV1dik2UNV5Z3hTgdDbto5AbcsasREbctEDnqoRvj1Musni1s",
  "key8": "2dUjxawX6BQNbbk4nj6HFaYqhtK8v7QVNKwbMAFGQmR1tPJbqY9d4JHgaorvLR5bjrkzSjqsf7ZquHaqErmMDyLN",
  "key9": "3PswEfGo68BfUpE6zyazyQkPU4UGoBkaQ8uXBSkfVssofvcJQ3LVQY1UNAsV4nYLFad84ui4xsnxKpKg72JGUnfM",
  "key10": "62g5ZaSV6DNxFAnbD28e9ZyexhQAzCXH4i8E7x7kCrkFFn8syvsNU9ynDudA1XfkrmnJKrYEQ9N4hC7LBHujbTJs",
  "key11": "5tboeueHFxW1MSNPoLhDhzujJ3yczZVEZC9SWysdjLC7fmNDksbqaRzoZ2BHZjzNseEWevvZrQyZsDQhSMpa1N8D",
  "key12": "kSNisU1KV3kcYZZZZa4oQahhSAVqeeg1bT2oGt17zdWJe9KeYsb3V3JRgF9bquKvL7ieCNSfQUKrhZusqeM15Ya",
  "key13": "3egEeykbqe1kf9RevvFhAjHGb8xyqai5tt7SYsmbXR8RN3iqMif5rTRwC7gw7sCNCxyudJbWu96sXm1XKbuLXYdG",
  "key14": "5ozNBNFTSnrxZFJQamd58b6hCPxTqyZmoLCdWWgxETg2xg2GXRmpqjqFseWWqde8DmkubQURQW5czANpiFrc7uf1",
  "key15": "3ebGxajPJU6Q69TUAvxKKCY6RWryGiwDjHhcZcuF9FK4XLwu7H7cRwGmczAubgspDiAQ7JMfsQ8ti8gAYT4oycaf",
  "key16": "5qUweDCnFovG6BchLdKGtouBz8xhDZmfe9oAWHZpdGbyThvwdzngXfqiw3goVpB5pEs2fpwmktCAbTDZ9Pz1U4mG",
  "key17": "2M5Jnky3cY6yoxWkqmLVq9CTd9keFBkZiLjYXjrJfFEiz1eRAfcSnazveiFZVkQ55EUhYwKVRDpHd37ZdsEg3wu2",
  "key18": "5UvQHWjmKXVZvqY9sSZuVFDUY2wMPB7DeVmoSiUF2e2wZZQjM33STQdRtCv1EeGckfDh7jpdDV9pQ5znATXRn88P",
  "key19": "3RnqsUvXnLspVdr79GWharMNsMJfZdK1NfkkMHvK3RK2RQzGnPVfSrvQPYj2j2KRuwQGPSFXXkdu5g148zmtadFu",
  "key20": "4uGHKqLPcBHMJUimac3qsvHFoir6QwhN3ipBmYH8hQQ1Lp1tPNS8yLHpuue4LQbG7R1CqNAX9W8EDwccGGimceTw",
  "key21": "21TS7kiW5fxDZqyVupvoHwak45gUSEvebWX7B8beXAdzH9rfXzjbKGTeiQr3xwBKL67qUzuDmqhUp9opXTQQCV7D",
  "key22": "53VDDzXBy9HGPAm7DRTASmu81tc4Lyor8Z7QTZnYDJmw2hwysmWYC2xM3zvh1rVdmD2mCK5LvNHduunraxgHm7JK",
  "key23": "27qfDPi7nCXvXTFgANvdF8AB6bfM6nscY1Seii3uHp1QkKmwe1mjZRuXyg6xrAbGmGFuzjU8rGhNQ8uVEmYcWCzM",
  "key24": "5EZ25xnrE9CuE6HgMZ2kCNADJbUipeHwhcP68sAAosQ3JqCyvRnsFuBYgaUHpGEgk9hMqqbiaoUxgE8CQxbqcg2L",
  "key25": "4vtmmAj6qrK4d3y9bi48VJrQAfmySebKSxSdRpat5GwqFuBMYrcqF5f4inphCsWGd357VuhdMqc8w5R2Hr7iqTNt",
  "key26": "5nbY5YwpbdQhdTNjEUzAbPvqDDXCB9jj8YXzU7TX36WbKyoQev1QZhScKJzWqyn1G75WG4gYdmZsEPvShruhciZF",
  "key27": "T4bdLW3w11bM57pXUKuamhWvLHtCryihFDobwPBLB4dq2k31XTMRDiSzPYWUL174MczEY37c2CybVSv22U8XvBY",
  "key28": "4aCxRo23XdrAq4Yn3gqcVaPFtvzP8FueG8MxrKX2QVAcuTyafd6PULVC9qbC3QkYhJKE15QzF5YcZxDFHkrHPGq8",
  "key29": "3iZkVr8v4fRZs6NdB6hG54uP7to8EA6k21esu74t7Txz5BDr3uatfVYNsUKjjngC29bUvYf4JJPZxQ5qPtHMPj6W",
  "key30": "2u7sndk2iz2BX9YzNTyCdrSzb7HSkAnMPxTQ2feqVXnoGR37cieBUH5CvK5ZKVAGWamZp7pJTPpoAPWiWRFs8Ayv",
  "key31": "3MQRoayTffUntQX2YzUe5kqxd9BTSY9WWzVtpuPfMFhY2UADDRtoQH6yoheWifyRLXGc3XW1y9MmtXGagcPrBxax",
  "key32": "2v1FG5z139HNFbM3bkLndW96KcWHLR8GnNZa8yKfZkwnga63Wc9Ffy4vFHeTUZ773fPJLVRF6pqRXWQXmhhhQPPu",
  "key33": "2ND5u666wYZB6raFQUrfyQikXaGKNFtEw5sjQsV3Xy5RyjEirfK9USopUYgTUDnyC7xuJzdNooDLzcJCJnzbshQu",
  "key34": "5W8wRZCk3g1VwtTqHjCMhFmgueuZCF4ZUyYen2frouxkEZPBW1SCaAV4u2oGzssiC6o8nYs5vsSCZP4mqyto97fP",
  "key35": "4oDYWq4M7Px5vz9AbWDEQ1ykN6f6SMDHn4B2Q6DphAnpGrCksxHmBPPLxGDPwfHvG93AWw5kV3YVdedk88hkQf7u",
  "key36": "2ucMUyJNUv6Zp2tr6Np9di4gbeDuWxw76q5fwg9vHnyT8EJD8TXNgQZ3fb4Nf73UpHW7w1woSHSKTcb1CmGjb2es",
  "key37": "5HicczjQE7gppXPW8AwgFog2esRHzrD86eHVF6qYRPJoKGEYwEeHAW4qmXtddacupA8X1p2aDNRwH7rg6XZ7L3xq",
  "key38": "5FY9GwfCXdmWuFEt65Kt6APc4XGeDRdpzNvVcizaPGsrChMvvAMAa1S51oVJGTRgGDGNrn1FN3cqUz6bo9fBaPd7",
  "key39": "5QY1cb5ASHnJgHq51F1c8P5HAh8DhF2kFVqVuAsjao5m2dGH1yAdeVaf5KfXitjVdikqXTH15Z1iRE7YtERFhCSh",
  "key40": "4A2mrVbhc4XeM5F7kbKoTzoJF8MYzMKAdVu3qHofnG2uDn8KSVTqWrgs9CTJwqXKc1c8v5TWuPsWPMyznrkoqHuB",
  "key41": "5LgnWEWbh9Y2Xzp4rhQpjdYvNZGGaXF5cLBb2VjRUEfioMEgGY5Qb7xWS3UTmFhLWzVWjZriN2ZYYkp3W2W1HEEd",
  "key42": "33HRL2DzvhUysZCRirEQrqApCtXwgLPMHv8ydChBKeakL2QNvBbQoiCh9QjHG7pCFp1be3gH2TuKGzH3AUCr8pc6"
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
