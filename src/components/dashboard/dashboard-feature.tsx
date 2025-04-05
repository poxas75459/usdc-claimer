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
    "4u85oJKVNHnMANcRznwWsLWLTuRyrpwSgazj8z36fFS7ego2hqTpNSaA9Ccgv6SbDqNxSXbM96Gn5RARNF3LHxst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UE245a3HMBVwwW6xySragmr1kX7B2LNvXL54GpPiZ2Ux9kndcHhEwvfuJouzDyJiY55wDgSeMBKafrnbetYP9sK",
  "key1": "3BifpPUYVKrCsn8nUskKaTFQPZ4d4bcZ2kgEksJwog4RazFNBo1Bt56o9H6qdavZ7WUmTcDWcnYDkc2qtjbuz1em",
  "key2": "3QoAjnPBrp6B9JPfo45Lz9XdhpZnaTjHP86XxFtxkWRkczFF3r22wp6ZZGipU1rCd2pitbvV6vPCG3HPf5QvE4cW",
  "key3": "5NeVYUVBmNdeKMpj7bD1XTKAUCtadxajUeCCJ276CpbNKZsL14NezzMY6m6KP6m5zV9nF9ZbbC1DLnUJm4exbvQg",
  "key4": "5KmLgwenbexbWz5j22PPeb3BZFTi3v2jhrw4wXwGLBTTF2KVn39ji3LqbXNGQSchGH1LzkYwLLab38p823eoBazg",
  "key5": "3qVcq1anieekrYGu7vtasmNDHpnCgHkXfdBMFTquwXqmCX2kWvLTsVQYJbaRzDvVJRh9TwT1pfn3UXXDPHobbe26",
  "key6": "45xDMvtXzjbGrhqM15G7NEyt2xRV9dH6p3DLk5SuzzaUCUj77D3ZemrYnmbC1cn63XqD2aJfn2KnnWcgbg2pC3ZM",
  "key7": "2SNMqV9Pxs9MgutkyqLj7Pfq9eJ81K8s19WVvNup7mbU9mmLriuEcSXU3rNLBdNzZJ4hJK84Nt4fpJzi8XKYibhx",
  "key8": "3ADSm9SNaEByX5NvjBcPF1zFJNZtSkrGnf4hgrnMwyMakZExfCWgFxHEfoJrezAjkkYtCp5Cyt9SMJMHzdYuLbmq",
  "key9": "3N4KbjkVhtPEyh3susi5mMesnhk7p2A2Fs6WBbG1mRssGKwhqAtZQZL5XqcnVuNVmLZsfHkbJqZoEUbc7y8e6uuj",
  "key10": "44dCZ8oQ3RaYcEynf7Rqup8t3zMPBRdjYaGavTgLya4HnAX49Fw2gYGRxwnw8UrvoDp3xfZG1a45W6gvz8CUFBP5",
  "key11": "29waZ4Y8JqjZQ4vuZeMjBGPFjdeADt8qJsRUvUNsc4gKwqPGUtonfyyfmAS7DYd7cygEHy5TQdNVdarxcBmaMzsm",
  "key12": "fPdiCeRmUWjdc13f7hdzaizgvME8wCFewopqgu24X5dyQbd6P2gN41WvM3qDJHUjyBHuBS3k5QDYhzgwyxCpHH9",
  "key13": "3Us43ebLvEUDEU5rm8KosrM6Pv4yHhmmG1ipCGKUq1buMySWYP4dhMzJznmskaTMNiu32GWCt2neyDdN8fL1dTgA",
  "key14": "SPQBsSPNRUcKrBKVDYRmo9dZRrxHE82mo7x3RznduNVRtVMf4rpD6BqjAUBpzK7YcGaENBYYDvgrUumdeLNdiPn",
  "key15": "2RMtwr17LCMEuH8CH6PNMEVTrFPf3GqrMLrhbZJtTDdFGK4WBmwA7zz6XFCsxJwEKzDsWjC5rVCRtKVK5KAspUFX",
  "key16": "3kENDg7dMyjGQd686WVChdQYdtpgYSK4R2fmeyTXinS6xZkmnAwu1KZkhvCrwG4W3PCBXNjkw74EtMh7B8TYnhxT",
  "key17": "4gcfaNjgBEWT8VgxKMNvebsPnK9NM8YZCR1a3U4x4K9uBN6UaH27mVVpnjFi83zo63fhQGas9tPerHeZdP6hY4Nv",
  "key18": "FPStDCYxvvS5RLnExsWrehMK4o2DkDbmu2LsH78CQZCaQx4LGL87nHuetihEvusq8YH9wKtL6XD8d9wn6Ds9Xsu",
  "key19": "2XVerLwVLzYaDLx2AtuhEVDphyRAnTpDeSfJssgrPQKW5WaTehdiBtAoaN7JFefExyrCChaDyyTN2Pa3grfATbdX",
  "key20": "mRTnMJyEScMzkjmXrnNYKXtCDRpUeJYTV1mwQZ4mQQbNAh89U4FLw6jbyYGRmPsNwmswksBEcBdoxZDBnit9GWz",
  "key21": "2GnwNj6chqgJ1Pxebqa2itLJEnWXfFBTiP3PYX8nW7qPRFcD9aogbrANAijzHYgmsEEPXSW1Bf8zHWmp1SCHrysw",
  "key22": "3HnArZJHjR8Jdwdr5VYUQW6mqYq7yoBgXNFyQYYYrMVDnDEN24ensvk1swoiPFSNwVe5kUUdLnpyxZwxW8ivAhMS",
  "key23": "3JYiDhZ1DSdC5SQzfGoN9grDPBAc7bEwNWMHwkGaVvnTnwByf65s8bTLnLuRiFCvN7vHfrWbQxTSc1u72Jp5LsD8",
  "key24": "mFw8TbC2biQDveSzszu4gFNpuarftzSsvput4e3owUhqsKc4rmAKDPQXR7Kr2xD22Ettq9RusR8XXWLS97e9ZoK",
  "key25": "2n6zt8xmPLK9YCYUmSmMzDpUKmbUUYFkZiwLtozFxtcdcX5gAsn66hw2fj6Kh6af7J7QH9HR3xr441okcKQRegjg"
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
